/**
 * AXON — Backend API Route Registry
 * Endpoints: list / create / update / delete / stats / test
 */
const express    = require('express');
const router     = express.Router();
const { sql, getPool } = require('../db');
const requireAuth = require('../middleware/auth');
const https      = require('https');
const http       = require('http');
const { URL }    = require('url');
const { PLATFORM_ROUTES } = require('../helpers/backendRoutes');

router.use(requireAuth);

// ── helpers ───────────────────────────────────────────────────
function tenantId(req)  { return req.user.tenantId; }
function projectId(req) { return parseInt(req.query.projectId || req.body?.projectId || '0') || null; }

// ── GET /api/axon/routes?projectId=X ─────────────────────────
// Returns all routes for a project, grouped by category
router.get('/routes', async (req, res) => {
  const pId = projectId(req);
  if (!pId) return res.status(400).json({ success: false, message: 'projectId חסר' });

  try {
    const db = (await getPool()).request()
      .input('ProjectID', sql.Int, pId)
      .input('TenantID',  sql.Int, tenantId(req));

    const result = await db.query(`
      SELECT
        RouteID, RouteToken, Category, Method, Path, Title,
        Description, SpName, AuthRequired,
        ReqSchema, ResSchema, Tags,
        SortOrder, IsActive, CreatedAt, UpdatedAt
      FROM dbo.tblAxonRoutes
      WHERE ProjectID = @ProjectID
        AND TenantID  = @TenantID
        AND IsActive  = 1
      ORDER BY Category, SortOrder, RouteID
    `);

    // Parse JSON columns
    const rows = result.recordset.map(r => ({
      ...r,
      ReqSchema: tryParse(r.ReqSchema),
      ResSchema: tryParse(r.ResSchema),
      Tags:      r.Tags ? r.Tags.split(',').map(t => t.trim()).filter(Boolean) : [],
    }));

    // Group by category
    const grouped = {};
    for (const row of rows) {
      const cat = row.Category || 'כללי';
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(row);
    }

    res.json({ success: true, data: { routes: rows, grouped } });
  } catch (err) {
    console.error('[axon] GET /routes:', err);
    res.status(500).json({ success: false, message: 'שגיאה בטעינת routes' });
  }
});

// ── GET /api/axon/stats?projectId=X ──────────────────────────
router.get('/stats', async (req, res) => {
  const pId = projectId(req);
  if (!pId) return res.status(400).json({ success: false, message: 'projectId חסר' });

  try {
    const result = await (await getPool()).request()
      .input('ProjectID', sql.Int, pId)
      .input('TenantID',  sql.Int, tenantId(req))
      .query(`
        SELECT
          COUNT(*)                                   AS total,
          SUM(CASE WHEN Method='GET'    THEN 1 ELSE 0 END) AS gets,
          SUM(CASE WHEN Method='POST'   THEN 1 ELSE 0 END) AS posts,
          SUM(CASE WHEN Method='PUT'    THEN 1 ELSE 0 END) AS puts,
          SUM(CASE WHEN Method='DELETE' THEN 1 ELSE 0 END) AS deletes,
          SUM(CASE WHEN Method='PATCH'  THEN 1 ELSE 0 END) AS patches,
          SUM(CASE WHEN AuthRequired=1  THEN 1 ELSE 0 END) AS secured,
          SUM(CASE WHEN AuthRequired=0  THEN 1 ELSE 0 END) AS [public],
          COUNT(DISTINCT Category)                   AS categories
        FROM dbo.tblAxonRoutes
        WHERE ProjectID = @ProjectID AND TenantID = @TenantID AND IsActive = 1
      `);
    res.json({ success: true, data: result.recordset[0] });
  } catch (err) {
    console.error('[axon] GET /stats:', err);
    res.status(500).json({ success: false, message: 'שגיאה בטעינת סטטיסטיקות' });
  }
});

