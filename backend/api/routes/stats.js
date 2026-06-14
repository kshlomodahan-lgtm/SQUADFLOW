const express = require('express');
const router  = express.Router();
const { sql, getPool, poolConnect } = require('../db');
const requireAuth     = require('../middleware/auth');
const requirePlatform = require('../middleware/platformAdmin');

// ── GET /api/stats/tenant — נתוני ארגון ספציפי ───────────
router.get('/tenant', requireAuth, async (req, res) => {
  try {
    const tenantId = req.user.tenantId;
    await poolConnect;
    const db = await getPool();

    const usersResult = await db.request()
      .input('TenantID', sql.Int, tenantId)
      .query(`SELECT COUNT(*) AS Total, SUM(CASE WHEN IsActive=1 THEN 1 ELSE 0 END) AS Active FROM dbo.tblUsers WHERE TenantID=@TenantID`);

    let projectsRow = { Total: 0, Active: 0 };
    try {
      const r = await db.request().input('TenantID', sql.Int, tenantId)
        .query(`SELECT COUNT(*) AS Total, SUM(CASE WHEN IsActive=1 THEN 1 ELSE 0 END) AS Active FROM dbo.tblProjects WHERE TenantID=@TenantID`);
      projectsRow = r.recordset[0];
    } catch(e) {}

    let connCount = 0;
    try {
      const r = await db.request().input('TenantID', sql.Int, tenantId)
        .query(`SELECT COUNT(*) AS Total FROM dbo.tblConnectors WHERE TenantID=@TenantID AND IsEnabled=1`);
      connCount = r.recordset[0].Total;
    } catch(e) {}

    let recentProjects = [];
    try {
      const r = await db.request().input('TenantID', sql.Int, tenantId)
        .query(`SELECT TOP 5 ProjectID, ProjectCode, ProjectName, IsActive, CreatedAt FROM dbo.tblProjects WHERE TenantID=@TenantID ORDER BY ProjectID DESC`);
      recentProjects = r.recordset;
    } catch(e) {}

    const u = usersResult.recordset[0];
    return res.json({
      success: true,
      users:    { total: u.Total, active: u.Active },
      projects: { total: projectsRow.Total, active: projectsRow.Active },
      connectors: connCount,
      recentProjects,
    });
  } catch(err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

router.use(requireAuth, requirePlatform);

// ── GET /api/stats/platform ───────────────────────────────
router.get('/platform', async (req, res) => {
  try {
    await poolConnect;
    const db = await getPool();

    // 1. ארגונים — סיכום
    const orgsResult = await db.request().query(`
      SELECT
        COUNT(*)                                                                   AS TotalOrgs,
        SUM(CASE WHEN IsActive = 1 THEN 1 ELSE 0 END)                            AS ActiveOrgs,
        SUM(CASE WHEN IsActive = 0 THEN 1 ELSE 0 END)                            AS InactiveOrgs,
        SUM(CASE WHEN IsActive = 1
                  AND ExpiresAt < DATEADD(DAY, 30, GETDATE()) THEN 1 ELSE 0 END) AS ExpiringOrgs
      FROM dbo.tblTenants
      WHERE TenantID <> 1
    `);

    // 2. משתמשים — סיכום
    const usersResult = await db.request().query(`
      SELECT
        COUNT(*)                                           AS TotalUsers,
        SUM(CASE WHEN IsActive = 1 THEN 1 ELSE 0 END)    AS ActiveUsers,
        SUM(CASE WHEN IsActive = 0 THEN 1 ELSE 0 END)    AS InactiveUsers
      FROM dbo.tblUsers
      WHERE TenantID <> 1
    `);

    // 3. פיזור לפי תוכנית
    const planResult = await db.request().query(`
      SELECT PlanType AS planType, COUNT(*) AS count
      FROM dbo.tblTenants
      WHERE TenantID <> 1
      GROUP BY PlanType
      ORDER BY count DESC
    `);

    // 4. גדילה חודשית — 6 חודשים (ללא FORMAT, תואם SQL Server 2008+)
    const monthlyResult = await db.request().query(`
      SELECT
        CAST(YEAR(SubscribedAt)  AS VARCHAR(4)) + '-'
          + RIGHT('0' + CAST(MONTH(SubscribedAt) AS VARCHAR(2)), 2) AS month,
        COUNT(*) AS count
      FROM dbo.tblTenants
      WHERE TenantID <> 1
        AND SubscribedAt IS NOT NULL
        AND SubscribedAt >= DATEADD(MONTH, -5,
              DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()), 0))
      GROUP BY
        YEAR(SubscribedAt),
        MONTH(SubscribedAt),
        CAST(YEAR(SubscribedAt)  AS VARCHAR(4)) + '-'
          + RIGHT('0' + CAST(MONTH(SubscribedAt) AS VARCHAR(2)), 2)
      ORDER BY month
    `);

    // 5. ארגונים אחרונים (5)
    const recentResult = await db.request().query(`
      SELECT TOP 5
        TenantID, CompanyName, TenantCode,
        ISNULL(PlanType,'') AS PlanType,
        IsActive, SubscribedAt
      FROM dbo.tblTenants
      WHERE TenantID <> 1
      ORDER BY TenantID DESC
    `);

    // 6. מוצרים — סיכום
    let productsRow = { TotalProducts: 0, ActiveProducts: 0, InactiveProducts: 0, DraftProducts: 0, DeprecatedProducts: 0 };
    try {
      const r = await db.request().query(`
        SELECT
          COUNT(*)                                                              AS TotalProducts,
          SUM(CASE WHEN IsActive = 1 AND ProductStatus = 'ACTIVE' THEN 1 ELSE 0 END) AS ActiveProducts,
          SUM(CASE WHEN IsActive = 0 THEN 1 ELSE 0 END)                       AS InactiveProducts,
          SUM(CASE WHEN ProductStatus = 'DRAFT'      THEN 1 ELSE 0 END)       AS DraftProducts,
          SUM(CASE WHEN ProductStatus = 'DEPRECATED' THEN 1 ELSE 0 END)       AS DeprecatedProducts
        FROM dbo.tblProducts
      `);
      if (r.recordset[0]) productsRow = r.recordset[0];
    } catch (e) { console.error('stats products query:', e.message); }

    // 7. חבילות — סיכום
    let packagesRow = { TotalPackages: 0, ActivePackages: 0, InactivePackages: 0, PublicPackages: 0 };
    try {
      const r = await db.request().query(`
        SELECT
          COUNT(*)                                           AS TotalPackages,
          SUM(CASE WHEN IsActive = 1 THEN 1 ELSE 0 END)    AS ActivePackages,
          SUM(CASE WHEN IsActive = 0 THEN 1 ELSE 0 END)    AS InactivePackages,
          SUM(CASE WHEN IsPublic  = 1 THEN 1 ELSE 0 END)   AS PublicPackages
        FROM dbo.tblPackages
      `);
      if (r.recordset[0]) packagesRow = r.recordset[0];
    } catch (e) { console.error('stats packages query:', e.message); }

    // 8. חבילות מובילות + ספירת מוצרים
    let topPackagesList = [];
    try {
      const r = await db.request().query(`
        SELECT TOP 5
          p.PackageID, p.PackageName, p.PackageCode,
          p.PriceMonthly, p.IsActive,
          COUNT(pp.ProductID) AS ProductCount
        FROM dbo.tblPackages p
        LEFT JOIN dbo.tblPackageProducts pp ON pp.PackageID = p.PackageID AND pp.IsIncluded = 1
        GROUP BY p.PackageID, p.PackageName, p.PackageCode, p.PriceMonthly, p.IsActive, p.SortOrder
        ORDER BY p.SortOrder ASC, p.PackageID ASC
      `);
      topPackagesList = r.recordset;
    } catch (e) { console.error('stats topPackages query:', e.message); }

    const o  = orgsResult.recordset[0];
    const u  = usersResult.recordset[0];
    const pr = productsRow;
    const pk = packagesRow;

    return res.json({
      success: true,
      orgs: {
        total:    o.TotalOrgs    ?? 0,
        active:   o.ActiveOrgs   ?? 0,
        inactive: o.InactiveOrgs ?? 0,
        expiring: o.ExpiringOrgs ?? 0,
      },
      users: {
        total:    u.TotalUsers    ?? 0,
        active:   u.ActiveUsers   ?? 0,
        inactive: u.InactiveUsers ?? 0,
      },
      products: {
        total:      pr.TotalProducts      ?? 0,
        active:     pr.ActiveProducts     ?? 0,
        inactive:   pr.InactiveProducts   ?? 0,
        draft:      pr.DraftProducts      ?? 0,
        deprecated: pr.DeprecatedProducts ?? 0,
      },
      packages: {
        total:    pk.TotalPackages    ?? 0,
        active:   pk.ActivePackages   ?? 0,
        inactive: pk.InactivePackages ?? 0,
        public:   pk.PublicPackages   ?? 0,
      },
      planDistribution: planResult.recordset,
      monthlyGrowth:    monthlyResult.recordset,
      recentOrgs:       recentResult.recordset,
      topPackages:      topPackagesList,
    });
  } catch (err) {
    console.error('GET /stats/platform error:', err.message);
    return res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
