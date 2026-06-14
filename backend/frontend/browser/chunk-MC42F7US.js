import {
  LogicPermsComponent
} from "./chunk-UXYWPSAG.js";
import "./chunk-M7FXBDNT.js";
import {
  OrganizationService
} from "./chunk-LTSBCPDU.js";
import {
  HasPermDirective
} from "./chunk-URFJMIXK.js";
import {
  CellTemplateDirective,
  CheckboxColumnComponent,
  ColumnComponent,
  ColumnComponent2,
  CustomMessagesComponent2 as CustomMessagesComponent,
  DetailTemplateDirective,
  DropDownListComponent,
  DropDownsModule,
  ExcelComponent,
  ExcelModule,
  GridComponent,
  GridModule,
  PDFComponent,
  PDFModule,
  orderBy
} from "./chunk-7GBLAVZE.js";
import {
  DialogActionsComponent,
  DialogComponent,
  DialogsModule,
  InputsModule,
  TextAreaComponent,
  TextBoxComponent
} from "./chunk-BYBLGOFY.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-5JG6GFCW.js";
import "./chunk-RCBY4TKT.js";
import "./chunk-5ISISSGV.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-AVTM4YYQ.js";
import "./chunk-7BTXUMFJ.js";
import {
  ButtonComponent,
  ButtonsModule,
  IconsModule,
  IndicatorsModule,
  LoaderComponent,
  SVGIconComponent,
  buildingsIcon,
  fileExcelIcon,
  filePdfIcon,
  gearIcon,
  lockIcon,
  plusIcon,
  userIcon
} from "./chunk-BV74N4V5.js";
import "./chunk-YZNXQPNO.js";
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
} from "./chunk-4FOUEPN2.js";
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
  forkJoin,
  of,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-VR4UVLCZ.js";

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
  changePassword(id, newPassword) {
    return this.http.put(`${this.base}/${id}/password`, { newPassword });
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
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.OrgUnitID;
function UserDialogComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 7);
    \u0275\u0275text(2, "\u05D0\u05E8\u05D2\u05D5\u05DF:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 9);
    \u0275\u0275text(6, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.user.OrgName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("@", ctx_r0.user.Username);
  }
}
function UserDialogComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "kendo-loader", 11);
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMsg);
  }
}
function UserDialogComponent_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function UserDialogComponent_Conditional_3_For_4_Template_button_click_0_listener() {
      const g_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.activeGroup.set(g_r3.id));
    });
    \u0275\u0275element(1, "kendo-svg-icon", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r0.activeGroup() === g_r3.id);
    \u0275\u0275advance();
    \u0275\u0275property("icon", g_r3.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", g_r3.text, " ");
  }
}
function UserDialogComponent_Conditional_3_Conditional_7_Conditional_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 29);
    \u0275\u0275text(1, "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_Conditional_3_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "label", 25);
    \u0275\u0275text(2, "\u05D0\u05E8\u05D2\u05D5\u05DF ");
    \u0275\u0275elementStart(3, "span", 26);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 27);
    \u0275\u0275element(6, "kendo-dropdownlist", 35);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(7, UserDialogComponent_Conditional_3_Conditional_7_Conditional_3_Conditional_7_Template, 2, 0, "small", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275property("data", ctx_r0.orgs)("valuePrimitive", true)("defaultItem", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.orgErr ? 7 : -1);
  }
}
function UserDialogComponent_Conditional_3_Conditional_7_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 29);
    \u0275\u0275text(1, "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_Conditional_3_Conditional_7_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 29);
    \u0275\u0275text(1, "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_Conditional_3_Conditional_7_Conditional_21_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 29);
    \u0275\u0275text(1, "\u05D0\u05D5\u05EA\u05D9\u05D5\u05EA \u05DC\u05D8\u05D9\u05E0\u05D9\u05D5\u05EA / \u05E1\u05E4\u05E8\u05D5\u05EA / \u05E0\u05E7\u05D5\u05D3\u05D4 / \u05DE\u05E7\u05E3 \u05D1\u05DC\u05D1\u05D3");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_Conditional_3_Conditional_7_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "label", 25);
    \u0275\u0275text(2, "\u05E9\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9 ");
    \u0275\u0275elementStart(3, "span", 26);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 27);
    \u0275\u0275element(6, "kendo-textbox", 36);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(7, UserDialogComponent_Conditional_3_Conditional_7_Conditional_21_Conditional_7_Template, 2, 0, "small", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.usernameErr ? 7 : -1);
  }
}
function UserDialogComponent_Conditional_3_Conditional_7_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 29);
    \u0275\u0275text(1, "\u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05D9\u05D9\u05DC \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_Conditional_3_Conditional_7_Conditional_45_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 29);
    \u0275\u0275text(1, "\u05DC\u05E4\u05D7\u05D5\u05EA 6 \u05EA\u05D5\u05D5\u05D9\u05DD");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_Conditional_3_Conditional_7_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "label", 25);
    \u0275\u0275text(2, "\u05E1\u05D9\u05E1\u05DE\u05D4 ");
    \u0275\u0275elementStart(3, "span", 26);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 27);
    \u0275\u0275element(6, "kendo-textbox", 37);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(7, UserDialogComponent_Conditional_3_Conditional_7_Conditional_45_Conditional_7_Template, 2, 0, "small", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275property("type", "password");
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.passwordErr ? 7 : -1);
  }
}
function UserDialogComponent_Conditional_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "h3", 22);
    \u0275\u0275text(2, "\u05E4\u05E8\u05D8\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05D9\u05DD");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, UserDialogComponent_Conditional_3_Conditional_7_Conditional_3_Template, 8, 5, "div", 23);
    \u0275\u0275elementStart(4, "div", 24)(5, "div", 23)(6, "label", 25);
    \u0275\u0275text(7, "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 ");
    \u0275\u0275elementStart(8, "span", 26);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 27);
    \u0275\u0275element(11, "kendo-textbox", 28);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(12, UserDialogComponent_Conditional_3_Conditional_7_Conditional_12_Template, 2, 0, "small", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 23)(14, "label", 25);
    \u0275\u0275text(15, "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4 ");
    \u0275\u0275elementStart(16, "span", 26);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 27);
    \u0275\u0275element(19, "kendo-textbox", 30);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(20, UserDialogComponent_Conditional_3_Conditional_7_Conditional_20_Template, 2, 0, "small", 29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(21, UserDialogComponent_Conditional_3_Conditional_7_Conditional_21_Template, 8, 1, "div", 23);
    \u0275\u0275elementStart(22, "div", 23)(23, "label", 25);
    \u0275\u0275text(24, '\u05D3\u05D5\u05D0"\u05DC ');
    \u0275\u0275elementStart(25, "span", 26);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 27);
    \u0275\u0275element(28, "kendo-textbox", 31);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(29, UserDialogComponent_Conditional_3_Conditional_7_Conditional_29_Template, 2, 0, "small", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 23)(31, "label", 25);
    \u0275\u0275text(32, "\u05D8\u05DC\u05E4\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 27);
    \u0275\u0275element(34, "kendo-textbox", 32);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 23)(36, "label", 25);
    \u0275\u0275text(37, "\u05DB\u05D5\u05EA\u05E8\u05EA \u05EA\u05E4\u05E7\u05D9\u05D3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 27);
    \u0275\u0275element(39, "kendo-textbox", 33);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 23)(41, "label", 25);
    \u0275\u0275text(42, "\u05D4\u05E2\u05E8\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 27);
    \u0275\u0275element(44, "kendo-textarea", 34);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(45, UserDialogComponent_Conditional_3_Conditional_7_Conditional_45_Template, 8, 2, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.isPlatform && !ctx_r0.isEdit ? 3 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.firstNameErr ? 12 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.lastNameErr ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.isEdit ? 21 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.emailErr ? 29 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275property("rows", 3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.isEdit ? 45 : -1);
  }
}
function UserDialogComponent_Conditional_3_Conditional_8_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 29);
    \u0275\u0275text(1, "\u05D9\u05E9 \u05DC\u05D1\u05D7\u05D5\u05E8 \u05EA\u05E4\u05E7\u05D9\u05D3");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_Conditional_3_Conditional_8_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40);
    \u0275\u0275text(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u05D4\u05EA\u05E4\u05E7\u05D9\u05D3 \u05E7\u05D5\u05D1\u05E2 \u05D0\u05EA \u05D4\u05D4\u05E8\u05E9\u05D0\u05D5\u05EA \u05E9\u05DC \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9 \u05D1\u05DB\u05DC \u05DE\u05E1\u05DB\u05D9 \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA");
    \u0275\u0275elementEnd()();
  }
}
function UserDialogComponent_Conditional_3_Conditional_8_Conditional_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 29);
    \u0275\u0275text(1, "\u05DC\u05E4\u05D7\u05D5\u05EA 6 \u05EA\u05D5\u05D5\u05D9\u05DD");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_Conditional_3_Conditional_8_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "label", 25);
    \u0275\u0275text(2, "\u05E1\u05D9\u05E1\u05DE\u05D4 \u05D7\u05D3\u05E9\u05D4 ");
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4, "(\u05D0\u05D5\u05E4\u05E6\u05D9\u05D5\u05E0\u05DC\u05D9)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 27);
    \u0275\u0275element(6, "kendo-textbox", 42);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(7, UserDialogComponent_Conditional_3_Conditional_8_Conditional_12_Conditional_7_Template, 2, 0, "small", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275property("type", "password");
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.newPasswordErr ? 7 : -1);
  }
}
function UserDialogComponent_Conditional_3_Conditional_8_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "label", 25);
    \u0275\u0275text(2, "\u05E1\u05D8\u05D8\u05D5\u05E1 \u05D7\u05E9\u05D1\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27)(4, "div", 43)(5, "button", 44);
    \u0275\u0275listener("click", function UserDialogComponent_Conditional_3_Conditional_8_Conditional_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.form.get("isActive")?.setValue(true));
    });
    \u0275\u0275text(6, " \u2713 \u05E4\u05E2\u05D9\u05DC ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 44);
    \u0275\u0275listener("click", function UserDialogComponent_Conditional_3_Conditional_8_Conditional_13_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.form.get("isActive")?.setValue(false));
    });
    \u0275\u0275text(8, " \u2717 \u05DE\u05D5\u05E9\u05D4\u05D4 ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("seg-on", !!ctx_r0.form.get("isActive")?.value);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg-off", !ctx_r0.form.get("isActive")?.value);
  }
}
function UserDialogComponent_Conditional_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "h3", 22);
    \u0275\u0275text(2, "\u05EA\u05E4\u05E7\u05D9\u05D3 \u05D5\u05D0\u05D1\u05D8\u05D7\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23)(4, "label", 25);
    \u0275\u0275text(5, "\u05EA\u05E4\u05E7\u05D9\u05D3 \u05DE\u05E2\u05E8\u05DB\u05EA ");
    \u0275\u0275elementStart(6, "span", 26);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 27);
    \u0275\u0275element(9, "kendo-dropdownlist", 38);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(10, UserDialogComponent_Conditional_3_Conditional_8_Conditional_10_Template, 2, 0, "small", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, UserDialogComponent_Conditional_3_Conditional_8_Conditional_11_Template, 5, 0, "div", 39);
    \u0275\u0275conditionalCreate(12, UserDialogComponent_Conditional_3_Conditional_8_Conditional_12_Template, 8, 2, "div", 23);
    \u0275\u0275conditionalCreate(13, UserDialogComponent_Conditional_3_Conditional_8_Conditional_13_Template, 9, 4, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("data", ctx_r0.roles)("valuePrimitive", true);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.roleErr ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.roles.length > 0 ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isEdit ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isEdit ? 13 : -1);
  }
}
function UserDialogComponent_Conditional_3_Conditional_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "span");
    \u0275\u0275text(2, "\u05DC\u05D0 \u05D4\u05D5\u05D2\u05D3\u05E8\u05D5 \u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05D5\u05EA \u05D1\u05D0\u05E8\u05D2\u05D5\u05DF \u05D6\u05D4.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small");
    \u0275\u0275text(4, "\u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05D2\u05D3\u05D9\u05E8 \u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05D5\u05EA \u05EA\u05D7\u05EA: \u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u2192 \u05DE\u05D1\u05E0\u05D4 \u05D0\u05E8\u05D2\u05D5\u05E0\u05D9");
    \u0275\u0275elementEnd()();
  }
}
function UserDialogComponent_Conditional_3_Conditional_9_Conditional_8_For_7_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F3E2} ");
  }
}
function UserDialogComponent_Conditional_3_Conditional_9_Conditional_8_For_7_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F537} ");
  }
}
function UserDialogComponent_Conditional_3_Conditional_9_Conditional_8_For_7_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F3EC} ");
  }
}
function UserDialogComponent_Conditional_3_Conditional_9_Conditional_8_For_7_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F33F} ");
  }
}
function UserDialogComponent_Conditional_3_Conditional_9_Conditional_8_For_7_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F465} ");
  }
}
function UserDialogComponent_Conditional_3_Conditional_9_Conditional_8_For_7_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F4CC} ");
  }
}
function UserDialogComponent_Conditional_3_Conditional_9_Conditional_8_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275listener("click", function UserDialogComponent_Conditional_3_Conditional_9_Conditional_8_For_7_Template_div_click_0_listener() {
      const unit_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.selectOrgUnit(unit_r7));
    });
    \u0275\u0275elementStart(1, "span", 49);
    \u0275\u0275conditionalCreate(2, UserDialogComponent_Conditional_3_Conditional_9_Conditional_8_For_7_Case_2_Template, 1, 0)(3, UserDialogComponent_Conditional_3_Conditional_9_Conditional_8_For_7_Case_3_Template, 1, 0)(4, UserDialogComponent_Conditional_3_Conditional_9_Conditional_8_For_7_Case_4_Template, 1, 0)(5, UserDialogComponent_Conditional_3_Conditional_9_Conditional_8_For_7_Case_5_Template, 1, 0)(6, UserDialogComponent_Conditional_3_Conditional_9_Conditional_8_For_7_Case_6_Template, 1, 0)(7, UserDialogComponent_Conditional_3_Conditional_9_Conditional_8_For_7_Case_7_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 50);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 52);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const unit_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", ctx_r0.form.get("primaryOrgUnitId")?.value === unit_r7.OrgUnitID)("has-parent", !!unit_r7.ParentOrgUnitID);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_15_0 = unit_r7.UnitType) === "COMPANY" ? 2 : tmp_15_0 === "DIVISION" ? 3 : tmp_15_0 === "DEPARTMENT" ? 4 : tmp_15_0 === "BRANCH" ? 5 : tmp_15_0 === "TEAM" ? 6 : 7);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(unit_r7.UnitName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(unit_r7.UnitType);
  }
}
function UserDialogComponent_Conditional_3_Conditional_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 48);
    \u0275\u0275listener("click", function UserDialogComponent_Conditional_3_Conditional_9_Conditional_8_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectOrgUnit(null));
    });
    \u0275\u0275elementStart(2, "span", 49);
    \u0275\u0275text(3, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 50);
    \u0275\u0275text(5, "\u05DC\u05DC\u05D0 \u05E9\u05D9\u05D5\u05DA");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(6, UserDialogComponent_Conditional_3_Conditional_9_Conditional_8_For_7_Template, 12, 7, "div", 51, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", !ctx_r0.form.get("primaryOrgUnitId")?.value);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.orgUnits);
  }
}
function UserDialogComponent_Conditional_3_Conditional_9_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 53);
    \u0275\u0275text(2, "\u05D9\u05D7\u05D9\u05D3\u05D4 \u05E0\u05D1\u05D7\u05E8\u05EA:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.selectedOrgUnitName);
  }
}
function UserDialogComponent_Conditional_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "h3", 22);
    \u0275\u0275text(2, "\u05E9\u05D9\u05D5\u05DA \u05D0\u05E8\u05D2\u05D5\u05E0\u05D9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23)(4, "label", 25);
    \u0275\u0275text(5, "\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 27);
    \u0275\u0275conditionalCreate(7, UserDialogComponent_Conditional_3_Conditional_9_Conditional_7_Template, 5, 0, "div", 45)(8, UserDialogComponent_Conditional_3_Conditional_9_Conditional_8_Template, 8, 2, "div", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, UserDialogComponent_Conditional_3_Conditional_9_Conditional_9_Template, 5, 1, "div", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r0.orgUnits.length === 0 ? 7 : 8);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form.get("primaryOrgUnitId")?.value ? 9 : -1);
  }
}
function UserDialogComponent_Conditional_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 54);
    \u0275\u0275text(2, "\u2699\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05DE\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "\u05E9\u05E2\u05D5\u05EA \u05DB\u05E0\u05D9\u05E1\u05D4, IP Whitelist, \u05DB\u05DC\u05DC\u05D9 \u05E1\u05D9\u05E1\u05DE\u05D4 \u05D5\u05E2\u05D5\u05D3 \u2014 \u05D9\u05EA\u05D5\u05D5\u05E1\u05E4\u05D5 \u05D1\u05E9\u05DC\u05D1 \u05D4\u05D1\u05D0");
    \u0275\u0275elementEnd()();
  }
}
function UserDialogComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, UserDialogComponent_Conditional_3_Conditional_0_Template, 2, 1, "div", 12);
    \u0275\u0275elementStart(1, "div", 13)(2, "nav", 14);
    \u0275\u0275repeaterCreate(3, UserDialogComponent_Conditional_3_For_4_Template, 3, 4, "button", 15, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 16)(6, "form", 17);
    \u0275\u0275conditionalCreate(7, UserDialogComponent_Conditional_3_Conditional_7_Template, 46, 7, "div", 18);
    \u0275\u0275conditionalCreate(8, UserDialogComponent_Conditional_3_Conditional_8_Template, 14, 6, "div", 18);
    \u0275\u0275conditionalCreate(9, UserDialogComponent_Conditional_3_Conditional_9_Template, 10, 2, "div", 18);
    \u0275\u0275conditionalCreate(10, UserDialogComponent_Conditional_3_Conditional_10_Template, 7, 0, "div", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.errorMsg ? 0 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.groups);
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeGroup() === "details" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeGroup() === "role" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeGroup() === "org" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeGroup() === "settings" ? 10 : -1);
  }
}
function UserDialogComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-loader", 5);
  }
}
function UserDialogComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2713 ");
  }
}
var UserDialogComponent = class _UserDialogComponent {
  fb;
  http;
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
  orgUnits = [];
  activeGroup = signal(
    "details",
    ...ngDevMode ? [{ debugName: "activeGroup" }] : (
      /* istanbul ignore next */
      []
    )
  );
  groups = [
    { id: "details", text: "\u05E4\u05E8\u05D8\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05D9\u05DD", icon: userIcon },
    { id: "role", text: "\u05EA\u05E4\u05E7\u05D9\u05D3 \u05D5\u05D0\u05D1\u05D8\u05D7\u05D4", icon: lockIcon },
    { id: "org", text: "\u05E9\u05D9\u05D5\u05DA \u05D0\u05E8\u05D2\u05D5\u05E0\u05D9", icon: buildingsIcon },
    { id: "settings", text: "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA", icon: gearIcon }
  ];
  groupFields = {
    details: ["firstName", "lastName", "username", "email", "password", "tenantId"],
    role: ["roleId", "newPassword"],
    org: ["primaryOrgUnitId"],
    settings: []
  };
  get isEdit() {
    return !!this.user;
  }
  get title() {
    return this.isEdit ? `\u05E2\u05E8\u05D9\u05DB\u05EA \u05DE\u05E9\u05EA\u05DE\u05E9 \u2014 ${this.user.FullName}` : "\u05DE\u05E9\u05EA\u05DE\u05E9 \u05D7\u05D3\u05E9";
  }
  get selectedOrgUnitName() {
    const id = this.form?.get("primaryOrgUnitId")?.value;
    if (!id)
      return "\u2014";
    return this.orgUnits.find((u) => u.OrgUnitID === id)?.UnitName ?? "\u2014";
  }
  constructor(fb, http, userSvc, orgSvc) {
    this.fb = fb;
    this.http = http;
    this.userSvc = userSvc;
    this.orgSvc = orgSvc;
  }
  ngOnInit() {
    this.buildForm();
    this.loadRoles();
    this.loadOrgUnits();
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
        isActive: [u.IsActive],
        newPassword: ["", [Validators.minLength(6)]],
        phone: [u.Phone ?? ""],
        jobTitle: [u.JobTitle ?? ""],
        notes: [u.Notes ?? ""],
        primaryOrgUnitId: [u.PrimaryOrgUnitID ?? null]
      });
    } else {
      this.form = this.fb.group({
        tenantId: [null, this.isPlatform ? Validators.required : []],
        firstName: ["", [Validators.required, Validators.maxLength(100)]],
        lastName: ["", [Validators.required, Validators.maxLength(100)]],
        username: ["", [Validators.required, Validators.maxLength(80), Validators.pattern(/^[a-zA-Z0-9._-]+$/)]],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        roleId: [2, Validators.required],
        phone: [""],
        jobTitle: [""],
        notes: [""],
        primaryOrgUnitId: [null]
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
        this.checkLoading();
      }
    });
  }
  loadOrgUnits() {
    const tenantParam = this.isEdit && this.user.TenantID ? `?tenantId=${this.user.TenantID}` : "";
    this.http.get(`/api/org/units${tenantParam}`).subscribe({
      next: (r) => {
        this.orgUnits = r.data ?? [];
        this.checkLoading();
      },
      error: () => {
        this.checkLoading();
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
        this.checkLoading();
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
  navigateToFirstError() {
    for (const [group, fields] of Object.entries(this.groupFields)) {
      if (fields.some((f) => this.form.get(f)?.invalid)) {
        this.activeGroup.set(group);
        return;
      }
    }
  }
  close() {
    this.closed.emit();
  }
  selectOrgUnit(unit) {
    this.form.get("primaryOrgUnitId")?.setValue(unit ? unit.OrgUnitID : null);
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.navigateToFirstError();
      this.errorMsg = "\u05D9\u05E9 \u05E9\u05D3\u05D5\u05EA \u05D7\u05D5\u05D1\u05D4 \u05E9\u05DC\u05D0 \u05DE\u05D5\u05DC\u05D0\u05D5";
      return;
    }
    this.saving = true;
    this.errorMsg = "";
    const v = this.form.value;
    if (this.isEdit) {
      const uid = this.user.UserID;
      const updateObs = this.userSvc.update(uid, {
        firstName: v.firstName,
        lastName: v.lastName,
        email: v.email,
        roleId: v.roleId,
        isActive: v.isActive,
        phone: v.phone || null,
        jobTitle: v.jobTitle || null,
        notes: v.notes || null,
        primaryOrgUnitId: v.primaryOrgUnitId || null
      });
      const pwObs = v.newPassword ? this.userSvc.changePassword(uid, v.newPassword) : of(null);
      forkJoin([updateObs, pwObs]).subscribe({
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
    } else {
      this.userSvc.create({
        tenantId: v.tenantId,
        firstName: v.firstName,
        lastName: v.lastName,
        username: v.username,
        email: v.email,
        password: v.password,
        roleId: v.roleId
      }).subscribe({
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
  get newPasswordErr() {
    const f = this.form.get("newPassword");
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
    return new (__ngFactoryType__ || _UserDialogComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(OrganizationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserDialogComponent, selectors: [["app-user-dialog"]], inputs: { user: "user", isPlatform: "isPlatform" }, outputs: { closed: "closed", saved: "saved" }, decls: 12, vars: 9, consts: [[3, "close", "title", "width", "minWidth"], [1, "org-context-bar"], [1, "dialog-loading"], [1, "dialog-footer"], ["kendoButton", "", 1, "btn-save", 3, "click", "disabled"], ["type", "pulsing", "size", "small"], ["kendoButton", "", "fillMode", "outline", 1, "btn-cancel", 3, "click", "disabled"], [1, "ctx-label"], [1, "ctx-org"], [1, "ctx-sep"], [1, "ctx-user"], ["type", "converging-spinner", "size", "medium"], [1, "error-banner"], [1, "user-dialog-body"], [1, "user-nav"], ["type", "button", 1, "nav-item", 3, "active"], [1, "user-content"], ["novalidate", "", 3, "formGroup"], [1, "form-section"], [1, "form-section", "settings-placeholder"], ["type", "button", 1, "nav-item", 3, "click"], [3, "icon"], [1, "section-title"], [1, "form-row"], [1, "form-row-2"], [1, "field-label"], [1, "req"], [1, "field-wrap"], ["formControlName", "firstName", "placeholder", "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9"], [1, "err-msg"], ["formControlName", "lastName", "placeholder", "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4"], ["formControlName", "email", "placeholder", "user@domain.com"], ["formControlName", "phone", "placeholder", "050-0000000"], ["formControlName", "jobTitle", "placeholder", "\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: \u05DE\u05E4\u05EA\u05D7 Full Stack"], ["formControlName", "notes", "placeholder", "\u05D4\u05E2\u05E8\u05D5\u05EA \u05E4\u05E0\u05D9\u05DE\u05D9\u05D5\u05EA...", 3, "rows"], ["formControlName", "tenantId", "textField", "CompanyName", "valueField", "TenantID", 3, "data", "valuePrimitive", "defaultItem"], ["formControlName", "username", "placeholder", "\u05D0\u05D5\u05EA\u05D9\u05D5\u05EA \u05DC\u05D8\u05D9\u05E0\u05D9\u05D5\u05EA, \u05E1\u05E4\u05E8\u05D5\u05EA, \u05E0\u05E7\u05D5\u05D3\u05D4, \u05DE\u05E7\u05E3"], ["formControlName", "password", "placeholder", "\u05DC\u05E4\u05D7\u05D5\u05EA 6 \u05EA\u05D5\u05D5\u05D9\u05DD", 3, "type"], ["formControlName", "roleId", "textField", "RoleName", "valueField", "RoleID", 3, "data", "valuePrimitive"], [1, "role-info"], [1, "role-info-icon"], [1, "field-hint"], ["formControlName", "newPassword", "placeholder", "\u05D4\u05E9\u05D0\u05E8 \u05E8\u05D9\u05E7 \u05DC\u05E9\u05DE\u05D9\u05E8\u05EA \u05D4\u05E1\u05D9\u05E1\u05DE\u05D4 \u05D4\u05E7\u05D9\u05D9\u05DE\u05EA", 3, "type"], [1, "seg-ctrl"], ["type", "button", 1, "seg-btn", 3, "click"], [1, "empty-org-units"], [1, "org-unit-list"], [1, "org-selected-info"], [1, "org-unit-item", 3, "click"], [1, "ou-icon"], [1, "ou-name"], [1, "org-unit-item", 3, "selected", "has-parent"], [1, "ou-type"], [1, "org-selected-label"], [1, "placeholder-icon"]], template: function UserDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "kendo-dialog", 0);
      \u0275\u0275listener("close", function UserDialogComponent_Template_kendo_dialog_close_0_listener() {
        return ctx.close();
      });
      \u0275\u0275conditionalCreate(1, UserDialogComponent_Conditional_1_Template, 9, 2, "div", 1);
      \u0275\u0275conditionalCreate(2, UserDialogComponent_Conditional_2_Template, 2, 0, "div", 2)(3, UserDialogComponent_Conditional_3_Template, 11, 6);
      \u0275\u0275elementStart(4, "kendo-dialog-actions")(5, "div", 3)(6, "button", 4);
      \u0275\u0275listener("click", function UserDialogComponent_Template_button_click_6_listener() {
        return ctx.save();
      });
      \u0275\u0275conditionalCreate(7, UserDialogComponent_Conditional_7_Template, 1, 0, "kendo-loader", 5)(8, UserDialogComponent_Conditional_8_Template, 1, 0);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 6);
      \u0275\u0275listener("click", function UserDialogComponent_Template_button_click_10_listener() {
        return ctx.close();
      });
      \u0275\u0275text(11, " \u05D1\u05D9\u05D8\u05D5\u05DC ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("title", ctx.title)("width", 760)("minWidth", 580);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isEdit && ctx.user?.OrgName ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 2 : 3);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.saving || ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.saving ? 7 : 8);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isEdit ? "\u05E9\u05DE\u05D5\u05E8 \u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD" : "\u05E6\u05D5\u05E8 \u05DE\u05E9\u05EA\u05DE\u05E9", " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.saving);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, DialogsModule, DialogComponent, DialogActionsComponent, InputsModule, TextBoxComponent, TextAreaComponent, DropDownsModule, DropDownListComponent, ButtonsModule, ButtonComponent, IndicatorsModule, LoaderComponent, IconsModule, SVGIconComponent], styles: ['\n.org-context-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  direction: rtl;\n  padding: 7px 20px;\n  background: var(--sf-bg);\n  border-bottom: 1px solid var(--sf-border);\n  font-size: 0.8rem;\n}\n.org-context-bar[_ngcontent-%COMP%]   .ctx-label[_ngcontent-%COMP%] {\n  color: var(--sf-text-muted);\n}\n.org-context-bar[_ngcontent-%COMP%]   .ctx-org[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--sf-text);\n}\n.org-context-bar[_ngcontent-%COMP%]   .ctx-sep[_ngcontent-%COMP%] {\n  color: var(--sf-text-muted);\n}\n.org-context-bar[_ngcontent-%COMP%]   .ctx-user[_ngcontent-%COMP%] {\n  color: var(--sf-text-secondary);\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.76rem;\n}\n.dialog-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n}\n.user-dialog-body[_ngcontent-%COMP%] {\n  display: flex;\n  direction: rtl;\n  gap: 0;\n  min-height: 340px;\n}\n.user-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 12px 8px;\n  width: 160px;\n  flex-shrink: 0;\n  border-inline-end: 1px solid var(--sf-border);\n  background: var(--sf-bg-card);\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  border: none;\n  border-radius: 8px;\n  background: transparent;\n  color: var(--sf-text-secondary);\n  font-size: 0.83rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  text-align: right;\n  direction: rtl;\n  transition: background 0.15s, color 0.15s;\n}\n.nav-item[_ngcontent-%COMP%]   kendo-svg-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: var(--sf-primary-light, #eff6ff);\n  color: var(--sf-primary);\n  font-weight: 600;\n}\n.user-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 20px 24px;\n  direction: rtl;\n  overflow-y: auto;\n}\n.form-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0 0 4px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid var(--sf-border);\n}\n.settings-placeholder[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 40px 20px;\n  color: var(--sf-text-muted);\n}\n.settings-placeholder[_ngcontent-%COMP%]   .placeholder-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 12px;\n}\n.settings-placeholder[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--sf-text-secondary);\n  margin: 0 0 8px;\n}\n.settings-placeholder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  line-height: 1.5;\n  margin: 0;\n}\n.role-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 10px 14px;\n  background: #eff6ff;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  color: #1e40af;\n  direction: rtl;\n}\n.role-info[_ngcontent-%COMP%]   .role-info-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  background: #3b82f6;\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.7rem;\n  font-weight: 700;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.user-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 4px 0;\n  direction: rtl;\n}\n.error-banner[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  color: #dc2626;\n  padding: 10px 14px;\n  font-size: 0.85rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-row-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  direction: rtl;\n}\n.field-label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  text-align: right;\n}\n.field-label[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: var(--sf-danger);\n  margin-right: 2px;\n}\n.field-label[_ngcontent-%COMP%]   .field-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 400;\n  color: var(--sf-text-muted);\n}\n.field-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.field-wrap[_ngcontent-%COMP%]   kendo-textbox[_ngcontent-%COMP%], \n.field-wrap[_ngcontent-%COMP%]   kendo-dropdownlist[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.err-msg[_ngcontent-%COMP%] {\n  color: var(--sf-danger);\n  font-size: 0.78rem;\n}\n.seg-ctrl[_ngcontent-%COMP%] {\n  display: inline-flex;\n  direction: rtl;\n  align-self: flex-start;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.seg-btn[_ngcontent-%COMP%] {\n  padding: 7px 20px;\n  font-size: 0.82rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  border: none;\n  background: var(--sf-bg);\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.seg-btn[_ngcontent-%COMP%]    + .seg-btn[_ngcontent-%COMP%] {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.seg-btn[_ngcontent-%COMP%]:hover:not(.seg-on):not(.seg-off) {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.seg-btn.seg-on[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: #fff;\n  font-weight: 600;\n}\n.seg-btn.seg-off[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #fff;\n  font-weight: 600;\n}\n.ltr-wrap[_ngcontent-%COMP%] {\n  direction: ltr;\n  display: inline-flex;\n}\n.empty-org-units[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 14px;\n  background: var(--sf-bg);\n  border: 1px dashed var(--sf-border);\n  border-radius: 8px;\n  color: var(--sf-text-secondary);\n  font-size: 0.83rem;\n}\n.empty-org-units[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--sf-text-muted);\n}\n.org-unit-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  max-height: 260px;\n  overflow-y: auto;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 6px;\n  background: var(--sf-bg-card);\n}\n.org-unit-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-radius: 6px;\n  cursor: pointer;\n  direction: rtl;\n  transition: background 0.12s;\n}\n.org-unit-item[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n}\n.org-unit-item.selected[_ngcontent-%COMP%] {\n  background: var(--sf-primary-light, #eff6ff);\n  color: var(--sf-primary);\n}\n.org-unit-item.selected[_ngcontent-%COMP%]   .ou-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.org-unit-item.has-parent[_ngcontent-%COMP%] {\n  padding-right: 28px;\n}\n.org-unit-item[_ngcontent-%COMP%]   .ou-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  flex-shrink: 0;\n  width: 20px;\n  text-align: center;\n}\n.org-unit-item[_ngcontent-%COMP%]   .ou-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.85rem;\n}\n.org-unit-item[_ngcontent-%COMP%]   .ou-type[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--sf-text-muted);\n  background: var(--sf-bg);\n  padding: 1px 6px;\n  border-radius: 4px;\n  border: 1px solid var(--sf-border);\n}\n.org-selected-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  direction: rtl;\n  font-size: 0.83rem;\n  color: var(--sf-text-secondary);\n  padding: 8px 12px;\n  background: var(--sf-bg);\n  border-radius: 8px;\n  border: 1px solid var(--sf-border);\n}\n.org-selected-info[_ngcontent-%COMP%]   .org-selected-label[_ngcontent-%COMP%] {\n  color: var(--sf-text-muted);\n}\n.org-selected-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--sf-primary);\n}\n[_nghost-%COMP%]     .k-dialog {\n  border-radius: 14px !important;\n  overflow: hidden;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.16), 0 2px 8px rgba(0, 0, 0, 0.08) !important;\n  border: 1px solid var(--sf-border) !important;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n[_nghost-%COMP%]     .k-dialog-titlebar {\n  background: var(--sf-bg-card) !important;\n  border-bottom: 1px solid var(--sf-border) !important;\n  padding: 14px 20px !important;\n  direction: rtl;\n}\n[_nghost-%COMP%]     .k-dialog-title {\n  font-size: 1.05rem !important;\n  font-weight: 700 !important;\n  color: var(--sf-text) !important;\n}\n[_nghost-%COMP%]     .k-dialog-close {\n  color: var(--sf-text-secondary) !important;\n}\n[_nghost-%COMP%]     .k-dialog-close:hover {\n  color: var(--sf-text) !important;\n  background: var(--sf-bg-hover) !important;\n}\n[_nghost-%COMP%]     .k-dialog-content {\n  padding: 0 !important;\n  background: var(--sf-bg) !important;\n  direction: rtl;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .error-banner {\n  margin: 16px 20px 0;\n}\n[_nghost-%COMP%]     .k-dialog-actions {\n  background: var(--sf-bg-card) !important;\n  border-top: 1px solid var(--sf-border) !important;\n  padding: 12px 20px !important;\n  direction: rtl !important;\n}\n[_nghost-%COMP%]     .k-textbox {\n  background: var(--sf-bg-card);\n  border-color: var(--sf-border);\n  border-radius: 8px;\n  direction: rtl !important;\n}\n[_nghost-%COMP%]     .k-textbox:focus-within {\n  border-color: var(--sf-border-focus);\n  box-shadow: 0 0 0 3px rgba(13, 71, 255, 0.1);\n}\n[_nghost-%COMP%]     .k-input-inner {\n  direction: rtl !important;\n  text-align: right !important;\n}\n[_nghost-%COMP%]     .k-dropdownlist {\n  background: var(--sf-bg-card);\n  border-color: var(--sf-border);\n  border-radius: 8px;\n  direction: rtl;\n}\n[_nghost-%COMP%]     .k-dropdownlist .k-input-value-text {\n  text-align: right;\n}\n[_nghost-%COMP%]     .k-switch {\n  direction: ltr !important;\n}\n[_nghost-%COMP%]     .k-switch-on .k-switch-track {\n  background: var(--sf-success);\n}\n.dialog-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  direction: rtl;\n}\n.btn-save[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #f97316 !important;\n  color: #fff !important;\n  border: none !important;\n  border-radius: 9px !important;\n  padding: 9px 22px !important;\n  font-size: 0.875rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.3);\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #ea6c0a !important;\n  box-shadow: 0 4px 14px rgba(249, 115, 22, 0.4);\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.btn-save[_ngcontent-%COMP%]   kendo-loader[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  border-color: var(--sf-border) !important;\n  color: var(--sf-text-secondary) !important;\n}\n/*# sourceMappingURL=user-dialog.component.css.map */'] });
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
      IndicatorsModule,
      IconsModule
    ], template: `<kendo-dialog [title]="title" [width]="760" [minWidth]="580" (close)="close()">

  @if (isEdit && user?.OrgName) {
    <div class="org-context-bar">
      <span class="ctx-label">\u05D0\u05E8\u05D2\u05D5\u05DF:</span>
      <strong class="ctx-org">{{ user!.OrgName }}</strong>
      <span class="ctx-sep">\xB7</span>
      <span class="ctx-user">&#64;{{ user!.Username }}</span>
    </div>
  }

  @if (loading()) {
    <div class="dialog-loading">
      <kendo-loader type="converging-spinner" size="medium" />
    </div>
  } @else {

    @if (errorMsg) {
      <div class="error-banner">{{ errorMsg }}</div>
    }

    <div class="user-dialog-body">

      <!-- \u2500\u2500 Sidebar Nav \u2500\u2500 -->
      <nav class="user-nav">
        @for (g of groups; track g.id) {
          <button class="nav-item" [class.active]="activeGroup() === g.id"
                  type="button" (click)="activeGroup.set(g.id)">
            <kendo-svg-icon [icon]="g.icon" />
            {{ g.text }}
          </button>
        }
      </nav>

      <!-- \u2500\u2500 Content \u2500\u2500 -->
      <div class="user-content">

        <form [formGroup]="form" novalidate>

          <!-- \u2500\u2500 Group: \u05E4\u05E8\u05D8\u05D9\u05DD \u2500\u2500 -->
          @if (activeGroup() === 'details') {
            <div class="form-section">
              <h3 class="section-title">\u05E4\u05E8\u05D8\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05D9\u05DD</h3>

              <!-- \u05D0\u05E8\u05D2\u05D5\u05DF \u2014 platform + \u05D9\u05E6\u05D9\u05E8\u05D4 \u05D1\u05DC\u05D1\u05D3 -->
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

              <!-- \u05E9\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9 \u2014 \u05D9\u05E6\u05D9\u05E8\u05D4 \u05D1\u05DC\u05D1\u05D3 -->
              @if (!isEdit) {
                <div class="form-row">
                  <label class="field-label">\u05E9\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9 <span class="req">*</span></label>
                  <div class="field-wrap">
                    <kendo-textbox formControlName="username" placeholder="\u05D0\u05D5\u05EA\u05D9\u05D5\u05EA \u05DC\u05D8\u05D9\u05E0\u05D9\u05D5\u05EA, \u05E1\u05E4\u05E8\u05D5\u05EA, \u05E0\u05E7\u05D5\u05D3\u05D4, \u05DE\u05E7\u05E3" />
                    @if (usernameErr) {
                      <small class="err-msg">\u05D0\u05D5\u05EA\u05D9\u05D5\u05EA \u05DC\u05D8\u05D9\u05E0\u05D9\u05D5\u05EA / \u05E1\u05E4\u05E8\u05D5\u05EA / \u05E0\u05E7\u05D5\u05D3\u05D4 / \u05DE\u05E7\u05E3 \u05D1\u05DC\u05D1\u05D3</small>
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

              <!-- \u05D8\u05DC\u05E4\u05D5\u05DF -->
              <div class="form-row">
                <label class="field-label">\u05D8\u05DC\u05E4\u05D5\u05DF</label>
                <div class="field-wrap">
                  <kendo-textbox formControlName="phone" placeholder="050-0000000" />
                </div>
              </div>

              <!-- \u05EA\u05E4\u05E7\u05D9\u05D3 / \u05DB\u05D5\u05EA\u05E8\u05EA -->
              <div class="form-row">
                <label class="field-label">\u05DB\u05D5\u05EA\u05E8\u05EA \u05EA\u05E4\u05E7\u05D9\u05D3</label>
                <div class="field-wrap">
                  <kendo-textbox formControlName="jobTitle" placeholder="\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: \u05DE\u05E4\u05EA\u05D7 Full Stack" />
                </div>
              </div>

              <!-- \u05D4\u05E2\u05E8\u05D5\u05EA -->
              <div class="form-row">
                <label class="field-label">\u05D4\u05E2\u05E8\u05D5\u05EA</label>
                <div class="field-wrap">
                  <kendo-textarea formControlName="notes" placeholder="\u05D4\u05E2\u05E8\u05D5\u05EA \u05E4\u05E0\u05D9\u05DE\u05D9\u05D5\u05EA..." [rows]="3" />
                </div>
              </div>

              <!-- \u05E1\u05D9\u05E1\u05DE\u05D4 \u2014 \u05D9\u05E6\u05D9\u05E8\u05D4 \u05D1\u05DC\u05D1\u05D3 -->
              @if (!isEdit) {
                <div class="form-row">
                  <label class="field-label">\u05E1\u05D9\u05E1\u05DE\u05D4 <span class="req">*</span></label>
                  <div class="field-wrap">
                    <kendo-textbox formControlName="password" placeholder="\u05DC\u05E4\u05D7\u05D5\u05EA 6 \u05EA\u05D5\u05D5\u05D9\u05DD" [type]="'password'" />
                    @if (passwordErr) { <small class="err-msg">\u05DC\u05E4\u05D7\u05D5\u05EA 6 \u05EA\u05D5\u05D5\u05D9\u05DD</small> }
                  </div>
                </div>
              }
            </div>
          }

          <!-- \u2500\u2500 Group: \u05EA\u05E4\u05E7\u05D9\u05D3 \u05D5\u05D0\u05D1\u05D8\u05D7\u05D4 \u2500\u2500 -->
          @if (activeGroup() === 'role') {
            <div class="form-section">
              <h3 class="section-title">\u05EA\u05E4\u05E7\u05D9\u05D3 \u05D5\u05D0\u05D1\u05D8\u05D7\u05D4</h3>

              <div class="form-row">
                <label class="field-label">\u05EA\u05E4\u05E7\u05D9\u05D3 \u05DE\u05E2\u05E8\u05DB\u05EA <span class="req">*</span></label>
                <div class="field-wrap">
                  <kendo-dropdownlist
                    formControlName="roleId"
                    [data]="roles"
                    textField="RoleName"
                    valueField="RoleID"
                    [valuePrimitive]="true" />
                  @if (roleErr) { <small class="err-msg">\u05D9\u05E9 \u05DC\u05D1\u05D7\u05D5\u05E8 \u05EA\u05E4\u05E7\u05D9\u05D3</small> }
                </div>
              </div>

              @if (roles.length > 0) {
                <div class="role-info">
                  <div class="role-info-icon">i</div>
                  <span>\u05D4\u05EA\u05E4\u05E7\u05D9\u05D3 \u05E7\u05D5\u05D1\u05E2 \u05D0\u05EA \u05D4\u05D4\u05E8\u05E9\u05D0\u05D5\u05EA \u05E9\u05DC \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9 \u05D1\u05DB\u05DC \u05DE\u05E1\u05DB\u05D9 \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA</span>
                </div>
              }

              <!-- \u05D0\u05D9\u05E4\u05D5\u05E1 \u05E1\u05D9\u05E1\u05DE\u05D4 \u2014 \u05E2\u05E8\u05D9\u05DB\u05D4 \u05D1\u05DC\u05D1\u05D3 -->
              @if (isEdit) {
                <div class="form-row">
                  <label class="field-label">\u05E1\u05D9\u05E1\u05DE\u05D4 \u05D7\u05D3\u05E9\u05D4 <span class="field-hint">(\u05D0\u05D5\u05E4\u05E6\u05D9\u05D5\u05E0\u05DC\u05D9)</span></label>
                  <div class="field-wrap">
                    <kendo-textbox formControlName="newPassword" placeholder="\u05D4\u05E9\u05D0\u05E8 \u05E8\u05D9\u05E7 \u05DC\u05E9\u05DE\u05D9\u05E8\u05EA \u05D4\u05E1\u05D9\u05E1\u05DE\u05D4 \u05D4\u05E7\u05D9\u05D9\u05DE\u05EA" [type]="'password'" />
                    @if (newPasswordErr) { <small class="err-msg">\u05DC\u05E4\u05D7\u05D5\u05EA 6 \u05EA\u05D5\u05D5\u05D9\u05DD</small> }
                  </div>
                </div>
              }

              <!-- \u05E1\u05D8\u05D8\u05D5\u05E1 \u2014 \u05E2\u05E8\u05D9\u05DB\u05D4 \u05D1\u05DC\u05D1\u05D3 -->
              @if (isEdit) {
                <div class="form-row">
                  <label class="field-label">\u05E1\u05D8\u05D8\u05D5\u05E1 \u05D7\u05E9\u05D1\u05D5\u05DF</label>
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
            </div>
          }

          <!-- \u2500\u2500 Group: \u05E9\u05D9\u05D5\u05DA \u05D0\u05E8\u05D2\u05D5\u05E0\u05D9 \u2500\u2500 -->
          @if (activeGroup() === 'org') {
            <div class="form-section">
              <h3 class="section-title">\u05E9\u05D9\u05D5\u05DA \u05D0\u05E8\u05D2\u05D5\u05E0\u05D9</h3>

              <div class="form-row">
                <label class="field-label">\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05EA</label>
                <div class="field-wrap">
                  @if (orgUnits.length === 0) {
                    <div class="empty-org-units">
                      <span>\u05DC\u05D0 \u05D4\u05D5\u05D2\u05D3\u05E8\u05D5 \u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05D5\u05EA \u05D1\u05D0\u05E8\u05D2\u05D5\u05DF \u05D6\u05D4.</span>
                      <small>\u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05D2\u05D3\u05D9\u05E8 \u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05D5\u05EA \u05EA\u05D7\u05EA: \u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u2192 \u05DE\u05D1\u05E0\u05D4 \u05D0\u05E8\u05D2\u05D5\u05E0\u05D9</small>
                    </div>
                  } @else {
                    <div class="org-unit-list">
                      <div class="org-unit-item" [class.selected]="!form.get('primaryOrgUnitId')?.value"
                           (click)="selectOrgUnit(null)">
                        <span class="ou-icon">\u2014</span>
                        <span class="ou-name">\u05DC\u05DC\u05D0 \u05E9\u05D9\u05D5\u05DA</span>
                      </div>
                      @for (unit of orgUnits; track unit.OrgUnitID) {
                        <div class="org-unit-item"
                             [class.selected]="form.get('primaryOrgUnitId')?.value === unit.OrgUnitID"
                             [class.has-parent]="!!unit.ParentOrgUnitID"
                             (click)="selectOrgUnit(unit)">
                          <span class="ou-icon">
                            @switch (unit.UnitType) {
                              @case ('COMPANY')    { \u{1F3E2} }
                              @case ('DIVISION')   { \u{1F537} }
                              @case ('DEPARTMENT') { \u{1F3EC} }
                              @case ('BRANCH')     { \u{1F33F} }
                              @case ('TEAM')       { \u{1F465} }
                              @default             { \u{1F4CC} }
                            }
                          </span>
                          <span class="ou-name">{{ unit.UnitName }}</span>
                          <span class="ou-type">{{ unit.UnitType }}</span>
                        </div>
                      }
                    </div>
                  }
                </div>
              </div>

              @if (form.get('primaryOrgUnitId')?.value) {
                <div class="org-selected-info">
                  <span class="org-selected-label">\u05D9\u05D7\u05D9\u05D3\u05D4 \u05E0\u05D1\u05D7\u05E8\u05EA:</span>
                  <strong>{{ selectedOrgUnitName }}</strong>
                </div>
              }
            </div>
          }

          <!-- \u2500\u2500 Group: \u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u2500\u2500 -->
          @if (activeGroup() === 'settings') {
            <div class="form-section settings-placeholder">
              <div class="placeholder-icon">\u2699\uFE0F</div>
              <h3>\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05DE\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA</h3>
              <p>\u05E9\u05E2\u05D5\u05EA \u05DB\u05E0\u05D9\u05E1\u05D4, IP Whitelist, \u05DB\u05DC\u05DC\u05D9 \u05E1\u05D9\u05E1\u05DE\u05D4 \u05D5\u05E2\u05D5\u05D3 \u2014 \u05D9\u05EA\u05D5\u05D5\u05E1\u05E4\u05D5 \u05D1\u05E9\u05DC\u05D1 \u05D4\u05D1\u05D0</p>
            </div>
          }

        </form>
      </div>

    </div>
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
`, styles: ['/* src/app/features/users/user-dialog/user-dialog.component.scss */\n.org-context-bar {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  direction: rtl;\n  padding: 7px 20px;\n  background: var(--sf-bg);\n  border-bottom: 1px solid var(--sf-border);\n  font-size: 0.8rem;\n}\n.org-context-bar .ctx-label {\n  color: var(--sf-text-muted);\n}\n.org-context-bar .ctx-org {\n  font-weight: 700;\n  color: var(--sf-text);\n}\n.org-context-bar .ctx-sep {\n  color: var(--sf-text-muted);\n}\n.org-context-bar .ctx-user {\n  color: var(--sf-text-secondary);\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.76rem;\n}\n.dialog-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n}\n.user-dialog-body {\n  display: flex;\n  direction: rtl;\n  gap: 0;\n  min-height: 340px;\n}\n.user-nav {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 12px 8px;\n  width: 160px;\n  flex-shrink: 0;\n  border-inline-end: 1px solid var(--sf-border);\n  background: var(--sf-bg-card);\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  border: none;\n  border-radius: 8px;\n  background: transparent;\n  color: var(--sf-text-secondary);\n  font-size: 0.83rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  text-align: right;\n  direction: rtl;\n  transition: background 0.15s, color 0.15s;\n}\n.nav-item kendo-svg-icon {\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.nav-item:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.nav-item.active {\n  background: var(--sf-primary-light, #eff6ff);\n  color: var(--sf-primary);\n  font-weight: 600;\n}\n.user-content {\n  flex: 1;\n  padding: 20px 24px;\n  direction: rtl;\n  overflow-y: auto;\n}\n.form-section {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.section-title {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0 0 4px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid var(--sf-border);\n}\n.settings-placeholder {\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 40px 20px;\n  color: var(--sf-text-muted);\n}\n.settings-placeholder .placeholder-icon {\n  font-size: 2.5rem;\n  margin-bottom: 12px;\n}\n.settings-placeholder h3 {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--sf-text-secondary);\n  margin: 0 0 8px;\n}\n.settings-placeholder p {\n  font-size: 0.82rem;\n  line-height: 1.5;\n  margin: 0;\n}\n.role-info {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 10px 14px;\n  background: #eff6ff;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  color: #1e40af;\n  direction: rtl;\n}\n.role-info .role-info-icon {\n  width: 18px;\n  height: 18px;\n  background: #3b82f6;\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.7rem;\n  font-weight: 700;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.user-form {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 4px 0;\n  direction: rtl;\n}\n.error-banner {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  color: #dc2626;\n  padding: 10px 14px;\n  font-size: 0.85rem;\n}\n.form-row {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-row-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  direction: rtl;\n}\n.field-label {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  text-align: right;\n}\n.field-label .req {\n  color: var(--sf-danger);\n  margin-right: 2px;\n}\n.field-label .field-hint {\n  font-size: 0.75rem;\n  font-weight: 400;\n  color: var(--sf-text-muted);\n}\n.field-wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.field-wrap kendo-textbox,\n.field-wrap kendo-dropdownlist {\n  width: 100%;\n}\n.full-width {\n  width: 100%;\n}\n.err-msg {\n  color: var(--sf-danger);\n  font-size: 0.78rem;\n}\n.seg-ctrl {\n  display: inline-flex;\n  direction: rtl;\n  align-self: flex-start;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.seg-btn {\n  padding: 7px 20px;\n  font-size: 0.82rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  border: none;\n  background: var(--sf-bg);\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.seg-btn + .seg-btn {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.seg-btn:hover:not(.seg-on):not(.seg-off) {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.seg-btn.seg-on {\n  background: #10b981;\n  color: #fff;\n  font-weight: 600;\n}\n.seg-btn.seg-off {\n  background: #ef4444;\n  color: #fff;\n  font-weight: 600;\n}\n.ltr-wrap {\n  direction: ltr;\n  display: inline-flex;\n}\n.empty-org-units {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 14px;\n  background: var(--sf-bg);\n  border: 1px dashed var(--sf-border);\n  border-radius: 8px;\n  color: var(--sf-text-secondary);\n  font-size: 0.83rem;\n}\n.empty-org-units small {\n  font-size: 0.75rem;\n  color: var(--sf-text-muted);\n}\n.org-unit-list {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  max-height: 260px;\n  overflow-y: auto;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 6px;\n  background: var(--sf-bg-card);\n}\n.org-unit-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-radius: 6px;\n  cursor: pointer;\n  direction: rtl;\n  transition: background 0.12s;\n}\n.org-unit-item:hover {\n  background: var(--sf-bg-hover);\n}\n.org-unit-item.selected {\n  background: var(--sf-primary-light, #eff6ff);\n  color: var(--sf-primary);\n}\n.org-unit-item.selected .ou-name {\n  font-weight: 600;\n}\n.org-unit-item.has-parent {\n  padding-right: 28px;\n}\n.org-unit-item .ou-icon {\n  font-size: 0.9rem;\n  flex-shrink: 0;\n  width: 20px;\n  text-align: center;\n}\n.org-unit-item .ou-name {\n  flex: 1;\n  font-size: 0.85rem;\n}\n.org-unit-item .ou-type {\n  font-size: 0.7rem;\n  color: var(--sf-text-muted);\n  background: var(--sf-bg);\n  padding: 1px 6px;\n  border-radius: 4px;\n  border: 1px solid var(--sf-border);\n}\n.org-selected-info {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  direction: rtl;\n  font-size: 0.83rem;\n  color: var(--sf-text-secondary);\n  padding: 8px 12px;\n  background: var(--sf-bg);\n  border-radius: 8px;\n  border: 1px solid var(--sf-border);\n}\n.org-selected-info .org-selected-label {\n  color: var(--sf-text-muted);\n}\n.org-selected-info strong {\n  color: var(--sf-primary);\n}\n:host ::ng-deep .k-dialog {\n  border-radius: 14px !important;\n  overflow: hidden;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.16), 0 2px 8px rgba(0, 0, 0, 0.08) !important;\n  border: 1px solid var(--sf-border) !important;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n:host ::ng-deep .k-dialog-titlebar {\n  background: var(--sf-bg-card) !important;\n  border-bottom: 1px solid var(--sf-border) !important;\n  padding: 14px 20px !important;\n  direction: rtl;\n}\n:host ::ng-deep .k-dialog-title {\n  font-size: 1.05rem !important;\n  font-weight: 700 !important;\n  color: var(--sf-text) !important;\n}\n:host ::ng-deep .k-dialog-close {\n  color: var(--sf-text-secondary) !important;\n}\n:host ::ng-deep .k-dialog-close:hover {\n  color: var(--sf-text) !important;\n  background: var(--sf-bg-hover) !important;\n}\n:host ::ng-deep .k-dialog-content {\n  padding: 0 !important;\n  background: var(--sf-bg) !important;\n  direction: rtl;\n  overflow: hidden;\n}\n:host ::ng-deep .error-banner {\n  margin: 16px 20px 0;\n}\n:host ::ng-deep .k-dialog-actions {\n  background: var(--sf-bg-card) !important;\n  border-top: 1px solid var(--sf-border) !important;\n  padding: 12px 20px !important;\n  direction: rtl !important;\n}\n:host ::ng-deep .k-textbox {\n  background: var(--sf-bg-card);\n  border-color: var(--sf-border);\n  border-radius: 8px;\n  direction: rtl !important;\n}\n:host ::ng-deep .k-textbox:focus-within {\n  border-color: var(--sf-border-focus);\n  box-shadow: 0 0 0 3px rgba(13, 71, 255, 0.1);\n}\n:host ::ng-deep .k-input-inner {\n  direction: rtl !important;\n  text-align: right !important;\n}\n:host ::ng-deep .k-dropdownlist {\n  background: var(--sf-bg-card);\n  border-color: var(--sf-border);\n  border-radius: 8px;\n  direction: rtl;\n}\n:host ::ng-deep .k-dropdownlist .k-input-value-text {\n  text-align: right;\n}\n:host ::ng-deep .k-switch {\n  direction: ltr !important;\n}\n:host ::ng-deep .k-switch-on .k-switch-track {\n  background: var(--sf-success);\n}\n.dialog-footer {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  direction: rtl;\n}\n.btn-save {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #f97316 !important;\n  color: #fff !important;\n  border: none !important;\n  border-radius: 9px !important;\n  padding: 9px 22px !important;\n  font-size: 0.875rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.3);\n}\n.btn-save:hover:not(:disabled) {\n  background: #ea6c0a !important;\n  box-shadow: 0 4px 14px rgba(249, 115, 22, 0.4);\n}\n.btn-save:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.btn-save kendo-loader {\n  display: inline-flex;\n}\n.btn-cancel {\n  border-color: var(--sf-border) !important;\n  color: var(--sf-text-secondary) !important;\n}\n/*# sourceMappingURL=user-dialog.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: HttpClient }, { type: UserService }, { type: OrganizationService }], { user: [{
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserDialogComponent, { className: "UserDialogComponent", filePath: "src/app/features/users/user-dialog/user-dialog.component.ts", lineNumber: 34 });
})();

// src/app/features/users/users.component.ts
var _c02 = (a0, a1) => ({ data: a0, total: a1 });
var _c1 = () => [25, 50, 100];
var _c2 = (a0) => ({ buttonCount: 5, info: true, type: "numeric", pageSizes: a0 });
var _c3 = () => ({ mode: "single", allowUnsort: false });
var _c4 = () => ({ mode: "multiple", checkboxOnly: true });
function UsersComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function UsersComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAdd());
    });
    \u0275\u0275text(1, " \u05DE\u05E9\u05EA\u05DE\u05E9 \u05D7\u05D3\u05E9 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("svgIcon", ctx_r1.addIcon);
  }
}
function UsersComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "mat-spinner", 18);
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function UsersComponent_Conditional_21_ng_template_1_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "span", 46);
    \u0275\u0275text(2, "\u05E1\u05D9\u05E1\u05DE\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 50);
    \u0275\u0275text(4, "\u05E0\u05D3\u05E8\u05E9 \u05E9\u05D9\u05E0\u05D5\u05D9");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_Conditional_21_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "div", 43);
    \u0275\u0275text(3, "\u05E4\u05E8\u05D8\u05D9 \u05DE\u05E9\u05EA\u05DE\u05E9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 44)(5, "div", 45)(6, "span", 46);
    \u0275\u0275text(7, "\u05E9\u05DD \u05DE\u05DC\u05D0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 47);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 45)(11, "span", 46);
    \u0275\u0275text(12, "\u05E9\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 48);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 45)(16, "span", 46);
    \u0275\u0275text(17, '\u05D3\u05D5\u05D0"\u05DC');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 47);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 42)(21, "div", 43);
    \u0275\u0275text(22, "\u05EA\u05E4\u05E7\u05D9\u05D3 \u05D5\u05D0\u05E8\u05D2\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 44)(24, "div", 45)(25, "span", 46);
    \u0275\u0275text(26, "\u05EA\u05E4\u05E7\u05D9\u05D3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 47);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 45)(30, "span", 46);
    \u0275\u0275text(31, "\u05D0\u05E8\u05D2\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 47);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 45)(35, "span", 46);
    \u0275\u0275text(36, "\u05DE\u05D7\u05DC\u05E7\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 47);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 42)(40, "div", 43);
    \u0275\u0275text(41, "\u05E4\u05E2\u05D9\u05DC\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 44)(43, "div", 45)(44, "span", 46);
    \u0275\u0275text(45, "\u05DE\u05E6\u05D1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 49);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 45)(49, "span", 46);
    \u0275\u0275text(50, "\u05D4\u05E6\u05D8\u05E8\u05E3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 47);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 45)(54, "span", 46);
    \u0275\u0275text(55, "\u05DB\u05E0\u05D9\u05E1\u05D4 \u05D0\u05D7\u05E8\u05D5\u05E0\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 47);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(58, UsersComponent_Conditional_21_ng_template_1_Conditional_58_Template, 5, 0, "div", 45);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(u_r4.FullName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(u_r4.Username);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(u_r4.Email);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(u_r4.RoleName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(u_r4.OrgName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(u_r4.DeptName || "\u2014");
    \u0275\u0275advance(8);
    \u0275\u0275classProp("badge-active", u_r4.IsActive)("badge-inactive", !u_r4.IsActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r4.IsActive ? "\u05E4\u05E2\u05D9\u05DC" : "\u05DE\u05D5\u05E9\u05D4\u05D4");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(u_r4.CreatedAt));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatLastLogin(u_r4.LastLoginAt));
    \u0275\u0275advance();
    \u0275\u0275conditional(u_r4.MustChangePass ? 58 : -1);
  }
}
function UsersComponent_Conditional_21_Conditional_15_ng_template_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 52);
  }
  if (rf & 2) {
    const u_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", u_r5.LogoUrl, \u0275\u0275sanitizeUrl)("alt", u_r5.OrgName);
  }
}
function UsersComponent_Conditional_21_Conditional_15_ng_template_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r5.OrgName?.charAt(0));
  }
}
function UsersComponent_Conditional_21_Conditional_15_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275conditionalCreate(1, UsersComponent_Conditional_21_Conditional_15_ng_template_1_Conditional_1_Template, 1, 2, "img", 52)(2, UsersComponent_Conditional_21_Conditional_15_ng_template_1_Conditional_2_Template, 2, 1, "div", 53);
    \u0275\u0275elementStart(3, "div")(4, "div", 54);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 55);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(u_r5.LogoUrl ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(u_r5.OrgName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r5.TenantCode);
  }
}
function UsersComponent_Conditional_21_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "kendo-grid-column", 26);
    \u0275\u0275template(1, UsersComponent_Conditional_21_Conditional_15_ng_template_1_Template, 8, 3, "ng-template", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("width", 200);
  }
}
function UsersComponent_Conditional_21_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 58)(4, "span", 59);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 60);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.avatarColor(u_r6.RoleCode));
    \u0275\u0275classProp("avatar-inactive", !u_r6.IsActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r6.FullName ? u_r6.FullName.charAt(0) : "?", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("name-inactive", !u_r6.IsActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r6.FullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("@", u_r6.Username);
  }
}
function UsersComponent_Conditional_21_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.roleClass(u_r7.RoleCode));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r7.RoleName);
  }
}
function UsersComponent_Conditional_21_ng_template_21_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "mat-icon", 64);
    \u0275\u0275text(2, "business");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(u_r8.DeptName);
  }
}
function UsersComponent_Conditional_21_ng_template_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Conditional_21_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, UsersComponent_Conditional_21_ng_template_21_Conditional_0_Template, 5, 1, "div", 62)(1, UsersComponent_Conditional_21_ng_template_21_Conditional_1_Template, 2, 0, "span", 63);
  }
  if (rf & 2) {
    const u_r8 = ctx.$implicit;
    \u0275\u0275conditional(u_r8.DeptName ? 0 : 1);
  }
}
function UsersComponent_Conditional_21_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatDate(u_r9.CreatedAt));
  }
}
function UsersComponent_Conditional_21_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.authLevelLabel(u_r10.RoleCode).cls);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.authLevelLabel(u_r10.RoleCode).label, " ");
  }
}
function UsersComponent_Conditional_21_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "span", 68);
    \u0275\u0275element(2, "span", 69);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("emp-active", u_r11.IsActive)("emp-inactive", !u_r11.IsActive);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", u_r11.IsActive ? "\u05E4\u05E2\u05D9\u05DC" : "\u05DE\u05D5\u05E9\u05D4\u05D4", " ");
  }
}
function UsersComponent_Conditional_21_ng_template_29_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function UsersComponent_Conditional_21_ng_template_29_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const u_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleActive(u_r14));
    });
    \u0275\u0275element(1, "i", 72);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("act-lock", u_r14.IsActive)("act-unlock", !u_r14.IsActive);
    \u0275\u0275property("title", u_r14.IsActive ? "\u05D4\u05E9\u05D1\u05EA" : "\u05D4\u05E4\u05E2\u05DC");
    \u0275\u0275advance();
    \u0275\u0275classProp("pi-lock", u_r14.IsActive)("pi-lock-open", !u_r14.IsActive);
  }
}
function UsersComponent_Conditional_21_ng_template_29_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function UsersComponent_Conditional_21_ng_template_29_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const u_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(u_r14));
    });
    \u0275\u0275element(1, "i", 79);
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Conditional_21_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "button", 71);
    \u0275\u0275listener("click", function UsersComponent_Conditional_21_ng_template_29_Template_button_click_1_listener() {
      const ctx_r12 = \u0275\u0275restoreView(_r12);
      const u_r14 = ctx_r12.$implicit;
      const rowIndex_r15 = ctx_r12.rowIndex;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleDetail(u_r14, rowIndex_r15));
    });
    \u0275\u0275element(2, "i", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 73);
    \u0275\u0275listener("click", function UsersComponent_Conditional_21_ng_template_29_Template_button_click_3_listener() {
      const u_r14 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPerms(u_r14));
    });
    \u0275\u0275element(4, "i", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, UsersComponent_Conditional_21_ng_template_29_button_5_Template, 2, 9, "button", 75)(6, UsersComponent_Conditional_21_ng_template_29_button_6_Template, 2, 0, "button", 76);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", ctx_r1.isExpanded(u_r14.UserID));
    \u0275\u0275property("title", ctx_r1.isExpanded(u_r14.UserID) ? "\u05E1\u05D2\u05D5\u05E8" : "\u05E4\u05E8\u05D8\u05D9\u05DD");
    \u0275\u0275advance();
    \u0275\u0275classProp("pi-chevron-down", !ctx_r1.isExpanded(u_r14.UserID))("pi-chevron-up", ctx_r1.isExpanded(u_r14.UserID));
    \u0275\u0275advance(3);
    \u0275\u0275property("appHasPerm", "USERS:UPDATE");
    \u0275\u0275advance();
    \u0275\u0275property("appHasPerm", "USERS:UPDATE");
  }
}
function UsersComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "kendo-grid", 19);
    \u0275\u0275listener("pageChange", function UsersComponent_Conditional_21_Template_kendo_grid_pageChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange($event));
    })("sortChange", function UsersComponent_Conditional_21_Template_kendo_grid_sortChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSortChange($event));
    });
    \u0275\u0275template(1, UsersComponent_Conditional_21_ng_template_1_Template, 59, 14, "ng-template", 20);
    \u0275\u0275element(2, "kendo-grid-pdf", 21);
    \u0275\u0275elementStart(3, "kendo-grid-excel", 22);
    \u0275\u0275element(4, "kendo-excelexport-column", 23)(5, "kendo-excelexport-column", 24)(6, "kendo-excelexport-column", 25)(7, "kendo-excelexport-column", 26)(8, "kendo-excelexport-column", 27)(9, "kendo-excelexport-column", 28)(10, "kendo-excelexport-column", 29)(11, "kendo-excelexport-column", 30)(12, "kendo-excelexport-column", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "kendo-grid-messages", 32)(14, "kendo-grid-checkbox-column", 33);
    \u0275\u0275conditionalCreate(15, UsersComponent_Conditional_21_Conditional_15_Template, 2, 1, "kendo-grid-column", 26);
    \u0275\u0275elementStart(16, "kendo-grid-column", 34);
    \u0275\u0275template(17, UsersComponent_Conditional_21_ng_template_17_Template, 8, 9, "ng-template", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "kendo-grid-column", 36);
    \u0275\u0275template(19, UsersComponent_Conditional_21_ng_template_19_Template, 2, 3, "ng-template", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "kendo-grid-column", 27);
    \u0275\u0275template(21, UsersComponent_Conditional_21_ng_template_21_Template, 2, 1, "ng-template", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "kendo-grid-column", 37);
    \u0275\u0275template(23, UsersComponent_Conditional_21_ng_template_23_Template, 2, 1, "ng-template", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "kendo-grid-column", 38);
    \u0275\u0275template(25, UsersComponent_Conditional_21_ng_template_25_Template, 2, 3, "ng-template", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "kendo-grid-column", 39);
    \u0275\u0275template(27, UsersComponent_Conditional_21_ng_template_27_Template, 4, 5, "ng-template", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "kendo-grid-column", 40);
    \u0275\u0275template(29, UsersComponent_Conditional_21_ng_template_29_Template, 7, 9, "ng-template", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", \u0275\u0275pureFunction2(37, _c02, ctx_r1.pagedData, ctx_r1.gridData.length))("skip", ctx_r1.skip)("pageSize", ctx_r1.pageSize)("pageable", \u0275\u0275pureFunction1(41, _c2, \u0275\u0275pureFunction0(40, _c1)))("sortable", \u0275\u0275pureFunction0(43, _c3))("sort", ctx_r1.sort)("reorderable", true)("resizable", true)("selectable", \u0275\u0275pureFunction0(44, _c4))("columnMenu", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("allPages", true)("landscape", true)("repeatHeaders", true);
    \u0275\u0275advance();
    \u0275\u0275property("fetchData", ctx_r1.allData);
    \u0275\u0275advance();
    \u0275\u0275property("width", 160);
    \u0275\u0275advance();
    \u0275\u0275property("width", 120);
    \u0275\u0275advance();
    \u0275\u0275property("width", 200);
    \u0275\u0275advance();
    \u0275\u0275property("width", 160);
    \u0275\u0275advance();
    \u0275\u0275property("width", 140);
    \u0275\u0275advance();
    \u0275\u0275property("width", 120);
    \u0275\u0275advance();
    \u0275\u0275property("width", 60);
    \u0275\u0275advance();
    \u0275\u0275property("width", 110);
    \u0275\u0275advance();
    \u0275\u0275property("width", 140);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 44)("showSelectAll", true)("columnMenu", false);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isPlatform() ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("minResizableWidth", 160);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 150);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 140);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 145);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 170);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 110);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 130)("sortable", false)("resizable", false)("columnMenu", false);
  }
}
function UsersComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-logic-perms", 80);
    \u0275\u0275listener("closed", function UsersComponent_Conditional_22_Template_app_logic_perms_closed_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePerms());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("entityId", ctx_r1.permsUser.UserID)("entityName", ctx_r1.permsUser.FullName || ctx_r1.permsUser.Username);
  }
}
function UsersComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-user-dialog", 81);
    \u0275\u0275listener("closed", function UsersComponent_Conditional_23_Template_app_user_dialog_closed_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dialogOpen.set(false));
    })("saved", function UsersComponent_Conditional_23_Template_app_user_dialog_saved_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.onSaved();
      return \u0275\u0275resetView(ctx_r1.dialogOpen.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("user", ctx_r1.dialogUser())("isPlatform", ctx_r1.isPlatform());
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
  pageSize = 50;
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
  permsOpen = false;
  permsUser = null;
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
    const filtered = q ? this.users().filter((u) => u.FullName.toLowerCase().includes(q) || u.Username.toLowerCase().includes(q) || u.Email.toLowerCase().includes(q) || (u.OrgName || "").toLowerCase().includes(q) || (u.DeptName || "").toLowerCase().includes(q)) : [...this.users()];
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
  openPerms(u) {
    this.permsUser = u;
    this.permsOpen = true;
  }
  closePerms() {
    this.permsOpen = false;
    this.permsUser = null;
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
  formatDate(dt) {
    if (!dt)
      return "\u2014";
    const d = new Date(dt);
    if (isNaN(d.getTime()) || d.getFullYear() < 2e3)
      return "\u2014";
    return d.toLocaleDateString("he-IL", { day: "2-digit", month: "2-digit", year: "numeric" });
  }
  formatLastLogin(dt) {
    if (!dt)
      return "\u05DE\u05E2\u05D5\u05DC\u05DD \u05DC\u05D0";
    const d = new Date(dt);
    if (isNaN(d.getTime()) || d.getFullYear() < 2e3)
      return "\u05DE\u05E2\u05D5\u05DC\u05DD \u05DC\u05D0";
    return d.toLocaleDateString("he-IL", { day: "2-digit", month: "2-digit", year: "numeric" });
  }
  hasLogin(dt) {
    if (!dt)
      return false;
    return new Date(dt).getFullYear() >= 2e3;
  }
  roleClass(roleCode) {
    if (!roleCode)
      return "badge-gray";
    const c = roleCode.toUpperCase();
    if (c === "PLATFORM_ADMIN")
      return "badge-platform";
    if (c === "SUPER_ADMIN" || c.includes("ADMIN"))
      return "badge-blue";
    if (c.includes("MANAGER"))
      return "badge-purple";
    return "badge-gray";
  }
  authLevelLabel(roleCode) {
    if (!roleCode)
      return { label: "\u2014", cls: "" };
    const c = roleCode.toUpperCase();
    if (c === "PLATFORM_ADMIN")
      return { label: "\u05D2\u05D9\u05E9\u05D4 \u05DC\u05DB\u05DC \u05D4\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4", cls: "auth-full auth-platform" };
    if (c === "SUPER_ADMIN")
      return { label: "\u05D2\u05D9\u05E9\u05D4 \u05DE\u05DC\u05D0\u05D4", cls: "auth-full" };
    if (c.includes("ADMIN"))
      return { label: "\u05D2\u05D9\u05E9\u05D4 \u05DE\u05DC\u05D0\u05D4", cls: "auth-full" };
    if (c.includes("MANAGER"))
      return { label: "\u05E0\u05D9\u05D4\u05D5\u05DC (\u05DE\u05D5\u05D2\u05D1\u05DC)", cls: "auth-mgr" };
    if (c.includes("EMPLOYEE"))
      return { label: "\u05E2\u05D5\u05D1\u05D3", cls: "auth-emp" };
    if (c.includes("READONLY"))
      return { label: "\u05E6\u05E4\u05D9\u05D9\u05D4 \u05D1\u05DC\u05D1\u05D3", cls: "auth-ro" };
    return { label: "\u2014", cls: "" };
  }
  avatarColor(roleCode) {
    if (!roleCode)
      return "";
    const c = roleCode.toUpperCase();
    if (c === "PLATFORM_ADMIN")
      return "av-platform";
    if (c === "SUPER_ADMIN")
      return "av-super";
    if (c.includes("ADMIN"))
      return "av-admin";
    if (c.includes("MANAGER"))
      return "av-manager";
    return "av-default";
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
  }, decls: 24, vars: 9, consts: [[1, "users-page"], [1, "page-header"], [1, "header-titles"], ["kendoButton", "", "themeColor", "primary", 3, "svgIcon", "click", 4, "appHasPerm"], [1, "toolbar"], [1, "search-wrap"], [1, "search-icon"], ["type", "text", "placeholder", "\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DC\u05E4\u05D9 \u05E9\u05DD, \u05DE\u05D9\u05D9\u05DC, \u05DE\u05D7\u05DC\u05E7\u05D4...", 1, "search-input", 3, "input"], [1, "export-btns"], ["kendoButton", "", "fillMode", "outline", 1, "btn-export", "btn-excel", 3, "click", "svgIcon"], ["kendoButton", "", "fillMode", "outline", 1, "btn-export", "btn-pdf", 3, "click", "svgIcon"], [1, "grid-wrap"], [1, "state-box"], [1, "state-box", "error"], ["scrollable", "scrollable", 1, "users-grid", 3, "data", "skip", "pageSize", "pageable", "sortable", "sort", "reorderable", "resizable", "selectable", "columnMenu"], ["entityType", "USER", 3, "entityId", "entityName"], [3, "user", "isPlatform"], ["kendoButton", "", "themeColor", "primary", 3, "click", "svgIcon"], ["diameter", "36"], ["scrollable", "scrollable", 1, "users-grid", 3, "pageChange", "sortChange", "data", "skip", "pageSize", "pageable", "sortable", "sort", "reorderable", "resizable", "selectable", "columnMenu"], ["kendoGridDetailTemplate", ""], ["fileName", "\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD.pdf", "paperSize", "A4", "margin", "1cm", 3, "allPages", "landscape", "repeatHeaders"], ["fileName", "\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD.xlsx", 3, "fetchData"], ["field", "FullName", "title", "\u05E9\u05DD \u05DE\u05DC\u05D0", 3, "width"], ["field", "Username", "title", "\u05E9\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9", 3, "width"], ["field", "Email", "title", '\u05D3\u05D5\u05D0"\u05DC', 3, "width"], ["field", "OrgName", "title", "\u05D0\u05E8\u05D2\u05D5\u05DF", 3, "width"], ["field", "DeptName", "title", "\u05DE\u05D7\u05DC\u05E7\u05D4", 3, "width"], ["field", "RoleName", "title", "\u05EA\u05E4\u05E7\u05D9\u05D3", 3, "width"], ["field", "IsActive", "title", "\u05E4\u05E2\u05D9\u05DC", 3, "width"], ["field", "CreatedAt", "title", "\u05D4\u05E6\u05D8\u05E8\u05E3", 3, "width"], ["field", "LastLoginAt", "title", "\u05DB\u05E0\u05D9\u05E1\u05D4 \u05D0\u05D7\u05E8\u05D5\u05E0\u05D4", 3, "width"], ["pagerItemsPerPage", "\u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3", "pagerOf", "\u05DE\u05EA\u05D5\u05DA", "pagerItems", "\u05E8\u05E9\u05D5\u05DE\u05D5\u05EA", "pagerFirstPage", "\u05E2\u05DE\u05D5\u05D3 \u05E8\u05D0\u05E9\u05D5\u05DF", "pagerLastPage", "\u05E2\u05DE\u05D5\u05D3 \u05D0\u05D7\u05E8\u05D5\u05DF", "pagerPreviousPage", "\u05D4\u05E7\u05D5\u05D3\u05DD", "pagerNextPage", "\u05D4\u05D1\u05D0", "pagerPage", "\u05E2\u05DE\u05D5\u05D3", "pagerPageNumberInputTitle", "\u05DE\u05E1\u05E4\u05E8 \u05E2\u05DE\u05D5\u05D3", "noRecords", "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD", "loading", "\u05D8\u05D5\u05E2\u05DF...", "sortAscending", "\u05DE\u05D9\u05D5\u05DF \u05E2\u05D5\u05DC\u05D4", "sortDescending", "\u05DE\u05D9\u05D5\u05DF \u05D9\u05D5\u05E8\u05D3", "sortedAscending", "\u05DE\u05DE\u05D5\u05D9\u05DF \u05D1\u05E1\u05D3\u05E8 \u05E2\u05D5\u05DC\u05D4", "sortedDescending", "\u05DE\u05DE\u05D5\u05D9\u05DF \u05D1\u05E1\u05D3\u05E8 \u05D9\u05D5\u05E8\u05D3", "selectionCheckboxLabel", "\u05D1\u05D7\u05E8 \u05E9\u05D5\u05E8\u05D4", "selectAllCheckboxLabel", "\u05D1\u05D7\u05E8 \u05D4\u05DB\u05DC", "columnMenuFilter", "\u05E1\u05E0\u05DF", "columnMenuSort", "\u05DE\u05D9\u05D5\u05DF", "columnMenuColumns", "\u05E2\u05DE\u05D5\u05D3\u05D5\u05EA", "columnMenuSortAscending", "\u05E2\u05D5\u05DC\u05D4", "columnMenuSortDescending", "\u05D9\u05D5\u05E8\u05D3"], [3, "width", "showSelectAll", "columnMenu"], ["field", "FullName", "title", "\u05E9\u05DD", 3, "minResizableWidth"], ["kendoGridCellTemplate", ""], ["field", "RoleName", "title", "\u05EA\u05E4\u05E7\u05D9\u05D3 / \u05EA\u05E4\u05E7\u05D9\u05D3", 3, "width"], ["field", "CreatedAt", "title", "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05E6\u05D8\u05E8\u05E4\u05D5\u05EA", 3, "width"], ["field", "RoleCode", "title", "\u05E8\u05DE\u05EA \u05D4\u05E8\u05E9\u05D0\u05D4", 3, "width"], ["field", "IsActive", "title", "\u05E1\u05D8\u05D8\u05D5\u05E1", 3, "width"], ["title", "", 3, "width", "sortable", "resizable", "columnMenu"], [1, "user-detail-card"], [1, "detail-group"], [1, "detail-group-title"], [1, "detail-fields"], [1, "detail-field"], [1, "df-label"], [1, "df-val"], [1, "df-val", "df-mono"], [1, "badge"], [1, "badge", "badge-warn"], [1, "org-tag"], [1, "org-logo", 3, "src", "alt"], [1, "org-avatar"], [1, "org-name-sm"], [1, "org-code"], [1, "user-cell"], [1, "user-avatar"], [1, "user-info"], [1, "user-name"], [1, "user-username"], [1, "role-badge"], [1, "dept-cell"], [1, "no-dept"], [1, "dept-icon"], [1, "date-cell"], [1, "auth-badge"], [1, "status-wrap"], [1, "emp-status-badge"], [1, "status-dot"], [1, "row-actions"], [1, "act-btn", "act-expand", 3, "click", "title"], [1, "pi"], ["title", "\u05D4\u05E8\u05E9\u05D0\u05D5\u05EA \u05DC\u05D5\u05D2\u05D9\u05E7\u05D4", 1, "act-btn", "act-perms", 3, "click"], [1, "pi", "pi-shield"], ["class", "act-btn", 3, "act-lock", "act-unlock", "title", "click", 4, "appHasPerm"], ["class", "act-btn act-edit", "title", "\u05E2\u05E8\u05D5\u05DA", 3, "click", 4, "appHasPerm"], [1, "act-btn", 3, "click", "title"], ["title", "\u05E2\u05E8\u05D5\u05DA", 1, "act-btn", "act-edit", 3, "click"], [1, "pi", "pi-pencil"], ["entityType", "USER", 3, "closed", "entityId", "entityName"], [3, "closed", "saved", "user", "isPlatform"]], template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, UsersComponent_button_7_Template, 2, 1, "button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "mat-icon", 6);
      \u0275\u0275text(11, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "input", 7);
      \u0275\u0275listener("input", function UsersComponent_Template_input_input_12_listener($event) {
        return ctx.onSearch($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 8)(14, "button", 9);
      \u0275\u0275listener("click", function UsersComponent_Template_button_click_14_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275text(15, "Excel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 10);
      \u0275\u0275listener("click", function UsersComponent_Template_button_click_16_listener() {
        return ctx.exportPDF();
      });
      \u0275\u0275text(17, "PDF");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 11);
      \u0275\u0275conditionalCreate(19, UsersComponent_Conditional_19_Template, 2, 0, "div", 12);
      \u0275\u0275conditionalCreate(20, UsersComponent_Conditional_20_Template, 2, 1, "div", 13);
      \u0275\u0275conditionalCreate(21, UsersComponent_Conditional_21_Template, 30, 45, "kendo-grid", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(22, UsersComponent_Conditional_22_Template, 1, 2, "app-logic-perms", 15);
      \u0275\u0275conditionalCreate(23, UsersComponent_Conditional_23_Template, 1, 2, "app-user-dialog", 16);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.users().length, " \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA");
      \u0275\u0275advance();
      \u0275\u0275property("appHasPerm", "USERS:CREATE");
      \u0275\u0275advance(7);
      \u0275\u0275property("svgIcon", ctx.excelIcon);
      \u0275\u0275advance(2);
      \u0275\u0275property("svgIcon", ctx.pdfIcon);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() && ctx.error() ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() && !ctx.error() ? 21 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.permsOpen && ctx.permsUser ? 22 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.dialogOpen() ? 23 : -1);
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
    MatIconModule,
    MatIcon,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    UserDialogComponent,
    HasPermDirective,
    LogicPermsComponent
  ], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.users-page[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  direction: rtl;\n  gap: 16px;\n  margin-bottom: 20px;\n  flex-shrink: 0;\n}\n.header-titles[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0;\n}\n.header-titles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: var(--sf-text-secondary);\n  margin: 3px 0 0;\n}\n.toolbar[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  direction: rtl;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.grid-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  overflow: hidden;\n}\n.export-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n}\n[_nghost-%COMP%]     .export-btns .k-button {\n  border: none !important;\n  border-radius: 0 !important;\n  background: var(--sf-bg-card) !important;\n  color: var(--sf-text-secondary) !important;\n  box-shadow: none !important;\n  padding: 6px 14px !important;\n  font-size: 0.82rem !important;\n  font-weight: 500 !important;\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n}\n[_nghost-%COMP%]     .export-btns .k-button:hover {\n  background: var(--sf-bg-hover) !important;\n}\n[_nghost-%COMP%]     .export-btns .k-button + .k-button {\n  border-inline-start: 1px solid var(--sf-border) !important;\n}\n[_nghost-%COMP%]     .export-btns .btn-excel:hover {\n  color: #16a34a !important;\n}\n[_nghost-%COMP%]     .export-btns .btn-pdf:hover {\n  color: #dc2626 !important;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 320px;\n  direction: rtl;\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 6px 12px;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.search-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--sf-border-focus);\n  box-shadow: 0 0 0 3px rgba(13, 71, 255, 0.12);\n}\n.search-icon[_ngcontent-%COMP%] {\n  color: var(--sf-text-muted);\n  font-size: 18px;\n  width: 18px !important;\n  height: 18px !important;\n  flex-shrink: 0;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  color: var(--sf-text);\n  font-size: 0.875rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--sf-text-muted);\n}\n.state-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: var(--sf-text-secondary);\n}\n.state-box.error[_ngcontent-%COMP%] {\n  color: var(--sf-danger);\n}\n[_nghost-%COMP%]     .users-grid {\n  height: 100%;\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.04);\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n[_nghost-%COMP%]     .users-grid .k-grid-header th.k-header {\n  background: var(--sf-grid-hd-bg) !important;\n  color: var(--sf-grid-hd-color) !important;\n  font-weight: 700 !important;\n  font-size: 0.78rem !important;\n  text-align: right !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n  border-color: var(--sf-grid-hd-border) !important;\n  direction: rtl;\n  padding: 8px 12px !important;\n}\n[_nghost-%COMP%]     .users-grid .k-grid-header {\n  background: var(--sf-grid-hd-bg) !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n}\n[_nghost-%COMP%]     .users-grid .k-column-menu-button {\n  color: var(--sf-grid-hd-color);\n  opacity: 0.7;\n}\n[_nghost-%COMP%]     .users-grid .k-column-menu-button:hover {\n  opacity: 1;\n}\n[_nghost-%COMP%]     .users-grid td.k-table-td {\n  text-align: right !important;\n  vertical-align: middle !important;\n  border-color: var(--sf-border) !important;\n  font-size: 0.875rem;\n  background: var(--sf-bg-card);\n  direction: rtl;\n  padding: 10px 14px !important;\n}\n[_nghost-%COMP%]     .users-grid tr.k-table-row:hover td {\n  background: var(--sf-bg-hover) !important;\n}\n[_nghost-%COMP%]     .users-grid .k-detail-row > td {\n  background: var(--sf-bg) !important;\n  padding: 4px 0 12px !important;\n  border-bottom: 1px solid var(--sf-border) !important;\n}\n[_nghost-%COMP%]     .users-grid .k-column-resizer {\n  background: var(--sf-border);\n  width: 1px;\n  opacity: 0.5;\n}\n[_nghost-%COMP%]     .users-grid .k-pager {\n  border-top: 1px solid var(--sf-border);\n  background: var(--sf-bg);\n  direction: rtl;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  font-size: 0.82rem;\n  padding: 10px 16px;\n}\n[_nghost-%COMP%]     .users-grid .k-pager-wrap, \n[_nghost-%COMP%]     .users-grid .k-pager {\n  direction: rtl !important;\n}\n[_nghost-%COMP%]     .users-grid .k-sort-icon {\n  margin-right: 4px;\n}\n[_nghost-%COMP%]     .users-grid td.k-table-td:last-child {\n  padding: 4px 6px !important;\n}\n[_nghost-%COMP%]     .row-actions {\n  display: flex !important;\n  flex-direction: row !important;\n  align-items: center;\n  gap: 2px;\n  flex-wrap: nowrap;\n}\n[_nghost-%COMP%]     .act-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n  flex-shrink: 0;\n}\n[_nghost-%COMP%]     .act-btn i {\n  font-size: 0.9rem;\n}\n[_nghost-%COMP%]     .act-expand {\n  color: var(--sf-text-secondary);\n}\n[_nghost-%COMP%]     .act-expand:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-primary);\n}\n[_nghost-%COMP%]     .act-perms {\n  color: #7c3aed;\n}\n[_nghost-%COMP%]     .act-perms:hover {\n  background: #ede9fe;\n}\n[_nghost-%COMP%]     .act-edit {\n  color: #3b82f6;\n}\n[_nghost-%COMP%]     .act-edit:hover {\n  background: #eff6ff;\n}\n[_nghost-%COMP%]     .act-lock {\n  color: #ef4444;\n}\n[_nghost-%COMP%]     .act-lock:hover {\n  background: #fef2f2;\n}\n[_nghost-%COMP%]     .act-unlock {\n  color: #16a34a;\n}\n[_nghost-%COMP%]     .act-unlock:hover {\n  background: #f0fdf4;\n}\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  font-size: 0.9rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n  background: var(--sf-primary-light);\n  color: var(--sf-primary);\n}\n.user-avatar.av-platform[_ngcontent-%COMP%] {\n  background: #1e1b4b;\n  color: #a5b4fc;\n}\n.user-avatar.av-super[_ngcontent-%COMP%] {\n  background: rgba(13, 71, 255, 0.1333333333);\n  color: #0d47ff;\n}\n.user-avatar.av-admin[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.1333333333);\n  color: #2563eb;\n}\n.user-avatar.av-manager[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.1333333333);\n  color: #7c3aed;\n}\n.user-avatar.av-default[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.user-avatar.avatar-inactive[_ngcontent-%COMP%] {\n  background: #f1f5f9 !important;\n  color: var(--sf-text-muted) !important;\n  opacity: 0.6;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--sf-text);\n  font-size: 0.88rem;\n  line-height: 1.2;\n}\n.user-name.name-inactive[_ngcontent-%COMP%] {\n  color: var(--sf-text-muted);\n  text-decoration: line-through;\n}\n.user-username[_ngcontent-%COMP%] {\n  font-size: 0.73rem;\n  color: var(--sf-text-muted);\n  font-family: "Share Tech Mono", monospace;\n}\n.org-tag[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.org-logo[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  object-fit: contain;\n  border: 1px solid var(--sf-border);\n  padding: 2px;\n  background: #fff;\n  flex-shrink: 0;\n}\n.org-avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  flex-shrink: 0;\n  background: var(--sf-primary-light);\n  color: var(--sf-primary);\n  font-size: 0.8rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.org-name-sm[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: var(--sf-text);\n  line-height: 1.2;\n}\n.org-code[_ngcontent-%COMP%] {\n  font-size: 0.71rem;\n  color: var(--sf-text-muted);\n  font-family: "Share Tech Mono", monospace;\n}\n.role-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge-platform[_ngcontent-%COMP%] {\n  background: #1e1b4b;\n  color: #a5b4fc;\n}\n.badge-blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #1d4ed8;\n  border: 1px solid #bfdbfe;\n}\n.badge-purple[_ngcontent-%COMP%] {\n  background: #f5f3ff;\n  color: #7c3aed;\n  border: 1px solid #ddd6fe;\n}\n.badge-gray[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.dept-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.83rem;\n  color: var(--sf-text);\n}\n.dept-cell[_ngcontent-%COMP%]   .dept-icon[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  width: 14px !important;\n  height: 14px !important;\n  color: var(--sf-text-muted);\n}\n.no-dept[_ngcontent-%COMP%] {\n  color: var(--sf-text-muted);\n  font-style: italic;\n}\n.date-cell[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--sf-text);\n}\n.auth-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.auth-badge.auth-platform[_ngcontent-%COMP%] {\n  background: #1e1b4b;\n  color: #a5b4fc;\n}\n.auth-badge.auth-full[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.auth-badge.auth-mgr[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.auth-badge.auth-emp[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.auth-badge.auth-ro[_ngcontent-%COMP%] {\n  background: #fce7f3;\n  color: #9d174d;\n}\n.emp-status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.74rem;\n  font-weight: 600;\n}\n.emp-status-badge[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.emp-status-badge.emp-active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.emp-status-badge.emp-active[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.emp-status-badge.emp-inactive[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.emp-status-badge.emp-inactive[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.status-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.actions-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n}\n.menu-trigger[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--sf-text-muted);\n  transition: background 0.15s, color 0.15s;\n}\n.menu-trigger[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  width: 18px !important;\n  height: 18px !important;\n}\n.menu-trigger[_ngcontent-%COMP%]:hover, \n.menu-trigger.active[_ngcontent-%COMP%] {\n  background: var(--sf-bg-hover);\n  color: var(--sf-primary);\n}\n.action-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: calc(100% + 4px);\n  z-index: 9999;\n  min-width: 140px;\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 10px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06);\n  padding: 4px;\n  direction: rtl;\n  animation: _ngcontent-%COMP%_menuFade 0.12s ease;\n}\n@keyframes _ngcontent-%COMP%_menuFade {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 8px 12px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 0.83rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  color: var(--sf-text);\n  border-radius: 7px;\n  transition: background 0.1s;\n  white-space: nowrap;\n  direction: rtl;\n}\n.menu-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  width: 16px !important;\n  height: 16px !important;\n  color: var(--sf-text-secondary);\n}\n.menu-item[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n}\n.menu-item.menu-danger[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.menu-item.menu-danger[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.menu-item.menu-danger[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.menu-item.menu-success[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.menu-item.menu-success[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.menu-item.menu-success[_ngcontent-%COMP%]:hover {\n  background: #f0fdf4;\n}\n.menu-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--sf-border);\n  margin: 4px 8px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.74rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.badge-active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.badge-inactive[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.badge-warn[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.user-detail-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 14px;\n  padding: 16px 12px;\n  direction: rtl;\n  background: var(--sf-bg);\n}\n.detail-group[_ngcontent-%COMP%] {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 12px;\n  padding: 14px 18px;\n  min-width: 200px;\n  flex: 1;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.detail-group-title[_ngcontent-%COMP%] {\n  font-size: 0.71rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--sf-text-muted);\n  margin-bottom: 10px;\n  padding-bottom: 7px;\n  border-bottom: 1px solid var(--sf-border);\n}\n.detail-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.detail-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.df-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--sf-text-muted);\n  min-width: 100px;\n  flex-shrink: 0;\n}\n.df-val[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: var(--sf-text);\n  font-weight: 500;\n}\n.df-mono[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=users.component.css.map */'] });
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
      MatProgressSpinnerModule,
      UserDialogComponent,
      HasPermDirective,
      LogicPermsComponent
    ], template: `<div class="users-page">

  <div class="page-header">
    <div class="header-titles">
      <h1>\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD</h1>
      <p>{{ users().length }} \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA</p>
    </div>
    <button *appHasPerm="'USERS:CREATE'"
            kendoButton themeColor="primary" [svgIcon]="addIcon" (click)="openAdd()">
      \u05DE\u05E9\u05EA\u05DE\u05E9 \u05D7\u05D3\u05E9
    </button>
  </div>

  <div class="toolbar">
    <div class="search-wrap">
      <mat-icon class="search-icon">search</mat-icon>
      <input class="search-input" type="text"
             placeholder="\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DC\u05E4\u05D9 \u05E9\u05DD, \u05DE\u05D9\u05D9\u05DC, \u05DE\u05D7\u05DC\u05E7\u05D4..."
             (input)="onSearch($any($event.target).value)" />
    </div>
    <div class="export-btns">
      <button kendoButton fillMode="outline" [svgIcon]="excelIcon" (click)="exportExcel()" class="btn-export btn-excel">Excel</button>
      <button kendoButton fillMode="outline" [svgIcon]="pdfIcon"   (click)="exportPDF()"   class="btn-export btn-pdf">PDF</button>
    </div>
  </div>

  <div class="grid-wrap">
  @if (loading()) {
    <div class="state-box"><mat-spinner diameter="36" /></div>
  }
  @if (!loading() && error()) {
    <div class="state-box error">{{ error() }}</div>
  }

  @if (!loading() && !error()) {
    <kendo-grid
      [data]="{ data: pagedData, total: gridData.length }"
      [skip]="skip" [pageSize]="pageSize"
      [pageable]="{ buttonCount: 5, info: true, type: 'numeric', pageSizes: [25, 50, 100] }"
      [sortable]="{ mode: 'single', allowUnsort: false }"
      [sort]="sort"
      [reorderable]="true" [resizable]="true"
      [selectable]="{ mode: 'multiple', checkboxOnly: true }"
      [columnMenu]="true"
      scrollable="scrollable"
      (pageChange)="onPageChange($event)"
      (sortChange)="onSortChange($event)"
      class="users-grid">

      <!-- \u05D4\u05E8\u05D7\u05D1\u05EA \u05E9\u05D5\u05E8\u05D4 \u2014 \u05E4\u05E8\u05D8\u05D9\u05DD \u05DE\u05D5\u05E8\u05D7\u05D1\u05D9\u05DD -->
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
              <div class="detail-field"><span class="df-label">\u05DE\u05D7\u05DC\u05E7\u05D4</span><span class="df-val">{{ u.DeptName || '\u2014' }}</span></div>
            </div>
          </div>
          <div class="detail-group">
            <div class="detail-group-title">\u05E4\u05E2\u05D9\u05DC\u05D5\u05EA</div>
            <div class="detail-fields">
              <div class="detail-field"><span class="df-label">\u05DE\u05E6\u05D1</span>
                <span class="badge" [class.badge-active]="u.IsActive" [class.badge-inactive]="!u.IsActive">{{ u.IsActive ? '\u05E4\u05E2\u05D9\u05DC' : '\u05DE\u05D5\u05E9\u05D4\u05D4' }}</span>
              </div>
              <div class="detail-field"><span class="df-label">\u05D4\u05E6\u05D8\u05E8\u05E3</span><span class="df-val">{{ formatDate(u.CreatedAt) }}</span></div>
              <div class="detail-field"><span class="df-label">\u05DB\u05E0\u05D9\u05E1\u05D4 \u05D0\u05D7\u05E8\u05D5\u05E0\u05D4</span><span class="df-val">{{ formatLastLogin(u.LastLoginAt) }}</span></div>
              @if (u.MustChangePass) {
                <div class="detail-field"><span class="df-label">\u05E1\u05D9\u05E1\u05DE\u05D4</span><span class="badge badge-warn">\u05E0\u05D3\u05E8\u05E9 \u05E9\u05D9\u05E0\u05D5\u05D9</span></div>
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
        <kendo-excelexport-column field="DeptName"    title="\u05DE\u05D7\u05DC\u05E7\u05D4"        [width]="140" />
        <kendo-excelexport-column field="RoleName"    title="\u05EA\u05E4\u05E7\u05D9\u05D3"        [width]="120" />
        <kendo-excelexport-column field="IsActive"    title="\u05E4\u05E2\u05D9\u05DC"         [width]="60"  />
        <kendo-excelexport-column field="CreatedAt"   title="\u05D4\u05E6\u05D8\u05E8\u05E3"        [width]="110" />
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

      <!-- \u05D0\u05E8\u05D2\u05D5\u05DF \u2014 \u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4 \u05D1\u05DC\u05D1\u05D3 -->
      @if (isPlatform()) {
        <kendo-grid-column field="OrgName" title="\u05D0\u05E8\u05D2\u05D5\u05DF" [width]="200">
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

      <!-- \u05E9\u05DD \u05DE\u05DC\u05D0 + Avatar -->
      <kendo-grid-column field="FullName" title="\u05E9\u05DD" [minResizableWidth]="160">
        <ng-template kendoGridCellTemplate let-u>
          <div class="user-cell">
            <div class="user-avatar" [class]="avatarColor(u.RoleCode)" [class.avatar-inactive]="!u.IsActive">
              {{ u.FullName ? u.FullName.charAt(0) : '?' }}
            </div>
            <div class="user-info">
              <span class="user-name" [class.name-inactive]="!u.IsActive">{{ u.FullName }}</span>
              <span class="user-username">&#64;{{ u.Username }}</span>
            </div>
          </div>
        </ng-template>
      </kendo-grid-column>

      <!-- \u05EA\u05E4\u05E7\u05D9\u05D3 -->
      <kendo-grid-column field="RoleName" title="\u05EA\u05E4\u05E7\u05D9\u05D3 / \u05EA\u05E4\u05E7\u05D9\u05D3" [width]="150">
        <ng-template kendoGridCellTemplate let-u>
          <span class="role-badge" [class]="roleClass(u.RoleCode)">{{ u.RoleName }}</span>
        </ng-template>
      </kendo-grid-column>

      <!-- \u05DE\u05D7\u05DC\u05E7\u05D4 -->
      <kendo-grid-column field="DeptName" title="\u05DE\u05D7\u05DC\u05E7\u05D4" [width]="140">
        <ng-template kendoGridCellTemplate let-u>
          @if (u.DeptName) {
            <div class="dept-cell">
              <mat-icon class="dept-icon">business</mat-icon>
              <span>{{ u.DeptName }}</span>
            </div>
          } @else {
            <span class="no-dept">\u2014</span>
          }
        </ng-template>
      </kendo-grid-column>

      <!-- \u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05E6\u05D8\u05E8\u05E4\u05D5\u05EA -->
      <kendo-grid-column field="CreatedAt" title="\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05E6\u05D8\u05E8\u05E4\u05D5\u05EA" [width]="145">
        <ng-template kendoGridCellTemplate let-u>
          <span class="date-cell">{{ formatDate(u.CreatedAt) }}</span>
        </ng-template>
      </kendo-grid-column>

      <!-- \u05E8\u05DE\u05EA \u05D4\u05E8\u05E9\u05D0\u05D4 -->
      <kendo-grid-column field="RoleCode" title="\u05E8\u05DE\u05EA \u05D4\u05E8\u05E9\u05D0\u05D4" [width]="170">
        <ng-template kendoGridCellTemplate let-u>
          <span class="auth-badge" [class]="authLevelLabel(u.RoleCode).cls">
            {{ authLevelLabel(u.RoleCode).label }}
          </span>
        </ng-template>
      </kendo-grid-column>

      <!-- \u05E1\u05D8\u05D8\u05D5\u05E1 \u05E2\u05E1\u05E7\u05D4 -->
      <kendo-grid-column field="IsActive" title="\u05E1\u05D8\u05D8\u05D5\u05E1" [width]="110">
        <ng-template kendoGridCellTemplate let-u>
          <div class="status-wrap">
            <span class="emp-status-badge" [class.emp-active]="u.IsActive" [class.emp-inactive]="!u.IsActive">
              <span class="status-dot"></span>
              {{ u.IsActive ? '\u05E4\u05E2\u05D9\u05DC' : '\u05DE\u05D5\u05E9\u05D4\u05D4' }}
            </span>
          </div>
        </ng-template>
      </kendo-grid-column>

      <!-- \u05E4\u05E2\u05D5\u05DC\u05D5\u05EA inline -->
      <kendo-grid-column title="" [width]="130" [sortable]="false" [resizable]="false" [columnMenu]="false">
        <ng-template kendoGridCellTemplate let-u let-rowIndex="rowIndex">
          <div class="row-actions">
            <button class="act-btn act-expand"
                    [class.expanded]="isExpanded(u.UserID)"
                    [title]="isExpanded(u.UserID) ? '\u05E1\u05D2\u05D5\u05E8' : '\u05E4\u05E8\u05D8\u05D9\u05DD'"
                    (click)="toggleDetail(u, rowIndex)">
              <i class="pi" [class.pi-chevron-down]="!isExpanded(u.UserID)" [class.pi-chevron-up]="isExpanded(u.UserID)"></i>
            </button>
            <button class="act-btn act-perms" title="\u05D4\u05E8\u05E9\u05D0\u05D5\u05EA \u05DC\u05D5\u05D2\u05D9\u05E7\u05D4" (click)="openPerms(u)">
              <i class="pi pi-shield"></i>
            </button>
            <button *appHasPerm="'USERS:UPDATE'"
                    class="act-btn"
                    [class.act-lock]="u.IsActive"
                    [class.act-unlock]="!u.IsActive"
                    [title]="u.IsActive ? '\u05D4\u05E9\u05D1\u05EA' : '\u05D4\u05E4\u05E2\u05DC'"
                    (click)="toggleActive(u)">
              <i class="pi" [class.pi-lock]="u.IsActive" [class.pi-lock-open]="!u.IsActive"></i>
            </button>
            <button *appHasPerm="'USERS:UPDATE'"
                    class="act-btn act-edit" title="\u05E2\u05E8\u05D5\u05DA" (click)="openEdit(u)">
              <i class="pi pi-pencil"></i>
            </button>
          </div>
        </ng-template>
      </kendo-grid-column>

    </kendo-grid>
  }
  </div><!-- /grid-wrap -->

</div>

@if (permsOpen && permsUser) {
  <app-logic-perms
    entityType="USER"
    [entityId]="permsUser.UserID"
    [entityName]="permsUser.FullName || permsUser.Username"
    (closed)="closePerms()" />
}

@if (dialogOpen()) {
  <app-user-dialog
    [user]="dialogUser()"
    [isPlatform]="isPlatform()"
    (closed)="dialogOpen.set(false)"
    (saved)="onSaved(); dialogOpen.set(false)" />
}
`, styles: ['/* src/app/features/users/users.component.scss */\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.users-page {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  direction: rtl;\n  gap: 16px;\n  margin-bottom: 20px;\n  flex-shrink: 0;\n}\n.header-titles h1 {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0;\n}\n.header-titles p {\n  font-size: 0.83rem;\n  color: var(--sf-text-secondary);\n  margin: 3px 0 0;\n}\n.toolbar {\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  direction: rtl;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.grid-wrap {\n  flex: 1;\n  min-height: 0;\n  overflow: hidden;\n}\n.export-btns {\n  display: flex;\n  gap: 0;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n}\n:host ::ng-deep .export-btns .k-button {\n  border: none !important;\n  border-radius: 0 !important;\n  background: var(--sf-bg-card) !important;\n  color: var(--sf-text-secondary) !important;\n  box-shadow: none !important;\n  padding: 6px 14px !important;\n  font-size: 0.82rem !important;\n  font-weight: 500 !important;\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n}\n:host ::ng-deep .export-btns .k-button:hover {\n  background: var(--sf-bg-hover) !important;\n}\n:host ::ng-deep .export-btns .k-button + .k-button {\n  border-inline-start: 1px solid var(--sf-border) !important;\n}\n:host ::ng-deep .export-btns .btn-excel:hover {\n  color: #16a34a !important;\n}\n:host ::ng-deep .export-btns .btn-pdf:hover {\n  color: #dc2626 !important;\n}\n.search-wrap {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 320px;\n  direction: rtl;\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 6px 12px;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.search-wrap:focus-within {\n  border-color: var(--sf-border-focus);\n  box-shadow: 0 0 0 3px rgba(13, 71, 255, 0.12);\n}\n.search-icon {\n  color: var(--sf-text-muted);\n  font-size: 18px;\n  width: 18px !important;\n  height: 18px !important;\n  flex-shrink: 0;\n}\n.search-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  color: var(--sf-text);\n  font-size: 0.875rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n.search-input::placeholder {\n  color: var(--sf-text-muted);\n}\n.state-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: var(--sf-text-secondary);\n}\n.state-box.error {\n  color: var(--sf-danger);\n}\n:host ::ng-deep .users-grid {\n  height: 100%;\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.04);\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n:host ::ng-deep .users-grid .k-grid-header th.k-header {\n  background: var(--sf-grid-hd-bg) !important;\n  color: var(--sf-grid-hd-color) !important;\n  font-weight: 700 !important;\n  font-size: 0.78rem !important;\n  text-align: right !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n  border-color: var(--sf-grid-hd-border) !important;\n  direction: rtl;\n  padding: 8px 12px !important;\n}\n:host ::ng-deep .users-grid .k-grid-header {\n  background: var(--sf-grid-hd-bg) !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n}\n:host ::ng-deep .users-grid .k-column-menu-button {\n  color: var(--sf-grid-hd-color);\n  opacity: 0.7;\n}\n:host ::ng-deep .users-grid .k-column-menu-button:hover {\n  opacity: 1;\n}\n:host ::ng-deep .users-grid td.k-table-td {\n  text-align: right !important;\n  vertical-align: middle !important;\n  border-color: var(--sf-border) !important;\n  font-size: 0.875rem;\n  background: var(--sf-bg-card);\n  direction: rtl;\n  padding: 10px 14px !important;\n}\n:host ::ng-deep .users-grid tr.k-table-row:hover td {\n  background: var(--sf-bg-hover) !important;\n}\n:host ::ng-deep .users-grid .k-detail-row > td {\n  background: var(--sf-bg) !important;\n  padding: 4px 0 12px !important;\n  border-bottom: 1px solid var(--sf-border) !important;\n}\n:host ::ng-deep .users-grid .k-column-resizer {\n  background: var(--sf-border);\n  width: 1px;\n  opacity: 0.5;\n}\n:host ::ng-deep .users-grid .k-pager {\n  border-top: 1px solid var(--sf-border);\n  background: var(--sf-bg);\n  direction: rtl;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  font-size: 0.82rem;\n  padding: 10px 16px;\n}\n:host ::ng-deep .users-grid .k-pager-wrap,\n:host ::ng-deep .users-grid .k-pager {\n  direction: rtl !important;\n}\n:host ::ng-deep .users-grid .k-sort-icon {\n  margin-right: 4px;\n}\n:host ::ng-deep .users-grid td.k-table-td:last-child {\n  padding: 4px 6px !important;\n}\n:host ::ng-deep .row-actions {\n  display: flex !important;\n  flex-direction: row !important;\n  align-items: center;\n  gap: 2px;\n  flex-wrap: nowrap;\n}\n:host ::ng-deep .act-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n  flex-shrink: 0;\n}\n:host ::ng-deep .act-btn i {\n  font-size: 0.9rem;\n}\n:host ::ng-deep .act-expand {\n  color: var(--sf-text-secondary);\n}\n:host ::ng-deep .act-expand:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-primary);\n}\n:host ::ng-deep .act-perms {\n  color: #7c3aed;\n}\n:host ::ng-deep .act-perms:hover {\n  background: #ede9fe;\n}\n:host ::ng-deep .act-edit {\n  color: #3b82f6;\n}\n:host ::ng-deep .act-edit:hover {\n  background: #eff6ff;\n}\n:host ::ng-deep .act-lock {\n  color: #ef4444;\n}\n:host ::ng-deep .act-lock:hover {\n  background: #fef2f2;\n}\n:host ::ng-deep .act-unlock {\n  color: #16a34a;\n}\n:host ::ng-deep .act-unlock:hover {\n  background: #f0fdf4;\n}\n.user-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  font-size: 0.9rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n  background: var(--sf-primary-light);\n  color: var(--sf-primary);\n}\n.user-avatar.av-platform {\n  background: #1e1b4b;\n  color: #a5b4fc;\n}\n.user-avatar.av-super {\n  background: rgba(13, 71, 255, 0.1333333333);\n  color: #0d47ff;\n}\n.user-avatar.av-admin {\n  background: rgba(37, 99, 235, 0.1333333333);\n  color: #2563eb;\n}\n.user-avatar.av-manager {\n  background: rgba(124, 58, 237, 0.1333333333);\n  color: #7c3aed;\n}\n.user-avatar.av-default {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.user-avatar.avatar-inactive {\n  background: #f1f5f9 !important;\n  color: var(--sf-text-muted) !important;\n  opacity: 0.6;\n}\n.user-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.user-name {\n  font-weight: 600;\n  color: var(--sf-text);\n  font-size: 0.88rem;\n  line-height: 1.2;\n}\n.user-name.name-inactive {\n  color: var(--sf-text-muted);\n  text-decoration: line-through;\n}\n.user-username {\n  font-size: 0.73rem;\n  color: var(--sf-text-muted);\n  font-family: "Share Tech Mono", monospace;\n}\n.org-tag {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.org-logo {\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  object-fit: contain;\n  border: 1px solid var(--sf-border);\n  padding: 2px;\n  background: #fff;\n  flex-shrink: 0;\n}\n.org-avatar {\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  flex-shrink: 0;\n  background: var(--sf-primary-light);\n  color: var(--sf-primary);\n  font-size: 0.8rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.org-name-sm {\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: var(--sf-text);\n  line-height: 1.2;\n}\n.org-code {\n  font-size: 0.71rem;\n  color: var(--sf-text-muted);\n  font-family: "Share Tech Mono", monospace;\n}\n.role-badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge-platform {\n  background: #1e1b4b;\n  color: #a5b4fc;\n}\n.badge-blue {\n  background: #eff6ff;\n  color: #1d4ed8;\n  border: 1px solid #bfdbfe;\n}\n.badge-purple {\n  background: #f5f3ff;\n  color: #7c3aed;\n  border: 1px solid #ddd6fe;\n}\n.badge-gray {\n  background: #f1f5f9;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.dept-cell {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.83rem;\n  color: var(--sf-text);\n}\n.dept-cell .dept-icon {\n  font-size: 14px !important;\n  width: 14px !important;\n  height: 14px !important;\n  color: var(--sf-text-muted);\n}\n.no-dept {\n  color: var(--sf-text-muted);\n  font-style: italic;\n}\n.date-cell {\n  font-size: 0.82rem;\n  color: var(--sf-text);\n}\n.auth-badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.auth-badge.auth-platform {\n  background: #1e1b4b;\n  color: #a5b4fc;\n}\n.auth-badge.auth-full {\n  background: #d1fae5;\n  color: #065f46;\n}\n.auth-badge.auth-mgr {\n  background: #fef3c7;\n  color: #92400e;\n}\n.auth-badge.auth-emp {\n  background: #f1f5f9;\n  color: #475569;\n}\n.auth-badge.auth-ro {\n  background: #fce7f3;\n  color: #9d174d;\n}\n.emp-status-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.74rem;\n  font-weight: 600;\n}\n.emp-status-badge .status-dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.emp-status-badge.emp-active {\n  background: #dcfce7;\n  color: #15803d;\n}\n.emp-status-badge.emp-active .status-dot {\n  background: #16a34a;\n}\n.emp-status-badge.emp-inactive {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.emp-status-badge.emp-inactive .status-dot {\n  background: #ef4444;\n}\n.status-wrap {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.actions-wrap {\n  position: relative;\n  display: flex;\n  justify-content: center;\n}\n.menu-trigger {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--sf-text-muted);\n  transition: background 0.15s, color 0.15s;\n}\n.menu-trigger mat-icon {\n  font-size: 18px !important;\n  width: 18px !important;\n  height: 18px !important;\n}\n.menu-trigger:hover,\n.menu-trigger.active {\n  background: var(--sf-bg-hover);\n  color: var(--sf-primary);\n}\n.action-menu {\n  position: absolute;\n  left: 0;\n  top: calc(100% + 4px);\n  z-index: 9999;\n  min-width: 140px;\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 10px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06);\n  padding: 4px;\n  direction: rtl;\n  animation: menuFade 0.12s ease;\n}\n@keyframes menuFade {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.menu-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 8px 12px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 0.83rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  color: var(--sf-text);\n  border-radius: 7px;\n  transition: background 0.1s;\n  white-space: nowrap;\n  direction: rtl;\n}\n.menu-item mat-icon {\n  font-size: 16px !important;\n  width: 16px !important;\n  height: 16px !important;\n  color: var(--sf-text-secondary);\n}\n.menu-item:hover {\n  background: var(--sf-bg-hover);\n}\n.menu-item.menu-danger {\n  color: #dc2626;\n}\n.menu-item.menu-danger mat-icon {\n  color: #dc2626;\n}\n.menu-item.menu-danger:hover {\n  background: #fef2f2;\n}\n.menu-item.menu-success {\n  color: #16a34a;\n}\n.menu-item.menu-success mat-icon {\n  color: #16a34a;\n}\n.menu-item.menu-success:hover {\n  background: #f0fdf4;\n}\n.menu-divider {\n  height: 1px;\n  background: var(--sf-border);\n  margin: 4px 8px;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.74rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.badge-active {\n  background: #dcfce7;\n  color: #15803d;\n}\n.badge-inactive {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.badge-warn {\n  background: #fef3c7;\n  color: #92400e;\n}\n.user-detail-card {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 14px;\n  padding: 16px 12px;\n  direction: rtl;\n  background: var(--sf-bg);\n}\n.detail-group {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 12px;\n  padding: 14px 18px;\n  min-width: 200px;\n  flex: 1;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.detail-group-title {\n  font-size: 0.71rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--sf-text-muted);\n  margin-bottom: 10px;\n  padding-bottom: 7px;\n  border-bottom: 1px solid var(--sf-border);\n}\n.detail-fields {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.detail-field {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.df-label {\n  font-size: 0.75rem;\n  color: var(--sf-text-muted);\n  min-width: 100px;\n  flex-shrink: 0;\n}\n.df-val {\n  font-size: 0.83rem;\n  color: var(--sf-text);\n  font-weight: 500;\n}\n.df-mono {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=users.component.css.map */\n'] }]
  }], () => [{ type: UserService }], { grid: [{
    type: ViewChild,
    args: [GridComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src/app/features/users/users.component.ts", lineNumber: 33 });
})();
export {
  UsersComponent
};
//# sourceMappingURL=chunk-MC42F7US.js.map
