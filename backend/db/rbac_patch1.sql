-- ============================================================
-- RBAC Patch 1 — Fix table naming + column name issues
-- tblUserRoles is an existing lookup table; we use tblUserRoleAssignments
-- tblUsers uses FirstName + LastName (not FullName)
-- ============================================================

USE ProfitsCRM;
GO

-- ────────────────────────────────────────────────────────────
-- Create tblUserRoleAssignments (replaces tblUserRoles usage)
-- ────────────────────────────────────────────────────────────
IF NOT EXISTS (SELECT 1 FROM sys.tables WHERE name='tblUserRoleAssignments')
CREATE TABLE tblUserRoleAssignments (
    UserRoleAssignID  INT IDENTITY(1,1) PRIMARY KEY,
    UserID            INT          NOT NULL,
    RoleID            INT          NOT NULL,
    TenantID          INT          NOT NULL DEFAULT 0,
    AssignedAt        DATETIME     NOT NULL DEFAULT GETDATE(),
    AssignedByUserID  INT          NULL,
    ExpiryDate        DATETIME     NULL,
    IsActive          BIT          NOT NULL DEFAULT 1,
    Notes             NVARCHAR(200) NULL,
    CONSTRAINT UX_UserRoleAssign UNIQUE (UserID, RoleID)
);
GO

-- ────────────────────────────────────────────────────────────
-- Fix sp_RoleList — count from tblUserRoleAssignments
-- ────────────────────────────────────────────────────────────
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
            (SELECT COUNT(*) FROM tblUserRoleAssignments ura
             WHERE ura.RoleID=r.RoleID AND ura.IsActive=1) AS UserCount
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

