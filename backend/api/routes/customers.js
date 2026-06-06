const express     = require('express');
const router      = express.Router();
const { sql, getPool, poolConnect } = require('../db');
const requireAuth = require('../middleware/auth');

// ── GET /api/customers — רשימת כל הלקוחות
router.get('/', requireAuth, async (req, res) => {
  try {
    await poolConnect;

    const { status, search } = req.query;

    let query = `
      SELECT
        c.CustomerID, c.CustomerCode, c.CompanyName, c.Email, c.Phone,
        c.Country, c.Industry,
        cs.StatusName, cs.StatusCode,
        c.CreatedAt,
        COUNT(DISTINCT u.UserID)  AS UserCount,
        COUNT(DISTINCT cp.ContactID) AS ContactCount,
        SUM(CASE WHEN t.StatusID IN (1,2,3) THEN 1 ELSE 0 END) AS OpenTickets,
        -- איש קשר ראשי
        MAX(CASE WHEN cp.IsPrimary=1 THEN cp.FirstName+' '+cp.LastName END) AS PrimaryContact,
        MAX(CASE WHEN cp.IsPrimary=1 THEN cp.Email END) AS PrimaryEmail
      FROM dbo.tblCustomers c
      JOIN dbo.tblCustomerStatuses cs ON cs.StatusID = c.StatusID
      LEFT JOIN dbo.tblUsers u         ON u.CustomerID = c.CustomerID AND u.IsActive=1 AND u.UserID>0
      LEFT JOIN dbo.tblContactPersons cp ON cp.CustomerID = c.CustomerID
      LEFT JOIN dbo.tblTickets t       ON t.CustomerID = c.CustomerID
      WHERE c.CustomerID > 0
        AND c.TenantID = @TenantID
    `;

    if (status)  query += ` AND cs.StatusCode = @Status`;
    if (search)  query += ` AND (c.CompanyName LIKE @Search OR c.Email LIKE @Search OR cp.FirstName LIKE @Search OR cp.LastName LIKE @Search)`;

    query += ` GROUP BY c.CustomerID, c.CustomerCode, c.CompanyName, c.Email, c.Phone,
                        c.Country, c.Industry, cs.StatusName, cs.StatusCode, c.CreatedAt
               ORDER BY c.CreatedAt DESC`;

    const req2 = (await getPool()).request();
    req2.input('TenantID', sql.Int, req.user.tenantId || 1);
    if (status) req2.input('Status', sql.VarChar(20), status);
    if (search) req2.input('Search', sql.NVarChar(100), `%${search}%`);

    const result = await req2.query(query);
    return res.json({ success: true, customers: result.recordset });

  } catch (err) {
    console.error('GET /customers error:', err);
    return res.status(500).json({ success: false, message: 'שגיאת שרת' });
  }
});

// ── GET /api/customers/:id — לקוח בודד
router.get('/:id', requireAuth, async (req, res) => {
  try {
    await poolConnect;
    const id = parseInt(req.params.id);
    if (!id || id <= 0) return res.status(400).json({ success: false, message: 'ID לא תקין' });

    const result = await (await getPool()).request()
      .input('CustomerID', sql.Int, id)
      .query(`
        SELECT c.*, cs.StatusName, cs.StatusCode
        FROM dbo.tblCustomers c
        JOIN dbo.tblCustomerStatuses cs ON cs.StatusID = c.StatusID
        WHERE c.CustomerID = @CustomerID AND c.CustomerID > 0
      `);

    if (!result.recordset.length)
      return res.status(404).json({ success: false, message: 'לקוח לא נמצא' });

    return res.json({ success: true, customer: result.recordset[0] });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'שגיאת שרת' });
  }
});

module.exports = router;
