import {
  ActivatedRoute,
  Router
} from "./chunk-ZG4ME4LP.js";
import {
  DialogActionsComponent,
  DialogComponent,
  DialogsModule,
  InputsModule
} from "./chunk-BYBLGOFY.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-AVTM4YYQ.js";
import {
  Dir
} from "./chunk-7BTXUMFJ.js";
import {
  ButtonsModule,
  IndicatorsModule,
  LoaderComponent
} from "./chunk-BV74N4V5.js";
import "./chunk-YZNXQPNO.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-4FOUEPN2.js";
import {
  CommonModule,
  Component,
  HttpClient,
  KeyValuePipe,
  __spreadProps,
  __spreadValues,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VR4UVLCZ.js";

// src/app/features/projects/workspace/axon/axon.component.ts
var _c0 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.name;
var _forTrack2 = ($index, $item) => $index + $item.key + $item.depth;
function _forTrack3($index, $item) {
  return this.routeKey($item);
}
var _forTrack4 = ($index, $item) => $item.key;
function AxonComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 19)(2, "span", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 21);
    \u0275\u0275text(5, "Routes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 23);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 24);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 25);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 26);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 27)(17, "mat-icon");
    \u0275\u0275text(18, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 28)(21, "mat-icon");
    \u0275\u0275text(22, "public");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r1 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r1.total);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("GET ", s_r1.gets);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("POST ", s_r1.posts);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("PUT ", s_r1.puts);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("DEL ", s_r1.deletes);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("PATCH ", s_r1.patches);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", s_r1.secured, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", s_r1.public, " ");
  }
}
function AxonComponent_Conditional_32_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-loader", 30);
  }
}
function AxonComponent_Conditional_32_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "download");
    \u0275\u0275elementEnd();
  }
}
function AxonComponent_Conditional_32_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const imp_r4 = ctx;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("\u2713 \u05D9\u05D5\u05D1\u05D0\u05D5 ", imp_r4.inserted, " | \u05E7\u05D9\u05D9\u05DE\u05D9\u05DD ", imp_r4.skipped);
  }
}
function AxonComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function AxonComponent_Conditional_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.importPlatform());
    });
    \u0275\u0275conditionalCreate(1, AxonComponent_Conditional_32_Conditional_1_Template, 1, 0, "kendo-loader", 30)(2, AxonComponent_Conditional_32_Conditional_2_Template, 2, 0, "mat-icon");
    \u0275\u0275text(3, " Sync Platform ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, AxonComponent_Conditional_32_Conditional_4_Template, 2, 2, "span", 31);
    \u0275\u0275elementStart(5, "button", 32);
    \u0275\u0275listener("click", function AxonComponent_Conditional_32_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNew());
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Route \u05D7\u05D3\u05E9 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r2.importing());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.importing() ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_3_0 = ctx_r2.importResult()) ? 4 : -1, tmp_3_0);
  }
}
function AxonComponent_Conditional_33_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function AxonComponent_Conditional_33_For_11_Template_button_click_0_listener() {
      const cat_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.activeCategory.set(cat_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.activeCategory() === cat_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r7);
  }
}
function AxonComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 33)(2, "mat-icon", 34);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 35);
    \u0275\u0275listener("input", function AxonComponent_Conditional_33_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.searchText.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 36)(6, "button", 37);
    \u0275\u0275listener("click", function AxonComponent_Conditional_33_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeCategory.set(null));
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "apps");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(10, AxonComponent_Conditional_33_For_11_Template, 2, 3, "button", 38, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.searchText());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.activeCategory() === null);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" \u05D4\u05DB\u05DC (", ctx_r2.categories().length, ") ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.categories());
  }
}
function AxonComponent_Conditional_34_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 63);
  }
  if (rf & 2) {
    const l_r9 = ctx.$implicit;
    \u0275\u0275attribute("x1", l_r9.x1)("y1", l_r9.y1)("x2", l_r9.x2)("y2", l_r9.y2);
  }
}
function AxonComponent_Conditional_34_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 64);
  }
  if (rf & 2) {
    const d_r10 = ctx.$implicit;
    \u0275\u0275attribute("cx", d_r10.x)("cy", d_r10.y)("r", d_r10.r)("opacity", d_r10.op);
  }
}
function AxonComponent_Conditional_34_Conditional_34_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 89);
  }
  if (rf & 2) {
    const cat_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("x1", ctx_r2.axonCenter().x)("y1", ctx_r2.axonCenter().y)("x2", cat_r11.x)("y2", cat_r11.y)("stroke", cat_r11.color)("stroke-opacity", cat_r11.active || cat_r11.hovered ? 0.8 : 0.22)("stroke-width", cat_r11.active ? 2 : 1.2);
  }
}
function AxonComponent_Conditional_34_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AxonComponent_Conditional_34_Conditional_34_For_1_Template, 1, 7, ":svg:line", 89, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2.categoryNodes());
  }
}
function AxonComponent_Conditional_34_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 66);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("x1", ctx_r2.axonCenter().x)("y1", ctx_r2.axonCenter().y)("x2", ctx_r2.expandedCatCenter.x)("y2", ctx_r2.expandedCatCenter.y)("stroke", ctx_r2.CAT_COLORS[ctx_r2.activeGraphCat()] ?? "#10b981");
  }
}
function AxonComponent_Conditional_34_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 67);
  }
  if (rf & 2) {
    const rn_r12 = ctx.$implicit;
    \u0275\u0275attribute("x1", rn_r12.catX)("y1", rn_r12.catY)("x2", rn_r12.x)("y2", rn_r12.y)("stroke", rn_r12.fg)("stroke-opacity", rn_r12.hovered ? 1 : 0.5)("marker-end", "url(#arr-" + rn_r12.method.toLowerCase() + ")");
  }
}
function AxonComponent_Conditional_34_For_39_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 94)(1, "circle", 95);
  }
  if (rf & 2) {
    const rn_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("cx", rn_r14.x)("cy", rn_r14.y)("stroke", rn_r14.bg);
    \u0275\u0275advance();
    \u0275\u0275attribute("cx", rn_r14.x)("cy", rn_r14.y)("stroke", rn_r14.bg);
  }
}
function AxonComponent_Conditional_34_For_39_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 91);
  }
  if (rf & 2) {
    const rn_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("cx", rn_r14.x)("cy", rn_r14.y)("fill", rn_r14.bg);
  }
}
function AxonComponent_Conditional_34_For_39_Conditional_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 99);
    \u0275\u0275elementStart(1, "text", 100);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rn_r14 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275attribute("x", rn_r14.x - 82)("y", rn_r14.y + 22);
    \u0275\u0275advance();
    \u0275\u0275attribute("x", rn_r14.x)("y", rn_r14.y + 34);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rn_r14.title.slice(0, 26));
  }
}
function AxonComponent_Conditional_34_For_39_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "rect", 96);
    \u0275\u0275elementStart(2, "text", 97);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "text", 98);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, AxonComponent_Conditional_34_For_39_Conditional_6_Conditional_6_Template, 3, 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rn_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275attribute("x", rn_r14.x - 88)("y", rn_r14.y - 44);
    \u0275\u0275advance();
    \u0275\u0275attribute("x", rn_r14.x)("y", rn_r14.y - 29);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rn_r14.method);
    \u0275\u0275advance();
    \u0275\u0275attribute("x", rn_r14.x + 28)("y", rn_r14.y - 29);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rn_r14.path.length > 22 ? rn_r14.path.slice(0, 21) + "\u2026" : rn_r14.path);
    \u0275\u0275advance();
    \u0275\u0275conditional(rn_r14.title ? 6 : -1);
  }
}
function AxonComponent_Conditional_34_For_39_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "rect", 101);
    \u0275\u0275elementStart(2, "text", 102);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rn_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275attribute("x", rn_r14.x + 16)("y", rn_r14.y - 8);
    \u0275\u0275advance();
    \u0275\u0275attribute("x", rn_r14.x + 42)("y", rn_r14.y + 4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", rn_r14.extraCount);
  }
}
function AxonComponent_Conditional_34_For_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g", 90);
    \u0275\u0275listener("mouseenter", function AxonComponent_Conditional_34_For_39_Template_g_mouseenter_0_listener() {
      const rn_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.hoveredRoute.set(rn_r14.id));
    })("mouseleave", function AxonComponent_Conditional_34_For_39_Template_g_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.hoveredRoute.set(null));
    })("click", function AxonComponent_Conditional_34_For_39_Template_g_click_0_listener() {
      const rn_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectRouteInGraph(rn_r14.route));
    });
    \u0275\u0275conditionalCreate(1, AxonComponent_Conditional_34_For_39_Conditional_1_Template, 2, 6);
    \u0275\u0275conditionalCreate(2, AxonComponent_Conditional_34_For_39_Conditional_2_Template, 1, 3, ":svg:circle", 91);
    \u0275\u0275element(3, "circle", 92);
    \u0275\u0275elementStart(4, "text", 93);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, AxonComponent_Conditional_34_For_39_Conditional_6_Template, 7, 9, ":svg:g");
    \u0275\u0275conditionalCreate(7, AxonComponent_Conditional_34_For_39_Conditional_7_Template, 4, 5, ":svg:g");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rn_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(rn_r14.selected ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(rn_r14.hovered || rn_r14.selected ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("cx", rn_r14.x)("cy", rn_r14.y)("fill", rn_r14.hovered || rn_r14.selected ? rn_r14.bg : "#0d2018")("stroke", rn_r14.bg)("stroke-width", rn_r14.selected ? 2.5 : rn_r14.hovered ? 2 : 1.5)("filter", rn_r14.hovered || rn_r14.selected ? "url(#glow-sm)" : "");
    \u0275\u0275advance();
    \u0275\u0275attribute("x", rn_r14.x)("y", rn_r14.y + 4)("fill", rn_r14.hovered || rn_r14.selected ? rn_r14.fg : rn_r14.bg);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rn_r14.method[0]);
    \u0275\u0275advance();
    \u0275\u0275conditional(rn_r14.hovered ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(rn_r14.isLast ? 7 : -1);
  }
}
function AxonComponent_Conditional_34_For_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g", 103);
    \u0275\u0275listener("mouseenter", function AxonComponent_Conditional_34_For_41_Template_g_mouseenter_0_listener() {
      const cat_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.hoveredGraphCat.set(cat_r16.id));
    })("mouseleave", function AxonComponent_Conditional_34_For_41_Template_g_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.hoveredGraphCat.set(null));
    })("click", function AxonComponent_Conditional_34_For_41_Template_g_click_0_listener() {
      const cat_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleGraphCat(cat_r16.id));
    });
    \u0275\u0275element(1, "circle", 104);
    \u0275\u0275elementStart(2, "text", 105);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "text", 106);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r16 = ctx.$implicit;
    \u0275\u0275styleProp("pointer-events", cat_r16.hidden ? "none" : "auto");
    \u0275\u0275attribute("opacity", cat_r16.hidden ? 0 : 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("cx", cat_r16.x)("cy", cat_r16.y)("fill", cat_r16.color)("fill-opacity", cat_r16.hovered ? 0.14 : 0.07)("stroke", cat_r16.color)("stroke-width", cat_r16.hovered ? 2 : 1.2)("stroke-opacity", cat_r16.hovered ? 0.9 : 0.45)("filter", cat_r16.hovered ? "url(#glow-sm)" : "");
    \u0275\u0275advance();
    \u0275\u0275attribute("x", cat_r16.x)("y", cat_r16.y - 5)("font-size", cat_r16.id.length > 9 ? "9" : "10")("fill", cat_r16.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r16.id);
    \u0275\u0275advance();
    \u0275\u0275attribute("x", cat_r16.x)("y", cat_r16.y + 10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r16.count);
  }
}
function AxonComponent_Conditional_34_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g", 70);
    \u0275\u0275element(1, "circle", 107)(2, "circle", 108)(3, "circle", 109)(4, "circle", 110);
    \u0275\u0275elementStart(5, "text", 111);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "text", 112);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const activeCat_r17 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("cx", ctx_r2.expandedCatCenter.x)("cy", ctx_r2.expandedCatCenter.y)("stroke", ctx_r2.CAT_COLORS[activeCat_r17] ?? "#64748b");
    \u0275\u0275advance();
    \u0275\u0275attribute("cx", ctx_r2.expandedCatCenter.x)("cy", ctx_r2.expandedCatCenter.y)("stroke", ctx_r2.CAT_COLORS[activeCat_r17] ?? "#64748b");
    \u0275\u0275advance();
    \u0275\u0275attribute("cx", ctx_r2.expandedCatCenter.x)("cy", ctx_r2.expandedCatCenter.y)("stroke", ctx_r2.CAT_COLORS[activeCat_r17] ?? "#64748b");
    \u0275\u0275advance();
    \u0275\u0275attribute("cx", ctx_r2.expandedCatCenter.x)("cy", ctx_r2.expandedCatCenter.y)("fill", ctx_r2.CAT_COLORS[activeCat_r17] ?? "#64748b");
    \u0275\u0275advance();
    \u0275\u0275attribute("x", ctx_r2.expandedCatCenter.x)("y", ctx_r2.expandedCatCenter.y - 7)("font-size", activeCat_r17.length > 9 ? "11" : "14")("fill", ctx_r2.CAT_COLORS[activeCat_r17] ?? "#e2f8ef");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(activeCat_r17);
    \u0275\u0275advance();
    \u0275\u0275attribute("x", ctx_r2.expandedCatCenter.x)("y", ctx_r2.expandedCatCenter.y + 13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", (ctx_r2.activeGrouped()[activeCat_r17] ?? \u0275\u0275pureFunction0(20, _c0)).length, " routes");
  }
}
function AxonComponent_Conditional_34_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "text", 85);
    \u0275\u0275text(1, "AXON");
    \u0275\u0275elementEnd();
  }
}
function AxonComponent_Conditional_34_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "text", 113);
    \u0275\u0275text(1, "\u21A9 \u05D7\u05D6\u05D5\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "text", 85);
    \u0275\u0275text(3, "AXON");
    \u0275\u0275elementEnd();
  }
}
function AxonComponent_Conditional_34_Conditional_59_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 117);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r18 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background", ctx_r2.methodStyle(m_r18).bg)("color", ctx_r2.methodStyle(m_r18).color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r18, " ");
  }
}
function AxonComponent_Conditional_34_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "span", 114);
    \u0275\u0275text(2, "\u05DC\u05D7\u05E5 \u05E2\u05DC \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 \u05DC\u05E6\u05E4\u05D9\u05D9\u05D4 \u05D1\u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 115);
    \u0275\u0275repeaterCreate(4, AxonComponent_Conditional_34_Conditional_59_For_5_Template, 2, 5, "span", 116, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.methods);
  }
}
function AxonComponent_Conditional_34_Conditional_60_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const insp_r20 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getTitle(insp_r20));
  }
}
function AxonComponent_Conditional_34_Conditional_60_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 126);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const insp_r20 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("SP: ", insp_r20.SpName);
  }
}
function AxonComponent_Conditional_34_Conditional_60_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127)(1, "div", 129);
    \u0275\u0275text(2, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 135);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const insp_r20 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.getDesc(insp_r20));
  }
}
function AxonComponent_Conditional_34_Conditional_60_Conditional_15_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 136)(1, "code", 137);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 138);
    \u0275\u0275text(4, "string");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pp_r21 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(":", pp_r21);
  }
}
function AxonComponent_Conditional_34_Conditional_60_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127)(1, "div", 129);
    \u0275\u0275text(2, "Path Params");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, AxonComponent_Conditional_34_Conditional_60_Conditional_15_For_4_Template, 5, 1, "div", 136, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const insp_r20 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.pathParams(ctx_r2.getPath(insp_r20)));
  }
}
function AxonComponent_Conditional_34_Conditional_60_Conditional_16_For_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 139);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function AxonComponent_Conditional_34_Conditional_60_Conditional_16_For_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 140);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r22 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r22.description);
  }
}
function AxonComponent_Conditional_34_Conditional_60_Conditional_16_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 136)(1, "code", 137);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 138);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, AxonComponent_Conditional_34_Conditional_60_Conditional_16_For_4_Conditional_5_Template, 2, 0, "span", 139);
    \u0275\u0275conditionalCreate(6, AxonComponent_Conditional_34_Conditional_60_Conditional_16_For_4_Conditional_6_Template, 2, 1, "span", 140);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r22 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r22.name);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r2.getSchemaTypeColor(p_r22.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r22.type);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r22.required ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r22.description ? 6 : -1);
  }
}
function AxonComponent_Conditional_34_Conditional_60_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127)(1, "div", 129);
    \u0275\u0275text(2, "Request Body");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, AxonComponent_Conditional_34_Conditional_60_Conditional_16_For_4_Template, 7, 6, "div", 136, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const insp_r20 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(insp_r20.ReqSchema);
  }
}
function AxonComponent_Conditional_34_Conditional_60_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 130);
    \u0275\u0275text(1, "undefined");
    \u0275\u0275elementEnd();
  }
}
function AxonComponent_Conditional_34_Conditional_60_Conditional_21_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 144);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r23 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(node_r23.key);
  }
}
function AxonComponent_Conditional_34_Conditional_60_Conditional_21_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r23 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(node_r23.preview);
  }
}
function AxonComponent_Conditional_34_Conditional_60_Conditional_21_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 142)(1, "span", 143);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, AxonComponent_Conditional_34_Conditional_60_Conditional_21_For_2_Conditional_3_Template, 2, 1, "code", 144);
    \u0275\u0275elementStart(4, "span", 145);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, AxonComponent_Conditional_34_Conditional_60_Conditional_21_For_2_Conditional_6_Template, 2, 1, "span", 146);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r23 = ctx.$implicit;
    \u0275\u0275styleProp("padding-left", node_r23.depth * 14 + 8, "px");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(node_r23.depth > 0 ? "\u2514" : "\u25B8");
    \u0275\u0275advance();
    \u0275\u0275conditional(node_r23.key ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", node_r23.typeColor + "22")("color", node_r23.typeColor)("border-color", node_r23.typeColor + "44");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", node_r23.typeName, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(node_r23.preview ? 6 : -1);
  }
}
function AxonComponent_Conditional_34_Conditional_60_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131);
    \u0275\u0275repeaterCreate(1, AxonComponent_Conditional_34_Conditional_60_Conditional_21_For_2_Template, 7, 12, "div", 141, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.schemaNodes());
  }
}
function AxonComponent_Conditional_34_Conditional_60_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 132)(1, "code", 147);
    \u0275\u0275text(2, "{ success: boolean, data: any, message: string }");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 148);
    \u0275\u0275text(4, "\u05D4\u05D2\u05D3\u05E8 Response Schema \u05D1\u05E2\u05E8\u05D9\u05DB\u05EA \u05D4-route");
    \u0275\u0275elementEnd()();
  }
}
function AxonComponent_Conditional_34_Conditional_60_Conditional_23_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 149);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r24 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r24);
  }
}
function AxonComponent_Conditional_34_Conditional_60_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133);
    \u0275\u0275repeaterCreate(1, AxonComponent_Conditional_34_Conditional_60_Conditional_23_For_2_Template, 2, 1, "span", 149, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const insp_r20 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(insp_r20.Tags);
  }
}
function AxonComponent_Conditional_34_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87)(1, "div", 118)(2, "span", 119);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "code", 120);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 121);
    \u0275\u0275listener("click", function AxonComponent_Conditional_34_Conditional_60_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectedRouteGraph.set(null));
    });
    \u0275\u0275text(7, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 122);
    \u0275\u0275conditionalCreate(9, AxonComponent_Conditional_34_Conditional_60_Conditional_9_Template, 2, 1, "div", 123);
    \u0275\u0275elementStart(10, "div", 124)(11, "span", 125);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, AxonComponent_Conditional_34_Conditional_60_Conditional_13_Template, 2, 1, "span", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, AxonComponent_Conditional_34_Conditional_60_Conditional_14_Template, 5, 1, "div", 127);
    \u0275\u0275conditionalCreate(15, AxonComponent_Conditional_34_Conditional_60_Conditional_15_Template, 5, 0, "div", 127);
    \u0275\u0275conditionalCreate(16, AxonComponent_Conditional_34_Conditional_60_Conditional_16_Template, 5, 0, "div", 127);
    \u0275\u0275elementStart(17, "div", 128)(18, "div", 129);
    \u0275\u0275text(19, " Response Object ");
    \u0275\u0275conditionalCreate(20, AxonComponent_Conditional_34_Conditional_60_Conditional_20_Template, 2, 0, "span", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, AxonComponent_Conditional_34_Conditional_60_Conditional_21_Template, 3, 0, "div", 131)(22, AxonComponent_Conditional_34_Conditional_60_Conditional_22_Template, 5, 0, "div", 132);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, AxonComponent_Conditional_34_Conditional_60_Conditional_23_Template, 3, 0, "div", 133);
    \u0275\u0275elementStart(24, "button", 134);
    \u0275\u0275listener("click", function AxonComponent_Conditional_34_Conditional_60_Template_button_click_24_listener() {
      const insp_r20 = \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openInspectorTest(insp_r20));
    });
    \u0275\u0275elementStart(25, "mat-icon");
    \u0275\u0275text(26, "play_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Test Route ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const insp_r20 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r2.methodStyle(ctx_r2.getMethod(insp_r20)).bg)("color", ctx_r2.methodStyle(ctx_r2.getMethod(insp_r20)).color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getMethod(insp_r20), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getPath(insp_r20));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.getTitle(insp_r20) ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("insp-secured", ctx_r2.isAuth(insp_r20))("insp-public", !ctx_r2.isAuth(insp_r20));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isAuth(insp_r20) ? "\u{1F512} JWT Required" : "\u{1F310} Public", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(insp_r20.SpName ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getDesc(insp_r20) ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.pathParams(ctx_r2.getPath(insp_r20)).length ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(insp_r20.ReqSchema && insp_r20.ReqSchema.length ? 16 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!insp_r20.ResSchema ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.schemaNodes().length ? 21 : 22);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(insp_r20.Tags && insp_r20.Tags.length ? 23 : -1);
  }
}
function AxonComponent_Conditional_34_Conditional_61_For_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 161);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r27 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getTitle(r_r27));
  }
}
function AxonComponent_Conditional_34_Conditional_61_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 158);
    \u0275\u0275listener("mouseenter", function AxonComponent_Conditional_34_Conditional_61_For_12_Template_div_mouseenter_0_listener() {
      const r_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.hoveredRoute.set(ctx_r2.routeKey(r_r27)));
    })("mouseleave", function AxonComponent_Conditional_34_Conditional_61_For_12_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.hoveredRoute.set(null));
    })("click", function AxonComponent_Conditional_34_Conditional_61_For_12_Template_div_click_0_listener() {
      const r_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectRouteInGraph(r_r27));
    });
    \u0275\u0275elementStart(1, "span", 159);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 160);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, AxonComponent_Conditional_34_Conditional_61_For_12_Conditional_5_Template, 2, 1, "span", 161);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r27 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("rfp-hovered", ctx_r2.hoveredRoute() === ctx_r2.routeKey(r_r27))("rfp-selected", ctx_r2.selectedRouteGraph() === r_r27);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r2.methodStyle(ctx_r2.getMethod(r_r27)).bg)("color", ctx_r2.methodStyle(ctx_r2.getMethod(r_r27)).color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getMethod(r_r27), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getPath(r_r27));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getTitle(r_r27) ? 5 : -1);
  }
}
function AxonComponent_Conditional_34_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 150)(2, "div", 151);
    \u0275\u0275element(3, "span", 152);
    \u0275\u0275elementStart(4, "span", 153);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 154);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 155);
    \u0275\u0275listener("click", function AxonComponent_Conditional_34_Conditional_61_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.activeGraphCat.set(null));
    });
    \u0275\u0275text(9, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 156);
    \u0275\u0275repeaterCreate(11, AxonComponent_Conditional_34_Conditional_61_For_12_Template, 6, 11, "div", 157, _forTrack3, true);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const activeCat_r28 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r2.CAT_COLORS[activeCat_r28] ?? "#64748b");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(activeCat_r28);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r2.activeGrouped()[activeCat_r28] ?? \u0275\u0275pureFunction0(4, _c0)).length);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.activeGrouped()[activeCat_r28] ?? \u0275\u0275pureFunction0(5, _c0));
  }
}
function AxonComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 39)(2, "defs")(3, "marker", 40);
    \u0275\u0275element(4, "path", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "marker", 42);
    \u0275\u0275element(6, "path", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "marker", 44);
    \u0275\u0275element(8, "path", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "marker", 46);
    \u0275\u0275element(10, "path", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "marker", 48);
    \u0275\u0275element(12, "path", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "marker", 50);
    \u0275\u0275element(14, "path", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "filter", 52);
    \u0275\u0275element(16, "feGaussianBlur", 53);
    \u0275\u0275elementStart(17, "feMerge");
    \u0275\u0275element(18, "feMergeNode", 54)(19, "feMergeNode", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "filter", 56);
    \u0275\u0275element(21, "feGaussianBlur", 57);
    \u0275\u0275elementStart(22, "feMerge");
    \u0275\u0275element(23, "feMergeNode", 58)(24, "feMergeNode", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "radialGradient", 59);
    \u0275\u0275element(26, "stop", 60)(27, "stop", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(28, "rect", 62);
    \u0275\u0275repeaterCreate(29, AxonComponent_Conditional_34_For_30_Template, 1, 4, ":svg:line", 63, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275repeaterCreate(31, AxonComponent_Conditional_34_For_32_Template, 1, 4, ":svg:circle", 64, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275element(33, "circle", 65);
    \u0275\u0275conditionalCreate(34, AxonComponent_Conditional_34_Conditional_34_Template, 2, 0);
    \u0275\u0275conditionalCreate(35, AxonComponent_Conditional_34_Conditional_35_Template, 1, 5, ":svg:line", 66);
    \u0275\u0275repeaterCreate(36, AxonComponent_Conditional_34_For_37_Template, 1, 7, ":svg:line", 67, _forTrack0);
    \u0275\u0275repeaterCreate(38, AxonComponent_Conditional_34_For_39_Template, 8, 14, ":svg:g", 68, _forTrack0);
    \u0275\u0275repeaterCreate(40, AxonComponent_Conditional_34_For_41_Template, 6, 19, ":svg:g", 69, _forTrack0);
    \u0275\u0275conditionalCreate(42, AxonComponent_Conditional_34_Conditional_42_Template, 9, 21, ":svg:g", 70);
    \u0275\u0275elementStart(43, "g", 71);
    \u0275\u0275listener("click", function AxonComponent_Conditional_34_Template_g_click_43_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeGraphCat.set(null));
    });
    \u0275\u0275element(44, "circle", 72)(45, "circle", 73)(46, "circle", 74)(47, "circle", 75)(48, "line", 76)(49, "line", 77)(50, "line", 78)(51, "line", 79)(52, "polygon", 80)(53, "circle", 81)(54, "circle", 82)(55, "circle", 83)(56, "circle", 84);
    \u0275\u0275conditionalCreate(57, AxonComponent_Conditional_34_Conditional_57_Template, 2, 0, ":svg:text", 85)(58, AxonComponent_Conditional_34_Conditional_58_Template, 4, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(59, AxonComponent_Conditional_34_Conditional_59_Template, 6, 0, "div", 86);
    \u0275\u0275conditionalCreate(60, AxonComponent_Conditional_34_Conditional_60_Template, 28, 19, "div", 87);
    \u0275\u0275conditionalCreate(61, AxonComponent_Conditional_34_Conditional_61_Template, 13, 6, "div", 88);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_15_0;
    let tmp_16_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("viewBox", "0 0 " + ctx_r2.CANVAS_W + " " + ctx_r2.CANVAS_H);
    \u0275\u0275advance(28);
    \u0275\u0275repeater(ctx_r2.bgLines);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.bgDots);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("cx", ctx_r2.axonCenter().x)("cy", ctx_r2.axonCenter().y);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.activeGraphCat() ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.activeGraphCat() ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.routeNodes());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.routeNodes());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.categoryNodes());
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_11_0 = ctx_r2.activeGraphCat()) ? 42 : -1, tmp_11_0);
    \u0275\u0275advance();
    \u0275\u0275attribute("transform", "translate(" + ctx_r2.axonCenter().x + "," + ctx_r2.axonCenter().y + ")");
    \u0275\u0275advance(14);
    \u0275\u0275conditional(!ctx_r2.activeGraphCat() ? 57 : 58);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.activeGraphCat() ? 59 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_15_0 = ctx_r2.selectedRouteGraph()) ? 60 : -1, tmp_15_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_16_0 = ctx_r2.activeGraphCat()) ? 61 : -1, tmp_16_0);
  }
}
function AxonComponent_Conditional_35_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 162);
    \u0275\u0275element(1, "kendo-loader", 165);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u05D8\u05D5\u05E2\u05DF routes...");
    \u0275\u0275elementEnd()();
  }
}
function AxonComponent_Conditional_35_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 163);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
function AxonComponent_Conditional_35_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1, "\u05D0\u05D9\u05DF routes \u05E2\u05D3\u05D9\u05D9\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\u05D4\u05D5\u05E1\u05E3 route \u05D9\u05D3\u05E0\u05D9\u05EA \u05D0\u05D5 \u05D9\u05D9\u05D1\u05D0 \u05D0\u05EA routes \u05D4\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 167);
    \u0275\u0275listener("click", function AxonComponent_Conditional_35_Conditional_3_Conditional_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.importPlatform());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Sync Platform Routes ");
    \u0275\u0275elementEnd();
  }
}
function AxonComponent_Conditional_35_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1, "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\u05E9\u05E0\u05D4 \u05D0\u05EA \u05D4\u05E4\u05D9\u05DC\u05D8\u05E8 \u05D0\u05D5 \u05E0\u05E7\u05D4 \u05D0\u05EA \u05D4\u05D7\u05D9\u05E4\u05D5\u05E9");
    \u0275\u0275elementEnd();
  }
}
function AxonComponent_Conditional_35_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 164)(1, "div", 166);
    \u0275\u0275text(2, "\u26A1");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, AxonComponent_Conditional_35_Conditional_3_Conditional_3_Template, 8, 0)(4, AxonComponent_Conditional_35_Conditional_3_Conditional_4_Template, 4, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.viewMode() === "project" ? 3 : 4);
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 182)(1, "mat-icon");
    \u0275\u0275text(2, "lock");
    \u0275\u0275elementEnd()();
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 183)(1, "mat-icon");
    \u0275\u0275text(2, "public");
    \u0275\u0275elementEnd()();
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 184)(1, "mat-icon");
    \u0275\u0275text(2, "data_object");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " SP ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r31 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", \u0275\u0275interpolate1("Stored Procedure: ", r_r31.SpName));
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 185);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r32 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r32);
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 190);
    \u0275\u0275listener("click", function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_18_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r33);
      const r_r31 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openEdit(r_r31, $event));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 191);
    \u0275\u0275listener("click", function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_18_Template_button_click_3_listener($event) {
      \u0275\u0275restoreView(_r33);
      const r_r31 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.deleteRoute(r_r31, $event));
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "delete");
    \u0275\u0275elementEnd()();
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 194)(1, "div", 202);
    \u0275\u0275text(2, "\u05EA\u05D9\u05D0\u05D5\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 203);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r31 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.getDesc(r_r31));
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_3_Conditional_5_For_15_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 208);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_3_Conditional_5_For_15_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 209);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_3_Conditional_5_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "code", 206);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 207);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275conditionalCreate(8, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_3_Conditional_5_For_15_Conditional_8_Template, 2, 0, "span", 208)(9, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_3_Conditional_5_For_15_Conditional_9_Template, 2, 0, "span", 209);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 210);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "code", 211);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r34 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r34.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r34.type);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r34.required ? 8 : 9);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r34.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r34.example);
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 204)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "\u05E9\u05DD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "\u05E1\u05D5\u05D2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "\u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "\u05EA\u05D9\u05D0\u05D5\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "\u05D3\u05D5\u05D2\u05DE\u05D4");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_3_Conditional_5_For_15_Template, 15, 5, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r31 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(14);
    \u0275\u0275repeater(r_r31.ReqSchema);
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 205);
    \u0275\u0275text(1, "\u05D0\u05D9\u05DF \u05E4\u05E8\u05DE\u05D8\u05E8\u05D9\u05DD \u05DE\u05D5\u05D2\u05D3\u05E8\u05D9\u05DD");
    \u0275\u0275elementEnd();
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 195)(1, "div", 202)(2, "mat-icon");
    \u0275\u0275text(3, "input");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u05E4\u05E8\u05DE\u05D8\u05E8\u05D9 \u05E7\u05DC\u05D8 (Request) ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_3_Conditional_5_Template, 16, 0, "table", 204)(6, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_3_Conditional_6_Template, 2, 0, "p", 205);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r31 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275conditional(r_r31.ReqSchema.length ? 5 : 6);
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_4_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 213);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pp_r35 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(":", pp_r35);
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 195)(1, "div", 202)(2, "mat-icon");
    \u0275\u0275text(3, "route");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Path Params");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 212);
    \u0275\u0275repeaterCreate(6, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_4_For_7_Template, 2, 1, "code", 213, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r31 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r2.pathParams(ctx_r2.getPath(r_r31)));
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 195)(1, "div", 202)(2, "mat-icon");
    \u0275\u0275text(3, "output");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u05DE\u05D1\u05E0\u05D4 \u05EA\u05D2\u05D5\u05D1\u05D4 (Response)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "pre", 214);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r31 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.formatBody(r_r31.ResSchema));
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 197)(1, "mat-icon");
    \u0275\u0275text(2, "data_object");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 198);
    \u0275\u0275text(4, "Stored Procedure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "code", 215);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r31 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(r_r31.SpName);
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 197)(1, "mat-icon");
    \u0275\u0275text(2, "tag");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 198);
    \u0275\u0275text(4, "Token");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "code", 216);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r31 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(r_r31.RouteToken);
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_Conditional_14_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 229)(1, "code", 230);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 231);
    \u0275\u0275listener("input", function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_Conditional_14_For_5_Template_input_input_3_listener($event) {
      const param_r38 = \u0275\u0275restoreView(_r37).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(8);
      return \u0275\u0275resetView(ctx_r2.setPathParam(param_r38, $event.target.value));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const param_r38 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(":", param_r38);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.testPathParams()[param_r38] ?? "")("placeholder", param_r38);
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 221)(1, "label");
    \u0275\u0275text(2, "Path Params");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 228);
    \u0275\u0275repeaterCreate(4, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_Conditional_14_For_5_Template, 4, 3, "div", 229, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r31 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.pathParams(ctx_r2.getPath(r_r31)));
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 225)(1, "input", 232);
    \u0275\u0275listener("input", function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_For_22_Template_input_input_1_listener($event) {
      const $index_r40 = \u0275\u0275restoreView(_r39).$index;
      const ctx_r2 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r2.setHeaderVal($index_r40, "key", $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 233);
    \u0275\u0275text(3, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 234);
    \u0275\u0275listener("input", function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_For_22_Template_input_input_4_listener($event) {
      const $index_r40 = \u0275\u0275restoreView(_r39).$index;
      const ctx_r2 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r2.setHeaderVal($index_r40, "value", $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 235);
    \u0275\u0275listener("click", function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_For_22_Template_button_click_5_listener() {
      const $index_r40 = \u0275\u0275restoreView(_r39).$index;
      const ctx_r2 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r2.removeHeader($index_r40));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const h_r41 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", h_r41.key);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", h_r41.value);
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 221)(1, "label");
    \u0275\u0275text(2, "Request Body (JSON)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 236);
    \u0275\u0275listener("input", function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_Conditional_23_Template_textarea_input_3_listener($event) {
      \u0275\u0275restoreView(_r42);
      const ctx_r2 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r2.testBody.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(7);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r2.testBody());
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-loader", 30);
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "send");
    \u0275\u0275elementEnd();
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_Conditional_28_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 240);
    \u0275\u0275text(1, "ERR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 241);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const res_r43 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(res_r43.error);
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_Conditional_28_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 242);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 243);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const res_r43 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(7);
    \u0275\u0275classMap(ctx_r2.statusClass(res_r43.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(res_r43.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", res_r43.duration, "ms");
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_Conditional_28_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 239);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const res_r43 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatBody(res_r43.body));
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 237)(1, "div", 238);
    \u0275\u0275conditionalCreate(2, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_Conditional_28_Conditional_2_Template, 4, 1)(3, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_Conditional_28_Conditional_3_Template, 4, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_Conditional_28_Conditional_4_Template, 2, 1, "pre", 239);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const res_r43 = ctx;
    \u0275\u0275classProp("res-ok", res_r43.status >= 200 && res_r43.status < 300)("res-err", res_r43.status >= 400 || res_r43.status === 0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(res_r43.error ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(res_r43.body !== null && res_r43.body !== void 0 ? 4 : -1);
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 201)(1, "div", 217)(2, "mat-icon");
    \u0275\u0275text(3, "play_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u05D1\u05D3\u05D9\u05E7\u05EA Route \u05D7\u05D9 ");
    \u0275\u0275elementStart(5, "span", 218);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "code", 219);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 220)(10, "div", 221)(11, "label");
    \u0275\u0275text(12, "Base URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 222);
    \u0275\u0275listener("input", function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_Template_input_input_13_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.testBaseUrl.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(14, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_Conditional_14_Template, 6, 0, "div", 221);
    \u0275\u0275elementStart(15, "div", 221)(16, "label");
    \u0275\u0275text(17, " Headers ");
    \u0275\u0275elementStart(18, "button", 223);
    \u0275\u0275listener("click", function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.addHeader());
    });
    \u0275\u0275text(19, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 224);
    \u0275\u0275repeaterCreate(21, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_For_22_Template, 7, 2, "div", 225, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(23, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_Conditional_23_Template, 4, 1, "div", 221);
    \u0275\u0275elementStart(24, "button", 226);
    \u0275\u0275listener("click", function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r36);
      const r_r31 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.runTest(r_r31));
    });
    \u0275\u0275conditionalCreate(25, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_Conditional_25_Template, 1, 0, "kendo-loader", 30)(26, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_Conditional_26_Template, 2, 0, "mat-icon");
    \u0275\u0275text(27, " \u05D4\u05E4\u05E2\u05DC \u05D1\u05D3\u05D9\u05E7\u05D4 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(28, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_Conditional_28_Template, 5, 6, "div", 227);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_34_0;
    const r_r31 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("background", ctx_r2.methodStyle(ctx_r2.getMethod(r_r31)).bg)("color", ctx_r2.methodStyle(ctx_r2.getMethod(r_r31)).color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getMethod(r_r31));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getPath(r_r31));
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r2.testBaseUrl());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.pathParams(ctx_r2.getPath(r_r31)).length ? 14 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r2.testHeaders());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.getMethod(r_r31) === "POST" || ctx_r2.getMethod(r_r31) === "PUT" || ctx_r2.getMethod(r_r31) === "PATCH" ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.testRunning());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.testRunning() ? 25 : 26);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_34_0 = ctx_r2.testResult()) ? 28 : -1, tmp_34_0);
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 192);
    \u0275\u0275listener("click", function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "div", 193);
    \u0275\u0275conditionalCreate(2, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_2_Template, 5, 1, "div", 194);
    \u0275\u0275conditionalCreate(3, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_3_Template, 7, 1, "div", 195);
    \u0275\u0275conditionalCreate(4, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_4_Template, 8, 0, "div", 195);
    \u0275\u0275conditionalCreate(5, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_5_Template, 7, 1, "div", 195);
    \u0275\u0275elementStart(6, "div", 196);
    \u0275\u0275conditionalCreate(7, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_7_Template, 7, 1, "div", 197);
    \u0275\u0275elementStart(8, "div", 197)(9, "mat-icon");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 198);
    \u0275\u0275text(12, "\u05D0\u05D9\u05DE\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 199);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(15, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_15_Template, 7, 1, "div", 197);
    \u0275\u0275elementStart(16, "div", 197)(17, "mat-icon");
    \u0275\u0275text(18, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 198);
    \u0275\u0275text(20, "Full Path");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "code", 200);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(23, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Conditional_23_Template, 29, 12, "div", 201);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r31 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.getDesc(r_r31) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r31.ReqSchema ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.pathParams(ctx_r2.getPath(r_r31)).length ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r31.ResSchema ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r31.SpName ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.isAuth(r_r31) ? "lock" : "lock_open");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("auth-yes", ctx_r2.isAuth(r_r31))("auth-no", !ctx_r2.isAuth(r_r31));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isAuth(r_r31) ? "JWT \u05E0\u05D3\u05E8\u05E9" : "\u05E6\u05D9\u05D1\u05D5\u05E8\u05D9", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r31.RouteToken ? 15 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.getPath(r_r31));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isTesting(r_r31) ? 23 : -1);
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 176);
    \u0275\u0275listener("click", function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Template_div_click_0_listener() {
      const r_r31 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.toggleExpand(r_r31));
    });
    \u0275\u0275elementStart(1, "div", 177)(2, "span", 178);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "code", 179);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 180);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 181);
    \u0275\u0275conditionalCreate(9, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_9_Template, 3, 0, "span", 182)(10, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_10_Template, 3, 0, "span", 183);
    \u0275\u0275conditionalCreate(11, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_11_Template, 4, 2, "span", 184);
    \u0275\u0275repeaterCreate(12, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_For_13_Template, 2, 1, "span", 185, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 186);
    \u0275\u0275listener("click", function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Template_div_click_14_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(15, "button", 187);
    \u0275\u0275listener("click", function AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Template_button_click_15_listener() {
      const r_r31 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.toggleTest(r_r31));
    });
    \u0275\u0275elementStart(16, "mat-icon");
    \u0275\u0275text(17, "play_arrow");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(18, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_18_Template, 6, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-icon", 188);
    \u0275\u0275text(20, " expand_more ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(21, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Conditional_21_Template, 24, 14, "div", 189);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r31 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("expanded", ctx_r2.isExpanded(r_r31));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r2.methodStyle(ctx_r2.getMethod(r_r31)).bg)("color", ctx_r2.methodStyle(ctx_r2.getMethod(r_r31)).color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getMethod(r_r31), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getPath(r_r31));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getTitle(r_r31));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isAuth(r_r31) ? 9 : 10);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r31.SpName ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(r_r31.Tags ?? \u0275\u0275pureFunction0(15, _c0));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.viewMode() === "project" && r_r31.RouteID ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r2.isExpanded(r_r31));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isExpanded(r_r31) ? 21 : -1);
  }
}
function AxonComponent_Conditional_35_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 168)(1, "div", 169);
    \u0275\u0275element(2, "div", 170);
    \u0275\u0275elementStart(3, "h3", 171);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 172);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 173);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 174);
    \u0275\u0275repeaterCreate(9, AxonComponent_Conditional_35_Conditional_4_For_1_For_10_Template, 22, 16, "div", 175, _forTrack3, true);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r44 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(entry_r44.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r44.value.length);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(entry_r44.value);
  }
}
function AxonComponent_Conditional_35_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AxonComponent_Conditional_35_Conditional_4_For_1_Template, 11, 2, "div", 168, _forTrack4);
    \u0275\u0275pipe(2, "keyvalue");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(2, 0, ctx_r2.filteredGrouped()));
  }
}
function AxonComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275conditionalCreate(1, AxonComponent_Conditional_35_Conditional_1_Template, 4, 0, "div", 162)(2, AxonComponent_Conditional_35_Conditional_2_Template, 2, 1, "div", 163)(3, AxonComponent_Conditional_35_Conditional_3_Template, 5, 1, "div", 164)(4, AxonComponent_Conditional_35_Conditional_4_Template, 3, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.loading() ? 1 : ctx_r2.error() ? 2 : ctx_r2.Object.keys(ctx_r2.filteredGrouped()).length === 0 ? 3 : 4);
  }
}
function AxonComponent_Conditional_36_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 246);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.dialogError());
  }
}
function AxonComponent_Conditional_36_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 270);
    \u0275\u0275listener("click", function AxonComponent_Conditional_36_For_9_Template_button_click_0_listener() {
      const m_r47 = \u0275\u0275restoreView(_r46).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.form.get("method")?.setValue(m_r47));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r47 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background", ctx_r2.form.value.method === m_r47 ? ctx_r2.methodStyle(m_r47).bg : "")("color", ctx_r2.form.value.method === m_r47 ? ctx_r2.methodStyle(m_r47).color : "");
    \u0275\u0275classProp("active", ctx_r2.form.value.method === m_r47);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r47);
  }
}
function AxonComponent_Conditional_36_Conditional_56_For_17_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 275);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r49 = ctx.$implicit;
    \u0275\u0275property("value", t_r49);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r49);
  }
}
function AxonComponent_Conditional_36_Conditional_56_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 272)(1, "td");
    \u0275\u0275element(2, "input", 273);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "select", 274);
    \u0275\u0275repeaterCreate(5, AxonComponent_Conditional_36_Conditional_56_For_17_For_6_Template, 2, 2, "option", 275, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 276);
    \u0275\u0275element(8, "input", 277);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275element(10, "input", 278);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275element(12, "input", 279);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "button", 280);
    \u0275\u0275listener("click", function AxonComponent_Conditional_36_Conditional_56_For_17_Template_button_click_14_listener() {
      const $index_r50 = \u0275\u0275restoreView(_r48).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeParam($index_r50));
    });
    \u0275\u0275text(15, "\u2715");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const $index_r50 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroupName", $index_r50);
    \u0275\u0275advance(2);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.paramTypes);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275control();
  }
}
function AxonComponent_Conditional_36_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 264)(1, "table", 271)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "\u05E9\u05DD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "\u05E1\u05D5\u05D2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "\u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "\u05EA\u05D9\u05D0\u05D5\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "\u05D3\u05D5\u05D2\u05DE\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, AxonComponent_Conditional_36_Conditional_56_For_17_Template, 16, 1, "tr", 272, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r2.reqParams.controls);
  }
}
function AxonComponent_Conditional_36_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-loader", 268);
  }
}
function AxonComponent_Conditional_36_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2713 ");
  }
}
function AxonComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "kendo-dialog", 244);
    \u0275\u0275listener("close", function AxonComponent_Conditional_36_Template_kendo_dialog_close_0_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDialog());
    });
    \u0275\u0275elementStart(1, "form", 245);
    \u0275\u0275conditionalCreate(2, AxonComponent_Conditional_36_Conditional_2_Template, 2, 1, "div", 246);
    \u0275\u0275elementStart(3, "div", 247)(4, "div", 248)(5, "label");
    \u0275\u0275text(6, "Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 249);
    \u0275\u0275repeaterCreate(8, AxonComponent_Conditional_36_For_9_Template, 2, 7, "button", 250, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 251)(11, "label");
    \u0275\u0275text(12, "Path ");
    \u0275\u0275elementStart(13, "span", 252);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "input", 253);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 247)(17, "div", 248)(18, "label");
    \u0275\u0275text(19, "\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 254);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 248)(22, "label");
    \u0275\u0275text(23, "\u05DB\u05D5\u05EA\u05E8\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 255);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 248)(26, "label");
    \u0275\u0275text(27, "\u05EA\u05D9\u05D0\u05D5\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "textarea", 256);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 247)(30, "div", 248)(31, "label");
    \u0275\u0275text(32, "Stored Procedure");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 257);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 248)(35, "label");
    \u0275\u0275text(36, "\u05D0\u05D9\u05DE\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 258)(38, "button", 259);
    \u0275\u0275listener("click", function AxonComponent_Conditional_36_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.get("authRequired")?.setValue(true));
    });
    \u0275\u0275text(39, "\u{1F512} \u05DE\u05D5\u05D2\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 259);
    \u0275\u0275listener("click", function AxonComponent_Conditional_36_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.get("authRequired")?.setValue(false));
    });
    \u0275\u0275text(41, "\u{1F310} \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(42, "div", 248)(43, "label");
    \u0275\u0275text(44, "\u05EA\u05D2\u05D9\u05D5\u05EA (\u05DE\u05D5\u05E4\u05E8\u05D3\u05D5\u05EA \u05D1\u05E4\u05E1\u05D9\u05E7)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 260);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 261)(47, "div", 262)(48, "mat-icon");
    \u0275\u0275text(49, "input");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span");
    \u0275\u0275text(51, "\u05E4\u05E8\u05DE\u05D8\u05E8\u05D9 \u05E7\u05DC\u05D8 (Request)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 263);
    \u0275\u0275listener("click", function AxonComponent_Conditional_36_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addParam());
    });
    \u0275\u0275elementStart(53, "mat-icon");
    \u0275\u0275text(54, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, " \u05D4\u05D5\u05E1\u05E3 \u05E4\u05E8\u05DE\u05D8\u05E8 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(56, AxonComponent_Conditional_36_Conditional_56_Template, 18, 0, "div", 264);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 248)(58, "label")(59, "mat-icon");
    \u0275\u0275text(60, "output");
    \u0275\u0275elementEnd();
    \u0275\u0275text(61, " \u05DE\u05D1\u05E0\u05D4 \u05EA\u05D2\u05D5\u05D1\u05D4 (JSON)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "textarea", 265);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "kendo-dialog-actions")(64, "div", 266)(65, "button", 267);
    \u0275\u0275listener("click", function AxonComponent_Conditional_36_Template_button_click_65_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275conditionalCreate(66, AxonComponent_Conditional_36_Conditional_66_Template, 1, 0, "kendo-loader", 268)(67, AxonComponent_Conditional_36_Conditional_67_Template, 1, 0);
    \u0275\u0275text(68, " \u05E9\u05DE\u05D5\u05E8 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "button", 269);
    \u0275\u0275listener("click", function AxonComponent_Conditional_36_Template_button_click_69_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDialog());
    });
    \u0275\u0275text(70, "\u05D1\u05D9\u05D8\u05D5\u05DC");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r2.editRoute() ? "\u05E2\u05E8\u05D9\u05DB\u05EA Route" : "Route \u05D7\u05D3\u05E9")("width", 700)("minWidth", 500);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.dialogError() ? 2 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r2.methods);
    \u0275\u0275advance(7);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275classProp("seg-on", ctx_r2.form.get("authRequired")?.value);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg-off", !ctx_r2.form.get("authRequired")?.value);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r2.reqParams.length ? 56 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.saving() ? 66 : 67);
  }
}
var METHOD_COLORS = {
  GET: { bg: "#d1fae5", color: "#065f46" },
  POST: { bg: "#dbeafe", color: "#1e40af" },
  PUT: { bg: "#fef3c7", color: "#92400e" },
  DELETE: { bg: "#fee2e2", color: "#991b1b" },
  PATCH: { bg: "#ede9fe", color: "#5b21b6" }
};
var PARAM_TYPES = ["string", "number", "boolean", "object", "array", "date"];
var AxonComponent = class _AxonComponent {
  route;
  router;
  http;
  fb;
  projectId = 0;
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
  // ── View mode ─────────────────────────────────────────────
  viewMode = signal(
    "platform",
    ...ngDevMode ? [{ debugName: "viewMode" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // ── Project routes ────────────────────────────────────────
  routes = signal(
    [],
    ...ngDevMode ? [{ debugName: "routes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  stats = signal(
    null,
    ...ngDevMode ? [{ debugName: "stats" }] : (
      /* istanbul ignore next */
      []
    )
  );
  grouped = signal(
    {},
    ...ngDevMode ? [{ debugName: "grouped" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // ── Platform routes ───────────────────────────────────────
  platformRoutes = signal(
    [],
    ...ngDevMode ? [{ debugName: "platformRoutes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  platformGrouped = signal(
    {},
    ...ngDevMode ? [{ debugName: "platformGrouped" }] : (
      /* istanbul ignore next */
      []
    )
  );
  platformStats = signal(
    null,
    ...ngDevMode ? [{ debugName: "platformStats" }] : (
      /* istanbul ignore next */
      []
    )
  );
  searchText = signal(
    "",
    ...ngDevMode ? [{ debugName: "searchText" }] : (
      /* istanbul ignore next */
      []
    )
  );
  activeCategory = signal(
    null,
    ...ngDevMode ? [{ debugName: "activeCategory" }] : (
      /* istanbul ignore next */
      []
    )
  );
  expandedRoute = signal(
    null,
    ...ngDevMode ? [{ debugName: "expandedRoute" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // key = "method:path"
  testingRoute = signal(
    null,
    ...ngDevMode ? [{ debugName: "testingRoute" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Import
  importing = signal(
    false,
    ...ngDevMode ? [{ debugName: "importing" }] : (
      /* istanbul ignore next */
      []
    )
  );
  importResult = signal(
    null,
    ...ngDevMode ? [{ debugName: "importResult" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Dialog
  dialogOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "dialogOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editRoute = signal(
    null,
    ...ngDevMode ? [{ debugName: "editRoute" }] : (
      /* istanbul ignore next */
      []
    )
  );
  saving = signal(
    false,
    ...ngDevMode ? [{ debugName: "saving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  dialogError = signal(
    "",
    ...ngDevMode ? [{ debugName: "dialogError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form;
  // Test panel
  testBaseUrl = signal(
    "http://localhost:3000",
    ...ngDevMode ? [{ debugName: "testBaseUrl" }] : (
      /* istanbul ignore next */
      []
    )
  );
  testPathParams = signal(
    {},
    ...ngDevMode ? [{ debugName: "testPathParams" }] : (
      /* istanbul ignore next */
      []
    )
  );
  testHeaders = signal(
    [],
    ...ngDevMode ? [{ debugName: "testHeaders" }] : (
      /* istanbul ignore next */
      []
    )
  );
  testBody = signal(
    "",
    ...ngDevMode ? [{ debugName: "testBody" }] : (
      /* istanbul ignore next */
      []
    )
  );
  testRunning = signal(
    false,
    ...ngDevMode ? [{ debugName: "testRunning" }] : (
      /* istanbul ignore next */
      []
    )
  );
  testResult = signal(
    null,
    ...ngDevMode ? [{ debugName: "testResult" }] : (
      /* istanbul ignore next */
      []
    )
  );
  Object = Object;
  methods = ["GET", "POST", "PUT", "DELETE", "PATCH"];
  paramTypes = PARAM_TYPES;
  methodColors = METHOD_COLORS;
  // ── Display type: list vs graph ───────────────────────────
  displayType = signal(
    "list",
    ...ngDevMode ? [{ debugName: "displayType" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // ── Graph state ───────────────────────────────────────────
  activeGraphCat = signal(
    null,
    ...ngDevMode ? [{ debugName: "activeGraphCat" }] : (
      /* istanbul ignore next */
      []
    )
  );
  hoveredGraphCat = signal(
    null,
    ...ngDevMode ? [{ debugName: "hoveredGraphCat" }] : (
      /* istanbul ignore next */
      []
    )
  );
  hoveredRoute = signal(
    null,
    ...ngDevMode ? [{ debugName: "hoveredRoute" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedRouteGraph = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedRouteGraph" }] : (
      /* istanbul ignore next */
      []
    )
  );
  CANVAS_W = 1440;
  CANVAS_H = 820;
  CENTER_X = 900;
  // AXON positioned right-of-center to leave room for panel+ring on left
  CENTER_Y = 400;
  CAT_R = 260;
  // When a category is expanded: AXON shifts further right, ring opens on the left
  AXON_SHIFT_X = 200;
  // px AXON moves right when expanded
  EXP_CAT_X = 500;
  // expanded category circle center x
  EXP_CAT_Y = 400;
  expandedCatCenter = { x: 500, y: 400 };
  // Dynamic AXON position — shifts right when category is active
  axonCenter = computed(
    () => ({
      x: this.activeGraphCat() ? this.CENTER_X + this.AXON_SHIFT_X : this.CENTER_X,
      y: this.CENTER_Y
    }),
    ...ngDevMode ? [{ debugName: "axonCenter" }] : (
      /* istanbul ignore next */
      []
    )
  );
  CAT_COLORS = {
    "Auth": "#ef4444",
    "Users": "#3b82f6",
    "Tenants": "#8b5cf6",
    "Customers": "#06b6d4",
    "Catalog": "#f59e0b",
    "RBAC": "#a855f7",
    "Organization": "#0891b2",
    "Projects": "#059669",
    "Connectors": "#1d4ed8",
    "Settings": "#64748b",
    "System": "#94a3b8",
    "AI": "#6366f1",
    "FLOWSPACE": "#10b981"
  };
  // Background neural dots (deterministic pseudorandom)
  bgDots = Array.from({ length: 55 }, (_, i) => ({
    x: (i * 347 + 113) % 1440,
    y: (i * 251 + 71) % 820,
    r: 1 + i % 3 * 0.6,
    op: 0.08 + i % 5 * 0.025
  }));
  bgLines = (() => {
    const dots = Array.from({ length: 55 }, (_, i) => ({
      x: (i * 347 + 113) % 1440,
      y: (i * 251 + 71) % 820
    }));
    const lines = [];
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y;
        if (Math.sqrt(dx * dx + dy * dy) < 160) {
          lines.push({ x1: dots[i].x, y1: dots[i].y, x2: dots[j].x, y2: dots[j].y });
        }
      }
    }
    return lines.slice(0, 60);
  })();
  categoryNodes = computed(
    () => {
      const cats = Object.keys(this.activeGrouped());
      const center = this.axonCenter();
      const active = this.activeGraphCat();
      return cats.map((cat, i) => {
        const angle = i / cats.length * 2 * Math.PI - Math.PI / 2;
        return {
          id: cat,
          x: center.x + Math.cos(angle) * this.CAT_R,
          y: center.y + Math.sin(angle) * this.CAT_R,
          angle,
          count: (this.activeGrouped()[cat] ?? []).length,
          color: this.CAT_COLORS[cat] ?? "#64748b",
          active: active === cat,
          hovered: this.hoveredGraphCat() === cat,
          hidden: active !== null
          // hide all ring nodes while any cat is expanded
        };
      });
    },
    ...ngDevMode ? [{ debugName: "categoryNodes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  routeNodes = computed(
    () => {
      const cat = this.activeGraphCat();
      if (!cat)
        return [];
      const allRoutes = this.activeGrouped()[cat] ?? [];
      const MAX_DISPLAY = 24;
      const routes = allRoutes.slice(0, MAX_DISPLAY);
      const total = routes.length;
      if (total === 0)
        return [];
      const center = this.expandedCatCenter;
      const nodeD = 38;
      const dynR = Math.max(140, Math.ceil(nodeD * total / (2 * Math.PI)));
      const selKey = this.selectedRouteGraph() ? this.routeKey(this.selectedRouteGraph()) : null;
      return routes.map((r, i) => {
        const angle = i / total * 2 * Math.PI - Math.PI / 2;
        const m = this.getMethod(r);
        const style = this.methodStyle(m);
        const key = this.routeKey(r);
        return {
          id: key,
          route: r,
          x: center.x + Math.cos(angle) * dynR,
          y: center.y + Math.sin(angle) * dynR,
          catX: center.x,
          catY: center.y,
          method: m,
          path: this.getPath(r),
          title: this.getTitle(r),
          bg: style.bg,
          fg: style.color,
          hovered: this.hoveredRoute() === key,
          selected: selKey === key,
          isLast: i === total - 1 && allRoutes.length > MAX_DISPLAY,
          extraCount: allRoutes.length - MAX_DISPLAY
        };
      });
    },
    ...ngDevMode ? [{ debugName: "routeNodes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  toggleGraphCat(cat) {
    this.activeGraphCat.set(this.activeGraphCat() === cat ? null : cat);
    this.selectedRouteGraph.set(null);
  }
  selectRouteInGraph(r) {
    this.selectedRouteGraph.set(this.selectedRouteGraph() === r ? null : r);
  }
  openInspectorTest(r) {
    this.setDisplayType("list");
    const cat = this.getCategory(r);
    this.activeCategory.set(cat);
    const key = this.routeKey(r);
    this.expandedRoute.set(key);
    this.testingRoute.set(key);
    this.initTestParams(r);
  }
  // ── Schema tree ───────────────────────────────────────
  schemaNodes = computed(
    () => {
      const route = this.selectedRouteGraph();
      if (!route?.ResSchema)
        return [];
      const schema = route.ResSchema;
      if (typeof schema !== "object" || !schema)
        return [];
      const nodes = [];
      for (const [key, val] of Object.entries(schema)) {
        nodes.push(...this.flattenToNodes(val, 0, key));
      }
      return nodes;
    },
    ...ngDevMode ? [{ debugName: "schemaNodes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  flattenToNodes(val, depth, key) {
    const nodes = [];
    if (val === null || val === void 0) {
      nodes.push({ key, depth, typeName: "null", typeColor: "#94a3b8", preview: "null", isContainer: false });
    } else if (Array.isArray(val)) {
      nodes.push({ key, depth, typeName: `array[${val.length}]`, typeColor: "#f59e0b", preview: "", isContainer: true });
      if (val.length > 0 && val[0] !== null && typeof val[0] === "object") {
        for (const [k, v] of Object.entries(val[0])) {
          nodes.push(...this.flattenToNodes(v, depth + 1, k));
        }
      }
    } else if (typeof val === "object") {
      const count = Object.keys(val).length;
      nodes.push({ key, depth, typeName: "object", typeColor: "#8b5cf6", preview: `{${count}}`, isContainer: true });
      for (const [k, v] of Object.entries(val)) {
        nodes.push(...this.flattenToNodes(v, depth + 1, k));
      }
    } else if (typeof val === "string") {
      const p = val.length > 22 ? `"${val.slice(0, 22)}\u2026"` : `"${val}"`;
      nodes.push({ key, depth, typeName: "string", typeColor: "#10b981", preview: p, isContainer: false });
    } else if (typeof val === "number") {
      nodes.push({ key, depth, typeName: "number", typeColor: "#3b82f6", preview: String(val), isContainer: false });
    } else if (typeof val === "boolean") {
      nodes.push({ key, depth, typeName: "boolean", typeColor: "#a855f7", preview: String(val), isContainer: false });
    } else {
      nodes.push({ key, depth, typeName: typeof val, typeColor: "#64748b", preview: String(val), isContainer: false });
    }
    return nodes;
  }
  getSchemaTypeColor(typeName) {
    const colors = {
      string: "#10b981",
      number: "#3b82f6",
      boolean: "#a855f7",
      object: "#8b5cf6",
      array: "#f59e0b",
      null: "#94a3b8",
      date: "#f97316"
    };
    return colors[typeName] ?? "#64748b";
  }
  setDisplayType(t) {
    this.displayType.set(t);
    if (t === "graph") {
      this.activeGraphCat.set(null);
    }
  }
  // ── computed: active data based on mode ───────────────────
  activeGrouped = computed(
    () => this.viewMode() === "platform" ? this.platformGrouped() : this.grouped(),
    ...ngDevMode ? [{ debugName: "activeGrouped" }] : (
      /* istanbul ignore next */
      []
    )
  );
  activeStats = computed(
    () => this.viewMode() === "platform" ? this.platformStats() : this.stats(),
    ...ngDevMode ? [{ debugName: "activeStats" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filteredGrouped = computed(
    () => {
      const q = this.searchText().toLowerCase();
      const cat = this.activeCategory();
      const all = this.activeGrouped();
      const result = {};
      for (const [c, rows] of Object.entries(all)) {
        if (cat && cat !== c)
          continue;
        const filtered = q ? rows.filter((r) => {
          const path = (r.Path || r.path || "").toLowerCase();
          const title = (r.Title || r.title || "").toLowerCase();
          const meth = (r.Method || r.method || "").toLowerCase();
          return path.includes(q) || title.includes(q) || meth.includes(q);
        }) : rows;
        if (filtered.length)
          result[c] = filtered;
      }
      return result;
    },
    ...ngDevMode ? [{ debugName: "filteredGrouped" }] : (
      /* istanbul ignore next */
      []
    )
  );
  categories = computed(
    () => Object.keys(this.activeGrouped()),
    ...ngDevMode ? [{ debugName: "categories" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor(route, router, http, fb) {
    this.route = route;
    this.router = router;
    this.http = http;
    this.fb = fb;
  }
  ngOnInit() {
    this.projectId = Number(this.route.snapshot.paramMap.get("projectId"));
    this.buildForm();
    this.loadPlatform();
    this.load();
  }
  // ── Load platform routes (always) ─────────────────────────
  loadPlatform() {
    this.http.get("/api/axon/platform-routes").subscribe({
      next: (r) => {
        this.platformRoutes.set(r.data.routes ?? []);
        this.platformGrouped.set(r.data.grouped ?? {});
        this.platformStats.set(r.data.stats ?? null);
        if (this.viewMode() === "platform")
          this.loading.set(false);
      },
      error: () => {
        if (this.viewMode() === "platform") {
          this.error.set("\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D8\u05E2\u05D9\u05E0\u05EA routes");
          this.loading.set(false);
        }
      }
    });
  }
  load() {
    if (this.viewMode() === "platform") {
      this.loading.set(false);
      return;
    }
    this.loading.set(true);
    this.error.set("");
    this.http.get(`/api/axon/routes?projectId=${this.projectId}`).subscribe({
      next: (r) => {
        this.routes.set(r.data.routes ?? []);
        this.grouped.set(r.data.grouped ?? {});
        this.loading.set(false);
      },
      error: () => {
        this.error.set("\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D8\u05E2\u05D9\u05E0\u05EA routes");
        this.loading.set(false);
      }
    });
    this.http.get(`/api/axon/stats?projectId=${this.projectId}`).subscribe({
      next: (r) => this.stats.set(r.data)
    });
  }
  setMode(m) {
    this.viewMode.set(m);
    this.activeCategory.set(null);
    this.searchText.set("");
    this.expandedRoute.set(null);
    this.testingRoute.set(null);
    this.error.set("");
    if (m === "project") {
      this.loading.set(true);
      this.load();
    }
  }
  // ── Import platform → project ─────────────────────────────
  importPlatform() {
    this.importing.set(true);
    this.importResult.set(null);
    this.http.post("/api/axon/import-platform", { projectId: this.projectId }).subscribe({
      next: (r) => {
        this.importing.set(false);
        this.importResult.set(r.data);
        this.load();
        setTimeout(() => this.importResult.set(null), 5e3);
      },
      error: () => {
        this.importing.set(false);
      }
    });
  }
  // ── Route key (unique identifier for platform routes) ─────
  routeKey(r) {
    return `${r.Method ?? r.method}:${r.Path ?? r.path}`;
  }
  // ── Expand / collapse ─────────────────────────────────────
  toggleExpand(r) {
    const k = this.routeKey(r);
    this.expandedRoute.set(this.expandedRoute() === k ? null : k);
    if (this.expandedRoute() !== k)
      this.testingRoute.set(null);
  }
  toggleTest(r) {
    const k = this.routeKey(r);
    if (this.testingRoute() === k) {
      this.testingRoute.set(null);
    } else {
      this.testingRoute.set(k);
      this.testResult.set(null);
      this.initTestParams(r);
    }
  }
  isExpanded(r) {
    return this.expandedRoute() === this.routeKey(r);
  }
  isTesting(r) {
    return this.testingRoute() === this.routeKey(r);
  }
  initTestParams(r) {
    const path = r.Path ?? r.path ?? "";
    const pathParams = {};
    const matches = path.matchAll(/:(\w+)/g);
    for (const m of matches)
      pathParams[m[1]] = "";
    this.testPathParams.set(pathParams);
    const method = (r.Method ?? r.method ?? "GET").toUpperCase();
    this.testBody.set(method !== "GET" && method !== "DELETE" ? "{}" : "");
    this.testHeaders.set([{ key: "Authorization", value: "Bearer " }]);
  }
  setPathParam(key, val) {
    this.testPathParams.update((p) => __spreadProps(__spreadValues({}, p), { [key]: val }));
  }
  setHeaderVal(i, field, val) {
    this.testHeaders.update((h) => {
      const n = [...h];
      n[i] = __spreadProps(__spreadValues({}, n[i]), { [field]: val });
      return n;
    });
  }
  addHeader() {
    this.testHeaders.update((h) => [...h, { key: "", value: "" }]);
  }
  removeHeader(i) {
    this.testHeaders.update((h) => h.filter((_, j) => j !== i));
  }
  runTest(r) {
    const params = this.testPathParams();
    const headers = {};
    for (const h of this.testHeaders())
      if (h.key)
        headers[h.key] = h.value;
    let body = null;
    if (this.testBody())
      try {
        body = JSON.parse(this.testBody());
      } catch {
      }
    this.testRunning.set(true);
    this.testResult.set(null);
    if (r.RouteID) {
      this.http.post(`/api/axon/routes/${r.RouteID}/test`, {
        baseUrl: this.testBaseUrl(),
        params,
        headers,
        body
      }).subscribe({
        next: (resp) => {
          this.testRunning.set(false);
          this.testResult.set(resp.data);
        },
        error: (err) => {
          this.testRunning.set(false);
          this.testResult.set({ status: 0, duration: 0, body: null, error: err.error?.message ?? "\u05E9\u05D2\u05D9\u05D0\u05D4" });
        }
      });
    } else {
      const path = r.Path ?? r.path ?? "";
      const method = (r.Method ?? r.method ?? "GET").toUpperCase();
      let resolvedPath = path;
      for (const [k, v] of Object.entries(params)) {
        resolvedPath = resolvedPath.replace(`:${k}`, encodeURIComponent(v));
      }
      const start = Date.now();
      const baseUrl = this.testBaseUrl().replace(/\/$/, "");
      const reqObs = method === "GET" || method === "DELETE" ? this.http.request(method, baseUrl + resolvedPath, { headers }) : this.http.request(method, baseUrl + resolvedPath, { headers, body });
      reqObs.subscribe({
        next: (resp) => {
          this.testRunning.set(false);
          this.testResult.set({ status: 200, duration: Date.now() - start, body: resp });
        },
        error: (err) => {
          this.testRunning.set(false);
          this.testResult.set({
            status: err.status ?? 0,
            duration: Date.now() - start,
            body: err.error,
            error: err.message
          });
        }
      });
    }
  }
  // ── Dialog ────────────────────────────────────────────────
  buildForm(r) {
    const cat = r?.Category ?? r?.category ?? "\u05DB\u05DC\u05DC\u05D9";
    const meth = r?.Method ?? r?.method ?? "GET";
    const path = r?.Path ?? r?.path ?? "/";
    this.form = this.fb.group({
      category: [cat, Validators.required],
      method: [meth, Validators.required],
      path: [path, Validators.required],
      title: [r?.Title ?? r?.title ?? ""],
      description: [r?.Description ?? r?.description ?? ""],
      spName: [r?.SpName ?? ""],
      authRequired: [r?.AuthRequired ?? r?.authRequired ?? true],
      tags: [Array.isArray(r?.Tags) ? r.Tags.join(", ") : ""],
      resSchema: [r?.ResSchema ? JSON.stringify(r.ResSchema, null, 2) : ""],
      reqParams: this.fb.array((r?.ReqSchema ?? []).map((p) => this.fb.group({
        name: [p.name, Validators.required],
        type: [p.type ?? "string"],
        required: [p.required ?? false],
        description: [p.description ?? ""],
        example: [p.example ?? ""]
      })))
    });
  }
  get reqParams() {
    return this.form.get("reqParams");
  }
  addParam() {
    this.reqParams.push(this.fb.group({
      name: ["", Validators.required],
      type: ["string"],
      required: [false],
      description: [""],
      example: [""]
    }));
  }
  removeParam(i) {
    this.reqParams.removeAt(i);
  }
  openNew() {
    this.editRoute.set(null);
    this.buildForm();
    this.dialogError.set("");
    this.dialogOpen.set(true);
  }
  openEdit(r, e) {
    e.stopPropagation();
    this.editRoute.set(r);
    this.buildForm(r);
    this.dialogError.set("");
    this.dialogOpen.set(true);
  }
  closeDialog() {
    this.dialogOpen.set(false);
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.value;
    const payload = {
      projectId: this.projectId,
      category: v.category,
      method: v.method,
      path: v.path,
      title: v.title,
      description: v.description,
      spName: v.spName || null,
      authRequired: v.authRequired,
      tags: v.tags ? v.tags.split(",").map((t) => t.trim()).filter(Boolean) : [],
      reqSchema: v.reqParams.length ? v.reqParams : null,
      resSchema: v.resSchema ? (() => {
        try {
          return JSON.parse(v.resSchema);
        } catch {
          return v.resSchema;
        }
      })() : null
    };
    this.saving.set(true);
    this.dialogError.set("");
    const edit = this.editRoute();
    const req = edit?.RouteID ? this.http.put(`/api/axon/routes/${edit.RouteID}`, payload) : this.http.post("/api/axon/routes", payload);
    req.subscribe({
      next: () => {
        this.saving.set(false);
        this.closeDialog();
        this.load();
      },
      error: (err) => {
        this.saving.set(false);
        this.dialogError.set(err.error?.message ?? "\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05E9\u05DE\u05D9\u05E8\u05D4");
      }
    });
  }
  deleteRoute(r, e) {
    e.stopPropagation();
    if (!r.RouteID)
      return;
    if (!confirm(`\u05DC\u05DE\u05D7\u05D5\u05E7 \u05D0\u05EA \u05D4-route ${r.Method ?? r.method} ${r.Path ?? r.path}?`))
      return;
    this.http.delete(`/api/axon/routes/${r.RouteID}`).subscribe({
      next: () => this.load()
    });
  }
  // ── Helpers ───────────────────────────────────────────────
  methodStyle(m) {
    return this.methodColors[m.toUpperCase()] ?? { bg: "#f1f5f9", color: "#64748b" };
  }
  statusClass(s) {
    if (s >= 200 && s < 300)
      return "status-ok";
    if (s >= 400 && s < 500)
      return "status-warn";
    if (s >= 500)
      return "status-err";
    return "status-none";
  }
  pathParams(path) {
    return [...path.matchAll(/:(\w+)/g)].map((m) => m[1]);
  }
  formatBody(body) {
    if (!body)
      return "\u2014";
    try {
      return JSON.stringify(body, null, 2);
    } catch {
      return String(body);
    }
  }
  getCategory(r) {
    return r.Category ?? r.category ?? "";
  }
  getMethod(r) {
    return (r.Method ?? r.method ?? "GET").toUpperCase();
  }
  getPath(r) {
    return r.Path ?? r.path ?? "";
  }
  getTitle(r) {
    return r.Title ?? r.title ?? "";
  }
  getDesc(r) {
    return r.Description ?? r.description ?? "";
  }
  isAuth(r) {
    return !!(r.AuthRequired ?? r.authRequired);
  }
  back() {
    this.router.navigate(["/app/projects", this.projectId]);
  }
  static \u0275fac = function AxonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AxonComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AxonComponent, selectors: [["app-axon"]], decls: 37, vars: 13, consts: [[1, "axon-root"], [1, "axon-toolbar"], [1, "back-btn", 3, "click"], [1, "axon-brand"], [1, "brand-tag"], [1, "brand-sub"], [1, "mode-toggle"], [1, "mode-btn", 3, "click"], [1, "stats-bar"], [1, "display-toggle"], ["title", "\u05DE\u05E6\u05D1 \u05E8\u05E9\u05D9\u05DE\u05D4", 1, "disp-btn", 3, "click"], ["title", "\u05DE\u05E6\u05D1 \u05D2\u05E8\u05E3 \u05E0\u05D5\u05D9\u05E8\u05D5\u05E0\u05D9\u05DD", 1, "disp-btn", 3, "click"], [1, "axon-logo-wrap"], ["src", "/assets/axon-logo.svg", "alt", "AXON", 1, "axon-logo"], [1, "toolbar-end"], [1, "axon-controls"], [1, "neural-wrap"], [1, "axon-body"], [3, "title", "width", "minWidth"], [1, "stat-chip", "chip-total"], [1, "chip-num"], [1, "chip-lbl"], [1, "stat-chip", "chip-get"], [1, "stat-chip", "chip-post"], [1, "stat-chip", "chip-put"], [1, "stat-chip", "chip-delete"], [1, "stat-chip", "chip-patch"], [1, "stat-chip", "chip-sec"], [1, "stat-chip", "chip-pub"], ["title", "\u05D9\u05D9\u05D1\u05D0 \u05D0\u05EA \u05DB\u05DC routes \u05D4\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4 \u05DC\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8", 1, "btn-import", 3, "click", "disabled"], ["type", "pulsing", "size", "small", "themeColor", "primary"], [1, "import-toast"], [1, "btn-new-route", 3, "click"], [1, "search-wrap"], [1, "search-icon"], ["type", "text", "placeholder", "\u05D7\u05D9\u05E4\u05D5\u05E9 route, path, method...", 1, "search-input", 3, "input", "value"], [1, "cat-pills"], [1, "cat-pill", 3, "click"], [1, "cat-pill", 3, "active"], ["preserveAspectRatio", "xMidYMid meet", 1, "neural-svg"], ["id", "arr-green", "markerWidth", "7", "markerHeight", "7", "refX", "5", "refY", "3.5", "orient", "auto"], ["d", "M0,0 L0,7 L7,3.5 z", "fill", "#10b981", "opacity", "0.8"], ["id", "arr-get", "markerWidth", "7", "markerHeight", "7", "refX", "5", "refY", "3.5", "orient", "auto"], ["d", "M0,0 L0,7 L7,3.5 z", "fill", "#065f46", "opacity", "0.9"], ["id", "arr-post", "markerWidth", "7", "markerHeight", "7", "refX", "5", "refY", "3.5", "orient", "auto"], ["d", "M0,0 L0,7 L7,3.5 z", "fill", "#1e40af", "opacity", "0.9"], ["id", "arr-put", "markerWidth", "7", "markerHeight", "7", "refX", "5", "refY", "3.5", "orient", "auto"], ["d", "M0,0 L0,7 L7,3.5 z", "fill", "#92400e", "opacity", "0.9"], ["id", "arr-delete", "markerWidth", "7", "markerHeight", "7", "refX", "5", "refY", "3.5", "orient", "auto"], ["d", "M0,0 L0,7 L7,3.5 z", "fill", "#991b1b", "opacity", "0.9"], ["id", "arr-patch", "markerWidth", "7", "markerHeight", "7", "refX", "5", "refY", "3.5", "orient", "auto"], ["d", "M0,0 L0,7 L7,3.5 z", "fill", "#5b21b6", "opacity", "0.9"], ["id", "glow-green", "x", "-50%", "y", "-50%", "width", "200%", "height", "200%"], ["stdDeviation", "6", "result", "coloredBlur"], ["in", "coloredBlur"], ["in", "SourceGraphic"], ["id", "glow-sm", "x", "-30%", "y", "-30%", "width", "160%", "height", "160%"], ["stdDeviation", "3", "result", "blur"], ["in", "blur"], ["id", "center-glow", "cx", "50%", "cy", "50%", "r", "50%"], ["offset", "0%", "stop-color", "#059669", "stop-opacity", "0.25"], ["offset", "100%", "stop-color", "#059669", "stop-opacity", "0"], ["width", "100%", "height", "100%", "fill", "#060f0a"], ["stroke", "#1a3328", "stroke-width", "0.7", "opacity", "0.6"], ["fill", "#2d5a3d"], ["r", "180", "fill", "url(#center-glow)"], ["stroke-width", "1.5", "stroke-dasharray", "8 5", "opacity", "0.45", "marker-end", "url(#arr-green)"], ["stroke-width", "1", "stroke-dasharray", "3 3"], [1, "route-node", 2, "cursor", "pointer"], [1, "cat-graph-node", 2, "cursor", "pointer", 3, "pointer-events"], [1, "expanded-cat-group"], [1, "axon-center-group", 2, "cursor", "pointer", 3, "click"], ["cx", "0", "cy", "0", "r", "68", "fill", "none", "stroke", "#059669", "stroke-width", "1", "opacity", "0.2", 1, "center-ring-slow"], ["cx", "0", "cy", "0", "r", "55", "fill", "none", "stroke", "#10b981", "stroke-width", "1.5", "opacity", "0.3", 1, "center-ring-fast"], ["cx", "0", "cy", "0", "r", "44", "fill", "#071510", "stroke", "#059669", "stroke-width", "2.5", "filter", "url(#glow-green)"], ["cx", "0", "cy", "0", "r", "38", "fill", "#059669", "fill-opacity", "0.12"], ["x1", "0", "y1", "-6", "x2", "0", "y2", "-20", "stroke", "#10b981", "stroke-width", "1.8", "stroke-linecap", "round"], ["x1", "0", "y1", "6", "x2", "0", "y2", "20", "stroke", "#10b981", "stroke-width", "1.8", "stroke-linecap", "round"], ["x1", "-6", "y1", "0", "x2", "-20", "y2", "0", "stroke", "#10b981", "stroke-width", "1.8", "stroke-linecap", "round"], ["x1", "6", "y1", "0", "x2", "20", "y2", "0", "stroke", "#10b981", "stroke-width", "1.8", "stroke-linecap", "round"], ["points", "0,-6 6,0 0,6 -6,0", "fill", "#059669"], ["cx", "0", "cy", "-20", "r", "3.5", "fill", "#10b981"], ["cx", "0", "cy", "20", "r", "3.5", "fill", "#10b981"], ["cx", "-20", "cy", "0", "r", "3.5", "fill", "#059669"], ["cx", "20", "cy", "0", "r", "3.5", "fill", "#059669"], ["x", "0", "y", "36", "text-anchor", "middle", "font-family", "'Segoe UI', sans-serif", "font-size", "10", "font-weight", "800", "letter-spacing", "3", "fill", "#10b981"], [1, "graph-legend"], [1, "route-inspector"], [1, "routes-float-panel"], ["stroke-dasharray", "5 4", "marker-end", "url(#arr-green)"], [1, "route-node", 2, "cursor", "pointer", 3, "mouseenter", "mouseleave", "click"], ["r", "26", "opacity", "0.15", "filter", "url(#glow-sm)"], ["r", "15"], ["text-anchor", "middle", "font-family", "monospace", "font-size", "9", "font-weight", "800"], ["r", "24", "stroke-width", "1.5", "fill", "none", "opacity", "0.55", 1, "selected-route-ring"], ["r", "30", "stroke-width", "0.8", "fill", "none", "opacity", "0.2"], ["width", "176", "height", "22", "rx", "11", "fill", "#061810", "stroke", "#1a4a2e", "stroke-width", "1"], ["text-anchor", "middle", "font-family", "monospace", "font-size", "8.5", "font-weight", "700", "fill", "#10b981"], ["font-family", "monospace", "font-size", "8", "fill", "#6ee7b7"], ["width", "164", "height", "18", "rx", "9", "fill", "#061810", "stroke", "#1a4a2e", "stroke-width", "1", "opacity", "0.95"], ["text-anchor", "middle", "font-family", "'Segoe UI', sans-serif", "font-size", "7.5", "fill", "#4ade80"], ["width", "52", "height", "16", "rx", "8", "fill", "#1e3a2f", "stroke", "#4ade80", "stroke-width", "1"], ["text-anchor", "middle", "font-family", "monospace", "font-size", "7.5", "font-weight", "700", "fill", "#4ade80"], [1, "cat-graph-node", 2, "cursor", "pointer", 3, "mouseenter", "mouseleave", "click"], ["r", "38"], ["text-anchor", "middle", "font-family", "'Segoe UI', sans-serif", "font-weight", "700"], ["text-anchor", "middle", "font-family", "monospace", "font-size", "9", "fill", "#4b7a63"], ["r", "92", "stroke-width", "1", "fill", "none", 1, "exp-ring-outer"], ["r", "76", "stroke-width", "1.5", "fill", "none", 1, "exp-ring-inner"], ["r", "60", "fill", "#071510", "stroke-width", "2.5", "filter", "url(#glow-sm)"], ["r", "52", "fill-opacity", "0.1"], ["text-anchor", "middle", "font-family", "'Segoe UI', sans-serif", "font-weight", "800"], ["text-anchor", "middle", "font-family", "monospace", "font-size", "10", "fill", "#6ee7b7"], ["x", "0", "y", "62", "text-anchor", "middle", "font-family", "'Segoe UI', sans-serif", "font-size", "8.5", "fill", "#4b7a63"], [1, "legend-hint"], [1, "legend-methods"], [1, "legend-m", 3, "background", "color"], [1, "legend-m"], [1, "insp-header"], [1, "insp-method"], [1, "insp-path"], [1, "insp-close", 3, "click"], [1, "insp-body"], [1, "insp-title"], [1, "insp-meta"], [1, "insp-auth"], [1, "insp-sp"], [1, "insp-section"], [1, "insp-section", "insp-section-response"], [1, "insp-section-label"], [1, "insp-schema-missing-tag"], [1, "schema-tree"], [1, "insp-no-schema"], [1, "insp-tags"], [1, "insp-test-btn", 3, "click"], [1, "insp-desc"], [1, "insp-path-param"], [1, "insp-pp-name"], [1, "insp-pp-type"], [1, "insp-pp-req"], [1, "insp-pp-desc"], [1, "schema-node", 3, "padding-left"], [1, "schema-node"], [1, "schema-connector"], [1, "schema-key"], [1, "schema-type"], [1, "schema-preview"], [1, "insp-schema-hint"], [1, "insp-schema-desc"], [1, "insp-tag"], [1, "rfp-header"], [1, "rfp-title-row"], [1, "rfp-cat-dot"], [1, "rfp-title"], [1, "rfp-count"], ["title", "\u05E1\u05D2\u05D5\u05E8", 1, "rfp-close", 3, "click"], [1, "rfp-body"], [1, "rfp-route", 3, "rfp-hovered", "rfp-selected"], [1, "rfp-route", 3, "mouseenter", "mouseleave", "click"], [1, "rfp-method"], [1, "rfp-path"], [1, "rfp-route-title"], [1, "axon-loading"], [1, "axon-error"], [1, "axon-empty"], ["type", "infinite-spinner", "size", "medium", "themeColor", "primary"], [1, "empty-icon"], [1, "btn-import", 3, "click"], [1, "cat-section"], [1, "cat-header"], [1, "cat-dot"], [1, "cat-name"], [1, "cat-count"], [1, "cat-line"], [1, "routes-list"], [1, "route-card", 3, "expanded"], [1, "route-card", 3, "click"], [1, "route-row"], [1, "method-badge"], [1, "route-path"], [1, "route-title"], [1, "route-meta"], ["title", "\u05DE\u05D5\u05D2\u05DF \u2014 \u05E0\u05D3\u05E8\u05E9 JWT", 1, "badge-auth"], ["title", "\u05E6\u05D9\u05D1\u05D5\u05E8\u05D9 \u2014 \u05DC\u05DC\u05D0 auth", 1, "badge-pub"], [1, "badge-sp", 3, "title"], [1, "route-tag"], [1, "route-actions", 3, "click"], ["title", "\u05D1\u05D3\u05D5\u05E7", 1, "btn-icon", "btn-test", 3, "click"], [1, "expand-arrow"], [1, "route-detail"], ["title", "\u05E2\u05E8\u05D5\u05DA", 1, "btn-icon", 3, "click"], ["title", "\u05DE\u05D7\u05E7", 1, "btn-icon", "btn-del", 3, "click"], [1, "route-detail", 3, "click"], [1, "detail-grid"], [1, "detail-block", "full-width"], [1, "detail-block"], [1, "detail-block", "info-block"], [1, "info-row"], [1, "info-label"], [1, "info-val"], [1, "info-val", "full-path"], [1, "test-panel"], [1, "detail-label"], [1, "detail-desc"], [1, "param-table"], [1, "no-params"], [1, "param-name"], [1, "type-badge"], [1, "req-yes"], [1, "req-no"], [1, "param-desc"], [1, "param-example"], [1, "path-params-badges"], [1, "pp-badge"], [1, "res-schema"], [1, "info-val", "sp-name"], [1, "info-val", "token-mini"], [1, "test-panel-title"], [1, "method-badge-sm"], [1, "test-path-preview"], [1, "test-controls"], [1, "test-row"], ["type", "text", "dir", "ltr", "placeholder", "http://localhost:3000", 1, "test-input", 3, "input", "value"], ["type", "button", 1, "btn-add-header", 3, "click"], [1, "headers-list"], [1, "header-row"], [1, "btn-run-test", 3, "click", "disabled"], [1, "test-result", 3, "res-ok", "res-err"], [1, "path-params-grid"], [1, "path-param-row"], [1, "pp-name"], ["type", "text", "dir", "ltr", 1, "test-input", "pp-val", 3, "input", "value", "placeholder"], ["type", "text", "placeholder", "key", "dir", "ltr", 1, "test-input", "hdr-key", 3, "input", "value"], [1, "hdr-colon"], ["type", "text", "placeholder", "value", "dir", "ltr", 1, "test-input", "hdr-val", 3, "input", "value"], [1, "btn-rm-hdr", 3, "click"], ["rows", "5", "dir", "ltr", "placeholder", '{ "key": "value" }', 1, "test-textarea", 3, "input", "value"], [1, "test-result"], [1, "res-header"], [1, "res-body"], [1, "res-status", "status-err"], [1, "res-msg"], [1, "res-status"], [1, "res-duration"], [3, "close", "title", "width", "minWidth"], [1, "route-form", 3, "formGroup"], [1, "form-error"], [1, "form-row", "two-col"], [1, "form-group"], [1, "method-seg"], ["type", "button", 1, "method-btn", 3, "background", "color", "active"], [1, "form-group", "path-group"], [1, "req"], ["formControlName", "path", "placeholder", "/api/resource/:id", "dir", "ltr", 1, "form-input"], ["formControlName", "category", "placeholder", "\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: Users, Auth, Products", 1, "form-input"], ["formControlName", "title", "placeholder", "\u05EA\u05D9\u05D0\u05D5\u05E8 \u05E7\u05E6\u05E8 \u05D1\u05E2\u05D1\u05E8\u05D9\u05EA", 1, "form-input"], ["formControlName", "description", "rows", "2", "placeholder", "\u05DE\u05D4 \u05E2\u05D5\u05E9\u05D4 \u05D4-route \u05D4\u05D6\u05D4?", 1, "form-input"], ["formControlName", "spName", "placeholder", "dbo.sp_EntitySave", "dir", "ltr", 1, "form-input"], [1, "seg-ctrl"], ["type", "button", 1, "seg-btn", 3, "click"], ["formControlName", "tags", "placeholder", "auth, public, admin", "dir", "ltr", 1, "form-input"], [1, "params-section"], [1, "params-header"], ["type", "button", 1, "btn-add-param", 3, "click"], ["formArrayName", "reqParams", 1, "params-table-wrap"], ["formControlName", "resSchema", "rows", "4", "dir", "ltr", "placeholder", '{ "success": true, "data": { "id": 1, "name": "..." } }', 1, "form-input", "res-schema-input"], [1, "dialog-footer"], [1, "btn-save", 3, "click", "disabled"], ["type", "pulsing", "size", "small"], [1, "btn-cancel", 3, "click"], ["type", "button", 1, "method-btn", 3, "click"], [1, "params-edit-table"], [3, "formGroupName"], ["formControlName", "name", "placeholder", "paramName", "dir", "ltr", 1, "form-input-sm"], ["formControlName", "type", 1, "form-input-sm"], [3, "value"], [1, "td-center"], ["type", "checkbox", "formControlName", "required"], ["formControlName", "description", "placeholder", "\u05EA\u05D9\u05D0\u05D5\u05E8", 1, "form-input-sm"], ["formControlName", "example", "placeholder", "\u05D3\u05D5\u05D2\u05DE\u05D4", "dir", "ltr", 1, "form-input-sm"], ["type", "button", 1, "btn-rm-param", 3, "click"]], template: function AxonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "button", 2);
      \u0275\u0275listener("click", function AxonComponent_Template_button_click_2_listener() {
        return ctx.back();
      });
      \u0275\u0275elementStart(3, "mat-icon");
      \u0275\u0275text(4, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "FLOWSPACE");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 3)(8, "span", 4);
      \u0275\u0275text(9, "AXON");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 5);
      \u0275\u0275text(11, "Backend API Registry");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 6)(13, "button", 7);
      \u0275\u0275listener("click", function AxonComponent_Template_button_click_13_listener() {
        return ctx.setMode("platform");
      });
      \u0275\u0275elementStart(14, "mat-icon");
      \u0275\u0275text(15, "layers");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " Platform Routes ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 7);
      \u0275\u0275listener("click", function AxonComponent_Template_button_click_17_listener() {
        return ctx.setMode("project");
      });
      \u0275\u0275elementStart(18, "mat-icon");
      \u0275\u0275text(19, "folder_open");
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " Project Routes ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(21, AxonComponent_Conditional_21_Template, 24, 8, "div", 8);
      \u0275\u0275elementStart(22, "div", 9)(23, "button", 10);
      \u0275\u0275listener("click", function AxonComponent_Template_button_click_23_listener() {
        return ctx.setDisplayType("list");
      });
      \u0275\u0275elementStart(24, "mat-icon");
      \u0275\u0275text(25, "view_list");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "button", 11);
      \u0275\u0275listener("click", function AxonComponent_Template_button_click_26_listener() {
        return ctx.setDisplayType("graph");
      });
      \u0275\u0275elementStart(27, "mat-icon");
      \u0275\u0275text(28, "bubble_chart");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 12);
      \u0275\u0275element(30, "img", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 14);
      \u0275\u0275conditionalCreate(32, AxonComponent_Conditional_32_Template, 9, 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(33, AxonComponent_Conditional_33_Template, 12, 4, "div", 15);
      \u0275\u0275conditionalCreate(34, AxonComponent_Conditional_34_Template, 62, 11, "div", 16)(35, AxonComponent_Conditional_35_Template, 5, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(36, AxonComponent_Conditional_36_Template, 71, 12, "kendo-dialog", 18);
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance(13);
      \u0275\u0275classProp("active", ctx.viewMode() === "platform");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.viewMode() === "project");
      \u0275\u0275advance(4);
      \u0275\u0275conditional((tmp_2_0 = ctx.activeStats()) ? 21 : -1, tmp_2_0);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.displayType() === "list");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.displayType() === "graph");
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.viewMode() === "project" ? 32 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.displayType() === "list" ? 33 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.displayType() === "graph" ? 34 : 35);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.dialogOpen() ? 36 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, MatIconModule, MatIcon, Dir, DialogsModule, DialogComponent, DialogActionsComponent, InputsModule, ButtonsModule, IndicatorsModule, LoaderComponent, KeyValuePipe], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n  overflow: hidden;\n}\n.axon-root[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: var(--sf-bg);\n  direction: rtl;\n  font-family:\n    "Noto Sans Hebrew",\n    "Segoe UI",\n    sans-serif;\n}\n.axon-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 12px 28px;\n  background: var(--sf-bg-card);\n  border-bottom: 1px solid var(--sf-border);\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n  flex-shrink: 0;\n  direction: rtl;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--sf-text-secondary);\n  font-size: 0.82rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  padding: 6px 10px;\n  border-radius: 7px;\n  transition: background 0.13s, color 0.13s;\n  flex-shrink: 0;\n}\n.back-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  transform: scaleX(-1);\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.axon-brand[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  flex-shrink: 0;\n}\n.axon-brand[_ngcontent-%COMP%]   .brand-tag[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.18em;\n  font-family: "Share Tech Mono", monospace;\n  color: #059669;\n  background: #d1fae5;\n  border-radius: 4px;\n  padding: 2px 8px;\n  display: inline-block;\n}\n.axon-brand[_ngcontent-%COMP%]   .brand-sub[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: var(--sf-text-muted);\n  font-family: "Share Tech Mono", monospace;\n  letter-spacing: 0.06em;\n  padding-right: 2px;\n}\n.stats-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.stat-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  font-family: "Share Tech Mono", monospace;\n  border: 1px solid transparent;\n}\n.stat-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 12px;\n  height: 12px;\n}\n.stat-chip.chip-total[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  border-color: #e2e8f0;\n}\n.stat-chip.chip-total[_ngcontent-%COMP%]   .chip-num[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin-left: 3px;\n}\n.stat-chip.chip-total[_ngcontent-%COMP%]   .chip-lbl[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: #94a3b8;\n}\n.stat-chip.chip-get[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n  border-color: #6ee7b7;\n}\n.stat-chip.chip-post[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n  border-color: #93c5fd;\n}\n.stat-chip.chip-put[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n  border-color: #fcd34d;\n}\n.stat-chip.chip-delete[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  border-color: #fca5a5;\n}\n.stat-chip.chip-patch[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #5b21b6;\n  border-color: #c4b5fd;\n}\n.stat-chip.chip-sec[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #5b21b6;\n  border-color: #c4b5fd;\n}\n.stat-chip.chip-pub[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #166534;\n  border-color: #86efac;\n}\n.mode-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--sf-border);\n  border-radius: 9px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.mode-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border: none;\n  background: var(--sf-bg);\n  color: var(--sf-text-secondary);\n  font-size: 0.78rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.mode-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.mode-btn[_ngcontent-%COMP%]    + .mode-btn[_ngcontent-%COMP%] {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.mode-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.mode-btn.active[_ngcontent-%COMP%] {\n  background: #059669;\n  color: #fff;\n}\n.btn-import[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 9px;\n  background: #eff6ff;\n  color: #1d4ed8;\n  border: 1px solid #93c5fd;\n  font-size: 0.78rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-import[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.btn-import[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n  color: #fff;\n  border-color: #1d4ed8;\n}\n.btn-import[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.import-toast[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #059669;\n  font-weight: 600;\n  background: #d1fae5;\n  border-radius: 6px;\n  padding: 4px 10px;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n.toolbar-end[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.btn-new-route[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border-radius: 9px;\n  background: #059669;\n  color: #fff;\n  border: none;\n  font-size: 0.82rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-new-route[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn-new-route[_ngcontent-%COMP%]:hover {\n  background: #047857;\n}\n.axon-logo-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  direction: ltr;\n  margin-right: auto;\n}\n.axon-logo[_ngcontent-%COMP%] {\n  height: 52px;\n  width: auto;\n  display: block;\n}\n.axon-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 12px 28px;\n  background: var(--sf-bg-card);\n  border-bottom: 1px solid var(--sf-border);\n  flex-shrink: 0;\n  direction: rtl;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex: 1;\n  max-width: 400px;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--sf-text-muted);\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 36px 8px 12px;\n  border: 1px solid var(--sf-border);\n  border-radius: 9px;\n  background: var(--sf-bg);\n  color: var(--sf-text);\n  font-size: 0.84rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #059669;\n  box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.1);\n}\n.cat-pills[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.cat-pill[_ngcontent-%COMP%] {\n  padding: 5px 14px;\n  border-radius: 20px;\n  border: 1px solid var(--sf-border);\n  background: var(--sf-bg);\n  color: var(--sf-text-secondary);\n  font-size: 0.78rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.cat-pill[_ngcontent-%COMP%]:hover {\n  border-color: #059669;\n  color: #059669;\n}\n.cat-pill.active[_ngcontent-%COMP%] {\n  background: #059669;\n  color: #fff;\n  border-color: #059669;\n  font-weight: 600;\n}\n.axon-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px 28px;\n  scrollbar-width: thin;\n  scrollbar-color: var(--sf-border) transparent;\n}\n.axon-loading[_ngcontent-%COMP%], \n.axon-error[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 80px;\n  color: var(--sf-text-muted);\n}\n.axon-error[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.axon-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px;\n}\n.axon-empty[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 12px;\n}\n.axon-empty[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--sf-text);\n  margin: 0 0 6px;\n}\n.axon-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--sf-text-muted);\n  margin-bottom: 20px;\n}\n.cat-section[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.cat-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.cat-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #059669;\n  flex-shrink: 0;\n}\n.cat-name[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  color: var(--sf-text);\n  text-transform: uppercase;\n  font-family: "Share Tech Mono", monospace;\n  margin: 0;\n}\n.cat-count[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--sf-text-muted);\n  background: var(--sf-bg-hover);\n  border-radius: 10px;\n  padding: 1px 8px;\n}\n.cat-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 1px;\n  background: var(--sf-border);\n}\n.routes-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.route-card[_ngcontent-%COMP%] {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 10px;\n  overflow: hidden;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  cursor: pointer;\n}\n.route-card[_ngcontent-%COMP%]:hover {\n  border-color: #6ee7b7;\n  box-shadow: 0 2px 12px rgba(5, 150, 105, 0.08);\n}\n.route-card.expanded[_ngcontent-%COMP%] {\n  border-color: #059669;\n  box-shadow: 0 4px 20px rgba(5, 150, 105, 0.12);\n}\n.route-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n}\n.method-badge[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 6px;\n  flex-shrink: 0;\n  min-width: 58px;\n  text-align: center;\n  letter-spacing: 0.04em;\n}\n.route-path[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.84rem;\n  color: var(--sf-text);\n  flex-shrink: 0;\n  min-width: 200px;\n}\n.route-title[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--sf-text-secondary);\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.route-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.badge-auth[_ngcontent-%COMP%], \n.badge-pub[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.badge-auth[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.badge-pub[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.badge-auth[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.badge-pub[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.badge-sp[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: #0891b2;\n  background: #e0f2fe;\n  border-radius: 4px;\n  padding: 2px 6px;\n}\n.badge-sp[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 12px;\n  height: 12px;\n}\n.route-tag[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  color: var(--sf-text-muted);\n  background: var(--sf-bg-hover);\n  border-radius: 4px;\n  padding: 2px 6px;\n}\n.route-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 7px;\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--sf-text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n  border-color: var(--sf-border);\n}\n.btn-icon.btn-del[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  color: #ef4444;\n  border-color: #fca5a5;\n}\n.expand-arrow[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: var(--sf-text-muted);\n  flex-shrink: 0;\n  transition: transform 0.2s;\n}\n.expand-arrow.open[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.route-detail[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--sf-border);\n  background: var(--sf-bg);\n  padding: 20px 20px 0;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n@media (max-width: 900px) {\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.detail-block[_ngcontent-%COMP%] {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 9px;\n  padding: 14px 16px;\n}\n.detail-block.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.detail-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--sf-text-muted);\n  margin-bottom: 10px;\n}\n.detail-label[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.detail-desc[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  color: var(--sf-text-secondary);\n  line-height: 1.6;\n  margin: 0;\n}\n.param-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.78rem;\n}\n.param-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: right;\n  padding: 6px 8px;\n  color: var(--sf-text-muted);\n  font-weight: 700;\n  border-bottom: 1px solid var(--sf-border);\n  font-size: 0.7rem;\n}\n.param-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 7px 8px;\n  border-bottom: 1px solid var(--sf-bg-hover);\n  vertical-align: middle;\n}\n.param-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.param-name[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n  color: #1d4ed8;\n  background: #eff6ff;\n  border-radius: 4px;\n  padding: 2px 6px;\n}\n.type-badge[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.7rem;\n  color: #7c3aed;\n  background: #ede9fe;\n  border-radius: 4px;\n  padding: 2px 6px;\n}\n.req-yes[_ngcontent-%COMP%] {\n  color: #059669;\n  font-weight: 700;\n}\n.req-no[_ngcontent-%COMP%] {\n  color: var(--sf-text-muted);\n}\n.param-desc[_ngcontent-%COMP%] {\n  color: var(--sf-text-secondary);\n}\n.param-example[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.75rem;\n  color: var(--sf-text-muted);\n}\n.no-params[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--sf-text-muted);\n  margin: 0;\n}\n.res-schema[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.75rem;\n  color: var(--sf-text);\n  background: var(--sf-bg);\n  border-radius: 7px;\n  border: 1px solid var(--sf-border);\n  padding: 10px 12px;\n  margin: 0;\n  overflow-x: auto;\n  white-space: pre-wrap;\n  max-height: 180px;\n  overflow-y: auto;\n}\n.info-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.82rem;\n}\n.info-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: var(--sf-text-muted);\n}\n.info-label[_ngcontent-%COMP%] {\n  color: var(--sf-text-muted);\n  font-size: 0.75rem;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.info-val[_ngcontent-%COMP%] {\n  color: var(--sf-text);\n  font-size: 0.82rem;\n}\n.sp-name[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n  color: #0891b2;\n  background: #e0f2fe;\n  border-radius: 4px;\n  padding: 2px 8px;\n}\n.auth-yes[_ngcontent-%COMP%] {\n  color: #7c3aed;\n  font-weight: 600;\n}\n.auth-no[_ngcontent-%COMP%] {\n  color: #059669;\n  font-weight: 600;\n}\n.token-mini[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.66rem;\n  color: var(--sf-text-muted);\n}\n.full-path[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n  color: var(--sf-text);\n  word-break: break-all;\n}\n.path-params-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 4px;\n}\n.pp-badge[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n  color: #1d4ed8;\n  background: #eff6ff;\n  border-radius: 6px;\n  padding: 3px 10px;\n  border: 1px solid #bfdbfe;\n}\n.method-badge-sm[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.68rem;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 5px;\n  flex-shrink: 0;\n}\n.test-path-preview[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n  color: var(--sf-text-secondary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.hdr-colon[_ngcontent-%COMP%] {\n  color: var(--sf-text-muted);\n  font-weight: 600;\n}\n.btn-test[_ngcontent-%COMP%]:hover {\n  background: #d1fae5 !important;\n  color: #059669 !important;\n  border-color: #6ee7b7 !important;\n}\n.cat-pill[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  vertical-align: middle;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.test-panel[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #6ee7b7;\n  border-radius: 10px;\n  padding: 18px 20px;\n  margin: 0 -4px 20px;\n}\n.test-panel-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #065f46;\n  margin-bottom: 14px;\n}\n.test-panel-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.test-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.test-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 120px 1fr;\n  gap: 10px;\n  align-items: start;\n}\n.test-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #065f46;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding-top: 6px;\n}\n.test-input[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border: 1px solid #a7f3d0;\n  border-radius: 7px;\n  background: #fff;\n  color: var(--sf-text);\n  font-size: 0.82rem;\n  font-family: "Share Tech Mono", monospace;\n}\n.test-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #059669;\n}\n.path-params-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.path-param-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pp-name[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n  color: #1d4ed8;\n  background: #eff6ff;\n  border-radius: 4px;\n  padding: 3px 8px;\n  flex-shrink: 0;\n}\n.pp-val[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.headers-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.hdr-key[_ngcontent-%COMP%] {\n  width: 160px;\n  flex-shrink: 0;\n}\n.hdr-val[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.btn-rm-hdr[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 5px;\n  border: 1px solid #fca5a5;\n  background: #fef2f2;\n  color: #ef4444;\n  cursor: pointer;\n  font-size: 0.8rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.btn-rm-hdr[_ngcontent-%COMP%]:hover {\n  background: #ef4444;\n  color: #fff;\n}\n.btn-add-header[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  border: 1px solid #6ee7b7;\n  background: #d1fae5;\n  color: #059669;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 0.8rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 6px;\n}\n.test-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 10px;\n  border: 1px solid #a7f3d0;\n  border-radius: 7px;\n  background: #fff;\n  color: var(--sf-text);\n  font-size: 0.78rem;\n  font-family: "Share Tech Mono", monospace;\n  resize: vertical;\n  box-sizing: border-box;\n}\n.test-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #059669;\n}\n.btn-run-test[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 22px;\n  border-radius: 9px;\n  background: #059669;\n  color: #fff;\n  border: none;\n  font-size: 0.84rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: background 0.15s;\n  align-self: flex-start;\n}\n.btn-run-test[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn-run-test[_ngcontent-%COMP%]   kendo-loader[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.btn-run-test[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #047857;\n}\n.btn-run-test[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.test-result[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  border-radius: 9px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n}\n.test-result.res-ok[_ngcontent-%COMP%] {\n  border-color: #6ee7b7;\n}\n.test-result.res-err[_ngcontent-%COMP%] {\n  border-color: #fca5a5;\n}\n.res-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 14px;\n  background: var(--sf-bg-card);\n  border-bottom: 1px solid var(--sf-border);\n}\n.res-status[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.82rem;\n  font-weight: 700;\n  padding: 2px 10px;\n  border-radius: 6px;\n}\n.res-status.status-ok[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.res-status.status-warn[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.res-status.status-err[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.res-status.status-none[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.res-duration[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--sf-text-muted);\n  font-family: "Share Tech Mono", monospace;\n}\n.res-msg[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #dc2626;\n}\n.res-body[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.75rem;\n  color: var(--sf-text);\n  background: var(--sf-bg);\n  padding: 12px 14px;\n  margin: 0;\n  max-height: 240px;\n  overflow-y: auto;\n  white-space: pre-wrap;\n}\n.route-form[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  direction: rtl;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.form-error[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  color: #dc2626;\n  font-size: 0.82rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n}\n.form-row.two-col[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.path-group[_ngcontent-%COMP%] {\n  flex: 2;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  background: var(--sf-bg-card);\n  color: var(--sf-text);\n  font-size: 0.85rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  box-sizing: border-box;\n  direction: rtl;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #059669;\n  box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.1);\n}\ninput[dir=ltr].form-input[_ngcontent-%COMP%], \ntextarea[dir=ltr].form-input[_ngcontent-%COMP%] {\n  direction: ltr;\n  text-align: left;\n}\n.method-seg[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.method-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 7px 4px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  font-family: "Share Tech Mono", monospace;\n  border: none;\n  border-right: 1px solid var(--sf-border);\n  background: var(--sf-bg);\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.method-btn[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.method-btn.active[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n.method-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: var(--sf-bg-hover);\n}\n.seg-ctrl[_ngcontent-%COMP%] {\n  display: inline-flex;\n  direction: rtl;\n  align-self: flex-start;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.seg-btn[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  border: none;\n  background: var(--sf-bg);\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.seg-btn[_ngcontent-%COMP%]    + .seg-btn[_ngcontent-%COMP%] {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.seg-btn.seg-on[_ngcontent-%COMP%] {\n  background: #059669;\n  color: #fff;\n  font-weight: 600;\n}\n.seg-btn.seg-off[_ngcontent-%COMP%] {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text-muted);\n}\n.req[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.params-section[_ngcontent-%COMP%] {\n  background: var(--sf-bg);\n  border: 1px solid var(--sf-border);\n  border-radius: 9px;\n  overflow: hidden;\n}\n.params-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--sf-border);\n  background: var(--sf-bg-hover);\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--sf-text-secondary);\n}\n.params-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.btn-add-param[_ngcontent-%COMP%] {\n  margin-right: auto;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 12px;\n  border-radius: 6px;\n  border: 1px solid #6ee7b7;\n  background: #d1fae5;\n  color: #059669;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-add-param[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.btn-add-param[_ngcontent-%COMP%]:hover {\n  background: #059669;\n  color: #fff;\n}\n.params-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.params-edit-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.78rem;\n}\n.params-edit-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: right;\n  padding: 8px 8px;\n  color: var(--sf-text-muted);\n  font-size: 0.7rem;\n  font-weight: 700;\n  border-bottom: 1px solid var(--sf-border);\n}\n.params-edit-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 6px;\n  border-bottom: 1px solid var(--sf-bg-hover);\n}\n.params-edit-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.params-edit-table[_ngcontent-%COMP%]   .td-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.form-input-sm[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  border: 1px solid var(--sf-border);\n  border-radius: 6px;\n  background: var(--sf-bg-card);\n  color: var(--sf-text);\n  font-size: 0.78rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-input-sm[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #059669;\n}\n.btn-rm-param[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 5px;\n  border: 1px solid #fca5a5;\n  background: #fef2f2;\n  color: #ef4444;\n  cursor: pointer;\n  font-size: 0.8rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-rm-param[_ngcontent-%COMP%]:hover {\n  background: #ef4444;\n  color: #fff;\n}\n.res-schema-input[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  direction: ltr;\n  text-align: left;\n  resize: vertical;\n}\n.dialog-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  direction: rtl;\n}\n.btn-save[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #f97316 !important;\n  color: #fff !important;\n  border: none !important;\n  border-radius: 9px !important;\n  padding: 9px 20px !important;\n  font-size: 0.87rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.3);\n  cursor: pointer;\n}\n.btn-save[_ngcontent-%COMP%]   kendo-loader[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #ea6c0a !important;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 9px 20px;\n  border-radius: 9px;\n  border: 1px solid var(--sf-border) !important;\n  background: transparent;\n  color: var(--sf-text-secondary) !important;\n  font-size: 0.87rem;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover) !important;\n}\n[_nghost-%COMP%]     .k-dialog-actions {\n  direction: rtl !important;\n}\n.display-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.disp-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border: none;\n  background: var(--sf-bg);\n  color: var(--sf-text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.disp-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.disp-btn[_ngcontent-%COMP%]    + .disp-btn[_ngcontent-%COMP%] {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.disp-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.disp-btn.active[_ngcontent-%COMP%] {\n  background: #059669;\n  color: #fff;\n}\n.neural-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  position: relative;\n  background: #060f0a;\n}\n.neural-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.axon-center-group[_ngcontent-%COMP%] {\n  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.center-ring-slow[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin-slow 18s linear infinite;\n  transform-box: fill-box;\n  transform-origin: center;\n}\n.center-ring-fast[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin-slow 10s linear infinite reverse;\n  transform-box: fill-box;\n  transform-origin: center;\n}\n@keyframes _ngcontent-%COMP%_spin-slow {\n  from {\n    stroke-dashoffset: 0;\n  }\n  to {\n    stroke-dashoffset: -100;\n  }\n}\n.exp-ring-outer[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_exp-pulse 3s ease-in-out infinite;\n  transform-box: fill-box;\n  transform-origin: center;\n}\n.exp-ring-inner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_exp-pulse 3s ease-in-out infinite 1s;\n  transform-box: fill-box;\n  transform-origin: center;\n}\n@keyframes _ngcontent-%COMP%_exp-pulse {\n  0%, 100% {\n    opacity: 0.28;\n  }\n  50% {\n    opacity: 0.06;\n  }\n}\n.route-node[_ngcontent-%COMP%] {\n  transition: opacity 0.15s;\n}\n.cat-graph-node[_ngcontent-%COMP%] {\n  transition: opacity 0.15s ease;\n}\n.graph-legend[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 16px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: rgba(6, 15, 10, 0.85);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border: 1px solid #1a3328;\n  border-radius: 24px;\n  padding: 8px 20px;\n  white-space: nowrap;\n}\n.legend-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #4b7a63;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.legend-back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: transparent;\n  border: 1px solid #1a3328;\n  border-radius: 16px;\n  padding: 4px 12px;\n  color: #6ee7b7;\n  font-size: 0.78rem;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.legend-back[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.legend-back[_ngcontent-%COMP%]:hover {\n  background: #0d2018;\n}\n.legend-count[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #4b7a63;\n  margin-right: 4px;\n}\n.legend-methods[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n.legend-m[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 0.68rem;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 10px;\n  letter-spacing: 0.03em;\n}\n.selected-route-ring[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_sel-pulse 1.8s ease-in-out infinite;\n  transform-box: fill-box;\n  transform-origin: center;\n}\n@keyframes _ngcontent-%COMP%_sel-pulse {\n  0%, 100% {\n    opacity: 0.55;\n  }\n  50% {\n    opacity: 0.12;\n  }\n}\n.route-inspector[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  width: 340px;\n  max-height: calc(100% - 32px);\n  background: rgba(5, 10, 14, 0.97);\n  border: 1px solid #1a2d3e;\n  border-radius: 14px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(18px);\n  backdrop-filter: blur(18px);\n  z-index: 25;\n  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(59, 130, 246, 0.05);\n  animation: _ngcontent-%COMP%_panel-in 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  direction: rtl;\n}\n.insp-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 14px;\n  border-bottom: 1px solid #0f1f2e;\n  background: rgba(255, 255, 255, 0.015);\n  flex-shrink: 0;\n  direction: ltr;\n}\n.insp-method[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.63rem;\n  font-weight: 800;\n  padding: 2px 7px;\n  border-radius: 4px;\n  flex-shrink: 0;\n  letter-spacing: 0.03em;\n}\n.insp-path[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.7rem;\n  color: #7c9ab2;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  direction: ltr;\n}\n.insp-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #2e4a60;\n  font-size: 0.95rem;\n  cursor: pointer;\n  padding: 4px 6px;\n  border-radius: 6px;\n  line-height: 1;\n  transition: color 0.15s, background 0.15s;\n  flex-shrink: 0;\n}\n.insp-close[_ngcontent-%COMP%]:hover {\n  color: #e2e8f0;\n  background: rgba(255, 255, 255, 0.06);\n}\n.insp-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 11px;\n  scrollbar-width: thin;\n  scrollbar-color: #0f1f2e transparent;\n  direction: rtl;\n}\n.insp-title[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #cbd5e1;\n  line-height: 1.3;\n}\n.insp-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.insp-auth[_ngcontent-%COMP%] {\n  font-size: 0.67rem;\n  font-weight: 700;\n  padding: 2px 9px;\n  border-radius: 10px;\n  font-family: "Share Tech Mono", monospace;\n}\n.insp-auth.insp-secured[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.12);\n  color: #a78bfa;\n  border: 1px solid rgba(124, 58, 237, 0.22);\n}\n.insp-auth.insp-public[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #34d399;\n  border: 1px solid rgba(16, 185, 129, 0.18);\n}\n.insp-sp[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.65rem;\n  color: #38bdf8;\n  background: rgba(56, 189, 248, 0.07);\n  border: 1px solid rgba(56, 189, 248, 0.16);\n  border-radius: 10px;\n  padding: 2px 9px;\n  direction: ltr;\n}\n.insp-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.insp-section-response[_ngcontent-%COMP%] {\n  gap: 8px;\n}\n.insp-section-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.6rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  color: #1e3a52;\n  text-transform: uppercase;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #0a1820;\n}\n.insp-schema-missing-tag[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  padding: 1px 6px;\n  border-radius: 6px;\n  background: rgba(239, 68, 68, 0.1);\n  color: #f87171;\n  border: 1px solid rgba(239, 68, 68, 0.15);\n  font-weight: 600;\n  letter-spacing: 0.04em;\n}\n.insp-desc[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #475569;\n  line-height: 1.55;\n  margin: 0;\n  direction: rtl;\n}\n.insp-path-param[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 3px 0;\n  direction: ltr;\n}\n.insp-pp-name[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.7rem;\n  color: #60a5fa;\n  background: rgba(96, 165, 250, 0.07);\n  border-radius: 4px;\n  padding: 1px 6px;\n  flex-shrink: 0;\n}\n.insp-pp-type[_ngcontent-%COMP%] {\n  font-size: 0.66rem;\n  font-family: "Share Tech Mono", monospace;\n  color: #374151;\n  flex-shrink: 0;\n}\n.insp-pp-req[_ngcontent-%COMP%] {\n  color: #f87171;\n  font-size: 0.72rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.insp-pp-desc[_ngcontent-%COMP%] {\n  font-size: 0.66rem;\n  color: #1e3a52;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  direction: rtl;\n  flex: 1;\n}\n.schema-tree[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.35);\n  border: 1px solid #0a1820;\n  border-radius: 8px;\n  padding: 6px 0;\n  overflow: hidden;\n  direction: ltr;\n}\n.schema-node[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 8px 3px 0;\n  font-size: 0.7rem;\n  transition: background 0.1s;\n  direction: ltr;\n}\n.schema-node[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.025);\n}\n.schema-connector[_ngcontent-%COMP%] {\n  color: #1a3048;\n  font-size: 0.6rem;\n  flex-shrink: 0;\n  width: 12px;\n  text-align: center;\n}\n.schema-key[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.7rem;\n  color: #93c5fd;\n  flex-shrink: 0;\n  min-width: 54px;\n}\n.schema-type[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.62rem;\n  font-weight: 700;\n  padding: 1px 5px;\n  border-radius: 4px;\n  border: 1px solid transparent;\n  flex-shrink: 0;\n  letter-spacing: 0.02em;\n}\n.schema-preview[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.64rem;\n  color: #1e3a52;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1;\n}\n.insp-no-schema[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.25);\n  border: 1px dashed #0f1f2e;\n  border-radius: 8px;\n  padding: 10px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.insp-schema-hint[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.66rem;\n  color: #1e3a52;\n  direction: ltr;\n  display: block;\n}\n.insp-schema-desc[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #1e3a52;\n  margin: 0;\n  direction: rtl;\n}\n.insp-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.insp-tag[_ngcontent-%COMP%] {\n  font-size: 0.63rem;\n  font-weight: 600;\n  padding: 2px 7px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.04);\n  color: #1e3a52;\n  border: 1px solid #0f1f2e;\n  font-family: "Share Tech Mono", monospace;\n  letter-spacing: 0.04em;\n}\n.insp-test-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  width: 100%;\n  padding: 9px 14px;\n  background: rgba(5, 150, 105, 0.08);\n  border: 1px solid rgba(5, 150, 105, 0.18);\n  border-radius: 9px;\n  color: #10b981;\n  font-size: 0.78rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: all 0.18s;\n  margin-top: 2px;\n}\n.insp-test-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  width: 17px;\n  height: 17px;\n}\n.insp-test-btn[_ngcontent-%COMP%]:hover {\n  background: #059669;\n  color: #fff;\n  border-color: #059669;\n}\n.routes-float-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  width: 320px;\n  max-height: calc(100% - 56px);\n  background: rgba(6, 15, 10, 0.96);\n  border: 1px solid #1e3a2a;\n  border-radius: 16px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(14px);\n  backdrop-filter: blur(14px);\n  z-index: 20;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(16, 185, 129, 0.08);\n  animation: _ngcontent-%COMP%_panel-in 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n@keyframes _ngcontent-%COMP%_panel-in {\n  from {\n    opacity: 0;\n    transform: translateY(-10px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.rfp-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  border-bottom: 1px solid #1a3328;\n  flex-shrink: 0;\n  background: rgba(16, 185, 129, 0.04);\n}\n.rfp-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.rfp-cat-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  box-shadow: 0 0 6px currentColor;\n}\n.rfp-title[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #e2f8ef;\n  letter-spacing: 0.04em;\n  font-family: "Share Tech Mono", monospace;\n}\n.rfp-count[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: #10b981;\n  border: 1px solid rgba(16, 185, 129, 0.25);\n  border-radius: 12px;\n  padding: 1px 9px;\n  font-size: 0.7rem;\n  font-weight: 700;\n  font-family: monospace;\n}\n.rfp-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #4b7a63;\n  font-size: 1rem;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: color 0.15s, background 0.15s;\n  line-height: 1;\n}\n.rfp-close[_ngcontent-%COMP%]:hover {\n  color: #e2f8ef;\n  background: rgba(255, 255, 255, 0.06);\n}\n.rfp-body[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  padding: 6px;\n  flex: 1;\n  scrollbar-width: thin;\n  scrollbar-color: #1a3328 transparent;\n}\n.rfp-route[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 10px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.12s;\n  direction: ltr;\n}\n.rfp-route[_ngcontent-%COMP%]:hover, \n.rfp-route.rfp-hovered[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.09);\n}\n.rfp-route.rfp-selected[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  border-right: 2px solid #60a5fa;\n  padding-right: 8px;\n}\n.rfp-route.rfp-selected[_ngcontent-%COMP%]   .rfp-path[_ngcontent-%COMP%] {\n  color: #93c5fd;\n}\n.rfp-method[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.63rem;\n  font-weight: 800;\n  padding: 2px 5px;\n  border-radius: 4px;\n  flex-shrink: 0;\n  min-width: 42px;\n  text-align: center;\n  letter-spacing: 0.02em;\n}\n.rfp-path[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.72rem;\n  color: #6ee7b7;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.rfp-route-title[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #3d6b52;\n  flex-shrink: 0;\n  max-width: 90px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  direction: rtl;\n}\n/*# sourceMappingURL=axon.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AxonComponent, [{
    type: Component,
    args: [{ selector: "app-axon", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MatIconModule,
      DialogsModule,
      InputsModule,
      ButtonsModule,
      IndicatorsModule
    ], template: `<div class="axon-root">

  <!-- \u2500\u2500 Toolbar \u2500\u2500 -->
  <header class="axon-toolbar">
    <button class="back-btn" (click)="back()">
      <mat-icon>arrow_back</mat-icon>
      <span>FLOWSPACE</span>
    </button>

    <div class="axon-brand">
      <span class="brand-tag">AXON</span>
      <span class="brand-sub">Backend API Registry</span>
    </div>

    <!-- Mode Toggle -->
    <div class="mode-toggle">
      <button class="mode-btn" [class.active]="viewMode() === 'platform'"
              (click)="setMode('platform')">
        <mat-icon>layers</mat-icon>
        Platform Routes
      </button>
      <button class="mode-btn" [class.active]="viewMode() === 'project'"
              (click)="setMode('project')">
        <mat-icon>folder_open</mat-icon>
        Project Routes
      </button>
    </div>

    <!-- Stats chips -->
    @if (activeStats(); as s) {
      <div class="stats-bar">
        <div class="stat-chip chip-total">
          <span class="chip-num">{{ s.total }}</span>
          <span class="chip-lbl">Routes</span>
        </div>
        <div class="stat-chip chip-get">GET {{ s.gets }}</div>
        <div class="stat-chip chip-post">POST {{ s.posts }}</div>
        <div class="stat-chip chip-put">PUT {{ s.puts }}</div>
        <div class="stat-chip chip-delete">DEL {{ s.deletes }}</div>
        <div class="stat-chip chip-patch">PATCH {{ s.patches }}</div>
        <div class="stat-chip chip-sec">
          <mat-icon>lock</mat-icon>{{ s.secured }}
        </div>
        <div class="stat-chip chip-pub">
          <mat-icon>public</mat-icon>{{ s.public }}
        </div>
      </div>
    }

    <!-- Display type toggle -->
    <div class="display-toggle">
      <button class="disp-btn" [class.active]="displayType() === 'list'"
              (click)="setDisplayType('list')" title="\u05DE\u05E6\u05D1 \u05E8\u05E9\u05D9\u05DE\u05D4">
        <mat-icon>view_list</mat-icon>
      </button>
      <button class="disp-btn" [class.active]="displayType() === 'graph'"
              (click)="setDisplayType('graph')" title="\u05DE\u05E6\u05D1 \u05D2\u05E8\u05E3 \u05E0\u05D5\u05D9\u05E8\u05D5\u05E0\u05D9\u05DD">
        <mat-icon>bubble_chart</mat-icon>
      </button>
    </div>

    <!-- AXON Logo \u2014 physical left -->
    <div class="axon-logo-wrap">
      <img src="/assets/axon-logo.svg" alt="AXON" class="axon-logo" />
    </div>

    <div class="toolbar-end">
      @if (viewMode() === 'project') {
        <!-- Import platform routes button -->
        <button class="btn-import" (click)="importPlatform()" [disabled]="importing()" title="\u05D9\u05D9\u05D1\u05D0 \u05D0\u05EA \u05DB\u05DC routes \u05D4\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4 \u05DC\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8">
          @if (importing()) {
            <kendo-loader type="pulsing" size="small" themeColor="primary" />
          } @else {
            <mat-icon>download</mat-icon>
          }
          Sync Platform
        </button>

        @if (importResult(); as imp) {
          <span class="import-toast">\u2713 \u05D9\u05D5\u05D1\u05D0\u05D5 {{ imp.inserted }} | \u05E7\u05D9\u05D9\u05DE\u05D9\u05DD {{ imp.skipped }}</span>
        }

        <button class="btn-new-route" (click)="openNew()">
          <mat-icon>add</mat-icon>
          Route \u05D7\u05D3\u05E9
        </button>
      }
    </div>
  </header>

  <!-- \u2500\u2500 Search + Category Filter \u2014 list mode only \u2500\u2500 -->
  @if (displayType() === 'list') {
  <div class="axon-controls">
    <div class="search-wrap">
      <mat-icon class="search-icon">search</mat-icon>
      <input class="search-input" type="text" placeholder="\u05D7\u05D9\u05E4\u05D5\u05E9 route, path, method..."
             [value]="searchText()"
             (input)="searchText.set($any($event.target).value)" />
    </div>

    <div class="cat-pills">
      <button class="cat-pill" [class.active]="activeCategory() === null"
              (click)="activeCategory.set(null)">
        <mat-icon>apps</mat-icon> \u05D4\u05DB\u05DC ({{ categories().length }})
      </button>
      @for (cat of categories(); track cat) {
        <button class="cat-pill" [class.active]="activeCategory() === cat"
                (click)="activeCategory.set(cat)">{{ cat }}</button>
      }
    </div>
  </div>
  } <!-- end list controls -->

  <!-- \u2500\u2500 Body \u2500\u2500 -->
  @if (displayType() === 'graph') {

  <!-- \u2550\u2550 NEURAL GRAPH CANVAS \u2550\u2550 -->
  <div class="neural-wrap">
    <svg class="neural-svg"
         [attr.viewBox]="'0 0 ' + CANVAS_W + ' ' + CANVAS_H"
         preserveAspectRatio="xMidYMid meet">
      <defs>
        <!-- Arrow markers per method color -->
        <marker id="arr-green"  markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 z" fill="#10b981" opacity="0.8"/>
        </marker>
        <marker id="arr-get"    markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 z" fill="#065f46" opacity="0.9"/>
        </marker>
        <marker id="arr-post"   markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 z" fill="#1e40af" opacity="0.9"/>
        </marker>
        <marker id="arr-put"    markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 z" fill="#92400e" opacity="0.9"/>
        </marker>
        <marker id="arr-delete" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 z" fill="#991b1b" opacity="0.9"/>
        </marker>
        <marker id="arr-patch"  markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 z" fill="#5b21b6" opacity="0.9"/>
        </marker>
        <!-- Glow filter -->
        <filter id="glow-green" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="glow-sm" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stop-color="#059669" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="#059669" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <!-- \u2500\u2500 Background: dark fill \u2500\u2500 -->
      <rect width="100%" height="100%" fill="#060f0a"/>

      <!-- \u2500\u2500 Neural background lines (faint) \u2500\u2500 -->
      @for (l of bgLines; track $index) {
        <line [attr.x1]="l.x1" [attr.y1]="l.y1" [attr.x2]="l.x2" [attr.y2]="l.y2"
              stroke="#1a3328" stroke-width="0.7" opacity="0.6"/>
      }

      <!-- \u2500\u2500 Background dots \u2500\u2500 -->
      @for (d of bgDots; track $index) {
        <circle [attr.cx]="d.x" [attr.cy]="d.y" [attr.r]="d.r"
                fill="#2d5a3d" [attr.opacity]="d.op"/>
      }

      <!-- \u2500\u2500 Ambient glow follows AXON \u2500\u2500 -->
      <circle [attr.cx]="axonCenter().x" [attr.cy]="axonCenter().y" r="180"
              fill="url(#center-glow)"/>

      <!-- \u2500\u2500 Lines: AXON \u2192 category nodes (hidden when expanded) \u2500\u2500 -->
      @if (!activeGraphCat()) {
        @for (cat of categoryNodes(); track cat.id) {
          <line [attr.x1]="axonCenter().x" [attr.y1]="axonCenter().y"
                [attr.x2]="cat.x" [attr.y2]="cat.y"
                [attr.stroke]="cat.color"
                [attr.stroke-opacity]="cat.active || cat.hovered ? 0.8 : 0.22"
                [attr.stroke-width]="cat.active ? 2 : 1.2"
                stroke-dasharray="5 4"
                marker-end="url(#arr-green)"/>
        }
      }

      <!-- \u2500\u2500 AXON \u2192 expanded category connection \u2500\u2500 -->
      @if (activeGraphCat()) {
        <line [attr.x1]="axonCenter().x" [attr.y1]="axonCenter().y"
              [attr.x2]="expandedCatCenter.x" [attr.y2]="expandedCatCenter.y"
              [attr.stroke]="CAT_COLORS[activeGraphCat()!] ?? '#10b981'"
              stroke-width="1.5" stroke-dasharray="8 5" opacity="0.45"
              marker-end="url(#arr-green)"/>
      }

      <!-- \u2500\u2500 Lines: category \u2192 route nodes (when expanded) \u2500\u2500 -->
      @for (rn of routeNodes(); track rn.id) {
        <line [attr.x1]="rn.catX" [attr.y1]="rn.catY"
              [attr.x2]="rn.x" [attr.y2]="rn.y"
              [attr.stroke]="rn.fg"
              [attr.stroke-opacity]="rn.hovered ? 1 : 0.5"
              stroke-width="1"
              [attr.marker-end]="'url(#arr-' + rn.method.toLowerCase() + ')'"
              stroke-dasharray="3 3"/>
      }

      <!-- \u2500\u2500 Route nodes (circles) \u2500\u2500 -->
      @for (rn of routeNodes(); track rn.id) {
        <g class="route-node"
           (mouseenter)="hoveredRoute.set(rn.id)"
           (mouseleave)="hoveredRoute.set(null)"
           (click)="selectRouteInGraph(rn.route)"
           style="cursor:pointer">

          <!-- Selected pulse ring -->
          @if (rn.selected) {
            <circle [attr.cx]="rn.x" [attr.cy]="rn.y" r="24"
                    [attr.stroke]="rn.bg" stroke-width="1.5" fill="none"
                    opacity="0.55" class="selected-route-ring"/>
            <circle [attr.cx]="rn.x" [attr.cy]="rn.y" r="30"
                    [attr.stroke]="rn.bg" stroke-width="0.8" fill="none"
                    opacity="0.2"/>
          }

          <!-- Glow halo on hover -->
          @if (rn.hovered || rn.selected) {
            <circle [attr.cx]="rn.x" [attr.cy]="rn.y" r="26"
                    [attr.fill]="rn.bg" opacity="0.15"
                    filter="url(#glow-sm)"/>
          }

          <!-- Main circle -->
          <circle [attr.cx]="rn.x" [attr.cy]="rn.y" r="15"
                  [attr.fill]="(rn.hovered || rn.selected) ? rn.bg : '#0d2018'"
                  [attr.stroke]="rn.bg"
                  [attr.stroke-width]="rn.selected ? 2.5 : (rn.hovered ? 2 : 1.5)"
                  [attr.filter]="(rn.hovered || rn.selected) ? 'url(#glow-sm)' : ''"/>

          <!-- Method letter -->
          <text [attr.x]="rn.x" [attr.y]="rn.y + 4"
                text-anchor="middle"
                font-family="monospace" font-size="9" font-weight="800"
                [attr.fill]="(rn.hovered || rn.selected) ? rn.fg : rn.bg">{{ rn.method[0] }}</text>

          <!-- Hover tooltip: method + path -->
          @if (rn.hovered) {
            <g>
              <!-- Path tooltip above -->
              <rect [attr.x]="rn.x - 88" [attr.y]="rn.y - 44"
                    width="176" height="22" rx="11"
                    fill="#061810" stroke="#1a4a2e" stroke-width="1"/>
              <text [attr.x]="rn.x" [attr.y]="rn.y - 29"
                    text-anchor="middle"
                    font-family="monospace" font-size="8.5" font-weight="700"
                    fill="#10b981">{{ rn.method }}</text>
              <text [attr.x]="rn.x + 28" [attr.y]="rn.y - 29"
                    font-family="monospace" font-size="8"
                    fill="#6ee7b7">{{ rn.path.length > 22 ? rn.path.slice(0,21) + '\u2026' : rn.path }}</text>

              <!-- Title tooltip below -->
              @if (rn.title) {
                <rect [attr.x]="rn.x - 82" [attr.y]="rn.y + 22"
                      width="164" height="18" rx="9"
                      fill="#061810" stroke="#1a4a2e" stroke-width="1" opacity="0.95"/>
                <text [attr.x]="rn.x" [attr.y]="rn.y + 34"
                      text-anchor="middle"
                      font-family="'Segoe UI', sans-serif" font-size="7.5"
                      fill="#4ade80">{{ rn.title.slice(0, 26) }}</text>
              }
            </g>
          }

          <!-- "+N more" badge on last visible node when capped -->
          @if (rn.isLast) {
            <g>
              <rect [attr.x]="rn.x + 16" [attr.y]="rn.y - 8"
                    width="52" height="16" rx="8"
                    fill="#1e3a2f" stroke="#4ade80" stroke-width="1"/>
              <text [attr.x]="rn.x + 42" [attr.y]="rn.y + 4"
                    text-anchor="middle"
                    font-family="monospace" font-size="7.5" font-weight="700"
                    fill="#4ade80">+{{ rn.extraCount }}</text>
            </g>
          }
        </g>
      }

      <!-- \u2500\u2500 Category nodes (hidden when any cat is expanded) \u2500\u2500 -->
      @for (cat of categoryNodes(); track cat.id) {
        <g class="cat-graph-node"
           [attr.opacity]="cat.hidden ? 0 : 1"
           [style.pointer-events]="cat.hidden ? 'none' : 'auto'"
           (mouseenter)="hoveredGraphCat.set(cat.id)"
           (mouseleave)="hoveredGraphCat.set(null)"
           (click)="toggleGraphCat(cat.id)"
           style="cursor:pointer">

          <!-- Halo -->
          <circle [attr.cx]="cat.x" [attr.cy]="cat.y" r="38"
                  [attr.fill]="cat.color"
                  [attr.fill-opacity]="cat.hovered ? 0.14 : 0.07"
                  [attr.stroke]="cat.color"
                  [attr.stroke-width]="cat.hovered ? 2 : 1.2"
                  [attr.stroke-opacity]="cat.hovered ? 0.9 : 0.45"
                  [attr.filter]="cat.hovered ? 'url(#glow-sm)' : ''"/>

          <!-- Category name -->
          <text [attr.x]="cat.x" [attr.y]="cat.y - 5"
                text-anchor="middle"
                font-family="'Segoe UI', sans-serif"
                [attr.font-size]="cat.id.length > 9 ? '9' : '10'"
                font-weight="700"
                [attr.fill]="cat.color">{{ cat.id }}</text>

          <!-- Count badge -->
          <text [attr.x]="cat.x" [attr.y]="cat.y + 10"
                text-anchor="middle"
                font-family="monospace" font-size="9"
                fill="#4b7a63">{{ cat.count }}</text>
        </g>
      }

      <!-- \u2500\u2500 Expanded category focus node (left center) \u2500\u2500 -->
      @if (activeGraphCat(); as activeCat) {
        <g class="expanded-cat-group">
          <!-- Outer pulse rings -->
          <circle [attr.cx]="expandedCatCenter.x" [attr.cy]="expandedCatCenter.y" r="92"
                  [attr.stroke]="CAT_COLORS[activeCat] ?? '#64748b'"
                  stroke-width="1" fill="none"
                  class="exp-ring-outer"/>
          <circle [attr.cx]="expandedCatCenter.x" [attr.cy]="expandedCatCenter.y" r="76"
                  [attr.stroke]="CAT_COLORS[activeCat] ?? '#64748b'"
                  stroke-width="1.5" fill="none"
                  class="exp-ring-inner"/>
          <!-- Core -->
          <circle [attr.cx]="expandedCatCenter.x" [attr.cy]="expandedCatCenter.y" r="60"
                  fill="#071510"
                  [attr.stroke]="CAT_COLORS[activeCat] ?? '#64748b'"
                  stroke-width="2.5"
                  filter="url(#glow-sm)"/>
          <circle [attr.cx]="expandedCatCenter.x" [attr.cy]="expandedCatCenter.y" r="52"
                  [attr.fill]="CAT_COLORS[activeCat] ?? '#64748b'"
                  fill-opacity="0.1"/>
          <!-- Name -->
          <text [attr.x]="expandedCatCenter.x" [attr.y]="expandedCatCenter.y - 7"
                text-anchor="middle"
                font-family="'Segoe UI', sans-serif"
                [attr.font-size]="activeCat.length > 9 ? '11' : '14'"
                font-weight="800"
                [attr.fill]="CAT_COLORS[activeCat] ?? '#e2f8ef'">{{ activeCat }}</text>
          <!-- Route count -->
          <text [attr.x]="expandedCatCenter.x" [attr.y]="expandedCatCenter.y + 13"
                text-anchor="middle"
                font-family="monospace" font-size="10"
                fill="#6ee7b7">{{ (activeGrouped()[activeCat] ?? []).length }} routes</text>
        </g>
      }

      <!-- \u2500\u2500 Central AXON node (animates right when cat is expanded) \u2500\u2500 -->
      <g class="axon-center-group"
         [attr.transform]="'translate(' + axonCenter().x + ',' + axonCenter().y + ')'"
         (click)="activeGraphCat.set(null)" style="cursor:pointer">
        <!-- Outer glow rings -->
        <circle cx="0" cy="0" r="68" fill="none" stroke="#059669" stroke-width="1"
                opacity="0.2" class="center-ring-slow"/>
        <circle cx="0" cy="0" r="55" fill="none" stroke="#10b981" stroke-width="1.5"
                opacity="0.3" class="center-ring-fast"/>
        <!-- Core -->
        <circle cx="0" cy="0" r="44"
                fill="#071510" stroke="#059669" stroke-width="2.5"
                filter="url(#glow-green)"/>
        <circle cx="0" cy="0" r="38" fill="#059669" fill-opacity="0.12"/>
        <!-- Diamond network icon -->
        <line x1="0" y1="-6" x2="0" y2="-20" stroke="#10b981" stroke-width="1.8" stroke-linecap="round"/>
        <line x1="0" y1="6"  x2="0" y2="20"  stroke="#10b981" stroke-width="1.8" stroke-linecap="round"/>
        <line x1="-6" y1="0" x2="-20" y2="0" stroke="#10b981" stroke-width="1.8" stroke-linecap="round"/>
        <line x1="6"  y1="0" x2="20"  y2="0" stroke="#10b981" stroke-width="1.8" stroke-linecap="round"/>
        <polygon points="0,-6 6,0 0,6 -6,0" fill="#059669"/>
        <circle cx="0"   cy="-20" r="3.5" fill="#10b981"/>
        <circle cx="0"   cy="20"  r="3.5" fill="#10b981"/>
        <circle cx="-20" cy="0"   r="3.5" fill="#059669"/>
        <circle cx="20"  cy="0"   r="3.5" fill="#059669"/>
        <!-- Label / back hint when expanded -->
        @if (!activeGraphCat()) {
          <text x="0" y="36" text-anchor="middle"
                font-family="'Segoe UI', sans-serif"
                font-size="10" font-weight="800" letter-spacing="3"
                fill="#10b981">AXON</text>
        } @else {
          <text x="0" y="62" text-anchor="middle"
                font-family="'Segoe UI', sans-serif"
                font-size="8.5" fill="#4b7a63">\u21A9 \u05D7\u05D6\u05D5\u05E8</text>
          <text x="0" y="36" text-anchor="middle"
                font-family="'Segoe UI', sans-serif"
                font-size="10" font-weight="800" letter-spacing="3"
                fill="#10b981">AXON</text>
        }
      </g>

    </svg>

    <!-- Graph legend (shown only in default view) -->
    @if (!activeGraphCat()) {
      <div class="graph-legend">
        <span class="legend-hint">\u05DC\u05D7\u05E5 \u05E2\u05DC \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 \u05DC\u05E6\u05E4\u05D9\u05D9\u05D4 \u05D1\u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD</span>
        <div class="legend-methods">
          @for (m of methods; track m) {
            <span class="legend-m" [style.background]="methodStyle(m).bg" [style.color]="methodStyle(m).color">
              {{ m }}
            </span>
          }
        </div>
      </div>
    }

    <!-- \u2500\u2500 Route Inspector Panel (right side, shows when a route is selected) \u2500\u2500 -->
    @if (selectedRouteGraph(); as insp) {
      <div class="route-inspector">
        <!-- Header -->
        <div class="insp-header">
          <span class="insp-method"
                [style.background]="methodStyle(getMethod(insp)).bg"
                [style.color]="methodStyle(getMethod(insp)).color">
            {{ getMethod(insp) }}
          </span>
          <code class="insp-path">{{ getPath(insp) }}</code>
          <button class="insp-close" (click)="selectedRouteGraph.set(null)">\u2715</button>
        </div>

        <div class="insp-body">
          <!-- Title -->
          @if (getTitle(insp)) {
            <div class="insp-title">{{ getTitle(insp) }}</div>
          }

          <!-- Auth + SP badges -->
          <div class="insp-meta">
            <span class="insp-auth" [class.insp-secured]="isAuth(insp)" [class.insp-public]="!isAuth(insp)">
              {{ isAuth(insp) ? '\u{1F512} JWT Required' : '\u{1F310} Public' }}
            </span>
            @if (insp.SpName) {
              <span class="insp-sp">SP: {{ insp.SpName }}</span>
            }
          </div>

          <!-- Description -->
          @if (getDesc(insp)) {
            <div class="insp-section">
              <div class="insp-section-label">Description</div>
              <p class="insp-desc">{{ getDesc(insp) }}</p>
            </div>
          }

          <!-- Path Params -->
          @if (pathParams(getPath(insp)).length) {
            <div class="insp-section">
              <div class="insp-section-label">Path Params</div>
              @for (pp of pathParams(getPath(insp)); track pp) {
                <div class="insp-path-param">
                  <code class="insp-pp-name">:{{ pp }}</code>
                  <span class="insp-pp-type">string</span>
                </div>
              }
            </div>
          }

          <!-- Request Schema -->
          @if (insp.ReqSchema && insp.ReqSchema.length) {
            <div class="insp-section">
              <div class="insp-section-label">Request Body</div>
              @for (p of insp.ReqSchema; track p.name) {
                <div class="insp-path-param">
                  <code class="insp-pp-name">{{ p.name }}</code>
                  <span class="insp-pp-type" [style.color]="getSchemaTypeColor(p.type)">{{ p.type }}</span>
                  @if (p.required) { <span class="insp-pp-req">*</span> }
                  @if (p.description) { <span class="insp-pp-desc">{{ p.description }}</span> }
                </div>
              }
            </div>
          }

          <!-- Response Object Tree -->
          <div class="insp-section insp-section-response">
            <div class="insp-section-label">
              Response Object
              @if (!insp.ResSchema) {
                <span class="insp-schema-missing-tag">undefined</span>
              }
            </div>

            @if (schemaNodes().length) {
              <div class="schema-tree">
                @for (node of schemaNodes(); track ($index + node.key + node.depth)) {
                  <div class="schema-node" [style.padding-left.px]="node.depth * 14 + 8">
                    <span class="schema-connector">{{ node.depth > 0 ? '\u2514' : '\u25B8' }}</span>
                    @if (node.key) {
                      <code class="schema-key">{{ node.key }}</code>
                    }
                    <span class="schema-type"
                          [style.background]="node.typeColor + '22'"
                          [style.color]="node.typeColor"
                          [style.borderColor]="node.typeColor + '44'">
                      {{ node.typeName }}
                    </span>
                    @if (node.preview) {
                      <span class="schema-preview">{{ node.preview }}</span>
                    }
                  </div>
                }
              </div>
            } @else {
              <div class="insp-no-schema">
                <code class="insp-schema-hint">&#123; success: boolean, data: any, message: string &#125;</code>
                <p class="insp-schema-desc">\u05D4\u05D2\u05D3\u05E8 Response Schema \u05D1\u05E2\u05E8\u05D9\u05DB\u05EA \u05D4-route</p>
              </div>
            }
          </div>

          <!-- Tags -->
          @if (insp.Tags && insp.Tags.length) {
            <div class="insp-tags">
              @for (tag of insp.Tags; track tag) {
                <span class="insp-tag">{{ tag }}</span>
              }
            </div>
          }

          <!-- Test button -->
          <button class="insp-test-btn" (click)="openInspectorTest(insp)">
            <mat-icon>play_circle</mat-icon>
            Test Route
          </button>
        </div>
      </div>
    }

    <!-- \u2500\u2500 Floating routes panel (visible when category is expanded) \u2500\u2500 -->
    @if (activeGraphCat(); as activeCat) {
      <div class="routes-float-panel">
        <div class="rfp-header">
          <div class="rfp-title-row">
            <span class="rfp-cat-dot" [style.background]="CAT_COLORS[activeCat] ?? '#64748b'"></span>
            <span class="rfp-title">{{ activeCat }}</span>
            <span class="rfp-count">{{ (activeGrouped()[activeCat] ?? []).length }}</span>
          </div>
          <button class="rfp-close" (click)="activeGraphCat.set(null)" title="\u05E1\u05D2\u05D5\u05E8">\u2715</button>
        </div>
        <div class="rfp-body">
          @for (r of (activeGrouped()[activeCat] ?? []); track routeKey(r)) {
            <div class="rfp-route"
                 [class.rfp-hovered]="hoveredRoute() === routeKey(r)"
                 [class.rfp-selected]="selectedRouteGraph() === r"
                 (mouseenter)="hoveredRoute.set(routeKey(r))"
                 (mouseleave)="hoveredRoute.set(null)"
                 (click)="selectRouteInGraph(r)">
              <span class="rfp-method"
                    [style.background]="methodStyle(getMethod(r)).bg"
                    [style.color]="methodStyle(getMethod(r)).color">
                {{ getMethod(r) }}
              </span>
              <span class="rfp-path">{{ getPath(r) }}</span>
              @if (getTitle(r)) {
                <span class="rfp-route-title">{{ getTitle(r) }}</span>
              }
            </div>
          }
        </div>
      </div>
    }
  </div>

  } @else {
  <div class="axon-body">

    @if (loading()) {
      <div class="axon-loading">
        <kendo-loader type="infinite-spinner" size="medium" themeColor="primary" />
        <span>\u05D8\u05D5\u05E2\u05DF routes...</span>
      </div>
    } @else if (error()) {
      <div class="axon-error">{{ error() }}</div>
    } @else if (Object.keys(filteredGrouped()).length === 0) {
      <div class="axon-empty">
        <div class="empty-icon">\u26A1</div>
        @if (viewMode() === 'project') {
          <h3>\u05D0\u05D9\u05DF routes \u05E2\u05D3\u05D9\u05D9\u05DF</h3>
          <p>\u05D4\u05D5\u05E1\u05E3 route \u05D9\u05D3\u05E0\u05D9\u05EA \u05D0\u05D5 \u05D9\u05D9\u05D1\u05D0 \u05D0\u05EA routes \u05D4\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4</p>
          <button class="btn-import" (click)="importPlatform()">
            <mat-icon>download</mat-icon> Sync Platform Routes
          </button>
        } @else {
          <h3>\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA</h3>
          <p>\u05E9\u05E0\u05D4 \u05D0\u05EA \u05D4\u05E4\u05D9\u05DC\u05D8\u05E8 \u05D0\u05D5 \u05E0\u05E7\u05D4 \u05D0\u05EA \u05D4\u05D7\u05D9\u05E4\u05D5\u05E9</p>
        }
      </div>
    } @else {

      @for (entry of (filteredGrouped() | keyvalue); track entry.key) {
        <!-- Category Section -->
        <div class="cat-section">
          <div class="cat-header">
            <div class="cat-dot"></div>
            <h3 class="cat-name">{{ entry.key }}</h3>
            <span class="cat-count">{{ entry.value.length }}</span>
            <div class="cat-line"></div>
          </div>

          <div class="routes-list">
            @for (r of entry.value; track routeKey(r)) {

              <!-- Route Row -->
              <div class="route-card" [class.expanded]="isExpanded(r)"
                   (click)="toggleExpand(r)">

                <!-- \u2500\u2500 Collapsed header \u2500\u2500 -->
                <div class="route-row">
                  <span class="method-badge"
                        [style.background]="methodStyle(getMethod(r)).bg"
                        [style.color]="methodStyle(getMethod(r)).color">
                    {{ getMethod(r) }}
                  </span>

                  <code class="route-path">{{ getPath(r) }}</code>

                  <span class="route-title">{{ getTitle(r) }}</span>

                  <div class="route-meta">
                    @if (isAuth(r)) {
                      <span class="badge-auth" title="\u05DE\u05D5\u05D2\u05DF \u2014 \u05E0\u05D3\u05E8\u05E9 JWT">
                        <mat-icon>lock</mat-icon>
                      </span>
                    } @else {
                      <span class="badge-pub" title="\u05E6\u05D9\u05D1\u05D5\u05E8\u05D9 \u2014 \u05DC\u05DC\u05D0 auth">
                        <mat-icon>public</mat-icon>
                      </span>
                    }
                    @if (r.SpName) {
                      <span class="badge-sp" title="Stored Procedure: {{ r.SpName }}">
                        <mat-icon>data_object</mat-icon> SP
                      </span>
                    }
                    @for (tag of (r.Tags ?? []); track tag) {
                      <span class="route-tag">{{ tag }}</span>
                    }
                  </div>

                  <div class="route-actions" (click)="$event.stopPropagation()">
                    <button class="btn-icon btn-test" (click)="toggleTest(r)" title="\u05D1\u05D3\u05D5\u05E7">
                      <mat-icon>play_arrow</mat-icon>
                    </button>
                    @if (viewMode() === 'project' && r.RouteID) {
                      <button class="btn-icon" (click)="openEdit(r, $event)" title="\u05E2\u05E8\u05D5\u05DA">
                        <mat-icon>edit</mat-icon>
                      </button>
                      <button class="btn-icon btn-del" (click)="deleteRoute(r, $event)" title="\u05DE\u05D7\u05E7">
                        <mat-icon>delete</mat-icon>
                      </button>
                    }
                  </div>

                  <mat-icon class="expand-arrow" [class.open]="isExpanded(r)">
                    expand_more
                  </mat-icon>
                </div>

                <!-- \u2500\u2500 Expanded detail \u2500\u2500 -->
                @if (isExpanded(r)) {
                  <div class="route-detail" (click)="$event.stopPropagation()">

                    <div class="detail-grid">

                      <!-- Description -->
                      @if (getDesc(r)) {
                        <div class="detail-block full-width">
                          <div class="detail-label">\u05EA\u05D9\u05D0\u05D5\u05E8</div>
                          <p class="detail-desc">{{ getDesc(r) }}</p>
                        </div>
                      }

                      <!-- Request Params (only for DB routes) -->
                      @if (r.ReqSchema) {
                        <div class="detail-block">
                          <div class="detail-label">
                            <mat-icon>input</mat-icon> \u05E4\u05E8\u05DE\u05D8\u05E8\u05D9 \u05E7\u05DC\u05D8 (Request)
                          </div>
                          @if (r.ReqSchema.length) {
                            <table class="param-table">
                              <thead>
                                <tr><th>\u05E9\u05DD</th><th>\u05E1\u05D5\u05D2</th><th>\u05D7\u05D5\u05D1\u05D4</th><th>\u05EA\u05D9\u05D0\u05D5\u05E8</th><th>\u05D3\u05D5\u05D2\u05DE\u05D4</th></tr>
                              </thead>
                              <tbody>
                                @for (p of r.ReqSchema; track p.name) {
                                  <tr>
                                    <td><code class="param-name">{{ p.name }}</code></td>
                                    <td><span class="type-badge">{{ p.type }}</span></td>
                                    <td>
                                      @if (p.required) { <span class="req-yes">\u2713</span> }
                                      @else { <span class="req-no">\u2014</span> }
                                    </td>
                                    <td class="param-desc">{{ p.description }}</td>
                                    <td><code class="param-example">{{ p.example }}</code></td>
                                  </tr>
                                }
                              </tbody>
                            </table>
                          } @else {
                            <p class="no-params">\u05D0\u05D9\u05DF \u05E4\u05E8\u05DE\u05D8\u05E8\u05D9\u05DD \u05DE\u05D5\u05D2\u05D3\u05E8\u05D9\u05DD</p>
                          }
                        </div>
                      }

                      <!-- Path params (auto-detected from path) -->
                      @if (pathParams(getPath(r)).length) {
                        <div class="detail-block">
                          <div class="detail-label"><mat-icon>route</mat-icon> Path Params</div>
                          <div class="path-params-badges">
                            @for (pp of pathParams(getPath(r)); track pp) {
                              <code class="pp-badge">:{{ pp }}</code>
                            }
                          </div>
                        </div>
                      }

                      <!-- Response Schema -->
                      @if (r.ResSchema) {
                        <div class="detail-block">
                          <div class="detail-label"><mat-icon>output</mat-icon> \u05DE\u05D1\u05E0\u05D4 \u05EA\u05D2\u05D5\u05D1\u05D4 (Response)</div>
                          <pre class="res-schema">{{ formatBody(r.ResSchema) }}</pre>
                        </div>
                      }

                      <!-- SP + Auth info -->
                      <div class="detail-block info-block">
                        @if (r.SpName) {
                          <div class="info-row">
                            <mat-icon>data_object</mat-icon>
                            <span class="info-label">Stored Procedure</span>
                            <code class="info-val sp-name">{{ r.SpName }}</code>
                          </div>
                        }
                        <div class="info-row">
                          <mat-icon>{{ isAuth(r) ? 'lock' : 'lock_open' }}</mat-icon>
                          <span class="info-label">\u05D0\u05D9\u05DE\u05D5\u05EA</span>
                          <span class="info-val" [class.auth-yes]="isAuth(r)" [class.auth-no]="!isAuth(r)">
                            {{ isAuth(r) ? 'JWT \u05E0\u05D3\u05E8\u05E9' : '\u05E6\u05D9\u05D1\u05D5\u05E8\u05D9' }}
                          </span>
                        </div>
                        @if (r.RouteToken) {
                          <div class="info-row">
                            <mat-icon>tag</mat-icon>
                            <span class="info-label">Token</span>
                            <code class="info-val token-mini">{{ r.RouteToken }}</code>
                          </div>
                        }
                        <div class="info-row">
                          <mat-icon>link</mat-icon>
                          <span class="info-label">Full Path</span>
                          <code class="info-val full-path">{{ getPath(r) }}</code>
                        </div>
                      </div>
                    </div>

                    <!-- \u2500\u2500 TEST Panel \u2500\u2500 -->
                    @if (isTesting(r)) {
                      <div class="test-panel">
                        <div class="test-panel-title">
                          <mat-icon>play_circle</mat-icon> \u05D1\u05D3\u05D9\u05E7\u05EA Route \u05D7\u05D9
                          <span class="method-badge-sm" [style.background]="methodStyle(getMethod(r)).bg"
                                [style.color]="methodStyle(getMethod(r)).color">{{ getMethod(r) }}</span>
                          <code class="test-path-preview">{{ getPath(r) }}</code>
                        </div>

                        <div class="test-controls">
                          <!-- Base URL -->
                          <div class="test-row">
                            <label>Base URL</label>
                            <input class="test-input" type="text"
                                   [value]="testBaseUrl()"
                                   (input)="testBaseUrl.set($any($event.target).value)"
                                   dir="ltr" placeholder="http://localhost:3000" />
                          </div>

                          <!-- Path params -->
                          @if (pathParams(getPath(r)).length) {
                            <div class="test-row">
                              <label>Path Params</label>
                              <div class="path-params-grid">
                                @for (param of pathParams(getPath(r)); track param) {
                                  <div class="path-param-row">
                                    <code class="pp-name">:{{ param }}</code>
                                    <input class="test-input pp-val" type="text"
                                           [value]="testPathParams()[param] ?? ''"
                                           (input)="setPathParam(param, $any($event.target).value)"
                                           [placeholder]="param" dir="ltr" />
                                  </div>
                                }
                              </div>
                            </div>
                          }

                          <!-- Headers -->
                          <div class="test-row">
                            <label>
                              Headers
                              <button class="btn-add-header" type="button" (click)="addHeader()">+</button>
                            </label>
                            <div class="headers-list">
                              @for (h of testHeaders(); track $index) {
                                <div class="header-row">
                                  <input class="test-input hdr-key" type="text" placeholder="key"
                                         [value]="h.key"
                                         (input)="setHeaderVal($index, 'key', $any($event.target).value)" dir="ltr"/>
                                  <span class="hdr-colon">:</span>
                                  <input class="test-input hdr-val" type="text" placeholder="value"
                                         [value]="h.value"
                                         (input)="setHeaderVal($index, 'value', $any($event.target).value)" dir="ltr"/>
                                  <button class="btn-rm-hdr" (click)="removeHeader($index)">\u2715</button>
                                </div>
                              }
                            </div>
                          </div>

                          <!-- Body \u2014 only for POST/PUT/PATCH -->
                          @if (getMethod(r) === 'POST' || getMethod(r) === 'PUT' || getMethod(r) === 'PATCH') {
                            <div class="test-row">
                              <label>Request Body (JSON)</label>
                              <textarea class="test-textarea" rows="5" dir="ltr"
                                        [value]="testBody()"
                                        (input)="testBody.set($any($event.target).value)"
                                        placeholder='{ "key": "value" }'></textarea>
                            </div>
                          }

                          <button class="btn-run-test" (click)="runTest(r)" [disabled]="testRunning()">
                            @if (testRunning()) {
                              <kendo-loader type="pulsing" size="small" themeColor="primary" />
                            } @else {
                              <mat-icon>send</mat-icon>
                            }
                            \u05D4\u05E4\u05E2\u05DC \u05D1\u05D3\u05D9\u05E7\u05D4
                          </button>
                        </div>

                        <!-- Test Result -->
                        @if (testResult(); as res) {
                          <div class="test-result"
                               [class.res-ok]="res.status >= 200 && res.status < 300"
                               [class.res-err]="res.status >= 400 || res.status === 0">
                            <div class="res-header">
                              @if (res.error) {
                                <span class="res-status status-err">ERR</span>
                                <span class="res-msg">{{ res.error }}</span>
                              } @else {
                                <span class="res-status" [class]="statusClass(res.status)">{{ res.status }}</span>
                                <span class="res-duration">{{ res.duration }}ms</span>
                              }
                            </div>
                            @if (res.body !== null && res.body !== undefined) {
                              <pre class="res-body">{{ formatBody(res.body) }}</pre>
                            }
                          </div>
                        }
                      </div>
                    }

                  </div>
                }

              </div>
            }
          </div>
        </div>
      }

    }
  </div>
  } <!-- end @else list -->

</div>

<!-- \u2500\u2500 Add / Edit Dialog (project mode only) \u2500\u2500 -->
@if (dialogOpen()) {
  <kendo-dialog
    [title]="editRoute() ? '\u05E2\u05E8\u05D9\u05DB\u05EA Route' : 'Route \u05D7\u05D3\u05E9'"
    [width]="700" [minWidth]="500"
    (close)="closeDialog()">

    <form [formGroup]="form" class="route-form">

      @if (dialogError()) {
        <div class="form-error">{{ dialogError() }}</div>
      }

      <!-- Row 1: Method + Path -->
      <div class="form-row two-col">
        <div class="form-group">
          <label>Method</label>
          <div class="method-seg">
            @for (m of methods; track m) {
              <button type="button" class="method-btn"
                      [style.background]="form.value.method === m ? methodStyle(m).bg : ''"
                      [style.color]="form.value.method === m ? methodStyle(m).color : ''"
                      [class.active]="form.value.method === m"
                      (click)="form.get('method')?.setValue(m)">{{ m }}</button>
            }
          </div>
        </div>
        <div class="form-group path-group">
          <label>Path <span class="req">*</span></label>
          <input class="form-input" formControlName="path" placeholder="/api/resource/:id" dir="ltr" />
        </div>
      </div>

      <!-- Row 2: Category + Title -->
      <div class="form-row two-col">
        <div class="form-group">
          <label>\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4</label>
          <input class="form-input" formControlName="category" placeholder="\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: Users, Auth, Products" />
        </div>
        <div class="form-group">
          <label>\u05DB\u05D5\u05EA\u05E8\u05EA</label>
          <input class="form-input" formControlName="title" placeholder="\u05EA\u05D9\u05D0\u05D5\u05E8 \u05E7\u05E6\u05E8 \u05D1\u05E2\u05D1\u05E8\u05D9\u05EA" />
        </div>
      </div>

      <!-- Description -->
      <div class="form-group">
        <label>\u05EA\u05D9\u05D0\u05D5\u05E8</label>
        <textarea class="form-input" formControlName="description" rows="2" placeholder="\u05DE\u05D4 \u05E2\u05D5\u05E9\u05D4 \u05D4-route \u05D4\u05D6\u05D4?"></textarea>
      </div>

      <!-- SP + Auth -->
      <div class="form-row two-col">
        <div class="form-group">
          <label>Stored Procedure</label>
          <input class="form-input" formControlName="spName" placeholder="dbo.sp_EntitySave" dir="ltr" />
        </div>
        <div class="form-group">
          <label>\u05D0\u05D9\u05DE\u05D5\u05EA</label>
          <div class="seg-ctrl">
            <button type="button" class="seg-btn" [class.seg-on]="form.get('authRequired')?.value"
                    (click)="form.get('authRequired')?.setValue(true)">\u{1F512} \u05DE\u05D5\u05D2\u05DF</button>
            <button type="button" class="seg-btn" [class.seg-off]="!form.get('authRequired')?.value"
                    (click)="form.get('authRequired')?.setValue(false)">\u{1F310} \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9</button>
          </div>
        </div>
      </div>

      <!-- Tags -->
      <div class="form-group">
        <label>\u05EA\u05D2\u05D9\u05D5\u05EA (\u05DE\u05D5\u05E4\u05E8\u05D3\u05D5\u05EA \u05D1\u05E4\u05E1\u05D9\u05E7)</label>
        <input class="form-input" formControlName="tags" placeholder="auth, public, admin" dir="ltr" />
      </div>

      <!-- Request Params -->
      <div class="params-section">
        <div class="params-header">
          <mat-icon>input</mat-icon>
          <span>\u05E4\u05E8\u05DE\u05D8\u05E8\u05D9 \u05E7\u05DC\u05D8 (Request)</span>
          <button type="button" class="btn-add-param" (click)="addParam()">
            <mat-icon>add</mat-icon> \u05D4\u05D5\u05E1\u05E3 \u05E4\u05E8\u05DE\u05D8\u05E8
          </button>
        </div>

        @if (reqParams.length) {
          <div class="params-table-wrap" formArrayName="reqParams">
            <table class="params-edit-table">
              <thead>
                <tr><th>\u05E9\u05DD</th><th>\u05E1\u05D5\u05D2</th><th>\u05D7\u05D5\u05D1\u05D4</th><th>\u05EA\u05D9\u05D0\u05D5\u05E8</th><th>\u05D3\u05D5\u05D2\u05DE\u05D4</th><th></th></tr>
              </thead>
              <tbody>
                @for (p of reqParams.controls; track $index) {
                  <tr [formGroupName]="$index">
                    <td><input class="form-input-sm" formControlName="name" placeholder="paramName" dir="ltr"/></td>
                    <td>
                      <select class="form-input-sm" formControlName="type">
                        @for (t of paramTypes; track t) {
                          <option [value]="t">{{ t }}</option>
                        }
                      </select>
                    </td>
                    <td class="td-center">
                      <input type="checkbox" formControlName="required" />
                    </td>
                    <td><input class="form-input-sm" formControlName="description" placeholder="\u05EA\u05D9\u05D0\u05D5\u05E8"/></td>
                    <td><input class="form-input-sm" formControlName="example" placeholder="\u05D3\u05D5\u05D2\u05DE\u05D4" dir="ltr"/></td>
                    <td>
                      <button type="button" class="btn-rm-param" (click)="removeParam($index)">\u2715</button>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }
      </div>

      <!-- Response Schema -->
      <div class="form-group">
        <label><mat-icon>output</mat-icon> \u05DE\u05D1\u05E0\u05D4 \u05EA\u05D2\u05D5\u05D1\u05D4 (JSON)</label>
        <textarea class="form-input res-schema-input" formControlName="resSchema"
                  rows="4" dir="ltr"
                  placeholder='{ "success": true, "data": { "id": 1, "name": "..." } }'></textarea>
      </div>

    </form>

    <kendo-dialog-actions>
      <div class="dialog-footer">
        <button class="btn-save" (click)="save()" [disabled]="saving()">
          @if (saving()) { <kendo-loader type="pulsing" size="small" /> } @else { \u2713 }
          \u05E9\u05DE\u05D5\u05E8
        </button>
        <button class="btn-cancel" (click)="closeDialog()">\u05D1\u05D9\u05D8\u05D5\u05DC</button>
      </div>
    </kendo-dialog-actions>
  </kendo-dialog>
}
`, styles: ['/* src/app/features/projects/workspace/axon/axon.component.scss */\n:host {\n  display: block;\n  height: 100vh;\n  overflow: hidden;\n}\n.axon-root {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: var(--sf-bg);\n  direction: rtl;\n  font-family:\n    "Noto Sans Hebrew",\n    "Segoe UI",\n    sans-serif;\n}\n.axon-toolbar {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 12px 28px;\n  background: var(--sf-bg-card);\n  border-bottom: 1px solid var(--sf-border);\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n  flex-shrink: 0;\n  direction: rtl;\n}\n.back-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--sf-text-secondary);\n  font-size: 0.82rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  padding: 6px 10px;\n  border-radius: 7px;\n  transition: background 0.13s, color 0.13s;\n  flex-shrink: 0;\n}\n.back-btn mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  transform: scaleX(-1);\n}\n.back-btn:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.axon-brand {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  flex-shrink: 0;\n}\n.axon-brand .brand-tag {\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.18em;\n  font-family: "Share Tech Mono", monospace;\n  color: #059669;\n  background: #d1fae5;\n  border-radius: 4px;\n  padding: 2px 8px;\n  display: inline-block;\n}\n.axon-brand .brand-sub {\n  font-size: 0.68rem;\n  color: var(--sf-text-muted);\n  font-family: "Share Tech Mono", monospace;\n  letter-spacing: 0.06em;\n  padding-right: 2px;\n}\n.stats-bar {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.stat-chip {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  font-family: "Share Tech Mono", monospace;\n  border: 1px solid transparent;\n}\n.stat-chip mat-icon {\n  font-size: 12px;\n  width: 12px;\n  height: 12px;\n}\n.stat-chip.chip-total {\n  background: #f1f5f9;\n  color: #475569;\n  border-color: #e2e8f0;\n}\n.stat-chip.chip-total .chip-num {\n  font-size: 0.9rem;\n  margin-left: 3px;\n}\n.stat-chip.chip-total .chip-lbl {\n  font-size: 0.65rem;\n  color: #94a3b8;\n}\n.stat-chip.chip-get {\n  background: #d1fae5;\n  color: #065f46;\n  border-color: #6ee7b7;\n}\n.stat-chip.chip-post {\n  background: #dbeafe;\n  color: #1e40af;\n  border-color: #93c5fd;\n}\n.stat-chip.chip-put {\n  background: #fef3c7;\n  color: #92400e;\n  border-color: #fcd34d;\n}\n.stat-chip.chip-delete {\n  background: #fee2e2;\n  color: #991b1b;\n  border-color: #fca5a5;\n}\n.stat-chip.chip-patch {\n  background: #ede9fe;\n  color: #5b21b6;\n  border-color: #c4b5fd;\n}\n.stat-chip.chip-sec {\n  background: #ede9fe;\n  color: #5b21b6;\n  border-color: #c4b5fd;\n}\n.stat-chip.chip-pub {\n  background: #f0fdf4;\n  color: #166534;\n  border-color: #86efac;\n}\n.mode-toggle {\n  display: flex;\n  border: 1px solid var(--sf-border);\n  border-radius: 9px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.mode-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border: none;\n  background: var(--sf-bg);\n  color: var(--sf-text-secondary);\n  font-size: 0.78rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.mode-btn mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.mode-btn + .mode-btn {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.mode-btn:hover:not(.active) {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.mode-btn.active {\n  background: #059669;\n  color: #fff;\n}\n.btn-import {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 9px;\n  background: #eff6ff;\n  color: #1d4ed8;\n  border: 1px solid #93c5fd;\n  font-size: 0.78rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-import mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.btn-import:hover:not(:disabled) {\n  background: #1d4ed8;\n  color: #fff;\n  border-color: #1d4ed8;\n}\n.btn-import:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.import-toast {\n  font-size: 0.78rem;\n  color: #059669;\n  font-weight: 600;\n  background: #d1fae5;\n  border-radius: 6px;\n  padding: 4px 10px;\n  animation: fadeIn 0.3s ease;\n}\n.toolbar-end {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.btn-new-route {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border-radius: 9px;\n  background: #059669;\n  color: #fff;\n  border: none;\n  font-size: 0.82rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-new-route mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn-new-route:hover {\n  background: #047857;\n}\n.axon-logo-wrap {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  direction: ltr;\n  margin-right: auto;\n}\n.axon-logo {\n  height: 52px;\n  width: auto;\n  display: block;\n}\n.axon-controls {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 12px 28px;\n  background: var(--sf-bg-card);\n  border-bottom: 1px solid var(--sf-border);\n  flex-shrink: 0;\n  direction: rtl;\n}\n.search-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex: 1;\n  max-width: 400px;\n}\n.search-icon {\n  position: absolute;\n  right: 10px;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--sf-text-muted);\n}\n.search-input {\n  width: 100%;\n  padding: 8px 36px 8px 12px;\n  border: 1px solid var(--sf-border);\n  border-radius: 9px;\n  background: var(--sf-bg);\n  color: var(--sf-text);\n  font-size: 0.84rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n.search-input:focus {\n  outline: none;\n  border-color: #059669;\n  box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.1);\n}\n.cat-pills {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.cat-pill {\n  padding: 5px 14px;\n  border-radius: 20px;\n  border: 1px solid var(--sf-border);\n  background: var(--sf-bg);\n  color: var(--sf-text-secondary);\n  font-size: 0.78rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.cat-pill:hover {\n  border-color: #059669;\n  color: #059669;\n}\n.cat-pill.active {\n  background: #059669;\n  color: #fff;\n  border-color: #059669;\n  font-weight: 600;\n}\n.axon-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px 28px;\n  scrollbar-width: thin;\n  scrollbar-color: var(--sf-border) transparent;\n}\n.axon-loading,\n.axon-error {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 80px;\n  color: var(--sf-text-muted);\n}\n.axon-error {\n  color: #dc2626;\n}\n.axon-empty {\n  text-align: center;\n  padding: 80px;\n}\n.axon-empty .empty-icon {\n  font-size: 3rem;\n  margin-bottom: 12px;\n}\n.axon-empty h3 {\n  font-size: 1.1rem;\n  color: var(--sf-text);\n  margin: 0 0 6px;\n}\n.axon-empty p {\n  font-size: 0.85rem;\n  color: var(--sf-text-muted);\n  margin-bottom: 20px;\n}\n.cat-section {\n  margin-bottom: 28px;\n}\n.cat-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.cat-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #059669;\n  flex-shrink: 0;\n}\n.cat-name {\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  color: var(--sf-text);\n  text-transform: uppercase;\n  font-family: "Share Tech Mono", monospace;\n  margin: 0;\n}\n.cat-count {\n  font-size: 0.72rem;\n  color: var(--sf-text-muted);\n  background: var(--sf-bg-hover);\n  border-radius: 10px;\n  padding: 1px 8px;\n}\n.cat-line {\n  flex: 1;\n  height: 1px;\n  background: var(--sf-border);\n}\n.routes-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.route-card {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 10px;\n  overflow: hidden;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  cursor: pointer;\n}\n.route-card:hover {\n  border-color: #6ee7b7;\n  box-shadow: 0 2px 12px rgba(5, 150, 105, 0.08);\n}\n.route-card.expanded {\n  border-color: #059669;\n  box-shadow: 0 4px 20px rgba(5, 150, 105, 0.12);\n}\n.route-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n}\n.method-badge {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 6px;\n  flex-shrink: 0;\n  min-width: 58px;\n  text-align: center;\n  letter-spacing: 0.04em;\n}\n.route-path {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.84rem;\n  color: var(--sf-text);\n  flex-shrink: 0;\n  min-width: 200px;\n}\n.route-title {\n  font-size: 0.82rem;\n  color: var(--sf-text-secondary);\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.route-meta {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.badge-auth,\n.badge-pub {\n  display: flex;\n  align-items: center;\n}\n.badge-auth mat-icon,\n.badge-pub mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.badge-auth {\n  color: #7c3aed;\n}\n.badge-pub {\n  color: #059669;\n}\n.badge-sp {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: #0891b2;\n  background: #e0f2fe;\n  border-radius: 4px;\n  padding: 2px 6px;\n}\n.badge-sp mat-icon {\n  font-size: 12px;\n  width: 12px;\n  height: 12px;\n}\n.route-tag {\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  color: var(--sf-text-muted);\n  background: var(--sf-bg-hover);\n  border-radius: 4px;\n  padding: 2px 6px;\n}\n.route-actions {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.btn-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 7px;\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--sf-text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-icon mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.btn-icon:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n  border-color: var(--sf-border);\n}\n.btn-icon.btn-del:hover {\n  background: #fef2f2;\n  color: #ef4444;\n  border-color: #fca5a5;\n}\n.expand-arrow {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: var(--sf-text-muted);\n  flex-shrink: 0;\n  transition: transform 0.2s;\n}\n.expand-arrow.open {\n  transform: rotate(180deg);\n}\n.route-detail {\n  border-top: 1px solid var(--sf-border);\n  background: var(--sf-bg);\n  padding: 20px 20px 0;\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n@media (max-width: 900px) {\n  .detail-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.detail-block {\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 9px;\n  padding: 14px 16px;\n}\n.detail-block.full-width {\n  grid-column: 1/-1;\n}\n.detail-label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--sf-text-muted);\n  margin-bottom: 10px;\n}\n.detail-label mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.detail-desc {\n  font-size: 0.84rem;\n  color: var(--sf-text-secondary);\n  line-height: 1.6;\n  margin: 0;\n}\n.param-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.78rem;\n}\n.param-table th {\n  text-align: right;\n  padding: 6px 8px;\n  color: var(--sf-text-muted);\n  font-weight: 700;\n  border-bottom: 1px solid var(--sf-border);\n  font-size: 0.7rem;\n}\n.param-table td {\n  padding: 7px 8px;\n  border-bottom: 1px solid var(--sf-bg-hover);\n  vertical-align: middle;\n}\n.param-table tr:last-child td {\n  border-bottom: none;\n}\n.param-name {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n  color: #1d4ed8;\n  background: #eff6ff;\n  border-radius: 4px;\n  padding: 2px 6px;\n}\n.type-badge {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.7rem;\n  color: #7c3aed;\n  background: #ede9fe;\n  border-radius: 4px;\n  padding: 2px 6px;\n}\n.req-yes {\n  color: #059669;\n  font-weight: 700;\n}\n.req-no {\n  color: var(--sf-text-muted);\n}\n.param-desc {\n  color: var(--sf-text-secondary);\n}\n.param-example {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.75rem;\n  color: var(--sf-text-muted);\n}\n.no-params {\n  font-size: 0.8rem;\n  color: var(--sf-text-muted);\n  margin: 0;\n}\n.res-schema {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.75rem;\n  color: var(--sf-text);\n  background: var(--sf-bg);\n  border-radius: 7px;\n  border: 1px solid var(--sf-border);\n  padding: 10px 12px;\n  margin: 0;\n  overflow-x: auto;\n  white-space: pre-wrap;\n  max-height: 180px;\n  overflow-y: auto;\n}\n.info-block {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.info-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.82rem;\n}\n.info-row mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: var(--sf-text-muted);\n}\n.info-label {\n  color: var(--sf-text-muted);\n  font-size: 0.75rem;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.info-val {\n  color: var(--sf-text);\n  font-size: 0.82rem;\n}\n.sp-name {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n  color: #0891b2;\n  background: #e0f2fe;\n  border-radius: 4px;\n  padding: 2px 8px;\n}\n.auth-yes {\n  color: #7c3aed;\n  font-weight: 600;\n}\n.auth-no {\n  color: #059669;\n  font-weight: 600;\n}\n.token-mini {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.66rem;\n  color: var(--sf-text-muted);\n}\n.full-path {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n  color: var(--sf-text);\n  word-break: break-all;\n}\n.path-params-badges {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 4px;\n}\n.pp-badge {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n  color: #1d4ed8;\n  background: #eff6ff;\n  border-radius: 6px;\n  padding: 3px 10px;\n  border: 1px solid #bfdbfe;\n}\n.method-badge-sm {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.68rem;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 5px;\n  flex-shrink: 0;\n}\n.test-path-preview {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n  color: var(--sf-text-secondary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.hdr-colon {\n  color: var(--sf-text-muted);\n  font-weight: 600;\n}\n.btn-test:hover {\n  background: #d1fae5 !important;\n  color: #059669 !important;\n  border-color: #6ee7b7 !important;\n}\n.cat-pill mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  vertical-align: middle;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.test-panel {\n  background: #f0fdf4;\n  border: 1px solid #6ee7b7;\n  border-radius: 10px;\n  padding: 18px 20px;\n  margin: 0 -4px 20px;\n}\n.test-panel-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #065f46;\n  margin-bottom: 14px;\n}\n.test-panel-title mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.test-controls {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.test-row {\n  display: grid;\n  grid-template-columns: 120px 1fr;\n  gap: 10px;\n  align-items: start;\n}\n.test-row label {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #065f46;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding-top: 6px;\n}\n.test-input {\n  padding: 7px 10px;\n  border: 1px solid #a7f3d0;\n  border-radius: 7px;\n  background: #fff;\n  color: var(--sf-text);\n  font-size: 0.82rem;\n  font-family: "Share Tech Mono", monospace;\n}\n.test-input:focus {\n  outline: none;\n  border-color: #059669;\n}\n.path-params-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.path-param-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pp-name {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n  color: #1d4ed8;\n  background: #eff6ff;\n  border-radius: 4px;\n  padding: 3px 8px;\n  flex-shrink: 0;\n}\n.pp-val {\n  flex: 1;\n}\n.headers-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.header-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.hdr-key {\n  width: 160px;\n  flex-shrink: 0;\n}\n.hdr-val {\n  flex: 1;\n}\n.btn-rm-hdr {\n  width: 24px;\n  height: 24px;\n  border-radius: 5px;\n  border: 1px solid #fca5a5;\n  background: #fef2f2;\n  color: #ef4444;\n  cursor: pointer;\n  font-size: 0.8rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.btn-rm-hdr:hover {\n  background: #ef4444;\n  color: #fff;\n}\n.btn-add-header {\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  border: 1px solid #6ee7b7;\n  background: #d1fae5;\n  color: #059669;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 0.8rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 6px;\n}\n.test-textarea {\n  width: 100%;\n  padding: 8px 10px;\n  border: 1px solid #a7f3d0;\n  border-radius: 7px;\n  background: #fff;\n  color: var(--sf-text);\n  font-size: 0.78rem;\n  font-family: "Share Tech Mono", monospace;\n  resize: vertical;\n  box-sizing: border-box;\n}\n.test-textarea:focus {\n  outline: none;\n  border-color: #059669;\n}\n.btn-run-test {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 22px;\n  border-radius: 9px;\n  background: #059669;\n  color: #fff;\n  border: none;\n  font-size: 0.84rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: background 0.15s;\n  align-self: flex-start;\n}\n.btn-run-test mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn-run-test kendo-loader {\n  display: inline-flex;\n}\n.btn-run-test:hover:not(:disabled) {\n  background: #047857;\n}\n.btn-run-test:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.test-result {\n  margin-top: 12px;\n  border-radius: 9px;\n  overflow: hidden;\n  border: 1px solid var(--sf-border);\n}\n.test-result.res-ok {\n  border-color: #6ee7b7;\n}\n.test-result.res-err {\n  border-color: #fca5a5;\n}\n.res-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 14px;\n  background: var(--sf-bg-card);\n  border-bottom: 1px solid var(--sf-border);\n}\n.res-status {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.82rem;\n  font-weight: 700;\n  padding: 2px 10px;\n  border-radius: 6px;\n}\n.res-status.status-ok {\n  background: #d1fae5;\n  color: #065f46;\n}\n.res-status.status-warn {\n  background: #fef3c7;\n  color: #92400e;\n}\n.res-status.status-err {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.res-status.status-none {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.res-duration {\n  font-size: 0.78rem;\n  color: var(--sf-text-muted);\n  font-family: "Share Tech Mono", monospace;\n}\n.res-msg {\n  font-size: 0.82rem;\n  color: #dc2626;\n}\n.res-body {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.75rem;\n  color: var(--sf-text);\n  background: var(--sf-bg);\n  padding: 12px 14px;\n  margin: 0;\n  max-height: 240px;\n  overflow-y: auto;\n  white-space: pre-wrap;\n}\n.route-form {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  direction: rtl;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.form-error {\n  padding: 10px 14px;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  color: #dc2626;\n  font-size: 0.82rem;\n}\n.form-row {\n  display: flex;\n  gap: 14px;\n}\n.form-row.two-col > * {\n  flex: 1;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.path-group {\n  flex: 2;\n}\n.form-group label {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.form-group label mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.form-input {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  background: var(--sf-bg-card);\n  color: var(--sf-text);\n  font-size: 0.85rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  box-sizing: border-box;\n  direction: rtl;\n}\n.form-input:focus {\n  outline: none;\n  border-color: #059669;\n  box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.1);\n}\ninput[dir=ltr].form-input,\ntextarea[dir=ltr].form-input {\n  direction: ltr;\n  text-align: left;\n}\n.method-seg {\n  display: flex;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.method-btn {\n  flex: 1;\n  padding: 7px 4px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  font-family: "Share Tech Mono", monospace;\n  border: none;\n  border-right: 1px solid var(--sf-border);\n  background: var(--sf-bg);\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.method-btn:last-child {\n  border-right: none;\n}\n.method-btn.active {\n  font-weight: 800;\n}\n.method-btn:hover:not(.active) {\n  background: var(--sf-bg-hover);\n}\n.seg-ctrl {\n  display: inline-flex;\n  direction: rtl;\n  align-self: flex-start;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.seg-btn {\n  padding: 7px 16px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  border: none;\n  background: var(--sf-bg);\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.seg-btn + .seg-btn {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.seg-btn.seg-on {\n  background: #059669;\n  color: #fff;\n  font-weight: 600;\n}\n.seg-btn.seg-off {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text-muted);\n}\n.req {\n  color: #ef4444;\n}\n.params-section {\n  background: var(--sf-bg);\n  border: 1px solid var(--sf-border);\n  border-radius: 9px;\n  overflow: hidden;\n}\n.params-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--sf-border);\n  background: var(--sf-bg-hover);\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--sf-text-secondary);\n}\n.params-header mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.btn-add-param {\n  margin-right: auto;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 12px;\n  border-radius: 6px;\n  border: 1px solid #6ee7b7;\n  background: #d1fae5;\n  color: #059669;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-add-param mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.btn-add-param:hover {\n  background: #059669;\n  color: #fff;\n}\n.params-table-wrap {\n  overflow-x: auto;\n}\n.params-edit-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.78rem;\n}\n.params-edit-table th {\n  text-align: right;\n  padding: 8px 8px;\n  color: var(--sf-text-muted);\n  font-size: 0.7rem;\n  font-weight: 700;\n  border-bottom: 1px solid var(--sf-border);\n}\n.params-edit-table td {\n  padding: 6px 6px;\n  border-bottom: 1px solid var(--sf-bg-hover);\n}\n.params-edit-table tr:last-child td {\n  border-bottom: none;\n}\n.params-edit-table .td-center {\n  text-align: center;\n}\n.form-input-sm {\n  padding: 5px 8px;\n  border: 1px solid var(--sf-border);\n  border-radius: 6px;\n  background: var(--sf-bg-card);\n  color: var(--sf-text);\n  font-size: 0.78rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-input-sm:focus {\n  outline: none;\n  border-color: #059669;\n}\n.btn-rm-param {\n  width: 22px;\n  height: 22px;\n  border-radius: 5px;\n  border: 1px solid #fca5a5;\n  background: #fef2f2;\n  color: #ef4444;\n  cursor: pointer;\n  font-size: 0.8rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-rm-param:hover {\n  background: #ef4444;\n  color: #fff;\n}\n.res-schema-input {\n  font-family: "Share Tech Mono", monospace;\n  direction: ltr;\n  text-align: left;\n  resize: vertical;\n}\n.dialog-footer {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  direction: rtl;\n}\n.btn-save {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #f97316 !important;\n  color: #fff !important;\n  border: none !important;\n  border-radius: 9px !important;\n  padding: 9px 20px !important;\n  font-size: 0.87rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.3);\n  cursor: pointer;\n}\n.btn-save kendo-loader {\n  display: inline-flex;\n}\n.btn-save:hover:not(:disabled) {\n  background: #ea6c0a !important;\n}\n.btn-save:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.btn-cancel {\n  padding: 9px 20px;\n  border-radius: 9px;\n  border: 1px solid var(--sf-border) !important;\n  background: transparent;\n  color: var(--sf-text-secondary) !important;\n  font-size: 0.87rem;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.btn-cancel:hover {\n  background: var(--sf-bg-hover) !important;\n}\n:host ::ng-deep .k-dialog-actions {\n  direction: rtl !important;\n}\n.display-toggle {\n  display: flex;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.disp-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border: none;\n  background: var(--sf-bg);\n  color: var(--sf-text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.disp-btn mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.disp-btn + .disp-btn {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.disp-btn:hover:not(.active) {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.disp-btn.active {\n  background: #059669;\n  color: #fff;\n}\n.neural-wrap {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  position: relative;\n  background: #060f0a;\n}\n.neural-svg {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.axon-center-group {\n  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.center-ring-slow {\n  animation: spin-slow 18s linear infinite;\n  transform-box: fill-box;\n  transform-origin: center;\n}\n.center-ring-fast {\n  animation: spin-slow 10s linear infinite reverse;\n  transform-box: fill-box;\n  transform-origin: center;\n}\n@keyframes spin-slow {\n  from {\n    stroke-dashoffset: 0;\n  }\n  to {\n    stroke-dashoffset: -100;\n  }\n}\n.exp-ring-outer {\n  animation: exp-pulse 3s ease-in-out infinite;\n  transform-box: fill-box;\n  transform-origin: center;\n}\n.exp-ring-inner {\n  animation: exp-pulse 3s ease-in-out infinite 1s;\n  transform-box: fill-box;\n  transform-origin: center;\n}\n@keyframes exp-pulse {\n  0%, 100% {\n    opacity: 0.28;\n  }\n  50% {\n    opacity: 0.06;\n  }\n}\n.route-node {\n  transition: opacity 0.15s;\n}\n.cat-graph-node {\n  transition: opacity 0.15s ease;\n}\n.graph-legend {\n  position: absolute;\n  bottom: 16px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: rgba(6, 15, 10, 0.85);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border: 1px solid #1a3328;\n  border-radius: 24px;\n  padding: 8px 20px;\n  white-space: nowrap;\n}\n.legend-hint {\n  font-size: 0.75rem;\n  color: #4b7a63;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.legend-back {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: transparent;\n  border: 1px solid #1a3328;\n  border-radius: 16px;\n  padding: 4px 12px;\n  color: #6ee7b7;\n  font-size: 0.78rem;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.legend-back mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.legend-back:hover {\n  background: #0d2018;\n}\n.legend-count {\n  font-size: 0.72rem;\n  color: #4b7a63;\n  margin-right: 4px;\n}\n.legend-methods {\n  display: flex;\n  gap: 5px;\n}\n.legend-m {\n  font-family: monospace;\n  font-size: 0.68rem;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 10px;\n  letter-spacing: 0.03em;\n}\n.selected-route-ring {\n  animation: sel-pulse 1.8s ease-in-out infinite;\n  transform-box: fill-box;\n  transform-origin: center;\n}\n@keyframes sel-pulse {\n  0%, 100% {\n    opacity: 0.55;\n  }\n  50% {\n    opacity: 0.12;\n  }\n}\n.route-inspector {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  width: 340px;\n  max-height: calc(100% - 32px);\n  background: rgba(5, 10, 14, 0.97);\n  border: 1px solid #1a2d3e;\n  border-radius: 14px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(18px);\n  backdrop-filter: blur(18px);\n  z-index: 25;\n  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(59, 130, 246, 0.05);\n  animation: panel-in 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  direction: rtl;\n}\n.insp-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 14px;\n  border-bottom: 1px solid #0f1f2e;\n  background: rgba(255, 255, 255, 0.015);\n  flex-shrink: 0;\n  direction: ltr;\n}\n.insp-method {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.63rem;\n  font-weight: 800;\n  padding: 2px 7px;\n  border-radius: 4px;\n  flex-shrink: 0;\n  letter-spacing: 0.03em;\n}\n.insp-path {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.7rem;\n  color: #7c9ab2;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  direction: ltr;\n}\n.insp-close {\n  background: none;\n  border: none;\n  color: #2e4a60;\n  font-size: 0.95rem;\n  cursor: pointer;\n  padding: 4px 6px;\n  border-radius: 6px;\n  line-height: 1;\n  transition: color 0.15s, background 0.15s;\n  flex-shrink: 0;\n}\n.insp-close:hover {\n  color: #e2e8f0;\n  background: rgba(255, 255, 255, 0.06);\n}\n.insp-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 11px;\n  scrollbar-width: thin;\n  scrollbar-color: #0f1f2e transparent;\n  direction: rtl;\n}\n.insp-title {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #cbd5e1;\n  line-height: 1.3;\n}\n.insp-meta {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.insp-auth {\n  font-size: 0.67rem;\n  font-weight: 700;\n  padding: 2px 9px;\n  border-radius: 10px;\n  font-family: "Share Tech Mono", monospace;\n}\n.insp-auth.insp-secured {\n  background: rgba(124, 58, 237, 0.12);\n  color: #a78bfa;\n  border: 1px solid rgba(124, 58, 237, 0.22);\n}\n.insp-auth.insp-public {\n  background: rgba(16, 185, 129, 0.1);\n  color: #34d399;\n  border: 1px solid rgba(16, 185, 129, 0.18);\n}\n.insp-sp {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.65rem;\n  color: #38bdf8;\n  background: rgba(56, 189, 248, 0.07);\n  border: 1px solid rgba(56, 189, 248, 0.16);\n  border-radius: 10px;\n  padding: 2px 9px;\n  direction: ltr;\n}\n.insp-section {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.insp-section-response {\n  gap: 8px;\n}\n.insp-section-label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.6rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  color: #1e3a52;\n  text-transform: uppercase;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #0a1820;\n}\n.insp-schema-missing-tag {\n  font-size: 0.6rem;\n  padding: 1px 6px;\n  border-radius: 6px;\n  background: rgba(239, 68, 68, 0.1);\n  color: #f87171;\n  border: 1px solid rgba(239, 68, 68, 0.15);\n  font-weight: 600;\n  letter-spacing: 0.04em;\n}\n.insp-desc {\n  font-size: 0.76rem;\n  color: #475569;\n  line-height: 1.55;\n  margin: 0;\n  direction: rtl;\n}\n.insp-path-param {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 3px 0;\n  direction: ltr;\n}\n.insp-pp-name {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.7rem;\n  color: #60a5fa;\n  background: rgba(96, 165, 250, 0.07);\n  border-radius: 4px;\n  padding: 1px 6px;\n  flex-shrink: 0;\n}\n.insp-pp-type {\n  font-size: 0.66rem;\n  font-family: "Share Tech Mono", monospace;\n  color: #374151;\n  flex-shrink: 0;\n}\n.insp-pp-req {\n  color: #f87171;\n  font-size: 0.72rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.insp-pp-desc {\n  font-size: 0.66rem;\n  color: #1e3a52;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  direction: rtl;\n  flex: 1;\n}\n.schema-tree {\n  background: rgba(0, 0, 0, 0.35);\n  border: 1px solid #0a1820;\n  border-radius: 8px;\n  padding: 6px 0;\n  overflow: hidden;\n  direction: ltr;\n}\n.schema-node {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 8px 3px 0;\n  font-size: 0.7rem;\n  transition: background 0.1s;\n  direction: ltr;\n}\n.schema-node:hover {\n  background: rgba(255, 255, 255, 0.025);\n}\n.schema-connector {\n  color: #1a3048;\n  font-size: 0.6rem;\n  flex-shrink: 0;\n  width: 12px;\n  text-align: center;\n}\n.schema-key {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.7rem;\n  color: #93c5fd;\n  flex-shrink: 0;\n  min-width: 54px;\n}\n.schema-type {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.62rem;\n  font-weight: 700;\n  padding: 1px 5px;\n  border-radius: 4px;\n  border: 1px solid transparent;\n  flex-shrink: 0;\n  letter-spacing: 0.02em;\n}\n.schema-preview {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.64rem;\n  color: #1e3a52;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1;\n}\n.insp-no-schema {\n  background: rgba(0, 0, 0, 0.25);\n  border: 1px dashed #0f1f2e;\n  border-radius: 8px;\n  padding: 10px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.insp-schema-hint {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.66rem;\n  color: #1e3a52;\n  direction: ltr;\n  display: block;\n}\n.insp-schema-desc {\n  font-size: 0.7rem;\n  color: #1e3a52;\n  margin: 0;\n  direction: rtl;\n}\n.insp-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.insp-tag {\n  font-size: 0.63rem;\n  font-weight: 600;\n  padding: 2px 7px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.04);\n  color: #1e3a52;\n  border: 1px solid #0f1f2e;\n  font-family: "Share Tech Mono", monospace;\n  letter-spacing: 0.04em;\n}\n.insp-test-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  width: 100%;\n  padding: 9px 14px;\n  background: rgba(5, 150, 105, 0.08);\n  border: 1px solid rgba(5, 150, 105, 0.18);\n  border-radius: 9px;\n  color: #10b981;\n  font-size: 0.78rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: all 0.18s;\n  margin-top: 2px;\n}\n.insp-test-btn mat-icon {\n  font-size: 17px;\n  width: 17px;\n  height: 17px;\n}\n.insp-test-btn:hover {\n  background: #059669;\n  color: #fff;\n  border-color: #059669;\n}\n.routes-float-panel {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  width: 320px;\n  max-height: calc(100% - 56px);\n  background: rgba(6, 15, 10, 0.96);\n  border: 1px solid #1e3a2a;\n  border-radius: 16px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(14px);\n  backdrop-filter: blur(14px);\n  z-index: 20;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(16, 185, 129, 0.08);\n  animation: panel-in 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n@keyframes panel-in {\n  from {\n    opacity: 0;\n    transform: translateY(-10px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.rfp-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  border-bottom: 1px solid #1a3328;\n  flex-shrink: 0;\n  background: rgba(16, 185, 129, 0.04);\n}\n.rfp-title-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.rfp-cat-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  box-shadow: 0 0 6px currentColor;\n}\n.rfp-title {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #e2f8ef;\n  letter-spacing: 0.04em;\n  font-family: "Share Tech Mono", monospace;\n}\n.rfp-count {\n  background: rgba(16, 185, 129, 0.12);\n  color: #10b981;\n  border: 1px solid rgba(16, 185, 129, 0.25);\n  border-radius: 12px;\n  padding: 1px 9px;\n  font-size: 0.7rem;\n  font-weight: 700;\n  font-family: monospace;\n}\n.rfp-close {\n  background: none;\n  border: none;\n  color: #4b7a63;\n  font-size: 1rem;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: color 0.15s, background 0.15s;\n  line-height: 1;\n}\n.rfp-close:hover {\n  color: #e2f8ef;\n  background: rgba(255, 255, 255, 0.06);\n}\n.rfp-body {\n  overflow-y: auto;\n  padding: 6px;\n  flex: 1;\n  scrollbar-width: thin;\n  scrollbar-color: #1a3328 transparent;\n}\n.rfp-route {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 10px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.12s;\n  direction: ltr;\n}\n.rfp-route:hover,\n.rfp-route.rfp-hovered {\n  background: rgba(16, 185, 129, 0.09);\n}\n.rfp-route.rfp-selected {\n  background: rgba(59, 130, 246, 0.1);\n  border-right: 2px solid #60a5fa;\n  padding-right: 8px;\n}\n.rfp-route.rfp-selected .rfp-path {\n  color: #93c5fd;\n}\n.rfp-method {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.63rem;\n  font-weight: 800;\n  padding: 2px 5px;\n  border-radius: 4px;\n  flex-shrink: 0;\n  min-width: 42px;\n  text-align: center;\n  letter-spacing: 0.02em;\n}\n.rfp-path {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.72rem;\n  color: #6ee7b7;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.rfp-route-title {\n  font-size: 0.68rem;\n  color: #3d6b52;\n  flex-shrink: 0;\n  max-width: 90px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  direction: rtl;\n}\n/*# sourceMappingURL=axon.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: HttpClient }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AxonComponent, { className: "AxonComponent", filePath: "src/app/features/projects/workspace/axon/axon.component.ts", lineNumber: 81 });
})();
export {
  AxonComponent
};
//# sourceMappingURL=chunk-NWUGVHS6.js.map
