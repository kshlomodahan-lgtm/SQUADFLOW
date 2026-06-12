-- ============================================================================
-- Load ARCHEM data model into CORTEX — ProjectID=2, TenantID=1
-- Direct INSERT (no stored procs needed)
-- ============================================================================
USE ProfitsCRM;
GO

DECLARE @TID INT = 1, @PID INT = 2;
DECLARE @OID INT;

-- ── 1. tblCompanies ──────────────────────────────────────────────────────────
IF NOT EXISTS (SELECT 1 FROM dbo.tblCortexObjects
               WHERE TenantID=@TID AND ProjectID=@PID AND ObjectName='tblCompanies' AND IsActive=1)
BEGIN
  INSERT INTO dbo.tblCortexObjects(TenantID,ProjectID,ObjectName,Description,PosX,PosY,ColorHex,IsActive)
  VALUES(@TID,@PID,N'tblCompanies',N'חברות (קוד ייחוס)',100,80,'#7c3aed',1);
  SET @OID = SCOPE_IDENTITY();
  INSERT INTO dbo.tblCortexFields(ObjectID,TenantID,FieldName,DataType,IsRequired,IsKey,SortOrder,Format,IsActive) VALUES
  (@OID,@TID,'CompanyID','number',1,1,1,NULL,1),
  (@OID,@TID,'NameHE','text',0,0,2,NULL,1),
  (@OID,@TID,'NameEN','text',0,0,3,NULL,1),
  (@OID,@TID,'Address1','text',0,0,4,NULL,1),
  (@OID,@TID,'Phone1','text',0,0,5,NULL,1),
  (@OID,@TID,'IsActive','boolean',1,0,6,NULL,1);
  PRINT 'Created tblCompanies (OID=' + CAST(@OID AS VARCHAR) + ')';
END
ELSE PRINT 'tblCompanies already exists — skipped';
GO

DECLARE @TID INT = 1, @PID INT = 2; DECLARE @OID INT;

-- ── 2. tblCurrencies ─────────────────────────────────────────────────────────
IF NOT EXISTS (SELECT 1 FROM dbo.tblCortexObjects
               WHERE TenantID=@TID AND ProjectID=@PID AND ObjectName='tblCurrencies' AND IsActive=1)
BEGIN
  INSERT INTO dbo.tblCortexObjects(TenantID,ProjectID,ObjectName,Description,PosX,PosY,ColorHex,IsActive)
  VALUES(@TID,@PID,N'tblCurrencies',N'מטבעות',460,80,'#0891b2',1);
  SET @OID = SCOPE_IDENTITY();
  INSERT INTO dbo.tblCortexFields(ObjectID,TenantID,FieldName,DataType,IsRequired,IsKey,SortOrder,Format,IsActive) VALUES
  (@OID,@TID,'CurrencyID','number',1,1,1,NULL,1),
  (@OID,@TID,'CurrencyDesc','text',0,0,2,NULL,1),
  (@OID,@TID,'CurrencySymbol','text',0,0,3,NULL,1),
  (@OID,@TID,'IsBase','boolean',1,0,4,NULL,1),
  (@OID,@TID,'IsActive','boolean',1,0,5,NULL,1);
  PRINT 'Created tblCurrencies (OID=' + CAST(@OID AS VARCHAR) + ')';
END
ELSE PRINT 'tblCurrencies already exists — skipped';
GO

DECLARE @TID INT = 1, @PID INT = 2; DECLARE @OID INT;

-- ── 3. tblPaymentTerms ───────────────────────────────────────────────────────
IF NOT EXISTS (SELECT 1 FROM dbo.tblCortexObjects
               WHERE TenantID=@TID AND ProjectID=@PID AND ObjectName='tblPaymentTerms' AND IsActive=1)
