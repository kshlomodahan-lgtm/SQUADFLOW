-- ============================================================
-- Phase 1 — Products, Packages, Subscriptions
-- ============================================================
USE ProfitsCRM;
GO

-- ============================================================
-- tblProductCategories — קטגוריות מוצרים (חדש)
-- ============================================================
IF NOT EXISTS (SELECT 1 FROM sys.tables WHERE object_id = OBJECT_ID(N'dbo.tblProductCategories'))
BEGIN
    CREATE TABLE dbo.tblProductCategories (
        CategoryID    INT            NOT NULL IDENTITY(1,1) CONSTRAINT PK_tblProductCategories PRIMARY KEY,
        TenantID      INT            NOT NULL DEFAULT 0,      -- 0 = פלטפורמה, >0 = ארגון
        CategoryCode  VARCHAR(30)    NOT NULL,
        CategoryName  NVARCHAR(100)  NOT NULL,
        ColorHex      VARCHAR(7)     NOT NULL CONSTRAINT DF_ProdCat_ColorHex      DEFAULT '#0D47FF',
        IconName      VARCHAR(50)    NOT NULL CONSTRAINT DF_ProdCat_IconName      DEFAULT '',
        SortOrder     INT            NOT NULL CONSTRAINT DF_ProdCat_SortOrder     DEFAULT 0,
        IsActive      BIT            NOT NULL CONSTRAINT DF_ProdCat_IsActive      DEFAULT 1,
        CreatedAt     DATETIME2      NOT NULL CONSTRAINT DF_ProdCat_CreatedAt     DEFAULT GETDATE(),
        UpdatedAt     DATETIME2      NOT NULL CONSTRAINT DF_ProdCat_UpdatedAt     DEFAULT GETDATE(),

        CONSTRAINT UQ_tblProductCategories_Code UNIQUE (TenantID, CategoryCode)
    )
    PRINT 'tblProductCategories — נוצרה'
END
ELSE
    PRINT 'tblProductCategories — כבר קיימת, דילוג'
GO

-- ============================================================
-- tblProducts — הוספת עמודות חסרות לטבלה קיימת
-- ============================================================

IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblProducts') AND name='TenantID')
    ALTER TABLE dbo.tblProducts ADD TenantID INT NOT NULL CONSTRAINT DF_Products_TenantID DEFAULT 0
GO
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblProducts') AND name='CategoryID')
    ALTER TABLE dbo.tblProducts ADD CategoryID INT NULL
GO
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblProducts') AND name='ShortDescription')
    ALTER TABLE dbo.tblProducts ADD ShortDescription NVARCHAR(255) NOT NULL CONSTRAINT DF_Products_ShortDesc DEFAULT ''
GO
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblProducts') AND name='ProductVersion')
    ALTER TABLE dbo.tblProducts ADD ProductVersion VARCHAR(20) NOT NULL CONSTRAINT DF_Products_Version DEFAULT '1.0'
GO
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblProducts') AND name='PricingModel')
    ALTER TABLE dbo.tblProducts ADD PricingModel VARCHAR(10) NOT NULL CONSTRAINT DF_Products_PricingModel DEFAULT 'FLAT'
GO
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblProducts') AND name='PriceMonthly')
    ALTER TABLE dbo.tblProducts ADD PriceMonthly DECIMAL(10,2) NOT NULL CONSTRAINT DF_Products_PriceMonthly DEFAULT 0
GO
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblProducts') AND name='PriceAnnual')
    ALTER TABLE dbo.tblProducts ADD PriceAnnual DECIMAL(10,2) NOT NULL CONSTRAINT DF_Products_PriceAnnual DEFAULT 0
GO
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblProducts') AND name='SetupFee')
    ALTER TABLE dbo.tblProducts ADD SetupFee DECIMAL(10,2) NOT NULL CONSTRAINT DF_Products_SetupFee DEFAULT 0
