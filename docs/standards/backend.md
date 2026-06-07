# סטנדרט Backend — Node.js Dev
**SQUADFLOW Platform | עדכון אחרון: 2026-06-08**

---

## סביבת עבודה

- **Runtime:** Node.js 24
- **Framework:** Express — REST API, CORS, Helmet
- **DB Client:** `mssql` (node-mssql)
- **Auth:** `jsonwebtoken`
- **File Upload:** `multer` → `backend/frontend/assets/logos/`
- **תיקיית עבודה:** `backend/`

---

## חוקים מוחלטים

| חוק | פירוט |
|-----|-------|
| ✅ `sql.connect(config)` | **לא** `new sql.ConnectionPool()` — גורם לבעיית NVarChar/עברית |
| ✅ JWT_SECRET קבוע ב-.env | אחרת משתמשים מתנתקים בכל הפעלת שרת |
| ✅ Response shape אחיד | `{ success: bool, data: T, message: string }` בכל route |
| ✅ Multi-tenant filtering | כל query מסונן לפי TenantID מה-JWT |
| ✅ Stored Procedures | לוגיקה עסקית מורכבת — רק SPs, לא inline SQL |

---

## קישור ל-DB

```javascript
const sql = require('mssql');
const config = {
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  options: { encrypt: false, trustServerCertificate: true }
};

// חובה: sql.connect ולא new sql.ConnectionPool
const pool = await sql.connect(config);
```

---

## JWT — מבנה Token

```json
{
  "tenantId": 5,
  "roleId": 1,
  "userId": 12,
  "fullName": "ישראל ישראלי"
}
```

- `roleId=1` = מנהל פלטפורמה (Super Admin)
- JWT_SECRET חייב להיות קבוע ב-`.env` — לא רנדומלי

---

## Response Shape — חובה בכל route

```javascript
// הצלחה
res.json({ success: true, data: result.recordset, message: '' });

// שגיאה
res.status(400).json({ success: false, data: null, message: 'שגיאה...' });
```

---

## קריאה ל-Stored Procedure

```javascript
router.get('/api/items', async (req, res) => {
  try {
    const tenantId = req.user.tenantId;  // מ-JWT
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('TenantID', sql.Int, tenantId)
      .input('IsActive', sql.Bit, 1)
      .output('ResultCode', sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('dbo.sp_ItemList');

    const rc = result.output.ResultCode;
    if (rc !== 0) return res.status(400).json({ success: false, data: null, message: result.output.ResultMessage });

    res.json({ success: true, data: result.recordset, message: '' });
  } catch (err) {
    res.status(500).json({ success: false, data: null, message: err.message });
  }
});
```

---

## Password Hashing

```javascript
const crypto = require('crypto');
const hash = crypto.createHash('sha256').update(password + salt, 'utf8').digest('base64');
```

> **לא bcrypt** — בעיית תאימות עם node-mssql

---

## Auth Middleware

```javascript
// middleware/auth.js
const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ success: false, message: 'Unauthorized' });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ success: false, message: 'Token invalid' });
  }
};
```

Angular חייב לתפוס 401 ב-interceptor ולקרוא `auth.logout()` — אחרת הדף נתקע ריק.

---

## העלאת לוגו

```javascript
const multer = require('multer');
const storage = multer.diskStorage({
  destination: 'frontend/assets/logos/',
  filename: (req, file, cb) => cb(null, `logo_${Date.now()}${path.extname(file.originalname)}`)
});
const upload = multer({ storage, limits: { fileSize: 2 * 1024 * 1024 } });

router.post('/api/upload/logo', auth, upload.single('logo'), (req, res) => {
  res.json({ success: true, data: { filename: req.file.filename }, message: '' });
});
```

---

## .env — מפתחות חובה

```env
DB_SERVER=localhost
DB_NAME=SQUADFLOW
DB_USER=sa
DB_PASSWORD=***
JWT_SECRET=<your-fixed-secret-here>        # קבוע! לא רנדומלי — לא לשנות אחרי deploy
PORT=3000
```

> `.env` **לעולם לא מועלה ל-Git**

---

## מבנה תיקיות

```
backend/
├── api/
│   ├── server.js          # Express app, CORS, Helmet, routes
│   ├── middleware/
│   │   └── auth.js        # JWT verification
│   └── routes/
│       ├── tenants.js
│       ├── users.js
│       ├── counters.js
│       └── ...
├── db/
│   ├── tblCounters.sql
│   ├── sp_users.sql
│   └── ...
└── frontend/
    └── assets/logos/      # לוגו ארגונים
```
