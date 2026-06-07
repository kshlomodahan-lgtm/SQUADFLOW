# מודול מונים — תיעוד מלא
**SQUADFLOW Platform | גרסה 1.0 | 2026**

---

## סקירה כללית

מודול המונים מספק **סדרות מספור אוטומטיות** לכל יישום שנבנה על גבי הפלטפורמה.  
כל מסמך (חשבונית, הזמנה, ליד, חוזה וכו') מקבל מספר ייחודי — שוטף (טיוטה) ורץ (קבוע לאחר אישור).

### עקרון עבודה בשני שלבים

```
[יצירת מסמך]  →  sp_CounterNext   →  מספר שוטף זמני  (INV-current-0042)
[אישור מסמך]  →  sp_CounterConfirm →  מספר רץ קבוע    (INV-2026-000042)
```

---

## רמות מונה (CounterLevel)

| רמה | ערך | שימוש |
|-----|-----|--------|
| פלטפורמה | `PLATFORM` | מונה חוצה ארגונים (TenantID=0, CustomerID=0) |
| ארגון | `TENANT` | מונה פר-ארגון — נוצר ע"י מנהל הפלטפורמה |
| לקוח קצה | `CUSTOMER` | מונה פר-לקוח — נוצר ע"י מנהל הארגון |

> **כלל:** בית התוכנה יוצר מונים ברמת `TENANT`. הארגון מנהל מונים ברמת `TENANT` ו-`CUSTOMER`.

---

## שדות הטבלה (tblCounters)

| שדה | סוג | ברירת מחדל | תיאור |
|-----|-----|------------|-------|
| `CounterID` | BIGINT IDENTITY | — | מזהה ראשי (PK) |
| `TenantID` | INT | 0 | מזהה ארגון (0 = פלטפורמה) |
| `CustomerID` | INT | 0 | מזהה לקוח (0 = לא ברמת לקוח) |
| `CounterLevel` | VARCHAR(10) | `TENANT` | `PLATFORM` / `TENANT` / `CUSTOMER` |
| `CounterKey` | VARCHAR(30) | — | **מפתח ייחודי** — אותיות גדולות+ספרות+_ (לא ניתן לשינוי לאחר יצירה) |
| `CounterName` | NVARCHAR(100) | — | שם תיאורי בעברית |
| `Prefix` | VARCHAR(20) | — | תחילית המספר (INV, LEAD, ORD...) |
| `DateFormat` | VARCHAR(10) | `NONE` | פורמט תאריך בתוך המספר (ראה טבלה) |
| `StepValue` | INT | 1 | גודל צעד בין מספר למספר |
| `StartValue` | INT | 1 | ערך ראשוני |
| `MaxValue` | INT | 999999 | גבול עליון — לאחריו המונה ננעל אוטומטית |
| `OutputType` | VARCHAR(10) | `NUMERIC` | `NUMERIC` = מספר שלם / `STRING` = מחרוזת מעוצבת |
| `RunningValue` | INT | 0 | **מונה רץ** — קבוע, גדל רק באישור מסמך |
| `CurrentValue` | INT | 0 | **מונה שוטף** — זמני, איפוס תקופתי |
| `IsLocked` | BIT | 0 | 0=פעיל, 1=נעול (חסום לכל פעולה) |
| `ResetPeriod` | VARCHAR(10) | `NEVER` | `NEVER` / `ANNUAL` / `MONTHLY` |
| `LastResetDate` | DATE | `1900-01-01` | תאריך האיפוס האחרון |

### פורמט תאריך (DateFormat)

| ערך | תצוגת STRING | דוגמה |
|-----|-------------|-------|
| `NONE` | PREFIX-NNNNNN | `INV-000042` |
| `YEAR` | PREFIX-YYYY-NNNNNN | `INV-2026-000042` |
| `YEAR_MONTH` | PREFIX-YYYY-MM-NNNNNN | `INV-2026-06-000042` |

> פורמט `NUMERIC` מחזיר תמיד מספר שלם (42) ללא קשר ל-DateFormat.

---

## Stored Procedures

### 1. `sp_CounterCreate` — יצירת מונה חדש

```sql
EXEC dbo.sp_CounterCreate
    @TenantID     = 5,
    @CustomerID   = 0,
    @CounterLevel = 'TENANT',
    @CounterKey   = 'INVOICE',
    @CounterName  = N'חשבוניות מס',
    @Prefix       = 'INV',
    @DateFormat   = 'YEAR',
    @StepValue    = 1,
    @StartValue   = 1,
    @MaxValue     = 999999,
    @OutputType   = 'STRING',
    @ResetPeriod  = 'ANNUAL',
    @ResultCode   = @rc OUTPUT,
    @ResultMessage= @msg OUTPUT
```

**קודי תוצאה:**
| קוד | משמעות |
|-----|--------|
| 0 | הצלחה |
| 1 | מפתח כבר קיים |
| 99 | שגיאת DB |

---

### 2. `sp_CounterNext` — הקצאת מספר שוטף (שלב א — יצירת מסמך)

מגדיל את `CurrentValue` ומחזיר מספר זמני בפורמט `-XXXX`.  
**לא** משנה את `RunningValue`.

```sql
DECLARE @val INT, @fmt NVARCHAR(50), @rc INT, @msg NVARCHAR(200)

EXEC dbo.sp_CounterNext
    @TenantID         = 5,
    @CustomerID       = 0,
    @CounterLevel     = 'TENANT',
    @CounterKey       = 'INVOICE',
    @CurrentValue     = @val OUTPUT,       -- 42
    @CurrentFormatted = @fmt OUTPUT,       -- '-0042'
    @ResultCode       = @rc  OUTPUT,
    @ResultMessage    = @msg OUTPUT
```

**פורמט שוטף:** `-XXXX` (מקף + 4 ספרות) — מסמן שהמסמך בטיוטה.  
**כולל:** איפוס אוטומטי לפי `ResetPeriod` אם החל תקופה חדשה.

**קודי תוצאה:**
| קוד | משמעות |
|-----|--------|
| 0 | הצלחה |
| 1 | מונה לא נמצא |
| 2 | הגעת לגבול MaxValue |
| 99 | שגיאת DB |

---

### 3. `sp_CounterConfirm` — אישור מסמך — הקצאת מספר רץ קבוע (שלב ב)

מגדיל את `RunningValue` ומחזיר מספר **קבוע לצמיתות**.  
קוראים לו רק כשהמסמך מאושר ולא ניתן לביטול.

```sql
DECLARE @runVal INT, @runFmt NVARCHAR(50), @rc INT, @msg NVARCHAR(200)

EXEC dbo.sp_CounterConfirm
    @TenantID         = 5,
    @CustomerID       = 0,
    @CounterLevel     = 'TENANT',
    @CounterKey       = 'INVOICE',
    @RunningValue     = @runVal OUTPUT,    -- 42
    @RunningFormatted = @runFmt OUTPUT,    -- 'INV-2026-000042' (STRING) או '42' (NUMERIC)
    @ResultCode       = @rc     OUTPUT,
    @ResultMessage    = @msg    OUTPUT
```

**OutputType = NUMERIC:** מחזיר `'42'`  
**OutputType = STRING:** מחזיר `'INV-2026-000042'` (לפי DateFormat)

**קודי תוצאה:**
| קוד | משמעות |
|-----|--------|
| 0 | הצלחה |
| 1 | מונה לא נמצא |
| 2 | הגעת לגבול MaxValue |
| 99 | שגיאת DB |

---

### 4. `sp_CounterReset` — איפוס מונה שוטף (ידני)

מאפס את `CurrentValue` ל-`StartValue`. **אינו** נוגע ב-`RunningValue`.

```sql
EXEC dbo.sp_CounterReset
    @TenantID     = 5,
    @CustomerID   = 0,
    @CounterLevel = 'TENANT',
    @CounterKey   = 'INVOICE',
    @ResultCode   = @rc  OUTPUT,
    @ResultMessage= @msg OUTPUT
```

---

### 5. `sp_CounterUpdate` — עדכון הגדרות מונה

**לא פועל** על מונה נעול (מחזיר ResultCode=3).  
אינו משנה ערכי `RunningValue` / `CurrentValue`.

```sql
EXEC dbo.sp_CounterUpdate
    @TenantID     = 5,
    @CustomerID   = 0,
    @CounterLevel = 'TENANT',
    @CounterKey   = 'INVOICE',
    @CounterName  = N'חשבוניות מס מעודכן',
    @Prefix       = 'INV',
    @DateFormat   = 'YEAR_MONTH',
    @StepValue    = 1,
    @StartValue   = 1,
    @MaxValue     = 9999999,
    @OutputType   = 'STRING',
    @ResetPeriod  = 'MONTHLY',
    @ResultCode   = @rc  OUTPUT,
    @ResultMessage= @msg OUTPUT
```

**קודי תוצאה:**
| קוד | משמעות |
|-----|--------|
| 0 | הצלחה |
| 1 | מונה לא נמצא |
| 3 | **מונה נעול** — יש לשחרר נעילה |
| 99 | שגיאת DB |

---

### 6. `sp_CounterLock` — נעילה / שחרור

```sql
EXEC dbo.sp_CounterLock
    @TenantID     = 5,
    @CustomerID   = 0,
    @CounterLevel = 'TENANT',
    @CounterKey   = 'INVOICE',
    @IsLocked     = 1,          -- 1=נעל, 0=שחרר
    @ResultCode   = @rc  OUTPUT,
    @ResultMessage= @msg OUTPUT
```

> מונה נעול חסום לחלוטין: אין עדכון, אין הקצאה, אין איפוס.

---

### 7. `sp_CounterList` — רשימת מונים

```sql
EXEC dbo.sp_CounterList
    @TenantID     = 5,
    @CustomerID   = 0,
    @CounterLevel = 'TENANT',   -- '' = כל הרמות
    @ResultCode   = @rc  OUTPUT,
    @ResultMessage= @msg OUTPUT
```

מחזיר את כל שדות הטבלה, ממוין לפי `CounterLevel, CounterKey`.

---

## REST API

כל ה-Endpoints דורשים JWT Bearer Token.  
Response shape אחיד: `{ success: bool, data: T, message: string }`

### GET `/api/counters`

רשימת מונים לפי רמה.

```http
GET /api/counters?level=TENANT&customerId=0
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "CounterID": 1,
      "CounterKey": "INVOICE",
      "CounterName": "חשבוניות מס",
      "Prefix": "INV",
      "DateFormat": "YEAR",
      "OutputType": "STRING",
      "RunningValue": 42,
      "CurrentValue": 43,
      "IsLocked": false,
      "ResetPeriod": "ANNUAL"
    }
  ]
}
```

---

### POST `/api/counters` — יצירת מונה

```http
POST /api/counters
Content-Type: application/json

{
  "counterLevel": "TENANT",
  "counterKey": "INVOICE",
  "counterName": "חשבוניות מס",
  "prefix": "INV",
  "dateFormat": "YEAR",
  "stepValue": 1,
  "startValue": 1,
  "maxValue": 999999,
  "outputType": "STRING",
  "resetPeriod": "ANNUAL"
}
```

---

### PUT `/api/counters/:counterKey` — עדכון הגדרות

```http
PUT /api/counters/INVOICE
Content-Type: application/json

{
  "counterLevel": "TENANT",
  "customerID": 0,
  "counterName": "חשבוניות מס",
  "prefix": "INV",
  "dateFormat": "YEAR_MONTH",
  "stepValue": 1,
  "startValue": 1,
  "maxValue": 9999999,
  "outputType": "STRING",
  "resetPeriod": "MONTHLY"
}
```

---

### PUT `/api/counters/:counterKey/lock` — נעילה / שחרור

```http
PUT /api/counters/INVOICE/lock
Content-Type: application/json

{
  "counterLevel": "TENANT",
  "customerID": 0,
  "isLocked": true
}
```

---

### PUT `/api/counters/:counterKey/reset` — איפוס מונה שוטף

```http
PUT /api/counters/INVOICE/reset
Content-Type: application/json

{
  "counterLevel": "TENANT",
  "customerID": 0
}
```

---

## Angular Service

```typescript
import { CounterService } from './core/services/counter.service';

// Inject
constructor(private counterSvc: CounterService) {}

// רשימת מונים
this.counterSvc.getAll('TENANT').subscribe(r => console.log(r.data));

// יצירה
this.counterSvc.create({ counterKey: 'INVOICE', counterName: 'חשבוניות', prefix: 'INV', ... });

// עדכון
this.counterSvc.update('INVOICE', { counterName: 'שם חדש', ... });

// נעילה
this.counterSvc.lock('INVOICE', true, 'TENANT');

// איפוס שוטף
this.counterSvc.reset('INVOICE', 'TENANT');
```

---

## תרחיש שלם — הנפקת חשבונית

```sql
-- שלב 1: יצירת חשבונית (טיוטה) — מספר שוטף זמני
DECLARE @currVal INT, @currFmt NVARCHAR(50), @rc INT, @msg NVARCHAR(200)

EXEC dbo.sp_CounterNext
    @TenantID=5, @CounterKey='INVOICE', @CounterLevel='TENANT',
    @CurrentValue=@currVal OUTPUT,       -- 43
    @CurrentFormatted=@currFmt OUTPUT,   -- '-0043'
    @ResultCode=@rc OUTPUT, @ResultMessage=@msg OUTPUT

-- שמור בטבלת החשבוניות: InvoiceNumber = '-0043' (מסמן טיוטה)

-- שלב 2: אישור חשבונית — מספר רץ קבוע
DECLARE @runVal INT, @runFmt NVARCHAR(50)

EXEC dbo.sp_CounterConfirm
    @TenantID=5, @CounterKey='INVOICE', @CounterLevel='TENANT',
    @RunningValue=@runVal OUTPUT,        -- 43
    @RunningFormatted=@runFmt OUTPUT,    -- 'INV-2026-000043'
    @ResultCode=@rc OUTPUT, @ResultMessage=@msg OUTPUT

-- עדכן בטבלת החשבוניות: InvoiceNumber = 'INV-2026-000043'
```

---

## כללים חשובים

| כלל | פירוט |
|-----|-------|
| **CounterKey** | אותיות גדולות, ספרות, קו-תחתון בלבד. לא ניתן לשינוי לאחר יצירה. |
| **מונה נעול** | חסום לכל פעולה — Update / Next / Confirm / Reset מחזירים שגיאה |
| **RunningValue** | רק `sp_CounterConfirm` מגדיל אותו. לעולם לא יורד |
| **CurrentValue** | `sp_CounterNext` מגדיל, `sp_CounterReset` מאפס לStartValue |
| **ResultCode=2** | הגעת לMaxValue — יש להגדיל MaxValue או לאפס (אם ResetPeriod מאפשר) |
| **Multi-tenant** | כל query מסונן ע"פ TenantID מה-JWT. אין גישה בין ארגונים |
| **BIGINT** | CounterID מוחזר כ-string מ-mssql — יש להתייחס בהתאם |
