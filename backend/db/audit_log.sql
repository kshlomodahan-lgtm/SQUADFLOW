-- ============================================================
-- Audit Log Module — Tables + Seed + Stored Procedures
-- ============================================================
USE ProfitsCRM;
GO

-- ============================================================
-- tblAuditActionTypes
-- ============================================================
IF NOT EXISTS (SELECT 1 FROM sys.tables WHERE object_id = OBJECT_ID(N'dbo.tblAuditActionTypes'))
BEGIN
    CREATE TABLE dbo.tblAuditActionTypes (
        ActionTypeID    INT            NOT NULL IDENTITY(1,1) CONSTRAINT PK_tblAuditActionTypes PRIMARY KEY,
        TenantID        INT            NULL,                   -- NULL = פלטפורמה / N = tenant
        ActionTypeCode  VARCHAR(50)    NOT NULL,
        ActionTypeName  NVARCHAR(100)  NOT NULL,
        DefaultSeverity VARCHAR(10)    NOT NULL CONSTRAINT DF_AAT_Severity  DEFAULT 'INFO',
        BadgeColor      VARCHAR(20)    NOT NULL CONSTRAINT DF_AAT_Color     DEFAULT '#64748b',
        SortOrder       INT            NOT NULL CONSTRAINT DF_AAT_Sort      DEFAULT 0,
        IsActive        BIT            NOT NULL CONSTRAINT DF_AAT_Active    DEFAULT 1,
        CreatedAt       DATETIME2      NOT NULL CONSTRAINT DF_AAT_Created   DEFAULT GETDATE(),
        UpdatedAt       DATETIME2      NOT NULL CONSTRAINT DF_AAT_Updated   DEFAULT GETDATE(),

        CONSTRAINT UQ_AuditActionType UNIQUE (TenantID, ActionTypeCode)
    )
    PRINT 'tblAuditActionTypes — נוצרה'
END
ELSE
    PRINT 'tblAuditActionTypes — כבר קיימת, דילוג'
GO

-- Seed — ערכי פלטפורמה (TenantID = NULL)
IF NOT EXISTS (SELECT 1 FROM dbo.tblAuditActionTypes WHERE TenantID IS NULL)
BEGIN
    INSERT INTO dbo.tblAuditActionTypes (TenantID, ActionTypeCode, ActionTypeName, DefaultSeverity, BadgeColor, SortOrder)
    VALUES
      (NULL, 'LOGIN',                  N'כניסה',                   'INFO',     '#10b981',  1),
      (NULL, 'LOGIN_FAILED',           N'כניסה כושלת',             'WARN',     '#f59e0b',  2),
      (NULL, 'LOGIN_FAILED_CRITICAL',  N'כניסות כושלות חוזרות',   'CRITICAL', '#ef4444',  3),
      (NULL, 'LOGOUT',                 N'יציאה',                   'INFO',     '#64748b',  4),
      (NULL, 'CREATE',                 N'יצירה',                   'INFO',     '#3b82f6',  5),
      (NULL, 'UPDATE',                 N'עדכון',                   'INFO',     '#f97316',  6),
      (NULL, 'DELETE',                 N'מחיקה/השבתה',             'WARN',     '#ef4444',  7),
      (NULL, 'TOGGLE',                 N'שינוי סטטוס',             'INFO',     '#8b5cf6',  8),
      (NULL, 'EXPORT',                 N'ייצוא נתונים',            'WARN',     '#7c3aed',  9),
      (NULL, 'VIEW',                   N'צפייה',                   'INFO',     '#94a3b8', 10),
      (NULL, 'RESET',                  N'איפוס',                   'WARN',     '#f59e0b', 11),
      (NULL, 'SETTINGS_CHANGE',        N'שינוי הגדרות',            'WARN',     '#0891b2', 12),
      (NULL, 'PERMISSION_CHANGE',      N'שינוי הרשאות',            'CRITICAL', '#dc2626', 13)
    PRINT 'tblAuditActionTypes — seed הוכנס'