GO
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblProducts') AND name='TrialDays')
    ALTER TABLE dbo.tblProducts ADD TrialDays INT NOT NULL CONSTRAINT DF_Products_TrialDays DEFAULT 0
GO
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblProducts') AND name='MaxUsers')
    ALTER TABLE dbo.tblProducts ADD MaxUsers INT NULL
GO
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblProducts') AND name='MaxStorage_GB')
    ALTER TABLE dbo.tblProducts ADD MaxStorage_GB INT NULL
GO
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblProducts') AND name='MaxRecords')
    ALTER TABLE dbo.tblProducts ADD MaxRecords INT NULL
GO
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblProducts') AND name='ApiCallsPerMonth')
    ALTER TABLE dbo.tblProducts ADD ApiCallsPerMonth INT NULL
GO
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblProducts') AND name='ColorHex')
    ALTER TABLE dbo.tblProducts ADD ColorHex VARCHAR(7) NOT NULL CONSTRAINT DF_Products_ColorHex DEFAULT '#0D47FF'
GO
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblProducts') AND name='LogoUrl')
    ALTER TABLE dbo.tblProducts ADD LogoUrl NVARCHAR(255) NOT NULL CONSTRAINT DF_Products_LogoUrl DEFAULT ''
GO
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblProducts') AND name='DeploymentType')
    ALTER TABLE dbo.tblProducts ADD DeploymentType VARCHAR(15) NOT NULL CONSTRAINT DF_Products_DeploymentType DEFAULT 'CLOUD'
GO
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblProducts') AND name='SupportedLanguages')
    ALTER TABLE dbo.tblProducts ADD SupportedLanguages NVARCHAR(100) NOT NULL CONSTRAINT DF_Products_Languages DEFAULT '["he","en"]'
GO
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblProducts') AND name='DocumentationUrl')
    ALTER TABLE dbo.tblProducts ADD DocumentationUrl NVARCHAR(255) NOT NULL CONSTRAINT DF_Products_DocUrl DEFAULT ''
GO
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblProducts') AND name='ProductStatus')
    ALTER TABLE dbo.tblProducts ADD ProductStatus VARCHAR(15) NOT NULL CONSTRAINT DF_Products_Status DEFAULT 'DRAFT'
GO
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblProducts') AND name='IsPublic')
    ALTER TABLE dbo.tblProducts ADD IsPublic BIT NOT NULL CONSTRAINT DF_Products_IsPublic DEFAULT 1
GO
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblProducts') AND name='LaunchDate')
    ALTER TABLE dbo.tblProducts ADD LaunchDate DATE NULL
GO
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblProducts') AND name='EndOfLifeDate')
    ALTER TABLE dbo.tblProducts ADD EndOfLifeDate DATE NULL
GO

-- CHECK constraints
IF NOT EXISTS (SELECT 1 FROM sys.check_constraints WHERE name='CK_tblProducts_PricingModel')
    ALTER TABLE dbo.tblProducts ADD CONSTRAINT CK_tblProducts_PricingModel
        CHECK (PricingModel IN ('FLAT','PER_USER','USAGE','FREE'))
GO
IF NOT EXISTS (SELECT 1 FROM sys.check_constraints WHERE name='CK_tblProducts_DeploymentType')
    ALTER TABLE dbo.tblProducts ADD CONSTRAINT CK_tblProducts_DeploymentType
        CHECK (DeploymentType IN ('CLOUD','ON_PREMISE','HYBRID'))
GO
IF NOT EXISTS (SELECT 1 FROM sys.check_constraints WHERE name='CK_tblProducts_Status')
    ALTER TABLE dbo.tblProducts ADD CONSTRAINT CK_tblProducts_Status
        CHECK (ProductStatus IN ('DRAFT','ACTIVE','DEPRECATED'))
GO

-- FK לקטגוריה
IF NOT EXISTS (SELECT 1 FROM sys.foreign_keys WHERE name='FK_tblProducts_Category')
    ALTER TABLE dbo.tblProducts ADD CONSTRAINT FK_tblProducts_Category
        FOREIGN KEY (CategoryID) REFERENCES dbo.tblProductCategories(CategoryID)
