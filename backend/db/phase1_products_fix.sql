-- ============================================================
-- Phase 1 Fix — Products, Packages, Subscriptions
-- ============================================================
USE ProfitsCRM;
GO

-- ============================================================
-- Step 1: תקן tblPackages.ProductID → nullable
-- ============================================================

-- שחרר FK זמנית, שנה ל-nullable, הוסף מחדש
IF EXISTS (SELECT 1 FROM sys.foreign_keys WHERE name='FK_tblPackages_Product')
    ALTER TABLE dbo.tblPackages DROP CONSTRAINT FK_tblPackages_Product
GO

IF EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblPackages')
           AND name='ProductID' AND is_nullable=0)
    ALTER TABLE dbo.tblPackages ALTER COLUMN ProductID INT NULL
GO

IF NOT EXISTS (SELECT 1 FROM sys.foreign_keys WHERE name='FK_tblPackages_Product')
    ALTER TABLE dbo.tblPackages ADD CONSTRAINT FK_tblPackages_Product
        FOREIGN KEY (ProductID) REFERENCES dbo.tblProducts(ProductID)
GO

PRINT 'tblPackages.ProductID — שונה ל-nullable'
GO

-- ============================================================
-- Step 2: Seed Data — חבילות
-- ============================================================
DECLARE @TenantID INT = (SELECT TOP 1 TenantID FROM dbo.tblTenants WHERE TenantID > 0 ORDER BY TenantID)

IF @TenantID IS NOT NULL AND NOT EXISTS (SELECT 1 FROM dbo.tblPackages WHERE TenantID=@TenantID AND PackageCode='STARTER')
BEGIN
    INSERT INTO dbo.tblPackages
        (TenantID, PackageCode, PackageName, Description, PriceMonthly, PriceAnnual, SetupFee, TrialDays, MaxUsers, IsPublic, SortOrder)
    VALUES
        (@TenantID, 'STARTER',      N'חבילת סטארטר',  N'כניסה קלה לעסק קטן — CRM + חיוב + שירות',         349,  3490,  0, 14, 3,    1, 1),
        (@TenantID, 'BUSINESS',     N'חבילת עסקית',   N'לעסק בצמיחה — CRM Pro + HR + חיוב + דוחות',        799,  7990,  0, 14, 10,   1, 2),
        (@TenantID, 'ENTERPRISE',   N'חבילה ארגונית', N'לארגון גדול — כל המוצרים כלולים ללא הגבלה',         1799, 17990, 0, 30, NULL, 1, 3),
        (@TenantID, 'FINANCE_ONLY', N'חבילה פיננסית', N'ניהול כספים בלבד — חיוב + שכר + דוחות',            299,  2990,  0, 14, 5,    1, 4)

    PRINT 'tblPackages — seed data הוכנס'
END
ELSE
    PRINT 'tblPackages — seed data כבר קיים, דילוג'
GO

-- ============================================================
-- Step 3: Seed Data — מיפוי חבילה ↔ מוצר
-- ============================================================
DECLARE @Starter    INT = (SELECT PackageID FROM dbo.tblPackages WHERE PackageCode='STARTER')
DECLARE @Business   INT = (SELECT PackageID FROM dbo.tblPackages WHERE PackageCode='BUSINESS')
DECLARE @Enterprise INT = (SELECT PackageID FROM dbo.tblPackages WHERE PackageCode='ENTERPRISE')
DECLARE @Finance    INT = (SELECT PackageID FROM dbo.tblPackages WHERE PackageCode='FINANCE_ONLY')

IF @Starter IS NOT NULL AND NOT EXISTS (SELECT 1 FROM dbo.tblPackageProducts WHERE PackageID=@Starter)
BEGIN
    INSERT INTO dbo.tblPackageProducts (PackageID, ProductID, IsIncluded) VALUES
        (@Starter,    100001, 1),
        (@Starter,    100004, 1),
        (@Starter,    100006, 1),
        (@Business,   100002, 1),
        (@Business,   100003, 1),
        (@Business,   100004, 1),
        (@Business,   100006, 1),
        (@Business,   100008, 1),
        (@Enterprise, 100002, 1),
        (@Enterprise, 100003, 1),
        (@Enterprise, 100004, 1),
        (@Enterprise, 100005, 1),
        (@Enterprise, 100006, 1),
        (@Enterprise, 100007, 1),
        (@Enterprise, 100008, 1),
        (@Enterprise, 100009, 1),
        (@Finance,    100004, 1),
        (@Finance,    100005, 1),
        (@Finance,    100008, 1)

    PRINT 'tblPackageProducts — seed data הוכנס'
