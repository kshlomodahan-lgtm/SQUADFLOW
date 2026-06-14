/**
 * One-time loader: imports ARCHEM data model into CORTEX for ProjectID=2
 * Run: node load-archem-cortex.js
 */
const http = require('http');

const BASE = 'http://localhost:3000';
const TENANT_CODE = 'PRO_5149577';
const USERNAME = 'admin';
const PASSWORD = 'Admin2026';
const PROJECT_ID = 2;

// ── Type mapping ─────────────────────────────────────────────────────────────
function mapType(sqlType) {
  const t = sqlType.toLowerCase();
  if (['bit'].includes(t)) return { type: 'boolean', format: null };
  if (['int', 'smallint', 'bigint', 'tinyint'].includes(t)) return { type: 'number', format: null };
  if (t.startsWith('decimal') || t === 'money' || t === 'float') return { type: 'money', format: '10.3' };
  if (t === 'date') return { type: 'date', format: 'DD/MM/YYYY' };
  if (t === 'datetime' || t === 'datetime2') return { type: 'datetime', format: 'DD/MM/YYYY HH:mm' };
  if (t.startsWith('nvarchar') || t.startsWith('varchar') || t.startsWith('char') || t.startsWith('nchar'))
    return { type: 'text', format: null };
  return { type: 'text', format: null };
}

