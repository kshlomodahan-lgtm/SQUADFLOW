import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-DEBWI7RP.js";

// src/app/core/services/catalog.service.ts
var CatalogService = class _CatalogService {
  http;
  constructor(http) {
    this.http = http;
  }
  // ── Categories ───────────────────────────────────────────
  getCategories() {
    return this.http.get("/api/categories");
  }
  saveCategory(cat) {
    return cat.CategoryID ? this.http.put(`/api/categories/${cat.CategoryID}`, cat) : this.http.post("/api/categories", cat);
  }
  // ── Products ─────────────────────────────────────────────
  getProducts(search) {
    const params = search ? `?search=${encodeURIComponent(search)}` : "";
    return this.http.get(`/api/products${params}`);
  }
  getProduct(id) {
    return this.http.get(`/api/products/${id}`);
  }
  saveProduct(p) {
    return p.ProductID ? this.http.put(`/api/products/${p.ProductID}`, p) : this.http.post("/api/products", p);
  }
  // ── Packages ─────────────────────────────────────────────
  getPackages() {
    return this.http.get("/api/packages");
  }
  getPackage(id) {
    return this.http.get(`/api/packages/${id}`);
  }
  savePackage(pkg) {
    return pkg.PackageID ? this.http.put(`/api/packages/${pkg.PackageID}`, pkg) : this.http.post("/api/packages", pkg);
  }
  static \u0275fac = function CatalogService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CatalogService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CatalogService, factory: _CatalogService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CatalogService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  CatalogService
};
//# sourceMappingURL=chunk-RDNARHI3.js.map
