const express   = require('express');
const router    = express.Router();
const Anthropic = require('@anthropic-ai/sdk');
const { verifyToken } = require('../middleware/auth');
const { decryptConfig } = require('../helpers/connectorEncryption');
const { sql, getPool, poolConnect } = require('../db');

router.use(verifyToken);

// Resolve the best Anthropic API key: tenant connector → platform connector → .env
async function resolveAnthropicKey(tenantId) {
  try {
    await poolConnect;
    const pool = await getPool();
    const result = await pool.request()
      .input('ConnectorKey', sql.VarChar(50), 'claude_api')
      .input('TenantID',     sql.Int,        tenantId)
      .query(`
        SELECT ConfigJSON FROM dbo.tblConnectors
        WHERE ConnectorKey=@ConnectorKey AND ProductID=0 AND (TenantID=@TenantID OR TenantID=0)
        ORDER BY CASE WHEN TenantID=@TenantID THEN 0 ELSE 1 END
      `);

    for (const row of result.recordset) {
      const cfg = decryptConfig(row.ConfigJSON);
      if (cfg?.api_key && !cfg.api_key.startsWith('****')) return cfg;
    }
  } catch { /* fallback */ }

  return { api_key: process.env.ANTHROPIC_API_KEY, model_id: 'claude-haiku-4-5-20251001', max_tokens: 1024 };
}

// GET /api/ai/company-lookup?name=...
router.get('/company-lookup', async (req, res) => {
  const name = (req.query.name || '').trim();
  if (!name) return res.status(400).json({ success: false, message: 'שם חסר' });

  const cfg = await resolveAnthropicKey(req.user.tenantId);
  if (!cfg.api_key) return res.status(503).json({ success: false, message: 'מפתח AI לא מוגדר — הגדר ב-הגדרות → חיבורים → Claude' });

  try {
    const client = new Anthropic({ apiKey: cfg.api_key });
    const model  = cfg.model_id || 'claude-haiku-4-5-20251001';

    // ── Step 1: Web search — gather raw info ─────────────────
    const searchMsg = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 2048,
      tools: [{ type: 'web_search_20250305', name: 'web_search' }],
      messages: [{
        role: 'user',
        content: `חפש ברשת פרטים על חברה ישראלית בשם: "${name}"

חפש באתרים אלה:
- רשם החברות: ica.justice.gov.il
- BDI: bdicoface.co.il
- כל מקור רלוונטי אחר

מצא את הפרטים הבאים:
1. מספר ח.פ. / עוסק מורשה (מספר של 8-9 ספרות)
2. כתובת
3. טלפון
4. אתר אינטרנט
5. שם מנכ"ל / איש קשר

סכם את הממצאים בפסקה קצרה.`
      }]
    });

    // Extract raw text from step 1
    let rawInfo = '';
    for (const block of searchMsg.content) {
      if (block.type === 'text') rawInfo += block.text + '\n';
    }

    // ── Step 2: Structure into JSON ───────────────────────────
    const structMsg = await client.messages.create({
      model,
      max_tokens: 512,
      system: 'You are a data extraction assistant. Extract structured data from text and return ONLY valid JSON with no additional text.',
      messages: [{
        role: 'user',
        content: `Extract business details from this text about the Israeli company "${name}":

${rawInfo}

Return ONLY this JSON object (no explanation, no markdown):
{"businessNumber":"9-digit registration number or null","phone":"phone number or null","address":"street address or null","city":"city in Hebrew or null","website":"full URL or null","contactName":"CEO/contact name or null"}`
      }]
    });

    const structText = structMsg.content.find(b => b.type === 'text')?.text || '';
    const msg = { content: [{ type: 'text', text: structText }] };

    // Collect all text blocks from response (may include tool_result blocks)
    let jsonText = '';
    for (const block of msg.content) {
      if (block.type === 'text') jsonText += '\n' + block.text;
    }

    // Extract JSON object — try multiple patterns
    let data = null;
    const attempts = [
      // 1. Clean JSON code fence
      () => {
        const m = jsonText.match(/```(?:json)?\s*(\{[\s\S]*?\})\s*```/);
        return m ? JSON.parse(m[1]) : null;
      },
      // 2. Bare JSON object (greedy — last occurrence wins for richest data)
      () => {
        const matches = [...jsonText.matchAll(/\{[\s\S]*?"businessNumber"[\s\S]*?\}/g)];
        if (matches.length) return JSON.parse(matches[matches.length - 1][0]);
        return null;
      },
      // 3. Any JSON object in the text
      () => {
        const m = jsonText.match(/\{[\s\S]*\}/);
        return m ? JSON.parse(m[0]) : null;
      },
    ];

    for (const attempt of attempts) {
      try { data = attempt(); if (data) break; } catch { /* next */ }
    }

    // If still null, build from free-text extraction
    if (!data) {
      console.warn('[AI company-lookup] raw response:', jsonText.slice(0, 500));
      // Try to extract structured fields from free text
      const extract = (patterns) => {
        for (const p of patterns) {
          const m = jsonText.match(p);
          if (m) return m[1]?.trim() || null;
        }
        return null;
      };
      data = {
        businessNumber: extract([/ח\.פ[.\s]*[:\s]*(\d{8,9})/, /(\d{9})\b/]),
        phone:    extract([/טלפון[:\s]*([\d\-\+\s]{7,15})/, /(\+972[\d\-\s]{8,12})/, /(0\d{1,2}[-\s]?\d{7,8})/]),
        address:  extract([/כתובת[:\s]*([^\n,]{5,60})/]),
        city:     extract([/עיר[:\s]*([^\n,]{2,30})/, /(?:תל אביב|ירושלים|חיפה|ראשון לציון|פתח תקווה|אשדוד|נתניה|באר שבע|בני ברק|רמת גן)/]),
        website:  extract([/(https?:\/\/[^\s"<>]+)/, /(www\.[^\s"<>]+)/]),
        contactName: null,
      };
    }

    if (!data) return res.status(500).json({ success: false, message: 'לא נמצאו פרטים לחברה זו' });

    res.json({ success: true, data });
  } catch (err) {
    console.error('[AI company-lookup]', err.message);
    res.status(500).json({ success: false, message: 'שגיאה בחיפוש AI: ' + err.message });
  }
});

module.exports = router;
