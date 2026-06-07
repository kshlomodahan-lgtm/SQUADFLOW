export interface Counter {
  CounterID:    number;
  TenantID:     number;
  CustomerID:   number;
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
