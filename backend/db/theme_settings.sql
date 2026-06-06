-- ============================================================
-- SQUADFLOW — Theme Settings
-- ============================================================
-- ירושה: Platform (tblSystemSettings) → Org (tblTenants) → User (tblUsers)
-- NULL באורג/יוזר = ירש מהרמה שמעליו
-- ============================================================


-- ────────────────────────────────────────────────────────────
-- 1. tblSystemSettings — ברירת מחדל Platform
--    הוספת מפתחות ColorScheme + DarkMode
-- ────────────────────────────────────────────────────────────
IF NOT EXISTS (SELECT 1 FROM tblSystemSettings WHERE TenantID=1 AND SettingKey='ColorScheme')
  INSERT INTO tblSystemSettings (TenantID, SettingKey, SettingValue, Description, IsEditable)
  VALUES (1, 'ColorScheme', 'blue', 'ערכת צבעים ברירת מחדל (blue/teal/purple/green/rose/amber)', 1);

IF NOT EXISTS (SELECT 1 FROM tblSystemSettings WHERE TenantID=1 AND SettingKey='DarkMode')
  INSERT INTO tblSystemSettings (TenantID, SettingKey, SettingValue, Description, IsEditable)
  VALUES (1, 'DarkMode', 'false', 'מצב כהה ברירת מחדל (true/false)', 1);
GO


-- ────────────────────────────────────────────────────────────
-- 2. tblTenants — ברירת מחדל ברמת ארגון
--    NULL = ירש מה-Platform
-- ────────────────────────────────────────────────────────────
IF NOT EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.COLUMNS
               WHERE TABLE_NAME='tblTenants' AND COLUMN_NAME='ColorScheme')
  ALTER TABLE tblTenants ADD ColorScheme nvarchar(20) NULL;

IF NOT EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.COLUMNS
               WHERE TABLE_NAME='tblTenants' AND COLUMN_NAME='DarkMode')
  ALTER TABLE tblTenants ADD DarkMode bit NULL;
GO


-- ────────────────────────────────────────────────────────────
-- 3. tblUsers — העדפה אישית
--    NULL = ירש מהארגון
-- ────────────────────────────────────────────────────────────
IF NOT EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.COLUMNS
               WHERE TABLE_NAME='tblUsers' AND COLUMN_NAME='ColorScheme')
  ALTER TABLE tblUsers ADD ColorScheme nvarchar(20) NULL;

IF NOT EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.COLUMNS
               WHERE TABLE_NAME='tblUsers' AND COLUMN_NAME='DarkMode')
  ALTER TABLE tblUsers ADD DarkMode bit NULL;
GO


-- ────────────────────────────────────────────────────────────
-- 4. sp_GetEffectiveTheme
--    מחזיר theme פעיל: User → Org → Platform
-- ────────────────────────────────────────────────────────────
CREATE OR ALTER PROCEDURE sp_GetEffectiveTheme
  @UserID   int,
  @TenantID int
AS
BEGIN
  SET NOCOUNT ON;

  SELECT
    COALESCE(
      u.ColorScheme,
      t.ColorScheme,
      (SELECT SettingValue FROM tblSystemSettings WHERE TenantID=1 AND SettingKey='ColorScheme'),
      'blue'
    ) AS ColorScheme,
    COALESCE(
      u.DarkMode,
      t.DarkMode,
      CAST(
        (SELECT SettingValue FROM tblSystemSettings WHERE TenantID=1 AND SettingKey='DarkMode')
        AS bit),
      0
    ) AS DarkMode
  FROM tblUsers u
  JOIN tblTenants t ON t.TenantID = u.TenantID
  WHERE u.UserID = @UserID;
END
GO


-- ────────────────────────────────────────────────────────────
-- 5. sp_SaveUserTheme — שמירת העדפה אישית
-- ────────────────────────────────────────────────────────────
CREATE OR ALTER PROCEDURE sp_SaveUserTheme
  @UserID      int,
  @ColorScheme nvarchar(20) = NULL,
  @DarkMode    bit          = NULL
AS
BEGIN
  SET NOCOUNT ON;

  UPDATE tblUsers
  SET
    ColorScheme = COALESCE(@ColorScheme, ColorScheme),
    DarkMode    = COALESCE(@DarkMode,    DarkMode)
  WHERE UserID = @UserID;

  SELECT 0 AS ResultCode, N'נשמר בהצלחה' AS ResultMessage;
END
GO


-- ────────────────────────────────────────────────────────────
-- 6. sp_SaveOrgTheme — ברירת מחדל ברמת ארגון
-- ────────────────────────────────────────────────────────────
CREATE OR ALTER PROCEDURE sp_SaveOrgTheme
  @TenantID    int,
  @ColorScheme nvarchar(20) = NULL,
  @DarkMode    bit          = NULL
AS
BEGIN
  SET NOCOUNT ON;

  UPDATE tblTenants
  SET
    ColorScheme = COALESCE(@ColorScheme, ColorScheme),
    DarkMode    = COALESCE(@DarkMode,    DarkMode)
  WHERE TenantID = @TenantID;

  SELECT 0 AS ResultCode, N'נשמר בהצלחה' AS ResultMessage;
END
GO
