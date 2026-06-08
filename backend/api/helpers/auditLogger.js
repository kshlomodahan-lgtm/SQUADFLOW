const { sql, getPool, poolConnect } = require('../db');

// cache סוגי פעולות ויישויות (נטען פעם אחת בעלייה)
let _actionTypes = null;
let _entityTypes = null;

async function loadTypes(tenantId) {
  const db = await getPool();

  const atResult = await db.request()
    .input('TenantID', sql.Int, tenantId)
    .input('rc', sql.Int, 0)
    .input('rm', sql.NVarChar(200), '')
    .output('ResultCode', sql.Int)
    .output('ResultMessage', sql.NVarChar(200))
    .execute('sp_AuditActionTypes_List');

  const etResult = await db.request()
    .input('TenantID', sql.Int, tenantId)
    .input('rc', sql.Int, 0)
    .input('rm', sql.NVarChar(200), '')
    .output('ResultCode', sql.Int)
    .output('ResultMessage', sql.NVarChar(200))
    .execute('sp_AuditEntityTypes_List');

  _actionTypes = new Set(atResult.recordset.map(r => r.ActionTypeCode));
  _entityTypes = new Set(etResult.recordset.map(r => r.EntityTypeCode));
}

/**
 * רושם פעולה ביומן הביקורת.
 * קורא אוטומטית: tenantId, userId, userName, ip, userAgent מה-req.
 *
 * @param {import('express').Request} req
 * @param {{ actionType, entityType, entityId?, entityName?, customerId?, oldValue?, newValue?, severity? }} opts
 */
async function logAction(req, {
  actionType,
  entityType,
  entityId   = null,
  entityName = null,
  customerId = null,
  oldValue   = null,
  newValue   = null,
  severity   = null,
} = {}) {
  try {
    await poolConnect;
    const db = await getPool();

    const tenantId   = req.user?.tenantId   ?? 0;
    const userId     = req.user?.userId      ?? null;
    const userName   = req.user?.fullName    ?? 'anonymous';
    const tenantName = req.user?.tenantName  ?? null;
    const rawIp = req.headers['x-forwarded-for']?.split(',')[0]?.trim()
      || req.ip
      || req.connection?.remoteAddress
      || '0.0.0.0';
    const ipAddress = rawIp.replace('::ffff:', '').replace('::1', '127.0.0.1');
    const userAgent  = (req.headers['user-agent'] || '').substring(0, 500);
    const sessionId  = req.headers['authorization']
      ? require('crypto').createHash('md5').update(req.headers['authorization']).digest('hex')
      : null;

    const oldJson = oldValue ? JSON.stringify(oldValue) : null;
    const newJson = newValue ? JSON.stringify(newValue) : null;

    const req2 = db.request()
      .input('TenantID',    sql.Int,           tenantId)
      .input('UserID',      sql.Int,           userId)
      .input('UserName',    sql.NVarChar(100), userName)
      .input('TenantName',  sql.NVarChar(200), tenantName)
      .input('ActionType',  sql.VarChar(50),   actionType)
      .input('EntityType',  sql.VarChar(50),   entityType)
      .input('EntityID',    sql.Int,           entityId)
      .input('EntityName',  sql.NVarChar(200), entityName)
      .input('CustomerID',  sql.Int,           customerId)
      .input('OldValue',    sql.NVarChar(sql.MAX), oldJson)
      .input('NewValue',    sql.NVarChar(sql.MAX), newJson)
      .input('IPAddress',   sql.VarChar(45),   ipAddress)
      .input('UserAgent',   sql.NVarChar(500), userAgent)
      .input('SessionID',   sql.NVarChar(100), sessionId)
      .input('Severity',    sql.VarChar(10),   severity ?? 'INFO')
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200));

    await req2.execute('sp_AuditLog_Insert');
  } catch (err) {
    // יומן לא יכול לפיל את ה-request המקורי — שגיאה מוצגת בלוג בלבד
    console.error('[auditLogger] error:', err.message);
  }
}

/**
 * עוזר לרישום כניסה (ללא req.user — לפני JWT)
 */
async function logAuth(ip, userAgent, actionType, entityName, tenantId = 0, userId = null, userName = 'anonymous') {
  try {
    await poolConnect;
    const db = await getPool();

    await db.request()
      .input('TenantID',    sql.Int,           tenantId)
      .input('UserID',      sql.Int,           userId)
      .input('UserName',    sql.NVarChar(100), userName)
      .input('TenantName',  sql.NVarChar(200), null)
      .input('ActionType',  sql.VarChar(50),   actionType)
      .input('EntityType',  sql.VarChar(50),   'AUTH')
      .input('EntityID',    sql.Int,           userId)
      .input('EntityName',  sql.NVarChar(200), entityName)
      .input('CustomerID',  sql.Int,           null)
      .input('OldValue',    sql.NVarChar(sql.MAX), null)
      .input('NewValue',    sql.NVarChar(sql.MAX), null)
      .input('IPAddress',   sql.VarChar(45),   ip?.replace('::ffff:', '') || '0.0.0.0')
      .input('UserAgent',   sql.NVarChar(500), (userAgent || '').substring(0, 500))
      .input('SessionID',   sql.NVarChar(100), null)
      .input('Severity',    sql.VarChar(10),   actionType === 'LOGIN' ? 'INFO' : 'WARN')
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('sp_AuditLog_Insert');
  } catch (err) {
    console.error('[auditLogger.logAuth] error:', err.message);
  }
}

module.exports = { logAction, logAuth, loadTypes };
