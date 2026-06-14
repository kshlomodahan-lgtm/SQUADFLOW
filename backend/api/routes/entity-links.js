const express = require('express');
const router  = express.Router();
const { sql, getPool } = require('../db');
const { verifyToken } = require('../middleware/auth');
const { logAction } = require('../helpers/auditLogger');

router.use(verifyToken);

// ── DDL: table + SPs (runs once on startup) ──────────────────────────────────
async function initDB() {
  const pool = await getPool();

  // Table
  await pool.request().query(`
    IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblEntityLinks' AND xtype='U')
    CREATE TABLE dbo.tblEntityLinks (
      LinkID     INT IDENTITY(1,1) PRIMARY KEY,
      TenantID   INT           NOT NULL,
      OwnerType  VARCHAR(20)   NOT NULL,
      OwnerID    INT           NOT NULL,
      LinkedType VARCHAR(20)   NOT NULL,
      LinkedID   INT           NOT NULL,
      LinkedName NVARCHAR(150) NOT NULL DEFAULT '',
      IsActive   BIT           NOT NULL DEFAULT 1,
      CreatedAt  DATETIME      NOT NULL DEFAULT GETDATE(),
      CONSTRAINT UQ_EntityLink UNIQUE (TenantID, OwnerType, OwnerID, LinkedType, LinkedID)
    );
  `);

  // sp_EntityLinkGet
  await pool.request().query(`
    CREATE OR ALTER PROCEDURE dbo.sp_EntityLinkGet
      @TenantID      INT,
      @OwnerType     VARCHAR(20),
      @OwnerID       INT,
      @ResultCode    INT           OUTPUT,
      @ResultMessage NVARCHAR(200) OUTPUT
    AS
    BEGIN
      SET NOCOUNT ON;
      BEGIN TRY
        SELECT LinkID, OwnerType, OwnerID, LinkedType, LinkedID, LinkedName, IsActive, CreatedAt
        FROM   dbo.tblEntityLinks
        WHERE  TenantID=@TenantID AND OwnerType=@OwnerType AND OwnerID=@OwnerID AND IsActive=1
        ORDER  BY LinkedType, LinkedName;
        SET @ResultCode=0; SET @ResultMessage=N'OK';
      END TRY
      BEGIN CATCH
        SET @ResultCode=-1; SET @ResultMessage=ERROR_MESSAGE();
      END CATCH
    END
  `);

  // sp_EntityLinkAdd
  await pool.request().query(`
    CREATE OR ALTER PROCEDURE dbo.sp_EntityLinkAdd
      @TenantID      INT,
      @OwnerType     VARCHAR(20),
      @OwnerID       INT,
      @LinkedType    VARCHAR(20),
      @LinkedID      INT,
      @LinkedName    NVARCHAR(150),
      @NewLinkID     INT           OUTPUT,
      @ResultCode    INT           OUTPUT,
      @ResultMessage NVARCHAR(200) OUTPUT
    AS
    BEGIN
      SET NOCOUNT ON;
      SET @NewLinkID=0;
      BEGIN TRY
        INSERT INTO dbo.tblEntityLinks (TenantID, OwnerType, OwnerID, LinkedType, LinkedID, LinkedName)
        VALUES (@TenantID, @OwnerType, @OwnerID, @LinkedType, @LinkedID, @LinkedName);
        SET @NewLinkID=SCOPE_IDENTITY();
        SET @ResultCode=0; SET @ResultMessage=N'שיוך נוצר בהצלחה';
      END TRY
      BEGIN CATCH
        IF ERROR_NUMBER() IN (2601,2627) BEGIN
          SET @ResultCode=1; SET @ResultMessage=N'שיוך זה כבר קיים';
        END ELSE BEGIN
          SET @ResultCode=-1; SET @ResultMessage=ERROR_MESSAGE();
        END
      END CATCH
    END
  `);

  // sp_EntityLinkDelete
  await pool.request().query(`
    CREATE OR ALTER PROCEDURE dbo.sp_EntityLinkDelete
      @LinkID        INT,
      @TenantID      INT,
      @ResultCode    INT           OUTPUT,
      @ResultMessage NVARCHAR(200) OUTPUT
    AS
    BEGIN
      SET NOCOUNT ON;
      BEGIN TRY
        DELETE FROM dbo.tblEntityLinks
        WHERE  LinkID=@LinkID AND TenantID=@TenantID;
        SET @ResultCode=0; SET @ResultMessage=N'שיוך הוסר';
      END TRY
      BEGIN CATCH
        SET @ResultCode=-1; SET @ResultMessage=ERROR_MESSAGE();
      END CATCH
    END
  `);
}
initDB().catch(e => console.warn('[entity-links] init:', e.message));

// ── GET /api/entity-links?ownerType=PROFILE&ownerId=1 ────────────────────────
router.get('/', async (req, res) => {
  const { ownerType, ownerId } = req.query;
  if (!ownerType || !ownerId)
    return res.status(400).json({ success: false, message: 'ownerType ו-ownerId חובה' });
  try {
    const r = await (await getPool()).request()
      .input ('TenantID',      sql.Int,        req.user.tenantId)
      .input ('OwnerType',     sql.VarChar(20), String(ownerType).toUpperCase())
      .input ('OwnerID',       sql.Int,        parseInt(ownerId))
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('dbo.sp_EntityLinkGet');

    if (r.output.ResultCode !== 0)
      return res.status(500).json({ success: false, message: r.output.ResultMessage });

    res.json({ success: true, data: r.recordset });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

// ── POST /api/entity-links ────────────────────────────────────────────────────
router.post('/', async (req, res) => {
  const { ownerType, ownerId, linkedType, linkedId, linkedName = '' } = req.body;
  if (!ownerType || !ownerId || !linkedType || !linkedId)
    return res.status(400).json({ success: false, message: 'ownerType, ownerId, linkedType, linkedId חובה' });
  try {
    const r = await (await getPool()).request()
      .input ('TenantID',      sql.Int,           req.user.tenantId)
      .input ('OwnerType',     sql.VarChar(20),   String(ownerType).toUpperCase())
      .input ('OwnerID',       sql.Int,           parseInt(ownerId))
      .input ('LinkedType',    sql.VarChar(20),   String(linkedType).toUpperCase())
      .input ('LinkedID',      sql.Int,           parseInt(linkedId))
      .input ('LinkedName',    sql.NVarChar(150), linkedName || '')
      .output('NewLinkID',     sql.Int)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('dbo.sp_EntityLinkAdd');

    const { ResultCode, ResultMessage, NewLinkID } = r.output;
    if (ResultCode === 1)
      return res.status(400).json({ success: false, message: ResultMessage });
    if (ResultCode !== 0)
      return res.status(500).json({ success: false, message: ResultMessage });

    await logAction(req, {
      actionType: 'CREATE', entityType: 'ENTITY_LINK', entityId: NewLinkID,
      entityName: `${ownerType}/${ownerId}→${linkedType}/${linkedId}`,
    });
    res.json({ success: true, data: { linkId: NewLinkID }, message: ResultMessage });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

// ── DELETE /api/entity-links/:id ─────────────────────────────────────────────
router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const r = await (await getPool()).request()
      .input ('LinkID',        sql.Int, id)
      .input ('TenantID',      sql.Int, req.user.tenantId)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('dbo.sp_EntityLinkDelete');

    if (r.output.ResultCode !== 0)
      return res.status(500).json({ success: false, message: r.output.ResultMessage });

    res.json({ success: true, message: r.output.ResultMessage });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

module.exports = router;