GO

PRINT 'tblProducts — עמודות עודכנו'
GO

-- ============================================================
-- tblPackages — הוספת עמודות חסרות
-- ============================================================

IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblPackages') AND name='TenantID')
    ALTER TABLE dbo.tblPackages ADD TenantID INT NOT NULL CONSTRAINT DF_Packages_TenantID DEFAULT 0
GO
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblPackages') AND name='PriceAnnual')
    ALTER TABLE dbo.tblPackages ADD PriceAnnual DECIMAL(10,2) NOT NULL CONSTRAINT DF_Packages_PriceAnnual DEFAULT 0
GO
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblPackages') AND name='SetupFee')
    ALTER TABLE dbo.tblPackages ADD SetupFee DECIMAL(10,2) NOT NULL CONSTRAINT DF_Packages_SetupFee DEFAULT 0
GO
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblPackages') AND name='TrialDays')
    ALTER TABLE dbo.tblPackages ADD TrialDays INT NOT NULL CONSTRAINT DF_Packages_TrialDays DEFAULT 0
GO
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblPackages') AND name='IsPublic')
    ALTER TABLE dbo.tblPackages ADD IsPublic BIT NOT NULL CONSTRAINT DF_Packages_IsPublic DEFAULT 1
GO

PRINT 'tblPackages — עמודות עודכנו'
GO

-- ============================================================
-- tblPackageProducts — מיפוי מוצרים ↔ חבילות (חדש)
-- ============================================================
IF NOT EXISTS (SELECT 1 FROM sys.tables WHERE object_id = OBJECT_ID(N'dbo.tblPackageProducts'))
BEGIN
    CREATE TABLE dbo.tblPackageProducts (
        PackageProductID  INT       NOT NULL IDENTITY(1,1) CONSTRAINT PK_tblPackageProducts PRIMARY KEY,
        PackageID         INT       NOT NULL,
        ProductID         INT       NOT NULL,
        IsIncluded        BIT       NOT NULL CONSTRAINT DF_PkgProd_IsIncluded DEFAULT 1,
        Quantity          INT       NOT NULL CONSTRAINT DF_PkgProd_Quantity   DEFAULT 1,
        CreatedAt         DATETIME2 NOT NULL CONSTRAINT DF_PkgProd_CreatedAt  DEFAULT GETDATE(),

        CONSTRAINT UQ_tblPackageProducts        UNIQUE (PackageID, ProductID),
        CONSTRAINT FK_tblPackageProducts_Package FOREIGN KEY (PackageID) REFERENCES dbo.tblPackages(PackageID),
        CONSTRAINT FK_tblPackageProducts_Product FOREIGN KEY (ProductID) REFERENCES dbo.tblProducts(ProductID)
    )
    PRINT 'tblPackageProducts — נוצרה'
END
ELSE
    PRINT 'tblPackageProducts — כבר קיימת, דילוג'
GO

