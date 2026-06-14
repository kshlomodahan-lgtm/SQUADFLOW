const express = require('express');
const router  = express.Router();
const { sql, getPool } = require('../db');
const { verifyToken } = require('../middleware/auth');
const { logAction } = require('../helpers/auditLogger');

router.use(verifyToken);

async function initTables() {
  const pool = await getPool();
  await pool.request().query(`
    IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblContentEntityDefs' AND xtype='U')
    CREATE TABLE dbo.tblContentEntityDefs (
      EntityDefID  INT IDENTITY(1,1) PRIMARY KEY,
      TenantID     INT           NOT NULL,
      EntityCode   VARCHAR(50)   NOT NULL,
      EntityName   NVARCHAR(100) NOT NULL,
      SelectQuery  NVARCHAR(MAX) NOT NULL, -- must return KeyValue, DisplayLabel
      IsActive     BIT           DEFAULT 1,
      CreatedAt    DATETIME      DEFAULT GETDATE(),
      UpdatedAt    DATETIME      DEFAULT GETDATE(),
      CONSTRAINT UQ_EntityDef_Code UNIQUE (TenantID, EntityCode)
    );

    IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblContentGroups' AND xtype='U')
    CREATE TABLE dbo.tblContentGroups (
      ContentGroupID INT IDENTITY(1,1) PRIMARY KEY,
      TenantID       INT           NOT NULL,
      GroupName      NVARCHAR(100) NOT NULL,
      GroupCode      VARCHAR(50)   NOT NULL,
      EntityDefID    INT           NOT NULL,
      Description    NVARCHAR(300) DEFAULT '',
      IsActive       BIT           DEFAULT 1,
      CreatedAt      DATETIME      DEFAULT GETDATE(),
      UpdatedAt      DATETIME      DEFAULT GETDATE(),
      CONSTRAINT UQ_ContentGroup_Code UNIQUE (TenantID, GroupCode),
      FOREIGN KEY (EntityDefID) REFERENCES dbo.tblContentEntityDefs(EntityDefID)
    );

    IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblContentGroupItems' AND xtype='U')
    CREATE TABLE dbo.tblContentGroupItems (
      ItemID         INT IDENTITY(1,1) PRIMARY KEY,
      ContentGroupID INT           NOT NULL,
      KeyValue       NVARCHAR(200) NOT NULL,
      DisplayLabel   NVARCHAR(500) NOT NULL,
      SortOrder      INT           DEFAULT 0,
      FOREIGN KEY (ContentGroupID) REFERENCES dbo.tblContentGroups(ContentGroupID) ON DELETE CASCADE
    );

    IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblUserContentGroups' AND xtype='U')
    CREATE TABLE dbo.tblUserContentGroups (
      UserID         INT NOT NULL,
      ContentGroupID INT NOT NULL,
      AssignedAt     DATETIME DEFAULT GETDATE(),
      PRIMARY KEY (UserID, ContentGroupID),
      FOREIGN KEY (ContentGroupID) REFERENCES dbo.tblContentGroups(ContentGroupID) ON DELETE CASCADE
    );
  `);
}
initTables().catch(e => console.warn('[content-groups] init:', e.message));

// ── Entity Definitions ────────────────────────────────────────

