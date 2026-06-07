-- ============================================================
-- tblCounters — מערכת מונים רצים ושוטפים
-- ============================================================

IF NOT EXISTS (
    SELECT 1 FROM sys.tables WHERE object_id = OBJECT_ID(N'dbo.tblCounters')
)
BEGIN
    CREATE TABLE dbo.tblCounters (
        CounterID     BIGINT             NOT NULL  IDENTITY(1,1)  CONSTRAINT PK_tblCounters PRIMARY KEY,
        TenantID      INT                NOT NULL  DEFAULT 0,  -- 0 = פלטפורמה
        CustomerID    INT                NOT NULL  DEFAULT 0,  -- 0 = לא ברמת לקוח
        CounterLevel  VARCHAR(10)        NOT NULL  CONSTRAINT DF_Counters_Level        DEFAULT 'TENANT',
        CounterKey    VARCHAR(30)        NOT NULL,
        CounterName   NVARCHAR(100)      NOT NULL,
        Prefix        VARCHAR(20)        NOT NULL,
        DateFormat    VARCHAR(10)        NOT NULL  CONSTRAINT DF_Counters_DateFormat   DEFAULT 'NONE',
        TextPrefix    NVARCHAR(30)       NOT NULL  CONSTRAINT DF_Counters_TextPrefix    DEFAULT '',
        StepValue     INT                NOT NULL  CONSTRAINT DF_Counters_StepValue    DEFAULT 1,
        StartValue    INT                NOT NULL  CONSTRAINT DF_Counters_StartValue   DEFAULT 1,
        MaxValue      INT                NOT NULL  CONSTRAINT DF_Counters_MaxValue     DEFAULT 999999,
        OutputType    VARCHAR(10)        NOT NULL  CONSTRAINT DF_Counters_OutputType   DEFAULT 'NUMERIC',
        RunningValue  INT                NOT NULL  CONSTRAINT DF_Counters_RunningValue DEFAULT 0,
        CurrentValue  INT                NOT NULL  CONSTRAINT DF_Counters_CurrentValue DEFAULT 0,
        IsLocked      BIT                NOT NULL  CONSTRAINT DF_Counters_IsLocked     DEFAULT 0,
        ResetPeriod   VARCHAR(10)        NOT NULL  CONSTRAINT DF_Counters_ResetPeriod  DEFAULT 'NEVER',
        LastResetDate DATE               NOT NULL  CONSTRAINT DF_Counters_LastReset    DEFAULT '1900-01-01',
        CreatedAt     DATETIME2          NOT NULL  CONSTRAINT DF_Counters_CreatedAt    DEFAULT GETDATE(),
        UpdatedAt     DATETIME2          NOT NULL  CONSTRAINT DF_Counters_UpdatedAt    DEFAULT GETDATE(),

        CONSTRAINT UQ_tblCounters_Key     UNIQUE (TenantID, CustomerID, CounterLevel, CounterKey),
        CONSTRAINT UQ_tblCounters_Tenant  UNIQUE (TenantID, CustomerID, CounterID),
        CONSTRAINT CK_tblCounters_Level       CHECK (CounterLevel IN ('PLATFORM','TENANT','CUSTOMER')),
        CONSTRAINT CK_tblCounters_DateFormat  CHECK (DateFormat    IN ('NONE','YEAR','YEAR_MONTH','TEXT')),
        CONSTRAINT CK_tblCounters_OutputType  CHECK (OutputType    IN ('NUMERIC','STRING')),
        CONSTRAINT CK_tblCounters_ResetPeriod CHECK (ResetPeriod   IN ('NEVER','ANNUAL','MONTHLY')),
        CONSTRAINT CK_tblCounters_StepValue   CHECK (StepValue  >= 1),
        CONSTRAINT CK_tblCounters_MaxValue    CHECK (MaxValue   >= StartValue),
        CONSTRAINT CK_tblCounters_Running     CHECK (RunningValue >= 0),
        CONSTRAINT CK_tblCounters_Current     CHECK (CurrentValue >= 0)
    )

    PRINT 'tblCounters — נוצרה בהצלחה'
