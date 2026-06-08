-- ============================================================
-- SQUADFLOW — RBAC + Org Chart Tables
-- Phase 1.1–1.4  |  DB Architect Standard
-- ============================================================

USE SquadFlowDB;
GO

-- ============================================================
-- PHASE 1.1 — Core RBAC Tables
-- ============================================================

-- Action Types (catalog: READ, CREATE, UPDATE, DELETE, ...)
IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblActionTypes' AND xtype='U')
CREATE TABLE tblActionTypes (
    ActionCode    VARCHAR(30)    NOT NULL CONSTRAINT PK_ActionTypes PRIMARY KEY,
    ActionName    NVARCHAR(50)   NOT NULL,
    ActionGroup   VARCHAR(20)    NOT NULL DEFAULT 'CRUD',  -- CRUD / VIEW / WORKFLOW / MANAGE
    SortOrder     INT            NOT NULL DEFAULT 0,
    IsActive      BIT            NOT NULL DEFAULT 1
);
GO

-- Menu Items — hierarchical tree per tenant (TenantID=0 = platform)
IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblMenuItems' AND xtype='U')
CREATE TABLE tblMenuItems (
    MenuItemID      INT            NOT NULL IDENTITY(1,1) CONSTRAINT PK_MenuItems PRIMARY KEY,
    TenantID        INT            NOT NULL DEFAULT 0,
    ParentID        INT            NULL,
    MenuItemCode    NVARCHAR(50)   NOT NULL,
    MenuItemName    NVARCHAR(100)  NOT NULL,
    MenuItemType    VARCHAR(20)    NOT NULL DEFAULT 'SCREEN',  -- FOLDER/SCREEN/ACTION/DIVIDER
    Route           NVARCHAR(200)  NULL,
    Icon            NVARCHAR(50)   NULL,
    SortOrder       INT            NOT NULL DEFAULT 0,
    IsVisible       BIT            NOT NULL DEFAULT 1,
    IsActive        BIT            NOT NULL DEFAULT 1,
    CreatedAt       DATETIME       NOT NULL DEFAULT GETDATE(),
    UpdatedAt       DATETIME       NOT NULL DEFAULT GETDATE(),
    CONSTRAINT FK_MenuItems_Parent FOREIGN KEY (ParentID) REFERENCES tblMenuItems(MenuItemID)
);
GO

CREATE UNIQUE INDEX UX_MenuItems_Code_Tenant ON tblMenuItems(TenantID, MenuItemCode);
GO

-- Available actions per menu item
IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblMenuItemActions' AND xtype='U')
CREATE TABLE tblMenuItemActions (
    MenuItemID  INT         NOT NULL,
    ActionCode  VARCHAR(30) NOT NULL,
    IsDefault   BIT         NOT NULL DEFAULT 0,
    CONSTRAINT PK_MenuItemActions PRIMARY KEY (MenuItemID, ActionCode),
    CONSTRAINT FK_MIA_MenuItem FOREIGN KEY (MenuItemID) REFERENCES tblMenuItems(MenuItemID),
    CONSTRAINT FK_MIA_Action   FOREIGN KEY (ActionCode) REFERENCES tblActionTypes(ActionCode)
);
GO

-- Roles (with inheritance via ParentRoleID)
IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblRoles' AND xtype='U')
CREATE TABLE tblRoles (
    RoleID          INT             NOT NULL IDENTITY(1,1) CONSTRAINT PK_Roles PRIMARY KEY,
    TenantID        INT             NOT NULL DEFAULT 0,
    ParentRoleID    INT             NULL,
    RoleName        NVARCHAR(100)   NOT NULL,
    RoleCode        VARCHAR(50)     NOT NULL,
    RoleType        VARCHAR(20)     NOT NULL DEFAULT 'CUSTOM',  -- PLATFORM/TEMPLATE/CUSTOM
    IsSystem        BIT             NOT NULL DEFAULT 0,
    MaxUsers        INT             NULL,
    ExpiryDate      DATE            NULL,
    ColorHex        VARCHAR(7)      NULL DEFAULT '#64748b',
    SortOrder       INT             NOT NULL DEFAULT 0,
    IsActive        BIT             NOT NULL DEFAULT 1,
    CreatedAt       DATETIME        NOT NULL DEFAULT GETDATE(),
    UpdatedAt       DATETIME        NOT NULL DEFAULT GETDATE(),
    CONSTRAINT FK_Roles_Parent FOREIGN KEY (ParentRoleID) REFERENCES tblRoles(RoleID)
);
GO

