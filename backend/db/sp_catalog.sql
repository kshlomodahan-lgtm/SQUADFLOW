-- ════════════════════════════════════════════════════════════════════════
--  sp_catalog.sql — Stored Procedures: Products Catalog System
--  Database: ProfitsCRM
--  Tables:   tblProductCategories, tblProducts, tblPackages, tblPackageProducts
--  Created:  2026-06-08
-- ════════════════════════════════════════════════════════════════════════

USE [ProfitsCRM];
GO

-- ════════════════════════════════════════════════════════════════════════
--  1. sp_CategoryList
--     Returns all categories for the tenant (including shared TenantID=0)
--     with a count of active products per category.
-- ════════════════════════════════════════════════════════════════════════
CREATE OR ALTER PROCEDURE dbo.sp_CategoryList
  @TenantID INT
AS
BEGIN
  SET NOCOUNT ON;

  SELECT
    c.CategoryID,
    c.TenantID,
    c.CategoryCode,
    c.CategoryName,
    c.ColorHex,
    c.IconName,
    c.SortOrder,
    c.IsActive,
    COUNT(p.ProductID) AS ProductCount,
    t.CompanyName      AS TenantName
  FROM dbo.tblProductCategories c
  LEFT JOIN dbo.tblProducts p
    ON  p.CategoryID = c.CategoryID
    AND p.IsActive   = 1
  LEFT JOIN dbo.tblTenants t
    ON  t.TenantID   = c.TenantID
  WHERE c.TenantID IN (0, @TenantID)
  GROUP BY
    c.CategoryID,
    c.TenantID,
    c.CategoryCode,
    c.CategoryName,
    c.ColorHex,
    c.IconName,
    c.SortOrder,
    c.IsActive,
    t.CompanyName
  ORDER BY c.SortOrder, c.CategoryName;
END;
GO


-- ════════════════════════════════════════════════════════════════════════
--  2. sp_CategorySave
--     INSERT (CategoryID=0) or UPDATE an existing category.
--     Validates unique CategoryCode per TenantID.
--     @ResultCode: 0=success, 1=duplicate code, -1=not found for update
-- ════════════════════════════════════════════════════════════════════════
CREATE OR ALTER PROCEDURE dbo.sp_CategorySave
  @CategoryID     INT,
  @TenantID       INT,
  @CategoryCode   VARCHAR(30),
  @CategoryName   NVARCHAR(100),
  @ColorHex       VARCHAR(7),
  @IconName       VARCHAR(50),
  @SortOrder      INT,
  @IsActive       BIT,
  @ResultCode     INT           OUTPUT,
  @ResultMessage  NVARCHAR(200) OUTPUT,
  @NewID          INT           OUTPUT
AS
BEGIN
  SET NOCOUNT ON;

  SET @ResultCode = 0;
  SET @ResultMessage = N'';
  SET @NewID = 0;

  -- ולידציה: קוד קטגוריה ייחודי לאותו ארגון (מחוץ לרשומה הנוכחית)
  IF EXISTS (
    SELECT 1
    FROM dbo.tblProductCategories
    WHERE TenantID    = @TenantID
      AND CategoryCode = @CategoryCode
      AND CategoryID  <> @CategoryID
  )
  BEGIN
    SET @ResultCode    = 1;
    SET @ResultMessage = N'קוד הקטגוריה כבר קיים בארגון זה';
    RETURN;
  END;

  IF @CategoryID = 0
  BEGIN
    -- INSERT
    INSERT INTO dbo.tblProductCategories
      (TenantID, CategoryCode, CategoryName, ColorHex, IconName, SortOrder, IsActive, CreatedAt, UpdatedAt)
    VALUES
      (@TenantID, @CategoryCode, @CategoryName, @ColorHex, @IconName, @SortOrder, @IsActive, GETDATE(), GETDATE());

    SET @NewID         = SCOPE_IDENTITY();
    SET @ResultMessage = N'הקטגוריה נוצרה בהצלחה';
  END
  ELSE
  BEGIN
    -- ולידציה: הרשומה קיימת ושייכת לאותו ארגון
    IF NOT EXISTS (
      SELECT 1
      FROM dbo.tblProductCategories
      WHERE CategoryID = @CategoryID
        AND TenantID   = @TenantID
    )
    BEGIN
      SET @ResultCode    = -1;
      SET @ResultMessage = N'הקטגוריה לא נמצאה';
      RETURN;
    END;

    -- UPDATE
    UPDATE dbo.tblProductCategories
    SET
      CategoryCode = @CategoryCode,
      CategoryName = @CategoryName,
      ColorHex     = @ColorHex,
      IconName     = @IconName,
      SortOrder    = @SortOrder,
      IsActive     = @IsActive,
      UpdatedAt    = GETDATE()
    WHERE CategoryID = @CategoryID
      AND TenantID   = @TenantID;

    SET @NewID         = @CategoryID;
    SET @ResultMessage = N'הקטגוריה עודכנה בהצלחה';
  END;
