-- עדכון sp_OrganizationCreate + sp_OrganizationUpdate עם ColorScheme + DarkMode

CREATE OR ALTER PROCEDURE [dbo].[sp_OrganizationCreate]
    @TenantCode      VARCHAR(30),
    @CompanyName     NVARCHAR(150),
    @Email           NVARCHAR(150),
    @Phone           VARCHAR(30)    = '',
    @PlanType        VARCHAR(20)    = 'basic',
    @MaxUsers        INT            = 10,
    @MaxTickets      INT            = 200,
    @Notes           NVARCHAR(MAX)  = N'',
    @LogoUrl         NVARCHAR(500)  = N'',
    @BusinessNumber  NVARCHAR(30)   = N'',
    @Address         NVARCHAR(250)  = N'',
    @City            NVARCHAR(100)  = N'',
    @Country         NVARCHAR(100)  = N'ישראל',
    @ContactName     NVARCHAR(150)  = N'',
    @Phone2          VARCHAR(30)    = '',
    @Fax             VARCHAR(30)    = '',
    @Website         NVARCHAR(200)  = N'',
    @BankName        NVARCHAR(100)  = N'',
    @BankBranch      VARCHAR(30)    = '',
    @BankAccount     VARCHAR(30)    = '',
    @AccountingRef   NVARCHAR(50)   = N'',
    @ExpiresAt       DATETIME2      = NULL,
    @ColorScheme     NVARCHAR(20)   = NULL,
    @DarkMode        BIT            = NULL,
    -- OUTPUT
    @NewTenantID     INT            OUTPUT,
    @ResultCode      INT            OUTPUT,
    @ResultMessage   NVARCHAR(200)  OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    SET @NewTenantID   = 0;
    SET @ResultCode    = 0;
    SET @ResultMessage = N'';

    IF @TenantCode NOT LIKE '[A-Z][A-Z][A-Z]_[0-9]%'
    BEGIN SET @ResultCode=3; SET @ResultMessage=N'פורמט קוד שגוי. דוגמה: ALP_12345'; RETURN; END

    IF @PlanType NOT IN ('trial','basic','pro','enterprise') SET @PlanType='basic';

    IF EXISTS (SELECT 1 FROM dbo.tblTenants WHERE TenantCode=@TenantCode)
    BEGIN SET @ResultCode=1; SET @ResultMessage=N'קוד הארגון כבר קיים במערכת'; RETURN; END

    IF EXISTS (SELECT 1 FROM dbo.tblTenants WHERE Email=@Email)
    BEGIN SET @ResultCode=2; SET @ResultMessage=N'כתובת המייל כבר קיימת במערכת'; RETURN; END

    BEGIN TRANSACTION;
    BEGIN TRY
        DECLARE @ExpDate DATETIME2 = ISNULL(@ExpiresAt, DATEADD(YEAR,1,GETDATE()));

        INSERT INTO dbo.tblTenants
            (TenantCode,CompanyName,Email,Phone,PlanType,MaxUsers,MaxTickets,Notes,LogoUrl,
             BusinessNumber,Address,City,Country,ContactName,Phone2,Fax,Website,
             BankName,BankBranch,BankAccount,AccountingRef,ExpiresAt,ColorScheme,DarkMode)
        VALUES
            (@TenantCode,@CompanyName,@Email,@Phone,@PlanType,@MaxUsers,@MaxTickets,@Notes,@LogoUrl,
             @BusinessNumber,@Address,@City,@Country,@ContactName,@Phone2,@Fax,@Website,
             @BankName,@BankBranch,@BankAccount,@AccountingRef,@ExpDate,@ColorScheme,@DarkMode);

        SET @NewTenantID = SCOPE_IDENTITY();

        -- ירושת הגדרות מה-Platform
        INSERT INTO dbo.tblSystemSettings (TenantID,SettingKey,SettingValue,Description)
        SELECT @NewTenantID,SettingKey,SettingValue,Description
        FROM   dbo.tblSystemSettings
        WHERE  TenantID=1
          AND  SettingKey NOT IN ('MaxDailyFailedLoginAttempts','LoginBlockDurationHours');

        INSERT INTO dbo.tblAuditLog (TenantID,TableName,RecordID,Action,ChangedByID,NewValues)
        VALUES (1,'tblTenants',@NewTenantID,'INSERT',1,
                N'{"TenantCode":"' + @TenantCode + N'","CompanyName":"' + @CompanyName + N'"}');

        COMMIT;
        SET @ResultCode=0; SET @ResultMessage=N'הארגון נוצר בהצלחה';
    END TRY
    BEGIN CATCH
        ROLLBACK;
        SET @ResultCode=99; SET @ResultMessage=N'שגיאת שרת: ' + ERROR_MESSAGE();
    END CATCH;
