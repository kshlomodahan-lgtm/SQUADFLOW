const express     = require('express');
const router      = express.Router();
const { sql, getPool, poolConnect } = require('../db');
const requireAuth = require('../middleware/auth');

// ── GET /api/users — רשימת משתמשים (לפי תפקיד)
router.get('/', requireAuth, async (req, res) => {
  try {
    const isPlatform = req.user.tenantId === 1 && req.user.roleId === 1;
    let query, request = (await getPool()).request();

    if (isPlatform) {
      // מנהל פלטפורמה — כל ה-admin של כל הארגונים
      query = `
        SELECT u.UserID, u.Username, u.FirstName+' '+u.LastName AS FullName,
               u.Email, u.IsActive, u.LastLoginAt, u.MustChangePass,
               t.TenantCode, t.CompanyName AS OrgName,
               ur.RoleName
        FROM   dbo.tblUsers u
        JOIN   dbo.tblTenants   t  ON t.TenantID  = u.TenantID
        JOIN   dbo.tblUserRoles ur ON ur.RoleID    = u.RoleID
        WHERE  u.TenantID > 1 AND u.UserID > 0
        ORDER  BY t.CompanyName, u.Username`;
    } else {
      // Admin ארגון — רק משתמשי הארגון שלו
      request.input('TenantID', sql.Int, req.user.tenantId);
      query = `
        SELECT u.UserID, u.Username, u.FirstName+' '+u.LastName AS FullName,
               u.Email, u.IsActive, u.LastLoginAt, u.MustChangePass,
               ur.RoleName, ur.RoleCode
        FROM   dbo.tblUsers u
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

// ── PUT /api/users/:id/toggle — חסום/שחרר משתמש
router.put('/:id/toggle', requireAuth, async (req, res) => {
  const userId = parseInt(req.params.id);
  try {
    const pool = await getPool();
    // בדוק בעלות
    const check = await pool.request()
      .input('UserID', sql.Int, userId)
      .input('TenantID', sql.Int, req.user.tenantId)
      .query(`SELECT IsActive, TenantID FROM dbo.tblUsers WHERE UserID=@UserID`);

    if (!check.recordset.length)
      return res.status(404).json({ success: false, message: 'משתמש לא נמצא' });

    const user = check.recordset[0];
    // Platform admin יכול לערוך כל ארגון, אחרים רק את שלהם
    if (req.user.tenantId !== 1 && user.TenantID !== req.user.tenantId)
      return res.status(403).json({ success: false, message: 'אין הרשאה' });

    const newState = user.IsActive ? 0 : 1;
    await pool.request()
      .input('UserID', sql.Int, userId)
      .input('IsActive', sql.Bit, newState)
      .query(`UPDATE dbo.tblUsers SET IsActive=@IsActive WHERE UserID=@UserID`);

    // נקה כשלונות אם שוחרר
    if (newState === 1) {
      await pool.request()
        .input('UserID', sql.Int, userId)
        .query(`SET QUOTED_IDENTIFIER ON; DELETE FROM dbo.tblLoginAudit WHERE UserID=@UserID AND IsSuccess=0`);
    }

    return res.json({ success: true, isActive: newState === 1 });
  } catch (err) {
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
               u.FirstName + ' ' + u.LastName AS FullName,
               u.Email, u.Phone,
               ur.RoleName, ur.RoleCode,
               c.CompanyName, c.CustomerCode,
               u.LastLoginAt, u.MustChangePass
        FROM   dbo.tblUsers u
        JOIN   dbo.tblUserRoles ur ON ur.RoleID   = u.RoleID
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

module.exports = router;