BEGIN
  INSERT INTO dbo.tblCortexObjects(TenantID,ProjectID,ObjectName,Description,PosX,PosY,ColorHex,IsActive)
  VALUES(@TID,@PID,N'tblPaymentTerms',N'תנאי תשלום',820,80,'#059669',1);
  SET @OID = SCOPE_IDENTITY();
  INSERT INTO dbo.tblCortexFields(ObjectID,TenantID,FieldName,DataType,IsRequired,IsKey,SortOrder,Format,IsActive) VALUES
  (@OID,@TID,'PaymentTermID','number',1,1,1,NULL,1),
  (@OID,@TID,'Description1','text',0,0,2,NULL,1),
  (@OID,@TID,'Description2','text',0,0,3,NULL,1),
  (@OID,@TID,'CreditDays','number',0,0,4,NULL,1);
  PRINT 'Created tblPaymentTerms (OID=' + CAST(@OID AS VARCHAR) + ')';
END
ELSE PRINT 'tblPaymentTerms already exists — skipped';
GO

DECLARE @TID INT = 1, @PID INT = 2; DECLARE @OID INT;

-- ── 4. tblSalesDomains ───────────────────────────────────────────────────────
IF NOT EXISTS (SELECT 1 FROM dbo.tblCortexObjects
               WHERE TenantID=@TID AND ProjectID=@PID AND ObjectName='tblSalesDomains' AND IsActive=1)
BEGIN
  INSERT INTO dbo.tblCortexObjects(TenantID,ProjectID,ObjectName,Description,PosX,PosY,ColorHex,IsActive)
  VALUES(@TID,@PID,N'tblSalesDomains',N'תחומי מכירה',100,400,'#e11d48',1);
  SET @OID = SCOPE_IDENTITY();
  INSERT INTO dbo.tblCortexFields(ObjectID,TenantID,FieldName,DataType,IsRequired,IsKey,SortOrder,Format,IsActive) VALUES
  (@OID,@TID,'SalesDomainID','number',1,1,1,NULL,1),
  (@OID,@TID,'DomainName','text',0,0,2,NULL,1),
  (@OID,@TID,'Prefix','text',0,0,3,NULL,1),
  (@OID,@TID,'IsActive','boolean',1,0,4,NULL,1);
  PRINT 'Created tblSalesDomains (OID=' + CAST(@OID AS VARCHAR) + ')';
END
ELSE PRINT 'tblSalesDomains already exists — skipped';
GO

DECLARE @TID INT = 1, @PID INT = 2; DECLARE @OID INT;

-- ── 5. tblSalesPersons ───────────────────────────────────────────────────────
IF NOT EXISTS (SELECT 1 FROM dbo.tblCortexObjects
               WHERE TenantID=@TID AND ProjectID=@PID AND ObjectName='tblSalesPersons' AND IsActive=1)
BEGIN
  INSERT INTO dbo.tblCortexObjects(TenantID,ProjectID,ObjectName,Description,PosX,PosY,ColorHex,IsActive)
  VALUES(@TID,@PID,N'tblSalesPersons',N'אנשי מכירות',460,400,'#d97706',1);
  SET @OID = SCOPE_IDENTITY();
  INSERT INTO dbo.tblCortexFields(ObjectID,TenantID,FieldName,DataType,IsRequired,IsKey,SortOrder,Format,IsActive) VALUES
  (@OID,@TID,'SalesPersonID','number',1,1,1,NULL,1),
  (@OID,@TID,'NameHE','text',0,0,2,NULL,1),
  (@OID,@TID,'NameEN','text',0,0,3,NULL,1),
  (@OID,@TID,'RoleCode','text',0,0,4,NULL,1),
  (@OID,@TID,'IsActive','boolean',1,0,5,NULL,1);
  PRINT 'Created tblSalesPersons (OID=' + CAST(@OID AS VARCHAR) + ')';
END
ELSE PRINT 'tblSalesPersons already exists — skipped';
GO

DECLARE @TID INT = 1, @PID INT = 2; DECLARE @OID INT;