-- ============================================================
-- tblCustomerSubscriptions — מנויי לקוחות (חדש)
-- ============================================================
IF NOT EXISTS (SELECT 1 FROM sys.tables WHERE object_id = OBJECT_ID(N'dbo.tblCustomerSubscriptions'))
BEGIN
    CREATE TABLE dbo.tblCustomerSubscriptions (
        SubscriptionID      INT            NOT NULL IDENTITY(1,1) CONSTRAINT PK_tblCustomerSubscriptions PRIMARY KEY,
        TenantID            INT            NOT NULL,
        CustomerID          INT            NOT NULL,
        PackageID           INT            NULL,
        ProductID           INT            NULL,
        BillingCycle        VARCHAR(10)    NOT NULL CONSTRAINT DF_Sub_BillingCycle    DEFAULT 'MONTHLY',
        SubscriptionStatus  VARCHAR(15)    NOT NULL CONSTRAINT DF_Sub_Status          DEFAULT 'TRIAL',
        StartDate           DATE           NOT NULL CONSTRAINT DF_Sub_StartDate       DEFAULT GETDATE(),
        EndDate             DATE           NULL,
        TrialEndDate        DATE           NULL,
        PricePaid           DECIMAL(10,2)  NOT NULL CONSTRAINT DF_Sub_PricePaid       DEFAULT 0,
        Notes               NVARCHAR(500)  NOT NULL CONSTRAINT DF_Sub_Notes           DEFAULT '',
        IsActive            BIT            NOT NULL CONSTRAINT DF_Sub_IsActive        DEFAULT 1,
        CreatedAt           DATETIME2      NOT NULL CONSTRAINT DF_Sub_CreatedAt       DEFAULT GETDATE(),
        UpdatedAt           DATETIME2      NOT NULL CONSTRAINT DF_Sub_UpdatedAt       DEFAULT GETDATE(),

        CONSTRAINT CK_tblCustomerSubscriptions_BillingCycle
            CHECK (BillingCycle IN ('MONTHLY','ANNUAL')),
        CONSTRAINT CK_tblCustomerSubscriptions_Status
            CHECK (SubscriptionStatus IN ('TRIAL','ACTIVE','SUSPENDED','CANCELLED')),
        CONSTRAINT FK_tblSub_Tenant   FOREIGN KEY (TenantID)   REFERENCES dbo.tblTenants(TenantID),
        CONSTRAINT FK_tblSub_Customer FOREIGN KEY (CustomerID) REFERENCES dbo.tblCustomers(CustomerID),
        CONSTRAINT FK_tblSub_Package  FOREIGN KEY (PackageID)  REFERENCES dbo.tblPackages(PackageID),
        CONSTRAINT FK_tblSub_Product  FOREIGN KEY (ProductID)  REFERENCES dbo.tblProducts(ProductID)
    )
    PRINT 'tblCustomerSubscriptions — נוצרה'
END
ELSE
    PRINT 'tblCustomerSubscriptions — כבר קיימת, דילוג'
GO

-- ============================================================
-- SEED DATA — קטגוריות (TenantID=0 = פלטפורמה)
-- ============================================================
IF NOT EXISTS (SELECT 1 FROM dbo.tblProductCategories WHERE CategoryCode='BIZ_MGMT' AND TenantID=0)
BEGIN
    SET IDENTITY_INSERT dbo.tblProductCategories ON

    INSERT INTO dbo.tblProductCategories (CategoryID, TenantID, CategoryCode, CategoryName, ColorHex, IconName, SortOrder)
    VALUES
        (1, 0, 'BIZ_MGMT',  N'ניהול עסקי',       '#0D47FF', 'pi-briefcase',  1),
        (2, 0, 'FINANCE',   N'כלים פיננסיים',     '#059669', 'pi-wallet',     2),
        (3, 0, 'SUPPORT',   N'תמיכה ושירות',      '#f97316', 'pi-headphones', 3),
        (4, 0, 'ANALYTICS', N'דוחות וניתוח',      '#7c3aed', 'pi-chart-bar',  4)

    SET IDENTITY_INSERT dbo.tblProductCategories OFF
    DBCC CHECKIDENT('dbo.tblProductCategories', RESEED, 100000)

    PRINT 'tblProductCategories — seed data הוכנס'
END
GO

-- ============================================================
-- SEED DATA — מוצרים לדוגמה (TenantID = TenantID של הארגון הראשון)
-- ============================================================
DECLARE @TenantID INT = (SELECT TOP 1 TenantID FROM dbo.tblTenants WHERE TenantID > 0 ORDER BY TenantID)

