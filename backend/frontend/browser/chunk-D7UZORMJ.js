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
  fileExcelIcon,
  filePdfIcon,
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
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-4QF53X3W.js";
import {
  CommonModule,
  Component,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-DEBWI7RP.js";

// src/app/features/catalog/categories/category-dialog/category-dialog.component.ts
function CategoryDialogComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMsg);
  }
}
function CategoryDialogComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4 (\u05E2\u05D3 30 \u05EA\u05D5\u05D5\u05D9\u05DD)");
    \u0275\u0275elementEnd();
  }
}
function CategoryDialogComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
  }
}
function CategoryDialogComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function CategoryDialogComponent_For_22_Template_button_click_0_listener() {
      const c_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setColor(c_r3));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background", c_r3);
    \u0275\u0275classProp("selected", ctx_r0.form.get("ColorHex")?.value === c_r3);
  }
}
var COLORS = ["#0D47FF", "#0891b2", "#7c3aed", "#059669", "#e11d48", "#d97706", "#64748b"];
var CategoryDialogComponent = class _CategoryDialogComponent {
  fb;
  svc;
  cat = null;
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
  colors = COLORS;
  get isEdit() {
    return !!this.cat?.CategoryID;
  }
  get title() {
    return this.isEdit ? "\u05E2\u05E8\u05D9\u05DB\u05EA \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4" : "\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 \u05D7\u05D3\u05E9\u05D4";
  }
  constructor(fb, svc) {
    this.fb = fb;
    this.svc = svc;
  }
  ngOnInit() {
    const c = this.cat;
    this.form = this.fb.group({
      CategoryCode: [c?.CategoryCode ?? "", [Validators.required, Validators.maxLength(30)]],
      CategoryName: [c?.CategoryName ?? "", [Validators.required, Validators.maxLength(100)]],
      ColorHex: [c?.ColorHex ?? "#0D47FF"],
      IconName: [c?.IconName ?? ""],
      SortOrder: [c?.SortOrder ?? 0],
      IsActive: [c?.IsActive ?? true]
    });
  }
  setColor(hex) {
    this.form.get("ColorHex").setValue(hex);
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    this.errorMsg = "";
    const payload = __spreadProps(__spreadValues({}, this.form.value), { CategoryID: this.cat?.CategoryID ?? 0, TenantID: this.cat?.TenantID ?? 0 });
    this.svc.saveCategory(payload).subscribe({
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
  static \u0275fac = function CategoryDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoryDialogComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CatalogService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryDialogComponent, selectors: [["app-category-dialog"]], inputs: { cat: "cat" }, outputs: { saved: "saved", closed: "closed" }, decls: 46, vars: 13, consts: [[3, "close", "title", "width"], [1, "cat-form", 3, "formGroup"], [1, "form-error-banner"], [1, "form-row"], [1, "form-label"], [1, "req"], ["kendoTextBox", "", "formControlName", "CategoryCode", "placeholder", "\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: BIZ_MGMT", 1, "field-full", 2, "text-transform", "uppercase", "direction", "ltr", "text-align", "right"], [1, "field-error"], ["kendoTextBox", "", "formControlName", "CategoryName", "placeholder", "\u05E9\u05DD \u05D4\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4", 1, "field-full"], [1, "color-row"], ["type", "button", 1, "color-swatch", 3, "background", "selected"], ["type", "color", 1, "color-custom", 3, "change", "value"], ["kendoTextBox", "", "formControlName", "IconName", "placeholder", "\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: pi-briefcase", 1, "field-full", 2, "direction", "ltr", "text-align", "right"], ["kendoTextBox", "", "type", "number", "formControlName", "SortOrder", 1, "field-num"], [1, "seg-ctrl"], ["type", "button", 1, "seg-btn", 3, "click"], [1, "dialog-footer"], [1, "btn-save", 3, "click", "disabled"], [1, "btn-cancel", 3, "click"], ["type", "button", 1, "color-swatch", 3, "click"]], template: function CategoryDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "kendo-dialog", 0);
      \u0275\u0275listener("close", function CategoryDialogComponent_Template_kendo_dialog_close_0_listener() {
        return ctx.close();
      });
      \u0275\u0275elementStart(1, "form", 1);
      \u0275\u0275conditionalCreate(2, CategoryDialogComponent_Conditional_2_Template, 2, 1, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "label", 4);
      \u0275\u0275text(5, "\u05E7\u05D5\u05D3 \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 ");
      \u0275\u0275elementStart(6, "span", 5);
      \u0275\u0275text(7, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(8, "input", 6);
      \u0275\u0275controlCreate();
      \u0275\u0275conditionalCreate(9, CategoryDialogComponent_Conditional_9_Template, 2, 0, "span", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 3)(11, "label", 4);
      \u0275\u0275text(12, "\u05E9\u05DD \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 ");
      \u0275\u0275elementStart(13, "span", 5);
      \u0275\u0275text(14, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(15, "input", 8);
      \u0275\u0275controlCreate();
      \u0275\u0275conditionalCreate(16, CategoryDialogComponent_Conditional_16_Template, 2, 0, "span", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 3)(18, "label", 4);
      \u0275\u0275text(19, "\u05E6\u05D1\u05E2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 9);
      \u0275\u0275repeaterCreate(21, CategoryDialogComponent_For_22_Template, 1, 4, "button", 10, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementStart(23, "input", 11);
      \u0275\u0275listener("change", function CategoryDialogComponent_Template_input_change_23_listener($event) {
        return ctx.setColor($event.target.value);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 3)(25, "label", 4);
      \u0275\u0275text(26, "\u05E9\u05DD \u05D0\u05D9\u05D9\u05E7\u05D5\u05DF");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "input", 12);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 3)(29, "label", 4);
      \u0275\u0275text(30, "\u05E1\u05D3\u05E8 \u05EA\u05E6\u05D5\u05D2\u05D4");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "input", 13);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 3)(33, "label", 4);
      \u0275\u0275text(34, "\u05E1\u05D8\u05D8\u05D5\u05E1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 14)(36, "button", 15);
      \u0275\u0275listener("click", function CategoryDialogComponent_Template_button_click_36_listener() {
        return ctx.form.get("IsActive")?.setValue(true);
      });
      \u0275\u0275text(37, "\u2713 \u05E4\u05E2\u05D9\u05DC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "button", 15);
      \u0275\u0275listener("click", function CategoryDialogComponent_Template_button_click_38_listener() {
        return ctx.form.get("IsActive")?.setValue(false);
      });
      \u0275\u0275text(39, "\u2717 \u05DE\u05D5\u05E9\u05D4\u05D4");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "kendo-dialog-actions")(41, "div", 16)(42, "button", 17);
      \u0275\u0275listener("click", function CategoryDialogComponent_Template_button_click_42_listener() {
        return ctx.save();
      });
      \u0275\u0275text(43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "button", 18);
      \u0275\u0275listener("click", function CategoryDialogComponent_Template_button_click_44_listener() {
        return ctx.close();
      });
      \u0275\u0275text(45, "\u05D1\u05D9\u05D8\u05D5\u05DC");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("title", ctx.title)("width", 460);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMsg ? 2 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form.get("CategoryCode")?.invalid && ctx.form.get("CategoryCode")?.touched ? 9 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form.get("CategoryName")?.invalid && ctx.form.get("CategoryName")?.touched ? 16 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.colors);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.form.get("ColorHex")?.value);
      \u0275\u0275advance(4);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275classProp("seg-on", !!ctx.form.get("IsActive")?.value);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("seg-off", !ctx.form.get("IsActive")?.value);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.saving());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.saving() ? "\u05E9\u05D5\u05DE\u05E8..." : "\u2713 \u05E9\u05DE\u05D5\u05E8", " ");
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, DialogModule, DialogComponent, DialogActionsComponent, TextBoxModule, TextBoxDirective, ButtonsModule], styles: ['\n.cat-form[_ngcontent-%COMP%] {\n  padding: 8px 4px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  direction: rtl;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  text-align: right;\n}\n.req[_ngcontent-%COMP%] {\n  color: var(--sf-danger);\n}\n.field-full[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: right;\n}\n.field-num[_ngcontent-%COMP%] {\n  width: 120px;\n  text-align: right;\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--sf-danger);\n  text-align: right;\n}\n.form-error-banner[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 6px;\n  padding: 10px 14px;\n  color: var(--sf-danger);\n  font-size: 0.85rem;\n  text-align: right;\n}\n.color-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-wrap: wrap;\n  direction: rtl;\n}\n.color-swatch[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  cursor: pointer;\n  transition: transform 0.1s, border-color 0.1s;\n  flex-shrink: 0;\n}\n.color-swatch[_ngcontent-%COMP%]:hover {\n  transform: scale(1.15);\n}\n.color-swatch.selected[_ngcontent-%COMP%] {\n  border-color: var(--sf-text);\n  transform: scale(1.15);\n}\n.color-custom[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: none;\n  padding: 0;\n  border-radius: 50%;\n  cursor: pointer;\n  background: none;\n}\n.seg-ctrl[_ngcontent-%COMP%] {\n  display: inline-flex;\n  direction: rtl;\n  align-self: flex-start;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.seg-btn[_ngcontent-%COMP%] {\n  padding: 7px 20px;\n  font-size: 0.82rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  border: none;\n  background: var(--sf-bg);\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.seg-btn[_ngcontent-%COMP%]    + .seg-btn[_ngcontent-%COMP%] {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.seg-btn[_ngcontent-%COMP%]:hover:not(.seg-on):not(.seg-off) {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.seg-btn.seg-on[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: #fff;\n  font-weight: 600;\n}\n.seg-btn.seg-off[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #fff;\n  font-weight: 600;\n}\n.dialog-footer[_ngcontent-%COMP%] {\n  display: flex;\n  direction: rtl;\n  gap: 8px;\n  width: 100%;\n}\n  .k-dialog-actions {\n  direction: rtl !important;\n}\n.btn-save[_ngcontent-%COMP%] {\n  background: #f97316;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 22px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.btn-save[_ngcontent-%COMP%]:hover {\n  background: #ea6c0c;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: #fff;\n  color: var(--sf-text-secondary);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 9px 22px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n}\n/*# sourceMappingURL=category-dialog.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryDialogComponent, [{
    type: Component,
    args: [{ selector: "app-category-dialog", standalone: true, imports: [CommonModule, ReactiveFormsModule, DialogModule, TextBoxModule, ButtonsModule], template: `<kendo-dialog [title]="title" [width]="460" (close)="close()">

  <form [formGroup]="form" class="cat-form">

    @if (errorMsg) {
      <div class="form-error-banner">{{ errorMsg }}</div>
    }

    <div class="form-row">
      <label class="form-label">\u05E7\u05D5\u05D3 \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 <span class="req">*</span></label>
      <input kendoTextBox formControlName="CategoryCode" placeholder="\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: BIZ_MGMT"
             class="field-full" style="text-transform:uppercase; direction:ltr; text-align:right" />
      @if (form.get('CategoryCode')?.invalid && form.get('CategoryCode')?.touched) {
        <span class="field-error">\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4 (\u05E2\u05D3 30 \u05EA\u05D5\u05D5\u05D9\u05DD)</span>
      }
    </div>

    <div class="form-row">
      <label class="form-label">\u05E9\u05DD \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 <span class="req">*</span></label>
      <input kendoTextBox formControlName="CategoryName" placeholder="\u05E9\u05DD \u05D4\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4" class="field-full" />
      @if (form.get('CategoryName')?.invalid && form.get('CategoryName')?.touched) {
        <span class="field-error">\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4</span>
      }
    </div>

    <div class="form-row">
      <label class="form-label">\u05E6\u05D1\u05E2</label>
      <div class="color-row">
        @for (c of colors; track c) {
          <button type="button" class="color-swatch"
                  [style.background]="c"
                  [class.selected]="form.get('ColorHex')?.value === c"
                  (click)="setColor(c)">
          </button>
        }
        <input type="color" class="color-custom"
               [value]="form.get('ColorHex')?.value"
               (change)="setColor($any($event.target).value)" />
      </div>
    </div>

    <div class="form-row">
      <label class="form-label">\u05E9\u05DD \u05D0\u05D9\u05D9\u05E7\u05D5\u05DF</label>
      <input kendoTextBox formControlName="IconName" placeholder="\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: pi-briefcase" class="field-full" style="direction:ltr; text-align:right" />
    </div>

    <div class="form-row">
      <label class="form-label">\u05E1\u05D3\u05E8 \u05EA\u05E6\u05D5\u05D2\u05D4</label>
      <input kendoTextBox type="number" formControlName="SortOrder" class="field-num" />
    </div>

    <div class="form-row">
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

  </form>

  <kendo-dialog-actions>
    <div class="dialog-footer">
      <button class="btn-save" [disabled]="saving()" (click)="save()">
        {{ saving() ? '\u05E9\u05D5\u05DE\u05E8...' : '\u2713 \u05E9\u05DE\u05D5\u05E8' }}
      </button>
      <button class="btn-cancel" (click)="close()">\u05D1\u05D9\u05D8\u05D5\u05DC</button>
    </div>
  </kendo-dialog-actions>

</kendo-dialog>
`, styles: ['/* src/app/features/catalog/categories/category-dialog/category-dialog.component.scss */\n.cat-form {\n  padding: 8px 4px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  direction: rtl;\n}\n.form-row {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-label {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  text-align: right;\n}\n.req {\n  color: var(--sf-danger);\n}\n.field-full {\n  width: 100%;\n  text-align: right;\n}\n.field-num {\n  width: 120px;\n  text-align: right;\n}\n.field-error {\n  font-size: 0.75rem;\n  color: var(--sf-danger);\n  text-align: right;\n}\n.form-error-banner {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 6px;\n  padding: 10px 14px;\n  color: var(--sf-danger);\n  font-size: 0.85rem;\n  text-align: right;\n}\n.color-row {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-wrap: wrap;\n  direction: rtl;\n}\n.color-swatch {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  cursor: pointer;\n  transition: transform 0.1s, border-color 0.1s;\n  flex-shrink: 0;\n}\n.color-swatch:hover {\n  transform: scale(1.15);\n}\n.color-swatch.selected {\n  border-color: var(--sf-text);\n  transform: scale(1.15);\n}\n.color-custom {\n  width: 28px;\n  height: 28px;\n  border: none;\n  padding: 0;\n  border-radius: 50%;\n  cursor: pointer;\n  background: none;\n}\n.seg-ctrl {\n  display: inline-flex;\n  direction: rtl;\n  align-self: flex-start;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.seg-btn {\n  padding: 7px 20px;\n  font-size: 0.82rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  border: none;\n  background: var(--sf-bg);\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.seg-btn + .seg-btn {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.seg-btn:hover:not(.seg-on):not(.seg-off) {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.seg-btn.seg-on {\n  background: #10b981;\n  color: #fff;\n  font-weight: 600;\n}\n.seg-btn.seg-off {\n  background: #ef4444;\n  color: #fff;\n  font-weight: 600;\n}\n.dialog-footer {\n  display: flex;\n  direction: rtl;\n  gap: 8px;\n  width: 100%;\n}\n::ng-deep .k-dialog-actions {\n  direction: rtl !important;\n}\n.btn-save {\n  background: #f97316;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 22px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.btn-save:hover {\n  background: #ea6c0c;\n}\n.btn-save:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.btn-cancel {\n  background: #fff;\n  color: var(--sf-text-secondary);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 9px 22px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.btn-cancel:hover {\n  background: var(--sf-bg-hover);\n}\n/*# sourceMappingURL=category-dialog.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: CatalogService }], { cat: [{
    type: Input
  }], saved: [{
    type: Output
  }], closed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryDialogComponent, { className: "CategoryDialogComponent", filePath: "src/app/features/catalog/categories/category-dialog/category-dialog.component.ts", lineNumber: 19 });
})();

