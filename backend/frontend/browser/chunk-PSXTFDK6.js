import {
  NeuralNetComponent
} from "./chunk-6BJOJE7S.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-ZG4ME4LP.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-AVTM4YYQ.js";
import "./chunk-7BTXUMFJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-4FOUEPN2.js";
import {
  CommonModule,
  Component,
  HostListener,
  HttpClient,
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
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VR4UVLCZ.js";

// src/app/features/projects/workspace/nexus/nexus.component.ts
var _forTrack0 = ($index, $item) => $item.MappingID;
var _forTrack1 = ($index, $item) => $item.SourceID;
var _forTrack2 = ($index, $item) => $item.id;
function NexusComponent_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 27);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.connectSource().SourceName, " \u2190 \u05D1\u05D7\u05E8 \u05D9\u05E2\u05D3");
  }
}
function NexusComponent_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 27);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "\u05D1\u05D7\u05E8 \u05DE\u05E7\u05D5\u05E8 \u05DC\u05D7\u05D9\u05D1\u05D5\u05E8");
    \u0275\u0275elementEnd();
  }
}
function NexusComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275conditionalCreate(1, NexusComponent_Conditional_13_Conditional_1_Template, 3, 1)(2, NexusComponent_Conditional_13_Conditional_2_Template, 3, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.connectSource() ? 1 : 2);
  }
}
function NexusComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g", 22);
    \u0275\u0275element(1, "path", 28);
    \u0275\u0275elementStart(2, "path", 29);
    \u0275\u0275listener("click", function NexusComponent_For_39_Template_path_click_2_listener() {
      const m_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.deleteMapping(m_r3));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "text", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("d", ctx_r0.connPath(m_r3));
    \u0275\u0275advance();
    \u0275\u0275attribute("d", ctx_r0.connPath(m_r3));
    \u0275\u0275advance();
    \u0275\u0275attribute("x", ctx_r0.connMid(m_r3).x)("y", ctx_r0.connMid(m_r3).y);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r3.Label || "\u2192");
  }
}
function NexusComponent_For_41_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "mat-icon", 48);
    \u0275\u0275text(2, "dns");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const src_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", src_r5.Host, "", src_r5.Port ? ":" + src_r5.Port : "");
  }
}
function NexusComponent_For_41_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "mat-icon", 48);
    \u0275\u0275text(2, "storage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const src_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(src_r5.DbName);
  }
}
function NexusComponent_For_41_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "mat-icon", 48);
    \u0275\u0275text(2, "notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const src_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(src_r5.Notes);
  }
}
function NexusComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("mousedown", function NexusComponent_For_41_Template_div_mousedown_0_listener($event) {
      const src_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onNodeDown($event, src_r5));
    })("click", function NexusComponent_For_41_Template_div_click_0_listener() {
      const src_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clickNode(src_r5));
    });
    \u0275\u0275element(1, "div", 32);
    \u0275\u0275elementStart(2, "div", 33);
    \u0275\u0275listener("mousedown", function NexusComponent_For_41_Template_div_mousedown_2_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(3, "div", 34)(4, "mat-icon", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 36)(7, "span", 37);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 38);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 39);
    \u0275\u0275listener("mousedown", function NexusComponent_For_41_Template_div_mousedown_11_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(12, "button", 40);
    \u0275\u0275listener("click", function NexusComponent_For_41_Template_button_click_12_listener($event) {
      const src_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r0.testConn(src_r5));
    });
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 41);
    \u0275\u0275listener("click", function NexusComponent_For_41_Template_button_click_15_listener($event) {
      const src_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r0.deleteSource(src_r5));
    });
    \u0275\u0275elementStart(16, "mat-icon");
    \u0275\u0275text(17, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 42);
    \u0275\u0275conditionalCreate(19, NexusComponent_For_41_Conditional_19_Template, 5, 2, "div", 43);
    \u0275\u0275conditionalCreate(20, NexusComponent_For_41_Conditional_20_Template, 5, 1, "div", 43);
    \u0275\u0275conditionalCreate(21, NexusComponent_For_41_Conditional_21_Template, 5, 1, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 45)(23, "span", 46);
    \u0275\u0275element(24, "span", 47);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const src_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", src_r5.PosX, "px")("top", src_r5.PosY, "px")("width", ctx_r0.nodeW, "px")("--node-color", ctx_r0.typeInfo(src_r5.SourceType).color);
    \u0275\u0275classProp("nx-src", ctx_r0.connectSource()?.SourceID === src_r5.SourceID)("nx-tgt", ctx_r0.connectMode() && !!ctx_r0.connectSource() && ctx_r0.connectSource().SourceID !== src_r5.SourceID);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.typeInfo(src_r5.SourceType).icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(src_r5.SourceName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.typeInfo(src_r5.SourceType).label);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("nact-testing", ctx_r0.testing[src_r5.SourceID]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.testing[src_r5.SourceID] ? "sync" : "cable");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(src_r5.Host ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(src_r5.DbName ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(src_r5.Notes ? 21 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("status-" + src_r5.Status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabel(src_r5.Status), " ");
  }
}
function NexusComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 50);
    \u0275\u0275element(2, "div", 51)(3, "div", 52);
    \u0275\u0275elementStart(4, "mat-icon", 53);
    \u0275\u0275text(5, "hub");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 54);
    \u0275\u0275text(7, "NEXUS \u05DE\u05D0\u05EA\u05D7\u05DC...");
    \u0275\u0275elementEnd()();
  }
}
function NexusComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "mat-icon", 55);
    \u0275\u0275text(2, "storage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 56);
    \u0275\u0275text(4, "NEXUS \u05E8\u05D9\u05E7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 57);
    \u0275\u0275text(6, "\u05D7\u05D1\u05E8 \u05D0\u05EA \u05DE\u05E7\u05D5\u05E8 \u05D4\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05DC\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 58);
    \u0275\u0275listener("click", function NexusComponent_Conditional_43_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openAdd());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " \u05DE\u05E7\u05D5\u05E8 \u05D7\u05D3\u05E9 ");
    \u0275\u0275elementEnd()();
  }
}
function NexusComponent_Conditional_44_Conditional_2_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 64);
    \u0275\u0275listener("click", function NexusComponent_Conditional_44_Conditional_2_For_7_Template_button_click_0_listener() {
      const t_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectType(t_r9.id));
    });
    \u0275\u0275elementStart(1, "div", 65)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 66);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 67);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-icon", 68);
    \u0275\u0275text(9, "chevron_left");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", t_r9.color + "22")("border-color", t_r9.color + "55");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", t_r9.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r9.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r9.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r9.desc);
  }
}
function NexusComponent_Conditional_44_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "mat-icon");
    \u0275\u0275text(2, "add_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u05D1\u05D7\u05E8 \u05E1\u05D5\u05D2 \u05DE\u05E7\u05D5\u05E8");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 62);
    \u0275\u0275repeaterCreate(6, NexusComponent_Conditional_44_Conditional_2_For_7_Template, 10, 9, "button", 63, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r0.sourceTypes);
  }
}
function NexusComponent_Conditional_44_Conditional_3_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function NexusComponent_Conditional_44_Conditional_3_Conditional_14_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.addHost, $event) || (ctx_r0.addHost = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.addType() === "DB" ? "\u05E9\u05E8\u05EA / Host" : "URL / Endpoint");
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(ctx_r0.addType() === "DB" ? "192.168.1.10" : "https://api.example.com"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.addHost);
    \u0275\u0275control();
  }
}
function NexusComponent_Conditional_44_Conditional_3_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "div")(2, "label");
    \u0275\u0275text(3, "\u05E4\u05D5\u05E8\u05D8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function NexusComponent_Conditional_44_Conditional_3_Conditional_15_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.addPort, $event) || (ctx_r0.addPort = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "label");
    \u0275\u0275text(7, "\u05E9\u05DD \u05DE\u05E1\u05D3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 81);
    \u0275\u0275twoWayListener("ngModelChange", function NexusComponent_Conditional_44_Conditional_3_Conditional_15_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.addDb, $event) || (ctx_r0.addDb = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.addPort);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.addDb);
    \u0275\u0275control();
  }
}
function NexusComponent_Conditional_44_Conditional_3_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.addError);
  }
}
function NexusComponent_Conditional_44_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "button", 69);
    \u0275\u0275listener("click", function NexusComponent_Conditional_44_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.backToType());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 70)(9, "label");
    \u0275\u0275text(10, "\u05E9\u05DD \u05DE\u05E7\u05D5\u05E8 ");
    \u0275\u0275elementStart(11, "span", 71);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function NexusComponent_Conditional_44_Conditional_3_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.addName, $event) || (ctx_r0.addName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function NexusComponent_Conditional_44_Conditional_3_Template_input_keyup_enter_13_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveSource());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(14, NexusComponent_Conditional_44_Conditional_3_Conditional_14_Template, 3, 4);
    \u0275\u0275conditionalCreate(15, NexusComponent_Conditional_44_Conditional_3_Conditional_15_Template, 9, 2, "div", 73);
    \u0275\u0275elementStart(16, "label");
    \u0275\u0275text(17, "\u05D4\u05E2\u05E8\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "textarea", 74);
    \u0275\u0275twoWayListener("ngModelChange", function NexusComponent_Conditional_44_Conditional_3_Template_textarea_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.addNotes, $event) || (ctx_r0.addNotes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(19, NexusComponent_Conditional_44_Conditional_3_Conditional_19_Template, 2, 1, "div", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 76)(21, "button", 77);
    \u0275\u0275listener("click", function NexusComponent_Conditional_44_Conditional_3_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveSource());
    });
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 78);
    \u0275\u0275listener("click", function NexusComponent_Conditional_44_Conditional_3_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.showAdd.set(false));
    });
    \u0275\u0275text(24, "\u05D1\u05D9\u05D8\u05D5\u05DC");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r0.typeInfo(ctx_r0.addType()).color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.typeInfo(ctx_r0.addType()).icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.typeInfo(ctx_r0.addType()).label);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.addName);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.addType() === "DB" || ctx_r0.addType() === "API" ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.addType() === "DB" ? 15 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.addNotes);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.addError ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.addSaving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.addSaving ? "..." : "\u2713 \u05D4\u05D5\u05E1\u05E3 \u05DE\u05E7\u05D5\u05E8", " ");
  }
}
function NexusComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275listener("click", function NexusComponent_Conditional_44_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showAdd.set(false));
    });
    \u0275\u0275elementStart(1, "div", 60);
    \u0275\u0275listener("click", function NexusComponent_Conditional_44_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275conditionalCreate(2, NexusComponent_Conditional_44_Conditional_2_Template, 8, 0);
    \u0275\u0275conditionalCreate(3, NexusComponent_Conditional_44_Conditional_3_Template, 25, 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.addStep() === "type" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.addStep() === "detail" ? 3 : -1);
  }
}
var SOURCE_TYPES = [
  { id: "DB", label: "\u05DE\u05E1\u05D3 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD", icon: "storage", color: "#0891b2", desc: "SQL Server, MySQL, PostgreSQL, MongoDB" },
  { id: "API", label: "REST / GraphQL API", icon: "api", color: "#0e7490", desc: "\u05D7\u05D9\u05D1\u05D5\u05E8 \u05DC-Endpoint \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9" },
  { id: "FILE", label: "\u05E7\u05D5\u05D1\u05E5 / Storage", icon: "folder", color: "#155e75", desc: "CSV, Excel, JSON, S3, Azure Blob" },
  { id: "SERVICE", label: "\u05E9\u05D9\u05E8\u05D5\u05EA / Queue", icon: "hub", color: "#164e63", desc: "Message Queue, Cache, Event Bus" }
];
var NODE_WIDTH = 240;
var NODE_HDR = 60;
var NexusComponent = class _NexusComponent {
  route;
  router;
  http;
  projectId = 0;
  loading = signal(
    true,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  sources = signal(
    [],
    ...ngDevMode ? [{ debugName: "sources" }] : (
      /* istanbul ignore next */
      []
    )
  );
  mappings = signal(
    [],
    ...ngDevMode ? [{ debugName: "mappings" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Canvas
  panX = 60;
  panY = 80;
  zoom = 1;
  // Drag
  dragging = null;
  dragSX = 0;
  dragSY = 0;
  dragNX = 0;
  dragNY = 0;
  isPanning = false;
  panSX = 0;
  panSY = 0;
  // Connect mode
  connectMode = signal(
    false,
    ...ngDevMode ? [{ debugName: "connectMode" }] : (
      /* istanbul ignore next */
      []
    )
  );
  connectSource = signal(
    null,
    ...ngDevMode ? [{ debugName: "connectSource" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Add dialog
  showAdd = signal(
    false,
    ...ngDevMode ? [{ debugName: "showAdd" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addStep = signal(
    "type",
    ...ngDevMode ? [{ debugName: "addStep" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addType = signal(
    "DB",
    ...ngDevMode ? [{ debugName: "addType" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addName = "";
  addHost = "";
  addPort = "";
  addDb = "";
  addNotes = "";
  addSaving = false;
  addError = "";
  // Test state
  testing = {};
  sourceTypes = SOURCE_TYPES;
  nodeW = NODE_WIDTH;
  constructor(route, router, http) {
    this.route = route;
    this.router = router;
    this.http = http;
  }
  ngOnInit() {
    this.projectId = Number(this.route.snapshot.paramMap.get("projectId"));
    this.load();
  }
  load() {
    this.loading.set(true);
    this.http.get(`/api/nexus/${this.projectId}`).subscribe({
      next: (r) => {
        this.sources.set(r.data.sources || []);
        this.mappings.set(r.data.mappings || []);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  // ── Pan ───────────────────────────────────────────────────
  onBgDown(e) {
    if (e.target.closest(".nx-node"))
      return;
    this.isPanning = true;
    this.panSX = e.clientX - this.panX;
    this.panSY = e.clientY - this.panY;
  }
  onMove(e) {
    if (this.isPanning) {
      this.panX = e.clientX - this.panSX;
      this.panY = e.clientY - this.panSY;
    }
    if (this.dragging) {
      this.dragging.PosX = this.dragNX + (e.clientX - this.dragSX) / this.zoom;
      this.dragging.PosY = this.dragNY + (e.clientY - this.dragSY) / this.zoom;
      this.sources.update((v) => [...v]);
    }
  }
  onUp() {
    if (this.isPanning)
      this.isPanning = false;
    if (this.dragging) {
      this.savePos(this.dragging);
      this.dragging = null;
    }
  }
  onWheel(e) {
    e.preventDefault();
    this.zoom = Math.min(2, Math.max(0.3, this.zoom * (e.deltaY > 0 ? 0.9 : 1.1)));
  }
  // ── Drag node ─────────────────────────────────────────────
  onNodeDown(e, src) {
    if (this.connectMode()) {
      e.stopPropagation();
      this.clickNode(src);
      return;
    }
    if (e.target.tagName === "BUTTON")
      return;
    e.stopPropagation();
    this.dragging = src;
    this.dragSX = e.clientX;
    this.dragSY = e.clientY;
    this.dragNX = src.PosX;
    this.dragNY = src.PosY;
  }
  savePos(src) {
    this.http.put(`/api/nexus/sources/${src.SourceID}/position`, { posX: Math.round(src.PosX), posY: Math.round(src.PosY) }).subscribe();
  }
  // ── Connect ───────────────────────────────────────────────
  toggleConnect() {
    this.connectMode.update((v) => !v);
    this.connectSource.set(null);
  }
  clickNode(src) {
    if (!this.connectMode())
      return;
    const from = this.connectSource();
    if (!from) {
      this.connectSource.set(src);
      return;
    }
    if (from.SourceID === src.SourceID) {
      this.connectSource.set(null);
      return;
    }
    this.http.post("/api/nexus/mappings", {
      projectId: this.projectId,
      sourceId: from.SourceID,
      targetId: src.SourceID,
      label: ""
    }).subscribe({
      next: (r) => {
        if (r.success) {
          this.mappings.update((v) => [...v, {
            MappingID: r.data.mappingId,
            SourceID: from.SourceID,
            TargetID: src.SourceID,
            Label: ""
          }]);
        }
        this.connectSource.set(null);
        this.connectMode.set(false);
      },
      error: () => {
        this.connectSource.set(null);
        this.connectMode.set(false);
      }
    });
  }
  deleteMapping(m) {
    this.http.delete(`/api/nexus/mappings/${m.MappingID}`).subscribe({
      next: () => this.mappings.update((v) => v.filter((x) => x.MappingID !== m.MappingID))
    });
  }
  // ── SVG paths ─────────────────────────────────────────────
  connPath(m) {
    const s = this.sources().find((o) => o.SourceID === m.SourceID);
    const t = this.sources().find((o) => o.SourceID === m.TargetID);
    if (!s || !t)
      return "";
    const sCX = s.PosX + NODE_WIDTH / 2, sCY = s.PosY + NODE_HDR / 2;
    const tCX = t.PosX + NODE_WIDTH / 2, tCY = t.PosY + NODE_HDR / 2;
    const sX = tCX > sCX ? s.PosX + NODE_WIDTH : s.PosX;
    const tX = tCX > sCX ? t.PosX : t.PosX + NODE_WIDTH;
    const dx = Math.abs(tX - sX) * 0.55;
    const dir = tX > sX ? 1 : -1;
    return `M ${sX},${sCY} C ${sX + dir * dx},${sCY} ${tX - dir * dx},${tCY} ${tX},${tCY}`;
  }
  connMid(m) {
    const s = this.sources().find((o) => o.SourceID === m.SourceID);
    const t = this.sources().find((o) => o.SourceID === m.TargetID);
    if (!s || !t)
      return { x: 0, y: 0 };
    return { x: (s.PosX + t.PosX) / 2 + NODE_WIDTH / 2, y: (s.PosY + t.PosY) / 2 + NODE_HDR / 2 - 12 };
  }
  // ── Add dialog ────────────────────────────────────────────
  openAdd() {
    this.addStep.set("type");
    this.addType.set("DB");
    this.addName = "";
    this.addHost = "";
    this.addPort = "";
    this.addDb = "";
    this.addNotes = "";
    this.addError = "";
    this.showAdd.set(true);
  }
  selectType(t) {
    this.addType.set(t);
    this.addStep.set("detail");
  }
  backToType() {
    this.addStep.set("type");
    this.addError = "";
  }
  saveSource() {
    if (!this.addName.trim()) {
      this.addError = "\u05E9\u05DD \u05DE\u05E7\u05D5\u05E8 \u05D7\u05D5\u05D1\u05D4";
      return;
    }
    if (this.addSaving)
      return;
    this.addSaving = true;
    this.addError = "";
    const cx = (-this.panX + window.innerWidth / 2) / this.zoom;
    const cy = (-this.panY + window.innerHeight / 2) / this.zoom;
    const px = Math.max(20, cx - 120 + (Math.random() - 0.5) * 240);
    const py = Math.max(20, cy - 90 + (Math.random() - 0.5) * 180);
    const typeInfo = SOURCE_TYPES.find((t) => t.id === this.addType());
    this.http.post("/api/nexus/sources", {
      projectId: this.projectId,
      sourceName: this.addName.trim(),
      sourceType: this.addType(),
      host: this.addHost.trim(),
      port: this.addPort ? parseInt(this.addPort) : null,
      dbName: this.addDb.trim(),
      notes: this.addNotes.trim(),
      posX: px,
      posY: py,
      colorHex: typeInfo.color
    }).subscribe({
      next: (r) => {
        this.addSaving = false;
        if (r.success) {
          this.showAdd.set(false);
          this.load();
        } else
          this.addError = r.message;
      },
      error: () => {
        this.addSaving = false;
        this.addError = "\u05E9\u05D2\u05D9\u05D0\u05EA \u05E9\u05DE\u05D9\u05E8\u05D4";
      }
    });
  }
  deleteSource(src) {
    this.http.delete(`/api/nexus/sources/${src.SourceID}`).subscribe({
      next: () => {
        this.sources.update((v) => v.filter((s) => s.SourceID !== src.SourceID));
        this.mappings.update((v) => v.filter((m) => m.SourceID !== src.SourceID && m.TargetID !== src.SourceID));
      }
    });
  }
  // ── Test connection ───────────────────────────────────────
  testConn(src) {
    this.testing[src.SourceID] = true;
    this.http.post(`/api/nexus/sources/${src.SourceID}/test`, {}).subscribe({
      next: (r) => {
        this.testing[src.SourceID] = false;
        src.Status = r.success ? "connected" : "failed";
        this.sources.update((v) => [...v]);
        this.http.put(`/api/nexus/sources/${src.SourceID}/status`, { status: src.Status }).subscribe();
      },
      error: () => {
        this.testing[src.SourceID] = false;
        src.Status = "failed";
        this.sources.update((v) => [...v]);
      }
    });
  }
  // ── Utils ─────────────────────────────────────────────────
  typeInfo(t) {
    return SOURCE_TYPES.find((x) => x.id === t) ?? SOURCE_TYPES[0];
  }
  statusLabel(s) {
    const m = { untested: "\u05DC\u05D0 \u05E0\u05D1\u05D3\u05E7", connected: "\u05DE\u05D7\u05D5\u05D1\u05E8", failed: "\u05E9\u05D2\u05D9\u05D0\u05D4" };
    return m[s];
  }
  get transform() {
    return `translate(${this.panX}px,${this.panY}px) scale(${this.zoom})`;
  }
  back() {
    this.router.navigate(["/app/projects", this.projectId]);
  }
  static \u0275fac = function NexusComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NexusComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NexusComponent, selectors: [["app-nexus"]], hostBindings: function NexusComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("mousemove", function NexusComponent_mousemove_HostBindingHandler($event) {
        return ctx.onMove($event);
      }, \u0275\u0275resolveWindow)("mouseup", function NexusComponent_mouseup_HostBindingHandler() {
        return ctx.onUp();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 45, vars: 11, consts: [[1, "nx-root", 3, "mousedown", "wheel"], [1, "nx-toolbar"], [1, "nx-back", 3, "click"], [1, "nx-brand"], [1, "nx-brand-name"], [1, "nx-brand-sub"], [1, "nx-tools"], [1, "nx-connect-hint"], ["title", "\u05D7\u05D1\u05E8 \u05DE\u05E7\u05D5\u05E8\u05D5\u05EA", 1, "nx-btn", 3, "click"], [1, "nx-btn", "nx-btn-primary", 3, "click"], [1, "nx-canvas-wrap"], ["aria-hidden", "true"], [1, "nx-canvas"], ["width", "5000", "height", "5000", 1, "nx-svg", 2, "position", "absolute", "top", "0", "left", "0", "overflow", "visible", "pointer-events", "none"], ["id", "nx-lg", "x1", "0%", "y1", "0%", "x2", "100%", "y2", "0%"], ["offset", "0%", "stop-color", "#0891b2", "stop-opacity", "0.9"], ["offset", "50%", "stop-color", "#06b6d4", "stop-opacity", "1"], ["offset", "100%", "stop-color", "#0891b2", "stop-opacity", "0.9"], ["id", "nx-glow", "x", "-20%", "y", "-20%", "width", "140%", "height", "140%"], ["in", "SourceGraphic", "stdDeviation", "3", "result", "blur"], ["in", "blur"], ["in", "SourceGraphic"], [2, "pointer-events", "stroke"], [1, "nx-node", 3, "nx-src", "nx-tgt", "left", "top", "width", "--node-color"], [1, "nx-loading"], [1, "nx-empty"], [1, "nx-modal-overlay"], [1, "hint-dot"], ["stroke", "#0891b2", "stroke-width", "6", "fill", "none", "stroke-opacity", "0.12", "filter", "url(#nx-glow)"], ["stroke", "url(#nx-lg)", "stroke-width", "1.8", "fill", "none", "stroke-dasharray", "12 5", 1, "nx-conn-path", 2, "pointer-events", "stroke", "cursor", "pointer", 3, "click"], ["text-anchor", "middle", 1, "nx-conn-label"], [1, "nx-node", 3, "mousedown", "click"], [1, "node-accent-bar"], [1, "node-hdr", 3, "mousedown"], [1, "node-icon-wrap"], [1, "node-icon"], [1, "node-title"], [1, "node-name"], [1, "node-type"], [1, "node-actions", 3, "mousedown"], ["title", "\u05D1\u05D3\u05D5\u05E7 \u05D7\u05D9\u05D1\u05D5\u05E8", 1, "nact", 3, "click"], ["title", "\u05DE\u05D7\u05E7", 1, "nact", "nact-del", 3, "click"], [1, "node-body"], [1, "node-row"], [1, "node-row", "node-row-notes"], [1, "node-footer"], [1, "status-badge"], [1, "status-dot"], [1, "row-icon"], [1, "row-val"], [1, "nx-spinner"], [1, "sp-ring"], [1, "sp-ring", "sp-r2"], [1, "sp-icon"], [1, "nx-loading-text"], [1, "empty-icon"], [1, "empty-title"], [1, "empty-sub"], [1, "nx-btn", "nx-btn-primary", "empty-cta", 3, "click"], [1, "nx-modal-overlay", 3, "click"], [1, "nx-modal", 3, "click"], [1, "nx-modal-hdr"], [1, "nx-type-grid"], [1, "type-card"], [1, "type-card", 3, "click"], [1, "type-icon-wrap"], [1, "type-label"], [1, "type-desc"], [1, "type-arrow"], [1, "hdr-back", 3, "click"], [1, "nx-modal-body"], [1, "req"], ["placeholder", "\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: DB_\u05D9\u05D9\u05E6\u05D5\u05E8, API_CRM...", 1, "nx-field", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "nx-row-2"], ["rows", "2", "placeholder", "\u05EA\u05D9\u05D0\u05D5\u05E8 \u05E7\u05E6\u05E8...", 1, "nx-field", "nx-ta", 3, "ngModelChange", "ngModel"], [1, "nx-error"], [1, "nx-modal-foot"], [1, "nx-btn", "nx-btn-primary", 3, "click", "disabled"], [1, "nx-btn", 3, "click"], [1, "nx-field", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "number", "placeholder", "1433", 1, "nx-field", 3, "ngModelChange", "ngModel"], ["placeholder", "MyDatabase", 1, "nx-field", 3, "ngModelChange", "ngModel"]], template: function NexusComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("mousedown", function NexusComponent_Template_div_mousedown_0_listener($event) {
        return ctx.onBgDown($event);
      })("wheel", function NexusComponent_Template_div_wheel_0_listener($event) {
        return ctx.onWheel($event);
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function NexusComponent_Template_button_click_2_listener() {
        return ctx.back();
      });
      \u0275\u0275elementStart(3, "mat-icon");
      \u0275\u0275text(4, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "FLOWSPACE");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 3)(8, "span", 4);
      \u0275\u0275text(9, "NEXUS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 5);
      \u0275\u0275text(11, "\u05DE\u05E7\u05D5\u05E8\u05D5\u05EA \u05DE\u05D9\u05D3\u05E2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 6);
      \u0275\u0275conditionalCreate(13, NexusComponent_Conditional_13_Template, 3, 1, "div", 7);
      \u0275\u0275elementStart(14, "button", 8);
      \u0275\u0275listener("click", function NexusComponent_Template_button_click_14_listener() {
        return ctx.toggleConnect();
      });
      \u0275\u0275elementStart(15, "mat-icon");
      \u0275\u0275text(16, "cable");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span");
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "button", 9);
      \u0275\u0275listener("click", function NexusComponent_Template_button_click_19_listener() {
        return ctx.openAdd();
      });
      \u0275\u0275elementStart(20, "mat-icon");
      \u0275\u0275text(21, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span");
      \u0275\u0275text(23, "\u05DE\u05E7\u05D5\u05E8 \u05D7\u05D3\u05E9");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "div", 10);
      \u0275\u0275element(25, "app-neural-net", 11);
      \u0275\u0275elementStart(26, "div", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(27, "svg", 13)(28, "defs")(29, "linearGradient", 14);
      \u0275\u0275element(30, "stop", 15)(31, "stop", 16)(32, "stop", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "filter", 18);
      \u0275\u0275element(34, "feGaussianBlur", 19);
      \u0275\u0275elementStart(35, "feMerge");
      \u0275\u0275element(36, "feMergeNode", 20)(37, "feMergeNode", 21);
      \u0275\u0275elementEnd()()();
      \u0275\u0275repeaterCreate(38, NexusComponent_For_39_Template, 5, 5, ":svg:g", 22, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(40, NexusComponent_For_41_Template, 26, 24, "div", 23, _forTrack1);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(42, NexusComponent_Conditional_42_Template, 8, 0, "div", 24);
      \u0275\u0275conditionalCreate(43, NexusComponent_Conditional_43_Template, 11, 0, "div", 25);
      \u0275\u0275conditionalCreate(44, NexusComponent_Conditional_44_Template, 4, 2, "div", 26);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275conditional(ctx.connectMode() ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("nx-btn-active", ctx.connectMode());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.connectMode() ? "\u05D1\u05D9\u05D8\u05D5\u05DC" : "\u05D7\u05D1\u05E8");
      \u0275\u0275advance(8);
      \u0275\u0275styleProp("transform", ctx.transform);
      \u0275\u0275classProp("nx-connect", ctx.connectMode());
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.mappings());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.sources());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 42 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() && ctx.sources().length === 0 ? 43 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showAdd() ? 44 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel, MatIconModule, MatIcon, NeuralNetComponent], styles: ['\n.nx-root[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  background:\n    linear-gradient(\n      160deg,\n      #020d18 0%,\n      #051a2e 50%,\n      #041520 100%);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  direction: rtl;\n  -webkit-user-select: none;\n  user-select: none;\n  font-family:\n    "Noto Sans Hebrew",\n    "Segoe UI",\n    sans-serif;\n}\n.nx-toolbar[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 200;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 24px;\n  background: rgba(2, 13, 24, 0.92);\n  border-bottom: 1px solid rgba(8, 145, 178, 0.2);\n  box-shadow: 0 1px 0 rgba(8, 145, 178, 0.07), 0 4px 32px rgba(0, 0, 0, 0.5);\n  flex-shrink: 0;\n  direction: ltr;\n}\n.nx-back[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: rgba(6, 182, 212, 0.55);\n  padding: 6px 12px 6px 8px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  transition: color 0.15s, background 0.15s;\n  flex-shrink: 0;\n}\n.nx-back[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.nx-back[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-family: "Share Tech Mono", monospace;\n  letter-spacing: 0.08em;\n}\n.nx-back[_ngcontent-%COMP%]:hover {\n  color: #06b6d4;\n  background: rgba(8, 145, 178, 0.12);\n}\n.nx-brand[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1px;\n  pointer-events: none;\n}\n.nx-brand[_ngcontent-%COMP%]   .nx-brand-name[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #06b6d4;\n  letter-spacing: 0.2em;\n  text-shadow: 0 0 20px rgba(6, 182, 212, 0.45);\n}\n.nx-brand[_ngcontent-%COMP%]   .nx-brand-sub[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: rgba(255, 255, 255, 0.3);\n}\n.nx-tools[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  margin-left: auto;\n}\n.nx-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.6);\n  border-radius: 8px;\n  padding: 7px 14px;\n  font-size: 0.82rem;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: all 0.15s;\n}\n.nx-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.nx-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.nx-btn.nx-btn-active[_ngcontent-%COMP%] {\n  background: rgba(6, 182, 212, 0.15);\n  border-color: #06b6d4;\n  color: #67e8f9;\n}\n.nx-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.nx-btn-primary[_ngcontent-%COMP%] {\n  background: rgba(8, 145, 178, 0.3) !important;\n  border-color: rgba(8, 145, 178, 0.7) !important;\n  color: #67e8f9 !important;\n}\n.nx-btn-primary[_ngcontent-%COMP%]:hover {\n  background: rgba(8, 145, 178, 0.5) !important;\n  color: #fff !important;\n}\n.nx-connect-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.78rem;\n  color: #67e8f9;\n  background: rgba(6, 182, 212, 0.08);\n  border: 1px solid rgba(6, 182, 212, 0.25);\n  border-radius: 20px;\n  padding: 4px 14px;\n  animation: _ngcontent-%COMP%_hint-pulse 1.4s ease-in-out infinite;\n}\n.hint-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #06b6d4;\n  animation: _ngcontent-%COMP%_hint-pulse 1s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_hint-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n.nx-canvas-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  cursor: grab;\n}\n.nx-canvas-wrap[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.nx-canvas[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  transform-origin: 0 0;\n  width: 5000px;\n  height: 5000px;\n}\n.nx-canvas.nx-connect[_ngcontent-%COMP%] {\n  cursor: crosshair;\n}\n.nx-conn-path[_ngcontent-%COMP%] {\n  stroke-dasharray: 12 5;\n  animation: _ngcontent-%COMP%_flow 2s linear infinite;\n  transition: stroke-width 0.15s;\n}\n.nx-conn-path[_ngcontent-%COMP%]:hover {\n  stroke-width: 3 !important;\n}\n@keyframes _ngcontent-%COMP%_flow {\n  to {\n    stroke-dashoffset: -68;\n  }\n}\n.nx-conn-label[_ngcontent-%COMP%] {\n  fill: rgba(6, 182, 212, 0.75);\n  font-size: 11px;\n  font-family: "Share Tech Mono", monospace;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  paint-order: stroke;\n  stroke: #020d18;\n  stroke-width: 3;\n}\n.nx-node[_ngcontent-%COMP%] {\n  position: absolute;\n  background: rgba(2, 14, 26, 0.92);\n  border: 1px solid rgba(8, 145, 178, 0.4);\n  border-radius: 14px;\n  box-shadow:\n    0 0 0 1px rgba(8, 145, 178, 0.08),\n    0 8px 40px rgba(0, 0, 0, 0.65),\n    0 0 30px rgba(8, 145, 178, 0.07);\n  cursor: grab;\n  overflow: hidden;\n  transition: border-color 0.2s, box-shadow 0.25s;\n  animation: _ngcontent-%COMP%_node-in 0.3s ease-out forwards;\n}\n.nx-node[_ngcontent-%COMP%]:hover {\n  border-color: rgba(8, 145, 178, 0.65);\n  box-shadow:\n    0 0 0 1px rgba(8, 145, 178, 0.2),\n    0 12px 50px rgba(0, 0, 0, 0.7),\n    0 0 50px rgba(8, 145, 178, 0.18);\n}\n.nx-node.nx-src[_ngcontent-%COMP%] {\n  border-color: #0891b2 !important;\n  box-shadow: 0 0 0 2px rgba(8, 145, 178, 0.4), 0 0 60px rgba(8, 145, 178, 0.3) !important;\n  animation: _ngcontent-%COMP%_src-pulse 1s ease-in-out infinite !important;\n}\n.nx-node.nx-tgt[_ngcontent-%COMP%]:hover {\n  border-color: #10b981 !important;\n  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.4), 0 0 50px rgba(16, 185, 129, 0.25) !important;\n  cursor: crosshair !important;\n}\n@keyframes _ngcontent-%COMP%_node-in {\n  from {\n    opacity: 0.3;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_src-pulse {\n  0%, 100% {\n    box-shadow: 0 0 0 2px rgba(8, 145, 178, 0.4), 0 0 60px rgba(8, 145, 178, 0.3);\n  }\n  50% {\n    box-shadow: 0 0 0 5px rgba(8, 145, 178, 0.55), 0 0 90px rgba(8, 145, 178, 0.5);\n  }\n}\n.node-accent-bar[_ngcontent-%COMP%] {\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--node-color, #0891b2) 40%,\n      #06b6d4 60%,\n      transparent 100%);\n  opacity: 0.8;\n}\n.node-hdr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 10px 9px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(8, 145, 178, 0.15) 0%,\n      rgba(4, 21, 32, 0.5) 100%);\n  border-bottom: 1px solid rgba(8, 145, 178, 0.12);\n  cursor: grab;\n}\n.node-icon-wrap[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: rgba(8, 145, 178, 0.18);\n  border: 1px solid rgba(8, 145, 178, 0.35);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  animation: _ngcontent-%COMP%_icon-glow 3s ease-in-out infinite;\n}\n.node-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #22d3ee;\n}\n@keyframes _ngcontent-%COMP%_icon-glow {\n  0%, 100% {\n    box-shadow: none;\n  }\n  50% {\n    box-shadow: 0 0 10px rgba(8, 145, 178, 0.5);\n  }\n}\n.node-title[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.node-title[_ngcontent-%COMP%]   .node-name[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #cffafe;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n}\n.node-title[_ngcontent-%COMP%]   .node-type[_ngcontent-%COMP%] {\n  font-size: 0.67rem;\n  color: rgba(6, 182, 212, 0.5);\n  font-family: "Share Tech Mono", monospace;\n}\n.node-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n  flex-shrink: 0;\n}\n.nact[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 26px;\n  height: 26px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(255, 255, 255, 0.25);\n  transition: all 0.13s;\n}\n.nact[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.nact[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.75);\n}\n.nact.nact-del[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.nact.nact-testing[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.node-body[_ngcontent-%COMP%] {\n  padding: 8px 12px 6px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  direction: rtl;\n}\n.node-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 0.75rem;\n  color: rgba(207, 250, 254, 0.55);\n}\n.row-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n  color: rgba(6, 182, 212, 0.4);\n  flex-shrink: 0;\n}\n.row-val[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.72rem;\n}\n.node-row-notes[_ngcontent-%COMP%]   .row-val[_ngcontent-%COMP%] {\n  font-family: "Noto Sans Hebrew", sans-serif;\n  font-size: 0.73rem;\n  white-space: normal;\n}\n.node-footer[_ngcontent-%COMP%] {\n  padding: 7px 12px 9px;\n  border-top: 1px solid rgba(8, 145, 178, 0.08);\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.69rem;\n  font-weight: 600;\n  border-radius: 20px;\n  padding: 3px 10px;\n  font-family: "Share Tech Mono", monospace;\n  letter-spacing: 0.04em;\n}\n.status-badge.status-untested[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  color: rgba(255, 255, 255, 0.35);\n}\n.status-badge.status-connected[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: #34d399;\n}\n.status-badge.status-failed[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #f87171;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.status-untested[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.3);\n}\n.status-connected[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #34d399;\n  box-shadow: 0 0 4px #34d399;\n  animation: _ngcontent-%COMP%_blink 2s ease-in-out infinite;\n}\n.status-failed[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #f87171;\n}\n@keyframes _ngcontent-%COMP%_blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n.nx-loading[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 150;\n  background: rgba(2, 13, 24, 0.9);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n}\n.nx-spinner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 68px;\n  height: 68px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sp-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  border-top-color: #0891b2;\n  animation: _ngcontent-%COMP%_nx-spin 1.6s linear infinite;\n}\n.sp-ring.sp-r2[_ngcontent-%COMP%] {\n  inset: 14px;\n  border-top-color: #06b6d4;\n  animation-duration: 2.4s;\n  animation-direction: reverse;\n}\n@keyframes _ngcontent-%COMP%_nx-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.sp-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  color: #0891b2;\n  animation: _ngcontent-%COMP%_sp-glow 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_sp-glow {\n  0%, 100% {\n    color: #0891b2;\n  }\n  50% {\n    color: #22d3ee;\n    filter: drop-shadow(0 0 8px #22d3ee);\n  }\n}\n.nx-loading-text[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.82rem;\n  color: rgba(6, 182, 212, 0.45);\n  letter-spacing: 0.12em;\n}\n.nx-empty[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  text-align: center;\n  pointer-events: none;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 56px;\n  width: 56px;\n  height: 56px;\n  color: rgba(8, 145, 178, 0.25);\n  animation: _ngcontent-%COMP%_sp-glow 3s ease-in-out infinite;\n}\n.empty-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: rgba(207, 250, 254, 0.3);\n}\n.empty-sub[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  color: rgba(6, 182, 212, 0.25);\n}\n.empty-cta[_ngcontent-%COMP%] {\n  pointer-events: all;\n  margin-top: 12px;\n}\n.nx-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 500;\n  background: rgba(0, 0, 0, 0.7);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.nx-modal[_ngcontent-%COMP%] {\n  background: rgba(3, 14, 28, 0.97);\n  border: 1px solid rgba(8, 145, 178, 0.4);\n  border-radius: 16px;\n  width: 460px;\n  overflow: hidden;\n  box-shadow:\n    0 0 0 1px rgba(8, 145, 178, 0.1),\n    0 32px 80px rgba(0, 0, 0, 0.7),\n    0 0 60px rgba(8, 145, 178, 0.1);\n  animation: _ngcontent-%COMP%_modal-in 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n@keyframes _ngcontent-%COMP%_modal-in {\n  from {\n    opacity: 0;\n    transform: scale(0.85);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.nx-modal-hdr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 20px 14px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(8, 145, 178, 0.18) 0%,\n      rgba(4, 14, 28, 0.5) 100%);\n  border-bottom: 1px solid rgba(8, 145, 178, 0.2);\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #cffafe;\n  direction: rtl;\n}\n.nx-modal-hdr[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #22d3ee;\n}\n.hdr-back[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: rgba(6, 182, 212, 0.5);\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  transition: background 0.13s, color 0.13s;\n}\n.hdr-back[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.hdr-back[_ngcontent-%COMP%]:hover {\n  background: rgba(8, 145, 178, 0.15);\n  color: #06b6d4;\n}\n.nx-type-grid[_ngcontent-%COMP%] {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.type-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 12px;\n  padding: 14px 16px;\n  cursor: pointer;\n  text-align: right;\n  direction: rtl;\n  transition: background 0.15s, border-color 0.15s;\n}\n.type-card[_ngcontent-%COMP%]:hover {\n  background: rgba(8, 145, 178, 0.1);\n  border-color: rgba(8, 145, 178, 0.35);\n}\n.type-icon-wrap[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  border: 1px solid transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.type-icon-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.type-label[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #cffafe;\n  display: block;\n}\n.type-desc[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: rgba(255, 255, 255, 0.35);\n  display: block;\n  font-family: "Share Tech Mono", monospace;\n  margin-top: 2px;\n}\n.type-arrow[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-left: 0;\n  color: rgba(6, 182, 212, 0.35);\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.nx-modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  direction: rtl;\n}\n.nx-modal-body[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: rgba(6, 182, 212, 0.7);\n}\n.nx-modal-body[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n.nx-row-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.5fr;\n  gap: 10px;\n}\n.nx-field[_ngcontent-%COMP%] {\n  background: rgba(8, 145, 178, 0.08);\n  border: 1px solid rgba(8, 145, 178, 0.25);\n  border-radius: 8px;\n  padding: 9px 12px;\n  color: #cffafe;\n  font-size: 0.86rem;\n  outline: none;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: ltr;\n  width: 100%;\n  box-sizing: border-box;\n  transition: border-color 0.15s;\n}\n.nx-field[_ngcontent-%COMP%]:focus {\n  border-color: rgba(8, 145, 178, 0.7);\n  box-shadow: 0 0 0 3px rgba(8, 145, 178, 0.12);\n}\n.nx-field[_ngcontent-%COMP%]::placeholder {\n  color: rgba(6, 182, 212, 0.25);\n  direction: rtl;\n}\n.nx-ta[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 60px;\n  direction: rtl;\n}\n.nx-error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  color: #f87171;\n  border-radius: 8px;\n  padding: 9px 12px;\n  font-size: 0.82rem;\n  direction: rtl;\n}\n.nx-modal-foot[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  direction: rtl;\n  padding: 14px 20px 18px;\n  border-top: 1px solid rgba(8, 145, 178, 0.1);\n}\n/*# sourceMappingURL=nexus.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NexusComponent, [{
    type: Component,
    args: [{ selector: "app-nexus", standalone: true, imports: [CommonModule, FormsModule, MatIconModule, NeuralNetComponent], template: `<div class="nx-root" (mousedown)="onBgDown($event)" (wheel)="onWheel($event)">

  <!-- \u2500\u2500 Toolbar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="nx-toolbar">
    <button class="nx-back" (click)="back()">
      <mat-icon>arrow_back</mat-icon>
      <span>FLOWSPACE</span>
    </button>

    <div class="nx-brand">
      <span class="nx-brand-name">NEXUS</span>
      <span class="nx-brand-sub">\u05DE\u05E7\u05D5\u05E8\u05D5\u05EA \u05DE\u05D9\u05D3\u05E2</span>
    </div>

    <div class="nx-tools">
      @if (connectMode()) {
        <div class="nx-connect-hint">
          @if (connectSource()) {
            <span class="hint-dot"></span>
            <span>{{ connectSource()!.SourceName }} \u2190 \u05D1\u05D7\u05E8 \u05D9\u05E2\u05D3</span>
          } @else {
            <span class="hint-dot"></span>
            <span>\u05D1\u05D7\u05E8 \u05DE\u05E7\u05D5\u05E8 \u05DC\u05D7\u05D9\u05D1\u05D5\u05E8</span>
          }
        </div>
      }
      <button class="nx-btn" [class.nx-btn-active]="connectMode()"
              (click)="toggleConnect()" title="\u05D7\u05D1\u05E8 \u05DE\u05E7\u05D5\u05E8\u05D5\u05EA">
        <mat-icon>cable</mat-icon>
        <span>{{ connectMode() ? '\u05D1\u05D9\u05D8\u05D5\u05DC' : '\u05D7\u05D1\u05E8' }}</span>
      </button>
      <button class="nx-btn nx-btn-primary" (click)="openAdd()">
        <mat-icon>add</mat-icon>
        <span>\u05DE\u05E7\u05D5\u05E8 \u05D7\u05D3\u05E9</span>
      </button>
    </div>
  </div>

  <!-- \u2500\u2500 Canvas \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="nx-canvas-wrap">

    <app-neural-net aria-hidden="true"></app-neural-net>

    <div class="nx-canvas" [style.transform]="transform" [class.nx-connect]="connectMode()">

      <!-- SVG connections -->
      <svg class="nx-svg" width="5000" height="5000"
           style="position:absolute;top:0;left:0;overflow:visible;pointer-events:none">
        <defs>
          <linearGradient id="nx-lg" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stop-color="#0891b2" stop-opacity="0.9"/>
            <stop offset="50%"  stop-color="#06b6d4" stop-opacity="1"/>
            <stop offset="100%" stop-color="#0891b2" stop-opacity="0.9"/>
          </linearGradient>
          <filter id="nx-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        @for (m of mappings(); track m.MappingID) {
          <g style="pointer-events:stroke">
            <path [attr.d]="connPath(m)"
                  stroke="#0891b2" stroke-width="6" fill="none"
                  stroke-opacity="0.12" filter="url(#nx-glow)"/>
            <path [attr.d]="connPath(m)"
                  stroke="url(#nx-lg)" stroke-width="1.8" fill="none"
                  stroke-dasharray="12 5" class="nx-conn-path"
                  style="pointer-events:stroke;cursor:pointer"
                  (click)="deleteMapping(m)"/>
            <text [attr.x]="connMid(m).x" [attr.y]="connMid(m).y"
                  class="nx-conn-label" text-anchor="middle">{{ m.Label || '\u2192' }}</text>
          </g>
        }
      </svg>

      <!-- Source nodes -->
      @for (src of sources(); track src.SourceID) {
        <div class="nx-node"
             [class.nx-src]="connectSource()?.SourceID === src.SourceID"
             [class.nx-tgt]="connectMode() && !!connectSource() && connectSource()!.SourceID !== src.SourceID"
             [style.left.px]="src.PosX"
             [style.top.px]="src.PosY"
             [style.width.px]="nodeW"
             [style.--node-color]="typeInfo(src.SourceType).color"
             (mousedown)="onNodeDown($event, src)"
             (click)="clickNode(src)">

          <div class="node-accent-bar"></div>

          <div class="node-hdr" (mousedown)="$event.stopPropagation()">
            <div class="node-icon-wrap">
              <mat-icon class="node-icon">{{ typeInfo(src.SourceType).icon }}</mat-icon>
            </div>
            <div class="node-title">
              <span class="node-name">{{ src.SourceName }}</span>
              <span class="node-type">{{ typeInfo(src.SourceType).label }}</span>
            </div>
            <div class="node-actions" (mousedown)="$event.stopPropagation()">
              <button class="nact"
                      [class.nact-testing]="testing[src.SourceID]"
                      (click)="$event.stopPropagation(); testConn(src)"
                      title="\u05D1\u05D3\u05D5\u05E7 \u05D7\u05D9\u05D1\u05D5\u05E8">
                <mat-icon>{{ testing[src.SourceID] ? 'sync' : 'cable' }}</mat-icon>
              </button>
              <button class="nact nact-del" (click)="$event.stopPropagation(); deleteSource(src)" title="\u05DE\u05D7\u05E7">
                <mat-icon>close</mat-icon>
              </button>
            </div>
          </div>

          <div class="node-body">
            @if (src.Host) {
              <div class="node-row">
                <mat-icon class="row-icon">dns</mat-icon>
                <span class="row-val">{{ src.Host }}{{ src.Port ? ':' + src.Port : '' }}</span>
              </div>
            }
            @if (src.DbName) {
              <div class="node-row">
                <mat-icon class="row-icon">storage</mat-icon>
                <span class="row-val">{{ src.DbName }}</span>
              </div>
            }
            @if (src.Notes) {
              <div class="node-row node-row-notes">
                <mat-icon class="row-icon">notes</mat-icon>
                <span class="row-val">{{ src.Notes }}</span>
              </div>
            }
          </div>

          <div class="node-footer">
            <span class="status-badge" [class]="'status-' + src.Status">
              <span class="status-dot"></span>
              {{ statusLabel(src.Status) }}
            </span>
          </div>
        </div>
      }
    </div>
  </div>

  <!-- \u2500\u2500 Loading \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (loading()) {
    <div class="nx-loading">
      <div class="nx-spinner">
        <div class="sp-ring"></div>
        <div class="sp-ring sp-r2"></div>
        <mat-icon class="sp-icon">hub</mat-icon>
      </div>
      <span class="nx-loading-text">NEXUS \u05DE\u05D0\u05EA\u05D7\u05DC...</span>
    </div>
  }

  <!-- \u2500\u2500 Empty State \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (!loading() && sources().length === 0) {
    <div class="nx-empty">
      <mat-icon class="empty-icon">storage</mat-icon>
      <div class="empty-title">NEXUS \u05E8\u05D9\u05E7</div>
      <div class="empty-sub">\u05D7\u05D1\u05E8 \u05D0\u05EA \u05DE\u05E7\u05D5\u05E8 \u05D4\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05DC\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8</div>
      <button class="nx-btn nx-btn-primary empty-cta" (click)="openAdd()">
        <mat-icon>add</mat-icon> \u05DE\u05E7\u05D5\u05E8 \u05D7\u05D3\u05E9
      </button>
    </div>
  }

  <!-- \u2500\u2500 Add Dialog \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (showAdd()) {
    <div class="nx-modal-overlay" (click)="showAdd.set(false)">
      <div class="nx-modal" (click)="$event.stopPropagation()">

        <!-- Step 1: choose type -->
        @if (addStep() === 'type') {
          <div class="nx-modal-hdr">
            <mat-icon>add_circle</mat-icon>
            <span>\u05D1\u05D7\u05E8 \u05E1\u05D5\u05D2 \u05DE\u05E7\u05D5\u05E8</span>
          </div>
          <div class="nx-type-grid">
            @for (t of sourceTypes; track t.id) {
              <button class="type-card" (click)="selectType(t.id)">
                <div class="type-icon-wrap" [style.background]="t.color + '22'" [style.border-color]="t.color + '55'">
                  <mat-icon [style.color]="t.color">{{ t.icon }}</mat-icon>
                </div>
                <span class="type-label">{{ t.label }}</span>
                <span class="type-desc">{{ t.desc }}</span>
                <mat-icon class="type-arrow">chevron_left</mat-icon>
              </button>
            }
          </div>
        }

        <!-- Step 2: fill details -->
        @if (addStep() === 'detail') {
          <div class="nx-modal-hdr">
            <button class="hdr-back" (click)="backToType()">
              <mat-icon>arrow_back</mat-icon>
            </button>
            <mat-icon [style.color]="typeInfo(addType()).color">{{ typeInfo(addType()).icon }}</mat-icon>
            <span>{{ typeInfo(addType()).label }}</span>
          </div>
          <div class="nx-modal-body">
            <label>\u05E9\u05DD \u05DE\u05E7\u05D5\u05E8 <span class="req">*</span></label>
            <input class="nx-field" [(ngModel)]="addName" placeholder="\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: DB_\u05D9\u05D9\u05E6\u05D5\u05E8, API_CRM..." (keyup.enter)="saveSource()" />

            @if (addType() === 'DB' || addType() === 'API') {
              <label>{{ addType() === 'DB' ? '\u05E9\u05E8\u05EA / Host' : 'URL / Endpoint' }}</label>
              <input class="nx-field" [(ngModel)]="addHost" placeholder="{{ addType() === 'DB' ? '192.168.1.10' : 'https://api.example.com' }}" />
            }

            @if (addType() === 'DB') {
              <div class="nx-row-2">
                <div>
                  <label>\u05E4\u05D5\u05E8\u05D8</label>
                  <input class="nx-field" [(ngModel)]="addPort" type="number" placeholder="1433" />
                </div>
                <div>
                  <label>\u05E9\u05DD \u05DE\u05E1\u05D3</label>
                  <input class="nx-field" [(ngModel)]="addDb" placeholder="MyDatabase" />
                </div>
              </div>
            }

            <label>\u05D4\u05E2\u05E8\u05D5\u05EA</label>
            <textarea class="nx-field nx-ta" [(ngModel)]="addNotes" rows="2"
                      placeholder="\u05EA\u05D9\u05D0\u05D5\u05E8 \u05E7\u05E6\u05E8..."></textarea>

            @if (addError) {
              <div class="nx-error">{{ addError }}</div>
            }
          </div>
          <div class="nx-modal-foot">
            <button class="nx-btn nx-btn-primary" (click)="saveSource()" [disabled]="addSaving">
              {{ addSaving ? '...' : '\u2713 \u05D4\u05D5\u05E1\u05E3 \u05DE\u05E7\u05D5\u05E8' }}
            </button>
            <button class="nx-btn" (click)="showAdd.set(false)">\u05D1\u05D9\u05D8\u05D5\u05DC</button>
          </div>
        }
      </div>
    </div>
  }

</div>
`, styles: ['/* src/app/features/projects/workspace/nexus/nexus.component.scss */\n.nx-root {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  background:\n    linear-gradient(\n      160deg,\n      #020d18 0%,\n      #051a2e 50%,\n      #041520 100%);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  direction: rtl;\n  -webkit-user-select: none;\n  user-select: none;\n  font-family:\n    "Noto Sans Hebrew",\n    "Segoe UI",\n    sans-serif;\n}\n.nx-toolbar {\n  position: relative;\n  z-index: 200;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 24px;\n  background: rgba(2, 13, 24, 0.92);\n  border-bottom: 1px solid rgba(8, 145, 178, 0.2);\n  box-shadow: 0 1px 0 rgba(8, 145, 178, 0.07), 0 4px 32px rgba(0, 0, 0, 0.5);\n  flex-shrink: 0;\n  direction: ltr;\n}\n.nx-back {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: rgba(6, 182, 212, 0.55);\n  padding: 6px 12px 6px 8px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  transition: color 0.15s, background 0.15s;\n  flex-shrink: 0;\n}\n.nx-back mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.nx-back span {\n  font-size: 0.78rem;\n  font-family: "Share Tech Mono", monospace;\n  letter-spacing: 0.08em;\n}\n.nx-back:hover {\n  color: #06b6d4;\n  background: rgba(8, 145, 178, 0.12);\n}\n.nx-brand {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1px;\n  pointer-events: none;\n}\n.nx-brand .nx-brand-name {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #06b6d4;\n  letter-spacing: 0.2em;\n  text-shadow: 0 0 20px rgba(6, 182, 212, 0.45);\n}\n.nx-brand .nx-brand-sub {\n  font-size: 0.7rem;\n  color: rgba(255, 255, 255, 0.3);\n}\n.nx-tools {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  margin-left: auto;\n}\n.nx-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.6);\n  border-radius: 8px;\n  padding: 7px 14px;\n  font-size: 0.82rem;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: all 0.15s;\n}\n.nx-btn mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.nx-btn:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.nx-btn.nx-btn-active {\n  background: rgba(6, 182, 212, 0.15);\n  border-color: #06b6d4;\n  color: #67e8f9;\n}\n.nx-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.nx-btn-primary {\n  background: rgba(8, 145, 178, 0.3) !important;\n  border-color: rgba(8, 145, 178, 0.7) !important;\n  color: #67e8f9 !important;\n}\n.nx-btn-primary:hover {\n  background: rgba(8, 145, 178, 0.5) !important;\n  color: #fff !important;\n}\n.nx-connect-hint {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.78rem;\n  color: #67e8f9;\n  background: rgba(6, 182, 212, 0.08);\n  border: 1px solid rgba(6, 182, 212, 0.25);\n  border-radius: 20px;\n  padding: 4px 14px;\n  animation: hint-pulse 1.4s ease-in-out infinite;\n}\n.hint-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #06b6d4;\n  animation: hint-pulse 1s ease-in-out infinite;\n}\n@keyframes hint-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n.nx-canvas-wrap {\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  cursor: grab;\n}\n.nx-canvas-wrap:active {\n  cursor: grabbing;\n}\n.nx-canvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  transform-origin: 0 0;\n  width: 5000px;\n  height: 5000px;\n}\n.nx-canvas.nx-connect {\n  cursor: crosshair;\n}\n.nx-conn-path {\n  stroke-dasharray: 12 5;\n  animation: flow 2s linear infinite;\n  transition: stroke-width 0.15s;\n}\n.nx-conn-path:hover {\n  stroke-width: 3 !important;\n}\n@keyframes flow {\n  to {\n    stroke-dashoffset: -68;\n  }\n}\n.nx-conn-label {\n  fill: rgba(6, 182, 212, 0.75);\n  font-size: 11px;\n  font-family: "Share Tech Mono", monospace;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  paint-order: stroke;\n  stroke: #020d18;\n  stroke-width: 3;\n}\n.nx-node {\n  position: absolute;\n  background: rgba(2, 14, 26, 0.92);\n  border: 1px solid rgba(8, 145, 178, 0.4);\n  border-radius: 14px;\n  box-shadow:\n    0 0 0 1px rgba(8, 145, 178, 0.08),\n    0 8px 40px rgba(0, 0, 0, 0.65),\n    0 0 30px rgba(8, 145, 178, 0.07);\n  cursor: grab;\n  overflow: hidden;\n  transition: border-color 0.2s, box-shadow 0.25s;\n  animation: node-in 0.3s ease-out forwards;\n}\n.nx-node:hover {\n  border-color: rgba(8, 145, 178, 0.65);\n  box-shadow:\n    0 0 0 1px rgba(8, 145, 178, 0.2),\n    0 12px 50px rgba(0, 0, 0, 0.7),\n    0 0 50px rgba(8, 145, 178, 0.18);\n}\n.nx-node.nx-src {\n  border-color: #0891b2 !important;\n  box-shadow: 0 0 0 2px rgba(8, 145, 178, 0.4), 0 0 60px rgba(8, 145, 178, 0.3) !important;\n  animation: src-pulse 1s ease-in-out infinite !important;\n}\n.nx-node.nx-tgt:hover {\n  border-color: #10b981 !important;\n  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.4), 0 0 50px rgba(16, 185, 129, 0.25) !important;\n  cursor: crosshair !important;\n}\n@keyframes node-in {\n  from {\n    opacity: 0.3;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes src-pulse {\n  0%, 100% {\n    box-shadow: 0 0 0 2px rgba(8, 145, 178, 0.4), 0 0 60px rgba(8, 145, 178, 0.3);\n  }\n  50% {\n    box-shadow: 0 0 0 5px rgba(8, 145, 178, 0.55), 0 0 90px rgba(8, 145, 178, 0.5);\n  }\n}\n.node-accent-bar {\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--node-color, #0891b2) 40%,\n      #06b6d4 60%,\n      transparent 100%);\n  opacity: 0.8;\n}\n.node-hdr {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 10px 9px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(8, 145, 178, 0.15) 0%,\n      rgba(4, 21, 32, 0.5) 100%);\n  border-bottom: 1px solid rgba(8, 145, 178, 0.12);\n  cursor: grab;\n}\n.node-icon-wrap {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: rgba(8, 145, 178, 0.18);\n  border: 1px solid rgba(8, 145, 178, 0.35);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  animation: icon-glow 3s ease-in-out infinite;\n}\n.node-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #22d3ee;\n}\n@keyframes icon-glow {\n  0%, 100% {\n    box-shadow: none;\n  }\n  50% {\n    box-shadow: 0 0 10px rgba(8, 145, 178, 0.5);\n  }\n}\n.node-title {\n  flex: 1;\n  min-width: 0;\n}\n.node-title .node-name {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #cffafe;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n}\n.node-title .node-type {\n  font-size: 0.67rem;\n  color: rgba(6, 182, 212, 0.5);\n  font-family: "Share Tech Mono", monospace;\n}\n.node-actions {\n  display: flex;\n  gap: 2px;\n  flex-shrink: 0;\n}\n.nact {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 26px;\n  height: 26px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(255, 255, 255, 0.25);\n  transition: all 0.13s;\n}\n.nact mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.nact:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.75);\n}\n.nact.nact-del:hover {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.nact.nact-testing mat-icon {\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.node-body {\n  padding: 8px 12px 6px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  direction: rtl;\n}\n.node-row {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 0.75rem;\n  color: rgba(207, 250, 254, 0.55);\n}\n.row-icon {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n  color: rgba(6, 182, 212, 0.4);\n  flex-shrink: 0;\n}\n.row-val {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.72rem;\n}\n.node-row-notes .row-val {\n  font-family: "Noto Sans Hebrew", sans-serif;\n  font-size: 0.73rem;\n  white-space: normal;\n}\n.node-footer {\n  padding: 7px 12px 9px;\n  border-top: 1px solid rgba(8, 145, 178, 0.08);\n}\n.status-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.69rem;\n  font-weight: 600;\n  border-radius: 20px;\n  padding: 3px 10px;\n  font-family: "Share Tech Mono", monospace;\n  letter-spacing: 0.04em;\n}\n.status-badge.status-untested {\n  background: rgba(255, 255, 255, 0.05);\n  color: rgba(255, 255, 255, 0.35);\n}\n.status-badge.status-connected {\n  background: rgba(16, 185, 129, 0.12);\n  color: #34d399;\n}\n.status-badge.status-failed {\n  background: rgba(239, 68, 68, 0.12);\n  color: #f87171;\n}\n.status-dot {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.status-untested .status-dot {\n  background: rgba(255, 255, 255, 0.3);\n}\n.status-connected .status-dot {\n  background: #34d399;\n  box-shadow: 0 0 4px #34d399;\n  animation: blink 2s ease-in-out infinite;\n}\n.status-failed .status-dot {\n  background: #f87171;\n}\n@keyframes blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n.nx-loading {\n  position: absolute;\n  inset: 0;\n  z-index: 150;\n  background: rgba(2, 13, 24, 0.9);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n}\n.nx-spinner {\n  position: relative;\n  width: 68px;\n  height: 68px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sp-ring {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  border-top-color: #0891b2;\n  animation: nx-spin 1.6s linear infinite;\n}\n.sp-ring.sp-r2 {\n  inset: 14px;\n  border-top-color: #06b6d4;\n  animation-duration: 2.4s;\n  animation-direction: reverse;\n}\n@keyframes nx-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.sp-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  color: #0891b2;\n  animation: sp-glow 2s ease-in-out infinite;\n}\n@keyframes sp-glow {\n  0%, 100% {\n    color: #0891b2;\n  }\n  50% {\n    color: #22d3ee;\n    filter: drop-shadow(0 0 8px #22d3ee);\n  }\n}\n.nx-loading-text {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.82rem;\n  color: rgba(6, 182, 212, 0.45);\n  letter-spacing: 0.12em;\n}\n.nx-empty {\n  position: absolute;\n  inset: 0;\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  text-align: center;\n  pointer-events: none;\n}\n.empty-icon {\n  font-size: 56px;\n  width: 56px;\n  height: 56px;\n  color: rgba(8, 145, 178, 0.25);\n  animation: sp-glow 3s ease-in-out infinite;\n}\n.empty-title {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: rgba(207, 250, 254, 0.3);\n}\n.empty-sub {\n  font-size: 0.84rem;\n  color: rgba(6, 182, 212, 0.25);\n}\n.empty-cta {\n  pointer-events: all;\n  margin-top: 12px;\n}\n.nx-modal-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 500;\n  background: rgba(0, 0, 0, 0.7);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.nx-modal {\n  background: rgba(3, 14, 28, 0.97);\n  border: 1px solid rgba(8, 145, 178, 0.4);\n  border-radius: 16px;\n  width: 460px;\n  overflow: hidden;\n  box-shadow:\n    0 0 0 1px rgba(8, 145, 178, 0.1),\n    0 32px 80px rgba(0, 0, 0, 0.7),\n    0 0 60px rgba(8, 145, 178, 0.1);\n  animation: modal-in 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n@keyframes modal-in {\n  from {\n    opacity: 0;\n    transform: scale(0.85);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.nx-modal-hdr {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 20px 14px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(8, 145, 178, 0.18) 0%,\n      rgba(4, 14, 28, 0.5) 100%);\n  border-bottom: 1px solid rgba(8, 145, 178, 0.2);\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #cffafe;\n  direction: rtl;\n}\n.nx-modal-hdr mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #22d3ee;\n}\n.hdr-back {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: rgba(6, 182, 212, 0.5);\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  transition: background 0.13s, color 0.13s;\n}\n.hdr-back mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.hdr-back:hover {\n  background: rgba(8, 145, 178, 0.15);\n  color: #06b6d4;\n}\n.nx-type-grid {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.type-card {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 12px;\n  padding: 14px 16px;\n  cursor: pointer;\n  text-align: right;\n  direction: rtl;\n  transition: background 0.15s, border-color 0.15s;\n}\n.type-card:hover {\n  background: rgba(8, 145, 178, 0.1);\n  border-color: rgba(8, 145, 178, 0.35);\n}\n.type-icon-wrap {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  border: 1px solid transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.type-icon-wrap mat-icon {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.type-label {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #cffafe;\n  display: block;\n}\n.type-desc {\n  font-size: 0.72rem;\n  color: rgba(255, 255, 255, 0.35);\n  display: block;\n  font-family: "Share Tech Mono", monospace;\n  margin-top: 2px;\n}\n.type-arrow {\n  margin-right: auto;\n  margin-left: 0;\n  color: rgba(6, 182, 212, 0.35);\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.nx-modal-body {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  direction: rtl;\n}\n.nx-modal-body label {\n  font-size: 0.8rem;\n  color: rgba(6, 182, 212, 0.7);\n}\n.nx-modal-body .req {\n  color: #f87171;\n}\n.nx-row-2 {\n  display: grid;\n  grid-template-columns: 1fr 1.5fr;\n  gap: 10px;\n}\n.nx-field {\n  background: rgba(8, 145, 178, 0.08);\n  border: 1px solid rgba(8, 145, 178, 0.25);\n  border-radius: 8px;\n  padding: 9px 12px;\n  color: #cffafe;\n  font-size: 0.86rem;\n  outline: none;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: ltr;\n  width: 100%;\n  box-sizing: border-box;\n  transition: border-color 0.15s;\n}\n.nx-field:focus {\n  border-color: rgba(8, 145, 178, 0.7);\n  box-shadow: 0 0 0 3px rgba(8, 145, 178, 0.12);\n}\n.nx-field::placeholder {\n  color: rgba(6, 182, 212, 0.25);\n  direction: rtl;\n}\n.nx-ta {\n  resize: vertical;\n  min-height: 60px;\n  direction: rtl;\n}\n.nx-error {\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  color: #f87171;\n  border-radius: 8px;\n  padding: 9px 12px;\n  font-size: 0.82rem;\n  direction: rtl;\n}\n.nx-modal-foot {\n  display: flex;\n  gap: 10px;\n  direction: rtl;\n  padding: 14px 20px 18px;\n  border-top: 1px solid rgba(8, 145, 178, 0.1);\n}\n/*# sourceMappingURL=nexus.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: HttpClient }], { onMove: [{
    type: HostListener,
    args: ["window:mousemove", ["$event"]]
  }], onUp: [{
    type: HostListener,
    args: ["window:mouseup"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NexusComponent, { className: "NexusComponent", filePath: "src/app/features/projects/workspace/nexus/nexus.component.ts", lineNumber: 50 });
})();
export {
  NexusComponent
};
//# sourceMappingURL=chunk-PSXTFDK6.js.map
