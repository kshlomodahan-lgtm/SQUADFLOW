import {
  CatalogService
} from "./chunk-RDNARHI3.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-QZMRJPSG.js";
import "./chunk-FAI5CTFG.js";
import {
  CellTemplateDirective,
  ColumnComponent,
  ColumnComponent2,
  CustomMessagesComponent,
  DatePickerComponent,
  DatePickerModule,
  DetailTemplateDirective,
  DialogActionsComponent,
  DialogComponent,
  DialogModule,
  DropDownListComponent,
  DropDownListModule,
  ExcelComponent,
  ExcelModule,
  GridComponent,
  GridModule,
  MultiSelectComponent,
  MultiSelectModule,
  NumericTextBoxComponent,
  NumericTextBoxModule,
  PDFComponent,
  PDFModule,
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
  SVGIconComponent,
  dollarIcon,
  eyeIcon,
  fileExcelIcon,
  filePdfIcon,
  gearIcon,
  infoCircleIcon,
  lockIcon,
  plusIcon
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
  CommonModule,
  Component,
  CurrencyPipe,
  DecimalPipe,
  EventEmitter,
  Input,
  NgClass,
  Output,
  ViewChild,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBindV,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-DEBWI7RP.js";

// src/app/core/models/catalog.model.ts
var PRICING_MODEL_LABELS = {
  FLAT: "\u05DE\u05D7\u05D9\u05E8 \u05E7\u05D1\u05D5\u05E2",
  PER_USER: "\u05DC\u05E4\u05D9 \u05DE\u05E9\u05EA\u05DE\u05E9",
  USAGE: "\u05DC\u05E4\u05D9 \u05E9\u05D9\u05DE\u05D5\u05E9",
  FREE: "\u05D7\u05D9\u05E0\u05DE\u05D9"
};
var PRODUCT_STATUS_LABELS = {
  DRAFT: "\u05D8\u05D9\u05D5\u05D8\u05D4",
  ACTIVE: "\u05E4\u05E2\u05D9\u05DC",
  DEPRECATED: "\u05DE\u05D9\u05D5\u05E9\u05DF"
};

// src/app/features/catalog/products/product-dialog/product-dialog.component.ts
var _c0 = () => ({ CategoryID: null, CategoryName: "\u2014 \u05DC\u05DC\u05D0 \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 \u2014" });
var _forTrack0 = ($index, $item) => $item.id;
function ProductDialogComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function ProductDialogComponent_For_4_Template_button_click_0_listener() {
      const g_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeGroup.set(g_r2.id));
    });
    \u0275\u0275element(1, "kendo-svg-icon", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeGroup() === g_r2.id);
    \u0275\u0275advance();
    \u0275\u0275property("icon", g_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", g_r2.label, " ");
  }
}
function ProductDialogComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.errorMsg);
  }
}
function ProductDialogComponent_Conditional_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
  }
}
function ProductDialogComponent_Conditional_8_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
  }
}
function ProductDialogComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 13)(2, "label", 14);
    \u0275\u0275text(3, "\u05E7\u05D5\u05D3 \u05DE\u05D5\u05E6\u05E8 ");
    \u0275\u0275elementStart(4, "span", 15);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "input", 16);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(7, ProductDialogComponent_Conditional_8_Conditional_7_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 13)(9, "label", 14);
    \u0275\u0275text(10, "\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "kendo-dropdownlist", 18);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 19)(13, "label", 14);
    \u0275\u0275text(14, "\u05E9\u05DD \u05DE\u05D5\u05E6\u05E8 ");
    \u0275\u0275elementStart(15, "span", 15);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "input", 20);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(18, ProductDialogComponent_Conditional_8_Conditional_18_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 19)(20, "label", 14);
    \u0275\u0275text(21, "\u05EA\u05D9\u05D0\u05D5\u05E8 \u05E7\u05E6\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 21);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 13)(24, "label", 14);
    \u0275\u0275text(25, "\u05E1\u05D8\u05D8\u05D5\u05E1 \u05DE\u05D5\u05E6\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "kendo-dropdownlist", 22);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 13)(28, "label", 14);
    \u0275\u0275text(29, "\u05E0\u05E8\u05D0\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 23)(31, "button", 24);
    \u0275\u0275listener("click", function ProductDialogComponent_Conditional_8_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.get("IsPublic")?.setValue(true));
    });
    \u0275\u0275text(32, "\u{1F441} \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 24);
    \u0275\u0275listener("click", function ProductDialogComponent_Conditional_8_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.get("IsPublic")?.setValue(false));
    });
    \u0275\u0275text(34, "\u{1F512} \u05E4\u05E8\u05D8\u05D9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 13)(36, "label", 14);
    \u0275\u0275text(37, "\u05E1\u05D8\u05D8\u05D5\u05E1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 23)(39, "button", 24);
    \u0275\u0275listener("click", function ProductDialogComponent_Conditional_8_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.get("IsActive")?.setValue(true));
    });
    \u0275\u0275text(40, "\u2713 \u05E4\u05E2\u05D9\u05DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 24);
    \u0275\u0275listener("click", function ProductDialogComponent_Conditional_8_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.get("IsActive")?.setValue(false));
    });
    \u0275\u0275text(42, "\u2717 \u05DE\u05D5\u05E9\u05D4\u05D4");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.form.get("ProductCode")?.invalid && ctx_r2.form.get("ProductCode")?.touched ? 7 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("data", ctx_r2.categories())("valuePrimitive", true)("defaultItem", \u0275\u0275pureFunction0(15, _c0));
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.form.get("ProductName")?.invalid && ctx_r2.form.get("ProductName")?.touched ? 18 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("data", ctx_r2.statusOptions)("valuePrimitive", true);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275classProp("seg-on", !!ctx_r2.form.get("IsPublic")?.value);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg-off", !ctx_r2.form.get("IsPublic")?.value);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("seg-on", !!ctx_r2.form.get("IsActive")?.value);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg-off", !ctx_r2.form.get("IsActive")?.value);
  }
}
function ProductDialogComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 19)(2, "label", 14);
    \u0275\u0275text(3, "\u05DE\u05D5\u05D3\u05DC \u05EA\u05DE\u05D7\u05D5\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "kendo-dropdownlist", 25);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 13)(6, "label", 14);
    \u0275\u0275text(7, "\u05DE\u05D7\u05D9\u05E8 \u05D7\u05D5\u05D3\u05E9\u05D9 (\u20AA)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "kendo-numerictextbox", 26);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 13)(10, "label", 14);
    \u0275\u0275text(11, "\u05DE\u05D7\u05D9\u05E8 \u05E9\u05E0\u05EA\u05D9 (\u20AA)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "kendo-numerictextbox", 27);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 13)(14, "label", 14);
    \u0275\u0275text(15, "\u05D3\u05DE\u05D9 \u05D4\u05E7\u05DE\u05D4 (\u20AA)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "kendo-numerictextbox", 28);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 13)(18, "label", 14);
    \u0275\u0275text(19, "\u05D9\u05DE\u05D9 \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "kendo-numerictextbox", 29);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("data", ctx_r2.pricingOptions)("valuePrimitive", true);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("min", 0)("decimals", 2)("format", "n2");
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("min", 0)("decimals", 2)("format", "n2");
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("min", 0)("decimals", 2)("format", "n2");
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("min", 0)("decimals", 0)("format", "n0");
    \u0275\u0275control();
  }
}
function ProductDialogComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1, "\u05E8\u05D9\u05E7 / 0 = \u05DC\u05DC\u05D0 \u05D4\u05D2\u05D1\u05DC\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 7)(3, "div", 13)(4, "label", 14);
    \u0275\u0275text(5, "\u05DE\u05E7\u05E1\u05D9\u05DE\u05D5\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "kendo-numerictextbox", 31);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 13)(8, "label", 14);
    \u0275\u0275text(9, "\u05D0\u05D7\u05E1\u05D5\u05DF \u05DE\u05E7\u05E1\u05D9\u05DE\u05DC\u05D9 (GB)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "kendo-numerictextbox", 32);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 13)(12, "label", 14);
    \u0275\u0275text(13, "\u05DE\u05E7\u05E1\u05D9\u05DE\u05D5\u05DD \u05E8\u05E9\u05D5\u05DE\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "kendo-numerictextbox", 33);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 13)(16, "label", 14);
    \u0275\u0275text(17, "\u05E7\u05E8\u05D9\u05D0\u05D5\u05EA API \u05DC\u05D7\u05D5\u05D3\u05E9");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "kendo-numerictextbox", 34);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("min", 0)("decimals", 0)("format", "n0");
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("min", 0)("decimals", 0)("format", "n0");
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("min", 0)("decimals", 0)("format", "n0");
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("min", 0)("decimals", 0)("format", "n0");
    \u0275\u0275control();
  }
}
function ProductDialogComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 13)(2, "label", 14);
    \u0275\u0275text(3, "\u05E6\u05D1\u05E2 \u05E8\u05D0\u05E9\u05D9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35)(5, "input", 36);
    \u0275\u0275listener("change", function ProductDialogComponent_Conditional_11_Template_input_change_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.get("ColorHex")?.setValue($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 37);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 13)(8, "label", 14);
    \u0275\u0275text(9, "\u05E1\u05D3\u05E8 \u05EA\u05E6\u05D5\u05D2\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "kendo-numerictextbox", 38);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 19)(12, "label", 14);
    \u0275\u0275text(13, "\u05E9\u05DD \u05D0\u05D9\u05D9\u05E7\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 39);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 19)(16, "label", 14);
    \u0275\u0275text(17, "\u05DB\u05EA\u05D5\u05D1\u05EA \u05DC\u05D5\u05D2\u05D5 (URL)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 40);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r2.form.get("ColorHex")?.value);
    \u0275\u0275advance();
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("min", 0)("decimals", 0)("format", "n0");
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
  }
}
function ProductDialogComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 13)(2, "label", 14);
    \u0275\u0275text(3, "\u05E1\u05D1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E2\u05DC\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "kendo-dropdownlist", 41);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 13)(6, "label", 14);
    \u0275\u0275text(7, "\u05D2\u05E8\u05E1\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 42);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 19)(10, "label", 14);
    \u0275\u0275text(11, "\u05E9\u05E4\u05D5\u05EA \u05E0\u05EA\u05DE\u05DB\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "kendo-multiselect", 43);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 13)(14, "label", 14);
    \u0275\u0275text(15, "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05E9\u05E7\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "kendo-datepicker", 44);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 13)(18, "label", 14);
    \u0275\u0275text(19, "\u05EA\u05D0\u05E8\u05D9\u05DA \u05E1\u05D9\u05D5\u05DD \u05EA\u05DE\u05D9\u05DB\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "kendo-datepicker", 45);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 19)(22, "label", 14);
    \u0275\u0275text(23, "\u05E7\u05D9\u05E9\u05D5\u05E8 \u05DC\u05EA\u05D9\u05E2\u05D5\u05D3");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 46);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 19)(26, "label", 14);
    \u0275\u0275text(27, "\u05EA\u05D9\u05D0\u05D5\u05E8 \u05DE\u05DC\u05D0");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "textarea", 47);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("data", ctx_r2.deploymentOptions)("valuePrimitive", true);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("data", ctx_r2.languageOptions)("valuePrimitive", true);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("format", ctx_r2.dateFormat);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("format", ctx_r2.dateFormat);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
  }
}
var ProductDialogComponent = class _ProductDialogComponent {
  fb;
  svc;
  product = null;
  saved = new EventEmitter();
  closed = new EventEmitter();
  form;
  saving = signal(
    false,
    ...ngDevMode ? [{ debugName: "saving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  errorMsg = "";
  categories = signal(
    [],
    ...ngDevMode ? [{ debugName: "categories" }] : (
      /* istanbul ignore next */
      []
    )
  );
  activeGroup = signal(
    "general",
    ...ngDevMode ? [{ debugName: "activeGroup" }] : (
      /* istanbul ignore next */
      []
    )
  );
  groups = [
    { id: "general", label: "\u05DB\u05DC\u05DC\u05D9", icon: gearIcon },
    { id: "pricing", label: "\u05EA\u05DE\u05D7\u05D5\u05E8", icon: dollarIcon },
    { id: "limits", label: "\u05D4\u05D2\u05D1\u05DC\u05D5\u05EA", icon: lockIcon },
    { id: "display", label: "\u05EA\u05E6\u05D5\u05D2\u05D4", icon: eyeIcon },
    { id: "details", label: "\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3", icon: infoCircleIcon }
  ];
  pricingOptions = [
    { value: "FLAT", text: "\u05DE\u05D7\u05D9\u05E8 \u05E7\u05D1\u05D5\u05E2" },
    { value: "PER_USER", text: "\u05DC\u05E4\u05D9 \u05DE\u05E9\u05EA\u05DE\u05E9" },
    { value: "USAGE", text: "\u05DC\u05E4\u05D9 \u05E9\u05D9\u05DE\u05D5\u05E9" },
    { value: "FREE", text: "\u05D7\u05D9\u05E0\u05DE\u05D9" }
  ];
  deploymentOptions = [
    { value: "CLOUD", text: "\u05E2\u05E0\u05DF" },
    { value: "ON_PREMISE", text: "\u05E9\u05E8\u05EA \u05DE\u05E7\u05D5\u05DE\u05D9" },
    { value: "HYBRID", text: "\u05D4\u05D9\u05D1\u05E8\u05D9\u05D3\u05D9" }
  ];
  statusOptions = [
    { value: "DRAFT", text: "\u05D8\u05D9\u05D5\u05D8\u05D4" },
    { value: "ACTIVE", text: "\u05E4\u05E2\u05D9\u05DC" },
    { value: "DEPRECATED", text: "\u05DE\u05D9\u05D5\u05E9\u05DF" }
  ];
  languageOptions = [
    { value: "he", text: "\u05E2\u05D1\u05E8\u05D9\u05EA" },
    { value: "en", text: "English" },
    { value: "ar", text: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" },
    { value: "ru", text: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439" },
    { value: "fr", text: "Fran\xE7ais" },
    { value: "de", text: "Deutsch" },
    { value: "es", text: "Espa\xF1ol" },
    { value: "it", text: "Italiano" },
    { value: "pt", text: "Portugu\xEAs" },
    { value: "zh", text: "\u4E2D\u6587" },
    { value: "ja", text: "\u65E5\u672C\u8A9E" },
    { value: "ko", text: "\uD55C\uAD6D\uC5B4" },
    { value: "tr", text: "T\xFCrk\xE7e" },
    { value: "pl", text: "Polski" },
    { value: "nl", text: "Nederlands" },
    { value: "sv", text: "Svenska" },
    { value: "da", text: "Dansk" },
    { value: "fi", text: "Suomi" },
    { value: "no", text: "Norsk" },
    { value: "cs", text: "\u010Ce\u0161tina" },
    { value: "hu", text: "Magyar" },
    { value: "ro", text: "Rom\xE2n\u0103" },
    { value: "uk", text: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430" },
    { value: "el", text: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC" },
    { value: "th", text: "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22" },
    { value: "vi", text: "Ti\u1EBFng Vi\u1EC7t" },
    { value: "id", text: "Bahasa Indonesia" },
    { value: "ms", text: "Bahasa Melayu" },
    { value: "hi", text: "\u0939\u093F\u0928\u094D\u0926\u0940" },
    { value: "fa", text: "\u0641\u0627\u0631\u0633\u06CC" }
  ];
  dateFormat = "dd/MM/yyyy";
  groupFields = {
    general: ["ProductCode", "ProductName", "CategoryID", "ProductStatus", "IsPublic", "IsActive", "ShortDescription"],
    pricing: ["PricingModel", "PriceMonthly", "PriceAnnual", "SetupFee", "TrialDays"],
    limits: ["MaxUsers", "MaxStorage_GB", "MaxRecords", "ApiCallsPerMonth"],
    display: ["ColorHex", "IconName", "LogoUrl", "SortOrder"],
    details: ["DeploymentType", "SupportedLanguages", "DocumentationUrl", "ProductVersion", "Description"]
  };
  get isEdit() {
    return !!this.product?.ProductID;
  }
  get title() {
    return this.isEdit ? "\u05E2\u05E8\u05D9\u05DB\u05EA \u05DE\u05D5\u05E6\u05E8" : "\u05DE\u05D5\u05E6\u05E8 \u05D7\u05D3\u05E9";
  }
  constructor(fb, svc) {
    this.fb = fb;
    this.svc = svc;
  }
  ngOnInit() {
    this.loadCategories();
    const p = this.product;
    this.form = this.fb.group({
      ProductCode: [p?.ProductCode ?? "", [Validators.required, Validators.maxLength(30)]],
      ProductName: [p?.ProductName ?? "", [Validators.required, Validators.maxLength(200)]],
      CategoryID: [p?.CategoryID ?? null],
      ProductStatus: [p?.ProductStatus ?? "DRAFT", Validators.required],
      IsPublic: [p?.IsPublic ?? true],
      IsActive: [p?.IsActive ?? true],
      ShortDescription: [p?.ShortDescription ?? "", Validators.maxLength(255)],
      PricingModel: [p?.PricingModel ?? "FLAT"],
      PriceMonthly: [p?.PriceMonthly ?? 0, [Validators.required, Validators.min(0)]],
      PriceAnnual: [p?.PriceAnnual ?? 0, Validators.min(0)],
      SetupFee: [p?.SetupFee ?? 0, Validators.min(0)],
      TrialDays: [p?.TrialDays ?? 0, Validators.min(0)],
      MaxUsers: [p?.MaxUsers ?? null],
      MaxStorage_GB: [p?.MaxStorage_GB ?? null],
      MaxRecords: [p?.MaxRecords ?? null],
      ApiCallsPerMonth: [p?.ApiCallsPerMonth ?? null],
      ColorHex: [p?.ColorHex ?? "#0D47FF"],
      IconName: [p?.IconName ?? ""],
      LogoUrl: [p?.LogoUrl ?? ""],
      SortOrder: [p?.SortOrder ?? 0],
      DeploymentType: [p?.DeploymentType ?? "CLOUD"],
      SupportedLanguages: [this.parseLangs(p?.SupportedLanguages)],
      DocumentationUrl: [p?.DocumentationUrl ?? ""],
      ProductVersion: [p?.ProductVersion ?? "1.0"],
      LaunchDate: [p?.LaunchDate ? new Date(p.LaunchDate) : null],
      EndOfLifeDate: [p?.EndOfLifeDate ? new Date(p.EndOfLifeDate) : null],
      Description: [p?.Description ?? ""]
    });
  }
  parseLangs(raw) {
    if (!raw)
      return ["he"];
    try {
      return JSON.parse(raw);
    } catch {
      return ["he"];
    }
  }
  dateToStr(d) {
    if (!d)
      return null;
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }
  loadCategories() {
    this.svc.getCategories().subscribe({ next: (r) => this.categories.set(r.data) });
  }
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
    this.saving.set(true);
    this.errorMsg = "";
    const v = this.form.value;
    const payload = __spreadProps(__spreadValues({}, v), {
      ProductID: this.product?.ProductID ?? 0,
      SupportedLanguages: JSON.stringify(v.SupportedLanguages || []),
      LaunchDate: this.dateToStr(v.LaunchDate),
      EndOfLifeDate: this.dateToStr(v.EndOfLifeDate)
    });
    this.svc.saveProduct(payload).subscribe({
      next: (r) => {
        this.saving.set(false);
        if (r.success) {
          this.saved.emit();
          this.closed.emit();
        } else
          this.errorMsg = r.message;
      },
      error: () => {
        this.saving.set(false);
        this.errorMsg = "\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05E9\u05DE\u05D9\u05E8\u05D4";
      }
    });
  }
  close() {
    this.closed.emit();
  }
  static \u0275fac = function ProductDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductDialogComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CatalogService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDialogComponent, selectors: [["app-product-dialog"]], inputs: { product: "product" }, outputs: { saved: "saved", closed: "closed" }, decls: 19, vars: 12, consts: [[3, "close", "title", "width", "minWidth"], [1, "prod-dialog-body"], [1, "prod-nav"], ["type", "button", 1, "nav-item", 3, "active"], [1, "prod-content"], [1, "form-error-banner"], [3, "formGroup"], [1, "section-grid"], [1, "dialog-footer"], [1, "btn-save", 3, "click", "disabled"], [1, "btn-cancel", 3, "click"], ["type", "button", 1, "nav-item", 3, "click"], [3, "icon"], [1, "form-row", "col-2"], [1, "form-label"], [1, "req"], ["kendoTextBox", "", "formControlName", "ProductCode", "placeholder", "CRM_BASIC", 1, "field-full", 2, "text-transform", "uppercase", "font-family", "'Share Tech Mono',monospace", "direction", "ltr", "text-align", "left"], [1, "field-error"], ["formControlName", "CategoryID", "textField", "CategoryName", "valueField", "CategoryID", 1, "field-full", 3, "data", "valuePrimitive", "defaultItem"], [1, "form-row", "col-full"], ["kendoTextBox", "", "formControlName", "ProductName", "placeholder", "\u05E9\u05DD \u05D4\u05DE\u05D5\u05E6\u05E8", 1, "field-full"], ["kendoTextBox", "", "formControlName", "ShortDescription", "placeholder", "\u05EA\u05D9\u05D0\u05D5\u05E8 \u05E7\u05E6\u05E8 (\u05E2\u05D3 255 \u05EA\u05D5\u05D5\u05D9\u05DD)", 1, "field-full"], ["formControlName", "ProductStatus", "textField", "text", "valueField", "value", 1, "field-full", 3, "data", "valuePrimitive"], [1, "seg-ctrl"], ["type", "button", 1, "seg-btn", 3, "click"], ["formControlName", "PricingModel", "textField", "text", "valueField", "value", 1, "field-full", 3, "data", "valuePrimitive"], ["formControlName", "PriceMonthly", 1, "field-full", 3, "min", "decimals", "format"], ["formControlName", "PriceAnnual", 1, "field-full", 3, "min", "decimals", "format"], ["formControlName", "SetupFee", 1, "field-full", 3, "min", "decimals", "format"], ["formControlName", "TrialDays", 1, "field-full", 3, "min", "decimals", "format"], [1, "section-hint"], ["formControlName", "MaxUsers", 1, "field-full", 3, "min", "decimals", "format"], ["formControlName", "MaxStorage_GB", 1, "field-full", 3, "min", "decimals", "format"], ["formControlName", "MaxRecords", 1, "field-full", 3, "min", "decimals", "format"], ["formControlName", "ApiCallsPerMonth", 1, "field-full", 3, "min", "decimals", "format"], [1, "color-input-row"], ["type", "color", 1, "color-picker", 3, "change", "value"], ["kendoTextBox", "", "formControlName", "ColorHex", "placeholder", "#0D47FF", 1, "field-full", 2, "direction", "ltr", "text-align", "left", "font-family", "'Share Tech Mono',monospace"], ["formControlName", "SortOrder", 1, "field-full", 3, "min", "decimals", "format"], ["kendoTextBox", "", "formControlName", "IconName", "placeholder", "\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: pi-users", 1, "field-full", 2, "direction", "ltr", "text-align", "left", "font-family", "'Share Tech Mono',monospace"], ["kendoTextBox", "", "formControlName", "LogoUrl", "placeholder", "https://...", 1, "field-full", 2, "direction", "ltr", "text-align", "left"], ["formControlName", "DeploymentType", "textField", "text", "valueField", "value", 1, "field-full", 3, "data", "valuePrimitive"], ["kendoTextBox", "", "formControlName", "ProductVersion", "placeholder", "1.0", 1, "field-full", 2, "direction", "ltr", "text-align", "left", "font-family", "'Share Tech Mono',monospace"], ["formControlName", "SupportedLanguages", "textField", "text", "valueField", "value", "placeholder", "\u05D1\u05D7\u05E8 \u05E9\u05E4\u05D5\u05EA...", 1, "field-full", 3, "data", "valuePrimitive"], ["formControlName", "LaunchDate", "placeholder", "DD/MM/YYYY", 1, "field-full", 3, "format"], ["formControlName", "EndOfLifeDate", "placeholder", "DD/MM/YYYY", 1, "field-full", 3, "format"], ["kendoTextBox", "", "formControlName", "DocumentationUrl", "placeholder", "https://docs.example.com", 1, "field-full", 2, "direction", "ltr", "text-align", "left"], ["formControlName", "Description", "rows", "5", "placeholder", "\u05EA\u05D9\u05D0\u05D5\u05E8 \u05DE\u05E4\u05D5\u05E8\u05D8 \u05E9\u05DC \u05D4\u05DE\u05D5\u05E6\u05E8...", 1, "field-full", "textarea-field"]], template: function ProductDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "kendo-dialog", 0);
      \u0275\u0275listener("close", function ProductDialogComponent_Template_kendo_dialog_close_0_listener() {
        return ctx.close();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "nav", 2);
      \u0275\u0275repeaterCreate(3, ProductDialogComponent_For_4_Template, 3, 4, "button", 3, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275conditionalCreate(6, ProductDialogComponent_Conditional_6_Template, 2, 1, "div", 5);
      \u0275\u0275elementStart(7, "form", 6);
      \u0275\u0275conditionalCreate(8, ProductDialogComponent_Conditional_8_Template, 43, 16, "div", 7);
      \u0275\u0275conditionalCreate(9, ProductDialogComponent_Conditional_9_Template, 21, 14, "div", 7);
      \u0275\u0275conditionalCreate(10, ProductDialogComponent_Conditional_10_Template, 19, 12);
      \u0275\u0275conditionalCreate(11, ProductDialogComponent_Conditional_11_Template, 19, 4, "div", 7);
      \u0275\u0275conditionalCreate(12, ProductDialogComponent_Conditional_12_Template, 29, 6, "div", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "kendo-dialog-actions")(14, "div", 8)(15, "button", 9);
      \u0275\u0275listener("click", function ProductDialogComponent_Template_button_click_15_listener() {
        return ctx.save();
      });
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 10);
      \u0275\u0275listener("click", function ProductDialogComponent_Template_button_click_17_listener() {
        return ctx.close();
      });
      \u0275\u0275text(18, "\u05D1\u05D9\u05D8\u05D5\u05DC");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("title", ctx.title)("width", 820)("minWidth", 600);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.groups);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.errorMsg ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeGroup() === "general" ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeGroup() === "pricing" ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeGroup() === "limits" ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeGroup() === "display" ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeGroup() === "details" ? 12 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.saving());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.saving() ? "\u05E9\u05D5\u05DE\u05E8..." : "\u2713 \u05E9\u05DE\u05D5\u05E8", " ");
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, DialogModule, DialogComponent, DialogActionsComponent, TextBoxModule, TextBoxDirective, NumericTextBoxModule, NumericTextBoxComponent, DropDownListModule, DropDownListComponent, MultiSelectModule, MultiSelectComponent, DatePickerModule, DatePickerComponent, ButtonsModule, SVGIconComponent], styles: ['\n.prod-dialog-body[_ngcontent-%COMP%] {\n  display: flex;\n  direction: rtl;\n  height: 480px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n  border-radius: 12px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n  margin: 4px;\n}\n.prod-nav[_ngcontent-%COMP%] {\n  width: 140px;\n  min-width: 140px;\n  background: var(--sf-bg);\n  border-inline-end: 1px solid var(--sf-border);\n  display: flex;\n  flex-direction: column;\n  padding: 8px 0;\n  flex-shrink: 0;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 0.84rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  color: var(--sf-text-secondary);\n  text-align: right;\n  direction: rtl;\n  transition: background 0.15s, color 0.15s;\n  border-radius: 0;\n  width: 100%;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: var(--sf-primary-light);\n  color: var(--sf-primary);\n  font-weight: 600;\n  border-inline-start: 3px solid var(--sf-primary);\n}\n.nav-item[_ngcontent-%COMP%]   kendo-svg-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.prod-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px 24px;\n  direction: rtl;\n}\n.form-error-banner[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 6px;\n  padding: 10px 14px;\n  color: var(--sf-danger);\n  font-size: 0.85rem;\n  margin-bottom: 16px;\n}\n.section-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px 20px;\n  direction: rtl;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-row.col-2[_ngcontent-%COMP%] {\n  grid-column: span 1;\n}\n.form-row.col-full[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  text-align: right;\n}\n.req[_ngcontent-%COMP%] {\n  color: var(--sf-danger);\n}\n.field-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--sf-danger);\n}\n.section-hint[_ngcontent-%COMP%] {\n  grid-column: span 2;\n  font-size: 0.78rem;\n  color: var(--sf-text-muted);\n  margin: 0;\n}\n.color-input-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.color-picker[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 6px;\n  padding: 2px;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.textarea-field[_ngcontent-%COMP%] {\n  font-family: "Noto Sans Hebrew", sans-serif;\n  font-size: 0.875rem;\n  color: var(--sf-text);\n  border: 1px solid var(--sf-border);\n  border-radius: 4px;\n  padding: 8px;\n  resize: vertical;\n  background: var(--sf-bg-card);\n  direction: rtl;\n  text-align: right;\n}\n.textarea-field[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--sf-primary);\n}\n.seg-ctrl[_ngcontent-%COMP%] {\n  display: inline-flex;\n  direction: rtl;\n  align-self: flex-start;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.seg-btn[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  font-size: 0.78rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  border: none;\n  background: var(--sf-bg);\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.seg-btn[_ngcontent-%COMP%]    + .seg-btn[_ngcontent-%COMP%] {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.seg-btn[_ngcontent-%COMP%]:hover:not(.seg-on):not(.seg-off) {\n  background: var(--sf-bg-hover);\n}\n.seg-btn.seg-on[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: #fff;\n  font-weight: 600;\n}\n.seg-btn.seg-off[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #fff;\n  font-weight: 600;\n}\n[_nghost-%COMP%]     .k-input-inner {\n  direction: rtl;\n  text-align: right;\n}\n[_nghost-%COMP%]     .k-dropdown-wrap, \n[_nghost-%COMP%]     .k-dropdownlist {\n  direction: rtl;\n}\n[_nghost-%COMP%]     .k-list-item {\n  direction: rtl;\n  text-align: right;\n}\n[_nghost-%COMP%]     .k-numerictextbox .k-input-inner {\n  direction: ltr;\n  text-align: left;\n}\n.dialog-footer[_ngcontent-%COMP%] {\n  display: flex;\n  direction: rtl;\n  gap: 8px;\n  width: 100%;\n}\n  .k-dialog-actions {\n  direction: rtl !important;\n}\n.btn-save[_ngcontent-%COMP%] {\n  background: #f97316;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 22px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.btn-save[_ngcontent-%COMP%]:hover {\n  background: #ea6c0c;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: #fff;\n  color: var(--sf-text-secondary);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 9px 22px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n}\n/*# sourceMappingURL=product-dialog.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductDialogComponent, [{
    type: Component,
    args: [{ selector: "app-product-dialog", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      DialogModule,
      TextBoxModule,
      NumericTextBoxModule,
      DropDownListModule,
      MultiSelectModule,
      DatePickerModule,
      ButtonsModule,
      SVGIconComponent
    ], template: `<kendo-dialog [title]="title" [width]="820" [minWidth]="600" (close)="close()">

  <div class="prod-dialog-body">

    <!-- Sidebar Nav -->
    <nav class="prod-nav">
      @for (g of groups; track g.id) {
        <button class="nav-item" [class.active]="activeGroup() === g.id" (click)="activeGroup.set(g.id)" type="button">
          <kendo-svg-icon [icon]="g.icon" />
          {{ g.label }}
        </button>
      }
    </nav>

    <!-- Content -->
    <div class="prod-content">
      @if (errorMsg) { <div class="form-error-banner">{{ errorMsg }}</div> }

      <form [formGroup]="form">

        <!-- \u2500\u2500 \u05DB\u05DC\u05DC\u05D9 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        @if (activeGroup() === 'general') {
          <div class="section-grid">

            <div class="form-row col-2">
              <label class="form-label">\u05E7\u05D5\u05D3 \u05DE\u05D5\u05E6\u05E8 <span class="req">*</span></label>
              <input kendoTextBox formControlName="ProductCode" placeholder="CRM_BASIC" class="field-full"
                     style="text-transform:uppercase;font-family:'Share Tech Mono',monospace;direction:ltr;text-align:left" />
              @if (form.get('ProductCode')?.invalid && form.get('ProductCode')?.touched) {
                <span class="field-error">\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4</span>
              }
            </div>

            <div class="form-row col-2">
              <label class="form-label">\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4</label>
              <kendo-dropdownlist
                formControlName="CategoryID"
                [data]="categories()"
                textField="CategoryName"
                valueField="CategoryID"
                [valuePrimitive]="true"
                [defaultItem]="{ CategoryID: null, CategoryName: '\u2014 \u05DC\u05DC\u05D0 \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 \u2014' }"
                class="field-full" />
            </div>

            <div class="form-row col-full">
              <label class="form-label">\u05E9\u05DD \u05DE\u05D5\u05E6\u05E8 <span class="req">*</span></label>
              <input kendoTextBox formControlName="ProductName" placeholder="\u05E9\u05DD \u05D4\u05DE\u05D5\u05E6\u05E8" class="field-full" />
              @if (form.get('ProductName')?.invalid && form.get('ProductName')?.touched) {
                <span class="field-error">\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4</span>
              }
            </div>

            <div class="form-row col-full">
              <label class="form-label">\u05EA\u05D9\u05D0\u05D5\u05E8 \u05E7\u05E6\u05E8</label>
              <input kendoTextBox formControlName="ShortDescription" placeholder="\u05EA\u05D9\u05D0\u05D5\u05E8 \u05E7\u05E6\u05E8 (\u05E2\u05D3 255 \u05EA\u05D5\u05D5\u05D9\u05DD)" class="field-full" />
            </div>

            <div class="form-row col-2">
              <label class="form-label">\u05E1\u05D8\u05D8\u05D5\u05E1 \u05DE\u05D5\u05E6\u05E8</label>
              <kendo-dropdownlist
                formControlName="ProductStatus"
                [data]="statusOptions"
                textField="text"
                valueField="value"
                [valuePrimitive]="true"
                class="field-full" />
            </div>

            <div class="form-row col-2">
              <label class="form-label">\u05E0\u05E8\u05D0\u05D5\u05EA</label>
              <div class="seg-ctrl">
                <button type="button" class="seg-btn"
                        [class.seg-on]="!!form.get('IsPublic')?.value"
                        (click)="form.get('IsPublic')?.setValue(true)">\u{1F441} \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9</button>
                <button type="button" class="seg-btn"
                        [class.seg-off]="!form.get('IsPublic')?.value"
                        (click)="form.get('IsPublic')?.setValue(false)">\u{1F512} \u05E4\u05E8\u05D8\u05D9</button>
              </div>
            </div>

            <div class="form-row col-2">
              <label class="form-label">\u05E1\u05D8\u05D8\u05D5\u05E1</label>
              <div class="seg-ctrl">
                <button type="button" class="seg-btn"
                        [class.seg-on]="!!form.get('IsActive')?.value"
                        (click)="form.get('IsActive')?.setValue(true)">\u2713 \u05E4\u05E2\u05D9\u05DC</button>
                <button type="button" class="seg-btn"
                        [class.seg-off]="!form.get('IsActive')?.value"
                        (click)="form.get('IsActive')?.setValue(false)">\u2717 \u05DE\u05D5\u05E9\u05D4\u05D4</button>
              </div>
            </div>

          </div>
        }

        <!-- \u2500\u2500 \u05EA\u05DE\u05D7\u05D5\u05E8 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        @if (activeGroup() === 'pricing') {
          <div class="section-grid">

            <div class="form-row col-full">
              <label class="form-label">\u05DE\u05D5\u05D3\u05DC \u05EA\u05DE\u05D7\u05D5\u05E8</label>
              <kendo-dropdownlist
                formControlName="PricingModel"
                [data]="pricingOptions"
                textField="text"
                valueField="value"
                [valuePrimitive]="true"
                class="field-full" />
            </div>
            <div class="form-row col-2">
              <label class="form-label">\u05DE\u05D7\u05D9\u05E8 \u05D7\u05D5\u05D3\u05E9\u05D9 (\u20AA)</label>
              <kendo-numerictextbox formControlName="PriceMonthly" [min]="0" [decimals]="2" [format]="'n2'" class="field-full" />
            </div>
            <div class="form-row col-2">
              <label class="form-label">\u05DE\u05D7\u05D9\u05E8 \u05E9\u05E0\u05EA\u05D9 (\u20AA)</label>
              <kendo-numerictextbox formControlName="PriceAnnual" [min]="0" [decimals]="2" [format]="'n2'" class="field-full" />
            </div>
            <div class="form-row col-2">
              <label class="form-label">\u05D3\u05DE\u05D9 \u05D4\u05E7\u05DE\u05D4 (\u20AA)</label>
              <kendo-numerictextbox formControlName="SetupFee" [min]="0" [decimals]="2" [format]="'n2'" class="field-full" />
            </div>
            <div class="form-row col-2">
              <label class="form-label">\u05D9\u05DE\u05D9 \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF</label>
              <kendo-numerictextbox formControlName="TrialDays" [min]="0" [decimals]="0" [format]="'n0'" class="field-full" />
            </div>

          </div>
        }

        <!-- \u2500\u2500 \u05D4\u05D2\u05D1\u05DC\u05D5\u05EA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        @if (activeGroup() === 'limits') {
          <p class="section-hint">\u05E8\u05D9\u05E7 / 0 = \u05DC\u05DC\u05D0 \u05D4\u05D2\u05D1\u05DC\u05D4</p>
          <div class="section-grid">

            <div class="form-row col-2">
              <label class="form-label">\u05DE\u05E7\u05E1\u05D9\u05DE\u05D5\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD</label>
              <kendo-numerictextbox formControlName="MaxUsers" [min]="0" [decimals]="0" [format]="'n0'" class="field-full" />
            </div>
            <div class="form-row col-2">
              <label class="form-label">\u05D0\u05D7\u05E1\u05D5\u05DF \u05DE\u05E7\u05E1\u05D9\u05DE\u05DC\u05D9 (GB)</label>
              <kendo-numerictextbox formControlName="MaxStorage_GB" [min]="0" [decimals]="0" [format]="'n0'" class="field-full" />
            </div>
            <div class="form-row col-2">
              <label class="form-label">\u05DE\u05E7\u05E1\u05D9\u05DE\u05D5\u05DD \u05E8\u05E9\u05D5\u05DE\u05D5\u05EA</label>
              <kendo-numerictextbox formControlName="MaxRecords" [min]="0" [decimals]="0" [format]="'n0'" class="field-full" />
            </div>
            <div class="form-row col-2">
              <label class="form-label">\u05E7\u05E8\u05D9\u05D0\u05D5\u05EA API \u05DC\u05D7\u05D5\u05D3\u05E9</label>
              <kendo-numerictextbox formControlName="ApiCallsPerMonth" [min]="0" [decimals]="0" [format]="'n0'" class="field-full" />
            </div>

          </div>
        }

        <!-- \u2500\u2500 \u05EA\u05E6\u05D5\u05D2\u05D4 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        @if (activeGroup() === 'display') {
          <div class="section-grid">

            <div class="form-row col-2">
              <label class="form-label">\u05E6\u05D1\u05E2 \u05E8\u05D0\u05E9\u05D9</label>
              <div class="color-input-row">
                <input type="color"
                       [value]="form.get('ColorHex')?.value"
                       (change)="form.get('ColorHex')?.setValue($any($event.target).value)"
                       class="color-picker" />
                <input kendoTextBox formControlName="ColorHex" class="field-full" placeholder="#0D47FF"
                       style="direction:ltr;text-align:left;font-family:'Share Tech Mono',monospace" />
              </div>
            </div>
            <div class="form-row col-2">
              <label class="form-label">\u05E1\u05D3\u05E8 \u05EA\u05E6\u05D5\u05D2\u05D4</label>
              <kendo-numerictextbox formControlName="SortOrder" [min]="0" [decimals]="0" [format]="'n0'" class="field-full" />
            </div>
            <div class="form-row col-full">
              <label class="form-label">\u05E9\u05DD \u05D0\u05D9\u05D9\u05E7\u05D5\u05DF</label>
              <input kendoTextBox formControlName="IconName" placeholder="\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: pi-users" class="field-full"
                     style="direction:ltr;text-align:left;font-family:'Share Tech Mono',monospace" />
            </div>
            <div class="form-row col-full">
              <label class="form-label">\u05DB\u05EA\u05D5\u05D1\u05EA \u05DC\u05D5\u05D2\u05D5 (URL)</label>
              <input kendoTextBox formControlName="LogoUrl" placeholder="https://..." class="field-full"
                     style="direction:ltr;text-align:left" />
            </div>

          </div>
        }

        <!-- \u2500\u2500 \u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        @if (activeGroup() === 'details') {
          <div class="section-grid">

            <div class="form-row col-2">
              <label class="form-label">\u05E1\u05D1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E2\u05DC\u05D4</label>
              <kendo-dropdownlist
                formControlName="DeploymentType"
                [data]="deploymentOptions"
                textField="text"
                valueField="value"
                [valuePrimitive]="true"
                class="field-full" />
            </div>
            <div class="form-row col-2">
              <label class="form-label">\u05D2\u05E8\u05E1\u05D4</label>
              <input kendoTextBox formControlName="ProductVersion" placeholder="1.0" class="field-full"
                     style="direction:ltr;text-align:left;font-family:'Share Tech Mono',monospace" />
            </div>

            <div class="form-row col-full">
              <label class="form-label">\u05E9\u05E4\u05D5\u05EA \u05E0\u05EA\u05DE\u05DB\u05D5\u05EA</label>
              <kendo-multiselect
                formControlName="SupportedLanguages"
                [data]="languageOptions"
                textField="text"
                valueField="value"
                [valuePrimitive]="true"
                placeholder="\u05D1\u05D7\u05E8 \u05E9\u05E4\u05D5\u05EA..."
                class="field-full" />
            </div>

            <div class="form-row col-2">
              <label class="form-label">\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05E9\u05E7\u05D4</label>
              <kendo-datepicker formControlName="LaunchDate" [format]="dateFormat" placeholder="DD/MM/YYYY" class="field-full" />
            </div>
            <div class="form-row col-2">
              <label class="form-label">\u05EA\u05D0\u05E8\u05D9\u05DA \u05E1\u05D9\u05D5\u05DD \u05EA\u05DE\u05D9\u05DB\u05D4</label>
              <kendo-datepicker formControlName="EndOfLifeDate" [format]="dateFormat" placeholder="DD/MM/YYYY" class="field-full" />
            </div>

            <div class="form-row col-full">
              <label class="form-label">\u05E7\u05D9\u05E9\u05D5\u05E8 \u05DC\u05EA\u05D9\u05E2\u05D5\u05D3</label>
              <input kendoTextBox formControlName="DocumentationUrl" placeholder="https://docs.example.com" class="field-full"
                     style="direction:ltr;text-align:left" />
            </div>
            <div class="form-row col-full">
              <label class="form-label">\u05EA\u05D9\u05D0\u05D5\u05E8 \u05DE\u05DC\u05D0</label>
              <textarea formControlName="Description" rows="5" class="field-full textarea-field"
                        placeholder="\u05EA\u05D9\u05D0\u05D5\u05E8 \u05DE\u05E4\u05D5\u05E8\u05D8 \u05E9\u05DC \u05D4\u05DE\u05D5\u05E6\u05E8..."></textarea>
            </div>

          </div>
        }

      </form>
    </div>
  </div>

  <kendo-dialog-actions>
    <div class="dialog-footer">
      <button class="btn-save" [disabled]="saving()" (click)="save()">
        {{ saving() ? '\u05E9\u05D5\u05DE\u05E8...' : '\u2713 \u05E9\u05DE\u05D5\u05E8' }}
      </button>
      <button class="btn-cancel" (click)="close()">\u05D1\u05D9\u05D8\u05D5\u05DC</button>
    </div>
  </kendo-dialog-actions>

</kendo-dialog>
`, styles: ['/* src/app/features/catalog/products/product-dialog/product-dialog.component.scss */\n.prod-dialog-body {\n  display: flex;\n  direction: rtl;\n  height: 480px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n  border-radius: 12px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n  margin: 4px;\n}\n.prod-nav {\n  width: 140px;\n  min-width: 140px;\n  background: var(--sf-bg);\n  border-inline-end: 1px solid var(--sf-border);\n  display: flex;\n  flex-direction: column;\n  padding: 8px 0;\n  flex-shrink: 0;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 0.84rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  color: var(--sf-text-secondary);\n  text-align: right;\n  direction: rtl;\n  transition: background 0.15s, color 0.15s;\n  border-radius: 0;\n  width: 100%;\n}\n.nav-item:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.nav-item.active {\n  background: var(--sf-primary-light);\n  color: var(--sf-primary);\n  font-weight: 600;\n  border-inline-start: 3px solid var(--sf-primary);\n}\n.nav-item kendo-svg-icon {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.prod-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px 24px;\n  direction: rtl;\n}\n.form-error-banner {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 6px;\n  padding: 10px 14px;\n  color: var(--sf-danger);\n  font-size: 0.85rem;\n  margin-bottom: 16px;\n}\n.section-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px 20px;\n  direction: rtl;\n}\n.form-row {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-row.col-2 {\n  grid-column: span 1;\n}\n.form-row.col-full {\n  grid-column: span 2;\n}\n.form-label {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  text-align: right;\n}\n.req {\n  color: var(--sf-danger);\n}\n.field-full {\n  width: 100%;\n}\n.field-error {\n  font-size: 0.75rem;\n  color: var(--sf-danger);\n}\n.section-hint {\n  grid-column: span 2;\n  font-size: 0.78rem;\n  color: var(--sf-text-muted);\n  margin: 0;\n}\n.color-input-row {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.color-picker {\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 6px;\n  padding: 2px;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.textarea-field {\n  font-family: "Noto Sans Hebrew", sans-serif;\n  font-size: 0.875rem;\n  color: var(--sf-text);\n  border: 1px solid var(--sf-border);\n  border-radius: 4px;\n  padding: 8px;\n  resize: vertical;\n  background: var(--sf-bg-card);\n  direction: rtl;\n  text-align: right;\n}\n.textarea-field:focus {\n  outline: none;\n  border-color: var(--sf-primary);\n}\n.seg-ctrl {\n  display: inline-flex;\n  direction: rtl;\n  align-self: flex-start;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.seg-btn {\n  padding: 6px 14px;\n  font-size: 0.78rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  border: none;\n  background: var(--sf-bg);\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.seg-btn + .seg-btn {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.seg-btn:hover:not(.seg-on):not(.seg-off) {\n  background: var(--sf-bg-hover);\n}\n.seg-btn.seg-on {\n  background: #10b981;\n  color: #fff;\n  font-weight: 600;\n}\n.seg-btn.seg-off {\n  background: #ef4444;\n  color: #fff;\n  font-weight: 600;\n}\n:host ::ng-deep .k-input-inner {\n  direction: rtl;\n  text-align: right;\n}\n:host ::ng-deep .k-dropdown-wrap,\n:host ::ng-deep .k-dropdownlist {\n  direction: rtl;\n}\n:host ::ng-deep .k-list-item {\n  direction: rtl;\n  text-align: right;\n}\n:host ::ng-deep .k-numerictextbox .k-input-inner {\n  direction: ltr;\n  text-align: left;\n}\n.dialog-footer {\n  display: flex;\n  direction: rtl;\n  gap: 8px;\n  width: 100%;\n}\n::ng-deep .k-dialog-actions {\n  direction: rtl !important;\n}\n.btn-save {\n  background: #f97316;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 22px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.btn-save:hover {\n  background: #ea6c0c;\n}\n.btn-save:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.btn-cancel {\n  background: #fff;\n  color: var(--sf-text-secondary);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 9px 22px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.btn-cancel:hover {\n  background: var(--sf-bg-hover);\n}\n/*# sourceMappingURL=product-dialog.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: CatalogService }], { product: [{
    type: Input
  }], saved: [{
    type: Output
  }], closed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDialogComponent, { className: "ProductDialogComponent", filePath: "src/app/features/catalog/products/product-dialog/product-dialog.component.ts", lineNumber: 30 });
})();

// src/app/features/catalog/products/products.component.ts
var _c02 = (a0, a1) => ({ data: a0, total: a1 });
var _c1 = () => [10, 25, 50];
var _c2 = (a0) => ({ buttonCount: 5, info: true, type: "numeric", pageSizes: a0 });
var _c3 = () => ({ mode: "single", allowUnsort: false });
var _c4 = (a0) => [a0, "ILS", "symbol", "1.0-0", "he"];
function ProductsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "mat-spinner", 15);
    \u0275\u0275elementEnd();
  }
}
function ProductsComponent_Conditional_20_Template(rf, ctx) {
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
function ProductsComponent_Conditional_21_ng_template_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2, "\u05EA\u05D9\u05D0\u05D5\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r3.ShortDescription);
  }
}
function ProductsComponent_Conditional_21_ng_template_12_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2, "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D7\u05D9\u05E0\u05DD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", row_r3.TrialDays, " \u05D9\u05DE\u05D9\u05DD");
  }
}
function ProductsComponent_Conditional_21_ng_template_12_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2, "\u05D3\u05DE\u05D9 \u05D4\u05E7\u05DE\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 39);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u20AA", \u0275\u0275pipeBind2(5, 1, row_r3.SetupFee, "1.0-0"));
  }
}
function ProductsComponent_Conditional_21_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "div", 35);
    \u0275\u0275text(3, "\u05E4\u05E8\u05D8\u05D9 \u05DE\u05D5\u05E6\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 36);
    \u0275\u0275conditionalCreate(5, ProductsComponent_Conditional_21_ng_template_12_Conditional_5_Template, 5, 1, "div", 37);
    \u0275\u0275elementStart(6, "div", 37)(7, "span", 38);
    \u0275\u0275text(8, "\u05D2\u05E8\u05E1\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 39);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 37)(12, "span", 38);
    \u0275\u0275text(13, "\u05E4\u05E8\u05D9\u05E1\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 39);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, ProductsComponent_Conditional_21_ng_template_12_Conditional_16_Template, 5, 1, "div", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 34)(18, "div", 35);
    \u0275\u0275text(19, "\u05EA\u05DE\u05D7\u05D5\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 36)(21, "div", 37)(22, "span", 38);
    \u0275\u0275text(23, "\u05DE\u05D5\u05D3\u05DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 39);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 37)(27, "span", 38);
    \u0275\u0275text(28, "\u05D7\u05D5\u05D3\u05E9\u05D9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 39);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 37)(33, "span", 38);
    \u0275\u0275text(34, "\u05E9\u05E0\u05EA\u05D9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 39);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(38, ProductsComponent_Conditional_21_ng_template_12_Conditional_38_Template, 6, 4, "div", 37);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(row_r3.ShortDescription ? 5 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(row_r3.ProductVersion || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(row_r3.DeploymentType || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r3.TrialDays ? 16 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.getPricingLabel(row_r3.PricingModel));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20AA", \u0275\u0275pipeBind2(31, 8, row_r3.PriceMonthly, "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20AA", \u0275\u0275pipeBind2(37, 11, row_r3.PriceAnnual, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(row_r3.SetupFee ? 38 : -1);
  }
}
function ProductsComponent_Conditional_21_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "span", 41);
    \u0275\u0275elementStart(2, "span", 42);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", row_r4.ColorHex);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.ProductName);
  }
}
function ProductsComponent_Conditional_21_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.CategoryName || "\u2014");
  }
}
function ProductsComponent_Conditional_21_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getPricingLabel(row_r6.PricingModel), " ");
  }
}
function ProductsComponent_Conditional_21_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "currency");
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBindV(1, 1, \u0275\u0275pureFunction1(7, _c4, row_r7.PriceMonthly)), " ");
  }
}
function ProductsComponent_Conditional_21_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.statusClass(row_r8.ProductStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusLabel(row_r8.ProductStatus), " ");
  }
}
function ProductsComponent_Conditional_21_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "span", 46);
    \u0275\u0275elementStart(2, "span", 47);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("dot-active", row_r9.IsActive)("dot-inactive", !row_r9.IsActive);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.IsActive ? "\u05E4\u05E2\u05D9\u05DC" : "\u05DE\u05D5\u05E9\u05D4\u05D4");
  }
}
function ProductsComponent_Conditional_21_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "button", 49);
    \u0275\u0275listener("click", function ProductsComponent_Conditional_21_ng_template_26_Template_button_click_1_listener() {
      const ctx_r10 = \u0275\u0275restoreView(_r10);
      const row_r12 = ctx_r10.$implicit;
      const rowIndex_r13 = ctx_r10.rowIndex;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleDetail(row_r12.ProductID, rowIndex_r13));
    });
    \u0275\u0275element(2, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 51);
    \u0275\u0275listener("click", function ProductsComponent_Conditional_21_ng_template_26_Template_button_click_3_listener() {
      const row_r12 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleActive(row_r12));
    });
    \u0275\u0275element(4, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 52);
    \u0275\u0275listener("click", function ProductsComponent_Conditional_21_ng_template_26_Template_button_click_5_listener() {
      const row_r12 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(row_r12));
    });
    \u0275\u0275element(6, "i", 53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", ctx_r0.isExpanded(row_r12.ProductID));
    \u0275\u0275property("title", ctx_r0.isExpanded(row_r12.ProductID) ? "\u05E1\u05D2\u05D5\u05E8" : "\u05E4\u05E8\u05D8\u05D9\u05DD");
    \u0275\u0275advance();
    \u0275\u0275classProp("pi-chevron-down", !ctx_r0.isExpanded(row_r12.ProductID))("pi-chevron-up", ctx_r0.isExpanded(row_r12.ProductID));
    \u0275\u0275advance();
    \u0275\u0275classProp("act-lock", row_r12.IsActive)("act-unlock", !row_r12.IsActive);
    \u0275\u0275property("title", row_r12.IsActive ? "\u05D4\u05E9\u05D1\u05EA" : "\u05D4\u05E4\u05E2\u05DC");
    \u0275\u0275advance();
    \u0275\u0275classProp("pi-lock", row_r12.IsActive)("pi-lock-open", !row_r12.IsActive);
  }
}
function ProductsComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "kendo-grid", 16);
    \u0275\u0275listener("pageChange", function ProductsComponent_Conditional_21_Template_kendo_grid_pageChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageChange($event));
    })("sortChange", function ProductsComponent_Conditional_21_Template_kendo_grid_sortChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSortChange($event));
    });
    \u0275\u0275element(1, "kendo-grid-pdf", 17);
    \u0275\u0275elementStart(2, "kendo-grid-excel", 18);
    \u0275\u0275element(3, "kendo-excelexport-column", 19)(4, "kendo-excelexport-column", 20)(5, "kendo-excelexport-column", 21)(6, "kendo-excelexport-column", 22)(7, "kendo-excelexport-column", 23)(8, "kendo-excelexport-column", 24)(9, "kendo-excelexport-column", 25)(10, "kendo-excelexport-column", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "kendo-grid-messages", 27);
    \u0275\u0275template(12, ProductsComponent_Conditional_21_ng_template_12_Template, 39, 14, "ng-template", 28);
    \u0275\u0275elementStart(13, "kendo-grid-column", 29);
    \u0275\u0275template(14, ProductsComponent_Conditional_21_ng_template_14_Template, 4, 3, "ng-template", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "kendo-grid-column", 21);
    \u0275\u0275template(16, ProductsComponent_Conditional_21_ng_template_16_Template, 2, 1, "ng-template", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "kendo-grid-column", 22);
    \u0275\u0275template(18, ProductsComponent_Conditional_21_ng_template_18_Template, 1, 1, "ng-template", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "kendo-grid-column", 23);
    \u0275\u0275template(20, ProductsComponent_Conditional_21_ng_template_20_Template, 2, 9, "ng-template", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "kendo-grid-column", 31);
    \u0275\u0275template(22, ProductsComponent_Conditional_21_ng_template_22_Template, 2, 2, "ng-template", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "kendo-grid-column", 26);
    \u0275\u0275template(24, ProductsComponent_Conditional_21_ng_template_24_Template, 4, 5, "ng-template", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "kendo-grid-column", 32);
    \u0275\u0275template(26, ProductsComponent_Conditional_21_ng_template_26_Template, 7, 16, "ng-template", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", \u0275\u0275pureFunction2(30, _c02, ctx_r0.pagedData, ctx_r0.gridData.length))("skip", ctx_r0.skip)("pageSize", ctx_r0.pageSize)("pageable", \u0275\u0275pureFunction1(34, _c2, \u0275\u0275pureFunction0(33, _c1)))("sortable", \u0275\u0275pureFunction0(36, _c3))("sort", ctx_r0.sort)("reorderable", true)("resizable", true)("columnMenu", true);
    \u0275\u0275advance();
    \u0275\u0275property("allPages", true)("landscape", true);
    \u0275\u0275advance();
    \u0275\u0275property("fetchData", ctx_r0.allData);
    \u0275\u0275advance();
    \u0275\u0275property("width", 120);
    \u0275\u0275advance();
    \u0275\u0275property("width", 200);
    \u0275\u0275advance();
    \u0275\u0275property("width", 140);
    \u0275\u0275advance();
    \u0275\u0275property("width", 120);
    \u0275\u0275advance();
    \u0275\u0275property("width", 110);
    \u0275\u0275advance();
    \u0275\u0275property("width", 110);
    \u0275\u0275advance();
    \u0275\u0275property("width", 100);
    \u0275\u0275advance();
    \u0275\u0275property("width", 60);
    \u0275\u0275advance(3);
    \u0275\u0275property("minResizableWidth", 160);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 140);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 130);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 115);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 110);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 90);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 104)("sortable", false)("resizable", false)("columnMenu", false);
  }
}
function ProductsComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-product-dialog", 54);
    \u0275\u0275listener("saved", function ProductsComponent_Conditional_22_Template_app_product_dialog_saved_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSaved());
    })("closed", function ProductsComponent_Conditional_22_Template_app_product_dialog_closed_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClosed());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.dialogProduct());
  }
}
var ProductsComponent = class _ProductsComponent {
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
  products = signal(
    [],
    ...ngDevMode ? [{ debugName: "products" }] : (
      /* istanbul ignore next */
      []
    )
  );
  gridData = [];
  searchTerm = "";
  skip = 0;
  pageSize = 10;
  sort = [{ field: "SortOrder", dir: "asc" }];
  dialogOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "dialogOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  dialogProduct = signal(
    null,
    ...ngDevMode ? [{ debugName: "dialogProduct" }] : (
      /* istanbul ignore next */
      []
    )
  );
  expandedIds = /* @__PURE__ */ new Set();
  pricingLabels = PRICING_MODEL_LABELS;
  statusLabels = PRODUCT_STATUS_LABELS;
  constructor(svc) {
    this.svc = svc;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.svc.getProducts().subscribe({
      next: (r) => {
        this.products.set(r.data);
        this.applyFilter();
        this.loading.set(false);
      },
      error: () => {
        this.error.set("\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D8\u05E2\u05D9\u05E0\u05EA \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD");
        this.loading.set(false);
      }
    });
  }
  applyFilter() {
    const q = this.searchTerm.toLowerCase();
    const filtered = q ? this.products().filter((p) => p.ProductName.toLowerCase().includes(q) || p.ProductCode.toLowerCase().includes(q) || (p.ShortDescription ?? "").toLowerCase().includes(q)) : [...this.products()];
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
    this.dialogProduct.set(null);
    this.dialogOpen.set(false);
    setTimeout(() => this.dialogOpen.set(true));
  }
  openEdit(p) {
    this.dialogProduct.set(p);
    this.dialogOpen.set(false);
    setTimeout(() => this.dialogOpen.set(true));
  }
  onSaved() {
    this.load();
  }
  onClosed() {
    this.dialogOpen.set(false);
  }
  isExpanded(id) {
    return this.expandedIds.has(id);
  }
  toggleDetail(prodId, rowIndex) {
    const absIdx = this.skip + rowIndex;
    if (this.expandedIds.has(prodId)) {
      this.expandedIds.delete(prodId);
      this.grid.collapseRow(absIdx);
    } else {
      this.expandedIds.add(prodId);
      this.grid.expandRow(absIdx);
    }
  }
  toggleActive(p) {
    this.svc.saveProduct(__spreadProps(__spreadValues({}, p), { IsActive: !p.IsActive })).subscribe({ next: () => this.load() });
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
  statusClass(s) {
    return { ACTIVE: "badge-active", DRAFT: "badge-draft", DEPRECATED: "badge-deprecated" }[s] ?? "";
  }
  getPricingLabel(m) {
    return this.pricingLabels[m] ?? m;
  }
  getStatusLabel(s) {
    return this.statusLabels[s] ?? s;
  }
  static \u0275fac = function ProductsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductsComponent)(\u0275\u0275directiveInject(CatalogService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductsComponent, selectors: [["app-products"]], viewQuery: function ProductsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(GridComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.grid = _t.first);
    }
  }, decls: 23, vars: 8, consts: [[1, "prod-page"], [1, "page-header"], [1, "header-titles"], ["kendoButton", "", "themeColor", "primary", 3, "click", "svgIcon"], [1, "toolbar"], [1, "search-wrap"], [1, "search-icon"], ["type", "text", "placeholder", "\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DE\u05D5\u05E6\u05E8...", 1, "search-input", 3, "input"], [1, "export-btns"], ["kendoButton", "", "fillMode", "outline", "title", "\u05D9\u05D9\u05E6\u05D5\u05D0 \u05DC\u05D0\u05E7\u05E1\u05DC", 1, "btn-export", "btn-excel", 3, "click", "svgIcon"], ["kendoButton", "", "fillMode", "outline", "title", "\u05D9\u05D9\u05E6\u05D5\u05D0 \u05DC-PDF", 1, "btn-export", "btn-pdf", 3, "click", "svgIcon"], [1, "state-box"], [1, "state-box", "error"], ["scrollable", "none", 1, "prod-grid", 3, "data", "skip", "pageSize", "pageable", "sortable", "sort", "reorderable", "resizable", "columnMenu"], [3, "product"], ["diameter", "36"], ["scrollable", "none", 1, "prod-grid", 3, "pageChange", "sortChange", "data", "skip", "pageSize", "pageable", "sortable", "sort", "reorderable", "resizable", "columnMenu"], ["fileName", "\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD.pdf", "paperSize", "A4", "margin", "1cm", 3, "allPages", "landscape"], ["fileName", "\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD.xlsx", 3, "fetchData"], ["field", "ProductCode", "title", "\u05E7\u05D5\u05D3", 3, "width"], ["field", "ProductName", "title", "\u05E9\u05DD \u05DE\u05D5\u05E6\u05E8", 3, "width"], ["field", "CategoryName", "title", "\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4", 3, "width"], ["field", "PricingModel", "title", "\u05DE\u05D5\u05D3\u05DC \u05EA\u05DE\u05D7\u05D5\u05E8", 3, "width"], ["field", "PriceMonthly", "title", "\u05DE\u05D7\u05D9\u05E8 \u05D7\u05D5\u05D3\u05E9\u05D9", 3, "width"], ["field", "PriceAnnual", "title", "\u05DE\u05D7\u05D9\u05E8 \u05E9\u05E0\u05EA\u05D9", 3, "width"], ["field", "ProductStatus", "title", "\u05E1\u05D8\u05D8\u05D5\u05E1", 3, "width"], ["field", "IsActive", "title", "\u05E4\u05E2\u05D9\u05DC", 3, "width"], ["pagerItemsPerPage", "\u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3", "pagerOf", "\u05DE\u05EA\u05D5\u05DA", "pagerItems", "\u05E8\u05E9\u05D5\u05DE\u05D5\u05EA", "pagerFirstPage", "\u05E2\u05DE\u05D5\u05D3 \u05E8\u05D0\u05E9\u05D5\u05DF", "pagerLastPage", "\u05E2\u05DE\u05D5\u05D3 \u05D0\u05D7\u05E8\u05D5\u05DF", "pagerPreviousPage", "\u05D4\u05E7\u05D5\u05D3\u05DD", "pagerNextPage", "\u05D4\u05D1\u05D0", "pagerPage", "\u05E2\u05DE\u05D5\u05D3", "pagerPageNumberInputTitle", "\u05DE\u05E1\u05E4\u05E8 \u05E2\u05DE\u05D5\u05D3", "noRecords", "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD", "loading", "\u05D8\u05D5\u05E2\u05DF...", "columnMenuFilter", "\u05E1\u05E0\u05DF", "columnMenuSort", "\u05DE\u05D9\u05D5\u05DF", "columnMenuColumns", "\u05E2\u05DE\u05D5\u05D3\u05D5\u05EA", "columnMenuSortAscending", "\u05E2\u05D5\u05DC\u05D4", "columnMenuSortDescending", "\u05D9\u05D5\u05E8\u05D3", "selectionCheckboxLabel", "\u05D1\u05D7\u05E8 \u05E9\u05D5\u05E8\u05D4", "selectAllCheckboxLabel", "\u05D1\u05D7\u05E8 \u05D4\u05DB\u05DC"], ["kendoGridDetailTemplate", ""], ["field", "ProductName", "title", "\u05E9\u05DD \u05DE\u05D5\u05E6\u05E8", 3, "minResizableWidth"], ["kendoGridCellTemplate", ""], ["field", "ProductStatus", "title", "\u05E1\u05D8\u05D8\u05D5\u05E1 \u05DE\u05D5\u05E6\u05E8", 3, "width"], ["title", "", 3, "width", "sortable", "resizable", "columnMenu"], [1, "prod-detail-card"], [1, "detail-group"], [1, "detail-group-title"], [1, "detail-fields"], [1, "detail-field"], [1, "df-label"], [1, "df-val"], [1, "prod-cell"], [1, "color-dot"], [1, "prod-name"], [1, "badge-cat"], [1, "badge", 3, "ngClass"], [1, "status-dot-wrap"], [1, "status-dot"], [1, "status-label"], [1, "row-actions"], [1, "act-btn", "act-expand", 3, "click", "title"], [1, "pi"], [1, "act-btn", 3, "click", "title"], ["title", "\u05E2\u05E8\u05D5\u05DA", 1, "act-btn", "act-edit", 3, "click"], [1, "pi", "pi-pencil"], [3, "saved", "closed", "product"]], template: function ProductsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 3);
      \u0275\u0275listener("click", function ProductsComponent_Template_button_click_7_listener() {
        return ctx.openAdd();
      });
      \u0275\u0275text(8, " \u05DE\u05D5\u05E6\u05E8 \u05D7\u05D3\u05E9 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 4)(10, "div", 5)(11, "mat-icon", 6);
      \u0275\u0275text(12, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 7);
      \u0275\u0275listener("input", function ProductsComponent_Template_input_input_13_listener($event) {
        return ctx.onSearch($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 8)(15, "button", 9);
      \u0275\u0275listener("click", function ProductsComponent_Template_button_click_15_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275text(16, "Excel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 10);
      \u0275\u0275listener("click", function ProductsComponent_Template_button_click_17_listener() {
        return ctx.exportPDF();
      });
      \u0275\u0275text(18, "PDF");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(19, ProductsComponent_Conditional_19_Template, 2, 0, "div", 11);
      \u0275\u0275conditionalCreate(20, ProductsComponent_Conditional_20_Template, 2, 1, "div", 12);
      \u0275\u0275conditionalCreate(21, ProductsComponent_Conditional_21_Template, 27, 37, "kendo-grid", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(22, ProductsComponent_Conditional_22_Template, 1, 1, "app-product-dialog", 14);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.products().length, " \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA");
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
    NgClass,
    FormsModule,
    GridModule,
    GridComponent,
    CustomMessagesComponent,
    ColumnComponent2,
    DetailTemplateDirective,
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
    ProductDialogComponent,
    DecimalPipe,
    CurrencyPipe
  ], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.prod-page[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  direction: rtl;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.header-titles[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.header-titles[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0;\n}\n.header-titles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: var(--sf-text-secondary);\n  margin: 3px 0 0;\n}\n.toolbar[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.export-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n}\n[_nghost-%COMP%]     .export-btns .k-button {\n  border: none !important;\n  border-radius: 0 !important;\n  background: var(--sf-bg-card) !important;\n  color: var(--sf-text-secondary) !important;\n  box-shadow: none !important;\n  padding: 6px 14px !important;\n  font-size: 0.82rem !important;\n  font-weight: 500 !important;\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n}\n[_nghost-%COMP%]     .export-btns .k-button:hover {\n  background: var(--sf-bg-hover) !important;\n}\n[_nghost-%COMP%]     .export-btns .k-button + .k-button {\n  border-inline-start: 1px solid var(--sf-border) !important;\n}\n[_nghost-%COMP%]     .export-btns .btn-excel:hover {\n  color: #16a34a !important;\n}\n[_nghost-%COMP%]     .export-btns .btn-pdf:hover {\n  color: #dc2626 !important;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 340px;\n  direction: rtl;\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 6px 12px;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.search-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--sf-border-focus);\n  box-shadow: 0 0 0 3px rgba(13, 71, 255, 0.12);\n}\n.search-icon[_ngcontent-%COMP%] {\n  color: var(--sf-text-muted);\n  font-size: 18px;\n  width: 18px !important;\n  height: 18px !important;\n  flex-shrink: 0;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  color: var(--sf-text);\n  font-size: 0.875rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--sf-text-muted);\n}\n.state-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: var(--sf-text-secondary);\n}\n.state-box.error[_ngcontent-%COMP%] {\n  color: var(--sf-danger);\n}\n[_nghost-%COMP%]     .prod-grid {\n  border-radius: 10px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04);\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n[_nghost-%COMP%]     .prod-grid .k-grid-header th.k-header {\n  background: var(--sf-grid-hd-bg) !important;\n  color: var(--sf-grid-hd-color) !important;\n  font-weight: 700 !important;\n  font-size: 0.78rem !important;\n  text-align: right !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n  border-color: var(--sf-grid-hd-border) !important;\n  direction: rtl;\n}\n[_nghost-%COMP%]     .prod-grid .k-grid-header {\n  background: var(--sf-grid-hd-bg) !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n}\n[_nghost-%COMP%]     .prod-grid .k-column-menu-button {\n  color: var(--sf-grid-hd-color);\n  opacity: 0.7;\n}\n[_nghost-%COMP%]     .prod-grid .k-column-menu-button:hover {\n  opacity: 1;\n}\n[_nghost-%COMP%]     .prod-grid td.k-table-td {\n  text-align: right !important;\n  vertical-align: middle !important;\n  border-color: var(--sf-border) !important;\n  font-size: 0.875rem;\n  background: var(--sf-bg-card);\n  direction: rtl;\n  padding: 8px 12px !important;\n}\n[_nghost-%COMP%]     .prod-grid tr.k-table-row:hover td {\n  background: var(--sf-bg-hover) !important;\n}\n[_nghost-%COMP%]     .prod-grid .k-pager {\n  border-top: 1px solid var(--sf-border);\n  background: #f8fafc;\n  direction: rtl;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  font-size: 0.82rem;\n}\n[_nghost-%COMP%]     .prod-grid .k-pager-wrap, \n[_nghost-%COMP%]     .prod-grid .k-pager {\n  direction: rtl !important;\n}\n[_nghost-%COMP%]     .prod-grid .k-detail-row > td {\n  background: var(--sf-bg) !important;\n  padding: 4px 0 12px !important;\n  border-bottom: 1px solid var(--sf-border) !important;\n}\n[_nghost-%COMP%]     .prod-grid .k-sort-icon {\n  margin-right: 4px;\n}\n.prod-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.color-dot[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border-radius: 4px;\n  flex-shrink: 0;\n  border: 1.5px solid rgba(0, 0, 0, 0.1);\n}\n.prod-cell-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.prod-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--sf-text);\n  font-size: 0.88rem;\n}\n.prod-desc[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--sf-text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 260px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.badge-cat[_ngcontent-%COMP%] {\n  background: var(--sf-primary-light);\n  color: var(--sf-primary);\n}\n.badge-active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-draft[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-deprecated[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.status-dot-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.dot-active[_ngcontent-%COMP%] {\n  background: #22c55e;\n  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.15);\n}\n.dot-inactive[_ngcontent-%COMP%] {\n  background: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);\n}\n.status-label[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: #374151;\n}\n.row-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.act-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.act-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.act-expand[_ngcontent-%COMP%] {\n  color: var(--sf-text-secondary);\n}\n.act-expand[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-primary);\n}\n.act-expand.expanded[_ngcontent-%COMP%] {\n  color: var(--sf-primary);\n  background: var(--sf-primary-light);\n}\n.act-lock[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.act-lock[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.act-unlock[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.act-unlock[_ngcontent-%COMP%]:hover {\n  background: #f0fdf4;\n}\n.act-edit[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.act-edit[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n}\n.prod-detail-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 16px 8px;\n  direction: rtl;\n}\n.detail-group[_ngcontent-%COMP%] {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 12px;\n  padding: 14px 18px;\n  min-width: 220px;\n  flex: 1;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.detail-group-title[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--sf-text-muted);\n  margin-bottom: 10px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--sf-border);\n}\n.detail-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.detail-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n}\n.df-label[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: var(--sf-text-muted);\n  min-width: 90px;\n  flex-shrink: 0;\n}\n.df-val[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  color: var(--sf-text);\n  font-weight: 500;\n}\n/*# sourceMappingURL=products.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductsComponent, [{
    type: Component,
    args: [{ selector: "app-products", standalone: true, imports: [
      CommonModule,
      FormsModule,
      GridModule,
      ExcelModule,
      PDFModule,
      ButtonsModule,
      MatIconModule,
      MatProgressSpinnerModule,
      ProductDialogComponent
    ], template: `<div class="prod-page">

  <div class="page-header">
    <div class="header-titles">
      <h1>\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD</h1>
      <p>{{ products().length }} \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA</p>
    </div>
    <button kendoButton themeColor="primary" [svgIcon]="addIcon" (click)="openAdd()">
      \u05DE\u05D5\u05E6\u05E8 \u05D7\u05D3\u05E9
    </button>
  </div>

  <div class="toolbar">
    <div class="search-wrap">
      <mat-icon class="search-icon">search</mat-icon>
      <input class="search-input" type="text" placeholder="\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DE\u05D5\u05E6\u05E8..."
             (input)="onSearch($any($event.target).value)" />
    </div>
    <div class="export-btns">
      <button kendoButton fillMode="outline" [svgIcon]="excelIcon" (click)="exportExcel()" class="btn-export btn-excel" title="\u05D9\u05D9\u05E6\u05D5\u05D0 \u05DC\u05D0\u05E7\u05E1\u05DC">Excel</button>
      <button kendoButton fillMode="outline" [svgIcon]="pdfIcon"   (click)="exportPDF()"   class="btn-export btn-pdf"   title="\u05D9\u05D9\u05E6\u05D5\u05D0 \u05DC-PDF">PDF</button>
    </div>
  </div>

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
      [pageable]="{ buttonCount: 5, info: true, type: 'numeric', pageSizes: [10, 25, 50] }"
      [sortable]="{ mode: 'single', allowUnsort: false }"
      [sort]="sort"
      [reorderable]="true" [resizable]="true"
      [columnMenu]="true"
      scrollable="none"
      (pageChange)="onPageChange($event)"
      (sortChange)="onSortChange($event)"
      class="prod-grid">

      <kendo-grid-pdf fileName="\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD.pdf" [allPages]="true" paperSize="A4" [landscape]="true" margin="1cm" />
      <kendo-grid-excel fileName="\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD.xlsx" [fetchData]="allData">
        <kendo-excelexport-column field="ProductCode"   title="\u05E7\u05D5\u05D3"        [width]="120" />
        <kendo-excelexport-column field="ProductName"   title="\u05E9\u05DD \u05DE\u05D5\u05E6\u05E8"    [width]="200" />
        <kendo-excelexport-column field="CategoryName"  title="\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4"    [width]="140" />
        <kendo-excelexport-column field="PricingModel"  title="\u05DE\u05D5\u05D3\u05DC \u05EA\u05DE\u05D7\u05D5\u05E8" [width]="120" />
        <kendo-excelexport-column field="PriceMonthly"  title="\u05DE\u05D7\u05D9\u05E8 \u05D7\u05D5\u05D3\u05E9\u05D9" [width]="110" />
        <kendo-excelexport-column field="PriceAnnual"   title="\u05DE\u05D7\u05D9\u05E8 \u05E9\u05E0\u05EA\u05D9"  [width]="110" />
        <kendo-excelexport-column field="ProductStatus" title="\u05E1\u05D8\u05D8\u05D5\u05E1"      [width]="100" />
        <kendo-excelexport-column field="IsActive"      title="\u05E4\u05E2\u05D9\u05DC"       [width]="60"  />
      </kendo-grid-excel>

      <kendo-grid-messages
        pagerItemsPerPage="\u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3" pagerOf="\u05DE\u05EA\u05D5\u05DA" pagerItems="\u05E8\u05E9\u05D5\u05DE\u05D5\u05EA"
        pagerFirstPage="\u05E2\u05DE\u05D5\u05D3 \u05E8\u05D0\u05E9\u05D5\u05DF" pagerLastPage="\u05E2\u05DE\u05D5\u05D3 \u05D0\u05D7\u05E8\u05D5\u05DF"
        pagerPreviousPage="\u05D4\u05E7\u05D5\u05D3\u05DD" pagerNextPage="\u05D4\u05D1\u05D0"
        pagerPage="\u05E2\u05DE\u05D5\u05D3" pagerPageNumberInputTitle="\u05DE\u05E1\u05E4\u05E8 \u05E2\u05DE\u05D5\u05D3"
        noRecords="\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD" loading="\u05D8\u05D5\u05E2\u05DF..."
        columnMenuFilter="\u05E1\u05E0\u05DF" columnMenuSort="\u05DE\u05D9\u05D5\u05DF" columnMenuColumns="\u05E2\u05DE\u05D5\u05D3\u05D5\u05EA"
        columnMenuSortAscending="\u05E2\u05D5\u05DC\u05D4" columnMenuSortDescending="\u05D9\u05D5\u05E8\u05D3"
        selectionCheckboxLabel="\u05D1\u05D7\u05E8 \u05E9\u05D5\u05E8\u05D4" selectAllCheckboxLabel="\u05D1\u05D7\u05E8 \u05D4\u05DB\u05DC" />

      <ng-template kendoGridDetailTemplate let-row>
        <div class="prod-detail-card">
          <div class="detail-group">
            <div class="detail-group-title">\u05E4\u05E8\u05D8\u05D9 \u05DE\u05D5\u05E6\u05E8</div>
            <div class="detail-fields">
              @if (row.ShortDescription) {
                <div class="detail-field"><span class="df-label">\u05EA\u05D9\u05D0\u05D5\u05E8</span><span class="df-val">{{ row.ShortDescription }}</span></div>
              }
              <div class="detail-field"><span class="df-label">\u05D2\u05E8\u05E1\u05D4</span><span class="df-val">{{ row.ProductVersion || '\u2014' }}</span></div>
              <div class="detail-field"><span class="df-label">\u05E4\u05E8\u05D9\u05E1\u05D4</span><span class="df-val">{{ row.DeploymentType || '\u2014' }}</span></div>
              @if (row.TrialDays) {
                <div class="detail-field"><span class="df-label">\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D7\u05D9\u05E0\u05DD</span><span class="df-val">{{ row.TrialDays }} \u05D9\u05DE\u05D9\u05DD</span></div>
              }
            </div>
          </div>
          <div class="detail-group">
            <div class="detail-group-title">\u05EA\u05DE\u05D7\u05D5\u05E8</div>
            <div class="detail-fields">
              <div class="detail-field"><span class="df-label">\u05DE\u05D5\u05D3\u05DC</span><span class="df-val">{{ getPricingLabel(row.PricingModel) }}</span></div>
              <div class="detail-field"><span class="df-label">\u05D7\u05D5\u05D3\u05E9\u05D9</span><span class="df-val">\u20AA{{ row.PriceMonthly | number:'1.0-0' }}</span></div>
              <div class="detail-field"><span class="df-label">\u05E9\u05E0\u05EA\u05D9</span><span class="df-val">\u20AA{{ row.PriceAnnual | number:'1.0-0' }}</span></div>
              @if (row.SetupFee) {
                <div class="detail-field"><span class="df-label">\u05D3\u05DE\u05D9 \u05D4\u05E7\u05DE\u05D4</span><span class="df-val">\u20AA{{ row.SetupFee | number:'1.0-0' }}</span></div>
              }
            </div>
          </div>
        </div>
      </ng-template>

      <!-- \u05E9\u05DD \u05DE\u05D5\u05E6\u05E8 \u2014 \u05D2\u05DE\u05D9\u05E9, \u05E9\u05D5\u05E8\u05D4 \u05D0\u05D7\u05EA \u05D1\u05DC\u05D1\u05D3 -->
      <kendo-grid-column field="ProductName" title="\u05E9\u05DD \u05DE\u05D5\u05E6\u05E8" [minResizableWidth]="160">
        <ng-template kendoGridCellTemplate let-row>
          <div class="prod-cell">
            <span class="color-dot" [style.background]="row.ColorHex"></span>
            <span class="prod-name">{{ row.ProductName }}</span>
          </div>
        </ng-template>
      </kendo-grid-column>

      <kendo-grid-column field="CategoryName" title="\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4" [width]="140">
        <ng-template kendoGridCellTemplate let-row>
          <span class="badge-cat">{{ row.CategoryName || '\u2014' }}</span>
        </ng-template>
      </kendo-grid-column>

      <kendo-grid-column field="PricingModel" title="\u05DE\u05D5\u05D3\u05DC \u05EA\u05DE\u05D7\u05D5\u05E8" [width]="130">
        <ng-template kendoGridCellTemplate let-row>
          {{ getPricingLabel(row.PricingModel) }}
        </ng-template>
      </kendo-grid-column>

      <kendo-grid-column field="PriceMonthly" title="\u05DE\u05D7\u05D9\u05E8 \u05D7\u05D5\u05D3\u05E9\u05D9" [width]="115">
        <ng-template kendoGridCellTemplate let-row>
          {{ row.PriceMonthly | currency:'ILS':'symbol':'1.0-0':'he' }}
        </ng-template>
      </kendo-grid-column>

      <kendo-grid-column field="ProductStatus" title="\u05E1\u05D8\u05D8\u05D5\u05E1 \u05DE\u05D5\u05E6\u05E8" [width]="110">
        <ng-template kendoGridCellTemplate let-row>
          <span class="badge" [ngClass]="statusClass(row.ProductStatus)">
            {{ getStatusLabel(row.ProductStatus) }}
          </span>
        </ng-template>
      </kendo-grid-column>

      <kendo-grid-column field="IsActive" title="\u05E4\u05E2\u05D9\u05DC" [width]="90">
        <ng-template kendoGridCellTemplate let-row>
          <div class="status-dot-wrap">
            <span class="status-dot" [class.dot-active]="row.IsActive" [class.dot-inactive]="!row.IsActive"></span>
            <span class="status-label">{{ row.IsActive ? '\u05E4\u05E2\u05D9\u05DC' : '\u05DE\u05D5\u05E9\u05D4\u05D4' }}</span>
          </div>
        </ng-template>
      </kendo-grid-column>

      <kendo-grid-column title="" [width]="104" [sortable]="false" [resizable]="false" [columnMenu]="false">
        <ng-template kendoGridCellTemplate let-row let-rowIndex="rowIndex">
          <div class="row-actions">
            <button class="act-btn act-expand"
                    [class.expanded]="isExpanded(row.ProductID)"
                    [title]="isExpanded(row.ProductID) ? '\u05E1\u05D2\u05D5\u05E8' : '\u05E4\u05E8\u05D8\u05D9\u05DD'"
                    (click)="toggleDetail(row.ProductID, rowIndex)">
              <i class="pi" [class.pi-chevron-down]="!isExpanded(row.ProductID)"
                            [class.pi-chevron-up]="isExpanded(row.ProductID)"></i>
            </button>
            <button class="act-btn"
                    [class.act-lock]="row.IsActive"
                    [class.act-unlock]="!row.IsActive"
                    [title]="row.IsActive ? '\u05D4\u05E9\u05D1\u05EA' : '\u05D4\u05E4\u05E2\u05DC'"
                    (click)="toggleActive(row)">
              <i class="pi" [class.pi-lock]="row.IsActive" [class.pi-lock-open]="!row.IsActive"></i>
            </button>
            <button class="act-btn act-edit" title="\u05E2\u05E8\u05D5\u05DA" (click)="openEdit(row)">
              <i class="pi pi-pencil"></i>
            </button>
          </div>
        </ng-template>
      </kendo-grid-column>

    </kendo-grid>

  }

</div>

@if (dialogOpen()) {
  <app-product-dialog
    [product]="dialogProduct()"
    (saved)="onSaved()"
    (closed)="onClosed()" />
}
`, styles: ['/* src/app/features/catalog/products/products.component.scss */\n:host {\n  display: block;\n  width: 100%;\n}\n.prod-page {\n  width: 100%;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  direction: rtl;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.header-titles {\n  flex: 1;\n}\n.header-titles h1 {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0;\n}\n.header-titles p {\n  font-size: 0.83rem;\n  color: var(--sf-text-secondary);\n  margin: 3px 0 0;\n}\n.toolbar {\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.export-btns {\n  display: flex;\n  gap: 0;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n}\n:host ::ng-deep .export-btns .k-button {\n  border: none !important;\n  border-radius: 0 !important;\n  background: var(--sf-bg-card) !important;\n  color: var(--sf-text-secondary) !important;\n  box-shadow: none !important;\n  padding: 6px 14px !important;\n  font-size: 0.82rem !important;\n  font-weight: 500 !important;\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n}\n:host ::ng-deep .export-btns .k-button:hover {\n  background: var(--sf-bg-hover) !important;\n}\n:host ::ng-deep .export-btns .k-button + .k-button {\n  border-inline-start: 1px solid var(--sf-border) !important;\n}\n:host ::ng-deep .export-btns .btn-excel:hover {\n  color: #16a34a !important;\n}\n:host ::ng-deep .export-btns .btn-pdf:hover {\n  color: #dc2626 !important;\n}\n.search-wrap {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 340px;\n  direction: rtl;\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 6px 12px;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.search-wrap:focus-within {\n  border-color: var(--sf-border-focus);\n  box-shadow: 0 0 0 3px rgba(13, 71, 255, 0.12);\n}\n.search-icon {\n  color: var(--sf-text-muted);\n  font-size: 18px;\n  width: 18px !important;\n  height: 18px !important;\n  flex-shrink: 0;\n}\n.search-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  color: var(--sf-text);\n  font-size: 0.875rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n.search-input::placeholder {\n  color: var(--sf-text-muted);\n}\n.state-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: var(--sf-text-secondary);\n}\n.state-box.error {\n  color: var(--sf-danger);\n}\n:host ::ng-deep .prod-grid {\n  border-radius: 10px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04);\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n:host ::ng-deep .prod-grid .k-grid-header th.k-header {\n  background: var(--sf-grid-hd-bg) !important;\n  color: var(--sf-grid-hd-color) !important;\n  font-weight: 700 !important;\n  font-size: 0.78rem !important;\n  text-align: right !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n  border-color: var(--sf-grid-hd-border) !important;\n  direction: rtl;\n}\n:host ::ng-deep .prod-grid .k-grid-header {\n  background: var(--sf-grid-hd-bg) !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n}\n:host ::ng-deep .prod-grid .k-column-menu-button {\n  color: var(--sf-grid-hd-color);\n  opacity: 0.7;\n}\n:host ::ng-deep .prod-grid .k-column-menu-button:hover {\n  opacity: 1;\n}\n:host ::ng-deep .prod-grid td.k-table-td {\n  text-align: right !important;\n  vertical-align: middle !important;\n  border-color: var(--sf-border) !important;\n  font-size: 0.875rem;\n  background: var(--sf-bg-card);\n  direction: rtl;\n  padding: 8px 12px !important;\n}\n:host ::ng-deep .prod-grid tr.k-table-row:hover td {\n  background: var(--sf-bg-hover) !important;\n}\n:host ::ng-deep .prod-grid .k-pager {\n  border-top: 1px solid var(--sf-border);\n  background: #f8fafc;\n  direction: rtl;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  font-size: 0.82rem;\n}\n:host ::ng-deep .prod-grid .k-pager-wrap,\n:host ::ng-deep .prod-grid .k-pager {\n  direction: rtl !important;\n}\n:host ::ng-deep .prod-grid .k-detail-row > td {\n  background: var(--sf-bg) !important;\n  padding: 4px 0 12px !important;\n  border-bottom: 1px solid var(--sf-border) !important;\n}\n:host ::ng-deep .prod-grid .k-sort-icon {\n  margin-right: 4px;\n}\n.prod-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.color-dot {\n  width: 14px;\n  height: 14px;\n  border-radius: 4px;\n  flex-shrink: 0;\n  border: 1.5px solid rgba(0, 0, 0, 0.1);\n}\n.prod-cell-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.prod-name {\n  font-weight: 600;\n  color: var(--sf-text);\n  font-size: 0.88rem;\n}\n.prod-desc {\n  font-size: 0.75rem;\n  color: var(--sf-text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 260px;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.badge-cat {\n  background: var(--sf-primary-light);\n  color: var(--sf-primary);\n}\n.badge-active {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-draft {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-deprecated {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.status-dot-wrap {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.status-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.dot-active {\n  background: #22c55e;\n  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.15);\n}\n.dot-inactive {\n  background: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);\n}\n.status-label {\n  font-size: 0.83rem;\n  color: #374151;\n}\n.row-actions {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.act-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.act-btn i {\n  font-size: 0.9rem;\n}\n.act-expand {\n  color: var(--sf-text-secondary);\n}\n.act-expand:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-primary);\n}\n.act-expand.expanded {\n  color: var(--sf-primary);\n  background: var(--sf-primary-light);\n}\n.act-lock {\n  color: #ef4444;\n}\n.act-lock:hover {\n  background: #fef2f2;\n}\n.act-unlock {\n  color: #16a34a;\n}\n.act-unlock:hover {\n  background: #f0fdf4;\n}\n.act-edit {\n  color: #3b82f6;\n}\n.act-edit:hover {\n  background: #eff6ff;\n}\n.prod-detail-card {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 16px 8px;\n  direction: rtl;\n}\n.detail-group {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 12px;\n  padding: 14px 18px;\n  min-width: 220px;\n  flex: 1;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.detail-group-title {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--sf-text-muted);\n  margin-bottom: 10px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--sf-border);\n}\n.detail-fields {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.detail-field {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n}\n.df-label {\n  font-size: 0.76rem;\n  color: var(--sf-text-muted);\n  min-width: 90px;\n  flex-shrink: 0;\n}\n.df-val {\n  font-size: 0.84rem;\n  color: var(--sf-text);\n  font-weight: 500;\n}\n/*# sourceMappingURL=products.component.css.map */\n'] }]
  }], () => [{ type: CatalogService }], { grid: [{
    type: ViewChild,
    args: [GridComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductsComponent, { className: "ProductsComponent", filePath: "src/app/features/catalog/products/products.component.ts", lineNumber: 26 });
})();
export {
  ProductsComponent
};
//# sourceMappingURL=chunk-EN6ZBXG3.js.map