END
ELSE
    PRINT 'tblAuditActionTypes — seed כבר קיים, דילוג'
GO

-- ============================================================
-- tblAuditEntityTypes
-- ============================================================
IF NOT EXISTS (SELECT 1 FROM sys.tables WHERE object_id = OBJECT_ID(N'dbo.tblAuditEntityTypes'))
BEGIN
    CREATE TABLE dbo.tblAuditEntityTypes (
        EntityTypeID    INT            NOT NULL IDENTITY(1,1) CONSTRAINT PK_tblAuditEntityTypes PRIMARY KEY,
        TenantID        INT            NULL,                   -- NULL = פלטפורמה / N = tenant
        EntityTypeCode  VARCHAR(50)    NOT NULL,
        EntityTypeName  NVARCHAR(100)  NOT NULL,
        ModuleName      NVARCHAR(100)  NULL,
        SortOrder       INT            NOT NULL CONSTRAINT DF_AET_Sort    DEFAULT 0,
        IsActive        BIT            NOT NULL CONSTRAINT DF_AET_Active  DEFAULT 1,
        CreatedAt       DATETIME2      NOT NULL CONSTRAINT DF_AET_Created DEFAULT GETDATE(),
        UpdatedAt       DATETIME2      NOT NULL CONSTRAINT DF_AET_Updated DEFAULT GETDATE(),

        CONSTRAINT UQ_AuditEntityType UNIQUE (TenantID, EntityTypeCode)
    )
    PRINT 'tblAuditEntityTypes — נוצרה'
END
ELSE
    PRINT 'tblAuditEntityTypes — כבר קיימת, דילוג'
GO

-- Seed — ערכי פלטפורמה (TenantID = NULL)
IF NOT EXISTS (SELECT 1 FROM dbo.tblAuditEntityTypes WHERE TenantID IS NULL)
BEGIN
    INSERT INTO dbo.tblAuditEntityTypes (TenantID, EntityTypeCode, EntityTypeName, ModuleName, SortOrder)
    VALUES
      (NULL, 'AUTH',         N'אימות',          N'Login',          1),
      (NULL, 'TENANT',       N'ארגון',           N'Organizations',  2),
      (NULL, 'USER',         N'משתמש',           N'Users',          3),
      (NULL, 'PRODUCT',      N'מוצר',            N'Products',       4),
      (NULL, 'PACKAGE',      N'חבילה',           N'Packages',       5),
      (NULL, 'COUNTER',      N'מונה',            N'Settings',       6),
      (NULL, 'SETTINGS',     N'הגדרות',          N'Settings',       7),
      (NULL, 'CUSTOMER',     N'לקוח קצה',        N'Customers',      8),
      (NULL, 'SUBSCRIPTION', N'מנוי',            N'Subscriptions',  9),
      (NULL, 'CONTRACT',     N'חוזה שירות',      N'Contracts',     10),
      (NULL, 'INVOICE',      N'חשבונית',         N'Invoices',      11),
      (NULL, 'LEAD',         N'ליד',             N'Leads',         12),
      (NULL, 'DIGITAL_CARD', N'כרטיס ביקור',    N'Digital Cards', 13)
    PRINT 'tblAuditEntityTypes — seed הוכנס'
END
ELSE
    PRINT 'tblAuditEntityTypes — seed כבר קיים, דילוג'
GO