CREATE UNIQUE INDEX UX_Roles_Code_Tenant ON tblRoles(TenantID, RoleCode);
GO

-- Permission Matrix: Role × MenuItem × ActionCode
IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblRolePermissions' AND xtype='U')
CREATE TABLE tblRolePermissions (
    RoleID          INT         NOT NULL,
    MenuItemID      INT         NOT NULL,
    ActionCode      VARCHAR(30) NOT NULL,
    IsAllowed       BIT         NOT NULL DEFAULT 0,
    UpdatedAt       DATETIME    NOT NULL DEFAULT GETDATE(),
    UpdatedByUserID INT         NULL,
    CONSTRAINT PK_RolePermissions PRIMARY KEY (RoleID, MenuItemID, ActionCode),
    CONSTRAINT FK_RP_Role     FOREIGN KEY (RoleID)     REFERENCES tblRoles(RoleID),
    CONSTRAINT FK_RP_MenuItem FOREIGN KEY (MenuItemID) REFERENCES tblMenuItems(MenuItemID),
    CONSTRAINT FK_RP_Action   FOREIGN KEY (ActionCode) REFERENCES tblActionTypes(ActionCode)
);
GO

-- Groups
IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblGroups' AND xtype='U')
CREATE TABLE tblGroups (
    GroupID     INT             NOT NULL IDENTITY(1,1) CONSTRAINT PK_Groups PRIMARY KEY,
    TenantID    INT             NOT NULL,
    GroupName   NVARCHAR(100)   NOT NULL,
    GroupCode   VARCHAR(50)     NOT NULL,
    Description NVARCHAR(200)   NULL,
    IsActive    BIT             NOT NULL DEFAULT 1,
    CreatedAt   DATETIME        NOT NULL DEFAULT GETDATE()
);
GO

-- Group → Roles (M:M)
IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblGroupRoles' AND xtype='U')
CREATE TABLE tblGroupRoles (
    GroupID INT NOT NULL,
    RoleID  INT NOT NULL,
    CONSTRAINT PK_GroupRoles PRIMARY KEY (GroupID, RoleID),
    CONSTRAINT FK_GR_Group FOREIGN KEY (GroupID) REFERENCES tblGroups(GroupID),
    CONSTRAINT FK_GR_Role  FOREIGN KEY (RoleID)  REFERENCES tblRoles(RoleID)
);
GO

-- User → Groups (M:M)
IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblUserGroups' AND xtype='U')
CREATE TABLE tblUserGroups (
    UserID    INT      NOT NULL,
    GroupID   INT      NOT NULL,
    JoinedAt  DATETIME NOT NULL DEFAULT GETDATE(),
    CONSTRAINT PK_UserGroups PRIMARY KEY (UserID, GroupID),
    CONSTRAINT FK_UG_Group FOREIGN KEY (GroupID) REFERENCES tblGroups(GroupID)
);
GO

-- User → Roles (direct assignment, optional expiry)
IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblUserRoles' AND xtype='U')
CREATE TABLE tblUserRoles (
    UserID            INT      NOT NULL,
    RoleID            INT      NOT NULL,
    AssignedAt        DATETIME NOT NULL DEFAULT GETDATE(),
    AssignedByUserID  INT      NULL,
    ExpiryDate        DATETIME NULL,
    IsActive          BIT      NOT NULL DEFAULT 1,
    CONSTRAINT PK_UserRoles PRIMARY KEY (UserID, RoleID),
    CONSTRAINT FK_UR_Role FOREIGN KEY (RoleID) REFERENCES tblRoles(RoleID)
);
GO

-- Per-user permission overrides (add or remove specific permissions)
IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblUserPermissionOverrides' AND xtype='U')
CREATE TABLE tblUserPermissionOverrides (
    OverrideID      INT             NOT NULL IDENTITY(1,1) CONSTRAINT PK_UserPermOverrides PRIMARY KEY,
    UserID          INT             NOT NULL,
    MenuItemID      INT             NOT NULL,
    ActionCode      VARCHAR(30)     NOT NULL,
    IsAllowed       BIT             NOT NULL,
    Reason          NVARCHAR(200)   NULL,
    ExpiryDate      DATETIME        NULL,
    GrantedByUserID INT             NULL,
    CreatedAt       DATETIME        NOT NULL DEFAULT GETDATE(),
    CONSTRAINT FK_UPO_MenuItem FOREIGN KEY (MenuItemID) REFERENCES tblMenuItems(MenuItemID),
    CONSTRAINT FK_UPO_Action   FOREIGN KEY (ActionCode) REFERENCES tblActionTypes(ActionCode)
);
GO