END
ELSE
    PRINT 'tblCounters — כבר קיימת, דילוג'
GO

-- הוספת IsLocked לטבלה קיימת (migration)
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID(N'dbo.tblCounters') AND name = 'IsLocked')
    ALTER TABLE dbo.tblCounters ADD IsLocked BIT NOT NULL CONSTRAINT DF_Counters_IsLocked DEFAULT 0
GO

-- הערה: יצירת מונים נעשית בכל מודול בנפרד בעת בנייתו.
-- אין seed גלובלי — כל רכיב מוסיף את המונה שלו.

-- ============================================================
-- sp_CounterCreate — יצירת מונה חדש (ידנית ממסך הגדרות)
-- ============================================================
CREATE OR ALTER PROCEDURE dbo.sp_CounterCreate
    @TenantID       INT,
    @CustomerID     INT           = 0,
    @CounterLevel   VARCHAR(10)   = 'TENANT',
    @CounterKey     VARCHAR(30),
    @CounterName    NVARCHAR(100),
    @Prefix         VARCHAR(20),
    @DateFormat     VARCHAR(10)   = 'NONE',
    @TextPrefix     NVARCHAR(30)  = '',
    @StepValue      INT           = 1,
    @StartValue     INT           = 1,
    @MaxValue       INT           = 999999,
    @OutputType     VARCHAR(10)   = 'NUMERIC',
    @ResetPeriod    VARCHAR(10)   = 'NEVER',
    @ResultCode     INT           OUTPUT,
    @ResultMessage  NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON
    BEGIN TRY
        IF EXISTS (
            SELECT 1 FROM dbo.tblCounters
            WHERE TenantID = @TenantID AND CustomerID = @CustomerID
              AND CounterLevel = @CounterLevel AND CounterKey = @CounterKey
        )
        BEGIN
            SET @ResultCode    = 1
            SET @ResultMessage = N'מונה עם מפתח זה כבר קיים: ' + @CounterKey
            RETURN
        END

        INSERT INTO dbo.tblCounters
            (TenantID, CustomerID, CounterLevel, CounterKey, CounterName,
             Prefix, DateFormat, TextPrefix, StepValue, StartValue, MaxValue,
             OutputType, RunningValue, CurrentValue, ResetPeriod)
        VALUES
            (@TenantID, @CustomerID, @CounterLevel, @CounterKey, @CounterName,
             @Prefix, @DateFormat, @TextPrefix, @StepValue, @StartValue, @MaxValue,
             @OutputType, 0, 0, @ResetPeriod)

        SET @ResultCode    = 0
        SET @ResultMessage = N'המונה נוצר בהצלחה'
    END TRY
    BEGIN CATCH
        SET @ResultCode    = 99
        SET @ResultMessage = ERROR_MESSAGE()
    END CATCH
END
GO

