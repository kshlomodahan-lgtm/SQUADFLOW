const express = require('express');
const router  = express.Router();
const { sql, getPool } = require('../db');
const requireAuth = require('../middleware/auth');

router.use(requireAuth);

// GET /api/nexus/:projectId
router.get('/:projectId', async (req, res) => {
  try {
    const db = (await getPool()).request();
    const result = await db
      .input('ProjectID', sql.Int, parseInt(req.params.projectId))
      .input('TenantID',  sql.Int, req.user.tenantId)
      .execute('dbo.sp_NexusLoad');
    res.json({ success: true, data: {
      sources:  result.recordsets[0] || [],
      mappings: result.recordsets[1] || [],
    }});
  } catch (err) {
    console.error('nexus GET:', err);
    res.status(500).json({ success: false, message: 'שגיאה בטעינת NEXUS' });
  }
});

// POST /api/nexus/sources
router.post('/sources', async (req, res) => {
  try {
    const b = req.body;
    const db = (await getPool()).request();
    const result = await db
      .input('SourceID',    sql.Int,           0)
      .input('TenantID',    sql.Int,           req.user.tenantId)
      .input('ProjectID',   sql.Int,           b.projectId)
      .input('SourceName',  sql.NVarChar(100), b.sourceName)
      .input('SourceType',  sql.NVarChar(20),  b.sourceType || 'DB')
      .input('Host',        sql.NVarChar(200), b.host || '')
      .input('Port',        sql.Int,           b.port || null)
      .input('DbName',      sql.NVarChar(100), b.dbName || '')
      .input('Notes',       sql.NVarChar(500), b.notes || '')
      .input('PosX',        sql.Float,         b.posX || 120)
      .input('PosY',        sql.Float,         b.posY || 120)
      .input('ColorHex',    sql.NVarChar(7),   b.colorHex || '#0891b2')
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('dbo.sp_NexusSourceSave');
    const code = result.output.ResultCode;
    if (code < 0) return res.status(400).json({ success: false, message: result.output.ResultMessage });
    res.json({ success: true, data: { sourceId: code } });
  } catch (err) {
    console.error('nexus POST /sources:', err);
    res.status(500).json({ success: false, message: 'שגיאה בהוספת מקור' });
  }
});

// PUT /api/nexus/sources/:id/position
router.put('/sources/:id/position', async (req, res) => {
  try {
    const db = (await getPool()).request();
    await db
      .input('SourceID', sql.Int,   parseInt(req.params.id))
      .input('TenantID', sql.Int,   req.user.tenantId)
      .input('PosX',     sql.Float, req.body.posX)
      .input('PosY',     sql.Float, req.body.posY)
      .execute('dbo.sp_NexusSourceMove');
    res.json({ success: true });
  } catch (err) {
    console.error('nexus PUT position:', err);
    res.status(500).json({ success: false });
  }
});

// PUT /api/nexus/sources/:id/status
router.put('/sources/:id/status', async (req, res) => {
  try {
    const db = (await getPool()).request();
    await db
      .input('SourceID', sql.Int,          parseInt(req.params.id))
      .input('TenantID', sql.Int,          req.user.tenantId)
      .input('Status',   sql.NVarChar(20), req.body.status)
      .execute('dbo.sp_NexusSourceStatus');
    res.json({ success: true });
  } catch (err) {
    console.error('nexus PUT status:', err);
    res.status(500).json({ success: false });
  }
});

// POST /api/nexus/sources/:id/test — simulated connection test
router.post('/sources/:id/test', async (req, res) => {
  try {
    // Fetch source details
    const db = (await getPool()).request();
    const r  = await db
      .input('SourceID', sql.Int, parseInt(req.params.id))
      .input('TenantID', sql.Int, req.user.tenantId)
      .execute('dbo.sp_NexusSourceGet');
    const src = (r.recordsets[0] || [])[0];
    if (!src) return res.status(404).json({ success: false, message: 'מקור לא נמצא' });

    // For DB type: attempt TCP connection (simplified check)
    let ok = false;
    if (src.SourceType === 'DB' && src.Host) {
      const net = require('net');
      const port = src.Port || 1433;
      ok = await new Promise(resolve => {
        const sock = new net.Socket();
        sock.setTimeout(3000);
        sock.on('connect', () => { sock.destroy(); resolve(true); });
        sock.on('error',   () => resolve(false));
        sock.on('timeout', () => { sock.destroy(); resolve(false); });
        sock.connect(port, src.Host);
      });
    } else if (src.SourceType === 'API' && src.Host) {
      const https = require('https'), http = require('http');
      const url   = src.Host.startsWith('https') ? src.Host : src.Host;
      ok = await new Promise(resolve => {
        const mod = url.startsWith('https') ? https : http;
        const req = mod.request(url, { method: 'HEAD', timeout: 4000 }, res => {
          resolve(res.statusCode < 500);
        });
        req.on('error', () => resolve(false));
        req.on('timeout', () => { req.destroy(); resolve(false); });
        req.end();
      });
    } else {
      // FILE / SERVICE — mark as connected (manual configuration)
      ok = true;
    }

    res.json({ success: ok, message: ok ? 'החיבור תקין' : 'לא ניתן להתחבר' });
  } catch (err) {
    console.error('nexus POST /test:', err);
    res.status(500).json({ success: false, message: 'שגיאת בדיקה' });
  }
});

// DELETE /api/nexus/sources/:id
router.delete('/sources/:id', async (req, res) => {
  try {
    const db = (await getPool()).request();
    await db
      .input('SourceID', sql.Int, parseInt(req.params.id))
      .input('TenantID', sql.Int, req.user.tenantId)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('dbo.sp_NexusSourceDelete');
    res.json({ success: true });
  } catch (err) {
    console.error('nexus DELETE /sources:', err);
    res.status(500).json({ success: false });
  }
});

// POST /api/nexus/mappings
router.post('/mappings', async (req, res) => {
  try {
    const b  = req.body;
    const db = (await getPool()).request();
    const result = await db
      .input('TenantID',  sql.Int,          req.user.tenantId)
      .input('ProjectID', sql.Int,          b.projectId)
      .input('SourceID',  sql.Int,          b.sourceId)
      .input('TargetID',  sql.Int,          b.targetId)
      .input('Label',     sql.NVarChar(50), b.label || '')
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('dbo.sp_NexusMappingSave');
    const code = result.output.ResultCode;
    if (code < 0) return res.status(400).json({ success: false, message: result.output.ResultMessage });
    res.json({ success: true, data: { mappingId: code } });
  } catch (err) {
    console.error('nexus POST /mappings:', err);
    res.status(500).json({ success: false, message: 'שגיאה בשמירת חיבור' });
  }
});

// DELETE /api/nexus/mappings/:id
router.delete('/mappings/:id', async (req, res) => {
  try {
    const db = (await getPool()).request();
    await db
      .input('MappingID', sql.Int, parseInt(req.params.id))
      .input('TenantID',  sql.Int, req.user.tenantId)
      .execute('dbo.sp_NexusMappingDelete');
    res.json({ success: true });
  } catch (err) {
    console.error('nexus DELETE /mappings:', err);
    res.status(500).json({ success: false });
  }
});

module.exports = router;
