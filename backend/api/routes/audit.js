const express    = require('express');
const router     = express.Router();
const { sql, getPool, poolConnect } = require('../db');
const requireAuth     = require('../middleware/auth');
const requirePlatform = require('../middleware/platformAdmin');
const { logAction }   = require('../helpers/auditLogger');

router.use(requireAuth);

// ── helper: הרצת SP עם output params ──────────────────────
async function runSP(spName, inputs = {}) {
  await poolConnect;
  const db  = await getPool();
  const req = db.request()
    .output('ResultCode',    sql.Int)
    .output('ResultMessage', sql.NVarChar(200));
  for (const [key, { type, val }] of Object.entries(inputs))
    req.input(key, type, val);
  return req.execute(spName);
}

// ══════════════════════════════════════════════════════════
// GET /api/audit — רשימה עם פילטרים (Tenant Admin)
// ══════════════════════════════════════════════════════════
router.get('/', async (req, res) => {
  try {
    const {
      dateFrom, dateTo, actionType, entityType,
      severity, customerId, userId, search,
      page = 1, pageSize = 25,
    } = req.query;

    const tenantId = req.user.tenantId; // tenant Admin: מסונן. Super Admin: מסנן ב-/platform

    await poolConnect;
    const db  = await getPool();
    const rq  = db.request()
      .input('TenantID',    sql.Int,           tenantId)
      .input('DateFrom',    sql.DateTime2,     dateFrom   ? new Date(dateFrom)   : null)
      .input('DateTo',      sql.DateTime2,     dateTo     ? new Date(dateTo)     : null)
      .input('ActionType',  sql.VarChar(50),   actionType || null)
      .input('EntityType',  sql.VarChar(50),   entityType || null)
      .input('Severity',    sql.VarChar(10),   severity   || null)
      .input('CustomerID',  sql.Int,           customerId ? parseInt(customerId) : null)
      .input('UserID',      sql.Int,           userId     ? parseInt(userId)     : null)
      .input('SearchTerm',  sql.NVarChar(200), search     || null)
      .input('PageNum',     sql.Int,           parseInt(page))
      .input('PageSize',    sql.Int,           parseInt(pageSize))
      .output('TotalCount',    sql.Int)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200));

    const result = await rq.execute('sp_AuditLog_List');
    const total  = result.output.TotalCount ?? 0;

    res.json({ success: true, data: result.recordset, total, page: +page, pageSize: +pageSize });
  } catch (err) {
    console.error('audit GET /:', err);
    res.status(500).json({ success: false, message: 'שגיאה בטעינת יומן פעילות' });
  }
});

// ══════════════════════════════════════════════════════════
// GET /api/audit/platform — cross-tenant (Super Admin only)
// ══════════════════════════════════════════════════════════
router.get('/platform', requirePlatform, async (req, res) => {
  try {
    const {
      dateFrom, dateTo, actionType, entityType,
      severity, customerId, userId, tenantId: filterTenant,
      search, page = 1, pageSize = 25,
    } = req.query;

    await poolConnect;
    const db  = await getPool();
    const rq  = db.request()
      .input('TenantID',    sql.Int,           filterTenant ? parseInt(filterTenant) : null)
      .input('DateFrom',    sql.DateTime2,     dateFrom   ? new Date(dateFrom)   : null)
      .input('DateTo',      sql.DateTime2,     dateTo     ? new Date(dateTo)     : null)
      .input('ActionType',  sql.VarChar(50),   actionType || null)
      .input('EntityType',  sql.VarChar(50),   entityType || null)
      .input('Severity',    sql.VarChar(10),   severity   || null)
      .input('CustomerID',  sql.Int,           customerId ? parseInt(customerId) : null)
      .input('UserID',      sql.Int,           userId     ? parseInt(userId)     : null)
      .input('SearchTerm',  sql.NVarChar(200), search     || null)
      .input('PageNum',     sql.Int,           parseInt(page))
      .input('PageSize',    sql.Int,           parseInt(pageSize))
      .output('TotalCount',    sql.Int)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200));

    const result = await rq.execute('sp_AuditLog_List');
    const total  = result.output.TotalCount ?? 0;

    res.json({ success: true, data: result.recordset, total, page: +page, pageSize: +pageSize });
  } catch (err) {
    console.error('audit GET /platform:', err);
    res.status(500).json({ success: false, message: 'שגיאה בטעינת יומן פלטפורמה' });
  }
});

