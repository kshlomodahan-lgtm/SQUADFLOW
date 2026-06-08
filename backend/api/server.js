require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const helmet  = require('helmet');
const path    = require('path');

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
app.use(express.static(path.join(__dirname, '../frontend')));

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
app.use('/api/menu-items',   require('./routes/menu-items'));
app.use('/api/roles',        require('./routes/roles'));
app.use('/api/permissions',  require('./routes/permissions'));
app.use('/api/org',          require('./routes/org'));

// 404
app.use('/api/{*path}', (_req, res) => res.status(404).json({ success: false, message: 'Endpoint not found' }));

// Fallback → login page
app.use((_req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/login.html'));
});

// ── Start ─────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n✅  Profits CRM Server running on http://localhost:${PORT}`);
  console.log(`📦  DB: ${process.env.DB_SERVER} / ${process.env.DB_NAME}\n`);
});