-- ── 6. tblSuppliers ──────────────────────────────────────────────────────────
IF NOT EXISTS (SELECT 1 FROM dbo.tblCortexObjects
               WHERE TenantID=@TID AND ProjectID=@PID AND ObjectName='tblSuppliers' AND IsActive=1)
BEGIN
  INSERT INTO dbo.tblCortexObjects(TenantID,ProjectID,ObjectName,Description,PosX,PosY,ColorHex,IsActive)
  VALUES(@TID,@PID,N'tblSuppliers',N'ספקים',820,400,'#7c3aed',1);
  SET @OID = SCOPE_IDENTITY();
  INSERT INTO dbo.tblCortexFields(ObjectID,TenantID,FieldName,DataType,IsRequired,IsKey,SortOrder,Format,IsActive) VALUES
  (@OID,@TID,'SupplierID','number',1,1,1,NULL,1),
  (@OID,@TID,'ShortName','text',0,0,2,NULL,1),
  (@OID,@TID,'FullName','text',0,0,3,NULL,1),
  (@OID,@TID,'Address1','text',0,0,4,NULL,1),
  (@OID,@TID,'City','text',0,0,5,NULL,1),
  (@OID,@TID,'Country','text',0,0,6,NULL,1),
  (@OID,@TID,'Phone1','text',0,0,7,NULL,1),
  (@OID,@TID,'Fax','text',0,0,8,NULL,1),
  (@OID,@TID,'VATNumber','text',0,0,9,NULL,1),
  (@OID,@TID,'PSNPrefix','text',0,0,10,NULL,1),
  (@OID,@TID,'PSNNumerator','number',0,0,11,NULL,1),
  (@OID,@TID,'IsActive','boolean',1,0,12,NULL,1),
  (@OID,@TID,'CreatedAt','datetime',0,0,13,'DD/MM/YYYY HH:mm',1),
  (@OID,@TID,'UpdatedAt','datetime',0,0,14,'DD/MM/YYYY HH:mm',1);
  PRINT 'Created tblSuppliers (OID=' + CAST(@OID AS VARCHAR) + ')';
END
ELSE PRINT 'tblSuppliers already exists — skipped';
GO

DECLARE @TID INT = 1, @PID INT = 2; DECLARE @OID INT;

-- ── 7. tblCustomers ──────────────────────────────────────────────────────────
IF NOT EXISTS (SELECT 1 FROM dbo.tblCortexObjects
               WHERE TenantID=@TID AND ProjectID=@PID AND ObjectName='tblCustomers' AND IsActive=1)
BEGIN
  INSERT INTO dbo.tblCortexObjects(TenantID,ProjectID,ObjectName,Description,PosX,PosY,ColorHex,IsActive)
  VALUES(@TID,@PID,N'tblCustomers',N'לקוחות',100,720,'#0891b2',1);
  SET @OID = SCOPE_IDENTITY();
  INSERT INTO dbo.tblCortexFields(ObjectID,TenantID,FieldName,DataType,IsRequired,IsKey,SortOrder,Format,IsActive) VALUES
  (@OID,@TID,'CustomerID','number',1,1,1,NULL,1),
  (@OID,@TID,'ShortNameHE','text',0,0,2,NULL,1),
  (@OID,@TID,'FullNameHE','text',0,0,3,NULL,1),
  (@OID,@TID,'ShortNameEN','text',0,0,4,NULL,1),
  (@OID,@TID,'FullNameEN','text',0,0,5,NULL,1),
  (@OID,@TID,'CityEN','text',0,0,6,NULL,1),
  (@OID,@TID,'CountryEN','text',0,0,7,NULL,1),
  (@OID,@TID,'Phone1','text',0,0,8,NULL,1),
  (@OID,@TID,'VATRate','money',0,0,9,'10.4',1),
  (@OID,@TID,'CompanyRegNo','text',0,0,10,NULL,1),
  (@OID,@TID,'StatusID','number',0,0,11,NULL,1),
  (@OID,@TID,'DefaultCurrencyID','number',0,0,12,NULL,1),
  (@OID,@TID,'DefaultPaymentTermID','number',0,0,13,NULL,1),
  (@OID,@TID,'DefaultSalesDomainID','number',0,0,14,NULL,1),
  (@OID,@TID,'PSNPrefix','text',0,0,15,NULL,1),
  (@OID,@TID,'PSNNumerator','number',0,0,16,NULL,1),
  (@OID,@TID,'Notes','text',0,0,17,NULL,1),
  (@OID,@TID,'IsActive','boolean',1,0,18,NULL,1),
  (@OID,@TID,'CreatedAt','datetime',0,0,19,'DD/MM/YYYY HH:mm',1),
  (@OID,@TID,'UpdatedAt','datetime',0,0,20,'DD/MM/YYYY HH:mm',1);
  PRINT 'Created tblCustomers (OID=' + CAST(@OID AS VARCHAR) + ')';