-- ============================================================
-- tblAuditLog — append-only
-- ============================================================
IF NOT EXISTS (SELECT 1 FROM sys.tables WHERE object_id = OBJECT_ID(N'dbo.tblAuditLog'))
BEGIN
    CREATE TABLE dbo.tblAuditLog (
        AuditID     BIGINT         NOT NULL IDENTITY(1,1) CONSTRAINT PK_tblAuditLog PRIMARY KEY,
        TenantID    INT            NOT NULL,
        UserID      INT            NULL,
        UserName    NVARCHAR(100)  NOT NULL,
        TenantName  NVARCHAR(200)  NULL,
        ActionType  VARCHAR(50)    NOT NULL,
        EntityType  VARCHAR(50)    NOT NULL,
        EntityID    INT            NULL,
        EntityName  NVARCHAR(200)  NULL,
        CustomerID  INT            NULL,
        OldValue    NVARCHAR(MAX)  NULL,
        NewValue    NVARCHAR(MAX)  NULL,
        IPAddress   VARCHAR(45)    NOT NULL,
        UserAgent   NVARCHAR(500)  NULL,
        SessionID   NVARCHAR(100)  NULL,
        Severity    VARCHAR(10)    NOT NULL CONSTRAINT DF_AuditLog_Severity  DEFAULT 'INFO',
        CreatedAt   DATETIME2      NOT NULL CONSTRAINT DF_AuditLog_CreatedAt DEFAULT GETDATE()
    )
    CREATE INDEX IX_AuditLog_Tenant_Date ON dbo.tblAuditLog (TenantID, CreatedAt DESC)
    CREATE INDEX IX_AuditLog_User        ON dbo.tblAuditLog (TenantID, UserID, CreatedAt DESC)
    CREATE INDEX IX_AuditLog_Entity      ON dbo.tblAuditLog (EntityType, EntityID)
    CREATE INDEX IX_AuditLog_Customer    ON dbo.tblAuditLog (CustomerID, CreatedAt DESC)
    CREATE INDEX IX_AuditLog_Severity    ON dbo.tblAuditLog (TenantID, Severity, CreatedAt DESC)
    PRINT 'tblAuditLog — נוצרה'
END
ELSE
    PRINT 'tblAuditLog — כבר קיימת, דילוג'
GO

-- ============================================================
-- tblAuditConfig — הגדרות per-tenant
-- ============================================================
IF NOT EXISTS (SELECT 1 FROM sys.tables WHERE object_id = OBJECT_ID(N'dbo.tblAuditConfig'))
BEGIN
    CREATE TABLE dbo.tblAuditConfig (
        ConfigID       INT       NOT NULL IDENTITY(1,1) CONSTRAINT PK_tblAuditConfig PRIMARY KEY,
        TenantID       INT       NOT NULL CONSTRAINT UQ_AuditConfig_Tenant UNIQUE,
        RetentionDays  INT       NOT NULL CONSTRAINT DF_AuditCfg_Retention  DEFAULT 365,
        CaptureView    BIT       NOT NULL CONSTRAINT DF_AuditCfg_View       DEFAULT 0,
        CaptureExport  BIT       NOT NULL CONSTRAINT DF_AuditCfg_Export     DEFAULT 1,
        AlertThreshold INT       NOT NULL CONSTRAINT DF_AuditCfg_Alert      DEFAULT 5,
        IsActive       BIT       NOT NULL CONSTRAINT DF_AuditCfg_Active     DEFAULT 1,
        CreatedAt      DATETIME2 NOT NULL CONSTRAINT DF_AuditCfg_Created    DEFAULT GETDATE(),
        UpdatedAt      DATETIME2 NOT NULL CONSTRAINT DF_AuditCfg_Updated    DEFAULT GETDATE()
    )
    -- seed config לכל tenant קיים
    INSERT INTO dbo.tblAuditConfig (TenantID)
    SELECT TenantID FROM dbo.tblTenants
    WHERE TenantID NOT IN (SELECT TenantID FROM dbo.tblAuditConfig)
    PRINT 'tblAuditConfig — נוצרה + seed'
END
ELSE
    PRINT 'tblAuditConfig — כבר קיימת, דילוג'
GO

