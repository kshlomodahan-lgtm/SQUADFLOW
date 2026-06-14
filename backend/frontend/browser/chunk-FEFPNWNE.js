import {
  CellTemplateDirective,
  CheckboxColumnComponent,
  ColumnComponent2 as ColumnComponent,
  CustomMessagesComponent2 as CustomMessagesComponent,
  GridComponent,
  GridModule,
  orderBy
} from "./chunk-7GBLAVZE.js";
import "./chunk-BYBLGOFY.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-AVTM4YYQ.js";
import "./chunk-7BTXUMFJ.js";
import {
  ButtonsModule
} from "./chunk-BV74N4V5.js";
import "./chunk-YZNXQPNO.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-4FOUEPN2.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  EventEmitter,
  HttpClient,
  HttpParams,
  Injectable,
  Input,
  NgClass,
  Output,
  __spreadProps,
  __spreadValues,
  computed,
  map,
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
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VR4UVLCZ.js";

// src/app/features/arachim/orders/order-drawer/order-drawer.component.ts
var _forTrack0 = ($index, $item) => $item.orderLineId;
function OrderDrawerComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "\u05DE\u05E1\u05D2\u05E8\u05EA");
    \u0275\u0275elementEnd();
  }
}
function OrderDrawerComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4, "\u05D4\u05EA\u05E7\u05D1\u05DC\u05D4");
    \u0275\u0275elementEnd()();
  }
}
function OrderDrawerComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 34)(2, "span", 35);
    \u0275\u0275text(3, "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05D6\u05DE\u05E0\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 34)(7, "span", 35);
    \u0275\u0275text(8, "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D0\u05E1\u05E4\u05E7\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 36);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 34)(12, "span", 35);
    \u0275\u0275text(13, "\u05EA\u05D7\u05D5\u05DD \u05DE\u05DB\u05D9\u05E8\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 36);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 34)(17, "span", 35);
    \u0275\u0275text(18, "\u05D0\u05D9\u05E9 \u05DE\u05DB\u05D9\u05E8\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 36);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 34)(22, "span", 35);
    \u0275\u0275text(23, "\u05D4\u05E4\u05E0\u05D9\u05D9\u05EA \u05DC\u05E7\u05D5\u05D7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 37);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 34)(27, "span", 35);
    \u0275\u0275text(28, "\u05DE\u05D8\u05D1\u05E2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 36);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 34)(32, "span", 35);
    \u0275\u0275text(33, "\u05E1\u05D5\u05D2 \u05E2\u05DE\u05DC\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 36);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 34)(37, "span", 35);
    \u0275\u0275text(38, "\u05E9\u05D9\u05E2\u05D5\u05E8/\u05E1\u05DB\u05D5\u05DD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 36);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 34)(42, "span", 35);
    \u0275\u0275text(43, "\u05D7\u05D5\u05D6\u05D4 \u05DE\u05E1\u05D2\u05E8\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 36);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 34)(47, "span", 35);
    \u0275\u0275text(48, "\u05E1\u05D8\u05D8\u05D5\u05E1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 36);
    \u0275\u0275element(50, "span", 38);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.dateStr(ctx_r0.order.orderDate));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.dateStr(ctx_r0.order.deliveryDate));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.order.salesDomain, " (", ctx_r0.order.salesDomainPrefix, ")");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.order.salesPerson);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.order.customerRef || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.order.currency);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.commLabels[ctx_r0.order.commissionType]);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.commDetail());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.order.isFrameContract ? "\u05DB\u05DF" : "\u05DC\u05D0");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", "dot-" + ctx_r0.order.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabels[ctx_r0.order.status], " ");
  }
}
function OrderDrawerComponent_Conditional_73_For_31_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r2.customerSKU);
  }
}
function OrderDrawerComponent_Conditional_73_For_31_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, l_r2.commissionAmount, "1.0-0"));
  }
}
function OrderDrawerComponent_Conditional_73_For_31_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function OrderDrawerComponent_Conditional_73_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 48)(2, "span", 49);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 50);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, OrderDrawerComponent_Conditional_73_For_31_Conditional_7_Template, 2, 1, "div", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 52);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 47);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementStart(13, "span", 53);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "div", 54)(17, "div", 55);
    \u0275\u0275element(18, "div", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 57);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "td", 47);
    \u0275\u0275conditionalCreate(23, OrderDrawerComponent_Conditional_73_For_31_Conditional_23_Template, 3, 4, "span", 58)(24, OrderDrawerComponent_Conditional_73_For_31_Conditional_24_Template, 2, 0, "span", 59);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", l_r2.groupNo, ".", l_r2.lineNo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(l_r2.supplierSKU);
    \u0275\u0275advance();
    \u0275\u0275conditional(l_r2.customerSKU ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 17, l_r2.qtyOrdered, "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(l_r2.uom);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx_r0.dispatchPct(l_r2), "%");
    \u0275\u0275classProp("dp-full", ctx_r0.dispatchPct(l_r2) === 100)("dp-partial", ctx_r0.dispatchPct(l_r2) > 0 && ctx_r0.dispatchPct(l_r2) < 100)("dp-none", ctx_r0.dispatchPct(l_r2) === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 20, l_r2.qtyDispatched, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(l_r2.commissionAmount > 0 ? 23 : 24);
  }
}
function OrderDrawerComponent_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 39)(2, "div", 40)(3, "span");
    \u0275\u0275text(4, "\u05E0\u05D9\u05E4\u05D5\u05E7 \u05DB\u05D5\u05DC\u05DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 41);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 42);
    \u0275\u0275element(8, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 44);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 45)(14, "table", 46)(15, "thead")(16, "tr")(17, "th");
    \u0275\u0275text(18, "\u05E7\u05D1'/\u05E9\u05D5'");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, '\u05DE\u05E7"\u05D8 \u05E1\u05E4\u05E7');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "\u05EA\u05D9\u05D0\u05D5\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 47);
    \u0275\u0275text(24, "\u05DB\u05DE\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "\u05E0\u05D9\u05E4\u05D5\u05E7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 47);
    \u0275\u0275text(28, "\u05E2\u05DE\u05DC\u05D4");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275repeaterCreate(30, OrderDrawerComponent_Conditional_73_For_31_Template, 25, 23, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r0.totalDispatchPct(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.totalDispatchPct(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(11, 5, ctx_r0.totalQtyDispatched(), "1.0-0"), " / ", \u0275\u0275pipeBind2(12, 8, ctx_r0.totalQtyOrdered(), "1.0-0"), " \u05D9\u05D7'");
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r0.order.lines);
  }
}
function OrderDrawerComponent_Conditional_74_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.order.shipment.supplierOC);
  }
}
function OrderDrawerComponent_Conditional_74_Conditional_1_Conditional_33_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 35);
    \u0275\u0275text(2, "\u05E9\u05DD \u05D0\u05D5\u05E0\u05D9\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.order.shipment.vesselName);
  }
}
function OrderDrawerComponent_Conditional_74_Conditional_1_Conditional_33_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 35);
    \u0275\u0275text(2, "\u05DE\u05E1' B/L");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.order.shipment.blNumber);
  }
}
function OrderDrawerComponent_Conditional_74_Conditional_1_Conditional_33_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 35);
    \u0275\u0275text(2, "\u05DE\u05D5\u05E2\u05D3 \u05D0\u05E1\u05E4\u05E7\u05D4 \u05E8\u05E6\u05D5\u05D9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.dateStr(ctx_r0.order.shipment.desiredDeliveryDate));
  }
}
function OrderDrawerComponent_Conditional_74_Conditional_1_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275conditionalCreate(1, OrderDrawerComponent_Conditional_74_Conditional_1_Conditional_33_Conditional_1_Template, 5, 1, "div", 34);
    \u0275\u0275conditionalCreate(2, OrderDrawerComponent_Conditional_74_Conditional_1_Conditional_33_Conditional_2_Template, 5, 1, "div", 34);
    \u0275\u0275conditionalCreate(3, OrderDrawerComponent_Conditional_74_Conditional_1_Conditional_33_Conditional_3_Template, 5, 1, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.order.shipment.vesselName ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.order.shipment.blNumber ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.order.shipment.desiredDeliveryDate ? 3 : -1);
  }
}
function OrderDrawerComponent_Conditional_74_Conditional_1_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "mat-icon");
    \u0275\u0275text(2, "local_shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\u05D0\u05D9\u05DF \u05E0\u05EA\u05D5\u05E0\u05D9 \u05DE\u05E9\u05DC\u05D5\u05D7 \u05E2\u05D3\u05D9\u05D9\u05DF");
    \u0275\u0275elementEnd()();
  }
}
function OrderDrawerComponent_Conditional_74_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62);
    \u0275\u0275element(2, "div", 63);
    \u0275\u0275elementStart(3, "div", 64)(4, "div", 65);
    \u0275\u0275text(5, "\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05D6\u05DE\u05E0\u05D4 (OC)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 66);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, OrderDrawerComponent_Conditional_74_Conditional_1_Conditional_8_Template, 2, 1, "div", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "div", 68);
    \u0275\u0275elementStart(10, "div", 62);
    \u0275\u0275element(11, "div", 63);
    \u0275\u0275elementStart(12, "div", 64)(13, "div", 65);
    \u0275\u0275text(14, "\u05D9\u05E6\u05D9\u05D0\u05D4 \u05DE\u05D4\u05DE\u05E4\u05E2\u05DC (ETD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 66);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(17, "div", 68);
    \u0275\u0275elementStart(18, "div", 62);
    \u0275\u0275element(19, "div", 63);
    \u0275\u0275elementStart(20, "div", 64)(21, "div", 65);
    \u0275\u0275text(22, "\u05D4\u05D2\u05E2\u05D4 \u05DE\u05E9\u05D5\u05E2\u05E8\u05EA (ETA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 66);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(25, "div", 68);
    \u0275\u0275elementStart(26, "div", 62);
    \u0275\u0275element(27, "div", 63);
    \u0275\u0275elementStart(28, "div", 64)(29, "div", 65);
    \u0275\u0275text(30, "\u05D4\u05D2\u05E2\u05D4 \u05D1\u05E4\u05D5\u05E2\u05DC (ATA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 66);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(33, OrderDrawerComponent_Conditional_74_Conditional_1_Conditional_33_Template, 4, 3, "div", 69);
    \u0275\u0275conditionalCreate(34, OrderDrawerComponent_Conditional_74_Conditional_1_Conditional_34_Template, 5, 0, "div", 60);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("done", ctx_r0.shipmentStepDone("oc"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.dateStr(ctx_r0.order.shipment.supplierOCDate));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.order.shipment.supplierOC ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("done", ctx_r0.shipmentStepDone("oc"));
    \u0275\u0275advance();
    \u0275\u0275classProp("done", ctx_r0.shipmentStepDone("etd"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.dateStr(ctx_r0.order.shipment.etd));
    \u0275\u0275advance();
    \u0275\u0275classProp("done", ctx_r0.shipmentStepDone("etd"));
    \u0275\u0275advance();
    \u0275\u0275classProp("done", ctx_r0.shipmentStepDone("eta"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.dateStr(ctx_r0.order.shipment.eta));
    \u0275\u0275advance();
    \u0275\u0275classProp("done", ctx_r0.shipmentStepDone("eta"));
    \u0275\u0275advance();
    \u0275\u0275classProp("done", ctx_r0.shipmentStepDone("ata"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.dateStr(ctx_r0.order.shipment.ata));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.order.shipment.vesselName || ctx_r0.order.shipment.blNumber ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.order.shipment.supplierOCDate ? 34 : -1);
  }
}
function OrderDrawerComponent_Conditional_74_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "mat-icon");
    \u0275\u0275text(2, "local_shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\u05D0\u05D9\u05DF \u05E0\u05EA\u05D5\u05E0\u05D9 \u05DE\u05E9\u05DC\u05D5\u05D7");
    \u0275\u0275elementEnd()();
  }
}
function OrderDrawerComponent_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275conditionalCreate(1, OrderDrawerComponent_Conditional_74_Conditional_1_Template, 35, 21)(2, OrderDrawerComponent_Conditional_74_Conditional_2_Template, 5, 0, "div", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.order.shipment ? 1 : 2);
  }
}
function OrderDrawerComponent_Conditional_75_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 83);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.order.financial.supplierInvoiceNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.dateStr(ctx_r0.order.financial.supplierInvoiceDate));
  }
}
function OrderDrawerComponent_Conditional_75_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, ctx_r0.order.financial.invoiceAmount, "1.0-0"), " ", ctx_r0.order.financial.currency, " ");
  }
}
function OrderDrawerComponent_Conditional_75_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function OrderDrawerComponent_Conditional_75_Conditional_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, "\u05D4\u05D5\u05E6\u05D0\u05D4");
    \u0275\u0275elementEnd();
  }
}
function OrderDrawerComponent_Conditional_75_Conditional_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275text(1, "\u05D8\u05E8\u05DD \u05D4\u05D5\u05E6\u05D0\u05D4");
    \u0275\u0275elementEnd();
  }
}
function OrderDrawerComponent_Conditional_75_Conditional_1_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, ctx_r0.order.financial.amountPaidByCustomer, "1.0-0"), " ", ctx_r0.order.financial.currency, " ");
  }
}
function OrderDrawerComponent_Conditional_75_Conditional_1_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function OrderDrawerComponent_Conditional_75_Conditional_1_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, "\u05E9\u05D5\u05DC\u05DD");
    \u0275\u0275elementEnd();
  }
}
function OrderDrawerComponent_Conditional_75_Conditional_1_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275text(1, "\u05DE\u05DE\u05EA\u05D9\u05DF");
    \u0275\u0275elementEnd();
  }
}
function OrderDrawerComponent_Conditional_75_Conditional_1_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u05D4\u05EA\u05E7\u05D1\u05DC: ", \u0275\u0275pipeBind2(2, 1, ctx_r0.order.financial.commissionAmountReceived, "1.0-0"), " ");
  }
}
function OrderDrawerComponent_Conditional_75_Conditional_1_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, "\u05D4\u05EA\u05E7\u05D1\u05DC\u05D4");
    \u0275\u0275elementEnd();
  }
}
function OrderDrawerComponent_Conditional_75_Conditional_1_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275text(1, "\u05DC\u05D0 \u05D4\u05EA\u05E7\u05D1\u05DC\u05D4");
    \u0275\u0275elementEnd();
  }
}
function OrderDrawerComponent_Conditional_75_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 71)(2, "div", 72)(3, "mat-icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 73)(6, "div", 74);
    \u0275\u0275text(7, "\u05D7\u05E9\u05D1\u05D5\u05E0\u05D9\u05EA \u05DC\u05E1\u05E4\u05E7");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, OrderDrawerComponent_Conditional_75_Conditional_1_Conditional_8_Template, 4, 2);
    \u0275\u0275elementStart(9, "div", 75);
    \u0275\u0275conditionalCreate(10, OrderDrawerComponent_Conditional_75_Conditional_1_Conditional_10_Template, 2, 5)(11, OrderDrawerComponent_Conditional_75_Conditional_1_Conditional_11_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 76);
    \u0275\u0275conditionalCreate(13, OrderDrawerComponent_Conditional_75_Conditional_1_Conditional_13_Template, 2, 0, "span", 77)(14, OrderDrawerComponent_Conditional_75_Conditional_1_Conditional_14_Template, 2, 0, "span", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 71)(16, "div", 72)(17, "mat-icon");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 73)(20, "div", 74);
    \u0275\u0275text(21, "\u05EA\u05E9\u05DC\u05D5\u05DD \u05DC\u05E7\u05D5\u05D7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 75);
    \u0275\u0275conditionalCreate(23, OrderDrawerComponent_Conditional_75_Conditional_1_Conditional_23_Template, 2, 5)(24, OrderDrawerComponent_Conditional_75_Conditional_1_Conditional_24_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 76);
    \u0275\u0275conditionalCreate(26, OrderDrawerComponent_Conditional_75_Conditional_1_Conditional_26_Template, 2, 0, "span", 77)(27, OrderDrawerComponent_Conditional_75_Conditional_1_Conditional_27_Template, 2, 0, "span", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 71)(29, "div", 72)(30, "mat-icon");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 73)(33, "div", 74);
    \u0275\u0275text(34, "\u05E2\u05DE\u05DC\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 79);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(38, OrderDrawerComponent_Conditional_75_Conditional_1_Conditional_38_Template, 3, 4, "div", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 76);
    \u0275\u0275conditionalCreate(40, OrderDrawerComponent_Conditional_75_Conditional_1_Conditional_40_Template, 2, 0, "span", 77)(41, OrderDrawerComponent_Conditional_75_Conditional_1_Conditional_41_Template, 2, 0, "span", 81);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("fin-ok", ctx_r0.order.financial.invoiceIssuedToSupplier)("fin-pending", !ctx_r0.order.financial.invoiceIssuedToSupplier && ctx_r0.order.status !== "cancelled");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.order.financial.invoiceIssuedToSupplier ? "receipt" : "receipt_long");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.order.financial.supplierInvoiceNo ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.order.financial.invoiceAmount > 0 ? 10 : 11);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.order.financial.invoiceIssuedToSupplier ? 13 : 14);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("fin-ok", ctx_r0.order.financial.customerPaid);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.order.financial.customerPaid ? "payments" : "pending_actions");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.order.financial.amountPaidByCustomer > 0 ? 23 : 24);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.order.financial.customerPaid ? 26 : 27);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("fin-ok", ctx_r0.order.financial.commissionReceived);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.order.financial.commissionReceived ? "paid" : "monetization_on");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(37, 20, ctx_r0.order.commissionAmount, "1.0-0"), " ", ctx_r0.order.currency, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.order.financial.commissionAmountReceived > 0 ? 38 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.order.financial.commissionReceived ? 40 : 41);
  }
}
function OrderDrawerComponent_Conditional_75_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "mat-icon");
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\u05D0\u05D9\u05DF \u05E0\u05EA\u05D5\u05E0\u05D9 \u05E4\u05D9\u05E0\u05E0\u05E1\u05D9\u05DD");
    \u0275\u0275elementEnd()();
  }
}
function OrderDrawerComponent_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275conditionalCreate(1, OrderDrawerComponent_Conditional_75_Conditional_1_Template, 42, 23, "div", 70)(2, OrderDrawerComponent_Conditional_75_Conditional_2_Template, 5, 0, "div", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.order.financial ? 1 : 2);
  }
}
function OrderDrawerComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 32)(1, "mat-icon");
    \u0275\u0275text(2, "pause_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u05D4\u05E7\u05E4\u05D0\u05D4 ");
    \u0275\u0275elementEnd();
  }
}
function OrderDrawerComponent_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 32)(1, "mat-icon");
    \u0275\u0275text(2, "play_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u05E9\u05D7\u05E8\u05D5\u05E8 \u05D4\u05E7\u05E4\u05D0\u05D4 ");
    \u0275\u0275elementEnd();
  }
}
function OrderDrawerComponent_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 33)(1, "mat-icon");
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u05D1\u05D9\u05D8\u05D5\u05DC ");
    \u0275\u0275elementEnd();
  }
}
var OrderDrawerComponent = class _OrderDrawerComponent {
  order;
  closed = new EventEmitter();
  tab = signal(
    "details",
    ...ngDevMode ? [{ debugName: "tab" }] : (
      /* istanbul ignore next */
      []
    )
  );
  statusLabels = {
    active: "\u05E4\u05E2\u05D9\u05DC",
    important: "\u05D7\u05E9\u05D5\u05D1",
    frozen: "\u05DE\u05D5\u05E7\u05E4\u05D0",
    cancelled: "\u05D1\u05D5\u05D8\u05DC",
    frame: "\u05DE\u05E1\u05D2\u05E8\u05EA"
  };
  commLabels = {
    PCT: "\u05D0\u05D7\u05D5\u05D6",
    FIXED: "\u05E1\u05DB\u05D5\u05DD \u05E7\u05D1\u05D5\u05E2",
    PER_PRICE: "\u05DC\u05E4\u05D9 \u05DE\u05D7\u05D9\u05E8",
    NONE: "\u05DC\u05DC\u05D0"
  };
  close() {
    this.closed.emit();
  }
  orderBadge() {
    return `${this.order.orderYear}-${this.order.orderNumber.toString().padStart(3, "0")}`;
  }
  dispatchPct(line) {
    if (!line.qtyOrdered)
      return 0;
    return Math.min(100, Math.round(line.qtyDispatched / line.qtyOrdered * 100));
  }
  totalQtyOrdered() {
    return (this.order.lines || []).reduce((s, l) => s + l.qtyOrdered, 0);
  }
  totalQtyDispatched() {
    return (this.order.lines || []).reduce((s, l) => s + l.qtyDispatched, 0);
  }
  totalDispatchPct() {
    const total = this.totalQtyOrdered();
    return total ? Math.round(this.totalQtyDispatched() / total * 100) : 0;
  }
  shipmentStepDone(step) {
    const s = this.order.shipment;
    if (!s)
      return false;
    switch (step) {
      case "oc":
        return !!s.supplierOCDate;
      case "etd":
        return !!s.etd;
      case "eta":
        return !!s.eta;
      case "ata":
        return !!s.ata;
    }
  }
  dateStr(d) {
    if (!d)
      return "\u2014";
    return new Date(d).toLocaleDateString("he-IL", { day: "2-digit", month: "2-digit", year: "2-digit" });
  }
  commDetail() {
    if (this.order.commissionType === "PCT")
      return `${(this.order.commissionPct || 0).toFixed(1)}%`;
    if (this.order.commissionType === "FIXED")
      return `${this.order.currency} ${(this.order.commissionAmount || 0).toLocaleString()}`;
    return "\u2014";
  }
  hasLines() {
    return !!this.order.lines?.length;
  }
  hasShipment() {
    return !!this.order.shipment;
  }
  hasFinancial() {
    return !!this.order.financial;
  }
  static \u0275fac = function OrderDrawerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderDrawerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderDrawerComponent, selectors: [["app-order-drawer"]], inputs: { order: "order" }, outputs: { closed: "closed" }, decls: 84, vars: 37, consts: [[1, "drawer-wrap"], [1, "dh"], [1, "dh-top-bar"], [1, "dh-content"], [1, "dh-row1"], [1, "dh-badge-row"], [1, "dh-order-no"], [1, "dh-status-chip", 3, "ngClass"], [1, "dh-frame-chip"], ["title", "\u05E1\u05D2\u05D5\u05E8", 1, "dh-close", 3, "click"], [1, "dh-entities"], [1, "dh-supplier"], [1, "dh-arr"], [1, "dh-customer"], [1, "dh-meta-row"], [1, "dh-meta-item"], [1, "dh-fin-row"], [1, "dh-fin-chip"], [1, "dfc-label"], [1, "dfc-value"], [1, "dh-fin-chip", "dfc-commission"], [1, "dh-fin-chip", "dfc-received"], [1, "drawer-tabs"], [1, "dtab", 3, "click"], [1, "tab-cnt"], [1, "drawer-body"], [1, "details-grid"], [1, "lines-section"], [1, "shipment-section"], [1, "finance-section"], [1, "drawer-footer"], [1, "df-btn-primary"], [1, "df-btn-secondary"], [1, "df-btn-danger"], [1, "dg-item"], [1, "dg-label"], [1, "dg-value"], [1, "dg-value", "dg-mono"], [1, "dg-status-dot", 3, "ngClass"], [1, "overall-dispatch"], [1, "od-labels"], [1, "od-pct"], [1, "od-bar"], [1, "od-fill"], [1, "od-sub"], [1, "lines-table-wrap"], [1, "lines-table"], [1, "ta-num"], [1, "ta-center"], [1, "group-badge"], [1, "sku-mono"], [1, "sku-customer"], [1, "line-desc"], [1, "uom-badge"], [1, "dispatch-progress"], [1, "dp-bar"], [1, "dp-fill"], [1, "dp-label"], [1, "line-comm"], [1, "text-muted"], [1, "empty-state"], [1, "shipment-timeline"], [1, "st-step"], [1, "st-dot"], [1, "st-content"], [1, "st-label"], [1, "st-date"], [1, "st-ref"], [1, "st-line"], [1, "ship-details"], [1, "fin-cards"], [1, "fin-card"], [1, "finc-icon"], [1, "finc-body"], [1, "finc-title"], [1, "finc-amount"], [1, "finc-status"], [1, "fin-chip", "fin-chip-ok"], [1, "fin-chip", "fin-chip-pending"], [1, "finc-amount", "finc-commission"], [1, "finc-received"], [1, "fin-chip", "fin-chip-warn"], [1, "finc-ref"], [1, "finc-date"]], template: function OrderDrawerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "span", 6);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span", 7);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(10, OrderDrawerComponent_Conditional_10_Template, 2, 0, "span", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 9);
      \u0275\u0275listener("click", function OrderDrawerComponent_Template_button_click_11_listener() {
        return ctx.close();
      });
      \u0275\u0275elementStart(12, "mat-icon");
      \u0275\u0275text(13, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 10)(15, "span", 11);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "mat-icon", 12);
      \u0275\u0275text(18, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span", 13);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 14)(22, "span", 15)(23, "mat-icon");
      \u0275\u0275text(24, "calendar_today");
      \u0275\u0275elementEnd();
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span", 15)(27, "mat-icon");
      \u0275\u0275text(28, "person");
      \u0275\u0275elementEnd();
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 15)(31, "mat-icon");
      \u0275\u0275text(32, "domain");
      \u0275\u0275elementEnd();
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 15)(35, "mat-icon");
      \u0275\u0275text(36, "account_balance_wallet");
      \u0275\u0275elementEnd();
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 16)(39, "div", 17)(40, "span", 18);
      \u0275\u0275text(41, "\u05E2\u05E8\u05DA \u05DB\u05D5\u05DC\u05DC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "span", 19);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 20)(46, "span", 18);
      \u0275\u0275text(47, "\u05E2\u05DE\u05DC\u05D4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "span", 19);
      \u0275\u0275text(49);
      \u0275\u0275pipe(50, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(51, OrderDrawerComponent_Conditional_51_Template, 5, 0, "div", 21);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "div", 22)(53, "button", 23);
      \u0275\u0275listener("click", function OrderDrawerComponent_Template_button_click_53_listener() {
        return ctx.tab.set("details");
      });
      \u0275\u0275elementStart(54, "mat-icon");
      \u0275\u0275text(55, "info_outline");
      \u0275\u0275elementEnd();
      \u0275\u0275text(56, " \u05E4\u05E8\u05D8\u05D9\u05DD ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "button", 23);
      \u0275\u0275listener("click", function OrderDrawerComponent_Template_button_click_57_listener() {
        return ctx.tab.set("lines");
      });
      \u0275\u0275elementStart(58, "mat-icon");
      \u0275\u0275text(59, "list_alt");
      \u0275\u0275elementEnd();
      \u0275\u0275text(60, " \u05E9\u05D5\u05E8\u05D5\u05EA ");
      \u0275\u0275elementStart(61, "span", 24);
      \u0275\u0275text(62);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "button", 23);
      \u0275\u0275listener("click", function OrderDrawerComponent_Template_button_click_63_listener() {
        return ctx.tab.set("shipment");
      });
      \u0275\u0275elementStart(64, "mat-icon");
      \u0275\u0275text(65, "local_shipping");
      \u0275\u0275elementEnd();
      \u0275\u0275text(66, " \u05DE\u05E9\u05DC\u05D5\u05D7 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "button", 23);
      \u0275\u0275listener("click", function OrderDrawerComponent_Template_button_click_67_listener() {
        return ctx.tab.set("finance");
      });
      \u0275\u0275elementStart(68, "mat-icon");
      \u0275\u0275text(69, "receipt_long");
      \u0275\u0275elementEnd();
      \u0275\u0275text(70, " \u05E4\u05D9\u05E0\u05E0\u05E1\u05D9\u05DD ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 25);
      \u0275\u0275conditionalCreate(72, OrderDrawerComponent_Conditional_72_Template, 52, 12, "div", 26);
      \u0275\u0275conditionalCreate(73, OrderDrawerComponent_Conditional_73_Template, 32, 11, "div", 27);
      \u0275\u0275conditionalCreate(74, OrderDrawerComponent_Conditional_74_Template, 3, 1, "div", 28);
      \u0275\u0275conditionalCreate(75, OrderDrawerComponent_Conditional_75_Template, 3, 1, "div", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "div", 30)(77, "button", 31)(78, "mat-icon");
      \u0275\u0275text(79, "edit");
      \u0275\u0275elementEnd();
      \u0275\u0275text(80, " \u05E2\u05E8\u05D9\u05DB\u05D4 ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(81, OrderDrawerComponent_Conditional_81_Template, 4, 0, "button", 32);
      \u0275\u0275conditionalCreate(82, OrderDrawerComponent_Conditional_82_Template, 4, 0, "button", 32);
      \u0275\u0275conditionalCreate(83, OrderDrawerComponent_Conditional_83_Template, 4, 0, "button", 33);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.orderBadge());
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", "chip-" + ctx.order.status);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.statusLabels[ctx.order.status], " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.order.isFrameContract ? 10 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.order.supplierFull);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.order.customerFull);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.dateStr(ctx.order.orderDate), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.order.salesPerson, " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.order.salesDomain, " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.order.currency, " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(44, 31, ctx.order.totalValue, "1.0-0"), " ", ctx.order.currency);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(50, 34, ctx.order.commissionAmount, "1.0-0"), " (", ctx.commDetail(), ")");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.order.financial?.commissionReceived ? 51 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.tab() === "details");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.tab() === "lines");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.order.lines.length);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.tab() === "shipment");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.tab() === "finance");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.tab() === "details" ? 72 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.tab() === "lines" ? 73 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.tab() === "shipment" ? 74 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.tab() === "finance" ? 75 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.order.status !== "cancelled" && ctx.order.status !== "frozen" ? 81 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.order.status === "frozen" ? 82 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.order.status !== "cancelled" ? 83 : -1);
    }
  }, dependencies: [CommonModule, NgClass, MatIconModule, MatIcon, DecimalPipe], styles: ['@charset "UTF-8";\n\n\n.drawer-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n  direction: rtl;\n  background: var(--sf-bg-card);\n}\n.dh[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  border-bottom: 1px solid var(--sf-border);\n}\n.dh-top-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--sf-primary),\n      var(--sf-accent, var(--sf-primary)));\n}\n.dh-content[_ngcontent-%COMP%] {\n  padding: 0.875rem 1.125rem 0.75rem;\n}\n.dh-row1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.dh-badge-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.dh-order-no[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  letter-spacing: 0.03em;\n}\n.dh-status-chip[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  border-radius: 99px;\n  padding: 2px 10px;\n}\n.dh-status-chip.chip-active[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #059669;\n}\n.dh-status-chip.chip-important[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.dh-status-chip.chip-frozen[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.dh-status-chip.chip-cancelled[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.dh-status-chip.chip-frame[_ngcontent-%COMP%] {\n  background: var(--sf-primary-light);\n  color: var(--sf-primary);\n}\n.dh-frame-chip[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 800;\n  background: var(--sf-primary);\n  color: #fff;\n  border-radius: 4px;\n  padding: 1px 6px;\n}\n.dh-close[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  color: var(--sf-text-muted);\n  transition: background 0.13s, color 0.13s;\n}\n.dh-close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.dh-close[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.dh-entities[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  margin-bottom: 0.5rem;\n  flex-wrap: wrap;\n}\n.dh-entities[_ngcontent-%COMP%]   .dh-supplier[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: var(--sf-text);\n}\n.dh-entities[_ngcontent-%COMP%]   .dh-arr[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--sf-text-muted);\n  flex-shrink: 0;\n}\n.dh-entities[_ngcontent-%COMP%]   .dh-customer[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--sf-text-secondary);\n}\n.dh-meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-bottom: 0.625rem;\n}\n.dh-meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.73rem;\n  color: var(--sf-text-secondary);\n}\n.dh-meta-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n}\n.dh-fin-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.dh-fin-chip[_ngcontent-%COMP%] {\n  background: var(--sf-bg-hover);\n  border: 1px solid var(--sf-border);\n  border-radius: 6px;\n  padding: 0.25rem 0.625rem;\n  font-size: 0.72rem;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.dh-fin-chip[_ngcontent-%COMP%]   .dfc-label[_ngcontent-%COMP%] {\n  color: var(--sf-text-muted);\n}\n.dh-fin-chip[_ngcontent-%COMP%]   .dfc-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--sf-text);\n}\n.dh-fin-chip.dfc-commission[_ngcontent-%COMP%]   .dfc-value[_ngcontent-%COMP%] {\n  color: var(--sf-primary);\n}\n.dh-fin-chip.dfc-received[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  border-color: #6ee7b7;\n  color: #059669;\n}\n.dh-fin-chip.dfc-received[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.drawer-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid var(--sf-border);\n  flex-shrink: 0;\n}\n.dtab[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.3rem;\n  padding: 0.625rem 0.5rem;\n  font-size: 0.76rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  color: var(--sf-text-secondary);\n  background: none;\n  border: none;\n  border-bottom: 2px solid transparent;\n  cursor: pointer;\n  transition:\n    color 0.15s,\n    border-color 0.15s,\n    background 0.15s;\n  white-space: nowrap;\n}\n.dtab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n}\n.dtab[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.dtab.active[_ngcontent-%COMP%] {\n  color: var(--sf-primary);\n  border-bottom-color: var(--sf-primary);\n  font-weight: 700;\n}\n.tab-cnt[_ngcontent-%COMP%] {\n  background: var(--sf-primary);\n  color: #fff;\n  border-radius: 99px;\n  font-size: 0.62rem;\n  font-weight: 800;\n  min-width: 16px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 4px;\n  line-height: 1;\n}\n.drawer-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1rem 1.125rem;\n}\n.details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem 1rem;\n}\n.dg-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.dg-item[_ngcontent-%COMP%]   .dg-label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--sf-text-muted);\n}\n.dg-item[_ngcontent-%COMP%]   .dg-value[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: var(--sf-text);\n  font-weight: 500;\n}\n.dg-item[_ngcontent-%COMP%]   .dg-mono[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n}\n.dg-status-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  margin-left: 0.35rem;\n}\n.dg-status-dot.dot-active[_ngcontent-%COMP%] {\n  background: var(--sf-success);\n}\n.dg-status-dot.dot-important[_ngcontent-%COMP%] {\n  background: var(--sf-warning);\n}\n.dg-status-dot.dot-frozen[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.dg-status-dot.dot-cancelled[_ngcontent-%COMP%] {\n  background: var(--sf-danger);\n}\n.dg-status-dot.dot-frame[_ngcontent-%COMP%] {\n  background: var(--sf-primary);\n}\n.lines-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.overall-dispatch[_ngcontent-%COMP%] {\n  background: var(--sf-bg-hover);\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n}\n.overall-dispatch[_ngcontent-%COMP%]   .od-labels[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  margin-bottom: 0.35rem;\n}\n.overall-dispatch[_ngcontent-%COMP%]   .od-labels[_ngcontent-%COMP%]   .od-pct[_ngcontent-%COMP%] {\n  color: var(--sf-primary);\n}\n.overall-dispatch[_ngcontent-%COMP%]   .od-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  background: var(--sf-border);\n  border-radius: 99px;\n  overflow: hidden;\n  margin-bottom: 0.3rem;\n}\n.overall-dispatch[_ngcontent-%COMP%]   .od-bar[_ngcontent-%COMP%]   .od-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--sf-primary);\n  border-radius: 99px;\n  transition: width 0.5s ease;\n}\n.overall-dispatch[_ngcontent-%COMP%]   .od-sub[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: var(--sf-text-muted);\n}\n.lines-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.lines-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.78rem;\n}\n.lines-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: var(--sf-grid-hd-bg);\n}\n.lines-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--sf-grid-hd-color);\n  font-weight: 700;\n  font-size: 0.7rem;\n  padding: 0.4rem 0.5rem;\n  text-align: right;\n  border-bottom: 2px solid var(--sf-grid-hd-border);\n  white-space: nowrap;\n}\n.lines-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th.ta-num[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.lines-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th.ta-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--sf-border);\n  transition: background 0.12s;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.45rem 0.5rem;\n  color: var(--sf-text);\n  vertical-align: middle;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.ta-num[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.ta-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.group-badge[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.7rem;\n  background: var(--sf-bg-hover);\n  border: 1px solid var(--sf-border);\n  border-radius: 4px;\n  padding: 1px 5px;\n  color: var(--sf-text-secondary);\n}\n.sku-mono[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.74rem;\n  color: var(--sf-text);\n  white-space: nowrap;\n}\n.sku-customer[_ngcontent-%COMP%] {\n  font-size: 0.67rem;\n  color: var(--sf-text-muted);\n  font-family: "Share Tech Mono", monospace;\n}\n.line-desc[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  max-width: 140px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.uom-badge[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  color: var(--sf-text-muted);\n  margin-right: 3px;\n}\n.dispatch-progress[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  min-width: 80px;\n}\n.dp-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: var(--sf-border);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.dp-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.dp-fill.dp-full[_ngcontent-%COMP%] {\n  background: var(--sf-success);\n}\n.dp-fill.dp-partial[_ngcontent-%COMP%] {\n  background: var(--sf-primary);\n}\n.dp-fill.dp-none[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.dp-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  white-space: nowrap;\n}\n.line-comm[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--sf-primary);\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--sf-text-muted);\n}\n.shipment-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.shipment-timeline[_ngcontent-%COMP%] {\n  position: relative;\n}\n.st-step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  position: relative;\n  padding-bottom: 0;\n}\n.st-step[_ngcontent-%COMP%]   .st-dot[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--sf-border);\n  background: var(--sf-bg-card);\n  flex-shrink: 0;\n  margin-top: 2px;\n  transition: background 0.2s, border-color 0.2s;\n  position: relative;\n  z-index: 1;\n}\n.st-step.done[_ngcontent-%COMP%]   .st-dot[_ngcontent-%COMP%] {\n  background: var(--sf-success);\n  border-color: var(--sf-success);\n}\n.st-step.done[_ngcontent-%COMP%]   .st-dot[_ngcontent-%COMP%]::after {\n  content: "\\2713";\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 9px;\n  color: #fff;\n  font-weight: 900;\n}\n.st-step[_ngcontent-%COMP%]   .st-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-bottom: 1.25rem;\n}\n.st-step[_ngcontent-%COMP%]   .st-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--sf-text);\n}\n.st-step[_ngcontent-%COMP%]   .st-date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--sf-text-secondary);\n  margin-top: 0.1rem;\n}\n.st-step[_ngcontent-%COMP%]   .st-ref[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.7rem;\n  color: var(--sf-text-muted);\n  margin-top: 0.1rem;\n}\n.st-line[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 1.25rem;\n  background: var(--sf-border);\n  margin-right: 7px;\n  margin-bottom: 0;\n  margin-top: 0;\n  transition: background 0.2s;\n}\n.st-line.done[_ngcontent-%COMP%] {\n  background: var(--sf-success);\n}\n.ship-details[_ngcontent-%COMP%] {\n  background: var(--sf-bg-hover);\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.625rem;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  color: var(--sf-text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  width: 36px;\n  height: 36px;\n  opacity: 0.4;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  margin-top: 0.5rem;\n}\n.fin-cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.fin-card[_ngcontent-%COMP%] {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 10px;\n  padding: 0.875rem 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  border-inline-start: 3px solid var(--sf-border);\n}\n.fin-card.fin-ok[_ngcontent-%COMP%] {\n  border-inline-start-color: var(--sf-success);\n}\n.fin-card.fin-pending[_ngcontent-%COMP%] {\n  border-inline-start-color: var(--sf-warning);\n}\n.fin-card[_ngcontent-%COMP%]   .finc-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: var(--sf-bg-hover);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--sf-text-secondary);\n  flex-shrink: 0;\n}\n.fin-card[_ngcontent-%COMP%]   .finc-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.fin-card.fin-ok[_ngcontent-%COMP%]   .finc-icon[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #059669;\n}\n.finc-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.finc-body[_ngcontent-%COMP%]   .finc-title[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.finc-body[_ngcontent-%COMP%]   .finc-ref[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.73rem;\n  color: var(--sf-text-secondary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.finc-body[_ngcontent-%COMP%]   .finc-date[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--sf-text-muted);\n}\n.finc-body[_ngcontent-%COMP%]   .finc-amount[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin-top: 0.15rem;\n}\n.finc-body[_ngcontent-%COMP%]   .finc-amount.finc-commission[_ngcontent-%COMP%] {\n  color: var(--sf-primary);\n}\n.finc-body[_ngcontent-%COMP%]   .finc-received[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--sf-success);\n  font-weight: 600;\n}\n.finc-status[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.fin-chip[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  border-radius: 99px;\n  padding: 3px 10px;\n  white-space: nowrap;\n}\n.fin-chip.fin-chip-ok[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #059669;\n}\n.fin-chip.fin-chip-pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.fin-chip.fin-chip-warn[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.drawer-footer[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  border-top: 1px solid var(--sf-border);\n  padding: 0.75rem 1.125rem;\n  display: flex;\n  direction: rtl;\n  gap: 0.5rem;\n}\n.df-btn-primary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.45rem 1rem;\n  background: #f97316;\n  color: #fff;\n  border: none;\n  border-radius: 7px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: background 0.13s;\n}\n.df-btn-primary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.df-btn-primary[_ngcontent-%COMP%]:hover {\n  background: #ea6c0a;\n}\n.df-btn-secondary[_ngcontent-%COMP%], \n.df-btn-danger[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.45rem 1rem;\n  background: var(--sf-bg-card);\n  color: var(--sf-text-secondary);\n  border: 1px solid var(--sf-border);\n  border-radius: 7px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: all 0.13s;\n}\n.df-btn-secondary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.df-btn-danger[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.df-btn-secondary[_ngcontent-%COMP%]:hover, \n.df-btn-danger[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.df-btn-danger[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n.df-btn-danger[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #dc2626;\n  border-color: #fca5a5;\n}\n/*# sourceMappingURL=order-drawer.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDrawerComponent, [{
    type: Component,
    args: [{ selector: "app-order-drawer", standalone: true, imports: [CommonModule, MatIconModule, DecimalPipe], template: `<div class="drawer-wrap">

  <!-- \u2500\u2500 Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="dh">
    <div class="dh-top-bar"></div>

    <div class="dh-content">
      <div class="dh-row1">
        <div class="dh-badge-row">
          <span class="dh-order-no">{{ orderBadge() }}</span>
          <span class="dh-status-chip" [ngClass]="'chip-' + order.status">
            {{ statusLabels[order.status] }}
          </span>
          @if (order.isFrameContract) {
            <span class="dh-frame-chip">\u05DE\u05E1\u05D2\u05E8\u05EA</span>
          }
        </div>
        <button class="dh-close" (click)="close()" title="\u05E1\u05D2\u05D5\u05E8">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <div class="dh-entities">
        <span class="dh-supplier">{{ order.supplierFull }}</span>
        <mat-icon class="dh-arr">arrow_back</mat-icon>
        <span class="dh-customer">{{ order.customerFull }}</span>
      </div>

      <div class="dh-meta-row">
        <span class="dh-meta-item">
          <mat-icon>calendar_today</mat-icon>
          {{ dateStr(order.orderDate) }}
        </span>
        <span class="dh-meta-item">
          <mat-icon>person</mat-icon>
          {{ order.salesPerson }}
        </span>
        <span class="dh-meta-item">
          <mat-icon>domain</mat-icon>
          {{ order.salesDomain }}
        </span>
        <span class="dh-meta-item">
          <mat-icon>account_balance_wallet</mat-icon>
          {{ order.currency }}
        </span>
      </div>

      <!-- Finance summary chips -->
      <div class="dh-fin-row">
        <div class="dh-fin-chip">
          <span class="dfc-label">\u05E2\u05E8\u05DA \u05DB\u05D5\u05DC\u05DC</span>
          <span class="dfc-value">{{ order.totalValue | number:'1.0-0' }} {{ order.currency }}</span>
        </div>
        <div class="dh-fin-chip dfc-commission">
          <span class="dfc-label">\u05E2\u05DE\u05DC\u05D4</span>
          <span class="dfc-value">{{ order.commissionAmount | number:'1.0-0' }} ({{ commDetail() }})</span>
        </div>
        @if (order.financial?.commissionReceived) {
          <div class="dh-fin-chip dfc-received">
            <mat-icon>check_circle</mat-icon>
            <span class="dfc-label">\u05D4\u05EA\u05E7\u05D1\u05DC\u05D4</span>
          </div>
        }
      </div>
    </div>
  </div>

  <!-- \u2500\u2500 Tabs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="drawer-tabs">
    <button class="dtab" [class.active]="tab() === 'details'"  (click)="tab.set('details')">
      <mat-icon>info_outline</mat-icon> \u05E4\u05E8\u05D8\u05D9\u05DD
    </button>
    <button class="dtab" [class.active]="tab() === 'lines'"    (click)="tab.set('lines')">
      <mat-icon>list_alt</mat-icon> \u05E9\u05D5\u05E8\u05D5\u05EA
      <span class="tab-cnt">{{ order.lines.length }}</span>
    </button>
    <button class="dtab" [class.active]="tab() === 'shipment'" (click)="tab.set('shipment')">
      <mat-icon>local_shipping</mat-icon> \u05DE\u05E9\u05DC\u05D5\u05D7
    </button>
    <button class="dtab" [class.active]="tab() === 'finance'"  (click)="tab.set('finance')">
      <mat-icon>receipt_long</mat-icon> \u05E4\u05D9\u05E0\u05E0\u05E1\u05D9\u05DD
    </button>
  </div>

  <!-- \u2500\u2500 Body \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="drawer-body">

    <!-- \u25B8 DETAILS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    @if (tab() === 'details') {
      <div class="details-grid">
        <div class="dg-item">
          <span class="dg-label">\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05D6\u05DE\u05E0\u05D4</span>
          <span class="dg-value">{{ dateStr(order.orderDate) }}</span>
        </div>
        <div class="dg-item">
          <span class="dg-label">\u05EA\u05D0\u05E8\u05D9\u05DA \u05D0\u05E1\u05E4\u05E7\u05D4</span>
          <span class="dg-value">{{ dateStr(order.deliveryDate) }}</span>
        </div>
        <div class="dg-item">
          <span class="dg-label">\u05EA\u05D7\u05D5\u05DD \u05DE\u05DB\u05D9\u05E8\u05D4</span>
          <span class="dg-value">{{ order.salesDomain }} ({{ order.salesDomainPrefix }})</span>
        </div>
        <div class="dg-item">
          <span class="dg-label">\u05D0\u05D9\u05E9 \u05DE\u05DB\u05D9\u05E8\u05D5\u05EA</span>
          <span class="dg-value">{{ order.salesPerson }}</span>
        </div>
        <div class="dg-item">
          <span class="dg-label">\u05D4\u05E4\u05E0\u05D9\u05D9\u05EA \u05DC\u05E7\u05D5\u05D7</span>
          <span class="dg-value dg-mono">{{ order.customerRef || '\u2014' }}</span>
        </div>
        <div class="dg-item">
          <span class="dg-label">\u05DE\u05D8\u05D1\u05E2</span>
          <span class="dg-value">{{ order.currency }}</span>
        </div>
        <div class="dg-item">
          <span class="dg-label">\u05E1\u05D5\u05D2 \u05E2\u05DE\u05DC\u05D4</span>
          <span class="dg-value">{{ commLabels[order.commissionType] }}</span>
        </div>
        <div class="dg-item">
          <span class="dg-label">\u05E9\u05D9\u05E2\u05D5\u05E8/\u05E1\u05DB\u05D5\u05DD</span>
          <span class="dg-value">{{ commDetail() }}</span>
        </div>
        <div class="dg-item">
          <span class="dg-label">\u05D7\u05D5\u05D6\u05D4 \u05DE\u05E1\u05D2\u05E8\u05EA</span>
          <span class="dg-value">{{ order.isFrameContract ? '\u05DB\u05DF' : '\u05DC\u05D0' }}</span>
        </div>
        <div class="dg-item">
          <span class="dg-label">\u05E1\u05D8\u05D8\u05D5\u05E1</span>
          <span class="dg-value">
            <span class="dg-status-dot" [ngClass]="'dot-' + order.status"></span>
            {{ statusLabels[order.status] }}
          </span>
        </div>
      </div>
    }

    <!-- \u25B8 LINES \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    @if (tab() === 'lines') {
      <div class="lines-section">
        <!-- Overall dispatch progress -->
        <div class="overall-dispatch">
          <div class="od-labels">
            <span>\u05E0\u05D9\u05E4\u05D5\u05E7 \u05DB\u05D5\u05DC\u05DC</span>
            <span class="od-pct">{{ totalDispatchPct() }}%</span>
          </div>
          <div class="od-bar">
            <div class="od-fill" [style.width.%]="totalDispatchPct()"></div>
          </div>
          <div class="od-sub">{{ totalQtyDispatched() | number:'1.0-0' }} / {{ totalQtyOrdered() | number:'1.0-0' }} \u05D9\u05D7'</div>
        </div>

        <!-- Lines table -->
        <div class="lines-table-wrap">
          <table class="lines-table">
            <thead>
              <tr>
                <th>\u05E7\u05D1'/\u05E9\u05D5'</th>
                <th>\u05DE\u05E7"\u05D8 \u05E1\u05E4\u05E7</th>
                <th>\u05EA\u05D9\u05D0\u05D5\u05E8</th>
                <th class="ta-num">\u05DB\u05DE\u05D5\u05EA</th>
                <th>\u05E0\u05D9\u05E4\u05D5\u05E7</th>
                <th class="ta-num">\u05E2\u05DE\u05DC\u05D4</th>
              </tr>
            </thead>
            <tbody>
              @for (l of order.lines; track l.orderLineId) {
                <tr>
                  <td class="ta-center">
                    <span class="group-badge">{{ l.groupNo }}.{{ l.lineNo }}</span>
                  </td>
                  <td>
                    <span class="sku-mono">{{ l.supplierSKU }}</span>
                    @if (l.customerSKU) {
                      <div class="sku-customer">{{ l.customerSKU }}</div>
                    }
                  </td>
                  <td class="line-desc">{{ l.description }}</td>
                  <td class="ta-num">
                    {{ l.qtyOrdered | number:'1.0-0' }}
                    <span class="uom-badge">{{ l.uom }}</span>
                  </td>
                  <td>
                    <div class="dispatch-progress">
                      <div class="dp-bar">
                        <div class="dp-fill" [style.width.%]="dispatchPct(l)"
                             [class.dp-full]="dispatchPct(l) === 100"
                             [class.dp-partial]="dispatchPct(l) > 0 && dispatchPct(l) < 100"
                             [class.dp-none]="dispatchPct(l) === 0">
                        </div>
                      </div>
                      <span class="dp-label">{{ l.qtyDispatched | number:'1.0-0' }}</span>
                    </div>
                  </td>
                  <td class="ta-num">
                    @if (l.commissionAmount > 0) {
                      <span class="line-comm">{{ l.commissionAmount | number:'1.0-0' }}</span>
                    } @else {
                      <span class="text-muted">\u2014</span>
                    }
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    }

    <!-- \u25B8 SHIPMENT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    @if (tab() === 'shipment') {
      <div class="shipment-section">
        @if (order.shipment) {

          <!-- Timeline -->
          <div class="shipment-timeline">
            <div class="st-step" [class.done]="shipmentStepDone('oc')">
              <div class="st-dot"></div>
              <div class="st-content">
                <div class="st-label">\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05D6\u05DE\u05E0\u05D4 (OC)</div>
                <div class="st-date">{{ dateStr(order.shipment.supplierOCDate) }}</div>
                @if (order.shipment.supplierOC) {
                  <div class="st-ref">{{ order.shipment.supplierOC }}</div>
                }
              </div>
            </div>
            <div class="st-line" [class.done]="shipmentStepDone('oc')"></div>

            <div class="st-step" [class.done]="shipmentStepDone('etd')">
              <div class="st-dot"></div>
              <div class="st-content">
                <div class="st-label">\u05D9\u05E6\u05D9\u05D0\u05D4 \u05DE\u05D4\u05DE\u05E4\u05E2\u05DC (ETD)</div>
                <div class="st-date">{{ dateStr(order.shipment.etd) }}</div>
              </div>
            </div>
            <div class="st-line" [class.done]="shipmentStepDone('etd')"></div>

            <div class="st-step" [class.done]="shipmentStepDone('eta')">
              <div class="st-dot"></div>
              <div class="st-content">
                <div class="st-label">\u05D4\u05D2\u05E2\u05D4 \u05DE\u05E9\u05D5\u05E2\u05E8\u05EA (ETA)</div>
                <div class="st-date">{{ dateStr(order.shipment.eta) }}</div>
              </div>
            </div>
            <div class="st-line" [class.done]="shipmentStepDone('eta')"></div>

            <div class="st-step" [class.done]="shipmentStepDone('ata')">
              <div class="st-dot"></div>
              <div class="st-content">
                <div class="st-label">\u05D4\u05D2\u05E2\u05D4 \u05D1\u05E4\u05D5\u05E2\u05DC (ATA)</div>
                <div class="st-date">{{ dateStr(order.shipment.ata) }}</div>
              </div>
            </div>
          </div>

          <!-- Shipping details -->
          @if (order.shipment.vesselName || order.shipment.blNumber) {
            <div class="ship-details">
              @if (order.shipment.vesselName) {
                <div class="dg-item">
                  <span class="dg-label">\u05E9\u05DD \u05D0\u05D5\u05E0\u05D9\u05D4</span>
                  <span class="dg-value">{{ order.shipment.vesselName }}</span>
                </div>
              }
              @if (order.shipment.blNumber) {
                <div class="dg-item">
                  <span class="dg-label">\u05DE\u05E1' B/L</span>
                  <span class="dg-value dg-mono">{{ order.shipment.blNumber }}</span>
                </div>
              }
              @if (order.shipment.desiredDeliveryDate) {
                <div class="dg-item">
                  <span class="dg-label">\u05DE\u05D5\u05E2\u05D3 \u05D0\u05E1\u05E4\u05E7\u05D4 \u05E8\u05E6\u05D5\u05D9</span>
                  <span class="dg-value">{{ dateStr(order.shipment.desiredDeliveryDate) }}</span>
                </div>
              }
            </div>
          }

          @if (!order.shipment.supplierOCDate) {
            <div class="empty-state">
              <mat-icon>local_shipping</mat-icon>
              <p>\u05D0\u05D9\u05DF \u05E0\u05EA\u05D5\u05E0\u05D9 \u05DE\u05E9\u05DC\u05D5\u05D7 \u05E2\u05D3\u05D9\u05D9\u05DF</p>
            </div>
          }

        } @else {
          <div class="empty-state">
            <mat-icon>local_shipping</mat-icon>
            <p>\u05D0\u05D9\u05DF \u05E0\u05EA\u05D5\u05E0\u05D9 \u05DE\u05E9\u05DC\u05D5\u05D7</p>
          </div>
        }
      </div>
    }

    <!-- \u25B8 FINANCE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    @if (tab() === 'finance') {
      <div class="finance-section">
        @if (order.financial) {

          <!-- 3 financial cards -->
          <div class="fin-cards">

            <div class="fin-card" [class.fin-ok]="order.financial.invoiceIssuedToSupplier"
                 [class.fin-pending]="!order.financial.invoiceIssuedToSupplier && order.status !== 'cancelled'">
              <div class="finc-icon">
                <mat-icon>{{ order.financial.invoiceIssuedToSupplier ? 'receipt' : 'receipt_long' }}</mat-icon>
              </div>
              <div class="finc-body">
                <div class="finc-title">\u05D7\u05E9\u05D1\u05D5\u05E0\u05D9\u05EA \u05DC\u05E1\u05E4\u05E7</div>
                @if (order.financial.supplierInvoiceNo) {
                  <div class="finc-ref">{{ order.financial.supplierInvoiceNo }}</div>
                  <div class="finc-date">{{ dateStr(order.financial.supplierInvoiceDate) }}</div>
                }
                <div class="finc-amount">
                  @if (order.financial.invoiceAmount > 0) {
                    {{ order.financial.invoiceAmount | number:'1.0-0' }} {{ order.financial.currency }}
                  } @else { \u2014 }
                </div>
              </div>
              <div class="finc-status">
                @if (order.financial.invoiceIssuedToSupplier) {
                  <span class="fin-chip fin-chip-ok">\u05D4\u05D5\u05E6\u05D0\u05D4</span>
                } @else {
                  <span class="fin-chip fin-chip-pending">\u05D8\u05E8\u05DD \u05D4\u05D5\u05E6\u05D0\u05D4</span>
                }
              </div>
            </div>

            <div class="fin-card" [class.fin-ok]="order.financial.customerPaid">
              <div class="finc-icon">
                <mat-icon>{{ order.financial.customerPaid ? 'payments' : 'pending_actions' }}</mat-icon>
              </div>
              <div class="finc-body">
                <div class="finc-title">\u05EA\u05E9\u05DC\u05D5\u05DD \u05DC\u05E7\u05D5\u05D7</div>
                <div class="finc-amount">
                  @if (order.financial.amountPaidByCustomer > 0) {
                    {{ order.financial.amountPaidByCustomer | number:'1.0-0' }} {{ order.financial.currency }}
                  } @else { \u2014 }
                </div>
              </div>
              <div class="finc-status">
                @if (order.financial.customerPaid) {
                  <span class="fin-chip fin-chip-ok">\u05E9\u05D5\u05DC\u05DD</span>
                } @else {
                  <span class="fin-chip fin-chip-pending">\u05DE\u05DE\u05EA\u05D9\u05DF</span>
                }
              </div>
            </div>

            <div class="fin-card" [class.fin-ok]="order.financial.commissionReceived">
              <div class="finc-icon">
                <mat-icon>{{ order.financial.commissionReceived ? 'paid' : 'monetization_on' }}</mat-icon>
              </div>
              <div class="finc-body">
                <div class="finc-title">\u05E2\u05DE\u05DC\u05D4</div>
                <div class="finc-amount finc-commission">
                  {{ order.commissionAmount | number:'1.0-0' }} {{ order.currency }}
                </div>
                @if (order.financial.commissionAmountReceived > 0) {
                  <div class="finc-received">
                    \u05D4\u05EA\u05E7\u05D1\u05DC: {{ order.financial.commissionAmountReceived | number:'1.0-0' }}
                  </div>
                }
              </div>
              <div class="finc-status">
                @if (order.financial.commissionReceived) {
                  <span class="fin-chip fin-chip-ok">\u05D4\u05EA\u05E7\u05D1\u05DC\u05D4</span>
                } @else {
                  <span class="fin-chip fin-chip-warn">\u05DC\u05D0 \u05D4\u05EA\u05E7\u05D1\u05DC\u05D4</span>
                }
              </div>
            </div>

          </div>

        } @else {
          <div class="empty-state">
            <mat-icon>receipt_long</mat-icon>
            <p>\u05D0\u05D9\u05DF \u05E0\u05EA\u05D5\u05E0\u05D9 \u05E4\u05D9\u05E0\u05E0\u05E1\u05D9\u05DD</p>
          </div>
        }
      </div>
    }

  </div>

  <!-- \u2500\u2500 Footer actions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="drawer-footer">
    <button class="df-btn-primary">
      <mat-icon>edit</mat-icon> \u05E2\u05E8\u05D9\u05DB\u05D4
    </button>
    @if (order.status !== 'cancelled' && order.status !== 'frozen') {
      <button class="df-btn-secondary">
        <mat-icon>pause_circle</mat-icon> \u05D4\u05E7\u05E4\u05D0\u05D4
      </button>
    }
    @if (order.status === 'frozen') {
      <button class="df-btn-secondary">
        <mat-icon>play_circle</mat-icon> \u05E9\u05D7\u05E8\u05D5\u05E8 \u05D4\u05E7\u05E4\u05D0\u05D4
      </button>
    }
    @if (order.status !== 'cancelled') {
      <button class="df-btn-danger">
        <mat-icon>cancel</mat-icon> \u05D1\u05D9\u05D8\u05D5\u05DC
      </button>
    }
  </div>

</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/arachim/orders/order-drawer/order-drawer.component.scss */\n.drawer-wrap {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n  direction: rtl;\n  background: var(--sf-bg-card);\n}\n.dh {\n  flex-shrink: 0;\n  border-bottom: 1px solid var(--sf-border);\n}\n.dh-top-bar {\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--sf-primary),\n      var(--sf-accent, var(--sf-primary)));\n}\n.dh-content {\n  padding: 0.875rem 1.125rem 0.75rem;\n}\n.dh-row1 {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.dh-badge-row {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.dh-order-no {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  letter-spacing: 0.03em;\n}\n.dh-status-chip {\n  font-size: 0.7rem;\n  font-weight: 700;\n  border-radius: 99px;\n  padding: 2px 10px;\n}\n.dh-status-chip.chip-active {\n  background: #d1fae5;\n  color: #059669;\n}\n.dh-status-chip.chip-important {\n  background: #fef3c7;\n  color: #d97706;\n}\n.dh-status-chip.chip-frozen {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.dh-status-chip.chip-cancelled {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.dh-status-chip.chip-frame {\n  background: var(--sf-primary-light);\n  color: var(--sf-primary);\n}\n.dh-frame-chip {\n  font-size: 0.65rem;\n  font-weight: 800;\n  background: var(--sf-primary);\n  color: #fff;\n  border-radius: 4px;\n  padding: 1px 6px;\n}\n.dh-close {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  color: var(--sf-text-muted);\n  transition: background 0.13s, color 0.13s;\n}\n.dh-close mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.dh-close:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.dh-entities {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  margin-bottom: 0.5rem;\n  flex-wrap: wrap;\n}\n.dh-entities .dh-supplier {\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: var(--sf-text);\n}\n.dh-entities .dh-arr {\n  font-size: 14px;\n  color: var(--sf-text-muted);\n  flex-shrink: 0;\n}\n.dh-entities .dh-customer {\n  font-size: 0.8rem;\n  color: var(--sf-text-secondary);\n}\n.dh-meta-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-bottom: 0.625rem;\n}\n.dh-meta-item {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.73rem;\n  color: var(--sf-text-secondary);\n}\n.dh-meta-item mat-icon {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n}\n.dh-fin-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.dh-fin-chip {\n  background: var(--sf-bg-hover);\n  border: 1px solid var(--sf-border);\n  border-radius: 6px;\n  padding: 0.25rem 0.625rem;\n  font-size: 0.72rem;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.dh-fin-chip .dfc-label {\n  color: var(--sf-text-muted);\n}\n.dh-fin-chip .dfc-value {\n  font-weight: 700;\n  color: var(--sf-text);\n}\n.dh-fin-chip.dfc-commission .dfc-value {\n  color: var(--sf-primary);\n}\n.dh-fin-chip.dfc-received {\n  background: #d1fae5;\n  border-color: #6ee7b7;\n  color: #059669;\n}\n.dh-fin-chip.dfc-received mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.drawer-tabs {\n  display: flex;\n  border-bottom: 1px solid var(--sf-border);\n  flex-shrink: 0;\n}\n.dtab {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.3rem;\n  padding: 0.625rem 0.5rem;\n  font-size: 0.76rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  color: var(--sf-text-secondary);\n  background: none;\n  border: none;\n  border-bottom: 2px solid transparent;\n  cursor: pointer;\n  transition:\n    color 0.15s,\n    border-color 0.15s,\n    background 0.15s;\n  white-space: nowrap;\n}\n.dtab mat-icon {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n}\n.dtab:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.dtab.active {\n  color: var(--sf-primary);\n  border-bottom-color: var(--sf-primary);\n  font-weight: 700;\n}\n.tab-cnt {\n  background: var(--sf-primary);\n  color: #fff;\n  border-radius: 99px;\n  font-size: 0.62rem;\n  font-weight: 800;\n  min-width: 16px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 4px;\n  line-height: 1;\n}\n.drawer-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1rem 1.125rem;\n}\n.details-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem 1rem;\n}\n.dg-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.dg-item .dg-label {\n  font-size: 0.68rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--sf-text-muted);\n}\n.dg-item .dg-value {\n  font-size: 0.83rem;\n  color: var(--sf-text);\n  font-weight: 500;\n}\n.dg-item .dg-mono {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n}\n.dg-status-dot {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  margin-left: 0.35rem;\n}\n.dg-status-dot.dot-active {\n  background: var(--sf-success);\n}\n.dg-status-dot.dot-important {\n  background: var(--sf-warning);\n}\n.dg-status-dot.dot-frozen {\n  background: #3b82f6;\n}\n.dg-status-dot.dot-cancelled {\n  background: var(--sf-danger);\n}\n.dg-status-dot.dot-frame {\n  background: var(--sf-primary);\n}\n.lines-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.overall-dispatch {\n  background: var(--sf-bg-hover);\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n}\n.overall-dispatch .od-labels {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  margin-bottom: 0.35rem;\n}\n.overall-dispatch .od-labels .od-pct {\n  color: var(--sf-primary);\n}\n.overall-dispatch .od-bar {\n  height: 8px;\n  background: var(--sf-border);\n  border-radius: 99px;\n  overflow: hidden;\n  margin-bottom: 0.3rem;\n}\n.overall-dispatch .od-bar .od-fill {\n  height: 100%;\n  background: var(--sf-primary);\n  border-radius: 99px;\n  transition: width 0.5s ease;\n}\n.overall-dispatch .od-sub {\n  font-size: 0.68rem;\n  color: var(--sf-text-muted);\n}\n.lines-table-wrap {\n  overflow-x: auto;\n}\n.lines-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.78rem;\n}\n.lines-table thead tr {\n  background: var(--sf-grid-hd-bg);\n}\n.lines-table thead tr th {\n  color: var(--sf-grid-hd-color);\n  font-weight: 700;\n  font-size: 0.7rem;\n  padding: 0.4rem 0.5rem;\n  text-align: right;\n  border-bottom: 2px solid var(--sf-grid-hd-border);\n  white-space: nowrap;\n}\n.lines-table thead tr th.ta-num {\n  text-align: left;\n}\n.lines-table thead tr th.ta-center {\n  text-align: center;\n}\n.lines-table tbody tr {\n  border-bottom: 1px solid var(--sf-border);\n  transition: background 0.12s;\n}\n.lines-table tbody tr:hover {\n  background: var(--sf-bg-hover);\n}\n.lines-table tbody tr:last-child {\n  border-bottom: none;\n}\n.lines-table tbody tr td {\n  padding: 0.45rem 0.5rem;\n  color: var(--sf-text);\n  vertical-align: middle;\n}\n.lines-table tbody tr td.ta-num {\n  text-align: left;\n}\n.lines-table tbody tr td.ta-center {\n  text-align: center;\n}\n.group-badge {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.7rem;\n  background: var(--sf-bg-hover);\n  border: 1px solid var(--sf-border);\n  border-radius: 4px;\n  padding: 1px 5px;\n  color: var(--sf-text-secondary);\n}\n.sku-mono {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.74rem;\n  color: var(--sf-text);\n  white-space: nowrap;\n}\n.sku-customer {\n  font-size: 0.67rem;\n  color: var(--sf-text-muted);\n  font-family: "Share Tech Mono", monospace;\n}\n.line-desc {\n  font-size: 0.76rem;\n  max-width: 140px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.uom-badge {\n  font-size: 0.62rem;\n  color: var(--sf-text-muted);\n  margin-right: 3px;\n}\n.dispatch-progress {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  min-width: 80px;\n}\n.dp-bar {\n  flex: 1;\n  height: 6px;\n  background: var(--sf-border);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.dp-fill {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.dp-fill.dp-full {\n  background: var(--sf-success);\n}\n.dp-fill.dp-partial {\n  background: var(--sf-primary);\n}\n.dp-fill.dp-none {\n  background: transparent;\n}\n.dp-label {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  white-space: nowrap;\n}\n.line-comm {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--sf-primary);\n}\n.text-muted {\n  color: var(--sf-text-muted);\n}\n.shipment-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.shipment-timeline {\n  position: relative;\n}\n.st-step {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  position: relative;\n  padding-bottom: 0;\n}\n.st-step .st-dot {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--sf-border);\n  background: var(--sf-bg-card);\n  flex-shrink: 0;\n  margin-top: 2px;\n  transition: background 0.2s, border-color 0.2s;\n  position: relative;\n  z-index: 1;\n}\n.st-step.done .st-dot {\n  background: var(--sf-success);\n  border-color: var(--sf-success);\n}\n.st-step.done .st-dot::after {\n  content: "\\2713";\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 9px;\n  color: #fff;\n  font-weight: 900;\n}\n.st-step .st-content {\n  flex: 1;\n  padding-bottom: 1.25rem;\n}\n.st-step .st-label {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--sf-text);\n}\n.st-step .st-date {\n  font-size: 0.75rem;\n  color: var(--sf-text-secondary);\n  margin-top: 0.1rem;\n}\n.st-step .st-ref {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.7rem;\n  color: var(--sf-text-muted);\n  margin-top: 0.1rem;\n}\n.st-line {\n  width: 2px;\n  height: 1.25rem;\n  background: var(--sf-border);\n  margin-right: 7px;\n  margin-bottom: 0;\n  margin-top: 0;\n  transition: background 0.2s;\n}\n.st-line.done {\n  background: var(--sf-success);\n}\n.ship-details {\n  background: var(--sf-bg-hover);\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.625rem;\n}\n.empty-state {\n  text-align: center;\n  padding: 2rem;\n  color: var(--sf-text-muted);\n}\n.empty-state mat-icon {\n  font-size: 36px;\n  width: 36px;\n  height: 36px;\n  opacity: 0.4;\n}\n.empty-state p {\n  font-size: 0.83rem;\n  margin-top: 0.5rem;\n}\n.fin-cards {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.fin-card {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 10px;\n  padding: 0.875rem 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  border-inline-start: 3px solid var(--sf-border);\n}\n.fin-card.fin-ok {\n  border-inline-start-color: var(--sf-success);\n}\n.fin-card.fin-pending {\n  border-inline-start-color: var(--sf-warning);\n}\n.fin-card .finc-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: var(--sf-bg-hover);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--sf-text-secondary);\n  flex-shrink: 0;\n}\n.fin-card .finc-icon mat-icon {\n  font-size: 20px;\n}\n.fin-card.fin-ok .finc-icon {\n  background: #d1fae5;\n  color: #059669;\n}\n.finc-body {\n  flex: 1;\n  min-width: 0;\n}\n.finc-body .finc-title {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.finc-body .finc-ref {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.73rem;\n  color: var(--sf-text-secondary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.finc-body .finc-date {\n  font-size: 0.7rem;\n  color: var(--sf-text-muted);\n}\n.finc-body .finc-amount {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin-top: 0.15rem;\n}\n.finc-body .finc-amount.finc-commission {\n  color: var(--sf-primary);\n}\n.finc-body .finc-received {\n  font-size: 0.72rem;\n  color: var(--sf-success);\n  font-weight: 600;\n}\n.finc-status {\n  flex-shrink: 0;\n}\n.fin-chip {\n  font-size: 0.7rem;\n  font-weight: 700;\n  border-radius: 99px;\n  padding: 3px 10px;\n  white-space: nowrap;\n}\n.fin-chip.fin-chip-ok {\n  background: #d1fae5;\n  color: #059669;\n}\n.fin-chip.fin-chip-pending {\n  background: #fef3c7;\n  color: #d97706;\n}\n.fin-chip.fin-chip-warn {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.drawer-footer {\n  flex-shrink: 0;\n  border-top: 1px solid var(--sf-border);\n  padding: 0.75rem 1.125rem;\n  display: flex;\n  direction: rtl;\n  gap: 0.5rem;\n}\n.df-btn-primary {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.45rem 1rem;\n  background: #f97316;\n  color: #fff;\n  border: none;\n  border-radius: 7px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: background 0.13s;\n}\n.df-btn-primary mat-icon {\n  font-size: 16px;\n}\n.df-btn-primary:hover {\n  background: #ea6c0a;\n}\n.df-btn-secondary,\n.df-btn-danger {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.45rem 1rem;\n  background: var(--sf-bg-card);\n  color: var(--sf-text-secondary);\n  border: 1px solid var(--sf-border);\n  border-radius: 7px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: all 0.13s;\n}\n.df-btn-secondary mat-icon,\n.df-btn-danger mat-icon {\n  font-size: 16px;\n}\n.df-btn-secondary:hover,\n.df-btn-danger:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.df-btn-danger {\n  margin-right: auto;\n}\n.df-btn-danger:hover {\n  background: #fee2e2;\n  color: #dc2626;\n  border-color: #fca5a5;\n}\n/*# sourceMappingURL=order-drawer.component.css.map */\n'] }]
  }], null, { order: [{
    type: Input
  }], closed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderDrawerComponent, { className: "OrderDrawerComponent", filePath: "src/app/features/arachim/orders/order-drawer/order-drawer.component.ts", lineNumber: 15 });
})();

// src/app/core/services/arachim-orders.service.ts
var ArachimOrdersService = class _ArachimOrdersService {
  http;
  constructor(http) {
    this.http = http;
  }
  getOrders(params) {
    let p = new HttpParams();
    if (params?.year)
      p = p.set("year", params.year.toString());
    if (params?.companyId)
      p = p.set("companyId", params.companyId.toString());
    if (params?.supplierId)
      p = p.set("supplierId", params.supplierId.toString());
    if (params?.customerId)
      p = p.set("customerId", params.customerId.toString());
    if (params?.status)
      p = p.set("status", params.status);
    if (params?.search)
      p = p.set("search", params.search);
    return this.http.get("/api/arachim/orders", { params: p }).pipe(map((r) => this.parseOrders(r.data)));
  }
  getOrder(orderId) {
    return this.http.get(`/api/arachim/orders/${orderId}`).pipe(map((r) => this.parseOrder(r.data)));
  }
  getSuppliers() {
    return this.http.get("/api/arachim/meta/suppliers").pipe(map((r) => r.data));
  }
  parseOrders(raw) {
    return (raw || []).map((o) => this.parseOrder(o));
  }
  parseOrder(o) {
    return __spreadProps(__spreadValues({}, o), {
      orderDate: o.orderDate ? new Date(o.orderDate) : null,
      deliveryDate: o.deliveryDate ? new Date(o.deliveryDate) : null,
      eta: o.eta ? new Date(o.eta) : null,
      ata: o.ata ? new Date(o.ata) : null,
      lines: (o.lines || []).map((l) => __spreadProps(__spreadValues({}, l), {
        deliveryDate: l.deliveryDate ? new Date(l.deliveryDate) : null
      })),
      shipment: o.shipment ? this.parseShipment(o.shipment) : null,
      financial: o.financial ? __spreadProps(__spreadValues({}, o.financial), {
        supplierInvoiceDate: o.financial.supplierInvoiceDate ? new Date(o.financial.supplierInvoiceDate) : null
      }) : null
    });
  }
  parseShipment(s) {
    return __spreadProps(__spreadValues({}, s), {
      supplierOCDate: s.supplierOCDate ? new Date(s.supplierOCDate) : null,
      desiredDeliveryDate: s.desiredDeliveryDate ? new Date(s.desiredDeliveryDate) : null,
      updatedDeliveryDate: s.updatedDeliveryDate ? new Date(s.updatedDeliveryDate) : null,
      handoverToShipperDate: s.handoverToShipperDate ? new Date(s.handoverToShipperDate) : null,
      goodsLeftFactoryDate: s.goodsLeftFactoryDate ? new Date(s.goodsLeftFactoryDate) : null,
      etd: s.etd ? new Date(s.etd) : null,
      eta: s.eta ? new Date(s.eta) : null,
      ata: s.ata ? new Date(s.ata) : null
    });
  }
  static \u0275fac = function ArachimOrdersService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ArachimOrdersService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ArachimOrdersService, factory: _ArachimOrdersService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArachimOrdersService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/arachim/orders/orders.component.ts
var _c0 = (a0, a1) => ({ data: a0, total: a1 });
var _c1 = () => [10, 25, 50];
var _c2 = (a0) => ({ buttonCount: 5, info: true, type: "numeric", pageSizes: a0 });
var _c3 = () => ({ mode: "single", allowUnsort: false });
var _c4 = () => ({ mode: "multiple", checkboxOnly: true });
function OrdersComponent_For_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275property("value", s_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1);
  }
}
function OrdersComponent_For_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r2 = ctx.$implicit;
    \u0275\u0275property("value", y_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(y_r2);
  }
}
function OrdersComponent_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function OrdersComponent_Conditional_76_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clearFilters());
    });
    \u0275\u0275elementStart(1, "span", 46);
    \u0275\u0275text(2, "filter_list_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u05E0\u05E7\u05D4 ");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_ng_template_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 47);
  }
  if (rf & 2) {
    const o_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", "status-" + o_r5.status)("title", ctx_r3.statusLabel(o_r5.status));
  }
}
function OrdersComponent_ng_template_82_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, "\u05DE");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_ng_template_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "span", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, OrdersComponent_ng_template_82_Conditional_3_Template, 2, 0, "span", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("badge-frame", o_r6.isFrameContract);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.orderBadge(o_r6), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r6.isFrameContract ? 3 : -1);
  }
}
function OrdersComponent_ng_template_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "span", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 53);
    \u0275\u0275text(4, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 54);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r7.supplierShort);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(o_r7.customerShort);
  }
}
function OrdersComponent_ng_template_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r8.salesDomainPrefix);
  }
}
function OrdersComponent_ng_template_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "span", 57);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 58);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, o_r9.totalValue, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r9.currency);
  }
}
function OrdersComponent_ng_template_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "span", 60);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 61);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementStart(6, "span", 62);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "comm-" + o_r10.commissionType.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.commBadge(o_r10), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 4, o_r10.commissionAmount, "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r10.currency);
  }
}
function OrdersComponent_ng_template_92_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r3.dateClass(o_r11.deliveryDate));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, o_r11.deliveryDate, "dd/MM/yy"), " ");
  }
}
function OrdersComponent_ng_template_92_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_ng_template_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, OrdersComponent_ng_template_92_Conditional_0_Template, 3, 5, "span", 63)(1, OrdersComponent_ng_template_92_Conditional_1_Template, 2, 0, "span", 64);
  }
  if (rf & 2) {
    const o_r11 = ctx.$implicit;
    \u0275\u0275conditional(o_r11.deliveryDate ? 0 : 1);
  }
}
function OrdersComponent_ng_template_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function OrdersComponent_ng_template_94_Template_button_click_0_listener($event) {
      const o_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.selectedOrder.set(o_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "span", 46);
    \u0275\u0275text(2, "chevron_left");
    \u0275\u0275elementEnd()();
  }
}
function OrdersComponent_Conditional_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-order-drawer", 66);
    \u0275\u0275listener("closed", function OrdersComponent_Conditional_98_Template_app_order_drawer_closed_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDrawer());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("order", ctx_r3.selectedOrder());
  }
}
var OrdersComponent = class _OrdersComponent {
  svc;
  allOrders = signal(
    [],
    ...ngDevMode ? [{ debugName: "allOrders" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedOrder = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedOrder" }] : (
      /* istanbul ignore next */
      []
    )
  );
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
  loadingDetail = signal(
    false,
    ...ngDevMode ? [{ debugName: "loadingDetail" }] : (
      /* istanbul ignore next */
      []
    )
  );
  searchTerm = "";
  filterSupplier = "";
  filterStatus = "";
  filterYear = "";
  gridData = [];
  sort = [{ field: "orderDate", dir: "desc" }];
  skip = 0;
  pageSize = 25;
  // ── KPIs ─────────────────────────────────────────────────────────
  openCount = computed(
    () => this.allOrders().filter((o) => o.status !== "cancelled").length,
    ...ngDevMode ? [{ debugName: "openCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  awaitingShipment = computed(
    () => this.allOrders().filter((o) => (o.status === "active" || o.status === "important") && !o.ata).length,
    ...ngDevMode ? [{ debugName: "awaitingShipment" }] : (
      /* istanbul ignore next */
      []
    )
  );
  expectedCommission = computed(
    () => this.allOrders().filter((o) => o.status !== "cancelled").reduce((s, o) => s + o.commissionAmount, 0),
    ...ngDevMode ? [{ debugName: "expectedCommission" }] : (
      /* istanbul ignore next */
      []
    )
  );
  receivedCommission = computed(
    () => this.allOrders().reduce((s, o) => s + (o.commissionAmtReceived || 0), 0),
    ...ngDevMode ? [{ debugName: "receivedCommission" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // ── Filter options ────────────────────────────────────────────────
  supplierOptions = computed(
    () => [...new Set(this.allOrders().map((o) => o.supplierShort))].filter(Boolean).sort(),
    ...ngDevMode ? [{ debugName: "supplierOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  yearOptions = computed(
    () => [...new Set(this.allOrders().map((o) => o.orderYear))].sort((a, b) => b - a),
    ...ngDevMode ? [{ debugName: "yearOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor(svc) {
    this.svc = svc;
  }
  ngOnInit() {
    this.svc.getOrders().subscribe({
      next: (orders) => {
        this.allOrders.set(orders);
        this.loading.set(false);
        this.applyFilters();
      },
      error: () => {
        this.error.set("\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D8\u05E2\u05D9\u05E0\u05EA \u05D4\u05D6\u05DE\u05E0\u05D5\u05EA");
        this.loading.set(false);
      }
    });
  }
  // ── Grid data ─────────────────────────────────────────────────────
  get pagedData() {
    return this.gridData.slice(this.skip, this.skip + this.pageSize);
  }
  applyFilters() {
    let data = this.allOrders();
    if (this.searchTerm) {
      const q = this.searchTerm.toLowerCase();
      data = data.filter((o) => o.supplierShort?.toLowerCase().includes(q) || o.supplierFull?.toLowerCase().includes(q) || o.customerShort?.toLowerCase().includes(q) || o.customerFull?.toLowerCase().includes(q) || o.orderNumber.toString().includes(q));
    }
    if (this.filterSupplier)
      data = data.filter((o) => o.supplierShort === this.filterSupplier);
    if (this.filterStatus)
      data = data.filter((o) => o.status === this.filterStatus);
    if (this.filterYear)
      data = data.filter((o) => o.orderYear === +this.filterYear);
    this.gridData = orderBy(data, this.sort);
    this.skip = 0;
  }
  onSearch(v) {
    this.searchTerm = v;
    this.applyFilters();
  }
  onFilterChange() {
    this.applyFilters();
  }
  onSortChange(s) {
    this.sort = s;
    this.applyFilters();
  }
  onPageChange(e) {
    this.skip = e.skip;
    this.pageSize = e.take;
  }
  clearFilters() {
    this.searchTerm = "";
    this.filterSupplier = "";
    this.filterStatus = "";
    this.filterYear = "";
    this.applyFilters();
  }
  // ── Drawer ────────────────────────────────────────────────────────
  onCellClick(e) {
    const target = e.originalEvent?.target;
    if (target?.closest(".k-checkbox-wrap, .grid-act-btn"))
      return;
    const row = e.dataItem;
    if (row.shipment) {
      this.selectedOrder.set(row);
      return;
    }
    this.loadingDetail.set(true);
    this.svc.getOrder(row.orderId).subscribe({
      next: (full) => {
        this.loadingDetail.set(false);
        this.selectedOrder.set(full);
        const updated = this.allOrders().map((o) => o.orderId === full.orderId ? full : o);
        this.allOrders.set(updated);
      },
      error: () => {
        this.loadingDetail.set(false);
        this.selectedOrder.set(row);
      }
    });
  }
  closeDrawer() {
    this.selectedOrder.set(null);
  }
  // ── Display helpers ───────────────────────────────────────────────
  statusLabels = {
    active: "\u05E4\u05E2\u05D9\u05DC",
    important: "\u05D7\u05E9\u05D5\u05D1",
    frozen: "\u05DE\u05D5\u05E7\u05E4\u05D0",
    cancelled: "\u05D1\u05D5\u05D8\u05DC",
    frame: "\u05DE\u05E1\u05D2\u05E8\u05EA"
  };
  statusLabel(s) {
    return this.statusLabels[s];
  }
  commBadge(o) {
    if (o.commissionType === "PCT")
      return `${(o.commissionPct || 0).toFixed(1)}%`;
    if (o.commissionType === "FIXED")
      return "\u05E7\u05D1\u05D5\u05E2";
    if (o.commissionType === "PER_PRICE")
      return '\xD7\u05DE"\u05DE';
    return "\u2014";
  }
  dateClass(d) {
    if (!d)
      return "";
    const days = Math.ceil((d.getTime() - Date.now()) / 864e5);
    if (days < 0)
      return "date-overdue";
    if (days < 30)
      return "date-soon";
    return "";
  }
  orderBadge(o) {
    return `${o.orderYear}-${o.orderNumber.toString().padStart(3, "0")}`;
  }
  rowClass = (ctx) => {
    const o = ctx.dataItem;
    return {
      "row-cancelled": o.status === "cancelled",
      "row-important": o.status === "important",
      "row-frozen": o.status === "frozen",
      "row-selected": this.selectedOrder()?.orderId === o.orderId
    };
  };
  hasActiveFilters() {
    return !!(this.searchTerm || this.filterSupplier || this.filterStatus || this.filterYear);
  }
  static \u0275fac = function OrdersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrdersComponent)(\u0275\u0275directiveInject(ArachimOrdersService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrdersComponent, selectors: [["app-orders"]], decls: 99, vars: 55, consts: [[1, "orders-page"], [1, "page-header"], [1, "header-titles"], [1, "btn-save"], [1, "kpi-strip"], [1, "kpi-card", "kpi-neutral"], [1, "kpi-icon-wrap", "kpi-icon-neutral"], [1, "kpi-mat-icon"], [1, "kpi-info"], [1, "kpi-label"], [1, "kpi-value"], [1, "kpi-card", "kpi-warn"], [1, "kpi-icon-wrap", "kpi-icon-warn"], [1, "kpi-card", "kpi-primary"], [1, "kpi-icon-wrap", "kpi-icon-primary"], [1, "kpi-card", "kpi-success"], [1, "kpi-icon-wrap", "kpi-icon-success"], [1, "toolbar"], [1, "search-wrap"], [1, "material-icons", "search-icon"], ["type", "text", "placeholder", "\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E1\u05E4\u05E7, \u05DC\u05E7\u05D5\u05D7, \u05DE\u05E1\u05E4\u05E8 \u05D4\u05D6\u05DE\u05E0\u05D4...", 1, "search-input", 3, "input", "value"], [1, "filter-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["value", "active"], ["value", "important"], ["value", "frozen"], ["value", "frame"], ["value", "cancelled"], ["title", "\u05E0\u05E7\u05D4 \u05E4\u05D9\u05DC\u05D8\u05E8\u05D9\u05DD", 1, "btn-clear-filters"], ["scrollable", "none", 1, "orders-grid", 3, "pageChange", "sortChange", "cellClick", "data", "skip", "pageSize", "pageable", "sortable", "sort", "reorderable", "resizable", "selectable", "columnMenu", "rowClass"], [3, "width", "showSelectAll"], ["title", "", "field", "status", 3, "width", "sortable", "resizable", "columnMenu"], ["kendoGridCellTemplate", ""], ["title", "\u05D4\u05D6\u05DE\u05E0\u05D4", "field", "orderNumber", 3, "width"], ["title", "\u05E1\u05E4\u05E7 \u2190 \u05DC\u05E7\u05D5\u05D7", "field", "supplierShort"], ["title", "\u05EA\u05D7\u05D5\u05DD", "field", "salesDomain", 3, "width"], ["title", "\u05E2\u05E8\u05DA", "field", "totalValue", 3, "width"], ["title", "\u05E2\u05DE\u05DC\u05D4", "field", "commissionAmount", 3, "width"], ["title", "\u05D0\u05E1\u05E4\u05E7\u05D4", "field", "deliveryDate", 3, "width"], ["title", "", 3, "width", "sortable", "resizable", "columnMenu"], ["pagerItemsPerPage", "\u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3", "pagerOf", "\u05DE\u05EA\u05D5\u05DA", "pagerItems", "\u05D4\u05D6\u05DE\u05E0\u05D5\u05EA", "columnMenuFilter", "\u05E1\u05E0\u05DF", "columnMenuSort", "\u05DE\u05D9\u05D5\u05DF", "columnMenuColumns", "\u05E2\u05DE\u05D5\u05D3\u05D5\u05EA", "columnMenuSortAscending", "\u05E2\u05D5\u05DC\u05D4", "columnMenuSortDescending", "\u05D9\u05D5\u05E8\u05D3", "selectionCheckboxLabel", "\u05D1\u05D7\u05E8 \u05E9\u05D5\u05E8\u05D4", "selectAllCheckboxLabel", "\u05D1\u05D7\u05E8 \u05D4\u05DB\u05DC", "noRecords", "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05D4\u05D6\u05DE\u05E0\u05D5\u05EA", "loading", "\u05D8\u05D5\u05E2\u05DF..."], [1, "drawer-backdrop", 3, "click"], [1, "drawer-panel"], [3, "order"], ["title", "\u05E0\u05E7\u05D4 \u05E4\u05D9\u05DC\u05D8\u05E8\u05D9\u05DD", 1, "btn-clear-filters", 3, "click"], [1, "material-icons"], [1, "status-dot", 3, "ngClass", "title"], [1, "order-badge-wrap"], [1, "order-badge"], ["title", "\u05D7\u05D5\u05D6\u05D4 \u05DE\u05E1\u05D2\u05E8\u05EA", 1, "frame-tag"], [1, "entity-cell"], [1, "entity-supplier"], [1, "entity-arrow"], [1, "entity-customer"], [1, "domain-badge"], [1, "value-cell"], [1, "value-num"], [1, "value-cur"], [1, "commission-cell"], [1, "comm-badge", 3, "ngClass"], [1, "comm-amount"], [1, "comm-cur"], [1, "date-chip", 3, "ngClass"], [1, "text-muted"], ["title", "\u05E4\u05E8\u05D8\u05D9 \u05D4\u05D6\u05DE\u05E0\u05D4", 1, "grid-act-btn", 3, "click"], [3, "closed", "order"]], template: function OrdersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "\u05D4\u05D6\u05DE\u05E0\u05D5\u05EA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 3);
      \u0275\u0275text(8, "\u2713 \u05D4\u05D6\u05DE\u05E0\u05D4 \u05D7\u05D3\u05E9\u05D4");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 4)(10, "div", 5)(11, "div", 6)(12, "span", 7);
      \u0275\u0275text(13, "inventory_2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 8)(15, "div", 9);
      \u0275\u0275text(16, "\u05D4\u05D6\u05DE\u05E0\u05D5\u05EA \u05E4\u05EA\u05D5\u05D7\u05D5\u05EA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 10);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 11)(20, "div", 12)(21, "span", 7);
      \u0275\u0275text(22, "local_shipping");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 8)(24, "div", 9);
      \u0275\u0275text(25, "\u05DE\u05DE\u05EA\u05D9\u05E0\u05D5\u05EA \u05DC\u05DE\u05E9\u05DC\u05D5\u05D7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 10);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 13)(29, "div", 14)(30, "span", 7);
      \u0275\u0275text(31, "monetization_on");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 8)(33, "div", 9);
      \u0275\u0275text(34, "\u05E2\u05DE\u05DC\u05D4 \u05E6\u05E4\u05D5\u05D9\u05D4 (\u05DB\u05D5\u05DC\u05DC)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 10);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "number");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div", 15)(39, "div", 16)(40, "span", 7);
      \u0275\u0275text(41, "check_circle");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 8)(43, "div", 9);
      \u0275\u0275text(44, "\u05E2\u05DE\u05DC\u05D4 \u05E9\u05D4\u05EA\u05E7\u05D1\u05DC\u05D4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 10);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "number");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(48, "div", 17)(49, "div", 18)(50, "span", 19);
      \u0275\u0275text(51, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "input", 20);
      \u0275\u0275listener("input", function OrdersComponent_Template_input_input_52_listener($event) {
        return ctx.onSearch($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "select", 21);
      \u0275\u0275twoWayListener("ngModelChange", function OrdersComponent_Template_select_ngModelChange_53_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterSupplier, $event) || (ctx.filterSupplier = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function OrdersComponent_Template_select_ngModelChange_53_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(54, "option", 22);
      \u0275\u0275text(55, "\u05DB\u05DC \u05D4\u05E1\u05E4\u05E7\u05D9\u05DD");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(56, OrdersComponent_For_57_Template, 2, 2, "option", 23, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(58, "select", 21);
      \u0275\u0275twoWayListener("ngModelChange", function OrdersComponent_Template_select_ngModelChange_58_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterStatus, $event) || (ctx.filterStatus = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function OrdersComponent_Template_select_ngModelChange_58_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(59, "option", 22);
      \u0275\u0275text(60, "\u05DB\u05DC \u05D4\u05E1\u05D8\u05D8\u05D5\u05E1\u05D9\u05DD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "option", 24);
      \u0275\u0275text(62, "\u05E4\u05E2\u05D9\u05DC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "option", 25);
      \u0275\u0275text(64, "\u05D7\u05E9\u05D5\u05D1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "option", 26);
      \u0275\u0275text(66, "\u05DE\u05D5\u05E7\u05E4\u05D0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "option", 27);
      \u0275\u0275text(68, "\u05DE\u05E1\u05D2\u05E8\u05EA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "option", 28);
      \u0275\u0275text(70, "\u05D1\u05D5\u05D8\u05DC");
      \u0275\u0275elementEnd()();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(71, "select", 21);
      \u0275\u0275twoWayListener("ngModelChange", function OrdersComponent_Template_select_ngModelChange_71_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterYear, $event) || (ctx.filterYear = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function OrdersComponent_Template_select_ngModelChange_71_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(72, "option", 22);
      \u0275\u0275text(73, "\u05DB\u05DC \u05D4\u05E9\u05E0\u05D9\u05DD");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(74, OrdersComponent_For_75_Template, 2, 2, "option", 23, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275conditionalCreate(76, OrdersComponent_Conditional_76_Template, 4, 0, "button", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "kendo-grid", 30);
      \u0275\u0275listener("pageChange", function OrdersComponent_Template_kendo_grid_pageChange_77_listener($event) {
        return ctx.onPageChange($event);
      })("sortChange", function OrdersComponent_Template_kendo_grid_sortChange_77_listener($event) {
        return ctx.onSortChange($event);
      })("cellClick", function OrdersComponent_Template_kendo_grid_cellClick_77_listener($event) {
        return ctx.onCellClick($event);
      });
      \u0275\u0275element(78, "kendo-grid-checkbox-column", 31);
      \u0275\u0275elementStart(79, "kendo-grid-column", 32);
      \u0275\u0275template(80, OrdersComponent_ng_template_80_Template, 1, 2, "ng-template", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "kendo-grid-column", 34);
      \u0275\u0275template(82, OrdersComponent_ng_template_82_Template, 4, 4, "ng-template", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "kendo-grid-column", 35);
      \u0275\u0275template(84, OrdersComponent_ng_template_84_Template, 7, 2, "ng-template", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "kendo-grid-column", 36);
      \u0275\u0275template(86, OrdersComponent_ng_template_86_Template, 2, 1, "ng-template", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "kendo-grid-column", 37);
      \u0275\u0275template(88, OrdersComponent_ng_template_88_Template, 6, 5, "ng-template", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "kendo-grid-column", 38);
      \u0275\u0275template(90, OrdersComponent_ng_template_90_Template, 8, 7, "ng-template", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "kendo-grid-column", 39);
      \u0275\u0275template(92, OrdersComponent_ng_template_92_Template, 2, 1, "ng-template", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "kendo-grid-column", 40);
      \u0275\u0275template(94, OrdersComponent_ng_template_94_Template, 3, 0, "ng-template", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275element(95, "kendo-grid-messages", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "div", 42);
      \u0275\u0275listener("click", function OrdersComponent_Template_div_click_96_listener() {
        return ctx.closeDrawer();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "div", 43);
      \u0275\u0275conditionalCreate(98, OrdersComponent_Conditional_98_Template, 1, 1, "app-order-drawer", 44);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.gridData.length, " \u05D4\u05D6\u05DE\u05E0\u05D5\u05EA \u05DE\u05D5\u05E6\u05D2\u05D5\u05EA");
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.openCount());
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.awaitingShipment());
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 41, ctx.expectedCommission(), "1.0-0"));
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 44, ctx.receivedCommission(), "1.0-0"));
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.filterSupplier);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.supplierOptions());
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterStatus);
      \u0275\u0275control();
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterYear);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.yearOptions());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.hasActiveFilters() ? 76 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("data", \u0275\u0275pureFunction2(47, _c0, ctx.pagedData, ctx.gridData.length))("skip", ctx.skip)("pageSize", ctx.pageSize)("pageable", \u0275\u0275pureFunction1(51, _c2, \u0275\u0275pureFunction0(50, _c1)))("sortable", \u0275\u0275pureFunction0(53, _c3))("sort", ctx.sort)("reorderable", true)("resizable", true)("selectable", \u0275\u0275pureFunction0(54, _c4))("columnMenu", true)("rowClass", ctx.rowClass);
      \u0275\u0275advance();
      \u0275\u0275property("width", 44)("showSelectAll", true);
      \u0275\u0275advance();
      \u0275\u0275property("width", 52)("sortable", false)("resizable", false)("columnMenu", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("width", 120);
      \u0275\u0275advance(4);
      \u0275\u0275property("width", 80);
      \u0275\u0275advance(2);
      \u0275\u0275property("width", 130);
      \u0275\u0275advance(2);
      \u0275\u0275property("width", 140);
      \u0275\u0275advance(2);
      \u0275\u0275property("width", 105);
      \u0275\u0275advance(2);
      \u0275\u0275property("width", 64)("sortable", false)("resizable", false)("columnMenu", false);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("visible", !!ctx.selectedOrder());
      \u0275\u0275advance();
      \u0275\u0275classProp("open", !!ctx.selectedOrder());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedOrder() ? 98 : -1);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    FormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    SelectControlValueAccessor,
    NgControlStatus,
    NgModel,
    GridModule,
    GridComponent,
    CustomMessagesComponent,
    ColumnComponent,
    CheckboxColumnComponent,
    CellTemplateDirective,
    ButtonsModule,
    MatIconModule,
    OrderDrawerComponent,
    DecimalPipe,
    DatePipe
  ], styles: ['\n.orders-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding-bottom: 2rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 800;\n  color: var(--sf-text);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--sf-text-muted);\n  margin: 2px 0 0;\n}\n.btn-save[_ngcontent-%COMP%] {\n  background: #f97316;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 0.5rem 1.25rem;\n  font-size: 0.83rem;\n  font-weight: 700;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.13s;\n}\n.btn-save[_ngcontent-%COMP%]:hover {\n  background: #ea6c0a;\n}\n.kpi-strip[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0.75rem;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-inline-start: 3px solid var(--sf-border);\n  border-radius: 10px;\n  padding: 0.875rem 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  transition: box-shadow 0.15s, transform 0.15s;\n}\n.kpi-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n  transform: translateY(-1px);\n}\n.kpi-card.kpi-primary[_ngcontent-%COMP%] {\n  border-inline-start-color: var(--sf-primary);\n}\n.kpi-card.kpi-success[_ngcontent-%COMP%] {\n  border-inline-start-color: var(--sf-success);\n}\n.kpi-card.kpi-warn[_ngcontent-%COMP%] {\n  border-inline-start-color: var(--sf-warning);\n}\n.kpi-card.kpi-neutral[_ngcontent-%COMP%] {\n  border-inline-start-color: var(--sf-text-secondary);\n}\n.kpi-icon-wrap[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.kpi-icon-wrap.kpi-icon-primary[_ngcontent-%COMP%] {\n  background: var(--sf-primary-light);\n  color: var(--sf-primary);\n}\n.kpi-icon-wrap.kpi-icon-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #059669;\n}\n.kpi-icon-wrap.kpi-icon-warn[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.kpi-icon-wrap.kpi-icon-neutral[_ngcontent-%COMP%] {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text-secondary);\n}\n.kpi-mat-icon[_ngcontent-%COMP%] {\n  font-family: "Material Icons";\n  font-size: 20px;\n  line-height: 1;\n}\n.kpi-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.kpi-info[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--sf-text-secondary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.kpi-info[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  font-size: 1.45rem;\n  font-weight: 800;\n  color: var(--sf-text);\n  line-height: 1.2;\n}\n.kpi-primary[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  color: var(--sf-primary);\n}\n.kpi-success[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  color: var(--sf-success);\n}\n.kpi-warn[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  color: var(--sf-warning);\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  flex-wrap: wrap;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 0.375rem 0.75rem;\n  flex: 1;\n  min-width: 220px;\n  max-width: 380px;\n  transition: border-color 0.15s;\n}\n.search-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--sf-border-focus);\n}\n.search-wrap[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  font-family: "Material Icons";\n  font-size: 18px;\n  color: var(--sf-text-muted);\n}\n.search-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  outline: none;\n  font-size: 0.84rem;\n  color: var(--sf-text);\n  width: 100%;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--sf-text-muted);\n}\n.filter-select[_ngcontent-%COMP%] {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 0.375rem 0.75rem;\n  font-size: 0.82rem;\n  color: var(--sf-text);\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  outline: none;\n  direction: rtl;\n  transition: border-color 0.15s;\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--sf-border-focus);\n}\n.btn-clear-filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  background: none;\n  border: 1px dashed var(--sf-border);\n  border-radius: 8px;\n  padding: 0.375rem 0.75rem;\n  font-size: 0.8rem;\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: all 0.13s;\n}\n.btn-clear-filters[_ngcontent-%COMP%]:hover {\n  border-color: var(--sf-danger);\n  color: var(--sf-danger);\n}\n.btn-clear-filters[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n  .orders-grid .k-grid-header th.k-header {\n  background: var(--sf-grid-hd-bg) !important;\n  color: var(--sf-grid-hd-color) !important;\n  font-weight: 700 !important;\n  font-size: 0.76rem !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n  border-color: var(--sf-grid-hd-border) !important;\n}\n  .orders-grid .k-grid-header {\n  background: var(--sf-grid-hd-bg) !important;\n}\n  .orders-grid .k-column-menu-button {\n  color: var(--sf-grid-hd-color);\n  opacity: 0.7;\n}\n  .orders-grid tbody tr:hover td {\n  background: var(--sf-bg-hover) !important;\n  cursor: pointer;\n}\n  .orders-grid tbody tr.row-selected td {\n  background: var(--sf-primary-light) !important;\n  border-inline-start: 3px solid var(--sf-primary);\n}\n  .orders-grid tbody tr.row-cancelled td {\n  opacity: 0.5;\n}\n  .orders-grid tbody tr.row-important td {\n  border-inline-start: 3px solid var(--sf-warning);\n}\n  .orders-grid tbody tr.row-frozen td {\n  border-inline-start: 3px solid #3b82f6;\n}\n.status-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.status-dot.status-active[_ngcontent-%COMP%] {\n  background: var(--sf-success);\n}\n.status-dot.status-important[_ngcontent-%COMP%] {\n  background: var(--sf-warning);\n  animation: _ngcontent-%COMP%_pulse-important 2.2s ease-in-out infinite;\n}\n.status-dot.status-frozen[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.status-dot.status-cancelled[_ngcontent-%COMP%] {\n  background: var(--sf-danger);\n  opacity: 0.6;\n}\n.status-dot.status-frame[_ngcontent-%COMP%] {\n  background: var(--sf-primary);\n}\n@keyframes _ngcontent-%COMP%_pulse-important {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.5);\n  }\n  60% {\n    box-shadow: 0 0 0 7px rgba(245, 158, 11, 0);\n  }\n}\n.order-badge-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.order-badge[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.76rem;\n  font-weight: 600;\n  background: var(--sf-bg-hover);\n  border: 1px solid var(--sf-border);\n  border-radius: 5px;\n  padding: 1px 7px;\n  color: var(--sf-text);\n  letter-spacing: 0.02em;\n  white-space: nowrap;\n}\n.order-badge.badge-frame[_ngcontent-%COMP%] {\n  background: var(--sf-primary-light);\n  border-color: var(--sf-primary);\n  color: var(--sf-primary);\n}\n.frame-tag[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  font-weight: 800;\n  background: var(--sf-primary);\n  color: #fff;\n  border-radius: 3px;\n  padding: 0 4px;\n}\n.entity-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.83rem;\n}\n.entity-cell[_ngcontent-%COMP%]   .entity-supplier[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--sf-text);\n}\n.entity-cell[_ngcontent-%COMP%]   .entity-arrow[_ngcontent-%COMP%] {\n  color: var(--sf-text-muted);\n  font-size: 0.75rem;\n}\n.entity-cell[_ngcontent-%COMP%]   .entity-customer[_ngcontent-%COMP%] {\n  color: var(--sf-text-secondary);\n  font-size: 0.8rem;\n}\n.domain-badge[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.68rem;\n  font-weight: 700;\n  background: var(--sf-bg-hover);\n  border: 1px solid var(--sf-border);\n  border-radius: 4px;\n  padding: 1px 5px;\n  color: var(--sf-text-secondary);\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.value-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 0.3rem;\n}\n.value-cell[_ngcontent-%COMP%]   .value-num[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: var(--sf-text);\n}\n.value-cell[_ngcontent-%COMP%]   .value-cur[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: var(--sf-text-muted);\n}\n.commission-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.comm-badge[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  border-radius: 4px;\n  padding: 1px 6px;\n  white-space: nowrap;\n}\n.comm-badge.comm-pct[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #059669;\n}\n.comm-badge.comm-fixed[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.comm-badge.comm-per_price[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.comm-badge.comm-none[_ngcontent-%COMP%] {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text-muted);\n}\n.comm-amount[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  font-weight: 600;\n  color: var(--sf-text);\n}\n.comm-cur[_ngcontent-%COMP%] {\n  font-size: 0.66rem;\n  color: var(--sf-text-muted);\n  margin-right: 2px;\n}\n.date-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border-radius: 5px;\n  padding: 1px 7px;\n  background: transparent;\n  color: var(--sf-text-secondary);\n}\n.date-chip.date-overdue[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.date-chip.date-soon[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--sf-text-muted);\n  font-size: 0.8rem;\n}\n.grid-act-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  color: var(--sf-text-muted);\n  transition: background 0.13s, color 0.13s;\n}\n.grid-act-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.grid-act-btn[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-primary);\n}\n.drawer-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 49;\n  pointer-events: none;\n  transition: background 0.25s;\n}\n.drawer-backdrop.visible[_ngcontent-%COMP%] {\n  pointer-events: auto;\n  background: rgba(0, 0, 0, 0.04);\n}\n.drawer-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 52px;\n  left: 0;\n  width: min(44vw, 640px);\n  height: calc(100vh - 52px);\n  background: var(--sf-bg-card);\n  border-right: 1px solid var(--sf-border);\n  box-shadow: 6px 0 40px rgba(0, 0, 0, 0.12);\n  z-index: 50;\n  overflow: hidden;\n  transform: translateX(-105%);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.drawer-panel.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n/*# sourceMappingURL=orders.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrdersComponent, [{
    type: Component,
    args: [{ selector: "app-orders", standalone: true, imports: [
      CommonModule,
      FormsModule,
      GridModule,
      ButtonsModule,
      MatIconModule,
      OrderDrawerComponent,
      DatePipe
    ], template: `<div class="orders-page">

  <!-- \u2500\u2500 Page Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="page-header">
    <div class="header-titles">
      <h1>\u05D4\u05D6\u05DE\u05E0\u05D5\u05EA</h1>
      <p>{{ gridData.length }} \u05D4\u05D6\u05DE\u05E0\u05D5\u05EA \u05DE\u05D5\u05E6\u05D2\u05D5\u05EA</p>
    </div>
    <button class="btn-save">\u2713 \u05D4\u05D6\u05DE\u05E0\u05D4 \u05D7\u05D3\u05E9\u05D4</button>
  </div>

  <!-- \u2500\u2500 KPI Strip \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="kpi-strip">
    <div class="kpi-card kpi-neutral">
      <div class="kpi-icon-wrap kpi-icon-neutral">
        <span class="kpi-mat-icon">inventory_2</span>
      </div>
      <div class="kpi-info">
        <div class="kpi-label">\u05D4\u05D6\u05DE\u05E0\u05D5\u05EA \u05E4\u05EA\u05D5\u05D7\u05D5\u05EA</div>
        <div class="kpi-value">{{ openCount() }}</div>
      </div>
    </div>
    <div class="kpi-card kpi-warn">
      <div class="kpi-icon-wrap kpi-icon-warn">
        <span class="kpi-mat-icon">local_shipping</span>
      </div>
      <div class="kpi-info">
        <div class="kpi-label">\u05DE\u05DE\u05EA\u05D9\u05E0\u05D5\u05EA \u05DC\u05DE\u05E9\u05DC\u05D5\u05D7</div>
        <div class="kpi-value">{{ awaitingShipment() }}</div>
      </div>
    </div>
    <div class="kpi-card kpi-primary">
      <div class="kpi-icon-wrap kpi-icon-primary">
        <span class="kpi-mat-icon">monetization_on</span>
      </div>
      <div class="kpi-info">
        <div class="kpi-label">\u05E2\u05DE\u05DC\u05D4 \u05E6\u05E4\u05D5\u05D9\u05D4 (\u05DB\u05D5\u05DC\u05DC)</div>
        <div class="kpi-value">{{ expectedCommission() | number:'1.0-0' }}</div>
      </div>
    </div>
    <div class="kpi-card kpi-success">
      <div class="kpi-icon-wrap kpi-icon-success">
        <span class="kpi-mat-icon">check_circle</span>
      </div>
      <div class="kpi-info">
        <div class="kpi-label">\u05E2\u05DE\u05DC\u05D4 \u05E9\u05D4\u05EA\u05E7\u05D1\u05DC\u05D4</div>
        <div class="kpi-value">{{ receivedCommission() | number:'1.0-0' }}</div>
      </div>
    </div>
  </div>

  <!-- \u2500\u2500 Toolbar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="toolbar">
    <div class="search-wrap">
      <span class="material-icons search-icon">search</span>
      <input class="search-input" type="text" placeholder="\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E1\u05E4\u05E7, \u05DC\u05E7\u05D5\u05D7, \u05DE\u05E1\u05E4\u05E8 \u05D4\u05D6\u05DE\u05E0\u05D4..."
             [value]="searchTerm" (input)="onSearch($any($event.target).value)" />
    </div>

    <select class="filter-select" [(ngModel)]="filterSupplier" (ngModelChange)="onFilterChange()">
      <option value="">\u05DB\u05DC \u05D4\u05E1\u05E4\u05E7\u05D9\u05DD</option>
      @for (s of supplierOptions(); track s) {
        <option [value]="s">{{ s }}</option>
      }
    </select>

    <select class="filter-select" [(ngModel)]="filterStatus" (ngModelChange)="onFilterChange()">
      <option value="">\u05DB\u05DC \u05D4\u05E1\u05D8\u05D8\u05D5\u05E1\u05D9\u05DD</option>
      <option value="active">\u05E4\u05E2\u05D9\u05DC</option>
      <option value="important">\u05D7\u05E9\u05D5\u05D1</option>
      <option value="frozen">\u05DE\u05D5\u05E7\u05E4\u05D0</option>
      <option value="frame">\u05DE\u05E1\u05D2\u05E8\u05EA</option>
      <option value="cancelled">\u05D1\u05D5\u05D8\u05DC</option>
    </select>

    <select class="filter-select" [(ngModel)]="filterYear" (ngModelChange)="onFilterChange()">
      <option value="">\u05DB\u05DC \u05D4\u05E9\u05E0\u05D9\u05DD</option>
      @for (y of yearOptions(); track y) {
        <option [value]="y">{{ y }}</option>
      }
    </select>

    @if (hasActiveFilters()) {
      <button class="btn-clear-filters" (click)="clearFilters()" title="\u05E0\u05E7\u05D4 \u05E4\u05D9\u05DC\u05D8\u05E8\u05D9\u05DD">
        <span class="material-icons">filter_list_off</span>
        \u05E0\u05E7\u05D4
      </button>
    }
  </div>

  <!-- \u2500\u2500 Grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <kendo-grid
    [data]="{ data: pagedData, total: gridData.length }"
    [skip]="skip"
    [pageSize]="pageSize"
    [pageable]="{ buttonCount: 5, info: true, type: 'numeric', pageSizes: [10, 25, 50] }"
    [sortable]="{ mode: 'single', allowUnsort: false }"
    [sort]="sort"
    [reorderable]="true"
    [resizable]="true"
    [selectable]="{ mode: 'multiple', checkboxOnly: true }"
    [columnMenu]="true"
    [rowClass]="rowClass"
    scrollable="none"
    (pageChange)="onPageChange($event)"
    (sortChange)="onSortChange($event)"
    (cellClick)="onCellClick($event)"
    class="orders-grid">

    <!-- Checkbox -->
    <kendo-grid-checkbox-column [width]="44" [showSelectAll]="true" />

    <!-- Status -->
    <kendo-grid-column title="" field="status" [width]="52"
      [sortable]="false" [resizable]="false" [columnMenu]="false">
      <ng-template kendoGridCellTemplate let-o>
        <span class="status-dot" [ngClass]="'status-' + o.status"
              [title]="statusLabel(o.status)"></span>
      </ng-template>
    </kendo-grid-column>

    <!-- Order Number -->
    <kendo-grid-column title="\u05D4\u05D6\u05DE\u05E0\u05D4" field="orderNumber" [width]="120">
      <ng-template kendoGridCellTemplate let-o>
        <div class="order-badge-wrap">
          <span class="order-badge" [class.badge-frame]="o.isFrameContract">
            {{ orderBadge(o) }}
          </span>
          @if (o.isFrameContract) {
            <span class="frame-tag" title="\u05D7\u05D5\u05D6\u05D4 \u05DE\u05E1\u05D2\u05E8\u05EA">\u05DE</span>
          }
        </div>
      </ng-template>
    </kendo-grid-column>

    <!-- Supplier / Customer -->
    <kendo-grid-column title="\u05E1\u05E4\u05E7 \u2190 \u05DC\u05E7\u05D5\u05D7" field="supplierShort">
      <ng-template kendoGridCellTemplate let-o>
        <div class="entity-cell">
          <span class="entity-supplier">{{ o.supplierShort }}</span>
          <span class="entity-arrow">\u2192</span>
          <span class="entity-customer">{{ o.customerShort }}</span>
        </div>
      </ng-template>
    </kendo-grid-column>

    <!-- Domain -->
    <kendo-grid-column title="\u05EA\u05D7\u05D5\u05DD" field="salesDomain" [width]="80">
      <ng-template kendoGridCellTemplate let-o>
        <span class="domain-badge">{{ o.salesDomainPrefix }}</span>
      </ng-template>
    </kendo-grid-column>

    <!-- Total Value -->
    <kendo-grid-column title="\u05E2\u05E8\u05DA" field="totalValue" [width]="130">
      <ng-template kendoGridCellTemplate let-o>
        <div class="value-cell">
          <span class="value-num">{{ o.totalValue | number:'1.0-0' }}</span>
          <span class="value-cur">{{ o.currency }}</span>
        </div>
      </ng-template>
    </kendo-grid-column>

    <!-- Commission -->
    <kendo-grid-column title="\u05E2\u05DE\u05DC\u05D4" field="commissionAmount" [width]="140">
      <ng-template kendoGridCellTemplate let-o>
        <div class="commission-cell">
          <span class="comm-badge" [ngClass]="'comm-' + o.commissionType.toLowerCase()">
            {{ commBadge(o) }}
          </span>
          <span class="comm-amount">
            {{ o.commissionAmount | number:'1.0-0' }}
            <span class="comm-cur">{{ o.currency }}</span>
          </span>
        </div>
      </ng-template>
    </kendo-grid-column>

    <!-- Delivery Date -->
    <kendo-grid-column title="\u05D0\u05E1\u05E4\u05E7\u05D4" field="deliveryDate" [width]="105">
      <ng-template kendoGridCellTemplate let-o>
        @if (o.deliveryDate) {
          <span class="date-chip" [ngClass]="dateClass(o.deliveryDate)">
            {{ o.deliveryDate | date:'dd/MM/yy' }}
          </span>
        } @else {
          <span class="text-muted">\u2014</span>
        }
      </ng-template>
    </kendo-grid-column>

    <!-- Actions -->
    <kendo-grid-column title="" [width]="64"
      [sortable]="false" [resizable]="false" [columnMenu]="false">
      <ng-template kendoGridCellTemplate let-o>
        <button class="grid-act-btn" title="\u05E4\u05E8\u05D8\u05D9 \u05D4\u05D6\u05DE\u05E0\u05D4"
                (click)="selectedOrder.set(o); $event.stopPropagation()">
          <span class="material-icons">chevron_left</span>
        </button>
      </ng-template>
    </kendo-grid-column>

    <kendo-grid-messages
      pagerItemsPerPage="\u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3" pagerOf="\u05DE\u05EA\u05D5\u05DA" pagerItems="\u05D4\u05D6\u05DE\u05E0\u05D5\u05EA"
      columnMenuFilter="\u05E1\u05E0\u05DF" columnMenuSort="\u05DE\u05D9\u05D5\u05DF" columnMenuColumns="\u05E2\u05DE\u05D5\u05D3\u05D5\u05EA"
      columnMenuSortAscending="\u05E2\u05D5\u05DC\u05D4" columnMenuSortDescending="\u05D9\u05D5\u05E8\u05D3"
      selectionCheckboxLabel="\u05D1\u05D7\u05E8 \u05E9\u05D5\u05E8\u05D4" selectAllCheckboxLabel="\u05D1\u05D7\u05E8 \u05D4\u05DB\u05DC"
      noRecords="\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05D4\u05D6\u05DE\u05E0\u05D5\u05EA" loading="\u05D8\u05D5\u05E2\u05DF..." />
  </kendo-grid>

</div>

<!-- \u2500\u2500 Drawer backdrop \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<div class="drawer-backdrop"
     [class.visible]="!!selectedOrder()"
     (click)="closeDrawer()">
</div>

<!-- \u2500\u2500 Drawer panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<div class="drawer-panel" [class.open]="!!selectedOrder()">
  @if (selectedOrder()) {
    <app-order-drawer
      [order]="selectedOrder()!"
      (closed)="closeDrawer()">
    </app-order-drawer>
  }
</div>
`, styles: ['/* src/app/features/arachim/orders/orders.component.scss */\n.orders-page {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding-bottom: 2rem;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.page-header h1 {\n  font-size: 1.35rem;\n  font-weight: 800;\n  color: var(--sf-text);\n  margin: 0;\n}\n.page-header p {\n  font-size: 0.8rem;\n  color: var(--sf-text-muted);\n  margin: 2px 0 0;\n}\n.btn-save {\n  background: #f97316;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 0.5rem 1.25rem;\n  font-size: 0.83rem;\n  font-weight: 700;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.13s;\n}\n.btn-save:hover {\n  background: #ea6c0a;\n}\n.kpi-strip {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0.75rem;\n}\n.kpi-card {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-inline-start: 3px solid var(--sf-border);\n  border-radius: 10px;\n  padding: 0.875rem 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  transition: box-shadow 0.15s, transform 0.15s;\n}\n.kpi-card:hover {\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n  transform: translateY(-1px);\n}\n.kpi-card.kpi-primary {\n  border-inline-start-color: var(--sf-primary);\n}\n.kpi-card.kpi-success {\n  border-inline-start-color: var(--sf-success);\n}\n.kpi-card.kpi-warn {\n  border-inline-start-color: var(--sf-warning);\n}\n.kpi-card.kpi-neutral {\n  border-inline-start-color: var(--sf-text-secondary);\n}\n.kpi-icon-wrap {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.kpi-icon-wrap.kpi-icon-primary {\n  background: var(--sf-primary-light);\n  color: var(--sf-primary);\n}\n.kpi-icon-wrap.kpi-icon-success {\n  background: #d1fae5;\n  color: #059669;\n}\n.kpi-icon-wrap.kpi-icon-warn {\n  background: #fef3c7;\n  color: #d97706;\n}\n.kpi-icon-wrap.kpi-icon-neutral {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text-secondary);\n}\n.kpi-mat-icon {\n  font-family: "Material Icons";\n  font-size: 20px;\n  line-height: 1;\n}\n.kpi-info {\n  flex: 1;\n  min-width: 0;\n}\n.kpi-info .kpi-label {\n  font-size: 0.7rem;\n  color: var(--sf-text-secondary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.kpi-info .kpi-value {\n  font-size: 1.45rem;\n  font-weight: 800;\n  color: var(--sf-text);\n  line-height: 1.2;\n}\n.kpi-primary .kpi-value {\n  color: var(--sf-primary);\n}\n.kpi-success .kpi-value {\n  color: var(--sf-success);\n}\n.kpi-warn .kpi-value {\n  color: var(--sf-warning);\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  flex-wrap: wrap;\n}\n.search-wrap {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 0.375rem 0.75rem;\n  flex: 1;\n  min-width: 220px;\n  max-width: 380px;\n  transition: border-color 0.15s;\n}\n.search-wrap:focus-within {\n  border-color: var(--sf-border-focus);\n}\n.search-wrap .search-icon {\n  font-family: "Material Icons";\n  font-size: 18px;\n  color: var(--sf-text-muted);\n}\n.search-wrap .search-input {\n  border: none;\n  background: none;\n  outline: none;\n  font-size: 0.84rem;\n  color: var(--sf-text);\n  width: 100%;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n.search-wrap .search-input::placeholder {\n  color: var(--sf-text-muted);\n}\n.filter-select {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 0.375rem 0.75rem;\n  font-size: 0.82rem;\n  color: var(--sf-text);\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  outline: none;\n  direction: rtl;\n  transition: border-color 0.15s;\n}\n.filter-select:focus {\n  border-color: var(--sf-border-focus);\n}\n.btn-clear-filters {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  background: none;\n  border: 1px dashed var(--sf-border);\n  border-radius: 8px;\n  padding: 0.375rem 0.75rem;\n  font-size: 0.8rem;\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: all 0.13s;\n}\n.btn-clear-filters:hover {\n  border-color: var(--sf-danger);\n  color: var(--sf-danger);\n}\n.btn-clear-filters .material-icons {\n  font-size: 16px;\n}\n::ng-deep .orders-grid .k-grid-header th.k-header {\n  background: var(--sf-grid-hd-bg) !important;\n  color: var(--sf-grid-hd-color) !important;\n  font-weight: 700 !important;\n  font-size: 0.76rem !important;\n  border-bottom: 2px solid var(--sf-grid-hd-border) !important;\n  border-color: var(--sf-grid-hd-border) !important;\n}\n::ng-deep .orders-grid .k-grid-header {\n  background: var(--sf-grid-hd-bg) !important;\n}\n::ng-deep .orders-grid .k-column-menu-button {\n  color: var(--sf-grid-hd-color);\n  opacity: 0.7;\n}\n::ng-deep .orders-grid tbody tr:hover td {\n  background: var(--sf-bg-hover) !important;\n  cursor: pointer;\n}\n::ng-deep .orders-grid tbody tr.row-selected td {\n  background: var(--sf-primary-light) !important;\n  border-inline-start: 3px solid var(--sf-primary);\n}\n::ng-deep .orders-grid tbody tr.row-cancelled td {\n  opacity: 0.5;\n}\n::ng-deep .orders-grid tbody tr.row-important td {\n  border-inline-start: 3px solid var(--sf-warning);\n}\n::ng-deep .orders-grid tbody tr.row-frozen td {\n  border-inline-start: 3px solid #3b82f6;\n}\n.status-dot {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.status-dot.status-active {\n  background: var(--sf-success);\n}\n.status-dot.status-important {\n  background: var(--sf-warning);\n  animation: pulse-important 2.2s ease-in-out infinite;\n}\n.status-dot.status-frozen {\n  background: #3b82f6;\n}\n.status-dot.status-cancelled {\n  background: var(--sf-danger);\n  opacity: 0.6;\n}\n.status-dot.status-frame {\n  background: var(--sf-primary);\n}\n@keyframes pulse-important {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.5);\n  }\n  60% {\n    box-shadow: 0 0 0 7px rgba(245, 158, 11, 0);\n  }\n}\n.order-badge-wrap {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.order-badge {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.76rem;\n  font-weight: 600;\n  background: var(--sf-bg-hover);\n  border: 1px solid var(--sf-border);\n  border-radius: 5px;\n  padding: 1px 7px;\n  color: var(--sf-text);\n  letter-spacing: 0.02em;\n  white-space: nowrap;\n}\n.order-badge.badge-frame {\n  background: var(--sf-primary-light);\n  border-color: var(--sf-primary);\n  color: var(--sf-primary);\n}\n.frame-tag {\n  font-size: 0.62rem;\n  font-weight: 800;\n  background: var(--sf-primary);\n  color: #fff;\n  border-radius: 3px;\n  padding: 0 4px;\n}\n.entity-cell {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.83rem;\n}\n.entity-cell .entity-supplier {\n  font-weight: 700;\n  color: var(--sf-text);\n}\n.entity-cell .entity-arrow {\n  color: var(--sf-text-muted);\n  font-size: 0.75rem;\n}\n.entity-cell .entity-customer {\n  color: var(--sf-text-secondary);\n  font-size: 0.8rem;\n}\n.domain-badge {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.68rem;\n  font-weight: 700;\n  background: var(--sf-bg-hover);\n  border: 1px solid var(--sf-border);\n  border-radius: 4px;\n  padding: 1px 5px;\n  color: var(--sf-text-secondary);\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.value-cell {\n  display: flex;\n  align-items: baseline;\n  gap: 0.3rem;\n}\n.value-cell .value-num {\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: var(--sf-text);\n}\n.value-cell .value-cur {\n  font-size: 0.68rem;\n  color: var(--sf-text-muted);\n}\n.commission-cell {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.comm-badge {\n  font-size: 0.68rem;\n  font-weight: 700;\n  border-radius: 4px;\n  padding: 1px 6px;\n  white-space: nowrap;\n}\n.comm-badge.comm-pct {\n  background: #d1fae5;\n  color: #059669;\n}\n.comm-badge.comm-fixed {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.comm-badge.comm-per_price {\n  background: #fef3c7;\n  color: #d97706;\n}\n.comm-badge.comm-none {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text-muted);\n}\n.comm-amount {\n  font-size: 0.83rem;\n  font-weight: 600;\n  color: var(--sf-text);\n}\n.comm-cur {\n  font-size: 0.66rem;\n  color: var(--sf-text-muted);\n  margin-right: 2px;\n}\n.date-chip {\n  display: inline-block;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border-radius: 5px;\n  padding: 1px 7px;\n  background: transparent;\n  color: var(--sf-text-secondary);\n}\n.date-chip.date-overdue {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.date-chip.date-soon {\n  background: #fef3c7;\n  color: #d97706;\n}\n.text-muted {\n  color: var(--sf-text-muted);\n  font-size: 0.8rem;\n}\n.grid-act-btn {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  color: var(--sf-text-muted);\n  transition: background 0.13s, color 0.13s;\n}\n.grid-act-btn .material-icons {\n  font-size: 18px;\n}\n.grid-act-btn:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-primary);\n}\n.drawer-backdrop {\n  position: fixed;\n  inset: 0;\n  z-index: 49;\n  pointer-events: none;\n  transition: background 0.25s;\n}\n.drawer-backdrop.visible {\n  pointer-events: auto;\n  background: rgba(0, 0, 0, 0.04);\n}\n.drawer-panel {\n  position: fixed;\n  top: 52px;\n  left: 0;\n  width: min(44vw, 640px);\n  height: calc(100vh - 52px);\n  background: var(--sf-bg-card);\n  border-right: 1px solid var(--sf-border);\n  box-shadow: 6px 0 40px rgba(0, 0, 0, 0.12);\n  z-index: 50;\n  overflow: hidden;\n  transform: translateX(-105%);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.drawer-panel.open {\n  transform: translateX(0);\n}\n/*# sourceMappingURL=orders.component.css.map */\n'] }]
  }], () => [{ type: ArachimOrdersService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrdersComponent, { className: "OrdersComponent", filePath: "src/app/features/arachim/orders/orders.component.ts", lineNumber: 27 });
})();
export {
  OrdersComponent
};
//# sourceMappingURL=chunk-FEFPNWNE.js.map