IF @TenantID IS NOT NULL AND NOT EXISTS (SELECT 1 FROM dbo.tblProducts WHERE TenantID=@TenantID AND ProductCode='CRM_BASIC')
BEGIN
    -- נקה נתוני placeholder ישנים (ProductID 1-3, TenantID=0)
    DELETE FROM dbo.tblProducts WHERE TenantID=0

    SET IDENTITY_INSERT dbo.tblProducts ON

    INSERT INTO dbo.tblProducts
        (ProductID, TenantID, CategoryID, ProductCode, ProductName, ShortDescription,
         PricingModel, PriceMonthly, PriceAnnual, SetupFee, TrialDays,
         MaxUsers, ColorHex, IconName, ProductStatus, IsPublic, SortOrder)
    VALUES
        (100001, @TenantID, 1, 'CRM_BASIC',   N'מערכת CRM',               N'ניהול לקוחות ולידים לעסק קטן',              'PER_USER', 49,  490,   0,   14, 5,    '#0D47FF', 'pi-users',        'ACTIVE', 1, 1),
        (100002, @TenantID, 1, 'CRM_PRO',     N'מערכת CRM Pro',            N'ניהול לקוחות מתקדם עם אוטומציה',            'PER_USER', 89,  890,   0,   14, 25,   '#0D47FF', 'pi-users',        'ACTIVE', 1, 2),
        (100003, @TenantID, 1, 'HR_MODULE',   N'מודול משאבי אנוש',         N'ניהול עובדים, נוכחות וחופשות',              'FLAT',     299, 2990,  500, 14, NULL, '#7c3aed', 'pi-id-card',      'ACTIVE', 1, 3),
        (100004, @TenantID, 2, 'BILLING',     N'מערכת חיוב וחשבוניות',     N'הפקת חשבוניות, קבלות וניהול תשלומים',       'FLAT',     199, 1990,  0,   14, NULL, '#059669', 'pi-receipt',      'ACTIVE', 1, 4),
        (100005, @TenantID, 2, 'PAYROLL',     N'חישוב שכר',                N'חישוב שכר אוטומטי לפי שעות ותנאים',         'PER_USER', 29,  290,   0,   14, NULL, '#059669', 'pi-calculator',   'ACTIVE', 1, 5),
        (100006, @TenantID, 3, 'HELPDESK',    N'מערכת קריאות שירות',       N'ניהול פניות ותמיכה בלקוחות',                'FLAT',     149, 1490,  0,   14, NULL, '#f97316', 'pi-headphones',   'ACTIVE', 1, 6),
        (100007, @TenantID, 3, 'LIVE_CHAT',   N'צ׳אט חי עם לקוחות',        N'שיחות בזמן אמת עם לקוחות באתר',             'FLAT',     99,  990,   0,   30, NULL, '#f97316', 'pi-comments',     'DRAFT',  1, 7),
        (100008, @TenantID, 4, 'REPORTS',     N'מודול דוחות',              N'דוחות מובנים וייצוא לאקסל/PDF',             'FLAT',     79,  790,   0,   14, NULL, '#7c3aed', 'pi-chart-line',   'ACTIVE', 1, 8),
        (100009, @TenantID, 4, 'BI_DASH',     N'לוח בקרה BI',              N'ניתוח נתונים ו-KPIs בזמן אמת',              'FLAT',     249, 2490,  0,   30, NULL, '#7c3aed', 'pi-chart-bar',    'ACTIVE', 1, 9)

    SET IDENTITY_INSERT dbo.tblProducts OFF
    DBCC CHECKIDENT('dbo.tblProducts', RESEED, 200000)

    PRINT 'tblProducts — seed data הוכנס'
END
GO

-- ============================================================
-- SEED DATA — חבילות
-- ============================================================
DECLARE @TenantID2 INT = (SELECT TOP 1 TenantID FROM dbo.tblTenants WHERE TenantID > 0 ORDER BY TenantID)