END
ELSE PRINT 'tblCustomers already exists — skipped';
GO

DECLARE @TID INT = 1, @PID INT = 2; DECLARE @OID INT;

-- ── 8. tblItemLinks ──────────────────────────────────────────────────────────
IF NOT EXISTS (SELECT 1 FROM dbo.tblCortexObjects
               WHERE TenantID=@TID AND ProjectID=@PID AND ObjectName='tblItemLinks' AND IsActive=1)
BEGIN
  INSERT INTO dbo.tblCortexObjects(TenantID,ProjectID,ObjectName,Description,PosX,PosY,ColorHex,IsActive)
  VALUES(@TID,@PID,N'tblItemLinks',N'קישורי פריטים ספק-לקוח',600,720,'#059669',1);
  SET @OID = SCOPE_IDENTITY();
  INSERT INTO dbo.tblCortexFields(ObjectID,TenantID,FieldName,DataType,IsRequired,IsKey,SortOrder,Format,IsActive) VALUES
  (@OID,@TID,'ItemLinkID','number',1,1,1,NULL,1),
  (@OID,@TID,'SupplierID','number',1,0,2,NULL,1),
  (@OID,@TID,'SupplierSKU','text',0,0,3,NULL,1),
  (@OID,@TID,'CustomerID','number',1,0,4,NULL,1),
  (@OID,@TID,'CustomerSKU','text',0,0,5,NULL,1),
  (@OID,@TID,'CustomerSKUDesc','text',0,0,6,NULL,1),
  (@OID,@TID,'UOMID','number',0,0,7,NULL,1),
  (@OID,@TID,'ResponsibleUserID','number',0,0,8,NULL,1),
  (@OID,@TID,'IsActive','boolean',1,0,9,NULL,1),
  (@OID,@TID,'IsTempSKU','boolean',1,0,10,NULL,1),
  (@OID,@TID,'IsGlobalSKU','boolean',1,0,11,NULL,1),
  (@OID,@TID,'CreatedAt','datetime',0,0,12,'DD/MM/YYYY HH:mm',1),
  (@OID,@TID,'UpdatedAt','datetime',0,0,13,'DD/MM/YYYY HH:mm',1);
  PRINT 'Created tblItemLinks (OID=' + CAST(@OID AS VARCHAR) + ')';
END
ELSE PRINT 'tblItemLinks already exists — skipped';
GO

DECLARE @TID INT = 1, @PID INT = 2; DECLARE @OID INT;

-- ── 9. tblOrders ─────────────────────────────────────────────────────────────
IF NOT EXISTS (SELECT 1 FROM dbo.tblCortexObjects
               WHERE TenantID=@TID AND ProjectID=@PID AND ObjectName='tblOrders' AND IsActive=1)
