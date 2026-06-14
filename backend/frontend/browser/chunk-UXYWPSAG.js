import {
  NotificationModule,
  NotificationService
} from "./chunk-M7FXBDNT.js";
import {
  DialogActionsComponent,
  DialogComponent,
  DialogModule
} from "./chunk-BYBLGOFY.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-AVTM4YYQ.js";
import {
  Dir
} from "./chunk-7BTXUMFJ.js";
import {
  IndicatorsModule,
  LoaderComponent
} from "./chunk-BV74N4V5.js";
import {
  FormsModule
} from "./chunk-4FOUEPN2.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  HttpClient,
  Input,
  Output,
  catchError,
  computed,
  forkJoin,
  of,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VR4UVLCZ.js";

// src/app/features/settings/logic-perms/logic-perms.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.PermCodeID;
function LogicPermsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "kendo-loader", 8);
    \u0275\u0275elementEnd();
  }
}
function LogicPermsComponent_Conditional_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function LogicPermsComponent_Conditional_2_For_3_Template_button_click_0_listener() {
      const tab_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.selectTab(tab_r3.id));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r3.selectedTab() === tab_r3.id)("nav-all", tab_r3.id === "all");
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("pi ", tab_r3.icon, " nav-icon"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r3.label);
    \u0275\u0275advance();
    \u0275\u0275classProp("count-has", ctx_r3.tabCount(tab_r3) > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.tabCount(tab_r3));
  }
}
function LogicPermsComponent_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.filteredPerms().length, " ");
  }
}
function LogicPermsComponent_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.allSectionItemCount(), " ");
  }
}
function LogicPermsComponent_Conditional_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.filteredItems().length, " ");
  }
}
function LogicPermsComponent_Conditional_2_Conditional_16_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1, "\u05D0\u05D9\u05DF \u05D4\u05E8\u05E9\u05D0\u05D5\u05EA \u05DC\u05D5\u05D2\u05D9\u05E7\u05D4 \u05DE\u05D5\u05D2\u05D3\u05E8\u05D5\u05EA");
    \u0275\u0275elementEnd();
  }
}
function LogicPermsComponent_Conditional_2_Conditional_16_Conditional_1_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "button", 35);
    \u0275\u0275listener("click", function LogicPermsComponent_Conditional_2_Conditional_16_Conditional_1_For_2_Conditional_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const perm_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.setGrant(ctx_r3.getAssignment(perm_r6.PermCodeID), true));
    });
    \u0275\u0275text(2, " \u2713 \u05D0\u05E4\u05E9\u05E8 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 36);
    \u0275\u0275listener("click", function LogicPermsComponent_Conditional_2_Conditional_16_Conditional_1_For_2_Conditional_9_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const perm_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.setGrant(ctx_r3.getAssignment(perm_r6.PermCodeID), false));
    });
    \u0275\u0275text(4, " \u2717 \u05D7\u05E1\u05D5\u05DD ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const perm_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r3.getEffectiveGrant(ctx_r3.getAssignment(perm_r6.PermCodeID)));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", !ctx_r3.getEffectiveGrant(ctx_r3.getAssignment(perm_r6.PermCodeID)));
  }
}
function LogicPermsComponent_Conditional_2_Conditional_16_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "label", 28)(2, "input", 29);
    \u0275\u0275listener("change", function LogicPermsComponent_Conditional_2_Conditional_16_Conditional_1_For_2_Template_input_change_2_listener() {
      const perm_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.togglePerm(perm_r6));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(3, "i", 30);
    \u0275\u0275elementStart(4, "div", 31)(5, "span", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 33);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, LogicPermsComponent_Conditional_2_Conditional_16_Conditional_1_For_2_Conditional_9_Template, 5, 4, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const perm_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("item-selected", ctx_r3.isAssigned(perm_r6.PermCodeID));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r3.isAssigned(perm_r6.PermCodeID))("disabled", ctx_r3.saving());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(perm_r6.PermName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(perm_r6.PermCode);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isAssigned(perm_r6.PermCodeID) && ctx_r3.getAssignment(perm_r6.PermCodeID) ? 9 : -1);
  }
}
function LogicPermsComponent_Conditional_2_Conditional_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275repeaterCreate(1, LogicPermsComponent_Conditional_2_Conditional_16_Conditional_1_For_2_Template, 10, 7, "div", 26, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.filteredPerms());
  }
}
function LogicPermsComponent_Conditional_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LogicPermsComponent_Conditional_2_Conditional_16_Conditional_0_Template, 2, 0, "div", 20)(1, LogicPermsComponent_Conditional_2_Conditional_16_Conditional_1_Template, 3, 0, "div", 25);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r3.filteredPerms().length === 0 ? 0 : 1);
  }
}
function LogicPermsComponent_Conditional_2_Conditional_17_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "kendo-loader", 37);
    \u0275\u0275elementEnd();
  }
}
function LogicPermsComponent_Conditional_2_Conditional_17_Conditional_1_For_2_For_7_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    const section_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.sectionItemCode(section_r10, item_r9));
  }
}
function LogicPermsComponent_Conditional_2_Conditional_17_Conditional_1_For_2_For_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    const section_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.entityPermCount(section_r10.linkedType, ctx_r3.sectionItemId(section_r10, item_r9)), " ");
  }
}
function LogicPermsComponent_Conditional_2_Conditional_17_Conditional_1_For_2_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "label", 28)(2, "input", 29);
    \u0275\u0275listener("change", function LogicPermsComponent_Conditional_2_Conditional_17_Conditional_1_For_2_For_7_Template_input_change_2_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const section_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.sectionToggle(section_r10, item_r9));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(3, "i");
    \u0275\u0275elementStart(4, "div", 31)(5, "span", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, LogicPermsComponent_Conditional_2_Conditional_17_Conditional_1_For_2_For_7_Conditional_7_Template, 2, 1, "span", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, LogicPermsComponent_Conditional_2_Conditional_17_Conditional_1_For_2_For_7_Conditional_8_Template, 2, 1, "span", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const section_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("item-selected", ctx_r3.sectionIsChecked(section_r10, item_r9));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r3.sectionIsChecked(section_r10, item_r9))("disabled", ctx_r3.sectionIsDisabled(section_r10, item_r9));
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("pi ", section_r10.icon, " item-type-icon"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.sectionItemName(section_r10, item_r9));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.sectionItemCode(section_r10, item_r9) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r10.linkedType !== "PERM" && ctx_r3.entityPermCount(section_r10.linkedType, ctx_r3.sectionItemId(section_r10, item_r9)) > 0 ? 8 : -1);
  }
}
function LogicPermsComponent_Conditional_2_Conditional_17_Conditional_1_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u05D0\u05D9\u05DF ", section_r10.label);
  }
}
function LogicPermsComponent_Conditional_2_Conditional_17_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(6, LogicPermsComponent_Conditional_2_Conditional_17_Conditional_1_For_2_For_7_Template, 9, 10, "div", 26, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(8, LogicPermsComponent_Conditional_2_Conditional_17_Conditional_1_For_2_Conditional_8_Template, 2, 1, "div", 40);
  }
  if (rf & 2) {
    const section_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("pi ", section_r10.icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(section_r10.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(section_r10.items.length);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.filteredSectionItems(section_r10));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(section_r10.items.length === 0 ? 8 : -1);
  }
}
function LogicPermsComponent_Conditional_2_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275repeaterCreate(1, LogicPermsComponent_Conditional_2_Conditional_17_Conditional_1_For_2_Template, 9, 6, null, null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.allSections());
  }
}
function LogicPermsComponent_Conditional_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LogicPermsComponent_Conditional_2_Conditional_17_Conditional_0_Template, 2, 0, "div", 20)(1, LogicPermsComponent_Conditional_2_Conditional_17_Conditional_1_Template, 3, 0, "div", 25);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r3.allSections().length === 0 ? 0 : 1);
  }
}
function LogicPermsComponent_Conditional_2_Conditional_18_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "kendo-loader", 37);
    \u0275\u0275elementEnd();
  }
}
function LogicPermsComponent_Conditional_2_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1, "\u05D0\u05D9\u05DF \u05E4\u05E8\u05D9\u05D8\u05D9\u05DD \u05D6\u05DE\u05D9\u05E0\u05D9\u05DD");
    \u0275\u0275elementEnd();
  }
}
function LogicPermsComponent_Conditional_2_Conditional_18_Conditional_2_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.itemCode(item_r12));
  }
}
function LogicPermsComponent_Conditional_2_Conditional_18_Conditional_2_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.entityPermCount(ctx_r3.currentTab.linkedType, ctx_r3.itemId(item_r12)), " ");
  }
}
function LogicPermsComponent_Conditional_2_Conditional_18_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "label", 28)(2, "input", 29);
    \u0275\u0275listener("change", function LogicPermsComponent_Conditional_2_Conditional_18_Conditional_2_For_2_Template_input_change_2_listener() {
      const item_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.toggleLink(item_r12));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(3, "i");
    \u0275\u0275elementStart(4, "div", 31)(5, "span", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, LogicPermsComponent_Conditional_2_Conditional_18_Conditional_2_For_2_Conditional_7_Template, 2, 1, "span", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, LogicPermsComponent_Conditional_2_Conditional_18_Conditional_2_For_2_Conditional_8_Template, 2, 1, "span", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("item-selected", ctx_r3.isLinked(item_r12));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r3.isLinked(item_r12))("disabled", ctx_r3.saving());
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("pi ", ctx_r3.currentTab?.icon, " item-type-icon"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.itemName(item_r12));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.itemCode(item_r12) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.entityPermCount(ctx_r3.currentTab.linkedType, ctx_r3.itemId(item_r12)) > 0 ? 8 : -1);
  }
}
function LogicPermsComponent_Conditional_2_Conditional_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275repeaterCreate(1, LogicPermsComponent_Conditional_2_Conditional_18_Conditional_2_For_2_Template, 9, 10, "div", 26, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.filteredItems());
  }
}
function LogicPermsComponent_Conditional_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LogicPermsComponent_Conditional_2_Conditional_18_Conditional_0_Template, 2, 0, "div", 20)(1, LogicPermsComponent_Conditional_2_Conditional_18_Conditional_1_Template, 2, 0, "div", 20)(2, LogicPermsComponent_Conditional_2_Conditional_18_Conditional_2_Template, 3, 0, "div", 25);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r3.loadingItems() ? 0 : ctx_r3.filteredItems().length === 0 ? 1 : 2);
  }
}
function LogicPermsComponent_Conditional_2_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.allAssigned().length === 0 ? "\u05D0\u05D9\u05DF \u05E9\u05D9\u05D5\u05DB\u05D9\u05DD" : "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0");
  }
}
function LogicPermsComponent_Conditional_2_Conditional_30_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("grant", item_r14.isGrant)("deny", !item_r14.isGrant);
    \u0275\u0275property("title", item_r14.isGrant ? "\u05DE\u05D0\u05D5\u05E4\u05E9\u05E8" : "\u05D7\u05E1\u05D5\u05DD");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r14.isGrant ? "\u2713" : "\u2717", " ");
  }
}
function LogicPermsComponent_Conditional_2_Conditional_30_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "\u05D7\u05D3\u05E9");
    \u0275\u0275elementEnd();
  }
}
function LogicPermsComponent_Conditional_2_Conditional_30_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275conditionalCreate(1, LogicPermsComponent_Conditional_2_Conditional_30_For_2_Conditional_1_Template, 2, 6, "span", 44);
    \u0275\u0275elementStart(2, "span", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, LogicPermsComponent_Conditional_2_Conditional_30_For_2_Conditional_4_Template, 2, 0, "span", 46);
    \u0275\u0275element(5, "i", 47);
    \u0275\u0275elementStart(6, "button", 48);
    \u0275\u0275listener("click", function LogicPermsComponent_Conditional_2_Conditional_30_For_2_Template_button_click_6_listener() {
      const item_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.removeAssignedItem(item_r14));
    });
    \u0275\u0275elementStart(7, "mat-icon", 49);
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("row-local", item_r14.raw?._isLocal);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r14.linkedType === "PERM" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("title", item_r14.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r14.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r14.raw?._isLocal ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("pi ", item_r14.icon, " a-type-icon"));
    \u0275\u0275property("title", item_r14.linkedType);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.saving());
  }
}
function LogicPermsComponent_Conditional_2_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275repeaterCreate(1, LogicPermsComponent_Conditional_2_Conditional_30_For_2_Template, 9, 11, "div", 42, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.filteredAssigned());
  }
}
function LogicPermsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "nav", 9);
    \u0275\u0275repeaterCreate(2, LogicPermsComponent_Conditional_2_For_3_Template, 6, 11, "button", 10, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11)(5, "div", 12)(6, "span", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 14);
    \u0275\u0275conditionalCreate(9, LogicPermsComponent_Conditional_2_Conditional_9_Template, 1, 1);
    \u0275\u0275conditionalCreate(10, LogicPermsComponent_Conditional_2_Conditional_10_Template, 1, 1);
    \u0275\u0275conditionalCreate(11, LogicPermsComponent_Conditional_2_Conditional_11_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 15)(13, "mat-icon", 16);
    \u0275\u0275text(14, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 17);
    \u0275\u0275listener("input", function LogicPermsComponent_Conditional_2_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.searchText.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, LogicPermsComponent_Conditional_2_Conditional_16_Template, 2, 1);
    \u0275\u0275conditionalCreate(17, LogicPermsComponent_Conditional_2_Conditional_17_Template, 2, 1);
    \u0275\u0275conditionalCreate(18, LogicPermsComponent_Conditional_2_Conditional_18_Template, 3, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 18)(20, "div", 12)(21, "span", 13);
    \u0275\u0275text(22, "\u05DE\u05E9\u05D5\u05D9\u05DB\u05D5\u05EA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 14);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 19)(26, "mat-icon", 16);
    \u0275\u0275text(27, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 17);
    \u0275\u0275listener("input", function LogicPermsComponent_Conditional_2_Template_input_input_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.assignedSearch.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(29, LogicPermsComponent_Conditional_2_Conditional_29_Template, 2, 1, "div", 20)(30, LogicPermsComponent_Conditional_2_Conditional_30_Template, 3, 0, "div", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.tabs);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.currentTab?.label);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.selectedTab() === "perm" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.selectedTab() === "all" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.selectedTab() !== "perm" && ctx_r3.selectedTab() !== "all" ? 11 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r3.searchText());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.selectedTab() === "perm" ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.selectedTab() === "all" ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.selectedTab() !== "perm" && ctx_r3.selectedTab() !== "all" ? 18 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.allAssigned().length);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r3.assignedSearch());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.filteredAssigned().length === 0 ? 29 : 30);
  }
}
function LogicPermsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-loader", 51);
    \u0275\u0275text(1, " \u05E9\u05D5\u05DE\u05E8... ");
  }
}
function LogicPermsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2713 \u05E9\u05DE\u05D5\u05E8 ");
  }
}
function LogicPermsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1, "\u25CF \u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05DC\u05D0 \u05E9\u05DE\u05D5\u05E8\u05D9\u05DD");
    \u0275\u0275elementEnd();
  }
}
function LogicPermsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "kendo-dialog", 52);
    \u0275\u0275listener("close", function LogicPermsComponent_Conditional_11_Template_kendo_dialog_close_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cancelClose());
    });
    \u0275\u0275elementStart(1, "div", 53);
    \u0275\u0275element(2, "i", 54);
    \u0275\u0275elementStart(3, "p", 55);
    \u0275\u0275text(4, "\u05D1\u05D5\u05E6\u05E2\u05D5 \u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05E9\u05D8\u05E8\u05DD \u05E0\u05E9\u05DE\u05E8\u05D5.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 56);
    \u0275\u0275text(6, '\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC "\u05D9\u05E6\u05D9\u05D0\u05D4" \u05EA\u05D1\u05D8\u05DC \u05D0\u05EA \u05DB\u05DC \u05D4\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD.');
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "kendo-dialog-actions")(8, "div", 3)(9, "button", 57);
    \u0275\u0275listener("click", function LogicPermsComponent_Conditional_11_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.discardAndClose());
    });
    \u0275\u0275text(10, "\u05D9\u05E6\u05D9\u05D0\u05D4 \u05DC\u05DC\u05D0 \u05E9\u05DE\u05D9\u05E8\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 58);
    \u0275\u0275listener("click", function LogicPermsComponent_Conditional_11_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cancelClose());
    });
    \u0275\u0275text(12, "\u05D7\u05D6\u05D5\u05E8 \u05DC\u05E2\u05E8\u05D9\u05DB\u05D4");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("width", 440);
  }
}
var ALL_TAB = {
  id: "all",
  label: "\u05D4\u05E6\u05D2 \u05D4\u05DB\u05DC",
  icon: "pi-list",
  linkedType: "ALL",
  apiPath: null,
  idField: null,
  nameField: null,
  codeField: null
};
var ASSOC_TABS = {
  PROFILE: [
    ALL_TAB,
    { id: "perm", label: "\u05D4\u05E8\u05E9\u05D0\u05D5\u05EA", icon: "pi-shield", linkedType: null, apiPath: null, idField: null, nameField: null, codeField: null },
    { id: "group", label: "\u05E7\u05D1\u05D5\u05E6\u05D5\u05EA", icon: "pi-users", linkedType: "GROUP", apiPath: "/api/groups", idField: "GroupID", nameField: "GroupName", codeField: "GroupCode" },
    { id: "content-group", label: "\u05E7\u05D1\u05F3 \u05EA\u05D5\u05DB\u05DF", icon: "pi-folder-open", linkedType: "CONTENT_GROUP", apiPath: "/api/content-groups", idField: "ContentGroupID", nameField: "GroupName", codeField: "GroupCode" }
  ],
  GROUP: [
    ALL_TAB,
    { id: "perm", label: "\u05D4\u05E8\u05E9\u05D0\u05D5\u05EA", icon: "pi-shield", linkedType: null, apiPath: null, idField: null, nameField: null, codeField: null },
    { id: "profile", label: "\u05E4\u05E8\u05D5\u05E4\u05D9\u05DC\u05D9\u05DD", icon: "pi-id-card", linkedType: "PROFILE", apiPath: "/api/profiles", idField: "ProfileID", nameField: "ProfileName", codeField: "ProfileCode" },
    { id: "content-group", label: "\u05E7\u05D1\u05F3 \u05EA\u05D5\u05DB\u05DF", icon: "pi-folder-open", linkedType: "CONTENT_GROUP", apiPath: "/api/content-groups", idField: "ContentGroupID", nameField: "GroupName", codeField: "GroupCode" }
  ],
  USER: [
    ALL_TAB,
    { id: "perm", label: "\u05D4\u05E8\u05E9\u05D0\u05D5\u05EA", icon: "pi-shield", linkedType: null, apiPath: null, idField: null, nameField: null, codeField: null },
    { id: "profile", label: "\u05E4\u05E8\u05D5\u05E4\u05D9\u05DC\u05D9\u05DD", icon: "pi-id-card", linkedType: "PROFILE", apiPath: "/api/profiles", idField: "ProfileID", nameField: "ProfileName", codeField: "ProfileCode" },
    { id: "group", label: "\u05E7\u05D1\u05D5\u05E6\u05D5\u05EA", icon: "pi-users", linkedType: "GROUP", apiPath: "/api/groups", idField: "GroupID", nameField: "GroupName", codeField: "GroupCode" }
  ],
  CONTENT_GROUP: [
    { id: "perm", label: "\u05D4\u05E8\u05E9\u05D0\u05D5\u05EA", icon: "pi-shield", linkedType: null, apiPath: null, idField: null, nameField: null, codeField: null }
  ]
};
var LogicPermsComponent = class _LogicPermsComponent {
  http;
  notif;
  entityType = "";
  entityId = 0;
  entityName = "";
  closed = new EventEmitter();
  // ── UI state ──────────────────────────────────────────────────────────────
  loading = signal(
    true,
    ...ngDevMode ? [{ debugName: "loading" }] : (
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
  loadingItems = signal(
    false,
    ...ngDevMode ? [{ debugName: "loadingItems" }] : (
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
  selectedTab = signal(
    "all",
    ...ngDevMode ? [{ debugName: "selectedTab" }] : (
      /* istanbul ignore next */
      []
    )
  );
  assignedSearch = signal(
    "",
    ...ngDevMode ? [{ debugName: "assignedSearch" }] : (
      /* istanbul ignore next */
      []
    )
  );
  showConfirmClose = signal(
    false,
    ...ngDevMode ? [{ debugName: "showConfirmClose" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // ── Server data ───────────────────────────────────────────────────────────
  allLogicPerms = signal(
    [],
    ...ngDevMode ? [{ debugName: "allLogicPerms" }] : (
      /* istanbul ignore next */
      []
    )
  );
  allAssignments = signal(
    [],
    ...ngDevMode ? [{ debugName: "allAssignments" }] : (
      /* istanbul ignore next */
      []
    )
  );
  entityLinks = signal(
    [],
    ...ngDevMode ? [{ debugName: "entityLinks" }] : (
      /* istanbul ignore next */
      []
    )
  );
  availableItems = signal(
    [],
    ...ngDevMode ? [{ debugName: "availableItems" }] : (
      /* istanbul ignore next */
      []
    )
  );
  allSections = signal(
    [],
    ...ngDevMode ? [{ debugName: "allSections" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // ── Pending local changes (staged until שמור is clicked) ─────────────────
  localPermChanges = signal(
    [],
    ...ngDevMode ? [{ debugName: "localPermChanges" }] : (
      /* istanbul ignore next */
      []
    )
  );
  localLinkChanges = signal(
    [],
    ...ngDevMode ? [{ debugName: "localLinkChanges" }] : (
      /* istanbul ignore next */
      []
    )
  );
  localGrantChanges = signal(
    [],
    ...ngDevMode ? [{ debugName: "localGrantChanges" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isDirty = signal(
    false,
    ...ngDevMode ? [{ debugName: "isDirty" }] : (
      /* istanbul ignore next */
      []
    )
  );
  itemsCache = /* @__PURE__ */ new Map();
  // ── Navigation ────────────────────────────────────────────────────────────
  get tabs() {
    return ASSOC_TABS[this.entityType] ?? [ASSOC_TABS["CONTENT_GROUP"][0]];
  }
  get currentTab() {
    return this.tabs.find((t) => t.id === this.selectedTab());
  }
  get dialogTitle() {
    const label = { PROFILE: "\u05E4\u05E8\u05D5\u05E4\u05D9\u05DC", GROUP: "\u05E7\u05D1\u05D5\u05E6\u05D4", CONTENT_GROUP: "\u05E7\u05D1\u05D5\u05E6\u05EA \u05EA\u05D5\u05DB\u05DF", USER: "\u05DE\u05E9\u05EA\u05DE\u05E9" }[this.entityType] ?? this.entityType;
    return `\u05E9\u05D9\u05D5\u05DA \u05D4\u05E8\u05E9\u05D0\u05D5\u05EA \u2014 ${this.entityName} (${label})`;
  }
  // ── Server snapshot for this entity ──────────────────────────────────────
  entityAssignments = computed(
    () => this.allAssignments().filter((a) => a.EntityType === this.entityType && a.EntityID === this.entityId),
    ...ngDevMode ? [{ debugName: "entityAssignments" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // ── Effective state: local overrides server ───────────────────────────────
  isAssigned(permCodeId) {
    const change = [...this.localPermChanges()].reverse().find((c) => c.permCodeId === permCodeId);
    if (change)
      return change.action === "ADD";
    return this.entityAssignments().some((a) => a.PermCodeID === permCodeId);
  }
  getAssignment(permCodeId) {
    return this.entityAssignments().find((a) => a.PermCodeID === permCodeId);
  }
  getEffectiveGrant(a) {
    const change = this.localGrantChanges().find((c) => c.assignmentId === a.AssignmentID);
    return change ? change.isGrant : a.IsGrant;
  }
  isLinkedBy(linkedType, linkedId) {
    const change = [...this.localLinkChanges()].reverse().find((c) => c.linkedType === linkedType && c.linkedId === linkedId);
    if (change)
      return change.action === "ADD";
    return this.entityLinks().some((l) => l.LinkedType === linkedType && l.LinkedID === linkedId);
  }
  isLinked(item) {
    const linkedType = this.currentTab?.linkedType;
    if (!linkedType)
      return false;
    return this.isLinkedBy(linkedType, this.itemId(item));
  }
  // ── allAssigned: merges server + local pending changes ────────────────────
  allAssigned = computed(
    () => {
      const serverPerms = this.entityAssignments().filter((a) => {
        const ch = [...this.localPermChanges()].reverse().find((c) => c.permCodeId === a.PermCodeID);
        return !ch || ch.action !== "REMOVE";
      }).map((a) => ({
        id: a.AssignmentID,
        linkedType: "PERM",
        name: a.PermName,
        isGrant: this.getEffectiveGrant(a),
        icon: "pi-shield",
        raw: a
      }));
      const localPerms = this.localPermChanges().filter((c) => c.action === "ADD" && c.perm).map((c) => ({
        id: -(c.permCodeId + 1e5),
        linkedType: "PERM",
        name: c.perm.PermName,
        isGrant: true,
        icon: "pi-shield",
        raw: { _isLocal: true, _permCodeId: c.permCodeId }
      }));
      const serverLinks = this.entityLinks().filter((l) => {
        const ch = [...this.localLinkChanges()].reverse().find((c) => c.linkedType === l.LinkedType && c.linkedId === l.LinkedID);
        return !ch || ch.action !== "REMOVE";
      }).map((l) => {
        const tab = this.tabs.find((t) => t.linkedType === l.LinkedType);
        return {
          id: l.LinkID,
          linkedType: l.LinkedType,
          name: l.LinkedName,
          isGrant: true,
          icon: tab?.icon ?? "pi-link",
          raw: l
        };
      });
      const localLinks = this.localLinkChanges().filter((c) => c.action === "ADD").map((c, i) => {
        const tab = this.tabs.find((t) => t.linkedType === c.linkedType);
        return {
          id: -(i + 1) * 1e4,
          linkedType: c.linkedType,
          name: c.linkedName,
          isGrant: true,
          icon: tab?.icon ?? "pi-link",
          raw: { _isLocal: true, _linkedId: c.linkedId, _linkedType: c.linkedType }
        };
      });
      return [...serverPerms, ...localPerms, ...serverLinks, ...localLinks];
    },
    ...ngDevMode ? [{ debugName: "allAssigned" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // ── Filtered views ────────────────────────────────────────────────────────
  allSectionItemCount = computed(
    () => this.allSections().reduce((sum, s) => sum + s.items.length, 0),
    ...ngDevMode ? [{ debugName: "allSectionItemCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filteredPerms = computed(
    () => {
      const q = this.searchText().toLowerCase().trim();
      return this.allLogicPerms().filter((p) => !q || p.PermName.toLowerCase().includes(q) || p.PermCode.toLowerCase().includes(q));
    },
    ...ngDevMode ? [{ debugName: "filteredPerms" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filteredItems = computed(
    () => {
      const q = this.searchText().toLowerCase().trim();
      const tab = this.currentTab;
      if (!tab?.idField)
        return [];
      return this.availableItems().filter((item) => {
        if (!q)
          return true;
        const name = (item[tab.nameField] || "").toLowerCase();
        const code = tab.codeField ? (item[tab.codeField] || "").toLowerCase() : "";
        return name.includes(q) || code.includes(q);
      });
    },
    ...ngDevMode ? [{ debugName: "filteredItems" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filteredAssigned = computed(
    () => {
      const q = this.assignedSearch().toLowerCase().trim();
      const all = this.allAssigned();
      return q ? all.filter((item) => item.name.toLowerCase().includes(q)) : all;
    },
    ...ngDevMode ? [{ debugName: "filteredAssigned" }] : (
      /* istanbul ignore next */
      []
    )
  );
  tabCount(tab) {
    if (tab.id === "all")
      return this.allAssigned().length;
    if (!tab.linkedType)
      return this.allAssigned().filter((a) => a.linkedType === "PERM").length;
    return this.allAssigned().filter((a) => a.linkedType === tab.linkedType).length;
  }
  filteredSectionItems(section) {
    const q = this.searchText().toLowerCase().trim();
    if (!q)
      return section.items;
    return section.items.filter((item) => {
      const name = (item[section.nameField] || "").toLowerCase();
      const code = section.codeField ? (item[section.codeField] || "").toLowerCase() : "";
      return name.includes(q) || code.includes(q);
    });
  }
  entityPermCount(linkedType, linkedId) {
    return this.allAssignments().filter((a) => a.EntityType === linkedType && a.EntityID === linkedId).length;
  }
  sectionItemId(s, item) {
    return item[s.idField] ?? 0;
  }
  sectionItemName(s, item) {
    return item[s.nameField] ?? "";
  }
  sectionItemCode(s, item) {
    return s.codeField ? item[s.codeField] ?? "" : "";
  }
  sectionIsChecked(s, item) {
    if (s.linkedType === "PERM")
      return this.isAssigned(item.PermCodeID);
    return this.isLinkedBy(s.linkedType, this.sectionItemId(s, item));
  }
  sectionIsDisabled(_s, _item) {
    return this.saving();
  }
  sectionToggle(s, item) {
    if (s.linkedType === "PERM")
      this.togglePerm(item);
    else
      this.toggleLinkBy(s.linkedType, this.sectionItemId(s, item), this.sectionItemName(s, item));
  }
  itemId(item) {
    const f = this.currentTab?.idField;
    return f ? item[f] ?? 0 : 0;
  }
  itemName(item) {
    const f = this.currentTab?.nameField;
    return f ? item[f] ?? "" : "";
  }
  itemCode(item) {
    const f = this.currentTab?.codeField;
    return f ? item[f] ?? "" : "";
  }
  constructor(http, notif) {
    this.http = http;
    this.notif = notif;
  }
  ngOnInit() {
    this.loadAll();
  }
  loadAll() {
    this.loading.set(true);
    forkJoin({
      perms: this.http.get("/api/permission-codes"),
      assignments: this.http.get("/api/perm-assignments"),
      links: this.http.get(`/api/entity-links?ownerType=${this.entityType}&ownerId=${this.entityId}`)
    }).subscribe({
      next: ({ perms, assignments, links }) => {
        this.allLogicPerms.set((perms.data ?? []).filter((p) => p.SourceType === "MANUAL" && p.IsActive !== false));
        this.allAssignments.set((assignments.data ?? []).filter((a) => a.SourceType === "MANUAL"));
        this.entityLinks.set(links.data ?? []);
        this.loading.set(false);
        this.initAllTab();
      },
      error: () => {
        this.loading.set(false);
        this.notify("\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D8\u05E2\u05D9\u05E0\u05D4", "error");
      }
    });
  }
  initAllTab() {
    const nonPermTabs = this.tabs.filter((t) => t.id !== "all" && t.linkedType !== null && t.apiPath !== null);
    const buildSections = () => {
      const permSection = {
        id: "perm",
        label: "\u05D4\u05E8\u05E9\u05D0\u05D5\u05EA",
        icon: "pi-shield",
        linkedType: "PERM",
        idField: "PermCodeID",
        nameField: "PermName",
        codeField: "PermCode",
        items: this.allLogicPerms()
      };
      const entitySections = nonPermTabs.filter((t) => t.idField && t.nameField && t.linkedType).map((t) => ({
        id: t.id,
        label: t.label,
        icon: t.icon,
        linkedType: t.linkedType,
        idField: t.idField,
        nameField: t.nameField,
        codeField: t.codeField,
        items: this.itemsCache.get(t.id) ?? []
      }));
      this.allSections.set([permSection, ...entitySections]);
    };
    buildSections();
    if (nonPermTabs.length === 0)
      return;
    const requests = {};
    nonPermTabs.forEach((t) => {
      requests[t.id] = this.http.get(t.apiPath).pipe(catchError(() => of({ data: [] })));
    });
    forkJoin(requests).subscribe((results) => {
      nonPermTabs.forEach((t) => {
        this.itemsCache.set(t.id, results[t.id]?.data ?? []);
      });
      buildSections();
    });
  }
  selectTab(tabId) {
    this.selectedTab.set(tabId);
    this.searchText.set("");
    if (tabId === "all") {
      this.initAllTab();
      return;
    }
    const tab = this.tabs.find((t) => t.id === tabId);
    if (!tab?.apiPath)
      return;
    if (this.itemsCache.has(tabId)) {
      this.availableItems.set(this.itemsCache.get(tabId));
      return;
    }
    this.loadingItems.set(true);
    this.http.get(tab.apiPath).subscribe({
      next: (r) => {
        const items = r.data ?? [];
        this.itemsCache.set(tabId, items);
        this.availableItems.set(items);
        this.loadingItems.set(false);
      },
      error: () => this.loadingItems.set(false)
    });
  }
  // ── Local-only toggles — no API calls; changes staged until שמור ──────────
  togglePerm(perm) {
    if (this.saving())
      return;
    if (this.isAssigned(perm.PermCodeID)) {
      const existing = this.getAssignment(perm.PermCodeID);
      this.localPermChanges.update((cs) => {
        const filtered = cs.filter((c) => !(c.permCodeId === perm.PermCodeID && c.action === "ADD"));
        if (existing)
          return [...filtered, { permCodeId: perm.PermCodeID, action: "REMOVE", assignmentId: existing.AssignmentID }];
        return filtered;
      });
    } else {
      this.localPermChanges.update((cs) => {
        const filtered = cs.filter((c) => !(c.permCodeId === perm.PermCodeID && c.action === "REMOVE"));
        return [...filtered, { permCodeId: perm.PermCodeID, action: "ADD", perm }];
      });
    }
    this.isDirty.set(true);
  }
  setGrant(a, isGrant) {
    if (this.saving() || this.getEffectiveGrant(a) === isGrant)
      return;
    this.localGrantChanges.update((cs) => {
      const filtered = cs.filter((c) => c.assignmentId !== a.AssignmentID);
      return [...filtered, { assignmentId: a.AssignmentID, isGrant }];
    });
    this.isDirty.set(true);
  }
  toggleLink(item) {
    const tab = this.currentTab;
    if (!tab?.linkedType)
      return;
    this.toggleLinkBy(tab.linkedType, this.itemId(item), this.itemName(item));
  }
  toggleLinkBy(linkedType, linkedId, linkedName) {
    if (this.saving())
      return;
    if (this.isLinkedBy(linkedType, linkedId)) {
      const existing = this.entityLinks().find((l) => l.LinkedType === linkedType && l.LinkedID === linkedId);
      this.localLinkChanges.update((cs) => {
        const filtered = cs.filter((c) => !(c.linkedType === linkedType && c.linkedId === linkedId && c.action === "ADD"));
        if (existing)
          return [...filtered, { action: "REMOVE", linkedType, linkedId, linkedName, linkId: existing.LinkID }];
        return filtered;
      });
    } else {
      this.localLinkChanges.update((cs) => {
        const filtered = cs.filter((c) => !(c.linkedType === linkedType && c.linkedId === linkedId && c.action === "REMOVE"));
        return [...filtered, { action: "ADD", linkedType, linkedId, linkedName }];
      });
    }
    this.isDirty.set(true);
  }
  removeAssignedItem(item) {
    if (this.saving())
      return;
    if (item.linkedType === "PERM") {
      if (item.raw?._isLocal) {
        this.localPermChanges.update((cs) => cs.filter((c) => !(c.permCodeId === item.raw._permCodeId && c.action === "ADD")));
      } else {
        const a = item.raw;
        this.localPermChanges.update((cs) => {
          const filtered = cs.filter((c) => c.permCodeId !== a.PermCodeID);
          return [...filtered, { permCodeId: a.PermCodeID, action: "REMOVE", assignmentId: item.id }];
        });
      }
    } else {
      if (item.raw?._isLocal) {
        this.localLinkChanges.update((cs) => cs.filter((c) => !(c.linkedType === item.raw._linkedType && c.linkedId === item.raw._linkedId && c.action === "ADD")));
      } else {
        const l = item.raw;
        this.localLinkChanges.update((cs) => {
          const filtered = cs.filter((c) => !(c.linkedType === l.LinkedType && c.linkedId === l.LinkedID));
          return [...filtered, { action: "REMOVE", linkedType: l.LinkedType, linkedId: l.LinkedID, linkedName: l.LinkedName, linkId: item.id }];
        });
      }
    }
    this.isDirty.set(true);
  }
  // ── Save: batch all pending changes to API ────────────────────────────────
  save() {
    if (!this.isDirty()) {
      this.closed.emit();
      return;
    }
    this.saving.set(true);
    const ops = [];
    this.localPermChanges().forEach((c) => {
      if (c.action === "REMOVE" && c.assignmentId) {
        ops.push(this.http.delete(`/api/perm-assignments/${c.assignmentId}`).pipe(catchError(() => of(null))));
      } else if (c.action === "ADD" && c.perm) {
        ops.push(this.http.post("/api/perm-assignments", {
          permCodeId: c.permCodeId,
          entityType: this.entityType,
          entityId: this.entityId,
          entityName: this.entityName,
          isGrant: true,
          actions: ""
        }).pipe(catchError(() => of(null))));
      }
    });
    this.localGrantChanges().forEach((c) => {
      const a = this.entityAssignments().find((x) => x.AssignmentID === c.assignmentId);
      ops.push(this.http.put(`/api/perm-assignments/${c.assignmentId}`, {
        isGrant: c.isGrant,
        isActive: true,
        actions: a?.Actions ?? ""
      }).pipe(catchError(() => of(null))));
    });
    this.localLinkChanges().forEach((c) => {
      if (c.action === "REMOVE" && c.linkId) {
        ops.push(this.http.delete(`/api/entity-links/${c.linkId}`).pipe(catchError(() => of(null))));
      } else if (c.action === "ADD") {
        ops.push(this.http.post("/api/entity-links", {
          ownerType: this.entityType,
          ownerId: this.entityId,
          linkedType: c.linkedType,
          linkedId: c.linkedId,
          linkedName: c.linkedName
        }).pipe(catchError(() => of(null))));
      }
    });
    if (ops.length === 0) {
      this.saving.set(false);
      this.isDirty.set(false);
      this.closed.emit();
      return;
    }
    forkJoin(ops).subscribe({
      next: () => {
        this.saving.set(false);
        this.isDirty.set(false);
        this.notify("\u05D4\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05E0\u05E9\u05DE\u05E8\u05D5 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4", "success");
        this.closed.emit();
      },
      error: () => {
        this.saving.set(false);
        this.notify("\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05E9\u05DE\u05D9\u05E8\u05D4", "error");
      }
    });
  }
  // ── Close: warn if unsaved changes exist ──────────────────────────────────
  tryClose() {
    if (this.isDirty()) {
      this.showConfirmClose.set(true);
    } else {
      this.closed.emit();
    }
  }
  discardAndClose() {
    this.showConfirmClose.set(false);
    this.closed.emit();
  }
  cancelClose() {
    this.showConfirmClose.set(false);
  }
  notify(msg, style) {
    this.notif.show({
      content: msg,
      closable: true,
      type: { style, icon: true },
      animation: { type: "slide", duration: 300 },
      position: { horizontal: "center", vertical: "top" }
    });
  }
  static \u0275fac = function LogicPermsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LogicPermsComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(NotificationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LogicPermsComponent, selectors: [["app-logic-perms"]], inputs: { entityType: "entityType", entityId: "entityId", entityName: "entityName" }, outputs: { closed: "closed" }, features: [\u0275\u0275ProvidersFeature([NotificationService])], decls: 12, vars: 9, consts: [[3, "close", "title", "width", "minWidth"], [1, "lp-center-spin"], ["dir", "rtl", 1, "lp-body"], [1, "dialog-footer"], [1, "btn-save", 3, "click", "disabled"], [1, "dirty-badge"], [1, "btn-cancel", 3, "click", "disabled"], ["title", "\u05D4\u05D0\u05DD \u05DC\u05E6\u05D0\u05EA \u05DC\u05DC\u05D0 \u05E9\u05DE\u05D9\u05E8\u05D4?", 3, "width"], ["type", "converging-spinner", "themeColor", "primary", "size", "large"], [1, "lp-nav"], ["type", "button", 1, "lp-nav-btn", 3, "active", "nav-all"], [1, "lp-items"], [1, "lp-panel-header"], [1, "lp-panel-title"], [1, "lp-count"], [1, "search-wrap"], [1, "search-icon"], ["type", "text", "placeholder", "\u05D7\u05D9\u05E4\u05D5\u05E9...", 1, "search-input", 3, "input", "value"], [1, "lp-assigned"], [1, "search-wrap", "search-wrap-sm"], [1, "lp-hint"], [1, "assigned-list"], ["type", "button", 1, "lp-nav-btn", 3, "click"], [1, "nav-label"], [1, "nav-count"], [1, "items-list"], [1, "item-row", 3, "item-selected"], [1, "item-row"], [1, "item-check-label"], ["type", "checkbox", 1, "item-checkbox", 3, "change", "checked", "disabled"], [1, "pi", "pi-shield", "item-type-icon"], [1, "item-info"], [1, "item-name"], [1, "item-code"], [1, "grant-ctrl"], ["type", "button", 1, "grant-btn", "grant-allow", 3, "click"], ["type", "button", 1, "grant-btn", "grant-deny", 3, "click"], ["type", "converging-spinner", "themeColor", "primary", "size", "small"], [1, "section-header"], [1, "section-badge"], [1, "empty-section"], ["title", "\u05D4\u05E8\u05E9\u05D0\u05D5\u05EA \u05DE\u05E9\u05D5\u05D9\u05DB\u05D5\u05EA", 1, "entity-perm-badge"], [1, "assigned-row", 3, "row-local"], [1, "assigned-row"], [1, "grant-dot", 3, "grant", "deny", "title"], [1, "a-name", 3, "title"], ["title", "\u05D8\u05E8\u05DD \u05E0\u05E9\u05DE\u05E8", 1, "local-badge"], [3, "title"], ["title", "\u05D4\u05E1\u05E8", 1, "remove-btn", 3, "click", "disabled"], [2, "font-size", ".8rem", "width", ".8rem", "height", ".8rem"], [1, "grant-dot", 3, "title"], ["type", "converging-spinner", "themeColor", "secondary", "size", "small", 2, "margin-left", "6px"], ["title", "\u05D4\u05D0\u05DD \u05DC\u05E6\u05D0\u05EA \u05DC\u05DC\u05D0 \u05E9\u05DE\u05D9\u05E8\u05D4?", 3, "close", "width"], ["dir", "rtl", 1, "confirm-body"], [1, "pi", "pi-exclamation-triangle", "confirm-icon"], [1, "confirm-text"], [1, "confirm-sub"], [1, "btn-discard", 3, "click"], [1, "btn-cancel", 3, "click"]], template: function LogicPermsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "kendo-dialog", 0);
      \u0275\u0275listener("close", function LogicPermsComponent_Template_kendo_dialog_close_0_listener() {
        return ctx.tryClose();
      });
      \u0275\u0275conditionalCreate(1, LogicPermsComponent_Conditional_1_Template, 2, 0, "div", 1)(2, LogicPermsComponent_Conditional_2_Template, 31, 11, "div", 2);
      \u0275\u0275elementStart(3, "kendo-dialog-actions")(4, "div", 3)(5, "button", 4);
      \u0275\u0275listener("click", function LogicPermsComponent_Template_button_click_5_listener() {
        return ctx.save();
      });
      \u0275\u0275conditionalCreate(6, LogicPermsComponent_Conditional_6_Template, 2, 0)(7, LogicPermsComponent_Conditional_7_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, LogicPermsComponent_Conditional_8_Template, 2, 0, "span", 5);
      \u0275\u0275elementStart(9, "button", 6);
      \u0275\u0275listener("click", function LogicPermsComponent_Template_button_click_9_listener() {
        return ctx.tryClose();
      });
      \u0275\u0275text(10, "\u05D1\u05D9\u05D8\u05D5\u05DC");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(11, LogicPermsComponent_Conditional_11_Template, 13, 1, "kendo-dialog", 7);
    }
    if (rf & 2) {
      \u0275\u0275property("title", ctx.dialogTitle)("width", 1300)("minWidth", 900);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 1 : 2);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.saving());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.saving() ? 6 : 7);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isDirty() ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.saving());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showConfirmClose() ? 11 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, MatIconModule, MatIcon, Dir, DialogModule, DialogComponent, DialogActionsComponent, IndicatorsModule, LoaderComponent, NotificationModule], styles: ['\n[_nghost-%COMP%] {\n  display: contents;\n}\n.lp-center-spin[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n  .k-dialog-titlebar {\n  direction: ltr;\n  display: flex;\n  align-items: center;\n  padding-inline: 16px;\n}\n  .k-dialog-titlebar .k-dialog-title {\n  flex: 1;\n  direction: rtl;\n  text-align: right;\n}\n  .k-dialog-titlebar .k-dialog-titlebar-actions {\n  margin-inline-start: 0;\n  order: -1;\n}\n  .k-dialog-titlebar .k-dialog-close {\n  width: 32px !important;\n  height: 32px !important;\n  min-width: 32px !important;\n  min-height: 32px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  border-radius: 6px !important;\n}\n  .k-dialog-actions {\n  direction: rtl !important;\n}\n.lp-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  direction: rtl;\n  height: 620px;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n  background: var(--sf-bg-card);\n}\n.lp-nav[_ngcontent-%COMP%] {\n  width: 114px;\n  flex-shrink: 0;\n  background: var(--sf-bg);\n  display: flex;\n  flex-direction: column;\n  padding: 6px 5px;\n  gap: 2px;\n  overflow-y: auto;\n}\n.lp-nav-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 9px 4px 7px;\n  border: none;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s, color 0.12s;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.lp-nav-btn[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n}\n.lp-nav-btn.active[_ngcontent-%COMP%] {\n  background: var(--sf-primary-light);\n}\n.lp-nav-btn.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%], \n.lp-nav-btn.active[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  color: var(--sf-primary);\n}\n.lp-nav-btn.nav-all[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--sf-border);\n  margin-bottom: 4px;\n  border-radius: 8px 8px 0 0;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--sf-text-secondary);\n}\n.nav-label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  white-space: nowrap;\n  text-align: center;\n}\n.nav-count[_ngcontent-%COMP%] {\n  font-size: 0.66rem;\n  font-weight: 700;\n  background: var(--sf-bg-hover);\n  color: var(--sf-text-muted);\n  border-radius: 8px;\n  padding: 1px 6px;\n  min-width: 16px;\n  text-align: center;\n}\n.nav-count.count-has[_ngcontent-%COMP%] {\n  background: var(--sf-primary);\n  color: #fff;\n}\n.lp-items[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  border-inline-start: 1px solid var(--sf-border);\n}\n.lp-assigned[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  background: var(--sf-bg-card);\n  border-inline-start: 2px solid var(--sf-border);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.lp-panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: space-between;\n  padding: 10px 14px 8px;\n  border-bottom: 1px solid var(--sf-border);\n  background: var(--sf-grid-hd-bg);\n  flex-shrink: 0;\n}\n.lp-panel-title[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--sf-grid-hd-color);\n}\n.lp-count[_ngcontent-%COMP%] {\n  background: var(--sf-primary);\n  color: #fff;\n  border-radius: 10px;\n  font-size: 0.68rem;\n  font-weight: 700;\n  padding: 1px 7px;\n  min-width: 18px;\n  text-align: center;\n}\n.lp-hint[_ngcontent-%COMP%] {\n  padding: 20px 14px;\n  font-size: 0.82rem;\n  color: var(--sf-text-muted);\n  text-align: center;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 12px;\n  border-bottom: 1px solid var(--sf-border);\n  flex-shrink: 0;\n  direction: rtl;\n}\n.search-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  color: var(--sf-text-muted);\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 0.83rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  color: var(--sf-text);\n  direction: rtl;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--sf-text-muted);\n}\n.items-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.item-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 7px 12px;\n  border-bottom: 1px solid var(--sf-border);\n  transition: background 0.12s;\n  direction: rtl;\n}\n.item-row[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n}\n.item-row.item-selected[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n}\n.item-check-label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n.item-checkbox[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: var(--sf-primary);\n}\n.item-type-icon[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--sf-primary);\n  opacity: 0.65;\n  flex-shrink: 0;\n}\n.entity-perm-badge[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  flex-shrink: 0;\n  background: var(--sf-primary-light);\n  color: var(--sf-primary);\n  border-radius: 10px;\n  padding: 1px 7px;\n  min-width: 18px;\n  text-align: center;\n}\n.item-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.item-name[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  font-weight: 500;\n  color: var(--sf-text);\n}\n.item-code[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.68rem;\n  background: var(--sf-bg);\n  border: 1px solid var(--sf-border);\n  border-radius: 3px;\n  padding: 1px 5px;\n  color: var(--sf-text-muted);\n  align-self: flex-start;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 6px 12px;\n  background: var(--sf-bg-hover);\n  border-bottom: 1px solid var(--sf-border);\n  border-top: 1px solid var(--sf-border);\n  direction: rtl;\n  font-size: 0.73rem;\n  font-weight: 700;\n  color: var(--sf-text-secondary);\n}\n.section-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--sf-primary);\n}\n.section-badge[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n  font-size: 0.66rem;\n  font-weight: 700;\n  background: var(--sf-border);\n  color: var(--sf-text-secondary);\n  border-radius: 6px;\n  padding: 1px 6px;\n}\n.empty-section[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  font-size: 0.78rem;\n  color: var(--sf-text-muted);\n  text-align: right;\n}\n.grant-ctrl[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border: 1px solid var(--sf-border);\n  border-radius: 6px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.grant-btn[_ngcontent-%COMP%] {\n  padding: 3px 9px;\n  border: none;\n  background: var(--sf-bg);\n  cursor: pointer;\n  font-size: 0.72rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  color: var(--sf-text-secondary);\n  transition: all 0.12s;\n}\n.grant-btn[_ngcontent-%COMP%]    + .grant-btn[_ngcontent-%COMP%] {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.grant-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: var(--sf-bg-hover);\n}\n.grant-allow.active[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: #fff;\n  font-weight: 700;\n}\n.grant-deny.active[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #fff;\n  font-weight: 700;\n}\n.assigned-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.assigned-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 10px;\n  border-bottom: 1px solid var(--sf-border);\n  direction: rtl;\n}\n.assigned-row[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n}\n.grant-dot[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.65rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.grant-dot.grant[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #059669;\n}\n.grant-dot.deny[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.a-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.78rem;\n  color: var(--sf-text);\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.a-type-icon[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--sf-primary);\n  opacity: 0.6;\n  flex-shrink: 0;\n}\n.remove-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--sf-text-muted);\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  padding: 0;\n}\n.remove-btn[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.dialog-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 4px 0;\n  align-items: center;\n  direction: rtl;\n  width: 100%;\n}\n.btn-save[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #f97316;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 8px 22px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: background 0.15s;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #ea6c0a;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: var(--sf-bg-card);\n  color: var(--sf-text);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 8px 20px;\n  font-size: 0.85rem;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--sf-bg-hover);\n}\n.btn-cancel[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.dirty-badge[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: #f97316;\n  font-weight: 600;\n  margin-inline-start: 4px;\n  margin-inline-end: auto;\n  animation: _ngcontent-%COMP%_pulse 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.55;\n  }\n}\n.row-local[_ngcontent-%COMP%] {\n  background: #fffbeb;\n}\n.local-badge[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  font-weight: 700;\n  flex-shrink: 0;\n  background: #fef3c7;\n  color: #92400e;\n  border: 1px solid #fcd34d;\n  border-radius: 4px;\n  padding: 1px 5px;\n}\n.confirm-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 20px 24px 10px;\n  direction: rtl;\n  text-align: center;\n}\n.confirm-icon[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  color: #f97316;\n}\n.confirm-text[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0;\n}\n.confirm-sub[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: var(--sf-text-secondary);\n  margin: 0;\n}\n.btn-discard[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 8px 20px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.btn-discard[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n/*# sourceMappingURL=logic-perms.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LogicPermsComponent, [{
    type: Component,
    args: [{ selector: "app-logic-perms", standalone: true, imports: [CommonModule, FormsModule, MatIconModule, DialogModule, IndicatorsModule, NotificationModule], providers: [NotificationService], template: `<kendo-dialog [title]="dialogTitle" [width]="1300" [minWidth]="900" (close)="tryClose()">

  @if (loading()) {
    <div class="lp-center-spin">
      <kendo-loader type="converging-spinner" themeColor="primary" size="large" />
    </div>
  } @else {

    <div class="lp-body" dir="rtl">

      <!-- \u2550\u2550\u2550 RIGHT: Nav panel \u2550\u2550\u2550 -->
      <nav class="lp-nav">
        @for (tab of tabs; track tab.id) {
          <button type="button" class="lp-nav-btn"
                  [class.active]="selectedTab() === tab.id"
                  [class.nav-all]="tab.id === 'all'"
                  (click)="selectTab(tab.id)">
            <i class="pi {{ tab.icon }} nav-icon"></i>
            <span class="nav-label">{{ tab.label }}</span>
            <span class="nav-count" [class.count-has]="tabCount(tab) > 0">{{ tabCount(tab) }}</span>
          </button>
        }
      </nav>

      <!-- \u2550\u2550\u2550 MIDDLE: Items panel \u2550\u2550\u2550 -->
      <div class="lp-items">

        <div class="lp-panel-header">
          <span class="lp-panel-title">{{ currentTab?.label }}</span>
          <span class="lp-count">
            @if (selectedTab() === 'perm')  { {{ filteredPerms().length }}  }
            @if (selectedTab() === 'all')   { {{ allSectionItemCount() }} }
            @if (selectedTab() !== 'perm' && selectedTab() !== 'all') { {{ filteredItems().length }} }
          </span>
        </div>

        <div class="search-wrap">
          <mat-icon class="search-icon">search</mat-icon>
          <input class="search-input" type="text" placeholder="\u05D7\u05D9\u05E4\u05D5\u05E9..."
                 [value]="searchText()"
                 (input)="searchText.set($any($event.target).value)" />
        </div>

        <!-- \u2500\u2500 PERM TAB \u2500\u2500 -->
        @if (selectedTab() === 'perm') {
          @if (filteredPerms().length === 0) {
            <div class="lp-hint">\u05D0\u05D9\u05DF \u05D4\u05E8\u05E9\u05D0\u05D5\u05EA \u05DC\u05D5\u05D2\u05D9\u05E7\u05D4 \u05DE\u05D5\u05D2\u05D3\u05E8\u05D5\u05EA</div>
          } @else {
            <div class="items-list">
              @for (perm of filteredPerms(); track perm.PermCodeID) {
                <div class="item-row" [class.item-selected]="isAssigned(perm.PermCodeID)">
                  <label class="item-check-label">
                    <input type="checkbox" class="item-checkbox"
                           [checked]="isAssigned(perm.PermCodeID)"
                           [disabled]="saving()"
                           (change)="togglePerm(perm)" />
                  </label>
                  <i class="pi pi-shield item-type-icon"></i>
                  <div class="item-info">
                    <span class="item-name">{{ perm.PermName }}</span>
                    <span class="item-code">{{ perm.PermCode }}</span>
                  </div>
                  @if (isAssigned(perm.PermCodeID) && getAssignment(perm.PermCodeID)) {
                    <div class="grant-ctrl">
                      <button type="button" class="grant-btn grant-allow"
                              [class.active]="getEffectiveGrant(getAssignment(perm.PermCodeID)!)"
                              (click)="setGrant(getAssignment(perm.PermCodeID)!, true)">
                        \u2713 \u05D0\u05E4\u05E9\u05E8
                      </button>
                      <button type="button" class="grant-btn grant-deny"
                              [class.active]="!getEffectiveGrant(getAssignment(perm.PermCodeID)!)"
                              (click)="setGrant(getAssignment(perm.PermCodeID)!, false)">
                        \u2717 \u05D7\u05E1\u05D5\u05DD
                      </button>
                    </div>
                  }
                </div>
              }
            </div>
          }
        }

        <!-- \u2500\u2500 ALL TAB \u2500\u2500 -->
        @if (selectedTab() === 'all') {
          @if (allSections().length === 0) {
            <div class="lp-hint">
              <kendo-loader type="converging-spinner" themeColor="primary" size="small" />
            </div>
          } @else {
            <div class="items-list">
              @for (section of allSections(); track section.id) {
                <div class="section-header">
                  <i class="pi {{ section.icon }}"></i>
                  <span>{{ section.label }}</span>
                  <span class="section-badge">{{ section.items.length }}</span>
                </div>
                @for (item of filteredSectionItems(section); track $index) {
                  <div class="item-row" [class.item-selected]="sectionIsChecked(section, item)">
                    <label class="item-check-label">
                      <input type="checkbox" class="item-checkbox"
                             [checked]="sectionIsChecked(section, item)"
                             [disabled]="sectionIsDisabled(section, item)"
                             (change)="sectionToggle(section, item)" />
                    </label>
                    <i class="pi {{ section.icon }} item-type-icon"></i>
                    <div class="item-info">
                      <span class="item-name">{{ sectionItemName(section, item) }}</span>
                      @if (sectionItemCode(section, item)) {
                        <span class="item-code">{{ sectionItemCode(section, item) }}</span>
                      }
                    </div>
                    @if (section.linkedType !== 'PERM' && entityPermCount(section.linkedType, sectionItemId(section, item)) > 0) {
                      <span class="entity-perm-badge" title="\u05D4\u05E8\u05E9\u05D0\u05D5\u05EA \u05DE\u05E9\u05D5\u05D9\u05DB\u05D5\u05EA">
                        {{ entityPermCount(section.linkedType, sectionItemId(section, item)) }}
                      </span>
                    }
                  </div>
                }
                @if (section.items.length === 0) {
                  <div class="empty-section">\u05D0\u05D9\u05DF {{ section.label }}</div>
                }
              }
            </div>
          }
        }

        <!-- \u2500\u2500 SINGLE ENTITY TAB \u2500\u2500 -->
        @if (selectedTab() !== 'perm' && selectedTab() !== 'all') {
          @if (loadingItems()) {
            <div class="lp-hint">
              <kendo-loader type="converging-spinner" themeColor="primary" size="small" />
            </div>
          } @else if (filteredItems().length === 0) {
            <div class="lp-hint">\u05D0\u05D9\u05DF \u05E4\u05E8\u05D9\u05D8\u05D9\u05DD \u05D6\u05DE\u05D9\u05E0\u05D9\u05DD</div>
          } @else {
            <div class="items-list">
              @for (item of filteredItems(); track $index) {
                <div class="item-row" [class.item-selected]="isLinked(item)">
                  <label class="item-check-label">
                    <input type="checkbox" class="item-checkbox"
                           [checked]="isLinked(item)"
                           [disabled]="saving()"
                           (change)="toggleLink(item)" />
                  </label>
                  <i class="pi {{ currentTab?.icon }} item-type-icon"></i>
                  <div class="item-info">
                    <span class="item-name">{{ itemName(item) }}</span>
                    @if (itemCode(item)) {
                      <span class="item-code">{{ itemCode(item) }}</span>
                    }
                  </div>
                  @if (entityPermCount(currentTab!.linkedType!, itemId(item)) > 0) {
                    <span class="entity-perm-badge" title="\u05D4\u05E8\u05E9\u05D0\u05D5\u05EA \u05DE\u05E9\u05D5\u05D9\u05DB\u05D5\u05EA">
                      {{ entityPermCount(currentTab!.linkedType!, itemId(item)) }}
                    </span>
                  }
                </div>
              }
            </div>
          }
        }

      </div><!-- /lp-items -->

      <!-- \u2550\u2550\u2550 LEFT: Assigned panel \u2550\u2550\u2550 -->
      <div class="lp-assigned">
        <div class="lp-panel-header">
          <span class="lp-panel-title">\u05DE\u05E9\u05D5\u05D9\u05DB\u05D5\u05EA</span>
          <span class="lp-count">{{ allAssigned().length }}</span>
        </div>
        <div class="search-wrap search-wrap-sm">
          <mat-icon class="search-icon">search</mat-icon>
          <input class="search-input" type="text" placeholder="\u05D7\u05D9\u05E4\u05D5\u05E9..."
                 [value]="assignedSearch()"
                 (input)="assignedSearch.set($any($event.target).value)" />
        </div>
        @if (filteredAssigned().length === 0) {
          <div class="lp-hint">{{ allAssigned().length === 0 ? '\u05D0\u05D9\u05DF \u05E9\u05D9\u05D5\u05DB\u05D9\u05DD' : '\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0' }}</div>
        } @else {
          <div class="assigned-list">
            @for (item of filteredAssigned(); track item.id) {
              <div class="assigned-row" [class.row-local]="item.raw?._isLocal">
                @if (item.linkedType === 'PERM') {
                  <span class="grant-dot" [class.grant]="item.isGrant" [class.deny]="!item.isGrant"
                        [title]="item.isGrant ? '\u05DE\u05D0\u05D5\u05E4\u05E9\u05E8' : '\u05D7\u05E1\u05D5\u05DD'">
                    {{ item.isGrant ? '\u2713' : '\u2717' }}
                  </span>
                }
                <span class="a-name" [title]="item.name">{{ item.name }}</span>
                @if (item.raw?._isLocal) {
                  <span class="local-badge" title="\u05D8\u05E8\u05DD \u05E0\u05E9\u05DE\u05E8">\u05D7\u05D3\u05E9</span>
                }
                <i class="pi {{ item.icon }} a-type-icon" [title]="item.linkedType"></i>
                <button class="remove-btn" title="\u05D4\u05E1\u05E8" (click)="removeAssignedItem(item)" [disabled]="saving()">
                  <mat-icon style="font-size:.8rem;width:.8rem;height:.8rem">close</mat-icon>
                </button>
              </div>
            }
          </div>
        }
      </div><!-- /lp-assigned -->

    </div><!-- /lp-body -->
  }

  <kendo-dialog-actions>
    <div class="dialog-footer">
      <button class="btn-save" (click)="save()" [disabled]="saving()">
        @if (saving()) {
          <kendo-loader type="converging-spinner" themeColor="secondary" size="small" style="margin-left:6px" />
          \u05E9\u05D5\u05DE\u05E8...
        } @else {
          \u2713 \u05E9\u05DE\u05D5\u05E8
        }
      </button>
      @if (isDirty()) {
        <span class="dirty-badge">\u25CF \u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05DC\u05D0 \u05E9\u05DE\u05D5\u05E8\u05D9\u05DD</span>
      }
      <button class="btn-cancel" (click)="tryClose()" [disabled]="saving()">\u05D1\u05D9\u05D8\u05D5\u05DC</button>
    </div>
  </kendo-dialog-actions>

</kendo-dialog>

<!-- \u2500\u2500 Confirm discard dialog \u2500\u2500 -->
@if (showConfirmClose()) {
  <kendo-dialog title="\u05D4\u05D0\u05DD \u05DC\u05E6\u05D0\u05EA \u05DC\u05DC\u05D0 \u05E9\u05DE\u05D9\u05E8\u05D4?" [width]="440" (close)="cancelClose()">
    <div class="confirm-body" dir="rtl">
      <i class="pi pi-exclamation-triangle confirm-icon"></i>
      <p class="confirm-text">\u05D1\u05D5\u05E6\u05E2\u05D5 \u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05E9\u05D8\u05E8\u05DD \u05E0\u05E9\u05DE\u05E8\u05D5.</p>
      <p class="confirm-sub">\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC "\u05D9\u05E6\u05D9\u05D0\u05D4" \u05EA\u05D1\u05D8\u05DC \u05D0\u05EA \u05DB\u05DC \u05D4\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD.</p>
    </div>
    <kendo-dialog-actions>
      <div class="dialog-footer">
        <button class="btn-discard" (click)="discardAndClose()">\u05D9\u05E6\u05D9\u05D0\u05D4 \u05DC\u05DC\u05D0 \u05E9\u05DE\u05D9\u05E8\u05D4</button>
        <button class="btn-cancel" (click)="cancelClose()">\u05D7\u05D6\u05D5\u05E8 \u05DC\u05E2\u05E8\u05D9\u05DB\u05D4</button>
      </div>
    </kendo-dialog-actions>
  </kendo-dialog>
}
`, styles: ['/* src/app/features/settings/logic-perms/logic-perms.component.scss */\n:host {\n  display: contents;\n}\n.lp-center-spin {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n::ng-deep .k-dialog-titlebar {\n  direction: ltr;\n  display: flex;\n  align-items: center;\n  padding-inline: 16px;\n}\n::ng-deep .k-dialog-titlebar .k-dialog-title {\n  flex: 1;\n  direction: rtl;\n  text-align: right;\n}\n::ng-deep .k-dialog-titlebar .k-dialog-titlebar-actions {\n  margin-inline-start: 0;\n  order: -1;\n}\n::ng-deep .k-dialog-titlebar .k-dialog-close {\n  width: 32px !important;\n  height: 32px !important;\n  min-width: 32px !important;\n  min-height: 32px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  border-radius: 6px !important;\n}\n::ng-deep .k-dialog-actions {\n  direction: rtl !important;\n}\n.lp-body {\n  display: flex;\n  flex-direction: row;\n  direction: rtl;\n  height: 620px;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n  background: var(--sf-bg-card);\n}\n.lp-nav {\n  width: 114px;\n  flex-shrink: 0;\n  background: var(--sf-bg);\n  display: flex;\n  flex-direction: column;\n  padding: 6px 5px;\n  gap: 2px;\n  overflow-y: auto;\n}\n.lp-nav-btn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 9px 4px 7px;\n  border: none;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s, color 0.12s;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.lp-nav-btn:hover {\n  background: var(--sf-bg-hover);\n}\n.lp-nav-btn.active {\n  background: var(--sf-primary-light);\n}\n.lp-nav-btn.active .nav-icon,\n.lp-nav-btn.active .nav-label {\n  color: var(--sf-primary);\n}\n.lp-nav-btn.nav-all {\n  border-bottom: 1px solid var(--sf-border);\n  margin-bottom: 4px;\n  border-radius: 8px 8px 0 0;\n}\n.nav-icon {\n  font-size: 1rem;\n  color: var(--sf-text-secondary);\n}\n.nav-label {\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  white-space: nowrap;\n  text-align: center;\n}\n.nav-count {\n  font-size: 0.66rem;\n  font-weight: 700;\n  background: var(--sf-bg-hover);\n  color: var(--sf-text-muted);\n  border-radius: 8px;\n  padding: 1px 6px;\n  min-width: 16px;\n  text-align: center;\n}\n.nav-count.count-has {\n  background: var(--sf-primary);\n  color: #fff;\n}\n.lp-items {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  border-inline-start: 1px solid var(--sf-border);\n}\n.lp-assigned {\n  flex: 1;\n  min-width: 0;\n  background: var(--sf-bg-card);\n  border-inline-start: 2px solid var(--sf-border);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.lp-panel-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: space-between;\n  padding: 10px 14px 8px;\n  border-bottom: 1px solid var(--sf-border);\n  background: var(--sf-grid-hd-bg);\n  flex-shrink: 0;\n}\n.lp-panel-title {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--sf-grid-hd-color);\n}\n.lp-count {\n  background: var(--sf-primary);\n  color: #fff;\n  border-radius: 10px;\n  font-size: 0.68rem;\n  font-weight: 700;\n  padding: 1px 7px;\n  min-width: 18px;\n  text-align: center;\n}\n.lp-hint {\n  padding: 20px 14px;\n  font-size: 0.82rem;\n  color: var(--sf-text-muted);\n  text-align: center;\n}\n.search-wrap {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 12px;\n  border-bottom: 1px solid var(--sf-border);\n  flex-shrink: 0;\n  direction: rtl;\n}\n.search-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  color: var(--sf-text-muted);\n}\n.search-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 0.83rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  color: var(--sf-text);\n  direction: rtl;\n}\n.search-input::placeholder {\n  color: var(--sf-text-muted);\n}\n.items-list {\n  flex: 1;\n  overflow-y: auto;\n}\n.item-row {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 7px 12px;\n  border-bottom: 1px solid var(--sf-border);\n  transition: background 0.12s;\n  direction: rtl;\n}\n.item-row:hover {\n  background: var(--sf-bg-hover);\n}\n.item-row.item-selected {\n  background: #f0fdf4;\n}\n.item-check-label {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n.item-checkbox {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: var(--sf-primary);\n}\n.item-type-icon {\n  font-size: 0.78rem;\n  color: var(--sf-primary);\n  opacity: 0.65;\n  flex-shrink: 0;\n}\n.entity-perm-badge {\n  font-size: 0.68rem;\n  font-weight: 700;\n  flex-shrink: 0;\n  background: var(--sf-primary-light);\n  color: var(--sf-primary);\n  border-radius: 10px;\n  padding: 1px 7px;\n  min-width: 18px;\n  text-align: center;\n}\n.item-info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.item-name {\n  font-size: 0.83rem;\n  font-weight: 500;\n  color: var(--sf-text);\n}\n.item-code {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.68rem;\n  background: var(--sf-bg);\n  border: 1px solid var(--sf-border);\n  border-radius: 3px;\n  padding: 1px 5px;\n  color: var(--sf-text-muted);\n  align-self: flex-start;\n}\n.section-header {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 6px 12px;\n  background: var(--sf-bg-hover);\n  border-bottom: 1px solid var(--sf-border);\n  border-top: 1px solid var(--sf-border);\n  direction: rtl;\n  font-size: 0.73rem;\n  font-weight: 700;\n  color: var(--sf-text-secondary);\n}\n.section-header i {\n  font-size: 0.75rem;\n  color: var(--sf-primary);\n}\n.section-badge {\n  margin-inline-start: auto;\n  font-size: 0.66rem;\n  font-weight: 700;\n  background: var(--sf-border);\n  color: var(--sf-text-secondary);\n  border-radius: 6px;\n  padding: 1px 6px;\n}\n.empty-section {\n  padding: 8px 20px;\n  font-size: 0.78rem;\n  color: var(--sf-text-muted);\n  text-align: right;\n}\n.grant-ctrl {\n  display: inline-flex;\n  border: 1px solid var(--sf-border);\n  border-radius: 6px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.grant-btn {\n  padding: 3px 9px;\n  border: none;\n  background: var(--sf-bg);\n  cursor: pointer;\n  font-size: 0.72rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  color: var(--sf-text-secondary);\n  transition: all 0.12s;\n}\n.grant-btn + .grant-btn {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.grant-btn:hover:not(.active) {\n  background: var(--sf-bg-hover);\n}\n.grant-allow.active {\n  background: #10b981;\n  color: #fff;\n  font-weight: 700;\n}\n.grant-deny.active {\n  background: #ef4444;\n  color: #fff;\n  font-weight: 700;\n}\n.assigned-list {\n  flex: 1;\n  overflow-y: auto;\n}\n.assigned-row {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 10px;\n  border-bottom: 1px solid var(--sf-border);\n  direction: rtl;\n}\n.assigned-row:hover {\n  background: var(--sf-bg-hover);\n}\n.grant-dot {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.65rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.grant-dot.grant {\n  background: #d1fae5;\n  color: #059669;\n}\n.grant-dot.deny {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.a-name {\n  flex: 1;\n  font-size: 0.78rem;\n  color: var(--sf-text);\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.a-type-icon {\n  font-size: 0.75rem;\n  color: var(--sf-primary);\n  opacity: 0.6;\n  flex-shrink: 0;\n}\n.remove-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--sf-text-muted);\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  padding: 0;\n}\n.remove-btn:hover {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.dialog-footer {\n  display: flex;\n  gap: 8px;\n  padding: 4px 0;\n  align-items: center;\n  direction: rtl;\n  width: 100%;\n}\n.btn-save {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #f97316;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 8px 22px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: background 0.15s;\n}\n.btn-save:hover:not(:disabled) {\n  background: #ea6c0a;\n}\n.btn-save:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.btn-cancel {\n  background: var(--sf-bg-card);\n  color: var(--sf-text);\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  padding: 8px 20px;\n  font-size: 0.85rem;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.btn-cancel:hover:not(:disabled) {\n  background: var(--sf-bg-hover);\n}\n.btn-cancel:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.dirty-badge {\n  font-size: 0.74rem;\n  color: #f97316;\n  font-weight: 600;\n  margin-inline-start: 4px;\n  margin-inline-end: auto;\n  animation: pulse 2s ease-in-out infinite;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.55;\n  }\n}\n.row-local {\n  background: #fffbeb;\n}\n.local-badge {\n  font-size: 0.62rem;\n  font-weight: 700;\n  flex-shrink: 0;\n  background: #fef3c7;\n  color: #92400e;\n  border: 1px solid #fcd34d;\n  border-radius: 4px;\n  padding: 1px 5px;\n}\n.confirm-body {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 20px 24px 10px;\n  direction: rtl;\n  text-align: center;\n}\n.confirm-icon {\n  font-size: 2.4rem;\n  color: #f97316;\n}\n.confirm-text {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0;\n}\n.confirm-sub {\n  font-size: 0.83rem;\n  color: var(--sf-text-secondary);\n  margin: 0;\n}\n.btn-discard {\n  background: #ef4444;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 8px 20px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.btn-discard:hover {\n  background: #dc2626;\n}\n/*# sourceMappingURL=logic-perms.component.css.map */\n'] }]
  }], () => [{ type: HttpClient }, { type: NotificationService }], { entityType: [{
    type: Input
  }], entityId: [{
    type: Input
  }], entityName: [{
    type: Input
  }], closed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LogicPermsComponent, { className: "LogicPermsComponent", filePath: "src/app/features/settings/logic-perms/logic-perms.component.ts", lineNumber: 97 });
})();

export {
  LogicPermsComponent
};
//# sourceMappingURL=chunk-UXYWPSAG.js.map
