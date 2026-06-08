const express = require('express');
const router  = express.Router();
const { sql, getPool } = require('../db');
const requireAuth = require('../middleware/auth');
const { logAction } = require('../helpers/auditLogger');

router.use(requireAuth);

// GET /api/packages
router.get('/', async (req, res) => {
  try {
    const db = (await getPool()).request();
    const result = await db
      .input('TenantID', sql.Int, req.user.tenantId)
      .execute('dbo.sp_PackageList');
    res.json({ success: true, data: result.recordset });
  } catch (err) {
    console.error('packages GET:', err);
    res.status(500).json({ success: false, message: 'שגיאה בטעינת חבילות' });
  }
});

// GET /api/packages/:id
router.get('/:id', async (req, res) => {
  try {
    const db = (await getPool()).request();
    const result = await db
      .input('PackageID', sql.Int, parseInt(req.params.id))
      .input('TenantID',  sql.Int, req.user.tenantId)
      .execute('dbo.sp_PackageGet');

    if (!result.recordsets[0]?.length)
      return res.status(404).json({ success: false, message: 'חבילה לא נמצאה' });

    const pkg = result.recordsets[0][0];
    pkg.Products = result.recordsets[1] || [];
    res.json({ success: true, data: pkg });
  } catch (err) {
    console.error('packages GET/:id:', err);
    res.status(500).json({ success: false, message: 'שגיאה בטעינת חבילה' });
  }
});

// POST /api/packages
router.post('/', async (req, res) => {
  try {
    const r = await _savePackage(0, req.user.tenantId, req.body);
    if (r.output.ResultCode !== 0)
      return res.status(400).json({ success: false, message: r.output.ResultMessage });
    await logAction(req, { actionType: 'CREATE', entityType: 'PACKAGE', entityId: r.output.NewID, entityName: req.body.PackageName });
    res.json({ success: true, data: { PackageID: r.output.NewID }, message: r.output.ResultMessage });
  } catch (err) {
    console.error('packages POST:', err);
    res.status(500).json({ success: false, message: 'שגיאה ביצירת חבילה' });
  }
});

// PUT /api/packages/:id
router.put('/:id', async (req, res) => {
  try {
    const r = await _savePackage(parseInt(req.params.id), req.user.tenantId, req.body);
    if (r.output.ResultCode !== 0)
      return res.status(400).json({ success: false, message: r.output.ResultMessage });
    await logAction(req, { actionType: 'UPDATE', entityType: 'PACKAGE', entityId: parseInt(req.params.id), entityName: req.body.PackageName });
    res.json({ success: true, message: r.output.ResultMessage });
  } catch (err) {
    console.error('packages PUT:', err);
    res.status(500).json({ success: false, message: 'שגיאה בעדכון חבילה' });
  }
});

async function _savePackage(packageId, tenantId, b) {
  const productIds = Array.isArray(b.ProductIDs) ? b.ProductIDs.join(',') : (b.ProductIDs || '');
  const db = (await getPool()).request();
  return db
    .input('PackageID',    sql.Int,            packageId)
    .input('TenantID',     sql.Int,            tenantId)
    .input('PackageCode',  sql.VarChar(30),    b.PackageCode || '')
    .input('PackageName',  sql.NVarChar(200),  b.PackageName || '')
    .input('Description',  sql.NVarChar(4000), b.Description || '')
    .input('PriceMonthly', sql.Decimal(10,2),  parseFloat(b.PriceMonthly) || 0)
    .input('PriceAnnual',  sql.Decimal(10,2),  parseFloat(b.PriceAnnual) || 0)
    .input('SetupFee',     sql.Decimal(10,2),  parseFloat(b.SetupFee) || 0)
    .input('TrialDays',    sql.Int,            parseInt(b.TrialDays) || 0)
    .input('MaxUsers',     sql.Int,            parseInt(b.MaxUsers) || 0)
    .input('IsPublic',     sql.Bit,            b.IsPublic ? 1 : 0)
    .input('SortOrder',    sql.Int,            parseInt(b.SortOrder) || 0)
    .input('IsActive',     sql.Bit,            b.IsActive !== false ? 1 : 0)
    .input('ProductIDs',   sql.NVarChar(4000), productIds)
    .output('ResultCode',    sql.Int)
    .output('ResultMessage', sql.NVarChar(200))
    .output('NewID',         sql.Int)
    .execute('dbo.sp_PackageSave');
}

module.exports = router;
