const express = require('express');
const router  = express.Router();
const { sql, getPool } = require('../db');
const { verifyToken } = require('../middleware/auth');
const { logAction } = require('../helpers/auditLogger');

router.use(verifyToken);

async function initTables() {
  const pool = await getPool();
  await pool.request().query(`
    IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblProfiles' AND xtype='U')
    CREATE TABLE dbo.tblProfiles (
      ProfileID   INT IDENTITY(1,1) PRIMARY KEY,
      TenantID    INT           NOT NULL,
      ProfileName NVARCHAR(100) NOT NULL,
      ProfileCode VARCHAR(50)   NOT NULL,
      Description NVARCHAR(300) DEFAULT '',
      IsActive    BIT           DEFAULT 1,
      CreatedAt   DATETIME      DEFAULT GETDATE(),
      UpdatedAt   DATETIME      DEFAULT GETDATE(),
      CONSTRAINT UQ_Profiles_Code UNIQUE (TenantID, ProfileCode)
    );

    IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblUserProfiles' AND xtype='U')
    CREATE TABLE dbo.tblUserProfiles (
      UserID     INT NOT NULL,
      ProfileID  INT NOT NULL,
      AssignedAt DATETIME DEFAULT GETDATE(),
      PRIMARY KEY (UserID, ProfileID),
      FOREIGN KEY (ProfileID) REFERENCES dbo.tblProfiles(ProfileID) ON DELETE CASCADE
    );

    IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblPermissionAssignments' AND xtype='U')
    CREATE TABLE dbo.tblPermissionAssignments (
      AssignmentID INT IDENTITY(1,1) PRIMARY KEY,
      TenantID     INT          NOT NULL,
      EntityType   VARCHAR(20)  NOT NULL,  -- ROLE | PROFILE | GROUP | USER
      EntityID     INT          NOT NULL,
      PermCodeID   INT          NOT NULL,
      IsGrant      BIT          DEFAULT 1,
      CreatedBy    INT          NULL,
      CreatedAt    DATETIME     DEFAULT GETDATE(),
      CONSTRAINT UQ_PermAssign UNIQUE (TenantID, EntityType, EntityID, PermCodeID)
    );
  `);
}
initTables().catch(e => console.warn('[profiles] init:', e.message));

// GET /api/profiles
router.get('/', async (req, res) => {
  try {
    const r = await (await getPool()).request()
      .input('TenantID', sql.Int, req.user.tenantId)
      .query(`
        SELECT p.ProfileID, p.ProfileName, p.ProfileCode, p.Description, p.IsActive, p.CreatedAt,
               COUNT(DISTINCT up.UserID)  AS UserCount,
               COUNT(DISTINCT pa.AssignmentID) AS PermissionCount
        FROM   dbo.tblProfiles p
        LEFT JOIN dbo.tblUserProfiles        up ON up.ProfileID = p.ProfileID
        LEFT JOIN dbo.tblPermissionAssignments pa ON pa.EntityType='PROFILE' AND pa.EntityID=p.ProfileID
        WHERE  p.TenantID = @TenantID
        GROUP BY p.ProfileID, p.ProfileName, p.ProfileCode, p.Description, p.IsActive, p.CreatedAt
        ORDER BY p.ProfileName
      `);
    res.json({ success: true, data: r.recordset });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

// POST /api/profiles
router.post('/', async (req, res) => {
  const { profileName, profileCode, description = '' } = req.body;
  if (!profileName || !profileCode)
    return res.status(400).json({ success: false, message: 'שם וקוד פרופיל חובה' });
  try {
    const r = await (await getPool()).request()
      .input('TenantID',    sql.Int,           req.user.tenantId)
      .input('ProfileName', sql.NVarChar(100),  profileName)
      .input('ProfileCode', sql.VarChar(50),    profileCode.toUpperCase())
      .input('Description', sql.NVarChar(300),  description)
      .query(`INSERT INTO dbo.tblProfiles(TenantID,ProfileName,ProfileCode,Description)
              OUTPUT INSERTED.ProfileID
              VALUES(@TenantID,@ProfileName,@ProfileCode,@Description)`);
    const profileId = r.recordset[0].ProfileID;
    await logAction(req, { actionType: 'CREATE', entityType: 'PROFILE', entityId: profileId, entityName: profileName });
    res.json({ success: true, data: { profileId }, message: 'פרופיל נוצר בהצלחה' });
  } catch (e) {
    if (e.message.includes('UQ_Profiles_Code'))
      return res.status(400).json({ success: false, message: 'קוד פרופיל כבר קיים' });
    res.status(500).json({ success: false, message: e.message });
  }
});

// PUT /api/profiles/:id
router.put('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { profileName, profileCode, description = '', isActive = true } = req.body;
  try {
    await (await getPool()).request()
      .input('ProfileID',   sql.Int,           id)
      .input('TenantID',    sql.Int,           req.user.tenantId)
      .input('ProfileName', sql.NVarChar(100),  profileName)
      .input('ProfileCode', sql.VarChar(50),    profileCode.toUpperCase())
      .input('Description', sql.NVarChar(300),  description)
      .input('IsActive',    sql.Bit,            isActive ? 1 : 0)
      .query(`UPDATE dbo.tblProfiles
              SET ProfileName=@ProfileName, ProfileCode=@ProfileCode,
                  Description=@Description, IsActive=@IsActive, UpdatedAt=GETDATE()
              WHERE ProfileID=@ProfileID AND TenantID=@TenantID`);
    await logAction(req, { actionType: 'UPDATE', entityType: 'PROFILE', entityId: id, entityName: profileName });
    res.json({ success: true, message: 'עודכן בהצלחה' });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

// DELETE /api/profiles/:id (soft)
router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await (await getPool()).request()
      .input('ProfileID', sql.Int, id)
      .input('TenantID',  sql.Int, req.user.tenantId)
      .query('UPDATE dbo.tblProfiles SET IsActive=0 WHERE ProfileID=@ProfileID AND TenantID=@TenantID');
    res.json({ success: true, message: 'הפרופיל הוסר' });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

module.exports = router;
