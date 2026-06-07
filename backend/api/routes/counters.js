const express     = require('express');
const router      = express.Router();
const { sql, getPool } = require('../db');
const requireAuth = require('../middleware/auth');

router.use(requireAuth);

// ── GET /api/counters?level=TENANT&customerId=0
router.get('/', async (req, res) => {
  const tenantId   = req.user.tenantId;
  const customerId = parseInt(req.query.customerId ?? '0');
  const level      = req.query.level ?? '';

  try {
    const r = await (await getPool()).request()
      .input ('TenantID',     sql.Int,         tenantId)
      .input ('CustomerID',   sql.Int,         customerId)
      .input ('CounterLevel', sql.VarChar(10), level)
      .output('ResultCode',   sql.Int)
      .output('ResultMessage',sql.NVarChar(200))
      .execute('dbo.sp_CounterList');

    if (r.output.ResultCode !== 0)
      return res.status(400).json({ success: false, message: r.output.ResultMessage });

    return res.json({ success: true, data: r.recordset });
  } catch (err) {
    console.error('GET /counters error:', err);
    return res.status(500).json({ success: false, message: 'שגיאת שרת' });
  }
});

// ── POST /api/counters — יצירת מונה חדש
router.post('/', async (req, res) => {
  const tenantId = req.user.tenantId;
  const {
    customerID = 0, counterLevel = 'TENANT',
    counterKey, counterName, prefix,
    dateFormat = 'NONE', textPrefix = '',
    stepValue = 1, startValue = 1, maxValue = 999999,
    outputType = 'NUMERIC', resetPeriod = 'NEVER'
  } = req.body;

  if (!counterKey || !counterName || !prefix)
    return res.status(400).json({ success: false, message: 'מפתח, שם ותחילית הם שדות חובה' });

  try {
    const r = await (await getPool()).request()
      .input ('TenantID',     sql.Int,          tenantId)
      .input ('CustomerID',   sql.Int,          customerID)
      .input ('CounterLevel', sql.VarChar(10),  counterLevel)
      .input ('CounterKey',   sql.VarChar(30),  counterKey.toUpperCase())
      .input ('CounterName',  sql.NVarChar(100),counterName)
      .input ('Prefix',       sql.VarChar(20),  prefix.toUpperCase())
      .input ('DateFormat',   sql.VarChar(10),  dateFormat)
      .input ('TextPrefix',   sql.NVarChar(30), textPrefix)
      .input ('StepValue',    sql.Int,          stepValue)
      .input ('StartValue',   sql.Int,          startValue)
      .input ('MaxValue',     sql.Int,          maxValue)
      .input ('OutputType',   sql.VarChar(10),  outputType)
      .input ('ResetPeriod',  sql.VarChar(10),  resetPeriod)
      .output('ResultCode',   sql.Int)
      .output('ResultMessage',sql.NVarChar(200))
      .execute('dbo.sp_CounterCreate');

    if (r.output.ResultCode !== 0)
      return res.status(400).json({ success: false, message: r.output.ResultMessage });

    return res.json({ success: true, message: r.output.ResultMessage });
  } catch (err) {
    console.error('POST /counters error:', err);
    return res.status(500).json({ success: false, message: 'שגיאת שרת' });
  }
});

// ── PUT /api/counters/:counterKey — עדכון הגדרות מונה
router.put('/:counterKey', async (req, res) => {
  const tenantId    = req.user.tenantId;
  const counterKey  = req.params.counterKey;
  const {
    customerID = 0, counterLevel = 'TENANT',
    counterName, prefix, dateFormat, textPrefix = '',
    stepValue, startValue, maxValue, outputType = 'NUMERIC', resetPeriod
  } = req.body;

  try {
    const r = await (await getPool()).request()
      .input ('TenantID',     sql.Int,          tenantId)
      .input ('CustomerID',   sql.Int,          customerID)
      .input ('CounterLevel', sql.VarChar(10),  counterLevel)
      .input ('CounterKey',   sql.VarChar(30),  counterKey)
      .input ('CounterName',  sql.NVarChar(100),counterName)
      .input ('Prefix',       sql.VarChar(20),  prefix)
      .input ('DateFormat',   sql.VarChar(10),  dateFormat)
      .input ('TextPrefix',   sql.NVarChar(30), textPrefix)
      .input ('StepValue',    sql.Int,          stepValue)
      .input ('StartValue',   sql.Int,          startValue)
      .input ('MaxValue',     sql.Int,          maxValue)
      .input ('OutputType',   sql.VarChar(10),  outputType)
      .input ('ResetPeriod',  sql.VarChar(10),  resetPeriod)
      .output('ResultCode',   sql.Int)
      .output('ResultMessage',sql.NVarChar(200))
      .execute('dbo.sp_CounterUpdate');

    if (r.output.ResultCode !== 0)
      return res.status(400).json({ success: false, message: r.output.ResultMessage });

    return res.json({ success: true, message: r.output.ResultMessage });
  } catch (err) {
    console.error('PUT /counters/:key error:', err);
    return res.status(500).json({ success: false, message: 'שגיאת שרת' });
  }
});

// ── PUT /api/counters/:counterKey/lock — נעילה / שחרור
router.put('/:counterKey/lock', async (req, res) => {
  const tenantId   = req.user.tenantId;
  const counterKey = req.params.counterKey;
  const { customerID = 0, counterLevel = 'TENANT', isLocked } = req.body;

  try {
    const r = await (await getPool()).request()
      .input ('TenantID',     sql.Int,         tenantId)
      .input ('CustomerID',   sql.Int,         customerID)
      .input ('CounterLevel', sql.VarChar(10), counterLevel)
      .input ('CounterKey',   sql.VarChar(30), counterKey)
      .input ('IsLocked',     sql.Bit,         isLocked ? 1 : 0)
      .output('ResultCode',   sql.Int)
      .output('ResultMessage',sql.NVarChar(200))
      .execute('dbo.sp_CounterLock');

    if (r.output.ResultCode !== 0)
      return res.status(400).json({ success: false, message: r.output.ResultMessage });

    return res.json({ success: true, message: r.output.ResultMessage });
  } catch (err) {
    console.error('PUT /counters/:key/lock error:', err);
    return res.status(500).json({ success: false, message: 'שגיאת שרת' });
  }
});

// ── PUT /api/counters/:counterKey/reset — איפוס מונה שוטף
router.put('/:counterKey/reset', async (req, res) => {
  const tenantId   = req.user.tenantId;
  const counterKey = req.params.counterKey;
  const { customerID = 0, counterLevel = 'TENANT' } = req.body;

  try {
    const r = await (await getPool()).request()
      .input ('TenantID',     sql.Int,         tenantId)
      .input ('CustomerID',   sql.Int,         customerID)
      .input ('CounterLevel', sql.VarChar(10), counterLevel)
      .input ('CounterKey',   sql.VarChar(30), counterKey)
      .output('ResultCode',   sql.Int)
      .output('ResultMessage',sql.NVarChar(200))
      .execute('dbo.sp_CounterReset');

    if (r.output.ResultCode !== 0)
      return res.status(400).json({ success: false, message: r.output.ResultMessage });

    return res.json({ success: true, message: r.output.ResultMessage });
  } catch (err) {
    console.error('PUT /counters/:key/reset error:', err);
    return res.status(500).json({ success: false, message: 'שגיאת שרת' });
  }
});

module.exports = router;
