require('dotenv').config();
const express  = require('express');
const cors     = require('cors');
const helmet   = require('helmet');
const path     = require('path');
const cron     = require('node-cron');
const { refreshRates, isUpToDate } = require('./services/exchangeRateService');
const { runSeed } = require('./helpers/dbSeeder');

const app = express();
app.set('trust proxy', true);

// ── Security & Parsing ────────────────────────────────────
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({ origin: '*', methods: ['GET','POST','PUT','DELETE'] }));
app.use(express.json());

// ── Static logos via /api/logos/ (לפני middleware של JSON) ──
app.use('/api/logos', express.static(path.join(__dirname, '../frontend/assets/logos')));

// UTF-8 רק לתשובות API — לא לקבצים סטטיים
app.use('/api', (req, res, next) => { res.setHeader('Content-Type', 'application/json; charset=utf-8'); next(); });
app.use(express.urlencoded({ extended: true }));

// ── Static Frontend ───────────────────────────────────────
app.use(express.static(path.join(__dirname, '../frontend/browser')));

// ── API Routes ────────────────────────────────────────────
app.use('/api/public', require('./routes/public'));   // ללא auth
app.use('/api/upload', require('./routes/upload'));
app.use('/api/auth',   require('./routes/auth'));
app.use('/api/theme',  require('./routes/theme'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/users',     require('./routes/users'));
app.use('/api/customers', require('./routes/customers'));
app.use('/api/tenants',   require('./routes/tenants'));
app.use('/api/stats',     require('./routes/stats'));
app.use('/api/counters',   require('./routes/counters'));
app.use('/api/categories', require('./routes/categories'));
app.use('/api/products',   require('./routes/products'));
app.use('/api/packages',   require('./routes/packages'));
app.use('/api/audit',        require('./routes/audit'));
app.use('/api/menu-items',    require('./routes/menu-items'));
app.use('/api/screen-fields', require('./routes/screen-fields'));
app.use('/api/roles',        require('./routes/roles'));
app.use('/api/permissions',  require('./routes/permissions'));
app.use('/api/org',          require('./routes/org'));
app.use('/api/groups',       require('./routes/groups'));
app.use('/api/reference',       require('./routes/reference'));
app.use('/api/exchange-rates',  require('./routes/exchange-rates'));
app.use('/api/ai',             require('./routes/ai'));
app.use('/api/connectors',     require('./routes/connectors'));
app.use('/api/projects',       require('./routes/projects'));
app.use('/api/cortex',         require('./routes/cortex'));
app.use('/api/arachim/orders', require('./routes/arachim'));

// 404
app.use('/api/{*path}', (_req, res) => res.status(404).json({ success: false, message: 'Endpoint not found' }));

// Fallback → Angular SPA
app.use((_req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/browser/index.html'));
});

// ── Start ─────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`\n✅  Profits CRM Server running on http://localhost:${PORT}`);
  console.log(`📦  DB: ${process.env.DB_SERVER} / ${process.env.DB_NAME}\n`);

  // DB seed — action types, missing tables, default permissions
  runSeed().catch(e => console.warn('[seeder] startup error:', e.message));

  // Auto-fetch exchange rates on startup if not yet updated today
  try {
    const upToDate = await isUpToDate();
    if (!upToDate) {
      console.log('[BOI] Rates not yet updated today — fetching now...');
      await refreshRates();
    } else {
      console.log('[BOI] Exchange rates already up-to-date for today.');
    }
  } catch (err) {
    console.warn('[BOI] Startup fetch failed (non-fatal):', err.message);
  }
});

// ── Cron: Daily exchange rate refresh ─────────────────────
// בנק ישראל מפרסם שערים ב-15:30 ישראל → מרענן ב-16:15 (UTC+3 = 13:15 UTC)
// ימים א'-ה' (weekdays) בלבד — BOI לא מפרסם בסופי שבוע
cron.schedule('15 13 * * 1-5', async () => {
  console.log('[CRON] Daily exchange rate refresh triggered');
  try {
    await refreshRates();
  } catch (err) {
    console.error('[CRON] Exchange rate refresh failed:', err.message);
  }
}, { timezone: 'Asia/Jerusalem' });
