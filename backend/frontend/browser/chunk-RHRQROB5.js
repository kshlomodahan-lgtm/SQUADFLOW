import {
  RouterModule
} from "./chunk-ZG4ME4LP.js";
import {
  CellTemplateDirective,
  ColumnComponent2 as ColumnComponent,
  CustomMessagesComponent2 as CustomMessagesComponent,
  GridComponent,
  GridModule,
  orderBy
} from "./chunk-7GBLAVZE.js";
import {
  DialogActionsComponent,
  DialogComponent,
  DialogsModule
} from "./chunk-BYBLGOFY.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-5JG6GFCW.js";
import "./chunk-5ISISSGV.js";
import {
  Dir
} from "./chunk-7BTXUMFJ.js";
import {
  ButtonsModule,
  IndicatorsModule
} from "./chunk-BV74N4V5.js";
import "./chunk-YZNXQPNO.js";
import "./chunk-4FOUEPN2.js";
import {
  CommonModule,
  Component,
  HttpClient,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VR4UVLCZ.js";

// src/app/features/settings/connector-access/connector-access.component.ts
var _c0 = (a0, a1) => ({ data: a0, total: a1 });
var _c1 = () => [10, 25, 50];
var _c2 = (a0) => ({ buttonCount: 5, info: true, pageSizes: a0 });
var _c3 = () => ({ mode: "single", allowUnsort: false });
var _forTrack0 = ($index, $item) => $item.id;
function ConnectorAccessComponent_For_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.requests().length);
  }
}
function ConnectorAccessComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function ConnectorAccessComponent_For_9_Template_button_click_0_listener() {
      const f_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFilter(f_r2.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, ConnectorAccessComponent_For_9_Conditional_2_Template, 2, 1, "span", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.filter() === f_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r2.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r2.id === ctx_r2.filter() ? 2 : -1);
  }
}
function ConnectorAccessComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 10);
    \u0275\u0275elementEnd();
  }
}
function ConnectorAccessComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
function ConnectorAccessComponent_Conditional_12_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.IconEmoji);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r5.ConnectorName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.Category);
  }
}
function ConnectorAccessComponent_Conditional_12_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r6.ConnectorToken || "\u2014");
  }
}
function ConnectorAccessComponent_Conditional_12_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.callerDisplay(r_r7.CallerInfo));
  }
}
function ConnectorAccessComponent_Conditional_12_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const r_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(r_r8.RequestedAt), " ");
  }
}
function ConnectorAccessComponent_Conditional_12_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.statusClass(r_r9.Status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.statusLabel(r_r9.Status));
  }
}
function ConnectorAccessComponent_Conditional_12_ng_template_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function ConnectorAccessComponent_Conditional_12_ng_template_12_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const r_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openConfirm(r_r11, "approve"));
    });
    \u0275\u0275text(1, "\u2713 \u05D0\u05E9\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 30);
    \u0275\u0275listener("click", function ConnectorAccessComponent_Conditional_12_ng_template_12_Conditional_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r10);
      const r_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openConfirm(r_r11, "deny"));
    });
    \u0275\u0275text(3, "\u2717 \u05D3\u05D7\u05D4");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.actionInProgress() === r_r11.RequestID);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.actionInProgress() === r_r11.RequestID);
  }
}
function ConnectorAccessComponent_Conditional_12_ng_template_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatDate(r_r11.ApprovedAt));
  }
}
function ConnectorAccessComponent_Conditional_12_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275conditionalCreate(1, ConnectorAccessComponent_Conditional_12_ng_template_12_Conditional_1_Template, 4, 2)(2, ConnectorAccessComponent_Conditional_12_ng_template_12_Conditional_2_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r11.Status === "PENDING" ? 1 : 2);
  }
}
function ConnectorAccessComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "kendo-grid", 11);
    \u0275\u0275listener("pageChange", function ConnectorAccessComponent_Conditional_12_Template_kendo_grid_pageChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange($event));
    })("sortChange", function ConnectorAccessComponent_Conditional_12_Template_kendo_grid_sortChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSortChange($event));
    });
    \u0275\u0275elementStart(1, "kendo-grid-column", 12);
    \u0275\u0275template(2, ConnectorAccessComponent_Conditional_12_ng_template_2_Template, 8, 3, "ng-template", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "kendo-grid-column", 14);
    \u0275\u0275template(4, ConnectorAccessComponent_Conditional_12_ng_template_4_Template, 2, 1, "ng-template", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "kendo-grid-column", 15);
    \u0275\u0275template(6, ConnectorAccessComponent_Conditional_12_ng_template_6_Template, 2, 1, "ng-template", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "kendo-grid-column", 16);
    \u0275\u0275template(8, ConnectorAccessComponent_Conditional_12_ng_template_8_Template, 1, 1, "ng-template", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "kendo-grid-column", 17);
    \u0275\u0275template(10, ConnectorAccessComponent_Conditional_12_ng_template_10_Template, 2, 3, "ng-template", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "kendo-grid-column", 18);
    \u0275\u0275template(12, ConnectorAccessComponent_Conditional_12_ng_template_12_Template, 3, 1, "ng-template", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "kendo-grid-messages", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("data", \u0275\u0275pureFunction2(16, _c0, ctx_r2.paged(), ctx_r2.requests().length))("skip", ctx_r2.skip)("pageSize", ctx_r2.pageSize)("pageable", \u0275\u0275pureFunction1(20, _c2, \u0275\u0275pureFunction0(19, _c1)))("sortable", \u0275\u0275pureFunction0(22, _c3))("sort", ctx_r2.sort)("reorderable", true)("resizable", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("width", 300);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 160);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 140);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 110);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 160)("sortable", false)("resizable", false)("columnMenu", false);
  }
}
function ConnectorAccessComponent_Conditional_13_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u05DE\u05E2\u05E8\u05DB\u05EA \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05EA \u05EA\u05D5\u05DB\u05DC \u05DC\u05D2\u05E9\u05EA \u05DC\u05D7\u05D9\u05D1\u05D5\u05E8 \u05D6\u05D4 \u05E2\u05DD \u05D4-UUID. ");
  }
}
function ConnectorAccessComponent_Conditional_13_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u05D4\u05D1\u05E7\u05E9\u05D4 \u05EA\u05D9\u05D3\u05D7\u05D4 \u05D5\u05D4\u05D2\u05D9\u05E9\u05D4 \u05EA\u05D7\u05E1\u05DD. ");
  }
}
function ConnectorAccessComponent_Conditional_13_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function ConnectorAccessComponent_Conditional_13_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.doAction());
    });
    \u0275\u0275text(1, "\u2713 \u05D0\u05E9\u05E8 \u05D2\u05D9\u05E9\u05D4");
    \u0275\u0275elementEnd();
  }
}
function ConnectorAccessComponent_Conditional_13_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function ConnectorAccessComponent_Conditional_13_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.doAction());
    });
    \u0275\u0275text(1, "\u2717 \u05D3\u05D7\u05D4 \u05D1\u05E7\u05E9\u05D4");
    \u0275\u0275elementEnd();
  }
}
function ConnectorAccessComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "kendo-dialog", 31);
    \u0275\u0275listener("close", function ConnectorAccessComponent_Conditional_13_Template_kendo_dialog_close_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeConfirm());
    });
    \u0275\u0275elementStart(1, "div", 32)(2, "div", 33)(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 34);
    \u0275\u0275conditionalCreate(8, ConnectorAccessComponent_Conditional_13_Conditional_8_Template, 1, 0)(9, ConnectorAccessComponent_Conditional_13_Conditional_9_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 35)(11, "label");
    \u0275\u0275text(12, "\u05D4\u05E2\u05E8\u05D5\u05EA (\u05D0\u05D5\u05E4\u05E6\u05D9\u05D5\u05E0\u05DC\u05D9)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "textarea", 36);
    \u0275\u0275listener("input", function ConnectorAccessComponent_Conditional_13_Template_textarea_input_13_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmNotes.set($event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "kendo-dialog-actions")(15, "div", 37);
    \u0275\u0275conditionalCreate(16, ConnectorAccessComponent_Conditional_13_Conditional_16_Template, 2, 0, "button", 38)(17, ConnectorAccessComponent_Conditional_13_Conditional_17_Template, 2, 0, "button", 39);
    \u0275\u0275elementStart(18, "button", 40);
    \u0275\u0275listener("click", function ConnectorAccessComponent_Conditional_13_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeConfirm());
    });
    \u0275\u0275text(19, "\u05D1\u05D9\u05D8\u05D5\u05DC");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r2.confirmAction() === "approve" ? "\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D2\u05D9\u05E9\u05D4 \u05DC\u05D7\u05D9\u05D1\u05D5\u05E8" : "\u05D3\u05D7\u05D9\u05D9\u05EA \u05D1\u05E7\u05E9\u05EA \u05D2\u05D9\u05E9\u05D4")("width", 460);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.confirmItem().IconEmoji);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.confirmItem().ConnectorName);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.confirmAction() === "approve" ? 8 : 9);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r2.confirmNotes());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.confirmAction() === "approve" ? 16 : 17);
  }
}
var ConnectorAccessComponent = class _ConnectorAccessComponent {
  http;
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
  requests = signal(
    [],
    ...ngDevMode ? [{ debugName: "requests" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filter = signal(
    "PENDING",
    ...ngDevMode ? [{ debugName: "filter" }] : (
      /* istanbul ignore next */
      []
    )
  );
  sort = [{ field: "RequestedAt", dir: "desc" }];
  skip = 0;
  pageSize = 10;
  actionInProgress = signal(
    null,
    ...ngDevMode ? [{ debugName: "actionInProgress" }] : (
      /* istanbul ignore next */
      []
    )
  );
  confirmOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "confirmOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  confirmItem = signal(
    null,
    ...ngDevMode ? [{ debugName: "confirmItem" }] : (
      /* istanbul ignore next */
      []
    )
  );
  confirmAction = signal(
    "approve",
    ...ngDevMode ? [{ debugName: "confirmAction" }] : (
      /* istanbul ignore next */
      []
    )
  );
  confirmNotes = signal(
    "",
    ...ngDevMode ? [{ debugName: "confirmNotes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filters = [
    { id: "PENDING", label: "\u05DE\u05DE\u05EA\u05D9\u05DF \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8" },
    { id: "APPROVED", label: "\u05DE\u05D0\u05D5\u05E9\u05E8" },
    { id: "DENIED", label: "\u05E0\u05D3\u05D7\u05D4" },
    { id: "ALL", label: "\u05D4\u05DB\u05DC" }
  ];
  sorted = computed(
    () => orderBy(this.requests(), this.sort),
    ...ngDevMode ? [{ debugName: "sorted" }] : (
      /* istanbul ignore next */
      []
    )
  );
  paged = computed(
    () => this.sorted().slice(this.skip, this.skip + this.pageSize),
    ...ngDevMode ? [{ debugName: "paged" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.http.get(`/api/connector-access/requests?status=${this.filter()}`).subscribe({
      next: (r) => {
        this.requests.set(r.data ?? []);
        this.loading.set(false);
        this.skip = 0;
      },
      error: () => {
        this.error.set("\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D8\u05E2\u05D9\u05E0\u05D4");
        this.loading.set(false);
      }
    });
  }
  setFilter(f) {
    this.filter.set(f);
    this.load();
  }
  onSortChange(s) {
    this.sort = s;
  }
  onPageChange(e) {
    this.skip = e.skip;
  }
  openConfirm(item, action) {
    this.confirmItem.set(item);
    this.confirmAction.set(action);
    this.confirmNotes.set("");
    this.confirmOpen.set(true);
  }
  closeConfirm() {
    this.confirmOpen.set(false);
    this.confirmItem.set(null);
  }
  doAction() {
    const item = this.confirmItem();
    const action = this.confirmAction();
    if (!item)
      return;
    this.actionInProgress.set(item.RequestID);
    this.closeConfirm();
    this.http.post(`/api/connector-access/requests/${item.RequestID}/${action}`, { notes: this.confirmNotes() }).subscribe({
      next: () => {
        this.actionInProgress.set(null);
        this.load();
      },
      error: () => {
        this.actionInProgress.set(null);
      }
    });
  }
  statusLabel(s) {
    return { PENDING: "\u05DE\u05DE\u05EA\u05D9\u05DF", APPROVED: "\u05DE\u05D0\u05D5\u05E9\u05E8", DENIED: "\u05E0\u05D3\u05D7\u05D4", REVOKED: "\u05D1\u05D5\u05D8\u05DC" }[s] ?? s;
  }
  statusClass(s) {
    return { PENDING: "badge-pending", APPROVED: "badge-approved", DENIED: "badge-denied", REVOKED: "badge-revoked" }[s] ?? "";
  }
  formatDate(d) {
    if (!d)
      return "\u2014";
    return new Date(d).toLocaleDateString("he-IL", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });
  }
  callerDisplay(c) {
    if (!c)
      return "\u2014";
    return c.fullName || `User #${c.userId}`;
  }
  static \u0275fac = function ConnectorAccessComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConnectorAccessComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConnectorAccessComponent, selectors: [["app-connector-access"]], decls: 14, vars: 2, consts: [[1, "ca-wrap"], [1, "page-header"], [1, "filter-tabs"], ["type", "button", 1, "filter-tab", 3, "active"], [1, "ca-loading"], [1, "ca-error"], ["scrollable", "none", 1, "ca-grid", 3, "data", "skip", "pageSize", "pageable", "sortable", "sort", "reorderable", "resizable"], [3, "title", "width"], ["type", "button", 1, "filter-tab", 3, "click"], [1, "filter-count"], ["diameter", "36"], ["scrollable", "none", 1, "ca-grid", 3, "pageChange", "sortChange", "data", "skip", "pageSize", "pageable", "sortable", "sort", "reorderable", "resizable"], ["title", "\u05D7\u05D9\u05D1\u05D5\u05E8", "field", "ConnectorName"], ["kendoGridCellTemplate", ""], ["title", "UUID", "field", "ConnectorToken", 3, "width"], ["title", "\u05DE\u05D1\u05E7\u05E9 \u05D2\u05D9\u05E9\u05D4", "field", "CallerInfo", 3, "width"], ["title", "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D1\u05E7\u05E9\u05D4", "field", "RequestedAt", 3, "width"], ["title", "\u05E1\u05D8\u05D8\u05D5\u05E1", "field", "Status", 3, "width"], ["title", "", 3, "width", "sortable", "resizable", "columnMenu"], ["pagerItemsPerPage", "\u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3", "pagerOf", "\u05DE\u05EA\u05D5\u05DA", "pagerItems", "\u05D1\u05E7\u05E9\u05D5\u05EA", "noRecords", "\u05D0\u05D9\u05DF \u05D1\u05E7\u05E9\u05D5\u05EA", "loading", "\u05D8\u05D5\u05E2\u05DF..."], [1, "cell-connector"], [1, "conn-emoji"], [1, "conn-name"], [1, "conn-key"], [1, "uuid-cell"], [1, "caller-name"], [1, "status-badge"], [1, "row-actions"], [1, "action-done"], [1, "btn-approve", 3, "click", "disabled"], [1, "btn-deny", 3, "click", "disabled"], [3, "close", "title", "width"], ["dir", "rtl", 1, "confirm-body"], [1, "confirm-conn"], [1, "confirm-text"], [1, "confirm-notes"], ["rows", "2", 3, "input", "value"], [1, "confirm-footer"], [1, "btn-save"], [1, "btn-danger"], [1, "btn-cancel", 3, "click"], [1, "btn-save", 3, "click"], [1, "btn-danger", 3, "click"]], template: function ConnectorAccessComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
      \u0275\u0275text(4, "\u05D1\u05E7\u05E9\u05D5\u05EA \u05D2\u05D9\u05E9\u05D4 \u05DC\u05D7\u05D9\u05D1\u05D5\u05E8\u05D9\u05DD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D0\u05D5 \u05D3\u05D7\u05D9\u05D9\u05EA \u05D1\u05E7\u05E9\u05D5\u05EA \u05D2\u05D9\u05E9\u05D4 \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D5\u05EA \u05DC-Connectors");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 2);
      \u0275\u0275repeaterCreate(8, ConnectorAccessComponent_For_9_Template, 3, 4, "button", 3, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(10, ConnectorAccessComponent_Conditional_10_Template, 2, 0, "div", 4)(11, ConnectorAccessComponent_Conditional_11_Template, 2, 1, "div", 5)(12, ConnectorAccessComponent_Conditional_12_Template, 14, 23, "kendo-grid", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(13, ConnectorAccessComponent_Conditional_13_Template, 20, 7, "kendo-dialog", 7);
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.filters);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 10 : ctx.error() ? 11 : 12);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.confirmOpen() && ctx.confirmItem() ? 13 : -1);
    }
  }, dependencies: [
    CommonModule,
    RouterModule,
    GridModule,
    GridComponent,
    CustomMessagesComponent,
    ColumnComponent,
    CellTemplateDirective,
    ButtonsModule,
    DialogsModule,
    DialogComponent,
    DialogActionsComponent,
    IndicatorsModule,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    Dir
  ], styles: ['\n.ca-wrap[_ngcontent-%COMP%] {\n  direction: rtl;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--sf-text-muted);\n  margin: 0;\n}\n.filter-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  border-bottom: 2px solid var(--sf-border);\n}\n.filter-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border: none;\n  background: transparent;\n  color: var(--sf-text-secondary);\n  font-size: 0.84rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: color 0.15s, border-color 0.15s;\n}\n.filter-tab[_ngcontent-%COMP%]:hover {\n  color: var(--sf-text);\n}\n.filter-tab.active[_ngcontent-%COMP%] {\n  color: var(--sf-primary);\n  border-bottom-color: var(--sf-primary);\n  font-weight: 700;\n}\n.filter-count[_ngcontent-%COMP%] {\n  background: var(--sf-primary);\n  color: #fff;\n  font-size: 0.67rem;\n  font-weight: 700;\n  padding: 1px 6px;\n  border-radius: 10px;\n}\n.ca-loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 48px;\n}\n.ca-error[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: 8px;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  color: #dc2626;\n  font-size: 0.85rem;\n}\n.ca-grid[_ngcontent-%COMP%]   .k-grid-header[_ngcontent-%COMP%]   th.k-header[_ngcontent-%COMP%] {\n  background: var(--sf-grid-hd-bg) !important;\n  color: var(--sf-grid-hd-color) !important;\n  font-weight: 700 !important;\n  font-size: 0.78rem !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n}\n.ca-grid[_ngcontent-%COMP%]   .k-grid-header[_ngcontent-%COMP%] {\n  background: var(--sf-grid-hd-bg) !important;\n}\n.cell-connector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.conn-emoji[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.conn-name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--sf-text);\n}\n.conn-key[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--sf-text-muted);\n}\n.uuid-cell[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.72rem;\n  color: var(--sf-text-secondary);\n}\n.caller-name[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  color: var(--sf-text);\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.badge-pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n  border: 1px solid #fcd34d;\n}\n.badge-approved[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n  border: 1px solid #6ee7b7;\n}\n.badge-denied[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fca5a5;\n}\n.badge-revoked[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n  border: 1px solid #cbd5e1;\n}\n.row-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.btn-approve[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  border-radius: 7px;\n  background: #10b981;\n  color: #fff;\n  border: none;\n  font-size: 0.76rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.btn-approve[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #059669;\n}\n.btn-approve[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-deny[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  border-radius: 7px;\n  background: #ef4444;\n  color: #fff;\n  border: none;\n  font-size: 0.76rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.btn-deny[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #dc2626;\n}\n.btn-deny[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.action-done[_ngcontent-%COMP%] {\n  font-size: 0.73rem;\n  color: var(--sf-text-muted);\n}\n[_nghost-%COMP%]     .k-dialog-actions {\n  direction: rtl !important;\n}\n.confirm-body[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  direction: rtl;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.confirm-conn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.95rem;\n}\n.confirm-text[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--sf-text-secondary);\n  margin: 0;\n}\n.confirm-notes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.confirm-notes[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n}\n.confirm-notes[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  background: var(--sf-bg-card);\n  color: var(--sf-text);\n  font-family: "Noto Sans Hebrew", sans-serif;\n  font-size: 0.84rem;\n  resize: vertical;\n}\n.confirm-notes[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--sf-primary);\n}\n.confirm-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  direction: rtl;\n  width: 100%;\n}\n.btn-save[_ngcontent-%COMP%] {\n  padding: 9px 20px;\n  border-radius: 9px;\n  border: none;\n  background: #f97316;\n  color: #fff;\n  font-size: 0.87rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n}\n.btn-save[_ngcontent-%COMP%]:hover {\n  background: #ea6c0a;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  padding: 9px 20px;\n  border-radius: 9px;\n  border: none;\n  background: #ef4444;\n  color: #fff;\n  font-size: 0.87rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 9px 20px;\n  border-radius: 9px;\n  border: 1px solid var(--sf-border);\n  background: var(--sf-bg-card);\n  color: var(--sf-text-secondary);\n  font-size: 0.87rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n}\n/*# sourceMappingURL=connector-access.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConnectorAccessComponent, [{
    type: Component,
    args: [{ selector: "app-connector-access", standalone: true, imports: [
      CommonModule,
      RouterModule,
      GridModule,
      ButtonsModule,
      DialogsModule,
      IndicatorsModule,
      MatProgressSpinnerModule
    ], template: `<div class="ca-wrap">

  <!-- Header -->
  <div class="page-header">
    <div>
      <h2>\u05D1\u05E7\u05E9\u05D5\u05EA \u05D2\u05D9\u05E9\u05D4 \u05DC\u05D7\u05D9\u05D1\u05D5\u05E8\u05D9\u05DD</h2>
      <p>\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D0\u05D5 \u05D3\u05D7\u05D9\u05D9\u05EA \u05D1\u05E7\u05E9\u05D5\u05EA \u05D2\u05D9\u05E9\u05D4 \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D5\u05EA \u05DC-Connectors</p>
    </div>
  </div>

  <!-- Filter tabs -->
  <div class="filter-tabs">
    @for (f of filters; track f.id) {
      <button class="filter-tab" [class.active]="filter() === f.id"
              (click)="setFilter(f.id)" type="button">
        {{ f.label }}
        @if (f.id === filter()) {
          <span class="filter-count">{{ requests().length }}</span>
        }
      </button>
    }
  </div>

  @if (loading()) {
    <div class="ca-loading"><mat-spinner diameter="36" /></div>
  } @else if (error()) {
    <div class="ca-error">{{ error() }}</div>
  } @else {

    <kendo-grid
      class="ca-grid"
      [data]="{ data: paged(), total: requests().length }"
      [skip]="skip" [pageSize]="pageSize"
      [pageable]="{ buttonCount: 5, info: true, pageSizes: [10, 25, 50] }"
      [sortable]="{ mode: 'single', allowUnsort: false }"
      [sort]="sort"
      [reorderable]="true" [resizable]="true"
      scrollable="none"
      (pageChange)="onPageChange($event)"
      (sortChange)="onSortChange($event)">

      <!-- Connector -->
      <kendo-grid-column title="\u05D7\u05D9\u05D1\u05D5\u05E8" field="ConnectorName">
        <ng-template kendoGridCellTemplate let-r>
          <div class="cell-connector">
            <span class="conn-emoji">{{ r.IconEmoji }}</span>
            <div>
              <div class="conn-name">{{ r.ConnectorName }}</div>
              <div class="conn-key">{{ r.Category }}</div>
            </div>
          </div>
        </ng-template>
      </kendo-grid-column>

      <!-- UUID -->
      <kendo-grid-column title="UUID" field="ConnectorToken" [width]="300">
        <ng-template kendoGridCellTemplate let-r>
          <code class="uuid-cell">{{ r.ConnectorToken || '\u2014' }}</code>
        </ng-template>
      </kendo-grid-column>

      <!-- Caller -->
      <kendo-grid-column title="\u05DE\u05D1\u05E7\u05E9 \u05D2\u05D9\u05E9\u05D4" field="CallerInfo" [width]="160">
        <ng-template kendoGridCellTemplate let-r>
          <span class="caller-name">{{ callerDisplay(r.CallerInfo) }}</span>
        </ng-template>
      </kendo-grid-column>

      <!-- Requested At -->
      <kendo-grid-column title="\u05EA\u05D0\u05E8\u05D9\u05DA \u05D1\u05E7\u05E9\u05D4" field="RequestedAt" [width]="140">
        <ng-template kendoGridCellTemplate let-r>
          {{ formatDate(r.RequestedAt) }}
        </ng-template>
      </kendo-grid-column>

      <!-- Status -->
      <kendo-grid-column title="\u05E1\u05D8\u05D8\u05D5\u05E1" field="Status" [width]="110">
        <ng-template kendoGridCellTemplate let-r>
          <span class="status-badge" [class]="statusClass(r.Status)">{{ statusLabel(r.Status) }}</span>
        </ng-template>
      </kendo-grid-column>

      <!-- Actions -->
      <kendo-grid-column title="" [width]="160" [sortable]="false" [resizable]="false" [columnMenu]="false">
        <ng-template kendoGridCellTemplate let-r>
          <div class="row-actions">
            @if (r.Status === 'PENDING') {
              <button class="btn-approve" [disabled]="actionInProgress() === r.RequestID"
                      (click)="openConfirm(r, 'approve')">\u2713 \u05D0\u05E9\u05E8</button>
              <button class="btn-deny"   [disabled]="actionInProgress() === r.RequestID"
                      (click)="openConfirm(r, 'deny')">\u2717 \u05D3\u05D7\u05D4</button>
            } @else {
              <span class="action-done">{{ formatDate(r.ApprovedAt) }}</span>
            }
          </div>
        </ng-template>
      </kendo-grid-column>

      <kendo-grid-messages
        pagerItemsPerPage="\u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3" pagerOf="\u05DE\u05EA\u05D5\u05DA" pagerItems="\u05D1\u05E7\u05E9\u05D5\u05EA"
        noRecords="\u05D0\u05D9\u05DF \u05D1\u05E7\u05E9\u05D5\u05EA" loading="\u05D8\u05D5\u05E2\u05DF..." />

    </kendo-grid>
  }

</div>

<!-- Confirm Dialog -->
@if (confirmOpen() && confirmItem()) {
  <kendo-dialog
    [title]="confirmAction() === 'approve' ? '\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D2\u05D9\u05E9\u05D4 \u05DC\u05D7\u05D9\u05D1\u05D5\u05E8' : '\u05D3\u05D7\u05D9\u05D9\u05EA \u05D1\u05E7\u05E9\u05EA \u05D2\u05D9\u05E9\u05D4'"
    [width]="460" (close)="closeConfirm()">

    <div class="confirm-body" dir="rtl">
      <div class="confirm-conn">
        <span class="conn-emoji">{{ confirmItem()!.IconEmoji }}</span>
        <strong>{{ confirmItem()!.ConnectorName }}</strong>
      </div>
      <p class="confirm-text">
        @if (confirmAction() === 'approve') {
          \u05DE\u05E2\u05E8\u05DB\u05EA \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05EA \u05EA\u05D5\u05DB\u05DC \u05DC\u05D2\u05E9\u05EA \u05DC\u05D7\u05D9\u05D1\u05D5\u05E8 \u05D6\u05D4 \u05E2\u05DD \u05D4-UUID.
        } @else {
          \u05D4\u05D1\u05E7\u05E9\u05D4 \u05EA\u05D9\u05D3\u05D7\u05D4 \u05D5\u05D4\u05D2\u05D9\u05E9\u05D4 \u05EA\u05D7\u05E1\u05DD.
        }
      </p>
      <div class="confirm-notes">
        <label>\u05D4\u05E2\u05E8\u05D5\u05EA (\u05D0\u05D5\u05E4\u05E6\u05D9\u05D5\u05E0\u05DC\u05D9)</label>
        <textarea rows="2" [value]="confirmNotes()"
                  (input)="confirmNotes.set($any($event.target).value)"></textarea>
      </div>
    </div>

    <kendo-dialog-actions>
      <div class="confirm-footer">
        @if (confirmAction() === 'approve') {
          <button class="btn-save" (click)="doAction()">\u2713 \u05D0\u05E9\u05E8 \u05D2\u05D9\u05E9\u05D4</button>
        } @else {
          <button class="btn-danger" (click)="doAction()">\u2717 \u05D3\u05D7\u05D4 \u05D1\u05E7\u05E9\u05D4</button>
        }
        <button class="btn-cancel" (click)="closeConfirm()">\u05D1\u05D9\u05D8\u05D5\u05DC</button>
      </div>
    </kendo-dialog-actions>
  </kendo-dialog>
}
`, styles: ['/* src/app/features/settings/connector-access/connector-access.component.scss */\n.ca-wrap {\n  direction: rtl;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.page-header h2 {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0 0 4px;\n}\n.page-header p {\n  font-size: 0.82rem;\n  color: var(--sf-text-muted);\n  margin: 0;\n}\n.filter-tabs {\n  display: flex;\n  gap: 6px;\n  border-bottom: 2px solid var(--sf-border);\n}\n.filter-tab {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border: none;\n  background: transparent;\n  color: var(--sf-text-secondary);\n  font-size: 0.84rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: color 0.15s, border-color 0.15s;\n}\n.filter-tab:hover {\n  color: var(--sf-text);\n}\n.filter-tab.active {\n  color: var(--sf-primary);\n  border-bottom-color: var(--sf-primary);\n  font-weight: 700;\n}\n.filter-count {\n  background: var(--sf-primary);\n  color: #fff;\n  font-size: 0.67rem;\n  font-weight: 700;\n  padding: 1px 6px;\n  border-radius: 10px;\n}\n.ca-loading {\n  display: flex;\n  justify-content: center;\n  padding: 48px;\n}\n.ca-error {\n  padding: 12px 16px;\n  border-radius: 8px;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  color: #dc2626;\n  font-size: 0.85rem;\n}\n.ca-grid .k-grid-header th.k-header {\n  background: var(--sf-grid-hd-bg) !important;\n  color: var(--sf-grid-hd-color) !important;\n  font-weight: 700 !important;\n  font-size: 0.78rem !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n}\n.ca-grid .k-grid-header {\n  background: var(--sf-grid-hd-bg) !important;\n}\n.cell-connector {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.conn-emoji {\n  font-size: 1.3rem;\n}\n.conn-name {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--sf-text);\n}\n.conn-key {\n  font-size: 0.72rem;\n  color: var(--sf-text-muted);\n}\n.uuid-cell {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.72rem;\n  color: var(--sf-text-secondary);\n}\n.caller-name {\n  font-size: 0.84rem;\n  color: var(--sf-text);\n}\n.status-badge {\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.badge-pending {\n  background: #fef3c7;\n  color: #92400e;\n  border: 1px solid #fcd34d;\n}\n.badge-approved {\n  background: #d1fae5;\n  color: #065f46;\n  border: 1px solid #6ee7b7;\n}\n.badge-denied {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fca5a5;\n}\n.badge-revoked {\n  background: #f1f5f9;\n  color: #64748b;\n  border: 1px solid #cbd5e1;\n}\n.row-actions {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.btn-approve {\n  padding: 5px 12px;\n  border-radius: 7px;\n  background: #10b981;\n  color: #fff;\n  border: none;\n  font-size: 0.76rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.btn-approve:hover:not(:disabled) {\n  background: #059669;\n}\n.btn-approve:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-deny {\n  padding: 5px 12px;\n  border-radius: 7px;\n  background: #ef4444;\n  color: #fff;\n  border: none;\n  font-size: 0.76rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.btn-deny:hover:not(:disabled) {\n  background: #dc2626;\n}\n.btn-deny:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.action-done {\n  font-size: 0.73rem;\n  color: var(--sf-text-muted);\n}\n:host ::ng-deep .k-dialog-actions {\n  direction: rtl !important;\n}\n.confirm-body {\n  padding: 16px 20px;\n  direction: rtl;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.confirm-conn {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.95rem;\n}\n.confirm-text {\n  font-size: 0.85rem;\n  color: var(--sf-text-secondary);\n  margin: 0;\n}\n.confirm-notes {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.confirm-notes label {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n}\n.confirm-notes textarea {\n  padding: 7px 10px;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  background: var(--sf-bg-card);\n  color: var(--sf-text);\n  font-family: "Noto Sans Hebrew", sans-serif;\n  font-size: 0.84rem;\n  resize: vertical;\n}\n.confirm-notes textarea:focus {\n  outline: none;\n  border-color: var(--sf-primary);\n}\n.confirm-footer {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  direction: rtl;\n  width: 100%;\n}\n.btn-save {\n  padding: 9px 20px;\n  border-radius: 9px;\n  border: none;\n  background: #f97316;\n  color: #fff;\n  font-size: 0.87rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n}\n.btn-save:hover {\n  background: #ea6c0a;\n}\n.btn-danger {\n  padding: 9px 20px;\n  border-radius: 9px;\n  border: none;\n  background: #ef4444;\n  color: #fff;\n  font-size: 0.87rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n}\n.btn-danger:hover {\n  background: #dc2626;\n}\n.btn-cancel {\n  padding: 9px 20px;\n  border-radius: 9px;\n  border: 1px solid var(--sf-border);\n  background: var(--sf-bg-card);\n  color: var(--sf-text-secondary);\n  font-size: 0.87rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n}\n/*# sourceMappingURL=connector-access.component.css.map */\n'] }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConnectorAccessComponent, { className: "ConnectorAccessComponent", filePath: "src/app/features/settings/connector-access/connector-access.component.ts", lineNumber: 40 });
})();
export {
  ConnectorAccessComponent
};
//# sourceMappingURL=chunk-RHRQROB5.js.map
