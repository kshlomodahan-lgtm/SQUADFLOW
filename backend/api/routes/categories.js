const express = require('express');
const router  = express.Router();
const { sql, getPool } = require('../db');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

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
router.post('/', async (req, res) => {
  try {
    const { CategoryCode, CategoryName, ColorHex = '#0D47FF', IconName = '', SortOrder = 0, IsActive = true } = req.body;
    const db = (await getPool()).request();
    const r = await db
      .input('CategoryID',   sql.Int,            0)
      .input('TenantID',     sql.Int,            req.user.tenantId)
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
    res.json({ success: true, data: { CategoryID: r.output.NewID }, message: r.output.ResultMessage });
  } catch (err) {
    console.error('categories POST:', err);
    res.status(500).json({ success: false, message: 'שגיאה ביצירת קטגוריה' });
  }
});

// PUT /api/categories/:id
router.put('/:id', async (req, res) => {
  try {
    const { CategoryCode, CategoryName, ColorHex, IconName, SortOrder, IsActive } = req.body;
    const db = (await getPool()).request();
    const r = await db
      .input('CategoryID',   sql.Int,            parseInt(req.params.id))
      .input('TenantID',     sql.Int,            req.user.tenantId)
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
    res.json({ success: true, message: r.output.ResultMessage });
  } catch (err) {
    console.error('categories PUT:', err);
    res.status(500).json({ success: false, message: 'שגיאה בעדכון קטגוריה' });
  }
});

module.exports = router;
