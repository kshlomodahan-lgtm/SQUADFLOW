-- CORTEX patch: add Format column + reorder SP

-- 1. Add Format column if not exists
IF NOT EXISTS (SELECT 1 FROM sys.columns
               WHERE object_id = OBJECT_ID('dbo.tblCortexFields') AND name = 'Format')
BEGIN
    ALTER TABLE dbo.tblCortexFields
    ADD Format NVARCHAR(50) NULL;
END
GO

-- 2. Update sp_CortexFieldSave to include Format
IF OBJECT_ID('dbo.sp_CortexFieldSave','P') IS NOT NULL DROP PROCEDURE dbo.sp_CortexFieldSave;
GO
CREATE PROCEDURE dbo.sp_CortexFieldSave
    @FieldID        INT,
    @ObjectID       INT,
    @TenantID       INT,
    @FieldName      NVARCHAR(100),
    @DataType       NVARCHAR(50),
    @Format         NVARCHAR(50) = NULL,
    @IsRequired     BIT,
    @IsKey          BIT,
    @SortOrder      INT,
    @ResultCode     INT OUTPUT,
    @ResultMessage  NVARCHAR(200) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    IF @FieldID = 0
    BEGIN
        INSERT INTO dbo.tblCortexFields
            (ObjectID, TenantID, FieldName, DataType, Format, IsRequired, IsKey, SortOrder)
        VALUES
            (@ObjectID, @TenantID, @FieldName, @DataType, @Format, @IsRequired, @IsKey, @SortOrder);
        SET @ResultCode    = SCOPE_IDENTITY();
        SET @ResultMessage = N'שדה נוצר';
    END
    ELSE
    BEGIN
        UPDATE dbo.tblCortexFields
        SET FieldName=@FieldName, DataType=@DataType, Format=@Format,
            IsRequired=@IsRequired, IsKey=@IsKey, SortOrder=@SortOrder
        WHERE FieldID=@FieldID AND TenantID=@TenantID;
        SET @ResultCode    = @FieldID;
        SET @ResultMessage = N'שדה עודכן';
    END
END
GO

-- 3. sp_CortexFieldReorder — swap SortOrder between two adjacent fields
IF OBJECT_ID('dbo.sp_CortexFieldReorder','P') IS NOT NULL DROP PROCEDURE dbo.sp_CortexFieldReorder;
GO
CREATE PROCEDURE dbo.sp_CortexFieldReorder
    @FieldID    INT,
    @ObjectID   INT,
    @TenantID   INT,
    @Direction  NVARCHAR(4)   -- 'up' | 'down'
AS
BEGIN
    SET NOCOUNT ON;
    DECLARE @CurOrder INT;
    SELECT @CurOrder = SortOrder
    FROM dbo.tblCortexFields
    WHERE FieldID=@FieldID AND TenantID=@TenantID AND IsActive=1;

    IF @CurOrder IS NULL RETURN;

    DECLARE @SwapID    INT;
    DECLARE @SwapOrder INT;

    IF @Direction = 'up'
    BEGIN
        SELECT TOP 1 @SwapID=FieldID, @SwapOrder=SortOrder
        FROM dbo.tblCortexFields
        WHERE ObjectID=@ObjectID AND TenantID=@TenantID AND IsActive=1
          AND SortOrder < @CurOrder
        ORDER BY SortOrder DESC;
    END
    ELSE
    BEGIN
        SELECT TOP 1 @SwapID=FieldID, @SwapOrder=SortOrder
        FROM dbo.tblCortexFields
        WHERE ObjectID=@ObjectID AND TenantID=@TenantID AND IsActive=1
          AND SortOrder > @CurOrder
        ORDER BY SortOrder ASC;
    END

    IF @SwapID IS NULL RETURN;

    UPDATE dbo.tblCortexFields SET SortOrder=@SwapOrder WHERE FieldID=@FieldID   AND TenantID=@TenantID;
    UPDATE dbo.tblCortexFields SET SortOrder=@CurOrder  WHERE FieldID=@SwapID    AND TenantID=@TenantID;
END
GO
