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
  DetailTemplateDirective,
  DialogActionsComponent,
  DialogComponent,
  DialogModule,
  ExcelComponent,
  ExcelModule,
  GridComponent,
  GridModule,
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
  eyeIcon,
  fileExcelIcon,
  filePdfIcon,
  gearIcon,
  listUnorderedSquareIcon,
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
  DecimalPipe,
  EventEmitter,
  Input,
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

// src/app/features/catalog/packages/package-dialog/package-dialog.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.ProductID;
function PackageDialogComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function PackageDialogComponent_For_4_Template_button_click_0_listener() {
      const g_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeGroup.set(g_r2.id));
    });
    \u0275\u0275element(1, "kendo-svg-icon", 13);
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
function PackageDialogComponent_Conditional_6_Template(rf, ctx) {
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
function PackageDialogComponent_Conditional_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
  }
}
function PackageDialogComponent_Conditional_8_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
  }
}
function PackageDialogComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 14)(2, "label", 15);
    \u0275\u0275text(3, "\u05E7\u05D5\u05D3 \u05D7\u05D1\u05D9\u05DC\u05D4 ");
    \u0275\u0275elementStart(4, "span", 16);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "input", 17);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(7, PackageDialogComponent_Conditional_8_Conditional_7_Template, 2, 0, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 14)(9, "label", 15);
    \u0275\u0275text(10, "\u05E1\u05D3\u05E8 \u05EA\u05E6\u05D5\u05D2\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "kendo-numerictextbox", 19);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 20)(13, "label", 15);
    \u0275\u0275text(14, "\u05E9\u05DD \u05D7\u05D1\u05D9\u05DC\u05D4 ");
    \u0275\u0275elementStart(15, "span", 16);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "input", 21);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(18, PackageDialogComponent_Conditional_8_Conditional_18_Template, 2, 0, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 20)(20, "label", 15);
    \u0275\u0275text(21, "\u05EA\u05D9\u05D0\u05D5\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "textarea", 22);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 14)(24, "label", 15);
    \u0275\u0275text(25, "\u05DE\u05D7\u05D9\u05E8 \u05D7\u05D5\u05D3\u05E9\u05D9 (\u20AA)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "kendo-numerictextbox", 23);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 14)(28, "label", 15);
    \u0275\u0275text(29, "\u05DE\u05D7\u05D9\u05E8 \u05E9\u05E0\u05EA\u05D9 (\u20AA)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "kendo-numerictextbox", 24);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 14)(32, "label", 15);
    \u0275\u0275text(33, "\u05D3\u05DE\u05D9 \u05D4\u05E7\u05DE\u05D4 (\u20AA)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "kendo-numerictextbox", 25);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 14)(36, "label", 15);
    \u0275\u0275text(37, "\u05D9\u05DE\u05D9 \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "kendo-numerictextbox", 26);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 14)(40, "label", 15);
    \u0275\u0275text(41, "\u05DE\u05E7\u05E1' \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD (0 = \u05DC\u05DC\u05D0 \u05D4\u05D2\u05D1\u05DC\u05D4)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "kendo-numerictextbox", 27);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.form.get("PackageCode")?.invalid && ctx_r2.form.get("PackageCode")?.touched ? 7 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("min", 0)("decimals", 0)("format", "n0");
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.form.get("PackageName")?.invalid && ctx_r2.form.get("PackageName")?.touched ? 18 : -1);
    \u0275\u0275advance(4);
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
    \u0275\u0275advance(4);
    \u0275\u0275property("min", 0)("decimals", 0)("format", "n0");
    \u0275\u0275control();
  }
}
function PackageDialogComponent_Conditional_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, "\u05D8\u05D5\u05E2\u05DF \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD...");
    \u0275\u0275elementEnd();
  }
}
function PackageDialogComponent_Conditional_9_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 33)(1, "input", 34);
    \u0275\u0275listener("change", function PackageDialogComponent_Conditional_9_Conditional_4_For_2_Template_input_change_1_listener() {
      const p_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleProduct(p_r5.ProductID));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "span", 35);
    \u0275\u0275elementStart(3, "span", 36)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 37);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 38);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r2.isSelected(p_r5.ProductID));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isSelected(p_r5.ProductID));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", p_r5.ColorHex);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r5.ProductName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r5.ProductCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20AA", \u0275\u0275pipeBind2(10, 8, p_r5.PriceMonthly, "1.0-0"), "/\u05D7\u05D5\u05D3\u05E9");
  }
}
function PackageDialogComponent_Conditional_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275repeaterCreate(1, PackageDialogComponent_Conditional_9_Conditional_4_For_2_Template, 11, 11, "label", 31, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.allProducts());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedIds.size, " \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05E0\u05D1\u05D7\u05E8\u05D5");
  }
}
function PackageDialogComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "p", 28);
    \u0275\u0275text(2, "\u05D1\u05D7\u05E8 \u05D0\u05EA \u05D4\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D4\u05DB\u05DC\u05D5\u05DC\u05D9\u05DD \u05D1\u05D7\u05D1\u05D9\u05DC\u05D4 \u05D6\u05D5");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, PackageDialogComponent_Conditional_9_Conditional_3_Template, 2, 0, "div", 29)(4, PackageDialogComponent_Conditional_9_Conditional_4_Template, 5, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.allProducts().length === 0 ? 3 : 4);
  }
}
function PackageDialogComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 20)(2, "label", 15);
    \u0275\u0275text(3, "\u05E1\u05D8\u05D8\u05D5\u05E1 \u05D7\u05D1\u05D9\u05DC\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 39)(5, "button", 40);
    \u0275\u0275listener("click", function PackageDialogComponent_Conditional_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.get("IsActive")?.setValue(true));
    });
    \u0275\u0275text(6, "\u2713 \u05E4\u05E2\u05D9\u05DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 40);
    \u0275\u0275listener("click", function PackageDialogComponent_Conditional_10_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.get("IsActive")?.setValue(false));
    });
    \u0275\u0275text(8, "\u2717 \u05DE\u05D5\u05E9\u05D4\u05D4");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "small", 41);
    \u0275\u0275text(10, "\u05D7\u05D1\u05D9\u05DC\u05D4 \u05DE\u05D5\u05E9\u05D4\u05D9\u05EA \u05DC\u05D0 \u05EA\u05D5\u05E6\u05D2 \u05DC\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05D7\u05D3\u05E9\u05D9\u05DD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 20)(12, "label", 15);
    \u0275\u0275text(13, "\u05E0\u05E8\u05D0\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 39)(15, "button", 40);
    \u0275\u0275listener("click", function PackageDialogComponent_Conditional_10_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.get("IsPublic")?.setValue(true));
    });
    \u0275\u0275text(16, "\u{1F441} \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 40);
    \u0275\u0275listener("click", function PackageDialogComponent_Conditional_10_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.get("IsPublic")?.setValue(false));
    });
    \u0275\u0275text(18, "\u{1F512} \u05E4\u05E8\u05D8\u05D9");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "small", 41);
    \u0275\u0275text(20, "\u05D7\u05D1\u05D9\u05DC\u05D4 \u05E4\u05E8\u05D8\u05D9\u05EA \u05D2\u05DC\u05D5\u05D9\u05D4 \u05E8\u05E7 \u05DC\u05DE\u05E0\u05D4\u05DC\u05D9 \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classProp("seg-on", !!ctx_r2.form.get("IsActive")?.value);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg-off", !ctx_r2.form.get("IsActive")?.value);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("seg-on", !!ctx_r2.form.get("IsPublic")?.value);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg-off", !ctx_r2.form.get("IsPublic")?.value);
  }
}
var PackageDialogComponent = class _PackageDialogComponent {
  fb;
  svc;
  pkg = null;
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
  allProducts = signal(
    [],
    ...ngDevMode ? [{ debugName: "allProducts" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedIds = /* @__PURE__ */ new Set();
  activeGroup = signal(
    "details",
    ...ngDevMode ? [{ debugName: "activeGroup" }] : (
      /* istanbul ignore next */
      []
    )
  );
  groups = [
    { id: "details", label: "\u05E4\u05E8\u05D8\u05D9 \u05D7\u05D1\u05D9\u05DC\u05D4", icon: gearIcon },
    { id: "products", label: "\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD", icon: listUnorderedSquareIcon },
    { id: "visibility", label: "\u05E0\u05E8\u05D0\u05D5\u05EA \u05D5\u05E1\u05D8\u05D8\u05D5\u05E1", icon: eyeIcon }
  ];
  get isEdit() {
    return !!this.pkg?.PackageID;
  }
  get title() {
    return this.isEdit ? "\u05E2\u05E8\u05D9\u05DB\u05EA \u05D7\u05D1\u05D9\u05DC\u05D4" : "\u05D7\u05D1\u05D9\u05DC\u05D4 \u05D7\u05D3\u05E9\u05D4";
  }
  constructor(fb, svc) {
    this.fb = fb;
    this.svc = svc;
  }
  ngOnInit() {
    const p = this.pkg;
    this.form = this.fb.group({
      PackageCode: [p?.PackageCode ?? "", [Validators.required, Validators.maxLength(30)]],
      PackageName: [p?.PackageName ?? "", [Validators.required, Validators.maxLength(200)]],
      Description: [p?.Description ?? ""],
      PriceMonthly: [p?.PriceMonthly ?? 0, [Validators.required, Validators.min(0)]],
      PriceAnnual: [p?.PriceAnnual ?? 0, Validators.min(0)],
      SetupFee: [p?.SetupFee ?? 0, Validators.min(0)],
      TrialDays: [p?.TrialDays ?? 0, Validators.min(0)],
      MaxUsers: [p?.MaxUsers ?? null],
      IsPublic: [p?.IsPublic ?? true],
      IsActive: [p?.IsActive ?? true],
      SortOrder: [p?.SortOrder ?? 0]
    });
    this.loadProducts();
  }
  loadProducts() {
    this.svc.getProducts().subscribe({
      next: (r) => {
        this.allProducts.set(r.data);
        if (this.isEdit && this.pkg?.PackageID) {
          this.svc.getPackage(this.pkg.PackageID).subscribe({
            next: (pr) => {
              (pr.data.Products ?? []).forEach((pp) => {
                if (pp.IsIncluded)
                  this.selectedIds.add(pp.ProductID);
              });
            }
          });
        }
      }
    });
  }
  toggleProduct(id) {
    if (this.selectedIds.has(id))
      this.selectedIds.delete(id);
    else
      this.selectedIds.add(id);
  }
  isSelected(id) {
    return this.selectedIds.has(id);
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.activeGroup.set("details");
      this.errorMsg = "\u05D9\u05E9 \u05E9\u05D3\u05D5\u05EA \u05D7\u05D5\u05D1\u05D4 \u05E9\u05DC\u05D0 \u05DE\u05D5\u05DC\u05D0\u05D5";
      return;
    }
    this.saving.set(true);
    this.errorMsg = "";
    const payload = __spreadProps(__spreadValues({}, this.form.value), {
      PackageID: this.pkg?.PackageID ?? 0,
      ProductIDs: Array.from(this.selectedIds)
    });
    this.svc.savePackage(payload).subscribe({
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
  static \u0275fac = function PackageDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PackageDialogComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CatalogService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PackageDialogComponent, selectors: [["app-package-dialog"]], inputs: { pkg: "pkg" }, outputs: { saved: "saved", closed: "closed" }, decls: 17, vars: 10, consts: [[3, "close", "title", "width", "minWidth"], [1, "pkg-dialog-body"], [1, "pkg-nav"], ["type", "button", 1, "nav-item", 3, "active"], [1, "pkg-content"], [1, "form-error-banner"], [3, "formGroup"], [1, "section-grid"], [1, "products-section"], [1, "dialog-footer"], [1, "btn-save", 3, "click", "disabled"], [1, "btn-cancel", 3, "click"], ["type", "button", 1, "nav-item", 3, "click"], [3, "icon"], [1, "form-row", "col-2"], [1, "form-label"], [1, "req"], ["kendoTextBox", "", "formControlName", "PackageCode", "placeholder", "STARTER", 1, "field-full", 2, "text-transform", "uppercase", "font-family", "'Share Tech Mono',monospace", "direction", "ltr", "text-align", "left"], [1, "field-error"], ["formControlName", "SortOrder", 1, "field-full", 3, "min", "decimals", "format"], [1, "form-row", "col-full"], ["kendoTextBox", "", "formControlName", "PackageName", "placeholder", "\u05E9\u05DD \u05D4\u05D7\u05D1\u05D9\u05DC\u05D4", 1, "field-full"], ["formControlName", "Description", "rows", "3", "placeholder", "\u05EA\u05D9\u05D0\u05D5\u05E8 \u05E7\u05E6\u05E8 \u05E9\u05DC \u05D4\u05D7\u05D1\u05D9\u05DC\u05D4...", 1, "field-full", "textarea-field"], ["formControlName", "PriceMonthly", 1, "field-full", 3, "min", "decimals", "format"], ["formControlName", "PriceAnnual", 1, "field-full", 3, "min", "decimals", "format"], ["formControlName", "SetupFee", 1, "field-full", 3, "min", "decimals", "format"], ["formControlName", "TrialDays", 1, "field-full", 3, "min", "decimals", "format"], ["formControlName", "MaxUsers", 1, "field-full", 3, "min", "decimals", "format"], [1, "products-hint"], [1, "empty-products"], [1, "products-list"], [1, "product-check-row", 3, "selected"], [1, "selected-count"], [1, "product-check-row"], ["type", "checkbox", 3, "change", "checked"], [1, "prod-color"], [1, "prod-info"], [1, "prod-code-small"], [1, "prod-price"], [1, "seg-ctrl"], ["type", "button", 1, "seg-btn", 3, "click"], [1, "field-hint"]], template: function PackageDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "kendo-dialog", 0);
      \u0275\u0275listener("close", function PackageDialogComponent_Template_kendo_dialog_close_0_listener() {
        return ctx.close();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "nav", 2);
      \u0275\u0275repeaterCreate(3, PackageDialogComponent_For_4_Template, 3, 4, "button", 3, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275conditionalCreate(6, PackageDialogComponent_Conditional_6_Template, 2, 1, "div", 5);
      \u0275\u0275elementStart(7, "form", 6);
      \u0275\u0275conditionalCreate(8, PackageDialogComponent_Conditional_8_Template, 43, 20, "div", 7);
      \u0275\u0275conditionalCreate(9, PackageDialogComponent_Conditional_9_Template, 5, 1, "div", 8);
      \u0275\u0275conditionalCreate(10, PackageDialogComponent_Conditional_10_Template, 21, 8, "div", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "kendo-dialog-actions")(12, "div", 9)(13, "button", 10);
      \u0275\u0275listener("click", function PackageDialogComponent_Template_button_click_13_listener() {
        return ctx.save();
      });
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 11);
      \u0275\u0275listener("click", function PackageDialogComponent_Template_button_click_15_listener() {
        return ctx.close();
      });
      \u0275\u0275text(16, "\u05D1\u05D9\u05D8\u05D5\u05DC");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("title", ctx.title)("width", 860)("minWidth", 600);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.groups);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.errorMsg ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeGroup() === "details" ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeGroup() === "products" ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeGroup() === "visibility" ? 10 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.saving());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.saving() ? "\u05E9\u05D5\u05DE\u05E8..." : "\u2713 \u05E9\u05DE\u05D5\u05E8", " ");
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    DialogModule,
    DialogComponent,
    DialogActionsComponent,
    TextBoxModule,
    TextBoxDirective,
    NumericTextBoxModule,
    NumericTextBoxComponent,
    ButtonsModule,
    SVGIconComponent,
    DecimalPipe
  ], styles: ['\n.pkg-dialog-body[_ngcontent-%COMP%] {\n  display: flex;\n  direction: rtl;\n  height: 540px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n  border-radius: 12px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n  margin: 4px;\n}\n.pkg-nav[_ngcontent-%COMP%] {\n  width: 140px;\n  min-width: 140px;\n  background: var(--sf-bg);\n  border-inline-end: 1px solid var(--sf-border);\n  display: flex;\n  flex-direction: column;\n  padding: 8px 0;\n  flex-shrink: 0;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 0.84rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  color: var(--sf-text-secondary);\n  text-align: right;\n  direction: rtl;\n  transition: background 0.15s, color 0.15s;\n  width: 100%;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: var(--sf-primary-light);\n  color: var(--sf-primary);\n  font-weight: 600;\n  border-inline-start: 3px solid var(--sf-primary);\n}\n.nav-item[_ngcontent-%COMP%]   kendo-svg-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.pkg-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px 24px;\n  direction: rtl;\n}\n.form-error-banner[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 6px;\n  padding: 10px 14px;\n  color: var(--sf-danger);\n  font-size: 0.85rem;\n  margin-bottom: 16px;\n}\n.section-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px 20px;\n  direction: rtl;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-row.col-2[_ngcontent-%COMP%] {\n  grid-column: span 1;\n}\n.form-row.col-full[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  text-align: right;\n}\n.req[_ngcontent-%COMP%] {\n  color: var(--sf-danger);\n}\n.field-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--sf-danger);\n}\n.field-hint[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: var(--sf-text-muted);\n}\n.textarea-field[_ngcontent-%COMP%] {\n  font-family: "Noto Sans Hebrew", sans-serif;\n  font-size: 0.875rem;\n  color: var(--sf-text);\n  border: 1px solid var(--sf-border);\n  border-radius: 4px;\n  padding: 8px;\n  resize: vertical;\n  background: var(--sf-bg-card);\n  direction: rtl;\n  text-align: right;\n}\n.textarea-field[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--sf-primary);\n}\n.products-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  direction: rtl;\n}\n.products-hint[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--sf-text-secondary);\n  margin: 0;\n  text-align: right;\n}\n.empty-products[_ngcontent-%COMP%] {\n  color: var(--sf-text-muted);\n  font-size: 0.85rem;\n  text-align: right;\n}\n.products-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.product-check-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.15s, border-color 0.15s;\n  background: var(--sf-bg-card);\n  direction: rtl;\n}\n.product-check-row[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n}\n.product-check-row.selected[_ngcontent-%COMP%] {\n  border-color: var(--sf-primary);\n  background: var(--sf-primary-light);\n}\n.product-check-row[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  cursor: pointer;\n  accent-color: var(--sf-primary);\n  flex-shrink: 0;\n}\n.prod-color[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.prod-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  text-align: right;\n}\n.prod-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--sf-text);\n}\n.prod-code-small[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--sf-text-muted);\n  font-family: "Share Tech Mono", monospace;\n}\n.prod-price[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--sf-text-secondary);\n  white-space: nowrap;\n}\n.selected-count[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--sf-primary);\n  font-weight: 600;\n  text-align: right;\n}\n.seg-ctrl[_ngcontent-%COMP%] {\n  display: inline-flex;\n  direction: rtl;\n  align-self: flex-start;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.seg-btn[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  font-size: 0.78rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  border: none;\n  background: var(--sf-bg);\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.seg-btn[_ngcontent-%COMP%]    + .seg-btn[_ngcontent-%COMP%] {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.seg-btn[_ngcontent-%COMP%]:hover:not(.seg-on):not(.seg-off) {\n  background: var(--sf-bg-hover);\n}\n.seg-btn.seg-on[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: #fff;\n  font-weight: 600;\n}\n.seg-btn.seg-off[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #fff;\n  font-weight: 600;\n}\n[_nghost-%COMP%]     .k-input-inner {\n  direction: rtl;\n  text-align: right;\n}\n[_nghost-%COMP%]     .k-dropdown-wrap, \n[_nghost-%COMP%]     .k-dropdownlist {\n  direction: rtl;\n}\n[_nghost-%COMP%]     .k-list-item {\n  direction: rtl;\n  text-align: right;\n}\n[_nghost-%COMP%]     .k-numerictextbox .k-input-inner {\n  direction: ltr;\n  text-align: left;\n}\n.dialog-footer[_ngcontent-%COMP%] {\n  display: flex;\n  direction: rtl;\n  gap: 8px;\n  width: 100%;\n}\n  .k-dialog-actions {\n  direction: rtl !important;\n}\n.btn-save[_ngcontent-%COMP%] {\n  background: #f97316;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 22px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.btn-save[_ngcontent-%COMP%]:hover {\n  background: #ea6c0c;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: #fff;\n  color: var(--sf-text-secondary);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 9px 22px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n}\n/*# sourceMappingURL=package-dialog.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PackageDialogComponent, [{
    type: Component,
    args: [{ selector: "app-package-dialog", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      DialogModule,
      TextBoxModule,
      NumericTextBoxModule,
      ButtonsModule,
      SVGIconComponent
    ], template: `<kendo-dialog [title]="title" [width]="860" [minWidth]="600" (close)="close()">

  <div class="pkg-dialog-body">

    <nav class="pkg-nav">
      @for (g of groups; track g.id) {
        <button class="nav-item" [class.active]="activeGroup() === g.id" (click)="activeGroup.set(g.id)" type="button">
          <kendo-svg-icon [icon]="g.icon" />
          {{ g.label }}
        </button>
      }
    </nav>

    <div class="pkg-content">
      @if (errorMsg) { <div class="form-error-banner">{{ errorMsg }}</div> }

      <form [formGroup]="form">

        <!-- \u2500\u2500 \u05E4\u05E8\u05D8\u05D9 \u05D7\u05D1\u05D9\u05DC\u05D4 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        @if (activeGroup() === 'details') {
          <div class="section-grid">
            <div class="form-row col-2">
              <label class="form-label">\u05E7\u05D5\u05D3 \u05D7\u05D1\u05D9\u05DC\u05D4 <span class="req">*</span></label>
              <input kendoTextBox formControlName="PackageCode" placeholder="STARTER"
                     class="field-full" style="text-transform:uppercase;font-family:'Share Tech Mono',monospace;direction:ltr;text-align:left" />
              @if (form.get('PackageCode')?.invalid && form.get('PackageCode')?.touched) {
                <span class="field-error">\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4</span>
              }
            </div>
            <div class="form-row col-2">
              <label class="form-label">\u05E1\u05D3\u05E8 \u05EA\u05E6\u05D5\u05D2\u05D4</label>
              <kendo-numerictextbox formControlName="SortOrder" [min]="0" [decimals]="0" [format]="'n0'" class="field-full" />
            </div>

            <div class="form-row col-full">
              <label class="form-label">\u05E9\u05DD \u05D7\u05D1\u05D9\u05DC\u05D4 <span class="req">*</span></label>
              <input kendoTextBox formControlName="PackageName" placeholder="\u05E9\u05DD \u05D4\u05D7\u05D1\u05D9\u05DC\u05D4" class="field-full" />
              @if (form.get('PackageName')?.invalid && form.get('PackageName')?.touched) {
                <span class="field-error">\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4</span>
              }
            </div>

            <div class="form-row col-full">
              <label class="form-label">\u05EA\u05D9\u05D0\u05D5\u05E8</label>
              <textarea formControlName="Description" rows="3" class="field-full textarea-field"
                        placeholder="\u05EA\u05D9\u05D0\u05D5\u05E8 \u05E7\u05E6\u05E8 \u05E9\u05DC \u05D4\u05D7\u05D1\u05D9\u05DC\u05D4..."></textarea>
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
            <div class="form-row col-2">
              <label class="form-label">\u05DE\u05E7\u05E1' \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD (0 = \u05DC\u05DC\u05D0 \u05D4\u05D2\u05D1\u05DC\u05D4)</label>
              <kendo-numerictextbox formControlName="MaxUsers" [min]="0" [decimals]="0" [format]="'n0'" class="field-full" />
            </div>
          </div>
        }

        <!-- \u2500\u2500 \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        @if (activeGroup() === 'products') {
          <div class="products-section">
            <p class="products-hint">\u05D1\u05D7\u05E8 \u05D0\u05EA \u05D4\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D4\u05DB\u05DC\u05D5\u05DC\u05D9\u05DD \u05D1\u05D7\u05D1\u05D9\u05DC\u05D4 \u05D6\u05D5</p>
            @if (allProducts().length === 0) {
              <div class="empty-products">\u05D8\u05D5\u05E2\u05DF \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD...</div>
            } @else {
              <div class="products-list">
                @for (p of allProducts(); track p.ProductID) {
                  <label class="product-check-row" [class.selected]="isSelected(p.ProductID)">
                    <input type="checkbox"
                           [checked]="isSelected(p.ProductID)"
                           (change)="toggleProduct(p.ProductID)" />
                    <span class="prod-color" [style.background]="p.ColorHex"></span>
                    <span class="prod-info">
                      <strong>{{ p.ProductName }}</strong>
                      <span class="prod-code-small">{{ p.ProductCode }}</span>
                    </span>
                    <span class="prod-price">\u20AA{{ p.PriceMonthly | number:'1.0-0' }}/\u05D7\u05D5\u05D3\u05E9</span>
                  </label>
                }
              </div>
              <div class="selected-count">{{ selectedIds.size }} \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05E0\u05D1\u05D7\u05E8\u05D5</div>
            }
          </div>
        }

        <!-- \u2500\u2500 \u05E0\u05E8\u05D0\u05D5\u05EA \u05D5\u05E1\u05D8\u05D8\u05D5\u05E1 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        @if (activeGroup() === 'visibility') {
          <div class="section-grid">

            <div class="form-row col-full">
              <label class="form-label">\u05E1\u05D8\u05D8\u05D5\u05E1 \u05D7\u05D1\u05D9\u05DC\u05D4</label>
              <div class="seg-ctrl">
                <button type="button" class="seg-btn"
                        [class.seg-on]="!!form.get('IsActive')?.value"
                        (click)="form.get('IsActive')?.setValue(true)">\u2713 \u05E4\u05E2\u05D9\u05DC</button>
                <button type="button" class="seg-btn"
                        [class.seg-off]="!form.get('IsActive')?.value"
                        (click)="form.get('IsActive')?.setValue(false)">\u2717 \u05DE\u05D5\u05E9\u05D4\u05D4</button>
              </div>
              <small class="field-hint">\u05D7\u05D1\u05D9\u05DC\u05D4 \u05DE\u05D5\u05E9\u05D4\u05D9\u05EA \u05DC\u05D0 \u05EA\u05D5\u05E6\u05D2 \u05DC\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05D7\u05D3\u05E9\u05D9\u05DD</small>
            </div>

            <div class="form-row col-full">
              <label class="form-label">\u05E0\u05E8\u05D0\u05D5\u05EA</label>
              <div class="seg-ctrl">
                <button type="button" class="seg-btn"
                        [class.seg-on]="!!form.get('IsPublic')?.value"
                        (click)="form.get('IsPublic')?.setValue(true)">\u{1F441} \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9</button>
                <button type="button" class="seg-btn"
                        [class.seg-off]="!form.get('IsPublic')?.value"
                        (click)="form.get('IsPublic')?.setValue(false)">\u{1F512} \u05E4\u05E8\u05D8\u05D9</button>
              </div>
              <small class="field-hint">\u05D7\u05D1\u05D9\u05DC\u05D4 \u05E4\u05E8\u05D8\u05D9\u05EA \u05D2\u05DC\u05D5\u05D9\u05D4 \u05E8\u05E7 \u05DC\u05DE\u05E0\u05D4\u05DC\u05D9 \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA</small>
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
`, styles: ['/* src/app/features/catalog/packages/package-dialog/package-dialog.component.scss */\n.pkg-dialog-body {\n  display: flex;\n  direction: rtl;\n  height: 540px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n  border-radius: 12px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n  margin: 4px;\n}\n.pkg-nav {\n  width: 140px;\n  min-width: 140px;\n  background: var(--sf-bg);\n  border-inline-end: 1px solid var(--sf-border);\n  display: flex;\n  flex-direction: column;\n  padding: 8px 0;\n  flex-shrink: 0;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 0.84rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  color: var(--sf-text-secondary);\n  text-align: right;\n  direction: rtl;\n  transition: background 0.15s, color 0.15s;\n  width: 100%;\n}\n.nav-item:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.nav-item.active {\n  background: var(--sf-primary-light);\n  color: var(--sf-primary);\n  font-weight: 600;\n  border-inline-start: 3px solid var(--sf-primary);\n}\n.nav-item kendo-svg-icon {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.pkg-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px 24px;\n  direction: rtl;\n}\n.form-error-banner {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 6px;\n  padding: 10px 14px;\n  color: var(--sf-danger);\n  font-size: 0.85rem;\n  margin-bottom: 16px;\n}\n.section-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px 20px;\n  direction: rtl;\n}\n.form-row {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-row.col-2 {\n  grid-column: span 1;\n}\n.form-row.col-full {\n  grid-column: span 2;\n}\n.form-label {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  text-align: right;\n}\n.req {\n  color: var(--sf-danger);\n}\n.field-full {\n  width: 100%;\n}\n.field-error {\n  font-size: 0.75rem;\n  color: var(--sf-danger);\n}\n.field-hint {\n  font-size: 0.76rem;\n  color: var(--sf-text-muted);\n}\n.textarea-field {\n  font-family: "Noto Sans Hebrew", sans-serif;\n  font-size: 0.875rem;\n  color: var(--sf-text);\n  border: 1px solid var(--sf-border);\n  border-radius: 4px;\n  padding: 8px;\n  resize: vertical;\n  background: var(--sf-bg-card);\n  direction: rtl;\n  text-align: right;\n}\n.textarea-field:focus {\n  outline: none;\n  border-color: var(--sf-primary);\n}\n.products-section {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  direction: rtl;\n}\n.products-hint {\n  font-size: 0.82rem;\n  color: var(--sf-text-secondary);\n  margin: 0;\n  text-align: right;\n}\n.empty-products {\n  color: var(--sf-text-muted);\n  font-size: 0.85rem;\n  text-align: right;\n}\n.products-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.product-check-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.15s, border-color 0.15s;\n  background: var(--sf-bg-card);\n  direction: rtl;\n}\n.product-check-row:hover {\n  background: var(--sf-bg-hover);\n}\n.product-check-row.selected {\n  border-color: var(--sf-primary);\n  background: var(--sf-primary-light);\n}\n.product-check-row input[type=checkbox] {\n  cursor: pointer;\n  accent-color: var(--sf-primary);\n  flex-shrink: 0;\n}\n.prod-color {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.prod-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  text-align: right;\n}\n.prod-info strong {\n  font-size: 0.85rem;\n  color: var(--sf-text);\n}\n.prod-code-small {\n  font-size: 0.72rem;\n  color: var(--sf-text-muted);\n  font-family: "Share Tech Mono", monospace;\n}\n.prod-price {\n  font-size: 0.78rem;\n  color: var(--sf-text-secondary);\n  white-space: nowrap;\n}\n.selected-count {\n  font-size: 0.8rem;\n  color: var(--sf-primary);\n  font-weight: 600;\n  text-align: right;\n}\n.seg-ctrl {\n  display: inline-flex;\n  direction: rtl;\n  align-self: flex-start;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.seg-btn {\n  padding: 6px 14px;\n  font-size: 0.78rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  border: none;\n  background: var(--sf-bg);\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.seg-btn + .seg-btn {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.seg-btn:hover:not(.seg-on):not(.seg-off) {\n  background: var(--sf-bg-hover);\n}\n.seg-btn.seg-on {\n  background: #10b981;\n  color: #fff;\n  font-weight: 600;\n}\n.seg-btn.seg-off {\n  background: #ef4444;\n  color: #fff;\n  font-weight: 600;\n}\n:host ::ng-deep .k-input-inner {\n  direction: rtl;\n  text-align: right;\n}\n:host ::ng-deep .k-dropdown-wrap,\n:host ::ng-deep .k-dropdownlist {\n  direction: rtl;\n}\n:host ::ng-deep .k-list-item {\n  direction: rtl;\n  text-align: right;\n}\n:host ::ng-deep .k-numerictextbox .k-input-inner {\n  direction: ltr;\n  text-align: left;\n}\n.dialog-footer {\n  display: flex;\n  direction: rtl;\n  gap: 8px;\n  width: 100%;\n}\n::ng-deep .k-dialog-actions {\n  direction: rtl !important;\n}\n.btn-save {\n  background: #f97316;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 22px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.btn-save:hover {\n  background: #ea6c0c;\n}\n.btn-save:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.btn-cancel {\n  background: #fff;\n  color: var(--sf-text-secondary);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 9px 22px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.btn-cancel:hover {\n  background: var(--sf-bg-hover);\n}\n/*# sourceMappingURL=package-dialog.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: CatalogService }], { pkg: [{
    type: Input
  }], saved: [{
    type: Output
  }], closed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PackageDialogComponent, { className: "PackageDialogComponent", filePath: "src/app/features/catalog/packages/package-dialog/package-dialog.component.ts", lineNumber: 25 });
})();

