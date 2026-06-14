import {
  ReferenceService
} from "./chunk-JGO6EEA5.js";
import {
  AiProcessingService
} from "./chunk-XFUFAOOU.js";
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
  DropDownListModule,
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
  NumericTextBoxComponent,
  NumericTextBoxModule,
  SwitchModule,
  TextAreaComponent,
  TextAreaModule,
  TextBoxDirective,
  TextBoxModule
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
  checkCircleIcon,
  fileExcelIcon,
  filePdfIcon,
  globeIcon,
  homeIcon,
  pencilIcon,
  plusIcon,
  userIcon,
  walletIcon
} from "./chunk-BV74N4V5.js";
import "./chunk-YZNXQPNO.js";
import {
  DefaultValueAccessor,
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
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  DomSanitizer,
  EventEmitter,
  HttpClient,
  Injectable,
  Input,
  NgZone,
  Output,
  ViewChild,
  __spreadProps,
  __spreadValues,
  effect,
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
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-VR4UVLCZ.js";

// src/app/core/services/upload.service.ts
var UploadService = class _UploadService {
  http;
  constructor(http) {
    this.http = http;
  }
  uploadLogo(file) {
    const form = new FormData();
    form.append("logo", file);
    return this.http.post("/api/upload/logo", form);
  }
  static \u0275fac = function UploadService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UploadService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UploadService, factory: _UploadService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/organizations/org-dialog/org-dialog.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function OrgDialogComponent_For_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 17);
  }
}
function OrgDialogComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function OrgDialogComponent_For_4_Template_button_click_0_listener() {
      const g_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeGroup.set(g_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 14);
    \u0275\u0275element(2, "kendo-svg-icon", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, OrgDialogComponent_For_4_Conditional_5_Template, 1, 0, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeGroup() === g_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", g_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r2.text);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.activeGroup() === g_r2.id ? 5 : -1);
  }
}
function OrgDialogComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A0 ", ctx_r2.errorMsg);
  }
}
function OrgDialogComponent_Conditional_8_Conditional_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 29);
    \u0275\u0275text(1, "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
  }
}
function OrgDialogComponent_Conditional_8_Conditional_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 29);
    \u0275\u0275text(1, "\u05E4\u05D5\u05E8\u05DE\u05D8: ABC_12345");
    \u0275\u0275elementEnd();
  }
}
function OrgDialogComponent_Conditional_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "label");
    \u0275\u0275text(2, "\u05E7\u05D5\u05D3 \u05D0\u05E8\u05D2\u05D5\u05DF ");
    \u0275\u0275elementStart(3, "span", 22);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 23)(6, "input", 42);
    \u0275\u0275listener("input", function OrgDialogComponent_Conditional_8_Conditional_8_Template_input_input_6_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onTenantCodeInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(7, OrgDialogComponent_Conditional_8_Conditional_8_Conditional_7_Template, 2, 0, "small", 29);
    \u0275\u0275conditionalCreate(8, OrgDialogComponent_Conditional_8_Conditional_8_Conditional_8_Template, 2, 0, "small", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.form.get("tenantCode")?.hasError("required") && ctx_r2.form.get("tenantCode")?.touched ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.form.get("tenantCode")?.hasError("pattern") && ctx_r2.form.get("tenantCode")?.touched ? 8 : -1);
  }
}
function OrgDialogComponent_Conditional_8_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("enrich-ok", ctx_r2.enrichMsg().startsWith("\u2713"))("enrich-err", !ctx_r2.enrichMsg().startsWith("\u2713"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.enrichMsg());
  }
}
function OrgDialogComponent_Conditional_8_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 29);
    \u0275\u0275text(1, "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
  }
}
function OrgDialogComponent_Conditional_8_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "img", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.logoPreview, \u0275\u0275sanitizeUrl);
  }
}
function OrgDialogComponent_Conditional_8_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "kendo-svg-icon", 15);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u05D0\u05D9\u05DF \u05DC\u05D5\u05D2\u05D5");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r2.groups[0].icon);
  }
}
function OrgDialogComponent_Conditional_8_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "\u23F3");
    \u0275\u0275elementEnd();
  }
}
function OrgDialogComponent_Conditional_8_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2191 ");
  }
}
function OrgDialogComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 18)(2, "h3");
    \u0275\u0275text(3, "\u05E4\u05E8\u05D8\u05D9 \u05D0\u05E8\u05D2\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "\u05DE\u05D9\u05D3\u05E2 \u05D1\u05E1\u05D9\u05E1\u05D9 \u05D5\u05DC\u05D5\u05D2\u05D5");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 19)(7, "div", 20);
    \u0275\u0275conditionalCreate(8, OrgDialogComponent_Conditional_8_Conditional_8_Template, 9, 2, "div", 21);
    \u0275\u0275elementStart(9, "div", 21)(10, "label");
    \u0275\u0275text(11, "\u05E9\u05DD \u05D7\u05D1\u05E8\u05D4 ");
    \u0275\u0275elementStart(12, "span", 22);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 23);
    \u0275\u0275element(15, "input", 24);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(16, "div", 25)(17, "button", 26);
    \u0275\u0275listener("click", function OrgDialogComponent_Conditional_8_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.enrichFromAI());
    });
    \u0275\u0275element(18, "i", 27);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, OrgDialogComponent_Conditional_8_Conditional_20_Template, 2, 5, "small", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, OrgDialogComponent_Conditional_8_Conditional_21_Template, 2, 0, "small", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 21)(23, "label");
    \u0275\u0275text(24, "\u05DE\u05E1\u05E4\u05E8 \u05E2\u05D5\u05E1\u05E7 / \u05D7.\u05E4.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 23);
    \u0275\u0275element(26, "input", 30);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 21)(28, "label");
    \u0275\u0275text(29, "\u05E1\u05D5\u05D2 \u05D0\u05E8\u05D2\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 23);
    \u0275\u0275element(31, "kendo-dropdownlist", 31);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 32)(33, "div", 33);
    \u0275\u0275text(34, "\u05DC\u05D5\u05D2\u05D5 \u05D7\u05D1\u05E8\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(35, OrgDialogComponent_Conditional_8_Conditional_35_Template, 2, 1, "div", 34)(36, OrgDialogComponent_Conditional_8_Conditional_36_Template, 4, 1, "div", 35);
    \u0275\u0275elementStart(37, "div", 36)(38, "label", 37);
    \u0275\u0275conditionalCreate(39, OrgDialogComponent_Conditional_8_Conditional_39_Template, 2, 0, "span", 38)(40, OrgDialogComponent_Conditional_8_Conditional_40_Template, 1, 0);
    \u0275\u0275text(41, " \u05D4\u05E2\u05DC\u05D0\u05D4 ");
    \u0275\u0275elementStart(42, "input", 39);
    \u0275\u0275listener("change", function OrgDialogComponent_Conditional_8_Template_input_change_42_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onLogoSelect($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "button", 40);
    \u0275\u0275listener("click", function OrgDialogComponent_Conditional_8_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeLogo());
    });
    \u0275\u0275text(44, " \u{1F5D1} \u05DE\u05D7\u05D9\u05E7\u05D4 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "small", 41);
    \u0275\u0275text(46, "PNG \xB7 JPG \xB7 SVG \xB7 max 2MB");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!ctx_r2.isEdit ? 8 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.enriching() || !ctx_r2.form.get("companyName")?.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.enriching() ? "\u05DE\u05E0\u05EA\u05D7..." : "\u05E0\u05D9\u05EA\u05D5\u05D7 AI", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.enrichMsg() ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.form.get("companyName")?.invalid && ctx_r2.form.get("companyName")?.touched ? 21 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275property("data", ctx_r2.orgTypes)("valuePrimitive", true);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.logoPreview ? 35 : 36);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("loading", ctx_r2.uploading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.uploading ? 39 : 40);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r2.logoPreview);
  }
}
function OrgDialogComponent_Conditional_9_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 29);
    \u0275\u0275text(1, '\u05DB\u05EA\u05D5\u05D1\u05EA \u05D3\u05D5\u05D0"\u05DC \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4');
    \u0275\u0275elementEnd();
  }
}
function OrgDialogComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 18)(2, "h3");
    \u0275\u0275text(3, "\u05E4\u05E8\u05D8\u05D9 \u05E7\u05E9\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, '\u05D0\u05E0\u05E9\u05D9 \u05E7\u05E9\u05E8, \u05D3\u05D5\u05D0"\u05DC \u05D5\u05D8\u05DC\u05E4\u05D5\u05E0\u05D9\u05DD');
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 21)(7, "label");
    \u0275\u0275text(8, "\u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 23);
    \u0275\u0275element(10, "input", 45);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 21)(12, "label");
    \u0275\u0275text(13, '\u05D3\u05D5\u05D0"\u05DC ');
    \u0275\u0275elementStart(14, "span", 22);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 23);
    \u0275\u0275element(17, "input", 46);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(18, OrgDialogComponent_Conditional_9_Conditional_18_Template, 2, 0, "small", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 21)(20, "label");
    \u0275\u0275text(21, "\u05D8\u05DC\u05E4\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 23);
    \u0275\u0275element(23, "input", 47);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 21)(25, "label");
    \u0275\u0275text(26, "\u05D8\u05DC\u05E4\u05D5\u05DF 2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 23);
    \u0275\u0275element(28, "input", 48);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 21)(30, "label");
    \u0275\u0275text(31, "\u05E4\u05E7\u05E1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 23);
    \u0275\u0275element(33, "input", 49);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 21)(35, "label");
    \u0275\u0275text(36, "\u05D0\u05EA\u05E8 \u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 23);
    \u0275\u0275element(38, "input", 50);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275control();
    \u0275\u0275advance(7);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.form.get("email")?.invalid && ctx_r2.form.get("email")?.touched ? 18 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275control();
  }
}
function OrgDialogComponent_Conditional_10_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275element(1, "kendo-loader", 60);
    \u0275\u0275text(2, " \u05DE\u05D0\u05EA\u05E8 \u05DB\u05EA\u05D5\u05D1\u05EA... ");
    \u0275\u0275elementEnd();
  }
}
function OrgDialogComponent_Conditional_10_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.mapError());
  }
}
function OrgDialogComponent_Conditional_10_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275element(1, "iframe", 61);
    \u0275\u0275elementStart(2, "a", 62);
    \u0275\u0275text(3, " \u05E4\u05EA\u05D7 \u05D1-OpenStreetMap \u2197 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.mapUrl(), \u0275\u0275sanitizeResourceUrl);
    \u0275\u0275advance();
    \u0275\u0275property("href", "https://www.openstreetmap.org/search?query=" + (ctx_r2.form.get("address")?.value || "") + " " + (ctx_r2.form.get("city")?.value || ""), \u0275\u0275sanitizeUrl);
  }
}
function OrgDialogComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 18)(2, "h3");
    \u0275\u0275text(3, "\u05DB\u05EA\u05D5\u05D1\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E4\u05D9\u05D6\u05D9\u05EA \u05E9\u05DC \u05D4\u05D0\u05E8\u05D2\u05D5\u05DF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 21)(7, "label");
    \u0275\u0275text(8, "\u05DE\u05D3\u05D9\u05E0\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 23);
    \u0275\u0275element(10, "kendo-dropdownlist", 51);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 21)(12, "label");
    \u0275\u0275text(13, "\u05E2\u05D9\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 23);
    \u0275\u0275element(15, "input", 52);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 21)(17, "label");
    \u0275\u0275text(18, "\u05DB\u05EA\u05D5\u05D1\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 23);
    \u0275\u0275element(20, "input", 53);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 21)(22, "label");
    \u0275\u0275text(23, "\u05D4\u05E6\u05D2 \u05DE\u05E4\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 23)(25, "div", 54)(26, "div", 55)(27, "button", 56);
    \u0275\u0275listener("click", function OrgDialogComponent_Conditional_10_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.form.get("showMapInDialog")?.setValue(true);
      return \u0275\u0275resetView(ctx_r2.showMap());
    });
    \u0275\u0275text(28, " \u{1F4CD} \u05DB\u05DF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 56);
    \u0275\u0275listener("click", function OrgDialogComponent_Conditional_10_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.form.get("showMapInDialog")?.setValue(false);
      ctx_r2.mapVisible.set(false);
      return \u0275\u0275resetView(ctx_r2.mapError.set(""));
    });
    \u0275\u0275text(30, " \u2715 \u05DC\u05D0 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(31, OrgDialogComponent_Conditional_10_Conditional_31_Template, 3, 0, "span", 57);
    \u0275\u0275conditionalCreate(32, OrgDialogComponent_Conditional_10_Conditional_32_Template, 2, 1, "span", 58);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(33, OrgDialogComponent_Conditional_10_Conditional_33_Template, 4, 2, "div", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("data", ctx_r2.countries())("valuePrimitive", true)("filterable", true);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(7);
    \u0275\u0275classProp("seg-on", !!ctx_r2.form.get("showMapInDialog")?.value);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg-off", !ctx_r2.form.get("showMapInDialog")?.value);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.mapLoading() ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.mapError() ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.mapVisible() ? 33 : -1);
  }
}
function OrgDialogComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 18)(2, "h3");
    \u0275\u0275text(3, "\u05E9\u05E4\u05D4 \u05D5\u05DE\u05D8\u05D1\u05E2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05DC\u05D5\u05E7\u05DC \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC \u05DC\u05D0\u05E8\u05D2\u05D5\u05DF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 21)(7, "label");
    \u0275\u0275text(8, "\u05E9\u05E4\u05D4 \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 23);
    \u0275\u0275element(10, "kendo-dropdownlist", 63);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 21)(12, "label");
    \u0275\u0275text(13, "\u05DE\u05D8\u05D1\u05E2 \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 23);
    \u0275\u0275element(15, "kendo-dropdownlist", 64);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("data", ctx_r2.languages())("valuePrimitive", true);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275property("data", ctx_r2.currencies())("valuePrimitive", true);
    \u0275\u0275control();
  }
}
function OrgDialogComponent_Conditional_12_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "label");
    \u0275\u0275text(2, "\u05E1\u05D8\u05D8\u05D5\u05E1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23)(4, "div", 55)(5, "button", 56);
    \u0275\u0275listener("click", function OrgDialogComponent_Conditional_12_Conditional_21_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.form.get("isActive")?.setValue(true));
    });
    \u0275\u0275text(6, " \u2713 \u05E4\u05E2\u05D9\u05DC ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 56);
    \u0275\u0275listener("click", function OrgDialogComponent_Conditional_12_Conditional_21_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.form.get("isActive")?.setValue(false));
    });
    \u0275\u0275text(8, " \u2717 \u05DE\u05D5\u05E9\u05D4\u05D4 ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("seg-on", !!ctx_r2.form.get("isActive")?.value);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg-off", !ctx_r2.form.get("isActive")?.value);
  }
}
function OrgDialogComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 18)(2, "h3");
    \u0275\u0275text(3, "\u05DE\u05E0\u05D5\u05D9 \u05D5\u05DE\u05D2\u05D1\u05DC\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA, \u05DE\u05DB\u05E1\u05D5\u05EA \u05D5\u05E1\u05D8\u05D8\u05D5\u05E1 \u05D0\u05E8\u05D2\u05D5\u05DF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 21)(7, "label");
    \u0275\u0275text(8, "\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 23);
    \u0275\u0275element(10, "kendo-dropdownlist", 65);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 21)(12, "label");
    \u0275\u0275text(13, "\u05DE\u05E7\u05E1\u05D9\u05DE\u05D5\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 23);
    \u0275\u0275element(15, "kendo-numerictextbox", 66);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 21)(17, "label");
    \u0275\u0275text(18, "\u05DE\u05E7\u05E1\u05D9\u05DE\u05D5\u05DD \u05EA\u05E7\u05DC\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 23);
    \u0275\u0275element(20, "kendo-numerictextbox", 67);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(21, OrgDialogComponent_Conditional_12_Conditional_21_Template, 9, 4, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("data", ctx_r2.plans)("valuePrimitive", true);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275property("min", 1)("max", 9999)("decimals", 0);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275property("min", 1)("max", 999999)("decimals", 0);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isEdit ? 21 : -1);
  }
}
function OrgDialogComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 18)(2, "h3");
    \u0275\u0275text(3, "\u05E4\u05E8\u05D8\u05D9 \u05D7\u05D9\u05D5\u05D1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "\u05E4\u05E8\u05D8\u05D9 \u05D1\u05E0\u05E7, \u05D0\u05E9\u05E8\u05D0\u05D9 \u05D5\u05D0\u05DE\u05E6\u05E2\u05D9 \u05EA\u05E9\u05DC\u05D5\u05DD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 21)(7, "label");
    \u0275\u0275text(8, "\u05D1\u05E0\u05E7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 23);
    \u0275\u0275element(10, "input", 68);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 21)(12, "label");
    \u0275\u0275text(13, "\u05E1\u05E0\u05D9\u05E3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 23);
    \u0275\u0275element(15, "input", 69);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 21)(17, "label");
    \u0275\u0275text(18, "\u05DE\u05E1\u05E4\u05E8 \u05D7\u05E9\u05D1\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 23);
    \u0275\u0275element(20, "input", 70);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 21)(22, "label");
    \u0275\u0275text(23, '\u05DE\u05E1\u05E4\u05E8 \u05D1\u05D4\u05E0\u05D4"\u05D7');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 23);
    \u0275\u0275element(25, "input", 71);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275control();
  }
}
function OrgDialogComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 18)(2, "h3");
    \u0275\u0275text(3, "\u05D4\u05E2\u05E8\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "\u05D4\u05E2\u05E8\u05D5\u05EA \u05D7\u05D5\u05E4\u05E9\u05D9\u05D5\u05EA \u05E2\u05DC \u05D4\u05D0\u05E8\u05D2\u05D5\u05DF");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "kendo-textarea", 72);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("rows", 8);
    \u0275\u0275control();
  }
}
function OrgDialogComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-loader", 10);
  }
}
function OrgDialogComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2713 ");
  }
}
function OrgDialogComponent_Conditional_23_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 85)(1, "input", 86);
    \u0275\u0275listener("change", function OrgDialogComponent_Conditional_23_Conditional_11_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleEnrichField("logoUrl"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 87);
    \u0275\u0275text(3, "\u05DC\u05D5\u05D2\u05D5");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "img", 88);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("row-off", !ctx_r2.isEnrichSelected("logoUrl"));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isEnrichSelected("logoUrl"));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r2.enrichResult().logoUrl, \u0275\u0275sanitizeUrl);
  }
}
function OrgDialogComponent_Conditional_23_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 85)(1, "input", 86);
    \u0275\u0275listener("change", function OrgDialogComponent_Conditional_23_Conditional_12_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleEnrichField("businessNumber"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 87);
    \u0275\u0275text(3, "\u05D7.\u05E4. / \u05E2\u05D5\u05E1\u05E7 \u05DE\u05D5\u05E8\u05E9\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 89);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("row-off", !ctx_r2.isEnrichSelected("businessNumber"));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isEnrichSelected("businessNumber"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.enrichResult().businessNumber);
  }
}
function OrgDialogComponent_Conditional_23_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 85)(1, "input", 86);
    \u0275\u0275listener("change", function OrgDialogComponent_Conditional_23_Conditional_13_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleEnrichField("phone"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 87);
    \u0275\u0275text(3, "\u05D8\u05DC\u05E4\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 89);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("row-off", !ctx_r2.isEnrichSelected("phone"));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isEnrichSelected("phone"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.enrichResult().phone);
  }
}
function OrgDialogComponent_Conditional_23_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 85)(1, "input", 86);
    \u0275\u0275listener("change", function OrgDialogComponent_Conditional_23_Conditional_14_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleEnrichField("address"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 87);
    \u0275\u0275text(3, "\u05DB\u05EA\u05D5\u05D1\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 89);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("row-off", !ctx_r2.isEnrichSelected("address"));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isEnrichSelected("address"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.enrichResult().address);
  }
}
function OrgDialogComponent_Conditional_23_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 85)(1, "input", 86);
    \u0275\u0275listener("change", function OrgDialogComponent_Conditional_23_Conditional_15_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleEnrichField("city"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 87);
    \u0275\u0275text(3, "\u05E2\u05D9\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 89);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("row-off", !ctx_r2.isEnrichSelected("city"));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isEnrichSelected("city"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.enrichResult().city);
  }
}
function OrgDialogComponent_Conditional_23_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 85)(1, "input", 86);
    \u0275\u0275listener("change", function OrgDialogComponent_Conditional_23_Conditional_16_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleEnrichField("website"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 87);
    \u0275\u0275text(3, "\u05D0\u05EA\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 90);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("row-off", !ctx_r2.isEnrichSelected("website"));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isEnrichSelected("website"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.enrichResult().website);
  }
}
function OrgDialogComponent_Conditional_23_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 85)(1, "input", 86);
    \u0275\u0275listener("change", function OrgDialogComponent_Conditional_23_Conditional_17_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleEnrichField("contactName"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 87);
    \u0275\u0275text(3, "\u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 89);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("row-off", !ctx_r2.isEnrichSelected("contactName"));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isEnrichSelected("contactName"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.enrichResult().contactName);
  }
}
function OrgDialogComponent_Conditional_23_Conditional_18_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92)(1, "span", 93);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 94);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const src_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("src-found", src_r16.status === "found")("src-miss", src_r16.status === "not_found")("src-skip", src_r16.status === "skipped")("src-err", src_r16.status === "error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", src_r16.status === "found" ? "\u2713" : src_r16.status === "skipped" ? "\u2014" : src_r16.status === "error" ? "\u26A0" : "\u2717", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(src_r16.name);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("src-badge src-badge-", src_r16.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", src_r16.status === "found" ? "\u05E0\u05DE\u05E6\u05D0" : src_r16.status === "not_found" ? "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0" : src_r16.status === "skipped" ? "\u05D3\u05D5\u05DC\u05D2" : "\u05E9\u05D2\u05D9\u05D0\u05D4", " ");
  }
}
function OrgDialogComponent_Conditional_23_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 91);
    \u0275\u0275text(2, "\u05DE\u05E7\u05D5\u05E8\u05D5\u05EA \u05E9\u05E0\u05E1\u05E8\u05E7\u05D5:");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, OrgDialogComponent_Conditional_23_Conditional_18_For_4_Template, 7, 14, "div", 92, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.enrichSources());
  }
}
function OrgDialogComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "kendo-dialog", 73);
    \u0275\u0275listener("close", function OrgDialogComponent_Conditional_23_Template_kendo_dialog_close_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEnrichDlg());
    });
    \u0275\u0275elementStart(1, "div", 74)(2, "div", 75)(3, "span", 76);
    \u0275\u0275text(4, "\u{1F916}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "strong");
    \u0275\u0275text(7, "\u05E0\u05DE\u05E6\u05D0\u05D5 \u05D4\u05E4\u05E8\u05D8\u05D9\u05DD \u05D4\u05D1\u05D0\u05D9\u05DD \u05E2\u05D1\u05D5\u05E8:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 77);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 78);
    \u0275\u0275conditionalCreate(11, OrgDialogComponent_Conditional_23_Conditional_11_Template, 5, 4, "label", 79);
    \u0275\u0275conditionalCreate(12, OrgDialogComponent_Conditional_23_Conditional_12_Template, 6, 4, "label", 79);
    \u0275\u0275conditionalCreate(13, OrgDialogComponent_Conditional_23_Conditional_13_Template, 6, 4, "label", 79);
    \u0275\u0275conditionalCreate(14, OrgDialogComponent_Conditional_23_Conditional_14_Template, 6, 4, "label", 79);
    \u0275\u0275conditionalCreate(15, OrgDialogComponent_Conditional_23_Conditional_15_Template, 6, 4, "label", 79);
    \u0275\u0275conditionalCreate(16, OrgDialogComponent_Conditional_23_Conditional_16_Template, 6, 4, "label", 79);
    \u0275\u0275conditionalCreate(17, OrgDialogComponent_Conditional_23_Conditional_17_Template, 6, 4, "label", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, OrgDialogComponent_Conditional_23_Conditional_18_Template, 5, 0, "div", 80);
    \u0275\u0275elementStart(19, "div", 81);
    \u0275\u0275text(20, " \u05D4\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05E0\u05D0\u05E1\u05E4\u05D5 \u05DE\u05D4\u05E8\u05E9\u05EA \u2014 \u05D1\u05D3\u05D5\u05E7 \u05D5\u05D0\u05E9\u05E8 \u05DC\u05E4\u05E0\u05D9 \u05E9\u05DE\u05D9\u05E8\u05D4. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "kendo-dialog-actions")(22, "div", 82)(23, "button", 83);
    \u0275\u0275listener("click", function OrgDialogComponent_Conditional_23_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyEnrichment());
    });
    \u0275\u0275text(24, "\u2713 \u05D4\u05D7\u05DC \u05E4\u05E8\u05D8\u05D9\u05DD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 84);
    \u0275\u0275listener("click", function OrgDialogComponent_Conditional_23_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEnrichDlg());
    });
    \u0275\u0275text(26, "\u05D1\u05D9\u05D8\u05D5\u05DC");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("width", 480);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.form.get("companyName")?.value);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.enrichResult()?.logoUrl ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.enrichResult()?.businessNumber ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.enrichResult()?.phone ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.enrichResult()?.address ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.enrichResult()?.city ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.enrichResult()?.website ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.enrichResult()?.contactName ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.enrichSources().length ? 18 : -1);
  }
}
var OrgDialogComponent = class _OrgDialogComponent {
  fb;
  svc;
  upload;
  zone;
  cdr;
  refSvc;
  http;
  sanitizer;
  aiProcessing;
  org = null;
  closed = new EventEmitter();
  saved = new EventEmitter();
  saving = false;
  uploading = false;
  enriching = signal(
    false,
    ...ngDevMode ? [{ debugName: "enriching" }] : (
      /* istanbul ignore next */
      []
    )
  );
  enrichMsg = signal(
    "",
    ...ngDevMode ? [{ debugName: "enrichMsg" }] : (
      /* istanbul ignore next */
      []
    )
  );
  enrichResult = signal(
    null,
    ...ngDevMode ? [{ debugName: "enrichResult" }] : (
      /* istanbul ignore next */
      []
    )
  );
  enrichSources = signal(
    [],
    ...ngDevMode ? [{ debugName: "enrichSources" }] : (
      /* istanbul ignore next */
      []
    )
  );
  enrichSelected = signal(
    /* @__PURE__ */ new Set(),
    ...ngDevMode ? [{ debugName: "enrichSelected" }] : (
      /* istanbul ignore next */
      []
    )
  );
  showEnrichDlg = signal(
    false,
    ...ngDevMode ? [{ debugName: "showEnrichDlg" }] : (
      /* istanbul ignore next */
      []
    )
  );
  errorMsg = "";
  form;
  logoPreview = null;
  activeGroup = signal(
    "general",
    ...ngDevMode ? [{ debugName: "activeGroup" }] : (
      /* istanbul ignore next */
      []
    )
  );
  countries = signal(
    [],
    ...ngDevMode ? [{ debugName: "countries" }] : (
      /* istanbul ignore next */
      []
    )
  );
  languages = signal(
    [],
    ...ngDevMode ? [{ debugName: "languages" }] : (
      /* istanbul ignore next */
      []
    )
  );
  currencies = signal(
    [],
    ...ngDevMode ? [{ debugName: "currencies" }] : (
      /* istanbul ignore next */
      []
    )
  );
  mapVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "mapVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  mapLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "mapLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  mapError = signal(
    "",
    ...ngDevMode ? [{ debugName: "mapError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  mapUrl = signal(
    null,
    ...ngDevMode ? [{ debugName: "mapUrl" }] : (
      /* istanbul ignore next */
      []
    )
  );
  showMapPref = signal(
    false,
    ...ngDevMode ? [{ debugName: "showMapPref" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // מסונכרן עם form.showMapInDialog
  plans = [
    { label: "\u05D1\u05E1\u05D9\u05E1\u05D9", value: "basic" },
    { label: "\u05DE\u05E7\u05E6\u05D5\u05E2\u05D9", value: "pro" },
    { label: "\u05D0\u05E8\u05D2\u05D5\u05E0\u05D9", value: "enterprise" }
  ];
  orgTypes = [
    { value: "SOFTWARE_HOUSE", label: "\u05D1\u05D9\u05EA \u05EA\u05D5\u05DB\u05E0\u05D4" },
    { value: "IMPLEMENTER", label: "\u05DE\u05D9\u05D9\u05E9\u05DD" },
    { value: "CLIENT", label: "\u05DC\u05E7\u05D5\u05D7" }
  ];
  groups = [
    { id: "general", text: "\u05E4\u05E8\u05D8\u05D9 \u05D0\u05E8\u05D2\u05D5\u05DF", icon: buildingsIcon },
    { id: "contact", text: "\u05E4\u05E8\u05D8\u05D9 \u05E7\u05E9\u05E8", icon: userIcon },
    { id: "address", text: "\u05DB\u05EA\u05D5\u05D1\u05EA", icon: homeIcon },
    { id: "locale", text: "\u05E9\u05E4\u05D4 \u05D5\u05DE\u05D8\u05D1\u05E2", icon: globeIcon },
    { id: "plan", text: "\u05DE\u05E0\u05D5\u05D9 \u05D5\u05DE\u05D2\u05D1\u05DC\u05D5\u05EA", icon: checkCircleIcon },
    { id: "bank", text: "\u05E4\u05E8\u05D8\u05D9 \u05D7\u05D9\u05D5\u05D1", icon: walletIcon },
    { id: "notes", text: "\u05D4\u05E2\u05E8\u05D5\u05EA", icon: pencilIcon }
  ];
  get isEdit() {
    return !!this.org;
  }
  get title() {
    return this.isEdit ? `\u05E2\u05E8\u05D9\u05DB\u05EA \u05D0\u05E8\u05D2\u05D5\u05DF \u2014 ${this.org.CompanyName}` : "\u05D0\u05E8\u05D2\u05D5\u05DF \u05D7\u05D3\u05E9";
  }
  constructor(fb, svc, upload, zone, cdr, refSvc, http, sanitizer, aiProcessing) {
    this.fb = fb;
    this.svc = svc;
    this.upload = upload;
    this.zone = zone;
    this.cdr = cdr;
    this.refSvc = refSvc;
    this.http = http;
    this.sanitizer = sanitizer;
    this.aiProcessing = aiProcessing;
    effect(() => {
      const onAddress = this.activeGroup() === "address";
      const countriesReady = this.countries().length > 0;
      const pref = this.showMapPref();
      if (onAddress && countriesReady && pref && !this.mapVisible() && !this.mapLoading()) {
        this.showMap();
      }
    });
  }
  ngOnInit() {
    this.buildForm();
    this.loadReferenceData();
    this.showMapPref.set(!!this.form.get("showMapInDialog")?.value);
    this.form.get("showMapInDialog")?.valueChanges.subscribe((v) => this.showMapPref.set(!!v));
  }
  loadReferenceData() {
    this.refSvc.getCountries("he").subscribe((c) => this.countries.set(c));
    this.refSvc.getLanguages().subscribe((l) => this.languages.set(l));
    this.refSvc.getCurrencies().subscribe((c) => this.currencies.set(c));
  }
  buildForm() {
    const o = this.org;
    if (o) {
      this.logoPreview = o.LogoUrl || null;
      this.form = this.fb.group({
        companyName: [o.CompanyName, [Validators.required, Validators.maxLength(150)]],
        businessNumber: [o.BusinessNumber ?? ""],
        email: [o.Email, [Validators.required, Validators.email]],
        phone: [o.Phone ?? ""],
        phone2: [o.Phone2 ?? ""],
        fax: [o.Fax ?? ""],
        website: [o.Website ?? ""],
        contactName: [o.ContactName ?? ""],
        address: [o.Address ?? ""],
        city: [o.City ?? ""],
        country: [o.Country ?? "\u05D9\u05E9\u05E8\u05D0\u05DC"],
        planType: [o.PlanType, Validators.required],
        maxUsers: [o.MaxUsers, [Validators.required, Validators.min(1)]],
        maxTickets: [o.MaxTickets, [Validators.required, Validators.min(1)]],
        isActive: [o.IsActive],
        logoUrl: [o.LogoUrl ?? ""],
        bankName: [o.BankName ?? ""],
        bankBranch: [o.BankBranch ?? ""],
        bankAccount: [o.BankAccount ?? ""],
        accountingRef: [o.AccountingRef ?? ""],
        notes: [o.Notes ?? ""],
        countryCode: [o.CountryCode ?? "IL"],
        defaultLanguageCode: [o.DefaultLanguageCode ?? "he"],
        defaultCurrencyCode: [o.DefaultCurrencyCode ?? "ILS"],
        showMapInDialog: [!!o.ShowMapInDialog],
        orgType: [o.OrgType ?? "SOFTWARE_HOUSE"]
      });
    } else {
      this.form = this.fb.group({
        tenantCode: ["", [Validators.required, Validators.pattern(/^[A-Z]{3}_[0-9]+$/)]],
        companyName: ["", [Validators.required, Validators.maxLength(150)]],
        businessNumber: [""],
        email: ["", [Validators.required, Validators.email]],
        phone: [""],
        phone2: [""],
        fax: [""],
        website: [""],
        contactName: [""],
        address: [""],
        city: [""],
        country: ["\u05D9\u05E9\u05E8\u05D0\u05DC"],
        planType: ["basic", Validators.required],
        maxUsers: [10, [Validators.required, Validators.min(1)]],
        maxTickets: [200, [Validators.required, Validators.min(1)]],
        logoUrl: [""],
        bankName: [""],
        bankBranch: [""],
        bankAccount: [""],
        accountingRef: [""],
        notes: [""],
        countryCode: ["IL"],
        defaultLanguageCode: ["he"],
        defaultCurrencyCode: ["ILS"],
        showMapInDialog: [false],
        orgType: ["SOFTWARE_HOUSE"]
      });
    }
  }
  onLogoSelect(event) {
    const file = event.target.files?.[0];
    if (!file)
      return;
    this.uploading = true;
    this.errorMsg = "";
    const img = new Image();
    const reader = new FileReader();
    reader.onload = (ev) => {
      img.onload = () => {
        const MAX = 300;
        let w = img.width, h = img.height;
        if (w > MAX || h > MAX) {
          if (w > h) {
            h = Math.round(h * MAX / w);
            w = MAX;
          } else {
            w = Math.round(w * MAX / h);
            h = MAX;
          }
        }
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        canvas.getContext("2d").drawImage(img, 0, 0, w, h);
        const dataUrl = canvas.toDataURL("image/png", 0.85);
        canvas.toBlob((blob) => {
          if (!blob) {
            this.zone.run(() => {
              this.uploading = false;
            });
            return;
          }
          const compressed = new File([blob], file.name, { type: "image/png" });
          this.zone.run(() => {
            this.logoPreview = dataUrl;
            this.cdr.detectChanges();
            this.upload.uploadLogo(compressed).subscribe({
              next: (r) => {
                this.uploading = false;
                if (r.success)
                  this.form.get("logoUrl")?.setValue(r.logoUrl);
                this.cdr.detectChanges();
              },
              error: () => {
                this.uploading = false;
                this.errorMsg = "\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D4\u05E2\u05DC\u05D0\u05EA \u05D4\u05DC\u05D5\u05D2\u05D5";
                this.cdr.detectChanges();
              }
            });
          });
        }, "image/png", 0.85);
      };
      img.src = ev.target?.result;
    };
    reader.readAsDataURL(file);
  }
  removeLogo() {
    this.logoPreview = null;
    this.form.get("logoUrl")?.setValue("");
  }
  onTenantCodeInput(event) {
    const el = event.target;
    const val = el.value.toUpperCase();
    el.value = val;
    this.form.get("tenantCode")?.setValue(val, { emitEvent: false });
  }
  close() {
    this.closed.emit();
  }
  enrichFromAI() {
    const name = (this.form.get("companyName")?.value || "").trim();
    if (!name)
      return;
    this.enriching.set(true);
    this.enrichMsg.set("");
    this.aiProcessing.start({
      title: `\u05DE\u05E0\u05EA\u05D7 \u05E4\u05E8\u05D8\u05D9\u05DD \u05D0\u05D5\u05D3\u05D5\u05EA "${name}"`,
      subtitle: `AI \u05DE\u05D7\u05E4\u05E9 \u05DE\u05D9\u05D3\u05E2 \u05E2\u05E1\u05E7\u05D9, \u05E4\u05E8\u05D8\u05D9 \u05E7\u05E9\u05E8 \u05D5\u05DB\u05EA\u05D5\u05D1\u05EA \u05E2\u05D1\u05D5\u05E8 \u05D4\u05D0\u05E8\u05D2\u05D5\u05DF \u05D4\u05E0\u05D1\u05D7\u05E8`,
      model: "claude-sonnet-4-6",
      stages: [
        "\u05DE\u05D7\u05E4\u05E9 \u05D0\u05EA \u05D4\u05D0\u05E8\u05D2\u05D5\u05DF \u05D1\u05E8\u05E9\u05EA",
        "\u05DE\u05E0\u05EA\u05D7 \u05DE\u05E7\u05D5\u05E8\u05D5\u05EA \u05DE\u05D9\u05D3\u05E2",
        "\u05DE\u05D0\u05DE\u05EA \u05E4\u05E8\u05D8\u05D9 \u05E7\u05E9\u05E8",
        "\u05DE\u05E1\u05DB\u05DD \u05D5\u05DE\u05D9\u05D9\u05E6\u05E8 \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA"
      ]
    });
    this.http.get(`/api/ai/company-lookup?name=${encodeURIComponent(name)}`).subscribe({
      next: (r) => {
        this.enriching.set(false);
        if (!r.success || !r.data) {
          this.aiProcessing.error("\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E4\u05E8\u05D8\u05D9\u05DD \u05E2\u05D1\u05D5\u05E8 \u05D4\u05D0\u05E8\u05D2\u05D5\u05DF");
          this.enrichMsg.set("\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E4\u05E8\u05D8\u05D9\u05DD");
          return;
        }
        this.aiProcessing.complete();
        this.enrichResult.set(r.data);
        this.enrichSources.set(r.sources || []);
        const fields = ["logoUrl", "businessNumber", "phone", "address", "city", "website", "contactName"];
        const preSelected = new Set(fields.filter((f) => r.data[f]));
        this.enrichSelected.set(preSelected);
        this.showEnrichDlg.set(true);
      },
      error: (err) => {
        this.enriching.set(false);
        const msg = err.error?.message ?? "\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D7\u05D9\u05E4\u05D5\u05E9";
        this.aiProcessing.error(msg);
        this.enrichMsg.set(msg);
      }
    });
  }
  toggleEnrichField(field) {
    const s = new Set(this.enrichSelected());
    s.has(field) ? s.delete(field) : s.add(field);
    this.enrichSelected.set(s);
  }
  isEnrichSelected(field) {
    return this.enrichSelected().has(field);
  }
  applyEnrichment() {
    const d = this.enrichResult();
    const sel = this.enrichSelected();
    if (!d)
      return;
    if (sel.has("businessNumber") && d.businessNumber)
      this.form.get("businessNumber")?.setValue(d.businessNumber);
    if (sel.has("phone") && d.phone)
      this.form.get("phone")?.setValue(d.phone);
    if (sel.has("address") && d.address)
      this.form.get("address")?.setValue(d.address);
    if (sel.has("city") && d.city)
      this.form.get("city")?.setValue(d.city);
    if (sel.has("website") && d.website)
      this.form.get("website")?.setValue(d.website);
    if (sel.has("contactName") && d.contactName)
      this.form.get("contactName")?.setValue(d.contactName);
    if (sel.has("logoUrl") && d.logoUrl) {
      this.form.get("logoUrl")?.setValue(d.logoUrl);
      this.logoPreview = d.logoUrl;
    }
    this.showEnrichDlg.set(false);
    this.enrichResult.set(null);
    this.enrichSources.set([]);
    const count = sel.size;
    this.enrichMsg.set(`\u2713 ${count} \u05E4\u05E8\u05D8\u05D9\u05DD \u05DE\u05D5\u05DC\u05D0\u05D5 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA`);
    setTimeout(() => this.enrichMsg.set(""), 4e3);
  }
  closeEnrichDlg() {
    this.showEnrichDlg.set(false);
    this.enrichResult.set(null);
    this.enrichSources.set([]);
  }
  showMap() {
    const addr = this.form.get("address")?.value?.trim() || "";
    const city = this.form.get("city")?.value?.trim() || "";
    const cc = this.form.get("countryCode")?.value || "";
    const country = this.countries().find((c) => c.CountryCode === cc);
    const query = [addr, city, country?.ShortName].filter(Boolean).join(", ");
    if (!query) {
      this.mapError.set("\u05D9\u05E9 \u05DC\u05DE\u05DC\u05D0 \u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D5 \u05E2\u05D9\u05E8 \u05EA\u05D7\u05D9\u05DC\u05D4");
      return;
    }
    this.mapLoading.set(true);
    this.mapError.set("");
    this.mapVisible.set(false);
    this.http.get("https://nominatim.openstreetmap.org/search", {
      params: { q: query, format: "json", limit: "1", "accept-language": "he" }
    }).subscribe({
      next: (results) => {
        this.mapLoading.set(false);
        if (!results?.length) {
          this.mapError.set("\u05D4\u05DB\u05EA\u05D5\u05D1\u05EA \u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D4 \u05D1\u05DE\u05E4\u05D4");
          return;
        }
        const { lat, lon } = results[0];
        const d = 8e-3;
        const bbox = `${+lon - d},${+lat - d},${+lon + d},${+lat + d}`;
        const url = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;
        this.mapUrl.set(this.sanitizer.bypassSecurityTrustResourceUrl(url));
        this.mapVisible.set(true);
      },
      error: () => {
        this.mapLoading.set(false);
        this.mapError.set("\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D8\u05E2\u05D9\u05E0\u05EA \u05D4\u05DE\u05E4\u05D4");
      }
    });
  }
  groupFields = {
    general: ["tenantCode", "companyName", "businessNumber", "orgType"],
    contact: ["contactName", "email", "phone", "phone2", "fax", "website"],
    address: ["countryCode", "city", "address"],
    locale: ["defaultLanguageCode", "defaultCurrencyCode"],
    plan: ["planType", "maxUsers", "maxTickets", "isActive"],
    bank: ["bankName", "bankBranch", "bankAccount", "accountingRef"],
    notes: ["notes"]
  };
  navigateToFirstError() {
    for (const [group, fields] of Object.entries(this.groupFields)) {
      if (fields.some((f) => this.form.get(f)?.invalid)) {
        this.activeGroup.set(group);
        return;
      }
    }
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
    const payload = __spreadValues({}, this.form.value);
    if (payload.tenantCode)
      payload.tenantCode = payload.tenantCode.toUpperCase();
    const obs = this.isEdit ? this.svc.update(this.org.TenantID, payload) : this.svc.create(payload);
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
  static \u0275fac = function OrgDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrgDialogComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(OrganizationService), \u0275\u0275directiveInject(UploadService), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ReferenceService), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(AiProcessingService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrgDialogComponent, selectors: [["app-org-dialog"]], inputs: { org: "org" }, outputs: { closed: "closed", saved: "saved" }, decls: 24, vars: 17, consts: [[3, "close", "title", "width", "minWidth"], [1, "org-dialog-body"], [1, "org-nav"], ["type", "button", 1, "nav-item", 3, "active"], [1, "org-content"], ["novalidate", "", 3, "formGroup"], [1, "form-error-banner"], [1, "content-section"], [1, "dialog-footer"], ["kendoButton", "", 1, "btn-save", 3, "click", "disabled"], ["type", "pulsing", "size", "small"], ["kendoButton", "", "fillMode", "outline", 3, "click", "disabled"], ["title", "\u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05D7\u05D9\u05E4\u05D5\u05E9 AI", 3, "width"], ["type", "button", 1, "nav-item", 3, "click"], [1, "nav-icon"], [3, "icon"], [1, "nav-text"], [1, "nav-indicator"], [1, "section-header"], [1, "general-layout"], [1, "general-fields"], [1, "form-row"], [1, "req"], [1, "input-col"], ["kendoTextBox", "", "formControlName", "companyName", 1, "company-name-input"], [1, "company-name-sub"], ["type", "button", "title", "\u05D7\u05E4\u05E9 \u05E4\u05E8\u05D8\u05D9\u05DD \u05D1\u05E8\u05E9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA AI", 1, "btn-ai-enrich", 3, "click", "disabled"], [1, "pi", "pi-sparkles"], [1, "enrich-msg", 3, "enrich-ok", "enrich-err"], [1, "err"], ["kendoTextBox", "", "formControlName", "businessNumber", "placeholder", "123456789"], ["formControlName", "orgType", "textField", "label", "valueField", "value", 3, "data", "valuePrimitive"], [1, "logo-aside"], [1, "logo-label"], [1, "logo-preview-box"], [1, "logo-placeholder"], [1, "logo-btns"], [1, "btn-logo-upload"], [1, "spin"], ["type", "file", "accept", ".png,.jpg,.jpeg,.svg,.webp", 2, "display", "none", 3, "change"], ["type", "button", 1, "btn-logo-delete", 3, "click", "disabled"], [1, "logo-hint"], ["kendoTextBox", "", "formControlName", "tenantCode", "placeholder", "\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: ABC_12345", 3, "input"], [1, "enrich-msg"], ["alt", "\u05DC\u05D5\u05D2\u05D5", 1, "logo-preview-img", 3, "src"], ["kendoTextBox", "", "formControlName", "contactName"], ["kendoTextBox", "", "formControlName", "email", "type", "email"], ["kendoTextBox", "", "formControlName", "phone", "placeholder", "050-0000000"], ["kendoTextBox", "", "formControlName", "phone2", "placeholder", "050-0000000"], ["kendoTextBox", "", "formControlName", "fax", "placeholder", "03-0000000"], ["kendoTextBox", "", "formControlName", "website", "placeholder", "www.example.com"], ["formControlName", "countryCode", "textField", "displayName", "valueField", "CountryCode", "placeholder", "\u05D1\u05D7\u05E8 \u05DE\u05D3\u05D9\u05E0\u05D4...", 3, "data", "valuePrimitive", "filterable"], ["kendoTextBox", "", "formControlName", "city"], ["kendoTextBox", "", "formControlName", "address", "placeholder", "\u05E8\u05D7\u05D5\u05D1 \u05D5\u05DE\u05E1\u05E4\u05E8"], [1, "map-row"], [1, "seg-ctrl"], ["type", "button", 1, "seg-btn", 3, "click"], [1, "map-loading-hint"], [1, "map-error"], [1, "map-container"], ["type", "pulsing", "size", "small", "themeColor", "primary"], ["loading", "lazy", "referrerpolicy", "no-referrer", "title", "\u05DE\u05E4\u05EA \u05DE\u05D9\u05E7\u05D5\u05DD \u05D4\u05D0\u05E8\u05D2\u05D5\u05DF", 1, "map-frame", 3, "src"], ["target", "_blank", "rel", "noopener", 1, "map-osm-link", 3, "href"], ["formControlName", "defaultLanguageCode", "textField", "displayName", "valueField", "LanguageCode", "placeholder", "\u05D1\u05D7\u05E8 \u05E9\u05E4\u05D4...", 3, "data", "valuePrimitive"], ["formControlName", "defaultCurrencyCode", "textField", "displayName", "valueField", "CurrencyCode", "placeholder", "\u05D1\u05D7\u05E8 \u05DE\u05D8\u05D1\u05E2...", 3, "data", "valuePrimitive"], ["formControlName", "planType", "textField", "label", "valueField", "value", 3, "data", "valuePrimitive"], ["formControlName", "maxUsers", "format", "n0", 3, "min", "max", "decimals"], ["formControlName", "maxTickets", "format", "n0", 3, "min", "max", "decimals"], ["kendoTextBox", "", "formControlName", "bankName", "placeholder", "\u05E9\u05DD \u05D4\u05D1\u05E0\u05E7"], ["kendoTextBox", "", "formControlName", "bankBranch", "placeholder", "\u05DE\u05E1\u05E4\u05E8 \u05E1\u05E0\u05D9\u05E3"], ["kendoTextBox", "", "formControlName", "bankAccount"], ["kendoTextBox", "", "formControlName", "accountingRef", "placeholder", "\u05DE\u05E1\u05E4\u05E8 \u05D1\u05D4\u05E0\u05D4\u05DC\u05EA \u05D7\u05E9\u05D1\u05D5\u05E0\u05D5\u05EA"], ["formControlName", "notes", "resizable", "vertical", "placeholder", "\u05D4\u05E2\u05E8\u05D5\u05EA \u05D0\u05D5\u05E4\u05E6\u05D9\u05D5\u05E0\u05DC\u05D9\u05D5\u05EA...", 3, "rows"], ["title", "\u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05D7\u05D9\u05E4\u05D5\u05E9 AI", 3, "close", "width"], [1, "enrich-dlg-body"], [1, "enrich-dlg-intro"], [1, "enrich-dlg-icon"], [1, "enrich-dlg-name"], [1, "enrich-rows"], [1, "enrich-row", 3, "row-off"], [1, "enrich-sources"], [1, "enrich-dlg-note"], [1, "enrich-dlg-footer"], ["type", "button", 1, "btn-save", 3, "click"], ["type", "button", 1, "btn-cancel", 3, "click"], [1, "enrich-row"], ["type", "checkbox", 1, "enrich-cb", 3, "change", "checked"], [1, "enrich-lbl"], ["alt", "\u05DC\u05D5\u05D2\u05D5", 1, "enrich-logo", 3, "src"], [1, "enrich-val"], [1, "enrich-val", "ltr"], [1, "enrich-sources-title"], [1, "enrich-source-row"], [1, "src-icon"], [1, "src-name"]], template: function OrgDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "kendo-dialog", 0);
      \u0275\u0275listener("close", function OrgDialogComponent_Template_kendo_dialog_close_0_listener() {
        return ctx.close();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "nav", 2);
      \u0275\u0275repeaterCreate(3, OrgDialogComponent_For_4_Template, 6, 5, "button", 3, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "form", 5);
      \u0275\u0275conditionalCreate(7, OrgDialogComponent_Conditional_7_Template, 2, 1, "div", 6);
      \u0275\u0275conditionalCreate(8, OrgDialogComponent_Conditional_8_Template, 47, 12, "div", 7);
      \u0275\u0275conditionalCreate(9, OrgDialogComponent_Conditional_9_Template, 39, 1, "div", 7);
      \u0275\u0275conditionalCreate(10, OrgDialogComponent_Conditional_10_Template, 34, 10, "div", 7);
      \u0275\u0275conditionalCreate(11, OrgDialogComponent_Conditional_11_Template, 16, 4, "div", 7);
      \u0275\u0275conditionalCreate(12, OrgDialogComponent_Conditional_12_Template, 22, 9, "div", 7);
      \u0275\u0275conditionalCreate(13, OrgDialogComponent_Conditional_13_Template, 26, 0, "div", 7);
      \u0275\u0275conditionalCreate(14, OrgDialogComponent_Conditional_14_Template, 7, 1, "div", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "kendo-dialog-actions")(16, "div", 8)(17, "button", 9);
      \u0275\u0275listener("click", function OrgDialogComponent_Template_button_click_17_listener() {
        return ctx.save();
      });
      \u0275\u0275conditionalCreate(18, OrgDialogComponent_Conditional_18_Template, 1, 0, "kendo-loader", 10)(19, OrgDialogComponent_Conditional_19_Template, 1, 0);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 11);
      \u0275\u0275listener("click", function OrgDialogComponent_Template_button_click_21_listener() {
        return ctx.close();
      });
      \u0275\u0275text(22, " \u05D1\u05D9\u05D8\u05D5\u05DC ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(23, OrgDialogComponent_Conditional_23_Template, 27, 10, "kendo-dialog", 12);
    }
    if (rf & 2) {
      \u0275\u0275property("title", ctx.title)("width", 860)("minWidth", 600);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.groups);
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMsg ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeGroup() === "general" ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeGroup() === "contact" ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeGroup() === "address" ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeGroup() === "locale" ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeGroup() === "plan" ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeGroup() === "bank" ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeGroup() === "notes" ? 14 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.saving || ctx.uploading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.saving || ctx.uploading ? 18 : 19);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.uploading ? "\u05DE\u05DE\u05EA\u05D9\u05DF \u05DC\u05D4\u05E2\u05DC\u05D0\u05EA \u05DC\u05D5\u05D2\u05D5..." : ctx.isEdit ? "\u05E9\u05DE\u05D5\u05E8 \u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD" : "\u05E6\u05D5\u05E8 \u05D0\u05E8\u05D2\u05D5\u05DF", " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.saving);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showEnrichDlg() ? 23 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, DialogsModule, DialogComponent, DialogActionsComponent, TextBoxModule, TextBoxDirective, NumericTextBoxModule, NumericTextBoxComponent, SwitchModule, TextAreaModule, TextAreaComponent, DropDownListModule, DropDownListComponent, ButtonsModule, ButtonComponent, IndicatorsModule, LoaderComponent, IconsModule, SVGIconComponent], styles: ['\n[_nghost-%COMP%]     .k-dialog {\n  border-radius: 14px !important;\n  overflow: hidden;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.16), 0 2px 8px rgba(0, 0, 0, 0.08) !important;\n  border: 1px solid var(--sf-border) !important;\n  font-family:\n    "Noto Sans Hebrew",\n    "Segoe UI",\n    sans-serif;\n}\n[_nghost-%COMP%]     .k-dialog-titlebar {\n  background: var(--sf-bg-card) !important;\n  border-bottom: 1px solid var(--sf-border) !important;\n  padding: 14px 20px !important;\n  direction: rtl;\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]     .k-dialog-title {\n  font-size: 1.05rem !important;\n  font-weight: 700 !important;\n  color: var(--sf-text) !important;\n  flex: 1;\n}\n[_nghost-%COMP%]     .k-dialog-close {\n  color: var(--sf-text-secondary) !important;\n}\n[_nghost-%COMP%]     .k-dialog-close:hover {\n  color: var(--sf-text) !important;\n  background: var(--sf-bg-hover) !important;\n}\n[_nghost-%COMP%]     .k-dialog-content {\n  padding: 0 !important;\n  background: var(--sf-bg) !important;\n  direction: rtl;\n}\n[_nghost-%COMP%]     .k-dialog-actions {\n  background: var(--sf-bg-card) !important;\n  border-top: 1px solid var(--sf-border) !important;\n  padding: 12px 20px !important;\n  direction: rtl !important;\n}\n[_nghost-%COMP%]     .k-input {\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n  font-size: 0.9rem !important;\n  direction: rtl !important;\n  border-color: var(--sf-border) !important;\n  border-radius: 8px !important;\n  background: var(--sf-bg-card) !important;\n  color: var(--sf-text) !important;\n  width: 100%;\n}\n[_nghost-%COMP%]     .k-input:focus, \n[_nghost-%COMP%]     .k-input.k-focus {\n  border-color: var(--sf-primary) !important;\n  box-shadow: 0 0 0 2px rgba(var(--sf-primary-rgb, 13, 71, 255), 0.12) !important;\n}\n[_nghost-%COMP%]     .k-input-inner {\n  direction: rtl !important;\n  text-align: right !important;\n}\n[_nghost-%COMP%]     .k-numerictextbox .k-input-inner {\n  text-align: right !important;\n}\n[_nghost-%COMP%]     .k-dropdownlist {\n  width: 100% !important;\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n  direction: rtl;\n  border-radius: 8px !important;\n  border-color: var(--sf-border) !important;\n  background: var(--sf-bg-card) !important;\n}\n[_nghost-%COMP%]     .k-dropdownlist .k-input-value-text {\n  text-align: right;\n}\n[_nghost-%COMP%]     .k-dropdownlist .k-button-icon {\n  margin-inline-start: auto;\n  margin-inline-end: 0;\n}\n[_nghost-%COMP%]     .k-list-item {\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n  direction: rtl;\n  text-align: right;\n  font-size: 0.88rem;\n}\n[_nghost-%COMP%]     .k-list {\n  direction: rtl;\n}\n[_nghost-%COMP%]     .k-numerictextbox {\n  width: 100% !important;\n}\n[_nghost-%COMP%]     .k-switch {\n  direction: ltr !important;\n}\n[_nghost-%COMP%]     .k-switch-on .k-switch-thumb-wrap {\n  border-color: var(--sf-primary) !important;\n}\n[_nghost-%COMP%]     .k-switch-on .k-switch-track {\n  background-color: var(--sf-primary) !important;\n}\n[_nghost-%COMP%]     .k-textarea {\n  width: 100% !important;\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n  direction: rtl;\n  font-size: 0.9rem;\n  border-radius: 8px !important;\n  border-color: var(--sf-border) !important;\n}\n.org-dialog-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  min-height: 440px;\n  direction: rtl;\n}\n.org-nav[_ngcontent-%COMP%] {\n  width: 190px;\n  flex-shrink: 0;\n  border-inline-end: 1px solid var(--sf-border);\n  background: var(--sf-bg-card);\n  padding: 16px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border: none;\n  border-radius: 10px;\n  background: transparent;\n  cursor: pointer;\n  width: 100%;\n  text-align: right;\n  color: var(--sf-text-secondary);\n  font-size: 0.85rem;\n  font-weight: 500;\n  position: relative;\n  transition: background 0.15s, color 0.15s;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: var(--sf-primary-light, rgba(13, 71, 255, 0.08));\n  color: var(--sf-primary);\n  font-weight: 600;\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  color: var(--sf-primary);\n}\n.nav-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 7px;\n  background: var(--sf-bg);\n  color: var(--sf-text-muted);\n  flex-shrink: 0;\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  background: var(--sf-primary-light, rgba(13, 71, 255, 0.1));\n  color: var(--sf-primary);\n}\n.nav-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nav-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-end: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 20px;\n  border-radius: 2px 0 0 2px;\n  background: var(--sf-primary);\n}\n.org-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: 24px 28px;\n  overflow-y: auto;\n  background: var(--sf-bg);\n  direction: rtl;\n}\n.content-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.section-header[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0 0 2px;\n}\n.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--sf-text-muted);\n  margin: 0;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 150px 1fr;\n  align-items: start;\n  gap: 12px;\n  direction: rtl;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  padding-top: 9px;\n  text-align: right;\n}\n.req[_ngcontent-%COMP%] {\n  color: var(--sf-danger);\n  margin-right: 2px;\n}\n.input-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n.err[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--sf-danger);\n  font-weight: 500;\n}\n.seg-ctrl[_ngcontent-%COMP%] {\n  display: inline-flex;\n  direction: rtl;\n  align-self: flex-start;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.seg-btn[_ngcontent-%COMP%] {\n  padding: 7px 20px;\n  font-size: 0.82rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  border: none;\n  background: var(--sf-bg);\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.seg-btn[_ngcontent-%COMP%]    + .seg-btn[_ngcontent-%COMP%] {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.seg-btn[_ngcontent-%COMP%]:hover:not(.seg-on):not(.seg-off) {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.seg-btn.seg-on[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: #fff;\n  font-weight: 600;\n}\n.seg-btn.seg-off[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #fff;\n  font-weight: 600;\n}\n.ltr-wrap[_ngcontent-%COMP%] {\n  direction: ltr;\n  display: inline-flex;\n}\n.general-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  direction: rtl;\n}\n.general-fields[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.logo-aside[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 170px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  border-inline-start: 1px solid var(--sf-border);\n  padding-inline-start: 20px;\n}\n.logo-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  align-self: flex-start;\n  margin-bottom: 2px;\n}\n.logo-preview-box[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n  border: 1px solid var(--sf-border);\n  border-radius: 10px;\n  background: var(--sf-bg-card);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.logo-preview-img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n  padding: 8px;\n}\n.logo-placeholder[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n  border: 1.5px dashed var(--sf-border);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: var(--sf-text-muted);\n  font-size: 0.75rem;\n}\n.logo-placeholder[_ngcontent-%COMP%]   kendo-svg-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  opacity: 0.4;\n}\n.logo-btns[_ngcontent-%COMP%] {\n  width: 140px;\n  display: flex;\n  justify-content: space-between;\n  gap: 6px;\n}\n.btn-logo-upload[_ngcontent-%COMP%] {\n  flex: 1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 5px 8px;\n  border-radius: 6px;\n  cursor: pointer;\n  border: 1px solid var(--sf-border);\n  background: var(--sf-bg-card);\n  font-size: 0.76rem;\n  font-weight: 500;\n  color: var(--sf-text);\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: background 0.15s, border-color 0.15s;\n}\n.btn-logo-upload[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  border-color: var(--sf-primary);\n  color: var(--sf-primary);\n}\n.btn-logo-upload.loading[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  cursor: wait;\n}\n.btn-logo-delete[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 5px 8px;\n  border-radius: 6px;\n  cursor: pointer;\n  border: 1px solid #fca5a5;\n  background: var(--sf-bg-card);\n  font-size: 0.76rem;\n  font-weight: 500;\n  color: var(--sf-danger);\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: background 0.15s;\n}\n.btn-logo-delete[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.btn-logo-delete[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: default;\n  pointer-events: none;\n}\n.logo-hint[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: var(--sf-text-muted);\n  direction: ltr;\n  text-align: center;\n}\n.map-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.map-loading-hint[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.8rem;\n  color: var(--sf-text-secondary);\n}\n.map-error[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #ef4444;\n}\n.map-container[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n  margin-top: 4px;\n}\n.map-frame[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 260px;\n  border: none;\n}\n.map-osm-link[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n  background: rgba(255, 255, 255, 0.88);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  border: 1px solid var(--sf-border);\n  border-radius: 6px;\n  padding: 4px 10px;\n  font-size: 0.75rem;\n  color: var(--sf-text-secondary);\n  text-decoration: none;\n  direction: ltr;\n  transition: color 0.12s;\n}\n.map-osm-link[_ngcontent-%COMP%]:hover {\n  color: var(--sf-primary);\n}\n.company-name-input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.company-name-sub[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 6px;\n}\n.btn-ai-enrich[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 8px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #0D47FF);\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 700;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition: opacity 0.15s, transform 0.1s;\n  box-shadow: 0 2px 8px rgba(124, 58, 237, 0.3);\n}\n.btn-ai-enrich[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.btn-ai-enrich[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.88;\n  transform: translateY(-1px);\n}\n.btn-ai-enrich[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-ai-enrich[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.enrich-msg[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 500;\n}\n.enrich-msg.enrich-ok[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.enrich-msg.enrich-err[_ngcontent-%COMP%] {\n  color: var(--sf-danger);\n}\n.form-error-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.83rem;\n  color: #dc2626;\n  font-weight: 500;\n  margin-bottom: 12px;\n}\n.dialog-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  direction: rtl;\n}\n.btn-save[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #f97316 !important;\n  color: #fff !important;\n  border: none !important;\n  border-radius: 9px !important;\n  padding: 9px 22px !important;\n  font-size: 0.875rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: background 0.15s, box-shadow 0.15s;\n  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.3);\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #ea6c0a !important;\n  box-shadow: 0 4px 14px rgba(249, 115, 22, 0.4);\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.btn-save[_ngcontent-%COMP%]   kendo-loader[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.enrich-dlg-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  direction: rtl;\n}\n.enrich-dlg-intro[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.enrich-dlg-intro[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--sf-text-secondary);\n}\n.enrich-dlg-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.enrich-dlg-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin-top: 3px;\n}\n.enrich-rows[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--sf-border);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.enrich-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 14px;\n  border-bottom: 1px solid var(--sf-border);\n  background: var(--sf-bg-card);\n  cursor: pointer;\n  transition: background 0.12s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.enrich-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.enrich-row[_ngcontent-%COMP%]:nth-child(even) {\n  background: var(--sf-bg);\n}\n.enrich-row[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n}\n.enrich-row.row-off[_ngcontent-%COMP%] {\n  opacity: 0.45;\n}\n.enrich-row.row-off[_ngcontent-%COMP%]   .enrich-val[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n.enrich-cb[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n  accent-color: var(--sf-primary);\n  cursor: pointer;\n}\n.enrich-lbl[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--sf-text-muted);\n  min-width: 120px;\n  flex-shrink: 0;\n}\n.enrich-val[_ngcontent-%COMP%] {\n  font-size: 0.87rem;\n  font-weight: 600;\n  color: var(--sf-text);\n}\n.enrich-val.ltr[_ngcontent-%COMP%] {\n  direction: ltr;\n  font-family: "Share Tech Mono", monospace;\n}\n.enrich-logo[_ngcontent-%COMP%] {\n  height: 36px;\n  max-width: 120px;\n  object-fit: contain;\n  border-radius: 6px;\n}\n.enrich-sources[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.enrich-sources-title[_ngcontent-%COMP%] {\n  font-size: 0.73rem;\n  font-weight: 600;\n  color: var(--sf-text-muted);\n  margin-bottom: 2px;\n}\n.enrich-source-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.78rem;\n}\n.src-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  width: 18px;\n  text-align: center;\n}\n.src-icon.src-found[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.src-icon.src-miss[_ngcontent-%COMP%] {\n  color: var(--sf-text-muted);\n}\n.src-icon.src-skip[_ngcontent-%COMP%] {\n  color: var(--sf-text-muted);\n}\n.src-icon.src-err[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.src-name[_ngcontent-%COMP%] {\n  color: var(--sf-text-secondary);\n  flex: 1;\n}\n.src-badge[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n.src-badge.src-badge-found[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #15803d;\n  border: 1px solid #86efac;\n}\n.src-badge.src-badge-not_found[_ngcontent-%COMP%] {\n  background: var(--sf-bg);\n  color: var(--sf-text-muted);\n  border: 1px solid var(--sf-border);\n}\n.src-badge.src-badge-skipped[_ngcontent-%COMP%] {\n  background: var(--sf-bg);\n  color: var(--sf-text-muted);\n  border: 1px solid var(--sf-border);\n}\n.src-badge.src-badge-error[_ngcontent-%COMP%] {\n  background: #fefce8;\n  color: #92400e;\n  border: 1px solid #fde68a;\n}\n.enrich-dlg-note[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--sf-text-muted);\n  padding: 8px 12px;\n  background: #fefce8;\n  border: 1px solid #fde68a;\n  border-radius: 8px;\n}\n.enrich-dlg-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  direction: rtl;\n}\n/*# sourceMappingURL=org-dialog.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrgDialogComponent, [{
    type: Component,
    args: [{ selector: "app-org-dialog", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      DialogsModule,
      TextBoxModule,
      NumericTextBoxModule,
      SwitchModule,
      TextAreaModule,
      DropDownListModule,
      ButtonsModule,
      IndicatorsModule,
      IconsModule
    ], template: `<kendo-dialog [title]="title" (close)="close()" [width]="860" [minWidth]="600">

  <div class="org-dialog-body">

    <!-- \u2500\u2500 Sidebar Nav \u2500\u2500 -->
    <nav class="org-nav">
      @for (g of groups; track g.id) {
        <button
          type="button"
          class="nav-item"
          [class.active]="activeGroup() === g.id"
          (click)="activeGroup.set(g.id)">
          <span class="nav-icon">
            <kendo-svg-icon [icon]="g.icon" />
          </span>
          <span class="nav-text">{{ g.text }}</span>
          @if (activeGroup() === g.id) {
            <span class="nav-indicator"></span>
          }
        </button>
      }
    </nav>

    <!-- \u2500\u2500 Content Area \u2500\u2500 -->
    <div class="org-content">
      <form [formGroup]="form" novalidate>

        @if (errorMsg) {
          <div class="form-error-banner">\u26A0 {{ errorMsg }}</div>
        }

        <!-- \u2550\u2550 \u05E4\u05E8\u05D8\u05D9 \u05D0\u05E8\u05D2\u05D5\u05DF \u2550\u2550 -->
        @if (activeGroup() === 'general') {
          <div class="content-section">
            <div class="section-header">
              <h3>\u05E4\u05E8\u05D8\u05D9 \u05D0\u05E8\u05D2\u05D5\u05DF</h3>
              <p>\u05DE\u05D9\u05D3\u05E2 \u05D1\u05E1\u05D9\u05E1\u05D9 \u05D5\u05DC\u05D5\u05D2\u05D5</p>
            </div>

            <div class="general-layout">
              <div class="general-fields">

                @if (!isEdit) {
                  <div class="form-row">
                    <label>\u05E7\u05D5\u05D3 \u05D0\u05E8\u05D2\u05D5\u05DF <span class="req">*</span></label>
                    <div class="input-col">
                      <input kendoTextBox formControlName="tenantCode"
                             placeholder="\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: ABC_12345"
                             (input)="onTenantCodeInput($event)" />
                      @if (form.get('tenantCode')?.hasError('required') && form.get('tenantCode')?.touched) {
                        <small class="err">\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4</small>
                      }
                      @if (form.get('tenantCode')?.hasError('pattern') && form.get('tenantCode')?.touched) {
                        <small class="err">\u05E4\u05D5\u05E8\u05DE\u05D8: ABC_12345</small>
                      }
                    </div>
                  </div>
                }

                <div class="form-row">
                  <label>\u05E9\u05DD \u05D7\u05D1\u05E8\u05D4 <span class="req">*</span></label>
                  <div class="input-col">
                    <input kendoTextBox formControlName="companyName" class="company-name-input" />
                    <div class="company-name-sub">
                      <button type="button" class="btn-ai-enrich"
                              [disabled]="enriching() || !form.get('companyName')?.value"
                              (click)="enrichFromAI()"
                              title="\u05D7\u05E4\u05E9 \u05E4\u05E8\u05D8\u05D9\u05DD \u05D1\u05E8\u05E9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA AI">
                        <i class="pi pi-sparkles"></i>
                        {{ enriching() ? '\u05DE\u05E0\u05EA\u05D7...' : '\u05E0\u05D9\u05EA\u05D5\u05D7 AI' }}
                      </button>
                      @if (enrichMsg()) {
                        <small [class.enrich-ok]="enrichMsg().startsWith('\u2713')"
                               [class.enrich-err]="!enrichMsg().startsWith('\u2713')"
                               class="enrich-msg">{{ enrichMsg() }}</small>
                      }
                    </div>
                    @if (form.get('companyName')?.invalid && form.get('companyName')?.touched) {
                      <small class="err">\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4</small>
                    }
                  </div>
                </div>

                <div class="form-row">
                  <label>\u05DE\u05E1\u05E4\u05E8 \u05E2\u05D5\u05E1\u05E7 / \u05D7.\u05E4.</label>
                  <div class="input-col">
                    <input kendoTextBox formControlName="businessNumber" placeholder="123456789" />
                  </div>
                </div>

                <div class="form-row">
                  <label>\u05E1\u05D5\u05D2 \u05D0\u05E8\u05D2\u05D5\u05DF</label>
                  <div class="input-col">
                    <kendo-dropdownlist
                      formControlName="orgType"
                      [data]="orgTypes"
                      textField="label"
                      valueField="value"
                      [valuePrimitive]="true">
                    </kendo-dropdownlist>
                  </div>
                </div>

              </div>

              <!-- \u05DC\u05D5\u05D2\u05D5 -->
              <div class="logo-aside">
                <div class="logo-label">\u05DC\u05D5\u05D2\u05D5 \u05D7\u05D1\u05E8\u05D4</div>
                @if (logoPreview) {
                  <div class="logo-preview-box">
                    <img [src]="logoPreview" alt="\u05DC\u05D5\u05D2\u05D5" class="logo-preview-img" />
                  </div>
                } @else {
                  <div class="logo-placeholder">
                    <kendo-svg-icon [icon]="groups[0].icon" />
                    <span>\u05D0\u05D9\u05DF \u05DC\u05D5\u05D2\u05D5</span>
                  </div>
                }
                <div class="logo-btns">
                  <label class="btn-logo-upload" [class.loading]="uploading">
                    @if (uploading) { <span class="spin">\u23F3</span> } @else { \u2191 }
                    \u05D4\u05E2\u05DC\u05D0\u05D4
                    <input type="file" accept=".png,.jpg,.jpeg,.svg,.webp"
                           (change)="onLogoSelect($event)" style="display:none" />
                  </label>
                  <button type="button" class="btn-logo-delete"
                          [disabled]="!logoPreview" (click)="removeLogo()">
                    \u{1F5D1} \u05DE\u05D7\u05D9\u05E7\u05D4
                  </button>
                </div>
                <small class="logo-hint">PNG \xB7 JPG \xB7 SVG \xB7 max 2MB</small>
              </div>
            </div>
          </div>
        }

        <!-- \u2550\u2550 \u05E4\u05E8\u05D8\u05D9 \u05E7\u05E9\u05E8 \u2550\u2550 -->
        @if (activeGroup() === 'contact') {
          <div class="content-section">
            <div class="section-header">
              <h3>\u05E4\u05E8\u05D8\u05D9 \u05E7\u05E9\u05E8</h3>
              <p>\u05D0\u05E0\u05E9\u05D9 \u05E7\u05E9\u05E8, \u05D3\u05D5\u05D0"\u05DC \u05D5\u05D8\u05DC\u05E4\u05D5\u05E0\u05D9\u05DD</p>
            </div>

            <div class="form-row">
              <label>\u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8</label>
              <div class="input-col">
                <input kendoTextBox formControlName="contactName" />
              </div>
            </div>

            <div class="form-row">
              <label>\u05D3\u05D5\u05D0"\u05DC <span class="req">*</span></label>
              <div class="input-col">
                <input kendoTextBox formControlName="email" type="email" />
                @if (form.get('email')?.invalid && form.get('email')?.touched) {
                  <small class="err">\u05DB\u05EA\u05D5\u05D1\u05EA \u05D3\u05D5\u05D0"\u05DC \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4</small>
                }
              </div>
            </div>

            <div class="form-row">
              <label>\u05D8\u05DC\u05E4\u05D5\u05DF</label>
              <div class="input-col">
                <input kendoTextBox formControlName="phone" placeholder="050-0000000" />
              </div>
            </div>

            <div class="form-row">
              <label>\u05D8\u05DC\u05E4\u05D5\u05DF 2</label>
              <div class="input-col">
                <input kendoTextBox formControlName="phone2" placeholder="050-0000000" />
              </div>
            </div>

            <div class="form-row">
              <label>\u05E4\u05E7\u05E1</label>
              <div class="input-col">
                <input kendoTextBox formControlName="fax" placeholder="03-0000000" />
              </div>
            </div>

            <div class="form-row">
              <label>\u05D0\u05EA\u05E8 \u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8</label>
              <div class="input-col">
                <input kendoTextBox formControlName="website" placeholder="www.example.com" />
              </div>
            </div>

          </div>
        }

        <!-- \u2550\u2550 \u05DB\u05EA\u05D5\u05D1\u05EA \u2550\u2550 -->
        @if (activeGroup() === 'address') {
          <div class="content-section">
            <div class="section-header">
              <h3>\u05DB\u05EA\u05D5\u05D1\u05EA</h3>
              <p>\u05DB\u05EA\u05D5\u05D1\u05EA \u05E4\u05D9\u05D6\u05D9\u05EA \u05E9\u05DC \u05D4\u05D0\u05E8\u05D2\u05D5\u05DF</p>
            </div>

            <div class="form-row">
              <label>\u05DE\u05D3\u05D9\u05E0\u05D4</label>
              <div class="input-col">
                <kendo-dropdownlist
                  formControlName="countryCode"
                  [data]="countries()"
                  textField="displayName"
                  valueField="CountryCode"
                  [valuePrimitive]="true"
                  [filterable]="true"
                  placeholder="\u05D1\u05D7\u05E8 \u05DE\u05D3\u05D9\u05E0\u05D4..." />
              </div>
            </div>

            <div class="form-row">
              <label>\u05E2\u05D9\u05E8</label>
              <div class="input-col">
                <input kendoTextBox formControlName="city" />
              </div>
            </div>

            <div class="form-row">
              <label>\u05DB\u05EA\u05D5\u05D1\u05EA</label>
              <div class="input-col">
                <input kendoTextBox formControlName="address" placeholder="\u05E8\u05D7\u05D5\u05D1 \u05D5\u05DE\u05E1\u05E4\u05E8" />
              </div>
            </div>

            <!-- Map preference + trigger -->
            <div class="form-row">
              <label>\u05D4\u05E6\u05D2 \u05DE\u05E4\u05D4</label>
              <div class="input-col">
                <div class="map-row">
                  <div class="seg-ctrl">
                    <button type="button" class="seg-btn"
                            [class.seg-on]="!!form.get('showMapInDialog')?.value"
                            (click)="form.get('showMapInDialog')?.setValue(true); showMap()">
                      \u{1F4CD} \u05DB\u05DF
                    </button>
                    <button type="button" class="seg-btn"
                            [class.seg-off]="!form.get('showMapInDialog')?.value"
                            (click)="form.get('showMapInDialog')?.setValue(false); mapVisible.set(false); mapError.set('')">
                      \u2715 \u05DC\u05D0
                    </button>
                  </div>
                  @if (mapLoading()) {
                    <span class="map-loading-hint">
                      <kendo-loader type="pulsing" size="small" themeColor="primary" /> \u05DE\u05D0\u05EA\u05E8 \u05DB\u05EA\u05D5\u05D1\u05EA...
                    </span>
                  }
                  @if (mapError()) {
                    <span class="map-error">{{ mapError() }}</span>
                  }
                </div>
              </div>
            </div>

            @if (mapVisible()) {
              <div class="map-container">
                <iframe
                  [src]="mapUrl()!"
                  class="map-frame"
                  loading="lazy"
                  referrerpolicy="no-referrer"
                  title="\u05DE\u05E4\u05EA \u05DE\u05D9\u05E7\u05D5\u05DD \u05D4\u05D0\u05E8\u05D2\u05D5\u05DF">
                </iframe>
                <a class="map-osm-link"
                   [href]="'https://www.openstreetmap.org/search?query=' + (form.get('address')?.value || '') + ' ' + (form.get('city')?.value || '')"
                   target="_blank" rel="noopener">
                  \u05E4\u05EA\u05D7 \u05D1-OpenStreetMap \u2197
                </a>
              </div>
            }

          </div>
        }

        <!-- \u2550\u2550 \u05E9\u05E4\u05D4 \u05D5\u05DE\u05D8\u05D1\u05E2 \u2550\u2550 -->
        @if (activeGroup() === 'locale') {
          <div class="content-section">
            <div class="section-header">
              <h3>\u05E9\u05E4\u05D4 \u05D5\u05DE\u05D8\u05D1\u05E2</h3>
              <p>\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05DC\u05D5\u05E7\u05DC \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC \u05DC\u05D0\u05E8\u05D2\u05D5\u05DF</p>
            </div>

            <div class="form-row">
              <label>\u05E9\u05E4\u05D4 \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC</label>
              <div class="input-col">
                <kendo-dropdownlist
                  formControlName="defaultLanguageCode"
                  [data]="languages()"
                  textField="displayName"
                  valueField="LanguageCode"
                  [valuePrimitive]="true"
                  placeholder="\u05D1\u05D7\u05E8 \u05E9\u05E4\u05D4..." />
              </div>
            </div>

            <div class="form-row">
              <label>\u05DE\u05D8\u05D1\u05E2 \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC</label>
              <div class="input-col">
                <kendo-dropdownlist
                  formControlName="defaultCurrencyCode"
                  [data]="currencies()"
                  textField="displayName"
                  valueField="CurrencyCode"
                  [valuePrimitive]="true"
                  placeholder="\u05D1\u05D7\u05E8 \u05DE\u05D8\u05D1\u05E2..." />
              </div>
            </div>

          </div>
        }

        <!-- \u2550\u2550 \u05DE\u05E0\u05D5\u05D9 \u05D5\u05DE\u05D2\u05D1\u05DC\u05D5\u05EA \u2550\u2550 -->
        @if (activeGroup() === 'plan') {
          <div class="content-section">
            <div class="section-header">
              <h3>\u05DE\u05E0\u05D5\u05D9 \u05D5\u05DE\u05D2\u05D1\u05DC\u05D5\u05EA</h3>
              <p>\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA, \u05DE\u05DB\u05E1\u05D5\u05EA \u05D5\u05E1\u05D8\u05D8\u05D5\u05E1 \u05D0\u05E8\u05D2\u05D5\u05DF</p>
            </div>

            <div class="form-row">
              <label>\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA</label>
              <div class="input-col">
                <kendo-dropdownlist
                  formControlName="planType"
                  [data]="plans"
                  textField="label"
                  valueField="value"
                  [valuePrimitive]="true">
                </kendo-dropdownlist>
              </div>
            </div>

            <div class="form-row">
              <label>\u05DE\u05E7\u05E1\u05D9\u05DE\u05D5\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD</label>
              <div class="input-col">
                <kendo-numerictextbox
                  formControlName="maxUsers"
                  [min]="1" [max]="9999"
                  [decimals]="0"
                  format="n0">
                </kendo-numerictextbox>
              </div>
            </div>

            <div class="form-row">
              <label>\u05DE\u05E7\u05E1\u05D9\u05DE\u05D5\u05DD \u05EA\u05E7\u05DC\u05D5\u05EA</label>
              <div class="input-col">
                <kendo-numerictextbox
                  formControlName="maxTickets"
                  [min]="1" [max]="999999"
                  [decimals]="0"
                  format="n0">
                </kendo-numerictextbox>
              </div>
            </div>

            @if (isEdit) {
              <div class="form-row">
                <label>\u05E1\u05D8\u05D8\u05D5\u05E1</label>
                <div class="input-col">
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

        <!-- \u2550\u2550 \u05D1\u05E0\u05E7 \u2550\u2550 -->
        @if (activeGroup() === 'bank') {
          <div class="content-section">
            <div class="section-header">
              <h3>\u05E4\u05E8\u05D8\u05D9 \u05D7\u05D9\u05D5\u05D1</h3>
              <p>\u05E4\u05E8\u05D8\u05D9 \u05D1\u05E0\u05E7, \u05D0\u05E9\u05E8\u05D0\u05D9 \u05D5\u05D0\u05DE\u05E6\u05E2\u05D9 \u05EA\u05E9\u05DC\u05D5\u05DD</p>
            </div>

            <div class="form-row">
              <label>\u05D1\u05E0\u05E7</label>
              <div class="input-col">
                <input kendoTextBox formControlName="bankName" placeholder="\u05E9\u05DD \u05D4\u05D1\u05E0\u05E7" />
              </div>
            </div>

            <div class="form-row">
              <label>\u05E1\u05E0\u05D9\u05E3</label>
              <div class="input-col">
                <input kendoTextBox formControlName="bankBranch" placeholder="\u05DE\u05E1\u05E4\u05E8 \u05E1\u05E0\u05D9\u05E3" />
              </div>
            </div>

            <div class="form-row">
              <label>\u05DE\u05E1\u05E4\u05E8 \u05D7\u05E9\u05D1\u05D5\u05DF</label>
              <div class="input-col">
                <input kendoTextBox formControlName="bankAccount" />
              </div>
            </div>

            <div class="form-row">
              <label>\u05DE\u05E1\u05E4\u05E8 \u05D1\u05D4\u05E0\u05D4"\u05D7</label>
              <div class="input-col">
                <input kendoTextBox formControlName="accountingRef" placeholder="\u05DE\u05E1\u05E4\u05E8 \u05D1\u05D4\u05E0\u05D4\u05DC\u05EA \u05D7\u05E9\u05D1\u05D5\u05E0\u05D5\u05EA" />
              </div>
            </div>

          </div>
        }

        <!-- \u2550\u2550 \u05D4\u05E2\u05E8\u05D5\u05EA \u2550\u2550 -->
        @if (activeGroup() === 'notes') {
          <div class="content-section">
            <div class="section-header">
              <h3>\u05D4\u05E2\u05E8\u05D5\u05EA</h3>
              <p>\u05D4\u05E2\u05E8\u05D5\u05EA \u05D7\u05D5\u05E4\u05E9\u05D9\u05D5\u05EA \u05E2\u05DC \u05D4\u05D0\u05E8\u05D2\u05D5\u05DF</p>
            </div>

            <kendo-textarea
              formControlName="notes"
              [rows]="8"
              resizable="vertical"
              placeholder="\u05D4\u05E2\u05E8\u05D5\u05EA \u05D0\u05D5\u05E4\u05E6\u05D9\u05D5\u05E0\u05DC\u05D9\u05D5\u05EA...">
            </kendo-textarea>

          </div>
        }

      </form>
    </div>

  </div>

  <kendo-dialog-actions>
    <div class="dialog-footer">
      <button kendoButton class="btn-save" (click)="save()" [disabled]="saving || uploading">
        @if (saving || uploading) {
          <kendo-loader type="pulsing" size="small" />
        } @else {
          \u2713
        }
        {{ uploading ? '\u05DE\u05DE\u05EA\u05D9\u05DF \u05DC\u05D4\u05E2\u05DC\u05D0\u05EA \u05DC\u05D5\u05D2\u05D5...' : isEdit ? '\u05E9\u05DE\u05D5\u05E8 \u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD' : '\u05E6\u05D5\u05E8 \u05D0\u05E8\u05D2\u05D5\u05DF' }}
      </button>
      <button kendoButton fillMode="outline" (click)="close()" [disabled]="saving">
        \u05D1\u05D9\u05D8\u05D5\u05DC
      </button>
    </div>
  </kendo-dialog-actions>

</kendo-dialog>

<!-- \u2500\u2500 AI Enrichment Result Dialog \u2500\u2500 -->
@if (showEnrichDlg()) {
  <kendo-dialog title="\u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05D7\u05D9\u05E4\u05D5\u05E9 AI" (close)="closeEnrichDlg()" [width]="480">

    <div class="enrich-dlg-body">
      <div class="enrich-dlg-intro">
        <span class="enrich-dlg-icon">\u{1F916}</span>
        <div>
          <strong>\u05E0\u05DE\u05E6\u05D0\u05D5 \u05D4\u05E4\u05E8\u05D8\u05D9\u05DD \u05D4\u05D1\u05D0\u05D9\u05DD \u05E2\u05D1\u05D5\u05E8:</strong>
          <div class="enrich-dlg-name">{{ form.get('companyName')?.value }}</div>
        </div>
      </div>

      <div class="enrich-rows">
        @if (enrichResult()?.logoUrl) {
          <label class="enrich-row" [class.row-off]="!isEnrichSelected('logoUrl')">
            <input type="checkbox" class="enrich-cb" [checked]="isEnrichSelected('logoUrl')" (change)="toggleEnrichField('logoUrl')" />
            <span class="enrich-lbl">\u05DC\u05D5\u05D2\u05D5</span>
            <img [src]="enrichResult().logoUrl" class="enrich-logo" alt="\u05DC\u05D5\u05D2\u05D5" />
          </label>
        }
        @if (enrichResult()?.businessNumber) {
          <label class="enrich-row" [class.row-off]="!isEnrichSelected('businessNumber')">
            <input type="checkbox" class="enrich-cb" [checked]="isEnrichSelected('businessNumber')" (change)="toggleEnrichField('businessNumber')" />
            <span class="enrich-lbl">\u05D7.\u05E4. / \u05E2\u05D5\u05E1\u05E7 \u05DE\u05D5\u05E8\u05E9\u05D4</span>
            <span class="enrich-val">{{ enrichResult().businessNumber }}</span>
          </label>
        }
        @if (enrichResult()?.phone) {
          <label class="enrich-row" [class.row-off]="!isEnrichSelected('phone')">
            <input type="checkbox" class="enrich-cb" [checked]="isEnrichSelected('phone')" (change)="toggleEnrichField('phone')" />
            <span class="enrich-lbl">\u05D8\u05DC\u05E4\u05D5\u05DF</span>
            <span class="enrich-val">{{ enrichResult().phone }}</span>
          </label>
        }
        @if (enrichResult()?.address) {
          <label class="enrich-row" [class.row-off]="!isEnrichSelected('address')">
            <input type="checkbox" class="enrich-cb" [checked]="isEnrichSelected('address')" (change)="toggleEnrichField('address')" />
            <span class="enrich-lbl">\u05DB\u05EA\u05D5\u05D1\u05EA</span>
            <span class="enrich-val">{{ enrichResult().address }}</span>
          </label>
        }
        @if (enrichResult()?.city) {
          <label class="enrich-row" [class.row-off]="!isEnrichSelected('city')">
            <input type="checkbox" class="enrich-cb" [checked]="isEnrichSelected('city')" (change)="toggleEnrichField('city')" />
            <span class="enrich-lbl">\u05E2\u05D9\u05E8</span>
            <span class="enrich-val">{{ enrichResult().city }}</span>
          </label>
        }
        @if (enrichResult()?.website) {
          <label class="enrich-row" [class.row-off]="!isEnrichSelected('website')">
            <input type="checkbox" class="enrich-cb" [checked]="isEnrichSelected('website')" (change)="toggleEnrichField('website')" />
            <span class="enrich-lbl">\u05D0\u05EA\u05E8</span>
            <span class="enrich-val ltr">{{ enrichResult().website }}</span>
          </label>
        }
        @if (enrichResult()?.contactName) {
          <label class="enrich-row" [class.row-off]="!isEnrichSelected('contactName')">
            <input type="checkbox" class="enrich-cb" [checked]="isEnrichSelected('contactName')" (change)="toggleEnrichField('contactName')" />
            <span class="enrich-lbl">\u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8</span>
            <span class="enrich-val">{{ enrichResult().contactName }}</span>
          </label>
        }
      </div>

      @if (enrichSources().length) {
        <div class="enrich-sources">
          <div class="enrich-sources-title">\u05DE\u05E7\u05D5\u05E8\u05D5\u05EA \u05E9\u05E0\u05E1\u05E8\u05E7\u05D5:</div>
          @for (src of enrichSources(); track src.id) {
            <div class="enrich-source-row">
              <span class="src-icon"
                [class.src-found]="src.status === 'found'"
                [class.src-miss]="src.status === 'not_found'"
                [class.src-skip]="src.status === 'skipped'"
                [class.src-err]="src.status === 'error'">
                {{ src.status === 'found' ? '\u2713' : src.status === 'skipped' ? '\u2014' : src.status === 'error' ? '\u26A0' : '\u2717' }}
              </span>
              <span class="src-name">{{ src.name }}</span>
              <span class="src-badge src-badge-{{ src.status }}">
                {{ src.status === 'found' ? '\u05E0\u05DE\u05E6\u05D0' : src.status === 'not_found' ? '\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0' : src.status === 'skipped' ? '\u05D3\u05D5\u05DC\u05D2' : '\u05E9\u05D2\u05D9\u05D0\u05D4' }}
              </span>
            </div>
          }
        </div>
      }

      <div class="enrich-dlg-note">
        \u05D4\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05E0\u05D0\u05E1\u05E4\u05D5 \u05DE\u05D4\u05E8\u05E9\u05EA \u2014 \u05D1\u05D3\u05D5\u05E7 \u05D5\u05D0\u05E9\u05E8 \u05DC\u05E4\u05E0\u05D9 \u05E9\u05DE\u05D9\u05E8\u05D4.
      </div>
    </div>

    <kendo-dialog-actions>
      <div class="enrich-dlg-footer">
        <button type="button" class="btn-save" (click)="applyEnrichment()">\u2713 \u05D4\u05D7\u05DC \u05E4\u05E8\u05D8\u05D9\u05DD</button>
        <button type="button" class="btn-cancel" (click)="closeEnrichDlg()">\u05D1\u05D9\u05D8\u05D5\u05DC</button>
      </div>
    </kendo-dialog-actions>

  </kendo-dialog>
}
`, styles: ['/* src/app/features/organizations/org-dialog/org-dialog.component.scss */\n:host ::ng-deep .k-dialog {\n  border-radius: 14px !important;\n  overflow: hidden;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.16), 0 2px 8px rgba(0, 0, 0, 0.08) !important;\n  border: 1px solid var(--sf-border) !important;\n  font-family:\n    "Noto Sans Hebrew",\n    "Segoe UI",\n    sans-serif;\n}\n:host ::ng-deep .k-dialog-titlebar {\n  background: var(--sf-bg-card) !important;\n  border-bottom: 1px solid var(--sf-border) !important;\n  padding: 14px 20px !important;\n  direction: rtl;\n  display: flex;\n  align-items: center;\n}\n:host ::ng-deep .k-dialog-title {\n  font-size: 1.05rem !important;\n  font-weight: 700 !important;\n  color: var(--sf-text) !important;\n  flex: 1;\n}\n:host ::ng-deep .k-dialog-close {\n  color: var(--sf-text-secondary) !important;\n}\n:host ::ng-deep .k-dialog-close:hover {\n  color: var(--sf-text) !important;\n  background: var(--sf-bg-hover) !important;\n}\n:host ::ng-deep .k-dialog-content {\n  padding: 0 !important;\n  background: var(--sf-bg) !important;\n  direction: rtl;\n}\n:host ::ng-deep .k-dialog-actions {\n  background: var(--sf-bg-card) !important;\n  border-top: 1px solid var(--sf-border) !important;\n  padding: 12px 20px !important;\n  direction: rtl !important;\n}\n:host ::ng-deep .k-input {\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n  font-size: 0.9rem !important;\n  direction: rtl !important;\n  border-color: var(--sf-border) !important;\n  border-radius: 8px !important;\n  background: var(--sf-bg-card) !important;\n  color: var(--sf-text) !important;\n  width: 100%;\n}\n:host ::ng-deep .k-input:focus,\n:host ::ng-deep .k-input.k-focus {\n  border-color: var(--sf-primary) !important;\n  box-shadow: 0 0 0 2px rgba(var(--sf-primary-rgb, 13, 71, 255), 0.12) !important;\n}\n:host ::ng-deep .k-input-inner {\n  direction: rtl !important;\n  text-align: right !important;\n}\n:host ::ng-deep .k-numerictextbox .k-input-inner {\n  text-align: right !important;\n}\n:host ::ng-deep .k-dropdownlist {\n  width: 100% !important;\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n  direction: rtl;\n  border-radius: 8px !important;\n  border-color: var(--sf-border) !important;\n  background: var(--sf-bg-card) !important;\n}\n:host ::ng-deep .k-dropdownlist .k-input-value-text {\n  text-align: right;\n}\n:host ::ng-deep .k-dropdownlist .k-button-icon {\n  margin-inline-start: auto;\n  margin-inline-end: 0;\n}\n:host ::ng-deep .k-list-item {\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n  direction: rtl;\n  text-align: right;\n  font-size: 0.88rem;\n}\n:host ::ng-deep .k-list {\n  direction: rtl;\n}\n:host ::ng-deep .k-numerictextbox {\n  width: 100% !important;\n}\n:host ::ng-deep .k-switch {\n  direction: ltr !important;\n}\n:host ::ng-deep .k-switch-on .k-switch-thumb-wrap {\n  border-color: var(--sf-primary) !important;\n}\n:host ::ng-deep .k-switch-on .k-switch-track {\n  background-color: var(--sf-primary) !important;\n}\n:host ::ng-deep .k-textarea {\n  width: 100% !important;\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n  direction: rtl;\n  font-size: 0.9rem;\n  border-radius: 8px !important;\n  border-color: var(--sf-border) !important;\n}\n.org-dialog-body {\n  display: flex;\n  flex-direction: row;\n  min-height: 440px;\n  direction: rtl;\n}\n.org-nav {\n  width: 190px;\n  flex-shrink: 0;\n  border-inline-end: 1px solid var(--sf-border);\n  background: var(--sf-bg-card);\n  padding: 16px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border: none;\n  border-radius: 10px;\n  background: transparent;\n  cursor: pointer;\n  width: 100%;\n  text-align: right;\n  color: var(--sf-text-secondary);\n  font-size: 0.85rem;\n  font-weight: 500;\n  position: relative;\n  transition: background 0.15s, color 0.15s;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.nav-item:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.nav-item.active {\n  background: var(--sf-primary-light, rgba(13, 71, 255, 0.08));\n  color: var(--sf-primary);\n  font-weight: 600;\n}\n.nav-item.active .nav-icon {\n  color: var(--sf-primary);\n}\n.nav-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 7px;\n  background: var(--sf-bg);\n  color: var(--sf-text-muted);\n  flex-shrink: 0;\n}\n.nav-item.active .nav-icon {\n  background: var(--sf-primary-light, rgba(13, 71, 255, 0.1));\n  color: var(--sf-primary);\n}\n.nav-text {\n  flex: 1;\n}\n.nav-indicator {\n  position: absolute;\n  inset-inline-end: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 20px;\n  border-radius: 2px 0 0 2px;\n  background: var(--sf-primary);\n}\n.org-content {\n  flex: 1;\n  min-width: 0;\n  padding: 24px 28px;\n  overflow-y: auto;\n  background: var(--sf-bg);\n  direction: rtl;\n}\n.content-section {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.section-header {\n  margin-bottom: 4px;\n}\n.section-header h3 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0 0 2px;\n}\n.section-header p {\n  font-size: 0.82rem;\n  color: var(--sf-text-muted);\n  margin: 0;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 150px 1fr;\n  align-items: start;\n  gap: 12px;\n  direction: rtl;\n}\nlabel {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  padding-top: 9px;\n  text-align: right;\n}\n.req {\n  color: var(--sf-danger);\n  margin-right: 2px;\n}\n.input-col {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n.err {\n  font-size: 0.75rem;\n  color: var(--sf-danger);\n  font-weight: 500;\n}\n.seg-ctrl {\n  display: inline-flex;\n  direction: rtl;\n  align-self: flex-start;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.seg-btn {\n  padding: 7px 20px;\n  font-size: 0.82rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  border: none;\n  background: var(--sf-bg);\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.seg-btn + .seg-btn {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.seg-btn:hover:not(.seg-on):not(.seg-off) {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.seg-btn.seg-on {\n  background: #10b981;\n  color: #fff;\n  font-weight: 600;\n}\n.seg-btn.seg-off {\n  background: #ef4444;\n  color: #fff;\n  font-weight: 600;\n}\n.ltr-wrap {\n  direction: ltr;\n  display: inline-flex;\n}\n.general-layout {\n  display: flex;\n  gap: 24px;\n  direction: rtl;\n}\n.general-fields {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.logo-aside {\n  flex-shrink: 0;\n  width: 170px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  border-inline-start: 1px solid var(--sf-border);\n  padding-inline-start: 20px;\n}\n.logo-label {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  align-self: flex-start;\n  margin-bottom: 2px;\n}\n.logo-preview-box {\n  width: 140px;\n  height: 140px;\n  border: 1px solid var(--sf-border);\n  border-radius: 10px;\n  background: var(--sf-bg-card);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.logo-preview-img {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n  padding: 8px;\n}\n.logo-placeholder {\n  width: 140px;\n  height: 140px;\n  border: 1.5px dashed var(--sf-border);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: var(--sf-text-muted);\n  font-size: 0.75rem;\n}\n.logo-placeholder kendo-svg-icon {\n  font-size: 2rem;\n  opacity: 0.4;\n}\n.logo-btns {\n  width: 140px;\n  display: flex;\n  justify-content: space-between;\n  gap: 6px;\n}\n.btn-logo-upload {\n  flex: 1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 5px 8px;\n  border-radius: 6px;\n  cursor: pointer;\n  border: 1px solid var(--sf-border);\n  background: var(--sf-bg-card);\n  font-size: 0.76rem;\n  font-weight: 500;\n  color: var(--sf-text);\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: background 0.15s, border-color 0.15s;\n}\n.btn-logo-upload:hover {\n  background: var(--sf-bg-hover);\n  border-color: var(--sf-primary);\n  color: var(--sf-primary);\n}\n.btn-logo-upload.loading {\n  opacity: 0.7;\n  cursor: wait;\n}\n.btn-logo-delete {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 5px 8px;\n  border-radius: 6px;\n  cursor: pointer;\n  border: 1px solid #fca5a5;\n  background: var(--sf-bg-card);\n  font-size: 0.76rem;\n  font-weight: 500;\n  color: var(--sf-danger);\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: background 0.15s;\n}\n.btn-logo-delete:hover {\n  background: #fef2f2;\n}\n.btn-logo-delete:disabled {\n  opacity: 0.35;\n  cursor: default;\n  pointer-events: none;\n}\n.logo-hint {\n  font-size: 0.65rem;\n  color: var(--sf-text-muted);\n  direction: ltr;\n  text-align: center;\n}\n.map-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.map-loading-hint {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.8rem;\n  color: var(--sf-text-secondary);\n}\n.map-error {\n  font-size: 0.8rem;\n  color: #ef4444;\n}\n.map-container {\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n  margin-top: 4px;\n}\n.map-frame {\n  display: block;\n  width: 100%;\n  height: 260px;\n  border: none;\n}\n.map-osm-link {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n  background: rgba(255, 255, 255, 0.88);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  border: 1px solid var(--sf-border);\n  border-radius: 6px;\n  padding: 4px 10px;\n  font-size: 0.75rem;\n  color: var(--sf-text-secondary);\n  text-decoration: none;\n  direction: ltr;\n  transition: color 0.12s;\n}\n.map-osm-link:hover {\n  color: var(--sf-primary);\n}\n.company-name-input {\n  width: 100%;\n}\n.company-name-sub {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 6px;\n}\n.btn-ai-enrich {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 8px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #0D47FF);\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 700;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition: opacity 0.15s, transform 0.1s;\n  box-shadow: 0 2px 8px rgba(124, 58, 237, 0.3);\n}\n.btn-ai-enrich i {\n  font-size: 0.8rem;\n}\n.btn-ai-enrich:hover:not(:disabled) {\n  opacity: 0.88;\n  transform: translateY(-1px);\n}\n.btn-ai-enrich:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-ai-enrich:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.enrich-msg {\n  font-size: 0.76rem;\n  font-weight: 500;\n}\n.enrich-msg.enrich-ok {\n  color: #059669;\n}\n.enrich-msg.enrich-err {\n  color: var(--sf-danger);\n}\n.form-error-banner {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.83rem;\n  color: #dc2626;\n  font-weight: 500;\n  margin-bottom: 12px;\n}\n.dialog-footer {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  direction: rtl;\n}\n.btn-save {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #f97316 !important;\n  color: #fff !important;\n  border: none !important;\n  border-radius: 9px !important;\n  padding: 9px 22px !important;\n  font-size: 0.875rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: background 0.15s, box-shadow 0.15s;\n  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.3);\n}\n.btn-save:hover:not(:disabled) {\n  background: #ea6c0a !important;\n  box-shadow: 0 4px 14px rgba(249, 115, 22, 0.4);\n}\n.btn-save:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.btn-save kendo-loader {\n  display: inline-flex;\n}\n.enrich-dlg-body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  direction: rtl;\n}\n.enrich-dlg-intro {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.enrich-dlg-intro strong {\n  font-size: 0.88rem;\n  color: var(--sf-text-secondary);\n}\n.enrich-dlg-icon {\n  font-size: 1.8rem;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.enrich-dlg-name {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin-top: 3px;\n}\n.enrich-rows {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--sf-border);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.enrich-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 14px;\n  border-bottom: 1px solid var(--sf-border);\n  background: var(--sf-bg-card);\n  cursor: pointer;\n  transition: background 0.12s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.enrich-row:last-child {\n  border-bottom: none;\n}\n.enrich-row:nth-child(even) {\n  background: var(--sf-bg);\n}\n.enrich-row:hover {\n  background: var(--sf-bg-hover);\n}\n.enrich-row.row-off {\n  opacity: 0.45;\n}\n.enrich-row.row-off .enrich-val {\n  text-decoration: line-through;\n}\n.enrich-cb {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n  accent-color: var(--sf-primary);\n  cursor: pointer;\n}\n.enrich-lbl {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--sf-text-muted);\n  min-width: 120px;\n  flex-shrink: 0;\n}\n.enrich-val {\n  font-size: 0.87rem;\n  font-weight: 600;\n  color: var(--sf-text);\n}\n.enrich-val.ltr {\n  direction: ltr;\n  font-family: "Share Tech Mono", monospace;\n}\n.enrich-logo {\n  height: 36px;\n  max-width: 120px;\n  object-fit: contain;\n  border-radius: 6px;\n}\n.enrich-sources {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.enrich-sources-title {\n  font-size: 0.73rem;\n  font-weight: 600;\n  color: var(--sf-text-muted);\n  margin-bottom: 2px;\n}\n.enrich-source-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.78rem;\n}\n.src-icon {\n  font-size: 0.85rem;\n  font-weight: 700;\n  width: 18px;\n  text-align: center;\n}\n.src-icon.src-found {\n  color: #10b981;\n}\n.src-icon.src-miss {\n  color: var(--sf-text-muted);\n}\n.src-icon.src-skip {\n  color: var(--sf-text-muted);\n}\n.src-icon.src-err {\n  color: #f59e0b;\n}\n.src-name {\n  color: var(--sf-text-secondary);\n  flex: 1;\n}\n.src-badge {\n  font-size: 0.68rem;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n.src-badge.src-badge-found {\n  background: #f0fdf4;\n  color: #15803d;\n  border: 1px solid #86efac;\n}\n.src-badge.src-badge-not_found {\n  background: var(--sf-bg);\n  color: var(--sf-text-muted);\n  border: 1px solid var(--sf-border);\n}\n.src-badge.src-badge-skipped {\n  background: var(--sf-bg);\n  color: var(--sf-text-muted);\n  border: 1px solid var(--sf-border);\n}\n.src-badge.src-badge-error {\n  background: #fefce8;\n  color: #92400e;\n  border: 1px solid #fde68a;\n}\n.enrich-dlg-note {\n  font-size: 0.75rem;\n  color: var(--sf-text-muted);\n  padding: 8px 12px;\n  background: #fefce8;\n  border: 1px solid #fde68a;\n  border-radius: 8px;\n}\n.enrich-dlg-footer {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  direction: rtl;\n}\n/*# sourceMappingURL=org-dialog.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: OrganizationService }, { type: UploadService }, { type: NgZone }, { type: ChangeDetectorRef }, { type: ReferenceService }, { type: HttpClient }, { type: DomSanitizer }, { type: AiProcessingService }], { org: [{
    type: Input
  }], closed: [{
    type: Output
  }], saved: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrgDialogComponent, { className: "OrgDialogComponent", filePath: "src/app/features/organizations/org-dialog/org-dialog.component.ts", lineNumber: 34 });
})();

// src/app/features/organizations/organizations.component.ts
var _c0 = (a0, a1) => ({ data: a0, total: a1 });
var _c1 = () => [25, 50, 100];
var _c2 = (a0) => ({ buttonCount: 5, info: true, type: "numeric", pageSizes: a0 });
var _c3 = () => ({ mode: "single", allowUnsort: false });
var _c4 = () => ({ mode: "multiple", checkboxOnly: true });
function OrganizationsComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function OrganizationsComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAdd());
    });
    \u0275\u0275text(1, " \u05D0\u05E8\u05D2\u05D5\u05DF \u05D7\u05D3\u05E9 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("svgIcon", ctx_r1.addIcon);
  }
}
function OrganizationsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "mat-spinner", 17);
    \u0275\u0275elementEnd();
  }
}
function OrganizationsComponent_Conditional_20_Template(rf, ctx) {
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
function OrganizationsComponent_Conditional_21_ng_template_28_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "span", 61);
    \u0275\u0275text(2, "\u05D8\u05DC\u05E4\u05D5\u05DF 2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(o_r4.Phone2);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_28_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "span", 61);
    \u0275\u0275text(2, "\u05E4\u05E7\u05E1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(o_r4.Fax);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_28_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "span", 61);
    \u0275\u0275text(2, "\u05D0\u05EA\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 62)(4, "a", 64);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("href", o_r4.Website, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r4.Website);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_28_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "span", 61);
    \u0275\u0275text(2, "\u05E8\u05D7\u05D5\u05D1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(o_r4.Address);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_28_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "span", 61);
    \u0275\u0275text(2, "\u05E2\u05D9\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(o_r4.City);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_28_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "span", 61);
    \u0275\u0275text(2, "\u05DE\u05D3\u05D9\u05E0\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(o_r4.Country);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_28_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "span", 61);
    \u0275\u0275text(2, "\u05D7.\u05E4 / \u05E2.\u05DE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(o_r4.BusinessNumber);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_28_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "span", 61);
    \u0275\u0275text(2, "\u05D1\u05E0\u05E7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", o_r4.BankName, " / ", o_r4.BankBranch);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_28_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "span", 61);
    \u0275\u0275text(2, "\u05D0\u05E1\u05DE\u05DB\u05EA\u05D0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(o_r4.AccountingRef);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_28_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 58);
    \u0275\u0275text(2, "\u05D4\u05E2\u05E8\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 65);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(o_r4.Notes);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57)(2, "div", 58);
    \u0275\u0275text(3, "\u05E4\u05E8\u05D8\u05D9 \u05E7\u05E9\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 59)(5, "div", 60)(6, "span", 61);
    \u0275\u0275text(7, "\u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 62);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 60)(11, "span", 61);
    \u0275\u0275text(12, "\u05D8\u05DC\u05E4\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 62);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(15, OrganizationsComponent_Conditional_21_ng_template_28_Conditional_15_Template, 5, 1, "div", 60);
    \u0275\u0275conditionalCreate(16, OrganizationsComponent_Conditional_21_ng_template_28_Conditional_16_Template, 5, 1, "div", 60);
    \u0275\u0275conditionalCreate(17, OrganizationsComponent_Conditional_21_ng_template_28_Conditional_17_Template, 6, 2, "div", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 57)(19, "div", 58);
    \u0275\u0275text(20, "\u05DB\u05EA\u05D5\u05D1\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 59);
    \u0275\u0275conditionalCreate(22, OrganizationsComponent_Conditional_21_ng_template_28_Conditional_22_Template, 5, 1, "div", 60);
    \u0275\u0275conditionalCreate(23, OrganizationsComponent_Conditional_21_ng_template_28_Conditional_23_Template, 5, 1, "div", 60);
    \u0275\u0275conditionalCreate(24, OrganizationsComponent_Conditional_21_ng_template_28_Conditional_24_Template, 5, 1, "div", 60);
    \u0275\u0275conditionalCreate(25, OrganizationsComponent_Conditional_21_ng_template_28_Conditional_25_Template, 5, 1, "div", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 57)(27, "div", 58);
    \u0275\u0275text(28, "\u05DE\u05E0\u05D5\u05D9 \u05D5\u05D1\u05E0\u05E7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 59)(30, "div", 60)(31, "span", 61);
    \u0275\u0275text(32, "\u05D4\u05E6\u05D8\u05E8\u05E4\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 62);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 60)(37, "span", 61);
    \u0275\u0275text(38, "\u05EA\u05E4\u05D5\u05D2\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 62);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 60)(43, "span", 61);
    \u0275\u0275text(44, "\u05DE\u05E7\u05E1. \u05DB\u05E8\u05D8\u05D9\u05E1\u05D9\u05DD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 62);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(47, OrganizationsComponent_Conditional_21_ng_template_28_Conditional_47_Template, 5, 2, "div", 60);
    \u0275\u0275conditionalCreate(48, OrganizationsComponent_Conditional_21_ng_template_28_Conditional_48_Template, 5, 1, "div", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(49, OrganizationsComponent_Conditional_21_ng_template_28_Conditional_49_Template, 5, 1, "div", 63);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r4 = ctx.$implicit;
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(o_r4.ContactName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(o_r4.Phone);
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r4.Phone2 ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r4.Fax ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r4.Website ? 17 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(o_r4.Address ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r4.City ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r4.Country ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r4.BusinessNumber ? 25 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 15, o_r4.SubscribedAt, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 18, o_r4.ExpiresAt, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(o_r4.MaxTickets);
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r4.BankName ? 47 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r4.AccountingRef ? 48 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r4.Notes ? 49 : -1);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_31_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 67);
  }
  if (rf & 2) {
    const o_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", o_r5.LogoUrl, \u0275\u0275sanitizeUrl)("alt", o_r5.CompanyName);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_31_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r5.CompanyName.charAt(0));
  }
}
function OrganizationsComponent_Conditional_21_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275conditionalCreate(1, OrganizationsComponent_Conditional_21_ng_template_31_Conditional_1_Template, 1, 2, "img", 67)(2, OrganizationsComponent_Conditional_21_ng_template_31_Conditional_2_Template, 2, 1, "div", 68);
    \u0275\u0275elementStart(3, "span", 69);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r5.LogoUrl ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r5.CompanyName);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r6.TenantCode);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.orgTypeClass(o_r7.OrgType));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.orgTypeLabel(o_r7.OrgType));
  }
}
function OrganizationsComponent_Conditional_21_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("chip-" + o_r8.PlanType);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.planLabel(o_r8.PlanType));
  }
}
function OrganizationsComponent_Conditional_21_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 73);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r9.UserCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" / ", o_r9.MaxUsers);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275element(1, "span", 75);
    \u0275\u0275elementStart(2, "span", 76);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("dot-active", o_r10.IsActive)("dot-inactive", !o_r10.IsActive);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r10.IsActive ? "\u05E4\u05E2\u05D9\u05DC" : "\u05DE\u05D5\u05E9\u05D4\u05D4");
  }
}
function OrganizationsComponent_Conditional_21_ng_template_44_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 82);
    \u0275\u0275listener("click", function OrganizationsComponent_Conditional_21_ng_template_44_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const o_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleActive(o_r13));
    });
    \u0275\u0275element(1, "i", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("act-lock", o_r13.IsActive)("act-unlock", !o_r13.IsActive);
    \u0275\u0275property("title", o_r13.IsActive ? "\u05D4\u05E9\u05D1\u05EA" : "\u05D4\u05E4\u05E2\u05DC");
    \u0275\u0275advance();
    \u0275\u0275classProp("pi-lock", o_r13.IsActive)("pi-lock-open", !o_r13.IsActive);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_44_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 83);
    \u0275\u0275listener("click", function OrganizationsComponent_Conditional_21_ng_template_44_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const o_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(o_r13));
    });
    \u0275\u0275element(1, "i", 84);
    \u0275\u0275elementEnd();
  }
}
function OrganizationsComponent_Conditional_21_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "button", 78);
    \u0275\u0275listener("click", function OrganizationsComponent_Conditional_21_ng_template_44_Template_button_click_1_listener() {
      const ctx_r11 = \u0275\u0275restoreView(_r11);
      const o_r13 = ctx_r11.$implicit;
      const rowIndex_r14 = ctx_r11.rowIndex;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleDetail(o_r13, rowIndex_r14));
    });
    \u0275\u0275element(2, "i", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, OrganizationsComponent_Conditional_21_ng_template_44_button_3_Template, 2, 9, "button", 80)(4, OrganizationsComponent_Conditional_21_ng_template_44_button_4_Template, 2, 0, "button", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", ctx_r1.isExpanded(o_r13.TenantID));
    \u0275\u0275property("title", ctx_r1.isExpanded(o_r13.TenantID) ? "\u05E1\u05D2\u05D5\u05E8" : "\u05E4\u05E8\u05D8\u05D9\u05DD");
    \u0275\u0275advance();
    \u0275\u0275classProp("pi-chevron-down", !ctx_r1.isExpanded(o_r13.TenantID))("pi-chevron-up", ctx_r1.isExpanded(o_r13.TenantID));
    \u0275\u0275advance();
    \u0275\u0275property("appHasPerm", "ORGANIZATIONS:UPDATE");
    \u0275\u0275advance();
    \u0275\u0275property("appHasPerm", "ORGANIZATIONS:UPDATE");
  }
}
function OrganizationsComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "kendo-grid", 18);
    \u0275\u0275listener("pageChange", function OrganizationsComponent_Conditional_21_Template_kendo_grid_pageChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange($event));
    })("sortChange", function OrganizationsComponent_Conditional_21_Template_kendo_grid_sortChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSortChange($event));
    });
    \u0275\u0275element(1, "kendo-grid-pdf", 19);
    \u0275\u0275elementStart(2, "kendo-grid-excel", 20);
    \u0275\u0275element(3, "kendo-excelexport-column", 21)(4, "kendo-excelexport-column", 22)(5, "kendo-excelexport-column", 23)(6, "kendo-excelexport-column", 24)(7, "kendo-excelexport-column", 25)(8, "kendo-excelexport-column", 26)(9, "kendo-excelexport-column", 27)(10, "kendo-excelexport-column", 28)(11, "kendo-excelexport-column", 29)(12, "kendo-excelexport-column", 30)(13, "kendo-excelexport-column", 31)(14, "kendo-excelexport-column", 32)(15, "kendo-excelexport-column", 33)(16, "kendo-excelexport-column", 34)(17, "kendo-excelexport-column", 35)(18, "kendo-excelexport-column", 36)(19, "kendo-excelexport-column", 37)(20, "kendo-excelexport-column", 38)(21, "kendo-excelexport-column", 39)(22, "kendo-excelexport-column", 40)(23, "kendo-excelexport-column", 41)(24, "kendo-excelexport-column", 42)(25, "kendo-excelexport-column", 43)(26, "kendo-excelexport-column", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "kendo-grid-messages", 45);
    \u0275\u0275template(28, OrganizationsComponent_Conditional_21_ng_template_28_Template, 50, 21, "ng-template", 46);
    \u0275\u0275element(29, "kendo-grid-checkbox-column", 47);
    \u0275\u0275elementStart(30, "kendo-grid-column", 48);
    \u0275\u0275template(31, OrganizationsComponent_Conditional_21_ng_template_31_Template, 5, 2, "ng-template", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "kendo-grid-column", 50);
    \u0275\u0275template(33, OrganizationsComponent_Conditional_21_ng_template_33_Template, 2, 1, "ng-template", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "kendo-grid-column", 51);
    \u0275\u0275template(35, OrganizationsComponent_Conditional_21_ng_template_35_Template, 2, 3, "ng-template", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "kendo-grid-column", 52);
    \u0275\u0275elementStart(37, "kendo-grid-column", 33);
    \u0275\u0275template(38, OrganizationsComponent_Conditional_21_ng_template_38_Template, 2, 3, "ng-template", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "kendo-grid-column", 53);
    \u0275\u0275template(40, OrganizationsComponent_Conditional_21_ng_template_40_Template, 4, 2, "ng-template", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "kendo-grid-column", 54);
    \u0275\u0275template(42, OrganizationsComponent_Conditional_21_ng_template_42_Template, 4, 5, "ng-template", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "kendo-grid-column", 55);
    \u0275\u0275template(44, OrganizationsComponent_Conditional_21_ng_template_44_Template, 5, 9, "ng-template", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", \u0275\u0275pureFunction2(53, _c0, ctx_r1.pagedData, ctx_r1.gridData.length))("skip", ctx_r1.skip)("pageSize", ctx_r1.pageSize)("pageable", \u0275\u0275pureFunction1(57, _c2, \u0275\u0275pureFunction0(56, _c1)))("sortable", \u0275\u0275pureFunction0(59, _c3))("sort", ctx_r1.sort)("reorderable", true)("resizable", true)("selectable", \u0275\u0275pureFunction0(60, _c4))("columnMenu", true);
    \u0275\u0275advance();
    \u0275\u0275property("allPages", true)("landscape", true)("repeatHeaders", true);
    \u0275\u0275advance();
    \u0275\u0275property("fetchData", ctx_r1.allData);
    \u0275\u0275advance();
    \u0275\u0275property("width", 200);
    \u0275\u0275advance();
    \u0275\u0275property("width", 120);
    \u0275\u0275advance();
    \u0275\u0275property("width", 120);
    \u0275\u0275advance();
    \u0275\u0275property("width", 150);
    \u0275\u0275advance();
    \u0275\u0275property("width", 200);
    \u0275\u0275advance();
    \u0275\u0275property("width", 120);
    \u0275\u0275advance();
    \u0275\u0275property("width", 120);
    \u0275\u0275advance();
    \u0275\u0275property("width", 120);
    \u0275\u0275advance();
    \u0275\u0275property("width", 160);
    \u0275\u0275advance();
    \u0275\u0275property("width", 200);
    \u0275\u0275advance();
    \u0275\u0275property("width", 120);
    \u0275\u0275advance();
    \u0275\u0275property("width", 120);
    \u0275\u0275advance();
    \u0275\u0275property("width", 100);
    \u0275\u0275advance();
    \u0275\u0275property("width", 80);
    \u0275\u0275advance();
    \u0275\u0275property("width", 140);
    \u0275\u0275advance();
    \u0275\u0275property("width", 140);
    \u0275\u0275advance();
    \u0275\u0275property("width", 120);
    \u0275\u0275advance();
    \u0275\u0275property("width", 120);
    \u0275\u0275advance();
    \u0275\u0275property("width", 120);
    \u0275\u0275advance();
    \u0275\u0275property("width", 120);
    \u0275\u0275advance();
    \u0275\u0275property("width", 80);
    \u0275\u0275advance();
    \u0275\u0275property("width", 140);
    \u0275\u0275advance();
    \u0275\u0275property("width", 150);
    \u0275\u0275advance();
    \u0275\u0275property("width", 250);
    \u0275\u0275advance(3);
    \u0275\u0275property("width", 56)("showSelectAll", true)("columnMenu", false);
    \u0275\u0275advance();
    \u0275\u0275property("width", 280)("minResizableWidth", 160);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 120);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 130);
    \u0275\u0275advance(2);
    \u0275\u0275property("minResizableWidth", 140);
    \u0275\u0275advance();
    \u0275\u0275property("width", 100);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 100);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 95);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 104)("sortable", false)("resizable", false)("columnMenu", false);
  }
}
function OrganizationsComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-org-dialog", 85);
    \u0275\u0275listener("closed", function OrganizationsComponent_Conditional_22_Template_app_org_dialog_closed_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dialogOpen.set(false));
    })("saved", function OrganizationsComponent_Conditional_22_Template_app_org_dialog_saved_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.onSaved();
      return \u0275\u0275resetView(ctx_r1.dialogOpen.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("org", ctx_r1.dialogOrg());
  }
}
var OrganizationsComponent = class _OrganizationsComponent {
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
  orgs = signal(
    [],
    ...ngDevMode ? [{ debugName: "orgs" }] : (
      /* istanbul ignore next */
      []
    )
  );
  gridData = [];
  searchTerm = "";
  skip = 0;
  pageSize = 50;
  sort = [{ field: "CompanyName", dir: "asc" }];
  dialogOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "dialogOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  dialogOrg = signal(
    null,
    ...ngDevMode ? [{ debugName: "dialogOrg" }] : (
      /* istanbul ignore next */
      []
    )
  );
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
        this.orgs.set(r.tenants);
        this.applyFilter();
        this.loading.set(false);
      },
      error: () => {
        this.error.set("\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D8\u05E2\u05D9\u05E0\u05EA \u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05DD");
        this.loading.set(false);
      }
    });
  }
  applyFilter() {
    const q = this.searchTerm.toLowerCase();
    const filtered = q ? this.orgs().filter((o) => o.CompanyName.toLowerCase().includes(q) || o.TenantCode.toLowerCase().includes(q) || o.Email.toLowerCase().includes(q)) : [...this.orgs()];
    this.gridData = orderBy(filtered, this.sort);
    this.skip = 0;
  }
  onSearch(value) {
    this.searchTerm = value;
    this.applyFilter();
  }
  onPageChange(e) {
    this.skip = e.skip;
    this.pageSize = e.take;
  }
  onSortChange(sort) {
    this.sort = sort;
    this.applyFilter();
  }
  openAdd() {
    this.dialogOrg.set(null);
    this.dialogOpen.set(false);
    setTimeout(() => this.dialogOpen.set(true));
  }
  openEdit(o) {
    this.dialogOrg.set(o);
    this.dialogOpen.set(false);
    setTimeout(() => this.dialogOpen.set(true));
  }
  onSaved() {
    this.load();
  }
  toggleActive(o) {
    this.svc.toggleActive(o.TenantID).subscribe({
      next: (r) => {
        this.orgs.update((list) => list.map((t) => t.TenantID === o.TenantID ? __spreadProps(__spreadValues({}, t), { IsActive: r.isActive }) : t));
        this.applyFilter();
      }
    });
  }
  expandedIds = /* @__PURE__ */ new Set();
  toggleDetail(o, rowIndex) {
    const abs = this.skip + rowIndex;
    if (this.expandedIds.has(o.TenantID)) {
      this.grid.collapseRow(abs);
      this.expandedIds.delete(o.TenantID);
    } else {
      this.grid.expandRow(abs);
      this.expandedIds.add(o.TenantID);
    }
  }
  isExpanded(tenantId) {
    return this.expandedIds.has(tenantId);
  }
  exportExcel() {
    this.grid.saveAsExcel();
  }
  exportPDF() {
    this.grid.saveAsPDF();
  }
  allData = () => ({ data: this.gridData });
  planLabel(p) {
    return { basic: "\u05D1\u05E1\u05D9\u05E1\u05D9", pro: "\u05DE\u05E7\u05E6\u05D5\u05E2\u05D9", enterprise: "\u05D0\u05E8\u05D2\u05D5\u05E0\u05D9" }[p] ?? p;
  }
  orgTypeLabel(t) {
    return { PLATFORM: "\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4", SOFTWARE_HOUSE: "\u05D1\u05D9\u05EA \u05EA\u05D5\u05DB\u05E0\u05D4", IMPLEMENTER: "\u05DE\u05D9\u05D9\u05E9\u05DD", CLIENT: "\u05DC\u05E7\u05D5\u05D7" }[t] ?? t;
  }
  orgTypeClass(t) {
    return "chip chip-ot-" + (t || "CLIENT");
  }
  daysLeft(expiry) {
    return Math.ceil((new Date(expiry).getTime() - Date.now()) / 864e5);
  }
  get pagedData() {
    return this.gridData.slice(this.skip, this.skip + this.pageSize);
  }
  static \u0275fac = function OrganizationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrganizationsComponent)(\u0275\u0275directiveInject(OrganizationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrganizationsComponent, selectors: [["app-organizations"]], viewQuery: function OrganizationsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(GridComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.grid = _t.first);
    }
  }, decls: 23, vars: 8, consts: [[1, "orgs-page"], [1, "page-header"], [1, "header-titles"], ["kendoButton", "", "themeColor", "primary", 3, "svgIcon", "click", 4, "appHasPerm"], [1, "toolbar"], [1, "search-wrap"], [1, "search-icon"], ["type", "text", "placeholder", "\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DC\u05E4\u05D9 \u05E9\u05DD, \u05E7\u05D5\u05D3, \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC...", 1, "search-input", 3, "input"], [1, "export-btns"], ["kendoButton", "", "fillMode", "outline", "title", "\u05D9\u05D9\u05E6\u05D5\u05D0 \u05DC\u05D0\u05E7\u05E1\u05DC", 1, "btn-export", "btn-excel", 3, "click", "svgIcon"], ["kendoButton", "", "fillMode", "outline", "title", "\u05D9\u05D9\u05E6\u05D5\u05D0 \u05DC-PDF", 1, "btn-export", "btn-pdf", 3, "click", "svgIcon"], [1, "grid-wrap"], [1, "state-box"], [1, "state-box", "error"], ["scrollable", "scrollable", 1, "orgs-grid", 3, "data", "skip", "pageSize", "pageable", "sortable", "sort", "reorderable", "resizable", "selectable", "columnMenu"], [3, "org"], ["kendoButton", "", "themeColor", "primary", 3, "click", "svgIcon"], ["diameter", "36"], ["scrollable", "scrollable", 1, "orgs-grid", 3, "pageChange", "sortChange", "data", "skip", "pageSize", "pageable", "sortable", "sort", "reorderable", "resizable", "selectable", "columnMenu"], ["fileName", "\u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05DD.pdf", "paperSize", "A4", "margin", "1cm", 3, "allPages", "landscape", "repeatHeaders"], ["fileName", "\u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05DD.xlsx", 3, "fetchData"], ["field", "CompanyName", "title", "\u05E9\u05DD \u05D0\u05E8\u05D2\u05D5\u05DF", 3, "width"], ["field", "TenantCode", "title", "\u05E7\u05D5\u05D3 \u05D0\u05E8\u05D2\u05D5\u05DF", 3, "width"], ["field", "BusinessNumber", "title", "\u05D7.\u05E4 / \u05E2.\u05DE", 3, "width"], ["field", "ContactName", "title", "\u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8", 3, "width"], ["field", "Email", "title", '\u05D3\u05D5\u05D0"\u05DC', 3, "width"], ["field", "Phone", "title", "\u05D8\u05DC\u05E4\u05D5\u05DF", 3, "width"], ["field", "Phone2", "title", "\u05D8\u05DC\u05E4\u05D5\u05DF 2", 3, "width"], ["field", "Fax", "title", "\u05E4\u05E7\u05E1", 3, "width"], ["field", "Website", "title", "\u05D0\u05EA\u05E8 \u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8", 3, "width"], ["field", "Address", "title", "\u05DB\u05EA\u05D5\u05D1\u05EA", 3, "width"], ["field", "City", "title", "\u05E2\u05D9\u05E8", 3, "width"], ["field", "Country", "title", "\u05DE\u05D3\u05D9\u05E0\u05D4", 3, "width"], ["field", "PlanType", "title", "\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA", 3, "width"], ["field", "IsActive", "title", "\u05E4\u05E2\u05D9\u05DC", 3, "width"], ["field", "SubscribedAt", "title", "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05E6\u05D8\u05E8\u05E4\u05D5\u05EA", 3, "width"], ["field", "ExpiresAt", "title", "\u05EA\u05E4\u05D5\u05D2\u05EA \u05DE\u05E0\u05D5\u05D9", 3, "width"], ["field", "MaxUsers", "title", "\u05DE\u05E7\u05E1 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD", 3, "width"], ["field", "UserCount", "title", "\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05E4\u05D5\u05E2\u05DC", 3, "width"], ["field", "MaxTickets", "title", "\u05DE\u05E7\u05E1 \u05D8\u05D9\u05E7\u05D8\u05D9\u05DD", 3, "width"], ["field", "BankName", "title", "\u05D1\u05E0\u05E7", 3, "width"], ["field", "BankBranch", "title", "\u05E1\u05E0\u05D9\u05E3", 3, "width"], ["field", "BankAccount", "title", "\u05D7\u05E9\u05D1\u05D5\u05DF \u05D1\u05E0\u05E7", 3, "width"], ["field", "AccountingRef", "title", "\u05D0\u05E1\u05DE\u05DB\u05EA\u05D0 \u05D7\u05E9\u05D1\u05D5\u05E0\u05D0\u05D9\u05EA", 3, "width"], ["field", "Notes", "title", "\u05D4\u05E2\u05E8\u05D5\u05EA", 3, "width"], ["pagerItemsPerPage", "\u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3", "pagerOf", "\u05DE\u05EA\u05D5\u05DA", "pagerItems", "\u05E8\u05E9\u05D5\u05DE\u05D5\u05EA", "pagerFirstPage", "\u05E2\u05DE\u05D5\u05D3 \u05E8\u05D0\u05E9\u05D5\u05DF", "pagerLastPage", "\u05E2\u05DE\u05D5\u05D3 \u05D0\u05D7\u05E8\u05D5\u05DF", "pagerPreviousPage", "\u05D4\u05E7\u05D5\u05D3\u05DD", "pagerNextPage", "\u05D4\u05D1\u05D0", "pagerPage", "\u05E2\u05DE\u05D5\u05D3", "pagerPageNumberInputTitle", "\u05DE\u05E1\u05E4\u05E8 \u05E2\u05DE\u05D5\u05D3", "noRecords", "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E8\u05E9\u05D5\u05DE\u05D5\u05EA", "loading", "\u05D8\u05D5\u05E2\u05DF...", "sortAscending", "\u05DE\u05D9\u05D5\u05DF \u05E2\u05D5\u05DC\u05D4", "sortDescending", "\u05DE\u05D9\u05D5\u05DF \u05D9\u05D5\u05E8\u05D3", "sortedAscending", "\u05DE\u05DE\u05D5\u05D9\u05DF \u05D1\u05E1\u05D3\u05E8 \u05E2\u05D5\u05DC\u05D4", "sortedDescending", "\u05DE\u05DE\u05D5\u05D9\u05DF \u05D1\u05E1\u05D3\u05E8 \u05D9\u05D5\u05E8\u05D3", "filterContainsOperator", "\u05DE\u05DB\u05D9\u05DC", "filterStartsWithOperator", "\u05DE\u05EA\u05D7\u05D9\u05DC \u05D1", "filterEndsWithOperator", "\u05DE\u05E1\u05EA\u05D9\u05D9\u05DD \u05D1", "filterEqOperator", "\u05E9\u05D5\u05D5\u05D4 \u05DC", "filterClearButton", "\u05E0\u05E7\u05D4", "filterFilterButton", "\u05E1\u05E0\u05DF", "selectionCheckboxLabel", "\u05D1\u05D7\u05E8 \u05E9\u05D5\u05E8\u05D4", "selectAllCheckboxLabel", "\u05D1\u05D7\u05E8 \u05D4\u05DB\u05DC", "columnMenuFilter", "\u05E1\u05E0\u05DF", "columnMenuSort", "\u05DE\u05D9\u05D5\u05DF", "columnMenuColumns", "\u05E2\u05DE\u05D5\u05D3\u05D5\u05EA", "columnMenuSortAscending", "\u05E2\u05D5\u05DC\u05D4", "columnMenuSortDescending", "\u05D9\u05D5\u05E8\u05D3"], ["kendoGridDetailTemplate", ""], [3, "width", "showSelectAll", "columnMenu"], ["field", "CompanyName", "title", "\u05D0\u05E8\u05D2\u05D5\u05DF", 3, "width", "minResizableWidth"], ["kendoGridCellTemplate", ""], ["field", "TenantCode", "title", "\u05E7\u05D5\u05D3", 3, "width"], ["field", "OrgType", "title", "\u05E1\u05D5\u05D2", 3, "width"], ["field", "Email", "title", '\u05D3\u05D5\u05D0"\u05DC', 3, "minResizableWidth"], ["field", "UserCount", "title", "\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD", 3, "width"], ["field", "IsActive", "title", "\u05E1\u05D8\u05D8\u05D5\u05E1", 3, "width"], ["title", "", 3, "width", "sortable", "resizable", "columnMenu"], [1, "org-detail-card"], [1, "detail-group"], [1, "detail-group-title"], [1, "detail-fields"], [1, "detail-field"], [1, "df-label"], [1, "df-val"], [1, "detail-group", "detail-group-full"], ["target", "_blank", "rel", "noopener", 3, "href"], [1, "detail-notes"], [1, "org-cell"], [1, "org-logo", 3, "src", "alt"], [1, "org-avatar"], [1, "org-name"], [1, "code-badge"], [1, "chip"], [1, "users-count"], [1, "muted"], [1, "status-dot-wrap"], [1, "status-dot"], [1, "status-label"], [1, "row-actions"], [1, "act-btn", "act-expand", 3, "click", "title"], [1, "pi"], ["class", "act-btn", 3, "act-lock", "act-unlock", "title", "click", 4, "appHasPerm"], ["class", "act-btn act-edit", "title", "\u05E2\u05E8\u05D5\u05DA", 3, "click", 4, "appHasPerm"], [1, "act-btn", 3, "click", "title"], ["title", "\u05E2\u05E8\u05D5\u05DA", 1, "act-btn", "act-edit", 3, "click"], [1, "pi", "pi-pencil"], [3, "closed", "saved", "org"]], template: function OrganizationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "\u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05DD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, OrganizationsComponent_button_7_Template, 2, 1, "button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "mat-icon", 6);
      \u0275\u0275text(11, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "input", 7);
      \u0275\u0275listener("input", function OrganizationsComponent_Template_input_input_12_listener($event) {
        return ctx.onSearch($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 8)(14, "button", 9);
      \u0275\u0275listener("click", function OrganizationsComponent_Template_button_click_14_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275text(15, " Excel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 10);
      \u0275\u0275listener("click", function OrganizationsComponent_Template_button_click_16_listener() {
        return ctx.exportPDF();
      });
      \u0275\u0275text(17, " PDF ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 11);
      \u0275\u0275conditionalCreate(19, OrganizationsComponent_Conditional_19_Template, 2, 0, "div", 12);
      \u0275\u0275conditionalCreate(20, OrganizationsComponent_Conditional_20_Template, 2, 1, "div", 13);
      \u0275\u0275conditionalCreate(21, OrganizationsComponent_Conditional_21_Template, 45, 61, "kendo-grid", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(22, OrganizationsComponent_Conditional_22_Template, 1, 1, "app-org-dialog", 15);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.orgs().length, " \u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05DD \u05E8\u05E9\u05D5\u05DE\u05D9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA");
      \u0275\u0275advance();
      \u0275\u0275property("appHasPerm", "ORGANIZATIONS:CREATE");
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
    MatIconModule,
    MatIcon,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    OrgDialogComponent,
    HasPermDirective,
    DatePipe
  ], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.orgs-page[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  direction: rtl;\n  gap: 16px;\n  margin-bottom: 20px;\n  flex-shrink: 0;\n}\n.header-titles[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0;\n}\n.header-titles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: var(--sf-text-secondary);\n  margin: 3px 0 0;\n}\n.toolbar[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.grid-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  overflow: hidden;\n}\n.btn-ai-analyze[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #0D47FF);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 7px 16px;\n  font-size: 0.82rem;\n  font-weight: 700;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: opacity 0.15s, transform 0.1s;\n  white-space: nowrap;\n}\n.btn-ai-analyze[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.btn-ai-analyze[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n  transform: translateY(-1px);\n}\n.btn-ai-analyze[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.export-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n}\n[_nghost-%COMP%]     .export-btns .k-button {\n  border: none !important;\n  border-radius: 0 !important;\n  background: var(--sf-bg-card) !important;\n  color: var(--sf-text-secondary) !important;\n  box-shadow: none !important;\n  padding: 6px 14px !important;\n  font-size: 0.82rem !important;\n  font-weight: 500 !important;\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n}\n[_nghost-%COMP%]     .export-btns .k-button:hover {\n  background: var(--sf-bg-hover) !important;\n}\n[_nghost-%COMP%]     .export-btns .k-button + .k-button {\n  border-inline-start: 1px solid var(--sf-border) !important;\n}\n[_nghost-%COMP%]     .export-btns .btn-excel:hover {\n  color: #16a34a !important;\n}\n[_nghost-%COMP%]     .export-btns .btn-pdf:hover {\n  color: #dc2626 !important;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 340px;\n  direction: rtl;\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 6px 12px;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.search-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--sf-border-focus);\n  box-shadow: 0 0 0 3px rgba(13, 71, 255, 0.12);\n}\n.search-icon[_ngcontent-%COMP%] {\n  color: var(--sf-text-muted);\n  font-size: 18px;\n  width: 18px !important;\n  height: 18px !important;\n  flex-shrink: 0;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  color: var(--sf-text);\n  font-size: 0.875rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--sf-text-muted);\n}\n.state-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: var(--sf-text-secondary);\n}\n.state-box.error[_ngcontent-%COMP%] {\n  color: var(--sf-danger);\n}\n[_nghost-%COMP%]     .orgs-grid {\n  height: 100%;\n  border-radius: 10px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04);\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n[_nghost-%COMP%]     .orgs-grid .k-grid-header th.k-header {\n  background: var(--sf-grid-hd-bg) !important;\n  color: var(--sf-grid-hd-color) !important;\n  font-weight: 700 !important;\n  font-size: 0.78rem !important;\n  text-align: right !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n  border-color: var(--sf-grid-hd-border) !important;\n  direction: rtl;\n}\n[_nghost-%COMP%]     .orgs-grid .k-grid-header {\n  background: var(--sf-grid-hd-bg) !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n}\n[_nghost-%COMP%]     .orgs-grid .k-column-menu-button {\n  color: var(--sf-grid-hd-color);\n  opacity: 0.7;\n}\n[_nghost-%COMP%]     .orgs-grid .k-column-menu-button:hover {\n  opacity: 1;\n}\n[_nghost-%COMP%]     .orgs-grid td.k-table-td {\n  text-align: right !important;\n  vertical-align: middle !important;\n  border-color: var(--sf-border) !important;\n  font-size: 0.875rem;\n  background: var(--sf-bg-card);\n  direction: rtl;\n  padding: 8px 12px !important;\n}\n[_nghost-%COMP%]     .orgs-grid tr.k-table-row:hover td {\n  background: var(--sf-bg-hover) !important;\n}\n[_nghost-%COMP%]     .orgs-grid .k-pager {\n  border-top: 1px solid var(--sf-border);\n  background: #f8fafc;\n  direction: rtl;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  font-size: 0.82rem;\n}\n[_nghost-%COMP%]     .orgs-grid .k-pager-wrap, \n[_nghost-%COMP%]     .orgs-grid .k-pager {\n  direction: rtl !important;\n}\n[_nghost-%COMP%]     .orgs-grid .k-detail-row > td {\n  background: var(--sf-bg) !important;\n  padding: 4px 0 12px !important;\n  border-bottom: 1px solid var(--sf-border) !important;\n}\n[_nghost-%COMP%]     .orgs-grid .k-sort-icon {\n  margin-right: 4px;\n}\n[_nghost-%COMP%]     .orgs-grid .k-checkbox {\n  accent-color: var(--sf-primary);\n}\n.org-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.org-logo[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  object-fit: contain;\n  border: 1px solid var(--sf-border);\n  padding: 2px;\n  background: #fff;\n  flex-shrink: 0;\n}\n.org-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  flex-shrink: 0;\n  background: var(--sf-primary-light);\n  color: var(--sf-primary);\n  font-size: 0.85rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.org-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--sf-text);\n  font-size: 0.88rem;\n}\n.code-badge[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n  background: var(--sf-bg);\n  border: 1px solid var(--sf-border);\n  border-radius: 5px;\n  padding: 2px 8px;\n  color: var(--sf-text-secondary);\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--sf-text-secondary);\n  font-size: 0.85rem;\n}\n.users-count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--sf-text);\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.chip-basic[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.chip-pro[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #3b82f6;\n}\n.chip-enterprise[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  color: #8b5cf6;\n}\n.chip-ot-PLATFORM[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.chip-ot-SOFTWARE_HOUSE[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.chip-ot-IMPLEMENTER[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0369a1;\n}\n.chip-ot-CLIENT[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.status-dot-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.dot-active[_ngcontent-%COMP%] {\n  background: #22c55e;\n  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.15);\n}\n.dot-inactive[_ngcontent-%COMP%] {\n  background: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);\n}\n.status-label[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: #374151;\n}\n.expiry-warn[_ngcontent-%COMP%] {\n  color: var(--sf-warning);\n  font-weight: 600;\n  font-size: 0.83rem;\n}\n.row-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.act-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.act-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.act-expand[_ngcontent-%COMP%] {\n  color: var(--sf-text-secondary);\n}\n.act-expand[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-primary);\n}\n.act-lock[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.act-lock[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.act-unlock[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.act-unlock[_ngcontent-%COMP%]:hover {\n  background: #f0fdf4;\n}\n.act-edit[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.act-edit[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n}\n.org-detail-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 16px 8px;\n  direction: rtl;\n}\n.detail-group[_ngcontent-%COMP%] {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 12px;\n  padding: 14px 18px;\n  min-width: 220px;\n  flex: 1;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.detail-group-full[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n}\n.detail-group-title[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--sf-text-muted);\n  margin-bottom: 10px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--sf-border);\n}\n.detail-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.detail-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n}\n.df-label[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: var(--sf-text-muted);\n  min-width: 90px;\n  flex-shrink: 0;\n}\n.df-val[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  color: var(--sf-text);\n  font-weight: 500;\n}\n.detail-notes[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  color: var(--sf-text-secondary);\n  line-height: 1.6;\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=organizations.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationsComponent, [{
    type: Component,
    args: [{ selector: "app-organizations", standalone: true, imports: [
      CommonModule,
      FormsModule,
      GridModule,
      ExcelModule,
      PDFModule,
      ButtonsModule,
      MatIconModule,
      MatProgressSpinnerModule,
      OrgDialogComponent,
      HasPermDirective
    ], template: `<div class="orgs-page">

  <!-- \u2500\u2500 Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="page-header">
    <div class="header-titles">
      <h1>\u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05DD</h1>
      <p>{{ orgs().length }} \u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05DD \u05E8\u05E9\u05D5\u05DE\u05D9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA</p>
    </div>
    <button *appHasPerm="'ORGANIZATIONS:CREATE'"
            kendoButton themeColor="primary" [svgIcon]="addIcon" (click)="openAdd()">
      \u05D0\u05E8\u05D2\u05D5\u05DF \u05D7\u05D3\u05E9
    </button>
  </div>

  <!-- \u2500\u2500 Toolbar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="toolbar">
    <div class="search-wrap">
      <mat-icon class="search-icon">search</mat-icon>
      <input class="search-input" type="text"
             placeholder="\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DC\u05E4\u05D9 \u05E9\u05DD, \u05E7\u05D5\u05D3, \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC..."
             (input)="onSearch($any($event.target).value)" />
    </div>
    <div class="export-btns">
      <button kendoButton fillMode="outline" [svgIcon]="excelIcon" (click)="exportExcel()" class="btn-export btn-excel" title="\u05D9\u05D9\u05E6\u05D5\u05D0 \u05DC\u05D0\u05E7\u05E1\u05DC">
        Excel
      </button>
      <button kendoButton fillMode="outline" [svgIcon]="pdfIcon" (click)="exportPDF()" class="btn-export btn-pdf" title="\u05D9\u05D9\u05E6\u05D5\u05D0 \u05DC-PDF">
        PDF
      </button>
    </div>
  </div>

  <div class="grid-wrap">
  @if (loading()) {
    <div class="state-box"><mat-spinner diameter="36" /></div>
  }

  @if (!loading() && error()) {
    <div class="state-box error">{{ error() }}</div>
  }

  <!-- \u2500\u2500 Kendo Grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (!loading() && !error()) {
    <kendo-grid
      [data]="{ data: pagedData, total: gridData.length }"
      [skip]="skip"
      [pageSize]="pageSize"
      [pageable]="{
        buttonCount: 5,
        info: true,
        type: 'numeric',
        pageSizes: [25, 50, 100]
      }"
      [sortable]="{ mode: 'single', allowUnsort: false }"
      [sort]="sort"
      [reorderable]="true"
      [resizable]="true"
      [selectable]="{ mode: 'multiple', checkboxOnly: true }"
      [columnMenu]="true"
      scrollable="scrollable"
      (pageChange)="onPageChange($event)"
      (sortChange)="onSortChange($event)"
      class="orgs-grid">

      <kendo-grid-pdf fileName="\u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05DD.pdf" [allPages]="true" paperSize="A4" [landscape]="true" margin="1cm" [repeatHeaders]="true">
      </kendo-grid-pdf>

      <kendo-grid-excel fileName="\u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05DD.xlsx" [fetchData]="allData">
        <!-- \u05E4\u05E8\u05D8\u05D9 \u05D0\u05E8\u05D2\u05D5\u05DF -->
        <kendo-excelexport-column field="CompanyName"   title="\u05E9\u05DD \u05D0\u05E8\u05D2\u05D5\u05DF"        [width]="200" />
        <kendo-excelexport-column field="TenantCode"    title="\u05E7\u05D5\u05D3 \u05D0\u05E8\u05D2\u05D5\u05DF"       [width]="120" />
        <kendo-excelexport-column field="BusinessNumber" title="\u05D7.\u05E4 / \u05E2.\u05DE"      [width]="120" />
        <kendo-excelexport-column field="ContactName"   title="\u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8"         [width]="150" />
        <kendo-excelexport-column field="Email"         title='\u05D3\u05D5\u05D0"\u05DC'           [width]="200" />
        <kendo-excelexport-column field="Phone"         title="\u05D8\u05DC\u05E4\u05D5\u05DF"           [width]="120" />
        <kendo-excelexport-column field="Phone2"        title="\u05D8\u05DC\u05E4\u05D5\u05DF 2"         [width]="120" />
        <kendo-excelexport-column field="Fax"           title="\u05E4\u05E7\u05E1"             [width]="120" />
        <kendo-excelexport-column field="Website"       title="\u05D0\u05EA\u05E8 \u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8"     [width]="160" />
        <!-- \u05DB\u05EA\u05D5\u05D1\u05EA -->
        <kendo-excelexport-column field="Address"       title="\u05DB\u05EA\u05D5\u05D1\u05EA"           [width]="200" />
        <kendo-excelexport-column field="City"          title="\u05E2\u05D9\u05E8"             [width]="120" />
        <kendo-excelexport-column field="Country"       title="\u05DE\u05D3\u05D9\u05E0\u05D4"           [width]="120" />
        <!-- \u05DE\u05E0\u05D5\u05D9 -->
        <kendo-excelexport-column field="PlanType"      title="\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA"          [width]="100" />
        <kendo-excelexport-column field="IsActive"      title="\u05E4\u05E2\u05D9\u05DC"            [width]="80" />
        <kendo-excelexport-column field="SubscribedAt"  title="\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05E6\u05D8\u05E8\u05E4\u05D5\u05EA"  [width]="140" />
        <kendo-excelexport-column field="ExpiresAt"     title="\u05EA\u05E4\u05D5\u05D2\u05EA \u05DE\u05E0\u05D5\u05D9"     [width]="140" />
        <kendo-excelexport-column field="MaxUsers"      title="\u05DE\u05E7\u05E1 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD"    [width]="120" />
        <kendo-excelexport-column field="UserCount"     title="\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05E4\u05D5\u05E2\u05DC"  [width]="120" />
        <kendo-excelexport-column field="MaxTickets"    title="\u05DE\u05E7\u05E1 \u05D8\u05D9\u05E7\u05D8\u05D9\u05DD"     [width]="120" />
        <!-- \u05D7\u05E9\u05D1\u05D5\u05E0\u05D0\u05D5\u05EA -->
        <kendo-excelexport-column field="BankName"      title="\u05D1\u05E0\u05E7"             [width]="120" />
        <kendo-excelexport-column field="BankBranch"    title="\u05E1\u05E0\u05D9\u05E3"            [width]="80" />
        <kendo-excelexport-column field="BankAccount"   title="\u05D7\u05E9\u05D1\u05D5\u05DF \u05D1\u05E0\u05E7"       [width]="140" />
        <kendo-excelexport-column field="AccountingRef" title="\u05D0\u05E1\u05DE\u05DB\u05EA\u05D0 \u05D7\u05E9\u05D1\u05D5\u05E0\u05D0\u05D9\u05EA" [width]="150" />
        <!-- \u05D4\u05E2\u05E8\u05D5\u05EA -->
        <kendo-excelexport-column field="Notes"         title="\u05D4\u05E2\u05E8\u05D5\u05EA"           [width]="250" />
      </kendo-grid-excel>

      <!-- \u2500\u2500 Localization \u05DE\u05DC\u05D0 \u2500\u2500 -->
      <kendo-grid-messages
        pagerItemsPerPage="\u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3"
        pagerOf="\u05DE\u05EA\u05D5\u05DA"
        pagerItems="\u05E8\u05E9\u05D5\u05DE\u05D5\u05EA"
        pagerFirstPage="\u05E2\u05DE\u05D5\u05D3 \u05E8\u05D0\u05E9\u05D5\u05DF"
        pagerLastPage="\u05E2\u05DE\u05D5\u05D3 \u05D0\u05D7\u05E8\u05D5\u05DF"
        pagerPreviousPage="\u05D4\u05E7\u05D5\u05D3\u05DD"
        pagerNextPage="\u05D4\u05D1\u05D0"
        pagerPage="\u05E2\u05DE\u05D5\u05D3"
        pagerPageNumberInputTitle="\u05DE\u05E1\u05E4\u05E8 \u05E2\u05DE\u05D5\u05D3"
        noRecords="\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E8\u05E9\u05D5\u05DE\u05D5\u05EA"
        loading="\u05D8\u05D5\u05E2\u05DF..."
        sortAscending="\u05DE\u05D9\u05D5\u05DF \u05E2\u05D5\u05DC\u05D4"
        sortDescending="\u05DE\u05D9\u05D5\u05DF \u05D9\u05D5\u05E8\u05D3"
        sortedAscending="\u05DE\u05DE\u05D5\u05D9\u05DF \u05D1\u05E1\u05D3\u05E8 \u05E2\u05D5\u05DC\u05D4"
        sortedDescending="\u05DE\u05DE\u05D5\u05D9\u05DF \u05D1\u05E1\u05D3\u05E8 \u05D9\u05D5\u05E8\u05D3"
        filterContainsOperator="\u05DE\u05DB\u05D9\u05DC"
        filterStartsWithOperator="\u05DE\u05EA\u05D7\u05D9\u05DC \u05D1"
        filterEndsWithOperator="\u05DE\u05E1\u05EA\u05D9\u05D9\u05DD \u05D1"
        filterEqOperator="\u05E9\u05D5\u05D5\u05D4 \u05DC"
        filterClearButton="\u05E0\u05E7\u05D4"
        filterFilterButton="\u05E1\u05E0\u05DF"
        selectionCheckboxLabel="\u05D1\u05D7\u05E8 \u05E9\u05D5\u05E8\u05D4"
        selectAllCheckboxLabel="\u05D1\u05D7\u05E8 \u05D4\u05DB\u05DC"
        columnMenuFilter="\u05E1\u05E0\u05DF"
        columnMenuSort="\u05DE\u05D9\u05D5\u05DF"
        columnMenuColumns="\u05E2\u05DE\u05D5\u05D3\u05D5\u05EA"
        columnMenuSortAscending="\u05E2\u05D5\u05DC\u05D4"
        columnMenuSortDescending="\u05D9\u05D5\u05E8\u05D3"
      />

      <!-- \u05D4\u05E8\u05D7\u05D1\u05EA \u05E9\u05D5\u05E8\u05D4 \u2014 Kendo built-in detail expansion -->
      <ng-template kendoGridDetailTemplate let-o>
        <div class="org-detail-card">
          <div class="detail-group">
            <div class="detail-group-title">\u05E4\u05E8\u05D8\u05D9 \u05E7\u05E9\u05E8</div>
            <div class="detail-fields">
              <div class="detail-field"><span class="df-label">\u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8</span><span class="df-val">{{ o.ContactName }}</span></div>
              <div class="detail-field"><span class="df-label">\u05D8\u05DC\u05E4\u05D5\u05DF</span><span class="df-val">{{ o.Phone }}</span></div>
              @if (o.Phone2) { <div class="detail-field"><span class="df-label">\u05D8\u05DC\u05E4\u05D5\u05DF 2</span><span class="df-val">{{ o.Phone2 }}</span></div> }
              @if (o.Fax)    { <div class="detail-field"><span class="df-label">\u05E4\u05E7\u05E1</span><span class="df-val">{{ o.Fax }}</span></div> }
              @if (o.Website){ <div class="detail-field"><span class="df-label">\u05D0\u05EA\u05E8</span><span class="df-val"><a [href]="o.Website" target="_blank" rel="noopener">{{ o.Website }}</a></span></div> }
            </div>
          </div>
          <div class="detail-group">
            <div class="detail-group-title">\u05DB\u05EA\u05D5\u05D1\u05EA</div>
            <div class="detail-fields">
              @if (o.Address){ <div class="detail-field"><span class="df-label">\u05E8\u05D7\u05D5\u05D1</span><span class="df-val">{{ o.Address }}</span></div> }
              @if (o.City)   { <div class="detail-field"><span class="df-label">\u05E2\u05D9\u05E8</span><span class="df-val">{{ o.City }}</span></div> }
              @if (o.Country){ <div class="detail-field"><span class="df-label">\u05DE\u05D3\u05D9\u05E0\u05D4</span><span class="df-val">{{ o.Country }}</span></div> }
              @if (o.BusinessNumber){ <div class="detail-field"><span class="df-label">\u05D7.\u05E4 / \u05E2.\u05DE</span><span class="df-val">{{ o.BusinessNumber }}</span></div> }
            </div>
          </div>
          <div class="detail-group">
            <div class="detail-group-title">\u05DE\u05E0\u05D5\u05D9 \u05D5\u05D1\u05E0\u05E7</div>
            <div class="detail-fields">
              <div class="detail-field"><span class="df-label">\u05D4\u05E6\u05D8\u05E8\u05E4\u05D5\u05EA</span><span class="df-val">{{ o.SubscribedAt | date:'dd/MM/yyyy' }}</span></div>
              <div class="detail-field"><span class="df-label">\u05EA\u05E4\u05D5\u05D2\u05D4</span><span class="df-val">{{ o.ExpiresAt | date:'dd/MM/yyyy' }}</span></div>
              <div class="detail-field"><span class="df-label">\u05DE\u05E7\u05E1. \u05DB\u05E8\u05D8\u05D9\u05E1\u05D9\u05DD</span><span class="df-val">{{ o.MaxTickets }}</span></div>
              @if (o.BankName){ <div class="detail-field"><span class="df-label">\u05D1\u05E0\u05E7</span><span class="df-val">{{ o.BankName }} / {{ o.BankBranch }}</span></div> }
              @if (o.AccountingRef){ <div class="detail-field"><span class="df-label">\u05D0\u05E1\u05DE\u05DB\u05EA\u05D0</span><span class="df-val">{{ o.AccountingRef }}</span></div> }
            </div>
          </div>
          @if (o.Notes) {
            <div class="detail-group detail-group-full">
              <div class="detail-group-title">\u05D4\u05E2\u05E8\u05D5\u05EA</div>
              <p class="detail-notes">{{ o.Notes }}</p>
            </div>
          }
        </div>
      </ng-template>

      <!-- Checkbox -->
      <kendo-grid-checkbox-column [width]="56" [showSelectAll]="true" [columnMenu]="false" />

      <!-- \u05D0\u05E8\u05D2\u05D5\u05DF \u2014 \u05E8\u05D5\u05D7\u05D1 \u05E7\u05D1\u05D5\u05E2 -->
      <kendo-grid-column field="CompanyName" title="\u05D0\u05E8\u05D2\u05D5\u05DF" [width]="280" [minResizableWidth]="160">
        <ng-template kendoGridCellTemplate let-o>
          <div class="org-cell">
            @if (o.LogoUrl) {
              <img [src]="o.LogoUrl" [alt]="o.CompanyName" class="org-logo" />
            } @else {
              <div class="org-avatar">{{ o.CompanyName.charAt(0) }}</div>
            }
            <span class="org-name">{{ o.CompanyName }}</span>
          </div>
        </ng-template>
      </kendo-grid-column>

      <!-- \u05E7\u05D5\u05D3 \u05D0\u05E8\u05D2\u05D5\u05DF -->
      <kendo-grid-column field="TenantCode" title="\u05E7\u05D5\u05D3" [width]="120">
        <ng-template kendoGridCellTemplate let-o>
          <code class="code-badge">{{ o.TenantCode }}</code>
        </ng-template>
      </kendo-grid-column>

      <!-- \u05E1\u05D5\u05D2 \u05D0\u05E8\u05D2\u05D5\u05DF -->
      <kendo-grid-column field="OrgType" title="\u05E1\u05D5\u05D2" [width]="130">
        <ng-template kendoGridCellTemplate let-o>
          <span [class]="orgTypeClass(o.OrgType)">{{ orgTypeLabel(o.OrgType) }}</span>
        </ng-template>
      </kendo-grid-column>

      <!-- \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u2014 \u05D2\u05DE\u05D9\u05E9, \u05E7\u05D5\u05DC\u05D8 \u05E9\u05D8\u05D7 \u05E0\u05D5\u05EA\u05E8 -->
      <kendo-grid-column field="Email" title='\u05D3\u05D5\u05D0"\u05DC' [minResizableWidth]="140" />

      <!-- \u05EA\u05D5\u05DB\u05E0\u05D9\u05EA -->
      <kendo-grid-column field="PlanType" title="\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA" [width]="100">
        <ng-template kendoGridCellTemplate let-o>
          <span class="chip" [class]="'chip-' + o.PlanType">{{ planLabel(o.PlanType) }}</span>
        </ng-template>
      </kendo-grid-column>

      <!-- \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD -->
      <kendo-grid-column field="UserCount" title="\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD" [width]="100">
        <ng-template kendoGridCellTemplate let-o>
          <span class="users-count">{{ o.UserCount }}</span>
          <span class="muted"> / {{ o.MaxUsers }}</span>
        </ng-template>
      </kendo-grid-column>

      <!-- \u05E1\u05D8\u05D8\u05D5\u05E1 -->
      <kendo-grid-column field="IsActive" title="\u05E1\u05D8\u05D8\u05D5\u05E1" [width]="95">
        <ng-template kendoGridCellTemplate let-o>
          <div class="status-dot-wrap">
            <span class="status-dot" [class.dot-active]="o.IsActive" [class.dot-inactive]="!o.IsActive"></span>
            <span class="status-label">{{ o.IsActive ? '\u05E4\u05E2\u05D9\u05DC' : '\u05DE\u05D5\u05E9\u05D4\u05D4' }}</span>
          </div>
        </ng-template>
      </kendo-grid-column>

      <!-- \u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u2014 \u05E7\u05D1\u05D5\u05E2, \u05DC\u05D0 \u05E0\u05D9\u05EA\u05DF \u05DC\u05DE\u05D9\u05D5\u05DF -->
      <kendo-grid-column title="" [width]="104" [sortable]="false" [resizable]="false" [columnMenu]="false">
        <ng-template kendoGridCellTemplate let-o let-rowIndex="rowIndex">
          <div class="row-actions">
            <button class="act-btn act-expand"
                    [class.expanded]="isExpanded(o.TenantID)"
                    [title]="isExpanded(o.TenantID) ? '\u05E1\u05D2\u05D5\u05E8' : '\u05E4\u05E8\u05D8\u05D9\u05DD'"
                    (click)="toggleDetail(o, rowIndex)">
              <i class="pi" [class.pi-chevron-down]="!isExpanded(o.TenantID)" [class.pi-chevron-up]="isExpanded(o.TenantID)"></i>
            </button>
            <button *appHasPerm="'ORGANIZATIONS:UPDATE'"
                    class="act-btn"
                    [class.act-lock]="o.IsActive"
                    [class.act-unlock]="!o.IsActive"
                    [title]="o.IsActive ? '\u05D4\u05E9\u05D1\u05EA' : '\u05D4\u05E4\u05E2\u05DC'"
                    (click)="toggleActive(o)">
              <i class="pi" [class.pi-lock]="o.IsActive" [class.pi-lock-open]="!o.IsActive"></i>
            </button>
            <button *appHasPerm="'ORGANIZATIONS:UPDATE'"
                    class="act-btn act-edit" title="\u05E2\u05E8\u05D5\u05DA" (click)="openEdit(o)">
              <i class="pi pi-pencil"></i>
            </button>
          </div>
        </ng-template>
      </kendo-grid-column>


    </kendo-grid>
  }
  </div><!-- /grid-wrap -->

</div>

@if (dialogOpen()) {
  <app-org-dialog
    [org]="dialogOrg()"
    (closed)="dialogOpen.set(false)"
    (saved)="onSaved(); dialogOpen.set(false)" />
}
`, styles: ['/* src/app/features/organizations/organizations.component.scss */\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.orgs-page {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  direction: rtl;\n  gap: 16px;\n  margin-bottom: 20px;\n  flex-shrink: 0;\n}\n.header-titles h1 {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0;\n}\n.header-titles p {\n  font-size: 0.83rem;\n  color: var(--sf-text-secondary);\n  margin: 3px 0 0;\n}\n.toolbar {\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.grid-wrap {\n  flex: 1;\n  min-height: 0;\n  overflow: hidden;\n}\n.btn-ai-analyze {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #0D47FF);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 7px 16px;\n  font-size: 0.82rem;\n  font-weight: 700;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: opacity 0.15s, transform 0.1s;\n  white-space: nowrap;\n}\n.btn-ai-analyze i {\n  font-size: 0.85rem;\n}\n.btn-ai-analyze:hover {\n  opacity: 0.88;\n  transform: translateY(-1px);\n}\n.btn-ai-analyze:active {\n  transform: translateY(0);\n}\n.export-btns {\n  display: flex;\n  gap: 0;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n}\n:host ::ng-deep .export-btns .k-button {\n  border: none !important;\n  border-radius: 0 !important;\n  background: var(--sf-bg-card) !important;\n  color: var(--sf-text-secondary) !important;\n  box-shadow: none !important;\n  padding: 6px 14px !important;\n  font-size: 0.82rem !important;\n  font-weight: 500 !important;\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n}\n:host ::ng-deep .export-btns .k-button:hover {\n  background: var(--sf-bg-hover) !important;\n}\n:host ::ng-deep .export-btns .k-button + .k-button {\n  border-inline-start: 1px solid var(--sf-border) !important;\n}\n:host ::ng-deep .export-btns .btn-excel:hover {\n  color: #16a34a !important;\n}\n:host ::ng-deep .export-btns .btn-pdf:hover {\n  color: #dc2626 !important;\n}\n.search-wrap {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 340px;\n  direction: rtl;\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 6px 12px;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.search-wrap:focus-within {\n  border-color: var(--sf-border-focus);\n  box-shadow: 0 0 0 3px rgba(13, 71, 255, 0.12);\n}\n.search-icon {\n  color: var(--sf-text-muted);\n  font-size: 18px;\n  width: 18px !important;\n  height: 18px !important;\n  flex-shrink: 0;\n}\n.search-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  color: var(--sf-text);\n  font-size: 0.875rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n.search-input::placeholder {\n  color: var(--sf-text-muted);\n}\n.state-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: var(--sf-text-secondary);\n}\n.state-box.error {\n  color: var(--sf-danger);\n}\n:host ::ng-deep .orgs-grid {\n  height: 100%;\n  border-radius: 10px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04);\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n:host ::ng-deep .orgs-grid .k-grid-header th.k-header {\n  background: var(--sf-grid-hd-bg) !important;\n  color: var(--sf-grid-hd-color) !important;\n  font-weight: 700 !important;\n  font-size: 0.78rem !important;\n  text-align: right !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n  border-color: var(--sf-grid-hd-border) !important;\n  direction: rtl;\n}\n:host ::ng-deep .orgs-grid .k-grid-header {\n  background: var(--sf-grid-hd-bg) !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n}\n:host ::ng-deep .orgs-grid .k-column-menu-button {\n  color: var(--sf-grid-hd-color);\n  opacity: 0.7;\n}\n:host ::ng-deep .orgs-grid .k-column-menu-button:hover {\n  opacity: 1;\n}\n:host ::ng-deep .orgs-grid td.k-table-td {\n  text-align: right !important;\n  vertical-align: middle !important;\n  border-color: var(--sf-border) !important;\n  font-size: 0.875rem;\n  background: var(--sf-bg-card);\n  direction: rtl;\n  padding: 8px 12px !important;\n}\n:host ::ng-deep .orgs-grid tr.k-table-row:hover td {\n  background: var(--sf-bg-hover) !important;\n}\n:host ::ng-deep .orgs-grid .k-pager {\n  border-top: 1px solid var(--sf-border);\n  background: #f8fafc;\n  direction: rtl;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  font-size: 0.82rem;\n}\n:host ::ng-deep .orgs-grid .k-pager-wrap,\n:host ::ng-deep .orgs-grid .k-pager {\n  direction: rtl !important;\n}\n:host ::ng-deep .orgs-grid .k-detail-row > td {\n  background: var(--sf-bg) !important;\n  padding: 4px 0 12px !important;\n  border-bottom: 1px solid var(--sf-border) !important;\n}\n:host ::ng-deep .orgs-grid .k-sort-icon {\n  margin-right: 4px;\n}\n:host ::ng-deep .orgs-grid .k-checkbox {\n  accent-color: var(--sf-primary);\n}\n.org-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.org-logo {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  object-fit: contain;\n  border: 1px solid var(--sf-border);\n  padding: 2px;\n  background: #fff;\n  flex-shrink: 0;\n}\n.org-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  flex-shrink: 0;\n  background: var(--sf-primary-light);\n  color: var(--sf-primary);\n  font-size: 0.85rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.org-name {\n  font-weight: 600;\n  color: var(--sf-text);\n  font-size: 0.88rem;\n}\n.code-badge {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n  background: var(--sf-bg);\n  border: 1px solid var(--sf-border);\n  border-radius: 5px;\n  padding: 2px 8px;\n  color: var(--sf-text-secondary);\n}\n.muted {\n  color: var(--sf-text-secondary);\n  font-size: 0.85rem;\n}\n.users-count {\n  font-weight: 600;\n  color: var(--sf-text);\n}\n.chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.chip-basic {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.chip-pro {\n  background: #eff6ff;\n  color: #3b82f6;\n}\n.chip-enterprise {\n  background: #faf5ff;\n  color: #8b5cf6;\n}\n.chip-ot-PLATFORM {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.chip-ot-SOFTWARE_HOUSE {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.chip-ot-IMPLEMENTER {\n  background: #e0f2fe;\n  color: #0369a1;\n}\n.chip-ot-CLIENT {\n  background: #d1fae5;\n  color: #065f46;\n}\n.status-dot-wrap {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.status-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.dot-active {\n  background: #22c55e;\n  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.15);\n}\n.dot-inactive {\n  background: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);\n}\n.status-label {\n  font-size: 0.83rem;\n  color: #374151;\n}\n.expiry-warn {\n  color: var(--sf-warning);\n  font-weight: 600;\n  font-size: 0.83rem;\n}\n.row-actions {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.act-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.act-btn i {\n  font-size: 0.9rem;\n}\n.act-expand {\n  color: var(--sf-text-secondary);\n}\n.act-expand:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-primary);\n}\n.act-lock {\n  color: #ef4444;\n}\n.act-lock:hover {\n  background: #fef2f2;\n}\n.act-unlock {\n  color: #16a34a;\n}\n.act-unlock:hover {\n  background: #f0fdf4;\n}\n.act-edit {\n  color: #3b82f6;\n}\n.act-edit:hover {\n  background: #eff6ff;\n}\n.org-detail-card {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 16px 8px;\n  direction: rtl;\n}\n.detail-group {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 12px;\n  padding: 14px 18px;\n  min-width: 220px;\n  flex: 1;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.detail-group-full {\n  flex-basis: 100%;\n}\n.detail-group-title {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--sf-text-muted);\n  margin-bottom: 10px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--sf-border);\n}\n.detail-fields {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.detail-field {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n}\n.df-label {\n  font-size: 0.76rem;\n  color: var(--sf-text-muted);\n  min-width: 90px;\n  flex-shrink: 0;\n}\n.df-val {\n  font-size: 0.84rem;\n  color: var(--sf-text);\n  font-weight: 500;\n}\n.detail-notes {\n  font-size: 0.84rem;\n  color: var(--sf-text-secondary);\n  line-height: 1.6;\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=organizations.component.css.map */\n'] }]
  }], () => [{ type: OrganizationService }], { grid: [{
    type: ViewChild,
    args: [GridComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrganizationsComponent, { className: "OrganizationsComponent", filePath: "src/app/features/organizations/organizations.component.ts", lineNumber: 33 });
})();
export {
  OrganizationsComponent
};
//# sourceMappingURL=chunk-BL36EDRR.js.map
