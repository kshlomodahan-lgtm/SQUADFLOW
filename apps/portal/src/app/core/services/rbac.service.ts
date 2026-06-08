import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface MenuItem {
  MenuItemID: number;
  TenantID: number;
  ParentID: number | null;
  MenuItemCode: string;
  MenuItemName: string;
  MenuItemType: 'FOLDER' | 'SCREEN' | 'ACTION' | 'DIVIDER';
  Route: string | null;
  Icon: string | null;
  SortOrder: number;
  IsVisible: boolean;
  IsActive: boolean;
  AvailableActions: string | null;
  // tree helpers
  children?: MenuItem[];
  expanded?: boolean;
}

export interface RoleItem {
  RoleID: number;
  TenantID: number;
  ParentRoleID: number | null;
  ParentRoleName: string | null;
  RoleName: string;
  RoleCode: string;
  RoleType: 'PLATFORM' | 'TEMPLATE' | 'CUSTOM';
  IsSystem: boolean;
  MaxUsers: number | null;
  ExpiryDate: string | null;
  ColorHex: string;
  SortOrder: number;
  IsActive: boolean;
  UserCount: number;
}

export interface PermissionCell {
  MenuItemID: number;
  MenuItemCode: string;
  MenuItemName: string;
  MenuItemType: string;
  ParentID: number | null;
  SortOrder: number;
  ActionCode: string;
  ActionName: string;
  ActionGroup: string;
  IsAllowed: boolean;
}

export interface OrgUnit {
  OrgUnitID: number;
  ParentOrgUnitID: number | null;
  UnitName: string;
  UnitCode: string;
  UnitType: string;
  Description: string;
  ManagerUserID: number | null;
  BudgetCode: string;
  SortOrder: number;
  IsActive: boolean;
  PositionCount: number;
  children?: OrgUnit[];
  expanded?: boolean;
}

export interface JobTitle {
  JobTitleID: number;
  JobTitleName: string;
  JobTitleCode: string;
  TitleLevel: number;
  DefaultRoleID: number | null;
  DefaultRoleName: string | null;
  IsActive: boolean;
}

export interface OrgPosition {
  PositionID: number;
  OrgUnitID: number;
  JobTitleID: number;
  JobTitleName: string;
  TitleLevel: number;
  DisplayName: string;
  ReportsToPositionID: number | null;
  HeadCount: number;
  IsActive: boolean;
  Occupants: string | null;
  FilledCount: number;
}

@Injectable({ providedIn: 'root' })
export class RbacService {
  private resolvedPermissions = signal<PermissionCell[]>([]);

  constructor(private http: HttpClient) {}

  // ── Menu Items ──────────────────────────────────────────
  getMenuItems(): Observable<{ success: boolean; data: MenuItem[] }> {
    return this.http.get<any>('/api/menu-items');
  }

  saveMenuItem(item: Partial<MenuItem> & { actionCodes?: string }): Observable<any> {
    const id = item.MenuItemID || 0;
    const body = {
      parentId:     item.ParentID || 0,
      menuItemCode: item.MenuItemCode,
      menuItemName: item.MenuItemName,
      menuItemType: item.MenuItemType || 'SCREEN',
      route:        item.Route || '',
      icon:         item.Icon || '',
      sortOrder:    item.SortOrder || 0,
      isVisible:    item.IsVisible !== false,
      isActive:     item.IsActive !== false,
      actionCodes:  item.actionCodes || '',
    };
    return id === 0
      ? this.http.post('/api/menu-items', body)
      : this.http.put(`/api/menu-items/${id}`, body);
  }

  deleteMenuItem(id: number): Observable<any> {
    return this.http.delete(`/api/menu-items/${id}`);
  }

  getActionTypes(): Observable<any> {
    return this.http.get('/api/menu-items/action-types');
  }

  // ── Roles ────────────────────────────────────────────────
  getRoles(): Observable<{ success: boolean; data: RoleItem[] }> {
    return this.http.get<any>('/api/roles');
  }

