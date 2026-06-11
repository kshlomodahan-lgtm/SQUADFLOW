-- ============================================================
-- FLOWSPACE — Projects, SW Products, SW Packages, Client Subscriptions
-- ============================================================
USE ProfitsCRM;
GO

-- ============================================================
-- tblProjects — פרויקטי פיתוח של בית תוכנה
-- ============================================================
IF NOT EXISTS (SELECT 1 FROM sys.tables WHERE object_id = OBJECT_ID(N'dbo.tblProjects'))
BEGIN
    CREATE TABLE dbo.tblProjects (
        ProjectID     INT             NOT NULL IDENTITY(1,1) CONSTRAINT PK_tblProjects PRIMARY KEY,
        TenantID      INT             NOT NULL,
        ProjectCode   NVARCHAR(50)    NOT NULL,
        ProjectName   NVARCHAR(150)   NOT NULL,
        Description   NVARCHAR(2000)  NOT NULL CONSTRAINT DF_Projects_Desc      DEFAULT '',
        ClientOrgID   INT             NULL,
        Status        NVARCHAR(20)    NOT NULL CONSTRAINT DF_Projects_Status    DEFAULT 'draft',
        StartDate     DATE            NULL,
        TargetDate    DATE            NULL,
        CompletedDate DATE            NULL,
        CreatedBy     INT             NULL,
        CreatedAt     DATETIME2       NOT NULL CONSTRAINT DF_Projects_CreatedAt DEFAULT GETDATE(),
        UpdatedAt     DATETIME2       NOT NULL CONSTRAINT DF_Projects_UpdatedAt DEFAULT GETDATE(),
        IsActive      BIT             NOT NULL CONSTRAINT DF_Projects_IsActive  DEFAULT 1,
        CONSTRAINT UQ_tblProjects_Code UNIQUE (TenantID, ProjectCode)
    )
    PRINT 'tblProjects — נוצרה'
END
ELSE PRINT 'tblProjects — כבר קיימת'
GO

-- ============================================================
-- tblSWProducts — מוצרים של בית תוכנה (ארוז מפרויקט)
-- ============================================================
IF NOT EXISTS (SELECT 1 FROM sys.tables WHERE object_id = OBJECT_ID(N'dbo.tblSWProducts'))
BEGIN
    CREATE TABLE dbo.tblSWProducts (
        SWProductID   INT             NOT NULL IDENTITY(1,1) CONSTRAINT PK_tblSWProducts PRIMARY KEY,
        TenantID      INT             NOT NULL,
        ProjectID     INT             NULL REFERENCES dbo.tblProjects(ProjectID),
        ProductCode   NVARCHAR(50)    NOT NULL,
        ProductName   NVARCHAR(150)   NOT NULL,
        Description   NVARCHAR(2000)  NOT NULL CONSTRAINT DF_SWProd_Desc        DEFAULT '',
        Version       NVARCHAR(20)    NOT NULL CONSTRAINT DF_SWProd_Version     DEFAULT '1.0.0',
        ReleaseNotes  NVARCHAR(MAX)   NULL,
        Status        NVARCHAR(20)    NOT NULL CONSTRAINT DF_SWProd_Status      DEFAULT 'draft',
        PublishedAt   DATETIME2       NULL,
        CreatedBy     INT             NULL,
        CreatedAt     DATETIME2       NOT NULL CONSTRAINT DF_SWProd_CreatedAt   DEFAULT GETDATE(),
        UpdatedAt     DATETIME2       NOT NULL CONSTRAINT DF_SWProd_UpdatedAt   DEFAULT GETDATE(),
        IsActive      BIT             NOT NULL CONSTRAINT DF_SWProd_IsActive    DEFAULT 1,
        CONSTRAINT UQ_tblSWProducts_Code UNIQUE (TenantID, ProductCode)
    )
    PRINT 'tblSWProducts — נוצרה'
END
ELSE PRINT 'tblSWProducts — כבר קיימת'
GO

