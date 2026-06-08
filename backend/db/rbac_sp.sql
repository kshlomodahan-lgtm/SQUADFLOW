-- ============================================================
-- SQUADFLOW — RBAC Stored Procedures
-- Phase 1.5-1.6  |  DB Architect Standard
-- ============================================================

USE SquadFlowDB;
GO

-- ============================================================
-- SEED DATA (Phase 1.6)
-- ============================================================

-- Action Types
IF NOT EXISTS (SELECT 1 FROM tblActionTypes WHERE ActionCode='READ')
INSERT INTO tblActionTypes (ActionCode, ActionName, ActionGroup, SortOrder) VALUES
('READ',          N'צפייה',           'VIEW',     1),
('CREATE',        N'הוספה',           'CRUD',     2),
('UPDATE',        N'עדכון',           'CRUD',     3),
('DELETE',        N'מחיקה',           'CRUD',     4),
('EXPORT',        N'ייצוא',           'VIEW',     5),
('IMPORT',        N'ייבוא',           'MANAGE',   6),
('PRINT',         N'הדפסה',           'VIEW',     7),
('CLONE',         N'שכפול',           'MANAGE',   8),
('APPROVE',       N'אישור',           'WORKFLOW', 9),
('REJECT',        N'דחייה',           'WORKFLOW', 10),
('CANCEL',        N'ביטול',           'WORKFLOW', 11),
('VIEW_SENSITIVE', N'צפייה ברגישים', 'VIEW',     12),
('VIEW_AMOUNTS',  N'צפייה בסכומים',  'VIEW',     13),
('VIEW_HISTORY',  N'היסטוריה',        'VIEW',     14),
('LOCK',          N'נעילה',           'MANAGE',   15);
GO

-- Platform Super Admin Role (TenantID=0, immutable)
IF NOT EXISTS (SELECT 1 FROM tblRoles WHERE RoleCode='SUPER_ADMIN' AND TenantID=0)
INSERT INTO tblRoles (TenantID, RoleName, RoleCode, RoleType, IsSystem, ColorHex, SortOrder) VALUES
(0, N'Super Admin',    'SUPER_ADMIN',    'PLATFORM', 1, '#7c3aed', 1),
(0, N'Platform User',  'PLATFORM_USER',  'PLATFORM', 1, '#0891b2', 2);
GO

-- Template Roles (TenantID=0, cloned per tenant)
IF NOT EXISTS (SELECT 1 FROM tblRoles WHERE RoleCode='TMPL_ADMIN' AND TenantID=0)
INSERT INTO tblRoles (TenantID, RoleName, RoleCode, RoleType, IsSystem, ColorHex, SortOrder) VALUES
(0, N'System Admin',   'TMPL_ADMIN',    'TEMPLATE', 0, '#0D47FF', 10),
(0, N'Manager',        'TMPL_MANAGER',  'TEMPLATE', 0, '#059669', 11),
(0, N'Employee',       'TMPL_EMPLOYEE', 'TEMPLATE', 0, '#64748b', 12),
(0, N'Read Only',      'TMPL_READONLY', 'TEMPLATE', 0, '#94a3b8', 13);
GO

