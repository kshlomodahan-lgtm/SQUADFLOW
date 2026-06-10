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
  MustChangePass: boolean;
  TenantCode:     string;
  OrgName:        string;
  LogoUrl:        string;
  RoleName:       string;
  RoleCode:       string;
}
