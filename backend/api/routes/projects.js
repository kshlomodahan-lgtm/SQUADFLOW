const express = require('express');
const router  = express.Router();
const { sql, getPool } = require('../db');
const requireAuth = require('../middleware/auth');
const { logAction } = require('../helpers/auditLogger');

router.use(requireAuth);

// GET /api/projects
router.get('/', async (req, res) => {
  try {
    const db = (await getPool()).request();
    const result = await db
      .input('TenantID',   sql.Int,           req.user.tenantId)
      .input('SearchText', sql.NVarChar(100), req.query.search || null)
      .execute('dbo.sp_ProjectList');
    res.json({ success: true, data: result.recordset });
  } catch (err) {
    console.error('projects GET:', err);
    res.status(500).json({ success: false, message: 'שגיאה בטעינת פרויקטים' });
  }
});

// GET /api/projects/:id
router.get('/:id', async (req, res) => {
  try {
    const db = (await getPool()).request();
    const result = await db
      .input('ProjectID', sql.Int, parseInt(req.params.id))
      .input('TenantID',  sql.Int, req.user.tenantId)
      .execute('dbo.sp_ProjectGet');
    if (!result.recordset.length)
      return res.status(404).json({ success: false, message: 'פרויקט לא נמצא' });
    res.json({ success: true, data: result.recordset[0] });
  } catch (err) {
    console.error('projects GET/:id:', err);
    res.status(500).json({ success: false, message: 'שגיאה בטעינת פרויקט' });
  }
});

// POST /api/projects
router.post('/', async (req, res) => {
  try {
    const b = req.body;
    const db = (await getPool()).request();
    const outCode = new sql.Int(), outMsg = new sql.NVarChar(200);
    const result = await db
      .input('ProjectID',    sql.Int,           null)
      .input('TenantID',     sql.Int,           req.user.tenantId)
      .input('ProjectCode',  sql.NVarChar(50),  b.projectCode)
      .input('ProjectName',  sql.NVarChar(150), b.projectName)
      .input('Description',  sql.NVarChar(2000),b.description  || '')
      .input('ClientOrgID',  sql.Int,           b.clientOrgId  || null)
      .input('Status',       sql.NVarChar(20),  b.status       || 'draft')
      .input('StartDate',    sql.Date,          b.startDate    || null)
      .input('TargetDate',   sql.Date,          b.targetDate   || null)
      .input('CompletedDate',sql.Date,          b.completedDate|| null)
      .input('CreatedBy',    sql.Int,           req.user.userId)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('dbo.sp_ProjectSave');

    const code = result.output.ResultCode;
    const msg  = result.output.ResultMessage;
    if (code < 0) return res.status(400).json({ success: false, message: msg });

    await logAction(req, 'CREATE', 'PROJECT', code, `פרויקט חדש: ${b.projectName}`);
    res.status(201).json({ success: true, data: { projectId: code }, message: msg });
  } catch (err) {
    console.error('projects POST:', err);
    res.status(500).json({ success: false, message: 'שגיאה ביצירת פרויקט' });
  }
});

// PUT /api/projects/:id
router.put('/:id', async (req, res) => {
  try {
    const b = req.body;
    const db = (await getPool()).request();
    const result = await db
      .input('ProjectID',    sql.Int,           parseInt(req.params.id))
      .input('TenantID',     sql.Int,           req.user.tenantId)
      .input('ProjectCode',  sql.NVarChar(50),  b.projectCode)
      .input('ProjectName',  sql.NVarChar(150), b.projectName)
      .input('Description',  sql.NVarChar(2000),b.description  || '')
      .input('ClientOrgID',  sql.Int,           b.clientOrgId  || null)
      .input('Status',       sql.NVarChar(20),  b.status       || 'draft')
      .input('StartDate',    sql.Date,          b.startDate    || null)
      .input('TargetDate',   sql.Date,          b.targetDate   || null)
      .input('CompletedDate',sql.Date,          b.completedDate|| null)
      .input('CreatedBy',    sql.Int,           req.user.userId)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('dbo.sp_ProjectSave');

    const code = result.output.ResultCode;
    const msg  = result.output.ResultMessage;
    if (code < 0) return res.status(400).json({ success: false, message: msg });

    await logAction(req, 'UPDATE', 'PROJECT', parseInt(req.params.id), `עדכון פרויקט: ${b.projectName}`);
    res.json({ success: true, message: msg });
  } catch (err) {
    console.error('projects PUT:', err);
    res.status(500).json({ success: false, message: 'שגיאה בעדכון פרויקט' });
  }
});

// DELETE /api/projects/:id
router.delete('/:id', async (req, res) => {
  try {
    const db = (await getPool()).request();
    const result = await db
      .input('ProjectID', sql.Int, parseInt(req.params.id))
      .input('TenantID',  sql.Int, req.user.tenantId)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('dbo.sp_ProjectDelete');

    const code = result.output.ResultCode;
    const msg  = result.output.ResultMessage;
    if (code < 0) return res.status(400).json({ success: false, message: msg });

    await logAction(req, 'DELETE', 'PROJECT', parseInt(req.params.id), 'מחיקת פרויקט');
    res.json({ success: true, message: msg });
  } catch (err) {
    console.error('projects DELETE:', err);
    res.status(500).json({ success: false, message: 'שגיאה במחיקת פרויקט' });
  }
});

module.exports = router;
