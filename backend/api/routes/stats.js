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

    // ארגונים — כל הטננטים חוץ מ-TenantID=1 (הפלטפורמה עצמה)
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

    // משתמשים — כל המשתמשים חוץ ממנהל הפלטפורמה (TenantID=1)
    const usersResult = await db.request().query(`
      SELECT
        COUNT(*)                                           AS TotalUsers,
        SUM(CASE WHEN IsActive = 1 THEN 1 ELSE 0 END)    AS ActiveUsers,
        SUM(CASE WHEN IsActive = 0 THEN 1 ELSE 0 END)    AS InactiveUsers
      FROM dbo.tblUsers
      WHERE TenantID <> 1
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
    });
  } catch (err) {
    console.error('GET /stats/platform error:', err);
    return res.status(500).json({ success: false });
  }
});

module.exports = router;