// ── POST /api/axon/routes ─────────────────────────────────────
router.post('/routes', async (req, res) => {
  const b = req.body;
  if (!b.projectId) return res.status(400).json({ success: false, message: 'projectId חסר' });

  try {
    const db = (await getPool()).request()
      .input('TenantID',     sql.Int,          tenantId(req))
      .input('ProjectID',    sql.Int,          parseInt(b.projectId))
      .input('Category',     sql.NVarChar(100), b.category    || 'כללי')
      .input('Method',       sql.NVarChar(10),  (b.method     || 'GET').toUpperCase())
      .input('Path',         sql.NVarChar(300), b.path        || '/')
      .input('Title',        sql.NVarChar(200), b.title       || '')
      .input('Description',  sql.NVarChar(sql.MAX), b.description || '')
      .input('SpName',       sql.NVarChar(200), b.spName      || null)
      .input('AuthRequired', sql.Bit,           b.authRequired !== false ? 1 : 0)
      .input('ReqSchema',    sql.NVarChar(sql.MAX), toJson(b.reqSchema))
      .input('ResSchema',    sql.NVarChar(sql.MAX), toJson(b.resSchema))
      .input('Tags',         sql.NVarChar(500), Array.isArray(b.tags) ? b.tags.join(',') : (b.tags || ''))
      .input('SortOrder',    sql.Int,           b.sortOrder   || 0);

    const result = await db.query(`
      INSERT INTO dbo.tblAxonRoutes
        (TenantID, ProjectID, Category, Method, Path, Title, Description,
         SpName, AuthRequired, ReqSchema, ResSchema, Tags, SortOrder)
      OUTPUT INSERTED.RouteID, INSERTED.RouteToken
      VALUES
        (@TenantID, @ProjectID, @Category, @Method, @Path, @Title, @Description,
         @SpName, @AuthRequired, @ReqSchema, @ResSchema, @Tags, @SortOrder)
    `);

    res.json({ success: true, data: result.recordset[0], message: 'Route נוצר' });
  } catch (err) {
    if (err.number === 2627 || err.number === 2601)
      return res.status(409).json({ success: false, message: `Route ${req.body.method?.toUpperCase()} ${req.body.path} כבר קיים` });
    console.error('[axon] POST /routes:', err);
    res.status(500).json({ success: false, message: 'שגיאה ביצירת route' });
  }
});

// ── PUT /api/axon/routes/:id ──────────────────────────────────
router.put('/routes/:id', async (req, res) => {
  const b = req.body;
  const id = parseInt(req.params.id);

  try {
    const db = (await getPool()).request()
      .input('RouteID',      sql.Int,          id)
      .input('TenantID',     sql.Int,          tenantId(req))
      .input('Category',     sql.NVarChar(100), b.category    || 'כללי')
      .input('Method',       sql.NVarChar(10),  (b.method     || 'GET').toUpperCase())
      .input('Path',         sql.NVarChar(300), b.path        || '/')
      .input('Title',        sql.NVarChar(200), b.title       || '')
      .input('Description',  sql.NVarChar(sql.MAX), b.description || '')
      .input('SpName',       sql.NVarChar(200), b.spName      || null)
      .input('AuthRequired', sql.Bit,           b.authRequired !== false ? 1 : 0)
      .input('ReqSchema',    sql.NVarChar(sql.MAX), toJson(b.reqSchema))
      .input('ResSchema',    sql.NVarChar(sql.MAX), toJson(b.resSchema))
      .input('Tags',         sql.NVarChar(500), Array.isArray(b.tags) ? b.tags.join(',') : (b.tags || ''))
      .input('SortOrder',    sql.Int,           b.sortOrder ?? 0);

    const result = await db.query(`
      UPDATE dbo.tblAxonRoutes SET
        Category     = @Category,
        Method       = @Method,
        Path         = @Path,
        Title        = @Title,
        Description  = @Description,
        SpName       = @SpName,
        AuthRequired = @AuthRequired,
        ReqSchema    = @ReqSchema,
        ResSchema    = @ResSchema,
        Tags         = @Tags,
        SortOrder    = @SortOrder,
        UpdatedAt    = GETDATE()
      WHERE RouteID = @RouteID AND TenantID = @TenantID
    `);

    if (!result.rowsAffected[0])
      return res.status(404).json({ success: false, message: 'Route לא נמצא' });

    res.json({ success: true, message: 'Route עודכן' });
  } catch (err) {
    if (err.number === 2627 || err.number === 2601)
      return res.status(409).json({ success: false, message: 'Route עם method+path זה כבר קיים' });
    console.error('[axon] PUT /routes/:id:', err);
    res.status(500).json({ success: false, message: 'שגיאה בעדכון route' });
  }
});

