const jwt = require('jsonwebtoken');
require('dotenv').config();

// ── Permission cache (in-memory, keyed by roleId) ────────────
const _permCache    = new Map(); // roleId → Set<'SCREEN:ACTION'>
const _cacheLoading = new Map(); // roleId → Promise

function clearPermCache(roleId) {
  if (roleId) _permCache.delete(roleId);
  else        _permCache.clear();
}

async function _loadRolePerms(roleId, pool) {
  if (_permCache.has(roleId)) return _permCache.get(roleId);

  // deduplicate concurrent loads for same roleId
  if (_cacheLoading.has(roleId)) return _cacheLoading.get(roleId);

  const promise = (async () => {
    const perms = new Set();
    if (roleId === 1 || roleId === 2) {
      // PLATFORM_ADMIN(1) cross-tenant + SUPER_ADMIN(2) within-tenant — both get all permissions
      // Tenant isolation for SUPER_ADMIN is enforced in SQL (TenantID filter per query), not here
      const r = await pool.request().query(`
        SELECT mi.MenuItemCode, at2.ActionCode
        FROM   dbo.tblMenuItems   mi
        CROSS JOIN dbo.tblActionTypes at2
        WHERE  mi.IsActive = 1
      `);
      r.recordset.forEach(p => perms.add(`${p.MenuItemCode}:${p.ActionCode}`));
    } else {
      const r = await pool.request()
        .input('RoleID', require('mssql').Int, roleId)
        .query(`
          SELECT mi.MenuItemCode, rp.ActionCode
          FROM   dbo.tblRolePermissions rp
          JOIN   dbo.tblMenuItems mi ON mi.MenuItemID = rp.MenuItemID
          WHERE  rp.RoleID    = @RoleID
            AND  mi.IsActive  = 1
            AND  rp.IsAllowed = 1
        `);
      r.recordset.forEach(p => perms.add(`${p.MenuItemCode}:${p.ActionCode}`));
    }
    _permCache.set(roleId, perms);
    _cacheLoading.delete(roleId);
    return perms;
  })();

  _cacheLoading.set(roleId, promise);
  return promise;
}

// ── Verify JWT ────────────────────────────────────────────────
function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token)
    return res.status(401).json({ success: false, message: 'נדרשת כניסה למערכת' });

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ success: false, message: 'פג תוקף הסשן — נא להתחבר מחדש' });
  }
}

// ── checkPermission factory ───────────────────────────────────
// Usage: router.post('/', requireAuth, checkPermission('ORGANIZATIONS','CREATE'), handler)
function checkPermission(screenCode, actionCode) {
  return async (req, res, next) => {
    if (req.user?.roleId === 1 || req.user?.roleId === 2) return next(); // PLATFORM_ADMIN + SUPER_ADMIN bypass

    try {
      const { getPool } = require('../db');
      const pool  = await getPool();
      const perms = await _loadRolePerms(req.user.roleId, pool);
      if (perms.has(`${screenCode}:${actionCode}`)) return next();
      return res.status(403).json({ success: false, message: 'אין הרשאה לפעולה זו' });
    } catch {
      next(); // on DB error → fail-open (don't block users)
    }
  };
}

module.exports = verifyToken;
module.exports.verifyToken      = verifyToken;
module.exports.checkPermission  = checkPermission;
module.exports.clearPermCache   = clearPermCache;
