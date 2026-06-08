const express = require('express');
const router  = express.Router();
const crypto  = require('crypto');
const jwt     = require('jsonwebtoken');
const { sql, getPool, poolConnect } = require('../db');

// ── helpers ──────────────────────────────────────────────
function hashPassword(password, salt) {
  return crypto.createHash('sha256')
    .update(password + salt)
    .digest('base64');
}

// ── POST /api/auth/login ──────────────────────────────────
router.post('/login', async (req, res) => {
  const { tenantCode, username, password } = req.body;
  const ip        = req.ip || req.connection.remoteAddress || '';
  const userAgent = req.headers['user-agent'] || '';

  if (!tenantCode || !username || !password)
    return res.status(400).json({ success: false, message: 'נא למלא קוד חברה, שם משתמש וסיסמה' });

  // שלוף TenantID לפי TenantCode
  await poolConnect;
  const tenantResult = await (await getPool()).request()
    .input('TenantCode', sql.VarChar(30), tenantCode.toUpperCase())
    .query('SELECT TenantID FROM dbo.tblTenants WHERE TenantCode=@TenantCode AND IsActive=1');

  if (!tenantResult.recordset.length)
    return res.status(401).json({ success: false, message: 'קוד חברה לא נמצא' });

  const tenantIdResolved = tenantResult.recordset[0].TenantID;

  try {
    await poolConnect;
    const db = (await getPool()).request();

    // שלב 1 — קבל Salt לפי TenantID האמיתי
    const saltResult = await db
      .input('TenantID', sql.Int, tenantIdResolved)
      .input('Username', sql.VarChar(80), username)
      .output('Salt', sql.VarChar(100))
      .execute('dbo.sp_GetUserSalt');

    const salt = (saltResult.output.Salt || '').trim();
    const passwordHash = hashPassword(password, salt);
    // שלב 2 — אימות
    const loginResult = await (await getPool()).request()
      .input('TenantID',     sql.Int,            tenantIdResolved)
      .input('Username',     sql.VarChar(80),    username)
      .input('PasswordHash', sql.VarChar(255),   passwordHash)
      .input('IPAddress',    sql.VarChar(45),    ip)
      .input('UserAgent',    sql.NVarChar(500),  userAgent)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(300))
      .output('UserID',        sql.Int)
      .output('RoleID',        sql.TinyInt)
      .output('CustomerID',    sql.Int)
      .output('TenantIDOut',    sql.Int)
      .execute('dbo.sp_UserLogin');

    const { ResultCode, ResultMessage, UserID, RoleID, CustomerID, TenantIDOut: TenantID } = loginResult.output;

    if (ResultCode !== 0) {
      const httpCode = ResultCode === 2 || ResultCode === 5 ? 403 : 401;
      // תרגום קודים לעברית ב-Node.js (לא מה-DB)
      const messages = {
        1: `שם משתמש או סיסמה שגויים`,
        2: 'המשתמש חסום. פנה למנהל המערכת',
        3: 'שם משתמש או סיסמה שגויים',
        4: 'המשתמש אינו פעיל',
        5: 'החשבון נחסם עקב ניסיונות כניסה מרובים. פנה למנהל המערכת'
      };
      // אם ResultMessage מהDB מכיל מספר ניסיונות — שלוף אותו
      const attemptsMatch = (ResultMessage || '').match(/\d+/);
      let msg = messages[ResultCode] || 'שגיאת כניסה';
      if (ResultCode === 1 && attemptsMatch) {
        msg = `שם משתמש או סיסמה שגויים. נותרו ${attemptsMatch[0]} ניסיונות`;
      }
      return res.status(httpCode).json({ success: false, code: ResultCode, message: msg });
    }

    // שלוף שם מלא, תפקיד ושם ארגון
    const userInfo = await (await getPool()).request()
      .input('UserID',   sql.Int, UserID)
      .input('TenantID', sql.Int, TenantID)
      .query(`SELECT u.FirstName, u.LastName, ur.RoleName, t.CompanyName
              FROM dbo.tblUsers u
              JOIN dbo.tblUserRoles ur ON ur.RoleID   = u.RoleID
              JOIN dbo.tblTenants   t  ON t.TenantID  = @TenantID
              WHERE u.UserID = @UserID`);

    const { FirstName, LastName, RoleName, CompanyName } = userInfo.recordset[0];
    const fullName    = `${FirstName} ${LastName}`.trim();
    const companyName = CompanyName || '';

    // שלוף theme פעיל (User → Org → Platform)
    const themeResult = await (await getPool()).request()
      .input('UserID',   sql.Int, UserID)
      .input('TenantID', sql.Int, TenantID)
      .execute('dbo.sp_GetEffectiveTheme');
    const theme = themeResult.recordset[0];

    // יצור JWT Token
    const token = jwt.sign(
      { userId: UserID, roleId: RoleID, customerId: CustomerID, tenantId: TenantID, fullName, roleName: RoleName, companyName },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '8h' }
    );

    return res.json({
      success: true,
      message: ResultMessage,
      token,
      user: { userId: UserID, roleId: RoleID, customerId: CustomerID, tenantId: TenantID, fullName, roleName: RoleName, companyName },
      theme: { colorScheme: theme.ColorScheme, darkMode: !!theme.DarkMode }
    });

  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ success: false, message: 'שגיאת שרת' });
  }
});

// ── POST /api/auth/logout ─────────────────────────────────
router.post('/logout', (req, res) => {
  // JWT stateless — הלקוח מוחק את ה-token
  res.json({ success: true, message: 'התנתקת בהצלחה' });
});

module.exports = router;



