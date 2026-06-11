const express = require('express');
const router  = express.Router();
const { sql, getPool } = require('../db');
const requireAuth = require('../middleware/auth');

router.use(requireAuth);

// GET /api/cortex/:projectId — load all objects+fields+connections
router.get('/:projectId', async (req, res) => {
  try {
    const db = (await getPool()).request();
    const result = await db
      .input('ProjectID', sql.Int, parseInt(req.params.projectId))
      .input('TenantID',  sql.Int, req.user.tenantId)
      .execute('dbo.sp_CortexLoad');
    res.json({ success: true, data: {
      objects:     result.recordsets[0] || [],
      fields:      result.recordsets[1] || [],
      connections: result.recordsets[2] || [],
    }});
  } catch (err) {
    console.error('cortex GET:', err);
    res.status(500).json({ success: false, message: 'שגיאה בטעינת CORTEX' });
  }
});

// POST /api/cortex/objects
router.post('/objects', async (req, res) => {
  try {
    const b = req.body;
    const db = (await getPool()).request();
    const result = await db
      .input('ObjectID',    sql.Int,          0)
      .input('TenantID',    sql.Int,          req.user.tenantId)
      .input('ProjectID',   sql.Int,          b.projectId)
      .input('ObjectName',  sql.NVarChar(100), b.objectName)
      .input('Description', sql.NVarChar(500), b.description || '')
      .input('PosX',        sql.Float,        b.posX || 120)
      .input('PosY',        sql.Float,        b.posY || 120)
      .input('ColorHex',    sql.NVarChar(7),  b.colorHex || '#7c3aed')
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('dbo.sp_CortexObjectSave');
    const code = result.output.ResultCode;
    if (code < 0) return res.status(400).json({ success: false, message: result.output.ResultMessage });
    res.json({ success: true, data: { objectId: code } });
  } catch (err) {
    console.error('cortex POST /objects:', err);
    res.status(500).json({ success: false, message: 'שגיאה ביצירת מודל' });
  }
});

// PUT /api/cortex/objects/:id/position
router.put('/objects/:id/position', async (req, res) => {
  try {
    const db = (await getPool()).request();
    await db
      .input('ObjectID', sql.Int,   parseInt(req.params.id))
      .input('TenantID', sql.Int,   req.user.tenantId)
      .input('PosX',     sql.Float, req.body.posX)
      .input('PosY',     sql.Float, req.body.posY)
      .execute('dbo.sp_CortexObjectMove');
    res.json({ success: true });
  } catch (err) {
    console.error('cortex PUT position:', err);
    res.status(500).json({ success: false });
  }
});

// DELETE /api/cortex/objects/:id
router.delete('/objects/:id', async (req, res) => {
  try {
    const db = (await getPool()).request();
    await db
      .input('ObjectID', sql.Int, parseInt(req.params.id))
      .input('TenantID', sql.Int, req.user.tenantId)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('dbo.sp_CortexObjectDelete');
    res.json({ success: true });
  } catch (err) {
    console.error('cortex DELETE /objects:', err);
    res.status(500).json({ success: false });
  }
});

// POST /api/cortex/fields
router.post('/fields', async (req, res) => {
  try {
    const b = req.body;
    const db = (await getPool()).request();
    const result = await db
      .input('FieldID',    sql.Int,           0)
      .input('ObjectID',   sql.Int,           b.objectId)
      .input('TenantID',   sql.Int,           req.user.tenantId)
      .input('FieldName',  sql.NVarChar(100), b.fieldName)
      .input('DataType',   sql.NVarChar(50),  b.dataType || 'text')
      .input('Format',     sql.NVarChar(50),  b.format || null)
      .input('IsRequired', sql.Bit,           b.isRequired ? 1 : 0)
      .input('IsKey',      sql.Bit,           b.isKey ? 1 : 0)
      .input('SortOrder',  sql.Int,           b.sortOrder || 0)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('dbo.sp_CortexFieldSave');
    const code = result.output.ResultCode;
    if (code < 0) return res.status(400).json({ success: false, message: result.output.ResultMessage });
    res.json({ success: true, data: { fieldId: code } });
  } catch (err) {
    console.error('cortex POST /fields:', err);
    res.status(500).json({ success: false, message: 'שגיאה בהוספת שדה' });
  }
});

// PUT /api/cortex/fields/:id/order
router.put('/fields/:id/order', async (req, res) => {
  try {
    const b = req.body;
    const db = (await getPool()).request();
    await db
      .input('FieldID',   sql.Int,          parseInt(req.params.id))
      .input('ObjectID',  sql.Int,          b.objectId)
      .input('TenantID',  sql.Int,          req.user.tenantId)
      .input('Direction', sql.NVarChar(4),  b.direction)
      .execute('dbo.sp_CortexFieldReorder');
    res.json({ success: true });
  } catch (err) {
    console.error('cortex PUT /fields/order:', err);
    res.status(500).json({ success: false });
  }
});

// DELETE /api/cortex/fields/:id
router.delete('/fields/:id', async (req, res) => {
  try {
    const db = (await getPool()).request();
    await db
      .input('FieldID',  sql.Int, parseInt(req.params.id))
      .input('TenantID', sql.Int, req.user.tenantId)
      .execute('dbo.sp_CortexFieldDelete');
    res.json({ success: true });
  } catch (err) {
    console.error('cortex DELETE /fields:', err);
    res.status(500).json({ success: false });
  }
});

// POST /api/cortex/connections
router.post('/connections', async (req, res) => {
  try {
    const b = req.body;
    const db = (await getPool()).request();
    const result = await db
      .input('SourceID',     sql.Int,         b.sourceId)
      .input('TargetID',     sql.Int,         b.targetId)
      .input('TenantID',     sql.Int,         req.user.tenantId)
      .input('ProjectID',    sql.Int,         b.projectId)
      .input('RelationType', sql.NVarChar(10), b.relationType || '1:N')
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('dbo.sp_CortexConnectionSave');
    const code = result.output.ResultCode;
    if (code < 0) return res.status(400).json({ success: false, message: result.output.ResultMessage });
    res.json({ success: true, data: { connectionId: code } });
  } catch (err) {
    console.error('cortex POST /connections:', err);
    res.status(500).json({ success: false, message: 'שגיאה ביצירת חיבור' });
  }
});

// DELETE /api/cortex/connections/:id
router.delete('/connections/:id', async (req, res) => {
  try {
    const db = (await getPool()).request();
    await db
      .input('ConnectionID', sql.Int, parseInt(req.params.id))
      .input('TenantID',     sql.Int, req.user.tenantId)
      .execute('dbo.sp_CortexConnectionDelete');
    res.json({ success: true });
  } catch (err) {
    console.error('cortex DELETE /connections:', err);
    res.status(500).json({ success: false });
  }
});

module.exports = router;