-- Default Platform Menu Structure
IF NOT EXISTS (SELECT 1 FROM tblMenuItems WHERE MenuItemCode='DASHBOARD' AND TenantID=0)
BEGIN
  -- Root items
  INSERT INTO tblMenuItems (TenantID, ParentID, MenuItemCode, MenuItemName, MenuItemType, Route, Icon, SortOrder) VALUES
  (0, NULL, 'DASHBOARD',     N'דשבורד',           'SCREEN',  '/app/dashboard',      'grid',          1),
  (0, NULL, 'ORGANIZATIONS', N'ארגונים',           'SCREEN',  '/app/organizations',  'buildings',     2),
  (0, NULL, 'USERS',         N'משתמשים',           'SCREEN',  '/app/users',          'person',        3),
  (0, NULL, 'CATALOG',       N'קטלוג',             'FOLDER',  NULL,                  'grid-layout',   4),
  (0, NULL, 'AUDIT',         N'יומן פעילות',       'SCREEN',  '/app/audit',          'clipboard',     5),
  (0, NULL, 'SETTINGS',      N'הגדרות',            'FOLDER',  NULL,                  'gear',          9);

  DECLARE @CatalogID INT = (SELECT MenuItemID FROM tblMenuItems WHERE MenuItemCode='CATALOG' AND TenantID=0);
  DECLARE @SettingsID INT = (SELECT MenuItemID FROM tblMenuItems WHERE MenuItemCode='SETTINGS' AND TenantID=0);

  -- Catalog sub-items
  INSERT INTO tblMenuItems (TenantID, ParentID, MenuItemCode, MenuItemName, MenuItemType, Route, Icon, SortOrder) VALUES
  (0, @CatalogID, 'CATALOG_PACKAGES',  N'חבילות',   'SCREEN', '/app/catalog/packages',  'layers',  1),
  (0, @CatalogID, 'CATALOG_PRODUCTS',  N'מוצרים',   'SCREEN', '/app/catalog/products',  'box',     2),
  (0, @CatalogID, 'CATALOG_CATEGORIES',N'קטגוריות', 'SCREEN', '/app/catalog/categories','tag',     3);

  -- Settings sub-items
  INSERT INTO tblMenuItems (TenantID, ParentID, MenuItemCode, MenuItemName, MenuItemType, Route, Icon, SortOrder) VALUES
  (0, @SettingsID, 'SETTINGS_GENERAL',    N'כללי',             'SCREEN', '/app/settings', 'gear',      1),
  (0, @SettingsID, 'SETTINGS_MENU',       N'עץ תפריטים',       'SCREEN', '/app/settings', 'menu',      2),
  (0, @SettingsID, 'SETTINGS_ROLES',      N'תפקידים והרשאות',  'SCREEN', '/app/settings', 'person',    3),
  (0, @SettingsID, 'SETTINGS_ORGCHART',   N'מבנה ארגוני',      'SCREEN', '/app/settings', 'buildings', 4),
  (0, @SettingsID, 'SETTINGS_SECURITY',   N'אבטחה',            'SCREEN', '/app/settings', 'lock',      5),
  (0, @SettingsID, 'SETTINGS_AUDIT_LOG',  N'יומן פעילות',      'SCREEN', '/app/settings', 'clipboard', 8);

  -- Assign default actions to menu items
  INSERT INTO tblMenuItemActions (MenuItemID, ActionCode, IsDefault)
  SELECT m.MenuItemID, a.ActionCode, 1
  FROM tblMenuItems m
  CROSS JOIN tblActionTypes a
  WHERE m.TenantID = 0
    AND m.MenuItemType = 'SCREEN'
    AND a.ActionCode IN ('READ','CREATE','UPDATE','DELETE');

  -- Add extra actions to specific screens
  INSERT INTO tblMenuItemActions (MenuItemID, ActionCode, IsDefault)
  SELECT MenuItemID, 'EXPORT', 0 FROM tblMenuItems WHERE TenantID=0 AND MenuItemCode IN ('ORGANIZATIONS','USERS','AUDIT');

  INSERT INTO tblMenuItemActions (MenuItemID, ActionCode, IsDefault)
  SELECT MenuItemID, 'VIEW_SENSITIVE', 0 FROM tblMenuItems WHERE TenantID=0 AND MenuItemCode IN ('USERS','SETTINGS_SECURITY');
END
GO

-- ============================================================
-- SP: sp_MenuItemList — get tree for tenant
-- ============================================================
IF OBJECT_ID('sp_MenuItemList') IS NOT NULL DROP PROC sp_MenuItemList;
GO
CREATE PROC sp_MenuItemList
    @TenantID        INT,
    @ResultCode      INT OUTPUT,
    @ResultMessage   NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        -- Return platform items + tenant-specific items
        SELECT
            m.MenuItemID, m.TenantID, m.ParentID,
            m.MenuItemCode, m.MenuItemName, m.MenuItemType,
            m.Route, m.Icon, m.SortOrder, m.IsVisible, m.IsActive,
            -- Available actions as JSON-like string
            (
                SELECT STRING_AGG(ma.ActionCode, ',')
                FROM tblMenuItemActions ma
                WHERE ma.MenuItemID = m.MenuItemID
            ) AS AvailableActions
        FROM tblMenuItems m
        WHERE m.IsActive = 1
          AND (m.TenantID = 0 OR m.TenantID = @TenantID)
        ORDER BY m.SortOrder, m.MenuItemID;

        SET @ResultCode = 0; SET @ResultMessage = N'OK';
    END TRY
    BEGIN CATCH
        SET @ResultCode = -1; SET @ResultMessage = ERROR_MESSAGE();
    END CATCH
END
GO

