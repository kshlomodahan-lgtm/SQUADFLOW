import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

export interface UserRole { RoleID: number; RoleName: string; RoleCode: string; }

@Injectable({ providedIn: 'root' })
export class UserService {
  private base = '/api/users';

  constructor(private http: HttpClient) {}

  getAll(): Observable<{ success: boolean; users: User[]; isPlatform: boolean }> {
    return this.http.get<{ success: boolean; users: User[]; isPlatform: boolean }>(this.base);
  }

  getById(id: number): Observable<{ success: boolean; user: User }> {
    return this.http.get<{ success: boolean; user: User }>(`${this.base}/${id}`);
  }

  getRoles(): Observable<{ success: boolean; roles: UserRole[] }> {
    return this.http.get<{ success: boolean; roles: UserRole[] }>(`${this.base}/roles`);
  }

  create(data: Partial<User> & { password: string }): Observable<any> {
    return this.http.post(this.base, data);
  }

  update(id: number, data: Partial<User>): Observable<any> {
    return this.http.put(`${this.base}/${id}`, data);
  }

  changePassword(id: number, newPassword: string): Observable<{ success: boolean; message: string }> {
    return this.http.put<{ success: boolean; message: string }>(`${this.base}/${id}/password`, { newPassword });
  }

  toggleActive(id: number): Observable<{ success: boolean; isActive: boolean }> {
    return this.http.put<{ success: boolean; isActive: boolean }>(`${this.base}/${id}/toggle`, {});
  }
}
