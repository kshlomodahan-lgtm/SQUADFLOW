/**
 * setup-admin.js
 * יצירה/עדכון סיסמת מנהל דרך Node.js — אותו hash כמו ה-API
 * שימוש: node setup-admin.js <username> <password>
 */
require('dotenv').config();
const crypto = require('crypto');
const sql    = require('mssql');
const readline = require('readline');

const config = {
  server:   process.env.DB_SERVER,
  database: process.env.DB_NAME,
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  options:  { trustServerCertificate: true, enableArithAbort: true }
};

function hashPassword(password, salt) {
  return crypto.createHash('sha256')
    .update(password + salt, 'utf8')
    .digest('base64');
}

function generateSalt() {
  return crypto.randomBytes(32).toString('base64');
}

async function promptPassword(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(resolve => {
    // הסתר הקלדה
    process.stdout.write(question);
    const stdin = process.openStdin();
    process.stdin.on('data', d => {
      process.stdin.pause();
      rl.close();
      resolve(d.toString().trim());
    });
  });
}

async function main() {
  const username = process.argv[2];
  let password   = process.argv[3];

  if (!username) {
    console.error('Usage: node setup-admin.js <username> [password]');
    process.exit(1);
  }

  if (!password) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    password = await new Promise(resolve => {
      rl.question(`Password for "${username}": `, ans => { rl.close(); resolve(ans.trim()); });
    });
  }

  if (!password || password.length < 6) {
    console.error('Error: password must be at least 6 characters');
    process.exit(1);
  }

  try {
    const pool = await sql.connect(config);
    const salt = generateSalt();
    const hash = hashPassword(password, salt);

    const result = await pool.request()
      .input('Username',     sql.VarChar(80),  username)
      .input('PasswordHash', sql.VarChar(255), hash)
      .input('PasswordSalt', sql.VarChar(100), salt)
      .query(`
        SET QUOTED_IDENTIFIER ON;
        UPDATE dbo.tblUsers
        SET PasswordHash      = @PasswordHash,
            PasswordSalt      = @PasswordSalt,
            IsActive          = 1,
            MustChangePass    = 0,
            PasswordChangedAt = GETDATE(),
            PasswordChangedBy = 0
        WHERE Username = @Username AND UserID > 0;
        SELECT @@ROWCOUNT AS Updated;
      `);

    const updated = result.recordset[0].Updated;
    if (updated === 0) {
      console.error(`User "${username}" not found`);
      process.exit(1);
    }

    console.log(`\n✅  Password updated for "${username}"`);
    console.log(`    Hash method: SHA256(password + salt) — same as API`);
    console.log(`    Salt length: ${salt.length} chars`);

    await pool.close();
  } catch (err) {
    console.error('DB Error:', err.message);
    process.exit(1);
  }
}

main();