-- ============================================================
-- SP: sp_MenuItemSave — create / update menu item
-- ============================================================
IF OBJECT_ID('sp_MenuItemSave') IS NOT NULL DROP PROC sp_MenuItemSave;
GO
CREATE PROC sp_MenuItemSave
    @MenuItemID      INT,           -- 0 = new
    @TenantID        INT,
    @ParentID        INT,
    @MenuItemCode    NVARCHAR(50),
    @MenuItemName    NVARCHAR(100),
    @MenuItemType    VARCHAR(20),
    @Route           NVARCHAR(200),
    @Icon            NVARCHAR(50),
    @SortOrder       INT,
    @IsVisible       BIT,
    @IsActive        BIT,
    @ActionCodes     NVARCHAR(500), -- comma-separated: 'READ,CREATE,UPDATE,DELETE'
    @ResultCode      INT OUTPUT,
    @ResultMessage   NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        IF @MenuItemID = 0
        BEGIN
            INSERT INTO tblMenuItems (TenantID, ParentID, MenuItemCode, MenuItemName, MenuItemType, Route, Icon, SortOrder, IsVisible, IsActive)
            VALUES (@TenantID, NULLIF(@ParentID,0), @MenuItemCode, @MenuItemName, @MenuItemType, @Route, @Icon, @SortOrder, @IsVisible, @IsActive);
            SET @MenuItemID = SCOPE_IDENTITY();
        END
        ELSE
        BEGIN
            UPDATE tblMenuItems SET
                ParentID=NULLIF(@ParentID,0), MenuItemCode=@MenuItemCode, MenuItemName=@MenuItemName,
                MenuItemType=@MenuItemType, Route=@Route, Icon=@Icon,
                SortOrder=@SortOrder, IsVisible=@IsVisible, IsActive=@IsActive, UpdatedAt=GETDATE()
            WHERE MenuItemID=@MenuItemID AND TenantID=@TenantID;
        END

        -- Sync actions
        DELETE FROM tblMenuItemActions WHERE MenuItemID=@MenuItemID;
        IF LEN(ISNULL(@ActionCodes,'')) > 0
        BEGIN
            INSERT INTO tblMenuItemActions (MenuItemID, ActionCode, IsDefault)
            SELECT @MenuItemID, LTRIM(RTRIM(value)), 1
            FROM STRING_SPLIT(@ActionCodes, ',')
            WHERE LTRIM(RTRIM(value)) IN (SELECT ActionCode FROM tblActionTypes);
        END

        SET @ResultCode = @MenuItemID; SET @ResultMessage = N'OK';
    END TRY
    BEGIN CATCH
        SET @ResultCode = -1; SET @ResultMessage = ERROR_MESSAGE();
    END CATCH
END
GO

-- ============================================================
-- SP: sp_RoleList — list roles per tenant
-- ============================================================
IF OBJECT_ID('sp_RoleList') IS NOT NULL DROP PROC sp_RoleList;
GO
CREATE PROC sp_RoleList
    @TenantID      INT,
    @ResultCode    INT OUTPUT,
    @ResultMessage NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        SELECT
            r.RoleID, r.TenantID, r.ParentRoleID,
            p.RoleName AS ParentRoleName,
            r.RoleName, r.RoleCode, r.RoleType,
            r.IsSystem, r.MaxUsers, r.ExpiryDate,
            r.ColorHex, r.SortOrder, r.IsActive,
            (SELECT COUNT(*) FROM tblUserRoles ur WHERE ur.RoleID=r.RoleID AND ur.IsActive=1) AS UserCount
        FROM tblRoles r
        LEFT JOIN tblRoles p ON p.RoleID = r.ParentRoleID
        WHERE r.IsActive=1
          AND (r.TenantID=0 OR r.TenantID=@TenantID)
        ORDER BY r.RoleType, r.SortOrder, r.RoleID;

        SET @ResultCode = 0; SET @ResultMessage = N'OK';
    END TRY
    BEGIN CATCH
        SET @ResultCode = -1; SET @ResultMessage = ERROR_MESSAGE();
    END CATCH
END
GO