-- ────────────────────────────────────────────────────────────
-- Fix sp_UserPermissionResolve — use tblUserRoleAssignments
-- ────────────────────────────────────────────────────────────
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
        ;WITH UserRolesAll AS (
            -- Direct roles via tblUserRoleAssignments
            SELECT ura.RoleID FROM tblUserRoleAssignments ura
            WHERE ura.UserID=@UserID AND ura.IsActive=1
              AND (ura.ExpiryDate IS NULL OR ura.ExpiryDate > GETDATE())
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
        TempPerms AS (
            SELECT MenuItemID, ActionCode, IsAllowed
            FROM tblTempPermissions
            WHERE GrantedToUserID=@UserID AND IsActive=1
              AND GETDATE() BETWEEN ValidFrom AND ValidUntil
              AND MenuItemID IS NOT NULL
        ),
        AllPerms AS (
            SELECT MenuItemID, ActionCode, IsAllowed FROM BasePermissions
            UNION ALL
            SELECT MenuItemID, ActionCode, IsAllowed FROM TempPerms
        )
        SELECT
            ap.MenuItemID, ap.ActionCode,
            CASE
                WHEN EXISTS (
                    SELECT 1 FROM tblUserPermissionOverrides upo
                    WHERE upo.UserID=@UserID AND upo.MenuItemID=ap.MenuItemID
                      AND upo.ActionCode=ap.ActionCode AND upo.IsAllowed=0
                      AND (upo.ExpiryDate IS NULL OR upo.ExpiryDate > GETDATE())
                ) THEN 0
                WHEN EXISTS (
                    SELECT 1 FROM tblUserPermissionOverrides upo
                    WHERE upo.UserID=@UserID AND upo.MenuItemID=ap.MenuItemID
                      AND upo.ActionCode=ap.ActionCode AND upo.IsAllowed=1
                      AND (upo.ExpiryDate IS NULL OR upo.ExpiryDate > GETDATE())
                ) THEN 1
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

-- ────────────────────────────────────────────────────────────
-- Fix sp_UserRoleAssign — use tblUserRoleAssignments
-- ────────────────────────────────────────────────────────────
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
            MERGE tblUserRoleAssignments AS target
            USING (SELECT @UserID, @RoleID) AS source (UserID, RoleID)
            ON target.UserID=source.UserID AND target.RoleID=source.RoleID
            WHEN MATCHED THEN UPDATE SET IsActive=1, ExpiryDate=@ExpiryDate,
                AssignedByUserID=@AssignedByUserID, AssignedAt=GETDATE()
            WHEN NOT MATCHED THEN INSERT (UserID, RoleID, TenantID, AssignedAt, AssignedByUserID, ExpiryDate, IsActive)
                VALUES (@UserID, @RoleID, @TenantID, GETDATE(), @AssignedByUserID, @ExpiryDate, 1);
        END
        ELSE IF @Action = 'REMOVE'
        BEGIN
            UPDATE tblUserRoleAssignments SET IsActive=0
            WHERE UserID=@UserID AND RoleID=@RoleID;
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

-- ────────────────────────────────────────────────────────────
-- Fix sp_OrgPositionList — FullName -> FirstName + LastName
-- ────────────────────────────────────────────────────────────
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
            (
                SELECT STRING_AGG(
                    ISNULL(u.FirstName, N'') + N' ' + ISNULL(u.LastName, N''), N', ')
                FROM tblUserPositions up2
                JOIN tblUsers u ON u.UserID = up2.UserID
                WHERE up2.PositionID = op.PositionID
                  AND up2.IsActive=1
                  AND (up2.EndDate IS NULL OR up2.EndDate > GETDATE())
            ) AS Occupants,
            (
                SELECT COUNT(*) FROM tblUserPositions up3
                WHERE up3.PositionID=op.PositionID AND up3.IsActive=1
                  AND (up3.EndDate IS NULL OR up3.EndDate > GETDATE())
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

-- ────────────────────────────────────────────────────────────
-- Fix sp_UserPositionSave — auto-assign to tblUserRoleAssignments
-- ────────────────────────────────────────────────────────────
IF OBJECT_ID('sp_UserPositionSave') IS NOT NULL DROP PROC sp_UserPositionSave;
GO
CREATE PROC sp_UserPositionSave
    @UserID        INT,
    @PositionID    INT,
    @StartDate     DATE,
    @EndDate       DATE,
    @IsPrimary     BIT,
    @AutoAssignRole BIT,
    @TenantID      INT,
    @ResultCode    INT OUTPUT,
    @ResultMessage NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        IF @IsPrimary = 1
            UPDATE tblUserPositions SET IsPrimary=0 WHERE UserID=@UserID AND IsPrimary=1;

        MERGE tblUserPositions AS target
        USING (SELECT @UserID, @PositionID) AS src (UserID, PositionID)
        ON target.UserID=src.UserID AND target.PositionID=src.PositionID AND target.IsActive=1
        WHEN MATCHED THEN UPDATE SET StartDate=@StartDate, EndDate=@EndDate, IsPrimary=@IsPrimary
        WHEN NOT MATCHED THEN INSERT (UserID, PositionID, StartDate, EndDate, IsPrimary, IsActive)
            VALUES (@UserID, @PositionID, @StartDate, @EndDate, @IsPrimary, 1);

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
                MERGE tblUserRoleAssignments AS tr
                USING (SELECT @UserID, @DefaultRoleID) AS src (UserID, RoleID)
                ON tr.UserID=src.UserID AND tr.RoleID=src.RoleID
                WHEN NOT MATCHED THEN INSERT (UserID, RoleID, TenantID, AssignedAt, IsActive)
                    VALUES (@UserID, @DefaultRoleID, @TenantID, GETDATE(), 1)
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

-- Fix sp_JobTitleList (bonus - useful for the UI)
IF OBJECT_ID('sp_JobTitleList') IS NOT NULL DROP PROC sp_JobTitleList;
GO
CREATE PROC sp_JobTitleList
    @TenantID      INT,
    @ResultCode    INT OUTPUT,
    @ResultMessage NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        SELECT
            jt.JobTitleID, jt.TenantID, jt.JobTitleName, jt.JobTitleCode,
            jt.TitleLevel, jt.DefaultRoleID, r.RoleName AS DefaultRoleName,
            jt.IsActive
        FROM tblJobTitles jt
        LEFT JOIN tblRoles r ON r.RoleID = jt.DefaultRoleID
        WHERE jt.IsActive=1
          AND (jt.TenantID=0 OR jt.TenantID=@TenantID)
        ORDER BY jt.TitleLevel, jt.JobTitleName;

        SET @ResultCode = 0; SET @ResultMessage = N'OK';
    END TRY
    BEGIN CATCH
        SET @ResultCode = -1; SET @ResultMessage = ERROR_MESSAGE();
    END CATCH
END
GO

-- Update permissions route SP reference if needed
-- (sp_UserGroupList - useful for group management)
IF OBJECT_ID('sp_GroupList') IS NOT NULL DROP PROC sp_GroupList;
GO
CREATE PROC sp_GroupList
    @TenantID      INT,
    @ResultCode    INT OUTPUT,
    @ResultMessage NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        SELECT
            g.GroupID, g.TenantID, g.GroupName, g.GroupCode,
            g.Description, g.IsActive,
            (SELECT COUNT(*) FROM tblUserGroups ug WHERE ug.GroupID=g.GroupID) AS MemberCount,
            (SELECT COUNT(*) FROM tblGroupRoles gr WHERE gr.GroupID=g.GroupID) AS RoleCount
        FROM tblGroups g
        WHERE g.IsActive=1 AND (g.TenantID=0 OR g.TenantID=@TenantID)
        ORDER BY g.GroupName;

        SET @ResultCode = 0; SET @ResultMessage = N'OK';
    END TRY
    BEGIN CATCH
        SET @ResultCode = -1; SET @ResultMessage = ERROR_MESSAGE();
    END CATCH
END
GO

PRINT 'RBAC Patch 1 applied successfully.';
GO
