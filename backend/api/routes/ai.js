const express   = require('express');
const router    = express.Router();
const Anthropic = require('@anthropic-ai/sdk');
const { verifyToken } = require('../middleware/auth');
const { decryptConfig } = require('../helpers/connectorEncryption');
const { sql, getPool, poolConnect } = require('../db');

router.use(verifyToken);

// ── API Key Resolution ──────────────────────────────────────────
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
  return { api_key: process.env.ANTHROPIC_API_KEY, model_id: 'claude-haiku-4-5-20251001' };
}

// ── Logo via Clearbit ───────────────────────────────────────────
async function findLogo(website) {
  if (!website) return null;
  let domain;
  try {
    let url = website.startsWith('http') ? website : 'https://' + website;
    domain = new URL(url).hostname.replace(/^www\./, '');
  } catch { return null; }

  // 1. Try Clearbit
  try {
    const clearbit = `https://logo.clearbit.com/${domain}`;
    const cbResp = await fetch(clearbit, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; SQUADFLOW/1.0)' },
      signal: AbortSignal.timeout(5000),
    });
    if (cbResp.ok && (cbResp.headers.get('content-type') || '').startsWith('image/')) return clearbit;
  } catch { /* fallback */ }

  // 2. Always fallback: Google high-res favicon
  return `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=128`;
}

// ── Merge: prefer first non-null across sources ─────────────────
function mergeData(...items) {
  const fields = ['businessNumber', 'phone', 'address', 'city', 'website', 'contactName'];
  const out = {};
  for (const f of fields) {
    out[f] = items.map(d => d?.[f]).find(v => v && String(v).trim()) || null;
  }
  return out;
}

// ─────────────────────────────────────────────────────────────────
// SOURCE 1: checkid.co.il — URL contains the ח.פ. directly!
//   Pattern: checkid.co.il/company/[slug]-[9-digit-ID]
//   Strategy: web search → extract ID from URL → fetch page for details
// ─────────────────────────────────────────────────────────────────
async function searchCheckId(name, client) {
  const meta = { id: 'checkid', name: 'CheckID (checkid.co.il)' };
  try {
    // Use Claude web_search to find the checkid.co.il company page
    const msg = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 256,
      tools: [{ type: 'web_search_20250305', name: 'web_search' }],
      messages: [{
        role: 'user',
        content: `Search for: "${name}" site:checkid.co.il\nReturn ONLY the full checkid.co.il/company/... URL you find. Nothing else.`
      }]
    });

    // Extract checkid URL from response
    let checkidUrl = null;
    for (const block of msg.content) {
      if (block.type === 'text') {
        const m = block.text.match(/https?:\/\/(?:www\.)?checkid\.co\.il\/company\/[^\s"'<>\n]+/);
        if (m) { checkidUrl = m[0].replace(/[.,;)]+$/, ''); break; }
      }
    }
    if (!checkidUrl) return { ...meta, status: 'not_found', data: null };

    // Extract ח.פ. from URL — it's always the last number segment
    const idMatch = checkidUrl.match(/-(\d{8,9})(?:[^0-9]|$)/);
    const businessNumber = idMatch ? idMatch[1] : null;

    // Fetch the company page for additional details
    const pageResp = await fetch(checkidUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept-Language': 'he-IL,he;q=0.9',
      },
      signal: AbortSignal.timeout(10000),
    }).catch(() => null);

    const data = { businessNumber, phone: null, address: null, city: null, website: null, contactName: null };

    if (pageResp?.ok) {
      const html = await pageResp.text();
      const ndMatch = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
      if (ndMatch) {
        try {
          const nd = JSON.parse(ndMatch[1]);
          const co = nd?.props?.pageProps?.company || nd?.props?.pageProps?.data || {};
          if (co.phone || co.telephone)       data.phone       = co.phone || co.telephone;
          if (co.address || co.registeredAddress) data.address = co.address || co.registeredAddress;
          if (co.city)                         data.city        = co.city;
          if (co.website)                      data.website     = co.website;
          if (co.manager || co.director || co.ceo) data.contactName = co.manager || co.director || co.ceo;
        } catch { /* ignore parse errors */ }
      }
    }

    return { ...meta, status: 'found', data };
  } catch (e) {
    return { ...meta, status: 'error', data: null };
  }
}

// ─────────────────────────────────────────────────────────────────
// SOURCE 2: data.gov.il (Israeli Government Open Data API)
// ─────────────────────────────────────────────────────────────────
async function searchGovApi(name) {
  const meta = { id: 'gov_api', name: 'מאגר ממשלתי (data.gov.il)' };
  try {
    // Known resource IDs for Israeli company/business registries
    const resources = [
      { id: 'f004176c-b85f-4542-8901-7b3176f9a054', label: 'רשם החברות' },
      { id: '96c87f1e-0ccd-4a33-acbd-e74623a1c32f', label: 'רישיונות עסק' },
      { id: 'a18a0764-e01c-43b8-8b0a-9d18fe5f64d7', label: 'עוסקים מורשים' },
    ];

    for (const res of resources) {
      const url = `https://data.gov.il/api/3/action/datastore_search?resource_id=${res.id}&q=${encodeURIComponent(name)}&limit=3`;
      const resp = await fetch(url, { signal: AbortSignal.timeout(8000) });
      if (!resp.ok) continue;
      const json = await resp.json();
      if (!json?.success || !json?.result?.records?.length) continue;

      const r = json.result.records[0];
      const keys = Object.keys(r);

      // Auto-detect field names
      const numKey  = keys.find(k => /מספר|id|number/i.test(k) && /^\d{7,9}$/.test(String(r[k])));
      const addrKey = keys.find(k => /כתובת|address|addr/i.test(k));
      const cityKey = keys.find(k => /^עיר$|^city$/i.test(k) || /שם.?עיר|cityname/i.test(k));
      const phoneKey= keys.find(k => /טלפון|phone|tel/i.test(k));

      const businessNumber = numKey ? String(r[numKey]) : null;
      if (!businessNumber) continue;

      return {
        ...meta,
        status: 'found',
        data: {
          businessNumber,
          address:     addrKey  ? r[addrKey]  : null,
          city:        cityKey  ? r[cityKey]  : null,
          phone:       phoneKey ? r[phoneKey] : null,
          website:     null,
          contactName: null,
        }
      };
    }
    return { ...meta, status: 'not_found', data: null };
  } catch (e) {
    return { ...meta, status: 'error', data: null };
  }
}

