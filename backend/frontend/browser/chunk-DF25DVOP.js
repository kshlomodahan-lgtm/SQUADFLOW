import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-DEBWI7RP.js";

// src/app/core/services/organization.service.ts
var OrganizationService = class _OrganizationService {
  http;
  base = "/api/tenants";
  constructor(http) {
    this.http = http;
  }
  getAll() {
    return this.http.get(this.base);
  }
  create(data) {
    return this.http.post(this.base, data);
  }
  update(id, data) {
    return this.http.put(`${this.base}/${id}`, data);
  }
  toggleActive(id) {
    return this.http.put(`${this.base}/${id}/toggle`, {});
  }
  static \u0275fac = function OrganizationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrganizationService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrganizationService, factory: _OrganizationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  OrganizationService
};
//# sourceMappingURL=chunk-DF25DVOP.js.map
