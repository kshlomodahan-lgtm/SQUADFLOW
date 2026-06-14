import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-VR4UVLCZ.js";

// src/app/core/services/ai-processing.service.ts
var AiProcessingService = class _AiProcessingService {
  isActive = signal(
    false,
    ...ngDevMode ? [{ debugName: "isActive" }] : (
      /* istanbul ignore next */
      []
    )
  );
  completed = signal(
    false,
    ...ngDevMode ? [{ debugName: "completed" }] : (
      /* istanbul ignore next */
      []
    )
  );
  hasError = signal(
    false,
    ...ngDevMode ? [{ debugName: "hasError" }] : (
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
  config = signal(
    {},
    ...ngDevMode ? [{ debugName: "config" }] : (
      /* istanbul ignore next */
      []
    )
  );
  start(cfg = {}) {
    this.completed.set(false);
    this.hasError.set(false);
    this.errorMsg.set("");
    this.config.set(cfg);
    this.isActive.set(true);
  }
  complete() {
    this.completed.set(true);
    setTimeout(() => this.isActive.set(false), 1400);
  }
  error(msg) {
    this.hasError.set(true);
    this.errorMsg.set(msg);
    setTimeout(() => this.isActive.set(false), 3e3);
  }
  static \u0275fac = function AiProcessingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AiProcessingService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AiProcessingService, factory: _AiProcessingService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiProcessingService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AiProcessingService
};
//# sourceMappingURL=chunk-XFUFAOOU.js.map