END;
GO

-- ─────────────────────────────────────────────────────────────

CREATE OR ALTER PROCEDURE [dbo].[sp_OrganizationUpdate]
    @TenantID        INT,
    @CompanyName     NVARCHAR(150),
    @Email           NVARCHAR(150),
    @Phone           VARCHAR(30)    = '',
    @PlanType        VARCHAR(20)    = 'basic',
    @MaxUsers        INT            = 10,
    @MaxTickets      INT            = 200,
    @IsActive        BIT            = 1,
    @LogoUrl         NVARCHAR(500)  = '',
    @Notes           NVARCHAR(MAX)  = N'',
    @BusinessNumber  NVARCHAR(30)   = N'',
    @Address         NVARCHAR(250)  = N'',
    @City            NVARCHAR(100)  = N'',
    @Country         NVARCHAR(100)  = N'ישראל',
    @ContactName     NVARCHAR(150)  = N'',
    @Phone2          VARCHAR(30)    = '',
    @Fax             VARCHAR(30)    = '',
    @Website         NVARCHAR(200)  = N'',
    @BankName        NVARCHAR(100)  = N'',
    @BankBranch      VARCHAR(30)    = '',
    @BankAccount     VARCHAR(30)    = '',
    @AccountingRef   NVARCHAR(50)   = N'',
    @ColorScheme     NVARCHAR(20)   = NULL,
    @DarkMode        BIT            = NULL,
    -- OUTPUT
    @ResultCode      INT            OUTPUT,
    @ResultMessage   NVARCHAR(200)  OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    SET @ResultCode    = 0;
    SET @ResultMessage = N'';

    IF NOT EXISTS (SELECT 1 FROM dbo.tblTenants WHERE TenantID=@TenantID)
    BEGIN SET @ResultCode=1; SET @ResultMessage=N'ארגון לא נמצא'; RETURN; END

    IF @TenantID=1 AND @IsActive=0
    BEGIN SET @ResultCode=3; SET @ResultMessage=N'לא ניתן לנטרל את ארגון הפלטפורמה'; RETURN; END

    IF EXISTS (SELECT 1 FROM dbo.tblTenants WHERE Email=@Email AND TenantID<>@TenantID)
    BEGIN SET @ResultCode=2; SET @ResultMessage=N'כתובת המייל כבר קיימת אצל ארגון אחר'; RETURN; END

    BEGIN TRY
        UPDATE dbo.tblTenants SET
            CompanyName    = @CompanyName,
            Email          = @Email,
            Phone          = @Phone,
            PlanType       = @PlanType,
            MaxUsers       = @MaxUsers,
            MaxTickets     = @MaxTickets,
            IsActive       = @IsActive,
            LogoUrl        = @LogoUrl,
            Notes          = @Notes,
            BusinessNumber = @BusinessNumber,
            Address        = @Address,
            City           = @City,
            Country        = @Country,
            ContactName    = @ContactName,
            Phone2         = @Phone2,
            Fax            = @Fax,
            Website        = @Website,
            BankName       = @BankName,
            BankBranch     = @BankBranch,
            BankAccount    = @BankAccount,
            AccountingRef  = @AccountingRef,
            ColorScheme    = COALESCE(@ColorScheme, ColorScheme),
            DarkMode       = COALESCE(@DarkMode,    DarkMode),
            UpdatedAt      = GETDATE()
        WHERE TenantID = @TenantID;

        INSERT INTO dbo.tblAuditLog (TenantID,TableName,RecordID,Action,ChangedByID,NewValues)
        VALUES (1,'tblTenants',@TenantID,'UPDATE',1,
                N'{"CompanyName":"' + @CompanyName + N'","IsActive":' + CAST(@IsActive AS NVARCHAR(1)) + N'}');

        SET @ResultCode=0; SET @ResultMessage=N'הארגון עודכן בהצלחה';
    END TRY
    BEGIN CATCH
        SET @ResultCode=99; SET @ResultMessage=N'שגיאת שרת: ' + ERROR_MESSAGE();
    END CATCH;
END;
GO