// ══════════════════════════════════════════════════════════
// GET /api/audit/summary — סטטיסטיקות
// ══════════════════════════════════════════════════════════
router.get('/summary', async (req, res) => {
  try {
    const daysBack = parseInt(req.query.daysBack) || 30;

    await poolConnect;
    const db  = await getPool();
    const rq  = db.request()
      .input('TenantID',  sql.Int, req.user.tenantId)
      .input('DaysBack',  sql.Int, daysBack)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200));

    const result = await rq.execute('sp_AuditLog_Summary');
    // 3 result sets: actionSummary, topUsers, dailyActivity
    res.json({
      success: true,
      actionSummary: result.recordsets[0] || [],
      topUsers:      result.recordsets[1] || [],
      dailyActivity: result.recordsets[2] || [],
    });
  } catch (err) {
    console.error('audit GET /summary:', err);
    res.status(500).json({ success: false, message: 'שגיאה בטעינת סיכום' });
  }
});

// ══════════════════════════════════════════════════════════
// GET /api/audit/alerts — פעילות חשודה
// ══════════════════════════════════════════════════════════
router.get('/alerts', async (req, res) => {
  try {
    const hoursBack = parseInt(req.query.hoursBack) || 24;

    await poolConnect;
    const db  = await getPool();
    const rq  = db.request()
      .input('TenantID',  sql.Int, req.user.tenantId)
      .input('HoursBack', sql.Int, hoursBack)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200));

    const result = await rq.execute('sp_AuditLog_SecurityAlerts');
    res.json({
      success: true,
      failedLogins:      result.recordsets[0] || [],
      suspiciousExports: result.recordsets[1] || [],
      permissionChanges: result.recordsets[2] || [],
    });
  } catch (err) {
    console.error('audit GET /alerts:', err);
    res.status(500).json({ success: false, message: 'שגיאה בטעינת התראות' });
  }
});

// ══════════════════════════════════════════════════════════
// GET /api/audit/action-types
// ══════════════════════════════════════════════════════════
router.get('/action-types', async (req, res) => {
  try {
    await poolConnect;
    const db  = await getPool();
    const rq  = db.request()
      .input('TenantID', sql.Int, req.user.tenantId)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200));

    const result = await rq.execute('sp_AuditActionTypes_List');
    res.json({ success: true, data: result.recordset });
  } catch (err) {
    console.error('audit GET /action-types:', err);
    res.status(500).json({ success: false, message: 'שגיאה בטעינת סוגי פעולות' });
  }
});

// ══════════════════════════════════════════════════════════
// POST/PUT /api/audit/action-types — Tenant Admin בלבד
// ══════════════════════════════════════════════════════════
router.post('/action-types', async (req, res) => {
  try {
    const { actionTypeCode, actionTypeName, defaultSeverity, badgeColor, sortOrder, isActive } = req.body;
    await poolConnect;
    const db  = await getPool();
    const rq  = db.request()
      .input('ActionTypeID',    sql.Int,           0)
      .input('TenantID',        sql.Int,           req.user.tenantId)
      .input('ActionTypeCode',  sql.VarChar(50),   actionTypeCode)
      .input('ActionTypeName',  sql.NVarChar(100), actionTypeName)
      .input('DefaultSeverity', sql.VarChar(10),   defaultSeverity || 'INFO')
      .input('BadgeColor',      sql.VarChar(20),   badgeColor      || '#64748b')
      .input('SortOrder',       sql.Int,           sortOrder       ?? 0)
      .input('IsActive',        sql.Bit,           isActive        ?? 1)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200));

    const r = await rq.execute('sp_AuditActionTypes_Save');
    if (r.output.ResultCode !== 0)
      return res.status(400).json({ success: false, message: r.output.ResultMessage });
    await logAction(req, { actionType: 'CREATE', entityType: 'SETTINGS', entityName: actionTypeName });
    res.json({ success: true, message: r.output.ResultMessage });
  } catch (err) {
    console.error('audit POST /action-types:', err);
    res.status(500).json({ success: false, message: 'שגיאה ביצירת סוג פעולה' });
  }
});

router.put('/action-types/:id', async (req, res) => {
  try {
    const { actionTypeCode, actionTypeName, defaultSeverity, badgeColor, sortOrder, isActive } = req.body;
    await poolConnect;
    const db  = await getPool();
    const rq  = db.request()
      .input('ActionTypeID',    sql.Int,           parseInt(req.params.id))
      .input('TenantID',        sql.Int,           req.user.tenantId)
      .input('ActionTypeCode',  sql.VarChar(50),   actionTypeCode)
      .input('ActionTypeName',  sql.NVarChar(100), actionTypeName)
      .input('DefaultSeverity', sql.VarChar(10),   defaultSeverity || 'INFO')
      .input('BadgeColor',      sql.VarChar(20),   badgeColor      || '#64748b')
      .input('SortOrder',       sql.Int,           sortOrder       ?? 0)
      .input('IsActive',        sql.Bit,           isActive        ?? 1)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200));

    const r = await rq.execute('sp_AuditActionTypes_Save');
    if (r.output.ResultCode !== 0)
      return res.status(400).json({ success: false, message: r.output.ResultMessage });
    await logAction(req, { actionType: 'UPDATE', entityType: 'SETTINGS', entityId: +req.params.id, entityName: actionTypeName });
    res.json({ success: true, message: r.output.ResultMessage });
  } catch (err) {
    console.error('audit PUT /action-types/:id:', err);
    res.status(500).json({ success: false, message: 'שגיאה בעדכון סוג פעולה' });
  }
});