// src/app/features/catalog/packages/packages.component.ts
var _c0 = (a0, a1) => ({ data: a0, total: a1 });
var _c1 = () => [10, 25, 50];
var _c2 = (a0) => ({ buttonCount: 5, info: true, type: "numeric", pageSizes: a0 });
var _c3 = () => ({ mode: "single", allowUnsort: false });
function PackagesComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "mat-spinner", 15);
    \u0275\u0275elementEnd();
  }
}
function PackagesComponent_Conditional_20_Template(rf, ctx) {
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
function PackagesComponent_Conditional_21_ng_template_14_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "span", 40);
    \u0275\u0275text(2, "\u05EA\u05D9\u05D0\u05D5\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r3.Description);
  }
}
function PackagesComponent_Conditional_21_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PackagesComponent_Conditional_21_ng_template_14_Conditional_0_Template, 5, 1, "div", 39);
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275conditional(row_r3.Description ? 0 : -1);
  }
}
function PackagesComponent_Conditional_21_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.PackageCode);
  }
}
function PackagesComponent_Conditional_21_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.PackageName);
  }
}
function PackagesComponent_Conditional_21_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.ProductCount);
  }
}
function PackagesComponent_Conditional_21_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u20AA", \u0275\u0275pipeBind2(2, 1, row_r7.PriceMonthly, "1.0-0"));
  }
}
function PackagesComponent_Conditional_21_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u20AA", \u0275\u0275pipeBind2(2, 1, row_r8.PriceAnnual, "1.0-0"));
  }
}
function PackagesComponent_Conditional_21_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.SetupFee ? "\u20AA" + \u0275\u0275pipeBind2(2, 1, row_r9.SetupFee, "1.0-0") : "\u2014");
  }
}
function PackagesComponent_Conditional_21_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r10.TrialDays ? row_r10.TrialDays + " \u05D9\u05DE\u05D9\u05DD" : "\u2014");
  }
}
function PackagesComponent_Conditional_21_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r11.MaxUsers ? row_r11.MaxUsers : "\u05DC\u05DC\u05D0 \u05D4\u05D2\u05D1\u05DC\u05D4");
  }
}
function PackagesComponent_Conditional_21_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    \u0275\u0275classProp("vis-public", row_r12.IsPublic)("vis-private", !row_r12.IsPublic);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r12.IsPublic ? "\u{1F441} \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9" : "\u{1F512} \u05E4\u05E8\u05D8\u05D9", " ");
  }
}
function PackagesComponent_Conditional_21_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "span", 51);
    \u0275\u0275elementStart(2, "span", 52);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("dot-active", row_r13.IsActive)("dot-inactive", !row_r13.IsActive);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r13.IsActive ? "\u05E4\u05E2\u05D9\u05DC" : "\u05DE\u05D5\u05E9\u05D4\u05D4");
  }
}
function PackagesComponent_Conditional_21_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "button", 54);
    \u0275\u0275listener("click", function PackagesComponent_Conditional_21_ng_template_36_Template_button_click_1_listener() {
      const ctx_r14 = \u0275\u0275restoreView(_r14);
      const row_r16 = ctx_r14.$implicit;
      const rowIndex_r17 = ctx_r14.rowIndex;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleDetail(row_r16.PackageID, rowIndex_r17));
    });
    \u0275\u0275element(2, "i", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 56);
    \u0275\u0275listener("click", function PackagesComponent_Conditional_21_ng_template_36_Template_button_click_3_listener() {
      const row_r16 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleActive(row_r16));
    });
    \u0275\u0275element(4, "i", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 57);
    \u0275\u0275listener("click", function PackagesComponent_Conditional_21_ng_template_36_Template_button_click_5_listener() {
      const row_r16 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(row_r16));
    });
    \u0275\u0275element(6, "i", 58);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r16 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", ctx_r0.isExpanded(row_r16.PackageID));
    \u0275\u0275property("title", ctx_r0.isExpanded(row_r16.PackageID) ? "\u05E1\u05D2\u05D5\u05E8" : "\u05E4\u05E8\u05D8\u05D9\u05DD");
    \u0275\u0275advance();
    \u0275\u0275classProp("pi-chevron-down", !ctx_r0.isExpanded(row_r16.PackageID))("pi-chevron-up", ctx_r0.isExpanded(row_r16.PackageID));
    \u0275\u0275advance();
    \u0275\u0275classProp("act-lock", row_r16.IsActive)("act-unlock", !row_r16.IsActive);
    \u0275\u0275property("title", row_r16.IsActive ? "\u05D4\u05E9\u05D1\u05EA" : "\u05D4\u05E4\u05E2\u05DC");
    \u0275\u0275advance();
    \u0275\u0275classProp("pi-lock", row_r16.IsActive)("pi-lock-open", !row_r16.IsActive);
  }
}
function PackagesComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "kendo-grid", 16);
    \u0275\u0275listener("pageChange", function PackagesComponent_Conditional_21_Template_kendo_grid_pageChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageChange($event));
    })("sortChange", function PackagesComponent_Conditional_21_Template_kendo_grid_sortChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSortChange($event));
    });
    \u0275\u0275element(1, "kendo-grid-pdf", 17);
    \u0275\u0275elementStart(2, "kendo-grid-excel", 18);
    \u0275\u0275element(3, "kendo-excelexport-column", 19)(4, "kendo-excelexport-column", 20)(5, "kendo-excelexport-column", 21)(6, "kendo-excelexport-column", 22)(7, "kendo-excelexport-column", 23)(8, "kendo-excelexport-column", 24)(9, "kendo-excelexport-column", 25)(10, "kendo-excelexport-column", 26)(11, "kendo-excelexport-column", 27)(12, "kendo-excelexport-column", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "kendo-grid-messages", 29);
    \u0275\u0275template(14, PackagesComponent_Conditional_21_ng_template_14_Template, 1, 1, "ng-template", 30);
    \u0275\u0275elementStart(15, "kendo-grid-column", 19);
    \u0275\u0275template(16, PackagesComponent_Conditional_21_ng_template_16_Template, 2, 1, "ng-template", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "kendo-grid-column", 32);
    \u0275\u0275template(18, PackagesComponent_Conditional_21_ng_template_18_Template, 2, 1, "ng-template", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "kendo-grid-column", 21);
    \u0275\u0275template(20, PackagesComponent_Conditional_21_ng_template_20_Template, 2, 1, "ng-template", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "kendo-grid-column", 33);
    \u0275\u0275template(22, PackagesComponent_Conditional_21_ng_template_22_Template, 3, 4, "ng-template", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "kendo-grid-column", 34);
    \u0275\u0275template(24, PackagesComponent_Conditional_21_ng_template_24_Template, 3, 4, "ng-template", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "kendo-grid-column", 35);
    \u0275\u0275template(26, PackagesComponent_Conditional_21_ng_template_26_Template, 3, 4, "ng-template", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "kendo-grid-column", 36);
    \u0275\u0275template(28, PackagesComponent_Conditional_21_ng_template_28_Template, 2, 1, "ng-template", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "kendo-grid-column", 37);
    \u0275\u0275template(30, PackagesComponent_Conditional_21_ng_template_30_Template, 2, 1, "ng-template", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "kendo-grid-column", 27);
    \u0275\u0275template(32, PackagesComponent_Conditional_21_ng_template_32_Template, 2, 5, "ng-template", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "kendo-grid-column", 28);
    \u0275\u0275template(34, PackagesComponent_Conditional_21_ng_template_34_Template, 4, 5, "ng-template", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "kendo-grid-column", 38);
    \u0275\u0275template(36, PackagesComponent_Conditional_21_ng_template_36_Template, 7, 16, "ng-template", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", \u0275\u0275pureFunction2(36, _c0, ctx_r0.pagedData, ctx_r0.gridData.length))("skip", ctx_r0.skip)("pageSize", ctx_r0.pageSize)("pageable", \u0275\u0275pureFunction1(40, _c2, \u0275\u0275pureFunction0(39, _c1)))("sortable", \u0275\u0275pureFunction0(42, _c3))("sort", ctx_r0.sort)("reorderable", true)("resizable", true)("columnMenu", true);
    \u0275\u0275advance();
    \u0275\u0275property("allPages", true)("landscape", true);
    \u0275\u0275advance();
    \u0275\u0275property("fetchData", ctx_r0.allData);
    \u0275\u0275advance();
    \u0275\u0275property("width", 110);
    \u0275\u0275advance();
    \u0275\u0275property("width", 200);
    \u0275\u0275advance();
    \u0275\u0275property("width", 80);
    \u0275\u0275advance();
    \u0275\u0275property("width", 110);
    \u0275\u0275advance();
    \u0275\u0275property("width", 110);
    \u0275\u0275advance();
    \u0275\u0275property("width", 100);
    \u0275\u0275advance();
    \u0275\u0275property("width", 90);
    \u0275\u0275advance();
    \u0275\u0275property("width", 110);
    \u0275\u0275advance();
    \u0275\u0275property("width", 70);
    \u0275\u0275advance();
    \u0275\u0275property("width", 70);
    \u0275\u0275advance(3);
    \u0275\u0275property("width", 110);
    \u0275\u0275advance(2);
    \u0275\u0275property("minResizableWidth", 140);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 80);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 105);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 105);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 95);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 80);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 100);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 85);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 90);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 104)("sortable", false)("resizable", false)("columnMenu", false);
  }
}
function PackagesComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-package-dialog", 59);
    \u0275\u0275listener("saved", function PackagesComponent_Conditional_22_Template_app_package_dialog_saved_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSaved());
    })("closed", function PackagesComponent_Conditional_22_Template_app_package_dialog_closed_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClosed());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("pkg", ctx_r0.dialogPackage());
  }
}
var PackagesComponent = class _PackagesComponent {
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
  packages = signal(
    [],
    ...ngDevMode ? [{ debugName: "packages" }] : (
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
  dialogPackage = signal(
    null,
    ...ngDevMode ? [{ debugName: "dialogPackage" }] : (
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
    this.svc.getPackages().subscribe({
      next: (r) => {
        this.packages.set(r.data);
        this.applyFilter();
        this.loading.set(false);
      },
      error: () => {
        this.error.set("\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D8\u05E2\u05D9\u05E0\u05EA \u05D7\u05D1\u05D9\u05DC\u05D5\u05EA");
        this.loading.set(false);
      }
    });
  }
  applyFilter() {
    const q = this.searchTerm.toLowerCase();
    const filtered = q ? this.packages().filter((p) => p.PackageName.toLowerCase().includes(q) || p.PackageCode.toLowerCase().includes(q)) : [...this.packages()];
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
    this.dialogPackage.set(null);
    this.dialogOpen.set(false);
    setTimeout(() => this.dialogOpen.set(true));
  }
  openEdit(p) {
    this.dialogPackage.set(p);
    this.dialogOpen.set(false);
    setTimeout(() => this.dialogOpen.set(true));
  }
  onSaved() {
    this.load();
  }
  onClosed() {
    this.dialogOpen.set(false);
  }
  toggleActive(p) {
    this.svc.savePackage(__spreadProps(__spreadValues({}, p), { IsActive: !p.IsActive })).subscribe({ next: () => this.load() });
  }
  isExpanded(id) {
    return this.expandedIds.has(id);
  }
  toggleDetail(pkgId, rowIndex) {
    const absIdx = this.skip + rowIndex;
    if (this.expandedIds.has(pkgId)) {
      this.expandedIds.delete(pkgId);
      this.grid.collapseRow(absIdx);
    } else {
      this.expandedIds.add(pkgId);
      this.grid.expandRow(absIdx);
    }
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
  static \u0275fac = function PackagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PackagesComponent)(\u0275\u0275directiveInject(CatalogService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PackagesComponent, selectors: [["app-packages"]], viewQuery: function PackagesComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(GridComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.grid = _t.first);
    }
  }, decls: 23, vars: 8, consts: [[1, "pkg-page"], [1, "page-header"], [1, "header-titles"], ["kendoButton", "", "themeColor", "primary", 3, "click", "svgIcon"], [1, "toolbar"], [1, "search-wrap"], [1, "search-icon"], ["type", "text", "placeholder", "\u05D7\u05D9\u05E4\u05D5\u05E9 \u05D7\u05D1\u05D9\u05DC\u05D4...", 1, "search-input", 3, "input"], [1, "export-btns"], ["kendoButton", "", "fillMode", "outline", "title", "\u05D9\u05D9\u05E6\u05D5\u05D0 \u05DC\u05D0\u05E7\u05E1\u05DC", 1, "btn-export", "btn-excel", 3, "click", "svgIcon"], ["kendoButton", "", "fillMode", "outline", "title", "\u05D9\u05D9\u05E6\u05D5\u05D0 \u05DC-PDF", 1, "btn-export", "btn-pdf", 3, "click", "svgIcon"], [1, "state-box"], [1, "state-box", "error"], ["scrollable", "none", 1, "pkg-grid", 3, "data", "skip", "pageSize", "pageable", "sortable", "sort", "reorderable", "resizable", "columnMenu"], [3, "pkg"], ["diameter", "36"], ["scrollable", "none", 1, "pkg-grid", 3, "pageChange", "sortChange", "data", "skip", "pageSize", "pageable", "sortable", "sort", "reorderable", "resizable", "columnMenu"], ["fileName", "\u05D7\u05D1\u05D9\u05DC\u05D5\u05EA.pdf", "paperSize", "A4", "margin", "1cm", 3, "allPages", "landscape"], ["fileName", "\u05D7\u05D1\u05D9\u05DC\u05D5\u05EA.xlsx", 3, "fetchData"], ["field", "PackageCode", "title", "\u05E7\u05D5\u05D3", 3, "width"], ["field", "PackageName", "title", "\u05E9\u05DD \u05D7\u05D1\u05D9\u05DC\u05D4", 3, "width"], ["field", "ProductCount", "title", "\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD", 3, "width"], ["field", "PriceMonthly", "title", "\u05DE\u05D7\u05D9\u05E8 \u05D7\u05D5\u05D3\u05E9\u05D9", 3, "width"], ["field", "PriceAnnual", "title", "\u05DE\u05D7\u05D9\u05E8 \u05E9\u05E0\u05EA\u05D9", 3, "width"], ["field", "SetupFee", "title", "\u05D3\u05DE\u05D9 \u05D4\u05E7\u05DE\u05D4", 3, "width"], ["field", "TrialDays", "title", "\u05D9\u05DE\u05D9 \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF", 3, "width"], ["field", "MaxUsers", "title", "\u05DE\u05E7\u05E1' \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD", 3, "width"], ["field", "IsPublic", "title", "\u05E0\u05E8\u05D0\u05D5\u05EA", 3, "width"], ["field", "IsActive", "title", "\u05E1\u05D8\u05D8\u05D5\u05E1", 3, "width"], ["pagerItemsPerPage", "\u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3", "pagerOf", "\u05DE\u05EA\u05D5\u05DA", "pagerItems", "\u05E8\u05E9\u05D5\u05DE\u05D5\u05EA", "pagerFirstPage", "\u05E2\u05DE\u05D5\u05D3 \u05E8\u05D0\u05E9\u05D5\u05DF", "pagerLastPage", "\u05E2\u05DE\u05D5\u05D3 \u05D0\u05D7\u05E8\u05D5\u05DF", "pagerPreviousPage", "\u05D4\u05E7\u05D5\u05D3\u05DD", "pagerNextPage", "\u05D4\u05D1\u05D0", "pagerPage", "\u05E2\u05DE\u05D5\u05D3", "pagerPageNumberInputTitle", "\u05DE\u05E1\u05E4\u05E8 \u05E2\u05DE\u05D5\u05D3", "noRecords", "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05D7\u05D1\u05D9\u05DC\u05D5\u05EA", "loading", "\u05D8\u05D5\u05E2\u05DF...", "columnMenuFilter", "\u05E1\u05E0\u05DF", "columnMenuSort", "\u05DE\u05D9\u05D5\u05DF", "columnMenuColumns", "\u05E2\u05DE\u05D5\u05D3\u05D5\u05EA", "columnMenuSortAscending", "\u05E2\u05D5\u05DC\u05D4", "columnMenuSortDescending", "\u05D9\u05D5\u05E8\u05D3", "selectionCheckboxLabel", "\u05D1\u05D7\u05E8 \u05E9\u05D5\u05E8\u05D4", "selectAllCheckboxLabel", "\u05D1\u05D7\u05E8 \u05D4\u05DB\u05DC"], ["kendoGridDetailTemplate", ""], ["kendoGridCellTemplate", ""], ["field", "PackageName", "title", "\u05E9\u05DD \u05D7\u05D1\u05D9\u05DC\u05D4", 3, "minResizableWidth"], ["field", "PriceMonthly", "title", "\u05D7\u05D5\u05D3\u05E9\u05D9 (\u20AA)", 3, "width"], ["field", "PriceAnnual", "title", "\u05E9\u05E0\u05EA\u05D9 (\u20AA)", 3, "width"], ["field", "SetupFee", "title", "\u05D4\u05E7\u05DE\u05D4 (\u20AA)", 3, "width"], ["field", "TrialDays", "title", "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF", 3, "width"], ["field", "MaxUsers", "title", "\u05DE\u05E7\u05E1' \u05DE\u05E9\u05EA'", 3, "width"], ["title", "", 3, "width", "sortable", "resizable", "columnMenu"], [1, "pkg-detail-desc"], [1, "df-label"], [1, "df-val"], [1, "code-badge"], [1, "pkg-name"], [1, "badge-count"], [1, "price-val"], [1, "price-val", "price-secondary"], [1, "trial-badge"], [1, "cell-val"], [1, "visibility-badge"], [1, "status-dot-wrap"], [1, "status-dot"], [1, "status-label"], [1, "row-actions"], [1, "act-btn", "act-expand", 3, "click", "title"], [1, "pi"], [1, "act-btn", 3, "click", "title"], ["title", "\u05E2\u05E8\u05D5\u05DA", 1, "act-btn", "act-edit", 3, "click"], [1, "pi", "pi-pencil"], [3, "saved", "closed", "pkg"]], template: function PackagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "\u05D7\u05D1\u05D9\u05DC\u05D5\u05EA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 3);
      \u0275\u0275listener("click", function PackagesComponent_Template_button_click_7_listener() {
        return ctx.openAdd();
      });
      \u0275\u0275text(8, " \u05D7\u05D1\u05D9\u05DC\u05D4 \u05D7\u05D3\u05E9\u05D4 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 4)(10, "div", 5)(11, "mat-icon", 6);
      \u0275\u0275text(12, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 7);
      \u0275\u0275listener("input", function PackagesComponent_Template_input_input_13_listener($event) {
        return ctx.onSearch($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 8)(15, "button", 9);
      \u0275\u0275listener("click", function PackagesComponent_Template_button_click_15_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275text(16, "Excel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 10);
      \u0275\u0275listener("click", function PackagesComponent_Template_button_click_17_listener() {
        return ctx.exportPDF();
      });
      \u0275\u0275text(18, "PDF");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(19, PackagesComponent_Conditional_19_Template, 2, 0, "div", 11);
      \u0275\u0275conditionalCreate(20, PackagesComponent_Conditional_20_Template, 2, 1, "div", 12);
      \u0275\u0275conditionalCreate(21, PackagesComponent_Conditional_21_Template, 37, 43, "kendo-grid", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(22, PackagesComponent_Conditional_22_Template, 1, 1, "app-package-dialog", 14);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.packages().length, " \u05D7\u05D1\u05D9\u05DC\u05D5\u05EA \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA");
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
    PackageDialogComponent,
    DecimalPipe
  ], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.pkg-page[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  direction: rtl;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.header-titles[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.header-titles[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0;\n}\n.header-titles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: var(--sf-text-secondary);\n  margin: 3px 0 0;\n}\n.toolbar[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.export-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n}\n[_nghost-%COMP%]     .export-btns .k-button {\n  border: none !important;\n  border-radius: 0 !important;\n  background: var(--sf-bg-card) !important;\n  color: var(--sf-text-secondary) !important;\n  box-shadow: none !important;\n  padding: 6px 14px !important;\n  font-size: 0.82rem !important;\n  font-weight: 500 !important;\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n}\n[_nghost-%COMP%]     .export-btns .k-button:hover {\n  background: var(--sf-bg-hover) !important;\n}\n[_nghost-%COMP%]     .export-btns .k-button + .k-button {\n  border-inline-start: 1px solid var(--sf-border) !important;\n}\n[_nghost-%COMP%]     .export-btns .btn-excel:hover {\n  color: #16a34a !important;\n}\n[_nghost-%COMP%]     .export-btns .btn-pdf:hover {\n  color: #dc2626 !important;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 340px;\n  direction: rtl;\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 6px 12px;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.search-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--sf-border-focus);\n  box-shadow: 0 0 0 3px rgba(13, 71, 255, 0.12);\n}\n.search-icon[_ngcontent-%COMP%] {\n  color: var(--sf-text-muted);\n  font-size: 18px;\n  width: 18px !important;\n  height: 18px !important;\n  flex-shrink: 0;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  color: var(--sf-text);\n  font-size: 0.875rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--sf-text-muted);\n}\n.state-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: var(--sf-text-secondary);\n}\n.state-box.error[_ngcontent-%COMP%] {\n  color: var(--sf-danger);\n}\n[_nghost-%COMP%]     .pkg-grid {\n  border-radius: 10px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04);\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n[_nghost-%COMP%]     .pkg-grid .k-grid-header th.k-header {\n  background: var(--sf-grid-hd-bg) !important;\n  color: var(--sf-grid-hd-color) !important;\n  font-weight: 700 !important;\n  font-size: 0.78rem !important;\n  text-align: right !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n  border-color: var(--sf-grid-hd-border) !important;\n  direction: rtl;\n}\n[_nghost-%COMP%]     .pkg-grid .k-grid-header {\n  background: var(--sf-grid-hd-bg) !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n}\n[_nghost-%COMP%]     .pkg-grid .k-column-menu-button {\n  color: var(--sf-grid-hd-color);\n  opacity: 0.7;\n}\n[_nghost-%COMP%]     .pkg-grid .k-column-menu-button:hover {\n  opacity: 1;\n}\n[_nghost-%COMP%]     .pkg-grid td.k-table-td {\n  text-align: right !important;\n  vertical-align: middle !important;\n  border-color: var(--sf-border) !important;\n  font-size: 0.875rem;\n  background: var(--sf-bg-card);\n  direction: rtl;\n  padding: 8px 12px !important;\n}\n[_nghost-%COMP%]     .pkg-grid tr.k-table-row:hover td {\n  background: var(--sf-bg-hover) !important;\n}\n[_nghost-%COMP%]     .pkg-grid .k-pager {\n  border-top: 1px solid var(--sf-border);\n  background: #f8fafc;\n  direction: rtl;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  font-size: 0.82rem;\n}\n[_nghost-%COMP%]     .pkg-grid .k-pager-wrap, \n[_nghost-%COMP%]     .pkg-grid .k-pager {\n  direction: rtl !important;\n}\n[_nghost-%COMP%]     .pkg-grid .k-detail-row > td {\n  background: var(--sf-bg) !important;\n  padding: 4px 0 12px !important;\n  border-bottom: 1px solid var(--sf-border) !important;\n}\n[_nghost-%COMP%]     .pkg-grid .k-sort-icon {\n  margin-right: 4px;\n}\n.pkg-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--sf-text);\n  font-size: 0.88rem;\n}\n.code-badge[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.76rem;\n  background: var(--sf-bg);\n  border: 1px solid var(--sf-border);\n  border-radius: 5px;\n  padding: 2px 8px;\n  color: var(--sf-text-secondary);\n  direction: ltr;\n  unicode-bidi: embed;\n  display: inline-block;\n  white-space: nowrap;\n}\n.badge-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 10px;\n  border-radius: 20px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  background: var(--sf-bg);\n  border: 1px solid var(--sf-border);\n  color: var(--sf-text-secondary);\n}\n.price-val[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  color: var(--sf-text);\n  font-weight: 500;\n  font-family: "Share Tech Mono", monospace;\n  direction: ltr;\n  display: inline-block;\n}\n.price-secondary[_ngcontent-%COMP%] {\n  color: var(--sf-text-secondary);\n  font-weight: 400;\n}\n.trial-badge[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #0891b2;\n  background: #e0f2fe;\n  padding: 2px 8px;\n  border-radius: 12px;\n  white-space: nowrap;\n}\n.cell-val[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  color: var(--sf-text-secondary);\n}\n.visibility-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 12px;\n  white-space: nowrap;\n}\n.visibility-badge.vis-public[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.visibility-badge.vis-private[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: var(--sf-text-muted);\n}\n.status-dot-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.dot-active[_ngcontent-%COMP%] {\n  background: #22c55e;\n  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.15);\n}\n.dot-inactive[_ngcontent-%COMP%] {\n  background: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);\n}\n.status-label[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: #374151;\n}\n.row-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.act-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.act-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.act-expand[_ngcontent-%COMP%] {\n  color: var(--sf-text-secondary);\n}\n.act-expand[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-primary);\n}\n.act-expand.expanded[_ngcontent-%COMP%] {\n  color: var(--sf-primary);\n  background: var(--sf-primary-light);\n}\n.act-lock[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.act-lock[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.act-unlock[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.act-unlock[_ngcontent-%COMP%]:hover {\n  background: #f0fdf4;\n}\n.act-edit[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.act-edit[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n}\n.pkg-detail-desc[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n  padding: 10px 20px;\n  direction: rtl;\n}\n.df-label[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: var(--sf-text-muted);\n  flex-shrink: 0;\n}\n.df-val[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  color: var(--sf-text);\n}\n/*# sourceMappingURL=packages.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PackagesComponent, [{
    type: Component,
    args: [{ selector: "app-packages", standalone: true, imports: [
      CommonModule,
      FormsModule,
      GridModule,
      ExcelModule,
      PDFModule,
      ButtonsModule,
      MatIconModule,
      MatProgressSpinnerModule,
      PackageDialogComponent
    ], template: `<div class="pkg-page">

  <div class="page-header">
    <div class="header-titles">
      <h1>\u05D7\u05D1\u05D9\u05DC\u05D5\u05EA</h1>
      <p>{{ packages().length }} \u05D7\u05D1\u05D9\u05DC\u05D5\u05EA \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA</p>
    </div>
    <button kendoButton themeColor="primary" [svgIcon]="addIcon" (click)="openAdd()">
      \u05D7\u05D1\u05D9\u05DC\u05D4 \u05D7\u05D3\u05E9\u05D4
    </button>
  </div>

  <div class="toolbar">
    <div class="search-wrap">
      <mat-icon class="search-icon">search</mat-icon>
      <input class="search-input" type="text" placeholder="\u05D7\u05D9\u05E4\u05D5\u05E9 \u05D7\u05D1\u05D9\u05DC\u05D4..."
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
      class="pkg-grid">

      <kendo-grid-pdf fileName="\u05D7\u05D1\u05D9\u05DC\u05D5\u05EA.pdf" [allPages]="true" paperSize="A4" [landscape]="true" margin="1cm" />
      <kendo-grid-excel fileName="\u05D7\u05D1\u05D9\u05DC\u05D5\u05EA.xlsx" [fetchData]="allData">
        <kendo-excelexport-column field="PackageCode"  title="\u05E7\u05D5\u05D3"           [width]="110" />
        <kendo-excelexport-column field="PackageName"  title="\u05E9\u05DD \u05D7\u05D1\u05D9\u05DC\u05D4"      [width]="200" />
        <kendo-excelexport-column field="ProductCount" title="\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD"        [width]="80"  />
        <kendo-excelexport-column field="PriceMonthly" title="\u05DE\u05D7\u05D9\u05E8 \u05D7\u05D5\u05D3\u05E9\u05D9"    [width]="110" />
        <kendo-excelexport-column field="PriceAnnual"  title="\u05DE\u05D7\u05D9\u05E8 \u05E9\u05E0\u05EA\u05D9"     [width]="110" />
        <kendo-excelexport-column field="SetupFee"     title="\u05D3\u05DE\u05D9 \u05D4\u05E7\u05DE\u05D4"      [width]="100" />
        <kendo-excelexport-column field="TrialDays"    title="\u05D9\u05DE\u05D9 \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF"    [width]="90"  />
        <kendo-excelexport-column field="MaxUsers"     title="\u05DE\u05E7\u05E1' \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD"  [width]="110" />
        <kendo-excelexport-column field="IsPublic"     title="\u05E0\u05E8\u05D0\u05D5\u05EA"         [width]="70"  />
        <kendo-excelexport-column field="IsActive"     title="\u05E1\u05D8\u05D8\u05D5\u05E1"         [width]="70"  />
      </kendo-grid-excel>

      <kendo-grid-messages
        pagerItemsPerPage="\u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3" pagerOf="\u05DE\u05EA\u05D5\u05DA" pagerItems="\u05E8\u05E9\u05D5\u05DE\u05D5\u05EA"
        pagerFirstPage="\u05E2\u05DE\u05D5\u05D3 \u05E8\u05D0\u05E9\u05D5\u05DF" pagerLastPage="\u05E2\u05DE\u05D5\u05D3 \u05D0\u05D7\u05E8\u05D5\u05DF"
        pagerPreviousPage="\u05D4\u05E7\u05D5\u05D3\u05DD" pagerNextPage="\u05D4\u05D1\u05D0"
        pagerPage="\u05E2\u05DE\u05D5\u05D3" pagerPageNumberInputTitle="\u05DE\u05E1\u05E4\u05E8 \u05E2\u05DE\u05D5\u05D3"
        noRecords="\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05D7\u05D1\u05D9\u05DC\u05D5\u05EA" loading="\u05D8\u05D5\u05E2\u05DF..."
        columnMenuFilter="\u05E1\u05E0\u05DF" columnMenuSort="\u05DE\u05D9\u05D5\u05DF" columnMenuColumns="\u05E2\u05DE\u05D5\u05D3\u05D5\u05EA"
        columnMenuSortAscending="\u05E2\u05D5\u05DC\u05D4" columnMenuSortDescending="\u05D9\u05D5\u05E8\u05D3"
        selectionCheckboxLabel="\u05D1\u05D7\u05E8 \u05E9\u05D5\u05E8\u05D4" selectAllCheckboxLabel="\u05D1\u05D7\u05E8 \u05D4\u05DB\u05DC" />

      <!-- Detail row \u2014 \u05EA\u05D9\u05D0\u05D5\u05E8 \u05D1\u05DC\u05D1\u05D3 -->
      <ng-template kendoGridDetailTemplate let-row>
        @if (row.Description) {
          <div class="pkg-detail-desc">
            <span class="df-label">\u05EA\u05D9\u05D0\u05D5\u05E8</span>
            <span class="df-val">{{ row.Description }}</span>
          </div>
        }
      </ng-template>

      <!-- \u05E7\u05D5\u05D3 \u05D7\u05D1\u05D9\u05DC\u05D4 -->
      <kendo-grid-column field="PackageCode" title="\u05E7\u05D5\u05D3" [width]="110">
        <ng-template kendoGridCellTemplate let-row>
          <code class="code-badge">{{ row.PackageCode }}</code>
        </ng-template>
      </kendo-grid-column>

      <!-- \u05E9\u05DD \u05D7\u05D1\u05D9\u05DC\u05D4 \u2014 \u05D2\u05DE\u05D9\u05E9 -->
      <kendo-grid-column field="PackageName" title="\u05E9\u05DD \u05D7\u05D1\u05D9\u05DC\u05D4" [minResizableWidth]="140">
        <ng-template kendoGridCellTemplate let-row>
          <span class="pkg-name">{{ row.PackageName }}</span>
        </ng-template>
      </kendo-grid-column>

      <!-- \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD -->
      <kendo-grid-column field="ProductCount" title="\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD" [width]="80">
        <ng-template kendoGridCellTemplate let-row>
          <span class="badge-count">{{ row.ProductCount }}</span>
        </ng-template>
      </kendo-grid-column>

      <!-- \u05DE\u05D7\u05D9\u05E8 \u05D7\u05D5\u05D3\u05E9\u05D9 -->
      <kendo-grid-column field="PriceMonthly" title="\u05D7\u05D5\u05D3\u05E9\u05D9 (\u20AA)" [width]="105">
        <ng-template kendoGridCellTemplate let-row>
          <span class="price-val">\u20AA{{ row.PriceMonthly | number:'1.0-0' }}</span>
        </ng-template>
      </kendo-grid-column>

      <!-- \u05DE\u05D7\u05D9\u05E8 \u05E9\u05E0\u05EA\u05D9 -->
      <kendo-grid-column field="PriceAnnual" title="\u05E9\u05E0\u05EA\u05D9 (\u20AA)" [width]="105">
        <ng-template kendoGridCellTemplate let-row>
          <span class="price-val">\u20AA{{ row.PriceAnnual | number:'1.0-0' }}</span>
        </ng-template>
      </kendo-grid-column>

      <!-- \u05D3\u05DE\u05D9 \u05D4\u05E7\u05DE\u05D4 -->
      <kendo-grid-column field="SetupFee" title="\u05D4\u05E7\u05DE\u05D4 (\u20AA)" [width]="95">
        <ng-template kendoGridCellTemplate let-row>
          <span class="price-val price-secondary">{{ row.SetupFee ? '\u20AA' + (row.SetupFee | number:'1.0-0') : '\u2014' }}</span>
        </ng-template>
      </kendo-grid-column>

      <!-- \u05D9\u05DE\u05D9 \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF -->
      <kendo-grid-column field="TrialDays" title="\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF" [width]="80">
        <ng-template kendoGridCellTemplate let-row>
          <span class="trial-badge">{{ row.TrialDays ? row.TrialDays + ' \u05D9\u05DE\u05D9\u05DD' : '\u2014' }}</span>
        </ng-template>
      </kendo-grid-column>

      <!-- \u05DE\u05E7\u05E1' \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD -->
      <kendo-grid-column field="MaxUsers" title="\u05DE\u05E7\u05E1' \u05DE\u05E9\u05EA'" [width]="100">
        <ng-template kendoGridCellTemplate let-row>
          <span class="cell-val">{{ row.MaxUsers ? row.MaxUsers : '\u05DC\u05DC\u05D0 \u05D4\u05D2\u05D1\u05DC\u05D4' }}</span>
        </ng-template>
      </kendo-grid-column>

      <!-- \u05E0\u05E8\u05D0\u05D5\u05EA -->
      <kendo-grid-column field="IsPublic" title="\u05E0\u05E8\u05D0\u05D5\u05EA" [width]="85">
        <ng-template kendoGridCellTemplate let-row>
          <span class="visibility-badge" [class.vis-public]="row.IsPublic" [class.vis-private]="!row.IsPublic">
            {{ row.IsPublic ? '\u{1F441} \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9' : '\u{1F512} \u05E4\u05E8\u05D8\u05D9' }}
          </span>
        </ng-template>
      </kendo-grid-column>

      <!-- \u05E1\u05D8\u05D8\u05D5\u05E1 -->
      <kendo-grid-column field="IsActive" title="\u05E1\u05D8\u05D8\u05D5\u05E1" [width]="90">
        <ng-template kendoGridCellTemplate let-row>
          <div class="status-dot-wrap">
            <span class="status-dot" [class.dot-active]="row.IsActive" [class.dot-inactive]="!row.IsActive"></span>
            <span class="status-label">{{ row.IsActive ? '\u05E4\u05E2\u05D9\u05DC' : '\u05DE\u05D5\u05E9\u05D4\u05D4' }}</span>
          </div>
        </ng-template>
      </kendo-grid-column>

      <!-- \u05E4\u05E2\u05D5\u05DC\u05D5\u05EA -->
      <kendo-grid-column title="" [width]="104" [sortable]="false" [resizable]="false" [columnMenu]="false">
        <ng-template kendoGridCellTemplate let-row let-rowIndex="rowIndex">
          <div class="row-actions">
            <button class="act-btn act-expand"
                    [class.expanded]="isExpanded(row.PackageID)"
                    [title]="isExpanded(row.PackageID) ? '\u05E1\u05D2\u05D5\u05E8' : '\u05E4\u05E8\u05D8\u05D9\u05DD'"
                    (click)="toggleDetail(row.PackageID, rowIndex)">
              <i class="pi" [class.pi-chevron-down]="!isExpanded(row.PackageID)" [class.pi-chevron-up]="isExpanded(row.PackageID)"></i>
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
  <app-package-dialog
    [pkg]="dialogPackage()"
    (saved)="onSaved()"
    (closed)="onClosed()" />
}
`, styles: ['/* src/app/features/catalog/packages/packages.component.scss */\n:host {\n  display: block;\n  width: 100%;\n}\n.pkg-page {\n  width: 100%;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  direction: rtl;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.header-titles {\n  flex: 1;\n}\n.header-titles h1 {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0;\n}\n.header-titles p {\n  font-size: 0.83rem;\n  color: var(--sf-text-secondary);\n  margin: 3px 0 0;\n}\n.toolbar {\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.export-btns {\n  display: flex;\n  gap: 0;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n}\n:host ::ng-deep .export-btns .k-button {\n  border: none !important;\n  border-radius: 0 !important;\n  background: var(--sf-bg-card) !important;\n  color: var(--sf-text-secondary) !important;\n  box-shadow: none !important;\n  padding: 6px 14px !important;\n  font-size: 0.82rem !important;\n  font-weight: 500 !important;\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n}\n:host ::ng-deep .export-btns .k-button:hover {\n  background: var(--sf-bg-hover) !important;\n}\n:host ::ng-deep .export-btns .k-button + .k-button {\n  border-inline-start: 1px solid var(--sf-border) !important;\n}\n:host ::ng-deep .export-btns .btn-excel:hover {\n  color: #16a34a !important;\n}\n:host ::ng-deep .export-btns .btn-pdf:hover {\n  color: #dc2626 !important;\n}\n.search-wrap {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 340px;\n  direction: rtl;\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 6px 12px;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.search-wrap:focus-within {\n  border-color: var(--sf-border-focus);\n  box-shadow: 0 0 0 3px rgba(13, 71, 255, 0.12);\n}\n.search-icon {\n  color: var(--sf-text-muted);\n  font-size: 18px;\n  width: 18px !important;\n  height: 18px !important;\n  flex-shrink: 0;\n}\n.search-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  color: var(--sf-text);\n  font-size: 0.875rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n.search-input::placeholder {\n  color: var(--sf-text-muted);\n}\n.state-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: var(--sf-text-secondary);\n}\n.state-box.error {\n  color: var(--sf-danger);\n}\n:host ::ng-deep .pkg-grid {\n  border-radius: 10px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04);\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n:host ::ng-deep .pkg-grid .k-grid-header th.k-header {\n  background: var(--sf-grid-hd-bg) !important;\n  color: var(--sf-grid-hd-color) !important;\n  font-weight: 700 !important;\n  font-size: 0.78rem !important;\n  text-align: right !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n  border-color: var(--sf-grid-hd-border) !important;\n  direction: rtl;\n}\n:host ::ng-deep .pkg-grid .k-grid-header {\n  background: var(--sf-grid-hd-bg) !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n}\n:host ::ng-deep .pkg-grid .k-column-menu-button {\n  color: var(--sf-grid-hd-color);\n  opacity: 0.7;\n}\n:host ::ng-deep .pkg-grid .k-column-menu-button:hover {\n  opacity: 1;\n}\n:host ::ng-deep .pkg-grid td.k-table-td {\n  text-align: right !important;\n  vertical-align: middle !important;\n  border-color: var(--sf-border) !important;\n  font-size: 0.875rem;\n  background: var(--sf-bg-card);\n  direction: rtl;\n  padding: 8px 12px !important;\n}\n:host ::ng-deep .pkg-grid tr.k-table-row:hover td {\n  background: var(--sf-bg-hover) !important;\n}\n:host ::ng-deep .pkg-grid .k-pager {\n  border-top: 1px solid var(--sf-border);\n  background: #f8fafc;\n  direction: rtl;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  font-size: 0.82rem;\n}\n:host ::ng-deep .pkg-grid .k-pager-wrap,\n:host ::ng-deep .pkg-grid .k-pager {\n  direction: rtl !important;\n}\n:host ::ng-deep .pkg-grid .k-detail-row > td {\n  background: var(--sf-bg) !important;\n  padding: 4px 0 12px !important;\n  border-bottom: 1px solid var(--sf-border) !important;\n}\n:host ::ng-deep .pkg-grid .k-sort-icon {\n  margin-right: 4px;\n}\n.pkg-name {\n  font-weight: 600;\n  color: var(--sf-text);\n  font-size: 0.88rem;\n}\n.code-badge {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.76rem;\n  background: var(--sf-bg);\n  border: 1px solid var(--sf-border);\n  border-radius: 5px;\n  padding: 2px 8px;\n  color: var(--sf-text-secondary);\n  direction: ltr;\n  unicode-bidi: embed;\n  display: inline-block;\n  white-space: nowrap;\n}\n.badge-count {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 10px;\n  border-radius: 20px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  background: var(--sf-bg);\n  border: 1px solid var(--sf-border);\n  color: var(--sf-text-secondary);\n}\n.price-val {\n  font-size: 0.84rem;\n  color: var(--sf-text);\n  font-weight: 500;\n  font-family: "Share Tech Mono", monospace;\n  direction: ltr;\n  display: inline-block;\n}\n.price-secondary {\n  color: var(--sf-text-secondary);\n  font-weight: 400;\n}\n.trial-badge {\n  font-size: 0.78rem;\n  color: #0891b2;\n  background: #e0f2fe;\n  padding: 2px 8px;\n  border-radius: 12px;\n  white-space: nowrap;\n}\n.cell-val {\n  font-size: 0.84rem;\n  color: var(--sf-text-secondary);\n}\n.visibility-badge {\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 12px;\n  white-space: nowrap;\n}\n.visibility-badge.vis-public {\n  background: #dcfce7;\n  color: #166534;\n}\n.visibility-badge.vis-private {\n  background: #f1f5f9;\n  color: var(--sf-text-muted);\n}\n.status-dot-wrap {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.status-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.dot-active {\n  background: #22c55e;\n  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.15);\n}\n.dot-inactive {\n  background: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);\n}\n.status-label {\n  font-size: 0.83rem;\n  color: #374151;\n}\n.row-actions {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.act-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.act-btn i {\n  font-size: 0.9rem;\n}\n.act-expand {\n  color: var(--sf-text-secondary);\n}\n.act-expand:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-primary);\n}\n.act-expand.expanded {\n  color: var(--sf-primary);\n  background: var(--sf-primary-light);\n}\n.act-lock {\n  color: #ef4444;\n}\n.act-lock:hover {\n  background: #fef2f2;\n}\n.act-unlock {\n  color: #16a34a;\n}\n.act-unlock:hover {\n  background: #f0fdf4;\n}\n.act-edit {\n  color: #3b82f6;\n}\n.act-edit:hover {\n  background: #eff6ff;\n}\n.pkg-detail-desc {\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n  padding: 10px 20px;\n  direction: rtl;\n}\n.df-label {\n  font-size: 0.76rem;\n  color: var(--sf-text-muted);\n  flex-shrink: 0;\n}\n.df-val {\n  font-size: 0.84rem;\n  color: var(--sf-text);\n}\n/*# sourceMappingURL=packages.component.css.map */\n'] }]
  }], () => [{ type: CatalogService }], { grid: [{
    type: ViewChild,
    args: [GridComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PackagesComponent, { className: "PackagesComponent", filePath: "src/app/features/catalog/packages/packages.component.ts", lineNumber: 26 });
})();
export {
  PackagesComponent
};
//# sourceMappingURL=chunk-ZGMYRIXF.js.map
