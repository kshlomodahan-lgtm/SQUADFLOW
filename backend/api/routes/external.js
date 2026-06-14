const express  = require('express');
const router   = express.Router();
const { sql, getPool, poolConnect } = require('../db');
const { verifyToken } = require('../middleware/auth');
const { decryptConfig } = require('../helpers/connectorEncryption');

// GET /api/external/connector?token=<UUID>
// Authorization: Bearer <SQUADFLOW JWT>
router.get('/connector', verifyToken, async (req, res) => {
  try {
    await poolConnect;
    const pool  = await getPool();
    const token = req.query.token;

    if (!token) {
      return res.status(400).json({ success: false, message: 'פרמטר token חסר' });
    }

    // Find connector by token
    const result = await pool.request()
      .input('Token', sql.UniqueIdentifier, token)
      .query(`
        SELECT ConnectorID, TenantID, ProductID, ScopeLevel, ConnectorKey, Category,
               ConnectorName, IconEmoji, Description,
               IsEnabled, AccessMode, ConfigJSON,
               LastTestedAt, LastTestStatus, UpdatedAt, ConnectorToken
        FROM dbo.tblConnectors
        WHERE ConnectorToken = @Token AND IsEnabled = 1
      `);

    if (!result.recordset.length) {
      return res.status(404).json({ success: false, message: 'Connector לא נמצא או מושבת' });
    }

    const r          = result.recordset[0];
    const accessMode = r.AccessMode || 'APPROVAL_REQUIRED';
    const callerInfo = JSON.stringify({
      userId:   req.user.userId,
      tenantId: req.user.tenantId,
      fullName: req.user.fullName,
    });

    // PRIVATE — blocked
    if (accessMode === 'PRIVATE') {
      return res.status(403).json({ success: false, message: 'גישה לחיבור זה חסומה' });
    }

    // APPROVAL_REQUIRED — check for active approval
    if (accessMode === 'APPROVAL_REQUIRED') {
      const approval = await pool.request()
        .input('ConnectorID', sql.Int, r.ConnectorID)
        .query(`
          SELECT TOP 1 RequestID, Status, ExpiresAt
          FROM dbo.tblConnectorAccessRequests
          WHERE ConnectorID = @ConnectorID AND Status = 'APPROVED'
            AND (ExpiresAt IS NULL OR ExpiresAt > GETDATE())
          ORDER BY ApprovedAt DESC
        `);

      if (!approval.recordset.length) {
        // No active approval — create pending request (avoid duplicates)
        const exists = await pool.request()
          .input('ConnectorID', sql.Int, r.ConnectorID)
          .query(`
            SELECT TOP 1 RequestID FROM dbo.tblConnectorAccessRequests
            WHERE ConnectorID = @ConnectorID AND Status = 'PENDING'
          `);

        let requestId;
        if (!exists.recordset.length) {
          const ins = await pool.request()
            .input('ConnectorID',  sql.Int,           r.ConnectorID)
            .input('CallerInfo',   sql.NVarChar(500), callerInfo)
            .query(`
              INSERT INTO dbo.tblConnectorAccessRequests (ConnectorID, CallerInfo)
              OUTPUT INSERTED.RequestID
              VALUES (@ConnectorID, @CallerInfo)
            `);
          requestId = ins.recordset[0].RequestID;
        } else {
          requestId = exists.recordset[0].RequestID;
        }

        return res.status(202).json({
          success:   false,
          pending:   true,
          requestId,
          message:   'הגישה לחיבור זה ממתינה לאישור מנהל מערכת',
        });
      }
    }

    // PUBLIC or APPROVED — return decrypted config
    const config = decryptConfig(r.ConfigJSON) || {};

    res.json({
      success: true,
      data: {
        ConnectorID:    r.ConnectorID,
        ConnectorKey:   r.ConnectorKey,
        ConnectorToken: String(r.ConnectorToken).toLowerCase(),
        Category:       r.Category,
        ConnectorName:  r.ConnectorName,
        IconEmoji:      r.IconEmoji,
        Description:    r.Description,
        ScopeLevel:     r.ScopeLevel,
        AccessMode:     accessMode,
        IsEnabled:      r.IsEnabled,
        config,
        LastTestedAt:   r.LastTestedAt,
        LastTestStatus: r.LastTestStatus,
        UpdatedAt:      r.UpdatedAt,
      },
    });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

module.exports = router;
