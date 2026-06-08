import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AuditLogItem {
  AuditID: number;
  TenantID: number;
  CreatedAt: string;
  UserName: string;
  UserID: number | null;
  ActionTypeCode: string;
  ActionTypeName: string;
  BadgeColor: string;
  EntityTypeCode: string;
  EntityTypeName: string;
  EntityID: number | null;
  EntityName: string | null;
  OldValue: string | null;
  NewValue: string | null;
  IPAddress: string | null;
  Severity: string;
  CustomerName: string | null;
  SessionID: string | null;
}

export interface AuditFilter {
  dateFrom?: string | null;
  dateTo?: string | null;
  actionType?: string | null;
  entityType?: string | null;
  severity?: string | null;
  search?: string | null;
  page?: number;
  pageSize?: number;
}

export interface AuditActionType {
  ActionTypeID: number;
  TenantID: number | null;
  ActionTypeCode: string;
  ActionTypeName: string;
  DefaultSeverity: string;
  BadgeColor: string;
  SortOrder: number;
  IsActive: boolean;
  IsPlatform: boolean;
}

export interface AuditEntityType {
  EntityTypeID: number;
  TenantID: number | null;
  EntityTypeCode: string;
  EntityTypeName: string;
  ModuleName: string | null;
  SortOrder: number;
  IsActive: boolean;
  IsPlatform: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuditService {
  private base = '/api/audit';

  constructor(private http: HttpClient) {}

  getList(f: AuditFilter): Observable<{ success: boolean; data: AuditLogItem[]; total: number; page: number; pageSize: number }> {
    let params = new HttpParams();
    if (f.dateFrom)    params = params.set('dateFrom',   f.dateFrom);
    if (f.dateTo)      params = params.set('dateTo',     f.dateTo);
    if (f.actionType)  params = params.set('actionType', f.actionType);
    if (f.entityType)  params = params.set('entityType', f.entityType);
    if (f.severity)    params = params.set('severity',   f.severity);
    if (f.search)      params = params.set('search',     f.search);
    params = params.set('page',     String(f.page     ?? 1));
    params = params.set('pageSize', String(f.pageSize ?? 25));
    return this.http.get<any>(this.base, { params });
  }

  getActionTypes(): Observable<{ success: boolean; data: AuditActionType[] }> {
    return this.http.get<any>(`${this.base}/action-types`);
  }

  getEntityTypes(): Observable<{ success: boolean; data: AuditEntityType[] }> {
    return this.http.get<any>(`${this.base}/entity-types`);
  }

  createActionType(data: Partial<AuditActionType>): Observable<any> {
    return this.http.post(`${this.base}/action-types`, data);
  }

  updateActionType(id: number, data: Partial<AuditActionType>): Observable<any> {
    return this.http.put(`${this.base}/action-types/${id}`, data);
  }

  createEntityType(data: Partial<AuditEntityType>): Observable<any> {
    return this.http.post(`${this.base}/entity-types`, data);
  }

  updateEntityType(id: number, data: Partial<AuditEntityType>): Observable<any> {
    return this.http.put(`${this.base}/entity-types/${id}`, data);
  }
}
