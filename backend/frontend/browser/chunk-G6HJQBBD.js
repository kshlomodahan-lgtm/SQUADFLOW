import {
  Router
} from "./chunk-ZG4ME4LP.js";
import {
  NotificationModule,
  NotificationService
} from "./chunk-M7FXBDNT.js";
import {
  CellTemplateDirective,
  CheckboxColumnComponent,
  ColumnComponent2 as ColumnComponent,
  CustomMessagesComponent2 as CustomMessagesComponent,
  DatePickerComponent,
  DatePickerModule,
  DetailTemplateDirective,
  DropDownListComponent,
  DropDownListModule,
  GridComponent,
  GridModule,
  orderBy
} from "./chunk-7GBLAVZE.js";
import {
  DialogActionsComponent,
  DialogComponent,
  DialogModule,
  TextAreaComponent,
  TextAreaModule,
  TextBoxDirective,
  TextBoxModule
} from "./chunk-BYBLGOFY.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-AVTM4YYQ.js";
import "./chunk-7BTXUMFJ.js";
import {
  ButtonsModule,
  IndicatorsModule,
  LoaderComponent
} from "./chunk-BV74N4V5.js";
import "./chunk-YZNXQPNO.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-4FOUEPN2.js";
import {
  CommonModule,
  Component,
  DatePipe,
  EventEmitter,
  HttpClient,
  Input,
  NgClass,
  Output,
  SlicePipe,
  ViewChild,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-VR4UVLCZ.js";

// src/app/features/projects/project-dialog/project-dialog.component.ts
var _c0 = () => ({ CustomerID: null, CompanyName: "\u05DC\u05DC\u05D0 \u05DC\u05E7\u05D5\u05D7 \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9" });
function ProjectDialogComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMsg());
  }
}
function ProjectDialogComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 7);
    \u0275\u0275text(1, "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4 (\u05E2\u05D3 50 \u05EA\u05D5\u05D5\u05D9\u05DD)");
    \u0275\u0275elementEnd();
  }
}
function ProjectDialogComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 7);
    \u0275\u0275text(1, "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
  }
}
function ProjectDialogComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-loader", 22);
  }
}
function ProjectDialogComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2713 \u05E9\u05DE\u05D5\u05E8 ");
  }
}
var STATUS_OPTIONS = [
  { value: "draft", label: "\u05D8\u05D9\u05D5\u05D8\u05D4" },
  { value: "active", label: "\u05E4\u05E2\u05D9\u05DC" },
  { value: "completed", label: "\u05D4\u05D5\u05E9\u05DC\u05DD" },
  { value: "archived", label: "\u05D1\u05D0\u05E8\u05DB\u05D9\u05D5\u05DF" }
];
var ProjectDialogComponent = class _ProjectDialogComponent {
  fb;
  http;
  notif;
  project = null;
  closed = new EventEmitter();
  saved = new EventEmitter();
  form;
  saving = signal(
    false,
    ...ngDevMode ? [{ debugName: "saving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  errorMsg = signal(
    "",
    ...ngDevMode ? [{ debugName: "errorMsg" }] : (
      /* istanbul ignore next */
      []
    )
  );
  clientOrgs = signal(
    [],
    ...ngDevMode ? [{ debugName: "clientOrgs" }] : (
      /* istanbul ignore next */
      []
    )
  );
  statusOptions = STATUS_OPTIONS;
  get isEdit() {
    return !!this.project;
  }
  get title() {
    return this.isEdit ? "\u05E2\u05E8\u05D9\u05DB\u05EA \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8" : "\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05D7\u05D3\u05E9";
  }
  constructor(fb, http, notif) {
    this.fb = fb;
    this.http = http;
    this.notif = notif;
  }
  ngOnInit() {
    this.buildForm();
    this.loadClients();
  }
  buildForm() {
    const p = this.project;
    this.form = this.fb.group({
      projectCode: [p?.ProjectCode ?? "", [Validators.required, Validators.maxLength(50)]],
      projectName: [p?.ProjectName ?? "", [Validators.required, Validators.maxLength(150)]],
      description: [p?.Description ?? ""],
      clientOrgId: [p?.ClientOrgID ?? null],
      status: [p?.Status ?? "draft"],
      startDate: [p?.StartDate ? new Date(p.StartDate) : null],
      targetDate: [p?.TargetDate ? new Date(p.TargetDate) : null],
      githubUrl: [p?.GithubUrl ?? ""],
      devUrl: [p?.DevUrl ?? ""]
    });
  }
  loadClients() {
    this.http.get("/api/customers").subscribe({
      next: (r) => this.clientOrgs.set(r.data ?? [])
    });
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    this.errorMsg.set("");
    const body = this.form.value;
    const req = this.isEdit ? this.http.put(`/api/projects/${this.project.ProjectID}`, body) : this.http.post("/api/projects", body);
    req.subscribe({
      next: () => {
        this.saving.set(false);
        this.saved.emit();
      },
      error: (err) => {
        this.saving.set(false);
        this.errorMsg.set(err.error?.message ?? "\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05E9\u05DE\u05D9\u05E8\u05D4");
      }
    });
  }
  close() {
    this.closed.emit();
  }
  static \u0275fac = function ProjectDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectDialogComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(NotificationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectDialogComponent, selectors: [["app-project-dialog"]], inputs: { project: "project" }, outputs: { closed: "closed", saved: "saved" }, features: [\u0275\u0275ProvidersFeature([NotificationService])], decls: 59, vars: 18, consts: [[3, "close", "title", "width", "minWidth"], ["novalidate", "", 1, "dialog-body", 3, "formGroup"], [1, "form-error"], [1, "form-row"], [1, "req"], [1, "field-col"], ["kendoTextBox", "", "formControlName", "projectCode", "placeholder", "\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: PROJ-001", 1, "dir-ltr"], [1, "err"], ["kendoTextBox", "", "formControlName", "projectName", "placeholder", "\u05E9\u05DD \u05D4\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8"], ["formControlName", "clientOrgId", "textField", "CompanyName", "valueField", "CustomerID", 3, "data", "valuePrimitive", "defaultItem"], ["formControlName", "status", "textField", "label", "valueField", "value", 3, "data", "valuePrimitive"], [1, "form-row", "two-cols"], [1, "col"], ["formControlName", "startDate", "placeholder", "dd/mm/yyyy", 3, "format"], ["formControlName", "targetDate", "placeholder", "dd/mm/yyyy", 3, "format"], [2, "font-size", "15px", "width", "15px", "height", "15px", "vertical-align", "middle"], ["kendoTextBox", "", "formControlName", "githubUrl", "placeholder", "https://github.com/org/repo", 1, "dir-ltr"], ["kendoTextBox", "", "formControlName", "devUrl", "placeholder", "http://localhost:4201", 1, "dir-ltr"], [1, "form-row", "align-top"], ["formControlName", "description", "resizable", "vertical", "placeholder", "\u05EA\u05D9\u05D0\u05D5\u05E8 \u05E7\u05E6\u05E8 \u05E9\u05DC \u05D4\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8...", 3, "rows"], [1, "dialog-footer"], [1, "btn-save", 3, "click", "disabled"], ["size", "small", "themeColor", "tertiary"], [1, "btn-cancel", 3, "click"]], template: function ProjectDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "kendo-dialog", 0);
      \u0275\u0275listener("close", function ProjectDialogComponent_Template_kendo_dialog_close_0_listener() {
        return ctx.close();
      });
      \u0275\u0275elementStart(1, "form", 1);
      \u0275\u0275conditionalCreate(2, ProjectDialogComponent_Conditional_2_Template, 2, 1, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "label");
      \u0275\u0275text(5, "\u05E7\u05D5\u05D3 \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 ");
      \u0275\u0275elementStart(6, "span", 4);
      \u0275\u0275text(7, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5);
      \u0275\u0275element(9, "input", 6);
      \u0275\u0275controlCreate();
      \u0275\u0275conditionalCreate(10, ProjectDialogComponent_Conditional_10_Template, 2, 0, "small", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 3)(12, "label");
      \u0275\u0275text(13, "\u05E9\u05DD \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 ");
      \u0275\u0275elementStart(14, "span", 4);
      \u0275\u0275text(15, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 5);
      \u0275\u0275element(17, "input", 8);
      \u0275\u0275controlCreate();
      \u0275\u0275conditionalCreate(18, ProjectDialogComponent_Conditional_18_Template, 2, 0, "small", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 3)(20, "label");
      \u0275\u0275text(21, "\u05DC\u05E7\u05D5\u05D7");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "kendo-dropdownlist", 9);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 3)(24, "label");
      \u0275\u0275text(25, "\u05E1\u05D8\u05D8\u05D5\u05E1");
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "kendo-dropdownlist", 10);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 11)(28, "div", 12)(29, "label");
      \u0275\u0275text(30, "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05EA\u05D7\u05DC\u05D4");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "kendo-datepicker", 13);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 12)(33, "label");
      \u0275\u0275text(34, "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D9\u05E2\u05D3");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "kendo-datepicker", 14);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 3)(37, "label")(38, "mat-icon", 15);
      \u0275\u0275text(39, "code");
      \u0275\u0275elementEnd();
      \u0275\u0275text(40, " GitHub URL ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(41, "input", 16);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 3)(43, "label")(44, "mat-icon", 15);
      \u0275\u0275text(45, "play_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275text(46, " Dev URL ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(47, "input", 17);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 18)(49, "label");
      \u0275\u0275text(50, "\u05EA\u05D9\u05D0\u05D5\u05E8");
      \u0275\u0275elementEnd();
      \u0275\u0275element(51, "kendo-textarea", 19);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "kendo-dialog-actions")(53, "div", 20)(54, "button", 21);
      \u0275\u0275listener("click", function ProjectDialogComponent_Template_button_click_54_listener() {
        return ctx.save();
      });
      \u0275\u0275conditionalCreate(55, ProjectDialogComponent_Conditional_55_Template, 1, 0, "kendo-loader", 22)(56, ProjectDialogComponent_Conditional_56_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "button", 23);
      \u0275\u0275listener("click", function ProjectDialogComponent_Template_button_click_57_listener() {
        return ctx.close();
      });
      \u0275\u0275text(58, "\u05D1\u05D9\u05D8\u05D5\u05DC");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("title", ctx.title)("width", 580)("minWidth", 400);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMsg() ? 2 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form.get("projectCode")?.invalid && ctx.form.get("projectCode")?.touched ? 10 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form.get("projectName")?.invalid && ctx.form.get("projectName")?.touched ? 18 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("data", ctx.clientOrgs())("valuePrimitive", true)("defaultItem", \u0275\u0275pureFunction0(17, _c0));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275property("data", ctx.statusOptions)("valuePrimitive", true);
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275property("format", "dd/MM/yyyy");
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275property("format", "dd/MM/yyyy");
      \u0275\u0275control();
      \u0275\u0275advance(6);
      \u0275\u0275control();
      \u0275\u0275advance(6);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275property("rows", 4);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.saving());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.saving() ? 55 : 56);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, DialogModule, DialogComponent, DialogActionsComponent, TextBoxModule, TextBoxDirective, TextAreaModule, TextAreaComponent, DropDownListModule, DropDownListComponent, DatePickerModule, DatePickerComponent, ButtonsModule, IndicatorsModule, LoaderComponent, NotificationModule, MatIconModule, MatIcon], styles: ['\n  .k-dialog-actions {\n  direction: rtl !important;\n}\n.dialog-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 4px 0;\n  direction: rtl;\n}\n.form-error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  color: #dc2626;\n  padding: 10px 14px;\n  border-radius: 8px;\n  font-size: 0.83rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 130px 1fr;\n  align-items: center;\n  gap: 12px;\n}\n.form-row.align-top[_ngcontent-%COMP%] {\n  align-items: start;\n}\n.form-row.align-top[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding-top: 8px;\n}\n.form-row.two-cols[_ngcontent-%COMP%] {\n  grid-template-columns: 130px 1fr;\n}\n.form-row.two-cols[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-row.two-cols[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 130px 1fr 1fr;\n}\n.form-row.two-cols[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  display: none;\n}\n.form-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  text-align: right;\n}\n.field-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.req[_ngcontent-%COMP%] {\n  color: var(--sf-danger);\n}\n.err[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--sf-danger);\n}\n.dir-ltr[_ngcontent-%COMP%]     .k-input-inner {\n  direction: ltr !important;\n  text-align: left !important;\n}\n[_nghost-%COMP%]     .k-input {\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n  font-size: 0.88rem !important;\n  direction: rtl !important;\n  border-color: var(--sf-border) !important;\n  border-radius: 8px !important;\n  background: var(--sf-bg-card) !important;\n  color: var(--sf-text) !important;\n  width: 100% !important;\n}\n[_nghost-%COMP%]     .k-input:focus, \n[_nghost-%COMP%]     .k-input.k-focus {\n  border-color: var(--sf-primary) !important;\n  box-shadow: 0 0 0 2px rgba(13, 71, 255, 0.1) !important;\n}\n[_nghost-%COMP%]     .k-input-inner {\n  direction: rtl !important;\n  text-align: right !important;\n}\n[_nghost-%COMP%]     .k-dropdownlist {\n  width: 100% !important;\n}\n[_nghost-%COMP%]     .k-datepicker {\n  width: 100% !important;\n}\n[_nghost-%COMP%]     .k-textarea {\n  width: 100% !important;\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n}\n[_nghost-%COMP%]     .k-list-item {\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n  direction: rtl;\n  text-align: right;\n}\n.dialog-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  direction: rtl;\n  width: 100%;\n}\n.btn-save[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #f97316;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 22px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: background 0.15s;\n  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.3);\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #ea6c0a;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: var(--sf-bg-card);\n  color: var(--sf-text-secondary);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 9px 20px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: background 0.13s;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n/*# sourceMappingURL=project-dialog.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectDialogComponent, [{
    type: Component,
    args: [{ selector: "app-project-dialog", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      DialogModule,
      TextBoxModule,
      TextAreaModule,
      DropDownListModule,
      DatePickerModule,
      ButtonsModule,
      IndicatorsModule,
      NotificationModule,
      MatIconModule
    ], providers: [NotificationService], template: `<kendo-dialog [title]="title" [width]="580" [minWidth]="400" (close)="close()">

  <form [formGroup]="form" novalidate class="dialog-body">

    @if (errorMsg()) {
      <div class="form-error">{{ errorMsg() }}</div>
    }

    <div class="form-row">
      <label>\u05E7\u05D5\u05D3 \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 <span class="req">*</span></label>
      <div class="field-col">
        <input kendoTextBox formControlName="projectCode"
               placeholder="\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: PROJ-001" class="dir-ltr" />
        @if (form.get('projectCode')?.invalid && form.get('projectCode')?.touched) {
          <small class="err">\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4 (\u05E2\u05D3 50 \u05EA\u05D5\u05D5\u05D9\u05DD)</small>
        }
      </div>
    </div>

    <div class="form-row">
      <label>\u05E9\u05DD \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 <span class="req">*</span></label>
      <div class="field-col">
        <input kendoTextBox formControlName="projectName" placeholder="\u05E9\u05DD \u05D4\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8" />
        @if (form.get('projectName')?.invalid && form.get('projectName')?.touched) {
          <small class="err">\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4</small>
        }
      </div>
    </div>

    <div class="form-row">
      <label>\u05DC\u05E7\u05D5\u05D7</label>
      <kendo-dropdownlist
        formControlName="clientOrgId"
        [data]="clientOrgs()"
        textField="CompanyName"
        valueField="CustomerID"
        [valuePrimitive]="true"
        [defaultItem]="{ CustomerID: null, CompanyName: '\u05DC\u05DC\u05D0 \u05DC\u05E7\u05D5\u05D7 \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9' }" />
    </div>

    <div class="form-row">
      <label>\u05E1\u05D8\u05D8\u05D5\u05E1</label>
      <kendo-dropdownlist
        formControlName="status"
        [data]="statusOptions"
        textField="label"
        valueField="value"
        [valuePrimitive]="true" />
    </div>

    <div class="form-row two-cols">
      <div class="col">
        <label>\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05EA\u05D7\u05DC\u05D4</label>
        <kendo-datepicker formControlName="startDate"
          [format]="'dd/MM/yyyy'" placeholder="dd/mm/yyyy" />
      </div>
      <div class="col">
        <label>\u05EA\u05D0\u05E8\u05D9\u05DA \u05D9\u05E2\u05D3</label>
        <kendo-datepicker formControlName="targetDate"
          [format]="'dd/MM/yyyy'" placeholder="dd/mm/yyyy" />
      </div>
    </div>

    <div class="form-row">
      <label>
        <mat-icon style="font-size:15px;width:15px;height:15px;vertical-align:middle;">code</mat-icon>
        GitHub URL
      </label>
      <input kendoTextBox formControlName="githubUrl"
             placeholder="https://github.com/org/repo" class="dir-ltr" />
    </div>

    <div class="form-row">
      <label>
        <mat-icon style="font-size:15px;width:15px;height:15px;vertical-align:middle;">play_circle</mat-icon>
        Dev URL
      </label>
      <input kendoTextBox formControlName="devUrl"
             placeholder="http://localhost:4201" class="dir-ltr" />
    </div>

    <div class="form-row align-top">
      <label>\u05EA\u05D9\u05D0\u05D5\u05E8</label>
      <kendo-textarea formControlName="description"
        [rows]="4" resizable="vertical"
        placeholder="\u05EA\u05D9\u05D0\u05D5\u05E8 \u05E7\u05E6\u05E8 \u05E9\u05DC \u05D4\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8..." />
    </div>

  </form>

  <kendo-dialog-actions>
    <div class="dialog-footer">
      <button class="btn-save" [disabled]="saving()" (click)="save()">
        @if (saving()) { <kendo-loader size="small" themeColor="tertiary" /> }
        @else { \u2713 \u05E9\u05DE\u05D5\u05E8 }
      </button>
      <button class="btn-cancel" (click)="close()">\u05D1\u05D9\u05D8\u05D5\u05DC</button>
    </div>
  </kendo-dialog-actions>

</kendo-dialog>
`, styles: ['/* src/app/features/projects/project-dialog/project-dialog.component.scss */\n::ng-deep .k-dialog-actions {\n  direction: rtl !important;\n}\n.dialog-body {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 4px 0;\n  direction: rtl;\n}\n.form-error {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  color: #dc2626;\n  padding: 10px 14px;\n  border-radius: 8px;\n  font-size: 0.83rem;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 130px 1fr;\n  align-items: center;\n  gap: 12px;\n}\n.form-row.align-top {\n  align-items: start;\n}\n.form-row.align-top label {\n  padding-top: 8px;\n}\n.form-row.two-cols {\n  grid-template-columns: 130px 1fr;\n}\n.form-row.two-cols .col {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-row.two-cols {\n  display: grid;\n  grid-template-columns: 130px 1fr 1fr;\n}\n.form-row.two-cols > label {\n  display: none;\n}\n.form-row label {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  text-align: right;\n}\n.field-col {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.req {\n  color: var(--sf-danger);\n}\n.err {\n  font-size: 0.75rem;\n  color: var(--sf-danger);\n}\n.dir-ltr ::ng-deep .k-input-inner {\n  direction: ltr !important;\n  text-align: left !important;\n}\n:host ::ng-deep .k-input {\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n  font-size: 0.88rem !important;\n  direction: rtl !important;\n  border-color: var(--sf-border) !important;\n  border-radius: 8px !important;\n  background: var(--sf-bg-card) !important;\n  color: var(--sf-text) !important;\n  width: 100% !important;\n}\n:host ::ng-deep .k-input:focus,\n:host ::ng-deep .k-input.k-focus {\n  border-color: var(--sf-primary) !important;\n  box-shadow: 0 0 0 2px rgba(13, 71, 255, 0.1) !important;\n}\n:host ::ng-deep .k-input-inner {\n  direction: rtl !important;\n  text-align: right !important;\n}\n:host ::ng-deep .k-dropdownlist {\n  width: 100% !important;\n}\n:host ::ng-deep .k-datepicker {\n  width: 100% !important;\n}\n:host ::ng-deep .k-textarea {\n  width: 100% !important;\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n}\n:host ::ng-deep .k-list-item {\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n  direction: rtl;\n  text-align: right;\n}\n.dialog-footer {\n  display: flex;\n  gap: 10px;\n  direction: rtl;\n  width: 100%;\n}\n.btn-save {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #f97316;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 22px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: background 0.15s;\n  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.3);\n}\n.btn-save:hover:not(:disabled) {\n  background: #ea6c0a;\n}\n.btn-save:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.btn-cancel {\n  background: var(--sf-bg-card);\n  color: var(--sf-text-secondary);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 9px 20px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: background 0.13s;\n}\n.btn-cancel:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n/*# sourceMappingURL=project-dialog.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: HttpClient }, { type: NotificationService }], { project: [{
    type: Input
  }], closed: [{
    type: Output
  }], saved: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectDialogComponent, { className: "ProjectDialogComponent", filePath: "src/app/features/projects/project-dialog/project-dialog.component.ts", lineNumber: 37 });
})();

