const express = require('express');
const router  = express.Router();
const { sql, getPool, poolConnect } = require('../db');
const { verifyToken } = require('../middleware/auth');

router.use(verifyToken);

// GET /api/connector-access/requests?status=PENDING|APPROVED|DENIED|ALL
router.get('/requests', async (req, res) => {
  try {
    await poolConnect;
    const pool   = await getPool();
    const status    = req.query.status || 'PENDING';
    const tenantId  = req.user.tenantId;
    const isPlatform = tenantId === 1 && req.user.roleId === 1;

    // סינון לפי בעלים: platform admin רואה הכל, tenant רואה רק חיבורים שלו
    const tenantFilter = isPlatform ? '' : 'AND c.TenantID = @TenantID';
    const statusFilter = status === 'ALL' ? '' : 'AND r.Status = @Status';
    const where = `WHERE 1=1 ${tenantFilter} ${statusFilter}`;

    const request = pool.request();
    request.input('TenantID', sql.Int, tenantId);
    if (status !== 'ALL') request.input('Status', sql.NVarChar(20), status);

    const result = await request.query(`
      SELECT r.RequestID, r.ConnectorID, r.CallerInfo, r.RequestedAt,
             r.Status, r.ApprovedByUserID, r.ApprovedAt, r.ExpiresAt, r.Notes,
             c.ConnectorName, c.ConnectorKey, c.Category, c.IconEmoji,
             c.TenantID, c.ScopeLevel, c.ConnectorToken
      FROM dbo.tblConnectorAccessRequests r
      JOIN dbo.tblConnectors c ON c.ConnectorID = r.ConnectorID
      ${where}
      ORDER BY r.RequestedAt DESC
    `);

    const rows = result.recordset.map(r => ({
      ...r,
      CallerInfo:     r.CallerInfo ? JSON.parse(r.CallerInfo) : {},
      ConnectorToken: r.ConnectorToken ? String(r.ConnectorToken).toLowerCase() : null,
    }));

    res.json({ success: true, data: rows });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// POST /api/connector-access/requests/:id/approve
router.post('/requests/:id/approve', async (req, res) => {
  try {
    await poolConnect;
    const pool      = await getPool();
    const requestId = parseInt(req.params.id);
    const expiresAt = req.body.expiresAt || null;
    const notes     = req.body.notes || null;

    // וודא שהמאשר הוא בעל החיבור
    const tenantId   = req.user.tenantId;
    const isPlatform = tenantId === 1 && req.user.roleId === 1;
    const ownership  = isPlatform ? '' : 'AND c.TenantID = @TenantID';

    const check = await pool.request()
      .input('RequestID', sql.Int, requestId)
      .input('TenantID',  sql.Int, tenantId)
      .query(`SELECT r.RequestID FROM dbo.tblConnectorAccessRequests r
              JOIN dbo.tblConnectors c ON c.ConnectorID=r.ConnectorID
              WHERE r.RequestID=@RequestID AND r.Status='PENDING' ${ownership}`);

    if (!check.recordset.length)
      return res.status(403).json({ success: false, message: 'אין הרשאה לאשר בקשה זו' });

    await pool.request()
      .input('RequestID',       sql.Int,          requestId)
      .input('ApprovedByUserID',sql.Int,          req.user.userId)
      .input('ExpiresAt',       sql.DateTime,     expiresAt ? new Date(expiresAt) : null)
      .input('Notes',           sql.NVarChar(500),notes)
      .query(`
        UPDATE dbo.tblConnectorAccessRequests
        SET Status='APPROVED', ApprovedByUserID=@ApprovedByUserID,
            ApprovedAt=GETDATE(), ExpiresAt=@ExpiresAt, Notes=@Notes
        WHERE RequestID=@RequestID AND Status='PENDING'
      `);

    res.json({ success: true, message: 'הבקשה אושרה' });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// POST /api/connector-access/requests/:id/deny
router.post('/requests/:id/deny', async (req, res) => {
  try {
    await poolConnect;
    const pool      = await getPool();
    const requestId = parseInt(req.params.id);
    const notes     = req.body.notes || null;

    await pool.request()
      .input('RequestID', sql.Int,          requestId)
      .input('Notes',     sql.NVarChar(500),notes)
      .query(`
        UPDATE dbo.tblConnectorAccessRequests
        SET Status='DENIED', Notes=@Notes
        WHERE RequestID=@RequestID AND Status='PENDING'
      `);

    res.json({ success: true, message: 'הבקשה נדחתה' });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// PUT /api/connector-access/connectors/:id/access-mode
router.put('/connectors/:id/access-mode', async (req, res) => {
  try {
    await poolConnect;
    const pool       = await getPool();
    const connId     = parseInt(req.params.id);
    const accessMode = req.body.accessMode;

    if (!['PUBLIC','PRIVATE','APPROVAL_REQUIRED'].includes(accessMode)) {
      return res.status(400).json({ success: false, message: 'accessMode לא חוקי' });
    }

    await pool.request()
      .input('ConnectorID', sql.Int,         connId)
      .input('AccessMode',  sql.NVarChar(20),accessMode)
      .query(`UPDATE dbo.tblConnectors SET AccessMode=@AccessMode WHERE ConnectorID=@ConnectorID`);

    res.json({ success: true, message: 'AccessMode עודכן' });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

module.exports = router;
