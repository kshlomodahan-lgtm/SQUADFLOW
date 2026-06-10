export interface User {
  UserID:         number;
  TenantID:       number;
  Username:       string;
  FirstName:      string;
  LastName:       string;
  FullName:       string;
  Email:          string;
  RoleID:         number;
  IsActive:       boolean;
  LastLoginAt:    string | null;
  CreatedAt:        string | null;
  MustChangePass:   boolean;
  TenantCode:       string;
  OrgName:          string;
  LogoUrl:          string;
  RoleName:         string;
  RoleCode:         string;
  DeptName:         string | null;
  Phone:            string | null;
  JobTitle:         string | null;
  Notes:            string | null;
  PrimaryOrgUnitID: number | null;
}
