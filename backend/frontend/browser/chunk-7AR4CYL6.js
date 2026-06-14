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
  NgModel
} from "./chunk-4FOUEPN2.js";
import {
  CommonModule,
  Component,
  HttpClient,
  computed,
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
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VR4UVLCZ.js";

// src/app/features/projects/workspace/workspace.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8];
var _forTrack0 = ($index, $item) => $item.id;
function WorkspaceComponent_Conditional_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 16)(1, "mat-icon");
    \u0275\u0275text(2, "folder");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "button", 24);
    \u0275\u0275listener("click", function WorkspaceComponent_Conditional_8_Conditional_8_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.pathInput = "";
      return \u0275\u0275resetView(ctx_r1.showPathInput.set(true));
    });
    \u0275\u0275text(5, "\u270E");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r1.savedLocalPath));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.savedLocalPath, " ");
  }
}
function WorkspaceComponent_Conditional_8_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.runError());
  }
}
function WorkspaceComponent_Conditional_8_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "mat-icon");
    \u0275\u0275text(2, "folder_open");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u05D0\u05D9\u05E4\u05D4 \u05D4\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05D0\u05E6\u05DC\u05DA?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function WorkspaceComponent_Conditional_8_Conditional_10_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pathInput, $event) || (ctx_r1.pathInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function WorkspaceComponent_Conditional_8_Conditional_10_Template_input_keydown_enter_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveLocalPath());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(6, "button", 26);
    \u0275\u0275listener("click", function WorkspaceComponent_Conditional_8_Conditional_10_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveLocalPath());
    });
    \u0275\u0275text(7, "\u05D4\u05E4\u05E2\u05DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 27);
    \u0275\u0275listener("click", function WorkspaceComponent_Conditional_8_Conditional_10_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showPathInput.set(false));
    });
    \u0275\u0275text(9, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pathInput);
    \u0275\u0275control();
  }
}
function WorkspaceComponent_Conditional_8_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r5.ClientOrgName);
  }
}
function WorkspaceComponent_Conditional_8_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 29)(3, "mat-icon");
    \u0275\u0275text(4, "code");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " GitHub ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("href", p_r5.GithubUrl, \u0275\u0275sanitizeUrl);
  }
}
function WorkspaceComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "h1", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 15);
    \u0275\u0275listener("click", function WorkspaceComponent_Conditional_8_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.runApp());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, WorkspaceComponent_Conditional_8_Conditional_8_Template, 6, 3, "span", 16);
    \u0275\u0275conditionalCreate(9, WorkspaceComponent_Conditional_8_Conditional_9_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, WorkspaceComponent_Conditional_8_Conditional_10_Template, 10, 1, "div", 18);
    \u0275\u0275elementStart(11, "div", 19)(12, "span", 20);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, WorkspaceComponent_Conditional_8_Conditional_14_Template, 4, 1);
    \u0275\u0275elementStart(15, "span", 21);
    \u0275\u0275text(16, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 22);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, WorkspaceComponent_Conditional_8_Conditional_19_Template, 6, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "div", 23);
  }
  if (rf & 2) {
    const p_r5 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r5.ProjectName);
    \u0275\u0275advance();
    \u0275\u0275classProp("ws-run-starting", ctx_r1.starting());
    \u0275\u0275property("disabled", ctx_r1.starting());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.runIcon());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.runLabel(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.savedLocalPath ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.runError() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showPathInput() ? 10 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r5.ProjectCode);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r5.ClientOrgName ? 14 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(p_r5.Status));
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r5.GithubUrl ? 19 : -1);
  }
}
function WorkspaceComponent_For_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 31);
  }
}
function WorkspaceComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 30);
    \u0275\u0275conditionalCreate(1, WorkspaceComponent_For_17_Conditional_1_Template, 1, 0, "div", 31);
  }
  if (rf & 2) {
    const i_r6 = ctx.$implicit;
    \u0275\u0275styleProp("animation-delay", i_r6 * 0.15 + "s");
    \u0275\u0275advance();
    \u0275\u0275conditional(i_r6 < 8 ? 1 : -1);
  }
}
function WorkspaceComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "div", 32);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u05D8\u05D5\u05E2\u05DF \u05E1\u05D1\u05D9\u05D1\u05EA \u05E4\u05D9\u05EA\u05D5\u05D7...");
    \u0275\u0275elementEnd()();
  }
}
function WorkspaceComponent_Conditional_20_For_7_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u05E4\u05E2\u05D9\u05DC ");
    \u0275\u0275elementEnd();
  }
}
function WorkspaceComponent_Conditional_20_For_7_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "\u05D1\u05E4\u05D9\u05EA\u05D5\u05D7");
    \u0275\u0275elementEnd();
  }
}
function WorkspaceComponent_Conditional_20_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275listener("click", function WorkspaceComponent_Conditional_20_For_7_Template_div_click_0_listener() {
      const area_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openArea(area_r8));
    });
    \u0275\u0275element(1, "div", 37);
    \u0275\u0275elementStart(2, "div", 38)(3, "mat-icon", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 40)(6, "div", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 42);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 43);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 44);
    \u0275\u0275conditionalCreate(13, WorkspaceComponent_Conditional_20_For_7_Conditional_13_Template, 4, 0, "span", 45)(14, WorkspaceComponent_Conditional_20_For_7_Conditional_14_Template, 2, 0, "span", 46);
    \u0275\u0275elementStart(15, "mat-icon", 47);
    \u0275\u0275text(16, "arrow_forward");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const area_r8 = ctx.$implicit;
    \u0275\u0275styleProp("--area-color", area_r8.color)("--area-glow", area_r8.glow);
    \u0275\u0275classProp("area-ready", area_r8.ready);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(area_r8.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(area_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(area_r8.nameHe);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(area_r8.desc);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(area_r8.ready ? 13 : 14);
  }
}
function WorkspaceComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "mat-icon");
    \u0275\u0275text(2, "account_tree");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u05D0\u05D6\u05D5\u05E8\u05D9 FLOWSPACE \u2014 \u05D1\u05D7\u05E8 \u05D0\u05D6\u05D5\u05E8 \u05DC\u05E2\u05D1\u05D5\u05D3\u05D4");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 34);
    \u0275\u0275repeaterCreate(6, WorkspaceComponent_Conditional_20_For_7_Template, 17, 11, "div", 35, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.areas);
  }
}
var AREAS = [
  {
    id: "connectors",
    name: "CONNECTORS",
    nameHe: "\u05D7\u05D9\u05D1\u05D5\u05E8\u05D9 \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8",
    desc: "\u05D4\u05D2\u05D3\u05E8\u05EA \u05D7\u05D9\u05D1\u05D5\u05E8\u05D9 DB, API, AI \u05D5\u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D9\u05DD \u05DC\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8",
    icon: "cable",
    color: "#0891b2",
    glow: "rgba(8,145,178,.25)",
    ready: true
  },
  {
    id: "cortex",
    name: "CORTEX",
    nameHe: "\u05DE\u05D5\u05D3\u05DC\u05D9 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD",
    desc: "\u05D4\u05D2\u05D3\u05E8\u05EA Objects, Fields, Validations \u05D5-Locale Rules",
    icon: "hub",
    color: "#7c3aed",
    glow: "rgba(124,58,237,.25)",
    ready: true
  },
  {
    id: "nexus",
    name: "NEXUS",
    nameHe: "\u05DE\u05E7\u05D5\u05E8\u05D5\u05EA \u05DE\u05D9\u05D3\u05E2",
    desc: "ERD \u05D5\u05D9\u05D6\u05D5\u05D0\u05DC\u05D9 \u2014 \u05D8\u05D1\u05DC\u05D0\u05D5\u05EA \u05DE-Connectors \u05DE\u05D7\u05D5\u05D1\u05E8\u05D9\u05DD",
    icon: "account_tree",
    color: "#0e7490",
    glow: "rgba(14,116,144,.25)",
    ready: true
  },
  {
    id: "studio",
    name: "STUDIO",
    nameHe: "\u05DE\u05D7\u05D5\u05DC\u05DC \u05DE\u05E1\u05DB\u05D9\u05DD",
    desc: "\u05D1\u05E0\u05D9\u05D9\u05EA \u05DE\u05E1\u05DB\u05D9\u05DD \u05E2\u05DD AI + \u05E1\u05D5\u05DB\u05DF FRONT + \u05E1\u05D8\u05E0\u05D3\u05E8\u05D8\u05D9\u05DD",
    icon: "design_services",
    color: "#0D47FF",
    glow: "rgba(13,71,255,.25)",
    ready: true
  },
  {
    id: "axon",
    name: "AXON",
    nameHe: "Backend API",
    desc: "Routes, Stored Procedures, Auth \u05D5-Middleware",
    icon: "api",
    color: "#059669",
    glow: "rgba(5,150,105,.25)",
    ready: true
  },
  {
    id: "membrane",
    name: "MEMBRANE",
    nameHe: "\u05E1\u05D1\u05D9\u05D1\u05EA \u05DC\u05E7\u05D5\u05D7",
    desc: "\u05DE\u05E1\u05DA \u05DC\u05D5\u05D2\u05D9\u05DF, \u05DE\u05D9\u05EA\u05D5\u05D2, \u05EA\u05DE\u05D4 \u05D5\u05E1\u05D1\u05D9\u05D1\u05EA \u05DC\u05E7\u05D5\u05D7",
    icon: "open_in_browser",
    color: "#d97706",
    glow: "rgba(217,119,6,.25)",
    ready: false
  },
  {
    id: "agents",
    name: "AI TEAM",
    nameHe: "\u05E6\u05D5\u05D5\u05EA AI",
    desc: "\u05D4\u05D2\u05D3\u05E8\u05EA \u05E1\u05D5\u05DB\u05E0\u05D9\u05DD, \u05EA\u05E4\u05E7\u05D9\u05D3\u05D9\u05DD \u05D5\u05EA\u05E6\u05D5\u05E8\u05EA \u05D4\u05E6\u05D5\u05D5\u05EA \u05DC\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8",
    icon: "smart_toy",
    color: "#e11d48",
    glow: "rgba(225,29,72,.25)",
    ready: false
  }
];
var WorkspaceComponent = class _WorkspaceComponent {
  route;
  router;
  http;
  project = signal(
    null,
    ...ngDevMode ? [{ debugName: "project" }] : (
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
  starting = signal(
    false,
    ...ngDevMode ? [{ debugName: "starting" }] : (
      /* istanbul ignore next */
      []
    )
  );
  startMsg = signal(
    "",
    ...ngDevMode ? [{ debugName: "startMsg" }] : (
      /* istanbul ignore next */
      []
    )
  );
  runError = signal(
    "",
    ...ngDevMode ? [{ debugName: "runError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  showPathInput = signal(
    false,
    ...ngDevMode ? [{ debugName: "showPathInput" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pathInput = "";
  areas = AREAS;
  projectId = 0;
  constructor(route, router, http) {
    this.route = route;
    this.router = router;
    this.http = http;
  }
  ngOnInit() {
    this.projectId = Number(this.route.snapshot.paramMap.get("id"));
    this.http.get(`/api/projects/${this.projectId}`).subscribe({
      next: (r) => {
        this.project.set(r.data);
        this.loading.set(false);
      },
      error: () => this.router.navigate(["/app/projects"])
    });
  }
  // LocalPath stored per-developer in localStorage (not in DB)
  get localStorageKey() {
    return `sf_localpath_${this.projectId}`;
  }
  get savedLocalPath() {
    return localStorage.getItem(this.localStorageKey) || "";
  }
  saveLocalPath() {
    if (this.pathInput.trim()) {
      localStorage.setItem(this.localStorageKey, this.pathInput.trim());
      this.showPathInput.set(false);
      this.launchProject(this.pathInput.trim());
    }
  }
  hasRun = computed(
    () => {
      const p = this.project();
      return !!(p?.GithubUrl || p?.DevUrl);
    },
    ...ngDevMode ? [{ debugName: "hasRun" }] : (
      /* istanbul ignore next */
      []
    )
  );
  runLabel = computed(
    () => {
      if (this.starting())
        return this.startMsg() || "\u05DE\u05E4\u05E2\u05D9\u05DC...";
      return "\u05D4\u05E4\u05E2\u05DC";
    },
    ...ngDevMode ? [{ debugName: "runLabel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  runIcon = computed(
    () => this.starting() ? "hourglass_empty" : "play_circle",
    ...ngDevMode ? [{ debugName: "runIcon" }] : (
      /* istanbul ignore next */
      []
    )
  );
  runApp() {
    if (this.starting())
      return;
    this.runError.set("");
    const localPath = this.savedLocalPath;
    if (localPath) {
      this.launchProject(localPath);
    } else {
      this.pathInput = "";
      this.showPathInput.set(true);
    }
  }
  async launchProject(localPath) {
    this.starting.set(true);
    this.startMsg.set("\u05DE\u05D0\u05EA\u05E8 \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8...");
    this.showPathInput.set(false);
    this.http.post(`/api/projects/${this.projectId}/run`, { localPath }).subscribe({
      next: async (r) => {
        const { url, alreadyRunning } = r.data;
        if (alreadyRunning) {
          this.starting.set(false);
          window.open(url, "_blank");
          return;
        }
        this.startMsg.set("\u05DE\u05E8\u05D9\u05E5 \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8...");
        for (let i = 0; i < 30; i++) {
          await new Promise((res) => setTimeout(res, 2e3));
          try {
            const ping = await this.http.get(`/api/projects/${this.projectId}/ping`).toPromise();
            if (ping?.data?.running)
              break;
          } catch {
          }
        }
        this.starting.set(false);
        this.startMsg.set("");
        window.open(url, "_blank");
      },
      error: (err) => {
        this.starting.set(false);
        this.startMsg.set("");
        this.runError.set(err.error?.message ?? "\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D4\u05E4\u05E2\u05DC\u05EA \u05D4\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8");
      }
    });
  }
  openArea(area) {
    const id = this.route.snapshot.paramMap.get("id");
    if (area.id === "connectors")
      this.router.navigate(["/app/ws-connectors", id]);
    if (area.id === "cortex")
      this.router.navigate(["/app/cortex", id]);
    if (area.id === "nexus")
      this.router.navigate(["/app/nexus", id]);
    if (area.id === "axon")
      this.router.navigate(["/app/axon", id]);
    if (area.id === "studio")
      this.router.navigate(["/app/studio", id]);
  }
  back() {
    this.router.navigate(["/app/projects"]);
  }
  statusLabel(s) {
    const m = { draft: "\u05D8\u05D9\u05D5\u05D8\u05D4", active: "\u05E4\u05E2\u05D9\u05DC", completed: "\u05D4\u05D5\u05E9\u05DC\u05DD", archived: "\u05D1\u05D0\u05E8\u05DB\u05D9\u05D5\u05DF" };
    return m[s] ?? s;
  }
  static \u0275fac = function WorkspaceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkspaceComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkspaceComponent, selectors: [["app-workspace"]], decls: 21, vars: 3, consts: [[1, "ws-root"], [1, "ws-header"], [1, "ws-header-inner"], [1, "back-btn", 3, "click"], [1, "ws-logo-wrap"], ["src", "/assets/flowspace-logo.svg", "alt", "FlowSpace", 1, "ws-logo"], [1, "ws-pulse"], [1, "pulse-dot"], [1, "pulse-label"], [1, "ws-neural-line"], [1, "ws-main"], [1, "ws-loading"], [1, "ws-project-info"], [1, "ws-name-row"], [1, "ws-project-name"], [1, "ws-run-btn", 3, "click", "disabled"], [1, "ws-path-hint", 3, "title"], [1, "ws-run-error"], [1, "ws-path-prompt"], [1, "ws-meta"], [1, "ws-code"], [1, "ws-sep"], [1, "ws-status"], [1, "ws-divider"], ["title", "\u05E9\u05E0\u05D4 \u05E0\u05EA\u05D9\u05D1", 1, "ws-path-clear", 3, "click"], ["type", "text", "placeholder", "C:\\Users\\...\\ProjectFolder", 1, "ws-path-input", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "ws-path-ok", 3, "click"], [1, "ws-path-cancel", 3, "click"], [1, "ws-client"], ["target", "_blank", "rel", "noopener", 1, "ws-github", 3, "href"], [1, "nl-node"], [1, "nl-edge"], [1, "ws-spinner"], [1, "ws-areas-label"], [1, "ws-grid"], [1, "ws-area-card", 3, "area-ready", "--area-color", "--area-glow"], [1, "ws-area-card", 3, "click"], [1, "area-glow-bg"], [1, "area-icon-wrap"], [1, "area-icon"], [1, "area-content"], [1, "area-name"], [1, "area-name-he"], [1, "area-desc"], [1, "area-footer"], [1, "area-status-ready"], [1, "area-status-soon"], [1, "area-arrow"]], template: function WorkspaceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275listener("click", function WorkspaceComponent_Template_button_click_3_listener() {
        return ctx.back();
      });
      \u0275\u0275elementStart(4, "mat-icon");
      \u0275\u0275text(5, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span");
      \u0275\u0275text(7, "\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(8, WorkspaceComponent_Conditional_8_Template, 21, 13);
      \u0275\u0275elementStart(9, "div", 4);
      \u0275\u0275element(10, "img", 5);
      \u0275\u0275elementStart(11, "div", 6);
      \u0275\u0275element(12, "span", 7);
      \u0275\u0275elementStart(13, "span", 8);
      \u0275\u0275text(14, "\u05E1\u05D1\u05D9\u05D1\u05EA \u05E4\u05D9\u05EA\u05D5\u05D7 AI");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 9);
      \u0275\u0275repeaterCreate(16, WorkspaceComponent_For_17_Template, 2, 3, null, null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "main", 10);
      \u0275\u0275conditionalCreate(19, WorkspaceComponent_Conditional_19_Template, 4, 0, "div", 11)(20, WorkspaceComponent_Conditional_20_Template, 8, 0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(8);
      \u0275\u0275conditional((tmp_0_0 = ctx.project()) ? 8 : -1, tmp_0_0);
      \u0275\u0275advance(8);
      \u0275\u0275repeater(\u0275\u0275pureFunction0(2, _c0));
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 19 : 20);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatIconModule, MatIcon], styles: ['\n.ws-root[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background: var(--sf-bg-card);\n  display: flex;\n  flex-direction: column;\n  direction: rtl;\n  border-radius: 12px;\n  border: 1px solid var(--sf-border);\n}\n.ws-header[_ngcontent-%COMP%] {\n  background: var(--sf-bg-card);\n  border-bottom: 1px solid var(--sf-border);\n  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.ws-header-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  padding: 18px 32px 14px;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--sf-text-secondary);\n  font-size: 0.84rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  padding: 6px 10px;\n  border-radius: 7px;\n  transition: background 0.13s, color 0.13s;\n  flex-shrink: 0;\n}\n.back-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  transform: scaleX(-1);\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.ws-logo-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 4px;\n  direction: ltr;\n}\n.ws-logo[_ngcontent-%COMP%] {\n  height: 64px;\n  width: auto;\n  display: block;\n}\n.ws-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 36px;\n  background: var(--sf-border);\n  flex-shrink: 0;\n}\n.ws-project-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ws-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  color: var(--sf-primary);\n  background: var(--sf-primary-light);\n  border-radius: 4px;\n  padding: 2px 8px;\n  margin-bottom: 6px;\n  font-family: "Share Tech Mono", monospace;\n}\n.ws-name-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 6px;\n}\n.ws-project-name[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0;\n  line-height: 1.2;\n}\n.ws-run-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 14px;\n  border-radius: 20px;\n  border: none;\n  cursor: pointer;\n  background: #059669;\n  color: #fff;\n  font-size: 0.8rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: background 0.15s, transform 0.1s;\n}\n.ws-run-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.ws-run-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #047857;\n  transform: scale(1.04);\n}\n.ws-run-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: default;\n}\n.ws-run-btn.ws-run-starting[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n.ws-run-btn.ws-run-starting[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 0.9s linear infinite;\n}\n.ws-run-error[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #ef4444;\n  font-weight: 500;\n}\n.ws-path-hint[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.75rem;\n  color: var(--sf-text-muted);\n  max-width: 220px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ws-path-hint[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n  flex-shrink: 0;\n}\n.ws-path-clear[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0 2px;\n  color: var(--sf-text-muted);\n  font-size: 0.75rem;\n  flex-shrink: 0;\n}\n.ws-path-clear[_ngcontent-%COMP%]:hover {\n  color: var(--sf-primary);\n}\n.ws-path-prompt[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n  padding: 10px 14px;\n  background: var(--sf-bg);\n  border: 1px solid var(--sf-primary);\n  border-radius: 10px;\n  font-size: 0.82rem;\n  color: var(--sf-text);\n}\n.ws-path-prompt[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--sf-primary);\n  flex-shrink: 0;\n}\n.ws-path-prompt[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.ws-path-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1px solid var(--sf-border);\n  border-radius: 6px;\n  padding: 5px 10px;\n  font-size: 0.82rem;\n  direction: ltr;\n  font-family: "Share Tech Mono", monospace;\n  background: var(--sf-bg-card);\n  color: var(--sf-text);\n  outline: none;\n}\n.ws-path-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--sf-primary);\n}\n.ws-path-ok[_ngcontent-%COMP%] {\n  padding: 5px 14px;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n  background: #059669;\n  color: #fff;\n  font-size: 0.8rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.ws-path-ok[_ngcontent-%COMP%]:hover {\n  background: #047857;\n}\n.ws-path-cancel[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--sf-text-muted);\n  font-size: 0.9rem;\n  padding: 4px;\n}\n.ws-path-cancel[_ngcontent-%COMP%]:hover {\n  color: var(--sf-danger);\n}\n.ws-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.82rem;\n  color: var(--sf-text-secondary);\n  flex-wrap: wrap;\n}\n.ws-code[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n  background: var(--sf-bg);\n  border: 1px solid var(--sf-border);\n  border-radius: 4px;\n  padding: 1px 7px;\n  color: var(--sf-text);\n}\n.ws-sep[_ngcontent-%COMP%] {\n  color: var(--sf-text-muted);\n}\n.ws-status[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--sf-primary);\n}\n.ws-github[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.78rem;\n  font-weight: 500;\n  color: var(--sf-text-secondary);\n  text-decoration: none;\n  border: 1px solid var(--sf-border);\n  border-radius: 5px;\n  padding: 2px 8px;\n  transition:\n    color 0.15s,\n    border-color 0.15s,\n    background 0.15s;\n}\n.ws-github[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.ws-github[_ngcontent-%COMP%]:hover {\n  color: var(--sf-primary);\n  border-color: var(--sf-primary);\n  background: var(--sf-primary-light);\n}\n.ws-header-end[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.ws-pulse[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.78rem;\n  color: var(--sf-text-secondary);\n}\n.pulse-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #10b981;\n  box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);\n  animation: _ngcontent-%COMP%_pulse-ring 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse-ring {\n  0% {\n    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.5);\n  }\n  70% {\n    box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);\n  }\n}\n.ws-neural-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 8px 32px;\n  gap: 0;\n  overflow: hidden;\n  height: 24px;\n}\n.nl-node[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--sf-primary);\n  opacity: 0;\n  flex-shrink: 0;\n  animation: _ngcontent-%COMP%_nl-node-in 1.2s ease forwards;\n}\n.nl-edge[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--sf-primary) 0%,\n      var(--sf-border) 100%);\n  opacity: 0.3;\n}\n@keyframes _ngcontent-%COMP%_nl-node-in {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  60% {\n    opacity: 1;\n    transform: scale(1.4);\n  }\n  100% {\n    opacity: 0.7;\n    transform: scale(1);\n  }\n}\n.ws-main[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 32px;\n}\n.ws-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 80px;\n  color: var(--sf-text-muted);\n  font-size: 0.9rem;\n}\n.ws-spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: 3px solid var(--sf-border);\n  border-top-color: var(--sf-primary);\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ws-areas-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--sf-text-muted);\n  margin-bottom: 20px;\n}\n.ws-areas-label[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.ws-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n}\n@media (max-width: 1100px) {\n  .ws-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 700px) {\n  .ws-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.ws-area-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 16px;\n  padding: 24px;\n  cursor: pointer;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  transition:\n    transform 0.2s,\n    box-shadow 0.2s,\n    border-color 0.2s;\n}\n.ws-area-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 32px var(--area-glow), 0 2px 8px rgba(0, 0, 0, 0.08);\n  border-color: var(--area-color);\n}\n.ws-area-card[_ngcontent-%COMP%]:hover   .area-glow-bg[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.ws-area-card[_ngcontent-%COMP%]:hover   .area-icon[_ngcontent-%COMP%] {\n  color: var(--area-color);\n}\n.ws-area-card[_ngcontent-%COMP%]:hover   .area-arrow[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(-4px);\n  color: var(--area-color);\n}\n.area-glow-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 16px;\n  background:\n    radial-gradient(\n      ellipse at top right,\n      var(--area-glow) 0%,\n      transparent 70%);\n  opacity: 0;\n  transition: opacity 0.3s;\n  pointer-events: none;\n}\n.area-icon-wrap[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background: var(--sf-bg);\n  border: 1px solid var(--sf-border);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s, border-color 0.2s;\n  flex-shrink: 0;\n}\n.ws-area-card[_ngcontent-%COMP%]:hover   .area-icon-wrap[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--area-color) 10%, transparent);\n  border-color: color-mix(in srgb, var(--area-color) 30%, transparent);\n}\n.area-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  color: var(--sf-text-muted);\n  transition: color 0.2s;\n}\n.area-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.area-name[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  font-family: "Share Tech Mono", monospace;\n  color: var(--sf-text-muted);\n  margin-bottom: 2px;\n}\n.area-name-he[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin-bottom: 8px;\n}\n.area-desc[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--sf-text-secondary);\n  line-height: 1.55;\n}\n.area-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 4px;\n}\n.area-status-ready[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #10b981;\n}\n.area-status-ready[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.area-status-soon[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: var(--sf-text-muted);\n  background: var(--sf-bg);\n  border: 1px solid var(--sf-border);\n  border-radius: 20px;\n  padding: 2px 10px;\n}\n.area-arrow[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--sf-border);\n  opacity: 0;\n  transition:\n    opacity 0.2s,\n    transform 0.2s,\n    color 0.2s;\n  transform: scaleX(-1);\n}\n/*# sourceMappingURL=workspace.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkspaceComponent, [{
    type: Component,
    args: [{ selector: "app-workspace", standalone: true, imports: [CommonModule, FormsModule, MatIconModule], template: `<div class="ws-root">

  <!-- \u2500\u2500 Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <header class="ws-header">
    <div class="ws-header-inner">
      <button class="back-btn" (click)="back()">
        <mat-icon>arrow_back</mat-icon>
        <span>\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD</span>
      </button>

      @if (project(); as p) {
        <div class="ws-project-info">
          <div class="ws-name-row">
            <h1 class="ws-project-name">{{ p.ProjectName }}</h1>
            <button class="ws-run-btn" [class.ws-run-starting]="starting()"
                    [disabled]="starting()" (click)="runApp()">
              <mat-icon>{{ runIcon() }}</mat-icon>
              {{ runLabel() }}
            </button>
            @if (savedLocalPath) {
              <span class="ws-path-hint" title="{{ savedLocalPath }}">
                <mat-icon>folder</mat-icon>
                {{ savedLocalPath }}
                <button class="ws-path-clear" (click)="pathInput=''; showPathInput.set(true)" title="\u05E9\u05E0\u05D4 \u05E0\u05EA\u05D9\u05D1">\u270E</button>
              </span>
            }
            @if (runError()) {
              <span class="ws-run-error">{{ runError() }}</span>
            }
          </div>

          @if (showPathInput()) {
            <div class="ws-path-prompt">
              <mat-icon>folder_open</mat-icon>
              <span>\u05D0\u05D9\u05E4\u05D4 \u05D4\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05D0\u05E6\u05DC\u05DA?</span>
              <input class="ws-path-input" type="text" [(ngModel)]="pathInput"
                     placeholder="C:\\Users\\...\\ProjectFolder"
                     (keydown.enter)="saveLocalPath()" />
              <button class="ws-path-ok" (click)="saveLocalPath()">\u05D4\u05E4\u05E2\u05DC</button>
              <button class="ws-path-cancel" (click)="showPathInput.set(false)">\u2715</button>
            </div>
          }
          <div class="ws-meta">
            <span class="ws-code">{{ p.ProjectCode }}</span>
            @if (p.ClientOrgName) {
              <span class="ws-sep">\xB7</span>
              <span class="ws-client">{{ p.ClientOrgName }}</span>
            }
            <span class="ws-sep">\xB7</span>
            <span class="ws-status">{{ statusLabel(p.Status) }}</span>
            @if (p.GithubUrl) {
              <span class="ws-sep">\xB7</span>
              <a class="ws-github" [href]="p.GithubUrl" target="_blank" rel="noopener">
                <mat-icon>code</mat-icon> GitHub
              </a>
            }
          </div>
        </div>
        <div class="ws-divider"></div>
      }

      <div class="ws-logo-wrap">
        <img src="/assets/flowspace-logo.svg" alt="FlowSpace" class="ws-logo" />
        <div class="ws-pulse">
          <span class="pulse-dot"></span>
          <span class="pulse-label">\u05E1\u05D1\u05D9\u05D1\u05EA \u05E4\u05D9\u05EA\u05D5\u05D7 AI</span>
        </div>
      </div>
    </div>

    <!-- Neural line decoration -->
    <div class="ws-neural-line">
      @for (i of [1,2,3,4,5,6,7,8]; track i) {
        <div class="nl-node" [style.animation-delay]="(i * 0.15) + 's'"></div>
        @if (i < 8) { <div class="nl-edge"></div> }
      }
    </div>
  </header>

  <!-- \u2500\u2500 Areas Grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <main class="ws-main">
    @if (loading()) {
      <div class="ws-loading">
        <div class="ws-spinner"></div>
        <span>\u05D8\u05D5\u05E2\u05DF \u05E1\u05D1\u05D9\u05D1\u05EA \u05E4\u05D9\u05EA\u05D5\u05D7...</span>
      </div>
    } @else {
      <div class="ws-areas-label">
        <mat-icon>account_tree</mat-icon>
        <span>\u05D0\u05D6\u05D5\u05E8\u05D9 FLOWSPACE \u2014 \u05D1\u05D7\u05E8 \u05D0\u05D6\u05D5\u05E8 \u05DC\u05E2\u05D1\u05D5\u05D3\u05D4</span>
      </div>

      <div class="ws-grid">
        @for (area of areas; track area.id) {
          <div class="ws-area-card" [class.area-ready]="area.ready"
               (click)="openArea(area)"
               [style.--area-color]="area.color"
               [style.--area-glow]="area.glow">
            <div class="area-glow-bg"></div>
            <div class="area-icon-wrap">
              <mat-icon class="area-icon">{{ area.icon }}</mat-icon>
            </div>
            <div class="area-content">
              <div class="area-name">{{ area.name }}</div>
              <div class="area-name-he">{{ area.nameHe }}</div>
              <div class="area-desc">{{ area.desc }}</div>
            </div>
            <div class="area-footer">
              @if (area.ready) {
                <span class="area-status-ready">
                  <mat-icon>check_circle</mat-icon> \u05E4\u05E2\u05D9\u05DC
                </span>
              } @else {
                <span class="area-status-soon">\u05D1\u05E4\u05D9\u05EA\u05D5\u05D7</span>
              }
              <mat-icon class="area-arrow">arrow_forward</mat-icon>
            </div>
          </div>
        }
      </div>
    }
  </main>

</div>
`, styles: ['/* src/app/features/projects/workspace/workspace.component.scss */\n.ws-root {\n  min-height: 100%;\n  background: var(--sf-bg-card);\n  display: flex;\n  flex-direction: column;\n  direction: rtl;\n  border-radius: 12px;\n  border: 1px solid var(--sf-border);\n}\n.ws-header {\n  background: var(--sf-bg-card);\n  border-bottom: 1px solid var(--sf-border);\n  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.ws-header-inner {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  padding: 18px 32px 14px;\n}\n.back-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--sf-text-secondary);\n  font-size: 0.84rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  padding: 6px 10px;\n  border-radius: 7px;\n  transition: background 0.13s, color 0.13s;\n  flex-shrink: 0;\n}\n.back-btn mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  transform: scaleX(-1);\n}\n.back-btn:hover {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.ws-logo-wrap {\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 4px;\n  direction: ltr;\n}\n.ws-logo {\n  height: 64px;\n  width: auto;\n  display: block;\n}\n.ws-divider {\n  width: 1px;\n  height: 36px;\n  background: var(--sf-border);\n  flex-shrink: 0;\n}\n.ws-project-info {\n  flex: 1;\n  min-width: 0;\n}\n.ws-badge {\n  display: inline-block;\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  color: var(--sf-primary);\n  background: var(--sf-primary-light);\n  border-radius: 4px;\n  padding: 2px 8px;\n  margin-bottom: 6px;\n  font-family: "Share Tech Mono", monospace;\n}\n.ws-name-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 6px;\n}\n.ws-project-name {\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin: 0;\n  line-height: 1.2;\n}\n.ws-run-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 14px;\n  border-radius: 20px;\n  border: none;\n  cursor: pointer;\n  background: #059669;\n  color: #fff;\n  font-size: 0.8rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: background 0.15s, transform 0.1s;\n}\n.ws-run-btn mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.ws-run-btn:hover:not(:disabled) {\n  background: #047857;\n  transform: scale(1.04);\n}\n.ws-run-btn:disabled {\n  opacity: 0.7;\n  cursor: default;\n}\n.ws-run-btn.ws-run-starting {\n  background: #d97706;\n}\n.ws-run-btn.ws-run-starting mat-icon {\n  animation: spin 0.9s linear infinite;\n}\n.ws-run-error {\n  font-size: 0.8rem;\n  color: #ef4444;\n  font-weight: 500;\n}\n.ws-path-hint {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.75rem;\n  color: var(--sf-text-muted);\n  max-width: 220px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ws-path-hint mat-icon {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n  flex-shrink: 0;\n}\n.ws-path-clear {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0 2px;\n  color: var(--sf-text-muted);\n  font-size: 0.75rem;\n  flex-shrink: 0;\n}\n.ws-path-clear:hover {\n  color: var(--sf-primary);\n}\n.ws-path-prompt {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n  padding: 10px 14px;\n  background: var(--sf-bg);\n  border: 1px solid var(--sf-primary);\n  border-radius: 10px;\n  font-size: 0.82rem;\n  color: var(--sf-text);\n}\n.ws-path-prompt mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--sf-primary);\n  flex-shrink: 0;\n}\n.ws-path-prompt span {\n  white-space: nowrap;\n}\n.ws-path-input {\n  flex: 1;\n  border: 1px solid var(--sf-border);\n  border-radius: 6px;\n  padding: 5px 10px;\n  font-size: 0.82rem;\n  direction: ltr;\n  font-family: "Share Tech Mono", monospace;\n  background: var(--sf-bg-card);\n  color: var(--sf-text);\n  outline: none;\n}\n.ws-path-input:focus {\n  border-color: var(--sf-primary);\n}\n.ws-path-ok {\n  padding: 5px 14px;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n  background: #059669;\n  color: #fff;\n  font-size: 0.8rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.ws-path-ok:hover {\n  background: #047857;\n}\n.ws-path-cancel {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--sf-text-muted);\n  font-size: 0.9rem;\n  padding: 4px;\n}\n.ws-path-cancel:hover {\n  color: var(--sf-danger);\n}\n.ws-meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.82rem;\n  color: var(--sf-text-secondary);\n  flex-wrap: wrap;\n}\n.ws-code {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.78rem;\n  background: var(--sf-bg);\n  border: 1px solid var(--sf-border);\n  border-radius: 4px;\n  padding: 1px 7px;\n  color: var(--sf-text);\n}\n.ws-sep {\n  color: var(--sf-text-muted);\n}\n.ws-status {\n  font-weight: 600;\n  color: var(--sf-primary);\n}\n.ws-github {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.78rem;\n  font-weight: 500;\n  color: var(--sf-text-secondary);\n  text-decoration: none;\n  border: 1px solid var(--sf-border);\n  border-radius: 5px;\n  padding: 2px 8px;\n  transition:\n    color 0.15s,\n    border-color 0.15s,\n    background 0.15s;\n}\n.ws-github mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.ws-github:hover {\n  color: var(--sf-primary);\n  border-color: var(--sf-primary);\n  background: var(--sf-primary-light);\n}\n.ws-header-end {\n  flex-shrink: 0;\n}\n.ws-pulse {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.78rem;\n  color: var(--sf-text-secondary);\n}\n.pulse-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #10b981;\n  box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);\n  animation: pulse-ring 2s infinite;\n}\n@keyframes pulse-ring {\n  0% {\n    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.5);\n  }\n  70% {\n    box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);\n  }\n}\n.ws-neural-line {\n  display: flex;\n  align-items: center;\n  padding: 8px 32px;\n  gap: 0;\n  overflow: hidden;\n  height: 24px;\n}\n.nl-node {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--sf-primary);\n  opacity: 0;\n  flex-shrink: 0;\n  animation: nl-node-in 1.2s ease forwards;\n}\n.nl-edge {\n  flex: 1;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--sf-primary) 0%,\n      var(--sf-border) 100%);\n  opacity: 0.3;\n}\n@keyframes nl-node-in {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  60% {\n    opacity: 1;\n    transform: scale(1.4);\n  }\n  100% {\n    opacity: 0.7;\n    transform: scale(1);\n  }\n}\n.ws-main {\n  flex: 1;\n  padding: 32px;\n}\n.ws-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 80px;\n  color: var(--sf-text-muted);\n  font-size: 0.9rem;\n}\n.ws-spinner {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: 3px solid var(--sf-border);\n  border-top-color: var(--sf-primary);\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ws-areas-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--sf-text-muted);\n  margin-bottom: 20px;\n}\n.ws-areas-label mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.ws-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n}\n@media (max-width: 1100px) {\n  .ws-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 700px) {\n  .ws-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.ws-area-card {\n  position: relative;\n  background: var(--sf-bg-card);\n  border: 1px solid var(--sf-border);\n  border-radius: 16px;\n  padding: 24px;\n  cursor: pointer;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  transition:\n    transform 0.2s,\n    box-shadow 0.2s,\n    border-color 0.2s;\n}\n.ws-area-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 32px var(--area-glow), 0 2px 8px rgba(0, 0, 0, 0.08);\n  border-color: var(--area-color);\n}\n.ws-area-card:hover .area-glow-bg {\n  opacity: 1;\n}\n.ws-area-card:hover .area-icon {\n  color: var(--area-color);\n}\n.ws-area-card:hover .area-arrow {\n  opacity: 1;\n  transform: translateX(-4px);\n  color: var(--area-color);\n}\n.area-glow-bg {\n  position: absolute;\n  inset: 0;\n  border-radius: 16px;\n  background:\n    radial-gradient(\n      ellipse at top right,\n      var(--area-glow) 0%,\n      transparent 70%);\n  opacity: 0;\n  transition: opacity 0.3s;\n  pointer-events: none;\n}\n.area-icon-wrap {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background: var(--sf-bg);\n  border: 1px solid var(--sf-border);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s, border-color 0.2s;\n  flex-shrink: 0;\n}\n.ws-area-card:hover .area-icon-wrap {\n  background: color-mix(in srgb, var(--area-color) 10%, transparent);\n  border-color: color-mix(in srgb, var(--area-color) 30%, transparent);\n}\n.area-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  color: var(--sf-text-muted);\n  transition: color 0.2s;\n}\n.area-content {\n  flex: 1;\n}\n.area-name {\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  font-family: "Share Tech Mono", monospace;\n  color: var(--sf-text-muted);\n  margin-bottom: 2px;\n}\n.area-name-he {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--sf-text);\n  margin-bottom: 8px;\n}\n.area-desc {\n  font-size: 0.8rem;\n  color: var(--sf-text-secondary);\n  line-height: 1.55;\n}\n.area-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 4px;\n}\n.area-status-ready {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #10b981;\n}\n.area-status-ready mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.area-status-soon {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: var(--sf-text-muted);\n  background: var(--sf-bg);\n  border: 1px solid var(--sf-border);\n  border-radius: 20px;\n  padding: 2px 10px;\n}\n.area-arrow {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--sf-border);\n  opacity: 0;\n  transition:\n    opacity 0.2s,\n    transform 0.2s,\n    color 0.2s;\n  transform: scaleX(-1);\n}\n/*# sourceMappingURL=workspace.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkspaceComponent, { className: "WorkspaceComponent", filePath: "src/app/features/projects/workspace/workspace.component.ts", lineNumber: 74 });
})();
export {
  WorkspaceComponent
};
//# sourceMappingURL=chunk-7AR4CYL6.js.map
