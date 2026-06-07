const express = require('express');
const router  = express.Router();
const { sql, getPool, poolConnect } = require('../db');
const requireAuth     = require('../middleware/auth');
const requirePlatform = require('../middleware/platformAdmin');

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

    const o = orgsResult.recordset[0];
    const u = usersResult.recordset[0];

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
      planDistribution: planResult.recordset,
      monthlyGrowth:    monthlyResult.recordset,
      recentOrgs:       recentResult.recordset,
    });
  } catch (err) {
    console.error('GET /stats/platform error:', err.message);
    return res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
