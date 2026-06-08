const express = require('express');
const router  = express.Router();
const { sql, getPool, poolConnect } = require('../db');
const { verifyToken } = require('../middleware/auth');

router.use(verifyToken);

// GET /api/roles
router.get('/', async (req, res) => {
  try {
    await poolConnect;
    const pool = await getPool();
    const result = await pool.request()
      .input('TenantID',      sql.Int, req.user.tenantId)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('sp_RoleList');

    res.json({ success: true, data: result.recordset });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// POST /api/roles
router.post('/', async (req, res) => {
  const { parentRoleId=0, roleName, roleCode, roleType='CUSTOM', maxUsers=0, expiryDate=null, colorHex='#64748b', sortOrder=0 } = req.body;
  try {
    await poolConnect;
    const pool = await getPool();
    const result = await pool.request()
      .input('RoleID',       sql.Int,          0)
      .input('TenantID',     sql.Int,          req.user.tenantId)
      .input('ParentRoleID', sql.Int,          parentRoleId)
      .input('RoleName',     sql.NVarChar(100),roleName)
      .input('RoleCode',     sql.VarChar(50),  roleCode)
      .input('RoleType',     sql.VarChar(20),  roleType)
      .input('MaxUsers',     sql.Int,          maxUsers)
      .input('ExpiryDate',   sql.Date,         expiryDate)
      .input('ColorHex',     sql.VarChar(7),   colorHex)
      .input('SortOrder',    sql.Int,          sortOrder)
      .input('IsActive',     sql.Bit,          1)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('sp_RoleSave');

    if (result.output.ResultCode < 0)
      return res.status(400).json({ success: false, message: result.output.ResultMessage });

    res.json({ success: true, data: { roleId: result.output.ResultCode }, message: 'תפקיד נוצר בהצלחה' });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// PUT /api/roles/:id
router.put('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { parentRoleId=0, roleName, roleCode, roleType='CUSTOM', maxUsers=0, expiryDate=null, colorHex='#64748b', sortOrder=0, isActive=true } = req.body;
  try {
    await poolConnect;
    const pool = await getPool();
    const result = await pool.request()
      .input('RoleID',       sql.Int,          id)
      .input('TenantID',     sql.Int,          req.user.tenantId)
      .input('ParentRoleID', sql.Int,          parentRoleId)
      .input('RoleName',     sql.NVarChar(100),roleName)
      .input('RoleCode',     sql.VarChar(50),  roleCode)
      .input('RoleType',     sql.VarChar(20),  roleType)
      .input('MaxUsers',     sql.Int,          maxUsers)
      .input('ExpiryDate',   sql.Date,         expiryDate)
      .input('ColorHex',     sql.VarChar(7),   colorHex)
      .input('SortOrder',    sql.Int,          sortOrder)
      .input('IsActive',     sql.Bit,          isActive ? 1 : 0)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('sp_RoleSave');

    if (result.output.ResultCode < 0)
      return res.status(400).json({ success: false, message: result.output.ResultMessage });

    res.json({ success: true, message: 'עודכן בהצלחה' });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// DELETE /api/roles/:id — soft delete
router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await poolConnect;
    const pool = await getPool();
    const r = await pool.request()
      .input('RoleID',   sql.Int, id)
      .input('TenantID', sql.Int, req.user.tenantId)
      .query('UPDATE tblRoles SET IsActive=0 WHERE RoleID=@RoleID AND TenantID=@TenantID AND IsSystem=0');
    res.json({ success: true, message: 'נמחק בהצלחה' });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// POST /api/roles/:id/clone
router.post('/:id/clone', async (req, res) => {
  const id = parseInt(req.params.id);
  const { newRoleName, newRoleCode } = req.body;
  try {
    await poolConnect;
    const pool = await getPool();
    const result = await pool.request()
      .input('SourceRoleID',  sql.Int,          id)
      .input('TenantID',      sql.Int,          req.user.tenantId)
      .input('NewRoleName',   sql.NVarChar(100),newRoleName)
      .input('NewRoleCode',   sql.VarChar(50),  newRoleCode)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('sp_RoleClone');

    if (result.output.ResultCode < 0)
      return res.status(400).json({ success: false, message: result.output.ResultMessage });

    res.json({ success: true, data: { roleId: result.output.ResultCode }, message: 'שוכפל בהצלחה' });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// GET /api/roles/:id/matrix
router.get('/:id/matrix', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await poolConnect;
    const pool = await getPool();
    const result = await pool.request()
      .input('RoleID',        sql.Int, id)
      .input('TenantID',      sql.Int, req.user.tenantId)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('sp_RolePermissionMatrix_Get');

    res.json({ success: true, data: result.recordset });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// POST /api/roles/:id/matrix — save full matrix
router.post('/:id/matrix', async (req, res) => {
  const id = parseInt(req.params.id);
  const { permissions } = req.body; // array of {menuItemId, actionCode, isAllowed}
  try {
    await poolConnect;
    const pool = await getPool();
    const result = await pool.request()
      .input('RoleID',           sql.Int,          id)
      .input('TenantID',         sql.Int,          req.user.tenantId)
      .input('PermissionsJson',  sql.NVarChar(sql.MAX), JSON.stringify(permissions))
      .input('UpdatedByUserID',  sql.Int,          req.user.userId)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('sp_RolePermissionMatrix_Save');

    if (result.output.ResultCode < 0)
      return res.status(400).json({ success: false, message: result.output.ResultMessage });

    res.json({ success: true, message: 'הרשאות נשמרו בהצלחה' });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

module.exports = router;
