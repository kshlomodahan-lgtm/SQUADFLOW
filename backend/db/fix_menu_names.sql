USE ProfitsCRM;
GO

-- Fix garbled Hebrew MenuItemName values
UPDATE tblMenuItems SET MenuItemName = N'דשבורד'            WHERE MenuItemCode = 'DASHBOARD'          AND TenantID = 0;
UPDATE tblMenuItems SET MenuItemName = N'ארגונים'           WHERE MenuItemCode = 'ORGANIZATIONS'       AND TenantID = 0;
UPDATE tblMenuItems SET MenuItemName = N'משתמשים'           WHERE MenuItemCode = 'USERS'               AND TenantID = 0;
UPDATE tblMenuItems SET MenuItemName = N'קטלוג'             WHERE MenuItemCode = 'CATALOG'             AND TenantID = 0;
UPDATE tblMenuItems SET MenuItemName = N'יומן פעולות'       WHERE MenuItemCode = 'AUDIT'               AND TenantID = 0;
UPDATE tblMenuItems SET MenuItemName = N'הגדרות'            WHERE MenuItemCode = 'SETTINGS'            AND TenantID = 0;
UPDATE tblMenuItems SET MenuItemName = N'חבילות'            WHERE MenuItemCode = 'CATALOG_PACKAGES'    AND TenantID = 0;
UPDATE tblMenuItems SET MenuItemName = N'מוצרים'            WHERE MenuItemCode = 'CATALOG_PRODUCTS'    AND TenantID = 0;
UPDATE tblMenuItems SET MenuItemName = N'קטגוריות'          WHERE MenuItemCode = 'CATALOG_CATEGORIES'  AND TenantID = 0;
UPDATE tblMenuItems SET MenuItemName = N'כללי'              WHERE MenuItemCode = 'SETTINGS_GENERAL'    AND TenantID = 0;
UPDATE tblMenuItems SET MenuItemName = N'עץ תפריטים'        WHERE MenuItemCode = 'SETTINGS_MENU'       AND TenantID = 0;
UPDATE tblMenuItems SET MenuItemName = N'תפקידים והרשאות'   WHERE MenuItemCode = 'SETTINGS_ROLES'      AND TenantID = 0;
UPDATE tblMenuItems SET MenuItemName = N'מבנה ארגוני'       WHERE MenuItemCode = 'SETTINGS_ORGCHART'   AND TenantID = 0;
UPDATE tblMenuItems SET MenuItemName = N'אבטחה'             WHERE MenuItemCode = 'SETTINGS_SECURITY'   AND TenantID = 0;
UPDATE tblMenuItems SET MenuItemName = N'יומן פעילות'       WHERE MenuItemCode = 'SETTINGS_AUDIT_LOG'  AND TenantID = 0;

PRINT 'Menu item names fixed.';
GO