// src/app/features/projects/projects.component.ts
var _c02 = (a0, a1) => ({ data: a0, total: a1 });
var _c1 = () => [10, 25, 50];
var _c2 = (a0) => ({ buttonCount: 5, info: true, type: "numeric", pageSizes: a0 });
var _c3 = () => ({ mode: "single", allowUnsort: false });
var _c4 = () => ({ mode: "multiple", checkboxOnly: true });
function ProjectsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "kendo-loader", 14);
    \u0275\u0275elementEnd();
  }
}
function ProjectsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function ProjectsComponent_Conditional_17_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.ProjectCode);
  }
}
function ProjectsComponent_Conditional_17_ng_template_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(2, 2, row_r4.Description, 0, 60), "", row_r4.Description.length > 60 ? "..." : "");
  }
}
function ProjectsComponent_Conditional_17_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, ProjectsComponent_Conditional_17_ng_template_5_Conditional_2_Template, 3, 6, "div", 29);
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.ProjectName);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r4.Description ? 2 : -1);
  }
}
function ProjectsComponent_Conditional_17_ng_template_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.ClientOrgName);
  }
}
function ProjectsComponent_Conditional_17_ng_template_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ProjectsComponent_Conditional_17_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ProjectsComponent_Conditional_17_ng_template_7_Conditional_0_Template, 2, 1, "span", 30)(1, ProjectsComponent_Conditional_17_ng_template_7_Conditional_1_Template, 2, 0, "span", 31);
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275conditional(row_r5.ClientOrgName ? 0 : 1);
  }
}
function ProjectsComponent_Conditional_17_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.statusClass(row_r6.Status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabel(row_r6.Status), " ");
  }
}
function ProjectsComponent_Conditional_17_ng_template_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7.ProductCount);
  }
}
function ProjectsComponent_Conditional_17_ng_template_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ProjectsComponent_Conditional_17_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ProjectsComponent_Conditional_17_ng_template_11_Conditional_0_Template, 2, 1, "span", 33)(1, ProjectsComponent_Conditional_17_ng_template_11_Conditional_1_Template, 2, 0, "span", 31);
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275conditional(row_r7.ProductCount > 0 ? 0 : 1);
  }
}
function ProjectsComponent_Conditional_17_ng_template_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, row_r8.TargetDate, "dd/MM/yy"));
  }
}
function ProjectsComponent_Conditional_17_ng_template_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ProjectsComponent_Conditional_17_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ProjectsComponent_Conditional_17_ng_template_13_Conditional_0_Template, 3, 4, "span", 34)(1, ProjectsComponent_Conditional_17_ng_template_13_Conditional_1_Template, 2, 0, "span", 31);
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275conditional(row_r8.TargetDate ? 0 : 1);
  }
}
function ProjectsComponent_Conditional_17_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "button", 36);
    \u0275\u0275listener("click", function ProjectsComponent_Conditional_17_ng_template_15_Template_button_click_1_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openProject(row_r10.ProjectID));
    });
    \u0275\u0275element(2, "i", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 38);
    \u0275\u0275listener("click", function ProjectsComponent_Conditional_17_ng_template_15_Template_button_click_3_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openInBrowser(row_r10));
    });
    \u0275\u0275element(4, "i", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 40);
    \u0275\u0275listener("click", function ProjectsComponent_Conditional_17_ng_template_15_Template_button_click_5_listener() {
      const ctx_r10 = \u0275\u0275restoreView(_r9);
      const row_r10 = ctx_r10.$implicit;
      const rowIndex_r12 = ctx_r10.rowIndex;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleDetail(row_r10, rowIndex_r12));
    });
    \u0275\u0275element(6, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 42);
    \u0275\u0275listener("click", function ProjectsComponent_Conditional_17_ng_template_15_Template_button_click_7_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(row_r10));
    });
    \u0275\u0275element(8, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 44);
    \u0275\u0275listener("click", function ProjectsComponent_Conditional_17_ng_template_15_Template_button_click_9_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.askDelete(row_r10));
    });
    \u0275\u0275element(10, "i", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !row_r10.DevUrl);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("expanded", ctx_r0.isExpanded(row_r10.ProjectID));
    \u0275\u0275property("title", ctx_r0.isExpanded(row_r10.ProjectID) ? "\u05E1\u05D2\u05D5\u05E8" : "\u05D4\u05E8\u05D7\u05D1\u05D4");
    \u0275\u0275advance();
    \u0275\u0275classProp("pi-chevron-down", !ctx_r0.isExpanded(row_r10.ProjectID))("pi-chevron-up", ctx_r0.isExpanded(row_r10.ProjectID));
  }
}
function ProjectsComponent_Conditional_17_ng_template_16_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 48);
    \u0275\u0275text(2, "\u05EA\u05D9\u05D0\u05D5\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r13.Description);
  }
}
function ProjectsComponent_Conditional_17_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "div", 48);
    \u0275\u0275text(3, "\u05E4\u05E8\u05D8\u05D9 \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 49)(5, "span", 50);
    \u0275\u0275text(6, "\u05E7\u05D5\u05D3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 51);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 49)(10, "span", 50);
    \u0275\u0275text(11, "\u05E1\u05D8\u05D8\u05D5\u05E1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 32);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 49)(15, "span", 50);
    \u0275\u0275text(16, "\u05DC\u05E7\u05D5\u05D7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 52);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 49)(20, "span", 50);
    \u0275\u0275text(21, "\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D0\u05E8\u05D5\u05D6\u05D9\u05DD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 52);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 47)(25, "div", 48);
    \u0275\u0275text(26, "\u05DC\u05D5\u05D7 \u05D6\u05DE\u05E0\u05D9\u05DD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 49)(28, "span", 50);
    \u0275\u0275text(29, "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05EA\u05D7\u05DC\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 52);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 49)(34, "span", 50);
    \u0275\u0275text(35, "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D9\u05E2\u05D3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 52);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 49)(40, "span", 50);
    \u0275\u0275text(41, "\u05D4\u05D5\u05E9\u05DC\u05DD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 52);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(45, ProjectsComponent_Conditional_17_ng_template_16_Conditional_45_Template, 5, 1, "div", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r13 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(row_r13.ProjectCode);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r0.statusClass(row_r13.Status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.statusLabel(row_r13.Status));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(row_r13.ClientOrgName || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(row_r13.ProductCount || "\u2014");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(row_r13.StartDate ? \u0275\u0275pipeBind2(32, 9, row_r13.StartDate, "dd/MM/yyyy") : "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(row_r13.TargetDate ? \u0275\u0275pipeBind2(38, 12, row_r13.TargetDate, "dd/MM/yyyy") : "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(row_r13.CompletedDate ? \u0275\u0275pipeBind2(44, 15, row_r13.CompletedDate, "dd/MM/yyyy") : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(row_r13.Description ? 45 : -1);
  }
}
function ProjectsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "kendo-grid", 15);
    \u0275\u0275listener("pageChange", function ProjectsComponent_Conditional_17_Template_kendo_grid_pageChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageChange($event));
    })("sortChange", function ProjectsComponent_Conditional_17_Template_kendo_grid_sortChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSortChange($event));
    });
    \u0275\u0275element(1, "kendo-grid-checkbox-column", 16);
    \u0275\u0275elementStart(2, "kendo-grid-column", 17);
    \u0275\u0275template(3, ProjectsComponent_Conditional_17_ng_template_3_Template, 2, 1, "ng-template", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "kendo-grid-column", 19);
    \u0275\u0275template(5, ProjectsComponent_Conditional_17_ng_template_5_Template, 3, 2, "ng-template", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "kendo-grid-column", 20);
    \u0275\u0275template(7, ProjectsComponent_Conditional_17_ng_template_7_Template, 2, 1, "ng-template", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "kendo-grid-column", 21);
    \u0275\u0275template(9, ProjectsComponent_Conditional_17_ng_template_9_Template, 2, 2, "ng-template", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "kendo-grid-column", 22);
    \u0275\u0275template(11, ProjectsComponent_Conditional_17_ng_template_11_Template, 2, 1, "ng-template", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "kendo-grid-column", 23);
    \u0275\u0275template(13, ProjectsComponent_Conditional_17_ng_template_13_Template, 2, 1, "ng-template", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "kendo-grid-column", 24);
    \u0275\u0275template(15, ProjectsComponent_Conditional_17_ng_template_15_Template, 11, 8, "ng-template", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, ProjectsComponent_Conditional_17_ng_template_16_Template, 46, 18, "ng-template", 25);
    \u0275\u0275element(17, "kendo-grid-messages", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", \u0275\u0275pureFunction2(21, _c02, ctx_r0.pagedData(), ctx_r0.filtered().length))("skip", ctx_r0.skip)("pageSize", ctx_r0.pageSize)("pageable", \u0275\u0275pureFunction1(25, _c2, \u0275\u0275pureFunction0(24, _c1)))("sortable", \u0275\u0275pureFunction0(27, _c3))("sort", ctx_r0.sort)("reorderable", true)("resizable", true)("selectable", \u0275\u0275pureFunction0(28, _c4))("columnMenu", true);
    \u0275\u0275advance();
    \u0275\u0275property("width", 44)("showSelectAll", true);
    \u0275\u0275advance();
    \u0275\u0275property("width", 120);
    \u0275\u0275advance(4);
    \u0275\u0275property("width", 180);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 120);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 90);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 110);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 170)("sortable", false)("resizable", false)("columnMenu", false);
  }
}
function ProjectsComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-project-dialog", 55);
    \u0275\u0275listener("closed", function ProjectsComponent_Conditional_18_Template_app_project_dialog_closed_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDialog());
    })("saved", function ProjectsComponent_Conditional_18_Template_app_project_dialog_saved_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSaved());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("project", ctx_r0.editProject());
  }
}
function ProjectsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "kendo-dialog", 56);
    \u0275\u0275listener("close", function ProjectsComponent_Conditional_19_Template_kendo_dialog_close_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelDelete());
    });
    \u0275\u0275elementStart(1, "div", 57)(2, "div", 58);
    \u0275\u0275element(3, "i", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 60);
    \u0275\u0275text(5, "\u05D0\u05D9\u05E9\u05D5\u05E8 \u05DE\u05D7\u05D9\u05E7\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 61);
    \u0275\u0275text(7, " \u05D4\u05D0\u05DD \u05DC\u05DE\u05D7\u05D5\u05E7 \u05D0\u05EA \u05D4\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8");
    \u0275\u0275element(8, "br");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 62);
    \u0275\u0275text(13, "\u05E4\u05E2\u05D5\u05DC\u05D4 \u05D6\u05D5 \u05D0\u05D9\u05E0\u05D4 \u05E0\u05D9\u05EA\u05E0\u05EA \u05DC\u05D1\u05D9\u05D8\u05D5\u05DC");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "kendo-dialog-actions")(15, "div", 63)(16, "button", 64);
    \u0275\u0275listener("click", function ProjectsComponent_Conditional_19_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmDelete());
    });
    \u0275\u0275element(17, "i", 45);
    \u0275\u0275text(18, " \u05DE\u05D7\u05E7 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 65);
    \u0275\u0275listener("click", function ProjectsComponent_Conditional_19_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelDelete());
    });
    \u0275\u0275text(20, "\u05D1\u05D9\u05D8\u05D5\u05DC");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("width", 420);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.pendingDelete().ProjectName);
  }
}
var ProjectsComponent = class _ProjectsComponent {
  http;
  router;
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
  allData = signal(
    [],
    ...ngDevMode ? [{ debugName: "allData" }] : (
      /* istanbul ignore next */
      []
    )
  );
  search = signal(
    "",
    ...ngDevMode ? [{ debugName: "search" }] : (
      /* istanbul ignore next */
      []
    )
  );
  showDialog = signal(
    false,
    ...ngDevMode ? [{ debugName: "showDialog" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editProject = signal(
    null,
    ...ngDevMode ? [{ debugName: "editProject" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pendingDelete = signal(
    null,
    ...ngDevMode ? [{ debugName: "pendingDelete" }] : (
      /* istanbul ignore next */
      []
    )
  );
  expandedRows = /* @__PURE__ */ new Set();
  sort = [{ field: "UpdatedAt", dir: "desc" }];
  skip = 0;
  pageSize = 10;
  filtered = computed(
    () => {
      const q = this.search().toLowerCase();
      const data = q ? this.allData().filter((p) => p.ProjectName.toLowerCase().includes(q) || p.ProjectCode.toLowerCase().includes(q) || (p.ClientOrgName || "").toLowerCase().includes(q)) : this.allData();
      return orderBy(data, this.sort);
    },
    ...ngDevMode ? [{ debugName: "filtered" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pagedData = computed(
    () => this.filtered().slice(this.skip, this.skip + this.pageSize),
    ...ngDevMode ? [{ debugName: "pagedData" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor(http, router) {
    this.http = http;
    this.router = router;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.expandedRows.clear();
    this.http.get("/api/projects").subscribe({
      next: (r) => {
        this.allData.set(r.data ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D8\u05E2\u05D9\u05E0\u05EA \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD");
        this.loading.set(false);
      }
    });
  }
  onSearch(v) {
    this.search.set(v);
    this.skip = 0;
  }
  onSortChange(s) {
    this.sort = s;
    this.skip = 0;
  }
  onPageChange(e) {
    this.skip = e.skip;
    this.expandedRows.clear();
  }
  toggleDetail(p, rowIndex) {
    if (this.expandedRows.has(p.ProjectID)) {
      this.expandedRows.delete(p.ProjectID);
      this.grid.collapseRow(rowIndex);
    } else {
      this.expandedRows.add(p.ProjectID);
      this.grid.expandRow(rowIndex);
    }
  }
  isExpanded(id) {
    return this.expandedRows.has(id);
  }
  openProject(id) {
    this.router.navigate(["/app/projects", id]);
  }
  openInBrowser(p) {
    if (!p.DevUrl)
      return;
    window.open(p.DevUrl, "_blank");
  }
  openNew() {
    this.editProject.set(null);
    this.showDialog.set(true);
  }
  openEdit(p) {
    this.editProject.set(p);
    this.showDialog.set(true);
  }
  closeDialog() {
    this.showDialog.set(false);
  }
  onSaved() {
    this.showDialog.set(false);
    this.load();
  }
  askDelete(p) {
    this.pendingDelete.set(p);
  }
  cancelDelete() {
    this.pendingDelete.set(null);
  }
  confirmDelete() {
    const p = this.pendingDelete();
    if (!p)
      return;
    this.pendingDelete.set(null);
    this.http.delete(`/api/projects/${p.ProjectID}`).subscribe({
      next: () => this.load(),
      error: () => {
      }
    });
  }
  statusLabel(s) {
    const map = {
      draft: "\u05D8\u05D9\u05D5\u05D8\u05D4",
      active: "\u05E4\u05E2\u05D9\u05DC",
      completed: "\u05D4\u05D5\u05E9\u05DC\u05DD",
      archived: "\u05D1\u05D0\u05E8\u05DB\u05D9\u05D5\u05DF"
    };
    return map[s] ?? s;
  }
  statusClass(s) {
    const map = {
      draft: "badge-gray",
      active: "badge-blue",
      completed: "badge-green",
      archived: "badge-muted"
    };
    return map[s] ?? "badge-gray";
  }
  static \u0275fac = function ProjectsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectsComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsComponent, selectors: [["app-projects"]], viewQuery: function ProjectsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(GridComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.grid = _t.first);
    }
  }, decls: 20, vars: 3, consts: [[1, "page-header"], [1, "page-header-start"], [1, "page-title"], [1, "page-subtitle"], [1, "btn-save", 3, "click"], [1, "toolbar"], [1, "search-wrap"], [1, "search-icon"], ["type", "text", "placeholder", "\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DC\u05E4\u05D9 \u05E9\u05DD, \u05E7\u05D5\u05D3, \u05DC\u05E7\u05D5\u05D7...", 1, "search-input", 3, "input"], [1, "spinner-wrap"], [1, "error-box"], ["scrollable", "none", 1, "projects-grid", 3, "data", "skip", "pageSize", "pageable", "sortable", "sort", "reorderable", "resizable", "selectable", "columnMenu"], [3, "project"], [3, "width"], ["type", "converging-spinner", "themeColor", "primary", "size", "medium"], ["scrollable", "none", 1, "projects-grid", 3, "pageChange", "sortChange", "data", "skip", "pageSize", "pageable", "sortable", "sort", "reorderable", "resizable", "selectable", "columnMenu"], [3, "width", "showSelectAll"], ["field", "ProjectCode", "title", "\u05E7\u05D5\u05D3", 3, "width"], ["kendoGridCellTemplate", ""], ["field", "ProjectName", "title", "\u05E9\u05DD \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8"], ["field", "ClientOrgName", "title", "\u05DC\u05E7\u05D5\u05D7", 3, "width"], ["field", "Status", "title", "\u05E1\u05D8\u05D8\u05D5\u05E1", 3, "width"], ["field", "ProductCount", "title", "\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD", 3, "width"], ["field", "TargetDate", "title", "\u05D9\u05E2\u05D3", 3, "width"], ["title", "", 3, "width", "sortable", "resizable", "columnMenu"], ["kendoGridDetailTemplate", ""], ["pagerItemsPerPage", "\u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3", "pagerOf", "\u05DE\u05EA\u05D5\u05DA", "pagerItems", "\u05E8\u05E9\u05D5\u05DE\u05D5\u05EA", "columnMenuFilter", "\u05E1\u05E0\u05DF", "columnMenuSort", "\u05DE\u05D9\u05D5\u05DF", "columnMenuColumns", "\u05E2\u05DE\u05D5\u05D3\u05D5\u05EA", "columnMenuSortAscending", "\u05E2\u05D5\u05DC\u05D4", "columnMenuSortDescending", "\u05D9\u05D5\u05E8\u05D3", "selectionCheckboxLabel", "\u05D1\u05D7\u05E8 \u05E9\u05D5\u05E8\u05D4", "selectAllCheckboxLabel", "\u05D1\u05D7\u05E8 \u05D4\u05DB\u05DC", "noRecords", "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD", "loading", "\u05D8\u05D5\u05E2\u05DF..."], [1, "code-badge"], [1, "project-name"], [1, "project-desc"], [1, "client-name"], [1, "text-muted"], [1, "status-badge", 3, "ngClass"], [1, "count-badge"], [1, "date-text"], [1, "row-actions"], ["title", "\u05E4\u05EA\u05D7 \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8", 1, "act-btn", "act-open", 3, "click"], [1, "pi", "pi-external-link"], ["title", "\u05D4\u05E4\u05E2\u05DC \u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4", 1, "act-btn", "act-browser", 3, "click", "disabled"], [1, "pi", "pi-play"], [1, "act-btn", "act-expand", 3, "click", "title"], [1, "pi"], ["title", "\u05E2\u05E8\u05D9\u05DB\u05D4", 1, "act-btn", "act-edit", 3, "click"], [1, "pi", "pi-pencil"], ["title", "\u05DE\u05D7\u05D9\u05E7\u05D4", 1, "act-btn", "act-delete", 3, "click"], [1, "pi", "pi-trash"], [1, "project-detail-card"], [1, "detail-group"], [1, "detail-group-title"], [1, "detail-row"], [1, "dl"], [1, "dv", "mono"], [1, "dv"], [1, "detail-group", "detail-group-full"], [1, "detail-desc"], [3, "closed", "saved", "project"], [3, "close", "width"], [1, "confirm-body"], [1, "confirm-icon-wrap"], [1, "pi", "pi-exclamation-triangle", "confirm-icon"], [1, "confirm-title"], [1, "confirm-msg"], [1, "confirm-sub"], [1, "confirm-footer"], [1, "btn-danger-confirm", 3, "click"], [1, "btn-cancel-confirm", 3, "click"]], template: function ProjectsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span", 3);
      \u0275\u0275text(5, "\u05E0\u05D9\u05D4\u05D5\u05DC \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9 \u05E4\u05D9\u05EA\u05D5\u05D7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "button", 4);
      \u0275\u0275listener("click", function ProjectsComponent_Template_button_click_6_listener() {
        return ctx.openNew();
      });
      \u0275\u0275elementStart(7, "mat-icon");
      \u0275\u0275text(8, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05D7\u05D3\u05E9 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 5)(11, "div", 6)(12, "mat-icon", 7);
      \u0275\u0275text(13, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 8);
      \u0275\u0275listener("input", function ProjectsComponent_Template_input_input_14_listener($event) {
        return ctx.onSearch($event.target.value);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(15, ProjectsComponent_Conditional_15_Template, 2, 0, "div", 9)(16, ProjectsComponent_Conditional_16_Template, 2, 1, "div", 10)(17, ProjectsComponent_Conditional_17_Template, 18, 29, "kendo-grid", 11);
      \u0275\u0275conditionalCreate(18, ProjectsComponent_Conditional_18_Template, 1, 1, "app-project-dialog", 12);
      \u0275\u0275conditionalCreate(19, ProjectsComponent_Conditional_19_Template, 21, 2, "kendo-dialog", 13);
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275conditional(ctx.loading() ? 15 : ctx.error() ? 16 : 17);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showDialog() ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.pendingDelete() ? 19 : -1);
    }
  }, dependencies: [CommonModule, NgClass, GridModule, GridComponent, CustomMessagesComponent, ColumnComponent, DetailTemplateDirective, CheckboxColumnComponent, CellTemplateDirective, DialogModule, DialogComponent, DialogActionsComponent, ButtonsModule, IndicatorsModule, LoaderComponent, MatIconModule, MatIcon, ProjectDialogComponent, SlicePipe, DatePipe], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  background: var(--sf-bg-card);\n  border-radius: 12px;\n  border: 1px solid var(--sf-border);\n  padding: 20px 24px;\n  box-sizing: border-box;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header-start[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--sf-text-secondary);\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 0 12px;\n  flex: 1;\n  max-width: 360px;\n}\n.search-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--sf-text-muted);\n}\n.search-input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  font-size: 0.88rem;\n  color: var(--sf-text);\n  padding: 8px 0;\n  width: 100%;\n  direction: rtl;\n}\n.spinner-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.error-box[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  color: #dc2626;\n  padding: 12px 16px;\n  border-radius: 8px;\n  font-size: 0.85rem;\n}\n.projects-grid[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n  .projects-grid .k-grid-header th.k-header {\n  background: var(--sf-grid-hd-bg) !important;\n  color: var(--sf-grid-hd-color) !important;\n  font-weight: 700 !important;\n  font-size: 0.78rem !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n  border-color: var(--sf-grid-hd-border) !important;\n}\n  .projects-grid .k-grid-header {\n  background: var(--sf-grid-hd-bg) !important;\n}\n  .projects-grid .k-column-menu-button {\n  color: var(--sf-grid-hd-color);\n  opacity: 0.7;\n}\n.code-badge[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.8rem;\n  background: var(--sf-bg);\n  border: 1px solid var(--sf-border);\n  border-radius: 5px;\n  padding: 2px 7px;\n  color: var(--sf-text-secondary);\n}\n.project-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.88rem;\n  color: var(--sf-text);\n}\n.project-desc[_ngcontent-%COMP%] {\n  font-size: 0.77rem;\n  color: var(--sf-text-muted);\n  margin-top: 2px;\n}\n.client-name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--sf-text);\n}\n.date-text[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: var(--sf-text-secondary);\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--sf-text-muted);\n  font-size: 0.82rem;\n}\n.count-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--sf-primary-light);\n  color: var(--sf-primary);\n  border-radius: 12px;\n  padding: 1px 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.badge-gray[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.badge-blue[_ngcontent-%COMP%] {\n  background: var(--sf-primary-light);\n  color: var(--sf-primary);\n}\n.badge-green[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #059669;\n}\n.badge-muted[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #94a3b8;\n  border: 1px solid #e2e8f0;\n}\n.row-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.act-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.act-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.act-open[_ngcontent-%COMP%] {\n  color: var(--sf-primary);\n  background: var(--sf-primary-light);\n}\n.act-open[_ngcontent-%COMP%]:hover {\n  background: var(--sf-primary);\n  color: #fff;\n}\n.act-browser[_ngcontent-%COMP%] {\n  color: #059669;\n  background: #d1fae5;\n}\n.act-browser[_ngcontent-%COMP%]:hover {\n  background: #059669;\n  color: #fff;\n}\n.act-browser[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.act-expand[_ngcontent-%COMP%] {\n  color: var(--sf-text-secondary);\n}\n.act-expand[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-primary);\n}\n.act-expand.expanded[_ngcontent-%COMP%] {\n  color: var(--sf-primary);\n}\n.act-edit[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.act-edit[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n}\n.act-delete[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.act-delete[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.project-detail-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 16px 8px;\n  direction: rtl;\n}\n.detail-group[_ngcontent-%COMP%] {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 12px;\n  padding: 14px 18px;\n  min-width: 220px;\n  flex: 1;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.detail-group-full[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n}\n.detail-group-title[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--sf-text-muted);\n  margin-bottom: 10px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--sf-border);\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 0;\n  font-size: 0.83rem;\n}\n.detail-row[_ngcontent-%COMP%]    + .detail-row[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--sf-border);\n}\n.dl[_ngcontent-%COMP%] {\n  color: var(--sf-text-secondary);\n}\n.dv[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--sf-text);\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.8rem;\n}\n.detail-desc[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  color: var(--sf-text);\n  line-height: 1.6;\n}\n  .k-dialog-actions {\n  direction: rtl !important;\n}\n.confirm-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 24px 16px 8px;\n  text-align: center;\n  direction: rtl;\n}\n.confirm-icon-wrap[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: #fff7ed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n.confirm-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #f97316;\n}\n.confirm-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin-bottom: 10px;\n}\n.confirm-msg[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  color: var(--sf-text-secondary);\n  line-height: 1.6;\n  margin-bottom: 6px;\n}\n.confirm-sub[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--sf-danger);\n  font-weight: 500;\n}\n.confirm-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  direction: rtl;\n  width: 100%;\n  padding: 0 4px;\n}\n.btn-danger-confirm[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #ef4444;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 22px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-danger-confirm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.btn-danger-confirm[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n.btn-cancel-confirm[_ngcontent-%COMP%] {\n  background: var(--sf-bg-card);\n  color: var(--sf-text-secondary);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 9px 20px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: background 0.13s;\n}\n.btn-cancel-confirm[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.btn-save[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #f97316;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 20px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: background 0.15s;\n  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.3);\n}\n.btn-save[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.btn-save[_ngcontent-%COMP%]:hover {\n  background: #ea6c0a;\n}\n/*# sourceMappingURL=projects.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectsComponent, [{
    type: Component,
    args: [{ selector: "app-projects", standalone: true, imports: [
      CommonModule,
      GridModule,
      DialogModule,
      ButtonsModule,
      IndicatorsModule,
      MatIconModule,
      ProjectDialogComponent
    ], template: `<div class="page-header">
  <div class="page-header-start">
    <h1 class="page-title">\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD</h1>
    <span class="page-subtitle">\u05E0\u05D9\u05D4\u05D5\u05DC \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9 \u05E4\u05D9\u05EA\u05D5\u05D7</span>
  </div>
  <button class="btn-save" (click)="openNew()">
    <mat-icon>add</mat-icon> \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05D7\u05D3\u05E9
  </button>
</div>

<div class="toolbar">
  <div class="search-wrap">
    <mat-icon class="search-icon">search</mat-icon>
    <input class="search-input" type="text" placeholder="\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DC\u05E4\u05D9 \u05E9\u05DD, \u05E7\u05D5\u05D3, \u05DC\u05E7\u05D5\u05D7..."
           (input)="onSearch($any($event.target).value)" />
  </div>
</div>

@if (loading()) {
  <div class="spinner-wrap">
    <kendo-loader type="converging-spinner" themeColor="primary" size="medium" />
  </div>
} @else if (error()) {
  <div class="error-box">{{ error() }}</div>
} @else {

<kendo-grid class="projects-grid"
  [data]="{ data: pagedData(), total: filtered().length }"
  [skip]="skip" [pageSize]="pageSize"
  [pageable]="{ buttonCount: 5, info: true, type: 'numeric', pageSizes: [10, 25, 50] }"
  [sortable]="{ mode: 'single', allowUnsort: false }"
  [sort]="sort"
  [reorderable]="true" [resizable]="true"
  [selectable]="{ mode: 'multiple', checkboxOnly: true }"
  [columnMenu]="true"
  scrollable="none"
  (pageChange)="onPageChange($event)"
  (sortChange)="onSortChange($event)">

  <kendo-grid-checkbox-column [width]="44" [showSelectAll]="true" />

  <kendo-grid-column field="ProjectCode" title="\u05E7\u05D5\u05D3" [width]="120">
    <ng-template kendoGridCellTemplate let-row>
      <span class="code-badge">{{ row.ProjectCode }}</span>
    </ng-template>
  </kendo-grid-column>

  <kendo-grid-column field="ProjectName" title="\u05E9\u05DD \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8">
    <ng-template kendoGridCellTemplate let-row>
      <div class="project-name">{{ row.ProjectName }}</div>
      @if (row.Description) {
        <div class="project-desc">{{ row.Description | slice:0:60 }}{{ row.Description.length > 60 ? '...' : '' }}</div>
      }
    </ng-template>
  </kendo-grid-column>

  <kendo-grid-column field="ClientOrgName" title="\u05DC\u05E7\u05D5\u05D7" [width]="180">
    <ng-template kendoGridCellTemplate let-row>
      @if (row.ClientOrgName) {
        <span class="client-name">{{ row.ClientOrgName }}</span>
      } @else {
        <span class="text-muted">\u2014</span>
      }
    </ng-template>
  </kendo-grid-column>

  <kendo-grid-column field="Status" title="\u05E1\u05D8\u05D8\u05D5\u05E1" [width]="120">
    <ng-template kendoGridCellTemplate let-row>
      <span class="status-badge" [ngClass]="statusClass(row.Status)">
        {{ statusLabel(row.Status) }}
      </span>
    </ng-template>
  </kendo-grid-column>

  <kendo-grid-column field="ProductCount" title="\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD" [width]="90">
    <ng-template kendoGridCellTemplate let-row>
      @if (row.ProductCount > 0) {
        <span class="count-badge">{{ row.ProductCount }}</span>
      } @else {
        <span class="text-muted">\u2014</span>
      }
    </ng-template>
  </kendo-grid-column>

  <kendo-grid-column field="TargetDate" title="\u05D9\u05E2\u05D3" [width]="110">
    <ng-template kendoGridCellTemplate let-row>
      @if (row.TargetDate) {
        <span class="date-text">{{ row.TargetDate | date:'dd/MM/yy' }}</span>
      } @else {
        <span class="text-muted">\u2014</span>
      }
    </ng-template>
  </kendo-grid-column>

  <kendo-grid-column title="" [width]="170" [sortable]="false"
    [resizable]="false" [columnMenu]="false">
    <ng-template kendoGridCellTemplate let-row let-rowIndex="rowIndex">
      <div class="row-actions">
        <button class="act-btn act-open" title="\u05E4\u05EA\u05D7 \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8"
                (click)="openProject(row.ProjectID)">
          <i class="pi pi-external-link"></i>
        </button>
        <button class="act-btn act-browser" title="\u05D4\u05E4\u05E2\u05DC \u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4"
                [disabled]="!row.DevUrl"
                (click)="openInBrowser(row)">
          <i class="pi pi-play"></i>
        </button>
        <button class="act-btn act-expand"
                [class.expanded]="isExpanded(row.ProjectID)"
                [title]="isExpanded(row.ProjectID) ? '\u05E1\u05D2\u05D5\u05E8' : '\u05D4\u05E8\u05D7\u05D1\u05D4'"
                (click)="toggleDetail(row, rowIndex)">
          <i class="pi" [class.pi-chevron-down]="!isExpanded(row.ProjectID)"
                        [class.pi-chevron-up]="isExpanded(row.ProjectID)"></i>
        </button>
        <button class="act-btn act-edit" title="\u05E2\u05E8\u05D9\u05DB\u05D4" (click)="openEdit(row)">
          <i class="pi pi-pencil"></i>
        </button>
        <button class="act-btn act-delete" title="\u05DE\u05D7\u05D9\u05E7\u05D4" (click)="askDelete(row)">
          <i class="pi pi-trash"></i>
        </button>
      </div>
    </ng-template>
  </kendo-grid-column>

  <!-- \u2500\u2500 Detail Row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <ng-template kendoGridDetailTemplate let-row>
    <div class="project-detail-card">
      <div class="detail-group">
        <div class="detail-group-title">\u05E4\u05E8\u05D8\u05D9 \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8</div>
        <div class="detail-row"><span class="dl">\u05E7\u05D5\u05D3</span><span class="dv mono">{{ row.ProjectCode }}</span></div>
        <div class="detail-row"><span class="dl">\u05E1\u05D8\u05D8\u05D5\u05E1</span>
          <span class="status-badge" [ngClass]="statusClass(row.Status)">{{ statusLabel(row.Status) }}</span>
        </div>
        <div class="detail-row"><span class="dl">\u05DC\u05E7\u05D5\u05D7</span><span class="dv">{{ row.ClientOrgName || '\u2014' }}</span></div>
        <div class="detail-row"><span class="dl">\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D0\u05E8\u05D5\u05D6\u05D9\u05DD</span><span class="dv">{{ row.ProductCount || '\u2014' }}</span></div>
      </div>
      <div class="detail-group">
        <div class="detail-group-title">\u05DC\u05D5\u05D7 \u05D6\u05DE\u05E0\u05D9\u05DD</div>
        <div class="detail-row"><span class="dl">\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05EA\u05D7\u05DC\u05D4</span><span class="dv">{{ row.StartDate ? (row.StartDate | date:'dd/MM/yyyy') : '\u2014' }}</span></div>
        <div class="detail-row"><span class="dl">\u05EA\u05D0\u05E8\u05D9\u05DA \u05D9\u05E2\u05D3</span><span class="dv">{{ row.TargetDate ? (row.TargetDate | date:'dd/MM/yyyy') : '\u2014' }}</span></div>
        <div class="detail-row"><span class="dl">\u05D4\u05D5\u05E9\u05DC\u05DD</span><span class="dv">{{ row.CompletedDate ? (row.CompletedDate | date:'dd/MM/yyyy') : '\u2014' }}</span></div>
      </div>
      @if (row.Description) {
        <div class="detail-group detail-group-full">
          <div class="detail-group-title">\u05EA\u05D9\u05D0\u05D5\u05E8</div>
          <div class="detail-desc">{{ row.Description }}</div>
        </div>
      }
    </div>
  </ng-template>

  <kendo-grid-messages
    pagerItemsPerPage="\u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3" pagerOf="\u05DE\u05EA\u05D5\u05DA" pagerItems="\u05E8\u05E9\u05D5\u05DE\u05D5\u05EA"
    columnMenuFilter="\u05E1\u05E0\u05DF" columnMenuSort="\u05DE\u05D9\u05D5\u05DF" columnMenuColumns="\u05E2\u05DE\u05D5\u05D3\u05D5\u05EA"
    columnMenuSortAscending="\u05E2\u05D5\u05DC\u05D4" columnMenuSortDescending="\u05D9\u05D5\u05E8\u05D3"
    selectionCheckboxLabel="\u05D1\u05D7\u05E8 \u05E9\u05D5\u05E8\u05D4" selectAllCheckboxLabel="\u05D1\u05D7\u05E8 \u05D4\u05DB\u05DC"
    noRecords="\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD" loading="\u05D8\u05D5\u05E2\u05DF..." />
</kendo-grid>

}

<!-- \u2500\u2500 Edit Dialog \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
@if (showDialog()) {
  <app-project-dialog
    [project]="editProject()"
    (closed)="closeDialog()"
    (saved)="onSaved()" />
}

<!-- \u2500\u2500 Confirm Delete Dialog \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
@if (pendingDelete()) {
  <kendo-dialog [width]="420" (close)="cancelDelete()">
    <div class="confirm-body">
      <div class="confirm-icon-wrap">
        <i class="pi pi-exclamation-triangle confirm-icon"></i>
      </div>
      <div class="confirm-title">\u05D0\u05D9\u05E9\u05D5\u05E8 \u05DE\u05D7\u05D9\u05E7\u05D4</div>
      <div class="confirm-msg">
        \u05D4\u05D0\u05DD \u05DC\u05DE\u05D7\u05D5\u05E7 \u05D0\u05EA \u05D4\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8<br>
        <strong>{{ pendingDelete()!.ProjectName }}</strong>?
      </div>
      <div class="confirm-sub">\u05E4\u05E2\u05D5\u05DC\u05D4 \u05D6\u05D5 \u05D0\u05D9\u05E0\u05D4 \u05E0\u05D9\u05EA\u05E0\u05EA \u05DC\u05D1\u05D9\u05D8\u05D5\u05DC</div>
    </div>
    <kendo-dialog-actions>
      <div class="confirm-footer">
        <button class="btn-danger-confirm" (click)="confirmDelete()">
          <i class="pi pi-trash"></i> \u05DE\u05D7\u05E7
        </button>
        <button class="btn-cancel-confirm" (click)="cancelDelete()">\u05D1\u05D9\u05D8\u05D5\u05DC</button>
      </div>
    </kendo-dialog-actions>
  </kendo-dialog>
}
`, styles: ['/* src/app/features/projects/projects.component.scss */\n:host {\n  display: block;\n  width: 100%;\n  background: var(--sf-bg-card);\n  border-radius: 12px;\n  border: 1px solid var(--sf-border);\n  padding: 20px 24px;\n  box-sizing: border-box;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header-start {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.page-title {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0;\n}\n.page-subtitle {\n  font-size: 0.82rem;\n  color: var(--sf-text-secondary);\n}\n.toolbar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.search-wrap {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 0 12px;\n  flex: 1;\n  max-width: 360px;\n}\n.search-icon {\n  font-size: 18px;\n  color: var(--sf-text-muted);\n}\n.search-input {\n  border: none;\n  background: transparent;\n  outline: none;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  font-size: 0.88rem;\n  color: var(--sf-text);\n  padding: 8px 0;\n  width: 100%;\n  direction: rtl;\n}\n.spinner-wrap {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.error-box {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  color: #dc2626;\n  padding: 12px 16px;\n  border-radius: 8px;\n  font-size: 0.85rem;\n}\n.projects-grid {\n  direction: rtl;\n}\n::ng-deep .projects-grid .k-grid-header th.k-header {\n  background: var(--sf-grid-hd-bg) !important;\n  color: var(--sf-grid-hd-color) !important;\n  font-weight: 700 !important;\n  font-size: 0.78rem !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n  border-color: var(--sf-grid-hd-border) !important;\n}\n::ng-deep .projects-grid .k-grid-header {\n  background: var(--sf-grid-hd-bg) !important;\n}\n::ng-deep .projects-grid .k-column-menu-button {\n  color: var(--sf-grid-hd-color);\n  opacity: 0.7;\n}\n.code-badge {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.8rem;\n  background: var(--sf-bg);\n  border: 1px solid var(--sf-border);\n  border-radius: 5px;\n  padding: 2px 7px;\n  color: var(--sf-text-secondary);\n}\n.project-name {\n  font-weight: 600;\n  font-size: 0.88rem;\n  color: var(--sf-text);\n}\n.project-desc {\n  font-size: 0.77rem;\n  color: var(--sf-text-muted);\n  margin-top: 2px;\n}\n.client-name {\n  font-size: 0.85rem;\n  color: var(--sf-text);\n}\n.date-text {\n  font-size: 0.83rem;\n  color: var(--sf-text-secondary);\n}\n.text-muted {\n  color: var(--sf-text-muted);\n  font-size: 0.82rem;\n}\n.count-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--sf-primary-light);\n  color: var(--sf-primary);\n  border-radius: 12px;\n  padding: 1px 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n}\n.status-badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.badge-gray {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.badge-blue {\n  background: var(--sf-primary-light);\n  color: var(--sf-primary);\n}\n.badge-green {\n  background: #d1fae5;\n  color: #059669;\n}\n.badge-muted {\n  background: #f8fafc;\n  color: #94a3b8;\n  border: 1px solid #e2e8f0;\n}\n.row-actions {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.act-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.act-btn i {\n  font-size: 0.9rem;\n}\n.act-open {\n  color: var(--sf-primary);\n  background: var(--sf-primary-light);\n}\n.act-open:hover {\n  background: var(--sf-primary);\n  color: #fff;\n}\n.act-browser {\n  color: #059669;\n  background: #d1fae5;\n}\n.act-browser:hover {\n  background: #059669;\n  color: #fff;\n}\n.act-browser:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.act-expand {\n  color: var(--sf-text-secondary);\n}\n.act-expand:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-primary);\n}\n.act-expand.expanded {\n  color: var(--sf-primary);\n}\n.act-edit {\n  color: #3b82f6;\n}\n.act-edit:hover {\n  background: #eff6ff;\n}\n.act-delete {\n  color: #ef4444;\n}\n.act-delete:hover {\n  background: #fef2f2;\n}\n.project-detail-card {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 16px 8px;\n  direction: rtl;\n}\n.detail-group {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 12px;\n  padding: 14px 18px;\n  min-width: 220px;\n  flex: 1;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.detail-group-full {\n  flex-basis: 100%;\n}\n.detail-group-title {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--sf-text-muted);\n  margin-bottom: 10px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--sf-border);\n}\n.detail-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 0;\n  font-size: 0.83rem;\n}\n.detail-row + .detail-row {\n  border-top: 1px solid var(--sf-border);\n}\n.dl {\n  color: var(--sf-text-secondary);\n}\n.dv {\n  font-weight: 600;\n  color: var(--sf-text);\n}\n.mono {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.8rem;\n}\n.detail-desc {\n  font-size: 0.84rem;\n  color: var(--sf-text);\n  line-height: 1.6;\n}\n::ng-deep .k-dialog-actions {\n  direction: rtl !important;\n}\n.confirm-body {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 24px 16px 8px;\n  text-align: center;\n  direction: rtl;\n}\n.confirm-icon-wrap {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: #fff7ed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n.confirm-icon {\n  font-size: 2rem;\n  color: #f97316;\n}\n.confirm-title {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin-bottom: 10px;\n}\n.confirm-msg {\n  font-size: 0.92rem;\n  color: var(--sf-text-secondary);\n  line-height: 1.6;\n  margin-bottom: 6px;\n}\n.confirm-sub {\n  font-size: 0.78rem;\n  color: var(--sf-danger);\n  font-weight: 500;\n}\n.confirm-footer {\n  display: flex;\n  gap: 10px;\n  direction: rtl;\n  width: 100%;\n  padding: 0 4px;\n}\n.btn-danger-confirm {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #ef4444;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 22px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-danger-confirm i {\n  font-size: 0.85rem;\n}\n.btn-danger-confirm:hover {\n  background: #dc2626;\n}\n.btn-cancel-confirm {\n  background: var(--sf-bg-card);\n  color: var(--sf-text-secondary);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 9px 20px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: background 0.13s;\n}\n.btn-cancel-confirm:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.btn-save {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #f97316;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 20px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: background 0.15s;\n  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.3);\n}\n.btn-save mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.btn-save:hover {\n  background: #ea6c0a;\n}\n/*# sourceMappingURL=projects.component.css.map */\n'] }]
  }], () => [{ type: HttpClient }, { type: Router }], { grid: [{
    type: ViewChild,
    args: [GridComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsComponent, { className: "ProjectsComponent", filePath: "src/app/features/projects/projects.component.ts", lineNumber: 44 });
})();
export {
  ProjectsComponent
};
//# sourceMappingURL=chunk-G6HJQBBD.js.map
