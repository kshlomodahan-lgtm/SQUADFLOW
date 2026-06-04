export interface Organization {
  TenantID:       number;
  TenantCode:     string;
  CompanyName:    string;
  Email:          string;
  Phone:          string;
  PlanType:       string;
  MaxUsers:       number;
  MaxTickets:     number;
  IsActive:       boolean;
  LogoUrl:        string;
  Notes:          string;
  SubscribedAt:   string;
  ExpiresAt:      string;
  UserCount:      number;
  CustomerCount:  number;
  OpenTickets:    number;
  // שדות חדשים
  BusinessNumber: string;
  Address:        string;
  City:           string;
  Country:        string;
  ContactName:    string;
  Phone2:         string;
  Fax:            string;
  Website:        string;
  BankName:       string;
  BankBranch:     string;
  BankAccount:    string;
  AccountingRef:  string;
}
