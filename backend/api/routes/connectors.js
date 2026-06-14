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
  if (scopeParam === 'PROJECT')  return req.user.tenantId;
  // auto: platform admin defaults to platform scope, others to their tenant
  return isPlatformAdmin ? 0 : req.user.tenantId;
}

function resolveProjectId(req) {
  if ((req.query.scope || req.body?.scope) === 'PROJECT') {
    return parseInt(req.query.projectId || req.body?.projectId || '0');
  }
  return null; // null = ignore ProjectID filter (use ProductID logic)
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
// ?scope=PLATFORM|TENANT|PROJECT|auto   ?projectId=X   ?category=AI|DATABASE|...
router.get('/', async (req, res) => {
  try {
    await poolConnect;
    const pool      = await getPool();
    const tenantId  = resolveTenantId(req);
    const projectId = resolveProjectId(req);
    const productId = parseInt(req.query.productId || '0');
    const category  = req.query.category || null;

    let query, request;

    if (projectId !== null) {
      // PROJECT scope — return project connectors + platform definitions (for cards not yet configured)
      query = `
        SELECT c.ConnectorID, c.TenantID, c.ProductID,
               ISNULL(c.ProjectID, 0) AS ProjectID,
               c.ScopeLevel, c.ConnectorKey, c.Category,
               c.ConnectorName, c.IconEmoji, c.Description, c.SchemaJSON,
               c.ConfigJSON,
               c.IsEnabled, c.LastTestedAt, c.LastTestStatus, c.LastTestMsg, c.UpdatedAt,
               c.ConnectorToken
        FROM dbo.tblConnectors c
        WHERE c.TenantID = 0 AND c.ProductID = 0 AND ISNULL(c.ProjectID,0) = 0
      `;
      request = pool.request()
        .input('TenantID',  sql.Int, tenantId)
        .input('ProjectID', sql.Int, projectId);

      if (category) {
        query += ' AND c.Category=@Category';
        request.input('Category', sql.VarChar(30), category);
      }
      query += ' ORDER BY c.Category, c.ConnectorName';

      const platResult = await request.query(query);
      const platRows   = platResult.recordset;

      // Load project-specific overrides + project-owned connectors
      const overrideResult = await pool.request()
        .input('TenantID',  sql.Int, tenantId)
        .input('ProjectID', sql.Int, projectId)
        .query(`
          SELECT ConnectorID, ConnectorKey, Category, ConnectorName, IconEmoji, Description,
                 SchemaJSON, ConfigJSON, IsEnabled, LastTestedAt, LastTestStatus, LastTestMsg,
                 ConnectorToken, ScopeLevel
          FROM dbo.tblConnectors
          WHERE TenantID=@TenantID AND ISNULL(ProjectID,0)=@ProjectID AND ISNULL(ProductID,0)=0
        `);
      const overrides = {};
      const projectOwned = []; // connectors שנוצרו ישירות לפרויקט (לא platform template)
      overrideResult.recordset.forEach(o => {
        if (o.ScopeLevel === 'PROJECT' && platRows.every(p => p.ConnectorKey !== o.ConnectorKey)) {
          projectOwned.push(o);
        } else {
          overrides[o.ConnectorKey] = o;
        }
      });

      const rows = platRows.map(r => {
        const ov = overrides[r.ConnectorKey];
        const token = ov?.ConnectorToken
          ? String(ov.ConnectorToken).toLowerCase()
          : (r.ConnectorToken ? String(r.ConnectorToken).toLowerCase() : null);
        return {
          ...r,
          SchemaJSON:     r.SchemaJSON ? JSON.parse(r.SchemaJSON) : [],
          hasConfig:      !!(ov?.ConfigJSON),
          IsEnabled:      ov ? ov.IsEnabled : false,
          LastTestedAt:   ov?.LastTestedAt   ?? null,
          LastTestStatus: ov?.LastTestStatus ?? null,
          LastTestMsg:    ov?.LastTestMsg    ?? null,
          ConnectorToken: token,
        };
      });

      // הוסף connectors ייחודיים לפרויקט
      const ownedRows = projectOwned.map(o => ({
        ConnectorID:    o.ConnectorID,
        TenantID:       tenantId,
        ProjectID:      projectId,
        ScopeLevel:     'PROJECT',
        ConnectorKey:   o.ConnectorKey,
        Category:       o.Category,
        ConnectorName:  o.ConnectorName,
        IconEmoji:      o.IconEmoji,
        Description:    o.Description,
        SchemaJSON:     o.SchemaJSON ? JSON.parse(o.SchemaJSON) : [],
        hasConfig:      !!(o.ConfigJSON),
        IsEnabled:      o.IsEnabled,
        LastTestedAt:   o.LastTestedAt   ?? null,
        LastTestStatus: o.LastTestStatus ?? null,
        LastTestMsg:    o.LastTestMsg    ?? null,
        ConnectorToken: o.ConnectorToken ? String(o.ConnectorToken).toLowerCase() : null,
      }));

      return res.json({ success: true, data: [...rows, ...ownedRows] });
    }

    // PLATFORM / TENANT scope (existing logic)
    query = `
      SELECT ConnectorID, TenantID, ProductID, ScopeLevel, ConnectorKey, Category,
             ConnectorName, IconEmoji, Description, SchemaJSON, ConfigJSON,
             IsEnabled, LastTestedAt, LastTestStatus, LastTestMsg, UpdatedAt,
             ConnectorToken, ISNULL(AccessMode,'PRIVATE') AS AccessMode,
             SourceConnectorToken
      FROM dbo.tblConnectors
      WHERE TenantID=@TenantID AND ProductID=@ProductID
    `;
    request = pool.request()
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
      SchemaJSON:            r.SchemaJSON ? JSON.parse(r.SchemaJSON) : [],
      hasConfig:             !!r.ConfigJSON,
      ConnectorToken:        r.ConnectorToken        ? String(r.ConnectorToken).toLowerCase()        : null,
      SourceConnectorToken:  r.SourceConnectorToken  ? String(r.SourceConnectorToken).toLowerCase()  : null,
    }));

    // For TENANT scope — also load available platform connectors (PUBLIC / APPROVAL_REQUIRED)
    let platformRows = [];
    if (tenantId !== 0) {
      const myKeys = rows.map(r => r.ConnectorKey);
      const platReq = pool.request().input('TenantID', sql.Int, tenantId);
      let platQuery = `
        SELECT ConnectorID, TenantID, ProductID, ScopeLevel, ConnectorKey, Category,
               ConnectorName, IconEmoji, Description, SchemaJSON,
               IsEnabled, LastTestedAt, LastTestStatus, LastTestMsg, UpdatedAt,
               ConnectorToken, ISNULL(AccessMode,'PRIVATE') AS AccessMode
        FROM dbo.tblConnectors
        WHERE TenantID=0 AND ISNULL(ProductID,0)=0 AND ISNULL(ProjectID,0)=0
          AND ISNULL(AccessMode,'PRIVATE') IN ('PUBLIC','APPROVAL_REQUIRED')
      `;
      if (myKeys.length) {
        // exclude already-configured connectors
        const keyList = myKeys.map((_, i) => `@k${i}`).join(',');
        myKeys.forEach((k, i) => platReq.input(`k${i}`, sql.VarChar(80), k));
        platQuery += ` AND ConnectorKey NOT IN (${keyList})`;
      }
      if (category) {
        platReq.input('Category', sql.VarChar(30), category);
        platQuery += ' AND Category=@Category';
      }
      platQuery += ' ORDER BY Category, ConnectorName';
      const platResult = await platReq.query(platQuery);
      platformRows = platResult.recordset.map(r => ({
        ...r,
        SchemaJSON:     r.SchemaJSON ? JSON.parse(r.SchemaJSON) : [],
        hasConfig:      false,
        ConnectorToken: r.ConnectorToken ? String(r.ConnectorToken).toLowerCase() : null,
      }));
    }

    res.json({ success: true, data: rows, platformData: platformRows });
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
               IsEnabled, LastTestedAt, LastTestStatus, LastTestMsg, UpdatedAt,
               ConnectorToken
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

// ── POST /api/connectors ─────────────────────────────────────
// יצירת connector חדש לפרויקט
// Body: { connectorName, category, iconEmoji, description, schemaJSON, projectId }
router.post('/', async (req, res) => {
  try {
    await poolConnect;
    const pool      = await getPool();
    const tenantId  = req.user.tenantId;
    const { connectorName, category, iconEmoji = '🔌', description = '', schemaJSON = [], projectId } = req.body;

    if (!connectorName?.trim()) return res.status(400).json({ success: false, message: 'שם חיבור הוא שדה חובה' });
    if (!category)              return res.status(400).json({ success: false, message: 'קטגוריה היא שדה חובה' });

    // בנה ConnectorKey ייחודי מהשם
    const slug = connectorName.trim()
      .toLowerCase()
      .replace(/[\s֐-׿]+/g, '_')
      .replace(/[^a-z0-9_]/g, '')
      .replace(/_+/g, '_')
      .replace(/^_|_$/g, '')
      .substring(0, 40);
    const connectorKey = `${slug}_${Date.now().toString(36)}`;

    const schemaStr = JSON.stringify(Array.isArray(schemaJSON) ? schemaJSON : []);

    await pool.request()
      .input('TenantID',      sql.Int,           tenantId)
      .input('ProjectID',     sql.Int,            projectId || null)
      .input('ScopeLevel',    sql.VarChar(20),    'PROJECT')
      .input('ConnectorKey',  sql.VarChar(80),    connectorKey)
      .input('Category',      sql.VarChar(30),    category)
      .input('ConnectorName', sql.NVarChar(100),  connectorName.trim())
      .input('IconEmoji',     sql.NVarChar(10),   iconEmoji)
      .input('Description',   sql.NVarChar(300),  description)
      .input('SchemaJSON',    sql.NVarChar(sql.MAX), schemaStr)
      .input('AccessMode',    sql.NVarChar(30),   'PRIVATE')
      .query(`
        INSERT INTO dbo.tblConnectors
          (TenantID, ProjectID, ScopeLevel, ConnectorKey, Category, ConnectorName,
           IconEmoji, Description, SchemaJSON, IsEnabled, UpdatedAt, AccessMode, ConnectorToken)
        VALUES
          (@TenantID, @ProjectID, @ScopeLevel, @ConnectorKey, @Category, @ConnectorName,
           @IconEmoji, @Description, @SchemaJSON, 0, GETDATE(), @AccessMode, NEWID())
      `);

    res.json({ success: true, data: { connectorKey }, message: 'חיבור נוצר בהצלחה' });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// ── PUT /api/connectors/:key ──────────────────────────────────
// Body: { config: { field: value, ... }, isEnabled: bool, productId: 0, projectId: X }
// Password fields with value "****" are kept as-is (not overwritten)
router.put('/:key', async (req, res) => {
  try {
    await poolConnect;
    const pool      = await getPool();
    const tenantId  = resolveTenantId(req);
    const projectId = resolveProjectId(req);
    const productId = parseInt(req.body.productId ?? req.query.productId ?? '0');
    const key       = req.params.key;
    const isEnabled = req.body.isEnabled ?? null;
    const incoming  = req.body.config || {};
    const scopeLevel = tenantId === 0 ? 'PLATFORM'
      : (projectId ? 'PROJECT' : (productId > 0 ? 'PRODUCT' : 'TENANT'));

    // Load existing to merge passwords (don't overwrite masked values)
    const existingReq = pool.request()
      .input('TenantID',     sql.Int,         tenantId)
      .input('ProductID',    sql.Int,         productId)
      .input('ConnectorKey', sql.VarChar(50), key);
    let existingQuery = `SELECT ConnectorID, SchemaJSON, ConfigJSON FROM dbo.tblConnectors
      WHERE TenantID=@TenantID AND ProductID=@ProductID AND ConnectorKey=@ConnectorKey`;
    if (projectId !== null) {
      existingReq.input('ProjectID', sql.Int, projectId);
      existingQuery += ' AND ISNULL(ProjectID,0)=@ProjectID';
    } else {
      existingQuery += ' AND ISNULL(ProjectID,0)=0';
    }
    const existing = await existingReq.query(existingQuery);

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
        .query(`SELECT ConnectorName, IconEmoji, Description, Category, SchemaJSON, ConnectorToken FROM dbo.tblConnectors WHERE TenantID=0 AND ProductID=0 AND ConnectorKey=@ConnectorKey`);

      const pd  = platDef.recordset[0] || {};
      const srcToken = pd.ConnectorToken ? String(pd.ConnectorToken) : null;

      const ins = pool.request()
        .input('TenantID',             sql.Int,           tenantId)
        .input('ProductID',            sql.Int,           productId)
        .input('ProjectID',            sql.Int,           projectId ?? 0)
        .input('ScopeLevel',           sql.VarChar(20),   scopeLevel)
        .input('ConnectorKey',         sql.VarChar(50),   key)
        .input('Category',             sql.VarChar(30),   pd.Category || 'OTHER')
        .input('ConnectorName',        sql.NVarChar(100), pd.ConnectorName || key)
        .input('IconEmoji',            sql.NVarChar(10),  pd.IconEmoji || '🔗')
        .input('Description',          sql.NVarChar(300), pd.Description || '')
        .input('SchemaJSON',           sql.NVarChar(sql.MAX), pd.SchemaJSON || '[]')
        .input('ConfigJSON',           sql.NVarChar(sql.MAX), encryptedConfig)
        .input('IsEnabled',            sql.Bit,           isEnabled !== null ? (isEnabled ? 1 : 0) : 0)
        .input('SourceConnectorToken', sql.UniqueIdentifier, srcToken)
        .input('UpdatedBy',            sql.Int,           req.user.userId);

      // Check if ProjectID column exists
      const colCheck = await pool.request().query(`SELECT COUNT(1) AS cnt FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblConnectors') AND name='ProjectID'`);
      const hasProjectCol = colCheck.recordset[0].cnt > 0;

      if (hasProjectCol) {
        await ins.query(`
          INSERT INTO dbo.tblConnectors
            (TenantID, ProductID, ProjectID, ScopeLevel, ConnectorKey, Category, ConnectorName, IconEmoji,
             Description, SchemaJSON, ConfigJSON, IsEnabled, SourceConnectorToken, UpdatedAt, UpdatedBy)
          VALUES
            (@TenantID, @ProductID, @ProjectID, @ScopeLevel, @ConnectorKey, @Category, @ConnectorName, @IconEmoji,
             @Description, @SchemaJSON, @ConfigJSON, @IsEnabled, @SourceConnectorToken, GETDATE(), @UpdatedBy)
        `);
      } else {
        await ins.query(`
          INSERT INTO dbo.tblConnectors
            (TenantID, ProductID, ScopeLevel, ConnectorKey, Category, ConnectorName, IconEmoji,
             Description, SchemaJSON, ConfigJSON, IsEnabled, SourceConnectorToken, UpdatedAt, UpdatedBy)
          VALUES
            (@TenantID, @ProductID, @ScopeLevel, @ConnectorKey, @Category, @ConnectorName, @IconEmoji,
             @Description, @SchemaJSON, @ConfigJSON, @IsEnabled, @SourceConnectorToken, GETDATE(), @UpdatedBy)
        `);
      }
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
      if (projectId !== null) {
        updateReq.input('ProjectID', sql.Int, projectId);
        updateSql += ' WHERE TenantID=@TenantID AND ProductID=@ProductID AND ConnectorKey=@ConnectorKey AND ISNULL(ProjectID,0)=@ProjectID';
      } else {
        updateSql += ' WHERE TenantID=@TenantID AND ProductID=@ProductID AND ConnectorKey=@ConnectorKey AND ISNULL(ProjectID,0)=0';
      }
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

    const staticConfig = rows.recordset.length ? decryptConfig(rows.recordset[0].ConfigJSON) : {};
    // מיזוג עם ערכי בדיקה לשדות דינאמיים
    const testParams = req.body.testParams || {};
    const config = { ...staticConfig, ...testParams };

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
        // Use new ConnectionPool (not mssql.connect) to avoid replacing the global ProfitsCRM pool
        const testPool = new mssql.ConnectionPool(testCfg);
        await testPool.connect();
        await testPool.request().query('SELECT 1 AS ok');
        await testPool.close();
        status = 'OK';
        msg    = `מחובר בהצלחה ל-${testCfg.database} @ ${testCfg.server} ✓`;
      } catch (e) {
        msg = e.message?.slice(0, 200) || 'שגיאת חיבור';
      }
    } else if (key === 'provision_isr') {
      try {
        const http  = require('http');
        const https = require('https');
        const server   = config.server   || '';
        const httpPort = parseInt(config.http_port || 8081);
        const user     = config.userName || 'admin';
        const pass     = config.password || '';
        if (!server) { msg = 'כתובת שרת לא הוגדרה'; }
        else {
          const auth   = Buffer.from(`${user}:${pass}`).toString('base64');
          const isHttps = server.startsWith('https://') || httpPort === 443;
          const baseUrl = server.startsWith('http') ? server : `http://${server}:${httpPort}`;
          const lib = isHttps ? https : http;
          await new Promise((resolve) => {
            const req2 = lib.get(baseUrl, { headers: { Authorization: `Basic ${auth}` }, timeout: 6000 }, r => {
              if (r.statusCode === 401) { msg = 'פרטי כניסה שגויים (401)'; }
              else if (r.statusCode < 500) {
                status = 'OK';
                msg = `מחובר בהצלחה ל-${server}:${httpPort} (HTTP ${r.statusCode}) ✓`;
              } else { msg = `HTTP ${r.statusCode}`; }
              r.resume();
              resolve();
            });
            req2.on('error', e => { msg = e.message?.slice(0, 200) || 'שגיאת חיבור'; resolve(); });
            req2.on('timeout', () => { msg = 'Timeout — השרת לא מגיב'; req2.destroy(); resolve(); });
          });
        }
      } catch (e) { msg = e.message?.slice(0, 200) || 'שגיאת חיבור'; }
    } else if (key.startsWith('boi_rates')) {
      try {
        const https = require('https');
        // Build SDMX v2 URL per BOI API guide
        const tp = req.body.testParams || {};
        const seriesCode   = tp.series_code   || config.series_code   || '';
        const baseCurrency = tp.base_currency  || config.base_currency  || 'USD';
        const dataType     = config.data_type  || 'OF00';
        const lastN        = tp.last_n         || config.last_n         || 1;
        const startPeriod  = tp.start_period   || config.start_period   || '';
        const endPeriod    = tp.end_period     || config.end_period     || '';
        const fmt          = config.format     || 'sdmx-json';
        const locale       = config.locale     || 'he';

        const params = [];
        if (seriesCode) {
          params.push(`c%5BSERIES_CODE%5D=${encodeURIComponent(seriesCode)}`);
        } else {
          params.push(`c%5BDATA_TYPE%5D=${dataType}`);
          params.push(`c%5BBASE_CURRENCY%5D=${encodeURIComponent(baseCurrency)}`);
        }
        if (lastN)       params.push(`lastNObservations=${lastN}`);
        if (startPeriod) params.push(`startperiod=${startPeriod}`);
        if (endPeriod)   params.push(`endperiod=${endPeriod}`);
        params.push(`format=${fmt}`);
        params.push(`locale=${locale}`);

        const boiUrl = `https://edge.boi.gov.il/FusionEdgeServer/sdmx/v2/data/dataflow/BOI.STATISTICS/EXR/1.0/?${params.join('&')}`;

        await new Promise((resolve) => {
          const req2 = https.get(boiUrl, { timeout: 10000 }, r => {
            let body = '';
            r.on('data', chunk => body += chunk);
            r.on('end', () => {
              if (r.statusCode < 400) {
                try {
                  if (fmt === 'sdmx-json') {
                    const data = JSON.parse(body);
                    // SDMX-JSON: dataSets[0].series has series key -> observations
                    const seriesMap = data?.data?.dataSets?.[0]?.series || {};
                    const firstKey  = Object.keys(seriesMap)[0];
                    const obs = firstKey ? seriesMap[firstKey]?.observations : null;
                    if (obs) {
                      const latest = obs[String(Object.keys(obs).length - 1)];
                      const rate   = latest?.[0];
                      const names  = data?.data?.structures?.[0]?.dimensions?.observation?.[0]?.values || [];
                      const dateLabel = names[Object.keys(obs).length - 1]?.name || '';
                      status = 'OK';
                      msg = rate ? `שער ${baseCurrency}/שקל: ${rate}${dateLabel ? ' (' + dateLabel + ')' : ''} ✓` : 'בנק ישראל זמין ✓';
                    } else {
                      status = 'OK';
                      msg = 'בנק ישראל זמין ✓';
                    }
                  } else {
                    status = 'OK';
                    msg = 'בנק ישראל זמין ✓';
                  }
                } catch {
                  status = 'OK';
                  msg = 'בנק ישראל זמין ✓';
                }
              } else {
                msg = `HTTP ${r.statusCode}`;
              }
              resolve();
            });
          });
          req2.on('error', e => { msg = e.message?.slice(0, 150); resolve(); });
          req2.on('timeout', () => { msg = 'Timeout — API לא מגיב'; req2.destroy(); resolve(); });
        });
      } catch (e) { msg = e.message?.slice(0, 150); }
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

// ── POST /api/connectors/boi_rates/data ──────────────────────
// שליפת נתוני שערי חליפין מ-BOI SDMX API
// Body: { series_code?, base_currency?, data_type?, last_n?, start_period?, end_period?, format? }
// Returns: { rates: [{date, value, seriesCode, currency}], raw }
router.post('/boi_rates/data', async (req, res) => {
  try {
    await poolConnect;
    const pool     = await getPool();
    const tenantId = resolveTenantId(req);
    const https    = require('https');

    // Load stored connector config
    const rows = await pool.request()
      .input('TenantID', sql.Int, tenantId)
      .query(`
        SELECT TOP 1 ConfigJSON, SchemaJSON FROM dbo.tblConnectors
        WHERE ConnectorKey='boi_rates' AND (TenantID=@TenantID OR TenantID=0)
        ORDER BY CASE WHEN TenantID=@TenantID THEN 0 ELSE 1 END
      `);
    const storedConfig = rows.recordset.length ? decryptConfig(rows.recordset[0].ConfigJSON) : {};

    // Merge request body into config (runtime params override stored)
    const p = req.body || {};
    const seriesCode   = p.series_code   || storedConfig.series_code   || '';
    const baseCurrency = p.base_currency  || storedConfig.base_currency  || 'USD';
    const dataType     = p.data_type     || storedConfig.data_type     || 'OF00';
    const lastN        = p.last_n        || storedConfig.last_n        || 1;
    const startPeriod  = p.start_period  || storedConfig.start_period  || '';
    const endPeriod    = p.end_period    || storedConfig.end_period    || '';
    const locale       = storedConfig.locale || 'he';

    // Check allowed_countries
    const allowedCountries = storedConfig.allowed_countries || 'IL';
    if (allowedCountries !== 'ALL') {
      const reqCountry = req.headers['x-country'] || req.query.country || 'IL';
      if (!allowedCountries.toUpperCase().split(',').map(s=>s.trim()).includes(reqCountry.toUpperCase())) {
        return res.status(403).json({ success: false, message: `גישה אסורה מהמדינה: ${reqCountry}` });
      }
    }

    // Build SDMX v2 URL
    const params = [];
    if (seriesCode) {
      params.push(`c%5BSERIES_CODE%5D=${encodeURIComponent(seriesCode)}`);
    } else {
      params.push(`c%5BDATA_TYPE%5D=${dataType}`);
      params.push(`c%5BBASE_CURRENCY%5D=${encodeURIComponent(baseCurrency)}`);
    }
    if (lastN)       params.push(`lastNObservations=${lastN}`);
    if (startPeriod) params.push(`startperiod=${startPeriod}`);
    if (endPeriod)   params.push(`endperiod=${endPeriod}`);
    params.push('format=sdmx-json');
    params.push(`locale=${locale}`);

    const boiUrl = `https://edge.boi.gov.il/FusionEdgeServer/sdmx/v2/data/dataflow/BOI.STATISTICS/EXR/1.0/?${params.join('&')}`;

    const raw = await new Promise((resolve, reject) => {
      const req2 = https.get(boiUrl, { timeout: 15000 }, r => {
        let body = '';
        r.on('data', chunk => body += chunk);
        r.on('end', () => {
          if (r.statusCode >= 400) return reject(new Error(`BOI API HTTP ${r.statusCode}`));
          try { resolve(JSON.parse(body)); }
          catch (e) { reject(new Error('Invalid JSON from BOI')); }
        });
      });
      req2.on('error', reject);
      req2.on('timeout', () => { req2.destroy(); reject(new Error('BOI API timeout')); });
    });

    // Parse SDMX-JSON into simple rates array
    const rates = [];
    const structure  = raw?.data?.structures?.[0];
    const dataSets   = raw?.data?.dataSets?.[0]?.series || {};
    const dimSeries  = structure?.dimensions?.series    || [];
    const dimObs     = structure?.dimensions?.observation || [];
    const timeDim    = dimObs.find(d => d.id === 'TIME_PERIOD');
    const timeValues = timeDim?.values || [];

    for (const [seriesIdx, seriesData] of Object.entries(dataSets)) {
      const idxParts = seriesIdx.split(':').map(Number);
      // Build series metadata label
      const meta = {};
      dimSeries.forEach((dim, i) => {
        const val = dim.values?.[idxParts[i]];
        meta[dim.id] = { id: val?.id, name: val?.name };
      });

      const obs = seriesData.observations || {};
      for (const [obsIdx, obsVals] of Object.entries(obs)) {
        const timeVal = timeValues[Number(obsIdx)];
        rates.push({
          date:       timeVal?.id   || String(obsIdx),
          dateLabel:  timeVal?.name || '',
          value:      obsVals[0],
          currency:   meta['BASE_CURRENCY']?.id  || baseCurrency,
          seriesCode: meta['SERIES_CODE']?.id    || seriesCode,
          seriesName: meta['SERIES_CODE']?.name  || '',
        });
      }
    }

    res.json({ success: true, data: { rates, count: rates.length, url: boiUrl } });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// ── GET /api/connectors/by-token/:token ───────────────────────
// External API: fetch a connector by its public UUID token.
// Returns ConnectorKey + metadata only (no ConfigJSON exposed externally).
router.get('/by-token/:token', async (req, res) => {
  try {
    await poolConnect;
    const pool  = await getPool();
    const token = req.params.token;

    const result = await pool.request()
      .input('Token', sql.UniqueIdentifier, token)
      .query(`
        SELECT ConnectorID, TenantID, ProductID, ScopeLevel, ConnectorKey, Category,
               ConnectorName, IconEmoji, Description,
               IsEnabled, LastTestedAt, LastTestStatus, UpdatedAt,
               ConnectorToken
        FROM dbo.tblConnectors
        WHERE ConnectorToken = @Token
      `);

    if (!result.recordset.length)
      return res.status(404).json({ success: false, message: 'Connector לא נמצא' });

    res.json({ success: true, data: result.recordset[0] });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// ── DELETE /api/connectors/:key ──────────────────────────────
router.delete('/:key', async (req, res) => {
  try {
    await poolConnect;
    const pool      = await getPool();
    const tenantId  = resolveTenantId(req);
    const key       = req.params.key;
    const projectId = resolveProjectId(req);

    let delQuery = `DELETE FROM dbo.tblConnectors
      WHERE ConnectorKey=@ConnectorKey AND TenantID=@TenantID AND ISNULL(ProductID,0)=0`;
    const delReq = pool.request()
      .input('ConnectorKey', sql.VarChar(80), key)
      .input('TenantID',     sql.Int,        tenantId);

    if (projectId !== null) {
      delQuery += ' AND ISNULL(ProjectID,0)=@ProjectID';
      delReq.input('ProjectID', sql.Int, projectId);
    } else {
      delQuery += ' AND ISNULL(ProjectID,0)=0';
    }

    const r = await delReq.query(delQuery);
    if (!r.rowsAffected[0])
      return res.status(404).json({ success: false, message: 'החיבור לא נמצא או אין הרשאה למחוק' });

    res.json({ success: true, message: 'החיבור נמחק בהצלחה' });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// ── POST /api/connectors/:key/live ───────────────────────────
// מקבל פרמטרים דינאמיים בזמן ריצה ומחזיר URL לפופאפ
router.post('/:key/live', async (req, res) => {
  try {
    await poolConnect;
    const pool      = await getPool();
    const tenantId  = resolveTenantId(req);
    const key       = req.params.key;
    const runtime   = req.body.params || {};   // פרמטרים דינאמיים מהקורא

    // טען config סטטי מהמסד
    const rows = await pool.request()
      .input('ConnectorKey', sql.VarChar(50), key)
      .input('TenantID',     sql.Int,        tenantId)
      .query(`
        SELECT ConfigJSON, SchemaJSON, IsEnabled FROM dbo.tblConnectors
        WHERE ConnectorKey=@ConnectorKey AND TenantID=@TenantID
        AND ISNULL(ProductID,0)=0 AND ISNULL(ProjectID,0)=0
      `);

    if (!rows.recordset.length)
      return res.status(404).json({ success: false, message: 'חיבור לא נמצא' });

    const row = rows.recordset[0];
    if (!row.IsEnabled)
      return res.status(403).json({ success: false, message: 'החיבור אינו פעיל' });

    const staticConfig = decryptConfig(row.ConfigJSON);
    const schema       = row.SchemaJSON ? JSON.parse(row.SchemaJSON) : [];

    // מיזוג: runtime (דינאמי) גובר על static
    const merged = { ...staticConfig };
    for (const field of schema) {
      if (field.isDynamic && runtime[field.key] !== undefined) {
        merged[field.key] = runtime[field.key];
      }
    }

    const server   = merged.server   || '';
    const httpPort = parseInt(merged.http_port || 8081);
    const w        = parseInt(merged.popup_width  || 1280);
    const h        = parseInt(merged.popup_height || 720);

    if (!server)
      return res.status(400).json({ success: false, message: 'שרת לא הוגדר' });

    const url = server.startsWith('http') ? server : `http://${server}:${httpPort}`;
    res.json({ success: true, data: { url, width: w, height: h } });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

module.exports = router;
