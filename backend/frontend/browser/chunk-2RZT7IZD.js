import {
  OrganizationService
} from "./chunk-DF25DVOP.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-QZMRJPSG.js";
import "./chunk-FAI5CTFG.js";
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
  DropDownListModule,
  ExcelComponent,
  ExcelModule,
  GridComponent,
  GridModule,
  NumericTextBoxComponent,
  NumericTextBoxModule,
  PDFComponent,
  PDFModule,
  SwitchModule,
  TextAreaComponent,
  TextAreaModule,
  TextBoxDirective,
  TextBoxModule,
  orderBy
} from "./chunk-RXO44S6U.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-5RXIK7OL.js";
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
  homeIcon,
  pencilIcon,
  plusIcon,
  userIcon,
  walletIcon
} from "./chunk-KKZNNEP2.js";
import "./chunk-EONFWV3N.js";
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
} from "./chunk-4QF53X3W.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  EventEmitter,
  HttpClient,
  Injectable,
  Input,
  NgZone,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-DEBWI7RP.js";

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
    \u0275\u0275element(0, "span", 16);
  }
}
function OrgDialogComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function OrgDialogComponent_For_4_Template_button_click_0_listener() {
      const g_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeGroup.set(g_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 13);
    \u0275\u0275element(2, "kendo-svg-icon", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, OrgDialogComponent_For_4_Conditional_5_Template, 1, 0, "span", 16);
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
    \u0275\u0275elementStart(0, "small", 24);
    \u0275\u0275text(1, "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
  }
}
function OrgDialogComponent_Conditional_8_Conditional_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 24);
    \u0275\u0275text(1, "\u05E4\u05D5\u05E8\u05DE\u05D8: ABC_12345");
    \u0275\u0275elementEnd();
  }
}
function OrgDialogComponent_Conditional_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "label");
    \u0275\u0275text(2, "\u05E7\u05D5\u05D3 \u05D0\u05E8\u05D2\u05D5\u05DF ");
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 22)(6, "input", 36);
    \u0275\u0275listener("input", function OrgDialogComponent_Conditional_8_Conditional_8_Template_input_input_6_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onTenantCodeInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(7, OrgDialogComponent_Conditional_8_Conditional_8_Conditional_7_Template, 2, 0, "small", 24);
    \u0275\u0275conditionalCreate(8, OrgDialogComponent_Conditional_8_Conditional_8_Conditional_8_Template, 2, 0, "small", 24);
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
function OrgDialogComponent_Conditional_8_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 24);
    \u0275\u0275text(1, "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
  }
}
function OrgDialogComponent_Conditional_8_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "img", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.logoPreview, \u0275\u0275sanitizeUrl);
  }
}
function OrgDialogComponent_Conditional_8_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "kendo-svg-icon", 14);
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
function OrgDialogComponent_Conditional_8_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, "\u23F3");
    \u0275\u0275elementEnd();
  }
}
function OrgDialogComponent_Conditional_8_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2191 ");
  }
}
function OrgDialogComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 17)(2, "h3");
    \u0275\u0275text(3, "\u05E4\u05E8\u05D8\u05D9 \u05D0\u05E8\u05D2\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "\u05DE\u05D9\u05D3\u05E2 \u05D1\u05E1\u05D9\u05E1\u05D9 \u05D5\u05DC\u05D5\u05D2\u05D5");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 18)(7, "div", 19);
    \u0275\u0275conditionalCreate(8, OrgDialogComponent_Conditional_8_Conditional_8_Template, 9, 2, "div", 20);
    \u0275\u0275elementStart(9, "div", 20)(10, "label");
    \u0275\u0275text(11, "\u05E9\u05DD \u05D7\u05D1\u05E8\u05D4 ");
    \u0275\u0275elementStart(12, "span", 21);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 22);
    \u0275\u0275element(15, "input", 23);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(16, OrgDialogComponent_Conditional_8_Conditional_16_Template, 2, 0, "small", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 20)(18, "label");
    \u0275\u0275text(19, "\u05DE\u05E1\u05E4\u05E8 \u05E2\u05D5\u05E1\u05E7 / \u05D7.\u05E4.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 22);
    \u0275\u0275element(21, "input", 25);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 26)(23, "div", 27);
    \u0275\u0275text(24, "\u05DC\u05D5\u05D2\u05D5 \u05D7\u05D1\u05E8\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(25, OrgDialogComponent_Conditional_8_Conditional_25_Template, 2, 1, "div", 28)(26, OrgDialogComponent_Conditional_8_Conditional_26_Template, 4, 1, "div", 29);
    \u0275\u0275elementStart(27, "div", 30)(28, "label", 31);
    \u0275\u0275conditionalCreate(29, OrgDialogComponent_Conditional_8_Conditional_29_Template, 2, 0, "span", 32)(30, OrgDialogComponent_Conditional_8_Conditional_30_Template, 1, 0);
    \u0275\u0275text(31, " \u05D4\u05E2\u05DC\u05D0\u05D4 ");
    \u0275\u0275elementStart(32, "input", 33);
    \u0275\u0275listener("change", function OrgDialogComponent_Conditional_8_Template_input_change_32_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onLogoSelect($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "button", 34);
    \u0275\u0275listener("click", function OrgDialogComponent_Conditional_8_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeLogo());
    });
    \u0275\u0275text(34, " \u{1F5D1} \u05DE\u05D7\u05D9\u05E7\u05D4 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "small", 35);
    \u0275\u0275text(36, "PNG \xB7 JPG \xB7 SVG \xB7 max 2MB");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!ctx_r2.isEdit ? 8 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.form.get("companyName")?.invalid && ctx_r2.form.get("companyName")?.touched ? 16 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.logoPreview ? 25 : 26);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("loading", ctx_r2.uploading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.uploading ? 29 : 30);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r2.logoPreview);
  }
}
function OrgDialogComponent_Conditional_9_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 24);
    \u0275\u0275text(1, '\u05DB\u05EA\u05D5\u05D1\u05EA \u05D3\u05D5\u05D0"\u05DC \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4');
    \u0275\u0275elementEnd();
  }
}
function OrgDialogComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 17)(2, "h3");
    \u0275\u0275text(3, "\u05E4\u05E8\u05D8\u05D9 \u05E7\u05E9\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, '\u05D0\u05E0\u05E9\u05D9 \u05E7\u05E9\u05E8, \u05D3\u05D5\u05D0"\u05DC \u05D5\u05D8\u05DC\u05E4\u05D5\u05E0\u05D9\u05DD');
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 20)(7, "label");
    \u0275\u0275text(8, "\u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 22);
    \u0275\u0275element(10, "input", 38);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 20)(12, "label");
    \u0275\u0275text(13, '\u05D3\u05D5\u05D0"\u05DC ');
    \u0275\u0275elementStart(14, "span", 21);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 22);
    \u0275\u0275element(17, "input", 39);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(18, OrgDialogComponent_Conditional_9_Conditional_18_Template, 2, 0, "small", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 20)(20, "label");
    \u0275\u0275text(21, "\u05D8\u05DC\u05E4\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 22);
    \u0275\u0275element(23, "input", 40);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 20)(25, "label");
    \u0275\u0275text(26, "\u05D8\u05DC\u05E4\u05D5\u05DF 2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 22);
    \u0275\u0275element(28, "input", 41);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 20)(30, "label");
    \u0275\u0275text(31, "\u05E4\u05E7\u05E1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 22);
    \u0275\u0275element(33, "input", 42);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 20)(35, "label");
    \u0275\u0275text(36, "\u05D0\u05EA\u05E8 \u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 22);
    \u0275\u0275element(38, "input", 43);
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
function OrgDialogComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 17)(2, "h3");
    \u0275\u0275text(3, "\u05DB\u05EA\u05D5\u05D1\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "\u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05E4\u05EA\u05D7 \u05D4\u05D0\u05E8\u05D2\u05D5\u05DF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 20)(7, "label");
    \u0275\u0275text(8, "\u05DB\u05EA\u05D5\u05D1\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 22);
    \u0275\u0275element(10, "input", 44);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 20)(12, "label");
    \u0275\u0275text(13, "\u05E2\u05D9\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 22);
    \u0275\u0275element(15, "input", 45);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 20)(17, "label");
    \u0275\u0275text(18, "\u05DE\u05D3\u05D9\u05E0\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 22);
    \u0275\u0275element(20, "input", 46);
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
  }
}
function OrgDialogComponent_Conditional_11_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "label");
    \u0275\u0275text(2, "\u05E1\u05D8\u05D8\u05D5\u05E1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22)(4, "div", 50)(5, "button", 51);
    \u0275\u0275listener("click", function OrgDialogComponent_Conditional_11_Conditional_21_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.form.get("isActive")?.setValue(true));
    });
    \u0275\u0275text(6, " \u2713 \u05E4\u05E2\u05D9\u05DC ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 51);
    \u0275\u0275listener("click", function OrgDialogComponent_Conditional_11_Conditional_21_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
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
function OrgDialogComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 17)(2, "h3");
    \u0275\u0275text(3, "\u05DE\u05E0\u05D5\u05D9 \u05D5\u05DE\u05D2\u05D1\u05DC\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA, \u05DE\u05DB\u05E1\u05D5\u05EA \u05D5\u05E1\u05D8\u05D8\u05D5\u05E1 \u05D0\u05E8\u05D2\u05D5\u05DF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 20)(7, "label");
    \u0275\u0275text(8, "\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 22);
    \u0275\u0275element(10, "kendo-dropdownlist", 47);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 20)(12, "label");
    \u0275\u0275text(13, "\u05DE\u05E7\u05E1\u05D9\u05DE\u05D5\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 22);
    \u0275\u0275element(15, "kendo-numerictextbox", 48);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 20)(17, "label");
    \u0275\u0275text(18, "\u05DE\u05E7\u05E1\u05D9\u05DE\u05D5\u05DD \u05EA\u05E7\u05DC\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 22);
    \u0275\u0275element(20, "kendo-numerictextbox", 49);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(21, OrgDialogComponent_Conditional_11_Conditional_21_Template, 9, 4, "div", 20);
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
function OrgDialogComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 17)(2, "h3");
    \u0275\u0275text(3, "\u05E4\u05E8\u05D8\u05D9 \u05D7\u05D9\u05D5\u05D1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "\u05E4\u05E8\u05D8\u05D9 \u05D1\u05E0\u05E7, \u05D0\u05E9\u05E8\u05D0\u05D9 \u05D5\u05D0\u05DE\u05E6\u05E2\u05D9 \u05EA\u05E9\u05DC\u05D5\u05DD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 20)(7, "label");
    \u0275\u0275text(8, "\u05D1\u05E0\u05E7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 22);
    \u0275\u0275element(10, "input", 52);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 20)(12, "label");
    \u0275\u0275text(13, "\u05E1\u05E0\u05D9\u05E3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 22);
    \u0275\u0275element(15, "input", 53);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 20)(17, "label");
    \u0275\u0275text(18, "\u05DE\u05E1\u05E4\u05E8 \u05D7\u05E9\u05D1\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 22);
    \u0275\u0275element(20, "input", 54);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 20)(22, "label");
    \u0275\u0275text(23, '\u05DE\u05E1\u05E4\u05E8 \u05D1\u05D4\u05E0\u05D4"\u05D7');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 22);
    \u0275\u0275element(25, "input", 55);
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
function OrgDialogComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 17)(2, "h3");
    \u0275\u0275text(3, "\u05D4\u05E2\u05E8\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "\u05D4\u05E2\u05E8\u05D5\u05EA \u05D7\u05D5\u05E4\u05E9\u05D9\u05D5\u05EA \u05E2\u05DC \u05D4\u05D0\u05E8\u05D2\u05D5\u05DF");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "kendo-textarea", 56);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("rows", 8);
    \u0275\u0275control();
  }
}
function OrgDialogComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-loader", 10);
  }
}
function OrgDialogComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2713 ");
  }
}
var OrgDialogComponent = class _OrgDialogComponent {
  fb;
  svc;
  upload;
  zone;
  cdr;
  org = null;
  closed = new EventEmitter();
  saved = new EventEmitter();
  saving = false;
  uploading = false;
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
  plans = [
    { label: "\u05D1\u05E1\u05D9\u05E1\u05D9", value: "basic" },
    { label: "\u05DE\u05E7\u05E6\u05D5\u05E2\u05D9", value: "pro" },
    { label: "\u05D0\u05E8\u05D2\u05D5\u05E0\u05D9", value: "enterprise" }
  ];
  groups = [
    { id: "general", text: "\u05E4\u05E8\u05D8\u05D9 \u05D0\u05E8\u05D2\u05D5\u05DF", icon: buildingsIcon },
    { id: "contact", text: "\u05E4\u05E8\u05D8\u05D9 \u05E7\u05E9\u05E8", icon: userIcon },
    { id: "address", text: "\u05DB\u05EA\u05D5\u05D1\u05EA", icon: homeIcon },
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
  constructor(fb, svc, upload, zone, cdr) {
    this.fb = fb;
    this.svc = svc;
    this.upload = upload;
    this.zone = zone;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.buildForm();
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
        notes: [o.Notes ?? ""]
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
        notes: [""]
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
  groupFields = {
    general: ["tenantCode", "companyName", "businessNumber"],
    contact: ["contactName", "email", "phone", "phone2", "fax", "website"],
    address: ["address", "city", "country"],
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
    return new (__ngFactoryType__ || _OrgDialogComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(OrganizationService), \u0275\u0275directiveInject(UploadService), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrgDialogComponent, selectors: [["app-org-dialog"]], inputs: { org: "org" }, outputs: { closed: "closed", saved: "saved" }, decls: 22, vars: 15, consts: [[3, "close", "title", "width", "minWidth"], [1, "org-dialog-body"], [1, "org-nav"], ["type", "button", 1, "nav-item", 3, "active"], [1, "org-content"], ["novalidate", "", 3, "formGroup"], [1, "form-error-banner"], [1, "content-section"], [1, "dialog-footer"], ["kendoButton", "", 1, "btn-save", 3, "click", "disabled"], ["type", "pulsing", "size", "small"], ["kendoButton", "", "fillMode", "outline", 3, "click", "disabled"], ["type", "button", 1, "nav-item", 3, "click"], [1, "nav-icon"], [3, "icon"], [1, "nav-text"], [1, "nav-indicator"], [1, "section-header"], [1, "general-layout"], [1, "general-fields"], [1, "form-row"], [1, "req"], [1, "input-col"], ["kendoTextBox", "", "formControlName", "companyName"], [1, "err"], ["kendoTextBox", "", "formControlName", "businessNumber", "placeholder", "123456789"], [1, "logo-aside"], [1, "logo-label"], [1, "logo-preview-box"], [1, "logo-placeholder"], [1, "logo-btns"], [1, "btn-logo-upload"], [1, "spin"], ["type", "file", "accept", ".png,.jpg,.jpeg,.svg,.webp", 2, "display", "none", 3, "change"], ["type", "button", 1, "btn-logo-delete", 3, "click", "disabled"], [1, "logo-hint"], ["kendoTextBox", "", "formControlName", "tenantCode", "placeholder", "\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: ABC_12345", 3, "input"], ["alt", "\u05DC\u05D5\u05D2\u05D5", 1, "logo-preview-img", 3, "src"], ["kendoTextBox", "", "formControlName", "contactName"], ["kendoTextBox", "", "formControlName", "email", "type", "email"], ["kendoTextBox", "", "formControlName", "phone", "placeholder", "050-0000000"], ["kendoTextBox", "", "formControlName", "phone2", "placeholder", "050-0000000"], ["kendoTextBox", "", "formControlName", "fax", "placeholder", "03-0000000"], ["kendoTextBox", "", "formControlName", "website", "placeholder", "www.example.com"], ["kendoTextBox", "", "formControlName", "address", "placeholder", "\u05E8\u05D7\u05D5\u05D1 \u05D5\u05DE\u05E1\u05E4\u05E8"], ["kendoTextBox", "", "formControlName", "city"], ["kendoTextBox", "", "formControlName", "country"], ["formControlName", "planType", "textField", "label", "valueField", "value", 3, "data", "valuePrimitive"], ["formControlName", "maxUsers", "format", "n0", 3, "min", "max", "decimals"], ["formControlName", "maxTickets", "format", "n0", 3, "min", "max", "decimals"], [1, "seg-ctrl"], ["type", "button", 1, "seg-btn", 3, "click"], ["kendoTextBox", "", "formControlName", "bankName", "placeholder", "\u05E9\u05DD \u05D4\u05D1\u05E0\u05E7"], ["kendoTextBox", "", "formControlName", "bankBranch", "placeholder", "\u05DE\u05E1\u05E4\u05E8 \u05E1\u05E0\u05D9\u05E3"], ["kendoTextBox", "", "formControlName", "bankAccount"], ["kendoTextBox", "", "formControlName", "accountingRef", "placeholder", "\u05DE\u05E1\u05E4\u05E8 \u05D1\u05D4\u05E0\u05D4\u05DC\u05EA \u05D7\u05E9\u05D1\u05D5\u05E0\u05D5\u05EA"], ["formControlName", "notes", "resizable", "vertical", "placeholder", "\u05D4\u05E2\u05E8\u05D5\u05EA \u05D0\u05D5\u05E4\u05E6\u05D9\u05D5\u05E0\u05DC\u05D9\u05D5\u05EA...", 3, "rows"]], template: function OrgDialogComponent_Template(rf, ctx) {
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
      \u0275\u0275conditionalCreate(8, OrgDialogComponent_Conditional_8_Template, 37, 7, "div", 7);
      \u0275\u0275conditionalCreate(9, OrgDialogComponent_Conditional_9_Template, 39, 1, "div", 7);
      \u0275\u0275conditionalCreate(10, OrgDialogComponent_Conditional_10_Template, 21, 0, "div", 7);
      \u0275\u0275conditionalCreate(11, OrgDialogComponent_Conditional_11_Template, 22, 9, "div", 7);
      \u0275\u0275conditionalCreate(12, OrgDialogComponent_Conditional_12_Template, 26, 0, "div", 7);
      \u0275\u0275conditionalCreate(13, OrgDialogComponent_Conditional_13_Template, 7, 1, "div", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "kendo-dialog-actions")(15, "div", 8)(16, "button", 9);
      \u0275\u0275listener("click", function OrgDialogComponent_Template_button_click_16_listener() {
        return ctx.save();
      });
      \u0275\u0275conditionalCreate(17, OrgDialogComponent_Conditional_17_Template, 1, 0, "kendo-loader", 10)(18, OrgDialogComponent_Conditional_18_Template, 1, 0);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 11);
      \u0275\u0275listener("click", function OrgDialogComponent_Template_button_click_20_listener() {
        return ctx.close();
      });
      \u0275\u0275text(21, " \u05D1\u05D9\u05D8\u05D5\u05DC ");
      \u0275\u0275elementEnd()()()();
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
      \u0275\u0275conditional(ctx.activeGroup() === "plan" ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeGroup() === "bank" ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeGroup() === "notes" ? 13 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.saving || ctx.uploading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.saving || ctx.uploading ? 17 : 18);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.uploading ? "\u05DE\u05DE\u05EA\u05D9\u05DF \u05DC\u05D4\u05E2\u05DC\u05D0\u05EA \u05DC\u05D5\u05D2\u05D5..." : ctx.isEdit ? "\u05E9\u05DE\u05D5\u05E8 \u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD" : "\u05E6\u05D5\u05E8 \u05D0\u05E8\u05D2\u05D5\u05DF", " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.saving);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, DialogsModule, DialogComponent, DialogActionsComponent, TextBoxModule, TextBoxDirective, NumericTextBoxModule, NumericTextBoxComponent, SwitchModule, TextAreaModule, TextAreaComponent, DropDownListModule, DropDownListComponent, ButtonsModule, ButtonComponent, IndicatorsModule, LoaderComponent, IconsModule, SVGIconComponent], styles: ['\n[_nghost-%COMP%]     .k-dialog {\n  border-radius: 14px !important;\n  overflow: hidden;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.16), 0 2px 8px rgba(0, 0, 0, 0.08) !important;\n  border: 1px solid var(--sf-border) !important;\n  font-family:\n    "Noto Sans Hebrew",\n    "Segoe UI",\n    sans-serif;\n}\n[_nghost-%COMP%]     .k-dialog-titlebar {\n  background: var(--sf-bg-card) !important;\n  border-bottom: 1px solid var(--sf-border) !important;\n  padding: 14px 20px !important;\n  direction: rtl;\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]     .k-dialog-title {\n  font-size: 1.05rem !important;\n  font-weight: 700 !important;\n  color: var(--sf-text) !important;\n  flex: 1;\n}\n[_nghost-%COMP%]     .k-dialog-close {\n  color: var(--sf-text-secondary) !important;\n}\n[_nghost-%COMP%]     .k-dialog-close:hover {\n  color: var(--sf-text) !important;\n  background: var(--sf-bg-hover) !important;\n}\n[_nghost-%COMP%]     .k-dialog-content {\n  padding: 0 !important;\n  background: var(--sf-bg) !important;\n  direction: rtl;\n}\n[_nghost-%COMP%]     .k-dialog-actions {\n  background: var(--sf-bg-card) !important;\n  border-top: 1px solid var(--sf-border) !important;\n  padding: 12px 20px !important;\n  direction: rtl !important;\n}\n[_nghost-%COMP%]     .k-input {\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n  font-size: 0.9rem !important;\n  direction: rtl !important;\n  border-color: var(--sf-border) !important;\n  border-radius: 8px !important;\n  background: var(--sf-bg-card) !important;\n  color: var(--sf-text) !important;\n  width: 100%;\n}\n[_nghost-%COMP%]     .k-input:focus, \n[_nghost-%COMP%]     .k-input.k-focus {\n  border-color: var(--sf-primary) !important;\n  box-shadow: 0 0 0 2px rgba(var(--sf-primary-rgb, 13, 71, 255), 0.12) !important;\n}\n[_nghost-%COMP%]     .k-input-inner {\n  direction: rtl !important;\n  text-align: right !important;\n}\n[_nghost-%COMP%]     .k-numerictextbox .k-input-inner {\n  text-align: right !important;\n}\n[_nghost-%COMP%]     .k-dropdownlist {\n  width: 100% !important;\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n  direction: rtl;\n  border-radius: 8px !important;\n  border-color: var(--sf-border) !important;\n  background: var(--sf-bg-card) !important;\n}\n[_nghost-%COMP%]     .k-dropdownlist .k-input-value-text {\n  text-align: right;\n}\n[_nghost-%COMP%]     .k-dropdownlist .k-button-icon {\n  margin-inline-start: auto;\n  margin-inline-end: 0;\n}\n[_nghost-%COMP%]     .k-list-item {\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n  direction: rtl;\n  text-align: right;\n  font-size: 0.88rem;\n}\n[_nghost-%COMP%]     .k-list {\n  direction: rtl;\n}\n[_nghost-%COMP%]     .k-numerictextbox {\n  width: 100% !important;\n}\n[_nghost-%COMP%]     .k-switch {\n  direction: ltr !important;\n}\n[_nghost-%COMP%]     .k-switch-on .k-switch-thumb-wrap {\n  border-color: var(--sf-primary) !important;\n}\n[_nghost-%COMP%]     .k-switch-on .k-switch-track {\n  background-color: var(--sf-primary) !important;\n}\n[_nghost-%COMP%]     .k-textarea {\n  width: 100% !important;\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n  direction: rtl;\n  font-size: 0.9rem;\n  border-radius: 8px !important;\n  border-color: var(--sf-border) !important;\n}\n.org-dialog-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  min-height: 440px;\n  direction: rtl;\n}\n.org-nav[_ngcontent-%COMP%] {\n  width: 190px;\n  flex-shrink: 0;\n  border-inline-end: 1px solid var(--sf-border);\n  background: var(--sf-bg-card);\n  padding: 16px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border: none;\n  border-radius: 10px;\n  background: transparent;\n  cursor: pointer;\n  width: 100%;\n  text-align: right;\n  color: var(--sf-text-secondary);\n  font-size: 0.85rem;\n  font-weight: 500;\n  position: relative;\n  transition: background 0.15s, color 0.15s;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: var(--sf-primary-light, rgba(13, 71, 255, 0.08));\n  color: var(--sf-primary);\n  font-weight: 600;\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  color: var(--sf-primary);\n}\n.nav-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 7px;\n  background: var(--sf-bg);\n  color: var(--sf-text-muted);\n  flex-shrink: 0;\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  background: var(--sf-primary-light, rgba(13, 71, 255, 0.1));\n  color: var(--sf-primary);\n}\n.nav-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nav-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-end: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 20px;\n  border-radius: 2px 0 0 2px;\n  background: var(--sf-primary);\n}\n.org-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: 24px 28px;\n  overflow-y: auto;\n  background: var(--sf-bg);\n  direction: rtl;\n}\n.content-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.section-header[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0 0 2px;\n}\n.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--sf-text-muted);\n  margin: 0;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 150px 1fr;\n  align-items: start;\n  gap: 12px;\n  direction: rtl;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  padding-top: 9px;\n  text-align: right;\n}\n.req[_ngcontent-%COMP%] {\n  color: var(--sf-danger);\n  margin-right: 2px;\n}\n.input-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n.err[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--sf-danger);\n  font-weight: 500;\n}\n.seg-ctrl[_ngcontent-%COMP%] {\n  display: inline-flex;\n  direction: rtl;\n  align-self: flex-start;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.seg-btn[_ngcontent-%COMP%] {\n  padding: 7px 20px;\n  font-size: 0.82rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  border: none;\n  background: var(--sf-bg);\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.seg-btn[_ngcontent-%COMP%]    + .seg-btn[_ngcontent-%COMP%] {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.seg-btn[_ngcontent-%COMP%]:hover:not(.seg-on):not(.seg-off) {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.seg-btn.seg-on[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: #fff;\n  font-weight: 600;\n}\n.seg-btn.seg-off[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #fff;\n  font-weight: 600;\n}\n.ltr-wrap[_ngcontent-%COMP%] {\n  direction: ltr;\n  display: inline-flex;\n}\n.general-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  direction: rtl;\n}\n.general-fields[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.logo-aside[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 170px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  border-inline-start: 1px solid var(--sf-border);\n  padding-inline-start: 20px;\n}\n.logo-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  align-self: flex-start;\n  margin-bottom: 2px;\n}\n.logo-preview-box[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n  border: 1px solid var(--sf-border);\n  border-radius: 10px;\n  background: var(--sf-bg-card);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.logo-preview-img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n  padding: 8px;\n}\n.logo-placeholder[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n  border: 1.5px dashed var(--sf-border);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: var(--sf-text-muted);\n  font-size: 0.75rem;\n}\n.logo-placeholder[_ngcontent-%COMP%]   kendo-svg-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  opacity: 0.4;\n}\n.logo-btns[_ngcontent-%COMP%] {\n  width: 140px;\n  display: flex;\n  justify-content: space-between;\n  gap: 6px;\n}\n.btn-logo-upload[_ngcontent-%COMP%] {\n  flex: 1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 5px 8px;\n  border-radius: 6px;\n  cursor: pointer;\n  border: 1px solid var(--sf-border);\n  background: var(--sf-bg-card);\n  font-size: 0.76rem;\n  font-weight: 500;\n  color: var(--sf-text);\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: background 0.15s, border-color 0.15s;\n}\n.btn-logo-upload[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  border-color: var(--sf-primary);\n  color: var(--sf-primary);\n}\n.btn-logo-upload.loading[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  cursor: wait;\n}\n.btn-logo-delete[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 5px 8px;\n  border-radius: 6px;\n  cursor: pointer;\n  border: 1px solid #fca5a5;\n  background: var(--sf-bg-card);\n  font-size: 0.76rem;\n  font-weight: 500;\n  color: var(--sf-danger);\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: background 0.15s;\n}\n.btn-logo-delete[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.btn-logo-delete[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: default;\n  pointer-events: none;\n}\n.logo-hint[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: var(--sf-text-muted);\n  direction: ltr;\n  text-align: center;\n}\n.form-error-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.83rem;\n  color: #dc2626;\n  font-weight: 500;\n  margin-bottom: 12px;\n}\n.dialog-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  direction: rtl;\n}\n.btn-save[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #f97316 !important;\n  color: #fff !important;\n  border: none !important;\n  border-radius: 9px !important;\n  padding: 9px 22px !important;\n  font-size: 0.875rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: background 0.15s, box-shadow 0.15s;\n  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.3);\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #ea6c0a !important;\n  box-shadow: 0 4px 14px rgba(249, 115, 22, 0.4);\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.btn-save[_ngcontent-%COMP%]   kendo-loader[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n/*# sourceMappingURL=org-dialog.component.css.map */'] });
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
                    <input kendoTextBox formControlName="companyName" />
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
              <p>\u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05E4\u05EA\u05D7 \u05D4\u05D0\u05E8\u05D2\u05D5\u05DF</p>
            </div>

            <div class="form-row">
              <label>\u05DB\u05EA\u05D5\u05D1\u05EA</label>
              <div class="input-col">
                <input kendoTextBox formControlName="address" placeholder="\u05E8\u05D7\u05D5\u05D1 \u05D5\u05DE\u05E1\u05E4\u05E8" />
              </div>
            </div>

            <div class="form-row">
              <label>\u05E2\u05D9\u05E8</label>
              <div class="input-col">
                <input kendoTextBox formControlName="city" />
              </div>
            </div>

            <div class="form-row">
              <label>\u05DE\u05D3\u05D9\u05E0\u05D4</label>
              <div class="input-col">
                <input kendoTextBox formControlName="country" />
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
`, styles: ['/* src/app/features/organizations/org-dialog/org-dialog.component.scss */\n:host ::ng-deep .k-dialog {\n  border-radius: 14px !important;\n  overflow: hidden;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.16), 0 2px 8px rgba(0, 0, 0, 0.08) !important;\n  border: 1px solid var(--sf-border) !important;\n  font-family:\n    "Noto Sans Hebrew",\n    "Segoe UI",\n    sans-serif;\n}\n:host ::ng-deep .k-dialog-titlebar {\n  background: var(--sf-bg-card) !important;\n  border-bottom: 1px solid var(--sf-border) !important;\n  padding: 14px 20px !important;\n  direction: rtl;\n  display: flex;\n  align-items: center;\n}\n:host ::ng-deep .k-dialog-title {\n  font-size: 1.05rem !important;\n  font-weight: 700 !important;\n  color: var(--sf-text) !important;\n  flex: 1;\n}\n:host ::ng-deep .k-dialog-close {\n  color: var(--sf-text-secondary) !important;\n}\n:host ::ng-deep .k-dialog-close:hover {\n  color: var(--sf-text) !important;\n  background: var(--sf-bg-hover) !important;\n}\n:host ::ng-deep .k-dialog-content {\n  padding: 0 !important;\n  background: var(--sf-bg) !important;\n  direction: rtl;\n}\n:host ::ng-deep .k-dialog-actions {\n  background: var(--sf-bg-card) !important;\n  border-top: 1px solid var(--sf-border) !important;\n  padding: 12px 20px !important;\n  direction: rtl !important;\n}\n:host ::ng-deep .k-input {\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n  font-size: 0.9rem !important;\n  direction: rtl !important;\n  border-color: var(--sf-border) !important;\n  border-radius: 8px !important;\n  background: var(--sf-bg-card) !important;\n  color: var(--sf-text) !important;\n  width: 100%;\n}\n:host ::ng-deep .k-input:focus,\n:host ::ng-deep .k-input.k-focus {\n  border-color: var(--sf-primary) !important;\n  box-shadow: 0 0 0 2px rgba(var(--sf-primary-rgb, 13, 71, 255), 0.12) !important;\n}\n:host ::ng-deep .k-input-inner {\n  direction: rtl !important;\n  text-align: right !important;\n}\n:host ::ng-deep .k-numerictextbox .k-input-inner {\n  text-align: right !important;\n}\n:host ::ng-deep .k-dropdownlist {\n  width: 100% !important;\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n  direction: rtl;\n  border-radius: 8px !important;\n  border-color: var(--sf-border) !important;\n  background: var(--sf-bg-card) !important;\n}\n:host ::ng-deep .k-dropdownlist .k-input-value-text {\n  text-align: right;\n}\n:host ::ng-deep .k-dropdownlist .k-button-icon {\n  margin-inline-start: auto;\n  margin-inline-end: 0;\n}\n:host ::ng-deep .k-list-item {\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n  direction: rtl;\n  text-align: right;\n  font-size: 0.88rem;\n}\n:host ::ng-deep .k-list {\n  direction: rtl;\n}\n:host ::ng-deep .k-numerictextbox {\n  width: 100% !important;\n}\n:host ::ng-deep .k-switch {\n  direction: ltr !important;\n}\n:host ::ng-deep .k-switch-on .k-switch-thumb-wrap {\n  border-color: var(--sf-primary) !important;\n}\n:host ::ng-deep .k-switch-on .k-switch-track {\n  background-color: var(--sf-primary) !important;\n}\n:host ::ng-deep .k-textarea {\n  width: 100% !important;\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n  direction: rtl;\n  font-size: 0.9rem;\n  border-radius: 8px !important;\n  border-color: var(--sf-border) !important;\n}\n.org-dialog-body {\n  display: flex;\n  flex-direction: row;\n  min-height: 440px;\n  direction: rtl;\n}\n.org-nav {\n  width: 190px;\n  flex-shrink: 0;\n  border-inline-end: 1px solid var(--sf-border);\n  background: var(--sf-bg-card);\n  padding: 16px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border: none;\n  border-radius: 10px;\n  background: transparent;\n  cursor: pointer;\n  width: 100%;\n  text-align: right;\n  color: var(--sf-text-secondary);\n  font-size: 0.85rem;\n  font-weight: 500;\n  position: relative;\n  transition: background 0.15s, color 0.15s;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.nav-item:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.nav-item.active {\n  background: var(--sf-primary-light, rgba(13, 71, 255, 0.08));\n  color: var(--sf-primary);\n  font-weight: 600;\n}\n.nav-item.active .nav-icon {\n  color: var(--sf-primary);\n}\n.nav-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 7px;\n  background: var(--sf-bg);\n  color: var(--sf-text-muted);\n  flex-shrink: 0;\n}\n.nav-item.active .nav-icon {\n  background: var(--sf-primary-light, rgba(13, 71, 255, 0.1));\n  color: var(--sf-primary);\n}\n.nav-text {\n  flex: 1;\n}\n.nav-indicator {\n  position: absolute;\n  inset-inline-end: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 20px;\n  border-radius: 2px 0 0 2px;\n  background: var(--sf-primary);\n}\n.org-content {\n  flex: 1;\n  min-width: 0;\n  padding: 24px 28px;\n  overflow-y: auto;\n  background: var(--sf-bg);\n  direction: rtl;\n}\n.content-section {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.section-header {\n  margin-bottom: 4px;\n}\n.section-header h3 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0 0 2px;\n}\n.section-header p {\n  font-size: 0.82rem;\n  color: var(--sf-text-muted);\n  margin: 0;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 150px 1fr;\n  align-items: start;\n  gap: 12px;\n  direction: rtl;\n}\nlabel {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  padding-top: 9px;\n  text-align: right;\n}\n.req {\n  color: var(--sf-danger);\n  margin-right: 2px;\n}\n.input-col {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n.err {\n  font-size: 0.75rem;\n  color: var(--sf-danger);\n  font-weight: 500;\n}\n.seg-ctrl {\n  display: inline-flex;\n  direction: rtl;\n  align-self: flex-start;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.seg-btn {\n  padding: 7px 20px;\n  font-size: 0.82rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  border: none;\n  background: var(--sf-bg);\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.seg-btn + .seg-btn {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.seg-btn:hover:not(.seg-on):not(.seg-off) {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.seg-btn.seg-on {\n  background: #10b981;\n  color: #fff;\n  font-weight: 600;\n}\n.seg-btn.seg-off {\n  background: #ef4444;\n  color: #fff;\n  font-weight: 600;\n}\n.ltr-wrap {\n  direction: ltr;\n  display: inline-flex;\n}\n.general-layout {\n  display: flex;\n  gap: 24px;\n  direction: rtl;\n}\n.general-fields {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.logo-aside {\n  flex-shrink: 0;\n  width: 170px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  border-inline-start: 1px solid var(--sf-border);\n  padding-inline-start: 20px;\n}\n.logo-label {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  align-self: flex-start;\n  margin-bottom: 2px;\n}\n.logo-preview-box {\n  width: 140px;\n  height: 140px;\n  border: 1px solid var(--sf-border);\n  border-radius: 10px;\n  background: var(--sf-bg-card);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.logo-preview-img {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n  padding: 8px;\n}\n.logo-placeholder {\n  width: 140px;\n  height: 140px;\n  border: 1.5px dashed var(--sf-border);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: var(--sf-text-muted);\n  font-size: 0.75rem;\n}\n.logo-placeholder kendo-svg-icon {\n  font-size: 2rem;\n  opacity: 0.4;\n}\n.logo-btns {\n  width: 140px;\n  display: flex;\n  justify-content: space-between;\n  gap: 6px;\n}\n.btn-logo-upload {\n  flex: 1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 5px 8px;\n  border-radius: 6px;\n  cursor: pointer;\n  border: 1px solid var(--sf-border);\n  background: var(--sf-bg-card);\n  font-size: 0.76rem;\n  font-weight: 500;\n  color: var(--sf-text);\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: background 0.15s, border-color 0.15s;\n}\n.btn-logo-upload:hover {\n  background: var(--sf-bg-hover);\n  border-color: var(--sf-primary);\n  color: var(--sf-primary);\n}\n.btn-logo-upload.loading {\n  opacity: 0.7;\n  cursor: wait;\n}\n.btn-logo-delete {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 5px 8px;\n  border-radius: 6px;\n  cursor: pointer;\n  border: 1px solid #fca5a5;\n  background: var(--sf-bg-card);\n  font-size: 0.76rem;\n  font-weight: 500;\n  color: var(--sf-danger);\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: background 0.15s;\n}\n.btn-logo-delete:hover {\n  background: #fef2f2;\n}\n.btn-logo-delete:disabled {\n  opacity: 0.35;\n  cursor: default;\n  pointer-events: none;\n}\n.logo-hint {\n  font-size: 0.65rem;\n  color: var(--sf-text-muted);\n  direction: ltr;\n  text-align: center;\n}\n.form-error-banner {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.83rem;\n  color: #dc2626;\n  font-weight: 500;\n  margin-bottom: 12px;\n}\n.dialog-footer {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  direction: rtl;\n}\n.btn-save {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #f97316 !important;\n  color: #fff !important;\n  border: none !important;\n  border-radius: 9px !important;\n  padding: 9px 22px !important;\n  font-size: 0.875rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: background 0.15s, box-shadow 0.15s;\n  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.3);\n}\n.btn-save:hover:not(:disabled) {\n  background: #ea6c0a !important;\n  box-shadow: 0 4px 14px rgba(249, 115, 22, 0.4);\n}\n.btn-save:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.btn-save kendo-loader {\n  display: inline-flex;\n}\n/*# sourceMappingURL=org-dialog.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: OrganizationService }, { type: UploadService }, { type: NgZone }, { type: ChangeDetectorRef }], { org: [{
    type: Input
  }], closed: [{
    type: Output
  }], saved: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrgDialogComponent, { className: "OrgDialogComponent", filePath: "src/app/features/organizations/org-dialog/org-dialog.component.ts", lineNumber: 30 });
})();

// src/app/features/organizations/organizations.component.ts
var _c0 = (a0, a1) => ({ data: a0, total: a1 });
var _c1 = () => [10, 25, 50];
var _c2 = (a0) => ({ buttonCount: 5, info: true, type: "numeric", pageSizes: a0 });
var _c3 = () => ({ mode: "single", allowUnsort: false });
var _c4 = () => ({ mode: "multiple", checkboxOnly: true });
function OrganizationsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "mat-spinner", 15);
    \u0275\u0275elementEnd();
  }
}
function OrganizationsComponent_Conditional_20_Template(rf, ctx) {
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
function OrganizationsComponent_Conditional_21_ng_template_28_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "span", 58);
    \u0275\u0275text(2, "\u05D8\u05DC\u05E4\u05D5\u05DF 2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(o_r3.Phone2);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_28_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "span", 58);
    \u0275\u0275text(2, "\u05E4\u05E7\u05E1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(o_r3.Fax);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_28_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "span", 58);
    \u0275\u0275text(2, "\u05D0\u05EA\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 59)(4, "a", 61);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("href", o_r3.Website, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r3.Website);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_28_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "span", 58);
    \u0275\u0275text(2, "\u05E8\u05D7\u05D5\u05D1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(o_r3.Address);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_28_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "span", 58);
    \u0275\u0275text(2, "\u05E2\u05D9\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(o_r3.City);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_28_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "span", 58);
    \u0275\u0275text(2, "\u05DE\u05D3\u05D9\u05E0\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(o_r3.Country);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_28_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "span", 58);
    \u0275\u0275text(2, "\u05D7.\u05E4 / \u05E2.\u05DE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(o_r3.BusinessNumber);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_28_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "span", 58);
    \u0275\u0275text(2, "\u05D1\u05E0\u05E7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", o_r3.BankName, " / ", o_r3.BankBranch);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_28_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "span", 58);
    \u0275\u0275text(2, "\u05D0\u05E1\u05DE\u05DB\u05EA\u05D0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(o_r3.AccountingRef);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_28_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 55);
    \u0275\u0275text(2, "\u05D4\u05E2\u05E8\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(o_r3.Notes);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54)(2, "div", 55);
    \u0275\u0275text(3, "\u05E4\u05E8\u05D8\u05D9 \u05E7\u05E9\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 56)(5, "div", 57)(6, "span", 58);
    \u0275\u0275text(7, "\u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 59);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 57)(11, "span", 58);
    \u0275\u0275text(12, "\u05D8\u05DC\u05E4\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 59);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(15, OrganizationsComponent_Conditional_21_ng_template_28_Conditional_15_Template, 5, 1, "div", 57);
    \u0275\u0275conditionalCreate(16, OrganizationsComponent_Conditional_21_ng_template_28_Conditional_16_Template, 5, 1, "div", 57);
    \u0275\u0275conditionalCreate(17, OrganizationsComponent_Conditional_21_ng_template_28_Conditional_17_Template, 6, 2, "div", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 54)(19, "div", 55);
    \u0275\u0275text(20, "\u05DB\u05EA\u05D5\u05D1\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 56);
    \u0275\u0275conditionalCreate(22, OrganizationsComponent_Conditional_21_ng_template_28_Conditional_22_Template, 5, 1, "div", 57);
    \u0275\u0275conditionalCreate(23, OrganizationsComponent_Conditional_21_ng_template_28_Conditional_23_Template, 5, 1, "div", 57);
    \u0275\u0275conditionalCreate(24, OrganizationsComponent_Conditional_21_ng_template_28_Conditional_24_Template, 5, 1, "div", 57);
    \u0275\u0275conditionalCreate(25, OrganizationsComponent_Conditional_21_ng_template_28_Conditional_25_Template, 5, 1, "div", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 54)(27, "div", 55);
    \u0275\u0275text(28, "\u05DE\u05E0\u05D5\u05D9 \u05D5\u05D1\u05E0\u05E7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 56)(30, "div", 57)(31, "span", 58);
    \u0275\u0275text(32, "\u05D4\u05E6\u05D8\u05E8\u05E4\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 59);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 57)(37, "span", 58);
    \u0275\u0275text(38, "\u05EA\u05E4\u05D5\u05D2\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 59);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 57)(43, "span", 58);
    \u0275\u0275text(44, "\u05DE\u05E7\u05E1. \u05DB\u05E8\u05D8\u05D9\u05E1\u05D9\u05DD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 59);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(47, OrganizationsComponent_Conditional_21_ng_template_28_Conditional_47_Template, 5, 2, "div", 57);
    \u0275\u0275conditionalCreate(48, OrganizationsComponent_Conditional_21_ng_template_28_Conditional_48_Template, 5, 1, "div", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(49, OrganizationsComponent_Conditional_21_ng_template_28_Conditional_49_Template, 5, 1, "div", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r3 = ctx.$implicit;
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(o_r3.ContactName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(o_r3.Phone);
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r3.Phone2 ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r3.Fax ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r3.Website ? 17 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(o_r3.Address ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r3.City ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r3.Country ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r3.BusinessNumber ? 25 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 15, o_r3.SubscribedAt, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 18, o_r3.ExpiresAt, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(o_r3.MaxTickets);
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r3.BankName ? 47 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r3.AccountingRef ? 48 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r3.Notes ? 49 : -1);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_31_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 64);
  }
  if (rf & 2) {
    const o_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", o_r4.LogoUrl, \u0275\u0275sanitizeUrl)("alt", o_r4.CompanyName);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_31_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r4.CompanyName.charAt(0));
  }
}
function OrganizationsComponent_Conditional_21_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275conditionalCreate(1, OrganizationsComponent_Conditional_21_ng_template_31_Conditional_1_Template, 1, 2, "img", 64)(2, OrganizationsComponent_Conditional_21_ng_template_31_Conditional_2_Template, 2, 1, "div", 65);
    \u0275\u0275elementStart(3, "span", 66);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r4.LogoUrl ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r4.CompanyName);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r5.TenantCode);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("chip-" + o_r6.PlanType);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.planLabel(o_r6.PlanType));
  }
}
function OrganizationsComponent_Conditional_21_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 70);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r7.UserCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" / ", o_r7.MaxUsers);
  }
}
function OrganizationsComponent_Conditional_21_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275element(1, "span", 72);
    \u0275\u0275elementStart(2, "span", 73);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("dot-active", o_r8.IsActive)("dot-inactive", !o_r8.IsActive);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r8.IsActive ? "\u05E4\u05E2\u05D9\u05DC" : "\u05DE\u05D5\u05E9\u05D4\u05D4");
  }
}
function OrganizationsComponent_Conditional_21_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74)(1, "button", 75);
    \u0275\u0275listener("click", function OrganizationsComponent_Conditional_21_ng_template_42_Template_button_click_1_listener() {
      const ctx_r9 = \u0275\u0275restoreView(_r9);
      const o_r11 = ctx_r9.$implicit;
      const rowIndex_r12 = ctx_r9.rowIndex;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleDetail(o_r11, rowIndex_r12));
    });
    \u0275\u0275element(2, "i", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 77);
    \u0275\u0275listener("click", function OrganizationsComponent_Conditional_21_ng_template_42_Template_button_click_3_listener() {
      const o_r11 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleActive(o_r11));
    });
    \u0275\u0275element(4, "i", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 78);
    \u0275\u0275listener("click", function OrganizationsComponent_Conditional_21_ng_template_42_Template_button_click_5_listener() {
      const o_r11 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(o_r11));
    });
    \u0275\u0275element(6, "i", 79);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", ctx_r0.isExpanded(o_r11.TenantID));
    \u0275\u0275property("title", ctx_r0.isExpanded(o_r11.TenantID) ? "\u05E1\u05D2\u05D5\u05E8" : "\u05E4\u05E8\u05D8\u05D9\u05DD");
    \u0275\u0275advance();
    \u0275\u0275classProp("pi-chevron-down", !ctx_r0.isExpanded(o_r11.TenantID))("pi-chevron-up", ctx_r0.isExpanded(o_r11.TenantID));
    \u0275\u0275advance();
    \u0275\u0275classProp("act-lock", o_r11.IsActive)("act-unlock", !o_r11.IsActive);
    \u0275\u0275property("title", o_r11.IsActive ? "\u05D4\u05E9\u05D1\u05EA" : "\u05D4\u05E4\u05E2\u05DC");
    \u0275\u0275advance();
    \u0275\u0275classProp("pi-lock", o_r11.IsActive)("pi-lock-open", !o_r11.IsActive);
  }
}
function OrganizationsComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "kendo-grid", 16);
    \u0275\u0275listener("pageChange", function OrganizationsComponent_Conditional_21_Template_kendo_grid_pageChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageChange($event));
    })("sortChange", function OrganizationsComponent_Conditional_21_Template_kendo_grid_sortChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSortChange($event));
    });
    \u0275\u0275element(1, "kendo-grid-pdf", 17);
    \u0275\u0275elementStart(2, "kendo-grid-excel", 18);
    \u0275\u0275element(3, "kendo-excelexport-column", 19)(4, "kendo-excelexport-column", 20)(5, "kendo-excelexport-column", 21)(6, "kendo-excelexport-column", 22)(7, "kendo-excelexport-column", 23)(8, "kendo-excelexport-column", 24)(9, "kendo-excelexport-column", 25)(10, "kendo-excelexport-column", 26)(11, "kendo-excelexport-column", 27)(12, "kendo-excelexport-column", 28)(13, "kendo-excelexport-column", 29)(14, "kendo-excelexport-column", 30)(15, "kendo-excelexport-column", 31)(16, "kendo-excelexport-column", 32)(17, "kendo-excelexport-column", 33)(18, "kendo-excelexport-column", 34)(19, "kendo-excelexport-column", 35)(20, "kendo-excelexport-column", 36)(21, "kendo-excelexport-column", 37)(22, "kendo-excelexport-column", 38)(23, "kendo-excelexport-column", 39)(24, "kendo-excelexport-column", 40)(25, "kendo-excelexport-column", 41)(26, "kendo-excelexport-column", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "kendo-grid-messages", 43);
    \u0275\u0275template(28, OrganizationsComponent_Conditional_21_ng_template_28_Template, 50, 21, "ng-template", 44);
    \u0275\u0275element(29, "kendo-grid-checkbox-column", 45);
    \u0275\u0275elementStart(30, "kendo-grid-column", 46);
    \u0275\u0275template(31, OrganizationsComponent_Conditional_21_ng_template_31_Template, 5, 2, "ng-template", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "kendo-grid-column", 48);
    \u0275\u0275template(33, OrganizationsComponent_Conditional_21_ng_template_33_Template, 2, 1, "ng-template", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "kendo-grid-column", 49);
    \u0275\u0275elementStart(35, "kendo-grid-column", 31);
    \u0275\u0275template(36, OrganizationsComponent_Conditional_21_ng_template_36_Template, 2, 3, "ng-template", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "kendo-grid-column", 50);
    \u0275\u0275template(38, OrganizationsComponent_Conditional_21_ng_template_38_Template, 4, 2, "ng-template", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "kendo-grid-column", 51);
    \u0275\u0275template(40, OrganizationsComponent_Conditional_21_ng_template_40_Template, 4, 5, "ng-template", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "kendo-grid-column", 52);
    \u0275\u0275template(42, OrganizationsComponent_Conditional_21_ng_template_42_Template, 7, 16, "ng-template", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", \u0275\u0275pureFunction2(52, _c0, ctx_r0.pagedData, ctx_r0.gridData.length))("skip", ctx_r0.skip)("pageSize", ctx_r0.pageSize)("pageable", \u0275\u0275pureFunction1(56, _c2, \u0275\u0275pureFunction0(55, _c1)))("sortable", \u0275\u0275pureFunction0(58, _c3))("sort", ctx_r0.sort)("reorderable", true)("resizable", true)("selectable", \u0275\u0275pureFunction0(59, _c4))("columnMenu", true);
    \u0275\u0275advance();
    \u0275\u0275property("allPages", true)("landscape", true)("repeatHeaders", true);
    \u0275\u0275advance();
    \u0275\u0275property("fetchData", ctx_r0.allData);
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
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-org-dialog", 80);
    \u0275\u0275listener("closed", function OrganizationsComponent_Conditional_22_Template_app_org_dialog_closed_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.dialogOpen.set(false));
    })("saved", function OrganizationsComponent_Conditional_22_Template_app_org_dialog_saved_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.onSaved();
      return \u0275\u0275resetView(ctx_r0.dialogOpen.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("org", ctx_r0.dialogOrg());
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
  pageSize = 10;
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
  }, decls: 23, vars: 8, consts: [[1, "orgs-page"], [1, "page-header"], [1, "header-titles"], ["kendoButton", "", "themeColor", "primary", 3, "click", "svgIcon"], [1, "toolbar"], [1, "search-wrap"], [1, "search-icon"], ["type", "text", "placeholder", "\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DC\u05E4\u05D9 \u05E9\u05DD, \u05E7\u05D5\u05D3, \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC...", 1, "search-input", 3, "input"], [1, "export-btns"], ["kendoButton", "", "fillMode", "outline", "title", "\u05D9\u05D9\u05E6\u05D5\u05D0 \u05DC\u05D0\u05E7\u05E1\u05DC", 1, "btn-export", "btn-excel", 3, "click", "svgIcon"], ["kendoButton", "", "fillMode", "outline", "title", "\u05D9\u05D9\u05E6\u05D5\u05D0 \u05DC-PDF", 1, "btn-export", "btn-pdf", 3, "click", "svgIcon"], [1, "state-box"], [1, "state-box", "error"], ["scrollable", "none", 1, "orgs-grid", 3, "data", "skip", "pageSize", "pageable", "sortable", "sort", "reorderable", "resizable", "selectable", "columnMenu"], [3, "org"], ["diameter", "36"], ["scrollable", "none", 1, "orgs-grid", 3, "pageChange", "sortChange", "data", "skip", "pageSize", "pageable", "sortable", "sort", "reorderable", "resizable", "selectable", "columnMenu"], ["fileName", "\u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05DD.pdf", "paperSize", "A4", "margin", "1cm", 3, "allPages", "landscape", "repeatHeaders"], ["fileName", "\u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05DD.xlsx", 3, "fetchData"], ["field", "CompanyName", "title", "\u05E9\u05DD \u05D0\u05E8\u05D2\u05D5\u05DF", 3, "width"], ["field", "TenantCode", "title", "\u05E7\u05D5\u05D3 \u05D0\u05E8\u05D2\u05D5\u05DF", 3, "width"], ["field", "BusinessNumber", "title", "\u05D7.\u05E4 / \u05E2.\u05DE", 3, "width"], ["field", "ContactName", "title", "\u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8", 3, "width"], ["field", "Email", "title", '\u05D3\u05D5\u05D0"\u05DC', 3, "width"], ["field", "Phone", "title", "\u05D8\u05DC\u05E4\u05D5\u05DF", 3, "width"], ["field", "Phone2", "title", "\u05D8\u05DC\u05E4\u05D5\u05DF 2", 3, "width"], ["field", "Fax", "title", "\u05E4\u05E7\u05E1", 3, "width"], ["field", "Website", "title", "\u05D0\u05EA\u05E8 \u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8", 3, "width"], ["field", "Address", "title", "\u05DB\u05EA\u05D5\u05D1\u05EA", 3, "width"], ["field", "City", "title", "\u05E2\u05D9\u05E8", 3, "width"], ["field", "Country", "title", "\u05DE\u05D3\u05D9\u05E0\u05D4", 3, "width"], ["field", "PlanType", "title", "\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA", 3, "width"], ["field", "IsActive", "title", "\u05E4\u05E2\u05D9\u05DC", 3, "width"], ["field", "SubscribedAt", "title", "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05E6\u05D8\u05E8\u05E4\u05D5\u05EA", 3, "width"], ["field", "ExpiresAt", "title", "\u05EA\u05E4\u05D5\u05D2\u05EA \u05DE\u05E0\u05D5\u05D9", 3, "width"], ["field", "MaxUsers", "title", "\u05DE\u05E7\u05E1 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD", 3, "width"], ["field", "UserCount", "title", "\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05E4\u05D5\u05E2\u05DC", 3, "width"], ["field", "MaxTickets", "title", "\u05DE\u05E7\u05E1 \u05D8\u05D9\u05E7\u05D8\u05D9\u05DD", 3, "width"], ["field", "BankName", "title", "\u05D1\u05E0\u05E7", 3, "width"], ["field", "BankBranch", "title", "\u05E1\u05E0\u05D9\u05E3", 3, "width"], ["field", "BankAccount", "title", "\u05D7\u05E9\u05D1\u05D5\u05DF \u05D1\u05E0\u05E7", 3, "width"], ["field", "AccountingRef", "title", "\u05D0\u05E1\u05DE\u05DB\u05EA\u05D0 \u05D7\u05E9\u05D1\u05D5\u05E0\u05D0\u05D9\u05EA", 3, "width"], ["field", "Notes", "title", "\u05D4\u05E2\u05E8\u05D5\u05EA", 3, "width"], ["pagerItemsPerPage", "\u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3", "pagerOf", "\u05DE\u05EA\u05D5\u05DA", "pagerItems", "\u05E8\u05E9\u05D5\u05DE\u05D5\u05EA", "pagerFirstPage", "\u05E2\u05DE\u05D5\u05D3 \u05E8\u05D0\u05E9\u05D5\u05DF", "pagerLastPage", "\u05E2\u05DE\u05D5\u05D3 \u05D0\u05D7\u05E8\u05D5\u05DF", "pagerPreviousPage", "\u05D4\u05E7\u05D5\u05D3\u05DD", "pagerNextPage", "\u05D4\u05D1\u05D0", "pagerPage", "\u05E2\u05DE\u05D5\u05D3", "pagerPageNumberInputTitle", "\u05DE\u05E1\u05E4\u05E8 \u05E2\u05DE\u05D5\u05D3", "noRecords", "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E8\u05E9\u05D5\u05DE\u05D5\u05EA", "loading", "\u05D8\u05D5\u05E2\u05DF...", "sortAscending", "\u05DE\u05D9\u05D5\u05DF \u05E2\u05D5\u05DC\u05D4", "sortDescending", "\u05DE\u05D9\u05D5\u05DF \u05D9\u05D5\u05E8\u05D3", "sortedAscending", "\u05DE\u05DE\u05D5\u05D9\u05DF \u05D1\u05E1\u05D3\u05E8 \u05E2\u05D5\u05DC\u05D4", "sortedDescending", "\u05DE\u05DE\u05D5\u05D9\u05DF \u05D1\u05E1\u05D3\u05E8 \u05D9\u05D5\u05E8\u05D3", "filterContainsOperator", "\u05DE\u05DB\u05D9\u05DC", "filterStartsWithOperator", "\u05DE\u05EA\u05D7\u05D9\u05DC \u05D1", "filterEndsWithOperator", "\u05DE\u05E1\u05EA\u05D9\u05D9\u05DD \u05D1", "filterEqOperator", "\u05E9\u05D5\u05D5\u05D4 \u05DC", "filterClearButton", "\u05E0\u05E7\u05D4", "filterFilterButton", "\u05E1\u05E0\u05DF", "selectionCheckboxLabel", "\u05D1\u05D7\u05E8 \u05E9\u05D5\u05E8\u05D4", "selectAllCheckboxLabel", "\u05D1\u05D7\u05E8 \u05D4\u05DB\u05DC", "columnMenuFilter", "\u05E1\u05E0\u05DF", "columnMenuSort", "\u05DE\u05D9\u05D5\u05DF", "columnMenuColumns", "\u05E2\u05DE\u05D5\u05D3\u05D5\u05EA", "columnMenuSortAscending", "\u05E2\u05D5\u05DC\u05D4", "columnMenuSortDescending", "\u05D9\u05D5\u05E8\u05D3"], ["kendoGridDetailTemplate", ""], [3, "width", "showSelectAll", "columnMenu"], ["field", "CompanyName", "title", "\u05D0\u05E8\u05D2\u05D5\u05DF", 3, "width", "minResizableWidth"], ["kendoGridCellTemplate", ""], ["field", "TenantCode", "title", "\u05E7\u05D5\u05D3", 3, "width"], ["field", "Email", "title", '\u05D3\u05D5\u05D0"\u05DC', 3, "minResizableWidth"], ["field", "UserCount", "title", "\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD", 3, "width"], ["field", "IsActive", "title", "\u05E1\u05D8\u05D8\u05D5\u05E1", 3, "width"], ["title", "", 3, "width", "sortable", "resizable", "columnMenu"], [1, "org-detail-card"], [1, "detail-group"], [1, "detail-group-title"], [1, "detail-fields"], [1, "detail-field"], [1, "df-label"], [1, "df-val"], [1, "detail-group", "detail-group-full"], ["target", "_blank", "rel", "noopener", 3, "href"], [1, "detail-notes"], [1, "org-cell"], [1, "org-logo", 3, "src", "alt"], [1, "org-avatar"], [1, "org-name"], [1, "code-badge"], [1, "chip"], [1, "users-count"], [1, "muted"], [1, "status-dot-wrap"], [1, "status-dot"], [1, "status-label"], [1, "row-actions"], [1, "act-btn", "act-expand", 3, "click", "title"], [1, "pi"], [1, "act-btn", 3, "click", "title"], ["title", "\u05E2\u05E8\u05D5\u05DA", 1, "act-btn", "act-edit", 3, "click"], [1, "pi", "pi-pencil"], [3, "closed", "saved", "org"]], template: function OrganizationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "\u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05DD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 3);
      \u0275\u0275listener("click", function OrganizationsComponent_Template_button_click_7_listener() {
        return ctx.openAdd();
      });
      \u0275\u0275text(8, " \u05D0\u05E8\u05D2\u05D5\u05DF \u05D7\u05D3\u05E9 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 4)(10, "div", 5)(11, "mat-icon", 6);
      \u0275\u0275text(12, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 7);
      \u0275\u0275listener("input", function OrganizationsComponent_Template_input_input_13_listener($event) {
        return ctx.onSearch($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 8)(15, "button", 9);
      \u0275\u0275listener("click", function OrganizationsComponent_Template_button_click_15_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275text(16, " Excel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 10);
      \u0275\u0275listener("click", function OrganizationsComponent_Template_button_click_17_listener() {
        return ctx.exportPDF();
      });
      \u0275\u0275text(18, " PDF ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(19, OrganizationsComponent_Conditional_19_Template, 2, 0, "div", 11);
      \u0275\u0275conditionalCreate(20, OrganizationsComponent_Conditional_20_Template, 2, 1, "div", 12);
      \u0275\u0275conditionalCreate(21, OrganizationsComponent_Conditional_21_Template, 43, 60, "kendo-grid", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(22, OrganizationsComponent_Conditional_22_Template, 1, 1, "app-org-dialog", 14);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.orgs().length, " \u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05DD \u05E8\u05E9\u05D5\u05DE\u05D9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA");
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
    MatIconModule,
    MatIcon,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    OrgDialogComponent,
    DatePipe
  ], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.orgs-page[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  direction: rtl;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.header-titles[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0;\n}\n.header-titles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: var(--sf-text-secondary);\n  margin: 3px 0 0;\n}\n.toolbar[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.export-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n}\n[_nghost-%COMP%]     .export-btns .k-button {\n  border: none !important;\n  border-radius: 0 !important;\n  background: var(--sf-bg-card) !important;\n  color: var(--sf-text-secondary) !important;\n  box-shadow: none !important;\n  padding: 6px 14px !important;\n  font-size: 0.82rem !important;\n  font-weight: 500 !important;\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n}\n[_nghost-%COMP%]     .export-btns .k-button:hover {\n  background: var(--sf-bg-hover) !important;\n}\n[_nghost-%COMP%]     .export-btns .k-button + .k-button {\n  border-inline-start: 1px solid var(--sf-border) !important;\n}\n[_nghost-%COMP%]     .export-btns .btn-excel:hover {\n  color: #16a34a !important;\n}\n[_nghost-%COMP%]     .export-btns .btn-pdf:hover {\n  color: #dc2626 !important;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 340px;\n  direction: rtl;\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 6px 12px;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.search-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--sf-border-focus);\n  box-shadow: 0 0 0 3px rgba(13, 71, 255, 0.12);\n}\n.search-icon[_ngcontent-%COMP%] {\n  color: var(--sf-text-muted);\n  font-size: 18px;\n  width: 18px !important;\n  height: 18px !important;\n  flex-shrink: 0;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  color: var(--sf-text);\n  font-size: 0.875rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--sf-text-muted);\n}\n.state-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: var(--sf-text-secondary);\n}\n.state-box.error[_ngcontent-%COMP%] {\n  color: var(--sf-danger);\n}\n[_nghost-%COMP%]     .orgs-grid {\n  border-radius: 10px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04);\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n[_nghost-%COMP%]     .orgs-grid .k-grid-header th.k-header {\n  background: var(--sf-grid-hd-bg) !important;\n  color: var(--sf-grid-hd-color) !important;\n  font-weight: 700 !important;\n  font-size: 0.78rem !important;\n  text-align: right !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n  border-color: var(--sf-grid-hd-border) !important;\n  direction: rtl;\n}\n[_nghost-%COMP%]     .orgs-grid .k-grid-header {\n  background: var(--sf-grid-hd-bg) !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n}\n[_nghost-%COMP%]     .orgs-grid .k-column-menu-button {\n  color: var(--sf-grid-hd-color);\n  opacity: 0.7;\n}\n[_nghost-%COMP%]     .orgs-grid .k-column-menu-button:hover {\n  opacity: 1;\n}\n[_nghost-%COMP%]     .orgs-grid td.k-table-td {\n  text-align: right !important;\n  vertical-align: middle !important;\n  border-color: var(--sf-border) !important;\n  font-size: 0.875rem;\n  background: var(--sf-bg-card);\n  direction: rtl;\n  padding: 8px 12px !important;\n}\n[_nghost-%COMP%]     .orgs-grid tr.k-table-row:hover td {\n  background: var(--sf-bg-hover) !important;\n}\n[_nghost-%COMP%]     .orgs-grid .k-pager {\n  border-top: 1px solid var(--sf-border);\n  background: #f8fafc;\n  direction: rtl;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  font-size: 0.82rem;\n}\n[_nghost-%COMP%]     .orgs-grid .k-pager-wrap, \n[_nghost-%COMP%]     .orgs-grid .k-pager {\n  direction: rtl !important;\n}\n[_nghost-%COMP%]     .orgs-grid .k-detail-row > td {\n  background: var(--sf-bg) !important;\n  padding: 4px 0 12px !important;\n  border-bottom: 1px solid var(--sf-border) !important;\n}\n[_nghost-%COMP%]     .orgs-grid .k-sort-icon {\n  margin-right: 4px;\n}\n[_nghost-%COMP%]     .orgs-grid .k-checkbox {\n  accent-color: var(--sf-primary);\n}\n.org-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.org-logo[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  object-fit: contain;\n  border: 1px solid var(--sf-border);\n  padding: 2px;\n  background: #fff;\n  flex-shrink: 0;\n}\n.org-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  flex-shrink: 0;\n  background: var(--sf-primary-light);\n  color: var(--sf-primary);\n  font-size: 0.85rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.org-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--sf-text);\n  font-size: 0.88rem;\n}\n.code-badge[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n  background: var(--sf-bg);\n  border: 1px solid var(--sf-border);\n  border-radius: 5px;\n  padding: 2px 8px;\n  color: var(--sf-text-secondary);\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--sf-text-secondary);\n  font-size: 0.85rem;\n}\n.users-count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--sf-text);\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.chip-basic[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.chip-pro[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #3b82f6;\n}\n.chip-enterprise[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  color: #8b5cf6;\n}\n.status-dot-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.dot-active[_ngcontent-%COMP%] {\n  background: #22c55e;\n  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.15);\n}\n.dot-inactive[_ngcontent-%COMP%] {\n  background: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);\n}\n.status-label[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: #374151;\n}\n.expiry-warn[_ngcontent-%COMP%] {\n  color: var(--sf-warning);\n  font-weight: 600;\n  font-size: 0.83rem;\n}\n.row-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.act-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.act-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.act-expand[_ngcontent-%COMP%] {\n  color: var(--sf-text-secondary);\n}\n.act-expand[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-primary);\n}\n.act-lock[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.act-lock[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.act-unlock[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.act-unlock[_ngcontent-%COMP%]:hover {\n  background: #f0fdf4;\n}\n.act-edit[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.act-edit[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n}\n.org-detail-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 16px 8px;\n  direction: rtl;\n}\n.detail-group[_ngcontent-%COMP%] {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 12px;\n  padding: 14px 18px;\n  min-width: 220px;\n  flex: 1;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.detail-group-full[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n}\n.detail-group-title[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--sf-text-muted);\n  margin-bottom: 10px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--sf-border);\n}\n.detail-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.detail-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n}\n.df-label[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: var(--sf-text-muted);\n  min-width: 90px;\n  flex-shrink: 0;\n}\n.df-val[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  color: var(--sf-text);\n  font-weight: 500;\n}\n.detail-notes[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  color: var(--sf-text-secondary);\n  line-height: 1.6;\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=organizations.component.css.map */'] });
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
      OrgDialogComponent
    ], template: `<div class="orgs-page">

  <!-- \u2500\u2500 Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="page-header">
    <div class="header-titles">
      <h1>\u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05DD</h1>
      <p>{{ orgs().length }} \u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05DD \u05E8\u05E9\u05D5\u05DE\u05D9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA</p>
    </div>
    <button kendoButton themeColor="primary" [svgIcon]="addIcon" (click)="openAdd()">
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
        pageSizes: [10, 25, 50]
      }"
      [sortable]="{ mode: 'single', allowUnsort: false }"
      [sort]="sort"
      [reorderable]="true"
      [resizable]="true"
      [selectable]="{ mode: 'multiple', checkboxOnly: true }"
      [columnMenu]="true"
      scrollable="none"
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
            <button class="act-btn"
                    [class.act-lock]="o.IsActive"
                    [class.act-unlock]="!o.IsActive"
                    [title]="o.IsActive ? '\u05D4\u05E9\u05D1\u05EA' : '\u05D4\u05E4\u05E2\u05DC'"
                    (click)="toggleActive(o)">
              <i class="pi" [class.pi-lock]="o.IsActive" [class.pi-lock-open]="!o.IsActive"></i>
            </button>
            <button class="act-btn act-edit" title="\u05E2\u05E8\u05D5\u05DA" (click)="openEdit(o)">
              <i class="pi pi-pencil"></i>
            </button>
          </div>
        </ng-template>
      </kendo-grid-column>


    </kendo-grid>
  }

</div>

@if (dialogOpen()) {
  <app-org-dialog
    [org]="dialogOrg()"
    (closed)="dialogOpen.set(false)"
    (saved)="onSaved(); dialogOpen.set(false)" />
}
`, styles: ['/* src/app/features/organizations/organizations.component.scss */\n:host {\n  display: block;\n  width: 100%;\n}\n.orgs-page {\n  width: 100%;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  direction: rtl;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.header-titles h1 {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0;\n}\n.header-titles p {\n  font-size: 0.83rem;\n  color: var(--sf-text-secondary);\n  margin: 3px 0 0;\n}\n.toolbar {\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.export-btns {\n  display: flex;\n  gap: 0;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n}\n:host ::ng-deep .export-btns .k-button {\n  border: none !important;\n  border-radius: 0 !important;\n  background: var(--sf-bg-card) !important;\n  color: var(--sf-text-secondary) !important;\n  box-shadow: none !important;\n  padding: 6px 14px !important;\n  font-size: 0.82rem !important;\n  font-weight: 500 !important;\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n}\n:host ::ng-deep .export-btns .k-button:hover {\n  background: var(--sf-bg-hover) !important;\n}\n:host ::ng-deep .export-btns .k-button + .k-button {\n  border-inline-start: 1px solid var(--sf-border) !important;\n}\n:host ::ng-deep .export-btns .btn-excel:hover {\n  color: #16a34a !important;\n}\n:host ::ng-deep .export-btns .btn-pdf:hover {\n  color: #dc2626 !important;\n}\n.search-wrap {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 340px;\n  direction: rtl;\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 6px 12px;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.search-wrap:focus-within {\n  border-color: var(--sf-border-focus);\n  box-shadow: 0 0 0 3px rgba(13, 71, 255, 0.12);\n}\n.search-icon {\n  color: var(--sf-text-muted);\n  font-size: 18px;\n  width: 18px !important;\n  height: 18px !important;\n  flex-shrink: 0;\n}\n.search-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  color: var(--sf-text);\n  font-size: 0.875rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n.search-input::placeholder {\n  color: var(--sf-text-muted);\n}\n.state-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: var(--sf-text-secondary);\n}\n.state-box.error {\n  color: var(--sf-danger);\n}\n:host ::ng-deep .orgs-grid {\n  border-radius: 10px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04);\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n:host ::ng-deep .orgs-grid .k-grid-header th.k-header {\n  background: var(--sf-grid-hd-bg) !important;\n  color: var(--sf-grid-hd-color) !important;\n  font-weight: 700 !important;\n  font-size: 0.78rem !important;\n  text-align: right !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n  border-color: var(--sf-grid-hd-border) !important;\n  direction: rtl;\n}\n:host ::ng-deep .orgs-grid .k-grid-header {\n  background: var(--sf-grid-hd-bg) !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n}\n:host ::ng-deep .orgs-grid .k-column-menu-button {\n  color: var(--sf-grid-hd-color);\n  opacity: 0.7;\n}\n:host ::ng-deep .orgs-grid .k-column-menu-button:hover {\n  opacity: 1;\n}\n:host ::ng-deep .orgs-grid td.k-table-td {\n  text-align: right !important;\n  vertical-align: middle !important;\n  border-color: var(--sf-border) !important;\n  font-size: 0.875rem;\n  background: var(--sf-bg-card);\n  direction: rtl;\n  padding: 8px 12px !important;\n}\n:host ::ng-deep .orgs-grid tr.k-table-row:hover td {\n  background: var(--sf-bg-hover) !important;\n}\n:host ::ng-deep .orgs-grid .k-pager {\n  border-top: 1px solid var(--sf-border);\n  background: #f8fafc;\n  direction: rtl;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  font-size: 0.82rem;\n}\n:host ::ng-deep .orgs-grid .k-pager-wrap,\n:host ::ng-deep .orgs-grid .k-pager {\n  direction: rtl !important;\n}\n:host ::ng-deep .orgs-grid .k-detail-row > td {\n  background: var(--sf-bg) !important;\n  padding: 4px 0 12px !important;\n  border-bottom: 1px solid var(--sf-border) !important;\n}\n:host ::ng-deep .orgs-grid .k-sort-icon {\n  margin-right: 4px;\n}\n:host ::ng-deep .orgs-grid .k-checkbox {\n  accent-color: var(--sf-primary);\n}\n.org-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.org-logo {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  object-fit: contain;\n  border: 1px solid var(--sf-border);\n  padding: 2px;\n  background: #fff;\n  flex-shrink: 0;\n}\n.org-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  flex-shrink: 0;\n  background: var(--sf-primary-light);\n  color: var(--sf-primary);\n  font-size: 0.85rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.org-name {\n  font-weight: 600;\n  color: var(--sf-text);\n  font-size: 0.88rem;\n}\n.code-badge {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n  background: var(--sf-bg);\n  border: 1px solid var(--sf-border);\n  border-radius: 5px;\n  padding: 2px 8px;\n  color: var(--sf-text-secondary);\n}\n.muted {\n  color: var(--sf-text-secondary);\n  font-size: 0.85rem;\n}\n.users-count {\n  font-weight: 600;\n  color: var(--sf-text);\n}\n.chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.chip-basic {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.chip-pro {\n  background: #eff6ff;\n  color: #3b82f6;\n}\n.chip-enterprise {\n  background: #faf5ff;\n  color: #8b5cf6;\n}\n.status-dot-wrap {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.status-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.dot-active {\n  background: #22c55e;\n  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.15);\n}\n.dot-inactive {\n  background: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);\n}\n.status-label {\n  font-size: 0.83rem;\n  color: #374151;\n}\n.expiry-warn {\n  color: var(--sf-warning);\n  font-weight: 600;\n  font-size: 0.83rem;\n}\n.row-actions {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.act-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.act-btn i {\n  font-size: 0.9rem;\n}\n.act-expand {\n  color: var(--sf-text-secondary);\n}\n.act-expand:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-primary);\n}\n.act-lock {\n  color: #ef4444;\n}\n.act-lock:hover {\n  background: #fef2f2;\n}\n.act-unlock {\n  color: #16a34a;\n}\n.act-unlock:hover {\n  background: #f0fdf4;\n}\n.act-edit {\n  color: #3b82f6;\n}\n.act-edit:hover {\n  background: #eff6ff;\n}\n.org-detail-card {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 16px 8px;\n  direction: rtl;\n}\n.detail-group {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 12px;\n  padding: 14px 18px;\n  min-width: 220px;\n  flex: 1;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.detail-group-full {\n  flex-basis: 100%;\n}\n.detail-group-title {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--sf-text-muted);\n  margin-bottom: 10px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--sf-border);\n}\n.detail-fields {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.detail-field {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n}\n.df-label {\n  font-size: 0.76rem;\n  color: var(--sf-text-muted);\n  min-width: 90px;\n  flex-shrink: 0;\n}\n.df-val {\n  font-size: 0.84rem;\n  color: var(--sf-text);\n  font-weight: 500;\n}\n.detail-notes {\n  font-size: 0.84rem;\n  color: var(--sf-text-secondary);\n  line-height: 1.6;\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=organizations.component.css.map */\n'] }]
  }], () => [{ type: OrganizationService }], { grid: [{
    type: ViewChild,
    args: [GridComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrganizationsComponent, { className: "OrganizationsComponent", filePath: "src/app/features/organizations/organizations.component.ts", lineNumber: 31 });
})();
export {
  OrganizationsComponent
};
//# sourceMappingURL=chunk-2RZT7IZD.js.map
