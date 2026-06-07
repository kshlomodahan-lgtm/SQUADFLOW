const express         = require('express');
const router          = express.Router();
const { sql, getPool, poolConnect } = require('../db');
const requireAuth     = require('../middleware/auth');
const requirePlatform = require('../middleware/platformAdmin');

// כל ה-routes דורשים login + TenantID=1
router.use(requireAuth, requirePlatform);

// ── GET /api/tenants — רשימת כל ה-tenants
router.get('/', async (req, res) => {
  try {
    const result = await (await getPool()).request().query(`
      SELECT t.TenantID, t.TenantCode, t.CompanyName, t.Email, t.Phone,
             t.PlanType, t.MaxUsers, t.MaxTickets, t.IsActive, t.LogoUrl,
             t.Notes, t.SubscribedAt, t.ExpiresAt,
             t.BusinessNumber, t.Address, t.City, t.Country, t.ContactName,
             t.Phone2, t.Fax, t.Website,
             t.BankName, t.BankBranch, t.BankAccount, t.AccountingRef,
             COUNT(DISTINCT u.UserID)     AS UserCount,
             COUNT(DISTINCT c.CustomerID) AS CustomerCount,
             COUNT(DISTINCT tk.TicketID)  AS OpenTickets
      FROM dbo.tblTenants t
      LEFT JOIN dbo.tblUsers    u  ON u.TenantID=t.TenantID AND u.IsActive=1 AND u.UserID>0
      LEFT JOIN dbo.tblCustomers c ON c.TenantID=t.TenantID AND c.CustomerID>0
      LEFT JOIN dbo.tblTickets  tk ON tk.TenantID=t.TenantID AND tk.StatusID IN (1,2,3)
      WHERE t.TenantID > 1
      GROUP BY t.TenantID,t.TenantCode,t.CompanyName,t.Email,t.Phone,
               t.PlanType,t.MaxUsers,t.MaxTickets,t.IsActive,t.LogoUrl,
               t.Notes,t.SubscribedAt,t.ExpiresAt,
               t.BusinessNumber,t.Address,t.City,t.Country,t.ContactName,
               t.Phone2,t.Fax,t.Website,
               t.BankName,t.BankBranch,t.BankAccount,t.AccountingRef
      ORDER BY t.TenantID
    `);
    return res.json({ success: true, tenants: result.recordset });
  } catch (err) {
    console.error('GET /tenants error:', err);
    return res.status(500).json({ success: false, message: 'שגיאת שרת' });
  }
});

// ── GET /api/tenants/:id — ארגון בודד דרך sp_OrganizationGet
router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  if (!id || id <= 0) return res.status(400).json({ success: false, message: 'ID לא תקין' });
  try {
    const r = await (await getPool()).request()
      .input ('TenantID',      sql.Int, id)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('dbo.sp_OrganizationGet');

    if (r.output.ResultCode !== 0)
      return res.status(404).json({ success: false, message: r.output.ResultMessage });

    return res.json({ success: true, tenant: r.recordset[0] });
  } catch (err) {
    console.error('GET /tenants/:id error:', err);
    return res.status(500).json({ success: false, message: 'שגיאת שרת' });
  }
});