-- ============================================================
-- sp_AuditLog_Insert
-- ============================================================
CREATE OR ALTER PROCEDURE dbo.sp_AuditLog_Insert
    @TenantID    INT,
    @UserID      INT            = NULL,
    @UserName    NVARCHAR(100),
    @TenantName  NVARCHAR(200)  = NULL,
    @ActionType  VARCHAR(50),
    @EntityType  VARCHAR(50),
    @EntityID    INT            = NULL,
    @EntityName  NVARCHAR(200)  = NULL,
    @CustomerID  INT            = NULL,
    @OldValue    NVARCHAR(MAX)  = NULL,
    @NewValue    NVARCHAR(MAX)  = NULL,
    @IPAddress   VARCHAR(45),
    @UserAgent   NVARCHAR(500)  = NULL,
    @SessionID   NVARCHAR(100)  = NULL,
    @Severity    VARCHAR(10)    = 'INFO',
    @ResultCode  INT            OUTPUT,
    @ResultMessage NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        -- Severity אוטומטי אם לא נשלח
        IF @Severity = 'INFO'
        BEGIN
            SELECT TOP 1 @Severity = DefaultSeverity
            FROM dbo.tblAuditActionTypes
            WHERE ActionTypeCode = @ActionType
              AND (TenantID IS NULL OR TenantID = @TenantID)
            ORDER BY CASE WHEN TenantID IS NULL THEN 0 ELSE 1 END
        END

        INSERT INTO dbo.tblAuditLog
            (TenantID, UserID, UserName, TenantName, ActionType, EntityType,
             EntityID, EntityName, CustomerID, OldValue, NewValue,
             IPAddress, UserAgent, SessionID, Severity)
        VALUES
            (@TenantID, @UserID, @UserName, @TenantName, @ActionType, @EntityType,
             @EntityID, @EntityName, @CustomerID, @OldValue, @NewValue,
             @IPAddress, @UserAgent, @SessionID, @Severity)

        SET @ResultCode    = 0
        SET @ResultMessage = 'OK'
    END TRY
    BEGIN CATCH
        SET @ResultCode    = ERROR_NUMBER()
        SET @ResultMessage = ERROR_MESSAGE()
    END CATCH
END
GO
PRINT 'sp_AuditLog_Insert — נוצר'
GO