// ── DELETE /api/axon/routes/:id ───────────────────────────────
router.delete('/routes/:id', async (req, res) => {
  try {
    const result = await (await getPool()).request()
      .input('RouteID',  sql.Int, parseInt(req.params.id))
      .input('TenantID', sql.Int, tenantId(req))
      .query(`DELETE FROM dbo.tblAxonRoutes WHERE RouteID=@RouteID AND TenantID=@TenantID`);

    if (!result.rowsAffected[0])
      return res.status(404).json({ success: false, message: 'Route לא נמצא' });

    res.json({ success: true, message: 'Route נמחק' });
  } catch (err) {
    console.error('[axon] DELETE /routes/:id:', err);
    res.status(500).json({ success: false, message: 'שגיאה במחיקת route' });
  }
});

// ── POST /api/axon/routes/sort ────────────────────────────────
// Body: { items: [{ routeId, sortOrder }] }
router.post('/routes/sort', async (req, res) => {
  const { items } = req.body;
  if (!Array.isArray(items)) return res.status(400).json({ success: false, message: 'items חסר' });

  try {
    const pool = await getPool();
    for (const item of items) {
      await pool.request()
        .input('RouteID',   sql.Int, item.routeId)
        .input('SortOrder', sql.Int, item.sortOrder)
        .input('TenantID',  sql.Int, tenantId(req))
        .query(`UPDATE dbo.tblAxonRoutes SET SortOrder=@SortOrder WHERE RouteID=@RouteID AND TenantID=@TenantID`);
    }
    res.json({ success: true, message: 'סדר עודכן' });
  } catch (err) {
    console.error('[axon] POST /routes/sort:', err);
    res.status(500).json({ success: false, message: 'שגיאה בעדכון סדר' });
  }
});

// ── POST /api/axon/routes/:id/test ────────────────────────────
// Executes the route against a configured connector base URL
// Body: { baseUrl, headers, params, body }
router.post('/routes/:id/test', async (req, res) => {
  const id = parseInt(req.params.id);
  const { baseUrl, headers = {}, params = {}, body: reqBody = {} } = req.body;

  try {
    // Load route definition
    const dbResult = await (await getPool()).request()
      .input('RouteID',  sql.Int, id)
      .input('TenantID', sql.Int, tenantId(req))
      .query(`SELECT Method, Path FROM dbo.tblAxonRoutes WHERE RouteID=@RouteID AND TenantID=@TenantID`);

    if (!dbResult.recordset.length)
      return res.status(404).json({ success: false, message: 'Route לא נמצא' });

    const { Method, Path } = dbResult.recordset[0];

    // Build URL — replace :param with provided params
    let resolvedPath = Path;
    for (const [k, v] of Object.entries(params)) {
      resolvedPath = resolvedPath.replace(`:${k}`, encodeURIComponent(v));
    }

    const fullUrl = (baseUrl || 'http://localhost:3000').replace(/\/$/, '') + resolvedPath;

    const start = Date.now();
    try {
      const response = await fetchUrl(Method, fullUrl, headers, reqBody);
      const duration = Date.now() - start;
      res.json({
        success: true,
        data: {
          status:   response.status,
          headers:  response.headers,
          body:     response.body,
          duration,
        },
      });
    } catch (fetchErr) {
      res.json({
        success: false,
        data: {
          status:   0,
          body:     null,
          duration: Date.now() - start,
          error:    fetchErr.message,
        },
      });
    }
  } catch (err) {
    console.error('[axon] POST /routes/:id/test:', err);
    res.status(500).json({ success: false, message: 'שגיאה בביצוע בדיקה' });
  }
});

