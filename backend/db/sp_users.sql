-- ════════════════════════════════════════════════════
--  sp_UserGet — שליפת משתמש בודד לפי UserID
-- ════════════════════════════════════════════════════
CREATE OR ALTER PROCEDURE dbo.sp_UserGet
  @UserID INT
AS
BEGIN
  SET NOCOUNT ON;
  SELECT u.UserID, u.TenantID, u.Username,
         u.FirstName, u.LastName,
         u.FirstName + N' ' + u.LastName AS FullName,
         u.Email, u.RoleID, u.IsActive,
         u.MustChangePass, u.LastLoginAt,
         ur.RoleName,
         t.TenantCode, t.CompanyName AS OrgName
  FROM   dbo.tblUsers     u
  JOIN   dbo.tblUserRoles ur ON ur.RoleID  = u.RoleID
  JOIN   dbo.tblTenants   t  ON t.TenantID = u.TenantID
  WHERE  u.UserID = @UserID AND u.UserID > 0;
END;
GO

-- ════════════════════════════════════════════════════
--  sp_UserCreate — יצירת משתמש חדש
-- ════════════════════════════════════════════════════
CREATE OR ALTER PROCEDURE dbo.sp_UserCreate
  @TenantID      INT,
  @FirstName     NVARCHAR(100),
  @LastName      NVARCHAR(100),
  @Username      VARCHAR(80),
  @Email         NVARCHAR(150),
  @PasswordHash  VARCHAR(255),
  @PasswordSalt  VARCHAR(100),
  @RoleID        INT,
  @NewUserID     INT           OUTPUT,
  @ResultCode    INT           OUTPUT,
  @ResultMessage NVARCHAR(200) OUTPUT
AS
BEGIN
  SET NOCOUNT ON;
  SET @NewUserID = 0;

  -- ולידציה: שם משתמש ייחודי בארגון
  IF EXISTS (
    SELECT 1 FROM dbo.tblUsers
    WHERE TenantID = @TenantID AND Username = @Username AND UserID > 0
  )
  BEGIN
    SET @ResultCode = 1;
    SET @ResultMessage = N'שם המשתמש כבר קיים בארגון';
    RETURN;
  END;

  -- ולידציה: מייל ייחודי במערכת
  IF EXISTS (
    SELECT 1 FROM dbo.tblUsers
    WHERE Email = @Email AND UserID > 0
  )
  BEGIN
    SET @ResultCode = 2;
    SET @ResultMessage = N'כתובת המייל כבר רשומה במערכת';
    RETURN;
  END;

  INSERT INTO dbo.tblUsers
    (TenantID, Username, Email, PasswordHash, PasswordSalt,
     RoleID, FirstName, LastName, MustChangePass, IsActive)
  VALUES
    (@TenantID, @Username, @Email, @PasswordHash, @PasswordSalt,
     @RoleID, @FirstName, @LastName, 1, 1);

  SET @NewUserID     = SCOPE_IDENTITY();
  SET @ResultCode    = 0;
  SET @ResultMessage = N'המשתמש נוצר בהצלחה';
END;
GO

-- ════════════════════════════════════════════════════
--  sp_UserUpdate — עדכון פרטי משתמש
-- ════════════════════════════════════════════════════
CREATE OR ALTER PROCEDURE dbo.sp_UserUpdate
  @UserID        INT,
  @FirstName     NVARCHAR(100),
  @LastName      NVARCHAR(100),
  @Email         NVARCHAR(150),
  @RoleID        INT,
  @IsActive      BIT,
  @ResultCode    INT           OUTPUT,
  @ResultMessage NVARCHAR(200) OUTPUT
AS
BEGIN
  SET NOCOUNT ON;

  IF NOT EXISTS (SELECT 1 FROM dbo.tblUsers WHERE UserID = @UserID AND UserID > 0)
  BEGIN
    SET @ResultCode    = 404;
    SET @ResultMessage = N'משתמש לא נמצא';
    RETURN;
  END;

  -- ולידציה: מייל ייחודי (לא כולל המשתמש הנוכחי)
  IF EXISTS (
    SELECT 1 FROM dbo.tblUsers
    WHERE Email = @Email AND UserID <> @UserID AND UserID > 0
  )
  BEGIN
    SET @ResultCode    = 2;
    SET @ResultMessage = N'כתובת המייל כבר רשומה למשתמש אחר';
    RETURN;
  END;

  UPDATE dbo.tblUsers
  SET    FirstName = @FirstName,
         LastName  = @LastName,
         Email     = @Email,
         RoleID    = @RoleID,
         IsActive  = @IsActive
  WHERE  UserID = @UserID;

  SET @ResultCode    = 0;
  SET @ResultMessage = N'המשתמש עודכן בהצלחה';
END;
GO
