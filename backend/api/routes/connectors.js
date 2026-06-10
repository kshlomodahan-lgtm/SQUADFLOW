const express = require('express');
const router  = express.Router();
const { sql, getPool, poolConnect } = require('../db');
const { verifyToken } = require('../middleware/auth');
const { encryptConfig, decryptConfig, maskSecret } = require('../helpers/connectorEncryption');
const Anthropic = require('@anthropic-ai/sdk');

router.use(verifyToken);

// ── Helpers ───────────────────────────────────────────────────

function resolveTenantId(req) {
  const isPlatformAdmin = req.user.tenantId === 1 && req.user.roleId === 1;
  const scopeParam      = req.query.scope || 'auto';

  if (scopeParam === 'PLATFORM' && isPlatformAdmin) return 0;
  if (scopeParam === 'TENANT')   return req.user.tenantId;
  // auto: platform admin defaults to platform scope, others to their tenant
  return isPlatformAdmin ? 0 : req.user.tenantId;
}

// Return masked config for display (replaces password-type field values with ****)
function maskConfig(config, schema) {
  if (!config || !schema) return {};
  const masked = { ...config };
  for (const field of schema) {
    if (field.type === 'password' && masked[field.key]) {
      masked[field.key] = maskSecret(masked[field.key]);
    }
  }
  return masked;
}

