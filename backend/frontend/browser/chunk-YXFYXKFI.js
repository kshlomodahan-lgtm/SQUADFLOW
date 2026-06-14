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
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
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
  HostListener,
  HttpClient,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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

// src/app/features/projects/workspace/cortex/cortex.component.ts
var _forTrack0 = ($index, $item) => $item.ConnectionID;
var _forTrack1 = ($index, $item) => $item.ObjectID;
var _forTrack2 = ($index, $item) => $item.FieldID;
var _forTrack3 = ($index, $item) => $item.id;
function CortexComponent_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 28);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.connectSource().ObjectName, " \u2190 \u05D1\u05D7\u05E8 \u05DE\u05D5\u05D3\u05DC \u05D9\u05E2\u05D3");
  }
}
function CortexComponent_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 28);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "\u05D1\u05D7\u05E8 \u05DE\u05D5\u05D3\u05DC \u05DE\u05E7\u05D5\u05E8 \u05DC\u05D7\u05D9\u05D1\u05D5\u05E8");
    \u0275\u0275elementEnd();
  }
}
function CortexComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275conditionalCreate(1, CortexComponent_Conditional_13_Conditional_1_Template, 3, 1)(2, CortexComponent_Conditional_13_Conditional_2_Template, 3, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.connectSource() ? 1 : 2);
  }
}
function CortexComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g", 23);
    \u0275\u0275element(1, "path", 29);
    \u0275\u0275elementStart(2, "path", 30);
    \u0275\u0275listener("click", function CortexComponent_For_43_Template_path_click_2_listener() {
      const c_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.deleteConn(c_r3));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "text", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("d", ctx_r0.connPath(c_r3));
    \u0275\u0275advance();
    \u0275\u0275attribute("d", ctx_r0.connPath(c_r3));
    \u0275\u0275advance();
    \u0275\u0275attribute("x", ctx_r0.connMid(c_r3).x)("y", ctx_r0.connMid(c_r3).y);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3.RelationType);
  }
}
function CortexComponent_For_45_Conditional_18_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r7.Format);
  }
}
function CortexComponent_For_45_Conditional_18_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1, "PK");
    \u0275\u0275elementEnd();
  }
}
function CortexComponent_For_45_Conditional_18_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1, "!");
    \u0275\u0275elementEnd();
  }
}
function CortexComponent_For_45_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 48)(2, "button", 49);
    \u0275\u0275listener("click", function CortexComponent_For_45_Conditional_18_For_2_Template_button_click_2_listener($event) {
      const f_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const obj_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r0.moveField(obj_r5, f_r7, "up"));
    });
    \u0275\u0275text(3, "\u25B2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 50);
    \u0275\u0275listener("click", function CortexComponent_For_45_Conditional_18_For_2_Template_button_click_4_listener($event) {
      const f_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const obj_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r0.moveField(obj_r5, f_r7, "down"));
    });
    \u0275\u0275text(5, "\u25BC");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 51);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 52)(9, "span", 53);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, CortexComponent_For_45_Conditional_18_For_2_Conditional_11_Template, 2, 1, "span", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, CortexComponent_For_45_Conditional_18_For_2_Conditional_12_Template, 2, 0, "span", 55);
    \u0275\u0275conditionalCreate(13, CortexComponent_For_45_Conditional_18_For_2_Conditional_13_Template, 2, 0, "span", 56);
    \u0275\u0275elementStart(14, "button", 57);
    \u0275\u0275listener("click", function CortexComponent_For_45_Conditional_18_For_2_Template_button_click_14_listener($event) {
      const f_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const obj_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r0.deleteField(obj_r5, f_r7));
    });
    \u0275\u0275text(15, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r7 = ctx.$implicit;
    const \u0275$index_135_r8 = ctx.$index;
    const \u0275$count_135_r9 = ctx.$count;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", \u0275$index_135_r8 === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", \u0275$index_135_r8 === \u0275$count_135_r9 - 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.dtIcon(f_r7.DataType));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r7.FieldName);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r7.Format ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r7.IsKey ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r7.IsRequired ? 13 : -1);
  }
}
function CortexComponent_For_45_Conditional_18_Conditional_3_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dt_r11 = ctx.$implicit;
    \u0275\u0275property("value", dt_r11.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", dt_r11.icon, " ", dt_r11.label);
  }
}
function CortexComponent_For_45_Conditional_18_Conditional_3_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "label", 59);
    \u0275\u0275text(2, "\u05E4\u05D5\u05E8\u05DE\u05D8 \u05EA\u05E6\u05D5\u05D2\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function CortexComponent_For_45_Conditional_18_Conditional_3_Conditional_11_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r12);
      const obj_r5 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newFFormat[obj_r5.ObjectID], $event) || (ctx_r0.newFFormat[obj_r5.ObjectID] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const obj_r5 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newFFormat[obj_r5.ObjectID]);
    \u0275\u0275property("placeholder", ctx_r0.dtFormatHint(ctx_r0.newFType[obj_r5.ObjectID]));
    \u0275\u0275control();
  }
}
function CortexComponent_For_45_Conditional_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 58)(2, "label", 59);
    \u0275\u0275text(3, "\u05E9\u05DD \u05E9\u05D3\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function CortexComponent_For_45_Conditional_18_Conditional_3_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const obj_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newFName[obj_r5.ObjectID], $event) || (ctx_r0.newFName[obj_r5.ObjectID] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function CortexComponent_For_45_Conditional_18_Conditional_3_Template_input_keyup_enter_4_listener() {
      \u0275\u0275restoreView(_r10);
      const obj_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveField(obj_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 58)(6, "label", 59);
    \u0275\u0275text(7, "\u05E1\u05D5\u05D2 \u05E0\u05EA\u05D5\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 61);
    \u0275\u0275twoWayListener("ngModelChange", function CortexComponent_For_45_Conditional_18_Conditional_3_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r10);
      const obj_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newFType[obj_r5.ObjectID], $event) || (ctx_r0.newFType[obj_r5.ObjectID] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(9, CortexComponent_For_45_Conditional_18_Conditional_3_For_10_Template, 2, 3, "option", 62, _forTrack3);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, CortexComponent_For_45_Conditional_18_Conditional_3_Conditional_11_Template, 4, 2, "div", 58);
    \u0275\u0275elementStart(12, "div", 63)(13, "label", 64)(14, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function CortexComponent_For_45_Conditional_18_Conditional_3_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r10);
      const obj_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newFKey[obj_r5.ObjectID], $event) || (ctx_r0.newFKey[obj_r5.ObjectID] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(15, "span", 66);
    \u0275\u0275text(16, "\u{1F511} \u05DE\u05E4\u05EA\u05D7 \u05E8\u05D0\u05E9\u05D9 (PK)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "label", 64)(18, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function CortexComponent_For_45_Conditional_18_Conditional_3_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r10);
      const obj_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newFReq[obj_r5.ObjectID], $event) || (ctx_r0.newFReq[obj_r5.ObjectID] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(19, "span", 66);
    \u0275\u0275text(20, "! \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 67)(22, "button", 68);
    \u0275\u0275listener("click", function CortexComponent_For_45_Conditional_18_Conditional_3_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r10);
      const obj_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveField(obj_r5));
    });
    \u0275\u0275text(23, "\u2713 \u05D4\u05D5\u05E1\u05E3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 69);
    \u0275\u0275listener("click", function CortexComponent_For_45_Conditional_18_Conditional_3_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r10);
      const obj_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelField(obj_r5.ObjectID));
    });
    \u0275\u0275text(25, "\u05D1\u05D9\u05D8\u05D5\u05DC");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const obj_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newFName[obj_r5.ObjectID]);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newFType[obj_r5.ObjectID]);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.dataTypes);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.dtHasFormat(ctx_r0.newFType[obj_r5.ObjectID]) ? 11 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newFKey[obj_r5.ObjectID]);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newFReq[obj_r5.ObjectID]);
    \u0275\u0275control();
  }
}
function CortexComponent_For_45_Conditional_18_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 71);
    \u0275\u0275listener("click", function CortexComponent_For_45_Conditional_18_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const obj_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.startField(obj_r5));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u05D4\u05D5\u05E1\u05E3 \u05E9\u05D3\u05D4 ");
    \u0275\u0275elementEnd();
  }
}
function CortexComponent_For_45_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275listener("mousedown", function CortexComponent_For_45_Conditional_18_Template_div_mousedown_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275repeaterCreate(1, CortexComponent_For_45_Conditional_18_For_2_Template, 16, 7, "div", 45, _forTrack2);
    \u0275\u0275conditionalCreate(3, CortexComponent_For_45_Conditional_18_Conditional_3_Template, 26, 5, "div", 46)(4, CortexComponent_For_45_Conditional_18_Conditional_4_Template, 4, 0, "button", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const obj_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(obj_r5.fields);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.addingField[obj_r5.ObjectID] ? 3 : 4);
  }
}
function CortexComponent_For_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275listener("mousedown", function CortexComponent_For_45_Template_div_mousedown_0_listener($event) {
      const obj_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onNodeDown($event, obj_r5));
    })("click", function CortexComponent_For_45_Template_div_click_0_listener() {
      const obj_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clickNode(obj_r5));
    });
    \u0275\u0275element(1, "div", 33);
    \u0275\u0275elementStart(2, "div", 34)(3, "div", 35)(4, "mat-icon", 36);
    \u0275\u0275text(5, "hub");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 37)(7, "span", 38);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 39);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 40);
    \u0275\u0275listener("mousedown", function CortexComponent_For_45_Template_div_mousedown_11_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(12, "button", 41);
    \u0275\u0275listener("click", function CortexComponent_For_45_Template_button_click_12_listener($event) {
      const obj_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleExpand(obj_r5, $event));
    });
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 42);
    \u0275\u0275listener("click", function CortexComponent_For_45_Template_button_click_15_listener($event) {
      const obj_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r0.deleteObj(obj_r5));
    });
    \u0275\u0275elementStart(16, "mat-icon");
    \u0275\u0275text(17, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(18, CortexComponent_For_45_Conditional_18_Template, 5, 1, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const obj_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", obj_r5.PosX, "px")("top", obj_r5.PosY, "px")("width", ctx_r0.nodeW, "px");
    \u0275\u0275classProp("cx-src", ctx_r0.connectSource()?.ObjectID === obj_r5.ObjectID)("cx-tgt", ctx_r0.connectMode() && !!ctx_r0.connectSource() && ctx_r0.connectSource().ObjectID !== obj_r5.ObjectID);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(obj_r5.ObjectName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", obj_r5.fields.length, " fields");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", obj_r5.expanded ? "\u05DB\u05D5\u05D5\u05E5" : "\u05D4\u05E8\u05D7\u05D1");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(obj_r5.expanded ? "unfold_less" : "unfold_more");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(obj_r5.expanded ? 18 : -1);
  }
}
function CortexComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 72);
    \u0275\u0275element(2, "div", 73)(3, "div", 74)(4, "div", 75);
    \u0275\u0275elementStart(5, "mat-icon", 76);
    \u0275\u0275text(6, "hub");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 77);
    \u0275\u0275text(8, "CORTEX \u05DE\u05D0\u05EA\u05D7\u05DC...");
    \u0275\u0275elementEnd()();
  }
}
function CortexComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "mat-icon", 78);
    \u0275\u0275text(2, "hub");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 79);
    \u0275\u0275text(4, "CORTEX \u05E8\u05D9\u05E7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 80);
    \u0275\u0275text(6, "\u05E6\u05D5\u05E8 \u05D0\u05EA \u05D4\u05DE\u05D5\u05D3\u05DC \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05E9\u05DC \u05D4\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 81);
    \u0275\u0275listener("click", function CortexComponent_Conditional_47_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openAdd());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " \u05DE\u05D5\u05D3\u05DC \u05E8\u05D0\u05E9\u05D5\u05DF ");
    \u0275\u0275elementEnd()();
  }
}
function CortexComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275listener("click", function CortexComponent_Conditional_48_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showAdd.set(false));
    });
    \u0275\u0275elementStart(1, "div", 83);
    \u0275\u0275listener("click", function CortexComponent_Conditional_48_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 84)(3, "mat-icon");
    \u0275\u0275text(4, "hub");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "\u05DE\u05D5\u05D3\u05DC \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05D7\u05D3\u05E9");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 85)(8, "label");
    \u0275\u0275text(9, "\u05E9\u05DD \u05D4\u05DE\u05D5\u05D3\u05DC ");
    \u0275\u0275elementStart(10, "span", 86);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "input", 87);
    \u0275\u0275twoWayListener("ngModelChange", function CortexComponent_Conditional_48_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.addName, $event) || (ctx_r0.addName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function CortexComponent_Conditional_48_Template_input_keyup_enter_12_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveObj());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(13, "label");
    \u0275\u0275text(14, "\u05EA\u05D9\u05D0\u05D5\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "textarea", 88);
    \u0275\u0275twoWayListener("ngModelChange", function CortexComponent_Conditional_48_Template_textarea_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.addDesc, $event) || (ctx_r0.addDesc = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 89)(17, "button", 90);
    \u0275\u0275listener("click", function CortexComponent_Conditional_48_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveObj());
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 91);
    \u0275\u0275listener("click", function CortexComponent_Conditional_48_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showAdd.set(false));
    });
    \u0275\u0275text(20, "\u05D1\u05D9\u05D8\u05D5\u05DC");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.addName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.addDesc);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.addSaving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.addSaving ? "..." : "\u2713 \u05E6\u05D5\u05E8 \u05DE\u05D5\u05D3\u05DC", " ");
  }
}
var DATA_TYPES = [
  { id: "pk", label: "\u05DE\u05D6\u05D4\u05D4 PK", icon: "\u{1F511}" },
  { id: "text", label: "\u05D8\u05E7\u05E1\u05D8", icon: "Aa" },
  { id: "number", label: "\u05DE\u05E1\u05E4\u05E8", icon: "##", formatPlaceholder: "\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: 10.2 | 1,000 | 00.00" },
  { id: "date", label: "\u05EA\u05D0\u05E8\u05D9\u05DA", icon: "\u{1F4C5}", formatPlaceholder: "\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: DD/MM/YYYY | YYYY-MM-DD | MM/DD/YYYY" },
  { id: "datetime", label: "\u05EA\u05D0\u05E8\u05D9\u05DA + \u05E9\u05E2\u05D4", icon: "\u{1F550}", formatPlaceholder: "\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: DD/MM/YYYY HH:mm" },
  { id: "boolean", label: "\u05DB\u05DF/\u05DC\u05D0", icon: "\u25CE" },
  { id: "email", label: "\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC", icon: "@" },
  { id: "phone", label: "\u05D8\u05DC\u05E4\u05D5\u05DF", icon: "\u260E", formatPlaceholder: "\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: 05X-XXXXXXX | +972-5X-XXXXXXX" },
  { id: "money", label: "\u05DE\u05D8\u05D1\u05E2", icon: "\u20AA", formatPlaceholder: "\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: \u20AA#,##0.00 | $#,##0.00" },
  { id: "percent", label: "\u05D0\u05D7\u05D5\u05D6", icon: "%", formatPlaceholder: "\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: 0.0% | 0%" },
  { id: "image", label: "\u05EA\u05DE\u05D5\u05E0\u05D4", icon: "\u{1F5BC}" },
  { id: "relation", label: "\u05E7\u05E9\u05E8", icon: "\u{1F517}" },
  { id: "json", label: "JSON", icon: "{}" }
];
var NODE_WIDTH = 230;
var NODE_HDR = 56;
var CortexComponent = class _CortexComponent {
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
  objects = signal(
    [],
    ...ngDevMode ? [{ debugName: "objects" }] : (
      /* istanbul ignore next */
      []
    )
  );
  connections = signal(
    [],
    ...ngDevMode ? [{ debugName: "connections" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Canvas state
  panX = 60;
  panY = 60;
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
  addName = "";
  addDesc = "";
  addSaving = false;
  // Add field per node
  addingField = {};
  newFName = {};
  newFType = {};
  newFFormat = {};
  newFKey = {};
  newFReq = {};
  dataTypes = DATA_TYPES;
  nodeW = NODE_WIDTH;
  nodeHdr = NODE_HDR;
  particles = Array.from({ length: 55 }, () => ({
    x: Math.floor(Math.random() * 1800),
    y: Math.floor(Math.random() * 1e3),
    d: +(Math.random() * 10).toFixed(1),
    s: Math.random() < 0.2 ? 4 : Math.random() < 0.5 ? 3 : 2
  }));
  // Ghost neural background nodes
  bgNodes = Array.from({ length: 14 }, () => ({
    x: Math.floor(Math.random() * 1600 + 100),
    y: Math.floor(Math.random() * 860 + 60),
    r: +(Math.random() * 5 + 3).toFixed(1),
    d: +(Math.random() * 5).toFixed(1)
  }));
  // Ghost connections between bg nodes
  bgConns = (() => {
    const nodes = Array.from({ length: 14 }, () => ({
      x: Math.floor(Math.random() * 1600 + 100),
      y: Math.floor(Math.random() * 860 + 60)
    }));
    const conns = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 340) {
          conns.push({ x1: nodes[i].x, y1: nodes[i].y, x2: nodes[j].x, y2: nodes[j].y, d: +(Math.random() * 3).toFixed(1) });
        }
      }
    }
    return conns;
  })();
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
    this.http.get(`/api/cortex/${this.projectId}`).subscribe({
      next: (r) => {
        const raw = r.data.objects || [];
        const fields = r.data.fields || [];
        const objs = raw.map((o) => __spreadProps(__spreadValues({}, o), {
          fields: fields.filter((f) => f.ObjectID === o.ObjectID),
          expanded: true
        }));
        this.objects.set(objs);
        this.connections.set(r.data.connections || []);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  // ── Canvas pan ────────────────────────────────────────────
  onBgDown(e) {
    if (e.target.closest(".cortex-node"))
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
      this.objects.update((v) => [...v]);
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
  // ── Node drag ─────────────────────────────────────────────
  onNodeDown(e, obj) {
    if (this.connectMode()) {
      e.stopPropagation();
      this.clickNode(obj);
      return;
    }
    if (e.target.tagName === "INPUT" || e.target.tagName === "SELECT" || e.target.tagName === "BUTTON")
      return;
    e.stopPropagation();
    this.dragging = obj;
    this.dragSX = e.clientX;
    this.dragSY = e.clientY;
    this.dragNX = obj.PosX;
    this.dragNY = obj.PosY;
  }
  savePos(obj) {
    this.http.put(`/api/cortex/objects/${obj.ObjectID}/position`, { posX: Math.round(obj.PosX), posY: Math.round(obj.PosY) }).subscribe();
  }
  // ── Connect ───────────────────────────────────────────────
  toggleConnect() {
    this.connectMode.update((v) => !v);
    this.connectSource.set(null);
  }
  clickNode(obj) {
    if (!this.connectMode())
      return;
    const src = this.connectSource();
    if (!src) {
      this.connectSource.set(obj);
      return;
    }
    if (src.ObjectID === obj.ObjectID) {
      this.connectSource.set(null);
      return;
    }
    this.http.post("/api/cortex/connections", {
      projectId: this.projectId,
      sourceId: src.ObjectID,
      targetId: obj.ObjectID,
      relationType: "1:N"
    }).subscribe({
      next: (r) => {
        if (r.success) {
          this.connections.update((v) => [...v, {
            ConnectionID: r.data.connectionId,
            SourceID: src.ObjectID,
            TargetID: obj.ObjectID,
            RelationType: "1:N"
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
  deleteConn(c) {
    this.http.delete(`/api/cortex/connections/${c.ConnectionID}`).subscribe({
      next: () => this.connections.update((v) => v.filter((x) => x.ConnectionID !== c.ConnectionID))
    });
  }
  // ── SVG paths ─────────────────────────────────────────────
  connPath(c) {
    const s = this.objects().find((o) => o.ObjectID === c.SourceID);
    const t = this.objects().find((o) => o.ObjectID === c.TargetID);
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
  connMid(c) {
    const s = this.objects().find((o) => o.ObjectID === c.SourceID);
    const t = this.objects().find((o) => o.ObjectID === c.TargetID);
    if (!s || !t)
      return { x: 0, y: 0 };
    return { x: (s.PosX + t.PosX) / 2 + NODE_WIDTH / 2, y: (s.PosY + t.PosY) / 2 + NODE_HDR / 2 - 12 };
  }
  // ── Add Object ────────────────────────────────────────────
  openAdd() {
    this.addName = "";
    this.addDesc = "";
    this.showAdd.set(true);
  }
  saveObj() {
    if (!this.addName.trim() || this.addSaving)
      return;
    this.addSaving = true;
    const cx = (-this.panX + window.innerWidth / 2) / this.zoom;
    const cy = (-this.panY + window.innerHeight / 2) / this.zoom;
    const px = Math.max(20, cx - 115 + (Math.random() - 0.5) * 220);
    const py = Math.max(20, cy - 80 + (Math.random() - 0.5) * 160);
    this.http.post("/api/cortex/objects", {
      projectId: this.projectId,
      objectName: this.addName.trim(),
      description: this.addDesc,
      posX: px,
      posY: py,
      colorHex: "#7c3aed"
    }).subscribe({
      next: (r) => {
        this.addSaving = false;
        this.showAdd.set(false);
        if (r.success)
          this.load();
      },
      error: () => {
        this.addSaving = false;
      }
    });
  }
  deleteObj(obj) {
    this.http.delete(`/api/cortex/objects/${obj.ObjectID}`).subscribe({
      next: () => {
        this.objects.update((v) => v.filter((o) => o.ObjectID !== obj.ObjectID));
        this.connections.update((v) => v.filter((c) => c.SourceID !== obj.ObjectID && c.TargetID !== obj.ObjectID));
      }
    });
  }
  // ── Fields ────────────────────────────────────────────────
  startField(obj) {
    this.addingField[obj.ObjectID] = true;
    this.newFName[obj.ObjectID] = "";
    this.newFType[obj.ObjectID] = "text";
    this.newFFormat[obj.ObjectID] = "";
    this.newFKey[obj.ObjectID] = false;
    this.newFReq[obj.ObjectID] = false;
  }
  saveField(obj) {
    const name = (this.newFName[obj.ObjectID] || "").trim();
    if (!name)
      return;
    this.http.post("/api/cortex/fields", {
      objectId: obj.ObjectID,
      fieldName: name,
      dataType: this.newFType[obj.ObjectID] || "text",
      format: this.newFFormat[obj.ObjectID]?.trim() || null,
      isRequired: this.newFReq[obj.ObjectID] ? 1 : 0,
      isKey: this.newFKey[obj.ObjectID] ? 1 : 0,
      sortOrder: obj.fields.length
    }).subscribe({
      next: (r) => {
        if (r.success) {
          obj.fields = [...obj.fields, {
            FieldID: r.data.fieldId,
            ObjectID: obj.ObjectID,
            FieldName: name,
            DataType: this.newFType[obj.ObjectID] || "text",
            Format: this.newFFormat[obj.ObjectID]?.trim() || "",
            IsRequired: !!this.newFReq[obj.ObjectID],
            IsKey: !!this.newFKey[obj.ObjectID],
            SortOrder: obj.fields.length
          }];
          this.objects.update((v) => [...v]);
        }
        this.addingField[obj.ObjectID] = false;
      }
    });
  }
  cancelField(id) {
    this.addingField[id] = false;
  }
  deleteField(obj, f) {
    this.http.delete(`/api/cortex/fields/${f.FieldID}`).subscribe({
      next: () => {
        obj.fields = obj.fields.filter((x) => x.FieldID !== f.FieldID);
        this.reindexFields(obj);
        this.objects.update((v) => [...v]);
      }
    });
  }
  moveField(obj, f, dir) {
    const idx = obj.fields.indexOf(f);
    const swapIdx = dir === "up" ? idx - 1 : idx + 1;
    if (swapIdx < 0 || swapIdx >= obj.fields.length)
      return;
    [obj.fields[idx], obj.fields[swapIdx]] = [obj.fields[swapIdx], obj.fields[idx]];
    obj.fields[idx].SortOrder = idx;
    obj.fields[swapIdx].SortOrder = swapIdx;
    this.objects.update((v) => [...v]);
    this.http.put(`/api/cortex/fields/${f.FieldID}/order`, { objectId: obj.ObjectID, direction: dir }).subscribe();
  }
  reindexFields(obj) {
    obj.fields.forEach((f, i) => f.SortOrder = i);
  }
  // ── Utils ─────────────────────────────────────────────────
  dtIcon(dt) {
    return DATA_TYPES.find((t) => t.id === dt)?.icon ?? "?";
  }
  dtLabel(dt) {
    return DATA_TYPES.find((t) => t.id === dt)?.label ?? dt;
  }
  dtHasFormat(dt) {
    return !!DATA_TYPES.find((t) => t.id === dt)?.formatPlaceholder;
  }
  dtFormatHint(dt) {
    return DATA_TYPES.find((t) => t.id === dt)?.formatPlaceholder ?? "";
  }
  toggleExpand(obj, e) {
    e.stopPropagation();
    obj.expanded = !obj.expanded;
    this.objects.update((v) => [...v]);
  }
  get transform() {
    return `translate(${this.panX}px,${this.panY}px) scale(${this.zoom})`;
  }
  back() {
    this.router.navigate(["/app/projects", this.projectId]);
  }
  static \u0275fac = function CortexComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CortexComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CortexComponent, selectors: [["app-cortex"]], hostBindings: function CortexComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("mousemove", function CortexComponent_mousemove_HostBindingHandler($event) {
        return ctx.onMove($event);
      }, \u0275\u0275resolveWindow)("mouseup", function CortexComponent_mouseup_HostBindingHandler() {
        return ctx.onUp();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 49, vars: 11, consts: [[1, "cx-root", 3, "mousedown", "wheel"], [1, "cx-toolbar"], [1, "cx-back", 3, "click"], [1, "cx-brand"], [1, "cx-brand-name"], [1, "cx-brand-sub"], [1, "cx-tools"], [1, "cx-connect-hint"], ["title", "\u05D7\u05D1\u05E8 \u05D1\u05D9\u05DF \u05DE\u05D5\u05D3\u05DC\u05D9\u05DD", 1, "cx-btn", 3, "click"], [1, "cx-btn", "cx-btn-primary", 3, "click"], [1, "cx-canvas-wrap"], ["aria-hidden", "true"], [1, "cx-canvas"], ["width", "5000", "height", "5000", 1, "cx-svg", 2, "position", "absolute", "top", "0", "left", "0", "overflow", "visible", "pointer-events", "none"], ["id", "lg-conn", "x1", "0%", "y1", "0%", "x2", "100%", "y2", "0%"], ["offset", "0%", "stop-color", "#7c3aed", "stop-opacity", "0.9"], ["offset", "40%", "stop-color", "#06b6d4", "stop-opacity", "1"], ["offset", "100%", "stop-color", "#7c3aed", "stop-opacity", "0.9"], ["id", "lg-conn-r", "x1", "100%", "y1", "0%", "x2", "0%", "y2", "0%"], ["id", "glow-f", "x", "-20%", "y", "-20%", "width", "140%", "height", "140%"], ["in", "SourceGraphic", "stdDeviation", "2.5", "result", "blur"], ["in", "blur"], ["in", "SourceGraphic"], [1, "cx-conn-g", 2, "pointer-events", "stroke"], [1, "cortex-node", 3, "cx-src", "cx-tgt", "left", "top", "width"], [1, "cx-loading"], [1, "cx-empty"], [1, "cx-modal-overlay"], [1, "hint-dot"], ["stroke", "#7c3aed", "stroke-width", "6", "fill", "none", "stroke-opacity", "0.15", "filter", "url(#glow-f)"], ["stroke", "url(#lg-conn)", "stroke-width", "1.8", "fill", "none", "stroke-dasharray", "10 5", 1, "cx-conn-path", 2, "pointer-events", "stroke", "cursor", "pointer", 3, "click"], ["text-anchor", "middle", 1, "cx-conn-label"], [1, "cortex-node", 3, "mousedown", "click"], [1, "node-glow-bar"], [1, "node-hdr"], [1, "node-icon-wrap"], [1, "node-icon"], [1, "node-title-wrap"], [1, "node-name"], [1, "node-meta"], [1, "node-ctrls", 3, "mousedown"], [1, "nctl", 3, "click", "title"], ["title", "\u05DE\u05D7\u05E7", 1, "nctl", "nctl-del", 3, "click"], [1, "node-fields"], [1, "node-fields", 3, "mousedown"], [1, "nf-row"], [1, "nf-add-panel"], [1, "nf-add-btn"], [1, "nf-reorder"], ["title", "\u05D4\u05D6\u05D6 \u05DC\u05DE\u05E2\u05DC\u05D4", 1, "nf-arr", 3, "click", "disabled"], ["title", "\u05D4\u05D6\u05D6 \u05DC\u05DE\u05D8\u05D4", 1, "nf-arr", 3, "click", "disabled"], [1, "nf-icon"], [1, "nf-info"], [1, "nf-name"], [1, "nf-fmt"], [1, "nf-tag", "tag-pk"], [1, "nf-tag", "tag-req"], [1, "nf-del", 3, "click"], [1, "nf-panel-row"], [1, "nf-label"], ["placeholder", "\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: CustomerName, OrderDate...", "autofocus", "", 1, "nf-input-lg", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "nf-sel-lg", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "nf-panel-checks"], [1, "nf-check-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "nf-check-txt"], [1, "nf-panel-foot"], [1, "nf-ok-lg", 3, "click"], [1, "nf-x-lg", 3, "click"], [1, "nf-input-lg", 3, "ngModelChange", "ngModel", "placeholder"], [1, "nf-add-btn", 3, "click"], [1, "cx-spinner"], [1, "sp-ring"], [1, "sp-ring", "sp-r2"], [1, "sp-ring", "sp-r3"], [1, "sp-icon"], [1, "cx-loading-text"], [1, "empty-icon"], [1, "empty-title"], [1, "empty-sub"], [1, "cx-btn", "cx-btn-primary", "empty-cta", 3, "click"], [1, "cx-modal-overlay", 3, "click"], [1, "cx-modal", 3, "click"], [1, "cx-modal-hdr"], [1, "cx-modal-body"], [1, "req"], ["placeholder", "\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: \u05DE\u05E9\u05EA\u05DE\u05E9, \u05DE\u05D5\u05E6\u05E8, \u05D4\u05D6\u05DE\u05E0\u05D4...", 1, "cx-field", 3, "ngModelChange", "keyup.enter", "ngModel"], ["rows", "3", "placeholder", "\u05DE\u05D4 \u05DE\u05D9\u05D9\u05E6\u05D2 \u05D4\u05DE\u05D5\u05D3\u05DC \u05D4\u05D6\u05D4?", 1, "cx-field", "cx-ta", 3, "ngModelChange", "ngModel"], [1, "cx-modal-foot"], [1, "cx-btn", "cx-btn-primary", 3, "click", "disabled"], [1, "cx-btn", 3, "click"]], template: function CortexComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("mousedown", function CortexComponent_Template_div_mousedown_0_listener($event) {
        return ctx.onBgDown($event);
      })("wheel", function CortexComponent_Template_div_wheel_0_listener($event) {
        return ctx.onWheel($event);
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function CortexComponent_Template_button_click_2_listener() {
        return ctx.back();
      });
      \u0275\u0275elementStart(3, "mat-icon");
      \u0275\u0275text(4, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "FLOWSPACE");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 3)(8, "span", 4);
      \u0275\u0275text(9, "CORTEX");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 5);
      \u0275\u0275text(11, "\u05DE\u05D7\u05D5\u05DC\u05DC \u05DE\u05D5\u05D3\u05DC\u05D9 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 6);
      \u0275\u0275conditionalCreate(13, CortexComponent_Conditional_13_Template, 3, 1, "div", 7);
      \u0275\u0275elementStart(14, "button", 8);
      \u0275\u0275listener("click", function CortexComponent_Template_button_click_14_listener() {
        return ctx.toggleConnect();
      });
      \u0275\u0275elementStart(15, "mat-icon");
      \u0275\u0275text(16, "cable");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span");
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "button", 9);
      \u0275\u0275listener("click", function CortexComponent_Template_button_click_19_listener() {
        return ctx.openAdd();
      });
      \u0275\u0275elementStart(20, "mat-icon");
      \u0275\u0275text(21, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span");
      \u0275\u0275text(23, "\u05DE\u05D5\u05D3\u05DC \u05D7\u05D3\u05E9");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "div", 10);
      \u0275\u0275element(25, "app-neural-net", 11);
      \u0275\u0275elementStart(26, "div", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(27, "svg", 13)(28, "defs")(29, "linearGradient", 14);
      \u0275\u0275element(30, "stop", 15)(31, "stop", 16)(32, "stop", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "linearGradient", 18);
      \u0275\u0275element(34, "stop", 15)(35, "stop", 16)(36, "stop", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "filter", 19);
      \u0275\u0275element(38, "feGaussianBlur", 20);
      \u0275\u0275elementStart(39, "feMerge");
      \u0275\u0275element(40, "feMergeNode", 21)(41, "feMergeNode", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275repeaterCreate(42, CortexComponent_For_43_Template, 5, 5, ":svg:g", 23, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(44, CortexComponent_For_45_Template, 19, 15, "div", 24, _forTrack1);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(46, CortexComponent_Conditional_46_Template, 9, 0, "div", 25);
      \u0275\u0275conditionalCreate(47, CortexComponent_Conditional_47_Template, 11, 0, "div", 26);
      \u0275\u0275conditionalCreate(48, CortexComponent_Conditional_48_Template, 21, 4, "div", 27);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275conditional(ctx.connectMode() ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("cx-btn-active", ctx.connectMode());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.connectMode() ? "\u05D1\u05D9\u05D8\u05D5\u05DC" : "\u05D7\u05D1\u05E8");
      \u0275\u0275advance(8);
      \u0275\u0275styleProp("transform", ctx.transform);
      \u0275\u0275classProp("cx-connect", ctx.connectMode());
      \u0275\u0275advance(16);
      \u0275\u0275repeater(ctx.connections());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.objects());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 46 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() && ctx.objects().length === 0 ? 47 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showAdd() ? 48 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, MatIconModule, MatIcon, NeuralNetComponent], styles: ['\n.cx-root[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  background:\n    linear-gradient(\n      160deg,\n      #0a0f1e 0%,\n      #0f1c35 50%,\n      #0d1628 100%);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  direction: rtl;\n  -webkit-user-select: none;\n  user-select: none;\n  font-family:\n    "Noto Sans Hebrew",\n    "Segoe UI",\n    sans-serif;\n}\n.cx-toolbar[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 200;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 24px;\n  background: rgba(10, 15, 30, 0.92);\n  border-bottom: 1px solid rgba(0, 229, 255, 0.15);\n  box-shadow: 0 1px 0 rgba(0, 229, 255, 0.06), 0 4px 32px rgba(0, 0, 0, 0.5);\n  flex-shrink: 0;\n  direction: ltr;\n}\n.cx-back[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: rgba(0, 229, 255, 0.55);\n  padding: 6px 12px 6px 8px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  transition: color 0.15s, background 0.15s;\n  flex-shrink: 0;\n}\n.cx-back[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.cx-back[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-family: "Share Tech Mono", monospace;\n  letter-spacing: 0.08em;\n}\n.cx-back[_ngcontent-%COMP%]:hover {\n  color: #00e5ff;\n  background: rgba(0, 229, 255, 0.1);\n}\n.cx-brand[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1px;\n  pointer-events: none;\n}\n.cx-brand[_ngcontent-%COMP%]   .cx-brand-name[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #00e5ff;\n  letter-spacing: 0.2em;\n  text-shadow: 0 0 20px rgba(0, 229, 255, 0.4);\n}\n.cx-brand[_ngcontent-%COMP%]   .cx-brand-sub[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: rgba(255, 255, 255, 0.3);\n}\n.cx-tools[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  margin-left: auto;\n}\n.cx-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.6);\n  border-radius: 8px;\n  padding: 7px 14px;\n  font-size: 0.82rem;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: all 0.15s;\n}\n.cx-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.cx-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.cx-btn.cx-btn-active[_ngcontent-%COMP%] {\n  background: rgba(6, 182, 212, 0.15);\n  border-color: #06b6d4;\n  color: #67e8f9;\n}\n.cx-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cx-btn-primary[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.35) !important;\n  border-color: rgba(124, 58, 237, 0.7) !important;\n  color: #c4b5fd !important;\n}\n.cx-btn-primary[_ngcontent-%COMP%]:hover {\n  background: rgba(124, 58, 237, 0.55) !important;\n  color: #fff !important;\n}\n.cx-connect-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.78rem;\n  color: #67e8f9;\n  background: rgba(6, 182, 212, 0.08);\n  border: 1px solid rgba(6, 182, 212, 0.25);\n  border-radius: 20px;\n  padding: 4px 14px;\n  animation: _ngcontent-%COMP%_hint-pulse 1.4s ease-in-out infinite;\n}\n.hint-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #06b6d4;\n  animation: _ngcontent-%COMP%_hint-pulse 1s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_hint-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n.cx-canvas-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  cursor: grab;\n}\n.cx-canvas-wrap[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.cx-canvas[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  transform-origin: 0 0;\n  width: 5000px;\n  height: 5000px;\n}\n.cx-canvas.cx-connect[_ngcontent-%COMP%] {\n  cursor: crosshair;\n}\n.cx-conn-path[_ngcontent-%COMP%] {\n  stroke-dasharray: 10 5;\n  animation: _ngcontent-%COMP%_flow 2.5s linear infinite;\n  transition: stroke-width 0.15s;\n}\n.cx-conn-path[_ngcontent-%COMP%]:hover {\n  stroke-width: 3 !important;\n  cursor: pointer;\n}\n@keyframes _ngcontent-%COMP%_flow {\n  to {\n    stroke-dashoffset: -60;\n  }\n}\n.cx-conn-label[_ngcontent-%COMP%] {\n  fill: rgba(0, 229, 255, 0.8);\n  font-size: 11px;\n  font-family: "Share Tech Mono", monospace;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  paint-order: stroke;\n  stroke: #0a0f1e;\n  stroke-width: 3;\n}\n.cortex-node[_ngcontent-%COMP%] {\n  position: absolute;\n  background: rgba(8, 14, 32, 0.95);\n  border: 1px solid rgba(124, 58, 237, 0.5);\n  border-radius: 14px;\n  box-shadow:\n    0 0 0 1px rgba(124, 58, 237, 0.12),\n    0 8px 40px rgba(0, 0, 0, 0.7),\n    0 0 30px rgba(124, 58, 237, 0.1);\n  cursor: grab;\n  overflow: hidden;\n  transition: border-color 0.2s, box-shadow 0.25s;\n  animation: _ngcontent-%COMP%_node-in 0.3s ease-out forwards;\n}\n.cortex-node[_ngcontent-%COMP%]:hover {\n  border-color: rgba(124, 58, 237, 0.65);\n  box-shadow:\n    0 0 0 1px rgba(124, 58, 237, 0.2),\n    0 12px 50px rgba(0, 0, 0, 0.7),\n    0 0 50px rgba(124, 58, 237, 0.18);\n}\n.cortex-node.cx-src[_ngcontent-%COMP%] {\n  border-color: #06b6d4 !important;\n  box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.35), 0 0 60px rgba(6, 182, 212, 0.25) !important;\n  animation: _ngcontent-%COMP%_src-pulse 1s ease-in-out infinite !important;\n}\n.cortex-node.cx-tgt[_ngcontent-%COMP%]:hover {\n  border-color: #10b981 !important;\n  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.35), 0 0 50px rgba(16, 185, 129, 0.2) !important;\n  cursor: crosshair !important;\n}\n@keyframes _ngcontent-%COMP%_node-in {\n  from {\n    opacity: 0.3;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_src-pulse {\n  0%, 100% {\n    box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.35), 0 0 60px rgba(6, 182, 212, 0.25);\n  }\n  50% {\n    box-shadow: 0 0 0 5px rgba(6, 182, 212, 0.5), 0 0 90px rgba(6, 182, 212, 0.4);\n  }\n}\n.node-glow-bar[_ngcontent-%COMP%] {\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      #7c3aed 30%,\n      #06b6d4 60%,\n      transparent 100%);\n  opacity: 0.7;\n}\n.node-hdr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 10px 9px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(124, 58, 237, 0.18) 0%,\n      rgba(12, 8, 32, 0.5) 100%);\n  border-bottom: 1px solid rgba(124, 58, 237, 0.15);\n  position: relative;\n  cursor: grab;\n}\n.node-icon-wrap[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  background: rgba(124, 58, 237, 0.2);\n  border: 1px solid rgba(124, 58, 237, 0.35);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  animation: _ngcontent-%COMP%_icon-glow 3s ease-in-out infinite;\n}\n.node-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #a78bfa;\n}\n@keyframes _ngcontent-%COMP%_icon-glow {\n  0%, 100% {\n    box-shadow: none;\n  }\n  50% {\n    box-shadow: 0 0 10px rgba(124, 58, 237, 0.5);\n  }\n}\n.node-title-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.node-title-wrap[_ngcontent-%COMP%]   .node-name[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #e2d9f3;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n}\n.node-title-wrap[_ngcontent-%COMP%]   .node-meta[_ngcontent-%COMP%] {\n  font-size: 0.67rem;\n  color: rgba(167, 139, 250, 0.45);\n  font-family: "Share Tech Mono", monospace;\n}\n.node-ctrls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n  flex-shrink: 0;\n}\n.nctl[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(255, 255, 255, 0.25);\n  transition: all 0.13s;\n}\n.nctl[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.nctl[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.75);\n}\n.nctl.nctl-del[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.node-fields[_ngcontent-%COMP%] {\n  padding: 2px 0 6px;\n}\n.nf-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  font-size: 0.77rem;\n  border-bottom: 1px solid rgba(124, 58, 237, 0.07);\n  transition: background 0.12s;\n}\n.nf-row[_ngcontent-%COMP%]:hover {\n  background: rgba(124, 58, 237, 0.07);\n}\n.nf-row[_ngcontent-%COMP%]:hover   .nf-del[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.nf-icon[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  width: 18px;\n  text-align: center;\n  color: #06b6d4;\n  flex-shrink: 0;\n}\n.nf-name[_ngcontent-%COMP%] {\n  flex: 1;\n  color: rgba(226, 217, 243, 0.75);\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.75rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nf-tag[_ngcontent-%COMP%] {\n  font-size: 0.58rem;\n  font-weight: 800;\n  border-radius: 3px;\n  padding: 1px 4px;\n  flex-shrink: 0;\n}\n.nf-tag.tag-pk[_ngcontent-%COMP%] {\n  background: rgba(234, 179, 8, 0.15);\n  color: #fbbf24;\n  border: 1px solid rgba(234, 179, 8, 0.3);\n}\n.nf-tag.tag-req[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.nf-del[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: rgba(239, 68, 68, 0.5);\n  cursor: pointer;\n  font-size: 0.88rem;\n  line-height: 1;\n  padding: 0 2px;\n  opacity: 0;\n  transition: opacity 0.12s;\n  flex-shrink: 0;\n}\n.nf-del[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n}\n.nf-reorder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  flex-shrink: 0;\n}\n.nf-arr[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: rgba(124, 58, 237, 0.35);\n  font-size: 0.55rem;\n  padding: 1px 2px;\n  line-height: 1;\n  transition: color 0.12s;\n}\n.nf-arr[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #a78bfa;\n}\n.nf-arr[_ngcontent-%COMP%]:disabled {\n  opacity: 0.15;\n  cursor: default;\n}\n.nf-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  overflow: hidden;\n}\n.nf-fmt[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: rgba(6, 182, 212, 0.5);\n  font-family: "Share Tech Mono", monospace;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nf-add-panel[_ngcontent-%COMP%] {\n  margin: 4px 8px 8px;\n  padding: 12px 14px;\n  background: rgba(124, 58, 237, 0.07);\n  border: 1px solid rgba(124, 58, 237, 0.25);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n  direction: rtl;\n}\n.nf-panel-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.nf-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: rgba(167, 139, 250, 0.6);\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.nf-input-lg[_ngcontent-%COMP%], \n.nf-sel-lg[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.1);\n  border: 1px solid rgba(124, 58, 237, 0.3);\n  border-radius: 7px;\n  outline: none;\n  direction: rtl;\n  color: #e2d9f3;\n  font-size: 0.8rem;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 7px 10px;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: border-color 0.15s;\n}\n.nf-input-lg[_ngcontent-%COMP%]:focus, \n.nf-sel-lg[_ngcontent-%COMP%]:focus {\n  border-color: rgba(124, 58, 237, 0.7);\n  box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.12);\n}\n.nf-input-lg[_ngcontent-%COMP%]::placeholder, \n.nf-sel-lg[_ngcontent-%COMP%]::placeholder {\n  color: rgba(167, 139, 250, 0.3);\n}\n.nf-sel-lg[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #a78bfa;\n}\n.nf-sel-lg[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #0a0614;\n  color: #e2d9f3;\n}\n.nf-panel-checks[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.nf-check-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  cursor: pointer;\n}\n.nf-check-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  accent-color: #7c3aed;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n}\n.nf-check-txt[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgba(226, 217, 243, 0.6);\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.nf-panel-foot[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  direction: rtl;\n  margin-top: 2px;\n}\n.nf-ok-lg[_ngcontent-%COMP%] {\n  flex: 1;\n  background: rgba(124, 58, 237, 0.4);\n  border: 1px solid rgba(124, 58, 237, 0.6);\n  color: #c4b5fd;\n  border-radius: 7px;\n  cursor: pointer;\n  font-size: 0.8rem;\n  padding: 7px 12px;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: background 0.13s;\n}\n.nf-ok-lg[_ngcontent-%COMP%]:hover {\n  background: rgba(124, 58, 237, 0.65);\n  color: #fff;\n}\n.nf-x-lg[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.4);\n  border-radius: 7px;\n  cursor: pointer;\n  font-size: 0.8rem;\n  padding: 7px 12px;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: background 0.13s;\n}\n.nf-x-lg[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.nf-add-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  width: 100%;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: rgba(124, 58, 237, 0.4);\n  padding: 5px 10px;\n  font-size: 0.74rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: color 0.13s;\n}\n.nf-add-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.nf-add-btn[_ngcontent-%COMP%]:hover {\n  color: rgba(167, 139, 250, 0.8);\n}\n.cx-loading[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 150;\n  background: rgba(10, 15, 30, 0.9);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n}\n.cx-spinner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 72px;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sp-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  border-top-color: #7c3aed;\n  animation: _ngcontent-%COMP%_cx-spin 1.6s linear infinite;\n}\n.sp-ring.sp-r2[_ngcontent-%COMP%] {\n  inset: 12px;\n  border-top-color: #06b6d4;\n  animation-duration: 2.2s;\n  animation-direction: reverse;\n}\n.sp-ring.sp-r3[_ngcontent-%COMP%] {\n  inset: 24px;\n  border-top-color: #a78bfa;\n  animation-duration: 3s;\n}\n@keyframes _ngcontent-%COMP%_cx-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.sp-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n  width: 26px;\n  height: 26px;\n  color: #7c3aed;\n  animation: _ngcontent-%COMP%_sp-glow 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_sp-glow {\n  0%, 100% {\n    color: #7c3aed;\n  }\n  50% {\n    color: #a78bfa;\n    filter: drop-shadow(0 0 8px #a78bfa);\n  }\n}\n.cx-loading-text[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.82rem;\n  color: rgba(167, 139, 250, 0.5);\n  letter-spacing: 0.12em;\n}\n.cx-empty[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  text-align: center;\n  pointer-events: none;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 56px;\n  width: 56px;\n  height: 56px;\n  color: rgba(124, 58, 237, 0.25);\n  animation: _ngcontent-%COMP%_sp-glow 3s ease-in-out infinite;\n}\n.empty-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: rgba(226, 217, 243, 0.3);\n}\n.empty-sub[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  color: rgba(167, 139, 250, 0.25);\n}\n.empty-cta[_ngcontent-%COMP%] {\n  pointer-events: all;\n  margin-top: 12px;\n}\n.cx-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 500;\n  background: rgba(0, 0, 0, 0.65);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cx-modal[_ngcontent-%COMP%] {\n  background: rgba(10, 6, 28, 0.97);\n  border: 1px solid rgba(124, 58, 237, 0.4);\n  border-radius: 16px;\n  width: 420px;\n  overflow: hidden;\n  box-shadow:\n    0 0 0 1px rgba(124, 58, 237, 0.1),\n    0 32px 80px rgba(0, 0, 0, 0.7),\n    0 0 60px rgba(124, 58, 237, 0.12);\n  animation: _ngcontent-%COMP%_modal-in 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n@keyframes _ngcontent-%COMP%_modal-in {\n  from {\n    opacity: 0;\n    transform: scale(0.85);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.cx-modal-hdr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 20px 14px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(124, 58, 237, 0.2) 0%,\n      rgba(12, 8, 32, 0.5) 100%);\n  border-bottom: 1px solid rgba(124, 58, 237, 0.2);\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #e2d9f3;\n}\n.cx-modal-hdr[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #a78bfa;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.cx-modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  direction: rtl;\n}\n.cx-modal-body[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: rgba(167, 139, 250, 0.7);\n}\n.cx-modal-body[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n.cx-field[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.08);\n  border: 1px solid rgba(124, 58, 237, 0.25);\n  border-radius: 8px;\n  padding: 9px 12px;\n  color: #e2d9f3;\n  font-size: 0.86rem;\n  outline: none;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n  width: 100%;\n  box-sizing: border-box;\n  transition: border-color 0.15s;\n}\n.cx-field[_ngcontent-%COMP%]:focus {\n  border-color: rgba(124, 58, 237, 0.7);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.12);\n}\n.cx-field[_ngcontent-%COMP%]::placeholder {\n  color: rgba(167, 139, 250, 0.3);\n}\n.cx-ta[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 72px;\n}\n.cx-modal-foot[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  direction: rtl;\n  padding: 14px 20px 18px;\n  border-top: 1px solid rgba(124, 58, 237, 0.12);\n}\n/*# sourceMappingURL=cortex.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CortexComponent, [{
    type: Component,
    args: [{ selector: "app-cortex", standalone: true, imports: [CommonModule, FormsModule, MatIconModule, NeuralNetComponent], template: `<div class="cx-root" (mousedown)="onBgDown($event)" (wheel)="onWheel($event)">

  <!-- \u2500\u2500 Toolbar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="cx-toolbar">
    <!-- back first \u2192 LEFT in LTR -->
    <button class="cx-back" (click)="back()">
      <mat-icon>arrow_back</mat-icon>
      <span>FLOWSPACE</span>
    </button>

    <!-- brand center (absolute) -->
    <div class="cx-brand">
      <span class="cx-brand-name">CORTEX</span>
      <span class="cx-brand-sub">\u05DE\u05D7\u05D5\u05DC\u05DC \u05DE\u05D5\u05D3\u05DC\u05D9 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD</span>
    </div>

    <!-- tools last \u2192 RIGHT in LTR -->
    <div class="cx-tools">
      @if (connectMode()) {
        <div class="cx-connect-hint">
          @if (connectSource()) {
            <span class="hint-dot"></span>
            <span>{{ connectSource()!.ObjectName }} \u2190 \u05D1\u05D7\u05E8 \u05DE\u05D5\u05D3\u05DC \u05D9\u05E2\u05D3</span>
          } @else {
            <span class="hint-dot"></span>
            <span>\u05D1\u05D7\u05E8 \u05DE\u05D5\u05D3\u05DC \u05DE\u05E7\u05D5\u05E8 \u05DC\u05D7\u05D9\u05D1\u05D5\u05E8</span>
          }
        </div>
      }
      <button class="cx-btn" [class.cx-btn-active]="connectMode()"
              (click)="toggleConnect()" title="\u05D7\u05D1\u05E8 \u05D1\u05D9\u05DF \u05DE\u05D5\u05D3\u05DC\u05D9\u05DD">
        <mat-icon>cable</mat-icon>
        <span>{{ connectMode() ? '\u05D1\u05D9\u05D8\u05D5\u05DC' : '\u05D7\u05D1\u05E8' }}</span>
      </button>
      <button class="cx-btn cx-btn-primary" (click)="openAdd()">
        <mat-icon>add</mat-icon>
        <span>\u05DE\u05D5\u05D3\u05DC \u05D7\u05D3\u05E9</span>
      </button>
    </div>
  </div>

  <!-- \u2500\u2500 Canvas \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="cx-canvas-wrap">

    <!-- Neural net animation (same as login page) -->
    <app-neural-net aria-hidden="true"></app-neural-net>

    <!-- Panned + Zoomed canvas -->
    <div class="cx-canvas" [style.transform]="transform" [class.cx-connect]="connectMode()">

      <!-- \u2500\u2500 SVG Connections \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <svg class="cx-svg" width="5000" height="5000"
           style="position:absolute;top:0;left:0;overflow:visible;pointer-events:none">
        <defs>
          <linearGradient id="lg-conn" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stop-color="#7c3aed" stop-opacity="0.9"/>
            <stop offset="40%"  stop-color="#06b6d4" stop-opacity="1"/>
            <stop offset="100%" stop-color="#7c3aed" stop-opacity="0.9"/>
          </linearGradient>
          <linearGradient id="lg-conn-r" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%"   stop-color="#7c3aed" stop-opacity="0.9"/>
            <stop offset="40%"  stop-color="#06b6d4" stop-opacity="1"/>
            <stop offset="100%" stop-color="#7c3aed" stop-opacity="0.9"/>
          </linearGradient>
          <filter id="glow-f" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        @for (c of connections(); track c.ConnectionID) {
          <g class="cx-conn-g" style="pointer-events:stroke">
            <!-- Glow layer -->
            <path [attr.d]="connPath(c)"
                  stroke="#7c3aed" stroke-width="6" fill="none"
                  stroke-opacity="0.15" filter="url(#glow-f)"/>
            <!-- Main animated dash -->
            <path [attr.d]="connPath(c)"
                  stroke="url(#lg-conn)" stroke-width="1.8" fill="none"
                  stroke-dasharray="10 5" class="cx-conn-path"
                  style="pointer-events:stroke;cursor:pointer"
                  (click)="deleteConn(c)"/>
            <!-- Cardinality badge -->
            <text [attr.x]="connMid(c).x" [attr.y]="connMid(c).y"
                  class="cx-conn-label" text-anchor="middle">{{ c.RelationType }}</text>
          </g>
        }
      </svg>

      <!-- \u2500\u2500 Nodes \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      @for (obj of objects(); track obj.ObjectID) {
        <div class="cortex-node"
             [class.cx-src]="connectSource()?.ObjectID === obj.ObjectID"
             [class.cx-tgt]="connectMode() && !!connectSource() && connectSource()!.ObjectID !== obj.ObjectID"
             [style.left.px]="obj.PosX"
             [style.top.px]="obj.PosY"
             [style.width.px]="nodeW"
             (mousedown)="onNodeDown($event, obj)"
             (click)="clickNode(obj)">

          <!-- Top glow bar -->
          <div class="node-glow-bar"></div>

          <!-- Header -->
          <div class="node-hdr">
            <div class="node-icon-wrap">
              <mat-icon class="node-icon">hub</mat-icon>
            </div>
            <div class="node-title-wrap">
              <span class="node-name">{{ obj.ObjectName }}</span>
              <span class="node-meta">{{ obj.fields.length }} fields</span>
            </div>
            <div class="node-ctrls" (mousedown)="$event.stopPropagation()">
              <button class="nctl" (click)="toggleExpand(obj, $event)"
                      [title]="obj.expanded ? '\u05DB\u05D5\u05D5\u05E5' : '\u05D4\u05E8\u05D7\u05D1'">
                <mat-icon>{{ obj.expanded ? 'unfold_less' : 'unfold_more' }}</mat-icon>
              </button>
              <button class="nctl nctl-del" (click)="$event.stopPropagation(); deleteObj(obj)" title="\u05DE\u05D7\u05E7">
                <mat-icon>close</mat-icon>
              </button>
            </div>
          </div>

          <!-- Fields -->
          @if (obj.expanded) {
            <div class="node-fields" (mousedown)="$event.stopPropagation()">
              @for (f of obj.fields; track f.FieldID; let fi = $index; let last = $last) {
                <div class="nf-row">
                  <div class="nf-reorder">
                    <button class="nf-arr" [disabled]="fi === 0"
                            (click)="$event.stopPropagation(); moveField(obj, f, 'up')" title="\u05D4\u05D6\u05D6 \u05DC\u05DE\u05E2\u05DC\u05D4">\u25B2</button>
                    <button class="nf-arr" [disabled]="last"
                            (click)="$event.stopPropagation(); moveField(obj, f, 'down')" title="\u05D4\u05D6\u05D6 \u05DC\u05DE\u05D8\u05D4">\u25BC</button>
                  </div>
                  <span class="nf-icon">{{ dtIcon(f.DataType) }}</span>
                  <div class="nf-info">
                    <span class="nf-name">{{ f.FieldName }}</span>
                    @if (f.Format) { <span class="nf-fmt">{{ f.Format }}</span> }
                  </div>
                  @if (f.IsKey) { <span class="nf-tag tag-pk">PK</span> }
                  @if (f.IsRequired) { <span class="nf-tag tag-req">!</span> }
                  <button class="nf-del" (click)="$event.stopPropagation(); deleteField(obj, f)">\xD7</button>
                </div>
              }

              <!-- Add field panel (expanded) -->
              @if (addingField[obj.ObjectID]) {
                <div class="nf-add-panel">
                  <div class="nf-panel-row">
                    <label class="nf-label">\u05E9\u05DD \u05E9\u05D3\u05D4</label>
                    <input class="nf-input-lg" [(ngModel)]="newFName[obj.ObjectID]"
                           placeholder="\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: CustomerName, OrderDate..."
                           (keyup.enter)="saveField(obj)" autofocus />
                  </div>
                  <div class="nf-panel-row">
                    <label class="nf-label">\u05E1\u05D5\u05D2 \u05E0\u05EA\u05D5\u05DF</label>
                    <select class="nf-sel-lg" [(ngModel)]="newFType[obj.ObjectID]">
                      @for (dt of dataTypes; track dt.id) {
                        <option [value]="dt.id">{{ dt.icon }} {{ dt.label }}</option>
                      }
                    </select>
                  </div>
                  @if (dtHasFormat(newFType[obj.ObjectID])) {
                    <div class="nf-panel-row">
                      <label class="nf-label">\u05E4\u05D5\u05E8\u05DE\u05D8 \u05EA\u05E6\u05D5\u05D2\u05D4</label>
                      <input class="nf-input-lg" [(ngModel)]="newFFormat[obj.ObjectID]"
                             [placeholder]="dtFormatHint(newFType[obj.ObjectID])" />
                    </div>
                  }
                  <div class="nf-panel-checks">
                    <label class="nf-check-label">
                      <input type="checkbox" [(ngModel)]="newFKey[obj.ObjectID]" />
                      <span class="nf-check-txt">\u{1F511} \u05DE\u05E4\u05EA\u05D7 \u05E8\u05D0\u05E9\u05D9 (PK)</span>
                    </label>
                    <label class="nf-check-label">
                      <input type="checkbox" [(ngModel)]="newFReq[obj.ObjectID]" />
                      <span class="nf-check-txt">! \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4</span>
                    </label>
                  </div>
                  <div class="nf-panel-foot">
                    <button class="nf-ok-lg" (click)="saveField(obj)">\u2713 \u05D4\u05D5\u05E1\u05E3</button>
                    <button class="nf-x-lg"  (click)="cancelField(obj.ObjectID)">\u05D1\u05D9\u05D8\u05D5\u05DC</button>
                  </div>
                </div>
              } @else {
                <button class="nf-add-btn" (click)="startField(obj)">
                  <mat-icon>add</mat-icon> \u05D4\u05D5\u05E1\u05E3 \u05E9\u05D3\u05D4
                </button>
              }
            </div>
          }
        </div>
      }
    </div>
  </div>

  <!-- \u2500\u2500 Loading \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (loading()) {
    <div class="cx-loading">
      <div class="cx-spinner">
        <div class="sp-ring"></div>
        <div class="sp-ring sp-r2"></div>
        <div class="sp-ring sp-r3"></div>
        <mat-icon class="sp-icon">hub</mat-icon>
      </div>
      <span class="cx-loading-text">CORTEX \u05DE\u05D0\u05EA\u05D7\u05DC...</span>
    </div>
  }

  <!-- \u2500\u2500 Empty State \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (!loading() && objects().length === 0) {
    <div class="cx-empty">
      <mat-icon class="empty-icon">hub</mat-icon>
      <div class="empty-title">CORTEX \u05E8\u05D9\u05E7</div>
      <div class="empty-sub">\u05E6\u05D5\u05E8 \u05D0\u05EA \u05D4\u05DE\u05D5\u05D3\u05DC \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05E9\u05DC \u05D4\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8</div>
      <button class="cx-btn cx-btn-primary empty-cta" (click)="openAdd()">
        <mat-icon>add</mat-icon> \u05DE\u05D5\u05D3\u05DC \u05E8\u05D0\u05E9\u05D5\u05DF
      </button>
    </div>
  }

  <!-- \u2500\u2500 Add Object Dialog \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (showAdd()) {
    <div class="cx-modal-overlay" (click)="showAdd.set(false)">
      <div class="cx-modal" (click)="$event.stopPropagation()">
        <div class="cx-modal-hdr">
          <mat-icon>hub</mat-icon>
          <span>\u05DE\u05D5\u05D3\u05DC \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05D7\u05D3\u05E9</span>
        </div>
        <div class="cx-modal-body">
          <label>\u05E9\u05DD \u05D4\u05DE\u05D5\u05D3\u05DC <span class="req">*</span></label>
          <input class="cx-field" [(ngModel)]="addName"
                 placeholder="\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: \u05DE\u05E9\u05EA\u05DE\u05E9, \u05DE\u05D5\u05E6\u05E8, \u05D4\u05D6\u05DE\u05E0\u05D4..."
                 (keyup.enter)="saveObj()" />
          <label>\u05EA\u05D9\u05D0\u05D5\u05E8</label>
          <textarea class="cx-field cx-ta" [(ngModel)]="addDesc" rows="3"
                    placeholder="\u05DE\u05D4 \u05DE\u05D9\u05D9\u05E6\u05D2 \u05D4\u05DE\u05D5\u05D3\u05DC \u05D4\u05D6\u05D4?"></textarea>
        </div>
        <div class="cx-modal-foot">
          <button class="cx-btn cx-btn-primary" (click)="saveObj()" [disabled]="addSaving">
            {{ addSaving ? '...' : '\u2713 \u05E6\u05D5\u05E8 \u05DE\u05D5\u05D3\u05DC' }}
          </button>
          <button class="cx-btn" (click)="showAdd.set(false)">\u05D1\u05D9\u05D8\u05D5\u05DC</button>
        </div>
      </div>
    </div>
  }

</div>
`, styles: ['/* src/app/features/projects/workspace/cortex/cortex.component.scss */\n.cx-root {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  background:\n    linear-gradient(\n      160deg,\n      #0a0f1e 0%,\n      #0f1c35 50%,\n      #0d1628 100%);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  direction: rtl;\n  -webkit-user-select: none;\n  user-select: none;\n  font-family:\n    "Noto Sans Hebrew",\n    "Segoe UI",\n    sans-serif;\n}\n.cx-toolbar {\n  position: relative;\n  z-index: 200;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 24px;\n  background: rgba(10, 15, 30, 0.92);\n  border-bottom: 1px solid rgba(0, 229, 255, 0.15);\n  box-shadow: 0 1px 0 rgba(0, 229, 255, 0.06), 0 4px 32px rgba(0, 0, 0, 0.5);\n  flex-shrink: 0;\n  direction: ltr;\n}\n.cx-back {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: rgba(0, 229, 255, 0.55);\n  padding: 6px 12px 6px 8px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  transition: color 0.15s, background 0.15s;\n  flex-shrink: 0;\n}\n.cx-back mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.cx-back span {\n  font-size: 0.78rem;\n  font-family: "Share Tech Mono", monospace;\n  letter-spacing: 0.08em;\n}\n.cx-back:hover {\n  color: #00e5ff;\n  background: rgba(0, 229, 255, 0.1);\n}\n.cx-brand {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1px;\n  pointer-events: none;\n}\n.cx-brand .cx-brand-name {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #00e5ff;\n  letter-spacing: 0.2em;\n  text-shadow: 0 0 20px rgba(0, 229, 255, 0.4);\n}\n.cx-brand .cx-brand-sub {\n  font-size: 0.7rem;\n  color: rgba(255, 255, 255, 0.3);\n}\n.cx-tools {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  margin-left: auto;\n}\n.cx-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.6);\n  border-radius: 8px;\n  padding: 7px 14px;\n  font-size: 0.82rem;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: all 0.15s;\n}\n.cx-btn mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.cx-btn:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.cx-btn.cx-btn-active {\n  background: rgba(6, 182, 212, 0.15);\n  border-color: #06b6d4;\n  color: #67e8f9;\n}\n.cx-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cx-btn-primary {\n  background: rgba(124, 58, 237, 0.35) !important;\n  border-color: rgba(124, 58, 237, 0.7) !important;\n  color: #c4b5fd !important;\n}\n.cx-btn-primary:hover {\n  background: rgba(124, 58, 237, 0.55) !important;\n  color: #fff !important;\n}\n.cx-connect-hint {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.78rem;\n  color: #67e8f9;\n  background: rgba(6, 182, 212, 0.08);\n  border: 1px solid rgba(6, 182, 212, 0.25);\n  border-radius: 20px;\n  padding: 4px 14px;\n  animation: hint-pulse 1.4s ease-in-out infinite;\n}\n.hint-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #06b6d4;\n  animation: hint-pulse 1s ease-in-out infinite;\n}\n@keyframes hint-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n.cx-canvas-wrap {\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  cursor: grab;\n}\n.cx-canvas-wrap:active {\n  cursor: grabbing;\n}\n.cx-canvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  transform-origin: 0 0;\n  width: 5000px;\n  height: 5000px;\n}\n.cx-canvas.cx-connect {\n  cursor: crosshair;\n}\n.cx-conn-path {\n  stroke-dasharray: 10 5;\n  animation: flow 2.5s linear infinite;\n  transition: stroke-width 0.15s;\n}\n.cx-conn-path:hover {\n  stroke-width: 3 !important;\n  cursor: pointer;\n}\n@keyframes flow {\n  to {\n    stroke-dashoffset: -60;\n  }\n}\n.cx-conn-label {\n  fill: rgba(0, 229, 255, 0.8);\n  font-size: 11px;\n  font-family: "Share Tech Mono", monospace;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  paint-order: stroke;\n  stroke: #0a0f1e;\n  stroke-width: 3;\n}\n.cortex-node {\n  position: absolute;\n  background: rgba(8, 14, 32, 0.95);\n  border: 1px solid rgba(124, 58, 237, 0.5);\n  border-radius: 14px;\n  box-shadow:\n    0 0 0 1px rgba(124, 58, 237, 0.12),\n    0 8px 40px rgba(0, 0, 0, 0.7),\n    0 0 30px rgba(124, 58, 237, 0.1);\n  cursor: grab;\n  overflow: hidden;\n  transition: border-color 0.2s, box-shadow 0.25s;\n  animation: node-in 0.3s ease-out forwards;\n}\n.cortex-node:hover {\n  border-color: rgba(124, 58, 237, 0.65);\n  box-shadow:\n    0 0 0 1px rgba(124, 58, 237, 0.2),\n    0 12px 50px rgba(0, 0, 0, 0.7),\n    0 0 50px rgba(124, 58, 237, 0.18);\n}\n.cortex-node.cx-src {\n  border-color: #06b6d4 !important;\n  box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.35), 0 0 60px rgba(6, 182, 212, 0.25) !important;\n  animation: src-pulse 1s ease-in-out infinite !important;\n}\n.cortex-node.cx-tgt:hover {\n  border-color: #10b981 !important;\n  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.35), 0 0 50px rgba(16, 185, 129, 0.2) !important;\n  cursor: crosshair !important;\n}\n@keyframes node-in {\n  from {\n    opacity: 0.3;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes src-pulse {\n  0%, 100% {\n    box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.35), 0 0 60px rgba(6, 182, 212, 0.25);\n  }\n  50% {\n    box-shadow: 0 0 0 5px rgba(6, 182, 212, 0.5), 0 0 90px rgba(6, 182, 212, 0.4);\n  }\n}\n.node-glow-bar {\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      #7c3aed 30%,\n      #06b6d4 60%,\n      transparent 100%);\n  opacity: 0.7;\n}\n.node-hdr {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 10px 9px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(124, 58, 237, 0.18) 0%,\n      rgba(12, 8, 32, 0.5) 100%);\n  border-bottom: 1px solid rgba(124, 58, 237, 0.15);\n  position: relative;\n  cursor: grab;\n}\n.node-icon-wrap {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  background: rgba(124, 58, 237, 0.2);\n  border: 1px solid rgba(124, 58, 237, 0.35);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  animation: icon-glow 3s ease-in-out infinite;\n}\n.node-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #a78bfa;\n}\n@keyframes icon-glow {\n  0%, 100% {\n    box-shadow: none;\n  }\n  50% {\n    box-shadow: 0 0 10px rgba(124, 58, 237, 0.5);\n  }\n}\n.node-title-wrap {\n  flex: 1;\n  min-width: 0;\n}\n.node-title-wrap .node-name {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #e2d9f3;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n}\n.node-title-wrap .node-meta {\n  font-size: 0.67rem;\n  color: rgba(167, 139, 250, 0.45);\n  font-family: "Share Tech Mono", monospace;\n}\n.node-ctrls {\n  display: flex;\n  gap: 2px;\n  flex-shrink: 0;\n}\n.nctl {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(255, 255, 255, 0.25);\n  transition: all 0.13s;\n}\n.nctl mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.nctl:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.75);\n}\n.nctl.nctl-del:hover {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.node-fields {\n  padding: 2px 0 6px;\n}\n.nf-row {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  font-size: 0.77rem;\n  border-bottom: 1px solid rgba(124, 58, 237, 0.07);\n  transition: background 0.12s;\n}\n.nf-row:hover {\n  background: rgba(124, 58, 237, 0.07);\n}\n.nf-row:hover .nf-del {\n  opacity: 1;\n}\n.nf-icon {\n  font-size: 0.72rem;\n  width: 18px;\n  text-align: center;\n  color: #06b6d4;\n  flex-shrink: 0;\n}\n.nf-name {\n  flex: 1;\n  color: rgba(226, 217, 243, 0.75);\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.75rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nf-tag {\n  font-size: 0.58rem;\n  font-weight: 800;\n  border-radius: 3px;\n  padding: 1px 4px;\n  flex-shrink: 0;\n}\n.nf-tag.tag-pk {\n  background: rgba(234, 179, 8, 0.15);\n  color: #fbbf24;\n  border: 1px solid rgba(234, 179, 8, 0.3);\n}\n.nf-tag.tag-req {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.nf-del {\n  background: none;\n  border: none;\n  color: rgba(239, 68, 68, 0.5);\n  cursor: pointer;\n  font-size: 0.88rem;\n  line-height: 1;\n  padding: 0 2px;\n  opacity: 0;\n  transition: opacity 0.12s;\n  flex-shrink: 0;\n}\n.nf-del:hover {\n  color: #ef4444;\n}\n.nf-reorder {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  flex-shrink: 0;\n}\n.nf-arr {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: rgba(124, 58, 237, 0.35);\n  font-size: 0.55rem;\n  padding: 1px 2px;\n  line-height: 1;\n  transition: color 0.12s;\n}\n.nf-arr:hover:not(:disabled) {\n  color: #a78bfa;\n}\n.nf-arr:disabled {\n  opacity: 0.15;\n  cursor: default;\n}\n.nf-info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  overflow: hidden;\n}\n.nf-fmt {\n  font-size: 0.6rem;\n  color: rgba(6, 182, 212, 0.5);\n  font-family: "Share Tech Mono", monospace;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nf-add-panel {\n  margin: 4px 8px 8px;\n  padding: 12px 14px;\n  background: rgba(124, 58, 237, 0.07);\n  border: 1px solid rgba(124, 58, 237, 0.25);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n  direction: rtl;\n}\n.nf-panel-row {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.nf-label {\n  font-size: 0.7rem;\n  color: rgba(167, 139, 250, 0.6);\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.nf-input-lg,\n.nf-sel-lg {\n  background: rgba(124, 58, 237, 0.1);\n  border: 1px solid rgba(124, 58, 237, 0.3);\n  border-radius: 7px;\n  outline: none;\n  direction: rtl;\n  color: #e2d9f3;\n  font-size: 0.8rem;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 7px 10px;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: border-color 0.15s;\n}\n.nf-input-lg:focus,\n.nf-sel-lg:focus {\n  border-color: rgba(124, 58, 237, 0.7);\n  box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.12);\n}\n.nf-input-lg::placeholder,\n.nf-sel-lg::placeholder {\n  color: rgba(167, 139, 250, 0.3);\n}\n.nf-sel-lg {\n  cursor: pointer;\n  color: #a78bfa;\n}\n.nf-sel-lg option {\n  background: #0a0614;\n  color: #e2d9f3;\n}\n.nf-panel-checks {\n  display: flex;\n  gap: 14px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.nf-check-label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  cursor: pointer;\n}\n.nf-check-label input[type=checkbox] {\n  accent-color: #7c3aed;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n}\n.nf-check-txt {\n  font-size: 0.75rem;\n  color: rgba(226, 217, 243, 0.6);\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.nf-panel-foot {\n  display: flex;\n  gap: 8px;\n  direction: rtl;\n  margin-top: 2px;\n}\n.nf-ok-lg {\n  flex: 1;\n  background: rgba(124, 58, 237, 0.4);\n  border: 1px solid rgba(124, 58, 237, 0.6);\n  color: #c4b5fd;\n  border-radius: 7px;\n  cursor: pointer;\n  font-size: 0.8rem;\n  padding: 7px 12px;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: background 0.13s;\n}\n.nf-ok-lg:hover {\n  background: rgba(124, 58, 237, 0.65);\n  color: #fff;\n}\n.nf-x-lg {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.4);\n  border-radius: 7px;\n  cursor: pointer;\n  font-size: 0.8rem;\n  padding: 7px 12px;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: background 0.13s;\n}\n.nf-x-lg:hover {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.nf-add-btn {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  width: 100%;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: rgba(124, 58, 237, 0.4);\n  padding: 5px 10px;\n  font-size: 0.74rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: color 0.13s;\n}\n.nf-add-btn mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.nf-add-btn:hover {\n  color: rgba(167, 139, 250, 0.8);\n}\n.cx-loading {\n  position: absolute;\n  inset: 0;\n  z-index: 150;\n  background: rgba(10, 15, 30, 0.9);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n}\n.cx-spinner {\n  position: relative;\n  width: 72px;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sp-ring {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  border-top-color: #7c3aed;\n  animation: cx-spin 1.6s linear infinite;\n}\n.sp-ring.sp-r2 {\n  inset: 12px;\n  border-top-color: #06b6d4;\n  animation-duration: 2.2s;\n  animation-direction: reverse;\n}\n.sp-ring.sp-r3 {\n  inset: 24px;\n  border-top-color: #a78bfa;\n  animation-duration: 3s;\n}\n@keyframes cx-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.sp-icon {\n  font-size: 26px;\n  width: 26px;\n  height: 26px;\n  color: #7c3aed;\n  animation: sp-glow 2s ease-in-out infinite;\n}\n@keyframes sp-glow {\n  0%, 100% {\n    color: #7c3aed;\n  }\n  50% {\n    color: #a78bfa;\n    filter: drop-shadow(0 0 8px #a78bfa);\n  }\n}\n.cx-loading-text {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.82rem;\n  color: rgba(167, 139, 250, 0.5);\n  letter-spacing: 0.12em;\n}\n.cx-empty {\n  position: absolute;\n  inset: 0;\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  text-align: center;\n  pointer-events: none;\n}\n.empty-icon {\n  font-size: 56px;\n  width: 56px;\n  height: 56px;\n  color: rgba(124, 58, 237, 0.25);\n  animation: sp-glow 3s ease-in-out infinite;\n}\n.empty-title {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: rgba(226, 217, 243, 0.3);\n}\n.empty-sub {\n  font-size: 0.84rem;\n  color: rgba(167, 139, 250, 0.25);\n}\n.empty-cta {\n  pointer-events: all;\n  margin-top: 12px;\n}\n.cx-modal-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 500;\n  background: rgba(0, 0, 0, 0.65);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cx-modal {\n  background: rgba(10, 6, 28, 0.97);\n  border: 1px solid rgba(124, 58, 237, 0.4);\n  border-radius: 16px;\n  width: 420px;\n  overflow: hidden;\n  box-shadow:\n    0 0 0 1px rgba(124, 58, 237, 0.1),\n    0 32px 80px rgba(0, 0, 0, 0.7),\n    0 0 60px rgba(124, 58, 237, 0.12);\n  animation: modal-in 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n@keyframes modal-in {\n  from {\n    opacity: 0;\n    transform: scale(0.85);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.cx-modal-hdr {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 20px 14px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(124, 58, 237, 0.2) 0%,\n      rgba(12, 8, 32, 0.5) 100%);\n  border-bottom: 1px solid rgba(124, 58, 237, 0.2);\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #e2d9f3;\n}\n.cx-modal-hdr mat-icon {\n  color: #a78bfa;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.cx-modal-body {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  direction: rtl;\n}\n.cx-modal-body label {\n  font-size: 0.8rem;\n  color: rgba(167, 139, 250, 0.7);\n}\n.cx-modal-body .req {\n  color: #f87171;\n}\n.cx-field {\n  background: rgba(124, 58, 237, 0.08);\n  border: 1px solid rgba(124, 58, 237, 0.25);\n  border-radius: 8px;\n  padding: 9px 12px;\n  color: #e2d9f3;\n  font-size: 0.86rem;\n  outline: none;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  direction: rtl;\n  width: 100%;\n  box-sizing: border-box;\n  transition: border-color 0.15s;\n}\n.cx-field:focus {\n  border-color: rgba(124, 58, 237, 0.7);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.12);\n}\n.cx-field::placeholder {\n  color: rgba(167, 139, 250, 0.3);\n}\n.cx-ta {\n  resize: vertical;\n  min-height: 72px;\n}\n.cx-modal-foot {\n  display: flex;\n  gap: 10px;\n  direction: rtl;\n  padding: 14px 20px 18px;\n  border-top: 1px solid rgba(124, 58, 237, 0.12);\n}\n/*# sourceMappingURL=cortex.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: HttpClient }], { onMove: [{
    type: HostListener,
    args: ["window:mousemove", ["$event"]]
  }], onUp: [{
    type: HostListener,
    args: ["window:mouseup"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CortexComponent, { className: "CortexComponent", filePath: "src/app/features/projects/workspace/cortex/cortex.component.ts", lineNumber: 64 });
})();
export {
  CortexComponent
};
//# sourceMappingURL=chunk-YXFYXKFI.js.map