-- ============================================================
-- tblSWPackages — חבילות של בית תוכנה (עוטפות מוצרים)
-- ============================================================
IF NOT EXISTS (SELECT 1 FROM sys.tables WHERE object_id = OBJECT_ID(N'dbo.tblSWPackages'))
BEGIN
    CREATE TABLE dbo.tblSWPackages (
        SWPackageID   INT             NOT NULL IDENTITY(1,1) CONSTRAINT PK_tblSWPackages PRIMARY KEY,
        TenantID      INT             NOT NULL,
        PackageCode   NVARCHAR(50)    NOT NULL,
        PackageName   NVARCHAR(150)   NOT NULL,
        Description   NVARCHAR(2000)  NOT NULL CONSTRAINT DF_SWPkg_Desc          DEFAULT '',
        PricingType   NVARCHAR(20)    NOT NULL CONSTRAINT DF_SWPkg_PricingType   DEFAULT 'monthly',
        PriceMonthly  DECIMAL(10,2)   NOT NULL CONSTRAINT DF_SWPkg_PriceMonthly  DEFAULT 0,
        PriceAnnual   DECIMAL(10,2)   NOT NULL CONSTRAINT DF_SWPkg_PriceAnnual   DEFAULT 0,
        PricePerUser  DECIMAL(10,2)   NOT NULL CONSTRAINT DF_SWPkg_PricePerUser  DEFAULT 0,
        SetupFee      DECIMAL(10,2)   NOT NULL CONSTRAINT DF_SWPkg_SetupFee      DEFAULT 0,
        TrialDays     INT             NOT NULL CONSTRAINT DF_SWPkg_TrialDays     DEFAULT 0,
        MaxUsers      INT             NULL,
        MaxStorageGB  INT             NULL,
        SupportLevel  NVARCHAR(20)    NOT NULL CONSTRAINT DF_SWPkg_SupportLevel  DEFAULT 'basic',
        SlaPercent    DECIMAL(5,2)    NOT NULL CONSTRAINT DF_SWPkg_SlaPercent    DEFAULT 99.0,
        Status        NVARCHAR(20)    NOT NULL CONSTRAINT DF_SWPkg_Status        DEFAULT 'draft',
        CreatedBy     INT             NULL,
        CreatedAt     DATETIME2       NOT NULL CONSTRAINT DF_SWPkg_CreatedAt     DEFAULT GETDATE(),
        UpdatedAt     DATETIME2       NOT NULL CONSTRAINT DF_SWPkg_UpdatedAt     DEFAULT GETDATE(),
        IsActive      BIT             NOT NULL CONSTRAINT DF_SWPkg_IsActive      DEFAULT 1,
        CONSTRAINT UQ_tblSWPackages_Code UNIQUE (TenantID, PackageCode)
    )
    PRINT 'tblSWPackages — נוצרה'
END
ELSE PRINT 'tblSWPackages — כבר קיימת'
GO

-- ============================================================
-- tblSWPackageItems — מוצרים הכלולים בחבילה
-- ============================================================
IF NOT EXISTS (SELECT 1 FROM sys.tables WHERE object_id = OBJECT_ID(N'dbo.tblSWPackageItems'))
BEGIN
    CREATE TABLE dbo.tblSWPackageItems (
        ItemID        INT NOT NULL IDENTITY(1,1) CONSTRAINT PK_tblSWPackageItems PRIMARY KEY,
        SWPackageID   INT NOT NULL REFERENCES dbo.tblSWPackages(SWPackageID),
        SWProductID   INT NOT NULL REFERENCES dbo.tblSWProducts(SWProductID),
        IsCore        BIT NOT NULL CONSTRAINT DF_SWPkgItem_IsCore    DEFAULT 0,
        SortOrder     INT NOT NULL CONSTRAINT DF_SWPkgItem_SortOrder DEFAULT 0,
        CONSTRAINT UQ_tblSWPackageItems UNIQUE (SWPackageID, SWProductID)
    )
    PRINT 'tblSWPackageItems — נוצרה'
END
ELSE PRINT 'tblSWPackageItems — כבר קיימת'
GO

