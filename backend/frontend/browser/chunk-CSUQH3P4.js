import {
  OrganizationService
} from "./chunk-DF25DVOP.js";
import {
  CellTemplateDirective,
  CheckboxColumnComponent,
  ColumnComponent,
  ColumnComponent2,
  CustomMessagesComponent,
  DetailTemplateDirective,
  DialogActionsComponent,
  DialogComponent,
  DialogsModule,
  DropDownListComponent,
  DropDownsModule,
  ExcelComponent,
  ExcelModule,
  GridComponent,
  GridModule,
  InputsModule,
  PDFComponent,
  PDFModule,
  TextBoxComponent,
  orderBy
} from "./chunk-RXO44S6U.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-5RXIK7OL.js";
import {
  ButtonComponent,
  ButtonsModule,
  IndicatorsModule,
  LoaderComponent,
  fileExcelIcon,
  filePdfIcon,
  plusIcon
} from "./chunk-KKZNNEP2.js";
import "./chunk-EONFWV3N.js";
import {
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-4QF53X3W.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  HttpClient,
  Injectable,
  Input,
  Output,
  ViewChild,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-DEBWI7RP.js";

// src/app/core/services/user.service.ts
var UserService = class _UserService {
  http;
  base = "/api/users";
  constructor(http) {
    this.http = http;
  }
  getAll() {
    return this.http.get(this.base);
  }
  getById(id) {
    return this.http.get(`${this.base}/${id}`);
  }
  getRoles() {
    return this.http.get(`${this.base}/roles`);
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
  static \u0275fac = function UserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/users/user-dialog/user-dialog.component.ts
var _c0 = () => ({ TenantID: null, CompanyName: "\u05D1\u05D7\u05E8 \u05D0\u05E8\u05D2\u05D5\u05DF..." });
function UserDialogComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "kendo-loader", 7);
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMsg);
  }
}
function UserDialogComponent_Conditional_2_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 15);
    \u0275\u0275text(1, "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 11);
    \u0275\u0275text(2, "\u05D0\u05E8\u05D2\u05D5\u05DF ");
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 13);
    \u0275\u0275element(6, "kendo-dropdownlist", 19);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(7, UserDialogComponent_Conditional_2_Conditional_2_Conditional_7_Template, 2, 0, "small", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("data", ctx_r0.orgs)("valuePrimitive", true)("defaultItem", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.orgErr ? 7 : -1);
  }
}
function UserDialogComponent_Conditional_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 15);
    \u0275\u0275text(1, "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_Conditional_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 15);
    \u0275\u0275text(1, "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_Conditional_2_Conditional_20_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 15);
    \u0275\u0275text(1, "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4 \u2014 \u05D0\u05D5\u05EA\u05D9\u05D5\u05EA \u05DC\u05D8\u05D9\u05E0\u05D9\u05D5\u05EA/\u05E1\u05E4\u05E8\u05D5\u05EA/\u05E0\u05E7\u05D5\u05D3\u05D4/\u05DE\u05E7\u05E3 \u05D1\u05DC\u05D1\u05D3");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_Conditional_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 11);
    \u0275\u0275text(2, "\u05E9\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9 ");
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 13);
    \u0275\u0275element(6, "kendo-textbox", 20);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(7, UserDialogComponent_Conditional_2_Conditional_20_Conditional_7_Template, 2, 0, "small", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.usernameErr ? 7 : -1);
  }
}
function UserDialogComponent_Conditional_2_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 15);
    \u0275\u0275text(1, "\u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05D9\u05D9\u05DC \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_Conditional_2_Conditional_29_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 15);
    \u0275\u0275text(1, "\u05E1\u05D9\u05E1\u05DE\u05D4 \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05D9\u05D5\u05EA \u05DC\u05E4\u05D7\u05D5\u05EA 6 \u05EA\u05D5\u05D5\u05D9\u05DD");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_Conditional_2_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 11);
    \u0275\u0275text(2, "\u05E1\u05D9\u05E1\u05DE\u05D4 ");
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 13);
    \u0275\u0275element(6, "kendo-textbox", 21);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(7, UserDialogComponent_Conditional_2_Conditional_29_Conditional_7_Template, 2, 0, "small", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("type", "password");
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.passwordErr ? 7 : -1);
  }
}
function UserDialogComponent_Conditional_2_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 15);
    \u0275\u0275text(1, "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_Conditional_2_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 11);
    \u0275\u0275text(2, "\u05E1\u05D8\u05D8\u05D5\u05E1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13)(4, "div", 22)(5, "button", 23);
    \u0275\u0275listener("click", function UserDialogComponent_Conditional_2_Conditional_38_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.form.get("isActive")?.setValue(true));
    });
    \u0275\u0275text(6, " \u2713 \u05E4\u05E2\u05D9\u05DC ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 23);
    \u0275\u0275listener("click", function UserDialogComponent_Conditional_2_Conditional_38_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.form.get("isActive")?.setValue(false));
    });
    \u0275\u0275text(8, " \u2717 \u05DE\u05D5\u05E9\u05D4\u05D4 ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("seg-on", !!ctx_r0.form.get("isActive")?.value);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg-off", !ctx_r0.form.get("isActive")?.value);
  }
}
function UserDialogComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 2);
    \u0275\u0275conditionalCreate(1, UserDialogComponent_Conditional_2_Conditional_1_Template, 2, 1, "div", 8);
    \u0275\u0275conditionalCreate(2, UserDialogComponent_Conditional_2_Conditional_2_Template, 8, 5, "div", 9);
    \u0275\u0275elementStart(3, "div", 10)(4, "div", 9)(5, "label", 11);
    \u0275\u0275text(6, "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 ");
    \u0275\u0275elementStart(7, "span", 12);
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 13);
    \u0275\u0275element(10, "kendo-textbox", 14);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(11, UserDialogComponent_Conditional_2_Conditional_11_Template, 2, 0, "small", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 9)(13, "label", 11);
    \u0275\u0275text(14, "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4 ");
    \u0275\u0275elementStart(15, "span", 12);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 13);
    \u0275\u0275element(18, "kendo-textbox", 16);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(19, UserDialogComponent_Conditional_2_Conditional_19_Template, 2, 0, "small", 15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(20, UserDialogComponent_Conditional_2_Conditional_20_Template, 8, 1, "div", 9);
    \u0275\u0275elementStart(21, "div", 9)(22, "label", 11);
    \u0275\u0275text(23, '\u05D3\u05D5\u05D0"\u05DC ');
    \u0275\u0275elementStart(24, "span", 12);
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 13);
    \u0275\u0275element(27, "kendo-textbox", 17);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(28, UserDialogComponent_Conditional_2_Conditional_28_Template, 2, 0, "small", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(29, UserDialogComponent_Conditional_2_Conditional_29_Template, 8, 2, "div", 9);
    \u0275\u0275elementStart(30, "div", 9)(31, "label", 11);
    \u0275\u0275text(32, "\u05EA\u05E4\u05E7\u05D9\u05D3 ");
    \u0275\u0275elementStart(33, "span", 12);
    \u0275\u0275text(34, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 13);
    \u0275\u0275element(36, "kendo-dropdownlist", 18);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(37, UserDialogComponent_Conditional_2_Conditional_37_Template, 2, 0, "small", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(38, UserDialogComponent_Conditional_2_Conditional_38_Template, 9, 4, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.errorMsg ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isPlatform && !ctx_r0.isEdit ? 2 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.firstNameErr ? 11 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.lastNameErr ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.isEdit ? 20 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.emailErr ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.isEdit ? 29 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275property("data", ctx_r0.roles)("valuePrimitive", true);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.roleErr ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isEdit ? 38 : -1);
  }
}
function UserDialogComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-loader", 5);
  }
}
function UserDialogComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2713 ");
  }
}
var UserDialogComponent = class _UserDialogComponent {
  fb;
  userSvc;
  orgSvc;
  user = null;
  isPlatform = false;
  closed = new EventEmitter();
  saved = new EventEmitter();
  saving = false;
  loading = signal(
    true,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  errorMsg = "";
  form;
  roles = [];
  orgs = [];
  get isEdit() {
    return !!this.user;
  }
  get title() {
    return this.isEdit ? `\u05E2\u05E8\u05D9\u05DB\u05EA \u05DE\u05E9\u05EA\u05DE\u05E9 \u2014 ${this.user.FullName}` : "\u05DE\u05E9\u05EA\u05DE\u05E9 \u05D7\u05D3\u05E9";
  }
  constructor(fb, userSvc, orgSvc) {
    this.fb = fb;
    this.userSvc = userSvc;
    this.orgSvc = orgSvc;
  }
  ngOnInit() {
    this.buildForm();
    this.loadRoles();
    if (this.isPlatform && !this.isEdit)
      this.loadOrgs();
  }
  buildForm() {
    if (this.isEdit) {
      const u = this.user;
      this.form = this.fb.group({
        firstName: [u.FirstName ?? "", [Validators.required, Validators.maxLength(100)]],
        lastName: [u.LastName ?? "", [Validators.required, Validators.maxLength(100)]],
        email: [u.Email, [Validators.required, Validators.email]],
        roleId: [u.RoleID, Validators.required],
        isActive: [u.IsActive]
      });
    } else {
      this.form = this.fb.group({
        tenantId: [null, this.isPlatform ? Validators.required : []],
        firstName: ["", [Validators.required, Validators.maxLength(100)]],
        lastName: ["", [Validators.required, Validators.maxLength(100)]],
        username: ["", [Validators.required, Validators.maxLength(80), Validators.pattern(/^[a-zA-Z0-9._-]+$/)]],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        roleId: [2, Validators.required]
      });
    }
  }
  loadRoles() {
    this.userSvc.getRoles().subscribe({
      next: (r) => {
        this.roles = r.roles;
        this.checkLoading();
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  loadOrgs() {
    this.orgSvc.getAll().subscribe({
      next: (r) => {
        this.orgs = r.tenants.filter((t) => t.TenantID > 1).map((t) => ({ TenantID: t.TenantID, CompanyName: t.CompanyName }));
        this.checkLoading();
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  checkLoading() {
    const needOrgs = this.isPlatform && !this.isEdit;
    const rolesReady = this.roles.length > 0;
    const orgsReady = !needOrgs || this.orgs.length > 0;
    if (rolesReady && orgsReady)
      this.loading.set(false);
  }
  close() {
    this.closed.emit();
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving = true;
    this.errorMsg = "";
    const v = this.form.value;
    const obs = this.isEdit ? this.userSvc.update(this.user.UserID, {
      firstName: v.firstName,
      lastName: v.lastName,
      email: v.email,
      roleId: v.roleId,
      isActive: v.isActive
    }) : this.userSvc.create({
      tenantId: v.tenantId,
      firstName: v.firstName,
      lastName: v.lastName,
      username: v.username,
      email: v.email,
      password: v.password,
      roleId: v.roleId
    });
    obs.subscribe({
      next: () => {
        this.saving = false;
        this.saved.emit();
        this.close();
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message ?? "\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05E9\u05DE\u05D9\u05E8\u05D4";
      }
    });
  }
  get firstNameErr() {
    const f = this.form.get("firstName");
    return f?.invalid && f?.touched;
  }
  get lastNameErr() {
    const f = this.form.get("lastName");
    return f?.invalid && f?.touched;
  }
  get emailErr() {
    const f = this.form.get("email");
    return f?.invalid && f?.touched;
  }
  get usernameErr() {
    const f = this.form.get("username");
    return f?.invalid && f?.touched;
  }
  get passwordErr() {
    const f = this.form.get("password");
    return f?.invalid && f?.touched;
  }
  get roleErr() {
    const f = this.form.get("roleId");
    return f?.invalid && f?.touched;
  }
  get orgErr() {
    const f = this.form.get("tenantId");
    return f?.invalid && f?.touched;
  }
  static \u0275fac = function UserDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserDialogComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(OrganizationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserDialogComponent, selectors: [["app-user-dialog"]], inputs: { user: "user", isPlatform: "isPlatform" }, outputs: { closed: "closed", saved: "saved" }, decls: 11, vars: 7, consts: [[3, "close", "title", "width"], [1, "dialog-loading"], ["novalidate", "", 1, "user-form", 3, "formGroup"], [1, "dialog-footer"], ["kendoButton", "", 1, "btn-save", 3, "click", "disabled"], ["type", "pulsing", "size", "small"], ["kendoButton", "", "fillMode", "outline", 1, "btn-cancel", 3, "click", "disabled"], ["type", "converging-spinner", "size", "medium"], [1, "error-banner"], [1, "form-row"], [1, "form-row-2"], [1, "field-label"], [1, "req"], [1, "field-wrap"], ["formControlName", "firstName", "placeholder", "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9"], [1, "err-msg"], ["formControlName", "lastName", "placeholder", "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4"], ["formControlName", "email", "placeholder", "user@domain.com"], ["formControlName", "roleId", "textField", "RoleName", "valueField", "RoleID", 3, "data", "valuePrimitive"], ["formControlName", "tenantId", "textField", "CompanyName", "valueField", "TenantID", 3, "data", "valuePrimitive", "defaultItem"], ["formControlName", "username", "placeholder", "\u05D0\u05D5\u05EA\u05D9\u05D5\u05EA \u05DC\u05D8\u05D9\u05E0\u05D9\u05D5\u05EA, \u05E1\u05E4\u05E8\u05D5\u05EA, \u05E0\u05E7\u05D5\u05D3\u05D4, \u05DE\u05E7\u05E3"], ["formControlName", "password", "placeholder", "\u05DC\u05E4\u05D7\u05D5\u05EA 6 \u05EA\u05D5\u05D5\u05D9\u05DD", 3, "type"], [1, "seg-ctrl"], ["type", "button", 1, "seg-btn", 3, "click"]], template: function UserDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "kendo-dialog", 0);
      \u0275\u0275listener("close", function UserDialogComponent_Template_kendo_dialog_close_0_listener() {
        return ctx.close();
      });
      \u0275\u0275conditionalCreate(1, UserDialogComponent_Conditional_1_Template, 2, 0, "div", 1)(2, UserDialogComponent_Conditional_2_Template, 39, 12, "form", 2);
      \u0275\u0275elementStart(3, "kendo-dialog-actions")(4, "div", 3)(5, "button", 4);
      \u0275\u0275listener("click", function UserDialogComponent_Template_button_click_5_listener() {
        return ctx.save();
      });
      \u0275\u0275conditionalCreate(6, UserDialogComponent_Conditional_6_Template, 1, 0, "kendo-loader", 5)(7, UserDialogComponent_Conditional_7_Template, 1, 0);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 6);
      \u0275\u0275listener("click", function UserDialogComponent_Template_button_click_9_listener() {
        return ctx.close();
      });
      \u0275\u0275text(10, " \u05D1\u05D9\u05D8\u05D5\u05DC ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("title", ctx.title)("width", 560);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 1 : 2);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.saving || ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.saving ? 6 : 7);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isEdit ? "\u05E9\u05DE\u05D5\u05E8 \u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD" : "\u05E6\u05D5\u05E8 \u05DE\u05E9\u05EA\u05DE\u05E9", " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.saving);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, DialogsModule, DialogComponent, DialogActionsComponent, InputsModule, TextBoxComponent, DropDownsModule, DropDownListComponent, ButtonsModule, ButtonComponent, IndicatorsModule, LoaderComponent], styles: ['\n.dialog-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n}\n.user-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 4px 0;\n  direction: rtl;\n}\n.error-banner[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  color: #dc2626;\n  padding: 10px 14px;\n  font-size: 0.85rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-row-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  direction: rtl;\n}\n.field-label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  text-align: right;\n}\n.field-label[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: var(--sf-danger);\n  margin-right: 2px;\n}\n.field-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.field-wrap[_ngcontent-%COMP%]   kendo-textbox[_ngcontent-%COMP%], \n.field-wrap[_ngcontent-%COMP%]   kendo-dropdownlist[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.err-msg[_ngcontent-%COMP%] {\n  color: var(--sf-danger);\n  font-size: 0.78rem;\n}\n.seg-ctrl[_ngcontent-%COMP%] {\n  display: inline-flex;\n  direction: rtl;\n  align-self: flex-start;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.seg-btn[_ngcontent-%COMP%] {\n  padding: 7px 20px;\n  font-size: 0.82rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  border: none;\n  background: var(--sf-bg);\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.seg-btn[_ngcontent-%COMP%]    + .seg-btn[_ngcontent-%COMP%] {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.seg-btn[_ngcontent-%COMP%]:hover:not(.seg-on):not(.seg-off) {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.seg-btn.seg-on[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: #fff;\n  font-weight: 600;\n}\n.seg-btn.seg-off[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #fff;\n  font-weight: 600;\n}\n.ltr-wrap[_ngcontent-%COMP%] {\n  direction: ltr;\n  display: inline-flex;\n}\n[_nghost-%COMP%]     .k-dialog {\n  border-radius: 14px !important;\n  overflow: hidden;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.16), 0 2px 8px rgba(0, 0, 0, 0.08) !important;\n  border: 1px solid var(--sf-border) !important;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n[_nghost-%COMP%]     .k-dialog-titlebar {\n  background: var(--sf-bg-card) !important;\n  border-bottom: 1px solid var(--sf-border) !important;\n  padding: 14px 20px !important;\n  direction: rtl;\n}\n[_nghost-%COMP%]     .k-dialog-title {\n  font-size: 1.05rem !important;\n  font-weight: 700 !important;\n  color: var(--sf-text) !important;\n}\n[_nghost-%COMP%]     .k-dialog-close {\n  color: var(--sf-text-secondary) !important;\n}\n[_nghost-%COMP%]     .k-dialog-close:hover {\n  color: var(--sf-text) !important;\n  background: var(--sf-bg-hover) !important;\n}\n[_nghost-%COMP%]     .k-dialog-content {\n  padding: 24px 28px !important;\n  background: var(--sf-bg) !important;\n  direction: rtl;\n}\n[_nghost-%COMP%]     .k-dialog-actions {\n  background: var(--sf-bg-card) !important;\n  border-top: 1px solid var(--sf-border) !important;\n  padding: 12px 20px !important;\n  direction: rtl !important;\n}\n[_nghost-%COMP%]     .k-textbox {\n  background: var(--sf-bg-card);\n  border-color: var(--sf-border);\n  border-radius: 8px;\n  direction: rtl !important;\n}\n[_nghost-%COMP%]     .k-textbox:focus-within {\n  border-color: var(--sf-border-focus);\n  box-shadow: 0 0 0 3px rgba(13, 71, 255, 0.1);\n}\n[_nghost-%COMP%]     .k-input-inner {\n  direction: rtl !important;\n  text-align: right !important;\n}\n[_nghost-%COMP%]     .k-dropdownlist {\n  background: var(--sf-bg-card);\n  border-color: var(--sf-border);\n  border-radius: 8px;\n  direction: rtl;\n}\n[_nghost-%COMP%]     .k-dropdownlist .k-input-value-text {\n  text-align: right;\n}\n[_nghost-%COMP%]     .k-switch {\n  direction: ltr !important;\n}\n[_nghost-%COMP%]     .k-switch-on .k-switch-track {\n  background: var(--sf-success);\n}\n.dialog-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  direction: rtl;\n}\n.btn-save[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #f97316 !important;\n  color: #fff !important;\n  border: none !important;\n  border-radius: 9px !important;\n  padding: 9px 22px !important;\n  font-size: 0.875rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.3);\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #ea6c0a !important;\n  box-shadow: 0 4px 14px rgba(249, 115, 22, 0.4);\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.btn-save[_ngcontent-%COMP%]   kendo-loader[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  border-color: var(--sf-border) !important;\n  color: var(--sf-text-secondary) !important;\n}\n/*# sourceMappingURL=user-dialog.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserDialogComponent, [{
    type: Component,
    args: [{ selector: "app-user-dialog", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      DialogsModule,
      InputsModule,
      DropDownsModule,
      ButtonsModule,
      IndicatorsModule
    ], template: `<kendo-dialog [title]="title" [width]="560" (close)="close()">

  @if (loading()) {
    <div class="dialog-loading">
      <kendo-loader type="converging-spinner" size="medium" />
    </div>
  } @else {

    <form [formGroup]="form" novalidate class="user-form">

      @if (errorMsg) {
        <div class="error-banner">{{ errorMsg }}</div>
      }

      <!-- \u05D0\u05E8\u05D2\u05D5\u05DF \u2014 platform \u05D1\u05DC\u05D1\u05D3 \u05D1\u05D9\u05E6\u05D9\u05E8\u05D4 -->
      @if (isPlatform && !isEdit) {
        <div class="form-row">
          <label class="field-label">\u05D0\u05E8\u05D2\u05D5\u05DF <span class="req">*</span></label>
          <div class="field-wrap">
            <kendo-dropdownlist
              formControlName="tenantId"
              [data]="orgs"
              textField="CompanyName"
              valueField="TenantID"
              [valuePrimitive]="true"
              [defaultItem]="{ TenantID: null, CompanyName: '\u05D1\u05D7\u05E8 \u05D0\u05E8\u05D2\u05D5\u05DF...' }" />
            @if (orgErr) { <small class="err-msg">\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4</small> }
          </div>
        </div>
      }

      <!-- \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 + \u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4 -->
      <div class="form-row-2">
        <div class="form-row">
          <label class="field-label">\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 <span class="req">*</span></label>
          <div class="field-wrap">
            <kendo-textbox formControlName="firstName" placeholder="\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9" />
            @if (firstNameErr) { <small class="err-msg">\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4</small> }
          </div>
        </div>

        <div class="form-row">
          <label class="field-label">\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4 <span class="req">*</span></label>
          <div class="field-wrap">
            <kendo-textbox formControlName="lastName" placeholder="\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4" />
            @if (lastNameErr) { <small class="err-msg">\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4</small> }
          </div>
        </div>
      </div>

      <!-- \u05E9\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9 \u2014 \u05E8\u05E7 \u05D1\u05D4\u05D5\u05E1\u05E4\u05D4 -->
      @if (!isEdit) {
        <div class="form-row">
          <label class="field-label">\u05E9\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9 <span class="req">*</span></label>
          <div class="field-wrap">
            <kendo-textbox formControlName="username" placeholder="\u05D0\u05D5\u05EA\u05D9\u05D5\u05EA \u05DC\u05D8\u05D9\u05E0\u05D9\u05D5\u05EA, \u05E1\u05E4\u05E8\u05D5\u05EA, \u05E0\u05E7\u05D5\u05D3\u05D4, \u05DE\u05E7\u05E3" />
            @if (usernameErr) {
              <small class="err-msg">\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4 \u2014 \u05D0\u05D5\u05EA\u05D9\u05D5\u05EA \u05DC\u05D8\u05D9\u05E0\u05D9\u05D5\u05EA/\u05E1\u05E4\u05E8\u05D5\u05EA/\u05E0\u05E7\u05D5\u05D3\u05D4/\u05DE\u05E7\u05E3 \u05D1\u05DC\u05D1\u05D3</small>
            }
          </div>
        </div>
      }

      <!-- \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC -->
      <div class="form-row">
        <label class="field-label">\u05D3\u05D5\u05D0"\u05DC <span class="req">*</span></label>
        <div class="field-wrap">
          <kendo-textbox formControlName="email" placeholder="user@domain.com" />
          @if (emailErr) { <small class="err-msg">\u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05D9\u05D9\u05DC \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4</small> }
        </div>
      </div>

      <!-- \u05E1\u05D9\u05E1\u05DE\u05D4 \u2014 \u05E8\u05E7 \u05D1\u05D4\u05D5\u05E1\u05E4\u05D4 -->
      @if (!isEdit) {
        <div class="form-row">
          <label class="field-label">\u05E1\u05D9\u05E1\u05DE\u05D4 <span class="req">*</span></label>
          <div class="field-wrap">
            <kendo-textbox formControlName="password" placeholder="\u05DC\u05E4\u05D7\u05D5\u05EA 6 \u05EA\u05D5\u05D5\u05D9\u05DD" [type]="'password'" />
            @if (passwordErr) { <small class="err-msg">\u05E1\u05D9\u05E1\u05DE\u05D4 \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05D9\u05D5\u05EA \u05DC\u05E4\u05D7\u05D5\u05EA 6 \u05EA\u05D5\u05D5\u05D9\u05DD</small> }
          </div>
        </div>
      }

      <!-- \u05EA\u05E4\u05E7\u05D9\u05D3 -->
      <div class="form-row">
        <label class="field-label">\u05EA\u05E4\u05E7\u05D9\u05D3 <span class="req">*</span></label>
        <div class="field-wrap">
          <kendo-dropdownlist
            formControlName="roleId"
            [data]="roles"
            textField="RoleName"
            valueField="RoleID"
            [valuePrimitive]="true" />
          @if (roleErr) { <small class="err-msg">\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4</small> }
        </div>
      </div>

      <!-- \u05E1\u05D8\u05D8\u05D5\u05E1 \u2014 \u05E8\u05E7 \u05D1\u05E2\u05E8\u05D9\u05DB\u05D4 -->
      @if (isEdit) {
        <div class="form-row">
          <label class="field-label">\u05E1\u05D8\u05D8\u05D5\u05E1</label>
          <div class="field-wrap">
            <div class="seg-ctrl">
              <button type="button" class="seg-btn"
                      [class.seg-on]="!!form.get('isActive')?.value"
                      (click)="form.get('isActive')?.setValue(true)">
                \u2713 \u05E4\u05E2\u05D9\u05DC
              </button>
              <button type="button" class="seg-btn"
                      [class.seg-off]="!form.get('isActive')?.value"
                      (click)="form.get('isActive')?.setValue(false)">
                \u2717 \u05DE\u05D5\u05E9\u05D4\u05D4
              </button>
            </div>
          </div>
        </div>
      }

    </form>

  }

  <kendo-dialog-actions>
    <div class="dialog-footer">
      <button kendoButton class="btn-save" (click)="save()" [disabled]="saving || loading()">
        @if (saving) {
          <kendo-loader type="pulsing" size="small" />
        } @else {
          \u2713
        }
        {{ isEdit ? '\u05E9\u05DE\u05D5\u05E8 \u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD' : '\u05E6\u05D5\u05E8 \u05DE\u05E9\u05EA\u05DE\u05E9' }}
      </button>
      <button kendoButton fillMode="outline" (click)="close()" [disabled]="saving" class="btn-cancel">
        \u05D1\u05D9\u05D8\u05D5\u05DC
      </button>
    </div>
  </kendo-dialog-actions>

</kendo-dialog>
`, styles: ['/* src/app/features/users/user-dialog/user-dialog.component.scss */\n.dialog-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n}\n.user-form {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 4px 0;\n  direction: rtl;\n}\n.error-banner {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  color: #dc2626;\n  padding: 10px 14px;\n  font-size: 0.85rem;\n}\n.form-row {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-row-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  direction: rtl;\n}\n.field-label {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  text-align: right;\n}\n.field-label .req {\n  color: var(--sf-danger);\n  margin-right: 2px;\n}\n.field-wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.field-wrap kendo-textbox,\n.field-wrap kendo-dropdownlist {\n  width: 100%;\n}\n.full-width {\n  width: 100%;\n}\n.err-msg {\n  color: var(--sf-danger);\n  font-size: 0.78rem;\n}\n.seg-ctrl {\n  display: inline-flex;\n  direction: rtl;\n  align-self: flex-start;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.seg-btn {\n  padding: 7px 20px;\n  font-size: 0.82rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  border: none;\n  background: var(--sf-bg);\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.seg-btn + .seg-btn {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.seg-btn:hover:not(.seg-on):not(.seg-off) {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.seg-btn.seg-on {\n  background: #10b981;\n  color: #fff;\n  font-weight: 600;\n}\n.seg-btn.seg-off {\n  background: #ef4444;\n  color: #fff;\n  font-weight: 600;\n}\n.ltr-wrap {\n  direction: ltr;\n  display: inline-flex;\n}\n:host ::ng-deep .k-dialog {\n  border-radius: 14px !important;\n  overflow: hidden;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.16), 0 2px 8px rgba(0, 0, 0, 0.08) !important;\n  border: 1px solid var(--sf-border) !important;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n:host ::ng-deep .k-dialog-titlebar {\n  background: var(--sf-bg-card) !important;\n  border-bottom: 1px solid var(--sf-border) !important;\n  padding: 14px 20px !important;\n  direction: rtl;\n}\n:host ::ng-deep .k-dialog-title {\n  font-size: 1.05rem !important;\n  font-weight: 700 !important;\n  color: var(--sf-text) !important;\n}\n:host ::ng-deep .k-dialog-close {\n  color: var(--sf-text-secondary) !important;\n}\n:host ::ng-deep .k-dialog-close:hover {\n  color: var(--sf-text) !important;\n  background: var(--sf-bg-hover) !important;\n}\n:host ::ng-deep .k-dialog-content {\n  padding: 24px 28px !important;\n  background: var(--sf-bg) !important;\n  direction: rtl;\n}\n:host ::ng-deep .k-dialog-actions {\n  background: var(--sf-bg-card) !important;\n  border-top: 1px solid var(--sf-border) !important;\n  padding: 12px 20px !important;\n  direction: rtl !important;\n}\n:host ::ng-deep .k-textbox {\n  background: var(--sf-bg-card);\n  border-color: var(--sf-border);\n  border-radius: 8px;\n  direction: rtl !important;\n}\n:host ::ng-deep .k-textbox:focus-within {\n  border-color: var(--sf-border-focus);\n  box-shadow: 0 0 0 3px rgba(13, 71, 255, 0.1);\n}\n:host ::ng-deep .k-input-inner {\n  direction: rtl !important;\n  text-align: right !important;\n}\n:host ::ng-deep .k-dropdownlist {\n  background: var(--sf-bg-card);\n  border-color: var(--sf-border);\n  border-radius: 8px;\n  direction: rtl;\n}\n:host ::ng-deep .k-dropdownlist .k-input-value-text {\n  text-align: right;\n}\n:host ::ng-deep .k-switch {\n  direction: ltr !important;\n}\n:host ::ng-deep .k-switch-on .k-switch-track {\n  background: var(--sf-success);\n}\n.dialog-footer {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  direction: rtl;\n}\n.btn-save {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #f97316 !important;\n  color: #fff !important;\n  border: none !important;\n  border-radius: 9px !important;\n  padding: 9px 22px !important;\n  font-size: 0.875rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.3);\n}\n.btn-save:hover:not(:disabled) {\n  background: #ea6c0a !important;\n  box-shadow: 0 4px 14px rgba(249, 115, 22, 0.4);\n}\n.btn-save:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.btn-save kendo-loader {\n  display: inline-flex;\n}\n.btn-cancel {\n  border-color: var(--sf-border) !important;\n  color: var(--sf-text-secondary) !important;\n}\n/*# sourceMappingURL=user-dialog.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: UserService }, { type: OrganizationService }], { user: [{
    type: Input
  }], isPlatform: [{
    type: Input
  }], closed: [{
    type: Output
  }], saved: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserDialogComponent, { className: "UserDialogComponent", filePath: "src/app/features/users/user-dialog/user-dialog.component.ts", lineNumber: 26 });
})();

// src/app/features/users/users.component.ts
var _c02 = (a0, a1) => ({ data: a0, total: a1 });
var _c1 = () => [10, 25, 50];
var _c2 = (a0) => ({ buttonCount: 5, info: true, type: "numeric", pageSizes: a0 });
var _c3 = () => ({ mode: "single", allowUnsort: false });
var _c4 = () => ({ mode: "multiple", checkboxOnly: true });
function UsersComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "kendo-loader", 15);
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function UsersComponent_Conditional_21_ng_template_1_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2, "\u05E9\u05D9\u05E0\u05D5\u05D9 \u05E1\u05D9\u05E1\u05DE\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 42);
    \u0275\u0275text(4, "\u05E0\u05D3\u05E8\u05E9");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_Conditional_21_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "div", 35);
    \u0275\u0275text(3, "\u05E4\u05E8\u05D8\u05D9 \u05DE\u05E9\u05EA\u05DE\u05E9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 36)(5, "div", 37)(6, "span", 38);
    \u0275\u0275text(7, "\u05E9\u05DD \u05DE\u05DC\u05D0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 39);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 37)(11, "span", 38);
    \u0275\u0275text(12, "\u05E9\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 40);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 37)(16, "span", 38);
    \u0275\u0275text(17, '\u05D3\u05D5\u05D0"\u05DC');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 39);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 34)(21, "div", 35);
    \u0275\u0275text(22, "\u05EA\u05E4\u05E7\u05D9\u05D3 \u05D5\u05D0\u05E8\u05D2\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 36)(24, "div", 37)(25, "span", 38);
    \u0275\u0275text(26, "\u05EA\u05E4\u05E7\u05D9\u05D3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 39);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 37)(30, "span", 38);
    \u0275\u0275text(31, "\u05D0\u05E8\u05D2\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 39);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 37)(35, "span", 38);
    \u0275\u0275text(36, "\u05E7\u05D5\u05D3 \u05D0\u05E8\u05D2\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 40);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 34)(40, "div", 35);
    \u0275\u0275text(41, "\u05E1\u05D8\u05D8\u05D5\u05E1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 36)(43, "div", 37)(44, "span", 38);
    \u0275\u0275text(45, "\u05DE\u05E6\u05D1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 41);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 37)(49, "span", 38);
    \u0275\u0275text(50, "\u05DB\u05E0\u05D9\u05E1\u05D4 \u05D0\u05D7\u05E8\u05D5\u05E0\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 39);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(53, UsersComponent_Conditional_21_ng_template_1_Conditional_53_Template, 5, 0, "div", 37);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(u_r3.FullName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(u_r3.Username);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(u_r3.Email);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(u_r3.RoleName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(u_r3.OrgName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(u_r3.TenantCode);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("badge-active", u_r3.IsActive)("badge-inactive", !u_r3.IsActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r3.IsActive ? "\u05E4\u05E2\u05D9\u05DC" : "\u05DE\u05D5\u05E9\u05D4\u05D4");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatLastLogin(u_r3.LastLoginAt));
    \u0275\u0275advance();
    \u0275\u0275conditional(u_r3.MustChangePass ? 53 : -1);
  }
}
function UsersComponent_Conditional_21_Conditional_13_ng_template_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 44);
  }
  if (rf & 2) {
    const u_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", u_r4.LogoUrl, \u0275\u0275sanitizeUrl)("alt", u_r4.OrgName);
  }
}
function UsersComponent_Conditional_21_Conditional_13_ng_template_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r4.OrgName?.charAt(0));
  }
}
function UsersComponent_Conditional_21_Conditional_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275conditionalCreate(1, UsersComponent_Conditional_21_Conditional_13_ng_template_1_Conditional_1_Template, 1, 2, "img", 44)(2, UsersComponent_Conditional_21_Conditional_13_ng_template_1_Conditional_2_Template, 2, 1, "div", 45);
    \u0275\u0275elementStart(3, "div")(4, "div", 46);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 47);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(u_r4.LogoUrl ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(u_r4.OrgName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r4.TenantCode);
  }
}
function UsersComponent_Conditional_21_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "kendo-grid-column", 23);
    \u0275\u0275template(1, UsersComponent_Conditional_21_Conditional_13_ng_template_1_Template, 8, 3, "ng-template", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("width", 240);
  }
}
function UsersComponent_Conditional_21_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 50)(4, "span", 51);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 52);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("avatar-inactive", !u_r5.IsActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r5.FullName ? u_r5.FullName.charAt(0) : "?");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r5.FullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("@", u_r5.Username);
  }
}
function UsersComponent_Conditional_21_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.roleClass(u_r6.RoleName));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r6.RoleName);
  }
}
function UsersComponent_Conditional_21_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("never", !ctx_r0.hasLogin(u_r7.LastLoginAt));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.formatLastLogin(u_r7.LastLoginAt));
  }
}
function UsersComponent_Conditional_21_ng_template_22_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "\u05E1\u05D9\u05E1\u05DE\u05D4");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Conditional_21_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "span", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, UsersComponent_Conditional_21_ng_template_22_Conditional_3_Template, 2, 0, "span", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("badge-active", u_r8.IsActive)("badge-inactive", !u_r8.IsActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r8.IsActive ? "\u05E4\u05E2\u05D9\u05DC" : "\u05DE\u05D5\u05E9\u05D4\u05D4");
    \u0275\u0275advance();
    \u0275\u0275conditional(u_r8.MustChangePass ? 3 : -1);
  }
}
function UsersComponent_Conditional_21_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "button", 56);
    \u0275\u0275listener("click", function UsersComponent_Conditional_21_ng_template_24_Template_button_click_1_listener() {
      const ctx_r9 = \u0275\u0275restoreView(_r9);
      const u_r11 = ctx_r9.$implicit;
      const rowIndex_r12 = ctx_r9.rowIndex;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleDetail(u_r11, rowIndex_r12));
    });
    \u0275\u0275element(2, "i", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 58);
    \u0275\u0275listener("click", function UsersComponent_Conditional_21_ng_template_24_Template_button_click_3_listener() {
      const u_r11 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleActive(u_r11));
    });
    \u0275\u0275element(4, "i", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 59);
    \u0275\u0275listener("click", function UsersComponent_Conditional_21_ng_template_24_Template_button_click_5_listener() {
      const u_r11 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(u_r11));
    });
    \u0275\u0275element(6, "i", 60);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", ctx_r0.isExpanded(u_r11.UserID));
    \u0275\u0275property("title", ctx_r0.isExpanded(u_r11.UserID) ? "\u05E1\u05D2\u05D5\u05E8" : "\u05E4\u05E8\u05D8\u05D9\u05DD");
    \u0275\u0275advance();
    \u0275\u0275classProp("pi-chevron-down", !ctx_r0.isExpanded(u_r11.UserID))("pi-chevron-up", ctx_r0.isExpanded(u_r11.UserID));
    \u0275\u0275advance();
    \u0275\u0275classProp("act-lock", u_r11.IsActive)("act-unlock", !u_r11.IsActive);
    \u0275\u0275property("title", u_r11.IsActive ? "\u05D4\u05E9\u05D1\u05EA" : "\u05D4\u05E4\u05E2\u05DC");
    \u0275\u0275advance();
    \u0275\u0275classProp("pi-lock", u_r11.IsActive)("pi-lock-open", !u_r11.IsActive);
  }
}
function UsersComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "kendo-grid", 16);
    \u0275\u0275listener("pageChange", function UsersComponent_Conditional_21_Template_kendo_grid_pageChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageChange($event));
    })("sortChange", function UsersComponent_Conditional_21_Template_kendo_grid_sortChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSortChange($event));
    });
    \u0275\u0275template(1, UsersComponent_Conditional_21_ng_template_1_Template, 54, 13, "ng-template", 17);
    \u0275\u0275element(2, "kendo-grid-pdf", 18);
    \u0275\u0275elementStart(3, "kendo-grid-excel", 19);
    \u0275\u0275element(4, "kendo-excelexport-column", 20)(5, "kendo-excelexport-column", 21)(6, "kendo-excelexport-column", 22)(7, "kendo-excelexport-column", 23)(8, "kendo-excelexport-column", 24)(9, "kendo-excelexport-column", 25)(10, "kendo-excelexport-column", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "kendo-grid-messages", 27)(12, "kendo-grid-checkbox-column", 28);
    \u0275\u0275conditionalCreate(13, UsersComponent_Conditional_21_Conditional_13_Template, 2, 1, "kendo-grid-column", 23);
    \u0275\u0275elementStart(14, "kendo-grid-column", 29);
    \u0275\u0275template(15, UsersComponent_Conditional_21_ng_template_15_Template, 8, 5, "ng-template", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "kendo-grid-column", 22);
    \u0275\u0275elementStart(17, "kendo-grid-column", 24);
    \u0275\u0275template(18, UsersComponent_Conditional_21_ng_template_18_Template, 2, 3, "ng-template", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "kendo-grid-column", 26);
    \u0275\u0275template(20, UsersComponent_Conditional_21_ng_template_20_Template, 2, 3, "ng-template", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "kendo-grid-column", 31);
    \u0275\u0275template(22, UsersComponent_Conditional_21_ng_template_22_Template, 4, 6, "ng-template", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "kendo-grid-column", 32);
    \u0275\u0275template(24, UsersComponent_Conditional_21_ng_template_24_Template, 7, 16, "ng-template", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", \u0275\u0275pureFunction2(34, _c02, ctx_r0.pagedData, ctx_r0.gridData.length))("skip", ctx_r0.skip)("pageSize", ctx_r0.pageSize)("pageable", \u0275\u0275pureFunction1(38, _c2, \u0275\u0275pureFunction0(37, _c1)))("sortable", \u0275\u0275pureFunction0(40, _c3))("sort", ctx_r0.sort)("reorderable", true)("resizable", true)("selectable", \u0275\u0275pureFunction0(41, _c4))("columnMenu", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("allPages", true)("landscape", true)("repeatHeaders", true);
    \u0275\u0275advance();
    \u0275\u0275property("fetchData", ctx_r0.allData);
    \u0275\u0275advance();
    \u0275\u0275property("width", 160);
    \u0275\u0275advance();
    \u0275\u0275property("width", 120);
    \u0275\u0275advance();
    \u0275\u0275property("width", 200);
    \u0275\u0275advance();
    \u0275\u0275property("width", 160);
    \u0275\u0275advance();
    \u0275\u0275property("width", 120);
    \u0275\u0275advance();
    \u0275\u0275property("width", 60);
    \u0275\u0275advance();
    \u0275\u0275property("width", 140);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 44)("showSelectAll", true)("columnMenu", false);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isPlatform() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("minResizableWidth", 160);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 220);
    \u0275\u0275advance();
    \u0275\u0275property("width", 140);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 145);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 160);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 104)("sortable", false)("resizable", false)("columnMenu", false);
  }
}
function UsersComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-user-dialog", 61);
    \u0275\u0275listener("closed", function UsersComponent_Conditional_22_Template_app_user_dialog_closed_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.dialogOpen.set(false));
    })("saved", function UsersComponent_Conditional_22_Template_app_user_dialog_saved_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.onSaved();
      return \u0275\u0275resetView(ctx_r0.dialogOpen.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("user", ctx_r0.dialogUser())("isPlatform", ctx_r0.isPlatform());
  }
}
var UsersComponent = class _UsersComponent {
  svc;
  grid;
  addIcon = plusIcon;
  excelIcon = fileExcelIcon;
  pdfIcon = filePdfIcon;
  loading = signal(
    true,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  error = signal(
    "",
    ...ngDevMode ? [{ debugName: "error" }] : (
      /* istanbul ignore next */
      []
    )
  );
  users = signal(
    [],
    ...ngDevMode ? [{ debugName: "users" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isPlatform = signal(
    false,
    ...ngDevMode ? [{ debugName: "isPlatform" }] : (
      /* istanbul ignore next */
      []
    )
  );
  gridData = [];
  searchTerm = "";
  skip = 0;
  pageSize = 10;
  sort = [{ field: "OrgName", dir: "asc" }];
  dialogOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "dialogOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  dialogUser = signal(
    null,
    ...ngDevMode ? [{ debugName: "dialogUser" }] : (
      /* istanbul ignore next */
      []
    )
  );
  expandedIds = /* @__PURE__ */ new Set();
  constructor(svc) {
    this.svc = svc;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.svc.getAll().subscribe({
      next: (r) => {
        this.users.set(r.users);
        this.isPlatform.set(r.isPlatform);
        if (!r.isPlatform)
          this.sort = [{ field: "FullName", dir: "asc" }];
        this.applyFilter();
        this.loading.set(false);
      },
      error: () => {
        this.error.set("\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D8\u05E2\u05D9\u05E0\u05EA \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD");
        this.loading.set(false);
      }
    });
  }
  applyFilter() {
    const q = this.searchTerm.toLowerCase();
    const filtered = q ? this.users().filter((u) => u.FullName.toLowerCase().includes(q) || u.Username.toLowerCase().includes(q) || u.Email.toLowerCase().includes(q) || (u.OrgName || "").toLowerCase().includes(q)) : [...this.users()];
    this.gridData = orderBy(filtered, this.sort);
    this.skip = 0;
  }
  onSearch(v) {
    this.searchTerm = v;
    this.applyFilter();
  }
  onPageChange(e) {
    this.skip = e.skip;
    this.pageSize = e.take;
  }
  onSortChange(s) {
    this.sort = s;
    this.applyFilter();
  }
  openAdd() {
    this.dialogUser.set(null);
    this.dialogOpen.set(false);
    setTimeout(() => this.dialogOpen.set(true));
  }
  openEdit(u) {
    this.dialogUser.set(u);
    this.dialogOpen.set(false);
    setTimeout(() => this.dialogOpen.set(true));
  }
  onSaved() {
    this.load();
  }
  toggleDetail(u, rowIndex) {
    const abs = this.skip + rowIndex;
    if (this.expandedIds.has(u.UserID)) {
      this.grid.collapseRow(abs);
      this.expandedIds.delete(u.UserID);
    } else {
      this.grid.expandRow(abs);
      this.expandedIds.add(u.UserID);
    }
  }
  isExpanded(id) {
    return this.expandedIds.has(id);
  }
  toggleActive(user) {
    this.svc.toggleActive(user.UserID).subscribe({
      next: (r) => {
        this.users.update((list) => list.map((u) => u.UserID === user.UserID ? __spreadProps(__spreadValues({}, u), { IsActive: r.isActive }) : u));
        this.applyFilter();
      }
    });
  }
  exportExcel() {
    this.grid.saveAsExcel();
  }
  exportPDF() {
    this.grid.saveAsPDF();
  }
  allData = () => ({ data: this.gridData });
  get pagedData() {
    return this.gridData.slice(this.skip, this.skip + this.pageSize);
  }
  formatLastLogin(dt) {
    if (!dt)
      return "\u05DE\u05E2\u05D5\u05DC\u05DD \u05DC\u05D0";
    const d = new Date(dt);
    if (d.getFullYear() < 2e3)
      return "\u05DE\u05E2\u05D5\u05DC\u05DD \u05DC\u05D0";
    return d.toLocaleDateString("he-IL", { day: "2-digit", month: "2-digit", year: "numeric" });
  }
  hasLogin(dt) {
    if (!dt)
      return false;
    return new Date(dt).getFullYear() >= 2e3;
  }
  roleClass(role) {
    const map = {
      "\u05DE\u05E0\u05D4\u05DC \u05DE\u05E2\u05E8\u05DB\u05EA": "badge-platform",
      "\u05DE\u05E0\u05D4\u05DC \u05DC\u05E7\u05D5\u05D7": "badge-blue",
      "\u05DE\u05E9\u05EA\u05DE\u05E9 \u05DC\u05E7\u05D5\u05D7": "badge-gray"
    };
    return map[role] ?? "badge-gray";
  }
  static \u0275fac = function UsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersComponent)(\u0275\u0275directiveInject(UserService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], viewQuery: function UsersComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(GridComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.grid = _t.first);
    }
  }, decls: 23, vars: 8, consts: [[1, "users-page"], [1, "page-header"], [1, "header-titles"], ["kendoButton", "", "themeColor", "primary", 3, "click", "svgIcon"], [1, "toolbar"], [1, "search-wrap"], [1, "search-icon"], ["type", "text", "placeholder", "\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DC\u05E4\u05D9 \u05E9\u05DD, \u05DE\u05D9\u05D9\u05DC, \u05D0\u05E8\u05D2\u05D5\u05DF...", 1, "search-input", 3, "input"], [1, "export-btns"], ["kendoButton", "", "fillMode", "outline", 1, "btn-export", "btn-excel", 3, "click", "svgIcon"], ["kendoButton", "", "fillMode", "outline", 1, "btn-export", "btn-pdf", 3, "click", "svgIcon"], [1, "state-box"], [1, "state-box", "error"], ["scrollable", "none", 1, "users-grid", 3, "data", "skip", "pageSize", "pageable", "sortable", "sort", "reorderable", "resizable", "selectable", "columnMenu"], [3, "user", "isPlatform"], ["type", "converging-spinner", "size", "medium"], ["scrollable", "none", 1, "users-grid", 3, "pageChange", "sortChange", "data", "skip", "pageSize", "pageable", "sortable", "sort", "reorderable", "resizable", "selectable", "columnMenu"], ["kendoGridDetailTemplate", ""], ["fileName", "\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD.pdf", "paperSize", "A4", "margin", "1cm", 3, "allPages", "landscape", "repeatHeaders"], ["fileName", "\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD.xlsx", 3, "fetchData"], ["field", "FullName", "title", "\u05E9\u05DD \u05DE\u05DC\u05D0", 3, "width"], ["field", "Username", "title", "\u05E9\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9", 3, "width"], ["field", "Email", "title", '\u05D3\u05D5\u05D0"\u05DC', 3, "width"], ["field", "OrgName", "title", "\u05D0\u05E8\u05D2\u05D5\u05DF", 3, "width"], ["field", "RoleName", "title", "\u05EA\u05E4\u05E7\u05D9\u05D3", 3, "width"], ["field", "IsActive", "title", "\u05E4\u05E2\u05D9\u05DC", 3, "width"], ["field", "LastLoginAt", "title", "\u05DB\u05E0\u05D9\u05E1\u05D4 \u05D0\u05D7\u05E8\u05D5\u05E0\u05D4", 3, "width"], ["pagerItemsPerPage", "\u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3", "pagerOf", "\u05DE\u05EA\u05D5\u05DA", "pagerItems", "\u05E8\u05E9\u05D5\u05DE\u05D5\u05EA", "pagerFirstPage", "\u05E2\u05DE\u05D5\u05D3 \u05E8\u05D0\u05E9\u05D5\u05DF", "pagerLastPage", "\u05E2\u05DE\u05D5\u05D3 \u05D0\u05D7\u05E8\u05D5\u05DF", "pagerPreviousPage", "\u05D4\u05E7\u05D5\u05D3\u05DD", "pagerNextPage", "\u05D4\u05D1\u05D0", "pagerPage", "\u05E2\u05DE\u05D5\u05D3", "pagerPageNumberInputTitle", "\u05DE\u05E1\u05E4\u05E8 \u05E2\u05DE\u05D5\u05D3", "noRecords", "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD", "loading", "\u05D8\u05D5\u05E2\u05DF...", "sortAscending", "\u05DE\u05D9\u05D5\u05DF \u05E2\u05D5\u05DC\u05D4", "sortDescending", "\u05DE\u05D9\u05D5\u05DF \u05D9\u05D5\u05E8\u05D3", "sortedAscending", "\u05DE\u05DE\u05D5\u05D9\u05DF \u05D1\u05E1\u05D3\u05E8 \u05E2\u05D5\u05DC\u05D4", "sortedDescending", "\u05DE\u05DE\u05D5\u05D9\u05DF \u05D1\u05E1\u05D3\u05E8 \u05D9\u05D5\u05E8\u05D3", "selectionCheckboxLabel", "\u05D1\u05D7\u05E8 \u05E9\u05D5\u05E8\u05D4", "selectAllCheckboxLabel", "\u05D1\u05D7\u05E8 \u05D4\u05DB\u05DC", "columnMenuFilter", "\u05E1\u05E0\u05DF", "columnMenuSort", "\u05DE\u05D9\u05D5\u05DF", "columnMenuColumns", "\u05E2\u05DE\u05D5\u05D3\u05D5\u05EA", "columnMenuSortAscending", "\u05E2\u05D5\u05DC\u05D4", "columnMenuSortDescending", "\u05D9\u05D5\u05E8\u05D3"], [3, "width", "showSelectAll", "columnMenu"], ["field", "FullName", "title", "\u05E9\u05DD", 3, "minResizableWidth"], ["kendoGridCellTemplate", ""], ["field", "IsActive", "title", "\u05E1\u05D8\u05D8\u05D5\u05E1", 3, "width"], ["title", "", 3, "width", "sortable", "resizable", "columnMenu"], [1, "user-detail-card"], [1, "detail-group"], [1, "detail-group-title"], [1, "detail-fields"], [1, "detail-field"], [1, "df-label"], [1, "df-val"], [1, "df-val", "df-mono"], [1, "badge"], [1, "badge", "badge-warn"], [1, "org-tag"], [1, "org-logo", 3, "src", "alt"], [1, "org-avatar"], [1, "org-name-sm"], [1, "org-code"], [1, "user-cell"], [1, "user-avatar"], [1, "user-info"], [1, "user-name"], [1, "user-username"], [1, "last-login"], [1, "status-wrap"], [1, "row-actions"], [1, "act-btn", "act-expand", 3, "click", "title"], [1, "pi"], [1, "act-btn", 3, "click", "title"], ["title", "\u05E2\u05E8\u05D5\u05DA", 1, "act-btn", "act-edit", 3, "click"], [1, "pi", "pi-pencil"], [3, "closed", "saved", "user", "isPlatform"]], template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 3);
      \u0275\u0275listener("click", function UsersComponent_Template_button_click_7_listener() {
        return ctx.openAdd();
      });
      \u0275\u0275text(8, "\u05DE\u05E9\u05EA\u05DE\u05E9 \u05D7\u05D3\u05E9");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 4)(10, "div", 5)(11, "mat-icon", 6);
      \u0275\u0275text(12, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 7);
      \u0275\u0275listener("input", function UsersComponent_Template_input_input_13_listener($event) {
        return ctx.onSearch($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 8)(15, "button", 9);
      \u0275\u0275listener("click", function UsersComponent_Template_button_click_15_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275text(16, "Excel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 10);
      \u0275\u0275listener("click", function UsersComponent_Template_button_click_17_listener() {
        return ctx.exportPDF();
      });
      \u0275\u0275text(18, "PDF");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(19, UsersComponent_Conditional_19_Template, 2, 0, "div", 11);
      \u0275\u0275conditionalCreate(20, UsersComponent_Conditional_20_Template, 2, 1, "div", 12);
      \u0275\u0275conditionalCreate(21, UsersComponent_Conditional_21_Template, 25, 42, "kendo-grid", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(22, UsersComponent_Conditional_22_Template, 1, 2, "app-user-dialog", 14);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.users().length, " \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA");
      \u0275\u0275advance();
      \u0275\u0275property("svgIcon", ctx.addIcon);
      \u0275\u0275advance(8);
      \u0275\u0275property("svgIcon", ctx.excelIcon);
      \u0275\u0275advance(2);
      \u0275\u0275property("svgIcon", ctx.pdfIcon);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() && ctx.error() ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() && !ctx.error() ? 21 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.dialogOpen() ? 22 : -1);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    GridModule,
    GridComponent,
    CustomMessagesComponent,
    ColumnComponent2,
    DetailTemplateDirective,
    CheckboxColumnComponent,
    CellTemplateDirective,
    ExcelModule,
    ExcelComponent,
    ColumnComponent,
    PDFModule,
    PDFComponent,
    ButtonsModule,
    ButtonComponent,
    IndicatorsModule,
    LoaderComponent,
    MatIconModule,
    MatIcon,
    UserDialogComponent
  ], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.users-page[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  direction: rtl;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.header-titles[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0;\n}\n.header-titles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: var(--sf-text-secondary);\n  margin: 3px 0 0;\n}\n.toolbar[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.export-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n}\n[_nghost-%COMP%]     .export-btns .k-button {\n  border: none !important;\n  border-radius: 0 !important;\n  background: var(--sf-bg-card) !important;\n  color: var(--sf-text-secondary) !important;\n  box-shadow: none !important;\n  padding: 6px 14px !important;\n  font-size: 0.82rem !important;\n  font-weight: 500 !important;\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n}\n[_nghost-%COMP%]     .export-btns .k-button:hover {\n  background: var(--sf-bg-hover) !important;\n}\n[_nghost-%COMP%]     .export-btns .k-button + .k-button {\n  border-inline-start: 1px solid var(--sf-border) !important;\n}\n[_nghost-%COMP%]     .export-btns .btn-excel:hover {\n  color: #16a34a !important;\n}\n[_nghost-%COMP%]     .export-btns .btn-pdf:hover {\n  color: #dc2626 !important;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 300px;\n  direction: rtl;\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 6px 12px;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.search-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--sf-border-focus);\n  box-shadow: 0 0 0 3px rgba(13, 71, 255, 0.12);\n}\n.search-icon[_ngcontent-%COMP%] {\n  color: var(--sf-text-muted);\n  font-size: 18px;\n  width: 18px !important;\n  height: 18px !important;\n  flex-shrink: 0;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  color: var(--sf-text);\n  font-size: 0.875rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--sf-text-muted);\n}\n.rows-label[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: var(--sf-text-secondary);\n}\n.rows-select[_ngcontent-%COMP%] {\n  border: 1px solid var(--sf-border);\n  border-radius: 6px;\n  padding: 5px 10px;\n  font-size: 0.83rem;\n  color: var(--sf-text);\n  background: var(--sf-bg-card);\n  cursor: pointer;\n  outline: none;\n}\n.rows-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--sf-border-focus);\n}\n.state-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: var(--sf-text-secondary);\n}\n.state-box.error[_ngcontent-%COMP%] {\n  color: var(--sf-danger);\n}\n[_nghost-%COMP%]     .users-grid {\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.04);\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n[_nghost-%COMP%]     .users-grid .k-grid-header th.k-header {\n  background: var(--sf-grid-hd-bg) !important;\n  color: var(--sf-grid-hd-color) !important;\n  font-weight: 700 !important;\n  font-size: 0.78rem !important;\n  text-align: right !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n  border-color: var(--sf-grid-hd-border) !important;\n  direction: rtl;\n  padding: 8px 12px !important;\n}\n[_nghost-%COMP%]     .users-grid .k-grid-header {\n  background: var(--sf-grid-hd-bg) !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n}\n[_nghost-%COMP%]     .users-grid .k-column-menu-button {\n  color: var(--sf-grid-hd-color);\n  opacity: 0.7;\n}\n[_nghost-%COMP%]     .users-grid .k-column-menu-button:hover {\n  opacity: 1;\n}\n[_nghost-%COMP%]     .users-grid td.k-table-td {\n  text-align: right !important;\n  vertical-align: middle !important;\n  border-color: var(--sf-border) !important;\n  font-size: 0.875rem;\n  background: var(--sf-bg-card);\n  direction: rtl;\n  padding: 10px 14px !important;\n}\n[_nghost-%COMP%]     .users-grid tr.k-table-row:hover td {\n  background: var(--sf-bg-hover) !important;\n}\n[_nghost-%COMP%]     .users-grid .k-detail-row > td {\n  background: var(--sf-bg) !important;\n  padding: 4px 0 12px !important;\n  border-bottom: 1px solid var(--sf-border) !important;\n}\n[_nghost-%COMP%]     .users-grid .k-column-resizer {\n  background: var(--sf-border);\n  width: 1px;\n  opacity: 0.5;\n}\n[_nghost-%COMP%]     .users-grid .k-pager {\n  border-top: 1px solid var(--sf-border);\n  background: var(--sf-bg);\n  direction: rtl;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  font-size: 0.82rem;\n  padding: 10px 16px;\n}\n[_nghost-%COMP%]     .users-grid .k-pager-wrap, \n[_nghost-%COMP%]     .users-grid .k-pager {\n  direction: rtl !important;\n}\n[_nghost-%COMP%]     .users-grid .k-sort-icon {\n  margin-right: 4px;\n}\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background: var(--sf-primary-light);\n  color: var(--sf-primary);\n  font-size: 0.9rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.user-avatar.avatar-inactive[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: var(--sf-text-muted);\n  text-decoration: line-through;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--sf-text);\n  font-size: 0.88rem;\n  line-height: 1.2;\n}\n.user-username[_ngcontent-%COMP%] {\n  font-size: 0.73rem;\n  color: var(--sf-text-muted);\n  font-family: "Share Tech Mono", monospace;\n}\n.org-tag[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.org-logo[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  object-fit: contain;\n  border: 1px solid var(--sf-border);\n  padding: 2px;\n  background: #fff;\n  flex-shrink: 0;\n}\n.org-avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  flex-shrink: 0;\n  background: var(--sf-primary-light);\n  color: var(--sf-primary);\n  font-size: 0.8rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.org-name-sm[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: var(--sf-text);\n  line-height: 1.2;\n}\n.org-code[_ngcontent-%COMP%] {\n  font-size: 0.71rem;\n  color: var(--sf-text-muted);\n  font-family: "Share Tech Mono", monospace;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.74rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  white-space: nowrap;\n}\n.badge-active[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: #fff;\n}\n.badge-inactive[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n}\n.badge-warn[_ngcontent-%COMP%] {\n  background: #d97706;\n  color: #fff;\n}\n.badge-platform[_ngcontent-%COMP%] {\n  background: #0d47ff;\n  color: #fff;\n}\n.badge-blue[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: #fff;\n}\n.badge-purple[_ngcontent-%COMP%] {\n  background: #7c3aed;\n  color: #fff;\n}\n.badge-gray[_ngcontent-%COMP%] {\n  background: #64748b;\n  color: #fff;\n}\n.status-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.last-login[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: var(--sf-text);\n}\n.last-login.never[_ngcontent-%COMP%] {\n  color: var(--sf-text-muted);\n  font-style: italic;\n}\n.user-detail-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 14px;\n  padding: 16px 12px;\n  direction: rtl;\n  background: var(--sf-bg);\n}\n.detail-group[_ngcontent-%COMP%] {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 12px;\n  padding: 14px 18px;\n  min-width: 200px;\n  flex: 1;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.detail-group-title[_ngcontent-%COMP%] {\n  font-size: 0.71rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--sf-text-muted);\n  margin-bottom: 10px;\n  padding-bottom: 7px;\n  border-bottom: 1px solid var(--sf-border);\n}\n.detail-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.detail-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.df-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--sf-text-muted);\n  min-width: 100px;\n  flex-shrink: 0;\n}\n.df-val[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: var(--sf-text);\n  font-weight: 500;\n}\n.df-mono[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.8rem;\n}\n.detail-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 4px 0;\n  direction: rtl;\n}\n.detail-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  direction: rtl;\n  width: 100%;\n}\n.row-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.act-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.act-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.act-expand[_ngcontent-%COMP%] {\n  color: var(--sf-text-secondary);\n}\n.act-expand[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-primary);\n}\n.act-expand[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: transform 0.2s;\n}\n.act-expand.expanded[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.act-edit[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.act-edit[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n}\n.act-lock[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.act-lock[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.act-unlock[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.act-unlock[_ngcontent-%COMP%]:hover {\n  background: #f0fdf4;\n}\n/*# sourceMappingURL=users.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersComponent, [{
    type: Component,
    args: [{ selector: "app-users", standalone: true, imports: [
      CommonModule,
      FormsModule,
      GridModule,
      ExcelModule,
      PDFModule,
      ButtonsModule,
      IndicatorsModule,
      MatIconModule,
      UserDialogComponent
    ], template: `<div class="users-page">

  <div class="page-header">
    <div class="header-titles">
      <h1>\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD</h1>
      <p>{{ users().length }} \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA</p>
    </div>
    <button kendoButton themeColor="primary" [svgIcon]="addIcon" (click)="openAdd()">\u05DE\u05E9\u05EA\u05DE\u05E9 \u05D7\u05D3\u05E9</button>
  </div>

  <div class="toolbar">
    <div class="search-wrap">
      <mat-icon class="search-icon">search</mat-icon>
      <input class="search-input" type="text"
             placeholder="\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DC\u05E4\u05D9 \u05E9\u05DD, \u05DE\u05D9\u05D9\u05DC, \u05D0\u05E8\u05D2\u05D5\u05DF..."
             (input)="onSearch($any($event.target).value)" />
    </div>
    <div class="export-btns">
      <button kendoButton fillMode="outline" [svgIcon]="excelIcon" (click)="exportExcel()" class="btn-export btn-excel">Excel</button>
      <button kendoButton fillMode="outline" [svgIcon]="pdfIcon"   (click)="exportPDF()"   class="btn-export btn-pdf">PDF</button>
    </div>
  </div>

  @if (loading()) {
    <div class="state-box"><kendo-loader type="converging-spinner" size="medium" /></div>
  }
  @if (!loading() && error()) {
    <div class="state-box error">{{ error() }}</div>
  }

  @if (!loading() && !error()) {
    <kendo-grid
      [data]="{ data: pagedData, total: gridData.length }"
      [skip]="skip" [pageSize]="pageSize"
      [pageable]="{ buttonCount: 5, info: true, type: 'numeric', pageSizes: [10, 25, 50] }"
      [sortable]="{ mode: 'single', allowUnsort: false }"
      [sort]="sort"
      [reorderable]="true" [resizable]="true"
      [selectable]="{ mode: 'multiple', checkboxOnly: true }"
      [columnMenu]="true"
      scrollable="none"
      (pageChange)="onPageChange($event)"
      (sortChange)="onSortChange($event)"
      class="users-grid">

      <!-- \u05D4\u05E8\u05D7\u05D1\u05EA \u05E9\u05D5\u05E8\u05D4 \u2014 Kendo built-in detail expansion -->
      <ng-template kendoGridDetailTemplate let-u>
        <div class="user-detail-card">
          <div class="detail-group">
            <div class="detail-group-title">\u05E4\u05E8\u05D8\u05D9 \u05DE\u05E9\u05EA\u05DE\u05E9</div>
            <div class="detail-fields">
              <div class="detail-field"><span class="df-label">\u05E9\u05DD \u05DE\u05DC\u05D0</span><span class="df-val">{{ u.FullName }}</span></div>
              <div class="detail-field"><span class="df-label">\u05E9\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9</span><span class="df-val df-mono">{{ u.Username }}</span></div>
              <div class="detail-field"><span class="df-label">\u05D3\u05D5\u05D0"\u05DC</span><span class="df-val">{{ u.Email }}</span></div>
            </div>
          </div>
          <div class="detail-group">
            <div class="detail-group-title">\u05EA\u05E4\u05E7\u05D9\u05D3 \u05D5\u05D0\u05E8\u05D2\u05D5\u05DF</div>
            <div class="detail-fields">
              <div class="detail-field"><span class="df-label">\u05EA\u05E4\u05E7\u05D9\u05D3</span><span class="df-val">{{ u.RoleName }}</span></div>
              <div class="detail-field"><span class="df-label">\u05D0\u05E8\u05D2\u05D5\u05DF</span><span class="df-val">{{ u.OrgName }}</span></div>
              <div class="detail-field"><span class="df-label">\u05E7\u05D5\u05D3 \u05D0\u05E8\u05D2\u05D5\u05DF</span><span class="df-val df-mono">{{ u.TenantCode }}</span></div>
            </div>
          </div>
          <div class="detail-group">
            <div class="detail-group-title">\u05E1\u05D8\u05D8\u05D5\u05E1</div>
            <div class="detail-fields">
              <div class="detail-field"><span class="df-label">\u05DE\u05E6\u05D1</span>
                <span class="badge" [class.badge-active]="u.IsActive" [class.badge-inactive]="!u.IsActive">{{ u.IsActive ? '\u05E4\u05E2\u05D9\u05DC' : '\u05DE\u05D5\u05E9\u05D4\u05D4' }}</span>
              </div>
              <div class="detail-field"><span class="df-label">\u05DB\u05E0\u05D9\u05E1\u05D4 \u05D0\u05D7\u05E8\u05D5\u05E0\u05D4</span><span class="df-val">{{ formatLastLogin(u.LastLoginAt) }}</span></div>
              @if (u.MustChangePass) {
                <div class="detail-field"><span class="df-label">\u05E9\u05D9\u05E0\u05D5\u05D9 \u05E1\u05D9\u05E1\u05DE\u05D4</span><span class="badge badge-warn">\u05E0\u05D3\u05E8\u05E9</span></div>
              }
            </div>
          </div>
        </div>
      </ng-template>

      <kendo-grid-pdf fileName="\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD.pdf" [allPages]="true" paperSize="A4" [landscape]="true" margin="1cm" [repeatHeaders]="true" />
      <kendo-grid-excel fileName="\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD.xlsx" [fetchData]="allData">
        <kendo-excelexport-column field="FullName"    title="\u05E9\u05DD \u05DE\u05DC\u05D0"       [width]="160" />
        <kendo-excelexport-column field="Username"    title="\u05E9\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9"     [width]="120" />
        <kendo-excelexport-column field="Email"       title='\u05D3\u05D5\u05D0"\u05DC'        [width]="200" />
        <kendo-excelexport-column field="OrgName"     title="\u05D0\u05E8\u05D2\u05D5\u05DF"        [width]="160" />
        <kendo-excelexport-column field="RoleName"    title="\u05EA\u05E4\u05E7\u05D9\u05D3"        [width]="120" />
        <kendo-excelexport-column field="IsActive"    title="\u05E4\u05E2\u05D9\u05DC"         [width]="60"  />
        <kendo-excelexport-column field="LastLoginAt" title="\u05DB\u05E0\u05D9\u05E1\u05D4 \u05D0\u05D7\u05E8\u05D5\u05E0\u05D4" [width]="140" />
      </kendo-grid-excel>

      <kendo-grid-messages
        pagerItemsPerPage="\u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3" pagerOf="\u05DE\u05EA\u05D5\u05DA" pagerItems="\u05E8\u05E9\u05D5\u05DE\u05D5\u05EA"
        pagerFirstPage="\u05E2\u05DE\u05D5\u05D3 \u05E8\u05D0\u05E9\u05D5\u05DF" pagerLastPage="\u05E2\u05DE\u05D5\u05D3 \u05D0\u05D7\u05E8\u05D5\u05DF"
        pagerPreviousPage="\u05D4\u05E7\u05D5\u05D3\u05DD" pagerNextPage="\u05D4\u05D1\u05D0"
        pagerPage="\u05E2\u05DE\u05D5\u05D3" pagerPageNumberInputTitle="\u05DE\u05E1\u05E4\u05E8 \u05E2\u05DE\u05D5\u05D3"
        noRecords="\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD" loading="\u05D8\u05D5\u05E2\u05DF..."
        sortAscending="\u05DE\u05D9\u05D5\u05DF \u05E2\u05D5\u05DC\u05D4" sortDescending="\u05DE\u05D9\u05D5\u05DF \u05D9\u05D5\u05E8\u05D3"
        sortedAscending="\u05DE\u05DE\u05D5\u05D9\u05DF \u05D1\u05E1\u05D3\u05E8 \u05E2\u05D5\u05DC\u05D4" sortedDescending="\u05DE\u05DE\u05D5\u05D9\u05DF \u05D1\u05E1\u05D3\u05E8 \u05D9\u05D5\u05E8\u05D3"
        selectionCheckboxLabel="\u05D1\u05D7\u05E8 \u05E9\u05D5\u05E8\u05D4" selectAllCheckboxLabel="\u05D1\u05D7\u05E8 \u05D4\u05DB\u05DC"
        columnMenuFilter="\u05E1\u05E0\u05DF" columnMenuSort="\u05DE\u05D9\u05D5\u05DF" columnMenuColumns="\u05E2\u05DE\u05D5\u05D3\u05D5\u05EA"
        columnMenuSortAscending="\u05E2\u05D5\u05DC\u05D4" columnMenuSortDescending="\u05D9\u05D5\u05E8\u05D3"
      />

      <kendo-grid-checkbox-column [width]="44" [showSelectAll]="true" [columnMenu]="false" />

      @if (isPlatform()) {
        <kendo-grid-column field="OrgName" title="\u05D0\u05E8\u05D2\u05D5\u05DF" [width]="240">
          <ng-template kendoGridCellTemplate let-u>
            <div class="org-tag">
              @if (u.LogoUrl) {
                <img [src]="u.LogoUrl" [alt]="u.OrgName" class="org-logo" />
              } @else {
                <div class="org-avatar">{{ u.OrgName?.charAt(0) }}</div>
              }
              <div>
                <div class="org-name-sm">{{ u.OrgName }}</div>
                <div class="org-code">{{ u.TenantCode }}</div>
              </div>
            </div>
          </ng-template>
        </kendo-grid-column>
      }

      <kendo-grid-column field="FullName" title="\u05E9\u05DD" [minResizableWidth]="160">
        <ng-template kendoGridCellTemplate let-u>
          <div class="user-cell">
            <div class="user-avatar" [class.avatar-inactive]="!u.IsActive">{{ u.FullName ? u.FullName.charAt(0) : '?' }}</div>
            <div class="user-info">
              <span class="user-name">{{ u.FullName }}</span>
              <span class="user-username">&#64;{{ u.Username }}</span>
            </div>
          </div>
        </ng-template>
      </kendo-grid-column>

      <kendo-grid-column field="Email" title='\u05D3\u05D5\u05D0"\u05DC' [width]="220" />

      <kendo-grid-column field="RoleName" title="\u05EA\u05E4\u05E7\u05D9\u05D3" [width]="140">
        <ng-template kendoGridCellTemplate let-u>
          <span class="badge" [class]="roleClass(u.RoleName)">{{ u.RoleName }}</span>
        </ng-template>
      </kendo-grid-column>

      <kendo-grid-column field="LastLoginAt" title="\u05DB\u05E0\u05D9\u05E1\u05D4 \u05D0\u05D7\u05E8\u05D5\u05E0\u05D4" [width]="145">
        <ng-template kendoGridCellTemplate let-u>
          <span class="last-login" [class.never]="!hasLogin(u.LastLoginAt)">{{ formatLastLogin(u.LastLoginAt) }}</span>
        </ng-template>
      </kendo-grid-column>

      <kendo-grid-column field="IsActive" title="\u05E1\u05D8\u05D8\u05D5\u05E1" [width]="160">
        <ng-template kendoGridCellTemplate let-u>
          <div class="status-wrap">
            <span class="badge" [class.badge-active]="u.IsActive" [class.badge-inactive]="!u.IsActive">{{ u.IsActive ? '\u05E4\u05E2\u05D9\u05DC' : '\u05DE\u05D5\u05E9\u05D4\u05D4' }}</span>
            @if (u.MustChangePass) { <span class="badge badge-warn">\u05E1\u05D9\u05E1\u05DE\u05D4</span> }
          </div>
        </ng-template>
      </kendo-grid-column>

      <kendo-grid-column title="" [width]="104" [sortable]="false" [resizable]="false" [columnMenu]="false">
        <ng-template kendoGridCellTemplate let-u let-rowIndex="rowIndex">
          <div class="row-actions">
            <button class="act-btn act-expand"
                    [class.expanded]="isExpanded(u.UserID)"
                    [title]="isExpanded(u.UserID) ? '\u05E1\u05D2\u05D5\u05E8' : '\u05E4\u05E8\u05D8\u05D9\u05DD'"
                    (click)="toggleDetail(u, rowIndex)">
              <i class="pi" [class.pi-chevron-down]="!isExpanded(u.UserID)" [class.pi-chevron-up]="isExpanded(u.UserID)"></i>
            </button>
            <button class="act-btn" [class.act-lock]="u.IsActive" [class.act-unlock]="!u.IsActive"
                    [title]="u.IsActive ? '\u05D4\u05E9\u05D1\u05EA' : '\u05D4\u05E4\u05E2\u05DC'" (click)="toggleActive(u)">
              <i class="pi" [class.pi-lock]="u.IsActive" [class.pi-lock-open]="!u.IsActive"></i>
            </button>
            <button class="act-btn act-edit" title="\u05E2\u05E8\u05D5\u05DA" (click)="openEdit(u)">
              <i class="pi pi-pencil"></i>
            </button>
          </div>
        </ng-template>
      </kendo-grid-column>

    </kendo-grid>
  }

</div>

@if (dialogOpen()) {
  <app-user-dialog
    [user]="dialogUser()"
    [isPlatform]="isPlatform()"
    (closed)="dialogOpen.set(false)"
    (saved)="onSaved(); dialogOpen.set(false)" />
}
`, styles: ['/* src/app/features/users/users.component.scss */\n:host {\n  display: block;\n  width: 100%;\n}\n.users-page {\n  width: 100%;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  direction: rtl;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.header-titles h1 {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0;\n}\n.header-titles p {\n  font-size: 0.83rem;\n  color: var(--sf-text-secondary);\n  margin: 3px 0 0;\n}\n.toolbar {\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.toolbar-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.toolbar-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.export-btns {\n  display: flex;\n  gap: 0;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n}\n:host ::ng-deep .export-btns .k-button {\n  border: none !important;\n  border-radius: 0 !important;\n  background: var(--sf-bg-card) !important;\n  color: var(--sf-text-secondary) !important;\n  box-shadow: none !important;\n  padding: 6px 14px !important;\n  font-size: 0.82rem !important;\n  font-weight: 500 !important;\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n}\n:host ::ng-deep .export-btns .k-button:hover {\n  background: var(--sf-bg-hover) !important;\n}\n:host ::ng-deep .export-btns .k-button + .k-button {\n  border-inline-start: 1px solid var(--sf-border) !important;\n}\n:host ::ng-deep .export-btns .btn-excel:hover {\n  color: #16a34a !important;\n}\n:host ::ng-deep .export-btns .btn-pdf:hover {\n  color: #dc2626 !important;\n}\n.search-wrap {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 300px;\n  direction: rtl;\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 6px 12px;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.search-wrap:focus-within {\n  border-color: var(--sf-border-focus);\n  box-shadow: 0 0 0 3px rgba(13, 71, 255, 0.12);\n}\n.search-icon {\n  color: var(--sf-text-muted);\n  font-size: 18px;\n  width: 18px !important;\n  height: 18px !important;\n  flex-shrink: 0;\n}\n.search-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  color: var(--sf-text);\n  font-size: 0.875rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n.search-input::placeholder {\n  color: var(--sf-text-muted);\n}\n.rows-label {\n  font-size: 0.83rem;\n  color: var(--sf-text-secondary);\n}\n.rows-select {\n  border: 1px solid var(--sf-border);\n  border-radius: 6px;\n  padding: 5px 10px;\n  font-size: 0.83rem;\n  color: var(--sf-text);\n  background: var(--sf-bg-card);\n  cursor: pointer;\n  outline: none;\n}\n.rows-select:focus {\n  border-color: var(--sf-border-focus);\n}\n.state-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: var(--sf-text-secondary);\n}\n.state-box.error {\n  color: var(--sf-danger);\n}\n:host ::ng-deep .users-grid {\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.04);\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n:host ::ng-deep .users-grid .k-grid-header th.k-header {\n  background: var(--sf-grid-hd-bg) !important;\n  color: var(--sf-grid-hd-color) !important;\n  font-weight: 700 !important;\n  font-size: 0.78rem !important;\n  text-align: right !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n  border-color: var(--sf-grid-hd-border) !important;\n  direction: rtl;\n  padding: 8px 12px !important;\n}\n:host ::ng-deep .users-grid .k-grid-header {\n  background: var(--sf-grid-hd-bg) !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n}\n:host ::ng-deep .users-grid .k-column-menu-button {\n  color: var(--sf-grid-hd-color);\n  opacity: 0.7;\n}\n:host ::ng-deep .users-grid .k-column-menu-button:hover {\n  opacity: 1;\n}\n:host ::ng-deep .users-grid td.k-table-td {\n  text-align: right !important;\n  vertical-align: middle !important;\n  border-color: var(--sf-border) !important;\n  font-size: 0.875rem;\n  background: var(--sf-bg-card);\n  direction: rtl;\n  padding: 10px 14px !important;\n}\n:host ::ng-deep .users-grid tr.k-table-row:hover td {\n  background: var(--sf-bg-hover) !important;\n}\n:host ::ng-deep .users-grid .k-detail-row > td {\n  background: var(--sf-bg) !important;\n  padding: 4px 0 12px !important;\n  border-bottom: 1px solid var(--sf-border) !important;\n}\n:host ::ng-deep .users-grid .k-column-resizer {\n  background: var(--sf-border);\n  width: 1px;\n  opacity: 0.5;\n}\n:host ::ng-deep .users-grid .k-pager {\n  border-top: 1px solid var(--sf-border);\n  background: var(--sf-bg);\n  direction: rtl;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  font-size: 0.82rem;\n  padding: 10px 16px;\n}\n:host ::ng-deep .users-grid .k-pager-wrap,\n:host ::ng-deep .users-grid .k-pager {\n  direction: rtl !important;\n}\n:host ::ng-deep .users-grid .k-sort-icon {\n  margin-right: 4px;\n}\n.user-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background: var(--sf-primary-light);\n  color: var(--sf-primary);\n  font-size: 0.9rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.user-avatar.avatar-inactive {\n  background: #f1f5f9;\n  color: var(--sf-text-muted);\n  text-decoration: line-through;\n}\n.user-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.user-name {\n  font-weight: 600;\n  color: var(--sf-text);\n  font-size: 0.88rem;\n  line-height: 1.2;\n}\n.user-username {\n  font-size: 0.73rem;\n  color: var(--sf-text-muted);\n  font-family: "Share Tech Mono", monospace;\n}\n.org-tag {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.org-logo {\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  object-fit: contain;\n  border: 1px solid var(--sf-border);\n  padding: 2px;\n  background: #fff;\n  flex-shrink: 0;\n}\n.org-avatar {\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  flex-shrink: 0;\n  background: var(--sf-primary-light);\n  color: var(--sf-primary);\n  font-size: 0.8rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.org-name-sm {\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: var(--sf-text);\n  line-height: 1.2;\n}\n.org-code {\n  font-size: 0.71rem;\n  color: var(--sf-text-muted);\n  font-family: "Share Tech Mono", monospace;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.74rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  white-space: nowrap;\n}\n.badge-active {\n  background: #16a34a;\n  color: #fff;\n}\n.badge-inactive {\n  background: #dc2626;\n  color: #fff;\n}\n.badge-warn {\n  background: #d97706;\n  color: #fff;\n}\n.badge-platform {\n  background: #0d47ff;\n  color: #fff;\n}\n.badge-blue {\n  background: #3b82f6;\n  color: #fff;\n}\n.badge-purple {\n  background: #7c3aed;\n  color: #fff;\n}\n.badge-gray {\n  background: #64748b;\n  color: #fff;\n}\n.status-wrap {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.last-login {\n  font-size: 0.83rem;\n  color: var(--sf-text);\n}\n.last-login.never {\n  color: var(--sf-text-muted);\n  font-style: italic;\n}\n.user-detail-card {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 14px;\n  padding: 16px 12px;\n  direction: rtl;\n  background: var(--sf-bg);\n}\n.detail-group {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 12px;\n  padding: 14px 18px;\n  min-width: 200px;\n  flex: 1;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.detail-group-title {\n  font-size: 0.71rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--sf-text-muted);\n  margin-bottom: 10px;\n  padding-bottom: 7px;\n  border-bottom: 1px solid var(--sf-border);\n}\n.detail-fields {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.detail-field {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.df-label {\n  font-size: 0.75rem;\n  color: var(--sf-text-muted);\n  min-width: 100px;\n  flex-shrink: 0;\n}\n.df-val {\n  font-size: 0.83rem;\n  color: var(--sf-text);\n  font-weight: 500;\n}\n.df-mono {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.8rem;\n}\n.detail-body {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 4px 0;\n  direction: rtl;\n}\n.detail-footer {\n  display: flex;\n  gap: 10px;\n  direction: rtl;\n  width: 100%;\n}\n.row-actions {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.act-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.act-btn i {\n  font-size: 0.9rem;\n}\n.act-expand {\n  color: var(--sf-text-secondary);\n}\n.act-expand:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-primary);\n}\n.act-expand i {\n  transition: transform 0.2s;\n}\n.act-expand.expanded i {\n  transform: rotate(180deg);\n}\n.act-edit {\n  color: #3b82f6;\n}\n.act-edit:hover {\n  background: #eff6ff;\n}\n.act-lock {\n  color: #ef4444;\n}\n.act-lock:hover {\n  background: #fef2f2;\n}\n.act-unlock {\n  color: #16a34a;\n}\n.act-unlock:hover {\n  background: #f0fdf4;\n}\n/*# sourceMappingURL=users.component.css.map */\n'] }]
  }], () => [{ type: UserService }], { grid: [{
    type: ViewChild,
    args: [GridComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src/app/features/users/users.component.ts", lineNumber: 28 });
})();
export {
  UsersComponent
};
//# sourceMappingURL=chunk-CSUQH3P4.js.map
