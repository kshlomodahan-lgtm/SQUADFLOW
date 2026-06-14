import {
  RbacService
} from "./chunk-RCBY4TKT.js";
import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective
} from "./chunk-VR4UVLCZ.js";

// src/app/core/directives/has-perm.directive.ts
var HasPermDirective = class _HasPermDirective {
  perm = "";
  permSig = signal(
    "",
    ...ngDevMode ? [{ debugName: "permSig" }] : (
      /* istanbul ignore next */
      []
    )
  );
  shown = false;
  rbac = inject(RbacService);
  tpl = inject(TemplateRef);
  vcr = inject(ViewContainerRef);
  constructor() {
    effect(() => {
      const perm = this.permSig();
      if (!perm || Array.isArray(perm) && !perm.length) {
        this.show();
        return;
      }
      const list = Array.isArray(perm) ? perm : [perm];
      const allowed = list.some((p) => {
        const [screen, action = "READ"] = p.split(":");
        return this.rbac.can(screen, action);
      });
      allowed ? this.show() : this.hide();
    });
  }
  ngOnChanges() {
    this.permSig.set(this.perm);
  }
  show() {
    if (!this.shown) {
      this.vcr.createEmbeddedView(this.tpl);
      this.shown = true;
    }
  }
  hide() {
    if (this.shown) {
      this.vcr.clear();
      this.shown = false;
    }
  }
  static \u0275fac = function HasPermDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HasPermDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HasPermDirective, selectors: [["", "appHasPerm", ""]], inputs: { perm: [0, "appHasPerm", "perm"] }, features: [\u0275\u0275NgOnChangesFeature] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HasPermDirective, [{
    type: Directive,
    args: [{
      selector: "[appHasPerm]",
      standalone: true
    }]
  }], () => [], { perm: [{
    type: Input,
    args: ["appHasPerm"]
  }] });
})();

export {
  HasPermDirective
};
//# sourceMappingURL=chunk-URFJMIXK.js.map