// ══════════════════════════════════════════════════════════
// GET /api/audit/entity-types
// ══════════════════════════════════════════════════════════
router.get('/entity-types', async (req, res) => {
  try {
    await poolConnect;
    const db  = await getPool();
    const rq  = db.request()
      .input('TenantID', sql.Int, req.user.tenantId)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200));

    const result = await rq.execute('sp_AuditEntityTypes_List');
    res.json({ success: true, data: result.recordset });
  } catch (err) {
    console.error('audit GET /entity-types:', err);
    res.status(500).json({ success: false, message: 'שגיאה בטעינת סוגי יישויות' });
  }
});

router.post('/entity-types', async (req, res) => {
  try {
    const { entityTypeCode, entityTypeName, moduleName, sortOrder, isActive } = req.body;
    await poolConnect;
    const db  = await getPool();
    const rq  = db.request()
      .input('EntityTypeID',   sql.Int,           0)
      .input('TenantID',       sql.Int,           req.user.tenantId)
      .input('EntityTypeCode', sql.VarChar(50),   entityTypeCode)
      .input('EntityTypeName', sql.NVarChar(100), entityTypeName)
      .input('ModuleName',     sql.NVarChar(100), moduleName || null)
      .input('SortOrder',      sql.Int,           sortOrder  ?? 0)
      .input('IsActive',       sql.Bit,           isActive   ?? 1)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200));

    const r = await rq.execute('sp_AuditEntityTypes_Save');
    if (r.output.ResultCode !== 0)
      return res.status(400).json({ success: false, message: r.output.ResultMessage });
    await logAction(req, { actionType: 'CREATE', entityType: 'SETTINGS', entityName: entityTypeName });
    res.json({ success: true, message: r.output.ResultMessage });
  } catch (err) {
    console.error('audit POST /entity-types:', err);
    res.status(500).json({ success: false, message: 'שגיאה ביצירת סוג יישות' });
  }
});

router.put('/entity-types/:id', async (req, res) => {
  try {
    const { entityTypeCode, entityTypeName, moduleName, sortOrder, isActive } = req.body;
    await poolConnect;
    const db  = await getPool();
    const rq  = db.request()
      .input('EntityTypeID',   sql.Int,           parseInt(req.params.id))
      .input('TenantID',       sql.Int,           req.user.tenantId)
      .input('EntityTypeCode', sql.VarChar(50),   entityTypeCode)
      .input('EntityTypeName', sql.NVarChar(100), entityTypeName)
      .input('ModuleName',     sql.NVarChar(100), moduleName || null)
      .input('SortOrder',      sql.Int,           sortOrder  ?? 0)
      .input('IsActive',       sql.Bit,           isActive   ?? 1)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200));

    const r = await rq.execute('sp_AuditEntityTypes_Save');
    if (r.output.ResultCode !== 0)
      return res.status(400).json({ success: false, message: r.output.ResultMessage });
    await logAction(req, { actionType: 'UPDATE', entityType: 'SETTINGS', entityId: +req.params.id, entityName: entityTypeName });
    res.json({ success: true, message: r.output.ResultMessage });
  } catch (err) {
    console.error('audit PUT /entity-types/:id:', err);
    res.status(500).json({ success: false, message: 'שגיאה בעדכון סוג יישות' });
  }
});

// ══════════════════════════════════════════════════════════
// GET /api/audit/:id — רשומה בודדת
// ══════════════════════════════════════════════════════════
router.get('/:id', async (req, res) => {
  try {
    await poolConnect;
    const db  = await getPool();
    const rq  = db.request()
      .input('AuditID',  sql.BigInt, parseInt(req.params.id))
      .input('TenantID', sql.Int,    req.user.tenantId)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200));

    const result = await rq.execute('sp_AuditLog_GetByID');
    if (!result.recordset.length)
      return res.status(404).json({ success: false, message: 'רשומה לא נמצאה' });
    res.json({ success: true, data: result.recordset[0] });
  } catch (err) {
    console.error('audit GET /:id:', err);
    res.status(500).json({ success: false, message: 'שגיאה בטעינת רשומה' });
  }
});

module.exports = router;