-- ============================================================
-- tblClientSubscriptions — מנויי לקוחות לחבילות
-- ============================================================
IF NOT EXISTS (SELECT 1 FROM sys.tables WHERE object_id = OBJECT_ID(N'dbo.tblClientSubscriptions'))
BEGIN
    CREATE TABLE dbo.tblClientSubscriptions (
        SubscriptionID INT             NOT NULL IDENTITY(1,1) CONSTRAINT PK_tblClientSubscriptions PRIMARY KEY,
        TenantID       INT             NOT NULL,
        SWPackageID    INT             NOT NULL REFERENCES dbo.tblSWPackages(SWPackageID),
        ClientOrgID    INT             NOT NULL,
        StartDate      DATE            NOT NULL,
        EndDate        DATE            NULL,
        TrialEndDate   DATE            NULL,
        BillingCycle   NVARCHAR(10)    NOT NULL CONSTRAINT DF_ClientSub_BillingCycle DEFAULT 'monthly',
        PricePaid      DECIMAL(10,2)   NOT NULL CONSTRAINT DF_ClientSub_PricePaid    DEFAULT 0,
        UserCount      INT             NOT NULL CONSTRAINT DF_ClientSub_UserCount     DEFAULT 1,
        Status         NVARCHAR(20)    NOT NULL CONSTRAINT DF_ClientSub_Status       DEFAULT 'trial',
        Notes          NVARCHAR(1000)  NOT NULL CONSTRAINT DF_ClientSub_Notes        DEFAULT '',
        CreatedBy      INT             NULL,
        CreatedAt      DATETIME2       NOT NULL CONSTRAINT DF_ClientSub_CreatedAt    DEFAULT GETDATE(),
        UpdatedAt      DATETIME2       NOT NULL CONSTRAINT DF_ClientSub_UpdatedAt    DEFAULT GETDATE(),
        IsActive       BIT             NOT NULL CONSTRAINT DF_ClientSub_IsActive     DEFAULT 1
    )
    PRINT 'tblClientSubscriptions — נוצרה'
END
ELSE PRINT 'tblClientSubscriptions — כבר קיימת'
GO

-- ============================================================
-- sp_ProjectList
-- ============================================================
IF OBJECT_ID('dbo.sp_ProjectList', 'P') IS NOT NULL DROP PROCEDURE dbo.sp_ProjectList
GO
CREATE PROCEDURE dbo.sp_ProjectList
    @TenantID   INT,
    @SearchText NVARCHAR(100) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    SELECT
        p.ProjectID,
        p.ProjectCode,
        p.ProjectName,
        p.Description,
        p.ClientOrgID,
        o.CompanyName AS ClientOrgName,
        p.Status,
        p.StartDate,
        p.TargetDate,
        p.CompletedDate,
        p.CreatedAt,
        p.UpdatedAt,
        (SELECT COUNT(*) FROM dbo.tblSWProducts sp2 WHERE sp2.ProjectID = p.ProjectID AND sp2.IsActive = 1) AS ProductCount
    FROM dbo.tblProjects p
    LEFT JOIN dbo.tblOrganizations o ON o.OrgID = p.ClientOrgID
    WHERE p.TenantID = @TenantID
      AND p.IsActive = 1
      AND (@SearchText IS NULL OR p.ProjectName LIKE '%' + @SearchText + '%' OR p.ProjectCode LIKE '%' + @SearchText + '%')
    ORDER BY p.UpdatedAt DESC
END
GO
PRINT 'sp_ProjectList — נוצרה'
GO

-- ============================================================
-- sp_ProjectGet
-- ============================================================
IF OBJECT_ID('dbo.sp_ProjectGet', 'P') IS NOT NULL DROP PROCEDURE dbo.sp_ProjectGet
GO
CREATE PROCEDURE dbo.sp_ProjectGet
    @ProjectID INT,
    @TenantID  INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT
        p.*,
        o.CompanyName AS ClientOrgName
    FROM dbo.tblProjects p
    LEFT JOIN dbo.tblOrganizations o ON o.OrgID = p.ClientOrgID
    WHERE p.ProjectID = @ProjectID
      AND p.TenantID  = @TenantID
      AND p.IsActive  = 1