END
ELSE
    PRINT 'tblPackageProducts — seed data כבר קיים, דילוג'
GO

-- ============================================================
-- Step 4: צור tblCustomerSubscriptions עם שמות FK ייחודיים
-- ============================================================
IF NOT EXISTS (SELECT 1 FROM sys.tables WHERE object_id = OBJECT_ID(N'dbo.tblCustomerSubscriptions'))
BEGIN
    CREATE TABLE dbo.tblCustomerSubscriptions (
        SubscriptionID      INT            NOT NULL IDENTITY(1,1) CONSTRAINT PK_tblCustomerSubscriptions PRIMARY KEY,
        TenantID            INT            NOT NULL,
        CustomerID          INT            NOT NULL,
        PackageID           INT            NULL,
        ProductID           INT            NULL,
        BillingCycle        VARCHAR(10)    NOT NULL CONSTRAINT DF_CustSub_BillingCycle    DEFAULT 'MONTHLY',
        SubscriptionStatus  VARCHAR(15)    NOT NULL CONSTRAINT DF_CustSub_Status          DEFAULT 'TRIAL',
        StartDate           DATE           NOT NULL CONSTRAINT DF_CustSub_StartDate       DEFAULT GETDATE(),
        EndDate             DATE           NULL,
        TrialEndDate        DATE           NULL,
        PricePaid           DECIMAL(10,2)  NOT NULL CONSTRAINT DF_CustSub_PricePaid       DEFAULT 0,
        Notes               NVARCHAR(500)  NOT NULL CONSTRAINT DF_CustSub_Notes           DEFAULT '',
        IsActive            BIT            NOT NULL CONSTRAINT DF_CustSub_IsActive        DEFAULT 1,
        CreatedAt           DATETIME2      NOT NULL CONSTRAINT DF_CustSub_CreatedAt       DEFAULT GETDATE(),
        UpdatedAt           DATETIME2      NOT NULL CONSTRAINT DF_CustSub_UpdatedAt       DEFAULT GETDATE(),

        CONSTRAINT CK_CustSub_BillingCycle
            CHECK (BillingCycle IN ('MONTHLY','ANNUAL')),
        CONSTRAINT CK_CustSub_Status
            CHECK (SubscriptionStatus IN ('TRIAL','ACTIVE','SUSPENDED','CANCELLED')),
        CONSTRAINT FK_CustSub_Tenant   FOREIGN KEY (TenantID)   REFERENCES dbo.tblTenants(TenantID),
        CONSTRAINT FK_CustSub_Customer FOREIGN KEY (CustomerID) REFERENCES dbo.tblCustomers(CustomerID),
        CONSTRAINT FK_CustSub_Package  FOREIGN KEY (PackageID)  REFERENCES dbo.tblPackages(PackageID),
        CONSTRAINT FK_CustSub_Product  FOREIGN KEY (ProductID)  REFERENCES dbo.tblProducts(ProductID)
    )
    PRINT 'tblCustomerSubscriptions — נוצרה'
END
ELSE
    PRINT 'tblCustomerSubscriptions — כבר קיימת, דילוג'
GO

-- ============================================================
-- אימות סופי
-- ============================================================
SELECT 'tblProductCategories'    tbl, COUNT(*) cnt FROM dbo.tblProductCategories
UNION ALL SELECT 'tblProducts',           COUNT(*) FROM dbo.tblProducts WHERE TenantID > 0
UNION ALL SELECT 'tblPackages (new)',      COUNT(*) FROM dbo.tblPackages WHERE TenantID > 0 AND PackageCode IN ('STARTER','BUSINESS','ENTERPRISE','FINANCE_ONLY')
UNION ALL SELECT 'tblPackageProducts',    COUNT(*) FROM dbo.tblPackageProducts
UNION ALL SELECT 'tblCustomerSubscriptions', COUNT(*) FROM dbo.tblCustomerSubscriptions
GO
