import {
  AuditActionTypesComponent
} from "./chunk-IOMCNAEQ.js";
import {
  AuditEntityTypesComponent
} from "./chunk-73UHOZ57.js";
import "./chunk-5FRIPGHX.js";
import {
  AuthService,
  COLOR_SCHEMES,
  ThemeService
} from "./chunk-3N4QSD24.js";
import "./chunk-6FLZKXJD.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-QZMRJPSG.js";
import "./chunk-FAI5CTFG.js";
import {
  CellTemplateDirective,
  ColumnComponent2 as ColumnComponent,
  CustomMessagesComponent,
  DetailTemplateDirective,
  DialogActionsComponent,
  DialogComponent,
  DialogModule,
  DropDownListComponent,
  DropDownListModule,
  GridComponent,
  GridModule,
  MenuModule,
  NumericTextBoxComponent,
  NumericTextBoxModule,
  SwitchModule,
  TextBoxDirective,
  TextBoxModule,
  orderBy
} from "./chunk-RXO44S6U.js";
import "./chunk-5RXIK7OL.js";
import {
  AnimationBuilder,
  ButtonComponent,
  ButtonModule,
  ComponentMessages,
  IconWrapperComponent,
  IconsModule,
  IconsService,
  IndicatorsModule,
  KENDO_WEBMCP_HOST,
  L10N_PREFIX,
  LoaderComponent,
  LocalizationService,
  SVGIconComponent,
  bellIcon,
  buildingsIcon,
  calendarIcon,
  chartLineIcon,
  checkIcon,
  clipboardTextIcon,
  exclamationCircleIcon,
  filterIcon,
  gearIcon,
  guid,
  infoCircleIcon,
  lockIcon,
  paletteIcon,
  passwordIcon,
  pencilIcon,
  plusIcon,
  tableIcon,
  walletIcon,
  xCircleIcon,
  xIcon
} from "./chunk-KKZNNEP2.js";
import {
  A,
  animate,
  style
} from "./chunk-EONFWV3N.js";
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
} from "./chunk-4QF53X3W.js";
import {
  ApplicationRef,
  ChangeDetectorRef,
  CommonModule,
  Component,
  Directive,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  HostBinding,
  HttpClient,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgClass,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  Optional,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  __spreadProps,
  __spreadValues,
  createComponent,
  forwardRef,
  setClassMetadata,
  signal,
  take,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElementContainer,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinterpolate1,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵviewQuery
} from "./chunk-DEBWI7RP.js";

// node_modules/@progress/kendo-angular-notification/fesm2022/progress-kendo-angular-notification.mjs
var _c0 = ["container"];
function NotificationComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-icon-wrapper", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("name", ctx_r0.typeIconClass())("svgIcon", ctx_r0.typeSVGIcon());
  }
}
function NotificationComponent_Conditional_4_ng_template_0_Template(rf, ctx) {
}
function NotificationComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NotificationComponent_Conditional_4_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.templateRef);
  }
}
function NotificationComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.templateString, " ");
  }
}
function NotificationComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 6)(1, "span", 7);
    \u0275\u0275listener("click", function NotificationComponent_Conditional_8_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onCloseClick());
    });
    \u0275\u0275element(2, "kendo-icon-wrapper", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("title", ctx_r0.closeButtonTitle);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", ctx_r0.xIcon);
  }
}
var _c1 = ["group"];
var packageMetadata = {
  name: "@progress/kendo-angular-notification",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1780593910,
  version: "24.1.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
function slideAnimation(height, duration) {
  return [style({
    overflow: "hidden",
    height: 0
  }), animate(`${duration}ms ease-in`, style({
    height: `${height}px`
  }))];
}
function slideCloseAnimation(height, duration) {
  return [style({
    height: `${height}px`
  }), animate(`${duration}ms ease-in`, style({
    overflow: "hidden",
    height: 0
  }))];
}
function fadeAnimation(duration) {
  return [style({
    opacity: 0
  }), animate(`${duration}ms ease-in`, style({
    opacity: 1
  }))];
}
function fadeCloseAnimation(duration) {
  return [style({
    opacity: 1
  }), animate(`${duration}ms ease-in`, style({
    opacity: 0
  }))];
}
var LocalizedMessagesDirective = class _LocalizedMessagesDirective extends ComponentMessages {
  service;
  /**
   * The title of the close button.
   */
  closeTitle;
  constructor(service) {
    super();
    this.service = service;
  }
  static \u0275fac = function LocalizedMessagesDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalizedMessagesDirective)(\u0275\u0275directiveInject(LocalizationService));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _LocalizedMessagesDirective,
    selectors: [["", "kendoNotificationLocalizedMessages", ""]],
    inputs: {
      closeTitle: "closeTitle"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: ComponentMessages,
      useExisting: forwardRef(() => _LocalizedMessagesDirective)
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: ComponentMessages,
        useExisting: forwardRef(() => LocalizedMessagesDirective)
      }],
      selector: `[kendoNotificationLocalizedMessages]`,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], {
    closeTitle: [{
      type: Input
    }]
  });
})();
var NotificationComponent = class _NotificationComponent {
  cdr;
  element;
  renderer;
  builder;
  localizationService;
  /**
   * @hidden
   */
  xIcon = xIcon;
  contentId = `k-${guid()}`;
  container;
  closeClickSubscription;
  close = new EventEmitter();
  templateRef;
  templateString;
  width = null;
  height = null;
  notificationLabel = "Notification";
  notificationRole = "status";
  cssClass;
  hideAfter;
  closable;
  type;
  animation;
  closeTitle;
  /**
   * @hidden
   */
  direction;
  get closeButtonTitle() {
    return this.closeTitle || this.localizationService.get("closeTitle");
  }
  defaultHideAfter = 5e3;
  hideTimeout;
  animationEnd = new EventEmitter();
  dynamicRTLSubscription;
  rtl = false;
  constructor(cdr, element, renderer, builder, localizationService) {
    this.cdr = cdr;
    this.element = element;
    this.renderer = renderer;
    this.builder = builder;
    this.localizationService = localizationService;
    A(packageMetadata);
    this.dynamicRTLSubscription = localizationService.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    });
  }
  notificationClasses() {
    return `${this.type ? this.typeClass() : ""}
            ${this.closable ? "k-notification-closable" : ""}`;
  }
  ngOnInit() {
    clearTimeout(this.hideTimeout);
  }
  ngOnDestroy() {
    clearTimeout(this.hideTimeout);
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
  }
  ngAfterViewInit() {
    if (!this.closable && !this.animation) {
      this.setHideTimeout();
    }
    if (!this.closable && this.animation) {
      this.animationEnd.pipe(take(1)).subscribe(() => this.setHideTimeout());
    }
    if (this.animation) {
      this.animate(this.animation);
    }
  }
  typeClass() {
    return {
      "none": "",
      "base": "k-notification-base",
      "primary": "k-notification-primary",
      "secondary": "k-notification-secondary",
      "tertiary": "k-notification-tertiary",
      "success": "k-notification-success",
      "warning": "k-notification-warning",
      "error": "k-notification-error",
      "info": "k-notification-info",
      "inverse": "k-notification-inverse"
    }[this.type.style];
  }
  typeIconClass() {
    return {
      "none": "",
      "base": "",
      "primary": "",
      "secondary": "",
      "tertiary": "",
      "success": "check",
      "warning": "exclamation-circle",
      "error": "x-circle",
      "info": "info-circle",
      "inverse": ""
    }[this.type.style];
  }
  typeSVGIcon() {
    return {
      "none": null,
      "base": null,
      "primary": null,
      "secondary": null,
      "tertiary": null,
      "success": checkIcon,
      "warning": exclamationCircleIcon,
      "error": xCircleIcon,
      "info": infoCircleIcon,
      "inverse": null
    }[this.type.style];
  }
  onCloseClick() {
    clearTimeout(this.hideTimeout);
    this.hide();
  }
  hide(customComponent) {
    const elementHeight = getComputedStyle(this.element.nativeElement).height;
    if (this.animation && elementHeight) {
      this.animate(this.animation, true);
      this.animationEnd.subscribe(() => {
        this.emitClose(customComponent);
      });
      return;
    }
    this.emitClose(customComponent);
  }
  setHideTimeout() {
    const hideAfter = this.hideAfter || this.defaultHideAfter;
    this.hideTimeout = window.setTimeout(() => this.onCloseClick(), hideAfter);
  }
  emitClose(customComponent) {
    if (customComponent) {
      customComponent.destroy();
    }
    this.close.emit();
  }
  play(animation, animatedElement) {
    const factory = this.builder.build(animation);
    const element = this.element.nativeElement;
    this.renderer.addClass(element, "k-notification-container-animating");
    let player = factory.create(animatedElement);
    player.onDone(() => {
      this.renderer.removeClass(element, "k-notification-container-animating");
      this.animationEnd.emit();
      if (player) {
        player.destroy();
        player = null;
      }
    });
    player.play();
  }
  animate(animation, onclose) {
    const element = this.element.nativeElement;
    const duration = animation.duration;
    const height = element.offsetHeight;
    const generatedAnimation = animation.type === "slide" ? this.slideAnimation(height, duration, onclose) : this.fadeAnimation(duration, onclose);
    this.play(generatedAnimation, element);
  }
  slideAnimation(height, duration, onclose) {
    return onclose ? slideCloseAnimation(height, duration) : slideAnimation(height, duration);
  }
  fadeAnimation(duration, onclose) {
    return onclose ? fadeCloseAnimation(duration) : fadeAnimation(duration);
  }
  static \u0275fac = function NotificationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(AnimationBuilder), \u0275\u0275directiveInject(LocalizationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NotificationComponent,
    selectors: [["kendo-notification"]],
    viewQuery: function NotificationComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7, ViewContainerRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.container = _t.first);
      }
    },
    hostVars: 1,
    hostBindings: function NotificationComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("dir", ctx.direction);
      }
    },
    inputs: {
      templateRef: "templateRef",
      templateString: "templateString",
      width: "width",
      height: "height",
      notificationLabel: "notificationLabel",
      notificationRole: "notificationRole",
      cssClass: "cssClass",
      hideAfter: "hideAfter",
      closable: "closable",
      type: "type",
      animation: "animation"
    },
    features: [\u0275\u0275ProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.notification"
    }, {
      provide: KENDO_WEBMCP_HOST,
      useExisting: forwardRef(() => _NotificationComponent)
    }])],
    decls: 9,
    vars: 16,
    consts: () => {
      let i18n_0;
      if (false) {
        const MSG_C__USERS_ADMINISTRATOR_SQUADFLOW_APPS_PORTAL_NODE_MODULES__PROGRESS_KENDO_ANGULAR_NOTIFICATION_FESM2022_PROGRESS_KENDO_ANGULAR_NOTIFICATION_MJS_0 = (
          /* @ts-ignore */
          goog.getMsg("Close")
        );
        i18n_0 = MSG_C__USERS_ADMINISTRATOR_SQUADFLOW_APPS_PORTAL_NODE_MODULES__PROGRESS_KENDO_ANGULAR_NOTIFICATION_FESM2022_PROGRESS_KENDO_ANGULAR_NOTIFICATION_MJS_0;
      } else {
        i18n_0 = $localize`:kendo.notification.closeTitle|The title of the close button:Close`;
      }
      return [["container", ""], ["kendoNotificationLocalizedMessages", "", "closeTitle", i18n_0], ["aria-live", "polite", 3, "ngClass"], ["innerCssClass", "k-notification-status", 3, "name", "svgIcon"], [1, "k-notification-content", 3, "id"], [3, "ngTemplateOutlet"], [1, "k-notification-actions"], [1, "k-notification-action", "k-notification-close-action", 3, "click"], ["name", "x", 3, "svgIcon"]];
    },
    template: function NotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 1);
        \u0275\u0275elementStart(1, "div", 2);
        \u0275\u0275conditionalCreate(2, NotificationComponent_Conditional_2_Template, 1, 2, "kendo-icon-wrapper", 3);
        \u0275\u0275elementStart(3, "div", 4);
        \u0275\u0275conditionalCreate(4, NotificationComponent_Conditional_4_Template, 1, 1, null, 5);
        \u0275\u0275conditionalCreate(5, NotificationComponent_Conditional_5_Template, 1, 1);
        \u0275\u0275elementContainer(6, null, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(8, NotificationComponent_Conditional_8_Template, 3, 2, "span", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275classMap(\u0275\u0275interpolate1("k-notification ", ctx.notificationClasses()));
        \u0275\u0275styleProp("height", ctx.height, "px")("width", ctx.width, "px");
        \u0275\u0275property("ngClass", ctx.cssClass);
        \u0275\u0275attribute("role", ctx.notificationRole)("aria-describedby", ctx.contentId)("aria-label", ctx.notificationLabel);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.type && ctx.type.icon && ctx.type.style !== "none" ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("id", ctx.contentId);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.templateRef ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.templateString ? 5 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.closable ? 8 : -1);
      }
    },
    dependencies: [LocalizedMessagesDirective, NgClass, IconWrapperComponent, NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationComponent, [{
    type: Component,
    args: [{
      selector: "kendo-notification",
      template: `
    <ng-container kendoNotificationLocalizedMessages
      i18n-closeTitle="kendo.notification.closeTitle|The title of the close button"
      closeTitle="Close"
      >
    </ng-container>
    <div class="k-notification {{ notificationClasses() }}"
      [ngClass]="cssClass"
      [style.height.px]="height"
      [style.width.px]="width"
      [attr.role]="notificationRole"
      aria-live="polite"
      [attr.aria-describedby]="contentId"
      [attr.aria-label]="notificationLabel">
      @if (type && type.icon && type.style !== 'none') {
        <kendo-icon-wrapper
          innerCssClass="k-notification-status"
          [name]="typeIconClass()"
          [svgIcon]="typeSVGIcon()"
          >
        </kendo-icon-wrapper>
      }
      <div [id]="contentId" class="k-notification-content">
        @if (templateRef) {
          <ng-template
            [ngTemplateOutlet]="templateRef">
          </ng-template>
        }
        @if (templateString) {
          {{ templateString }}
        }
        <ng-container #container></ng-container>
      </div>

      @if (closable) {
        <span class="k-notification-actions">
          <span class="k-notification-action k-notification-close-action" [attr.title]="closeButtonTitle" (click)="onCloseClick()">
            <kendo-icon-wrapper name="x" [svgIcon]="xIcon"></kendo-icon-wrapper>
          </span>
        </span>
      }
    </div>
    `,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.notification"
      }, {
        provide: KENDO_WEBMCP_HOST,
        useExisting: forwardRef(() => NotificationComponent)
      }],
      standalone: true,
      imports: [LocalizedMessagesDirective, NgClass, IconWrapperComponent, NgTemplateOutlet]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: AnimationBuilder
  }, {
    type: LocalizationService
  }], {
    container: [{
      type: ViewChild,
      args: ["container", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    templateRef: [{
      type: Input
    }],
    templateString: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    notificationLabel: [{
      type: Input
    }],
    notificationRole: [{
      type: Input
    }],
    cssClass: [{
      type: Input
    }],
    hideAfter: [{
      type: Input
    }],
    closable: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }]
  });
})();
var NotificationContainerComponent = class _NotificationContainerComponent {
  element;
  renderer;
  ngZone;
  container;
  group;
  id = "";
  notifications = [];
  position;
  constructor(element, renderer, ngZone) {
    this.element = element;
    this.renderer = renderer;
    this.ngZone = ngZone;
  }
  ngOnDestroy() {
    this.notifications.forEach((notification) => {
      if (notification.closeClickSubscription) {
        notification.closeClickSubscription.unsubscribe();
      }
    });
    this.notifications = [];
  }
  addNotification(settings) {
    this.position = settings.position;
    this.id = `${this.position.horizontal} ${this.position.vertical}`;
    const notificationRef = this.container.createComponent(NotificationComponent);
    this.applySettings(notificationRef, settings);
    let customComponent = null;
    if (typeof settings.content === "function") {
      customComponent = notificationRef.instance.container.createComponent(settings.content);
    }
    notificationRef.changeDetectorRef.detectChanges();
    this.notifications.push(notificationRef.instance);
    if (settings.appendTo) {
      this.applyAbsolutePosition(settings.appendTo);
    }
    this.applyPosition();
    this.applyContainerWrap();
    return {
      afterHide: notificationRef.instance.close,
      hide: () => notificationRef.instance.hide(customComponent),
      notification: notificationRef,
      content: customComponent || null
    };
  }
  hide(notificationRef) {
    const instance = notificationRef.instance;
    const index = this.notifications.indexOf(instance);
    this.notifications.splice(index, 1);
    if (instance.closeClickSubscription) {
      instance.closeClickSubscription.unsubscribe();
    }
    instance.templateRef = null;
    instance.templateString = null;
    notificationRef.destroy();
    if (this.notifications.length > 0) {
      this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
        this.applyPosition();
      });
    }
  }
  applyContainerWrap() {
    const value = this.position.horizontal === "right" ? "wrap-reverse" : "wrap";
    this.renderer.setStyle(this.group.nativeElement, "flex-wrap", value);
  }
  applySettings(notificationRef, settings) {
    const notification = notificationRef.instance;
    const content = settings.content;
    const animation = settings.animation || null;
    notification.closeClickSubscription = notification.close.subscribe(() => this.hide(notificationRef));
    if (typeof content === "string") {
      notification.templateString = content;
    }
    if (content instanceof TemplateRef) {
      notification.templateRef = content;
    }
    notification.animation = animation;
    const type = settings.type;
    if (type && type.style === void 0) {
      type.style = "none";
    }
    if (type && type.icon === void 0) {
      type.icon = true;
    }
    notification.type = type;
    notification.closeTitle = settings.closeTitle;
    if (settings.cssClass) {
      notification.cssClass = settings.cssClass;
    }
    if (settings.notificationLabel) {
      notification.notificationLabel = settings.notificationLabel;
    }
    if (settings.notificationRole) {
      notification.notificationRole = settings.notificationRole;
    }
    notification.closable = settings.closable;
    notification.hideAfter = settings.hideAfter;
    notification.width = settings.width;
    notification.height = settings.height;
  }
  applyAbsolutePosition(appendToContainer) {
    const appendTo = appendToContainer.element.nativeElement;
    const el = this.element.nativeElement.children[0];
    if (window.getComputedStyle(appendTo).position === "static") {
      this.renderer.setStyle(appendTo, "position", "relative");
    }
    this.renderer.setStyle(el, "position", "absolute");
  }
  applyPosition() {
    const element = this.element.nativeElement.children[0];
    const elementHalfWidth = element.getBoundingClientRect().width / 2;
    const positionStyles = this.setContainerPosition(this.position, elementHalfWidth);
    Object.keys(positionStyles).forEach((cssStyle) => {
      element.style[cssStyle] = positionStyles[cssStyle];
    });
  }
  setContainerPosition(position, offsetMargin) {
    const positionLayout = {
      horizontal: {
        left: {
          left: 0,
          alignItems: "flex-start"
        },
        right: {
          right: 0,
          alignItems: "flex-start"
        },
        center: {
          left: "50%",
          marginLeft: `${-offsetMargin}px`,
          alignItems: "center"
        }
      },
      vertical: {
        top: {
          top: 0
        },
        bottom: {
          bottom: 0
        }
      }
    };
    const horizontal = positionLayout.horizontal[position.horizontal];
    const vertical = positionLayout.vertical[position.vertical];
    return Object.assign({}, horizontal, vertical);
  }
  static \u0275fac = function NotificationContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationContainerComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NotificationContainerComponent,
    selectors: [["kendo-notification-container"]],
    viewQuery: function NotificationContainerComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7, ViewContainerRef)(_c1, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.container = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.group = _t.first);
      }
    },
    inputs: {
      id: "id"
    },
    decls: 4,
    vars: 0,
    consts: [["group", ""], ["container", ""], [1, "k-notification-group"]],
    template: function NotificationContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 2, 0);
        \u0275\u0275domElementContainer(2, null, 1);
        \u0275\u0275domElementEnd();
      }
    },
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationContainerComponent, [{
    type: Component,
    args: [{
      selector: "kendo-notification-container",
      template: `
        <div #group class="k-notification-group">
            <ng-container #container></ng-container>
        </div>
    `,
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }], {
    container: [{
      type: ViewChild,
      args: ["container", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    group: [{
      type: ViewChild,
      args: ["group", {
        static: true
      }]
    }],
    id: [{
      type: Input
    }]
  });
})();
var NOTIFICATION_CONTAINER = new InjectionToken("Notification Container");
var NotificationService = class _NotificationService {
  injector;
  container;
  notificationContainers = [];
  position = {
    horizontal: "right",
    vertical: "top"
  };
  applicationRef;
  /**
   * @hidden
   */
  constructor(injector, container) {
    this.injector = injector;
    this.container = container;
  }
  /**
   * Opens a Notification component. Created Notifications are mounted
   * in the DOM directly in the root application component.
   *
   * @param {NotificationSettings} settings - The settings which define the Notification.
   *
   * @returns {NotificationRef} - A reference to the Notification object and the convenience properties.
   */
  show(settings) {
    if (!settings) {
      throw new Error("NotificationSettings settings are required");
    }
    const target = this.findGroupContainer(settings);
    const position = settings.position || this.position;
    const currentId = `${position.horizontal} ${position.vertical}`;
    let container;
    let notificationRef;
    let notificationContainer = this.notificationContainers.find((c) => target.nativeElement.contains(c.element.nativeElement) && c.id === currentId);
    if (!notificationContainer) {
      const environmentInjector = this.injector.get(EnvironmentInjector);
      container = createComponent(NotificationContainerComponent, {
        environmentInjector,
        elementInjector: this.injector
      });
      notificationContainer = container.instance;
      this.appRef.attachView(container.hostView);
      const hostViewElement = container.location.nativeElement;
      const groupContainer = this.findGroupContainer(settings);
      if (!groupContainer) {
        throw new Error(`
                    View Container not found! Inject the NOTIFICATION_CONTAINER or define a specific ViewContainerRef via
                    the appendTo option. See https://www.telerik.com/kendo-angular-ui/components/notification/api/NOTIFICATION_CONTAINER/
                    for more details.
                `);
      }
      groupContainer.nativeElement.appendChild(hostViewElement);
      this.notificationContainers.push(notificationContainer);
    }
    settings.position = position;
    notificationRef = notificationContainer.addNotification(settings);
    return notificationRef;
  }
  get appRef() {
    if (!this.applicationRef) {
      this.applicationRef = this.injector.get(ApplicationRef);
    }
    return this.applicationRef;
  }
  findGroupContainer(settings) {
    let container;
    if (settings.appendTo) {
      container = settings.appendTo.element;
    } else if (this.container) {
      container = this.container;
    } else {
      const appRoot = this.appRef.components && this.appRef.components[0];
      container = appRoot ? appRoot.location : null;
    }
    return container;
  }
  static \u0275fac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationService)(\u0275\u0275inject(Injector), \u0275\u0275inject(NOTIFICATION_CONTAINER, 8));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NotificationService,
    factory: _NotificationService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Injector
  }, {
    type: ElementRef,
    decorators: [{
      type: Inject,
      args: [NOTIFICATION_CONTAINER]
    }, {
      type: Optional
    }]
  }], null);
})();
var KENDO_NOTIFICATION = [NotificationComponent, NotificationContainerComponent];
var NotificationModule = class _NotificationModule {
  static \u0275fac = function NotificationModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NotificationModule,
    imports: [NotificationComponent, NotificationContainerComponent],
    exports: [NotificationComponent, NotificationContainerComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [NotificationService, IconsService],
    imports: [NotificationComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_NOTIFICATION],
      exports: [...KENDO_NOTIFICATION],
      providers: [NotificationService, IconsService]
    }]
  }], null, null);
})();