-- ============================================================
-- sp_CounterNext — הקצאת מספר שוטף זמני ('-0001')
-- ============================================================
CREATE OR ALTER PROCEDURE dbo.sp_CounterNext
    @TenantID         INT,
    @CustomerID       INT           = 0,
    @CounterLevel     VARCHAR(10)   = 'TENANT',
    @CounterKey       VARCHAR(30),
    @CurrentValue     INT           OUTPUT,
    @CurrentFormatted NVARCHAR(50)  OUTPUT,  -- '-0001' (זמני עד אישור)
    @ResultCode       INT           OUTPUT,
    @ResultMessage    NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON
    BEGIN TRY
        IF NOT EXISTS (
            SELECT 1 FROM dbo.tblCounters
            WHERE TenantID = @TenantID AND CustomerID = @CustomerID
              AND CounterLevel = @CounterLevel AND CounterKey = @CounterKey
        )
        BEGIN
            SET @ResultCode    = 1
            SET @ResultMessage = N'מונה לא נמצא: ' + @CounterKey
            RETURN
        END

        -- איפוס שוטף לפי תקופה אם נדרש
        UPDATE dbo.tblCounters
        SET CurrentValue  = StartValue - StepValue,
            LastResetDate = CAST(GETDATE() AS DATE),
            UpdatedAt     = GETDATE()
        WHERE TenantID = @TenantID AND CustomerID = @CustomerID
          AND CounterLevel = @CounterLevel AND CounterKey = @CounterKey
          AND (
              (ResetPeriod = 'ANNUAL'  AND (LastResetDate IS NULL OR YEAR(LastResetDate) < YEAR(GETDATE())))
           OR (ResetPeriod = 'MONTHLY' AND (LastResetDate IS NULL OR
                  CAST(YEAR(LastResetDate) AS VARCHAR) + RIGHT('0'+CAST(MONTH(LastResetDate) AS VARCHAR),2)
                < CAST(YEAR(GETDATE())    AS VARCHAR) + RIGHT('0'+CAST(MONTH(GETDATE())    AS VARCHAR),2)))
          )

        -- בדיקת גבול עליון
        IF EXISTS (
            SELECT 1 FROM dbo.tblCounters
            WHERE TenantID = @TenantID AND CustomerID = @CustomerID
              AND CounterLevel = @CounterLevel AND CounterKey = @CounterKey
              AND (CurrentValue + StepValue) > MaxValue
        )
        BEGIN
            SET @ResultCode    = 2
            SET @ResultMessage = N'הגעת לגבול המונה השוטף — יש לאפס או להגדיל את MaxValue'
            RETURN
        END

        -- הגדל
        UPDATE dbo.tblCounters
        SET CurrentValue = CurrentValue + StepValue,
            UpdatedAt    = GETDATE()
        WHERE TenantID = @TenantID AND CustomerID = @CustomerID
          AND CounterLevel = @CounterLevel AND CounterKey = @CounterKey

        SELECT
            @CurrentValue     = CurrentValue,
            @CurrentFormatted = '-' + RIGHT('0000' + CAST(CurrentValue AS VARCHAR), 4)
        FROM dbo.tblCounters
        WHERE TenantID = @TenantID AND CustomerID = @CustomerID
          AND CounterLevel = @CounterLevel AND CounterKey = @CounterKey

        SET @ResultCode    = 0
        SET @ResultMessage = N'מספר שוטף הוקצה בהצלחה'
    END TRY
    BEGIN CATCH
        SET @ResultCode    = 99
        SET @ResultMessage = ERROR_MESSAGE()
    END CATCH
END
GO

-- ============================================================
-- sp_CounterConfirm — אישור מסמך: הקצאת מספר רץ קבוע
-- ============================================================
CREATE OR ALTER PROCEDURE dbo.sp_CounterConfirm
    @TenantID         INT,
    @CustomerID       INT           = 0,
    @CounterLevel     VARCHAR(10)   = 'TENANT',
    @CounterKey       VARCHAR(30),
    @RunningValue     INT           OUTPUT,
    @RunningFormatted NVARCHAR(50)  OUTPUT,  -- 'INV-2026-000042' (קבוע לנצח)
    @ResultCode       INT           OUTPUT,
    @ResultMessage    NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON
    BEGIN TRY
        DECLARE
            @Prefix      VARCHAR(20),
            @DateFormat  VARCHAR(10),
            @TextPrefix  NVARCHAR(30),
            @OutputType  VARCHAR(10),
            @StepVal     INT,
            @MaxVal      INT,
            @CurrRunning INT

        SELECT
            @Prefix      = Prefix,
            @DateFormat  = DateFormat,
            @TextPrefix  = TextPrefix,
            @OutputType  = OutputType,
            @StepVal     = StepValue,
            @MaxVal      = MaxValue,
            @CurrRunning = RunningValue
        FROM dbo.tblCounters
        WHERE TenantID = @TenantID AND CustomerID = @CustomerID
          AND CounterLevel = @CounterLevel AND CounterKey = @CounterKey

        IF @Prefix IS NULL
        BEGIN
            SET @ResultCode    = 1
            SET @ResultMessage = N'מונה לא נמצא: ' + @CounterKey
            RETURN
        END

        IF (@CurrRunning + @StepVal) > @MaxVal
        BEGIN
            SET @ResultCode    = 2
            SET @ResultMessage = N'הגעת לגבול המונה הרץ — יש להגדיל את MaxValue'
            RETURN
        END

        UPDATE dbo.tblCounters
        SET RunningValue = RunningValue + StepValue,
            UpdatedAt    = GETDATE()
        WHERE TenantID = @TenantID AND CustomerID = @CustomerID
          AND CounterLevel = @CounterLevel AND CounterKey = @CounterKey

        SELECT @RunningValue = RunningValue
        FROM   dbo.tblCounters
        WHERE  TenantID = @TenantID AND CustomerID = @CustomerID
          AND  CounterLevel = @CounterLevel AND CounterKey = @CounterKey

        DECLARE @DatePart NVARCHAR(20) = ''
        IF      @DateFormat = 'YEAR'
            SET @DatePart = CAST(YEAR(GETDATE()) AS VARCHAR) + '-'
        ELSE IF @DateFormat = 'YEAR_MONTH'
            SET @DatePart = CAST(YEAR(GETDATE()) AS VARCHAR) + '-'
                          + RIGHT('0' + CAST(MONTH(GETDATE()) AS VARCHAR), 2) + '-'
        ELSE IF @DateFormat = 'TEXT' AND @TextPrefix <> ''
            SET @DatePart = @TextPrefix + '-'

        IF @OutputType = 'NUMERIC'
            SET @RunningFormatted = CAST(@RunningValue AS NVARCHAR(50))
        ELSE -- STRING
            SET @RunningFormatted = @Prefix + '-' + @DatePart
                                  + RIGHT('000000' + CAST(@RunningValue AS VARCHAR), 6)

        SET @ResultCode    = 0
        SET @ResultMessage = N'מספר רץ הוקצה: ' + @RunningFormatted
    END TRY
    BEGIN CATCH
        SET @ResultCode    = 99
        SET @ResultMessage = ERROR_MESSAGE()
    END CATCH
