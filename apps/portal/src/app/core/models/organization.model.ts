export interface Organization {
  TenantID:     number;
  TenantCode:   string;
  CompanyName:  string;
  Email:        string;
  Phone:        string;
  PlanType:     string;
  MaxUsers:     number;
  MaxTickets:   number;
  IsActive:     boolean;
  LogoUrl:      string;
  SubscribedAt: string;
  ExpiresAt:    string;
  Notes:        string;
  UserCount:    number;
  CustomerCount: number;
  OpenTickets:  number;
}
