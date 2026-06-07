# סטנדרט DB — SQL Server Architect
**SQUADFLOW Platform | עדכון אחרון: 2026-06-08**

---

## סביבת עבודה

- **DB:** SQL Server (מקומי)
- **Client:** mssql (node-mssql)
- **Encoding:** NVARCHAR לכל שדה טקסט בעברית

---

## מוסכמות שמות

| אלמנט | מוסכמה | דוגמה |
|--------|---------|-------|
| טבלה | `tbl` prefix | `tblTenants`, `tblUsers` |
| PK | `[EntityName]ID` | `TenantID`, `UserID`, `CounterID` |
| SP | `sp_[Entity][Action]` | `sp_CounterCreate`, `sp_UserList` |
| View | `vw_[Name]` | `vw_ActiveTenants` |

---

## עמודות חובה בכל טבלה ראשית

```sql
[EntityID]   BIGINT IDENTITY(1,1) PRIMARY KEY,
TenantID     INT NOT NULL DEFAULT 0,
IsActive     BIT NOT NULL DEFAULT 1,
CreatedAt    DATETIME NOT NULL DEFAULT GETDATE(),
UpdatedAt    DATETIME NOT NULL DEFAULT GETDATE()
```

> **אין hard deletes** — תמיד `IsActive = 0`

---

## Multi-Tenant

כל טבלה מסוננת לפי `TenantID`. אין שיתוף נתונים בין ארגונים.

```sql
WHERE TenantID = @TenantID AND IsActive = 1
```

---

## Stored Procedure — תבנית סטנדרטית

```sql
CREATE OR ALTER PROCEDURE dbo.sp_EntityAction
    @TenantID      INT,
    @Param1        NVARCHAR(100),
    -- ... שאר פרמטרים
    @ResultCode    INT OUTPUT,
    @ResultMessage NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    SET @ResultCode = 0;
    SET @ResultMessage = N'';

    BEGIN TRY
        -- ── ולידציות ──────────────────────────────
        IF NOT EXISTS (SELECT 1 FROM tblEntities WHERE EntityID = @Param1 AND TenantID = @TenantID)
        BEGIN
            SET @ResultCode = 1; SET @ResultMessage = N'רשומה לא נמצאה'; RETURN;
        END

        -- ── לוגיקה ────────────────────────────────
        UPDATE tblEntities SET ... WHERE EntityID = @Param1 AND TenantID = @TenantID;

        SET @ResultCode = 0; SET @ResultMessage = N'הצלחה';
    END TRY
    BEGIN CATCH
        SET @ResultCode = 99;
        SET @ResultMessage = ERROR_MESSAGE();
    END CATCH
END
```

### קודי תוצאה סטנדרטיים

| קוד | משמעות |
|-----|--------|
| 0 | הצלחה |
| 1 | לא נמצא / כפול |
| 2 | גבול הגיע (overflow) |
| 3 | נעול |
| 99 | שגיאת SQL |

---

## מילים שמורות — אסור כ-alias

המילים הבאות הן reserved words ב-SQL Server:

| אסור | תחליף |
|------|-------|
| `plan` | `planType` |
| `count` | `cnt` |
| `user` | `userName` |
| `name` | `entityName` |
| `key` | `entityKey` |

---

## פורמט תאריך ב-SQL

```sql
-- ❌ עלול להיכשל:
FORMAT(date, 'yyyy-MM')

-- ✅ בטוח:
CAST(YEAR(d) AS VARCHAR) + '-' + RIGHT('0' + CAST(MONTH(d) AS VARCHAR), 2)
```

---

## Password Hashing

```sql
-- שמירה ב-DB:
PasswordHash NVARCHAR(100) NOT NULL,
Salt         NVARCHAR(50)  NOT NULL
```

Hash מחושב ב-Node.js: `sha256(password + salt)` → base64

---

## דוגמת טבלה מלאה

```sql
CREATE TABLE dbo.tblCounters (
    CounterID    BIGINT IDENTITY(1,1) NOT NULL,
    TenantID     INT NOT NULL DEFAULT 0,
    CustomerID   INT NOT NULL DEFAULT 0,
    CounterLevel VARCHAR(10) NOT NULL DEFAULT 'TENANT',
    CounterKey   VARCHAR(30) NOT NULL,
    CounterName  NVARCHAR(100) NOT NULL,
    Prefix       VARCHAR(20) NOT NULL DEFAULT '',
    DateFormat   VARCHAR(10) NOT NULL DEFAULT 'NONE',
    StepValue    INT NOT NULL DEFAULT 1,
    StartValue   INT NOT NULL DEFAULT 1,
    MaxValue     INT NOT NULL DEFAULT 999999,
    OutputType   VARCHAR(10) NOT NULL DEFAULT 'NUMERIC',
    RunningValue INT NOT NULL DEFAULT 0,
    CurrentValue INT NOT NULL DEFAULT 0,
    IsLocked     BIT NOT NULL DEFAULT 0,
    ResetPeriod  VARCHAR(10) NOT NULL DEFAULT 'NEVER',
    LastResetDate DATE NOT NULL DEFAULT '1900-01-01',
    CreatedAt    DATETIME NOT NULL DEFAULT GETDATE(),
    UpdatedAt    DATETIME NOT NULL DEFAULT GETDATE(),
    CONSTRAINT PK_tblCounters PRIMARY KEY (CounterID),
    CONSTRAINT UQ_Counter UNIQUE (TenantID, CustomerID, CounterLevel, CounterKey)
);
```