END
GO
PRINT 'sp_ProjectGet — נוצרה'
GO

-- ============================================================
-- sp_ProjectSave
-- ============================================================
IF OBJECT_ID('dbo.sp_ProjectSave', 'P') IS NOT NULL DROP PROCEDURE dbo.sp_ProjectSave
GO
CREATE PROCEDURE dbo.sp_ProjectSave
    @ProjectID    INT = NULL,
    @TenantID     INT,
    @ProjectCode  NVARCHAR(50),
    @ProjectName  NVARCHAR(150),
    @Description  NVARCHAR(2000) = '',
    @ClientOrgID  INT = NULL,
    @Status       NVARCHAR(20)   = 'draft',
    @StartDate    DATE           = NULL,
    @TargetDate   DATE           = NULL,
    @CompletedDate DATE          = NULL,
    @CreatedBy    INT            = NULL,
    @ResultCode   INT            OUTPUT,
    @ResultMessage NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        IF EXISTS (
            SELECT 1 FROM dbo.tblProjects
            WHERE TenantID = @TenantID AND ProjectCode = @ProjectCode
              AND (@ProjectID IS NULL OR ProjectID <> @ProjectID)
        )
        BEGIN
            SET @ResultCode = -1; SET @ResultMessage = N'קוד פרויקט כבר קיים'; RETURN;
        END

        IF @ProjectID IS NULL OR @ProjectID = 0
        BEGIN
            INSERT INTO dbo.tblProjects
                (TenantID, ProjectCode, ProjectName, Description, ClientOrgID,
                 Status, StartDate, TargetDate, CompletedDate, CreatedBy)
            VALUES
                (@TenantID, @ProjectCode, @ProjectName, @Description, @ClientOrgID,
                 @Status, @StartDate, @TargetDate, @CompletedDate, @CreatedBy);
            SET @ProjectID = SCOPE_IDENTITY();
            SET @ResultMessage = N'הפרויקט נוצר בהצלחה';
        END
        ELSE
        BEGIN
            UPDATE dbo.tblProjects SET
                ProjectCode   = @ProjectCode,
                ProjectName   = @ProjectName,
                Description   = @Description,
                ClientOrgID   = @ClientOrgID,
                Status        = @Status,
                StartDate     = @StartDate,
                TargetDate    = @TargetDate,
                CompletedDate = @CompletedDate,
                UpdatedAt     = GETDATE()
            WHERE ProjectID = @ProjectID AND TenantID = @TenantID;
            SET @ResultMessage = N'הפרויקט עודכן בהצלחה';
        END

        SET @ResultCode = @ProjectID;
    END TRY
    BEGIN CATCH
        SET @ResultCode = -99;
        SET @ResultMessage = ERROR_MESSAGE();
    END CATCH
END
GO
PRINT 'sp_ProjectSave — נוצרה'
GO

-- ============================================================
-- sp_ProjectDelete
-- ============================================================
IF OBJECT_ID('dbo.sp_ProjectDelete', 'P') IS NOT NULL DROP PROCEDURE dbo.sp_ProjectDelete
GO
CREATE PROCEDURE dbo.sp_ProjectDelete
    @ProjectID INT,
    @TenantID  INT,
    @ResultCode    INT            OUTPUT,
    @ResultMessage NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        UPDATE dbo.tblProjects SET IsActive = 0, UpdatedAt = GETDATE()
        WHERE ProjectID = @ProjectID AND TenantID = @TenantID;
        SET @ResultCode = 1; SET @ResultMessage = N'הפרויקט נמחק';
    END TRY
    BEGIN CATCH
        SET @ResultCode = -99; SET @ResultMessage = ERROR_MESSAGE();
    END CATCH
END
GO
PRINT 'sp_ProjectDelete — נוצרה'
GO

