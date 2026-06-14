const { sql, getPool } = require('./db');
require('dotenv').config();
getPool().then(async pool => {
  const r = await pool.request().query('SELECT TenantID, TenantCode, CompanyName FROM dbo.tblTenants WHERE IsActive=1');
  r.recordset.forEach(t => console.log(t.TenantID, '|', t.TenantCode, '|', t.CompanyName));
  process.exit(0);
}).catch(e => { console.error(e.message); process.exit(1); });
