import {
  Router
} from "./chunk-6FLZKXJD.js";
import {
  HttpClient,
  Injectable,
  computed,
  effect,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-DEBWI7RP.js";

// src/app/core/services/theme.service.ts
var COLOR_SCHEMES = [
  { id: "blue", label: "\u05DB\u05D7\u05D5\u05DC", primary: "#0D47FF" },
  { id: "teal", label: "\u05EA\u05DB\u05DC\u05EA", primary: "#0891b2" },
  { id: "purple", label: "\u05E1\u05D2\u05D5\u05DC", primary: "#7c3aed" },
  { id: "green", label: "\u05D9\u05E8\u05D5\u05E7", primary: "#059669" },
  { id: "rose", label: "\u05D0\u05D3\u05D5\u05DD", primary: "#e11d48" },
  { id: "amber", label: "\u05DB\u05EA\u05D5\u05DD", primary: "#d97706" }
];
var ThemeService = class _ThemeService {
  http;
  MODE_KEY = "sf-theme-mode";
  SCHEME_KEY = "sf-theme-scheme";
  mode = signal(
    localStorage.getItem(this.MODE_KEY) ?? "light",
    ...ngDevMode ? [{ debugName: "mode" }] : (
      /* istanbul ignore next */
      []
    )
  );
  scheme = signal(
    localStorage.getItem(this.SCHEME_KEY) ?? "blue",
    ...ngDevMode ? [{ debugName: "scheme" }] : (
      /* istanbul ignore next */
      []
    )
  );
  schemes = COLOR_SCHEMES;
  constructor(http) {
    this.http = http;
    effect(() => {
      const m = this.mode();
      const s = this.scheme();
      document.documentElement.setAttribute("data-theme", m);
      document.documentElement.setAttribute("data-scheme", s);
      localStorage.setItem(this.MODE_KEY, m);
      localStorage.setItem(this.SCHEME_KEY, s);
    });
  }
  // קריאה מהשרת (אחרי login) — מחליף localStorage
  applyFromServer(colorScheme, darkMode) {
    const scheme = COLOR_SCHEMES.find((s) => s.id === colorScheme)?.id ?? "blue";
    this.scheme.set(scheme);
    this.mode.set(darkMode ? "dark" : "light");
  }
  toggleMode() {
    this.mode.update((m) => m === "light" ? "dark" : "light");
  }
  setScheme(s) {
    this.scheme.set(s);
  }
  isDark() {
    return this.mode() === "dark";
  }
  // שמירת העדפה אישית לשרת
  saveUserTheme() {
    return this.http.put("/api/theme/user", {
      colorScheme: this.scheme(),
      darkMode: this.isDark()
    });
  }
  // שמירת ברירת מחדל לארגון (מנהל בלבד)
  saveOrgTheme() {
    return this.http.put("/api/theme/org", {
      colorScheme: this.scheme(),
      darkMode: this.isDark()
    });
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/core/services/auth.service.ts
var TOKEN_KEY = "sf_token";
var USER_KEY = "sf_user";
var API_BASE = "/api";
var AuthService = class _AuthService {
  http;
  router;
  theme;
  _user = signal(
    this.loadUser(),
    ...ngDevMode ? [{ debugName: "_user" }] : (
      /* istanbul ignore next */
      []
    )
  );
  user = this._user.asReadonly();
  isLoggedIn = computed(
    () => this._user() !== null,
    ...ngDevMode ? [{ debugName: "isLoggedIn" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor(http, router, theme) {
    this.http = http;
    this.router = router;
    this.theme = theme;
  }
  login(req) {
    return this.http.post(`${API_BASE}/auth/login`, req).pipe(tap((res) => {
      if (res.success) {
        localStorage.setItem(TOKEN_KEY, res.token);
        localStorage.setItem(USER_KEY, JSON.stringify(res.user));
        this._user.set(res.user);
        if (res.theme) {
          this.theme.applyFromServer(res.theme.colorScheme, res.theme.darkMode);
        }
      }
    }));
  }
  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    this._user.set(null);
    this.router.navigate(["/login"]);
  }
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }
  loadUser() {
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router), \u0275\u0275inject(ThemeService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: Router }, { type: ThemeService }], null);
})();

export {
  COLOR_SCHEMES,
  ThemeService,
  AuthService
};
//# sourceMappingURL=chunk-3N4QSD24.js.map
