const sql = require('mssql');
require('dotenv').config();

const config = {
  server:   process.env.DB_SERVER,
  database: process.env.DB_ARACHIM_NAME || 'DB_ARACHIM_TEST',
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  options:  { trustServerCertificate: true, enableArithAbort: true, useUTC: false },
  pool:     { max: 10, min: 0, idleTimeoutMillis: 30000 }
};

let pool;
const poolConnect = sql.connect(config).then(p => { pool = p; return p; });
poolConnect.catch(err => console.error('DB_ARACHIM Connect Error:', err));

async function getPool() {
  await poolConnect;
  return pool;
}

module.exports = { sql, getPool, poolConnect };
