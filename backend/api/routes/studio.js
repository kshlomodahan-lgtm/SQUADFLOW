const express  = require('express');
const router   = express.Router();
const Anthropic = require('@anthropic-ai/sdk');
const { sql, getPool, poolConnect } = require('../db');
const { verifyToken } = require('../middleware/auth');
const { decryptConfig } = require('../helpers/connectorEncryption');

router.use(verifyToken);

// ── Resolve AI connector for project (project → tenant → platform fallback) ──
async function resolveAiConnector(tenantId, projectId) {
  await poolConnect;
  const pool = await getPool();

  // Priority: project-scoped AI connector → tenant AI connector → platform Claude
  const result = await pool.request()
    .input('TenantID',  sql.Int, tenantId)
    .input('ProjectID', sql.Int, projectId || 0)
    .query(`
      SELECT TOP 1 ConnectorKey, ConnectorName, Category, ConfigJSON
      FROM dbo.tblConnectors
      WHERE Category = 'AI' AND IsEnabled = 1
        AND ConfigJSON IS NOT NULL
        AND (
          (TenantID = @TenantID AND ISNULL(ProjectID,0) = @ProjectID)
          OR (TenantID = @TenantID AND ISNULL(ProjectID,0) = 0)
          OR (TenantID = 0)
        )
      ORDER BY
        CASE WHEN TenantID = @TenantID AND ISNULL(ProjectID,0) = @ProjectID THEN 0
             WHEN TenantID = @TenantID THEN 1
             ELSE 2 END
    `);

  if (result.recordset.length === 0) {
    return { api_key: process.env.ANTHROPIC_API_KEY, provider: 'anthropic', model_id: 'claude-sonnet-4-6' };
  }

  const row = result.recordset[0];
  const cfg = decryptConfig(row.ConfigJSON);
  const provider = row.ConnectorKey.startsWith('openai') ? 'openai'
    : row.ConnectorKey.startsWith('gemini') ? 'gemini'
    : 'anthropic';

  return {
    api_key:   cfg.api_key  || process.env.ANTHROPIC_API_KEY,
    model_id:  cfg.model_id || 'claude-sonnet-4-6',
    provider,
    name: row.ConnectorName,
  };
}

// ── System prompt with SQUADFLOW Angular standards ──────────────────────────
const SYSTEM_PROMPT = `You are an expert Angular developer for the SQUADFLOW platform.
Generate a complete Angular 17+ standalone component with the following standards:

STACK:
- Angular 17+ standalone components (standalone: true, NO NgModule)
- Signals only (signal(), computed()) — NO BehaviorSubject
- Kendo Angular DevCraft for grids and dialogs
- Angular Material for icons (mat-icon) and spinners only
- RTL Hebrew as default (direction: rtl on body)
- CSS design tokens: var(--sf-primary), var(--sf-bg), var(--sf-bg-card), var(--sf-border), var(--sf-text), var(--sf-text-secondary), var(--sf-text-muted)
- NO hardcoded colors (#fff, #000) — always var(--sf-*)

COMPONENT STRUCTURE:
\`\`\`typescript
@Component({
  selector: 'app-xxx',
  standalone: true,
  imports: [...],
  templateUrl: './xxx.component.html',
  styleUrl: './xxx.component.scss',
})
export class XxxComponent {
  // 1. Inputs/Outputs
  // 2. Signals
  // 3. Constructor + DI
  // 4. ngOnInit
  // 5. Public methods
  // 6. Private methods
}
\`\`\`

HTTP:
- inject(HttpClient) for HTTP calls
- Response shape: { success: bool, data: T, message: string }
- use .subscribe({ next, error }) pattern

KENDO GRID (for list screens):
- scrollable="none" (page scrolls, not grid)
- [sortable]="{ mode: 'single', allowUnsort: false }"
- [pageable]="{ buttonCount: 5, info: true, pageSizes: [10, 25, 50] }"
- SortDescriptor from '@progress/kendo-data-query'
- Hebrew messages via <kendo-grid-messages>

BUTTONS:
- Save: <button class="btn-save">✓ שמור</button>  (orange #f97316)
- Cancel: <button class="btn-cancel">ביטול</button> (white/gray)
- Delete: <button class="btn-danger">מחק</button> (red)

RULES:
- NO console.log in production code
- NO alert() or confirm() — use Kendo Dialog
- NO kendo-switch in RTL — use seg-ctrl pattern
- kendo-dialog-actions needs direction: rtl !important
- All text labels in Hebrew

OUTPUT FORMAT — return EXACTLY this JSON (no markdown, no explanation):
{
  "ts": "...full TypeScript component code...",
  "html": "...full HTML template...",
  "scss": "...full SCSS styles..."
}`;