-- ============================================================
-- SP: sp_RoleSave — create / update role
-- ============================================================
IF OBJECT_ID('sp_RoleSave') IS NOT NULL DROP PROC sp_RoleSave;
GO
CREATE PROC sp_RoleSave
    @RoleID        INT,
    @TenantID      INT,
    @ParentRoleID  INT,
    @RoleName      NVARCHAR(100),
    @RoleCode      VARCHAR(50),
    @RoleType      VARCHAR(20),
    @MaxUsers      INT,
    @ExpiryDate    DATE,
    @ColorHex      VARCHAR(7),
    @SortOrder     INT,
    @IsActive      BIT,
    @ResultCode    INT OUTPUT,
    @ResultMessage NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        IF @RoleID = 0
        BEGIN
            INSERT INTO tblRoles (TenantID, ParentRoleID, RoleName, RoleCode, RoleType, IsSystem, MaxUsers, ExpiryDate, ColorHex, SortOrder, IsActive)
            VALUES (@TenantID, NULLIF(@ParentRoleID,0), @RoleName, @RoleCode, @RoleType, 0, NULLIF(@MaxUsers,0), @ExpiryDate, @ColorHex, @SortOrder, @IsActive);
            SET @ResultCode = SCOPE_IDENTITY();
        END
        ELSE
        BEGIN
            IF EXISTS (SELECT 1 FROM tblRoles WHERE RoleID=@RoleID AND IsSystem=1)
            BEGIN
                SET @ResultCode=-2; SET @ResultMessage=N'לא ניתן לעדכן תפקיד מערכת'; RETURN;
            END
            UPDATE tblRoles SET
                ParentRoleID=NULLIF(@ParentRoleID,0), RoleName=@RoleName, RoleCode=@RoleCode,
                RoleType=@RoleType, MaxUsers=NULLIF(@MaxUsers,0), ExpiryDate=@ExpiryDate,
                ColorHex=@ColorHex, SortOrder=@SortOrder, IsActive=@IsActive, UpdatedAt=GETDATE()
            WHERE RoleID=@RoleID AND TenantID=@TenantID AND IsSystem=0;
            SET @ResultCode = @RoleID;
        END
        SET @ResultMessage = N'OK';
    END TRY
    BEGIN CATCH
        SET @ResultCode = -1; SET @ResultMessage = ERROR_MESSAGE();
    END CATCH
END
GO

-- ============================================================
-- SP: sp_RoleClone — duplicate role with all permissions
-- ============================================================
IF OBJECT_ID('sp_RoleClone') IS NOT NULL DROP PROC sp_RoleClone;
GO
CREATE PROC sp_RoleClone
    @SourceRoleID  INT,
    @TenantID      INT,
    @NewRoleName   NVARCHAR(100),
    @NewRoleCode   VARCHAR(50),
    @ResultCode    INT OUTPUT,
    @ResultMessage NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        DECLARE @NewRoleID INT;
        INSERT INTO tblRoles (TenantID, ParentRoleID, RoleName, RoleCode, RoleType, IsSystem, ColorHex, SortOrder, IsActive)
        SELECT @TenantID, ParentRoleID, @NewRoleName, @NewRoleCode, 'CUSTOM', 0, ColorHex, SortOrder+1, 1
        FROM tblRoles WHERE RoleID=@SourceRoleID;
        SET @NewRoleID = SCOPE_IDENTITY();

        INSERT INTO tblRolePermissions (RoleID, MenuItemID, ActionCode, IsAllowed)
        SELECT @NewRoleID, MenuItemID, ActionCode, IsAllowed
        FROM tblRolePermissions WHERE RoleID=@SourceRoleID;

        SET @ResultCode = @NewRoleID; SET @ResultMessage = N'OK';
    END TRY
    BEGIN CATCH
        SET @ResultCode = -1; SET @ResultMessage = ERROR_MESSAGE();
    END CATCH
END
GO

-- ============================================================
-- SP: sp_RolePermissionMatrix_Get — full matrix for a role
-- ============================================================
IF OBJECT_ID('sp_RolePermissionMatrix_Get') IS NOT NULL DROP PROC sp_RolePermissionMatrix_Get;
GO
CREATE PROC sp_RolePermissionMatrix_Get
    @RoleID        INT,
    @TenantID      INT,
    @ResultCode    INT OUTPUT,
    @ResultMessage NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        SELECT
            m.MenuItemID, m.MenuItemCode, m.MenuItemName, m.MenuItemType,
            m.ParentID, m.SortOrder,
            ma.ActionCode,
            at2.ActionName,
            at2.ActionGroup,
            ISNULL(rp.IsAllowed, 0) AS IsAllowed
        FROM tblMenuItems m
        JOIN tblMenuItemActions ma ON ma.MenuItemID = m.MenuItemID
        JOIN tblActionTypes at2   ON at2.ActionCode = ma.ActionCode
        LEFT JOIN tblRolePermissions rp
            ON rp.RoleID=@RoleID AND rp.MenuItemID=m.MenuItemID AND rp.ActionCode=ma.ActionCode
        WHERE m.IsActive=1
          AND (m.TenantID=0 OR m.TenantID=@TenantID)
        ORDER BY m.SortOrder, m.MenuItemID, at2.SortOrder;

        SET @ResultCode = 0; SET @ResultMessage = N'OK';
    END TRY
    BEGIN CATCH
        SET @ResultCode = -1; SET @ResultMessage = ERROR_MESSAGE();
    END CATCH
