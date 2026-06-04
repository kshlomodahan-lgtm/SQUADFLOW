export interface LoginRequest {
  tenantCode: string;
  username:   string;
  password:   string;
}

export interface LoginUser {
  userId:     number;
  roleId:     number;
  customerId: number;
  tenantId:   number;
  fullName:   string;
  roleName:   string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  token:   string;
  user:    LoginUser;
}
