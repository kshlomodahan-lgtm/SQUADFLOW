const express = require('express');
const router  = express.Router();
const { sql, getPool, poolConnect } = require('../db');
const { verifyToken } = require('../middleware/auth');

router.use(verifyToken);

// GET /api/permissions/resolve — effective permissions for current user
router.get('/resolve', async (req, res) => {
  try {
    const pool   = await getPool();
    const roleId = req.user.roleId;

    // Super Admin (roleId=1) — all permissions
    if (roleId === 1) {
      const r = await pool.request().query(`
        SELECT mi.MenuItemCode, mi.MenuItemName, mi.MenuItemType,
               at2.ActionCode, at2.ActionName, at2.ActionGroup,
               1 AS IsAllowed
        FROM   dbo.tblMenuItems  mi
        CROSS JOIN dbo.tblActionTypes at2
        WHERE  mi.IsActive = 1
        ORDER  BY mi.SortOrder, at2.ActionCode
      `);
      return res.json({ success: true, data: r.recordset });
    }

    // Regular user — pull allowed rows from permission matrix
    const r = await pool.request()
      .input('RoleID', sql.Int, roleId)
      .query(`
        SELECT mi.MenuItemCode, mi.MenuItemName, mi.MenuItemType,
               rp.ActionCode, at2.ActionName, at2.ActionGroup,
               rp.IsAllowed
        FROM   dbo.tblRolePermissions rp
        JOIN   dbo.tblMenuItems  mi   ON mi.MenuItemID  = rp.MenuItemID
        JOIN   dbo.tblActionTypes at2 ON at2.ActionCode = rp.ActionCode
        WHERE  rp.RoleID    = @RoleID
          AND  mi.IsActive  = 1
          AND  rp.IsAllowed = 1
        ORDER  BY mi.SortOrder, rp.ActionCode
      `);

    res.json({ success: true, data: r.recordset });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// GET /api/permissions/users/:userId/roles
router.get('/users/:userId/roles', async (req, res) => {
  const userId = parseInt(req.params.userId);
  try {
    await poolConnect;
    const pool = await getPool();
    const result = await pool.request()
      .input('UserID', sql.Int, userId)
      .query(`
        SELECT ura.RoleID, r.RoleName, r.RoleCode, r.ColorHex, r.RoleType,
               ura.AssignedAt, ura.ExpiryDate, ura.IsActive
        FROM tblUserRoleAssignments ura
        JOIN tblRoles r ON r.RoleID=ura.RoleID
        WHERE ura.UserID=@UserID AND ura.IsActive=1
        ORDER BY r.SortOrder
      `);
    res.json({ success: true, data: result.recordset });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// POST /api/permissions/users/:userId/roles — assign
router.post('/users/:userId/roles', async (req, res) => {
  const userId = parseInt(req.params.userId);
  const { roleId, expiryDate = null } = req.body;
  try {
    await poolConnect;
    const pool = await getPool();
    const result = await pool.request()
      .input('UserID',           sql.Int,      userId)
      .input('RoleID',           sql.Int,      roleId)
      .input('Action',           sql.VarChar(10), 'ADD')
      .input('ExpiryDate',       sql.DateTime, expiryDate)
      .input('AssignedByUserID', sql.Int,      req.user.userId)
      .input('TenantID',         sql.Int,      req.user.tenantId)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('sp_UserRoleAssign');

    if (result.output.ResultCode < 0)
      return res.status(400).json({ success: false, message: result.output.ResultMessage });

    res.json({ success: true, message: 'תפקיד שויך בהצלחה' });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// DELETE /api/permissions/users/:userId/roles/:roleId — remove
router.delete('/users/:userId/roles/:roleId', async (req, res) => {
  const userId = parseInt(req.params.userId);
  const roleId = parseInt(req.params.roleId);
  try {
    await poolConnect;
    const pool = await getPool();
    await pool.request()
      .input('UserID',           sql.Int,         userId)
      .input('RoleID',           sql.Int,         roleId)
      .input('Action',           sql.VarChar(10), 'REMOVE')
      .input('ExpiryDate',       sql.DateTime,    null)
      .input('AssignedByUserID', sql.Int,         req.user.userId)
      .input('TenantID',         sql.Int,         req.user.tenantId)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('sp_UserRoleAssign');

    res.json({ success: true, message: 'תפקיד הוסר' });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// GET /api/permissions/users/:userId/overrides
router.get('/users/:userId/overrides', async (req, res) => {
  const userId = parseInt(req.params.userId);
  try {
    await poolConnect;
    const pool = await getPool();
    const result = await pool.request()
      .input('UserID', sql.Int, userId)
      .query(`
        SELECT upo.OverrideID, upo.MenuItemID, m.MenuItemName, upo.ActionCode,
               at2.ActionName, upo.IsAllowed, upo.Reason, upo.ExpiryDate, upo.CreatedAt
        FROM tblUserPermissionOverrides upo
        JOIN tblMenuItems m   ON m.MenuItemID = upo.MenuItemID
        JOIN tblActionTypes at2 ON at2.ActionCode = upo.ActionCode
        WHERE upo.UserID=@UserID
        ORDER BY upo.CreatedAt DESC
      `);
    res.json({ success: true, data: result.recordset });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

module.exports = router;