END
GO

-- ============================================================
-- SP: sp_RolePermissionMatrix_Save — save all permissions for a role
-- ============================================================
IF OBJECT_ID('sp_RolePermissionMatrix_Save') IS NOT NULL DROP PROC sp_RolePermissionMatrix_Save;
GO
CREATE PROC sp_RolePermissionMatrix_Save
    @RoleID          INT,
    @TenantID        INT,
    @PermissionsJson NVARCHAR(MAX),  -- JSON: [{"menuItemId":1,"actionCode":"READ","isAllowed":true},...]
    @UpdatedByUserID INT,
    @ResultCode      INT OUTPUT,
    @ResultMessage   NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        IF EXISTS (SELECT 1 FROM tblRoles WHERE RoleID=@RoleID AND IsSystem=1 AND TenantID=0)
        BEGIN
            SET @ResultCode=-2; SET @ResultMessage=N'לא ניתן לשנות הרשאות Super Admin'; RETURN;
        END

        DELETE FROM tblRolePermissions WHERE RoleID=@RoleID;

        INSERT INTO tblRolePermissions (RoleID, MenuItemID, ActionCode, IsAllowed, UpdatedAt, UpdatedByUserID)
        SELECT @RoleID,
               CAST(JSON_VALUE(p.value, '$.menuItemId') AS INT),
               JSON_VALUE(p.value, '$.actionCode'),
               CAST(JSON_VALUE(p.value, '$.isAllowed') AS BIT),
               GETDATE(),
               @UpdatedByUserID
        FROM OPENJSON(@PermissionsJson) p
        WHERE CAST(JSON_VALUE(p.value, '$.isAllowed') AS BIT) = 1;

        -- Log the change
        INSERT INTO tblPermissionChangesLog (TenantID, ChangedByUserID, ChangeType, TargetRoleID, NewValue, CreatedAt)
        VALUES (@TenantID, @UpdatedByUserID, 'MATRIX_SAVE', @RoleID, @PermissionsJson, GETDATE());

        SET @ResultCode = 0; SET @ResultMessage = N'OK';
    END TRY
    BEGIN CATCH
        SET @ResultCode = -1; SET @ResultMessage = ERROR_MESSAGE();
    END CATCH
END
GO

