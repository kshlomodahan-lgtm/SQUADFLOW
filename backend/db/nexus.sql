-- =============================================
-- NEXUS — מקורות מידע
-- =============================================

IF OBJECT_ID('dbo.tblNexusMappings','U') IS NOT NULL DROP TABLE dbo.tblNexusMappings;
IF OBJECT_ID('dbo.tblNexusSources','U') IS NOT NULL DROP TABLE dbo.tblNexusSources;

CREATE TABLE dbo.tblNexusSources (
    SourceID    INT IDENTITY(1,1) PRIMARY KEY,
    TenantID    INT           NOT NULL,
    ProjectID   INT           NOT NULL,
    SourceName  NVARCHAR(100) NOT NULL,
    SourceType  NVARCHAR(20)  NOT NULL DEFAULT 'DB',  -- DB|API|FILE|SERVICE
    Host        NVARCHAR(200) NULL,
    Port        INT           NULL,
    DbName      NVARCHAR(100) NULL,
    Notes       NVARCHAR(500) NULL,
    Status      NVARCHAR(20)  NOT NULL DEFAULT 'untested',  -- untested|connected|failed
    PosX        FLOAT         NOT NULL DEFAULT 120,
    PosY        FLOAT         NOT NULL DEFAULT 120,
    ColorHex    NVARCHAR(7)   NOT NULL DEFAULT '#0891b2',
    IsActive    BIT           NOT NULL DEFAULT 1,
    CreatedAt   DATETIME      NOT NULL DEFAULT GETDATE(),
    UpdatedAt   DATETIME      NOT NULL DEFAULT GETDATE()
);
CREATE INDEX IX_NexusSources_Tenant  ON dbo.tblNexusSources(TenantID);
CREATE INDEX IX_NexusSources_Project ON dbo.tblNexusSources(TenantID, ProjectID);

CREATE TABLE dbo.tblNexusMappings (
    MappingID  INT IDENTITY(1,1) PRIMARY KEY,
    TenantID   INT          NOT NULL,
    ProjectID  INT          NOT NULL,
    SourceID   INT          NOT NULL REFERENCES dbo.tblNexusSources(SourceID),
    TargetID   INT          NOT NULL REFERENCES dbo.tblNexusSources(SourceID),
    Label      NVARCHAR(50) NULL,
    CreatedAt  DATETIME     NOT NULL DEFAULT GETDATE()
);
CREATE INDEX IX_NexusMappings_Project ON dbo.tblNexusMappings(TenantID, ProjectID);

GO

-- =============================================
-- sp_NexusLoad: טען מקורות ומיפויים לפרויקט
-- =============================================
IF OBJECT_ID('dbo.sp_NexusLoad','P') IS NOT NULL DROP PROCEDURE dbo.sp_NexusLoad;
GO
CREATE PROCEDURE dbo.sp_NexusLoad
    @ProjectID INT,
    @TenantID  INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT SourceID, TenantID, ProjectID, SourceName, SourceType,
           Host, Port, DbName, Notes, Status, PosX, PosY, ColorHex
    FROM dbo.tblNexusSources
    WHERE TenantID = @TenantID AND ProjectID = @ProjectID AND IsActive = 1
    ORDER BY CreatedAt;

    SELECT m.MappingID, m.SourceID, m.TargetID, ISNULL(m.Label,'') AS Label
    FROM dbo.tblNexusMappings m
    INNER JOIN dbo.tblNexusSources s ON s.SourceID = m.SourceID AND s.IsActive = 1
    WHERE m.TenantID = @TenantID AND m.ProjectID = @ProjectID;
END
GO

-- =============================================
-- sp_NexusSourceSave: הוסף / עדכן מקור
-- =============================================
IF OBJECT_ID('dbo.sp_NexusSourceSave','P') IS NOT NULL DROP PROCEDURE dbo.sp_NexusSourceSave;
GO
CREATE PROCEDURE dbo.sp_NexusSourceSave
    @SourceID       INT,
    @TenantID       INT,
    @ProjectID      INT,
    @SourceName     NVARCHAR(100),
    @SourceType     NVARCHAR(20),
    @Host           NVARCHAR(200),
    @Port           INT,
    @DbName         NVARCHAR(100),
    @Notes          NVARCHAR(500),
    @PosX           FLOAT,
    @PosY           FLOAT,
    @ColorHex       NVARCHAR(7),
    @ResultCode     INT OUTPUT,
    @ResultMessage  NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    IF @SourceID = 0
    BEGIN
        INSERT INTO dbo.tblNexusSources
            (TenantID,ProjectID,SourceName,SourceType,Host,Port,DbName,Notes,PosX,PosY,ColorHex)
        VALUES
            (@TenantID,@ProjectID,@SourceName,@SourceType,@Host,@Port,@DbName,@Notes,@PosX,@PosY,@ColorHex);
        SET @ResultCode    = SCOPE_IDENTITY();
        SET @ResultMessage = N'נוצר';
    END
    ELSE
    BEGIN
        UPDATE dbo.tblNexusSources
        SET SourceName=@SourceName, SourceType=@SourceType, Host=@Host,
            Port=@Port, DbName=@DbName, Notes=@Notes,
            PosX=@PosX, PosY=@PosY, ColorHex=@ColorHex, UpdatedAt=GETDATE()
        WHERE SourceID=@SourceID AND TenantID=@TenantID;
        SET @ResultCode    = @SourceID;
        SET @ResultMessage = N'עודכן';
    END