-- ============================================================
-- PHASE 1.2 — Security Tables
-- ============================================================

IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblUserSecuritySettings' AND xtype='U')
CREATE TABLE tblUserSecuritySettings (
    UserID                  INT     NOT NULL CONSTRAINT PK_UserSecuritySettings PRIMARY KEY,
    -- Password expiry
    PasswordNeverExpires    BIT     NOT NULL DEFAULT 0,
    CannotChangePassword    BIT     NOT NULL DEFAULT 0,
    EnableStrengthRules     BIT     NOT NULL DEFAULT 0,
    MinPasswordLength       INT     NOT NULL DEFAULT 8,
    MaxPasswordLength       INT     NOT NULL DEFAULT 64,
    EnableCharacterRules    BIT     NOT NULL DEFAULT 0,
    -- History
    EnableHistoryRules      BIT     NOT NULL DEFAULT 0,
    HistoryCount            INT     NOT NULL DEFAULT 5,
    -- Expiry
    EnableExpiryRules       BIT     NOT NULL DEFAULT 0,
    MustChangeOnNextLogin   BIT     NOT NULL DEFAULT 0,
    ForceChangeDate         DATE    NULL,
    ExpiryDays              INT     NOT NULL DEFAULT 90,
    WarnDaysBefore          INT     NOT NULL DEFAULT 7,
    WarnMessage1            NVARCHAR(200) NULL,
    WarnMessage2            NVARCHAR(200) NULL,
    -- Lockout
    MaxFailedAttempts       INT     NOT NULL DEFAULT 5,
    LockoutAction           VARCHAR(20) NOT NULL DEFAULT 'LOCK',  -- LOCK/TEMP/RESET/NONE
    LockoutMinutes          INT     NOT NULL DEFAULT 30,
    NotifyAdminOnLockout    BIT     NOT NULL DEFAULT 0,
    -- 2FA
    Enable2FA               BIT     NOT NULL DEFAULT 0,
    OTPDigits               INT     NOT NULL DEFAULT 6,
    -- Login hours
    EnableLoginHours        BIT     NOT NULL DEFAULT 0,
    -- IP
    EnableIPWhitelist       BIT     NOT NULL DEFAULT 0,
    UpdatedAt               DATETIME NOT NULL DEFAULT GETDATE()
);
GO

IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblPasswordCharRules' AND xtype='U')
CREATE TABLE tblPasswordCharRules (
    RuleID      INT             NOT NULL IDENTITY(1,1) CONSTRAINT PK_PasswordCharRules PRIMARY KEY,
    UserID      INT             NOT NULL,
    RuleName    NVARCHAR(50)    NOT NULL,
    Characters  NVARCHAR(100)   NOT NULL,
    IsRequired  BIT             NOT NULL DEFAULT 1,
    MinCount    INT             NOT NULL DEFAULT 1,
    MaxCount    INT             NULL,
    SortOrder   INT             NOT NULL DEFAULT 0
);
GO

IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblUserLoginHours' AND xtype='U')
CREATE TABLE tblUserLoginHours (
    LoginHourID INT     NOT NULL IDENTITY(1,1) CONSTRAINT PK_UserLoginHours PRIMARY KEY,
    UserID      INT     NOT NULL,
    DayOfWeek   TINYINT NULL,       -- 0=Sun..6=Sat, NULL=specific date
    SpecificDate DATE   NULL,
    FromTime    TIME    NOT NULL,
    ToTime      TIME    NOT NULL,
    IsAllowed   BIT     NOT NULL DEFAULT 1
);
GO

IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblUserIPWhitelist' AND xtype='U')
CREATE TABLE tblUserIPWhitelist (
    IPID        INT             NOT NULL IDENTITY(1,1) CONSTRAINT PK_UserIPWhitelist PRIMARY KEY,
    UserID      INT             NOT NULL,
    IPAddress   VARCHAR(45)     NOT NULL,
    IPMask      VARCHAR(45)     NULL,
    Note        NVARCHAR(100)   NULL,
    IsActive    BIT             NOT NULL DEFAULT 1
);
GO