-- ============================================================
-- SP: sp_UserPermissionResolve — compute effective permissions
-- ============================================================
IF OBJECT_ID('sp_UserPermissionResolve') IS NOT NULL DROP PROC sp_UserPermissionResolve;
GO
CREATE PROC sp_UserPermissionResolve
    @UserID        INT,
    @TenantID      INT,
    @ResultCode    INT OUTPUT,
    @ResultMessage NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        -- Step 1: collect all role permissions (direct + via groups)
        ;WITH UserRolesAll AS (
            -- Direct roles
            SELECT ur.RoleID FROM tblUserRoles ur
            WHERE ur.UserID=@UserID AND ur.IsActive=1
              AND (ur.ExpiryDate IS NULL OR ur.ExpiryDate > GETDATE())
            UNION
            -- Via groups
            SELECT gr.RoleID FROM tblUserGroups ug
            JOIN tblGroupRoles gr ON gr.GroupID=ug.GroupID
            WHERE ug.UserID=@UserID
        ),
        BasePermissions AS (
            SELECT rp.MenuItemID, rp.ActionCode, MAX(CAST(rp.IsAllowed AS INT)) AS IsAllowed
            FROM tblRolePermissions rp
            WHERE rp.RoleID IN (SELECT RoleID FROM UserRolesAll)
            GROUP BY rp.MenuItemID, rp.ActionCode
        ),
        -- Step 2: temp permissions
        TempPerms AS (
            SELECT MenuItemID, ActionCode, IsAllowed
            FROM tblTempPermissions
            WHERE GrantedToUserID=@UserID AND IsActive=1
              AND GETDATE() BETWEEN ValidFrom AND ValidUntil
              AND MenuItemID IS NOT NULL
        ),
        -- Step 3: overrides (most restrictive for denies, most permissive for grants)
        AllPerms AS (
            SELECT MenuItemID, ActionCode, IsAllowed FROM BasePermissions
            UNION ALL
            SELECT MenuItemID, ActionCode, IsAllowed FROM TempPerms
        )
        SELECT
            ap.MenuItemID, ap.ActionCode,
            CASE
                -- If any override explicitly denies → deny
                WHEN EXISTS (
                    SELECT 1 FROM tblUserPermissionOverrides upo
                    WHERE upo.UserID=@UserID AND upo.MenuItemID=ap.MenuItemID
                      AND upo.ActionCode=ap.ActionCode AND upo.IsAllowed=0
                      AND (upo.ExpiryDate IS NULL OR upo.ExpiryDate > GETDATE())
                ) THEN 0
                -- If any override explicitly grants → allow
                WHEN EXISTS (
                    SELECT 1 FROM tblUserPermissionOverrides upo
                    WHERE upo.UserID=@UserID AND upo.MenuItemID=ap.MenuItemID
                      AND upo.ActionCode=ap.ActionCode AND upo.IsAllowed=1
                      AND (upo.ExpiryDate IS NULL OR upo.ExpiryDate > GETDATE())
                ) THEN 1
                -- Else from roles
                ELSE MAX(CAST(ap.IsAllowed AS INT))
            END AS IsAllowed,
            m.MenuItemCode
        FROM AllPerms ap
        JOIN tblMenuItems m ON m.MenuItemID=ap.MenuItemID
        GROUP BY ap.MenuItemID, ap.ActionCode, m.MenuItemCode;

        SET @ResultCode = 0; SET @ResultMessage = N'OK';
    END TRY
    BEGIN CATCH
        SET @ResultCode = -1; SET @ResultMessage = ERROR_MESSAGE();
    END CATCH
END
GO

-- ============================================================
-- SP: sp_UserRoleAssign — assign / remove role from user
-- ============================================================
IF OBJECT_ID('sp_UserRoleAssign') IS NOT NULL DROP PROC sp_UserRoleAssign;
GO
CREATE PROC sp_UserRoleAssign
    @UserID          INT,
    @RoleID          INT,
    @Action          VARCHAR(10),  -- 'ADD' or 'REMOVE'
    @ExpiryDate      DATETIME,
    @AssignedByUserID INT,
    @TenantID        INT,
    @ResultCode      INT OUTPUT,
    @ResultMessage   NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        IF @Action = 'ADD'
        BEGIN
            MERGE tblUserRoles AS target
            USING (SELECT @UserID, @RoleID) AS source (UserID, RoleID)
            ON target.UserID=source.UserID AND target.RoleID=source.RoleID
            WHEN MATCHED THEN UPDATE SET IsActive=1, ExpiryDate=@ExpiryDate, AssignedByUserID=@AssignedByUserID, AssignedAt=GETDATE()
            WHEN NOT MATCHED THEN INSERT (UserID, RoleID, AssignedAt, AssignedByUserID, ExpiryDate, IsActive)
                VALUES (@UserID, @RoleID, GETDATE(), @AssignedByUserID, @ExpiryDate, 1);
        END
        ELSE IF @Action = 'REMOVE'
        BEGIN
            UPDATE tblUserRoles SET IsActive=0 WHERE UserID=@UserID AND RoleID=@RoleID;
        END

        INSERT INTO tblPermissionChangesLog (TenantID, ChangedByUserID, ChangeType, TargetUserID, TargetRoleID)
        VALUES (@TenantID, @AssignedByUserID, 'ROLE_'+@Action, @UserID, @RoleID);

        SET @ResultCode = 0; SET @ResultMessage = N'OK';
    END TRY
    BEGIN CATCH
        SET @ResultCode = -1; SET @ResultMessage = ERROR_MESSAGE();
    END CATCH
END
GO