// GET /api/content-groups/entity-defs
router.get('/entity-defs', async (req, res) => {
  try {
    const r = await (await getPool()).request()
      .input('TenantID', sql.Int, req.user.tenantId)
      .query(`
        SELECT ed.EntityDefID, ed.EntityCode, ed.EntityName, ed.SelectQuery, ed.IsActive, ed.CreatedAt,
               COUNT(cg.ContentGroupID) AS GroupCount
        FROM   dbo.tblContentEntityDefs ed
        LEFT JOIN dbo.tblContentGroups cg ON cg.EntityDefID = ed.EntityDefID
        WHERE  ed.TenantID = @TenantID
        GROUP BY ed.EntityDefID, ed.EntityCode, ed.EntityName, ed.SelectQuery, ed.IsActive, ed.CreatedAt
        ORDER BY ed.EntityName
      `);
    res.json({ success: true, data: r.recordset });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

// POST /api/content-groups/entity-defs
router.post('/entity-defs', async (req, res) => {
  const { entityCode, entityName, selectQuery } = req.body;
  if (!entityCode || !entityName || !selectQuery)
    return res.status(400).json({ success: false, message: 'קוד, שם ו-SelectQuery חובה' });
  try {
    const r = await (await getPool()).request()
      .input('TenantID',    sql.Int,           req.user.tenantId)
      .input('EntityCode',  sql.VarChar(50),   entityCode.toUpperCase())
      .input('EntityName',  sql.NVarChar(100),  entityName)
      .input('SelectQuery', sql.NVarChar(4000), selectQuery)
      .query(`INSERT INTO dbo.tblContentEntityDefs(TenantID,EntityCode,EntityName,SelectQuery)
              OUTPUT INSERTED.EntityDefID
              VALUES(@TenantID,@EntityCode,@EntityName,@SelectQuery)`);
    const entityDefId = r.recordset[0].EntityDefID;
    await logAction(req, { actionType: 'CREATE', entityType: 'CONTENT_ENTITY_DEF', entityId: entityDefId, entityName });
    res.json({ success: true, data: { entityDefId }, message: 'יישות תוכן נוצרה בהצלחה' });
  } catch (e) {
    if (e.message.includes('UQ_EntityDef_Code'))
      return res.status(400).json({ success: false, message: 'קוד יישות כבר קיים' });
    res.status(500).json({ success: false, message: e.message });
  }
});

// PUT /api/content-groups/entity-defs/:id
router.put('/entity-defs/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { entityCode, entityName, selectQuery, isActive = true } = req.body;
  try {
    await (await getPool()).request()
      .input('EntityDefID', sql.Int,           id)
      .input('TenantID',    sql.Int,           req.user.tenantId)
      .input('EntityCode',  sql.VarChar(50),   entityCode.toUpperCase())
      .input('EntityName',  sql.NVarChar(100),  entityName)
      .input('SelectQuery', sql.NVarChar(4000), selectQuery)
      .input('IsActive',    sql.Bit,            isActive ? 1 : 0)
      .query(`UPDATE dbo.tblContentEntityDefs
              SET EntityCode=@EntityCode, EntityName=@EntityName,
                  SelectQuery=@SelectQuery, IsActive=@IsActive, UpdatedAt=GETDATE()
              WHERE EntityDefID=@EntityDefID AND TenantID=@TenantID`);
    res.json({ success: true, message: 'עודכן בהצלחה' });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

// DELETE /api/content-groups/entity-defs/:id (soft)
router.delete('/entity-defs/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await (await getPool()).request()
      .input('EntityDefID', sql.Int, id)
      .input('TenantID',    sql.Int, req.user.tenantId)
      .query(`UPDATE dbo.tblContentEntityDefs SET IsActive=0
              WHERE EntityDefID=@EntityDefID AND TenantID=@TenantID`);
    res.json({ success: true, message: 'יישות הוסרה' });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

// POST /api/content-groups/entity-defs/:id/preview — run SELECT and return rows
router.post('/entity-defs/:id/preview', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const pool = await getPool();
    const defRow = await pool.request()
      .input('EntityDefID', sql.Int, id)
      .input('TenantID',    sql.Int, req.user.tenantId)
      .query('SELECT SelectQuery FROM dbo.tblContentEntityDefs WHERE EntityDefID=@EntityDefID AND TenantID=@TenantID');
    if (!defRow.recordset.length)
      return res.status(404).json({ success: false, message: 'יישות לא נמצאה' });

    const query = defRow.recordset[0].SelectQuery;
    const result = await pool.request().query(query);
    res.json({ success: true, data: result.recordset });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

// ── Content Groups ────────────────────────────────────────────

// GET /api/content-groups
router.get('/', async (req, res) => {
  try {
    const r = await (await getPool()).request()
      .input('TenantID', sql.Int, req.user.tenantId)
      .query(`
        SELECT cg.ContentGroupID, cg.GroupName, cg.GroupCode, cg.Description, cg.IsActive, cg.CreatedAt,
               ed.EntityName, ed.EntityCode,
               COUNT(ci.ItemID)       AS ItemCount,
               COUNT(ug.UserID)       AS UserCount
        FROM   dbo.tblContentGroups cg
        JOIN   dbo.tblContentEntityDefs ed ON ed.EntityDefID = cg.EntityDefID
        LEFT JOIN dbo.tblContentGroupItems  ci ON ci.ContentGroupID = cg.ContentGroupID
        LEFT JOIN dbo.tblUserContentGroups  ug ON ug.ContentGroupID = cg.ContentGroupID
        WHERE  cg.TenantID = @TenantID
        GROUP BY cg.ContentGroupID, cg.GroupName, cg.GroupCode, cg.Description,
                 cg.IsActive, cg.CreatedAt, ed.EntityName, ed.EntityCode
        ORDER BY cg.GroupName
      `);
    res.json({ success: true, data: r.recordset });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

// POST /api/content-groups
router.post('/', async (req, res) => {
  const { groupName, groupCode, entityDefId, description = '' } = req.body;
  if (!groupName || !groupCode || !entityDefId)
    return res.status(400).json({ success: false, message: 'שם, קוד ויישות תוכן חובה' });
  try {
    const r = await (await getPool()).request()
      .input('TenantID',    sql.Int,           req.user.tenantId)
      .input('GroupName',   sql.NVarChar(100),  groupName)
      .input('GroupCode',   sql.VarChar(50),    groupCode.toUpperCase())
      .input('EntityDefID', sql.Int,            entityDefId)
      .input('Description', sql.NVarChar(300),  description)
      .query(`INSERT INTO dbo.tblContentGroups(TenantID,GroupName,GroupCode,EntityDefID,Description)
              OUTPUT INSERTED.ContentGroupID
              VALUES(@TenantID,@GroupName,@GroupCode,@EntityDefID,@Description)`);
    const contentGroupId = r.recordset[0].ContentGroupID;
    await logAction(req, { actionType: 'CREATE', entityType: 'CONTENT_GROUP', entityId: contentGroupId, entityName: groupName });
    res.json({ success: true, data: { contentGroupId }, message: 'קבוצת תוכן נוצרה בהצלחה' });
  } catch (e) {
    if (e.message.includes('UQ_ContentGroup_Code'))
      return res.status(400).json({ success: false, message: 'קוד קבוצת תוכן כבר קיים' });
    res.status(500).json({ success: false, message: e.message });
  }
});

// PUT /api/content-groups/:id
router.put('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { groupName, groupCode, entityDefId, description = '', isActive = true, items = [] } = req.body;
  try {
    const pool = await getPool();
    await pool.request()
      .input('ContentGroupID', sql.Int,           id)
      .input('TenantID',       sql.Int,           req.user.tenantId)
      .input('GroupName',      sql.NVarChar(100),  groupName)
      .input('GroupCode',      sql.VarChar(50),    groupCode.toUpperCase())
      .input('EntityDefID',    sql.Int,            entityDefId)
      .input('Description',    sql.NVarChar(300),  description)
      .input('IsActive',       sql.Bit,            isActive ? 1 : 0)
      .query(`UPDATE dbo.tblContentGroups
              SET GroupName=@GroupName, GroupCode=@GroupCode, EntityDefID=@EntityDefID,
                  Description=@Description, IsActive=@IsActive, UpdatedAt=GETDATE()
              WHERE ContentGroupID=@ContentGroupID AND TenantID=@TenantID`);

    // replace items
    await pool.request().input('ContentGroupID', sql.Int, id)
      .query('DELETE FROM dbo.tblContentGroupItems WHERE ContentGroupID=@ContentGroupID');
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      await pool.request()
        .input('ContentGroupID', sql.Int,           id)
        .input('KeyValue',       sql.NVarChar(200),  item.KeyValue)
        .input('DisplayLabel',   sql.NVarChar(500),  item.DisplayLabel)
        .input('SortOrder',      sql.Int,            i)
        .query(`INSERT INTO dbo.tblContentGroupItems(ContentGroupID,KeyValue,DisplayLabel,SortOrder)
                VALUES(@ContentGroupID,@KeyValue,@DisplayLabel,@SortOrder)`);
    }

    await logAction(req, { actionType: 'UPDATE', entityType: 'CONTENT_GROUP', entityId: id, entityName: groupName });
    res.json({ success: true, message: 'עודכן בהצלחה' });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

// DELETE /api/content-groups/:id (soft)
router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await (await getPool()).request()
      .input('ContentGroupID', sql.Int, id)
      .input('TenantID',       sql.Int, req.user.tenantId)
      .query(`UPDATE dbo.tblContentGroups SET IsActive=0
              WHERE ContentGroupID=@ContentGroupID AND TenantID=@TenantID`);
    res.json({ success: true, message: 'קבוצת תוכן הוסרה' });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

// GET /api/content-groups/:id/items
router.get('/:id/items', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const r = await (await getPool()).request()
      .input('ContentGroupID', sql.Int, id)
      .query(`SELECT ItemID, KeyValue, DisplayLabel, SortOrder
              FROM dbo.tblContentGroupItems
              WHERE ContentGroupID=@ContentGroupID
              ORDER BY SortOrder, DisplayLabel`);
    res.json({ success: true, data: r.recordset });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

module.exports = router;
