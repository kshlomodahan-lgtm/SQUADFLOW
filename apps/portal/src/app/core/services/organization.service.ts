import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Organization } from '../models/organization.model';

@Injectable({ providedIn: 'root' })
export class OrganizationService {
  private base = '/api/tenants';

  constructor(private http: HttpClient) {}

  getAll(): Observable<{ success: boolean; tenants: Organization[] }> {
    return this.http.get<{ success: boolean; tenants: Organization[] }>(this.base);
  }

  create(data: Partial<Organization>): Observable<any> {
    return this.http.post(this.base, data);
  }

  update(id: number, data: Partial<Organization>): Observable<any> {
    return this.http.put(`${this.base}/${id}`, data);
  }

  toggleActive(id: number): Observable<{ success: boolean; isActive: boolean }> {
    return this.http.put<{ success: boolean; isActive: boolean }>(`${this.base}/${id}/toggle`, {});
  }
}
