-- ============================================================
-- CORTEX — Data Model Designer
-- ============================================================

-- tblCortexObjects
IF NOT EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME='tblCortexObjects')
CREATE TABLE dbo.tblCortexObjects (
    ObjectID    INT IDENTITY(1,1) PRIMARY KEY,
    TenantID    INT NOT NULL,
    ProjectID   INT NOT NULL,
    ObjectName  NVARCHAR(100) NOT NULL,
    Description NVARCHAR(500) NULL,
    PosX        FLOAT NOT NULL DEFAULT 120,
    PosY        FLOAT NOT NULL DEFAULT 120,
    ColorHex    NVARCHAR(7) NOT NULL DEFAULT '#7c3aed',
    IsActive    BIT NOT NULL DEFAULT 1,
    CreatedAt   DATETIME NOT NULL DEFAULT GETDATE(),
    UpdatedAt   DATETIME NOT NULL DEFAULT GETDATE()
)
GO
PRINT 'tblCortexObjects — OK'
GO

-- tblCortexFields
IF NOT EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME='tblCortexFields')
CREATE TABLE dbo.tblCortexFields (
    FieldID     INT IDENTITY(1,1) PRIMARY KEY,
    ObjectID    INT NOT NULL,
    TenantID    INT NOT NULL,
    FieldName   NVARCHAR(100) NOT NULL,
    DataType    NVARCHAR(50)  NOT NULL DEFAULT 'text',
    IsRequired  BIT NOT NULL DEFAULT 0,
    IsKey       BIT NOT NULL DEFAULT 0,
    SortOrder   INT NOT NULL DEFAULT 0,
    IsActive    BIT NOT NULL DEFAULT 1,
    CreatedAt   DATETIME NOT NULL DEFAULT GETDATE()
)
GO
PRINT 'tblCortexFields — OK'
GO

-- tblCortexConnections
IF NOT EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME='tblCortexConnections')
CREATE TABLE dbo.tblCortexConnections (
    ConnectionID INT IDENTITY(1,1) PRIMARY KEY,
    TenantID     INT NOT NULL,
    ProjectID    INT NOT NULL,
    SourceID     INT NOT NULL,
    TargetID     INT NOT NULL,
    RelationType NVARCHAR(10) NOT NULL DEFAULT '1:N',
    IsActive     BIT NOT NULL DEFAULT 1,
    CreatedAt    DATETIME NOT NULL DEFAULT GETDATE()
)
GO
PRINT 'tblCortexConnections — OK'
GO

-- ============================================================
-- sp_CortexLoad — טוען הכל בבת אחת (3 result sets)
IF OBJECT_ID('dbo.sp_CortexLoad','P') IS NOT NULL DROP PROCEDURE dbo.sp_CortexLoad
GO
CREATE PROCEDURE dbo.sp_CortexLoad
    @ProjectID INT, @TenantID INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT ObjectID, ObjectName, Description, PosX, PosY, ColorHex
    FROM   dbo.tblCortexObjects
    WHERE  ProjectID=@ProjectID AND TenantID=@TenantID AND IsActive=1
    ORDER BY ObjectID;

    SELECT f.FieldID, f.ObjectID, f.FieldName, f.DataType, f.IsRequired, f.IsKey, f.SortOrder
    FROM   dbo.tblCortexFields f
    JOIN   dbo.tblCortexObjects o ON o.ObjectID=f.ObjectID
    WHERE  o.ProjectID=@ProjectID AND f.TenantID=@TenantID AND f.IsActive=1
    ORDER BY f.ObjectID, f.SortOrder, f.FieldID;

    SELECT ConnectionID, SourceID, TargetID, RelationType
    FROM   dbo.tblCortexConnections
    WHERE  ProjectID=@ProjectID AND TenantID=@TenantID AND IsActive=1;
END
GO
PRINT 'sp_CortexLoad — OK'
GO

-- ============================================================
-- sp_CortexObjectSave
IF OBJECT_ID('dbo.sp_CortexObjectSave','P') IS NOT NULL DROP PROCEDURE dbo.sp_CortexObjectSave
GO
CREATE PROCEDURE dbo.sp_CortexObjectSave
    @ObjectID    INT, @TenantID INT, @ProjectID INT,
    @ObjectName  NVARCHAR(100), @Description NVARCHAR(500),
    @PosX FLOAT, @PosY FLOAT, @ColorHex NVARCHAR(7),
    @ResultCode    INT OUTPUT,
    @ResultMessage NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    IF @ObjectID IS NULL OR @ObjectID = 0
    BEGIN
        INSERT INTO dbo.tblCortexObjects(TenantID,ProjectID,ObjectName,Description,PosX,PosY,ColorHex)
        VALUES(@TenantID,@ProjectID,@ObjectName,@Description,@PosX,@PosY,@ColorHex);
        SET @ResultCode = SCOPE_IDENTITY(); SET @ResultMessage = 'נוצר';
    END ELSE BEGIN
        UPDATE dbo.tblCortexObjects
        SET ObjectName=@ObjectName, Description=@Description,
            PosX=@PosX, PosY=@PosY, ColorHex=@ColorHex, UpdatedAt=GETDATE()
        WHERE ObjectID=@ObjectID AND TenantID=@TenantID;
        SET @ResultCode=@ObjectID; SET @ResultMessage='עודכן';
    END
END
GO
PRINT 'sp_CortexObjectSave — OK'
GO

