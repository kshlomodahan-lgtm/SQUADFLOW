import {
  NeuralNetComponent
} from "./chunk-6BJOJE7S.js";
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
  ButtonComponent,
  ButtonsModule,
  IndicatorsModule,
  LoaderComponent
} from "./chunk-BV74N4V5.js";
import "./chunk-YZNXQPNO.js";
import {
  FormsModule,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-4FOUEPN2.js";
import {
  CommonModule,
  Component,
  HttpClient,
  NgTemplateOutlet,
  __spreadProps,
  __spreadValues,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VR4UVLCZ.js";

// src/app/features/projects/workspace/studio/studio.component.ts
var _c0 = () => ["\u05DE\u05E1\u05DA \u05E0\u05D9\u05D4\u05D5\u05DC \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05E2\u05DD \u05D2\u05E8\u05D9\u05D3, \u05D7\u05D9\u05E4\u05D5\u05E9 \u05D5\u05E4\u05D9\u05DC\u05D8\u05E8 \u05DC\u05E4\u05D9 \u05E1\u05D8\u05D8\u05D5\u05E1", "\u05D3\u05E9\u05D1\u05D5\u05E8\u05D3 KPI \u05E2\u05DD 4 \u05DB\u05E8\u05D8\u05D9\u05E1\u05D9\u05DD \u05D5\u05D2\u05E8\u05E3 \u05E2\u05DE\u05D5\u05D3\u05D5\u05EA \u05D7\u05D5\u05D3\u05E9\u05D9", "\u05D8\u05D5\u05E4\u05E1 \u05D4\u05D5\u05E1\u05E4\u05EA \u05DE\u05D5\u05E6\u05E8 \u05E2\u05DD \u05EA\u05DE\u05D5\u05E0\u05D4, \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 \u05D5\u05DE\u05D7\u05D9\u05E8"];
var _c1 = (a0) => ({ $implicit: a0, depth: 0 });
var _c2 = (a0, a1) => ({ $implicit: a0, depth: a1 });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.type;
function StudioComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function StudioComponent_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mode.set("ai"));
    });
    \u0275\u0275text(1, " \u2192 \u05D9\u05D9\u05E6\u05D0 \u05DC-AI ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 25);
    \u0275\u0275listener("click", function StudioComponent_Conditional_18_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearCanvas());
    });
    \u0275\u0275text(3, " \u2715 \u05E0\u05E7\u05D4 ");
    \u0275\u0275elementEnd();
  }
}
function StudioComponent_For_29_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function StudioComponent_For_29_Conditional_2_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const s_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.toggleScreen(s_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r4.expanded ? "\u25BE" : "\u25B8", " ");
  }
}
function StudioComponent_For_29_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "\xB7");
    \u0275\u0275elementEnd();
  }
}
function StudioComponent_For_29_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, "\u05D7\u05D3\u05E9");
    \u0275\u0275elementEnd();
  }
}
function StudioComponent_For_29_Conditional_11_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, "\u05D7\u05D3\u05E9");
    \u0275\u0275elementEnd();
  }
}
function StudioComponent_For_29_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275listener("click", function StudioComponent_For_29_Conditional_11_For_2_Template_div_click_0_listener() {
      const child_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectScreen(child_r7));
    });
    \u0275\u0275elementStart(1, "span", 29);
    \u0275\u0275text(2, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, StudioComponent_For_29_Conditional_11_For_2_Conditional_7_Template, 2, 0, "span", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.activeScreen()?.id === child_r7.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(child_r7.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r7.nameHe || child_r7.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(child_r7.isNew ? 7 : -1);
  }
}
function StudioComponent_For_29_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275repeaterCreate(1, StudioComponent_For_29_Conditional_11_For_2_Template, 8, 5, "div", 36, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(s_r4.children);
  }
}
function StudioComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275listener("click", function StudioComponent_For_29_Template_div_click_1_listener() {
      const s_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectScreen(s_r4));
    });
    \u0275\u0275conditionalCreate(2, StudioComponent_For_29_Conditional_2_Template, 2, 1, "button", 28)(3, StudioComponent_For_29_Conditional_3_Template, 2, 0, "span", 29);
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, StudioComponent_For_29_Conditional_8_Template, 2, 0, "span", 32);
    \u0275\u0275elementStart(9, "button", 33);
    \u0275\u0275listener("click", function StudioComponent_For_29_Template_button_click_9_listener($event) {
      const s_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.openAddScreen(s_r4.id));
    });
    \u0275\u0275text(10, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, StudioComponent_For_29_Conditional_11_Template, 3, 0, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("level0", true);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.activeScreen()?.id === s_r4.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r4.children.length ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r4.nameHe || s_r4.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r4.isNew ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(s_r4.expanded && s_r4.children.length ? 11 : -1);
  }
}
function StudioComponent_Conditional_31_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "\u2726 \u05DE\u05E1\u05DA \u05D7\u05D3\u05E9");
    \u0275\u0275elementEnd();
  }
}
function StudioComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, StudioComponent_Conditional_31_Conditional_7_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.activeScreen().icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.activeScreen().nameHe || ctx_r1.activeScreen().name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.activeScreen().route);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeScreen().isNew ? 7 : -1);
  }
}
function StudioComponent_Conditional_32_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    \u0275\u0275property("value", c_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r9);
  }
}
function StudioComponent_Conditional_32_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function StudioComponent_Conditional_32_For_15_Template_button_click_0_listener() {
      const eg_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.aiPrompt.set(eg_r11));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const eg_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(eg_r11);
  }
}
function StudioComponent_Conditional_32_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-loader", 60);
    \u0275\u0275text(1, " \u05DE\u05D7\u05D5\u05DC\u05DC... ");
  }
}
function StudioComponent_Conditional_32_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u26A1 \u05D7\u05D5\u05DC\u05DC \u05DE\u05E1\u05DA ");
  }
}
function StudioComponent_Conditional_32_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.aiError());
  }
}
function StudioComponent_Conditional_32_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275element(1, "div", 61);
    \u0275\u0275elementStart(2, "p", 62);
    \u0275\u0275text(3, "\u05D4\u05E1\u05D5\u05DB\u05DF FRONT \u05DE\u05D7\u05D5\u05DC\u05DC \u05D0\u05EA \u05D4\u05DE\u05E1\u05DA...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 63)(5, "div", 64);
    \u0275\u0275text(6, "\u2713 \u05E0\u05D9\u05EA\u05D5\u05D7 \u05D3\u05E8\u05D9\u05E9\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 64);
    \u0275\u0275text(8, "\u2713 \u05EA\u05DB\u05E0\u05D5\u05DF \u05DE\u05D1\u05E0\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 65);
    \u0275\u0275text(10, "\u27F3 \u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05D5\u05D3 Angular");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 66);
    \u0275\u0275text(12, "\u25CB SCSS + RTL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 66);
    \u0275\u0275text(14, "\u25CB \u05D0\u05D9\u05E0\u05D8\u05D2\u05E8\u05E6\u05D9\u05D4");
    \u0275\u0275elementEnd()()();
  }
}
function StudioComponent_Conditional_32_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 67)(2, "div", 68)(3, "button", 69);
    \u0275\u0275listener("click", function StudioComponent_Conditional_32_Conditional_23_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.aiTab.set("html"));
    });
    \u0275\u0275text(4, "HTML");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 69);
    \u0275\u0275listener("click", function StudioComponent_Conditional_32_Conditional_23_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.aiTab.set("ts"));
    });
    \u0275\u0275text(6, "TypeScript");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 69);
    \u0275\u0275listener("click", function StudioComponent_Conditional_32_Conditional_23_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.aiTab.set("scss"));
    });
    \u0275\u0275text(8, "SCSS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 70)(10, "button", 71);
    \u0275\u0275listener("click", function StudioComponent_Conditional_32_Conditional_23_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyCode(ctx_r1.aiResult()[ctx_r1.aiTab()]));
    });
    \u0275\u0275text(11, "\u2398 \u05D4\u05E2\u05EA\u05E7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 72);
    \u0275\u0275text(13, "\u21E2 \u05E9\u05DC\u05D7 \u05DC\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "pre", 73);
    \u0275\u0275element(15, "code", 74);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.aiTab() === "html");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.aiTab() === "ts");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.aiTab() === "scss");
    \u0275\u0275advance(8);
    \u0275\u0275property("innerHTML", ctx_r1.aiResult()[ctx_r1.aiTab()], \u0275\u0275sanitizeHtml);
  }
}
function StudioComponent_Conditional_32_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 75);
    \u0275\u0275text(2, "\u26A1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, '\u05EA\u05D0\u05E8 \u05D0\u05EA \u05D4\u05DE\u05E1\u05DA \u05E9\u05D0\u05EA\u05D4 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D1\u05E0\u05D5\u05EA \u05D5\u05DC\u05D7\u05E5 "\u05D7\u05D5\u05DC\u05DC \u05DE\u05E1\u05DA"');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 76);
    \u0275\u0275text(6, "\u05D4\u05E1\u05D5\u05DB\u05DF FRONT \u05D9\u05D7\u05D5\u05DC\u05DC \u05E7\u05D5\u05D3 Angular \u05DE\u05DC\u05D0 \u05E2\u05DD Kendo, RTL \u05D5\u05E1\u05D8\u05E0\u05D3\u05E8\u05D8\u05D9 \u05D4\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4");
    \u0275\u0275elementEnd()();
  }
}
function StudioComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 42)(2, "div", 43)(3, "span", 44);
    \u0275\u0275text(4, "\u{1F916} \u05EA\u05D0\u05E8 \u05DE\u05D4 \u05D0\u05EA\u05D4 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D1\u05E0\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 45)(6, "select", 46);
    \u0275\u0275listener("change", function StudioComponent_Conditional_32_Template_select_change_6_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.aiConnector.set($event.target.value));
    });
    \u0275\u0275elementStart(7, "option", 47);
    \u0275\u0275text(8, "-- \u05D1\u05D7\u05E8 \u05DE\u05D5\u05D3\u05DC AI --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, StudioComponent_Conditional_32_For_10_Template, 2, 2, "option", 48, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 49)(12, "span", 50);
    \u0275\u0275text(13, "\u05D3\u05D5\u05D2\u05DE\u05D0\u05D5\u05EA:");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(14, StudioComponent_Conditional_32_For_15_Template, 2, 1, "button", 51, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "textarea", 52);
    \u0275\u0275listener("input", function StudioComponent_Conditional_32_Template_textarea_input_16_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.aiPrompt.set($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 53)(18, "button", 54);
    \u0275\u0275listener("click", function StudioComponent_Conditional_32_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateWithAI());
    });
    \u0275\u0275conditionalCreate(19, StudioComponent_Conditional_32_Conditional_19_Template, 2, 0)(20, StudioComponent_Conditional_32_Conditional_20_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, StudioComponent_Conditional_32_Conditional_21_Template, 2, 1, "span", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(22, StudioComponent_Conditional_32_Conditional_22_Template, 15, 0, "div", 56);
    \u0275\u0275conditionalCreate(23, StudioComponent_Conditional_32_Conditional_23_Template, 16, 7, "div", 57);
    \u0275\u0275conditionalCreate(24, StudioComponent_Conditional_32_Conditional_24_Template, 7, 0, "div", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.aiConnector());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.aiConnectors);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.aiPrompt());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.aiLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.aiLoading() ? 19 : 20);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.aiError() ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.aiLoading() ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.aiResult() ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.aiLoading() && !ctx_r1.aiResult() ? 24 : -1);
  }
}
function StudioComponent_Conditional_33_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 85);
    \u0275\u0275listener("click", function StudioComponent_Conditional_33_For_6_Template_button_click_0_listener() {
      const cat_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.paletteCat.set(cat_r15));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.paletteCat() === cat_r15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.paletteCatLabels[cat_r15], " ");
  }
}
function StudioComponent_Conditional_33_For_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 89);
    \u0275\u0275text(1, "\u{1F4E6}");
    \u0275\u0275elementEnd();
  }
}
function StudioComponent_Conditional_33_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275listener("dragstart", function StudioComponent_Conditional_33_For_9_Template_div_dragstart_0_listener() {
      const ctrl_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragStart(ctrl_r17.type));
    })("dragend", function StudioComponent_Conditional_33_For_9_Template_div_dragend_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragEnd());
    });
    \u0275\u0275elementStart(1, "span", 87);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 88);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, StudioComponent_Conditional_33_For_9_Conditional_5_Template, 2, 0, "span", 89);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctrl_r17 = ctx.$implicit;
    \u0275\u0275styleProp("--ctrl-color", ctrl_r17.color);
    \u0275\u0275property("title", ctrl_r17.desc || ctrl_r17.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctrl_r17.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctrl_r17.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctrl_r17.isContainer ? 5 : -1);
  }
}
function StudioComponent_Conditional_33_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 90);
    \u0275\u0275text(2, "\u{1F3A8}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\u05D2\u05E8\u05D5\u05E8 \u05E4\u05E7\u05D3\u05D9\u05DD \u05DE\u05D4\u05E4\u05DC\u05D8\u05D4 \u05DC\u05DB\u05D0\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 91);
    \u0275\u0275text(6, "\u05D0\u05D5 \u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1-AI Generate \u05DC\u05E7\u05D1\u05DC \u05E7\u05D5\u05D3 \u05DE\u05DC\u05D0 \u05DE\u05D9\u05D3");
    \u0275\u0275elementEnd()();
  }
}
function StudioComponent_Conditional_33_For_13_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StudioComponent_Conditional_33_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StudioComponent_Conditional_33_For_13_ng_container_0_Template, 1, 0, "ng-container", 92);
  }
  if (rf & 2) {
    const ctrl_r18 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const canvasNode_r19 = \u0275\u0275reference(36);
    \u0275\u0275property("ngTemplateOutlet", canvasNode_r19)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c1, ctrl_r18));
  }
}
function StudioComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 77)(2, "div", 78);
    \u0275\u0275text(3, "\u05E4\u05E7\u05D3\u05D9\u05DD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 79);
    \u0275\u0275repeaterCreate(5, StudioComponent_Conditional_33_For_6_Template, 2, 3, "button", 80, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 81);
    \u0275\u0275repeaterCreate(8, StudioComponent_Conditional_33_For_9_Template, 6, 6, "div", 82, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 83);
    \u0275\u0275listener("dragover", function StudioComponent_Conditional_33_Template_div_dragover_10_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragOver($event, "root"));
    })("dragleave", function StudioComponent_Conditional_33_Template_div_dragleave_10_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragLeave());
    })("drop", function StudioComponent_Conditional_33_Template_div_drop_10_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDropToCanvas($event));
    });
    \u0275\u0275conditionalCreate(11, StudioComponent_Conditional_33_Conditional_11_Template, 7, 0, "div", 84);
    \u0275\u0275repeaterCreate(12, StudioComponent_Conditional_33_For_13_Template, 1, 4, "ng-container", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.paletteCats);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.filteredPalette());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("drop-hover", ctx_r1.dropTarget() === "root");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canvas().length === 0 ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.canvas());
  }
}
function StudioComponent_Conditional_34_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" \u270E \u05DE\u05D0\u05E4\u05D9\u05D9\u05E0\u05D9\u05DD \u2014 ", ctx_r1.selected().label, " ");
  }
}
function StudioComponent_Conditional_34_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u05D1\u05D7\u05E8 \u05E4\u05E7\u05D3 \u05DC\u05E2\u05E8\u05D9\u05DB\u05D4 ");
  }
}
function StudioComponent_Conditional_34_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94)(1, "div", 95)(2, "label", 96);
    \u0275\u0275text(3, "\u05DB\u05D5\u05EA\u05E8\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 97);
    \u0275\u0275listener("input", function StudioComponent_Conditional_34_Conditional_4_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateProp("label", $event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 95)(6, "label", 96);
    \u0275\u0275text(7, "Placeholder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 97);
    \u0275\u0275listener("input", function StudioComponent_Conditional_34_Conditional_4_Template_input_input_8_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateProp("placeholder", $event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 95)(10, "label", 96);
    \u0275\u0275text(11, "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 98)(13, "button", 99);
    \u0275\u0275listener("click", function StudioComponent_Conditional_34_Conditional_4_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateProp("required", !ctx_r1.selected().props["required"]));
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 95)(16, "label", 96);
    \u0275\u0275text(17, "\u05E1\u05D5\u05D2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 100);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 101);
    \u0275\u0275listener("click", function StudioComponent_Conditional_34_Conditional_4_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeCtrl(ctx_r1.selected().id));
    });
    \u0275\u0275text(21, " \u2715 \u05D4\u05E1\u05E8 \u05E4\u05E7\u05D3 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.selected().props["label"] || "");
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.selected().props["placeholder"] || "");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("on", ctx_r1.selected().props["required"]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selected().props["required"] ? "\u2713 \u05DB\u05DF" : "\u2717 \u05DC\u05D0", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.ctrlDef(ctx_r1.selected().type)?.label);
  }
}
function StudioComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "aside", 22)(1, "div", 93);
    \u0275\u0275conditionalCreate(2, StudioComponent_Conditional_34_Conditional_2_Template, 1, 1)(3, StudioComponent_Conditional_34_Conditional_3_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, StudioComponent_Conditional_34_Conditional_4_Template, 22, 6, "div", 94);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.selected() ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.selected() ? 4 : -1);
  }
}
function StudioComponent_ng_template_35_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 110);
    \u0275\u0275listener("click", function StudioComponent_ng_template_35_Conditional_2_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctrl_r22 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.toggleCtrlExpand(ctrl_r22));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctrl_r22 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctrl_r22.expanded ? "\u25BE" : "\u25B8", " ");
  }
}
function StudioComponent_ng_template_35_Conditional_11_For_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StudioComponent_ng_template_35_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StudioComponent_ng_template_35_Conditional_11_For_2_ng_container_0_Template, 1, 0, "ng-container", 92);
  }
  if (rf & 2) {
    const child_r25 = ctx.$implicit;
    const depth_r26 = \u0275\u0275nextContext(2).depth;
    \u0275\u0275nextContext();
    const canvasNode_r19 = \u0275\u0275reference(36);
    \u0275\u0275property("ngTemplateOutlet", canvasNode_r19)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c2, child_r25, depth_r26 + 1));
  }
}
function StudioComponent_ng_template_35_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275text(1, "\u05D2\u05E8\u05D5\u05E8 \u05E4\u05E7\u05D3 \u05DC\u05DB\u05D0\u05DF");
    \u0275\u0275elementEnd();
  }
}
function StudioComponent_ng_template_35_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275listener("dragover", function StudioComponent_ng_template_35_Conditional_11_Template_div_dragover_0_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctrl_r22 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragOver($event, ctrl_r22.id));
    })("dragleave", function StudioComponent_ng_template_35_Conditional_11_Template_div_dragleave_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragLeave());
    })("drop", function StudioComponent_ng_template_35_Conditional_11_Template_div_drop_0_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctrl_r22 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDropToCtrl($event, ctrl_r22));
    });
    \u0275\u0275repeaterCreate(1, StudioComponent_ng_template_35_Conditional_11_For_2_Template, 1, 5, "ng-container", null, _forTrack0);
    \u0275\u0275conditionalCreate(3, StudioComponent_ng_template_35_Conditional_11_Conditional_3_Template, 2, 0, "div", 112);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctrl_r22 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("drop-hover", ctx_r1.dropTarget() === ctrl_r22.id);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctrl_r22.children);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctrl_r22.children.length === 0 ? 3 : -1);
  }
}
function StudioComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275listener("click", function StudioComponent_ng_template_35_Template_div_click_0_listener($event) {
      const ctrl_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.selectCtrl(ctrl_r22));
    });
    \u0275\u0275elementStart(1, "div", 103);
    \u0275\u0275conditionalCreate(2, StudioComponent_ng_template_35_Conditional_2_Template, 2, 1, "button", 104);
    \u0275\u0275elementStart(3, "span", 105);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 106);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 107);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 108);
    \u0275\u0275listener("click", function StudioComponent_ng_template_35_Template_button_click_9_listener($event) {
      const ctrl_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.removeCtrl(ctrl_r22.id));
    });
    \u0275\u0275text(10, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, StudioComponent_ng_template_35_Conditional_11_Template, 4, 3, "div", 109);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctrl_r22 = ctx.$implicit;
    const depth_r26 = ctx.depth;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--node-depth", depth_r26);
    \u0275\u0275classProp("selected", ctrl_r22.selected)("is-container", ctx_r1.ctrlDef(ctrl_r22.type)?.isContainer);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.ctrlDef(ctrl_r22.type)?.isContainer ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.ctrlDef(ctrl_r22.type)?.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.ctrlDef(ctrl_r22.type)?.icon, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctrl_r22.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.ctrlDef(ctrl_r22.type)?.label);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.ctrlDef(ctrl_r22.type)?.isContainer && ctrl_r22.expanded ? 11 : -1);
  }
}
function StudioComponent_Conditional_37_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.addScreenError());
  }
}
function StudioComponent_Conditional_37_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116)(1, "label", 117);
    \u0275\u0275text(2, "\u05EA\u05D7\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 119)(4, "span", 100);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.newScreenParent());
  }
}
function StudioComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "kendo-dialog", 113);
    \u0275\u0275listener("close", function StudioComponent_Conditional_37_Template_kendo_dialog_close_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addScreenOpen.set(false));
    });
    \u0275\u0275elementStart(1, "div", 114);
    \u0275\u0275conditionalCreate(2, StudioComponent_Conditional_37_Conditional_2_Template, 2, 1, "div", 115);
    \u0275\u0275elementStart(3, "div", 116)(4, "label", 117);
    \u0275\u0275text(5, "\u05E9\u05DD \u05DE\u05E1\u05DA ");
    \u0275\u0275elementStart(6, "span", 118);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 119)(9, "input", 120);
    \u0275\u0275listener("input", function StudioComponent_Conditional_37_Template_input_input_9_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newScreenName.set($event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 116)(11, "label", 117);
    \u0275\u0275text(12, "Route (URL)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 119)(14, "input", 121);
    \u0275\u0275listener("input", function StudioComponent_Conditional_37_Template_input_input_14_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newScreenRoute.set($event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 116)(16, "label", 117);
    \u0275\u0275text(17, "\u05D0\u05D9\u05D9\u05E7\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 119)(19, "input", 122);
    \u0275\u0275listener("input", function StudioComponent_Conditional_37_Template_input_input_19_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newScreenIcon.set($event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(20, StudioComponent_Conditional_37_Conditional_20_Template, 6, 1, "div", 116);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "kendo-dialog-actions")(22, "div", 123)(23, "button", 124);
    \u0275\u0275listener("click", function StudioComponent_Conditional_37_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveNewScreen());
    });
    \u0275\u0275text(24, "\u2713 \u05E6\u05D5\u05E8 \u05DE\u05E1\u05DA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 125);
    \u0275\u0275listener("click", function StudioComponent_Conditional_37_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addScreenOpen.set(false));
    });
    \u0275\u0275text(26, "\u05D1\u05D9\u05D8\u05D5\u05DC");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("width", 460);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.addScreenError() ? 2 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r1.newScreenName());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.newScreenRoute());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.newScreenIcon());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.newScreenParent() ? 20 : -1);
  }
}
var CONTROL_PALETTE = [
  // Layout
  { type: "sf-card", label: "\u05DB\u05E8\u05D8\u05D9\u05E1", icon: "\u25AD", category: "layout", isContainer: true, color: "#8b5cf6", desc: "\u05E7\u05D5\u05E4\u05E1\u05EA \u05EA\u05D5\u05DB\u05DF \u05E2\u05DD \u05DB\u05D5\u05EA\u05E8\u05EA" },
  { type: "sf-tabs", label: "\u05DC\u05E9\u05D5\u05E0\u05D9\u05D5\u05EA", icon: "\u229E", category: "layout", isContainer: true, color: "#8b5cf6", desc: "TabStrip \u05E2\u05DD \u05EA\u05EA\u05D9-\u05DE\u05E1\u05DB\u05D9\u05DD" },
  { type: "sf-section", label: "\u05DE\u05E7\u05D8\u05E2", icon: "\u2261", category: "layout", isContainer: true, color: "#8b5cf6", desc: "\u05D0\u05D6\u05D5\u05E8 \u05DE\u05E7\u05D5\u05D1\u05E5 \u05E2\u05DD \u05DB\u05D5\u05EA\u05E8\u05EA" },
  { type: "sf-grid-row", label: "\u05E9\u05D5\u05E8\u05EA \u05E2\u05DE\u05D5\u05D3\u05D5\u05EA", icon: "\u205D\u205D", category: "layout", isContainer: true, color: "#8b5cf6", desc: "\u05E4\u05E8\u05D9\u05E1\u05EA CSS Grid" },
  { type: "sf-modal", label: "\u05D3\u05D9\u05D0\u05DC\u05D5\u05D2", icon: "\u29E0", category: "layout", isContainer: true, color: "#8b5cf6", desc: "Kendo Dialog" },
  // Form controls
  { type: "sf-input", label: "\u05E9\u05D3\u05D4 \u05D8\u05E7\u05E1\u05D8", icon: "\u2610", category: "form", isContainer: false, color: "#0891b2", desc: "Kendo TextBox" },
  { type: "sf-select", label: "\u05E8\u05E9\u05D9\u05DE\u05D4 \u05E0\u05D2\u05DC\u05DC\u05EA", icon: "\u25BE", category: "form", isContainer: false, color: "#0891b2", desc: "Kendo DropDownList" },
  { type: "sf-date", label: "\u05EA\u05D0\u05E8\u05D9\u05DA", icon: "\u{1F4C5}", category: "form", isContainer: false, color: "#0891b2", desc: "Kendo DatePicker" },
  { type: "sf-number", label: "\u05DE\u05E1\u05E4\u05E8", icon: "#", category: "form", isContainer: false, color: "#0891b2", desc: "Kendo NumericTextBox" },
  { type: "sf-textarea", label: "\u05D8\u05E7\u05E1\u05D8 \u05D7\u05D5\u05E4\u05E9\u05D9", icon: "\u204C", category: "form", isContainer: false, color: "#0891b2", desc: "Textarea" },
  { type: "sf-checkbox", label: "\u05EA\u05D9\u05D1\u05EA \u05E1\u05D9\u05DE\u05D5\u05DF", icon: "\u2611", category: "form", isContainer: false, color: "#0891b2", desc: "Angular Checkbox" },
  { type: "sf-toggle", label: "\u05DE\u05EA\u05D2 (seg)", icon: "\u22B7", category: "form", isContainer: false, color: "#0891b2", desc: "Seg-Ctrl \u05E1\u05D8\u05E0\u05D3\u05E8\u05D8 RTL" },
  { type: "sf-file", label: "\u05D4\u05E2\u05DC\u05D0\u05EA \u05E7\u05D5\u05D1\u05E5", icon: "\u21E7", category: "form", isContainer: false, color: "#0891b2", desc: "Kendo Upload" },
  // Data display
  { type: "sf-grid", label: "\u05D2\u05E8\u05D9\u05D3 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD", icon: "\u229F", category: "data", isContainer: false, color: "#059669", desc: "Kendo Grid \u05DE\u05DC\u05D0 \u05E2\u05DD \u05E4\u05D2\u05D9\u05E0\u05E6\u05D9\u05D4" },
  { type: "sf-chart", label: "\u05D2\u05E8\u05E3", icon: "\u{1F4CA}", category: "data", isContainer: false, color: "#059669", desc: "Kendo Chart" },
  { type: "sf-list", label: "\u05E8\u05E9\u05D9\u05DE\u05D4", icon: "\u2630", category: "data", isContainer: false, color: "#059669", desc: "\u05E8\u05E9\u05D9\u05DE\u05EA \u05E4\u05E8\u05D9\u05D8\u05D9\u05DD \u05E2\u05DD @for" },
  { type: "sf-kpi", label: "KPI \u05DB\u05E8\u05D8\u05D9\u05E1", icon: "\u25B2", category: "data", isContainer: false, color: "#059669", desc: "\u05DE\u05D7\u05D5\u05D5\u05DF \u05DE\u05E1\u05E4\u05E8\u05D9 \u05E2\u05DD \u05D8\u05E8\u05E0\u05D3" },
  { type: "sf-tree", label: "\u05E2\u05E5 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD", icon: "\u{1F332}", category: "data", isContainer: false, color: "#059669", desc: "Kendo TreeView" },
  // Actions
  { type: "sf-btn-save", label: "\u05E9\u05DE\u05D5\u05E8", icon: "\u2713", category: "action", isContainer: false, color: "#f97316", desc: "\u05DB\u05E4\u05EA\u05D5\u05E8 \u05E9\u05DE\u05D9\u05E8\u05D4 \u05DB\u05EA\u05D5\u05DD (btn-save)" },
  { type: "sf-btn-cancel", label: "\u05D1\u05D9\u05D8\u05D5\u05DC", icon: "\u2715", category: "action", isContainer: false, color: "#64748b", desc: "\u05DB\u05E4\u05EA\u05D5\u05E8 \u05D1\u05D9\u05D8\u05D5\u05DC (btn-cancel)" },
  { type: "sf-btn-danger", label: "\u05DE\u05D7\u05D9\u05E7\u05D4", icon: "\u{1F5D1}", category: "action", isContainer: false, color: "#ef4444", desc: "\u05DB\u05E4\u05EA\u05D5\u05E8 \u05DE\u05D7\u05D9\u05E7\u05D4 (btn-danger)" },
  { type: "sf-link", label: "\u05E7\u05D9\u05E9\u05D5\u05E8", icon: "\u{1F517}", category: "action", isContainer: false, color: "#64748b" },
  // Display
  { type: "sf-label", label: "\u05EA\u05D5\u05D5\u05D9\u05EA", icon: "T", category: "display", isContainer: false, color: "#94a3b8" },
  { type: "sf-badge", label: "\u05EA\u05D2 \u05E1\u05D8\u05D8\u05D5\u05E1", icon: "\u25C9", category: "display", isContainer: false, color: "#94a3b8", desc: "Kendo Badge" },
  { type: "sf-divider", label: "\u05DE\u05E4\u05E8\u05D9\u05D3", icon: "\u2500", category: "display", isContainer: false, color: "#94a3b8" },
  { type: "sf-icon", label: "\u05D0\u05D9\u05D9\u05E7\u05D5\u05DF", icon: "\u2605", category: "display", isContainer: false, color: "#94a3b8" },
  { type: "sf-search", label: "\u05D7\u05D9\u05E4\u05D5\u05E9", icon: "\u{1F50D}", category: "display", isContainer: false, color: "#94a3b8", desc: "search-wrap \u05E1\u05D8\u05E0\u05D3\u05E8\u05D8" }
];
var DEFAULT_SCREENS = [
  { id: "dashboard", name: "Dashboard", nameHe: "\u05DC\u05D5\u05D7 \u05D1\u05E7\u05E8\u05D4", route: "/app/dashboard", icon: "\u{1F4CA}", parentId: null, children: [], expanded: true },
  { id: "orgs", name: "Organizations", nameHe: "\u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05DD", route: "/app/organizations", icon: "\u{1F3E2}", parentId: null, children: [], expanded: false },
  { id: "users", name: "Users", nameHe: "\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD", route: "/app/users", icon: "\u{1F465}", parentId: null, children: [], expanded: false },
  {
    id: "catalog",
    name: "Catalog",
    nameHe: "\u05E7\u05D8\u05DC\u05D5\u05D2",
    route: "/app/catalog",
    icon: "\u{1F4E6}",
    parentId: null,
    expanded: false,
    children: [
      { id: "cat-products", name: "Products", nameHe: "\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD", route: "/app/products", icon: "\u{1F3F7}\uFE0F", parentId: "catalog", children: [], expanded: false },
      { id: "cat-packages", name: "Packages", nameHe: "\u05D7\u05D1\u05D9\u05DC\u05D5\u05EA", route: "/app/packages", icon: "\u{1F4E6}", parentId: "catalog", children: [], expanded: false }
    ]
  },
  { id: "projects", name: "Projects", nameHe: "\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD", route: "/app/projects", icon: "\u{1F4C1}", parentId: null, children: [], expanded: false },
  { id: "audit", name: "Audit Log", nameHe: "\u05D9\u05D5\u05DE\u05DF \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA", route: "/app/audit", icon: "\u{1F4CB}", parentId: null, children: [], expanded: false },
  { id: "settings", name: "Settings", nameHe: "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA", route: "/app/settings", icon: "\u2699\uFE0F", parentId: null, children: [], expanded: false }
];
var _ctrlIdCounter = 0;
function mkId() {
  return `ctrl_${++_ctrlIdCounter}_${Date.now()}`;
}
var StudioComponent = class _StudioComponent {
  route;
  router;
  http;
  projectId = 0;
  // ── Mode ─────────────────────────────────────────────────────
  mode = signal(
    "ai",
    ...ngDevMode ? [{ debugName: "mode" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // ── Screen Tree ──────────────────────────────────────────────
  screens = signal(
    [...DEFAULT_SCREENS.map((s) => __spreadProps(__spreadValues({}, s), { children: [...s.children] }))],
    ...ngDevMode ? [{ debugName: "screens" }] : (
      /* istanbul ignore next */
      []
    )
  );
  activeScreen = signal(
    null,
    ...ngDevMode ? [{ debugName: "activeScreen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Add Screen dialog
  addScreenOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "addScreenOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  newScreenName = signal(
    "",
    ...ngDevMode ? [{ debugName: "newScreenName" }] : (
      /* istanbul ignore next */
      []
    )
  );
  newScreenRoute = signal(
    "",
    ...ngDevMode ? [{ debugName: "newScreenRoute" }] : (
      /* istanbul ignore next */
      []
    )
  );
  newScreenIcon = signal(
    "\u{1F4C4}",
    ...ngDevMode ? [{ debugName: "newScreenIcon" }] : (
      /* istanbul ignore next */
      []
    )
  );
  newScreenParent = signal(
    null,
    ...ngDevMode ? [{ debugName: "newScreenParent" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addScreenError = signal(
    "",
    ...ngDevMode ? [{ debugName: "addScreenError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // ── AI Generate ──────────────────────────────────────────────
  aiPrompt = signal(
    "",
    ...ngDevMode ? [{ debugName: "aiPrompt" }] : (
      /* istanbul ignore next */
      []
    )
  );
  aiConnector = signal(
    "",
    ...ngDevMode ? [{ debugName: "aiConnector" }] : (
      /* istanbul ignore next */
      []
    )
  );
  aiLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "aiLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  aiResult = signal(
    null,
    ...ngDevMode ? [{ debugName: "aiResult" }] : (
      /* istanbul ignore next */
      []
    )
  );
  aiError = signal(
    "",
    ...ngDevMode ? [{ debugName: "aiError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  aiTab = signal(
    "html",
    ...ngDevMode ? [{ debugName: "aiTab" }] : (
      /* istanbul ignore next */
      []
    )
  );
  aiConnectors = ["Anthropic (Claude)", "OpenAI (GPT-4o)", "Azure OpenAI"];
  // ── Visual Builder ───────────────────────────────────────────
  palette = CONTROL_PALETTE;
  paletteCat = signal(
    "all",
    ...ngDevMode ? [{ debugName: "paletteCat" }] : (
      /* istanbul ignore next */
      []
    )
  );
  canvas = signal(
    [],
    ...ngDevMode ? [{ debugName: "canvas" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selected = signal(
    null,
    ...ngDevMode ? [{ debugName: "selected" }] : (
      /* istanbul ignore next */
      []
    )
  );
  dragType = signal(
    null,
    ...ngDevMode ? [{ debugName: "dragType" }] : (
      /* istanbul ignore next */
      []
    )
  );
  dropTarget = signal(
    null,
    ...ngDevMode ? [{ debugName: "dropTarget" }] : (
      /* istanbul ignore next */
      []
    )
  );
  paletteCats = ["all", "layout", "form", "data", "action", "display"];
  paletteCatLabels = {
    all: "\u05D4\u05DB\u05DC",
    layout: "\u05DE\u05D1\u05E0\u05D4",
    form: "\u05E9\u05D3\u05D5\u05EA",
    data: "\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD",
    action: "\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA",
    display: "\u05EA\u05E6\u05D5\u05D2\u05D4"
  };
  filteredPalette = computed(
    () => {
      const cat = this.paletteCat();
      return cat === "all" ? this.palette : this.palette.filter((c) => c.category === cat);
    },
    ...ngDevMode ? [{ debugName: "filteredPalette" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ctrlDef(type) {
    return this.palette.find((p) => p.type === type);
  }
  constructor(route, router, http) {
    this.route = route;
    this.router = router;
    this.http = http;
  }
  ngOnInit() {
    this.projectId = Number(this.route.snapshot.paramMap.get("projectId"));
    this.activeScreen.set(this.screens()[0]);
  }
  // ── Screen Tree ──────────────────────────────────────────────
  toggleScreen(s) {
    s.expanded = !s.expanded;
    this.screens.update((v) => [...v]);
  }
  selectScreen(s) {
    this.activeScreen.set(s);
    this.canvas.set([]);
    this.selected.set(null);
    this.aiResult.set(null);
  }
  openAddScreen(parentId = null) {
    this.newScreenName.set("");
    this.newScreenRoute.set("");
    this.newScreenIcon.set("\u{1F4C4}");
    this.newScreenParent.set(parentId);
    this.addScreenError.set("");
    this.addScreenOpen.set(true);
  }
  saveNewScreen() {
    if (!this.newScreenName().trim()) {
      this.addScreenError.set("\u05E9\u05DD \u05DE\u05E1\u05DA \u05D4\u05D5\u05D0 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4");
      return;
    }
    const route = this.newScreenRoute().trim() || `/${this.newScreenName().toLowerCase().replace(/\s+/g, "-")}`;
    const newS = {
      id: `screen_${Date.now()}`,
      name: this.newScreenName(),
      nameHe: this.newScreenName(),
      route,
      icon: this.newScreenIcon(),
      parentId: this.newScreenParent(),
      children: [],
      expanded: false,
      isNew: true
    };
    this.screens.update((screens) => {
      const parentId = this.newScreenParent();
      if (!parentId) {
        return [...screens, newS];
      }
      const addToParent = (nodes) => nodes.map((n) => {
        if (n.id === parentId)
          return __spreadProps(__spreadValues({}, n), { children: [...n.children, newS], expanded: true });
        if (n.children.length)
          return __spreadProps(__spreadValues({}, n), { children: addToParent(n.children) });
        return n;
      });
      return addToParent(screens);
    });
    this.addScreenOpen.set(false);
    this.activeScreen.set(newS);
  }
  // ── AI Generate ──────────────────────────────────────────────
  generateWithAI() {
    if (!this.aiPrompt().trim()) {
      this.aiError.set("\u05D4\u05DB\u05E0\u05E1 \u05EA\u05D9\u05D0\u05D5\u05E8 \u05E9\u05DC \u05D4\u05DE\u05E1\u05DA");
      return;
    }
    this.aiLoading.set(true);
    this.aiError.set("");
    this.aiResult.set(null);
    this.http.post("/api/studio/generate", {
      prompt: this.aiPrompt(),
      projectId: this.projectId,
      connectorId: this.aiConnector(),
      screenName: this.activeScreen()?.name,
      route: this.activeScreen()?.route
    }).subscribe({
      next: (r) => {
        this.aiLoading.set(false);
        this.aiResult.set(r.data);
      },
      error: () => {
        this.aiLoading.set(false);
        const name = this.activeScreen()?.name ?? "Screen";
        this.aiResult.set(this.simulateGeneration(name, this.aiPrompt()));
      }
    });
  }
  simulateGeneration(name, prompt) {
    const className = name.replace(/\s+/g, "") + "Component";
    const selector = "app-" + name.toLowerCase().replace(/\s+/g, "-");
    return {
      ts: `import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { GridModule, PageChangeEvent } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { orderBy, SortDescriptor } from '@progress/kendo-data-query';

@Component({
  selector: '${selector}',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, GridModule, ButtonsModule, IndicatorsModule],
  templateUrl: './${selector}.component.html',
  styleUrl: './${selector}.component.scss',
})
export class ${className} {
  loading = signal(true);
  error   = signal('');
  items   = signal<any[]>([]);
  sort: SortDescriptor[] = [{ field: 'id', dir: 'asc' }];
  pageSize = 25; skip = 0;

  get pageData() { return orderBy(this.items(), this.sort).slice(this.skip, this.skip + this.pageSize); }

  constructor(private http: HttpClient) { this.load(); }

  load() {
    this.loading.set(true);
    // TODO: Replace with actual API endpoint
    this.http.get<any>('/api/TODO').subscribe({
      next: r  => { this.items.set(r.data ?? []); this.loading.set(false); },
      error: () => { this.error.set('\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D8\u05E2\u05D9\u05E0\u05D4'); this.loading.set(false); },
    });
  }

  onPageChange(e: PageChangeEvent) { this.skip = e.skip; this.pageSize = e.take; }
  onSortChange(sort: SortDescriptor[]) { this.sort = sort; }
}`,
      html: `<!-- ${name} | Generated from: "${prompt}" -->
<div class="page-root">

  <div class="page-header">
    <div>
      <h1 class="page-title">${name}</h1>
      <p class="page-sub">\u05E0\u05D9\u05D4\u05D5\u05DC ${name}</p>
    </div>
    <button class="btn-save" type="button" (click)="openNew()">\u2713 \u05D7\u05D3\u05E9</button>
  </div>

  <div class="page-toolbar">
    <div class="search-wrap">
      <mat-icon class="search-icon">search</mat-icon>
      <input class="search-input" type="text" placeholder="\u05D7\u05D9\u05E4\u05D5\u05E9..."
             (input)="onSearch($any($event.target).value)" />
    </div>
  </div>

  @if (loading()) { <kendo-loader type="pulsing" size="large" themeColor="primary" /> }
  @if (error())   { <div class="error-box">{{ error() }}</div> }

  @if (!loading() && !error()) {
    <kendo-grid
      class="main-grid"
      [data]="{ data: pageData, total: items().length }"
      [skip]="skip" [pageSize]="pageSize"
      [pageable]="{ buttonCount: 5, info: true, type: 'numeric', pageSizes: [10,25,50] }"
      [sortable]="{ mode: 'single', allowUnsort: false }"
      [sort]="sort"
      [reorderable]="true" [resizable]="true"
      [selectable]="{ mode: 'multiple', checkboxOnly: true }"
      [columnMenu]="true"
      scrollable="none"
      (pageChange)="onPageChange($event)"
      (sortChange)="onSortChange($event)">

      <kendo-grid-checkbox-column [width]="44" [showSelectAll]="true" />

      <kendo-grid-column field="id" title="\u05DE\u05D6\u05D4\u05D4" [width]="80" />
      <!-- TODO: Add data columns -->

      <kendo-grid-column title="" [width]="80" [sortable]="false"
        [resizable]="false" [columnMenu]="false">
        <ng-template kendoGridCellTemplate let-row>
          <button class="btn-edit" (click)="openEdit(row)">\u270E</button>
        </ng-template>
      </kendo-grid-column>

      <kendo-grid-messages
        pagerItemsPerPage="\u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3" pagerOf="\u05DE\u05EA\u05D5\u05DA" pagerItems="\u05E8\u05E9\u05D5\u05DE\u05D5\u05EA"
        noRecords="\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E8\u05E9\u05D5\u05DE\u05D5\u05EA" loading="\u05D8\u05D5\u05E2\u05DF..." />
    </kendo-grid>
  }
</div>`,
      scss: `.page-root { padding: 24px 32px; direction: rtl; }
.page-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 20px; }
.page-title  { font-size: 1.3rem; font-weight: 700; color: var(--sf-text); margin: 0 0 4px; }
.page-sub    { font-size: .8rem; color: var(--sf-text-secondary); margin: 0; }
.page-toolbar { margin-bottom: 14px; }
.main-grid .k-grid-header th.k-header {
  background: var(--sf-grid-hd-bg) !important;
  color: var(--sf-grid-hd-color) !important;
  font-weight: 700 !important; font-size: .78rem !important;
  border-bottom: 2px solid var(--sf-grid-hd-border) !important;
}`
    };
  }
  copyCode(text) {
    navigator.clipboard.writeText(text);
  }
  // ── Visual Builder ───────────────────────────────────────────
  onDragStart(type) {
    this.dragType.set(type);
  }
  onDragEnd() {
    this.dragType.set(null);
    this.dropTarget.set(null);
  }
  onDragOver(e, targetId) {
    e.preventDefault();
    this.dropTarget.set(targetId);
  }
  onDragLeave() {
    this.dropTarget.set(null);
  }
  onDropToCanvas(e) {
    e.preventDefault();
    const type = this.dragType();
    if (!type)
      return;
    this.addToCanvas(null, type);
    this.dragType.set(null);
    this.dropTarget.set(null);
  }
  onDropToCtrl(e, parentCtrl) {
    e.preventDefault();
    e.stopPropagation();
    const type = this.dragType();
    if (!type)
      return;
    this.addToCanvas(parentCtrl, type);
    this.dragType.set(null);
    this.dropTarget.set(null);
  }
  addToCanvas(parent, type) {
    const def = this.ctrlDef(type);
    if (!def)
      return;
    const ctrl = {
      id: mkId(),
      type,
      label: def.label,
      children: [],
      expanded: true,
      selected: false,
      props: { label: def.label, required: false, placeholder: "" }
    };
    if (parent && parent.children !== void 0) {
      this.canvas.update((cs) => {
        const setInTree = (nodes) => nodes.map((n) => {
          if (n.id === parent.id)
            return __spreadProps(__spreadValues({}, n), { children: [...n.children, ctrl] });
          return __spreadProps(__spreadValues({}, n), { children: setInTree(n.children) });
        });
        return setInTree(cs);
      });
    } else {
      this.canvas.update((cs) => [...cs, ctrl]);
    }
    this.selectCtrl(ctrl);
  }
  selectCtrl(ctrl) {
    const deselect = (nodes) => nodes.map((n) => __spreadProps(__spreadValues({}, n), {
      selected: n.id === ctrl.id,
      children: deselect(n.children)
    }));
    this.canvas.update((cs) => deselect(cs));
    this.selected.set(ctrl);
  }
  removeCtrl(id) {
    const remove = (nodes) => nodes.filter((n) => n.id !== id).map((n) => __spreadProps(__spreadValues({}, n), { children: remove(n.children) }));
    this.canvas.update((cs) => remove(cs));
    if (this.selected()?.id === id)
      this.selected.set(null);
  }
  toggleCtrlExpand(ctrl) {
    ctrl.expanded = !ctrl.expanded;
    this.canvas.update((cs) => [...cs]);
  }
  updateProp(key, value) {
    const sel = this.selected();
    if (!sel)
      return;
    sel.props[key] = value;
    if (key === "label")
      sel.label = value;
    this.canvas.update((cs) => [...cs]);
  }
  clearCanvas() {
    this.canvas.set([]);
    this.selected.set(null);
  }
  back() {
    this.router.navigate(["/app/projects", this.projectId]);
  }
  static \u0275fac = function StudioComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudioComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudioComponent, selectors: [["app-studio"]], decls: 38, vars: 10, consts: [["canvasNode", ""], [1, "st-root"], [1, "st-toolbar"], [1, "st-back", 3, "click"], [1, "st-brand"], [1, "st-brand-name"], [1, "st-brand-sub"], [1, "mode-toggle"], [1, "mode-btn", 3, "click"], [1, "st-tools"], ["aria-hidden", "true"], [1, "st-layout"], [1, "screen-tree-panel"], [1, "stp-header"], [1, "stp-title"], ["type", "button", "title", "\u05D4\u05D5\u05E1\u05E3 \u05DE\u05E1\u05DA", 1, "btn-add-screen", 3, "click"], [1, "screen-tree"], [1, "tree-node", 3, "level0"], [1, "st-center"], [1, "active-screen-bar"], [1, "ai-panel"], [1, "visual-panel"], [1, "props-panel"], ["title", "\u2726 \u05DE\u05E1\u05DA \u05D7\u05D3\u05E9", 3, "width"], ["type", "button", 1, "btn-export", 3, "click"], ["type", "button", 1, "btn-clear", 3, "click"], [1, "tree-node"], [1, "tree-item", 3, "click"], ["type", "button", 1, "tree-expand"], [1, "tree-leaf"], [1, "tree-icon"], [1, "tree-name"], [1, "tree-new-badge"], ["type", "button", "title", "\u05D4\u05D5\u05E1\u05E3 \u05EA\u05EA-\u05DE\u05E1\u05DA", 1, "tree-add-child", 3, "click"], [1, "tree-children"], ["type", "button", 1, "tree-expand", 3, "click"], [1, "tree-item", "level1", 3, "active"], [1, "tree-item", "level1", 3, "click"], [1, "asb-icon"], [1, "asb-name"], [1, "asb-route"], [1, "asb-new"], [1, "ai-prompt-area"], [1, "ai-prompt-header"], [1, "ai-prompt-title"], [1, "ai-connector-sel"], [1, "ai-select", 3, "change", "value"], ["value", ""], [3, "value"], [1, "ai-prompt-examples"], [1, "ai-eg-label"], ["type", "button", 1, "ai-eg-btn"], ["rows", "4", "dir", "rtl", "placeholder", "\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: \u05DE\u05E1\u05DA \u05E0\u05D9\u05D4\u05D5\u05DC \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05E2\u05DD Kendo Grid, \u05D7\u05D9\u05E4\u05D5\u05E9, \u05E4\u05D9\u05DC\u05D8\u05E8 \u05DC\u05E4\u05D9 \u05E1\u05D8\u05D8\u05D5\u05E1, \u05D5\u05D3\u05D9\u05D0\u05DC\u05D5\u05D2 \u05E2\u05E8\u05D9\u05DB\u05D4...", 1, "ai-textarea", 3, "input", "value"], [1, "ai-actions"], ["type", "button", 1, "btn-ai-generate", 3, "click", "disabled"], [1, "ai-error"], [1, "ai-loading-panel"], [1, "ai-result"], [1, "ai-empty"], ["type", "button", 1, "ai-eg-btn", 3, "click"], ["type", "pulsing", "size", "small", "themeColor", "secondary"], [1, "ai-loading-ring"], [1, "ai-loading-text"], [1, "ai-loading-steps"], [1, "ai-step", "done"], [1, "ai-step", "active"], [1, "ai-step"], [1, "ai-result-header"], [1, "result-tabs"], [1, "result-tab", 3, "click"], [1, "result-actions"], ["type", "button", 1, "btn-copy-code", 3, "click"], ["type", "button", 1, "btn-deploy"], [1, "ai-code-block"], [3, "innerHTML"], [1, "ai-empty-icon"], [1, "ai-empty-sub"], [1, "palette-panel"], [1, "palette-header"], [1, "palette-cats"], [1, "palette-cat", 3, "active"], [1, "palette-items"], ["draggable", "true", 1, "palette-item", 3, "--ctrl-color", "title"], [1, "canvas-area", 3, "dragover", "dragleave", "drop"], [1, "canvas-empty"], [1, "palette-cat", 3, "click"], ["draggable", "true", 1, "palette-item", 3, "dragstart", "dragend", "title"], [1, "pi-icon"], [1, "pi-label"], [1, "pi-container"], [1, "canvas-empty-icon"], [1, "canvas-empty-sub"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "props-header"], [1, "props-body"], [1, "prop-row"], [1, "prop-label"], ["type", "text", 1, "prop-input", 3, "input", "value"], [1, "prop-toggle"], [1, "prop-bool", 3, "click"], [1, "prop-type"], ["type", "button", 1, "btn-remove-ctrl", 3, "click"], [1, "canvas-node", 3, "click"], [1, "cn-row"], ["type", "button", 1, "cn-expand"], [1, "cn-icon"], [1, "cn-label"], [1, "cn-type"], ["type", "button", 1, "cn-remove", 3, "click"], [1, "cn-children", 3, "drop-hover"], ["type", "button", 1, "cn-expand", 3, "click"], [1, "cn-children", 3, "dragover", "dragleave", "drop"], [1, "cn-drop-hint"], ["title", "\u2726 \u05DE\u05E1\u05DA \u05D7\u05D3\u05E9", 3, "close", "width"], [1, "edit-body"], [1, "edit-error"], [1, "edit-row"], [1, "edit-label"], [1, "req"], [1, "edit-field"], ["type", "text", "dir", "rtl", "placeholder", "\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: \u05E0\u05D9\u05D4\u05D5\u05DC \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA", 1, "edit-input", 3, "input", "value"], ["type", "text", "dir", "ltr", "placeholder", "/app/clients", 1, "edit-input", 3, "input", "value"], ["type", "text", "placeholder", "\u{1F4C4}", 1, "edit-input", 2, "font-size", "1.2rem", "width", "60px", "text-align", "center", 3, "input", "value"], [1, "edit-footer"], ["kendoButton", "", 1, "btn-save", 3, "click"], ["kendoButton", "", "fillMode", "outline", 1, "btn-cancel", 3, "click"]], template: function StudioComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
      \u0275\u0275listener("click", function StudioComponent_Template_button_click_2_listener() {
        return ctx.back();
      });
      \u0275\u0275elementStart(3, "mat-icon");
      \u0275\u0275text(4, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "FLOWSPACE");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "span", 5);
      \u0275\u0275text(9, "STUDIO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 6);
      \u0275\u0275text(11, "\u05DE\u05D7\u05D5\u05DC\u05DC \u05DE\u05E1\u05DB\u05D9\u05DD AI-First");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 7)(13, "button", 8);
      \u0275\u0275listener("click", function StudioComponent_Template_button_click_13_listener() {
        return ctx.mode.set("ai");
      });
      \u0275\u0275text(14, " \u{1F916} AI Generate ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 8);
      \u0275\u0275listener("click", function StudioComponent_Template_button_click_15_listener() {
        return ctx.mode.set("visual");
      });
      \u0275\u0275text(16, " \u{1F3A8} Visual Builder ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 9);
      \u0275\u0275conditionalCreate(18, StudioComponent_Conditional_18_Template, 4, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(19, "app-neural-net", 10);
      \u0275\u0275elementStart(20, "div", 11)(21, "aside", 12)(22, "div", 13)(23, "span", 14);
      \u0275\u0275text(24, "\u05E2\u05E5 \u05DE\u05E1\u05DB\u05D9\u05DD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 15);
      \u0275\u0275listener("click", function StudioComponent_Template_button_click_25_listener() {
        return ctx.openAddScreen();
      });
      \u0275\u0275text(26, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 16);
      \u0275\u0275repeaterCreate(28, StudioComponent_For_29_Template, 12, 9, "div", 17, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "main", 18);
      \u0275\u0275conditionalCreate(31, StudioComponent_Conditional_31_Template, 8, 4, "div", 19);
      \u0275\u0275conditionalCreate(32, StudioComponent_Conditional_32_Template, 25, 9, "div", 20);
      \u0275\u0275conditionalCreate(33, StudioComponent_Conditional_33_Template, 14, 3, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(34, StudioComponent_Conditional_34_Template, 5, 2, "aside", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(35, StudioComponent_ng_template_35_Template, 12, 13, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275conditionalCreate(37, StudioComponent_Conditional_37_Template, 27, 6, "kendo-dialog", 23);
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275classProp("active", ctx.mode() === "ai");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.mode() === "visual");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.mode() === "visual" && ctx.canvas().length > 0 ? 18 : -1);
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.screens());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.activeScreen() ? 31 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mode() === "ai" ? 32 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mode() === "visual" ? 33 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mode() === "visual" ? 34 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.addScreenOpen() ? 37 : -1);
    }
  }, dependencies: [
    CommonModule,
    NgTemplateOutlet,
    FormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    MatIconModule,
    MatIcon,
    Dir,
    NeuralNetComponent,
    DialogsModule,
    DialogComponent,
    DialogActionsComponent,
    InputsModule,
    ButtonsModule,
    ButtonComponent,
    IndicatorsModule,
    LoaderComponent
  ], styles: ['\n.st-root[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  background:\n    linear-gradient(\n      150deg,\n      #050d1a 0%,\n      #0a1020 50%,\n      #060c18 100%);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  direction: rtl;\n  font-family:\n    "Noto Sans Hebrew",\n    "Segoe UI",\n    sans-serif;\n}\n.st-toolbar[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 200;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 24px;\n  background: rgba(5, 10, 20, 0.95);\n  border-bottom: 1px solid rgba(13, 71, 255, 0.2);\n  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.5);\n  direction: ltr;\n}\n.st-back[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: rgba(99, 102, 241, 0.55);\n  padding: 6px 10px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n  transition: color 0.15s, background 0.15s;\n}\n.st-back[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.st-back[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-family: "Share Tech Mono", monospace;\n  letter-spacing: 0.08em;\n}\n.st-back[_ngcontent-%COMP%]:hover {\n  color: #818cf8;\n  background: rgba(99, 102, 241, 0.1);\n}\n.st-brand[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  pointer-events: none;\n}\n.st-brand[_ngcontent-%COMP%]   .st-brand-name[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #818cf8;\n  letter-spacing: 0.2em;\n  text-shadow: 0 0 20px rgba(99, 102, 241, 0.4);\n}\n.st-brand[_ngcontent-%COMP%]   .st-brand-sub[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: rgba(255, 255, 255, 0.25);\n}\n.mode-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border-radius: 8px;\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  overflow: hidden;\n  margin-left: auto;\n}\n.mode-btn[_ngcontent-%COMP%] {\n  padding: 6px 16px;\n  border: none;\n  background: transparent;\n  color: rgba(255, 255, 255, 0.35);\n  font-size: 0.78rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.mode-btn[_ngcontent-%COMP%]    + .mode-btn[_ngcontent-%COMP%] {\n  border-left: 1px solid rgba(99, 102, 241, 0.25);\n}\n.mode-btn[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.7);\n  background: rgba(99, 102, 241, 0.08);\n}\n.mode-btn.active[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.25);\n  color: #818cf8;\n}\n.st-tools[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-export[_ngcontent-%COMP%], \n.btn-clear[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  border-radius: 7px;\n  font-size: 0.76rem;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  border: 1px solid rgba(99, 102, 241, 0.35);\n  background: rgba(99, 102, 241, 0.1);\n  color: #818cf8;\n  transition: all 0.15s;\n}\n.btn-export[_ngcontent-%COMP%]:hover, \n.btn-clear[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.2);\n}\n.btn-clear[_ngcontent-%COMP%] {\n  border-color: rgba(239, 68, 68, 0.35);\n  background: rgba(239, 68, 68, 0.08);\n  color: #f87171;\n}\n.btn-clear[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.18);\n}\n.st-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n  position: relative;\n  z-index: 10;\n}\n.screen-tree-panel[_ngcontent-%COMP%] {\n  width: 200px;\n  flex-shrink: 0;\n  background: rgba(5, 10, 20, 0.75);\n  border-left: 1px solid rgba(99, 102, 241, 0.1);\n  display: flex;\n  flex-direction: column;\n}\n.stp-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 12px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.stp-title[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.4);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.btn-add-screen[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 5px;\n  border: 1px solid rgba(99, 102, 241, 0.4);\n  background: rgba(99, 102, 241, 0.12);\n  color: #818cf8;\n  font-size: 0.9rem;\n  cursor: pointer;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-add-screen[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.25);\n}\n.screen-tree[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 6px 0;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(99, 102, 241, 0.15) transparent;\n}\n.tree-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  cursor: pointer;\n  direction: rtl;\n  transition: background 0.12s;\n  position: relative;\n  font-size: 0.76rem;\n  color: rgba(255, 255, 255, 0.4);\n}\n.tree-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04);\n  color: rgba(255, 255, 255, 0.7);\n}\n.tree-item.active[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n  color: #818cf8;\n  font-weight: 600;\n}\n.tree-item.level1[_ngcontent-%COMP%] {\n  padding-right: 24px;\n  font-size: 0.73rem;\n}\n.tree-expand[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  color: inherit;\n  cursor: pointer;\n  font-size: 0.7rem;\n  padding: 0;\n  width: 14px;\n  flex-shrink: 0;\n}\n.tree-leaf[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  font-size: 0.6rem;\n  width: 14px;\n  flex-shrink: 0;\n  text-align: center;\n}\n.tree-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  flex-shrink: 0;\n}\n.tree-name[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.tree-new-badge[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  padding: 1px 5px;\n  border-radius: 6px;\n  background: rgba(99, 102, 241, 0.25);\n  color: #a5b4fc;\n  flex-shrink: 0;\n}\n.tree-add-child[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  color: rgba(99, 102, 241, 0.4);\n  cursor: pointer;\n  font-size: 0.8rem;\n  padding: 0;\n  opacity: 0;\n  transition: opacity 0.1s;\n}\n.tree-item[_ngcontent-%COMP%]:hover   .tree-add-child[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.tree-add-child[_ngcontent-%COMP%]:hover {\n  color: #818cf8;\n}\n.st-center[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.active-screen-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  flex-shrink: 0;\n  background: rgba(99, 102, 241, 0.06);\n  border-bottom: 1px solid rgba(99, 102, 241, 0.12);\n  direction: rtl;\n}\n.asb-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.asb-name[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.7);\n}\n.asb-route[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.7rem;\n  color: rgba(99, 102, 241, 0.6);\n  margin-right: 4px;\n}\n.asb-new[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #a5b4fc;\n  padding: 1px 7px;\n  border-radius: 8px;\n  background: rgba(99, 102, 241, 0.2);\n}\n.ai-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  padding: 16px 20px;\n  gap: 16px;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(99, 102, 241, 0.2) transparent;\n}\n.ai-prompt-area[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  border-radius: 14px;\n  padding: 16px;\n}\n.ai-prompt-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  direction: rtl;\n}\n.ai-prompt-title[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.7);\n}\n.ai-select[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-radius: 7px;\n  border: 1px solid rgba(99, 102, 241, 0.3);\n  background: rgba(99, 102, 241, 0.08);\n  color: #a5b4fc;\n  font-size: 0.76rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  direction: ltr;\n}\n.ai-prompt-examples[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n  margin-bottom: 10px;\n  direction: rtl;\n}\n.ai-eg-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: rgba(255, 255, 255, 0.25);\n  flex-shrink: 0;\n}\n.ai-eg-btn[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 3px 10px;\n  border-radius: 12px;\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  background: rgba(99, 102, 241, 0.06);\n  color: rgba(165, 180, 252, 0.6);\n  cursor: pointer;\n  transition: all 0.12s;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.ai-eg-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.18);\n  color: #a5b4fc;\n  border-color: rgba(99, 102, 241, 0.4);\n}\n.ai-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 12px;\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  border-radius: 9px;\n  background: rgba(5, 10, 20, 0.6);\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 0.85rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  resize: vertical;\n  line-height: 1.6;\n}\n.ai-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #818cf8;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);\n}\n.ai-textarea[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.2);\n}\n.ai-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 10px;\n}\n.btn-ai-generate[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 24px;\n  border-radius: 9px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed);\n  border: none;\n  color: #fff;\n  font-size: 0.87rem;\n  font-weight: 700;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  box-shadow: 0 4px 16px rgba(79, 70, 229, 0.4);\n  transition: all 0.15s;\n}\n.btn-ai-generate[_ngcontent-%COMP%]   kendo-loader[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.btn-ai-generate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #4338ca,\n      #6d28d9);\n  box-shadow: 0 6px 24px rgba(79, 70, 229, 0.5);\n  transform: translateY(-1px);\n}\n.btn-ai-generate[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n}\n.ai-error[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #f87171;\n}\n.ai-loading-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 40px;\n  background: rgba(255, 255, 255, 0.02);\n  border-radius: 14px;\n  border: 1px solid rgba(99, 102, 241, 0.15);\n}\n.ai-loading-ring[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  border: 3px solid rgba(99, 102, 241, 0.2);\n  border-top-color: #818cf8;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ai-loading-text[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: rgba(165, 180, 252, 0.7);\n  margin: 0;\n}\n.ai-loading-steps[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.ai-step[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  padding: 3px 10px;\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  color: rgba(255, 255, 255, 0.25);\n  font-family: "Share Tech Mono", monospace;\n}\n.ai-step.done[_ngcontent-%COMP%] {\n  border-color: rgba(16, 185, 129, 0.3);\n  color: #34d399;\n  background: rgba(16, 185, 129, 0.08);\n}\n.ai-step.active[_ngcontent-%COMP%] {\n  border-color: rgba(99, 102, 241, 0.4);\n  color: #a5b4fc;\n  background: rgba(99, 102, 241, 0.12);\n  animation: _ngcontent-%COMP%_pulse-step 1.2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse-step {\n  0%, 100% {\n    opacity: 0.6;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n.ai-result[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: rgba(5, 10, 20, 0.8);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.ai-result-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: rgba(99, 102, 241, 0.08);\n  border-bottom: 1px solid rgba(99, 102, 241, 0.15);\n  direction: rtl;\n}\n.result-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border-radius: 6px;\n  overflow: hidden;\n  border: 1px solid rgba(99, 102, 241, 0.25);\n}\n.result-tab[_ngcontent-%COMP%] {\n  padding: 4px 14px;\n  border: none;\n  background: transparent;\n  color: rgba(255, 255, 255, 0.35);\n  font-size: 0.75rem;\n  font-weight: 600;\n  font-family: "Share Tech Mono", monospace;\n  cursor: pointer;\n}\n.result-tab[_ngcontent-%COMP%]    + .result-tab[_ngcontent-%COMP%] {\n  border-right: 1px solid rgba(99, 102, 241, 0.25);\n}\n.result-tab.active[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.2);\n  color: #a5b4fc;\n}\n.result-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.btn-copy-code[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 6px;\n  border: 1px solid rgba(99, 102, 241, 0.3);\n  background: rgba(99, 102, 241, 0.1);\n  color: #a5b4fc;\n  font-size: 0.74rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.btn-copy-code[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.25);\n}\n.btn-deploy[_ngcontent-%COMP%] {\n  padding: 4px 14px;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      135deg,\n      #059669,\n      #10b981);\n  border: none;\n  color: #fff;\n  font-size: 0.74rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n}\n.btn-deploy[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #047857,\n      #059669);\n}\n.ai-code-block[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0;\n  padding: 16px 20px;\n  overflow-y: auto;\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.76rem;\n  line-height: 1.7;\n  color: rgba(165, 180, 252, 0.85);\n  scrollbar-width: thin;\n  scrollbar-color: rgba(99, 102, 241, 0.2) transparent;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.ai-code-block[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n.ai-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.ai-empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 12px;\n  opacity: 0.3;\n}\n.ai-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.87rem;\n  color: rgba(255, 255, 255, 0.35);\n  margin: 0 0 6px;\n}\n.ai-empty-sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgba(255, 255, 255, 0.18);\n}\n.visual-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  overflow: hidden;\n}\n.palette-panel[_ngcontent-%COMP%] {\n  width: 160px;\n  flex-shrink: 0;\n  background: rgba(5, 10, 20, 0.75);\n  border-left: 1px solid rgba(99, 102, 241, 0.1);\n  display: flex;\n  flex-direction: column;\n}\n.palette-header[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.3);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.palette-cats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3px;\n  padding: 6px 8px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.palette-cat[_ngcontent-%COMP%] {\n  padding: 2px 7px;\n  border-radius: 5px;\n  border: none;\n  background: transparent;\n  color: rgba(255, 255, 255, 0.3);\n  font-size: 0.66rem;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.palette-cat.active[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.2);\n  color: #a5b4fc;\n}\n.palette-items[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 6px;\n  scrollbar-width: thin;\n}\n.palette-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 8px;\n  border-radius: 7px;\n  cursor: grab;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  background: rgba(255, 255, 255, 0.02);\n  margin-bottom: 3px;\n  transition: all 0.12s;\n  direction: rtl;\n}\n.palette-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--ctrl-color, #818cf8);\n  background: color-mix(in srgb, var(--ctrl-color, #818cf8) 12%, transparent);\n}\n.palette-item[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.pi-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--ctrl-color, #818cf8);\n  flex-shrink: 0;\n  width: 16px;\n  text-align: center;\n}\n.pi-label[_ngcontent-%COMP%] {\n  font-size: 0.69rem;\n  color: rgba(255, 255, 255, 0.5);\n  flex: 1;\n}\n.pi-container[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  opacity: 0.5;\n}\n.canvas-area[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 14px;\n  direction: rtl;\n  background: rgba(5, 10, 20, 0.3);\n  border: 2px dashed transparent;\n  transition: border-color 0.15s;\n  scrollbar-width: thin;\n}\n.canvas-area.drop-hover[_ngcontent-%COMP%] {\n  border-color: rgba(99, 102, 241, 0.4);\n  background: rgba(99, 102, 241, 0.04);\n}\n.canvas-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.canvas-empty[_ngcontent-%COMP%]   .canvas-empty-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 10px;\n  opacity: 0.3;\n}\n.canvas-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: rgba(255, 255, 255, 0.3);\n  margin: 0 0 4px;\n}\n.canvas-empty[_ngcontent-%COMP%]   .canvas-empty-sub[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: rgba(255, 255, 255, 0.18);\n}\n.canvas-node[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 8px;\n  margin-bottom: 4px;\n  background: rgba(255, 255, 255, 0.02);\n  transition: border-color 0.12s, background 0.12s;\n  margin-right: calc(var(--node-depth, 0) * 12px);\n  cursor: pointer;\n}\n.canvas-node[_ngcontent-%COMP%]:hover {\n  border-color: rgba(99, 102, 241, 0.3);\n  background: rgba(99, 102, 241, 0.05);\n}\n.canvas-node.selected[_ngcontent-%COMP%] {\n  border-color: #818cf8;\n  background: rgba(99, 102, 241, 0.1);\n}\n.canvas-node.is-container[_ngcontent-%COMP%] {\n  border-style: dashed;\n}\n.cn-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 10px;\n  direction: rtl;\n}\n.cn-expand[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  color: rgba(255, 255, 255, 0.4);\n  cursor: pointer;\n  font-size: 0.7rem;\n  padding: 0;\n  width: 14px;\n  flex-shrink: 0;\n}\n.cn-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  flex-shrink: 0;\n}\n.cn-label[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.76rem;\n  color: rgba(255, 255, 255, 0.65);\n}\n.cn-type[_ngcontent-%COMP%] {\n  font-size: 0.66rem;\n  color: rgba(255, 255, 255, 0.25);\n}\n.cn-remove[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  color: rgba(239, 68, 68, 0.4);\n  cursor: pointer;\n  font-size: 0.72rem;\n  padding: 2px 4px;\n  border-radius: 4px;\n  opacity: 0;\n  transition: opacity 0.12s;\n}\n.canvas-node[_ngcontent-%COMP%]:hover   .cn-remove[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.cn-remove[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n  background: rgba(239, 68, 68, 0.1);\n}\n.cn-children[_ngcontent-%COMP%] {\n  padding: 4px 8px 6px;\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n  min-height: 32px;\n  transition: border-color 0.12s;\n}\n.cn-children.drop-hover[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.06);\n}\n.cn-drop-hint[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: rgba(255, 255, 255, 0.15);\n  text-align: center;\n  padding: 6px;\n}\n.props-panel[_ngcontent-%COMP%] {\n  width: 220px;\n  flex-shrink: 0;\n  background: rgba(5, 10, 20, 0.75);\n  border-right: 1px solid rgba(99, 102, 241, 0.1);\n  display: flex;\n  flex-direction: column;\n}\n.props-header[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  font-size: 0.74rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.4);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.props-body[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  direction: rtl;\n}\n.prop-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.prop-label[_ngcontent-%COMP%] {\n  font-size: 0.71rem;\n  color: rgba(255, 255, 255, 0.4);\n  font-weight: 600;\n}\n.prop-input[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  border-radius: 6px;\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  background: rgba(5, 10, 20, 0.6);\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 0.78rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n.prop-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #818cf8;\n}\n.prop-type[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgba(165, 180, 252, 0.5);\n}\n.prop-bool[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 6px;\n  border: 1px solid rgba(99, 102, 241, 0.3);\n  background: rgba(5, 10, 20, 0.5);\n  color: rgba(255, 255, 255, 0.4);\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.prop-bool.on[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.2);\n  border-color: rgba(16, 185, 129, 0.4);\n  color: #34d399;\n}\n.btn-remove-ctrl[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 6px 12px;\n  border-radius: 7px;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  background: rgba(239, 68, 68, 0.08);\n  color: #f87171;\n  font-size: 0.76rem;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: all 0.12s;\n}\n.btn-remove-ctrl[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.2);\n}\n[_nghost-%COMP%]     .k-dialog-actions {\n  direction: rtl !important;\n}\n.edit-body[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  direction: rtl;\n}\n.edit-error[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  color: #dc2626;\n  font-size: 0.8rem;\n}\n.edit-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 120px 1fr;\n  align-items: start;\n  gap: 10px;\n}\n.edit-label[_ngcontent-%COMP%] {\n  font-size: 0.77rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  padding-top: 7px;\n  text-align: right;\n}\n.req[_ngcontent-%COMP%] {\n  color: var(--sf-danger);\n  margin-right: 2px;\n}\n.edit-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.edit-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px 10px;\n  border: 1px solid var(--sf-border);\n  border-radius: 7px;\n  background: var(--sf-bg-card);\n  color: var(--sf-text);\n  font-size: 0.84rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n  box-sizing: border-box;\n}\n.edit-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--sf-primary);\n}\n.edit-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  direction: rtl;\n}\n.btn-save[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: #f97316 !important;\n  color: #fff !important;\n  border: none !important;\n  border-radius: 8px !important;\n  padding: 8px 18px !important;\n  font-size: 0.84rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #ea6c0a !important;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  border-color: var(--sf-border) !important;\n  color: var(--sf-text-secondary) !important;\n}\n/*# sourceMappingURL=studio.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudioComponent, [{
    type: Component,
    args: [{ selector: "app-studio", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatIconModule,
      NeuralNetComponent,
      DialogsModule,
      InputsModule,
      ButtonsModule,
      IndicatorsModule
    ], template: `<div class="st-root">

  <!-- \u2500\u2500 Toolbar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="st-toolbar">
    <button class="st-back" (click)="back()">
      <mat-icon>arrow_back</mat-icon>
      <span>FLOWSPACE</span>
    </button>

    <div class="st-brand">
      <span class="st-brand-name">STUDIO</span>
      <span class="st-brand-sub">\u05DE\u05D7\u05D5\u05DC\u05DC \u05DE\u05E1\u05DB\u05D9\u05DD AI-First</span>
    </div>

    <!-- Mode toggle -->
    <div class="mode-toggle">
      <button class="mode-btn" [class.active]="mode() === 'ai'"     (click)="mode.set('ai')">
        \u{1F916} AI Generate
      </button>
      <button class="mode-btn" [class.active]="mode() === 'visual'" (click)="mode.set('visual')">
        \u{1F3A8} Visual Builder
      </button>
    </div>

    <div class="st-tools">
      @if (mode() === 'visual' && canvas().length > 0) {
        <button class="btn-export" type="button" (click)="mode.set('ai')">
          \u2192 \u05D9\u05D9\u05E6\u05D0 \u05DC-AI
        </button>
        <button class="btn-clear" type="button" (click)="clearCanvas()">
          \u2715 \u05E0\u05E7\u05D4
        </button>
      }
    </div>
  </div>

  <!-- \u2500\u2500 Background \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <app-neural-net aria-hidden="true"></app-neural-net>

  <!-- \u2500\u2500 Main Layout \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="st-layout">

    <!-- \u2500\u2500 Left: Screen Tree \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <aside class="screen-tree-panel">
      <div class="stp-header">
        <span class="stp-title">\u05E2\u05E5 \u05DE\u05E1\u05DB\u05D9\u05DD</span>
        <button class="btn-add-screen" type="button" (click)="openAddScreen()" title="\u05D4\u05D5\u05E1\u05E3 \u05DE\u05E1\u05DA">+</button>
      </div>

      <div class="screen-tree">
        @for (s of screens(); track s.id) {
          <div class="tree-node" [class.level0]="true">
            <div class="tree-item" [class.active]="activeScreen()?.id === s.id"
                 (click)="selectScreen(s)">
              @if (s.children.length) {
                <button class="tree-expand" type="button" (click)="$event.stopPropagation(); toggleScreen(s)">
                  {{ s.expanded ? '\u25BE' : '\u25B8' }}
                </button>
              } @else {
                <span class="tree-leaf">\xB7</span>
              }
              <span class="tree-icon">{{ s.icon }}</span>
              <span class="tree-name">{{ s.nameHe || s.name }}</span>
              @if (s.isNew) { <span class="tree-new-badge">\u05D7\u05D3\u05E9</span> }
              <button class="tree-add-child" type="button"
                      (click)="$event.stopPropagation(); openAddScreen(s.id)" title="\u05D4\u05D5\u05E1\u05E3 \u05EA\u05EA-\u05DE\u05E1\u05DA">+</button>
            </div>

            @if (s.expanded && s.children.length) {
              <div class="tree-children">
                @for (child of s.children; track child.id) {
                  <div class="tree-item level1" [class.active]="activeScreen()?.id === child.id"
                       (click)="selectScreen(child)">
                    <span class="tree-leaf">\xB7</span>
                    <span class="tree-icon">{{ child.icon }}</span>
                    <span class="tree-name">{{ child.nameHe || child.name }}</span>
                    @if (child.isNew) { <span class="tree-new-badge">\u05D7\u05D3\u05E9</span> }
                  </div>
                }
              </div>
            }
          </div>
        }
      </div>
    </aside>

    <!-- \u2500\u2500 Center \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <main class="st-center">

      <!-- Active screen indicator -->
      @if (activeScreen()) {
        <div class="active-screen-bar">
          <span class="asb-icon">{{ activeScreen()!.icon }}</span>
          <span class="asb-name">{{ activeScreen()!.nameHe || activeScreen()!.name }}</span>
          <span class="asb-route">{{ activeScreen()!.route }}</span>
          @if (activeScreen()!.isNew) { <span class="asb-new">\u2726 \u05DE\u05E1\u05DA \u05D7\u05D3\u05E9</span> }
        </div>
      }

      <!-- \u2550\u2550\u2550\u2550 AI MODE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      @if (mode() === 'ai') {
        <div class="ai-panel">

          <!-- Prompt area -->
          <div class="ai-prompt-area">
            <div class="ai-prompt-header">
              <span class="ai-prompt-title">\u{1F916} \u05EA\u05D0\u05E8 \u05DE\u05D4 \u05D0\u05EA\u05D4 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D1\u05E0\u05D5\u05EA</span>
              <div class="ai-connector-sel">
                <select class="ai-select" [value]="aiConnector()"
                        (change)="aiConnector.set($any($event.target).value)">
                  <option value="">-- \u05D1\u05D7\u05E8 \u05DE\u05D5\u05D3\u05DC AI --</option>
                  @for (c of aiConnectors; track c) {
                    <option [value]="c">{{ c }}</option>
                  }
                </select>
              </div>
            </div>

            <div class="ai-prompt-examples">
              <span class="ai-eg-label">\u05D3\u05D5\u05D2\u05DE\u05D0\u05D5\u05EA:</span>
              @for (eg of ['\u05DE\u05E1\u05DA \u05E0\u05D9\u05D4\u05D5\u05DC \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05E2\u05DD \u05D2\u05E8\u05D9\u05D3, \u05D7\u05D9\u05E4\u05D5\u05E9 \u05D5\u05E4\u05D9\u05DC\u05D8\u05E8 \u05DC\u05E4\u05D9 \u05E1\u05D8\u05D8\u05D5\u05E1','\u05D3\u05E9\u05D1\u05D5\u05E8\u05D3 KPI \u05E2\u05DD 4 \u05DB\u05E8\u05D8\u05D9\u05E1\u05D9\u05DD \u05D5\u05D2\u05E8\u05E3 \u05E2\u05DE\u05D5\u05D3\u05D5\u05EA \u05D7\u05D5\u05D3\u05E9\u05D9','\u05D8\u05D5\u05E4\u05E1 \u05D4\u05D5\u05E1\u05E4\u05EA \u05DE\u05D5\u05E6\u05E8 \u05E2\u05DD \u05EA\u05DE\u05D5\u05E0\u05D4, \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 \u05D5\u05DE\u05D7\u05D9\u05E8']; track eg) {
                <button class="ai-eg-btn" type="button" (click)="aiPrompt.set(eg)">{{ eg }}</button>
              }
            </div>

            <textarea class="ai-textarea" rows="4" dir="rtl"
                      [value]="aiPrompt()"
                      (input)="aiPrompt.set($any($event.target).value)"
                      placeholder="\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: \u05DE\u05E1\u05DA \u05E0\u05D9\u05D4\u05D5\u05DC \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05E2\u05DD Kendo Grid, \u05D7\u05D9\u05E4\u05D5\u05E9, \u05E4\u05D9\u05DC\u05D8\u05E8 \u05DC\u05E4\u05D9 \u05E1\u05D8\u05D8\u05D5\u05E1, \u05D5\u05D3\u05D9\u05D0\u05DC\u05D5\u05D2 \u05E2\u05E8\u05D9\u05DB\u05D4..."></textarea>

            <div class="ai-actions">
              <button class="btn-ai-generate" type="button" (click)="generateWithAI()"
                      [disabled]="aiLoading()">
                @if (aiLoading()) {
                  <kendo-loader type="pulsing" size="small" themeColor="secondary" />
                  \u05DE\u05D7\u05D5\u05DC\u05DC...
                } @else {
                  \u26A1 \u05D7\u05D5\u05DC\u05DC \u05DE\u05E1\u05DA
                }
              </button>
              @if (aiError()) { <span class="ai-error">{{ aiError() }}</span> }
            </div>
          </div>

          <!-- Result -->
          @if (aiLoading()) {
            <div class="ai-loading-panel">
              <div class="ai-loading-ring"></div>
              <p class="ai-loading-text">\u05D4\u05E1\u05D5\u05DB\u05DF FRONT \u05DE\u05D7\u05D5\u05DC\u05DC \u05D0\u05EA \u05D4\u05DE\u05E1\u05DA...</p>
              <div class="ai-loading-steps">
                <div class="ai-step done">\u2713 \u05E0\u05D9\u05EA\u05D5\u05D7 \u05D3\u05E8\u05D9\u05E9\u05D5\u05EA</div>
                <div class="ai-step done">\u2713 \u05EA\u05DB\u05E0\u05D5\u05DF \u05DE\u05D1\u05E0\u05D4</div>
                <div class="ai-step active">\u27F3 \u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05D5\u05D3 Angular</div>
                <div class="ai-step">\u25CB SCSS + RTL</div>
                <div class="ai-step">\u25CB \u05D0\u05D9\u05E0\u05D8\u05D2\u05E8\u05E6\u05D9\u05D4</div>
              </div>
            </div>
          }

          @if (aiResult()) {
            <div class="ai-result">
              <div class="ai-result-header">
                <div class="result-tabs">
                  <button class="result-tab" [class.active]="aiTab() === 'html'"  (click)="aiTab.set('html')">HTML</button>
                  <button class="result-tab" [class.active]="aiTab() === 'ts'"    (click)="aiTab.set('ts')">TypeScript</button>
                  <button class="result-tab" [class.active]="aiTab() === 'scss'"  (click)="aiTab.set('scss')">SCSS</button>
                </div>
                <div class="result-actions">
                  <button class="btn-copy-code" type="button"
                          (click)="copyCode(aiResult()![aiTab()])">\u2398 \u05D4\u05E2\u05EA\u05E7</button>
                  <button class="btn-deploy" type="button">\u21E2 \u05E9\u05DC\u05D7 \u05DC\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8</button>
                </div>
              </div>

              <pre class="ai-code-block"><code [innerHTML]="aiResult()![aiTab()]"></code></pre>
            </div>
          }

          @if (!aiLoading() && !aiResult()) {
            <div class="ai-empty">
              <div class="ai-empty-icon">\u26A1</div>
              <p>\u05EA\u05D0\u05E8 \u05D0\u05EA \u05D4\u05DE\u05E1\u05DA \u05E9\u05D0\u05EA\u05D4 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D1\u05E0\u05D5\u05EA \u05D5\u05DC\u05D7\u05E5 "\u05D7\u05D5\u05DC\u05DC \u05DE\u05E1\u05DA"</p>
              <p class="ai-empty-sub">\u05D4\u05E1\u05D5\u05DB\u05DF FRONT \u05D9\u05D7\u05D5\u05DC\u05DC \u05E7\u05D5\u05D3 Angular \u05DE\u05DC\u05D0 \u05E2\u05DD Kendo, RTL \u05D5\u05E1\u05D8\u05E0\u05D3\u05E8\u05D8\u05D9 \u05D4\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4</p>
            </div>
          }
        </div>
      }

      <!-- \u2550\u2550\u2550\u2550 VISUAL MODE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      @if (mode() === 'visual') {
        <div class="visual-panel">

          <!-- Control Palette -->
          <div class="palette-panel">
            <div class="palette-header">\u05E4\u05E7\u05D3\u05D9\u05DD</div>
            <div class="palette-cats">
              @for (cat of paletteCats; track cat) {
                <button class="palette-cat" [class.active]="paletteCat() === cat"
                        (click)="paletteCat.set(cat)">
                  {{ paletteCatLabels[cat] }}
                </button>
              }
            </div>
            <div class="palette-items">
              @for (ctrl of filteredPalette(); track ctrl.type) {
                <div class="palette-item" draggable="true"
                     [style.--ctrl-color]="ctrl.color"
                     (dragstart)="onDragStart(ctrl.type)"
                     (dragend)="onDragEnd()"
                     [title]="ctrl.desc || ctrl.label">
                  <span class="pi-icon">{{ ctrl.icon }}</span>
                  <span class="pi-label">{{ ctrl.label }}</span>
                  @if (ctrl.isContainer) { <span class="pi-container">\u{1F4E6}</span> }
                </div>
              }
            </div>
          </div>

          <!-- Canvas -->
          <div class="canvas-area"
               (dragover)="onDragOver($event, 'root')"
               (dragleave)="onDragLeave()"
               (drop)="onDropToCanvas($event)"
               [class.drop-hover]="dropTarget() === 'root'">

            @if (canvas().length === 0) {
              <div class="canvas-empty">
                <div class="canvas-empty-icon">\u{1F3A8}</div>
                <p>\u05D2\u05E8\u05D5\u05E8 \u05E4\u05E7\u05D3\u05D9\u05DD \u05DE\u05D4\u05E4\u05DC\u05D8\u05D4 \u05DC\u05DB\u05D0\u05DF</p>
                <p class="canvas-empty-sub">\u05D0\u05D5 \u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1-AI Generate \u05DC\u05E7\u05D1\u05DC \u05E7\u05D5\u05D3 \u05DE\u05DC\u05D0 \u05DE\u05D9\u05D3</p>
              </div>
            }

            @for (ctrl of canvas(); track ctrl.id) {
              <ng-container *ngTemplateOutlet="canvasNode; context: { $implicit: ctrl, depth: 0 }"></ng-container>
            }
          </div>

        </div>
      }
    </main>

    <!-- \u2500\u2500 Right: Properties \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    @if (mode() === 'visual') {
      <aside class="props-panel">
        <div class="props-header">
          @if (selected()) { \u270E \u05DE\u05D0\u05E4\u05D9\u05D9\u05E0\u05D9\u05DD \u2014 {{ selected()!.label }}
          } @else { \u05D1\u05D7\u05E8 \u05E4\u05E7\u05D3 \u05DC\u05E2\u05E8\u05D9\u05DB\u05D4 }
        </div>

        @if (selected()) {
          <div class="props-body">
            <div class="prop-row">
              <label class="prop-label">\u05DB\u05D5\u05EA\u05E8\u05EA</label>
              <input class="prop-input" type="text" [value]="selected()!.props['label'] || ''"
                     (input)="updateProp('label', $any($event.target).value)" />
            </div>
            <div class="prop-row">
              <label class="prop-label">Placeholder</label>
              <input class="prop-input" type="text" [value]="selected()!.props['placeholder'] || ''"
                     (input)="updateProp('placeholder', $any($event.target).value)" />
            </div>
            <div class="prop-row">
              <label class="prop-label">\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4</label>
              <div class="prop-toggle">
                <button class="prop-bool" [class.on]="selected()!.props['required']"
                        (click)="updateProp('required', !selected()!.props['required'])">
                  {{ selected()!.props['required'] ? '\u2713 \u05DB\u05DF' : '\u2717 \u05DC\u05D0' }}
                </button>
              </div>
            </div>
            <div class="prop-row">
              <label class="prop-label">\u05E1\u05D5\u05D2</label>
              <span class="prop-type">{{ ctrlDef(selected()!.type)?.label }}</span>
            </div>
            <button class="btn-remove-ctrl" type="button" (click)="removeCtrl(selected()!.id)">
              \u2715 \u05D4\u05E1\u05E8 \u05E4\u05E7\u05D3
            </button>
          </div>
        }
      </aside>
    }
  </div>

</div>

<!-- \u2500\u2500 Canvas Node Template \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<ng-template #canvasNode let-ctrl let-depth="depth">
  <div class="canvas-node"
       [class.selected]="ctrl.selected"
       [class.is-container]="ctrlDef(ctrl.type)?.isContainer"
       [style.--node-depth]="depth"
       (click)="$event.stopPropagation(); selectCtrl(ctrl)">

    <div class="cn-row">
      @if (ctrlDef(ctrl.type)?.isContainer) {
        <button class="cn-expand" type="button" (click)="$event.stopPropagation(); toggleCtrlExpand(ctrl)">
          {{ ctrl.expanded ? '\u25BE' : '\u25B8' }}
        </button>
      }
      <span class="cn-icon" [style.color]="ctrlDef(ctrl.type)?.color">
        {{ ctrlDef(ctrl.type)?.icon }}
      </span>
      <span class="cn-label">{{ ctrl.label }}</span>
      <span class="cn-type">{{ ctrlDef(ctrl.type)?.label }}</span>
      <button class="cn-remove" type="button" (click)="$event.stopPropagation(); removeCtrl(ctrl.id)">\u2715</button>
    </div>

    @if (ctrlDef(ctrl.type)?.isContainer && ctrl.expanded) {
      <div class="cn-children"
           (dragover)="onDragOver($event, ctrl.id)"
           (dragleave)="onDragLeave()"
           (drop)="onDropToCtrl($event, ctrl)"
           [class.drop-hover]="dropTarget() === ctrl.id">
        @for (child of ctrl.children; track child.id) {
          <ng-container *ngTemplateOutlet="canvasNode; context: { $implicit: child, depth: depth + 1 }"></ng-container>
        }
        @if (ctrl.children.length === 0) {
          <div class="cn-drop-hint">\u05D2\u05E8\u05D5\u05E8 \u05E4\u05E7\u05D3 \u05DC\u05DB\u05D0\u05DF</div>
        }
      </div>
    }
  </div>
</ng-template>

<!-- \u2500\u2500 Add Screen Dialog \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
@if (addScreenOpen()) {
  <kendo-dialog title="\u2726 \u05DE\u05E1\u05DA \u05D7\u05D3\u05E9" [width]="460" (close)="addScreenOpen.set(false)">
    <div class="edit-body">
      @if (addScreenError()) { <div class="edit-error">{{ addScreenError() }}</div> }

      <div class="edit-row">
        <label class="edit-label">\u05E9\u05DD \u05DE\u05E1\u05DA <span class="req">*</span></label>
        <div class="edit-field">
          <input class="edit-input" type="text" dir="rtl"
                 [value]="newScreenName()" (input)="newScreenName.set($any($event.target).value)"
                 placeholder="\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: \u05E0\u05D9\u05D4\u05D5\u05DC \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA" />
        </div>
      </div>

      <div class="edit-row">
        <label class="edit-label">Route (URL)</label>
        <div class="edit-field">
          <input class="edit-input" type="text" dir="ltr"
                 [value]="newScreenRoute()" (input)="newScreenRoute.set($any($event.target).value)"
                 placeholder="/app/clients" />
        </div>
      </div>

      <div class="edit-row">
        <label class="edit-label">\u05D0\u05D9\u05D9\u05E7\u05D5\u05DF</label>
        <div class="edit-field">
          <input class="edit-input" type="text"
                 [value]="newScreenIcon()" (input)="newScreenIcon.set($any($event.target).value)"
                 placeholder="\u{1F4C4}" style="font-size:1.2rem;width:60px;text-align:center;" />
        </div>
      </div>

      @if (newScreenParent()) {
        <div class="edit-row">
          <label class="edit-label">\u05EA\u05D7\u05EA</label>
          <div class="edit-field">
            <span class="prop-type">{{ newScreenParent() }}</span>
          </div>
        </div>
      }
    </div>
    <kendo-dialog-actions>
      <div class="edit-footer">
        <button kendoButton class="btn-save" (click)="saveNewScreen()">\u2713 \u05E6\u05D5\u05E8 \u05DE\u05E1\u05DA</button>
        <button kendoButton fillMode="outline" class="btn-cancel" (click)="addScreenOpen.set(false)">\u05D1\u05D9\u05D8\u05D5\u05DC</button>
      </div>
    </kendo-dialog-actions>
  </kendo-dialog>
}
`, styles: ['/* src/app/features/projects/workspace/studio/studio.component.scss */\n.st-root {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  background:\n    linear-gradient(\n      150deg,\n      #050d1a 0%,\n      #0a1020 50%,\n      #060c18 100%);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  direction: rtl;\n  font-family:\n    "Noto Sans Hebrew",\n    "Segoe UI",\n    sans-serif;\n}\n.st-toolbar {\n  position: relative;\n  z-index: 200;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 24px;\n  background: rgba(5, 10, 20, 0.95);\n  border-bottom: 1px solid rgba(13, 71, 255, 0.2);\n  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.5);\n  direction: ltr;\n}\n.st-back {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: rgba(99, 102, 241, 0.55);\n  padding: 6px 10px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n  transition: color 0.15s, background 0.15s;\n}\n.st-back mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.st-back span {\n  font-size: 0.78rem;\n  font-family: "Share Tech Mono", monospace;\n  letter-spacing: 0.08em;\n}\n.st-back:hover {\n  color: #818cf8;\n  background: rgba(99, 102, 241, 0.1);\n}\n.st-brand {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  pointer-events: none;\n}\n.st-brand .st-brand-name {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #818cf8;\n  letter-spacing: 0.2em;\n  text-shadow: 0 0 20px rgba(99, 102, 241, 0.4);\n}\n.st-brand .st-brand-sub {\n  font-size: 0.68rem;\n  color: rgba(255, 255, 255, 0.25);\n}\n.mode-toggle {\n  display: flex;\n  gap: 0;\n  border-radius: 8px;\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  overflow: hidden;\n  margin-left: auto;\n}\n.mode-btn {\n  padding: 6px 16px;\n  border: none;\n  background: transparent;\n  color: rgba(255, 255, 255, 0.35);\n  font-size: 0.78rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.mode-btn + .mode-btn {\n  border-left: 1px solid rgba(99, 102, 241, 0.25);\n}\n.mode-btn:hover {\n  color: rgba(255, 255, 255, 0.7);\n  background: rgba(99, 102, 241, 0.08);\n}\n.mode-btn.active {\n  background: rgba(99, 102, 241, 0.25);\n  color: #818cf8;\n}\n.st-tools {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-export,\n.btn-clear {\n  padding: 5px 12px;\n  border-radius: 7px;\n  font-size: 0.76rem;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  border: 1px solid rgba(99, 102, 241, 0.35);\n  background: rgba(99, 102, 241, 0.1);\n  color: #818cf8;\n  transition: all 0.15s;\n}\n.btn-export:hover,\n.btn-clear:hover {\n  background: rgba(99, 102, 241, 0.2);\n}\n.btn-clear {\n  border-color: rgba(239, 68, 68, 0.35);\n  background: rgba(239, 68, 68, 0.08);\n  color: #f87171;\n}\n.btn-clear:hover {\n  background: rgba(239, 68, 68, 0.18);\n}\n.st-layout {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n  position: relative;\n  z-index: 10;\n}\n.screen-tree-panel {\n  width: 200px;\n  flex-shrink: 0;\n  background: rgba(5, 10, 20, 0.75);\n  border-left: 1px solid rgba(99, 102, 241, 0.1);\n  display: flex;\n  flex-direction: column;\n}\n.stp-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 12px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.stp-title {\n  font-size: 0.74rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.4);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.btn-add-screen {\n  width: 22px;\n  height: 22px;\n  border-radius: 5px;\n  border: 1px solid rgba(99, 102, 241, 0.4);\n  background: rgba(99, 102, 241, 0.12);\n  color: #818cf8;\n  font-size: 0.9rem;\n  cursor: pointer;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-add-screen:hover {\n  background: rgba(99, 102, 241, 0.25);\n}\n.screen-tree {\n  flex: 1;\n  overflow-y: auto;\n  padding: 6px 0;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(99, 102, 241, 0.15) transparent;\n}\n.tree-item {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  cursor: pointer;\n  direction: rtl;\n  transition: background 0.12s;\n  position: relative;\n  font-size: 0.76rem;\n  color: rgba(255, 255, 255, 0.4);\n}\n.tree-item:hover {\n  background: rgba(255, 255, 255, 0.04);\n  color: rgba(255, 255, 255, 0.7);\n}\n.tree-item.active {\n  background: rgba(99, 102, 241, 0.12);\n  color: #818cf8;\n  font-weight: 600;\n}\n.tree-item.level1 {\n  padding-right: 24px;\n  font-size: 0.73rem;\n}\n.tree-expand {\n  border: none;\n  background: none;\n  color: inherit;\n  cursor: pointer;\n  font-size: 0.7rem;\n  padding: 0;\n  width: 14px;\n  flex-shrink: 0;\n}\n.tree-leaf {\n  opacity: 0.3;\n  font-size: 0.6rem;\n  width: 14px;\n  flex-shrink: 0;\n  text-align: center;\n}\n.tree-icon {\n  font-size: 0.85rem;\n  flex-shrink: 0;\n}\n.tree-name {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.tree-new-badge {\n  font-size: 0.6rem;\n  padding: 1px 5px;\n  border-radius: 6px;\n  background: rgba(99, 102, 241, 0.25);\n  color: #a5b4fc;\n  flex-shrink: 0;\n}\n.tree-add-child {\n  border: none;\n  background: none;\n  color: rgba(99, 102, 241, 0.4);\n  cursor: pointer;\n  font-size: 0.8rem;\n  padding: 0;\n  opacity: 0;\n  transition: opacity 0.1s;\n}\n.tree-item:hover .tree-add-child {\n  opacity: 1;\n}\n.tree-add-child:hover {\n  color: #818cf8;\n}\n.st-center {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.active-screen-bar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  flex-shrink: 0;\n  background: rgba(99, 102, 241, 0.06);\n  border-bottom: 1px solid rgba(99, 102, 241, 0.12);\n  direction: rtl;\n}\n.asb-icon {\n  font-size: 1rem;\n}\n.asb-name {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.7);\n}\n.asb-route {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.7rem;\n  color: rgba(99, 102, 241, 0.6);\n  margin-right: 4px;\n}\n.asb-new {\n  font-size: 0.68rem;\n  color: #a5b4fc;\n  padding: 1px 7px;\n  border-radius: 8px;\n  background: rgba(99, 102, 241, 0.2);\n}\n.ai-panel {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  padding: 16px 20px;\n  gap: 16px;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(99, 102, 241, 0.2) transparent;\n}\n.ai-prompt-area {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  border-radius: 14px;\n  padding: 16px;\n}\n.ai-prompt-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  direction: rtl;\n}\n.ai-prompt-title {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.7);\n}\n.ai-select {\n  padding: 5px 10px;\n  border-radius: 7px;\n  border: 1px solid rgba(99, 102, 241, 0.3);\n  background: rgba(99, 102, 241, 0.08);\n  color: #a5b4fc;\n  font-size: 0.76rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  direction: ltr;\n}\n.ai-prompt-examples {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n  margin-bottom: 10px;\n  direction: rtl;\n}\n.ai-eg-label {\n  font-size: 0.7rem;\n  color: rgba(255, 255, 255, 0.25);\n  flex-shrink: 0;\n}\n.ai-eg-btn {\n  font-size: 0.7rem;\n  padding: 3px 10px;\n  border-radius: 12px;\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  background: rgba(99, 102, 241, 0.06);\n  color: rgba(165, 180, 252, 0.6);\n  cursor: pointer;\n  transition: all 0.12s;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.ai-eg-btn:hover {\n  background: rgba(99, 102, 241, 0.18);\n  color: #a5b4fc;\n  border-color: rgba(99, 102, 241, 0.4);\n}\n.ai-textarea {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 12px;\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  border-radius: 9px;\n  background: rgba(5, 10, 20, 0.6);\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 0.85rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  resize: vertical;\n  line-height: 1.6;\n}\n.ai-textarea:focus {\n  outline: none;\n  border-color: #818cf8;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);\n}\n.ai-textarea::placeholder {\n  color: rgba(255, 255, 255, 0.2);\n}\n.ai-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 10px;\n}\n.btn-ai-generate {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 24px;\n  border-radius: 9px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed);\n  border: none;\n  color: #fff;\n  font-size: 0.87rem;\n  font-weight: 700;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  box-shadow: 0 4px 16px rgba(79, 70, 229, 0.4);\n  transition: all 0.15s;\n}\n.btn-ai-generate kendo-loader {\n  display: inline-flex;\n}\n.btn-ai-generate:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #4338ca,\n      #6d28d9);\n  box-shadow: 0 6px 24px rgba(79, 70, 229, 0.5);\n  transform: translateY(-1px);\n}\n.btn-ai-generate:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n}\n.ai-error {\n  font-size: 0.78rem;\n  color: #f87171;\n}\n.ai-loading-panel {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 40px;\n  background: rgba(255, 255, 255, 0.02);\n  border-radius: 14px;\n  border: 1px solid rgba(99, 102, 241, 0.15);\n}\n.ai-loading-ring {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  border: 3px solid rgba(99, 102, 241, 0.2);\n  border-top-color: #818cf8;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ai-loading-text {\n  font-size: 0.85rem;\n  color: rgba(165, 180, 252, 0.7);\n  margin: 0;\n}\n.ai-loading-steps {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.ai-step {\n  font-size: 0.72rem;\n  padding: 3px 10px;\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  color: rgba(255, 255, 255, 0.25);\n  font-family: "Share Tech Mono", monospace;\n}\n.ai-step.done {\n  border-color: rgba(16, 185, 129, 0.3);\n  color: #34d399;\n  background: rgba(16, 185, 129, 0.08);\n}\n.ai-step.active {\n  border-color: rgba(99, 102, 241, 0.4);\n  color: #a5b4fc;\n  background: rgba(99, 102, 241, 0.12);\n  animation: pulse-step 1.2s ease-in-out infinite;\n}\n@keyframes pulse-step {\n  0%, 100% {\n    opacity: 0.6;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n.ai-result {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: rgba(5, 10, 20, 0.8);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.ai-result-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: rgba(99, 102, 241, 0.08);\n  border-bottom: 1px solid rgba(99, 102, 241, 0.15);\n  direction: rtl;\n}\n.result-tabs {\n  display: flex;\n  gap: 0;\n  border-radius: 6px;\n  overflow: hidden;\n  border: 1px solid rgba(99, 102, 241, 0.25);\n}\n.result-tab {\n  padding: 4px 14px;\n  border: none;\n  background: transparent;\n  color: rgba(255, 255, 255, 0.35);\n  font-size: 0.75rem;\n  font-weight: 600;\n  font-family: "Share Tech Mono", monospace;\n  cursor: pointer;\n}\n.result-tab + .result-tab {\n  border-right: 1px solid rgba(99, 102, 241, 0.25);\n}\n.result-tab.active {\n  background: rgba(99, 102, 241, 0.2);\n  color: #a5b4fc;\n}\n.result-actions {\n  display: flex;\n  gap: 6px;\n}\n.btn-copy-code {\n  padding: 4px 12px;\n  border-radius: 6px;\n  border: 1px solid rgba(99, 102, 241, 0.3);\n  background: rgba(99, 102, 241, 0.1);\n  color: #a5b4fc;\n  font-size: 0.74rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.btn-copy-code:hover {\n  background: rgba(99, 102, 241, 0.25);\n}\n.btn-deploy {\n  padding: 4px 14px;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      135deg,\n      #059669,\n      #10b981);\n  border: none;\n  color: #fff;\n  font-size: 0.74rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n}\n.btn-deploy:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #047857,\n      #059669);\n}\n.ai-code-block {\n  flex: 1;\n  margin: 0;\n  padding: 16px 20px;\n  overflow-y: auto;\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.76rem;\n  line-height: 1.7;\n  color: rgba(165, 180, 252, 0.85);\n  scrollbar-width: thin;\n  scrollbar-color: rgba(99, 102, 241, 0.2) transparent;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.ai-code-block code {\n  white-space: pre-wrap;\n}\n.ai-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.ai-empty-icon {\n  font-size: 3rem;\n  margin-bottom: 12px;\n  opacity: 0.3;\n}\n.ai-empty p {\n  font-size: 0.87rem;\n  color: rgba(255, 255, 255, 0.35);\n  margin: 0 0 6px;\n}\n.ai-empty-sub {\n  font-size: 0.75rem;\n  color: rgba(255, 255, 255, 0.18);\n}\n.visual-panel {\n  flex: 1;\n  display: flex;\n  overflow: hidden;\n}\n.palette-panel {\n  width: 160px;\n  flex-shrink: 0;\n  background: rgba(5, 10, 20, 0.75);\n  border-left: 1px solid rgba(99, 102, 241, 0.1);\n  display: flex;\n  flex-direction: column;\n}\n.palette-header {\n  padding: 9px 12px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.3);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.palette-cats {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3px;\n  padding: 6px 8px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.palette-cat {\n  padding: 2px 7px;\n  border-radius: 5px;\n  border: none;\n  background: transparent;\n  color: rgba(255, 255, 255, 0.3);\n  font-size: 0.66rem;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.palette-cat.active {\n  background: rgba(99, 102, 241, 0.2);\n  color: #a5b4fc;\n}\n.palette-items {\n  flex: 1;\n  overflow-y: auto;\n  padding: 6px;\n  scrollbar-width: thin;\n}\n.palette-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 8px;\n  border-radius: 7px;\n  cursor: grab;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  background: rgba(255, 255, 255, 0.02);\n  margin-bottom: 3px;\n  transition: all 0.12s;\n  direction: rtl;\n}\n.palette-item:hover {\n  border-color: var(--ctrl-color, #818cf8);\n  background: color-mix(in srgb, var(--ctrl-color, #818cf8) 12%, transparent);\n}\n.palette-item:active {\n  cursor: grabbing;\n}\n.pi-icon {\n  font-size: 0.85rem;\n  color: var(--ctrl-color, #818cf8);\n  flex-shrink: 0;\n  width: 16px;\n  text-align: center;\n}\n.pi-label {\n  font-size: 0.69rem;\n  color: rgba(255, 255, 255, 0.5);\n  flex: 1;\n}\n.pi-container {\n  font-size: 0.6rem;\n  opacity: 0.5;\n}\n.canvas-area {\n  flex: 1;\n  overflow-y: auto;\n  padding: 14px;\n  direction: rtl;\n  background: rgba(5, 10, 20, 0.3);\n  border: 2px dashed transparent;\n  transition: border-color 0.15s;\n  scrollbar-width: thin;\n}\n.canvas-area.drop-hover {\n  border-color: rgba(99, 102, 241, 0.4);\n  background: rgba(99, 102, 241, 0.04);\n}\n.canvas-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.canvas-empty .canvas-empty-icon {\n  font-size: 2.5rem;\n  margin-bottom: 10px;\n  opacity: 0.3;\n}\n.canvas-empty p {\n  font-size: 0.83rem;\n  color: rgba(255, 255, 255, 0.3);\n  margin: 0 0 4px;\n}\n.canvas-empty .canvas-empty-sub {\n  font-size: 0.72rem;\n  color: rgba(255, 255, 255, 0.18);\n}\n.canvas-node {\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 8px;\n  margin-bottom: 4px;\n  background: rgba(255, 255, 255, 0.02);\n  transition: border-color 0.12s, background 0.12s;\n  margin-right: calc(var(--node-depth, 0) * 12px);\n  cursor: pointer;\n}\n.canvas-node:hover {\n  border-color: rgba(99, 102, 241, 0.3);\n  background: rgba(99, 102, 241, 0.05);\n}\n.canvas-node.selected {\n  border-color: #818cf8;\n  background: rgba(99, 102, 241, 0.1);\n}\n.canvas-node.is-container {\n  border-style: dashed;\n}\n.cn-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 10px;\n  direction: rtl;\n}\n.cn-expand {\n  border: none;\n  background: none;\n  color: rgba(255, 255, 255, 0.4);\n  cursor: pointer;\n  font-size: 0.7rem;\n  padding: 0;\n  width: 14px;\n  flex-shrink: 0;\n}\n.cn-icon {\n  font-size: 0.85rem;\n  flex-shrink: 0;\n}\n.cn-label {\n  flex: 1;\n  font-size: 0.76rem;\n  color: rgba(255, 255, 255, 0.65);\n}\n.cn-type {\n  font-size: 0.66rem;\n  color: rgba(255, 255, 255, 0.25);\n}\n.cn-remove {\n  border: none;\n  background: none;\n  color: rgba(239, 68, 68, 0.4);\n  cursor: pointer;\n  font-size: 0.72rem;\n  padding: 2px 4px;\n  border-radius: 4px;\n  opacity: 0;\n  transition: opacity 0.12s;\n}\n.canvas-node:hover .cn-remove {\n  opacity: 1;\n}\n.cn-remove:hover {\n  color: #ef4444;\n  background: rgba(239, 68, 68, 0.1);\n}\n.cn-children {\n  padding: 4px 8px 6px;\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n  min-height: 32px;\n  transition: border-color 0.12s;\n}\n.cn-children.drop-hover {\n  background: rgba(99, 102, 241, 0.06);\n}\n.cn-drop-hint {\n  font-size: 0.68rem;\n  color: rgba(255, 255, 255, 0.15);\n  text-align: center;\n  padding: 6px;\n}\n.props-panel {\n  width: 220px;\n  flex-shrink: 0;\n  background: rgba(5, 10, 20, 0.75);\n  border-right: 1px solid rgba(99, 102, 241, 0.1);\n  display: flex;\n  flex-direction: column;\n}\n.props-header {\n  padding: 10px 12px;\n  font-size: 0.74rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.4);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.props-body {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  direction: rtl;\n}\n.prop-row {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.prop-label {\n  font-size: 0.71rem;\n  color: rgba(255, 255, 255, 0.4);\n  font-weight: 600;\n}\n.prop-input {\n  padding: 5px 8px;\n  border-radius: 6px;\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  background: rgba(5, 10, 20, 0.6);\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 0.78rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n}\n.prop-input:focus {\n  outline: none;\n  border-color: #818cf8;\n}\n.prop-type {\n  font-size: 0.75rem;\n  color: rgba(165, 180, 252, 0.5);\n}\n.prop-bool {\n  padding: 4px 12px;\n  border-radius: 6px;\n  border: 1px solid rgba(99, 102, 241, 0.3);\n  background: rgba(5, 10, 20, 0.5);\n  color: rgba(255, 255, 255, 0.4);\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.prop-bool.on {\n  background: rgba(16, 185, 129, 0.2);\n  border-color: rgba(16, 185, 129, 0.4);\n  color: #34d399;\n}\n.btn-remove-ctrl {\n  margin-top: 10px;\n  padding: 6px 12px;\n  border-radius: 7px;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  background: rgba(239, 68, 68, 0.08);\n  color: #f87171;\n  font-size: 0.76rem;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: all 0.12s;\n}\n.btn-remove-ctrl:hover {\n  background: rgba(239, 68, 68, 0.2);\n}\n:host ::ng-deep .k-dialog-actions {\n  direction: rtl !important;\n}\n.edit-body {\n  padding: 16px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  direction: rtl;\n}\n.edit-error {\n  padding: 9px 12px;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  color: #dc2626;\n  font-size: 0.8rem;\n}\n.edit-row {\n  display: grid;\n  grid-template-columns: 120px 1fr;\n  align-items: start;\n  gap: 10px;\n}\n.edit-label {\n  font-size: 0.77rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  padding-top: 7px;\n  text-align: right;\n}\n.req {\n  color: var(--sf-danger);\n  margin-right: 2px;\n}\n.edit-field {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.edit-input {\n  width: 100%;\n  padding: 7px 10px;\n  border: 1px solid var(--sf-border);\n  border-radius: 7px;\n  background: var(--sf-bg-card);\n  color: var(--sf-text);\n  font-size: 0.84rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n  box-sizing: border-box;\n}\n.edit-input:focus {\n  outline: none;\n  border-color: var(--sf-primary);\n}\n.edit-footer {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  direction: rtl;\n}\n.btn-save {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: #f97316 !important;\n  color: #fff !important;\n  border: none !important;\n  border-radius: 8px !important;\n  padding: 8px 18px !important;\n  font-size: 0.84rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n}\n.btn-save:hover:not(:disabled) {\n  background: #ea6c0a !important;\n}\n.btn-cancel {\n  border-color: var(--sf-border) !important;\n  color: var(--sf-text-secondary) !important;\n}\n/*# sourceMappingURL=studio.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudioComponent, { className: "StudioComponent", filePath: "src/app/features/projects/workspace/studio/studio.component.ts", lineNumber: 122 });
})();
export {
  CONTROL_PALETTE,
  StudioComponent
};
//# sourceMappingURL=chunk-FBIL2HLZ.js.map
