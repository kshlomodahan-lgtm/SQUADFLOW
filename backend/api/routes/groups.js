const express = require('express');
const router  = express.Router();
const { sql, getPool } = require('../db');
const { verifyToken, checkPermission } = require('../middleware/auth');
const { logAction } = require('../helpers/auditLogger');

router.use(verifyToken);

// ── ensure tables exist ───────────────────────────────────────
async function initGroupTables() {
  const pool = await getPool();
  await pool.request().query(`
    IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblGroups' AND xtype='U')
    CREATE TABLE dbo.tblGroups (
      GroupID     INT IDENTITY(1,1) PRIMARY KEY,
      TenantID    INT NOT NULL,
      GroupName   NVARCHAR(100) NOT NULL,
      GroupCode   VARCHAR(50)   NOT NULL,
      Description NVARCHAR(300) DEFAULT '',
      ColorHex    VARCHAR(7)    DEFAULT '#64748b',
      SortOrder   INT           DEFAULT 0,
      IsActive    BIT           DEFAULT 1,
      CreatedAt   DATETIME      DEFAULT GETDATE(),
      UpdatedAt   DATETIME      DEFAULT GETDATE(),
      CONSTRAINT UQ_Groups_Code UNIQUE (TenantID, GroupCode)
    );

    -- Add missing columns to existing tblGroups
    IF EXISTS (SELECT 1 FROM sysobjects WHERE name='tblGroups' AND xtype='U')
    BEGIN
      IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblGroups') AND name='SortOrder')
        ALTER TABLE dbo.tblGroups ADD SortOrder INT DEFAULT 0;
      IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblGroups') AND name='Description')
        ALTER TABLE dbo.tblGroups ADD Description NVARCHAR(300) DEFAULT '';
      IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblGroups') AND name='ColorHex')
        ALTER TABLE dbo.tblGroups ADD ColorHex VARCHAR(7) DEFAULT '#64748b';
      IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblGroups') AND name='UpdatedAt')
        ALTER TABLE dbo.tblGroups ADD UpdatedAt DATETIME DEFAULT GETDATE();
    END

    IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblGroupRoles' AND xtype='U')
    CREATE TABLE dbo.tblGroupRoles (
      GroupID INT NOT NULL,
      RoleID  INT NOT NULL,
      PRIMARY KEY (GroupID, RoleID),
      FOREIGN KEY (GroupID) REFERENCES dbo.tblGroups(GroupID) ON DELETE CASCADE,
      FOREIGN KEY (RoleID)  REFERENCES dbo.tblRoles(RoleID)   ON DELETE CASCADE
    );

    IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblUserGroups' AND xtype='U')
    CREATE TABLE dbo.tblUserGroups (
      UserID     INT NOT NULL,
      GroupID    INT NOT NULL,
      AssignedAt DATETIME DEFAULT GETDATE(),
      PRIMARY KEY (UserID, GroupID),
      FOREIGN KEY (GroupID) REFERENCES dbo.tblGroups(GroupID) ON DELETE CASCADE
    );
  `);
}
initGroupTables().catch(e => console.warn('[groups] table init:', e.message));

