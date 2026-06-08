import {
  AuditService
} from "./chunk-5FRIPGHX.js";
import {
  RouterLink
} from "./chunk-6FLZKXJD.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-QZMRJPSG.js";
import {
  CellTemplateDirective,
  ColumnComponent2 as ColumnComponent,
  CustomMessagesComponent,
  DialogActionsComponent,
  DialogComponent,
  DialogModule,
  GridComponent,
  GridModule,
  NumericTextBoxComponent,
  NumericTextBoxModule,
  TextBoxComponent,
  TextBoxModule,
  orderBy
} from "./chunk-RXO44S6U.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-5RXIK7OL.js";
import {
  ButtonsModule
} from "./chunk-KKZNNEP2.js";
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-DEBWI7RP.js";

// src/app/features/audit/entity-types/audit-entity-types.component.ts
var _c0 = (a0, a1) => ({ data: a0, total: a1 });
var _c1 = () => [25, 50];
var _c2 = (a0) => ({ buttonCount: 5, info: true, type: "numeric", pageSizes: a0 });
var _c3 = () => ({ mode: "single", allowUnsort: false });
function AuditEntityTypesComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "mat-spinner", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 40);
  }
}
function AuditEntityTypesComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error());
  }
}
function AuditEntityTypesComponent_Conditional_22_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dataItem_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dataItem_r3.EntityTypeCode);
  }
}
function AuditEntityTypesComponent_Conditional_22_ng_template_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dataItem_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dataItem_r4.ModuleName);
  }
}
function AuditEntityTypesComponent_Conditional_22_ng_template_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AuditEntityTypesComponent_Conditional_22_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AuditEntityTypesComponent_Conditional_22_ng_template_5_Conditional_0_Template, 2, 1, "span", 26)(1, AuditEntityTypesComponent_Conditional_22_ng_template_5_Conditional_1_Template, 2, 0, "span", 27);
  }
  if (rf & 2) {
    const dataItem_r4 = ctx.$implicit;
    \u0275\u0275conditional(dataItem_r4.ModuleName ? 0 : 1);
  }
}
function AuditEntityTypesComponent_Conditional_22_ng_template_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4");
    \u0275\u0275elementEnd();
  }
}
function AuditEntityTypesComponent_Conditional_22_ng_template_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "\u05D0\u05E8\u05D2\u05D5\u05DF");
    \u0275\u0275elementEnd();
  }
}
function AuditEntityTypesComponent_Conditional_22_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AuditEntityTypesComponent_Conditional_22_ng_template_7_Conditional_0_Template, 2, 0, "span", 28)(1, AuditEntityTypesComponent_Conditional_22_ng_template_7_Conditional_1_Template, 2, 0, "span", 29);
  }
  if (rf & 2) {
    const dataItem_r5 = ctx.$implicit;
    \u0275\u0275conditional(dataItem_r5.IsPlatform ? 0 : 1);
  }
}
function AuditEntityTypesComponent_Conditional_22_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dataItem_r6 = ctx.$implicit;
    \u0275\u0275classProp("active", dataItem_r6.IsActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", dataItem_r6.IsActive ? "\u05E4\u05E2\u05D9\u05DC" : "\u05DE\u05D5\u05E9\u05D4\u05D4", " ");
  }
}
function AuditEntityTypesComponent_Conditional_22_ng_template_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function AuditEntityTypesComponent_Conditional_22_ng_template_11_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const dataItem_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(dataItem_r8));
    });
    \u0275\u0275element(1, "i", 33);
    \u0275\u0275elementEnd();
  }
}
function AuditEntityTypesComponent_Conditional_22_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AuditEntityTypesComponent_Conditional_22_ng_template_11_Conditional_0_Template, 2, 0, "button", 31);
  }
  if (rf & 2) {
    const dataItem_r8 = ctx.$implicit;
    \u0275\u0275conditional(!dataItem_r8.IsPlatform ? 0 : -1);
  }
}
function AuditEntityTypesComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "kendo-grid", 16);
    \u0275\u0275listener("pageChange", function AuditEntityTypesComponent_Conditional_22_Template_kendo_grid_pageChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageChange($event));
    })("sortChange", function AuditEntityTypesComponent_Conditional_22_Template_kendo_grid_sortChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSortChange($event));
    });
    \u0275\u0275elementStart(1, "kendo-grid-column", 17);
    \u0275\u0275template(2, AuditEntityTypesComponent_Conditional_22_ng_template_2_Template, 2, 1, "ng-template", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "kendo-grid-column", 19);
    \u0275\u0275elementStart(4, "kendo-grid-column", 20);
    \u0275\u0275template(5, AuditEntityTypesComponent_Conditional_22_ng_template_5_Template, 2, 1, "ng-template", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "kendo-grid-column", 21);
    \u0275\u0275template(7, AuditEntityTypesComponent_Conditional_22_ng_template_7_Template, 2, 1, "ng-template", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "kendo-grid-column", 22);
    \u0275\u0275template(9, AuditEntityTypesComponent_Conditional_22_ng_template_9_Template, 2, 3, "ng-template", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "kendo-grid-column", 23);
    \u0275\u0275template(11, AuditEntityTypesComponent_Conditional_22_ng_template_11_Template, 1, 1, "ng-template", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "kendo-grid-messages", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", \u0275\u0275pureFunction2(17, _c0, ctx_r0.pagedData, ctx_r0.gridData.length))("skip", ctx_r0.skip)("pageSize", ctx_r0.pageSize)("pageable", \u0275\u0275pureFunction1(21, _c2, \u0275\u0275pureFunction0(20, _c1)))("sortable", \u0275\u0275pureFunction0(23, _c3))("sort", ctx_r0.sort)("reorderable", true)("resizable", true)("columnMenu", true);
    \u0275\u0275advance();
    \u0275\u0275property("width", 150);
    \u0275\u0275advance(3);
    \u0275\u0275property("width", 160);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 110);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 80);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 70)("sortable", false)("resizable", false)("columnMenu", false);
  }
}
function AuditEntityTypesComponent_Conditional_23_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "\u05E7\u05D5\u05D3 \u05D9\u05D9\u05E9\u05D5\u05EA \u05D4\u05D5\u05D0 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
  }
}
function AuditEntityTypesComponent_Conditional_23_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "\u05E9\u05DD \u05D9\u05D9\u05E9\u05D5\u05EA \u05D4\u05D5\u05D0 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
  }
}
function AuditEntityTypesComponent_Conditional_23_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.saveError());
  }
}
function AuditEntityTypesComponent_Conditional_23_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 15);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 16);
  }
}
function AuditEntityTypesComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "kendo-dialog", 34);
    \u0275\u0275listener("close", function AuditEntityTypesComponent_Conditional_23_Template_kendo_dialog_close_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDialog());
    });
    \u0275\u0275elementStart(1, "form", 35)(2, "div", 36)(3, "label", 37);
    \u0275\u0275text(4, "\u05E7\u05D5\u05D3 \u05D9\u05D9\u05E9\u05D5\u05EA ");
    \u0275\u0275elementStart(5, "span", 38);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "kendo-textbox", 39);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(8, AuditEntityTypesComponent_Conditional_23_Conditional_8_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 36)(10, "label", 37);
    \u0275\u0275text(11, "\u05E9\u05DD \u05D9\u05D9\u05E9\u05D5\u05EA ");
    \u0275\u0275elementStart(12, "span", 38);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "kendo-textbox", 41);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(15, AuditEntityTypesComponent_Conditional_23_Conditional_15_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 36)(17, "label", 37);
    \u0275\u0275text(18, "\u05E9\u05DD \u05DE\u05D5\u05D3\u05D5\u05DC");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "kendo-textbox", 42);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 36)(21, "label", 37);
    \u0275\u0275text(22, "\u05E1\u05D3\u05E8 \u05EA\u05E6\u05D5\u05D2\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "kendo-numerictextbox", 43);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 36)(25, "label", 37);
    \u0275\u0275text(26, "\u05E1\u05D8\u05D8\u05D5\u05E1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 44)(28, "button", 45);
    \u0275\u0275listener("click", function AuditEntityTypesComponent_Conditional_23_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.form.get("isActive")?.setValue(true));
    });
    \u0275\u0275text(29, "\u2713 \u05E4\u05E2\u05D9\u05DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 45);
    \u0275\u0275listener("click", function AuditEntityTypesComponent_Conditional_23_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.form.get("isActive")?.setValue(false));
    });
    \u0275\u0275text(31, "\u2717 \u05DE\u05D5\u05E9\u05D4\u05D4");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(32, AuditEntityTypesComponent_Conditional_23_Conditional_32_Template, 2, 1, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "kendo-dialog-actions")(34, "div", 47)(35, "button", 48);
    \u0275\u0275listener("click", function AuditEntityTypesComponent_Conditional_23_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275conditionalCreate(36, AuditEntityTypesComponent_Conditional_23_Conditional_36_Template, 1, 1, "mat-spinner", 15);
    \u0275\u0275text(37, " \u2713 \u05E9\u05DE\u05D5\u05E8 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 49);
    \u0275\u0275listener("click", function AuditEntityTypesComponent_Conditional_23_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDialog());
    });
    \u0275\u0275text(39, "\u05D1\u05D9\u05D8\u05D5\u05DC");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.editingItem() ? "\u05E2\u05E8\u05D9\u05DB\u05EA \u05E1\u05D5\u05D2 \u05D9\u05D9\u05E9\u05D5\u05EA" : "\u05D4\u05D5\u05E1\u05E4\u05EA \u05E1\u05D5\u05D2 \u05D9\u05D9\u05E9\u05D5\u05EA")("width", 440)("minWidth", 340);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(6);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.get("entityTypeCode")?.invalid && ctx_r0.form.get("entityTypeCode")?.touched ? 8 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.get("entityTypeName")?.invalid && ctx_r0.form.get("entityTypeName")?.touched ? 15 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("format", "n0")("min", 0)("max", 999);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275classProp("seg-on", !!ctx_r0.form.get("isActive")?.value);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg-off", !ctx_r0.form.get("isActive")?.value);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.saveError() ? 32 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.saving() ? 36 : -1);
  }
}
var AuditEntityTypesComponent = class _AuditEntityTypesComponent {
  svc;
  fb;
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
  saving = signal(
    false,
    ...ngDevMode ? [{ debugName: "saving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  saveError = signal(
    "",
    ...ngDevMode ? [{ debugName: "saveError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  items = signal(
    [],
    ...ngDevMode ? [{ debugName: "items" }] : (
      /* istanbul ignore next */
      []
    )
  );
  gridData = [];
  skip = 0;
  pageSize = 25;
  sort = [{ field: "SortOrder", dir: "asc" }];
  searchTerm = "";
  dialogOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "dialogOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editingItem = signal(
    null,
    ...ngDevMode ? [{ debugName: "editingItem" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form;
  constructor(svc, fb) {
    this.svc = svc;
    this.fb = fb;
  }
  ngOnInit() {
    this.buildForm();
    this.load();
  }
  buildForm() {
    this.form = this.fb.group({
      entityTypeCode: ["", [Validators.required, Validators.maxLength(50)]],
      entityTypeName: ["", [Validators.required, Validators.maxLength(100)]],
      moduleName: ["", Validators.maxLength(100)],
      sortOrder: [0],
      isActive: [true]
    });
  }
  load() {
    this.loading.set(true);
    this.svc.getEntityTypes().subscribe({
      next: (r) => {
        this.items.set(r.data);
        this.applyFilter();
        this.loading.set(false);
      },
      error: () => {
        this.error.set("\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D8\u05E2\u05D9\u05E0\u05EA \u05E1\u05D5\u05D2\u05D9 \u05D9\u05D9\u05E9\u05D5\u05D9\u05D5\u05EA");
        this.loading.set(false);
      }
    });
  }
  applyFilter() {
    const q = this.searchTerm.toLowerCase();
    const filtered = q ? this.items().filter((i) => i.EntityTypeCode.toLowerCase().includes(q) || i.EntityTypeName.toLowerCase().includes(q)) : [...this.items()];
    this.gridData = orderBy(filtered, this.sort);
    this.skip = 0;
  }
  onSearch(val) {
    this.searchTerm = val;
    this.applyFilter();
  }
  onSortChange(s) {
    this.sort = s;
    this.applyFilter();
  }
  onPageChange(e) {
    this.skip = e.skip;
    this.pageSize = e.take;
  }
  get pagedData() {
    return this.gridData.slice(this.skip, this.skip + this.pageSize);
  }
  openAdd() {
    this.editingItem.set(null);
    this.form.reset({ entityTypeCode: "", entityTypeName: "", moduleName: "", sortOrder: 0, isActive: true });
    this.saveError.set("");
    this.dialogOpen.set(true);
  }
  openEdit(item) {
    if (item.IsPlatform)
      return;
    this.editingItem.set(item);
    this.form.patchValue({
      entityTypeCode: item.EntityTypeCode,
      entityTypeName: item.EntityTypeName,
      moduleName: item.ModuleName || "",
      sortOrder: item.SortOrder,
      isActive: item.IsActive
    });
    this.saveError.set("");
    this.dialogOpen.set(true);
  }
  closeDialog() {
    this.dialogOpen.set(false);
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    this.saveError.set("");
    const data = this.form.value;
    const editing = this.editingItem();
    const obs = editing ? this.svc.updateEntityType(editing.EntityTypeID, data) : this.svc.createEntityType(data);
    obs.subscribe({
      next: (r) => {
        if (r.success) {
          this.closeDialog();
          this.load();
        } else
          this.saveError.set(r.message || "\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05E9\u05DE\u05D9\u05E8\u05D4");
        this.saving.set(false);
      },
      error: () => {
        this.saveError.set("\u05E9\u05D2\u05D9\u05D0\u05EA \u05E9\u05E8\u05EA");
        this.saving.set(false);
      }
    });
  }
  static \u0275fac = function AuditEntityTypesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuditEntityTypesComponent)(\u0275\u0275directiveInject(AuditService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuditEntityTypesComponent, selectors: [["app-audit-entity-types"]], decls: 24, vars: 4, consts: [[1, "page-wrap"], [1, "page-header"], [1, "page-header-start"], ["routerLink", "/app/audit", 1, "back-link"], [1, "page-title"], [1, "page-subtitle"], [1, "btn-save", 3, "click"], [1, "toolbar"], [1, "search-wrap"], [1, "search-icon"], ["type", "text", "placeholder", "\u05D7\u05D9\u05E4\u05D5\u05E9...", 1, "search-input", 3, "input"], [1, "center-spinner"], [1, "error-box"], ["scrollable", "none", 1, "et-grid", 3, "data", "skip", "pageSize", "pageable", "sortable", "sort", "reorderable", "resizable", "columnMenu"], [3, "title", "width", "minWidth"], [3, "diameter"], ["scrollable", "none", 1, "et-grid", 3, "pageChange", "sortChange", "data", "skip", "pageSize", "pageable", "sortable", "sort", "reorderable", "resizable", "columnMenu"], ["field", "EntityTypeCode", "title", "\u05E7\u05D5\u05D3", 3, "width"], ["kendoGridCellTemplate", ""], ["field", "EntityTypeName", "title", "\u05E9\u05DD \u05D9\u05D9\u05E9\u05D5\u05EA"], ["field", "ModuleName", "title", "\u05DE\u05D5\u05D3\u05D5\u05DC", 3, "width"], ["field", "IsPlatform", "title", "\u05DE\u05E7\u05D5\u05E8", 3, "width"], ["field", "IsActive", "title", "\u05E4\u05E2\u05D9\u05DC", 3, "width"], ["title", "", 3, "width", "sortable", "resizable", "columnMenu"], ["pagerItemsPerPage", "\u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3", "pagerOf", "\u05DE\u05EA\u05D5\u05DA", "pagerItems", "\u05E8\u05E9\u05D5\u05DE\u05D5\u05EA", "columnMenuFilter", "\u05E1\u05E0\u05DF", "columnMenuSort", "\u05DE\u05D9\u05D5\u05DF", "columnMenuColumns", "\u05E2\u05DE\u05D5\u05D3\u05D5\u05EA", "columnMenuSortAscending", "\u05E2\u05D5\u05DC\u05D4", "columnMenuSortDescending", "\u05D9\u05D5\u05E8\u05D3", "noRecords", "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E1\u05D5\u05D2\u05D9 \u05D9\u05D9\u05E9\u05D5\u05D9\u05D5\u05EA", "loading", "\u05D8\u05D5\u05E2\u05DF..."], [1, "code-cell"], [1, "module-badge"], [1, "text-muted"], [1, "badge-platform"], [1, "badge-tenant"], [1, "active-badge"], ["title", "\u05E2\u05E8\u05D5\u05DA", 1, "act-btn", "act-edit"], ["title", "\u05E2\u05E8\u05D5\u05DA", 1, "act-btn", "act-edit", 3, "click"], [1, "pi", "pi-pencil"], [3, "close", "title", "width", "minWidth"], [1, "dialog-form", 3, "formGroup"], [1, "field-row"], [1, "field-label"], [1, "req"], ["formControlName", "entityTypeCode", "placeholder", "\u05DC\u05DE\u05E9\u05DC: INVOICE"], [1, "field-error"], ["formControlName", "entityTypeName", "placeholder", "\u05DC\u05DE\u05E9\u05DC: \u05D7\u05E9\u05D1\u05D5\u05E0\u05D9\u05EA"], ["formControlName", "moduleName", "placeholder", "\u05DC\u05DE\u05E9\u05DC: CRM"], ["formControlName", "sortOrder", 3, "format", "min", "max"], [1, "seg-ctrl"], ["type", "button", 1, "seg-btn", 3, "click"], [1, "save-error"], [1, "dialog-footer"], [1, "btn-save", 3, "click", "disabled"], [1, "btn-cancel", 3, "click"]], template: function AuditEntityTypesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3)(4, "mat-icon");
      \u0275\u0275text(5, "arrow_forward");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div")(7, "h1", 4);
      \u0275\u0275text(8, "\u05E1\u05D5\u05D2\u05D9 \u05D9\u05D9\u05E9\u05D5\u05D9\u05D5\u05EA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 5);
      \u0275\u0275text(10, "\u05E0\u05D9\u05D4\u05D5\u05DC \u05D8\u05D9\u05E4\u05D5\u05E1\u05D9 \u05D4\u05D9\u05D9\u05E9\u05D5\u05D9\u05D5\u05EA \u05D1\u05D9\u05D5\u05DE\u05DF \u05D4\u05E4\u05E2\u05D9\u05DC\u05D5\u05EA");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "button", 6);
      \u0275\u0275listener("click", function AuditEntityTypesComponent_Template_button_click_11_listener() {
        return ctx.openAdd();
      });
      \u0275\u0275elementStart(12, "mat-icon");
      \u0275\u0275text(13, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " \u05D4\u05D5\u05E1\u05E3 \u05D9\u05D9\u05E9\u05D5\u05EA ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 7)(16, "div", 8)(17, "mat-icon", 9);
      \u0275\u0275text(18, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "input", 10);
      \u0275\u0275listener("input", function AuditEntityTypesComponent_Template_input_input_19_listener($event) {
        return ctx.onSearch($event.target.value);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(20, AuditEntityTypesComponent_Conditional_20_Template, 2, 1, "div", 11);
      \u0275\u0275conditionalCreate(21, AuditEntityTypesComponent_Conditional_21_Template, 4, 1, "div", 12);
      \u0275\u0275conditionalCreate(22, AuditEntityTypesComponent_Conditional_22_Template, 13, 24, "kendo-grid", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(23, AuditEntityTypesComponent_Conditional_23_Template, 40, 16, "kendo-dialog", 14);
    }
    if (rf & 2) {
      \u0275\u0275advance(20);
      \u0275\u0275conditional(ctx.loading() ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 21 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() && !ctx.error() ? 22 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.dialogOpen() ? 23 : -1);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    \u0275NgNoValidate,
    NgControlStatus,
    NgControlStatusGroup,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    RouterLink,
    GridModule,
    GridComponent,
    CustomMessagesComponent,
    ColumnComponent,
    CellTemplateDirective,
    DialogModule,
    DialogComponent,
    DialogActionsComponent,
    TextBoxModule,
    TextBoxComponent,
    NumericTextBoxModule,
    NumericTextBoxComponent,
    ButtonsModule,
    MatIconModule,
    MatIcon,
    MatProgressSpinnerModule,
    MatProgressSpinner
  ], styles: ['\n.page-wrap[_ngcontent-%COMP%] {\n  padding: 24px;\n  direction: rtl;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  gap: 12px;\n}\n.page-header-start[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  border: 1px solid var(--sf-border);\n  background: var(--sf-bg-card);\n  color: var(--sf-text-secondary);\n  text-decoration: none;\n  transition: all 0.15s;\n}\n.back-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0 0 2px;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--sf-text-secondary);\n}\n.btn-save[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border: none;\n  border-radius: 8px;\n  background: #f97316;\n  color: #fff;\n  font-size: 0.84rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-save[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn-save[_ngcontent-%COMP%]:hover {\n  background: #ea6c0a;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex: 1;\n  max-width: 360px;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  color: var(--sf-text-muted);\n  font-size: 18px;\n  pointer-events: none;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 36px 8px 10px;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  background: var(--sf-bg-card);\n  color: var(--sf-text);\n  font-size: 0.84rem;\n  outline: none;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--sf-border-focus);\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--sf-text-muted);\n}\n.center-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px 0;\n}\n.error-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 20px;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  color: #b91c1c;\n  font-size: 0.88rem;\n}\n.et-grid[_ngcontent-%COMP%]   .k-grid-header[_ngcontent-%COMP%]   th.k-header[_ngcontent-%COMP%] {\n  background: var(--sf-grid-hd-bg) !important;\n  color: var(--sf-grid-hd-color) !important;\n  font-weight: 700 !important;\n  font-size: 0.78rem !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n  border-color: var(--sf-grid-hd-border) !important;\n}\n.et-grid[_ngcontent-%COMP%]   .k-grid-header[_ngcontent-%COMP%] {\n  background: var(--sf-grid-hd-bg) !important;\n}\n.et-grid[_ngcontent-%COMP%]   .k-column-menu-button[_ngcontent-%COMP%] {\n  color: var(--sf-grid-hd-color);\n  opacity: 0.7;\n}\n.code-cell[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.8rem;\n  background: var(--sf-bg);\n  padding: 2px 6px;\n  border-radius: 4px;\n  color: var(--sf-text);\n}\n.module-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: #f0f9ff;\n  color: #0369a1;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--sf-text-muted);\n}\n.badge-platform[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  background: #ede9fe;\n  color: #6d28d9;\n}\n.badge-tenant[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  background: #ecfdf5;\n  color: #065f46;\n}\n.active-badge[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--sf-text-muted);\n}\n.active-badge.active[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.row-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.act-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.act-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.act-edit[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.act-edit[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n}\n.dialog-form[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.field-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n}\n.req[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #ef4444;\n}\n.save-error[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 6px;\n  color: #b91c1c;\n  font-size: 0.82rem;\n}\n.dialog-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: flex-start;\n  gap: 8px;\n  width: 100%;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  background: var(--sf-bg-card);\n  color: var(--sf-text);\n  font-size: 0.84rem;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n}\n  .k-dialog-actions {\n  direction: rtl !important;\n  padding: 12px 16px !important;\n}\n.seg-ctrl[_ngcontent-%COMP%] {\n  display: inline-flex;\n  direction: rtl;\n  align-self: flex-start;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.seg-btn[_ngcontent-%COMP%] {\n  padding: 7px 20px;\n  font-size: 0.82rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  border: none;\n  background: var(--sf-bg);\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.seg-btn[_ngcontent-%COMP%]    + .seg-btn[_ngcontent-%COMP%] {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.seg-btn[_ngcontent-%COMP%]:hover:not(.seg-on):not(.seg-off) {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.seg-btn.seg-on[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: #fff;\n  font-weight: 600;\n}\n.seg-btn.seg-off[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #fff;\n  font-weight: 600;\n}\n/*# sourceMappingURL=audit-entity-types.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditEntityTypesComponent, [{
    type: Component,
    args: [{ selector: "app-audit-entity-types", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterLink,
      GridModule,
      DialogModule,
      TextBoxModule,
      NumericTextBoxModule,
      ButtonsModule,
      MatIconModule,
      MatProgressSpinnerModule
    ], template: `<div class="page-wrap">

  <!-- Header -->
  <div class="page-header">
    <div class="page-header-start">
      <a class="back-link" routerLink="/app/audit">
        <mat-icon>arrow_forward</mat-icon>
      </a>
      <div>
        <h1 class="page-title">\u05E1\u05D5\u05D2\u05D9 \u05D9\u05D9\u05E9\u05D5\u05D9\u05D5\u05EA</h1>
        <span class="page-subtitle">\u05E0\u05D9\u05D4\u05D5\u05DC \u05D8\u05D9\u05E4\u05D5\u05E1\u05D9 \u05D4\u05D9\u05D9\u05E9\u05D5\u05D9\u05D5\u05EA \u05D1\u05D9\u05D5\u05DE\u05DF \u05D4\u05E4\u05E2\u05D9\u05DC\u05D5\u05EA</span>
      </div>
    </div>
    <button class="btn-save" (click)="openAdd()">
      <mat-icon>add</mat-icon>
      \u05D4\u05D5\u05E1\u05E3 \u05D9\u05D9\u05E9\u05D5\u05EA
    </button>
  </div>

  <!-- Toolbar -->
  <div class="toolbar">
    <div class="search-wrap">
      <mat-icon class="search-icon">search</mat-icon>
      <input class="search-input" type="text" placeholder="\u05D7\u05D9\u05E4\u05D5\u05E9..."
             (input)="onSearch($any($event.target).value)" />
    </div>
  </div>

  @if (loading()) {
    <div class="center-spinner"><mat-spinner [diameter]="40"></mat-spinner></div>
  }
  @if (error()) {
    <div class="error-box"><mat-icon>error_outline</mat-icon> {{ error() }}</div>
  }

  @if (!loading() && !error()) {
    <kendo-grid
      class="et-grid"
      [data]="{ data: pagedData, total: gridData.length }"
      [skip]="skip" [pageSize]="pageSize"
      [pageable]="{ buttonCount: 5, info: true, type: 'numeric', pageSizes: [25, 50] }"
      [sortable]="{ mode: 'single', allowUnsort: false }"
      [sort]="sort"
      [reorderable]="true" [resizable]="true"
      [columnMenu]="true"
      scrollable="none"
      (pageChange)="onPageChange($event)"
      (sortChange)="onSortChange($event)">

      <!-- Code -->
      <kendo-grid-column field="EntityTypeCode" title="\u05E7\u05D5\u05D3" [width]="150">
        <ng-template kendoGridCellTemplate let-dataItem>
          <code class="code-cell">{{ dataItem.EntityTypeCode }}</code>
        </ng-template>
      </kendo-grid-column>

      <!-- Name -->
      <kendo-grid-column field="EntityTypeName" title="\u05E9\u05DD \u05D9\u05D9\u05E9\u05D5\u05EA">
      </kendo-grid-column>

      <!-- Module -->
      <kendo-grid-column field="ModuleName" title="\u05DE\u05D5\u05D3\u05D5\u05DC" [width]="160">
        <ng-template kendoGridCellTemplate let-dataItem>
          @if (dataItem.ModuleName) {
            <span class="module-badge">{{ dataItem.ModuleName }}</span>
          } @else {
            <span class="text-muted">\u2014</span>
          }
        </ng-template>
      </kendo-grid-column>

      <!-- Source -->
      <kendo-grid-column field="IsPlatform" title="\u05DE\u05E7\u05D5\u05E8" [width]="110">
        <ng-template kendoGridCellTemplate let-dataItem>
          @if (dataItem.IsPlatform) {
            <span class="badge-platform">\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4</span>
          } @else {
            <span class="badge-tenant">\u05D0\u05E8\u05D2\u05D5\u05DF</span>
          }
        </ng-template>
      </kendo-grid-column>

      <!-- Active -->
      <kendo-grid-column field="IsActive" title="\u05E4\u05E2\u05D9\u05DC" [width]="80">
        <ng-template kendoGridCellTemplate let-dataItem>
          <span class="active-badge" [class.active]="dataItem.IsActive">
            {{ dataItem.IsActive ? '\u05E4\u05E2\u05D9\u05DC' : '\u05DE\u05D5\u05E9\u05D4\u05D4' }}
          </span>
        </ng-template>
      </kendo-grid-column>

      <!-- Actions -->
      <kendo-grid-column title="" [width]="70" [sortable]="false" [resizable]="false" [columnMenu]="false">
        <ng-template kendoGridCellTemplate let-dataItem>
          @if (!dataItem.IsPlatform) {
            <button class="act-btn act-edit" (click)="openEdit(dataItem)" title="\u05E2\u05E8\u05D5\u05DA">
              <i class="pi pi-pencil"></i>
            </button>
          }
        </ng-template>
      </kendo-grid-column>

      <kendo-grid-messages
        pagerItemsPerPage="\u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3" pagerOf="\u05DE\u05EA\u05D5\u05DA" pagerItems="\u05E8\u05E9\u05D5\u05DE\u05D5\u05EA"
        columnMenuFilter="\u05E1\u05E0\u05DF" columnMenuSort="\u05DE\u05D9\u05D5\u05DF" columnMenuColumns="\u05E2\u05DE\u05D5\u05D3\u05D5\u05EA"
        columnMenuSortAscending="\u05E2\u05D5\u05DC\u05D4" columnMenuSortDescending="\u05D9\u05D5\u05E8\u05D3"
        noRecords="\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E1\u05D5\u05D2\u05D9 \u05D9\u05D9\u05E9\u05D5\u05D9\u05D5\u05EA" loading="\u05D8\u05D5\u05E2\u05DF..." />
    </kendo-grid>
  }

</div>

<!-- Dialog -->
@if (dialogOpen()) {
  <kendo-dialog
    [title]="editingItem() ? '\u05E2\u05E8\u05D9\u05DB\u05EA \u05E1\u05D5\u05D2 \u05D9\u05D9\u05E9\u05D5\u05EA' : '\u05D4\u05D5\u05E1\u05E4\u05EA \u05E1\u05D5\u05D2 \u05D9\u05D9\u05E9\u05D5\u05EA'"
    [width]="440"
    [minWidth]="340"
    (close)="closeDialog()">

    <form [formGroup]="form" class="dialog-form">

      <div class="field-row">
        <label class="field-label">\u05E7\u05D5\u05D3 \u05D9\u05D9\u05E9\u05D5\u05EA <span class="req">*</span></label>
        <kendo-textbox formControlName="entityTypeCode" placeholder="\u05DC\u05DE\u05E9\u05DC: INVOICE" />
        @if (form.get('entityTypeCode')?.invalid && form.get('entityTypeCode')?.touched) {
          <span class="field-error">\u05E7\u05D5\u05D3 \u05D9\u05D9\u05E9\u05D5\u05EA \u05D4\u05D5\u05D0 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4</span>
        }
      </div>

      <div class="field-row">
        <label class="field-label">\u05E9\u05DD \u05D9\u05D9\u05E9\u05D5\u05EA <span class="req">*</span></label>
        <kendo-textbox formControlName="entityTypeName" placeholder="\u05DC\u05DE\u05E9\u05DC: \u05D7\u05E9\u05D1\u05D5\u05E0\u05D9\u05EA" />
        @if (form.get('entityTypeName')?.invalid && form.get('entityTypeName')?.touched) {
          <span class="field-error">\u05E9\u05DD \u05D9\u05D9\u05E9\u05D5\u05EA \u05D4\u05D5\u05D0 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4</span>
        }
      </div>

      <div class="field-row">
        <label class="field-label">\u05E9\u05DD \u05DE\u05D5\u05D3\u05D5\u05DC</label>
        <kendo-textbox formControlName="moduleName" placeholder="\u05DC\u05DE\u05E9\u05DC: CRM" />
      </div>

      <div class="field-row">
        <label class="field-label">\u05E1\u05D3\u05E8 \u05EA\u05E6\u05D5\u05D2\u05D4</label>
        <kendo-numerictextbox formControlName="sortOrder" [format]="'n0'" [min]="0" [max]="999" />
      </div>

      <div class="field-row">
        <label class="field-label">\u05E1\u05D8\u05D8\u05D5\u05E1</label>
        <div class="seg-ctrl">
          <button type="button" class="seg-btn"
                  [class.seg-on]="!!form.get('isActive')?.value"
                  (click)="form.get('isActive')?.setValue(true)">\u2713 \u05E4\u05E2\u05D9\u05DC</button>
          <button type="button" class="seg-btn"
                  [class.seg-off]="!form.get('isActive')?.value"
                  (click)="form.get('isActive')?.setValue(false)">\u2717 \u05DE\u05D5\u05E9\u05D4\u05D4</button>
        </div>
      </div>

      @if (saveError()) {
        <div class="save-error">{{ saveError() }}</div>
      }

    </form>

    <kendo-dialog-actions>
      <div class="dialog-footer">
        <button class="btn-save" (click)="save()" [disabled]="saving()">
          @if (saving()) { <mat-spinner [diameter]="16"></mat-spinner> }
          \u2713 \u05E9\u05DE\u05D5\u05E8
        </button>
        <button class="btn-cancel" (click)="closeDialog()">\u05D1\u05D9\u05D8\u05D5\u05DC</button>
      </div>
    </kendo-dialog-actions>
  </kendo-dialog>
}
`, styles: ['/* src/app/features/audit/entity-types/audit-entity-types.component.scss */\n.page-wrap {\n  padding: 24px;\n  direction: rtl;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  gap: 12px;\n}\n.page-header-start {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.back-link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  border: 1px solid var(--sf-border);\n  background: var(--sf-bg-card);\n  color: var(--sf-text-secondary);\n  text-decoration: none;\n  transition: all 0.15s;\n}\n.back-link mat-icon {\n  font-size: 20px;\n}\n.back-link:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.page-title {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0 0 2px;\n}\n.page-subtitle {\n  font-size: 0.8rem;\n  color: var(--sf-text-secondary);\n}\n.btn-save {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border: none;\n  border-radius: 8px;\n  background: #f97316;\n  color: #fff;\n  font-size: 0.84rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-save mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn-save:hover {\n  background: #ea6c0a;\n}\n.btn-save:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.toolbar {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.search-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex: 1;\n  max-width: 360px;\n}\n.search-icon {\n  position: absolute;\n  right: 10px;\n  color: var(--sf-text-muted);\n  font-size: 18px;\n  pointer-events: none;\n}\n.search-input {\n  width: 100%;\n  padding: 8px 36px 8px 10px;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  background: var(--sf-bg-card);\n  color: var(--sf-text);\n  font-size: 0.84rem;\n  outline: none;\n}\n.search-input:focus {\n  border-color: var(--sf-border-focus);\n}\n.search-input::placeholder {\n  color: var(--sf-text-muted);\n}\n.center-spinner {\n  display: flex;\n  justify-content: center;\n  padding: 60px 0;\n}\n.error-box {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 20px;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  color: #b91c1c;\n  font-size: 0.88rem;\n}\n.et-grid .k-grid-header th.k-header {\n  background: var(--sf-grid-hd-bg) !important;\n  color: var(--sf-grid-hd-color) !important;\n  font-weight: 700 !important;\n  font-size: 0.78rem !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n  border-color: var(--sf-grid-hd-border) !important;\n}\n.et-grid .k-grid-header {\n  background: var(--sf-grid-hd-bg) !important;\n}\n.et-grid .k-column-menu-button {\n  color: var(--sf-grid-hd-color);\n  opacity: 0.7;\n}\n.code-cell {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.8rem;\n  background: var(--sf-bg);\n  padding: 2px 6px;\n  border-radius: 4px;\n  color: var(--sf-text);\n}\n.module-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: #f0f9ff;\n  color: #0369a1;\n}\n.text-muted {\n  color: var(--sf-text-muted);\n}\n.badge-platform {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  background: #ede9fe;\n  color: #6d28d9;\n}\n.badge-tenant {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  background: #ecfdf5;\n  color: #065f46;\n}\n.active-badge {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--sf-text-muted);\n}\n.active-badge.active {\n  color: #059669;\n}\n.row-actions {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.act-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.act-btn i {\n  font-size: 0.9rem;\n}\n.act-edit {\n  color: #3b82f6;\n}\n.act-edit:hover {\n  background: #eff6ff;\n}\n.dialog-form {\n  padding: 8px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.field-row {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field-label {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n}\n.req {\n  color: #ef4444;\n}\n.field-error {\n  font-size: 0.76rem;\n  color: #ef4444;\n}\n.save-error {\n  padding: 10px 14px;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 6px;\n  color: #b91c1c;\n  font-size: 0.82rem;\n}\n.dialog-footer {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: flex-start;\n  gap: 8px;\n  width: 100%;\n}\n.btn-cancel {\n  padding: 8px 18px;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  background: var(--sf-bg-card);\n  color: var(--sf-text);\n  font-size: 0.84rem;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-cancel:hover {\n  background: var(--sf-bg-hover);\n}\n::ng-deep .k-dialog-actions {\n  direction: rtl !important;\n  padding: 12px 16px !important;\n}\n.seg-ctrl {\n  display: inline-flex;\n  direction: rtl;\n  align-self: flex-start;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.seg-btn {\n  padding: 7px 20px;\n  font-size: 0.82rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  border: none;\n  background: var(--sf-bg);\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.seg-btn + .seg-btn {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.seg-btn:hover:not(.seg-on):not(.seg-off) {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.seg-btn.seg-on {\n  background: #10b981;\n  color: #fff;\n  font-weight: 600;\n}\n.seg-btn.seg-off {\n  background: #ef4444;\n  color: #fff;\n  font-weight: 600;\n}\n/*# sourceMappingURL=audit-entity-types.component.css.map */\n'] }]
  }], () => [{ type: AuditService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuditEntityTypesComponent, { className: "AuditEntityTypesComponent", filePath: "src/app/features/audit/entity-types/audit-entity-types.component.ts", lineNumber: 28 });
})();

export {
  AuditEntityTypesComponent
};
//# sourceMappingURL=chunk-73UHOZ57.js.map