IF @TenantID2 IS NOT NULL AND NOT EXISTS (SELECT 1 FROM dbo.tblPackages WHERE TenantID=@TenantID2 AND PackageCode='STARTER')
BEGIN
    -- נקה נתוני placeholder ישנים (TenantID=0)
    DELETE FROM dbo.tblPackageProducts WHERE PackageID IN (SELECT PackageID FROM dbo.tblPackages WHERE TenantID=0)
    DELETE FROM dbo.tblPackages WHERE TenantID=0

    INSERT INTO dbo.tblPackages
        (TenantID, PackageCode, PackageName, Description, PriceMonthly, PriceAnnual, SetupFee, TrialDays, MaxUsers, IsPublic, SortOrder)
    VALUES
        (@TenantID2, 'STARTER',      N'חבילת סטארטר',  N'כניסה קלה לעסק קטן — CRM + חיוב + שירות',         349,  3490,  0,   14, 3,    1, 1),
        (@TenantID2, 'BUSINESS',     N'חבילת עסקית',   N'לעסק בצמיחה — CRM Pro + HR + חיוב + דוחות',        799,  7990,  0,   14, 10,   1, 2),
        (@TenantID2, 'ENTERPRISE',   N'חבילה ארגונית', N'לארגון גדול — כל המוצרים כלולים ללא הגבלה',         1799, 17990, 0,   30, NULL, 1, 3),
        (@TenantID2, 'FINANCE_ONLY', N'חבילה פיננסית', N'ניהול כספים בלבד — חיוב + שכר + דוחות',            299,  2990,  0,   14, 5,    1, 4)

    PRINT 'tblPackages — seed data הוכנס'
END
GO

-- ============================================================
-- SEED DATA — מיפוי מוצרים לחבילות
-- ============================================================
DECLARE @Starter    INT = (SELECT PackageID FROM dbo.tblPackages WHERE PackageCode='STARTER')
DECLARE @Business   INT = (SELECT PackageID FROM dbo.tblPackages WHERE PackageCode='BUSINESS')
DECLARE @Enterprise INT = (SELECT PackageID FROM dbo.tblPackages WHERE PackageCode='ENTERPRISE')
DECLARE @Finance    INT = (SELECT PackageID FROM dbo.tblPackages WHERE PackageCode='FINANCE_ONLY')

IF @Starter IS NOT NULL AND NOT EXISTS (SELECT 1 FROM dbo.tblPackageProducts WHERE PackageID=@Starter)
BEGIN
    INSERT INTO dbo.tblPackageProducts (PackageID, ProductID, IsIncluded) VALUES
        -- STARTER: CRM Basic + Billing + Helpdesk
        (@Starter,    100001, 1), (@Starter,    100004, 1), (@Starter,    100006, 1),
        -- BUSINESS: CRM Pro + HR + Billing + Helpdesk + Reports
        (@Business,   100002, 1), (@Business,   100003, 1), (@Business,   100004, 1),
        (@Business,   100006, 1), (@Business,   100008, 1),
        -- ENTERPRISE: הכל
        (@Enterprise, 100002, 1), (@Enterprise, 100003, 1), (@Enterprise, 100004, 1),
        (@Enterprise, 100005, 1), (@Enterprise, 100006, 1), (@Enterprise, 100007, 1),
        (@Enterprise, 100008, 1), (@Enterprise, 100009, 1),
        -- FINANCE: Billing + Payroll + Reports
        (@Finance,    100004, 1), (@Finance,    100005, 1), (@Finance,    100008, 1)

    PRINT 'tblPackageProducts — seed data הוכנס'
END
GO

-- ============================================================
-- אימות סופי
-- ============================================================
SELECT 'tblProductCategories' tbl, COUNT(*) cnt FROM dbo.tblProductCategories
UNION ALL SELECT 'tblProducts',            COUNT(*) FROM dbo.tblProducts
UNION ALL SELECT 'tblPackages',            COUNT(*) FROM dbo.tblPackages
UNION ALL SELECT 'tblPackageProducts',     COUNT(*) FROM dbo.tblPackageProducts
UNION ALL SELECT 'tblCustomerSubscriptions', COUNT(*) FROM dbo.tblCustomerSubscriptions
GO