// src/app/features/catalog/categories/categories.component.ts
var _c0 = (a0, a1) => ({ data: a0, total: a1 });
var _c1 = () => [10, 25, 50];
var _c2 = (a0) => ({ buttonCount: 5, info: true, type: "numeric", pageSizes: a0 });
var _c3 = () => ({ mode: "single", allowUnsort: false });
function CategoriesComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "mat-spinner", 15);
    \u0275\u0275elementEnd();
  }
}
function CategoriesComponent_Conditional_20_Template(rf, ctx) {
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
function CategoriesComponent_Conditional_21_ng_template_9_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "span", 36);
    \u0275\u0275text(2, "\u05D0\u05D9\u05D9\u05E7\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r3.IconName);
  }
}
function CategoriesComponent_Conditional_21_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "div", 33);
    \u0275\u0275text(3, "\u05E4\u05E8\u05D8\u05D9 \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 34)(5, "div", 35)(6, "span", 36);
    \u0275\u0275text(7, "\u05E6\u05D1\u05E2");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "span", 37);
    \u0275\u0275elementStart(9, "span", 38);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, CategoriesComponent_Conditional_21_ng_template_9_Conditional_11_Template, 5, 1, "div", 35);
    \u0275\u0275elementStart(12, "div", 35)(13, "span", 36);
    \u0275\u0275text(14, "\u05E1\u05D3\u05E8 \u05EA\u05E6\u05D5\u05D2\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 38);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 35)(18, "span", 36);
    \u0275\u0275text(19, "\u05E1\u05D5\u05D2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 38);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance(8);
    \u0275\u0275styleProp("background", row_r3.ColorHex);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.ColorHex);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r3.IconName ? 11 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(row_r3.SortOrder);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(row_r3.TenantID === 0 ? "\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D9\u05EA \u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4" : "\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D9\u05EA \u05D0\u05E8\u05D2\u05D5\u05DF");
  }
}
function CategoriesComponent_Conditional_21_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "span", 40);
    \u0275\u0275elementStart(2, "span", 41);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", row_r4.ColorHex);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.CategoryName);
  }
}
function CategoriesComponent_Conditional_21_ng_template_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4");
    \u0275\u0275elementEnd();
  }
}
function CategoriesComponent_Conditional_21_ng_template_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.TenantName);
  }
}
function CategoriesComponent_Conditional_21_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CategoriesComponent_Conditional_21_ng_template_13_Conditional_0_Template, 2, 0, "span", 42)(1, CategoriesComponent_Conditional_21_ng_template_13_Conditional_1_Template, 2, 1, "span", 43);
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275conditional(row_r5.TenantID === 0 ? 0 : 1);
  }
}
function CategoriesComponent_Conditional_21_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.CategoryCode);
  }
}
function CategoriesComponent_Conditional_21_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7.ProductCount);
  }
}
function CategoriesComponent_Conditional_21_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275element(1, "span", 47);
    \u0275\u0275elementStart(2, "span", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("dot-active", row_r8.IsActive)("dot-inactive", !row_r8.IsActive);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.IsActive ? "\u05E4\u05E2\u05D9\u05DC" : "\u05DE\u05D5\u05E9\u05D4\u05D4");
  }
}
function CategoriesComponent_Conditional_21_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "button", 50);
    \u0275\u0275listener("click", function CategoriesComponent_Conditional_21_ng_template_22_Template_button_click_1_listener() {
      const ctx_r9 = \u0275\u0275restoreView(_r9);
      const row_r11 = ctx_r9.$implicit;
      const rowIndex_r12 = ctx_r9.rowIndex;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleDetail(row_r11.CategoryID, rowIndex_r12));
    });
    \u0275\u0275element(2, "i", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 52);
    \u0275\u0275listener("click", function CategoriesComponent_Conditional_21_ng_template_22_Template_button_click_3_listener() {
      const row_r11 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleActive(row_r11));
    });
    \u0275\u0275element(4, "i", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 53);
    \u0275\u0275listener("click", function CategoriesComponent_Conditional_21_ng_template_22_Template_button_click_5_listener() {
      const row_r11 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(row_r11));
    });
    \u0275\u0275element(6, "i", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", ctx_r0.isExpanded(row_r11.CategoryID));
    \u0275\u0275property("title", ctx_r0.isExpanded(row_r11.CategoryID) ? "\u05E1\u05D2\u05D5\u05E8" : "\u05E4\u05E8\u05D8\u05D9\u05DD");
    \u0275\u0275advance();
    \u0275\u0275classProp("pi-chevron-down", !ctx_r0.isExpanded(row_r11.CategoryID))("pi-chevron-up", ctx_r0.isExpanded(row_r11.CategoryID));
    \u0275\u0275advance();
    \u0275\u0275classProp("act-lock", row_r11.IsActive)("act-unlock", !row_r11.IsActive);
    \u0275\u0275property("title", row_r11.IsActive ? "\u05D4\u05E9\u05D1\u05EA" : "\u05D4\u05E4\u05E2\u05DC");
    \u0275\u0275advance();
    \u0275\u0275classProp("pi-lock", row_r11.IsActive)("pi-lock-open", !row_r11.IsActive);
  }
}
function CategoriesComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "kendo-grid", 16);
    \u0275\u0275listener("pageChange", function CategoriesComponent_Conditional_21_Template_kendo_grid_pageChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageChange($event));
    })("sortChange", function CategoriesComponent_Conditional_21_Template_kendo_grid_sortChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSortChange($event));
    });
    \u0275\u0275element(1, "kendo-grid-pdf", 17);
    \u0275\u0275elementStart(2, "kendo-grid-excel", 18);
    \u0275\u0275element(3, "kendo-excelexport-column", 19)(4, "kendo-excelexport-column", 20)(5, "kendo-excelexport-column", 21)(6, "kendo-excelexport-column", 22)(7, "kendo-excelexport-column", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "kendo-grid-messages", 24);
    \u0275\u0275template(9, CategoriesComponent_Conditional_21_ng_template_9_Template, 22, 6, "ng-template", 25);
    \u0275\u0275elementStart(10, "kendo-grid-column", 26);
    \u0275\u0275template(11, CategoriesComponent_Conditional_21_ng_template_11_Template, 4, 3, "ng-template", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "kendo-grid-column", 28);
    \u0275\u0275template(13, CategoriesComponent_Conditional_21_ng_template_13_Template, 2, 1, "ng-template", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "kendo-grid-column", 19);
    \u0275\u0275template(15, CategoriesComponent_Conditional_21_ng_template_15_Template, 2, 1, "ng-template", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "kendo-grid-column", 21);
    \u0275\u0275template(17, CategoriesComponent_Conditional_21_ng_template_17_Template, 2, 1, "ng-template", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "kendo-grid-column", 22);
    \u0275\u0275elementStart(19, "kendo-grid-column", 29);
    \u0275\u0275template(20, CategoriesComponent_Conditional_21_ng_template_20_Template, 4, 5, "ng-template", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "kendo-grid-column", 30);
    \u0275\u0275template(22, CategoriesComponent_Conditional_21_ng_template_22_Template, 7, 16, "ng-template", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", \u0275\u0275pureFunction2(27, _c0, ctx_r0.pagedData, ctx_r0.gridData.length))("skip", ctx_r0.skip)("pageSize", ctx_r0.pageSize)("pageable", \u0275\u0275pureFunction1(31, _c2, \u0275\u0275pureFunction0(30, _c1)))("sortable", \u0275\u0275pureFunction0(33, _c3))("sort", ctx_r0.sort)("reorderable", true)("resizable", true)("columnMenu", true);
    \u0275\u0275advance();
    \u0275\u0275property("allPages", true);
    \u0275\u0275advance();
    \u0275\u0275property("fetchData", ctx_r0.allData);
    \u0275\u0275advance();
    \u0275\u0275property("width", 120);
    \u0275\u0275advance();
    \u0275\u0275property("width", 200);
    \u0275\u0275advance();
    \u0275\u0275property("width", 80);
    \u0275\u0275advance();
    \u0275\u0275property("width", 60);
    \u0275\u0275advance();
    \u0275\u0275property("width", 60);
    \u0275\u0275advance(3);
    \u0275\u0275property("minResizableWidth", 160);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 140)("sortable", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 140);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 95);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 75);
    \u0275\u0275advance();
    \u0275\u0275property("width", 95);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 104)("sortable", false)("resizable", false)("columnMenu", false);
  }
}
function CategoriesComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-category-dialog", 55);
    \u0275\u0275listener("saved", function CategoriesComponent_Conditional_22_Template_app_category_dialog_saved_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSaved());
    })("closed", function CategoriesComponent_Conditional_22_Template_app_category_dialog_closed_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClosed());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("cat", ctx_r0.dialogCat());
  }
}
var CategoriesComponent = class _CategoriesComponent {
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
  cats = signal(
    [],
    ...ngDevMode ? [{ debugName: "cats" }] : (
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
  dialogCat = signal(
    null,
    ...ngDevMode ? [{ debugName: "dialogCat" }] : (
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
    this.svc.getCategories().subscribe({
      next: (r) => {
        this.cats.set(r.data);
        this.applyFilter();
        this.loading.set(false);
      },
      error: () => {
        this.error.set("\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D8\u05E2\u05D9\u05E0\u05EA \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA");
        this.loading.set(false);
      }
    });
  }
  applyFilter() {
    const q = this.searchTerm.toLowerCase();
    const filtered = q ? this.cats().filter((c) => c.CategoryName.toLowerCase().includes(q) || c.CategoryCode.toLowerCase().includes(q)) : [...this.cats()];
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
    this.dialogCat.set(null);
    this.dialogOpen.set(false);
    setTimeout(() => this.dialogOpen.set(true));
  }
  openEdit(c) {
    this.dialogCat.set(c);
    this.dialogOpen.set(false);
    setTimeout(() => this.dialogOpen.set(true));
  }
  onSaved() {
    this.load();
  }
  onClosed() {
    this.dialogOpen.set(false);
  }
  toggleActive(c) {
    this.svc.saveCategory(__spreadProps(__spreadValues({}, c), { IsActive: !c.IsActive })).subscribe({
      next: () => this.load(),
      error: (e) => this.error.set(e?.error?.message || "\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05E2\u05D3\u05DB\u05D5\u05DF \u05E1\u05D8\u05D8\u05D5\u05E1")
    });
  }
  isExpanded(id) {
    return this.expandedIds.has(id);
  }
  toggleDetail(catId, rowIndex) {
    const absIdx = this.skip + rowIndex;
    if (this.expandedIds.has(catId)) {
      this.expandedIds.delete(catId);
      this.grid.collapseRow(absIdx);
    } else {
      this.expandedIds.add(catId);
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
  static \u0275fac = function CategoriesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoriesComponent)(\u0275\u0275directiveInject(CatalogService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoriesComponent, selectors: [["app-categories"]], viewQuery: function CategoriesComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(GridComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.grid = _t.first);
    }
  }, decls: 23, vars: 8, consts: [[1, "cat-page"], [1, "page-header"], [1, "header-titles"], ["kendoButton", "", "themeColor", "primary", 3, "click", "svgIcon"], [1, "toolbar"], [1, "search-wrap"], [1, "search-icon"], ["type", "text", "placeholder", "\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4...", 1, "search-input", 3, "input"], [1, "export-btns"], ["kendoButton", "", "fillMode", "outline", "title", "\u05D9\u05D9\u05E6\u05D5\u05D0 \u05DC\u05D0\u05E7\u05E1\u05DC", 1, "btn-export", "btn-excel", 3, "click", "svgIcon"], ["kendoButton", "", "fillMode", "outline", "title", "\u05D9\u05D9\u05E6\u05D5\u05D0 \u05DC-PDF", 1, "btn-export", "btn-pdf", 3, "click", "svgIcon"], [1, "state-box"], [1, "state-box", "error"], ["scrollable", "none", 1, "cat-grid", 3, "data", "skip", "pageSize", "pageable", "sortable", "sort", "reorderable", "resizable", "columnMenu"], [3, "cat"], ["diameter", "36"], ["scrollable", "none", 1, "cat-grid", 3, "pageChange", "sortChange", "data", "skip", "pageSize", "pageable", "sortable", "sort", "reorderable", "resizable", "columnMenu"], ["fileName", "\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA.pdf", "paperSize", "A4", "margin", "1cm", 3, "allPages"], ["fileName", "\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA.xlsx", 3, "fetchData"], ["field", "CategoryCode", "title", "\u05E7\u05D5\u05D3", 3, "width"], ["field", "CategoryName", "title", "\u05E9\u05DD", 3, "width"], ["field", "ProductCount", "title", "\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD", 3, "width"], ["field", "SortOrder", "title", "\u05E1\u05D3\u05E8", 3, "width"], ["field", "IsActive", "title", "\u05E4\u05E2\u05D9\u05DC", 3, "width"], ["pagerItemsPerPage", "\u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3", "pagerOf", "\u05DE\u05EA\u05D5\u05DA", "pagerItems", "\u05E8\u05E9\u05D5\u05DE\u05D5\u05EA", "pagerFirstPage", "\u05E2\u05DE\u05D5\u05D3 \u05E8\u05D0\u05E9\u05D5\u05DF", "pagerLastPage", "\u05E2\u05DE\u05D5\u05D3 \u05D0\u05D7\u05E8\u05D5\u05DF", "pagerPreviousPage", "\u05D4\u05E7\u05D5\u05D3\u05DD", "pagerNextPage", "\u05D4\u05D1\u05D0", "pagerPage", "\u05E2\u05DE\u05D5\u05D3", "pagerPageNumberInputTitle", "\u05DE\u05E1\u05E4\u05E8 \u05E2\u05DE\u05D5\u05D3", "noRecords", "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA", "loading", "\u05D8\u05D5\u05E2\u05DF...", "columnMenuFilter", "\u05E1\u05E0\u05DF", "columnMenuSort", "\u05DE\u05D9\u05D5\u05DF", "columnMenuColumns", "\u05E2\u05DE\u05D5\u05D3\u05D5\u05EA", "columnMenuSortAscending", "\u05E2\u05D5\u05DC\u05D4", "columnMenuSortDescending", "\u05D9\u05D5\u05E8\u05D3", "selectionCheckboxLabel", "\u05D1\u05D7\u05E8 \u05E9\u05D5\u05E8\u05D4", "selectAllCheckboxLabel", "\u05D1\u05D7\u05E8 \u05D4\u05DB\u05DC"], ["kendoGridDetailTemplate", ""], ["field", "CategoryName", "title", "\u05E9\u05DD \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4", 3, "minResizableWidth"], ["kendoGridCellTemplate", ""], ["field", "TenantName", "title", "\u05E1\u05D5\u05D2", 3, "width", "sortable"], ["field", "IsActive", "title", "\u05E1\u05D8\u05D8\u05D5\u05E1", 3, "width"], ["title", "", 3, "width", "sortable", "resizable", "columnMenu"], [1, "cat-detail-card"], [1, "detail-group"], [1, "detail-group-title"], [1, "detail-fields"], [1, "detail-field"], [1, "df-label"], [1, "detail-color-swatch"], [1, "df-val"], [1, "cat-cell"], [1, "color-dot"], [1, "cat-name"], [1, "badge-platform"], [1, "badge-tenant"], [1, "code-badge"], [1, "badge-count"], [1, "status-dot-wrap"], [1, "status-dot"], [1, "status-label"], [1, "row-actions"], [1, "act-btn", "act-expand", 3, "click", "title"], [1, "pi"], [1, "act-btn", 3, "click", "title"], ["title", "\u05E2\u05E8\u05D5\u05DA", 1, "act-btn", "act-edit", 3, "click"], [1, "pi", "pi-pencil"], [3, "saved", "closed", "cat"]], template: function CategoriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 3);
      \u0275\u0275listener("click", function CategoriesComponent_Template_button_click_7_listener() {
        return ctx.openAdd();
      });
      \u0275\u0275text(8, " \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 \u05D7\u05D3\u05E9\u05D4 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 4)(10, "div", 5)(11, "mat-icon", 6);
      \u0275\u0275text(12, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 7);
      \u0275\u0275listener("input", function CategoriesComponent_Template_input_input_13_listener($event) {
        return ctx.onSearch($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 8)(15, "button", 9);
      \u0275\u0275listener("click", function CategoriesComponent_Template_button_click_15_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275text(16, "Excel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 10);
      \u0275\u0275listener("click", function CategoriesComponent_Template_button_click_17_listener() {
        return ctx.exportPDF();
      });
      \u0275\u0275text(18, "PDF");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(19, CategoriesComponent_Conditional_19_Template, 2, 0, "div", 11);
      \u0275\u0275conditionalCreate(20, CategoriesComponent_Conditional_20_Template, 2, 1, "div", 12);
      \u0275\u0275conditionalCreate(21, CategoriesComponent_Conditional_21_Template, 23, 34, "kendo-grid", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(22, CategoriesComponent_Conditional_22_Template, 1, 1, "app-category-dialog", 14);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.cats().length, " \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA");
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
    CategoryDialogComponent
  ], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.cat-page[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  direction: rtl;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.header-titles[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.header-titles[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0;\n}\n.header-titles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: var(--sf-text-secondary);\n  margin: 3px 0 0;\n}\n.toolbar[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.export-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n}\n[_nghost-%COMP%]     .export-btns .k-button {\n  border: none !important;\n  border-radius: 0 !important;\n  background: var(--sf-bg-card) !important;\n  color: var(--sf-text-secondary) !important;\n  box-shadow: none !important;\n  padding: 6px 14px !important;\n  font-size: 0.82rem !important;\n  font-weight: 500 !important;\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n}\n[_nghost-%COMP%]     .export-btns .k-button:hover {\n  background: var(--sf-bg-hover) !important;\n}\n[_nghost-%COMP%]     .export-btns .k-button + .k-button {\n  border-inline-start: 1px solid var(--sf-border) !important;\n}\n[_nghost-%COMP%]     .export-btns .btn-excel:hover {\n  color: #16a34a !important;\n}\n[_nghost-%COMP%]     .export-btns .btn-pdf:hover {\n  color: #dc2626 !important;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 340px;\n  direction: rtl;\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 6px 12px;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.search-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--sf-border-focus);\n  box-shadow: 0 0 0 3px rgba(13, 71, 255, 0.12);\n}\n.search-icon[_ngcontent-%COMP%] {\n  color: var(--sf-text-muted);\n  font-size: 18px;\n  width: 18px !important;\n  height: 18px !important;\n  flex-shrink: 0;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  color: var(--sf-text);\n  font-size: 0.875rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--sf-text-muted);\n}\n.state-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: var(--sf-text-secondary);\n}\n.state-box.error[_ngcontent-%COMP%] {\n  color: var(--sf-danger);\n}\n[_nghost-%COMP%]     .cat-grid {\n  border-radius: 10px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04);\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n[_nghost-%COMP%]     .cat-grid .k-grid-header th.k-header {\n  background: var(--sf-grid-hd-bg) !important;\n  color: var(--sf-grid-hd-color) !important;\n  font-weight: 700 !important;\n  font-size: 0.78rem !important;\n  text-align: right !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n  border-color: var(--sf-grid-hd-border) !important;\n  direction: rtl;\n}\n[_nghost-%COMP%]     .cat-grid .k-grid-header {\n  background: var(--sf-grid-hd-bg) !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n}\n[_nghost-%COMP%]     .cat-grid .k-column-menu-button {\n  color: var(--sf-grid-hd-color);\n  opacity: 0.7;\n}\n[_nghost-%COMP%]     .cat-grid .k-column-menu-button:hover {\n  opacity: 1;\n}\n[_nghost-%COMP%]     .cat-grid td.k-table-td {\n  text-align: right !important;\n  vertical-align: middle !important;\n  border-color: var(--sf-border) !important;\n  font-size: 0.875rem;\n  background: var(--sf-bg-card);\n  direction: rtl;\n  padding: 8px 12px !important;\n}\n[_nghost-%COMP%]     .cat-grid tr.k-table-row:hover td {\n  background: var(--sf-bg-hover) !important;\n}\n[_nghost-%COMP%]     .cat-grid .k-pager {\n  border-top: 1px solid var(--sf-border);\n  background: #f8fafc;\n  direction: rtl;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  font-size: 0.82rem;\n}\n[_nghost-%COMP%]     .cat-grid .k-pager-wrap, \n[_nghost-%COMP%]     .cat-grid .k-pager {\n  direction: rtl !important;\n}\n[_nghost-%COMP%]     .cat-grid .k-detail-row > td {\n  background: var(--sf-bg) !important;\n  padding: 4px 0 12px !important;\n  border-bottom: 1px solid var(--sf-border) !important;\n}\n[_nghost-%COMP%]     .cat-grid .k-sort-icon {\n  margin-right: 4px;\n}\n.cat-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.color-dot[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border-radius: 4px;\n  flex-shrink: 0;\n  border: 1.5px solid rgba(0, 0, 0, 0.1);\n}\n.cat-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--sf-text);\n  font-size: 0.88rem;\n}\n.badge-platform[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 9px;\n  border-radius: 20px;\n  background: #eff6ff;\n  color: #3b82f6;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.badge-tenant[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 9px;\n  border-radius: 20px;\n  background: #f1f5f9;\n  color: #64748b;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.code-badge[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n  background: var(--sf-bg);\n  border: 1px solid var(--sf-border);\n  border-radius: 5px;\n  padding: 2px 8px;\n  color: var(--sf-text-secondary);\n  direction: ltr;\n  unicode-bidi: embed;\n  display: inline-block;\n  white-space: nowrap;\n}\n.badge-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 10px;\n  border-radius: 20px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  background: var(--sf-bg);\n  border: 1px solid var(--sf-border);\n  color: var(--sf-text-secondary);\n}\n.status-dot-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.dot-active[_ngcontent-%COMP%] {\n  background: #22c55e;\n  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.15);\n}\n.dot-inactive[_ngcontent-%COMP%] {\n  background: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);\n}\n.status-label[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: #374151;\n}\n.row-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.act-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.act-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.act-expand[_ngcontent-%COMP%] {\n  color: var(--sf-text-secondary);\n}\n.act-expand[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-primary);\n}\n.act-lock[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.act-lock[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.act-unlock[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.act-unlock[_ngcontent-%COMP%]:hover {\n  background: #f0fdf4;\n}\n.act-edit[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.act-edit[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n}\n.cat-detail-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 16px 8px;\n  direction: rtl;\n}\n.detail-group[_ngcontent-%COMP%] {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 12px;\n  padding: 14px 18px;\n  min-width: 220px;\n  flex: 1;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.detail-group-title[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--sf-text-muted);\n  margin-bottom: 10px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--sf-border);\n}\n.detail-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.detail-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.df-label[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: var(--sf-text-muted);\n  min-width: 90px;\n  flex-shrink: 0;\n}\n.df-val[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  color: var(--sf-text);\n  font-weight: 500;\n}\n.detail-color-swatch[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 4px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=categories.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoriesComponent, [{
    type: Component,
    args: [{ selector: "app-categories", standalone: true, imports: [
      CommonModule,
      FormsModule,
      GridModule,
      ExcelModule,
      PDFModule,
      ButtonsModule,
      MatIconModule,
      MatProgressSpinnerModule,
      CategoryDialogComponent
    ], template: `<div class="cat-page">

  <div class="page-header">
    <div class="header-titles">
      <h1>\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD</h1>
      <p>{{ cats().length }} \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA</p>
    </div>
    <button kendoButton themeColor="primary" [svgIcon]="addIcon" (click)="openAdd()">
      \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 \u05D7\u05D3\u05E9\u05D4
    </button>
  </div>

  <div class="toolbar">
    <div class="search-wrap">
      <mat-icon class="search-icon">search</mat-icon>
      <input class="search-input" type="text" placeholder="\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4..."
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
      class="cat-grid">

      <kendo-grid-pdf fileName="\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA.pdf" [allPages]="true" paperSize="A4" margin="1cm" />
      <kendo-grid-excel fileName="\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA.xlsx" [fetchData]="allData">
        <kendo-excelexport-column field="CategoryCode" title="\u05E7\u05D5\u05D3"     [width]="120" />
        <kendo-excelexport-column field="CategoryName" title="\u05E9\u05DD"      [width]="200" />
        <kendo-excelexport-column field="ProductCount" title="\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD"  [width]="80"  />
        <kendo-excelexport-column field="SortOrder"    title="\u05E1\u05D3\u05E8"     [width]="60"  />
        <kendo-excelexport-column field="IsActive"     title="\u05E4\u05E2\u05D9\u05DC"    [width]="60"  />
      </kendo-grid-excel>

      <kendo-grid-messages
        pagerItemsPerPage="\u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3" pagerOf="\u05DE\u05EA\u05D5\u05DA" pagerItems="\u05E8\u05E9\u05D5\u05DE\u05D5\u05EA"
        pagerFirstPage="\u05E2\u05DE\u05D5\u05D3 \u05E8\u05D0\u05E9\u05D5\u05DF" pagerLastPage="\u05E2\u05DE\u05D5\u05D3 \u05D0\u05D7\u05E8\u05D5\u05DF"
        pagerPreviousPage="\u05D4\u05E7\u05D5\u05D3\u05DD" pagerNextPage="\u05D4\u05D1\u05D0"
        pagerPage="\u05E2\u05DE\u05D5\u05D3" pagerPageNumberInputTitle="\u05DE\u05E1\u05E4\u05E8 \u05E2\u05DE\u05D5\u05D3"
        noRecords="\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA" loading="\u05D8\u05D5\u05E2\u05DF..."
        columnMenuFilter="\u05E1\u05E0\u05DF" columnMenuSort="\u05DE\u05D9\u05D5\u05DF" columnMenuColumns="\u05E2\u05DE\u05D5\u05D3\u05D5\u05EA"
        columnMenuSortAscending="\u05E2\u05D5\u05DC\u05D4" columnMenuSortDescending="\u05D9\u05D5\u05E8\u05D3"
        selectionCheckboxLabel="\u05D1\u05D7\u05E8 \u05E9\u05D5\u05E8\u05D4" selectAllCheckboxLabel="\u05D1\u05D7\u05E8 \u05D4\u05DB\u05DC" />

      <ng-template kendoGridDetailTemplate let-row>
        <div class="cat-detail-card">
          <div class="detail-group">
            <div class="detail-group-title">\u05E4\u05E8\u05D8\u05D9 \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4</div>
            <div class="detail-fields">
              <div class="detail-field">
                <span class="df-label">\u05E6\u05D1\u05E2</span>
                <span class="detail-color-swatch" [style.background]="row.ColorHex"></span>
                <span class="df-val">{{ row.ColorHex }}</span>
              </div>
              @if (row.IconName) {
                <div class="detail-field"><span class="df-label">\u05D0\u05D9\u05D9\u05E7\u05D5\u05DF</span><span class="df-val">{{ row.IconName }}</span></div>
              }
              <div class="detail-field"><span class="df-label">\u05E1\u05D3\u05E8 \u05EA\u05E6\u05D5\u05D2\u05D4</span><span class="df-val">{{ row.SortOrder }}</span></div>
              <div class="detail-field">
                <span class="df-label">\u05E1\u05D5\u05D2</span>
                <span class="df-val">{{ row.TenantID === 0 ? '\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D9\u05EA \u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4' : '\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D9\u05EA \u05D0\u05E8\u05D2\u05D5\u05DF' }}</span>
              </div>
            </div>
          </div>
        </div>
      </ng-template>

      <!-- \u05E9\u05DD \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 \u2014 \u05D2\u05DE\u05D9\u05E9, \u05DB\u05D5\u05DC\u05DC \u05E0\u05E7\u05D5\u05D3\u05EA \u05E6\u05D1\u05E2 -->
      <kendo-grid-column field="CategoryName" title="\u05E9\u05DD \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4" [minResizableWidth]="160">
        <ng-template kendoGridCellTemplate let-row>
          <div class="cat-cell">
            <span class="color-dot" [style.background]="row.ColorHex"></span>
            <span class="cat-name">{{ row.CategoryName }}</span>
          </div>
        </ng-template>
      </kendo-grid-column>

      <kendo-grid-column field="TenantName" title="\u05E1\u05D5\u05D2" [width]="140" [sortable]="false">
        <ng-template kendoGridCellTemplate let-row>
          @if (row.TenantID === 0) {
            <span class="badge-platform">\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4</span>
          } @else {
            <span class="badge-tenant">{{ row.TenantName }}</span>
          }
        </ng-template>
      </kendo-grid-column>

      <kendo-grid-column field="CategoryCode" title="\u05E7\u05D5\u05D3" [width]="140">
        <ng-template kendoGridCellTemplate let-row>
          <code class="code-badge">{{ row.CategoryCode }}</code>
        </ng-template>
      </kendo-grid-column>

      <kendo-grid-column field="ProductCount" title="\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD" [width]="95">
        <ng-template kendoGridCellTemplate let-row>
          <span class="badge-count">{{ row.ProductCount }}</span>
        </ng-template>
      </kendo-grid-column>

      <kendo-grid-column field="SortOrder" title="\u05E1\u05D3\u05E8" [width]="75" />

      <kendo-grid-column field="IsActive" title="\u05E1\u05D8\u05D8\u05D5\u05E1" [width]="95">
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
                    [class.expanded]="isExpanded(row.CategoryID)"
                    [title]="isExpanded(row.CategoryID) ? '\u05E1\u05D2\u05D5\u05E8' : '\u05E4\u05E8\u05D8\u05D9\u05DD'"
                    (click)="toggleDetail(row.CategoryID, rowIndex)">
              <i class="pi" [class.pi-chevron-down]="!isExpanded(row.CategoryID)" [class.pi-chevron-up]="isExpanded(row.CategoryID)"></i>
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
  <app-category-dialog
    [cat]="dialogCat()"
    (saved)="onSaved()"
    (closed)="onClosed()" />
}
`, styles: ['/* src/app/features/catalog/categories/categories.component.scss */\n:host {\n  display: block;\n  width: 100%;\n}\n.cat-page {\n  width: 100%;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  direction: rtl;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.header-titles {\n  flex: 1;\n}\n.header-titles h1 {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0;\n}\n.header-titles p {\n  font-size: 0.83rem;\n  color: var(--sf-text-secondary);\n  margin: 3px 0 0;\n}\n.toolbar {\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.export-btns {\n  display: flex;\n  gap: 0;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n}\n:host ::ng-deep .export-btns .k-button {\n  border: none !important;\n  border-radius: 0 !important;\n  background: var(--sf-bg-card) !important;\n  color: var(--sf-text-secondary) !important;\n  box-shadow: none !important;\n  padding: 6px 14px !important;\n  font-size: 0.82rem !important;\n  font-weight: 500 !important;\n  font-family: "Noto Sans Hebrew", sans-serif !important;\n}\n:host ::ng-deep .export-btns .k-button:hover {\n  background: var(--sf-bg-hover) !important;\n}\n:host ::ng-deep .export-btns .k-button + .k-button {\n  border-inline-start: 1px solid var(--sf-border) !important;\n}\n:host ::ng-deep .export-btns .btn-excel:hover {\n  color: #16a34a !important;\n}\n:host ::ng-deep .export-btns .btn-pdf:hover {\n  color: #dc2626 !important;\n}\n.search-wrap {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 340px;\n  direction: rtl;\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 6px 12px;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.search-wrap:focus-within {\n  border-color: var(--sf-border-focus);\n  box-shadow: 0 0 0 3px rgba(13, 71, 255, 0.12);\n}\n.search-icon {\n  color: var(--sf-text-muted);\n  font-size: 18px;\n  width: 18px !important;\n  height: 18px !important;\n  flex-shrink: 0;\n}\n.search-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  color: var(--sf-text);\n  font-size: 0.875rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n.search-input::placeholder {\n  color: var(--sf-text-muted);\n}\n.state-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: var(--sf-text-secondary);\n}\n.state-box.error {\n  color: var(--sf-danger);\n}\n:host ::ng-deep .cat-grid {\n  border-radius: 10px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04);\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n:host ::ng-deep .cat-grid .k-grid-header th.k-header {\n  background: var(--sf-grid-hd-bg) !important;\n  color: var(--sf-grid-hd-color) !important;\n  font-weight: 700 !important;\n  font-size: 0.78rem !important;\n  text-align: right !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n  border-color: var(--sf-grid-hd-border) !important;\n  direction: rtl;\n}\n:host ::ng-deep .cat-grid .k-grid-header {\n  background: var(--sf-grid-hd-bg) !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n}\n:host ::ng-deep .cat-grid .k-column-menu-button {\n  color: var(--sf-grid-hd-color);\n  opacity: 0.7;\n}\n:host ::ng-deep .cat-grid .k-column-menu-button:hover {\n  opacity: 1;\n}\n:host ::ng-deep .cat-grid td.k-table-td {\n  text-align: right !important;\n  vertical-align: middle !important;\n  border-color: var(--sf-border) !important;\n  font-size: 0.875rem;\n  background: var(--sf-bg-card);\n  direction: rtl;\n  padding: 8px 12px !important;\n}\n:host ::ng-deep .cat-grid tr.k-table-row:hover td {\n  background: var(--sf-bg-hover) !important;\n}\n:host ::ng-deep .cat-grid .k-pager {\n  border-top: 1px solid var(--sf-border);\n  background: #f8fafc;\n  direction: rtl;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  font-size: 0.82rem;\n}\n:host ::ng-deep .cat-grid .k-pager-wrap,\n:host ::ng-deep .cat-grid .k-pager {\n  direction: rtl !important;\n}\n:host ::ng-deep .cat-grid .k-detail-row > td {\n  background: var(--sf-bg) !important;\n  padding: 4px 0 12px !important;\n  border-bottom: 1px solid var(--sf-border) !important;\n}\n:host ::ng-deep .cat-grid .k-sort-icon {\n  margin-right: 4px;\n}\n.cat-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.color-dot {\n  width: 14px;\n  height: 14px;\n  border-radius: 4px;\n  flex-shrink: 0;\n  border: 1.5px solid rgba(0, 0, 0, 0.1);\n}\n.cat-name {\n  font-weight: 600;\n  color: var(--sf-text);\n  font-size: 0.88rem;\n}\n.badge-platform {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 9px;\n  border-radius: 20px;\n  background: #eff6ff;\n  color: #3b82f6;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.badge-tenant {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 9px;\n  border-radius: 20px;\n  background: #f1f5f9;\n  color: #64748b;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.code-badge {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n  background: var(--sf-bg);\n  border: 1px solid var(--sf-border);\n  border-radius: 5px;\n  padding: 2px 8px;\n  color: var(--sf-text-secondary);\n  direction: ltr;\n  unicode-bidi: embed;\n  display: inline-block;\n  white-space: nowrap;\n}\n.badge-count {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 10px;\n  border-radius: 20px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  background: var(--sf-bg);\n  border: 1px solid var(--sf-border);\n  color: var(--sf-text-secondary);\n}\n.status-dot-wrap {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.status-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.dot-active {\n  background: #22c55e;\n  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.15);\n}\n.dot-inactive {\n  background: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);\n}\n.status-label {\n  font-size: 0.83rem;\n  color: #374151;\n}\n.row-actions {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.act-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.act-btn i {\n  font-size: 0.9rem;\n}\n.act-expand {\n  color: var(--sf-text-secondary);\n}\n.act-expand:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-primary);\n}\n.act-lock {\n  color: #ef4444;\n}\n.act-lock:hover {\n  background: #fef2f2;\n}\n.act-unlock {\n  color: #16a34a;\n}\n.act-unlock:hover {\n  background: #f0fdf4;\n}\n.act-edit {\n  color: #3b82f6;\n}\n.act-edit:hover {\n  background: #eff6ff;\n}\n.cat-detail-card {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 16px 8px;\n  direction: rtl;\n}\n.detail-group {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 12px;\n  padding: 14px 18px;\n  min-width: 220px;\n  flex: 1;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.detail-group-title {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--sf-text-muted);\n  margin-bottom: 10px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--sf-border);\n}\n.detail-fields {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.detail-field {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.df-label {\n  font-size: 0.76rem;\n  color: var(--sf-text-muted);\n  min-width: 90px;\n  flex-shrink: 0;\n}\n.df-val {\n  font-size: 0.84rem;\n  color: var(--sf-text);\n  font-weight: 500;\n}\n.detail-color-swatch {\n  width: 16px;\n  height: 16px;\n  border-radius: 4px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=categories.component.css.map */\n'] }]
  }], () => [{ type: CatalogService }], { grid: [{
    type: ViewChild,
    args: [GridComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoriesComponent, { className: "CategoriesComponent", filePath: "src/app/features/catalog/categories/categories.component.ts", lineNumber: 26 });
})();
export {
  CategoriesComponent
};
//# sourceMappingURL=chunk-D7UZORMJ.js.map