-- ============================================================
-- sp_AuditLog_List
-- ============================================================
CREATE OR ALTER PROCEDURE dbo.sp_AuditLog_List
    @TenantID      INT            = NULL,   -- NULL = Super Admin (הכל)
    @DateFrom      DATETIME2      = NULL,
    @DateTo        DATETIME2      = NULL,
    @ActionType    VARCHAR(50)    = NULL,
    @EntityType    VARCHAR(50)    = NULL,
    @Severity      VARCHAR(10)    = NULL,
    @CustomerID    INT            = NULL,
    @UserID        INT            = NULL,
    @SearchTerm    NVARCHAR(200)  = NULL,
    @PageNum       INT            = 1,
    @PageSize      INT            = 25,
    @TotalCount    INT            OUTPUT,
    @ResultCode    INT            OUTPUT,
    @ResultMessage NVARCHAR(200)  OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        IF @PageNum  < 1  SET @PageNum  = 1
        IF @PageSize < 1  SET @PageSize = 25
        IF @PageSize > 200 SET @PageSize = 200

        DECLARE @DateToFull DATETIME2 = CASE WHEN @DateTo IS NULL THEN NULL
                                             ELSE DATEADD(DAY, 1, @DateTo) END

        SELECT @TotalCount = COUNT(*)
        FROM dbo.tblAuditLog
        WHERE (@TenantID   IS NULL OR TenantID   = @TenantID)
          AND (@DateFrom   IS NULL OR CreatedAt  >= @DateFrom)
          AND (@DateToFull IS NULL OR CreatedAt  <  @DateToFull)
          AND (@ActionType IS NULL OR ActionType  = @ActionType)
          AND (@EntityType IS NULL OR EntityType  = @EntityType)
          AND (@Severity   IS NULL OR Severity    = @Severity)
          AND (@CustomerID IS NULL OR CustomerID  = @CustomerID)
          AND (@UserID     IS NULL OR UserID      = @UserID)
          AND (@SearchTerm IS NULL OR UserName   LIKE N'%' + @SearchTerm + N'%'
                                   OR EntityName LIKE N'%' + @SearchTerm + N'%')

        SELECT
            AuditID, TenantID, TenantName, UserID, UserName,
            ActionType, EntityType, EntityID, EntityName,
            CustomerID, IPAddress, Severity, CreatedAt
        FROM dbo.tblAuditLog
        WHERE (@TenantID   IS NULL OR TenantID   = @TenantID)
          AND (@DateFrom   IS NULL OR CreatedAt  >= @DateFrom)
          AND (@DateToFull IS NULL OR CreatedAt  <  @DateToFull)
          AND (@ActionType IS NULL OR ActionType  = @ActionType)
          AND (@EntityType IS NULL OR EntityType  = @EntityType)
          AND (@Severity   IS NULL OR Severity    = @Severity)
          AND (@CustomerID IS NULL OR CustomerID  = @CustomerID)
          AND (@UserID     IS NULL OR UserID      = @UserID)
          AND (@SearchTerm IS NULL OR UserName   LIKE N'%' + @SearchTerm + N'%'
                                   OR EntityName LIKE N'%' + @SearchTerm + N'%')
        ORDER BY CreatedAt DESC
        OFFSET  (@PageNum - 1) * @PageSize ROWS
        FETCH NEXT @PageSize ROWS ONLY

        SET @ResultCode    = 0
        SET @ResultMessage = 'OK'
    END TRY
    BEGIN CATCH
        SET @ResultCode    = ERROR_NUMBER()
        SET @ResultMessage = ERROR_MESSAGE()
        SET @TotalCount    = 0
    END CATCH
END
GO
PRINT 'sp_AuditLog_List — נוצר'
GO

-- ============================================================
-- sp_AuditLog_GetByID
-- ============================================================
CREATE OR ALTER PROCEDURE dbo.sp_AuditLog_GetByID
    @AuditID       BIGINT,
    @TenantID      INT,           -- אבטחה: tenant=1 = הכל, אחר = רק שלו
    @ResultCode    INT            OUTPUT,
    @ResultMessage NVARCHAR(200)  OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        SELECT *
        FROM dbo.tblAuditLog
        WHERE AuditID = @AuditID
          AND (@TenantID = 1 OR TenantID = @TenantID)

        SET @ResultCode    = 0
        SET @ResultMessage = 'OK'
    END TRY
    BEGIN CATCH
        SET @ResultCode    = ERROR_NUMBER()
        SET @ResultMessage = ERROR_MESSAGE()
    END CATCH
END
GO
PRINT 'sp_AuditLog_GetByID — נוצר'
GO

-- ============================================================
-- sp_AuditLog_Summary
-- ============================================================
CREATE OR ALTER PROCEDURE dbo.sp_AuditLog_Summary
    @TenantID      INT,
    @DaysBack      INT            = 30,
    @ResultCode    INT            OUTPUT,
    @ResultMessage NVARCHAR(200)  OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        DECLARE @Since DATETIME2 = DATEADD(DAY, -@DaysBack, GETDATE())

        -- 1. סיכום לפי ActionType + Severity
        SELECT ActionType, Severity, COUNT(*) AS cnt
        FROM dbo.tblAuditLog
        WHERE (@TenantID = 1 OR TenantID = @TenantID)
          AND CreatedAt >= @Since
        GROUP BY ActionType, Severity
        ORDER BY cnt DESC

        -- 2. 5 משתמשים הכי פעילים
        SELECT TOP 5
            UserID, UserName, COUNT(*) AS ActionCount
        FROM dbo.tblAuditLog
        WHERE (@TenantID = 1 OR TenantID = @TenantID)
          AND CreatedAt >= @Since
          AND UserID IS NOT NULL
        GROUP BY UserID, UserName
        ORDER BY ActionCount DESC

        -- 3. פעילות יומית 7 ימים אחרונים
        SELECT
            CAST(CreatedAt AS DATE) AS ActionDate,
            COUNT(*) AS ActionCount
        FROM dbo.tblAuditLog
        WHERE (@TenantID = 1 OR TenantID = @TenantID)
          AND CreatedAt >= DATEADD(DAY, -7, GETDATE())
        GROUP BY CAST(CreatedAt AS DATE)
        ORDER BY ActionDate

        SET @ResultCode    = 0
        SET @ResultMessage = 'OK'
    END TRY
    BEGIN CATCH
        SET @ResultCode    = ERROR_NUMBER()
        SET @ResultMessage = ERROR_MESSAGE()
    END CATCH