// ── POST /api/studio/generate ────────────────────────────────────────────────
router.post('/generate', async (req, res) => {
  const { prompt, projectId, screenName, route, connectorId } = req.body;

  if (!prompt || !screenName) {
    return res.status(400).json({ success: false, message: 'prompt ו-screenName נדרשים' });
  }

  const tenantId = req.user.tenantId;

  try {
    const aiCfg = await resolveAiConnector(tenantId, projectId);
    if (!aiCfg.api_key) {
      return res.status(503).json({
        success: false,
        message: 'לא מוגדר חיבור AI — הגדר connector מסוג AI לפרויקט ב-CONNECTORS'
      });
    }

    const userPrompt = `Generate an Angular component for screen: "${screenName}"
Route: ${route || '/' + screenName.toLowerCase().replace(/\s+/g, '-')}
ProjectID: ${projectId || 'N/A'}

User description:
${prompt}

Return ONLY the JSON object with ts, html, scss keys. No markdown fences, no explanation.`;

    let result;

    if (aiCfg.provider === 'anthropic') {
      const client = new Anthropic({ apiKey: aiCfg.api_key });
      const msg = await client.messages.create({
        model:      aiCfg.model_id || 'claude-sonnet-4-6',
        max_tokens: 8192,
        system:     SYSTEM_PROMPT,
        messages:   [{ role: 'user', content: userPrompt }],
      });

      const rawText = msg.content.find(b => b.type === 'text')?.text || '';
      result = parseAiResult(rawText, screenName, route);
    } else {
      // OpenAI-compatible fallback
      const openaiResp = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${aiCfg.api_key}`,
        },
        body: JSON.stringify({
          model:    aiCfg.model_id || 'gpt-4o',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user',   content: userPrompt },
          ],
          max_tokens: 8192,
        }),
        signal: AbortSignal.timeout(120000),
      });
      const openaiData = await openaiResp.json();
      const rawText = openaiData.choices?.[0]?.message?.content || '';
      result = parseAiResult(rawText, screenName, route);
    }

    res.json({ success: true, data: result });
  } catch (err) {
    console.error('[studio/generate]', err.message);
    res.status(500).json({ success: false, message: 'שגיאה ביצירת קוד: ' + err.message });
  }
});

// ── Parse AI response → { ts, html, scss } ───────────────────────────────────
function parseAiResult(rawText, screenName, route) {
  // Try direct JSON parse
  const strategies = [
    () => JSON.parse(rawText),
    () => { const m = rawText.match(/```(?:json)?\s*(\{[\s\S]*?\})\s*```/); return m ? JSON.parse(m[1]) : null; },
    () => { const m = rawText.match(/\{[\s\S]*"ts"[\s\S]*"html"[\s\S]*"scss"[\s\S]*\}/); return m ? JSON.parse(m[0]) : null; },
    () => extractCodeBlocks(rawText),
  ];

  for (const fn of strategies) {
    try {
      const r = fn();
      if (r?.ts && r?.html) return r;
    } catch { /* try next */ }
  }

  // Complete fallback — return scaffolded component
  return generateScaffold(screenName, route || '/' + screenName.toLowerCase().replace(/\s+/g, '-'));
}

// Extract code blocks from markdown-style response
function extractCodeBlocks(text) {
  const tsMatch   = text.match(/```typescript\s*([\s\S]*?)```/);
  const htmlMatch = text.match(/```html\s*([\s\S]*?)```/);
  const scssMatch = text.match(/```scss\s*([\s\S]*?)```/);
  if (tsMatch && htmlMatch) {
    return { ts: tsMatch[1], html: htmlMatch[1], scss: scssMatch?.[1] || '' };
  }
  return null;
}

// Minimal scaffold when AI fails
function generateScaffold(screenName, route) {
  const className = screenName.replace(/\s+(.)/g, (_, c) => c.toUpperCase()).replace(/^./, c => c.toUpperCase()) + 'Component';
  const selector  = 'app-' + screenName.toLowerCase().replace(/\s+/g, '-');

  return {
    ts: `import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: '${selector}',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './${selector}.component.html',
  styleUrl:    './${selector}.component.scss',
})
export class ${className} implements OnInit {
  loading = signal(true);
  error   = signal('');
  items   = signal<any[]>([]);

  private http = inject(HttpClient);

  ngOnInit() {
    this.loading.set(false);
  }
}`,
    html: `<div class="page-wrap">
  <div class="page-header">
    <h1 class="page-title">${screenName}</h1>
    <button class="btn-save">✓ חדש</button>
  </div>

  @if (loading()) {
    <div class="center-spin"><mat-icon>hourglass_empty</mat-icon></div>
  }
  @if (error()) {
    <div class="error-box">{{ error() }}</div>
  }
  @if (!loading() && !error()) {
    <div class="content-area">
      <!-- תוכן מסך ${screenName} -->
    </div>
  }
</div>`,
    scss: `@use 'src/styles' as *;

.page-wrap {
  padding: 24px;
}

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.page-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--sf-text);
}

.content-area {
  background: var(--sf-bg-card);
  border: 1px solid var(--sf-border);
  border-radius: 12px;
  padding: 24px;
  min-height: 200px;
}

.center-spin {
  display: flex;
  justify-content: center;
  padding: 48px;
  color: var(--sf-text-muted);
}

.error-box {
  padding: 12px 16px;
  border-radius: 8px;
  background: #fef2f2;
  color: #dc2626;
  border: 1px solid #fecaca;
  margin-bottom: 16px;
}`,
  };
}

module.exports = router;