END
GO

-- =============================================
-- sp_NexusSourceGet: טען מקור יחיד (לבדיקת חיבור)
-- =============================================
IF OBJECT_ID('dbo.sp_NexusSourceGet','P') IS NOT NULL DROP PROCEDURE dbo.sp_NexusSourceGet;
GO
CREATE PROCEDURE dbo.sp_NexusSourceGet
    @SourceID INT,
    @TenantID INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT SourceID,SourceName,SourceType,Host,Port,DbName,Status
    FROM dbo.tblNexusSources
    WHERE SourceID=@SourceID AND TenantID=@TenantID AND IsActive=1;
END
GO

-- =============================================
-- sp_NexusSourceMove: עדכן מיקום בלבד
-- =============================================
IF OBJECT_ID('dbo.sp_NexusSourceMove','P') IS NOT NULL DROP PROCEDURE dbo.sp_NexusSourceMove;
GO
CREATE PROCEDURE dbo.sp_NexusSourceMove
    @SourceID INT,
    @TenantID INT,
    @PosX     FLOAT,
    @PosY     FLOAT
AS
BEGIN
    SET NOCOUNT ON;
    UPDATE dbo.tblNexusSources
    SET PosX=@PosX, PosY=@PosY, UpdatedAt=GETDATE()
    WHERE SourceID=@SourceID AND TenantID=@TenantID;
END
GO

-- =============================================
-- sp_NexusSourceStatus: עדכן סטטוס חיבור
-- =============================================
IF OBJECT_ID('dbo.sp_NexusSourceStatus','P') IS NOT NULL DROP PROCEDURE dbo.sp_NexusSourceStatus;
GO
CREATE PROCEDURE dbo.sp_NexusSourceStatus
    @SourceID INT,
    @TenantID INT,
    @Status   NVARCHAR(20)
AS
BEGIN
    SET NOCOUNT ON;
    UPDATE dbo.tblNexusSources
    SET Status=@Status, UpdatedAt=GETDATE()
    WHERE SourceID=@SourceID AND TenantID=@TenantID;
END
GO

-- =============================================
-- sp_NexusSourceDelete: מחיקה רכה
-- =============================================
IF OBJECT_ID('dbo.sp_NexusSourceDelete','P') IS NOT NULL DROP PROCEDURE dbo.sp_NexusSourceDelete;
GO
CREATE PROCEDURE dbo.sp_NexusSourceDelete
    @SourceID      INT,
    @TenantID      INT,
    @ResultCode    INT OUTPUT,
    @ResultMessage NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    DELETE FROM dbo.tblNexusMappings
    WHERE (SourceID=@SourceID OR TargetID=@SourceID) AND TenantID=@TenantID;

    UPDATE dbo.tblNexusSources
    SET IsActive=0, UpdatedAt=GETDATE()
    WHERE SourceID=@SourceID AND TenantID=@TenantID;

    SET @ResultCode=1; SET @ResultMessage=N'נמחק';
END
GO

-- =============================================
-- sp_NexusMappingSave: הוסף חיבור בין מקורות
-- =============================================
IF OBJECT_ID('dbo.sp_NexusMappingSave','P') IS NOT NULL DROP PROCEDURE dbo.sp_NexusMappingSave;
GO
CREATE PROCEDURE dbo.sp_NexusMappingSave
    @TenantID      INT,
    @ProjectID     INT,
    @SourceID      INT,
    @TargetID      INT,
    @Label         NVARCHAR(50),
    @ResultCode    INT OUTPUT,
    @ResultMessage NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    IF EXISTS (SELECT 1 FROM dbo.tblNexusMappings
               WHERE TenantID=@TenantID AND SourceID=@SourceID AND TargetID=@TargetID)
    BEGIN
        SET @ResultCode=-1; SET @ResultMessage=N'חיבור כבר קיים'; RETURN;
    END
    INSERT INTO dbo.tblNexusMappings(TenantID,ProjectID,SourceID,TargetID,Label)
    VALUES(@TenantID,@ProjectID,@SourceID,@TargetID,@Label);
    SET @ResultCode=SCOPE_IDENTITY(); SET @ResultMessage=N'חובר';
END
GO

-- =============================================
-- sp_NexusMappingDelete: מחק חיבור
-- =============================================
IF OBJECT_ID('dbo.sp_NexusMappingDelete','P') IS NOT NULL DROP PROCEDURE dbo.sp_NexusMappingDelete;
GO
CREATE PROCEDURE dbo.sp_NexusMappingDelete
    @MappingID INT,
    @TenantID  INT
AS
BEGIN
    SET NOCOUNT ON;
    DELETE FROM dbo.tblNexusMappings WHERE MappingID=@MappingID AND TenantID=@TenantID;
END
GO
