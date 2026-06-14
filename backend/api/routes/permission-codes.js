const express = require('express');
const router  = express.Router();
const { sql, getPool } = require('../db');
const { verifyToken } = require('../middleware/auth');
const { logAction } = require('../helpers/auditLogger');

router.use(verifyToken);

async function initTables() {
  const pool = await getPool();
  await pool.request().query(`
    IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblPermissionCodes' AND xtype='U')
    CREATE TABLE dbo.tblPermissionCodes (
      PermCodeID   INT IDENTITY(1,1) PRIMARY KEY,
      TenantID     INT            NOT NULL,
      ProductID    INT            NOT NULL DEFAULT 0,
      ProjectID    INT            NOT NULL DEFAULT 0,
      PermCode     VARCHAR(100)   NOT NULL DEFAULT '',
      PermName     NVARCHAR(150)  NOT NULL DEFAULT '',
      Scope        VARCHAR(20)    NOT NULL DEFAULT '',
      ControlType  VARCHAR(10)    NOT NULL DEFAULT '',
      SourceType   VARCHAR(10)    NOT NULL DEFAULT 'MANUAL',
      Tags         NVARCHAR(500)  NOT NULL DEFAULT '',
      Notes        NVARCHAR(2000) NOT NULL DEFAULT '',
      Description  NVARCHAR(300)  NOT NULL DEFAULT '',
      IsActive     BIT            NOT NULL DEFAULT 1,
      CreatedAt    DATETIME       NOT NULL DEFAULT GETDATE(),
      CONSTRAINT UQ_PermCode UNIQUE (TenantID, PermCode)
    );
  `);
  await pool.request().query(`
    IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('tblPermissionCodes') AND name='ProductID')
      ALTER TABLE dbo.tblPermissionCodes ADD ProductID INT NOT NULL DEFAULT 0;
    IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('tblPermissionCodes') AND name='ProjectID')
      ALTER TABLE dbo.tblPermissionCodes ADD ProjectID INT NOT NULL DEFAULT 0;
    IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('tblPermissionCodes') AND name='ControlType')
      ALTER TABLE dbo.tblPermissionCodes ADD ControlType VARCHAR(10) NOT NULL DEFAULT '';
    IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('tblPermissionCodes') AND name='SourceType')
      ALTER TABLE dbo.tblPermissionCodes ADD SourceType VARCHAR(10) NOT NULL DEFAULT 'MANUAL';
    IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('tblPermissionCodes') AND name='PermName')
      ALTER TABLE dbo.tblPermissionCodes ADD PermName NVARCHAR(150) NOT NULL DEFAULT '';
    IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('tblPermissionCodes') AND name='Tags')
      ALTER TABLE dbo.tblPermissionCodes ADD Tags NVARCHAR(500) NOT NULL DEFAULT '';
    IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('tblPermissionCodes') AND name='Notes')
      ALTER TABLE dbo.tblPermissionCodes ADD Notes NVARCHAR(2000) NOT NULL DEFAULT '';
    IF EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('tblPermissionCodes') AND name='Module')
      ALTER TABLE dbo.tblPermissionCodes DROP COLUMN Module;
  `);
}
initTables().catch(e => console.warn('[permission-codes] init:', e.message));

function generateBlCode() {
  const d = new Date();
  const date = `${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}`;
  const rand = Math.random().toString(36).substring(2,6).toUpperCase();
  return `BL_${date}_${rand}`;
}