END;
GO


-- ════════════════════════════════════════════════════════════════════════
--  3. sp_ProductList
--     Returns products for the tenant with optional free-text search.
--     Includes CategoryName via LEFT JOIN.
-- ════════════════════════════════════════════════════════════════════════
CREATE OR ALTER PROCEDURE dbo.sp_ProductList
  @TenantID   INT,
  @SearchText NVARCHAR(100) = NULL
AS
BEGIN
  SET NOCOUNT ON;

  SELECT
    p.ProductID,
    p.TenantID,
    p.CategoryID,
    c.CategoryName,
    p.ProductCode,
    p.ProductName,
    p.ShortDescription,
    p.PricingModel,
    p.PriceMonthly,
    p.PriceAnnual,
    p.SetupFee,
    p.TrialDays,
    p.ProductVersion,
    p.DeploymentType,
    p.ColorHex,
    p.IconName,
    p.ProductStatus,
    p.IsPublic,
    p.SortOrder,
    p.IsActive
  FROM dbo.tblProducts p
  LEFT JOIN dbo.tblProductCategories c
    ON c.CategoryID = p.CategoryID
  WHERE p.TenantID = @TenantID
    AND (
      @SearchText IS NULL
      OR LTRIM(RTRIM(@SearchText)) = N''
      OR p.ProductName      LIKE N'%' + @SearchText + N'%'
      OR p.ProductCode      LIKE N'%' + @SearchText + N'%'
      OR p.ShortDescription LIKE N'%' + @SearchText + N'%'
    )
  ORDER BY p.SortOrder, p.ProductName;
END;
GO


-- ════════════════════════════════════════════════════════════════════════
--  4. sp_ProductGet
--     Returns a single full product record + CategoryName.
-- ════════════════════════════════════════════════════════════════════════
CREATE OR ALTER PROCEDURE dbo.sp_ProductGet
  @ProductID INT,
  @TenantID  INT
AS
BEGIN
  SET NOCOUNT ON;

  SELECT
    p.ProductID,
    p.TenantID,
    p.CategoryID,
    c.CategoryName,
    p.ProductCode,
    p.ProductName,
    p.ShortDescription,
    p.Description,
    p.ProductVersion,
    p.PricingModel,
    p.PriceMonthly,
    p.PriceAnnual,
    p.SetupFee,
    p.TrialDays,
    p.MaxUsers,
    p.MaxStorage_GB,
    p.MaxRecords,
    p.ApiCallsPerMonth,
    p.ColorHex,
    p.IconName,
    p.LogoUrl,
    p.DeploymentType,
    p.SupportedLanguages,
    p.DocumentationUrl,
    p.ProductStatus,
    p.IsPublic,
    p.LaunchDate,
    p.EndOfLifeDate,
    p.SortOrder,
    p.IsActive,
    p.CreatedAt,
    p.UpdatedAt
  FROM dbo.tblProducts p
  LEFT JOIN dbo.tblProductCategories c
    ON c.CategoryID = p.CategoryID
  WHERE p.ProductID = @ProductID
    AND p.TenantID  = @TenantID;
END;
GO


-- ════════════════════════════════════════════════════════════════════════
--  5. sp_ProductSave
--     INSERT (ProductID=0) or UPDATE a product.
--     Validates unique ProductCode per TenantID.
--     MaxUsers / MaxStorage_GB / MaxRecords / ApiCallsPerMonth:
--       value=0 → stored as NULL.
--     CategoryID=0 → stored as NULL.
--     @ResultCode: 0=success, 1=duplicate code, -1=not found for update
-- ════════════════════════════════════════════════════════════════════════
CREATE OR ALTER PROCEDURE dbo.sp_ProductSave
  @ProductID           INT,
  @TenantID            INT,
  @CategoryID          INT,
  @ProductCode         VARCHAR(30),
  @ProductName         NVARCHAR(200),
  @ShortDescription    NVARCHAR(255),
  @Description         NVARCHAR(MAX),
  @ProductVersion      VARCHAR(20),
  @PricingModel        VARCHAR(10),
  @PriceMonthly        DECIMAL(10,2),
  @PriceAnnual         DECIMAL(10,2),
  @SetupFee            DECIMAL(10,2),
  @TrialDays           INT,
  @MaxUsers            INT,
  @MaxStorage_GB       INT,
  @MaxRecords          INT,
  @ApiCallsPerMonth    INT,
  @ColorHex            VARCHAR(7),
  @IconName            VARCHAR(50),
  @LogoUrl             NVARCHAR(255),
  @DeploymentType      VARCHAR(15),
  @SupportedLanguages  NVARCHAR(100),
  @DocumentationUrl    NVARCHAR(255),
  @ProductStatus       VARCHAR(15),
  @IsPublic            BIT,
  @LaunchDate          DATE,
  @EndOfLifeDate       DATE,
  @SortOrder           INT,
  @IsActive            BIT,
  @ResultCode          INT           OUTPUT,
  @ResultMessage       NVARCHAR(200) OUTPUT,
  @NewID               INT           OUTPUT
