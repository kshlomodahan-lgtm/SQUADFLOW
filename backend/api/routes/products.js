const express = require('express');
const router  = express.Router();
const { sql, getPool } = require('../db');
const requireAuth = require('../middleware/auth');

router.use(requireAuth);

// GET /api/products?search=
router.get('/', async (req, res) => {
  try {
    const search = req.query.search || null;
    const db = (await getPool()).request();
    const result = await db
      .input('TenantID',   sql.Int,           req.user.tenantId)
      .input('SearchText', sql.NVarChar(100), search)
      .execute('dbo.sp_ProductList');
    res.json({ success: true, data: result.recordset });
  } catch (err) {
    console.error('products GET:', err);
    res.status(500).json({ success: false, message: 'שגיאה בטעינת מוצרים' });
  }
});

// GET /api/products/:id
router.get('/:id', async (req, res) => {
  try {
    const db = (await getPool()).request();
    const result = await db
      .input('ProductID', sql.Int, parseInt(req.params.id))
      .input('TenantID',  sql.Int, req.user.tenantId)
      .execute('dbo.sp_ProductGet');
    if (!result.recordset.length)
      return res.status(404).json({ success: false, message: 'מוצר לא נמצא' });
    res.json({ success: true, data: result.recordset[0] });
  } catch (err) {
    console.error('products GET/:id:', err);
    res.status(500).json({ success: false, message: 'שגיאה בטעינת מוצר' });
  }
});

// POST /api/products
router.post('/', async (req, res) => {
  try {
    const r = await _saveProduct(0, req.user.tenantId, req.body);
    if (r.output.ResultCode !== 0)
      return res.status(400).json({ success: false, message: r.output.ResultMessage });
    res.json({ success: true, data: { ProductID: r.output.NewID }, message: r.output.ResultMessage });
  } catch (err) {
    console.error('products POST:', err);
    res.status(500).json({ success: false, message: 'שגיאה ביצירת מוצר' });
  }
});

// PUT /api/products/:id
router.put('/:id', async (req, res) => {
  try {
    const r = await _saveProduct(parseInt(req.params.id), req.user.tenantId, req.body);
    if (r.output.ResultCode !== 0)
      return res.status(400).json({ success: false, message: r.output.ResultMessage });
    res.json({ success: true, message: r.output.ResultMessage });
  } catch (err) {
    console.error('products PUT:', err);
    res.status(500).json({ success: false, message: 'שגיאה בעדכון מוצר' });
  }
});

async function _saveProduct(productId, tenantId, b) {
  const db = (await getPool()).request();
  return db
    .input('ProductID',          sql.Int,            productId)
    .input('TenantID',           sql.Int,            tenantId)
    .input('CategoryID',         sql.Int,            b.CategoryID || 0)
    .input('ProductCode',        sql.VarChar(30),    b.ProductCode || '')
    .input('ProductName',        sql.NVarChar(200),  b.ProductName || '')
    .input('ShortDescription',   sql.NVarChar(255),  b.ShortDescription || '')
    .input('Description',        sql.NVarChar(4000), b.Description || '')
    .input('ProductVersion',     sql.VarChar(20),    b.ProductVersion || '1.0')
    .input('PricingModel',       sql.VarChar(10),    b.PricingModel || 'FLAT')
    .input('PriceMonthly',       sql.Decimal(10,2),  parseFloat(b.PriceMonthly) || 0)
    .input('PriceAnnual',        sql.Decimal(10,2),  parseFloat(b.PriceAnnual) || 0)
    .input('SetupFee',           sql.Decimal(10,2),  parseFloat(b.SetupFee) || 0)
    .input('TrialDays',          sql.Int,            parseInt(b.TrialDays) || 0)
    .input('MaxUsers',           sql.Int,            parseInt(b.MaxUsers) || 0)
    .input('MaxStorage_GB',      sql.Int,            parseInt(b.MaxStorage_GB) || 0)
    .input('MaxRecords',         sql.Int,            parseInt(b.MaxRecords) || 0)
    .input('ApiCallsPerMonth',   sql.Int,            parseInt(b.ApiCallsPerMonth) || 0)
    .input('ColorHex',           sql.VarChar(7),     b.ColorHex || '#0D47FF')
    .input('IconName',           sql.VarChar(50),    b.IconName || '')
    .input('LogoUrl',            sql.NVarChar(255),  b.LogoUrl || '')
    .input('DeploymentType',     sql.VarChar(15),    b.DeploymentType || 'CLOUD')
    .input('SupportedLanguages', sql.NVarChar(100),  b.SupportedLanguages || '["he","en"]')
    .input('DocumentationUrl',   sql.NVarChar(255),  b.DocumentationUrl || '')
    .input('ProductStatus',      sql.VarChar(15),    b.ProductStatus || 'DRAFT')
    .input('IsPublic',           sql.Bit,            b.IsPublic ? 1 : 0)
    .input('LaunchDate',         sql.Date,           b.LaunchDate || null)
    .input('EndOfLifeDate',      sql.Date,           b.EndOfLifeDate || null)
    .input('SortOrder',          sql.Int,            parseInt(b.SortOrder) || 0)
    .input('IsActive',           sql.Bit,            b.IsActive !== false ? 1 : 0)
    .output('ResultCode',    sql.Int)
    .output('ResultMessage', sql.NVarChar(200))
    .output('NewID',         sql.Int)
    .execute('dbo.sp_ProductSave');
}

module.exports = router;