END
GO
PRINT 'sp_AuditLog_Summary — נוצר'
GO

-- ============================================================
-- sp_AuditLog_SecurityAlerts
-- ============================================================
CREATE OR ALTER PROCEDURE dbo.sp_AuditLog_SecurityAlerts
    @TenantID      INT,
    @HoursBack     INT            = 24,
    @ResultCode    INT            OUTPUT,
    @ResultMessage NVARCHAR(200)  OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        DECLARE @Since    DATETIME2 = DATEADD(HOUR, -@HoursBack, GETDATE())
        DECLARE @Threshold INT

        SELECT @Threshold = ISNULL(AlertThreshold, 5)
        FROM dbo.tblAuditConfig
        WHERE TenantID = @TenantID

        IF @Threshold IS NULL SET @Threshold = 5

        -- 1. IPs עם כישלונות כניסה חוזרים
        SELECT IPAddress, COUNT(*) AS FailCount, MAX(CreatedAt) AS LastAttempt
        FROM dbo.tblAuditLog
        WHERE (@TenantID = 1 OR TenantID = @TenantID)
          AND ActionType IN ('LOGIN_FAILED', 'LOGIN_FAILED_CRITICAL')
          AND CreatedAt >= @Since
        GROUP BY IPAddress
        HAVING COUNT(*) >= @Threshold
        ORDER BY FailCount DESC

        -- 2. ייצואים חריגים (3+ בחלון הזמן)
        SELECT UserID, UserName, EntityType, COUNT(*) AS ExportCount
        FROM dbo.tblAuditLog
        WHERE (@TenantID = 1 OR TenantID = @TenantID)
          AND ActionType = 'EXPORT'
          AND CreatedAt >= @Since
        GROUP BY UserID, UserName, EntityType
        HAVING COUNT(*) >= 3
        ORDER BY ExportCount DESC

        -- 3. שינויי הרשאות
        SELECT AuditID, UserName, EntityName, OldValue, NewValue, CreatedAt
        FROM dbo.tblAuditLog
        WHERE (@TenantID = 1 OR TenantID = @TenantID)
          AND ActionType = 'PERMISSION_CHANGE'
          AND CreatedAt >= @Since
        ORDER BY CreatedAt DESC

        SET @ResultCode    = 0
        SET @ResultMessage = 'OK'
    END TRY
    BEGIN CATCH
        SET @ResultCode    = ERROR_NUMBER()
        SET @ResultMessage = ERROR_MESSAGE()
    END CATCH
END
GO
PRINT 'sp_AuditLog_SecurityAlerts — נוצר'
GO

