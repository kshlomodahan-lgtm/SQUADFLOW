import {
  HttpClient,
  HttpParams,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VR4UVLCZ.js";

// src/app/core/services/audit.service.ts
var AuditService = class _AuditService {
  http;
  base = "/api/audit";
  constructor(http) {
    this.http = http;
  }
  getList(f) {
    let params = new HttpParams();
    if (f.dateFrom)
      params = params.set("dateFrom", f.dateFrom);
    if (f.dateTo)
      params = params.set("dateTo", f.dateTo);
    if (f.actionType)
      params = params.set("actionType", f.actionType);
    if (f.entityType)
      params = params.set("entityType", f.entityType);
    if (f.severity)
      params = params.set("severity", f.severity);
    if (f.search)
      params = params.set("search", f.search);
    params = params.set("page", String(f.page ?? 1));
    params = params.set("pageSize", String(f.pageSize ?? 25));
    return this.http.get(this.base, { params });
  }
  getActionTypes() {
    return this.http.get(`${this.base}/action-types`);
  }
  getEntityTypes() {
    return this.http.get(`${this.base}/entity-types`);
  }
  createActionType(data) {
    return this.http.post(`${this.base}/action-types`, data);
  }
  updateActionType(id, data) {
    return this.http.put(`${this.base}/action-types/${id}`, data);
  }
  createEntityType(data) {
    return this.http.post(`${this.base}/entity-types`, data);
  }
  updateEntityType(id, data) {
    return this.http.put(`${this.base}/entity-types/${id}`, data);
  }
  static \u0275fac = function AuditService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuditService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuditService, factory: _AuditService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AuditService
};
//# sourceMappingURL=chunk-JETCYHLS.js.map
