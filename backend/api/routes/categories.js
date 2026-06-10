const express = require('express');
const router  = express.Router();
const { sql, getPool } = require('../db');
const requireAuth = require('../middleware/auth');
const { checkPermission } = require('../middleware/auth');
const { logAction } = require('../helpers/auditLogger');

router.use(requireAuth);

const norm = v => (v === null || v === undefined) ? '' : String(v);

// GET /api/categories
router.get('/', async (req, res) => {
  try {
    const db = (await getPool()).request();
    const result = await db
      .input('TenantID', sql.Int, req.user.tenantId)
      .execute('dbo.sp_CategoryList');
    res.json({ success: true, data: result.recordset });
  } catch (err) {
    console.error('categories GET:', err);
    res.status(500).json({ success: false, message: 'שגיאה בטעינת קטגוריות' });
  }
});

// POST /api/categories
router.post('/', checkPermission('CATALOG_CATEGORIES', 'CREATE'), async (req, res) => {
  try {
    const { CategoryCode, CategoryName, ColorHex = '#0D47FF', IconName = '', SortOrder = 0, IsActive = true } = req.body;
    const targetTenantId = (req.user.roleId === 1) ? 0 : req.user.tenantId;
    const db = (await getPool()).request();
    const r = await db
      .input('CategoryID',   sql.Int,            0)
      .input('TenantID',     sql.Int,            targetTenantId)
      .input('CategoryCode', sql.VarChar(30),    CategoryCode)
      .input('CategoryName', sql.NVarChar(100),  CategoryName)
      .input('ColorHex',     sql.VarChar(7),     ColorHex)
      .input('IconName',     sql.VarChar(50),    IconName)
      .input('SortOrder',    sql.Int,            SortOrder)
      .input('IsActive',     sql.Bit,            IsActive ? 1 : 0)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .output('NewID',         sql.Int)
      .execute('dbo.sp_CategorySave');
    if (r.output.ResultCode !== 0)
      return res.status(400).json({ success: false, message: r.output.ResultMessage });
    await logAction(req, { actionType: 'CREATE', entityType: 'ProductCategory',
      entityId: r.output.NewID, entityName: CategoryName,
      newValue: { CategoryCode, CategoryName, ColorHex, IconName, SortOrder } });
    res.json({ success: true, data: { CategoryID: r.output.NewID }, message: r.output.ResultMessage });
  } catch (err) {
    console.error('categories POST:', err);
    res.status(500).json({ success: false, message: 'שגיאה ביצירת קטגוריה' });
  }
});

// PUT /api/categories/:id
router.put('/:id', checkPermission('CATALOG_CATEGORIES', 'UPDATE'), async (req, res) => {
  try {
    const { CategoryCode, CategoryName, ColorHex, IconName, SortOrder, IsActive, TenantID } = req.body;
    const catId = parseInt(req.params.id);
    const targetTenantId = (TenantID === 0) ? 0 : req.user.tenantId;
    const db = await getPool();

    // שליפת ערכים קיימים לפני העדכון
    const existing = await db.request()
      .input('CategoryID', sql.Int, catId)
      .query('SELECT CategoryCode, CategoryName, ColorHex, IconName, SortOrder, IsActive FROM tblProductCategories WHERE CategoryID = @CategoryID');
    const old = existing.recordset[0] || {};

    const r = await db.request()
      .input('CategoryID',   sql.Int,            catId)
      .input('TenantID',     sql.Int,            targetTenantId)
      .input('CategoryCode', sql.VarChar(30),    CategoryCode)
      .input('CategoryName', sql.NVarChar(100),  CategoryName)
      .input('ColorHex',     sql.VarChar(7),     ColorHex)
      .input('IconName',     sql.VarChar(50),    IconName)
      .input('SortOrder',    sql.Int,            SortOrder)
      .input('IsActive',     sql.Bit,            IsActive ? 1 : 0)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .output('NewID',         sql.Int)
      .execute('dbo.sp_CategorySave');
    if (r.output.ResultCode !== 0)
      return res.status(400).json({ success: false, message: r.output.ResultMessage });

    const newFields = { CategoryCode, CategoryName, ColorHex, IconName, SortOrder, IsActive: !!IsActive };
    const fieldMap  = { CategoryCode: 'CategoryCode', CategoryName: 'CategoryName', ColorHex: 'ColorHex', IconName: 'IconName', SortOrder: 'SortOrder', IsActive: 'IsActive' };
    const changed   = Object.keys(newFields).filter(k => norm(old[fieldMap[k]]) !== norm(newFields[k]));
    const diffOld   = changed.length ? Object.fromEntries(changed.map(k => [k, old[fieldMap[k]] ?? ''])) : null;
    const diffNew   = changed.length ? Object.fromEntries(changed.map(k => [k, newFields[k]])) : null;

    await logAction(req, { actionType: 'UPDATE', entityType: 'ProductCategory',
      entityId: catId, entityName: CategoryName, oldValue: diffOld, newValue: diffNew });
    res.json({ success: true, message: r.output.ResultMessage });
  } catch (err) {
    console.error('categories PUT:', err);
    res.status(500).json({ success: false, message: 'שגיאה בעדכון קטגוריה' });
  }
});

module.exports = router;
