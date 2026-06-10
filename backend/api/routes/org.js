const express = require('express');
const router  = express.Router();
const { sql, getPool, poolConnect } = require('../db');
const { verifyToken } = require('../middleware/auth');

router.use(verifyToken);

// ─── ORG UNITS ───────────────────────────────────────────────

// GET /api/org/units
router.get('/units', async (req, res) => {
  try {
    await poolConnect;
    const pool = await getPool();
    const result = await pool.request()
      .input('TenantID',      sql.Int, req.user.tenantId)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('sp_OrgUnitList');
    res.json({ success: true, data: result.recordset });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// POST /api/org/units
router.post('/units', async (req, res) => {
  const { parentOrgUnitId=0, unitName, unitCode, unitType='DEPARTMENT', description='', managerUserId=0, budgetCode='', sortOrder=0 } = req.body;
  try {
    await poolConnect;
    const pool = await getPool();
    const result = await pool.request()
      .input('OrgUnitID',       sql.Int,          0)
      .input('TenantID',        sql.Int,          req.user.tenantId)
      .input('ParentOrgUnitID', sql.Int,          parentOrgUnitId)
      .input('UnitName',        sql.NVarChar(100),unitName)
      .input('UnitCode',        sql.VarChar(30),  unitCode)
      .input('UnitType',        sql.VarChar(20),  unitType)
      .input('Description',     sql.NVarChar(200),description)
      .input('ManagerUserID',   sql.Int,          managerUserId)
      .input('BudgetCode',      sql.VarChar(30),  budgetCode)
      .input('SortOrder',       sql.Int,          sortOrder)
      .input('IsActive',        sql.Bit,          1)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('sp_OrgUnitSave');

    if (result.output.ResultCode < 0)
      return res.status(400).json({ success: false, message: result.output.ResultMessage });

    res.json({ success: true, data: { orgUnitId: result.output.ResultCode }, message: 'נשמר בהצלחה' });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// PUT /api/org/units/:id
router.put('/units/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { parentOrgUnitId=0, unitName, unitCode, unitType='DEPARTMENT', description='', managerUserId=0, budgetCode='', sortOrder=0, isActive=true } = req.body;
  try {
    await poolConnect;
    const pool = await getPool();
    const result = await pool.request()
      .input('OrgUnitID',       sql.Int,          id)
      .input('TenantID',        sql.Int,          req.user.tenantId)
      .input('ParentOrgUnitID', sql.Int,          parentOrgUnitId)
      .input('UnitName',        sql.NVarChar(100),unitName)
      .input('UnitCode',        sql.VarChar(30),  unitCode)
      .input('UnitType',        sql.VarChar(20),  unitType)
      .input('Description',     sql.NVarChar(200),description)
      .input('ManagerUserID',   sql.Int,          managerUserId)
      .input('BudgetCode',      sql.VarChar(30),  budgetCode)
      .input('SortOrder',       sql.Int,          sortOrder)
      .input('IsActive',        sql.Bit,          isActive ? 1 : 0)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('sp_OrgUnitSave');

    if (result.output.ResultCode < 0)
      return res.status(400).json({ success: false, message: result.output.ResultMessage });

    res.json({ success: true, message: 'עודכן בהצלחה' });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// DELETE /api/org/units/:id
router.delete('/units/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await poolConnect;
    const pool = await getPool();
    await pool.request()
      .input('OrgUnitID', sql.Int, id)
      .input('TenantID',  sql.Int, req.user.tenantId)
      .query('UPDATE tblOrgUnits SET IsActive=0 WHERE OrgUnitID=@OrgUnitID AND TenantID=@TenantID');
    res.json({ success: true, message: 'נמחק בהצלחה' });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// ─── JOB TITLES ──────────────────────────────────────────────

// GET /api/org/job-titles
router.get('/job-titles', async (req, res) => {
  try {
    await poolConnect;
    const pool = await getPool();
    const result = await pool.request()
      .input('TenantID', sql.Int, req.user.tenantId)
      .query(`
        SELECT jt.JobTitleID, jt.JobTitleName, jt.JobTitleCode, jt.TitleLevel, jt.DefaultRoleID,
               r.RoleName AS DefaultRoleName, jt.IsActive
        FROM tblJobTitles jt
        LEFT JOIN tblRoles r ON r.RoleID=jt.DefaultRoleID
        WHERE jt.TenantID=@TenantID AND jt.IsActive=1
        ORDER BY jt.TitleLevel, jt.JobTitleName
      `);
    res.json({ success: true, data: result.recordset });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// POST /api/org/job-titles
router.post('/job-titles', async (req, res) => {
  const { jobTitleName, jobTitleCode, titleLevel=4, defaultRoleId=0, isActive=true } = req.body;
  try {
    await poolConnect;
    const pool = await getPool();
    const result = await pool.request()
      .input('JobTitleID',    sql.Int,          0)
      .input('TenantID',      sql.Int,          req.user.tenantId)
      .input('JobTitleName',  sql.NVarChar(100),jobTitleName)
      .input('JobTitleCode',  sql.VarChar(50),  jobTitleCode)
      .input('TitleLevel',    sql.TinyInt,      titleLevel)
      .input('DefaultRoleID', sql.Int,          defaultRoleId)
      .input('IsActive',      sql.Bit,          isActive ? 1 : 0)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('sp_JobTitleSave');

    if (result.output.ResultCode < 0)
      return res.status(400).json({ success: false, message: result.output.ResultMessage });

    res.json({ success: true, data: { jobTitleId: result.output.ResultCode }, message: 'נשמר בהצלחה' });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// PUT /api/org/job-titles/:id
router.put('/job-titles/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { jobTitleName, jobTitleCode, titleLevel=4, defaultRoleId=0, isActive=true } = req.body;
  try {
    await poolConnect;
    const pool = await getPool();
    const result = await pool.request()
      .input('JobTitleID',    sql.Int,          id)
      .input('TenantID',      sql.Int,          req.user.tenantId)
      .input('JobTitleName',  sql.NVarChar(100),jobTitleName)
      .input('JobTitleCode',  sql.VarChar(50),  jobTitleCode)
      .input('TitleLevel',    sql.TinyInt,      titleLevel)
      .input('DefaultRoleID', sql.Int,          defaultRoleId)
      .input('IsActive',      sql.Bit,          isActive ? 1 : 0)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('sp_JobTitleSave');

    if (result.output.ResultCode < 0)
      return res.status(400).json({ success: false, message: result.output.ResultMessage });

    res.json({ success: true, message: 'עודכן בהצלחה' });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// ─── POSITIONS ───────────────────────────────────────────────

// GET /api/org/positions?unitId=X
router.get('/positions', async (req, res) => {
  const unitId = parseInt(req.query.unitId || '0');
  try {
    await poolConnect;
    const pool = await getPool();
    const result = await pool.request()
      .input('OrgUnitID',     sql.Int, unitId)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('sp_OrgPositionList');
    res.json({ success: true, data: result.recordset });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// POST /api/org/positions
router.post('/positions', async (req, res) => {
  const { orgUnitId, jobTitleId, positionName='', reportsToPositionId=0, headCount=1 } = req.body;
  try {
    await poolConnect;
    const pool = await getPool();
    const result = await pool.request()
      .input('OrgUnitID',           sql.Int,          orgUnitId)
      .input('JobTitleID',           sql.Int,          jobTitleId)
      .input('ReportsToPositionID',  sql.Int,          reportsToPositionId)
      .input('PositionName',         sql.NVarChar(100),positionName || null)
      .input('HeadCount',            sql.Int,          headCount)
      .input('IsActive',             sql.Bit,          1)
      .query(`
        INSERT INTO tblOrgPositions (OrgUnitID, JobTitleID, ReportsToPositionID, PositionName, HeadCount, IsActive)
        OUTPUT INSERTED.PositionID
        VALUES (@OrgUnitID, @JobTitleID, NULLIF(@ReportsToPositionID,0), NULLIF(@PositionName,''), @HeadCount, @IsActive)
      `);
    res.json({ success: true, data: { positionId: result.recordset[0].PositionID }, message: 'משרה נוצרה' });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// GET /api/org/positions/:id/users — list occupants
router.get('/positions/:id/users', async (req, res) => {
  const positionId = parseInt(req.params.id);
  try {
    await poolConnect;
    const pool = await getPool();
    const result = await pool.request()
      .input('PositionID', sql.Int, positionId)
      .query(`
        SELECT up.UserPositionID, up.UserID, up.StartDate, up.EndDate, up.IsPrimary,
               u.FirstName + N' ' + u.LastName AS FullName, u.Username, u.Email
        FROM dbo.tblUserPositions up
        JOIN dbo.tblUsers u ON u.UserID = up.UserID
        WHERE up.PositionID = @PositionID AND up.IsActive = 1
        ORDER BY up.IsPrimary DESC, u.FirstName
      `);
    res.json({ success: true, data: result.recordset });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// DELETE /api/org/positions/:id/users/:userId — remove occupant
router.delete('/positions/:id/users/:userId', async (req, res) => {
  const positionId = parseInt(req.params.id);
  const userId     = parseInt(req.params.userId);
  try {
    await poolConnect;
    const pool = await getPool();
    await pool.request()
      .input('PositionID', sql.Int, positionId)
      .input('UserID',     sql.Int, userId)
      .query('UPDATE dbo.tblUserPositions SET IsActive=0 WHERE PositionID=@PositionID AND UserID=@UserID');
    res.json({ success: true, message: 'עובד הוסר מהמשרה' });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// POST /api/org/positions/:id/assign — assign user to position
router.post('/positions/:id/assign', async (req, res) => {
  const positionId = parseInt(req.params.id);
  const { userId, startDate, endDate=null, isPrimary=true, autoAssignRole=true } = req.body;
  try {
    await poolConnect;
    const pool = await getPool();
    const result = await pool.request()
      .input('UserID',         sql.Int,  userId)
      .input('PositionID',     sql.Int,  positionId)
      .input('StartDate',      sql.Date, startDate)
      .input('EndDate',        sql.Date, endDate)
      .input('IsPrimary',      sql.Bit,  isPrimary ? 1 : 0)
      .input('AutoAssignRole', sql.Bit,  autoAssignRole ? 1 : 0)
      .input('TenantID',       sql.Int,  req.user.tenantId)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('sp_UserPositionSave');

    if (result.output.ResultCode < 0)
      return res.status(400).json({ success: false, message: result.output.ResultMessage });

    res.json({ success: true, message: 'עובד שויך למשרה בהצלחה' });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

module.exports = router;
