import {
  HttpClient,
  Injectable,
  __spreadProps,
  __spreadValues,
  map,
  setClassMetadata,
  shareReplay,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VR4UVLCZ.js";

// src/app/core/services/reference.service.ts
var ReferenceService = class _ReferenceService {
  http;
  countries$;
  languages$;
  currencies$;
  constructor(http) {
    this.http = http;
  }
  getCountries(lang = "he") {
    if (!this.countries$) {
      this.countries$ = this.http.get(`/api/reference/countries?lang=${lang}`).pipe(map((r) => r.data.map((c) => __spreadProps(__spreadValues({}, c), { displayName: `${c.FlagEmoji} ${c.ShortName}` }))), shareReplay(1));
    }
    return this.countries$;
  }
  getLanguages() {
    if (!this.languages$) {
      this.languages$ = this.http.get("/api/reference/languages").pipe(map((r) => r.data.map((l) => __spreadProps(__spreadValues({}, l), { displayName: `${l.NativeName}  (${l.LanguageName})` }))), shareReplay(1));
    }
    return this.languages$;
  }
  getCurrencies() {
    if (!this.currencies$) {
      this.currencies$ = this.http.get("/api/reference/currencies").pipe(map((r) => r.data.map((c) => __spreadProps(__spreadValues({}, c), { displayName: `${c.CurrencySymbol}  ${c.CurrencyCode} \u2014 ${c.CurrencyName}` }))), shareReplay(1));
    }
    return this.currencies$;
  }
  static \u0275fac = function ReferenceService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReferenceService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReferenceService, factory: _ReferenceService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReferenceService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ReferenceService
};
//# sourceMappingURL=chunk-JGO6EEA5.js.map
