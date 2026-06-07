const express     = require('express');
const router      = express.Router();
const { sql, getPool } = require('../db');
const requireAuth = require('../middleware/auth');
const crypto      = require('crypto');

// ── GET /api/users/roles — רשימת תפקידים
router.get('/roles', requireAuth, async (req, res) => {
  try {
    const result = await (await getPool()).request()
      .query('SELECT RoleID, RoleName, RoleCode FROM dbo.tblUserRoles ORDER BY RoleID');
    return res.json({ success: true, roles: result.recordset });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'שגיאת שרת' });
  }
});

// ── GET /api/users — רשימת משתמשים (לפי תפקיד)
router.get('/', requireAuth, async (req, res) => {
  try {
    const isPlatform = req.user.tenantId === 1 && req.user.roleId === 1;
    let query, request = (await getPool()).request();

    if (isPlatform) {
      query = `
        SELECT u.UserID, u.TenantID, u.Username,
               u.FirstName+N' '+u.LastName AS FullName,
               u.FirstName, u.LastName,
               u.Email, u.IsActive, u.LastLoginAt, u.MustChangePass, u.RoleID,
               t.TenantCode, t.CompanyName AS OrgName, t.LogoUrl,
               ur.RoleName
        FROM   dbo.tblUsers     u
        JOIN   dbo.tblTenants   t  ON t.TenantID = u.TenantID
        JOIN   dbo.tblUserRoles ur ON ur.RoleID   = u.RoleID
        WHERE  u.TenantID > 1 AND u.UserID > 0
        ORDER  BY t.CompanyName, u.Username`;
    } else {
      request.input('TenantID', sql.Int, req.user.tenantId);
      query = `
        SELECT u.UserID, u.TenantID, u.Username,
               u.FirstName+N' '+u.LastName AS FullName,
               u.FirstName, u.LastName,
               u.Email, u.IsActive, u.LastLoginAt, u.MustChangePass, u.RoleID,
               ur.RoleName, ur.RoleCode
        FROM   dbo.tblUsers     u
        JOIN   dbo.tblUserRoles ur ON ur.RoleID = u.RoleID
        WHERE  u.TenantID = @TenantID AND u.UserID > 0
        ORDER  BY u.Username`;
    }

    const result = await request.query(query);
    return res.json({ success: true, users: result.recordset, isPlatform });
  } catch (err) {
    console.error('GET /users error:', err);
    return res.status(500).json({ success: false, message: 'שגיאת שרת' });
  }
});

// ── GET /api/users/me — פרטי המשתמש המחובר
router.get('/me', requireAuth, async (req, res) => {
  try {
    const result = await (await getPool()).request()
      .input('UserID', sql.Int, req.user.userId)
      .query(`
        SELECT u.UserID, u.Username, u.FirstName, u.LastName,
               u.FirstName + N' ' + u.LastName AS FullName,
               u.Email, u.Phone,
               ur.RoleName, ur.RoleCode,
               c.CompanyName, c.CustomerCode,
               u.LastLoginAt, u.MustChangePass
        FROM   dbo.tblUsers u
        JOIN   dbo.tblUserRoles ur ON ur.RoleID    = u.RoleID
        LEFT JOIN dbo.tblCustomers c ON c.CustomerID = u.CustomerID
        WHERE  u.UserID = @UserID AND u.UserID > 0
      `);

    if (!result.recordset.length)
      return res.status(404).json({ success: false, message: 'משתמש לא נמצא' });

    return res.json({ success: true, user: result.recordset[0] });
  } catch (err) {
    console.error('GET /me error:', err);
    return res.status(500).json({ success: false, message: 'שגיאת שרת' });
  }
});

// ── GET /api/users/:id — משתמש בודד (sp_UserGet)
router.get('/:id', requireAuth, async (req, res) => {
  const id = parseInt(req.params.id);
  if (!id || id <= 0) return res.status(400).json({ success: false, message: 'ID לא תקין' });
  try {
    const r = await (await getPool()).request()
      .input('UserID', sql.Int, id)
      .execute('dbo.sp_UserGet');

    if (!r.recordset.length)
      return res.status(404).json({ success: false, message: 'משתמש לא נמצא' });

    return res.json({ success: true, user: r.recordset[0] });
  } catch (err) {
    console.error('GET /users/:id error:', err);
    return res.status(500).json({ success: false, message: 'שגיאת שרת' });
  }
});