AS
BEGIN
  SET NOCOUNT ON;

  SET @ResultCode    = 0;
  SET @ResultMessage = N'';
  SET @NewID         = 0;

  -- המרת ערכי 0 ל-NULL עבור שדות אופציונאליים
  DECLARE @vCategoryID       INT           = NULLIF(@CategoryID,       0);
  DECLARE @vMaxUsers         INT           = NULLIF(@MaxUsers,         0);
  DECLARE @vMaxStorage_GB    INT           = NULLIF(@MaxStorage_GB,    0);
  DECLARE @vMaxRecords       INT           = NULLIF(@MaxRecords,       0);
  DECLARE @vApiCallsPerMonth INT           = NULLIF(@ApiCallsPerMonth, 0);
  DECLARE @vLaunchDate       DATE          = @LaunchDate;
  DECLARE @vEndOfLifeDate    DATE          = @EndOfLifeDate;

  -- ולידציה: קוד מוצר ייחודי לאותו ארגון (מחוץ לרשומה הנוכחית)
  IF EXISTS (
    SELECT 1
    FROM dbo.tblProducts
    WHERE TenantID   = @TenantID
      AND ProductCode = @ProductCode
      AND ProductID  <> @ProductID
  )
  BEGIN
    SET @ResultCode    = 1;
    SET @ResultMessage = N'קוד המוצר כבר קיים בארגון זה';
    RETURN;
  END;

  IF @ProductID = 0
  BEGIN
    -- INSERT
    INSERT INTO dbo.tblProducts
      (TenantID, CategoryID, ProductCode, ProductName, ShortDescription, Description,
       ProductVersion, PricingModel, PriceMonthly, PriceAnnual, SetupFee, TrialDays,
       MaxUsers, MaxStorage_GB, MaxRecords, ApiCallsPerMonth,
       ColorHex, IconName, LogoUrl, DeploymentType, SupportedLanguages, DocumentationUrl,
       ProductStatus, IsPublic, LaunchDate, EndOfLifeDate, SortOrder, IsActive,
       CreatedAt, UpdatedAt)
    VALUES
      (@TenantID, @vCategoryID, @ProductCode, @ProductName, @ShortDescription, @Description,
       @ProductVersion, @PricingModel, @PriceMonthly, @PriceAnnual, @SetupFee, @TrialDays,
       @vMaxUsers, @vMaxStorage_GB, @vMaxRecords, @vApiCallsPerMonth,
       @ColorHex, @IconName, @LogoUrl, @DeploymentType, @SupportedLanguages, @DocumentationUrl,
       @ProductStatus, @IsPublic, @vLaunchDate, @vEndOfLifeDate, @SortOrder, @IsActive,
       GETDATE(), GETDATE());

    SET @NewID         = SCOPE_IDENTITY();
    SET @ResultMessage = N'המוצר נוצר בהצלחה';
  END
  ELSE
  BEGIN
    -- ולידציה: הרשומה קיימת ושייכת לאותו ארגון
    IF NOT EXISTS (
      SELECT 1
      FROM dbo.tblProducts
      WHERE ProductID = @ProductID
        AND TenantID  = @TenantID
    )
    BEGIN
      SET @ResultCode    = -1;
      SET @ResultMessage = N'המוצר לא נמצא';
      RETURN;
    END;

    -- UPDATE
    UPDATE dbo.tblProducts
    SET
      CategoryID          = @vCategoryID,
      ProductCode         = @ProductCode,
      ProductName         = @ProductName,
      ShortDescription    = @ShortDescription,
      Description         = @Description,
      ProductVersion      = @ProductVersion,
      PricingModel        = @PricingModel,
      PriceMonthly        = @PriceMonthly,
      PriceAnnual         = @PriceAnnual,
      SetupFee            = @SetupFee,
      TrialDays           = @TrialDays,
      MaxUsers            = @vMaxUsers,
      MaxStorage_GB       = @vMaxStorage_GB,
      MaxRecords          = @vMaxRecords,
      ApiCallsPerMonth    = @vApiCallsPerMonth,
      ColorHex            = @ColorHex,
      IconName            = @IconName,
      LogoUrl             = @LogoUrl,
      DeploymentType      = @DeploymentType,
      SupportedLanguages  = @SupportedLanguages,
      DocumentationUrl    = @DocumentationUrl,
      ProductStatus       = @ProductStatus,
      IsPublic            = @IsPublic,
      LaunchDate          = @vLaunchDate,
      EndOfLifeDate       = @vEndOfLifeDate,
      SortOrder           = @SortOrder,
      IsActive            = @IsActive,
      UpdatedAt           = GETDATE()
    WHERE ProductID = @ProductID
      AND TenantID  = @TenantID;

    SET @NewID         = @ProductID;
    SET @ResultMessage = N'המוצר עודכן בהצלחה';
  END;