// ── POST /api/tenants — הוספת ארגון חדש דרך sp_OrganizationCreate
router.post('/', async (req, res) => {
  const { tenantCode, companyName, email, phone, planType, maxUsers, maxTickets,
          notes, logoUrl, businessNumber, address, city, country, contactName,
          phone2, fax, website, bankName, bankBranch, bankAccount, accountingRef,
          expiresAt } = req.body;

  if (!tenantCode || !companyName || !email)
    return res.status(400).json({ success: false, message: 'קוד ארגון, שם ומייל הם שדות חובה' });

  const code    = tenantCode.toUpperCase();
  const expDate = expiresAt ? new Date(expiresAt) : null;

  try {
    await poolConnect;

    // ── קריאה ל-SP ─────────────────────────────────────────
    const spResult = await (await getPool()).request()
      .input ('TenantCode',  sql.VarChar(30),      code)
      .input ('CompanyName', sql.NVarChar(150),     companyName)
      .input ('Email',       sql.NVarChar(150),     email)
      .input ('Phone',       sql.VarChar(30),       phone      || '')
      .input ('PlanType',    sql.VarChar(20),       planType   || 'basic')
      .input ('MaxUsers',    sql.Int,               maxUsers   || 10)
      .input ('MaxTickets',  sql.Int,               maxTickets || 200)
      .input ('Notes',          sql.NVarChar(sql.MAX), notes           || '')
      .input ('LogoUrl',        sql.NVarChar(500),     logoUrl         || '')
      .input ('BusinessNumber', sql.NVarChar(30),      businessNumber  || '')
      .input ('Address',        sql.NVarChar(250),     address         || '')
      .input ('City',           sql.NVarChar(100),     city            || '')
      .input ('Country',        sql.NVarChar(100),     country         || 'ישראל')
      .input ('ContactName',    sql.NVarChar(150),     contactName     || '')
      .input ('Phone2',         sql.VarChar(30),       phone2          || '')
      .input ('Fax',            sql.VarChar(30),       fax             || '')
      .input ('Website',        sql.NVarChar(200),     website         || '')
      .input ('BankName',       sql.NVarChar(100),     bankName        || '')
      .input ('BankBranch',     sql.VarChar(30),       bankBranch      || '')
      .input ('BankAccount',    sql.VarChar(30),       bankAccount     || '')
      .input ('AccountingRef',  sql.NVarChar(50),      accountingRef   || '')
      .input ('ExpiresAt',      sql.DateTime2,         expDate)
      .output('NewTenantID',   sql.Int)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('dbo.sp_OrganizationCreate');

    const { NewTenantID: newId, ResultCode, ResultMessage } = spResult.output;

    // טיפול בשגיאות SP
    if (ResultCode !== 0) {
      const httpCode = ResultCode === 99 ? 500 : 400;
      return res.status(httpCode).json({ success: false, code: ResultCode, message: ResultMessage });
    }

    // ── 1. צור לקוח #1 לארגון ──────────────────────────────
    const custResult = await (await getPool()).request()
      .input('TenantID',     sql.Int,          newId)
      .input('CompanyName',  sql.NVarChar(150), companyName)
      .input('Email',        sql.NVarChar(150), email)
      .input('Phone',        sql.VarChar(30),   phone || '')
      .query(`INSERT INTO dbo.tblCustomers
                (TenantID,CustomerCode,CompanyName,Email,Phone,StatusID)
              OUTPUT INSERTED.CustomerID
              VALUES
                (@TenantID,'CUST-001',@CompanyName,@Email,@Phone,1)`);

    const newCustId = custResult.recordset[0].CustomerID;

    // ── 2. צור איש קשר ראשי ──────────────────────────────
    const contResult = await (await getPool()).request()
      .input('TenantID',    sql.Int,          newId)
      .input('CustomerID',  sql.Int,          newCustId)
      .input('Email',       sql.NVarChar(150), email)
      .query(`INSERT INTO dbo.tblContactPersons
                (TenantID,CustomerID,FirstName,LastName,Email,IsPrimary)
              OUTPUT INSERTED.ContactID
              VALUES
                (@TenantID,@CustomerID,'מנהל','מערכת',@Email,1)`);

    const newContId = contResult.recordset[0].ContactID;

    // ── 3. צור משתמש admin מחובר ללקוח ──────────────────
    const crypto = require('crypto');
    const defPass = '123456';
    const salt    = crypto.randomBytes(32).toString('base64');
    const hash    = crypto.createHash('sha256').update(defPass + salt, 'utf8').digest('base64');

    await (await getPool()).request()
      .input('TenantID',       sql.Int,          newId)
      .input('CustomerID',     sql.Int,          newCustId)
      .input('ContactPersonID',sql.Int,          newContId)
      .input('Username',       sql.VarChar(80),  'admin')
      .input('Email',          sql.NVarChar(150), email)
      .input('Hash',           sql.VarChar(255),  hash)
      .input('Salt',           sql.VarChar(100),  salt)
      .query(`INSERT INTO dbo.tblUsers
                (TenantID,CustomerID,ContactPersonID,Username,Email,
                 PasswordHash,PasswordSalt,RoleID,FirstName,LastName,MustChangePass)
              VALUES
                (@TenantID,@CustomerID,@ContactPersonID,'admin',@Email,
                 @Hash,@Salt,2,'מנהל','מערכת',1)`);

    return res.json({
      success:       true,
      message:       'הארגון נוצר בהצלחה',
      tenantId:      newId,
      customerId:    newCustId,
      adminUsername: 'admin',
      adminPassword: '123456',
      note:          'המשתמש חייב לשנות סיסמה בכניסה הראשונה'
    });

  } catch (err) {
    console.error('POST /tenants error:', err);
    return res.status(500).json({ success: false, message: 'שגיאת שרת' });
  }
});