-- ============================================================
-- SP: sp_OrgUnitList — tree for tenant
-- ============================================================
IF OBJECT_ID('sp_OrgUnitList') IS NOT NULL DROP PROC sp_OrgUnitList;
GO
CREATE PROC sp_OrgUnitList
    @TenantID      INT,
    @ResultCode    INT OUTPUT,
    @ResultMessage NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        SELECT
            u.OrgUnitID, u.ParentOrgUnitID, u.UnitName, u.UnitCode,
            u.UnitType, u.Description, u.ManagerUserID,
            u.BudgetCode, u.SortOrder, u.IsActive,
            (SELECT COUNT(*) FROM tblOrgPositions op WHERE op.OrgUnitID=u.OrgUnitID AND op.IsActive=1) AS PositionCount
        FROM tblOrgUnits u
        WHERE u.TenantID=@TenantID AND u.IsActive=1
        ORDER BY u.SortOrder, u.OrgUnitID;

        SET @ResultCode = 0; SET @ResultMessage = N'OK';
    END TRY
    BEGIN CATCH
        SET @ResultCode = -1; SET @ResultMessage = ERROR_MESSAGE();
    END CATCH
END
GO

-- ============================================================
-- SP: sp_OrgUnitSave
-- ============================================================
IF OBJECT_ID('sp_OrgUnitSave') IS NOT NULL DROP PROC sp_OrgUnitSave;
GO
CREATE PROC sp_OrgUnitSave
    @OrgUnitID       INT,
    @TenantID        INT,
    @ParentOrgUnitID INT,
    @UnitName        NVARCHAR(100),
    @UnitCode        VARCHAR(30),
    @UnitType        VARCHAR(20),
    @Description     NVARCHAR(200),
    @ManagerUserID   INT,
    @BudgetCode      VARCHAR(30),
    @SortOrder       INT,
    @IsActive        BIT,
    @ResultCode      INT OUTPUT,
    @ResultMessage   NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        IF @OrgUnitID = 0
        BEGIN
            INSERT INTO tblOrgUnits (TenantID, ParentOrgUnitID, UnitName, UnitCode, UnitType, Description, ManagerUserID, BudgetCode, SortOrder, IsActive)
            VALUES (@TenantID, NULLIF(@ParentOrgUnitID,0), @UnitName, @UnitCode, @UnitType, @Description, NULLIF(@ManagerUserID,0), @BudgetCode, @SortOrder, @IsActive);
            SET @ResultCode = SCOPE_IDENTITY();
        END
        ELSE
        BEGIN
            UPDATE tblOrgUnits SET
                ParentOrgUnitID=NULLIF(@ParentOrgUnitID,0), UnitName=@UnitName, UnitCode=@UnitCode,
                UnitType=@UnitType, Description=@Description, ManagerUserID=NULLIF(@ManagerUserID,0),
                BudgetCode=@BudgetCode, SortOrder=@SortOrder, IsActive=@IsActive
            WHERE OrgUnitID=@OrgUnitID AND TenantID=@TenantID;
            SET @ResultCode = @OrgUnitID;
        END
        SET @ResultMessage = N'OK';
    END TRY
    BEGIN CATCH
        SET @ResultCode = -1; SET @ResultMessage = ERROR_MESSAGE();
    END CATCH
END
GO

-- ============================================================
-- SP: sp_OrgPositionList — positions for a unit
-- ============================================================
IF OBJECT_ID('sp_OrgPositionList') IS NOT NULL DROP PROC sp_OrgPositionList;
GO
CREATE PROC sp_OrgPositionList
    @OrgUnitID     INT,
    @ResultCode    INT OUTPUT,
    @ResultMessage NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        SELECT
            op.PositionID, op.OrgUnitID, op.JobTitleID,
            jt.JobTitleName, jt.TitleLevel,
            ISNULL(op.PositionName, jt.JobTitleName) AS DisplayName,
            op.ReportsToPositionID, op.HeadCount, op.IsActive,
            -- Current occupants
            (
                SELECT STRING_AGG(u.FullName, ', ')
                FROM tblUserPositions up2
                JOIN tblUsers u ON u.UserID = up2.UserID
                WHERE up2.PositionID = op.PositionID AND up2.IsActive=1 AND (up2.EndDate IS NULL OR up2.EndDate > GETDATE())
            ) AS Occupants,
            (
                SELECT COUNT(*) FROM tblUserPositions up3
                WHERE up3.PositionID=op.PositionID AND up3.IsActive=1 AND (up3.EndDate IS NULL OR up3.EndDate > GETDATE())
            ) AS FilledCount
        FROM tblOrgPositions op
        JOIN tblJobTitles jt ON jt.JobTitleID=op.JobTitleID
        WHERE op.OrgUnitID=@OrgUnitID AND op.IsActive=1
        ORDER BY jt.TitleLevel, op.PositionID;

        SET @ResultCode = 0; SET @ResultMessage = N'OK';
    END TRY
    BEGIN CATCH
        SET @ResultCode = -1; SET @ResultMessage = ERROR_MESSAGE();
    END CATCH