// ── Data model ───────────────────────────────────────────────────────────────
const OBJECTS = [
  {
    name: 'tblCompanies', desc: 'חברות (קוד ייחוס)', color: '#7c3aed', posX: 100, posY: 80,
    fields: [
      { name: 'CompanyID',  sql: 'int',          isKey: true,  isReq: true  },
      { name: 'NameHE',     sql: 'nvarchar(50)',  isKey: false, isReq: false },
      { name: 'NameEN',     sql: 'nvarchar(50)',  isKey: false, isReq: false },
      { name: 'Address1',   sql: 'nvarchar(60)',  isKey: false, isReq: false },
      { name: 'Phone1',     sql: 'nvarchar(20)',  isKey: false, isReq: false },
      { name: 'IsActive',   sql: 'bit',           isKey: false, isReq: true  },
    ],
  },
  {
    name: 'tblCurrencies', desc: 'מטבעות', color: '#0891b2', posX: 460, posY: 80,
    fields: [
      { name: 'CurrencyID',     sql: 'smallint',    isKey: true,  isReq: true  },
      { name: 'CurrencyDesc',   sql: 'nvarchar(40)', isKey: false, isReq: false },
      { name: 'CurrencySymbol', sql: 'nvarchar(5)',  isKey: false, isReq: false },
      { name: 'IsBase',         sql: 'bit',          isKey: false, isReq: true  },
      { name: 'IsActive',       sql: 'bit',          isKey: false, isReq: true  },
    ],
  },
  {
    name: 'tblPaymentTerms', desc: 'תנאי תשלום', color: '#059669', posX: 820, posY: 80,
    fields: [
      { name: 'PaymentTermID', sql: 'smallint',      isKey: true,  isReq: true  },
      { name: 'Description1',  sql: 'nvarchar(100)', isKey: false, isReq: false },
      { name: 'Description2',  sql: 'nvarchar(100)', isKey: false, isReq: false },
      { name: 'CreditDays',    sql: 'smallint',      isKey: false, isReq: false },
    ],
  },
  {
    name: 'tblSalesDomains', desc: 'תחומי מכירה', color: '#e11d48', posX: 100, posY: 400,
    fields: [
      { name: 'SalesDomainID', sql: 'smallint',    isKey: true,  isReq: true  },
      { name: 'DomainName',    sql: 'nvarchar(50)', isKey: false, isReq: false },
      { name: 'Prefix',        sql: 'nvarchar(15)', isKey: false, isReq: false },
      { name: 'IsActive',      sql: 'bit',          isKey: false, isReq: true  },
    ],
  },
  {
    name: 'tblSalesPersons', desc: 'אנשי מכירות', color: '#d97706', posX: 460, posY: 400,
    fields: [
      { name: 'SalesPersonID', sql: 'smallint',    isKey: true,  isReq: true  },
      { name: 'NameHE',        sql: 'nvarchar(40)', isKey: false, isReq: false },
      { name: 'NameEN',        sql: 'nvarchar(40)', isKey: false, isReq: false },
      { name: 'RoleCode',      sql: 'char(1)',       isKey: false, isReq: false },
      { name: 'IsActive',      sql: 'bit',           isKey: false, isReq: true  },
    ],
  },
  {
    name: 'tblSuppliers', desc: 'ספקים', color: '#7c3aed', posX: 820, posY: 400,
    fields: [
      { name: 'SupplierID',   sql: 'int',           isKey: true,  isReq: true  },
      { name: 'ShortName',    sql: 'nvarchar(30)',   isKey: false, isReq: false },
      { name: 'FullName',     sql: 'nvarchar(80)',   isKey: false, isReq: false },
      { name: 'Address1',     sql: 'nvarchar(60)',   isKey: false, isReq: false },
      { name: 'City',         sql: 'nvarchar(30)',   isKey: false, isReq: false },
      { name: 'Country',      sql: 'nvarchar(30)',   isKey: false, isReq: false },
      { name: 'Phone1',       sql: 'nvarchar(25)',   isKey: false, isReq: false },
      { name: 'Fax',          sql: 'nvarchar(25)',   isKey: false, isReq: false },
      { name: 'VATNumber',    sql: 'nvarchar(20)',   isKey: false, isReq: false },
      { name: 'PSNPrefix',    sql: 'nvarchar(10)',   isKey: false, isReq: false },
      { name: 'PSNNumerator', sql: 'int',            isKey: false, isReq: false },
      { name: 'IsActive',     sql: 'bit',            isKey: false, isReq: true  },
      { name: 'CreatedAt',    sql: 'datetime2',      isKey: false, isReq: false },
      { name: 'UpdatedAt',    sql: 'datetime2',      isKey: false, isReq: false },
    ],
  },
  {
    name: 'tblCustomers', desc: 'לקוחות', color: '#0891b2', posX: 100, posY: 720,
    fields: [
      { name: 'CustomerID',            sql: 'int',           isKey: true,  isReq: true  },
      { name: 'ShortNameHE',           sql: 'nvarchar(30)',  isKey: false, isReq: false },
      { name: 'FullNameHE',            sql: 'nvarchar(80)',  isKey: false, isReq: false },
      { name: 'ShortNameEN',           sql: 'nvarchar(30)',  isKey: false, isReq: false },
      { name: 'FullNameEN',            sql: 'nvarchar(80)',  isKey: false, isReq: false },
      { name: 'CityEN',                sql: 'nvarchar(30)',  isKey: false, isReq: false },
      { name: 'CountryEN',             sql: 'nvarchar(20)',  isKey: false, isReq: false },
      { name: 'Phone1',                sql: 'nvarchar(25)',  isKey: false, isReq: false },
      { name: 'VATRate',               sql: 'decimal(7,4)',  isKey: false, isReq: false },
      { name: 'CompanyRegNo',          sql: 'nvarchar(20)',  isKey: false, isReq: false },
      { name: 'StatusID',              sql: 'smallint',      isKey: false, isReq: false },
      { name: 'DefaultCurrencyID',     sql: 'int',           isKey: false, isReq: false },
      { name: 'DefaultPaymentTermID',  sql: 'int',           isKey: false, isReq: false },
      { name: 'DefaultSalesDomainID',  sql: 'int',           isKey: false, isReq: false },
      { name: 'PSNPrefix',             sql: 'nvarchar(10)',  isKey: false, isReq: false },
      { name: 'PSNNumerator',          sql: 'int',           isKey: false, isReq: false },
      { name: 'Notes',                 sql: 'nvarchar(500)', isKey: false, isReq: false },
      { name: 'IsActive',              sql: 'bit',           isKey: false, isReq: true  },
      { name: 'CreatedAt',             sql: 'datetime2',     isKey: false, isReq: false },
      { name: 'UpdatedAt',             sql: 'datetime2',     isKey: false, isReq: false },
    ],
  },
  {
    name: 'tblItemLinks', desc: 'קישורי פריטים (ספק-לקוח-מקט)', color: '#059669', posX: 600, posY: 720,
    fields: [
      { name: 'ItemLinkID',        sql: 'bigint',        isKey: true,  isReq: true  },
      { name: 'SupplierID',        sql: 'int',           isKey: false, isReq: true  },
      { name: 'SupplierSKU',       sql: 'nvarchar(25)',  isKey: false, isReq: false },
      { name: 'CustomerID',        sql: 'int',           isKey: false, isReq: true  },
      { name: 'CustomerSKU',       sql: 'nvarchar(25)',  isKey: false, isReq: false },
      { name: 'CustomerSKUDesc',   sql: 'nvarchar(100)', isKey: false, isReq: false },
      { name: 'UOMID',             sql: 'int',           isKey: false, isReq: false },
      { name: 'ResponsibleUserID', sql: 'int',           isKey: false, isReq: false },
      { name: 'IsActive',          sql: 'bit',           isKey: false, isReq: true  },
      { name: 'IsTempSKU',         sql: 'bit',           isKey: false, isReq: true  },
      { name: 'IsGlobalSKU',       sql: 'bit',           isKey: false, isReq: true  },
      { name: 'CreatedAt',         sql: 'datetime2',     isKey: false, isReq: false },
      { name: 'UpdatedAt',         sql: 'datetime2',     isKey: false, isReq: false },
    ],
  },
  {
    name: 'tblOrders', desc: 'הזמנות רכש', color: '#e11d48', posX: 1100, posY: 400,
    fields: [
      { name: 'OrderID',                sql: 'bigint',       isKey: true,  isReq: true  },
      { name: 'CompanyID',              sql: 'int',          isKey: false, isReq: true  },
      { name: 'OrderYear',              sql: 'smallint',     isKey: false, isReq: true  },
      { name: 'OrderNumber',            sql: 'int',          isKey: false, isReq: true  },
      { name: 'GroupNo',                sql: 'smallint',     isKey: false, isReq: true  },
      { name: 'SupplierID',             sql: 'int',          isKey: false, isReq: false },
      { name: 'CustomerID',             sql: 'int',          isKey: false, isReq: false },
      { name: 'CurrencyID',             sql: 'smallint',     isKey: false, isReq: false },
      { name: 'OrderDate',              sql: 'date',         isKey: false, isReq: false },
      { name: 'SupplierOC',             sql: 'nvarchar(20)', isKey: false, isReq: false },
      { name: 'SupplierOCDate',         sql: 'date',         isKey: false, isReq: false },
      { name: 'DesiredDeliveryDate',    sql: 'date',         isKey: false, isReq: false },
      { name: 'UpdatedDeliveryDate',    sql: 'date',         isKey: false, isReq: false },
      { name: 'BLNumber',               sql: 'nvarchar(25)', isKey: false, isReq: false },
      { name: 'VesselName',             sql: 'nvarchar(60)', isKey: false, isReq: false },
      { name: 'ETD',                    sql: 'date',         isKey: false, isReq: false },
      { name: 'ETA',                    sql: 'date',         isKey: false, isReq: false },
      { name: 'ATA',                    sql: 'date',         isKey: false, isReq: false },
      { name: 'SupplierInvoiceNo',      sql: 'nvarchar(20)', isKey: false, isReq: false },
      { name: 'SupplierInvoiceDate',    sql: 'date',         isKey: false, isReq: false },
      { name: 'InvoiceAmount',          sql: 'money',        isKey: false, isReq: false },
      { name: 'AmountPaidByCustomer',   sql: 'money',        isKey: false, isReq: false },
      { name: 'CommissionAmtReceived',  sql: 'money',        isKey: false, isReq: false },
      { name: 'TotalValue',             sql: 'money',        isKey: false, isReq: false },
      { name: 'TotalCommission',        sql: 'money',        isKey: false, isReq: false },
      { name: 'TransportMode',          sql: 'char(1)',       isKey: false, isReq: false },
      { name: 'CustomerPaid',           sql: 'bit',          isKey: false, isReq: false },
      { name: 'CommissionReceived',     sql: 'bit',          isKey: false, isReq: false },
      { name: 'HasDocuments',           sql: 'bit',          isKey: false, isReq: true  },
      { name: 'IsFrozen',               sql: 'bit',          isKey: false, isReq: true  },
      { name: 'IsCancelled',            sql: 'bit',          isKey: false, isReq: true  },
      { name: 'IsImportant',            sql: 'bit',          isKey: false, isReq: true  },
      { name: 'IsFrameContract',        sql: 'bit',          isKey: false, isReq: true  },
      { name: 'IsActive',               sql: 'bit',          isKey: false, isReq: true  },
      { name: 'CreatedAt',              sql: 'datetime2',    isKey: false, isReq: false },
      { name: 'UpdatedAt',              sql: 'datetime2',    isKey: false, isReq: false },
    ],
  },
  {
    name: 'tblOrderLines', desc: 'שורות הזמנה', color: '#d97706', posX: 1100, posY: 800,
    fields: [
      { name: 'OrderLineID',           sql: 'bigint',        isKey: true,  isReq: true  },
      { name: 'OrderID',               sql: 'bigint',        isKey: false, isReq: true  },
      { name: 'CompanyID',             sql: 'int',           isKey: false, isReq: true  },
      { name: 'OrderYear',             sql: 'smallint',      isKey: false, isReq: true  },
      { name: 'OrderNumber',           sql: 'int',           isKey: false, isReq: true  },
      { name: 'GroupNo',               sql: 'smallint',      isKey: false, isReq: true  },
      { name: 'LineNo',                sql: 'smallint',      isKey: false, isReq: true  },
      { name: 'SupplierID',            sql: 'int',           isKey: false, isReq: false },
      { name: 'CustomerID',            sql: 'int',           isKey: false, isReq: false },
      { name: 'SupplierSKU',           sql: 'nvarchar(25)',  isKey: false, isReq: false },
      { name: 'CustomerSKU',           sql: 'nvarchar(25)',  isKey: false, isReq: false },
      { name: 'Description',           sql: 'nvarchar(100)', isKey: false, isReq: false },
      { name: 'Price',                 sql: 'money',         isKey: false, isReq: false },
      { name: 'PerQty',                sql: 'smallint',      isKey: false, isReq: false },
      { name: 'UOM',                   sql: 'nvarchar(10)',  isKey: false, isReq: false },
      { name: 'CurrencyID',            sql: 'smallint',      isKey: false, isReq: false },
      { name: 'QtyOrdered',            sql: 'decimal(18,3)', isKey: false, isReq: false },
      { name: 'QtyRemaining',          sql: 'decimal(18,3)', isKey: false, isReq: false },
      { name: 'DiscountPct',           sql: 'decimal(7,4)',  isKey: false, isReq: false },
      { name: 'LineValue',             sql: 'money',         isKey: false, isReq: false },
      { name: 'DeliveryDate',          sql: 'date',          isKey: false, isReq: false },
      { name: 'CommissionType',        sql: 'char(1)',        isKey: false, isReq: false },
      { name: 'CommissionPct',         sql: 'decimal(7,4)',  isKey: false, isReq: false },
      { name: 'CommissionFixed',       sql: 'money',         isKey: false, isReq: false },
      { name: 'CommissionPerPrice',    sql: 'money',         isKey: false, isReq: false },
      { name: 'CommissionPerQty',      sql: 'smallint',      isKey: false, isReq: false },
      { name: 'IsFrameContract',       sql: 'bit',           isKey: false, isReq: true  },
      { name: 'IsActive',              sql: 'bit',           isKey: false, isReq: true  },
      { name: 'ItemLinkID',            sql: 'bigint',        isKey: false, isReq: false },
      { name: 'CreatedAt',             sql: 'datetime2',     isKey: false, isReq: false },
      { name: 'UpdatedAt',             sql: 'datetime2',     isKey: false, isReq: false },
    ],
  },
];