// ── GET /api/axon/platform-routes ────────────────────────────
// Returns hardcoded list of all backend platform routes, grouped by category
router.get('/platform-routes', async (req, res) => {
  const grouped = {};
  for (const r of PLATFORM_ROUTES) {
    const cat = r.category;
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(r);
  }

  const stats = {
    total:      PLATFORM_ROUTES.length,
    gets:       PLATFORM_ROUTES.filter(r => r.method === 'GET').length,
    posts:      PLATFORM_ROUTES.filter(r => r.method === 'POST').length,
    puts:       PLATFORM_ROUTES.filter(r => r.method === 'PUT').length,
    deletes:    PLATFORM_ROUTES.filter(r => r.method === 'DELETE').length,
    patches:    PLATFORM_ROUTES.filter(r => r.method === 'PATCH').length,
    secured:    PLATFORM_ROUTES.filter(r => r.authRequired).length,
    public:     PLATFORM_ROUTES.filter(r => !r.authRequired).length,
    categories: Object.keys(grouped).length,
  };

  res.json({ success: true, data: { routes: PLATFORM_ROUTES, grouped, stats } });
});

// ── POST /api/axon/import-platform ───────────────────────────
// Bulk-insert all platform routes into tblAxonRoutes for a project (idempotent)
router.post('/import-platform', async (req, res) => {
  const { projectId: pId } = req.body;
  if (!pId) return res.status(400).json({ success: false, message: 'projectId חסר' });

  try {
    const pool = await getPool();
    let inserted = 0, skipped = 0;

    for (let i = 0; i < PLATFORM_ROUTES.length; i++) {
      const r = PLATFORM_ROUTES[i];
      try {
        await pool.request()
          .input('TenantID',     sql.Int,               req.user.tenantId)
          .input('ProjectID',    sql.Int,               parseInt(pId))
          .input('Category',     sql.NVarChar(100),     r.category)
          .input('Method',       sql.NVarChar(10),      r.method)
          .input('Path',         sql.NVarChar(300),     r.path)
          .input('Title',        sql.NVarChar(200),     r.title)
          .input('Description',  sql.NVarChar(sql.MAX), r.description || '')
          .input('AuthRequired', sql.Bit,               r.authRequired ? 1 : 0)
          .input('SortOrder',    sql.Int,               i)
          .query(`
            IF NOT EXISTS (
              SELECT 1 FROM dbo.tblAxonRoutes
              WHERE TenantID=@TenantID AND ProjectID=@ProjectID
                AND Method=@Method AND Path=@Path AND IsActive=1
            )
            INSERT INTO dbo.tblAxonRoutes
              (TenantID, ProjectID, Category, Method, Path, Title, Description, AuthRequired, SortOrder)
            VALUES
              (@TenantID, @ProjectID, @Category, @Method, @Path, @Title, @Description, @AuthRequired, @SortOrder)
          `);
        inserted++;
      } catch (innerErr) {
        skipped++;
      }
    }

    res.json({ success: true, data: { inserted, skipped }, message: `יובאו ${inserted} routes (${skipped} קיימים כבר)` });
  } catch (err) {
    console.error('[axon] POST /import-platform:', err);
    res.status(500).json({ success: false, message: 'שגיאה בייבוא routes' });
  }
});

// ── utils ─────────────────────────────────────────────────────
function tryParse(str) {
  if (!str) return null;
  try { return JSON.parse(str); } catch { return str; }
}

function toJson(val) {
  if (!val) return null;
  if (typeof val === 'string') return val;
  return JSON.stringify(val);
}

function fetchUrl(method, urlStr, headers, body) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(urlStr);
    const isHttps = parsed.protocol === 'https:';
    const bodyStr = method !== 'GET' && method !== 'DELETE' ? JSON.stringify(body) : null;

    const options = {
      hostname: parsed.hostname,
      port:     parsed.port || (isHttps ? 443 : 80),
      path:     parsed.pathname + parsed.search,
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
        ...(bodyStr ? { 'Content-Length': Buffer.byteLength(bodyStr) } : {}),
      },
    };

    const transport = isHttps ? https : http;
    const req = transport.request(options, resp => {
      let data = '';
      resp.on('data', chunk => { data += chunk; });
      resp.on('end', () => {
        let parsed_body;
        try { parsed_body = JSON.parse(data); } catch { parsed_body = data; }
        resolve({ status: resp.statusCode, headers: resp.headers, body: parsed_body });
      });
    });

    req.on('error', reject);
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('timeout')); });
    if (bodyStr) req.write(bodyStr);
    req.end();
  });
}

module.exports = router;