END
GO

-- ============================================================
-- SP: sp_UserPositionSave — assign user to position
-- ============================================================
IF OBJECT_ID('sp_UserPositionSave') IS NOT NULL DROP PROC sp_UserPositionSave;
GO
CREATE PROC sp_UserPositionSave
    @UserID        INT,
    @PositionID    INT,
    @StartDate     DATE,
    @EndDate       DATE,
    @IsPrimary     BIT,
    @AutoAssignRole BIT,   -- auto-assign DefaultRoleID from JobTitle
    @TenantID      INT,
    @ResultCode    INT OUTPUT,
    @ResultMessage NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        -- End previous primary if needed
        IF @IsPrimary = 1
            UPDATE tblUserPositions SET IsPrimary=0 WHERE UserID=@UserID AND IsPrimary=1;

        -- Upsert position
        MERGE tblUserPositions AS target
        USING (SELECT @UserID, @PositionID) AS src (UserID, PositionID)
        ON target.UserID=src.UserID AND target.PositionID=src.PositionID AND target.IsActive=1
        WHEN MATCHED THEN UPDATE SET StartDate=@StartDate, EndDate=@EndDate, IsPrimary=@IsPrimary
        WHEN NOT MATCHED THEN INSERT (UserID, PositionID, StartDate, EndDate, IsPrimary, IsActive)
            VALUES (@UserID, @PositionID, @StartDate, @EndDate, @IsPrimary, 1);

        -- Auto-assign role from JobTitle
        IF @AutoAssignRole = 1
        BEGIN
            DECLARE @DefaultRoleID INT = (
                SELECT jt.DefaultRoleID
                FROM tblOrgPositions op
                JOIN tblJobTitles jt ON jt.JobTitleID=op.JobTitleID
                WHERE op.PositionID=@PositionID AND jt.DefaultRoleID IS NOT NULL
            );
            IF @DefaultRoleID IS NOT NULL
            BEGIN
                MERGE tblUserRoles AS tr
                USING (SELECT @UserID, @DefaultRoleID) AS src (UserID, RoleID)
                ON tr.UserID=src.UserID AND tr.RoleID=src.RoleID
                WHEN NOT MATCHED THEN INSERT (UserID, RoleID, AssignedAt, IsActive)
                    VALUES (@UserID, @DefaultRoleID, GETDATE(), 1)
                WHEN MATCHED THEN UPDATE SET IsActive=1;
            END
        END

        SET @ResultCode = 0; SET @ResultMessage = N'OK';
    END TRY
    BEGIN CATCH
        SET @ResultCode = -1; SET @ResultMessage = ERROR_MESSAGE();
    END CATCH
END
GO

-- ============================================================
-- SP: sp_JobTitleSave
-- ============================================================
IF OBJECT_ID('sp_JobTitleSave') IS NOT NULL DROP PROC sp_JobTitleSave;
GO
CREATE PROC sp_JobTitleSave
    @JobTitleID    INT,
    @TenantID      INT,
    @JobTitleName  NVARCHAR(100),
    @JobTitleCode  VARCHAR(50),
    @TitleLevel    TINYINT,
    @DefaultRoleID INT,
    @IsActive      BIT,
    @ResultCode    INT OUTPUT,
    @ResultMessage NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        IF @JobTitleID = 0
        BEGIN
            INSERT INTO tblJobTitles (TenantID, JobTitleName, JobTitleCode, TitleLevel, DefaultRoleID, IsActive)
            VALUES (@TenantID, @JobTitleName, @JobTitleCode, @TitleLevel, NULLIF(@DefaultRoleID,0), @IsActive);
            SET @ResultCode = SCOPE_IDENTITY();
        END
        ELSE
        BEGIN
            UPDATE tblJobTitles SET
                JobTitleName=@JobTitleName, JobTitleCode=@JobTitleCode,
                TitleLevel=@TitleLevel, DefaultRoleID=NULLIF(@DefaultRoleID,0), IsActive=@IsActive
            WHERE JobTitleID=@JobTitleID AND TenantID=@TenantID;
            SET @ResultCode = @JobTitleID;
        END
        SET @ResultMessage = N'OK';
    END TRY
    BEGIN CATCH
        SET @ResultCode = -1; SET @ResultMessage = ERROR_MESSAGE();
    END CATCH
END
GO

PRINT 'RBAC Stored Procedures created successfully.';
GO