  saveRole(role: Partial<RoleItem>): Observable<any> {
    const id = role.RoleID || 0;
    const body = {
      parentRoleId: role.ParentRoleID || 0,
      roleName:     role.RoleName,
      roleCode:     role.RoleCode,
      roleType:     role.RoleType || 'CUSTOM',
      maxUsers:     role.MaxUsers || 0,
      expiryDate:   role.ExpiryDate || null,
      colorHex:     role.ColorHex || '#64748b',
      sortOrder:    role.SortOrder || 0,
      isActive:     role.IsActive !== false,
    };
    return id === 0
      ? this.http.post('/api/roles', body)
      : this.http.put(`/api/roles/${id}`, body);
  }

  deleteRole(id: number): Observable<any> {
    return this.http.delete(`/api/roles/${id}`);
  }

  cloneRole(id: number, newRoleName: string, newRoleCode: string): Observable<any> {
    return this.http.post(`/api/roles/${id}/clone`, { newRoleName, newRoleCode });
  }

  getRoleMatrix(roleId: number): Observable<{ success: boolean; data: PermissionCell[] }> {
    return this.http.get<any>(`/api/roles/${roleId}/matrix`);
  }

  saveRoleMatrix(roleId: number, permissions: { menuItemId: number; actionCode: string; isAllowed: boolean }[]): Observable<any> {
    return this.http.post(`/api/roles/${roleId}/matrix`, { permissions });
  }

  // ── Org ──────────────────────────────────────────────────
  getOrgUnits(): Observable<{ success: boolean; data: OrgUnit[] }> {
    return this.http.get<any>('/api/org/units');
  }

  saveOrgUnit(unit: Partial<OrgUnit>): Observable<any> {
    const id = unit.OrgUnitID || 0;
    const body = {
      parentOrgUnitId: unit.ParentOrgUnitID || 0,
      unitName:        unit.UnitName,
      unitCode:        unit.UnitCode,
      unitType:        unit.UnitType || 'DEPARTMENT',
      description:     unit.Description || '',
      managerUserId:   unit.ManagerUserID || 0,
      budgetCode:      unit.BudgetCode || '',
      sortOrder:       unit.SortOrder || 0,
      isActive:        unit.IsActive !== false,
    };
    return id === 0
      ? this.http.post('/api/org/units', body)
      : this.http.put(`/api/org/units/${id}`, body);
  }

  deleteOrgUnit(id: number): Observable<any> {
    return this.http.delete(`/api/org/units/${id}`);
  }

  getJobTitles(): Observable<{ success: boolean; data: JobTitle[] }> {
    return this.http.get<any>('/api/org/job-titles');
  }

  saveJobTitle(jt: Partial<JobTitle>): Observable<any> {
    const id = jt.JobTitleID || 0;
    const body = {
      jobTitleName:  jt.JobTitleName,
      jobTitleCode:  jt.JobTitleCode,
      titleLevel:    jt.TitleLevel || 4,
      defaultRoleId: jt.DefaultRoleID || 0,
      isActive:      jt.IsActive !== false,
    };
    return id === 0
      ? this.http.post('/api/org/job-titles', body)
      : this.http.put(`/api/org/job-titles/${id}`, body);
  }

  getPositions(unitId: number): Observable<{ success: boolean; data: OrgPosition[] }> {
    return this.http.get<any>(`/api/org/positions?unitId=${unitId}`);
  }

  assignUserToPosition(positionId: number, userId: number, startDate: string): Observable<any> {
    return this.http.post(`/api/org/positions/${positionId}/assign`, { userId, startDate, isPrimary: true, autoAssignRole: true });
  }

  // ── Client-side permission resolver ──────────────────────
  resolvePermissions(): Observable<any> {
    return this.http.get<any>('/api/permissions/resolve').pipe(
      tap(r => this.resolvedPermissions.set(r.data || []))
    );
  }

  can(screen: string, action: string): boolean {
    const perms = this.resolvedPermissions();
    if (!perms.length) return true; // not loaded yet → optimistic allow
    return perms.some(p => p.MenuItemCode === screen && p.ActionCode === action && p.IsAllowed);
  }
}