-- ============================================================
-- sp_AuditActionTypes_List
-- ============================================================
CREATE OR ALTER PROCEDURE dbo.sp_AuditActionTypes_List
    @TenantID      INT,
    @ResultCode    INT            OUTPUT,
    @ResultMessage NVARCHAR(200)  OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        SELECT
            ActionTypeID, TenantID, ActionTypeCode, ActionTypeName,
            DefaultSeverity, BadgeColor, SortOrder, IsActive,
            CASE WHEN TenantID IS NULL THEN 1 ELSE 0 END AS IsReadOnly
        FROM dbo.tblAuditActionTypes
        WHERE (TenantID IS NULL OR TenantID = @TenantID)
          AND IsActive = 1
        ORDER BY
            CASE WHEN TenantID IS NULL THEN 0 ELSE 1 END,
            SortOrder

        SET @ResultCode    = 0
        SET @ResultMessage = 'OK'
    END TRY
    BEGIN CATCH
        SET @ResultCode    = ERROR_NUMBER()
        SET @ResultMessage = ERROR_MESSAGE()
    END CATCH
END
GO
PRINT 'sp_AuditActionTypes_List — נוצר'
GO

-- ============================================================
-- sp_AuditActionTypes_Save  (INSERT / UPDATE — tenant-only)
-- ============================================================
CREATE OR ALTER PROCEDURE dbo.sp_AuditActionTypes_Save
    @ActionTypeID   INT            = 0,   -- 0 = חדש
    @TenantID       INT,                  -- חובה — לא ניתן לשמור platform types
    @ActionTypeCode VARCHAR(50),
    @ActionTypeName NVARCHAR(100),
    @DefaultSeverity VARCHAR(10)   = 'INFO',
    @BadgeColor     VARCHAR(20)    = '#64748b',
    @SortOrder      INT            = 0,
    @IsActive       BIT            = 1,
    @ResultCode     INT            OUTPUT,
    @ResultMessage  NVARCHAR(200)  OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        -- אבטחה: לא מאפשר שינוי ערכי פלטפורמה
        IF @TenantID IS NULL OR @TenantID = 0
        BEGIN
            SET @ResultCode = -1
            SET @ResultMessage = N'לא ניתן לשנות ערכי פלטפורמה'
            RETURN
        END

        -- בדיקת ייחודיות קוד
        IF EXISTS (
            SELECT 1 FROM dbo.tblAuditActionTypes
            WHERE TenantID = @TenantID
              AND ActionTypeCode = @ActionTypeCode
              AND ActionTypeID <> ISNULL(@ActionTypeID, 0)
        )
        BEGIN
            SET @ResultCode = -2
            SET @ResultMessage = N'קוד פעולה כבר קיים עבור tenant זה'
            RETURN
        END

        IF ISNULL(@ActionTypeID, 0) = 0
        BEGIN
            INSERT INTO dbo.tblAuditActionTypes
                (TenantID, ActionTypeCode, ActionTypeName, DefaultSeverity, BadgeColor, SortOrder, IsActive)
            VALUES
                (@TenantID, @ActionTypeCode, @ActionTypeName, @DefaultSeverity, @BadgeColor, @SortOrder, @IsActive)
            SET @ActionTypeID = SCOPE_IDENTITY()
        END
        ELSE
        BEGIN
            UPDATE dbo.tblAuditActionTypes
            SET ActionTypeCode  = @ActionTypeCode,
                ActionTypeName  = @ActionTypeName,
                DefaultSeverity = @DefaultSeverity,
                BadgeColor      = @BadgeColor,
                SortOrder       = @SortOrder,
                IsActive        = @IsActive,
                UpdatedAt       = GETDATE()
            WHERE ActionTypeID = @ActionTypeID
              AND TenantID = @TenantID  -- אבטחה נוספת
        END

        SET @ResultCode    = 0
        SET @ResultMessage = CAST(@ActionTypeID AS NVARCHAR(20))
    END TRY
    BEGIN CATCH
        SET @ResultCode    = ERROR_NUMBER()
        SET @ResultMessage = ERROR_MESSAGE()
    END CATCH
END
GO
PRINT 'sp_AuditActionTypes_Save — נוצר'
GO