-- ============================================================
-- PHASE 1.3 — Org Structure
-- ============================================================

IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblJobTitles' AND xtype='U')
CREATE TABLE tblJobTitles (
    JobTitleID      INT             NOT NULL IDENTITY(1,1) CONSTRAINT PK_JobTitles PRIMARY KEY,
    TenantID        INT             NOT NULL,
    JobTitleName    NVARCHAR(100)   NOT NULL,
    JobTitleCode    VARCHAR(50)     NOT NULL,
    TitleLevel      TINYINT         NOT NULL DEFAULT 4,  -- 1=Executive, 2=Senior, 3=Manager, 4=Employee
    DefaultRoleID   INT             NULL,  -- auto-assign when user placed in position
    IsActive        BIT             NOT NULL DEFAULT 1,
    CONSTRAINT FK_JT_Role FOREIGN KEY (DefaultRoleID) REFERENCES tblRoles(RoleID)
);
GO

IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblOrgUnits' AND xtype='U')
CREATE TABLE tblOrgUnits (
    OrgUnitID       INT             NOT NULL IDENTITY(1,1) CONSTRAINT PK_OrgUnits PRIMARY KEY,
    TenantID        INT             NOT NULL,
    ParentOrgUnitID INT             NULL,
    UnitName        NVARCHAR(100)   NOT NULL,
    UnitCode        VARCHAR(30)     NOT NULL,
    UnitType        VARCHAR(20)     NOT NULL DEFAULT 'DEPARTMENT',  -- COMPANY/DIVISION/DEPARTMENT/TEAM/UNIT
    Description     NVARCHAR(200)   NULL,
    ManagerUserID   INT             NULL,
    BudgetCode      VARCHAR(30)     NULL,
    SortOrder       INT             NOT NULL DEFAULT 0,
    IsActive        BIT             NOT NULL DEFAULT 1,
    CreatedAt       DATETIME        NOT NULL DEFAULT GETDATE(),
    CONSTRAINT FK_OrgUnits_Parent FOREIGN KEY (ParentOrgUnitID) REFERENCES tblOrgUnits(OrgUnitID)
);
GO

IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblOrgPositions' AND xtype='U')
CREATE TABLE tblOrgPositions (
    PositionID          INT             NOT NULL IDENTITY(1,1) CONSTRAINT PK_OrgPositions PRIMARY KEY,
    OrgUnitID           INT             NOT NULL,
    JobTitleID          INT             NOT NULL,
    ReportsToPositionID INT             NULL,
    PositionName        NVARCHAR(100)   NULL,  -- override of JobTitle name
    HeadCount           INT             NOT NULL DEFAULT 1,
    IsActive            BIT             NOT NULL DEFAULT 1,
    CONSTRAINT FK_OP_OrgUnit  FOREIGN KEY (OrgUnitID)           REFERENCES tblOrgUnits(OrgUnitID),
    CONSTRAINT FK_OP_JobTitle FOREIGN KEY (JobTitleID)           REFERENCES tblJobTitles(JobTitleID),
    CONSTRAINT FK_OP_ReportsTo FOREIGN KEY (ReportsToPositionID) REFERENCES tblOrgPositions(PositionID)
);
GO

IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblUserPositions' AND xtype='U')
CREATE TABLE tblUserPositions (
    UserPositionID  INT     NOT NULL IDENTITY(1,1) CONSTRAINT PK_UserPositions PRIMARY KEY,
    UserID          INT     NOT NULL,
    PositionID      INT     NOT NULL,
    StartDate       DATE    NOT NULL DEFAULT CAST(GETDATE() AS DATE),
    EndDate         DATE    NULL,
    IsPrimary       BIT     NOT NULL DEFAULT 1,
    IsActive        BIT     NOT NULL DEFAULT 1,
    CONSTRAINT FK_UP_Position FOREIGN KEY (PositionID) REFERENCES tblOrgPositions(PositionID)
);
GO

-- ============================================================
-- PHASE 1.4 — Content Groups + SaaS Features
-- ============================================================

IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblContentGroups' AND xtype='U')
CREATE TABLE tblContentGroups (
    ContentGroupID  INT             NOT NULL IDENTITY(1,1) CONSTRAINT PK_ContentGroups PRIMARY KEY,
    TenantID        INT             NOT NULL,
    GroupName       NVARCHAR(100)   NOT NULL,
    EntityType      VARCHAR(50)     NOT NULL,  -- CUSTOMER/PRODUCT/INVOICE/ORDER
    IsActive        BIT             NOT NULL DEFAULT 1
);
GO

IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblContentGroupFilters' AND xtype='U')
CREATE TABLE tblContentGroupFilters (
    FilterID        INT             NOT NULL IDENTITY(1,1) CONSTRAINT PK_ContentGroupFilters PRIMARY KEY,
    ContentGroupID  INT             NOT NULL,
    FilterField     VARCHAR(50)     NOT NULL,   -- SalespersonID / BranchID / etc.
    FilterOperator  VARCHAR(10)     NOT NULL DEFAULT 'EQ',  -- EQ/IN/BETWEEN/LIKE/ME
    FilterValue     NVARCHAR(200)   NOT NULL,
    CONSTRAINT FK_CGF_Group FOREIGN KEY (ContentGroupID) REFERENCES tblContentGroups(ContentGroupID)
);
GO

IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblRoleContentGroups' AND xtype='U')
CREATE TABLE tblRoleContentGroups (
    RoleID          INT NOT NULL,
    ContentGroupID  INT NOT NULL,
    CONSTRAINT PK_RoleContentGroups PRIMARY KEY (RoleID, ContentGroupID),
    CONSTRAINT FK_RCG_Role  FOREIGN KEY (RoleID)         REFERENCES tblRoles(RoleID),
    CONSTRAINT FK_RCG_Group FOREIGN KEY (ContentGroupID) REFERENCES tblContentGroups(ContentGroupID)
);
GO

-- Temporary permissions (time-boxed)
IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblTempPermissions' AND xtype='U')
CREATE TABLE tblTempPermissions (
    TempPermID          INT             NOT NULL IDENTITY(1,1) CONSTRAINT PK_TempPermissions PRIMARY KEY,
    GrantedToUserID     INT             NOT NULL,
    RoleID              INT             NULL,
    MenuItemID          INT             NULL,
    ActionCode          VARCHAR(30)     NULL,
    IsAllowed           BIT             NOT NULL DEFAULT 1,
    ValidFrom           DATETIME        NOT NULL DEFAULT GETDATE(),
    ValidUntil          DATETIME        NOT NULL,
    Reason              NVARCHAR(200)   NULL,
    GrantedByUserID     INT             NULL,
    IsActive            BIT             NOT NULL DEFAULT 1
);
GO

-- Permission delegations (user A delegates to user B)
IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblPermissionDelegations' AND xtype='U')
CREATE TABLE tblPermissionDelegations (
    DelegationID    INT             NOT NULL IDENTITY(1,1) CONSTRAINT PK_PermDelegations PRIMARY KEY,
    FromUserID      INT             NOT NULL,
    ToUserID        INT             NOT NULL,
    RoleID          INT             NULL,
    ValidFrom       DATETIME        NOT NULL DEFAULT GETDATE(),
    ValidUntil      DATETIME        NOT NULL,
    Reason          NVARCHAR(200)   NULL,
    IsActive        BIT             NOT NULL DEFAULT 1
);
GO

-- Audit trail for all permission changes
IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblPermissionChangesLog' AND xtype='U')
CREATE TABLE tblPermissionChangesLog (
    LogID               INT             NOT NULL IDENTITY(1,1) CONSTRAINT PK_PermChangesLog PRIMARY KEY,
    TenantID            INT             NOT NULL,
    ChangedByUserID     INT             NOT NULL,
    ChangeType          VARCHAR(30)     NOT NULL,  -- ROLE_ADD/ROLE_REMOVE/PERM_CHANGE/OVERRIDE_ADD/OVERRIDE_REMOVE
    TargetUserID        INT             NULL,
    TargetRoleID        INT             NULL,
    MenuItemID          INT             NULL,
    ActionCode          VARCHAR(30)     NULL,
    OldValue            NVARCHAR(MAX)   NULL,
    NewValue            NVARCHAR(MAX)   NULL,
    Reason              NVARCHAR(200)   NULL,
    CreatedAt           DATETIME        NOT NULL DEFAULT GETDATE()
);
GO

PRINT 'RBAC + Org Chart tables created successfully.';
GO
