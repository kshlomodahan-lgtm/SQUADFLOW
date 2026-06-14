const express = require('express');
const router  = express.Router();
const { sql, getPool } = require('../db');
const { verifyToken } = require('../middleware/auth');
const { logAction } = require('../helpers/auditLogger');

router.use(verifyToken);

async function initTables() {
  const pool = await getPool();
  await pool.request().query(`
    IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblPermAssignments' AND xtype='U')
    CREATE TABLE dbo.tblPermAssignments (
      AssignmentID  INT IDENTITY(1,1) PRIMARY KEY,
      TenantID      INT             NOT NULL,
      PermCodeID    INT             NOT NULL,
      EntityType    VARCHAR(20)     NOT NULL DEFAULT '',   -- PROFILE|GROUP|CONTENT_GROUP|USER
      EntityID      INT             NOT NULL DEFAULT 0,
      EntityName    NVARCHAR(150)   NOT NULL DEFAULT '',   -- denorm לתצוגה
      Actions       NVARCHAR(500)   NOT NULL DEFAULT '',   -- VIEW,CREATE,EDIT,DELETE,EXPORT,EXECUTE
      IsGrant       BIT             NOT NULL DEFAULT 1,    -- לוגיקה עסקית: 1=אפשר 0=חסום
      IsActive      BIT             NOT NULL DEFAULT 1,
      CreatedAt     DATETIME        NOT NULL DEFAULT GETDATE(),
      CONSTRAINT UQ_PermAssignment UNIQUE (TenantID, PermCodeID, EntityType, EntityID)
    );
  `);
}
initTables().catch(e => console.warn('[perm-assignments] init:', e.message));

// GET /api/perm-assignments
router.get('/', async (req, res) => {
  try {
    const r = await (await getPool()).request()
      .input('TenantID', sql.Int, req.user.tenantId)
      .query(`
        SELECT a.AssignmentID, a.TenantID, a.PermCodeID,
               a.EntityType, a.EntityID, a.EntityName,
               a.Actions, a.IsGrant, a.IsActive, a.CreatedAt,
               p.PermCode, p.PermName, p.Scope, p.ControlType, p.SourceType
        FROM   dbo.tblPermAssignments a
        JOIN   dbo.tblPermissionCodes p ON p.PermCodeID = a.PermCodeID
        WHERE  a.TenantID = @TenantID
        ORDER  BY p.Scope, p.PermName, a.EntityType, a.EntityName
      `);
    res.json({ success: true, data: r.recordset });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

// POST /api/perm-assignments
router.post('/', async (req, res) => {
  const { permCodeId, entityType = '', entityId = 0, entityName = '',
          actions = '', isGrant = true } = req.body;

  if (!permCodeId || !entityType)
    return res.status(400).json({ success: false, message: 'permCodeId ו-entityType חובה' });

  try {
    const r = await (await getPool()).request()
      .input('TenantID',   sql.Int,           req.user.tenantId)
      .input('PermCodeID', sql.Int,            permCodeId)
      .input('EntityType', sql.VarChar(20),   entityType.toUpperCase())
      .input('EntityID',   sql.Int,            entityId)
      .input('EntityName', sql.NVarChar(150),  entityName)
      .input('Actions',    sql.NVarChar(500),  actions || '')
      .input('IsGrant',    sql.Bit,            isGrant ? 1 : 0)
      .query(`
        INSERT INTO dbo.tblPermAssignments
          (TenantID, PermCodeID, EntityType, EntityID, EntityName, Actions, IsGrant)
        OUTPUT INSERTED.AssignmentID
        VALUES
          (@TenantID, @PermCodeID, @EntityType, @EntityID, @EntityName, @Actions, @IsGrant)
      `);
    const id = r.recordset[0].AssignmentID;
    await logAction(req, { actionType: 'CREATE', entityType: 'PERM_ASSIGNMENT', entityId: id, entityName: `${entityType}/${entityName}` });
    res.json({ success: true, data: { assignmentId: id }, message: 'שיוך נוצר בהצלחה' });
  } catch (e) {
    if (e.message.includes('UQ_PermAssignment'))
      return res.status(400).json({ success: false, message: 'שיוך זה כבר קיים' });
    res.status(500).json({ success: false, message: e.message });
  }
});

// PUT /api/perm-assignments/:id
router.put('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { actions = '', isGrant = true, isActive = true } = req.body;
  try {
    await (await getPool()).request()
      .input('AssignmentID', sql.Int,          id)
      .input('TenantID',     sql.Int,          req.user.tenantId)
      .input('Actions',      sql.NVarChar(500), actions || '')
      .input('IsGrant',      sql.Bit,           isGrant ? 1 : 0)
      .input('IsActive',     sql.Bit,           isActive ? 1 : 0)
      .query(`
        UPDATE dbo.tblPermAssignments
        SET Actions=@Actions, IsGrant=@IsGrant, IsActive=@IsActive
        WHERE AssignmentID=@AssignmentID AND TenantID=@TenantID
      `);
    res.json({ success: true, message: 'עודכן בהצלחה' });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

// DELETE /api/perm-assignments/:id
router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await (await getPool()).request()
      .input('AssignmentID', sql.Int, id)
      .input('TenantID',     sql.Int, req.user.tenantId)
      .query(`DELETE FROM dbo.tblPermAssignments WHERE AssignmentID=@AssignmentID AND TenantID=@TenantID`);
    res.json({ success: true, message: 'שיוך הוסר' });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

module.exports = router;