// ─────────────────────────────────────────────────────────────────
// SOURCE 3: AI Web Search (Claude sonnet + web_search tool)
// ─────────────────────────────────────────────────────────────────
async function searchAIWeb(name, client, model) {
  const meta = { id: 'ai_web', name: 'AI Web Search (Claude)' };
  try {
    const searchMsg = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 2048,
      tools: [{ type: 'web_search_20250305', name: 'web_search' }],
      messages: [{
        role: 'user',
        content: `חפש פרטים על חברה ישראלית: "${name}"

חפש ב:
1. https://www.checkid.co.il/search?q=${encodeURIComponent(name)}
2. site:ica.justice.gov.il "${name}"
3. site:bdicoface.co.il "${name}"

מצא: מספר ח.פ./עוסק מורשה (8-9 ספרות), טלפון, כתובת, אתר, מנכ"ל. סכם בפסקה קצרה.`
      }]
    });

    let rawInfo = '';
    for (const block of searchMsg.content) {
      if (block.type === 'text') rawInfo += block.text + '\n';
    }
    if (!rawInfo.trim()) return { ...meta, status: 'not_found', data: null };

    const structMsg = await client.messages.create({
      model,
      max_tokens: 512,
      system: 'Extract structured data and return ONLY valid JSON with no extra text.',
      messages: [{
        role: 'user',
        content: `Extract business details about "${name}" from:\n${rawInfo}\n\nReturn ONLY: {"businessNumber":"9-digit or null","phone":"or null","address":"or null","city":"Hebrew city or null","website":"full URL or null","contactName":"or null"}`
      }]
    });

    const text = structMsg.content.find(b => b.type === 'text')?.text || '';
    let data = null;
    const attempts = [
      () => { const m = text.match(/```(?:json)?\s*(\{[\s\S]*?\})\s*```/); return m ? JSON.parse(m[1]) : null; },
      () => { const m = text.match(/\{[\s\S]*"businessNumber"[\s\S]*?\}/); return m ? JSON.parse(m[0]) : null; },
      () => { const m = text.match(/\{[\s\S]*\}/); return m ? JSON.parse(m[0]) : null; },
    ];
    for (const fn of attempts) {
      try { data = fn(); if (data) break; } catch { /* next */ }
    }

    if (!data || Object.values(data).every(v => !v)) return { ...meta, status: 'not_found', data: null };
    return { ...meta, status: 'found', data };
  } catch (e) {
    return { ...meta, status: 'error', data: null };
  }
}

// ─────────────────────────────────────────────────────────────────
// GET /api/ai/company-lookup?name=...
// ─────────────────────────────────────────────────────────────────
router.get('/company-lookup', async (req, res) => {
  const name = (req.query.name || '').trim();
  if (!name) return res.status(400).json({ success: false, message: 'שם חסר' });

  const cfg = await resolveAnthropicKey(req.user.tenantId);
  if (!cfg.api_key) return res.status(503).json({ success: false, message: 'מפתח AI לא מוגדר — הגדר ב-הגדרות → חיבורים → Claude' });

  const client = new Anthropic({ apiKey: cfg.api_key });
  const model  = cfg.model_id || 'claude-haiku-4-5-20251001';

  try {
    // Run sources in parallel
    const [checkidResult, govResult] = await Promise.all([
      searchCheckId(name, client),
      searchGovApi(name),
    ]);

    const structuredData = mergeData(checkidResult.data, govResult.data);
    const hasEnough = structuredData.businessNumber && (structuredData.phone || structuredData.address);

    // Skip AI web search if we already have ח.פ. + at least phone or address
    let aiResult = { id: 'ai_web', name: 'AI Web Search (Claude)', status: 'skipped', data: null };
    if (!hasEnough) {
      aiResult = await searchAIWeb(name, client, model);
    }

    const sources = [checkidResult, govResult, aiResult].map(s => ({
      id:     s.id,
      name:   s.name,
      status: s.status,
    }));

    const data = mergeData(checkidResult.data, govResult.data, aiResult.data);

    if (Object.values(data).every(v => !v)) {
      return res.json({ success: false, message: 'לא נמצאו פרטים לחברה זו', sources });
    }

    // Find logo
    data.logoUrl = await findLogo(data.website);

    res.json({ success: true, data, sources });
  } catch (err) {
    console.error('[AI company-lookup]', err.message);
    res.status(500).json({ success: false, message: 'שגיאה בחיפוש: ' + err.message });
  }
});

module.exports = router;