-- ============================================================
-- sp_SWProductList
-- ============================================================
IF OBJECT_ID('dbo.sp_SWProductList', 'P') IS NOT NULL DROP PROCEDURE dbo.sp_SWProductList
GO
CREATE PROCEDURE dbo.sp_SWProductList
    @TenantID   INT,
    @ProjectID  INT = NULL,
    @SearchText NVARCHAR(100) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    SELECT
        sp.SWProductID, sp.ProductCode, sp.ProductName, sp.Description,
        sp.Version, sp.Status, sp.PublishedAt, sp.CreatedAt, sp.UpdatedAt,
        sp.ProjectID,
        p.ProjectName
    FROM dbo.tblSWProducts sp
    LEFT JOIN dbo.tblProjects p ON p.ProjectID = sp.ProjectID
    WHERE sp.TenantID = @TenantID
      AND sp.IsActive = 1
      AND (@ProjectID IS NULL OR sp.ProjectID = @ProjectID)
      AND (@SearchText IS NULL OR sp.ProductName LIKE '%' + @SearchText + '%')
    ORDER BY sp.UpdatedAt DESC
END
GO
PRINT 'sp_SWProductList — נוצרה'
GO

-- ============================================================
-- sp_SWProductSave
-- ============================================================
IF OBJECT_ID('dbo.sp_SWProductSave', 'P') IS NOT NULL DROP PROCEDURE dbo.sp_SWProductSave
GO
CREATE PROCEDURE dbo.sp_SWProductSave
    @SWProductID  INT = NULL,
    @TenantID     INT,
    @ProjectID    INT = NULL,
    @ProductCode  NVARCHAR(50),
    @ProductName  NVARCHAR(150),
    @Description  NVARCHAR(2000) = '',
    @Version      NVARCHAR(20)   = '1.0.0',
    @ReleaseNotes NVARCHAR(MAX)  = NULL,
    @Status       NVARCHAR(20)   = 'draft',
    @CreatedBy    INT            = NULL,
    @ResultCode   INT            OUTPUT,
    @ResultMessage NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        IF @SWProductID IS NULL OR @SWProductID = 0
        BEGIN
            INSERT INTO dbo.tblSWProducts
                (TenantID, ProjectID, ProductCode, ProductName, Description,
                 Version, ReleaseNotes, Status, CreatedBy)
            VALUES
                (@TenantID, @ProjectID, @ProductCode, @ProductName, @Description,
                 @Version, @ReleaseNotes, @Status, @CreatedBy);
            SET @SWProductID = SCOPE_IDENTITY();
            SET @ResultMessage = N'המוצר נוצר בהצלחה';
        END
        ELSE
        BEGIN
            UPDATE dbo.tblSWProducts SET
                ProjectID    = @ProjectID,
                ProductCode  = @ProductCode,
                ProductName  = @ProductName,
                Description  = @Description,
                Version      = @Version,
                ReleaseNotes = @ReleaseNotes,
                Status       = @Status,
                PublishedAt  = CASE WHEN @Status = 'published' AND PublishedAt IS NULL THEN GETDATE() ELSE PublishedAt END,
                UpdatedAt    = GETDATE()
            WHERE SWProductID = @SWProductID AND TenantID = @TenantID;
            SET @ResultMessage = N'המוצר עודכן בהצלחה';
        END
        SET @ResultCode = @SWProductID;
    END TRY
    BEGIN CATCH
        SET @ResultCode = -99; SET @ResultMessage = ERROR_MESSAGE();
    END CATCH
END
GO
PRINT 'sp_SWProductSave — נוצרה'
GO

-- ============================================================
-- sp_SWPackageList
-- ============================================================
IF OBJECT_ID('dbo.sp_SWPackageList', 'P') IS NOT NULL DROP PROCEDURE dbo.sp_SWPackageList
GO
CREATE PROCEDURE dbo.sp_SWPackageList
    @TenantID   INT,
    @SearchText NVARCHAR(100) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    SELECT
        pk.SWPackageID, pk.PackageCode, pk.PackageName, pk.Description,
        pk.PricingType, pk.PriceMonthly, pk.PriceAnnual, pk.PricePerUser,
        pk.SetupFee, pk.TrialDays, pk.MaxUsers, pk.SupportLevel, pk.SlaPercent,
        pk.Status, pk.CreatedAt, pk.UpdatedAt,
        (SELECT COUNT(*) FROM dbo.tblSWPackageItems i WHERE i.SWPackageID = pk.SWPackageID) AS ProductCount,
        (SELECT COUNT(*) FROM dbo.tblClientSubscriptions s WHERE s.SWPackageID = pk.SWPackageID AND s.IsActive = 1) AS SubscriberCount
    FROM dbo.tblSWPackages pk
    WHERE pk.TenantID = @TenantID
      AND pk.IsActive = 1
      AND (@SearchText IS NULL OR pk.PackageName LIKE '%' + @SearchText + '%')
    ORDER BY pk.UpdatedAt DESC
