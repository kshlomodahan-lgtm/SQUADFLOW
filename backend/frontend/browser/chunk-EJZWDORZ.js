import {
  AuditService
} from "./chunk-5FRIPGHX.js";
import {
  AuthService
} from "./chunk-3N4QSD24.js";
import {
  RouterLink
} from "./chunk-6FLZKXJD.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-QZMRJPSG.js";
import "./chunk-FAI5CTFG.js";
import {
  CellTemplateDirective,
  ColumnComponent2 as ColumnComponent,
  CustomMessagesComponent,
  DatePickerComponent,
  DatePickerModule,
  DetailTemplateDirective,
  DropDownListComponent,
  DropDownListModule,
  GridComponent,
  GridModule
} from "./chunk-RXO44S6U.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-5RXIK7OL.js";
import {
  ButtonsModule
} from "./chunk-KKZNNEP2.js";
import "./chunk-EONFWV3N.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-4QF53X3W.js";
import {
  CommonModule,
  Component,
  DatePipe,
  NgClass,
  ViewChild,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-DEBWI7RP.js";

// src/app/features/audit/audit.component.ts
var _c0 = (a0, a1) => ({ data: a0, total: a1 });
var _c1 = () => [25, 50, 100];
var _c2 = (a0) => ({ buttonCount: 5, info: true, type: "numeric", pageSizes: a0 });
function AuditComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "a", 22)(2, "mat-icon");
    \u0275\u0275text(3, "tune");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u05E1\u05D5\u05D2\u05D9 \u05E4\u05E2\u05D5\u05DC\u05D5\u05EA ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 23)(6, "mat-icon");
    \u0275\u0275text(7, "schema");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " \u05E1\u05D5\u05D2\u05D9 \u05D9\u05D9\u05E9\u05D5\u05D9\u05D5\u05EA ");
    \u0275\u0275elementEnd()();
  }
}
function AuditComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "mat-spinner", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 40);
  }
}
function AuditComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error(), " ");
  }
}
function AuditComponent_Conditional_46_ng_template_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 41)(2, "div", 42);
    \u0275\u0275text(3, "\u05DC\u05E4\u05E0\u05D9 \u05D4\u05E9\u05D9\u05E0\u05D5\u05D9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "pre", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 41)(7, "div", 42);
    \u0275\u0275text(8, "\u05D0\u05D7\u05E8\u05D9 \u05D4\u05E9\u05D9\u05E0\u05D5\u05D9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "pre", 44);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dataItem_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatJson(dataItem_r3.OldValue) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatJson(dataItem_r3.NewValue) || "\u2014");
  }
}
function AuditComponent_Conditional_46_ng_template_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "mat-icon");
    \u0275\u0275text(2, "info_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u05D0\u05D9\u05DF \u05E0\u05EA\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E0\u05D5\u05D9 \u05DC\u05E8\u05E9\u05D5\u05DE\u05D4 \u05D6\u05D5 ");
    \u0275\u0275elementEnd();
  }
}
function AuditComponent_Conditional_46_ng_template_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dataItem_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Session: ", dataItem_r3.SessionID);
  }
}
function AuditComponent_Conditional_46_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275conditionalCreate(1, AuditComponent_Conditional_46_ng_template_1_Conditional_1_Template, 11, 2, "div", 38)(2, AuditComponent_Conditional_46_ng_template_1_Conditional_2_Template, 4, 0, "div", 39);
    \u0275\u0275conditionalCreate(3, AuditComponent_Conditional_46_ng_template_1_Conditional_3_Template, 2, 1, "div", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dataItem_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(dataItem_r3.OldValue || dataItem_r3.NewValue ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(dataItem_r3.SessionID ? 3 : -1);
  }
}
function AuditComponent_Conditional_46_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "button", 46);
    \u0275\u0275listener("click", function AuditComponent_Conditional_46_ng_template_3_Template_button_click_1_listener() {
      const ctx_r4 = \u0275\u0275restoreView(_r4);
      const dataItem_r6 = ctx_r4.$implicit;
      const rowIndex_r7 = ctx_r4.rowIndex;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleDetail(dataItem_r6, rowIndex_r7));
    });
    \u0275\u0275element(2, "i", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dataItem_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", ctx_r0.isExpanded(dataItem_r6.AuditID));
    \u0275\u0275property("title", ctx_r0.isExpanded(dataItem_r6.AuditID) ? "\u05E1\u05D2\u05D5\u05E8" : "\u05E4\u05E8\u05D8\u05D9\u05DD");
    \u0275\u0275advance();
    \u0275\u0275classProp("pi-chevron-down", !ctx_r0.isExpanded(dataItem_r6.AuditID))("pi-chevron-up", ctx_r0.isExpanded(dataItem_r6.AuditID));
  }
}
function AuditComponent_Conditional_46_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dataItem_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dataItem_r8.IPAddress || "\u2014");
  }
}
function AuditComponent_Conditional_46_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dataItem_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.severityClass(dataItem_r9.Severity));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.severityLabel(dataItem_r9.Severity), " ");
  }
}
function AuditComponent_Conditional_46_ng_template_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dataItem_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", dataItem_r10.EntityID);
  }
}
function AuditComponent_Conditional_46_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, AuditComponent_Conditional_46_ng_template_9_Conditional_2_Template, 2, 1, "span", 51);
  }
  if (rf & 2) {
    const dataItem_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dataItem_r10.EntityName || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275conditional(dataItem_r10.EntityID ? 2 : -1);
  }
}
function AuditComponent_Conditional_46_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dataItem_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dataItem_r11.EntityTypeName || dataItem_r11.EntityTypeCode);
  }
}
function AuditComponent_Conditional_46_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dataItem_r12 = ctx.$implicit;
    \u0275\u0275styleProp("background", dataItem_r12.BadgeColor || "#64748b");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", dataItem_r12.ActionTypeName || dataItem_r12.ActionTypeCode, " ");
  }
}
function AuditComponent_Conditional_46_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "span", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dataItem_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((dataItem_r13.UserName || "?").charAt(0).toUpperCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dataItem_r13.UserName || "\u05D0\u05E0\u05D5\u05E0\u05D9\u05DE\u05D9");
  }
}
function AuditComponent_Conditional_46_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dataItem_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, dataItem_r14.CreatedAt, "dd/MM/yyyy HH:mm:ss"));
  }
}
function AuditComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "kendo-grid", 25);
    \u0275\u0275listener("pageChange", function AuditComponent_Conditional_46_Template_kendo_grid_pageChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageChange($event));
    });
    \u0275\u0275template(1, AuditComponent_Conditional_46_ng_template_1_Template, 4, 2, "ng-template", 26);
    \u0275\u0275elementStart(2, "kendo-grid-column", 27);
    \u0275\u0275template(3, AuditComponent_Conditional_46_ng_template_3_Template, 3, 7, "ng-template", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "kendo-grid-column", 29);
    \u0275\u0275template(5, AuditComponent_Conditional_46_ng_template_5_Template, 2, 1, "ng-template", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "kendo-grid-column", 30);
    \u0275\u0275template(7, AuditComponent_Conditional_46_ng_template_7_Template, 2, 2, "ng-template", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "kendo-grid-column", 31);
    \u0275\u0275template(9, AuditComponent_Conditional_46_ng_template_9_Template, 3, 2, "ng-template", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "kendo-grid-column", 32);
    \u0275\u0275template(11, AuditComponent_Conditional_46_ng_template_11_Template, 2, 1, "ng-template", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "kendo-grid-column", 33);
    \u0275\u0275template(13, AuditComponent_Conditional_46_ng_template_13_Template, 2, 3, "ng-template", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "kendo-grid-column", 34);
    \u0275\u0275template(15, AuditComponent_Conditional_46_ng_template_15_Template, 5, 2, "ng-template", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "kendo-grid-column", 35);
    \u0275\u0275template(17, AuditComponent_Conditional_46_ng_template_17_Template, 3, 4, "ng-template", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "kendo-grid-messages", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", \u0275\u0275pureFunction2(19, _c0, ctx_r0.items(), ctx_r0.total()))("skip", ctx_r0.skip)("pageSize", ctx_r0.pageSize)("pageable", \u0275\u0275pureFunction1(23, _c2, \u0275\u0275pureFunction0(22, _c1)))("sortable", false)("reorderable", true)("resizable", true)("columnMenu", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 50)("sortable", false)("resizable", false)("columnMenu", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 135);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 100)("columnMenu", false);
    \u0275\u0275advance(4);
    \u0275\u0275property("width", 130);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 155);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 150);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 165);
  }
}
var AuditComponent = class _AuditComponent {
  svc;
  auth;
  grid;
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
  items = signal(
    [],
    ...ngDevMode ? [{ debugName: "items" }] : (
      /* istanbul ignore next */
      []
    )
  );
  total = signal(
    0,
    ...ngDevMode ? [{ debugName: "total" }] : (
      /* istanbul ignore next */
      []
    )
  );
  skip = 0;
  pageSize = 25;
  dateFrom = null;
  dateTo = null;
  selectedActionType = "";
  selectedEntityType = "";
  selectedSeverity = "";
  searchText = "";
  actionTypeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "actionTypeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  entityTypeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "entityTypeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  severityOptions = [
    { text: "All", value: "" },
    { text: "INFO", value: "INFO" },
    { text: "WARN", value: "WARN" },
    { text: "LOW", value: "LOW" },
    { text: "MEDIUM", value: "MEDIUM" },
    { text: "HIGH", value: "HIGH" },
    { text: "CRITICAL", value: "CRITICAL" }
  ];
  isSuperAdmin = signal(
    false,
    ...ngDevMode ? [{ debugName: "isSuperAdmin" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor(svc, auth) {
    this.svc = svc;
    this.auth = auth;
    this.isSuperAdmin.set(this.auth.user()?.roleId === 1);
  }
  ngOnInit() {
    this.loadDropdowns();
    this.loadData();
  }
  loadDropdowns() {
    this.svc.getActionTypes().subscribe({
      next: (r) => this.actionTypeOptions.set([
        { code: "", name: "\u05DB\u05DC \u05D4\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA" },
        ...r.data.map((a) => ({ code: a.ActionTypeCode, name: a.ActionTypeName }))
      ])
    });
    this.svc.getEntityTypes().subscribe({
      next: (r) => this.entityTypeOptions.set([
        { code: "", name: "\u05DB\u05DC \u05D4\u05D9\u05D9\u05E9\u05D5\u05D9\u05D5\u05EA" },
        ...r.data.map((e) => ({ code: e.EntityTypeCode, name: e.EntityTypeName }))
      ])
    });
  }
  loadData() {
    this.loading.set(true);
    this.error.set("");
    const filter = {
      dateFrom: this.dateFrom ? this.dateFrom.toISOString() : null,
      dateTo: this.dateTo ? this.dateTo.toISOString() : null,
      actionType: this.selectedActionType || null,
      entityType: this.selectedEntityType || null,
      severity: this.selectedSeverity || null,
      search: this.searchText || null,
      page: Math.floor(this.skip / this.pageSize) + 1,
      pageSize: this.pageSize
    };
    this.svc.getList(filter).subscribe({
      next: (r) => {
        this.items.set(r.data ?? []);
        this.total.set(r.total ?? 0);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D8\u05E2\u05D9\u05E0\u05EA \u05D9\u05D5\u05DE\u05DF \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA");
        this.loading.set(false);
      }
    });
  }
  onPageChange(e) {
    this.skip = e.skip;
    this.pageSize = e.take;
    this.loadData();
  }
  onFilterChange() {
    this.skip = 0;
    this.loadData();
  }
  onSearch(value) {
    this.searchText = value;
    this.skip = 0;
    this.loadData();
  }
  clearFilters() {
    this.dateFrom = null;
    this.dateTo = null;
    this.selectedActionType = "";
    this.selectedEntityType = "";
    this.selectedSeverity = "";
    this.searchText = "";
    this.skip = 0;
    this.loadData();
  }
  severityClass(s) {
    return { INFO: "sev-info", WARN: "sev-warn", LOW: "sev-low", MEDIUM: "sev-medium", HIGH: "sev-high", CRITICAL: "sev-critical" }[s] ?? "sev-info";
  }
  severityLabel(s) {
    return s || "INFO";
  }
  formatJson(val) {
    if (!val)
      return "";
    try {
      return JSON.stringify(JSON.parse(val), null, 2);
    } catch {
      return val;
    }
  }
  expandedIds = /* @__PURE__ */ new Set();
  toggleDetail(item, rowIndex) {
    const abs = this.skip + rowIndex;
    if (this.expandedIds.has(item.AuditID)) {
      this.grid.collapseRow(abs);
      this.expandedIds.delete(item.AuditID);
    } else {
      this.grid.expandRow(abs);
      this.expandedIds.add(item.AuditID);
    }
  }
  isExpanded(id) {
    return this.expandedIds.has(id);
  }
  hasValues(item) {
    return !!(item.OldValue || item.NewValue);
  }
  static \u0275fac = function AuditComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuditComponent)(\u0275\u0275directiveInject(AuditService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuditComponent, selectors: [["app-audit"]], viewQuery: function AuditComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(GridComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.grid = _t.first);
    }
  }, decls: 47, vars: 18, consts: [[1, "page-wrap"], [1, "page-header"], [1, "page-header-start"], [1, "page-title"], [1, "page-subtitle"], [1, "page-header-end"], [1, "filter-bar"], [1, "filter-row"], [1, "filter-group"], [1, "filter-label"], ["placeholder", "\u05D1\u05D7\u05E8 \u05EA\u05D0\u05E8\u05D9\u05DA", 1, "filter-datepicker", 3, "ngModelChange", "valueChange", "ngModel", "format"], ["textField", "name", "valueField", "code", 1, "filter-dropdown", 3, "ngModelChange", "valueChange", "data", "valuePrimitive", "ngModel"], ["textField", "text", "valueField", "value", 1, "filter-dropdown", "filter-dropdown-sm", 3, "ngModelChange", "valueChange", "data", "valuePrimitive", "ngModel"], [1, "filter-group", "filter-search"], [1, "search-wrap"], [1, "search-icon"], ["type", "text", "placeholder", "\u05E9\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9, \u05D9\u05D9\u05E9\u05D5\u05EA, IP...", 1, "search-input", 3, "input", "value"], [1, "filter-group", "filter-action"], [1, "btn-clear", 3, "click"], [1, "center-spinner"], [1, "error-box"], ["scrollable", "none", 1, "audit-grid", 3, "data", "skip", "pageSize", "pageable", "sortable", "reorderable", "resizable", "columnMenu"], ["routerLink", "/app/audit/action-types", 1, "btn-secondary"], ["routerLink", "/app/audit/entity-types", 1, "btn-secondary"], [3, "diameter"], ["scrollable", "none", 1, "audit-grid", 3, "pageChange", "data", "skip", "pageSize", "pageable", "sortable", "reorderable", "resizable", "columnMenu"], ["kendoGridDetailTemplate", ""], ["title", "", 3, "width", "sortable", "resizable", "columnMenu"], ["kendoGridCellTemplate", ""], ["field", "IPAddress", "title", "\u05DB\u05EA\u05D5\u05D1\u05EA IP", 3, "width"], ["field", "Severity", "title", "\u05E7\u05E8\u05D9\u05D8\u05D9\u05D5\u05EA", 3, "width", "columnMenu"], ["field", "EntityName", "title", "\u05E9\u05DD"], ["field", "EntityTypeName", "title", "\u05D9\u05D9\u05E9\u05D5\u05EA", 3, "width"], ["field", "ActionTypeName", "title", "\u05E4\u05E2\u05D5\u05DC\u05D4", 3, "width"], ["field", "UserName", "title", "\u05DE\u05E9\u05EA\u05DE\u05E9", 3, "width"], ["field", "CreatedAt", "title", "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05E9\u05E2\u05D4", 3, "width"], ["pagerItemsPerPage", "\u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3", "pagerOf", "\u05DE\u05EA\u05D5\u05DA", "pagerItems", "\u05E8\u05E9\u05D5\u05DE\u05D5\u05EA", "columnMenuFilter", "\u05E1\u05E0\u05DF", "columnMenuSort", "\u05DE\u05D9\u05D5\u05DF", "columnMenuColumns", "\u05E2\u05DE\u05D5\u05D3\u05D5\u05EA", "columnMenuSortAscending", "\u05E2\u05D5\u05DC\u05D4", "columnMenuSortDescending", "\u05D9\u05D5\u05E8\u05D3", "noRecords", "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E8\u05E9\u05D5\u05DE\u05D5\u05EA \u05D1\u05D9\u05D5\u05DE\u05DF", "loading", "\u05D8\u05D5\u05E2\u05DF..."], [1, "detail-wrap"], [1, "detail-cols"], [1, "detail-empty"], [1, "detail-session"], [1, "detail-col"], [1, "detail-col-title"], [1, "json-view", "json-old"], [1, "json-view", "json-new"], [1, "row-actions"], [1, "act-btn", "act-expand", 3, "click", "title"], [1, "pi"], [1, "ip-cell"], [1, "sev-badge", 3, "ngClass"], [1, "entity-name"], [1, "entity-id"], [1, "entity-type"], [1, "action-badge"], [1, "user-cell"], [1, "user-avatar-sm"], [1, "date-cell"]], template: function AuditComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "\u05D9\u05D5\u05DE\u05DF \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "\u05DE\u05E2\u05E7\u05D1 \u05D0\u05D7\u05E8 \u05DB\u05DC \u05D4\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, AuditComponent_Conditional_7_Template, 9, 0, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "label", 9);
      \u0275\u0275text(12, "\u05DE-\u05EA\u05D0\u05E8\u05D9\u05DA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "kendo-datepicker", 10);
      \u0275\u0275twoWayListener("ngModelChange", function AuditComponent_Template_kendo_datepicker_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.dateFrom, $event) || (ctx.dateFrom = $event);
        return $event;
      });
      \u0275\u0275listener("valueChange", function AuditComponent_Template_kendo_datepicker_valueChange_13_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 8)(15, "label", 9);
      \u0275\u0275text(16, "\u05E2\u05D3-\u05EA\u05D0\u05E8\u05D9\u05DA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "kendo-datepicker", 10);
      \u0275\u0275twoWayListener("ngModelChange", function AuditComponent_Template_kendo_datepicker_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.dateTo, $event) || (ctx.dateTo = $event);
        return $event;
      });
      \u0275\u0275listener("valueChange", function AuditComponent_Template_kendo_datepicker_valueChange_17_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 8)(19, "label", 9);
      \u0275\u0275text(20, "\u05E1\u05D5\u05D2 \u05E4\u05E2\u05D5\u05DC\u05D4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "kendo-dropdownlist", 11);
      \u0275\u0275twoWayListener("ngModelChange", function AuditComponent_Template_kendo_dropdownlist_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedActionType, $event) || (ctx.selectedActionType = $event);
        return $event;
      });
      \u0275\u0275listener("valueChange", function AuditComponent_Template_kendo_dropdownlist_valueChange_21_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 8)(23, "label", 9);
      \u0275\u0275text(24, "\u05E1\u05D5\u05D2 \u05D9\u05D9\u05E9\u05D5\u05EA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "kendo-dropdownlist", 11);
      \u0275\u0275twoWayListener("ngModelChange", function AuditComponent_Template_kendo_dropdownlist_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedEntityType, $event) || (ctx.selectedEntityType = $event);
        return $event;
      });
      \u0275\u0275listener("valueChange", function AuditComponent_Template_kendo_dropdownlist_valueChange_25_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 8)(27, "label", 9);
      \u0275\u0275text(28, "\u05E7\u05E8\u05D9\u05D8\u05D9\u05D5\u05EA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "kendo-dropdownlist", 12);
      \u0275\u0275twoWayListener("ngModelChange", function AuditComponent_Template_kendo_dropdownlist_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedSeverity, $event) || (ctx.selectedSeverity = $event);
        return $event;
      });
      \u0275\u0275listener("valueChange", function AuditComponent_Template_kendo_dropdownlist_valueChange_29_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 13)(31, "label", 9);
      \u0275\u0275text(32, "\u05D7\u05D9\u05E4\u05D5\u05E9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 14)(34, "mat-icon", 15);
      \u0275\u0275text(35, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "input", 16);
      \u0275\u0275listener("input", function AuditComponent_Template_input_input_36_listener($event) {
        return ctx.onSearch($event.target.value);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "div", 17)(38, "label", 9);
      \u0275\u0275text(39, "\xA0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "button", 18);
      \u0275\u0275listener("click", function AuditComponent_Template_button_click_40_listener() {
        return ctx.clearFilters();
      });
      \u0275\u0275elementStart(41, "mat-icon");
      \u0275\u0275text(42, "filter_alt_off");
      \u0275\u0275elementEnd();
      \u0275\u0275text(43, " \u05E0\u05E7\u05D4 ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(44, AuditComponent_Conditional_44_Template, 2, 1, "div", 19);
      \u0275\u0275conditionalCreate(45, AuditComponent_Conditional_45_Template, 4, 1, "div", 20);
      \u0275\u0275conditionalCreate(46, AuditComponent_Conditional_46_Template, 19, 25, "kendo-grid", 21);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.isSuperAdmin() ? 7 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.dateFrom);
      \u0275\u0275property("format", "dd/MM/yyyy");
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
      \u0275\u0275property("format", "dd/MM/yyyy");
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275property("data", ctx.actionTypeOptions())("valuePrimitive", true);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedActionType);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275property("data", ctx.entityTypeOptions())("valuePrimitive", true);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedEntityType);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275property("data", ctx.severityOptions)("valuePrimitive", true);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedSeverity);
      \u0275\u0275control();
      \u0275\u0275advance(7);
      \u0275\u0275property("value", ctx.searchText);
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.loading() ? 44 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 45 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() && !ctx.error() ? 46 : -1);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    FormsModule,
    NgControlStatus,
    NgModel,
    RouterLink,
    GridModule,
    GridComponent,
    CustomMessagesComponent,
    ColumnComponent,
    DetailTemplateDirective,
    CellTemplateDirective,
    DatePickerModule,
    DatePickerComponent,
    DropDownListModule,
    DropDownListComponent,
    ButtonsModule,
    MatIconModule,
    MatIcon,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    DatePipe
  ], styles: ['\n.page-wrap[_ngcontent-%COMP%] {\n  padding: 24px;\n  direction: rtl;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.page-header-end[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0 0 2px;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--sf-text-secondary);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  background: var(--sf-bg-card);\n  color: var(--sf-text);\n  font-size: 0.82rem;\n  font-weight: 500;\n  cursor: pointer;\n  text-decoration: none;\n  transition: background 0.15s;\n}\n.btn-secondary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n}\n.filter-bar[_ngcontent-%COMP%] {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 20px;\n}\n.filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: flex-end;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.filter-label[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  letter-spacing: 0.02em;\n}\n.filter-datepicker[_ngcontent-%COMP%] {\n  width: 145px;\n}\n.filter-dropdown[_ngcontent-%COMP%] {\n  width: 165px;\n}\n.filter-dropdown-sm[_ngcontent-%COMP%] {\n  width: 130px;\n}\n.filter-search[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  color: var(--sf-text-muted);\n  font-size: 18px;\n  pointer-events: none;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px 34px 7px 10px;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  background: var(--sf-bg);\n  color: var(--sf-text);\n  font-size: 0.84rem;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--sf-border-focus);\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--sf-text-muted);\n}\n.filter-action[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.btn-clear[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 12px;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  background: transparent;\n  color: var(--sf-text-secondary);\n  font-size: 0.82rem;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-clear[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.btn-clear[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.center-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px 0;\n}\n.error-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 20px;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  color: #b91c1c;\n  font-size: 0.88rem;\n}\n.error-box[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n  .audit-grid .k-grid-header th.k-header {\n  background: var(--sf-grid-hd-bg) !important;\n  color: var(--sf-grid-hd-color) !important;\n  font-weight: 700 !important;\n  font-size: 0.78rem !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n  border-color: var(--sf-grid-hd-border) !important;\n  text-align: right !important;\n}\n  .audit-grid .k-grid-header {\n  background: var(--sf-grid-hd-bg) !important;\n}\n  .audit-grid .k-column-menu-button {\n  color: var(--sf-grid-hd-color);\n  opacity: 0.7;\n}\n  .audit-grid .k-column-title {\n  text-align: right !important;\n}\n  .audit-grid td.k-table-td {\n  text-align: right !important;\n}\n.date-cell[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n  color: var(--sf-text-secondary);\n}\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.user-avatar-sm[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: var(--sf-primary);\n  color: #fff;\n  font-size: 0.72rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.action-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #fff;\n  white-space: nowrap;\n}\n.entity-type[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--sf-text-secondary);\n  font-weight: 500;\n}\n.entity-name[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  color: var(--sf-text);\n}\n.entity-id[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: var(--sf-text-muted);\n  margin-right: 4px;\n  font-family: "Share Tech Mono", monospace;\n}\n.ip-cell[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n  color: var(--sf-text-secondary);\n}\n.sev-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.sev-info[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.sev-warn[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #854d0e;\n}\n.sev-low[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.sev-medium[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #b45309;\n}\n.sev-high[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  color: #c2410c;\n}\n.sev-critical[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #b91c1c;\n}\n.row-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.act-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.act-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.act-expand[_ngcontent-%COMP%] {\n  color: var(--sf-text-secondary);\n}\n.act-expand[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-primary);\n}\n.act-expand.expanded[_ngcontent-%COMP%] {\n  color: var(--sf-primary);\n}\n.detail-wrap[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  background: var(--sf-bg);\n  border-radius: 8px;\n}\n.detail-cols[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.detail-col-title[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: var(--sf-text-secondary);\n  margin-bottom: 8px;\n  letter-spacing: 0.02em;\n}\n.json-view[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 12px;\n  border-radius: 6px;\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n  line-height: 1.6;\n  white-space: pre-wrap;\n  word-break: break-all;\n  direction: ltr;\n  text-align: left;\n  max-height: 250px;\n  overflow-y: auto;\n}\n.json-old[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #7f1d1d;\n  border: 1px solid #fca5a5;\n}\n.json-new[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #14532d;\n  border: 1px solid #86efac;\n}\n.detail-empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--sf-text-muted);\n  font-size: 0.84rem;\n}\n.detail-empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.detail-session[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-size: 0.72rem;\n  font-family: "Share Tech Mono", monospace;\n  color: var(--sf-text-muted);\n  direction: ltr;\n  text-align: left;\n}\n/*# sourceMappingURL=audit.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditComponent, [{
    type: Component,
    args: [{ selector: "app-audit", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterLink,
      GridModule,
      DatePickerModule,
      DropDownListModule,
      ButtonsModule,
      MatIconModule,
      MatProgressSpinnerModule
    ], template: `<div class="page-wrap">

  <!-- Header -->
  <div class="page-header">
    <div class="page-header-start">
      <h1 class="page-title">\u05D9\u05D5\u05DE\u05DF \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA</h1>
      <span class="page-subtitle">\u05DE\u05E2\u05E7\u05D1 \u05D0\u05D7\u05E8 \u05DB\u05DC \u05D4\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA</span>
    </div>
    @if (isSuperAdmin()) {
      <div class="page-header-end">
        <a class="btn-secondary" routerLink="/app/audit/action-types">
          <mat-icon>tune</mat-icon>
          \u05E1\u05D5\u05D2\u05D9 \u05E4\u05E2\u05D5\u05DC\u05D5\u05EA
        </a>
        <a class="btn-secondary" routerLink="/app/audit/entity-types">
          <mat-icon>schema</mat-icon>
          \u05E1\u05D5\u05D2\u05D9 \u05D9\u05D9\u05E9\u05D5\u05D9\u05D5\u05EA
        </a>
      </div>
    }
  </div>

  <!-- Toolbar / Filters -->
  <div class="filter-bar">
    <div class="filter-row">

      <!-- Date From -->
      <div class="filter-group">
        <label class="filter-label">\u05DE-\u05EA\u05D0\u05E8\u05D9\u05DA</label>
        <kendo-datepicker
          [(ngModel)]="dateFrom"
          (valueChange)="onFilterChange()"
          [format]="'dd/MM/yyyy'"
          placeholder="\u05D1\u05D7\u05E8 \u05EA\u05D0\u05E8\u05D9\u05DA"
          class="filter-datepicker">
        </kendo-datepicker>
      </div>

      <!-- Date To -->
      <div class="filter-group">
        <label class="filter-label">\u05E2\u05D3-\u05EA\u05D0\u05E8\u05D9\u05DA</label>
        <kendo-datepicker
          [(ngModel)]="dateTo"
          (valueChange)="onFilterChange()"
          [format]="'dd/MM/yyyy'"
          placeholder="\u05D1\u05D7\u05E8 \u05EA\u05D0\u05E8\u05D9\u05DA"
          class="filter-datepicker">
        </kendo-datepicker>
      </div>

      <!-- Action Type -->
      <div class="filter-group">
        <label class="filter-label">\u05E1\u05D5\u05D2 \u05E4\u05E2\u05D5\u05DC\u05D4</label>
        <kendo-dropdownlist
          [data]="actionTypeOptions()"
          textField="name"
          valueField="code"
          [valuePrimitive]="true"
          [(ngModel)]="selectedActionType"
          (valueChange)="onFilterChange()"
          class="filter-dropdown">
        </kendo-dropdownlist>
      </div>

      <!-- Entity Type -->
      <div class="filter-group">
        <label class="filter-label">\u05E1\u05D5\u05D2 \u05D9\u05D9\u05E9\u05D5\u05EA</label>
        <kendo-dropdownlist
          [data]="entityTypeOptions()"
          textField="name"
          valueField="code"
          [valuePrimitive]="true"
          [(ngModel)]="selectedEntityType"
          (valueChange)="onFilterChange()"
          class="filter-dropdown">
        </kendo-dropdownlist>
      </div>

      <!-- Severity -->
      <div class="filter-group">
        <label class="filter-label">\u05E7\u05E8\u05D9\u05D8\u05D9\u05D5\u05EA</label>
        <kendo-dropdownlist
          [data]="severityOptions"
          textField="text"
          valueField="value"
          [valuePrimitive]="true"
          [(ngModel)]="selectedSeverity"
          (valueChange)="onFilterChange()"
          class="filter-dropdown filter-dropdown-sm">
        </kendo-dropdownlist>
      </div>

      <!-- Search -->
      <div class="filter-group filter-search">
        <label class="filter-label">\u05D7\u05D9\u05E4\u05D5\u05E9</label>
        <div class="search-wrap">
          <mat-icon class="search-icon">search</mat-icon>
          <input class="search-input" type="text" placeholder="\u05E9\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9, \u05D9\u05D9\u05E9\u05D5\u05EA, IP..."
                 [value]="searchText"
                 (input)="onSearch($any($event.target).value)" />
        </div>
      </div>

      <!-- Clear -->
      <div class="filter-group filter-action">
        <label class="filter-label">&nbsp;</label>
        <button class="btn-clear" (click)="clearFilters()">
          <mat-icon>filter_alt_off</mat-icon>
          \u05E0\u05E7\u05D4
        </button>
      </div>

    </div>
  </div>

  <!-- Loading -->
  @if (loading()) {
    <div class="center-spinner">
      <mat-spinner [diameter]="40"></mat-spinner>
    </div>
  }

  <!-- Error -->
  @if (error()) {
    <div class="error-box">
      <mat-icon>error_outline</mat-icon>
      {{ error() }}
    </div>
  }

  <!-- Grid -->
  @if (!loading() && !error()) {
    <kendo-grid
      class="audit-grid"
      [data]="{ data: items(), total: total() }"
      [skip]="skip"
      [pageSize]="pageSize"
      [pageable]="{ buttonCount: 5, info: true, type: 'numeric', pageSizes: [25, 50, 100] }"
      [sortable]="false"
      [reorderable]="true"
      [resizable]="true"
      [columnMenu]="true"
      scrollable="none"
      (pageChange)="onPageChange($event)">

      <!-- Detail Template -->
      <ng-template kendoGridDetailTemplate let-dataItem>
        <div class="detail-wrap">
          @if (dataItem.OldValue || dataItem.NewValue) {
            <div class="detail-cols">
              <div class="detail-col">
                <div class="detail-col-title">\u05DC\u05E4\u05E0\u05D9 \u05D4\u05E9\u05D9\u05E0\u05D5\u05D9</div>
                <pre class="json-view json-old">{{ formatJson(dataItem.OldValue) || '\u2014' }}</pre>
              </div>
              <div class="detail-col">
                <div class="detail-col-title">\u05D0\u05D7\u05E8\u05D9 \u05D4\u05E9\u05D9\u05E0\u05D5\u05D9</div>
                <pre class="json-view json-new">{{ formatJson(dataItem.NewValue) || '\u2014' }}</pre>
              </div>
            </div>
          } @else {
            <div class="detail-empty">
              <mat-icon>info_outline</mat-icon>
              \u05D0\u05D9\u05DF \u05E0\u05EA\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E0\u05D5\u05D9 \u05DC\u05E8\u05E9\u05D5\u05DE\u05D4 \u05D6\u05D5
            </div>
          }
          @if (dataItem.SessionID) {
            <div class="detail-session">Session: {{ dataItem.SessionID }}</div>
          }
        </div>
      </ng-template>

      <!-- \u05D7\u05E5 \u05E4\u05E8\u05D8\u05D9\u05DD \u2014 \u05E9\u05DE\u05D0\u05DC -->
      <kendo-grid-column title="" [width]="50" [sortable]="false" [resizable]="false" [columnMenu]="false">
        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex="rowIndex">
          <div class="row-actions">
            <button class="act-btn act-expand"
                    [class.expanded]="isExpanded(dataItem.AuditID)"
                    [title]="isExpanded(dataItem.AuditID) ? '\u05E1\u05D2\u05D5\u05E8' : '\u05E4\u05E8\u05D8\u05D9\u05DD'"
                    (click)="toggleDetail(dataItem, rowIndex)">
              <i class="pi" [class.pi-chevron-down]="!isExpanded(dataItem.AuditID)" [class.pi-chevron-up]="isExpanded(dataItem.AuditID)"></i>
            </button>
          </div>
        </ng-template>
      </kendo-grid-column>

      <!-- \u05DB\u05EA\u05D5\u05D1\u05EA IP -->
      <kendo-grid-column field="IPAddress" title="\u05DB\u05EA\u05D5\u05D1\u05EA IP" [width]="135">
        <ng-template kendoGridCellTemplate let-dataItem>
          <span class="ip-cell">{{ dataItem.IPAddress || '\u2014' }}</span>
        </ng-template>
      </kendo-grid-column>

      <!-- \u05E7\u05E8\u05D9\u05D8\u05D9\u05D5\u05EA -->
      <kendo-grid-column field="Severity" title="\u05E7\u05E8\u05D9\u05D8\u05D9\u05D5\u05EA" [width]="100" [columnMenu]="false">
        <ng-template kendoGridCellTemplate let-dataItem>
          <span class="sev-badge" [ngClass]="severityClass(dataItem.Severity)">
            {{ severityLabel(dataItem.Severity) }}
          </span>
        </ng-template>
      </kendo-grid-column>

      <!-- \u05E9\u05DD -->
      <kendo-grid-column field="EntityName" title="\u05E9\u05DD">
        <ng-template kendoGridCellTemplate let-dataItem>
          <span class="entity-name">{{ dataItem.EntityName || '\u2014' }}</span>
          @if (dataItem.EntityID) {
            <span class="entity-id">#{{ dataItem.EntityID }}</span>
          }
        </ng-template>
      </kendo-grid-column>

      <!-- \u05D9\u05D9\u05E9\u05D5\u05EA -->
      <kendo-grid-column field="EntityTypeName" title="\u05D9\u05D9\u05E9\u05D5\u05EA" [width]="130">
        <ng-template kendoGridCellTemplate let-dataItem>
          <span class="entity-type">{{ dataItem.EntityTypeName || dataItem.EntityTypeCode }}</span>
        </ng-template>
      </kendo-grid-column>

      <!-- \u05E4\u05E2\u05D5\u05DC\u05D4 -->
      <kendo-grid-column field="ActionTypeName" title="\u05E4\u05E2\u05D5\u05DC\u05D4" [width]="155">
        <ng-template kendoGridCellTemplate let-dataItem>
          <span class="action-badge" [style.background]="dataItem.BadgeColor || '#64748b'">
            {{ dataItem.ActionTypeName || dataItem.ActionTypeCode }}
          </span>
        </ng-template>
      </kendo-grid-column>

      <!-- \u05DE\u05E9\u05EA\u05DE\u05E9 -->
      <kendo-grid-column field="UserName" title="\u05DE\u05E9\u05EA\u05DE\u05E9" [width]="150">
        <ng-template kendoGridCellTemplate let-dataItem>
          <div class="user-cell">
            <span class="user-avatar-sm">{{ (dataItem.UserName || '?').charAt(0).toUpperCase() }}</span>
            <span>{{ dataItem.UserName || '\u05D0\u05E0\u05D5\u05E0\u05D9\u05DE\u05D9' }}</span>
          </div>
        </ng-template>
      </kendo-grid-column>

      <!-- \u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05E9\u05E2\u05D4 \u2014 \u05D9\u05DE\u05D9\u05DF -->
      <kendo-grid-column field="CreatedAt" title="\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05E9\u05E2\u05D4" [width]="165">
        <ng-template kendoGridCellTemplate let-dataItem>
          <span class="date-cell">{{ dataItem.CreatedAt | date:'dd/MM/yyyy HH:mm:ss' }}</span>
        </ng-template>
      </kendo-grid-column>

      <kendo-grid-messages
        pagerItemsPerPage="\u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3" pagerOf="\u05DE\u05EA\u05D5\u05DA" pagerItems="\u05E8\u05E9\u05D5\u05DE\u05D5\u05EA"
        columnMenuFilter="\u05E1\u05E0\u05DF" columnMenuSort="\u05DE\u05D9\u05D5\u05DF" columnMenuColumns="\u05E2\u05DE\u05D5\u05D3\u05D5\u05EA"
        columnMenuSortAscending="\u05E2\u05D5\u05DC\u05D4" columnMenuSortDescending="\u05D9\u05D5\u05E8\u05D3"
        noRecords="\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E8\u05E9\u05D5\u05DE\u05D5\u05EA \u05D1\u05D9\u05D5\u05DE\u05DF" loading="\u05D8\u05D5\u05E2\u05DF..." />
    </kendo-grid>
  }

</div>
`, styles: ['/* src/app/features/audit/audit.component.scss */\n.page-wrap {\n  padding: 24px;\n  direction: rtl;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.page-header-end {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.page-title {\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0 0 2px;\n}\n.page-subtitle {\n  font-size: 0.82rem;\n  color: var(--sf-text-secondary);\n}\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  background: var(--sf-bg-card);\n  color: var(--sf-text);\n  font-size: 0.82rem;\n  font-weight: 500;\n  cursor: pointer;\n  text-decoration: none;\n  transition: background 0.15s;\n}\n.btn-secondary mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.btn-secondary:hover {\n  background: var(--sf-bg-hover);\n}\n.filter-bar {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 20px;\n}\n.filter-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: flex-end;\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.filter-label {\n  font-size: 0.74rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  letter-spacing: 0.02em;\n}\n.filter-datepicker {\n  width: 145px;\n}\n.filter-dropdown {\n  width: 165px;\n}\n.filter-dropdown-sm {\n  width: 130px;\n}\n.filter-search {\n  flex: 1;\n  min-width: 200px;\n}\n.search-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.search-icon {\n  position: absolute;\n  right: 10px;\n  color: var(--sf-text-muted);\n  font-size: 18px;\n  pointer-events: none;\n}\n.search-input {\n  width: 100%;\n  padding: 7px 34px 7px 10px;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  background: var(--sf-bg);\n  color: var(--sf-text);\n  font-size: 0.84rem;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.search-input:focus {\n  border-color: var(--sf-border-focus);\n}\n.search-input::placeholder {\n  color: var(--sf-text-muted);\n}\n.filter-action {\n  flex-shrink: 0;\n}\n.btn-clear {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 12px;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  background: transparent;\n  color: var(--sf-text-secondary);\n  font-size: 0.82rem;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-clear mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.btn-clear:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.center-spinner {\n  display: flex;\n  justify-content: center;\n  padding: 60px 0;\n}\n.error-box {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 20px;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  color: #b91c1c;\n  font-size: 0.88rem;\n}\n.error-box mat-icon {\n  font-size: 20px;\n}\n::ng-deep .audit-grid .k-grid-header th.k-header {\n  background: var(--sf-grid-hd-bg) !important;\n  color: var(--sf-grid-hd-color) !important;\n  font-weight: 700 !important;\n  font-size: 0.78rem !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n  border-color: var(--sf-grid-hd-border) !important;\n  text-align: right !important;\n}\n::ng-deep .audit-grid .k-grid-header {\n  background: var(--sf-grid-hd-bg) !important;\n}\n::ng-deep .audit-grid .k-column-menu-button {\n  color: var(--sf-grid-hd-color);\n  opacity: 0.7;\n}\n::ng-deep .audit-grid .k-column-title {\n  text-align: right !important;\n}\n::ng-deep .audit-grid td.k-table-td {\n  text-align: right !important;\n}\n.date-cell {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n  color: var(--sf-text-secondary);\n}\n.user-cell {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.user-avatar-sm {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: var(--sf-primary);\n  color: #fff;\n  font-size: 0.72rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.action-badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #fff;\n  white-space: nowrap;\n}\n.entity-type {\n  font-size: 0.8rem;\n  color: var(--sf-text-secondary);\n  font-weight: 500;\n}\n.entity-name {\n  font-size: 0.84rem;\n  color: var(--sf-text);\n}\n.entity-id {\n  font-size: 0.74rem;\n  color: var(--sf-text-muted);\n  margin-right: 4px;\n  font-family: "Share Tech Mono", monospace;\n}\n.ip-cell {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n  color: var(--sf-text-secondary);\n}\n.sev-badge {\n  display: inline-block;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.sev-info {\n  background: #f1f5f9;\n  color: #475569;\n}\n.sev-warn {\n  background: #fef9c3;\n  color: #854d0e;\n}\n.sev-low {\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.sev-medium {\n  background: #fffbeb;\n  color: #b45309;\n}\n.sev-high {\n  background: #fff7ed;\n  color: #c2410c;\n}\n.sev-critical {\n  background: #fef2f2;\n  color: #b91c1c;\n}\n.row-actions {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.act-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.act-btn i {\n  font-size: 0.9rem;\n}\n.act-expand {\n  color: var(--sf-text-secondary);\n}\n.act-expand:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-primary);\n}\n.act-expand.expanded {\n  color: var(--sf-primary);\n}\n.detail-wrap {\n  padding: 16px 20px;\n  background: var(--sf-bg);\n  border-radius: 8px;\n}\n.detail-cols {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.detail-col-title {\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: var(--sf-text-secondary);\n  margin-bottom: 8px;\n  letter-spacing: 0.02em;\n}\n.json-view {\n  margin: 0;\n  padding: 12px;\n  border-radius: 6px;\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n  line-height: 1.6;\n  white-space: pre-wrap;\n  word-break: break-all;\n  direction: ltr;\n  text-align: left;\n  max-height: 250px;\n  overflow-y: auto;\n}\n.json-old {\n  background: #fef2f2;\n  color: #7f1d1d;\n  border: 1px solid #fca5a5;\n}\n.json-new {\n  background: #f0fdf4;\n  color: #14532d;\n  border: 1px solid #86efac;\n}\n.detail-empty {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--sf-text-muted);\n  font-size: 0.84rem;\n}\n.detail-empty mat-icon {\n  font-size: 18px;\n}\n.detail-session {\n  margin-top: 12px;\n  font-size: 0.72rem;\n  font-family: "Share Tech Mono", monospace;\n  color: var(--sf-text-muted);\n  direction: ltr;\n  text-align: left;\n}\n/*# sourceMappingURL=audit.component.css.map */\n'] }]
  }], () => [{ type: AuditService }, { type: AuthService }], { grid: [{
    type: ViewChild,
    args: [GridComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuditComponent, { className: "AuditComponent", filePath: "src/app/features/audit/audit.component.ts", lineNumber: 28 });
})();
export {
  AuditComponent
};
//# sourceMappingURL=chunk-EJZWDORZ.js.map