END;
GO


-- ════════════════════════════════════════════════════════════════════════
--  6. sp_PackageList
--     Returns packages for the tenant with count of associated products.
-- ════════════════════════════════════════════════════════════════════════
CREATE OR ALTER PROCEDURE dbo.sp_PackageList
  @TenantID INT
AS
BEGIN
  SET NOCOUNT ON;

  SELECT
    pk.PackageID,
    pk.TenantID,
    pk.PackageCode,
    pk.PackageName,
    pk.Description,
    pk.PriceMonthly,
    pk.PriceAnnual,
    pk.SetupFee,
    pk.TrialDays,
    pk.MaxUsers,
    pk.IsPublic,
    pk.SortOrder,
    pk.IsActive,
    COUNT(pp.ProductID) AS ProductCount
  FROM dbo.tblPackages pk
  LEFT JOIN dbo.tblPackageProducts pp
    ON pp.PackageID = pk.PackageID
  WHERE pk.TenantID = @TenantID
  GROUP BY
    pk.PackageID,
    pk.TenantID,
    pk.PackageCode,
    pk.PackageName,
    pk.Description,
    pk.PriceMonthly,
    pk.PriceAnnual,
    pk.SetupFee,
    pk.TrialDays,
    pk.MaxUsers,
    pk.IsPublic,
    pk.SortOrder,
    pk.IsActive
  ORDER BY pk.SortOrder, pk.PackageName;
END;
GO


-- ════════════════════════════════════════════════════════════════════════
--  7. sp_PackageGet
--     Returns TWO result sets:
--       RS1 — full package header row
--       RS2 — products linked to this package (via tblPackageProducts)
-- ════════════════════════════════════════════════════════════════════════
CREATE OR ALTER PROCEDURE dbo.sp_PackageGet
  @PackageID INT,
  @TenantID  INT
AS
BEGIN
  SET NOCOUNT ON;

  -- Result Set 1: Package header (all columns)
  SELECT
    pk.PackageID,
    pk.TenantID,
    pk.ProductID,
    pk.PackageCode,
    pk.PackageName,
    pk.Description,
    pk.PriceMonthly,
    pk.PriceYearly,
    pk.PriceAnnual,
    pk.SetupFee,
    pk.TrialDays,
    pk.MaxUsers,
    pk.MaxTickets,
    pk.MaxCustomers,
    pk.MaxStorage_GB,
    pk.IsPublic,
    pk.SortOrder,
    pk.IsActive,
    pk.CreatedAt,
    pk.UpdatedAt
  FROM dbo.tblPackages pk
  WHERE pk.PackageID = @PackageID
    AND pk.TenantID  = @TenantID;

  -- Result Set 2: Products associated with this package
  SELECT
    pp.ProductID,
    p.ProductName,
    p.ProductCode,
    pp.IsIncluded,
    pp.Quantity
  FROM dbo.tblPackageProducts pp
  JOIN dbo.tblProducts p
    ON p.ProductID = pp.ProductID
  WHERE pp.PackageID = @PackageID
  ORDER BY p.ProductName;
END;
GO