END
GO
PRINT 'sp_SWPackageList — נוצרה'
GO

-- ============================================================
-- sp_SWPackageSave
-- ============================================================
IF OBJECT_ID('dbo.sp_SWPackageSave', 'P') IS NOT NULL DROP PROCEDURE dbo.sp_SWPackageSave
GO
CREATE PROCEDURE dbo.sp_SWPackageSave
    @SWPackageID  INT = NULL,
    @TenantID     INT,
    @PackageCode  NVARCHAR(50),
    @PackageName  NVARCHAR(150),
    @Description  NVARCHAR(2000) = '',
    @PricingType  NVARCHAR(20)   = 'monthly',
    @PriceMonthly DECIMAL(10,2)  = 0,
    @PriceAnnual  DECIMAL(10,2)  = 0,
    @PricePerUser DECIMAL(10,2)  = 0,
    @SetupFee     DECIMAL(10,2)  = 0,
    @TrialDays    INT            = 0,
    @MaxUsers     INT            = NULL,
    @MaxStorageGB INT            = NULL,
    @SupportLevel NVARCHAR(20)   = 'basic',
    @SlaPercent   DECIMAL(5,2)   = 99.0,
    @Status       NVARCHAR(20)   = 'draft',
    @CreatedBy    INT            = NULL,
    @ResultCode   INT            OUTPUT,
    @ResultMessage NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        IF @SWPackageID IS NULL OR @SWPackageID = 0
        BEGIN
            INSERT INTO dbo.tblSWPackages
                (TenantID, PackageCode, PackageName, Description, PricingType,
                 PriceMonthly, PriceAnnual, PricePerUser, SetupFee, TrialDays,
                 MaxUsers, MaxStorageGB, SupportLevel, SlaPercent, Status, CreatedBy)
            VALUES
                (@TenantID, @PackageCode, @PackageName, @Description, @PricingType,
                 @PriceMonthly, @PriceAnnual, @PricePerUser, @SetupFee, @TrialDays,
                 @MaxUsers, @MaxStorageGB, @SupportLevel, @SlaPercent, @Status, @CreatedBy);
            SET @SWPackageID = SCOPE_IDENTITY();
            SET @ResultMessage = N'החבילה נוצרה בהצלחה';
        END
        ELSE
        BEGIN
            UPDATE dbo.tblSWPackages SET
                PackageCode  = @PackageCode, PackageName = @PackageName,
                Description  = @Description, PricingType = @PricingType,
                PriceMonthly = @PriceMonthly, PriceAnnual = @PriceAnnual,
                PricePerUser = @PricePerUser, SetupFee    = @SetupFee,
                TrialDays    = @TrialDays,    MaxUsers    = @MaxUsers,
                MaxStorageGB = @MaxStorageGB, SupportLevel= @SupportLevel,
                SlaPercent   = @SlaPercent,   Status      = @Status,
                UpdatedAt    = GETDATE()
            WHERE SWPackageID = @SWPackageID AND TenantID = @TenantID;
            SET @ResultMessage = N'החבילה עודכנה בהצלחה';
        END
        SET @ResultCode = @SWPackageID;
    END TRY
    BEGIN CATCH
        SET @ResultCode = -99; SET @ResultMessage = ERROR_MESSAGE();
    END CATCH
END
GO
PRINT 'sp_SWPackageSave — נוצרה'
GO

PRINT '============================================================'
PRINT 'FLOWSPACE DB — הכל נוצר בהצלחה'
PRINT '============================================================'