END
GO

-- ============================================================
-- sp_CounterReset — איפוס מונה שוטף ידני (מסך הגדרות)
-- ============================================================
CREATE OR ALTER PROCEDURE dbo.sp_CounterReset
    @TenantID       INT,
    @CustomerID     INT           = 0,
    @CounterLevel   VARCHAR(10)   = 'TENANT',
    @CounterKey     VARCHAR(30),
    @ResultCode     INT           OUTPUT,
    @ResultMessage  NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON
    BEGIN TRY
        UPDATE dbo.tblCounters
        SET CurrentValue  = StartValue,
            LastResetDate = CAST(GETDATE() AS DATE),
            UpdatedAt     = GETDATE()
        WHERE TenantID = @TenantID AND CustomerID = @CustomerID
          AND CounterLevel = @CounterLevel AND CounterKey = @CounterKey

        IF @@ROWCOUNT = 0
        BEGIN
            SET @ResultCode    = 1
            SET @ResultMessage = N'מונה לא נמצא'
            RETURN
        END

        SET @ResultCode    = 0
        SET @ResultMessage = N'המונה השוטף אופס בהצלחה'
    END TRY
    BEGIN CATCH
        SET @ResultCode    = 99
        SET @ResultMessage = ERROR_MESSAGE()
    END CATCH
END
GO