-- ════════════════════════════════════════════════════════════════════════
--  8. sp_PackageSave
--     INSERT (PackageID=0) or UPDATE a package, then syncs the product
--     list in tblPackageProducts using @ProductIDs (comma-separated).
--     @ProductIDs = '' → removes all products from the package.
--     MaxUsers=0 → stored as NULL.
--     @ResultCode: 0=success, 1=duplicate code, -1=not found for update
-- ════════════════════════════════════════════════════════════════════════
CREATE OR ALTER PROCEDURE dbo.sp_PackageSave
  @PackageID      INT,
  @TenantID       INT,
  @PackageCode    VARCHAR(30),
  @PackageName    NVARCHAR(200),
  @Description    NVARCHAR(MAX),
  @PriceMonthly   DECIMAL(10,2),
  @PriceAnnual    DECIMAL(10,2),
  @SetupFee       DECIMAL(10,2),
  @TrialDays      INT,
  @MaxUsers       INT,
  @IsPublic       BIT,
  @SortOrder      INT,
  @IsActive       BIT,
  @ProductIDs     NVARCHAR(MAX),
  @ResultCode     INT           OUTPUT,
  @ResultMessage  NVARCHAR(200) OUTPUT,
  @NewID          INT           OUTPUT
AS
BEGIN
  SET NOCOUNT ON;

  SET @ResultCode    = 0;
  SET @ResultMessage = N'';
  SET @NewID         = 0;

  -- המרת 0 ל-NULL עבור MaxUsers
  DECLARE @vMaxUsers INT = NULLIF(@MaxUsers, 0);

  -- ולידציה: קוד חבילה ייחודי לאותו ארגון (מחוץ לרשומה הנוכחית)
  IF EXISTS (
    SELECT 1
    FROM dbo.tblPackages
    WHERE TenantID   = @TenantID
      AND PackageCode = @PackageCode
      AND PackageID  <> @PackageID
  )
  BEGIN
    SET @ResultCode    = 1;
    SET @ResultMessage = N'קוד החבילה כבר קיים בארגון זה';
    RETURN;
  END;

  IF @PackageID = 0
  BEGIN
    -- INSERT
    INSERT INTO dbo.tblPackages
      (TenantID, PackageCode, PackageName, Description,
       PriceMonthly, PriceAnnual, SetupFee, TrialDays,
       MaxUsers, IsPublic, SortOrder, IsActive,
       CreatedAt, UpdatedAt)
    VALUES
      (@TenantID, @PackageCode, @PackageName, @Description,
       @PriceMonthly, @PriceAnnual, @SetupFee, @TrialDays,
       @vMaxUsers, @IsPublic, @SortOrder, @IsActive,
       GETDATE(), GETDATE());

    SET @NewID         = SCOPE_IDENTITY();
    SET @ResultMessage = N'החבילה נוצרה בהצלחה';
  END
  ELSE
  BEGIN
    -- ולידציה: הרשומה קיימת ושייכת לאותו ארגון
    IF NOT EXISTS (
      SELECT 1
      FROM dbo.tblPackages
      WHERE PackageID = @PackageID
        AND TenantID  = @TenantID
    )
    BEGIN
      SET @ResultCode    = -1;
      SET @ResultMessage = N'החבילה לא נמצאה';
      RETURN;
    END;

    -- UPDATE
    UPDATE dbo.tblPackages
    SET
      PackageCode  = @PackageCode,
      PackageName  = @PackageName,
      Description  = @Description,
      PriceMonthly = @PriceMonthly,
      PriceAnnual  = @PriceAnnual,
      SetupFee     = @SetupFee,
      TrialDays    = @TrialDays,
      MaxUsers     = @vMaxUsers,
      IsPublic     = @IsPublic,
      SortOrder    = @SortOrder,
      IsActive     = @IsActive,
      UpdatedAt    = GETDATE()
    WHERE PackageID = @PackageID
      AND TenantID  = @TenantID;

    SET @NewID         = @PackageID;
    SET @ResultMessage = N'החבילה עודכנה בהצלחה';
  END;

  -- ─── סנכרון tblPackageProducts ───────────────────────────────────────
  -- מחק את כל הקישורים הקיימים ובנה מחדש לפי @ProductIDs
  DELETE FROM dbo.tblPackageProducts
  WHERE PackageID = @NewID;

  IF @ProductIDs IS NOT NULL AND LTRIM(RTRIM(@ProductIDs)) <> N''
  BEGIN
    INSERT INTO dbo.tblPackageProducts (PackageID, ProductID, IsIncluded, Quantity, CreatedAt)
    SELECT
      @NewID,
      TRY_CAST(LTRIM(RTRIM(value)) AS INT),
      1,       -- IsIncluded = true
      1,       -- Quantity default 1
      GETDATE()
    FROM STRING_SPLIT(@ProductIDs, ',')
    WHERE TRY_CAST(LTRIM(RTRIM(value)) AS INT) IS NOT NULL
      AND TRY_CAST(LTRIM(RTRIM(value)) AS INT) > 0;
  END;
END;
GO

-- ════════════════════════════════════════════════════════════════════════
--  END OF FILE
-- ════════════════════════════════════════════════════════════════════════