// GET /api/groups
router.get('/', async (req, res) => {
  try {
    const r = await (await getPool()).request()
      .input('TenantID', sql.Int, req.user.tenantId)
      .query(`
        SELECT g.GroupID, g.GroupName, g.GroupCode, g.Description, g.ColorHex,
               g.SortOrder, g.IsActive, g.CreatedAt,
               COUNT(DISTINCT ug.UserID) AS UserCount,
               STRING_AGG(ro.RoleName, ', ') AS RoleNames
        FROM   dbo.tblGroups g
        LEFT JOIN dbo.tblUserGroups ug ON ug.GroupID = g.GroupID
        LEFT JOIN dbo.tblGroupRoles gr ON gr.GroupID = g.GroupID
        LEFT JOIN dbo.tblRoles      ro ON ro.RoleID  = gr.RoleID
        WHERE  g.TenantID = @TenantID
        GROUP BY g.GroupID, g.GroupName, g.GroupCode, g.Description,
                 g.ColorHex, g.SortOrder, g.IsActive, g.CreatedAt
        ORDER BY g.SortOrder, g.GroupName
      `);
    res.json({ success: true, data: r.recordset });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

// POST /api/groups
router.post('/', checkPermission('GROUPS', 'CREATE'), async (req, res) => {
  const { groupName, groupCode, description = '', colorHex = '#64748b', sortOrder = 0, roleIds = [] } = req.body;
  if (!groupName || !groupCode)
    return res.status(400).json({ success: false, message: 'שם וקוד קבוצה חובה' });
  try {
    const pool = await getPool();
    const r = await pool.request()
      .input('TenantID',    sql.Int,          req.user.tenantId)
      .input('GroupName',   sql.NVarChar(100), groupName)
      .input('GroupCode',   sql.VarChar(50),   groupCode.toUpperCase())
      .input('Description', sql.NVarChar(300), description)
      .input('ColorHex',    sql.VarChar(7),    colorHex)
      .input('SortOrder',   sql.Int,           sortOrder)
      .query(`INSERT INTO dbo.tblGroups(TenantID,GroupName,GroupCode,Description,ColorHex,SortOrder)
              OUTPUT INSERTED.GroupID
              VALUES(@TenantID,@GroupName,@GroupCode,@Description,@ColorHex,@SortOrder)`);

    const groupId = r.recordset[0].GroupID;

    if (roleIds.length) {
      for (const rid of roleIds) {
        await pool.request()
          .input('GroupID', sql.Int, groupId)
          .input('RoleID',  sql.Int, rid)
          .query('INSERT INTO dbo.tblGroupRoles(GroupID,RoleID) VALUES(@GroupID,@RoleID)');
      }
    }

    await logAction(req, { actionType: 'CREATE', entityType: 'GROUP', entityId: groupId, entityName: groupName });
    res.json({ success: true, data: { groupId }, message: 'קבוצה נוצרה בהצלחה' });
  } catch (e) {
    if (e.message.includes('UQ_Groups_Code'))
      return res.status(400).json({ success: false, message: 'קוד קבוצה כבר קיים' });
    res.status(500).json({ success: false, message: e.message });
  }
});

// PUT /api/groups/:id
router.put('/:id', checkPermission('GROUPS', 'UPDATE'), async (req, res) => {
  const id = parseInt(req.params.id);
  const { groupName, groupCode, description = '', colorHex = '#64748b', sortOrder = 0, isActive = true, roleIds = [] } = req.body;
  try {
    const pool = await getPool();
    await pool.request()
      .input('GroupID',     sql.Int,          id)
      .input('TenantID',    sql.Int,          req.user.tenantId)
      .input('GroupName',   sql.NVarChar(100), groupName)
      .input('GroupCode',   sql.VarChar(50),   groupCode.toUpperCase())
      .input('Description', sql.NVarChar(300), description)
      .input('ColorHex',    sql.VarChar(7),    colorHex)
      .input('SortOrder',   sql.Int,           sortOrder)
      .input('IsActive',    sql.Bit,           isActive ? 1 : 0)
      .query(`UPDATE dbo.tblGroups
              SET GroupName=@GroupName, GroupCode=@GroupCode, Description=@Description,
                  ColorHex=@ColorHex, SortOrder=@SortOrder, IsActive=@IsActive, UpdatedAt=GETDATE()
              WHERE GroupID=@GroupID AND TenantID=@TenantID`);

    // replace roles
    await pool.request().input('GroupID', sql.Int, id)
      .query('DELETE FROM dbo.tblGroupRoles WHERE GroupID=@GroupID');
    for (const rid of roleIds) {
      await pool.request()
        .input('GroupID', sql.Int, id)
        .input('RoleID',  sql.Int, rid)
        .query('INSERT INTO dbo.tblGroupRoles(GroupID,RoleID) VALUES(@GroupID,@RoleID)');
    }

    await logAction(req, { actionType: 'UPDATE', entityType: 'GROUP', entityId: id, entityName: groupName });
    res.json({ success: true, message: 'עודכן בהצלחה' });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

// DELETE /api/groups/:id
router.delete('/:id', checkPermission('GROUPS', 'DELETE'), async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await (await getPool()).request()
      .input('GroupID',  sql.Int, id)
      .input('TenantID', sql.Int, req.user.tenantId)
      .query('UPDATE dbo.tblGroups SET IsActive=0 WHERE GroupID=@GroupID AND TenantID=@TenantID');
    res.json({ success: true, message: 'הקבוצה הוסרה' });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

// GET /api/groups/:id/users
router.get('/:id/users', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const r = await (await getPool()).request()
      .input('GroupID', sql.Int, id)
      .query(`SELECT u.UserID, u.FirstName+N' '+u.LastName AS FullName,
                     u.Username, u.Email, ug.AssignedAt
              FROM dbo.tblUserGroups ug
              JOIN dbo.tblUsers u ON u.UserID = ug.UserID
              WHERE ug.GroupID = @GroupID
              ORDER BY u.FirstName, u.LastName`);
    res.json({ success: true, data: r.recordset });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

// POST /api/groups/:id/users — assign user to group
router.post('/:id/users', async (req, res) => {
  const groupId = parseInt(req.params.id);
  const { userId } = req.body;
  try {
    await (await getPool()).request()
      .input('GroupID', sql.Int, groupId)
      .input('UserID',  sql.Int, userId)
      .query(`IF NOT EXISTS (SELECT 1 FROM dbo.tblUserGroups WHERE GroupID=@GroupID AND UserID=@UserID)
              INSERT INTO dbo.tblUserGroups(GroupID,UserID) VALUES(@GroupID,@UserID)`);
    res.json({ success: true, message: 'משתמש שויך לקבוצה' });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

// DELETE /api/groups/:id/users/:userId
router.delete('/:id/users/:userId', async (req, res) => {
  const groupId = parseInt(req.params.id);
  const userId  = parseInt(req.params.userId);
  try {
    await (await getPool()).request()
      .input('GroupID', sql.Int, groupId)
      .input('UserID',  sql.Int, userId)
      .query('DELETE FROM dbo.tblUserGroups WHERE GroupID=@GroupID AND UserID=@UserID');
    res.json({ success: true, message: 'משתמש הוסר מהקבוצה' });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

module.exports = router;