-- ============================================================
-- sp_CounterUpdate — עדכון הגדרות מונה (מסך הגדרות)
-- ============================================================
CREATE OR ALTER PROCEDURE dbo.sp_CounterUpdate
    @TenantID       INT,
    @CustomerID     INT           = 0,
    @CounterLevel   VARCHAR(10)   = 'TENANT',
    @CounterKey     VARCHAR(30),
    @CounterName    NVARCHAR(100),
    @Prefix         VARCHAR(20),
    @DateFormat     VARCHAR(10),
    @TextPrefix     NVARCHAR(30)  = '',
    @StepValue      INT,
    @StartValue     INT,
    @MaxValue       INT,
    @OutputType     VARCHAR(10)   = 'NUMERIC',
    @ResetPeriod    VARCHAR(10),
    @ResultCode     INT           OUTPUT,
    @ResultMessage  NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON
    BEGIN TRY
        UPDATE dbo.tblCounters
        SET CounterName   = @CounterName,
            Prefix        = @Prefix,
            DateFormat    = @DateFormat,
            TextPrefix    = @TextPrefix,
            StepValue     = @StepValue,
            StartValue    = @StartValue,
            MaxValue      = @MaxValue,
            OutputType    = @OutputType,
            ResetPeriod   = @ResetPeriod,
            UpdatedAt     = GETDATE()
        WHERE TenantID = @TenantID AND CustomerID = @CustomerID
          AND CounterLevel = @CounterLevel AND CounterKey = @CounterKey
          AND IsLocked = 0  -- אסור לעדכן מונה נעול

        IF @@ROWCOUNT = 0
        BEGIN
            -- בדוק אם לא נמצא או נעול
            IF EXISTS (SELECT 1 FROM dbo.tblCounters WHERE TenantID=@TenantID AND CustomerID=@CustomerID AND CounterLevel=@CounterLevel AND CounterKey=@CounterKey AND IsLocked=1)
            BEGIN
                SET @ResultCode    = 3
                SET @ResultMessage = N'המונה נעול — שחרר נעילה לפני עריכה'
                RETURN
            END
            SET @ResultCode    = 1
            SET @ResultMessage = N'מונה לא נמצא'
            RETURN
        END

        SET @ResultCode    = 0
        SET @ResultMessage = N'הגדרות המונה עודכנו בהצלחה'
    END TRY
    BEGIN CATCH
        SET @ResultCode    = 99
        SET @ResultMessage = ERROR_MESSAGE()
    END CATCH
END
GO

-- ============================================================
-- sp_CounterList — רשימת מונים (מסך הגדרות)
-- ============================================================
CREATE OR ALTER PROCEDURE dbo.sp_CounterList
    @TenantID       INT,
    @CustomerID     INT           = 0,
    @CounterLevel   VARCHAR(10)   = '',    -- '' = כל הרמות
    @ResultCode     INT           OUTPUT,
    @ResultMessage  NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON
    BEGIN TRY
        SELECT
            CounterID,
            TenantID, CustomerID, CounterLevel, CounterKey,
            CounterName, Prefix, DateFormat, TextPrefix,
            StepValue, StartValue, MaxValue,
            OutputType, IsLocked, RunningValue, CurrentValue,
            ResetPeriod, LastResetDate,
            CreatedAt, UpdatedAt
        FROM dbo.tblCounters
        WHERE TenantID   = @TenantID
          AND CustomerID = @CustomerID
          AND (@CounterLevel = '' OR CounterLevel = @CounterLevel)
        ORDER BY CounterLevel, CounterKey

        SET @ResultCode    = 0
        SET @ResultMessage = N'OK'
    END TRY
    BEGIN CATCH
        SET @ResultCode    = 99
        SET @ResultMessage = ERROR_MESSAGE()
    END CATCH
END
GO

-- ============================================================
-- sp_CounterLock — נעילה / שחרור מונה
-- ============================================================
CREATE OR ALTER PROCEDURE dbo.sp_CounterLock
    @TenantID       INT,
    @CustomerID     INT           = 0,
    @CounterLevel   VARCHAR(10)   = 'TENANT',
    @CounterKey     VARCHAR(30),
    @IsLocked       BIT,
    @ResultCode     INT           OUTPUT,
    @ResultMessage  NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON
    BEGIN TRY
        UPDATE dbo.tblCounters
        SET IsLocked  = @IsLocked,
            UpdatedAt = GETDATE()
        WHERE TenantID    = @TenantID
          AND CustomerID  = @CustomerID
          AND CounterLevel= @CounterLevel
          AND CounterKey  = @CounterKey

        IF @@ROWCOUNT = 0
        BEGIN
            SET @ResultCode    = 1
            SET @ResultMessage = N'מונה לא נמצא'
            RETURN
        END

        SET @ResultCode    = 0
        SET @ResultMessage = CASE @IsLocked WHEN 1 THEN N'המונה ננעל' ELSE N'נעילת המונה שוחררה' END
    END TRY
    BEGIN CATCH
        SET @ResultCode    = 99
        SET @ResultMessage = ERROR_MESSAGE()
    END CATCH
END
GO