// src/app/core/services/counter.service.ts
var CounterService = class _CounterService {
  http;
  constructor(http) {
    this.http = http;
  }
  getAll(level = "", customerId = 0, productId = -1) {
    return this.http.get(`/api/counters?level=${level}&customerId=${customerId}&productId=${productId}`);
  }
  create(payload) {
    return this.http.post("/api/counters", payload);
  }
  update(counterKey, payload) {
    return this.http.put(`/api/counters/${counterKey}`, payload);
  }
  lock(counterKey, isLocked, counterLevel, customerId = 0, productId = 0) {
    return this.http.put(`/api/counters/${counterKey}/lock`, {
      counterLevel,
      customerID: customerId,
      productID: productId,
      isLocked
    });
  }
  reset(counterKey, counterLevel, customerId = 0, productId = 0) {
    return this.http.put(`/api/counters/${counterKey}/reset`, {
      counterLevel,
      customerID: customerId,
      productID: productId
    });
  }
  static \u0275fac = function CounterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CounterService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CounterService, factory: _CounterService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CounterService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/settings/settings.component.ts
var _c02 = (a0, a1) => ({ data: a0, total: a1 });
var _c12 = () => [10, 25, 50];
var _c2 = (a0) => ({ buttonCount: 5, info: true, type: "numeric", pageSizes: a0 });
var _c3 = () => ({ mode: "single", allowUnsort: false });
var _forTrack0 = ($index, $item) => $item.id;
function SettingsComponent_For_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
}
function SettingsComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function SettingsComponent_For_10_Template_button_click_0_listener() {
      const g_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectGroup(g_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275element(2, "kendo-svg-icon", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, SettingsComponent_For_10_Conditional_5_Template, 1, 0, "span", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeGroup() === g_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", g_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r2.text);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.activeGroup() === g_r2.id ? 5 : -1);
  }
}
function SettingsComponent_Conditional_12_For_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_Conditional_12_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_12_For_12_Template_button_click_0_listener() {
      const s_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectScheme(s_r6.id));
    });
    \u0275\u0275elementStart(1, "span", 28);
    \u0275\u0275conditionalCreate(2, SettingsComponent_Conditional_12_For_12_Conditional_2_Template, 2, 0, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.theme.scheme() === s_r6.id);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", s_r6.primary);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.theme.scheme() === s_r6.id ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r6.label);
  }
}
function SettingsComponent_Conditional_12_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-loader", 25);
  }
}
function SettingsComponent_Conditional_12_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2713 ");
  }
}
function SettingsComponent_Conditional_12_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_12_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveOrg());
    });
    \u0275\u0275text(1, " \u05E7\u05D1\u05E2 \u05DB\u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC \u05DC\u05D0\u05E8\u05D2\u05D5\u05DF ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.saving());
  }
}
function SettingsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 14)(2, "h2");
    \u0275\u0275text(3, "\u05DE\u05E8\u05D0\u05D4 \u05D5\u05E2\u05D9\u05E6\u05D5\u05D1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "\u05D4\u05EA\u05D0\u05DD \u05D0\u05EA \u05D7\u05D5\u05D5\u05D9\u05EA \u05D4\u05DE\u05DE\u05E9\u05E7 \u05DC\u05E1\u05D2\u05E0\u05D5\u05DF \u05E9\u05DC\u05DA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 15)(7, "div", 16)(8, "div", 17);
    \u0275\u0275text(9, "\u05E2\u05E8\u05DB\u05EA \u05E6\u05D1\u05E2\u05D9\u05DD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 18);
    \u0275\u0275repeaterCreate(11, SettingsComponent_Conditional_12_For_12_Template, 5, 6, "button", 19, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 16)(14, "div", 17);
    \u0275\u0275text(15, "\u05DE\u05E6\u05D1 \u05DB\u05D4\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 20)(17, "button", 21);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_12_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(!ctx_r2.theme.isDark() && ctx_r2.theme.toggleMode());
    });
    \u0275\u0275text(18, "\u2713 \u05E4\u05E2\u05D9\u05DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 21);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_12_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.theme.isDark() && ctx_r2.theme.toggleMode());
    });
    \u0275\u0275text(20, "\u05DB\u05D1\u05D5\u05D9");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "span", 22);
    \u0275\u0275text(22, "\u05DE\u05EA\u05D0\u05D9\u05DD \u05DC\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D1\u05E1\u05D1\u05D9\u05D1\u05D4 \u05D7\u05E9\u05D5\u05DB\u05D4");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 23)(24, "button", 24);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_12_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveUser());
    });
    \u0275\u0275conditionalCreate(25, SettingsComponent_Conditional_12_Conditional_25_Template, 1, 0, "kendo-loader", 25)(26, SettingsComponent_Conditional_12_Conditional_26_Template, 1, 0);
    \u0275\u0275text(27, " \u05E9\u05DE\u05D5\u05E8 \u05D4\u05E2\u05D3\u05E4\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(28, SettingsComponent_Conditional_12_Conditional_28_Template, 2, 1, "button", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r2.schemes);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("seg-on", ctx_r2.theme.isDark());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg-on", !ctx_r2.theme.isDark());
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r2.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.saving() ? 25 : 26);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.isAdmin() ? 28 : -1);
  }
}
function SettingsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 14)(2, "h2");
    \u0275\u0275text(3, "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05DB\u05DC\u05DC\u05D9\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "\u05E9\u05E4\u05D4, \u05D0\u05D6\u05D5\u05E8 \u05D6\u05DE\u05DF \u05D5\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D1\u05E1\u05D9\u05E1\u05D9\u05D5\u05EA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 32)(7, "span", 33);
    \u0275\u0275text(8, "\u05D1\u05E7\u05E8\u05D5\u05D1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05DB\u05DC\u05DC\u05D9\u05D5\u05EA \u05D9\u05EA\u05D5\u05D5\u05E1\u05E4\u05D5 \u05D1\u05E7\u05E8\u05D5\u05D1");
    \u0275\u0275elementEnd()()();
  }
}
function SettingsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 14)(2, "h2");
    \u0275\u0275text(3, "\u05D0\u05D1\u05D8\u05D7\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "\u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05E1\u05D9\u05E1\u05DE\u05D0\u05D5\u05EA \u05D5\u05D7\u05E1\u05D9\u05DE\u05EA \u05DB\u05E0\u05D9\u05E1\u05D5\u05EA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 32)(7, "span", 33);
    \u0275\u0275text(8, "\u05D1\u05E7\u05E8\u05D5\u05D1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D0\u05D1\u05D8\u05D7\u05D4 \u05D9\u05EA\u05D5\u05D5\u05E1\u05E4\u05D5 \u05D1\u05E7\u05E8\u05D5\u05D1");
    \u0275\u0275elementEnd()()();
  }
}
function SettingsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 14)(2, "h2");
    \u0275\u0275text(3, "\u05D4\u05EA\u05E8\u05D0\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "\u05E0\u05D9\u05D4\u05D5\u05DC \u05D4\u05E2\u05D3\u05E4\u05D5\u05EA \u05D4\u05EA\u05E8\u05D0\u05D5\u05EA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 32)(7, "span", 33);
    \u0275\u0275text(8, "\u05D1\u05E7\u05E8\u05D5\u05D1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D4\u05EA\u05E8\u05D0\u05D5\u05EA \u05D9\u05EA\u05D5\u05D5\u05E1\u05E4\u05D5 \u05D1\u05E7\u05E8\u05D5\u05D1");
    \u0275\u0275elementEnd()()();
  }
}
function SettingsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 14)(2, "h2");
    \u0275\u0275text(3, "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D0\u05E8\u05D2\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "\u05E4\u05E8\u05D8\u05D9 \u05D4\u05D0\u05E8\u05D2\u05D5\u05DF \u05D5\u05D7\u05D1\u05E8\u05D9 \u05D4\u05E6\u05D5\u05D5\u05EA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 32)(7, "span", 33);
    \u0275\u0275text(8, "\u05D1\u05E7\u05E8\u05D5\u05D1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D0\u05E8\u05D2\u05D5\u05DF \u05D9\u05EA\u05D5\u05D5\u05E1\u05E4\u05D5 \u05D1\u05E7\u05E8\u05D5\u05D1");
    \u0275\u0275elementEnd()()();
  }
}
function SettingsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 14)(2, "h2");
    \u0275\u0275text(3, "\u05D7\u05D9\u05D5\u05D1 \u05D5\u05DE\u05E0\u05D5\u05D9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA, \u05EA\u05E9\u05DC\u05D5\u05DE\u05D9\u05DD \u05D5\u05D7\u05E9\u05D1\u05D5\u05E0\u05D9\u05D5\u05EA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 32)(7, "span", 33);
    \u0275\u0275text(8, "\u05D1\u05E7\u05E8\u05D5\u05D1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D7\u05D9\u05D5\u05D1 \u05D9\u05EA\u05D5\u05D5\u05E1\u05E4\u05D5 \u05D1\u05E7\u05E8\u05D5\u05D1");
    \u0275\u0275elementEnd()()();
  }
}
function SettingsComponent_Conditional_18_Conditional_1_For_13_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 54);
  }
}
function SettingsComponent_Conditional_18_Conditional_1_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_18_Conditional_1_For_13_Template_button_click_0_listener() {
      const g_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.editActiveGroup.set(g_r10.id));
    });
    \u0275\u0275elementStart(1, "span", 52);
    \u0275\u0275element(2, "kendo-svg-icon", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, SettingsComponent_Conditional_18_Conditional_1_For_13_Conditional_5_Template, 1, 0, "span", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r2.editActiveGroup() === g_r10.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", g_r10.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r10.text);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.editActiveGroup() === g_r10.id ? 5 : -1);
  }
}
function SettingsComponent_Conditional_18_Conditional_1_Conditional_15_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.editingCounter.CustomerName);
  }
}
function SettingsComponent_Conditional_18_Conditional_1_Conditional_15_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "\u05DC\u05DC\u05D0 \u05DC\u05E7\u05D5\u05D7");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_Conditional_18_Conditional_1_Conditional_15_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.editingCounter.ProductName);
  }
}
function SettingsComponent_Conditional_18_Conditional_1_Conditional_15_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "\u05DC\u05DC\u05D0 \u05DE\u05D5\u05E6\u05E8");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_Conditional_18_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 55);
    \u0275\u0275text(2, "\u05E4\u05E8\u05D8\u05D9 \u05D6\u05D9\u05D4\u05D5\u05D9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 56)(4, "span", 57);
    \u0275\u0275text(5, "\u05DE\u05D6\u05D4\u05D4 \u05DE\u05D5\u05E0\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 58);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 56)(9, "span", 57);
    \u0275\u0275text(10, "\u05DE\u05E4\u05EA\u05D7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 59);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 56)(14, "span", 57);
    \u0275\u0275text(15, "\u05E8\u05DE\u05EA \u05DE\u05D5\u05E0\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 60)(17, "span", 61);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 56)(20, "span", 57);
    \u0275\u0275text(21, "\u05D0\u05E8\u05D2\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 60)(23, "span", 62);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 56)(26, "span", 57);
    \u0275\u0275text(27, "\u05DC\u05E7\u05D5\u05D7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 60);
    \u0275\u0275conditionalCreate(29, SettingsComponent_Conditional_18_Conditional_1_Conditional_15_Conditional_29_Template, 2, 1, "span", 63)(30, SettingsComponent_Conditional_18_Conditional_1_Conditional_15_Conditional_30_Template, 2, 0, "span", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 56)(32, "span", 57);
    \u0275\u0275text(33, "\u05DE\u05D5\u05E6\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 60);
    \u0275\u0275conditionalCreate(35, SettingsComponent_Conditional_18_Conditional_1_Conditional_15_Conditional_35_Template, 2, 1, "span", 65)(36, SettingsComponent_Conditional_18_Conditional_1_Conditional_15_Conditional_36_Template, 2, 0, "span", 64);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.editingCounter.CounterID);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.editingCounter.CounterKey);
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r2.levelClass(ctx_r2.editingCounter.CounterLevel));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.levelLabel(ctx_r2.editingCounter.CounterLevel), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.editingCounter.TenantName || "\u05DC\u05DC\u05D0 \u05D0\u05E8\u05D2\u05D5\u05DF");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.editingCounter.CustomerID > 0 ? 29 : 30);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.editingCounter.ProductID > 0 ? 35 : 36);
  }
}
function SettingsComponent_Conditional_18_Conditional_1_Conditional_16_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 70);
    \u0275\u0275text(1, "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_Conditional_18_Conditional_1_Conditional_16_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 70);
    \u0275\u0275text(1, "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_Conditional_18_Conditional_1_Conditional_16_Case_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u05DC\u05DC\u05D0 \u05EA\u05D0\u05E8\u05D9\u05DA \u2014 INV-000042 ");
  }
}
function SettingsComponent_Conditional_18_Conditional_1_Conditional_16_Case_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u05E9\u05E0\u05D4 \u2014 INV-2026-000042 ");
  }
}
function SettingsComponent_Conditional_18_Conditional_1_Conditional_16_Case_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u05E9\u05E0\u05D4+\u05D7\u05D5\u05D3\u05E9 \u2014 INV-2026-06-000042 ");
  }
}
function SettingsComponent_Conditional_18_Conditional_1_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 55);
    \u0275\u0275text(2, "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D1\u05E1\u05D9\u05E1\u05D9\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 56)(4, "label", 66);
    \u0275\u0275text(5, "\u05E9\u05DD \u05DE\u05D5\u05E0\u05D4 ");
    \u0275\u0275elementStart(6, "span", 67);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 68);
    \u0275\u0275element(9, "input", 69);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(10, SettingsComponent_Conditional_18_Conditional_1_Conditional_16_Conditional_10_Template, 2, 0, "small", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 56)(12, "label", 71);
    \u0275\u0275text(13, "\u05EA\u05D7\u05D9\u05DC\u05D9\u05EA (Prefix) ");
    \u0275\u0275elementStart(14, "span", 67);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 68);
    \u0275\u0275element(17, "input", 72);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(18, "small", 73);
    \u0275\u0275text(19, "\u05EA\u05D7\u05D9\u05DC\u05D9\u05EA \u05E9\u05EA\u05D5\u05E4\u05D9\u05E2 \u05D1\u05E4\u05E0\u05D9 \u05DE\u05E1\u05E4\u05E8 \u05D4\u05DE\u05E1\u05DE\u05DA");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, SettingsComponent_Conditional_18_Conditional_1_Conditional_16_Conditional_20_Template, 2, 0, "small", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 56)(22, "label", 57);
    \u0275\u0275text(23, "\u05E4\u05D5\u05E8\u05DE\u05D8 \u05EA\u05D0\u05E8\u05D9\u05DA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 68);
    \u0275\u0275element(25, "kendo-dropdownlist", 74);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(26, "small", 73);
    \u0275\u0275conditionalCreate(27, SettingsComponent_Conditional_18_Conditional_1_Conditional_16_Case_27_Template, 1, 0)(28, SettingsComponent_Conditional_18_Conditional_1_Conditional_16_Case_28_Template, 1, 0)(29, SettingsComponent_Conditional_18_Conditional_1_Conditional_16_Case_29_Template, 1, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 56)(31, "label", 57);
    \u0275\u0275text(32, "\u05E1\u05D5\u05D2 \u05E4\u05DC\u05D8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 68)(34, "div", 75)(35, "button", 21);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_18_Conditional_1_Conditional_16_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.editForm.get("outputType")?.setValue("NUMERIC"));
    });
    \u0275\u0275text(36, " \u05DE\u05E1\u05E4\u05E8\u05D9 \u2014 42 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 21);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_18_Conditional_1_Conditional_16_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.editForm.get("outputType")?.setValue("STRING"));
    });
    \u0275\u0275text(38, " \u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u2014 INV-2026-000042 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "small", 73);
    \u0275\u0275text(40, "NUMERIC \u05DE\u05D7\u05D6\u05D9\u05E8 \u05DE\u05E1\u05E4\u05E8; STRING \u05DE\u05D7\u05D6\u05D9\u05E8 \u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05DE\u05E2\u05D5\u05E6\u05D1\u05EA");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(9);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.editForm.get("counterName")?.invalid && ctx_r2.editForm.get("counterName")?.touched ? 10 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.editForm.get("prefix")?.invalid && ctx_r2.editForm.get("prefix")?.touched ? 20 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("data", ctx_r2.dateFormatOptions)("valuePrimitive", true);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_10_0 = ctx_r2.editForm.get("dateFormat")?.value) === "NONE" ? 27 : tmp_10_0 === "YEAR" ? 28 : tmp_10_0 === "YEAR_MONTH" ? 29 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("seg-on", ctx_r2.editForm.get("outputType")?.value === "NUMERIC");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg-on", ctx_r2.editForm.get("outputType")?.value === "STRING");
  }
}
function SettingsComponent_Conditional_18_Conditional_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 55);
    \u0275\u0275text(2, "\u05D8\u05D5\u05D5\u05D7 \u05E2\u05E8\u05DB\u05D9\u05DD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 56)(4, "label", 57);
    \u0275\u0275text(5, "\u05E6\u05E2\u05D3 (Step)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 68);
    \u0275\u0275element(7, "kendo-numerictextbox", 76);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(8, "small", 73);
    \u0275\u0275text(9, "\u05D2\u05D5\u05D3\u05DC \u05D4\u05D3\u05D9\u05DC\u05D5\u05D2 \u05D1\u05D9\u05DF \u05DE\u05E1\u05E4\u05E8 \u05DC\u05DE\u05E1\u05E4\u05E8 (\u05D1\u05D3\u05E8\u05DA \u05DB\u05DC\u05DC 1)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 56)(11, "label", 57);
    \u0275\u0275text(12, "\u05E2\u05E8\u05DA \u05D4\u05EA\u05D7\u05DC\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 68);
    \u0275\u0275element(14, "kendo-numerictextbox", 77);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(15, "small", 73);
    \u0275\u0275text(16, "\u05D4\u05DE\u05E1\u05E4\u05E8 \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05E9\u05D9\u05D5\u05E7\u05E6\u05D4");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 56)(18, "label", 57);
    \u0275\u0275text(19, "\u05E2\u05E8\u05DA \u05DE\u05E7\u05E1\u05D9\u05DE\u05DC\u05D9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 68);
    \u0275\u0275element(21, "kendo-numerictextbox", 78);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(22, "small", 73);
    \u0275\u0275text(23, "\u05DC\u05D0\u05D7\u05E8 \u05D4\u05D2\u05E2\u05D4 \u05DC\u05E2\u05E8\u05DA \u05D6\u05D4 \u2014 \u05D4\u05DE\u05D5\u05E0\u05D4 \u05D9\u05E0\u05E2\u05DC \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275property("min", 1)("decimals", 0)("format", "n0");
    \u0275\u0275control();
    \u0275\u0275advance(7);
    \u0275\u0275property("min", 0)("decimals", 0)("format", "n0");
    \u0275\u0275control();
    \u0275\u0275advance(7);
    \u0275\u0275property("min", 1)("decimals", 0)("format", "n0");
    \u0275\u0275control();
  }
}
function SettingsComponent_Conditional_18_Conditional_1_Conditional_18_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u05D4\u05DE\u05D5\u05E0\u05D4 \u05DC\u05D0 \u05DE\u05EA\u05D0\u05E4\u05E1 \u05DC\u05E2\u05D5\u05DC\u05DD ");
  }
}
function SettingsComponent_Conditional_18_Conditional_1_Conditional_18_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u05D4\u05DE\u05D5\u05E0\u05D4 \u05DE\u05EA\u05D0\u05E4\u05E1 \u05D1\u05EA\u05D7\u05D9\u05DC\u05EA \u05DB\u05DC \u05E9\u05E0\u05D4 ");
  }
}
function SettingsComponent_Conditional_18_Conditional_1_Conditional_18_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u05D4\u05DE\u05D5\u05E0\u05D4 \u05DE\u05EA\u05D0\u05E4\u05E1 \u05D1\u05EA\u05D7\u05D9\u05DC\u05EA \u05DB\u05DC \u05D7\u05D5\u05D3\u05E9 ");
  }
}
function SettingsComponent_Conditional_18_Conditional_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 55);
    \u0275\u0275text(2, "\u05DE\u05D7\u05D6\u05D5\u05E8\u05D9\u05D5\u05EA \u05D0\u05D9\u05E4\u05D5\u05E1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 56)(4, "label", 57);
    \u0275\u0275text(5, "\u05EA\u05E7\u05D5\u05E4\u05EA \u05D0\u05D9\u05E4\u05D5\u05E1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 68);
    \u0275\u0275element(7, "kendo-dropdownlist", 79);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(8, "small", 73);
    \u0275\u0275conditionalCreate(9, SettingsComponent_Conditional_18_Conditional_1_Conditional_18_Case_9_Template, 1, 0)(10, SettingsComponent_Conditional_18_Conditional_1_Conditional_18_Case_10_Template, 1, 0)(11, SettingsComponent_Conditional_18_Conditional_1_Conditional_18_Case_11_Template, 1, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 80)(13, "span", 57);
    \u0275\u0275text(14, "\u05D0\u05D9\u05E4\u05D5\u05E1 \u05D0\u05D7\u05E8\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 60);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275property("data", ctx_r2.resetPeriodOptions)("valuePrimitive", true);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_6_0 = ctx_r2.editForm.get("resetPeriod")?.value) === "NEVER" ? 9 : tmp_6_0 === "ANNUAL" ? 10 : tmp_6_0 === "MONTHLY" ? 11 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(ctx_r2.editingCounter.LastResetDate));
  }
}
function SettingsComponent_Conditional_18_Conditional_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 55);
    \u0275\u0275text(2, "\u05E2\u05E8\u05DB\u05D9\u05DD \u05E0\u05D5\u05DB\u05D7\u05D9\u05D9\u05DD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 80)(4, "span", 57);
    \u0275\u0275text(5, "\u05DE\u05D5\u05E0\u05D4 \u05E8\u05E5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 81);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 80)(9, "span", 57);
    \u0275\u0275text(10, "\u05DE\u05D5\u05E0\u05D4 \u05E9\u05D5\u05D8\u05E3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 82);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 80)(14, "span", 57);
    \u0275\u0275text(15, "\u05E0\u05D5\u05E6\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 60);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 80)(19, "span", 57);
    \u0275\u0275text(20, "\u05E2\u05D5\u05D3\u05DB\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 60);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.editingCounter.RunningValue);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.editingCounter.CurrentValue);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(ctx_r2.editingCounter.CreatedAt));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(ctx_r2.editingCounter.UpdatedAt));
  }
}
function SettingsComponent_Conditional_18_Conditional_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 55);
    \u0275\u0275text(2, "\u05E0\u05E2\u05D9\u05DC\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 56)(4, "label", 57);
    \u0275\u0275text(5, "\u05DE\u05E6\u05D1 \u05DE\u05D5\u05E0\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 68)(7, "div", 75)(8, "button", 21);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_18_Conditional_1_Conditional_20_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.editForm.get("isLocked")?.setValue(false));
    });
    \u0275\u0275text(9, " \u2713 \u05E4\u05E2\u05D9\u05DC ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 21);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_18_Conditional_1_Conditional_20_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.editForm.get("isLocked")?.setValue(true));
    });
    \u0275\u0275text(11, " \u{1F512} \u05E0\u05E2\u05D5\u05DC ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "small", 73);
    \u0275\u0275text(13, "\u05DE\u05D5\u05E0\u05D4 \u05E0\u05E2\u05D5\u05DC \u05DC\u05D0 \u05E0\u05D9\u05EA\u05DF \u05DC\u05E2\u05E8\u05D9\u05DB\u05D4, \u05D0\u05D9\u05E4\u05D5\u05E1 \u05D0\u05D5 \u05D4\u05E7\u05E6\u05D0\u05EA \u05DE\u05E1\u05E4\u05E8\u05D9\u05DD");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("seg-on", !ctx_r2.editForm.get("isLocked")?.value);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg-off", ctx_r2.editForm.get("isLocked")?.value);
  }
}
function SettingsComponent_Conditional_18_Conditional_1_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-loader", 49);
  }
}
function SettingsComponent_Conditional_18_Conditional_1_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2713 ");
  }
}
function SettingsComponent_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "button", 36);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_18_Conditional_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeEditDialog());
    });
    \u0275\u0275text(3, " \u2190 \u05D7\u05D6\u05E8\u05D4 \u05DC\u05E8\u05E9\u05D9\u05DE\u05D4 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 37)(5, "span", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 39);
    \u0275\u0275text(8, "\u05E2\u05E8\u05D9\u05DB\u05EA \u05DE\u05D5\u05E0\u05D4");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "form", 40)(10, "div", 41)(11, "nav", 42);
    \u0275\u0275repeaterCreate(12, SettingsComponent_Conditional_18_Conditional_1_For_13_Template, 6, 5, "button", 43, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 44);
    \u0275\u0275conditionalCreate(15, SettingsComponent_Conditional_18_Conditional_1_Conditional_15_Template, 37, 8, "div", 45);
    \u0275\u0275conditionalCreate(16, SettingsComponent_Conditional_18_Conditional_1_Conditional_16_Template, 41, 9, "div", 45);
    \u0275\u0275conditionalCreate(17, SettingsComponent_Conditional_18_Conditional_1_Conditional_17_Template, 24, 9, "div", 45);
    \u0275\u0275conditionalCreate(18, SettingsComponent_Conditional_18_Conditional_1_Conditional_18_Template, 17, 4, "div", 45);
    \u0275\u0275conditionalCreate(19, SettingsComponent_Conditional_18_Conditional_1_Conditional_19_Template, 23, 4, "div", 46);
    \u0275\u0275conditionalCreate(20, SettingsComponent_Conditional_18_Conditional_1_Conditional_20_Template, 14, 4, "div", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 47)(22, "button", 48);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_18_Conditional_1_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitEditCounter());
    });
    \u0275\u0275conditionalCreate(23, SettingsComponent_Conditional_18_Conditional_1_Conditional_23_Template, 1, 0, "kendo-loader", 49)(24, SettingsComponent_Conditional_18_Conditional_1_Conditional_24_Template, 1, 0);
    \u0275\u0275text(25, " \u05E9\u05DE\u05D5\u05E8 \u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 50);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_18_Conditional_1_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeEditDialog());
    });
    \u0275\u0275text(27, "\u05D1\u05D9\u05D8\u05D5\u05DC");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.editingCounter.CounterKey);
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r2.editForm);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.editGroups);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.editActiveGroup() === "identity" ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.editActiveGroup() === "basic" ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.editActiveGroup() === "range" ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.editActiveGroup() === "reset" ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.editActiveGroup() === "values" ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.editActiveGroup() === "lock" ? 20 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.editSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.editSaving() ? 23 : 24);
  }
}
function SettingsComponent_Conditional_18_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 85);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_18_Conditional_2_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setLevelFilter("CUSTOMER"));
    });
    \u0275\u0275text(1, "\u05DC\u05E7\u05D5\u05D7 \u05E7\u05E6\u05D4");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r2.levelFilter() === "CUSTOMER");
  }
}
function SettingsComponent_Conditional_18_Conditional_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275element(1, "mat-spinner", 91);
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_Conditional_18_Conditional_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.countersError());
  }
}
function SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r16.CounterID);
  }
}
function SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 109);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("P", c_r17.ProductID);
  }
}
function SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 108);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_5_Conditional_2_Template, 2, 1, "span", 109);
  }
  if (rf & 2) {
    const c_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r17.CounterKey);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r17.ProductID > 0 ? 2 : -1);
  }
}
function SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const c_r18 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", c_r18.CounterName, " ");
  }
}
function SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 108);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r19.Prefix);
  }
}
function SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 110);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r20 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.dateFormatLabel(c_r20.DateFormat));
  }
}
function SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 111);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r21 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", c_r21.StepValue, " / ", c_r21.StartValue, " / ", c_r21.MaxValue);
  }
}
function SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 110);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r22 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.outputTypeLabel(c_r22.OutputType));
  }
}
function SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 110);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r23 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.resetPeriodLabel(c_r23.ResetPeriod));
  }
}
function SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r24 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r24.RunningValue);
  }
}
function SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r25 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r25.CurrentValue);
  }
}
function SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112)(1, "button", 113);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_23_Template_button_click_1_listener() {
      const c_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.toggleExpand(c_r27));
    });
    \u0275\u0275element(2, "i", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 115);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_23_Template_button_click_3_listener() {
      const c_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.lockCounter(c_r27));
    });
    \u0275\u0275element(4, "i", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 116);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_23_Template_button_click_5_listener() {
      const c_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openEditDialog(c_r27));
    });
    \u0275\u0275element(6, "i", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 118);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_23_Template_button_click_7_listener() {
      const c_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.resetCounter(c_r27));
    });
    \u0275\u0275element(8, "i", 119);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r27 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", ctx_r2.isExpanded(c_r27));
    \u0275\u0275property("title", ctx_r2.isExpanded(c_r27) ? "\u05DB\u05D5\u05D5\u05E5" : "\u05E4\u05E8\u05D8\u05D9\u05DD");
    \u0275\u0275advance();
    \u0275\u0275classProp("pi-chevron-down", !ctx_r2.isExpanded(c_r27))("pi-chevron-up", ctx_r2.isExpanded(c_r27));
    \u0275\u0275advance();
    \u0275\u0275classProp("act-lock", !c_r27.IsLocked)("act-unlock", c_r27.IsLocked);
    \u0275\u0275property("title", c_r27.IsLocked ? "\u05E9\u05D7\u05E8\u05E8 \u05E0\u05E2\u05D9\u05DC\u05D4" : "\u05E0\u05E2\u05DC \u05DE\u05D5\u05E0\u05D4");
    \u0275\u0275advance();
    \u0275\u0275classProp("pi-lock", !c_r27.IsLocked)("pi-lock-open", c_r27.IsLocked);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", c_r27.IsLocked);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", c_r27.IsLocked);
  }
}
function SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_24_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r28 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r28.CustomerName);
  }
}
function SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_24_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "\u05DC\u05DC\u05D0 \u05DC\u05E7\u05D5\u05D7");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_24_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r28 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r28.ProductName);
  }
}
function SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_24_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "\u05DC\u05DC\u05D0 \u05DE\u05D5\u05E6\u05E8");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120)(1, "div", 121)(2, "div", 16)(3, "div", 17);
    \u0275\u0275text(4, "\u05D6\u05D9\u05D4\u05D5\u05D9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 122)(6, "span");
    \u0275\u0275text(7, "\u05DE\u05D6\u05D4\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 122)(11, "span");
    \u0275\u0275text(12, "\u05DE\u05E4\u05EA\u05D7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "strong", 123);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 122)(16, "span");
    \u0275\u0275text(17, "\u05E8\u05DE\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 61);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 122)(21, "span");
    \u0275\u0275text(22, "\u05D0\u05E8\u05D2\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 62);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 122)(26, "span");
    \u0275\u0275text(27, "\u05DC\u05E7\u05D5\u05D7");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(28, SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_24_Conditional_28_Template, 2, 1, "span", 63)(29, SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_24_Conditional_29_Template, 2, 0, "span", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 122)(31, "span");
    \u0275\u0275text(32, "\u05DE\u05D5\u05E6\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(33, SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_24_Conditional_33_Template, 2, 1, "span", 65)(34, SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_24_Conditional_34_Template, 2, 0, "span", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 122)(36, "span");
    \u0275\u0275text(37, "\u05E1\u05D8\u05D8\u05D5\u05E1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 61);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 16)(41, "div", 17);
    \u0275\u0275text(42, "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05DE\u05E1\u05E4\u05D5\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 122)(44, "span");
    \u0275\u0275text(45, "\u05EA\u05D7\u05D9\u05DC\u05D9\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "strong", 123);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 122)(49, "span");
    \u0275\u0275text(50, "\u05E4\u05D5\u05E8\u05DE\u05D8 \u05EA\u05D0\u05E8\u05D9\u05DA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "strong");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 122)(54, "span");
    \u0275\u0275text(55, "\u05E1\u05D5\u05D2 \u05E4\u05DC\u05D8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "strong");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 122)(59, "span");
    \u0275\u0275text(60, "\u05E6\u05E2\u05D3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "strong");
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 122)(64, "span");
    \u0275\u0275text(65, "\u05D8\u05D5\u05D5\u05D7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "strong");
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 122)(69, "span");
    \u0275\u0275text(70, "\u05D0\u05D9\u05E4\u05D5\u05E1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "strong");
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(73, "div", 16)(74, "div", 17);
    \u0275\u0275text(75, "\u05E2\u05E8\u05DB\u05D9\u05DD \u05E0\u05D5\u05DB\u05D7\u05D9\u05D9\u05DD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 122)(77, "span");
    \u0275\u0275text(78, "\u05DE\u05D5\u05E0\u05D4 \u05E8\u05E5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "span", 81);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 122)(82, "span");
    \u0275\u0275text(83, "\u05DE\u05D5\u05E0\u05D4 \u05E9\u05D5\u05D8\u05E3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "span", 82);
    \u0275\u0275text(85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 122)(87, "span");
    \u0275\u0275text(88, "\u05D0\u05D9\u05E4\u05D5\u05E1 \u05D0\u05D7\u05E8\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "strong");
    \u0275\u0275text(90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 122)(92, "span");
    \u0275\u0275text(93, "\u05E0\u05D5\u05E6\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "strong");
    \u0275\u0275text(95);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "div", 122)(97, "span");
    \u0275\u0275text(98, "\u05E2\u05D5\u05D3\u05DB\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "strong");
    \u0275\u0275text(100);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const c_r28 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(c_r28.CounterID);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r28.CounterKey);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r2.levelClass(c_r28.CounterLevel));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.levelLabel(c_r28.CounterLevel));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r28.TenantName || "\u05DC\u05DC\u05D0 \u05D0\u05E8\u05D2\u05D5\u05DF");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(c_r28.CustomerID > 0 ? 28 : 29);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(c_r28.ProductID > 0 ? 33 : 34);
    \u0275\u0275advance(5);
    \u0275\u0275classMap(c_r28.IsLocked ? "chip-locked" : "chip-active");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r28.IsLocked ? "\u{1F512} \u05E0\u05E2\u05D5\u05DC" : "\u2713 \u05E4\u05E2\u05D9\u05DC", " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(c_r28.Prefix);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.dateFormatLabel(c_r28.DateFormat));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.outputTypeLabel(c_r28.OutputType));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r28.StepValue);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", c_r28.StartValue, " \u2013 ", c_r28.MaxValue);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.resetPeriodLabel(c_r28.ResetPeriod));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(c_r28.RunningValue);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r28.CurrentValue);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(c_r28.LastResetDate));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(c_r28.CreatedAt));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(c_r28.UpdatedAt));
  }
}
function SettingsComponent_Conditional_18_Conditional_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "kendo-grid", 92);
    \u0275\u0275listener("pageChange", function SettingsComponent_Conditional_18_Conditional_2_Conditional_14_Template_kendo_grid_pageChange_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onCounterPageChange($event));
    })("sortChange", function SettingsComponent_Conditional_18_Conditional_2_Conditional_14_Template_kendo_grid_sortChange_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onCounterSortChange($event));
    });
    \u0275\u0275element(1, "kendo-grid-messages", 93);
    \u0275\u0275elementStart(2, "kendo-grid-column", 94);
    \u0275\u0275template(3, SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_3_Template, 2, 1, "ng-template", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "kendo-grid-column", 96);
    \u0275\u0275template(5, SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_5_Template, 3, 2, "ng-template", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "kendo-grid-column", 97);
    \u0275\u0275template(7, SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_7_Template, 1, 1, "ng-template", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "kendo-grid-column", 98);
    \u0275\u0275template(9, SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_9_Template, 2, 1, "ng-template", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "kendo-grid-column", 99);
    \u0275\u0275template(11, SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_11_Template, 2, 1, "ng-template", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "kendo-grid-column", 100);
    \u0275\u0275template(13, SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_13_Template, 2, 3, "ng-template", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "kendo-grid-column", 101);
    \u0275\u0275template(15, SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_15_Template, 2, 1, "ng-template", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "kendo-grid-column", 102);
    \u0275\u0275template(17, SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_17_Template, 2, 1, "ng-template", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "kendo-grid-column", 103);
    \u0275\u0275template(19, SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_19_Template, 2, 1, "ng-template", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "kendo-grid-column", 104);
    \u0275\u0275template(21, SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_21_Template, 2, 1, "ng-template", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "kendo-grid-column", 105);
    \u0275\u0275template(23, SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_23_Template, 9, 18, "ng-template", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, SettingsComponent_Conditional_18_Conditional_2_Conditional_14_ng_template_24_Template, 101, 23, "ng-template", 106);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("data", \u0275\u0275pureFunction2(27, _c02, ctx_r2.counterPagedData, ctx_r2.counterGridData.length))("skip", ctx_r2.counterSkip)("pageSize", ctx_r2.counterPageSize)("pageable", \u0275\u0275pureFunction1(31, _c2, \u0275\u0275pureFunction0(30, _c12)))("sortable", \u0275\u0275pureFunction0(33, _c3))("sort", ctx_r2.counterSort)("reorderable", true)("resizable", true)("columnMenu", true)("isDetailExpanded", ctx_r2.isDetailExpanded);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 60);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 120);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 160);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 80);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 110);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 120)("sortable", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 90);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 90);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 75)("sortable", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 75)("sortable", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", 110)("sortable", false)("resizable", false)("columnMenu", false);
  }
}
function SettingsComponent_Conditional_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "h2");
    \u0275\u0275text(2, "\u05E0\u05D9\u05D4\u05D5\u05DC \u05DE\u05D5\u05E0\u05D9\u05DD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\u05D4\u05D2\u05D3\u05E8\u05EA \u05E1\u05D3\u05E8\u05D5\u05EA \u05DE\u05E1\u05E4\u05D5\u05E8 \u05DC\u05D7\u05E9\u05D1\u05D5\u05E0\u05D9\u05D5\u05EA, \u05DC\u05D9\u05D3\u05D9\u05DD, \u05D7\u05D5\u05D6\u05D9\u05DD \u05D5\u05E2\u05D5\u05D3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 83)(6, "div", 84)(7, "button", 85);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_18_Conditional_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setLevelFilter("TENANT"));
    });
    \u0275\u0275text(8, "\u05D0\u05E8\u05D2\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, SettingsComponent_Conditional_18_Conditional_2_Conditional_9_Template, 2, 2, "button", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 87);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_18_Conditional_2_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openNewDialog());
    });
    \u0275\u0275text(11, " \u05DE\u05D5\u05E0\u05D4 \u05D7\u05D3\u05E9 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, SettingsComponent_Conditional_18_Conditional_2_Conditional_12_Template, 2, 0, "div", 88);
    \u0275\u0275conditionalCreate(13, SettingsComponent_Conditional_18_Conditional_2_Conditional_13_Template, 2, 1, "div", 89);
    \u0275\u0275conditionalCreate(14, SettingsComponent_Conditional_18_Conditional_2_Conditional_14_Template, 25, 34, "kendo-grid", 90);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("active", ctx_r2.levelFilter() === "TENANT");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.isPlatformAdmin() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", ctx_r2.plusIcon);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.countersLoading() ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.countersLoading() && ctx_r2.countersError() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.countersLoading() && !ctx_r2.countersError() ? 14 : -1);
  }
}
function SettingsComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275conditionalCreate(1, SettingsComponent_Conditional_18_Conditional_1_Template, 28, 10, "div", 34);
    \u0275\u0275conditionalCreate(2, SettingsComponent_Conditional_18_Conditional_2_Template, 15, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.editScreenOpen() && ctx_r2.editingCounter ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.editScreenOpen() ? 2 : -1);
  }
}
function SettingsComponent_Conditional_19_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
}
function SettingsComponent_Conditional_19_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
}
function SettingsComponent_Conditional_19_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-audit-action-types");
  }
}
function SettingsComponent_Conditional_19_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-audit-entity-types");
  }
}
function SettingsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 124)(2, "nav", 125)(3, "button", 9);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_19_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.auditSubGroup.set("action-types"));
    });
    \u0275\u0275elementStart(4, "span", 10);
    \u0275\u0275element(5, "kendo-svg-icon", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 12);
    \u0275\u0275text(7, "\u05E1\u05D5\u05D2\u05D9 \u05E4\u05E2\u05D5\u05DC\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, SettingsComponent_Conditional_19_Conditional_8_Template, 1, 0, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 9);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_19_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.auditSubGroup.set("entity-types"));
    });
    \u0275\u0275elementStart(10, "span", 10);
    \u0275\u0275element(11, "kendo-svg-icon", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 12);
    \u0275\u0275text(13, "\u05E1\u05D5\u05D2\u05D9 \u05D9\u05D9\u05E9\u05D5\u05D9\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, SettingsComponent_Conditional_19_Conditional_14_Template, 1, 0, "span", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 126);
    \u0275\u0275conditionalCreate(16, SettingsComponent_Conditional_19_Conditional_16_Template, 1, 0, "app-audit-action-types");
    \u0275\u0275conditionalCreate(17, SettingsComponent_Conditional_19_Conditional_17_Template, 1, 0, "app-audit-entity-types");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r2.auditSubGroup() === "action-types");
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r2.pencilIcon);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.auditSubGroup() === "action-types" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.auditSubGroup() === "entity-types");
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r2.filterIcon);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.auditSubGroup() === "entity-types" ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.auditSubGroup() === "action-types" ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.auditSubGroup() === "entity-types" ? 17 : -1);
  }
}
function SettingsComponent_Conditional_20_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 54);
  }
}
function SettingsComponent_Conditional_20_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_20_For_5_Template_button_click_0_listener() {
      const g_r32 = \u0275\u0275restoreView(_r31).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.newActiveGroup.set(g_r32.id));
    });
    \u0275\u0275elementStart(1, "span", 52);
    \u0275\u0275element(2, "kendo-svg-icon", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, SettingsComponent_Conditional_20_For_5_Conditional_5_Template, 1, 0, "span", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r32 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.newActiveGroup() === g_r32.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", g_r32.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r32.text);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.newActiveGroup() === g_r32.id ? 5 : -1);
  }
}
function SettingsComponent_Conditional_20_Conditional_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_20_Conditional_7_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.newForm.get("counterLevel")?.setValue("PLATFORM"));
    });
    \u0275\u0275text(1, "\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("seg-on", ctx_r2.newForm.get("counterLevel")?.value === "PLATFORM");
  }
}
function SettingsComponent_Conditional_20_Conditional_7_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 70);
    \u0275\u0275text(1, "\u05D0\u05D5\u05EA\u05D9\u05D5\u05EA \u05D2\u05D3\u05D5\u05DC\u05D5\u05EA, \u05E1\u05E4\u05E8\u05D5\u05EA \u05D5-_ \u05D1\u05DC\u05D1\u05D3");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_Conditional_20_Conditional_7_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 70);
    \u0275\u0275text(1, "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_Conditional_20_Conditional_7_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 70);
    \u0275\u0275text(1, "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_Conditional_20_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 55);
    \u0275\u0275text(2, "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D1\u05E1\u05D9\u05E1\u05D9\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 56)(4, "label", 57);
    \u0275\u0275text(5, "\u05E8\u05DE\u05EA \u05DE\u05D5\u05E0\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 68)(7, "div", 75);
    \u0275\u0275conditionalCreate(8, SettingsComponent_Conditional_20_Conditional_7_Conditional_8_Template, 2, 2, "button", 132);
    \u0275\u0275elementStart(9, "button", 21);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_20_Conditional_7_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.newForm.get("counterLevel")?.setValue("TENANT"));
    });
    \u0275\u0275text(10, "\u05D0\u05E8\u05D2\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 21);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_20_Conditional_7_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.newForm.get("counterLevel")?.setValue("CUSTOMER"));
    });
    \u0275\u0275text(12, "\u05DC\u05E7\u05D5\u05D7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 21);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_20_Conditional_7_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.newForm.get("counterLevel")?.setValue("PRODUCT"));
    });
    \u0275\u0275text(14, "\u05DE\u05D5\u05E6\u05E8");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "small", 133);
    \u0275\u0275text(16, " \u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4 \u2014 \u05DB\u05DC \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \xA0|\xA0 \u05D0\u05E8\u05D2\u05D5\u05DF \u2014 \u05DC\u05E4\u05D9 \u05D8\u05E0\u05E0\u05D8 \xA0|\xA0 \u05DC\u05E7\u05D5\u05D7 \u2014 \u05DC\u05E4\u05D9 \u05DC\u05E7\u05D5\u05D7 \u05E7\u05E6\u05D4 \xA0|\xA0 \u05DE\u05D5\u05E6\u05E8 \u2014 \u05DC\u05E4\u05D9 \u05DE\u05D5\u05E6\u05E8 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 56)(18, "span", 57);
    \u0275\u0275text(19, "\u05D0\u05E8\u05D2\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 68)(21, "span", 62);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 56)(24, "span", 57);
    \u0275\u0275text(25, "\u05DC\u05E7\u05D5\u05D7 (CustomerID)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 68)(27, "span", 134);
    \u0275\u0275text(28, "0 \u2014 \u05DB\u05DC\u05DC\u05D9 (\u05DC\u05DC\u05D0 \u05E7\u05E9\u05E8 \u05DC\u05DC\u05E7\u05D5\u05D7 \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 56)(30, "span", 57);
    \u0275\u0275text(31, "\u05DE\u05D5\u05E6\u05E8 (ProductID)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 68)(33, "span", 134);
    \u0275\u0275text(34, "0 \u2014 \u05DB\u05DC\u05DC\u05D9 (\u05DC\u05DC\u05D0 \u05E7\u05E9\u05E8 \u05DC\u05DE\u05D5\u05E6\u05E8 \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 56)(36, "label", 135);
    \u0275\u0275text(37, "\u05DE\u05E4\u05EA\u05D7 (Key) ");
    \u0275\u0275elementStart(38, "span", 67);
    \u0275\u0275text(39, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 68);
    \u0275\u0275element(41, "input", 136);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(42, "small", 73);
    \u0275\u0275text(43, "\u05D0\u05D5\u05EA\u05D9\u05D5\u05EA \u05D2\u05D3\u05D5\u05DC\u05D5\u05EA, \u05E1\u05E4\u05E8\u05D5\u05EA \u05D5-_ \u05D1\u05DC\u05D1\u05D3. \u05DC\u05D0 \u05E0\u05D9\u05EA\u05DF \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05DC\u05D0\u05D7\u05E8 \u05D9\u05E6\u05D9\u05E8\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(44, SettingsComponent_Conditional_20_Conditional_7_Conditional_44_Template, 2, 0, "small", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 56)(46, "label", 137);
    \u0275\u0275text(47, "\u05E9\u05DD \u05DE\u05D5\u05E0\u05D4 ");
    \u0275\u0275elementStart(48, "span", 67);
    \u0275\u0275text(49, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 68);
    \u0275\u0275element(51, "input", 138);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(52, SettingsComponent_Conditional_20_Conditional_7_Conditional_52_Template, 2, 0, "small", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 56)(54, "label", 139);
    \u0275\u0275text(55, "\u05EA\u05D7\u05D9\u05DC\u05D9\u05EA (Prefix) ");
    \u0275\u0275elementStart(56, "span", 67);
    \u0275\u0275text(57, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 68);
    \u0275\u0275element(59, "input", 140);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(60, "small", 73);
    \u0275\u0275text(61, "\u05EA\u05D7\u05D9\u05DC\u05D9\u05EA \u05E9\u05EA\u05D5\u05E4\u05D9\u05E2 \u05D1\u05E4\u05E0\u05D9 \u05DE\u05E1\u05E4\u05E8 \u05D4\u05DE\u05E1\u05DE\u05DA");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(62, SettingsComponent_Conditional_20_Conditional_7_Conditional_62_Template, 2, 0, "small", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 56)(64, "label", 57);
    \u0275\u0275text(65, "\u05E4\u05D5\u05E8\u05DE\u05D8 \u05EA\u05D0\u05E8\u05D9\u05DA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 68);
    \u0275\u0275element(67, "kendo-dropdownlist", 74);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 56)(69, "label", 57);
    \u0275\u0275text(70, "\u05E1\u05D5\u05D2 \u05E4\u05DC\u05D8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 68)(72, "div", 75)(73, "button", 21);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_20_Conditional_7_Template_button_click_73_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.newForm.get("outputType")?.setValue("NUMERIC"));
    });
    \u0275\u0275text(74, "\u05DE\u05E1\u05E4\u05E8\u05D9 \u2014 42");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "button", 21);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_20_Conditional_7_Template_button_click_75_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.newForm.get("outputType")?.setValue("STRING"));
    });
    \u0275\u0275text(76, "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u2014 INV-2026-000042");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "small", 73);
    \u0275\u0275text(78, "NUMERIC \u05DE\u05D7\u05D6\u05D9\u05E8 \u05DE\u05E1\u05E4\u05E8; STRING \u05DE\u05D7\u05D6\u05D9\u05E8 \u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05DE\u05E2\u05D5\u05E6\u05D1\u05EA");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r2.isPlatformAdmin() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("seg-on", ctx_r2.newForm.get("counterLevel")?.value === "TENANT");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg-on", ctx_r2.newForm.get("counterLevel")?.value === "CUSTOMER");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg-on", ctx_r2.newForm.get("counterLevel")?.value === "PRODUCT");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.auth.user()?.companyName || "\u05DC\u05DC\u05D0 \u05D0\u05E8\u05D2\u05D5\u05DF");
    \u0275\u0275advance(19);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.newForm.get("counterKey")?.invalid && ctx_r2.newForm.get("counterKey")?.touched ? 44 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.newForm.get("counterName")?.invalid && ctx_r2.newForm.get("counterName")?.touched ? 52 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.newForm.get("prefix")?.invalid && ctx_r2.newForm.get("prefix")?.touched ? 62 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("data", ctx_r2.dateFormatOptions)("valuePrimitive", true);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275classProp("seg-on", ctx_r2.newForm.get("outputType")?.value === "NUMERIC");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg-on", ctx_r2.newForm.get("outputType")?.value === "STRING");
  }
}
function SettingsComponent_Conditional_20_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 55);
    \u0275\u0275text(2, "\u05D8\u05D5\u05D5\u05D7 \u05E2\u05E8\u05DB\u05D9\u05DD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 56)(4, "label", 57);
    \u0275\u0275text(5, "\u05E6\u05E2\u05D3 (Step)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 68);
    \u0275\u0275element(7, "kendo-numerictextbox", 76);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(8, "small", 73);
    \u0275\u0275text(9, "\u05D2\u05D5\u05D3\u05DC \u05D4\u05D3\u05D9\u05DC\u05D5\u05D2 \u05D1\u05D9\u05DF \u05DE\u05E1\u05E4\u05E8 \u05DC\u05DE\u05E1\u05E4\u05E8 (\u05D1\u05D3\u05E8\u05DA \u05DB\u05DC\u05DC 1)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 56)(11, "label", 57);
    \u0275\u0275text(12, "\u05E2\u05E8\u05DA \u05D4\u05EA\u05D7\u05DC\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 68);
    \u0275\u0275element(14, "kendo-numerictextbox", 77);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(15, "small", 73);
    \u0275\u0275text(16, "\u05D4\u05DE\u05E1\u05E4\u05E8 \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05E9\u05D9\u05D5\u05E7\u05E6\u05D4");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 56)(18, "label", 57);
    \u0275\u0275text(19, "\u05E2\u05E8\u05DA \u05DE\u05E7\u05E1\u05D9\u05DE\u05DC\u05D9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 68);
    \u0275\u0275element(21, "kendo-numerictextbox", 78);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(22, "small", 73);
    \u0275\u0275text(23, "\u05DC\u05D0\u05D7\u05E8 \u05D4\u05D2\u05E2\u05D4 \u05DC\u05E2\u05E8\u05DA \u05D6\u05D4 \u2014 \u05D4\u05DE\u05D5\u05E0\u05D4 \u05D9\u05E0\u05E2\u05DC \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275property("min", 1)("decimals", 0)("format", "n0");
    \u0275\u0275control();
    \u0275\u0275advance(7);
    \u0275\u0275property("min", 0)("decimals", 0)("format", "n0");
    \u0275\u0275control();
    \u0275\u0275advance(7);
    \u0275\u0275property("min", 1)("decimals", 0)("format", "n0");
    \u0275\u0275control();
  }
}
function SettingsComponent_Conditional_20_Conditional_9_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u05D4\u05DE\u05D5\u05E0\u05D4 \u05DC\u05D0 \u05DE\u05EA\u05D0\u05E4\u05E1 \u05DC\u05E2\u05D5\u05DC\u05DD ");
  }
}
function SettingsComponent_Conditional_20_Conditional_9_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u05D4\u05DE\u05D5\u05E0\u05D4 \u05DE\u05EA\u05D0\u05E4\u05E1 \u05D1\u05EA\u05D7\u05D9\u05DC\u05EA \u05DB\u05DC \u05E9\u05E0\u05D4 ");
  }
}
function SettingsComponent_Conditional_20_Conditional_9_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u05D4\u05DE\u05D5\u05E0\u05D4 \u05DE\u05EA\u05D0\u05E4\u05E1 \u05D1\u05EA\u05D7\u05D9\u05DC\u05EA \u05DB\u05DC \u05D7\u05D5\u05D3\u05E9 ");
  }
}
function SettingsComponent_Conditional_20_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 55);
    \u0275\u0275text(2, "\u05DE\u05D7\u05D6\u05D5\u05E8\u05D9\u05D5\u05EA \u05D0\u05D9\u05E4\u05D5\u05E1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 56)(4, "label", 57);
    \u0275\u0275text(5, "\u05EA\u05E7\u05D5\u05E4\u05EA \u05D0\u05D9\u05E4\u05D5\u05E1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 68);
    \u0275\u0275element(7, "kendo-dropdownlist", 79);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(8, "small", 73);
    \u0275\u0275conditionalCreate(9, SettingsComponent_Conditional_20_Conditional_9_Case_9_Template, 1, 0)(10, SettingsComponent_Conditional_20_Conditional_9_Case_10_Template, 1, 0)(11, SettingsComponent_Conditional_20_Conditional_9_Case_11_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("data", ctx_r2.resetPeriodOptions)("valuePrimitive", true);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_5_0 = ctx_r2.newForm.get("resetPeriod")?.value) === "NEVER" ? 9 : tmp_5_0 === "ANNUAL" ? 10 : tmp_5_0 === "MONTHLY" ? 11 : -1);
  }
}
function SettingsComponent_Conditional_20_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-loader", 49);
  }
}
function SettingsComponent_Conditional_20_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2713 ");
  }
}
function SettingsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "kendo-dialog", 127);
    \u0275\u0275listener("close", function SettingsComponent_Conditional_20_Template_kendo_dialog_close_0_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeNewDialog());
    });
    \u0275\u0275elementStart(1, "form", 128)(2, "div", 129)(3, "nav", 42);
    \u0275\u0275repeaterCreate(4, SettingsComponent_Conditional_20_For_5_Template, 6, 5, "button", 43, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 130);
    \u0275\u0275conditionalCreate(7, SettingsComponent_Conditional_20_Conditional_7_Template, 79, 17, "div", 45);
    \u0275\u0275conditionalCreate(8, SettingsComponent_Conditional_20_Conditional_8_Template, 24, 9, "div", 45);
    \u0275\u0275conditionalCreate(9, SettingsComponent_Conditional_20_Conditional_9_Template, 12, 3, "div", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "kendo-dialog-actions")(11, "div", 131)(12, "button", 48);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_20_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submitNewCounter());
    });
    \u0275\u0275conditionalCreate(13, SettingsComponent_Conditional_20_Conditional_13_Template, 1, 0, "kendo-loader", 49)(14, SettingsComponent_Conditional_20_Conditional_14_Template, 1, 0);
    \u0275\u0275text(15, " \u05E6\u05D5\u05E8 \u05DE\u05D5\u05E0\u05D4 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 50);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_20_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeNewDialog());
    });
    \u0275\u0275text(17, "\u05D1\u05D9\u05D8\u05D5\u05DC");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("width", 800)("minWidth", 600);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.newForm);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.newGroups);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.newActiveGroup() === "basic" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.newActiveGroup() === "range" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.newActiveGroup() === "reset" ? 9 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.newSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.newSaving() ? 13 : 14);
  }
}
var SettingsComponent = class _SettingsComponent {
  theme;
  auth;
  notif;
  counterSvc;
  fb;
  // ── Nav ──────────────────────────────────────────────────
  schemes = COLOR_SCHEMES;
  saving = signal(
    false,
    ...ngDevMode ? [{ debugName: "saving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isAdmin = signal(
    false,
    ...ngDevMode ? [{ debugName: "isAdmin" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isPlatformAdmin = signal(
    false,
    ...ngDevMode ? [{ debugName: "isPlatformAdmin" }] : (
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
  auditSubGroup = signal(
    "action-types",
    ...ngDevMode ? [{ debugName: "auditSubGroup" }] : (
      /* istanbul ignore next */
      []
    )
  );
  groups = [
    { id: "general", text: "\u05DB\u05DC\u05DC\u05D9", icon: gearIcon },
    { id: "security", text: "\u05D0\u05D1\u05D8\u05D7\u05D4", icon: passwordIcon },
    { id: "theme", text: "\u05DE\u05E8\u05D0\u05D4 \u05D5\u05E2\u05D9\u05E6\u05D5\u05D1", icon: paletteIcon },
    { id: "notifications", text: "\u05D4\u05EA\u05E8\u05D0\u05D5\u05EA", icon: bellIcon },
    { id: "organization", text: "\u05D0\u05E8\u05D2\u05D5\u05DF", icon: buildingsIcon },
    { id: "billing", text: "\u05D7\u05D9\u05D5\u05D1 \u05D5\u05DE\u05E0\u05D5\u05D9", icon: walletIcon },
    { id: "counters", text: "\u05DE\u05D5\u05E0\u05D9\u05DD", icon: tableIcon },
    { id: "audit-log", text: "\u05D9\u05D5\u05DE\u05DF \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA", icon: clipboardTextIcon }
  ];
  // ── Counters — רשימה ──────────────────────────────────────
  countersLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "countersLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  countersError = signal(
    "",
    ...ngDevMode ? [{ debugName: "countersError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  counters = signal(
    [],
    ...ngDevMode ? [{ debugName: "counters" }] : (
      /* istanbul ignore next */
      []
    )
  );
  levelFilter = signal(
    "TENANT",
    ...ngDevMode ? [{ debugName: "levelFilter" }] : (
      /* istanbul ignore next */
      []
    )
  );
  counterSkip = 0;
  counterPageSize = 10;
  counterSort = [];
  get counterGridData() {
    return orderBy(this.counters(), this.counterSort);
  }
  get counterPagedData() {
    return this.counterGridData.slice(this.counterSkip, this.counterSkip + this.counterPageSize);
  }
  dateFormatOptions = [
    { text: "\u05DC\u05DC\u05D0", value: "NONE" },
    { text: "\u05E9\u05E0\u05D4", value: "YEAR" },
    { text: "\u05E9\u05E0\u05D4+\u05D7\u05D5\u05D3\u05E9", value: "YEAR_MONTH" }
  ];
  resetPeriodOptions = [
    { text: "\u05DC\u05DC\u05D0 \u05D0\u05D9\u05E4\u05D5\u05E1", value: "NEVER" },
    { text: "\u05E9\u05E0\u05EA\u05D9", value: "ANNUAL" },
    { text: "\u05D7\u05D5\u05D3\u05E9\u05D9", value: "MONTHLY" }
  ];
  outputTypeOptions = [
    { text: "\u05DE\u05E1\u05E4\u05E8\u05D9", value: "NUMERIC" },
    { text: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA", value: "STRING" }
  ];
  plusIcon = plusIcon;
  pencilIcon = pencilIcon;
  lockIcon = lockIcon;
  clipboardTextIcon = clipboardTextIcon;
  filterIcon = filterIcon;
  calendarIcon = calendarIcon;
  chartLineIcon = chartLineIcon;
  editGroups = [
    { id: "identity", text: "\u05E4\u05E8\u05D8\u05D9 \u05D6\u05D9\u05D4\u05D5\u05D9", icon: clipboardTextIcon },
    { id: "basic", text: "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D1\u05E1\u05D9\u05E1\u05D9\u05D5\u05EA", icon: pencilIcon },
    { id: "range", text: "\u05D8\u05D5\u05D5\u05D7 \u05E2\u05E8\u05DB\u05D9\u05DD", icon: filterIcon },
    { id: "reset", text: "\u05DE\u05D7\u05D6\u05D5\u05E8\u05D9\u05D5\u05EA \u05D0\u05D9\u05E4\u05D5\u05E1", icon: calendarIcon },
    { id: "values", text: "\u05E2\u05E8\u05DB\u05D9\u05DD \u05E0\u05D5\u05DB\u05D7\u05D9\u05D9\u05DD", icon: chartLineIcon },
    { id: "lock", text: "\u05E0\u05E2\u05D9\u05DC\u05D4", icon: lockIcon }
  ];
  editActiveGroup = signal(
    "identity",
    ...ngDevMode ? [{ debugName: "editActiveGroup" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editGroupFields = {
    basic: ["counterName", "prefix", "dateFormat", "outputType"],
    range: ["stepValue", "startValue", "maxValue"],
    reset: ["resetPeriod"],
    lock: ["isLocked"]
  };
  // ── Expand ───────────────────────────────────────────────
  expandedKeys = signal(
    /* @__PURE__ */ new Set(),
    ...ngDevMode ? [{ debugName: "expandedKeys" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isDetailExpanded = (args) => this.expandedKeys().has(this.rowKey(args.dataItem));
  // ── New Counter Dialog ───────────────────────────────────
  newDialogOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "newDialogOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  newForm;
  newSaving = signal(
    false,
    ...ngDevMode ? [{ debugName: "newSaving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  newActiveGroup = signal(
    "basic",
    ...ngDevMode ? [{ debugName: "newActiveGroup" }] : (
      /* istanbul ignore next */
      []
    )
  );
  newGroups = [
    { id: "basic", text: "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D1\u05E1\u05D9\u05E1\u05D9\u05D5\u05EA", icon: pencilIcon },
    { id: "range", text: "\u05D8\u05D5\u05D5\u05D7 \u05E2\u05E8\u05DB\u05D9\u05DD", icon: filterIcon },
    { id: "reset", text: "\u05DE\u05D7\u05D6\u05D5\u05E8\u05D9\u05D5\u05EA \u05D0\u05D9\u05E4\u05D5\u05E1", icon: calendarIcon }
  ];
  newGroupFields = {
    basic: ["counterKey", "counterName", "prefix"],
    range: ["stepValue", "startValue", "maxValue"],
    reset: ["resetPeriod"]
  };
  navigateToNewError() {
    for (const [group, fields] of Object.entries(this.newGroupFields)) {
      if (fields.some((f) => this.newForm.get(f)?.invalid)) {
        this.newActiveGroup.set(group);
        return;
      }
    }
  }
  // ── Edit Screen ──────────────────────────────────────────
  editScreenOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "editScreenOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editSaving = signal(
    false,
    ...ngDevMode ? [{ debugName: "editSaving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editingCounter = null;
  editForm;
  constructor(theme, auth, notif, counterSvc, fb) {
    this.theme = theme;
    this.auth = auth;
    this.notif = notif;
    this.counterSvc = counterSvc;
    this.fb = fb;
    const roleId = this.auth.user()?.roleId ?? 3;
    this.isAdmin.set(roleId <= 2);
    this.isPlatformAdmin.set(roleId === 1);
    this.initNewForm();
  }
  // ── Nav ──────────────────────────────────────────────────
  selectGroup(id) {
    this.activeGroup.set(id);
    if (id === "counters")
      this.loadCounters();
  }
  selectScheme(id) {
    this.theme.setScheme(id);
  }
  toggleDark(val) {
    if (val !== this.theme.isDark())
      this.theme.toggleMode();
  }
  saveUser() {
    this.saving.set(true);
    this.theme.saveUserTheme().subscribe({
      next: () => {
        this.saving.set(false);
        this.notify("\u05D4\u05D4\u05E2\u05D3\u05E4\u05D4 \u05D4\u05D0\u05D9\u05E9\u05D9\u05EA \u05E0\u05E9\u05DE\u05E8\u05D4", "success");
      },
      error: () => {
        this.saving.set(false);
        this.notify("\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05E9\u05DE\u05D9\u05E8\u05D4", "error");
      }
    });
  }
  saveOrg() {
    this.saving.set(true);
    this.theme.saveOrgTheme().subscribe({
      next: () => {
        this.saving.set(false);
        this.notify("\u05D1\u05E8\u05D9\u05E8\u05EA \u05D4\u05DE\u05D7\u05D3\u05DC \u05DC\u05D0\u05E8\u05D2\u05D5\u05DF \u05E2\u05D5\u05D3\u05DB\u05E0\u05D4", "success");
      },
      error: () => {
        this.saving.set(false);
        this.notify("\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05E9\u05DE\u05D9\u05E8\u05D4", "error");
      }
    });
  }
  // ── Counters — טעינה ─────────────────────────────────────
  setLevelFilter(level) {
    this.levelFilter.set(level);
    this.loadCounters();
  }
  loadCounters() {
    this.countersLoading.set(true);
    this.countersError.set("");
    this.counterSvc.getAll(this.levelFilter()).subscribe({
      next: (r) => {
        this.counters.set(r.data ?? []);
        this.countersLoading.set(false);
      },
      error: () => {
        this.countersError.set("\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D8\u05E2\u05D9\u05E0\u05EA \u05DE\u05D5\u05E0\u05D9\u05DD");
        this.countersLoading.set(false);
      }
    });
  }
  // ── Expand ───────────────────────────────────────────────
  toggleExpand(c) {
    const k = this.rowKey(c);
    const next = new Set(this.expandedKeys());
    next.has(k) ? next.delete(k) : next.add(k);
    this.expandedKeys.set(next);
  }
  isExpanded(c) {
    return this.expandedKeys().has(this.rowKey(c));
  }
  // ── Lock ─────────────────────────────────────────────────
  lockCounter(c) {
    const newLocked = !c.IsLocked;
    this.counterSvc.lock(c.CounterKey, newLocked, c.CounterLevel, c.CustomerID, c.ProductID).subscribe({
      next: (r) => {
        this.counters.update((list) => list.map((x) => this.rowKey(x) === this.rowKey(c) ? __spreadProps(__spreadValues({}, x), { IsLocked: newLocked }) : x));
        if (this.editingCounter && this.rowKey(this.editingCounter) === this.rowKey(c))
          this.editingCounter = __spreadProps(__spreadValues({}, this.editingCounter), { IsLocked: newLocked });
        this.notify(r.message, "success");
      },
      error: () => this.notify("\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05E0\u05E2\u05D9\u05DC\u05EA \u05DE\u05D5\u05E0\u05D4", "error")
    });
  }
  // ── Reset ────────────────────────────────────────────────
  resetCounter(c) {
    this.counterSvc.reset(c.CounterKey, c.CounterLevel, c.CustomerID, c.ProductID).subscribe({
      next: () => {
        this.counters.update((list) => list.map((x) => this.rowKey(x) === this.rowKey(c) ? __spreadProps(__spreadValues({}, x), { CurrentValue: x.StartValue }) : x));
        this.notify("\u05D4\u05DE\u05D5\u05E0\u05D4 \u05D4\u05E9\u05D5\u05D8\u05E3 \u05D0\u05D5\u05E4\u05E1", "success");
      },
      error: () => this.notify("\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D0\u05D9\u05E4\u05D5\u05E1", "error")
    });
  }
  // ── New Counter Dialog ───────────────────────────────────
  initNewForm() {
    this.newForm = this.fb.group({
      counterLevel: ["TENANT"],
      customerID: [0, [Validators.required, Validators.min(0)]],
      productID: [0, [Validators.required, Validators.min(0)]],
      counterKey: ["", [Validators.required, Validators.pattern(/^[A-Z0-9_]+$/)]],
      counterName: ["", Validators.required],
      prefix: ["", Validators.required],
      dateFormat: ["NONE"],
      stepValue: [1, Validators.min(1)],
      startValue: [1, Validators.min(0)],
      maxValue: [999999, Validators.min(1)],
      outputType: ["NUMERIC"],
      resetPeriod: ["NEVER"]
    });
  }
  openNewDialog() {
    this.initNewForm();
    this.newActiveGroup.set("basic");
    if (this.isPlatformAdmin())
      this.newForm.get("counterLevel")?.setValue("TENANT");
    this.newDialogOpen.set(true);
  }
  closeNewDialog() {
    this.newDialogOpen.set(false);
  }
  submitNewCounter() {
    if (this.newForm.invalid) {
      this.newForm.markAllAsTouched();
      this.navigateToNewError();
      return;
    }
    this.newSaving.set(true);
    this.counterSvc.create(this.newForm.value).subscribe({
      next: () => {
        this.newSaving.set(false);
        this.newDialogOpen.set(false);
        this.loadCounters();
        this.notify("\u05D4\u05DE\u05D5\u05E0\u05D4 \u05E0\u05D5\u05E6\u05E8 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4", "success");
      },
      error: (err) => {
        this.newSaving.set(false);
        this.notify(err?.error?.message ?? "\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D9\u05E6\u05D9\u05E8\u05EA \u05DE\u05D5\u05E0\u05D4", "error");
      }
    });
  }
  // ── Edit Screen ──────────────────────────────────────────
  navigateToEditError() {
    for (const [group, fields] of Object.entries(this.editGroupFields)) {
      if (fields.some((f) => this.editForm.get(f)?.invalid)) {
        this.editActiveGroup.set(group);
        return;
      }
    }
  }
  openEditDialog(c) {
    this.editingCounter = c;
    this.editActiveGroup.set("identity");
    this.editForm = this.fb.group({
      counterName: [c.CounterName, Validators.required],
      prefix: [c.Prefix, Validators.required],
      dateFormat: [c.DateFormat],
      stepValue: [c.StepValue, [Validators.required, Validators.min(1)]],
      startValue: [c.StartValue, [Validators.required, Validators.min(0)]],
      maxValue: [c.MaxValue, [Validators.required, Validators.min(1)]],
      outputType: [c.OutputType],
      resetPeriod: [c.ResetPeriod],
      isLocked: [c.IsLocked]
    });
    this.editScreenOpen.set(true);
  }
  closeEditDialog() {
    this.editScreenOpen.set(false);
    this.editingCounter = null;
  }
  submitEditCounter() {
    if (!this.editingCounter || this.editForm.invalid) {
      this.editForm.markAllAsTouched();
      this.navigateToEditError();
      return;
    }
    this.editSaving.set(true);
    const c = this.editingCounter;
    const vals = this.editForm.value;
    this.counterSvc.update(c.CounterKey, {
      customerID: c.CustomerID,
      productID: c.ProductID,
      counterLevel: c.CounterLevel,
      counterName: vals.counterName,
      prefix: vals.prefix,
      dateFormat: vals.dateFormat,
      textPrefix: "",
      stepValue: vals.stepValue,
      startValue: vals.startValue,
      maxValue: vals.maxValue,
      outputType: vals.outputType,
      resetPeriod: vals.resetPeriod
    }).subscribe({
      next: () => {
        const lockChanged = vals.isLocked !== c.IsLocked;
        const finish = () => {
          this.editSaving.set(false);
          this.editScreenOpen.set(false);
          this.editingCounter = null;
          this.loadCounters();
          this.notify("\u05D4\u05DE\u05D5\u05E0\u05D4 \u05E2\u05D5\u05D3\u05DB\u05DF \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4", "success");
        };
        if (lockChanged)
          this.counterSvc.lock(c.CounterKey, vals.isLocked, c.CounterLevel, c.CustomerID, c.ProductID).subscribe({ next: finish, error: finish });
        else
          finish();
      },
      error: (err) => {
        this.editSaving.set(false);
        this.notify(err?.error?.message ?? "\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05E2\u05D3\u05DB\u05D5\u05DF \u05DE\u05D5\u05E0\u05D4", "error");
      }
    });
  }
  // ── Helpers ───────────────────────────────────────────────
  levelLabel(level) {
    return { PLATFORM: "\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4", TENANT: "\u05D0\u05E8\u05D2\u05D5\u05DF", CUSTOMER: "\u05DC\u05E7\u05D5\u05D7", PRODUCT: "\u05DE\u05D5\u05E6\u05E8" }[level] ?? level;
  }
  levelClass(level) {
    return { PLATFORM: "chip-platform", TENANT: "chip-tenant", CUSTOMER: "chip-customer", PRODUCT: "chip-product" }[level] ?? "";
  }
  outputTypeLabel(v) {
    return v === "STRING" ? "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA" : "\u05DE\u05E1\u05E4\u05E8\u05D9";
  }
  resetPeriodLabel(v) {
    return { NEVER: "\u05DC\u05DC\u05D0", ANNUAL: "\u05E9\u05E0\u05EA\u05D9", MONTHLY: "\u05D7\u05D5\u05D3\u05E9\u05D9" }[v] ?? v;
  }
  dateFormatLabel(v) {
    return { NONE: "\u05DC\u05DC\u05D0", YEAR: "\u05E9\u05E0\u05D4", YEAR_MONTH: "\u05E9\u05E0\u05D4+\u05D7\u05D5\u05D3\u05E9", TEXT: "\u05D8\u05E7\u05E1\u05D8" }[v] ?? v;
  }
  formatDate(val) {
    if (!val || val.startsWith("1900") || val.startsWith("1899"))
      return "\u2014";
    return new Date(val).toLocaleDateString("he-IL", { year: "numeric", month: "2-digit", day: "2-digit" });
  }
  onCounterPageChange(e) {
    this.counterSkip = e.skip;
    this.counterPageSize = e.take;
  }
  onCounterSortChange(s) {
    this.counterSort = s;
  }
  rowKey(c) {
    return `${c.TenantID}_${c.CustomerID}_${c.ProductID}_${c.CounterKey}`;
  }
  notify(msg, style2) {
    this.notif.show({
      content: msg,
      closable: true,
      type: { style: style2, icon: true },
      animation: { type: "slide", duration: 300 },
      position: { horizontal: "center", vertical: "top" }
    });
  }
  static \u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsComponent)(\u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(CounterService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], features: [\u0275\u0275ProvidersFeature([NotificationService])], decls: 21, vars: 9, consts: [[1, "settings-page"], [1, "page-header"], [1, "settings-layout"], [1, "settings-nav"], [1, "nav-item", 3, "active"], [1, "settings-content"], [1, "content-section"], [1, "content-section", "content-section--wide"], ["title", "\u05DE\u05D5\u05E0\u05D4 \u05D7\u05D3\u05E9", 3, "width", "minWidth"], [1, "nav-item", 3, "click"], [1, "nav-icon"], [3, "icon"], [1, "nav-text"], [1, "nav-indicator"], [1, "section-header"], [1, "theme-cards-grid"], [1, "setting-card"], [1, "setting-card-title"], [1, "scheme-grid"], [1, "scheme-tile", 3, "active"], [1, "seg-ctrl", 2, "margin-bottom", "12px"], ["type", "button", 1, "seg-btn", 3, "click"], [1, "setting-card-desc"], [1, "setting-actions"], ["kendoButton", "", "themeColor", "primary", 1, "btn-save", 3, "click", "disabled"], ["type", "pulsing", "size", "small"], ["kendoButton", "", "fillMode", "outline", 3, "disabled"], [1, "scheme-tile", 3, "click"], [1, "scheme-swatch"], [1, "scheme-check"], [1, "scheme-label"], ["kendoButton", "", "fillMode", "outline", 3, "click", "disabled"], [1, "setting-card", "coming-soon-card"], [1, "coming-soon-badge"], [1, "edit-screen"], [1, "edit-screen-header"], [1, "edit-back-btn", 3, "click"], [1, "edit-screen-title"], [1, "edit-screen-key"], [1, "edit-screen-sub"], ["novalidate", "", 1, "edit-screen-body", 3, "formGroup"], [1, "edit-screen-layout"], [1, "edit-screen-nav"], ["type", "button", 1, "edit-nav-item", 3, "active"], [1, "edit-screen-content"], [1, "ef-card"], [1, "ef-card", "ef-card--info"], [1, "edit-screen-footer"], [1, "btn-save", 3, "click", "disabled"], ["type", "pulsing", "themeColor", "secondary", "size", "small"], [1, "btn-cancel", 3, "click"], ["type", "button", 1, "edit-nav-item", 3, "click"], [1, "edit-nav-icon"], [1, "edit-nav-text"], [1, "edit-nav-indicator"], [1, "ef-card-title"], [1, "ef-row"], [1, "ef-label"], [1, "ef-value", "ef-mono"], [1, "ef-value", "ef-mono", "ef-bold"], [1, "ef-value"], [1, "chip"], [1, "chip", "chip-tenant"], [1, "chip", "chip-customer"], [2, "color", "var(--sf-text-muted)"], [1, "chip", "chip-product"], ["for", "ef-name", 1, "ef-label"], [1, "req"], [1, "ef-control"], ["id", "ef-name", "kendoTextBox", "", "formControlName", "counterName", "placeholder", "\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: \u05D7\u05E9\u05D1\u05D5\u05E0\u05D9\u05D5\u05EA \u05DE\u05E1"], [1, "err"], ["for", "ef-prefix", 1, "ef-label"], ["id", "ef-prefix", "kendoTextBox", "", "formControlName", "prefix", "placeholder", "INV / LEAD / ORD", 2, "font-family", "'Share Tech Mono',monospace", "text-transform", "uppercase"], [1, "ef-hint"], ["formControlName", "dateFormat", "textField", "text", "valueField", "value", 1, "ef-dropdown", 3, "data", "valuePrimitive"], [1, "seg-ctrl"], ["formControlName", "stepValue", 2, "max-width", "140px", 3, "min", "decimals", "format"], ["formControlName", "startValue", 2, "max-width", "140px", 3, "min", "decimals", "format"], ["formControlName", "maxValue", 2, "max-width", "140px", 3, "min", "decimals", "format"], ["formControlName", "resetPeriod", "textField", "text", "valueField", "value", 1, "ef-dropdown", 3, "data", "valuePrimitive"], [1, "ef-row", "ef-row--readonly"], [1, "counter-badge", "counter-badge--running"], [1, "counter-badge", "counter-badge--current"], [1, "counters-toolbar"], [1, "level-filter"], [1, "level-btn", 3, "click"], [1, "level-btn", 3, "active"], ["kendoButton", "", "themeColor", "primary", 3, "click", "svgIcon"], [1, "state-box"], [1, "state-box", "error"], ["scrollable", "none", 1, "counters-grid", 3, "data", "skip", "pageSize", "pageable", "sortable", "sort", "reorderable", "resizable", "columnMenu", "isDetailExpanded"], ["diameter", "32"], ["scrollable", "none", 1, "counters-grid", 3, "pageChange", "sortChange", "data", "skip", "pageSize", "pageable", "sortable", "sort", "reorderable", "resizable", "columnMenu", "isDetailExpanded"], ["pagerItemsPerPage", "\u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3", "pagerOf", "\u05DE\u05EA\u05D5\u05DA", "pagerItems", "\u05E8\u05E9\u05D5\u05DE\u05D5\u05EA", "noRecords", "\u05D0\u05D9\u05DF \u05DE\u05D5\u05E0\u05D9\u05DD \u05DE\u05D5\u05D2\u05D3\u05E8\u05D9\u05DD", "loading", "\u05D8\u05D5\u05E2\u05DF...", "columnMenuFilter", "\u05E1\u05E0\u05DF", "columnMenuSort", "\u05DE\u05D9\u05D5\u05DF", "columnMenuColumns", "\u05E2\u05DE\u05D5\u05D3\u05D5\u05EA", "columnMenuSortAscending", "\u05E2\u05D5\u05DC\u05D4", "columnMenuSortDescending", "\u05D9\u05D5\u05E8\u05D3"], ["field", "CounterID", "title", "#", 3, "width"], ["kendoGridCellTemplate", ""], ["field", "CounterKey", "title", "\u05DE\u05E4\u05EA\u05D7", 3, "width"], ["field", "CounterName", "title", "\u05E9\u05DD \u05DE\u05D5\u05E0\u05D4", 3, "width"], ["field", "Prefix", "title", "\u05EA\u05D7\u05D9\u05DC\u05D9\u05EA", 3, "width"], ["field", "DateFormat", "title", "\u05E4\u05D5\u05E8\u05DE\u05D8", 3, "width"], ["title", "\u05E6\u05E2\u05D3 / \u05D4\u05EA\u05D7' / \u05DE\u05E7\u05E1", 3, "width", "sortable"], ["field", "OutputType", "title", "\u05E4\u05DC\u05D8", 3, "width"], ["field", "ResetPeriod", "title", "\u05D0\u05D9\u05E4\u05D5\u05E1", 3, "width"], ["field", "RunningValue", "title", "\u05E8\u05E5", 3, "width", "sortable"], ["field", "CurrentValue", "title", "\u05E9\u05D5\u05D8\u05E3", 3, "width", "sortable"], ["title", "", 3, "width", "sortable", "resizable", "columnMenu"], ["kendoGridDetailTemplate", ""], [1, "cell-id"], [1, "cell-key"], [1, "chip", "chip-product", 2, "font-size", ".65rem", "margin-right", "4px"], [1, "cell-label"], [1, "cell-range"], [1, "row-actions"], [1, "act-btn", "act-expand", 3, "click", "title"], [1, "pi"], [1, "act-btn", 3, "click", "title"], ["title", "\u05E2\u05E8\u05D9\u05DB\u05D4", 1, "act-btn", "act-edit", 3, "click", "disabled"], [1, "pi", "pi-pencil"], ["title", "\u05D0\u05E4\u05E1 \u05DE\u05D5\u05E0\u05D4 \u05E9\u05D5\u05D8\u05E3", 1, "act-btn", "act-reset", 3, "click", "disabled"], [1, "pi", "pi-refresh"], [1, "counter-detail"], [1, "detail-cards"], [1, "detail-row"], [1, "mono"], [1, "audit-log-layout"], [1, "audit-sub-nav"], [1, "audit-sub-content"], ["title", "\u05DE\u05D5\u05E0\u05D4 \u05D7\u05D3\u05E9", 3, "close", "width", "minWidth"], ["novalidate", "", 3, "formGroup"], [1, "new-dialog-layout"], [1, "new-dialog-content"], [1, "dialog-footer"], ["type", "button", 1, "seg-btn", 3, "seg-on"], [1, "ef-hint", 2, "margin-top", "6px"], [1, "ef-value", 2, "color", "var(--sf-text-muted)"], ["for", "nf-key", 1, "ef-label"], ["id", "nf-key", "kendoTextBox", "", "formControlName", "counterKey", "placeholder", "INVOICE / LEAD / ORDER", 2, "text-transform", "uppercase", "font-family", "'Share Tech Mono',monospace"], ["for", "nf-name", 1, "ef-label"], ["id", "nf-name", "kendoTextBox", "", "formControlName", "counterName", "placeholder", "\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: \u05D7\u05E9\u05D1\u05D5\u05E0\u05D9\u05D5\u05EA"], ["for", "nf-prefix", 1, "ef-label"], ["id", "nf-prefix", "kendoTextBox", "", "formControlName", "prefix", "placeholder", "INV / LEAD / ORD", 2, "text-transform", "uppercase", "font-family", "'Share Tech Mono',monospace"]], template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275text(4, "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "\u05E0\u05D9\u05D4\u05D5\u05DC \u05D4\u05E2\u05D3\u05E4\u05D5\u05EA \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 2)(8, "nav", 3);
      \u0275\u0275repeaterCreate(9, SettingsComponent_For_10_Template, 6, 5, "button", 4, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "main", 5);
      \u0275\u0275conditionalCreate(12, SettingsComponent_Conditional_12_Template, 29, 7, "div", 6);
      \u0275\u0275conditionalCreate(13, SettingsComponent_Conditional_13_Template, 11, 0, "div", 6);
      \u0275\u0275conditionalCreate(14, SettingsComponent_Conditional_14_Template, 11, 0, "div", 6);
      \u0275\u0275conditionalCreate(15, SettingsComponent_Conditional_15_Template, 11, 0, "div", 6);
      \u0275\u0275conditionalCreate(16, SettingsComponent_Conditional_16_Template, 11, 0, "div", 6);
      \u0275\u0275conditionalCreate(17, SettingsComponent_Conditional_17_Template, 11, 0, "div", 6);
      \u0275\u0275conditionalCreate(18, SettingsComponent_Conditional_18_Template, 3, 2, "div", 7);
      \u0275\u0275conditionalCreate(19, SettingsComponent_Conditional_19_Template, 18, 10, "div", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(20, SettingsComponent_Conditional_20_Template, 18, 8, "kendo-dialog", 8);
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.groups);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.activeGroup() === "theme" ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeGroup() === "general" ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeGroup() === "security" ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeGroup() === "notifications" ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeGroup() === "organization" ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeGroup() === "billing" ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeGroup() === "counters" ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeGroup() === "audit-log" ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.newDialogOpen() ? 20 : -1);
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
    MenuModule,
    SwitchModule,
    TextBoxModule,
    TextBoxDirective,
    NumericTextBoxModule,
    NumericTextBoxComponent,
    DropDownListModule,
    DropDownListComponent,
    ButtonModule,
    ButtonComponent,
    IndicatorsModule,
    LoaderComponent,
    NotificationModule,
    IconsModule,
    SVGIconComponent,
    GridModule,
    GridComponent,
    CustomMessagesComponent,
    ColumnComponent,
    DetailTemplateDirective,
    CellTemplateDirective,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    DialogModule,
    DialogComponent,
    DialogActionsComponent,
    AuditActionTypesComponent,
    AuditEntityTypesComponent
  ], styles: ['@charset "UTF-8";\n\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.settings-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background: var(--sf-bg);\n}\n.page-header[_ngcontent-%COMP%] {\n  padding: 20px 32px 16px;\n  border-bottom: none;\n  background: var(--sf-bg);\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--sf-text-muted);\n  margin: 0;\n}\n.settings-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  min-height: 0;\n  gap: 0;\n  margin: 0 24px 24px;\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);\n}\n.settings-nav[_ngcontent-%COMP%] {\n  width: 220px;\n  flex-shrink: 0;\n  border-inline-end: 1px solid var(--sf-border);\n  background: var(--sf-bg-card);\n  padding: 16px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border: none;\n  border-radius: 10px;\n  background: transparent;\n  cursor: pointer;\n  width: 100%;\n  text-align: right;\n  color: var(--sf-text-secondary);\n  font-size: 0.875rem;\n  font-weight: 500;\n  position: relative;\n  transition: background 0.15s, color 0.15s;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: var(--sf-primary-light, rgba(13, 71, 255, 0.08));\n  color: var(--sf-primary);\n  font-weight: 600;\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  color: var(--sf-primary);\n}\n.nav-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: var(--sf-bg);\n  color: var(--sf-text-muted);\n  flex-shrink: 0;\n  transition: background 0.15s, color 0.15s;\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  background: var(--sf-primary-light, rgba(13, 71, 255, 0.1));\n  color: var(--sf-primary);\n}\n.nav-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nav-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-end: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 20px;\n  border-radius: 2px 0 0 2px;\n  background: var(--sf-primary);\n}\n.settings-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: 32px;\n  overflow-y: auto;\n}\n.content-section[_ngcontent-%COMP%] {\n  max-width: 860px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0 0 4px;\n}\n.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--sf-text-muted);\n  margin: 0;\n}\n.setting-card[_ngcontent-%COMP%] {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 14px;\n  padding: 24px;\n  transition: box-shadow 0.2s;\n}\n.setting-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n}\n.setting-card-title[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--sf-text-muted);\n  margin-bottom: 14px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid var(--sf-border);\n}\n.setting-card-desc[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--sf-text-secondary);\n}\n.setting-card-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.theme-cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  align-items: stretch;\n}\n.theme-cards-grid[_ngcontent-%COMP%]   .setting-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.scheme-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 10px;\n}\n.scheme-tile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 12px 12px;\n  border: 2px solid var(--sf-border);\n  border-radius: 12px;\n  background: var(--sf-bg);\n  cursor: pointer;\n  transition:\n    border-color 0.15s,\n    box-shadow 0.15s,\n    transform 0.1s;\n}\n.scheme-tile[_ngcontent-%COMP%]:hover {\n  border-color: var(--sf-primary);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n}\n.scheme-tile.active[_ngcontent-%COMP%] {\n  border-color: var(--sf-primary);\n  background: var(--sf-primary-light, rgba(13, 71, 255, 0.06));\n  box-shadow: 0 0 0 3px rgba(13, 71, 255, 0.12);\n}\n.scheme-swatch[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.scheme-check[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 0.9rem;\n  font-weight: 800;\n  line-height: 1;\n}\n.scheme-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 500;\n  color: var(--sf-text-secondary);\n}\n.setting-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn-save[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #f97316;\n  color: #fff;\n  border: none;\n  border-radius: 9px;\n  padding: 10px 22px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s, box-shadow 0.15s;\n  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.3);\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #ea6c0a;\n  box-shadow: 0 4px 14px rgba(249, 115, 22, 0.4);\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.btn-save[_ngcontent-%COMP%]   kendo-loader[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.coming-soon-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  min-height: 180px;\n  border-style: dashed;\n}\n.coming-soon-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--sf-text-muted);\n  font-size: 0.9rem;\n  margin: 0;\n}\n.coming-soon-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background:\n    linear-gradient(\n      135deg,\n      var(--sf-primary) 0%,\n      var(--sf-accent, #7c3aed) 100%);\n  color: #fff;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  padding: 4px 12px;\n  border-radius: 20px;\n  text-transform: uppercase;\n}\n.content-section--wide[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.counters-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.level-filter[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n  align-self: flex-start;\n}\n.level-btn[_ngcontent-%COMP%] {\n  padding: 7px 20px;\n  font-size: 0.82rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  border: none;\n  background: var(--sf-bg-card);\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.level-btn[_ngcontent-%COMP%]    + .level-btn[_ngcontent-%COMP%] {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.level-btn[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.level-btn.active[_ngcontent-%COMP%] {\n  background: var(--sf-primary);\n  color: #fff;\n  font-weight: 600;\n}\n.state-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 48px;\n  color: var(--sf-text-secondary);\n}\n.state-box.error[_ngcontent-%COMP%] {\n  color: var(--sf-danger);\n}\n[_nghost-%COMP%]     .counters-grid {\n  border-radius: 10px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n[_nghost-%COMP%]     .counters-grid .k-grid-header th.k-header {\n  background: var(--sf-grid-hd-bg) !important;\n  color: var(--sf-grid-hd-color) !important;\n  font-weight: 700 !important;\n  font-size: 0.78rem !important;\n  text-align: right !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n}\n[_nghost-%COMP%]     .counters-grid .k-grid-header {\n  background: var(--sf-grid-hd-bg) !important;\n}\n[_nghost-%COMP%]     .counters-grid td.k-table-td {\n  text-align: right !important;\n  vertical-align: middle !important;\n  border-color: var(--sf-border) !important;\n  font-size: 0.875rem;\n  background: var(--sf-bg-card);\n  direction: rtl;\n  padding: 5px 8px !important;\n}\n[_nghost-%COMP%]     .counters-grid tr.k-table-row:hover td {\n  background: var(--sf-bg-hover) !important;\n}\n[_nghost-%COMP%]     .counters-grid .k-pager {\n  border-top: 1px solid var(--sf-border);\n  background: var(--sf-bg);\n  direction: rtl;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  font-size: 0.82rem;\n}\n[_nghost-%COMP%]     {\n}\n[_nghost-%COMP%]     .counters-grid .k-hierarchy-cell, \n[_nghost-%COMP%]     .counters-grid col.k-hierarchy-col {\n  display: none !important;\n  width: 0 !important;\n  padding: 0 !important;\n}\n[_nghost-%COMP%]     {\n}\n[_nghost-%COMP%]     .edit-screen-content .k-input-inner, \n[_nghost-%COMP%]     .new-dialog-content .k-input-inner {\n  direction: rtl;\n  text-align: right;\n}\n[_nghost-%COMP%]     .edit-screen-content .k-dropdownlist, \n[_nghost-%COMP%]     .edit-screen-content .k-dropdown-wrap, \n[_nghost-%COMP%]     .new-dialog-content .k-dropdownlist, \n[_nghost-%COMP%]     .new-dialog-content .k-dropdown-wrap {\n  direction: rtl;\n}\n[_nghost-%COMP%]     .edit-screen-content .k-list-item, \n[_nghost-%COMP%]     .new-dialog-content .k-list-item {\n  direction: rtl;\n  text-align: right;\n}\n[_nghost-%COMP%]     .edit-screen-content .k-numerictextbox .k-input-inner, \n[_nghost-%COMP%]     .new-dialog-content .k-numerictextbox .k-input-inner {\n  direction: ltr;\n  text-align: left;\n}\n.cell-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid transparent;\n  border-radius: 5px;\n  padding: 4px 7px;\n  font-size: 0.82rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  background: transparent;\n  color: var(--sf-text);\n  direction: rtl;\n  transition: border-color 0.15s, background 0.15s;\n}\n.cell-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--sf-border-focus);\n  background: var(--sf-bg);\n  box-shadow: 0 0 0 2px rgba(13, 71, 255, 0.1);\n}\n.cell-input--mono[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  letter-spacing: 0.03em;\n}\n.cell-input--num[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n.cell-select[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid transparent;\n  border-radius: 5px;\n  padding: 4px 7px;\n  font-size: 0.82rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  background: transparent;\n  color: var(--sf-text);\n  cursor: pointer;\n}\n.cell-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--sf-border-focus);\n  background: var(--sf-bg);\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.chip-platform[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  color: #7c3aed;\n}\n.chip-tenant[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #3b82f6;\n}\n.chip-customer[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.chip-product[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  color: #ea580c;\n}\n.counter-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 44px;\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.counter-badge--running[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.counter-badge--current[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--sf-text-muted);\n  font-size: 0.85rem;\n}\n.cell-id[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n  color: var(--sf-text-muted);\n}\n.cell-key[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--sf-text);\n  letter-spacing: 0.03em;\n}\n.cell-date[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--sf-text-secondary);\n}\n.row-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.act-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n  padding: 0;\n}\n.act-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.act-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.act-expand[_ngcontent-%COMP%] {\n  color: var(--sf-text-secondary);\n}\n.act-expand[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-primary);\n}\n.act-lock[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.act-lock[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.act-unlock[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.act-unlock[_ngcontent-%COMP%]:hover {\n  background: #f0fdf4;\n}\n.act-edit[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.act-edit[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n}\n.act-save[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-weight: 700;\n}\n.act-save[_ngcontent-%COMP%]:hover {\n  background: #f0fdf4;\n}\n.act-reset[_ngcontent-%COMP%] {\n  color: var(--sf-text-secondary);\n}\n.act-reset[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-primary);\n}\n.counter-detail[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  background: var(--sf-bg);\n  border-top: 1px solid var(--sf-border);\n  direction: rtl;\n}\n.detail-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.detail-cards[_ngcontent-%COMP%]   .setting-card[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.detail-cards[_ngcontent-%COMP%]   .setting-card[_ngcontent-%COMP%]:hover {\n  box-shadow: none;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 5px 0;\n  border-bottom: 1px solid var(--sf-border);\n  font-size: 0.82rem;\n}\n.detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: var(--sf-text-secondary);\n}\n.detail-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--sf-text);\n  font-weight: 600;\n}\n.detail-row[_ngcontent-%COMP%]   .mono[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n}\n.chip-locked[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.chip-active[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n[_nghost-%COMP%]     .k-dialog-actions {\n  direction: rtl !important;\n}\n.new-dialog-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  direction: rtl;\n  min-height: 360px;\n  margin: -8px -24px;\n}\n.new-dialog-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 20px 24px;\n  overflow-y: auto;\n  direction: rtl;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  direction: rtl;\n}\n.form-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  min-width: 170px;\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: var(--sf-text);\n  padding-top: 7px;\n  flex-shrink: 0;\n}\n.input-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex: 1;\n}\n.req[_ngcontent-%COMP%] {\n  color: var(--sf-danger);\n}\n.err[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: var(--sf-danger);\n}\n.num-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex: 1;\n}\n.num-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  text-align: center;\n}\n.dialog-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  direction: rtl !important;\n  padding: 4px 0;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 9px 20px;\n  border: 1px solid var(--sf-border);\n  border-radius: 9px;\n  background: var(--sf-bg-card);\n  color: var(--sf-text-secondary);\n  font-size: 0.875rem;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n}\n.seg-ctrl[_ngcontent-%COMP%] {\n  display: inline-flex;\n  direction: rtl;\n  align-self: flex-start;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.seg-btn[_ngcontent-%COMP%] {\n  padding: 7px 20px;\n  font-size: 0.82rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  border: none;\n  background: var(--sf-bg);\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.seg-btn[_ngcontent-%COMP%]    + .seg-btn[_ngcontent-%COMP%] {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.seg-btn[_ngcontent-%COMP%]:hover:not(.seg-on):not(.seg-off) {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.seg-btn.seg-on[_ngcontent-%COMP%] {\n  background: var(--sf-primary);\n  color: #fff;\n  font-weight: 600;\n}\n.edit-screen[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.edit-screen-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid var(--sf-border);\n  margin-bottom: 24px;\n}\n.edit-back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 7px 14px;\n  font-size: 0.84rem;\n  font-weight: 500;\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: background 0.15s, color 0.15s;\n}\n.edit-back-btn[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.edit-screen-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.edit-screen-key[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  letter-spacing: 0.04em;\n}\n.edit-screen-sub[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--sf-text-muted);\n}\n.edit-screen-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n}\n.edit-screen-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 0;\n  border: 1px solid var(--sf-border);\n  border-radius: 14px;\n  background: var(--sf-bg-card);\n  overflow: hidden;\n  min-height: 400px;\n}\n.edit-screen-nav[_ngcontent-%COMP%] {\n  width: 190px;\n  flex-shrink: 0;\n  border-inline-end: 1px solid var(--sf-border);\n  padding: 12px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  background: var(--sf-bg);\n}\n.edit-nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 9px 12px;\n  border: none;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  width: 100%;\n  text-align: right;\n  color: var(--sf-text-secondary);\n  font-size: 0.83rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  position: relative;\n  transition: background 0.15s, color 0.15s;\n}\n.edit-nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.edit-nav-item.active[_ngcontent-%COMP%] {\n  background: var(--sf-primary-light, rgba(13, 71, 255, 0.08));\n  color: var(--sf-primary);\n  font-weight: 600;\n}\n.edit-nav-item.active[_ngcontent-%COMP%]   .edit-nav-icon[_ngcontent-%COMP%] {\n  color: var(--sf-primary);\n}\n.edit-nav-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  background: var(--sf-bg-card);\n  color: var(--sf-text-muted);\n  flex-shrink: 0;\n}\n.edit-nav-item.active[_ngcontent-%COMP%]   .edit-nav-icon[_ngcontent-%COMP%] {\n  background: var(--sf-primary-light, rgba(13, 71, 255, 0.1));\n  color: var(--sf-primary);\n}\n.edit-nav-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.edit-nav-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-end: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 18px;\n  border-radius: 2px 0 0 2px;\n  background: var(--sf-primary);\n}\n.edit-screen-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px;\n  overflow-y: auto;\n}\n.ef-card[_ngcontent-%COMP%] {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 12px;\n  padding: 20px 24px;\n}\n.ef-card--info[_ngcontent-%COMP%] {\n  background: var(--sf-bg);\n  border-style: dashed;\n}\n.ef-card-title[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--sf-text-muted);\n  margin-bottom: 16px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid var(--sf-border);\n}\n.ef-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 180px 1fr;\n  align-items: start;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid var(--sf-border);\n  direction: rtl;\n}\n.ef-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.ef-row[_ngcontent-%COMP%]:first-of-type {\n  padding-top: 0;\n}\n.ef-row--readonly[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.ef-row--readonly[_ngcontent-%COMP%]   .ef-label[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n.ef-label[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  padding-top: 8px;\n  flex-shrink: 0;\n}\n.ef-control[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.ef-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--sf-text);\n  font-weight: 500;\n  padding-top: 7px;\n}\n.ef-mono[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n}\n.ef-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.ef-hint[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: var(--sf-text-muted);\n}\n.ef-select[_ngcontent-%COMP%] {\n  border: 1px solid var(--sf-border);\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 0.875rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  background: var(--sf-bg);\n  color: var(--sf-text);\n  cursor: pointer;\n  max-width: 220px;\n  direction: rtl;\n}\n.ef-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--sf-border-focus);\n  box-shadow: 0 0 0 2px rgba(13, 71, 255, 0.1);\n}\n.ef-dropdown[_ngcontent-%COMP%] {\n  max-width: 220px;\n  width: 100%;\n}\n.edit-screen-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  direction: rtl;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid var(--sf-border);\n}\n.audit-log-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  min-height: 400px;\n}\n.audit-sub-nav[_ngcontent-%COMP%] {\n  width: 180px;\n  flex-shrink: 0;\n  border-inline-end: 1px solid var(--sf-border);\n  background: var(--sf-bg);\n  padding: 12px 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.audit-sub-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  overflow: auto;\n}\n@media (max-width: 640px) {\n  .settings-layout[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .settings-nav[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: row;\n    overflow-x: auto;\n    padding: 8px;\n  }\n  .nav-item[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    flex-direction: column;\n    padding: 8px 12px;\n    gap: 4px;\n    font-size: 0.75rem;\n  }\n  .nav-indicator[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .scheme-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=settings.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsComponent, [{
    type: Component,
    args: [{ selector: "app-settings", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MenuModule,
      SwitchModule,
      TextBoxModule,
      NumericTextBoxModule,
      DropDownListModule,
      ButtonModule,
      IndicatorsModule,
      NotificationModule,
      IconsModule,
      GridModule,
      MatProgressSpinnerModule,
      DialogModule,
      AuditActionTypesComponent,
      AuditEntityTypesComponent
    ], providers: [NotificationService], template: `<div class="settings-page">

  <div class="page-header">
    <div>
      <h1>\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA</h1>
      <p>\u05E0\u05D9\u05D4\u05D5\u05DC \u05D4\u05E2\u05D3\u05E4\u05D5\u05EA \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA</p>
    </div>
  </div>

  <div class="settings-layout">

    <!-- \u2500\u2500 Sidebar Nav \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <nav class="settings-nav">
      @for (g of groups; track g.id) {
        <button
          class="nav-item"
          [class.active]="activeGroup() === g.id"
          (click)="selectGroup(g.id)">
          <span class="nav-icon">
            <kendo-svg-icon [icon]="g.icon" />
          </span>
          <span class="nav-text">{{ g.text }}</span>
          @if (activeGroup() === g.id) {
            <span class="nav-indicator"></span>
          }
        </button>
      }
    </nav>

    <!-- \u2500\u2500 Content Area \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <main class="settings-content">

      <!-- \u05DE\u05E8\u05D0\u05D4 \u05D5\u05E2\u05D9\u05E6\u05D5\u05D1 -->
      @if (activeGroup() === 'theme') {
        <div class="content-section">
          <div class="section-header">
            <h2>\u05DE\u05E8\u05D0\u05D4 \u05D5\u05E2\u05D9\u05E6\u05D5\u05D1</h2>
            <p>\u05D4\u05EA\u05D0\u05DD \u05D0\u05EA \u05D7\u05D5\u05D5\u05D9\u05EA \u05D4\u05DE\u05DE\u05E9\u05E7 \u05DC\u05E1\u05D2\u05E0\u05D5\u05DF \u05E9\u05DC\u05DA</p>
          </div>

          <div class="theme-cards-grid">

            <!-- Color Scheme -->
            <div class="setting-card">
              <div class="setting-card-title">\u05E2\u05E8\u05DB\u05EA \u05E6\u05D1\u05E2\u05D9\u05DD</div>
              <div class="scheme-grid">
                @for (s of schemes; track s.id) {
                  <button
                    class="scheme-tile"
                    [class.active]="theme.scheme() === s.id"
                    (click)="selectScheme(s.id)">
                    <span class="scheme-swatch" [style.background]="s.primary">
                      @if (theme.scheme() === s.id) { <span class="scheme-check">\u2713</span> }
                    </span>
                    <span class="scheme-label">{{ s.label }}</span>
                  </button>
                }
              </div>
            </div>

            <!-- Dark Mode -->
            <div class="setting-card">
              <div class="setting-card-title">\u05DE\u05E6\u05D1 \u05DB\u05D4\u05D4</div>
              <div class="seg-ctrl" style="margin-bottom:12px">
                <button type="button" class="seg-btn"
                        [class.seg-on]="theme.isDark()"
                        (click)="!theme.isDark() && theme.toggleMode()">\u2713 \u05E4\u05E2\u05D9\u05DC</button>
                <button type="button" class="seg-btn"
                        [class.seg-on]="!theme.isDark()"
                        (click)="theme.isDark() && theme.toggleMode()">\u05DB\u05D1\u05D5\u05D9</button>
              </div>
              <span class="setting-card-desc">\u05DE\u05EA\u05D0\u05D9\u05DD \u05DC\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D1\u05E1\u05D1\u05D9\u05D1\u05D4 \u05D7\u05E9\u05D5\u05DB\u05D4</span>
            </div>

          </div>

          <!-- Actions -->
          <div class="setting-actions">
            <button kendoButton themeColor="primary" (click)="saveUser()" [disabled]="saving()" class="btn-save">
              @if (saving()) {
                <kendo-loader type="pulsing" size="small" />
              } @else { \u2713 }
              \u05E9\u05DE\u05D5\u05E8 \u05D4\u05E2\u05D3\u05E4\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA
            </button>

            @if (isAdmin()) {
              <button kendoButton fillMode="outline" (click)="saveOrg()" [disabled]="saving()">
                \u05E7\u05D1\u05E2 \u05DB\u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC \u05DC\u05D0\u05E8\u05D2\u05D5\u05DF
              </button>
            }
          </div>
        </div>
      }

      <!-- \u05DB\u05DC\u05DC\u05D9 -->
      @if (activeGroup() === 'general') {
        <div class="content-section">
          <div class="section-header">
            <h2>\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05DB\u05DC\u05DC\u05D9\u05D5\u05EA</h2>
            <p>\u05E9\u05E4\u05D4, \u05D0\u05D6\u05D5\u05E8 \u05D6\u05DE\u05DF \u05D5\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D1\u05E1\u05D9\u05E1\u05D9\u05D5\u05EA</p>
          </div>
          <div class="setting-card coming-soon-card">
            <span class="coming-soon-badge">\u05D1\u05E7\u05E8\u05D5\u05D1</span>
            <p>\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05DB\u05DC\u05DC\u05D9\u05D5\u05EA \u05D9\u05EA\u05D5\u05D5\u05E1\u05E4\u05D5 \u05D1\u05E7\u05E8\u05D5\u05D1</p>
          </div>
        </div>
      }

      <!-- \u05D0\u05D1\u05D8\u05D7\u05D4 -->
      @if (activeGroup() === 'security') {
        <div class="content-section">
          <div class="section-header">
            <h2>\u05D0\u05D1\u05D8\u05D7\u05D4</h2>
            <p>\u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05E1\u05D9\u05E1\u05DE\u05D0\u05D5\u05EA \u05D5\u05D7\u05E1\u05D9\u05DE\u05EA \u05DB\u05E0\u05D9\u05E1\u05D5\u05EA</p>
          </div>
          <div class="setting-card coming-soon-card">
            <span class="coming-soon-badge">\u05D1\u05E7\u05E8\u05D5\u05D1</span>
            <p>\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D0\u05D1\u05D8\u05D7\u05D4 \u05D9\u05EA\u05D5\u05D5\u05E1\u05E4\u05D5 \u05D1\u05E7\u05E8\u05D5\u05D1</p>
          </div>
        </div>
      }

      <!-- \u05D4\u05EA\u05E8\u05D0\u05D5\u05EA -->
      @if (activeGroup() === 'notifications') {
        <div class="content-section">
          <div class="section-header">
            <h2>\u05D4\u05EA\u05E8\u05D0\u05D5\u05EA</h2>
            <p>\u05E0\u05D9\u05D4\u05D5\u05DC \u05D4\u05E2\u05D3\u05E4\u05D5\u05EA \u05D4\u05EA\u05E8\u05D0\u05D5\u05EA</p>
          </div>
          <div class="setting-card coming-soon-card">
            <span class="coming-soon-badge">\u05D1\u05E7\u05E8\u05D5\u05D1</span>
            <p>\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D4\u05EA\u05E8\u05D0\u05D5\u05EA \u05D9\u05EA\u05D5\u05D5\u05E1\u05E4\u05D5 \u05D1\u05E7\u05E8\u05D5\u05D1</p>
          </div>
        </div>
      }

      <!-- \u05D0\u05E8\u05D2\u05D5\u05DF -->
      @if (activeGroup() === 'organization') {
        <div class="content-section">
          <div class="section-header">
            <h2>\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D0\u05E8\u05D2\u05D5\u05DF</h2>
            <p>\u05E4\u05E8\u05D8\u05D9 \u05D4\u05D0\u05E8\u05D2\u05D5\u05DF \u05D5\u05D7\u05D1\u05E8\u05D9 \u05D4\u05E6\u05D5\u05D5\u05EA</p>
          </div>
          <div class="setting-card coming-soon-card">
            <span class="coming-soon-badge">\u05D1\u05E7\u05E8\u05D5\u05D1</span>
            <p>\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D0\u05E8\u05D2\u05D5\u05DF \u05D9\u05EA\u05D5\u05D5\u05E1\u05E4\u05D5 \u05D1\u05E7\u05E8\u05D5\u05D1</p>
          </div>
        </div>
      }

      <!-- \u05D7\u05D9\u05D5\u05D1 -->
      @if (activeGroup() === 'billing') {
        <div class="content-section">
          <div class="section-header">
            <h2>\u05D7\u05D9\u05D5\u05D1 \u05D5\u05DE\u05E0\u05D5\u05D9</h2>
            <p>\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA, \u05EA\u05E9\u05DC\u05D5\u05DE\u05D9\u05DD \u05D5\u05D7\u05E9\u05D1\u05D5\u05E0\u05D9\u05D5\u05EA</p>
          </div>
          <div class="setting-card coming-soon-card">
            <span class="coming-soon-badge">\u05D1\u05E7\u05E8\u05D5\u05D1</span>
            <p>\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D7\u05D9\u05D5\u05D1 \u05D9\u05EA\u05D5\u05D5\u05E1\u05E4\u05D5 \u05D1\u05E7\u05E8\u05D5\u05D1</p>
          </div>
        </div>
      }

      <!-- \u05DE\u05D5\u05E0\u05D9\u05DD -->
      @if (activeGroup() === 'counters') {
        <div class="content-section content-section--wide">

          <!-- \u2550\u2550 \u05DE\u05E1\u05DA \u05E2\u05E8\u05D9\u05DB\u05D4 \u2550\u2550 -->
          @if (editScreenOpen() && editingCounter) {
            <div class="edit-screen">

              <div class="edit-screen-header">
                <button class="edit-back-btn" (click)="closeEditDialog()">
                  \u2190 \u05D7\u05D6\u05E8\u05D4 \u05DC\u05E8\u05E9\u05D9\u05DE\u05D4
                </button>
                <div class="edit-screen-title">
                  <span class="edit-screen-key">{{ editingCounter.CounterKey }}</span>
                  <span class="edit-screen-sub">\u05E2\u05E8\u05D9\u05DB\u05EA \u05DE\u05D5\u05E0\u05D4</span>
                </div>
              </div>

              <form [formGroup]="editForm" novalidate class="edit-screen-body">
                <div class="edit-screen-layout">

                  <!-- \u2500\u2500 Sidebar Nav \u2500\u2500 -->
                  <nav class="edit-screen-nav">
                    @for (g of editGroups; track g.id) {
                      <button type="button" class="edit-nav-item"
                              [class.active]="editActiveGroup() === g.id"
                              (click)="editActiveGroup.set(g.id)">
                        <span class="edit-nav-icon">
                          <kendo-svg-icon [icon]="g.icon" />
                        </span>
                        <span class="edit-nav-text">{{ g.text }}</span>
                        @if (editActiveGroup() === g.id) {
                          <span class="edit-nav-indicator"></span>
                        }
                      </button>
                    }
                  </nav>

                  <!-- \u2500\u2500 Content \u2500\u2500 -->
                  <div class="edit-screen-content">

                    @if (editActiveGroup() === 'identity') {
                      <div class="ef-card">
                        <div class="ef-card-title">\u05E4\u05E8\u05D8\u05D9 \u05D6\u05D9\u05D4\u05D5\u05D9</div>
                        <div class="ef-row">
                          <span class="ef-label">\u05DE\u05D6\u05D4\u05D4 \u05DE\u05D5\u05E0\u05D4</span>
                          <span class="ef-value ef-mono">{{ editingCounter.CounterID }}</span>
                        </div>
                        <div class="ef-row">
                          <span class="ef-label">\u05DE\u05E4\u05EA\u05D7</span>
                          <span class="ef-value ef-mono ef-bold">{{ editingCounter.CounterKey }}</span>
                        </div>
                        <div class="ef-row">
                          <span class="ef-label">\u05E8\u05DE\u05EA \u05DE\u05D5\u05E0\u05D4</span>
                          <span class="ef-value">
                            <span class="chip" [class]="levelClass(editingCounter.CounterLevel)">
                              {{ levelLabel(editingCounter.CounterLevel) }}
                            </span>
                          </span>
                        </div>
                        <div class="ef-row">
                          <span class="ef-label">\u05D0\u05E8\u05D2\u05D5\u05DF</span>
                          <span class="ef-value">
                            <span class="chip chip-tenant">{{ editingCounter.TenantName || '\u05DC\u05DC\u05D0 \u05D0\u05E8\u05D2\u05D5\u05DF' }}</span>
                          </span>
                        </div>
                        <div class="ef-row">
                          <span class="ef-label">\u05DC\u05E7\u05D5\u05D7</span>
                          <span class="ef-value">
                            @if (editingCounter.CustomerID > 0) {
                              <span class="chip chip-customer">{{ editingCounter.CustomerName }}</span>
                            } @else {
                              <span style="color:var(--sf-text-muted)">\u05DC\u05DC\u05D0 \u05DC\u05E7\u05D5\u05D7</span>
                            }
                          </span>
                        </div>
                        <div class="ef-row">
                          <span class="ef-label">\u05DE\u05D5\u05E6\u05E8</span>
                          <span class="ef-value">
                            @if (editingCounter.ProductID > 0) {
                              <span class="chip chip-product">{{ editingCounter.ProductName }}</span>
                            } @else {
                              <span style="color:var(--sf-text-muted)">\u05DC\u05DC\u05D0 \u05DE\u05D5\u05E6\u05E8</span>
                            }
                          </span>
                        </div>
                      </div>
                    }

                    @if (editActiveGroup() === 'basic') {
                      <div class="ef-card">
                        <div class="ef-card-title">\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D1\u05E1\u05D9\u05E1\u05D9\u05D5\u05EA</div>
                        <div class="ef-row">
                          <label class="ef-label" for="ef-name">\u05E9\u05DD \u05DE\u05D5\u05E0\u05D4 <span class="req">*</span></label>
                          <div class="ef-control">
                            <input id="ef-name" kendoTextBox formControlName="counterName" placeholder="\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: \u05D7\u05E9\u05D1\u05D5\u05E0\u05D9\u05D5\u05EA \u05DE\u05E1" />
                            @if (editForm.get('counterName')?.invalid && editForm.get('counterName')?.touched) {
                              <small class="err">\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4</small>
                            }
                          </div>
                        </div>
                        <div class="ef-row">
                          <label class="ef-label" for="ef-prefix">\u05EA\u05D7\u05D9\u05DC\u05D9\u05EA (Prefix) <span class="req">*</span></label>
                          <div class="ef-control">
                            <input id="ef-prefix" kendoTextBox formControlName="prefix"
                                   placeholder="INV / LEAD / ORD"
                                   style="font-family:'Share Tech Mono',monospace;text-transform:uppercase" />
                            <small class="ef-hint">\u05EA\u05D7\u05D9\u05DC\u05D9\u05EA \u05E9\u05EA\u05D5\u05E4\u05D9\u05E2 \u05D1\u05E4\u05E0\u05D9 \u05DE\u05E1\u05E4\u05E8 \u05D4\u05DE\u05E1\u05DE\u05DA</small>
                            @if (editForm.get('prefix')?.invalid && editForm.get('prefix')?.touched) {
                              <small class="err">\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4</small>
                            }
                          </div>
                        </div>
                        <div class="ef-row">
                          <label class="ef-label">\u05E4\u05D5\u05E8\u05DE\u05D8 \u05EA\u05D0\u05E8\u05D9\u05DA</label>
                          <div class="ef-control">
                            <kendo-dropdownlist
                              formControlName="dateFormat"
                              [data]="dateFormatOptions"
                              textField="text"
                              valueField="value"
                              [valuePrimitive]="true"
                              class="ef-dropdown" />
                            <small class="ef-hint">
                              @switch (editForm.get('dateFormat')?.value) {
                                @case ('NONE')       { \u05DC\u05DC\u05D0 \u05EA\u05D0\u05E8\u05D9\u05DA \u2014 INV-000042 }
                                @case ('YEAR')       { \u05E9\u05E0\u05D4 \u2014 INV-2026-000042 }
                                @case ('YEAR_MONTH') { \u05E9\u05E0\u05D4+\u05D7\u05D5\u05D3\u05E9 \u2014 INV-2026-06-000042 }
                              }
                            </small>
                          </div>
                        </div>
                        <div class="ef-row">
                          <label class="ef-label">\u05E1\u05D5\u05D2 \u05E4\u05DC\u05D8</label>
                          <div class="ef-control">
                            <div class="seg-ctrl">
                              <button type="button" class="seg-btn"
                                      [class.seg-on]="editForm.get('outputType')?.value === 'NUMERIC'"
                                      (click)="editForm.get('outputType')?.setValue('NUMERIC')">
                                \u05DE\u05E1\u05E4\u05E8\u05D9 \u2014 42
                              </button>
                              <button type="button" class="seg-btn"
                                      [class.seg-on]="editForm.get('outputType')?.value === 'STRING'"
                                      (click)="editForm.get('outputType')?.setValue('STRING')">
                                \u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u2014 INV-2026-000042
                              </button>
                            </div>
                            <small class="ef-hint">NUMERIC \u05DE\u05D7\u05D6\u05D9\u05E8 \u05DE\u05E1\u05E4\u05E8; STRING \u05DE\u05D7\u05D6\u05D9\u05E8 \u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05DE\u05E2\u05D5\u05E6\u05D1\u05EA</small>
                          </div>
                        </div>
                      </div>
                    }

                    @if (editActiveGroup() === 'range') {
                      <div class="ef-card">
                        <div class="ef-card-title">\u05D8\u05D5\u05D5\u05D7 \u05E2\u05E8\u05DB\u05D9\u05DD</div>
                        <div class="ef-row">
                          <label class="ef-label">\u05E6\u05E2\u05D3 (Step)</label>
                          <div class="ef-control">
                            <kendo-numerictextbox formControlName="stepValue"
                              [min]="1" [decimals]="0" [format]="'n0'" style="max-width:140px" />
                            <small class="ef-hint">\u05D2\u05D5\u05D3\u05DC \u05D4\u05D3\u05D9\u05DC\u05D5\u05D2 \u05D1\u05D9\u05DF \u05DE\u05E1\u05E4\u05E8 \u05DC\u05DE\u05E1\u05E4\u05E8 (\u05D1\u05D3\u05E8\u05DA \u05DB\u05DC\u05DC 1)</small>
                          </div>
                        </div>
                        <div class="ef-row">
                          <label class="ef-label">\u05E2\u05E8\u05DA \u05D4\u05EA\u05D7\u05DC\u05D4</label>
                          <div class="ef-control">
                            <kendo-numerictextbox formControlName="startValue"
                              [min]="0" [decimals]="0" [format]="'n0'" style="max-width:140px" />
                            <small class="ef-hint">\u05D4\u05DE\u05E1\u05E4\u05E8 \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05E9\u05D9\u05D5\u05E7\u05E6\u05D4</small>
                          </div>
                        </div>
                        <div class="ef-row">
                          <label class="ef-label">\u05E2\u05E8\u05DA \u05DE\u05E7\u05E1\u05D9\u05DE\u05DC\u05D9</label>
                          <div class="ef-control">
                            <kendo-numerictextbox formControlName="maxValue"
                              [min]="1" [decimals]="0" [format]="'n0'" style="max-width:140px" />
                            <small class="ef-hint">\u05DC\u05D0\u05D7\u05E8 \u05D4\u05D2\u05E2\u05D4 \u05DC\u05E2\u05E8\u05DA \u05D6\u05D4 \u2014 \u05D4\u05DE\u05D5\u05E0\u05D4 \u05D9\u05E0\u05E2\u05DC \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA</small>
                          </div>
                        </div>
                      </div>
                    }

                    @if (editActiveGroup() === 'reset') {
                      <div class="ef-card">
                        <div class="ef-card-title">\u05DE\u05D7\u05D6\u05D5\u05E8\u05D9\u05D5\u05EA \u05D0\u05D9\u05E4\u05D5\u05E1</div>
                        <div class="ef-row">
                          <label class="ef-label">\u05EA\u05E7\u05D5\u05E4\u05EA \u05D0\u05D9\u05E4\u05D5\u05E1</label>
                          <div class="ef-control">
                            <kendo-dropdownlist
                              formControlName="resetPeriod"
                              [data]="resetPeriodOptions"
                              textField="text"
                              valueField="value"
                              [valuePrimitive]="true"
                              class="ef-dropdown" />
                            <small class="ef-hint">
                              @switch (editForm.get('resetPeriod')?.value) {
                                @case ('NEVER')   { \u05D4\u05DE\u05D5\u05E0\u05D4 \u05DC\u05D0 \u05DE\u05EA\u05D0\u05E4\u05E1 \u05DC\u05E2\u05D5\u05DC\u05DD }
                                @case ('ANNUAL')  { \u05D4\u05DE\u05D5\u05E0\u05D4 \u05DE\u05EA\u05D0\u05E4\u05E1 \u05D1\u05EA\u05D7\u05D9\u05DC\u05EA \u05DB\u05DC \u05E9\u05E0\u05D4 }
                                @case ('MONTHLY') { \u05D4\u05DE\u05D5\u05E0\u05D4 \u05DE\u05EA\u05D0\u05E4\u05E1 \u05D1\u05EA\u05D7\u05D9\u05DC\u05EA \u05DB\u05DC \u05D7\u05D5\u05D3\u05E9 }
                              }
                            </small>
                          </div>
                        </div>
                        <div class="ef-row ef-row--readonly">
                          <span class="ef-label">\u05D0\u05D9\u05E4\u05D5\u05E1 \u05D0\u05D7\u05E8\u05D5\u05DF</span>
                          <span class="ef-value">{{ formatDate(editingCounter.LastResetDate) }}</span>
                        </div>
                      </div>
                    }

                    @if (editActiveGroup() === 'values') {
                      <div class="ef-card ef-card--info">
                        <div class="ef-card-title">\u05E2\u05E8\u05DB\u05D9\u05DD \u05E0\u05D5\u05DB\u05D7\u05D9\u05D9\u05DD</div>
                        <div class="ef-row ef-row--readonly">
                          <span class="ef-label">\u05DE\u05D5\u05E0\u05D4 \u05E8\u05E5</span>
                          <span class="counter-badge counter-badge--running">{{ editingCounter.RunningValue }}</span>
                        </div>
                        <div class="ef-row ef-row--readonly">
                          <span class="ef-label">\u05DE\u05D5\u05E0\u05D4 \u05E9\u05D5\u05D8\u05E3</span>
                          <span class="counter-badge counter-badge--current">{{ editingCounter.CurrentValue }}</span>
                        </div>
                        <div class="ef-row ef-row--readonly">
                          <span class="ef-label">\u05E0\u05D5\u05E6\u05E8</span>
                          <span class="ef-value">{{ formatDate(editingCounter.CreatedAt) }}</span>
                        </div>
                        <div class="ef-row ef-row--readonly">
                          <span class="ef-label">\u05E2\u05D5\u05D3\u05DB\u05DF</span>
                          <span class="ef-value">{{ formatDate(editingCounter.UpdatedAt) }}</span>
                        </div>
                      </div>
                    }

                    @if (editActiveGroup() === 'lock') {
                      <div class="ef-card">
                        <div class="ef-card-title">\u05E0\u05E2\u05D9\u05DC\u05D4</div>
                        <div class="ef-row">
                          <label class="ef-label">\u05DE\u05E6\u05D1 \u05DE\u05D5\u05E0\u05D4</label>
                          <div class="ef-control">
                            <div class="seg-ctrl">
                              <button type="button" class="seg-btn"
                                      [class.seg-on]="!editForm.get('isLocked')?.value"
                                      (click)="editForm.get('isLocked')?.setValue(false)">
                                \u2713 \u05E4\u05E2\u05D9\u05DC
                              </button>
                              <button type="button" class="seg-btn"
                                      [class.seg-off]="editForm.get('isLocked')?.value"
                                      (click)="editForm.get('isLocked')?.setValue(true)">
                                \u{1F512} \u05E0\u05E2\u05D5\u05DC
                              </button>
                            </div>
                            <small class="ef-hint">\u05DE\u05D5\u05E0\u05D4 \u05E0\u05E2\u05D5\u05DC \u05DC\u05D0 \u05E0\u05D9\u05EA\u05DF \u05DC\u05E2\u05E8\u05D9\u05DB\u05D4, \u05D0\u05D9\u05E4\u05D5\u05E1 \u05D0\u05D5 \u05D4\u05E7\u05E6\u05D0\u05EA \u05DE\u05E1\u05E4\u05E8\u05D9\u05DD</small>
                          </div>
                        </div>
                      </div>
                    }

                  </div><!-- /edit-screen-content -->
                </div><!-- /edit-screen-layout -->
              </form>

              <div class="edit-screen-footer">
                <button class="btn-save" (click)="submitEditCounter()" [disabled]="editSaving()">
                  @if (editSaving()) { <kendo-loader type="pulsing" themeColor="secondary" size="small" /> }
                  @else { \u2713 } \u05E9\u05DE\u05D5\u05E8 \u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD
                </button>
                <button class="btn-cancel" (click)="closeEditDialog()">\u05D1\u05D9\u05D8\u05D5\u05DC</button>
              </div>

            </div>
          }

          <!-- \u2550\u2550 \u05DE\u05E1\u05DA \u05E8\u05E9\u05D9\u05DE\u05D4 \u2550\u2550 -->
          @if (!editScreenOpen()) {
            <div class="section-header">
              <h2>\u05E0\u05D9\u05D4\u05D5\u05DC \u05DE\u05D5\u05E0\u05D9\u05DD</h2>
              <p>\u05D4\u05D2\u05D3\u05E8\u05EA \u05E1\u05D3\u05E8\u05D5\u05EA \u05DE\u05E1\u05E4\u05D5\u05E8 \u05DC\u05D7\u05E9\u05D1\u05D5\u05E0\u05D9\u05D5\u05EA, \u05DC\u05D9\u05D3\u05D9\u05DD, \u05D7\u05D5\u05D6\u05D9\u05DD \u05D5\u05E2\u05D5\u05D3</p>
            </div>

            <!-- Toolbar -->
            <div class="counters-toolbar">
              <div class="level-filter">
                <button class="level-btn" [class.active]="levelFilter() === 'TENANT'"
                        (click)="setLevelFilter('TENANT')">\u05D0\u05E8\u05D2\u05D5\u05DF</button>
                @if (!isPlatformAdmin()) {
                  <button class="level-btn" [class.active]="levelFilter() === 'CUSTOMER'"
                          (click)="setLevelFilter('CUSTOMER')">\u05DC\u05E7\u05D5\u05D7 \u05E7\u05E6\u05D4</button>
                }
              </div>
              <button kendoButton themeColor="primary" [svgIcon]="plusIcon" (click)="openNewDialog()">
                \u05DE\u05D5\u05E0\u05D4 \u05D7\u05D3\u05E9
              </button>
            </div>


            @if (countersLoading()) {
              <div class="state-box"><mat-spinner diameter="32" /></div>
            }
            @if (!countersLoading() && countersError()) {
              <div class="state-box error">{{ countersError() }}</div>
            }

            @if (!countersLoading() && !countersError()) {
            <kendo-grid
              [data]="{ data: counterPagedData, total: counterGridData.length }"
              [skip]="counterSkip"
              [pageSize]="counterPageSize"
              [pageable]="{ buttonCount: 5, info: true, type: 'numeric', pageSizes: [10, 25, 50] }"
              [sortable]="{ mode: 'single', allowUnsort: false }"
              [sort]="counterSort"
              [reorderable]="true"
              [resizable]="true"
              [columnMenu]="true"
              [isDetailExpanded]="isDetailExpanded"
              scrollable="none"
              (pageChange)="onCounterPageChange($event)"
              (sortChange)="onCounterSortChange($event)"
              class="counters-grid">

              <kendo-grid-messages
                pagerItemsPerPage="\u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3" pagerOf="\u05DE\u05EA\u05D5\u05DA" pagerItems="\u05E8\u05E9\u05D5\u05DE\u05D5\u05EA"
                noRecords="\u05D0\u05D9\u05DF \u05DE\u05D5\u05E0\u05D9\u05DD \u05DE\u05D5\u05D2\u05D3\u05E8\u05D9\u05DD" loading="\u05D8\u05D5\u05E2\u05DF..."
                columnMenuFilter="\u05E1\u05E0\u05DF" columnMenuSort="\u05DE\u05D9\u05D5\u05DF" columnMenuColumns="\u05E2\u05DE\u05D5\u05D3\u05D5\u05EA"
                columnMenuSortAscending="\u05E2\u05D5\u05DC\u05D4" columnMenuSortDescending="\u05D9\u05D5\u05E8\u05D3" />

              <!-- # -->
              <kendo-grid-column field="CounterID" title="#" [width]="60">
                <ng-template kendoGridCellTemplate let-c>
                  <span class="cell-id">{{ c.CounterID }}</span>
                </ng-template>
              </kendo-grid-column>

              <!-- \u05DE\u05E4\u05EA\u05D7 -->
              <kendo-grid-column field="CounterKey" title="\u05DE\u05E4\u05EA\u05D7" [width]="120">
                <ng-template kendoGridCellTemplate let-c>
                  <span class="cell-key">{{ c.CounterKey }}</span>
                  @if (c.ProductID > 0) {
                    <span class="chip chip-product" style="font-size:.65rem;margin-right:4px">P{{ c.ProductID }}</span>
                  }
                </ng-template>
              </kendo-grid-column>

              <!-- \u05E9\u05DD \u05DE\u05D5\u05E0\u05D4 -->
              <kendo-grid-column field="CounterName" title="\u05E9\u05DD \u05DE\u05D5\u05E0\u05D4" [width]="160">
                <ng-template kendoGridCellTemplate let-c>
                  {{ c.CounterName }}
                </ng-template>
              </kendo-grid-column>

              <!-- \u05EA\u05D7\u05D9\u05DC\u05D9\u05EA -->
              <kendo-grid-column field="Prefix" title="\u05EA\u05D7\u05D9\u05DC\u05D9\u05EA" [width]="80">
                <ng-template kendoGridCellTemplate let-c>
                  <span class="cell-key">{{ c.Prefix }}</span>
                </ng-template>
              </kendo-grid-column>

              <!-- \u05E4\u05D5\u05E8\u05DE\u05D8 -->
              <kendo-grid-column field="DateFormat" title="\u05E4\u05D5\u05E8\u05DE\u05D8" [width]="110">
                <ng-template kendoGridCellTemplate let-c>
                  <span class="cell-label">{{ dateFormatLabel(c.DateFormat) }}</span>
                </ng-template>
              </kendo-grid-column>

              <!-- \u05E6\u05E2\u05D3 / \u05D4\u05EA\u05D7\u05DC\u05D4 / \u05DE\u05E7\u05E1 -->
              <kendo-grid-column title="\u05E6\u05E2\u05D3 / \u05D4\u05EA\u05D7' / \u05DE\u05E7\u05E1" [width]="120" [sortable]="false">
                <ng-template kendoGridCellTemplate let-c>
                  <span class="cell-range">{{ c.StepValue }} / {{ c.StartValue }} / {{ c.MaxValue }}</span>
                </ng-template>
              </kendo-grid-column>

              <!-- \u05E1\u05D5\u05D2 \u05E4\u05DC\u05D8 -->
              <kendo-grid-column field="OutputType" title="\u05E4\u05DC\u05D8" [width]="90">
                <ng-template kendoGridCellTemplate let-c>
                  <span class="cell-label">{{ outputTypeLabel(c.OutputType) }}</span>
                </ng-template>
              </kendo-grid-column>

              <!-- \u05D0\u05D9\u05E4\u05D5\u05E1 -->
              <kendo-grid-column field="ResetPeriod" title="\u05D0\u05D9\u05E4\u05D5\u05E1" [width]="90">
                <ng-template kendoGridCellTemplate let-c>
                  <span class="cell-label">{{ resetPeriodLabel(c.ResetPeriod) }}</span>
                </ng-template>
              </kendo-grid-column>

              <!-- \u05E8\u05E5 -->
              <kendo-grid-column field="RunningValue" title="\u05E8\u05E5" [width]="75" [sortable]="false">
                <ng-template kendoGridCellTemplate let-c>
                  <span class="counter-badge counter-badge--running">{{ c.RunningValue }}</span>
                </ng-template>
              </kendo-grid-column>

              <!-- \u05E9\u05D5\u05D8\u05E3 -->
              <kendo-grid-column field="CurrentValue" title="\u05E9\u05D5\u05D8\u05E3" [width]="75" [sortable]="false">
                <ng-template kendoGridCellTemplate let-c>
                  <span class="counter-badge counter-badge--current">{{ c.CurrentValue }}</span>
                </ng-template>
              </kendo-grid-column>

              <!-- \u05E4\u05E2\u05D5\u05DC\u05D5\u05EA -->
              <kendo-grid-column title="" [width]="110" [sortable]="false" [resizable]="false" [columnMenu]="false">
                <ng-template kendoGridCellTemplate let-c>
                  <div class="row-actions">
                    <button class="act-btn act-expand" [class.expanded]="isExpanded(c)"
                            [title]="isExpanded(c) ? '\u05DB\u05D5\u05D5\u05E5' : '\u05E4\u05E8\u05D8\u05D9\u05DD'"
                            (click)="toggleExpand(c)">
                      <i class="pi" [class.pi-chevron-down]="!isExpanded(c)" [class.pi-chevron-up]="isExpanded(c)"></i>
                    </button>
                    <button class="act-btn" [class.act-lock]="!c.IsLocked" [class.act-unlock]="c.IsLocked"
                            [title]="c.IsLocked ? '\u05E9\u05D7\u05E8\u05E8 \u05E0\u05E2\u05D9\u05DC\u05D4' : '\u05E0\u05E2\u05DC \u05DE\u05D5\u05E0\u05D4'"
                            (click)="lockCounter(c)">
                      <i class="pi" [class.pi-lock]="!c.IsLocked" [class.pi-lock-open]="c.IsLocked"></i>
                    </button>
                    <button class="act-btn act-edit" title="\u05E2\u05E8\u05D9\u05DB\u05D4" [disabled]="c.IsLocked"
                            (click)="openEditDialog(c)">
                      <i class="pi pi-pencil"></i>
                    </button>
                    <button class="act-btn act-reset" title="\u05D0\u05E4\u05E1 \u05DE\u05D5\u05E0\u05D4 \u05E9\u05D5\u05D8\u05E3" [disabled]="c.IsLocked"
                            (click)="resetCounter(c)">
                      <i class="pi pi-refresh"></i>
                    </button>
                  </div>
                </ng-template>
              </kendo-grid-column>

              <!-- Detail row (\u05D4\u05E8\u05D7\u05D1\u05D4) -->
              <ng-template kendoGridDetailTemplate let-c>
                <div class="counter-detail">
                  <div class="detail-cards">

                    <div class="setting-card">
                      <div class="setting-card-title">\u05D6\u05D9\u05D4\u05D5\u05D9</div>
                      <div class="detail-row"><span>\u05DE\u05D6\u05D4\u05D4</span><strong>{{ c.CounterID }}</strong></div>
                      <div class="detail-row"><span>\u05DE\u05E4\u05EA\u05D7</span><strong class="mono">{{ c.CounterKey }}</strong></div>
                      <div class="detail-row"><span>\u05E8\u05DE\u05D4</span><span class="chip" [class]="levelClass(c.CounterLevel)">{{ levelLabel(c.CounterLevel) }}</span></div>
                      <div class="detail-row"><span>\u05D0\u05E8\u05D2\u05D5\u05DF</span><span class="chip chip-tenant">{{ c.TenantName || '\u05DC\u05DC\u05D0 \u05D0\u05E8\u05D2\u05D5\u05DF' }}</span></div>
                      <div class="detail-row"><span>\u05DC\u05E7\u05D5\u05D7</span>
                        @if (c.CustomerID > 0) {
                          <span class="chip chip-customer">{{ c.CustomerName }}</span>
                        } @else {
                          <span style="color:var(--sf-text-muted)">\u05DC\u05DC\u05D0 \u05DC\u05E7\u05D5\u05D7</span>
                        }
                      </div>
                      <div class="detail-row"><span>\u05DE\u05D5\u05E6\u05E8</span>
                        @if (c.ProductID > 0) {
                          <span class="chip chip-product">{{ c.ProductName }}</span>
                        } @else {
                          <span style="color:var(--sf-text-muted)">\u05DC\u05DC\u05D0 \u05DE\u05D5\u05E6\u05E8</span>
                        }
                      </div>
                      <div class="detail-row"><span>\u05E1\u05D8\u05D8\u05D5\u05E1</span>
                        <span class="chip" [class]="c.IsLocked ? 'chip-locked' : 'chip-active'">
                          {{ c.IsLocked ? '\u{1F512} \u05E0\u05E2\u05D5\u05DC' : '\u2713 \u05E4\u05E2\u05D9\u05DC' }}
                        </span>
                      </div>
                    </div>

                    <div class="setting-card">
                      <div class="setting-card-title">\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05DE\u05E1\u05E4\u05D5\u05E8</div>
                      <div class="detail-row"><span>\u05EA\u05D7\u05D9\u05DC\u05D9\u05EA</span><strong class="mono">{{ c.Prefix }}</strong></div>
                      <div class="detail-row"><span>\u05E4\u05D5\u05E8\u05DE\u05D8 \u05EA\u05D0\u05E8\u05D9\u05DA</span><strong>{{ dateFormatLabel(c.DateFormat) }}</strong></div>
                      <div class="detail-row"><span>\u05E1\u05D5\u05D2 \u05E4\u05DC\u05D8</span><strong>{{ outputTypeLabel(c.OutputType) }}</strong></div>
                      <div class="detail-row"><span>\u05E6\u05E2\u05D3</span><strong>{{ c.StepValue }}</strong></div>
                      <div class="detail-row"><span>\u05D8\u05D5\u05D5\u05D7</span><strong>{{ c.StartValue }} \u2013 {{ c.MaxValue }}</strong></div>
                      <div class="detail-row"><span>\u05D0\u05D9\u05E4\u05D5\u05E1</span><strong>{{ resetPeriodLabel(c.ResetPeriod) }}</strong></div>
                    </div>

                    <div class="setting-card">
                      <div class="setting-card-title">\u05E2\u05E8\u05DB\u05D9\u05DD \u05E0\u05D5\u05DB\u05D7\u05D9\u05D9\u05DD</div>
                      <div class="detail-row"><span>\u05DE\u05D5\u05E0\u05D4 \u05E8\u05E5</span><span class="counter-badge counter-badge--running">{{ c.RunningValue }}</span></div>
                      <div class="detail-row"><span>\u05DE\u05D5\u05E0\u05D4 \u05E9\u05D5\u05D8\u05E3</span><span class="counter-badge counter-badge--current">{{ c.CurrentValue }}</span></div>
                      <div class="detail-row"><span>\u05D0\u05D9\u05E4\u05D5\u05E1 \u05D0\u05D7\u05E8\u05D5\u05DF</span><strong>{{ formatDate(c.LastResetDate) }}</strong></div>
                      <div class="detail-row"><span>\u05E0\u05D5\u05E6\u05E8</span><strong>{{ formatDate(c.CreatedAt) }}</strong></div>
                      <div class="detail-row"><span>\u05E2\u05D5\u05D3\u05DB\u05DF</span><strong>{{ formatDate(c.UpdatedAt) }}</strong></div>
                    </div>

                  </div>
                </div>
              </ng-template>

            </kendo-grid>
          } <!-- /!countersLoading && !countersError -->
          } <!-- /!editScreenOpen -->

        </div>
      }

      <!-- \u05D9\u05D5\u05DE\u05DF \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA -->
      @if (activeGroup() === 'audit-log') {
        <div class="content-section content-section--wide">
          <div class="audit-log-layout">

            <!-- Sub-nav -->
            <nav class="audit-sub-nav">
              <button class="nav-item" [class.active]="auditSubGroup() === 'action-types'"
                      (click)="auditSubGroup.set('action-types')">
                <span class="nav-icon"><kendo-svg-icon [icon]="pencilIcon" /></span>
                <span class="nav-text">\u05E1\u05D5\u05D2\u05D9 \u05E4\u05E2\u05D5\u05DC\u05D5\u05EA</span>
                @if (auditSubGroup() === 'action-types') { <span class="nav-indicator"></span> }
              </button>
              <button class="nav-item" [class.active]="auditSubGroup() === 'entity-types'"
                      (click)="auditSubGroup.set('entity-types')">
                <span class="nav-icon"><kendo-svg-icon [icon]="filterIcon" /></span>
                <span class="nav-text">\u05E1\u05D5\u05D2\u05D9 \u05D9\u05D9\u05E9\u05D5\u05D9\u05D5\u05EA</span>
                @if (auditSubGroup() === 'entity-types') { <span class="nav-indicator"></span> }
              </button>
            </nav>

            <!-- Sub-content -->
            <div class="audit-sub-content">
              @if (auditSubGroup() === 'action-types') {
                <app-audit-action-types />
              }
              @if (auditSubGroup() === 'entity-types') {
                <app-audit-entity-types />
              }
            </div>

          </div>
        </div>
      }

    </main>
  </div>

</div>

<!-- \u2500\u2500 New Counter Dialog \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
@if (newDialogOpen()) {
  <kendo-dialog title="\u05DE\u05D5\u05E0\u05D4 \u05D7\u05D3\u05E9" [width]="800" [minWidth]="600" (close)="closeNewDialog()">

    <form [formGroup]="newForm" novalidate>
      <div class="new-dialog-layout">

        <!-- Sidebar nav -->
        <nav class="edit-screen-nav">
          @for (g of newGroups; track g.id) {
            <button type="button" class="edit-nav-item"
                    [class.active]="newActiveGroup() === g.id"
                    (click)="newActiveGroup.set(g.id)">
              <span class="edit-nav-icon"><kendo-svg-icon [icon]="g.icon" /></span>
              <span class="edit-nav-text">{{ g.text }}</span>
              @if (newActiveGroup() === g.id) {
                <span class="edit-nav-indicator"></span>
              }
            </button>
          }
        </nav>

        <!-- Content -->
        <div class="new-dialog-content">

          @if (newActiveGroup() === 'basic') {
            <div class="ef-card">
              <div class="ef-card-title">\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D1\u05E1\u05D9\u05E1\u05D9\u05D5\u05EA</div>

              <!-- \u05E8\u05DE\u05D4 -->
              <div class="ef-row">
                <label class="ef-label">\u05E8\u05DE\u05EA \u05DE\u05D5\u05E0\u05D4</label>
                <div class="ef-control">
                  <div class="seg-ctrl">
                    @if (isPlatformAdmin()) {
                      <button type="button" class="seg-btn"
                              [class.seg-on]="newForm.get('counterLevel')?.value === 'PLATFORM'"
                              (click)="newForm.get('counterLevel')?.setValue('PLATFORM')">\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4</button>
                    }
                    <button type="button" class="seg-btn"
                            [class.seg-on]="newForm.get('counterLevel')?.value === 'TENANT'"
                            (click)="newForm.get('counterLevel')?.setValue('TENANT')">\u05D0\u05E8\u05D2\u05D5\u05DF</button>
                    <button type="button" class="seg-btn"
                            [class.seg-on]="newForm.get('counterLevel')?.value === 'CUSTOMER'"
                            (click)="newForm.get('counterLevel')?.setValue('CUSTOMER')">\u05DC\u05E7\u05D5\u05D7</button>
                    <button type="button" class="seg-btn"
                            [class.seg-on]="newForm.get('counterLevel')?.value === 'PRODUCT'"
                            (click)="newForm.get('counterLevel')?.setValue('PRODUCT')">\u05DE\u05D5\u05E6\u05E8</button>
                  </div>
                  <small class="ef-hint" style="margin-top:6px">
                    \u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4 \u2014 \u05DB\u05DC \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA &nbsp;|&nbsp; \u05D0\u05E8\u05D2\u05D5\u05DF \u2014 \u05DC\u05E4\u05D9 \u05D8\u05E0\u05E0\u05D8 &nbsp;|&nbsp; \u05DC\u05E7\u05D5\u05D7 \u2014 \u05DC\u05E4\u05D9 \u05DC\u05E7\u05D5\u05D7 \u05E7\u05E6\u05D4 &nbsp;|&nbsp; \u05DE\u05D5\u05E6\u05E8 \u2014 \u05DC\u05E4\u05D9 \u05DE\u05D5\u05E6\u05E8
                  </small>
                </div>
              </div>

              <!-- \u05D0\u05E8\u05D2\u05D5\u05DF -->
              <div class="ef-row">
                <span class="ef-label">\u05D0\u05E8\u05D2\u05D5\u05DF</span>
                <div class="ef-control">
                  <span class="chip chip-tenant">{{ auth.user()?.companyName || '\u05DC\u05DC\u05D0 \u05D0\u05E8\u05D2\u05D5\u05DF' }}</span>
                </div>
              </div>

              <!-- \u05DC\u05E7\u05D5\u05D7 -->
              <div class="ef-row">
                <span class="ef-label">\u05DC\u05E7\u05D5\u05D7 (CustomerID)</span>
                <div class="ef-control">
                  <span class="ef-value" style="color:var(--sf-text-muted)">0 \u2014 \u05DB\u05DC\u05DC\u05D9 (\u05DC\u05DC\u05D0 \u05E7\u05E9\u05E8 \u05DC\u05DC\u05E7\u05D5\u05D7 \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9)</span>
                </div>
              </div>

              <!-- \u05DE\u05D5\u05E6\u05E8 -->
              <div class="ef-row">
                <span class="ef-label">\u05DE\u05D5\u05E6\u05E8 (ProductID)</span>
                <div class="ef-control">
                  <span class="ef-value" style="color:var(--sf-text-muted)">0 \u2014 \u05DB\u05DC\u05DC\u05D9 (\u05DC\u05DC\u05D0 \u05E7\u05E9\u05E8 \u05DC\u05DE\u05D5\u05E6\u05E8 \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9)</span>
                </div>
              </div>

              <!-- \u05DE\u05E4\u05EA\u05D7 -->
              <div class="ef-row">
                <label class="ef-label" for="nf-key">\u05DE\u05E4\u05EA\u05D7 (Key) <span class="req">*</span></label>
                <div class="ef-control">
                  <input id="nf-key" kendoTextBox formControlName="counterKey"
                         placeholder="INVOICE / LEAD / ORDER"
                         style="text-transform:uppercase;font-family:'Share Tech Mono',monospace" />
                  <small class="ef-hint">\u05D0\u05D5\u05EA\u05D9\u05D5\u05EA \u05D2\u05D3\u05D5\u05DC\u05D5\u05EA, \u05E1\u05E4\u05E8\u05D5\u05EA \u05D5-_ \u05D1\u05DC\u05D1\u05D3. \u05DC\u05D0 \u05E0\u05D9\u05EA\u05DF \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05DC\u05D0\u05D7\u05E8 \u05D9\u05E6\u05D9\u05E8\u05D4</small>
                  @if (newForm.get('counterKey')?.invalid && newForm.get('counterKey')?.touched) {
                    <small class="err">\u05D0\u05D5\u05EA\u05D9\u05D5\u05EA \u05D2\u05D3\u05D5\u05DC\u05D5\u05EA, \u05E1\u05E4\u05E8\u05D5\u05EA \u05D5-_ \u05D1\u05DC\u05D1\u05D3</small>
                  }
                </div>
              </div>

              <!-- \u05E9\u05DD -->
              <div class="ef-row">
                <label class="ef-label" for="nf-name">\u05E9\u05DD \u05DE\u05D5\u05E0\u05D4 <span class="req">*</span></label>
                <div class="ef-control">
                  <input id="nf-name" kendoTextBox formControlName="counterName" placeholder="\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: \u05D7\u05E9\u05D1\u05D5\u05E0\u05D9\u05D5\u05EA" />
                  @if (newForm.get('counterName')?.invalid && newForm.get('counterName')?.touched) {
                    <small class="err">\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4</small>
                  }
                </div>
              </div>

              <!-- \u05EA\u05D7\u05D9\u05DC\u05D9\u05EA -->
              <div class="ef-row">
                <label class="ef-label" for="nf-prefix">\u05EA\u05D7\u05D9\u05DC\u05D9\u05EA (Prefix) <span class="req">*</span></label>
                <div class="ef-control">
                  <input id="nf-prefix" kendoTextBox formControlName="prefix"
                         placeholder="INV / LEAD / ORD"
                         style="text-transform:uppercase;font-family:'Share Tech Mono',monospace" />
                  <small class="ef-hint">\u05EA\u05D7\u05D9\u05DC\u05D9\u05EA \u05E9\u05EA\u05D5\u05E4\u05D9\u05E2 \u05D1\u05E4\u05E0\u05D9 \u05DE\u05E1\u05E4\u05E8 \u05D4\u05DE\u05E1\u05DE\u05DA</small>
                  @if (newForm.get('prefix')?.invalid && newForm.get('prefix')?.touched) {
                    <small class="err">\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4</small>
                  }
                </div>
              </div>

              <!-- \u05E4\u05D5\u05E8\u05DE\u05D8 \u05EA\u05D0\u05E8\u05D9\u05DA -->
              <div class="ef-row">
                <label class="ef-label">\u05E4\u05D5\u05E8\u05DE\u05D8 \u05EA\u05D0\u05E8\u05D9\u05DA</label>
                <div class="ef-control">
                  <kendo-dropdownlist
                    formControlName="dateFormat"
                    [data]="dateFormatOptions"
                    textField="text"
                    valueField="value"
                    [valuePrimitive]="true"
                    class="ef-dropdown" />
                </div>
              </div>

              <!-- \u05E1\u05D5\u05D2 \u05E4\u05DC\u05D8 -->
              <div class="ef-row">
                <label class="ef-label">\u05E1\u05D5\u05D2 \u05E4\u05DC\u05D8</label>
                <div class="ef-control">
                  <div class="seg-ctrl">
                    <button type="button" class="seg-btn"
                            [class.seg-on]="newForm.get('outputType')?.value === 'NUMERIC'"
                            (click)="newForm.get('outputType')?.setValue('NUMERIC')">\u05DE\u05E1\u05E4\u05E8\u05D9 \u2014 42</button>
                    <button type="button" class="seg-btn"
                            [class.seg-on]="newForm.get('outputType')?.value === 'STRING'"
                            (click)="newForm.get('outputType')?.setValue('STRING')">\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u2014 INV-2026-000042</button>
                  </div>
                  <small class="ef-hint">NUMERIC \u05DE\u05D7\u05D6\u05D9\u05E8 \u05DE\u05E1\u05E4\u05E8; STRING \u05DE\u05D7\u05D6\u05D9\u05E8 \u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05DE\u05E2\u05D5\u05E6\u05D1\u05EA</small>
                </div>
              </div>
            </div>
          }

          @if (newActiveGroup() === 'range') {
            <div class="ef-card">
              <div class="ef-card-title">\u05D8\u05D5\u05D5\u05D7 \u05E2\u05E8\u05DB\u05D9\u05DD</div>
              <div class="ef-row">
                <label class="ef-label">\u05E6\u05E2\u05D3 (Step)</label>
                <div class="ef-control">
                  <kendo-numerictextbox formControlName="stepValue"
                    [min]="1" [decimals]="0" [format]="'n0'" style="max-width:140px" />
                  <small class="ef-hint">\u05D2\u05D5\u05D3\u05DC \u05D4\u05D3\u05D9\u05DC\u05D5\u05D2 \u05D1\u05D9\u05DF \u05DE\u05E1\u05E4\u05E8 \u05DC\u05DE\u05E1\u05E4\u05E8 (\u05D1\u05D3\u05E8\u05DA \u05DB\u05DC\u05DC 1)</small>
                </div>
              </div>
              <div class="ef-row">
                <label class="ef-label">\u05E2\u05E8\u05DA \u05D4\u05EA\u05D7\u05DC\u05D4</label>
                <div class="ef-control">
                  <kendo-numerictextbox formControlName="startValue"
                    [min]="0" [decimals]="0" [format]="'n0'" style="max-width:140px" />
                  <small class="ef-hint">\u05D4\u05DE\u05E1\u05E4\u05E8 \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05E9\u05D9\u05D5\u05E7\u05E6\u05D4</small>
                </div>
              </div>
              <div class="ef-row">
                <label class="ef-label">\u05E2\u05E8\u05DA \u05DE\u05E7\u05E1\u05D9\u05DE\u05DC\u05D9</label>
                <div class="ef-control">
                  <kendo-numerictextbox formControlName="maxValue"
                    [min]="1" [decimals]="0" [format]="'n0'" style="max-width:140px" />
                  <small class="ef-hint">\u05DC\u05D0\u05D7\u05E8 \u05D4\u05D2\u05E2\u05D4 \u05DC\u05E2\u05E8\u05DA \u05D6\u05D4 \u2014 \u05D4\u05DE\u05D5\u05E0\u05D4 \u05D9\u05E0\u05E2\u05DC \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA</small>
                </div>
              </div>
            </div>
          }

          @if (newActiveGroup() === 'reset') {
            <div class="ef-card">
              <div class="ef-card-title">\u05DE\u05D7\u05D6\u05D5\u05E8\u05D9\u05D5\u05EA \u05D0\u05D9\u05E4\u05D5\u05E1</div>
              <div class="ef-row">
                <label class="ef-label">\u05EA\u05E7\u05D5\u05E4\u05EA \u05D0\u05D9\u05E4\u05D5\u05E1</label>
                <div class="ef-control">
                  <kendo-dropdownlist
                    formControlName="resetPeriod"
                    [data]="resetPeriodOptions"
                    textField="text"
                    valueField="value"
                    [valuePrimitive]="true"
                    class="ef-dropdown" />
                  <small class="ef-hint">
                    @switch (newForm.get('resetPeriod')?.value) {
                      @case ('NEVER')   { \u05D4\u05DE\u05D5\u05E0\u05D4 \u05DC\u05D0 \u05DE\u05EA\u05D0\u05E4\u05E1 \u05DC\u05E2\u05D5\u05DC\u05DD }
                      @case ('ANNUAL')  { \u05D4\u05DE\u05D5\u05E0\u05D4 \u05DE\u05EA\u05D0\u05E4\u05E1 \u05D1\u05EA\u05D7\u05D9\u05DC\u05EA \u05DB\u05DC \u05E9\u05E0\u05D4 }
                      @case ('MONTHLY') { \u05D4\u05DE\u05D5\u05E0\u05D4 \u05DE\u05EA\u05D0\u05E4\u05E1 \u05D1\u05EA\u05D7\u05D9\u05DC\u05EA \u05DB\u05DC \u05D7\u05D5\u05D3\u05E9 }
                    }
                  </small>
                </div>
              </div>
            </div>
          }

        </div><!-- /new-dialog-content -->
      </div><!-- /new-dialog-layout -->
    </form>

    <kendo-dialog-actions>
      <div class="dialog-footer">
        <button class="btn-save" (click)="submitNewCounter()" [disabled]="newSaving()">
          @if (newSaving()) { <kendo-loader type="pulsing" themeColor="secondary" size="small" /> }
          @else { \u2713 } \u05E6\u05D5\u05E8 \u05DE\u05D5\u05E0\u05D4
        </button>
        <button class="btn-cancel" (click)="closeNewDialog()">\u05D1\u05D9\u05D8\u05D5\u05DC</button>
      </div>
    </kendo-dialog-actions>
  </kendo-dialog>
}
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/settings/settings.component.scss */\n:host {\n  display: block;\n  width: 100%;\n}\n.settings-page {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background: var(--sf-bg);\n}\n.page-header {\n  padding: 20px 32px 16px;\n  border-bottom: none;\n  background: var(--sf-bg);\n}\n.page-header h1 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0 0 4px;\n}\n.page-header p {\n  font-size: 0.875rem;\n  color: var(--sf-text-muted);\n  margin: 0;\n}\n.settings-layout {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  min-height: 0;\n  gap: 0;\n  margin: 0 24px 24px;\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);\n}\n.settings-nav {\n  width: 220px;\n  flex-shrink: 0;\n  border-inline-end: 1px solid var(--sf-border);\n  background: var(--sf-bg-card);\n  padding: 16px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border: none;\n  border-radius: 10px;\n  background: transparent;\n  cursor: pointer;\n  width: 100%;\n  text-align: right;\n  color: var(--sf-text-secondary);\n  font-size: 0.875rem;\n  font-weight: 500;\n  position: relative;\n  transition: background 0.15s, color 0.15s;\n}\n.nav-item:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.nav-item.active {\n  background: var(--sf-primary-light, rgba(13, 71, 255, 0.08));\n  color: var(--sf-primary);\n  font-weight: 600;\n}\n.nav-item.active .nav-icon {\n  color: var(--sf-primary);\n}\n.nav-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: var(--sf-bg);\n  color: var(--sf-text-muted);\n  flex-shrink: 0;\n  transition: background 0.15s, color 0.15s;\n}\n.nav-item.active .nav-icon {\n  background: var(--sf-primary-light, rgba(13, 71, 255, 0.1));\n  color: var(--sf-primary);\n}\n.nav-text {\n  flex: 1;\n}\n.nav-indicator {\n  position: absolute;\n  inset-inline-end: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 20px;\n  border-radius: 2px 0 0 2px;\n  background: var(--sf-primary);\n}\n.settings-content {\n  flex: 1;\n  min-width: 0;\n  padding: 32px;\n  overflow-y: auto;\n}\n.content-section {\n  max-width: 860px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.section-header h2 {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0 0 4px;\n}\n.section-header p {\n  font-size: 0.875rem;\n  color: var(--sf-text-muted);\n  margin: 0;\n}\n.setting-card {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 14px;\n  padding: 24px;\n  transition: box-shadow 0.2s;\n}\n.setting-card:hover {\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n}\n.setting-card-title {\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--sf-text-muted);\n  margin-bottom: 14px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid var(--sf-border);\n}\n.setting-card-desc {\n  font-size: 0.82rem;\n  color: var(--sf-text-secondary);\n}\n.setting-card-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.theme-cards-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  align-items: stretch;\n}\n.theme-cards-grid .setting-card {\n  display: flex;\n  flex-direction: column;\n}\n.scheme-grid {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 10px;\n}\n.scheme-tile {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 12px 12px;\n  border: 2px solid var(--sf-border);\n  border-radius: 12px;\n  background: var(--sf-bg);\n  cursor: pointer;\n  transition:\n    border-color 0.15s,\n    box-shadow 0.15s,\n    transform 0.1s;\n}\n.scheme-tile:hover {\n  border-color: var(--sf-primary);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n}\n.scheme-tile.active {\n  border-color: var(--sf-primary);\n  background: var(--sf-primary-light, rgba(13, 71, 255, 0.06));\n  box-shadow: 0 0 0 3px rgba(13, 71, 255, 0.12);\n}\n.scheme-swatch {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.scheme-check {\n  color: #fff;\n  font-size: 0.9rem;\n  font-weight: 800;\n  line-height: 1;\n}\n.scheme-label {\n  font-size: 0.78rem;\n  font-weight: 500;\n  color: var(--sf-text-secondary);\n}\n.setting-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn-save {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #f97316;\n  color: #fff;\n  border: none;\n  border-radius: 9px;\n  padding: 10px 22px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s, box-shadow 0.15s;\n  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.3);\n}\n.btn-save:hover:not(:disabled) {\n  background: #ea6c0a;\n  box-shadow: 0 4px 14px rgba(249, 115, 22, 0.4);\n}\n.btn-save:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.btn-save kendo-loader {\n  display: inline-flex;\n}\n.coming-soon-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  min-height: 180px;\n  border-style: dashed;\n}\n.coming-soon-card p {\n  color: var(--sf-text-muted);\n  font-size: 0.9rem;\n  margin: 0;\n}\n.coming-soon-badge {\n  display: inline-block;\n  background:\n    linear-gradient(\n      135deg,\n      var(--sf-primary) 0%,\n      var(--sf-accent, #7c3aed) 100%);\n  color: #fff;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  padding: 4px 12px;\n  border-radius: 20px;\n  text-transform: uppercase;\n}\n.content-section--wide {\n  max-width: 100%;\n}\n.counters-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.level-filter {\n  display: flex;\n  gap: 0;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n  align-self: flex-start;\n}\n.level-btn {\n  padding: 7px 20px;\n  font-size: 0.82rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  border: none;\n  background: var(--sf-bg-card);\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.level-btn + .level-btn {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.level-btn:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.level-btn.active {\n  background: var(--sf-primary);\n  color: #fff;\n  font-weight: 600;\n}\n.state-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 48px;\n  color: var(--sf-text-secondary);\n}\n.state-box.error {\n  color: var(--sf-danger);\n}\n:host ::ng-deep .counters-grid {\n  border-radius: 10px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n:host ::ng-deep .counters-grid .k-grid-header th.k-header {\n  background: var(--sf-grid-hd-bg) !important;\n  color: var(--sf-grid-hd-color) !important;\n  font-weight: 700 !important;\n  font-size: 0.78rem !important;\n  text-align: right !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n}\n:host ::ng-deep .counters-grid .k-grid-header {\n  background: var(--sf-grid-hd-bg) !important;\n}\n:host ::ng-deep .counters-grid td.k-table-td {\n  text-align: right !important;\n  vertical-align: middle !important;\n  border-color: var(--sf-border) !important;\n  font-size: 0.875rem;\n  background: var(--sf-bg-card);\n  direction: rtl;\n  padding: 5px 8px !important;\n}\n:host ::ng-deep .counters-grid tr.k-table-row:hover td {\n  background: var(--sf-bg-hover) !important;\n}\n:host ::ng-deep .counters-grid .k-pager {\n  border-top: 1px solid var(--sf-border);\n  background: var(--sf-bg);\n  direction: rtl;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  font-size: 0.82rem;\n}\n:host ::ng-deep {\n}\n:host ::ng-deep .counters-grid .k-hierarchy-cell,\n:host ::ng-deep .counters-grid col.k-hierarchy-col {\n  display: none !important;\n  width: 0 !important;\n  padding: 0 !important;\n}\n:host ::ng-deep {\n}\n:host ::ng-deep .edit-screen-content .k-input-inner,\n:host ::ng-deep .new-dialog-content .k-input-inner {\n  direction: rtl;\n  text-align: right;\n}\n:host ::ng-deep .edit-screen-content .k-dropdownlist,\n:host ::ng-deep .edit-screen-content .k-dropdown-wrap,\n:host ::ng-deep .new-dialog-content .k-dropdownlist,\n:host ::ng-deep .new-dialog-content .k-dropdown-wrap {\n  direction: rtl;\n}\n:host ::ng-deep .edit-screen-content .k-list-item,\n:host ::ng-deep .new-dialog-content .k-list-item {\n  direction: rtl;\n  text-align: right;\n}\n:host ::ng-deep .edit-screen-content .k-numerictextbox .k-input-inner,\n:host ::ng-deep .new-dialog-content .k-numerictextbox .k-input-inner {\n  direction: ltr;\n  text-align: left;\n}\n.cell-input {\n  width: 100%;\n  border: 1px solid transparent;\n  border-radius: 5px;\n  padding: 4px 7px;\n  font-size: 0.82rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  background: transparent;\n  color: var(--sf-text);\n  direction: rtl;\n  transition: border-color 0.15s, background 0.15s;\n}\n.cell-input:focus {\n  outline: none;\n  border-color: var(--sf-border-focus);\n  background: var(--sf-bg);\n  box-shadow: 0 0 0 2px rgba(13, 71, 255, 0.1);\n}\n.cell-input--mono {\n  font-family: "Share Tech Mono", monospace;\n  letter-spacing: 0.03em;\n}\n.cell-input--num {\n  width: 100%;\n  text-align: center;\n}\n.cell-select {\n  width: 100%;\n  border: 1px solid transparent;\n  border-radius: 5px;\n  padding: 4px 7px;\n  font-size: 0.82rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  background: transparent;\n  color: var(--sf-text);\n  cursor: pointer;\n}\n.cell-select:focus {\n  outline: none;\n  border-color: var(--sf-border-focus);\n  background: var(--sf-bg);\n}\n.chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.chip-platform {\n  background: #faf5ff;\n  color: #7c3aed;\n}\n.chip-tenant {\n  background: #eff6ff;\n  color: #3b82f6;\n}\n.chip-customer {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.chip-product {\n  background: #fff7ed;\n  color: #ea580c;\n}\n.counter-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 44px;\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.counter-badge--running {\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.counter-badge--current {\n  background: #fef3c7;\n  color: #92400e;\n}\n.muted {\n  color: var(--sf-text-muted);\n  font-size: 0.85rem;\n}\n.cell-id {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n  color: var(--sf-text-muted);\n}\n.cell-key {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--sf-text);\n  letter-spacing: 0.03em;\n}\n.cell-date {\n  font-size: 0.8rem;\n  color: var(--sf-text-secondary);\n}\n.row-actions {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.act-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n  padding: 0;\n}\n.act-btn i {\n  font-size: 0.9rem;\n}\n.act-btn:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.act-expand {\n  color: var(--sf-text-secondary);\n}\n.act-expand:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-primary);\n}\n.act-lock {\n  color: #ef4444;\n}\n.act-lock:hover {\n  background: #fef2f2;\n}\n.act-unlock {\n  color: #16a34a;\n}\n.act-unlock:hover {\n  background: #f0fdf4;\n}\n.act-edit {\n  color: #3b82f6;\n}\n.act-edit:hover {\n  background: #eff6ff;\n}\n.act-save {\n  color: #16a34a;\n  font-weight: 700;\n}\n.act-save:hover {\n  background: #f0fdf4;\n}\n.act-reset {\n  color: var(--sf-text-secondary);\n}\n.act-reset:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-primary);\n}\n.counter-detail {\n  padding: 14px 16px;\n  background: var(--sf-bg);\n  border-top: 1px solid var(--sf-border);\n  direction: rtl;\n}\n.detail-cards {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.detail-cards .setting-card {\n  padding: 16px;\n}\n.detail-cards .setting-card:hover {\n  box-shadow: none;\n}\n.detail-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 5px 0;\n  border-bottom: 1px solid var(--sf-border);\n  font-size: 0.82rem;\n}\n.detail-row:last-child {\n  border-bottom: none;\n}\n.detail-row span:first-child {\n  color: var(--sf-text-secondary);\n}\n.detail-row strong {\n  color: var(--sf-text);\n  font-weight: 600;\n}\n.detail-row .mono {\n  font-family: "Share Tech Mono", monospace;\n}\n.chip-locked {\n  background: #fef2f2;\n  color: #dc2626;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.chip-active {\n  background: #f0fdf4;\n  color: #16a34a;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n:host ::ng-deep .k-dialog-actions {\n  direction: rtl !important;\n}\n.new-dialog-layout {\n  display: flex;\n  flex-direction: row;\n  direction: rtl;\n  min-height: 360px;\n  margin: -8px -24px;\n}\n.new-dialog-content {\n  flex: 1;\n  padding: 20px 24px;\n  overflow-y: auto;\n  direction: rtl;\n}\n.form-row {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  direction: rtl;\n}\n.form-row label {\n  min-width: 170px;\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: var(--sf-text);\n  padding-top: 7px;\n  flex-shrink: 0;\n}\n.input-col {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex: 1;\n}\n.req {\n  color: var(--sf-danger);\n}\n.err {\n  font-size: 0.76rem;\n  color: var(--sf-danger);\n}\n.num-row {\n  display: flex;\n  gap: 8px;\n  flex: 1;\n}\n.num-row input {\n  flex: 1;\n  min-width: 0;\n  text-align: center;\n}\n.dialog-footer {\n  display: flex;\n  gap: 10px;\n  direction: rtl !important;\n  padding: 4px 0;\n}\n.btn-cancel {\n  padding: 9px 20px;\n  border: 1px solid var(--sf-border);\n  border-radius: 9px;\n  background: var(--sf-bg-card);\n  color: var(--sf-text-secondary);\n  font-size: 0.875rem;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.btn-cancel:hover {\n  background: var(--sf-bg-hover);\n}\n.seg-ctrl {\n  display: inline-flex;\n  direction: rtl;\n  align-self: flex-start;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.seg-btn {\n  padding: 7px 20px;\n  font-size: 0.82rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  border: none;\n  background: var(--sf-bg);\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.seg-btn + .seg-btn {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.seg-btn:hover:not(.seg-on):not(.seg-off) {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.seg-btn.seg-on {\n  background: var(--sf-primary);\n  color: #fff;\n  font-weight: 600;\n}\n.edit-screen {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.edit-screen-header {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid var(--sf-border);\n  margin-bottom: 24px;\n}\n.edit-back-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 7px 14px;\n  font-size: 0.84rem;\n  font-weight: 500;\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: background 0.15s, color 0.15s;\n}\n.edit-back-btn:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.edit-screen-title {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.edit-screen-key {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  letter-spacing: 0.04em;\n}\n.edit-screen-sub {\n  font-size: 0.78rem;\n  color: var(--sf-text-muted);\n}\n.edit-screen-body {\n  flex: 1;\n  min-height: 0;\n}\n.edit-screen-layout {\n  display: flex;\n  flex-direction: row;\n  gap: 0;\n  border: 1px solid var(--sf-border);\n  border-radius: 14px;\n  background: var(--sf-bg-card);\n  overflow: hidden;\n  min-height: 400px;\n}\n.edit-screen-nav {\n  width: 190px;\n  flex-shrink: 0;\n  border-inline-end: 1px solid var(--sf-border);\n  padding: 12px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  background: var(--sf-bg);\n}\n.edit-nav-item {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 9px 12px;\n  border: none;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  width: 100%;\n  text-align: right;\n  color: var(--sf-text-secondary);\n  font-size: 0.83rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  position: relative;\n  transition: background 0.15s, color 0.15s;\n}\n.edit-nav-item:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.edit-nav-item.active {\n  background: var(--sf-primary-light, rgba(13, 71, 255, 0.08));\n  color: var(--sf-primary);\n  font-weight: 600;\n}\n.edit-nav-item.active .edit-nav-icon {\n  color: var(--sf-primary);\n}\n.edit-nav-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  background: var(--sf-bg-card);\n  color: var(--sf-text-muted);\n  flex-shrink: 0;\n}\n.edit-nav-item.active .edit-nav-icon {\n  background: var(--sf-primary-light, rgba(13, 71, 255, 0.1));\n  color: var(--sf-primary);\n}\n.edit-nav-text {\n  flex: 1;\n}\n.edit-nav-indicator {\n  position: absolute;\n  inset-inline-end: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 18px;\n  border-radius: 2px 0 0 2px;\n  background: var(--sf-primary);\n}\n.edit-screen-content {\n  flex: 1;\n  padding: 24px;\n  overflow-y: auto;\n}\n.ef-card {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 12px;\n  padding: 20px 24px;\n}\n.ef-card--info {\n  background: var(--sf-bg);\n  border-style: dashed;\n}\n.ef-card-title {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--sf-text-muted);\n  margin-bottom: 16px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid var(--sf-border);\n}\n.ef-row {\n  display: grid;\n  grid-template-columns: 180px 1fr;\n  align-items: start;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid var(--sf-border);\n  direction: rtl;\n}\n.ef-row:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.ef-row:first-of-type {\n  padding-top: 0;\n}\n.ef-row--readonly {\n  align-items: center;\n}\n.ef-row--readonly .ef-label {\n  padding-top: 0;\n}\n.ef-label {\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  padding-top: 8px;\n  flex-shrink: 0;\n}\n.ef-control {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.ef-value {\n  font-size: 0.875rem;\n  color: var(--sf-text);\n  font-weight: 500;\n  padding-top: 7px;\n}\n.ef-mono {\n  font-family: "Share Tech Mono", monospace;\n}\n.ef-bold {\n  font-weight: 700;\n}\n.ef-hint {\n  font-size: 0.76rem;\n  color: var(--sf-text-muted);\n}\n.ef-select {\n  border: 1px solid var(--sf-border);\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 0.875rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  background: var(--sf-bg);\n  color: var(--sf-text);\n  cursor: pointer;\n  max-width: 220px;\n  direction: rtl;\n}\n.ef-select:focus {\n  outline: none;\n  border-color: var(--sf-border-focus);\n  box-shadow: 0 0 0 2px rgba(13, 71, 255, 0.1);\n}\n.ef-dropdown {\n  max-width: 220px;\n  width: 100%;\n}\n.edit-screen-footer {\n  display: flex;\n  gap: 10px;\n  direction: rtl;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid var(--sf-border);\n}\n.audit-log-layout {\n  display: flex;\n  flex-direction: row;\n  min-height: 400px;\n}\n.audit-sub-nav {\n  width: 180px;\n  flex-shrink: 0;\n  border-inline-end: 1px solid var(--sf-border);\n  background: var(--sf-bg);\n  padding: 12px 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.audit-sub-content {\n  flex: 1;\n  min-width: 0;\n  overflow: auto;\n}\n@media (max-width: 640px) {\n  .settings-layout {\n    flex-direction: column-reverse;\n  }\n  .settings-nav {\n    width: 100%;\n    flex-direction: row;\n    overflow-x: auto;\n    padding: 8px;\n  }\n  .nav-item {\n    flex: 0 0 auto;\n    flex-direction: column;\n    padding: 8px 12px;\n    gap: 4px;\n    font-size: 0.75rem;\n  }\n  .nav-indicator {\n    display: none;\n  }\n  .scheme-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=settings.component.css.map */\n'] }]
  }], () => [{ type: ThemeService }, { type: AuthService }, { type: NotificationService }, { type: CounterService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/features/settings/settings.component.ts", lineNumber: 38 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=chunk-N5XRIGQU.js.map
