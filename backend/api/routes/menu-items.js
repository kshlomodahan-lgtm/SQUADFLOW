const express = require('express');
const router  = express.Router();
const { sql, getPool, poolConnect } = require('../db');
const { verifyToken } = require('../middleware/auth');

router.use(verifyToken);

// GET /api/menu-items — tree for current tenant
router.get('/', async (req, res) => {
  try {
    await poolConnect;
    const pool = await getPool();
    const result = await pool.request()
      .input('TenantID', sql.Int, req.user.tenantId)
      .output('ResultCode', sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('sp_MenuItemList');

    if (result.output.ResultCode < 0)
      return res.status(400).json({ success: false, message: result.output.ResultMessage });

    res.json({ success: true, data: result.recordset });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// POST /api/menu-items — create
router.post('/', async (req, res) => {
  const { parentId=0, menuItemCode, menuItemName, menuItemType='SCREEN', route='', icon='', sortOrder=0, isVisible=true, actionCodes='' } = req.body;
  try {
    await poolConnect;
    const pool = await getPool();
    const result = await pool.request()
      .input('MenuItemID',  sql.Int,          0)
      .input('TenantID',    sql.Int,          req.user.tenantId)
      .input('ParentID',    sql.Int,          parentId)
      .input('MenuItemCode',sql.NVarChar(50), menuItemCode)
      .input('MenuItemName',sql.NVarChar(100),menuItemName)
      .input('MenuItemType',sql.VarChar(20),  menuItemType)
      .input('Route',       sql.NVarChar(200),route)
      .input('Icon',        sql.NVarChar(50), icon)
      .input('SortOrder',   sql.Int,          sortOrder)
      .input('IsVisible',   sql.Bit,          isVisible ? 1 : 0)
      .input('IsActive',    sql.Bit,          1)
      .input('ActionCodes', sql.NVarChar(500),actionCodes)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('sp_MenuItemSave');

    if (result.output.ResultCode < 0)
      return res.status(400).json({ success: false, message: result.output.ResultMessage });

    res.json({ success: true, data: { menuItemId: result.output.ResultCode }, message: 'נשמר בהצלחה' });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// PUT /api/menu-items/:id — update
router.put('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { parentId=0, menuItemCode, menuItemName, menuItemType='SCREEN', route='', icon='', sortOrder=0, isVisible=true, isActive=true, actionCodes='' } = req.body;
  try {
    await poolConnect;
    const pool = await getPool();
    const result = await pool.request()
      .input('MenuItemID',  sql.Int,          id)
      .input('TenantID',    sql.Int,          req.user.tenantId)
      .input('ParentID',    sql.Int,          parentId)
      .input('MenuItemCode',sql.NVarChar(50), menuItemCode)
      .input('MenuItemName',sql.NVarChar(100),menuItemName)
      .input('MenuItemType',sql.VarChar(20),  menuItemType)
      .input('Route',       sql.NVarChar(200),route)
      .input('Icon',        sql.NVarChar(50), icon)
      .input('SortOrder',   sql.Int,          sortOrder)
      .input('IsVisible',   sql.Bit,          isVisible ? 1 : 0)
      .input('IsActive',    sql.Bit,          isActive ? 1 : 0)
      .input('ActionCodes', sql.NVarChar(500),actionCodes)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('sp_MenuItemSave');

    if (result.output.ResultCode < 0)
      return res.status(400).json({ success: false, message: result.output.ResultMessage });

    res.json({ success: true, message: 'עודכן בהצלחה' });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// DELETE /api/menu-items/:id — soft delete
router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await poolConnect;
    const pool = await getPool();
    await pool.request()
      .input('MenuItemID', sql.Int, id)
      .input('TenantID',   sql.Int, req.user.tenantId)
      .query('UPDATE tblMenuItems SET IsActive=0, UpdatedAt=GETDATE() WHERE MenuItemID=@MenuItemID AND TenantID=@TenantID AND IsSystem IS NULL');
    res.json({ success: true, message: 'נמחק בהצלחה' });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// GET /api/menu-items/action-types
router.get('/action-types', async (req, res) => {
  try {
    await poolConnect;
    const pool = await getPool();
    const result = await pool.request()
      .query('SELECT ActionCode, ActionName, ActionGroup, SortOrder FROM tblActionTypes WHERE IsActive=1 ORDER BY SortOrder');
    res.json({ success: true, data: result.recordset });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

module.exports = router;
