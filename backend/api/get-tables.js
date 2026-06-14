const { getPool } = require('./db');
require('dotenv').config();
getPool().then(async pool => {
  const r = await pool.request().query("SELECT name FROM sysobjects WHERE xtype='U' ORDER BY name");
  r.recordset.forEach(t => console.log(t.name));
  process.exit(0);
}).catch(e => { console.error(e.message); process.exit(1); });
