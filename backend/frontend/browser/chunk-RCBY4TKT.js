import {
  HttpClient,
  Injectable,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VR4UVLCZ.js";

// src/app/core/services/rbac.service.ts
var RbacService = class _RbacService {
  http;
  resolvedPermissions = signal(
    [],
    ...ngDevMode ? [{ debugName: "resolvedPermissions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _permissionsLoaded = signal(
    false,
    ...ngDevMode ? [{ debugName: "_permissionsLoaded" }] : (
      /* istanbul ignore next */
      []
    )
  );
  permissionsLoaded = this._permissionsLoaded.asReadonly();
  constructor(http) {
    this.http = http;
  }
  // ── Menu Items ──────────────────────────────────────────
  getMenuItems() {
    return this.http.get("/api/menu-items");
  }
  saveMenuItem(item) {
    const id = item.MenuItemID || 0;
    const body = {
      parentId: item.ParentID || 0,
      menuItemCode: item.MenuItemCode,
      menuItemName: item.MenuItemName,
      menuItemType: item.MenuItemType || "SCREEN",
      route: item.Route || "",
      icon: item.Icon || "",
      sortOrder: item.SortOrder || 0,
      isVisible: item.IsVisible !== false,
      isActive: item.IsActive !== false,
      actionCodes: item.actionCodes || ""
    };
    return id === 0 ? this.http.post("/api/menu-items", body) : this.http.put(`/api/menu-items/${id}`, body);
  }
  deleteMenuItem(id) {
    return this.http.delete(`/api/menu-items/${id}`);
  }
  syncMenuFromRoutes() {
    return this.http.post("/api/menu-items/sync-from-routes", {});
  }
  getActionTypes() {
    return this.http.get("/api/menu-items/action-types");
  }
  // ── Screen Fields ─────────────────────────────────────────
  getScreenFields(menuItemCode) {
    return this.http.get(`/api/screen-fields/${menuItemCode}`);
  }
  scanScreenFields(menuItemCode) {
    return this.http.post(`/api/screen-fields/${menuItemCode}/scan`, {});
  }
  saveScreenFields(menuItemCode, fields) {
    return this.http.put(`/api/screen-fields/${menuItemCode}`, { fields });
  }
  getRoleFieldPermissions(roleId, menuItemCode) {
    return this.http.get(`/api/roles/${roleId}/field-permissions/${menuItemCode}`);
  }
  saveRoleFieldPermissions(roleId, menuItemCode, permissions) {
    return this.http.put(`/api/roles/${roleId}/field-permissions/${menuItemCode}`, { permissions });
  }
  // ── Roles ────────────────────────────────────────────────
  getRoles() {
    return this.http.get("/api/roles");
  }
  saveRole(role) {
    const id = role.RoleID || 0;
    const body = {
      parentRoleId: role.ParentRoleID || 0,
      roleName: role.RoleName,
      roleCode: role.RoleCode,
      roleType: role.RoleType || "CUSTOM",
      maxUsers: role.MaxUsers || 0,
      expiryDate: role.ExpiryDate || null,
      colorHex: role.ColorHex || "#64748b",
      sortOrder: role.SortOrder || 0,
      isActive: role.IsActive !== false
    };
    return id === 0 ? this.http.post("/api/roles", body) : this.http.put(`/api/roles/${id}`, body);
  }
  deleteRole(id) {
    return this.http.delete(`/api/roles/${id}`);
  }
  cloneRole(id, newRoleName, newRoleCode) {
    return this.http.post(`/api/roles/${id}/clone`, { newRoleName, newRoleCode });
  }
  getRoleMatrix(roleId) {
    return this.http.get(`/api/roles/${roleId}/matrix`);
  }
  saveRoleMatrix(roleId, permissions) {
    return this.http.post(`/api/roles/${roleId}/matrix`, { permissions });
  }
  // ── Org ──────────────────────────────────────────────────
  getOrgUnits() {
    return this.http.get("/api/org/units");
  }
  saveOrgUnit(unit) {
    const id = unit.OrgUnitID || 0;
    const body = {
      parentOrgUnitId: unit.ParentOrgUnitID || 0,
      unitName: unit.UnitName,
      unitCode: unit.UnitCode,
      unitType: unit.UnitType || "DEPARTMENT",
      description: unit.Description || "",
      managerUserId: unit.ManagerUserID || 0,
      budgetCode: unit.BudgetCode || "",
      sortOrder: unit.SortOrder || 0,
      isActive: unit.IsActive !== false
    };
    return id === 0 ? this.http.post("/api/org/units", body) : this.http.put(`/api/org/units/${id}`, body);
  }
  deleteOrgUnit(id) {
    return this.http.delete(`/api/org/units/${id}`);
  }
  getJobTitles() {
    return this.http.get("/api/org/job-titles");
  }
  saveJobTitle(jt) {
    const id = jt.JobTitleID || 0;
    const body = {
      jobTitleName: jt.JobTitleName,
      jobTitleCode: jt.JobTitleCode,
      titleLevel: jt.TitleLevel || 4,
      defaultRoleId: jt.DefaultRoleID || 0,
      isActive: jt.IsActive !== false
    };
    return id === 0 ? this.http.post("/api/org/job-titles", body) : this.http.put(`/api/org/job-titles/${id}`, body);
  }
  getPositions(unitId) {
    return this.http.get(`/api/org/positions?unitId=${unitId}`);
  }
  assignUserToPosition(positionId, userId, startDate) {
    return this.http.post(`/api/org/positions/${positionId}/assign`, { userId, startDate, isPrimary: true, autoAssignRole: true });
  }
  getPositionUsers(positionId) {
    return this.http.get(`/api/org/positions/${positionId}/users`);
  }
  removeUserFromPosition(positionId, userId) {
    return this.http.delete(`/api/org/positions/${positionId}/users/${userId}`);
  }
  // ── Client-side permission resolver ──────────────────────
  resolvePermissions() {
    return this.http.get("/api/permissions/resolve").pipe(tap((r) => {
      this.resolvedPermissions.set(r.data || []);
      this._permissionsLoaded.set(true);
    }));
  }
  can(screen, action) {
    if (!this._permissionsLoaded())
      return true;
    return this.resolvedPermissions().some((p) => p.MenuItemCode === screen && p.ActionCode === action && p.IsAllowed);
  }
  static \u0275fac = function RbacService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RbacService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RbacService, factory: _RbacService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RbacService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  RbacService
};
//# sourceMappingURL=chunk-RCBY4TKT.js.map
