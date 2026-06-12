-- Patch: add ProjectID to tblConnectors for project-level scope

IF NOT EXISTS (SELECT 1 FROM sys.columns
               WHERE object_id = OBJECT_ID('dbo.tblConnectors') AND name = 'ProjectID')
BEGIN
    ALTER TABLE dbo.tblConnectors ADD ProjectID INT NULL DEFAULT 0;
    -- update existing rows to have ProjectID = 0
    UPDATE dbo.tblConnectors SET ProjectID = 0 WHERE ProjectID IS NULL;
END
GO

-- Update ScopeLevel constraint/check if needed (informational only)
-- PROJECT scope: TenantID = tenantId, ProductID = 0, ProjectID = projectId
GO