-- ============================================================
-- sp_CortexObjectMove
IF OBJECT_ID('dbo.sp_CortexObjectMove','P') IS NOT NULL DROP PROCEDURE dbo.sp_CortexObjectMove
GO
CREATE PROCEDURE dbo.sp_CortexObjectMove
    @ObjectID INT, @TenantID INT, @PosX FLOAT, @PosY FLOAT
AS
BEGIN
    SET NOCOUNT ON;
    UPDATE dbo.tblCortexObjects
    SET PosX=@PosX, PosY=@PosY, UpdatedAt=GETDATE()
    WHERE ObjectID=@ObjectID AND TenantID=@TenantID;
END
GO
PRINT 'sp_CortexObjectMove — OK'
GO

-- ============================================================
-- sp_CortexObjectDelete
IF OBJECT_ID('dbo.sp_CortexObjectDelete','P') IS NOT NULL DROP PROCEDURE dbo.sp_CortexObjectDelete
GO
CREATE PROCEDURE dbo.sp_CortexObjectDelete
    @ObjectID INT, @TenantID INT,
    @ResultCode INT OUTPUT, @ResultMessage NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    UPDATE dbo.tblCortexFields      SET IsActive=0 WHERE ObjectID=@ObjectID AND TenantID=@TenantID;
    UPDATE dbo.tblCortexConnections SET IsActive=0 WHERE (SourceID=@ObjectID OR TargetID=@ObjectID) AND TenantID=@TenantID;
    UPDATE dbo.tblCortexObjects     SET IsActive=0 WHERE ObjectID=@ObjectID AND TenantID=@TenantID;
    SET @ResultCode=1; SET @ResultMessage='נמחק';
END
GO
PRINT 'sp_CortexObjectDelete — OK'
GO

-- ============================================================
-- sp_CortexFieldSave
IF OBJECT_ID('dbo.sp_CortexFieldSave','P') IS NOT NULL DROP PROCEDURE dbo.sp_CortexFieldSave
GO
CREATE PROCEDURE dbo.sp_CortexFieldSave
    @FieldID INT, @ObjectID INT, @TenantID INT,
    @FieldName NVARCHAR(100), @DataType NVARCHAR(50),
    @IsRequired BIT, @IsKey BIT, @SortOrder INT,
    @ResultCode INT OUTPUT, @ResultMessage NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    IF @FieldID IS NULL OR @FieldID = 0
    BEGIN
        INSERT INTO dbo.tblCortexFields(ObjectID,TenantID,FieldName,DataType,IsRequired,IsKey,SortOrder)
        VALUES(@ObjectID,@TenantID,@FieldName,@DataType,@IsRequired,@IsKey,@SortOrder);
        SET @ResultCode=SCOPE_IDENTITY(); SET @ResultMessage='שדה נוסף';
    END ELSE BEGIN
        UPDATE dbo.tblCortexFields
        SET FieldName=@FieldName, DataType=@DataType,
            IsRequired=@IsRequired, IsKey=@IsKey, SortOrder=@SortOrder
        WHERE FieldID=@FieldID AND TenantID=@TenantID;
        SET @ResultCode=@FieldID; SET @ResultMessage='שדה עודכן';
    END
END
GO
PRINT 'sp_CortexFieldSave — OK'
GO

-- ============================================================
-- sp_CortexFieldDelete
IF OBJECT_ID('dbo.sp_CortexFieldDelete','P') IS NOT NULL DROP PROCEDURE dbo.sp_CortexFieldDelete
GO
CREATE PROCEDURE dbo.sp_CortexFieldDelete
    @FieldID INT, @TenantID INT
AS
BEGIN
    SET NOCOUNT ON;
    UPDATE dbo.tblCortexFields SET IsActive=0
    WHERE FieldID=@FieldID AND TenantID=@TenantID;
END
GO
PRINT 'sp_CortexFieldDelete — OK'
GO

-- ============================================================
-- sp_CortexConnectionSave
IF OBJECT_ID('dbo.sp_CortexConnectionSave','P') IS NOT NULL DROP PROCEDURE dbo.sp_CortexConnectionSave
GO
CREATE PROCEDURE dbo.sp_CortexConnectionSave
    @SourceID INT, @TargetID INT, @TenantID INT, @ProjectID INT,
    @RelationType NVARCHAR(10),
    @ResultCode INT OUTPUT, @ResultMessage NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    IF EXISTS (SELECT 1 FROM dbo.tblCortexConnections
               WHERE SourceID=@SourceID AND TargetID=@TargetID
                 AND TenantID=@TenantID AND IsActive=1)
    BEGIN SET @ResultCode=-1; SET @ResultMessage='חיבור קיים'; RETURN; END

    INSERT INTO dbo.tblCortexConnections(TenantID,ProjectID,SourceID,TargetID,RelationType)
    VALUES(@TenantID,@ProjectID,@SourceID,@TargetID,@RelationType);
    SET @ResultCode=SCOPE_IDENTITY(); SET @ResultMessage='חיבור נוצר';
END
GO
PRINT 'sp_CortexConnectionSave — OK'
GO

-- ============================================================
-- sp_CortexConnectionDelete
IF OBJECT_ID('dbo.sp_CortexConnectionDelete','P') IS NOT NULL DROP PROCEDURE dbo.sp_CortexConnectionDelete
GO
CREATE PROCEDURE dbo.sp_CortexConnectionDelete
    @ConnectionID INT, @TenantID INT
AS
BEGIN
    SET NOCOUNT ON;
    UPDATE dbo.tblCortexConnections SET IsActive=0
    WHERE ConnectionID=@ConnectionID AND TenantID=@TenantID;
END
GO
PRINT 'sp_CortexConnectionDelete — OK'
GO
