import {
  A,
  N,
  animate,
  detectDesktopBrowser,
  detectMobileOS,
  query,
  sequence,
  stagger,
  style,
  u
} from "./chunk-YZNXQPNO.js";
import {
  ControlContainer
} from "./chunk-4FOUEPN2.js";
import {
  ANIMATION_MODULE_TYPE,
  ApplicationRef,
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  DomSanitizer,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  Host,
  HostBinding,
  HostListener,
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpRequest,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgClass,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  NgZone,
  Observable,
  Optional,
  Output,
  Renderer2,
  RendererFactory2,
  ReplaySubject,
  RuntimeError,
  Service,
  SkipSelf,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  auditTime,
  createComponent,
  debounceTime,
  filter,
  forwardRef,
  from,
  fromEvent,
  inject,
  isDevMode,
  map,
  merge,
  of,
  setClassMetadata,
  share,
  skip,
  startWith,
  take,
  tap,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefineService,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵi18nApply,
  ɵɵi18nAttributes,
  ɵɵi18nExp,
  ɵɵinject,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵpureFunction6,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-VR4UVLCZ.js";

// node_modules/@progress/kendo-draggable/dist/es2015/main.js
var proxy = (a, b) => (e) => b(a(e));
var bind = (el, event, callback) => el.addEventListener && el.addEventListener(event, callback);
var unbind = (el, event, callback) => el && el.removeEventListener && el.removeEventListener(event, callback);
var noop = () => {
};
var preventDefault = (e) => e.preventDefault();
var touchRegExp = /touch/;
var IGNORE_MOUSE_TIMEOUT = 2e3;
function normalizeEvent(e) {
  if (e.type.match(touchRegExp)) {
    return {
      pageX: e.changedTouches[0].pageX,
      pageY: e.changedTouches[0].pageY,
      clientX: e.changedTouches[0].clientX,
      clientY: e.changedTouches[0].clientY,
      type: e.type,
      originalEvent: e,
      isTouch: true
    };
  }
  return {
    pageX: e.pageX,
    pageY: e.pageY,
    clientX: e.clientX,
    clientY: e.clientY,
    offsetX: e.offsetX,
    offsetY: e.offsetY,
    type: e.type,
    ctrlKey: e.ctrlKey,
    shiftKey: e.shiftKey,
    altKey: e.altKey,
    originalEvent: e
  };
}
var Draggable = class _Draggable {
  static supportPointerEvent() {
    return typeof window !== "undefined" && window.PointerEvent;
  }
  get document() {
    return this._element ? this._element.ownerDocument : document;
  }
  constructor({ press = noop, drag = noop, release = noop, mouseOnly = false }) {
    this._pressHandler = proxy(normalizeEvent, press);
    this._dragHandler = proxy(normalizeEvent, drag);
    this._releaseHandler = proxy(normalizeEvent, release);
    this._ignoreMouse = false;
    this._mouseOnly = mouseOnly;
    this._touchstart = (e) => {
      if (e.touches.length === 1) {
        this._pressHandler(e);
      }
    };
    this._touchmove = (e) => {
      if (e.touches.length === 1) {
        this._dragHandler(e);
      }
    };
    this._touchend = (e) => {
      if (e.touches.length === 0 && e.changedTouches.length === 1) {
        this._releaseHandler(e);
        this._ignoreMouse = true;
        setTimeout(this._restoreMouse, IGNORE_MOUSE_TIMEOUT);
      }
    };
    this._restoreMouse = () => {
      this._ignoreMouse = false;
    };
    this._mousedown = (e) => {
      const { which } = e;
      if (which && which > 1 || this._ignoreMouse) {
        return;
      }
      bind(this.document, "mousemove", this._mousemove);
      bind(this.document, "mouseup", this._mouseup);
      this._pressHandler(e);
    };
    this._mousemove = (e) => {
      this._dragHandler(e);
    };
    this._mouseup = (e) => {
      unbind(this.document, "mousemove", this._mousemove);
      unbind(this.document, "mouseup", this._mouseup);
      this._releaseHandler(e);
    };
    this._pointerdown = (e) => {
      if (e.isPrimary && e.button === 0) {
        bind(this.document, "pointermove", this._pointermove);
        bind(this.document, "pointerup", this._pointerup);
        bind(this.document, "pointercancel", this._pointerup);
        bind(this.document, "contextmenu", preventDefault);
        this._pressHandler(e);
      }
    };
    this._pointermove = (e) => {
      if (e.isPrimary) {
        this._dragHandler(e);
      }
    };
    this._pointerup = (e) => {
      if (e.isPrimary) {
        unbind(this.document, "pointermove", this._pointermove);
        unbind(this.document, "pointerup", this._pointerup);
        unbind(this.document, "pointercancel", this._pointerup);
        unbind(this.document, "contextmenu", preventDefault);
        this._releaseHandler(e);
      }
    };
  }
  cancelDrag() {
    unbind(this.document, "pointermove", this._pointermove);
    unbind(this.document, "pointerup", this._pointerup);
    unbind(this.document, "pointercancel", this._pointerup);
  }
  bindTo(element) {
    if (element === this._element) {
      return;
    }
    if (this._element) {
      this._unbindFromCurrent();
    }
    this._element = element;
    this._bindToCurrent();
  }
  _bindToCurrent() {
    const element = this._element;
    if (this._usePointers()) {
      bind(element, "pointerdown", this._pointerdown);
      return;
    }
    bind(element, "mousedown", this._mousedown);
    if (!this._mouseOnly) {
      bind(element, "touchstart", this._touchstart);
      bind(element, "touchmove", this._touchmove);
      bind(element, "touchend", this._touchend);
    }
  }
  _unbindFromCurrent() {
    const element = this._element;
    if (this._usePointers()) {
      unbind(element, "pointerdown", this._pointerdown);
      unbind(this.document, "pointermove", this._pointermove);
      unbind(this.document, "pointerup", this._pointerup);
      unbind(this.document, "contextmenu", preventDefault);
      unbind(this.document, "pointercancel", this._pointerup);
      return;
    }
    unbind(element, "mousedown", this._mousedown);
    if (!this._mouseOnly) {
      unbind(element, "touchstart", this._touchstart);
      unbind(element, "touchmove", this._touchmove);
      unbind(element, "touchend", this._touchend);
    }
  }
  _usePointers() {
    return !this._mouseOnly && _Draggable.supportPointerEvent();
  }
  update({ press = noop, drag = noop, release = noop, mouseOnly = false }) {
    this._pressHandler = proxy(normalizeEvent, press);
    this._dragHandler = proxy(normalizeEvent, drag);
    this._releaseHandler = proxy(normalizeEvent, release);
    this._mouseOnly = mouseOnly;
  }
  destroy() {
    this._unbindFromCurrent();
    this._element = null;
  }
};
Draggable.default = Draggable;

// node_modules/@progress/kendo-angular-common/fesm2022/progress-kendo-angular-common.mjs
var _c0 = ["banner"];
var _c1 = (a0, a1, a2, a3) => ({
  backgroundColor: a0,
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  display: "flex",
  padding: "4px",
  position: a1,
  top: a2,
  right: a3
});
var _c2 = (a0) => ({
  display: "inline-flex",
  border: "none",
  borderRadius: "4px",
  backgroundColor: a0,
  color: "#ffffff",
  transition: "background-color 0.2s ease-in-out",
  cursor: "pointer",
  padding: "4px 8px",
  whiteSpace: "nowrap",
  textDecoration: "none",
  fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
});
var _c3 = (a0, a1, a2, a3, a4, a5) => ({
  position: "fixed",
  top: a0,
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  flexDirection: a1,
  justifyContent: "center",
  alignItems: a2,
  borderRadius: a3,
  borderLeft: "6px solid #FFC000",
  borderTop: "1px solid #00000029",
  borderRight: "1px solid #00000029",
  borderBottom: "1px solid #00000029",
  boxSizing: "border-box",
  fontSize: "14px",
  lineHeight: "20px",
  color: "#1E1E1E",
  zIndex: 2e3,
  boxShadow: "0px 4px 5px 0px #0000000A, 0px 2px 4px 0px #00000008",
  maxWidth: a4,
  width: "100%",
  backgroundColor: "#fff",
  padding: a5
});
var _c4 = (a0, a1) => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: a0,
  flex: a1
});
var _c5 = (a0, a1) => ({
  display: "flex",
  alignSelf: a0,
  padding: a1
});
var _c6 = (a0) => ({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  flex: a0
});
var _c7 = () => ({
  fontFamily: "system-ui, sans-serif",
  fontWeight: 700,
  fontSize: "14px",
  lineHeight: "142%"
});
var _c8 = () => ({
  fontFamily: "system-ui, sans-serif",
  fontSize: "14px",
  lineHeight: "20px"
});
var _c9 = (a0, a1, a2) => ({
  display: "flex",
  alignItems: "center",
  padding: a0,
  gap: "16px",
  marginLeft: a1,
  width: a2
});
var _forTrack0 = ($index, $item) => $item.message;
function WatermarkOverlayComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", function WatermarkOverlayComponent_ng_template_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBanner());
    })("mouseenter", function WatermarkOverlayComponent_ng_template_0_Template_button_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isCloseHovered = true);
    })("mouseleave", function WatermarkOverlayComponent_ng_template_0_Template_button_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isCloseHovered = false);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 5);
    \u0275\u0275element(2, "path", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction4(1, _c1, ctx_r1.isCloseHovered ? "#3d3d3d14" : "transparent", ctx_r1.isMobile ? "absolute" : "static", ctx_r1.isMobile ? "12px" : "auto", ctx_r1.isMobile ? "12px" : "auto"));
  }
}
function WatermarkOverlayComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275listener("mouseenter", function WatermarkOverlayComponent_ng_template_2_Template_a_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isCTAHovered = true);
    })("mouseleave", function WatermarkOverlayComponent_ng_template_2_Template_a_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isCTAHovered = false);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(4, _c2, ctx_r1.isCTAHovered ? "#b90138" : "#eb0249"));
    \u0275\u0275attribute("title", ctx_r1.getContent(ctx_r1.primaryMessage).buttonText)("href", ctx_r1.getContent(ctx_r1.primaryMessage).buttonLink, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getContent(ctx_r1.primaryMessage).buttonText);
  }
}
function WatermarkOverlayComponent_Conditional_4_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function WatermarkOverlayComponent_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, WatermarkOverlayComponent_Conditional_4_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const buttonTemplate_r4 = \u0275\u0275reference(1);
    \u0275\u0275property("ngTemplateOutlet", buttonTemplate_r4);
  }
}
function WatermarkOverlayComponent_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275element(1, "img", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(2, _c5, ctx_r1.isMobile ? "flex-start" : "center", ctx_r1.isMobile ? "0 0 12px 0" : "9px 12px"));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getContent(ctx_r1.primaryMessage).iconSrc, \u0275\u0275sanitizeUrl);
  }
}
function WatermarkOverlayComponent_Conditional_4_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "span", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(5, _c6, ctx_r1.isMobile ? "none" : "1"));
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(7, _c7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getContent(msg_r5).title, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(8, _c8))("innerHTML", ctx_r1.getContent(msg_r5).description, \u0275\u0275sanitizeHtml);
  }
}
function WatermarkOverlayComponent_Conditional_4_Conditional_7_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function WatermarkOverlayComponent_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, WatermarkOverlayComponent_Conditional_4_Conditional_7_ng_container_0_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const ctaTemplate_r6 = \u0275\u0275reference(3);
    \u0275\u0275property("ngTemplateOutlet", ctaTemplate_r6);
  }
}
function WatermarkOverlayComponent_Conditional_4_Conditional_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function WatermarkOverlayComponent_Conditional_4_Conditional_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function WatermarkOverlayComponent_Conditional_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275template(1, WatermarkOverlayComponent_Conditional_4_Conditional_8_ng_container_1_Template, 1, 0, "ng-container", 8)(2, WatermarkOverlayComponent_Conditional_4_Conditional_8_ng_container_2_Template, 1, 0, "ng-container", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const buttonTemplate_r4 = \u0275\u0275reference(1);
    const ctaTemplate_r6 = \u0275\u0275reference(3);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction3(3, _c9, ctx_r1.isMobile ? "0" : "9px 12px", ctx_r1.isMobile ? "0" : "auto", ctx_r1.isMobile ? "100%" : "auto"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctaTemplate_r6);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", buttonTemplate_r4);
  }
}
function WatermarkOverlayComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3, 2);
    \u0275\u0275conditionalCreate(2, WatermarkOverlayComponent_Conditional_4_Conditional_2_Template, 1, 1, "ng-container");
    \u0275\u0275conditionalCreate(3, WatermarkOverlayComponent_Conditional_4_Conditional_3_Template, 2, 5, "span", 3);
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275repeaterCreate(5, WatermarkOverlayComponent_Conditional_4_For_6_Template, 4, 9, "div", 3, _forTrack0);
    \u0275\u0275conditionalCreate(7, WatermarkOverlayComponent_Conditional_4_Conditional_7_Template, 1, 1, "ng-container");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, WatermarkOverlayComponent_Conditional_4_Conditional_8_Template, 3, 7, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction6(6, _c3, ctx_r1.isNarrow ? "0" : "16px", ctx_r1.isMobile ? "column" : "row", ctx_r1.isMobile ? "flex-start" : "center", ctx_r1.isNarrow ? "0" : "6px", ctx_r1.isNarrow ? "none" : "768px", ctx_r1.isMobile ? "12px" : "0"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isMobile ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getContent(ctx_r1.primaryMessage).iconSrc ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(13, _c4, ctx_r1.isMobile ? "0 0 12px 0" : "12px", ctx_r1.isMobile ? "none" : "1"));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.messages);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isMobile ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isMobile ? 8 : -1);
  }
}
var isDocumentAvailable = () => typeof document !== "undefined";
var isChanged = (propertyName, changes, skipFirstChange = true) => typeof changes[propertyName] !== "undefined" && (!changes[propertyName].isFirstChange() || !skipFirstChange) && changes[propertyName].previousValue !== changes[propertyName].currentValue;
var anyChanged = (propertyNames, changes, skipFirstChange = true) => propertyNames.some((name) => isChanged(name, changes, skipFirstChange));
var hasObservers = (emitter) => emitter && emitter.observers.length > 0;
var guid = () => {
  let id = "";
  for (let i = 0; i < 32; i++) {
    const random = Math.random() * 16 | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      id += "-";
    }
    let charValue;
    if (i === 12) {
      charValue = 4;
    } else if (i === 16) {
      charValue = random & 3 | 8;
    } else {
      charValue = random;
    }
    id += charValue.toString(16);
  }
  return id;
};
var isSafari = (userAgent) => {
  return detectDesktopBrowser(userAgent).safari || detectMobileOS(userAgent) && detectMobileOS(userAgent).browser === "mobilesafari";
};
var isFirefox = (userAgent) => {
  const desktopBrowser = detectDesktopBrowser(userAgent);
  const mobileOS = detectMobileOS(userAgent);
  return desktopBrowser?.mozilla || mobileOS?.browser === "firefox";
};
var firefoxMaxHeight = 17895697;
var isPresent = (value) => value !== null && value !== void 0;
var isObjectPresent = (value) => {
  return isObject(value) && Object.keys(value).length > 0;
};
var isString = (value) => value instanceof String || typeof value === "string";
var isObject = (value) => isPresent(value) && !Array.isArray(value) && typeof value === "object";
var isSet = (value) => isPresent(value) && value instanceof Set;
var splitStringToArray = (value) => value.trim().replace(/\s+/g, " ").split(" ");
var parseCSSClassNames = (value) => {
  if (Array.isArray(value)) {
    return parseArrayClassNames(value);
  }
  if (isSet(value)) {
    return parseArrayClassNames(Array.from(value));
  }
  if (isObject(value)) {
    return parseObjectClassNames(value);
  }
  if (isString(value)) {
    return parseStringClassNames(value);
  }
};
var parseObjectClassNames = (value) => {
  const classes = [];
  Object.keys(value).forEach((className) => {
    const currentClassName = splitStringToArray(className);
    if (value[className] && currentClassName.length) {
      classes.push(...currentClassName);
    }
  });
  return classes;
};
var parseStringClassNames = (value) => {
  const classes = [];
  const classesArray = splitStringToArray(value);
  classesArray.forEach((className) => {
    classes.push(className);
  });
  return classes;
};
var parseArrayClassNames = (value) => {
  const classes = [];
  value.forEach((className) => {
    const current = splitStringToArray(className);
    if (current[0]) {
      classes.push(...current);
    }
  });
  return classes;
};
var setHTMLAttributes = (attributes, renderer, element, zone) => {
  if (zone) {
    zone.onStable.pipe(take(1)).subscribe(() => {
      applyAttributes(attributes, renderer, element);
    });
  } else {
    applyAttributes(attributes, renderer, element);
  }
};
var removeHTMLAttributes = (attributes, renderer, element) => {
  for (const attribute in attributes) {
    if (attribute) {
      renderer.removeAttribute(element, attribute);
    }
  }
};
var parseAttributes = (target, source) => {
  const targetObj = target;
  Object.keys(source).forEach((key) => {
    delete targetObj[key];
  });
  return targetObj;
};
var applyAttributes = (attributes, renderer, element) => {
  for (const attribute in attributes) {
    if (attribute && isPresent(attributes[attribute])) {
      renderer.setAttribute(element, attribute, attributes[attribute]);
    }
  }
};
var isControlRequired = (control) => {
  if (!control?.validator) {
    return false;
  }
  return control.validator(control)?.hasOwnProperty("required");
};
var areObjectsEqual = (firstObject, secondObject) => {
  if (Object.keys(firstObject).length !== Object.keys(secondObject).length) {
    return false;
  }
  const equalSettings = Object.entries(firstObject).filter(([key, value]) => value === secondObject[key.toString()]);
  return equalSettings.length === Object.keys(firstObject).length;
};
var processCssValue = (value) => {
  if (typeof value === "number") {
    return `${value}px`;
  } else if (typeof value === "string") {
    const trimmedValue = value.trim();
    const numValue = parseInt(trimmedValue, 10);
    if (!isNaN(numValue) && Number.isFinite(numValue)) {
      if (numValue.toString() === trimmedValue) {
        return `${numValue}px`;
      } else {
        return value;
      }
    }
    return null;
  }
  return null;
};
var DraggableDirective = class _DraggableDirective {
  element;
  ngZone;
  enableDrag = true;
  kendoPress = new EventEmitter();
  kendoDrag = new EventEmitter();
  kendoRelease = new EventEmitter();
  draggable;
  constructor(element, ngZone) {
    this.element = element;
    this.ngZone = ngZone;
  }
  ngOnInit() {
    this.toggleDraggable();
  }
  ngOnChanges(changes) {
    if (isChanged("enableDrag", changes)) {
      this.toggleDraggable();
    }
  }
  ngOnDestroy() {
    this.destroyDraggable();
  }
  toggleDraggable() {
    if (isDocumentAvailable()) {
      this.destroyDraggable();
      if (this.enableDrag) {
        this.draggable = new Draggable({
          drag: (e) => this.kendoDrag.next(e),
          press: (e) => this.kendoPress.next(e),
          release: (e) => this.kendoRelease.next(e)
        });
        this.ngZone.runOutsideAngular(() => this.draggable?.bindTo(this.element.nativeElement));
      }
    }
  }
  destroyDraggable() {
    if (this.draggable) {
      this.draggable.destroy();
      this.draggable = void 0;
    }
  }
  static \u0275fac = function DraggableDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DraggableDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _DraggableDirective,
    selectors: [["", "kendoDraggable", ""]],
    inputs: {
      enableDrag: "enableDrag"
    },
    outputs: {
      kendoPress: "kendoPress",
      kendoDrag: "kendoDrag",
      kendoRelease: "kendoRelease"
    },
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DraggableDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDraggable]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }], {
    enableDrag: [{
      type: Input
    }],
    kendoPress: [{
      type: Output
    }],
    kendoDrag: [{
      type: Output
    }],
    kendoRelease: [{
      type: Output
    }]
  });
})();
var closestInScope = (node, predicate, scope) => {
  while (node && node !== scope && !predicate(node)) {
    node = node.parentNode;
  }
  if (node !== scope) {
    return node;
  }
  return void 0;
};
var closest = (node, predicate) => {
  while (node && !predicate(node)) {
    node = node.parentNode;
  }
  return node;
};
var contains = (parent, node, matchSelf = false) => {
  const outside = !closest(node, (child) => child === parent);
  if (outside) {
    return false;
  }
  const el = closest(node, (child) => child === node);
  return el && (matchSelf || el !== parent);
};
var findElement = (node, predicate, matchSelf = true) => {
  if (!node) {
    return;
  }
  if (matchSelf && predicate(node)) {
    return node;
  }
  node = node.firstChild;
  while (node) {
    if (node.nodeType === 1) {
      const element = findElement(node, predicate);
      if (element) {
        return element;
      }
    }
    node = node.nextSibling;
  }
};
var focusableRegex = /^(?:a|input|select|option|textarea|button|object)$/i;
var isFocusable = (element) => {
  if (!element.tagName) {
    return false;
  }
  const tagName = element.tagName.toLowerCase();
  const hasTabIndex = Boolean(element.getAttribute("tabIndex"));
  const focusable = !element.disabled && focusableRegex.test(tagName);
  return focusable || hasTabIndex;
};
var hasFocusableParent = (element, container) => {
  let currentElement = element;
  let hasFocusableParent2 = false;
  while (currentElement && currentElement !== container) {
    if (isFocusable(currentElement)) {
      hasFocusableParent2 = true;
      break;
    }
    currentElement = currentElement.parentElement;
  }
  return hasFocusableParent2;
};
var isVisible = (element) => {
  if (!isDocumentAvailable() || !element?.getBoundingClientRect) {
    return false;
  }
  const rect = element.getBoundingClientRect();
  const hasSize = rect.width > 0 && rect.height > 0;
  const hasPosition = rect.x !== 0 && rect.y !== 0;
  return (hasSize || hasPosition) && window.getComputedStyle(element).visibility !== "hidden";
};
var isFocusableWithTabKey = (element, checkVisibility = true) => {
  if (!isFocusable(element)) {
    return false;
  }
  const tabIndex = element.getAttribute("tabIndex");
  const visible = !checkVisibility || isVisible(element);
  return visible && tabIndex !== "-1";
};
var findFocusableChild = (element, checkVisibility = true) => {
  return findElement(element, (node) => isFocusableWithTabKey(node, checkVisibility), false);
};
var toClassList = (classNames) => String(classNames).trim().split(" ");
var hasClasses = (element, classNames) => {
  const namesList = toClassList(classNames);
  return Boolean(toClassList(element.className).find((className) => namesList.indexOf(className) >= 0));
};
var EventsOutsideAngularDirective = class _EventsOutsideAngularDirective {
  element;
  ngZone;
  renderer;
  events = {};
  scope;
  subscriptions;
  constructor(element, ngZone, renderer) {
    this.element = element;
    this.ngZone = ngZone;
    this.renderer = renderer;
  }
  ngOnInit() {
    if (!this.element?.nativeElement) {
      return;
    }
    const events = this.events;
    this.subscriptions = [];
    this.ngZone.runOutsideAngular(() => {
      for (const name in events) {
        if (Object.hasOwnProperty.call(events, name)) {
          this.subscriptions?.push(this.renderer.listen(this.element.nativeElement, name, this.scope ? events[name].bind(this.scope) : events[name]));
        }
      }
    });
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      for (let idx2 = 0; idx2 < this.subscriptions.length; idx2++) {
        this.subscriptions[idx2]();
      }
      this.subscriptions = null;
    }
  }
  static \u0275fac = function EventsOutsideAngularDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventsOutsideAngularDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _EventsOutsideAngularDirective,
    selectors: [["", "kendoEventsOutsideAngular", ""]],
    inputs: {
      events: [0, "kendoEventsOutsideAngular", "events"],
      scope: "scope"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventsOutsideAngularDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoEventsOutsideAngular]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: Renderer2
  }], {
    events: [{
      type: Input,
      args: ["kendoEventsOutsideAngular"]
    }],
    scope: [{
      type: Input
    }]
  });
})();
var ResizeService = class {
  resizeBatchService;
  resize = new EventEmitter();
  acceptedSize = false;
  lastWidth;
  lastHeight;
  state = 0;
  parentElement;
  constructor(resizeBatchService) {
    this.resizeBatchService = resizeBatchService;
  }
  acceptSize(size = this.measure()) {
    this.lastWidth = size.width;
    this.lastHeight = size.height;
    this.acceptedSize = true;
  }
  checkChanges() {
    if (!isDocumentAvailable()) {
      return;
    }
    if (this.state === 0) {
      this.state = 1;
      this.resizeBatchService.schedule(this, this.init);
    }
  }
  destroy() {
    this.resizeBatchService.cancel(this);
  }
  checkSize() {
    if (!this.parentElement) {
      return false;
    }
    const {
      width,
      height
    } = this.measure();
    const sameSize = width === this.lastWidth && height === this.lastHeight;
    if (sameSize) {
      return false;
    }
    this.lastWidth = width;
    this.lastHeight = height;
    this.acceptedSize = false;
    this.resize.emit({
      width,
      height
    });
    return true;
  }
  initSize() {
    const size = this.measure();
    this.lastWidth = size.width;
    this.lastHeight = size.height;
  }
  measure() {
    let width = 0;
    let height = 0;
    if (this.parentElement) {
      height = this.parentElement.offsetHeight;
      width = this.parentElement.offsetWidth;
    }
    return {
      height,
      width
    };
  }
};
var applyStyles = (el, styles) => {
  for (const prop in styles) {
    el.style.setProperty(prop, styles[prop]);
  }
};
var div = (styles) => {
  const el = document.createElement("div");
  applyStyles(el, styles);
  return el;
};
var computedProp = (elem, prop) => getComputedStyle(elem, null).getPropertyValue(prop);
var WRAP_STYLES = {
  "position": "absolute",
  "display": "block",
  "left": "0",
  "top": "0",
  "right": "0",
  "bottom": "0",
  "z-index": "-1",
  "overflow": "hidden",
  "visibility": "hidden"
};
var EXPAND_CHILD_STYLES = {
  "position": "absolute",
  "left": "0",
  "top": "0",
  "transition": "0s"
};
var SHRINK_CHILD_STYLES = __spreadProps(__spreadValues({}, EXPAND_CHILD_STYLES), {
  "width": "200%",
  "height": "200%"
});
var ResizeCompatService = class extends ResizeService {
  element;
  ngZone;
  expand;
  expandChild;
  shrink;
  subscription;
  constructor(resizeBatchService, element, ngZone) {
    super(resizeBatchService);
    this.element = element;
    this.ngZone = ngZone;
  }
  checkChanges() {
    if (this.state === 2) {
      if (!this.resizeBatchService.isScheduled(this)) {
        this.resizeBatchService.schedule(this, this.checkSize);
      }
      return;
    }
    super.checkChanges();
  }
  destroy() {
    super.destroy();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.expand) {
      const element = this.element?.nativeElement;
      element.removeChild(this.expand);
      element.removeChild(this.shrink);
      this.expand.removeChild(this.expandChild);
      this.expand = this.expandChild = this.shrink = this.element = null;
    }
  }
  checkSize() {
    if (super.checkSize()) {
      this.reset();
      return true;
    }
    return false;
  }
  init() {
    const parentElement = this.parentElement = this.element?.nativeElement.parentElement;
    if (computedProp(parentElement, "position") === "static") {
      parentElement.style.position = "relative";
    }
    this.state = 2;
    this.render();
    this.reset();
    this.initSize();
    this.subscribe();
  }
  render() {
    const element = this.element?.nativeElement;
    applyStyles(element, WRAP_STYLES);
    element.setAttribute("dir", "ltr");
    this.expand = div(WRAP_STYLES);
    this.expandChild = div(EXPAND_CHILD_STYLES);
    this.expand.appendChild(this.expandChild);
    element.appendChild(this.expand);
    this.shrink = div(WRAP_STYLES);
    const shrinkChild = div(SHRINK_CHILD_STYLES);
    this.shrink.appendChild(shrinkChild);
    element.appendChild(this.shrink);
  }
  reset() {
    const expandChild = this.expandChild;
    expandChild.style.width = "100000px";
    expandChild.style.height = "100000px";
    const expand = this.expand;
    expand.scrollLeft = 1e5;
    expand.scrollTop = 1e5;
    const shrink = this.shrink;
    shrink.scrollLeft = 1e5;
    shrink.scrollTop = 1e5;
  }
  subscribe() {
    this.ngZone.runOutsideAngular(() => {
      this.subscription = merge(fromEvent(this.shrink, "scroll"), fromEvent(this.expand, "scroll")).subscribe(() => {
        this.checkSize();
      });
    });
  }
};
var HAS_OBSERVER = typeof ResizeObserver !== "undefined";
var ResizeObserverService = class extends ResizeService {
  element;
  ngZone;
  resizeObserver;
  static supported() {
    return HAS_OBSERVER;
  }
  constructor(resizeBatchService, element, ngZone) {
    super(resizeBatchService);
    this.element = element;
    this.ngZone = ngZone;
  }
  destroy() {
    super.destroy();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
    this.parentElement = null;
  }
  init() {
    this.parentElement = this.element.nativeElement.parentElement;
    this.initSize();
    this.state = 2;
    this.ngZone.runOutsideAngular(() => {
      this.resizeObserver = new ResizeObserver(() => {
        this.checkSize();
      });
      this.resizeObserver.observe(this.parentElement);
    });
  }
};
var ResizeBatchService = class _ResizeBatchService {
  ngZone;
  scheduled = [];
  resolvedPromise = Promise.resolve(null);
  subscription;
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.flush = this.flush.bind(this);
  }
  schedule(instance, method) {
    this.scheduled.push({
      instance,
      method
    });
    if (!this.subscription) {
      this.ngZone.runOutsideAngular(() => {
        this.subscription = from(this.resolvedPromise).subscribe(this.flush);
      });
    }
  }
  isScheduled(instance) {
    return Boolean(this.scheduled.find((item) => item.instance === instance));
  }
  cancel(instance) {
    const scheduled = this.scheduled;
    const count = scheduled.length;
    for (let idx2 = 0; idx2 < count; idx2++) {
      if (scheduled[idx2].instance === instance) {
        scheduled.splice(idx2, 1);
        if (!scheduled.length) {
          this.unsubscribe();
        }
        return;
      }
    }
  }
  ngOnDestroy() {
    this.unsubscribe();
  }
  unsubscribe() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
  flush() {
    this.scheduled.forEach((item) => {
      item.method.call(item.instance);
    });
    this.scheduled = [];
    this.unsubscribe();
  }
  static \u0275fac = function ResizeBatchService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResizeBatchService)(\u0275\u0275inject(NgZone));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ResizeBatchService,
    factory: _ResizeBatchService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeBatchService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NgZone
  }], null);
})();
var DEFAULT_RATE_LIMIT = 10;
var ResizeSensorComponent = class _ResizeSensorComponent {
  /**
   * The maximum number of resize events to emit per second.
   *
   * Defaults to 10.
   */
  rateLimit = DEFAULT_RATE_LIMIT;
  /**
   * Fires when the parent DOM element has been resized.
   */
  resize = new EventEmitter();
  subscription;
  resizeService;
  constructor(resizeBatchService, element, ngZone) {
    const serviceType = ResizeObserverService.supported() ? ResizeObserverService : ResizeCompatService;
    this.resizeService = new serviceType(resizeBatchService, element, ngZone);
    const throttleTime = 1e3 / (this.rateLimit || DEFAULT_RATE_LIMIT);
    this.subscription = this.resizeService.resize.pipe(auditTime(throttleTime)).subscribe(({
      width,
      height
    }) => {
      if (!this.resizeService.acceptedSize) {
        this.resize.emit({
          width,
          height
        });
      }
    });
  }
  ngAfterViewChecked() {
    this.resizeService.checkChanges();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.resizeService.destroy();
  }
  acceptSize(size) {
    this.resizeService.acceptSize(size);
  }
  static \u0275fac = function ResizeSensorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResizeSensorComponent)(\u0275\u0275directiveInject(ResizeBatchService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ResizeSensorComponent,
    selectors: [["kendo-resize-sensor"]],
    inputs: {
      rateLimit: "rateLimit"
    },
    outputs: {
      resize: "resize"
    },
    decls: 0,
    vars: 0,
    template: function ResizeSensorComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeSensorComponent, [{
    type: Component,
    args: [{
      selector: "kendo-resize-sensor",
      template: "",
      standalone: true
    }]
  }], () => [{
    type: ResizeBatchService
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    rateLimit: [{
      type: Input
    }],
    resize: [{
      type: Output
    }]
  });
})();
var KendoInput = class {
};
var KENDO_WEBMCP_HOST = new InjectionToken("KendoWebMcpHost");
var Keys;
(function(Keys2) {
  Keys2["ArrowDown"] = "ArrowDown";
  Keys2["ArrowLeft"] = "ArrowLeft";
  Keys2["ArrowRight"] = "ArrowRight";
  Keys2["ArrowUp"] = "ArrowUp";
  Keys2["Backspace"] = "Backspace";
  Keys2["Delete"] = "Delete";
  Keys2["Digit0"] = "Digit0";
  Keys2["Digit1"] = "Digit1";
  Keys2["Digit2"] = "Digit2";
  Keys2["Digit3"] = "Digit3";
  Keys2["Digit4"] = "Digit4";
  Keys2["Digit5"] = "Digit5";
  Keys2["Digit6"] = "Digit6";
  Keys2["Digit7"] = "Digit7";
  Keys2["Digit8"] = "Digit8";
  Keys2["Digit9"] = "Digit9";
  Keys2["End"] = "End";
  Keys2["Enter"] = "Enter";
  Keys2["Escape"] = "Escape";
  Keys2["F1"] = "F1";
  Keys2["F2"] = "F2";
  Keys2["F10"] = "F10";
  Keys2["Home"] = "Home";
  Keys2["KeyA"] = "KeyA";
  Keys2["KeyB"] = "KeyB";
  Keys2["KeyC"] = "KeyC";
  Keys2["KeyD"] = "KeyD";
  Keys2["KeyE"] = "KeyE";
  Keys2["KeyF"] = "KeyF";
  Keys2["KeyG"] = "KeyG";
  Keys2["KeyH"] = "KeyH";
  Keys2["KeyI"] = "KeyI";
  Keys2["KeyJ"] = "KeyJ";
  Keys2["KeyK"] = "KeyK";
  Keys2["KeyL"] = "KeyL";
  Keys2["KeyM"] = "KeyM";
  Keys2["KeyN"] = "KeyN";
  Keys2["KeyO"] = "KeyO";
  Keys2["KeyP"] = "KeyP";
  Keys2["KeyQ"] = "KeyQ";
  Keys2["KeyR"] = "KeyR";
  Keys2["KeyS"] = "KeyS";
  Keys2["KeyT"] = "KeyT";
  Keys2["KeyU"] = "KeyU";
  Keys2["KeyV"] = "KeyV";
  Keys2["KeyW"] = "KeyW";
  Keys2["KeyX"] = "KeyX";
  Keys2["KeyY"] = "KeyY";
  Keys2["KeyZ"] = "KeyZ";
  Keys2["Numpad1"] = "Numpad1";
  Keys2["Numpad2"] = "Numpad2";
  Keys2["Numpad3"] = "Numpad3";
  Keys2["Numpad4"] = "Numpad4";
  Keys2["Numpad5"] = "Numpad5";
  Keys2["Numpad6"] = "Numpad6";
  Keys2["Numpad7"] = "Numpad7";
  Keys2["Numpad8"] = "Numpad8";
  Keys2["Numpad9"] = "Numpad9";
  Keys2["Numpad0"] = "Numpad0";
  Keys2["NumpadEnter"] = "NumpadEnter";
  Keys2["NumpadDecimal"] = "NumpadDecimal";
  Keys2["PageDown"] = "PageDown";
  Keys2["PageUp"] = "PageUp";
  Keys2["Space"] = "Space";
  Keys2["Tab"] = "Tab";
})(Keys || (Keys = {}));
var focusableSelector = ['a[href]:not([tabindex^="-"]):not([disabled])', 'area[href]:not([tabindex^="-"]):not([disabled])', 'input:not([tabindex^="-"]):not([disabled])', 'select:not([tabindex^="-"]):not([disabled])', 'textarea:not([tabindex^="-"]):not([disabled])', 'button:not([tabindex^="-"]):not([disabled])', 'iframe:not([tabindex^="-"]):not([disabled])', 'object:not([tabindex^="-"]):not([disabled])', 'embed:not([tabindex^="-"]):not([disabled])', '*[tabindex]:not([tabindex^="-"]):not([disabled])', '*[contenteditable]:not([tabindex^="-"]):not([disabled]):not([contenteditable="false"])'].join(",");
var keyCodeToKeysMap = {
  65: Keys.KeyA,
  66: Keys.KeyB,
  67: Keys.KeyC,
  68: Keys.KeyD,
  69: Keys.KeyE,
  70: Keys.KeyF,
  71: Keys.KeyG,
  72: Keys.KeyH,
  73: Keys.KeyI,
  74: Keys.KeyJ,
  75: Keys.KeyK,
  76: Keys.KeyL,
  77: Keys.KeyM,
  78: Keys.KeyN,
  79: Keys.KeyO,
  80: Keys.KeyP,
  81: Keys.KeyQ,
  82: Keys.KeyR,
  83: Keys.KeyS,
  84: Keys.KeyT,
  85: Keys.KeyU,
  86: Keys.KeyV,
  87: Keys.KeyW,
  88: Keys.KeyX,
  89: Keys.KeyY,
  90: Keys.KeyZ
};
var normalizeKeys = (event) => {
  const keyCode = event.keyCode;
  if (keyCode >= 65 && keyCode <= 90) {
    const normalizedKey = keyCodeToKeysMap[keyCode];
    if (normalizedKey) {
      return normalizedKey;
    }
  }
  if (event.code === Keys.Numpad1 && event.key === Keys.End) {
    return Keys.End;
  }
  if (event.code === Keys.Numpad2 && event.key === Keys.ArrowDown) {
    return Keys.ArrowDown;
  }
  if (event.code === Keys.Numpad3 && event.key === Keys.PageDown) {
    return Keys.PageDown;
  }
  if (event.code === Keys.Numpad4 && event.key === Keys.ArrowLeft) {
    return Keys.ArrowLeft;
  }
  if (event.code === Keys.Numpad6 && event.key === Keys.ArrowRight) {
    return Keys.ArrowRight;
  }
  if (event.code === Keys.Numpad7 && event.key === Keys.Home) {
    return Keys.Home;
  }
  if (event.code === Keys.Numpad8 && event.key === Keys.ArrowUp) {
    return Keys.ArrowUp;
  }
  if (event.code === Keys.Numpad9 && event.key === Keys.PageUp) {
    return Keys.PageUp;
  }
  if (event.code === Keys.NumpadEnter) {
    return Keys.Enter;
  }
  return event.code;
};
var FIELD_REGEX$1 = /\[(?:(\d+)|['"](.*?)['"])\]|((?:(?!\[.*?\]|\.).)+)/g;
var getterCache = {};
getterCache["undefined"] = () => void 0;
function getter(field) {
  if (getterCache[field]) {
    return getterCache[field];
  }
  const fields = [];
  field.replace(FIELD_REGEX$1, function(_match, index, indexAccessor, fieldName) {
    fields.push(index !== void 0 ? index : indexAccessor || fieldName);
  });
  getterCache[field] = function(obj) {
    let result = obj;
    for (let idx2 = 0; idx2 < fields.length && result; idx2++) {
      result = result[fields[idx2]];
    }
    return result;
  };
  return getterCache[field];
}
var setterCache = {};
setterCache["undefined"] = (obj) => obj;
var watermarkStyles = `
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.2;
    zIndex: 101;
    pointerEvents: none;
    backgroundImage: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABVxSURBVHgB7Z3tVRtJE4WL9zgANgLLGRCCnAGOADmCxRGgDFAGYiOADKQMIAGO9J8ji42g37mjqlUjBgOanpn+uM85sjC2sKzbVd1dVV0tQgghhBBCCCGEEEIIKRPn3Gn1GAlJmmN1pP558J6OX9540ejh4WGlX09OTk7+EZIclXYXlY43+vVflY7PH3wd9c+AY/Wvvcb9/b0bjUYOz/hBQpICmh1oOPrEa6l/4rTR337AhIMgTSqtzg+0m8gnof7p0mD8EzmGhkFwJiR6np6e7luLL9Q/RTDTBzF+7wfWg2CxWOCHjYVET6XTdLPZrFuLL9Q/NeCkoVUQ4/d+6Ijev1yof1rAUVMvQgjJHebrSRu+CEmWo/O8hISgCjStKpgiGoDWed4AUP/hwGf++Pi4hQYyFHgDzBP3T7A8b0uo/zD4+sMBy1CwWKR/YjF+fS/Uv2di0t/eEAdBT0QnvlD/PolR/xoOgu4JUd7bFdS/e6I1foODoFuqz3M2mUziFF+of5dEb/xGwyAYCwmCVuPNYv5MqX94Yl75NWKD4PLyEm92KqQoqH9Y8Bnis0zC+A14LbxxVqiVCfUPh678plxNFYQe5pjRgAgpDAv4IOAHJyCEkDJoiPaeCyG5UA1oRIYWHNivSSbV0wLq/zbQXz+bS8kV/AeZJ35NCcYPqH8zvv4VS8kVFou8phTjB9T/NcVt+zgI9rjQDRwTgPrvKcn5v4CDYIfT/vtFiS/UHxRr/AYHwQ4t9DiVwihZ/+KN36ATKJsS9U+utr9r/EGQdQSUNFKa/geZkImQ/2rHlznnQDG7oX9b9Xwl5AUl6G9oLcSSxl8Q/p4P13YJIaQMisvzEkJ2lJjnJyQY3lnoJGfNUvP8oUhZf7c70s2eCG1wL7uhRJ0iQnCveiDIhzf7t/f9IvP8IUhJfx/b9rErUkvgRVPIE1fv6xrvbzweu7OzM3d7e4v3OhfSilT092HMJzCxF4u43eWctfFvt1uHu9nxXvF1CWmtroldfx9W+HVErINAjX+M65ngAPxnOAJ1AiMhrUjBCdD4Oya2QYBlPwx8vV47WwFg+a+XZbrz83NzANz/ByBmJ0Dj74lYBgECfrbnt6U/DB/vC7388L2rqyu8vzshwYjRCdD4e8YfBLidVgYA0X7M9jB8PGazmbu5ualnfiz9dSAsufwPTwz6+5jjp/H3CD5ofPB9343u9v3u6+U+0jyY7eEA8Hx3d4c/QjvvMyGdMZT+TeA9wBHR+DPHUn3T6bRe7uMxn89tn18v/TH7O17gQEheYM9vEX7M9hbsg/FbHED3/IPPSISQgNhyE0au+7x7PPtOQFcB3PMTMjTYf4cyRN3zL2DgMHgs/7XU99acgDIWEgUh9W/4uWMh8QKBvCh8qxSR7fmxt0eEv8kJ6MzP8/2REFL/g59bp/o0xsMAb6xAnBB5Yr+6D3X9KOpBxP/ACWA0jFnoEw+h9D/4mYd5/pGQeAlRLFK95tJy+35578PDQ+0E9LAPi3wixAUsFmKRT6I0DIIPzdJuf6R3i+UeZnsz/nqjPx47/fMpZ/54OVb/g5/BZi4pY4Pgo8s2d3CkF0Z/cXFRL/+Xy2W9BdBUH4/5JsBn9W94PZu5pI77QzMOjepiNp/j71hO//fv31sr7qmtfT73i3xWjnvAZHhH/4nquXrLwB2bueSJ27Vmvodhq4df4BmzvQb3IPxWl/zgRl/DwZA4GrhdYFUHfbHE1y0enXsJ2FLfCnggvjqBejDoTI8o38ocgJAscNq8BY4fv/Uf+J46gjkdQcbA+19fXzs7zQfR8TWcgH+kFw/u+fMDKz/o3OQETk9PLcWLPSBbeeWELd91eb+CcTc5gXr6r9J8PNKbF/7S3z+6DYcvDasBOv6M0GUduNDfv+cEYPhjIVmA+I3Vc4gaOQzfHAECvb4joAPICCzlrIJP93h/dAIYDBQ/L8wBNC37rXUblv5CB5AfGvi5h6F7Ed9GJ2CZP0b780O1vreVnnhOAFsBOoCMscg/HMBbTsCO+grJFkvvHmYCSnYA/5MMcbsiH6TykNgfr9fry58/f0oltFxcXMj379+l+h42gBcnJyfr6iXfq1nhJ56FZIeuAq+fn59Xv379Oq0CgVJNBEIydAAavLv98ePHeSX4bfX1OQSv9noQ/a7y9A8HTuAcTqB63FSPZyE5Mq3GwOW3b99kNpu9+5e/fv2Kp3+FpAW8vB3cwbLOOvZYfl9LfGdW9KOn+mZCskZXhCuL9vtLfjvshd97hWArpn8TxGn5rhZzOL/gB19DYBzzxcEeTQEtGfArB7c7xbmyVu4YExoTuNcYEL6eCkkTxHYOmna4wzQfvq8z/+o949e940hIkjTp5/ZXjm/1+VQfr856UP/EcLtqr9s/OQENDl5+wPhH3nHQZK6mJjucNvNo2w+A+icC0jaY4a2LT5MT+Mye3+l58JSupiY7XIA2XtQ/IZw2f7D9v+X6D53AZ/f8LqGrqckOF7CNF/VPAF3Or6xvv53r951Amx5+DYOAXWEjxXXQxov6R4zTSzusht8OfABE+r3U39y1iPbbIODVX3ED4/Tagk8kENQ/QiyaC1Fg7PX6frm0Mk6/wUOQ8l799+j9I0cDwcF1ov4R4Xbde2vjxi92ogsPzPrY92szD7buJiQn3K6+v17q2yxvlV1u3+TRAn4jIYTkAfbymOWx1AcwfHMEXp5/JISQ9PEDd867ohvGbvt+cwRe6+5ee7ltNpuVf7yYdA8+68fHxy0+exkY6t8RGnSxJX19yAd7fWvhjEs7NOCHb2D9/+AGqO3HQGSeuD/8PD/GggwM9e8IBPCwr7ciHnzA6NrqtW5+4QRkIByLRXrDRXhXH/XvCKRccEuPX8mHD9jr7Vc7AV32D9rJh4Oge2I0foP6d8QHnADO9kdxYw8HQXfEbPwG9e+It5yAlvdG1beNgyA8KRi/Qf07oskJIEYQw8x/SMMgGAs5CmR0UjF+g/oHwh00YzAn0OZgT1/YINBU5VTIUeCzw2eYivEb1L8l7o1mDm7X220a48x/iNtVLE4dC5OOxu2794wlMaj/kbgAzRwIIQmS4p6PEBKIp6enexo/IYWCPdNms1nnbPxat7BwvH/+P7Dt08/kUjKH+hcOxGeeeI8f86lYSuZQ/8JhsciehoBv9rMi9VdcwZcucBCkVeEXmuL1dy0vbciBkgdBycZvFKs/8/x7ShwENP49xelP8V9T0iBgncdritGfxv82/iDIORJ+EAGfCKnJXn8a//to7fgy51y45sCX1P812erPZR8hBVMZ/Ax9+2j8hBSIHumcpXikkxBCBsXtz8QnUyXndvfz8Sx8AFLUnwTEveyKE32KyAK+7IYThqT0V88/o+cPBz7TVPLEJdb2d00y+pv4elHHTEgwUigWYaq3O6LXn56/e2IeBDT+7olWf4rfHzEOAurfH9HpT/H7J6ZBQP37Jxr9Kf5w+IMAt9PKQOB6NurfP4Prjyg/jX9Y8JnDAHE/vQwE/m0MQOrfP4PqX/3jp15Dj4kQQspCK5SK7OZDCCGEEBIfbneH4kgCoT9vLCQJguqPaD8CDdXzlZDogaEuFotgKSLL9uBnYmAJiZqg+vupPlzbJSR6YKSh8sSODVyTI5j+LO9NlxDFIqzzSJfW+jPPnz4Ng+DDGRvqnz5t9GeePxNsEHx2+U798+BY/e3FzPNnwLE6Uv88oI6EEEIIIYQQQgghhBBCCCGEEEIIIYQQQkiRoHyQxz/T51gdqX8evKfjlzdeNHp4eFjp15OTk5N/hCQHjoFWOt7o139VOj5/8HXUPwOO1f+/02ApXEhJmmnTzIP6p49r28wlRFMJMgwhmnlQ/3RB854g/RwaBgF7wkVOyGYe1D9N0L4vWDMXGwTaFHIsJGpgpF5TyIm0hPqnR6XTdLPZrF2oZi7aVIDePxFgqCH1ov6EEEIIITHRtl7jixBCkuToPH8ocGMQrihmiqh/8Jnjau6hrwen/sPQOs8fAgxA5on7xxcfBigDQf2HIUSdR6g3wmKRnolGfKH+QxCT/vaGOAh6Ijrxhfr3SYz613AQdE+04gv174Ng5b1dwUHQHTEbv0H9u6X6PGeTySTu69oaBsFYSCui9/we1L87tBpzFv1naoPg8vISA2AqpBX4DPFZxm78BvUn9awF8R07yrRGPf80pdmU+hNCyJHoYa4ZHSghhWEBXwT84ASEEFIGDdmec8mJ6j+EyNAiu/9YACC+fjaXkinU/21SSPW2BuIzT/waX/yKpWQK9W+mCOMHLBZ5TfbLPg/q/5pijN/gINhTnPhC/X1cwAauScFBUKbxG9R/h9P7F0rTv6bkQVCy8Rt0Aju00OtUSqTEQZBSbX/X0AmQF4Mg5wi4cRAJn0jhlKY/aUBrx5c558ANzYUvafx7StAfqxv0UKyer4QQUg5+zAfXdgkhpAxKqvMghHgUm+cPhdufhU/Oa+qRTp6Jb0HK+oOi8/whcC+74SSTIrJlH7vitCMl/RHcqx4I8uHN/u19v9w8f1swi6aWJ+aeLxyp6F+9r2u8v/F47M7Oztzt7S3e61xIe1IqFmGFX3hi19/tLuesjX+73brFYlG/V3xdQlq7F1JwAjT+7ohVfzX+Ma5ngwPwn+EI1AmMhLQnZidA4++e2PTHsh8Gvl6vna0AsPzXy1Ld+fm5OQDu/0MRoxOg8fdHLPoj4Gd7flv6w/DxvtDLD9+7urrC+7sTEhZ/EOB2WhkYE57G3w8x6I9oP2Z7GD4es9nM3dzc1DM/lv46FpZc/ncEBgEMD7XVMjB4DxiINP7+GEp/t7/voF7uI0WJ2R4OAM93d3f4I7TzPhNCSD5Yqm86ndbLfTzm87nt8+ulP2Z/x+vQCMkL7Pktwo/Z3oJ9MH6LA+ief/AVKSEkILbdgJHr3v4ez74T0FUA9/wxgP1XF0Lozx0LiZqQ+uuefwEDh8Fj+a+lvrfmBJSxkOGBEF4UNliKyFJ9usdjgCdSQupve37s7RHhb3ICOvPzfH8swDhD54kb8vwjIVESSn+/ug91/SjqQcT/wAlgNhiz0CcyQhaLsMgnPULoX73m0nL7fnnvw8ND7QT0sA+LfGKlYRB82ks7NnNIlmP1d/sjvVtsJTDbm/HXG/3x2OmfTznzR44NgmOX7Y7NHJLms/q7gyO9MPqLi4t6+b9cLustgKb6eMw3FdwfmjFggKg3X71l4I7NHJLmHf3PVPs5/o7l9H///r214p7a2udzv8hn5RgDShsN3Czg1SE4lom6xKO4heB2rdnvYdi6QljgGbO9BvfgOLa65Ac3+hpOBinjtHkDhMdv/Qe+p45gTkeQL7bUtwIeaK5OoJ4MdKZHlG9lDkBIPsDzQ/QmJ3B6emopHqwB2corQzDDX19fOzvNh7GAr+EE/CO9eHDPnxH+0t8/ugnBpWE1QOHzwpbvurxfwbibnEA9/VdpPh7pzQjs3yyfK2rkMHxzBAj0+I6ADiAvdFsHLvT37zkBGP5YSB6YA2ha9lvrJiz9hQ4gO7CVswo+jfH80QlgMqD2GaKC35unF88JYCtAB5AnGvi9h6F7GZ9GJ2CZP0b7M8XSO4eZADqAvLHIPxzAW07AjvpKYfxPCkBngevn5+fVr1+/TqtAoFQDQUieuF2RD1J5SOyP1+v15c+fP6Vy9HJxcSHfv3+X6nsIAF2cnJysq5d8r1YAP/EshVGEA6iYVkZ/+e3bN5nNZu/+5a9fv+LpXyHJocG72x8/fpxXDv+2+vocDr+K9cDp31UrvYcDJ3AOJ1A9bqrHs5D80BlhZdF+f8lvhz3we68QZMX0T3pglWcHd6Cjdeyx/L6W+M6s6EdP9c2ElIHbneJaWStnFIRoTOBe94D4eiokSZyW72oxl/MLfvA1jB6642CPpoCXDPhljO79RwffG6kj2OrzqT5e1Xo3vZ7EC2K7B0073GGaD9/XmX/1nvFT/4Rx2syjbT+AIW+gIZ/D7ao9b//kBDQ4ePkB46f+qeICtPFy2g8gpavJSwZpW8zw1sWnyQl8Zs9P/RPFBWzj5RK6mrxkTCfb/1uu/9AJfHbPT/0Tw3XQxqthELArcETocn5lffvtXL/vBNr08KP+CQFxvLbQEwmEDQJe/RQXTi/tsBp+O/AFEOn3Un9z1yLaT/0TQgNBwb20Zg/o/SPBsjkwShh7vb5fLq2M22/wEqS8V/+9sRBChsXtuvfWxo1f7EQnHpj1se/XZh5s3U1ITrhdfX+91LdZ3io73b7JqwX8RkIIyQPs5THLY6kPYPjmCLw8/0hI3iAd8/j4uN1sNisZGLwH/3gpCYcfuHPeFd0wdtv3myPwWnf32suR+veMn+fHBy8DA0fEPHF4NOhmS/r6kA/2+tbCHZd2aMAP38D6/8ENUNtP/XvERXhXn2OxSCcggId9vRXx4LNF12avdfsLJyADQf17IkbjNzgIwoOUK27p8Sv58Nl6vf1qJ6DL/kE7+VD/jonZ+A0OgvB8wAngbH8UN/ZQ/45IwfgNDoLwvOUEtLw3qr6N1D8wiOimYvxGwyAYC2lFkxNAjCCGmf8Q6h8QRHeR7knF+A0bBJqqmgr5NO6gGYc5gTYHe/qC+gfC7bv3jCUx3K5ibepYmPJp3BvNXNyut+M0xpn/EOpPyBG4AM1cCCEJkmLMhxASiKenp3saf4Fg2Vc9FsjpSuZo3hr/115r1lMAe+bNZrPO2fip/wH+nq9iKZkD8ZknLhfq79EQ8MneK7JYpGyov5JShV9oOAjKvnSjeP1LNn6j5EHgWl7akgPF6k/j31PiIGCef09x+jPP+5qSBgGd/2uKcgIHEdCJkBp/EOSaCaHxv00J+tdoDnRJ8V+jtePLHGshaPzvk7P+pGC47SOkYCqDn6FvH42fkAJxuyPdaN01FlIGbnc/37TkFE8o3L4nAmvHCyQ5/S3gw24oYXAvuyKxbLgwktK/xNr+rsFqKpU8sa78Zlz5hSMZ/Znq6Y4UikVMf72oYyYkGNHrT+PvnpgHAVd+3ROt/jT+/ohxEFD//ohOf4rfPzENAurfP1E5AVzPRPH7xx8EuJ1WBoDGPxyH+ruhjlTjbnR9AxMhvYLPHA4YGkjPIMpP4x+WIfUnhYMZx2voMRFCSFlohVqR3XwIIaQc3O5OtrGQJFC9RkKKRCsyRxICi/YuFgvs986ERA3Eh1ahUkT4GQg0Vc9XQqInqP6ODRyTA046VJ7Y1x/XdgmJnmD6M8+bLiGKRVjemy6t9WeeN30aBsGHI/bUP33a6M88bybYIPjs9o3658Gx+tuLmefNgGN1pP55QB0JIYQQQgghhBBCCJGy+T9ftRg+rVNPfAAAAABJRU5ErkJggg==');
`;
var licenseKeyUrl = "https://www.telerik.com/kendo-angular-ui/components/my-license/?utm_medium=product&utm_source=kendoangular&utm_campaign=kendo-ui-angular-purchase-license-keys-banner";
var bannerPresentOnPage = false;
var WatermarkOverlayComponent = class _WatermarkOverlayComponent {
  licenseMessage;
  banner;
  watermarkStyle = watermarkStyles;
  isOpen = true;
  isMobile = false;
  isNarrow = false;
  isCloseHovered = false;
  isCTAHovered = false;
  bannerMounted = false;
  get messages() {
    return [this.primaryMessage, ...this.extraMessages];
  }
  extraMessages = [];
  get primaryMessage() {
    return this.licenseMessage || {
      severity: "ERROR",
      productName: "",
      code: "",
      message: "",
      notificationTitle: "License key missing for Kendo UI for Angular.",
      notificationBody: `We couldn't verify your <a href="${this.licenseKeyUrl}">license key</a> for Kendo UI for Angular.Please see the browser console for details and resolution steps.`
    };
  }
  licenseKeyUrl = licenseKeyUrl;
  getContent(msg) {
    const iconContent = msg.notificationIcon?.content;
    return {
      iconSrc: iconContent ? `data:image/svg+xml;base64,${btoa(iconContent)}` : void 0,
      title: msg.notificationTitle || "",
      description: msg.notificationBody || msg.notificationMessage || "",
      buttonText: msg.callToAction?.message || "Buy Now",
      buttonLink: msg.callToAction?.link || "https://prgress.co/3PyHIoH"
    };
  }
  unsubscribeLicenseMessage = () => {
  };
  unsubscribeResize = () => {
  };
  ngOnInit() {
    if (bannerPresentOnPage || !this.licenseMessage || !isDocumentAvailable()) {
      return;
    }
    this.subscribeLicenseMessage();
    this.subscribeResize();
    bannerPresentOnPage = true;
  }
  ngAfterViewInit() {
    if (this.isBannerRendered) {
      document.body.appendChild(this.banner.nativeElement);
    }
  }
  ngOnDestroy() {
    this.unsubscribeLicenseMessage();
    this.unsubscribeResize();
    if (this.isBannerRendered) {
      document.body.removeChild(this.banner.nativeElement);
    }
  }
  closeBanner() {
    this.isOpen = false;
  }
  get isBannerRendered() {
    return isDocumentAvailable() && !!this.banner?.nativeElement;
  }
  subscribeLicenseMessage() {
    this.unsubscribeLicenseMessage = u(this.licenseMessage, "KENDOUIANGULAR", ({
      message
    }) => {
      this.extraMessages.push(message);
    }, () => {
      this.bannerMounted = true;
    });
  }
  subscribeResize() {
    const handleResize = () => {
      this.isMobile = window.innerWidth < 500;
      this.isNarrow = window.innerWidth < 768;
    };
    window.addEventListener("resize", handleResize);
    this.unsubscribeResize = () => window.removeEventListener("resize", handleResize);
  }
  // Used in tests to reset the static presence check flag
  resetPresenceCheck() {
    bannerPresentOnPage = false;
  }
  static \u0275fac = function WatermarkOverlayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WatermarkOverlayComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _WatermarkOverlayComponent,
    selectors: [["div", "kendoWatermarkOverlay", ""], ["kendo-watermark-overlay"]],
    viewQuery: function WatermarkOverlayComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.banner = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function WatermarkOverlayComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.watermarkStyle);
      }
    },
    inputs: {
      licenseMessage: "licenseMessage"
    },
    decls: 5,
    vars: 1,
    consts: [["buttonTemplate", ""], ["ctaTemplate", ""], ["banner", ""], [3, "ngStyle"], ["title", "Close", 3, "click", "mouseenter", "mouseleave", "ngStyle"], ["width", "20", "height", "20", "viewBox", "0 0 16 16", "fill", "none"], ["d", "M11.9309 3.1838C12.1754 2.93933 12.5712 2.93937 12.8157 3.1838C13.0601 3.4283 13.0601 3.82407 12.8157 4.06857L8.885 7.99923L12.8166 11.9309C13.0611 12.1754 13.0611 12.5721 12.8166 12.8166C12.5721 13.0611 12.1754 13.0611 11.9309 12.8166L7.99925 8.88497L4.06859 12.8166C3.8241 13.0611 3.42732 13.0611 3.18285 12.8166C2.93862 12.5721 2.93851 12.1753 3.18285 11.9309L7.11449 7.99923L3.18382 4.06857C2.93947 3.82413 2.93955 3.42829 3.18382 3.1838C3.42831 2.9393 3.82508 2.9393 4.06957 3.1838L7.99925 7.11349L11.9309 3.1838Z", "fill", "#212529"], ["target", "_blank", "rel", "noopener noreferrer", 1, "k-watermark-trial-button", 3, "mouseenter", "mouseleave", "ngStyle"], [4, "ngTemplateOutlet"], ["alt", "", 3, "src"], [3, "ngStyle", "innerHTML"]],
    template: function WatermarkOverlayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, WatermarkOverlayComponent_ng_template_0_Template, 3, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(2, WatermarkOverlayComponent_ng_template_2_Template, 2, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275conditionalCreate(4, WatermarkOverlayComponent_Conditional_4_Template, 9, 16, "div", 3);
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.isOpen && ctx.bannerMounted ? 4 : -1);
      }
    },
    dependencies: [NgStyle, NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WatermarkOverlayComponent, [{
    type: Component,
    args: [{
      selector: "div[kendoWatermarkOverlay], kendo-watermark-overlay",
      template: `
        <ng-template #buttonTemplate>
            <button
                [ngStyle]="{
                    backgroundColor: isCloseHovered ? '#3d3d3d14' : 'transparent',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    display: 'flex',
                    padding: '4px',
                    position: isMobile ? 'absolute' : 'static',
                    top: isMobile ? '12px' : 'auto',
                    right: isMobile ? '12px' : 'auto'
                }"
                title="Close"
                (click)="closeBanner()"
                (mouseenter)="isCloseHovered = true"
                (mouseleave)="isCloseHovered = false"
            >
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                    <path
                        d="M11.9309 3.1838C12.1754 2.93933 12.5712 2.93937 12.8157 3.1838C13.0601 3.4283 13.0601 3.82407 12.8157 4.06857L8.885 7.99923L12.8166 11.9309C13.0611 12.1754 13.0611 12.5721 12.8166 12.8166C12.5721 13.0611 12.1754 13.0611 11.9309 12.8166L7.99925 8.88497L4.06859 12.8166C3.8241 13.0611 3.42732 13.0611 3.18285 12.8166C2.93862 12.5721 2.93851 12.1753 3.18285 11.9309L7.11449 7.99923L3.18382 4.06857C2.93947 3.82413 2.93955 3.42829 3.18382 3.1838C3.42831 2.9393 3.82508 2.9393 4.06957 3.1838L7.99925 7.11349L11.9309 3.1838Z"
                        fill="#212529"
                    />
                </svg>
            </button>
        </ng-template>
        <ng-template #ctaTemplate>
            <a
                class="k-watermark-trial-button"
                [attr.title]="getContent(primaryMessage).buttonText"
                [attr.href]="getContent(primaryMessage).buttonLink"
                target="_blank"
                rel="noopener noreferrer"
                [ngStyle]="{
                    display: 'inline-flex',
                    border: 'none',
                    borderRadius: '4px',
                    backgroundColor: isCTAHovered ? '#b90138' : '#eb0249',
                    color: '#ffffff',
                    transition: 'background-color 0.2s ease-in-out',
                    cursor: 'pointer',
                    padding: '4px 8px',
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                    fontFamily: 'system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif'
                }"
                (mouseenter)="isCTAHovered = true"
                (mouseleave)="isCTAHovered = false"
                >{{ getContent(primaryMessage).buttonText }}</a>
        </ng-template>
        @if (isOpen && bannerMounted) {
        <div
            #banner
            [ngStyle]="{
                position: 'fixed',
                top: isNarrow ? '0' : '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: 'center',
                alignItems: isMobile ? 'flex-start' : 'center',
                borderRadius: isNarrow ? '0' : '6px',
                borderLeft: '6px solid #FFC000',
                borderTop: '1px solid #00000029',
                borderRight: '1px solid #00000029',
                borderBottom: '1px solid #00000029',
                boxSizing: 'border-box',
                fontSize: '14px',
                lineHeight: '20px',
                color: '#1E1E1E',
                zIndex: 2000,
                boxShadow: '0px 4px 5px 0px #0000000A, 0px 2px 4px 0px #00000008',
                maxWidth: isNarrow ? 'none' : '768px',
                width: '100%',
                backgroundColor: '#fff',
                padding: isMobile ? '12px' : '0'
            }"
        >
            @if (isMobile) {
            <ng-container *ngTemplateOutlet="buttonTemplate"></ng-container>
            } @if (getContent(primaryMessage).iconSrc) {
            <span
                [ngStyle]="{
                    display: 'flex',
                    alignSelf: isMobile ? 'flex-start' : 'center',
                    padding: isMobile ? '0 0 12px 0' : '9px 12px'
                }"
            ><img [src]="getContent(primaryMessage).iconSrc" alt="" /></span>
            }

            <div
                [ngStyle]="{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    padding: isMobile ? '0 0 12px 0' : '12px',
                    flex: isMobile ? 'none' : '1'
                }"
            >
                @for (msg of messages; track msg.message) {
                <div
                    [ngStyle]="{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        flex: isMobile ? 'none' : '1'
                    }"
                >
                    <span
                        [ngStyle]="{
                            fontFamily: 'system-ui, sans-serif',
                            fontWeight: 700,
                            fontSize: '14px',
                            lineHeight: '142%'
                        }"
                    >
                        {{ getContent(msg).title }}
                    </span>
                    <span
                        [ngStyle]="{
                            fontFamily: 'system-ui, sans-serif',
                            fontSize: '14px',
                            lineHeight: '20px'
                        }"
                        [innerHTML]="getContent(msg).description"
                    >
                    </span>
                </div>
                } @if (isMobile) {
                <ng-container *ngTemplateOutlet="ctaTemplate"></ng-container>
                }
            </div>

            @if (!isMobile) {
            <div
                [ngStyle]="{
                    display: 'flex',
                    alignItems: 'center',
                    padding: isMobile ? '0' : '9px 12px',
                    gap: '16px',
                    marginLeft: isMobile ? '0' : 'auto',
                    width: isMobile ? '100%' : 'auto'
                }"
            >
                <ng-container *ngTemplateOutlet="ctaTemplate"></ng-container>
                <ng-container *ngTemplateOutlet="buttonTemplate"></ng-container>
            </div>
            }
        </div>
        }
    `,
      standalone: true,
      imports: [NgStyle, NgTemplateOutlet]
    }]
  }], null, {
    licenseMessage: [{
      type: Input
    }],
    banner: [{
      type: ViewChild,
      args: ["banner"]
    }],
    watermarkStyle: [{
      type: HostBinding,
      args: ["style"]
    }]
  });
})();
var allowed = ["telerik.com", "progress.com", "stackblitz.io", "csb.app"];
function shouldShowValidationUI(isPackageValid) {
  const skip2 = allowed.some((hostname) => globalThis.document?.location.hostname.endsWith(hostname));
  return !skip2 && !isPackageValid;
}
function getLicenseMessage(meta) {
  const status = N(meta);
  return status?.message;
}
var PrefixTemplateDirective = class _PrefixTemplateDirective {
  templateRef;
  /**
   * Sets the `showSeparator` attribute of the `prefixTemplate`.
   *
   * @default false
   */
  set showSeparator(value) {
    this._showSeparator = value;
  }
  get showSeparator() {
    return this._showSeparator;
  }
  _showSeparator = false;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static \u0275fac = function PrefixTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrefixTemplateDirective)(\u0275\u0275directiveInject(TemplateRef, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PrefixTemplateDirective,
    selectors: [["", "kendoPrefixTemplate", ""]],
    inputs: {
      showSeparator: "showSeparator"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrefixTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoPrefixTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], {
    showSeparator: [{
      type: Input
    }]
  });
})();
var SuffixTemplateDirective = class _SuffixTemplateDirective {
  templateRef;
  /**
   * Sets the `showSeparator` attribute of the `suffixTemplate`.
   *
   * @default false
   */
  set showSeparator(value) {
    this._showSeparator = value;
  }
  get showSeparator() {
    return this._showSeparator;
  }
  _showSeparator = false;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static \u0275fac = function SuffixTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuffixTemplateDirective)(\u0275\u0275directiveInject(TemplateRef, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SuffixTemplateDirective,
    selectors: [["", "kendoSuffixTemplate", ""]],
    inputs: {
      showSeparator: "showSeparator"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuffixTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoSuffixTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], {
    showSeparator: [{
      type: Input
    }]
  });
})();
var SeparatorComponent = class _SeparatorComponent {
  /**
   * Specifies the orientation of the separator. Applicable for the adornments of the [`TextAreaComponent`](https://www.telerik.com/kendo-angular-ui/components/inputs/api/textareacomponent).
   *
   * @default 'vertical'
   */
  orientation = "vertical";
  /**
   * @hidden
   */
  get vertical() {
    return this.orientation === "vertical";
  }
  /**
   * @hidden
   */
  get horizontal() {
    return this.orientation === "horizontal";
  }
  /**
   * @hidden
   */
  hostClass = true;
  static \u0275fac = function SeparatorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SeparatorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SeparatorComponent,
    selectors: [["kendo-separator"]],
    hostVars: 6,
    hostBindings: function SeparatorComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("k-input-separator-vertical", ctx.vertical)("k-input-separator-horizontal", ctx.horizontal)("k-input-separator", ctx.hostClass);
      }
    },
    inputs: {
      orientation: "orientation"
    },
    decls: 0,
    vars: 0,
    template: function SeparatorComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeparatorComponent, [{
    type: Component,
    args: [{
      selector: "kendo-separator",
      template: ``,
      standalone: true
    }]
  }], null, {
    orientation: [{
      type: Input
    }],
    vertical: [{
      type: HostBinding,
      args: ["class.k-input-separator-vertical"]
    }],
    horizontal: [{
      type: HostBinding,
      args: ["class.k-input-separator-horizontal"]
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-input-separator"]
    }]
  });
})();
var PreventableEvent = class {
  prevented = false;
  /**
   * Prevents the default action for the event.
   * The source component suppresses the built-in behavior that follows the event.
   */
  preventDefault() {
    this.prevented = true;
  }
  /**
   * Returns `true` if you or any subscriber prevented the default action.
   *
   * @returns `true` if the default action was prevented, otherwise, `false`.
   */
  isDefaultPrevented() {
    return this.prevented;
  }
};
var canCreateElement = () => isDocumentAvailable() && document.createElement;
var propName = "--kendo-scrollbar-width";
var cachedScrollbarWidth = null;
var cachedPixelRatio;
var cachedRtlScrollLeft = null;
var scrollbarWidth = () => {
  if (cachedScrollbarWidth === null && canCreateElement()) {
    cachedPixelRatio = window.devicePixelRatio || 1;
    const outer = document.createElement("div");
    const inner = document.createElement("div");
    outer.style.overflow = "scroll";
    outer.style.overflowX = "hidden";
    outer.style.zoom = "1";
    outer.style.clear = "both";
    outer.style.display = "block";
    outer.style.width = "100px";
    outer.style.visibility = "hidden";
    inner.style.width = "100%";
    inner.style.display = "block";
    outer.appendChild(inner);
    document.body.appendChild(outer);
    cachedScrollbarWidth = outer.getBoundingClientRect().width - inner.getBoundingClientRect().width;
    document.body.removeChild(outer);
  }
  return cachedScrollbarWidth;
};
var rtlScrollLeft = () => {
  if (cachedRtlScrollLeft === null && canCreateElement()) {
    const outer = document.createElement("div");
    outer.style.direction = "rtl";
    outer.style.display = "block";
    outer.style.clear = "both";
    outer.style.width = "100px";
    outer.style.visibility = "hidden";
    outer.style.position = "absolute";
    outer.style.left = "-10000px";
    outer.style.overflow = "scroll";
    outer.style.zoom = "1";
    const inner = document.createElement("div");
    inner.style.width = "200px";
    inner.style.height = "1px";
    outer.append(inner);
    document.body.appendChild(outer);
    const initial = outer.scrollLeft;
    outer.scrollLeft = -1;
    cachedRtlScrollLeft = outer.scrollLeft < 0 ? outer.scrollLeft : initial;
    document.body.removeChild(outer);
  }
  return cachedRtlScrollLeft;
};
var ScrollbarService = class _ScrollbarService {
  changes = new EventEmitter();
  subscription;
  constructor(ngZone) {
    if (typeof window !== "undefined" && isDocumentAvailable()) {
      document.body.style.setProperty(propName, `${scrollbarWidth()}px`);
      ngZone.runOutsideAngular(() => {
        this.subscription = fromEvent(window, "resize").pipe(auditTime(100)).subscribe(() => {
          if (cachedPixelRatio !== window.devicePixelRatio) {
            cachedScrollbarWidth = null;
            document.body.style.setProperty(propName, `${scrollbarWidth()}px`);
            this.changes.emit();
          }
        });
      });
    }
  }
  get scrollbarWidth() {
    return scrollbarWidth();
  }
  get rtlScrollLeft() {
    return rtlScrollLeft();
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.subscription = null;
  }
  static \u0275fac = function ScrollbarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollbarService)(\u0275\u0275inject(NgZone));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ScrollbarService,
    factory: _ScrollbarService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NgZone
  }], null);
})();
var MultiTabStop = class {
  escape;
};
var tags = ["kendo-splitbutton", "kendo-combobox", "kendo-multicolumncombobox", "kendo-datepicker", "kendo-timepicker", "kendo-datetimepicker"];
var ToggleButtonTabStopDirective = class _ToggleButtonTabStopDirective {
  hostEl;
  renderer;
  zone;
  hostComponent;
  /**
   * @hidden
   *
   * Allows setting the interactive state of the toggle button.
   *
   * @default true
   */
  active;
  /**
   * Defines the value of the `aria-label` attribute of the toggle button when active.
   *
   * @default "toggle popup"
   */
  toggleButtonAriaLabel = "toggle popup";
  button;
  sub = new Subscription();
  focusButton;
  isSplitButton;
  observer;
  /**
   * @hidden
   */
  constructor(hostEl, renderer, zone, hostComponent) {
    this.hostEl = hostEl;
    this.renderer = renderer;
    this.zone = zone;
    this.hostComponent = hostComponent;
    if (isDevMode() && tags.indexOf(hostEl.nativeElement.tagName.toLowerCase()) === -1) {
      console.warn(`The kendoToggleButtonTabStop directive can be applied to the following components only: ${tags}`);
    }
  }
  ngOnInit() {
    this.active = true;
  }
  ngAfterViewInit() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.isSplitButton = this.hostEl.nativeElement.classList.contains("k-split-button");
    if (this.active) {
      this.activateButton();
    }
    if (!(this.hostComponent?.escape instanceof EventEmitter)) {
      return;
    }
    this.sub = this.hostComponent?.escape.subscribe(() => {
      this.returnFocusToToggleButton();
    });
    this.sub.add(this.hostComponent.close.subscribe((e) => {
      if (!e.isDefaultPrevented() && this.focusButton) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => this.focusButton = false);
        });
        const mainFocusableElement = this.hostEl.nativeElement.querySelector(".k-split-button > .k-button:first-child, .k-input-inner");
        const optionsListContainer = document.getElementById(`${mainFocusableElement.getAttribute("aria-controls")}`);
        const inList = !!optionsListContainer && optionsListContainer.contains(document.activeElement);
        const inWrapper = this.hostEl.nativeElement.contains(document.activeElement);
        const focusInComponent = inList || inWrapper;
        if (focusInComponent) {
          this.returnFocusToToggleButton();
        }
      }
    }));
  }
  ngOnChanges(changes) {
    if (!isDocumentAvailable()) {
      return;
    }
    if (changes["active"]) {
      if (changes["active"].currentValue) {
        this.activateButton();
      } else {
        this.deactivateButton();
      }
    }
    if (changes["toggleButtonAriaLabel"]) {
      if (this.button) {
        this.renderer.setAttribute(this.button, "aria-label", changes["toggleButtonAriaLabel"].currentValue);
      }
    }
  }
  ngOnDestroy() {
    this.removeListeners();
    this.sub.unsubscribe();
  }
  activateButton() {
    const el = this.hostEl.nativeElement;
    const tabindex2 = el.querySelector('button:not([tabindex^="-"]), input:not([tabindex^="-"])')?.getAttribute("tabindex");
    this.button = el.querySelector(".k-input-button, .k-split-button-arrow");
    if (this.button) {
      this.renderer.removeAttribute(this.button, "role");
      this.renderer.setAttribute(this.button, "tabindex", tabindex2);
      this.renderer.setAttribute(this.button, "aria-label", this.toggleButtonAriaLabel);
    }
    if (!this.observer) {
      this.initializeObserver(el);
    }
    this.removeListeners();
    this.addListeners();
  }
  deactivateButton() {
    if (this.button) {
      this.renderer.setAttribute(this.button, "role", "presentation");
      this.renderer.setAttribute(this.button, "tabindex", "-1");
      this.renderer.removeAttribute(this.button, "aria-label");
    }
    this.removeListeners();
    if (this.observer) {
      this.observer.disconnect();
    }
    this.observer = null;
  }
  onFocus = () => {
    this.renderer.setStyle(this.button, "box-shadow", "inset 0 0 0 1px rgba(0, 0, 0, 0.08)");
  };
  onBlur = () => {
    this.renderer.removeStyle(this.button, "box-shadow");
  };
  onClick = (e) => {
    const code = normalizeKeys(e);
    const splitButtonToggleEnter = e instanceof KeyboardEvent && code === Keys.Enter;
    const isClick = e instanceof PointerEvent;
    if (splitButtonToggleEnter || isClick) {
      this.focusButton = true;
    }
  };
  onKeyDown = (e) => {
    const code = normalizeKeys(e);
    if (code === Keys.ArrowDown && e.altKey) {
      e.stopImmediatePropagation();
      this.focusButton = true;
      this.button.click();
    }
  };
  addListeners() {
    if (this.button) {
      this.zone.runOutsideAngular(() => this.button.addEventListener("focus", this.onFocus));
      this.zone.runOutsideAngular(() => this.button.addEventListener("blur", this.onBlur));
      this.zone.runOutsideAngular(() => this.button.addEventListener("click", this.onClick));
      if (this.isSplitButton) {
        this.zone.runOutsideAngular(() => this.button.addEventListener("keyup", this.onClick));
      }
      this.zone.runOutsideAngular(() => this.button.addEventListener("keydown", this.onKeyDown, true));
    }
  }
  removeListeners() {
    if (this.button) {
      this.zone.runOutsideAngular(() => this.button.removeEventListener("focus", this.onFocus));
      this.zone.runOutsideAngular(() => this.button.removeEventListener("blur", this.onBlur));
      this.zone.runOutsideAngular(() => this.button.removeEventListener("click", this.onClick));
      if (this.isSplitButton) {
        this.zone.runOutsideAngular(() => this.button.removeEventListener("keyup", this.onClick));
      }
      this.zone.runOutsideAngular(() => this.button.removeEventListener("keydown", this.onKeyDown));
    }
  }
  focusToggleButton() {
    if (this.focusButton) {
      this.zone.runOutsideAngular(() => this.button.focus());
    }
    this.focusButton = false;
  }
  returnFocusToToggleButton() {
    if (this.isSplitButton) {
      this.zone.onStable.pipe(take(1)).subscribe(() => {
        this.focusToggleButton();
      });
    } else {
      this.focusToggleButton();
    }
  }
  // Keeps the `aria-controls` and `aria-expanded` attributes of the main focusable element of the component
  // and the toggle button element in sync.
  initializeObserver(element) {
    const mainFocusableElement = element.querySelector(".k-split-button > .k-button:first-child, .k-input-inner");
    const initialExpanded = mainFocusableElement.getAttribute("aria-expanded");
    const initialControls = mainFocusableElement.getAttribute("aria-controls");
    if (this.button) {
      this.renderer.setAttribute(this.button, "aria-expanded", initialExpanded);
      if (initialControls) {
        this.renderer.setAttribute(this.button, "aria-controls", initialControls);
      }
    }
    this.zone.runOutsideAngular(() => {
      const mutationConfig = {
        attributes: true
      };
      const callback = (mutationList) => {
        for (const mutation of mutationList) {
          if (mutation.attributeName === "aria-expanded") {
            this.renderer.setAttribute(this.button, "aria-expanded", mainFocusableElement.getAttribute("aria-expanded"));
          } else if (mutation.attributeName === "aria-controls") {
            const controlsRef = mainFocusableElement.getAttribute("aria-controls");
            if (!this.isSplitButton && controlsRef) {
              this.renderer.setAttribute(this.button, "aria-controls", controlsRef);
            } else {
              this.renderer.removeAttribute(this.button, "aria-controls");
            }
          }
        }
      };
      this.observer = new MutationObserver(callback);
      this.observer.observe(mainFocusableElement, mutationConfig);
    });
  }
  static \u0275fac = function ToggleButtonTabStopDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToggleButtonTabStopDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(MultiTabStop));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ToggleButtonTabStopDirective,
    selectors: [["", "kendoToggleButtonTabStop", ""]],
    inputs: {
      active: [0, "kendoToggleButtonTabStop", "active"],
      toggleButtonAriaLabel: "toggleButtonAriaLabel"
    },
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButtonTabStopDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoToggleButtonTabStop]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: MultiTabStop
  }], {
    active: [{
      type: Input,
      args: ["kendoToggleButtonTabStop"]
    }],
    toggleButtonAriaLabel: [{
      type: Input
    }]
  });
})();
var TemplateContextDirective = class _TemplateContextDirective {
  set templateContext(context) {
    if (this.insertedViewRef) {
      this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.insertedViewRef));
      this.insertedViewRef = void 0;
    }
    if (context.templateRef) {
      this.insertedViewRef = this.viewContainerRef.createEmbeddedView(context.templateRef, context);
    }
  }
  insertedViewRef;
  viewContainerRef;
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }
  static \u0275fac = function TemplateContextDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TemplateContextDirective)(\u0275\u0275directiveInject(ViewContainerRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TemplateContextDirective,
    selectors: [["", "templateContext", ""]],
    inputs: {
      templateContext: "templateContext"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplateContextDirective, [{
    type: Directive,
    args: [{
      selector: "[templateContext]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }], {
    templateContext: [{
      type: Input
    }]
  });
})();
var KENDO_ADORNMENTS = [PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent];
var KENDO_COMMON = [...KENDO_ADORNMENTS, DraggableDirective, EventsOutsideAngularDirective, ResizeSensorComponent, ToggleButtonTabStopDirective, WatermarkOverlayComponent];
var KENDO_RESIZESENSOR = [ResizeSensorComponent];
var KENDO_TOGGLEBUTTONTABSTOP = [ToggleButtonTabStopDirective];
var replaceMessagePlaceholder = (message, name, value) => (message ?? "").replace(new RegExp(`{\\s*${name}\\s*}`, "g"), value);

// node_modules/@progress/kendo-angular-icons/fesm2022/progress-kendo-angular-icons.mjs
function SVGIconComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "svg", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("pointer-events", "none");
    \u0275\u0275domProperty("innerHTML", ctx_r0.content, \u0275\u0275sanitizeHtml);
    \u0275\u0275attribute("viewBox", ctx_r0.icon.viewBox);
  }
}
function IconWrapperComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-svgicon", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.innerCssClass)("icon", ctx_r0.svgIcon)("size", ctx_r0.size || (ctx_r0.iconSettings == null ? null : ctx_r0.iconSettings.size))("themeColor", ctx_r0.iconSettings == null ? null : ctx_r0.iconSettings.themeColor)("flip", ctx_r0.iconSettings == null ? null : ctx_r0.iconSettings.flip);
  }
}
function IconWrapperComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-icon", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.innerCssClass)("name", ctx_r0.name)("size", ctx_r0.size || (ctx_r0.iconSettings == null ? null : ctx_r0.iconSettings.size))("themeColor", ctx_r0.iconSettings == null ? null : ctx_r0.iconSettings.themeColor)("flip", ctx_r0.iconSettings == null ? null : ctx_r0.iconSettings.flip);
  }
}
function IconWrapperComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.customClasses);
  }
}
function IconWrapperComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, IconWrapperComponent_Conditional_1_Conditional_0_Template, 1, 5, "kendo-icon", 1)(1, IconWrapperComponent_Conditional_1_Conditional_1_Template, 1, 1, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r0.customFontIconClass ? 0 : 1);
  }
}
var packageMetadata = {
  name: "@progress/kendo-angular-icons",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1780593623,
  version: "24.1.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var sizeClasses = {
  "default": "k-icon",
  "xsmall": "k-icon-xs",
  "small": "k-icon-sm",
  "medium": "k-icon-md",
  "large": "k-icon-lg",
  "xlarge": "k-icon-xl",
  "xxlarge": "k-icon-xxl",
  "xxxlarge": "k-icon-xxxl"
};
var IconBaseDirective = class _IconBaseDirective {
  element;
  renderer;
  get horizontalFlip() {
    return this.flip === "horizontal" || this.flip === "both";
  }
  get verticalFlip() {
    return this.flip === "vertical" || this.flip === "both";
  }
  /**
   * Flips the icon horizontally, vertically, or in both directions.
   */
  flip;
  /**
   * Sets the `IconThemeColor` for the icon. Use this property to apply a theme color.
   */
  set themeColor(themeColor) {
    const element = this.element.nativeElement;
    if (this._themeColor) {
      this.renderer.removeClass(element, `!k-color-${this._themeColor}`);
    }
    this._themeColor = themeColor;
    if (themeColor) {
      this.renderer.addClass(element, `!k-color-${themeColor}`);
    }
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * Sets the `IconSize` for the icon. Use this property to change the icon size.
   */
  set size(size) {
    const currentClass = sizeClasses[this.size];
    const newClass = sizeClasses[size];
    const element = this.element.nativeElement;
    this.renderer.removeClass(element, currentClass);
    if (size && size !== "default") {
      this.renderer.addClass(element, newClass);
    }
    this._size = size;
  }
  get size() {
    return this._size;
  }
  _themeColor;
  _size;
  constructor(element, renderer) {
    this.element = element;
    this.renderer = renderer;
    A(packageMetadata);
  }
  static \u0275fac = function IconBaseDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IconBaseDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _IconBaseDirective,
    selectors: [["", "kendoIconBase", ""]],
    hostVars: 4,
    hostBindings: function IconBaseDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("k-flip-h", ctx.horizontalFlip)("k-flip-v", ctx.verticalFlip);
      }
    },
    inputs: {
      flip: "flip",
      themeColor: "themeColor",
      size: "size"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconBaseDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoIconBase]"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    horizontalFlip: [{
      type: HostBinding,
      args: ["class.k-flip-h"]
    }],
    verticalFlip: [{
      type: HostBinding,
      args: ["class.k-flip-v"]
    }],
    flip: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var IconComponent = class _IconComponent extends IconBaseDirective {
  element;
  renderer;
  hostClass = true;
  hostAriaHidden = true;
  /**
   * Sets the `Icon` to render. Supports all [Kendo UI Icons](https://www.telerik.com/kendo-angular-ui/components/icons/icon/icon-list).
   */
  set name(name) {
    if (isDocumentAvailable()) {
      const newName = name !== this._name;
      if (newName) {
        const element = this.element.nativeElement;
        this.renderer.removeClass(element, `k-i-${this.name}`);
        this.renderer.addClass(element, `k-i-${name}`);
      }
    }
    this._name = name;
  }
  get name() {
    return this._name;
  }
  _name;
  constructor(element, renderer) {
    super(element, renderer);
    this.element = element;
    this.renderer = renderer;
  }
  static \u0275fac = function IconComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IconComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _IconComponent,
    selectors: [["kendo-icon"]],
    hostVars: 5,
    hostBindings: function IconComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-hidden", ctx.hostAriaHidden);
        \u0275\u0275classProp("k-icon", ctx.hostClass)("k-font-icon", ctx.hostClass);
      }
    },
    inputs: {
      name: "name"
    },
    exportAs: ["kendoIcon"],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 0,
    vars: 0,
    template: function IconComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoIcon",
      selector: "kendo-icon",
      template: "",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-icon"]
    }, {
      type: HostBinding,
      args: ["class.k-font-icon"]
    }],
    hostAriaHidden: [{
      type: HostBinding,
      args: ["attr.aria-hidden"]
    }],
    name: [{
      type: Input
    }]
  });
})();
var areSame = (i1, i2) => i1?.name === i2?.name && i1?.content === i2?.content && i1?.viewBox === i2?.viewBox && i1?.variants === i2?.variants;
var SVGIconComponent = class _SVGIconComponent extends IconBaseDirective {
  domSanitizer;
  element;
  renderer;
  hostClass = true;
  hostAriaHidden = true;
  /**
   * Sets the `SVGIcon` to render. Supports all [Kendo UI SVG Icons](https://www.telerik.com/kendo-angular-ui/components/icons/svgicon/svgicon-list).
   */
  set icon(icon) {
    const element = this.element.nativeElement;
    const hasDocument = isDocumentAvailable();
    const newName = icon?.name && icon.name !== this._icon?.name;
    if (this._icon && this._icon.name && newName && hasDocument) {
      this.renderer.removeClass(element, `k-svg-i-${this._icon.name}`);
    }
    if (!areSame(icon, this._icon)) {
      this._icon = icon;
    }
    if (hasDocument && newName) {
      this.renderer.addClass(element, `k-svg-i-${this._icon.name}`);
    }
  }
  get icon() {
    return this._icon;
  }
  /**
   * Sets the style variant of the icon.
   *
   * > Requires `@progress/kendo-svg-icons` v5 or later for the `variants` property to be available on icons.
   */
  set variant(variant) {
    this._variant = variant;
  }
  get variant() {
    return this._variant;
  }
  get content() {
    const variantContent = this.variant && this.icon?.variants?.[this.variant];
    const svgContent = variantContent || this.icon.content;
    return this.domSanitizer.bypassSecurityTrustHtml(svgContent);
  }
  get visible() {
    return this.icon && isDocumentAvailable();
  }
  _icon;
  _variant;
  constructor(domSanitizer, element, renderer) {
    super(element, renderer);
    this.domSanitizer = domSanitizer;
    this.element = element;
    this.renderer = renderer;
  }
  ngOnInit() {
    this.verifyIconProperty();
  }
  verifyIconProperty() {
    if (!isDevMode()) {
      return;
    }
    if (!this._icon) {
      throw new Error(`
                Invalid configuration.
                The input [icon] is required for the Kendo UI SVG Icon component for Angular.
                See https://www.telerik.com/kendo-angular-ui/components/icons/svg-icon
            `);
    }
  }
  static \u0275fac = function SVGIconComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SVGIconComponent)(\u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SVGIconComponent,
    selectors: [["kendo-svg-icon"], ["kendo-svgicon"]],
    hostVars: 5,
    hostBindings: function SVGIconComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-hidden", ctx.hostAriaHidden);
        \u0275\u0275classProp("k-svg-icon", ctx.hostClass)("k-icon", ctx.hostClass);
      }
    },
    inputs: {
      icon: "icon",
      variant: "variant"
    },
    exportAs: ["kendoSVGIcon"],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "aria-hidden", "true", 3, "pointerEvents", "innerHTML"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "aria-hidden", "true", 3, "innerHTML"]],
    template: function SVGIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, SVGIconComponent_Conditional_0_Template, 1, 4, ":svg:svg", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.visible ? 0 : -1);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SVGIconComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoSVGIcon",
      selector: "kendo-svg-icon, kendo-svgicon",
      template: `
        @if (visible) {
          <svg [style.pointerEvents]="'none'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            [attr.viewBox]="icon.viewBox" [innerHTML]="content" aria-hidden="true">
          </svg>
        }`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: []
    }]
  }], () => [{
    type: DomSanitizer
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-svg-icon"]
    }, {
      type: HostBinding,
      args: ["class.k-icon"]
    }],
    hostAriaHidden: [{
      type: HostBinding,
      args: ["attr.aria-hidden"]
    }],
    icon: [{
      type: Input
    }],
    variant: [{
      type: Input
    }]
  });
})();
var isPresent2 = (value) => value !== null && value !== void 0;
var IconSettingsService = class _IconSettingsService {
  /**
   * @hidden
   */
  changes = new Subject();
  /**
   * Notifies subscribers about changes in the icon settings.
   *
   * @param iconSettings - (Optional) Sets a new value for the [icon settings token](https://www.telerik.com/kendo-angular-ui/components/icons/api/icon_settings).
   * @example
   * ```typescript
   * iconSettingsService.notify({ size: 'large' });
   * ```
   */
  notify(iconSettings) {
    this.changes.next(iconSettings);
  }
  /**
   * Returns the [`SVGIcon`](https://www.telerik.com/kendo-angular-ui/components/icons/api/svgicon) object for the provided key.
   * Override in a custom service to provide custom SVG icons.
   *
   * @hidden
   */
  getSvgIcon(_name) {
    return null;
  }
  /**
   * Returns the list of classes to be rendered on the host `SPAN` element of custom font icons.
   * Override in a custom service to provide classes for custom font icons.
   *
   * @hidden
   */
  getCustomFontIconClass(_key) {
    return null;
  }
  static \u0275fac = function IconSettingsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IconSettingsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _IconSettingsService,
    factory: _IconSettingsService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconSettingsService, [{
    type: Injectable
  }], null, null);
})();
var ICON_SETTINGS = new InjectionToken("Kendo UI Icon-Settings token");
var DEFAULT_ICON_SETTINGS = {
  type: "svg"
};
var IconsService = class _IconsService {
  _iconSettings;
  iconSettingsService;
  /**
   * Notifies subscribers of the initial icon settings and on each call to `notify`.
   * @hidden
   */
  changes = new BehaviorSubject(this.iconSettings || DEFAULT_ICON_SETTINGS);
  subs = new Subscription();
  constructor(_iconSettings, iconSettingsService) {
    this._iconSettings = _iconSettings;
    this.iconSettingsService = iconSettingsService;
    if (iconSettingsService) {
      this.subs.add(iconSettingsService.changes.pipe(map((iconSettings) => isPresent2(iconSettings) ? iconSettings : this._iconSettings), tap((iconSettings) => this._iconSettings = iconSettings)).subscribe((iconSettings) => this.changes.next(iconSettings)));
    }
    if (isPresent2(this.iconSettings) && !areObjectsEqual(this.iconSettings, DEFAULT_ICON_SETTINGS)) {
      this.changes.next(this.iconSettings);
    }
  }
  /**
   * @hidden
   */
  get iconSettings() {
    return this._iconSettings;
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  /**
   * Returns the [`SVGIcon`](https://www.telerik.com/kendo-angular-ui/components/icons/api/svgicon) object for the provided key.
   * Override in a custom service to provide custom SVG icons.
   * @hidden
   */
  getSvgIcon(name) {
    const customIcon = this.iconSettingsService && this.iconSettingsService.getSvgIcon(name);
    return customIcon;
  }
  /**
   * Returns the list of classes to be rendered on the host `SPAN` element of custom font icons.
   * Override in a custom service to provide classes for custom font icons.
   * @hidden
   */
  getCustomFontIconClass(key) {
    const customClass = this.iconSettingsService && this.iconSettingsService.getCustomFontIconClass(key);
    return customClass;
  }
  static \u0275fac = function IconsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IconsService)(\u0275\u0275inject(ICON_SETTINGS, 8), \u0275\u0275inject(IconSettingsService, 8));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _IconsService,
    factory: _IconsService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ICON_SETTINGS]
    }]
  }, {
    type: IconSettingsService,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var IconWrapperComponent = class _IconWrapperComponent {
  iconsService;
  element;
  hostClass = true;
  /**
   * Sets the name for an existing font icon in a Kendo UI theme to render.
   * Supports all [Kendo UI Icons](https://www.telerik.com/kendo-angular-ui/components/styling/icons#icons-list).
   */
  name;
  /**
   * Sets the [SVGIcon](https://www.telerik.com/kendo-angular-ui/components/icons/api/svgicon) to render.
   */
  svgIcon;
  /**
   * Sets an additional class on the internal Icon component.
   */
  innerCssClass = "";
  /**
   * Sets a custom font icon class using the API of the consuming component.
   */
  customFontClass = "";
  /**
   * Sets the `IconSize` for the icon.
   */
  size;
  get customClasses() {
    const classes = [this.customFontClass, this.innerCssClass, this.customFontIconClass].filter((cl) => !!cl).join(" ");
    return classes;
  }
  iconSettings;
  get hasSvgIcon() {
    this.svgIcon = this.iconsService.getSvgIcon(this.name) || this.svgIcon;
    if (this.svgIcon) {
      return true;
    }
    if (isDevMode()) {
      console.groupCollapsed(`Kendo UI for Angular: Icon type is set to 'svg', but only font icon name is provided. The "${this.name}" font icon will be rendered instead.`);
      console.warn(`
Starting from v7.0.0 (October, 2023) of the Kendo Themes, the font icons will be removed from the theme.
* To render an SVG icon, update the component configuration by setting the "svgIcon" input to the respective icon definition.
* To continue to use font icons, install the "@progress/kendo-font-icons" package and import "@progress/kendo-font-icons/dist/index.css".

Please note, that font icons are not compatible with a strict Content Security Policy and require the use of the "unsafe-inline" override.

For further details, check the following documentation articles:
https://www.telerik.com/kendo-angular-ui/components/icons/icon-settings
https://www.telerik.com/kendo-angular-ui/components/styling/icons/
https://www.telerik.com/kendo-angular-ui/components/styling/svg-icons/
https://www.telerik.com/design-system/docs/foundation/iconography/font-icons/
https://www.telerik.com/design-system/docs/foundation/iconography/icon-list/
            `);
      console.groupEnd();
    }
    return false;
  }
  get customFontIconClass() {
    return this.iconsService.getCustomFontIconClass(this.name) || this.customFontClass;
  }
  subs = new Subscription();
  constructor(iconsService, element) {
    this.iconsService = iconsService;
    this.element = element;
    this.subs = iconsService.changes.subscribe((iconSettings) => {
      this.iconSettings = iconSettings;
    });
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  static \u0275fac = function IconWrapperComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IconWrapperComponent)(\u0275\u0275directiveInject(IconsService), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _IconWrapperComponent,
    selectors: [["kendo-icon-wrapper"]],
    hostVars: 2,
    hostBindings: function IconWrapperComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("k-icon-wrapper-host", ctx.hostClass);
      }
    },
    inputs: {
      name: "name",
      svgIcon: "svgIcon",
      innerCssClass: "innerCssClass",
      customFontClass: "customFontClass",
      size: "size"
    },
    exportAs: ["kendoIconWrapper"],
    decls: 2,
    vars: 1,
    consts: [[3, "ngClass", "icon", "size", "themeColor", "flip"], [3, "ngClass", "name", "size", "themeColor", "flip"], [3, "ngClass"]],
    template: function IconWrapperComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, IconWrapperComponent_Conditional_0_Template, 1, 5, "kendo-svgicon", 0)(1, IconWrapperComponent_Conditional_1_Template, 2, 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional((ctx.iconSettings == null ? null : ctx.iconSettings.type) === "svg" && ctx.hasSvgIcon ? 0 : 1);
      }
    },
    dependencies: [NgClass, IconComponent, SVGIconComponent],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconWrapperComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoIconWrapper",
      selector: "kendo-icon-wrapper",
      template: `
        @if (iconSettings?.type === 'svg' && hasSvgIcon) {
          <kendo-svgicon
            [ngClass]="innerCssClass"
            [icon]="svgIcon"
            [size]="size || iconSettings?.size"
            [themeColor]="iconSettings?.themeColor"
          [flip]="iconSettings?.flip"></kendo-svgicon>
        } @else {
          @if (!customFontIconClass) {
            <kendo-icon
              [ngClass]="innerCssClass"
              [name]="name"
              [size]="size || iconSettings?.size"
              [themeColor]="iconSettings?.themeColor"
            [flip]="iconSettings?.flip"></kendo-icon>
          } @else {
            <span [ngClass]="customClasses"></span>
          }
        }
        `,
      standalone: true,
      imports: [NgClass, IconComponent, SVGIconComponent]
    }]
  }], () => [{
    type: IconsService
  }, {
    type: ElementRef
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-icon-wrapper-host"]
    }],
    name: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    innerCssClass: [{
      type: Input
    }],
    customFontClass: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var IconModule = class _IconModule {
  static \u0275fac = function IconModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IconModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _IconModule,
    imports: [IconComponent],
    exports: [IconComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconModule, [{
    type: NgModule,
    args: [{
      exports: [IconComponent],
      imports: [IconComponent]
    }]
  }], null, null);
})();
var SVGIconModule = class _SVGIconModule {
  static \u0275fac = function SVGIconModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SVGIconModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SVGIconModule,
    imports: [SVGIconComponent],
    exports: [SVGIconComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SVGIconModule, [{
    type: NgModule,
    args: [{
      exports: [SVGIconComponent],
      imports: [SVGIconComponent]
    }]
  }], null, null);
})();
var KENDO_ICON = [IconComponent];
var KENDO_SVGICON = [SVGIconComponent];
var KENDO_ICONS = [...KENDO_ICON, ...KENDO_SVGICON];
var IconsModule = class _IconsModule {
  static \u0275fac = function IconsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IconsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _IconsModule,
    imports: [IconComponent, SVGIconComponent],
    exports: [IconComponent, SVGIconComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [IconsService]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconsModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_ICONS],
      exports: [...KENDO_ICONS],
      providers: [IconsService]
    }]
  }], null, null);
})();

// node_modules/@progress/kendo-svg-icons/dist/index.es.js
var globeIcon = {
  name: "globe",
  content: '<path d="M12 1.673A10.327 10.327 0 1 0 22.327 12 10.34 10.34 0 0 0 12 1.673m8.258 6.48H16.17a13.4 13.4 0 0 0-2.605-5.13 9.14 9.14 0 0 1 6.693 5.13M21.112 12a9.1 9.1 0 0 1-.388 2.633h-4.289a15.7 15.7 0 0 0 0-5.266h4.289A9.1 9.1 0 0 1 21.112 12m-9.113 8.893a11.2 11.2 0 0 1-1.539-1.969 12.6 12.6 0 0 1-1.363-3.076h5.802a12.6 12.6 0 0 1-1.363 3.076 11.2 11.2 0 0 1-1.538 1.969zm-3.195-6.26a14 14 0 0 1 0-5.266h6.389a14 14 0 0 1 0 5.265zM2.886 12a9.1 9.1 0 0 1 .388-2.633h4.288a15.7 15.7 0 0 0 0 5.266H3.274A9.1 9.1 0 0 1 2.886 12m9.113-8.893a11.2 11.2 0 0 1 1.538 1.969A12.6 12.6 0 0 1 14.9 8.152H9.098a12.6 12.6 0 0 1 1.364-3.076A11.2 11.2 0 0 1 12 3.107zm-1.565-.085a13.4 13.4 0 0 0-2.605 5.13H3.74a9.14 9.14 0 0 1 6.694-5.13M3.74 15.847h4.089a13.4 13.4 0 0 0 2.605 5.13 9.14 9.14 0 0 1-6.694-5.13m9.821 5.13a13.4 13.4 0 0 0 2.609-5.13h4.088a9.14 9.14 0 0 1-6.693 5.13z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M12 1.47A10.53 10.53 0 1 0 22.53 12 10.54 10.54 0 0 0 12 1.47m7.934 6.48h-3.609a13.7 13.7 0 0 0-2.259-4.618 8.94 8.94 0 0 1 5.868 4.618M20.91 12a8.9 8.9 0 0 1-.337 2.43h-3.899a16 16 0 0 0 0-4.86h3.899A8.9 8.9 0 0 1 20.91 12M12 3.394a11.64 11.64 0 0 1 2.633 4.556H9.368a11.64 11.64 0 0 1 2.633-4.556zM9.367 16.05h5.265a11.64 11.64 0 0 1-2.633 4.556 11.64 11.64 0 0 1-2.633-4.556zm-.395-1.62a14.3 14.3 0 0 1 0-4.86h6.063a14.3 14.3 0 0 1 0 4.86zm5.098 6.236a13.7 13.7 0 0 0 2.258-4.617h3.611a8.94 8.94 0 0 1-5.873 4.617z"/>',
    "outline": '<path d="M12 1.673A10.327 10.327 0 1 0 22.327 12 10.34 10.34 0 0 0 12 1.673m8.258 6.48H16.17a13.4 13.4 0 0 0-2.605-5.13 9.14 9.14 0 0 1 6.693 5.13M21.112 12a9.1 9.1 0 0 1-.388 2.633h-4.289a15.7 15.7 0 0 0 0-5.266h4.289A9.1 9.1 0 0 1 21.112 12m-9.113 8.893a11.2 11.2 0 0 1-1.539-1.969 12.6 12.6 0 0 1-1.363-3.076h5.802a12.6 12.6 0 0 1-1.363 3.076 11.2 11.2 0 0 1-1.538 1.969zm-3.195-6.26a14 14 0 0 1 0-5.266h6.389a14 14 0 0 1 0 5.265zM2.886 12a9.1 9.1 0 0 1 .388-2.633h4.288a15.7 15.7 0 0 0 0 5.266H3.274A9.1 9.1 0 0 1 2.886 12m9.113-8.893a11.2 11.2 0 0 1 1.538 1.969A12.6 12.6 0 0 1 14.9 8.152H9.098a12.6 12.6 0 0 1 1.364-3.076A11.2 11.2 0 0 1 12 3.107zm-1.565-.085a13.4 13.4 0 0 0-2.605 5.13H3.74a9.14 9.14 0 0 1 6.694-5.13M3.74 15.847h4.089a13.4 13.4 0 0 0 2.605 5.13 9.14 9.14 0 0 1-6.694-5.13m9.821 5.13a13.4 13.4 0 0 0 2.609-5.13h4.088a9.14 9.14 0 0 1-6.693 5.13z"/>',
    "duotone": '<path d="M21.72 12A9.72 9.72 0 1 1 12 2.28 9.72 9.72 0 0 1 21.72 12" opacity="0.2"/><path d="M12 1.47A10.53 10.53 0 1 0 22.53 12 10.54 10.54 0 0 0 12 1.47M20.91 12a8.9 8.9 0 0 1-.337 2.43h-3.899a16 16 0 0 0 0-4.86h3.899A8.9 8.9 0 0 1 20.91 12M9.367 16.05h5.265a11.64 11.64 0 0 1-2.633 4.556 11.64 11.64 0 0 1-2.633-4.556zm-.395-1.62a14.3 14.3 0 0 1 0-4.86h6.063a14.3 14.3 0 0 1 0 4.86zM3.09 12a8.9 8.9 0 0 1 .337-2.43h3.899a16 16 0 0 0 0 4.86H3.427A8.9 8.9 0 0 1 3.09 12m11.543-4.05H9.368a11.64 11.64 0 0 1 2.633-4.556 11.64 11.64 0 0 1 2.633 4.556zm5.298 0h-3.606a13.7 13.7 0 0 0-2.259-4.618 8.94 8.94 0 0 1 5.868 4.618zM9.934 3.332A13.7 13.7 0 0 0 7.675 7.95H4.064a8.94 8.94 0 0 1 5.868-4.618zM4.066 16.05h3.61a13.7 13.7 0 0 0 2.259 4.618 8.94 8.94 0 0 1-5.868-4.618zm10.002 4.618a13.7 13.7 0 0 0 2.258-4.618h3.611a8.94 8.94 0 0 1-5.868 4.618z"/>'
  },
  tags: ["world", "earth", "global", "planet", "circle", "round", "internationalization", "i18n", "languages", "country", "countries", "geography", "internet"]
};
var arrowDownIcon = {
  name: "arrow-down",
  content: '<path d="m19.72 14.05-7.29 7.29a.607.607 0 0 1-.86 0l-7.29-7.29a.607.607 0 0 1 .86-.86l6.253 6.252V3.09a.608.608 0 0 1 1.215 0v16.352l6.254-6.252a.607.607 0 0 1 .858.86"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="m19.864 14.194-7.29 7.29a.81.81 0 0 1-1.146 0l-7.29-7.29a.81.81 0 0 1 .573-1.384h6.48V3.09a.81.81 0 0 1 1.62 0v9.72h6.48a.81.81 0 0 1 .574 1.384z"/>',
    "outline": '<path d="m19.72 14.05-7.29 7.29a.607.607 0 0 1-.86 0l-7.29-7.29a.607.607 0 0 1 .86-.86l6.253 6.252V3.09a.608.608 0 0 1 1.215 0v16.352l6.254-6.252a.607.607 0 0 1 .858.86"/>',
    "duotone": '<path d="M19.29 13.62 12 20.91l-7.29-7.29z" opacity="0.2"/><path d="M20.039 13.31a.81.81 0 0 0-.749-.5h-6.48V3.09a.81.81 0 0 0-1.62 0v9.72H4.71a.81.81 0 0 0-.574 1.384l7.29 7.29a.81.81 0 0 0 1.146 0l7.29-7.29a.81.81 0 0 0 .176-.884zM12 19.765 6.665 14.43h10.669z"/>'
  },
  tags: ["directional", "pointer", "pointing", "arrowhead"]
};
var arrowRightIcon = {
  name: "arrow-right",
  content: '<path d="m21.34 12.43-7.29 7.29a.607.607 0 0 1-.86-.858l6.252-6.254H3.09a.608.608 0 0 1 0-1.215h16.352L13.19 5.14a.607.607 0 0 1 .86-.86l7.29 7.29a.607.607 0 0 1 0 .86"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="m21.484 12.574-7.29 7.29a.81.81 0 0 1-1.384-.574v-6.48H3.09a.81.81 0 0 1 0-1.62h9.72V4.71a.81.81 0 0 1 1.384-.574l7.29 7.29a.81.81 0 0 1 0 1.146z"/>',
    "outline": '<path d="m21.34 12.43-7.29 7.29a.607.607 0 0 1-.86-.858l6.252-6.254H3.09a.608.608 0 0 1 0-1.215h16.352L13.19 5.14a.607.607 0 0 1 .86-.86l7.29 7.29a.607.607 0 0 1 0 .86"/>',
    "duotone": '<path d="m20.91 12-7.29 7.29V4.71z" opacity="0.2"/><path d="m21.484 11.426-7.29-7.29a.81.81 0 0 0-1.384.574v6.48H3.09a.81.81 0 0 0 0 1.62h9.72v6.48a.81.81 0 0 0 1.384.574l7.29-7.29a.81.81 0 0 0 0-1.146zm-7.054 5.908V6.665L19.765 12z"/>'
  },
  tags: ["directional", "pointer", "pointing", "arrowhead"]
};
var arrowRotateCcwIcon = {
  name: "arrow-rotate-ccw",
  content: '<path d="M21.517 12a9.516 9.516 0 0 1-9.39 9.517H12a9.46 9.46 0 0 1-6.53-2.597.607.607 0 1 1 .834-.883 8.303 8.303 0 1 0-.177-11.91l-.019.019-3.074 2.816H6.33a.607.607 0 0 1 0 1.214H1.47a.607.607 0 0 1-.607-.607v-4.86a.608.608 0 0 1 1.215 0v3.476l3.203-2.93a9.517 9.517 0 0 1 16.237 6.743z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M21.72 12a9.72 9.72 0 0 1-9.589 9.72H12a9.66 9.66 0 0 1-6.672-2.653.81.81 0 0 1 1.114-1.177 8.1 8.1 0 1 0-.17-11.622l-.026.025-1.067.977L6.9 8.99a.81.81 0 0 1-.57 1.389H1.47a.81.81 0 0 1-.81-.81v-4.86a.81.81 0 0 1 1.384-.577l1.989 1.994 1.108-1.013a9.72 9.72 0 0 1 16.579 6.886z"/>',
    "outline": '<path d="M21.517 12a9.516 9.516 0 0 1-9.39 9.517H12a9.46 9.46 0 0 1-6.53-2.597.607.607 0 1 1 .834-.883 8.303 8.303 0 1 0-.177-11.91l-.019.019-3.074 2.816H6.33a.607.607 0 0 1 0 1.214H1.47a.607.607 0 0 1-.607-.607v-4.86a.608.608 0 0 1 1.215 0v3.476l3.203-2.93a9.517 9.517 0 0 1 16.237 6.743z"/>',
    "duotone": '<path d="M20.91 12A8.91 8.91 0 1 1 12 3.09 8.91 8.91 0 0 1 20.91 12" opacity="0.2"/><path d="M21.72 12a9.72 9.72 0 0 1-9.589 9.72H12a9.66 9.66 0 0 1-6.672-2.653.81.81 0 0 1 1.114-1.177 8.1 8.1 0 1 0-.17-11.622l-.026.025-2.692 2.466H6.33a.81.81 0 0 1 0 1.62H1.47a.81.81 0 0 1-.81-.81v-4.86a.81.81 0 0 1 1.62 0v3.017l2.861-2.613a9.72 9.72 0 0 1 16.579 6.886z"/>'
  },
  tags: ["arrow", "rotate", "ccw", "actions", "direction", "navigate", "pointer", "turn", "spin", "orientation"]
};
var arrowRotateCwIcon = {
  name: "arrow-rotate-cw",
  content: '<path d="M23.137 4.71v4.86a.607.607 0 0 1-.607.607h-4.86a.608.608 0 0 1 0-1.215h3.295L17.89 6.146l-.02-.019a8.303 8.303 0 1 0-.171 11.913.608.608 0 0 1 .834.884A9.48 9.48 0 0 1 12 21.517h-.13a9.517 9.517 0 1 1 6.85-16.261l3.203 2.932V4.71a.607.607 0 1 1 1.214 0"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M23.34 4.71v4.86a.81.81 0 0 1-.81.81h-4.86a.81.81 0 0 1-.574-1.384l1.721-1.72-1.068-.977-.025-.024a8.1 8.1 0 1 0-.169 11.622.81.81 0 1 1 1.113 1.177 9.66 9.66 0 0 1-6.669 2.647h-.133a9.72 9.72 0 1 1 6.993-16.605l1.107 1.012 1.99-1.994a.81.81 0 0 1 1.384.577z"/>',
    "outline": '<path d="M23.137 4.71v4.86a.607.607 0 0 1-.607.607h-4.86a.608.608 0 0 1 0-1.215h3.295L17.89 6.146l-.02-.019a8.303 8.303 0 1 0-.171 11.913.608.608 0 0 1 .834.884A9.48 9.48 0 0 1 12 21.517h-.13a9.517 9.517 0 1 1 6.85-16.261l3.203 2.932V4.71a.607.607 0 1 1 1.214 0"/>',
    "duotone": '<path d="M20.91 12A8.91 8.91 0 1 1 12 3.09 8.91 8.91 0 0 1 20.91 12" opacity="0.2"/><path d="M23.34 4.71v4.86a.81.81 0 0 1-.81.81h-4.86a.81.81 0 0 1 0-1.62h2.774l-2.692-2.466-.026-.024a8.1 8.1 0 1 0-.169 11.622.81.81 0 0 1 1.114 1.177A9.66 9.66 0 0 1 12 21.721h-.133A9.72 9.72 0 1 1 18.86 5.116l2.861 2.612V4.711a.81.81 0 1 1 1.62 0z"/>'
  },
  tags: ["arrow", "rotate", "cw", "actions", "direction", "navigate", "pointer", "turn", "spin", "orientation"]
};
var arrowUpIcon = {
  name: "arrow-up",
  content: '<path d="M19.72 10.81a.607.607 0 0 1-.858 0l-6.254-6.252V20.91a.608.608 0 0 1-1.215 0V4.558L5.14 10.81a.607.607 0 0 1-.86-.86l7.29-7.29a.607.607 0 0 1 .86 0l7.29 7.29a.607.607 0 0 1 0 .86"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M20.039 10.69a.81.81 0 0 1-.749.5h-6.48v9.72a.81.81 0 0 1-1.62 0v-9.72H4.71a.81.81 0 0 1-.574-1.384l7.29-7.29a.81.81 0 0 1 1.146 0l7.29 7.29a.81.81 0 0 1 .176.884z"/>',
    "outline": '<path d="M19.72 10.81a.607.607 0 0 1-.858 0l-6.254-6.252V20.91a.608.608 0 0 1-1.215 0V4.558L5.14 10.81a.607.607 0 0 1-.86-.86l7.29-7.29a.607.607 0 0 1 .86 0l7.29 7.29a.607.607 0 0 1 0 .86"/>',
    "duotone": '<path d="M19.29 10.38H4.71L12 3.09z" opacity="0.2"/><path d="m19.864 9.806-7.29-7.29a.81.81 0 0 0-1.146 0l-7.29 7.29a.81.81 0 0 0 .573 1.384h6.48v9.72a.81.81 0 0 0 1.62 0v-9.72h6.48a.81.81 0 0 0 .574-1.384zM6.666 9.57l5.335-5.335 5.335 5.335z"/>'
  },
  tags: ["directional", "pointer", "pointing", "arrowhead"]
};
var arrowsSwapIcon = {
  name: "arrows-swap",
  content: '<path d="M10.81 16.43a.607.607 0 0 1 0 .86l-3.24 3.24a.607.607 0 0 1-.86 0l-3.24-3.24a.607.607 0 0 1 .86-.86l2.203 2.202V3.9a.608.608 0 0 1 1.215 0v14.732l2.204-2.202a.607.607 0 0 1 .859 0zm9.72-9.72-3.24-3.24a.607.607 0 0 0-.86 0l-3.24 3.24a.607.607 0 0 0 .86.86l2.203-2.202V20.1a.608.608 0 0 0 1.215 0V5.368l2.204 2.202a.607.607 0 0 0 .858-.86"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M11.129 16.55a.81.81 0 0 1-.175.884l-3.24 3.24a.81.81 0 0 1-1.146 0l-3.24-3.24a.81.81 0 0 1 .573-1.384h2.43V3.9a.81.81 0 0 1 1.62 0v12.15h2.43a.81.81 0 0 1 .749.5zm9.545-9.982-3.24-3.24a.81.81 0 0 0-1.146 0l-3.24 3.24a.81.81 0 0 0 .573 1.383h2.43v12.15a.81.81 0 0 0 1.62 0V7.951h2.43a.81.81 0 0 0 .574-1.383z"/>',
    "outline": '<path d="M10.81 16.43a.607.607 0 0 1 0 .86l-3.24 3.24a.607.607 0 0 1-.86 0l-3.24-3.24a.607.607 0 0 1 .86-.86l2.203 2.202V3.9a.608.608 0 0 1 1.215 0v14.732l2.204-2.202a.607.607 0 0 1 .859 0zm9.72-9.72-3.24-3.24a.607.607 0 0 0-.86 0l-3.24 3.24a.607.607 0 0 0 .86.86l2.203-2.202V20.1a.608.608 0 0 0 1.215 0V5.368l2.204 2.202a.607.607 0 0 0 .858-.86"/>',
    "duotone": '<path d="M16.86 3.9v16.2H7.14V3.9z" opacity="0.2"/><path d="M10.954 16.286a.81.81 0 0 1 0 1.146l-3.24 3.24a.81.81 0 0 1-1.146 0l-3.24-3.24a.81.81 0 0 1 1.146-1.146l1.856 1.858V3.899a.81.81 0 0 1 1.62 0v14.245l1.856-1.858a.81.81 0 0 1 1.146 0zm9.72-9.72-3.24-3.24a.81.81 0 0 0-1.146 0l-3.24 3.24a.81.81 0 0 0 1.146 1.146l1.856-1.857V20.1a.81.81 0 0 0 1.62 0V5.855l1.856 1.857a.81.81 0 0 0 1.146-1.146z"/>'
  },
  tags: ["arrows", "swap", "navigation"]
};
var bellIcon = {
  name: "bell",
  content: '<path d="M21.322 16.955c-.574-.986-1.424-3.768-1.425-7.385a7.897 7.897 0 1 0-15.795 0c0 3.619-.852 6.4-1.426 7.385a1.417 1.417 0 0 0 1.223 2.132H8.2a3.847 3.847 0 0 0 7.593 0h4.306a1.417 1.417 0 0 0 1.221-2.132zM12 21.112a2.63 2.63 0 0 1-2.561-2.026h5.122A2.63 2.63 0 0 1 12 21.112m8.273-3.341a.19.19 0 0 1-.172.101H3.9a.19.19 0 0 1-.172-.101.2.2 0 0 1 0-.203c.767-1.316 1.59-4.385 1.59-7.999a6.683 6.683 0 1 1 13.366 0c0 3.613.824 6.678 1.591 7.999a.2.2 0 0 1 0 .203z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M21.497 16.854c-.562-.968-1.397-3.707-1.397-7.284a8.1 8.1 0 1 0-16.2 0c0 3.578-.836 6.316-1.398 7.284A1.62 1.62 0 0 0 3.9 19.29h4.132a4.05 4.05 0 0 0 7.935 0h4.132a1.62 1.62 0 0 0 1.397-2.436zM12 20.91a2.43 2.43 0 0 1-2.291-1.62h4.581a2.43 2.43 0 0 1-2.291 1.62z"/>',
    "outline": '<path d="M21.322 16.955c-.574-.986-1.424-3.768-1.425-7.385a7.897 7.897 0 1 0-15.795 0c0 3.619-.852 6.4-1.426 7.385a1.417 1.417 0 0 0 1.223 2.132H8.2a3.847 3.847 0 0 0 7.593 0h4.306a1.417 1.417 0 0 0 1.221-2.132zM12 21.112a2.63 2.63 0 0 1-2.561-2.026h5.122A2.63 2.63 0 0 1 12 21.112m8.273-3.341a.19.19 0 0 1-.172.101H3.9a.19.19 0 0 1-.172-.101.2.2 0 0 1 0-.203c.767-1.316 1.59-4.385 1.59-7.999a6.683 6.683 0 1 1 13.366 0c0 3.613.824 6.678 1.591 7.999a.2.2 0 0 1 0 .203z"/>',
    "duotone": '<path d="M20.1 18.48H3.9a.81.81 0 0 1-.696-1.214c.667-1.154 1.506-4.069 1.506-7.696a7.29 7.29 0 0 1 14.58 0c0 3.626.84 6.541 1.508 7.694a.81.81 0 0 1-.698 1.216" opacity="0.2"/><path d="M21.497 16.854c-.562-.968-1.397-3.707-1.397-7.284a8.1 8.1 0 1 0-16.2 0c0 3.578-.836 6.316-1.398 7.284A1.62 1.62 0 0 0 3.9 19.29h4.132a4.05 4.05 0 0 0 7.935 0h4.132a1.62 1.62 0 0 0 1.397-2.436zM12 20.91a2.43 2.43 0 0 1-2.291-1.62h4.581a2.43 2.43 0 0 1-2.291 1.62zm-8.1-3.24c.78-1.34 1.62-4.447 1.62-8.1a6.48 6.48 0 1 1 12.96 0c0 3.65.839 6.756 1.62 8.1z"/>'
  },
  tags: ["alarm", "notifications", "times", "timer", "clock", "schedule", "events", "ringer", "calls"]
};
var displayInlineFlexIcon = {
  name: "display-inline-flex",
  content: '<path d="M1.205 21a.6.6 0 0 1-1.2 0V3a.6.6 0 1 1 1.2 0zM23.995 21a.6.6 0 1 1-1.2 0V3a.6.6 0 0 1 1.2 0zM4.8 19.205h14.4v-14.4H4.8zm15.6.3a.9.9 0 0 1-.807.895l-.093.005h-15l-.093-.005a.9.9 0 0 1-.802-.803l-.005-.092v-15a.9.9 0 0 1 .9-.9h15a.9.9 0 0 1 .9.9z"/><path d="M7.2 6.905a.9.9 0 0 1 .9-.9h1.8a.9.9 0 0 1 .9.9v10.2a.9.9 0 0 1-.9.9H8.1a.9.9 0 0 1-.9-.9zM13.2 6.905a.9.9 0 0 1 .9-.9h1.8a.9.9 0 0 1 .9.9v10.2a.9.9 0 0 1-.9.9h-1.8a.9.9 0 0 1-.9-.9z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M19.502 3.6a.9.9 0 0 1 .9.9v15a.9.9 0 0 1-.9.9h-15a.9.9 0 0 1-.9-.9v-15a.9.9 0 0 1 .9-.9zM8.102 6a.9.9 0 0 0-.9.9v10.2a.9.9 0 0 0 .9.9h1.8a.9.9 0 0 0 .9-.9V6.9a.9.9 0 0 0-.9-.9zm6 0a.9.9 0 0 0-.9.9v10.2a.9.9 0 0 0 .9.9h1.8a.9.9 0 0 0 .9-.9V6.9a.9.9 0 0 0-.9-.9zM24.001 21a.81.81 0 1 1-1.619 0V3a.81.81 0 1 1 1.619 0zM1.618 21a.81.81 0 1 1-1.619 0V3a.81.81 0 1 1 1.619 0z"/>',
    "outline": '<path d="M1.205 21a.6.6 0 0 1-1.2 0V3a.6.6 0 1 1 1.2 0zM23.995 21a.6.6 0 1 1-1.2 0V3a.6.6 0 0 1 1.2 0zM4.8 19.205h14.4v-14.4H4.8zm15.6.3a.9.9 0 0 1-.807.895l-.093.005h-15l-.093-.005a.9.9 0 0 1-.802-.803l-.005-.092v-15a.9.9 0 0 1 .9-.9h15a.9.9 0 0 1 .9.9z"/><path d="M7.2 6.905a.9.9 0 0 1 .9-.9h1.8a.9.9 0 0 1 .9.9v10.2a.9.9 0 0 1-.9.9H8.1a.9.9 0 0 1-.9-.9zM13.2 6.905a.9.9 0 0 1 .9-.9h1.8a.9.9 0 0 1 .9.9v10.2a.9.9 0 0 1-.9.9h-1.8a.9.9 0 0 1-.9-.9z"/>',
    "duotone": '<path fill-opacity="0.2" d="M3.6 4.505a.9.9 0 0 1 .9-.9h15a.9.9 0 0 1 .9.9v15a.9.9 0 0 1-.9.9h-15a.9.9 0 0 1-.9-.9z"/><path d="M1.205 21a.6.6 0 0 1-1.2 0V3a.6.6 0 1 1 1.2 0zM23.995 21a.6.6 0 1 1-1.2 0V3a.6.6 0 0 1 1.2 0zM4.8 19.205h14.4v-14.4H4.8zm15.6.3a.9.9 0 0 1-.807.895l-.093.005h-15l-.093-.005a.9.9 0 0 1-.802-.803l-.005-.092v-15a.9.9 0 0 1 .9-.9h15a.9.9 0 0 1 .9.9z"/><path d="M7.2 6.905a.9.9 0 0 1 .9-.9h1.8a.9.9 0 0 1 .9.9v10.2a.9.9 0 0 1-.9.9H8.1a.9.9 0 0 1-.9-.9zM13.2 6.905a.9.9 0 0 1 .9-.9h1.8a.9.9 0 0 1 .9.9v10.2a.9.9 0 0 1-.9.9h-1.8a.9.9 0 0 1-.9-.9z"/>'
  },
  tags: ["display", "inline", "flex", "css", "layout"]
};
var calendarIcon = {
  name: "calendar",
  content: '<path d="M20.1 2.483h-2.633V1.47a.608.608 0 0 0-1.215 0v1.013H7.747V1.47a.608.608 0 0 0-1.215 0v1.013H3.899A1.416 1.416 0 0 0 2.482 3.9v16.2a1.416 1.416 0 0 0 1.417 1.417h16.2a1.416 1.416 0 0 0 1.417-1.417V3.9a1.416 1.416 0 0 0-1.417-1.417zM3.9 3.697h2.633V4.71a.608.608 0 0 0 1.215 0V3.697h8.505V4.71a.607.607 0 0 0 1.214 0V3.697H20.1a.204.204 0 0 1 .203.203v3.443H3.697V3.9a.204.204 0 0 1 .203-.203m16.2 16.606H3.9a.204.204 0 0 1-.203-.203V8.557h16.605V20.1a.204.204 0 0 1-.203.203zm-6.683-5.873A1.417 1.417 0 1 1 12 13.013a1.416 1.416 0 0 1 1.417 1.417"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M20.1 2.28h-2.43v-.81a.81.81 0 0 0-1.62 0v.81h-8.1v-.81a.81.81 0 0 0-1.62 0v.81H3.9A1.62 1.62 0 0 0 2.28 3.9v16.2a1.62 1.62 0 0 0 1.62 1.62h16.2a1.62 1.62 0 0 0 1.62-1.62V3.9a1.62 1.62 0 0 0-1.62-1.62M12 16.05a1.62 1.62 0 1 1 1.62-1.62A1.62 1.62 0 0 1 12 16.05m8.1-8.91H3.9V3.9h2.43v.81a.81.81 0 0 0 1.62 0V3.9h8.1v.81a.81.81 0 0 0 1.62 0V3.9h2.43z"/>',
    "outline": '<path d="M20.1 2.483h-2.633V1.47a.608.608 0 0 0-1.215 0v1.013H7.747V1.47a.608.608 0 0 0-1.215 0v1.013H3.899A1.416 1.416 0 0 0 2.482 3.9v16.2a1.416 1.416 0 0 0 1.417 1.417h16.2a1.416 1.416 0 0 0 1.417-1.417V3.9a1.416 1.416 0 0 0-1.417-1.417zM3.9 3.697h2.633V4.71a.608.608 0 0 0 1.215 0V3.697h8.505V4.71a.607.607 0 0 0 1.214 0V3.697H20.1a.204.204 0 0 1 .203.203v3.443H3.697V3.9a.204.204 0 0 1 .203-.203m16.2 16.606H3.9a.204.204 0 0 1-.203-.203V8.557h16.605V20.1a.204.204 0 0 1-.203.203zm-6.683-5.873A1.417 1.417 0 1 1 12 13.013a1.416 1.416 0 0 1 1.417 1.417"/>',
    "duotone": '<path d="M20.91 3.9v4.05H3.09V3.9a.81.81 0 0 1 .81-.81h16.2a.81.81 0 0 1 .81.81" opacity="0.2"/><path d="M20.1 2.28h-2.43v-.81a.81.81 0 0 0-1.62 0v.81h-8.1v-.81a.81.81 0 0 0-1.62 0v.81H3.9A1.62 1.62 0 0 0 2.28 3.9v16.2a1.62 1.62 0 0 0 1.62 1.62h16.2a1.62 1.62 0 0 0 1.62-1.62V3.9a1.62 1.62 0 0 0-1.62-1.62M6.33 3.9v.81a.81.81 0 0 0 1.62 0V3.9h8.1v.81a.81.81 0 0 0 1.62 0V3.9h2.43v3.24H3.9V3.9zM20.1 20.1H3.9V8.76h16.2zm-6.48-5.67A1.62 1.62 0 1 1 12 12.81a1.62 1.62 0 0 1 1.62 1.62"/>'
  },
  tags: ["dates", "times", "events", "schedule", "12"]
};
var cancelIcon = {
  name: "cancel",
  content: '<path d="M15.67 14.81a.607.607 0 1 1-.86.86L8.33 9.19a.607.607 0 0 1 .86-.86zM22.327 12A10.327 10.327 0 1 1 12 1.673 10.34 10.34 0 0 1 22.327 12m-1.214 0A9.113 9.113 0 1 0 12 21.113 9.12 9.12 0 0 0 21.113 12"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M12 1.47A10.53 10.53 0 1 0 22.53 12 10.54 10.54 0 0 0 12 1.47m3.814 14.344a.81.81 0 0 1-1.146 0l-6.48-6.48a.81.81 0 0 1 1.146-1.146l6.48 6.48a.81.81 0 0 1 0 1.146"/>',
    "outline": '<path d="M15.67 14.81a.607.607 0 1 1-.86.86L8.33 9.19a.607.607 0 0 1 .86-.86zM22.327 12A10.327 10.327 0 1 1 12 1.673 10.34 10.34 0 0 1 22.327 12m-1.214 0A9.113 9.113 0 1 0 12 21.113 9.12 9.12 0 0 0 21.113 12"/>',
    "duotone": '<path d="M21.72 12A9.72 9.72 0 1 1 12 2.28 9.72 9.72 0 0 1 21.72 12" opacity="0.2"/><path d="M15.814 14.666a.81.81 0 0 1-1.146 1.146l-6.48-6.48a.81.81 0 0 1 1.146-1.146zM22.53 12A10.53 10.53 0 1 1 12 1.47 10.54 10.54 0 0 1 22.53 12m-1.62 0A8.91 8.91 0 1 0 12 20.91 8.92 8.92 0 0 0 20.91 12"/>'
  },
  tags: ["cancel", "actions"]
};
var caretAltExpandIcon = {
  name: "caret-alt-expand",
  content: '<path d="M17.29 16.43a.607.607 0 0 1 0 .86l-4.86 4.86a.607.607 0 0 1-.86 0l-4.86-4.86a.607.607 0 0 1 .86-.86L12 20.86l4.43-4.43a.607.607 0 0 1 .86 0M7.57 7.568 12 3.139l4.43 4.429a.607.607 0 0 0 .86-.859l-4.86-4.86a.607.607 0 0 0-.86 0l-4.86 4.86a.607.607 0 0 0 .86.859"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M6.391 7.45a.81.81 0 0 1 .175-.884l4.86-4.86a.81.81 0 0 1 1.146 0l4.86 4.86a.81.81 0 0 1-.573 1.384h-9.72a.81.81 0 0 1-.749-.5zm10.469 8.6H7.14a.81.81 0 0 0-.574 1.384l4.86 4.86a.81.81 0 0 0 1.146 0l4.86-4.86a.81.81 0 0 0-.573-1.384z"/>',
    "outline": '<path d="M17.29 16.43a.607.607 0 0 1 0 .86l-4.86 4.86a.607.607 0 0 1-.86 0l-4.86-4.86a.607.607 0 0 1 .86-.86L12 20.86l4.43-4.43a.607.607 0 0 1 .86 0M7.57 7.568 12 3.139l4.43 4.429a.607.607 0 0 0 .86-.859l-4.86-4.86a.607.607 0 0 0-.86 0l-4.86 4.86a.607.607 0 0 0 .86.859"/>',
    "duotone": '<path d="M7.14 16.86h9.72L12 21.72zM12 2.28 7.14 7.14h9.72z" opacity="0.2"/><path d="M16.86 16.05H7.14a.81.81 0 0 0-.574 1.384l4.86 4.86a.81.81 0 0 0 1.146 0l4.86-4.86a.81.81 0 0 0-.573-1.384zM12 20.575 9.095 17.67h5.809zM7.14 7.95h9.72a.81.81 0 0 0 .574-1.384l-4.86-4.86a.81.81 0 0 0-1.146 0l-4.86 4.86a.81.81 0 0 0 .573 1.384zM12 3.425l2.905 2.905H9.096z"/>'
  },
  tags: ["caret", "alt", "expand", "navigation", "arrow", "dropdown"]
};
var caretAltToLeftIcon = {
  name: "caret-alt-to-left",
  content: '<path d="M18.91 19.67a.607.607 0 1 1-.86.858l-8.1-8.1a.607.607 0 0 1 0-.859l8.1-8.1a.607.607 0 0 1 .86.859l-7.67 7.671zM6.33 3.292a.607.607 0 0 0-.607.607v16.2a.608.608 0 0 0 1.215 0v-16.2a.607.607 0 0 0-.607-.607z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M19.29 3.9v16.2a.81.81 0 0 1-1.384.574l-8.1-8.1a.81.81 0 0 1 0-1.146l8.1-8.1a.81.81 0 0 1 1.384.573zM6.33 3.09a.81.81 0 0 0-.81.81v16.2a.81.81 0 0 0 1.62 0V3.9a.81.81 0 0 0-.81-.81"/>',
    "outline": '<path d="M18.91 19.67a.607.607 0 1 1-.86.858l-8.1-8.1a.607.607 0 0 1 0-.859l8.1-8.1a.607.607 0 0 1 .86.859l-7.67 7.671zM6.33 3.292a.607.607 0 0 0-.607.607v16.2a.608.608 0 0 0 1.215 0v-16.2a.607.607 0 0 0-.607-.607z"/>',
    "duotone": '<path d="M18.48 3.9v16.2l-8.1-8.1z" opacity="0.2"/><path d="M18.79 3.151a.81.81 0 0 0-.884.175l-8.1 8.1a.81.81 0 0 0 0 1.146l8.1 8.1a.81.81 0 0 0 1.384-.573v-16.2a.81.81 0 0 0-.5-.749zm-1.12 14.993-6.145-6.145 6.145-6.145zM7.14 3.899v16.2a.81.81 0 0 1-1.62 0v-16.2a.81.81 0 0 1 1.62 0"/>'
  },
  tags: ["caret", "alt", "to", "left", "navigation", "arrow", "dropdown", "expand"]
};
var caretAltToRightIcon = {
  name: "caret-alt-to-right",
  content: '<path d="M14.05 11.57a.607.607 0 0 1 0 .86l-8.1 8.1a.607.607 0 0 1-.86-.858l7.67-7.671-7.67-7.67a.607.607 0 0 1 .86-.859zm3.62-8.278a.607.607 0 0 0-.607.607v16.2a.607.607 0 0 0 1.214 0v-16.2a.607.607 0 0 0-.607-.607"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M14.194 11.426a.81.81 0 0 1 0 1.146l-8.1 8.1a.81.81 0 0 1-1.384-.573v-16.2a.81.81 0 0 1 1.384-.574zM17.67 3.09a.81.81 0 0 0-.81.81v16.2a.81.81 0 0 0 1.62 0V3.9a.81.81 0 0 0-.81-.81"/>',
    "outline": '<path d="M14.05 11.57a.607.607 0 0 1 0 .86l-8.1 8.1a.607.607 0 0 1-.86-.858l7.67-7.671-7.67-7.67a.607.607 0 0 1 .86-.859zm3.62-8.278a.607.607 0 0 0-.607.607v16.2a.607.607 0 0 0 1.214 0v-16.2a.607.607 0 0 0-.607-.607"/>',
    "duotone": '<path d="m13.62 12-8.1 8.1V3.9z" opacity="0.2"/><path d="M6.094 3.326A.81.81 0 0 0 4.71 3.9v16.2a.81.81 0 0 0 1.384.574l8.1-8.1a.81.81 0 0 0 0-1.146zm.236 14.818V5.855L12.475 12zM18.48 3.899v16.2a.81.81 0 0 1-1.62 0v-16.2a.81.81 0 0 1 1.62 0"/>'
  },
  tags: ["caret", "alt", "to", "right", "navigation", "arrow", "dropdown", "expand"]
};
var checkCircleIcon = {
  name: "check-circle",
  content: '<path d="M16.48 9.14a.607.607 0 0 1 0 .86l-5.67 5.67a.607.607 0 0 1-.86 0l-2.43-2.43a.607.607 0 0 1 .86-.86l2 2 5.24-5.24a.607.607 0 0 1 .86 0M22.327 12A10.327 10.327 0 1 1 12 1.673 10.34 10.34 0 0 1 22.327 12m-1.214 0A9.113 9.113 0 1 0 12 21.113 9.12 9.12 0 0 0 21.113 12"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M12 1.47A10.53 10.53 0 1 0 22.53 12 10.54 10.54 0 0 0 12 1.47m4.624 8.674-5.67 5.67a.81.81 0 0 1-1.146 0l-2.43-2.43a.81.81 0 0 1 1.146-1.146l1.856 1.857 5.096-5.097a.81.81 0 0 1 1.146 1.146z"/>',
    "outline": '<path d="M16.48 9.14a.607.607 0 0 1 0 .86l-5.67 5.67a.607.607 0 0 1-.86 0l-2.43-2.43a.607.607 0 0 1 .86-.86l2 2 5.24-5.24a.607.607 0 0 1 .86 0M22.327 12A10.327 10.327 0 1 1 12 1.673 10.34 10.34 0 0 1 22.327 12m-1.214 0A9.113 9.113 0 1 0 12 21.113 9.12 9.12 0 0 0 21.113 12"/>',
    "duotone": '<path d="M21.72 12A9.72 9.72 0 1 1 12 2.28 9.72 9.72 0 0 1 21.72 12" opacity="0.2"/><path d="M16.624 8.996a.81.81 0 0 1 0 1.146l-5.67 5.67a.81.81 0 0 1-1.146 0l-2.43-2.43a.81.81 0 0 1 1.146-1.146l1.856 1.858 5.096-5.098a.81.81 0 0 1 1.146 0zM22.53 12A10.53 10.53 0 1 1 12 1.47 10.54 10.54 0 0 1 22.53 12m-1.62 0A8.91 8.91 0 1 0 12 20.91 8.92 8.92 0 0 0 20.91 12"/>'
  },
  tags: ["todo", "to-do", "task", "list", "checkbox", "round", "ok", "done"]
};
var checkIcon = {
  name: "check",
  content: '<path d="M22.15 6.76 9.19 19.72a.607.607 0 0 1-.86 0l-5.67-5.67a.607.607 0 0 1 .86-.86l5.24 5.24L21.29 5.9a.607.607 0 0 1 .858.86z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M20.91 3.09H3.09a1.62 1.62 0 0 0-1.62 1.62v14.58a1.62 1.62 0 0 0 1.62 1.62h17.82a1.62 1.62 0 0 0 1.62-1.62V4.71a1.62 1.62 0 0 0-1.62-1.62m-1.046 4.624-9.72 9.72a.81.81 0 0 1-1.146 0l-4.05-4.05a.81.81 0 0 1 1.146-1.146l3.476 3.477 9.146-9.147a.81.81 0 0 1 1.146 1.146z"/>',
    "outline": '<path d="M22.15 6.76 9.19 19.72a.607.607 0 0 1-.86 0l-5.67-5.67a.607.607 0 0 1 .86-.86l5.24 5.24L21.29 5.9a.607.607 0 0 1 .858.86z"/>',
    "duotone": '<path d="M22.53 4.71v14.58a1.62 1.62 0 0 1-1.62 1.62H3.09a1.62 1.62 0 0 1-1.62-1.62V4.71a1.62 1.62 0 0 1 1.62-1.62h17.82a1.62 1.62 0 0 1 1.62 1.62" opacity="0.2"/><path d="m19.864 7.714-9.72 9.72a.81.81 0 0 1-1.146 0l-4.05-4.05a.81.81 0 0 1 1.146-1.146l3.476 3.477 9.146-9.147a.81.81 0 0 1 1.146 1.146z"/>'
  },
  tags: ["todo", "to-do", "task", "list", "checkbox", "ok", "done"]
};
var chevronDownIcon = {
  name: "chevron-down",
  content: '<path d="m20.53 9.19-8.1 8.1a.607.607 0 0 1-.86 0l-8.1-8.1a.607.607 0 0 1 .86-.86L12 16l7.67-7.67a.607.607 0 0 1 .858.858z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="m20.674 9.334-8.1 8.1a.81.81 0 0 1-1.146 0l-8.1-8.1a.81.81 0 0 1 .573-1.384h16.2a.81.81 0 0 1 .574 1.384z"/>',
    "outline": '<path d="m20.53 9.19-8.1 8.1a.607.607 0 0 1-.86 0l-8.1-8.1a.607.607 0 0 1 .86-.86L12 16l7.67-7.67a.607.607 0 0 1 .858.858z"/>',
    "duotone": '<path d="m20.1 8.76-8.1 8.1-8.1-8.1z" opacity="0.2"/><path d="M20.849 8.45a.81.81 0 0 0-.749-.5H3.9a.81.81 0 0 0-.574 1.384l8.1 8.1a.81.81 0 0 0 1.146 0l8.1-8.1a.81.81 0 0 0 .176-.884zM12 15.715 5.855 9.57h12.289z"/>'
  },
  tags: ["chevron", "down", "navigation", "arrows", "arrow", "direction", "caret"]
};
var chevronLeftIcon = {
  name: "chevron-left",
  content: '<path d="M15.67 19.67a.607.607 0 1 1-.86.858l-8.1-8.1a.607.607 0 0 1 0-.859l8.1-8.1a.607.607 0 0 1 .86.859L8 11.999z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M16.05 3.9v16.2a.81.81 0 0 1-1.384.574l-8.1-8.1a.81.81 0 0 1 0-1.146l8.1-8.1a.81.81 0 0 1 1.384.573z"/>',
    "outline": '<path d="M15.67 19.67a.607.607 0 1 1-.86.858l-8.1-8.1a.607.607 0 0 1 0-.859l8.1-8.1a.607.607 0 0 1 .86.859L8 11.999z"/>',
    "duotone": '<path d="M15.24 3.9v16.2L7.14 12z" opacity="0.2"/><path d="M15.55 3.151a.81.81 0 0 0-.884.175l-8.1 8.1a.81.81 0 0 0 0 1.146l8.1 8.1a.81.81 0 0 0 1.384-.573v-16.2a.81.81 0 0 0-.5-.749zm-1.12 14.993-6.145-6.145 6.145-6.145z"/>'
  },
  tags: ["chevron", "left", "navigation", "arrows", "arrow", "direction", "caret"]
};
var chevronRightIcon = {
  name: "chevron-right",
  content: '<path d="m17.29 12.43-8.1 8.1a.607.607 0 0 1-.86-.858L16 12.001l-7.67-7.67a.607.607 0 0 1 .858-.859l8.1 8.1a.607.607 0 0 1 0 .859z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="m17.434 12.574-8.1 8.1A.81.81 0 0 1 7.95 20.1V3.9a.81.81 0 0 1 1.384-.574l8.1 8.1a.81.81 0 0 1 0 1.146z"/>',
    "outline": '<path d="m17.29 12.43-8.1 8.1a.607.607 0 0 1-.86-.858L16 12.001l-7.67-7.67a.607.607 0 0 1 .858-.859l8.1 8.1a.607.607 0 0 1 0 .859z"/>',
    "duotone": '<path d="m16.86 12-8.1 8.1V3.9z" opacity="0.2"/><path d="m17.434 11.426-8.1-8.1A.81.81 0 0 0 7.95 3.9v16.2a.81.81 0 0 0 1.384.574l8.1-8.1a.81.81 0 0 0 0-1.146zM9.57 18.144V5.855L15.715 12z"/>'
  },
  tags: ["chevron", "right", "navigation", "arrows", "arrow", "direction", "caret"]
};
var chevronUpIcon = {
  name: "chevron-up",
  content: '<path d="M20.53 15.67a.607.607 0 0 1-.858 0L12.001 8l-7.67 7.67a.607.607 0 0 1-.859-.86l8.1-8.1a.607.607 0 0 1 .859 0l8.1 8.1a.607.607 0 0 1 0 .86z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M20.849 15.55a.81.81 0 0 1-.749.5H3.9a.81.81 0 0 1-.574-1.384l8.1-8.1a.81.81 0 0 1 1.146 0l8.1 8.1a.81.81 0 0 1 .176.884z"/>',
    "outline": '<path d="M20.53 15.67a.607.607 0 0 1-.858 0L12.001 8l-7.67 7.67a.607.607 0 0 1-.859-.86l8.1-8.1a.607.607 0 0 1 .859 0l8.1 8.1a.607.607 0 0 1 0 .86z"/>',
    "duotone": '<path d="M20.1 15.24H3.9l8.1-8.1z" opacity="0.2"/><path d="m20.674 14.666-8.1-8.1a.81.81 0 0 0-1.146 0l-8.1 8.1a.81.81 0 0 0 .573 1.384h16.2a.81.81 0 0 0 .574-1.384zM5.856 14.43l6.145-6.145 6.145 6.145z"/>'
  },
  tags: ["chevron", "up", "navigation", "arrows", "arrow", "direction", "caret"]
};
var clipboardTextIcon = {
  name: "clipboard-text",
  content: '<path d="M15.847 14.43a.607.607 0 0 1-.607.607H8.76a.607.607 0 0 1 0-1.214h6.48a.607.607 0 0 1 .607.607m-.607-3.847H8.76a.608.608 0 0 0 0 1.215h6.48a.607.607 0 0 0 0-1.214zM20.707 3.9v17.01a1.416 1.416 0 0 1-1.417 1.417H4.71a1.416 1.416 0 0 1-1.417-1.417V3.9A1.416 1.416 0 0 1 4.71 2.483h3.763a4.65 4.65 0 0 1 7.054 0h3.763A1.416 1.416 0 0 1 20.707 3.9M8.557 5.52v.203h6.886V5.52a3.443 3.443 0 0 0-6.886 0M19.493 3.9a.204.204 0 0 0-.203-.203h-3.004a4.7 4.7 0 0 1 .372 1.823v.81a.607.607 0 0 1-.607.607h-8.1a.607.607 0 0 1-.607-.607v-.81a4.7 4.7 0 0 1 .372-1.823H4.712a.204.204 0 0 0-.202.203v17.01a.204.204 0 0 0 .202.203h14.58a.204.204 0 0 0 .203-.203z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M19.29 2.28h-3.671a4.852 4.852 0 0 0-7.237 0H4.711a1.62 1.62 0 0 0-1.62 1.62v17.01a1.62 1.62 0 0 0 1.62 1.62h14.58a1.62 1.62 0 0 0 1.62-1.62V3.9a1.62 1.62 0 0 0-1.62-1.62zm-7.29 0a3.24 3.24 0 0 1 3.24 3.24H8.76A3.24 3.24 0 0 1 12 2.28m3.24 12.96H8.76a.81.81 0 0 1 0-1.62h6.48a.81.81 0 0 1 0 1.62m0-3.24H8.76a.81.81 0 0 1 0-1.62h6.48a.81.81 0 0 1 0 1.62"/>',
    "outline": '<path d="M15.847 14.43a.607.607 0 0 1-.607.607H8.76a.607.607 0 0 1 0-1.214h6.48a.607.607 0 0 1 .607.607m-.607-3.847H8.76a.608.608 0 0 0 0 1.215h6.48a.607.607 0 0 0 0-1.214zM20.707 3.9v17.01a1.416 1.416 0 0 1-1.417 1.417H4.71a1.416 1.416 0 0 1-1.417-1.417V3.9A1.416 1.416 0 0 1 4.71 2.483h3.763a4.65 4.65 0 0 1 7.054 0h3.763A1.416 1.416 0 0 1 20.707 3.9M8.557 5.52v.203h6.886V5.52a3.443 3.443 0 0 0-6.886 0M19.493 3.9a.204.204 0 0 0-.203-.203h-3.004a4.7 4.7 0 0 1 .372 1.823v.81a.607.607 0 0 1-.607.607h-8.1a.607.607 0 0 1-.607-.607v-.81a4.7 4.7 0 0 1 .372-1.823H4.712a.204.204 0 0 0-.202.203v17.01a.204.204 0 0 0 .202.203h14.58a.204.204 0 0 0 .203-.203z"/>',
    "duotone": '<path d="M20.1 3.9v17.01a.81.81 0 0 1-.81.81H4.71a.81.81 0 0 1-.81-.81V3.9a.81.81 0 0 1 .81-.81h4.05a4.03 4.03 0 0 0-.81 2.43v.81h8.1v-.81a4.03 4.03 0 0 0-.81-2.43h4.05a.81.81 0 0 1 .81.81" opacity="0.2"/><path d="M16.05 14.43a.81.81 0 0 1-.81.81H8.76a.81.81 0 0 1 0-1.62h6.48a.81.81 0 0 1 .81.81m-.81-4.05H8.76a.81.81 0 0 0 0 1.62h6.48a.81.81 0 0 0 0-1.62m5.67-6.48v17.01a1.62 1.62 0 0 1-1.62 1.62H4.71a1.62 1.62 0 0 1-1.62-1.62V3.9a1.62 1.62 0 0 1 1.62-1.62h3.671a4.852 4.852 0 0 1 7.237 0h3.671a1.62 1.62 0 0 1 1.62 1.62zM8.76 5.52h6.48a3.24 3.24 0 0 0-6.48 0M19.29 3.9h-2.708a4.8 4.8 0 0 1 .278 1.62v.81a.81.81 0 0 1-.81.81h-8.1a.81.81 0 0 1-.81-.81v-.81a4.8 4.8 0 0 1 .278-1.62H4.71v17.01h14.58z"/>'
  },
  tags: ["copy", "copied", "checklist"]
};
var clockArrowRotateIcon = {
  name: "clock-arrow-rotate",
  content: '<path d="M12.607 7.14v4.516l3.755 2.252a.608.608 0 0 1-.625 1.043l-4.05-2.43a.6.6 0 0 1-.295-.522v-4.86a.608.608 0 0 1 1.215 0zM12 2.483a9.46 9.46 0 0 0-6.732 2.79 47 47 0 0 0-2.381 2.612V5.52a.608.608 0 0 0-1.215 0v4.05a.607.607 0 0 0 .607.607h4.05a.607.607 0 0 0 0-1.214H3.568a47 47 0 0 1 2.558-2.836 8.303 8.303 0 1 1 .172 11.909.607.607 0 1 0-.834.883 9.517 9.517 0 1 0 6.535-16.436z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M21.72 12a9.72 9.72 0 0 1-16.391 7.069.811.811 0 1 1 1.114-1.178 8.1 8.1 0 1 0-.171-11.619c-.358.361-.694.716-1.021 1.071l1.651 1.655a.81.81 0 0 1-.573 1.383h-4.05a.81.81 0 0 1-.81-.81v-4.05a.81.81 0 0 1 1.383-.573l1.25 1.251c.326-.353.662-.709 1.018-1.068a9.72 9.72 0 0 1 16.599 6.87zM12 6.33a.81.81 0 0 0-.81.81V12a.82.82 0 0 0 .392.695l4.05 2.43a.81.81 0 1 0 .834-1.39l-3.657-2.193V7.14a.81.81 0 0 0-.81-.81z"/>',
    "outline": '<path d="M12.607 7.14v4.516l3.755 2.252a.608.608 0 0 1-.625 1.043l-4.05-2.43a.6.6 0 0 1-.295-.522v-4.86a.608.608 0 0 1 1.215 0zM12 2.483a9.46 9.46 0 0 0-6.732 2.79 47 47 0 0 0-2.381 2.612V5.52a.608.608 0 0 0-1.215 0v4.05a.607.607 0 0 0 .607.607h4.05a.607.607 0 0 0 0-1.214H3.568a47 47 0 0 1 2.558-2.836 8.303 8.303 0 1 1 .172 11.909.607.607 0 1 0-.834.883 9.517 9.517 0 1 0 6.535-16.436z"/>',
    "duotone": '<path d="M20.91 12A8.91 8.91 0 1 1 12 3.09 8.91 8.91 0 0 1 20.91 12" opacity="0.2"/><path d="M12.81 7.14v4.402l3.658 2.193a.81.81 0 0 1-.834 1.39l-4.05-2.43a.82.82 0 0 1-.393-.695V7.14a.81.81 0 0 1 1.62 0zM12 2.28a9.66 9.66 0 0 0-6.877 2.85A42 42 0 0 0 3.09 7.343V5.52a.81.81 0 0 0-1.62 0v4.05a.81.81 0 0 0 .81.81h4.05a.81.81 0 0 0 0-1.62H4.001a44 44 0 0 1 2.267-2.488 8.1 8.1 0 1 1 .168 11.619.811.811 0 1 0-1.114 1.178A9.72 9.72 0 1 0 12 2.28"/>'
  },
  tags: ["clock", "arrow", "rotate", "actions", "time", "timer", "schedule", "direction", "navigate", "pointer", "turn", "spin", "orientation"]
};
var clockIcon = {
  name: "clock",
  content: '<path d="M12 1.673A10.327 10.327 0 1 0 22.327 12 10.34 10.34 0 0 0 12 1.673m0 19.44A9.113 9.113 0 1 1 21.113 12 9.12 9.12 0 0 1 12 21.113M18.277 12a.607.607 0 0 1-.607.607H12a.607.607 0 0 1-.607-.607V6.33a.608.608 0 0 1 1.215 0v5.063h5.063a.607.607 0 0 1 .607.607z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M12 1.47A10.53 10.53 0 1 0 22.53 12 10.54 10.54 0 0 0 12 1.47m5.67 11.34H12a.81.81 0 0 1-.81-.81V6.33a.81.81 0 0 1 1.62 0v4.86h4.86a.81.81 0 0 1 0 1.62"/>',
    "outline": '<path d="M12 1.673A10.327 10.327 0 1 0 22.327 12 10.34 10.34 0 0 0 12 1.673m0 19.44A9.113 9.113 0 1 1 21.113 12 9.12 9.12 0 0 1 12 21.113M18.277 12a.607.607 0 0 1-.607.607H12a.607.607 0 0 1-.607-.607V6.33a.608.608 0 0 1 1.215 0v5.063h5.063a.607.607 0 0 1 .607.607z"/>',
    "duotone": '<path d="M21.72 12A9.72 9.72 0 1 1 12 2.28 9.72 9.72 0 0 1 21.72 12" opacity="0.2"/><path d="M12 1.47A10.53 10.53 0 1 0 22.53 12 10.54 10.54 0 0 0 12 1.47m0 19.44A8.91 8.91 0 1 1 20.91 12 8.92 8.92 0 0 1 12 20.91M18.48 12a.81.81 0 0 1-.81.81H12a.81.81 0 0 1-.81-.81V6.33a.81.81 0 0 1 1.62 0v4.86h4.86a.81.81 0 0 1 .81.81"/>'
  },
  tags: ["times", "timer", "alarm", "schedule", "events", "watch"]
};
var columnsIcon = {
  name: "columns",
  content: '<path d="M9.57 2.483H5.52A1.416 1.416 0 0 0 4.103 3.9v16.2a1.416 1.416 0 0 0 1.417 1.417h4.05a1.416 1.416 0 0 0 1.417-1.417V3.9A1.416 1.416 0 0 0 9.57 2.483M9.773 20.1a.204.204 0 0 1-.203.203H5.52a.204.204 0 0 1-.203-.203V3.9a.204.204 0 0 1 .203-.203h4.05a.204.204 0 0 1 .203.203zM18.48 2.483h-4.05A1.416 1.416 0 0 0 13.013 3.9v16.2a1.416 1.416 0 0 0 1.417 1.417h4.05a1.416 1.416 0 0 0 1.417-1.417V3.9a1.416 1.416 0 0 0-1.417-1.417m.203 17.617a.204.204 0 0 1-.203.203h-4.05a.204.204 0 0 1-.203-.203V3.9a.204.204 0 0 1 .203-.203h4.05a.204.204 0 0 1 .203.203z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M11.19 3.9v16.2a1.62 1.62 0 0 1-1.62 1.62H5.52A1.62 1.62 0 0 1 3.9 20.1V3.9a1.62 1.62 0 0 1 1.62-1.62h4.05a1.62 1.62 0 0 1 1.62 1.62m7.29-1.62h-4.05a1.62 1.62 0 0 0-1.62 1.62v16.2a1.62 1.62 0 0 0 1.62 1.62h4.05a1.62 1.62 0 0 0 1.62-1.62V3.9a1.62 1.62 0 0 0-1.62-1.62"/>',
    "outline": '<path d="M9.57 2.483H5.52A1.416 1.416 0 0 0 4.103 3.9v16.2a1.416 1.416 0 0 0 1.417 1.417h4.05a1.416 1.416 0 0 0 1.417-1.417V3.9A1.416 1.416 0 0 0 9.57 2.483M9.773 20.1a.204.204 0 0 1-.203.203H5.52a.204.204 0 0 1-.203-.203V3.9a.204.204 0 0 1 .203-.203h4.05a.204.204 0 0 1 .203.203zM18.48 2.483h-4.05A1.416 1.416 0 0 0 13.013 3.9v16.2a1.416 1.416 0 0 0 1.417 1.417h4.05a1.416 1.416 0 0 0 1.417-1.417V3.9a1.416 1.416 0 0 0-1.417-1.417m.203 17.617a.204.204 0 0 1-.203.203h-4.05a.204.204 0 0 1-.203-.203V3.9a.204.204 0 0 1 .203-.203h4.05a.204.204 0 0 1 .203.203z"/>',
    "duotone": '<path d="M10.38 3.9v16.2a.81.81 0 0 1-.81.81H5.52a.81.81 0 0 1-.81-.81V3.9a.81.81 0 0 1 .81-.81h4.05a.81.81 0 0 1 .81.81m8.1-.81h-4.05a.81.81 0 0 0-.81.81v16.2a.81.81 0 0 0 .81.81h4.05a.81.81 0 0 0 .81-.81V3.9a.81.81 0 0 0-.81-.81" opacity="0.2"/><path d="M9.57 2.28H5.52A1.62 1.62 0 0 0 3.9 3.9v16.2a1.62 1.62 0 0 0 1.62 1.62h4.05a1.62 1.62 0 0 0 1.62-1.62V3.9a1.62 1.62 0 0 0-1.62-1.62m0 17.82H5.52V3.9h4.05zm8.91-17.82h-4.05a1.62 1.62 0 0 0-1.62 1.62v16.2a1.62 1.62 0 0 0 1.62 1.62h4.05a1.62 1.62 0 0 0 1.62-1.62V3.9a1.62 1.62 0 0 0-1.62-1.62m0 17.82h-4.05V3.9h4.05z"/>'
  },
  tags: ["2", "shapes", "polygons", "box", "stack", "list", "table", "cards"]
};
var commentIcon = {
  name: "comment",
  content: '<path d="M20.91 4.103H3.09A1.416 1.416 0 0 0 1.673 5.52v16.2a1.4 1.4 0 0 0 .819 1.285 1.4 1.4 0 0 0 .599.133 1.4 1.4 0 0 0 .911-.334l.006-.005L7.367 19.9h13.544a1.416 1.416 0 0 0 1.417-1.418V5.522a1.416 1.416 0 0 0-1.417-1.417zm.203 14.377a.204.204 0 0 1-.203.203H7.14a.6.6 0 0 0-.397.147l-3.526 3.045a.203.203 0 0 1-.33-.155V5.52a.204.204 0 0 1 .203-.203h17.82a.204.204 0 0 1 .203.203zm-5.265-8.1a.607.607 0 0 1-.607.607h-6.48a.608.608 0 0 1 0-1.215h6.48a.607.607 0 0 1 .607.607zm0 3.24a.607.607 0 0 1-.607.607h-6.48a.608.608 0 0 1 0-1.215h6.48a.607.607 0 0 1 .607.607z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M20.91 3.9H3.09a1.62 1.62 0 0 0-1.62 1.62v16.2a1.61 1.61 0 0 0 .936 1.468 1.6 1.6 0 0 0 .684.152 1.6 1.6 0 0 0 1.038-.383l.01-.007 3.307-2.85h13.466a1.62 1.62 0 0 0 1.62-1.62V5.52a1.62 1.62 0 0 0-1.62-1.62zm-5.67 10.53H8.76a.81.81 0 0 1 0-1.62h6.48a.81.81 0 0 1 0 1.62m0-3.24H8.76a.81.81 0 0 1 0-1.62h6.48a.81.81 0 0 1 0 1.62"/>',
    "outline": '<path d="M20.91 4.103H3.09A1.416 1.416 0 0 0 1.673 5.52v16.2a1.4 1.4 0 0 0 .819 1.285 1.4 1.4 0 0 0 .599.133 1.4 1.4 0 0 0 .911-.334l.006-.005L7.367 19.9h13.544a1.416 1.416 0 0 0 1.417-1.418V5.522a1.416 1.416 0 0 0-1.417-1.417zm.203 14.377a.204.204 0 0 1-.203.203H7.14a.6.6 0 0 0-.397.147l-3.526 3.045a.203.203 0 0 1-.33-.155V5.52a.204.204 0 0 1 .203-.203h17.82a.204.204 0 0 1 .203.203zm-5.265-8.1a.607.607 0 0 1-.607.607h-6.48a.608.608 0 0 1 0-1.215h6.48a.607.607 0 0 1 .607.607zm0 3.24a.607.607 0 0 1-.607.607h-6.48a.608.608 0 0 1 0-1.215h6.48a.607.607 0 0 1 .607.607z"/>',
    "duotone": '<path d="M21.72 5.52v12.96a.81.81 0 0 1-.81.81H7.14l-3.528 3.049a.81.81 0 0 1-1.332-.619V5.52a.81.81 0 0 1 .81-.81h17.82a.81.81 0 0 1 .81.81" opacity="0.2"/><path d="M20.91 3.9H3.09a1.62 1.62 0 0 0-1.62 1.62v16.2a1.61 1.61 0 0 0 .936 1.468 1.7 1.7 0 0 0 .684.152 1.6 1.6 0 0 0 1.038-.383l.01-.007 3.307-2.85h13.466a1.62 1.62 0 0 0 1.62-1.62V5.52a1.62 1.62 0 0 0-1.62-1.62zm0 14.58H7.14a.82.82 0 0 0-.529.198L3.09 21.72V5.52h17.82zm-12.96-8.1a.81.81 0 0 1 .81-.81h6.48a.81.81 0 0 1 0 1.62H8.76a.81.81 0 0 1-.81-.81m0 3.24a.81.81 0 0 1 .81-.81h6.48a.81.81 0 1 1 0 1.62H8.76a.81.81 0 0 1-.81-.81"/>'
  },
  tags: ["comment", "editing"]
};
var copyIcon = {
  name: "copy",
  content: '<path d="M20.91 2.483H7.95a.607.607 0 0 0-.607.607v4.253H3.09a.607.607 0 0 0-.607.607v12.96a.607.607 0 0 0 .607.607h12.96a.607.607 0 0 0 .607-.607v-4.253h4.253a.607.607 0 0 0 .607-.607V3.09a.607.607 0 0 0-.607-.607m-5.467 17.82H3.697V8.558h11.746zm4.86-4.86h-3.645V7.95a.607.607 0 0 0-.607-.607H8.558V3.697h11.745z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M20.91 2.28H7.95a.81.81 0 0 0-.81.81v4.05H3.09a.81.81 0 0 0-.81.81v12.96a.81.81 0 0 0 .81.81h12.96a.81.81 0 0 0 .81-.81v-4.05h4.05a.81.81 0 0 0 .81-.81V3.09a.81.81 0 0 0-.81-.81m-.81 12.96h-3.24V7.95a.81.81 0 0 0-.81-.81H8.76V3.9H20.1z"/>',
    "outline": '<path d="M20.91 2.483H7.95a.607.607 0 0 0-.607.607v4.253H3.09a.607.607 0 0 0-.607.607v12.96a.607.607 0 0 0 .607.607h12.96a.607.607 0 0 0 .607-.607v-4.253h4.253a.607.607 0 0 0 .607-.607V3.09a.607.607 0 0 0-.607-.607m-5.467 17.82H3.697V8.558h11.746zm4.86-4.86h-3.645V7.95a.607.607 0 0 0-.607-.607H8.558V3.697h11.745z"/>',
    "duotone": '<path d="M20.91 3.09v12.96h-4.86v-8.1h-8.1V3.09z" opacity="0.2"/><path d="M20.91 2.28H7.95a.81.81 0 0 0-.81.81v4.05H3.09a.81.81 0 0 0-.81.81v12.96a.81.81 0 0 0 .81.81h12.96a.81.81 0 0 0 .81-.81v-4.05h4.05a.81.81 0 0 0 .81-.81V3.09a.81.81 0 0 0-.81-.81M15.24 20.1H3.9V8.76h11.34zm4.86-4.86h-3.24V7.95a.81.81 0 0 0-.81-.81H8.76V3.9H20.1z"/>'
  },
  tags: ["duplicated", "copied", "clipboard"]
};
var dollarIcon = {
  name: "dollar",
  content: '<path d="M14.43 11.393h-1.823V4.507h1.013a3.444 3.444 0 0 1 3.443 3.443.607.607 0 0 0 1.214 0 4.663 4.663 0 0 0-4.657-4.657h-1.013V1.47a.608.608 0 0 0-1.215 0v1.823h-1.013a4.658 4.658 0 0 0 0 9.315h1.013v6.886H9.569a3.444 3.444 0 0 1-3.443-3.443.608.608 0 0 0-1.216 0 4.663 4.663 0 0 0 4.658 4.657h1.822v1.823a.608.608 0 0 0 1.216 0v-1.823h1.823a4.657 4.657 0 0 0 0-9.314zm-4.05 0a3.443 3.443 0 0 1 0-6.886h1.013v6.886zm4.05 8.1h-1.823v-6.886h1.823a3.443 3.443 0 0 1 0 6.886"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M15.24 14.43a1.62 1.62 0 0 1-1.62 1.62h-.81v-3.24h.81a1.62 1.62 0 0 1 1.62 1.62M22.53 12A10.53 10.53 0 1 1 12 1.47 10.54 10.54 0 0 1 22.53 12m-5.67 2.43a3.24 3.24 0 0 0-3.24-3.24h-.81V7.95h.406a1.62 1.62 0 0 1 1.62 1.62.81.81 0 0 0 1.62 0 3.24 3.24 0 0 0-3.24-3.24h-.406v-.81a.81.81 0 0 0-1.62 0v.81h-.406a3.24 3.24 0 0 0 0 6.48h.406v3.24h-.81a1.62 1.62 0 0 1-1.62-1.62.81.81 0 0 0-1.62 0 3.24 3.24 0 0 0 3.24 3.24h.81v.81a.81.81 0 0 0 1.62 0v-.81h.81a3.24 3.24 0 0 0 3.24-3.24M9.164 9.57a1.62 1.62 0 0 0 1.62 1.62h.406V7.95h-.406a1.62 1.62 0 0 0-1.62 1.62"/>',
    "outline": '<path d="M14.43 11.393h-1.823V4.507h1.013a3.444 3.444 0 0 1 3.443 3.443.607.607 0 0 0 1.214 0 4.663 4.663 0 0 0-4.657-4.657h-1.013V1.47a.608.608 0 0 0-1.215 0v1.823h-1.013a4.658 4.658 0 0 0 0 9.315h1.013v6.886H9.569a3.444 3.444 0 0 1-3.443-3.443.608.608 0 0 0-1.216 0 4.663 4.663 0 0 0 4.658 4.657h1.822v1.823a.608.608 0 0 0 1.216 0v-1.823h1.823a4.657 4.657 0 0 0 0-9.314zm-4.05 0a3.443 3.443 0 0 1 0-6.886h1.013v6.886zm4.05 8.1h-1.823v-6.886h1.823a3.443 3.443 0 0 1 0 6.886"/>',
    "duotone": '<path d="M18.48 16.05a4.05 4.05 0 0 1-4.05 4.05H12V12h2.43a4.05 4.05 0 0 1 4.05 4.05M10.38 3.9a4.05 4.05 0 0 0 0 8.1H12V3.9z" opacity="0.2"/><path d="M14.43 11.19h-1.62V4.71h.81a3.24 3.24 0 0 1 3.24 3.24.81.81 0 0 0 1.62 0 4.865 4.865 0 0 0-4.86-4.86h-.81V1.47a.81.81 0 0 0-1.62 0v1.62h-.81a4.86 4.86 0 0 0 0 9.72h.81v6.48H9.57a3.24 3.24 0 0 1-3.24-3.24.81.81 0 0 0-1.62 0 4.865 4.865 0 0 0 4.86 4.86h1.62v1.62a.81.81 0 0 0 1.62 0v-1.62h1.62a4.86 4.86 0 0 0 0-9.72m-4.05 0a3.24 3.24 0 0 1 0-6.48h.81v6.48zm4.05 8.1h-1.62v-6.48h1.62a3.24 3.24 0 0 1 0 6.48"/>'
  },
  tags: ["dollar", "editing", "money", "currency", "price", "payment"]
};
var downloadIcon = {
  name: "download",
  content: '<path d="M21.517 13.62v6.48a.607.607 0 0 1-.607.607H3.09a.607.607 0 0 1-.607-.607v-6.48a.608.608 0 0 1 1.215 0v5.873h16.606V13.62a.607.607 0 0 1 1.214 0zm-9.947.43a.607.607 0 0 0 .86 0L16.48 10a.607.607 0 0 0-.86-.86l-3.013 3.012V2.28a.608.608 0 0 0-1.215 0v9.872L8.378 9.14a.607.607 0 0 0-.859.86z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M21.72 13.62v6.48a.81.81 0 0 1-.81.81H3.09a.81.81 0 0 1-.81-.81v-6.48a.81.81 0 0 1 1.62 0v5.67h16.2v-5.67a.81.81 0 0 1 1.62 0m-10.294.574a.81.81 0 0 0 1.146 0l4.05-4.05a.81.81 0 0 0-.573-1.384h-3.24V2.28a.81.81 0 0 0-1.62 0v6.48h-3.24a.81.81 0 0 0-.574 1.384z"/>',
    "outline": '<path d="M21.517 13.62v6.48a.607.607 0 0 1-.607.607H3.09a.607.607 0 0 1-.607-.607v-6.48a.608.608 0 0 1 1.215 0v5.873h16.606V13.62a.607.607 0 0 1 1.214 0zm-9.947.43a.607.607 0 0 0 .86 0L16.48 10a.607.607 0 0 0-.86-.86l-3.013 3.012V2.28a.608.608 0 0 0-1.215 0v9.872L8.378 9.14a.607.607 0 0 0-.859.86z"/>',
    "duotone": '<path d="M20.91 3.9v16.2H3.09V3.9a1.62 1.62 0 0 1 1.62-1.62h14.58a1.62 1.62 0 0 1 1.62 1.62" opacity="0.2"/><path d="M21.72 13.62v6.48a.81.81 0 0 1-.81.81H3.09a.81.81 0 0 1-.81-.81v-6.48a.81.81 0 0 1 1.62 0v5.67h16.2v-5.67a.81.81 0 0 1 1.62 0m-10.294.574a.81.81 0 0 0 1.146 0l4.05-4.05a.81.81 0 0 0-1.146-1.146l-2.666 2.667V2.28a.81.81 0 0 0-1.62 0v9.385L8.524 8.998a.81.81 0 0 0-1.146 1.146z"/>'
  },
  tags: ["saved", "saving", "archived", "archiving", "archival", "downloaded", "downloading", "hard drive", "disk"]
};
var dropletSlashIcon = {
  name: "droplet-slash",
  content: '<path d="M4.35 2.686a.607.607 0 0 0-.899.81l2.4 2.64c-1.696 2.518-2.557 5.032-2.557 7.485a8.707 8.707 0 0 0 14.912 6.108l1.446 1.587a.607.607 0 0 0 .899-.819zM12 21.113a7.5 7.5 0 0 1-7.493-7.493c0-2.126.736-4.33 2.187-6.554l10.69 11.76A7.48 7.48 0 0 1 12 21.112zM8.294 4.009a.607.607 0 0 1-.02-.859A25 25 0 0 1 11.652.164a.61.61 0 0 1 .697 0 25.4 25.4 0 0 1 4.161 3.848c2.747 3.156 4.199 6.48 4.198 9.609a8.8 8.8 0 0 1-.312 2.316.61.61 0 0 1-.585.447.6.6 0 0 1-.161-.022.607.607 0 0 1-.425-.748 7.4 7.4 0 0 0 .269-1.993c0-6.037-5.974-11.03-7.493-12.203a26 26 0 0 0-2.847 2.57.607.607 0 0 1-.858.021z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M20.7 20.365a.81.81 0 1 1-1.199 1.09l-1.305-1.437a8.88 8.88 0 0 1-6.195 2.512c-4.86 0-8.858-3.942-8.91-8.797-.028-2.465.833-5.046 2.505-7.575L3.324 3.66a.833.833 0 0 1 .014-1.152.81.81 0 0 1 1.163.037zm-1.02-3.529a.406.406 0 0 0 .678-.128 8.9 8.9 0 0 0 .552-3.088c0-3.179-1.469-6.548-4.253-9.745a25.8 25.8 0 0 0-4.196-3.879.81.81 0 0 0-.93 0 25 25 0 0 0-3.665 3.296.41.41 0 0 0 0 .547z"/>',
    "outline": '<path d="M4.35 2.686a.607.607 0 0 0-.899.81l2.4 2.64c-1.696 2.518-2.557 5.032-2.557 7.485a8.707 8.707 0 0 0 14.912 6.108l1.446 1.587a.607.607 0 0 0 .899-.819zM12 21.113a7.5 7.5 0 0 1-7.493-7.493c0-2.126.736-4.33 2.187-6.554l10.69 11.76A7.48 7.48 0 0 1 12 21.112zM8.294 4.009a.607.607 0 0 1-.02-.859A25 25 0 0 1 11.652.164a.61.61 0 0 1 .697 0 25.4 25.4 0 0 1 4.161 3.848c2.747 3.156 4.199 6.48 4.198 9.609a8.8 8.8 0 0 1-.312 2.316.61.61 0 0 1-.585.447.6.6 0 0 1-.161-.022.607.607 0 0 1-.425-.748 7.4 7.4 0 0 0 .269-1.993c0-6.037-5.974-11.03-7.493-12.203a26 26 0 0 0-2.847 2.57.607.607 0 0 1-.858.021z"/>',
    "duotone": '<path d="M20.1 13.62a8.1 8.1 0 0 1-16.2 0C3.9 6.33 12 .66 12 .66s8.1 5.67 8.1 12.96" opacity="0.2"/><path d="M4.5 2.545a.81.81 0 1 0-1.199 1.09l2.292 2.522C3.932 8.659 3.09 11.168 3.09 13.62a8.91 8.91 0 0 0 15.108 6.401l1.303 1.434a.81.81 0 1 0 1.199-1.09zm7.501 18.365a7.296 7.296 0 0 1-7.29-7.29c0-2.018.677-4.108 2.011-6.223L17.107 18.82a7.27 7.27 0 0 1-5.106 2.089zM8.154 4.154a.81.81 0 0 1-.028-1.144 25 25 0 0 1 3.411-3.012.81.81 0 0 1 .93 0c.346.241 8.446 5.999 8.445 13.623a8.9 8.9 0 0 1-.319 2.369.81.81 0 0 1-.781.595.8.8 0 0 1-.217-.029.81.81 0 0 1-.567-.994 7.2 7.2 0 0 0 .263-1.941c0-5.796-5.617-10.631-7.29-11.947a25 25 0 0 0-2.699 2.453.81.81 0 0 1-1.148.029z"/>'
  },
  tags: ["droplet", "slash", "editing"]
};
var dropletSliderIcon = {
  name: "droplet-slider",
  content: '<path d="M16.508 4.007A25.4 25.4 0 0 0 12.348.16a.61.61 0 0 0-.697 0A25.4 25.4 0 0 0 7.49 4.007c-2.747 3.16-4.199 6.484-4.198 9.613a8.707 8.707 0 0 0 17.415 0c0-3.13-1.452-6.454-4.199-9.613m2.985 9.613a7 7 0 0 1-.07 1.013h-6.815v-2.026h6.828a10 10 0 0 1 .057 1.013m-1.54-5.467h-5.346V6.127h4.039a18 18 0 0 1 1.307 2.026m-5.346 10.935h4.507a7.46 7.46 0 0 1-4.507 2zm0-1.214v-2.026h6.547a7.6 7.6 0 0 1-.99 2.026zm0-6.48V9.368h5.944a12 12 0 0 1 .677 2.026zm3.067-6.48h-3.067V1.907a26 26 0 0 1 3.067 3.007M4.507 13.621c0-5.408 4.794-9.979 6.886-11.714v19.181a7.5 7.5 0 0 1-6.886-7.467"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M16.657 3.875a25.8 25.8 0 0 0-4.196-3.879.81.81 0 0 0-.93 0 25.8 25.8 0 0 0-4.189 3.879c-2.783 3.197-4.253 6.566-4.253 9.745a8.91 8.91 0 0 0 17.82 0c0-3.179-1.469-6.548-4.253-9.745zM4.71 13.62c0-5.795 5.616-10.631 7.29-11.947V20.91a7.296 7.296 0 0 1-7.29-7.29"/>',
    "outline": '<path d="M16.508 4.007A25.4 25.4 0 0 0 12.348.16a.61.61 0 0 0-.697 0A25.4 25.4 0 0 0 7.49 4.007c-2.747 3.16-4.199 6.484-4.198 9.613a8.707 8.707 0 0 0 17.415 0c0-3.13-1.452-6.454-4.199-9.613m2.985 9.613a7 7 0 0 1-.07 1.013h-6.815v-2.026h6.828a10 10 0 0 1 .057 1.013m-1.54-5.467h-5.346V6.127h4.039a18 18 0 0 1 1.307 2.026m-5.346 10.935h4.507a7.46 7.46 0 0 1-4.507 2zm0-1.214v-2.026h6.547a7.6 7.6 0 0 1-.99 2.026zm0-6.48V9.368h5.944a12 12 0 0 1 .677 2.026zm3.067-6.48h-3.067V1.907a26 26 0 0 1 3.067 3.007M4.507 13.621c0-5.408 4.794-9.979 6.886-11.714v19.181a7.5 7.5 0 0 1-6.886-7.467"/>',
    "duotone": '<path d="M20.1 13.62a8.1 8.1 0 0 1-8.1 8.1V.66s8.1 5.67 8.1 12.96" opacity="0.2"/><path d="M16.657 3.875a25.8 25.8 0 0 0-4.196-3.879.81.81 0 0 0-.93 0 25.8 25.8 0 0 0-4.189 3.879c-2.783 3.197-4.253 6.566-4.253 9.745a8.91 8.91 0 0 0 17.82 0c0-3.179-1.469-6.548-4.253-9.745zM4.71 13.62c0-5.063 4.279-9.386 6.48-11.279v18.523a7.296 7.296 0 0 1-6.48-7.243zm8.1 7.243V2.34c2.201 1.892 6.48 6.217 6.48 11.279a7.296 7.296 0 0 1-6.48 7.243z"/>'
  },
  tags: ["droplet", "slider", "images", "range", "control", "adjust"]
};
var exclamationCircleIcon = {
  name: "exclamation-circle",
  content: '<path d="M12 1.673A10.327 10.327 0 1 0 22.327 12 10.34 10.34 0 0 0 12 1.673m0 19.44A9.113 9.113 0 1 1 21.113 12 9.12 9.12 0 0 1 12 21.113m-.607-8.303V7.14a.608.608 0 0 1 1.215 0v5.67a.607.607 0 0 1-1.214 0zm1.62 3.644A1.013 1.013 0 1 1 12 15.442a1.013 1.013 0 0 1 1.013 1.012"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M12 1.47A10.53 10.53 0 1 0 22.53 12 10.54 10.54 0 0 0 12 1.47m-.81 5.67a.81.81 0 0 1 1.62 0v5.67a.81.81 0 0 1-1.62 0zM12 17.67a1.216 1.216 0 1 1 1.214-1.214A1.216 1.216 0 0 1 12 17.67"/>',
    "outline": '<path d="M12 1.673A10.327 10.327 0 1 0 22.327 12 10.34 10.34 0 0 0 12 1.673m0 19.44A9.113 9.113 0 1 1 21.113 12 9.12 9.12 0 0 1 12 21.113m-.607-8.303V7.14a.608.608 0 0 1 1.215 0v5.67a.607.607 0 0 1-1.214 0zm1.62 3.644A1.013 1.013 0 1 1 12 15.442a1.013 1.013 0 0 1 1.013 1.012"/>',
    "duotone": '<path d="M21.72 12A9.72 9.72 0 1 1 12 2.28 9.72 9.72 0 0 1 21.72 12" opacity="0.2"/><path d="M12 1.47A10.53 10.53 0 1 0 22.53 12 10.54 10.54 0 0 0 12 1.47m0 19.44A8.91 8.91 0 1 1 20.91 12 8.92 8.92 0 0 1 12 20.91m-.81-8.1V7.14a.81.81 0 0 1 1.62 0v5.67a.81.81 0 0 1-1.62 0m2.026 3.644a1.216 1.216 0 1 1-1.215-1.215 1.216 1.216 0 0 1 1.215 1.215"/>'
  },
  tags: ["exclamation", "circle", "notifications"]
};
var eyeSlashIcon = {
  name: "eye-slash",
  content: '<path d="M4.35 2.686a.607.607 0 0 0-.899.81l2.115 2.329C1.791 8.043.177 11.596.106 11.755a.6.6 0 0 0 0 .495c.035.078.877 1.946 2.757 3.826C4.609 17.82 7.608 19.898 12 19.898a12.6 12.6 0 0 0 5.323-1.138l2.329 2.56a.607.607 0 0 0 .899-.818zm4.922 7.221 4.557 5.014a3.443 3.443 0 0 1-4.557-5.014M12 18.684c-3.178 0-5.952-1.157-8.246-3.436a13.7 13.7 0 0 1-2.416-3.247c.434-.83 2.035-3.562 5.063-5.256l2.045 2.249a4.657 4.657 0 0 0 6.211 6.833l1.803 1.985a11.5 11.5 0 0 1-4.46.872m.648-10.064a.607.607 0 0 1 .228-1.194 4.68 4.68 0 0 1 3.762 4.137.607.607 0 0 1-.548.661h-.057a.607.607 0 0 1-.607-.552 3.46 3.46 0 0 0-2.777-3.054zm11.246 3.63c-.042.094-1.05 2.329-3.327 4.365a.607.607 0 1 1-.81-.905 13.6 13.6 0 0 0 2.905-3.709 13.7 13.7 0 0 0-2.416-3.247C17.951 6.475 15.176 5.318 12 5.318a12 12 0 0 0-1.993.162.607.607 0 1 1-.203-1.197A13 13 0 0 1 12 4.104c4.392 0 7.391 2.08 9.137 3.823 1.882 1.882 2.724 3.746 2.757 3.828a.6.6 0 0 1 0 .495"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M8.828 4.9a.406.406 0 0 1 .21-.669 13.2 13.2 0 0 1 2.961-.331c3.532 0 6.74 1.343 9.281 3.883 1.907 1.907 2.764 3.809 2.799 3.889a.82.82 0 0 1 0 .658c-.036.08-.893 1.981-2.799 3.888q-.433.431-.891.817a.41.41 0 0 1-.561-.036zm11.871 15.465a.81.81 0 1 1-1.199 1.09L17.264 19a12.8 12.8 0 0 1-5.265 1.1c-3.532 0-6.74-1.343-9.281-3.882C.811 14.311-.05 12.41-.082 12.33a.82.82 0 0 1 0-.658c.031-.077.893-1.982 2.8-3.889A13.7 13.7 0 0 1 5.249 5.78l-1.95-2.145a.81.81 0 1 1 1.199-1.09zm-6.631-4.885L8.732 9.607a4.05 4.05 0 0 0 5.336 5.873"/>',
    "outline": '<path d="M4.35 2.686a.607.607 0 0 0-.899.81l2.115 2.329C1.791 8.043.177 11.596.106 11.755a.6.6 0 0 0 0 .495c.035.078.877 1.946 2.757 3.826C4.609 17.82 7.608 19.898 12 19.898a12.6 12.6 0 0 0 5.323-1.138l2.329 2.56a.607.607 0 0 0 .899-.818zm4.922 7.221 4.557 5.014a3.443 3.443 0 0 1-4.557-5.014M12 18.684c-3.178 0-5.952-1.157-8.246-3.436a13.7 13.7 0 0 1-2.416-3.247c.434-.83 2.035-3.562 5.063-5.256l2.045 2.249a4.657 4.657 0 0 0 6.211 6.833l1.803 1.985a11.5 11.5 0 0 1-4.46.872m.648-10.064a.607.607 0 0 1 .228-1.194 4.68 4.68 0 0 1 3.762 4.137.607.607 0 0 1-.548.661h-.057a.607.607 0 0 1-.607-.552 3.46 3.46 0 0 0-2.777-3.054zm11.246 3.63c-.042.094-1.05 2.329-3.327 4.365a.607.607 0 1 1-.81-.905 13.6 13.6 0 0 0 2.905-3.709 13.7 13.7 0 0 0-2.416-3.247C17.951 6.475 15.176 5.318 12 5.318a12 12 0 0 0-1.993.162.607.607 0 1 1-.203-1.197A13 13 0 0 1 12 4.104c4.392 0 7.391 2.08 9.137 3.823 1.882 1.882 2.724 3.746 2.757 3.828a.6.6 0 0 1 0 .495"/>',
    "duotone": '<path d="M12 4.71C3.9 4.71.66 12 .66 12S3.9 19.29 12 19.29 23.34 12 23.34 12 20.1 4.71 12 4.71m0 11.34A4.05 4.05 0 1 1 16.05 12 4.05 4.05 0 0 1 12 16.05" opacity="0.2"/><path d="M4.5 2.545a.81.81 0 1 0-1.199 1.09l1.948 2.143C1.571 8.035-.009 11.514-.08 11.671a.82.82 0 0 0 0 .658c.036.08.893 1.981 2.799 3.888C5.26 18.756 8.468 20.099 12 20.099a12.8 12.8 0 0 0 5.272-1.097l2.227 2.452a.81.81 0 1 0 1.199-1.09zm4.792 7.679 4.219 4.643a3.24 3.24 0 0 1-4.219-4.643M12 18.48c-3.116 0-5.839-1.133-8.093-3.366A13.4 13.4 0 0 1 1.571 12c.475-.89 1.991-3.38 4.794-4.999L8.188 9a4.86 4.86 0 0 0 6.445 7.087l1.491 1.641A11.4 11.4 0 0 1 12 18.48m.607-9.662a.81.81 0 0 1 .304-1.592 4.87 4.87 0 0 1 3.925 4.318.81.81 0 0 1-.731.882h-.075a.81.81 0 0 1-.81-.736 3.25 3.25 0 0 0-2.613-2.872m11.47 3.512c-.042.095-1.068 2.366-3.378 4.435a.81.81 0 1 1-1.08-1.207A13.4 13.4 0 0 0 22.434 12a13.4 13.4 0 0 0-2.341-3.115C17.839 6.653 15.116 5.52 12 5.52a12 12 0 0 0-1.96.158.81.81 0 1 1-.267-1.597A13.6 13.6 0 0 1 12 3.9c3.532 0 6.74 1.343 9.281 3.883 1.907 1.907 2.764 3.809 2.799 3.889a.82.82 0 0 1 0 .658z"/>'
  },
  tags: ["visible", "hidden", "show", "hide", "visibility", "view", "invisible", "eyelashes", "disabled", "private"]
};
var eyeIcon = {
  name: "eye",
  content: '<path d="M23.894 11.754c-.035-.079-.877-1.948-2.757-3.828C19.391 6.182 16.392 4.103 12 4.103S4.609 6.182 2.863 7.926C.981 9.808.139 11.672.106 11.754a.6.6 0 0 0 0 .494c.035.078.877 1.946 2.757 3.827 1.746 1.744 4.745 3.822 9.137 3.822s7.391-2.078 9.137-3.822c1.882-1.882 2.724-3.746 2.757-3.827a.6.6 0 0 0 0-.494M12 18.683c-3.178 0-5.952-1.157-8.246-3.436A13.7 13.7 0 0 1 1.338 12a13.7 13.7 0 0 1 2.416-3.246C6.049 6.474 8.824 5.317 12 5.317s5.952 1.157 8.246 3.437A13.7 13.7 0 0 1 22.662 12c-.644 1.236-3.878 6.683-10.663 6.683zm0-11.34A4.657 4.657 0 1 0 16.657 12 4.663 4.663 0 0 0 12 7.343m0 8.1A3.443 3.443 0 1 1 15.443 12 3.444 3.444 0 0 1 12 15.443"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M24.08 11.672c-.036-.08-.893-1.982-2.799-3.889C18.74 5.243 15.532 3.9 12 3.9S5.26 5.243 2.719 7.783C.812 9.69-.049 11.595-.08 11.672a.82.82 0 0 0 0 .658c.036.08.893 1.981 2.799 3.888C5.26 18.757 8.468 20.1 12 20.1s6.74-1.343 9.281-3.882c1.907-1.907 2.764-3.808 2.799-3.888a.82.82 0 0 0 0-.658M12 16.05A4.05 4.05 0 1 1 16.05 12 4.05 4.05 0 0 1 12 16.05"/>',
    "outline": '<path d="M23.894 11.754c-.035-.079-.877-1.948-2.757-3.828C19.391 6.182 16.392 4.103 12 4.103S4.609 6.182 2.863 7.926C.981 9.808.139 11.672.106 11.754a.6.6 0 0 0 0 .494c.035.078.877 1.946 2.757 3.827 1.746 1.744 4.745 3.822 9.137 3.822s7.391-2.078 9.137-3.822c1.882-1.882 2.724-3.746 2.757-3.827a.6.6 0 0 0 0-.494M12 18.683c-3.178 0-5.952-1.157-8.246-3.436A13.7 13.7 0 0 1 1.338 12a13.7 13.7 0 0 1 2.416-3.246C6.049 6.474 8.824 5.317 12 5.317s5.952 1.157 8.246 3.437A13.7 13.7 0 0 1 22.662 12c-.644 1.236-3.878 6.683-10.663 6.683zm0-11.34A4.657 4.657 0 1 0 16.657 12 4.663 4.663 0 0 0 12 7.343m0 8.1A3.443 3.443 0 1 1 15.443 12 3.444 3.444 0 0 1 12 15.443"/>',
    "duotone": '<path d="M12 4.71C3.9 4.71.66 12 .66 12S3.9 19.29 12 19.29 23.34 12 23.34 12 20.1 4.71 12 4.71m0 11.34A4.05 4.05 0 1 1 16.05 12 4.05 4.05 0 0 1 12 16.05" opacity="0.2"/><path d="M24.08 11.672c-.036-.08-.893-1.982-2.799-3.889C18.74 5.243 15.532 3.9 12 3.9S5.26 5.243 2.719 7.783C.812 9.69-.049 11.595-.08 11.672a.82.82 0 0 0 0 .658c.036.08.893 1.981 2.799 3.888C5.26 18.757 8.468 20.1 12 20.1s6.74-1.343 9.281-3.882c1.907-1.907 2.764-3.808 2.799-3.888a.82.82 0 0 0 0-.658M12 18.48c-3.116 0-5.839-1.133-8.093-3.366A13.6 13.6 0 0 1 1.571 12a13.6 13.6 0 0 1 2.336-3.114C6.161 6.653 8.884 5.52 12 5.52s5.839 1.133 8.093 3.366A13.6 13.6 0 0 1 22.434 12c-.73 1.363-3.911 6.48-10.434 6.48m0-11.34A4.86 4.86 0 1 0 16.86 12 4.865 4.865 0 0 0 12 7.14m0 8.1A3.24 3.24 0 1 1 15.24 12 3.24 3.24 0 0 1 12 15.24"/>'
  },
  tags: ["visible", "hidden", "show", "hide", "visibility", "view"]
};
var fileAudioIcon = {
  name: "file-audio",
  content: '<path d="M8.993 12.25a.61.61 0 0 0-.663.132l-2.252 2.252H3.9a.607.607 0 0 0-.607.607v4.05a.607.607 0 0 0 .607.607h2.178l2.252 2.253a.607.607 0 0 0 1.037-.43v-8.91a.61.61 0 0 0-.374-.56zm-.84 7.999L6.76 18.862a.6.6 0 0 0-.43-.178H4.507v-2.836H6.33a.6.6 0 0 0 .43-.178l1.393-1.392zm6.074-2.983a3.9 3.9 0 0 1-1.923 3.36.607.607 0 0 1-.608-1.049 2.683 2.683 0 0 0 0-4.621.607.607 0 0 1 .608-1.049 3.9 3.9 0 0 1 1.923 3.36zm6.303-9.744-5.67-5.67a.6.6 0 0 0-.43-.179H4.71A1.416 1.416 0 0 0 3.293 3.09v8.1a.608.608 0 0 0 1.215 0v-8.1a.204.204 0 0 1 .203-.203h9.113V7.95a.607.607 0 0 0 .607.607h5.063V20.91a.204.204 0 0 1-.203.203h-3.24a.607.607 0 0 0 0 1.214h3.24a1.416 1.416 0 0 0 1.417-1.417V7.95a.6.6 0 0 0-.177-.43zm-5.492-3.776 3.597 3.597h-3.597z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M14.43 17.266a4.1 4.1 0 0 1-2.026 3.535.81.81 0 0 1-.81-1.399 2.48 2.48 0 0 0 0-4.271.81.81 0 0 1 .81-1.399 4.1 4.1 0 0 1 2.026 3.535zm-5.36-5.204a.81.81 0 0 0-.884.176l-2.192 2.193H3.899a.81.81 0 0 0-.81.81v4.05a.81.81 0 0 0 .81.81h2.095l2.192 2.194a.81.81 0 0 0 1.384-.574v-8.91a.81.81 0 0 0-.5-.749m11.84-4.111v12.96a1.62 1.62 0 0 1-1.62 1.62h-3.24a.81.81 0 0 1 0-1.62h3.24V8.761h-4.86a.81.81 0 0 1-.81-.81v-4.86H4.71v8.1a.81.81 0 0 1-1.62 0v-8.1a1.62 1.62 0 0 1 1.62-1.62h9.72a.82.82 0 0 1 .574.237l5.67 5.67a.82.82 0 0 1 .236.573m-5.67-.81h2.905L15.24 4.236z"/>',
    "outline": '<path d="M8.993 12.25a.61.61 0 0 0-.663.132l-2.252 2.252H3.9a.607.607 0 0 0-.607.607v4.05a.607.607 0 0 0 .607.607h2.178l2.252 2.253a.607.607 0 0 0 1.037-.43v-8.91a.61.61 0 0 0-.374-.56zm-.84 7.999L6.76 18.862a.6.6 0 0 0-.43-.178H4.507v-2.836H6.33a.6.6 0 0 0 .43-.178l1.393-1.392zm6.074-2.983a3.9 3.9 0 0 1-1.923 3.36.607.607 0 0 1-.608-1.049 2.683 2.683 0 0 0 0-4.621.607.607 0 0 1 .608-1.049 3.9 3.9 0 0 1 1.923 3.36zm6.303-9.744-5.67-5.67a.6.6 0 0 0-.43-.179H4.71A1.416 1.416 0 0 0 3.293 3.09v8.1a.608.608 0 0 0 1.215 0v-8.1a.204.204 0 0 1 .203-.203h9.113V7.95a.607.607 0 0 0 .607.607h5.063V20.91a.204.204 0 0 1-.203.203h-3.24a.607.607 0 0 0 0 1.214h3.24a1.416 1.416 0 0 0 1.417-1.417V7.95a.6.6 0 0 0-.177-.43zm-5.492-3.776 3.597 3.597h-3.597z"/>',
    "duotone": '<path d="m6.33 15.24 2.43-2.43v8.91l-2.43-2.43H3.9v-4.05zm8.1-12.96v5.67h5.67z" opacity="0.2"/><path d="M9.07 12.061a.81.81 0 0 0-.884.175L5.994 14.43H3.899a.81.81 0 0 0-.81.81v4.05a.81.81 0 0 0 .81.81h2.095l2.192 2.194a.81.81 0 0 0 1.384-.574v-8.91a.81.81 0 0 0-.5-.749m-1.12 7.703-1.046-1.048a.82.82 0 0 0-.574-.236H4.71v-2.43h1.62a.82.82 0 0 0 .574-.236l1.046-1.048zm6.48-2.5a4.1 4.1 0 0 1-2.026 3.536.81.81 0 0 1-.81-1.4 2.48 2.48 0 0 0 0-4.27.81.81 0 0 1 .81-1.4 4.1 4.1 0 0 1 2.026 3.536zm6.244-9.888-5.67-5.67a.82.82 0 0 0-.574-.236H4.71a1.62 1.62 0 0 0-1.62 1.62v8.1a.81.81 0 0 0 1.62 0v-8.1h8.91v4.86a.81.81 0 0 0 .81.81h4.86v12.15h-3.24a.81.81 0 0 0 0 1.62h3.24a1.62 1.62 0 0 0 1.62-1.62V7.95a.82.82 0 0 0-.236-.574M15.24 4.235l2.905 2.905H15.24z"/>'
  },
  tags: ["documents", "music", "sound"]
};
var fileCsvIcon = {
  name: "file-csv",
  content: '<path d="M3.697 17.266c0 1.228.817 2.227 1.823 2.227a1.64 1.64 0 0 0 1.182-.534.607.607 0 0 1 .877.84 2.84 2.84 0 0 1-2.058.909c-1.675 0-3.037-1.544-3.037-3.442s1.363-3.443 3.037-3.443a2.84 2.84 0 0 1 2.058.911.607.607 0 0 1-.877.84 1.64 1.64 0 0 0-1.182-.537c-1.006 0-1.823.998-1.823 2.227zm8.207-.686c-1.099-.317-1.357-.475-1.316-.8a.67.67 0 0 1 .291-.515c.568-.384 1.788-.185 2.172-.085a.607.607 0 0 0 .31-1.175c-.203-.054-2.035-.506-3.16.251a1.88 1.88 0 0 0-.818 1.37c-.182 1.436 1.241 1.848 2.184 2.121 1.228.354 1.496.54 1.437.987a.7.7 0 0 1-.303.542c-.568.378-1.77.166-2.146.062a.607.607 0 0 0-.329 1.166 6 6 0 0 0 1.487.203c.556 0 1.169-.096 1.656-.419a1.92 1.92 0 0 0 .841-1.398c.204-1.585-1.307-2.022-2.306-2.311zm8.404-2.721a.607.607 0 0 0-.777.367l-1.455 4.067-1.454-4.066a.607.607 0 1 0-1.143.406l2.025 5.67a.607.607 0 0 0 1.144 0l2.026-5.67a.607.607 0 0 0-.37-.775zm.399-5.908v2.43a.607.607 0 1 1-1.214 0V8.558H14.43a.607.607 0 0 1-.607-.607V2.888H4.71a.204.204 0 0 0-.203.203v7.29a.608.608 0 1 1-1.215 0v-7.29a1.416 1.416 0 0 1 1.417-1.417h9.72a.6.6 0 0 1 .429.178l5.67 5.67a.6.6 0 0 1 .178.429zm-2.075-.607-3.595-3.596v3.596z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="m20.674 7.376-5.67-5.67a.82.82 0 0 0-.574-.236H4.71a1.62 1.62 0 0 0-1.62 1.62v7.696a.41.41 0 0 0 .404.405h17.01a.41.41 0 0 0 .405-.405V7.95a.82.82 0 0 0-.237-.574zm-6.244.574V3.494l4.456 4.456zM3.9 17.266c0 1.114.727 2.024 1.62 2.024a1.44 1.44 0 0 0 1.019-.456.83.83 0 0 1 1.104-.092.81.81 0 0 1 .083 1.195 3.05 3.05 0 0 1-2.206.972c-1.786 0-3.24-1.636-3.24-3.645s1.454-3.644 3.24-3.644a3.04 3.04 0 0 1 2.166.93.836.836 0 0 1 .074 1.123.81.81 0 0 1-1.204.039 1.44 1.44 0 0 0-1.035-.472c-.893 0-1.62.911-1.62 2.026zm10.511 1.651a2.11 2.11 0 0 1-.93 1.542c-.526.35-1.176.451-1.771.451a6.2 6.2 0 0 1-1.533-.203.81.81 0 1 1 .436-1.56c.444.121 1.513.274 1.98-.036.089-.06.185-.154.217-.398.036-.27-.072-.415-1.294-.768-.947-.274-2.531-.732-2.329-2.34a2.09 2.09 0 0 1 .911-1.513c1.199-.81 3.109-.335 3.324-.28a.81.81 0 0 1-.412 1.567c-.455-.119-1.542-.259-2.007.057a.46.46 0 0 0-.203.372c-.012.091-.014.11.113.192.234.151.653.271 1.058.388.991.287 2.668.775 2.441 2.529zm6.44-4.183-2.013 5.637a.81.81 0 0 1-1.526 0l-2.013-5.637a.83.83 0 0 1 .456-1.059.81.81 0 0 1 1.058.483l1.263 3.534 1.262-3.534a.81.81 0 0 1 1.058-.483.833.833 0 0 1 .456 1.059z"/>',
    "outline": '<path d="M3.697 17.266c0 1.228.817 2.227 1.823 2.227a1.64 1.64 0 0 0 1.182-.534.607.607 0 0 1 .877.84 2.84 2.84 0 0 1-2.058.909c-1.675 0-3.037-1.544-3.037-3.442s1.363-3.443 3.037-3.443a2.84 2.84 0 0 1 2.058.911.607.607 0 0 1-.877.84 1.64 1.64 0 0 0-1.182-.537c-1.006 0-1.823.998-1.823 2.227zm8.207-.686c-1.099-.317-1.357-.475-1.316-.8a.67.67 0 0 1 .291-.515c.568-.384 1.788-.185 2.172-.085a.607.607 0 0 0 .31-1.175c-.203-.054-2.035-.506-3.16.251a1.88 1.88 0 0 0-.818 1.37c-.182 1.436 1.241 1.848 2.184 2.121 1.228.354 1.496.54 1.437.987a.7.7 0 0 1-.303.542c-.568.378-1.77.166-2.146.062a.607.607 0 0 0-.329 1.166 6 6 0 0 0 1.487.203c.556 0 1.169-.096 1.656-.419a1.92 1.92 0 0 0 .841-1.398c.204-1.585-1.307-2.022-2.306-2.311zm8.404-2.721a.607.607 0 0 0-.777.367l-1.455 4.067-1.454-4.066a.607.607 0 1 0-1.143.406l2.025 5.67a.607.607 0 0 0 1.144 0l2.026-5.67a.607.607 0 0 0-.37-.775zm.399-5.908v2.43a.607.607 0 1 1-1.214 0V8.558H14.43a.607.607 0 0 1-.607-.607V2.888H4.71a.204.204 0 0 0-.203.203v7.29a.608.608 0 1 1-1.215 0v-7.29a1.416 1.416 0 0 1 1.417-1.417h9.72a.6.6 0 0 1 .429.178l5.67 5.67a.6.6 0 0 1 .178.429zm-2.075-.607-3.595-3.596v3.596z"/>',
    "duotone": '<path d="M20.1 7.95h-5.67V2.28z" opacity="0.2"/><path d="M3.9 17.266c0 1.114.727 2.024 1.62 2.024a1.44 1.44 0 0 0 1.034-.472.81.81 0 0 1 1.17 1.12 3.05 3.05 0 0 1-2.205.972c-1.787 0-3.24-1.636-3.24-3.644s1.453-3.644 3.24-3.645a3.05 3.05 0 0 1 2.205.972.81.81 0 0 1-1.17 1.12 1.44 1.44 0 0 0-1.034-.472c-.893 0-1.62.911-1.62 2.026zm8.059-.88c-.406-.118-.824-.238-1.058-.389-.126-.082-.125-.101-.114-.192a.47.47 0 0 1 .203-.372c.466-.316 1.553-.175 2.007-.056a.811.811 0 0 0 .419-1.567c-.215-.055-2.126-.528-3.325.279a2.09 2.09 0 0 0-.911 1.513c-.203 1.608 1.382 2.066 2.329 2.34 1.222.353 1.328.498 1.294.768-.031.244-.127.338-.217.399-.466.31-1.536.158-1.98.036a.811.811 0 0 0-.437 1.563 6.2 6.2 0 0 0 1.538.203c.589 0 1.246-.101 1.771-.451a2.11 2.11 0 0 0 .93-1.542c.222-1.753-1.45-2.242-2.451-2.531zm8.413-2.718a.81.81 0 0 0-1.035.49l-1.261 3.534-1.263-3.534a.81.81 0 0 0-1.526.544l2.025 5.67a.81.81 0 0 0 1.527 0l2.025-5.67a.81.81 0 0 0-.489-1.034zm.538-5.718v2.43a.81.81 0 0 1-1.62 0V8.76h-4.86a.81.81 0 0 1-.81-.81V3.09H4.71v7.29a.81.81 0 0 1-1.62 0V3.09a1.62 1.62 0 0 1 1.62-1.62h9.72a.82.82 0 0 1 .574.236l5.67 5.67a.82.82 0 0 1 .236.574m-2.765-.81L15.24 4.235V7.14z"/>'
  },
  tags: ["documents", "data"]
};
var fileDataIcon = {
  name: "file-data",
  content: '<path d="M3.3 20.911V3.09a1.407 1.407 0 0 1 1.41-1.41h9.72l.118.012c.115.023.222.08.307.164l5.669 5.67a.6.6 0 0 1 .176.424v12.961a1.412 1.412 0 0 1-1.41 1.41H4.71a1.41 1.41 0 0 1-1.41-1.41m1.2 0c0 .055.022.108.061.148a.21.21 0 0 0 .149.062h14.58c.056 0 .11-.023.149-.062a.21.21 0 0 0 .061-.148V8.198L14.182 2.88H4.71a.22.22 0 0 0-.149.061.22.22 0 0 0-.061.149z"/><path d="M13.83 2.28a.6.6 0 0 1 1.2 0v5.07h5.07a.6.6 0 0 1 0 1.2h-5.67a.6.6 0 0 1-.6-.6zM12 10.275c1.057 0 2.044.234 2.788.639.721.393 1.349 1.035 1.349 1.89v1.929l-.001.01.001.004v1.929c0 .855-.628 1.497-1.349 1.891-.744.405-1.731.638-2.788.638s-2.044-.233-2.788-.638c-.721-.394-1.349-1.036-1.349-1.891v-3.872c0-.855.628-1.497 1.349-1.89.744-.406 1.731-.639 2.788-.639m2.788 6.348c-.744.406-1.731.639-2.788.639s-2.044-.233-2.788-.639c-.051-.027-.099-.06-.149-.09v.143c0 .21.165.533.723.838.536.292 1.318.491 2.214.491s1.677-.199 2.213-.491c.558-.305.724-.628.724-.838v-.143c-.05.03-.098.063-.149.09m0-1.928c-.744.405-1.731.638-2.788.638s-2.044-.233-2.788-.638q-.075-.043-.149-.089v.127c0 .21.165.534.723.838.536.292 1.318.491 2.214.491s1.677-.199 2.213-.491c.558-.304.724-.628.724-.838v-.129c-.05.03-.098.063-.149.091M12 11.475c-.896 0-1.678.2-2.214.493-.558.304-.723.626-.723.836s.165.534.723.838c.536.293 1.318.491 2.214.491s1.677-.199 2.213-.491c.558-.304.724-.627.724-.838s-.166-.532-.724-.836c-.536-.292-1.318-.493-2.213-.493"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M3.3 20.911V3.09a1.407 1.407 0 0 1 1.41-1.41h9.72l.118.012c.115.023.222.08.307.164l5.669 5.67a.6.6 0 0 1 .176.424v12.961a1.412 1.412 0 0 1-1.41 1.41H4.71a1.41 1.41 0 0 1-1.41-1.41m1.2 0c0 .055.022.108.061.148a.21.21 0 0 0 .149.062h14.58c.056 0 .11-.023.149-.062a.21.21 0 0 0 .061-.148V8.198l-.848-.848-3.622-3.622-.848-.848H4.71a.22.22 0 0 0-.149.061.22.22 0 0 0-.061.149z"/><path d="M14.43 1.68a.6.6 0 0 0-.6.6v5.67a.6.6 0 0 0 .6.6h5.67a.6.6 0 0 0 0-1.2h-5.07V2.28a.6.6 0 0 0-.6-.6"/><path fill-rule="evenodd" d="m15.03 3.728 3.622 3.622H15.03z" clip-rule="evenodd"/><path d="M12 10.275c1.057 0 2.044.234 2.788.639.721.393 1.349 1.035 1.349 1.89v1.929l-.001.01.001.004v1.929c0 .855-.628 1.497-1.349 1.891-.744.405-1.731.638-2.788.638s-2.044-.233-2.788-.638c-.721-.394-1.349-1.036-1.349-1.891v-3.872c0-.855.628-1.497 1.349-1.89.744-.406 1.731-.639 2.788-.639m2.788 6.348c-.744.406-1.731.639-2.788.639s-2.044-.233-2.788-.639c-.051-.027-.099-.06-.149-.09v.143c0 .21.165.533.723.838.536.292 1.318.491 2.214.491s1.677-.199 2.213-.491c.558-.305.724-.628.724-.838v-.143c-.05.03-.098.063-.149.09m0-1.928c-.744.405-1.731.638-2.788.638s-2.044-.233-2.788-.638q-.075-.043-.149-.089v.127c0 .21.165.534.723.838.536.292 1.318.491 2.214.491s1.677-.199 2.213-.491c.558-.304.724-.628.724-.838v-.129c-.05.03-.098.063-.149.091M12 11.475c-.896 0-1.678.2-2.214.493-.558.304-.723.626-.723.836s.165.534.723.838c.536.293 1.318.491 2.214.491s1.677-.199 2.213-.491c.558-.304.724-.627.724-.838s-.166-.532-.724-.836c-.536-.292-1.318-.493-2.213-.493"/>',
    "outline": '<path d="M3.3 20.911V3.09a1.407 1.407 0 0 1 1.41-1.41h9.72l.118.012c.115.023.222.08.307.164l5.669 5.67a.6.6 0 0 1 .176.424v12.961a1.412 1.412 0 0 1-1.41 1.41H4.71a1.41 1.41 0 0 1-1.41-1.41m1.2 0c0 .055.022.108.061.148a.21.21 0 0 0 .149.062h14.58c.056 0 .11-.023.149-.062a.21.21 0 0 0 .061-.148V8.198L14.182 2.88H4.71a.22.22 0 0 0-.149.061.22.22 0 0 0-.061.149z"/><path d="M13.83 2.28a.6.6 0 0 1 1.2 0v5.07h5.07a.6.6 0 0 1 0 1.2h-5.67a.6.6 0 0 1-.6-.6zM12 10.275c1.057 0 2.044.234 2.788.639.721.393 1.349 1.035 1.349 1.89v1.929l-.001.01.001.004v1.929c0 .855-.628 1.497-1.349 1.891-.744.405-1.731.638-2.788.638s-2.044-.233-2.788-.638c-.721-.394-1.349-1.036-1.349-1.891v-3.872c0-.855.628-1.497 1.349-1.89.744-.406 1.731-.639 2.788-.639m2.788 6.348c-.744.406-1.731.639-2.788.639s-2.044-.233-2.788-.639c-.051-.027-.099-.06-.149-.09v.143c0 .21.165.533.723.838.536.292 1.318.491 2.214.491s1.677-.199 2.213-.491c.558-.305.724-.628.724-.838v-.143c-.05.03-.098.063-.149.09m0-1.928c-.744.405-1.731.638-2.788.638s-2.044-.233-2.788-.638q-.075-.043-.149-.089v.127c0 .21.165.534.723.838.536.292 1.318.491 2.214.491s1.677-.199 2.213-.491c.558-.304.724-.628.724-.838v-.129c-.05.03-.098.063-.149.091M12 11.475c-.896 0-1.678.2-2.214.493-.558.304-.723.626-.723.836s.165.534.723.838c.536.293 1.318.491 2.214.491s1.677-.199 2.213-.491c.558-.304.724-.627.724-.838s-.166-.532-.724-.836c-.536-.292-1.318-.493-2.213-.493"/>',
    "duotone": '<path fill-opacity="0.2" d="M14.43 2.28v5.67h5.67"/><path d="M3.3 20.911V3.09a1.407 1.407 0 0 1 1.41-1.41h9.72l.118.012c.115.023.222.08.307.164l5.669 5.67a.6.6 0 0 1 .176.424v12.961a1.412 1.412 0 0 1-1.41 1.41H4.71a1.41 1.41 0 0 1-1.41-1.41m1.2 0c0 .055.022.108.061.148a.21.21 0 0 0 .149.062h14.58c.056 0 .11-.023.149-.062a.21.21 0 0 0 .061-.148V8.198L14.182 2.88H4.71a.22.22 0 0 0-.149.061.22.22 0 0 0-.061.149z"/><path d="M13.83 2.28a.6.6 0 0 1 1.2 0v5.07h5.07a.6.6 0 0 1 0 1.2h-5.67a.6.6 0 0 1-.6-.6zM12 10.275c1.057 0 2.044.234 2.788.639.721.393 1.349 1.035 1.349 1.89v1.929l-.001.01.001.004v1.929c0 .855-.628 1.497-1.349 1.891-.744.405-1.731.638-2.788.638s-2.044-.233-2.788-.638c-.721-.394-1.349-1.036-1.349-1.891v-3.872c0-.855.628-1.497 1.349-1.89.744-.406 1.731-.639 2.788-.639m2.788 6.348c-.744.406-1.731.639-2.788.639s-2.044-.233-2.788-.639c-.051-.027-.099-.06-.149-.09v.143c0 .21.165.533.723.838.536.292 1.318.491 2.214.491s1.677-.199 2.213-.491c.558-.305.724-.628.724-.838v-.143c-.05.03-.098.063-.149.09m0-1.928c-.744.405-1.731.638-2.788.638s-2.044-.233-2.788-.638q-.075-.043-.149-.089v.127c0 .21.165.534.723.838.536.292 1.318.491 2.214.491s1.677-.199 2.213-.491c.558-.304.724-.628.724-.838v-.129c-.05.03-.098.063-.149.091M12 11.475c-.896 0-1.678.2-2.214.493-.558.304-.723.626-.723.836s.165.534.723.838c.536.293 1.318.491 2.214.491s1.677-.199 2.213-.491c.558-.304.724-.627.724-.838s-.166-.532-.724-.836c-.536-.292-1.318-.493-2.213-.493"/>'
  },
  tags: ["file", "data", "files-and-folders", "document", "page", "paper"]
};
var fileExcelIcon = {
  name: "file-excel",
  content: '<path d="M14.633 20.1a.607.607 0 0 1-.607.607H11.19a.607.607 0 0 1-.607-.607v-5.67a.608.608 0 1 1 1.215 0v5.063h2.228a.607.607 0 0 1 .607.607m-6.33-6.166a.607.607 0 0 0-.846.141l-1.531 2.143-1.532-2.143a.608.608 0 1 0-.988.709l1.772 2.48-1.772 2.481a.608.608 0 1 0 .988.709l1.532-2.146 1.531 2.142a.6.6 0 0 0 .494.256.6.6 0 0 0 .353-.114.607.607 0 0 0 .142-.847l-1.773-2.482 1.773-2.481a.607.607 0 0 0-.142-.849zm10.076 2.644c-1.098-.317-1.357-.475-1.316-.8a.67.67 0 0 1 .291-.515c.568-.384 1.787-.185 2.171-.085a.607.607 0 0 0 .311-1.175c-.203-.055-2.035-.506-3.16.251a1.88 1.88 0 0 0-.818 1.37c-.182 1.436 1.241 1.848 2.184 2.12 1.228.354 1.495.54 1.438.988a.7.7 0 0 1-.304.541c-.568.378-1.77.166-2.146.063a.607.607 0 0 0-.325 1.167 6 6 0 0 0 1.487.203c.556 0 1.169-.096 1.656-.419a1.92 1.92 0 0 0 .841-1.398c.204-1.585-1.307-2.022-2.31-2.311M3.293 10.38V3.09A1.416 1.416 0 0 1 4.71 1.673h9.72a.6.6 0 0 1 .43.177l5.67 5.67a.6.6 0 0 1 .177.43v2.43a.607.607 0 1 1-1.214 0V8.557H14.43a.607.607 0 0 1-.607-.607V2.887H4.71a.204.204 0 0 0-.203.203v7.29a.608.608 0 1 1-1.215 0zm11.745-3.037h3.594l-3.594-3.597z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M3.496 11.19h17.01a.41.41 0 0 0 .404-.406V7.95a.82.82 0 0 0-.236-.574l-5.67-5.67a.82.82 0 0 0-.574-.236H4.71a1.62 1.62 0 0 0-1.62 1.62v7.696a.41.41 0 0 0 .406.404m10.935-7.694 4.456 4.455h-4.456zm.406 16.658a.83.83 0 0 1-.835.756h-2.81a.81.81 0 0 1-.81-.81v-5.642a.83.83 0 0 1 .756-.836.81.81 0 0 1 .864.81v4.86h2.026a.81.81 0 0 1 .81.862zm-6.226-5.252-1.688 2.364 1.688 2.364a.81.81 0 0 1-1.316.942l-1.368-1.913-1.366 1.913a.81.81 0 1 1-1.316-.942l1.687-2.364-1.688-2.364a.81.81 0 0 1 .232-1.161.83.83 0 0 1 1.102.241l1.35 1.89 1.366-1.912a.81.81 0 0 1 1.316.942zm12.28 4.015a2.11 2.11 0 0 1-.93 1.542c-.526.35-1.182.451-1.771.451a6 6 0 0 1-1.539-.203.81.81 0 0 1 .437-1.56c.444.122 1.513.275 1.979-.036.09-.061.186-.154.217-.398.035-.27-.073-.415-1.294-.768-.947-.274-2.531-.732-2.329-2.341a2.09 2.09 0 0 1 .906-1.514c1.199-.81 3.11-.335 3.324-.279a.81.81 0 0 1-.411 1.567c-.454-.119-1.541-.259-2.007.056a.46.46 0 0 0-.203.372c-.011.091-.013.109.114.192.234.151.653.271 1.059.389 1 .286 2.672.774 2.448 2.527z"/>',
    "outline": '<path d="M14.633 20.1a.607.607 0 0 1-.607.607H11.19a.607.607 0 0 1-.607-.607v-5.67a.608.608 0 1 1 1.215 0v5.063h2.228a.607.607 0 0 1 .607.607m-6.33-6.166a.607.607 0 0 0-.846.141l-1.531 2.143-1.532-2.143a.608.608 0 1 0-.988.709l1.772 2.48-1.772 2.481a.608.608 0 1 0 .988.709l1.532-2.146 1.531 2.142a.6.6 0 0 0 .494.256.6.6 0 0 0 .353-.114.607.607 0 0 0 .142-.847l-1.773-2.482 1.773-2.481a.607.607 0 0 0-.142-.849zm10.076 2.644c-1.098-.317-1.357-.475-1.316-.8a.67.67 0 0 1 .291-.515c.568-.384 1.787-.185 2.171-.085a.607.607 0 0 0 .311-1.175c-.203-.055-2.035-.506-3.16.251a1.88 1.88 0 0 0-.818 1.37c-.182 1.436 1.241 1.848 2.184 2.12 1.228.354 1.495.54 1.438.988a.7.7 0 0 1-.304.541c-.568.378-1.77.166-2.146.063a.607.607 0 0 0-.325 1.167 6 6 0 0 0 1.487.203c.556 0 1.169-.096 1.656-.419a1.92 1.92 0 0 0 .841-1.398c.204-1.585-1.307-2.022-2.31-2.311M3.293 10.38V3.09A1.416 1.416 0 0 1 4.71 1.673h9.72a.6.6 0 0 1 .43.177l5.67 5.67a.6.6 0 0 1 .177.43v2.43a.607.607 0 1 1-1.214 0V8.557H14.43a.607.607 0 0 1-.607-.607V2.887H4.71a.204.204 0 0 0-.203.203v7.29a.608.608 0 1 1-1.215 0zm11.745-3.037h3.594l-3.594-3.597z"/>',
    "duotone": '<path d="M20.1 7.95h-5.67V2.28z" opacity="0.2"/><path d="M14.836 20.1a.81.81 0 0 1-.81.81H11.19a.81.81 0 0 1-.81-.81v-5.67a.81.81 0 0 1 1.62 0v4.86h2.026a.81.81 0 0 1 .81.81m-6.414-6.329a.81.81 0 0 0-1.131.189l-1.365 1.912L4.56 13.96a.81.81 0 1 0-1.316.942l1.687 2.364-1.689 2.364a.81.81 0 0 0 1.317.942l1.368-1.913 1.365 1.913a.81.81 0 0 0 1.317-.942l-1.687-2.364 1.688-2.364a.81.81 0 0 0-.188-1.131m10.017 2.615c-.406-.118-.824-.238-1.058-.389-.126-.083-.125-.101-.114-.192a.46.46 0 0 1 .203-.372c.466-.316 1.553-.175 2.006-.056a.81.81 0 0 0 .412-1.567c-.214-.055-2.126-.528-3.324.279a2.09 2.09 0 0 0-.906 1.513c-.203 1.609 1.382 2.068 2.329 2.342 1.222.353 1.328.498 1.293.768-.031.244-.127.337-.217.398-.466.31-1.535.158-1.979.036a.812.812 0 0 0-.434 1.565 6 6 0 0 0 1.538.203c.589 0 1.246-.101 1.772-.452a2.11 2.11 0 0 0 .93-1.542c.223-1.753-1.448-2.242-2.451-2.53zM3.091 10.381v-7.29a1.62 1.62 0 0 1 1.62-1.62h9.72a.82.82 0 0 1 .574.237l5.67 5.67a.82.82 0 0 1 .236.573v2.43a.81.81 0 1 1-1.62 0v-1.62h-4.86a.81.81 0 0 1-.81-.81v-4.86h-8.91v7.29a.81.81 0 0 1-1.62 0m12.15-3.24h2.904l-2.904-2.905z"/>'
  },
  tags: ["file", "excel", "files-and-folders", "document", "page", "paper", "spreadsheet", "xls", "csv"]
};
var fileImageIcon = {
  name: "file-image",
  content: '<path d="M10.076 14.093a.607.607 0 0 0-1.012 0l-2.283 3.425-1.155-1.797a.607.607 0 0 0-1.023 0l-3.645 5.67a.607.607 0 0 0 .511.936h12.96a.607.607 0 0 0 .506-.944zm-7.492 7.02 2.53-3.939 1.146 1.782a.607.607 0 0 0 1.013.009l2.292-3.443 3.73 5.591zM20.53 7.522l-5.67-5.67a.6.6 0 0 0-.43-.178H4.71a1.416 1.416 0 0 0-1.417 1.417v8.91a.608.608 0 0 0 1.215 0v-8.91a.204.204 0 0 1 .203-.203h9.113v5.063a.607.607 0 0 0 .607.607h5.063v12.353a.204.204 0 0 1-.203.203h-.81a.607.607 0 0 0 0 1.214h.81a1.416 1.416 0 0 0 1.417-1.417V7.951a.6.6 0 0 0-.177-.429zm-5.493-3.776 3.597 3.597h-3.597z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M15.104 21.27a.81.81 0 0 1-.674 1.26H1.47a.81.81 0 0 1-.682-1.248l3.646-5.67a.81.81 0 0 1 1.363 0l.989 1.537 2.111-3.168a.81.81 0 0 1 1.349 0zM20.91 7.95v12.96a1.62 1.62 0 0 1-1.62 1.62h-.81a.81.81 0 0 1 0-1.62h.81V8.76h-4.86a.81.81 0 0 1-.81-.81V3.09H4.71V12a.81.81 0 0 1-1.62 0V3.09a1.62 1.62 0 0 1 1.62-1.62h9.72a.82.82 0 0 1 .574.236l5.67 5.67a.82.82 0 0 1 .236.574m-5.67-.81h2.905L15.24 4.235z"/>',
    "outline": '<path d="M10.076 14.093a.607.607 0 0 0-1.012 0l-2.283 3.425-1.155-1.797a.607.607 0 0 0-1.023 0l-3.645 5.67a.607.607 0 0 0 .511.936h12.96a.607.607 0 0 0 .506-.944zm-7.492 7.02 2.53-3.939 1.146 1.782a.607.607 0 0 0 1.013.009l2.292-3.443 3.73 5.591zM20.53 7.522l-5.67-5.67a.6.6 0 0 0-.43-.178H4.71a1.416 1.416 0 0 0-1.417 1.417v8.91a.608.608 0 0 0 1.215 0v-8.91a.204.204 0 0 1 .203-.203h9.113v5.063a.607.607 0 0 0 .607.607h5.063v12.353a.204.204 0 0 1-.203.203h-.81a.607.607 0 0 0 0 1.214h.81a1.416 1.416 0 0 0 1.417-1.417V7.951a.6.6 0 0 0-.177-.429zm-5.493-3.776 3.597 3.597h-3.597z"/>',
    "duotone": '<path d="m9.57 14.43 4.86 7.29H1.47l3.644-5.67 1.656 2.576zm4.86-12.15v5.67h5.67z" opacity="0.2"/><path d="M10.244 13.98a.81.81 0 0 0-1.348 0l-2.111 3.168-.989-1.537a.81.81 0 0 0-1.363 0l-3.646 5.67a.81.81 0 0 0 .682 1.248h12.96a.81.81 0 0 0 .674-1.26zm-7.291 6.93 2.161-3.362.976 1.519a.81.81 0 0 0 1.356.011l2.126-3.186 3.345 5.018zM20.672 7.376l-5.67-5.67a.82.82 0 0 0-.572-.236H4.71a1.62 1.62 0 0 0-1.62 1.62V12a.81.81 0 0 0 1.62 0V3.09h8.91v4.86a.81.81 0 0 0 .81.81h4.86v12.15h-.81a.81.81 0 0 0 0 1.62h.81a1.62 1.62 0 0 0 1.62-1.62V7.95a.82.82 0 0 0-.236-.574zM15.24 4.235l2.905 2.905H15.24z"/>'
  },
  tags: ["documents", "pictures", "photograph"]
};
var filePdfIcon = {
  name: "file-pdf",
  content: '<path d="M21.517 14.43a.607.607 0 0 1-.607.607h-2.633v2.026H20.1a.607.607 0 0 1 0 1.214h-1.823V20.1a.607.607 0 0 1-1.214 0v-5.67a.607.607 0 0 1 .607-.607h3.24a.607.607 0 0 1 .607.607M8.152 16.456a2.633 2.633 0 0 1-2.633 2.632H4.506v1.013a.608.608 0 0 1-1.216 0v-5.67a.607.607 0 0 1 .608-.607h1.62a2.633 2.633 0 0 1 2.632 2.633zm-1.216 0a1.416 1.416 0 0 0-1.417-1.418H4.506v2.836h1.013a1.416 1.416 0 0 0 1.417-1.417zm8.506.81a3.444 3.444 0 0 1-3.443 3.442h-1.62a.607.607 0 0 1-.607-.607v-5.67a.607.607 0 0 1 .607-.607h1.62a3.444 3.444 0 0 1 3.443 3.443zm-1.216 0a2.227 2.227 0 0 0-2.227-2.228h-1.013v4.456h1.013a2.227 2.227 0 0 0 2.227-2.227zM3.29 10.38V3.09a1.416 1.416 0 0 1 1.418-1.417h9.72a.6.6 0 0 1 .43.177l5.67 5.67a.6.6 0 0 1 .178.43v2.43a.607.607 0 0 1-1.214 0V8.557h-5.063a.607.607 0 0 1-.607-.607V2.887H4.709a.204.204 0 0 0-.203.203v7.29a.608.608 0 0 1-1.216 0m11.746-3.037h3.596l-3.596-3.597z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M3.496 11.19h17.01a.41.41 0 0 0 .404-.406V7.95a.82.82 0 0 0-.236-.574l-5.67-5.67a.82.82 0 0 0-.574-.236H4.71a1.62 1.62 0 0 0-1.62 1.62v7.696a.41.41 0 0 0 .406.404m10.935-7.694 4.456 4.455h-4.456zm7.29 10.988a.83.83 0 0 1-.835.756h-2.405v1.62h1.593a.83.83 0 0 1 .835.756.81.81 0 0 1-.81.864h-1.618v1.592a.83.83 0 0 1-.756.836.81.81 0 0 1-.864-.81V14.43a.81.81 0 0 1 .81-.81h3.24a.81.81 0 0 1 .81.864m-16.2-.864h-1.62a.81.81 0 0 0-.81.81v5.642a.83.83 0 0 0 .756.838.81.81 0 0 0 .864-.81v-.81h.749c1.543 0 2.849-1.207 2.894-2.749A2.836 2.836 0 0 0 5.52 13.62zm-.036 4.05h-.774v-2.43h.81a1.216 1.216 0 0 1 1.216 1.332 1.24 1.24 0 0 1-1.251 1.098zm6.516-4.05h-1.62a.81.81 0 0 0-.81.81v5.67a.81.81 0 0 0 .81.81h1.552c1.991 0 3.666-1.567 3.713-3.557a3.65 3.65 0 0 0-3.645-3.733m-.049 5.67h-.761v-4.05h.81a2.03 2.03 0 0 1 2.026 2.102c-.042 1.096-.978 1.948-2.075 1.948"/>',
    "outline": '<path d="M21.517 14.43a.607.607 0 0 1-.607.607h-2.633v2.026H20.1a.607.607 0 0 1 0 1.214h-1.823V20.1a.607.607 0 0 1-1.214 0v-5.67a.607.607 0 0 1 .607-.607h3.24a.607.607 0 0 1 .607.607M8.152 16.456a2.633 2.633 0 0 1-2.633 2.632H4.506v1.013a.608.608 0 0 1-1.216 0v-5.67a.607.607 0 0 1 .608-.607h1.62a2.633 2.633 0 0 1 2.632 2.633zm-1.216 0a1.416 1.416 0 0 0-1.417-1.418H4.506v2.836h1.013a1.416 1.416 0 0 0 1.417-1.417zm8.506.81a3.444 3.444 0 0 1-3.443 3.442h-1.62a.607.607 0 0 1-.607-.607v-5.67a.607.607 0 0 1 .607-.607h1.62a3.444 3.444 0 0 1 3.443 3.443zm-1.216 0a2.227 2.227 0 0 0-2.227-2.228h-1.013v4.456h1.013a2.227 2.227 0 0 0 2.227-2.227zM3.29 10.38V3.09a1.416 1.416 0 0 1 1.418-1.417h9.72a.6.6 0 0 1 .43.177l5.67 5.67a.6.6 0 0 1 .178.43v2.43a.607.607 0 0 1-1.214 0V8.557h-5.063a.607.607 0 0 1-.607-.607V2.887H4.709a.204.204 0 0 0-.203.203v7.29a.608.608 0 0 1-1.216 0m11.746-3.037h3.596l-3.596-3.597z"/>',
    "duotone": '<path d="M20.1 7.95h-5.67V2.28z" opacity="0.2"/><path d="M21.72 14.43a.81.81 0 0 1-.81.81h-2.43v1.62h1.62a.81.81 0 0 1 0 1.62h-1.62v1.62a.81.81 0 0 1-1.62 0v-5.67a.81.81 0 0 1 .81-.81h3.24a.81.81 0 0 1 .81.81M8.354 16.456A2.836 2.836 0 0 1 5.52 19.29h-.81v.81a.81.81 0 0 1-1.62 0v-5.67a.81.81 0 0 1 .81-.81h1.62a2.836 2.836 0 0 1 2.834 2.836m-1.62 0a1.216 1.216 0 0 0-1.215-1.216h-.81v2.43h.81a1.216 1.216 0 0 0 1.215-1.214m8.91.81A3.65 3.65 0 0 1 12 20.91h-1.62a.81.81 0 0 1-.81-.81v-5.67a.81.81 0 0 1 .81-.81H12a3.65 3.65 0 0 1 3.644 3.646m-1.62 0a2.03 2.03 0 0 0-2.025-2.026h-.81v4.05h.81a2.03 2.03 0 0 0 2.025-2.024M3.089 10.38V3.09a1.62 1.62 0 0 1 1.62-1.62h9.72a.82.82 0 0 1 .573.236l5.67 5.67a.82.82 0 0 1 .237.574v2.43a.81.81 0 0 1-1.62 0V8.76h-4.86a.81.81 0 0 1-.81-.81V3.09h-8.91v7.29a.81.81 0 0 1-1.62 0m12.15-3.24h2.905l-2.905-2.905z"/>'
  },
  tags: ["documents", "files", "acrobat"]
};
var fileProgrammingIcon = {
  name: "file-programming",
  content: '<path d="M17.29 14a.607.607 0 0 1 0 .86l-2.43 2.43a.607.607 0 0 1-.86-.86l2-2-2-2a.607.607 0 1 1 .86-.86zM10 11.57a.607.607 0 0 0-.86 0L6.71 14a.607.607 0 0 0 0 .86l2.43 2.43a.607.607 0 1 0 .86-.86l-2-2 2-2a.607.607 0 0 0 0-.858zm10.708-3.62v12.96a1.416 1.416 0 0 1-1.417 1.417H4.711a1.416 1.416 0 0 1-1.417-1.417V3.09a1.416 1.416 0 0 1 1.417-1.417h9.72a.6.6 0 0 1 .431.177l5.67 5.67a.6.6 0 0 1 .178.43zm-5.67-.607h3.597l-3.597-3.597zm4.456 13.567V8.557h-5.063a.607.607 0 0 1-.607-.607V2.887H4.711a.204.204 0 0 0-.203.203v17.82a.204.204 0 0 0 .203.203h14.58a.204.204 0 0 0 .203-.203"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="m20.674 7.376-5.67-5.67a.82.82 0 0 0-.574-.236H4.71a1.62 1.62 0 0 0-1.62 1.62v17.82a1.62 1.62 0 0 0 1.62 1.62h14.58a1.62 1.62 0 0 0 1.62-1.62V7.95a.82.82 0 0 0-.236-.574m-10.53 8.91a.81.81 0 0 1-1.146 1.146l-2.43-2.43a.81.81 0 0 1 0-1.146l2.43-2.43a.81.81 0 0 1 1.146 1.146l-1.858 1.857zm7.29-1.284-2.43 2.43a.81.81 0 0 1-1.146-1.146l1.857-1.856-1.857-1.856a.81.81 0 0 1 1.146-1.146l2.43 2.43a.81.81 0 0 1 0 1.146zM14.43 7.949V3.493l4.456 4.456z"/>',
    "outline": '<path d="M17.29 14a.607.607 0 0 1 0 .86l-2.43 2.43a.607.607 0 0 1-.86-.86l2-2-2-2a.607.607 0 1 1 .86-.86zM10 11.57a.607.607 0 0 0-.86 0L6.71 14a.607.607 0 0 0 0 .86l2.43 2.43a.607.607 0 1 0 .86-.86l-2-2 2-2a.607.607 0 0 0 0-.858zm10.708-3.62v12.96a1.416 1.416 0 0 1-1.417 1.417H4.711a1.416 1.416 0 0 1-1.417-1.417V3.09a1.416 1.416 0 0 1 1.417-1.417h9.72a.6.6 0 0 1 .431.177l5.67 5.67a.6.6 0 0 1 .178.43zm-5.67-.607h3.597l-3.597-3.597zm4.456 13.567V8.557h-5.063a.607.607 0 0 1-.607-.607V2.887H4.711a.204.204 0 0 0-.203.203v17.82a.204.204 0 0 0 .203.203h14.58a.204.204 0 0 0 .203-.203"/>',
    "duotone": '<path d="M20.1 7.95h-5.67V2.28z" opacity="0.2"/><path d="M17.434 13.856a.81.81 0 0 1 0 1.146l-2.43 2.43a.81.81 0 0 1-1.146-1.146l1.857-1.856-1.857-1.856a.81.81 0 0 1 1.146-1.146zm-7.29-2.43a.81.81 0 0 0-1.146 0l-2.43 2.43a.81.81 0 0 0 0 1.146l2.43 2.43a.81.81 0 0 0 1.146-1.146L8.286 14.43l1.858-1.856a.81.81 0 0 0 0-1.146zM20.91 7.95v12.96a1.62 1.62 0 0 1-1.62 1.62H4.71a1.62 1.62 0 0 1-1.62-1.62V3.09a1.62 1.62 0 0 1 1.62-1.62h9.72a.82.82 0 0 1 .574.236l5.67 5.67a.82.82 0 0 1 .236.574m-5.67-.81h2.905L15.24 4.235zm4.05 13.77V8.76h-4.86a.81.81 0 0 1-.81-.81V3.09H4.71v17.82z"/>'
  },
  tags: ["file", "programming", "files-and-folders", "document", "page", "paper"]
};
var fileTxtIcon = {
  name: "file-txt",
  content: '<path d="m20.53 7.52-5.67-5.67a.6.6 0 0 0-.43-.177H4.71A1.416 1.416 0 0 0 3.293 3.09v17.82a1.416 1.416 0 0 0 1.417 1.417h14.58a1.416 1.416 0 0 0 1.417-1.417V7.95a.6.6 0 0 0-.177-.43m-5.493-3.775 3.597 3.597h-3.597zm4.253 17.367H4.71a.204.204 0 0 1-.203-.203V3.089a.204.204 0 0 1 .203-.203h9.113v5.063a.607.607 0 0 0 .607.607h5.063v12.353a.204.204 0 0 1-.203.203m-3.443-8.303a.607.607 0 0 1-.607.607H8.76a.608.608 0 0 1 0-1.216h6.48a.607.607 0 0 1 .607.608zm0 3.24a.607.607 0 0 1-.607.607H8.76a.608.608 0 0 1 0-1.216h6.48a.607.607 0 0 1 .607.608z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="m20.674 7.376-5.67-5.67a.82.82 0 0 0-.574-.236H4.71a1.62 1.62 0 0 0-1.62 1.62v17.82a1.62 1.62 0 0 0 1.62 1.62h14.58a1.62 1.62 0 0 0 1.62-1.62V7.95a.82.82 0 0 0-.236-.574M15.24 16.86H8.76a.81.81 0 0 1 0-1.62h6.48a.81.81 0 0 1 0 1.62m0-3.24H8.76a.81.81 0 0 1 0-1.62h6.48a.81.81 0 0 1 0 1.62m-.81-5.67V3.494l4.456 4.456z"/>',
    "outline": '<path d="m20.53 7.52-5.67-5.67a.6.6 0 0 0-.43-.177H4.71A1.416 1.416 0 0 0 3.293 3.09v17.82a1.416 1.416 0 0 0 1.417 1.417h14.58a1.416 1.416 0 0 0 1.417-1.417V7.95a.6.6 0 0 0-.177-.43m-5.493-3.775 3.597 3.597h-3.597zm4.253 17.367H4.71a.204.204 0 0 1-.203-.203V3.089a.204.204 0 0 1 .203-.203h9.113v5.063a.607.607 0 0 0 .607.607h5.063v12.353a.204.204 0 0 1-.203.203m-3.443-8.303a.607.607 0 0 1-.607.607H8.76a.608.608 0 0 1 0-1.216h6.48a.607.607 0 0 1 .607.608zm0 3.24a.607.607 0 0 1-.607.607H8.76a.608.608 0 0 1 0-1.216h6.48a.607.607 0 0 1 .607.608z"/>',
    "duotone": '<path d="M20.1 7.95h-5.67V2.28z" opacity="0.2"/><path d="m20.674 7.376-5.67-5.67a.82.82 0 0 0-.574-.236H4.71a1.62 1.62 0 0 0-1.62 1.62v17.82a1.62 1.62 0 0 0 1.62 1.62h14.58a1.62 1.62 0 0 0 1.62-1.62V7.95a.82.82 0 0 0-.236-.574M15.24 4.235l2.905 2.905H15.24zm4.05 16.675H4.71V3.09h8.91v4.86a.81.81 0 0 0 .81.81h4.86zm-3.24-8.1a.81.81 0 0 1-.81.81H8.76a.81.81 0 0 1 0-1.62h6.48a.81.81 0 0 1 .81.81m0 3.24a.81.81 0 0 1-.81.81H8.76a.81.81 0 0 1 0-1.62h6.48a.81.81 0 0 1 .81.81"/>'
  },
  tags: ["documents"]
};
var fileVideoIcon = {
  name: "file-video",
  content: '<path d="m20.53 7.52-5.67-5.67a.6.6 0 0 0-.43-.177H4.71A1.416 1.416 0 0 0 3.293 3.09v7.29a.608.608 0 0 0 1.215 0V3.09a.204.204 0 0 1 .203-.203h9.113V7.95a.607.607 0 0 0 .607.607h5.063V20.91a.204.204 0 0 1-.203.203h-.81a.607.607 0 0 0 0 1.214h.81a1.416 1.416 0 0 0 1.417-1.417V7.95a.6.6 0 0 0-.177-.43zm-5.493-3.775 3.597 3.597h-3.597zm-.313 10.152a.6.6 0 0 0-.617.017l-2.31 1.444v-.119a1.416 1.416 0 0 0-1.417-1.417H3.9a1.416 1.416 0 0 0-1.417 1.417v4.86A1.416 1.416 0 0 0 3.9 21.516h6.48a1.416 1.416 0 0 0 1.417-1.417v-.119l2.31 1.444a.607.607 0 0 0 .93-.515v-6.48a.6.6 0 0 0-.313-.532m-4.142 6.202a.204.204 0 0 1-.203.203h-6.48a.204.204 0 0 1-.203-.203v-4.86a.204.204 0 0 1 .203-.203h6.48a.204.204 0 0 1 .203.203zm3.24-.287-2.026-1.266V16.79l2.026-1.266z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="m20.674 7.376-5.67-5.67a.82.82 0 0 0-.574-.236H4.71a1.62 1.62 0 0 0-1.62 1.62v7.29a.81.81 0 0 0 1.62 0V3.09h8.91v4.86a.81.81 0 0 0 .81.81h4.86v12.15h-.81a.81.81 0 0 0 0 1.62h.81a1.62 1.62 0 0 0 1.62-1.62V7.95a.82.82 0 0 0-.236-.574M15.24 4.235l2.905 2.905H15.24zm-.418 9.486a.82.82 0 0 0-.822.023l-2.019 1.261a1.62 1.62 0 0 0-1.601-1.385H3.9a1.62 1.62 0 0 0-1.62 1.62v4.86a1.62 1.62 0 0 0 1.62 1.62h6.48a1.62 1.62 0 0 0 1.601-1.385L14 21.596a.81.81 0 0 0 1.24-.686v-6.48a.82.82 0 0 0-.418-.709m-1.202 5.727L12 18.436v-1.533l1.62-1.013z"/>',
    "outline": '<path d="m20.53 7.52-5.67-5.67a.6.6 0 0 0-.43-.177H4.71A1.416 1.416 0 0 0 3.293 3.09v7.29a.608.608 0 0 0 1.215 0V3.09a.204.204 0 0 1 .203-.203h9.113V7.95a.607.607 0 0 0 .607.607h5.063V20.91a.204.204 0 0 1-.203.203h-.81a.607.607 0 0 0 0 1.214h.81a1.416 1.416 0 0 0 1.417-1.417V7.95a.6.6 0 0 0-.177-.43zm-5.493-3.775 3.597 3.597h-3.597zm-.313 10.152a.6.6 0 0 0-.617.017l-2.31 1.444v-.119a1.416 1.416 0 0 0-1.417-1.417H3.9a1.416 1.416 0 0 0-1.417 1.417v4.86A1.416 1.416 0 0 0 3.9 21.516h6.48a1.416 1.416 0 0 0 1.417-1.417v-.119l2.31 1.444a.607.607 0 0 0 .93-.515v-6.48a.6.6 0 0 0-.313-.532m-4.142 6.202a.204.204 0 0 1-.203.203h-6.48a.204.204 0 0 1-.203-.203v-4.86a.204.204 0 0 1 .203-.203h6.48a.204.204 0 0 1 .203.203zm3.24-.287-2.026-1.266V16.79l2.026-1.266z"/>',
    "duotone": '<path d="M20.1 7.95h-5.67V2.28zm-8.91 7.29a.81.81 0 0 0-.81-.81H3.9a.81.81 0 0 0-.81.81v4.86a.81.81 0 0 0 .81.81h6.48a.81.81 0 0 0 .81-.81v-1.214l3.24 2.025v-6.48l-3.24 2.026z" opacity="0.2"/><path d="m20.674 7.376-5.67-5.67a.82.82 0 0 0-.574-.236H4.71a1.62 1.62 0 0 0-1.62 1.62v7.29a.81.81 0 0 0 1.62 0V3.09h8.91v4.86a.81.81 0 0 0 .81.81h4.86v12.15h-.81a.81.81 0 0 0 0 1.62h.81a1.62 1.62 0 0 0 1.62-1.62V7.95a.82.82 0 0 0-.236-.574M15.24 4.235l2.905 2.905H15.24zm-.418 9.486a.82.82 0 0 0-.822.023l-2.019 1.261a1.62 1.62 0 0 0-1.601-1.385H3.9a1.62 1.62 0 0 0-1.62 1.62v4.86a1.62 1.62 0 0 0 1.62 1.62h6.48a1.62 1.62 0 0 0 1.601-1.385L14 21.596a.81.81 0 0 0 1.24-.686v-6.48a.82.82 0 0 0-.418-.709M10.38 20.1H3.9v-4.86h6.48zm3.24-.652L12 18.436v-1.533l1.62-1.013z"/>'
  },
  tags: ["documents", "movie"]
};
var fileZipIcon = {
  name: "file-zip",
  content: '<path d="M17.67 13.823h-1.62a.607.607 0 0 0-.607.607v5.67a.608.608 0 0 0 1.215 0v-1.013h1.013a2.633 2.633 0 0 0 0-5.264zm0 4.05h-1.013v-2.836h1.013a1.418 1.418 0 0 1 0 2.836m-5.063-3.443v5.67a.608.608 0 0 1-1.215 0v-5.67a.607.607 0 0 1 1.214 0zm-4.05 5.67a.607.607 0 0 1-.607.607H4.71a.607.607 0 0 1-.528-.911l2.72-4.759H4.709a.607.607 0 0 1 0-1.214h3.24a.607.607 0 0 1 .528.911l-2.721 4.759H7.95a.607.607 0 0 1 .607.607M20.53 7.52l-5.67-5.67a.6.6 0 0 0-.43-.177H4.71A1.416 1.416 0 0 0 3.293 3.09v7.29a.608.608 0 0 0 1.215 0V3.09a.204.204 0 0 1 .203-.203h9.113V7.95a.607.607 0 0 0 .607.607h5.063v1.823a.607.607 0 0 0 1.214 0V7.95a.6.6 0 0 0-.177-.43zm-5.493-.178V3.745l3.597 3.597z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M17.67 13.62h-1.62a.81.81 0 0 0-.81.81v5.642a.83.83 0 0 0 .756.836.81.81 0 0 0 .864-.81v-.81h.749c1.543 0 2.849-1.207 2.894-2.75a2.836 2.836 0 0 0-2.834-2.919zm-.036 4.05h-.774v-2.43h.81a1.216 1.216 0 0 1 1.214 1.332 1.24 1.24 0 0 1-1.25 1.098m-4.824-3.24v5.642a.83.83 0 0 1-.756.836.81.81 0 0 1-.864-.81v-5.642a.83.83 0 0 1 .756-.835.81.81 0 0 1 .864.808zm-4.05 5.724a.83.83 0 0 1-.838.756H4.733a.84.84 0 0 1-.607-.253.81.81 0 0 1-.12-.963l2.547-4.455H4.736a.83.83 0 0 1-.837-.756.81.81 0 0 1 .81-.864h3.217a.84.84 0 0 1 .607.253.81.81 0 0 1 .125.962l-2.552 4.455h1.843a.81.81 0 0 1 .81.864zM20.674 7.378l-5.67-5.67a.82.82 0 0 0-.574-.237H4.71a1.62 1.62 0 0 0-1.62 1.62v7.696a.41.41 0 0 0 .404.405h17.01a.41.41 0 0 0 .405-.405V7.951a.82.82 0 0 0-.237-.573zm-6.244.573V3.496l4.456 4.455z"/>',
    "outline": '<path d="M17.67 13.823h-1.62a.607.607 0 0 0-.607.607v5.67a.608.608 0 0 0 1.215 0v-1.013h1.013a2.633 2.633 0 0 0 0-5.264zm0 4.05h-1.013v-2.836h1.013a1.418 1.418 0 0 1 0 2.836m-5.063-3.443v5.67a.608.608 0 0 1-1.215 0v-5.67a.607.607 0 0 1 1.214 0zm-4.05 5.67a.607.607 0 0 1-.607.607H4.71a.607.607 0 0 1-.528-.911l2.72-4.759H4.709a.607.607 0 0 1 0-1.214h3.24a.607.607 0 0 1 .528.911l-2.721 4.759H7.95a.607.607 0 0 1 .607.607M20.53 7.52l-5.67-5.67a.6.6 0 0 0-.43-.177H4.71A1.416 1.416 0 0 0 3.293 3.09v7.29a.608.608 0 0 0 1.215 0V3.09a.204.204 0 0 1 .203-.203h9.113V7.95a.607.607 0 0 0 .607.607h5.063v1.823a.607.607 0 0 0 1.214 0V7.95a.6.6 0 0 0-.177-.43zm-5.493-.178V3.745l3.597 3.597z"/>',
    "duotone": '<path d="M20.1 7.95h-5.67V2.28z" opacity="0.2"/><path d="M17.67 13.62h-1.62a.81.81 0 0 0-.81.81v5.67a.81.81 0 0 0 1.62 0v-.81h.81a2.836 2.836 0 0 0 0-5.67m0 4.05h-.81v-2.43h.81a1.216 1.216 0 0 1 0 2.43m-4.86-3.24v5.67a.81.81 0 0 1-1.62 0v-5.67a.81.81 0 0 1 1.62 0M8.76 20.1a.81.81 0 0 1-.81.81H4.71a.81.81 0 0 1-.709-1.214l2.547-4.456H4.71a.81.81 0 0 1 0-1.62h3.24a.81.81 0 0 1 .709 1.214l-2.552 4.455H7.95a.81.81 0 0 1 .81.81zM20.674 7.376l-5.67-5.67a.82.82 0 0 0-.574-.236H4.71a1.62 1.62 0 0 0-1.62 1.62v7.29a.81.81 0 0 0 1.62 0V3.09h8.91v4.86a.81.81 0 0 0 .81.81h4.86v1.62a.81.81 0 0 0 1.62 0V7.95a.82.82 0 0 0-.236-.574M15.24 7.14V4.235l2.905 2.905z"/>'
  },
  tags: ["documents", "archive", "compression"]
};
var fileIcon = {
  name: "file",
  content: '<path d="m20.53 7.52-5.67-5.67a.6.6 0 0 0-.43-.177H4.71A1.416 1.416 0 0 0 3.293 3.09v17.82a1.416 1.416 0 0 0 1.417 1.417h14.58a1.416 1.416 0 0 0 1.417-1.417V7.95a.6.6 0 0 0-.177-.43m-5.493-3.775 3.597 3.597h-3.597zm4.253 17.367H4.71a.204.204 0 0 1-.203-.203V3.089a.204.204 0 0 1 .203-.203h9.113v5.063a.607.607 0 0 0 .607.607h5.063v12.353a.204.204 0 0 1-.203.203"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="m20.674 7.376-5.67-5.67a.82.82 0 0 0-.574-.236H4.71a1.62 1.62 0 0 0-1.62 1.62v17.82a1.62 1.62 0 0 0 1.62 1.62h14.58a1.62 1.62 0 0 0 1.62-1.62V7.95a.82.82 0 0 0-.236-.574m-6.244.574V3.494l4.456 4.456z"/>',
    "outline": '<path d="m20.53 7.52-5.67-5.67a.6.6 0 0 0-.43-.177H4.71A1.416 1.416 0 0 0 3.293 3.09v17.82a1.416 1.416 0 0 0 1.417 1.417h14.58a1.416 1.416 0 0 0 1.417-1.417V7.95a.6.6 0 0 0-.177-.43m-5.493-3.775 3.597 3.597h-3.597zm4.253 17.367H4.71a.204.204 0 0 1-.203-.203V3.089a.204.204 0 0 1 .203-.203h9.113v5.063a.607.607 0 0 0 .607.607h5.063v12.353a.204.204 0 0 1-.203.203"/>',
    "duotone": '<path d="M20.1 7.95h-5.67V2.28z" opacity="0.2"/><path d="m20.674 7.376-5.67-5.67a.82.82 0 0 0-.574-.236H4.71a1.62 1.62 0 0 0-1.62 1.62v17.82a1.62 1.62 0 0 0 1.62 1.62h14.58a1.62 1.62 0 0 0 1.62-1.62V7.95a.82.82 0 0 0-.236-.574M15.24 4.235l2.905 2.905H15.24zm4.05 16.675H4.71V3.09h8.91v4.86a.81.81 0 0 0 .81.81h4.86z"/>'
  },
  tags: ["documents", "files", "save", "write", "page"]
};
var filterClearIcon = {
  name: "filter-clear",
  content: '<path d="M22.205 4.136a1.4 1.4 0 0 0-1.295-.844H3.09a1.417 1.417 0 0 0-1.046 2.371l.006.006 6.912 7.381v7.859a1.417 1.417 0 0 0 2.203 1.178l3.24-2.16a1.42 1.42 0 0 0 .631-1.179v-5.699l6.919-7.391a1.4 1.4 0 0 0 .249-1.523zm-1.14.704-7.078 7.555a.6.6 0 0 0-.165.415v5.939a.2.2 0 0 1-.09.169l-3.24 2.16a.203.203 0 0 1-.315-.168v-8.1a.6.6 0 0 0-.164-.415L2.94 4.843a.19.19 0 0 1-.034-.216.19.19 0 0 1 .183-.12h17.82a.19.19 0 0 1 .185.12.19.19 0 0 1-.029.211zm2.705 15.642a.607.607 0 1 1-.858.858l-2.001-2.001-1.999 2.001a.607.607 0 0 1-.859-.858l2-2.002-2-2a.607.607 0 0 1 .859-.86l1.999 2.002 2.001-2a.607.607 0 0 1 .858.859l-2 1.999z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M22.098 5.808 15.24 13.13v5.619a1.62 1.62 0 0 1-.722 1.351l-3.24 2.161A1.62 1.62 0 0 1 8.76 20.91v-7.78L1.902 5.808l-.008-.01a1.62 1.62 0 0 1 1.195-2.709h17.82a1.62 1.62 0 0 1 1.199 2.709zm-.042 12.672 1.858-1.856a.81.81 0 0 0-1.146-1.146l-1.857 1.857-1.856-1.857a.81.81 0 0 0-1.146 1.146l1.857 1.856-1.857 1.856a.81.81 0 0 0 1.146 1.146l1.856-1.857 1.857 1.857a.81.81 0 0 0 1.146-1.146z"/>',
    "outline": '<path d="M22.205 4.136a1.4 1.4 0 0 0-1.295-.844H3.09a1.417 1.417 0 0 0-1.046 2.371l.006.006 6.912 7.381v7.859a1.417 1.417 0 0 0 2.203 1.178l3.24-2.16a1.42 1.42 0 0 0 .631-1.179v-5.699l6.919-7.391a1.4 1.4 0 0 0 .249-1.523zm-1.14.704-7.078 7.555a.6.6 0 0 0-.165.415v5.939a.2.2 0 0 1-.09.169l-3.24 2.16a.203.203 0 0 1-.315-.168v-8.1a.6.6 0 0 0-.164-.415L2.94 4.843a.19.19 0 0 1-.034-.216.19.19 0 0 1 .183-.12h17.82a.19.19 0 0 1 .185.12.19.19 0 0 1-.029.211zm2.705 15.642a.607.607 0 1 1-.858.858l-2.001-2.001-1.999 2.001a.607.607 0 0 1-.859-.858l2-2.002-2-2a.607.607 0 0 1 .859-.86l1.999 2.002 2.001-2a.607.607 0 0 1 .858.859l-2 1.999z"/>',
    "duotone": '<path d="M21.508 5.255 14.43 12.81v5.939a.82.82 0 0 1-.36.674l-3.24 2.16a.81.81 0 0 1-1.26-.672v-8.1L2.492 5.256a.81.81 0 0 1 .598-1.355h17.82a.81.81 0 0 1 .598 1.355z" opacity="0.2"/><path d="M22.106 5.8a1.62 1.62 0 0 0-1.196-2.71H3.09A1.62 1.62 0 0 0 1.895 5.8l.008.009 6.858 7.323v7.779a1.62 1.62 0 0 0 2.518 1.349l3.24-2.161a1.62 1.62 0 0 0 .722-1.349v-5.618l6.858-7.323zm-8.264 6.463a.82.82 0 0 0-.222.547v5.939l-3.24 2.161v-8.1a.82.82 0 0 0-.218-.553L3.09 4.71h17.82zm10.073 8.081a.81.81 0 0 1-1.146 1.146l-1.859-1.864-1.856 1.858a.81.81 0 0 1-1.145-1.146l1.856-1.858-1.856-1.858a.81.81 0 0 1 1.145-1.144l1.856 1.857 1.856-1.856a.81.81 0 0 1 1.146 1.145l-1.857 1.856z"/>'
  },
  tags: ["filter", "clear", "actions", "funnel", "sieve"]
};
var filterIcon = {
  name: "filter",
  content: '<path d="M22.202 4.136a1.39 1.39 0 0 0-1.292-.844H3.09a1.417 1.417 0 0 0-1.046 2.371l.006.007 6.912 7.38v7.859a1.417 1.417 0 0 0 2.204 1.178l3.24-2.16a1.42 1.42 0 0 0 .631-1.179v-5.699l6.918-7.391a1.4 1.4 0 0 0 .247-1.523zm-1.14.704-7.076 7.555a.6.6 0 0 0-.164.415v5.939a.2.2 0 0 1-.09.169l-3.24 2.16a.203.203 0 0 1-.315-.168v-8.1a.6.6 0 0 0-.164-.415L2.94 4.843a.203.203 0 0 1 .149-.336h17.82a.19.19 0 0 1 .185.12.19.19 0 0 1-.033.211z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="m22.105 5.8-.008.009-6.858 7.323v5.618a1.62 1.62 0 0 1-.723 1.351l-3.24 2.161a1.62 1.62 0 0 1-2.517-1.351v-7.779L1.901 5.809 1.892 5.8a1.62 1.62 0 0 1 1.196-2.71h17.82a1.62 1.62 0 0 1 1.198 2.71z"/>',
    "outline": '<path d="M22.202 4.136a1.39 1.39 0 0 0-1.292-.844H3.09a1.417 1.417 0 0 0-1.046 2.371l.006.007 6.912 7.38v7.859a1.417 1.417 0 0 0 2.204 1.178l3.24-2.16a1.42 1.42 0 0 0 .631-1.179v-5.699l6.918-7.391a1.4 1.4 0 0 0 .247-1.523zm-1.14.704-7.076 7.555a.6.6 0 0 0-.164.415v5.939a.2.2 0 0 1-.09.169l-3.24 2.16a.203.203 0 0 1-.315-.168v-8.1a.6.6 0 0 0-.164-.415L2.94 4.843a.203.203 0 0 1 .149-.336h17.82a.19.19 0 0 1 .185.12.19.19 0 0 1-.033.211z"/>',
    "duotone": '<path d="M21.508 5.255 14.43 12.81v5.939a.82.82 0 0 1-.36.674l-3.24 2.16a.81.81 0 0 1-1.26-.672v-8.1L2.492 5.256a.81.81 0 0 1 .598-1.355h17.82a.81.81 0 0 1 .598 1.355z" opacity="0.2"/><path d="M22.388 4.055a1.6 1.6 0 0 0-1.478-.965H3.09A1.62 1.62 0 0 0 1.895 5.8l.008.009 6.858 7.323v7.779a1.62 1.62 0 0 0 2.518 1.349l3.24-2.161a1.62 1.62 0 0 0 .722-1.349v-5.618L22.1 5.809l.009-.009a1.6 1.6 0 0 0 .282-1.745zm-8.547 8.207a.82.82 0 0 0-.221.548v5.939l-3.24 2.161v-8.1a.82.82 0 0 0-.218-.554L3.09 4.71h17.82z"/>'
  },
  tags: ["filter", "actions", "funnel", "sieve"]
};
var folderIcon = {
  name: "folder",
  content: '<path d="M20.91 6.533h-8.658L9.427 3.708a1.42 1.42 0 0 0-1.002-.415H3.09A1.416 1.416 0 0 0 1.673 4.71v14.642a1.356 1.356 0 0 0 1.355 1.355H21a1.33 1.33 0 0 0 1.327-1.327V7.95a1.416 1.416 0 0 0-1.417-1.417M3.09 4.507h5.335a.2.2 0 0 1 .143.06l1.966 1.966H2.888V4.71a.204.204 0 0 1 .203-.203zM21.113 19.38a.113.113 0 0 1-.113.113H3.028a.144.144 0 0 1-.14-.139V7.748h18.023a.204.204 0 0 1 .203.203z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M20.91 6.33h-8.575L9.57 3.565a1.6 1.6 0 0 0-1.145-.475H3.09a1.62 1.62 0 0 0-1.62 1.62v14.642a1.56 1.56 0 0 0 1.559 1.558h17.972a1.53 1.53 0 0 0 1.53-1.53V7.95a1.62 1.62 0 0 0-1.62-1.62zM3.09 4.71h5.335l1.62 1.62H3.09z"/>',
    "outline": '<path d="M20.91 6.533h-8.658L9.427 3.708a1.42 1.42 0 0 0-1.002-.415H3.09A1.416 1.416 0 0 0 1.673 4.71v14.642a1.356 1.356 0 0 0 1.355 1.355H21a1.33 1.33 0 0 0 1.327-1.327V7.95a1.416 1.416 0 0 0-1.417-1.417M3.09 4.507h5.335a.2.2 0 0 1 .143.06l1.966 1.966H2.888V4.71a.204.204 0 0 1 .203-.203zM21.113 19.38a.113.113 0 0 1-.113.113H3.028a.144.144 0 0 1-.14-.139V7.748h18.023a.204.204 0 0 1 .203.203z"/>',
    "duotone": '<path d="M12 7.14H2.28V4.71a.81.81 0 0 1 .81-.81h5.335a.82.82 0 0 1 .573.236z" opacity="0.2"/><path d="M20.91 6.33h-8.575L9.57 3.565a1.6 1.6 0 0 0-1.145-.475H3.09a1.62 1.62 0 0 0-1.62 1.62v14.642a1.56 1.56 0 0 0 1.558 1.558H21a1.53 1.53 0 0 0 1.53-1.53V7.95a1.62 1.62 0 0 0-1.62-1.62M8.425 4.71l1.62 1.62H3.09V4.71zM20.91 19.29H3.09V7.95h17.82z"/>'
  },
  tags: ["directory", "directories", "files", "folders"]
};
var gearIcon = {
  name: "gear",
  content: '<path d="M12 7.343A4.657 4.657 0 1 0 16.657 12 4.663 4.663 0 0 0 12 7.343m0 8.1A3.443 3.443 0 1 1 15.443 12 3.444 3.444 0 0 1 12 15.443m8.707-3.155a10 10 0 0 0 0-.575l1.552-1.94a.6.6 0 0 0 .113-.535 10.8 10.8 0 0 0-1.082-2.614.6.6 0 0 0-.458-.304l-2.476-.274q-.196-.21-.405-.406l-.275-2.477a.6.6 0 0 0-.304-.458 10.8 10.8 0 0 0-2.608-1.079.6.6 0 0 0-.536.115l-1.944 1.557a10 10 0 0 0-.574 0L9.774 1.74a.6.6 0 0 0-.535-.113 10.8 10.8 0 0 0-2.614 1.081.6.6 0 0 0-.303.459l-.27 2.475q-.21.197-.406.406l-2.478.282a.6.6 0 0 0-.458.304 10.8 10.8 0 0 0-1.079 2.608.6.6 0 0 0 .113.53L3.3 11.716a10 10 0 0 0 0 .574l-1.558 1.941a.6.6 0 0 0-.112.535 10.8 10.8 0 0 0 1.081 2.608.6.6 0 0 0 .458.303l2.476.275q.197.21.405.404l.282 2.474a.6.6 0 0 0 .304.458 10.8 10.8 0 0 0 2.609 1.079.6.6 0 0 0 .535-.113l1.934-1.552q.288.008.575 0l1.945 1.558a.6.6 0 0 0 .38.133.6.6 0 0 0 .156-.02 10.8 10.8 0 0 0 2.608-1.081.6.6 0 0 0 .304-.459l.275-2.475q.21-.196.405-.406l2.477-.275a.6.6 0 0 0 .459-.303 10.8 10.8 0 0 0 1.078-2.609.6.6 0 0 0-.112-.535zm-.314 4.216-2.394.266a.6.6 0 0 0-.387.203 7 7 0 0 1-.638.638.6.6 0 0 0-.203.387l-.266 2.392a9.6 9.6 0 0 1-1.758.723l-1.881-1.505a.6.6 0 0 0-.379-.133h-.036a8 8 0 0 1-.903 0 .6.6 0 0 0-.417.132l-1.879 1.506a9.6 9.6 0 0 1-1.756-.726l-.266-2.392a.6.6 0 0 0-.203-.386 7 7 0 0 1-.638-.639.6.6 0 0 0-.387-.202l-2.392-.267a9.6 9.6 0 0 1-.723-1.753l1.505-1.88a.6.6 0 0 0 .132-.417 8 8 0 0 1 0-.903.6.6 0 0 0-.132-.417L2.887 9.252a9.6 9.6 0 0 1 .726-1.756l2.392-.266a.6.6 0 0 0 .386-.203 7 7 0 0 1 .639-.638.6.6 0 0 0 .202-.387l.267-2.392a9.6 9.6 0 0 1 1.753-.723l1.88 1.505a.6.6 0 0 0 .417.132 8 8 0 0 1 .903 0 .6.6 0 0 0 .417-.132l1.879-1.505a9.6 9.6 0 0 1 1.756.726l.266 2.394a.6.6 0 0 0 .203.387 7 7 0 0 1 .638.638.6.6 0 0 0 .387.203l2.392.266a9.6 9.6 0 0 1 .723 1.751l-1.505 1.88a.6.6 0 0 0-.132.417 8 8 0 0 1 0 .903.6.6 0 0 0 .132.417l1.505 1.879a9.6 9.6 0 0 1-.724 1.756z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M20.91 12.218q.006-.218 0-.436l1.511-1.888a.82.82 0 0 0 .15-.715 10.8 10.8 0 0 0-1.102-2.658.82.82 0 0 0-.607-.399l-2.401-.267q-.15-.158-.304-.304l-.283-2.407a.82.82 0 0 0-.398-.607 10.8 10.8 0 0 0-2.658-1.099.82.82 0 0 0-.716.15L12.22 3.09h-.437L9.895 1.583a.82.82 0 0 0-.715-.15 10.8 10.8 0 0 0-2.658 1.101.82.82 0 0 0-.398.608l-.268 2.406q-.158.151-.304.303l-2.407.276a.82.82 0 0 0-.607.399 10.8 10.8 0 0 0-1.1 2.658.82.82 0 0 0 .151.715l1.502 1.883v.436l-1.507 1.888a.82.82 0 0 0-.15.715 10.8 10.8 0 0 0 1.102 2.658.82.82 0 0 0 .607.399l2.401.267q.151.158.304.304l.28 2.407a.82.82 0 0 0 .399.607 10.8 10.8 0 0 0 2.658 1.101.82.82 0 0 0 .715-.152l1.883-1.502q.218.006.437 0l1.887 1.511a.82.82 0 0 0 .715.15 10.8 10.8 0 0 0 2.658-1.102.82.82 0 0 0 .399-.607l.267-2.401q.158-.15.304-.304l2.407-.283a.82.82 0 0 0 .607-.398 10.8 10.8 0 0 0 1.101-2.658.82.82 0 0 0-.151-.716zM12 16.05A4.05 4.05 0 1 1 16.05 12 4.05 4.05 0 0 1 12 16.05"/>',
    "outline": '<path d="M12 7.343A4.657 4.657 0 1 0 16.657 12 4.663 4.663 0 0 0 12 7.343m0 8.1A3.443 3.443 0 1 1 15.443 12 3.444 3.444 0 0 1 12 15.443m8.707-3.155a10 10 0 0 0 0-.575l1.552-1.94a.6.6 0 0 0 .113-.535 10.8 10.8 0 0 0-1.082-2.614.6.6 0 0 0-.458-.304l-2.476-.274q-.196-.21-.405-.406l-.275-2.477a.6.6 0 0 0-.304-.458 10.8 10.8 0 0 0-2.608-1.079.6.6 0 0 0-.536.115l-1.944 1.557a10 10 0 0 0-.574 0L9.774 1.74a.6.6 0 0 0-.535-.113 10.8 10.8 0 0 0-2.614 1.081.6.6 0 0 0-.303.459l-.27 2.475q-.21.197-.406.406l-2.478.282a.6.6 0 0 0-.458.304 10.8 10.8 0 0 0-1.079 2.608.6.6 0 0 0 .113.53L3.3 11.716a10 10 0 0 0 0 .574l-1.558 1.941a.6.6 0 0 0-.112.535 10.8 10.8 0 0 0 1.081 2.608.6.6 0 0 0 .458.303l2.476.275q.197.21.405.404l.282 2.474a.6.6 0 0 0 .304.458 10.8 10.8 0 0 0 2.609 1.079.6.6 0 0 0 .535-.113l1.934-1.552q.288.008.575 0l1.945 1.558a.6.6 0 0 0 .38.133.6.6 0 0 0 .156-.02 10.8 10.8 0 0 0 2.608-1.081.6.6 0 0 0 .304-.459l.275-2.475q.21-.196.405-.406l2.477-.275a.6.6 0 0 0 .459-.303 10.8 10.8 0 0 0 1.078-2.609.6.6 0 0 0-.112-.535zm-.314 4.216-2.394.266a.6.6 0 0 0-.387.203 7 7 0 0 1-.638.638.6.6 0 0 0-.203.387l-.266 2.392a9.6 9.6 0 0 1-1.758.723l-1.881-1.505a.6.6 0 0 0-.379-.133h-.036a8 8 0 0 1-.903 0 .6.6 0 0 0-.417.132l-1.879 1.506a9.6 9.6 0 0 1-1.756-.726l-.266-2.392a.6.6 0 0 0-.203-.386 7 7 0 0 1-.638-.639.6.6 0 0 0-.387-.202l-2.392-.267a9.6 9.6 0 0 1-.723-1.753l1.505-1.88a.6.6 0 0 0 .132-.417 8 8 0 0 1 0-.903.6.6 0 0 0-.132-.417L2.887 9.252a9.6 9.6 0 0 1 .726-1.756l2.392-.266a.6.6 0 0 0 .386-.203 7 7 0 0 1 .639-.638.6.6 0 0 0 .202-.387l.267-2.392a9.6 9.6 0 0 1 1.753-.723l1.88 1.505a.6.6 0 0 0 .417.132 8 8 0 0 1 .903 0 .6.6 0 0 0 .417-.132l1.879-1.505a9.6 9.6 0 0 1 1.756.726l.266 2.394a.6.6 0 0 0 .203.387 7 7 0 0 1 .638.638.6.6 0 0 0 .387.203l2.392.266a9.6 9.6 0 0 1 .723 1.751l-1.505 1.88a.6.6 0 0 0-.132.417 8 8 0 0 1 0 .903.6.6 0 0 0 .132.417l1.505 1.879a9.6 9.6 0 0 1-.724 1.756z"/>',
    "duotone": '<path d="m20.086 11.512 1.699-2.127a10 10 0 0 0-1.02-2.459l-2.704-.303a8 8 0 0 0-.69-.69l-.303-2.705a10 10 0 0 0-2.46-1.013l-2.127 1.698a8 8 0 0 0-.975 0L9.379 2.214a10 10 0 0 0-2.451 1.02l-.304 2.704a8 8 0 0 0-.69.69l-2.705.303a10 10 0 0 0-1.013 2.46l1.698 2.127a8 8 0 0 0 0 .975L2.215 14.62a10 10 0 0 0 1.02 2.458l2.704.304a8 8 0 0 0 .69.69l.303 2.705a10 10 0 0 0 2.46 1.013l2.127-1.698a8 8 0 0 0 .975 0l2.127 1.699a10 10 0 0 0 2.459-1.02l.303-2.704a8 8 0 0 0 .69-.69l2.705-.303a10 10 0 0 0 1.013-2.46l-1.698-2.127a8 8 0 0 0-.009-.975zM12 16.05A4.05 4.05 0 1 1 16.05 12 4.05 4.05 0 0 1 12 16.05" opacity="0.2"/><path d="M12 7.14A4.86 4.86 0 1 0 16.86 12 4.865 4.865 0 0 0 12 7.14m0 8.1A3.24 3.24 0 1 1 15.24 12 3.24 3.24 0 0 1 12 15.24m8.91-3.022q.006-.218 0-.436l1.511-1.888a.82.82 0 0 0 .15-.715 10.8 10.8 0 0 0-1.102-2.658.82.82 0 0 0-.607-.399l-2.401-.267q-.15-.158-.304-.304l-.283-2.407a.82.82 0 0 0-.398-.607 10.8 10.8 0 0 0-2.658-1.099.82.82 0 0 0-.716.15L12.22 3.09h-.437L9.895 1.583a.82.82 0 0 0-.715-.15 10.8 10.8 0 0 0-2.658 1.101.82.82 0 0 0-.398.608l-.268 2.406q-.158.151-.304.303l-2.407.276a.82.82 0 0 0-.607.399 10.8 10.8 0 0 0-1.1 2.658.82.82 0 0 0 .151.715l1.502 1.883v.436l-1.507 1.888a.82.82 0 0 0-.15.715 10.8 10.8 0 0 0 1.102 2.658.82.82 0 0 0 .607.399l2.401.267q.151.158.304.304l.28 2.407a.82.82 0 0 0 .399.607 10.8 10.8 0 0 0 2.658 1.101.82.82 0 0 0 .715-.152l1.883-1.502q.218.006.437 0l1.887 1.511a.82.82 0 0 0 .715.15 10.8 10.8 0 0 0 2.658-1.102.82.82 0 0 0 .399-.607l.267-2.401q.158-.15.304-.304l2.407-.283a.82.82 0 0 0 .607-.398 10.8 10.8 0 0 0 1.101-2.658.82.82 0 0 0-.151-.716zm-1.63-.657a7 7 0 0 1 0 .878.82.82 0 0 0 .177.555l1.436 1.795a9 9 0 0 1-.631 1.519l-2.288.259a.82.82 0 0 0-.516.268 7 7 0 0 1-.622.621.82.82 0 0 0-.268.516l-.254 2.286a9 9 0 0 1-1.519.632l-1.797-1.437a.8.8 0 0 0-.506-.177h-.048a7 7 0 0 1-.878 0 .82.82 0 0 0-.555.176l-1.8 1.438a9 9 0 0 1-1.519-.632l-.259-2.284a.82.82 0 0 0-.268-.516 7 7 0 0 1-.621-.622.82.82 0 0 0-.516-.268l-2.286-.255a9 9 0 0 1-.632-1.519l1.437-1.797a.82.82 0 0 0 .176-.554 7 7 0 0 1 0-.879.82.82 0 0 0-.176-.554L3.11 9.211a9 9 0 0 1 .632-1.519l2.284-.259a.82.82 0 0 0 .516-.268 7 7 0 0 1 .622-.621.82.82 0 0 0 .269-.518l.254-2.284a9 9 0 0 1 1.519-.632l1.797 1.437a.82.82 0 0 0 .554.176 7 7 0 0 1 .879 0 .82.82 0 0 0 .554-.176l1.799-1.437a9 9 0 0 1 1.519.632l.259 2.284a.82.82 0 0 0 .268.516 7 7 0 0 1 .621.622.82.82 0 0 0 .516.268l2.286.254a9 9 0 0 1 .632 1.519l-1.437 1.797a.82.82 0 0 0-.176.56z"/>'
  },
  tags: ["8", "settings", "setup", "preferences", "cogs", "gears", "machinery", "mechanical"]
};
var gridIcon = {
  name: "grid",
  content: '<path d="M19.29 3.293H4.71A1.416 1.416 0 0 0 3.293 4.71v14.58a1.416 1.416 0 0 0 1.417 1.417h14.58a1.416 1.416 0 0 0 1.417-1.417V4.71a1.416 1.416 0 0 0-1.417-1.417m.203 1.417v6.683h-6.885V4.507h6.683a.204.204 0 0 1 .203.203zM4.71 4.507h6.683v6.886H4.507V4.71a.204.204 0 0 1 .203-.203M4.507 19.29v-6.683h6.886v6.886H4.71a.204.204 0 0 1-.203-.203m14.783.203h-6.683v-6.885h6.886v6.683a.204.204 0 0 1-.203.203z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M20.91 4.71v6.076a.41.41 0 0 1-.404.405H12.81V3.496a.41.41 0 0 1 .406-.405h6.074a1.62 1.62 0 0 1 1.62 1.62zM10.784 3.09H4.709a1.62 1.62 0 0 0-1.62 1.62v6.076a.41.41 0 0 0 .404.405h7.695V3.496a.41.41 0 0 0-.405-.406zm9.72 9.72h-7.695v7.696a.41.41 0 0 0 .405.404h6.075a1.62 1.62 0 0 0 1.62-1.62v-6.076a.41.41 0 0 0-.405-.404m-17.415.404v6.076a1.62 1.62 0 0 0 1.62 1.62h6.075a.41.41 0 0 0 .406-.404V12.81H3.496a.41.41 0 0 0-.406.404z"/>',
    "outline": '<path d="M19.29 3.293H4.71A1.416 1.416 0 0 0 3.293 4.71v14.58a1.416 1.416 0 0 0 1.417 1.417h14.58a1.416 1.416 0 0 0 1.417-1.417V4.71a1.416 1.416 0 0 0-1.417-1.417m.203 1.417v6.683h-6.885V4.507h6.683a.204.204 0 0 1 .203.203zM4.71 4.507h6.683v6.886H4.507V4.71a.204.204 0 0 1 .203-.203M4.507 19.29v-6.683h6.886v6.886H4.71a.204.204 0 0 1-.203-.203m14.783.203h-6.683v-6.885h6.886v6.683a.204.204 0 0 1-.203.203z"/>',
    "duotone": '<path d="M20.1 4.71v14.58a.81.81 0 0 1-.81.81H4.71a.81.81 0 0 1-.81-.81V4.71a.81.81 0 0 1 .81-.81h14.58a.81.81 0 0 1 .81.81" opacity="0.2"/><path d="M19.29 3.09H4.71a1.62 1.62 0 0 0-1.62 1.62v14.58a1.62 1.62 0 0 0 1.62 1.62h14.58a1.62 1.62 0 0 0 1.62-1.62V4.71a1.62 1.62 0 0 0-1.62-1.62m0 8.1h-6.48V4.71h6.48zm-8.1-6.48v6.48H4.71V4.71zm-6.48 8.1h6.48v6.48H4.71zm14.58 6.48h-6.48v-6.48h6.48z"/>'
  },
  tags: ["grid", "layout", "tiles", "view"]
};
var groupIcon = {
  name: "group",
  content: '<path d="M9.773 3.09a.607.607 0 0 1 .607-.607h3.24a.608.608 0 0 1 0 1.215h-3.24a.607.607 0 0 1-.607-.607zm3.847 17.213h-3.24a.607.607 0 0 0 0 1.214h3.24a.607.607 0 0 0 0-1.214m6.48-17.82h-2.43a.608.608 0 0 0 0 1.215h2.43a.204.204 0 0 1 .203.203v2.43a.607.607 0 0 0 1.214 0v-2.43A1.416 1.416 0 0 0 20.1 2.484zm.81 7.29a.607.607 0 0 0-.607.607v3.24a.607.607 0 0 0 1.214 0v-3.24a.607.607 0 0 0-.607-.607m0 7.29a.607.607 0 0 0-.607.607v2.43a.204.204 0 0 1-.203.203h-2.43a.607.607 0 0 0 0 1.214h2.43a1.416 1.416 0 0 0 1.417-1.417v-2.43a.607.607 0 0 0-.607-.607M3.09 14.227a.607.607 0 0 0 .607-.607v-3.24a.608.608 0 0 0-1.215 0v3.24a.607.607 0 0 0 .607.607zm3.24 6.076H3.9a.204.204 0 0 1-.203-.203v-2.43a.608.608 0 0 0-1.215 0v2.43a1.416 1.416 0 0 0 1.417 1.417h2.43a.607.607 0 0 0 0-1.214zM3.09 6.938a.607.607 0 0 0 .607-.607v-2.43a.204.204 0 0 1 .203-.203h2.43a.608.608 0 0 0 0-1.215H3.9A1.416 1.416 0 0 0 2.483 3.9v2.43a.607.607 0 0 0 .607.607zm13.77 10.53H7.14a.607.607 0 0 1-.607-.607v-9.72a.607.607 0 0 1 .607-.607h9.72a.607.607 0 0 1 .607.607v9.72a.607.607 0 0 1-.607.607m-.607-9.72H7.747v8.506h8.505z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M9.57 3.09a.81.81 0 0 1 .81-.81h3.24a.81.81 0 0 1 0 1.62h-3.24a.81.81 0 0 1-.81-.81m4.05 17.01h-3.24a.81.81 0 0 0 0 1.62h3.24a.81.81 0 0 0 0-1.62M20.1 2.28h-2.43a.81.81 0 0 0 0 1.62h2.43v2.43a.81.81 0 0 0 1.62 0V3.9a1.62 1.62 0 0 0-1.62-1.62m.81 7.29a.81.81 0 0 0-.81.81v3.24a.81.81 0 0 0 1.62 0v-3.24a.81.81 0 0 0-.81-.81m0 7.29a.81.81 0 0 0-.81.81v2.43h-2.43a.81.81 0 0 0 0 1.62h2.43a1.62 1.62 0 0 0 1.62-1.62v-2.43a.81.81 0 0 0-.81-.81M3.09 14.43a.81.81 0 0 0 .81-.81v-3.24a.81.81 0 0 0-1.62 0v3.24a.81.81 0 0 0 .81.81m3.24 5.67H3.9v-2.43a.81.81 0 0 0-1.62 0v2.43a1.62 1.62 0 0 0 1.62 1.62h2.43a.81.81 0 0 0 0-1.62M3.09 7.14a.81.81 0 0 0 .81-.81V3.9h2.43a.81.81 0 0 0 0-1.62H3.9A1.62 1.62 0 0 0 2.28 3.9v2.43a.81.81 0 0 0 .81.81m14.58 9.72V7.14a.81.81 0 0 0-.81-.81H7.14a.81.81 0 0 0-.81.81v9.72a.81.81 0 0 0 .81.81h9.72a.81.81 0 0 0 .81-.81"/>',
    "outline": '<path d="M9.773 3.09a.607.607 0 0 1 .607-.607h3.24a.608.608 0 0 1 0 1.215h-3.24a.607.607 0 0 1-.607-.607zm3.847 17.213h-3.24a.607.607 0 0 0 0 1.214h3.24a.607.607 0 0 0 0-1.214m6.48-17.82h-2.43a.608.608 0 0 0 0 1.215h2.43a.204.204 0 0 1 .203.203v2.43a.607.607 0 0 0 1.214 0v-2.43A1.416 1.416 0 0 0 20.1 2.484zm.81 7.29a.607.607 0 0 0-.607.607v3.24a.607.607 0 0 0 1.214 0v-3.24a.607.607 0 0 0-.607-.607m0 7.29a.607.607 0 0 0-.607.607v2.43a.204.204 0 0 1-.203.203h-2.43a.607.607 0 0 0 0 1.214h2.43a1.416 1.416 0 0 0 1.417-1.417v-2.43a.607.607 0 0 0-.607-.607M3.09 14.227a.607.607 0 0 0 .607-.607v-3.24a.608.608 0 0 0-1.215 0v3.24a.607.607 0 0 0 .607.607zm3.24 6.076H3.9a.204.204 0 0 1-.203-.203v-2.43a.608.608 0 0 0-1.215 0v2.43a1.416 1.416 0 0 0 1.417 1.417h2.43a.607.607 0 0 0 0-1.214zM3.09 6.938a.607.607 0 0 0 .607-.607v-2.43a.204.204 0 0 1 .203-.203h2.43a.608.608 0 0 0 0-1.215H3.9A1.416 1.416 0 0 0 2.483 3.9v2.43a.607.607 0 0 0 .607.607zm13.77 10.53H7.14a.607.607 0 0 1-.607-.607v-9.72a.607.607 0 0 1 .607-.607h9.72a.607.607 0 0 1 .607.607v9.72a.607.607 0 0 1-.607.607m-.607-9.72H7.747v8.506h8.505z"/>',
    "duotone": '<path d="M16.86 7.14v9.72H7.14V7.14z" opacity="0.2"/><path d="M9.57 3.09a.81.81 0 0 1 .81-.81h3.24a.81.81 0 0 1 0 1.62h-3.24a.81.81 0 0 1-.81-.81m4.05 17.01h-3.24a.81.81 0 0 0 0 1.62h3.24a.81.81 0 0 0 0-1.62M20.1 2.28h-2.43a.81.81 0 0 0 0 1.62h2.43v2.43a.81.81 0 0 0 1.62 0V3.9a1.62 1.62 0 0 0-1.62-1.62m.81 7.29a.81.81 0 0 0-.81.81v3.24a.81.81 0 0 0 1.62 0v-3.24a.81.81 0 0 0-.81-.81m0 7.29a.81.81 0 0 0-.81.81v2.43h-2.43a.81.81 0 0 0 0 1.62h2.43a1.62 1.62 0 0 0 1.62-1.62v-2.43a.81.81 0 0 0-.81-.81M3.09 14.43a.81.81 0 0 0 .81-.81v-3.24a.81.81 0 0 0-1.62 0v3.24a.81.81 0 0 0 .81.81m3.24 5.67H3.9v-2.43a.81.81 0 0 0-1.62 0v2.43a1.62 1.62 0 0 0 1.62 1.62h2.43a.81.81 0 0 0 0-1.62M3.09 7.14a.81.81 0 0 0 .81-.81V3.9h2.43a.81.81 0 0 0 0-1.62H3.9A1.62 1.62 0 0 0 2.28 3.9v2.43a.81.81 0 0 0 .81.81m13.77 10.53H7.14a.81.81 0 0 1-.81-.81V7.14a.81.81 0 0 1 .81-.81h9.72a.81.81 0 0 1 .81.81v9.72a.81.81 0 0 1-.81.81m-.81-9.72h-8.1v8.1h8.1z"/>'
  },
  tags: ["group", "layout", "combine", "merge", "collect"]
};
var homeIcon = {
  name: "home",
  content: '<path d="m21.102 10.188-8.1-8.1a1.416 1.416 0 0 0-2.005 0l-8.1 8.1a1.42 1.42 0 0 0-.415 1.002v9.72a.607.607 0 0 0 .607.607h6.48a.607.607 0 0 0 .607-.607v-5.873h3.644v5.873a.607.607 0 0 0 .608.607h6.48a.607.607 0 0 0 .607-.607v-9.72a1.42 1.42 0 0 0-.415-1.002zm-.8 10.115h-5.265V14.43a.607.607 0 0 0-.607-.607H9.57a.607.607 0 0 0-.607.607v5.873H3.697V11.19a.2.2 0 0 1 .059-.144l8.1-8.1a.204.204 0 0 1 .288 0l8.1 8.1a.2.2 0 0 1 .059.144z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M21.72 11.19v9.72a.81.81 0 0 1-.81.81h-5.67a.81.81 0 0 1-.81-.81v-5.266a.41.41 0 0 0-.406-.405h-4.05a.41.41 0 0 0-.405.405v5.266a.81.81 0 0 1-.81.81h-5.67a.81.81 0 0 1-.81-.81v-9.72a1.62 1.62 0 0 1 .475-1.145l8.1-8.1a1.62 1.62 0 0 1 2.291 0l8.1 8.1a1.62 1.62 0 0 1 .475 1.145"/>',
    "outline": '<path d="m21.102 10.188-8.1-8.1a1.416 1.416 0 0 0-2.005 0l-8.1 8.1a1.42 1.42 0 0 0-.415 1.002v9.72a.607.607 0 0 0 .607.607h6.48a.607.607 0 0 0 .607-.607v-5.873h3.644v5.873a.607.607 0 0 0 .608.607h6.48a.607.607 0 0 0 .607-.607v-9.72a1.42 1.42 0 0 0-.415-1.002zm-.8 10.115h-5.265V14.43a.607.607 0 0 0-.607-.607H9.57a.607.607 0 0 0-.607.607v5.873H3.697V11.19a.2.2 0 0 1 .059-.144l8.1-8.1a.204.204 0 0 1 .288 0l8.1 8.1a.2.2 0 0 1 .059.144z"/>',
    "duotone": '<path d="M20.91 11.19v9.72h-6.48v-6.48H9.57v6.48H3.09v-9.72a.82.82 0 0 1 .236-.574l8.1-8.1a.81.81 0 0 1 1.146 0l8.1 8.1a.82.82 0 0 1 .237.574z" opacity="0.2"/><path d="m21.245 10.044-8.1-8.1a1.62 1.62 0 0 0-2.291 0l-8.1 8.1a1.6 1.6 0 0 0-.475 1.146v9.72a.81.81 0 0 0 .81.81h6.48a.81.81 0 0 0 .81-.81v-5.67h3.24v5.67a.81.81 0 0 0 .81.81h6.48a.81.81 0 0 0 .81-.81v-9.72a1.6 1.6 0 0 0-.475-1.146zM20.1 20.1h-4.86v-5.67a.81.81 0 0 0-.81-.81H9.57a.81.81 0 0 0-.81.81v5.67H3.9v-8.91l8.1-8.1 8.1 8.1z"/>'
  },
  tags: ["home", "navigation", "house", "main", "dashboard"]
};
var hyperlinkOpenIcon = {
  name: "hyperlink-open",
  content: '<path d="M21.517 9.57a.607.607 0 0 1-1.214 0V4.558l-7.062 7.062a.607.607 0 0 1-.859-.86l7.06-7.063H14.43a.608.608 0 0 1 0-1.215h6.48a.607.607 0 0 1 .607.607zm-3.847 2.633a.607.607 0 0 0-.607.607v7.29a.204.204 0 0 1-.203.203H3.9a.204.204 0 0 1-.203-.203V7.14a.204.204 0 0 1 .203-.203h7.29a.608.608 0 0 0 0-1.215H3.9a1.416 1.416 0 0 0-1.417 1.417v12.96A1.416 1.416 0 0 0 3.9 21.516h12.96a1.416 1.416 0 0 0 1.417-1.417v-7.29a.607.607 0 0 0-.607-.607z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M18.48 12.81v7.29a1.62 1.62 0 0 1-1.62 1.62H3.9a1.62 1.62 0 0 1-1.62-1.62V7.14A1.62 1.62 0 0 1 3.9 5.52h7.29a.81.81 0 0 1 0 1.62H3.9V20.1h12.96v-7.29a.81.81 0 0 1 1.62 0m3.24-9.72a.81.81 0 0 0-.81-.81h-6.48a.81.81 0 0 0-.574 1.384l2.668 2.666-4.288 4.286a.81.81 0 0 0 1.146 1.146l4.287-4.287 2.666 2.667a.81.81 0 0 0 1.384-.573z"/>',
    "outline": '<path d="M21.517 9.57a.607.607 0 0 1-1.214 0V4.558l-7.062 7.062a.607.607 0 0 1-.859-.86l7.06-7.063H14.43a.608.608 0 0 1 0-1.215h6.48a.607.607 0 0 1 .607.607zm-3.847 2.633a.607.607 0 0 0-.607.607v7.29a.204.204 0 0 1-.203.203H3.9a.204.204 0 0 1-.203-.203V7.14a.204.204 0 0 1 .203-.203h7.29a.608.608 0 0 0 0-1.215H3.9a1.416 1.416 0 0 0-1.417 1.417v12.96A1.416 1.416 0 0 0 3.9 21.516h12.96a1.416 1.416 0 0 0 1.417-1.417v-7.29a.607.607 0 0 0-.607-.607z"/>',
    "duotone": '<path d="M17.67 7.14V20.1a.81.81 0 0 1-.81.81H3.9a.81.81 0 0 1-.81-.81V7.14a.81.81 0 0 1 .81-.81h12.96a.81.81 0 0 1 .81.81" opacity="0.2"/><path d="M21.72 9.57a.81.81 0 0 1-1.62 0V5.046l-6.716 6.716a.81.81 0 0 1-1.146-1.146L18.954 3.9H14.43a.81.81 0 0 1 0-1.62h6.48a.81.81 0 0 1 .81.81zM17.67 12a.81.81 0 0 0-.81.81v7.29H3.9V7.14h7.29a.81.81 0 0 0 0-1.62H3.9a1.62 1.62 0 0 0-1.62 1.62V20.1a1.62 1.62 0 0 0 1.62 1.62h12.96a1.62 1.62 0 0 0 1.62-1.62v-7.29a.81.81 0 0 0-.81-.81"/>'
  },
  tags: ["hyperlink", "open", "actions"]
};
var infoCircleIcon = {
  name: "info-circle",
  content: '<path d="M13.417 16.86a.607.607 0 0 1-.607.607 1.416 1.416 0 0 1-1.417-1.417V12a.204.204 0 0 0-.203-.203.607.607 0 0 1 0-1.214A1.416 1.416 0 0 1 12.607 12v4.05a.204.204 0 0 0 .203.203.607.607 0 0 1 .607.607m-1.823-8.303a1.013 1.013 0 1 0-1.012-1.013 1.013 1.013 0 0 0 1.012 1.013M22.327 12A10.327 10.327 0 1 1 12 1.673 10.34 10.34 0 0 1 22.327 12m-1.214 0A9.113 9.113 0 1 0 12 21.113 9.12 9.12 0 0 0 21.113 12"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M12 1.47A10.53 10.53 0 1 0 22.53 12 10.54 10.54 0 0 0 12 1.47m-.406 4.86a1.216 1.216 0 1 1-1.215 1.216 1.216 1.216 0 0 1 1.215-1.216m1.216 11.34a1.62 1.62 0 0 1-1.62-1.62V12a.81.81 0 0 1 0-1.62A1.62 1.62 0 0 1 12.81 12v4.05a.81.81 0 0 1 0 1.62"/>',
    "outline": '<path d="M13.417 16.86a.607.607 0 0 1-.607.607 1.416 1.416 0 0 1-1.417-1.417V12a.204.204 0 0 0-.203-.203.607.607 0 0 1 0-1.214A1.416 1.416 0 0 1 12.607 12v4.05a.204.204 0 0 0 .203.203.607.607 0 0 1 .607.607m-1.823-8.303a1.013 1.013 0 1 0-1.012-1.013 1.013 1.013 0 0 0 1.012 1.013M22.327 12A10.327 10.327 0 1 1 12 1.673 10.34 10.34 0 0 1 22.327 12m-1.214 0A9.113 9.113 0 1 0 12 21.113 9.12 9.12 0 0 0 21.113 12"/>',
    "duotone": '<path d="M21.72 12A9.72 9.72 0 1 1 12 2.28 9.72 9.72 0 0 1 21.72 12" opacity="0.2"/><path d="M13.62 16.86a.81.81 0 0 1-.81.81 1.62 1.62 0 0 1-1.62-1.62V12a.81.81 0 0 1 0-1.62A1.62 1.62 0 0 1 12.81 12v4.05a.81.81 0 0 1 .81.81M22.53 12A10.53 10.53 0 1 1 12 1.47 10.54 10.54 0 0 1 22.53 12m-1.62 0A8.91 8.91 0 1 0 12 20.91 8.92 8.92 0 0 0 20.91 12m-9.316-3.24a1.216 1.216 0 1 0-1.215-1.216 1.216 1.216 0 0 0 1.215 1.216"/>'
  },
  tags: ["info", "circle", "notifications", "information", "help", "about"]
};
var insertBottomIcon = {
  name: "insert-bottom",
  content: '<path d="M23.366 15a.6.6 0 0 0 0-1.2H13.2a.6.6 0 0 0 0 1.2zM19.8 10.2a.6.6 0 0 0 0-1.2h-6.6a.6.6 0 0 0 0 1.2zM19.8 6.6a.6.6 0 0 0 0-1.2h-6.6a.6.6 0 0 0 0 1.2zM8.146 13.795l-2.571-2.571a.6.6 0 0 1 0-.848.6.6 0 0 1 .848 0l3.595 3.595.078.094a.6.6 0 0 1-.078.755l-3.594 3.594a.6.6 0 1 1-.848-.849l2.57-2.57h-5.84L.601 15a.6.6 0 0 1-.002-1.2l1.704-.005z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path fill-rule="evenodd" d="M23.1 3.6a.9.9 0 0 1 .9.9v15a.9.9 0 0 1-.9.9H.9a.9.9 0 0 1-.9-.9v-15a.9.9 0 0 1 .9-.9zM8.068 10.526a.81.81 0 1 0-1.146 1.146l1.314 1.314H4.721l-1.277.003a.809.809 0 1 0 .005 1.62l1.277-.004h3.51l-1.313 1.313a.811.811 0 0 0 1.147 1.146l2.695-2.696a.81.81 0 0 0 .103-1.018l-.103-.128zm4.827 2.463a.81.81 0 0 0 0 1.62h7.625a.81.81 0 0 0 0-1.62zm0-3.6a.81.81 0 0 0 0 1.62h4.95a.81.81 0 1 0 0-1.62zm0-2.7a.81.81 0 0 0 0 1.62h4.95a.81.81 0 1 0 0-1.62z" clip-rule="evenodd"/>',
    "outline": '<path d="M23.366 15a.6.6 0 0 0 0-1.2H13.2a.6.6 0 0 0 0 1.2zM19.8 10.2a.6.6 0 0 0 0-1.2h-6.6a.6.6 0 0 0 0 1.2zM19.8 6.6a.6.6 0 0 0 0-1.2h-6.6a.6.6 0 0 0 0 1.2zM8.146 13.795l-2.571-2.571a.6.6 0 0 1 0-.848.6.6 0 0 1 .848 0l3.595 3.595.078.094a.6.6 0 0 1-.078.755l-3.594 3.594a.6.6 0 1 1-.848-.849l2.57-2.57h-5.84L.601 15a.6.6 0 0 1-.002-1.2l1.704-.005z"/>',
    "duotone": '<path fill-opacity="0.2" d="M13.2 14.4h10.2l-3.42-4.56a.9.9 0 0 1-.18-.54V6h-6.6z"/><path d="M23.366 15a.6.6 0 0 0 0-1.2H13.2a.6.6 0 0 0 0 1.2zM19.8 10.2a.6.6 0 0 0 0-1.2h-6.6a.6.6 0 0 0 0 1.2zM19.8 6.6a.6.6 0 0 0 0-1.2h-6.6a.6.6 0 0 0 0 1.2zM8.146 13.795l-2.571-2.571a.6.6 0 0 1 0-.848.6.6 0 0 1 .848 0l3.595 3.595.078.094a.6.6 0 0 1-.078.755l-3.594 3.594a.6.6 0 1 1-.848-.849l2.57-2.57h-5.84L.601 15a.6.6 0 0 1-.002-1.2l1.704-.005z"/>'
  },
  tags: ["insert", "bottom", "text-formatting"]
};
var insertMiddleIcon = {
  name: "insert-middle",
  content: '<path d="M19.8 17.4a.6.6 0 0 0 0-1.2h-6.6a.6.6 0 0 0 0 1.2zM23.366 12.6a.6.6 0 0 0 0-1.2H13.2a.6.6 0 0 0 0 1.2zM19.8 7.8a.6.6 0 0 0 0-1.2h-6.6a.6.6 0 0 0 0 1.2zM8.146 11.395 5.575 8.824a.6.6 0 0 1 0-.848.6.6 0 0 1 .848 0l3.595 3.595.078.094a.6.6 0 0 1-.078.755l-3.594 3.594a.6.6 0 1 1-.848-.849l2.57-2.57h-5.84L.601 12.6a.6.6 0 0 1-.002-1.2l1.704-.005z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path fill-rule="evenodd" d="M23.1 3.6a.9.9 0 0 1 .9.9v15a.9.9 0 0 1-.9.9H.9a.9.9 0 0 1-.9-.9v-15a.9.9 0 0 1 .9-.9zM12.895 14.79a.81.81 0 0 0 0 1.62h4.95a.81.81 0 1 0 0-1.62zM8.068 8.727a.811.811 0 0 0-1.146 1.146l1.314 1.314H4.721l-1.277.003a.809.809 0 1 0 .005 1.62l1.277-.004h3.51l-1.313 1.313a.811.811 0 0 0 1.147 1.146l2.695-2.695a.81.81 0 0 0 .103-1.019l-.103-.128zm4.827 2.463a.81.81 0 0 0 0 1.62h7.625a.81.81 0 0 0 0-1.62zm0-3.6a.81.81 0 0 0 0 1.62h4.95a.81.81 0 1 0 0-1.62z" clip-rule="evenodd"/>',
    "outline": '<path d="M19.8 17.4a.6.6 0 0 0 0-1.2h-6.6a.6.6 0 0 0 0 1.2zM23.366 12.6a.6.6 0 0 0 0-1.2H13.2a.6.6 0 0 0 0 1.2zM19.8 7.8a.6.6 0 0 0 0-1.2h-6.6a.6.6 0 0 0 0 1.2zM8.146 11.395 5.575 8.824a.6.6 0 0 1 0-.848.6.6 0 0 1 .848 0l3.595 3.595.078.094a.6.6 0 0 1-.078.755l-3.594 3.594a.6.6 0 1 1-.848-.849l2.57-2.57h-5.84L.601 12.6a.6.6 0 0 1-.002-1.2l1.704-.005z"/>',
    "duotone": '<path d="M19.8 17.4a.6.6 0 0 0 0-1.2h-6.6a.6.6 0 0 0 0 1.2zM23.366 12.6a.6.6 0 0 0 0-1.2H13.2a.6.6 0 0 0 0 1.2zM19.8 7.8a.6.6 0 0 0 0-1.2h-6.6a.6.6 0 0 0 0 1.2zM8.146 11.395 5.575 8.824a.6.6 0 0 1 0-.848.6.6 0 0 1 .848 0l3.595 3.595.078.094a.6.6 0 0 1-.078.755l-3.594 3.594a.6.6 0 1 1-.848-.849l2.57-2.57h-5.84L.601 12.6a.6.6 0 0 1-.002-1.2l1.704-.005z"/><path fill-opacity="0.2" d="M13.2 7.2h6.6l3.195 4.26a.9.9 0 0 1 0 1.08L19.8 16.8h-6.6z"/>'
  },
  tags: ["insert", "middle", "text-formatting"]
};
var insertTopIcon = {
  name: "insert-top",
  content: '<path d="M23.366 8.989a.6.6 0 0 1 0 1.2H13.2a.6.6 0 1 1 0-1.2zM19.8 13.789a.6.6 0 0 1 0 1.2h-6.6a.6.6 0 1 1 0-1.2zM19.8 17.389a.6.6 0 0 1 0 1.2h-6.6a.6.6 0 1 1 0-1.2zM8.146 10.194l-2.571 2.571a.6.6 0 1 0 .848.849l3.595-3.596.078-.093a.6.6 0 0 0-.078-.755L6.424 5.576a.6.6 0 0 0-.848 0 .6.6 0 0 0 0 .848l2.57 2.57h-5.84L.601 8.989a.601.601 0 0 0-.002 1.2l1.704.005z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path fill-rule="evenodd" d="M23.1 3.6a.9.9 0 0 1 .9.9v15a.9.9 0 0 1-.9.9H.9a.9.9 0 0 1-.9-.9v-15a.9.9 0 0 1 .9-.9zM12.897 15.681a.81.81 0 1 0 0 1.619h4.95a.809.809 0 1 0 0-1.619zm0-2.7a.81.81 0 1 0 0 1.619h4.95a.809.809 0 1 0 0-1.619zM8.07 6.926a.811.811 0 0 0-1.147 1.146l1.313 1.312h-3.51l-1.277-.003A.81.81 0 0 0 3.444 11l1.277.004h3.515l-1.314 1.314a.811.811 0 0 0 1.146 1.146l2.697-2.697.103-.128a.81.81 0 0 0-.103-1.018zm4.827 2.455a.81.81 0 1 0 0 1.619h7.624a.81.81 0 1 0 0-1.619z" clip-rule="evenodd"/>',
    "outline": '<path d="M23.366 8.989a.6.6 0 0 1 0 1.2H13.2a.6.6 0 1 1 0-1.2zM19.8 13.789a.6.6 0 0 1 0 1.2h-6.6a.6.6 0 1 1 0-1.2zM19.8 17.389a.6.6 0 0 1 0 1.2h-6.6a.6.6 0 1 1 0-1.2zM8.146 10.194l-2.571 2.571a.6.6 0 1 0 .848.849l3.595-3.596.078-.093a.6.6 0 0 0-.078-.755L6.424 5.576a.6.6 0 0 0-.848 0 .6.6 0 0 0 0 .848l2.57 2.57h-5.84L.601 8.989a.601.601 0 0 0-.002 1.2l1.704.005z"/>',
    "duotone": '<path fill-opacity="0.2" d="M13.2 9.6h10.2l-3.42 4.56a.9.9 0 0 0-.18.54V18h-6.6z"/><path d="M23.366 8.989a.6.6 0 0 1 0 1.2H13.2a.6.6 0 1 1 0-1.2zM19.8 13.789a.6.6 0 0 1 0 1.2h-6.6a.6.6 0 1 1 0-1.2zM19.8 17.389a.6.6 0 0 1 0 1.2h-6.6a.6.6 0 1 1 0-1.2zM8.146 10.194l-2.571 2.571a.6.6 0 1 0 .848.849l3.595-3.596.078-.093a.6.6 0 0 0-.078-.755L6.424 5.576a.6.6 0 0 0-.848 0 .6.6 0 0 0 0 .848l2.57 2.57h-5.84L.601 8.989a.601.601 0 0 0-.002 1.2l1.704.005z"/>'
  },
  tags: ["insert", "top", "text-formatting"]
};
var listUnorderedSquareIcon = {
  name: "list-unordered-square",
  content: '<path d="M20.91 4.919a.6.6 0 0 1 0 1.2H7.95a.6.6 0 1 1 0-1.2zM20.91 11.4a.6.6 0 1 1 0 1.2H7.95a.6.6 0 0 1 0-1.2zM20.91 17.88a.6.6 0 1 1 0 1.2H7.95a.6.6 0 0 1 0-1.2zM3.495 6.734a1.214 1.214 0 1 0 .001-2.429 1.214 1.214 0 0 0-.001 2.429"/><path d="M2.277 5.202a.9.9 0 0 1 .9-.9h.636a.9.9 0 0 1 .9.9v.636a.9.9 0 0 1-.9.9h-.636a.9.9 0 0 1-.9-.9zM2.277 11.681a.9.9 0 0 1 .9-.9h.636a.9.9 0 0 1 .9.9v.636a.9.9 0 0 1-.9.9h-.636a.9.9 0 0 1-.9-.9zM2.277 18.162a.9.9 0 0 1 .9-.9h.636a.9.9 0 0 1 .9.9v.636a.9.9 0 0 1-.9.9h-.636a.9.9 0 0 1-.9-.9z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M20.1 2.28a1.624 1.624 0 0 1 1.62 1.62v16.2a1.62 1.62 0 0 1-1.62 1.621H3.9A1.62 1.62 0 0 1 2.279 20.1V3.9A1.62 1.62 0 0 1 3.9 2.28zM5.513 15.64a.901.901 0 0 0-.809.895v.637c0 .496.403.899.9.9h.224a2 2 0 0 0 .193 0h.219a.9.9 0 0 0 .9-.9v-.637a.9.9 0 0 0-.9-.9h-.636a1 1 0 0 0-.091.005m4.057.41a.81.81 0 0 0 0 1.621h8.91a.808.808 0 1 0 0-1.621zm-3.966-5.268a.9.9 0 0 0-.9.9v.637a.9.9 0 0 0 .9.9h.636a.9.9 0 0 0 .9-.9v-.637a.9.9 0 0 0-.9-.9zm3.966.408a.808.808 0 1 0 0 1.621h8.91a.81.81 0 0 0 0-1.621zM5.605 5.93a.9.9 0 0 0-.9.9v.636a.9.9 0 0 0 .9.9l.32-.012.315.012a.9.9 0 0 0 .9-.9V6.83a.9.9 0 0 0-.9-.9zm3.965.4a.814.814 0 0 0-.81.81.81.81 0 0 0 .81.81h8.91a.81.81 0 0 0 0-1.62z"/>',
    "outline": '<path d="M20.91 4.919a.6.6 0 0 1 0 1.2H7.95a.6.6 0 1 1 0-1.2zM20.91 11.4a.6.6 0 1 1 0 1.2H7.95a.6.6 0 0 1 0-1.2zM20.91 17.88a.6.6 0 1 1 0 1.2H7.95a.6.6 0 0 1 0-1.2zM3.495 6.734a1.214 1.214 0 1 0 .001-2.429 1.214 1.214 0 0 0-.001 2.429"/><path d="M2.277 5.202a.9.9 0 0 1 .9-.9h.636a.9.9 0 0 1 .9.9v.636a.9.9 0 0 1-.9.9h-.636a.9.9 0 0 1-.9-.9zM2.277 11.681a.9.9 0 0 1 .9-.9h.636a.9.9 0 0 1 .9.9v.636a.9.9 0 0 1-.9.9h-.636a.9.9 0 0 1-.9-.9zM2.277 18.162a.9.9 0 0 1 .9-.9h.636a.9.9 0 0 1 .9.9v.636a.9.9 0 0 1-.9.9h-.636a.9.9 0 0 1-.9-.9z"/>',
    "duotone": '<path d="M20.91 5.52H7.95v12.96h12.96z" opacity="0.2"/><path d="M20.91 4.919a.6.6 0 0 1 0 1.2H7.95a.6.6 0 1 1 0-1.2zM20.91 11.4a.6.6 0 1 1 0 1.2H7.95a.6.6 0 0 1 0-1.2zM20.91 17.88a.6.6 0 1 1 0 1.2H7.95a.6.6 0 0 1 0-1.2zM3.495 6.734a1.214 1.214 0 1 0 .001-2.429 1.214 1.214 0 0 0-.001 2.429"/><path d="M2.277 5.202a.9.9 0 0 1 .9-.9h.636a.9.9 0 0 1 .9.9v.636a.9.9 0 0 1-.9.9h-.636a.9.9 0 0 1-.9-.9zM2.277 11.681a.9.9 0 0 1 .9-.9h.636a.9.9 0 0 1 .9.9v.636a.9.9 0 0 1-.9.9h-.636a.9.9 0 0 1-.9-.9zM2.277 18.162a.9.9 0 0 1 .9-.9h.636a.9.9 0 0 1 .9.9v.636a.9.9 0 0 1-.9.9h-.636a.9.9 0 0 1-.9-.9z"/>'
  },
  tags: ["list", "unordered", "square", "css", "bullet", "items", "menu"]
};
var lockIcon = {
  name: "lock",
  content: '<path d="M20.1 7.343h-3.443V4.71a4.658 4.658 0 0 0-9.315 0v2.633H3.899A1.416 1.416 0 0 0 2.482 8.76V20.1a1.416 1.416 0 0 0 1.417 1.417h16.2a1.416 1.416 0 0 0 1.417-1.417V8.76a1.416 1.416 0 0 0-1.417-1.417zM8.557 4.71a3.443 3.443 0 0 1 6.886 0v2.633H8.557zM20.302 20.1a.204.204 0 0 1-.203.203h-16.2a.204.204 0 0 1-.203-.203V8.76a.204.204 0 0 1 .203-.203h16.2a.204.204 0 0 1 .203.203zm-7.29-5.67a1.013 1.013 0 1 1-1.013-1.013 1.013 1.013 0 0 1 1.013 1.013"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M20.1 7.14h-3.24V4.71a4.86 4.86 0 0 0-9.72 0v2.43H3.9a1.62 1.62 0 0 0-1.62 1.62V20.1a1.62 1.62 0 0 0 1.62 1.62h16.2a1.62 1.62 0 0 0 1.62-1.62V8.76a1.62 1.62 0 0 0-1.62-1.62M12 15.646a1.216 1.216 0 1 1 1.214-1.216A1.216 1.216 0 0 1 12 15.646m3.24-8.506H8.76V4.71a3.24 3.24 0 0 1 6.48 0z"/>',
    "outline": '<path d="M20.1 7.343h-3.443V4.71a4.658 4.658 0 0 0-9.315 0v2.633H3.899A1.416 1.416 0 0 0 2.482 8.76V20.1a1.416 1.416 0 0 0 1.417 1.417h16.2a1.416 1.416 0 0 0 1.417-1.417V8.76a1.416 1.416 0 0 0-1.417-1.417zM8.557 4.71a3.443 3.443 0 0 1 6.886 0v2.633H8.557zM20.302 20.1a.204.204 0 0 1-.203.203h-16.2a.204.204 0 0 1-.203-.203V8.76a.204.204 0 0 1 .203-.203h16.2a.204.204 0 0 1 .203.203zm-7.29-5.67a1.013 1.013 0 1 1-1.013-1.013 1.013 1.013 0 0 1 1.013 1.013"/>',
    "duotone": '<path d="M20.91 8.76V20.1a.81.81 0 0 1-.81.81H3.9a.81.81 0 0 1-.81-.81V8.76a.81.81 0 0 1 .81-.81h16.2a.81.81 0 0 1 .81.81" opacity="0.2"/><path d="M20.1 7.14h-3.24V4.71a4.86 4.86 0 0 0-9.72 0v2.43H3.9a1.62 1.62 0 0 0-1.62 1.62V20.1a1.62 1.62 0 0 0 1.62 1.62h16.2a1.62 1.62 0 0 0 1.62-1.62V8.76a1.62 1.62 0 0 0-1.62-1.62M8.76 4.71a3.24 3.24 0 0 1 6.48 0v2.43H8.76zM20.1 20.1H3.9V8.76h16.2zm-6.886-5.67A1.216 1.216 0 1 1 12 13.216a1.216 1.216 0 0 1 1.214 1.215z"/>'
  },
  tags: ["padlock", "security", "secured", "authentication", "authenticated", "login", "locked", "encrypted", "encryption", "privacy", "private"]
};
var maxWidthIcon = {
  name: "max-width",
  content: '<path d="M19.801 11.67a.6.6 0 0 1-.077.754l-3.24 3.24a.6.6 0 0 1-.849-.848L18.451 12l-2.816-2.816a.6.6 0 1 1 .849-.848l3.24 3.24z"/><path d="M4.719 11.4H19.3a.6.6 0 0 1 0 1.2H4.719a.6.6 0 0 1 0-1.2M21.609 19.8V4.2a.6.6 0 0 1 1.2 0v15.6a.6.6 0 1 1-1.2 0M1.191 19.8V4.2a.6.6 0 1 1 1.2 0v15.6a.6.6 0 0 1-1.2 0"/><path d="M8.384 14.816a.6.6 0 1 1-.849.848l-3.24-3.24a.6.6 0 0 1 0-.848l3.24-3.24a.6.6 0 1 1 .849.848L5.568 12z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path fill-rule="evenodd" d="M21.72 20.821a.9.9 0 0 1-.9.9H3.18a.9.9 0 0 1-.9-.9V3.18a.9.9 0 0 1 .9-.9h17.64a.9.9 0 0 1 .9.9zM5.292 6.472a.81.81 0 0 0-1.62 0v11.057a.811.811 0 0 0 1.62 0zm12.109 5.501a1 1 0 0 0-.01-.095q-.004-.03-.009-.057-.012-.046-.028-.091-.008-.026-.017-.051a1 1 0 0 0-.068-.124l-.004-.007a1 1 0 0 0-.099-.12l-2.297-2.297a.81.81 0 0 0-1.145 1.146l.914.913H9.364l.913-.913a.811.811 0 0 0-1.146-1.146l-2.296 2.297a1 1 0 0 0-.1.123l-.02.035a.8.8 0 0 0-.062.7q.004.01.006.019a1 1 0 0 0 .053.1q.01.023.023.044.044.067.1.124l2.296 2.297a.811.811 0 0 0 1.146-1.146l-.914-.914h5.275l-.914.914a.811.811 0 0 0 1.145 1.146l2.297-2.297a1 1 0 0 0 .097-.118l.014-.024a1 1 0 0 0 .056-.103q.011-.028.021-.057a.6.6 0 0 0 .037-.143q.007-.048.01-.098l.002-.03zm2.927-5.501a.81.81 0 0 0-1.62 0v11.057a.81.81 0 0 0 1.62 0z" clip-rule="evenodd"/>',
    "outline": '<path d="M19.801 11.67a.6.6 0 0 1-.077.754l-3.24 3.24a.6.6 0 0 1-.849-.848L18.451 12l-2.816-2.816a.6.6 0 1 1 .849-.848l3.24 3.24z"/><path d="M4.719 11.4H19.3a.6.6 0 0 1 0 1.2H4.719a.6.6 0 0 1 0-1.2M21.609 19.8V4.2a.6.6 0 0 1 1.2 0v15.6a.6.6 0 1 1-1.2 0M1.191 19.8V4.2a.6.6 0 1 1 1.2 0v15.6a.6.6 0 0 1-1.2 0"/><path d="M8.384 14.816a.6.6 0 1 1-.849.848l-3.24-3.24a.6.6 0 0 1 0-.848l3.24-3.24a.6.6 0 1 1 .849.848L5.568 12z"/>',
    "duotone": '<path d="M19.792 11.67a.6.6 0 0 1-.078.754l-3.24 3.24a.599.599 0 1 1-.848-.848L18.442 12l-2.816-2.816a.6.6 0 0 1 .848-.848l3.24 3.24z"/><path d="M4.71 11.4h14.58a.6.6 0 1 1 0 1.2H4.71a.6.6 0 1 1 0-1.2M21.6 19.8V4.2a.6.6 0 0 1 1.2 0v15.6a.6.6 0 0 1-1.2 0M1.181 19.8V4.2a.6.6 0 0 1 1.2 0v15.6a.6.6 0 1 1-1.2 0"/><path d="M8.374 14.816a.6.6 0 0 1-.848.848l-3.24-3.24a.6.6 0 0 1 0-.848l3.24-3.24a.6.6 0 0 1 .848 0 .6.6 0 0 1 0 .848L5.558 12z"/><path fill-opacity="0.2" d="M1.594 9.66a.9.9 0 0 1 .9-.9h19.012a.9.9 0 0 1 .9.9v4.68a.9.9 0 0 1-.9.9H2.494a.9.9 0 0 1-.9-.9z"/>'
  },
  tags: ["max", "width", "css", "layout"]
};
var menuIcon = {
  name: "menu",
  content: '<path d="M21.517 12a.607.607 0 0 1-.607.607H3.09a.608.608 0 0 1 0-1.215h17.82a.607.607 0 0 1 .607.607zM3.09 6.127h17.82a.608.608 0 0 0 0-1.215H3.09a.608.608 0 0 0 0 1.215m17.82 11.746H3.09a.607.607 0 0 0 0 1.214h17.82a.607.607 0 0 0 0-1.214"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M20.1 2.28H3.9A1.62 1.62 0 0 0 2.28 3.9v16.2a1.62 1.62 0 0 0 1.62 1.62h16.2a1.62 1.62 0 0 0 1.62-1.62V3.9a1.62 1.62 0 0 0-1.62-1.62m-1.62 15.39H5.52a.81.81 0 0 1 0-1.62h12.96a.81.81 0 0 1 0 1.62m0-4.86H5.52a.81.81 0 0 1 0-1.62h12.96a.81.81 0 0 1 0 1.62m0-4.86H5.52a.81.81 0 0 1 0-1.62h12.96a.81.81 0 0 1 0 1.62"/>',
    "outline": '<path d="M21.517 12a.607.607 0 0 1-.607.607H3.09a.608.608 0 0 1 0-1.215h17.82a.607.607 0 0 1 .607.607zM3.09 6.127h17.82a.608.608 0 0 0 0-1.215H3.09a.608.608 0 0 0 0 1.215m17.82 11.746H3.09a.607.607 0 0 0 0 1.214h17.82a.607.607 0 0 0 0-1.214"/>',
    "duotone": '<path d="M20.91 5.52v12.96H3.09V5.52z" opacity="0.2"/><path d="M21.72 12a.81.81 0 0 1-.81.81H3.09a.81.81 0 0 1 0-1.62h17.82a.81.81 0 0 1 .81.81M3.09 6.33h17.82a.81.81 0 0 0 0-1.62H3.09a.81.81 0 0 0 0 1.62m17.82 11.34H3.09a.81.81 0 0 0 0 1.62h17.82a.81.81 0 0 0 0-1.62"/>'
  },
  tags: ["menu", "navigation", "hamburger", "sidebar"]
};
var minusIcon = {
  name: "minus",
  content: '<path d="M21.517 12a.607.607 0 0 1-.607.607H3.09a.608.608 0 0 1 0-1.215h17.82a.607.607 0 0 1 .607.607z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M20.1 2.28H3.9A1.62 1.62 0 0 0 2.28 3.9v16.2a1.62 1.62 0 0 0 1.62 1.62h16.2a1.62 1.62 0 0 0 1.62-1.62V3.9a1.62 1.62 0 0 0-1.62-1.62m-2.43 10.53H6.33a.81.81 0 0 1 0-1.62h11.34a.81.81 0 0 1 0 1.62"/>',
    "outline": '<path d="M21.517 12a.607.607 0 0 1-.607.607H3.09a.608.608 0 0 1 0-1.215h17.82a.607.607 0 0 1 .607.607z"/>',
    "duotone": '<path d="M20.91 4.71v14.58a1.62 1.62 0 0 1-1.62 1.62H4.71a1.62 1.62 0 0 1-1.62-1.62V4.71a1.62 1.62 0 0 1 1.62-1.62h14.58a1.62 1.62 0 0 1 1.62 1.62" opacity="0.2"/><path d="M21.72 12a.81.81 0 0 1-.81.81H3.09a.81.81 0 0 1 0-1.62h17.82a.81.81 0 0 1 .81.81"/>'
  },
  tags: ["-", "subtraction", "difference", "mathematics", "arithmetic", "calculator", "line", "horizontal", "divider"]
};
var moreHorizontalIcon = {
  name: "more-horizontal",
  content: '<path d="M13.013 12A1.013 1.013 0 1 1 12 10.987 1.013 1.013 0 0 1 13.013 12m-7.897-1.013A1.013 1.013 0 1 0 6.128 12a1.013 1.013 0 0 0-1.012-1.013m13.77 0A1.013 1.013 0 1 0 19.898 12a1.013 1.013 0 0 0-1.012-1.013"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M21.72 7.14H2.28A1.62 1.62 0 0 0 .66 8.76v6.48a1.62 1.62 0 0 0 1.62 1.62h19.44a1.62 1.62 0 0 0 1.62-1.62V8.76a1.62 1.62 0 0 0-1.62-1.62M5.114 13.216a1.216 1.216 0 1 1 1.216-1.215 1.216 1.216 0 0 1-1.216 1.215m6.886 0a1.216 1.216 0 1 1 1.214-1.215A1.216 1.216 0 0 1 12 13.216m6.886 0a1.216 1.216 0 1 1 1.214-1.215 1.216 1.216 0 0 1-1.214 1.215"/>',
    "outline": '<path d="M13.013 12A1.013 1.013 0 1 1 12 10.987 1.013 1.013 0 0 1 13.013 12m-7.897-1.013A1.013 1.013 0 1 0 6.128 12a1.013 1.013 0 0 0-1.012-1.013m13.77 0A1.013 1.013 0 1 0 19.898 12a1.013 1.013 0 0 0-1.012-1.013"/>',
    "duotone": '<path d="M23.34 8.76v6.48a1.62 1.62 0 0 1-1.62 1.62H2.28a1.62 1.62 0 0 1-1.62-1.62V8.76a1.62 1.62 0 0 1 1.62-1.62h19.44a1.62 1.62 0 0 1 1.62 1.62" opacity="0.2"/><path d="M13.216 12a1.216 1.216 0 1 1-1.215-1.214A1.216 1.216 0 0 1 13.216 12m5.67-1.214A1.216 1.216 0 1 0 20.1 12a1.216 1.216 0 0 0-1.214-1.214m-13.77 0A1.216 1.216 0 1 0 6.331 12a1.216 1.216 0 0 0-1.215-1.214"/>'
  },
  tags: ["more", "horizontal", "actions"]
};
var moreVerticalIcon = {
  name: "more-vertical",
  content: '<path d="M10.987 5.116A1.013 1.013 0 1 1 12 6.128a1.013 1.013 0 0 1-1.013-1.012M12 10.988a1.013 1.013 0 1 0 1.013 1.013A1.013 1.013 0 0 0 12 10.988m0 6.886a1.013 1.013 0 1 0 1.013 1.013A1.013 1.013 0 0 0 12 17.874"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M15.24.66H8.76a1.62 1.62 0 0 0-1.62 1.62v19.44a1.62 1.62 0 0 0 1.62 1.62h6.48a1.62 1.62 0 0 0 1.62-1.62V2.28A1.62 1.62 0 0 0 15.24.66M12 20.1a1.216 1.216 0 1 1 1.214-1.214A1.216 1.216 0 0 1 12 20.1m0-6.886A1.216 1.216 0 1 1 13.214 12 1.216 1.216 0 0 1 12 13.214m0-6.885a1.216 1.216 0 1 1 1.214-1.216A1.216 1.216 0 0 1 12 6.329"/>',
    "outline": '<path d="M10.987 5.116A1.013 1.013 0 1 1 12 6.128a1.013 1.013 0 0 1-1.013-1.012M12 10.988a1.013 1.013 0 1 0 1.013 1.013A1.013 1.013 0 0 0 12 10.988m0 6.886a1.013 1.013 0 1 0 1.013 1.013A1.013 1.013 0 0 0 12 17.874"/>',
    "duotone": '<path d="M16.86 2.28v19.44a1.62 1.62 0 0 1-1.62 1.62H8.76a1.62 1.62 0 0 1-1.62-1.62V2.28A1.62 1.62 0 0 1 8.76.66h6.48a1.62 1.62 0 0 1 1.62 1.62" opacity="0.2"/><path d="M13.216 12a1.216 1.216 0 1 1-1.215-1.214A1.216 1.216 0 0 1 13.216 12m-1.215-5.67a1.216 1.216 0 1 0-1.214-1.216 1.216 1.216 0 0 0 1.214 1.216m0 11.34a1.216 1.216 0 1 0 1.215 1.214 1.216 1.216 0 0 0-1.215-1.215z"/>'
  },
  tags: ["more", "vertical", "actions"]
};
var paletteIcon = {
  name: "palette",
  content: '<path d="M19.226 4.64A10.26 10.26 0 0 0 12 1.673h-.101A10.327 10.327 0 0 0 1.673 12c0 4.261 2.64 7.841 6.885 9.341a3.1 3.1 0 0 0 1.024.176 3.043 3.043 0 0 0 3.026-3.037 1.824 1.824 0 0 1 1.823-1.823h4.679a3.02 3.02 0 0 0 2.962-2.36 10.4 10.4 0 0 0 .256-2.388 10.25 10.25 0 0 0-3.1-7.27zm1.66 9.386a1.81 1.81 0 0 1-1.777 1.417H14.43a3.036 3.036 0 0 0-3.037 3.037 1.824 1.824 0 0 1-2.43 1.721C5.216 18.87 2.887 15.731 2.887 12a9.113 9.113 0 0 1 9.018-9.113h.094a9.144 9.144 0 0 1 9.113 9.034 9 9 0 0 1-.227 2.103zm-7.873-7.29A1.013 1.013 0 1 1 12 5.723a1.013 1.013 0 0 1 1.013 1.013m-4.456 2.43a1.013 1.013 0 1 1-1.013-1.013 1.013 1.013 0 0 1 1.013 1.013m0 5.67a1.013 1.013 0 1 1-1.013-1.013 1.013 1.013 0 0 1 1.013 1.013m8.91-5.67a1.013 1.013 0 1 1-1.013-1.013 1.013 1.013 0 0 1 1.013 1.013"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M19.368 4.496A10.44 10.44 0 0 0 12 1.47h-.108A10.53 10.53 0 0 0 1.47 12c0 4.354 2.692 8.005 7.022 9.535a3.24 3.24 0 0 0 4.318-3.055 1.62 1.62 0 0 1 1.62-1.62h4.679a3.22 3.22 0 0 0 3.159-2.519 10.6 10.6 0 0 0 .263-2.43 10.44 10.44 0 0 0-3.162-7.415zM7.546 16.05a1.216 1.216 0 1 1 1.215-1.214 1.216 1.216 0 0 1-1.215 1.214m0-5.67a1.216 1.216 0 1 1 1.215-1.214 1.216 1.216 0 0 1-1.215 1.215zm4.455-2.43a1.216 1.216 0 1 1 1.215-1.216 1.216 1.216 0 0 1-1.215 1.216m4.456 2.43a1.216 1.216 0 1 1 1.215-1.214 1.216 1.216 0 0 1-1.215 1.215z"/>',
    "outline": '<path d="M19.226 4.64A10.26 10.26 0 0 0 12 1.673h-.101A10.327 10.327 0 0 0 1.673 12c0 4.261 2.64 7.841 6.885 9.341a3.1 3.1 0 0 0 1.024.176 3.043 3.043 0 0 0 3.026-3.037 1.824 1.824 0 0 1 1.823-1.823h4.679a3.02 3.02 0 0 0 2.962-2.36 10.4 10.4 0 0 0 .256-2.388 10.25 10.25 0 0 0-3.1-7.27zm1.66 9.386a1.81 1.81 0 0 1-1.777 1.417H14.43a3.036 3.036 0 0 0-3.037 3.037 1.824 1.824 0 0 1-2.43 1.721C5.216 18.87 2.887 15.731 2.887 12a9.113 9.113 0 0 1 9.018-9.113h.094a9.144 9.144 0 0 1 9.113 9.034 9 9 0 0 1-.227 2.103zm-7.873-7.29A1.013 1.013 0 1 1 12 5.723a1.013 1.013 0 0 1 1.013 1.013m-4.456 2.43a1.013 1.013 0 1 1-1.013-1.013 1.013 1.013 0 0 1 1.013 1.013m0 5.67a1.013 1.013 0 1 1-1.013-1.013 1.013 1.013 0 0 1 1.013 1.013m8.91-5.67a1.013 1.013 0 1 1-1.013-1.013 1.013 1.013 0 0 1 1.013 1.013"/>',
    "duotone": '<path d="M21.72 11.916a9.6 9.6 0 0 1-.242 2.245 2.43 2.43 0 0 1-2.369 1.889H14.43A2.43 2.43 0 0 0 12 18.48a2.43 2.43 0 0 1-3.24 2.29C4.986 19.436 2.28 16.234 2.28 12a9.72 9.72 0 0 1 9.619-9.72c5.35-.054 9.775 4.288 9.821 9.636" opacity="0.2"/><path d="M19.368 4.496A10.44 10.44 0 0 0 12 1.47h-.108A10.53 10.53 0 0 0 1.47 12c0 4.354 2.692 8.005 7.022 9.535a3.24 3.24 0 0 0 4.318-3.055 1.62 1.62 0 0 1 1.62-1.62h4.679a3.22 3.22 0 0 0 3.159-2.519 10.6 10.6 0 0 0 .263-2.43 10.44 10.44 0 0 0-3.162-7.415zm1.316 9.489a1.61 1.61 0 0 1-1.575 1.255H14.43a3.24 3.24 0 0 0-3.24 3.24 1.62 1.62 0 0 1-2.158 1.526C5.368 18.714 3.09 15.646 3.09 12a8.91 8.91 0 0 1 8.818-8.91h.091a8.946 8.946 0 0 1 8.91 8.834 9 9 0 0 1-.221 2.061zm-7.468-7.249a1.216 1.216 0 1 1-1.215-1.216 1.216 1.216 0 0 1 1.215 1.216m-4.455 2.43a1.216 1.216 0 1 1-1.215-1.215 1.216 1.216 0 0 1 1.215 1.215m0 5.67a1.216 1.216 0 1 1-1.215-1.215 1.216 1.216 0 0 1 1.215 1.215m8.91-5.67a1.216 1.216 0 1 1-1.214-1.216 1.216 1.216 0 0 1 1.214 1.216"/>'
  },
  tags: ["paint", "colors", "color picker", "arts"]
};
var paperPlaneIcon = {
  name: "paper-plane",
  content: '<path d="M21.911 2.089a1.4 1.4 0 0 0-1.387-.362h-.011L1.08 7.622a1.417 1.417 0 0 0-.217 2.642l8.663 4.215 4.208 8.658a1.4 1.4 0 0 0 1.277.81q.061.001.122-.005a1.4 1.4 0 0 0 1.245-1.021l5.893-19.433v-.01a1.4 1.4 0 0 0-.36-1.388zm-.81 1.053-5.887 19.43v.011a.203.203 0 0 1-.381.026l-4.118-8.462 4.961-4.961a.607.607 0 1 0-.86-.859l-4.96 4.961-8.47-4.125a.203.203 0 0 1 .031-.379h.011l19.43-5.891a.19.19 0 0 1 .195.053.2.2 0 0 1 .053.194z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M22.469 3.529v.016l-5.893 19.434a1.61 1.61 0 0 1-1.418 1.165q-.07.006-.139.006a1.61 1.61 0 0 1-1.46-.926L9.874 15.66a.41.41 0 0 1 .078-.463l5.864-5.865a.81.81 0 0 0-1.145-1.144l-5.868 5.864a.41.41 0 0 1-.463.078L.769 10.446a1.62 1.62 0 0 1 .252-3.017l19.434-5.893h.016A1.62 1.62 0 0 1 22.47 3.53z"/>',
    "outline": '<path d="M21.911 2.089a1.4 1.4 0 0 0-1.387-.362h-.011L1.08 7.622a1.417 1.417 0 0 0-.217 2.642l8.663 4.215 4.208 8.658a1.4 1.4 0 0 0 1.277.81q.061.001.122-.005a1.4 1.4 0 0 0 1.245-1.021l5.893-19.433v-.01a1.4 1.4 0 0 0-.36-1.388zm-.81 1.053-5.887 19.43v.011a.203.203 0 0 1-.381.026l-4.118-8.462 4.961-4.961a.607.607 0 1 0-.86-.859l-4.96 4.961-8.47-4.125a.203.203 0 0 1 .031-.379h.011l19.43-5.891a.19.19 0 0 1 .195.053.2.2 0 0 1 .053.194z"/>',
    "duotone": '<path d="m21.689 3.311-5.895 19.44a.81.81 0 0 1-1.51.126l-4.308-8.853-8.852-4.308a.81.81 0 0 1 .126-1.51l19.44-5.895a.81.81 0 0 1 .999 1" opacity="0.2"/><path d="M22.056 1.944a1.62 1.62 0 0 0-1.585-.413h-.016L1.021 7.428a1.62 1.62 0 0 0-.252 3.017l8.598 4.188 4.182 8.593a1.61 1.61 0 0 0 1.462.924q.07 0 .139-.006a1.61 1.61 0 0 0 1.417-1.165L22.46 3.545v-.016a1.62 1.62 0 0 0-.405-1.585zm-7.036 20.57-.004.015v-.007l-4.056-8.333 4.86-4.86a.81.81 0 0 0-1.145-1.145l-4.86 4.86-8.337-4.056h-.007.015L20.91 3.09z"/>'
  },
  tags: ["mail", "email", "send", "sent", "messages", "messaging", "toys", "games"]
};
var paperclipIcon = {
  name: "paperclip",
  content: '<path d="M20.125 11.57a.607.607 0 0 1 0 .86l-8.309 8.302a5.468 5.468 0 0 1-7.731-7.734L14.136 2.801A3.848 3.848 0 1 1 19.58 8.24L9.528 18.434a2.228 2.228 0 1 1-3.154-3.147l8.433-8.573a.607.607 0 0 1 .866.852l-8.432 8.576a1.013 1.013 0 1 0 1.429 1.436L18.718 7.382a2.633 2.633 0 1 0-3.72-3.726L4.945 13.85a4.253 4.253 0 1 0 6.011 6.018l8.309-8.302a.607.607 0 0 1 .859.003z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M12 1.47A10.53 10.53 0 1 0 22.53 12 10.54 10.54 0 0 0 12 1.47m3.814 5.096a.81.81 0 0 0-1.146 0l-6.809 6.952a2.431 2.431 0 1 0 3.433 3.443l4.993-5.095A.81.81 0 1 1 17.442 13l-4.999 5.101a4.05 4.05 0 1 1-5.733-5.722l6.809-6.951a2.431 2.431 0 1 1 3.443 3.433l-6.814 6.945a.81.81 0 1 1-1.156-1.134l6.814-6.955a.81.81 0 0 0 .006-1.151z"/>',
    "outline": '<path d="M20.125 11.57a.607.607 0 0 1 0 .86l-8.309 8.302a5.468 5.468 0 0 1-7.731-7.734L14.136 2.801A3.848 3.848 0 1 1 19.58 8.24L9.528 18.434a2.228 2.228 0 1 1-3.154-3.147l8.433-8.573a.607.607 0 0 1 .866.852l-8.432 8.576a1.013 1.013 0 1 0 1.429 1.436L18.718 7.382a2.633 2.633 0 1 0-3.72-3.726L4.945 13.85a4.253 4.253 0 1 0 6.011 6.018l8.309-8.302a.607.607 0 0 1 .859.003z"/>',
    "duotone": '<path d="M17.341 9.646 19.696 12l-8.309 8.297a4.86 4.86 0 0 1-6.873-6.873L14.569 3.229a3.24 3.24 0 0 1 4.583 4.583z" opacity="0.2"/><path d="M20.268 11.426a.81.81 0 0 1 0 1.146l-8.308 8.303a5.671 5.671 0 0 1-8.019-8.019l10.05-10.198a4.05 4.05 0 1 1 5.731 5.725L9.67 18.581a2.435 2.435 0 1 1-3.443-3.443L14.66 6.57a.81.81 0 1 1 1.155 1.136L7.38 16.283a.81.81 0 1 0 1.141 1.151L18.572 7.241a2.432 2.432 0 1 0-3.435-3.443L5.089 13.992a4.05 4.05 0 1 0 5.724 5.732l8.309-8.302a.81.81 0 0 1 1.145.003z"/>'
  },
  tags: ["attachments", "mail", "email", "office"]
};
var pasteSparkleIcon = {
  name: "paste-sparkle",
  content: '<path fill-rule="evenodd" d="m9.229 3.869.022-.03zm5.543 0-.023-.03z" clip-rule="evenodd"/><path d="M13.836 10.099a.9.9 0 0 1 .406.094l.121.071.109.089a1 1 0 0 1 .169.221l.059.127.725 1.97 1.973.728a.9.9 0 0 1 .349.228l.088.109.071.121a.92.92 0 0 1-.071.932.93.93 0 0 1-.436.337l-1.972.727-.727 1.971a.919.919 0 0 1-1.727.001l-.728-1.973-1.97-.726a.918.918 0 0 1-.437-1.39l.089-.109a.9.9 0 0 1 .348-.228l1.97-.728.728-1.97.058-.127a.9.9 0 0 1 .279-.31l.121-.071a.9.9 0 0 1 .405-.094m-.56 3.248a.6.6 0 0 1-.355.355l-1.521.561 1.521.56.116.058c.109.07.194.174.239.298l.56 1.519.561-1.519.058-.117a.6.6 0 0 1 .298-.239l1.519-.56-1.519-.561a.6.6 0 0 1-.356-.355l-.561-1.521zM10.268 8.887c.331.001.6.269.6.6v.612h.612a.6.6 0 0 1 0 1.2h-.612v.612a.601.601 0 0 1-1.2 0v-.612h-.612a.6.6 0 0 1 0-1.2h.612v-.612a.6.6 0 0 1 .6-.6"/><path d="M8.472 2.895H4.71a1.41 1.41 0 0 0-1.41 1.41v17.009a1.41 1.41 0 0 0 1.41 1.411h14.58a1.41 1.41 0 0 0 1.41-1.411V4.305a1.41 1.41 0 0 0-1.41-1.41h-3.762a4.65 4.65 0 0 0-7.056 0m.757.974.022-.03a3.45 3.45 0 0 1 5.498 0l.023.03c.438.591.678 1.311.678 2.056v.209h-6.9v-.209c0-.745.24-1.465.679-2.056m-1.504.226a4.7 4.7 0 0 0-.375 1.83v.809a.6.6 0 0 0 .6.6h8.1a.6.6 0 0 0 .6-.6v-.809c0-.635-.13-1.257-.375-1.83h3.015a.207.207 0 0 1 .21.21v17.009a.21.21 0 0 1-.21.211H4.71a.211.211 0 0 1-.21-.211V4.305a.207.207 0 0 1 .21-.21z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M14.397 13.347c.06.165.191.294.356.355l1.519.56-1.519.561a.6.6 0 0 0-.298.239l-.058.117-.561 1.519-.56-1.519a.6.6 0 0 0-.239-.298l-.116-.058-1.521-.561 1.521-.56a.6.6 0 0 0 .355-.355l.56-1.521z"/><path fill-rule="evenodd" d="M12 1.274a4.65 4.65 0 0 1 3.526 1.621h3.764a1.407 1.407 0 0 1 1.41 1.41v17.01a1.41 1.41 0 0 1-1.41 1.411H4.71a1.408 1.408 0 0 1-1.41-1.411V4.305a1.407 1.407 0 0 1 1.41-1.41h3.764q.114-.134.238-.259A4.65 4.65 0 0 1 12 1.274m1.836 8.825a.9.9 0 0 0-.405.093l-.121.072a.9.9 0 0 0-.279.309l-.058.128-.728 1.97-1.97.728a.9.9 0 0 0-.348.228l-.089.109a.92.92 0 0 0 0 1.052c.107.155.26.273.437.338l1.97.725.728 1.973a.93.93 0 0 0 .337.437.93.93 0 0 0 1.053 0 .93.93 0 0 0 .337-.436l.727-1.973 1.971-.726a.923.923 0 0 0 .508-1.269l-.071-.121-.088-.109a.9.9 0 0 0-.348-.228l-1.974-.728-.725-1.97-.059-.128a1 1 0 0 0-.169-.22l-.109-.089-.121-.072a.9.9 0 0 0-.406-.093m-3.568-1.213c-.331 0-.6.27-.6.601v.612h-.612a.6.6 0 1 0 0 1.2h.612v.611a.6.6 0 0 0 1.2 0v-.611h.612a.601.601 0 0 0 0-1.2h-.612v-.612a.6.6 0 0 0-.6-.601M12 2.474a3.45 3.45 0 0 0-3.45 3.45v.21h6.9v-.21A3.45 3.45 0 0 0 12 2.474" clip-rule="evenodd"/>',
    "outline": '<path fill-rule="evenodd" d="m9.229 3.869.022-.03zm5.543 0-.023-.03z" clip-rule="evenodd"/><path d="M13.836 10.099a.9.9 0 0 1 .406.094l.121.071.109.089a1 1 0 0 1 .169.221l.059.127.725 1.97 1.973.728a.9.9 0 0 1 .349.228l.088.109.071.121a.92.92 0 0 1-.071.932.93.93 0 0 1-.436.337l-1.972.727-.727 1.971a.919.919 0 0 1-1.727.001l-.728-1.973-1.97-.726a.918.918 0 0 1-.437-1.39l.089-.109a.9.9 0 0 1 .348-.228l1.97-.728.728-1.97.058-.127a.9.9 0 0 1 .279-.31l.121-.071a.9.9 0 0 1 .405-.094m-.56 3.248a.6.6 0 0 1-.355.355l-1.521.561 1.521.56.116.058c.109.07.194.174.239.298l.56 1.519.561-1.519.058-.117a.6.6 0 0 1 .298-.239l1.519-.56-1.519-.561a.6.6 0 0 1-.356-.355l-.561-1.521zM10.268 8.887c.331.001.6.269.6.6v.612h.612a.6.6 0 0 1 0 1.2h-.612v.612a.601.601 0 0 1-1.2 0v-.612h-.612a.6.6 0 0 1 0-1.2h.612v-.612a.6.6 0 0 1 .6-.6"/><path d="M8.472 2.895H4.71a1.41 1.41 0 0 0-1.41 1.41v17.009a1.41 1.41 0 0 0 1.41 1.411h14.58a1.41 1.41 0 0 0 1.41-1.411V4.305a1.41 1.41 0 0 0-1.41-1.41h-3.762a4.65 4.65 0 0 0-7.056 0m.757.974.022-.03a3.45 3.45 0 0 1 5.498 0l.023.03c.438.591.678 1.311.678 2.056v.209h-6.9v-.209c0-.745.24-1.465.679-2.056m-1.504.226a4.7 4.7 0 0 0-.375 1.83v.809a.6.6 0 0 0 .6.6h8.1a.6.6 0 0 0 .6-.6v-.809c0-.635-.13-1.257-.375-1.83h3.015a.207.207 0 0 1 .21.21v17.009a.21.21 0 0 1-.21.211H4.71a.211.211 0 0 1-.21-.211V4.305a.207.207 0 0 1 .21-.21z"/>',
    "duotone": '<path fill-rule="evenodd" d="M12 1.274a4.65 4.65 0 0 1 3.526 1.621h3.764a1.407 1.407 0 0 1 1.41 1.41v17.01a1.41 1.41 0 0 1-1.41 1.411H4.71a1.408 1.408 0 0 1-1.41-1.411V4.305a1.407 1.407 0 0 1 1.41-1.41h3.764q.114-.134.238-.259A4.65 4.65 0 0 1 12 1.274M4.71 4.095a.2.2 0 0 0-.149.061.2.2 0 0 0-.061.149v17.01a.21.21 0 0 0 .21.211h14.58a.213.213 0 0 0 .21-.211V4.305a.2.2 0 0 0-.061-.149.2.2 0 0 0-.149-.061h-3.016a4.65 4.65 0 0 1 .376 1.829v.81a.6.6 0 0 1-.6.6h-8.1a.6.6 0 0 1-.6-.6v-.81c0-.635.131-1.256.376-1.829zM12 2.474a3.45 3.45 0 0 0-3.45 3.45v.21h6.9v-.21A3.45 3.45 0 0 0 12 2.474" clip-rule="evenodd"/><path d="M13.836 10.099c.141 0 .28.032.406.093l.121.072.109.089a1 1 0 0 1 .169.22l.059.128.725 1.97 1.973.728a.9.9 0 0 1 .349.228l.088.109.071.121a.92.92 0 0 1-.071.931.9.9 0 0 1-.436.338l-1.972.726-.727 1.972a.93.93 0 0 1-.337.437.93.93 0 0 1-1.053 0 .93.93 0 0 1-.337-.436l-.728-1.974-1.97-.725a.916.916 0 0 1-.437-1.39l.089-.109a.9.9 0 0 1 .348-.228l1.97-.728.728-1.97.058-.128a.9.9 0 0 1 .279-.309l.121-.072a.9.9 0 0 1 .405-.093m-.56 3.248a.6.6 0 0 1-.355.355l-1.521.56 1.521.561.116.058c.109.07.194.174.239.298l.56 1.519.561-1.519.058-.117a.6.6 0 0 1 .298-.239l1.519-.561-1.519-.56a.6.6 0 0 1-.356-.355l-.561-1.521zM10.268 8.886c.331 0 .6.27.6.601v.612h.612a.6.6 0 1 1 0 1.2h-.612v.611a.6.6 0 0 1-1.2 0v-.611h-.612a.6.6 0 0 1 0-1.2h.612v-.612c0-.331.269-.601.6-.601"/><path fill-opacity="0.2" fill-rule="evenodd" d="M4.561 4.156a.2.2 0 0 1 .149-.061h3.016a4.65 4.65 0 0 0-.376 1.829v.81a.6.6 0 0 0 .6.6h8.1a.6.6 0 0 0 .6-.6v-.81a4.65 4.65 0 0 0-.376-1.829h3.016c.056 0 .11.022.149.061a.2.2 0 0 1 .061.149v17.01a.21.21 0 0 1-.21.211H4.71a.213.213 0 0 1-.21-.211V4.305c0-.056.022-.11.061-.149m9.275 5.943c.141 0 .28.032.406.093l.121.072.109.089a1 1 0 0 1 .169.22l.059.128.725 1.97 1.973.728a.9.9 0 0 1 .349.228l.088.109.071.121a.92.92 0 0 1-.071.931.9.9 0 0 1-.436.338l-1.972.726-.727 1.972a.93.93 0 0 1-.337.437.93.93 0 0 1-1.053 0 .93.93 0 0 1-.337-.436l-.728-1.974-1.97-.725a.916.916 0 0 1-.437-1.39l.089-.109a.9.9 0 0 1 .348-.228l1.97-.728.728-1.97.058-.128a.9.9 0 0 1 .279-.309l.121-.072a.9.9 0 0 1 .405-.093m-3.568-1.213c.331 0 .6.27.6.601v.612h.612a.6.6 0 1 1 0 1.2h-.612v.611a.6.6 0 0 1-1.2 0v-.611h-.612a.6.6 0 0 1 0-1.2h.612v-.612c0-.331.269-.601.6-.601" clip-rule="evenodd"/><path fill-opacity="0.2" fill-rule="evenodd" d="M12.921 13.702a.6.6 0 0 0 .355-.355l.56-1.521.561 1.521c.06.165.191.294.356.355l1.519.56-1.519.561a.6.6 0 0 0-.298.239l-.058.117-.561 1.519-.56-1.519a.6.6 0 0 0-.239-.298l-.116-.058-1.521-.561z" clip-rule="evenodd"/>'
  },
  tags: ["paste", "sparkle", "editing", "clipboard"]
};
var pauseIcon = {
  name: "pause",
  content: '<path d="M19.29 2.483h-4.05A1.416 1.416 0 0 0 13.823 3.9v16.2a1.416 1.416 0 0 0 1.417 1.417h4.05a1.416 1.416 0 0 0 1.417-1.417V3.9a1.416 1.416 0 0 0-1.417-1.417m.203 17.617a.204.204 0 0 1-.203.203h-4.05a.204.204 0 0 1-.203-.203V3.9a.204.204 0 0 1 .203-.203h4.05a.204.204 0 0 1 .203.203zM8.76 2.483H4.71A1.416 1.416 0 0 0 3.293 3.9v16.2a1.416 1.416 0 0 0 1.417 1.417h4.05a1.416 1.416 0 0 0 1.417-1.417V3.9A1.416 1.416 0 0 0 8.76 2.483M8.963 20.1a.204.204 0 0 1-.203.203H4.71a.204.204 0 0 1-.203-.203V3.9a.204.204 0 0 1 .203-.203h4.05a.204.204 0 0 1 .203.203z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M20.91 3.9v16.2a1.62 1.62 0 0 1-1.62 1.62h-4.05a1.62 1.62 0 0 1-1.62-1.62V3.9a1.62 1.62 0 0 1 1.62-1.62h4.05a1.62 1.62 0 0 1 1.62 1.62M8.76 2.28H4.71A1.62 1.62 0 0 0 3.09 3.9v16.2a1.62 1.62 0 0 0 1.62 1.62h4.05a1.62 1.62 0 0 0 1.62-1.62V3.9a1.62 1.62 0 0 0-1.62-1.62"/>',
    "outline": '<path d="M19.29 2.483h-4.05A1.416 1.416 0 0 0 13.823 3.9v16.2a1.416 1.416 0 0 0 1.417 1.417h4.05a1.416 1.416 0 0 0 1.417-1.417V3.9a1.416 1.416 0 0 0-1.417-1.417m.203 17.617a.204.204 0 0 1-.203.203h-4.05a.204.204 0 0 1-.203-.203V3.9a.204.204 0 0 1 .203-.203h4.05a.204.204 0 0 1 .203.203zM8.76 2.483H4.71A1.416 1.416 0 0 0 3.293 3.9v16.2a1.416 1.416 0 0 0 1.417 1.417h4.05a1.416 1.416 0 0 0 1.417-1.417V3.9A1.416 1.416 0 0 0 8.76 2.483M8.963 20.1a.204.204 0 0 1-.203.203H4.71a.204.204 0 0 1-.203-.203V3.9a.204.204 0 0 1 .203-.203h4.05a.204.204 0 0 1 .203.203z"/>',
    "duotone": '<path d="M20.1 3.9v16.2a.81.81 0 0 1-.81.81h-4.05a.81.81 0 0 1-.81-.81V3.9a.81.81 0 0 1 .81-.81h4.05a.81.81 0 0 1 .81.81M8.76 3.09H4.71a.81.81 0 0 0-.81.81v16.2a.81.81 0 0 0 .81.81h4.05a.81.81 0 0 0 .81-.81V3.9a.81.81 0 0 0-.81-.81" opacity="0.2"/><path d="M19.29 2.28h-4.05a1.62 1.62 0 0 0-1.62 1.62v16.2a1.62 1.62 0 0 0 1.62 1.62h4.05a1.62 1.62 0 0 0 1.62-1.62V3.9a1.62 1.62 0 0 0-1.62-1.62m0 17.82h-4.05V3.9h4.05zM8.76 2.28H4.71A1.62 1.62 0 0 0 3.09 3.9v16.2a1.62 1.62 0 0 0 1.62 1.62h4.05a1.62 1.62 0 0 0 1.62-1.62V3.9a1.62 1.62 0 0 0-1.62-1.62m0 17.82H4.71V3.9h4.05z"/>'
  },
  tags: ["music", "audio", "resume", "start", "stop"]
};
var pencilIcon = {
  name: "pencil",
  content: '<path d="m21.912 6.612-4.525-4.525a1.416 1.416 0 0 0-2.005 0L2.897 14.573a1.42 1.42 0 0 0-.415 1.002V20.1a1.416 1.416 0 0 0 1.417 1.417h4.525a1.42 1.42 0 0 0 1.002-.415L21.911 8.616a1.416 1.416 0 0 0 0-2.005zM8.567 20.243a.2.2 0 0 1-.143.06H3.899a.204.204 0 0 1-.203-.203v-4.525a.2.2 0 0 1 .06-.143l9.053-9.054 4.811 4.811zM21.052 7.758l-2.573 2.573-4.811-4.811 2.573-2.574a.204.204 0 0 1 .287 0l4.524 4.525a.204.204 0 0 1 0 .287"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="m22.055 6.469-4.524-4.525a1.62 1.62 0 0 0-2.291 0L2.755 14.43a1.6 1.6 0 0 0-.475 1.145V20.1a1.62 1.62 0 0 0 1.62 1.62h4.525a1.6 1.6 0 0 0 1.145-.475L22.055 8.76a1.62 1.62 0 0 0 0-2.291m-3.575 3.575L13.955 5.52l2.43-2.43 4.525 4.524z"/>',
    "outline": '<path d="m21.912 6.612-4.525-4.525a1.416 1.416 0 0 0-2.005 0L2.897 14.573a1.42 1.42 0 0 0-.415 1.002V20.1a1.416 1.416 0 0 0 1.417 1.417h4.525a1.42 1.42 0 0 0 1.002-.415L21.911 8.616a1.416 1.416 0 0 0 0-2.005zM8.567 20.243a.2.2 0 0 1-.143.06H3.899a.204.204 0 0 1-.203-.203v-4.525a.2.2 0 0 1 .06-.143l9.053-9.054 4.811 4.811zM21.052 7.758l-2.573 2.573-4.811-4.811 2.573-2.574a.204.204 0 0 1 .287 0l4.524 4.525a.204.204 0 0 1 0 .287"/>',
    "duotone": '<path d="M21.484 8.186 18.48 11.19l-5.67-5.67 3.004-3.004a.81.81 0 0 1 1.144 0l4.526 4.522a.81.81 0 0 1 0 1.148" opacity="0.2"/><path d="m22.055 6.469-4.524-4.525a1.62 1.62 0 0 0-2.291 0L2.755 14.43a1.6 1.6 0 0 0-.475 1.145V20.1a1.62 1.62 0 0 0 1.62 1.62h4.525a1.6 1.6 0 0 0 1.145-.475L22.055 8.76a1.62 1.62 0 0 0 0-2.291M8.424 20.1H3.899v-4.525l8.91-8.91 4.525 4.525zm10.055-10.056L13.954 5.52l2.43-2.43 4.525 4.524z"/>'
  },
  tags: ["write", "writing", "editing", "sign", "signature"]
};
var pinIcon = {
  name: "pin",
  content: '<path d="m22.723 7.422-6.145-6.145a1.416 1.416 0 0 0-2.005 0L9.056 6.812c-.964-.329-3.443-.845-6.045 1.257a1.416 1.416 0 0 0-.114 2.108L7.93 15.21l-4.461 4.456a.607.607 0 1 0 .859.858l4.461-4.461 5.033 5.038a1.42 1.42 0 0 0 1.002.416h.1a1.42 1.42 0 0 0 1.032-.56c1.997-2.653 1.736-4.782 1.262-6.004l5.504-5.523a1.416 1.416 0 0 0-.001-2.007zm-.859 1.145-5.798 5.817a.61.61 0 0 0-.113.701c1.007 2.012-.173 4.082-.966 5.136a.204.204 0 0 1-.304.021L3.756 9.318a.204.204 0 0 1 .018-.304c1.266-1.021 2.48-1.292 3.412-1.292a4.3 4.3 0 0 1 1.746.346.61.61 0 0 0 .702-.118l5.797-5.813a.204.204 0 0 1 .287 0l6.145 6.144a.204.204 0 0 1 0 .287z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="m22.867 9.57-5.414 5.432c.462 1.283.653 3.431-1.336 6.075a1.6 1.6 0 0 1-1.182.643h-.114a1.62 1.62 0 0 1-1.146-.475l-4.886-4.891-4.317 4.318a.81.81 0 0 1-1.146-1.146l4.319-4.316-4.89-4.89a1.62 1.62 0 0 1 .132-2.407c2.574-2.077 5.038-1.669 6.115-1.331l5.428-5.447a1.62 1.62 0 0 1 2.291 0l6.145 6.144a1.62 1.62 0 0 1 .001 2.291"/>',
    "outline": '<path d="m22.723 7.422-6.145-6.145a1.416 1.416 0 0 0-2.005 0L9.056 6.812c-.964-.329-3.443-.845-6.045 1.257a1.416 1.416 0 0 0-.114 2.108L7.93 15.21l-4.461 4.456a.607.607 0 1 0 .859.858l4.461-4.461 5.033 5.038a1.42 1.42 0 0 0 1.002.416h.1a1.42 1.42 0 0 0 1.032-.56c1.997-2.653 1.736-4.782 1.262-6.004l5.504-5.523a1.416 1.416 0 0 0-.001-2.007zm-.859 1.145-5.798 5.817a.61.61 0 0 0-.113.701c1.007 2.012-.173 4.082-.966 5.136a.204.204 0 0 1-.304.021L3.756 9.318a.204.204 0 0 1 .018-.304c1.266-1.021 2.48-1.292 3.412-1.292a4.3 4.3 0 0 1 1.746.346.61.61 0 0 0 .702-.118l5.797-5.813a.204.204 0 0 1 .287 0l6.145 6.144a.204.204 0 0 1 0 .287z"/>',
    "duotone": '<path d="m22.294 8.996-5.799 5.818c1.16 2.322-.174 4.643-1.023 5.771a.81.81 0 0 1-1.215.084L3.329 9.746a.81.81 0 0 1 .067-1.206c3.002-2.422 5.812-1.013 5.812-1.012l5.798-5.818a.81.81 0 0 1 1.145 0l6.144 6.137a.81.81 0 0 1 0 1.148z" opacity="0.2"/><path d="m22.866 7.279-6.145-6.144a1.62 1.62 0 0 0-2.291 0L9 6.582c-1.079-.338-3.544-.746-6.115 1.331a1.62 1.62 0 0 0-.131 2.407l4.892 4.89-4.318 4.316a.81.81 0 0 0 1.146 1.146l4.316-4.318 4.889 4.888a1.62 1.62 0 0 0 1.146.477h.114a1.6 1.6 0 0 0 1.178-.641c1.988-2.642 1.798-4.792 1.336-6.076l5.414-5.433a1.62 1.62 0 0 0-.001-2.291zM21.72 8.425l-5.798 5.818a.81.81 0 0 0-.152.933c.958 1.916-.182 3.907-.945 4.923L3.9 9.173c1.223-.986 2.394-1.247 3.288-1.247a4.1 4.1 0 0 1 1.654.328.81.81 0 0 0 .936-.153l5.797-5.821z"/>'
  },
  tags: ["pin", "maps", "marker", "location", "place"]
};
var playIcon = {
  name: "play",
  content: '<path d="M22.465 10.805 7.877 1.882a1.42 1.42 0 0 0-1.435-.028 1.39 1.39 0 0 0-.719 1.223v17.846a1.39 1.39 0 0 0 .719 1.223 1.42 1.42 0 0 0 1.435-.028l14.588-8.923a1.4 1.4 0 0 0 0-2.391zm-.633 1.355-14.59 8.923a.2.2 0 0 1-.209 0 .18.18 0 0 1-.101-.163V3.077a.18.18 0 0 1 .101-.163.24.24 0 0 1 .107-.027.24.24 0 0 1 .101.031L21.83 11.84a.185.185 0 0 1 0 .318z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M23.34 12a1.6 1.6 0 0 1-.769 1.368L7.982 22.292a1.62 1.62 0 0 1-1.64.03 1.61 1.61 0 0 1-.822-1.399V3.077a1.61 1.61 0 0 1 .822-1.399 1.62 1.62 0 0 1 1.64.03l14.589 8.924A1.6 1.6 0 0 1 23.34 12"/>',
    "outline": '<path d="M22.465 10.805 7.877 1.882a1.42 1.42 0 0 0-1.435-.028 1.39 1.39 0 0 0-.719 1.223v17.846a1.39 1.39 0 0 0 .719 1.223 1.42 1.42 0 0 0 1.435-.028l14.588-8.923a1.4 1.4 0 0 0 0-2.391zm-.633 1.355-14.59 8.923a.2.2 0 0 1-.209 0 .18.18 0 0 1-.101-.163V3.077a.18.18 0 0 1 .101-.163.24.24 0 0 1 .107-.027.24.24 0 0 1 .101.031L21.83 11.84a.185.185 0 0 1 0 .318z"/>',
    "duotone": '<path d="M22.148 12.677 7.56 21.599a.81.81 0 0 1-1.23-.677V3.078a.81.81 0 0 1 1.23-.677l14.588 8.922a.792.792 0 0 1 0 1.355z" opacity="0.2"/><path d="M22.571 10.632 7.982 1.708a1.62 1.62 0 0 0-1.64-.03 1.61 1.61 0 0 0-.822 1.399v17.846a1.614 1.614 0 0 0 1.62 1.607 1.63 1.63 0 0 0 .846-.238l14.584-8.924a1.6 1.6 0 0 0 0-2.734zM7.14 20.904V3.09L21.703 12z"/>'
  },
  tags: ["music", "audio", "resume", "start"]
};
var plusCircleIcon = {
  name: "plus-circle",
  content: '<path d="M12 1.673A10.327 10.327 0 1 0 22.327 12 10.34 10.34 0 0 0 12 1.673m0 19.44A9.113 9.113 0 1 1 21.113 12 9.12 9.12 0 0 1 12 21.113M16.657 12a.607.607 0 0 1-.607.607h-3.443v3.443a.608.608 0 0 1-1.215 0v-3.443H7.949a.608.608 0 0 1 0-1.215h3.443V7.949a.608.608 0 0 1 1.215 0v3.443h3.443a.607.607 0 0 1 .607.607z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M12 1.47A10.53 10.53 0 1 0 22.53 12 10.543 10.543 0 0 0 12 1.47m4.05 11.34h-3.24v3.24a.81.81 0 0 1-1.62 0v-3.24H7.95a.81.81 0 0 1 0-1.62h3.24V7.95a.81.81 0 0 1 1.62 0v3.24h3.24a.81.81 0 0 1 0 1.62"/>',
    "outline": '<path d="M12 1.673A10.327 10.327 0 1 0 22.327 12 10.34 10.34 0 0 0 12 1.673m0 19.44A9.113 9.113 0 1 1 21.113 12 9.12 9.12 0 0 1 12 21.113M16.657 12a.607.607 0 0 1-.607.607h-3.443v3.443a.608.608 0 0 1-1.215 0v-3.443H7.949a.608.608 0 0 1 0-1.215h3.443V7.949a.608.608 0 0 1 1.215 0v3.443h3.443a.607.607 0 0 1 .607.607z"/>',
    "duotone": '<path d="M21.72 12A9.72 9.72 0 1 1 12 2.28 9.72 9.72 0 0 1 21.72 12" opacity="0.2"/><path d="M12 1.47A10.53 10.53 0 1 0 22.53 12 10.54 10.54 0 0 0 12 1.47m0 19.44A8.91 8.91 0 1 1 20.91 12 8.92 8.92 0 0 1 12 20.91M16.86 12a.81.81 0 0 1-.81.81h-3.24v3.24a.81.81 0 0 1-1.62 0v-3.24H7.95a.81.81 0 0 1 0-1.62h3.24V7.95a.81.81 0 0 1 1.62 0v3.24h3.24a.81.81 0 0 1 .81.81"/>'
  },
  tags: ["addition", "sum", "mathematics", "arithmetic", "calculator", "round", "+"]
};
var plusIcon = {
  name: "plus",
  content: '<path d="M21.517 12a.607.607 0 0 1-.607.607h-8.303v8.303a.608.608 0 0 1-1.215 0v-8.303H3.089a.608.608 0 0 1 0-1.215h8.303V3.089a.607.607 0 0 1 1.214 0v8.303h8.303a.607.607 0 0 1 .607.607z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M20.1 2.28H3.9A1.62 1.62 0 0 0 2.28 3.9v16.2a1.62 1.62 0 0 0 1.62 1.62h16.2a1.62 1.62 0 0 0 1.62-1.62V3.9a1.62 1.62 0 0 0-1.62-1.62m-2.43 10.53h-4.86v4.86a.81.81 0 0 1-1.62 0v-4.86H6.33a.81.81 0 0 1 0-1.62h4.86V6.33a.81.81 0 0 1 1.62 0v4.86h4.86a.81.81 0 0 1 0 1.62"/>',
    "outline": '<path d="M21.517 12a.607.607 0 0 1-.607.607h-8.303v8.303a.608.608 0 0 1-1.215 0v-8.303H3.089a.608.608 0 0 1 0-1.215h8.303V3.089a.607.607 0 0 1 1.214 0v8.303h8.303a.607.607 0 0 1 .607.607z"/>',
    "duotone": '<path d="M20.91 4.71v14.58a1.62 1.62 0 0 1-1.62 1.62H4.71a1.62 1.62 0 0 1-1.62-1.62V4.71a1.62 1.62 0 0 1 1.62-1.62h14.58a1.62 1.62 0 0 1 1.62 1.62" opacity="0.2"/><path d="M21.72 12a.81.81 0 0 1-.81.81h-8.1v8.1a.81.81 0 0 1-1.62 0v-8.1h-8.1a.81.81 0 0 1 0-1.62h8.1v-8.1a.81.81 0 0 1 1.62 0v8.1h8.1a.81.81 0 0 1 .81.81"/>'
  },
  tags: ["addition", "sum", "mathematics", "arithmetic", "calculator", "+"]
};
var redoIcon = {
  name: "redo",
  content: '<path d="m22.15 10-4.86 4.86a.607.607 0 0 1-.86-.86l3.822-3.823H12a9.12 9.12 0 0 0-9.113 9.113.608.608 0 0 1-1.215 0A10.34 10.34 0 0 1 11.999 8.963h8.252L16.429 5.14a.607.607 0 0 1 .859-.86l4.86 4.86a.607.607 0 0 1 0 .858z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="m22.294 10.144-4.86 4.86a.81.81 0 0 1-1.384-.574v-4.05H12a8.92 8.92 0 0 0-8.91 8.91.81.81 0 0 1-1.62 0A10.54 10.54 0 0 1 12 8.76h4.05V4.71a.81.81 0 0 1 1.384-.574l4.86 4.86a.81.81 0 0 1 0 1.146z"/>',
    "outline": '<path d="m22.15 10-4.86 4.86a.607.607 0 0 1-.86-.86l3.822-3.823H12a9.12 9.12 0 0 0-9.113 9.113.608.608 0 0 1-1.215 0A10.34 10.34 0 0 1 11.999 8.963h8.252L16.429 5.14a.607.607 0 0 1 .859-.86l4.86 4.86a.607.607 0 0 1 0 .858z"/>',
    "duotone": '<path d="m21.72 9.57-4.86 4.86V4.71z" opacity="0.2"/><path d="m22.294 8.996-4.86-4.86a.81.81 0 0 0-1.384.574v4.05H12A10.54 10.54 0 0 0 1.47 19.29a.81.81 0 0 0 1.62 0A8.92 8.92 0 0 1 12 10.38h4.05v4.05a.81.81 0 0 0 1.384.574l4.86-4.86a.81.81 0 0 0 0-1.146zm-4.624 3.478V6.665l2.905 2.905z"/>'
  },
  tags: ["redo", "actions", "forward", "repeat"]
};
var buildingsIcon = {
  name: "buildings",
  content: '<path d="M23.34 20.303h-1.823V8.76A1.416 1.416 0 0 0 20.1 7.343h-6.683V2.28a1.417 1.417 0 0 0-2.204-1.178l-8.1 5.4a1.42 1.42 0 0 0-.631 1.179v12.622H.659a.607.607 0 0 0 0 1.214h22.68a.607.607 0 0 0 0-1.214zM20.1 8.558a.204.204 0 0 1 .203.203v11.543h-6.885V8.56zM3.697 7.681a.2.2 0 0 1 .09-.168l8.1-5.401a.203.203 0 0 1 .315.168v18.023H3.696zm6.48 2.699V12a.607.607 0 0 1-1.214 0v-1.62a.607.607 0 0 1 1.214 0m-3.24 0V12a.608.608 0 0 1-1.215 0v-1.62a.608.608 0 0 1 1.215 0m0 5.67v1.62a.608.608 0 0 1-1.215 0v-1.62a.608.608 0 0 1 1.215 0m3.24 0v1.62a.607.607 0 0 1-1.214 0v-1.62a.607.607 0 0 1 1.214 0"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M23.312 20.1H21.72V8.76a1.62 1.62 0 0 0-1.62-1.62h-4.456a.41.41 0 0 0-.405.406V20.1h-1.62V2.322a1.67 1.67 0 0 0-.624-1.316A1.62 1.62 0 0 0 11.1.936L3 6.331a1.62 1.62 0 0 0-.721 1.351v12.419H.686a.83.83 0 0 0-.837.756.81.81 0 0 0 .81.864h22.68a.81.81 0 0 0 .81-.864.83.83 0 0 0-.838-.756zM6.734 17.67a.81.81 0 0 1-.864.81.83.83 0 0 1-.756-.839v-1.565a.83.83 0 0 1 .756-.837.81.81 0 0 1 .864.81zm0-5.67a.81.81 0 0 1-.864.81.83.83 0 0 1-.756-.839v-1.565a.83.83 0 0 1 .756-.837.81.81 0 0 1 .864.81zm4.05 5.67a.81.81 0 0 1-.864.81.83.83 0 0 1-.756-.836v-1.566a.83.83 0 0 1 .756-.837.81.81 0 0 1 .864.81zm0-5.67a.81.81 0 0 1-.864.81.83.83 0 0 1-.756-.836v-1.566a.83.83 0 0 1 .756-.837.81.81 0 0 1 .864.81z"/>',
    "outline": '<path d="M23.34 20.303h-1.823V8.76A1.416 1.416 0 0 0 20.1 7.343h-6.683V2.28a1.417 1.417 0 0 0-2.204-1.178l-8.1 5.4a1.42 1.42 0 0 0-.631 1.179v12.622H.659a.607.607 0 0 0 0 1.214h22.68a.607.607 0 0 0 0-1.214zM20.1 8.558a.204.204 0 0 1 .203.203v11.543h-6.885V8.56zM3.697 7.681a.2.2 0 0 1 .09-.168l8.1-5.401a.203.203 0 0 1 .315.168v18.023H3.696zm6.48 2.699V12a.607.607 0 0 1-1.214 0v-1.62a.607.607 0 0 1 1.214 0m-3.24 0V12a.608.608 0 0 1-1.215 0v-1.62a.608.608 0 0 1 1.215 0m0 5.67v1.62a.608.608 0 0 1-1.215 0v-1.62a.608.608 0 0 1 1.215 0m3.24 0v1.62a.607.607 0 0 1-1.214 0v-1.62a.607.607 0 0 1 1.214 0"/>',
    "duotone": '<path d="M12.81 2.28v18.63H3.09V7.681a.82.82 0 0 1 .36-.674l8.1-5.4a.81.81 0 0 1 1.26.672z" opacity="0.2"/><path d="M23.34 20.1h-1.62V8.76a1.62 1.62 0 0 0-1.62-1.62h-6.48V2.28A1.62 1.62 0 0 0 11.101.931l-8.1 5.399a1.62 1.62 0 0 0-.721 1.351V20.1H.66a.81.81 0 0 0 0 1.62h22.68a.81.81 0 0 0 0-1.62M20.1 8.76V20.1h-6.48V8.76zM3.9 7.681 12 2.28V20.1H3.9zm6.48 2.699V12a.81.81 0 0 1-1.62 0v-1.62a.81.81 0 1 1 1.62 0m-3.24 0V12a.81.81 0 0 1-1.62 0v-1.62a.81.81 0 1 1 1.62 0m0 5.67v1.62a.81.81 0 0 1-1.62 0v-1.62a.81.81 0 0 1 1.62 0m3.24 0v1.62a.81.81 0 0 1-1.62 0v-1.62a.81.81 0 0 1 1.62 0"/>'
  },
  tags: ["places", "locations", "company", "business"]
};
var fileClockIcon = {
  name: "file-clock",
  content: '<path fill-rule="evenodd" d="m20.165 7.354.033.004zm.28.105-.036-.023-.053-.028a.6.6 0 0 0-.139-.046l-.019-.004m.463.381.006.015zc0-.001.001.002 0 0" clip-rule="evenodd"/><path fill-rule="evenodd" d="m14.548 1.692-.118-.012q.06 0 .118.012m5.629 5.663-.027-.003zc-.002 0 .001 0 0 0m.179.053.053.028.036.023q-.017-.012-.036-.023zm.188.139-.02-.021.01.01z" clip-rule="evenodd"/><path fill="#fff" fill-rule="evenodd" d="M8.161 14.025a.6.6 0 1 1 1.2 0v2.235h2.234a.6.6 0 1 1 0 1.2H8.761a.6.6 0 0 1-.6-.6z" clip-rule="evenodd"/><path d="M8.161 14.025a.6.6 0 1 1 1.2 0v2.235h2.234a.6.6 0 1 1 0 1.2H8.761a.6.6 0 0 1-.6-.6z"/><path fill-rule="evenodd" d="M8.761 13.425a.6.6 0 0 0-.6.6v2.835a.6.6 0 0 0 .6.6h2.834a.6.6 0 1 0 0-1.2H9.361v-2.235a.6.6 0 0 0-.6-.6" clip-rule="evenodd"/><path d="M8.76 11.4a5.46 5.46 0 0 0-4.26 2.045 5.44 5.44 0 0 0-1.2 3.415 5.458 5.458 0 0 0 4.571 5.388l.017.003q.193.031.393.048.237.021.479.021c1.293 0 2.48-.449 3.415-1.199A5.46 5.46 0 0 0 8.76 11.4M4.5 16.86a4.26 4.26 0 1 1 8.52 0 4.26 4.26 0 0 1-8.52 0"/><path fill-rule="evenodd" d="m20.198 7.358-.033-.004c.082.01.172.04.241.08l.035.022-.035-.022-.048-.025a.6.6 0 0 0-.141-.047zm-5.343-5.502 5.669 5.67.013.013.037.043.014.019a.5.5 0 0 1 .061.108l.012.03.006.015.006.02a.6.6 0 0 1 .027.176v12.961a1.412 1.412 0 0 1-1.41 1.41h-4.811a.6.6 0 0 1 0-1.2h4.811c.056 0 .11-.023.149-.062a.21.21 0 0 0 .061-.148V8.55h-5.07a.6.6 0 0 1-.6-.6V2.88H4.71a.22.22 0 0 0-.149.061.22.22 0 0 0-.061.149v7.151a.59.59 0 0 1-.589.6.61.61 0 0 1-.611-.6V3.09a1.407 1.407 0 0 1 1.41-1.41h9.72l.118.012a.6.6 0 0 1 .307.164m3.797 5.494H15.03V3.728z" clip-rule="evenodd"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M20.91 7.95v12.96a1.62 1.62 0 0 1-1.62 1.62h-3.985a.81.81 0 0 1 0-1.62h3.985V8.76h-4.86a.81.81 0 0 1-.81-.81V3.09H4.71v7.288a.81.81 0 0 1-1.62 0V3.09a1.62 1.62 0 0 1 1.62-1.62h9.72a.8.8 0 0 1 .31.061.8.8 0 0 1 .263.175l5.67 5.67a.81.81 0 0 1 .237.574m-5.67-.81h2.904L15.24 4.235z"/><path d="M13.62 2.28a.81.81 0 1 1 1.62 0v4.86h4.86a.81.81 0 0 1 0 1.62h-5.67a.81.81 0 0 1-.81-.81zM12.81 16.881a4.05 4.05 0 1 0-8.1 0 4.05 4.05 0 0 0 8.1 0m1.621 0a5.671 5.671 0 1 1-11.338 0 5.671 5.671 0 0 1 11.338 0"/><path d="M7.951 14.046a.81.81 0 0 1 1.62 0v2.025h2.025a.81.81 0 0 1 0 1.62H8.761a.81.81 0 0 1-.81-.81z"/>',
    "outline": '<path fill-rule="evenodd" d="m20.165 7.354.033.004zm.28.105-.036-.023-.053-.028a.6.6 0 0 0-.139-.046l-.019-.004m.463.381.006.015zc0-.001.001.002 0 0" clip-rule="evenodd"/><path fill-rule="evenodd" d="m14.548 1.692-.118-.012q.06 0 .118.012m5.629 5.663-.027-.003zc-.002 0 .001 0 0 0m.179.053.053.028.036.023q-.017-.012-.036-.023zm.188.139-.02-.021.01.01z" clip-rule="evenodd"/><path fill="#fff" fill-rule="evenodd" d="M8.161 14.025a.6.6 0 1 1 1.2 0v2.235h2.234a.6.6 0 1 1 0 1.2H8.761a.6.6 0 0 1-.6-.6z" clip-rule="evenodd"/><path d="M8.161 14.025a.6.6 0 1 1 1.2 0v2.235h2.234a.6.6 0 1 1 0 1.2H8.761a.6.6 0 0 1-.6-.6z"/><path fill-rule="evenodd" d="M8.761 13.425a.6.6 0 0 0-.6.6v2.835a.6.6 0 0 0 .6.6h2.834a.6.6 0 1 0 0-1.2H9.361v-2.235a.6.6 0 0 0-.6-.6" clip-rule="evenodd"/><path d="M8.76 11.4a5.46 5.46 0 0 0-4.26 2.045 5.44 5.44 0 0 0-1.2 3.415 5.458 5.458 0 0 0 4.571 5.388l.017.003q.193.031.393.048.237.021.479.021c1.293 0 2.48-.449 3.415-1.199A5.46 5.46 0 0 0 8.76 11.4M4.5 16.86a4.26 4.26 0 1 1 8.52 0 4.26 4.26 0 0 1-8.52 0"/><path fill-rule="evenodd" d="m20.198 7.358-.033-.004c.082.01.172.04.241.08l.035.022-.035-.022-.048-.025a.6.6 0 0 0-.141-.047zm-5.343-5.502 5.669 5.67.013.013.037.043.014.019a.5.5 0 0 1 .061.108l.012.03.006.015.006.02a.6.6 0 0 1 .027.176v12.961a1.412 1.412 0 0 1-1.41 1.41h-4.811a.6.6 0 0 1 0-1.2h4.811c.056 0 .11-.023.149-.062a.21.21 0 0 0 .061-.148V8.55h-5.07a.6.6 0 0 1-.6-.6V2.88H4.71a.22.22 0 0 0-.149.061.22.22 0 0 0-.061.149v7.151a.59.59 0 0 1-.589.6.61.61 0 0 1-.611-.6V3.09a1.407 1.407 0 0 1 1.41-1.41h9.72l.118.012a.6.6 0 0 1 .307.164m3.797 5.494H15.03V3.728z" clip-rule="evenodd"/>',
    "duotone": '<path fill-opacity="0.2" d="M18.725 21.753H6.657c-1.754-1.753-1.42-2.245-3.322-5.54V3.123a.81.81 0 0 1 .81-.81h9.347a.9.9 0 0 1 .637.264l5.143 5.143a.9.9 0 0 1 .263.636v12.587a.81.81 0 0 1-.81.81"/><path fill-rule="evenodd" d="m20.165 7.354.033.004zm.28.105-.036-.023-.053-.028a.6.6 0 0 0-.139-.046l-.019-.004m.463.381.006.015zc0-.001.001.002 0 0" clip-rule="evenodd"/><path fill-rule="evenodd" d="m14.548 1.692-.118-.012q.06 0 .118.012m5.629 5.663-.027-.003zc-.002 0 .001 0 0 0m.179.053.053.028.036.023q-.017-.012-.036-.023zm.188.139-.02-.021.01.01z" clip-rule="evenodd"/><path fill="#fff" fill-rule="evenodd" d="M8.161 14.025a.6.6 0 1 1 1.2 0v2.235h2.234a.6.6 0 1 1 0 1.2H8.761a.6.6 0 0 1-.6-.6z" clip-rule="evenodd"/><path d="M8.161 14.025a.6.6 0 1 1 1.2 0v2.235h2.234a.6.6 0 1 1 0 1.2H8.761a.6.6 0 0 1-.6-.6z"/><path fill-rule="evenodd" d="M8.761 13.425a.6.6 0 0 0-.6.6v2.835a.6.6 0 0 0 .6.6h2.834a.6.6 0 1 0 0-1.2H9.361v-2.235a.6.6 0 0 0-.6-.6" clip-rule="evenodd"/><path d="M8.76 11.4a5.46 5.46 0 0 0-4.26 2.045 5.44 5.44 0 0 0-1.2 3.415 5.458 5.458 0 0 0 4.571 5.388l.017.003q.193.031.393.048.237.021.479.021c1.293 0 2.48-.449 3.415-1.199A5.46 5.46 0 0 0 8.76 11.4M4.5 16.86a4.26 4.26 0 1 1 8.52 0 4.26 4.26 0 0 1-8.52 0"/><path fill-rule="evenodd" d="m20.198 7.358-.033-.004c.082.01.172.04.241.08l.035.022-.035-.022-.048-.025a.6.6 0 0 0-.141-.047zm-5.343-5.502 5.669 5.67.013.013.037.043.014.019a.5.5 0 0 1 .061.108l.012.03.006.015.006.02a.6.6 0 0 1 .027.176v12.961a1.412 1.412 0 0 1-1.41 1.41h-4.811a.6.6 0 0 1 0-1.2h4.811c.056 0 .11-.023.149-.062a.21.21 0 0 0 .061-.148V8.55h-5.07a.6.6 0 0 1-.6-.6V2.88H4.71a.22.22 0 0 0-.149.061.22.22 0 0 0-.061.149v7.151a.59.59 0 0 1-.589.6.61.61 0 0 1-.611-.6V3.09a1.407 1.407 0 0 1 1.41-1.41h9.72l.118.012a.6.6 0 0 1 .307.164m3.797 5.494H15.03V3.728z" clip-rule="evenodd"/>'
  },
  tags: ["file", "clock", "files-and-folders", "document", "page", "paper", "time", "timer", "schedule"]
};
var lightbulbIcon = {
  name: "lightbulb",
  content: '<path d="M16.657 22.53a.607.607 0 0 1-.607.607h-8.1a.607.607 0 0 1 0-1.214h8.1a.607.607 0 0 1 .607.607m4.05-12.96a8.66 8.66 0 0 1-3.329 6.848 1.85 1.85 0 0 0-.721 1.455v.607a1.416 1.416 0 0 1-1.417 1.417H8.76a1.416 1.416 0 0 1-1.417-1.417v-.607a1.82 1.82 0 0 0-.709-1.441 8.66 8.66 0 0 1-3.341-6.808C3.267 4.903 7.079.977 11.791.863a8.707 8.707 0 0 1 8.917 8.707zm-1.214 0a7.493 7.493 0 0 0-7.674-7.493c-4.054.101-7.333 3.476-7.312 7.535a7.46 7.46 0 0 0 2.875 5.86 3.04 3.04 0 0 1 1.175 2.401v.607a.204.204 0 0 0 .203.203h6.48a.204.204 0 0 0 .203-.203v-.607a3.06 3.06 0 0 1 1.184-2.407 7.45 7.45 0 0 0 2.866-5.895zm-2.033-.911a5.63 5.63 0 0 0-4.548-4.548.608.608 0 1 0-.203 1.199c1.759.295 3.253 1.79 3.552 3.552a.61.61 0 0 0 .599.506l.101-.008a.607.607 0 0 0 .499-.701"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M16.86 22.53a.81.81 0 0 1-.81.81h-8.1a.81.81 0 0 1 0-1.62h8.1a.81.81 0 0 1 .81.81m4.05-12.96a8.87 8.87 0 0 1-3.406 7.008 1.64 1.64 0 0 0-.644 1.295v.607a1.62 1.62 0 0 1-1.62 1.62H8.76a1.62 1.62 0 0 1-1.62-1.62v-.607a1.62 1.62 0 0 0-.631-1.282A8.87 8.87 0 0 1 3.09 9.62C3.064 4.795 6.964.776 11.785.661a8.91 8.91 0 0 1 9.125 8.91zm-3.251-.946a5.83 5.83 0 0 0-4.713-4.713.81.81 0 0 0-.269 1.597c1.678.282 3.101 1.706 3.386 3.386a.81.81 0 0 0 .799.675 1 1 0 0 0 .137-.011.81.81 0 0 0 .663-.935z"/>',
    "outline": '<path d="M16.657 22.53a.607.607 0 0 1-.607.607h-8.1a.607.607 0 0 1 0-1.214h8.1a.607.607 0 0 1 .607.607m4.05-12.96a8.66 8.66 0 0 1-3.329 6.848 1.85 1.85 0 0 0-.721 1.455v.607a1.416 1.416 0 0 1-1.417 1.417H8.76a1.416 1.416 0 0 1-1.417-1.417v-.607a1.82 1.82 0 0 0-.709-1.441 8.66 8.66 0 0 1-3.341-6.808C3.267 4.903 7.079.977 11.791.863a8.707 8.707 0 0 1 8.917 8.707zm-1.214 0a7.493 7.493 0 0 0-7.674-7.493c-4.054.101-7.333 3.476-7.312 7.535a7.46 7.46 0 0 0 2.875 5.86 3.04 3.04 0 0 1 1.175 2.401v.607a.204.204 0 0 0 .203.203h6.48a.204.204 0 0 0 .203-.203v-.607a3.06 3.06 0 0 1 1.184-2.407 7.45 7.45 0 0 0 2.866-5.895zm-2.033-.911a5.63 5.63 0 0 0-4.548-4.548.608.608 0 1 0-.203 1.199c1.759.295 3.253 1.79 3.552 3.552a.61.61 0 0 0 .599.506l.101-.008a.607.607 0 0 0 .499-.701"/>',
    "duotone": '<path d="M20.1 9.57a8.09 8.09 0 0 1-3.097 6.371 2.46 2.46 0 0 0-.953 1.932v.607a.81.81 0 0 1-.81.81H8.76a.81.81 0 0 1-.81-.81v-.607a2.44 2.44 0 0 0-.942-1.924A8.09 8.09 0 0 1 3.9 9.616c-.024-4.391 3.515-8.045 7.904-8.146a8.1 8.1 0 0 1 8.296 8.1" opacity="0.2"/><path d="M16.86 22.53a.81.81 0 0 1-.81.81h-8.1a.81.81 0 0 1 0-1.62h8.1a.81.81 0 0 1 .81.81m4.05-12.96a8.87 8.87 0 0 1-3.406 7.008 1.64 1.64 0 0 0-.644 1.295v.607a1.62 1.62 0 0 1-1.62 1.62H8.76a1.62 1.62 0 0 1-1.62-1.62v-.607a1.62 1.62 0 0 0-.631-1.282A8.87 8.87 0 0 1 3.09 9.62C3.064 4.795 6.964.776 11.785.661a8.91 8.91 0 0 1 9.125 8.91zm-1.62 0a7.29 7.29 0 0 0-7.466-7.29c-3.949.094-7.135 3.38-7.114 7.33a7.26 7.26 0 0 0 2.798 5.7 3.24 3.24 0 0 1 1.252 2.563v.607h6.48v-.607a3.25 3.25 0 0 1 1.262-2.567A7.26 7.26 0 0 0 19.29 9.57m-1.631-.946a5.83 5.83 0 0 0-4.715-4.713.81.81 0 0 0-.268 1.597c1.678.282 3.101 1.706 3.386 3.386a.81.81 0 0 0 .799.675 1 1 0 0 0 .137-.011.81.81 0 0 0 .662-.935z"/>'
  },
  tags: ["flashlight", "bulbs", "lighting", "led", "energy", "idea"]
};
var microphoneIcon = {
  name: "microphone",
  content: '<path d="M12 16.657A4.663 4.663 0 0 0 16.657 12V5.52a4.658 4.658 0 0 0-9.315 0V12a4.663 4.663 0 0 0 4.657 4.657zM8.557 5.52a3.443 3.443 0 0 1 6.886 0V12a3.443 3.443 0 0 1-6.886 0zm4.05 14.352v3.468a.608.608 0 0 1-1.215 0v-3.468A7.91 7.91 0 0 1 4.102 12a.608.608 0 0 1 1.215 0 6.683 6.683 0 0 0 13.366 0 .607.607 0 0 1 1.214 0 7.91 7.91 0 0 1-7.29 7.872"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M7.14 12V5.52a4.86 4.86 0 0 1 9.72 0V12a4.86 4.86 0 0 1-9.72 0m12.96 0a.81.81 0 0 0-1.62 0 6.48 6.48 0 0 1-12.96 0 .81.81 0 0 0-1.62 0 8.11 8.11 0 0 0 7.29 8.059v3.281a.81.81 0 0 0 1.62 0v-3.281A8.11 8.11 0 0 0 20.1 12"/>',
    "outline": '<path d="M12 16.657A4.663 4.663 0 0 0 16.657 12V5.52a4.658 4.658 0 0 0-9.315 0V12a4.663 4.663 0 0 0 4.657 4.657zM8.557 5.52a3.443 3.443 0 0 1 6.886 0V12a3.443 3.443 0 0 1-6.886 0zm4.05 14.352v3.468a.608.608 0 0 1-1.215 0v-3.468A7.91 7.91 0 0 1 4.102 12a.608.608 0 0 1 1.215 0 6.683 6.683 0 0 0 13.366 0 .607.607 0 0 1 1.214 0 7.91 7.91 0 0 1-7.29 7.872"/>',
    "duotone": '<path d="M16.05 5.52V12A4.05 4.05 0 0 1 12 16.05 4.05 4.05 0 0 1 7.95 12V5.52A4.05 4.05 0 0 1 12 1.47a4.05 4.05 0 0 1 4.05 4.05" opacity="0.2"/><path d="M12 16.86A4.865 4.865 0 0 0 16.86 12V5.52a4.86 4.86 0 0 0-9.72 0V12A4.865 4.865 0 0 0 12 16.86M8.76 5.52a3.24 3.24 0 0 1 6.48 0V12a3.24 3.24 0 0 1-6.48 0zm4.05 14.539v3.281a.81.81 0 0 1-1.62 0v-3.281A8.11 8.11 0 0 1 3.9 12a.81.81 0 0 1 1.62 0 6.48 6.48 0 0 0 12.96 0 .81.81 0 0 1 1.62 0 8.11 8.11 0 0 1-7.29 8.059"/>'
  },
  tags: ["audio", "recording", "music", "sound", "podcast", "studio"]
};
var pinBottomIcon = {
  name: "pin-bottom",
  content: '<path d="M22.801 7.559a.2.2 0 0 0-.061-.148l-6.142-6.145a.214.214 0 0 0-.297-.002l.001.002L10.5 7.083a.6.6 0 0 1-.691.113l-.014-.005-.072-.031a4 4 0 0 0-.307-.108 4.8 4.8 0 0 0-1.147-.193c-.95-.043-2.254.178-3.627 1.286l-.003.001a.2.2 0 0 0-.055.068.2.2 0 0 0-.023.084.2.2 0 0 0 .034.125l.028.036 10.925 10.924a.21.21 0 0 0 .161.058.2.2 0 0 0 .086-.024.2.2 0 0 0 .063-.055c.838-1.115 1.958-3.163.968-5.142a.6.6 0 0 1 .111-.692l5.802-5.819.001-.002a.2.2 0 0 0 .061-.148m1.2 0c0 .327-.113.643-.319.894l-.093.103-5.513 5.529c.997 2.516-.44 4.911-1.257 5.999l-.003.002a1.416 1.416 0 0 1-1.613.467 1.4 1.4 0 0 1-.502-.321L3.775 9.307a1.41 1.41 0 0 1 .114-2.099C5.517 5.896 7.118 5.606 8.323 5.66a6 6 0 0 1 1.44.244q.088.028.164.054l5.525-5.54.001-.001a1.41 1.41 0 0 1 1.994 0l6.142 6.146c.264.264.412.622.412.996"/><path d="M9.231 13.935a.601.601 0 0 1 .849.848l-4.889 4.889a.6.6 0 1 1-.849-.848zM11.395 22.795a.6.6 0 1 1 0 1.2H.6a.6.6 0 1 1 0-1.2z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M24.001 7.559c0 .327-.113.643-.319.894l-.093.103-5.513 5.529c.997 2.516-.44 4.911-1.257 5.999a1.416 1.416 0 0 1-1.616.469 1.4 1.4 0 0 1-.502-.321L3.775 9.307a1.41 1.41 0 0 1 .114-2.099C5.517 5.896 7.118 5.606 8.323 5.66a6 6 0 0 1 1.583.291l.021.007 5.525-5.54a1.415 1.415 0 0 1 1.995-.001l6.142 6.146c.264.264.412.622.412.996"/><path d="M9.083 13.786a.81.81 0 1 1 1.145 1.146l-4.889 4.889a.811.811 0 0 1-1.146-1.145zM11.189 22.379a.81.81 0 0 1 0 1.62H.811a.81.81 0 0 1 0-1.62z"/>',
    "outline": '<path d="M22.801 7.559a.2.2 0 0 0-.061-.148l-6.142-6.145a.214.214 0 0 0-.297-.002l.001.002L10.5 7.083a.6.6 0 0 1-.691.113l-.014-.005-.072-.031a4 4 0 0 0-.307-.108 4.8 4.8 0 0 0-1.147-.193c-.95-.043-2.254.178-3.627 1.286l-.003.001a.2.2 0 0 0-.055.068.2.2 0 0 0-.023.084.2.2 0 0 0 .034.125l.028.036 10.925 10.924a.21.21 0 0 0 .161.058.2.2 0 0 0 .086-.024.2.2 0 0 0 .063-.055c.838-1.115 1.958-3.163.968-5.142a.6.6 0 0 1 .111-.692l5.802-5.819.001-.002a.2.2 0 0 0 .061-.148m1.2 0c0 .327-.113.643-.319.894l-.093.103-5.513 5.529c.997 2.516-.44 4.911-1.257 5.999l-.003.002a1.416 1.416 0 0 1-1.613.467 1.4 1.4 0 0 1-.502-.321L3.775 9.307a1.41 1.41 0 0 1 .114-2.099C5.517 5.896 7.118 5.606 8.323 5.66a6 6 0 0 1 1.44.244q.088.028.164.054l5.525-5.54.001-.001a1.41 1.41 0 0 1 1.994 0l6.142 6.146c.264.264.412.622.412.996"/><path d="M9.231 13.935a.601.601 0 0 1 .849.848l-4.889 4.889a.6.6 0 1 1-.849-.848zM11.395 22.795a.6.6 0 1 1 0 1.2H.6a.6.6 0 1 1 0-1.2z"/>',
    "duotone": '<path fill-opacity="0.2" d="M23.164 8.132a.81.81 0 0 0 0-1.145L17.022.842a.81.81 0 0 0-1.145 0L10.075 6.66s-2.809-1.405-5.81 1.017a.81.81 0 0 0-.066 1.206l10.925 10.924a.81.81 0 0 0 1.215-.084c.849-1.13 2.184-3.452 1.023-5.771z"/><path d="M22.801 7.562a.2.2 0 0 0-.061-.148l-6.142-6.148a.2.2 0 0 0-.148-.061.2.2 0 0 0-.149.06l.001.001-5.802 5.82a.6.6 0 0 1-.691.113q-.005 0-.014-.006l-.072-.03a4 4 0 0 0-.307-.108 4.7 4.7 0 0 0-1.147-.193c-.95-.043-2.254.177-3.627 1.286l-.003.001a.21.21 0 0 0-.078.152.2.2 0 0 0 .034.126l.028.035L15.548 19.39a.2.2 0 0 0 .073.046.2.2 0 0 0 .088.013.2.2 0 0 0 .149-.08c.838-1.115 1.958-3.163.968-5.144a.6.6 0 0 1 .111-.692l5.802-5.821.001-.002a.2.2 0 0 0 .061-.148m1.2 0c0 .327-.113.643-.319.894l-.093.103-5.513 5.531c.997 2.517-.44 4.914-1.257 6.001l-.003.003a1.416 1.416 0 0 1-1.613.468 1.4 1.4 0 0 1-.502-.322L3.775 9.311a1.405 1.405 0 0 1 .114-2.1c1.628-1.313 3.229-1.603 4.434-1.549a6 6 0 0 1 1.44.244q.088.028.164.054L15.452.419l.001-.002a1.41 1.41 0 0 1 1.994 0l6.142 6.148c.264.264.412.623.412.997"/><path d="M9.231 13.94a.601.601 0 0 1 .849.849L5.191 19.68a.601.601 0 0 1-.849-.849zM11.395 22.804a.6.6 0 1 1 0 1.201H.6a.6.6 0 0 1 0-1.201z"/>'
  },
  tags: ["pin", "bottom", "actions", "marker", "location", "place"]
};
var pinTopIcon = {
  name: "pin-top",
  content: '<path d="M1.205 16.444c0 .056.022.109.061.148l6.141 6.145a.2.2 0 0 0 .149.061.2.2 0 0 0 .149-.06l-.001-.001 5.802-5.817a.6.6 0 0 1 .691-.114q.004.002.014.006l.072.031c.067.027.171.067.307.108.272.082.667.171 1.147.193.95.043 2.254-.178 3.627-1.286l.002-.001a.2.2 0 0 0 .056-.068.2.2 0 0 0 .023-.084.2.2 0 0 0-.014-.087.2.2 0 0 0-.02-.039l-.028-.035L8.457 4.62a.202.202 0 0 0-.16-.058.2.2 0 0 0-.086.024.2.2 0 0 0-.063.055C7.31 5.756 6.19 7.803 7.18 9.783a.6.6 0 0 1-.111.692l-5.802 5.819-.001.002a.2.2 0 0 0-.061.148m-1.2 0c0-.327.113-.643.318-.894l.094-.103L5.93 9.918c-.997-2.516.44-4.911 1.257-5.999l.002-.002a1.42 1.42 0 0 1 1.025-.553 1.4 1.4 0 0 1 1.091.407l10.926 10.925a1.413 1.413 0 0 1-.115 2.099c-1.627 1.312-3.228 1.602-4.433 1.548a6 6 0 0 1-1.44-.244q-.088-.028-.164-.054l-5.525 5.54-.002.001a1.41 1.41 0 0 1-1.993 0L.417 17.44a1.4 1.4 0 0 1-.412-.996"/><path d="M14.784 10.068a.6.6 0 0 1-.848-.848l4.889-4.889a.6.6 0 0 1 .848.848zM23.406.005a.6.6 0 0 1 0 1.2H12.6a.6.6 0 1 1 0-1.2z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M.005 16.444c0-.327.113-.643.318-.894l.094-.103L5.93 9.918c-.997-2.516.44-4.911 1.257-5.999a1.416 1.416 0 0 1 1.616-.47c.188.07.359.18.502.322l10.926 10.925a1.413 1.413 0 0 1-.115 2.099c-1.627 1.312-3.228 1.602-4.433 1.548a6 6 0 0 1-1.583-.291l-.021-.007-5.525 5.54a1.415 1.415 0 0 1-1.995.001L.417 17.44a1.4 1.4 0 0 1-.412-.996"/><path d="M14.932 10.217a.81.81 0 1 1-1.145-1.146l4.889-4.889a.811.811 0 0 1 1.146 1.145zM23.184.003a.809.809 0 1 1 0 1.619H12.811a.81.81 0 1 1 0-1.619z"/>',
    "outline": '<path d="M1.205 16.444c0 .056.022.109.061.148l6.141 6.145a.2.2 0 0 0 .149.061.2.2 0 0 0 .149-.06l-.001-.001 5.802-5.817a.6.6 0 0 1 .691-.114q.004.002.014.006l.072.031c.067.027.171.067.307.108.272.082.667.171 1.147.193.95.043 2.254-.178 3.627-1.286l.002-.001a.2.2 0 0 0 .056-.068.2.2 0 0 0 .023-.084.2.2 0 0 0-.014-.087.2.2 0 0 0-.02-.039l-.028-.035L8.457 4.62a.202.202 0 0 0-.16-.058.2.2 0 0 0-.086.024.2.2 0 0 0-.063.055C7.31 5.756 6.19 7.803 7.18 9.783a.6.6 0 0 1-.111.692l-5.802 5.819-.001.002a.2.2 0 0 0-.061.148m-1.2 0c0-.327.113-.643.318-.894l.094-.103L5.93 9.918c-.997-2.516.44-4.911 1.257-5.999l.002-.002a1.42 1.42 0 0 1 1.025-.553 1.4 1.4 0 0 1 1.091.407l10.926 10.925a1.413 1.413 0 0 1-.115 2.099c-1.627 1.312-3.228 1.602-4.433 1.548a6 6 0 0 1-1.44-.244q-.088-.028-.164-.054l-5.525 5.54-.002.001a1.41 1.41 0 0 1-1.993 0L.417 17.44a1.4 1.4 0 0 1-.412-.996"/><path d="M14.784 10.068a.6.6 0 0 1-.848-.848l4.889-4.889a.6.6 0 0 1 .848.848zM23.406.005a.6.6 0 0 1 0 1.2H12.6a.6.6 0 1 1 0-1.2z"/>',
    "duotone": '<path fill-opacity="0.2" d="M.837 15.868a.81.81 0 0 0 0 1.145l6.142 6.145a.81.81 0 0 0 1.145 0l5.802-5.818s2.809 1.405 5.81-1.017a.81.81 0 0 0 .066-1.206L8.877 4.193a.8.8 0 0 0-.626-.233.8.8 0 0 0-.589.317c-.849 1.13-2.184 3.452-1.023 5.771z"/><path d="M1.2 16.438c0 .056.022.109.061.148l6.142 6.148a.21.21 0 0 0 .297.001l-.001-.001 5.802-5.82a.6.6 0 0 1 .692-.113l.014.006.071.03c.067.027.172.067.307.108.272.082.667.172 1.147.193.95.043 2.254-.177 3.627-1.286l.003-.001a.21.21 0 0 0 .078-.152.2.2 0 0 0-.034-.126l-.028-.035L8.453 4.61a.2.2 0 0 0-.073-.046.2.2 0 0 0-.173.012.2.2 0 0 0-.064.055c-.838 1.115-1.958 3.163-.968 5.144a.6.6 0 0 1-.111.692l-5.802 5.821-.001.002a.2.2 0 0 0-.061.148m-1.2 0c0-.327.113-.643.319-.894l.094-.103L5.925 9.91c-.997-2.517.44-4.914 1.257-6.001l.003-.003a1.42 1.42 0 0 1 1.613-.468c.189.07.36.18.502.322l10.927 10.929a1.42 1.42 0 0 1 .257 1.644c-.09.176-.217.332-.372.456-1.628 1.313-3.229 1.603-4.434 1.549a6 6 0 0 1-1.44-.244q-.088-.028-.164-.054l-5.525 5.541-.001.002a1.41 1.41 0 0 1-1.994 0L.413 17.435A1.4 1.4 0 0 1 0 16.438"/><path d="M14.77 10.06a.6.6 0 1 1-.848-.849l4.889-4.891a.6.6 0 1 1 .848.849zM12.606 1.196a.6.6 0 1 1 0-1.201h10.795a.6.6 0 0 1 0 1.201z"/>'
  },
  tags: ["pin", "top", "actions", "marker", "location", "place"]
};
var reorderIcon = {
  name: "reorder",
  content: '<path d="M6.127 8.356a1.013 1.013 0 1 1-1.013-1.013 1.013 1.013 0 0 1 1.013 1.013M12 7.343a1.013 1.013 0 1 0 1.013 1.013A1.013 1.013 0 0 0 12 7.343m6.886 2.024a1.013 1.013 0 1 0-1.013-1.013 1.013 1.013 0 0 0 1.013 1.013m-13.77 5.266a1.013 1.013 0 1 0 1.012 1.013 1.013 1.013 0 0 0-1.012-1.013m6.885 0a1.013 1.013 0 1 0 1.013 1.013 1.013 1.013 0 0 0-1.013-1.013m6.886 0a1.013 1.013 0 1 0 1.013 1.013 1.013 1.013 0 0 0-1.013-1.013"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M21.72 3.9H2.28A1.62 1.62 0 0 0 .66 5.52v12.96a1.62 1.62 0 0 0 1.62 1.62h19.44a1.62 1.62 0 0 0 1.62-1.62V5.52a1.62 1.62 0 0 0-1.62-1.62M5.924 16.05a1.216 1.216 0 1 1 1.216-1.214 1.216 1.216 0 0 1-1.216 1.214m0-5.67A1.216 1.216 0 1 1 7.14 9.166a1.216 1.216 0 0 1-1.216 1.215zM12 16.05a1.216 1.216 0 1 1 1.214-1.214A1.216 1.216 0 0 1 12 16.05m0-5.67a1.216 1.216 0 1 1 1.214-1.214A1.216 1.216 0 0 1 12 10.381zm6.076 5.67a1.216 1.216 0 1 1 1.214-1.214 1.216 1.216 0 0 1-1.214 1.214m0-5.67a1.216 1.216 0 1 1 1.214-1.214 1.216 1.216 0 0 1-1.214 1.215z"/>',
    "outline": '<path d="M6.127 8.356a1.013 1.013 0 1 1-1.013-1.013 1.013 1.013 0 0 1 1.013 1.013M12 7.343a1.013 1.013 0 1 0 1.013 1.013A1.013 1.013 0 0 0 12 7.343m6.886 2.024a1.013 1.013 0 1 0-1.013-1.013 1.013 1.013 0 0 0 1.013 1.013m-13.77 5.266a1.013 1.013 0 1 0 1.012 1.013 1.013 1.013 0 0 0-1.012-1.013m6.885 0a1.013 1.013 0 1 0 1.013 1.013 1.013 1.013 0 0 0-1.013-1.013m6.886 0a1.013 1.013 0 1 0 1.013 1.013 1.013 1.013 0 0 0-1.013-1.013"/>',
    "duotone": '<path d="M23.34 5.52v12.96a1.62 1.62 0 0 1-1.62 1.62H2.28a1.62 1.62 0 0 1-1.62-1.62V5.52A1.62 1.62 0 0 1 2.28 3.9h19.44a1.62 1.62 0 0 1 1.62 1.62" opacity="0.2"/><path d="M6.33 8.356A1.216 1.216 0 1 1 5.114 7.14 1.216 1.216 0 0 1 6.33 8.356M12 7.14a1.216 1.216 0 1 0 1.214 1.216A1.216 1.216 0 0 0 12 7.14m6.886 2.43a1.216 1.216 0 1 0-1.215-1.216 1.216 1.216 0 0 0 1.215 1.216m-13.77 4.86a1.216 1.216 0 1 0 1.215 1.216 1.216 1.216 0 0 0-1.215-1.216m6.885 0a1.216 1.216 0 1 0 1.215 1.216 1.216 1.216 0 0 0-1.215-1.216m6.886 0a1.216 1.216 0 1 0 1.214 1.216 1.216 1.216 0 0 0-1.214-1.216"/>'
  },
  tags: ["reorder", "layout"]
};
var saveIcon = {
  name: "save",
  content: '<path d="m21.102 6.474-3.576-3.576a1.4 1.4 0 0 0-1.001-.415H3.9A1.416 1.416 0 0 0 2.483 3.9v16.2A1.416 1.416 0 0 0 3.9 21.517h16.2a1.416 1.416 0 0 0 1.417-1.417V7.475a1.4 1.4 0 0 0-.415-1.001m-4.85 13.829H7.746V14.43a.204.204 0 0 1 .203-.203h8.1a.204.204 0 0 1 .203.203zm4.05-.203a.204.204 0 0 1-.203.203h-2.633V14.43a1.416 1.416 0 0 0-1.417-1.417h-8.1a1.416 1.416 0 0 0-1.417 1.417v5.873H3.899a.204.204 0 0 1-.203-.203V3.9a.204.204 0 0 1 .203-.203h12.625a.2.2 0 0 1 .143.059l3.576 3.576a.2.2 0 0 1 .059.143zM15.037 6.33a.607.607 0 0 1-.607.607H8.76a.608.608 0 0 1 0-1.215h5.67a.607.607 0 0 1 .607.607z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M21.245 6.33 17.67 2.755a1.6 1.6 0 0 0-1.145-.475H3.9A1.62 1.62 0 0 0 2.28 3.9v16.2a1.62 1.62 0 0 0 1.62 1.62h16.2a1.62 1.62 0 0 0 1.62-1.62V7.475a1.6 1.6 0 0 0-.475-1.145M20.1 20.1h-2.43v-5.67a1.62 1.62 0 0 0-1.62-1.62h-8.1a1.62 1.62 0 0 0-1.62 1.62v5.67H3.9V3.9h12.625L20.1 7.475zM15.24 6.33a.81.81 0 0 1-.81.81H8.76a.81.81 0 0 1 0-1.62h5.67a.81.81 0 0 1 .81.81"/>',
    "outline": '<path d="m21.102 6.474-3.576-3.576a1.4 1.4 0 0 0-1.001-.415H3.9A1.416 1.416 0 0 0 2.483 3.9v16.2A1.416 1.416 0 0 0 3.9 21.517h16.2a1.416 1.416 0 0 0 1.417-1.417V7.475a1.4 1.4 0 0 0-.415-1.001m-4.85 13.829H7.746V14.43a.204.204 0 0 1 .203-.203h8.1a.204.204 0 0 1 .203.203zm4.05-.203a.204.204 0 0 1-.203.203h-2.633V14.43a1.416 1.416 0 0 0-1.417-1.417h-8.1a1.416 1.416 0 0 0-1.417 1.417v5.873H3.899a.204.204 0 0 1-.203-.203V3.9a.204.204 0 0 1 .203-.203h12.625a.2.2 0 0 1 .143.059l3.576 3.576a.2.2 0 0 1 .059.143zM15.037 6.33a.607.607 0 0 1-.607.607H8.76a.608.608 0 0 1 0-1.215h5.67a.607.607 0 0 1 .607.607z"/>',
    "duotone": '<path d="M20.91 7.475V20.1a.81.81 0 0 1-.81.81h-3.24v-6.48a.81.81 0 0 0-.81-.81h-8.1a.81.81 0 0 0-.81.81v6.48H3.9a.81.81 0 0 1-.81-.81V3.9a.81.81 0 0 1 .81-.81h12.625a.82.82 0 0 1 .573.236l3.576 3.576a.82.82 0 0 1 .236.573" opacity="0.2"/><path d="M21.245 6.33 17.67 2.755a1.6 1.6 0 0 0-1.145-.475H3.9A1.62 1.62 0 0 0 2.28 3.9v16.2a1.62 1.62 0 0 0 1.62 1.62h16.2a1.62 1.62 0 0 0 1.62-1.62V7.475a1.6 1.6 0 0 0-.475-1.145M16.05 20.1h-8.1v-5.67h8.1zm4.05 0h-2.43v-5.67a1.62 1.62 0 0 0-1.62-1.62h-8.1a1.62 1.62 0 0 0-1.62 1.62v5.67H3.9V3.9h12.625L20.1 7.475zM15.24 6.33a.81.81 0 0 1-.81.81H8.76a.81.81 0 0 1 0-1.62h5.67a.81.81 0 0 1 .81.81"/>'
  },
  tags: ["save", "actions", "disk", "floppy", "store"]
};
var walletIcon = {
  name: "wallet",
  content: '<path d="M20.91 5.723H4.71a1.013 1.013 0 0 1 0-2.026h13.77a.608.608 0 0 0 0-1.215H4.71a2.227 2.227 0 0 0-2.227 2.227v12.96a2.227 2.227 0 0 0 2.227 2.227h16.2a1.416 1.416 0 0 0 1.417-1.417V7.139a1.416 1.416 0 0 0-1.417-1.417zm.203 12.757a.204.204 0 0 1-.203.203H4.71a1.013 1.013 0 0 1-1.013-1.013V6.694a2.2 2.2 0 0 0 1.013.243h16.2a.204.204 0 0 1 .203.203zm-2.836-6.076a1.013 1.013 0 1 1-1.013-1.012 1.013 1.013 0 0 1 1.013 1.012"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M20.91 5.52H4.71a.81.81 0 0 1 0-1.62h13.77a.81.81 0 0 0 0-1.62H4.71a2.43 2.43 0 0 0-2.43 2.43v12.96a2.43 2.43 0 0 0 2.43 2.43h16.2a1.62 1.62 0 0 0 1.62-1.62V7.14a1.62 1.62 0 0 0-1.62-1.62m-3.644 8.1a1.216 1.216 0 1 1 1.215-1.216 1.216 1.216 0 0 1-1.215 1.216"/>',
    "outline": '<path d="M20.91 5.723H4.71a1.013 1.013 0 0 1 0-2.026h13.77a.608.608 0 0 0 0-1.215H4.71a2.227 2.227 0 0 0-2.227 2.227v12.96a2.227 2.227 0 0 0 2.227 2.227h16.2a1.416 1.416 0 0 0 1.417-1.417V7.139a1.416 1.416 0 0 0-1.417-1.417zm.203 12.757a.204.204 0 0 1-.203.203H4.71a1.013 1.013 0 0 1-1.013-1.013V6.694a2.2 2.2 0 0 0 1.013.243h16.2a.204.204 0 0 1 .203.203zm-2.836-6.076a1.013 1.013 0 1 1-1.013-1.012 1.013 1.013 0 0 1 1.013 1.012"/>',
    "duotone": '<path d="M21.72 7.14v11.34a.81.81 0 0 1-.81.81H4.71a1.62 1.62 0 0 1-1.62-1.62V4.71a1.62 1.62 0 0 0 1.62 1.62h16.2a.81.81 0 0 1 .81.81" opacity="0.2"/><path d="M20.91 5.52H4.71a.81.81 0 0 1 0-1.62h13.77a.81.81 0 0 0 0-1.62H4.71a2.43 2.43 0 0 0-2.43 2.43v12.96a2.43 2.43 0 0 0 2.43 2.43h16.2a1.62 1.62 0 0 0 1.62-1.62V7.14a1.62 1.62 0 0 0-1.62-1.62m0 12.96H4.71a.81.81 0 0 1-.81-.81V7.001a2.4 2.4 0 0 0 .81.139h16.2zm-4.86-6.076a1.216 1.216 0 1 1 1.214 1.215 1.216 1.216 0 0 1-1.214-1.216z"/>'
  },
  tags: ["money", "payment", "paying", "purchase"]
};
var searchIcon = {
  name: "search",
  content: '<path d="m22.15 21.29-5.202-5.202a8.723 8.723 0 1 0-.86.86l5.202 5.202a.607.607 0 0 0 .858-.858zM2.887 10.38a7.493 7.493 0 1 1 7.493 7.493 7.5 7.5 0 0 1-7.493-7.493"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M16.05 10.38a5.67 5.67 0 1 1-5.67-5.67 5.67 5.67 0 0 1 5.67 5.67m6.244 11.914a.81.81 0 0 1-1.146 0l-5.069-5.07a8.91 8.91 0 1 1 1.146-1.145l5.069 5.069a.81.81 0 0 1 0 1.146M10.38 17.67a7.29 7.29 0 1 0-7.29-7.29 7.296 7.296 0 0 0 7.29 7.29"/>',
    "outline": '<path d="m22.15 21.29-5.202-5.202a8.723 8.723 0 1 0-.86.86l5.202 5.202a.607.607 0 0 0 .858-.858zM2.887 10.38a7.493 7.493 0 1 1 7.493 7.493 7.5 7.5 0 0 1-7.493-7.493"/>',
    "duotone": '<path d="M18.48 10.38a8.1 8.1 0 1 1-8.1-8.1 8.1 8.1 0 0 1 8.1 8.1" opacity="0.2"/><path d="m22.294 21.146-5.069-5.068a8.932 8.932 0 1 0-1.146 1.144l5.069 5.07a.81.81 0 0 0 1.146-1.146M3.09 10.38a7.29 7.29 0 1 1 7.29 7.29 7.296 7.296 0 0 1-7.29-7.29"/>'
  },
  tags: ["search", "actions", "find", "lookup", "magnify"]
};
var setColumnPositionIcon = {
  name: "set-column-position",
  content: '<path d="M19.493 17.468h-6.886v2.025h6.683a.203.203 0 0 0 .203-.203zm-6.886-1.215h6.886v-2.025h-6.886zm0-3.24h6.886v-2.026h-6.886zm0-3.241h6.886V7.747h-6.886zm6.886-5.062a.203.203 0 0 0-.203-.203h-6.683v2.025h6.886zM4.507 19.29c0 .112.091.203.203.203h6.683V4.507H4.71a.203.203 0 0 0-.203.203zm16.2 0c0 .783-.634 1.417-1.417 1.417H4.71a1.416 1.416 0 0 1-1.417-1.417V4.71c0-.783.634-1.417 1.417-1.417h14.58c.783 0 1.417.634 1.417 1.417z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M11.397 20.1H4.8a.896.896 0 0 1-.9-.895c0-2.812.002-11.46.001-14.411a.894.894 0 0 1 .9-.894h6.596zm8.703-.9a.9.9 0 0 1-.9.9h-6.597v-2.275H20.1zm0-2.582h-7.497v-2.274H20.1zm0-3.481h-7.497v-2.274H20.1zm0-3.481h-7.497V7.382H20.1zM19.2 3.9a.9.9 0 0 1 .9.9v1.375h-7.497V3.9z"/>',
    "outline": '<path d="M19.493 17.468h-6.886v2.025h6.683a.203.203 0 0 0 .203-.203zm-6.886-1.215h6.886v-2.025h-6.886zm0-3.24h6.886v-2.026h-6.886zm0-3.241h6.886V7.747h-6.886zm6.886-5.062a.203.203 0 0 0-.203-.203h-6.683v2.025h6.886zM4.507 19.29c0 .112.091.203.203.203h6.683V4.507H4.71a.203.203 0 0 0-.203.203zm16.2 0c0 .783-.634 1.417-1.417 1.417H4.71a1.416 1.416 0 0 1-1.417-1.417V4.71c0-.783.634-1.417 1.417-1.417h14.58c.783 0 1.417.634 1.417 1.417z"/>',
    "duotone": '<path fill-opacity="0.2" d="M12 3.9h8.1v16.2H12z"/><path d="M19.493 17.468h-6.886v2.025h6.683a.203.203 0 0 0 .203-.203zm-6.886-1.215h6.886v-2.025h-6.886zm0-3.24h6.886v-2.026h-6.886zm0-3.241h6.886V7.747h-6.886zm6.886-5.062a.203.203 0 0 0-.203-.203h-6.683v2.025h6.886zM4.507 19.29c0 .112.091.203.203.203h6.683V4.507H4.71a.203.203 0 0 0-.203.203zm16.2 0c0 .783-.634 1.417-1.417 1.417H4.71a1.416 1.416 0 0 1-1.417-1.417V4.71c0-.783.634-1.417 1.417-1.417h14.58c.783 0 1.417.634 1.417 1.417z"/>'
  },
  tags: ["set", "column", "position", "actions"]
};
var slidersIcon = {
  name: "sliders",
  content: '<path d="M5.317 9.833V3.09a.608.608 0 0 0-1.215 0v6.743a3.037 3.037 0 0 0 0 5.953v5.123a.608.608 0 0 0 1.215 0v-5.123a3.037 3.037 0 0 0 0-5.953m-.607 4.799a1.823 1.823 0 1 1 1.823-1.823 1.824 1.824 0 0 1-1.823 1.823m7.897-9.659V3.09a.607.607 0 0 0-1.214 0v1.883a3.037 3.037 0 0 0 0 5.953v9.983a.607.607 0 0 0 1.214 0v-9.983a3.037 3.037 0 0 0 0-5.953M12 9.772a1.823 1.823 0 1 1 1.823-1.823A1.824 1.824 0 0 1 12 9.772m10.327 6.277a3.04 3.04 0 0 0-2.43-2.977V3.089a.607.607 0 0 0-1.214 0v9.983a3.037 3.037 0 0 0 0 5.953v1.883a.607.607 0 0 0 1.214 0v-1.883a3.04 3.04 0 0 0 2.43-2.977zm-3.037 1.823a1.823 1.823 0 1 1 1.823-1.823 1.824 1.824 0 0 1-1.823 1.823"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M7.546 12.81a2.83 2.83 0 0 1-2.026 2.717v5.383a.81.81 0 0 1-1.62 0v-5.383a2.836 2.836 0 0 1 0-5.434V3.09a.81.81 0 0 1 1.62 0v7.003a2.83 2.83 0 0 1 2.026 2.717m5.265-7.577V3.09a.81.81 0 0 0-1.62 0v2.143a2.836 2.836 0 0 0 0 5.434V20.91a.81.81 0 0 0 1.62 0V10.667a2.836 2.836 0 0 0 0-5.434m7.29 8.1V3.09a.81.81 0 0 0-1.62 0v10.243a2.836 2.836 0 0 0 0 5.434v2.143a.81.81 0 0 0 1.62 0v-2.143a2.836 2.836 0 0 0 0-5.434"/>',
    "outline": '<path d="M5.317 9.833V3.09a.608.608 0 0 0-1.215 0v6.743a3.037 3.037 0 0 0 0 5.953v5.123a.608.608 0 0 0 1.215 0v-5.123a3.037 3.037 0 0 0 0-5.953m-.607 4.799a1.823 1.823 0 1 1 1.823-1.823 1.824 1.824 0 0 1-1.823 1.823m7.897-9.659V3.09a.607.607 0 0 0-1.214 0v1.883a3.037 3.037 0 0 0 0 5.953v9.983a.607.607 0 0 0 1.214 0v-9.983a3.037 3.037 0 0 0 0-5.953M12 9.772a1.823 1.823 0 1 1 1.823-1.823A1.824 1.824 0 0 1 12 9.772m10.327 6.277a3.04 3.04 0 0 0-2.43-2.977V3.089a.607.607 0 0 0-1.214 0v9.983a3.037 3.037 0 0 0 0 5.953v1.883a.607.607 0 0 0 1.214 0v-1.883a3.04 3.04 0 0 0 2.43-2.977zm-3.037 1.823a1.823 1.823 0 1 1 1.823-1.823 1.824 1.824 0 0 1-1.823 1.823"/>',
    "duotone": '<path d="M7.14 12.81a2.43 2.43 0 1 1-2.43-2.43 2.43 2.43 0 0 1 2.43 2.43M12 5.52a2.43 2.43 0 1 0 2.43 2.43A2.43 2.43 0 0 0 12 5.52m7.29 8.1a2.43 2.43 0 1 0 2.43 2.43 2.43 2.43 0 0 0-2.43-2.43" opacity="0.2"/><path d="M5.52 9.671V3.09a.81.81 0 0 0-1.62 0v6.581a3.24 3.24 0 0 0 0 6.277v4.961a.81.81 0 0 0 1.62 0v-4.961a3.24 3.24 0 0 0 0-6.277m-.81 4.759a1.62 1.62 0 1 1 1.62-1.62 1.62 1.62 0 0 1-1.62 1.62m8.1-9.619V3.09a.81.81 0 0 0-1.62 0v1.721a3.24 3.24 0 0 0 0 6.277v9.821a.81.81 0 0 0 1.62 0v-9.821a3.24 3.24 0 0 0 0-6.277M12 9.57a1.62 1.62 0 1 1 1.62-1.62A1.62 1.62 0 0 1 12 9.57m10.53 6.48a3.246 3.246 0 0 0-2.43-3.139V3.09a.81.81 0 0 0-1.62 0v9.821a3.24 3.24 0 0 0 0 6.277v1.721a.81.81 0 0 0 1.62 0v-1.721a3.246 3.246 0 0 0 2.43-3.139zm-3.24 1.62a1.62 1.62 0 1 1 1.62-1.62 1.62 1.62 0 0 1-1.62 1.62"/>'
  },
  tags: ["music", "audio", "faders", "filters", "equalizer", "volume", "settings", "preferences"]
};
var sortAscSmallIcon = {
  name: "sort-asc-small",
  content: '<path d="M19.72 10.81a.607.607 0 0 1-.858 0l-6.254-6.252V20.91a.608.608 0 0 1-1.215 0V4.558L5.14 10.81a.607.607 0 0 1-.86-.86l7.29-7.29a.607.607 0 0 1 .86 0l7.29 7.29a.607.607 0 0 1 0 .86"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M20.039 10.69a.81.81 0 0 1-.749.5h-6.48v9.72a.81.81 0 0 1-1.62 0v-9.72H4.71a.81.81 0 0 1-.574-1.384l7.29-7.29a.81.81 0 0 1 1.146 0l7.29 7.29a.81.81 0 0 1 .176.884z"/>',
    "outline": '<path d="M19.72 10.81a.607.607 0 0 1-.858 0l-6.254-6.252V20.91a.608.608 0 0 1-1.215 0V4.558L5.14 10.81a.607.607 0 0 1-.86-.86l7.29-7.29a.607.607 0 0 1 .86 0l7.29 7.29a.607.607 0 0 1 0 .86"/>',
    "duotone": '<path d="M19.29 10.38H4.71L12 3.09z" opacity="0.2"/><path d="m19.864 9.806-7.29-7.29a.81.81 0 0 0-1.146 0l-7.29 7.29a.81.81 0 0 0 .573 1.384h6.48v9.72a.81.81 0 0 0 1.62 0v-9.72h6.48a.81.81 0 0 0 .574-1.384zM6.666 9.57l5.335-5.335 5.335 5.335z"/>'
  },
  tags: ["sort", "asc", "small", "actions", "order", "arrange"]
};
var sortDescSmallIcon = {
  name: "sort-desc-small",
  content: '<path d="m19.72 14.05-7.29 7.29a.607.607 0 0 1-.86 0l-7.29-7.29a.607.607 0 0 1 .86-.86l6.253 6.252V3.09a.608.608 0 0 1 1.215 0v16.352l6.254-6.252a.607.607 0 0 1 .858.86"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="m19.864 14.194-7.29 7.29a.81.81 0 0 1-1.146 0l-7.29-7.29a.81.81 0 0 1 .573-1.384h6.48V3.09a.81.81 0 0 1 1.62 0v9.72h6.48a.81.81 0 0 1 .574 1.384z"/>',
    "outline": '<path d="m19.72 14.05-7.29 7.29a.607.607 0 0 1-.86 0l-7.29-7.29a.607.607 0 0 1 .86-.86l6.253 6.252V3.09a.608.608 0 0 1 1.215 0v16.352l6.254-6.252a.607.607 0 0 1 .858.86"/>',
    "duotone": '<path d="M19.29 13.62 12 20.91l-7.29-7.29z" opacity="0.2"/><path d="M20.039 13.31a.81.81 0 0 0-.749-.5h-6.48V3.09a.81.81 0 0 0-1.62 0v9.72H4.71a.81.81 0 0 0-.574 1.384l7.29 7.29a.81.81 0 0 0 1.146 0l7.29-7.29a.81.81 0 0 0 .176-.884zM12 19.765 6.665 14.43h10.669z"/>'
  },
  tags: ["sort", "desc", "small", "actions", "order", "arrange"]
};
var sparklesIcon = {
  name: "sparkles",
  content: '<path d="m18.976 12.298-5.315-1.959-1.959-5.315a1.41 1.41 0 0 0-2.644 0l-1.959 5.315-5.315 1.959a1.41 1.41 0 0 0 0 2.644l5.315 1.959 1.959 5.315a1.41 1.41 0 0 0 2.644 0l1.959-5.315 5.315-1.959a1.41 1.41 0 0 0 0-2.644m-.42 1.504-5.577 2.056a.6.6 0 0 0-.36.36l-2.055 5.576a.194.194 0 0 1-.365 0l-2.056-5.576a.6.6 0 0 0-.36-.36l-5.576-2.056a.194.194 0 0 1 0-.364l5.576-2.056a.6.6 0 0 0 .36-.36l2.056-5.576a.194.194 0 0 1 .365 0l2.055 5.576a.6.6 0 0 0 .36.36l5.577 2.056a.194.194 0 0 1 0 .364M13.823 3.09a.607.607 0 0 1 .607-.607h1.823V.66a.608.608 0 0 1 1.215 0v1.823h1.823a.608.608 0 0 1 0 1.215h-1.823v1.823a.608.608 0 0 1-1.215 0V3.698H14.43a.607.607 0 0 1-.607-.607zm10.125 4.86a.607.607 0 0 1-.607.607h-1.013V9.57a.607.607 0 0 1-1.214 0V8.557h-1.013a.608.608 0 0 1 0-1.215h1.013V6.329a.607.607 0 0 1 1.214 0v1.013h1.013a.607.607 0 0 1 .607.607z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M20.1 13.62a1.6 1.6 0 0 1-1.055 1.513l-5.222 1.93-1.924 5.226a1.612 1.612 0 0 1-3.025 0l-1.936-5.226-5.226-1.924a1.612 1.612 0 0 1 0-3.025l5.226-1.936 1.924-5.226a1.612 1.612 0 0 1 3.025 0l1.936 5.226 5.226 1.924a1.6 1.6 0 0 1 1.051 1.519zM14.43 3.9h1.62v1.62a.81.81 0 0 0 1.62 0V3.9h1.62a.81.81 0 0 0 0-1.62h-1.62V.66a.81.81 0 0 0-1.62 0v1.62h-1.62a.81.81 0 0 0 0 1.62m8.91 3.24h-.81v-.81a.81.81 0 0 0-1.62 0v.81h-.81a.81.81 0 0 0 0 1.62h.81v.81a.81.81 0 0 0 1.62 0v-.81h.81a.81.81 0 0 0 0-1.62"/>',
    "outline": '<path d="m18.976 12.298-5.315-1.959-1.959-5.315a1.41 1.41 0 0 0-2.644 0l-1.959 5.315-5.315 1.959a1.41 1.41 0 0 0 0 2.644l5.315 1.959 1.959 5.315a1.41 1.41 0 0 0 2.644 0l1.959-5.315 5.315-1.959a1.41 1.41 0 0 0 0-2.644m-.42 1.504-5.577 2.056a.6.6 0 0 0-.36.36l-2.055 5.576a.194.194 0 0 1-.365 0l-2.056-5.576a.6.6 0 0 0-.36-.36l-5.576-2.056a.194.194 0 0 1 0-.364l5.576-2.056a.6.6 0 0 0 .36-.36l2.056-5.576a.194.194 0 0 1 .365 0l2.055 5.576a.6.6 0 0 0 .36.36l5.577 2.056a.194.194 0 0 1 0 .364M13.823 3.09a.607.607 0 0 1 .607-.607h1.823V.66a.608.608 0 0 1 1.215 0v1.823h1.823a.608.608 0 0 1 0 1.215h-1.823v1.823a.608.608 0 0 1-1.215 0V3.698H14.43a.607.607 0 0 1-.607-.607zm10.125 4.86a.607.607 0 0 1-.607.607h-1.013V9.57a.607.607 0 0 1-1.214 0V8.557h-1.013a.608.608 0 0 1 0-1.215h1.013V6.329a.607.607 0 0 1 1.214 0v1.013h1.013a.607.607 0 0 1 .607.607z"/>',
    "duotone": '<path d="m18.766 14.372-5.578 2.056-2.056 5.578a.802.802 0 0 1-1.504 0l-2.056-5.578-5.578-2.056a.802.802 0 0 1 0-1.504l5.578-2.056 2.056-5.578a.802.802 0 0 1 1.504 0l2.056 5.578 5.578 2.056a.802.802 0 0 1 0 1.504" opacity="0.2"/><path d="m19.045 12.107-5.222-1.93-1.924-5.226a1.612 1.612 0 0 0-3.025 0l-1.936 5.226-5.226 1.924a1.612 1.612 0 0 0 0 3.025l5.226 1.936 1.924 5.226a1.612 1.612 0 0 0 3.025 0l1.936-5.226 5.226-1.924a1.612 1.612 0 0 0 0-3.025zm-6.133 3.56a.82.82 0 0 0-.48.48l-2.051 5.557-2.047-5.553a.82.82 0 0 0-.484-.484L2.297 13.62l5.553-2.047a.82.82 0 0 0 .484-.484l2.047-5.553 2.047 5.553a.82.82 0 0 0 .48.48l5.558 2.051zm.709-12.577a.81.81 0 0 1 .81-.81h1.62V.66a.81.81 0 0 1 1.62 0v1.62h1.62a.81.81 0 0 1 0 1.62h-1.62v1.62a.81.81 0 0 1-1.62 0V3.9h-1.62a.81.81 0 0 1-.81-.81m10.53 4.86a.81.81 0 0 1-.81.81h-.81v.81a.81.81 0 0 1-1.62 0v-.81h-.81a.81.81 0 0 1 0-1.62h.81v-.81a.81.81 0 0 1 1.62 0v.81h.81a.81.81 0 0 1 .81.81"/>'
  },
  tags: ["sparkles", "misc"]
};
var stickIcon = {
  name: "stick",
  content: '<path d="M19.29 3.293h-4.05a1.416 1.416 0 0 0-1.417 1.417v8.91a1.823 1.823 0 0 1-3.645 0V4.71a1.416 1.416 0 0 0-1.417-1.417h-4.05A1.416 1.416 0 0 0 3.294 4.71v8.91a8.707 8.707 0 0 0 8.707 8.707h.066c4.765-.036 8.641-3.988 8.641-8.809V4.709a1.416 1.416 0 0 0-1.417-1.417zm-4.05 1.215h4.05a.204.204 0 0 1 .203.203v3.443h-4.455V4.711a.204.204 0 0 1 .203-.203zm-10.53 0h4.05a.204.204 0 0 1 .203.203v3.443H4.507V4.711a.204.204 0 0 1 .203-.203m7.346 16.606H12a7.493 7.493 0 0 1-7.493-7.493V9.368h4.456v4.253a3.038 3.038 0 0 0 6.075 0V9.368h4.456v4.151c0 4.157-3.335 7.564-7.436 7.594z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M19.29 3.09h-4.05a1.62 1.62 0 0 0-1.62 1.62v8.91a1.62 1.62 0 0 1-3.24 0V4.71a1.62 1.62 0 0 0-1.62-1.62H4.71a1.62 1.62 0 0 0-1.62 1.62v8.91A8.91 8.91 0 0 0 12 22.53h.068c4.876-.036 8.842-4.079 8.842-9.011V4.71a1.62 1.62 0 0 0-1.62-1.62m0 1.62v4.05h-4.05V4.71zm-10.53 0v4.05H4.71V4.71z"/>',
    "outline": '<path d="M19.29 3.293h-4.05a1.416 1.416 0 0 0-1.417 1.417v8.91a1.823 1.823 0 0 1-3.645 0V4.71a1.416 1.416 0 0 0-1.417-1.417h-4.05A1.416 1.416 0 0 0 3.294 4.71v8.91a8.707 8.707 0 0 0 8.707 8.707h.066c4.765-.036 8.641-3.988 8.641-8.809V4.709a1.416 1.416 0 0 0-1.417-1.417zm-4.05 1.215h4.05a.204.204 0 0 1 .203.203v3.443h-4.455V4.711a.204.204 0 0 1 .203-.203zm-10.53 0h4.05a.204.204 0 0 1 .203.203v3.443H4.507V4.711a.204.204 0 0 1 .203-.203m7.346 16.606H12a7.493 7.493 0 0 1-7.493-7.493V9.368h4.456v4.253a3.038 3.038 0 0 0 6.075 0V9.368h4.456v4.151c0 4.157-3.335 7.564-7.436 7.594z"/>',
    "duotone": '<path d="M9.57 4.71v4.05H3.9V4.71a.81.81 0 0 1 .81-.81h4.05a.81.81 0 0 1 .81.81m9.72-.81h-4.05a.81.81 0 0 0-.81.81v4.05h5.67V4.71a.81.81 0 0 0-.81-.81" opacity="0.2"/><path d="M19.29 3.09h-4.05a1.62 1.62 0 0 0-1.62 1.62v8.91a1.62 1.62 0 0 1-3.24 0V4.71a1.62 1.62 0 0 0-1.62-1.62H4.71a1.62 1.62 0 0 0-1.62 1.62v8.91A8.91 8.91 0 0 0 12 22.53h.068c4.876-.036 8.842-4.079 8.842-9.011V4.71a1.62 1.62 0 0 0-1.62-1.62m0 1.62v3.24h-4.05V4.71zm-10.53 0v3.24H4.71V4.71zm3.295 16.2a7.29 7.29 0 0 1-7.345-7.29V9.57h4.05v4.05a3.24 3.24 0 0 0 6.48 0V9.57h4.05v3.949c0 4.05-3.24 7.362-7.235 7.391"/>'
  },
  tags: ["stick", "actions"]
};
var stopIcon = {
  name: "stop",
  content: '<path d="M19.29 3.293H4.71A1.416 1.416 0 0 0 3.293 4.71v14.58a1.416 1.416 0 0 0 1.417 1.417h14.58a1.416 1.416 0 0 0 1.417-1.417V4.71a1.416 1.416 0 0 0-1.417-1.417m.203 15.997a.204.204 0 0 1-.203.203H4.71a.204.204 0 0 1-.203-.203V4.71a.204.204 0 0 1 .203-.203h14.58a.204.204 0 0 1 .203.203z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M20.91 4.71v14.58a1.62 1.62 0 0 1-1.62 1.62H4.71a1.62 1.62 0 0 1-1.62-1.62V4.71a1.62 1.62 0 0 1 1.62-1.62h14.58a1.62 1.62 0 0 1 1.62 1.62"/>',
    "outline": '<path d="M19.29 3.293H4.71A1.416 1.416 0 0 0 3.293 4.71v14.58a1.416 1.416 0 0 0 1.417 1.417h14.58a1.416 1.416 0 0 0 1.417-1.417V4.71a1.416 1.416 0 0 0-1.417-1.417m.203 15.997a.204.204 0 0 1-.203.203H4.71a.204.204 0 0 1-.203-.203V4.71a.204.204 0 0 1 .203-.203h14.58a.204.204 0 0 1 .203.203z"/>',
    "duotone": '<path d="M20.1 4.71v14.58a.81.81 0 0 1-.81.81H4.71a.81.81 0 0 1-.81-.81V4.71a.81.81 0 0 1 .81-.81h14.58a.81.81 0 0 1 .81.81" opacity="0.2"/><path d="M19.29 3.09H4.71a1.62 1.62 0 0 0-1.62 1.62v14.58a1.62 1.62 0 0 0 1.62 1.62h14.58a1.62 1.62 0 0 0 1.62-1.62V4.71a1.62 1.62 0 0 0-1.62-1.62m0 16.2H4.71V4.71h14.58z"/>'
  },
  tags: ["music", "audio"]
};
var thumbDownIcon = {
  name: "thumb-down",
  content: '<path d="m23.12 14.964-1.214-9.72a2.23 2.23 0 0 0-2.21-1.951H2.28A1.416 1.416 0 0 0 .863 4.71v8.91a1.416 1.416 0 0 0 1.417 1.417h4.484l3.882 7.764a.61.61 0 0 0 .544.336 3.847 3.847 0 0 0 3.847-3.847v-1.823h5.873a2.227 2.227 0 0 0 2.21-2.504zM6.533 13.823H2.28a.204.204 0 0 1-.203-.203V4.71a.204.204 0 0 1 .203-.203h4.253zm15.137 2.088a1 1 0 0 1-.76.342h-6.48a.607.607 0 0 0-.607.607v2.43a2.63 2.63 0 0 1-2.271 2.608l-3.805-7.611V4.508h11.947a1.013 1.013 0 0 1 1.005.887l1.214 9.72a1 1 0 0 1-.245.796z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="m23.322 14.936-1.214-9.72a2.43 2.43 0 0 0-2.412-2.126H2.28A1.62 1.62 0 0 0 .66 4.71v8.91a1.62 1.62 0 0 0 1.62 1.62h4.36l3.825 7.652a.82.82 0 0 0 .725.448 4.05 4.05 0 0 0 4.05-4.05v-1.62h5.67a2.43 2.43 0 0 0 2.412-2.734M6.33 13.62H2.28V4.71h4.05z"/>',
    "outline": '<path d="m23.12 14.964-1.214-9.72a2.23 2.23 0 0 0-2.21-1.951H2.28A1.416 1.416 0 0 0 .863 4.71v8.91a1.416 1.416 0 0 0 1.417 1.417h4.484l3.882 7.764a.61.61 0 0 0 .544.336 3.847 3.847 0 0 0 3.847-3.847v-1.823h5.873a2.227 2.227 0 0 0 2.21-2.504zM6.533 13.823H2.28a.204.204 0 0 1-.203-.203V4.71a.204.204 0 0 1 .203-.203h4.253zm15.137 2.088a1 1 0 0 1-.76.342h-6.48a.607.607 0 0 0-.607.607v2.43a2.63 2.63 0 0 1-2.271 2.608l-3.805-7.611V4.508h11.947a1.013 1.013 0 0 1 1.005.887l1.214 9.72a1 1 0 0 1-.245.796z"/>',
    "duotone": '<path d="M7.14 3.9v10.53H2.28a.81.81 0 0 1-.81-.81V4.71a.81.81 0 0 1 .81-.81z" opacity="0.2"/><path d="m23.322 14.936-1.214-9.72a2.43 2.43 0 0 0-2.412-2.126H2.28A1.62 1.62 0 0 0 .66 4.71v8.91a1.62 1.62 0 0 0 1.62 1.62h4.36l3.825 7.652a.82.82 0 0 0 .725.448 4.05 4.05 0 0 0 4.05-4.05v-1.62h5.67a2.43 2.43 0 0 0 2.412-2.734M6.33 13.62H2.28V4.71h4.05zm15.187 2.155a.8.8 0 0 1-.607.275h-6.48a.81.81 0 0 0-.81.81v2.43a2.43 2.43 0 0 1-1.954 2.383L7.95 14.238V4.709h11.746a.81.81 0 0 1 .804.709l1.214 9.72a.8.8 0 0 1-.197.637"/>'
  },
  tags: ["thumb", "down", "toggle"]
};
var thumbUpIcon = {
  name: "thumb-up",
  content: '<path d="M22.579 7.286a2.23 2.23 0 0 0-1.669-.753h-5.873V4.71A3.847 3.847 0 0 0 11.19.863a.61.61 0 0 0-.544.336L6.764 8.963H2.28A1.416 1.416 0 0 0 .863 10.38v8.91a1.416 1.416 0 0 0 1.417 1.417h17.416a2.23 2.23 0 0 0 2.21-1.951l1.214-9.72a2.23 2.23 0 0 0-.541-1.751zM2.077 19.29v-8.91a.204.204 0 0 1 .203-.203h4.253v9.316H2.28a.204.204 0 0 1-.203-.203M21.914 8.886l-1.214 9.72a1.013 1.013 0 0 1-1.004.887H7.748V9.714l3.806-7.61a2.63 2.63 0 0 1 2.27 2.607v2.43a.607.607 0 0 0 .607.607h6.48a1.013 1.013 0 0 1 1.005 1.138z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M22.733 7.152a2.44 2.44 0 0 0-1.823-.822h-5.67V4.71A4.05 4.05 0 0 0 11.19.66a.82.82 0 0 0-.725.448L6.64 8.76H2.28a1.62 1.62 0 0 0-1.62 1.62v8.91a1.62 1.62 0 0 0 1.62 1.62h17.416a2.43 2.43 0 0 0 2.412-2.126l1.214-9.72a2.44 2.44 0 0 0-.589-1.912M2.28 10.38h4.05v8.91H2.28z"/>',
    "outline": '<path d="M22.579 7.286a2.23 2.23 0 0 0-1.669-.753h-5.873V4.71A3.847 3.847 0 0 0 11.19.863a.61.61 0 0 0-.544.336L6.764 8.963H2.28A1.416 1.416 0 0 0 .863 10.38v8.91a1.416 1.416 0 0 0 1.417 1.417h17.416a2.23 2.23 0 0 0 2.21-1.951l1.214-9.72a2.23 2.23 0 0 0-.541-1.751zM2.077 19.29v-8.91a.204.204 0 0 1 .203-.203h4.253v9.316H2.28a.204.204 0 0 1-.203-.203M21.914 8.886l-1.214 9.72a1.013 1.013 0 0 1-1.004.887H7.748V9.714l3.806-7.61a2.63 2.63 0 0 1 2.27 2.607v2.43a.607.607 0 0 0 .607.607h6.48a1.013 1.013 0 0 1 1.005 1.138z"/>',
    "duotone": '<path d="M7.14 9.57V20.1H2.28a.81.81 0 0 1-.81-.81v-8.91a.81.81 0 0 1 .81-.81z" opacity="0.2"/><path d="M22.733 7.152a2.44 2.44 0 0 0-1.823-.822h-5.67V4.71A4.05 4.05 0 0 0 11.19.66a.82.82 0 0 0-.725.448L6.64 8.76H2.28a1.62 1.62 0 0 0-1.62 1.62v8.91a1.62 1.62 0 0 0 1.62 1.62h17.416a2.43 2.43 0 0 0 2.412-2.126l1.214-9.72a2.44 2.44 0 0 0-.589-1.912M2.28 10.38h4.05v8.91H2.28zm19.434-1.519-1.214 9.72a.81.81 0 0 1-.804.709H7.95V9.761l3.716-7.435a2.43 2.43 0 0 1 1.954 2.383v2.43a.81.81 0 0 0 .81.81h6.48a.81.81 0 0 1 .804.911z"/>'
  },
  tags: ["thumb", "up", "toggle"]
};
var trashIcon = {
  name: "trash",
  content: '<path d="M20.91 4.103h-4.253V3.09A2.227 2.227 0 0 0 14.43.863H9.57A2.227 2.227 0 0 0 7.343 3.09v1.013H3.09a.608.608 0 0 0 0 1.215h1.013v14.783a1.416 1.416 0 0 0 1.417 1.417h12.96a1.416 1.416 0 0 0 1.417-1.417V5.318h1.013a.608.608 0 0 0 0-1.215M8.557 3.09A1.013 1.013 0 0 1 9.57 2.077h4.86a1.013 1.013 0 0 1 1.013 1.013v1.013H8.557zM18.683 20.1a.204.204 0 0 1-.203.203H5.52a.204.204 0 0 1-.203-.203V5.317h13.366zM10.177 9.57v6.48a.607.607 0 0 1-1.214 0V9.57a.607.607 0 0 1 1.214 0m4.86 0v6.48a.607.607 0 0 1-1.214 0V9.57a.607.607 0 0 1 1.214 0"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M20.91 3.9h-4.05v-.81A2.43 2.43 0 0 0 14.43.66H9.57a2.43 2.43 0 0 0-2.43 2.43v.81H3.09a.81.81 0 0 0 0 1.62h.81V20.1a1.62 1.62 0 0 0 1.62 1.62h12.96a1.62 1.62 0 0 0 1.62-1.62V5.52h.81a.81.81 0 0 0 0-1.62M10.38 16.05a.81.81 0 0 1-1.62 0V9.57a.81.81 0 0 1 1.62 0zm4.86 0a.81.81 0 0 1-1.62 0V9.57a.81.81 0 0 1 1.62 0zm0-12.15H8.76v-.81a.81.81 0 0 1 .81-.81h4.86a.81.81 0 0 1 .81.81z"/>',
    "outline": '<path d="M20.91 4.103h-4.253V3.09A2.227 2.227 0 0 0 14.43.863H9.57A2.227 2.227 0 0 0 7.343 3.09v1.013H3.09a.608.608 0 0 0 0 1.215h1.013v14.783a1.416 1.416 0 0 0 1.417 1.417h12.96a1.416 1.416 0 0 0 1.417-1.417V5.318h1.013a.608.608 0 0 0 0-1.215M8.557 3.09A1.013 1.013 0 0 1 9.57 2.077h4.86a1.013 1.013 0 0 1 1.013 1.013v1.013H8.557zM18.683 20.1a.204.204 0 0 1-.203.203H5.52a.204.204 0 0 1-.203-.203V5.317h13.366zM10.177 9.57v6.48a.607.607 0 0 1-1.214 0V9.57a.607.607 0 0 1 1.214 0m4.86 0v6.48a.607.607 0 0 1-1.214 0V9.57a.607.607 0 0 1 1.214 0"/>',
    "duotone": '<path d="M19.29 4.71V20.1a.81.81 0 0 1-.81.81H5.52a.81.81 0 0 1-.81-.81V4.71z" opacity="0.2"/><path d="M20.91 3.9h-4.05v-.81A2.43 2.43 0 0 0 14.43.66H9.57a2.43 2.43 0 0 0-2.43 2.43v.81H3.09a.81.81 0 0 0 0 1.62h.81V20.1a1.62 1.62 0 0 0 1.62 1.62h12.96a1.62 1.62 0 0 0 1.62-1.62V5.52h.81a.81.81 0 0 0 0-1.62M8.76 3.09a.81.81 0 0 1 .81-.81h4.86a.81.81 0 0 1 .81.81v.81H8.76zm9.72 17.01H5.52V5.52h12.96zm-8.1-10.53v6.48a.81.81 0 0 1-1.62 0V9.57a.81.81 0 0 1 1.62 0m4.86 0v6.48a.81.81 0 0 1-1.62 0V9.57a.81.81 0 0 1 1.62 0"/>'
  },
  tags: ["garbage", "remove", "delete", "destroy", "recycle", "recycling"]
};
var undoIcon = {
  name: "undo",
  content: '<path d="M21.517 12a9.516 9.516 0 0 1-9.39 9.517H12a9.46 9.46 0 0 1-6.53-2.597.607.607 0 1 1 .834-.883 8.303 8.303 0 1 0-.177-11.91l-.019.019-3.074 2.816H6.33a.607.607 0 0 1 0 1.214H1.47a.607.607 0 0 1-.607-.607v-4.86a.608.608 0 0 1 1.215 0v3.476l3.203-2.93a9.517 9.517 0 0 1 16.237 6.743z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M21.72 12a9.72 9.72 0 0 1-9.589 9.72H12a9.66 9.66 0 0 1-6.672-2.653.81.81 0 0 1 1.114-1.177 8.1 8.1 0 1 0-.17-11.622l-.026.025-1.067.977L6.9 8.99a.81.81 0 0 1-.57 1.389H1.47a.81.81 0 0 1-.81-.81v-4.86a.81.81 0 0 1 1.384-.577l1.989 1.994 1.108-1.013a9.72 9.72 0 0 1 16.579 6.886z"/>',
    "outline": '<path d="M21.517 12a9.516 9.516 0 0 1-9.39 9.517H12a9.46 9.46 0 0 1-6.53-2.597.607.607 0 1 1 .834-.883 8.303 8.303 0 1 0-.177-11.91l-.019.019-3.074 2.816H6.33a.607.607 0 0 1 0 1.214H1.47a.607.607 0 0 1-.607-.607v-4.86a.608.608 0 0 1 1.215 0v3.476l3.203-2.93a9.517 9.517 0 0 1 16.237 6.743z"/>',
    "duotone": '<path d="M20.91 12A8.91 8.91 0 1 1 12 3.09 8.91 8.91 0 0 1 20.91 12" opacity="0.2"/><path d="M21.72 12a9.72 9.72 0 0 1-9.589 9.72H12a9.66 9.66 0 0 1-6.672-2.653.81.81 0 0 1 1.114-1.177 8.1 8.1 0 1 0-.17-11.622l-.026.025-2.692 2.466H6.33a.81.81 0 0 1 0 1.62H1.47a.81.81 0 0 1-.81-.81v-4.86a.81.81 0 0 1 1.62 0v3.017l2.861-2.613a9.72 9.72 0 0 1 16.579 6.886z"/>'
  },
  tags: ["undo", "actions", "revert", "back"]
};
var unlockIcon = {
  name: "unlock",
  content: '<path d="M20.1 7.343H8.557V4.71A3.444 3.444 0 0 1 12 1.267c1.65 0 3.139 1.183 3.455 2.753a.607.607 0 0 0 1.19-.241C16.207 1.619 14.253.052 12 .052a4.663 4.663 0 0 0-4.657 4.657v2.633H3.9a1.416 1.416 0 0 0-1.417 1.417v11.34A1.416 1.416 0 0 0 3.9 21.516h16.2a1.416 1.416 0 0 0 1.417-1.417V8.759A1.416 1.416 0 0 0 20.1 7.342zm.203 12.757a.204.204 0 0 1-.203.203H3.9a.204.204 0 0 1-.203-.203V8.76a.204.204 0 0 1 .203-.203h16.2a.204.204 0 0 1 .203.203zm-7.29-5.67A1.013 1.013 0 1 1 12 13.417a1.013 1.013 0 0 1 1.013 1.013"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M20.1 7.14H8.76V4.71A3.24 3.24 0 0 1 12 1.47c1.556 0 2.957 1.114 3.256 2.591a.81.81 0 0 0 1.587-.322C16.386 1.485 14.348-.15 11.999-.15a4.865 4.865 0 0 0-4.86 4.86v2.43h-3.24a1.62 1.62 0 0 0-1.62 1.62V20.1a1.62 1.62 0 0 0 1.62 1.62h16.2a1.62 1.62 0 0 0 1.62-1.62V8.76a1.62 1.62 0 0 0-1.62-1.62zM12 15.646a1.216 1.216 0 1 1 1.214-1.216A1.216 1.216 0 0 1 12 15.646"/>',
    "outline": '<path d="M20.1 7.343H8.557V4.71A3.444 3.444 0 0 1 12 1.267c1.65 0 3.139 1.183 3.455 2.753a.607.607 0 0 0 1.19-.241C16.207 1.619 14.253.052 12 .052a4.663 4.663 0 0 0-4.657 4.657v2.633H3.9a1.416 1.416 0 0 0-1.417 1.417v11.34A1.416 1.416 0 0 0 3.9 21.516h16.2a1.416 1.416 0 0 0 1.417-1.417V8.759A1.416 1.416 0 0 0 20.1 7.342zm.203 12.757a.204.204 0 0 1-.203.203H3.9a.204.204 0 0 1-.203-.203V8.76a.204.204 0 0 1 .203-.203h16.2a.204.204 0 0 1 .203.203zm-7.29-5.67A1.013 1.013 0 1 1 12 13.417a1.013 1.013 0 0 1 1.013 1.013"/>',
    "duotone": '<path d="M20.91 8.76V20.1a.81.81 0 0 1-.81.81H3.9a.81.81 0 0 1-.81-.81V8.76a.81.81 0 0 1 .81-.81h16.2a.81.81 0 0 1 .81.81" opacity="0.2"/><path d="M20.1 7.14H8.76V4.71A3.24 3.24 0 0 1 12 1.47c1.556 0 2.957 1.114 3.256 2.591a.81.81 0 0 0 1.587-.322C16.386 1.485 14.348-.15 11.999-.15a4.865 4.865 0 0 0-4.86 4.86v2.43h-3.24a1.62 1.62 0 0 0-1.62 1.62V20.1a1.62 1.62 0 0 0 1.62 1.62h16.2a1.62 1.62 0 0 0 1.62-1.62V8.76a1.62 1.62 0 0 0-1.62-1.62zm0 12.96H3.9V8.76h16.2zm-6.886-5.67A1.216 1.216 0 1 1 12 13.216a1.216 1.216 0 0 1 1.214 1.215z"/>'
  },
  tags: ["unlock", "actions", "open", "public"]
};
var unpinIcon = {
  name: "unpin",
  content: '<path d="M4.35 2.686a.607.607 0 0 0-.899.81l2.806 3.088c-.961.151-2.093.556-3.245 1.486a1.416 1.416 0 0 0-.114 2.108l5.033 5.033-4.461 4.456a.607.607 0 1 0 .86.858l4.46-4.461 5.033 5.038a1.42 1.42 0 0 0 1.002.416h.101a1.42 1.42 0 0 0 1.032-.56 8.6 8.6 0 0 0 1.26-2.312l2.43 2.678a.607.607 0 1 0 .897-.818zm10.637 17.538a.204.204 0 0 1-.304.02L3.757 9.319a.204.204 0 0 1 .018-.303C5.109 7.938 6.391 7.71 7.297 7.729l8.956 9.852c-.22 1.076-.799 2.021-1.267 2.643zm7.737-10.796-4.52 4.534a.607.607 0 1 1-.86-.858l4.52-4.535a.204.204 0 0 0 0-.288L15.72 2.137a.204.204 0 0 0-.287 0L11.26 6.324a.607.607 0 0 1-.861-.858l4.175-4.188a1.416 1.416 0 0 1 2.005 0l6.145 6.145a1.416 1.416 0 0 1 0 2.004z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="m22.867 9.57-4.821 4.837a.41.41 0 0 1-.587-.014L9.974 6.154a.41.41 0 0 1 .014-.558l4.442-4.462a1.62 1.62 0 0 1 2.291 0l6.145 6.144a1.62 1.62 0 0 1 .001 2.291zM4.5 2.545a.81.81 0 0 0-1.216.022.83.83 0 0 0 .038 1.088l2.534 2.791c-.917.197-1.936.63-2.969 1.467a1.62 1.62 0 0 0-.131 2.407l4.889 4.89-4.298 4.296a.83.83 0 0 0-.061 1.123.81.81 0 0 0 1.185.043l4.317-4.318 4.888 4.888a1.62 1.62 0 0 0 1.146.477h.114a1.6 1.6 0 0 0 1.179-.641 9 9 0 0 0 1.178-2.045l2.205 2.425a.81.81 0 1 0 1.198-1.089z"/>',
    "outline": '<path d="M4.35 2.686a.607.607 0 0 0-.899.81l2.806 3.088c-.961.151-2.093.556-3.245 1.486a1.416 1.416 0 0 0-.114 2.108l5.033 5.033-4.461 4.456a.607.607 0 1 0 .86.858l4.46-4.461 5.033 5.038a1.42 1.42 0 0 0 1.002.416h.101a1.42 1.42 0 0 0 1.032-.56 8.6 8.6 0 0 0 1.26-2.312l2.43 2.678a.607.607 0 1 0 .897-.818zm10.637 17.538a.204.204 0 0 1-.304.02L3.757 9.319a.204.204 0 0 1 .018-.303C5.109 7.938 6.391 7.71 7.297 7.729l8.956 9.852c-.22 1.076-.799 2.021-1.267 2.643zm7.737-10.796-4.52 4.534a.607.607 0 1 1-.86-.858l4.52-4.535a.204.204 0 0 0 0-.288L15.72 2.137a.204.204 0 0 0-.287 0L11.26 6.324a.607.607 0 0 1-.861-.858l4.175-4.188a1.416 1.416 0 0 1 2.005 0l6.145 6.145a1.416 1.416 0 0 1 0 2.004z"/>',
    "duotone": '<path d="m22.294 8.996-5.799 5.818c1.16 2.322-.174 4.643-1.023 5.771a.81.81 0 0 1-1.215.084L3.329 9.746a.81.81 0 0 1 .067-1.206c3.002-2.422 5.812-1.013 5.812-1.012l5.798-5.818a.81.81 0 0 1 1.145 0l6.144 6.137a.81.81 0 0 1 0 1.148z" opacity="0.2"/><path d="M4.5 2.545a.81.81 0 1 0-1.199 1.09l2.561 2.816a7.1 7.1 0 0 0-2.974 1.462 1.62 1.62 0 0 0-.13 2.407l4.888 4.89-4.318 4.316a.81.81 0 0 0 1.146 1.146l4.316-4.318 4.889 4.888a1.62 1.62 0 0 0 1.146.477h.114a1.6 1.6 0 0 0 1.178-.641 9.1 9.1 0 0 0 1.173-2.052l2.211 2.43a.81.81 0 1 0 1.199-1.09zM14.826 20.1 3.901 9.173c1.036-.835 2.147-1.252 3.307-1.242l8.825 9.708c-.226 1-.768 1.877-1.207 2.461m8.041-10.53-4.52 4.535a.81.81 0 1 1-1.147-1.144l4.52-4.535-6.144-6.146-4.174 4.187a.81.81 0 0 1-1.147-1.144l4.175-4.188a1.62 1.62 0 0 1 2.291 0l6.145 6.144a1.62 1.62 0 0 1 0 2.291z"/>'
  },
  tags: ["unpin", "maps"]
};
var unstickIcon = {
  name: "unstick",
  content: '<path fill-rule="evenodd" d="m23.039 12.9-2.551 2.323-3.009-3.304 2.55-2.323a.21.21 0 0 1 .297.013l2.727 2.995a.2.2 0 0 1 .055.151.21.21 0 0 1-.069.145m-3.438 3.131-1.971 1.795.808.888 5.409-4.927a1.41 1.41 0 0 0 .093-1.991l-2.727-2.995a1.41 1.41 0 0 0-1.992-.092l-5.404 4.922.807.888 1.968-1.792zM15.948 5.115l-2.551 2.323-3.01-3.304 2.551-2.323a.207.207 0 0 1 .296.014l2.728 2.994a.21.21 0 0 1 .055.151.21.21 0 0 1-.069.145m.808.887a1.41 1.41 0 0 0 .093-1.991l-2.728-2.995A1.41 1.41 0 0 0 12.13.924L6.733 5.84l.807.888L9.5 4.942l3.01 3.304-1.963 1.789.807.888zM3.449 4.009l.022.026 15.956 17.55.03.035a.6.6 0 0 1-.918.772l-1.906-2.096c-3.533 2.613-8.564 2.27-11.618-1.033a8.68 8.68 0 0 1-2.306-6.28 8.7 8.7 0 0 1 2.275-5.502l-2.645-2.91a.6.6 0 1 1 .888-.806zm2.346 4.365a7.513 7.513 0 0 0-1.434 7.566 7.5 7.5 0 0 0 1.535 2.508c2.595 2.806 6.872 3.139 9.925.955l-3.043-3.348a3.03 3.03 0 0 1-3.933-4.326zm3.778 4.897a1.8 1.8 0 0 1 .13-.598l2.217 2.438a1.836 1.836 0 0 1-1.872-.523 1.84 1.84 0 0 1-.475-1.317" clip-rule="evenodd"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path fill-rule="evenodd" d="m24.095 11.655-2.727-2.994a1.62 1.62 0 0 0-2.289-.107l-4.39 3.999 4.904 5.394 4.395-4.004a1.62 1.62 0 0 0 .107-2.288M7.606 4.761l4.904 5.394 4.387-3.996a1.62 1.62 0 0 0 .107-2.289L14.277.876a1.62 1.62 0 0 0-2.289-.107zm15.291 7.985-2.994 2.727-2.727-2.994 2.994-2.728zm-7.091-7.785-2.994 2.727-2.727-2.994 2.994-2.727zM4.048 3.255l-.039-.047-.257-.282a.81.81 0 0 0-1.197 1.09l2.661 2.927a8.91 8.91 0 0 0-.402 12.413l.046.05c3.226 3.489 8.685 3.777 12.335.715l1.56 1.715a.808.808 0 0 0 1.233-1.047l-.036-.043zm5.735 10.026c.016-.341.139-.666.348-.93l2.151 2.365a1.617 1.617 0 0 1-2.499-1.435" clip-rule="evenodd"/>',
    "outline": '<path fill-rule="evenodd" d="m23.039 12.9-2.551 2.323-3.009-3.304 2.55-2.323a.21.21 0 0 1 .297.013l2.727 2.995a.2.2 0 0 1 .055.151.21.21 0 0 1-.069.145m-3.438 3.131-1.971 1.795.808.888 5.409-4.927a1.41 1.41 0 0 0 .093-1.991l-2.727-2.995a1.41 1.41 0 0 0-1.992-.092l-5.404 4.922.807.888 1.968-1.792zM15.948 5.115l-2.551 2.323-3.01-3.304 2.551-2.323a.207.207 0 0 1 .296.014l2.728 2.994a.21.21 0 0 1 .055.151.21.21 0 0 1-.069.145m.808.887a1.41 1.41 0 0 0 .093-1.991l-2.728-2.995A1.41 1.41 0 0 0 12.13.924L6.733 5.84l.807.888L9.5 4.942l3.01 3.304-1.963 1.789.807.888zM3.449 4.009l.022.026 15.956 17.55.03.035a.6.6 0 0 1-.918.772l-1.906-2.096c-3.533 2.613-8.564 2.27-11.618-1.033a8.68 8.68 0 0 1-2.306-6.28 8.7 8.7 0 0 1 2.275-5.502l-2.645-2.91a.6.6 0 1 1 .888-.806zm2.346 4.365a7.513 7.513 0 0 0-1.434 7.566 7.5 7.5 0 0 0 1.535 2.508c2.595 2.806 6.872 3.139 9.925.955l-3.043-3.348a3.03 3.03 0 0 1-3.933-4.326zm3.778 4.897a1.8 1.8 0 0 1 .13-.598l2.217 2.438a1.836 1.836 0 0 1-1.872-.523 1.84 1.84 0 0 1-.475-1.317" clip-rule="evenodd"/>',
    "duotone": '<g opacity="0.2"><path d="M12.533 1.367a.81.81 0 0 1 1.144.053l2.728 2.994a.813.813 0 0 1-.054 1.144l-2.994 2.728-3.818-4.192zM19.624 9.151a.813.813 0 0 1 1.144.054l2.728 2.994a.81.81 0 0 1-.054 1.144l-2.994 2.727-3.818-4.191z"/></g><path fill-rule="evenodd" d="m23.039 12.9-2.551 2.323-3.009-3.304 2.55-2.323a.21.21 0 0 1 .297.013l2.727 2.995a.2.2 0 0 1 .055.151.21.21 0 0 1-.069.145m-3.438 3.131-1.971 1.795.808.888 5.409-4.927a1.41 1.41 0 0 0 .093-1.991l-2.727-2.995a1.41 1.41 0 0 0-1.992-.092l-5.404 4.922.807.888 1.968-1.792zM15.948 5.115l-2.551 2.323-3.01-3.304 2.551-2.323a.207.207 0 0 1 .296.014l2.728 2.994a.21.21 0 0 1 .055.151.21.21 0 0 1-.069.145m.808.887a1.41 1.41 0 0 0 .093-1.991l-2.728-2.995A1.41 1.41 0 0 0 12.13.924L6.733 5.84l.807.888L9.5 4.942l3.01 3.304-1.963 1.789.807.888zM3.449 4.009l.022.026 15.956 17.55.03.035a.6.6 0 0 1-.918.772l-1.906-2.096c-3.533 2.613-8.564 2.27-11.618-1.033a8.68 8.68 0 0 1-2.306-6.28 8.7 8.7 0 0 1 2.275-5.502l-2.645-2.91a.6.6 0 1 1 .888-.806zm2.346 4.365a7.513 7.513 0 0 0-1.434 7.566 7.5 7.5 0 0 0 1.535 2.508c2.595 2.806 6.872 3.139 9.925.955l-3.043-3.348a3.03 3.03 0 0 1-3.933-4.326zm3.778 4.897a1.8 1.8 0 0 1 .13-.598l2.217 2.438a1.836 1.836 0 0 1-1.872-.523 1.84 1.84 0 0 1-.475-1.317" clip-rule="evenodd"/>'
  },
  tags: ["unstick", "actions"]
};
var uploadIcon = {
  name: "upload",
  content: '<path d="M23.137 12.81v6.48a1.416 1.416 0 0 1-1.417 1.417H2.28A1.416 1.416 0 0 1 .863 19.29v-6.48a1.416 1.416 0 0 1 1.417-1.417h4.86a.608.608 0 0 1 0 1.215H2.28a.204.204 0 0 0-.203.203v6.48a.204.204 0 0 0 .203.203h19.44a.204.204 0 0 0 .203-.203v-6.48a.204.204 0 0 0-.203-.203h-4.86a.607.607 0 0 1 0-1.214h4.86a1.416 1.416 0 0 1 1.417 1.417zM7.568 6.76l3.824-3.822V12a.608.608 0 0 0 1.215 0V2.938L16.43 6.76a.607.607 0 0 0 .86-.86l-4.86-4.86a.607.607 0 0 0-.86 0L6.71 5.9a.607.607 0 0 0 .86.86zm11.519 9.29a1.013 1.013 0 1 0-1.013 1.013 1.013 1.013 0 0 0 1.013-1.013"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M6.566 6.904a.81.81 0 0 1 0-1.146l4.86-4.86a.81.81 0 0 1 1.146 0l4.86 4.86a.81.81 0 0 1-1.146 1.146L12.81 3.426v8.575a.81.81 0 0 1-1.62 0V3.426L7.714 6.904a.81.81 0 0 1-1.146 0zM23.34 12.81v6.48a1.62 1.62 0 0 1-1.62 1.62H2.28a1.62 1.62 0 0 1-1.62-1.62v-6.48a1.62 1.62 0 0 1 1.62-1.62h6.884a.41.41 0 0 1 .406.406v.35c0 1.362 1.114 2.51 2.477 2.485a2.43 2.43 0 0 0 2.383-2.43v-.405a.41.41 0 0 1 .406-.406h6.885a1.62 1.62 0 0 1 1.62 1.62zm-4.05 3.24a1.216 1.216 0 1 0-1.214 1.214 1.216 1.216 0 0 0 1.214-1.214"/>',
    "outline": '<path d="M23.137 12.81v6.48a1.416 1.416 0 0 1-1.417 1.417H2.28A1.416 1.416 0 0 1 .863 19.29v-6.48a1.416 1.416 0 0 1 1.417-1.417h4.86a.608.608 0 0 1 0 1.215H2.28a.204.204 0 0 0-.203.203v6.48a.204.204 0 0 0 .203.203h19.44a.204.204 0 0 0 .203-.203v-6.48a.204.204 0 0 0-.203-.203h-4.86a.607.607 0 0 1 0-1.214h4.86a1.416 1.416 0 0 1 1.417 1.417zM7.568 6.76l3.824-3.822V12a.608.608 0 0 0 1.215 0V2.938L16.43 6.76a.607.607 0 0 0 .86-.86l-4.86-4.86a.607.607 0 0 0-.86 0L6.71 5.9a.607.607 0 0 0 .86.86zm11.519 9.29a1.013 1.013 0 1 0-1.013 1.013 1.013 1.013 0 0 0 1.013-1.013"/>',
    "duotone": '<path d="M22.53 12.81v6.48a.81.81 0 0 1-.81.81H2.28a.81.81 0 0 1-.81-.81v-6.48a.81.81 0 0 1 .81-.81h19.44a.81.81 0 0 1 .81.81" opacity="0.2"/><path d="M23.34 12.81v6.48a1.62 1.62 0 0 1-1.62 1.62H2.28a1.62 1.62 0 0 1-1.62-1.62v-6.48a1.62 1.62 0 0 1 1.62-1.62h4.86a.81.81 0 0 1 0 1.62H2.28v6.48h19.44v-6.48h-4.86a.81.81 0 0 1 0-1.62h4.86a1.62 1.62 0 0 1 1.62 1.62M7.714 6.904l3.476-3.478v8.575a.81.81 0 0 0 1.62 0V3.426l3.476 3.478a.81.81 0 0 0 1.146-1.146l-4.86-4.86a.81.81 0 0 0-1.146 0l-4.86 4.86a.81.81 0 0 0 1.146 1.146zM19.29 16.05a1.216 1.216 0 1 0-1.214 1.214 1.216 1.216 0 0 0 1.214-1.214"/>'
  },
  tags: ["saved", "saving", "archived", "archiving", "archival", "uploaded", "uploading", "hard drive", "disk"]
};
var userIcon = {
  name: "user",
  content: '<path d="M22.246 20.606c-1.601-2.766-4.114-4.708-7.035-5.53a7.087 7.087 0 1 0-6.423 0c-2.92.822-5.434 2.764-7.035 5.53a.607.607 0 1 0 1.051.608c1.945-3.36 5.382-5.366 9.195-5.367s7.249 2.005 9.194 5.367a.607.607 0 1 0 1.051-.608zM6.127 8.76A5.873 5.873 0 1 1 12 14.633 5.88 5.88 0 0 1 6.127 8.76"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M22.422 21.316a.82.82 0 0 1-.702.404H2.28a.81.81 0 0 1-.701-1.214c1.542-2.666 3.918-4.578 6.691-5.484a7.29 7.29 0 1 1 7.458 0c2.773.906 5.149 2.818 6.692 5.484a.82.82 0 0 1 .001.81z"/>',
    "outline": '<path d="M22.246 20.606c-1.601-2.766-4.114-4.708-7.035-5.53a7.087 7.087 0 1 0-6.423 0c-2.92.822-5.434 2.764-7.035 5.53a.607.607 0 1 0 1.051.608c1.945-3.36 5.382-5.366 9.195-5.367s7.249 2.005 9.194 5.367a.607.607 0 1 0 1.051-.608zM6.127 8.76A5.873 5.873 0 1 1 12 14.633 5.88 5.88 0 0 1 6.127 8.76"/>',
    "duotone": '<path d="M18.48 8.76A6.48 6.48 0 1 1 12 2.28a6.48 6.48 0 0 1 6.48 6.48" opacity="0.2"/><path d="M22.421 20.506c-1.542-2.666-3.918-4.578-6.691-5.484a7.29 7.29 0 1 0-7.458 0c-2.773.905-5.149 2.816-6.692 5.484a.81.81 0 1 0 1.403.81c1.908-3.296 5.279-5.264 9.018-5.265s7.111 1.968 9.018 5.265a.81.81 0 1 0 1.403-.81zM6.33 8.76A5.67 5.67 0 1 1 12 14.43a5.676 5.676 0 0 1-5.67-5.67"/>'
  },
  tags: ["person", "users", "profile", "account", "contact", "login"]
};
var warningTriangleIcon = {
  name: "warning-triangle",
  content: '<path d="M22.841 18.185 13.986 2.808a2.304 2.304 0 0 0-3.971 0L1.16 18.185a2.18 2.18 0 0 0 0 2.199 2.27 2.27 0 0 0 1.986 1.133h17.709a2.27 2.27 0 0 0 1.985-1.133 2.18 2.18 0 0 0 .002-2.199zm-1.054 1.591a1.06 1.06 0 0 1-.932.527H3.146a1.06 1.06 0 0 1-.932-.527.96.96 0 0 1 0-.984l8.855-15.377a1.088 1.088 0 0 1 1.865 0l8.854 15.377a.96.96 0 0 1-.001.984M11.393 13.62V9.57a.608.608 0 0 1 1.215 0v4.05a.607.607 0 0 1-1.214 0zm1.62 3.644A1.013 1.013 0 1 1 12 16.252a1.013 1.013 0 0 1 1.013 1.012"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M23.016 18.084 14.161 2.707a2.508 2.508 0 0 0-4.323 0L.983 18.084a2.38 2.38 0 0 0 0 2.401 2.47 2.47 0 0 0 2.161 1.235h17.708a2.47 2.47 0 0 0 2.16-1.235 2.38 2.38 0 0 0 .003-2.401zM11.19 9.57a.81.81 0 0 1 1.62 0v4.05a.81.81 0 0 1-1.62 0zm.81 8.91a1.216 1.216 0 1 1 1.214-1.214A1.216 1.216 0 0 1 12 18.48"/>',
    "outline": '<path d="M22.841 18.185 13.986 2.808a2.304 2.304 0 0 0-3.971 0L1.16 18.185a2.18 2.18 0 0 0 0 2.199 2.27 2.27 0 0 0 1.986 1.133h17.709a2.27 2.27 0 0 0 1.985-1.133 2.18 2.18 0 0 0 .002-2.199zm-1.054 1.591a1.06 1.06 0 0 1-.932.527H3.146a1.06 1.06 0 0 1-.932-.527.96.96 0 0 1 0-.984l8.855-15.377a1.088 1.088 0 0 1 1.865 0l8.854 15.377a.96.96 0 0 1-.001.984M11.393 13.62V9.57a.608.608 0 0 1 1.215 0v4.05a.607.607 0 0 1-1.214 0zm1.62 3.644A1.013 1.013 0 1 1 12 16.252a1.013 1.013 0 0 1 1.013 1.012"/>',
    "duotone": '<path d="M20.855 20.91H3.144c-1.278 0-2.08-1.338-1.459-2.42L10.54 3.113c.638-1.114 2.28-1.114 2.918 0l8.855 15.377c.62 1.084-.181 2.42-1.459 2.42z" opacity="0.2"/><path d="M23.016 18.084 14.161 2.707a2.508 2.508 0 0 0-4.323 0L.983 18.084a2.38 2.38 0 0 0 0 2.401 2.47 2.47 0 0 0 2.161 1.235h17.708a2.47 2.47 0 0 0 2.16-1.235 2.38 2.38 0 0 0 .003-2.401zm-1.404 1.591a.86.86 0 0 1-.757.425H3.146a.86.86 0 0 1-.757-.425.77.77 0 0 1 0-.781l8.855-15.377a.886.886 0 0 1 1.519 0l8.855 15.377a.77.77 0 0 1-.004.781zM11.19 13.62V9.57a.81.81 0 0 1 1.62 0v4.05a.81.81 0 0 1-1.62 0m2.026 3.644a1.216 1.216 0 1 1-1.215-1.214 1.216 1.216 0 0 1 1.215 1.216z"/>'
  },
  tags: ["warning", "triangle", "alerts", "notifications", "alert", "caution", "danger"]
};
var windowMinimizeIcon = {
  name: "window-minimize",
  content: '<path d="M21.517 12a.607.607 0 0 1-.607.607H3.09a.608.608 0 0 1 0-1.215h17.82a.607.607 0 0 1 .607.607z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M20.1 2.28H3.9A1.62 1.62 0 0 0 2.28 3.9v16.2a1.62 1.62 0 0 0 1.62 1.62h16.2a1.62 1.62 0 0 0 1.62-1.62V3.9a1.62 1.62 0 0 0-1.62-1.62m-2.43 10.53H6.33a.81.81 0 0 1 0-1.62h11.34a.81.81 0 0 1 0 1.62"/>',
    "outline": '<path d="M21.517 12a.607.607 0 0 1-.607.607H3.09a.608.608 0 0 1 0-1.215h17.82a.607.607 0 0 1 .607.607z"/>',
    "duotone": '<path d="M20.91 4.71v14.58a1.62 1.62 0 0 1-1.62 1.62H4.71a1.62 1.62 0 0 1-1.62-1.62V4.71a1.62 1.62 0 0 1 1.62-1.62h14.58a1.62 1.62 0 0 1 1.62 1.62" opacity="0.2"/><path d="M21.72 12a.81.81 0 0 1-.81.81H3.09a.81.81 0 0 1 0-1.62h17.82a.81.81 0 0 1 .81.81"/>'
  },
  tags: ["window", "minimize", "actions", "app", "panel", "frame"]
};
var windowRestoreIcon = {
  name: "window-restore",
  content: '<path d="M16.2 12.6H3v6.9a.3.3 0 0 0 .3.3h12.6a.3.3 0 0 0 .3-.3zm4.8 3.3V9h-2.1a.6.6 0 0 1 0-1.2H21V5.7a.3.3 0 0 0-.3-.3H8.1a.3.3 0 0 0-.3.3v.563a.6.6 0 0 1-1.2 0V5.7a1.5 1.5 0 0 1 1.5-1.5h12.6a1.5 1.5 0 0 1 1.5 1.5v10.2a1.5 1.5 0 0 1-1.5 1.5h-1.8a.6.6 0 0 1 0-1.2h1.8a.3.3 0 0 0 .3-.3m-4.8-6.6a.3.3 0 0 0-.3-.3H3.3a.3.3 0 0 0-.3.3v2.1h13.2zm1.2 10.2a1.5 1.5 0 0 1-1.5 1.5H3.3a1.5 1.5 0 0 1-1.5-1.5V9.3a1.5 1.5 0 0 1 1.5-1.5h12.6a1.5 1.5 0 0 1 1.5 1.5z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M16.8 19.5V12H2.4v7.5a.9.9 0 0 0 .9.9h12.6a.9.9 0 0 0 .9-.9"/><path d="M15.99 12.81H3.21v6.69c0 .05.04.09.09.09h12.6c.05 0 .09-.04.09-.09zm4.8 3.09V9.21H18.9a.81.81 0 0 1 0-1.62h1.89V5.7a.09.09 0 0 0-.09-.09H8.1a.09.09 0 0 0-.09.09v.563a.81.81 0 0 1-1.62 0V5.7c0-.944.766-1.71 1.71-1.71h12.6c.944 0 1.71.766 1.71 1.71v10.2a1.71 1.71 0 0 1-1.71 1.71h-1.8a.81.81 0 0 1 0-1.62h1.8c.05 0 .09-.04.09-.09m-4.8-6.6a.09.09 0 0 0-.09-.09H3.3a.09.09 0 0 0-.09.09v1.89h12.78zm1.62 10.2a1.71 1.71 0 0 1-1.71 1.71H3.3a1.71 1.71 0 0 1-1.71-1.71V9.3c0-.944.766-1.71 1.71-1.71h12.6c.944 0 1.71.766 1.71 1.71z"/>',
    "outline": '<path d="M16.2 12.6H3v6.9a.3.3 0 0 0 .3.3h12.6a.3.3 0 0 0 .3-.3zm4.8 3.3V9h-2.1a.6.6 0 0 1 0-1.2H21V5.7a.3.3 0 0 0-.3-.3H8.1a.3.3 0 0 0-.3.3v.563a.6.6 0 0 1-1.2 0V5.7a1.5 1.5 0 0 1 1.5-1.5h12.6a1.5 1.5 0 0 1 1.5 1.5v10.2a1.5 1.5 0 0 1-1.5 1.5h-1.8a.6.6 0 0 1 0-1.2h1.8a.3.3 0 0 0 .3-.3m-4.8-6.6a.3.3 0 0 0-.3-.3H3.3a.3.3 0 0 0-.3.3v2.1h13.2zm1.2 10.2a1.5 1.5 0 0 1-1.5 1.5H3.3a1.5 1.5 0 0 1-1.5-1.5V9.3a1.5 1.5 0 0 1 1.5-1.5h12.6a1.5 1.5 0 0 1 1.5 1.5z"/>',
    "duotone": '<path fill-opacity="0.2" d="M3.3 8.4h12.6a.9.9 0 0 1 .9.9V12H2.4V9.3a.9.9 0 0 1 .9-.9M8.1 4.8h12.6a.9.9 0 0 1 .9.9v2.7H7.2V5.7a.9.9 0 0 1 .9-.9"/><path d="M16.2 12.6H3v6.9a.3.3 0 0 0 .3.3h12.6a.3.3 0 0 0 .3-.3zm4.8 3.3V9h-2.1a.6.6 0 0 1 0-1.2H21V5.7a.3.3 0 0 0-.3-.3H8.1a.3.3 0 0 0-.3.3v.563a.6.6 0 0 1-1.2 0V5.7a1.5 1.5 0 0 1 1.5-1.5h12.6a1.5 1.5 0 0 1 1.5 1.5v10.2a1.5 1.5 0 0 1-1.5 1.5h-1.8a.6.6 0 0 1 0-1.2h1.8a.3.3 0 0 0 .3-.3m-4.8-6.6a.3.3 0 0 0-.3-.3H3.3a.3.3 0 0 0-.3.3v2.1h13.2zm1.2 10.2a1.5 1.5 0 0 1-1.5 1.5H3.3a1.5 1.5 0 0 1-1.5-1.5V9.3a1.5 1.5 0 0 1 1.5-1.5h12.6a1.5 1.5 0 0 1 1.5 1.5z"/>'
  },
  tags: ["window", "restore", "actions", "app", "panel", "frame"]
};
var windowIcon = {
  name: "window",
  content: '<path d="M20.91 3.293H3.09A1.416 1.416 0 0 0 1.673 4.71v14.58a1.416 1.416 0 0 0 1.417 1.417h17.82a1.416 1.416 0 0 0 1.417-1.417V4.71a1.416 1.416 0 0 0-1.417-1.417m.203 15.997a.204.204 0 0 1-.203.203H3.09a.204.204 0 0 1-.203-.203V4.71a.204.204 0 0 1 .203-.203h17.82a.204.204 0 0 1 .203.203zM6.937 7.546a1.013 1.013 0 1 1-1.013-1.013 1.013 1.013 0 0 1 1.013 1.013m4.05 0a1.013 1.013 0 1 1-1.013-1.013 1.013 1.013 0 0 1 1.013 1.013"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M20.91 3.09H3.09a1.62 1.62 0 0 0-1.62 1.62v14.58a1.62 1.62 0 0 0 1.62 1.62h17.82a1.62 1.62 0 0 0 1.62-1.62V4.71a1.62 1.62 0 0 0-1.62-1.62M5.924 8.76a1.216 1.216 0 1 1 1.215-1.216A1.216 1.216 0 0 1 5.924 8.76m4.05 0a1.216 1.216 0 1 1 1.215-1.216A1.216 1.216 0 0 1 9.974 8.76"/>',
    "outline": '<path d="M20.91 3.293H3.09A1.416 1.416 0 0 0 1.673 4.71v14.58a1.416 1.416 0 0 0 1.417 1.417h17.82a1.416 1.416 0 0 0 1.417-1.417V4.71a1.416 1.416 0 0 0-1.417-1.417m.203 15.997a.204.204 0 0 1-.203.203H3.09a.204.204 0 0 1-.203-.203V4.71a.204.204 0 0 1 .203-.203h17.82a.204.204 0 0 1 .203.203zM6.937 7.546a1.013 1.013 0 1 1-1.013-1.013 1.013 1.013 0 0 1 1.013 1.013m4.05 0a1.013 1.013 0 1 1-1.013-1.013 1.013 1.013 0 0 1 1.013 1.013"/>',
    "duotone": '<path d="M21.72 4.71v14.58a.81.81 0 0 1-.81.81H3.09a.81.81 0 0 1-.81-.81V4.71a.81.81 0 0 1 .81-.81h17.82a.81.81 0 0 1 .81.81" opacity="0.2"/><path d="M20.91 3.09H3.09a1.62 1.62 0 0 0-1.62 1.62v14.58a1.62 1.62 0 0 0 1.62 1.62h17.82a1.62 1.62 0 0 0 1.62-1.62V4.71a1.62 1.62 0 0 0-1.62-1.62m0 16.2H3.09V4.71h17.82zM7.14 7.546A1.216 1.216 0 1 1 5.926 6.33 1.216 1.216 0 0 1 7.14 7.546m4.05 0A1.216 1.216 0 1 1 9.976 6.33a1.216 1.216 0 0 1 1.214 1.216"/>'
  },
  tags: ["window", "actions", "app", "panel", "frame"]
};
var xCircleIcon = {
  name: "x-circle",
  content: '<path d="M15.67 9.19 12.859 12l2.811 2.81a.607.607 0 1 1-.86.86L12 12.859 9.19 15.67a.607.607 0 0 1-.86-.86L11.141 12 8.33 9.19a.607.607 0 0 1 .858-.86l2.811 2.811 2.81-2.811a.607.607 0 0 1 .859.86zM22.327 12A10.327 10.327 0 1 1 12 1.673 10.34 10.34 0 0 1 22.327 12m-1.214 0A9.113 9.113 0 1 0 12 21.113 9.12 9.12 0 0 0 21.113 12"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M12 1.47A10.53 10.53 0 1 0 22.53 12 10.54 10.54 0 0 0 12 1.47m3.814 13.196a.81.81 0 0 1-1.146 1.146l-2.667-2.667-2.666 2.667a.81.81 0 0 1-1.146-1.146L10.856 12 8.189 9.334a.81.81 0 0 1 1.146-1.146l2.666 2.667 2.667-2.667a.81.81 0 0 1 1.146 1.146L13.146 12z"/>',
    "outline": '<path d="M15.67 9.19 12.859 12l2.811 2.81a.607.607 0 1 1-.86.86L12 12.859 9.19 15.67a.607.607 0 0 1-.86-.86L11.141 12 8.33 9.19a.607.607 0 0 1 .858-.86l2.811 2.811 2.81-2.811a.607.607 0 0 1 .859.86zM22.327 12A10.327 10.327 0 1 1 12 1.673 10.34 10.34 0 0 1 22.327 12m-1.214 0A9.113 9.113 0 1 0 12 21.113 9.12 9.12 0 0 0 21.113 12"/>',
    "duotone": '<path d="M21.72 12A9.72 9.72 0 1 1 12 2.28 9.72 9.72 0 0 1 21.72 12" opacity="0.2"/><path d="M15.814 9.334 13.146 12l2.668 2.666a.81.81 0 0 1-1.146 1.146l-2.667-2.667-2.666 2.667a.81.81 0 0 1-1.146-1.146L10.856 12 8.189 9.334a.81.81 0 0 1 1.146-1.146l2.666 2.667 2.667-2.667a.81.81 0 0 1 1.146 1.146M22.53 12A10.53 10.53 0 1 1 12 1.47 10.54 10.54 0 0 1 22.53 12m-1.62 0A8.91 8.91 0 1 0 12 20.91 8.92 8.92 0 0 0 20.91 12"/>'
  },
  tags: ["closed", "cancelled", "dismissed", "round"]
};
var xIcon = {
  name: "x",
  content: '<path d="M19.72 18.86a.607.607 0 1 1-.858.858l-6.861-6.859-6.86 6.859a.607.607 0 0 1-.859-.858L11.141 12 4.282 5.14a.607.607 0 0 1 .859-.86l6.86 6.86 6.861-6.86a.607.607 0 0 1 .858.86L12.86 12z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M20.1 2.28H3.9A1.62 1.62 0 0 0 2.28 3.9v16.2a1.62 1.62 0 0 0 1.62 1.62h16.2a1.62 1.62 0 0 0 1.62-1.62V3.9a1.62 1.62 0 0 0-1.62-1.62m-2.666 14.006a.81.81 0 0 1-1.146 1.146l-4.287-4.287-4.286 4.287a.81.81 0 0 1-1.146-1.146L10.856 12 6.569 7.714a.81.81 0 0 1 1.146-1.146l4.286 4.287 4.287-4.287a.81.81 0 0 1 1.146 1.146L13.146 12z"/>',
    "outline": '<path d="M19.72 18.86a.607.607 0 1 1-.858.858l-6.861-6.859-6.86 6.859a.607.607 0 0 1-.859-.858L11.141 12 4.282 5.14a.607.607 0 0 1 .859-.86l6.86 6.86 6.861-6.86a.607.607 0 0 1 .858.86L12.86 12z"/>',
    "duotone": '<path d="M20.91 4.71v14.58a1.62 1.62 0 0 1-1.62 1.62H4.71a1.62 1.62 0 0 1-1.62-1.62V4.71a1.62 1.62 0 0 1 1.62-1.62h14.58a1.62 1.62 0 0 1 1.62 1.62" opacity="0.2"/><path d="M19.864 18.716a.81.81 0 0 1-1.146 1.146l-6.717-6.717-6.716 6.717a.81.81 0 0 1-1.146-1.146L10.856 12 4.139 5.284a.81.81 0 0 1 1.146-1.146l6.716 6.717 6.717-6.717a.81.81 0 0 1 1.146 1.146L13.146 12z"/>'
  },
  tags: ["\xD7", "closed", "cancelled", "dismissed", "times", "multiply", "mulitplication", "product", "mathematics", "arithmetic", "calculator"]
};
var zoomSparkleIcon = {
  name: "zoom-sparkle",
  content: '<path d="M17.88 10.38a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0m1.2 0a8.7 8.7 0 0 1-8.7 8.7 8.7 8.7 0 0 1-8.7-8.7 8.7 8.7 0 0 1 8.7-8.7 8.7 8.7 0 0 1 8.7 8.7"/><path d="M15.684 15.684a.6.6 0 0 1 .848 0l5.612 5.612a.6.6 0 0 1-.848.848l-5.612-5.612a.6.6 0 0 1 0-.848M11.255 7.093a.9.9 0 0 1 .406.094l.12.071.109.089a1 1 0 0 1 .17.221l.059.127.725 1.97 1.973.728a.9.9 0 0 1 .349.229l.088.109.071.12a.92.92 0 0 1-.507 1.269l-1.972.727-.727 1.971a.92.92 0 0 1-.864.602.92.92 0 0 1-.863-.601l-.728-1.973-1.97-.726a.918.918 0 0 1-.437-1.389l.089-.109a.9.9 0 0 1 .348-.229l1.97-.728.728-1.97.058-.127a.9.9 0 0 1 .279-.31l.121-.071a.9.9 0 0 1 .405-.094m-.56 3.248a.6.6 0 0 1-.355.356l-1.521.56 1.521.56.116.058c.109.07.194.174.239.298l.56 1.519.56-1.519.059-.117a.6.6 0 0 1 .298-.239l1.518-.56-1.518-.56a.6.6 0 0 1-.357-.356l-.56-1.521zM7.692 5.88c.331 0 .6.27.6.601v.612h.611a.6.6 0 1 1 0 1.2h-.611v.612a.6.6 0 1 1-1.2 0v-.612H6.48a.6.6 0 0 1 0-1.2h.612v-.612a.6.6 0 0 1 .6-.601"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M15.835 15.835a.81.81 0 0 1 1.146 0l5.612 5.612a.811.811 0 0 1-1.146 1.146l-5.612-5.612a.81.81 0 0 1 0-1.146"/><path d="M10.68 1.98a8.7 8.7 0 0 1 8.7 8.7 8.7 8.7 0 0 1-8.7 8.7 8.7 8.7 0 0 1-8.7-8.7 8.7 8.7 0 0 1 8.7-8.7m.875 5.413a.9.9 0 0 0-.405.094l-.121.071a.9.9 0 0 0-.279.31l-.058.127-.728 1.97-1.97.728a.9.9 0 0 0-.348.229l-.089.109a.92.92 0 0 0 0 1.052c.107.154.26.272.437.337l1.97.726.728 1.972a.92.92 0 0 0 .863.602.92.92 0 0 0 .864-.601l.727-1.972 1.971-.727a.93.93 0 0 0 .437-.337.93.93 0 0 0 .071-.932l-.071-.12-.088-.109a.9.9 0 0 0-.348-.229l-1.974-.728-.725-1.97-.059-.127a1 1 0 0 0-.17-.221l-.109-.089-.12-.071a.9.9 0 0 0-.406-.094m.56 3.248a.6.6 0 0 0 .357.356l1.518.56-1.518.56a.6.6 0 0 0-.298.239l-.059.117-.56 1.519-.56-1.519a.6.6 0 0 0-.239-.298l-.116-.058-1.521-.56 1.521-.56a.6.6 0 0 0 .355-.356l.56-1.521zm-4.123-4.46a.6.6 0 0 0-.6.6v.612H6.78a.6.6 0 0 0 0 1.2h.612v.612a.6.6 0 1 0 1.2 0v-.612h.611a.6.6 0 1 0 0-1.2h-.611v-.612a.6.6 0 0 0-.6-.6"/>',
    "outline": '<path d="M17.88 10.38a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0m1.2 0a8.7 8.7 0 0 1-8.7 8.7 8.7 8.7 0 0 1-8.7-8.7 8.7 8.7 0 0 1 8.7-8.7 8.7 8.7 0 0 1 8.7 8.7"/><path d="M15.684 15.684a.6.6 0 0 1 .848 0l5.612 5.612a.6.6 0 0 1-.848.848l-5.612-5.612a.6.6 0 0 1 0-.848M11.255 7.093a.9.9 0 0 1 .406.094l.12.071.109.089a1 1 0 0 1 .17.221l.059.127.725 1.97 1.973.728a.9.9 0 0 1 .349.229l.088.109.071.12a.92.92 0 0 1-.507 1.269l-1.972.727-.727 1.971a.92.92 0 0 1-.864.602.92.92 0 0 1-.863-.601l-.728-1.973-1.97-.726a.918.918 0 0 1-.437-1.389l.089-.109a.9.9 0 0 1 .348-.229l1.97-.728.728-1.97.058-.127a.9.9 0 0 1 .279-.31l.121-.071a.9.9 0 0 1 .405-.094m-.56 3.248a.6.6 0 0 1-.355.356l-1.521.56 1.521.56.116.058c.109.07.194.174.239.298l.56 1.519.56-1.519.059-.117a.6.6 0 0 1 .298-.239l1.518-.56-1.518-.56a.6.6 0 0 1-.357-.356l-.56-1.521zM7.692 5.88c.331 0 .6.27.6.601v.612h.611a.6.6 0 1 1 0 1.2h-.611v.612a.6.6 0 1 1-1.2 0v-.612H6.48a.6.6 0 0 1 0-1.2h.612v-.612a.6.6 0 0 1 .6-.601"/>',
    "duotone": '<path fill-opacity="0.2" d="M10.38 18.48a8.1 8.1 0 1 0 0-16.2 8.1 8.1 0 0 0 0 16.2"/><path d="M17.88 10.38a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0m1.2 0a8.7 8.7 0 0 1-8.7 8.7 8.7 8.7 0 0 1-8.7-8.7 8.7 8.7 0 0 1 8.7-8.7 8.7 8.7 0 0 1 8.7 8.7"/><path d="M15.684 15.684a.6.6 0 0 1 .848 0l5.612 5.612a.6.6 0 0 1-.848.848l-5.612-5.612a.6.6 0 0 1 0-.848M11.256 7.093c.141 0 .279.032.405.094l.121.071.109.089a1 1 0 0 1 .17.221l.058.127.726 1.97 1.972.728a.9.9 0 0 1 .349.229l.088.109.071.12a.92.92 0 0 1-.507 1.269l-1.972.727-.727 1.971a.923.923 0 0 1-1.39.437.9.9 0 0 1-.337-.436l-.728-1.973-1.97-.726a.93.93 0 0 1-.437-.337.93.93 0 0 1 0-1.052l.089-.109a.9.9 0 0 1 .348-.229l1.97-.728.728-1.97.058-.127a.9.9 0 0 1 .279-.31l.121-.071a.9.9 0 0 1 .406-.094m-.561 3.248a.6.6 0 0 1-.355.356l-1.521.56 1.521.56.116.058c.109.07.194.174.239.298l.561 1.519.56-1.519.058-.117a.6.6 0 0 1 .298-.239l1.519-.56-1.519-.56a.6.6 0 0 1-.356-.356l-.56-1.521zM7.692 5.881c.331.001.6.269.6.6v.612h.612a.6.6 0 0 1 0 1.2h-.612v.612a.601.601 0 0 1-1.2 0v-.612H6.48a.6.6 0 0 1 0-1.2h.612v-.612a.6.6 0 0 1 .6-.6"/>'
  },
  tags: ["zoom", "sparkle", "actions", "magnify", "scale"]
};
var tableIcon = {
  name: "table",
  content: '<path d="M21.12 5.618a.3.3 0 0 0-.3-.3H3.18a.3.3 0 0 0-.3.3v12.78a.3.3 0 0 0 .3.3h17.64a.3.3 0 0 0 .3-.3zm1.2 12.78a1.5 1.5 0 0 1-1.5 1.5H3.18a1.5 1.5 0 0 1-1.5-1.5V5.618a1.5 1.5 0 0 1 1.5-1.5h17.64a1.5 1.5 0 0 1 1.5 1.5z"/><path fill-rule="evenodd" d="M9.36 8.978h5.28v-4.26h1.2v4.26h5.881v1.2H15.84v3.659h5.881v1.2H15.84v4.261h-1.2v-4.261H9.36v4.261h-1.2v-4.261H2.28v-1.2h5.88v-3.659H2.28v-1.2h5.88v-4.26h1.2zm0 4.859h5.28v-3.659H9.36z" clip-rule="evenodd"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M8.161 15.037v4.261H3.18a.9.9 0 0 1-.9-.9v-3.361zM14.64 15.037v4.261H9.361v-4.261zM21.72 18.398a.9.9 0 0 1-.9.9h-4.98v-4.261h5.88zM21.72 13.837h-5.88v-3.659h5.88zM8.161 10.178v3.659H2.28v-3.659zM14.64 10.178v3.659H9.361v-3.659zM20.82 4.718a.9.9 0 0 1 .9.9v3.36h-5.88v-4.26zM8.161 8.978H2.28v-3.36a.9.9 0 0 1 .9-.9h4.981zM14.64 8.978H9.361v-4.26h5.279z"/>',
    "outline": '<path d="M21.12 5.618a.3.3 0 0 0-.3-.3H3.18a.3.3 0 0 0-.3.3v12.78a.3.3 0 0 0 .3.3h17.64a.3.3 0 0 0 .3-.3zm1.2 12.78a1.5 1.5 0 0 1-1.5 1.5H3.18a1.5 1.5 0 0 1-1.5-1.5V5.618a1.5 1.5 0 0 1 1.5-1.5h17.64a1.5 1.5 0 0 1 1.5 1.5z"/><path fill-rule="evenodd" d="M9.36 8.978h5.28v-4.26h1.2v4.26h5.881v1.2H15.84v3.659h5.881v1.2H15.84v4.261h-1.2v-4.261H9.36v4.261h-1.2v-4.261H2.28v-1.2h5.88v-3.659H2.28v-1.2h5.88v-4.26h1.2zm0 4.859h5.28v-3.659H9.36z" clip-rule="evenodd"/>',
    "duotone": '<rect width="16.2" height="12.15" x="3.9" y="5.932" fill-opacity="0.2" rx="0.75"/><path d="M20.821 4.118a1.5 1.5 0 0 1 1.5 1.5v12.78a1.5 1.5 0 0 1-1.5 1.5H3.18a1.5 1.5 0 0 1-1.5-1.5V5.618a1.5 1.5 0 0 1 1.5-1.5zM2.88 18.398a.3.3 0 0 0 .3.3h4.98v-3.661H2.88zm6.48.3h5.28v-3.661H9.36zm6.48 0h4.981a.3.3 0 0 0 .3-.3v-3.361H15.84zM2.88 13.837h5.28v-3.659H2.88zm6.48 0h5.28v-3.659H9.36zm6.48 0h5.281v-3.659H15.84zM3.18 5.318a.3.3 0 0 0-.3.3v3.36h5.28v-3.66zm6.18 3.66h5.28v-3.66H9.36zm6.48 0h5.281v-3.36a.3.3 0 0 0-.3-.3H15.84z"/>'
  },
  tags: ["tables", "tabular", "spreadsheets", "excel", "grid", "form"]
};
var tableWizardIcon = {
  name: "table-wizard",
  content: '<path d="M14.776 15.394a.933.933 0 0 1 1.319 0l5.648 5.648a.933.933 0 0 1 0 1.319l-.839.837a.93.93 0 0 1-1.317 0l-5.649-5.648a.93.93 0 0 1 0-1.317zm-.637 4.775c.223 0 .405.182.405.406v.807h.806a.406.406 0 0 1 0 .811h-.806v.805a.405.405 0 0 1-.811 0v-.805h-.806a.405.405 0 0 1 0-.811h.806v-.807c0-.224.182-.406.406-.406m2.614-1.522 3.494 3.493.438-.438-3.494-3.493zm4.158-14.342c.778.001 1.41.632 1.41 1.41v4.05a.6.6 0 0 1-.6.6H9.361v9.121a.6.6 0 0 1-.6.6H3.09a1.41 1.41 0 0 1-1.41-1.411V5.715a1.41 1.41 0 0 1 1.41-1.41zM2.88 18.675a.21.21 0 0 0 .21.211h5.071v-3.661H2.88zm9.634-6.986c.28 0 .507.227.507.507v1.402h1.402a.507.507 0 0 1 0 1.013h-1.402v1.404a.507.507 0 0 1-1.013 0v-1.404h-1.404a.507.507 0 0 1 0-1.013h1.404v-1.402c0-.28.227-.507.506-.507m8.295 1.1c.224 0 .405.182.405.405v.505h.506a.406.406 0 0 1 0 .811h-.506v.506a.406.406 0 0 1-.811 0v-.506h-.506a.406.406 0 0 1 0-.811h.506v-.505c0-.224.182-.405.406-.405M2.88 14.025h5.281v-3.66H2.88zm.21-8.52a.21.21 0 0 0-.21.21v3.45h5.281v-3.66zm6.271 3.66h5.279v-3.66H9.361zm6.479 0h5.281v-3.45a.21.21 0 0 0-.21-.21H15.84z"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M14.776 15.394a.933.933 0 0 1 1.319 0l5.648 5.648a.933.933 0 0 1 0 1.319l-.839.837a.93.93 0 0 1-1.317 0l-5.649-5.648a.93.93 0 0 1 0-1.317zm-.637 4.775c.223 0 .405.182.405.406v.807h.806a.406.406 0 0 1 0 .811h-.806v.805a.405.405 0 0 1-.811 0v-.805h-.806a.405.405 0 0 1 0-.811h.806v-.807c0-.224.182-.406.406-.406m2.614-1.522 3.494 3.493.438-.438-3.494-3.493zm-8.592.651H3.18a.9.9 0 0 1-.9-.9v-3.361h5.881zm4.353-7.609c.28 0 .507.227.507.507v1.402h1.402a.507.507 0 0 1 0 1.013h-1.402v1.404a.507.507 0 0 1-1.013 0v-1.404h-1.404a.507.507 0 0 1 0-1.013h1.404v-1.402c0-.28.227-.507.506-.507m8.295 1.1c.224 0 .405.182.405.405v.505h.506a.406.406 0 0 1 0 .811h-.506v.506a.406.406 0 0 1-.811 0v-.506h-.506a.406.406 0 0 1 0-.811h.506v-.505c0-.224.182-.405.406-.405M8.161 13.837H2.28v-3.659h5.881zm0-4.859H2.28v-3.36a.9.9 0 0 1 .9-.9h4.981zm6.479 0H9.361v-4.26h5.279zm6.181-4.26a.9.9 0 0 1 .9.9v3.36H15.84v-4.26z"/>',
    "outline": '<path d="M14.776 15.394a.933.933 0 0 1 1.319 0l5.648 5.648a.933.933 0 0 1 0 1.319l-.839.837a.93.93 0 0 1-1.317 0l-5.649-5.648a.93.93 0 0 1 0-1.317zm-.637 4.775c.223 0 .405.182.405.406v.807h.806a.406.406 0 0 1 0 .811h-.806v.805a.405.405 0 0 1-.811 0v-.805h-.806a.405.405 0 0 1 0-.811h.806v-.807c0-.224.182-.406.406-.406m2.614-1.522 3.494 3.493.438-.438-3.494-3.493zm4.158-14.342c.778.001 1.41.632 1.41 1.41v4.05a.6.6 0 0 1-.6.6H9.361v9.121a.6.6 0 0 1-.6.6H3.09a1.41 1.41 0 0 1-1.41-1.411V5.715a1.41 1.41 0 0 1 1.41-1.41zM2.88 18.675a.21.21 0 0 0 .21.211h5.071v-3.661H2.88zm9.634-6.986c.28 0 .507.227.507.507v1.402h1.402a.507.507 0 0 1 0 1.013h-1.402v1.404a.507.507 0 0 1-1.013 0v-1.404h-1.404a.507.507 0 0 1 0-1.013h1.404v-1.402c0-.28.227-.507.506-.507m8.295 1.1c.224 0 .405.182.405.405v.505h.506a.406.406 0 0 1 0 .811h-.506v.506a.406.406 0 0 1-.811 0v-.506h-.506a.406.406 0 0 1 0-.811h.506v-.505c0-.224.182-.405.406-.405M2.88 14.025h5.281v-3.66H2.88zm.21-8.52a.21.21 0 0 0-.21.21v3.45h5.281v-3.66zm6.271 3.66h5.279v-3.66H9.361zm6.479 0h5.281v-3.45a.21.21 0 0 0-.21-.21H15.84z"/>',
    "duotone": '<path fill-opacity="0.2" d="M3.09 4.905h17.82a.81.81 0 0 1 .81.81v4.05H8.76v9.72H3.09a.81.81 0 0 1-.81-.81V5.715a.81.81 0 0 1 .81-.81"/><path d="M14.776 15.394a.933.933 0 0 1 1.319 0l5.648 5.648a.933.933 0 0 1 0 1.319l-.839.837a.93.93 0 0 1-1.317 0l-5.649-5.648a.93.93 0 0 1 0-1.317zm-.637 4.775c.223 0 .405.182.405.406v.807h.806a.406.406 0 0 1 0 .811h-.806v.805a.405.405 0 0 1-.811 0v-.805h-.806a.405.405 0 0 1 0-.811h.806v-.807c0-.224.182-.406.406-.406m2.614-1.522 3.494 3.493.438-.438-3.494-3.493zm4.158-14.342c.778.001 1.41.632 1.41 1.41v4.05a.6.6 0 0 1-.6.6H9.361v9.121a.6.6 0 0 1-.6.6H3.09a1.41 1.41 0 0 1-1.41-1.411V5.715a1.41 1.41 0 0 1 1.41-1.41zM2.88 18.675a.21.21 0 0 0 .21.211h5.071v-3.661H2.88zm9.634-6.986c.28 0 .507.227.507.507v1.402h1.402a.507.507 0 0 1 0 1.013h-1.402v1.404a.507.507 0 0 1-1.013 0v-1.404h-1.404a.507.507 0 0 1 0-1.013h1.404v-1.402c0-.28.227-.507.506-.507m8.295 1.1c.224 0 .405.182.405.405v.505h.506a.406.406 0 0 1 0 .811h-.506v.506a.406.406 0 0 1-.811 0v-.506h-.506a.406.406 0 0 1 0-.811h.506v-.505c0-.224.182-.405.406-.405M2.88 14.025h5.281v-3.66H2.88zm.21-8.52a.21.21 0 0 0-.21.21v3.45h5.281v-3.66zm6.271 3.66h5.279v-3.66H9.361zm6.479 0h5.281v-3.45a.21.21 0 0 0-.21-.21H15.84z"/>'
  },
  tags: ["table", "wizard", "editing", "grid", "spreadsheet", "data"]
};
var fileConfigIcon = {
  name: "file-config",
  content: '<path fill-rule="evenodd" d="m14.43 1.68.118.012a.6.6 0 0 1-.118-.012" clip-rule="evenodd"/><path d="M13.131 14.213a1.127 1.127 0 1 0-2.254 0 1.127 1.127 0 0 0 2.254 0m1.2 0c0 .209-.031.411-.083.604l.674.39a.6.6 0 1 1-.6 1.038l-.672-.388a2.3 2.3 0 0 1-1.047.604v.777a.6.6 0 0 1-1.2 0v-.777a2.3 2.3 0 0 1-1.049-.604l-.67.388a.599.599 0 1 1-.6-1.038l.672-.389a2.4 2.4 0 0 1-.081-.605 2.4 2.4 0 0 1 .081-.603l-.672-.388a.601.601 0 0 1 .6-1.04l.67.387a2.3 2.3 0 0 1 1.049-.603v-.776a.6.6 0 1 1 1.2 0v.776c.402.107.762.317 1.047.603l.672-.387a.6.6 0 1 1 .6 1.04l-.674.388c.052.192.083.394.083.603"/><path fill-rule="evenodd" d="m20.7 7.938-.001-.018zM14.43 1.68l.118.012a.6.6 0 0 1 .307.164l5.669 5.669a.597.597 0 0 1 .175.395l.001.018V20.91a1.408 1.408 0 0 1-1.41 1.41H4.71a1.41 1.41 0 0 1-1.41-1.41V3.09a1.41 1.41 0 0 1 1.41-1.41zm.6 5.669V3.728l3.622 3.621zM19.5 20.91V8.549h-5.07a.6.6 0 0 1-.6-.6V2.88H4.71a.207.207 0 0 0-.21.21v17.82a.21.21 0 0 0 .21.21h14.58a.209.209 0 0 0 .21-.21" clip-rule="evenodd"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path fill-rule="evenodd" d="m14.43 1.679.118.012a.6.6 0 0 1-.118-.012M20.7 7.938l-.001-.019zM20.7 7.938l-.001-.019zc0 .002 0-.005 0 0" clip-rule="evenodd"/><path fill-rule="evenodd" d="m14.548 1.691-.118-.012H4.71a1.407 1.407 0 0 0-1.41 1.41V20.91a1.412 1.412 0 0 0 1.41 1.41h14.58a1.41 1.41 0 0 0 1.41-1.41V7.938l-.001-.019a.6.6 0 0 0-.175-.394l-5.669-5.67a.6.6 0 0 0-.307-.164m.482 2.036v3.622h3.622zm-.782 11.089c.052-.193.083-.395.083-.603 0-.209-.031-.411-.083-.604l.674-.388a.6.6 0 1 0-.6-1.039l-.672.386a2.3 2.3 0 0 0-1.047-.603v-.776a.6.6 0 0 0-1.2 0v.776a2.3 2.3 0 0 0-1.049.603l-.67-.386a.6.6 0 0 0-.6 1.039l.672.388q-.078.29-.081.604c0 .209.03.411.081.604l-.672.389a.6.6 0 0 0 .6 1.039l.67-.388c.286.286.646.496 1.049.603v.777a.6.6 0 0 0 1.2 0v-.777a2.3 2.3 0 0 0 1.047-.603l.672.388a.6.6 0 1 0 .6-1.039z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12.003 13.085a1.128 1.128 0 1 1 0 2.256 1.128 1.128 0 0 1 0-2.256" clip-rule="evenodd"/>',
    "outline": '<path fill-rule="evenodd" d="m14.43 1.68.118.012a.6.6 0 0 1-.118-.012" clip-rule="evenodd"/><path d="M13.131 14.213a1.127 1.127 0 1 0-2.254 0 1.127 1.127 0 0 0 2.254 0m1.2 0c0 .209-.031.411-.083.604l.674.39a.6.6 0 1 1-.6 1.038l-.672-.388a2.3 2.3 0 0 1-1.047.604v.777a.6.6 0 0 1-1.2 0v-.777a2.3 2.3 0 0 1-1.049-.604l-.67.388a.599.599 0 1 1-.6-1.038l.672-.389a2.4 2.4 0 0 1-.081-.605 2.4 2.4 0 0 1 .081-.603l-.672-.388a.601.601 0 0 1 .6-1.04l.67.387a2.3 2.3 0 0 1 1.049-.603v-.776a.6.6 0 1 1 1.2 0v.776c.402.107.762.317 1.047.603l.672-.387a.6.6 0 1 1 .6 1.04l-.674.388c.052.192.083.394.083.603"/><path fill-rule="evenodd" d="m20.7 7.938-.001-.018zM14.43 1.68l.118.012a.6.6 0 0 1 .307.164l5.669 5.669a.597.597 0 0 1 .175.395l.001.018V20.91a1.408 1.408 0 0 1-1.41 1.41H4.71a1.41 1.41 0 0 1-1.41-1.41V3.09a1.41 1.41 0 0 1 1.41-1.41zm.6 5.669V3.728l3.622 3.621zM19.5 20.91V8.549h-5.07a.6.6 0 0 1-.6-.6V2.88H4.71a.207.207 0 0 0-.21.21v17.82a.21.21 0 0 0 .21.21h14.58a.209.209 0 0 0 .21-.21" clip-rule="evenodd"/>',
    "duotone": '<path fill-opacity="0.2" d="M19.29 21.72H4.71a.81.81 0 0 1-.81-.81V3.09a.81.81 0 0 1 .81-.81h9.347c.239 0 .468.095.637.263l5.142 5.143a.9.9 0 0 1 .264.637V20.91a.81.81 0 0 1-.81.81"/><path fill-rule="evenodd" d="m14.43 1.68.118.012a.6.6 0 0 1-.118-.012" clip-rule="evenodd"/><path d="M13.131 14.213a1.127 1.127 0 1 0-2.254 0 1.127 1.127 0 0 0 2.254 0m1.2 0c0 .209-.031.411-.083.604l.674.39a.6.6 0 1 1-.6 1.038l-.672-.388a2.3 2.3 0 0 1-1.047.604v.777a.6.6 0 0 1-1.2 0v-.777a2.3 2.3 0 0 1-1.049-.604l-.67.388a.599.599 0 1 1-.6-1.038l.672-.389a2.4 2.4 0 0 1-.081-.605 2.4 2.4 0 0 1 .081-.603l-.672-.388a.601.601 0 0 1 .6-1.04l.67.387a2.3 2.3 0 0 1 1.049-.603v-.776a.6.6 0 1 1 1.2 0v.776c.402.107.762.317 1.047.603l.672-.387a.6.6 0 1 1 .6 1.04l-.674.388c.052.192.083.394.083.603"/><path fill-rule="evenodd" d="m20.7 7.938-.001-.018zM14.43 1.68l.118.012a.6.6 0 0 1 .307.164l5.669 5.669a.597.597 0 0 1 .175.395l.001.018V20.91a1.408 1.408 0 0 1-1.41 1.41H4.71a1.41 1.41 0 0 1-1.41-1.41V3.09a1.41 1.41 0 0 1 1.41-1.41zm.6 5.669V3.728l3.622 3.621zM19.5 20.91V8.549h-5.07a.6.6 0 0 1-.6-.6V2.88H4.71a.207.207 0 0 0-.21.21v17.82a.21.21 0 0 0 .21.21h14.58a.209.209 0 0 0 .21-.21" clip-rule="evenodd"/>'
  },
  tags: ["file", "config", "files-and-folders", "document", "page", "paper"]
};
var filePresentationIcon = {
  name: "file-presentation",
  content: '<path d="M9.552 14.76v-1.152a.6.6 0 0 1 1.2 0v1.152a.6.6 0 1 1-1.2 0M11.089 14.761V12.84a.6.6 0 1 1 1.2 0v1.921a.601.601 0 0 1-1.2 0M12.625 14.76v-2.688a.6.6 0 0 1 1.2 0v2.688a.6.6 0 1 1-1.2 0"/><path fill-rule="evenodd" d="M12.289 9.552V9a.6.6 0 0 0-1.2 0v.552H7.465a.985.985 0 0 0-.984.984v5.76c0 .543.441.984.984.984h1.439l-.757.946a.601.601 0 0 0 .938.749l1.356-1.695h2.495l1.357 1.695a.6.6 0 1 0 .937-.749l-.756-.946h1.439a.985.985 0 0 0 .985-.984v-5.76a.985.985 0 0 0-.985-.984zm-.6 1.2H7.681v5.328h8.017v-5.328h-4.009m-2.137 2.856v1.152a.6.6 0 1 0 1.2 0v-1.152a.6.6 0 1 0-1.2 0m1.537-.768v1.921a.6.6 0 0 0 1.2 0V12.84a.6.6 0 0 0-1.2 0m1.536-.768v2.688a.6.6 0 1 0 1.2 0v-2.688a.6.6 0 1 0-1.2 0M14.548 1.692l-.118-.012q.061 0 .118.012" clip-rule="evenodd"/><path fill-rule="evenodd" d="M15.03 7.349V3.728l3.622 3.621zm-.227-5.539a.6.6 0 0 0-.255-.118l-.118-.012H4.71A1.41 1.41 0 0 0 3.3 3.09v17.82a1.408 1.408 0 0 0 1.41 1.41h14.58a1.41 1.41 0 0 0 1.41-1.41V7.949a.6.6 0 0 0-.176-.424l-5.669-5.669a1 1 0 0 0-.052-.046m-.373 6.739a.6.6 0 0 1-.6-.6V2.88H4.71a.207.207 0 0 0-.21.21v17.82a.21.21 0 0 0 .21.21h14.58a.209.209 0 0 0 .21-.21V8.549z" clip-rule="evenodd"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path fill-rule="evenodd" d="m14.548 1.692-.118-.012q.061 0 .118.012M11.669 10.752h4.029v5.328H7.681v-5.328zM9.552 14.76v-1.152a.6.6 0 0 1 1.2 0v1.152a.6.6 0 1 1-1.2 0m1.537.001V12.84a.6.6 0 1 1 1.2 0v1.921a.601.601 0 0 1-1.2 0m1.536-.001v-2.688a.6.6 0 0 1 1.2 0v2.688a.6.6 0 1 1-1.2 0" clip-rule="evenodd"/><path fill-rule="evenodd" d="m14.548 1.692-.118-.012H4.71A1.41 1.41 0 0 0 3.3 3.09v17.82a1.408 1.408 0 0 0 1.41 1.41h14.58a1.41 1.41 0 0 0 1.41-1.41V7.949a.6.6 0 0 0-.176-.424l-5.669-5.669a.575.575 0 0 0-.307-.164m.482 2.036v3.621h3.622zM12.289 9v.552h3.624c.544 0 .985.441.985.984v5.76a.985.985 0 0 1-.985.984h-1.439l.756.946a.6.6 0 1 1-.937.749l-1.357-1.695h-2.495l-1.356 1.695a.6.6 0 0 1-.938-.749l.757-.946H7.465a.985.985 0 0 1-.984-.984v-5.76c0-.543.441-.984.984-.984h3.624V9a.6.6 0 1 1 1.2 0" clip-rule="evenodd"/>',
    "outline": '<path d="M9.552 14.76v-1.152a.6.6 0 0 1 1.2 0v1.152a.6.6 0 1 1-1.2 0M11.089 14.761V12.84a.6.6 0 1 1 1.2 0v1.921a.601.601 0 0 1-1.2 0M12.625 14.76v-2.688a.6.6 0 0 1 1.2 0v2.688a.6.6 0 1 1-1.2 0"/><path fill-rule="evenodd" d="M12.289 9.552V9a.6.6 0 0 0-1.2 0v.552H7.465a.985.985 0 0 0-.984.984v5.76c0 .543.441.984.984.984h1.439l-.757.946a.601.601 0 0 0 .938.749l1.356-1.695h2.495l1.357 1.695a.6.6 0 1 0 .937-.749l-.756-.946h1.439a.985.985 0 0 0 .985-.984v-5.76a.985.985 0 0 0-.985-.984zm-.6 1.2H7.681v5.328h8.017v-5.328h-4.009m-2.137 2.856v1.152a.6.6 0 1 0 1.2 0v-1.152a.6.6 0 1 0-1.2 0m1.537-.768v1.921a.6.6 0 0 0 1.2 0V12.84a.6.6 0 0 0-1.2 0m1.536-.768v2.688a.6.6 0 1 0 1.2 0v-2.688a.6.6 0 1 0-1.2 0M14.548 1.692l-.118-.012q.061 0 .118.012" clip-rule="evenodd"/><path fill-rule="evenodd" d="M15.03 7.349V3.728l3.622 3.621zm-.227-5.539a.6.6 0 0 0-.255-.118l-.118-.012H4.71A1.41 1.41 0 0 0 3.3 3.09v17.82a1.408 1.408 0 0 0 1.41 1.41h14.58a1.41 1.41 0 0 0 1.41-1.41V7.949a.6.6 0 0 0-.176-.424l-5.669-5.669a1 1 0 0 0-.052-.046m-.373 6.739a.6.6 0 0 1-.6-.6V2.88H4.71a.207.207 0 0 0-.21.21v17.82a.21.21 0 0 0 .21.21h14.58a.209.209 0 0 0 .21-.21V8.549z" clip-rule="evenodd"/>',
    "duotone": '<path fill-opacity="0.2" d="M19.29 21.72H4.71a.81.81 0 0 1-.81-.81V3.09a.81.81 0 0 1 .81-.81h9.347c.239 0 .468.095.637.263l5.142 5.143a.9.9 0 0 1 .264.637V20.91a.81.81 0 0 1-.81.81"/><path d="M9.552 14.76v-1.152a.6.6 0 0 1 1.2 0v1.152a.6.6 0 1 1-1.2 0M11.089 14.761V12.84a.6.6 0 1 1 1.2 0v1.921a.601.601 0 0 1-1.2 0M12.625 14.76v-2.688a.6.6 0 0 1 1.2 0v2.688a.6.6 0 1 1-1.2 0"/><path fill-rule="evenodd" d="M12.289 9.552V9a.6.6 0 0 0-1.2 0v.552H7.465a.985.985 0 0 0-.984.984v5.76c0 .543.441.984.984.984h1.439l-.757.946a.601.601 0 0 0 .938.749l1.356-1.695h2.495l1.357 1.695a.6.6 0 1 0 .937-.749l-.756-.946h1.439a.985.985 0 0 0 .985-.984v-5.76a.985.985 0 0 0-.985-.984zm-.6 1.2H7.681v5.328h8.017v-5.328h-4.009m-2.137 2.856v1.152a.6.6 0 1 0 1.2 0v-1.152a.6.6 0 1 0-1.2 0m1.537-.768v1.921a.6.6 0 0 0 1.2 0V12.84a.6.6 0 0 0-1.2 0m1.536-.768v2.688a.6.6 0 1 0 1.2 0v-2.688a.6.6 0 1 0-1.2 0M14.548 1.692l-.118-.012q.061 0 .118.012" clip-rule="evenodd"/><path fill-rule="evenodd" d="M15.03 7.349V3.728l3.622 3.621zm-.227-5.539a.6.6 0 0 0-.255-.118l-.118-.012H4.71A1.41 1.41 0 0 0 3.3 3.09v17.82a1.408 1.408 0 0 0 1.41 1.41h14.58a1.41 1.41 0 0 0 1.41-1.41V7.949a.6.6 0 0 0-.176-.424l-5.669-5.669a1 1 0 0 0-.052-.046m-.373 6.739a.6.6 0 0 1-.6-.6V2.88H4.71a.207.207 0 0 0-.21.21v17.82a.21.21 0 0 0 .21.21h14.58a.209.209 0 0 0 .21-.21V8.549z" clip-rule="evenodd"/>'
  },
  tags: ["file", "presentation", "files-and-folders", "document", "page", "paper"]
};
var fileDiscImageIcon = {
  name: "file-disc-image",
  content: '<path fill-rule="evenodd" d="m14.548 1.692-.118-.012q.061 0 .118.012" clip-rule="evenodd"/><path d="M12.003 10.632a3.516 3.516 0 1 1 0 7.032 3.516 3.516 0 0 1 0-7.032m1.45 2.913.784.002a2.3 2.3 0 0 0-.229-.556zm-3.766.602a2.314 2.314 0 0 0 4.55.6h-.781a1.573 1.573 0 1 1-.85-2.052l.552-.551a2.3 2.3 0 0 0-1.155-.312 2.316 2.316 0 0 0-2.316 2.315m1.944 0a.372.372 0 1 0 .744.002.372.372 0 0 0-.744-.002"/><path fill-rule="evenodd" d="M15.03 7.349V3.728l3.622 3.621zm-.227-5.539a.6.6 0 0 0-.255-.118l-.118-.012H4.71A1.41 1.41 0 0 0 3.3 3.09v17.82a1.408 1.408 0 0 0 1.41 1.41h14.58a1.41 1.41 0 0 0 1.41-1.41V7.949a.6.6 0 0 0-.176-.424l-5.669-5.669a1 1 0 0 0-.052-.046m-.373 6.739a.6.6 0 0 1-.6-.6V2.88H4.71a.207.207 0 0 0-.21.21v17.82a.21.21 0 0 0 .21.21h14.58a.209.209 0 0 0 .21-.21V8.549zm-2.427 2.083a3.516 3.516 0 1 1 0 7.032 3.516 3.516 0 0 1 0-7.032m-2.316 3.515a2.314 2.314 0 0 0 4.55.6h-.781a1.573 1.573 0 1 1-.85-2.052l.552-.551a2.3 2.3 0 0 0-1.155-.312 2.316 2.316 0 0 0-2.316 2.315m4.55-.6-.784-.002.555-.554q.15.26.229.556m-2.606.6a.372.372 0 1 0 .744.002.372.372 0 0 0-.744-.002" clip-rule="evenodd"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="M11.913 13.459a.76.76 0 0 1 .769.319.75.75 0 1 1-1.315.703.75.75 0 0 1 .546-1.022M13.83 12.098a2.73 2.73 0 0 1 .965 2.325l-1.488-.263a1.24 1.24 0 0 0-.344-.824z"/><path fill-rule="evenodd" d="M14.548 1.691a.6.6 0 0 1 .307.164l5.669 5.67a.6.6 0 0 1 .176.424V20.91a1.412 1.412 0 0 1-1.41 1.41H4.71a1.41 1.41 0 0 1-1.41-1.41V3.089a1.407 1.407 0 0 1 1.41-1.41h9.72zm-.651 9.831a3.236 3.236 0 0 0-4.515.717 3.24 3.24 0 1 0 4.559-.686v-.002l-.021-.015zm1.133-4.173h3.622L15.03 3.728z" clip-rule="evenodd"/>',
    "outline": '<path fill-rule="evenodd" d="m14.548 1.692-.118-.012q.061 0 .118.012" clip-rule="evenodd"/><path d="M12.003 10.632a3.516 3.516 0 1 1 0 7.032 3.516 3.516 0 0 1 0-7.032m1.45 2.913.784.002a2.3 2.3 0 0 0-.229-.556zm-3.766.602a2.314 2.314 0 0 0 4.55.6h-.781a1.573 1.573 0 1 1-.85-2.052l.552-.551a2.3 2.3 0 0 0-1.155-.312 2.316 2.316 0 0 0-2.316 2.315m1.944 0a.372.372 0 1 0 .744.002.372.372 0 0 0-.744-.002"/><path fill-rule="evenodd" d="M15.03 7.349V3.728l3.622 3.621zm-.227-5.539a.6.6 0 0 0-.255-.118l-.118-.012H4.71A1.41 1.41 0 0 0 3.3 3.09v17.82a1.408 1.408 0 0 0 1.41 1.41h14.58a1.41 1.41 0 0 0 1.41-1.41V7.949a.6.6 0 0 0-.176-.424l-5.669-5.669a1 1 0 0 0-.052-.046m-.373 6.739a.6.6 0 0 1-.6-.6V2.88H4.71a.207.207 0 0 0-.21.21v17.82a.21.21 0 0 0 .21.21h14.58a.209.209 0 0 0 .21-.21V8.549zm-2.427 2.083a3.516 3.516 0 1 1 0 7.032 3.516 3.516 0 0 1 0-7.032m-2.316 3.515a2.314 2.314 0 0 0 4.55.6h-.781a1.573 1.573 0 1 1-.85-2.052l.552-.551a2.3 2.3 0 0 0-1.155-.312 2.316 2.316 0 0 0-2.316 2.315m4.55-.6-.784-.002.555-.554q.15.26.229.556m-2.606.6a.372.372 0 1 0 .744.002.372.372 0 0 0-.744-.002" clip-rule="evenodd"/>',
    "duotone": '<path fill-opacity="0.2" d="M19.29 21.72H4.71a.81.81 0 0 1-.81-.81V3.09a.81.81 0 0 1 .81-.81h9.347c.239 0 .468.095.637.263l5.142 5.143a.9.9 0 0 1 .264.637V20.91a.81.81 0 0 1-.81.81"/><path fill-rule="evenodd" d="m14.548 1.692-.118-.012q.061 0 .118.012" clip-rule="evenodd"/><path d="M12.003 10.632a3.516 3.516 0 1 1 0 7.032 3.516 3.516 0 0 1 0-7.032m1.45 2.913.784.002a2.3 2.3 0 0 0-.229-.556zm-3.766.602a2.314 2.314 0 0 0 4.55.6h-.781a1.573 1.573 0 1 1-.85-2.052l.552-.551a2.3 2.3 0 0 0-1.155-.312 2.316 2.316 0 0 0-2.316 2.315m1.944 0a.372.372 0 1 0 .744.002.372.372 0 0 0-.744-.002"/><path fill-rule="evenodd" d="M15.03 7.349V3.728l3.622 3.621zm-.227-5.539a.6.6 0 0 0-.255-.118l-.118-.012H4.71A1.41 1.41 0 0 0 3.3 3.09v17.82a1.408 1.408 0 0 0 1.41 1.41h14.58a1.41 1.41 0 0 0 1.41-1.41V7.949a.6.6 0 0 0-.176-.424l-5.669-5.669a1 1 0 0 0-.052-.046m-.373 6.739a.6.6 0 0 1-.6-.6V2.88H4.71a.207.207 0 0 0-.21.21v17.82a.21.21 0 0 0 .21.21h14.58a.209.209 0 0 0 .21-.21V8.549zm-2.427 2.083a3.516 3.516 0 1 1 0 7.032 3.516 3.516 0 0 1 0-7.032m-2.316 3.515a2.314 2.314 0 0 0 4.55.6h-.781a1.573 1.573 0 1 1-.85-2.052l.552-.551a2.3 2.3 0 0 0-1.155-.312 2.316 2.316 0 0 0-2.316 2.315m4.55-.6-.784-.002.555-.554q.15.26.229.556m-2.606.6a.372.372 0 1 0 .744.002.372.372 0 0 0-.744-.002" clip-rule="evenodd"/>'
  },
  tags: ["file", "disc", "image", "files-and-folders", "document", "page", "paper", "photo", "picture", "gallery"]
};
var chartLineIcon = {
  name: "chart-line",
  content: '<path d="M1.155 3.9a.6.6 0 0 1 1.2 0v15.6h18.84a.6.6 0 0 1 0 1.2H1.755a.6.6 0 0 1-.6-.6z"/><path d="M20.8 9.909a.6.6 0 0 1 .79.902l-6.48 5.671a.6.6 0 0 1-.755.028l-6.092-4.568-6.113 5.35a.6.6 0 0 1-.79-.904l6.479-5.669.085-.062a.6.6 0 0 1 .671.034l6.09 4.568z"/><path d="M14.726 5.77a.6.6 0 0 0-.509.266l-6.025 8.981-5.97-7.433a.6.6 0 0 0-.935.751l6.481 8.071a.6.6 0 0 0 .965-.042l5.963-8.888 5.989 9.68a.6.6 0 0 0 1.02-.632L15.226 6.055a.6.6 0 0 0-.5-.285"/>',
  viewBox: "0 0 24 24",
  variants: {
    "solid": '<path d="m16.304 11.9-1.901 1.664-2.096-1.572 2.109-3.143zM6.738 12.366l-1.216 1.065V10.85zM10.105 12.367l-.586.874-.546-.68.643-.561z"/><path fill-rule="evenodd" d="M20.91 3.09a1.62 1.62 0 0 1 1.62 1.62v14.58a1.62 1.62 0 0 1-1.62 1.62H3.09a1.62 1.62 0 0 1-1.62-1.62V4.71a1.62 1.62 0 0 1 1.62-1.62zM4.712 4.69a.81.81 0 0 0-.81.81v12.164a.81.81 0 0 0 .81.809h14.597a.81.81 0 1 0 0-1.619H5.522v-1.272l2.231-1.953 1.193 1.486a.81.81 0 0 0 1.304-.056l1.152-1.72 2.555 1.916a.81.81 0 0 0 1.02-.038l2.192-1.92 1.451 2.345a.81.81 0 0 0 1.116.263.81.81 0 0 0 .262-1.115l-1.594-2.574 1.438-1.257a.81.81 0 0 0-1.066-1.218l-1.235 1.079-2.409-3.892-.059-.083a.81.81 0 0 0-1.302.059l-2.762 4.115-.945-.709a.81.81 0 0 0-.906-.044l-.113.083-1.087.949-2.436-3.035V5.5a.81.81 0 0 0-.81-.81" clip-rule="evenodd"/>',
    "outline": '<path d="M1.155 3.9a.6.6 0 0 1 1.2 0v15.6h18.84a.6.6 0 0 1 0 1.2H1.755a.6.6 0 0 1-.6-.6z"/><path d="M20.8 9.909a.6.6 0 0 1 .79.902l-6.48 5.671a.6.6 0 0 1-.755.028l-6.092-4.568-6.113 5.35a.6.6 0 0 1-.79-.904l6.479-5.669.085-.062a.6.6 0 0 1 .671.034l6.09 4.568z"/><path d="M14.726 5.77a.6.6 0 0 0-.509.266l-6.025 8.981-5.97-7.433a.6.6 0 0 0-.935.751l6.481 8.071a.6.6 0 0 0 .965-.042l5.963-8.888 5.989 9.68a.6.6 0 0 0 1.02-.632L15.226 6.055a.6.6 0 0 0-.5-.285"/>',
    "duotone": '<path d="M1.755 20.1V3.9h17.82a1.62 1.62 0 0 1 1.62 1.62V20.1z" opacity="0.2"/><path d="M1.155 3.9a.6.6 0 0 1 1.2 0v15.6h18.84a.6.6 0 0 1 0 1.2H1.755a.6.6 0 0 1-.6-.6z"/><path d="M20.8 9.909a.6.6 0 0 1 .79.902l-6.48 5.671a.6.6 0 0 1-.755.028l-6.092-4.568-6.113 5.35a.6.6 0 0 1-.79-.904l6.479-5.669.085-.062a.6.6 0 0 1 .671.034l6.09 4.568z"/><path d="M14.726 5.77a.6.6 0 0 0-.509.266l-6.025 8.981-5.97-7.433a.6.6 0 0 0-.935.751l6.481 8.071a.6.6 0 0 0 .965-.042l5.963-8.888 5.989 9.68a.6.6 0 0 0 1.02-.632L15.226 6.055a.6.6 0 0 0-.5-.285"/>'
  },
  tags: ["graphs", "graphing", "charts", "statistics", "analyze", "analysis", "stocks"]
};

// node_modules/@progress/kendo-angular-l10n/fesm2022/progress-kendo-angular-l10n.mjs
var MessageService = class _MessageService {
  /**
   * @hidden
   */
  constructor() {
  }
  /**
   * @hidden
   */
  changes = new BehaviorSubject({
    rtl: void 0
  });
  /**
   * Notifies the components that the messages changed.
   *
   * @param rtl - (Optional) The new value for the [text direction token](https://www.telerik.com/kendo-angular-ui/components/globalization/localization/api/rtl).
   */
  notify(rtl) {
    this.changes.next({
      rtl
    });
  }
  /**
   * Returns a localized message for the supplied key.
   *
   * @param _key - The message key. For example, `"kendo.grid.noRecords"`.
   * @return - The localized message for this key or `undefined` if not found.
   */
  get(_key) {
    return void 0;
  }
  static \u0275fac = function MessageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MessageService,
    factory: _MessageService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageService, [{
    type: Injectable
  }], () => [], null);
})();
var ComponentMessages = class _ComponentMessages {
  service;
  subscription;
  get override() {
    return false;
  }
  ngOnChanges(changes) {
    this.register(changes);
    if (Object.keys(changes).some((field) => !changes[field].isFirstChange())) {
      this.service.notifyChanges();
    }
  }
  ngOnInit() {
    this.subscription = this.service.changes.pipe(skip(1)).subscribe(() => this.register(this));
  }
  register(changes) {
    const keys = Object.keys(changes);
    keys.forEach((key) => this.service.register(key, this[key], this.override));
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static \u0275fac = function ComponentMessages_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComponentMessages)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ComponentMessages,
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComponentMessages, [{
    type: Directive,
    args: [{}]
  }], null, null);
})();
var RTL = new InjectionToken("Kendo UI Right-to-Left token");
var L10N_PREFIX = new InjectionToken("Localization key prefix");
var LocalizationService = class _LocalizationService {
  prefix;
  messageService;
  _rtl;
  changes;
  subscription;
  dictionary = {};
  constructor(prefix, messageService, _rtl) {
    this.prefix = prefix;
    this.messageService = messageService;
    this._rtl = _rtl;
    this.changes = new BehaviorSubject({
      rtl: this._rtl
    });
    if (messageService) {
      this.subscription = messageService.changes.pipe(map(({
        rtl
      }) => rtl !== void 0 ? rtl : this._rtl), tap((rtl) => this._rtl = rtl)).subscribe((rtl) => {
        this.dictionary = {};
        this.changes.next({
          rtl
        });
      });
    }
  }
  get rtl() {
    return this._rtl;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  get(shortKey) {
    const key = this.key(shortKey);
    return this.dictionary[key];
  }
  register(shortKey, value, override = false) {
    const key = this.key(shortKey);
    let message = value;
    if (!override) {
      if (Object.hasOwnProperty.call(this.dictionary, key)) {
        return;
      }
      message = this.defaultValue(key, value);
    }
    this.dictionary[key] = message;
  }
  notifyChanges() {
    this.changes.next({
      rtl: this.rtl
    });
  }
  key(shortKey) {
    return this.prefix + "." + shortKey;
  }
  defaultValue(key, value) {
    if (!this.messageService) {
      return value;
    }
    const alt = this.messageService.get(key);
    return alt === void 0 ? value : alt;
  }
  static \u0275fac = function LocalizationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalizationService)(\u0275\u0275inject(L10N_PREFIX), \u0275\u0275inject(MessageService, 8), \u0275\u0275inject(RTL, 8));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _LocalizationService,
    factory: _LocalizationService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizationService, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [L10N_PREFIX]
    }]
  }, {
    type: MessageService,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [RTL]
    }]
  }], null);
})();

// node_modules/@progress/kendo-popup-common/dist/es/align-point.js
var AlignPoint;
(function(AlignPoint2) {
  AlignPoint2["bottom"] = "bottom";
  AlignPoint2["center"] = "center";
  AlignPoint2["middle"] = "middle";
  AlignPoint2["left"] = "left";
  AlignPoint2["right"] = "right";
  AlignPoint2["top"] = "top";
})(AlignPoint || (AlignPoint = {}));

// node_modules/@progress/kendo-popup-common/dist/es/align.js
var align = function(options) {
  var anchorRect = options.anchorRect, anchorAlign = options.anchorAlign, elementRect = options.elementRect, elementAlign = options.elementAlign, _a = options.margin, margin = _a === void 0 ? {} : _a;
  var anchorHorizontal = anchorAlign.horizontal;
  var anchorVertical = anchorAlign.vertical;
  var elementHorizontal = elementAlign.horizontal;
  var elementVertical = elementAlign.vertical;
  var horizontalMargin = margin.horizontal || 0;
  var verticalMargin = margin.vertical || 0;
  var top = anchorRect.top;
  var left = anchorRect.left;
  if (anchorVertical === AlignPoint.bottom) {
    top += anchorRect.height;
  }
  if (anchorVertical === AlignPoint.center || anchorVertical === AlignPoint.middle) {
    top += Math.round(anchorRect.height / 2);
  }
  if (elementVertical === AlignPoint.bottom) {
    top -= elementRect.height;
    verticalMargin *= -1;
  }
  if (elementVertical === AlignPoint.center || elementVertical === AlignPoint.middle) {
    top -= Math.round(elementRect.height / 2);
    verticalMargin *= -1;
  }
  if (anchorHorizontal === AlignPoint.right) {
    left += anchorRect.width;
  }
  if (anchorHorizontal === AlignPoint.center || anchorHorizontal === AlignPoint.middle) {
    left += Math.round(anchorRect.width / 2);
  }
  if (elementHorizontal === AlignPoint.right) {
    left -= elementRect.width;
    horizontalMargin *= -1;
  }
  if (elementHorizontal === AlignPoint.center || elementHorizontal === AlignPoint.middle) {
    left -= Math.round(elementRect.width / 2);
    horizontalMargin *= -1;
  }
  return {
    top: top + verticalMargin,
    left: left + horizontalMargin
  };
};

// node_modules/@progress/kendo-popup-common/dist/es/add-scroll.js
var addScroll = function(rect, scroll) {
  return {
    top: rect.top + scroll.y,
    left: rect.left + scroll.x,
    height: rect.height,
    width: rect.width
  };
};

// node_modules/@progress/kendo-popup-common/dist/es/owner-document.js
var owner_document_default = (function(element) {
  return element && element.ownerDocument || document;
});

// node_modules/@progress/kendo-popup-common/dist/es/document.js
var getDocumentElement = function(element) {
  return owner_document_default(element).documentElement;
};

// node_modules/@progress/kendo-popup-common/dist/es/scrollbar-width.js
var cachedWidth = 0;
var scrollbarWidth2 = function() {
  if (!cachedWidth && typeof document !== "undefined") {
    var div2 = document.createElement("div");
    div2.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block";
    div2.innerHTML = "&nbsp;";
    document.body.appendChild(div2);
    cachedWidth = div2.offsetWidth - div2.scrollWidth;
    document.body.removeChild(div2);
  }
  return cachedWidth;
};

// node_modules/@progress/kendo-popup-common/dist/es/window.js
var getWindow = function(element) {
  return owner_document_default(element).defaultView;
};

// node_modules/@progress/kendo-popup-common/dist/es/window-viewport.js
var windowViewport = function(element) {
  var win = getWindow(element);
  var documentElement = getDocumentElement(element);
  var result = {
    height: win.innerHeight,
    width: win.innerWidth
  };
  if (documentElement.scrollHeight - documentElement.clientHeight > 0) {
    result.width -= scrollbarWidth2();
  }
  return result;
};

// node_modules/@progress/kendo-popup-common/dist/es/bounding-offset.js
var boundingOffset = function(element) {
  if (!element.getBoundingClientRect) {
    var viewport = windowViewport(element);
    return {
      bottom: viewport.height,
      left: 0,
      right: viewport.width,
      top: 0
    };
  }
  var _a = element.getBoundingClientRect(), bottom = _a.bottom, left = _a.left, right = _a.right, top = _a.top;
  return {
    bottom,
    left,
    right,
    top
  };
};

// node_modules/@progress/kendo-popup-common/dist/es/offset-parent.js
var offsetParent = function(element) {
  var offsetParent2 = element.offsetParent;
  while (offsetParent2 && offsetParent2.style.position === "static") {
    offsetParent2 = offsetParent2.offsetParent;
  }
  return offsetParent2 || element.ownerDocument.documentElement;
};

// node_modules/@progress/kendo-popup-common/dist/es/offset.js
var rectOfHiddenElement = function(element) {
  var _a = element.style, display = _a.display, left = _a.left, position2 = _a.position;
  element.style.display = "";
  element.style.left = "-10000px";
  element.style.position = "absolute";
  var rect = element.getBoundingClientRect();
  element.style.display = display;
  element.style.left = left;
  element.style.position = position2;
  return {
    top: rect.top,
    left: rect.left,
    height: rect.height,
    width: rect.width
  };
};
var offset = function(element) {
  var rect = element.getBoundingClientRect();
  var left = rect.left, top = rect.top;
  if (!rect.height && !rect.width) {
    rect = rectOfHiddenElement(element);
  }
  return {
    top,
    left,
    height: rect.height,
    width: rect.width
  };
};

// node_modules/@progress/kendo-popup-common/dist/es/parents.js
var parents = function(element, until) {
  var result = [];
  var next = element.parentNode;
  while (next) {
    result.push(next);
    if (next === until) {
      break;
    }
    next = next.parentNode;
  }
  return result;
};

// node_modules/@progress/kendo-popup-common/dist/es/scroll-position.js
var scrollPosition = function(element) {
  var documentElement = getDocumentElement(element);
  var win = getWindow(element);
  return {
    x: win.pageXOffset || documentElement.scrollLeft || 0,
    y: win.pageYOffset || documentElement.scrollTop || 0
  };
};

// node_modules/@progress/kendo-popup-common/dist/es/element-scroll-position.js
var elementScrollPosition = function(element) {
  if (element === (element.ownerDocument || {}).body) {
    return scrollPosition(element);
  }
  return {
    x: element.scrollLeft,
    y: element.scrollTop
  };
};

// node_modules/@progress/kendo-popup-common/dist/es/parent-scroll-position.js
var parentScrollPosition = function(element) {
  var parent = offsetParent(element);
  return parent ? elementScrollPosition(parent) : { x: 0, y: 0 };
};

// node_modules/@progress/kendo-popup-common/dist/es/position.js
var position = function(element, parent) {
  var win = getWindow(element);
  var elementStyles = win.getComputedStyle(element);
  var offset2 = offset(element);
  var parentElement = parent || offsetParent(element);
  var ownerDocument = element.ownerDocument;
  var useRelative = parentElement !== ownerDocument.body && parentElement !== ownerDocument.documentElement;
  var parentOffset = { top: 0, left: 0, height: 0, width: 0 };
  if (elementStyles.position !== "fixed" && useRelative) {
    var parentStyles = win.getComputedStyle(parentElement);
    parentOffset = offset(parentElement);
    parentOffset.top += parseFloat(parentStyles.borderTopWidth);
    parentOffset.left += parseFloat(parentStyles.borderLeftWidth);
  }
  return {
    top: offset2.top - parentOffset.top,
    left: offset2.left - parentOffset.left,
    height: offset2.height,
    width: offset2.width
  };
};

// node_modules/@progress/kendo-popup-common/dist/es/offset-parent-scroll-position.js
var offsetParentScrollPosition = function(offsetParentElement, element) {
  return offsetParentElement ? elementScrollPosition(offsetParentElement) : parentScrollPosition(element);
};

// node_modules/@progress/kendo-popup-common/dist/es/position-with-scroll.js
var positionWithScroll = function(element, parent, scale) {
  if (scale === void 0) {
    scale = 1;
  }
  var offsetParentElement = parent ? offsetParent(parent) : null;
  var _a = position(element, offsetParentElement), top = _a.top, left = _a.left, height = _a.height, width = _a.width;
  var _b = offsetParentScrollPosition(offsetParentElement, element), x = _b.x, y = _b.y;
  var ownerDocument = element.ownerDocument;
  var positionScale = offsetParentElement === ownerDocument.body || offsetParentElement === ownerDocument.documentElement ? 1 : scale;
  return {
    top: top + y * positionScale,
    left: left + x * positionScale,
    height,
    width
  };
};

// node_modules/@progress/kendo-popup-common/dist/es/remove-scroll.js
var removeScroll = function(rect, scroll) {
  return {
    top: rect.top - scroll.y,
    left: rect.left - scroll.x,
    height: rect.height,
    width: rect.width
  };
};

// node_modules/@progress/kendo-popup-common/dist/es/collision.js
var Collision;
(function(Collision2) {
  Collision2["fit"] = "fit";
  Collision2["flip"] = "flip";
  Collision2["none"] = "none";
})(Collision || (Collision = {}));

// node_modules/@progress/kendo-popup-common/dist/es/restrict-to-view.js
var fit = function(position2, size, viewPortSize) {
  var output = 0;
  if (position2 + size > viewPortSize) {
    output = viewPortSize - (position2 + size);
  }
  if (position2 < 0) {
    output = -position2;
  }
  return output;
};
var flip = function(_a) {
  var offset2 = _a.offset, size = _a.size, anchorSize = _a.anchorSize, viewPortSize = _a.viewPortSize, anchorAlignPoint = _a.anchorAlignPoint, elementAlignPoint = _a.elementAlignPoint, margin = _a.margin;
  var output = 0;
  var isPositionCentered = elementAlignPoint === AlignPoint.center || elementAlignPoint === AlignPoint.middle;
  var isOriginCentered = anchorAlignPoint === AlignPoint.center || anchorAlignPoint === AlignPoint.middle;
  var marginToAdd = 2 * margin;
  if (elementAlignPoint !== anchorAlignPoint && !isPositionCentered && !isOriginCentered) {
    var isBeforeAnchor = anchorAlignPoint === AlignPoint.top || anchorAlignPoint === AlignPoint.left;
    if (offset2 < 0 && isBeforeAnchor) {
      output = size + anchorSize + marginToAdd;
      if (offset2 + output + size > viewPortSize) {
        output = 0;
      }
    } else if (offset2 >= 0 && !isBeforeAnchor) {
      if (offset2 + size > viewPortSize) {
        output += -(anchorSize + size + marginToAdd);
      }
      if (offset2 + output < 0) {
        output = 0;
      }
    }
  }
  return output;
};
var restrictToView = function(_a) {
  var anchorRect = _a.anchorRect, anchorAlign = _a.anchorAlign, elementRect = _a.elementRect, elementAlign = _a.elementAlign, collisions = _a.collisions, viewPort = _a.viewPort, _b = _a.margin, margin = _b === void 0 ? {} : _b;
  var elementTop = elementRect.top, elementLeft = elementRect.left, elementHeight = elementRect.height, elementWidth = elementRect.width;
  var viewPortHeight = viewPort.height, viewPortWidth = viewPort.width;
  var horizontalMargin = margin.horizontal || 0;
  var verticalMargin = margin.vertical || 0;
  var left = 0;
  var top = 0;
  var isVerticalFit = collisions.vertical === Collision.fit;
  var isHorizontalFit = collisions.horizontal === Collision.fit;
  var isVerticalFlip = collisions.vertical === Collision.flip;
  var isHorizontalFlip = collisions.horizontal === Collision.flip;
  if (isVerticalFit) {
    top += fit(elementTop, elementHeight, viewPortHeight);
  }
  if (isHorizontalFit) {
    left += fit(elementLeft, elementWidth, viewPortWidth);
  }
  if (isVerticalFlip) {
    top += flip({
      margin: verticalMargin,
      offset: elementTop,
      size: elementHeight,
      anchorSize: anchorRect.height,
      viewPortSize: viewPortHeight,
      anchorAlignPoint: anchorAlign.vertical,
      elementAlignPoint: elementAlign.vertical
    });
  }
  if (isHorizontalFlip) {
    left += flip({
      margin: horizontalMargin,
      offset: elementLeft,
      size: elementWidth,
      anchorSize: anchorRect.width,
      viewPortSize: viewPortWidth,
      anchorAlignPoint: anchorAlign.horizontal,
      elementAlignPoint: elementAlign.horizontal
    });
  }
  var flippedVertical = isVerticalFlip && top !== 0;
  var flippedHorizontal = isHorizontalFlip && left !== 0;
  var fittedVertical = isVerticalFit && top !== 0;
  var fittedHorizontal = isHorizontalFit && left !== 0;
  return {
    flipped: flippedHorizontal || flippedVertical,
    fitted: fittedVertical || fittedHorizontal,
    flip: {
      horizontal: flippedHorizontal,
      vertical: flippedVertical
    },
    fit: {
      horizontal: fittedHorizontal,
      vertical: fittedVertical
    },
    offset: {
      left,
      top
    }
  };
};

// node_modules/@progress/kendo-popup-common/dist/es/siblings.js
var siblings = function(element) {
  var _a;
  var result = [];
  var sibling = (_a = element.parentNode) === null || _a === void 0 ? void 0 : _a.firstElementChild;
  while (sibling) {
    if (sibling !== element) {
      result.push(sibling);
    }
    sibling = sibling.nextElementSibling;
  }
  return result;
};

// node_modules/@progress/kendo-popup-common/dist/es/sibling-container.js
var siblingContainer = function(anchor, container) {
  var parentElements = parents(anchor);
  var containerElement = container;
  var siblingElements;
  var result;
  while (containerElement) {
    siblingElements = siblings(containerElement);
    result = parentElements.reduce(function(list, p) {
      return list.concat(siblingElements.filter(function(s) {
        return s === p;
      }));
    }, [])[0];
    if (result) {
      break;
    }
    containerElement = containerElement.parentElement;
  }
  return result;
};

// node_modules/@progress/kendo-popup-common/dist/es/utils.js
function memoize(fun) {
  var _this = this;
  var result;
  var called = false;
  return function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (called) {
      return result;
    }
    result = fun.apply(_this, args);
    called = true;
    return result;
  };
}
var hasRelativeStackingContext = memoize(function(elementSource) {
  if (!canUseDOM()) {
    return false;
  }
  var currentDocument = elementSource ? elementSource.ownerDocument : document;
  if (!currentDocument || !currentDocument.body) {
    return false;
  }
  var top = 10;
  var parent = currentDocument.createElement("div");
  parent.style.transform = "matrix(10, 0, 0, 10, 0, 0)";
  parent.innerHTML = '<div style="position: fixed; top: '.concat(top, 'px;">child</div>');
  currentDocument.body.appendChild(parent);
  var isDifferent = parent.children[0].getBoundingClientRect().top !== top;
  currentDocument.body.removeChild(parent);
  return isDifferent;
});
var canUseDOM = function() {
  return Boolean(typeof window !== "undefined" && window.document && // eslint-disable-next-line
  window.document.createElement);
};

// node_modules/@angular/animations/fesm2022/animations.mjs
/**
 * @license Angular v22.0.0
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var AnimationBuilder = class _AnimationBuilder {
  static \u0275fac = function AnimationBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnimationBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _AnimationBuilder,
    factory: () => (() => inject(BrowserAnimationBuilder))()
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationBuilder, [{
    type: Service,
    args: [{
      factory: () => inject(BrowserAnimationBuilder)
    }]
  }], null, null);
})();
var AnimationFactory = class {
};
var BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
  animationModuleType = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  _nextAnimationId = 0;
  _renderer;
  constructor(rootRenderer, doc) {
    super();
    const typeData = {
      id: "0",
      encapsulation: ViewEncapsulation.None,
      styles: [],
      data: {
        animation: []
      }
    };
    this._renderer = rootRenderer.createRenderer(doc.body, typeData);
    if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
      throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
    }
  }
  build(animation2) {
    const id = this._nextAnimationId;
    this._nextAnimationId++;
    const entry = Array.isArray(animation2) ? sequence(animation2) : animation2;
    issueAnimationCommand(this._renderer, null, id, "register", [entry]);
    return new BrowserAnimationFactory(id, this._renderer);
  }
  static \u0275fac = function BrowserAnimationBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationBuilder)(\u0275\u0275inject(RendererFactory2), \u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BrowserAnimationBuilder,
    factory: _BrowserAnimationBuilder.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RendererFactory2
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var BrowserAnimationFactory = class extends AnimationFactory {
  _id;
  _renderer;
  constructor(_id, _renderer) {
    super();
    this._id = _id;
    this._renderer = _renderer;
  }
  create(element, options) {
    return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
  }
};
var RendererAnimationPlayer = class {
  id;
  element;
  _renderer;
  parentPlayer = null;
  _started = false;
  constructor(id, element, options, _renderer) {
    this.id = id;
    this.element = element;
    this._renderer = _renderer;
    this._command("create", options);
  }
  _listen(eventName, callback) {
    return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
  }
  _command(command, ...args) {
    issueAnimationCommand(this._renderer, this.element, this.id, command, args);
  }
  onDone(fn) {
    this._listen("done", fn);
  }
  onStart(fn) {
    this._listen("start", fn);
  }
  onDestroy(fn) {
    this._listen("destroy", fn);
  }
  init() {
    this._command("init");
  }
  hasStarted() {
    return this._started;
  }
  play() {
    this._command("play");
    this._started = true;
  }
  pause() {
    this._command("pause");
  }
  restart() {
    this._command("restart");
  }
  finish() {
    this._command("finish");
  }
  destroy() {
    this._command("destroy");
  }
  reset() {
    this._command("reset");
    this._started = false;
  }
  setPosition(p) {
    this._command("setPosition", p);
  }
  getPosition() {
    return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
  }
  totalTime = 0;
};
function issueAnimationCommand(renderer, element, id, command, args) {
  renderer.setProperty(element, `@@${id}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  return type === 0 || type === 1;
}

// node_modules/@progress/kendo-angular-popup/fesm2022/progress-kendo-angular-popup.mjs
var _c02 = ["container"];
var _c12 = ["*"];
function PopupComponent_Conditional_4_ng_template_0_Template(rf, ctx) {
}
function PopupComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PopupComponent_Conditional_4_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.content);
  }
}
var eitherRect = (rect, offset2) => {
  if (!rect) {
    return {
      height: 0,
      left: offset2.left,
      top: offset2.top,
      width: 0
    };
  }
  return rect;
};
var removeStackingOffset = (rect, stackingOffset) => {
  if (!stackingOffset) {
    return rect;
  }
  const result = {
    height: rect.height,
    left: rect.left - stackingOffset.left,
    top: rect.top - stackingOffset.top,
    width: rect.width
  };
  return result;
};
var isDifferentOffset = (oldOffset, newOffset) => {
  const {
    left: oldLeft,
    top: oldTop
  } = oldOffset;
  const {
    left: newLeft,
    top: newTop
  } = newOffset;
  return Math.abs(oldLeft - newLeft) >= 1 || Math.abs(oldTop - newTop) >= 1;
};
var isWindowAvailable = () => {
  return typeof window !== "undefined";
};
var OVERFLOW_REGEXP = /auto|scroll/;
var overflowElementStyle = (element) => {
  return `${element.style.overflow}${element.style.overflowX}${element.style.overflowY}`;
};
var overflowComputedStyle = (element) => {
  const styles = window.getComputedStyle(element);
  return `${styles.overflow}${styles.overflowX}${styles.overflowY}`;
};
var overflowStyle = (element) => {
  return overflowElementStyle(element) || overflowComputedStyle(element);
};
var scrollableParents = (element) => {
  const parentElements = [];
  if (!isDocumentAvailable() || !isWindowAvailable()) {
    return parentElements;
  }
  let parent = element.parentElement;
  while (parent) {
    if (OVERFLOW_REGEXP.test(overflowStyle(parent)) || parent.hasAttribute("data-scrollable")) {
      parentElements.push(parent);
    }
    parent = parent.parentElement;
  }
  parentElements.push(window);
  return parentElements;
};
var FRAME_DURATION = 1e3 / 60;
function memoize2(fun) {
  let result;
  let called = false;
  return (...args) => {
    if (called) {
      return result;
    }
    result = fun(...args);
    called = true;
    return result;
  };
}
var hasRelativeStackingContext2 = memoize2(() => {
  if (!isDocumentAvailable() && document.body !== null) {
    return false;
  }
  const top = 10;
  const parent = document.createElement("div");
  parent.style.transform = "matrix(10, 0, 0, 10, 0, 0)";
  const childElement = document.createElement("div");
  childElement.style.position = "fixed";
  childElement.style.top = `${top}px`;
  childElement.textContent = "child";
  parent.appendChild(childElement);
  document.body.appendChild(parent);
  const isDifferent = parent.children[0].getBoundingClientRect().top !== top;
  document.body.removeChild(parent);
  return isDifferent;
});
var zIndex2 = (anchor, container) => {
  if (!anchor || !isDocumentAvailable() || !isWindowAvailable()) {
    return null;
  }
  const sibling = siblingContainer(anchor, container);
  if (!sibling) {
    return null;
  }
  const result = [anchor].concat(parents(anchor, sibling)).reduce((index, p) => {
    const zIndexStyle = p.style.zIndex || window.getComputedStyle(p).zIndex;
    const current = parseInt(zIndexStyle, 10);
    const updatedIndex = isNaN(current) ? index : Math.max(current, index);
    if (!p.parentElement) {
      return updatedIndex;
    }
    return Array.from(p.parentElement.children).reduce((sibMax, sibl) => {
      const sibZIndex = sibl.style.zIndex || window.getComputedStyle(sibl).zIndex;
      const sibCurrent = parseInt(sibZIndex, 10);
      return isNaN(sibCurrent) ? sibMax : Math.max(sibCurrent, sibMax);
    }, updatedIndex);
  }, 0);
  return result ? result + 1 : null;
};
var scaleRect = (rect, scale) => {
  if (!rect || scale === 1) {
    return rect;
  }
  return {
    height: rect.height / scale,
    left: rect.left / scale,
    top: rect.top / scale,
    width: rect.width / scale
  };
};
var STYLES = ["font-size", "font-family", "font-stretch", "font-style", "font-weight", "line-height"];
var DOMService = class _DOMService {
  _dummy;
  addOffset(current, addition) {
    return {
      left: current.left + addition.left,
      top: current.top + addition.top
    };
  }
  addScroll(rect, scroll) {
    return addScroll(rect, scroll);
  }
  align(settings) {
    return align(settings);
  }
  boundingOffset(el) {
    return boundingOffset(el);
  }
  getFontStyles(el) {
    const window2 = this.getWindow();
    if (!window2 || !el) {
      return [];
    }
    const computedStyles = window2.getComputedStyle(el);
    return STYLES.map((key) => ({
      key,
      value: computedStyles[key]
    }));
  }
  getWindow() {
    return isWindowAvailable() ? window : null;
  }
  hasOffsetParent(el) {
    if (!el || !isDocumentAvailable()) {
      return false;
    }
    return !!this.nativeElement(el).offsetParent;
  }
  offset(el) {
    if (!el || !isDocumentAvailable()) {
      return null;
    }
    return offset(el);
  }
  offsetAtPoint(el, currentLocation) {
    if (!el || !isDocumentAvailable()) {
      return null;
    }
    const element = this.nativeElement(el);
    const {
      left,
      top,
      transition: transition2
    } = element.style;
    element.style.transition = "none";
    element.style.left = `${currentLocation.left}px`;
    element.style.top = `${currentLocation.top}px`;
    const currentOffset = offset(element);
    element.style.left = left;
    element.style.top = top;
    this._dummy = element.offsetHeight;
    element.style.transition = transition2;
    return currentOffset;
  }
  nativeElement(el) {
    if (!el || !isDocumentAvailable()) {
      return null;
    }
    return el.nativeElement || el;
  }
  position(element, popup, scale = 1) {
    if (!element || !popup) {
      return null;
    }
    return positionWithScroll(element, this.nativeElement(popup), scale);
  }
  removeScroll(rect, scroll) {
    return removeScroll(rect, scroll);
  }
  restrictToView(settings) {
    return restrictToView(settings);
  }
  scrollPosition(el) {
    return scrollPosition(this.nativeElement(el));
  }
  scrollableParents(el) {
    return scrollableParents(el);
  }
  stackingElementOffset(el) {
    const relativeContextElement = this.getRelativeContextElement(el);
    if (!relativeContextElement) {
      return null;
    }
    return offset(relativeContextElement);
  }
  stackingElementScroll(el) {
    const relativeContextElement = this.getRelativeContextElement(el);
    if (!relativeContextElement) {
      return {
        x: 0,
        y: 0
      };
    }
    return {
      x: relativeContextElement.scrollLeft,
      y: relativeContextElement.scrollTop
    };
  }
  getRelativeContextElement(el) {
    if (!el || !hasRelativeStackingContext2()) {
      return null;
    }
    let parent = this.nativeElement(el).parentElement;
    while (parent) {
      if (window.getComputedStyle(parent).transform !== "none") {
        return parent;
      }
      parent = parent.parentElement;
    }
    return null;
  }
  useRelativePosition(el) {
    return !!this.getRelativeContextElement(el);
  }
  windowViewPort(el) {
    return windowViewport(this.nativeElement(el));
  }
  zIndex(anchor, container) {
    return zIndex2(anchor, this.nativeElement(container));
  }
  zoomLevel() {
    if (!isDocumentAvailable() || !isWindowAvailable()) {
      return 1;
    }
    return parseFloat((document.documentElement.clientWidth / window.innerWidth).toFixed(2)) || 1;
  }
  isZoomed() {
    return this.zoomLevel() > 1;
  }
  static \u0275fac = function DOMService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DOMService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DOMService,
    factory: _DOMService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DOMService, [{
    type: Injectable
  }], null, null);
})();
var SCALE = new InjectionToken("Popup Document Scale");
var AlignService = class _AlignService {
  _dom;
  scale;
  constructor(_dom, scale = 1) {
    this._dom = _dom;
    this.scale = scale;
  }
  alignElement(settings) {
    const {
      anchor,
      element,
      anchorAlign,
      elementAlign,
      margin,
      offset: offset2,
      positionMode
    } = settings;
    const scale = this.scale || 1;
    const fixedMode = positionMode === "fixed" || !this._dom.hasOffsetParent(element);
    const anchorRect = fixedMode ? this.absoluteRect(anchor, element, offset2, scale) : this.relativeRect(anchor, element, offset2, scale);
    const elementRect = scaleRect(this._dom.offset(element.nativeElement), scale);
    const result = this._dom.align({
      anchorAlign,
      anchorRect,
      elementAlign,
      elementRect,
      margin
    });
    return result;
  }
  absoluteRect(anchor, element, offset2, scale) {
    const scrollPos = this.elementScrollPosition(anchor, element);
    const rect = eitherRect(this._dom.offset(anchor), offset2);
    const stackScale = 2 * scale;
    const stackScroll = this._dom.stackingElementScroll(element);
    if (scale !== 1 && stackScroll) {
      stackScroll.x /= stackScale;
      stackScroll.y /= stackScale;
    }
    const stackOffset = this._dom.stackingElementOffset(element);
    if (scale !== 1 && stackOffset) {
      stackOffset.left /= stackScale;
      stackOffset.top /= stackScale;
    }
    return this._dom.removeScroll(this._dom.addScroll(removeStackingOffset(scaleRect(rect, scale), stackOffset), stackScroll), scrollPos);
  }
  elementScrollPosition(anchor, element) {
    return anchor ? {
      x: 0,
      y: 0
    } : this._dom.scrollPosition(element);
  }
  relativeRect(anchor, element, offset2, scale) {
    const rect = eitherRect(this._dom.position(anchor, element, scale), offset2);
    return scaleRect(rect, scale);
  }
  static \u0275fac = function AlignService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlignService)(\u0275\u0275inject(DOMService), \u0275\u0275inject(SCALE, 8));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AlignService,
    factory: _AlignService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlignService, [{
    type: Injectable
  }], () => [{
    type: DOMService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [SCALE]
    }, {
      type: Optional
    }]
  }], null);
})();
var PositionService = class _PositionService {
  _dom;
  scale;
  constructor(_dom, scale = 1) {
    this._dom = _dom;
    this.scale = scale;
  }
  positionElement(settings) {
    const {
      anchor,
      currentLocation,
      element,
      anchorAlign,
      elementAlign,
      collisions,
      margin
    } = settings;
    const dom = this._dom;
    const scale = this.scale || 1;
    const elementOffset = dom.offsetAtPoint(element, currentLocation);
    const elementRect = scaleRect(elementOffset, scale);
    const anchorOffset = scaleRect(dom.offset(anchor), scale);
    const anchorRect = eitherRect(anchorOffset, currentLocation);
    const viewPort = settings.viewPort || dom.windowViewPort(element);
    viewPort.width = viewPort.width / scale;
    viewPort.height = viewPort.height / scale;
    const result = dom.restrictToView({
      anchorAlign,
      anchorRect,
      collisions,
      elementAlign,
      elementRect,
      margin,
      viewPort
    });
    const offset2 = dom.addOffset(currentLocation, result.offset);
    return {
      flip: result.flip,
      flipped: result.flipped,
      offset: offset2
    };
  }
  static \u0275fac = function PositionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PositionService)(\u0275\u0275inject(DOMService), \u0275\u0275inject(SCALE, 8));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PositionService,
    factory: _PositionService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PositionService, [{
    type: Injectable
  }], () => [{
    type: DOMService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [SCALE]
    }, {
      type: Optional
    }]
  }], null);
})();
var ResizeService2 = class _ResizeService {
  _dom;
  _zone;
  subscription;
  constructor(_dom, _zone) {
    this._dom = _dom;
    this._zone = _zone;
  }
  subscribe(callback) {
    if (!isDocumentAvailable()) {
      return;
    }
    this._zone.runOutsideAngular(() => {
      this.subscription = fromEvent(this._dom.getWindow(), "resize").pipe(auditTime(FRAME_DURATION)).subscribe(() => callback());
    });
  }
  unsubscribe() {
    if (!this.subscription) {
      return;
    }
    this.subscription.unsubscribe();
  }
  isUnsubscribed() {
    return this.subscription && this.subscription.closed;
  }
  static \u0275fac = function ResizeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResizeService)(\u0275\u0275inject(DOMService), \u0275\u0275inject(NgZone));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ResizeService,
    factory: _ResizeService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeService2, [{
    type: Injectable
  }], () => [{
    type: DOMService
  }, {
    type: NgZone
  }], null);
})();
var THRESHOLD_DIFF = 1;
var ScrollableService = class _ScrollableService {
  _dom;
  _zone;
  element;
  subscription;
  constructor(_dom, _zone) {
    this._dom = _dom;
    this._zone = _zone;
  }
  forElement(element) {
    this.unsubscribe();
    this.element = element;
    return this;
  }
  subscribe(callback) {
    if (!callback || !isDocumentAvailable() || !this.element) {
      return;
    }
    const parents2 = this._dom.scrollableParents(this.element);
    this._zone.runOutsideAngular(() => {
      const observables = parents2.map((p) => fromEvent(p, "scroll").pipe(auditTime(FRAME_DURATION)));
      const subscriber = (e) => {
        const target = e.target;
        const isParent = parents2.filter((p) => p === target).length > 0;
        const isDocument = target === document;
        const isWindow = target === window;
        if (isParent || isDocument || isWindow) {
          callback(this.isVisible(this.element, target));
        }
      };
      this.subscription = merge(...observables).subscribe(subscriber);
    });
  }
  unsubscribe() {
    if (!this.subscription) {
      return;
    }
    this.subscription.unsubscribe();
  }
  isVisible(elem, container) {
    const elemRect = this._dom.boundingOffset(elem);
    const containerRect = this._dom.boundingOffset(this._dom.nativeElement(container));
    if (THRESHOLD_DIFF < containerRect.top - elemRect.bottom) {
      return false;
    }
    if (THRESHOLD_DIFF < elemRect.top - containerRect.bottom) {
      return false;
    }
    if (THRESHOLD_DIFF < elemRect.left - containerRect.right) {
      return false;
    }
    if (THRESHOLD_DIFF < containerRect.left - elemRect.right) {
      return false;
    }
    return true;
  }
  static \u0275fac = function ScrollableService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollableService)(\u0275\u0275inject(DOMService), \u0275\u0275inject(NgZone));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ScrollableService,
    factory: _ScrollableService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollableService, [{
    type: Injectable
  }], () => [{
    type: DOMService
  }, {
    type: NgZone
  }], null);
})();
var LEFT = "left";
var RIGHT = "right";
var DOWN = "down";
var UP = "up";
var DEFAULT_TYPE = "slide";
var DEFAULT_DURATION = 100;
var animationTypes = {};
animationTypes.expand = (direction) => {
  const scale = direction === UP || direction === DOWN ? "scaleY" : "scaleX";
  const startScale = 0;
  const endScale = 1;
  let origin;
  if (direction === DOWN) {
    origin = "top";
  } else if (direction === LEFT) {
    origin = RIGHT;
  } else if (direction === RIGHT) {
    origin = LEFT;
  } else {
    origin = "bottom";
  }
  return {
    start: {
      transform: `${scale}(${startScale})`,
      transformOrigin: origin
    },
    end: {
      transform: `${scale}(${endScale})`
    }
  };
};
animationTypes.slide = (direction) => {
  const translate = direction === LEFT || direction === RIGHT ? "translateX" : "translateY";
  const start = direction === RIGHT || direction === DOWN ? -100 : 100;
  const end = 0;
  return {
    start: {
      transform: `${translate}(${start}%)`
    },
    end: {
      transform: `${translate}(${end}%)`
    }
  };
};
animationTypes.fade = () => {
  return {
    start: {
      opacity: 0
    },
    end: {
      opacity: 1
    }
  };
};
animationTypes.zoom = () => {
  const start = 0;
  const end = 1;
  return {
    start: {
      transform: `scale(${start})`
    },
    end: {
      transform: `scale(${end})`
    }
  };
};
var AnimationService = class _AnimationService {
  animationBuilder;
  start = new EventEmitter();
  end = new EventEmitter();
  flip;
  player;
  constructor(animationBuilder) {
    this.animationBuilder = animationBuilder;
  }
  play(element, options, flip2) {
    if (!this.flip || this.flip.horizontal !== flip2.horizontal || this.flip.vertical !== flip2.vertical) {
      this.flip = flip2;
      const type = options.type || DEFAULT_TYPE;
      const statesFn = animationTypes[type];
      if (statesFn) {
        const direction = this.getDirection(flip2, options);
        const states = statesFn(direction);
        this.playStates(element, states, options);
      } else if (isDevMode()) {
        throw new Error(`Unsupported animation type: "${type}". The supported types are slide, expand, fade and zoom.`);
      }
    }
  }
  ngOnDestroy() {
    this.stopPlayer();
  }
  playStates(element, states, options) {
    this.stopPlayer();
    const duration = options.duration || DEFAULT_DURATION;
    const factory = this.animationBuilder.build([style(states.start), animate(`${duration}ms ease-in`, style(states.end))]);
    const player = this.player = factory.create(element);
    player.onDone(() => {
      this.end.emit();
      this.stopPlayer();
    });
    this.start.emit();
    player.play();
  }
  getDirection(flip2, options) {
    let direction = options.direction || DOWN;
    if (flip2.horizontal) {
      if (direction === LEFT) {
        direction = RIGHT;
      } else if (direction === RIGHT) {
        direction = LEFT;
      }
    }
    if (flip2.vertical) {
      if (direction === DOWN) {
        direction = UP;
      } else if (direction === UP) {
        direction = DOWN;
      }
    }
    return direction;
  }
  stopPlayer() {
    if (this.player) {
      this.player.destroy();
      this.player = null;
    }
  }
  static \u0275fac = function AnimationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnimationService)(\u0275\u0275inject(AnimationBuilder));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AnimationService,
    factory: _AnimationService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationService, [{
    type: Injectable
  }], () => [{
    type: AnimationBuilder
  }], null);
})();
var packageMetadata2 = {
  name: "@progress/kendo-angular-popup",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1780593636,
  version: "24.1.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/?utm_medium=product&utm_source=kendoangular&utm_campaign=kendo-ui-angular-purchase-license-keys-warning"
};
var DEFAULT_OFFSET = {
  left: -1e4,
  top: 0
};
var ANIMATION_CONTAINER = "k-animation-container";
var ANIMATION_CONTAINER_FIXED = "k-animation-container-fixed";
var PopupComponent = class _PopupComponent {
  container;
  _alignService;
  domService;
  _positionService;
  _resizeService;
  _scrollableService;
  animationService;
  _renderer;
  _zone;
  /**
   * Controls the Popup animation. By default, the opening and closing animations are enabled ([see example](https://www.telerik.com/kendo-angular-ui/components/popup/animations)).
   * @default true
   */
  animate = true;
  /**
   * Sets the element to use as an anchor. The Popup opens next to this element. ([See example](https://www.telerik.com/kendo-angular-ui/components/popup/aligning-positioning#aligning-to-components)).
   */
  anchor;
  /**
   * Sets the anchor pivot point ([see example](https://www.telerik.com/kendo-angular-ui/components/popup/aligning-positioning#positioning)).
   * @default '{ horizontal: "left", vertical: "bottom" }'
   */
  anchorAlign = {
    horizontal: "left",
    vertical: "bottom"
  };
  /**
   * Sets the collision behavior of the Popup ([see example](https://www.telerik.com/kendo-angular-ui/components/popup/viewport-boundary-detection)).
   * @default '{ horizontal: "fit", vertical: "flip" }'
   */
  collision = {
    horizontal: "fit",
    vertical: "flip"
  };
  /**
   * Sets the pivot point of the Popup ([see example](https://www.telerik.com/kendo-angular-ui/components/popup/aligning-positioning#positioning)).
   * @default '{ horizontal: "left", vertical: "top" }'
   */
  popupAlign = {
    horizontal: "left",
    vertical: "top"
  };
  /**
   * Controls whether the component copies the `anchor` font styles.
   * @default false
   */
  copyAnchorStyles = false;
  /**
   * Sets a list of CSS classes to add to the internal animated element ([see example](https://www.telerik.com/kendo-angular-ui/components/popup/styling)).
   *
   * > To style the content of the Popup, use this property binding.
   */
  popupClass;
  /**
   * Sets the position mode of the component. By default, the Popup uses fixed positioning. To use absolute positioning, set this option to `absolute`.
   *
   * To support mobile browsers with the zoom option, use the `absolute` positioning of the Popup.
   * @default 'fixed'
   */
  positionMode = "fixed";
  /**
   * Sets the absolute position of the element ([see example](https://www.telerik.com/kendo-angular-ui/components/popup/aligning-positioning#aligning-to-absolute-points)).
   * The Popup opens next to this point. The Popup pivot point is defined by the `popupAlign` option. The boundary detection uses the window viewport.
   * @default '{ left: -10000, top: 0 }'
   */
  offset = DEFAULT_OFFSET;
  /**
   * Sets the margin value in pixels. Adds blank space between the Popup and the anchor ([see example](https://www.telerik.com/kendo-angular-ui/components/popup/aligning-positioning#adding-a-margin)).
   */
  margin;
  /**
   * Fires when the anchor scrolls outside the screen boundaries. ([See example](https://www.telerik.com/kendo-angular-ui/components/popup/closing)).
   */
  anchorViewportLeave = new EventEmitter();
  /**
   * Fires after the component closes.
   */
  close = new EventEmitter();
  /**
   * Fires after the component opens and the opening animation ends.
   */
  open = new EventEmitter();
  /**
   * Fires after the component is opened and the Popup is positioned.
   */
  positionChange = new EventEmitter();
  /**
   * @hidden
   */
  contentContainer;
  /**
   * @hidden
   */
  resizeSensor;
  /**
   * @hidden
   */
  content;
  /**
   * @hidden
   */
  renderDefaultClass = true;
  resolvedPromise = Promise.resolve(null);
  _currentOffset;
  animationSubscriptions;
  repositionSubscription;
  initialCheck = true;
  constructor(container, _alignService, domService, _positionService, _resizeService, _scrollableService, animationService, _renderer, _zone) {
    this.container = container;
    this._alignService = _alignService;
    this.domService = domService;
    this._positionService = _positionService;
    this._resizeService = _resizeService;
    this._scrollableService = _scrollableService;
    this.animationService = animationService;
    this._renderer = _renderer;
    this._zone = _zone;
    A(packageMetadata2);
    this._renderer.addClass(container.nativeElement, ANIMATION_CONTAINER);
    this.updateFixedClass();
  }
  ngOnInit() {
    this.reposition = this.reposition.bind(this);
    this._resizeService.subscribe(this.reposition);
    this.animationSubscriptions = this.animationService.start.subscribe(this.onAnimationStart.bind(this));
    this.animationSubscriptions.add(this.animationService.end.subscribe(this.onAnimationEnd.bind(this)));
    this._scrollableService.forElement(this.domService.nativeElement(this.anchor) || this.container.nativeElement).subscribe(this.onScroll.bind(this));
    this.currentOffset = DEFAULT_OFFSET;
    this.setZIndex();
    this.copyFontStyles();
    this.updateFixedClass();
    this.reposition();
  }
  ngOnChanges(changes) {
    if (changes.copyAnchorStyles) {
      this.copyFontStyles();
    }
    if (changes.positionMode) {
      this.updateFixedClass();
    }
  }
  ngAfterViewInit() {
    if (!this.animate) {
      this.resolvedPromise.then(() => {
        this.onAnimationEnd();
      });
    }
    this.reposition();
  }
  ngAfterViewChecked() {
    if (this.initialCheck) {
      this.initialCheck = false;
      return;
    }
    this._zone.runOutsideAngular(() => {
      this.unsubscribeReposition();
      this.repositionSubscription = from(this.resolvedPromise).subscribe(this.reposition);
    });
  }
  ngOnDestroy() {
    this.anchorViewportLeave.complete();
    this.positionChange.complete();
    this.close.emit();
    this.close.complete();
    this._resizeService.unsubscribe();
    this._scrollableService.unsubscribe();
    this.animationSubscriptions.unsubscribe();
    this.unsubscribeReposition();
  }
  /**
   * @hidden
   */
  onResize() {
    this.reposition();
  }
  onAnimationStart() {
    this._renderer.removeClass(this.container.nativeElement, "k-animation-container-shown");
  }
  onAnimationEnd() {
    this._renderer.addClass(this.container.nativeElement, "k-animation-container-shown");
    this.open.emit();
    this.open.complete();
  }
  get currentOffset() {
    return this._currentOffset;
  }
  set currentOffset(offset2) {
    this.setContainerStyle("left", `${offset2.left}px`);
    this.setContainerStyle("top", `${offset2.top}px`);
    this.setContainerStyle("margin", this.hasCustomOffset ? "0" : null);
    this._currentOffset = offset2;
  }
  setZIndex() {
    if (this.anchor) {
      this.setContainerStyle("z-index", String(this.domService.zIndex(this.domService.nativeElement(this.anchor), this.container)));
    }
  }
  reposition() {
    if (!isDocumentAvailable()) {
      return;
    }
    const {
      flip: flip2,
      offset: offset2
    } = this.position();
    if (!this.currentOffset || isDifferentOffset(this.currentOffset, offset2)) {
      this.currentOffset = offset2;
      if (hasObservers(this.positionChange)) {
        this._zone.run(() => this.positionChange.emit({
          offset: offset2,
          flip: flip2
        }));
      }
    }
    if (this.animate) {
      this.animationService.play(this.contentContainer.nativeElement, this.animate, flip2);
    }
    this.resizeSensor.acceptSize();
  }
  position() {
    const alignedOffset = this._alignService.alignElement({
      anchor: this.domService.nativeElement(this.anchor),
      anchorAlign: this.anchorAlign,
      element: this.container,
      elementAlign: this.popupAlign,
      margin: this.margin,
      offset: this.offset,
      positionMode: this.positionMode
    });
    return this._positionService.positionElement({
      anchor: this.domService.nativeElement(this.anchor),
      anchorAlign: this.anchorAlign,
      collisions: this.collision,
      currentLocation: alignedOffset,
      element: this.container,
      elementAlign: this.popupAlign,
      margin: this.margin
    });
  }
  onScroll(isInViewPort) {
    const hasLeaveObservers = hasObservers(this.anchorViewportLeave);
    if (isInViewPort || !hasLeaveObservers) {
      this.reposition();
    } else if (hasLeaveObservers) {
      this._zone.run(() => {
        this.anchorViewportLeave.emit();
      });
    }
  }
  copyFontStyles() {
    if (!this.anchor || !this.copyAnchorStyles) {
      return;
    }
    this.domService.getFontStyles(this.domService.nativeElement(this.anchor)).forEach((s) => this.setContainerStyle(s.key, s.value));
  }
  updateFixedClass() {
    const action = this.positionMode === "fixed" ? "addClass" : "removeClass";
    this._renderer[action](this.container.nativeElement, ANIMATION_CONTAINER_FIXED);
  }
  setContainerStyle(name, value) {
    if (value === null) {
      this._renderer.removeStyle(this.container.nativeElement, name);
      return;
    }
    this._renderer.setStyle(this.container.nativeElement, name, value);
  }
  unsubscribeReposition() {
    if (this.repositionSubscription) {
      this.repositionSubscription.unsubscribe();
    }
  }
  get hasCustomOffset() {
    return this.offset.left !== DEFAULT_OFFSET.left || this.offset.top !== DEFAULT_OFFSET.top;
  }
  static \u0275fac = function PopupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PopupComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(AlignService), \u0275\u0275directiveInject(DOMService), \u0275\u0275directiveInject(PositionService), \u0275\u0275directiveInject(ResizeService2), \u0275\u0275directiveInject(ScrollableService), \u0275\u0275directiveInject(AnimationService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PopupComponent,
    selectors: [["kendo-popup"]],
    viewQuery: function PopupComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 7)(ResizeSensorComponent, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentContainer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.resizeSensor = _t.first);
      }
    },
    inputs: {
      animate: "animate",
      anchor: "anchor",
      anchorAlign: "anchorAlign",
      collision: "collision",
      popupAlign: "popupAlign",
      copyAnchorStyles: "copyAnchorStyles",
      popupClass: "popupClass",
      positionMode: "positionMode",
      offset: "offset",
      margin: "margin"
    },
    outputs: {
      anchorViewportLeave: "anchorViewportLeave",
      close: "close",
      open: "open",
      positionChange: "positionChange"
    },
    exportAs: ["kendo-popup"],
    features: [\u0275\u0275ProvidersFeature([AlignService, AnimationService, DOMService, PositionService, ResizeService2, ScrollableService]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c12,
    decls: 6,
    vars: 5,
    consts: [["container", ""], [1, "k-child-animation-container"], [3, "ngClass"], [3, "ngTemplateOutlet"], [3, "resize", "rateLimit"]],
    template: function PopupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2, 0);
        \u0275\u0275projection(3);
        \u0275\u0275conditionalCreate(4, PopupComponent_Conditional_4_Template, 1, 1, null, 3);
        \u0275\u0275elementStart(5, "kendo-resize-sensor", 4);
        \u0275\u0275listener("resize", function PopupComponent_Template_kendo_resize_sensor_resize_5_listener() {
          return ctx.onResize();
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275classProp("k-popup", ctx.renderDefaultClass);
        \u0275\u0275property("ngClass", ctx.popupClass);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.content ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("rateLimit", 100);
      }
    },
    dependencies: [NgClass, NgTemplateOutlet, ResizeSensorComponent],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupComponent, [{
    type: Component,
    args: [{
      exportAs: "kendo-popup",
      providers: [AlignService, AnimationService, DOMService, PositionService, ResizeService2, ScrollableService],
      selector: "kendo-popup",
      template: `
        <div class="k-child-animation-container">
          <div [class.k-popup]="renderDefaultClass" [ngClass]="popupClass" #container>
            <ng-content></ng-content>
            @if (content) {
              <ng-template [ngTemplateOutlet]="content"></ng-template>
            }
            <kendo-resize-sensor [rateLimit]="100" (resize)="onResize()">
            </kendo-resize-sensor>
          </div>
        </div>
        `,
      standalone: true,
      imports: [NgClass, NgTemplateOutlet, ResizeSensorComponent]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: AlignService
  }, {
    type: DOMService
  }, {
    type: PositionService
  }, {
    type: ResizeService2
  }, {
    type: ScrollableService
  }, {
    type: AnimationService
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }], {
    animate: [{
      type: Input
    }],
    anchor: [{
      type: Input
    }],
    anchorAlign: [{
      type: Input
    }],
    collision: [{
      type: Input
    }],
    popupAlign: [{
      type: Input
    }],
    copyAnchorStyles: [{
      type: Input
    }],
    popupClass: [{
      type: Input
    }],
    positionMode: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    margin: [{
      type: Input
    }],
    anchorViewportLeave: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    open: [{
      type: Output
    }],
    positionChange: [{
      type: Output
    }],
    contentContainer: [{
      type: ViewChild,
      args: ["container", {
        static: true
      }]
    }],
    resizeSensor: [{
      type: ViewChild,
      args: [ResizeSensorComponent, {
        static: true
      }]
    }]
  });
})();
var removeElement = (element) => {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
};
var POPUP_CONTAINER = new InjectionToken("Popup Container");
var PopupService = class _PopupService {
  applicationRef;
  injector;
  container;
  /**
   * Gets the root view container for injecting the component.
   *
   * @returns {ComponentRef<any>} The root view container reference.
   */
  get rootViewContainer() {
    const rootComponents = this.applicationRef.components || [];
    if (rootComponents[0]) {
      return rootComponents[0];
    }
    throw new Error(`
            View Container not found! Inject the POPUP_CONTAINER or define a specific ViewContainerRef via the appendTo option.
            See https://www.telerik.com/kendo-angular-ui/components/popup/api/POPUP_CONTAINER/ for more details.
        `);
  }
  /**
   * Gets the HTML element of the root component container.
   *
   * @returns {HTMLElement} The root container HTML element.
   */
  get rootViewContainerNode() {
    return this.container ? this.container.nativeElement : this.getComponentRootNode(this.rootViewContainer);
  }
  constructor(applicationRef, injector, container) {
    this.applicationRef = applicationRef;
    this.injector = injector;
    this.container = container;
  }
  /**
   * Opens a Popup component. The Popup mounts in the DOM under the root application component.
   *
   * @param {PopupSettings} options - The options for the Popup.
   * @returns {ComponentRef<PopupComponent>} A reference to the Popup object.
   */
  open(options = {}) {
    const {
      component,
      nodes
    } = this.contentFrom(options.content);
    const popupComponentRef = this.appendPopup(nodes, options.appendTo);
    const popupInstance = popupComponentRef.instance;
    this.projectComponentInputs(popupComponentRef, options);
    popupComponentRef.changeDetectorRef.detectChanges();
    if (component) {
      component.changeDetectorRef.detectChanges();
    }
    const popupElement = this.getComponentRootNode(popupComponentRef);
    return {
      close: () => {
        if (component) {
          component.destroy();
        }
        popupComponentRef.destroy();
        try {
          removeElement(popupElement);
        } catch {
        }
      },
      content: component,
      popup: popupComponentRef,
      popupAnchorViewportLeave: popupInstance.anchorViewportLeave,
      popupClose: popupInstance.close,
      popupElement,
      popupOpen: popupInstance.open,
      popupPositionChange: popupInstance.positionChange
    };
  }
  appendPopup(nodes, container) {
    const popupComponentRef = this.createComponent(PopupComponent, nodes, container);
    if (!container) {
      this.rootViewContainerNode.appendChild(this.getComponentRootNode(popupComponentRef));
    }
    return popupComponentRef;
  }
  /**
   * Gets the HTML element for a component reference.
   *
   * @param {ComponentRef<any>} componentRef The component reference.
   * @returns {HTMLElement} The root HTML element of the component.
   */
  getComponentRootNode(componentRef) {
    return componentRef.location.nativeElement;
  }
  /**
   * Creates a component reference from a `Component` class.
   *
   * @param {*} componentClass The component class.
   * @param {*} nodes The nodes to project.
   * @param {ViewContainerRef} container The container to use.
   * @returns {ComponentRef<any>} The created component reference.
   */
  createComponent(componentClass, nodes, container) {
    if (container) {
      return container.createComponent(componentClass, {
        injector: this.injector,
        projectableNodes: nodes
      });
    } else {
      const environmentInjector = this.injector.get(EnvironmentInjector);
      const component = createComponent(componentClass, {
        environmentInjector,
        elementInjector: this.injector,
        projectableNodes: nodes
      });
      this.applicationRef.attachView(component.hostView);
      return component;
    }
  }
  /**
   * Projects the input options onto the component instance.
   *
   * @param {ComponentRef<any>} component The component reference.
   * @param {*} options The options to project.
   * @returns {ComponentRef<any>} The updated component reference.
   */
  projectComponentInputs(component, options) {
    Object.getOwnPropertyNames(options).filter((prop) => prop !== "content" || options.content instanceof TemplateRef).forEach((prop) => {
      component.instance[prop] = options[prop];
    });
    return component;
  }
  /**
   * Gets the component and nodes to append from the `content` option.
   *
   * @param {*} content The content to use.
   * @returns {any} The component and nodes for projection.
   */
  contentFrom(content) {
    if (!content || content instanceof TemplateRef) {
      return {
        component: null,
        nodes: [[]]
      };
    }
    const component = this.createComponent(content);
    const nodes = component ? [component.location.nativeElement] : [];
    return {
      component,
      nodes: [
        nodes
        // <ng-content>
      ]
    };
  }
  static \u0275fac = function PopupService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PopupService)(\u0275\u0275inject(ApplicationRef), \u0275\u0275inject(Injector), \u0275\u0275inject(POPUP_CONTAINER, 8));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PopupService,
    factory: _PopupService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ApplicationRef
  }, {
    type: Injector
  }, {
    type: ElementRef,
    decorators: [{
      type: Inject,
      args: [POPUP_CONTAINER]
    }, {
      type: Optional
    }]
  }], null);
})();
var KENDO_POPUP = [PopupComponent];
var PopupModule = class _PopupModule {
  static \u0275fac = function PopupModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PopupModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PopupModule,
    imports: [ResizeSensorComponent, PopupComponent],
    exports: [PopupComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [PopupService, ResizeBatchService],
    imports: [KENDO_RESIZESENSOR, KENDO_POPUP]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_POPUP],
      imports: [...KENDO_RESIZESENSOR, ...KENDO_POPUP],
      providers: [PopupService, ResizeBatchService]
    }]
  }], null, null);
})();

// node_modules/@progress/kendo-webspeech-common/dist/es/webspeech/speechrecognition.js
var START = "start";
var END = "end";
var RESULT = "result";
var ERROR = "error";
var DEFAULT_SPEECH_OPTIONS = {
  lang: "en-US",
  continuous: false,
  interimResults: false,
  maxAlternatives: 1,
  events: {
    [START]: null,
    [END]: null,
    [RESULT]: null,
    [ERROR]: null
  }
};
function getSpeechRecognitionCtor() {
  return window ? window.SpeechRecognition || window.webkitSpeechRecognition : void 0;
}
var KendoSpeechRecognition = class {
  constructor(options) {
    this.recognition = null;
    this.isListening = false;
    this.options = __spreadValues({}, DEFAULT_SPEECH_OPTIONS);
    this.handleResult = (event) => {
      this.triggerOnResult(event);
    };
    this.handleError = (event) => {
      this.triggerOnError(event);
    };
    this.handleEnd = () => {
      this.triggerOnEnd();
      this.isListening = false;
    };
    this.handleStart = () => {
      this.triggerOnStart();
      this.isListening = true;
    };
    this.init(options);
  }
  init(options) {
    const RecognitionCtor = getSpeechRecognitionCtor();
    if (!RecognitionCtor) {
      console.error("Speech recognition is not supported in this browser.");
      this.recognition = null;
      return;
    }
    this.recognition = new RecognitionCtor();
    this.setOptions(options);
    this.bindEvents();
  }
  destroy() {
    this.unbindEvents();
    this.isListening = false;
  }
  bindEvents() {
    if (!this.recognition) {
      return;
    }
    this.recognition.onresult = this.handleResult;
    this.recognition.onerror = this.handleError;
    this.recognition.onend = this.handleEnd;
    this.recognition.onstart = this.handleStart;
  }
  unbindEvents() {
    if (this.recognition) {
      this.recognition.onresult = null;
      this.recognition.onerror = null;
      this.recognition.onend = null;
      this.recognition.onstart = null;
      this.recognition.abort();
      this.recognition = null;
    }
  }
  setOptions(options) {
    if (!this.recognition) {
      return;
    }
    const mergedEvents = __spreadValues(__spreadValues({}, this.options.events), options.events);
    this.options = __spreadProps(__spreadValues(__spreadValues({}, this.options), options), {
      events: mergedEvents
    });
    const { lang, continuous, interimResults, maxAlternatives } = this.options;
    Object.assign(this.recognition, { lang, continuous, interimResults, maxAlternatives });
  }
  triggerOnStart() {
    if (this.options.events[START]) {
      this.options.events[START]();
    }
  }
  triggerOnEnd() {
    if (this.options.events[END]) {
      this.options.events[END]();
    }
  }
  triggerOnResult(event) {
    if (this.options.events[RESULT]) {
      this.options.events[RESULT](event);
    }
  }
  triggerOnError(event) {
    if (this.options.events[ERROR]) {
      this.options.events[ERROR](event);
    }
  }
  start() {
    if (this.recognition && !this.isListening) {
      this.recognition.start();
    }
  }
  stop() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
    }
  }
  abort() {
    if (this.recognition && this.isListening) {
      this.recognition.abort();
    }
  }
  isSupported() {
    return !!getSpeechRecognitionCtor();
  }
  isActive() {
    return this.isListening;
  }
};

// node_modules/@progress/kendo-smartpaste-common/dist/es/smartpaste/utils.js
var TRUTHY_VALUES = ["true", "yes", "on"];
var SMART_COMPONENT_EVENT_OPTIONS = {
  bubbles: true,
  detail: { fromSmartComponents: true }
};
var NATIVE_FORM_CONTROLS = ["input", "textarea", "select"];
function isHidden(element) {
  const computedStyle = window.getComputedStyle(element);
  return element.type === "hidden" || computedStyle.display === "none" || computedStyle.visibility === "hidden";
}
function isNativeFormControl(element) {
  return element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement;
}
function getFieldDescription(form, element, isCustomInput2 = false) {
  const fieldElement = isCustomInput2 ? element.querySelector(NATIVE_FORM_CONTROLS.join(",")) ?? element : element;
  const smartPasteDescription = fieldElement.getAttribute("data-smartpaste-description");
  if (smartPasteDescription) {
    return smartPasteDescription;
  }
  if (fieldElement.id) {
    const labels = form.querySelectorAll(`label[for='${fieldElement.id}']`);
    if (labels.length === 1) {
      const labelText = labels[0].textContent?.trim();
      if (labelText) {
        return labelText;
      }
    }
  }
  return fieldElement.getAttribute("name") ?? fieldElement.id ?? null;
}
function isCustomInput(element, options) {
  if (!options?.customInputs || !Array.isArray(options.customInputs)) {
    return false;
  }
  return options.customInputs.some((customInput) => element.matches(customInput.identifier) || element.closest(customInput.identifier));
}
function isRadioElement(element) {
  return element instanceof HTMLInputElement && element.type === "radio";
}
function getNativeFieldType(element) {
  if (element.type === "checkbox") {
    return "boolean";
  }
  if (element.type === "number") {
    return "number";
  }
  if (element instanceof HTMLSelectElement || isRadioElement(element)) {
    return "fixed-choices";
  }
  return "string";
}
function getSelectElementAllowedValues(element) {
  return Array.from(element.querySelectorAll("option")).filter((option) => Boolean(option.value)).map((option) => option.textContent ?? "");
}
function getRadioElementAllowedValues(identifier, formElement) {
  const radioInputs = Array.from(formElement.querySelectorAll("input[type=radio]"));
  return radioInputs.filter((input) => input.name === identifier).map((input) => getFieldDescription(formElement, input)).filter((description) => description !== null);
}
function getInputsSelector(kendoInputs) {
  const nativeControls = NATIVE_FORM_CONTROLS.join(",");
  if (!Array.isArray(kendoInputs) || kendoInputs.length === 0) {
    return nativeControls;
  }
  const kendoSelectors = kendoInputs.map((input) => input.identifier).join(",");
  return `${nativeControls},${kendoSelectors}`;
}
function findInputRadioByText(form, radioGroupName, valueText) {
  const radioInputs = Array.from(form.querySelectorAll("input[type=radio]"));
  const candidates = radioInputs.filter((input) => input.name === radioGroupName).map((input) => ({
    element: input,
    description: getFieldDescription(form, input)
  }));
  const exactMatch = candidates.find((candidate) => candidate.description === valueText);
  if (exactMatch) {
    return exactMatch.element;
  }
  const partialMatches = candidates.filter((candidate) => candidate.description && candidate.description.includes(valueText));
  return partialMatches.length === 1 ? partialMatches[0].element : null;
}
function setFormElementValueWithEvents(elem, value) {
  if (elem instanceof HTMLSelectElement) {
    updateSelectElement(elem, value.toString());
  } else if (elem instanceof HTMLInputElement && (elem.type === "radio" || elem.type === "checkbox")) {
    updateCheckableInput(elem, value);
  } else if (elem instanceof HTMLInputElement || elem instanceof HTMLTextAreaElement) {
    updateTextInput(elem, value);
  }
}
function isTruthyValue(value) {
  const valueString = value?.toString().toLowerCase();
  return TRUTHY_VALUES.includes(valueString);
}
function updateSelectElement(elem, value) {
  const newSelectedIndex = findSelectOptionByText(elem, value);
  if (newSelectedIndex !== null && elem.selectedIndex !== newSelectedIndex) {
    notifyFormElementBeforeWritten(elem);
    elem.selectedIndex = newSelectedIndex;
    notifyFormElementWritten(elem);
  }
}
function updateCheckableInput(elem, value) {
  const shouldCheck = isTruthyValue(value);
  if (elem.checked !== shouldCheck) {
    notifyFormElementBeforeWritten(elem);
    elem.checked = shouldCheck;
    notifyFormElementWritten(elem);
  }
}
function formatDateValue(stringValue) {
  const dateObj = new Date(stringValue);
  return !isNaN(dateObj.getTime()) ? dateObj.toISOString().split("T")[0] : stringValue;
}
function updateTextInput(elem, value) {
  const stringValue = value?.toString() ?? "";
  const finalValue = elem instanceof HTMLInputElement && elem.type === "date" ? formatDateValue(stringValue) : stringValue;
  if (elem.value !== finalValue) {
    notifyFormElementBeforeWritten(elem);
    elem.value = finalValue;
    notifyFormElementWritten(elem);
  }
}
function findSelectOptionByText(selectElem, valueText) {
  const options = Array.from(selectElem.querySelectorAll("option"));
  const exactMatch = options.find((option) => option.textContent === valueText);
  if (exactMatch) {
    return options.indexOf(exactMatch);
  }
  const partialMatches = options.filter((option) => option.textContent && option.textContent.includes(valueText));
  return partialMatches.length === 1 ? options.indexOf(partialMatches[0]) : null;
}
function notifyFormElementBeforeWritten(elem) {
  elem.dispatchEvent(new CustomEvent("beforeinput", SMART_COMPONENT_EVENT_OPTIONS));
}
function notifyFormElementWritten(elem) {
  elem.dispatchEvent(new CustomEvent("input", SMART_COMPONENT_EVENT_OPTIONS));
  elem.dispatchEvent(new CustomEvent("change", SMART_COMPONENT_EVENT_OPTIONS));
}

// node_modules/@progress/kendo-smartpaste-common/dist/es/smartpaste/smart-paste.js
var KendoSmartPaste = class {
  constructor(options) {
    this.options = options;
  }
  get formElement() {
    const element = this.options.getElement();
    return element?.closest("form") ?? null;
  }
  populateFormFields(response, formConfig) {
    if (!response.fieldValues) {
      return;
    }
    formConfig.forEach((formField) => {
      const fieldValues = response.fieldValues, rawValue = fieldValues[formField.field];
      if (rawValue === void 0 || rawValue === null) {
        return;
      }
      let stringValue;
      if (typeof rawValue === "string") {
        stringValue = rawValue;
      } else if (typeof rawValue === "number" || typeof rawValue === "boolean") {
        stringValue = String(rawValue);
      } else {
        return;
      }
      const trimmedValue = stringValue.trim();
      this.populateFormField(formField, trimmedValue);
    });
  }
  extractFormConfig() {
    if (!this.formElement) {
      return [];
    }
    const fields = [], inputsSelector = getInputsSelector(this.options.customInputs), elements = Array.from(this.formElement.querySelectorAll(inputsSelector));
    for (const element of elements) {
      let field = null;
      const isCustomInputElement = isCustomInput(element, this.options);
      if (isNativeFormControl(element) && !isCustomInputElement) {
        if (isHidden(element)) {
          continue;
        }
        field = this.processNativeFormControl(element);
      } else if (isCustomInputElement) {
        field = this.processCustomInput(element, fields);
      }
      if (field) {
        fields.push(field);
      }
    }
    return fields;
  }
  populateFormField(formField, value) {
    const isRadio = isRadioElement(formField.element);
    if (isRadio) {
      const element = formField.element, radioInput = findInputRadioByText(this.formElement, element.name, value);
      if (radioInput) {
        setFormElementValueWithEvents(radioInput, true);
      }
    } else if (formField.type === "kendo-input") {
      if (this.options.setKendoInputValue) {
        this.options.setKendoInputValue(formField, value);
      }
    } else {
      setFormElementValueWithEvents(formField.element, value);
    }
  }
  processNativeFormControl(element) {
    const isRadio = isRadioElement(element);
    const identifier = element.name || element.id;
    if (!identifier) {
      return null;
    }
    if (!isRadio) {
      const description = getFieldDescription(this.formElement, element);
      if (!description) {
        return null;
      }
    }
    const baseField = {
      field: identifier,
      description: isRadio ? null : getFieldDescription(this.formElement, element),
      element,
      type: getNativeFieldType(element)
    };
    if (element instanceof HTMLSelectElement) {
      return __spreadProps(__spreadValues({}, baseField), {
        allowedValues: getSelectElementAllowedValues(element)
      });
    }
    if (isRadio) {
      return __spreadProps(__spreadValues({}, baseField), {
        allowedValues: getRadioElementAllowedValues(identifier, this.formElement)
      });
    }
    return baseField;
  }
  processCustomInput(element, existingFields) {
    const field = element.id || element.getAttribute("name") || "", isDuplicate = existingFields.some((existingField) => existingField.field === field && existingField.element === element);
    if (!isDuplicate && this.options.getSmartPasteField) {
      const description = getFieldDescription(this.formElement, element, true);
      const smartPasteField = {
        field,
        description,
        element,
        type: "kendo-input"
      };
      return this.options.getSmartPasteField(smartPasteField) || null;
    }
    return null;
  }
};

// node_modules/@progress/kendo-angular-buttons/fesm2022/progress-kendo-angular-buttons.mjs
var _c03 = ["*"];
function ButtonComponent_ng_template_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-icon-wrapper", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", ctx_r0.icon)("svgIcon", ctx_r0.svgIcon);
  }
}
function ButtonComponent_ng_template_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275element(1, "img", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.imageUrl, \u0275\u0275sanitizeUrl);
  }
}
function ButtonComponent_ng_template_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.iconClass);
  }
}
function ButtonComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ButtonComponent_ng_template_0_Conditional_0_Template, 1, 2, "kendo-icon-wrapper", 4);
    \u0275\u0275conditionalCreate(1, ButtonComponent_ng_template_0_Conditional_1_Template, 2, 1, "span", 5);
    \u0275\u0275conditionalCreate(2, ButtonComponent_ng_template_0_Conditional_2_Template, 1, 1, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.icon || ctx_r0.svgIcon ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.imageUrl ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.iconClass ? 2 : -1);
  }
}
function ButtonComponent_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ButtonComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ButtonComponent_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const iconTemplate_r2 = \u0275\u0275reference(1);
    \u0275\u0275property("ngTemplateOutlet", iconTemplate_r2);
  }
}
function ButtonComponent_Conditional_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ButtonComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ButtonComponent_Conditional_5_ng_container_0_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const iconTemplate_r2 = \u0275\u0275reference(1);
    \u0275\u0275property("ngTemplateOutlet", iconTemplate_r2);
  }
}
function ButtonComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.arrowIcon.iconClass);
  }
}
function ButtonComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275element(1, "kendo-icon-wrapper", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r0.arrowIcon.icon || "chevron-down")("svgIcon", ctx_r0.arrowIcon.svgIcon || ctx_r0.chevronDownIcon);
  }
}
var _c13 = [[["", "kendoButton", ""]]];
var _c22 = ["[kendoButton]"];
function ChipComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-icon-wrapper", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("name", ctx_r0.icon)("svgIcon", ctx_r0.svgIcon);
  }
}
function ChipComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-icon-wrapper", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("customFontClass", ctx_r0.customIconClass);
  }
}
function ChipComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275element(1, "img", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate(ctx_r0.avatarSettings.imageSrc), \u0275\u0275sanitizeUrl)("ngStyle", ctx_r0.avatarSettings.imageCssStyle);
    \u0275\u0275attribute("alt", ctx_r0.avatarSettings.imageAltText);
  }
}
function ChipComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", ctx_r0.avatarSettings.initialsCssStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.avatarSettings.initials.substring(0, 2));
  }
}
function ChipComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275conditionalCreate(1, ChipComponent_Conditional_2_Conditional_1_Template, 2, 4, "span", 6);
    \u0275\u0275conditionalCreate(2, ChipComponent_Conditional_2_Conditional_2_Template, 2, 2, "span", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", ctx_r0.avatarSettings.cssStyle);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.avatarSettings == null ? null : ctx_r0.avatarSettings.imageSrc) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.avatarSettings == null ? null : ctx_r0.avatarSettings.initials) ? 2 : -1);
  }
}
function ChipComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label, " ");
  }
}
function ChipComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function ChipComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275listener("click", function ChipComponent_Conditional_6_Conditional_1_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onMenuClick($event));
    });
    \u0275\u0275element(1, "kendo-icon-wrapper", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", ctx_r0.defaultMenuIcon || ctx_r0.menuSvgIcon)("customFontClass", ctx_r0.menuIcon);
  }
}
function ChipComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275listener("click", function ChipComponent_Conditional_6_Conditional_2_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onRemoveClick($event));
    });
    \u0275\u0275element(1, "kendo-icon-wrapper", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", ctx_r0.removeSvgIcon || ctx_r0.defaultRemoveIcon)("customFontClass", ctx_r0.removeIcon);
  }
}
function ChipComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275conditionalCreate(1, ChipComponent_Conditional_6_Conditional_1_Template, 2, 2, "span", 9);
    \u0275\u0275conditionalCreate(2, ChipComponent_Conditional_6_Conditional_2_Template, 2, 2, "span", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasMenu ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.removable ? 2 : -1);
  }
}
var _c32 = (a0, a1) => ({
  templateRef: a0,
  $implicit: a1
});
function ListComponent_For_2_Conditional_1_ng_template_1_Template(rf, ctx) {
}
function ListComponent_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275template(1, ListComponent_For_2_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dataItem_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("k-disabled", dataItem_r4.disabled);
    \u0275\u0275property("ngClass", dataItem_r4.cssClass);
    \u0275\u0275advance();
    \u0275\u0275property("templateContext", \u0275\u0275pureFunction2(4, _c32, ctx_r2.itemTemplate == null ? null : ctx_r2.itemTemplate.templateRef, dataItem_r4));
  }
}
function ListComponent_For_2_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-icon-wrapper", 6);
  }
  if (rf & 2) {
    const dataItem_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("name", dataItem_r4.icon)("svgIcon", dataItem_r4.svgIcon)("customFontClass", dataItem_r4.iconClass);
  }
}
function ListComponent_For_2_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
  }
  if (rf & 2) {
    const dataItem_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("src", dataItem_r4.imageUrl, \u0275\u0275sanitizeUrl)("alt", dataItem_r4.imageAlt);
  }
}
function ListComponent_For_2_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dataItem_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getText(dataItem_r4), " ");
  }
}
function ListComponent_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275conditionalCreate(1, ListComponent_For_2_Conditional_2_Conditional_1_Template, 1, 3, "kendo-icon-wrapper", 6);
    \u0275\u0275conditionalCreate(2, ListComponent_For_2_Conditional_2_Conditional_2_Template, 1, 2, "img", 7);
    \u0275\u0275conditionalCreate(3, ListComponent_For_2_Conditional_2_Conditional_3_Template, 2, 1, "span", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dataItem_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("k-disabled", dataItem_r4.disabled);
    \u0275\u0275property("ngClass", dataItem_r4.cssClass);
    \u0275\u0275advance();
    \u0275\u0275conditional(dataItem_r4.icon || dataItem_r4.iconClass || dataItem_r4.svgIcon ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(dataItem_r4.imageUrl ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getText(dataItem_r4) ? 3 : -1);
  }
}
function ListComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 2);
    \u0275\u0275listener("click", function ListComponent_For_2_Template_li_click_0_listener($event) {
      const \u0275$index_3_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      $event.stopImmediatePropagation();
      return \u0275\u0275resetView(ctx_r2.onClick(\u0275$index_3_r2));
    })("blur", function ListComponent_For_2_Template_li_blur_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onBlur());
    });
    \u0275\u0275conditionalCreate(1, ListComponent_For_2_Conditional_1_Template, 2, 7, "span", 3);
    \u0275\u0275conditionalCreate(2, ListComponent_For_2_Conditional_2_Template, 4, 6, "span", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dataItem_r4 = ctx.$implicit;
    const \u0275$index_3_r2 = ctx.$index;
    const \u0275$count_3_r5 = ctx.$count;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("k-first", \u0275$index_3_r2 === 0)("k-last", \u0275$index_3_r2 === \u0275$count_3_r5 - 1);
    \u0275\u0275property("index", \u0275$index_3_r2);
    \u0275\u0275attribute("aria-disabled", dataItem_r4.disabled || null);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.itemTemplate == null ? null : ctx_r2.itemTemplate.templateRef) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(ctx_r2.itemTemplate == null ? null : ctx_r2.itemTemplate.templateRef) ? 2 : -1);
  }
}
var _c42 = ["button"];
var _c52 = ["buttonList"];
var _c62 = ["popupTemplate"];
var _c72 = ["container"];
function DropDownButtonComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "kendo-button-list", 5, 3);
    \u0275\u0275listener("onItemClick", function DropDownButtonComponent_ng_template_3_Template_kendo_button_list_onItemClick_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onItemClick($event));
    })("keydown", function DropDownButtonComponent_ng_template_3_Template_kendo_button_list_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.keyDownHandler($event));
    })("keyup", function DropDownButtonComponent_ng_template_3_Template_kendo_button_list_keyup_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.keyUpHandler($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("id", ctx_r1.listId)("data", ctx_r1.data)("textField", ctx_r1.textField)("itemTemplate", ctx_r1.itemTemplate)("size", ctx_r1.size);
    \u0275\u0275attribute("dir", ctx_r1.dir)("aria-labelledby", ctx_r1.buttonId);
  }
}
var _c82 = (a0, a1, a2) => ({
  $implicit: a0,
  index: a1,
  isFocused: a2
});
function DialItemComponent_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function DialItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DialItemComponent_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.dialItemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(2, _c82, ctx_r0.item, ctx_r0.index, ctx_r0.isFocused));
  }
}
function DialItemComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.item.label);
  }
}
function DialItemComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-icon-wrapper", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", ctx_r0.item.icon)("customFontClass", ctx_r0.item.iconClass)("svgIcon", ctx_r0.item.svgIcon);
  }
}
function DialItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DialItemComponent_Conditional_1_Conditional_0_Template, 2, 1, "span", 1);
    \u0275\u0275conditionalCreate(1, DialItemComponent_Conditional_1_Conditional_1_Template, 1, 3, "kendo-icon-wrapper", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.item.label ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.item.icon || ctx_r0.item.iconClass || ctx_r0.item.svgIcon ? 1 : -1);
  }
}
function DialListComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 0);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const \u0275$index_1_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("item", ctx_r2.dialItems[\u0275$index_1_r2])("index", \u0275$index_1_r2)("dialItemTemplate", ctx_r2.dialItemTemplate)("isFocused", ctx_r2.isFocused(\u0275$index_1_r2))("ngClass", item_r1.cssClass)("ngStyle", item_r1.cssStyle)("align", ctx_r2.align);
  }
}
var _c92 = (a0, a1, a2) => ({
  keydown: a0,
  click: a1,
  pointerdown: a2
});
var _c10 = (a0, a1) => ({
  keydown: a0,
  focusout: a1
});
function FloatingActionButtonComponent_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function FloatingActionButtonComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FloatingActionButtonComponent_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.fabTemplate == null ? null : ctx_r0.fabTemplate.templateRef);
  }
}
function FloatingActionButtonComponent_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-icon-wrapper", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", ctx_r0.icon)("customFontClass", ctx_r0.iconClass)("svgIcon", ctx_r0.svgIcon);
  }
}
function FloatingActionButtonComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.text);
  }
}
function FloatingActionButtonComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FloatingActionButtonComponent_Conditional_3_Conditional_0_Template, 1, 3, "kendo-icon-wrapper", 4);
    \u0275\u0275conditionalCreate(1, FloatingActionButtonComponent_Conditional_3_Conditional_1_Template, 2, 1, "span", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.icon || ctx_r0.iconClass || ctx_r0.svgIcon ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.text ? 1 : -1);
  }
}
function FloatingActionButtonComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 6);
    \u0275\u0275listener("click", function FloatingActionButtonComponent_ng_template_4_Template_ul_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onItemClick($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("id", ctx_r0.dialListId)("ngClass", ctx_r0.dialClass)("dialItems", ctx_r0.dialItems)("dialItemTemplate", ctx_r0.dialItemTemplate == null ? null : ctx_r0.dialItemTemplate.templateRef)("align", ctx_r0.align)("kendoEventsOutsideAngular", \u0275\u0275pureFunction2(7, _c10, ctx_r0.keyDownHandler.bind(ctx_r0), ctx_r0.focusOutHandler.bind(ctx_r0)));
    \u0275\u0275attribute("aria-labelledby", ctx_r0.id);
  }
}
function SplitButtonComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.text, " ");
  }
}
function SplitButtonComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "kendo-button-list", 9);
    \u0275\u0275listener("onItemClick", function SplitButtonComponent_ng_template_8_Template_kendo_button_list_onItemClick_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onItemClick($event));
    })("keydown", function SplitButtonComponent_ng_template_8_Template_kendo_button_list_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.keyDownHandler($event));
    })("keyup", function SplitButtonComponent_ng_template_8_Template_kendo_button_list_keyup_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.keyUpHandler($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("id", ctx_r1.listId)("data", ctx_r1.data)("textField", ctx_r1.textField)("itemTemplate", ctx_r1.itemTemplate);
    \u0275\u0275attribute("dir", ctx_r1.dir);
  }
}
function SmartPasteButtonComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-icon-wrapper", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("name", ctx_r0.icon)("svgIcon", ctx_r0.svgIcon);
  }
}
function SmartPasteButtonComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275element(1, "img", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.imageUrl, \u0275\u0275sanitizeUrl);
  }
}
function SmartPasteButtonComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.iconClass);
  }
}
var _c11 = ["thumb"];
var _c122 = ["resizeSensor"];
function SegmentedControlComponent_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-icon-wrapper", 5);
  }
  if (rf & 2) {
    const button_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("innerCssClass", button_r3["iconInnerCssClass"] ? "k-segmented-control-button-icon " + button_r3["iconInnerCssClass"] : "k-segmented-control-button-icon")("name", button_r3.icon)("svgIcon", button_r3.svgIcon);
  }
}
function SegmentedControlComponent_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const button_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(button_r3.text);
  }
}
function SegmentedControlComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", function SegmentedControlComponent_For_5_Template_button_click_0_listener() {
      const ctx_r1 = \u0275\u0275restoreView(_r1);
      const button_r3 = ctx_r1.$implicit;
      const \u0275$index_5_r4 = ctx_r1.$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.handleClick(button_r3, \u0275$index_5_r4));
    })("keydown", function SegmentedControlComponent_For_5_Template_button_keydown_0_listener($event) {
      const button_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.handleKeydown($event, button_r3));
    });
    \u0275\u0275conditionalCreate(1, SegmentedControlComponent_For_5_Conditional_1_Template, 1, 3, "kendo-icon-wrapper", 5);
    \u0275\u0275conditionalCreate(2, SegmentedControlComponent_For_5_Conditional_2_Template, 2, 1, "span", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const button_r3 = ctx.$implicit;
    const \u0275$index_5_r4 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classProp("k-disabled", button_r3.disabled)("k-selected", ctx_r4.selectedButtonIndex === \u0275$index_5_r4);
    \u0275\u0275attribute("aria-disabled", button_r3.disabled ? true : null)("title", button_r3.title)("aria-label", button_r3.title && !button_r3.text ? button_r3.title : null)("aria-pressed", ctx_r4.selectedButtonIndex === \u0275$index_5_r4 ? "true" : "false");
    \u0275\u0275advance();
    \u0275\u0275conditional(button_r3.icon || button_r3.svgIcon ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(button_r3.text ? 2 : -1);
  }
}
var KendoButtonService = class _KendoButtonService {
  buttonClicked = new Subject();
  buttonClicked$ = this.buttonClicked.asObservable();
  click(button) {
    this.buttonClicked.next(button);
  }
  static \u0275fac = function KendoButtonService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KendoButtonService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _KendoButtonService,
    factory: _KendoButtonService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KendoButtonService, [{
    type: Injectable
  }], null, null);
})();
var packageMetadata3 = {
  name: "@progress/kendo-angular-buttons",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1780593661,
  version: "24.1.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var resolvedPromise = Promise.resolve(null);
var isPresent3 = (value) => value !== null && value !== void 0;
function isDocumentNode(container) {
  return container.nodeType === 9;
}
function closest2(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }
  const matches = Element.prototype.matches ? (el, sel) => el.matches(sel) : (el, sel) => el.msMatchesSelector(sel);
  let node = element;
  while (node && !isDocumentNode(node)) {
    if (matches(node, selector)) {
      return node;
    }
    node = node.parentNode;
  }
}
var SIZES = {
  xsmall: "xs",
  small: "sm",
  medium: "md",
  large: "lg"
};
var ROUNDNESS = {
  small: "sm",
  medium: "md",
  large: "lg",
  full: "full",
  none: "none"
};
var getStylingClasses = (componentType, stylingOption, previousValue, newValue) => {
  switch (stylingOption) {
    case "size": {
      return {
        toRemove: previousValue ? `k-${componentType}-${SIZES[previousValue]}` : null,
        toAdd: newValue ? `k-${componentType}-${SIZES[newValue]}` : null
      };
    }
    case "rounded": {
      let roundedClassToAdd = null;
      if (newValue) {
        if (newValue !== "none") {
          roundedClassToAdd = `k-rounded-${ROUNDNESS[newValue]}`;
        } else {
          roundedClassToAdd = "k-rounded-none";
        }
      }
      return {
        toRemove: previousValue ? `k-rounded-${ROUNDNESS[previousValue]}` : null,
        toAdd: roundedClassToAdd || null
      };
    }
    case "fillMode": {
      return {
        toRemove: previousValue ? `k-${componentType}-${previousValue}` : null,
        toAdd: newValue ? `k-${componentType}-${newValue}` : null
      };
    }
    default:
      break;
  }
};
var getThemeColorClasses = (componentType, previousValue, newValue) => {
  return {
    toRemove: previousValue ? `k-${componentType}-${previousValue}` : null,
    toAdd: newValue ? `k-${componentType}-${newValue}` : null
  };
};
var toggleClass = (className, add, renderer, element) => {
  if (add) {
    renderer.addClass(element, className);
  } else {
    renderer.removeClass(element, className);
  }
};
var ButtonComponent = class _ButtonComponent {
  renderer;
  service;
  ngZone;
  /**
   * @hidden
   * @default false
   * required for DropDownButton arrow icon.
   */
  arrowIcon = false;
  /**
   * Adds visual styling to indicate when the Button is active.
   *
   * @default false
   */
  toggleable = false;
  /**
   * Backwards-compatible alias
   *
   * @hidden
   */
  get togglable() {
    return this.toggleable;
  }
  /**
   * @hidden
   */
  set togglable(value) {
    this.toggleable = value;
  }
  /**
   * Sets the selected state of the Button.
   * Use with the `toggleable` property.
   *
   * @default false
   */
  get selected() {
    return this._selected || false;
  }
  set selected(value) {
    this._selected = value;
  }
  /**
   * @hidden
   */
  set tabIndex(index) {
    this.element.tabIndex = index;
  }
  get tabIndex() {
    return this.element.tabIndex;
  }
  /**
   * Specifies a URL for an `img` element inside the Button.
   * The URL can be relative or absolute. If relative, it is evaluated with relation to the web page URL.
   */
  imageUrl;
  /**
   * Sets the icon position relative to the button text.
   * @hidden
   * @default 'start'
   */
  iconPosition = "start";
  /**
   * Defines a CSS class, or multiple classes separated by spaces applied to a `span` element inside the Button. Use the `iconClass` to add custom icons.
   */
  set iconClass(value) {
    if (isDevMode() && value && (this.icon || this.svgIcon)) {
      throw new Error("Setting both icon/svgIcon and iconClass options at the same time is not supported.");
    }
    this._iconClass = value;
  }
  get iconClass() {
    return this._iconClass;
  }
  /**
   * Sets the name of an existing font icon in the Kendo UI theme.
   */
  set icon(name) {
    if (isDevMode() && name && this.iconClass) {
      throw new Error("Setting both icon/svgIcon and iconClass options at the same time is not supported.");
    }
    this._icon = name;
  }
  get icon() {
    return this._icon;
  }
  /**
   * When `true`, disables the Button and prevents user interaction.
   *
   * @default false
   */
  set disabled(disabled) {
    if (disabled && isDocumentAvailable() && isFirefox(navigator.userAgent)) {
      this.blur();
    }
    this.isDisabled = disabled;
    this.renderer.setProperty(this.element, "disabled", disabled);
  }
  get disabled() {
    return this.isDisabled;
  }
  /**
   * Sets the padding of the Button.
   * See [Button Appearance](https://www.telerik.com/kendo-angular-ui/components/buttons/button/appearance#size). The default value is set by the Kendo theme.
   */
  set size(size) {
    this.handleClasses(size, "size");
    this._size = size;
  }
  get size() {
    return this._size;
  }
  /**
   * Sets the border radius of the Button.
   * See [Button Appearance](https://www.telerik.com/kendo-angular-ui/components/buttons/button/appearance#roundness). The default value is set by the Kendo theme.
   */
  set rounded(rounded) {
    this.handleClasses(rounded, "rounded");
    this._rounded = rounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Sets the background and border styles of the Button.
   * See [Button Appearance](https://www.telerik.com/kendo-angular-ui/components/buttons/button/appearance#fill-mode). The default value is set by the Kendo theme.
   */
  set fillMode(fillMode) {
    this.handleClasses(fillMode, "fillMode");
    this._fillMode = fillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * Sets a predefined theme color for the Button.
   * The theme color applies as a background and border color and adjusts the text color.
   * See [Button Appearance](https://www.telerik.com/kendo-angular-ui/components/buttons/button/appearance#theme-colors). The default value is set by the Kendo theme.
   */
  set themeColor(themeColor) {
    this.handleThemeColor(themeColor);
    this._themeColor = themeColor;
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * Sets an SVG icon to display inside the Button.
   */
  set svgIcon(icon) {
    if (isDevMode() && icon && this.iconClass) {
      throw new Error("Setting both icon/svgIcon and iconClass options at the same time is not supported.");
    }
    this._svgIcon = icon;
  }
  get svgIcon() {
    return this._svgIcon;
  }
  /**
   * Fires when the selected state of a toggleable button changes.
   * The event argument is the new selected state (`boolean`).
   */
  selectedChange = new EventEmitter();
  /**
   * Fires when the user clicks the Button.
   */
  click = new EventEmitter();
  element;
  isDisabled = false;
  chevronDownIcon = chevronDownIcon;
  _size = void 0;
  _rounded = void 0;
  _fillMode = void 0;
  _themeColor = void 0;
  _focused = false;
  direction;
  _selected;
  subs = new Subscription();
  _iconClass;
  _icon;
  _svgIcon;
  set isFocused(isFocused) {
    toggleClass("k-focus", isFocused, this.renderer, this.element);
    this._focused = isFocused;
  }
  get isFocused() {
    return this._focused;
  }
  get iconButtonClass() {
    const hasIcon = this.icon || this.iconClass || this.imageUrl || this.svgIcon;
    return hasIcon && !this.hasText;
  }
  get classDisabled() {
    return this.isDisabled;
  }
  get classActive() {
    return this.selected;
  }
  get getDirection() {
    return this.direction;
  }
  /**
   * @hidden
   */
  onFocus() {
    this.isFocused = true;
  }
  /**
   * @hidden
   */
  onBlur() {
    this.isFocused = false;
  }
  /**
   * Alias for ElementRef.nativeElement to workaround
   * ViewChild() selectors that used to return the host element before v11.
   *
   * @hidden
   */
  get nativeElement() {
    return this.element;
  }
  constructor(element, renderer, service, localization, ngZone) {
    this.renderer = renderer;
    this.service = service;
    this.ngZone = ngZone;
    A(packageMetadata3);
    this.direction = localization.rtl ? "rtl" : "ltr";
    this.subs.add(localization.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
    this.element = element.nativeElement;
  }
  ngOnInit() {
    this.renderer.addClass(this.element, "k-button");
    if (!this.element.hasAttribute("role") && this.togglable) {
      this.toggleAriaPressed(this.toggleable);
    }
    this.ngZone.runOutsideAngular(() => {
      this.subs.add(this.renderer.listen(this.element, "click", this._onButtonClick.bind(this)));
      this.subs.add(this.renderer.listen(this.element, "mousedown", (event) => {
        const isBrowserSafari = isDocumentAvailable() && isSafari(navigator.userAgent);
        if (!this.isDisabled && isBrowserSafari) {
          event.preventDefault();
          this.element.focus();
        }
      }));
    });
  }
  ngOnChanges(change) {
    if (isChanged("togglable", change) || isChanged("toggleable", change)) {
      this.toggleAriaPressed(this.toggleable);
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  /**
   * @hidden
   */
  get hasText() {
    return isDocumentAvailable() && this.element.textContent.trim().length > 0;
  }
  /**
   * Focuses the Button component.
   */
  focus() {
    if (isDocumentAvailable()) {
      this.element.focus();
      this.isFocused = true;
    }
  }
  /**
   * Removes focus from the Button component.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.element.blur();
      this.isFocused = false;
    }
  }
  /**
   * @hidden
   */
  setAttribute(attribute, value) {
    this.renderer.setAttribute(this.element, attribute, value);
  }
  /**
   * @hidden
   */
  removeAttribute(attribute) {
    this.renderer.removeAttribute(this.element, attribute);
  }
  /**
   * @hidden
   *
   * Internal setter that triggers selectedChange
   */
  setSelected(value) {
    const changed = this.selected !== value;
    this.selected = value;
    this.setAttribute("aria-pressed", this.selected.toString());
    toggleClass("k-selected", this.selected, this.renderer, this.element);
    if (changed && hasObservers(this.selectedChange)) {
      this.ngZone.run(() => {
        this.selectedChange.emit(value);
      });
    }
  }
  toggleAriaPressed(shouldSet) {
    if (!isDocumentAvailable()) {
      return;
    }
    if (shouldSet) {
      this.setAttribute("aria-pressed", this.selected.toString());
    } else {
      this.removeAttribute("aria-pressed");
    }
  }
  _onButtonClick() {
    if (!this.disabled && this.service) {
      this.ngZone.run(() => {
        this.service.click(this);
      });
    }
    if (this.togglable && !this.service) {
      this.setSelected(!this.selected);
    }
  }
  handleClasses(value, input) {
    const elem = this.element;
    const classes = getStylingClasses("button", input, this[input], value);
    if (input === "fillMode") {
      this.handleThemeColor(this.themeColor);
    }
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  handleThemeColor(value) {
    const elem = this.element;
    const themeColorClass = getThemeColorClasses("button", this.themeColor, value);
    if (themeColorClass.toRemove) {
      this.renderer.removeClass(elem, themeColorClass.toRemove);
    }
    if (themeColorClass.toAdd) {
      this.renderer.addClass(elem, themeColorClass.toAdd);
    }
  }
  static \u0275fac = function ButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(KendoButtonService, 8), \u0275\u0275directiveInject(LocalizationService), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ButtonComponent,
    selectors: [["button", "kendoButton", ""]],
    hostVars: 7,
    hostBindings: function ButtonComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focus", function ButtonComponent_focus_HostBindingHandler() {
          return ctx.onFocus();
        })("blur", function ButtonComponent_blur_HostBindingHandler() {
          return ctx.onBlur();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("dir", ctx.getDirection);
        \u0275\u0275classProp("k-icon-button", ctx.iconButtonClass)("k-disabled", ctx.classDisabled)("k-selected", ctx.classActive);
      }
    },
    inputs: {
      arrowIcon: "arrowIcon",
      toggleable: "toggleable",
      togglable: "togglable",
      selected: "selected",
      tabIndex: "tabIndex",
      imageUrl: "imageUrl",
      iconPosition: "iconPosition",
      iconClass: "iconClass",
      icon: "icon",
      disabled: "disabled",
      size: "size",
      rounded: "rounded",
      fillMode: "fillMode",
      themeColor: "themeColor",
      svgIcon: "svgIcon"
    },
    outputs: {
      selectedChange: "selectedChange",
      click: "click"
    },
    exportAs: ["kendoButton"],
    features: [\u0275\u0275ProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.button"
    }, {
      provide: KENDO_WEBMCP_HOST,
      useExisting: _ButtonComponent
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c03,
    decls: 8,
    vars: 4,
    consts: [["iconTemplate", ""], [1, "k-button-text"], [1, "k-button-icon", 3, "ngClass"], [1, "k-button-arrow"], ["innerCssClass", "k-button-icon", 3, "name", "svgIcon"], [1, "k-button-icon", "k-icon"], ["role", "presentation", 1, "k-image", 3, "src"], [4, "ngTemplateOutlet"], [3, "name", "svgIcon"]],
    template: function ButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, ButtonComponent_ng_template_0_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275conditionalCreate(2, ButtonComponent_Conditional_2_Template, 1, 1, "ng-container");
        \u0275\u0275elementStart(3, "span", 1);
        \u0275\u0275projection(4);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, ButtonComponent_Conditional_5_Template, 1, 1, "ng-container");
        \u0275\u0275conditionalCreate(6, ButtonComponent_Conditional_6_Template, 1, 1, "span", 2);
        \u0275\u0275conditionalCreate(7, ButtonComponent_Conditional_7_Template, 2, 2, "span", 3);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.iconPosition === "start" ? 2 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.iconPosition === "end" ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.arrowIcon.iconClass ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.arrowIcon && !ctx.arrowIcon.iconClass ? 7 : -1);
      }
    },
    dependencies: [IconWrapperComponent, NgClass, NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoButton",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.button"
      }, {
        provide: KENDO_WEBMCP_HOST,
        useExisting: ButtonComponent
      }],
      selector: "button[kendoButton]",
      template: `
        <ng-template #iconTemplate>
            @if (icon || svgIcon) {
                <kendo-icon-wrapper
                    innerCssClass="k-button-icon"
                    [name]="icon"
                    [svgIcon]="svgIcon">
                </kendo-icon-wrapper>
            }
            @if (imageUrl) {
                <span class="k-button-icon k-icon">
                    <img [src]="imageUrl" class="k-image" role="presentation" />
                </span>
            }
            @if (iconClass) {
                <span class="k-button-icon" [ngClass]="iconClass"></span>
            }
        </ng-template>
        @if (iconPosition === 'start') {
            <ng-container *ngTemplateOutlet="iconTemplate"></ng-container>
        }
        <span class="k-button-text">
            <ng-content></ng-content>
        </span>
        @if (iconPosition === 'end') {
            <ng-container *ngTemplateOutlet="iconTemplate"></ng-container>
        }
        @if ($any(arrowIcon).iconClass) {
            <span class="k-button-icon" [ngClass]="$any(arrowIcon).iconClass"></span>
        }
        @if (arrowIcon && !$any(arrowIcon).iconClass) {
            <span class="k-button-arrow">
                <kendo-icon-wrapper
                    [name]="$any(arrowIcon).icon || 'chevron-down'"
                    [svgIcon]="$any(arrowIcon).svgIcon || chevronDownIcon">
                </kendo-icon-wrapper>
            </span>
        }

        `,
      standalone: true,
      imports: [IconWrapperComponent, NgClass, NgTemplateOutlet]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: KendoButtonService,
    decorators: [{
      type: Optional
    }]
  }, {
    type: LocalizationService
  }, {
    type: NgZone
  }], {
    arrowIcon: [{
      type: Input
    }],
    toggleable: [{
      type: Input
    }],
    togglable: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    imageUrl: [{
      type: Input
    }],
    iconPosition: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    click: [{
      type: Output
    }],
    iconButtonClass: [{
      type: HostBinding,
      args: ["class.k-icon-button"]
    }],
    classDisabled: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    classActive: [{
      type: HostBinding,
      args: ["class.k-selected"]
    }],
    getDirection: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus"]
    }],
    onBlur: [{
      type: HostListener,
      args: ["blur"]
    }]
  });
})();
var PreventableEvent2 = class {
  prevented = false;
  /**
   * Prevents the default action for a specified event.
   * In this way, the source component suppresses the built-in behavior that follows the event.
   */
  preventDefault() {
    this.prevented = true;
  }
  /**
   * If the event is prevented by any of its subscribers, returns `true`.
   *
   * @returns `true` if the default action was prevented. Otherwise, returns `false`.
   */
  isDefaultPrevented() {
    return this.prevented;
  }
};
var tabindex = "tabindex";
var ButtonGroupComponent = class _ButtonGroupComponent {
  service;
  renderer;
  element;
  /**
   * To disable a specific button, set **only** its `disabled` property to `true`.
   * If you also set the ButtonGroup `disabled` property, it takes precedence over
   * the `disabled` properties of the underlying buttons and they are ignored.
   */
  disabled;
  /**
   * Sets the selection mode of the ButtonGroup.
   *
   * @default 'multiple'
   */
  selection = "multiple";
  /**
   * Sets the width of the ButtonGroup.
   * When set, the buttons resize automatically to fill the full width of the group wrapper and acquire the same width.
   */
  width;
  /**
   * Specifies the [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
   *
   * @default 0
   */
  set tabIndex(value) {
    this._tabIndex = value;
    this.currentTabIndex = value;
  }
  get tabIndex() {
    return this._tabIndex;
  }
  /**
   * When set to `true`, the component is a single tab-stop,
   * and focus moves through the inner buttons using the arrow keys.
   *
   * When set to `false`, the inner buttons are part of the natural tab sequence of the page.
   *
   * @default true
   *
   * @remarks
   * This property is related to accessibility.
   */
  navigable = true;
  /**
   * Fires every time keyboard navigation occurs within the ButtonGroup.
   */
  navigate = new EventEmitter();
  buttons;
  _tabIndex = 0;
  currentTabIndex = 0;
  lastFocusedIndex = -1;
  direction;
  subs = new Subscription();
  wrapperClasses = true;
  get disabledClass() {
    return this.disabled;
  }
  get stretchedClass() {
    return !!this.width;
  }
  role = "group";
  get dir() {
    return this.direction;
  }
  get ariaDisabled() {
    return this.disabled;
  }
  get wrapperWidth() {
    return this.width;
  }
  get wrapperTabIndex() {
    if (this.disabled) {
      return void 0;
    }
    return this.navigable ? this.currentTabIndex : void 0;
  }
  constructor(service, localization, renderer, element) {
    this.service = service;
    this.renderer = renderer;
    this.element = element;
    A(packageMetadata3);
    this.subs.add(localization.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
  }
  ngOnInit() {
    this.subs.add(this.service.buttonClicked$.subscribe((button) => {
      let newSelectionValue;
      if (this.isSelectionSingle()) {
        newSelectionValue = true;
        this.deactivate(this.buttons.filter((current) => current !== button));
      } else {
        if (this.navigable) {
          this.defocus(this.buttons.toArray());
        }
        newSelectionValue = !button.selected;
      }
      if (button.togglable) {
        button.setSelected(newSelectionValue);
      }
      if (this.navigable) {
        this.currentTabIndex = -1;
        this.renderer.setAttribute(button, tabindex, "0");
      }
    }));
    this.handleSubs("focus", () => this.navigable, this.focusHandler);
    this.handleSubs("keydown", () => this.navigable && !this.disabled, (event) => this.navigateFocus(event));
    this.handleSubs("focusout", (event) => this.navigable && event.relatedTarget && event.relatedTarget.parentNode !== this.element.nativeElement, () => {
      this.lastFocusedIndex = this.buttons.toArray().findIndex((button) => button.tabIndex !== -1);
      this.defocus(this.buttons.toArray());
      this.currentTabIndex = this.tabIndex;
    });
    this.subs.add(fromEvent(this.element.nativeElement, "focusout").pipe(filter((event) => this.navigable && event.relatedTarget && event.relatedTarget.parentNode !== this.element.nativeElement)).subscribe(() => {
      this.defocus(this.buttons.toArray());
      this.currentTabIndex = this.tabIndex;
    }));
  }
  ngOnChanges(changes) {
    if (isChanged("disabled", changes)) {
      this.buttons.forEach((button) => {
        if (isPresent3(this.disabled)) {
          button.disabled = this.disabled;
        }
      });
    }
    if (isChanged("navigable", changes)) {
      if (changes["navigable"].currentValue) {
        this.defocus(this.buttons.toArray());
        this.currentTabIndex = 0;
      } else {
        this.currentTabIndex = -1;
        this.buttons.forEach((button) => this.renderer.setAttribute(button, tabindex, "0"));
      }
    }
  }
  ngAfterContentInit() {
    if (!this.navigable) {
      return;
    }
    this.defocus(this.buttons.toArray());
  }
  ngAfterViewChecked() {
    if (this.buttons.length) {
      this.renderer.addClass(this.buttons.first.element, "k-group-start");
      this.renderer.addClass(this.buttons.last.element, "k-group-end");
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  ngAfterContentChecked() {
    this.verifySettings();
  }
  navigateFocus(event) {
    const navigationButtons = this.buttons.toArray().filter((button) => !button.disabled);
    const focusedIndex = navigationButtons.findIndex((current) => current.element.tabIndex !== -1);
    const firstIndex = 0;
    const lastIndex = navigationButtons.length - 1;
    const eventArgs = new PreventableEvent2();
    const code = normalizeKeys(event);
    if (code === Keys.ArrowRight && focusedIndex < lastIndex) {
      this.navigate.emit(eventArgs);
      if (!eventArgs.isDefaultPrevented()) {
        this.defocus(navigationButtons);
        this.focus(navigationButtons.filter((_current, index) => {
          return index === focusedIndex + 1;
        }));
      }
    }
    if (code === Keys.ArrowLeft && focusedIndex > firstIndex) {
      this.navigate.emit(eventArgs);
      if (!eventArgs.isDefaultPrevented()) {
        this.defocus(navigationButtons);
        this.focus(navigationButtons.filter((_current, index) => {
          return index === focusedIndex - 1;
        }));
      }
    }
  }
  deactivate(buttons) {
    buttons.forEach((button) => {
      button.setSelected(false);
      if (this.navigable) {
        this.renderer.setAttribute(button, tabindex, "-1");
      }
    });
  }
  activate(buttons) {
    buttons.forEach((button) => {
      button.setSelected(true);
      if (this.navigable) {
        this.renderer.setAttribute(button, tabindex, "0");
      }
      button.focus();
    });
  }
  defocus(buttons) {
    buttons.forEach((button) => {
      this.renderer.setAttribute(button, tabindex, "-1");
    });
  }
  focus(buttons) {
    buttons.forEach((button) => {
      this.renderer.setAttribute(button, tabindex, "0");
      button.focus();
    });
  }
  verifySettings() {
    if (isDevMode()) {
      if (this.isSelectionSingle() && this.buttons.filter((button) => button.selected).length > 1) {
        throw new Error("Having multiple selected buttons with single selection mode is not supported");
      }
    }
  }
  isSelectionSingle() {
    return this.selection === "single";
  }
  handleSubs(eventName, predicate, handler) {
    this.subs.add(fromEvent(this.element.nativeElement, eventName).pipe(filter(predicate)).subscribe(handler));
  }
  focusHandler = () => {
    this.currentTabIndex = -1;
    this.defocus(this.buttons.toArray());
    const firstFocusableIndex = this.buttons.toArray().findIndex((current) => !current.disabled);
    const index = this.lastFocusedIndex === -1 ? firstFocusableIndex : this.lastFocusedIndex;
    this.focus(this.buttons.filter((_current, i) => {
      return i === index;
    }));
  };
  static \u0275fac = function ButtonGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonGroupComponent)(\u0275\u0275directiveInject(KendoButtonService), \u0275\u0275directiveInject(LocalizationService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ButtonGroupComponent,
    selectors: [["kendo-buttongroup"]],
    contentQueries: function ButtonGroupComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, ButtonComponent, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.buttons = _t);
      }
    },
    hostVars: 12,
    hostBindings: function ButtonGroupComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role)("dir", ctx.dir)("aria-disabled", ctx.ariaDisabled)("tabindex", ctx.wrapperTabIndex);
        \u0275\u0275styleProp("width", ctx.wrapperWidth);
        \u0275\u0275classProp("k-button-group", ctx.wrapperClasses)("k-disabled", ctx.disabledClass)("k-button-group-stretched", ctx.stretchedClass);
      }
    },
    inputs: {
      disabled: "disabled",
      selection: "selection",
      width: "width",
      tabIndex: "tabIndex",
      navigable: "navigable"
    },
    outputs: {
      navigate: "navigate"
    },
    exportAs: ["kendoButtonGroup"],
    features: [\u0275\u0275ProvidersFeature([KendoButtonService, LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.buttongroup"
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c22,
    decls: 1,
    vars: 0,
    template: function ButtonGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c13);
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroupComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoButtonGroup",
      providers: [KendoButtonService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.buttongroup"
      }],
      selector: "kendo-buttongroup",
      template: `
        <ng-content select="[kendoButton]"></ng-content>
    `,
      standalone: true
    }]
  }], () => [{
    type: KendoButtonService
  }, {
    type: LocalizationService
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    disabled: [{
      type: Input,
      args: ["disabled"]
    }],
    selection: [{
      type: Input,
      args: ["selection"]
    }],
    width: [{
      type: Input,
      args: ["width"]
    }],
    tabIndex: [{
      type: Input
    }],
    navigable: [{
      type: Input
    }],
    navigate: [{
      type: Output
    }],
    buttons: [{
      type: ContentChildren,
      args: [ButtonComponent]
    }],
    wrapperClasses: [{
      type: HostBinding,
      args: ["class.k-button-group"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    stretchedClass: [{
      type: HostBinding,
      args: ["class.k-button-group-stretched"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    ariaDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    wrapperWidth: [{
      type: HostBinding,
      args: ["style.width"]
    }],
    wrapperTabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }]
  });
})();
var ChipComponent = class _ChipComponent {
  element;
  renderer;
  ngZone;
  localizationService;
  /**
   * Sets the label text of the Chip.
   *
   * @remarks
   * This property is related to accessibility.
   */
  label;
  /**
   * Defines the name for an existing icon in a Kendo UI theme.
   * The icon is rendered inside the Chip by a `span.k-icon` element.
   */
  icon;
  /**
   * Defines an [`SVGIcon`](https://www.telerik.com/kendo-angular-ui/components/icons/api/svgicon) to render inside the Chip using
   * a [`KendoSVGIcon`](https://www.telerik.com/kendo-angular-ui/components/icons/api/svgiconcomponent) component.
   */
  svgIcon;
  /**
   * Defines a CSS class, or multiple classes separated by spaces,
   * applied to a `span` element. Use the `iconClass` to add custom icons.
   */
  iconClass;
  /**
   * Use these settings to render an avatar within the Chip.
   */
  avatarSettings;
  /**
   * Specifies the selected state of the Chip.
   * @default false
   */
  selected = false;
  /**
   * Specifies if the Chip is removable.
   * If set to `true`, the Chip renders a remove icon.
   * @default false
   */
  removable = false;
  /**
   * Specifies a custom remove font icon class to render when the Chip is removable.
   * [see example](https://www.telerik.com/kendo-angular-ui/components/styling/icons)
   */
  removeIcon;
  /**
   * Specifies a custom remove SVG icon to render when the Chip is removable.
   */
  removeSvgIcon;
  /**
   * @hidden
   *
   * Determines whether the Chip has a menu.
   */
  hasMenu = false;
  /**
   * @hidden
   *
   * Specifies a custom menu font icon class to render when the Chip has a menu.
   */
  menuIcon;
  /**
   * @hidden
   *
   * Specifies a custom menu SVG icon to render when the Chip has a menu.
   */
  menuSvgIcon;
  /**
   * If set to `true`, the Chip is disabled.
   * @default false
   */
  disabled = false;
  /**
   * Sets the padding of the Chip.
   * See [Chip Appearance](https://www.telerik.com/kendo-angular-ui/components/buttons/chip/appearance#size). The default value is set by the Kendo theme.
   */
  set size(size) {
    !this.sizeIsSet && (this.sizeIsSet = true);
    this.handleClasses(size, "size");
    this._size = size;
  }
  get size() {
    return this._size;
  }
  /**
   * Sets the border radius of the Chip.
   * See [Chip Appearance](https://www.telerik.com/kendo-angular-ui/components/buttons/chip/appearance#roundness). The default value is set by the Kendo theme.
   */
  set rounded(rounded) {
    this.handleClasses(rounded, "rounded");
    this._rounded = rounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Sets the background and border styles of the Chip.
   * See [Chip Appearance](https://www.telerik.com/kendo-angular-ui/components/buttons/chip/appearance#fill-mode). The default value is set by the Kendo theme.
   */
  set fillMode(fillMode) {
    this.handleClasses(fillMode, "fillMode");
    this._fillMode = fillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * Sets a predefined theme color for the Chip.
   * The theme color applies as a background and border color and adjusts the text color.
   * See [Chip Appearance](https://www.telerik.com/kendo-angular-ui/components/buttons/chip/appearance#theme-colors). The default value is set by the Kendo theme.
   */
  set themeColor(themeColor) {
    this.handleThemeColor(themeColor);
    this._themeColor = themeColor;
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * Fires when the user clicks the remove icon of the Chip.
   */
  remove = new EventEmitter();
  /**
   * @hidden
   *
   * Fires when the user clicks the menu icon of the Chip.
   */
  menuToggle = new EventEmitter();
  /**
   * Fires when the user clicks the content of the Chip.
   */
  contentClick = new EventEmitter();
  tabIndex = 0;
  hostClass = true;
  get disabledClass() {
    return this.disabled || null;
  }
  get selectedClass() {
    return this.selected;
  }
  get focusedClass() {
    return this.focused;
  }
  /**
   * @hidden
   */
  direction;
  /**
   * @hidden
   */
  defaultRemoveIcon = xCircleIcon;
  /**
   * @hidden
   */
  defaultMenuIcon = moreVerticalIcon;
  /**
   * @hidden
   */
  sizeIsSet = false;
  _size = void 0;
  _rounded = void 0;
  _fillMode = void 0;
  _themeColor = void 0;
  focused = false;
  subs = new Subscription();
  constructor(element, renderer, ngZone, localizationService) {
    this.element = element;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.localizationService = localizationService;
    A(packageMetadata3);
    this.direction = localizationService.rtl ? "rtl" : "ltr";
  }
  ngOnInit() {
    this.subs.add(this.localizationService.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
    this.renderer.setAttribute(this.element.nativeElement, "role", "button");
    this.renderer.setAttribute(this.element.nativeElement, "aria-pressed", `${this.selected}`);
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  ngOnChanges(changes) {
    if (changes?.["selected"]) {
      const hasAriaSelected = this.element.nativeElement.hasAttribute("aria-selected");
      if (!hasAriaSelected) {
        this.renderer.setAttribute(this.element.nativeElement, "aria-pressed", `${this.selected}`);
      }
    }
  }
  ngAfterViewInit() {
    const chip = this.element.nativeElement;
    this.attachElementEventHandlers(chip);
  }
  /**
   * @hidden
   */
  get kendoIconClass() {
    this.verifyIconSettings([this.iconClass]);
    return `k-i-${this.icon}`;
  }
  /**
   * @hidden
   */
  get customIconClass() {
    this.verifyIconSettings([this.icon]);
    return this.iconClass;
  }
  /**
   * @hidden
   */
  get removeIconClass() {
    return this.removeIcon ? this.removeIcon : "k-i-x-circle";
  }
  /**
   * Focuses the Chip component.
   */
  focus() {
    if (isDocumentAvailable()) {
      this.element.nativeElement.focus();
    }
  }
  /**
   * Blurs the Chip component.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.element.nativeElement.blur();
    }
  }
  /**
   * @hidden
   */
  onRemoveClick(e) {
    if (this.removable) {
      this.remove.emit({
        sender: this,
        originalEvent: e
      });
    }
  }
  /**
   * @hidden
   */
  onMenuClick(e) {
    if (this.hasMenu) {
      this.menuToggle.emit({
        sender: this,
        originalEvent: e
      });
    }
  }
  attachElementEventHandlers(chip) {
    this.ngZone.runOutsideAngular(() => {
      this.subs.add(this.renderer.listen(chip, "focus", () => {
        this.renderer.addClass(chip, "k-focus");
      }));
      this.subs.add(this.renderer.listen(chip, "blur", () => {
        this.renderer.removeClass(chip, "k-focus");
      }));
      this.subs.add(this.renderer.listen(chip, "click", (e) => {
        const isActionClicked = closest2(e.target, ".k-chip-action");
        if (!isActionClicked) {
          this.ngZone.run(() => {
            this.contentClick.emit({
              sender: this,
              originalEvent: e
            });
          });
        }
      }));
      this.subs.add(this.renderer.listen(chip, "keydown", this.keyDownHandler.bind(this)));
    });
  }
  /**
   * @hidden
   */
  verifyIconSettings(iconsToCheck) {
    if (isDevMode()) {
      if (iconsToCheck.filter((icon) => icon !== null && icon !== void 0).length > 0) {
        this.renderer.removeClass(this.element.nativeElement, "k-chip-has-icon");
        throw new Error("Invalid configuration: Having multiple icons is not supported. Only a single icon on a chip can be displayed.");
      }
    }
  }
  handleClasses(value, input) {
    const elem = this.element.nativeElement;
    const classes = getStylingClasses("chip", input, this[input], value);
    if (input === "fillMode") {
      this.handleThemeColor(this.themeColor);
    }
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  handleThemeColor(value) {
    const elem = this.element.nativeElement;
    const themeColorClass = getThemeColorClasses("chip", this.themeColor, value);
    if (themeColorClass.toRemove) {
      this.renderer.removeClass(elem, themeColorClass.toRemove);
    }
    if (themeColorClass.toAdd) {
      this.renderer.addClass(elem, themeColorClass.toAdd);
    }
  }
  keyDownHandler(e) {
    const code = normalizeKeys(e);
    const isEnterOrSpace = code === Keys.Enter || code === Keys.Space;
    const isDeleteOrBackspace = code === Keys.Delete || code === Keys.Backspace;
    if (this.disabled) {
      return;
    }
    if (isEnterOrSpace) {
      this.ngZone.run(() => {
        this.contentClick.emit({
          sender: this,
          originalEvent: e
        });
      });
    } else if (isDeleteOrBackspace && this.removable) {
      this.ngZone.run(() => {
        this.remove.emit({
          sender: this,
          originalEvent: e
        });
      });
    }
  }
  static \u0275fac = function ChipComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChipComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(LocalizationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ChipComponent,
    selectors: [["kendo-chip"]],
    hostVars: 11,
    hostBindings: function ChipComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("tabindex", ctx.tabIndex)("aria-disabled", ctx.disabledClass)("dir", ctx.direction);
        \u0275\u0275classProp("k-chip", ctx.hostClass)("k-disabled", ctx.disabledClass)("k-selected", ctx.selectedClass)("k-focus", ctx.focusedClass);
      }
    },
    inputs: {
      label: "label",
      icon: "icon",
      svgIcon: "svgIcon",
      iconClass: "iconClass",
      avatarSettings: "avatarSettings",
      selected: "selected",
      removable: "removable",
      removeIcon: "removeIcon",
      removeSvgIcon: "removeSvgIcon",
      hasMenu: "hasMenu",
      menuIcon: "menuIcon",
      menuSvgIcon: "menuSvgIcon",
      disabled: "disabled",
      size: "size",
      rounded: "rounded",
      fillMode: "fillMode",
      themeColor: "themeColor"
    },
    outputs: {
      remove: "remove",
      menuToggle: "menuToggle",
      contentClick: "contentClick"
    },
    features: [\u0275\u0275ProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.chip"
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c03,
    decls: 7,
    vars: 6,
    consts: [["size", "small", "innerCssClass", "k-chip-icon", 3, "name", "svgIcon"], ["size", "small", "innerCssClass", "k-chip-icon", 3, "customFontClass"], [1, "k-chip-avatar", "k-avatar", 3, "ngStyle"], [1, "k-chip-content"], [1, "k-chip-label"], [1, "k-chip-actions"], [1, "k-avatar-image"], [1, "k-avatar-text", 3, "ngStyle"], [3, "src", "ngStyle"], [1, "k-chip-action", "k-chip-more-action"], [1, "k-chip-action", "k-chip-remove-action"], [1, "k-chip-action", "k-chip-more-action", 3, "click"], ["name", "more-vertical", "size", "small", 3, "svgIcon", "customFontClass"], [1, "k-chip-action", "k-chip-remove-action", 3, "click"], ["name", "x-circle", "size", "small", 3, "svgIcon", "customFontClass"]],
    template: function ChipComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, ChipComponent_Conditional_0_Template, 1, 2, "kendo-icon-wrapper", 0);
        \u0275\u0275conditionalCreate(1, ChipComponent_Conditional_1_Template, 1, 1, "kendo-icon-wrapper", 1);
        \u0275\u0275conditionalCreate(2, ChipComponent_Conditional_2_Template, 3, 3, "span", 2);
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275conditionalCreate(4, ChipComponent_Conditional_4_Template, 2, 1, "span", 4);
        \u0275\u0275conditionalCreate(5, ChipComponent_Conditional_5_Template, 1, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, ChipComponent_Conditional_6_Template, 3, 2, "span", 5);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.icon || ctx.svgIcon ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.iconClass ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.avatarSettings ? 2 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.label ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.label ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.hasMenu || ctx.removable ? 6 : -1);
      }
    },
    dependencies: [NgStyle, IconWrapperComponent],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipComponent, [{
    type: Component,
    args: [{
      selector: "kendo-chip",
      template: `
        @if (icon || svgIcon) {
          <kendo-icon-wrapper
            size="small"
            innerCssClass="k-chip-icon"
            [name]="icon"
          [svgIcon]="svgIcon"></kendo-icon-wrapper>
        }

        @if (iconClass) {
          <kendo-icon-wrapper
            size="small"
            innerCssClass="k-chip-icon"
          [customFontClass]="customIconClass"></kendo-icon-wrapper>
        }
        @if (avatarSettings) {
          <span
            class="k-chip-avatar k-avatar"
            [ngStyle]="avatarSettings.cssStyle">
            @if (avatarSettings?.imageSrc) {
              <span class="k-avatar-image">
                <img src="{{ avatarSettings.imageSrc }}" [ngStyle]="avatarSettings.imageCssStyle" [attr.alt]="avatarSettings.imageAltText" />
              </span>
            }
            @if (avatarSettings?.initials) {
              <span class="k-avatar-text" [ngStyle]="avatarSettings.initialsCssStyle">{{ avatarSettings.initials.substring(0, 2) }}</span>
            }
          </span>
        }

        <span class="k-chip-content">
          @if (label) {
            <span class="k-chip-label">
              {{ label }}
            </span>
          }
          @if (!label) {
            <ng-content></ng-content>
          }
        </span>

        @if (hasMenu || removable) {
          <span class="k-chip-actions">
            @if (hasMenu) {
              <span class="k-chip-action k-chip-more-action"
                (click)="onMenuClick($event)">
                <kendo-icon-wrapper
                  name="more-vertical"
                  size="small"
                  [svgIcon]="defaultMenuIcon || menuSvgIcon"
                [customFontClass]="menuIcon"></kendo-icon-wrapper>
              </span>
            }
            @if (removable) {
              <span class="k-chip-action k-chip-remove-action"
                (click)="onRemoveClick($event)">
                <kendo-icon-wrapper
                  name="x-circle"
                  size="small"
                  [svgIcon]="removeSvgIcon || defaultRemoveIcon"
                [customFontClass]="removeIcon"></kendo-icon-wrapper>
              </span>
            }
          </span>
        }
        `,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.chip"
      }],
      standalone: true,
      imports: [NgStyle, IconWrapperComponent]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: LocalizationService
  }], {
    label: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    avatarSettings: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    removable: [{
      type: Input
    }],
    removeIcon: [{
      type: Input
    }],
    removeSvgIcon: [{
      type: Input
    }],
    hasMenu: [{
      type: Input
    }],
    menuIcon: [{
      type: Input
    }],
    menuSvgIcon: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    remove: [{
      type: Output
    }],
    menuToggle: [{
      type: Output
    }],
    contentClick: [{
      type: Output
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-chip"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }, {
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    selectedClass: [{
      type: HostBinding,
      args: ["class.k-selected"]
    }],
    focusedClass: [{
      type: HostBinding,
      args: ["class.k-focus"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }]
  });
})();
var ChipListComponent = class _ChipListComponent {
  localizationService;
  renderer;
  element;
  ngZone;
  hostClass = true;
  /**
   * @hidden
   */
  orientation = "horizontal";
  /**
   * @hidden
   */
  direction;
  /**
   * Sets the selection mode of the ChipList.
   *
   * @default 'none'
   */
  selection = "none";
  /**
   * Sets the gap between the Chips in the ChipList.
   * See [ChipList Appearance](https://www.telerik.com/kendo-angular-ui/components/buttons/chiplist/appearance#size). The default value is set by the Kendo theme.
   */
  set size(size) {
    this.handleClasses(size, "size");
    this.chips?.forEach((chip) => this.setChipSize(chip, size));
    this._size = size;
  }
  get size() {
    return this._size;
  }
  /**
   * Fires when the ChipList selection changes.
   */
  selectedChange = new EventEmitter();
  /**
   * Fires when the user clicks the remove icon of a Chip in the ChipList.
   */
  remove = new EventEmitter();
  chips;
  get multiple() {
    return this.selection === "multiple" ? true : void 0;
  }
  /**
   * @hidden
   */
  role = "listbox";
  dynamicRTLSubscription;
  _size = void 0;
  subs = new Subscription();
  _navigable = true;
  /**
   * @hidden
   */
  onClick($event) {
    const target = $event.target;
    const isRemoveClicked = closest2(target, ".k-chip-remove-action");
    const clickedChip = closest2(target, ".k-chip");
    const chip = this.chips.find((chip2) => clickedChip === chip2.element.nativeElement);
    this.currentActiveIndex = this.chips.toArray().indexOf(chip);
    chip?.focus();
    if (chip && this.navigable) {
      this.chips.forEach((c) => {
        this.renderer.setAttribute(c.element.nativeElement, "tabindex", "-1");
      });
      this.renderer.setAttribute(chip.element.nativeElement, "tabindex", "0");
    }
    if (isRemoveClicked && clickedChip) {
      const removeEventArgs = {
        sender: this,
        originalEvent: $event,
        removedChip: chip
      };
      this.remove.emit(removeEventArgs);
    }
    if (this.selection !== "none" && clickedChip && !isRemoveClicked) {
      this.setSelection(chip);
    }
  }
  /**
   * By default, keyboard navigation is available through arrow keys and roving tabindex.
   * When set to `false`, all chips are part of the default tabbing sequence of the page.
   *
   * @default true
   *
   * @remarks
   * This property is related to accessibility.
   */
  set navigable(value) {
    this._navigable = value;
    this.chips?.forEach((c) => this.renderer.setAttribute(c.element.nativeElement, "tabindex", value ? "-1" : "0"));
    if (this.chips?.first) {
      this.renderer.setAttribute(this.chips.first.element.nativeElement, "tabindex", "0");
    }
  }
  get navigable() {
    return this._navigable;
  }
  currentActiveIndex = 0;
  constructor(localizationService, renderer, element, ngZone) {
    this.localizationService = localizationService;
    this.renderer = renderer;
    this.element = element;
    this.ngZone = ngZone;
    A(packageMetadata3);
    this.direction = localizationService.rtl ? "rtl" : "ltr";
  }
  ngOnInit() {
    this.dynamicRTLSubscription = this.localizationService.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr");
  }
  ngAfterViewInit() {
    const stylingInputs = ["size"];
    stylingInputs.forEach((input) => {
      this.handleClasses(this[input], input);
    });
    this.attachElementEventHandlers();
    this.updateChips();
  }
  ngAfterContentInit() {
    this.subs.add(this.chips?.changes.subscribe(() => this.updateChips()));
  }
  ngOnDestroy() {
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
    this.subs.unsubscribe();
  }
  selectedChips() {
    return this.chips.reduce((acc, cur, idx2) => {
      return cur.selected ? acc.concat(idx2) : acc;
    }, []);
  }
  /**
   * Updates the selection on click of a Chip. Emits events.
   */
  setSelection(chip) {
    if (this.selection === "single") {
      this.clearSelection(chip);
    }
    chip.selected = !chip.selected;
    const chipEl = chip.element.nativeElement;
    this.renderer.setAttribute(chipEl, "aria-selected", `${chip.selected}`);
    this.selectedChange.emit(this.selectedChips());
  }
  clearSelection(chip) {
    this.chips.forEach((c) => {
      if (chip !== c) {
        c.selected = false;
        this.renderer.setAttribute(c.element.nativeElement, "aria-selected", "false");
      }
    });
  }
  handleClasses(value, input) {
    const elem = this.element.nativeElement;
    const classes = getStylingClasses("chip-list", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  attachElementEventHandlers() {
    const chiplist = this.element.nativeElement;
    this.ngZone.runOutsideAngular(() => {
      this.subs.add(this.renderer.listen(chiplist, "keydown", this.keyDownHandler.bind(this)));
    });
  }
  keyDownHandler(e) {
    const code = normalizeKeys(e);
    const isEnterOrSpace = code === Keys.Enter || code === Keys.Space;
    const isDeleteOrBackspace = code === Keys.Delete || code === Keys.Backspace;
    const isLeftArrow = code === Keys.ArrowLeft;
    const isRightArrow = code === Keys.ArrowRight;
    if (isEnterOrSpace) {
      const target = e.target;
      const clickedChip = closest2(target, ".k-chip");
      const chip = this.chips.find((chip2) => clickedChip === chip2.element.nativeElement);
      this.currentActiveIndex = this.chips.toArray().findIndex((chip2) => clickedChip === chip2.element.nativeElement);
      if (this.selection !== "none" && clickedChip) {
        this.ngZone.run(() => {
          this.setSelection(chip);
        });
      }
    } else if (isDeleteOrBackspace) {
      const target = e.target;
      const clickedChip = closest2(target, ".k-chip");
      const chip = this.chips.find((chip2) => clickedChip === chip2.element.nativeElement);
      if (clickedChip) {
        const removeEventArgs = {
          sender: this,
          originalEvent: e,
          removedChip: chip
        };
        this.ngZone.run(() => {
          this.remove.emit(removeEventArgs);
        });
      }
    } else if (isLeftArrow) {
      this.handleArrowKeys("left");
    } else if (isRightArrow) {
      this.handleArrowKeys("right");
    }
  }
  handleArrowKeys(direction) {
    if (!this.navigable) {
      return;
    }
    const directionDelta = direction === "left" ? -1 : 1;
    this.currentActiveIndex = this.currentActiveIndex + directionDelta;
    if (this.currentActiveIndex >= this.chips.length) {
      this.currentActiveIndex = 0;
    } else if (this.currentActiveIndex < 0) {
      this.currentActiveIndex = this.chips.length - 1;
    }
    this.chips.forEach((chip, idx2) => {
      this.renderer.setAttribute(chip.element.nativeElement, "tabindex", "-1");
      if (idx2 === this.currentActiveIndex) {
        this.renderer.setAttribute(chip.element.nativeElement, "tabindex", "0");
        chip.focus();
      }
    });
  }
  updateChips() {
    this.normalizeActiveIndex();
    this.chips.forEach((chip, idx2) => {
      const chipEl = chip.element.nativeElement;
      this.renderer.removeAttribute(chipEl, "aria-pressed");
      if (this.role === "listbox") {
        this.renderer.setAttribute(chipEl, "role", "option");
        if (this.selection !== "none") {
          this.renderer.setAttribute(chipEl, "aria-selected", `${chip.selected}`);
        }
      }
      if (!this.navigable) {
        return;
      }
      this.renderer.setAttribute(chipEl, "tabindex", "-1");
      if (idx2 === this.currentActiveIndex) {
        this.renderer.setAttribute(chipEl, "tabindex", "0");
        if (isDocumentAvailable() && document.activeElement.closest(".k-chip-list")) {
          chip.focus();
        }
      }
      if (chip.removable) {
        this.renderer.setAttribute(chipEl, "aria-keyshortcuts", "Enter Delete");
      }
      this.setChipSize(chip, this.size);
    });
  }
  normalizeActiveIndex() {
    if (this.currentActiveIndex >= this.chips.length) {
      this.currentActiveIndex = Math.max(this.chips.length - 1, 0);
    }
  }
  setChipSize(chip, size) {
    const hasSize = chip.sizeIsSet;
    if (!hasSize && chip.size !== size) {
      chip.size = size;
    }
    if (!hasSize) {
      chip.sizeIsSet = false;
    }
  }
  static \u0275fac = function ChipListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChipListComponent)(\u0275\u0275directiveInject(LocalizationService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ChipListComponent,
    selectors: [["kendo-chiplist"], ["kendo-chip-list"]],
    contentQueries: function ChipListComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, ChipComponent, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chips = _t);
      }
    },
    hostVars: 6,
    hostBindings: function ChipListComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function ChipListComponent_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-orientation", ctx.orientation)("dir", ctx.direction)("aria-multiselectable", ctx.multiple)("role", ctx.role);
        \u0275\u0275classProp("k-chip-list", ctx.hostClass);
      }
    },
    inputs: {
      orientation: "orientation",
      selection: "selection",
      size: "size",
      role: "role",
      navigable: "navigable"
    },
    outputs: {
      selectedChange: "selectedChange",
      remove: "remove"
    },
    features: [\u0275\u0275ProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.chiplist"
    }])],
    ngContentSelectors: _c03,
    decls: 1,
    vars: 0,
    template: function ChipListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipListComponent, [{
    type: Component,
    args: [{
      selector: "kendo-chiplist, kendo-chip-list",
      template: `
        <ng-content></ng-content>
    `,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.chiplist"
      }],
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-chip-list"]
    }],
    orientation: [{
      type: HostBinding,
      args: ["attr.aria-orientation"]
    }, {
      type: Input
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    selection: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    remove: [{
      type: Output
    }],
    chips: [{
      type: ContentChildren,
      args: [ChipComponent]
    }],
    multiple: [{
      type: HostBinding,
      args: ["attr.aria-multiselectable"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    navigable: [{
      type: Input
    }]
  });
})();
var ButtonItemTemplateDirective = class _ButtonItemTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static \u0275fac = function ButtonItemTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonItemTemplateDirective)(\u0275\u0275directiveInject(TemplateRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ButtonItemTemplateDirective,
    selectors: [["", "kendoDropDownButtonItemTemplate", ""], ["", "kendoSplitButtonItemTemplate", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDropDownButtonItemTemplate],[kendoSplitButtonItemTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var FocusService = class _FocusService {
  onFocus = new EventEmitter();
  focusedIndex;
  isFocused(index) {
    return index === this.focused;
  }
  focus(index) {
    if (this.isFocused(index)) {
      return;
    }
    this.focused = index;
    this.onFocus.emit(index);
  }
  resetFocus() {
    this.focused = -1;
  }
  get focused() {
    return this.focusedIndex;
  }
  set focused(index) {
    this.focusedIndex = index;
    this.onFocus.emit(index);
  }
  static \u0275fac = function FocusService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FocusService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FocusService,
    factory: _FocusService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusService, [{
    type: Injectable
  }], null, null);
})();
var KeyEvents;
(function(KeyEvents2) {
  KeyEvents2[KeyEvents2["keydown"] = 0] = "keydown";
  KeyEvents2[KeyEvents2["keypress"] = 1] = "keypress";
  KeyEvents2[KeyEvents2["keyup"] = 2] = "keyup";
})(KeyEvents || (KeyEvents = {}));
var NavigationAction;
(function(NavigationAction2) {
  NavigationAction2[NavigationAction2["Undefined"] = 0] = "Undefined";
  NavigationAction2[NavigationAction2["Open"] = 1] = "Open";
  NavigationAction2[NavigationAction2["Close"] = 2] = "Close";
  NavigationAction2[NavigationAction2["Enter"] = 3] = "Enter";
  NavigationAction2[NavigationAction2["EnterPress"] = 4] = "EnterPress";
  NavigationAction2[NavigationAction2["EnterUp"] = 5] = "EnterUp";
  NavigationAction2[NavigationAction2["Tab"] = 6] = "Tab";
  NavigationAction2[NavigationAction2["Esc"] = 7] = "Esc";
  NavigationAction2[NavigationAction2["Navigate"] = 8] = "Navigate";
})(NavigationAction || (NavigationAction = {}));
var NAVIGATION_CONFIG = new InjectionToken("navigation.config");
var NavigationService = class _NavigationService {
  navigate = new EventEmitter();
  open = new EventEmitter();
  close = new EventEmitter();
  enter = new EventEmitter();
  enterpress = new EventEmitter();
  enterup = new EventEmitter();
  tab = new EventEmitter();
  esc = new EventEmitter();
  useLeftRightArrows;
  constructor(config) {
    this.useLeftRightArrows = config.useLeftRightArrows;
  }
  process(args) {
    const keyCode = args.code;
    const keyEvent = args.keyEvent;
    let index;
    let action = NavigationAction.Undefined;
    if (keyEvent === KeyEvents.keyup) {
      if (this.isEnterOrSpace(keyCode)) {
        action = NavigationAction.EnterUp;
      }
    } else {
      if (args.altKey && keyCode === Keys.ArrowDown) {
        action = NavigationAction.Open;
      } else if (args.altKey && keyCode === Keys.ArrowUp) {
        action = NavigationAction.Close;
      } else if (this.isEnterOrSpace(keyCode)) {
        action = NavigationAction.Enter;
      } else if (keyCode === Keys.Escape) {
        action = NavigationAction.Esc;
      } else if (keyCode === Keys.Tab) {
        action = NavigationAction.Tab;
      } else if (keyCode === Keys.ArrowUp || this.useLeftRightArrows && keyCode === Keys.ArrowLeft) {
        const step = args.flipNavigation ? 1 : -1;
        const start = args.flipNavigation ? args.min : args.max;
        const end = args.flipNavigation ? args.max : args.min;
        index = this.next({
          current: args.current,
          start,
          end,
          step
        });
        action = NavigationAction.Navigate;
      } else if (keyCode === Keys.ArrowDown || this.useLeftRightArrows && keyCode === Keys.ArrowRight) {
        const step = args.flipNavigation ? -1 : 1;
        const start = args.flipNavigation ? args.max : args.min;
        const end = args.flipNavigation ? args.min : args.max;
        index = this.next({
          current: args.current,
          start,
          end,
          step
        });
        action = NavigationAction.Navigate;
      } else if (keyCode === Keys.Home) {
        index = args.min;
        action = NavigationAction.Navigate;
      } else if (keyCode === Keys.End) {
        index = args.max;
        action = NavigationAction.Navigate;
      }
    }
    if (action !== NavigationAction.Undefined) {
      this[NavigationAction[action].toLowerCase()].emit({
        index,
        target: args.target,
        esc: action === NavigationAction.Esc
      });
    }
    return action;
  }
  isEnterOrSpace(keyCode) {
    return keyCode === Keys.Enter || keyCode === Keys.Space;
  }
  next(args) {
    if (!isPresent3(args.current)) {
      return args.start;
    } else {
      return args.current !== args.end ? args.current + args.step : args.end;
    }
  }
  static \u0275fac = function NavigationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavigationService)(\u0275\u0275inject(NAVIGATION_CONFIG));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NavigationService,
    factory: _NavigationService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationService, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NAVIGATION_CONFIG]
    }]
  }], null);
})();
var PopupContainerService = class _PopupContainerService {
  container;
  template;
  static \u0275fac = function PopupContainerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PopupContainerService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PopupContainerService,
    factory: _PopupContainerService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupContainerService, [{
    type: Injectable
  }], null, null);
})();
var FocusableDirective = class _FocusableDirective {
  focusService;
  renderer;
  index;
  element;
  subs = new Subscription();
  constructor(focusService, elementRef, renderer) {
    this.focusService = focusService;
    this.renderer = renderer;
    this.element = elementRef.nativeElement;
    this.subscribeEvents();
  }
  ngOnInit() {
    if (this.index === this.focusService.focused) {
      this.renderer.addClass(this.element, "k-focus");
    } else {
      this.renderer.removeClass(this.element, "k-focus");
    }
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  subscribeEvents() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.subs.add(this.focusService.onFocus.subscribe((index) => {
      if (this.index === index) {
        this.renderer.addClass(this.element, "k-focus");
        this.renderer.setAttribute(this.element, "tabindex", "0");
        this.element.focus();
      } else {
        this.renderer.setAttribute(this.element, "tabindex", "-1");
        this.renderer.removeClass(this.element, "k-focus");
      }
    }));
  }
  static \u0275fac = function FocusableDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FocusableDirective)(\u0275\u0275directiveInject(FocusService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FocusableDirective,
    selectors: [["", "kendoButtonFocusable", ""]],
    inputs: {
      index: "index"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusableDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoButtonFocusable]",
      standalone: true
    }]
  }], () => [{
    type: FocusService
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    index: [{
      type: Input
    }]
  });
})();
var ListComponent = class _ListComponent {
  data;
  textField;
  itemTemplate;
  onItemClick = new EventEmitter();
  onItemBlur = new EventEmitter();
  set size(size) {
    if (size) {
      this.sizeClass = `k-menu-group-${SIZES[size]}`;
    } else {
      this.sizeClass = "";
    }
  }
  sizeClass = "";
  constructor() {
    A(packageMetadata3);
  }
  getText(dataItem) {
    if (dataItem) {
      return this.textField ? dataItem[this.textField] : dataItem.text || dataItem;
    }
    return void 0;
  }
  getIconClasses(dataItem) {
    const icon = dataItem.icon ? "k-icon k-i-" + dataItem.icon : void 0;
    const classes = {};
    classes[icon || dataItem.iconClass] = true;
    return classes;
  }
  onClick(index) {
    this.onItemClick.emit(index);
  }
  onBlur() {
    this.onItemBlur.emit();
  }
  static \u0275fac = function ListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ListComponent,
    selectors: [["kendo-button-list"]],
    inputs: {
      data: "data",
      textField: "textField",
      itemTemplate: "itemTemplate",
      size: "size"
    },
    outputs: {
      onItemClick: "onItemClick",
      onItemBlur: "onItemBlur"
    },
    decls: 3,
    vars: 1,
    consts: [["role", "list", 1, "k-menu-group", 3, "ngClass"], ["kendoButtonFocusable", "", "tabindex", "-1", "role", "listitem", 1, "k-item", "k-menu-item", 3, "index", "k-first", "k-last"], ["kendoButtonFocusable", "", "tabindex", "-1", "role", "listitem", 1, "k-item", "k-menu-item", 3, "click", "blur", "index"], [1, "k-link", "k-menu-link", 3, "k-disabled", "ngClass"], [1, "k-link", "k-menu-link", 3, "ngClass"], [3, "templateContext"], [3, "name", "svgIcon", "customFontClass"], [1, "k-image", 3, "src", "alt"], [1, "k-menu-link-text"]],
    template: function ListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ul", 0);
        \u0275\u0275repeaterCreate(1, ListComponent_For_2_Template, 3, 8, "li", 1, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.sizeClass);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.data);
      }
    },
    dependencies: [NgClass, FocusableDirective, TemplateContextDirective, IconWrapperComponent],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListComponent, [{
    type: Component,
    args: [{
      selector: "kendo-button-list",
      template: `
        <ul class="k-menu-group" role="list" [ngClass]="sizeClass">
          @for (dataItem of data; track dataItem; let index = $index; let isFirst = $first; let isLast = $last) {
            <li kendoButtonFocusable
              [index]="index"
              tabindex="-1"
              class="k-item k-menu-item"
              [class.k-first]="isFirst"
              [class.k-last]="isLast"
              role="listitem"
              [attr.aria-disabled]="dataItem.disabled || null"
              (click)="$event.stopImmediatePropagation(); onClick(index);"
              (blur)="onBlur()">
              @if (itemTemplate?.templateRef) {
                <span
                  class="k-link k-menu-link"
                  [class.k-disabled]="dataItem.disabled"
                  [ngClass]="dataItem.cssClass">
                  <ng-template
                    [templateContext]="{ templateRef: itemTemplate?.templateRef, $implicit: dataItem }"
                  ></ng-template>
                </span>
              }
              @if (!itemTemplate?.templateRef) {
                <span
                  class="k-link k-menu-link"
                  [class.k-disabled]="dataItem.disabled"
                  [ngClass]="dataItem.cssClass">
                  @if (dataItem.icon || dataItem.iconClass || dataItem.svgIcon) {
                    <kendo-icon-wrapper
                      [name]="dataItem.icon"
                      [svgIcon]="dataItem.svgIcon"
                      [customFontClass]="dataItem.iconClass"
                    ></kendo-icon-wrapper>
                  }
                  @if (dataItem.imageUrl) {
                    <img
                      class="k-image"
                      [src]="dataItem.imageUrl"
                      [alt]="dataItem.imageAlt"
                      >
                  }
                  @if (getText(dataItem)) {
                    <span class="k-menu-link-text">
                      {{ getText(dataItem) }}
                    </span>
                  }
                </span>
              }
            </li>
          }
        </ul>
        `,
      standalone: true,
      imports: [NgClass, FocusableDirective, TemplateContextDirective, IconWrapperComponent]
    }]
  }], () => [], {
    data: [{
      type: Input
    }],
    textField: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    onItemClick: [{
      type: Output
    }],
    onItemBlur: [{
      type: Output
    }],
    size: [{
      type: Input
    }]
  });
})();
var ListButton = class _ListButton extends MultiTabStop {
  focusService;
  navigationService;
  wrapperRef;
  _zone;
  popupService;
  elRef;
  cdr;
  containerService;
  listId = guid();
  buttonId = guid();
  _data;
  _open = false;
  _disabled = false;
  _active = false;
  _popupSettings = {
    animate: true,
    popupClass: ""
  };
  _isFocused = false;
  _itemClick;
  _blur;
  wrapper;
  subs = new Subscription();
  direction;
  popupRef;
  popupSubs = new Subscription();
  button;
  buttonList;
  popupTemplate;
  container;
  /**
   * Sets the disabled state of the DropDownButton.
   * When `true`, the button is disabled and cannot be interacted with.
   */
  set disabled(value) {
    if (value && this.openState) {
      this.openState = false;
    }
    this._disabled = value;
  }
  get disabled() {
    return this._disabled;
  }
  /**
   * Specifies the [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
   * Determines the order of focus when navigating with the keyboard.
   *
   * @default 0
   */
  tabIndex = 0;
  /**
   * The CSS classes applied to the main button.
   * Supports the same values as [`ngClass`](link:site.data.urls.angular['ngclassapi']).
   */
  buttonClass;
  /**
   * Fires when the popup is about to open.
   * This event is preventable. Canceling the event keeps the popup closed.
   */
  open = new EventEmitter();
  /**
   * Fires when the popup is about to close.
   * This event is preventable. Canceling the event keeps the popup open.
   */
  close = new EventEmitter();
  /**
   * Needed by the kendoToggleButtonTabStop directive
   *
   * @hidden
   */
  escape = new EventEmitter();
  /**
   * @hidden
   */
  get componentTabIndex() {
    return this.disabled ? -1 : this.tabIndex;
  }
  get appendTo() {
    const {
      appendTo
    } = this.popupSettings;
    if (!appendTo || appendTo === "root") {
      return void 0;
    }
    return appendTo === "component" ? this.containerService.container : appendTo;
  }
  /**
   * Configures the popup of the DropDownButton.
   */
  set popupSettings(settings) {
    this._popupSettings = __spreadValues({
      animate: true,
      popupClass: ""
    }, settings);
  }
  get popupSettings() {
    return this._popupSettings;
  }
  /**
   * @hidden
   */
  get anchorAlign() {
    const align2 = {
      horizontal: this.popupSettings.align || "left",
      vertical: "bottom"
    };
    if (this.direction === "rtl" && !isPresent3(this.popupSettings.align)) {
      align2.horizontal = "right";
    }
    return align2;
  }
  /**
   * @hidden
   */
  get popupAlign() {
    const align2 = {
      horizontal: this.popupSettings.align || "left",
      vertical: "top"
    };
    if (this.direction === "rtl" && !isPresent3(this.popupSettings.align)) {
      align2.horizontal = "right";
    }
    return align2;
  }
  isClosePrevented = false;
  constructor(focusService, navigationService, wrapperRef, _zone, popupService, elRef, localization, cdr, containerService) {
    super();
    this.focusService = focusService;
    this.navigationService = navigationService;
    this.wrapperRef = wrapperRef;
    this._zone = _zone;
    this.popupService = popupService;
    this.elRef = elRef;
    this.cdr = cdr;
    this.containerService = containerService;
    A(packageMetadata3);
    this.focusService = focusService;
    this.navigationService = navigationService;
    this.wrapper = wrapperRef.nativeElement;
    this.subs.add(localization.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
    this.subscribeEvents();
  }
  ngOnChanges(changes) {
    if (isChanged("popupSettings", changes) && isPresent3(this.popupRef)) {
      const popup = this.popupRef.popup.instance;
      const newSettings = changes["popupSettings"].currentValue;
      popup.popupClass = newSettings.popupClass;
      popup.animate = newSettings.animate;
      popup.popupAlign = this.popupAlign;
    }
  }
  get popupClasses() {
    const popupClasses = ["k-menu-popup"];
    if (!this._popupSettings.popupClass) {
      return popupClasses.join(" ");
    }
    const parsedPopupClasses = parseCSSClassNames(this._popupSettings.popupClass);
    if (parsedPopupClasses?.length) {
      popupClasses.push(...parsedPopupClasses);
    }
    return popupClasses.join(" ");
  }
  get openState() {
    return this._open;
  }
  /**
   * @hidden
   */
  set openState(open) {
    if (this.disabled) {
      return;
    }
    this._open = open;
  }
  /**
   * Returns the current open state of the popup.
   */
  get isOpen() {
    return this._open;
  }
  /**
   * @hidden
   */
  togglePopupVisibility() {
    if (this._disabled) {
      return;
    }
    this._toggle(!this.openState, true);
    if (!this.isClosePrevented) {
      this.focusService.focus(this.openState ? 0 : -1);
    }
  }
  /**
   * @hidden
   */
  onItemClick(index) {
    this.emitItemClickHandler(index);
    this.togglePopupVisibility();
    if (isDocumentAvailable() && !this.isClosePrevented) {
      this.focusButton();
    }
  }
  ngOnDestroy() {
    this.openState = false;
    this.subs.unsubscribe();
    this.destroyPopup();
  }
  subscribeEvents() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.subscribeListItemFocusEvent();
    this.subscribeComponentBlurredEvent();
    this.subscribeNavigationEvents();
  }
  subscribeListItemFocusEvent() {
    this.subs.add(this.focusService.onFocus.subscribe(() => {
      this._isFocused = true;
    }));
  }
  subscribeComponentBlurredEvent() {
    this._zone.runOutsideAngular(() => {
      this.subs.add(this.navigationService.tab.pipe(filter(() => this._isFocused), tap(() => this.focusButton())).subscribe(this.handleTab.bind(this)));
      this.subs.add(fromEvent(document, "click").pipe(filter((event) => !this.wrapperContains(event.target)), filter(() => this._isFocused)).subscribe(() => this._zone.run(() => this.blurWrapper())));
    });
  }
  subscribeNavigationEvents() {
    this.subs.add(this.navigationService.navigate.subscribe(this.onArrowKeyNavigate.bind(this)));
    this.subs.add(this.navigationService.enterup.subscribe(this.onNavigationEnterUp.bind(this)));
    this.subs.add(this.navigationService.open.subscribe(this.onNavigationOpen.bind(this)));
    this.subs.add(merge(this.navigationService.close, this.navigationService.esc).subscribe(this.onNavigationClose.bind(this)));
  }
  /**
   * Toggles the visibility of the popup.
   * If the `toggle` method is used, the `open` and `close` events are not fired.
   *
   * @param open - The desired state of the popup.
   */
  toggle(open) {
    if (this.disabled) {
      return;
    }
    const value = open ?? !this.openState;
    this._toggle(value, false);
  }
  /**
   * @hidden
   */
  keyDownHandler(event, isHost) {
    this.keyHandler(event, null, isHost);
  }
  /**
   * @hidden
   */
  keyUpHandler(event) {
    this.keyHandler(event, KeyEvents.keyup);
  }
  /**
   * @hidden
   */
  keyHandler(event, keyEvent, isHost) {
    if (this._disabled) {
      return;
    }
    const eventData = event;
    if (!isHost) {
      eventData.stopImmediatePropagation();
    }
    const focused = this.focusService.focused || 0;
    const code = normalizeKeys(eventData);
    const action = this.navigationService.process({
      altKey: eventData.altKey,
      current: focused,
      code,
      keyEvent,
      max: this._data ? this._data.length - 1 : 0,
      min: 0,
      target: event.target
    });
    if (action !== NavigationAction.Undefined && action !== NavigationAction.Tab && (action !== NavigationAction.Enter || action === NavigationAction.Enter && this.openState)) {
      if (!(code === Keys.Space && action === NavigationAction.EnterUp)) {
        eventData.preventDefault();
      }
    }
  }
  emitItemClickHandler(index) {
    const dataItem = this._data[index];
    if (this._itemClick && !dataItem.disabled) {
      this._itemClick.emit(dataItem);
    }
    if (dataItem?.click && !dataItem?.disabled) {
      dataItem.click(dataItem);
    }
    this.focusService.focus(index);
  }
  focusWrapper() {
    if (this.openState) {
      this.togglePopupVisibility();
      this.focusButton();
    }
  }
  wrapperContains(element) {
    return this.wrapper === element || this.wrapper.contains(element);
  }
  blurWrapper(emit = true) {
    if (!this._isFocused) {
      return;
    }
    if (this.openState) {
      this.togglePopupVisibility();
    }
    this._isFocused = false;
    if (emit) {
      this._blur.emit();
      this.cdr.markForCheck();
    }
  }
  focusButton() {
    if (this.button) {
      this.button.nativeElement.focus();
    }
  }
  handleTab() {
    this.blurWrapper();
  }
  onNavigationEnterUp(_args) {
    if (!this._disabled && !this.openState) {
      this._active = false;
    }
    if (this.openState) {
      const focused = this.focusService.focused;
      if (isPresent3(focused) && focused !== -1) {
        this.emitItemClickHandler(focused);
      }
    }
    this.togglePopupVisibility();
    if (!this.openState && isDocumentAvailable()) {
      this.button.nativeElement.focus();
    }
  }
  onNavigationOpen() {
    if (!this._disabled && !this.openState) {
      this.togglePopupVisibility();
    }
  }
  onNavigationClose(e) {
    if (this.openState && !this.isClosePrevented) {
      this.togglePopupVisibility();
      if (isDocumentAvailable()) {
        if (e?.esc && hasObservers(this.escape)) {
          this.escape.emit();
        }
        this.button.nativeElement.focus();
      }
    }
  }
  onArrowKeyNavigate({
    index
  }) {
    this.focusService.focus(index);
  }
  _toggle(open, emitEvent) {
    if (this.openState === open) {
      return;
    }
    const eventArgs = new PreventableEvent2();
    if (emitEvent) {
      if (open && !this.openState) {
        this.open.emit(eventArgs);
      } else if (!open && this.openState) {
        this.close.emit(eventArgs);
      }
      if (eventArgs.isDefaultPrevented()) {
        this.isClosePrevented = true;
        return;
      }
    }
    this.openState = open;
    this.destroyPopup();
    if (this.openState) {
      this.createPopup();
    }
  }
  createPopup() {
    this.popupRef = this.popupService.open({
      anchor: this.elRef,
      anchorAlign: this.anchorAlign,
      animate: this.popupSettings.animate,
      appendTo: this.appendTo,
      content: this.containerService.template,
      popupAlign: this.popupAlign,
      popupClass: this.popupClasses
    });
    this.popupSubs = this.popupRef.popupAnchorViewportLeave.subscribe(() => {
      this.togglePopupVisibility();
    });
  }
  destroyPopup() {
    if (this.popupRef) {
      this.popupRef.close();
      this.popupRef = null;
      this.popupSubs.unsubscribe();
      this.isClosePrevented = false;
    }
  }
  static \u0275fac = function ListButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListButton)(\u0275\u0275directiveInject(FocusService), \u0275\u0275directiveInject(NavigationService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(PopupService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(LocalizationService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(PopupContainerService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ListButton,
    selectors: [["ng-component"]],
    viewQuery: function ListButton_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c42, 5, ElementRef)(_c52, 5)(_c62, 5)(_c72, 5, ViewContainerRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.button = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.buttonList = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.popupTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.container = _t.first);
      }
    },
    inputs: {
      disabled: "disabled",
      tabIndex: "tabIndex",
      buttonClass: "buttonClass",
      popupSettings: "popupSettings"
    },
    outputs: {
      open: "open",
      close: "close",
      escape: "escape"
    },
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
    decls: 0,
    vars: 0,
    template: function ListButton_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListButton, [{
    type: Component,
    args: [{
      template: ""
    }]
  }], () => [{
    type: FocusService
  }, {
    type: NavigationService
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: PopupService
  }, {
    type: ElementRef
  }, {
    type: LocalizationService
  }, {
    type: ChangeDetectorRef
  }, {
    type: PopupContainerService
  }], {
    button: [{
      type: ViewChild,
      args: ["button", {
        read: ElementRef
      }]
    }],
    buttonList: [{
      type: ViewChild,
      args: ["buttonList"]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate"]
    }],
    container: [{
      type: ViewChild,
      args: ["container", {
        read: ViewContainerRef
      }]
    }],
    disabled: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    buttonClass: [{
      type: Input
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    escape: [{
      type: Output
    }],
    popupSettings: [{
      type: Input
    }]
  });
})();
var NAVIGATION_SETTINGS$2 = {
  useLeftRightArrows: true
};
var NAVIGATION_SETTINGS_PROVIDER$2 = {
  provide: NAVIGATION_CONFIG,
  useValue: NAVIGATION_SETTINGS$2
};
var DropDownButtonComponent = class _DropDownButtonComponent extends ListButton {
  containerService;
  renderer;
  /**
   * Displays the default arrow icon or a custom one.
   * @default false
   */
  arrowIcon = false;
  /**
   * Specifies the name of an existing icon in the Kendo UI theme.
   */
  icon = "";
  /**
   * Specifies an [`SVGIcon`](https://www.telerik.com/kendo-angular-ui/components/icons/api/svgicon) to render within the button.
   */
  svgIcon;
  /**
   * Specifies a list of CSS classes for styling the button with custom icons.
   */
  iconClass = "";
  /**
   * Specifies a URL for styling the button with a custom image.
   */
  imageUrl = "";
  /**
   * Sets the data item field that represents the item text.
   * If the data contains only primitive values, leave this undefined.
   */
  textField;
  /**
   * Sets or gets the data of the DropDownButton. Provide the data as an array-like list.
   */
  set data(data) {
    this._data = data || [];
  }
  get data() {
    return this._data;
  }
  /**
   * Specifies the padding of the DropDownButton. See [DropDownButton Appearance](https://www.telerik.com/kendo-angular-ui/components/buttons/dropdownbutton/appearance#size). The default value is set by the Kendo theme.
   */
  size = void 0;
  /**
   * Specifies the border radius of the DropDownButton. See [DropDownButton Appearance](https://www.telerik.com/kendo-angular-ui/components/buttons/dropdownbutton/appearance#roundness). The default value is set by the Kendo theme.
   */
  rounded = void 0;
  /**
   * Specifies the background and border styles of the DropDownButton. See [DropDownButton Appearance](https://www.telerik.com/kendo-angular-ui/components/buttons/dropdownbutton/appearance#fill-mode). The default value is set by the Kendo theme.
   */
  set fillMode(fillMode) {
    this._fillMode = fillMode === "clear" ? "flat" : fillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * Specifies predefined theme colors for the DropDownButton. See [DropDownButton Appearance](https://www.telerik.com/kendo-angular-ui/components/buttons/dropdownbutton/appearance#theme-colors).
   */
  themeColor = void 0;
  /**
   * Sets attributes for the main button.
   */
  set buttonAttributes(buttonAttributes) {
    const newButtonAttributes = buttonAttributes || null;
    this.handleButtonAttributes(newButtonAttributes);
    this._buttonAttributes = newButtonAttributes;
  }
  get buttonAttributes() {
    return this._buttonAttributes;
  }
  /**
   * Fires when the user clicks a drop-down list item.
   * The event data contains the data item bound to the clicked list item.
   */
  itemClick = new EventEmitter();
  /**
   * Fires when the DropDownButton is focused.
   */
  onFocus = new EventEmitter();
  /**
   * Fires when the DropDownButton is blurred.
   */
  onBlur = new EventEmitter();
  get focused() {
    return this._isFocused && !this._disabled;
  }
  hostDisplayStyle = "inline-flex";
  get dir() {
    return this.direction;
  }
  /**
   * @hidden
   */
  get active() {
    return this._active;
  }
  itemTemplate;
  _fillMode = void 0;
  _buttonAttributes = null;
  documentMouseUpSub;
  /**
   * @hidden
   */
  keydown(event) {
    this.keyDownHandler(event, true);
    const code = normalizeKeys(event);
    if (code === Keys.Space) {
      this._active = true;
    }
    if (code === Keys.Enter) {
      this._active = true;
      event.preventDefault();
    }
  }
  /**
   * @hidden
   */
  keyup(event) {
    this.keyUpHandler(event);
    this._active = false;
  }
  /**
   * @hidden
   */
  mousedown(event) {
    if (this._disabled) {
      event.preventDefault();
    } else {
      this._active = true;
    }
  }
  /**
   * @hidden
   */
  mouseup(event) {
    if (this._disabled) {
      event.preventDefault();
    }
    this._active = false;
  }
  /**
   * @hidden
   */
  openPopup() {
    this._isFocused = true;
    this.togglePopupVisibility();
  }
  /**
   * @hidden
   */
  onButtonBlur() {
    if (!this.openState) {
      this.blurWrapper();
    }
  }
  /**
   * Focuses the DropDownButton.
   */
  focus() {
    if (isDocumentAvailable()) {
      this.button.nativeElement.focus();
    }
  }
  /**
   * Blurs the DropDownButton.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.button.nativeElement.blur();
      this.blurWrapper();
    }
  }
  constructor(focusService, navigationService, wrapperRef, zone, popupService, elRef, localization, cdr, containerService, renderer) {
    super(focusService, navigationService, wrapperRef, zone, popupService, elRef, localization, cdr, containerService);
    this.containerService = containerService;
    this.renderer = renderer;
    this._itemClick = this.itemClick;
    this._blur = this.onBlur;
    zone.runOutsideAngular(() => {
      this.documentMouseUpSub = this.renderer.listen("document", "mouseup", () => {
        if (this.active) {
          zone.run(() => this._active = false);
        }
      });
    });
  }
  ngAfterViewInit() {
    this.containerService.container = this.container;
    this.containerService.template = this.popupTemplate;
    this.handleButtonAttributes(this.buttonAttributes);
    const arrowWrapper = this.button.nativeElement.querySelector(".k-button-arrow");
    if (arrowWrapper) {
      this.renderer.addClass(arrowWrapper, "k-menu-button-arrow");
    }
  }
  /**
   * @hidden
   */
  handleFocus(event) {
    if (!this._disabled) {
      if (!this._isFocused) {
        this.onFocus.emit();
      }
      this._isFocused = true;
      this.focusService.resetFocus();
      const relatedTargetInList = event.relatedTarget && closest2(event.relatedTarget, ".k-popup kendo-button-list");
      if (this.openState && !relatedTargetInList) {
        this.focusService.focus(0);
      }
    }
  }
  /**
   * @hidden
   */
  wrapperContains(element) {
    return this.wrapper === element || this.wrapper.contains(element) || this.popupRef?.popupElement.contains(element);
  }
  handleButtonAttributes(newButtonAttributes) {
    const mainButton = this.button?.nativeElement;
    if (isPresent(this.buttonAttributes) && isPresent(mainButton)) {
      for (const attr in this.buttonAttributes) {
        this.renderer.removeAttribute(mainButton, attr, this.buttonAttributes[attr]);
      }
    }
    if (isPresent(newButtonAttributes) && isPresent(mainButton)) {
      for (const attr in newButtonAttributes) {
        this.renderer.setAttribute(mainButton, attr, newButtonAttributes[attr]);
      }
    }
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    if (this.documentMouseUpSub) {
      this.documentMouseUpSub();
    }
    super.ngOnDestroy();
  }
  static \u0275fac = function DropDownButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DropDownButtonComponent)(\u0275\u0275directiveInject(FocusService), \u0275\u0275directiveInject(NavigationService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(PopupService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(LocalizationService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(PopupContainerService), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _DropDownButtonComponent,
    selectors: [["kendo-dropdownbutton"]],
    contentQueries: function DropDownButtonComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, ButtonItemTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t.first);
      }
    },
    hostVars: 5,
    hostBindings: function DropDownButtonComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function DropDownButtonComponent_keydown_HostBindingHandler($event) {
          return ctx.keydown($event);
        })("keyup", function DropDownButtonComponent_keyup_HostBindingHandler($event) {
          return ctx.keyup($event);
        })("mousedown", function DropDownButtonComponent_mousedown_HostBindingHandler($event) {
          return ctx.mousedown($event);
        })("mouseup", function DropDownButtonComponent_mouseup_HostBindingHandler($event) {
          return ctx.mouseup($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("dir", ctx.dir);
        \u0275\u0275styleProp("display", ctx.hostDisplayStyle);
        \u0275\u0275classProp("k-focus", ctx.focused);
      }
    },
    inputs: {
      arrowIcon: "arrowIcon",
      icon: "icon",
      svgIcon: "svgIcon",
      iconClass: "iconClass",
      imageUrl: "imageUrl",
      textField: "textField",
      data: "data",
      size: "size",
      rounded: "rounded",
      fillMode: "fillMode",
      themeColor: "themeColor",
      buttonAttributes: "buttonAttributes"
    },
    outputs: {
      itemClick: "itemClick",
      onFocus: "focus",
      onBlur: "blur"
    },
    exportAs: ["kendoDropDownButton"],
    features: [\u0275\u0275ProvidersFeature([FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER$2, LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.dropdownbutton"
    }, PopupContainerService]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c03,
    decls: 7,
    vars: 18,
    consts: [["button", ""], ["popupTemplate", ""], ["container", ""], ["buttonList", ""], ["kendoButton", "", "type", "button", 1, "k-menu-button", 3, "click", "focus", "blur", "id", "tabindex", "disabled", "icon", "svgIcon", "arrowIcon", "iconClass", "imageUrl", "ngClass", "size", "rounded", "fillMode", "themeColor"], [3, "onItemClick", "keydown", "keyup", "id", "data", "textField", "itemTemplate", "size"]],
    template: function DropDownButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "button", 4, 0);
        \u0275\u0275listener("click", function DropDownButtonComponent_Template_button_click_0_listener() {
          return ctx.openPopup();
        })("focus", function DropDownButtonComponent_Template_button_focus_0_listener($event) {
          return ctx.handleFocus($event);
        })("blur", function DropDownButtonComponent_Template_button_blur_0_listener() {
          return ctx.onButtonBlur();
        });
        \u0275\u0275projection(2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, DropDownButtonComponent_ng_template_3_Template, 2, 7, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementContainer(5, null, 2);
      }
      if (rf & 2) {
        \u0275\u0275classProp("k-active", ctx.active);
        \u0275\u0275property("id", ctx.buttonId)("tabindex", ctx.componentTabIndex)("disabled", ctx.disabled)("icon", ctx.icon)("svgIcon", ctx.svgIcon)("arrowIcon", ctx.arrowIcon)("iconClass", ctx.iconClass)("imageUrl", ctx.imageUrl)("ngClass", ctx.buttonClass)("size", ctx.size)("rounded", ctx.rounded)("fillMode", ctx.fillMode)("themeColor", ctx.themeColor);
        \u0275\u0275attribute("aria-disabled", ctx.disabled || null)("aria-expanded", ctx.openState)("aria-controls", ctx.openState ? ctx.listId : null);
      }
    },
    dependencies: [ButtonComponent, NgClass, ListComponent],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropDownButtonComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoDropDownButton",
      providers: [FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER$2, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.dropdownbutton"
      }, PopupContainerService],
      selector: "kendo-dropdownbutton",
      template: `
        <button kendoButton #button
            type="button"
            [id]="buttonId"
            [tabindex]="componentTabIndex"
            class="k-menu-button"
            [class.k-active]="active"
            [disabled]="disabled"
            [icon]="icon"
            [svgIcon]="svgIcon"
            [arrowIcon]="arrowIcon"
            [iconClass]="iconClass"
            [imageUrl]="imageUrl"
            [ngClass]="buttonClass"
            [size]="size"
            [rounded]="rounded"
            [fillMode]="fillMode"
            [themeColor]="themeColor"
            (click)="openPopup()"
            (focus)="handleFocus($event)"
            (blur)="onButtonBlur()"
            [attr.aria-disabled]="disabled || null"
            [attr.aria-expanded]="openState"
            [attr.aria-controls]="openState ? listId : null"
        >
            <ng-content></ng-content>
        </button>
        <ng-template #popupTemplate>
            <kendo-button-list
                #buttonList
                [id]="listId"
                [data]="data"
                [textField]="textField"
                [itemTemplate]="itemTemplate"
                (onItemClick)="onItemClick($event)"
                (keydown)="keyDownHandler($event)"
                (keyup)="keyUpHandler($event)"
                [attr.dir]="dir"
                [attr.aria-labelledby]="buttonId"
                [size]="size"
            >
            </kendo-button-list>
        </ng-template>
        <ng-container #container></ng-container>
    `,
      standalone: true,
      imports: [ButtonComponent, NgClass, ListComponent]
    }]
  }], () => [{
    type: FocusService
  }, {
    type: NavigationService
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: PopupService
  }, {
    type: ElementRef
  }, {
    type: LocalizationService
  }, {
    type: ChangeDetectorRef
  }, {
    type: PopupContainerService
  }, {
    type: Renderer2
  }], {
    arrowIcon: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    imageUrl: [{
      type: Input
    }],
    textField: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    buttonAttributes: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    focused: [{
      type: HostBinding,
      args: ["class.k-focus"]
    }],
    hostDisplayStyle: [{
      type: HostBinding,
      args: ["style.display"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: [ButtonItemTemplateDirective]
    }],
    keydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }],
    keyup: [{
      type: HostListener,
      args: ["keyup", ["$event"]]
    }],
    mousedown: [{
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }],
    mouseup: [{
      type: HostListener,
      args: ["mouseup", ["$event"]]
    }]
  });
})();
function getAnchorAlign(fabAlign, rtl) {
  const align2 = {
    horizontal: rtl ? "right" : "left",
    vertical: "bottom"
  };
  if (fabAlign.horizontal === "end") {
    align2.horizontal = rtl ? "left" : "right";
  }
  if (fabAlign.vertical === "bottom") {
    align2.vertical = "top";
  }
  if (fabAlign.vertical === "bottom" && fabAlign.horizontal === "end") {
    align2.horizontal = rtl ? "left" : "right";
    align2.vertical = "top";
  }
  return align2;
}
function getPopupAlign(fabAlign, rtl) {
  const align2 = {
    horizontal: rtl ? "right" : "left",
    vertical: "top"
  };
  if (fabAlign.horizontal === "end") {
    align2.horizontal = rtl ? "left" : "right";
  }
  if (fabAlign.vertical === "bottom") {
    align2.vertical = "bottom";
  }
  if (fabAlign.vertical === "bottom" && fabAlign.horizontal === "end") {
    align2.horizontal = rtl ? "left" : "right";
    align2.vertical = "bottom";
  }
  return align2;
}
function openAnimation(animationSettings) {
  const isBottom = animationSettings.align.vertical === "bottom";
  const duration = animationSettings.duration;
  const gap = animationSettings.gap;
  return sequence([query(`.k-fab-item`, [style({
    opacity: 0,
    transform: `translateY(${isBottom ? "8px" : "-8px"})`
  }), stagger(gap, [animate(`${duration}ms ease-in`, style({
    opacity: "*",
    transform: "translateY(0)"
  }))])], {
    optional: true
  })]);
}
function closeAnimation(animationSettings) {
  const isBottom = animationSettings.align.vertical === "bottom";
  const duration = animationSettings.duration;
  const gap = animationSettings.gap;
  return sequence([query(`.k-fab-item`, [style({
    opacity: "*",
    transform: "translateY(0)"
  }), stagger(-gap, [animate(`${duration}ms ease-in`, style({
    opacity: 0,
    transform: `translateY(${isBottom ? "8px" : "-8px"})`
  }))])], {
    optional: true
  })]);
}
var DialItemTemplateDirective = class _DialItemTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static \u0275fac = function DialItemTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialItemTemplateDirective)(\u0275\u0275directiveInject(TemplateRef, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _DialItemTemplateDirective,
    selectors: [["", "kendoDialItemTemplate", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDialItemTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var FloatingActionButtonTemplateDirective = class _FloatingActionButtonTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static \u0275fac = function FloatingActionButtonTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FloatingActionButtonTemplateDirective)(\u0275\u0275directiveInject(TemplateRef, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FloatingActionButtonTemplateDirective,
    selectors: [["", "kendoFloatingActionButtonTemplate", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatingActionButtonTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoFloatingActionButtonTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var DialItemComponent = class _DialItemComponent {
  element;
  renderer;
  localisationService;
  hostClass = true;
  role = "menuitem";
  get disabledClass() {
    return this.item.disabled;
  }
  get title() {
    const label = this.item.label;
    return label || this.itemTitle;
  }
  get indexAttr() {
    return this.index;
  }
  cssClass;
  cssStyle;
  isFocused;
  index;
  item;
  dialItemTemplate;
  align;
  constructor(element, renderer, localisationService) {
    this.element = element;
    this.renderer = renderer;
    this.localisationService = localisationService;
  }
  get iconClasses() {
    const classes = [];
    if (this.item.iconClass) {
      classes.push(`${this.item.iconClass}`);
    }
    if (this.item.icon) {
      classes.push(`k-fab-item-icon k-icon k-i-${this.item.icon}`);
    }
    return classes;
  }
  get itemTitle() {
    const icon = this.item.icon;
    const itemTitle = this.item.itemTitle;
    return icon && itemTitle ? itemTitle : icon;
  }
  ngAfterViewInit() {
    const element = this.element.nativeElement;
    const rtl = this.localisationService.rtl;
    const hAlign = this.align.horizontal;
    this.renderer.addClass(element, this.getTextDirectionClass(rtl, hAlign));
  }
  getTextDirectionClass(rtl, hAlign) {
    const dir = rtl ? "rtl" : "ltr";
    const align2 = hAlign === "end" ? "end" : "start";
    const directions = {
      rtl: {
        end: "k-text-left",
        start: "k-text-right"
      },
      ltr: {
        start: "k-text-left",
        end: "k-text-right"
      }
    };
    return directions[dir][align2];
  }
  static \u0275fac = function DialItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialItemComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(LocalizationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _DialItemComponent,
    selectors: [["", "kendoDialItem", ""]],
    hostVars: 9,
    hostBindings: function DialItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role)("aria-disabled", ctx.disabledClass)("title", ctx.title)("aria-label", ctx.title)("data-fab-item-index", ctx.indexAttr);
        \u0275\u0275classProp("k-fab-item", ctx.hostClass)("k-disabled", ctx.disabledClass);
      }
    },
    inputs: {
      cssClass: "cssClass",
      cssStyle: "cssStyle",
      isFocused: "isFocused",
      index: "index",
      item: "item",
      dialItemTemplate: "dialItemTemplate",
      align: "align"
    },
    decls: 2,
    vars: 2,
    consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "k-fab-item-text"], ["innerCssClass", "k-fab-item-icon", 3, "name", "customFontClass", "svgIcon"]],
    template: function DialItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, DialItemComponent_Conditional_0_Template, 1, 6, null, 0);
        \u0275\u0275conditionalCreate(1, DialItemComponent_Conditional_1_Template, 2, 2);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.dialItemTemplate ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.dialItemTemplate ? 1 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, IconWrapperComponent],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialItemComponent, [{
    type: Component,
    args: [{
      selector: "[kendoDialItem]",
      template: `
        @if (dialItemTemplate) {
          <ng-template
            [ngTemplateOutlet]="dialItemTemplate"
            [ngTemplateOutletContext]="{ $implicit: item, index: index, isFocused: isFocused }"
            >
          </ng-template>
        }
        
        @if (!dialItemTemplate) {
          @if (item.label) {
            <span class="k-fab-item-text">{{ item.label }}</span>
          }
          @if (item.icon || item.iconClass || item.svgIcon) {
            <kendo-icon-wrapper
              [name]="item.icon"
              innerCssClass="k-fab-item-icon"
              [customFontClass]="item.iconClass"
            [svgIcon]="item.svgIcon"></kendo-icon-wrapper>
          }
        }
        `,
      standalone: true,
      imports: [NgTemplateOutlet, IconWrapperComponent]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: LocalizationService
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-fab-item"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }, {
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    title: [{
      type: HostBinding,
      args: ["attr.title"]
    }, {
      type: HostBinding,
      args: ["attr.aria-label"]
    }],
    indexAttr: [{
      type: HostBinding,
      args: ["attr.data-fab-item-index"]
    }],
    cssClass: [{
      type: Input
    }],
    cssStyle: [{
      type: Input
    }],
    isFocused: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    item: [{
      type: Input
    }],
    dialItemTemplate: [{
      type: Input
    }],
    align: [{
      type: Input
    }]
  });
})();
var DialListComponent = class _DialListComponent {
  focusService;
  cdr;
  hostClass = true;
  get bottomClass() {
    return this.align.vertical === "top" || this.align.vertical === "middle";
  }
  get topClass() {
    return this.align.vertical === "bottom";
  }
  dialItems;
  dialItemTemplate;
  align;
  subscriptions = new Subscription();
  constructor(focusService, cdr) {
    this.focusService = focusService;
    this.cdr = cdr;
    this.subscriptions.add(this.focusService.onFocus.subscribe(() => this.cdr.detectChanges()));
  }
  isFocused(index) {
    return this.focusService.isFocused(index);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static \u0275fac = function DialListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialListComponent)(\u0275\u0275directiveInject(FocusService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _DialListComponent,
    selectors: [["", "kendoDialList", ""]],
    hostVars: 6,
    hostBindings: function DialListComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("k-fab-items", ctx.hostClass)("k-fab-items-bottom", ctx.bottomClass)("k-fab-items-top", ctx.topClass);
      }
    },
    inputs: {
      dialItems: "dialItems",
      dialItemTemplate: "dialItemTemplate",
      align: "align"
    },
    decls: 2,
    vars: 0,
    consts: [["kendoButtonFocusable", "", "kendoDialItem", "", 3, "item", "index", "dialItemTemplate", "isFocused", "ngClass", "ngStyle", "align"]],
    template: function DialListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, DialListComponent_For_1_Template, 1, 7, "li", 0, \u0275\u0275repeaterTrackByIdentity);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.dialItems);
      }
    },
    dependencies: [FocusableDirective, DialItemComponent, NgClass, NgStyle],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialListComponent, [{
    type: Component,
    args: [{
      selector: "[kendoDialList]",
      template: `
        @for (item of dialItems; track item; let idx = $index) {
          <li
            kendoButtonFocusable
            kendoDialItem
            [item]="dialItems[idx]"
            [index]="idx"
            [dialItemTemplate]="dialItemTemplate"
            [isFocused]="isFocused(idx)"
            [ngClass]='item.cssClass'
            [ngStyle]='item.cssStyle'
            [align]="align"
            >
          </li>
        }
        `,
      standalone: true,
      imports: [FocusableDirective, DialItemComponent, NgClass, NgStyle]
    }]
  }], () => [{
    type: FocusService
  }, {
    type: ChangeDetectorRef
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-fab-items"]
    }],
    bottomClass: [{
      type: HostBinding,
      args: ["class.k-fab-items-bottom"]
    }],
    topClass: [{
      type: HostBinding,
      args: ["class.k-fab-items-top"]
    }],
    dialItems: [{
      type: Input
    }],
    dialItemTemplate: [{
      type: Input
    }],
    align: [{
      type: Input
    }]
  });
})();
var NAVIGATION_SETTINGS$1 = {
  useLeftRightArrows: false
};
var NAVIGATION_SETTINGS_PROVIDER$1 = {
  provide: NAVIGATION_CONFIG,
  useValue: NAVIGATION_SETTINGS$1
};
var SIZE_CLASSES = {
  small: "k-fab-sm",
  medium: "k-fab-md",
  large: "k-fab-lg"
};
var ROUNDED_CLASSES = {
  small: "k-rounded-sm",
  medium: "k-rounded-md",
  large: "k-rounded-lg",
  full: "k-rounded-full",
  none: "k-rounded-none"
};
var THEME_COLOR_PREFIX = "k-fab";
var DEFAULT_DURATION2 = 180;
var DEFAULT_ITEM_GAP = 90;
var DEFAULT_OFFSET2 = "16px";
var FloatingActionButtonComponent = class _FloatingActionButtonComponent {
  renderer;
  element;
  focusService;
  navigationService;
  ngZone;
  popupService;
  builder;
  localizationService;
  get fixedClass() {
    return this.positionMode === "fixed";
  }
  get absoluteClass() {
    return this.positionMode === "absolute";
  }
  direction;
  button;
  popupTemplate;
  dialItemTemplate;
  fabTemplate;
  /**
   * Specifies the theme color of the FloatingActionButton ([see example](https://www.telerik.com/kendo-angular-ui/components/buttons/floatingactionbutton/appearance#theme-colors)). The default value is set by the Kendo theme.
   */
  set themeColor(themeColor) {
    this.handleClasses(themeColor, "themeColor");
    this._themeColor = themeColor;
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * Specifies the size of the FloatingActionButton ([see example](https://www.telerik.com/kendo-angular-ui/components/buttons/floatingactionbutton/appearance#size)). The default value is set by the Kendo theme.
   */
  set size(size) {
    this.handleClasses(size, "size");
    this._size = size;
  }
  get size() {
    return this._size;
  }
  /**
   * Specifies the border radius of the FloatingActionButton ([see example](https://www.telerik.com/kendo-angular-ui/components/buttons/floatingactionbutton/appearance#roundness)). The default value is set by the Kendo theme.
   */
  set rounded(rounded) {
    this.handleClasses(rounded, "rounded");
    this._rounded = rounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Specifies whether the FloatingActionButton is disabled.
   * @default false
   */
  set disabled(disabled) {
    this._disabled = disabled;
  }
  get disabled() {
    return this._disabled;
  }
  /**
   * Specifies the alignment of the FloatingActionButton ([see example](https://www.telerik.com/kendo-angular-ui/components/buttons/floatingactionbutton/positioning#alignment)).
   * @default { horizontal: 'end', vertical: 'top' }
   */
  set align(align2) {
    this._align = Object.assign(this._align, align2);
  }
  get align() {
    return this._align;
  }
  /**
   * Specifies the offset position of the FloatingActionButton ([see example](https://www.telerik.com/kendo-angular-ui/components/buttons/floatingactionbutton/positioning#offset)).
   * @default { x: '16px', y: '16px' }
   */
  set offset(offset2) {
    this._offset = Object.assign(this._offset, offset2);
    this.offsetStyles();
  }
  get offset() {
    return this._offset;
  }
  /**
   * Specifies the position mode of the FloatingActionButton ([see example](https://www.telerik.com/kendo-angular-ui/components/buttons/floatingactionbutton/positioning#position-mode)).
   * @default "fixed"
   */
  positionMode = "fixed";
  /**
   * Defines the name of an existing icon in a Kendo UI theme.
   */
  icon;
  /**
   * Defines an [`SVGIcon`](https://www.telerik.com/kendo-angular-ui/components/icons/api/svgicon) to be rendered within the FloatingActionButton.
   */
  svgIcon;
  /**
   * Defines a CSS class or multiple classes for custom icons.
   */
  iconClass;
  /**
   * The CSS classes that will be rendered on the main button.
   * Supports the type of values that are supported by [`ngClass`](link:site.data.urls.angular['ngclassapi']).
   */
  buttonClass;
  /**
   * The CSS classes that will be rendered on the dial items `ul` element.
   * Supports the type of values that are supported by [`ngClass`](link:site.data.urls.angular['ngclassapi']).
   */
  dialClass;
  /**
   * Specifies the text content of the FloatingActionButton.
   *
   * @remarks
   * This property is related to accessibility.
   */
  text;
  /**
   * Specifies the animation settings of the FloatingActionButton dial items.
   * @default true
   */
  dialItemAnimation = true;
  /**
   * Specifies the [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the FloatingActionButton.
   * @default 0
   */
  tabIndex = 0;
  /**
   * Specifies the collection of dial items rendered in the FloatingActionButton popup.
   */
  dialItems = [];
  /**
   * Fires when the FloatingActionButton is blurred.
   */
  onBlur = new EventEmitter();
  /**
   * Fires when the FloatingActionButton is focused.
   */
  onFocus = new EventEmitter();
  /**
   * Fires when a dial item is clicked.
   */
  dialItemClick = new EventEmitter();
  /**
   * Fires when the popup is about to open. This event is preventable
   *  ([more information and example](https://www.telerik.com/kendo-angular-ui/components/buttons/floatingactionbutton/events)).
   */
  open = new EventEmitter();
  /**
   * Fires when the popup is about to close. This event is preventable
   * ([more information and example](https://www.telerik.com/kendo-angular-ui/components/buttons/floatingactionbutton/events)).
   */
  close = new EventEmitter();
  /**
   * @hidden
   */
  get componentTabIndex() {
    return this.disabled ? -1 : this.tabIndex;
  }
  /**
   * @hidden
   */
  id = `k-${guid()}`;
  /**
   * @hidden
   */
  dialListId = `k-dial-list-${guid()}`;
  _themeColor = void 0;
  _size = void 0;
  _rounded = void 0;
  _disabled = false;
  _align = {
    horizontal: "end",
    vertical: "bottom"
  };
  _offset = {
    x: DEFAULT_OFFSET2,
    y: DEFAULT_OFFSET2
  };
  subscriptions = new Subscription();
  popupMouseDownListener;
  rtl = false;
  animationEnd = new EventEmitter();
  popupRef;
  initialSetup = true;
  focusChangedProgrammatically = false;
  constructor(renderer, element, focusService, navigationService, ngZone, popupService, builder, localizationService) {
    this.renderer = renderer;
    this.element = element;
    this.focusService = focusService;
    this.navigationService = navigationService;
    this.ngZone = ngZone;
    this.popupService = popupService;
    this.builder = builder;
    this.localizationService = localizationService;
    A(packageMetadata3);
    this.subscribeNavigationEvents();
    this.subscriptions.add(this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    }));
  }
  ngAfterViewInit() {
    ["size", "rounded", "themeColor"].forEach((option) => this.handleClasses(this[option], option));
    this.renderer.addClass(this.element.nativeElement, this.alignClass());
    this.offsetStyles();
    this.initialSetup = false;
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    if (this.isOpen) {
      this.toggleDial(false);
    }
  }
  /**
   * Indicates whether the FloatingActionButton is currently open.
   */
  get isOpen() {
    return isPresent3(this.popupRef);
  }
  /**
   * Focuses the FloatingActionButton.
   */
  focus() {
    if (isDocumentAvailable()) {
      this.focusChangedProgrammatically = true;
      this.button.nativeElement.focus();
      this.focusChangedProgrammatically = false;
    }
  }
  /**
   * Blurs the FloatingActionButton.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.focusChangedProgrammatically = true;
      this.button.nativeElement.blur();
      this.focusChangedProgrammatically = false;
    }
  }
  /**
   * Toggles the visibility of the FloatingActionButton dial items popup.
   *
   * If you use the `toggleDial` method to open or close the dial items,
   * the `open` and `close` events do not fire ([more information and examples](https://www.telerik.com/kendo-angular-ui/components/buttons/floatingactionbutton/open_state)).
   *
   * @param open - The state of dial items popup.
   */
  toggleDial(open) {
    if (this.disabled || !this.hasDialItems) {
      return;
    }
    const shouldOpen = isPresent3(open) ? open : !this.isOpen;
    if (this.disabled || shouldOpen === this.isOpen) {
      return;
    }
    if (shouldOpen) {
      setTimeout(() => this.openDial());
    } else {
      this.closeDial();
    }
  }
  /**
   * @hidden
   */
  get ariaExpanded() {
    return this.hasDialItems ? this.isOpen : void 0;
  }
  /**
   * @hidden
   */
  get ariaHasPopup() {
    return this.hasDialItems ? "menu" : void 0;
  }
  /**
   * @hidden
   */
  get ariaControls() {
    if (!this.hasDialItems) {
      return void 0;
    }
    return this.isOpen ? this.dialListId : void 0;
  }
  /**
   * @hidden
   */
  get iconClasses() {
    const classes = [];
    if (this.iconClass) {
      classes.push(`${this.iconClass}`);
    }
    if (this.icon) {
      classes.push(`k-fab-icon k-icon k-i-${this.icon}`);
    }
    return classes;
  }
  /**
   * @hidden
   */
  clickHandler() {
    if (this.disabled || !this.hasDialItems) {
      return;
    }
    this.ngZone.run(() => {
      const shouldOpen = !this.isOpen;
      this.toggleDialWithEvents(shouldOpen);
    });
  }
  /**
   * @hidden
   */
  pointerdownHandler(e) {
    if (this.isOpen) {
      e.preventDefault();
      this.focus();
    }
  }
  /**
   * @hidden
   */
  keyDownHandler(event) {
    if (this.disabled) {
      return;
    }
    const focused = this.focusService.focused || 0;
    const code = normalizeKeys(event);
    const action = this.navigationService.process({
      altKey: event.altKey,
      current: focused,
      code,
      max: this.dialItems ? this.dialItems.length - 1 : 0,
      min: 0,
      flipNavigation: this.align.vertical === "bottom"
    });
    if (action !== NavigationAction.Undefined && action !== NavigationAction.Tab) {
      event.preventDefault();
    }
    if (action === NavigationAction.Tab && event.target.closest(`#${this.dialListId}`)) {
      this.focus();
    }
    if (action === NavigationAction.EnterUp && !this.hasDialItems) {
      this.button.nativeElement.click();
    } else if (action === NavigationAction.Open || action === NavigationAction.Close) {
      const toggleDial = action === NavigationAction.Open;
      this.ngZone.run(() => {
        this.toggleDialWithEvents(toggleDial);
      });
    }
  }
  /**
   * @hidden
   */
  onItemClick(event) {
    const item = closest2(event.target, ".k-fab-item");
    if (!item) {
      return;
    }
    const index = parseInt(item.getAttribute("data-fab-item-index"));
    this.emitItemClick(index);
  }
  /**
   * @hidden
   */
  focusHandler() {
    if (!this.disabled && !this.focusChangedProgrammatically) {
      this.onFocus.emit();
    }
  }
  /**
   * @hidden
   */
  blurHandler(e) {
    const focusInList = e.relatedTarget && e.relatedTarget.closest(`#${this.dialListId}`);
    if (focusInList) {
      return;
    }
    if (!this.focusChangedProgrammatically) {
      this.onBlur.emit();
    }
    this.toggleDialWithEvents(false);
  }
  /**
   * @hidden
   */
  focusOutHandler(e) {
    const focusInList = e.relatedTarget && e.relatedTarget.closest(`#${this.dialListId}`);
    const focusOnButton = e.relatedTarget === this.button.nativeElement;
    const shouldClose = !focusInList && !focusOnButton;
    if (shouldClose) {
      this.toggleDialWithEvents(false);
      if (!this.focusChangedProgrammatically) {
        this.onBlur.emit();
      }
    }
  }
  /**
   * @hidden
   */
  onNavigationEnterPress() {
    this.ngZone.run(() => {
      if (this.isOpen) {
        const focusedIndex = this.focusService.focused;
        const focusedItem = this.dialItems[focusedIndex];
        if (focusedItem?.disabled) {
          return;
        }
        if (isPresent3(focusedIndex) && focusedIndex !== -1) {
          this.onEnterPressed();
          return;
        }
      }
      if (!this.isOpen && isDocumentAvailable()) {
        this.toggleDialWithEvents(true);
        this.focus();
      }
    });
  }
  /**
   * @hidden
   */
  onNavigationClose() {
    if (this.isOpen) {
      this.ngZone.run(() => {
        this.toggleDialWithEvents(false);
        this.focus();
      });
    }
  }
  handleClasses(inputValue, input) {
    if (isPresent3(this.button) && (this[input] !== inputValue || this.initialSetup)) {
      const button = this.button.nativeElement;
      const classesToRemove = {
        themeColor: `${THEME_COLOR_PREFIX}-${this.themeColor}`,
        size: SIZE_CLASSES[this.size],
        rounded: ROUNDED_CLASSES[this.rounded]
      };
      const classesToAdd = {
        themeColor: inputValue ? `${THEME_COLOR_PREFIX}-${inputValue}` : "",
        size: SIZE_CLASSES[inputValue],
        rounded: ROUNDED_CLASSES[inputValue]
      };
      this.renderer.removeClass(button, classesToRemove[input]);
      if (classesToAdd[input]) {
        this.renderer.addClass(button, classesToAdd[input]);
      }
    }
  }
  onEnterPressed() {
    const index = this.focusService.focused;
    this.emitItemClick(index);
  }
  emitItemClick(index) {
    const item = this.dialItems[index];
    if (item && !item.disabled) {
      const clickEventArgs = {
        item,
        index
      };
      this.dialItemClick.emit(clickEventArgs);
      this.toggleDialWithEvents(false);
      this.focusService.focused = index;
    }
    this.focus();
  }
  subscribeNavigationEvents() {
    this.subscriptions.add(this.navigationService.navigate.subscribe(this.onArrowKeyNavigate.bind(this)));
    this.subscriptions.add(this.navigationService.enter.subscribe(this.onNavigationEnterPress.bind(this)));
    this.subscriptions.add(merge(this.navigationService.close, this.navigationService.esc).subscribe(this.onNavigationClose.bind(this)));
  }
  onArrowKeyNavigate({
    index
  }) {
    this.focusService.focus(index);
  }
  alignClass() {
    return `k-pos-${this.align.vertical}-${this.align.horizontal}`;
  }
  toggleDialWithEvents(open) {
    if (open === this.isOpen) {
      return;
    }
    const event = new PreventableEvent2();
    if (open) {
      this.open.emit(event);
    } else {
      this.close.emit(event);
    }
    if (event.isDefaultPrevented()) {
      return;
    }
    if (open) {
      this.openDial();
    } else {
      this.closeDial();
    }
  }
  openPopup() {
    if (this.isOpen) {
      return;
    }
    const isIconFab = this.icon && !this.text;
    const rtl = this.rtl;
    const align2 = this.align;
    this.popupRef = this.popupService.open({
      anchor: this.element.nativeElement,
      animate: false,
      content: this.popupTemplate,
      anchorAlign: getAnchorAlign(align2, rtl),
      popupAlign: getPopupAlign(align2, rtl),
      popupClass: "k-fab-popup k-popup-transparent"
    });
    const popupElement = this.popupRef.popupElement;
    this.renderer.setStyle(popupElement, "box-shadow", "none");
    if (isIconFab) {
      this.subscriptions.add(this.popupRef.popupOpen.subscribe(() => this.positionPopup()));
    }
    this.ngZone.runOutsideAngular(() => {
      this.popupMouseDownListener = this.renderer.listen(popupElement, "mousedown", (event) => {
        event.preventDefault();
      });
    });
    this.subscriptions.add(this.popupRef.popupAnchorViewportLeave.subscribe(() => this.toggleDialWithEvents(false)));
  }
  closePopup() {
    if (this.isOpen) {
      if (this.popupMouseDownListener) {
        this.popupMouseDownListener();
      }
      this.popupRef.close();
      this.popupRef = null;
    }
  }
  openDial() {
    this.openPopup();
    this.focusService.focus(0);
    if (this.dialItemAnimation && this.isValidAnimation()) {
      this.playAnimation(true);
    }
    this.renderer.setAttribute(this.button.nativeElement, "aria-expanded", "true");
  }
  closeDial() {
    if (this.dialItemAnimation && this.isValidAnimation()) {
      this.playAnimation(false);
      this.animationEnd.pipe(take(1)).subscribe(() => this.closePopup());
    } else {
      this.closePopup();
    }
    this.renderer.setAttribute(this.button.nativeElement, "aria-expanded", "false");
    this.focusService.resetFocus();
  }
  isValidAnimation() {
    const animation2 = this.dialItemAnimation;
    if (typeof animation2 !== "boolean") {
      return animation2.duration !== 0;
    }
    return true;
  }
  positionPopup() {
    if (this.dialItemTemplate) {
      return;
    }
    if (!this.popupRef) {
      return;
    }
    const fab = this.element.nativeElement;
    const fabWidth = fab.getBoundingClientRect().width;
    const popupEl = this.popupRef.popupElement;
    const icon = popupEl.querySelector(".k-fab-item-icon");
    if (!icon) {
      return;
    }
    const iconWidth = icon.getBoundingClientRect().width;
    const left = fabWidth / 2 - iconWidth / 2;
    const popupLeft = popupEl.getBoundingClientRect().left;
    const isEndAlign = this.align.horizontal === "end";
    const leftValue = isEndAlign ? popupLeft - left : left + popupLeft;
    const rtlLeftValue = isEndAlign ? left + popupLeft : popupLeft - left;
    popupEl.style.left = this.rtl ? `${rtlLeftValue}px` : `${leftValue}px`;
  }
  offsetStyles() {
    const hostElement = this.element.nativeElement;
    this.renderer.setStyle(hostElement, this.horizontalPosition, this.horizontalOffset);
    this.renderer.setStyle(hostElement, this.verticalPosition, this.verticalOffset);
  }
  get hasDialItems() {
    return isPresent3(this.dialItems) && this.dialItems.length !== 0;
  }
  /**
   * Gets the CSS prop name of the selected vertical position (`top`/`bottom`);
   */
  get verticalPosition() {
    return {
      top: "top",
      middle: "top",
      bottom: "bottom"
    }[this.align.vertical];
  }
  /**
   * Gets the offset according to the selected vertical position.
   */
  get verticalOffset() {
    if (this.align.vertical === "middle") {
      return this.offset.y === DEFAULT_OFFSET2 ? "50%" : `calc(50% + ${this.offset.y})`;
    }
    return this.offset.y;
  }
  /**
   * Gets the CSS prop name of the selected horizontal position (`left`/`right`);
   */
  get horizontalPosition() {
    const {
      horizontal
    } = this.align;
    return {
      end: this.rtl ? "left" : "right",
      center: "left",
      start: this.rtl ? "right" : "left"
    }[horizontal];
  }
  /**
   * Gets the offset according to the selected horizontal position.
   */
  get horizontalOffset() {
    if (this.align.horizontal === "center") {
      return this.offset.x === DEFAULT_OFFSET2 ? "50%" : `calc(50% + ${this.offset.x})`;
    }
    return this.offset.x;
  }
  playerFor(element, animation2) {
    const factory = this.builder.build(animation2);
    return factory.create(element);
  }
  playAnimation(open) {
    const durationSettings = this.durationSettings();
    const animationSettings = {
      duration: durationSettings.duration,
      gap: durationSettings.gap,
      align: this.align
    };
    const animation2 = open ? openAnimation(animationSettings) : closeAnimation(animationSettings);
    let player = this.playerFor(this.popupRef.popupElement, animation2);
    player.play();
    player.onDone(() => {
      if (player) {
        this.animationEnd.emit();
        player.destroy();
        player = null;
      }
    });
  }
  durationSettings() {
    return {
      duration: this.animationDuration(),
      gap: this.animationGap()
    };
  }
  animationGap() {
    const animation2 = this.dialItemAnimation;
    if (typeof animation2 !== "boolean" && isPresent3(animation2.gap)) {
      return animation2.gap;
    }
    return DEFAULT_ITEM_GAP;
  }
  animationDuration() {
    const animation2 = this.dialItemAnimation;
    if (typeof animation2 !== "boolean" && isPresent3(animation2.duration)) {
      return animation2.duration;
    }
    return DEFAULT_DURATION2;
  }
  static \u0275fac = function FloatingActionButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FloatingActionButtonComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FocusService), \u0275\u0275directiveInject(NavigationService), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(PopupService), \u0275\u0275directiveInject(AnimationBuilder), \u0275\u0275directiveInject(LocalizationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _FloatingActionButtonComponent,
    selectors: [["kendo-floatingactionbutton"]],
    contentQueries: function FloatingActionButtonComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, DialItemTemplateDirective, 5)(dirIndex, FloatingActionButtonTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dialItemTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fabTemplate = _t.first);
      }
    },
    viewQuery: function FloatingActionButtonComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c42, 7)(_c62, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.button = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.popupTemplate = _t.first);
      }
    },
    hostVars: 5,
    hostBindings: function FloatingActionButtonComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("dir", ctx.direction);
        \u0275\u0275classProp("k-pos-fixed", ctx.fixedClass)("k-pos-absolute", ctx.absoluteClass);
      }
    },
    inputs: {
      themeColor: "themeColor",
      size: "size",
      rounded: "rounded",
      disabled: "disabled",
      align: "align",
      offset: "offset",
      positionMode: "positionMode",
      icon: "icon",
      svgIcon: "svgIcon",
      iconClass: "iconClass",
      buttonClass: "buttonClass",
      dialClass: "dialClass",
      text: "text",
      dialItemAnimation: "dialItemAnimation",
      tabIndex: "tabIndex",
      dialItems: "dialItems"
    },
    outputs: {
      onBlur: "blur",
      onFocus: "focus",
      dialItemClick: "dialItemClick",
      open: "open",
      close: "close"
    },
    features: [\u0275\u0275ProvidersFeature([FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER$1, LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.floatingactionbutton"
    }])],
    decls: 6,
    vars: 18,
    consts: [["button", ""], ["popupTemplate", ""], ["type", "button", 1, "k-fab", 3, "focus", "blur", "tabIndex", "ngClass", "disabled", "kendoEventsOutsideAngular", "scope"], [3, "ngTemplateOutlet"], ["innerCssClass", "k-fab-icon", 3, "name", "customFontClass", "svgIcon"], [1, "k-fab-text"], ["kendoDialList", "", "role", "menu", 3, "click", "id", "ngClass", "dialItems", "dialItemTemplate", "align", "kendoEventsOutsideAngular"]],
    template: function FloatingActionButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "button", 2, 0);
        \u0275\u0275listener("focus", function FloatingActionButtonComponent_Template_button_focus_0_listener() {
          return ctx.focusHandler();
        })("blur", function FloatingActionButtonComponent_Template_button_blur_0_listener($event) {
          return ctx.blurHandler($event);
        });
        \u0275\u0275conditionalCreate(2, FloatingActionButtonComponent_Conditional_2_Template, 1, 1, null, 3);
        \u0275\u0275conditionalCreate(3, FloatingActionButtonComponent_Conditional_3_Template, 2, 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, FloatingActionButtonComponent_ng_template_4_Template, 1, 10, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275classProp("k-disabled", ctx.disabled);
        \u0275\u0275property("tabIndex", ctx.componentTabIndex)("ngClass", ctx.buttonClass)("disabled", ctx.disabled)("kendoEventsOutsideAngular", \u0275\u0275pureFunction3(14, _c92, ctx.keyDownHandler, ctx.clickHandler, ctx.pointerdownHandler))("scope", ctx);
        \u0275\u0275attribute("id", ctx.id)("aria-disabled", ctx.disabled || null)("aria-expanded", ctx.ariaExpanded)("aria-haspopup", ctx.ariaHasPopup)("aria-controls", ctx.ariaControls);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.fabTemplate ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.fabTemplate ? 3 : -1);
      }
    },
    dependencies: [NgClass, EventsOutsideAngularDirective, NgTemplateOutlet, IconWrapperComponent, DialListComponent],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatingActionButtonComponent, [{
    type: Component,
    args: [{
      selector: "kendo-floatingactionbutton",
      providers: [FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER$1, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.floatingactionbutton"
      }],
      template: `
        <button
            #button
            [attr.id]="id"
            [tabIndex]="componentTabIndex"
            type="button"
            class="k-fab"
            [class.k-disabled]="disabled"
            [ngClass]="buttonClass"
            [disabled]="disabled"
            [attr.aria-disabled]="disabled || null"
            [attr.aria-expanded]="ariaExpanded"
            [attr.aria-haspopup]="ariaHasPopup"
            [attr.aria-controls]="ariaControls"
            (focus)="focusHandler()"
            (blur)="blurHandler($event)"
            [kendoEventsOutsideAngular]="{
                keydown: keyDownHandler,
                click: clickHandler,
                pointerdown: pointerdownHandler
            }"
          [scope]="this"
          >
          @if (fabTemplate) {
            <ng-template
              [ngTemplateOutlet]="fabTemplate?.templateRef"
              >
            </ng-template>
          }

          @if (!fabTemplate) {
            @if (icon || iconClass || svgIcon) {
              <kendo-icon-wrapper
                [name]="icon"
                innerCssClass="k-fab-icon"
                [customFontClass]="iconClass"
              [svgIcon]="svgIcon"></kendo-icon-wrapper>
            }
            @if (text) {
              <span class="k-fab-text">{{ text }}</span>
            }
          }
        </button>

        <ng-template #popupTemplate>
          <ul
            kendoDialList
            role="menu"
            [id]="dialListId"
            [ngClass]="dialClass"
            [dialItems]="dialItems"
            [dialItemTemplate]='dialItemTemplate?.templateRef'
            [align]="align"
            [attr.aria-labelledby]="id"
            (click)="onItemClick($event)"
                [kendoEventsOutsideAngular]="{
                    keydown: keyDownHandler.bind(this),
                    focusout: focusOutHandler.bind(this)
                }"
            >
          </ul>
        </ng-template>
        `,
      standalone: true,
      imports: [NgClass, EventsOutsideAngularDirective, NgTemplateOutlet, IconWrapperComponent, DialListComponent]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: FocusService
  }, {
    type: NavigationService
  }, {
    type: NgZone
  }, {
    type: PopupService
  }, {
    type: AnimationBuilder
  }, {
    type: LocalizationService
  }], {
    fixedClass: [{
      type: HostBinding,
      args: ["class.k-pos-fixed"]
    }],
    absoluteClass: [{
      type: HostBinding,
      args: ["class.k-pos-absolute"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    button: [{
      type: ViewChild,
      args: ["button", {
        static: true
      }]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate", {
        static: true
      }]
    }],
    dialItemTemplate: [{
      type: ContentChild,
      args: [DialItemTemplateDirective, {
        static: false
      }]
    }],
    fabTemplate: [{
      type: ContentChild,
      args: [FloatingActionButtonTemplateDirective, {
        static: false
      }]
    }],
    themeColor: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    align: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    positionMode: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    buttonClass: [{
      type: Input
    }],
    dialClass: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    dialItemAnimation: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    dialItems: [{
      type: Input
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    dialItemClick: [{
      type: Output,
      args: ["dialItemClick"]
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }]
  });
})();
var Messages = class _Messages extends ComponentMessages {
  /**
   * Specifies the text for the SplitButton `aria-label`.
   *
   * The `aria-label` text consists of two parts: the SplitButton text and a localizable string.
   * For example, for a SplitButton with the text `'Reply'`, the default `aria-label` is `'Reply splitbutton'`.
   *
   * To reorder the SplitButton text and the localizable part, use the `splitButtonLabel` property with a
   * placeholder for the button text, such as `'splitbutton for {buttonText}'`. The `{buttonText}` placeholder
   * is replaced internally with the current SplitButton text. For instance, the resulting `aria-label` is
   * rendered as `'splitbutton for Reply'`.
   *
   * @example
   * ```ts
   * <kendo-splitbutton>
   *     <kendo-splitbutton-messages
   *         splitButtonLabel="splitbutton for {buttonText}">
   *     </kendo-splitbutton-messages>
   * </kendo-splitbutton>
   * ```
   */
  splitButtonLabel;
  /**
   * Specifies the text for the SplitButton toggle button `aria-label`.
   */
  toggleButtonLabel;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Messages_BaseFactory;
    return function Messages_Factory(__ngFactoryType__) {
      return (\u0275Messages_BaseFactory || (\u0275Messages_BaseFactory = \u0275\u0275getInheritedFactory(_Messages)))(__ngFactoryType__ || _Messages);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _Messages,
    selectors: [["kendo-splitbutton-messages-base"]],
    inputs: {
      splitButtonLabel: "splitButtonLabel",
      toggleButtonLabel: "toggleButtonLabel"
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Messages, [{
    type: Directive,
    args: [{
      selector: "kendo-splitbutton-messages-base"
    }]
  }], null, {
    splitButtonLabel: [{
      type: Input
    }],
    toggleButtonLabel: [{
      type: Input
    }]
  });
})();
var SplitButtonCustomMessagesComponent = class _SplitButtonCustomMessagesComponent extends Messages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
  static \u0275fac = function SplitButtonCustomMessagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SplitButtonCustomMessagesComponent)(\u0275\u0275directiveInject(LocalizationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SplitButtonCustomMessagesComponent,
    selectors: [["kendo-splitbutton-messages"]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: Messages,
      useExisting: forwardRef(() => _SplitButtonCustomMessagesComponent)
    }]), \u0275\u0275InheritDefinitionFeature],
    decls: 0,
    vars: 0,
    template: function SplitButtonCustomMessagesComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitButtonCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: forwardRef(() => SplitButtonCustomMessagesComponent)
      }],
      selector: "kendo-splitbutton-messages",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var LocalizedSplitButtonMessagesDirective = class _LocalizedSplitButtonMessagesDirective extends Messages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  static \u0275fac = function LocalizedSplitButtonMessagesDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalizedSplitButtonMessagesDirective)(\u0275\u0275directiveInject(LocalizationService));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _LocalizedSplitButtonMessagesDirective,
    selectors: [["", "kendoSplitButtonLocalizedMessages", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: Messages,
      useExisting: forwardRef(() => _LocalizedSplitButtonMessagesDirective)
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedSplitButtonMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: forwardRef(() => LocalizedSplitButtonMessagesDirective)
      }],
      selector: "[kendoSplitButtonLocalizedMessages]",
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var NAVIGATION_SETTINGS = {
  useLeftRightArrows: true
};
var NAVIGATION_SETTINGS_PROVIDER = {
  provide: NAVIGATION_CONFIG,
  useValue: NAVIGATION_SETTINGS
};
var SplitButtonComponent = class _SplitButtonComponent extends ListButton {
  localization;
  renderer;
  /**
   * Sets the text displayed within the SplitButton.
   *
   * @remarks
   * This property is related to accessibility.
   */
  text = "";
  /**
   * Specifies an icon to display next to the button text ([see example](https://www.telerik.com/kendo-angular-ui/components/buttons/splitbutton/data-binding#arrays-of-complex-data)).
   */
  icon = "";
  /**
   * Specifies an `SVGIcon` to display next to the button text.
   */
  svgIcon;
  /**
   * Specifies a custom CSS class for the icon displayed next to the button text ([see example](https://www.telerik.com/kendo-angular-ui/components/buttons/splitbutton/data-binding#arrays-of-complex-data)).
   */
  iconClass;
  /**
   * Specifies the `type` attribute of the main button.
   */
  type = "button";
  /**
   * Specifies the URL of an image to display next to the button text ([see example](https://www.telerik.com/kendo-angular-ui/components/buttons/splitbutton/data-binding#arrays-of-complex-data)).
   */
  imageUrl = "";
  /**
   * Configures the padding of the SplitButton ([see example](https://www.telerik.com/kendo-angular-ui/components/buttons/api/splitbuttoncomponent#size)). The default value is set by the Kendo theme.
   */
  size = void 0;
  /**
   * Configures the border radius of the SplitButton ([see example](https://www.telerik.com/kendo-angular-ui/components/buttons/api/splitbuttoncomponent#rounded)). The default value is set by the Kendo theme.
   */
  set rounded(rounded) {
    this.handleClasses(rounded, "rounded");
    this._rounded = rounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Configures the background and border styles of the SplitButton ([see example](https://www.telerik.com/kendo-angular-ui/components/buttons/api/splitbuttoncomponent#fillmode)). The default value is set by the Kendo theme.
   */
  set fillMode(fillMode) {
    this._fillMode = fillMode === "clear" ? "flat" : fillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * Configures the theme color of the SplitButton. The theme color applies to the background, border, and text ([see example](https://www.telerik.com/kendo-angular-ui/components/buttons/api/splitbuttoncomponent#themecolor)). The default value is set by the Kendo theme.
   */
  themeColor = void 0;
  /**
   * Disables the SplitButton when set to `true` ([see example](https://www.telerik.com/kendo-angular-ui/components/buttons/splitbutton/data-binding#arrays-of-complex-data)).
   */
  set disabled(value) {
    if (this.isOpen) {
      this.toggle(false);
    }
    this._disabled = value;
  }
  get disabled() {
    return this._disabled;
  }
  /**
   * Configures the popup settings of the SplitButton.
   */
  set popupSettings(settings) {
    this._popupSettings = __spreadValues({
      animate: true,
      popupClass: ""
    }, settings);
  }
  get popupSettings() {
    return this._popupSettings;
  }
  /**
   * Specifies the [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
   *
   * @default 0
   */
  tabIndex = 0;
  /**
   * Configures the text field of the button-list popup.
   */
  textField;
  /**
   * Sets the data for the SplitButton. Provide the data as an array-like list.
   */
  set data(data) {
    this._data = data || [];
  }
  get data() {
    if (!this._data) {
      this.data = [];
    }
    return this._data;
  }
  /**
   * Specifies the CSS classes for the button that opens the popup.
   * Supports values compatible with [`ngClass`](link:site.data.urls.angular['ngclassapi']).
   */
  arrowButtonClass;
  /**
   * Specifies the name of the font icon displayed on the button that opens the popup.
   */
  arrowButtonIcon = "chevron-down";
  /**
   * Specifies the [`SVGIcon`](https://www.telerik.com/kendo-angular-ui/components/icons/api/svgiconcomponent) displayed on the button that opens the popup.
   */
  arrowButtonSvgIcon = chevronDownIcon;
  /**
   * Sets attributes for the main button.
   */
  set buttonAttributes(buttonAttributes) {
    const newButtonAttributes = buttonAttributes || null;
    this.handleButtonAttributes(newButtonAttributes);
    this._buttonAttributes = newButtonAttributes;
  }
  get buttonAttributes() {
    return this._buttonAttributes;
  }
  /**
   * Emits an event when the main button is clicked.
   */
  buttonClick = new EventEmitter();
  /**
   * Emits an event when an item in the drop-down list is clicked. The event data contains the clicked item's data.
   */
  itemClick = new EventEmitter();
  /**
   * Emits an event when the SplitButton gains focus.
   */
  onFocus = new EventEmitter();
  /**
   * Emits an event when the SplitButton is blurred.
   */
  onBlur = new EventEmitter();
  /**
   * Emits an event before the popup opens. This event is preventable.
   */
  open = new EventEmitter();
  /**
   * Emits an event before the popup closes. This event is preventable.
   */
  close = new EventEmitter();
  /**
   * Specifies a template to customize the content of the items in the drop-down list.
   */
  itemTemplate;
  activeArrow = false;
  listId = guid();
  /**
   * @hidden
   */
  get hasContent() {
    return this.button?.nativeElement.childElementCount > 0;
  }
  /**
   * @hidden
   */
  get active() {
    return this._active;
  }
  /**
   * @hidden
   */
  get componentTabIndex() {
    return this.disabled ? -1 : this.tabIndex;
  }
  buttonText = "";
  arrowButtonClicked = false;
  _rounded = void 0;
  _fillMode = void 0;
  _buttonAttributes = null;
  documentMouseUpSub;
  set isFocused(value) {
    this._isFocused = value;
  }
  get isFocused() {
    return this._isFocused && !this._disabled && isDocumentAvailable() && this.wrapperContains(document.activeElement);
  }
  get widgetClasses() {
    return true;
  }
  get dir() {
    return this.direction;
  }
  /**
   * @hidden
   */
  get ariaLabel() {
    const localizationMsg = this.messageFor("splitButtonLabel") || "";
    return replaceMessagePlaceholder(localizationMsg, "buttonText", this.buttonText);
  }
  /**
   * @hidden
   */
  messageFor(key) {
    return this.localization.get(key);
  }
  /**
   * @hidden
   */
  onButtonFocus(event) {
    if (!this._disabled) {
      if (!this._isFocused) {
        this.onFocus.emit();
      }
      this._isFocused = true;
      this.focusService.resetFocus();
      const relatedTargetInList = event.relatedTarget && closest2(event.relatedTarget, ".k-popup kendo-button-list");
      if (this.openState && !relatedTargetInList) {
        this.focusService.focus(0);
      }
    }
  }
  /**
   * @hidden
   */
  onArrowButtonClick() {
    this.togglePopupVisibility();
    this.arrowButtonClicked = false;
    if (!this.isOpen) {
      this.focus();
    }
  }
  /**
   * @hidden
   */
  toggleButtonActiveState(enable) {
    this._active = enable;
  }
  /**
   * @hidden
   */
  toggleArrowButtonActiveState(enable) {
    this.arrowButtonClicked = true;
    this.activeArrow = enable;
  }
  /**
   * @hidden
   */
  onButtonClick() {
    this.buttonClick.emit();
  }
  /**
   * @hidden
   */
  onButtonBlur() {
    if (!this.isOpen && !this.arrowButtonClicked) {
      this.blurWrapper();
    }
  }
  /**
   * @hidden
   */
  keydown(event) {
    this.keyDownHandler(event, true);
    if (event.code === Keys.Space) {
      this._active = true;
    }
  }
  /**
   * @hidden
   */
  keyup(event) {
    this._active = false;
    if (event.code !== Keys.Space) {
      this.keyUpHandler(event);
    }
  }
  ngDoCheck() {
    this.updateButtonText();
  }
  ngAfterViewInit() {
    this.containerService.container = this.container;
    this.containerService.template = this.popupTemplate;
    this.handleClasses(this.rounded, "rounded");
    this.handleButtonAttributes(this.buttonAttributes);
  }
  ngOnChanges(changes) {
    if (changes.hasOwnProperty("text")) {
      this.updateButtonText();
    }
    if (anyChanged(["text", "icon", "svgIcon", "iconClass", "imageUrl"], changes)) {
      this.toggleButtonIconClass();
    }
    if (isChanged("popupSettings", changes) && isPresent3(this.popupRef)) {
      const popup = this.popupRef.popup.instance;
      const newSettings = changes["popupSettings"].currentValue;
      popup.popupClass = newSettings.popupClass;
      popup.animate = newSettings.animate;
      popup.popupAlign = this.popupAlign;
    }
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    if (this.documentMouseUpSub) {
      this.documentMouseUpSub();
    }
    super.ngOnDestroy();
  }
  /**
   * @hidden
   */
  onNavigationEnterUp(args) {
    if (args.target !== this.button.nativeElement) {
      super.onNavigationEnterUp(args);
    }
  }
  /**
   * @hidden
   */
  togglePopupVisibility() {
    if (isDocumentAvailable() && this.wrapperContains(document.activeElement) && this.arrowButtonClicked) {
      this.button.nativeElement.focus();
    }
    super.togglePopupVisibility();
  }
  /**
   * @hidden
   */
  wrapperContains(element) {
    return this.wrapper === element || this.wrapper.contains(element);
  }
  /**
   * @hidden
   */
  get anchorAlign() {
    const align2 = {
      horizontal: this.popupSettings.align || "left",
      vertical: "bottom"
    };
    if (this.direction === "rtl" && !isPresent3(this.popupSettings.align)) {
      align2.horizontal = "right";
    }
    return align2;
  }
  /**
   * @hidden
   */
  get popupAlign() {
    const align2 = {
      horizontal: this.popupSettings.align || "left",
      vertical: "top"
    };
    if (this.direction === "rtl" && !isPresent3(this.popupSettings.align)) {
      align2.horizontal = "right";
    }
    return align2;
  }
  /**
   * @hidden
   */
  get isIconButton() {
    const hasIcon = this.icon || this.svgIcon || this.iconClass || this.imageUrl;
    const hasTextContent = isDocumentAvailable() && this.button?.nativeElement.textContent.trim().length > 0;
    return hasIcon && !hasTextContent;
  }
  /**
   * Focuses the SplitButton component.
   */
  focus() {
    if (isDocumentAvailable()) {
      this.button.nativeElement.focus();
    }
  }
  /**
   * Blurs the SplitButton component.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.button.nativeElement.blur();
      this.blurWrapper();
    }
  }
  constructor(focusService, navigationService, wrapperRef, zone, popupService, elRef, localization, cdr, renderer, containerService) {
    super(focusService, navigationService, wrapperRef, zone, popupService, elRef, localization, cdr, containerService);
    this.localization = localization;
    this.renderer = renderer;
    this._itemClick = this.itemClick;
    this._blur = this.onBlur;
    zone.runOutsideAngular(() => {
      this.documentMouseUpSub = this.renderer.listen("document", "mouseup", () => {
        if (this.active) {
          zone.run(() => this._active = false);
        }
        if (this.activeArrow) {
          zone.run(() => this.activeArrow = false);
        }
      });
    });
  }
  /**
   * Returns the current open state of the popup.
   */
  get isOpen() {
    return this.openState;
  }
  updateButtonText() {
    if (isDocumentAvailable()) {
      const innerText = this.wrapper?.innerText.split("\n").join("").trim();
      if (innerText !== this.buttonText) {
        this.buttonText = innerText;
      }
    }
  }
  handleClasses(value, input) {
    const elem = this.wrapperRef.nativeElement;
    const classes = getStylingClasses("button", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  toggleButtonIconClass() {
    this.button.nativeElement.classList[this.isIconButton ? "add" : "remove"]("k-button-icon");
  }
  handleButtonAttributes(newButtonAttributes) {
    const mainButton = this.button?.nativeElement;
    if (isPresent3(this.buttonAttributes) && isPresent3(mainButton)) {
      for (const attr in this.buttonAttributes) {
        this.renderer.removeAttribute(mainButton, attr, this.buttonAttributes[attr]);
      }
    }
    if (isPresent3(newButtonAttributes) && isPresent3(mainButton)) {
      for (const attr in newButtonAttributes) {
        this.renderer.setAttribute(mainButton, attr, newButtonAttributes[attr]);
      }
    }
  }
  static \u0275fac = function SplitButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SplitButtonComponent)(\u0275\u0275directiveInject(FocusService), \u0275\u0275directiveInject(NavigationService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(PopupService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(LocalizationService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(PopupContainerService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SplitButtonComponent,
    selectors: [["kendo-splitbutton"]],
    contentQueries: function SplitButtonComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, ButtonItemTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t.first);
      }
    },
    hostVars: 7,
    hostBindings: function SplitButtonComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function SplitButtonComponent_keydown_HostBindingHandler($event) {
          return ctx.keydown($event);
        })("keyup", function SplitButtonComponent_keyup_HostBindingHandler($event) {
          return ctx.keyup($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("dir", ctx.dir);
        \u0275\u0275classProp("k-focus", ctx.isFocused)("k-split-button", ctx.widgetClasses)("k-button-group", ctx.widgetClasses);
      }
    },
    inputs: {
      text: "text",
      icon: "icon",
      svgIcon: "svgIcon",
      iconClass: "iconClass",
      type: "type",
      imageUrl: "imageUrl",
      size: "size",
      rounded: "rounded",
      fillMode: "fillMode",
      themeColor: "themeColor",
      disabled: "disabled",
      popupSettings: "popupSettings",
      tabIndex: "tabIndex",
      textField: "textField",
      data: "data",
      arrowButtonClass: "arrowButtonClass",
      arrowButtonIcon: "arrowButtonIcon",
      arrowButtonSvgIcon: "arrowButtonSvgIcon",
      buttonAttributes: "buttonAttributes"
    },
    outputs: {
      buttonClick: "buttonClick",
      itemClick: "itemClick",
      onFocus: "focus",
      onBlur: "blur",
      open: "open",
      close: "close"
    },
    exportAs: ["kendoSplitButton"],
    features: [\u0275\u0275ProvidersFeature([FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER, LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.splitbutton"
    }, PopupContainerService, {
      provide: MultiTabStop,
      useExisting: forwardRef(() => _SplitButtonComponent)
    }]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c03,
    decls: 12,
    vars: 31,
    consts: () => {
      let i18n_0;
      if (false) {
        const MSG_C__USERS_ADMINISTRATOR_SQUADFLOW_APPS_PORTAL_NODE_MODULES__PROGRESS_KENDO_ANGULAR_BUTTONS_FESM2022_PROGRESS_KENDO_ANGULAR_BUTTONS_MJS_0 = (
          /* @ts-ignore */
          goog.getMsg("Toggle options")
        );
        i18n_0 = MSG_C__USERS_ADMINISTRATOR_SQUADFLOW_APPS_PORTAL_NODE_MODULES__PROGRESS_KENDO_ANGULAR_BUTTONS_FESM2022_PROGRESS_KENDO_ANGULAR_BUTTONS_MJS_0;
      } else {
        i18n_0 = $localize`:kendo.splitbutton.toggleButtonLabel|The text for the SplitButton toggle button aria-label:Toggle options`;
      }
      let i18n_1;
      if (false) {
        const MSG_C__USERS_ADMINISTRATOR_SQUADFLOW_APPS_PORTAL_NODE_MODULES__PROGRESS_KENDO_ANGULAR_BUTTONS_FESM2022_PROGRESS_KENDO_ANGULAR_BUTTONS_MJS_1 = (
          /* @ts-ignore */
          goog.getMsg("{$interpolation}", {
            "interpolation": "\uFFFD0\uFFFD"
          }, {
            original_code: {
              "interpolation": "{{ '{buttonText} splitbutton' }}"
            }
          })
        );
        i18n_1 = MSG_C__USERS_ADMINISTRATOR_SQUADFLOW_APPS_PORTAL_NODE_MODULES__PROGRESS_KENDO_ANGULAR_BUTTONS_FESM2022_PROGRESS_KENDO_ANGULAR_BUTTONS_MJS_1;
      } else {
        i18n_1 = $localize`:kendo.splitbutton.splitButtonLabel|The text for the SplitButton aria-label:${"\uFFFD0\uFFFD"}:INTERPOLATION:`;
      }
      return [["button", ""], ["arrowButton", ""], ["popupTemplate", ""], ["container", ""], ["splitButtonLabel", i18n_1], ["kendoSplitButtonLocalizedMessages", "", "toggleButtonLabel", i18n_0, 6, "splitButtonLabel"], ["kendoButton", "", 3, "focus", "click", "blur", "mousedown", "mouseup", "type", "tabindex", "disabled", "size", "rounded", "fillMode", "themeColor", "icon", "svgIcon", "iconClass", "imageUrl", "ngClass"], [1, "k-button-text"], ["kendoButton", "", "type", "button", 1, "k-split-button-arrow", 3, "click", "mousedown", "mouseup", "keydown.enter", "ngClass", "disabled", "icon", "svgIcon", "size", "rounded", "fillMode", "themeColor", "tabindex"], [3, "onItemClick", "keydown", "keyup", "id", "data", "textField", "itemTemplate"]];
    },
    template: function SplitButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef();
        \u0275\u0275elementContainerStart(0, 5);
        \u0275\u0275i18nAttributes(1, 4);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementStart(2, "button", 6, 0);
        \u0275\u0275listener("focus", function SplitButtonComponent_Template_button_focus_2_listener($event) {
          return ctx.onButtonFocus($event);
        })("click", function SplitButtonComponent_Template_button_click_2_listener() {
          return ctx.onButtonClick();
        })("blur", function SplitButtonComponent_Template_button_blur_2_listener() {
          return ctx.onButtonBlur();
        })("mousedown", function SplitButtonComponent_Template_button_mousedown_2_listener() {
          return ctx.toggleButtonActiveState(true);
        })("mouseup", function SplitButtonComponent_Template_button_mouseup_2_listener() {
          return ctx.toggleButtonActiveState(false);
        });
        \u0275\u0275conditionalCreate(4, SplitButtonComponent_Conditional_4_Template, 2, 1, "span", 7);
        \u0275\u0275projection(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 8, 1);
        \u0275\u0275listener("click", function SplitButtonComponent_Template_button_click_6_listener() {
          return ctx.onArrowButtonClick();
        })("mousedown", function SplitButtonComponent_Template_button_mousedown_6_listener() {
          return ctx.toggleArrowButtonActiveState(true);
        })("mouseup", function SplitButtonComponent_Template_button_mouseup_6_listener() {
          return ctx.toggleArrowButtonActiveState(false);
        })("keydown.enter", function SplitButtonComponent_Template_button_keydown_enter_6_listener($event) {
          \u0275\u0275restoreView(_r1);
          $event.stopImmediatePropagation();
          return \u0275\u0275resetView($event.preventDefault());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, SplitButtonComponent_ng_template_8_Template, 1, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementContainer(10, null, 3);
      }
      if (rf & 2) {
        \u0275\u0275i18nExp("{buttonText} splitbutton");
        \u0275\u0275i18nApply(1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("k-active", ctx.active);
        \u0275\u0275property("type", ctx.type)("tabindex", ctx.componentTabIndex)("disabled", ctx.disabled)("size", ctx.size)("rounded", ctx.rounded)("fillMode", ctx.fillMode)("themeColor", ctx.themeColor)("icon", ctx.icon)("svgIcon", ctx.svgIcon)("iconClass", ctx.iconClass)("imageUrl", ctx.imageUrl)("ngClass", ctx.buttonClass);
        \u0275\u0275attribute("aria-label", ctx.ariaLabel);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.text ? 4 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("k-active", ctx.activeArrow);
        \u0275\u0275property("ngClass", ctx.arrowButtonClass)("disabled", ctx.disabled)("icon", ctx.arrowButtonIcon)("svgIcon", ctx.arrowButtonSvgIcon)("size", ctx.size)("rounded", ctx.rounded)("fillMode", ctx.fillMode)("themeColor", ctx.themeColor)("tabindex", -1);
        \u0275\u0275attribute("aria-label", ctx.messageFor("toggleButtonLabel"))("aria-expanded", ctx.openState)("aria-controls", ctx.openState ? ctx.listId : null);
      }
    },
    dependencies: [LocalizedSplitButtonMessagesDirective, ButtonComponent, NgClass, ListComponent],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitButtonComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoSplitButton",
      providers: [FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.splitbutton"
      }, PopupContainerService, {
        provide: MultiTabStop,
        useExisting: forwardRef(() => SplitButtonComponent)
      }],
      selector: "kendo-splitbutton",
      template: `
        <ng-container kendoSplitButtonLocalizedMessages
          i18n-splitButtonLabel="kendo.splitbutton.splitButtonLabel|The text for the SplitButton aria-label"
          splitButtonLabel="{{ '{buttonText} splitbutton' }}"
          i18n-toggleButtonLabel="kendo.splitbutton.toggleButtonLabel|The text for the SplitButton toggle button aria-label"
          toggleButtonLabel="Toggle options"
        ></ng-container>
        <button
          kendoButton
          #button
          [type]="type"
          [tabindex]="componentTabIndex"
          [disabled]="disabled"
          [size]="size"
          [rounded]="rounded"
          [fillMode]="fillMode"
          [themeColor]="themeColor"
          [icon]="icon"
          [svgIcon]="svgIcon"
          [class.k-active]="active"
          [iconClass]="iconClass"
          [imageUrl]="imageUrl"
          [ngClass]="buttonClass"
          (focus)="onButtonFocus($event)"
          (click)="onButtonClick()"
          (blur)="onButtonBlur()"
          (mousedown)="toggleButtonActiveState(true)"
          (mouseup)="toggleButtonActiveState(false)"
          [attr.aria-label]="ariaLabel"
          >
          @if (text) {
            <span class="k-button-text">
            {{ text }} </span>
            }<ng-content></ng-content>
          </button>
          <button kendoButton #arrowButton type="button"
            class="k-split-button-arrow"
            [class.k-active]="activeArrow"
            [ngClass]="arrowButtonClass"
            [disabled]="disabled"
            [icon]="arrowButtonIcon"
            [svgIcon]="arrowButtonSvgIcon"
            [size]="size"
            [rounded]="rounded"
            [fillMode]="fillMode"
            [themeColor]="themeColor"
            [tabindex]="-1"
            [attr.aria-label]="messageFor('toggleButtonLabel')"
            [attr.aria-expanded]="openState"
            [attr.aria-controls]="openState ? listId : null"
            (click)="onArrowButtonClick()"
            (mousedown)="toggleArrowButtonActiveState(true)"
            (mouseup)="toggleArrowButtonActiveState(false)"
            (keydown.enter)="$event.stopImmediatePropagation(); $event.preventDefault();"
          ></button>
          <ng-template #popupTemplate>
            <kendo-button-list
                [id]="listId"
                [data]="data"
                [textField]="textField"
                [itemTemplate]="itemTemplate"
                (onItemClick)="onItemClick($event)"
                (keydown)="keyDownHandler($event)"
                (keyup)="keyUpHandler($event)"
                [attr.dir]="dir"
            >
            </kendo-button-list>
          </ng-template>
          <ng-container #container></ng-container>
        `,
      standalone: true,
      imports: [LocalizedSplitButtonMessagesDirective, ButtonComponent, NgClass, ListComponent]
    }]
  }], () => [{
    type: FocusService
  }, {
    type: NavigationService
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: PopupService
  }, {
    type: ElementRef
  }, {
    type: LocalizationService
  }, {
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
    type: PopupContainerService
  }], {
    text: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    imageUrl: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    popupSettings: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    textField: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    arrowButtonClass: [{
      type: Input
    }],
    arrowButtonIcon: [{
      type: Input
    }],
    arrowButtonSvgIcon: [{
      type: Input
    }],
    buttonAttributes: [{
      type: Input
    }],
    buttonClick: [{
      type: Output
    }],
    itemClick: [{
      type: Output
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    itemTemplate: [{
      type: ContentChild,
      args: [ButtonItemTemplateDirective]
    }],
    isFocused: [{
      type: HostBinding,
      args: ["class.k-focus"]
    }],
    widgetClasses: [{
      type: HostBinding,
      args: ["class.k-split-button"]
    }, {
      type: HostBinding,
      args: ["class.k-button-group"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    keydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }],
    keyup: [{
      type: HostListener,
      args: ["keyup", ["$event"]]
    }]
  });
})();
var SpeechToTextButtonComponent = class _SpeechToTextButtonComponent {
  renderer;
  ngZone;
  /**
   * When `true`, disables the SpeechToTextButton and prevents user interaction.
   *
   * @default false
   */
  set disabled(disabled) {
    if (disabled && isDocumentAvailable() && isFirefox(navigator.userAgent)) {
      this.blur();
    }
    this.isDisabled = disabled;
    this.renderer.setProperty(this.element, "disabled", disabled);
  }
  get disabled() {
    return this.isDisabled;
  }
  /**
   * Sets the padding of the SpeechToTextButton. The default value is set by the Kendo theme.
   *
   */
  set size(size) {
    this.handleClasses(size, "size");
    this._size = size;
  }
  get size() {
    return this._size;
  }
  /**
   * Sets the border radius of the SpeechToTextButton. The default value is set by the Kendo theme.
   *
   */
  set rounded(rounded) {
    this.handleClasses(rounded, "rounded");
    this._rounded = rounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Sets the background and border styles of the SpeechToTextButton. The default value is set by the Kendo theme.
   */
  set fillMode(fillMode) {
    this.handleClasses(fillMode, "fillMode");
    this._fillMode = fillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * Sets a predefined theme color for the SpeechToTextButton. The default value is set by the Kendo theme.
   * The theme color applies as a background and border color and adjusts the text color for contrast.
   *
   */
  set themeColor(themeColor) {
    this.handleThemeColor(themeColor);
    this._themeColor = themeColor;
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * Specifies which speech recognition engine or integration the component should use. Allows the component to operate in different environments or use alternative implementations.
   */
  integrationMode = "webSpeech";
  /**
   * Specifies a `BCP 47` language tag (e.g., 'en-US', 'bg-BG') used for speech recognition.
   *
   * @default 'en-US'
   */
  lang = "en-US";
  /**
   * Specifies whether continuous results are returned for each recognition, or only a single result once recognition stops.
   *
   * @default false
   */
  continuous = false;
  /**
   * Specifies whether interim results should be returned or not. Interim results are results that are not yet final.
   *
   * @default false
   */
  interimResults = false;
  /**
   * Represents the maximum number of alternative transcriptions to return for each result.
   *
   * @default 1
   */
  maxAlternatives = 1;
  /**
   * Fires when the speech recognition service has begun listening to incoming audio.
   */
  start = new EventEmitter();
  /**
   * Fires when the speech recognition service has disconnected.
   */
  end = new EventEmitter();
  /**
   * Fires when the speech recognition service returns a result - a word or phrase has been positively recognized.
   */
  result = new EventEmitter();
  /**
   * Fires when a speech recognition error occurs. The event argument is a string, containing the error message.
   */
  error = new EventEmitter();
  /**
   * Fires when the user clicks the SpeechToTextButton.
   */
  click = new EventEmitter();
  get iconButtonClass() {
    return !this.hasText;
  }
  get listeningClass() {
    return this.isListening;
  }
  speechToTextButtonClass = true;
  classButton = true;
  get classDisabled() {
    return this.isDisabled;
  }
  get getDirection() {
    return this.direction;
  }
  /**
   * @hidden
   */
  onFocus() {
    this.isFocused = true;
  }
  /**
   * @hidden
   */
  onBlur() {
    this.isFocused = false;
  }
  /**
   * Focuses the SpeechToTextButton component.
   */
  focus() {
    if (isDocumentAvailable()) {
      this.element.focus();
      this.isFocused = true;
    }
  }
  /**
   * Removes focus from the SpeechToTextButton component.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.element.blur();
      this.isFocused = false;
    }
  }
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.subs.add(this.renderer.listen(this.element, "click", this.onClick.bind(this)));
      this.subs.add(this.renderer.listen(this.element, "mousedown", (event) => {
        const isBrowserSafari = isDocumentAvailable() && isSafari(navigator.userAgent);
        if (!this.isDisabled && isBrowserSafari) {
          event.preventDefault();
          this.element.focus();
        }
      }));
      if (this.integrationMode !== "webSpeech") {
        return;
      }
      this.createWebSpeech();
    });
  }
  ngOnChanges(changes) {
    if (isChanged("integrationMode", changes, false)) {
      if (this.integrationMode === "webSpeech") {
        if (!this.speechRecognition) {
          this.ngZone.runOutsideAngular(() => {
            this.createWebSpeech();
          });
        }
      } else {
        this.destroyWebSpeech();
      }
    }
    if (anyChanged(["lang", "interimResults", "maxAlternatives", "continuous"], changes)) {
      if (this.speechRecognition) {
        this.speechRecognition.setOptions({
          lang: this.lang,
          interimResults: this.interimResults,
          maxAlternatives: this.maxAlternatives,
          continuous: this.continuous
        });
      }
    }
  }
  ngOnDestroy() {
    this.destroyWebSpeech();
    this.subs.unsubscribe();
  }
  constructor(element, renderer, localization, ngZone) {
    this.renderer = renderer;
    this.ngZone = ngZone;
    A(packageMetadata3);
    this.direction = localization.rtl ? "rtl" : "ltr";
    this.subs.add(localization.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
    this.element = element.nativeElement;
  }
  /**
   * Indicates whether the button is actively listening for incoming audio.
   */
  isListening = false;
  /**
   * Indicates whether web speech functionality is supported.
   */
  get isWebSpeechSupported() {
    return this.speechRecognition ? this.speechRecognition.isSupported() : false;
  }
  set isFocused(isFocused) {
    toggleClass("k-focus", isFocused, this.renderer, this.element);
    this._focused = isFocused;
  }
  get isFocused() {
    return this._focused;
  }
  /**
   * @hidden
   */
  get hasText() {
    return isDocumentAvailable() && this.element.textContent.trim().length > 0;
  }
  /**
   * @hidden
   */
  onClick() {
    if (this.isWebSpeechSupported && this.integrationMode === "webSpeech") {
      this.ngZone.run(() => {
        if (this.isListening) {
          this.speechRecognition.stop();
        } else {
          this.speechRecognition.start();
        }
      });
    } else if (this.integrationMode === "none") {
      let asyncFactory = () => of(null);
      this.ngZone.run(() => {
        if (this.isListening) {
          this.end.emit((fn) => asyncFactory = fn);
        } else {
          this.start.emit((fn) => asyncFactory = fn);
        }
        const result = asyncFactory();
        const observable = this.toObservable(result);
        observable.pipe(take(1)).subscribe(() => this.isListening = !this.isListening);
      });
    }
  }
  /**
   * @hidden
   */
  get buttonSvgIcon() {
    return this.isListening ? this.stopSvgIcon : this.microphoneSvgIcon;
  }
  /**
   * @hidden
   */
  get buttonIcon() {
    return this.isListening ? "stop" : "microphone";
  }
  /**
   * @hidden
   */
  element;
  /**
   * @hidden
   */
  isDisabled = false;
  /**
   * @hidden
   */
  subs = new Subscription();
  microphoneSvgIcon = microphoneIcon;
  stopSvgIcon = stopIcon;
  speechRecognition;
  _size = void 0;
  _rounded = void 0;
  _fillMode = void 0;
  _themeColor = void 0;
  _focused = false;
  direction;
  handleClasses(value, input) {
    const elem = this.element;
    const classes = getStylingClasses("button", input, this[input], value);
    if (input === "fillMode") {
      this.handleThemeColor(this.themeColor);
    }
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  handleStart() {
    this.ngZone.run(() => {
      this.isListening = true;
      this.start.emit();
    });
  }
  handleEnd() {
    this.ngZone.run(() => {
      this.isListening = false;
      this.end.emit();
    });
  }
  handleResult(event) {
    const results = event.results;
    const lastResultIndex = results.length - 1;
    const lastResult = results[lastResultIndex];
    const alternatives = [];
    for (let i = 0; i < lastResult.length; i++) {
      alternatives.push({
        transcript: lastResult[i].transcript,
        confidence: lastResult[i].confidence
      });
    }
    const args = {
      isFinal: lastResult.isFinal,
      alternatives
    };
    this.ngZone.run(() => {
      this.result.emit(args);
    });
  }
  handleError(ev) {
    const errorMessage = ev.error || ev.message || "Unknown error";
    this.ngZone.run(() => {
      this.error.emit({
        errorMessage
      });
    });
  }
  toObservable(input) {
    return input instanceof Observable ? input : from(input);
  }
  handleThemeColor(value) {
    const elem = this.element;
    const themeColorClass = getThemeColorClasses("button", this.themeColor, value);
    this.renderer.removeClass(elem, themeColorClass.toRemove);
    if (themeColorClass.toAdd) {
      this.renderer.addClass(elem, themeColorClass.toAdd);
    }
  }
  destroyWebSpeech() {
    if (this.speechRecognition) {
      this.speechRecognition.stop();
      this.speechRecognition.destroy();
      this.speechRecognition = null;
      this.isListening = false;
    }
  }
  createWebSpeech() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.speechRecognition = new KendoSpeechRecognition({
      lang: this.lang,
      interimResults: this.interimResults,
      maxAlternatives: this.maxAlternatives,
      continuous: this.continuous,
      events: {
        start: this.handleStart.bind(this),
        end: this.handleEnd.bind(this),
        result: this.handleResult.bind(this),
        error: this.handleError.bind(this)
      }
    });
  }
  static \u0275fac = function SpeechToTextButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpeechToTextButtonComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(LocalizationService), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SpeechToTextButtonComponent,
    selectors: [["button", "kendoSpeechToTextButton", ""]],
    hostVars: 11,
    hostBindings: function SpeechToTextButtonComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focus", function SpeechToTextButtonComponent_focus_HostBindingHandler() {
          return ctx.onFocus();
        })("blur", function SpeechToTextButtonComponent_blur_HostBindingHandler() {
          return ctx.onBlur();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("dir", ctx.getDirection);
        \u0275\u0275classProp("k-icon-button", ctx.iconButtonClass)("k-listening", ctx.listeningClass)("k-speech-to-text-button", ctx.speechToTextButtonClass)("k-button", ctx.classButton)("k-disabled", ctx.classDisabled);
      }
    },
    inputs: {
      disabled: "disabled",
      size: "size",
      rounded: "rounded",
      fillMode: "fillMode",
      themeColor: "themeColor",
      integrationMode: "integrationMode",
      lang: "lang",
      continuous: "continuous",
      interimResults: "interimResults",
      maxAlternatives: "maxAlternatives"
    },
    outputs: {
      start: "start",
      end: "end",
      result: "result",
      error: "error",
      click: "click"
    },
    exportAs: ["kendoSpeechToTextButton"],
    features: [\u0275\u0275ProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.speechtotextbutton"
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c03,
    decls: 3,
    vars: 2,
    consts: [["innerCssClass", "k-button-icon", 3, "name", "svgIcon"], [1, "k-button-text"]],
    template: function SpeechToTextButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275element(0, "kendo-icon-wrapper", 0);
        \u0275\u0275elementStart(1, "span", 1);
        \u0275\u0275projection(2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("name", ctx.buttonIcon)("svgIcon", ctx.buttonSvgIcon);
      }
    },
    dependencies: [IconWrapperComponent],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpeechToTextButtonComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoSpeechToTextButton",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.speechtotextbutton"
      }],
      selector: "button[kendoSpeechToTextButton]",
      template: `
        <kendo-icon-wrapper
            innerCssClass="k-button-icon"
            [name]="buttonIcon"
            [svgIcon]="buttonSvgIcon">
        </kendo-icon-wrapper>
        <span class="k-button-text"><ng-content></ng-content></span>
    `,
      standalone: true,
      imports: [IconWrapperComponent]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: LocalizationService
  }, {
    type: NgZone
  }], {
    disabled: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    integrationMode: [{
      type: Input
    }],
    lang: [{
      type: Input
    }],
    continuous: [{
      type: Input
    }],
    interimResults: [{
      type: Input
    }],
    maxAlternatives: [{
      type: Input
    }],
    start: [{
      type: Output
    }],
    end: [{
      type: Output
    }],
    result: [{
      type: Output
    }],
    error: [{
      type: Output
    }],
    click: [{
      type: Output
    }],
    iconButtonClass: [{
      type: HostBinding,
      args: ["class.k-icon-button"]
    }],
    listeningClass: [{
      type: HostBinding,
      args: ["class.k-listening"]
    }],
    speechToTextButtonClass: [{
      type: HostBinding,
      args: ["class.k-speech-to-text-button"]
    }],
    classButton: [{
      type: HostBinding,
      args: ["class.k-button"]
    }],
    classDisabled: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    getDirection: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus"]
    }],
    onBlur: [{
      type: HostListener,
      args: ["blur"]
    }]
  });
})();
var DEFAULT_AI_REQUEST_OPTIONS = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  }),
  role: "user",
  method: "POST",
  responseType: "json"
};
var SmartPasteRequestStartEvent = class extends PreventableEvent {
  /**
   * Gets the request data to send to the AI service.
   */
  requestData;
  constructor(requestData) {
    super();
    this.requestData = requestData;
  }
};
var SmartPasteRequestEndEvent = class extends PreventableEvent {
  /**
   * Gets the HTTP response from the AI service.
   * Contains an error object when the request fails.
   */
  response;
  constructor(response) {
    super();
    this.response = response;
  }
};
function isFieldIgnored(element) {
  return element.hasAttribute("type") && element.type === "hidden" || element.hasAttribute("disabled") || element.hasAttribute("readonly") || element.hasAttribute("aria-disabled") && element.getAttribute("aria-disabled") === "true" || element.hasAttribute("aria-readonly") && element.getAttribute("aria-readonly") === "true" || element.hasAttribute("aria-hidden") && element.getAttribute("aria-hidden") === "true";
}
var getElementIdentifier = (element) => {
  if (!isDocumentAvailable()) {
    return null;
  }
  return element.getAttribute("formcontrolname") || element.getAttribute("name") || element.id;
};
var customInputs = [{
  identifier: ".k-checkbox"
}, {
  identifier: ".k-colorpalette"
}, {
  identifier: ".k-colorgradient"
}, {
  identifier: ".k-flatcolorpicker"
}, {
  identifier: ".k-otp"
}, {
  identifier: ".k-textbox"
}, {
  identifier: ".k-radio"
}, {
  identifier: ".k-slider"
}, {
  identifier: ".k-rating"
}, {
  identifier: ".k-signature"
}, {
  identifier: ".k-switch"
}, {
  identifier: ".k-textarea"
}, {
  identifier: ".k-calendar"
}, {
  identifier: ".k-timepicker"
}, {
  identifier: ".k-dateinput"
}, {
  identifier: ".k-datetimepicker"
}, {
  identifier: ".k-dropdownlist"
}, {
  identifier: ".k-combobox"
}, {
  identifier: ".k-autocomplete"
}, {
  identifier: ".k-multiselect"
}, {
  identifier: ".k-datepicker"
}, {
  identifier: ".k-numerictextbox"
}, {
  identifier: ".k-maskedtextbox"
}, {
  identifier: ".k-colorpicker"
}, {
  identifier: ".k-dropdowntree"
}, {
  identifier: ".k-multiselecttree"
}];
var DATEPICKER_SELECTOR = ".k-datepicker";
var TIMEPICKER_SELECTOR = ".k-timepicker";
var DATETIMEPICKER_SELECTOR = ".k-datetimepicker";
var DATERANGEPICKER_SELECTOR = ".k-daterangepicker";
var CHECKBOX_SELECTOR = ".k-checkbox";
var RADIO_SELECTOR = ".k-radio";
var NUMERICTEXTBOX_SELECTOR = ".k-numerictextbox";
var requiresDateValue = (element) => {
  const isDateInput = [DATEPICKER_SELECTOR, TIMEPICKER_SELECTOR, DATETIMEPICKER_SELECTOR, DATERANGEPICKER_SELECTOR];
  return isDateInput.some((selector) => element.classList.contains(selector.slice(1)));
};
var requiresBooleanValue = (element) => {
  const isBooleanInput = [CHECKBOX_SELECTOR, RADIO_SELECTOR];
  return isBooleanInput.some((selector) => element.classList.contains(selector.slice(1)));
};
var requiresNumericValue = (element) => {
  const isNumericInput = [NUMERICTEXTBOX_SELECTOR];
  return isNumericInput.some((selector) => element.classList.contains(selector.slice(1)));
};
var populateCustomInputs = (element, value) => {
  const parseNumericValue = requiresNumericValue(element);
  if (parseNumericValue) {
    const numericValue = parseFloat(value);
    return !isNaN(numericValue) ? numericValue : null;
  }
  const parseBooleanValue = requiresBooleanValue(element);
  if (parseBooleanValue) {
    return value.toLowerCase() === "true";
  }
  const parseDateValue = requiresDateValue(element);
  if (parseDateValue) {
    const dateValue = new Date(value);
    return !isNaN(dateValue.getTime()) ? dateValue : null;
  }
  return value;
};
var readClipboard = async () => {
  return await navigator.clipboard.readText();
};
var DEFAULT_SVG_ICON = pasteSparkleIcon;
var DEFAULT_ICON = "paste-sparkle";
var SmartPasteButtonComponent = class _SmartPasteButtonComponent {
  renderer;
  ngZone;
  http;
  controlContainer;
  /**
   * Specifies the form controls to include in Smart Paste.
   * When not set, all form controls are included.
   *
   * @default null
   */
  formFields = null;
  /**
   * When `true`, disables the SmartPasteButton and prevents user interaction.
   *
   * @default false
   */
  set disabled(disabled) {
    if (disabled && isDocumentAvailable() && isFirefox(navigator.userAgent)) {
      this.blur();
    }
    this.isDisabled = disabled;
    this.renderer.setProperty(this.element, "disabled", disabled);
  }
  get disabled() {
    return this.isDisabled;
  }
  /**
   * Sets the padding of the SmartPasteButton.
   *
   * @default undefined
   */
  set size(size) {
    this.handleClasses(size, "size");
    this._size = size;
  }
  get size() {
    return this._size;
  }
  /**
   * Sets the border radius of the SmartPasteButton.
   *
   * @default undefined
   */
  set rounded(rounded) {
    this.handleClasses(rounded, "rounded");
    this._rounded = rounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Sets the background and border styles of the SmartPasteButton.
   *
   * @default undefined
   */
  set fillMode(fillMode) {
    this.handleClasses(fillMode, "fillMode");
    this._fillMode = fillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * Sets a predefined theme color for the SmartPasteButton.
   * The theme color applies as a background and border color and adjusts the text color.
   *
   * @default undefined
   */
  set themeColor(themeColor) {
    this.handleThemeColor(themeColor);
    this._themeColor = themeColor;
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * Sets an SVG icon to display inside the SmartPasteButton.
   */
  set svgIcon(icon) {
    if (isDevMode() && icon && this.iconClass) {
      throw new Error("Setting both icon/svgIcon and iconClass options at the same time is not supported.");
    }
    this._svgIcon = icon;
  }
  get svgIcon() {
    return this._svgIcon;
  }
  /**
   * Specifies a URL for an `img` element inside the SmartPasteButton.
   * The URL can be relative or absolute. When relative, the browser evaluates it relative to the web page URL.
   */
  imageUrl;
  /**
   * Defines one or more CSS classes separated by spaces for a `span` element inside the SmartPasteButton.
   * Use `iconClass` to add custom icons.
   */
  set iconClass(value) {
    const hasCustomIcon = this.icon !== DEFAULT_ICON || this.svgIcon !== DEFAULT_SVG_ICON;
    if (isDevMode() && value && hasCustomIcon) {
      throw new Error("Setting both icon/svgIcon and iconClass options at the same time is not supported.");
    }
    if (!hasCustomIcon) {
      this._icon = null;
      this._svgIcon = null;
    }
    this._iconClass = value;
  }
  get iconClass() {
    return this._iconClass;
  }
  /**
   * Specifies the icon name to display in the SmartPasteButton.
   *
   * @default 'paste-sparkle'
   */
  set icon(name) {
    if (isDevMode() && name && this.iconClass) {
      throw new Error("Setting both icon/svgIcon and iconClass options at the same time is not supported.");
    }
    this._icon = name;
  }
  get icon() {
    return this._icon;
  }
  /**
   * Sets the URL to which Smart Paste sends the AI request.
   * When set, the component sends and handles an HTTP request automatically. Handle the `requestStart` event to modify request options before sending.
   * When not set, the component does not send an HTTP request. Handle the `requestStart` event to send and manage a custom HTTP request.
   */
  requestUrl;
  /**
   * Configures the HTTP request options for the AI request.
   * Use this to customize headers, method, credentials, and other request settings.
   */
  requestOptions;
  /**
   * Sets static form field metadata to bypass DOM extraction when Smart Paste runs.
   * Use this when you want to provide form field configuration directly instead of extracting it from the DOM.
   *
   * @hidden
   * @default null
   */
  smartPasteFormFields = null;
  /**
   * Fires when the Smart Paste request is about to start.
   * Prevent the event to stop the request before sending it.
   */
  requestStart = new EventEmitter();
  /**
   * Fires when the Smart Paste request completes, either successfully or with an error.
   * Prevent the event to cancel populating the form fields with the response data.
   */
  requestEnd = new EventEmitter();
  /**
   * Fires when the user cancels an ongoing Smart Paste request.
   */
  requestCancel = new EventEmitter();
  get iconButtonClass() {
    return !this.hasText;
  }
  classButton = true;
  get classDisabled() {
    return this.isDisabled;
  }
  get getDirection() {
    return this.direction;
  }
  onFocus() {
    this.isFocused = true;
  }
  onBlur() {
    this.isFocused = false;
  }
  /**
   * Focuses the SmartPasteButton.
   */
  focus() {
    if (isDocumentAvailable()) {
      this.element.focus();
      this.isFocused = true;
    }
  }
  /**
   * Removes focus from the SmartPasteButton.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.element.blur();
      this.isFocused = false;
    }
  }
  get hasText() {
    return isDocumentAvailable() && this.element.textContent.trim().length > 0;
  }
  set isFocused(isFocused) {
    toggleClass("k-focus", isFocused, this.renderer, this.element);
    this._focused = isFocused;
  }
  get isFocused() {
    return this._focused;
  }
  element;
  isDisabled = false;
  subs = new Subscription();
  _size = void 0;
  _rounded = void 0;
  _fillMode = void 0;
  _themeColor = void 0;
  _focused = false;
  direction;
  _iconClass;
  _icon = DEFAULT_ICON;
  _svgIcon = DEFAULT_SVG_ICON;
  kendoSmartPaste;
  smartPasteBusy = false;
  currentRequestSubscription = null;
  nativeForm = null;
  constructor(elementRef, renderer, localization, ngZone, http, controlContainer) {
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.http = http;
    this.controlContainer = controlContainer;
    A(packageMetadata3);
    this.direction = localization.rtl ? "rtl" : "ltr";
    this.subs.add(localization.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
    this.element = elementRef.nativeElement;
  }
  ngOnInit() {
    this.nativeForm = this.element.form;
    this.kendoSmartPaste = new KendoSmartPaste({
      getElement: () => this.nativeForm,
      customInputs: customInputs || void 0,
      getSmartPasteField: this.defaultGetSmartPasteField,
      setKendoInputValue: this.defaultSetKendoInputValue
    });
    this.ngZone.runOutsideAngular(() => {
      this.subs.add(this.renderer.listen(this.element, "click", this.paste.bind(this)));
      this.subs.add(this.renderer.listen(this.element, "mousedown", (event) => {
        const isBrowserSafari = isDocumentAvailable() && isSafari(navigator.userAgent);
        if (!this.isDisabled && isBrowserSafari) {
          event.preventDefault();
          this.element.focus();
        }
      }));
    });
  }
  ngOnDestroy() {
    this.unsubscribeCurrentRequest();
    this.subs.unsubscribe();
  }
  /**
   * Starts the Smart Paste operation.
   * Reads clipboard content and sends it to the AI service for processing.
   */
  async paste() {
    if (!this.nativeForm) {
      return;
    }
    if (this.smartPasteBusy) {
      this.requestCancel.emit();
      this.unsubscribeCurrentRequest();
      this.smartPasteBusy = false;
      return;
    }
    let clipboardContent;
    try {
      clipboardContent = await readClipboard();
    } catch (error) {
      this.ngZone.run(() => {
        const responseErrorEvent = new SmartPasteRequestEndEvent(error);
        this.requestEnd.emit(responseErrorEvent);
      });
      return;
    }
    if (!clipboardContent || clipboardContent.trim() === "") {
      return;
    }
    this.smartPasteBusy = true;
    this.unsubscribeCurrentRequest();
    const formFields = this.extractFormFields();
    const requestData = {
      formFields,
      content: clipboardContent,
      url: this.requestUrl,
      requestOptions: __spreadValues({}, this.requestOptions)
    };
    if (!this.requestUrl) {
      this.smartPasteBusy = false;
      return;
    }
    this.ngZone.run(() => {
      const requestStartEvent = new SmartPasteRequestStartEvent(requestData);
      this.requestStart.emit(requestStartEvent);
      if (requestStartEvent.isDefaultPrevented()) {
        this.smartPasteBusy = false;
        return;
      }
      if (!this.smartPasteBusy) {
        return;
      }
      this.handleSmartPasteRequest(requestData, formFields);
    });
  }
  sendSmartPasteRequest(requestData) {
    const body = {
      formFields: requestData.formFields,
      content: requestData.content
    };
    const request = new HttpRequest(requestData.requestOptions?.method || "POST", requestData.url, body, requestData.requestOptions);
    return this.http.request(request).pipe(filter((event) => event.type === HttpEventType.Response));
  }
  unsubscribeCurrentRequest() {
    if (this.currentRequestSubscription) {
      this.currentRequestSubscription.unsubscribe();
      this.currentRequestSubscription = null;
    }
  }
  defaultGetSmartPasteField = (field) => {
    const element = field.element;
    if (isFieldIgnored(element)) {
      return null;
    }
    const hasKendoWrapper = customInputs.some((input) => {
      if (!element.classList.contains(input.identifier.slice(1)) && element.closest(input.identifier)) {
        return true;
      }
    });
    if (hasKendoWrapper) {
      return null;
    }
    if (field.type === "kendo-input") {
      const identifier = getElementIdentifier(element);
      if (!identifier) {
        return null;
      }
      if (requiresBooleanValue(element)) {
        field.allowedValues = ["true", "false"];
      }
      field.field = identifier;
    }
    return field;
  };
  defaultSetKendoInputValue = (field, value) => {
    const element = field.element;
    const controlName = getElementIdentifier(element);
    if (!controlName || !this.controlContainer) {
      return;
    }
    const control = this.controlContainer.control.get?.(controlName);
    if (!control || typeof control.setValue !== "function") {
      return;
    }
    const updatedValue = populateCustomInputs(element, value);
    if (!isPresent(updatedValue)) {
      return;
    }
    this.setControlValue(control, updatedValue);
  };
  setControlValue(control, value) {
    this.ngZone.run(() => {
      control.setValue(value);
      control.markAsDirty();
      control.updateValueAndValidity();
    });
  }
  extractFormFields() {
    if (!this.formFields || this.formFields.length === 0) {
      return this.kendoSmartPaste.extractFormConfig();
    } else {
      const formFields = this.formFields.map((field) => {
        const element = this.nativeForm?.querySelector(`#${field.field}`);
        return __spreadProps(__spreadValues({}, field), {
          element
        });
      });
      return formFields;
    }
  }
  handleClasses(value, input) {
    const elem = this.element;
    const classes = getStylingClasses("button", input, this[input], value);
    if (input === "fillMode") {
      this.handleThemeColor(this.themeColor);
    }
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  handleThemeColor(value) {
    const elem = this.element;
    const themeColorClass = getThemeColorClasses("button", this.themeColor, value);
    if (themeColorClass.toRemove) {
      this.renderer.removeClass(elem, themeColorClass.toRemove);
    }
    if (themeColorClass.toAdd) {
      this.renderer.addClass(elem, themeColorClass.toAdd);
    }
  }
  handleSmartPasteRequest(requestData, formFields) {
    this.currentRequestSubscription = this.sendSmartPasteRequest(requestData).subscribe((response) => {
      if (!this.smartPasteBusy) {
        return;
      }
      const responseEvent = new SmartPasteRequestEndEvent(response);
      this.requestEnd.emit(responseEvent);
      if (responseEvent.isDefaultPrevented()) {
        this.smartPasteBusy = false;
        return;
      }
      if (response?.body?.fieldValues) {
        this.kendoSmartPaste.populateFormFields(response.body, formFields);
      }
      this.smartPasteBusy = false;
      this.currentRequestSubscription = null;
    }, (error) => {
      if (!this.smartPasteBusy) {
        return;
      }
      const responseErrorEvent = new SmartPasteRequestEndEvent(error);
      this.requestEnd.emit(responseErrorEvent);
      this.smartPasteBusy = false;
      this.currentRequestSubscription = null;
    });
  }
  static \u0275fac = function SmartPasteButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SmartPasteButtonComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(LocalizationService), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ControlContainer, 12));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SmartPasteButtonComponent,
    selectors: [["button", "kendoSmartPasteButton", ""]],
    hostVars: 7,
    hostBindings: function SmartPasteButtonComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focus", function SmartPasteButtonComponent_focus_HostBindingHandler() {
          return ctx.onFocus();
        })("blur", function SmartPasteButtonComponent_blur_HostBindingHandler() {
          return ctx.onBlur();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("dir", ctx.getDirection);
        \u0275\u0275classProp("k-icon-button", ctx.iconButtonClass)("k-button", ctx.classButton)("k-disabled", ctx.classDisabled);
      }
    },
    inputs: {
      formFields: "formFields",
      disabled: "disabled",
      size: "size",
      rounded: "rounded",
      fillMode: "fillMode",
      themeColor: "themeColor",
      svgIcon: "svgIcon",
      imageUrl: "imageUrl",
      iconClass: "iconClass",
      icon: "icon",
      requestUrl: "requestUrl",
      requestOptions: "requestOptions",
      smartPasteFormFields: "smartPasteFormFields"
    },
    outputs: {
      requestStart: "requestStart",
      requestEnd: "requestEnd",
      requestCancel: "requestCancel"
    },
    exportAs: ["kendoSmartPasteButton"],
    features: [\u0275\u0275ProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.smartpastebutton"
    }])],
    ngContentSelectors: _c03,
    decls: 5,
    vars: 3,
    consts: [["innerCssClass", "k-button-icon", 3, "name", "svgIcon"], [1, "k-button-icon", "k-icon"], [1, "k-button-icon", 3, "ngClass"], [1, "k-button-text"], ["role", "presentation", 1, "k-image", 3, "src"]],
    template: function SmartPasteButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, SmartPasteButtonComponent_Conditional_0_Template, 1, 2, "kendo-icon-wrapper", 0);
        \u0275\u0275conditionalCreate(1, SmartPasteButtonComponent_Conditional_1_Template, 2, 1, "span", 1);
        \u0275\u0275conditionalCreate(2, SmartPasteButtonComponent_Conditional_2_Template, 1, 1, "span", 2);
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275projection(4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.icon || ctx.svgIcon ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.imageUrl ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.iconClass ? 2 : -1);
      }
    },
    dependencies: [IconWrapperComponent, NgClass],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartPasteButtonComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoSmartPasteButton",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.smartpastebutton"
      }],
      selector: "button[kendoSmartPasteButton]",
      standalone: true,
      imports: [IconWrapperComponent, NgClass],
      template: `
        @if (icon || svgIcon) {
          <kendo-icon-wrapper
            innerCssClass="k-button-icon"
            [name]="icon"
            [svgIcon]="svgIcon"></kendo-icon-wrapper>
        }
        @if (imageUrl) {
          <span class="k-button-icon k-icon">
            <img [src]="imageUrl" class="k-image" role="presentation" />
          </span>
        }
        @if (iconClass) {
          <span class="k-button-icon" [ngClass]="iconClass"></span>
        }
        <span class="k-button-text"><ng-content></ng-content></span>
    `
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: LocalizationService
  }, {
    type: NgZone
  }, {
    type: HttpClient
  }, {
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }]
  }], {
    formFields: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    imageUrl: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    requestUrl: [{
      type: Input
    }],
    requestOptions: [{
      type: Input
    }],
    smartPasteFormFields: [{
      type: Input
    }],
    requestStart: [{
      type: Output
    }],
    requestEnd: [{
      type: Output
    }],
    requestCancel: [{
      type: Output
    }],
    iconButtonClass: [{
      type: HostBinding,
      args: ["class.k-icon-button"]
    }],
    classButton: [{
      type: HostBinding,
      args: ["class.k-button"]
    }],
    classDisabled: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    getDirection: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus"]
    }],
    onBlur: [{
      type: HostListener,
      args: ["blur"]
    }]
  });
})();
var SIZES_MAP = {
  small: "sm",
  medium: "md",
  large: "lg"
};
var SegmentedControlComponent = class _SegmentedControlComponent {
  renderer;
  wrapper;
  zone;
  hostClass = true;
  get stretchedClass() {
    return this._layoutMode === "stretch";
  }
  get direction() {
    return this._direction;
  }
  hostRole = "group";
  thumb;
  resizeSensor;
  /**
   * Specifies the collection of items to render in the SegmentedControl.
   */
  set items(value) {
    this._items = value;
    this.showSelectionIndicator();
  }
  get items() {
    return this._items;
  }
  /**
   * Specifies the layout mode of the SegmentedControl.
   *
   * @default 'compact'
   */
  set layoutMode(value) {
    this._layoutMode = value;
    this.showSelectionIndicator();
  }
  get layoutMode() {
    return this._layoutMode;
  }
  /**
   * Specifies the size of the SegmentedControl.
   */
  set size(size) {
    const newSize = size;
    this.handleSizeClass(newSize, this._size);
    this._size = newSize;
    this.showSelectionIndicator();
  }
  get size() {
    return this._size;
  }
  /**
   * Specifies the index of the selected button in the `items` array.
   *
   * @default 0
   */
  set selected(value) {
    this.selectedButtonIndex = value;
    this.showSelectionIndicator();
  }
  get selected() {
    return this.selectedButtonIndex;
  }
  /**
   * Fires when the selected button changes. Emits the index of the selected button.
   */
  selectedChange = new EventEmitter();
  /**
   * @hidden
   */
  selectedButtonIndex = 0;
  _items = [];
  _size;
  _layoutMode = "compact";
  _direction;
  subs = new Subscription();
  constructor(renderer, wrapper, zone, localization) {
    this.renderer = renderer;
    this.wrapper = wrapper;
    this.zone = zone;
    A(packageMetadata3);
    this._direction = localization.rtl ? "rtl" : "ltr";
    this.subs.add(localization.changes.subscribe(({
      rtl
    }) => {
      this._direction = rtl ? "rtl" : "ltr";
    }));
  }
  ngAfterViewInit() {
    this.handleSizeClass(this._size, null);
    if (this.resizeSensor) {
      this.subs.add(this.resizeSensor.resize.pipe(debounceTime(150)).subscribe(() => {
        this.zone.run(() => {
          this.showSelectionIndicator();
        });
      }));
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  /**
   * @hidden
   */
  handleClick(button, index) {
    if (button.disabled || index === this.selectedButtonIndex) {
      return;
    }
    this.selectedButtonIndex = index;
    this.selectedChange.emit(index);
    this.showSelectionIndicator();
  }
  /**
   * @hidden
   */
  handleKeydown(event, button) {
    if (button.disabled && (event.code === Keys.Enter || event.code === Keys.NumpadEnter || event.code === Keys.Space)) {
      event.preventDefault();
    }
  }
  handleSizeClass(newValue, prevValue) {
    if (!this.wrapper) {
      return;
    }
    const elem = this.wrapper.nativeElement;
    const classToRemove = prevValue ? `k-segmented-control-${SIZES_MAP[prevValue]}` : null;
    const classToAdd = newValue ? `k-segmented-control-${SIZES_MAP[newValue]}` : null;
    classToRemove && this.renderer.removeClass(elem, classToRemove);
    classToAdd && this.renderer.addClass(elem, classToAdd);
  }
  /**
   * Updates the thumb position to reflect the currently selected button.
   */
  showSelectionIndicator() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.zone.onStable.pipe(take(1)).subscribe(() => {
      const element = this.wrapper.nativeElement;
      if (!element?.getBoundingClientRect) {
        return;
      }
      const controlRect = element.getBoundingClientRect();
      const selectedItem = element.querySelector(".k-segmented-control-button.k-selected");
      const selectionIndicator = this.thumb ? this.thumb.nativeElement : null;
      if (!selectedItem || !selectionIndicator) {
        return;
      }
      const itemRect = selectedItem.getBoundingClientRect();
      const left = itemRect.left - controlRect.left;
      const right = controlRect.right - itemRect.right;
      this.renderer.setStyle(selectionIndicator, "left", `${left}px`);
      this.renderer.setStyle(selectionIndicator, "right", `${right}px`);
    });
  }
  static \u0275fac = function SegmentedControlComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SegmentedControlComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(LocalizationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SegmentedControlComponent,
    selectors: [["kendo-segmented-control"]],
    viewQuery: function SegmentedControlComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c11, 5)(_c122, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.thumb = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.resizeSensor = _t.first);
      }
    },
    hostVars: 6,
    hostBindings: function SegmentedControlComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("dir", ctx.direction)("role", ctx.hostRole);
        \u0275\u0275classProp("k-segmented-control", ctx.hostClass)("k-segmented-control-stretched", ctx.stretchedClass);
      }
    },
    inputs: {
      items: "items",
      layoutMode: "layoutMode",
      size: "size",
      selected: "selected"
    },
    outputs: {
      selectedChange: "selectedChange"
    },
    features: [\u0275\u0275ProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.segmentedcontrol"
    }])],
    decls: 6,
    vars: 1,
    consts: [["resizeSensor", ""], ["thumb", ""], [1, "k-segmented-control-thumb"], ["type", "button", 1, "k-segmented-control-button", 3, "k-disabled", "k-selected"], ["type", "button", 1, "k-segmented-control-button", 3, "click", "keydown"], [3, "innerCssClass", "name", "svgIcon"], [1, "k-segmented-control-button-text"]],
    template: function SegmentedControlComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "kendo-resize-sensor", null, 0)(2, "div", 2, 1);
        \u0275\u0275repeaterCreate(4, SegmentedControlComponent_For_5_Template, 3, 10, "button", 3, \u0275\u0275repeaterTrackByIndex);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-hidden", true);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.items);
      }
    },
    dependencies: [IconWrapperComponent, ResizeSensorComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SegmentedControlComponent, [{
    type: Component,
    args: [{
      selector: "kendo-segmented-control",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [IconWrapperComponent, ResizeSensorComponent],
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.segmentedcontrol"
      }],
      template: `
        <kendo-resize-sensor #resizeSensor></kendo-resize-sensor>
        <div class="k-segmented-control-thumb" #thumb [attr.aria-hidden]="true"></div>
        @for (button of items; track $index; let idx = $index) {
            <button type="button"
                class="k-segmented-control-button"
                [class.k-disabled]="button.disabled"
                [attr.aria-disabled]="button.disabled ? true : null"
                [attr.title]="button.title"
                [attr.aria-label]="button.title && !button.text ? button.title : null"
                (click)="handleClick(button, idx)"
                (keydown)="handleKeydown($event, button)"
                [class.k-selected]="selectedButtonIndex === idx"
                [attr.aria-pressed]="selectedButtonIndex === idx ? 'true' : 'false'">
                @if (button.icon || button.svgIcon) {
                    <kendo-icon-wrapper
                        [innerCssClass]="button['iconInnerCssClass'] ? 'k-segmented-control-button-icon ' + button['iconInnerCssClass'] : 'k-segmented-control-button-icon'"
                        [name]="button.icon"
                        [svgIcon]="button.svgIcon">
                    </kendo-icon-wrapper>
                }
                @if (button.text) {
                    <span class="k-segmented-control-button-text">{{button.text}}</span>
                }
            </button>
        }
    `
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: LocalizationService
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-segmented-control"]
    }],
    stretchedClass: [{
      type: HostBinding,
      args: ["class.k-segmented-control-stretched"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    hostRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    thumb: [{
      type: ViewChild,
      args: ["thumb"]
    }],
    resizeSensor: [{
      type: ViewChild,
      args: ["resizeSensor"]
    }],
    items: [{
      type: Input
    }],
    layoutMode: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }]
  });
})();
var KENDO_BUTTON = [ButtonComponent];
var KENDO_BUTTONGROUP = [ButtonComponent, ButtonGroupComponent];
var KENDO_DROPDOWNBUTTON = [DropDownButtonComponent, ButtonItemTemplateDirective];
var KENDO_CHIP = [ChipComponent];
var KENDO_CHIPLIST = [ChipComponent, ChipListComponent];
var KENDO_FLOATINGACTIONBUTTON = [FloatingActionButtonComponent, DialItemTemplateDirective, FloatingActionButtonTemplateDirective];
var KENDO_SPLITBUTTON = [SplitButtonComponent, SplitButtonCustomMessagesComponent, ToggleButtonTabStopDirective, ButtonItemTemplateDirective];
var KENDO_SPEECHTOTEXTBUTTON = [SpeechToTextButtonComponent];
var KENDO_SMARTPASTEBUTTON = [SmartPasteButtonComponent];
var KENDO_SEGMENTEDCONTROL = [SegmentedControlComponent];
var KENDO_BUTTONS = [...KENDO_BUTTON, ...KENDO_BUTTONGROUP, ...KENDO_DROPDOWNBUTTON, ...KENDO_CHIP, ...KENDO_CHIPLIST, ...KENDO_FLOATINGACTIONBUTTON, ...KENDO_SPLITBUTTON, ...KENDO_SPEECHTOTEXTBUTTON, ...KENDO_SMARTPASTEBUTTON, ...KENDO_SEGMENTEDCONTROL];
var ButtonGroupModule = class _ButtonGroupModule {
  static \u0275fac = function ButtonGroupModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonGroupModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ButtonGroupModule,
    imports: [ButtonComponent, ButtonGroupComponent],
    exports: [ButtonComponent, ButtonGroupComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [IconsService],
    imports: [ButtonComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroupModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_BUTTONGROUP],
      imports: [...KENDO_BUTTONGROUP],
      providers: [IconsService]
    }]
  }], null, null);
})();
var ButtonModule = class _ButtonModule {
  static \u0275fac = function ButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ButtonModule,
    imports: [ButtonComponent],
    exports: [ButtonComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [IconsService],
    imports: [ButtonComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonModule, [{
    type: NgModule,
    args: [{
      imports: [ButtonComponent],
      exports: [ButtonComponent],
      providers: [IconsService]
    }]
  }], null, null);
})();
var ButtonsModule = class _ButtonsModule {
  static \u0275fac = function ButtonsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ButtonsModule,
    imports: [ButtonComponent, ButtonComponent, ButtonGroupComponent, DropDownButtonComponent, ButtonItemTemplateDirective, ChipComponent, ChipComponent, ChipListComponent, FloatingActionButtonComponent, DialItemTemplateDirective, FloatingActionButtonTemplateDirective, SplitButtonComponent, SplitButtonCustomMessagesComponent, ToggleButtonTabStopDirective, ButtonItemTemplateDirective, SpeechToTextButtonComponent, SmartPasteButtonComponent, SegmentedControlComponent, ToggleButtonTabStopDirective],
    exports: [ButtonComponent, ButtonComponent, ButtonGroupComponent, DropDownButtonComponent, ButtonItemTemplateDirective, ChipComponent, ChipComponent, ChipListComponent, FloatingActionButtonComponent, DialItemTemplateDirective, FloatingActionButtonTemplateDirective, SplitButtonComponent, SplitButtonCustomMessagesComponent, ToggleButtonTabStopDirective, ButtonItemTemplateDirective, SpeechToTextButtonComponent, SmartPasteButtonComponent, SegmentedControlComponent, ToggleButtonTabStopDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [IconsService, PopupService, ResizeBatchService],
    imports: [ButtonComponent, ButtonComponent, DropDownButtonComponent, ChipComponent, ChipComponent, FloatingActionButtonComponent, SplitButtonComponent, SpeechToTextButtonComponent, SmartPasteButtonComponent, SegmentedControlComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonsModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_BUTTONS, ...KENDO_TOGGLEBUTTONTABSTOP],
      exports: [...KENDO_BUTTONS, ...KENDO_TOGGLEBUTTONTABSTOP],
      providers: [IconsService, PopupService, ResizeBatchService]
    }]
  }], null, null);
})();
var SplitButtonModule = class _SplitButtonModule {
  static \u0275fac = function SplitButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SplitButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SplitButtonModule,
    imports: [SplitButtonComponent, SplitButtonCustomMessagesComponent, ToggleButtonTabStopDirective, ButtonItemTemplateDirective, ToggleButtonTabStopDirective],
    exports: [SplitButtonComponent, SplitButtonCustomMessagesComponent, ToggleButtonTabStopDirective, ButtonItemTemplateDirective, ToggleButtonTabStopDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [IconsService, PopupService, ResizeBatchService],
    imports: [SplitButtonComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitButtonModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_SPLITBUTTON, ...KENDO_TOGGLEBUTTONTABSTOP],
      imports: [...KENDO_SPLITBUTTON, ...KENDO_TOGGLEBUTTONTABSTOP],
      providers: [IconsService, PopupService, ResizeBatchService]
    }]
  }], null, null);
})();
var DropDownButtonModule = class _DropDownButtonModule {
  static \u0275fac = function DropDownButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DropDownButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DropDownButtonModule,
    imports: [DropDownButtonComponent, ButtonItemTemplateDirective],
    exports: [DropDownButtonComponent, ButtonItemTemplateDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [IconsService, PopupService, ResizeBatchService],
    imports: [DropDownButtonComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropDownButtonModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_DROPDOWNBUTTON],
      imports: [...KENDO_DROPDOWNBUTTON],
      providers: [IconsService, PopupService, ResizeBatchService]
    }]
  }], null, null);
})();
var ChipModule = class _ChipModule {
  static \u0275fac = function ChipModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChipModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ChipModule,
    imports: [ChipComponent, ChipListComponent],
    exports: [ChipComponent, ChipListComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [IconsService],
    imports: [ChipComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_CHIPLIST],
      imports: [...KENDO_CHIPLIST],
      providers: [IconsService]
    }]
  }], null, null);
})();
var FloatingActionButtonModule = class _FloatingActionButtonModule {
  static \u0275fac = function FloatingActionButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FloatingActionButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FloatingActionButtonModule,
    imports: [FloatingActionButtonComponent, DialItemTemplateDirective, FloatingActionButtonTemplateDirective],
    exports: [FloatingActionButtonComponent, DialItemTemplateDirective, FloatingActionButtonTemplateDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [IconsService, PopupService, ResizeBatchService],
    imports: [FloatingActionButtonComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatingActionButtonModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_FLOATINGACTIONBUTTON],
      imports: [...KENDO_FLOATINGACTIONBUTTON],
      providers: [IconsService, PopupService, ResizeBatchService]
    }]
  }], null, null);
})();
var SpeechToTextButtonModule = class _SpeechToTextButtonModule {
  static \u0275fac = function SpeechToTextButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpeechToTextButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SpeechToTextButtonModule,
    imports: [SpeechToTextButtonComponent],
    exports: [SpeechToTextButtonComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [IconsService],
    imports: [KENDO_SPEECHTOTEXTBUTTON]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpeechToTextButtonModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_SPEECHTOTEXTBUTTON],
      imports: [...KENDO_SPEECHTOTEXTBUTTON],
      providers: [IconsService]
    }]
  }], null, null);
})();
var SmartPasteButtonModule = class _SmartPasteButtonModule {
  static \u0275fac = function SmartPasteButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SmartPasteButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SmartPasteButtonModule,
    imports: [SmartPasteButtonComponent],
    exports: [SmartPasteButtonComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [SmartPasteButtonComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartPasteButtonModule, [{
    type: NgModule,
    args: [{
      exports: [SmartPasteButtonComponent],
      imports: [SmartPasteButtonComponent]
    }]
  }], null, null);
})();
var SegmentedControlModule = class _SegmentedControlModule {
  static \u0275fac = function SegmentedControlModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SegmentedControlModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SegmentedControlModule,
    imports: [SegmentedControlComponent],
    exports: [SegmentedControlComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [IconsService],
    imports: [KENDO_SEGMENTEDCONTROL]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SegmentedControlModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_SEGMENTEDCONTROL],
      imports: [...KENDO_SEGMENTEDCONTROL],
      providers: [IconsService]
    }]
  }], null, null);
})();

// node_modules/@progress/kendo-angular-indicators/fesm2022/progress-kendo-angular-indicators.mjs
var _c04 = ["*"];
function LoaderComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 1);
  }
}
var BadgeContainerComponent = class _BadgeContainerComponent {
  localizationService;
  hostClass = true;
  /**
   * @hidden
   */
  direction;
  dynamicRTLSubscription;
  rtl = false;
  constructor(localizationService) {
    this.localizationService = localizationService;
    this.dynamicRTLSubscription = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    });
  }
  ngOnDestroy() {
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
  }
  static \u0275fac = function BadgeContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BadgeContainerComponent)(\u0275\u0275directiveInject(LocalizationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _BadgeContainerComponent,
    selectors: [["kendo-badge-container"]],
    hostVars: 3,
    hostBindings: function BadgeContainerComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("dir", ctx.direction);
        \u0275\u0275classProp("k-badge-container", ctx.hostClass);
      }
    },
    features: [\u0275\u0275ProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.badge.component"
    }])],
    ngContentSelectors: _c04,
    decls: 1,
    vars: 0,
    template: function BadgeContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeContainerComponent, [{
    type: Component,
    args: [{
      selector: "kendo-badge-container",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.badge.component"
      }],
      template: `<ng-content></ng-content>`,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-badge-container"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }]
  });
})();
var packageMetadata4 = {
  name: "@progress/kendo-angular-indicators",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1780593733,
  version: "24.1.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var SIZE_CLASSES$1 = {
  "small": "k-badge-sm",
  "medium": "k-badge-md",
  "large": "k-badge-lg"
};
var ROUNDED_CLASSES2 = {
  "small": "k-rounded-sm",
  "medium": "k-rounded-md",
  "large": "k-rounded-lg",
  "full": "k-rounded-full",
  "none": "k-rounded-none"
};
var BadgeComponent = class _BadgeComponent {
  element;
  renderer;
  localizationService;
  hostClass = true;
  get cutoutBorderClass() {
    return this.cutoutBorder;
  }
  /**
   * @hidden
   */
  direction;
  /**
   * Specifies the alignment of the Badge ([see example](https://www.telerik.com/kendo-angular-ui/components/indicators/badge/align-and-position#alignment)).
   *
   * @default "{ vertical: 'top', horizontal: 'end' }"
   */
  get align() {
    return this.badgeAlign;
  }
  set align(align2) {
    this.badgeAlign = Object.assign(this.badgeAlign, align2);
  }
  /**
   * Specifies the size of the Badge ([see example](https://www.telerik.com/kendo-angular-ui/components/indicators/badge/appearance#size)). The default value is set by the Kendo theme.
   */
  size;
  /**
   * Specifies the appearance fill style of the Badge ([see example](https://www.telerik.com/kendo-angular-ui/components/indicators/badge/appearance#fill)). The default value is set by the Kendo theme.
   */
  fill;
  /**
   * Specifies the theme color of the Badge.
   * The theme color applies as background and border color, while also amending the text color accordingly
   * ([see example](https://www.telerik.com/kendo-angular-ui/components/indicators/badge/appearance#theme-color)). The default value is set by the Kendo theme.
   */
  themeColor;
  /**
   * Specifies the roundness of the Badge ([see example](https://www.telerik.com/kendo-angular-ui/components/indicators/badge/appearance#rounded)). The default value is set by the Kendo theme.
   */
  rounded;
  /**
   * Specifies the position of the Badge relative to the edge of the parent container element ([see example](https://www.telerik.com/kendo-angular-ui/components/indicators/badge/align-and-position#position)).
   *
   * @default edge
   */
  position = "edge";
  /**
   * Specifies whether to render additional `cutout` border around the Badge ([see example](https://www.telerik.com/kendo-angular-ui/components/indicators/badge/appearance#cutout-border)).
   *
   * @default false
   */
  cutoutBorder = false;
  badgeClasses = [];
  badgeAlign = {
    vertical: "top",
    horizontal: "end"
  };
  dynamicRTLSubscription;
  rtl = false;
  constructor(element, renderer, localizationService) {
    this.element = element;
    this.renderer = renderer;
    this.localizationService = localizationService;
    A(packageMetadata4);
    this.dynamicRTLSubscription = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    });
  }
  ngAfterViewInit() {
    if (!this.badgeClasses.length) {
      this.setBadgeClasses();
    }
  }
  ngOnChanges() {
    this.setBadgeClasses();
  }
  ngOnDestroy() {
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
  }
  alignClass() {
    return `k-${this.badgeAlign.vertical}-${this.badgeAlign.horizontal}`;
  }
  positionClass() {
    return `k-badge-${this.position}`;
  }
  sizeClass() {
    return SIZE_CLASSES$1[this.size];
  }
  roundedClass() {
    return ROUNDED_CLASSES2[this.rounded];
  }
  themeColorClass() {
    return this.themeColor ? `k-badge-${this.themeColor}` : "";
  }
  fillClass() {
    return this.fill ? `k-badge-${this.fill}` : "";
  }
  setBadgeClasses() {
    const element = this.element.nativeElement;
    this.badgeClasses.forEach((className) => {
      this.renderer.removeClass(element, className);
    });
    this.badgeClasses = [this.themeColorClass(), this.fillClass(), this.sizeClass(), this.roundedClass(), this.alignClass(), this.positionClass()].filter((className) => className);
    this.badgeClasses.forEach((className) => {
      if (className) {
        this.renderer.addClass(element, className);
      }
    });
  }
  static \u0275fac = function BadgeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BadgeComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(LocalizationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _BadgeComponent,
    selectors: [["kendo-badge"]],
    hostVars: 5,
    hostBindings: function BadgeComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("dir", ctx.direction);
        \u0275\u0275classProp("k-badge", ctx.hostClass)("k-badge-border-cutout", ctx.cutoutBorderClass);
      }
    },
    inputs: {
      align: "align",
      size: "size",
      fill: "fill",
      themeColor: "themeColor",
      rounded: "rounded",
      position: "position",
      cutoutBorder: "cutoutBorder"
    },
    features: [\u0275\u0275ProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.badge.component"
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c04,
    decls: 1,
    vars: 0,
    template: function BadgeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeComponent, [{
    type: Component,
    args: [{
      selector: "kendo-badge",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.badge.component"
      }],
      template: `<ng-content></ng-content>`,
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: LocalizationService
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-badge"]
    }],
    cutoutBorderClass: [{
      type: HostBinding,
      args: ["class.k-badge-border-cutout"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    align: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    fill: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    cutoutBorder: [{
      type: Input
    }]
  });
})();
var SIZE_CLASSES2 = {
  "small": "k-loader-sm",
  "medium": "k-loader-md",
  "large": "k-loader-lg"
};
var SEGMENT_COUNT = {
  "pulsing": 2,
  "infinite-spinner": 3,
  "converging-spinner": 4
};
var TYPE_CLASSES = {
  "pulsing": "k-loader-pulsing-2",
  "infinite-spinner": "k-loader-spinner-3",
  "converging-spinner": "k-loader-spinner-4"
};
var LoaderComponent = class _LoaderComponent {
  element;
  renderer;
  hostClass = true;
  role = "status";
  /**
   * Specifies the Loader animation type.
   *
   * @default pulsing
   */
  set type(type) {
    this.renderer.removeClass(this.loader, TYPE_CLASSES[this.type]);
    this.renderer.addClass(this.loader, TYPE_CLASSES[type]);
    this._type = type;
  }
  get type() {
    return this._type;
  }
  /**
   * Specifies the theme color of the Loader. The default value is set by the Kendo theme.
   */
  set themeColor(themeColor) {
    this.renderer.removeClass(this.loader, `k-loader-${this.themeColor}`);
    this.renderer.addClass(this.loader, `k-loader-${themeColor}`);
    this._themeColor = themeColor;
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * Specifies the size of the Loader. The default value is set by the Kendo theme.
   */
  set size(size) {
    this.renderer.removeClass(this.loader, SIZE_CLASSES2[this.size]);
    this.renderer.addClass(this.loader, SIZE_CLASSES2[size]);
    this._size = size;
  }
  get size() {
    return this._size;
  }
  _type = "pulsing";
  _themeColor;
  _size;
  loader;
  constructor(element, renderer) {
    this.element = element;
    this.renderer = renderer;
    A(packageMetadata4);
    this.loader = this.element.nativeElement;
  }
  ngAfterViewInit() {
    this.setLoaderClasses();
  }
  /**
   * @hidden
   */
  get segmentCount() {
    return new Array(SEGMENT_COUNT[this.type]);
  }
  setLoaderClasses() {
    this.renderer.addClass(this.loader, TYPE_CLASSES[this.type]);
    this.themeColor && this.renderer.addClass(this.loader, `k-loader-${this.themeColor}`);
    this.size && this.renderer.addClass(this.loader, SIZE_CLASSES2[this.size]);
  }
  static \u0275fac = function LoaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoaderComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _LoaderComponent,
    selectors: [["kendo-loader"]],
    hostVars: 3,
    hostBindings: function LoaderComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role);
        \u0275\u0275classProp("k-loader", ctx.hostClass);
      }
    },
    inputs: {
      type: "type",
      themeColor: "themeColor",
      size: "size"
    },
    decls: 3,
    vars: 0,
    consts: [[1, "k-loader-canvas"], [1, "k-loader-segment"]],
    template: function LoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, LoaderComponent_For_2_Template, 1, 0, "span", 1, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.segmentCount);
      }
    },
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderComponent, [{
    type: Component,
    args: [{
      selector: "kendo-loader",
      template: `
        <div class="k-loader-canvas">
          @for (segment of segmentCount; track $index) {
            <span class="k-loader-segment"></span>
          }
        </div>
        `,
      standalone: true,
      imports: []
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-loader"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    type: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var validAnimations = [false, "pulse", "wave"];
var validShapes = ["circle", "rectangle", "text"];
var ANIMATION_CLASSES = {
  pulse: "k-skeleton-pulse",
  wave: "k-skeleton-wave"
};
var SHAPE_CLASSES = {
  rectangle: "k-skeleton-rect",
  circle: "k-skeleton-circle",
  text: "k-skeleton-text"
};
var skeletonShapeError = (input) => `"${input}" is not a valid kendo-skeleton shape. Valid shapes are: ${validShapes.map((s) => `"${s}"`).join(" | ")}.`;
var skeletonAnimationError = (input) => `"${input}" is not a valid kendo-skeleton animation. Valid values are: 'pulse' | 'wave' | false.`;
var SkeletonComponent = class _SkeletonComponent {
  renderer;
  hostElement;
  /**
   * Specifies the animation settings of the Skeleton.
   *
   * @default pulse
   */
  set animation(animation2) {
    if (isDevMode() && validAnimations.indexOf(animation2) === -1) {
      throw new Error(skeletonAnimationError(animation2));
    }
    if (this.animation) {
      this.renderer.removeClass(this.hostElement.nativeElement, ANIMATION_CLASSES[this.animation]);
    }
    if (animation2) {
      this.renderer.addClass(this.hostElement.nativeElement, ANIMATION_CLASSES[animation2]);
    }
    this._animation = animation2;
  }
  get animation() {
    return this._animation;
  }
  /**
   * Specifies the shape of the Skeleton.
   *
   * @default text
   */
  set shape(shape) {
    if (isDevMode() && validShapes.indexOf(shape) === -1) {
      throw new Error(skeletonShapeError(shape));
    }
    this.renderer.removeClass(this.hostElement.nativeElement, SHAPE_CLASSES[this.shape]);
    this.renderer.addClass(this.hostElement.nativeElement, SHAPE_CLASSES[shape]);
    this._shape = shape;
  }
  get shape() {
    return this._shape;
  }
  /**
   * Specifies the width of the Skeleton component.
   * Required for all Skeleton shapes.
   * Accepts a string like `100px`, `3em`, or `50%`, or an integer number for pixels.
   */
  set width(width) {
    this.renderer.setStyle(this.hostElement.nativeElement, "width", typeof width === "string" ? width : width + "px");
  }
  /**
   * Specifies the height of the Skeleton component.
   * Required for `circle` and `rectangle` shapes.
   * Not required for `text`, as it derives from the current CSS font-size.
   * Accepts a string like `100px`, `3em`, or `50%`, or an integer number for pixels.
   */
  set height(height) {
    this.renderer.setStyle(this.hostElement.nativeElement, "height", typeof height === "string" ? height : height + "px");
  }
  _animation = "pulse";
  _shape = "text";
  constructor(renderer, hostElement) {
    this.renderer = renderer;
    this.hostElement = hostElement;
  }
  ngAfterViewInit() {
    const hostElement = this.hostElement.nativeElement;
    hostElement.classList.add("k-skeleton", SHAPE_CLASSES[this.shape]);
    if (this.animation) {
      hostElement.classList.add(ANIMATION_CLASSES[this.animation]);
    }
  }
  static \u0275fac = function SkeletonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SkeletonComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SkeletonComponent,
    selectors: [["kendo-skeleton"]],
    inputs: {
      animation: "animation",
      shape: "shape",
      width: "width",
      height: "height"
    },
    decls: 0,
    vars: 0,
    template: function SkeletonComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkeletonComponent, [{
    type: Component,
    args: [{
      selector: "kendo-skeleton",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    animation: [{
      type: Input
    }],
    shape: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }]
  });
})();
var KENDO_BADGECONTAINER = [BadgeComponent, BadgeContainerComponent];
var KENDO_LOADER = [LoaderComponent];
var KENDO_SKELETON = [SkeletonComponent];
var KENDO_INDICATORS = [...KENDO_BADGECONTAINER, ...KENDO_LOADER, ...KENDO_SKELETON];
var BadgeModule = class _BadgeModule {
  static \u0275fac = function BadgeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BadgeModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BadgeModule,
    imports: [BadgeComponent, BadgeContainerComponent],
    exports: [BadgeComponent, BadgeContainerComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_BADGECONTAINER],
      imports: [...KENDO_BADGECONTAINER]
    }]
  }], null, null);
})();
var LoaderModule = class _LoaderModule {
  static \u0275fac = function LoaderModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoaderModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _LoaderModule,
    imports: [LoaderComponent],
    exports: [LoaderComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_LOADER],
      imports: [...KENDO_LOADER]
    }]
  }], null, null);
})();
var SkeletonModule = class _SkeletonModule {
  static \u0275fac = function SkeletonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SkeletonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SkeletonModule,
    imports: [SkeletonComponent],
    exports: [SkeletonComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkeletonModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_SKELETON],
      imports: [...KENDO_SKELETON]
    }]
  }], null, null);
})();
var IndicatorsModule = class _IndicatorsModule {
  static \u0275fac = function IndicatorsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IndicatorsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _IndicatorsModule,
    imports: [BadgeComponent, BadgeContainerComponent, LoaderComponent, SkeletonComponent],
    exports: [BadgeComponent, BadgeContainerComponent, LoaderComponent, SkeletonComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IndicatorsModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_INDICATORS],
      exports: [...KENDO_INDICATORS]
    }]
  }], null, null);
})();

// node_modules/@progress/kendo-angular-navigation/fesm2022/progress-kendo-angular-navigation.mjs
var _c05 = ["*"];
var _c14 = (a0) => ({
  $implicit: a0
});
function ActionSheetItemComponent_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function ActionSheetItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ActionSheetItemComponent_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c14, ctx_r0.item));
  }
}
function ActionSheetItemComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275element(1, "kendo-icon-wrapper", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r0.manageIconStyles(ctx_r0.item));
    \u0275\u0275classMap(ctx_r0.manageIconClasses(ctx_r0.item));
    \u0275\u0275property("name", ctx_r0.item.icon)("customFontClass", ctx_r0.item.iconClass)("svgIcon", ctx_r0.item.svgIcon);
  }
}
function ActionSheetItemComponent_Conditional_1_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.item.title);
  }
}
function ActionSheetItemComponent_Conditional_1_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.item.description);
  }
}
function ActionSheetItemComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275conditionalCreate(1, ActionSheetItemComponent_Conditional_1_Conditional_2_Conditional_1_Template, 2, 1, "span", 5);
    \u0275\u0275conditionalCreate(2, ActionSheetItemComponent_Conditional_1_Conditional_2_Conditional_2_Template, 2, 1, "span", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.item.title ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.item.description ? 2 : -1);
  }
}
function ActionSheetItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275conditionalCreate(1, ActionSheetItemComponent_Conditional_1_Conditional_1_Template, 2, 7, "span", 2);
    \u0275\u0275conditionalCreate(2, ActionSheetItemComponent_Conditional_1_Conditional_2_Template, 3, 2, "span", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.item.icon || ctx_r0.item.iconClass || ctx_r0.item.svgIcon ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.item.title || ctx_r0.item.description ? 2 : -1);
  }
}
function ActionSheetListComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 1);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("k-actionsheet-item", true)("k-disabled", item_r1.disabled);
    \u0275\u0275property("ngClass", item_r1.cssClass)("ngStyle", item_r1.cssStyle)("itemTemplate", ctx_r1.itemTemplate)("item", item_r1);
    \u0275\u0275attribute("aria-disabled", item_r1.disabled)("kendo-actionsheet-item-index", ctx_r1.setAttrIndex(item_r1));
  }
}
var _c23 = ["childContainer"];
var _c33 = [[["kendo-actionsheet-view"]]];
var _c43 = ["kendo-actionsheet-view"];
var _c53 = (a0, a1) => [a0, a1, "k-actions", "k-actionsheet-footer"];
function ActionSheetComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.actionSheetTemplate == null ? null : ctx_r1.actionSheetTemplate.templateRef);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_0_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_0_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerTemplate == null ? null : ctx_r1.headerTemplate.templateRef);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_0_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.title);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_0_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.subtitle);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275conditionalCreate(2, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_0_Conditional_2_Conditional_2_Template, 2, 1, "div", 12);
    \u0275\u0275conditionalCreate(3, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_0_Conditional_2_Conditional_3_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r1.titleId);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.title ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.subtitle ? 3 : -1);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275conditionalCreate(1, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_0_Conditional_1_Template, 1, 1, null, 6)(2, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_0_Conditional_2_Template, 4, 3, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.headerTemplate ? 1 : 2);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.contentTemplate == null ? null : ctx_r1.contentTemplate.templateRef);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("itemClick", function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Conditional_2_Conditional_0_Template_div_itemClick_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.onItemClick($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275property("groupItems", ctx_r1.topGroupItems)("allItems", ctx_r1.items)("itemTemplate", ctx_r1.itemTemplate == null ? null : ctx_r1.itemTemplate.templateRef);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 15);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("itemClick", function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Conditional_2_Conditional_2_Template_div_itemClick_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.onItemClick($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275property("groupItems", ctx_r1.bottomGroupItems)("allItems", ctx_r1.items)("itemTemplate", ctx_r1.itemTemplate == null ? null : ctx_r1.itemTemplate.templateRef);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Conditional_2_Conditional_0_Template, 1, 3, "div", 14);
    \u0275\u0275conditionalCreate(1, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Conditional_2_Conditional_1_Template, 1, 0, "hr", 15);
    \u0275\u0275conditionalCreate(2, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Conditional_2_Conditional_2_Template, 1, 3, "div", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275conditional(ctx_r1.topGroupItems ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.shouldRenderSeparator ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.bottomGroupItems ? 2 : -1);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275conditionalCreate(1, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Conditional_1_Template, 1, 1, null, 6)(2, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Conditional_2_Template, 3, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.contentTemplate ? 1 : 2);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_2_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_2_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.footerTemplate == null ? null : ctx_r1.footerTemplate.templateRef);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_2_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_2_Conditional_2_For_1_Template_button_click_0_listener() {
      const actionButton_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.action.emit(actionButton_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const actionButton_r6 = ctx.$implicit;
    \u0275\u0275property("icon", actionButton_r6.icon)("title", actionButton_r6.title)("svgIcon", actionButton_r6.svgIcon)("themeColor", actionButton_r6.themeColor)("fillMode", actionButton_r6.fillMode)("size", actionButton_r6.size);
    \u0275\u0275attribute("aria-label", actionButton_r6.text);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", actionButton_r6.text, " ");
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_2_Conditional_2_For_1_Template, 2, 8, "button", 17, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275repeater(ctx_r1.actions);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275conditionalCreate(1, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_2_Conditional_1_Template, 1, 1, null, 6);
    \u0275\u0275conditionalCreate(2, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_2_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c53, ctx_r1.orientationClass, ctx_r1.alignmentClass));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.footerTemplate ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.footerTemplate && ctx_r1.actions ? 2 : -1);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_0_Template, 3, 1, "div", 7);
    \u0275\u0275conditionalCreate(1, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Template, 3, 1, "div", 8);
    \u0275\u0275conditionalCreate(2, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_2_Template, 3, 6, "div", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.title || ctx_r1.subtitle || ctx_r1.headerTemplate ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.items || ctx_r1.contentTemplate ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.footerTemplate || ctx_r1.actions ? 2 : -1);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275conditionalCreate(1, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_1_Template, 1, 1, null, 6)(2, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Template, 3, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.actionSheetTemplate ? 1 : 2);
  }
}
function ActionSheetComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ActionSheetComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3, 0)(4, "div", 4);
    \u0275\u0275conditionalCreate(5, ActionSheetComponent_Conditional_0_Conditional_5_Template, 1, 0);
    \u0275\u0275conditionalCreate(6, ActionSheetComponent_Conditional_0_Conditional_6_Template, 3, 1, "div", 5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(ctx_r1.childContainerStyle);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("--kendo-actionsheet-view-current", (ctx_r1.actionSheetViews == null ? null : ctx_r1.actionSheetViews.length) > 0 ? ctx_r1.currentView : null);
    \u0275\u0275property("ngClass", ctx_r1.cssClass)("ngStyle", ctx_r1.cssStyle);
    \u0275\u0275attribute("aria-labelledby", ctx_r1.titleId);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.actionSheetViews == null ? null : ctx_r1.actionSheetViews.length) > 0 ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.actionSheetViews == null ? null : ctx_r1.actionSheetViews.length) === 0 ? 6 : -1);
  }
}
function ActionSheetViewComponent_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function ActionSheetViewComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ActionSheetViewComponent_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.actionSheetTemplate == null ? null : ctx_r0.actionSheetTemplate.templateRef);
  }
}
function ActionSheetViewComponent_Conditional_1_Conditional_0_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function ActionSheetViewComponent_Conditional_1_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ActionSheetViewComponent_Conditional_1_Conditional_0_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.headerTemplate.templateRef);
  }
}
function ActionSheetViewComponent_Conditional_1_Conditional_0_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title);
  }
}
function ActionSheetViewComponent_Conditional_1_Conditional_0_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.subtitle);
  }
}
function ActionSheetViewComponent_Conditional_1_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275conditionalCreate(2, ActionSheetViewComponent_Conditional_1_Conditional_0_Conditional_2_Conditional_2_Template, 2, 1, "div", 6);
    \u0275\u0275conditionalCreate(3, ActionSheetViewComponent_Conditional_1_Conditional_0_Conditional_2_Conditional_3_Template, 2, 1, "div", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r0.titleId);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.title ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.subtitle ? 3 : -1);
  }
}
function ActionSheetViewComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275conditionalCreate(1, ActionSheetViewComponent_Conditional_1_Conditional_0_Conditional_1_Template, 1, 1, null, 0)(2, ActionSheetViewComponent_Conditional_1_Conditional_0_Conditional_2_Template, 4, 3, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.headerTemplate ? 1 : 2);
  }
}
function ActionSheetViewComponent_Conditional_1_Conditional_1_ng_template_1_Template(rf, ctx) {
}
function ActionSheetViewComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, ActionSheetViewComponent_Conditional_1_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.contentTemplate.templateRef);
  }
}
function ActionSheetViewComponent_Conditional_1_Conditional_2_ng_template_1_Template(rf, ctx) {
}
function ActionSheetViewComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275template(1, ActionSheetViewComponent_Conditional_1_Conditional_2_ng_template_1_Template, 0, 0, "ng-template", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c53, ctx_r0.orientationClass, ctx_r0.alignmentClass));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.footerTemplate.templateRef);
  }
}
function ActionSheetViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ActionSheetViewComponent_Conditional_1_Conditional_0_Template, 3, 1, "div", 1);
    \u0275\u0275conditionalCreate(1, ActionSheetViewComponent_Conditional_1_Conditional_1_Template, 2, 1, "div", 2);
    \u0275\u0275conditionalCreate(2, ActionSheetViewComponent_Conditional_1_Conditional_2_Template, 2, 5, "div", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.title || ctx_r0.subtitle || ctx_r0.headerTemplate ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.contentTemplate ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.footerTemplate ? 2 : -1);
  }
}
function BottomNavigationItemComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-icon-wrapper", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", ctx_r0.item.icon)("customFontClass", ctx_r0.item.iconClass)("svgIcon", ctx_r0.item.svgIcon);
  }
}
function BottomNavigationItemComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.item.text);
  }
}
function BottomNavigationItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, BottomNavigationItemComponent_Conditional_0_Conditional_0_Template, 1, 3, "kendo-icon-wrapper", 1);
    \u0275\u0275conditionalCreate(1, BottomNavigationItemComponent_Conditional_0_Conditional_1_Template, 2, 1, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.itemIcon ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.item.text ? 1 : -1);
  }
}
function BottomNavigationItemComponent_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function BottomNavigationItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BottomNavigationItemComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.itemTemplate == null ? null : ctx_r0.itemTemplate.templateRef)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c14, ctx_r0.item));
  }
}
function BottomNavigationComponent_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 0);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const \u0275$index_2_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabledComponent", ctx_r2.disabled)("item", item_r1)("index", \u0275$index_2_r2)("selectedIdx", ctx_r2.selectedIdx)("itemTemplate", ctx_r2.itemTemplate)("ngClass", item_r1.cssClass)("ngStyle", item_r1.cssStyle)("orientation", ctx_r2.itemFlow);
    \u0275\u0275attribute("data-kendo-bottomnavigation-index", \u0275$index_2_r2);
  }
}
function BottomNavigationComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, BottomNavigationComponent_Conditional_0_For_1_Template, 1, 9, "span", 0, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.items);
  }
}
var _c63 = [[["", "kendoBreadCrumbSeparator", ""]]];
var _c73 = ["[kendoBreadCrumbSeparator]"];
var _c83 = (a0, a1, a2, a3, a4) => ({
  "k-breadcrumb-root-link": a0,
  "k-breadcrumb-link": a1,
  "k-breadcrumb-icontext-link": a2,
  "k-breadcrumb-icon-link": a3,
  "k-disabled": a4
});
var _c93 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function BreadCrumbItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function BreadCrumbItemComponent_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function BreadCrumbItemComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BreadCrumbItemComponent_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 1);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const separator_r1 = \u0275\u0275reference(1);
    \u0275\u0275property("ngTemplateOutlet", separator_r1);
  }
}
function BreadCrumbItemComponent_Conditional_3_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 7);
    \u0275\u0275listener("load", function BreadCrumbItemComponent_Conditional_3_Conditional_0_Conditional_1_Template_img_load_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onImageLoad());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r2.item.data.imageUrl, \u0275\u0275sanitizeUrl);
  }
}
function BreadCrumbItemComponent_Conditional_3_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-icon-wrapper", 5);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("name", ctx_r2.item.data.icon)("customFontClass", ctx_r2.item.data.iconClass)("svgIcon", ctx_r2.item.data.svgIcon);
  }
}
function BreadCrumbItemComponent_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275conditionalCreate(1, BreadCrumbItemComponent_Conditional_3_Conditional_0_Conditional_1_Template, 1, 1, "img", 4);
    \u0275\u0275conditionalCreate(2, BreadCrumbItemComponent_Conditional_3_Conditional_0_Conditional_2_Template, 1, 3, "kendo-icon-wrapper", 5);
    \u0275\u0275elementStart(3, "span", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(8, _c83, ctx_r2.item.context.isFirst, ctx_r2.index !== 0, (!!ctx_r2.item.data.icon || !!ctx_r2.item.data.svgIcon) && !!ctx_r2.item.data.text, (!!ctx_r2.item.data.icon || !!ctx_r2.item.data.svgIcon) && !ctx_r2.item.data.text, ctx_r2.disabled))("title", ctx_r2.item.data.title || "")("tabindex", ctx_r2.disabled ? -1 : 0);
    \u0275\u0275attribute("aria-disabled", ctx_r2.disabled || null)("aria-current", ctx_r2.item.context.isLast ? "page" : null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.item.data.imageUrl ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.item.data.icon || ctx_r2.item.data.iconClass || ctx_r2.item.data.svgIcon ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.item.data.text);
  }
}
function BreadCrumbItemComponent_Conditional_3_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function BreadCrumbItemComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BreadCrumbItemComponent_Conditional_3_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c93, ctx_r2.item.data, ctx_r2.index));
  }
}
function BreadCrumbItemComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, BreadCrumbItemComponent_Conditional_3_Conditional_0_Template, 5, 14, "span", 2);
    \u0275\u0275conditionalCreate(1, BreadCrumbItemComponent_Conditional_3_Conditional_1_Template, 1, 5, null, 3);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r2.itemTemplate ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.itemTemplate ? 1 : -1);
  }
}
function BreadCrumbItemComponent_Conditional_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function BreadCrumbItemComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BreadCrumbItemComponent_Conditional_4_ng_container_0_Template, 1, 0, "ng-container", 1);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const separator_r1 = \u0275\u0275reference(1);
    \u0275\u0275property("ngTemplateOutlet", separator_r1);
  }
}
function BreadCrumbListComponent_For_1_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("icon", ctx_r0.separatorIcon)("svgIcon", ctx_r0.separatorSVGIcon);
  }
}
function BreadCrumbListComponent_For_1_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("icon", ctx_r0.separatorIcon)("svgIcon", ctx_r0.separatorSVGIcon);
  }
}
function BreadCrumbListComponent_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 1, 0);
    \u0275\u0275conditionalCreate(2, BreadCrumbListComponent_For_1_Conditional_0_Conditional_2_Template, 1, 2, "span", 2);
    \u0275\u0275conditionalCreate(3, BreadCrumbListComponent_For_1_Conditional_0_Conditional_3_Template, 1, 2, "span", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const item_r3 = ctx_r1.$implicit;
    const \u0275$index_1_r4 = ctx_r1.$index;
    const \u0275$count_1_r5 = ctx_r1.$count;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("item", item_r3)("index", \u0275$index_1_r4)("collapseMode", ctx_r0.collapseMode)("itemTemplate", ctx_r0.itemTemplate);
    \u0275\u0275attribute("data-kendo-breadcrumb-index", \u0275$index_1_r4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.collapseMode === "wrap" && !(\u0275$index_1_r4 === 0) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.collapseMode !== "wrap" && !(\u0275$index_1_r4 === \u0275$count_1_r5 - 1) && !((item_r3 == null ? null : item_r3.context.collapsed) && (ctx_r0.items[\u0275$index_1_r4 + 1] == null ? null : ctx_r0.items[\u0275$index_1_r4 + 1].context.collapsed)) ? 3 : -1);
  }
}
function BreadCrumbListComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, BreadCrumbListComponent_For_1_Conditional_0_Template, 4, 7, "li", 1);
  }
  if (rf & 2) {
    const \u0275$index_1_r4 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!(ctx_r0.collapseMode === "wrap" && \u0275$index_1_r4 === 0) || ctx_r0.isRootItemContainer ? 0 : -1);
  }
}
var _c102 = ["resizeSensor"];
var _c112 = ["itemsContainer"];
var _c123 = (a0, a1) => ({
  "!k-flex-wrap": a0,
  "k-flex-none": a1
});
function BreadCrumbComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ol", 5, 0);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("itemClick", function BreadCrumbComponent_Conditional_0_Template_ol_itemClick_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.itemClick.emit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("items", \u0275\u0275pipeBind1(2, 5, ctx_r1.firstItem$))("itemTemplate", ctx_r1.itemTemplate == null ? null : ctx_r1.itemTemplate.templateRef)("collapseMode", ctx_r1.collapseMode)("separatorIcon", ctx_r1.separatorIcon)("separatorSVGIcon", ctx_r1.separatorSVGIcon);
  }
}
var packageMetadata5 = {
  name: "@progress/kendo-angular-navigation",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1780593701,
  version: "24.1.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var DEFAULT_POSITION = "top";
var DEFAULT_POSITION_MODE = "static";
var AppBarComponent = class _AppBarComponent {
  localizationService;
  host;
  renderer;
  hostClass = true;
  /**
   * @hidden
   */
  direction;
  /**
   * Specifies the position of the AppBar
   * ([see example](https://www.telerik.com/kendo-angular-ui/components/navigation/appbar/positioning#position)).
   *
   * @default 'top'
   */
  set position(position2) {
    const newPosition = position2 ? position2 : DEFAULT_POSITION;
    this.handleHostClasses(newPosition, this.position);
    this._position = newPosition;
  }
  get position() {
    return this._position;
  }
  /**
   * Sets the position mode of the AppBar ([see example](https://www.telerik.com/kendo-angular-ui/components/navigation/appbar/positioning#position-mode)).
   *
   * @default 'static'
   */
  set positionMode(positionMode) {
    const newPositionMode = positionMode ? positionMode : DEFAULT_POSITION_MODE;
    this.handleHostClasses(newPositionMode, this.positionMode);
    this._positionMode = newPositionMode;
  }
  get positionMode() {
    return this._positionMode;
  }
  /**
   * Sets the theme color of the AppBar. The theme color is applied as the background color of the component. The default value is set by the Kendo theme.
   */
  set themeColor(themeColor) {
    this.handleHostClasses(themeColor, this.themeColor);
    this._themeColor = themeColor;
  }
  get themeColor() {
    return this._themeColor;
  }
  dynamicRTLSubscription;
  rtl = false;
  _themeColor;
  _position = DEFAULT_POSITION;
  _positionMode = DEFAULT_POSITION_MODE;
  constructor(localizationService, host, renderer) {
    this.localizationService = localizationService;
    this.host = host;
    this.renderer = renderer;
    A(packageMetadata5);
    this.dynamicRTLSubscription = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    });
  }
  ngAfterViewInit() {
    const stylingOptions = ["position", "positionMode", "themeColor"];
    stylingOptions.forEach((input) => {
      this.handleHostClasses(this[input]);
    });
  }
  ngOnDestroy() {
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
  }
  handleHostClasses(newValue, previousValue) {
    const elem = this.host.nativeElement;
    if (previousValue && newValue === previousValue) {
      return;
    }
    if (previousValue) {
      this.renderer.removeClass(elem, `k-appbar-${previousValue}`);
    }
    if (newValue) {
      this.renderer.addClass(elem, `k-appbar-${newValue}`);
    }
  }
  static \u0275fac = function AppBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppBarComponent)(\u0275\u0275directiveInject(LocalizationService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AppBarComponent,
    selectors: [["kendo-appbar"]],
    hostVars: 3,
    hostBindings: function AppBarComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("dir", ctx.direction);
        \u0275\u0275classProp("k-appbar", ctx.hostClass);
      }
    },
    inputs: {
      position: "position",
      positionMode: "positionMode",
      themeColor: "themeColor"
    },
    exportAs: ["kendoAppBar"],
    features: [\u0275\u0275ProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.appbar.component"
    }])],
    ngContentSelectors: _c05,
    decls: 1,
    vars: 0,
    template: function AppBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppBarComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoAppBar",
      selector: "kendo-appbar",
      template: `
        <ng-content></ng-content>
    `,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.appbar.component"
      }],
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-appbar"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    position: [{
      type: Input
    }],
    positionMode: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }]
  });
})();
var AppBarSectionComponent = class _AppBarSectionComponent {
  hostClass = true;
  static \u0275fac = function AppBarSectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppBarSectionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AppBarSectionComponent,
    selectors: [["kendo-appbar-section"]],
    hostVars: 2,
    hostBindings: function AppBarSectionComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("k-appbar-section", ctx.hostClass);
      }
    },
    ngContentSelectors: _c05,
    decls: 1,
    vars: 0,
    template: function AppBarSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppBarSectionComponent, [{
    type: Component,
    args: [{
      selector: "kendo-appbar-section",
      template: `
        <ng-content></ng-content>
    `,
      standalone: true
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-appbar-section"]
    }]
  });
})();
var isPresent4 = (value) => value !== null && value !== void 0;
var outerWidth = (element) => {
  const style2 = getComputedStyle(element);
  let width = parseFloat(style2.width);
  width += (parseFloat(style2.marginLeft) || 0) + (parseFloat(style2.marginRight) || 0);
  return width;
};
var getFirstAndLastFocusable = (parent) => {
  const all = getAllFocusableChildren(parent);
  const firstFocusable = all.length > 0 ? all[0] : parent;
  const lastFocusable = all.length > 0 ? all[all.length - 1] : parent;
  return [firstFocusable, lastFocusable];
};
var getAllFocusableChildren = (parent) => {
  return parent.querySelectorAll(focusableSelector);
};
var idx = 0;
var hexColorRegex = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
var getId = (prefix) => {
  return `${prefix}${++idx}`;
};
var ACTIONSHEET_ITEM_INDEX_ATTRIBUTE = "kendo-actionsheet-item-index";
var getActionSheetItemIndex = (target, targetAttr, scope) => {
  const item = closestItem$1(target, targetAttr, scope);
  if (item) {
    return itemIndex$1(item, targetAttr);
  }
};
var itemIndex$1 = (item, indexAttr) => +item.getAttribute(indexAttr);
var hasItemIndex$1 = (item, indexAttr) => isPresent4(item.getAttribute(indexAttr));
var closestItem$1 = (target, targetAttr, scope) => closestInScope(target, (el) => hasItemIndex$1(el, targetAttr), scope);
var AppBarSpacerComponent = class _AppBarSpacerComponent {
  renderer;
  element;
  hostClass = true;
  get sizedClass() {
    return isPresent4(this.width);
  }
  /**
   * Specifies the width of the AppBarSpacer.
   *
   * If not set, the AppBarSpacer will take all of the available space.
   */
  width;
  constructor(renderer, element) {
    this.renderer = renderer;
    this.element = element;
  }
  ngAfterViewInit() {
    if (isPresent4(this.width)) {
      const element = this.element.nativeElement;
      this.renderer.setStyle(element, "flexBasis", this.width);
    }
  }
  static \u0275fac = function AppBarSpacerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppBarSpacerComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AppBarSpacerComponent,
    selectors: [["kendo-appbar-spacer"]],
    hostVars: 4,
    hostBindings: function AppBarSpacerComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("k-spacer", ctx.hostClass)("k-spacer-sized", ctx.sizedClass);
      }
    },
    inputs: {
      width: "width"
    },
    decls: 0,
    vars: 0,
    template: function AppBarSpacerComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppBarSpacerComponent, [{
    type: Component,
    args: [{
      selector: "kendo-appbar-spacer",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-spacer"]
    }],
    sizedClass: [{
      type: HostBinding,
      args: ["class.k-spacer-sized"]
    }],
    width: [{
      type: Input
    }]
  });
})();
var ActionSheetHeaderTemplateDirective = class _ActionSheetHeaderTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static \u0275fac = function ActionSheetHeaderTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetHeaderTemplateDirective)(\u0275\u0275directiveInject(TemplateRef, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ActionSheetHeaderTemplateDirective,
    selectors: [["", "kendoActionSheetHeaderTemplate", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetHeaderTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoActionSheetHeaderTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var ActionSheetItemTemplateDirective = class _ActionSheetItemTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static \u0275fac = function ActionSheetItemTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetItemTemplateDirective)(\u0275\u0275directiveInject(TemplateRef, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ActionSheetItemTemplateDirective,
    selectors: [["", "kendoActionSheetItemTemplate", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoActionSheetItemTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var ActionSheetContentTemplateDirective = class _ActionSheetContentTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static \u0275fac = function ActionSheetContentTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetContentTemplateDirective)(\u0275\u0275directiveInject(TemplateRef, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ActionSheetContentTemplateDirective,
    selectors: [["", "kendoActionSheetContentTemplate", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetContentTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoActionSheetContentTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var ActionSheetFooterTemplateDirective = class _ActionSheetFooterTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static \u0275fac = function ActionSheetFooterTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetFooterTemplateDirective)(\u0275\u0275directiveInject(TemplateRef, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ActionSheetFooterTemplateDirective,
    selectors: [["", "kendoActionSheetFooterTemplate", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetFooterTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoActionSheetFooterTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var ActionSheetTemplateDirective = class _ActionSheetTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static \u0275fac = function ActionSheetTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetTemplateDirective)(\u0275\u0275directiveInject(TemplateRef, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ActionSheetTemplateDirective,
    selectors: [["", "kendoActionSheetTemplate", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoActionSheetTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
function slideUp(duration, height) {
  return [style({
    overflow: "hidden",
    display: "block",
    height: 0
  }), animate(`${duration}ms ease-in`, style({
    height: `${height}`
  }))];
}
function slideDown(duration, height) {
  return [style({
    overflow: "hidden",
    height: `${height}`
  }), animate(`${duration}ms ease-in`, style({
    overflow: "hidden",
    height: 0
  }))];
}
var ActionSheetItemComponent = class _ActionSheetItemComponent {
  itemTemplate;
  item;
  pointerClass = true;
  manageIconClasses(item) {
    const classes = ["k-actionsheet-item-icon"];
    const isHexColor = isPresent4(item.iconColor) && hexColorRegex.test(item.iconColor);
    const isThemeColor = isPresent4(item.iconColor) && item.iconColor !== "" && !isHexColor;
    if (isThemeColor) {
      classes.push(`k-text-${item.iconColor}`);
    }
    return classes.join(" ");
  }
  manageIconStyles(item) {
    const isHexColor = isPresent4(item.iconColor) && hexColorRegex.test(item.iconColor);
    const isSizeSet = isPresent4(item.iconSize) && item.iconSize !== "";
    const styles = {};
    if (isHexColor) {
      styles.color = item.iconColor;
    }
    if (isSizeSet) {
      styles.fontSize = item.iconSize;
    }
    return styles;
  }
  static \u0275fac = function ActionSheetItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetItemComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ActionSheetItemComponent,
    selectors: [["", "kendoActionSheetItem", ""]],
    hostVars: 2,
    hostBindings: function ActionSheetItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("k-cursor-pointer", ctx.pointerClass);
      }
    },
    inputs: {
      itemTemplate: "itemTemplate",
      item: "item"
    },
    decls: 2,
    vars: 1,
    consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "k-actionsheet-action"], [1, "k-icon-wrap"], [1, "k-actionsheet-item-text"], [3, "name", "customFontClass", "svgIcon"], [1, "k-actionsheet-item-title"], [1, "k-actionsheet-item-description"]],
    template: function ActionSheetItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ActionSheetItemComponent_Conditional_0_Template, 1, 4, null, 0)(1, ActionSheetItemComponent_Conditional_1_Template, 3, 2, "span", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.itemTemplate ? 0 : 1);
      }
    },
    dependencies: [NgTemplateOutlet, IconWrapperComponent],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetItemComponent, [{
    type: Component,
    args: [{
      selector: "[kendoActionSheetItem]",
      template: `
        @if (itemTemplate) {
          <ng-template
            [ngTemplateOutlet]="itemTemplate"
            [ngTemplateOutletContext]="{
                $implicit: item
            }">
          </ng-template>
        } @else {
          <span class="k-actionsheet-action">
            @if (item.icon || item.iconClass || item.svgIcon) {
              <span class="k-icon-wrap">
                <kendo-icon-wrapper
                  [name]="item.icon"
                  [customFontClass]="item.iconClass"
                  [class]="manageIconClasses(item)"
                  [svgIcon]="item.svgIcon"
                  [style]="manageIconStyles(item)"
                  >
                </kendo-icon-wrapper>
              </span>
            }
            @if (item.title || item.description) {
              <span class="k-actionsheet-item-text">
                @if (item.title) {
                  <span class="k-actionsheet-item-title">{{item.title}}</span>
                }
                @if (item.description) {
                  <span class="k-actionsheet-item-description">{{item.description}}</span>
                }
              </span>
            }
          </span>
        }
        `,
      standalone: true,
      imports: [NgTemplateOutlet, IconWrapperComponent]
    }]
  }], null, {
    itemTemplate: [{
      type: Input
    }],
    item: [{
      type: Input
    }],
    pointerClass: [{
      type: HostBinding,
      args: ["class.k-cursor-pointer"]
    }]
  });
})();
var ActionSheetListComponent = class _ActionSheetListComponent {
  renderer;
  ngZone;
  element;
  groupItems = [];
  allItems = [];
  itemTemplate;
  itemClick = new EventEmitter();
  subscriptions = new Subscription();
  constructor(renderer, ngZone, element) {
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.element = element;
  }
  ngAfterViewInit() {
    this.initDomEvents();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  initDomEvents() {
    if (!this.element) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      const nativeElement = this.element.nativeElement;
      this.subscriptions.add(this.renderer.listen(nativeElement, "click", this.clickHandler.bind(this)));
    });
  }
  clickHandler(e) {
    const itemIndex2 = getActionSheetItemIndex(e.target, ACTIONSHEET_ITEM_INDEX_ATTRIBUTE, this.element.nativeElement);
    const item = this.allItems[itemIndex2];
    if (!item) {
      return;
    }
    if (item.disabled) {
      e.preventDefault();
      return;
    }
    this.ngZone.run(() => {
      this.itemClick.emit({
        item,
        originalEvent: e
      });
    });
  }
  setAttrIndex(item) {
    return this.allItems.indexOf(item);
  }
  static \u0275fac = function ActionSheetListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetListComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ActionSheetListComponent,
    selectors: [["", "kendoActionSheetList", ""]],
    inputs: {
      groupItems: "groupItems",
      allItems: "allItems",
      itemTemplate: "itemTemplate"
    },
    outputs: {
      itemClick: "itemClick"
    },
    decls: 2,
    vars: 0,
    consts: [["kendoActionSheetItem", "", "tabindex", "0", 3, "k-actionsheet-item", "k-disabled", "ngClass", "ngStyle", "itemTemplate", "item"], ["kendoActionSheetItem", "", "tabindex", "0", 3, "ngClass", "ngStyle", "itemTemplate", "item"]],
    template: function ActionSheetListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, ActionSheetListComponent_For_1_Template, 1, 10, "span", 0, \u0275\u0275repeaterTrackByIdentity);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.groupItems);
      }
    },
    dependencies: [ActionSheetItemComponent, NgClass, NgStyle],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetListComponent, [{
    type: Component,
    args: [{
      selector: "[kendoActionSheetList]",
      template: `
            @for (item of groupItems; track item) {
              <span kendoActionSheetItem
                tabindex="0"
                [attr.aria-disabled]="item.disabled"
                [class.k-actionsheet-item]="true"
                [attr.${ACTIONSHEET_ITEM_INDEX_ATTRIBUTE}]="setAttrIndex(item)"
                [class.k-disabled]="item.disabled"
                [ngClass]="item.cssClass"
                [ngStyle]="item.cssStyle"
                [itemTemplate]="itemTemplate"
                [item]="item">
              </span>
            }
            `,
      standalone: true,
      imports: [ActionSheetItemComponent, NgClass, NgStyle]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: ElementRef
  }], {
    groupItems: [{
      type: Input
    }],
    allItems: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }]
  });
})();
var DEFAULT_ANIMATION_CONFIG = {
  duration: 300
};
var FULLSCREEN_CLASS = "k-actionsheet-fullscreen";
var ActionSheetComponent = class _ActionSheetComponent {
  element;
  ngZone;
  renderer;
  localizationService;
  builder;
  cdr;
  /**
   * @hidden
   */
  currentView = 1;
  /**
   * @hidden
   */
  get hostClass() {
    return this.expanded;
  }
  /**
   * @hidden
   */
  direction;
  /**
   * Specifies the action buttons displayed in the ActionSheet footer.
   */
  actions;
  /**
   * Configures the layout of the action buttons in the footer. By default, actions are arranged horizontally and stretched to fill the container.
   */
  actionsLayout = {
    orientation: "horizontal",
    alignment: "stretched"
  };
  /**
   * Determines whether the ActionSheet closes when the overlay is clicked.
   *
   * @default false
   */
  overlayClickClose = false;
  /**
   * Sets the title text displayed in the ActionSheet header.
   */
  title;
  /**
   * Sets the subtitle text displayed below the title in the header.
   */
  subtitle;
  /**
   * Provides the collection of items rendered in the ActionSheet content area.
   */
  items;
  /**
   * Applies CSS classes to the inner ActionSheet element. Accepts any value supported by [`ngClass`](link:site.data.urls.angular['ngclassapi']).
   */
  set cssClass(value) {
    this._cssClass = value;
    this.isFullscreen = this.hasFullscreenClass(value);
  }
  get cssClass() {
    return this._cssClass;
  }
  /**
   * Applies inline styles to the inner ActionSheet element. Accepts any value supported by [`ngStyle`](link:site.data.urls.angular['ngstyleapi']).
   */
  cssStyle;
  /**
   * Configures the opening and closing animations for the ActionSheet ([see example](https://www.telerik.com/kendo-angular-ui/components/navigation/actionsheet/animations)).
   *
   * @default true
   */
  animation = true;
  /**
   * Controls whether the ActionSheet is expanded or collapsed.
   *
   * @default false
   */
  expanded = false;
  /**
   * Sets the `aria-labelledby` attribute of the ActionSheet wrapper element.
   * Use this option when the built-in header element is replaced through the [`ActionSheetHeaderTemplate`](https://www.telerik.com/kendo-angular-ui/components/navigation/api/actionsheetheadertemplatedirective)
   * or [`ActionSheetContentTemplate`](https://www.telerik.com/kendo-angular-ui/components/navigation/api/actionsheetcontenttemplatedirective).
   *
   * @remarks
   * This property is related to accessibility.
   */
  titleId = getId("k-actionsheet-title");
  /**
   * @hidden
   *
   * Determines if the ActionSheet should focus the first focusable element when opened.
   */
  initialFocus = true;
  /**
   * Fires when the `expanded` property of the component is updated.
   * You can use this event to provide two-way binding for the `expanded` property.
   */
  expandedChange = new EventEmitter();
  /**
   * Fires when any of the ActionSheet action buttons is clicked.
   */
  action = new EventEmitter();
  /**
   * Fires when the ActionSheet is expanded and its animation is complete.
   */
  expand = new EventEmitter();
  /**
   * Fires when the ActionSheet is collapsed and its animation is complete.
   */
  collapse = new EventEmitter();
  /**
   * Fires when an ActionSheet item is clicked.
   */
  itemClick = new EventEmitter();
  /**
   * Fires when the modal overlay is clicked.
   */
  overlayClick = new EventEmitter();
  /**
   * @hidden
   */
  childContainer;
  /**
   * @hidden
   */
  actionSheetViews;
  /**
   * @hidden
   */
  actionSheetTemplate;
  /**
   * @hidden
   */
  headerTemplate;
  /**
   * @hidden
   */
  contentTemplate;
  /**
   * @hidden
   */
  itemTemplate;
  /**
   * @hidden
   */
  footerTemplate;
  _cssClass;
  dynamicRTLSubscription;
  rtl = false;
  domSubs = new Subscription();
  player;
  animationEnd = new EventEmitter();
  isFullscreen = false;
  constructor(element, ngZone, renderer, localizationService, builder, cdr) {
    this.element = element;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.localizationService = localizationService;
    this.builder = builder;
    this.cdr = cdr;
    A(packageMetadata5);
    this.dynamicRTLSubscription = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    });
  }
  ngAfterViewInit() {
    this.initDomEvents();
    this.setCssVariables();
  }
  ngOnChanges(changes) {
    if (changes["expanded"] && this.expanded) {
      this.setExpanded(true);
    }
  }
  ngOnDestroy() {
    this.domSubs.unsubscribe();
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
    if (this.player) {
      this.player.destroy();
    }
  }
  /**
   * @hidden
   * Navigates to the next view.
   */
  nextView() {
    if (this.currentView < this.actionSheetViews.length) {
      this.currentView += 1;
    }
  }
  /**
   * @hidden
   * Navigates to the previous view.
   */
  prevView() {
    if (this.currentView > 1) {
      this.currentView -= 1;
    }
  }
  /**
   * Toggles the visibility of the ActionSheet.
   *
   * @param expanded? - Boolean. Specifies if the ActionSheet will be expanded or collapsed.
   */
  toggle(expanded2) {
    const previous = this.expanded;
    const current = isPresent(expanded2) ? expanded2 : !previous;
    if (current === previous) {
      return;
    }
    if (current === true) {
      this.setExpanded(true);
    } else if (current === false && !this.animation) {
      this.setExpanded(false);
    }
    if (this.animation) {
      this.animationEnd.pipe(take(1)).subscribe(() => {
        this.onAnimationEnd(current);
      });
      this.playAnimation(current);
    } else {
      this[current ? "expand" : "collapse"].emit();
    }
  }
  /**
   * @hidden
   */
  get orientationClass() {
    return this.actionsLayout.orientation ? `k-actions-${this.actionsLayout.orientation}` : "";
  }
  /**
   * @hidden
   */
  get alignmentClass() {
    return this.actionsLayout.alignment ? `k-actions-${this.actionsLayout.alignment}` : "";
  }
  /**
   * @hidden
   */
  get topGroupItems() {
    return this.items?.filter((item) => !item.group || item.group === "top");
  }
  /**
   * @hidden
   */
  get bottomGroupItems() {
    return this.items?.filter((item) => item.group === "bottom");
  }
  /**
   * @hidden
   */
  onItemClick(ev) {
    this.itemClick.emit(ev);
  }
  /**
   * @hidden
   */
  onOverlayClick() {
    this.overlayClick.emit();
    if (this.overlayClickClose) {
      this.toggle(false);
    }
  }
  /**
   * @hidden
   */
  get shouldRenderSeparator() {
    return this.topGroupItems?.length > 0 && this.bottomGroupItems?.length > 0;
  }
  /**
   * @hidden
   */
  get childContainerStyle() {
    const baseStyle = "bottom: 0px; width: 100%;";
    return this.isFullscreen ? `${baseStyle} height: 100%;` : baseStyle;
  }
  initDomEvents() {
    if (!this.element) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      this.domSubs.add(this.renderer.listen(this.element.nativeElement, "keydown", (ev) => {
        this.onKeyDown(ev);
      }));
    });
  }
  setCssVariables() {
    if (!this.element || !isDocumentAvailable()) {
      return;
    }
    this.element.nativeElement.style.setProperty("--kendo-actionsheet-height", "auto");
    this.element.nativeElement.style.setProperty("--kendo-actionsheet-max-height", "none");
  }
  hasFullscreenClass(cssClass) {
    if (!cssClass) {
      return false;
    }
    if (typeof cssClass === "string") {
      return cssClass.split(/\s+/).includes(FULLSCREEN_CLASS);
    }
    if (cssClass instanceof Set) {
      return cssClass.has(FULLSCREEN_CLASS);
    }
    if (Array.isArray(cssClass)) {
      return cssClass.some((cls) => typeof cls === "string" && cls.split(/\s+/).includes(FULLSCREEN_CLASS));
    }
    return cssClass[FULLSCREEN_CLASS] === true;
  }
  onKeyDown(event) {
    const target = event.target;
    if (event.code === Keys.Tab) {
      this.ngZone.run(() => {
        this.keepFocusWithinComponent(target, event);
      });
    }
    if (event.code === Keys.Escape) {
      this.ngZone.run(() => {
        this.overlayClick.emit();
      });
    }
    if (event.code === Keys.Enter || event.code === Keys.NumpadEnter) {
      this.ngZone.run(() => {
        this.triggerItemClick(target, event);
      });
    }
  }
  handleInitialFocus() {
    const [firstFocusable] = getFirstAndLastFocusable(this.element.nativeElement);
    if (firstFocusable && this.initialFocus) {
      firstFocusable.focus();
    }
  }
  keepFocusWithinComponent(target, event) {
    const wrapper = this.element.nativeElement;
    const [firstFocusable, lastFocusable] = getFirstAndLastFocusable(wrapper);
    const tabAfterLastFocusable = !event.shiftKey && target === lastFocusable;
    const shiftTabAfterFirstFocusable = event.shiftKey && target === firstFocusable;
    if (tabAfterLastFocusable) {
      event.preventDefault();
      firstFocusable.focus();
    }
    if (shiftTabAfterFirstFocusable) {
      event.preventDefault();
      lastFocusable.focus();
    }
  }
  triggerItemClick(target, event) {
    const itemIndex2 = getActionSheetItemIndex(target, ACTIONSHEET_ITEM_INDEX_ATTRIBUTE, this.element.nativeElement);
    const item = isPresent(itemIndex2) ? this.items[itemIndex2] : null;
    if (!item || item.disabled) {
      return;
    }
    this.itemClick.emit({
      item,
      originalEvent: event
    });
  }
  setExpanded(value) {
    this.expanded = value;
    this.expandedChange.emit(value);
    if (this.expanded) {
      this.cdr.detectChanges();
      this.handleInitialFocus();
    }
  }
  onAnimationEnd(currentExpanded) {
    if (currentExpanded) {
      this.expand.emit();
    } else {
      this.setExpanded(false);
      this.collapse.emit();
    }
  }
  playAnimation(expanded2) {
    const duration = typeof this.animation !== "boolean" && this.animation.duration ? this.animation.duration : DEFAULT_ANIMATION_CONFIG.duration;
    const contentHeight = getComputedStyle(this.childContainer.nativeElement).height;
    const animation2 = expanded2 ? slideUp(duration, contentHeight) : slideDown(duration, contentHeight);
    const factory = this.builder.build(animation2);
    this.player = factory.create(this.childContainer.nativeElement);
    this.player.onDone(() => {
      if (this.player) {
        this.animationEnd.emit();
        this.player.destroy();
        this.player = null;
      }
    });
    this.player.play();
  }
  static \u0275fac = function ActionSheetComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(LocalizationService), \u0275\u0275directiveInject(AnimationBuilder), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ActionSheetComponent,
    selectors: [["kendo-actionsheet"]],
    contentQueries: function ActionSheetComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, ActionSheetTemplateDirective, 5)(dirIndex, ActionSheetHeaderTemplateDirective, 5)(dirIndex, ActionSheetContentTemplateDirective, 5)(dirIndex, ActionSheetItemTemplateDirective, 5)(dirIndex, ActionSheetFooterTemplateDirective, 5)(dirIndex, ActionSheetViewComponent, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.actionSheetTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.actionSheetViews = _t);
      }
    },
    viewQuery: function ActionSheetComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c23, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.childContainer = _t.first);
      }
    },
    hostVars: 3,
    hostBindings: function ActionSheetComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("dir", ctx.direction);
        \u0275\u0275classProp("k-actionsheet-container", ctx.hostClass);
      }
    },
    inputs: {
      actions: "actions",
      actionsLayout: "actionsLayout",
      overlayClickClose: "overlayClickClose",
      title: "title",
      subtitle: "subtitle",
      items: "items",
      cssClass: "cssClass",
      cssStyle: "cssStyle",
      animation: "animation",
      expanded: "expanded",
      titleId: "titleId",
      initialFocus: "initialFocus"
    },
    outputs: {
      expandedChange: "expandedChange",
      action: "action",
      expand: "expand",
      collapse: "collapse",
      itemClick: "itemClick",
      overlayClick: "overlayClick"
    },
    exportAs: ["kendoActionSheet"],
    features: [\u0275\u0275ProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.actionsheet.component"
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c43,
    decls: 1,
    vars: 1,
    consts: [["childContainer", ""], [1, "k-overlay", 3, "click"], [1, "k-animation-container", "k-animation-container-shown"], [1, "k-child-animation-container"], ["role", "dialog", "aria-modal", "true", 1, "k-actionsheet", "k-actionsheet-bottom", 3, "ngClass", "ngStyle"], [1, "k-actionsheet-view"], [3, "ngTemplateOutlet"], [1, "k-actionsheet-titlebar"], [1, "k-actionsheet-content"], [3, "ngClass"], [1, "k-actionsheet-titlebar-group"], [1, "k-actionsheet-title", 3, "id"], [1, "k-text-center"], [1, "k-actionsheet-subtitle", "k-text-center"], ["kendoActionSheetList", "", 1, "k-list-ul", 3, "groupItems", "allItems", "itemTemplate"], [1, "k-hr"], ["kendoActionSheetList", "", 1, "k-list-ul", 3, "itemClick", "groupItems", "allItems", "itemTemplate"], ["kendoButton", "", "type", "button", 3, "icon", "title", "svgIcon", "themeColor", "fillMode", "size"], ["kendoButton", "", "type", "button", 3, "click", "icon", "title", "svgIcon", "themeColor", "fillMode", "size"]],
    template: function ActionSheetComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c33);
        \u0275\u0275conditionalCreate(0, ActionSheetComponent_Conditional_0_Template, 7, 9);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.expanded ? 0 : -1);
      }
    },
    dependencies: [NgStyle, NgClass, NgTemplateOutlet, ActionSheetListComponent, ButtonComponent],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoActionSheet",
      selector: "kendo-actionsheet",
      template: `
        @if (expanded) {
          <div class="k-overlay" (click)="onOverlayClick()"></div>
          <div class="k-animation-container k-animation-container-shown">
            <div #childContainer class="k-child-animation-container" [style]="childContainerStyle">
              <div
                class="k-actionsheet k-actionsheet-bottom"
                [ngClass]="cssClass"
                [ngStyle]="cssStyle"
                role="dialog"
                aria-modal="true"
                [attr.aria-labelledby]="titleId"
                [style.--kendo-actionsheet-view-current]="actionSheetViews?.length > 0 ? currentView : null"
                >
                @if (actionSheetViews?.length > 0) {
                  <ng-content select="kendo-actionsheet-view"></ng-content>
                }
                @if (actionSheetViews?.length === 0) {
                  <div class="k-actionsheet-view">
                    @if (actionSheetTemplate) {
                      <ng-template
                        [ngTemplateOutlet]="actionSheetTemplate?.templateRef">
                      </ng-template>
                    } @else {
                      @if (title || subtitle || headerTemplate) {
                        <div class="k-actionsheet-titlebar">
                          @if (headerTemplate) {
                            <ng-template
                              [ngTemplateOutlet]="headerTemplate?.templateRef">
                            </ng-template>
                          } @else {
                            <div class="k-actionsheet-titlebar-group">
                              <div class="k-actionsheet-title" [id]="titleId">
                                @if (title) {
                                  <div class="k-text-center">{{title}}</div>
                                }
                                @if (subtitle) {
                                  <div class="k-actionsheet-subtitle k-text-center">{{subtitle}}</div>
                                }
                              </div>
                            </div>
                          }
                        </div>
                      }
                      @if (items || contentTemplate) {
                        <div class="k-actionsheet-content">
                          @if (contentTemplate) {
                            <ng-template
                              [ngTemplateOutlet]="contentTemplate?.templateRef">
                            </ng-template>
                          } @else {
                            @if (topGroupItems) {
                              <div kendoActionSheetList
                                class="k-list-ul"
                                [groupItems]="topGroupItems"
                                [allItems]="items"
                                [itemTemplate]="itemTemplate?.templateRef"
                                (itemClick)="onItemClick($event)">
                              </div>
                            }
                            @if (shouldRenderSeparator) {
                              <hr class="k-hr"/>
                            }
                            @if (bottomGroupItems) {
                              <div kendoActionSheetList
                                class="k-list-ul"
                                [groupItems]="bottomGroupItems"
                                [allItems]="items"
                                [itemTemplate]="itemTemplate?.templateRef"
                                (itemClick)="onItemClick($event)">
                              </div>
                            }
                          }
                        </div>
                      }
                      @if (footerTemplate || actions) {
                        <div [ngClass]="[orientationClass, alignmentClass, 'k-actions', 'k-actionsheet-footer']">
                          @if (footerTemplate) {
                            <ng-template
                              [ngTemplateOutlet]="footerTemplate?.templateRef">
                            </ng-template>
                          }
                          @if (!footerTemplate && actions) {
                            @for (actionButton of actions; track actionButton) {
                              <button
                                kendoButton
                                type="button"
                                [icon]="actionButton.icon"
                                [title]="actionButton.title"
                                [svgIcon]="actionButton.svgIcon"
                                [themeColor]="actionButton.themeColor"
                                [fillMode]="actionButton.fillMode"
                                [size]="actionButton.size"
                                [attr.aria-label]="actionButton.text"
                                (click)="action.emit(actionButton)"
                                >
                                {{ actionButton.text }}
                              </button>
                            }
                          }
                        </div>
                      }
                    }
                  </div>
                }
              </div>
            </div>
          </div>
        }
        `,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.actionsheet.component"
      }],
      standalone: true,
      imports: [NgStyle, NgClass, NgTemplateOutlet, ActionSheetListComponent, ButtonComponent]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: Renderer2
  }, {
    type: LocalizationService
  }, {
    type: AnimationBuilder
  }, {
    type: ChangeDetectorRef
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-actionsheet-container"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    actions: [{
      type: Input
    }],
    actionsLayout: [{
      type: Input
    }],
    overlayClickClose: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    subtitle: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    cssClass: [{
      type: Input
    }],
    cssStyle: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    expanded: [{
      type: Input
    }],
    titleId: [{
      type: Input
    }],
    initialFocus: [{
      type: Input
    }],
    expandedChange: [{
      type: Output
    }],
    action: [{
      type: Output
    }],
    expand: [{
      type: Output
    }],
    collapse: [{
      type: Output
    }],
    itemClick: [{
      type: Output
    }],
    overlayClick: [{
      type: Output
    }],
    childContainer: [{
      type: ViewChild,
      args: ["childContainer"]
    }],
    actionSheetViews: [{
      type: ContentChildren,
      args: [forwardRef(() => ActionSheetViewComponent)]
    }],
    actionSheetTemplate: [{
      type: ContentChild,
      args: [ActionSheetTemplateDirective]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: [ActionSheetHeaderTemplateDirective]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: [ActionSheetContentTemplateDirective]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: [ActionSheetItemTemplateDirective]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: [ActionSheetFooterTemplateDirective]
    }]
  });
})();
var ActionSheetViewComponent = class _ActionSheetViewComponent {
  actionSheet;
  renderer;
  host;
  zone;
  title;
  subtitle;
  titleId = getId("k-actionsheet-title");
  hostClass = true;
  transitionDuration = "500ms";
  transitionProperty = "transform";
  headerTemplate;
  contentTemplate;
  footerTemplate;
  actionSheetTemplate;
  ngAfterViewInit() {
    this.zone.onStable.pipe(take(1)).subscribe(() => {
      if (this.actionSheet?.actionSheetViews?.length > 1) {
        this.renderer.addClass(this.host.nativeElement, "k-actionsheet-view-animated");
      }
    });
  }
  constructor(actionSheet, renderer, host, zone) {
    this.actionSheet = actionSheet;
    this.renderer = renderer;
    this.host = host;
    this.zone = zone;
  }
  get orientationClass() {
    return this.actionSheet?.orientationClass;
  }
  get alignmentClass() {
    return this.actionSheet?.alignmentClass;
  }
  static \u0275fac = function ActionSheetViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetViewComponent)(\u0275\u0275directiveInject(ActionSheetComponent, 9), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ActionSheetViewComponent,
    selectors: [["kendo-actionsheet-view"]],
    contentQueries: function ActionSheetViewComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, ActionSheetHeaderTemplateDirective, 5)(dirIndex, ActionSheetContentTemplateDirective, 5)(dirIndex, ActionSheetFooterTemplateDirective, 5)(dirIndex, ActionSheetTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.actionSheetTemplate = _t.first);
      }
    },
    hostVars: 6,
    hostBindings: function ActionSheetViewComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("transition-duration", ctx.transitionDuration)("transition-property", ctx.transitionProperty);
        \u0275\u0275classProp("k-actionsheet-view", ctx.hostClass);
      }
    },
    inputs: {
      title: "title",
      subtitle: "subtitle",
      titleId: "titleId"
    },
    decls: 2,
    vars: 1,
    consts: [[3, "ngTemplateOutlet"], [1, "k-actionsheet-titlebar"], [1, "k-actionsheet-content"], [3, "ngClass"], [1, "k-actionsheet-titlebar-group"], [1, "k-actionsheet-title", 3, "id"], [1, "k-text-center"], [1, "k-actionsheet-subtitle", "k-text-center"]],
    template: function ActionSheetViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ActionSheetViewComponent_Conditional_0_Template, 1, 1, null, 0)(1, ActionSheetViewComponent_Conditional_1_Template, 3, 3);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.actionSheetTemplate ? 0 : 1);
      }
    },
    dependencies: [NgClass, NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetViewComponent, [{
    type: Component,
    args: [{
      selector: "kendo-actionsheet-view",
      template: `
        @if (actionSheetTemplate) {
          <ng-template
            [ngTemplateOutlet]="actionSheetTemplate?.templateRef">
          </ng-template>
        } @else {
          @if (title || subtitle || headerTemplate) {
            <div class="k-actionsheet-titlebar">
              @if (headerTemplate) {
                <ng-template [ngTemplateOutlet]="headerTemplate.templateRef">
                </ng-template>
              } @else {
                <div class="k-actionsheet-titlebar-group">
                  <div class="k-actionsheet-title" [id]="titleId">
                    @if (title) {
                      <div class="k-text-center">{{title}}</div>
                    }
                    @if (subtitle) {
                      <div class="k-actionsheet-subtitle k-text-center">{{subtitle}}</div>
                    }
                  </div>
                </div>
              }
            </div>
          }
          @if (contentTemplate) {
            <div class="k-actionsheet-content">
              <ng-template [ngTemplateOutlet]="contentTemplate.templateRef">
              </ng-template>
            </div>
          }
          @if (footerTemplate) {
            <div [ngClass]="[orientationClass, alignmentClass, 'k-actions', 'k-actionsheet-footer']">
              <ng-template [ngTemplateOutlet]="footerTemplate.templateRef">
              </ng-template>
            </div>
          }
        }
        
        `,
      standalone: true,
      imports: [NgClass, NgTemplateOutlet]
    }]
  }], () => [{
    type: ActionSheetComponent,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    title: [{
      type: Input
    }],
    subtitle: [{
      type: Input
    }],
    titleId: [{
      type: Input
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-actionsheet-view"]
    }],
    transitionDuration: [{
      type: HostBinding,
      args: ["style.transition-duration"]
    }],
    transitionProperty: [{
      type: HostBinding,
      args: ["style.transition-property"]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: [ActionSheetHeaderTemplateDirective]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: [ActionSheetContentTemplateDirective]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: [ActionSheetFooterTemplateDirective]
    }],
    actionSheetTemplate: [{
      type: ContentChild,
      args: [ActionSheetTemplateDirective]
    }]
  });
})();
var PreventableEvent3 = class {
  prevented = false;
  /**
   * Prevents the default action for a specified event.
   * In this way, the source component suppresses
   * the built-in behavior that follows the event.
   */
  preventDefault() {
    this.prevented = true;
  }
  /**
   * Returns `true` if the event was prevented
   * by any of its subscribers.
   *
   * @returns `true` if the default action was prevented.
   * Otherwise, returns `false`.
   */
  isDefaultPrevented() {
    return this.prevented;
  }
  /**
   * @hidden
   */
  constructor(args) {
    Object.assign(this, args);
  }
};
var BottomNavigationSelectEvent = class extends PreventableEvent3 {
  /**
   * Represents the index of the selected item in the `items` collection.
   */
  index;
  /**
   * Represents the selected BottomNavigation item.
   */
  item;
  /**
   * Provides the DOM event that triggered the selection.
   */
  originalEvent;
  /**
   * Provides a reference to the BottomNavigation instance that triggered the event.
   */
  sender;
  /**
   * @hidden
   */
  constructor(args) {
    super();
    Object.assign(this, args);
  }
};
var BottomNavigationItemTemplateDirective = class _BottomNavigationItemTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static \u0275fac = function BottomNavigationItemTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BottomNavigationItemTemplateDirective)(\u0275\u0275directiveInject(TemplateRef, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BottomNavigationItemTemplateDirective,
    selectors: [["", "kendoBottomNavigationItemTemplate", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BottomNavigationItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoBottomNavigationItemTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var closestInScope2 = (target, targetAttr, predicate, scope) => {
  while (target && target !== scope && !predicate(target, targetAttr)) {
    target = target.parentNode;
  }
  if (target !== scope) {
    return target;
  }
};
var hasItemIndex = (item, indexAttr) => isPresent4(item.getAttribute(indexAttr));
var itemIndex = (item, indexAttr) => +item.getAttribute(indexAttr);
var closestItem = (target, targetAttr, scope) => closestInScope2(target, targetAttr, hasItemIndex, scope);
var BOTTOMNAVIGATION_ITEM_INDEX = "data-kendo-bottomnavigation-index";
var colors = ["base", "primary", "secondary", "tertiary", "inverse"];
var fills = ["solid", "flat"];
var BottomNavigationItemComponent = class _BottomNavigationItemComponent {
  itemTemplate;
  item;
  index;
  disabledComponent;
  selectedIdx;
  orientation;
  get disabledClass() {
    return this.item.disabled;
  }
  get label() {
    return !this.item.text && this.itemIcon ? this.item.icon || null : null;
  }
  get tabindex() {
    return this.item.tabIndex ? this.item.tabIndex : 0;
  }
  get selectedClass() {
    return this.selectedIdx ? this.selectedIdx === this.index : this.item.selected;
  }
  get itemIcon() {
    return Boolean(this.item.icon || this.item.iconClass || this.item.svgIcon);
  }
  get iconClasses() {
    const kendoIcon = this.item.icon ? `k-icon k-i-${this.item.icon}` : "";
    const customIcon = this.item.iconClass ? this.item.iconClass : "";
    return `${kendoIcon} ${customIcon}`;
  }
  static \u0275fac = function BottomNavigationItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BottomNavigationItemComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _BottomNavigationItemComponent,
    selectors: [["", "kendoBottomNavigationItem", ""]],
    hostVars: 8,
    hostBindings: function BottomNavigationItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-disabled", ctx.disabledClass)("aria-label", ctx.label)("tabindex", ctx.tabindex)("aria-current", ctx.selectedClass);
        \u0275\u0275classProp("k-disabled", ctx.disabledClass)("k-selected", ctx.selectedClass);
      }
    },
    inputs: {
      itemTemplate: "itemTemplate",
      item: "item",
      index: "index",
      disabledComponent: "disabledComponent",
      selectedIdx: "selectedIdx",
      orientation: "orientation"
    },
    decls: 2,
    vars: 2,
    consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["innerCssClass", "k-bottom-nav-item-icon", "size", "xlarge", 3, "name", "customFontClass", "svgIcon"], [1, "k-bottom-nav-item-text"]],
    template: function BottomNavigationItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, BottomNavigationItemComponent_Conditional_0_Template, 2, 2);
        \u0275\u0275conditionalCreate(1, BottomNavigationItemComponent_Conditional_1_Template, 1, 4, null, 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.itemTemplate ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.itemTemplate ? 1 : -1);
      }
    },
    dependencies: [IconWrapperComponent, NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BottomNavigationItemComponent, [{
    type: Component,
    args: [{
      selector: "[kendoBottomNavigationItem]",
      template: `
        @if (!itemTemplate) {
          @if (itemIcon) {
            <kendo-icon-wrapper
              innerCssClass="k-bottom-nav-item-icon"
              size="xlarge"
              [name]="item.icon"
              [customFontClass]="item.iconClass"
            [svgIcon]="item.svgIcon"></kendo-icon-wrapper>
          }
          @if (item.text) {
            <span class="k-bottom-nav-item-text">{{item.text}}</span>
          }
        }
        @if (itemTemplate) {
          <ng-template
            [ngTemplateOutlet]="itemTemplate?.templateRef"
            [ngTemplateOutletContext]="{ $implicit: item }">
          </ng-template>
        }
        `,
      standalone: true,
      imports: [IconWrapperComponent, NgTemplateOutlet]
    }]
  }], null, {
    itemTemplate: [{
      type: Input
    }],
    item: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    disabledComponent: [{
      type: Input
    }],
    selectedIdx: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }, {
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    label: [{
      type: HostBinding,
      args: ["attr.aria-label"]
    }],
    tabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    selectedClass: [{
      type: HostBinding,
      args: ["attr.aria-current"]
    }, {
      type: HostBinding,
      args: ["class.k-selected"]
    }]
  });
})();
var BottomNavigationComponent = class _BottomNavigationComponent {
  localization;
  hostElement;
  ngZone;
  changeDetector;
  renderer;
  /**
   * Provides the collection of items rendered in the BottomNavigation ([see example](https://www.telerik.com/kendo-angular-ui/components/navigation/bottomnavigation/items)).
   */
  items;
  /**
   * Shows a top border on the BottomNavigation ([see example](https://www.telerik.com/kendo-angular-ui/components/navigation/bottomnavigation/appearance)).
   *
   * @default false
   */
  border = false;
  /**
   * Disables the entire BottomNavigation.
   *
   * @default false
   */
  disabled = false;
  /**
   * Sets the fill style of the BottomNavigation ([see example](https://www.telerik.com/kendo-angular-ui/components/navigation/bottomnavigation/appearance)). The default value is set by the Kendo theme.
   */
  set fill(fill) {
    const newFill = fills.find((color) => color === fill);
    this.renderer.removeClass(this._nativeHostElement, `k-bottom-nav-${this.fill}`);
    this.renderer.removeClass(this._nativeHostElement, `k-bottom-nav-${this.themeColor}`);
    if (newFill) {
      this._fill = fill;
      this.renderer.addClass(this._nativeHostElement, `k-bottom-nav-${this._fill}`);
      this.themeColor && this.renderer.addClass(this._nativeHostElement, `k-bottom-nav-${this.themeColor}`);
    }
  }
  get fill() {
    return this._fill;
  }
  /**
   * Controls how the icon and text label are positioned in the BottomNavigation items.
   *
   * @default 'vertical'
   */
  set itemFlow(itemFlow) {
    this.renderer.removeClass(this._nativeHostElement, `k-bottom-nav-item-flow-${this.itemFlow}`);
    this._itemFlow = itemFlow === "horizontal" ? "horizontal" : "vertical";
    this.renderer.addClass(this._nativeHostElement, `k-bottom-nav-item-flow-${this._itemFlow}`);
  }
  get itemFlow() {
    return this._itemFlow;
  }
  /**
   * Sets the position and behavior of the BottomNavigation when the page is scrollable ([see example](https://www.telerik.com/kendo-angular-ui/components/navigation/bottomnavigation/position-mode)).
   *
   * @default 'fixed'
   */
  set positionMode(positionMode) {
    this.renderer.removeClass(this._nativeHostElement, `k-pos-${this.positionMode}`);
    this._positionMode = positionMode === "sticky" ? "sticky" : "fixed";
    this.renderer.addClass(this._nativeHostElement, `k-pos-${this._positionMode}`);
  }
  get positionMode() {
    return this._positionMode;
  }
  /**
   * Sets the theme color of the BottomNavigation ([see example](https://www.telerik.com/kendo-angular-ui/components/navigation/bottomnavigation/appearance)).
   */
  set themeColor(themeColor) {
    const newColor = colors.find((color) => color === themeColor);
    if (newColor) {
      this.renderer.removeClass(this._nativeHostElement, `k-bottom-nav-${this._themeColor}`);
      this._themeColor = themeColor;
      this.renderer.addClass(this._nativeHostElement, `k-bottom-nav-${this._themeColor}`);
    }
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * Fires when a user selects an item. This event is preventable.
   */
  select = new EventEmitter();
  /**
   * @hidden
   */
  hostClass = true;
  /**
   * @hidden
   */
  get borderClass() {
    return this.border;
  }
  /**
   * @hidden
   */
  get disabledClass() {
    return this.disabled;
  }
  /**
   * @hidden
   */
  role = "navigation";
  /**
   * @hidden
   */
  direction;
  /**
   * @hidden
   */
  itemTemplate;
  /**
   * @hidden
   */
  selectedIdx;
  _fill;
  _itemFlow = "vertical";
  _positionMode = "fixed";
  _themeColor;
  _nativeHostElement;
  dynamicRTLSubscription;
  subscriptions = new Subscription();
  rtl = false;
  constructor(localization, hostElement, ngZone, changeDetector, renderer) {
    this.localization = localization;
    this.hostElement = hostElement;
    this.ngZone = ngZone;
    this.changeDetector = changeDetector;
    this.renderer = renderer;
    A(packageMetadata5);
    this._nativeHostElement = this.hostElement.nativeElement;
    this.dynamicRTLSubscription = this.localization.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    });
  }
  /**
   * @hidden
   */
  ngOnInit() {
    this.initDomEvents();
  }
  /**
   * @hidden
   */
  ngAfterViewInit() {
    this.applyClasses();
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
    this.subscriptions.unsubscribe();
  }
  /**
   * @hidden
   */
  selectItem(idx2, args) {
    const eventArgs = new BottomNavigationSelectEvent(__spreadValues({}, args));
    this.select.emit(eventArgs);
    if (!eventArgs.isDefaultPrevented()) {
      this.selectedIdx = idx2;
    }
  }
  applyClasses() {
    this.fill && this.renderer.addClass(this._nativeHostElement, `k-bottom-nav-${this.fill}`);
    this.renderer.addClass(this._nativeHostElement, `k-bottom-nav-item-flow-${this.itemFlow}`);
    this.renderer.addClass(this._nativeHostElement, `k-pos-${this.positionMode}`);
    this.themeColor && this.renderer.addClass(this._nativeHostElement, `k-bottom-nav-${this.themeColor}`);
  }
  initDomEvents() {
    if (!this.hostElement) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      this.subscriptions.add(this.renderer.listen(this._nativeHostElement, "click", this.clickHandler.bind(this)));
      this.subscriptions.add(this.renderer.listen(this._nativeHostElement, "keydown", this.keyDownHandler.bind(this)));
    });
  }
  clickHandler(e) {
    const itemIdx = this.getBottomNavigationItemIndex(e.target);
    const item = this.items[itemIdx];
    if (!item) {
      return;
    }
    if (item.disabled) {
      e.preventDefault();
      return;
    }
    const args = {
      index: itemIdx,
      item,
      originalEvent: e,
      sender: this
    };
    this.ngZone.run(() => {
      this.selectItem(itemIdx, args);
      this.changeDetector.markForCheck();
    });
  }
  keyDownHandler(e) {
    const isEnterOrSpace = e.code === Keys.Enter || e.code === Keys.NumpadEnter || e.code === Keys.Space;
    if (!isEnterOrSpace) {
      return;
    }
    this.clickHandler(e);
  }
  getBottomNavigationItemIndex(target) {
    const item = closestItem(target, BOTTOMNAVIGATION_ITEM_INDEX, this._nativeHostElement);
    if (item) {
      return itemIndex(item, BOTTOMNAVIGATION_ITEM_INDEX);
    }
  }
  static \u0275fac = function BottomNavigationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BottomNavigationComponent)(\u0275\u0275directiveInject(LocalizationService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _BottomNavigationComponent,
    selectors: [["kendo-bottomnavigation"]],
    contentQueries: function BottomNavigationComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, BottomNavigationItemTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t.first);
      }
    },
    hostVars: 8,
    hostBindings: function BottomNavigationComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role)("dir", ctx.direction);
        \u0275\u0275classProp("k-bottom-nav", ctx.hostClass)("k-bottom-nav-border", ctx.borderClass)("k-disabled", ctx.disabledClass);
      }
    },
    inputs: {
      items: "items",
      border: "border",
      disabled: "disabled",
      fill: "fill",
      itemFlow: "itemFlow",
      positionMode: "positionMode",
      themeColor: "themeColor"
    },
    outputs: {
      select: "select"
    },
    exportAs: ["kendoBottomNavigation"],
    features: [\u0275\u0275ProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.bottomnavigation"
    }])],
    decls: 1,
    vars: 1,
    consts: [["kendoBottomNavigationItem", "", "role", "link", 1, "k-bottom-nav-item", 3, "disabledComponent", "item", "index", "selectedIdx", "itemTemplate", "ngClass", "ngStyle", "orientation"]],
    template: function BottomNavigationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, BottomNavigationComponent_Conditional_0_Template, 2, 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.items ? 0 : -1);
      }
    },
    dependencies: [BottomNavigationItemComponent, NgClass, NgStyle],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BottomNavigationComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoBottomNavigation",
      selector: "kendo-bottomnavigation",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.bottomnavigation"
      }],
      template: `
        @if (items) {
          @for (item of items; track item; let idx = $index) {
            <span kendoBottomNavigationItem
              role="link"
              class="k-bottom-nav-item"
              [disabledComponent]="disabled"
              [item]="item"
              [index]="idx"
              [selectedIdx]="selectedIdx"
              [itemTemplate]="itemTemplate"
              [attr.${BOTTOMNAVIGATION_ITEM_INDEX}]="idx"
              [ngClass]="item.cssClass"
              [ngStyle]="item.cssStyle"
              [orientation]="itemFlow">
            </span>
          }
        }
        `,
      standalone: true,
      imports: [BottomNavigationItemComponent, NgClass, NgStyle]
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }], {
    items: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    fill: [{
      type: Input
    }],
    itemFlow: [{
      type: Input
    }],
    positionMode: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-bottom-nav"]
    }],
    borderClass: [{
      type: HostBinding,
      args: ["class.k-bottom-nav-border"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: [BottomNavigationItemTemplateDirective, {
        static: false
      }]
    }]
  });
})();
var BreadCrumbItemTemplateDirective = class _BreadCrumbItemTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static \u0275fac = function BreadCrumbItemTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadCrumbItemTemplateDirective)(\u0275\u0275directiveInject(TemplateRef, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BreadCrumbItemTemplateDirective,
    selectors: [["", "kendoBreadCrumbItemTemplate", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadCrumbItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoBreadCrumbItemTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var BREADCRUMB_ITEM_INDEX = "data-kendo-breadcrumb-index";
var SIZES2 = {
  small: "sm",
  medium: "md",
  large: "lg"
};
var getStylingClasses2 = (stylingOption, previousValue, newValue) => {
  switch (stylingOption) {
    case "size": {
      return {
        toRemove: previousValue ? `k-breadcrumb-${SIZES2[previousValue]}` : null,
        toAdd: newValue ? `k-breadcrumb-${SIZES2[newValue]}` : null
      };
    }
    default:
      break;
  }
};
var BreadCrumbItemComponent = class _BreadCrumbItemComponent {
  el;
  item;
  collapseMode;
  index = -1;
  itemTemplate;
  hostClasses = true;
  get isRootItem() {
    return this.item.context.isFirst;
  }
  get isLastItem() {
    return this.item.context.isLast;
  }
  width;
  disabled = false;
  constructor(el) {
    this.el = el;
  }
  ngOnInit() {
    this.disabled = this.item.data && (this.item.data.disabled || this.item.context.isLast);
  }
  ngAfterViewInit() {
    if (isDocumentAvailable()) {
      this.width = outerWidth(this.el.nativeElement);
    }
  }
  onImageLoad() {
    if (isDocumentAvailable()) {
      this.width = outerWidth(this.el.nativeElement);
    }
  }
  static \u0275fac = function BreadCrumbItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadCrumbItemComponent)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _BreadCrumbItemComponent,
    selectors: [["", "kendoBreadCrumbItem", ""]],
    hostVars: 6,
    hostBindings: function BreadCrumbItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("k-breadcrumb-item", ctx.hostClasses)("k-breadcrumb-root-item", ctx.isRootItem)("k-breadcrumb-last-item", ctx.isLastItem);
      }
    },
    inputs: {
      item: "item",
      collapseMode: "collapseMode",
      index: "index",
      itemTemplate: "itemTemplate"
    },
    ngContentSelectors: _c73,
    decls: 5,
    vars: 3,
    consts: [["separator", ""], [4, "ngTemplateOutlet"], ["role", "link", 3, "ngClass", "title", "tabindex"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "presentation", 1, "k-image", 3, "src"], [3, "name", "customFontClass", "svgIcon"], [1, "k-breadcrumb-item-text"], ["role", "presentation", 1, "k-image", 3, "load", "src"]],
    template: function BreadCrumbItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c63);
        \u0275\u0275template(0, BreadCrumbItemComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275conditionalCreate(2, BreadCrumbItemComponent_Conditional_2_Template, 1, 1, "ng-container");
        \u0275\u0275conditionalCreate(3, BreadCrumbItemComponent_Conditional_3_Template, 2, 2);
        \u0275\u0275conditionalCreate(4, BreadCrumbItemComponent_Conditional_4_Template, 1, 1, "ng-container");
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.collapseMode === "wrap" ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.item.context.collapsed ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.collapseMode !== "wrap" ? 4 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, NgClass, IconWrapperComponent],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadCrumbItemComponent, [{
    type: Component,
    args: [{
      selector: "[kendoBreadCrumbItem]",
      template: `
        <ng-template #separator>
          <ng-content select="[kendoBreadCrumbSeparator]"></ng-content>
        </ng-template>
        
        @if (collapseMode === 'wrap') {
          <ng-container *ngTemplateOutlet="separator"></ng-container>
        }
        
        @if (!item.context.collapsed) {
          @if (!itemTemplate) {
            <span
                [ngClass]="{
                    'k-breadcrumb-root-link': item.context.isFirst,
                    'k-breadcrumb-link': index !== 0,
                    'k-breadcrumb-icontext-link': (!!item.data.icon || !!item.data.svgIcon) && !!item.data.text,
                    'k-breadcrumb-icon-link': (!!item.data.icon || !!item.data.svgIcon) && !item.data.text,
                    'k-disabled': disabled
                }"
              [title]="item.data.title || ''"
              [tabindex]="disabled ? -1 : 0"
              [attr.aria-disabled]="disabled || null"
              [attr.aria-current]="item.context.isLast ? 'page' : null"
              role="link"
              >
              @if (item.data.imageUrl) {
                <img (load)="onImageLoad()" [src]="item.data.imageUrl" class="k-image" role="presentation" />
              }
              @if (item.data.icon || item.data.iconClass || item.data.svgIcon) {
                <kendo-icon-wrapper
                  [name]="item.data.icon"
                  [customFontClass]="item.data.iconClass"
                  [svgIcon]="item.data.svgIcon"
                  >
                </kendo-icon-wrapper>
              }
              <span class="k-breadcrumb-item-text">{{ item.data.text }}</span>
            </span>
          }
          @if (itemTemplate) {
            <ng-template
              [ngTemplateOutlet]="itemTemplate"
                [ngTemplateOutletContext]="{
                    $implicit: item.data,
                    index: index
                }"
            ></ng-template>
          }
        }
        
        @if (collapseMode !== 'wrap') {
          <ng-container *ngTemplateOutlet="separator"></ng-container>
        }
        `,
      standalone: true,
      imports: [NgTemplateOutlet, NgClass, IconWrapperComponent]
    }]
  }], () => [{
    type: ElementRef
  }], {
    item: [{
      type: Input
    }],
    collapseMode: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-breadcrumb-item"]
    }],
    isRootItem: [{
      type: HostBinding,
      args: ["class.k-breadcrumb-root-item"]
    }],
    isLastItem: [{
      type: HostBinding,
      args: ["class.k-breadcrumb-last-item"]
    }]
  });
})();
var DEFAULT_ICON2 = "chevron-right";
var DEFAULT_RTL_ICON = "chevron-left";
var DEFAULT_SVG_ICON2 = chevronRightIcon;
var DEFAULT_RTL_SVG_ICON = chevronLeftIcon;
var BreadCrumbSeparatorDirective = class _BreadCrumbSeparatorDirective {
  el;
  localization;
  set icon(icon) {
    if (isPresent4(icon)) {
      this._icon = icon;
      this.hasDefaultIcon = false;
    } else {
      this._icon = this.direction === "ltr" ? DEFAULT_ICON2 : DEFAULT_RTL_ICON;
      this.hasDefaultIcon = true;
    }
  }
  get icon() {
    return this._icon;
  }
  set svgIcon(svgIcon) {
    if (isPresent4(svgIcon)) {
      this._svgIcon = svgIcon;
      this.hasDefaultSvgIcon = false;
    } else {
      this._svgIcon = this.direction === "ltr" ? DEFAULT_SVG_ICON2 : DEFAULT_RTL_SVG_ICON;
      this.hasDefaultSvgIcon = true;
    }
  }
  get svgIcon() {
    return this._svgIcon;
  }
  ariaHidden = true;
  _icon;
  _svgIcon;
  hasDefaultIcon;
  hasDefaultSvgIcon;
  direction = "ltr";
  localizationChangesSubscription;
  constructor(el, localization) {
    this.el = el;
    this.localization = localization;
    this.direction = this.localization.rtl ? "rtl" : "ltr";
  }
  ngOnInit() {
    this.localizationChangesSubscription = this.localization.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
      if (this.hasDefaultIcon) {
        this.icon = void 0;
      }
      if (this.hasDefaultSvgIcon) {
        this.svgIcon = void 0;
      }
    });
  }
  ngOnDestroy() {
    this.localizationChangesSubscription.unsubscribe();
  }
  static \u0275fac = function BreadCrumbSeparatorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadCrumbSeparatorDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(LocalizationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _BreadCrumbSeparatorDirective,
    selectors: [["", "kendoBreadCrumbSeparator", ""]],
    hostVars: 1,
    hostBindings: function BreadCrumbSeparatorDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-hidden", ctx.ariaHidden);
      }
    },
    inputs: {
      icon: "icon",
      svgIcon: "svgIcon"
    },
    decls: 1,
    vars: 2,
    consts: [["size", "xsmall", "innerCssClass", "k-breadcrumb-delimiter-icon", 3, "name", "svgIcon"]],
    template: function BreadCrumbSeparatorDirective_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "kendo-icon-wrapper", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("name", ctx.icon)("svgIcon", ctx.svgIcon);
      }
    },
    dependencies: [IconWrapperComponent],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadCrumbSeparatorDirective, [{
    type: Component,
    args: [{
      selector: "[kendoBreadCrumbSeparator]",
      template: `
        <kendo-icon-wrapper
            size='xsmall'
            [name]="icon"
            [svgIcon]="svgIcon"
            innerCssClass="k-breadcrumb-delimiter-icon"
        >
        </kendo-icon-wrapper>
    `,
      standalone: true,
      imports: [IconWrapperComponent]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: LocalizationService
  }], {
    icon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    ariaHidden: [{
      type: HostBinding,
      args: ["attr.aria-hidden"]
    }]
  });
})();
var BreadCrumbListComponent = class _BreadCrumbListComponent {
  el;
  zone;
  items = [];
  itemTemplate;
  collapseMode = "auto";
  separatorIcon;
  separatorSVGIcon;
  itemClick = new EventEmitter();
  renderedItems;
  isRootItemContainer;
  domEventsSubscription;
  constructor(el, zone) {
    this.el = el;
    this.zone = zone;
    const element = this.el.nativeElement;
    this.isRootItemContainer = element.classList.contains("k-breadcrumb-root-item-container");
    this.zone.runOutsideAngular(() => {
      const click$ = fromEvent(element, "click");
      const enterKey$ = fromEvent(element, "keydown").pipe(filter((ev) => ev.code === Keys.Enter || ev.code === Keys.NumpadEnter));
      this.domEventsSubscription = merge(click$, enterKey$).pipe(
        map((ev) => ev.target),
        filter((e) => !e.classList.contains("k-breadcrumb-delimiter-icon")),
        // do not trigger handler when a separator is clicked
        map((e) => this.getItemIndex(e)),
        filter(isPresent4),
        map((i) => parseInt(i, 10)),
        map((i) => this.items[i]),
        filter((item) => !item.data.disabled && !item.context.isLast),
        map((item) => item.data)
      ).subscribe((el2) => {
        this.zone.run(() => this.itemClick.emit(el2));
      });
    });
  }
  ngOnDestroy() {
    this.domEventsSubscription.unsubscribe();
  }
  getItemIndex(target) {
    const item = closestItem(target, BREADCRUMB_ITEM_INDEX, this.el.nativeElement);
    if (item) {
      return itemIndex(item, BREADCRUMB_ITEM_INDEX);
    }
  }
  static \u0275fac = function BreadCrumbListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadCrumbListComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _BreadCrumbListComponent,
    selectors: [["", "kendoBreadCrumbList", ""]],
    viewQuery: function BreadCrumbListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(BreadCrumbItemComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.renderedItems = _t);
      }
    },
    inputs: {
      items: "items",
      itemTemplate: "itemTemplate",
      collapseMode: "collapseMode",
      separatorIcon: "separatorIcon",
      separatorSVGIcon: "separatorSVGIcon"
    },
    outputs: {
      itemClick: "itemClick"
    },
    decls: 2,
    vars: 0,
    consts: [["renderedItem", ""], ["kendoBreadCrumbItem", "", 3, "item", "index", "collapseMode", "itemTemplate"], ["kendoBreadCrumbSeparator", "", 3, "icon", "svgIcon"]],
    template: function BreadCrumbListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, BreadCrumbListComponent_For_1_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.items);
      }
    },
    dependencies: [BreadCrumbItemComponent, BreadCrumbSeparatorDirective],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadCrumbListComponent, [{
    type: Component,
    args: [{
      selector: "[kendoBreadCrumbList]",
      template: `
        @for (item of items; track item; let i = $index; let isFirst = $first; let isLast = $last) {
          @if (!(collapseMode === 'wrap' && isFirst) || isRootItemContainer) {
            <li
              #renderedItem
              kendoBreadCrumbItem
              [attr.${BREADCRUMB_ITEM_INDEX}]="i"
              [item]="item"
              [index]="i"
              [collapseMode]="collapseMode"
              [itemTemplate]="itemTemplate"
              >
              @if (collapseMode === 'wrap' && !isFirst) {
                <span kendoBreadCrumbSeparator [icon]="separatorIcon" [svgIcon]="separatorSVGIcon"></span>
              }
              @if (collapseMode !== 'wrap' && !isLast && !(item?.context.collapsed && items[i + 1]?.context.collapsed)) {
                <span
                  kendoBreadCrumbSeparator
                  [icon]="separatorIcon"
                  [svgIcon]="separatorSVGIcon"
                ></span>
              }
            </li>
          }
        }
        `,
      standalone: true,
      imports: [BreadCrumbItemComponent, BreadCrumbSeparatorDirective]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }], {
    items: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    collapseMode: [{
      type: Input
    }],
    separatorIcon: [{
      type: Input
    }],
    separatorSVGIcon: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    renderedItems: [{
      type: ViewChildren,
      args: [BreadCrumbItemComponent]
    }]
  });
})();
var getCollapsed = (itemComponent) => itemComponent.item.context.collapsed;
var collapsed = (itemComponent) => getCollapsed(itemComponent) === true;
var expanded = (itemComponent) => getCollapsed(itemComponent) === false;
var toggleFirst = (collapsed2) => (itemComponents) => itemComponents.find((ic) => getCollapsed(ic) === collapsed2).item.context.collapsed = !collapsed2;
var collapseFirst = toggleFirst(false);
var expandFirst = toggleFirst(true);
var BreadCrumbComponent = class _BreadCrumbComponent {
  localization;
  el;
  cdr;
  zone;
  renderer;
  /**
   * Configures the collection of items that will be rendered in the Breadcrumb.
   */
  set items(items) {
    this._items = items || [];
    this.updateItems.next(this._items);
  }
  get items() {
    return this._items;
  }
  /**
   * Specifies the name of a [built-in font icon](https://www.telerik.com/kendo-angular-ui/components/icons/icon/icon-list) in a Kendo UI theme to be rendered as a separator.
   */
  separatorIcon;
  /**
   * Defines an [`SVGIcon`](https://www.telerik.com/kendo-angular-ui/components/icons/api/svgicon) to be rendered as a separator.
   */
  separatorSVGIcon;
  /**
   * Controls the collapse mode of the Breadcrumb.
   * For more information and example, refer to the [Collapse Modes](https://www.telerik.com/kendo-angular-ui/components/navigation/breadcrumb/collapse-modes) article.
   *
   * @default `auto`
   */
  set collapseMode(mode) {
    if (isDevMode() && ["auto", "wrap", "none"].indexOf(mode) < 0) {
      throw new Error('Invalid collapse mode. Allowed values are "auto", "wrap" or "none". \nFor more details see https://www.telerik.com/kendo-angular-ui/components/navigation/api/BreadCrumbCollapseMode/');
    }
    this._collapseMode = mode || "auto";
    this.updateItems.next(this.items);
  }
  get collapseMode() {
    return this._collapseMode;
  }
  /**
   * Determines the padding of all Breadcrumb elements. The default value is set by the Kendo theme.
   */
  set size(size) {
    this.handleClasses(size, "size");
    this._size = size;
  }
  get size() {
    return this._size;
  }
  /**
   * Fires when you click a Breadcrumb item. The event will not be fired by disabled items and the last item.
   */
  itemClick = new EventEmitter();
  /**
   * @hidden
   */
  resizeSensor;
  /**
   * @hidden
   */
  itemsContainers;
  /**
   * @hidden
   */
  listComponent;
  /**
   * @hidden
   */
  itemTemplate;
  hostClasses = true;
  get wrapMode() {
    return this.collapseMode === "wrap";
  }
  hostAriaLabel = "Breadcrumb";
  get getDir() {
    return this.direction;
  }
  itemsData$;
  firstItem$;
  _items = [];
  _collapseMode = "auto";
  _size;
  updateItems = new ReplaySubject();
  afterViewInit = new Subject();
  subscriptions = new Subscription();
  direction = "ltr";
  constructor(localization, el, cdr, zone, renderer) {
    this.localization = localization;
    this.el = el;
    this.cdr = cdr;
    this.zone = zone;
    this.renderer = renderer;
    A(packageMetadata5);
    const updateItems$ = this.updateItems.asObservable().pipe(startWith([]));
    this.direction = localization.rtl ? "rtl" : "ltr";
    this.itemsData$ = updateItems$.pipe(map((items) => items.filter(Boolean)), map((items) => items.map((item, index, collection) => ({
      context: {
        collapsed: false,
        isLast: index === collection.length - 1,
        isFirst: index === 0
      },
      data: item
    }))), share());
    this.firstItem$ = updateItems$.pipe(map((items) => {
      if (items.length > 0) {
        return [{
          context: {
            collapsed: false,
            isLast: items.length === 1,
            isFirst: true
          },
          data: items[0]
        }];
      }
      return [];
    }), share());
  }
  ngOnInit() {
    this.subscriptions.add(this.localization.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
    this.handleClasses(this.size, "size");
  }
  ngAfterViewInit() {
    this.attachResizeHandler();
    this.afterViewInit.next(void 0);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  handleResize() {
    const autoCollapseCandidates = [...this.listComponent.renderedItems.toArray().filter((ri) => !ri.item.context.isFirst && !ri.item.context.isLast)];
    const componentWidth = Math.floor(outerWidth(this.el.nativeElement));
    const itemsContainerWidth = Math.round(this.itemsContainers.toArray().map((el) => outerWidth(el.nativeElement)).reduce((acc, curr) => acc + curr, 0));
    const nextExpandWidth = Math.ceil(([...autoCollapseCandidates].reverse().find(collapsed) || {
      width: 0
    }).width);
    if (componentWidth <= itemsContainerWidth && autoCollapseCandidates.find(expanded)) {
      collapseFirst(autoCollapseCandidates);
      this.cdr.detectChanges();
      return this.handleResize();
    }
    if (componentWidth > itemsContainerWidth + nextExpandWidth && autoCollapseCandidates.find(collapsed)) {
      expandFirst([...autoCollapseCandidates].reverse());
      this.cdr.detectChanges();
      return this.handleResize();
    }
  }
  shouldResize() {
    return isDocumentAvailable() && this.collapseMode === "auto";
  }
  attachResizeHandler() {
    this.subscriptions.add(merge(this.resizeSensor.resize, this.itemsData$, this.afterViewInit.asObservable()).pipe(filter(() => this.shouldResize())).subscribe(() => {
      this.resizeHandler();
    }));
  }
  handleClasses(value, input) {
    const elem = this.el.nativeElement;
    const classes = getStylingClasses2(input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  resizeHandler = () => {
    this.zone.runOutsideAngular(() => setTimeout(() => {
      this.zone.run(() => {
        if (this.listComponent) {
          this.handleResize();
          this.resizeSensor.acceptSize();
        }
      });
    }));
  };
  static \u0275fac = function BreadCrumbComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadCrumbComponent)(\u0275\u0275directiveInject(LocalizationService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _BreadCrumbComponent,
    selectors: [["kendo-breadcrumb"]],
    contentQueries: function BreadCrumbComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, BreadCrumbItemTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t.first);
      }
    },
    viewQuery: function BreadCrumbComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c102, 7)(BreadCrumbListComponent, 7)(_c112, 5, ElementRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.resizeSensor = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listComponent = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemsContainers = _t);
      }
    },
    hostVars: 6,
    hostBindings: function BreadCrumbComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", ctx.hostAriaLabel)("dir", ctx.getDir);
        \u0275\u0275classProp("k-breadcrumb", ctx.hostClasses)("k-breadcrumb-wrap", ctx.wrapMode);
      }
    },
    inputs: {
      items: "items",
      separatorIcon: "separatorIcon",
      separatorSVGIcon: "separatorSVGIcon",
      collapseMode: "collapseMode",
      size: "size"
    },
    outputs: {
      itemClick: "itemClick"
    },
    exportAs: ["kendoBreadCrumb"],
    features: [\u0275\u0275ProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.breadcrumb"
    }])],
    decls: 6,
    vars: 13,
    consts: [["itemsContainer", ""], ["resizeSensor", ""], ["kendoBreadCrumbList", "", 1, "k-breadcrumb-root-item-container", 3, "items", "itemTemplate", "collapseMode", "separatorIcon", "separatorSVGIcon"], ["kendoBreadCrumbList", "", 1, "k-breadcrumb-container", 3, "itemClick", "items", "itemTemplate", "collapseMode", "separatorIcon", "separatorSVGIcon", "ngClass"], [3, "rateLimit"], ["kendoBreadCrumbList", "", 1, "k-breadcrumb-root-item-container", 3, "itemClick", "items", "itemTemplate", "collapseMode", "separatorIcon", "separatorSVGIcon"]],
    template: function BreadCrumbComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, BreadCrumbComponent_Conditional_0_Template, 3, 7, "ol", 2);
        \u0275\u0275elementStart(1, "ol", 3, 0);
        \u0275\u0275pipe(3, "async");
        \u0275\u0275listener("itemClick", function BreadCrumbComponent_Template_ol_itemClick_1_listener($event) {
          return ctx.itemClick.emit($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "kendo-resize-sensor", 4, 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.collapseMode === "wrap" ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("items", \u0275\u0275pipeBind1(3, 8, ctx.itemsData$))("itemTemplate", ctx.itemTemplate == null ? null : ctx.itemTemplate.templateRef)("collapseMode", ctx.collapseMode)("separatorIcon", ctx.separatorIcon)("separatorSVGIcon", ctx.separatorSVGIcon)("ngClass", \u0275\u0275pureFunction2(10, _c123, ctx.collapseMode === "wrap", ctx.collapseMode === "none"));
        \u0275\u0275advance(3);
        \u0275\u0275property("rateLimit", 1e3);
      }
    },
    dependencies: [BreadCrumbListComponent, NgClass, ResizeSensorComponent, AsyncPipe],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadCrumbComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoBreadCrumb",
      selector: "kendo-breadcrumb",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.breadcrumb"
      }],
      template: `
        @if (collapseMode === 'wrap') {
          <ol
            #itemsContainer
            kendoBreadCrumbList
            class="k-breadcrumb-root-item-container"
            [items]="firstItem$ | async"
            [itemTemplate]="itemTemplate?.templateRef"
            [collapseMode]="collapseMode"
            [separatorIcon]="separatorIcon"
            [separatorSVGIcon]="separatorSVGIcon"
            (itemClick)="itemClick.emit($event)"
          ></ol>
        }
        <ol
          #itemsContainer
          kendoBreadCrumbList
          class="k-breadcrumb-container"
          [items]="itemsData$ | async"
          [itemTemplate]="itemTemplate?.templateRef"
          [collapseMode]="collapseMode"
          [separatorIcon]="separatorIcon"
          [separatorSVGIcon]="separatorSVGIcon"
          (itemClick)="itemClick.emit($event)"
          [ngClass]="{ '!k-flex-wrap': collapseMode === 'wrap', 'k-flex-none': collapseMode === 'none' }"
        ></ol>
        <kendo-resize-sensor [rateLimit]="1000" #resizeSensor></kendo-resize-sensor>
        `,
      standalone: true,
      imports: [BreadCrumbListComponent, NgClass, ResizeSensorComponent, AsyncPipe]
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: Renderer2
  }], {
    items: [{
      type: Input
    }],
    separatorIcon: [{
      type: Input
    }],
    separatorSVGIcon: [{
      type: Input
    }],
    collapseMode: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    resizeSensor: [{
      type: ViewChild,
      args: ["resizeSensor", {
        static: true
      }]
    }],
    itemsContainers: [{
      type: ViewChildren,
      args: ["itemsContainer", {
        read: ElementRef
      }]
    }],
    listComponent: [{
      type: ViewChild,
      args: [BreadCrumbListComponent, {
        static: true
      }]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: [BreadCrumbItemTemplateDirective]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-breadcrumb"]
    }],
    wrapMode: [{
      type: HostBinding,
      args: ["class.k-breadcrumb-wrap"]
    }],
    hostAriaLabel: [{
      type: HostBinding,
      args: ["attr.aria-label"]
    }],
    getDir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }]
  });
})();
var KENDO_ACTIONSHEET = [ActionSheetComponent, ActionSheetViewComponent, ActionSheetHeaderTemplateDirective, ActionSheetItemTemplateDirective, ActionSheetContentTemplateDirective, ActionSheetFooterTemplateDirective, ActionSheetTemplateDirective];
var KENDO_APPBAR = [AppBarComponent, AppBarSectionComponent, AppBarSpacerComponent];
var KENDO_BOTTOMNAVIGATION = [BottomNavigationComponent, BottomNavigationItemTemplateDirective];
var KENDO_BREADCRUMB = [BreadCrumbComponent, BreadCrumbItemTemplateDirective];
var KENDO_NAVIGATION = [...KENDO_ACTIONSHEET, ...KENDO_APPBAR, ...KENDO_BOTTOMNAVIGATION, ...KENDO_BREADCRUMB];
var AppBarModule = class _AppBarModule {
  static \u0275fac = function AppBarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppBarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _AppBarModule,
    imports: [AppBarComponent, AppBarSectionComponent, AppBarSpacerComponent],
    exports: [AppBarComponent, AppBarSectionComponent, AppBarSpacerComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppBarModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_APPBAR],
      imports: [...KENDO_APPBAR]
    }]
  }], null, null);
})();
var NavigationModule = class _NavigationModule {
  static \u0275fac = function NavigationModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavigationModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NavigationModule,
    imports: [ActionSheetComponent, ActionSheetViewComponent, ActionSheetHeaderTemplateDirective, ActionSheetItemTemplateDirective, ActionSheetContentTemplateDirective, ActionSheetFooterTemplateDirective, ActionSheetTemplateDirective, AppBarComponent, AppBarSectionComponent, AppBarSpacerComponent, BottomNavigationComponent, BottomNavigationItemTemplateDirective, BreadCrumbComponent, BreadCrumbItemTemplateDirective],
    exports: [ActionSheetComponent, ActionSheetViewComponent, ActionSheetHeaderTemplateDirective, ActionSheetItemTemplateDirective, ActionSheetContentTemplateDirective, ActionSheetFooterTemplateDirective, ActionSheetTemplateDirective, AppBarComponent, AppBarSectionComponent, AppBarSpacerComponent, BottomNavigationComponent, BottomNavigationItemTemplateDirective, BreadCrumbComponent, BreadCrumbItemTemplateDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [IconsService, ResizeBatchService],
    imports: [ActionSheetComponent, BottomNavigationComponent, BreadCrumbComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_NAVIGATION],
      exports: [...KENDO_NAVIGATION],
      providers: [IconsService, ResizeBatchService]
    }]
  }], null, null);
})();
var BreadCrumbModule = class _BreadCrumbModule {
  static \u0275fac = function BreadCrumbModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadCrumbModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BreadCrumbModule,
    imports: [BreadCrumbComponent, BreadCrumbItemTemplateDirective],
    exports: [BreadCrumbComponent, BreadCrumbItemTemplateDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [IconsService, ResizeBatchService],
    imports: [BreadCrumbComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadCrumbModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_BREADCRUMB],
      imports: [...KENDO_BREADCRUMB],
      providers: [IconsService, ResizeBatchService]
    }]
  }], null, null);
})();
var BottomNavigationModule = class _BottomNavigationModule {
  static \u0275fac = function BottomNavigationModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BottomNavigationModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BottomNavigationModule,
    imports: [BottomNavigationComponent, BottomNavigationItemTemplateDirective],
    exports: [BottomNavigationComponent, BottomNavigationItemTemplateDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [IconsService],
    imports: [BottomNavigationComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BottomNavigationModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_BOTTOMNAVIGATION],
      imports: [...KENDO_BOTTOMNAVIGATION],
      providers: [IconsService]
    }]
  }], null, null);
})();
var ActionSheetModule = class _ActionSheetModule {
  static \u0275fac = function ActionSheetModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ActionSheetModule,
    imports: [ActionSheetComponent, ActionSheetViewComponent, ActionSheetHeaderTemplateDirective, ActionSheetItemTemplateDirective, ActionSheetContentTemplateDirective, ActionSheetFooterTemplateDirective, ActionSheetTemplateDirective],
    exports: [ActionSheetComponent, ActionSheetViewComponent, ActionSheetHeaderTemplateDirective, ActionSheetItemTemplateDirective, ActionSheetContentTemplateDirective, ActionSheetFooterTemplateDirective, ActionSheetTemplateDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [IconsService],
    imports: [ActionSheetComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_ACTIONSHEET],
      imports: [...KENDO_ACTIONSHEET],
      providers: [IconsService]
    }]
  }], null, null);
})();

export {
  Draggable,
  isDocumentAvailable,
  isChanged,
  anyChanged,
  hasObservers,
  guid,
  isSafari,
  isFirefox,
  firefoxMaxHeight,
  isPresent,
  isObjectPresent,
  isObject,
  parseCSSClassNames,
  setHTMLAttributes,
  removeHTMLAttributes,
  parseAttributes,
  isControlRequired,
  areObjectsEqual,
  processCssValue,
  DraggableDirective,
  closestInScope,
  closest,
  contains,
  isFocusable,
  hasFocusableParent,
  isVisible,
  findFocusableChild,
  hasClasses,
  EventsOutsideAngularDirective,
  ResizeBatchService,
  ResizeSensorComponent,
  KendoInput,
  KENDO_WEBMCP_HOST,
  Keys,
  focusableSelector,
  normalizeKeys,
  getter,
  WatermarkOverlayComponent,
  shouldShowValidationUI,
  getLicenseMessage,
  PrefixTemplateDirective,
  SuffixTemplateDirective,
  SeparatorComponent,
  PreventableEvent,
  scrollbarWidth,
  ScrollbarService,
  MultiTabStop,
  ToggleButtonTabStopDirective,
  TemplateContextDirective,
  KENDO_ADORNMENTS,
  KENDO_TOGGLEBUTTONTABSTOP,
  replaceMessagePlaceholder,
  MessageService,
  ComponentMessages,
  RTL,
  L10N_PREFIX,
  LocalizationService,
  windowViewport,
  offset,
  AnimationBuilder,
  PopupComponent,
  POPUP_CONTAINER,
  PopupService,
  KENDO_POPUP,
  IconComponent,
  SVGIconComponent,
  IconsService,
  IconWrapperComponent,
  SVGIconModule,
  KENDO_ICONS,
  IconsModule,
  globeIcon,
  arrowDownIcon,
  arrowRightIcon,
  arrowRotateCcwIcon,
  arrowRotateCwIcon,
  arrowUpIcon,
  arrowsSwapIcon,
  bellIcon,
  displayInlineFlexIcon,
  calendarIcon,
  cancelIcon,
  caretAltExpandIcon,
  caretAltToLeftIcon,
  caretAltToRightIcon,
  checkCircleIcon,
  checkIcon,
  chevronDownIcon,
  chevronLeftIcon,
  chevronRightIcon,
  chevronUpIcon,
  clipboardTextIcon,
  clockArrowRotateIcon,
  clockIcon,
  columnsIcon,
  commentIcon,
  copyIcon,
  dollarIcon,
  downloadIcon,
  dropletSlashIcon,
  dropletSliderIcon,
  exclamationCircleIcon,
  eyeSlashIcon,
  eyeIcon,
  fileAudioIcon,
  fileCsvIcon,
  fileDataIcon,
  fileExcelIcon,
  fileImageIcon,
  filePdfIcon,
  fileProgrammingIcon,
  fileTxtIcon,
  fileVideoIcon,
  fileZipIcon,
  fileIcon,
  filterClearIcon,
  filterIcon,
  folderIcon,
  gearIcon,
  gridIcon,
  groupIcon,
  homeIcon,
  hyperlinkOpenIcon,
  infoCircleIcon,
  insertBottomIcon,
  insertMiddleIcon,
  insertTopIcon,
  listUnorderedSquareIcon,
  lockIcon,
  maxWidthIcon,
  menuIcon,
  minusIcon,
  moreHorizontalIcon,
  moreVerticalIcon,
  paletteIcon,
  paperPlaneIcon,
  paperclipIcon,
  pauseIcon,
  pencilIcon,
  pinIcon,
  playIcon,
  plusCircleIcon,
  plusIcon,
  redoIcon,
  buildingsIcon,
  fileClockIcon,
  lightbulbIcon,
  pinBottomIcon,
  pinTopIcon,
  reorderIcon,
  saveIcon,
  walletIcon,
  searchIcon,
  setColumnPositionIcon,
  slidersIcon,
  sortAscSmallIcon,
  sortDescSmallIcon,
  sparklesIcon,
  stickIcon,
  stopIcon,
  thumbDownIcon,
  thumbUpIcon,
  trashIcon,
  undoIcon,
  unlockIcon,
  unpinIcon,
  unstickIcon,
  uploadIcon,
  userIcon,
  warningTriangleIcon,
  windowMinimizeIcon,
  windowRestoreIcon,
  windowIcon,
  xCircleIcon,
  xIcon,
  zoomSparkleIcon,
  tableIcon,
  tableWizardIcon,
  fileConfigIcon,
  filePresentationIcon,
  fileDiscImageIcon,
  chartLineIcon,
  ButtonComponent,
  ButtonGroupComponent,
  ChipComponent,
  ChipListComponent,
  DropDownButtonComponent,
  FloatingActionButtonComponent,
  SplitButtonComponent,
  SpeechToTextButtonComponent,
  SegmentedControlComponent,
  KENDO_BUTTON,
  KENDO_BUTTONS,
  ButtonModule,
  ButtonsModule,
  ActionSheetHeaderTemplateDirective,
  ActionSheetContentTemplateDirective,
  ActionSheetFooterTemplateDirective,
  ActionSheetTemplateDirective,
  ActionSheetComponent,
  ActionSheetViewComponent,
  BreadCrumbComponent,
  BadgeContainerComponent,
  BadgeComponent,
  LoaderComponent,
  BadgeModule,
  IndicatorsModule
};
//# sourceMappingURL=chunk-BV74N4V5.js.map