BEGIN
  INSERT INTO dbo.tblCortexObjects(TenantID,ProjectID,ObjectName,Description,PosX,PosY,ColorHex,IsActive)
  VALUES(@TID,@PID,N'tblOrders',N'הזמנות רכש',1100,400,'#e11d48',1);
  SET @OID = SCOPE_IDENTITY();
  INSERT INTO dbo.tblCortexFields(ObjectID,TenantID,FieldName,DataType,IsRequired,IsKey,SortOrder,Format,IsActive) VALUES
  (@OID,@TID,'OrderID','number',1,1,1,NULL,1),
  (@OID,@TID,'CompanyID','number',1,0,2,NULL,1),
  (@OID,@TID,'OrderYear','number',1,0,3,NULL,1),
  (@OID,@TID,'OrderNumber','number',1,0,4,NULL,1),
  (@OID,@TID,'GroupNo','number',1,0,5,NULL,1),
  (@OID,@TID,'SupplierID','number',0,0,6,NULL,1),
  (@OID,@TID,'CustomerID','number',0,0,7,NULL,1),
  (@OID,@TID,'CurrencyID','number',0,0,8,NULL,1),
  (@OID,@TID,'OrderDate','date',0,0,9,'DD/MM/YYYY',1),
  (@OID,@TID,'SupplierOC','text',0,0,10,NULL,1),
  (@OID,@TID,'SupplierOCDate','date',0,0,11,'DD/MM/YYYY',1),
  (@OID,@TID,'DesiredDeliveryDate','date',0,0,12,'DD/MM/YYYY',1),
  (@OID,@TID,'UpdatedDeliveryDate','date',0,0,13,'DD/MM/YYYY',1),
  (@OID,@TID,'BLNumber','text',0,0,14,NULL,1),
  (@OID,@TID,'VesselName','text',0,0,15,NULL,1),
  (@OID,@TID,'ETD','date',0,0,16,'DD/MM/YYYY',1),
  (@OID,@TID,'ETA','date',0,0,17,'DD/MM/YYYY',1),
  (@OID,@TID,'ATA','date',0,0,18,'DD/MM/YYYY',1),
  (@OID,@TID,'SupplierInvoiceNo','text',0,0,19,NULL,1),
  (@OID,@TID,'SupplierInvoiceDate','date',0,0,20,'DD/MM/YYYY',1),
  (@OID,@TID,'InvoiceAmount','money',0,0,21,'10.3',1),
  (@OID,@TID,'AmountPaidByCustomer','money',0,0,22,'10.3',1),
  (@OID,@TID,'CommissionAmtReceived','money',0,0,23,'10.3',1),
  (@OID,@TID,'TotalValue','money',0,0,24,'10.3',1),
  (@OID,@TID,'TotalCommission','money',0,0,25,'10.3',1),
  (@OID,@TID,'TransportMode','text',0,0,26,NULL,1),
  (@OID,@TID,'CustomerPaid','boolean',0,0,27,NULL,1),
  (@OID,@TID,'CommissionReceived','boolean',0,0,28,NULL,1),
  (@OID,@TID,'HasDocuments','boolean',1,0,29,NULL,1),
  (@OID,@TID,'IsFrozen','boolean',1,0,30,NULL,1),
  (@OID,@TID,'IsCancelled','boolean',1,0,31,NULL,1),
  (@OID,@TID,'IsImportant','boolean',1,0,32,NULL,1),
  (@OID,@TID,'IsFrameContract','boolean',1,0,33,NULL,1),
  (@OID,@TID,'IsActive','boolean',1,0,34,NULL,1),
  (@OID,@TID,'CreatedAt','datetime',0,0,35,'DD/MM/YYYY HH:mm',1),
  (@OID,@TID,'UpdatedAt','datetime',0,0,36,'DD/MM/YYYY HH:mm',1);
  PRINT 'Created tblOrders (OID=' + CAST(@OID AS VARCHAR) + ')';
END
ELSE PRINT 'tblOrders already exists — skipped';
GO

DECLARE @TID INT = 1, @PID INT = 2; DECLARE @OID INT;

-- ── 10. tblOrderLines ────────────────────────────────────────────────────────
IF NOT EXISTS (SELECT 1 FROM dbo.tblCortexObjects
               WHERE TenantID=@TID AND ProjectID=@PID AND ObjectName='tblOrderLines' AND IsActive=1)