// GET /api/permission-codes
router.get('/', async (req, res) => {
  try {
    const r = await (await getPool()).request()
      .input('TenantID', sql.Int, req.user.tenantId)
      .query(`
        SELECT PermCodeID, TenantID, ProductID, ProjectID,
               PermCode, PermName, Scope, ControlType,
               SourceType, Tags, Notes, Description, IsActive, CreatedAt
        FROM   dbo.tblPermissionCodes
        WHERE  TenantID = @TenantID
        ORDER  BY Scope, PermCode
      `);
    res.json({ success: true, data: r.recordset });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

// POST /api/permission-codes
router.post('/', async (req, res) => {
  const { permName = '', scope = 'BUSINESS_LOGIC', controlType = '',
          sourceType = 'MANUAL', tags = '', notes = '', description = '' } = req.body;

  if (!permName)
    return res.status(400).json({ success: false, message: 'שם ההרשאה חובה' });

  const permCode = scope === 'BUSINESS_LOGIC'
    ? generateBlCode()
    : (req.body.permCode || '').toUpperCase().replace(/\s/g,'_');

  if (!permCode)
    return res.status(400).json({ success: false, message: 'קוד הרשאה חובה' });

  try {
    const r = await (await getPool()).request()
      .input('TenantID',    sql.Int,           req.user.tenantId)
      .input('PermCode',    sql.VarChar(100),   permCode)
      .input('PermName',    sql.NVarChar(150),  permName)
      .input('Scope',       sql.VarChar(20),    scope.toUpperCase())
      .input('ControlType', sql.VarChar(10),    (controlType || '').toUpperCase())
      .input('SourceType',  sql.VarChar(10),    sourceType.toUpperCase())
      .input('Tags',        sql.NVarChar(500),  tags || '')
      .input('Notes',       sql.NVarChar(2000), notes || '')
      .input('Description', sql.NVarChar(300),  description || '')
      .query(`INSERT INTO dbo.tblPermissionCodes
                (TenantID,PermCode,PermName,Scope,ControlType,SourceType,Tags,Notes,Description)
              OUTPUT INSERTED.PermCodeID
              VALUES
                (@TenantID,@PermCode,@PermName,@Scope,@ControlType,@SourceType,@Tags,@Notes,@Description)`);
    const id = r.recordset[0].PermCodeID;
    await logAction(req, { actionType: 'CREATE', entityType: 'PERM_CODE', entityId: id, entityName: permName });
    res.json({ success: true, data: { permCodeId: id, permCode }, message: 'הרשאה נוצרה בהצלחה' });
  } catch (e) {
    if (e.message.includes('UQ_PermCode'))
      return res.status(400).json({ success: false, message: 'קוד הרשאה כבר קיים' });
    res.status(500).json({ success: false, message: e.message });
  }
});

// PUT /api/permission-codes/:id
router.put('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { permName = '', tags = '', notes = '', description = '', isActive = true } = req.body;
  try {
    await (await getPool()).request()
      .input('PermCodeID',  sql.Int,           id)
      .input('TenantID',    sql.Int,           req.user.tenantId)
      .input('PermName',    sql.NVarChar(150),  permName)
      .input('Tags',        sql.NVarChar(500),  tags || '')
      .input('Notes',       sql.NVarChar(2000), notes || '')
      .input('Description', sql.NVarChar(300),  description || '')
      .input('IsActive',    sql.Bit,            isActive ? 1 : 0)
      .query(`UPDATE dbo.tblPermissionCodes
              SET PermName=@PermName, Tags=@Tags, Notes=@Notes,
                  Description=@Description, IsActive=@IsActive
              WHERE PermCodeID=@PermCodeID AND TenantID=@TenantID`);
    res.json({ success: true, message: 'עודכן בהצלחה' });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

// PATCH /api/permission-codes/:id/toggle
router.patch('/:id/toggle', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await (await getPool()).request()
      .input('PermCodeID', sql.Int, id)
      .input('TenantID',   sql.Int, req.user.tenantId)
      .query(`UPDATE dbo.tblPermissionCodes
              SET IsActive = CASE WHEN IsActive=1 THEN 0 ELSE 1 END
              WHERE PermCodeID=@PermCodeID AND TenantID=@TenantID`);
    res.json({ success: true, message: 'סטטוס עודכן' });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

module.exports = router;
