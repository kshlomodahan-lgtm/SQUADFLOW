import {
  AnimationBuilder,
  ComponentMessages,
  IconWrapperComponent,
  IconsService,
  KENDO_WEBMCP_HOST,
  L10N_PREFIX,
  LocalizationService,
  checkIcon,
  exclamationCircleIcon,
  guid,
  infoCircleIcon,
  xCircleIcon,
  xIcon
} from "./chunk-BV74N4V5.js";
import {
  A,
  animate,
  style
} from "./chunk-YZNXQPNO.js";
import {
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  HostBinding,
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
  createComponent,
  forwardRef,
  setClassMetadata,
  take,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-VR4UVLCZ.js";

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

export {
  NotificationService,
  NotificationModule
};
//# sourceMappingURL=chunk-M7FXBDNT.js.map