// ── HTTP helpers ──────────────────────────────────────────────────────────────
function apiCall(method, path, body, token) {
  return new Promise((resolve, reject) => {
    const data = body ? JSON.stringify(body) : null;
    const opts = {
      hostname: 'localhost', port: 3000,
      path, method,
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(data ? { 'Content-Length': Buffer.byteLength(data) } : {}),
      },
    };
    const req = http.request(opts, res => {
      let raw = '';
      res.on('data', c => raw += c);
      res.on('end', () => {
        try { resolve(JSON.parse(raw)); } catch { resolve({ raw }); }
      });
    });
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}

async function login() {
  const res = await apiCall('POST', '/api/auth/login', {
    tenantCode: TENANT_CODE, username: USERNAME, password: PASSWORD,
  });
  if (!res.success) throw new Error('Login failed: ' + JSON.stringify(res));
  return res.data.token;
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log('🔐 Logging in...');
  const token = await login();
  console.log('✅ Authenticated\n');

  for (const obj of OBJECTS) {
    process.stdout.write(`📦 Creating object: ${obj.name} ... `);
    const res = await apiCall('POST', '/api/cortex/objects', {
      projectId:   PROJECT_ID,
      objectName:  obj.name,
      description: obj.desc,
      posX:        obj.posX,
      posY:        obj.posY,
      colorHex:    obj.color,
    }, token);

    if (!res.success) {
      console.log(`❌ FAILED: ${JSON.stringify(res)}`);
      continue;
    }
    const objectId = res.data.objectId;
    console.log(`✅ (ObjectID=${objectId})`);

    let sortOrder = 1;
    for (const f of obj.fields) {
      const { type, format } = mapType(f.sql);
      process.stdout.write(`  └─ ${f.name} (${type}${format ? ', ' + format : ''}) ... `);
      const fr = await apiCall('POST', '/api/cortex/fields', {
        objectId,
        fieldName:  f.name,
        dataType:   type,
        format:     format,
        isRequired: f.isReq,
        isKey:      f.isKey,
        sortOrder:  sortOrder++,
      }, token);
      if (!fr.success) {
        console.log(`❌ ${JSON.stringify(fr)}`);
      } else {
        console.log(`✅`);
      }
      // tiny delay to avoid overwhelming the DB
      await new Promise(r => setTimeout(r, 30));
    }
    console.log('');
  }

  console.log('🎉 Done! ARCHEM data model loaded into CORTEX ProjectID=' + PROJECT_ID);
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