// ── POST /api/users — יצירת משתמש (sp_UserCreate)
router.post('/', requireAuth, async (req, res) => {
  const { tenantId, firstName, lastName, username, email, password, roleId } = req.body;

  if (!firstName || !lastName || !username || !email || !password)
    return res.status(400).json({ success: false, message: 'כל השדות חובה' });

  const targetTenantId = req.user.tenantId === 1
    ? (tenantId || req.user.tenantId)
    : req.user.tenantId;

  const salt = crypto.randomBytes(32).toString('base64');
  const hash = crypto.createHash('sha256').update(password + salt, 'utf8').digest('base64');

  try {
    const r = await (await getPool()).request()
      .input ('TenantID',      sql.Int,          targetTenantId)
      .input ('FirstName',     sql.NVarChar(100), firstName)
      .input ('LastName',      sql.NVarChar(100), lastName)
      .input ('Username',      sql.VarChar(80),   username)
      .input ('Email',         sql.NVarChar(150), email)
      .input ('PasswordHash',  sql.VarChar(255),  hash)
      .input ('PasswordSalt',  sql.VarChar(100),  salt)
      .input ('RoleID',        sql.Int,           roleId || 2)
      .output('NewUserID',     sql.Int)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('dbo.sp_UserCreate');

    const { ResultCode, ResultMessage, NewUserID } = r.output;
    if (ResultCode !== 0)
      return res.status(400).json({ success: false, code: ResultCode, message: ResultMessage });

    return res.json({ success: true, message: ResultMessage, userId: NewUserID });
  } catch (err) {
    console.error('POST /users error:', err);
    return res.status(500).json({ success: false, message: 'שגיאת שרת' });
  }
});

// ── PUT /api/users/:id — עדכון משתמש (sp_UserUpdate)
router.put('/:id', requireAuth, async (req, res) => {
  const id = parseInt(req.params.id);
  if (!id || id <= 0) return res.status(400).json({ success: false, message: 'ID לא תקין' });

  const { firstName, lastName, email, roleId, isActive } = req.body;

  try {
    const r = await (await getPool()).request()
      .input ('UserID',        sql.Int,          id)
      .input ('FirstName',     sql.NVarChar(100), firstName)
      .input ('LastName',      sql.NVarChar(100), lastName)
      .input ('Email',         sql.NVarChar(150), email)
      .input ('RoleID',        sql.Int,           roleId)
      .input ('IsActive',      sql.Bit,           isActive !== false ? 1 : 0)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('dbo.sp_UserUpdate');

    const { ResultCode, ResultMessage } = r.output;
    if (ResultCode !== 0) {
      const httpCode = ResultCode === 404 ? 404 : 400;
      return res.status(httpCode).json({ success: false, message: ResultMessage });
    }

    return res.json({ success: true, message: ResultMessage });
  } catch (err) {
    console.error('PUT /users/:id error:', err);
    return res.status(500).json({ success: false, message: 'שגיאת שרת' });
  }
});

// ── PUT /api/users/:id/toggle — חסום/שחרר משתמש
router.put('/:id/toggle', requireAuth, async (req, res) => {
  const userId = parseInt(req.params.id);
  try {
    const pool = await getPool();
    const check = await pool.request()
      .input('UserID',   sql.Int, userId)
      .input('TenantID', sql.Int, req.user.tenantId)
      .query(`SELECT IsActive, TenantID FROM dbo.tblUsers WHERE UserID=@UserID`);

    if (!check.recordset.length)
      return res.status(404).json({ success: false, message: 'משתמש לא נמצא' });

    const user = check.recordset[0];
    if (req.user.tenantId !== 1 && user.TenantID !== req.user.tenantId)
      return res.status(403).json({ success: false, message: 'אין הרשאה' });

    const newState = user.IsActive ? 0 : 1;
    await pool.request()
      .input('UserID',   sql.Int, userId)
      .input('IsActive', sql.Bit, newState)
      .query(`UPDATE dbo.tblUsers SET IsActive=@IsActive WHERE UserID=@UserID`);

    return res.json({ success: true, isActive: newState === 1 });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'שגיאת שרת' });
  }
});

module.exports = router;