// ── PUT /api/tenants/:id — עדכון tenant
router.put('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { companyName, email, phone, planType, maxUsers, maxTickets, isActive, logoUrl, notes,
          businessNumber, address, city, country, contactName, phone2, fax, website,
          bankName, bankBranch, bankAccount, accountingRef } = req.body;

  try {
    const r = await (await getPool()).request()
      .input ('TenantID',       sql.Int,              id)
      .input ('CompanyName',    sql.NVarChar(150),     companyName)
      .input ('Email',          sql.NVarChar(150),     email)
      .input ('Phone',          sql.VarChar(30),       phone           || '')
      .input ('PlanType',       sql.VarChar(20),       planType        || 'basic')
      .input ('MaxUsers',       sql.Int,               maxUsers        || 10)
      .input ('MaxTickets',     sql.Int,               maxTickets      || 200)
      .input ('IsActive',       sql.Bit,               isActive !== false ? 1 : 0)
      .input ('LogoUrl',        sql.NVarChar(500),     logoUrl         || '')
      .input ('Notes',          sql.NVarChar(sql.MAX), notes           || '')
      .input ('BusinessNumber', sql.NVarChar(30),      businessNumber  || '')
      .input ('Address',        sql.NVarChar(250),     address         || '')
      .input ('City',           sql.NVarChar(100),     city            || '')
      .input ('Country',        sql.NVarChar(100),     country         || 'ישראל')
      .input ('ContactName',    sql.NVarChar(150),     contactName     || '')
      .input ('Phone2',         sql.VarChar(30),       phone2          || '')
      .input ('Fax',            sql.VarChar(30),       fax             || '')
      .input ('Website',        sql.NVarChar(200),     website         || '')
      .input ('BankName',       sql.NVarChar(100),     bankName        || '')
      .input ('BankBranch',     sql.VarChar(30),       bankBranch      || '')
      .input ('BankAccount',    sql.VarChar(30),       bankAccount     || '')
      .input ('AccountingRef',  sql.NVarChar(50),      accountingRef   || '')
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('dbo.sp_OrganizationUpdate');

    if (r.output.ResultCode !== 0) {
      const httpCode = r.output.ResultCode === 99 ? 500 : 400;
      return res.status(httpCode).json({ success: false, message: r.output.ResultMessage });
    }

    return res.json({ success: true, message: r.output.ResultMessage });
  } catch (err) {
    console.error('PUT /tenants/:id error:', err);
    return res.status(500).json({ success: false, message: 'שגיאת שרת' });
  }
});

// ── PUT /api/tenants/:id/toggle — הפעל/השבת ארגון
router.put('/:id/toggle', async (req, res) => {
  const id = parseInt(req.params.id);
  if (!id || id <= 1) return res.status(400).json({ success: false, message: 'ID לא תקין' });
  try {
    const pool = await getPool();
    const cur = await pool.request()
      .input('TenantID', sql.Int, id)
      .query('SELECT IsActive FROM dbo.tblTenants WHERE TenantID=@TenantID');
    if (!cur.recordset.length) return res.status(404).json({ success: false, message: 'ארגון לא נמצא' });

    const newState = cur.recordset[0].IsActive ? 0 : 1;
    await pool.request()
      .input('TenantID', sql.Int, id)
      .input('IsActive', sql.Bit, newState)
      .query('UPDATE dbo.tblTenants SET IsActive=@IsActive, UpdatedAt=GETDATE() WHERE TenantID=@TenantID');

    return res.json({ success: true, isActive: newState === 1 });
  } catch (err) {
    console.error('PUT /tenants/:id/toggle error:', err);
    return res.status(500).json({ success: false, message: 'שגיאת שרת' });
  }
});

module.exports = router;