BEGIN
  INSERT INTO dbo.tblCortexObjects(TenantID,ProjectID,ObjectName,Description,PosX,PosY,ColorHex,IsActive)
  VALUES(@TID,@PID,N'tblOrderLines',N'שורות הזמנה',1100,800,'#d97706',1);
  SET @OID = SCOPE_IDENTITY();
  INSERT INTO dbo.tblCortexFields(ObjectID,TenantID,FieldName,DataType,IsRequired,IsKey,SortOrder,Format,IsActive) VALUES
  (@OID,@TID,'OrderLineID','number',1,1,1,NULL,1),
  (@OID,@TID,'OrderID','number',1,0,2,NULL,1),
  (@OID,@TID,'CompanyID','number',1,0,3,NULL,1),
  (@OID,@TID,'OrderYear','number',1,0,4,NULL,1),
  (@OID,@TID,'OrderNumber','number',1,0,5,NULL,1),
  (@OID,@TID,'GroupNo','number',1,0,6,NULL,1),
  (@OID,@TID,'LineNo','number',1,0,7,NULL,1),
  (@OID,@TID,'SupplierID','number',0,0,8,NULL,1),
  (@OID,@TID,'CustomerID','number',0,0,9,NULL,1),
  (@OID,@TID,'SupplierSKU','text',0,0,10,NULL,1),
  (@OID,@TID,'CustomerSKU','text',0,0,11,NULL,1),
  (@OID,@TID,'Description','text',0,0,12,NULL,1),
  (@OID,@TID,'Price','money',0,0,13,'10.3',1),
  (@OID,@TID,'PerQty','number',0,0,14,NULL,1),
  (@OID,@TID,'UOM','text',0,0,15,NULL,1),
  (@OID,@TID,'CurrencyID','number',0,0,16,NULL,1),
  (@OID,@TID,'QtyOrdered','money',0,0,17,'10.3',1),
  (@OID,@TID,'QtyRemaining','money',0,0,18,'10.3',1),
  (@OID,@TID,'DiscountPct','money',0,0,19,'10.4',1),
  (@OID,@TID,'LineValue','money',0,0,20,'10.3',1),
  (@OID,@TID,'DeliveryDate','date',0,0,21,'DD/MM/YYYY',1),
  (@OID,@TID,'CommissionType','text',0,0,22,NULL,1),
  (@OID,@TID,'CommissionPct','money',0,0,23,'10.4',1),
  (@OID,@TID,'CommissionFixed','money',0,0,24,'10.3',1),
  (@OID,@TID,'CommissionPerPrice','money',0,0,25,'10.3',1),
  (@OID,@TID,'CommissionPerQty','number',0,0,26,NULL,1),
  (@OID,@TID,'IsFrameContract','boolean',1,0,27,NULL,1),
  (@OID,@TID,'IsActive','boolean',1,0,28,NULL,1),
  (@OID,@TID,'ItemLinkID','number',0,0,29,NULL,1),
  (@OID,@TID,'CreatedAt','datetime',0,0,30,'DD/MM/YYYY HH:mm',1),
  (@OID,@TID,'UpdatedAt','datetime',0,0,31,'DD/MM/YYYY HH:mm',1);
  PRINT 'Created tblOrderLines (OID=' + CAST(@OID AS VARCHAR) + ')';
END
ELSE PRINT 'tblOrderLines already exists — skipped';
GO

-- ── Verify ───────────────────────────────────────────────────────────────────
SELECT o.ObjectID, o.ObjectName, COUNT(f.FieldID) AS FieldCount
FROM dbo.tblCortexObjects o
LEFT JOIN dbo.tblCortexFields f ON f.ObjectID=o.ObjectID AND f.IsActive=1
WHERE o.TenantID=1 AND o.ProjectID=2 AND o.IsActive=1
GROUP BY o.ObjectID, o.ObjectName
ORDER BY o.ObjectID;
GO