// ── GET /api/connectors ───────────────────────────────────────
// ?scope=PLATFORM|TENANT|auto   ?category=AI|DATABASE|...   ?productId=0
router.get('/', async (req, res) => {
  try {
    await poolConnect;
    const pool      = await getPool();
    const tenantId  = resolveTenantId(req);
    const productId = parseInt(req.query.productId || '0');
    const category  = req.query.category || null;

    let query = `
      SELECT ConnectorID, TenantID, ProductID, ScopeLevel, ConnectorKey, Category,
             ConnectorName, IconEmoji, Description, SchemaJSON,
             IsEnabled, LastTestedAt, LastTestStatus, LastTestMsg, UpdatedAt
      FROM dbo.tblConnectors
      WHERE TenantID=@TenantID AND ProductID=@ProductID
    `;
    const request = pool.request()
      .input('TenantID',  sql.Int, tenantId)
      .input('ProductID', sql.Int, productId);

    if (category) {
      query += ' AND Category=@Category';
      request.input('Category', sql.VarChar(30), category);
    }
    query += ' ORDER BY Category, ConnectorName';

    const result = await request.query(query);
    const rows   = result.recordset.map(r => ({
      ...r,
      SchemaJSON: r.SchemaJSON ? JSON.parse(r.SchemaJSON) : [],
      hasConfig:  !!r.ConfigJSON, // don't expose encrypted value
    }));

    res.json({ success: true, data: rows });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// ── GET /api/connectors/:key ──────────────────────────────────
// Returns masked config (passwords shown as ****)
router.get('/:key', async (req, res) => {
  try {
    await poolConnect;
    const pool      = await getPool();
    const tenantId  = resolveTenantId(req);
    const productId = parseInt(req.query.productId || '0');
    const key       = req.params.key;

    const result = await pool.request()
      .input('TenantID',      sql.Int,        tenantId)
      .input('ProductID',     sql.Int,        productId)
      .input('ConnectorKey',  sql.VarChar(50), key)
      .query(`
        SELECT ConnectorID, TenantID, ProductID, ScopeLevel, ConnectorKey, Category,
               ConnectorName, IconEmoji, Description, SchemaJSON, ConfigJSON,
               IsEnabled, LastTestedAt, LastTestStatus, LastTestMsg, UpdatedAt
        FROM dbo.tblConnectors
        WHERE TenantID=@TenantID AND ProductID=@ProductID AND ConnectorKey=@ConnectorKey
      `);

    if (!result.recordset.length)
      return res.status(404).json({ success: false, message: 'Connector לא נמצא' });

    const row    = result.recordset[0];
    const schema = row.SchemaJSON ? JSON.parse(row.SchemaJSON) : [];
    const config = decryptConfig(row.ConfigJSON);
    const masked = maskConfig(config, schema);

    res.json({
      success: true,
      data: {
        ...row,
        SchemaJSON: schema,
        config: masked,
      },
    });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// ── PUT /api/connectors/:key ──────────────────────────────────
// Body: { config: { field: value, ... }, isEnabled: bool, productId: 0 }
// Password fields with value "****" are kept as-is (not overwritten)
router.put('/:key', async (req, res) => {
  try {
    await poolConnect;
    const pool      = await getPool();
    const tenantId  = resolveTenantId(req);
    const productId = parseInt(req.body.productId ?? req.query.productId ?? '0');
    const key       = req.params.key;
    const isEnabled = req.body.isEnabled ?? null;
    const incoming  = req.body.config || {};
    const scopeLevel = tenantId === 0 ? 'PLATFORM' : (productId > 0 ? 'PRODUCT' : 'TENANT');

    // Load existing to merge passwords (don't overwrite masked values)
    const existing = await pool.request()
      .input('TenantID',     sql.Int,        tenantId)
      .input('ProductID',    sql.Int,        productId)
      .input('ConnectorKey', sql.VarChar(50), key)
      .query(`
        SELECT ConnectorID, SchemaJSON, ConfigJSON FROM dbo.tblConnectors
        WHERE TenantID=@TenantID AND ProductID=@ProductID AND ConnectorKey=@ConnectorKey
      `);

    let existingConfig = {};
    let schema = [];
    let isInsert = false;

    if (existing.recordset.length) {
      existingConfig = decryptConfig(existing.recordset[0].ConfigJSON);
      schema = existing.recordset[0].SchemaJSON ? JSON.parse(existing.recordset[0].SchemaJSON) : [];
    } else {
      // New tenant/product-level connector — copy schema from platform (TenantID=0)
      const platformRow = await pool.request()
        .input('ConnectorKey', sql.VarChar(50), key)
        .query(`
          SELECT SchemaJSON, ConnectorName, IconEmoji, Description, Category
          FROM dbo.tblConnectors WHERE TenantID=0 AND ProductID=0 AND ConnectorKey=@ConnectorKey
        `);
      if (platformRow.recordset.length) {
        schema = platformRow.recordset[0].SchemaJSON ? JSON.parse(platformRow.recordset[0].SchemaJSON) : [];
      }
      isInsert = true;
    }

    // Merge: keep existing passwords if incoming is masked (****)
    const merged = { ...existingConfig };
    for (const [k, v] of Object.entries(incoming)) {
      if (typeof v === 'string' && v.startsWith('****')) continue; // masked → keep existing
      merged[k] = v;
    }

    const encryptedConfig = encryptConfig(merged);

    if (isInsert) {
      // Copy metadata from platform definition
      const platDef = await pool.request()
        .input('ConnectorKey', sql.VarChar(50), key)
        .query(`SELECT ConnectorName, IconEmoji, Description, Category, SchemaJSON FROM dbo.tblConnectors WHERE TenantID=0 AND ProductID=0 AND ConnectorKey=@ConnectorKey`);

      const pd = platDef.recordset[0] || {};
      await pool.request()
        .input('TenantID',      sql.Int,           tenantId)
        .input('ProductID',     sql.Int,           productId)
        .input('ScopeLevel',    sql.VarChar(20),   scopeLevel)
        .input('ConnectorKey',  sql.VarChar(50),   key)
        .input('Category',      sql.VarChar(30),   pd.Category || 'OTHER')
        .input('ConnectorName', sql.NVarChar(100), pd.ConnectorName || key)
        .input('IconEmoji',     sql.NVarChar(10),  pd.IconEmoji || '🔗')
        .input('Description',   sql.NVarChar(300), pd.Description || '')
        .input('SchemaJSON',    sql.NVarChar(sql.MAX), pd.SchemaJSON || '[]')
        .input('ConfigJSON',    sql.NVarChar(sql.MAX), encryptedConfig)
        .input('IsEnabled',     sql.Bit,           isEnabled !== null ? (isEnabled ? 1 : 0) : 0)
        .input('UpdatedBy',     sql.Int,           req.user.userId)
        .query(`
          INSERT INTO dbo.tblConnectors
            (TenantID, ProductID, ScopeLevel, ConnectorKey, Category, ConnectorName, IconEmoji,
             Description, SchemaJSON, ConfigJSON, IsEnabled, UpdatedAt, UpdatedBy)
          VALUES
            (@TenantID, @ProductID, @ScopeLevel, @ConnectorKey, @Category, @ConnectorName, @IconEmoji,
             @Description, @SchemaJSON, @ConfigJSON, @IsEnabled, GETDATE(), @UpdatedBy)
        `);
    } else {
      const updateReq = pool.request()
        .input('TenantID',     sql.Int,           tenantId)
        .input('ProductID',    sql.Int,           productId)
        .input('ConnectorKey', sql.VarChar(50),   key)
        .input('ConfigJSON',   sql.NVarChar(sql.MAX), encryptedConfig)
        .input('UpdatedBy',    sql.Int,           req.user.userId);

      let updateSql = `
        UPDATE dbo.tblConnectors
        SET ConfigJSON=@ConfigJSON, UpdatedAt=GETDATE(), UpdatedBy=@UpdatedBy
      `;
      if (isEnabled !== null) {
        updateReq.input('IsEnabled', sql.Bit, isEnabled ? 1 : 0);
        updateSql += ', IsEnabled=@IsEnabled';
      }
      updateSql += ' WHERE TenantID=@TenantID AND ProductID=@ProductID AND ConnectorKey=@ConnectorKey';
      await updateReq.query(updateSql);
    }

    res.json({ success: true, message: 'החיבור נשמר בהצלחה' });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// ── POST /api/connectors/:key/test ────────────────────────────
router.post('/:key/test', async (req, res) => {
  try {
    await poolConnect;
    const pool      = await getPool();
    const tenantId  = resolveTenantId(req);
    const productId = parseInt(req.body.productId ?? req.query.productId ?? '0');
    const key       = req.params.key;

    // Load config — try tenant/product first, fallback to platform
    const rows = await pool.request()
      .input('ConnectorKey', sql.VarChar(50), key)
      .input('TenantID',     sql.Int,        tenantId)
      .input('ProductID',    sql.Int,        productId)
      .query(`
        SELECT ConfigJSON FROM dbo.tblConnectors
        WHERE ConnectorKey=@ConnectorKey AND (
          (TenantID=@TenantID AND ProductID=@ProductID) OR
          (TenantID=0 AND ProductID=0)
        )
        ORDER BY CASE WHEN TenantID=@TenantID THEN 0 ELSE 1 END
      `);

    const config = rows.recordset.length ? decryptConfig(rows.recordset[0].ConfigJSON) : {};

    let status = 'FAIL';
    let msg    = 'לא ידוע';

    // ── Test per connector type ───────────────────────────────
    if (key === 'claude_api' || key === 'openai_api') {
      const apiKey = config.api_key || process.env.ANTHROPIC_API_KEY;
      if (!apiKey) { msg = 'API Key לא הוגדר'; }
      else {
        try {
          const client = new Anthropic({ apiKey });
          await client.messages.create({
            model: config.model_id || 'claude-haiku-4-5-20251001',
            max_tokens: 10,
            messages: [{ role: 'user', content: 'ping' }],
          });
          status = 'OK';
          msg    = 'החיבור תקין ✓';
        } catch (e) {
          msg = e.message?.slice(0, 200) || 'שגיאת API';
        }
      }
    } else if (key === 'mssql_primary' || key === 'mssql_backup') {
      try {
        const mssql  = require('mssql');
        const testCfg = {
          server:   config.server   || process.env.DB_SERVER,
          database: config.database || process.env.DB_NAME,
          user:     config.userName || process.env.DB_USER,
          password: config.password || process.env.DB_PASSWORD,
          port:     config.port     || 1433,
          options:  { encrypt: !!config.encrypt, trustServerCertificate: true },
          connectionTimeout: 5000,
        };
        const testPool = await mssql.connect(testCfg);
        await testPool.request().query('SELECT 1 AS ok');
        await testPool.close();
        status = 'OK';
        msg    = `מחובר בהצלחה ל-${testCfg.database} @ ${testCfg.server} ✓`;
      } catch (e) {
        msg = e.message?.slice(0, 200) || 'שגיאת חיבור';
      }
    } else if (key === 'boi_rates') {
      try {
        const https = require('https');
        await new Promise((resolve, reject) => {
          https.get('https://edge.boi.gov.il/FusionEdgeServer/sdmx/v2/data/dataflow/BOI.STATISTICS/EXR/1.0/4.USD.ILS.SP00.E?startperiod=2020-01-01&endperiod=2020-01-05&format=json', r => {
            status = r.statusCode < 400 ? 'OK' : 'FAIL';
            msg    = r.statusCode < 400 ? 'בנק ישראל זמין ✓' : `HTTP ${r.statusCode}`;
            resolve();
          }).on('error', e => { msg = e.message; reject(e); });
        });
      } catch (e) { msg = e.message; }
    } else {
      status = 'PENDING';
      msg    = 'בדיקה אוטומטית לא זמינה לסוג חיבור זה';
    }

    // Update last test status
    await pool.request()
      .input('ConnectorKey',  sql.VarChar(50),   key)
      .input('TenantID',      sql.Int,           tenantId)
      .input('ProductID',     sql.Int,           productId)
      .input('LastTestStatus', sql.VarChar(10),  status)
      .input('LastTestMsg',    sql.NVarChar(300), msg)
      .query(`
        UPDATE dbo.tblConnectors
        SET LastTestedAt=GETDATE(), LastTestStatus=@LastTestStatus, LastTestMsg=@LastTestMsg
        WHERE ConnectorKey=@ConnectorKey AND TenantID=@TenantID AND ProductID=@ProductID
      `);

    res.json({ success: true, data: { status, message: msg } });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

module.exports = router;
