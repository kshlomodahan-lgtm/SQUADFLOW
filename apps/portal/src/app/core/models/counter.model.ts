export interface Counter {
  CounterID:    number;
  TenantID:     number;
  TenantName:   string;
  CustomerID:   number;
  CustomerName: string;
  ProductID:    number;
  ProductName:  string;
  CounterLevel: string;
  CounterKey:   string;
  CounterName:  string;
  Prefix:       string;
  DateFormat:   string;
  TextPrefix:   string;
  StepValue:    number;
  StartValue:   number;
  MaxValue:     number;
  OutputType:   string;   // 'NUMERIC' | 'STRING'
  IsLocked:     boolean;
  RunningValue: number;
  CurrentValue: number;
  ResetPeriod:  string;
  LastResetDate: string;
  CreatedAt:    string;
  UpdatedAt:    string;
}