-- ============================================================
-- sp_AuditEntityTypes_List
-- ============================================================
CREATE OR ALTER PROCEDURE dbo.sp_AuditEntityTypes_List
    @TenantID      INT,
    @ResultCode    INT            OUTPUT,
    @ResultMessage NVARCHAR(200)  OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        SELECT
            EntityTypeID, TenantID, EntityTypeCode, EntityTypeName,
            ModuleName, SortOrder, IsActive,
            CASE WHEN TenantID IS NULL THEN 1 ELSE 0 END AS IsReadOnly
        FROM dbo.tblAuditEntityTypes
        WHERE (TenantID IS NULL OR TenantID = @TenantID)
          AND IsActive = 1
        ORDER BY
            CASE WHEN TenantID IS NULL THEN 0 ELSE 1 END,
            SortOrder

        SET @ResultCode    = 0
        SET @ResultMessage = 'OK'
    END TRY
    BEGIN CATCH
        SET @ResultCode    = ERROR_NUMBER()
        SET @ResultMessage = ERROR_MESSAGE()
    END CATCH
END
GO
PRINT 'sp_AuditEntityTypes_List — נוצר'
GO

-- ============================================================
-- sp_AuditEntityTypes_Save  (INSERT / UPDATE — tenant-only)
-- ============================================================
CREATE OR ALTER PROCEDURE dbo.sp_AuditEntityTypes_Save
    @EntityTypeID   INT            = 0,
    @TenantID       INT,
    @EntityTypeCode VARCHAR(50),
    @EntityTypeName NVARCHAR(100),
    @ModuleName     NVARCHAR(100)  = NULL,
    @SortOrder      INT            = 0,
    @IsActive       BIT            = 1,
    @ResultCode     INT            OUTPUT,
    @ResultMessage  NVARCHAR(200)  OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        IF @TenantID IS NULL OR @TenantID = 0
        BEGIN
            SET @ResultCode = -1
            SET @ResultMessage = N'לא ניתן לשנות ערכי פלטפורמה'
            RETURN
        END

        IF EXISTS (
            SELECT 1 FROM dbo.tblAuditEntityTypes
            WHERE TenantID = @TenantID
              AND EntityTypeCode = @EntityTypeCode
              AND EntityTypeID <> ISNULL(@EntityTypeID, 0)
        )
        BEGIN
            SET @ResultCode = -2
            SET @ResultMessage = N'קוד יישות כבר קיים עבור tenant זה'
            RETURN
        END

        IF ISNULL(@EntityTypeID, 0) = 0
        BEGIN
            INSERT INTO dbo.tblAuditEntityTypes
                (TenantID, EntityTypeCode, EntityTypeName, ModuleName, SortOrder, IsActive)
            VALUES
                (@TenantID, @EntityTypeCode, @EntityTypeName, @ModuleName, @SortOrder, @IsActive)
            SET @EntityTypeID = SCOPE_IDENTITY()
        END
        ELSE
        BEGIN
            UPDATE dbo.tblAuditEntityTypes
            SET EntityTypeCode  = @EntityTypeCode,
                EntityTypeName  = @EntityTypeName,
                ModuleName      = @ModuleName,
                SortOrder       = @SortOrder,
                IsActive        = @IsActive,
                UpdatedAt       = GETDATE()
            WHERE EntityTypeID = @EntityTypeID
              AND TenantID = @TenantID
        END

        SET @ResultCode    = 0
        SET @ResultMessage = CAST(@EntityTypeID AS NVARCHAR(20))
    END TRY
    BEGIN CATCH
        SET @ResultCode    = ERROR_NUMBER()
        SET @ResultMessage = ERROR_MESSAGE()
    END CATCH
END
GO
PRINT 'sp_AuditEntityTypes_Save — נוצר'
GO

PRINT '=========================================='
PRINT 'Audit Log — DB setup הושלם בהצלחה'
PRINT '=========================================='
