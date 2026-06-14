import {
  AuthService
} from "./chunk-PKF47RSP.js";
import {
  Router,
  RouterOutlet,
  provideRouter
} from "./chunk-ZG4ME4LP.js";
import {
  RbacService
} from "./chunk-RCBY4TKT.js";
import {
  AUTO_STYLE,
  AnimationGroupPlayer,
  AnimationMetadataType,
  NoopAnimationPlayer,
  pdf_exports,
  sequence,
  setData,
  style,
  ɵPRE_STYLE
} from "./chunk-YZNXQPNO.js";
import {
  ANIMATION_MODULE_TYPE,
  BrowserModule,
  CommonModule,
  Component,
  DOCUMENT,
  Directive,
  DomRendererFactory2,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  LOCALE_ID,
  NgModule,
  NgZone,
  PLATFORM_ID,
  RendererFactory2,
  RuntimeError,
  Subject,
  TemplateRef,
  __objRest,
  __spreadValues,
  bootstrapApplication,
  catchError,
  effect,
  inject,
  makeEnvironmentProviders,
  performanceMarkFeature,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  registerLocaleData,
  setClassMetadata,
  signal,
  throwError,
  untracked,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-VR4UVLCZ.js";

// node_modules/@progress/kendo-angular-intl/locales/he/all.mjs
setData({
  name: "he",
  identity: {
    language: "he"
  },
  territory: "IL",
  numbers: {
    symbols: {
      decimal: ".",
      group: ",",
      list: ";",
      percentSign: "%",
      plusSign: "\u200E+",
      minusSign: "\u200E-",
      approximatelySign: "~",
      exponential: "E",
      superscriptingExponent: "\xD7",
      perMille: "\u2030",
      infinity: "\u221E",
      nan: "NaN",
      timeSeparator: ":"
    },
    decimal: {
      patterns: [
        "n"
      ],
      groupSize: [
        3
      ]
    },
    scientific: {
      patterns: [
        "nEn"
      ],
      groupSize: []
    },
    percent: {
      patterns: [
        "n%"
      ],
      groupSize: [
        3
      ]
    },
    currency: {
      patterns: [
        "\u200Fn\xA0\u200F$",
        "\u200F-n\xA0\u200F$"
      ],
      groupSize: [
        3
      ],
      "unitPattern-count-other": "n $"
    },
    accounting: {
      patterns: [
        "\u200Fn\xA0\u200F$",
        "\u200F-n\xA0\u200F$"
      ],
      groupSize: [
        3
      ]
    },
    currencies: {
      ADP: {
        displayName: "\u05E4\u05D6\u05D8\u05D4 \u05D0\u05E0\u05D3\u05D5\u05E8\u05D9\u05EA",
        "displayName-count-other": "\u05E4\u05D6\u05D8\u05D4 \u05D0\u05E0\u05D3\u05D5\u05E8\u05D9\u05EA"
      },
      AED: {
        displayName: "\u05D3\u05D9\u05E8\u05D4\u05DD \u05E9\u05DC \u05D0\u05D9\u05D7\u05D5\u05D3 \u05D4\u05E0\u05E1\u05D9\u05DB\u05D5\u05D9\u05D5\u05EA \u05D4\u05E2\u05E8\u05D1\u05D9\u05D5\u05EA",
        "displayName-count-other": "\u05D3\u05D9\u05E8\u05D4\u05DD \u05E9\u05DC \u05D0\u05D9\u05D7\u05D5\u05D3 \u05D4\u05E0\u05E1\u05D9\u05DB\u05D5\u05D9\u05D5\u05EA \u05D4\u05E2\u05E8\u05D1\u05D9\u05D5\u05EA"
      },
      AFN: {
        displayName: "\u05D0\u05E4\u05D2\u05E0\u05D9 \u05D0\u05E4\u05D2\u05E0\u05D9",
        "displayName-count-other": "\u05D0\u05E4\u05D2\u05E0\u05D9 \u05D0\u05E4\u05D2\u05E0\u05D9",
        "symbol-alt-narrow": "\u060B"
      },
      ALL: {
        displayName: "\u05DC\u05E7 \u05D0\u05DC\u05D1\u05E0\u05D9",
        "displayName-count-other": "\u05DC\u05E7 \u05D0\u05DC\u05D1\u05E0\u05D9"
      },
      AMD: {
        displayName: "\u05D3\u05E8\u05D0\u05DD \u05D0\u05E8\u05DE\u05E0\u05D9",
        "displayName-count-other": "\u05D3\u05E8\u05D0\u05DD \u05D0\u05E8\u05DE\u05E0\u05D9",
        "symbol-alt-narrow": "\u058F"
      },
      ANG: {
        displayName: "\u05D2\u05D9\u05DC\u05D3\u05E8 \u05E9\u05DC \u05D4\u05D0\u05E0\u05D8\u05D9\u05DC\u05D9\u05DD \u05D4\u05D4\u05D5\u05DC\u05E0\u05D3\u05D9\u05D9\u05DD",
        "displayName-count-other": "\u05D2\u05D9\u05DC\u05D3\u05E8 \u05E9\u05DC \u05D4\u05D0\u05E0\u05D8\u05D9\u05DC\u05D9\u05DD \u05D4\u05D4\u05D5\u05DC\u05E0\u05D3\u05D9\u05D9\u05DD"
      },
      AOA: {
        displayName: "\u05E7\u05D5\u05D0\u05E0\u05D6\u05D4 \u05D0\u05E0\u05D2\u05D5\u05DC\u05D9",
        "displayName-count-other": "\u05E7\u05D5\u05D0\u05E0\u05D6\u05D4 \u05D0\u05E0\u05D2\u05D5\u05DC\u05D9",
        "symbol-alt-narrow": "Kz"
      },
      AON: {
        displayName: "\u05E7\u05D5\u05D0\u05E0\u05D6\u05D4 \u05D7\u05D3\u05E9 \u05D0\u05E0\u05D2\u05D5\u05DC\u05D9 (1990\u20132000)",
        "displayName-count-other": "\u05E7\u05D5\u05D0\u05E0\u05D6\u05D4 \u05D7\u05D3\u05E9 \u05D0\u05E0\u05D2\u05D5\u05DC\u05D9 (1990\u20132000)"
      },
      AOR: {
        displayName: "\u05E7\u05D5\u05D0\u05E0\u05D6\u05D4 \u05E8\u05D2\u05F3\u05D5\u05E1\u05D8\u05D3\u05D5 \u05D0\u05E0\u05D2\u05D5\u05DC\u05D9 (1995\u20131999)",
        "displayName-count-other": "\u05E7\u05D5\u05D0\u05E0\u05D6\u05D4 \u05E8\u05D2\u05F3\u05D5\u05E1\u05D8\u05D3\u05D5 \u05D0\u05E0\u05D2\u05D5\u05DC\u05D9 (1995\u20131999)"
      },
      ARP: {
        displayName: "\u05E4\u05D6\u05D5 \u05D0\u05E8\u05D2\u05E0\u05D8\u05D9\u05E0\u05D0\u05D9 (1983\u20131985)",
        "displayName-count-other": "\u05E4\u05D6\u05D5 \u05D0\u05E8\u05D2\u05E0\u05D8\u05D9\u05E0\u05D0\u05D9 (1983\u20131985)"
      },
      ARS: {
        displayName: "\u05E4\u05E1\u05D5 \u05D0\u05E8\u05D2\u05E0\u05D8\u05D9\u05E0\u05D0\u05D9",
        "displayName-count-other": "\u05E4\u05E1\u05D5 \u05D0\u05E8\u05D2\u05E0\u05D8\u05D9\u05E0\u05D0\u05D9",
        "symbol-alt-narrow": "$"
      },
      ATS: {
        displayName: "\u05E9\u05D9\u05DC\u05D9\u05E0\u05D2 \u05D0\u05D5\u05E1\u05D8\u05E8\u05D9",
        "displayName-count-other": "\u05E9\u05D9\u05DC\u05D9\u05E0\u05D2 \u05D0\u05D5\u05E1\u05D8\u05E8\u05D9"
      },
      AUD: {
        displayName: "\u05D3\u05D5\u05DC\u05E8 \u05D0\u05D5\u05E1\u05D8\u05E8\u05DC\u05D9",
        "displayName-count-other": "\u05D3\u05D5\u05DC\u05E8 \u05D0\u05D5\u05E1\u05D8\u05E8\u05DC\u05D9",
        symbol: "A$",
        "symbol-alt-narrow": "$"
      },
      AWG: {
        displayName: "\u05E4\u05DC\u05D5\u05E8\u05D9\u05DF \u05E9\u05DC \u05D0\u05E8\u05D5\u05D1\u05D4",
        "displayName-count-other": "\u05E4\u05DC\u05D5\u05E8\u05D9\u05DF \u05E9\u05DC \u05D0\u05E8\u05D5\u05D1\u05D4"
      },
      AZM: {
        displayName: "\u05DE\u05E0\u05D0\u05D8 \u05D0\u05D6\u05E8\u05D1\u05D9\u05D2\u05F3\u05D0\u05E0\u05D9 (1993\u20132006)",
        "displayName-count-other": "\u05DE\u05E0\u05D0\u05D8 \u05D0\u05D6\u05E8\u05D1\u05D9\u05D2\u05F3\u05D0\u05E0\u05D9 (1993\u20132006)"
      },
      AZN: {
        displayName: "\u05DE\u05D0\u05E0\u05D0\u05D8 \u05D0\u05D6\u05E8\u05D1\u05D9\u05D9\u05D2\u05F3\u05E0\u05D9",
        "displayName-count-other": "\u05DE\u05D0\u05E0\u05D0\u05D8 \u05D0\u05D6\u05E8\u05D1\u05D9\u05D9\u05D2\u05F3\u05E0\u05D9",
        "symbol-alt-narrow": "\u20BC"
      },
      BAD: {
        displayName: "\u05D3\u05D9\u05E0\u05E8 \u05E9\u05DC \u05D1\u05D5\u05E1\u05E0\u05D9\u05D4\u05BE\u05D4\u05E8\u05E6\u05D2\u05D5\u05D1\u05D9\u05E0\u05D4",
        "displayName-count-other": "\u05D3\u05D9\u05E0\u05E8 \u05E9\u05DC \u05D1\u05D5\u05E1\u05E0\u05D9\u05D4\u05BE\u05D4\u05E8\u05E6\u05D2\u05D5\u05D1\u05D9\u05E0\u05D4"
      },
      BAM: {
        displayName: "\u05DE\u05D0\u05E8\u05E7 \u05E1\u05D7\u05D9\u05E8 \u05E9\u05DC \u05D1\u05D5\u05E1\u05E0\u05D9\u05D4 \u05D5\u05D4\u05E8\u05E6\u05D2\u05D5\u05D1\u05D9\u05E0\u05D4",
        "displayName-count-other": "\u05DE\u05D0\u05E8\u05E7 \u05E1\u05D7\u05D9\u05E8 \u05E9\u05DC \u05D1\u05D5\u05E1\u05E0\u05D9\u05D4 \u05D5\u05D4\u05E8\u05E6\u05D2\u05D5\u05D1\u05D9\u05E0\u05D4",
        "symbol-alt-narrow": "KM"
      },
      BBD: {
        displayName: "\u05D3\u05D5\u05DC\u05E8 \u05D1\u05E8\u05D1\u05D3\u05D9\u05D0\u05E0\u05D9",
        "displayName-count-other": "\u05D3\u05D5\u05DC\u05E8 \u05D1\u05E8\u05D1\u05D3\u05D9\u05D0\u05E0\u05D9",
        "symbol-alt-narrow": "$"
      },
      BDT: {
        displayName: "\u05D8\u05D0\u05E7\u05D4 \u05D1\u05E0\u05D2\u05DC\u05D3\u05E9\u05D9",
        "displayName-count-other": "\u05D8\u05D0\u05E7\u05D4 \u05D1\u05E0\u05D2\u05DC\u05D3\u05E9\u05D9",
        "symbol-alt-narrow": "\u09F3"
      },
      BEC: {
        displayName: "\u05E4\u05E8\u05E0\u05E7 \u05D1\u05DC\u05D2\u05D9 (\u05D1\u05E8 \u05D4\u05DE\u05E8\u05D4)",
        "displayName-count-other": "\u05E4\u05E8\u05E0\u05E7 \u05D1\u05DC\u05D2\u05D9 (\u05D1\u05E8 \u05D4\u05DE\u05E8\u05D4)"
      },
      BEF: {
        displayName: "\u05E4\u05E8\u05E0\u05E7 \u05D1\u05DC\u05D2\u05D9",
        "displayName-count-other": "\u05E4\u05E8\u05E0\u05E7 \u05D1\u05DC\u05D2\u05D9"
      },
      BGL: {
        displayName: "\u05DC\u05D1 \u05D1\u05D5\u05DC\u05D2\u05E8\u05D9 \u05D9\u05E9\u05DF",
        "displayName-count-other": "\u05DC\u05D1 \u05D1\u05D5\u05DC\u05D2\u05E8\u05D9 \u05D9\u05E9\u05DF"
      },
      BGN: {
        displayName: "\u05DC\u05D1 \u05D1\u05D5\u05DC\u05D2\u05E8\u05D9",
        "displayName-count-other": "\u05DC\u05D1 \u05D1\u05D5\u05DC\u05D2\u05E8\u05D9"
      },
      BHD: {
        displayName: "\u05D3\u05D9\u05E0\u05E8 \u05D1\u05D7\u05E8\u05D9\u05D9\u05E0\u05D9",
        "displayName-count-other": "\u05D3\u05D9\u05E0\u05E8 \u05D1\u05D7\u05E8\u05D9\u05D9\u05E0\u05D9"
      },
      BIF: {
        displayName: "\u05E4\u05E8\u05E0\u05E7 \u05D1\u05D5\u05E8\u05D5\u05E0\u05D3\u05D9",
        "displayName-count-other": "\u05E4\u05E8\u05E0\u05E7 \u05D1\u05D5\u05E8\u05D5\u05E0\u05D3\u05D9"
      },
      BMD: {
        displayName: "\u05D3\u05D5\u05DC\u05E8 \u05D1\u05E8\u05DE\u05D5\u05D3\u05D4",
        "displayName-count-other": "\u05D3\u05D5\u05DC\u05E8 \u05D1\u05E8\u05DE\u05D5\u05D3\u05D4",
        "symbol-alt-narrow": "$"
      },
      BND: {
        displayName: "\u05D3\u05D5\u05DC\u05E8 \u05D1\u05E8\u05D5\u05E0\u05D9\u05D9",
        "displayName-count-other": "\u05D3\u05D5\u05DC\u05E8 \u05D1\u05E8\u05D5\u05E0\u05D9\u05D9",
        "symbol-alt-narrow": "$"
      },
      BOB: {
        displayName: "\u05D1\u05D5\u05DC\u05D9\u05D1\u05D9\u05D0\u05E0\u05D5",
        "displayName-count-other": "\u05D1\u05D5\u05DC\u05D9\u05D1\u05D9\u05D0\u05E0\u05D5",
        "symbol-alt-narrow": "Bs"
      },
      BOP: {
        displayName: "\u05E4\u05D6\u05D5 \u05D1\u05D5\u05DC\u05D9\u05D1\u05D9",
        "displayName-count-other": "\u05E4\u05D6\u05D5 \u05D1\u05D5\u05DC\u05D9\u05D1\u05D9"
      },
      BRB: {
        displayName: "\u05E7\u05E8\u05D5\u05D6\u05D9\u05D0\u05E8\u05D5 \u05D7\u05D3\u05E9 \u05D1\u05E8\u05D6\u05D9\u05DC\u05D0\u05D9 (1967\u20131986)",
        "displayName-count-other": "\u05E7\u05E8\u05D5\u05D6\u05D9\u05D0\u05E8\u05D5 \u05D7\u05D3\u05E9 \u05D1\u05E8\u05D6\u05D9\u05DC\u05D0\u05D9 (1967\u20131986)"
      },
      BRC: {
        displayName: "\u05E7\u05E8\u05D5\u05D6\u05D3\u05D5 \u05D1\u05E8\u05D6\u05D9\u05DC\u05D0\u05D9",
        "displayName-count-other": "\u05E7\u05E8\u05D5\u05D6\u05D3\u05D5 \u05D1\u05E8\u05D6\u05D9\u05DC\u05D0\u05D9"
      },
      BRL: {
        displayName: "\u05E8\u05D9\u05D0\u05DC \u05D1\u05E8\u05D6\u05D9\u05DC\u05D0\u05D9",
        "displayName-count-other": "\u05E8\u05D9\u05D0\u05DC \u05D1\u05E8\u05D6\u05D9\u05DC\u05D0\u05D9",
        symbol: "R$",
        "symbol-alt-narrow": "R$"
      },
      BSD: {
        displayName: "\u05D3\u05D5\u05DC\u05E8 \u05D1\u05D4\u05D0\u05DE\u05D9",
        "displayName-count-other": "\u05D3\u05D5\u05DC\u05E8 \u05D1\u05D4\u05D0\u05DE\u05D9",
        "symbol-alt-narrow": "$"
      },
      BTN: {
        displayName: "\u05E0\u05D2\u05D5\u05DC\u05D8\u05E8\u05D5\u05DD \u05D1\u05D4\u05D5\u05D8\u05E0\u05D9",
        "displayName-count-other": "\u05E0\u05D2\u05D5\u05DC\u05D8\u05E8\u05D5\u05DD \u05D1\u05D4\u05D5\u05D8\u05E0\u05D9"
      },
      BWP: {
        displayName: "\u05E4\u05D5\u05DC\u05D4 \u05D1\u05D5\u05D8\u05E1\u05D5\u05D0\u05E0\u05D9",
        "displayName-count-other": "\u05E4\u05D5\u05DC\u05D4 \u05D1\u05D5\u05D8\u05E1\u05D5\u05D0\u05E0\u05D9",
        "symbol-alt-narrow": "P"
      },
      BYN: {
        displayName: "\u05E8\u05D5\u05D1\u05DC \u05D1\u05DC\u05E8\u05D5\u05E1\u05D9",
        "displayName-count-other": "\u05E8\u05D5\u05D1\u05DC \u05D1\u05DC\u05E8\u05D5\u05E1\u05D9",
        "symbol-alt-narrow": "\u0440"
      },
      BYR: {
        displayName: "\u05E8\u05D5\u05D1\u05DC \u05D1\u05DC\u05E8\u05D5\u05E1\u05D9 (2000\u20132016)",
        "displayName-count-other": "\u05E8\u05D5\u05D1\u05DC \u05D1\u05DC\u05E8\u05D5\u05E1\u05D9 (2000\u20132016)"
      },
      BZD: {
        displayName: "\u05D3\u05D5\u05DC\u05E8 \u05D1\u05DC\u05D9\u05D6\u05D9",
        "displayName-count-other": "\u05D3\u05D5\u05DC\u05E8 \u05D1\u05DC\u05D9\u05D6\u05D9",
        "symbol-alt-narrow": "$"
      },
      CAD: {
        displayName: "\u05D3\u05D5\u05DC\u05E8 \u05E7\u05E0\u05D3\u05D9",
        "displayName-count-other": "\u05D3\u05D5\u05DC\u05E8 \u05E7\u05E0\u05D3\u05D9",
        symbol: "CA$",
        "symbol-alt-narrow": "$"
      },
      CDF: {
        displayName: "\u05E4\u05E8\u05E0\u05E7 \u05E7\u05D5\u05E0\u05D2\u05D5\u05DC\u05D6\u05D9",
        "displayName-count-other": "\u05E4\u05E8\u05E0\u05E7 \u05E7\u05D5\u05E0\u05D2\u05D5\u05DC\u05D6\u05D9"
      },
      CHF: {
        displayName: "\u05E4\u05E8\u05E0\u05E7 \u05E9\u05D5\u05D5\u05D9\u05E6\u05E8\u05D9",
        "displayName-count-other": "\u05E4\u05E8\u05E0\u05E7 \u05E9\u05D5\u05D5\u05D9\u05E6\u05E8\u05D9"
      },
      CLP: {
        displayName: "\u05E4\u05E1\u05D5 \u05E6\u05F3\u05D9\u05DC\u05D0\u05E0\u05D9",
        "displayName-count-other": "\u05E4\u05E1\u05D5 \u05E6\u05F3\u05D9\u05DC\u05D0\u05E0\u05D9",
        "symbol-alt-narrow": "$"
      },
      CNH: {
        displayName: "\u05D9\u05D5\u05D0\u05DF \u05E1\u05D9\u05E0\u05D9 (CNH)",
        "displayName-count-other": "\u05D9\u05D5\u05D0\u05DF \u05E1\u05D9\u05E0\u05D9 (CNH)"
      },
      CNY: {
        displayName: "\u05D9\u05D5\u05D0\u05DF \u05E1\u05D9\u05E0\u05D9",
        "displayName-count-other": "\u05D9\u05D5\u05D0\u05DF \u05E1\u05D9\u05E0\u05D9",
        symbol: "\u200ECN\xA5\u200E",
        "symbol-alt-narrow": "\xA5"
      },
      COP: {
        displayName: "\u05E4\u05E1\u05D5 \u05E7\u05D5\u05DC\u05D5\u05DE\u05D1\u05D9\u05D0\u05E0\u05D9",
        "displayName-count-other": "\u05E4\u05E1\u05D5 \u05E7\u05D5\u05DC\u05D5\u05DE\u05D1\u05D9\u05D0\u05E0\u05D9",
        "symbol-alt-narrow": "$"
      },
      CRC: {
        displayName: "\u05E7\u05D5\u05DC\u05D5\u05DF \u05E7\u05D5\u05E1\u05D8\u05D4\u05BE\u05E8\u05D9\u05E7\u05E0\u05D9",
        "displayName-count-other": "\u05E7\u05D5\u05DC\u05D5\u05DF \u05E7\u05D5\u05E1\u05D8\u05D4\u05BE\u05E8\u05D9\u05E7\u05E0\u05D9",
        "symbol-alt-narrow": "\u20A1"
      },
      CSD: {
        displayName: "\u05D3\u05D9\u05E0\u05E8 \u05E1\u05E8\u05D1\u05D9 \u05D9\u05E9\u05DF",
        "displayName-count-other": "\u05D3\u05D9\u05E0\u05E8 \u05E1\u05E8\u05D1\u05D9 \u05D9\u05E9\u05DF"
      },
      CUC: {
        displayName: "\u05E4\u05E1\u05D5 \u05E7\u05D5\u05D1\u05E0\u05D9 \u05DC\u05D4\u05DE\u05E8\u05D4",
        "displayName-count-other": "\u05E4\u05E1\u05D5 \u05E7\u05D5\u05D1\u05E0\u05D9 \u05DC\u05D4\u05DE\u05E8\u05D4",
        "symbol-alt-narrow": "$"
      },
      CUP: {
        displayName: "\u05E4\u05E1\u05D5 \u05E7\u05D5\u05D1\u05E0\u05D9",
        "displayName-count-other": "\u05E4\u05E1\u05D5 \u05E7\u05D5\u05D1\u05E0\u05D9",
        "symbol-alt-narrow": "$"
      },
      CVE: {
        displayName: "\u05D0\u05E1\u05E7\u05D5\u05D3\u05D5 \u05DB\u05E3 \u05D5\u05E8\u05D3\u05D4",
        "displayName-count-other": "\u05D0\u05E1\u05E7\u05D5\u05D3\u05D5 \u05DB\u05E3 \u05D5\u05E8\u05D3\u05D4"
      },
      CYP: {
        displayName: "\u05DC\u05D9\u05E8\u05D4 \u05E7\u05E4\u05E8\u05D9\u05E1\u05D0\u05D9\u05EA",
        "displayName-count-other": "\u05DC\u05D9\u05E8\u05D4 \u05E7\u05E4\u05E8\u05D9\u05E1\u05D0\u05D9\u05EA"
      },
      CZK: {
        displayName: "\u05E7\u05D5\u05E8\u05D5\u05E0\u05D4 \u05E6\u05F3\u05DB\u05D9\u05EA",
        "displayName-count-other": "\u05E7\u05D5\u05E8\u05D5\u05E0\u05D4 \u05E6\u05F3\u05DB\u05D9\u05EA",
        "symbol-alt-narrow": "K\u010D"
      },
      DDM: {
        displayName: "\u05DE\u05E8\u05E7 \u05DE\u05D6\u05E8\u05D7 \u05D2\u05E8\u05DE\u05E0\u05D9",
        "displayName-count-other": "\u05DE\u05E8\u05E7 \u05DE\u05D6\u05E8\u05D7 \u05D2\u05E8\u05DE\u05E0\u05D9"
      },
      DEM: {
        displayName: "\u05DE\u05E8\u05E7 \u05D2\u05E8\u05DE\u05E0\u05D9",
        "displayName-count-other": "\u05DE\u05E8\u05E7 \u05D2\u05E8\u05DE\u05E0\u05D9"
      },
      DJF: {
        displayName: "\u05E4\u05E8\u05E0\u05E7 \u05D2\u05F3\u05D9\u05D1\u05D5\u05D8\u05D9",
        "displayName-count-other": "\u05E4\u05E8\u05E0\u05E7 \u05D2\u05F3\u05D9\u05D1\u05D5\u05D8\u05D9"
      },
      DKK: {
        displayName: "\u05DB\u05EA\u05E8 \u05D3\u05E0\u05D9",
        "displayName-count-other": "\u05DB\u05EA\u05E8 \u05D3\u05E0\u05D9",
        "symbol-alt-narrow": "kr"
      },
      DOP: {
        displayName: "\u05E4\u05E1\u05D5 \u05D3\u05D5\u05DE\u05D9\u05E0\u05D9\u05E7\u05E0\u05D9",
        "displayName-count-other": "\u05E4\u05E1\u05D5 \u05D3\u05D5\u05DE\u05D9\u05E0\u05D9\u05E7\u05E0\u05D9",
        "symbol-alt-narrow": "$"
      },
      DZD: {
        displayName: "\u05D3\u05D9\u05E0\u05E8 \u05D0\u05DC\u05D2\u05F3\u05D9\u05E8\u05D9",
        "displayName-count-other": "\u05D3\u05D9\u05E0\u05E8 \u05D0\u05DC\u05D2\u05F3\u05D9\u05E8\u05D9"
      },
      ECS: {
        displayName: "\u05E1\u05D5\u05E7\u05E8 \u05D0\u05E7\u05D5\u05D0\u05D3\u05D5\u05E8\u05D9",
        "displayName-count-other": "\u05E1\u05D5\u05E7\u05E8 \u05D0\u05E7\u05D5\u05D0\u05D3\u05D5\u05E8\u05D9"
      },
      EEK: {
        displayName: "\u05E7\u05E8\u05D5\u05DF \u05D0\u05E1\u05D8\u05D5\u05E0\u05D9",
        "displayName-count-other": "\u05E7\u05E8\u05D5\u05DF \u05D0\u05E1\u05D8\u05D5\u05E0\u05D9"
      },
      EGP: {
        displayName: "\u05DC\u05D9\u05E8\u05D4 \u05DE\u05E6\u05E8\u05D9\u05EA",
        "displayName-count-other": "\u05DC\u05D9\u05E8\u05D4 \u05DE\u05E6\u05E8\u05D9\u05EA",
        "symbol-alt-narrow": "E\xA3"
      },
      ERN: {
        displayName: "\u05E0\u05D0\u05E7\u05E4\u05D4 \u05D0\u05E8\u05D9\u05EA\u05E8\u05D0\u05D9",
        "displayName-count-other": "\u05E0\u05D0\u05E7\u05E4\u05D4 \u05D0\u05E8\u05D9\u05EA\u05E8\u05D0\u05D9"
      },
      ESP: {
        displayName: "\u05E4\u05E1\u05D8\u05D4 \u05E1\u05E4\u05E8\u05D3\u05D9",
        "displayName-count-other": "\u05E4\u05E1\u05D8\u05D4 \u05E1\u05E4\u05E8\u05D3\u05D9",
        "symbol-alt-narrow": "\u20A7"
      },
      ETB: {
        displayName: "\u05D1\u05D9\u05E8 \u05D0\u05EA\u05D9\u05D5\u05E4\u05D9",
        "displayName-count-other": "\u05D1\u05D9\u05E8 \u05D0\u05EA\u05D9\u05D5\u05E4\u05D9"
      },
      EUR: {
        displayName: "\u05D0\u05D9\u05E8\u05D5",
        "displayName-count-other": "\u05D0\u05D9\u05E8\u05D5",
        symbol: "\u20AC",
        "symbol-alt-narrow": "\u20AC"
      },
      FIM: {
        displayName: "\u05DE\u05E8\u05E7 \u05E4\u05D9\u05E0\u05D9",
        "displayName-count-other": "\u05DE\u05E8\u05E7 \u05E4\u05D9\u05E0\u05D9"
      },
      FJD: {
        displayName: "\u05D3\u05D5\u05DC\u05E8 \u05E4\u05D9\u05D2\u05F3\u05D9",
        "displayName-count-other": "\u05D3\u05D5\u05DC\u05E8 \u05E4\u05D9\u05D2\u05F3\u05D9",
        "symbol-alt-narrow": "$"
      },
      FKP: {
        displayName: "\u05DC\u05D9\u05E8\u05D4 \u05E9\u05DC \u05D0\u05D9\u05D9 \u05E4\u05D5\u05E7\u05DC\u05E0\u05D3",
        "displayName-count-other": "\u05DC\u05D9\u05E8\u05D4 \u05E9\u05DC \u05D0\u05D9\u05D9 \u05E4\u05D5\u05E7\u05DC\u05E0\u05D3",
        "symbol-alt-narrow": "\xA3"
      },
      FRF: {
        displayName: "\u05E4\u05E8\u05E0\u05E7 \u05E6\u05E8\u05E4\u05EA\u05D9",
        "displayName-count-other": "\u05E4\u05E8\u05E0\u05E7 \u05E6\u05E8\u05E4\u05EA\u05D9"
      },
      GBP: {
        displayName: "\u05DC\u05D9\u05E8\u05D4 \u05E9\u05D8\u05E8\u05DC\u05D9\u05E0\u05D2",
        "displayName-count-other": "\u05DC\u05D9\u05E8\u05D4 \u05E9\u05D8\u05E8\u05DC\u05D9\u05E0\u05D2",
        symbol: "\xA3",
        "symbol-alt-narrow": "\xA3"
      },
      GEL: {
        displayName: "\u05DC\u05D0\u05E8\u05D9 \u05D2\u05D0\u05D5\u05E8\u05D2\u05D9",
        "displayName-count-other": "\u05DC\u05D0\u05E8\u05D9 \u05D2\u05D0\u05D5\u05E8\u05D2\u05D9",
        "symbol-alt-narrow": "\u20BE"
      },
      GHS: {
        displayName: "\u05E1\u05D3\u05D9 \u05D2\u05D0\u05E0\u05D9",
        "displayName-count-other": "\u05E1\u05D3\u05D9 \u05D2\u05D0\u05E0\u05D9",
        "symbol-alt-narrow": "GH\u20B5"
      },
      GIP: {
        displayName: "\u05E4\u05D0\u05D5\u05E0\u05D3 \u05D2\u05D9\u05D1\u05E8\u05DC\u05D8\u05E8",
        "displayName-count-other": "\u05E4\u05D0\u05D5\u05E0\u05D3 \u05D2\u05D9\u05D1\u05E8\u05DC\u05D8\u05E8",
        "symbol-alt-narrow": "\xA3"
      },
      GMD: {
        displayName: "\u05D3\u05DC\u05E1\u05D9 \u05D2\u05DE\u05D1\u05D9",
        "displayName-count-other": "\u05D3\u05DC\u05E1\u05D9 \u05D2\u05DE\u05D1\u05D9"
      },
      GNF: {
        displayName: "\u05E4\u05E8\u05E0\u05E7 \u05D2\u05D9\u05E0\u05D0\u05D9",
        "displayName-count-other": "\u05E4\u05E8\u05E0\u05E7 \u05D2\u05D9\u05E0\u05D0\u05D9",
        "symbol-alt-narrow": "FG"
      },
      GRD: {
        displayName: "\u05D3\u05E8\u05DB\u05DE\u05D4",
        "displayName-count-other": "\u05D3\u05E8\u05DB\u05DE\u05D4"
      },
      GTQ: {
        displayName: "\u05E7\u05E6\u05D0\u05DC \u05D2\u05D5\u05D0\u05D8\u05DE\u05DC\u05D9",
        "displayName-count-other": "\u05E7\u05E6\u05D0\u05DC \u05D2\u05D5\u05D0\u05D8\u05DE\u05DC\u05D9",
        "symbol-alt-narrow": "Q"
      },
      GWP: {
        displayName: "\u05E4\u05D6\u05D5 \u05D2\u05D9\u05E0\u05D0\u05D9",
        "displayName-count-other": "\u05E4\u05D6\u05D5 \u05D2\u05D9\u05E0\u05D0\u05D9"
      },
      GYD: {
        displayName: "\u05D3\u05D5\u05DC\u05E8 \u05D2\u05D9\u05D0\u05E0\u05D9",
        "displayName-count-other": "\u05D3\u05D5\u05DC\u05E8 \u05D2\u05D9\u05D0\u05E0\u05D9",
        "symbol-alt-narrow": "$"
      },
      HKD: {
        displayName: "\u05D3\u05D5\u05DC\u05E8 \u05D4\u05D5\u05E0\u05D2 \u05E7\u05D5\u05E0\u05D2\u05D9",
        "displayName-count-other": "\u05D3\u05D5\u05DC\u05E8 \u05D4\u05D5\u05E0\u05D2 \u05E7\u05D5\u05E0\u05D2\u05D9",
        symbol: "HK$",
        "symbol-alt-narrow": "$"
      },
      HNL: {
        displayName: "\u05DC\u05DE\u05E4\u05D9\u05E8\u05D4 \u05D4\u05D5\u05E0\u05D3\u05D5\u05E8\u05D9",
        "displayName-count-other": "\u05DC\u05DE\u05E4\u05D9\u05E8\u05D4 \u05D4\u05D5\u05E0\u05D3\u05D5\u05E8\u05D9",
        "symbol-alt-narrow": "L"
      },
      HRK: {
        displayName: "\u05E7\u05D5\u05E0\u05D4 \u05E7\u05E8\u05D5\u05D0\u05D8\u05D9",
        "displayName-count-other": "\u05E7\u05D5\u05E0\u05D4 \u05E7\u05E8\u05D5\u05D0\u05D8\u05D9",
        "symbol-alt-narrow": "kn"
      },
      HTG: {
        displayName: "\u05D2\u05D5\u05E8\u05D3 \u05D4\u05D0\u05D9\u05D8\u05D9",
        "displayName-count-other": "\u05D2\u05D5\u05E8\u05D3 \u05D4\u05D0\u05D9\u05D8\u05D9"
      },
      HUF: {
        displayName: "\u05E4\u05D5\u05E8\u05D9\u05E0\u05D8 \u05D4\u05D5\u05E0\u05D2\u05E8\u05D9",
        "displayName-count-other": "\u05E4\u05D5\u05E8\u05D9\u05E0\u05D8 \u05D4\u05D5\u05E0\u05D2\u05E8\u05D9",
        "symbol-alt-narrow": "Ft"
      },
      IDR: {
        displayName: "\u05E8\u05D5\u05E4\u05D9\u05D4 \u05D0\u05D9\u05E0\u05D3\u05D5\u05E0\u05D6\u05D9\u05EA",
        "displayName-count-one": "\u05E8\u05D5\u05E4\u05D9\u05D4 \u05D0\u05D9\u05E0\u05D3\u05D5\u05E0\u05D6\u05D9\u05EA",
        "displayName-count-two": "\u05E8\u05D5\u05E4\u05D9\u05D5\u05EA \u05D0\u05D9\u05E0\u05D3\u05D5\u05E0\u05D6\u05D9\u05D5\u05EA",
        "displayName-count-other": "\u05E8\u05D5\u05E4\u05D9\u05D5\u05EA \u05D0\u05D9\u05E0\u05D3\u05D5\u05E0\u05D6\u05D9\u05D5\u05EA",
        "symbol-alt-narrow": "Rp"
      },
      IEP: {
        displayName: "\u05DC\u05D9\u05E8\u05D4 \u05D0\u05D9\u05E8\u05D9\u05EA",
        "displayName-count-other": "\u05DC\u05D9\u05E8\u05D4 \u05D0\u05D9\u05E8\u05D9\u05EA"
      },
      ILP: {
        displayName: "\u05DC\u05D9\u05E8\u05D4 \u05D9\u05E9\u05E8\u05D0\u05DC\u05D9\u05EA",
        "displayName-count-other": "\u05DC\u05D9\u05E8\u05D4 \u05D9\u05E9\u05E8\u05D0\u05DC\u05D9\u05EA",
        symbol: "\u05DC\u05F4\u05D9"
      },
      ILS: {
        displayName: "\u05E9\u05E7\u05DC \u05D7\u05D3\u05E9",
        "displayName-count-one": "\u05E9\u05E7\u05DC \u05D7\u05D3\u05E9",
        "displayName-count-two": "\u05E9\u05E7\u05DC\u05D9\u05DD \u05D7\u05D3\u05E9\u05D9\u05DD",
        "displayName-count-other": "\u05E9\u05E7\u05DC\u05D9\u05DD \u05D7\u05D3\u05E9\u05D9\u05DD",
        symbol: "\u20AA",
        "symbol-alt-narrow": "\u20AA"
      },
      INR: {
        displayName: "\u05E8\u05D5\u05E4\u05D9 \u05D4\u05D5\u05D3\u05D9",
        "displayName-count-other": "\u05E8\u05D5\u05E4\u05D9 \u05D4\u05D5\u05D3\u05D9",
        symbol: "\u20B9",
        "symbol-alt-narrow": "\u20B9"
      },
      IQD: {
        displayName: "\u05D3\u05D9\u05E0\u05E8 \u05E2\u05D9\u05E8\u05D0\u05E7\u05D9",
        "displayName-count-other": "\u05D3\u05D9\u05E0\u05E8 \u05E2\u05D9\u05E8\u05D0\u05E7\u05D9"
      },
      IRR: {
        displayName: "\u05E8\u05D9\u05D0\u05DC \u05D0\u05D9\u05E8\u05D0\u05E0\u05D9",
        "displayName-count-other": "\u05E8\u05D9\u05D0\u05DC \u05D0\u05D9\u05E8\u05D0\u05E0\u05D9"
      },
      ISK: {
        displayName: "\u05DB\u05EA\u05E8 \u05D0\u05D9\u05E1\u05DC\u05E0\u05D3\u05D9",
        "displayName-count-other": "\u05DB\u05EA\u05E8 \u05D0\u05D9\u05E1\u05DC\u05E0\u05D3\u05D9",
        "symbol-alt-narrow": "kr"
      },
      ITL: {
        displayName: "\u05DC\u05D9\u05E8\u05D4 \u05D0\u05D9\u05D8\u05DC\u05E7\u05D9\u05EA",
        "displayName-count-other": "\u05DC\u05D9\u05E8\u05D4 \u05D0\u05D9\u05D8\u05DC\u05E7\u05D9\u05EA"
      },
      JMD: {
        displayName: "\u05D3\u05D5\u05DC\u05E8 \u05D2\u05F3\u05DE\u05D9\u05D9\u05E7\u05E0\u05D9",
        "displayName-count-other": "\u05D3\u05D5\u05DC\u05E8 \u05D2\u05F3\u05DE\u05D9\u05D9\u05E7\u05E0\u05D9",
        "symbol-alt-narrow": "$"
      },
      JOD: {
        displayName: "\u05D3\u05D9\u05E0\u05E8 \u05D9\u05E8\u05D3\u05E0\u05D9",
        "displayName-count-other": "\u05D3\u05D9\u05E0\u05E8 \u05D9\u05E8\u05D3\u05E0\u05D9"
      },
      JPY: {
        displayName: "\u05D9\u05DF \u05D9\u05E4\u05E0\u05D9",
        "displayName-count-other": "\u05D9\u05DF \u05D9\u05E4\u05E0\u05D9",
        symbol: "\xA5",
        "symbol-alt-narrow": "\xA5"
      },
      KES: {
        displayName: "\u05E9\u05D9\u05DC\u05D9\u05E0\u05D2 \u05E7\u05E0\u05D9\u05D9\u05EA\u05D9",
        "displayName-count-other": "\u05E9\u05D9\u05DC\u05D9\u05E0\u05D2 \u05E7\u05E0\u05D9\u05D9\u05EA\u05D9"
      },
      KGS: {
        displayName: "\u05E1\u05D5\u05DD \u05E7\u05D9\u05E8\u05D2\u05D9\u05D6\u05D9",
        "displayName-count-other": "\u05E1\u05D5\u05DD \u05E7\u05D9\u05E8\u05D2\u05D9\u05D6\u05D9",
        "symbol-alt-narrow": "\u20C0"
      },
      KHR: {
        displayName: "\u05E8\u05D9\u05DC \u05E7\u05DE\u05D1\u05D5\u05D3\u05D9",
        "displayName-count-other": "\u05E8\u05D9\u05DC \u05E7\u05DE\u05D1\u05D5\u05D3\u05D9",
        "symbol-alt-narrow": "\u17DB"
      },
      KMF: {
        displayName: "\u05E4\u05E8\u05E0\u05E7 \u05E7\u05D5\u05DE\u05D5\u05E8\u05D5\u05D0\u05D9",
        "displayName-count-other": "\u05E4\u05E8\u05E0\u05E7 \u05E7\u05D5\u05DE\u05D5\u05E8\u05D5\u05D0\u05D9",
        "symbol-alt-narrow": "CF"
      },
      KPW: {
        displayName: "\u05D5\u05D5\u05DF \u05E6\u05E4\u05D5\u05DF \u05E7\u05D5\u05E8\u05D9\u05D0\u05E0\u05D9",
        "displayName-count-other": "\u05D5\u05D5\u05DF \u05E6\u05E4\u05D5\u05DF \u05E7\u05D5\u05E8\u05D9\u05D0\u05E0\u05D9",
        "symbol-alt-narrow": "\u20A9"
      },
      KRW: {
        displayName: "\u05D5\u05D5\u05DF \u05D3\u05E8\u05D5\u05DD \u05E7\u05D5\u05E8\u05D9\u05D0\u05E0\u05D9",
        "displayName-count-other": "\u05D5\u05D5\u05DF \u05D3\u05E8\u05D5\u05DD \u05E7\u05D5\u05E8\u05D9\u05D0\u05E0\u05D9",
        symbol: "\u20A9",
        "symbol-alt-narrow": "\u20A9"
      },
      KWD: {
        displayName: "\u05D3\u05D9\u05E0\u05E8 \u05DB\u05D5\u05D5\u05D9\u05EA\u05D9",
        "displayName-count-other": "\u05D3\u05D9\u05E0\u05E8 \u05DB\u05D5\u05D5\u05D9\u05EA\u05D9"
      },
      KYD: {
        displayName: "\u05D3\u05D5\u05DC\u05E8 \u05E7\u05D9\u05D9\u05DE\u05E0\u05D9",
        "displayName-count-other": "\u05D3\u05D5\u05DC\u05E8 \u05E7\u05D9\u05D9\u05DE\u05E0\u05D9",
        "symbol-alt-narrow": "$"
      },
      KZT: {
        displayName: "\u05D8\u05E0\u05D2\u05D4 \u05E7\u05D6\u05D7\u05E1\u05D8\u05E0\u05D9",
        "displayName-count-other": "\u05D8\u05E0\u05D2\u05D4 \u05E7\u05D6\u05D7\u05E1\u05D8\u05E0\u05D9",
        "symbol-alt-narrow": "\u20B8"
      },
      LAK: {
        displayName: "\u05E7\u05D9\u05E4 \u05DC\u05D0\u05D9",
        "displayName-count-other": "\u05E7\u05D9\u05E4 \u05DC\u05D0\u05D9",
        "symbol-alt-narrow": "\u20AD"
      },
      LBP: {
        displayName: "\u05DC\u05D9\u05E8\u05D4 \u05DC\u05D1\u05E0\u05D5\u05E0\u05D9\u05EA",
        "displayName-count-one": "\u05DC\u05D9\u05E8\u05D4 \u05DC\u05D1\u05E0\u05D5\u05E0\u05D9\u05EA",
        "displayName-count-two": "\u05DC\u05D9\u05E8\u05D5\u05EA \u05DC\u05D1\u05E0\u05D5\u05E0\u05D9\u05D5\u05EA",
        "displayName-count-other": "\u05DC\u05D9\u05E8\u05D5\u05EA \u05DC\u05D1\u05E0\u05D5\u05E0\u05D9\u05D5\u05EA",
        "symbol-alt-narrow": "L\xA3"
      },
      LKR: {
        displayName: "\u05E8\u05D5\u05E4\u05D9 \u05E1\u05E8\u05D9 \u05DC\u05E0\u05E7\u05D9",
        "displayName-count-other": "\u05E8\u05D5\u05E4\u05D9 \u05E1\u05E8\u05D9 \u05DC\u05E0\u05E7\u05D9",
        "symbol-alt-narrow": "Rs"
      },
      LRD: {
        displayName: "\u05D3\u05D5\u05DC\u05E8 \u05DC\u05D9\u05D1\u05E8\u05D9",
        "displayName-count-other": "\u05D3\u05D5\u05DC\u05E8 \u05DC\u05D9\u05D1\u05E8\u05D9",
        "symbol-alt-narrow": "$"
      },
      LSL: {
        displayName: "\u05DC\u05D5\u05D8\u05D9 \u05DC\u05E1\u05D5\u05EA\u05D9",
        "displayName-count-other": "\u05DC\u05D5\u05D8\u05D9 \u05DC\u05E1\u05D5\u05EA\u05D9"
      },
      LTL: {
        displayName: "\u05DC\u05D9\u05D8\u05D0 \u05DC\u05D9\u05D8\u05D0\u05D9",
        "displayName-count-other": "\u05DC\u05D9\u05D8\u05D0 \u05DC\u05D9\u05D8\u05D0\u05D9",
        "symbol-alt-narrow": "Lt"
      },
      LUF: {
        displayName: "\u05E4\u05E8\u05E0\u05E7 \u05DC\u05D5\u05E7\u05E1\u05DE\u05D1\u05D5\u05E8\u05D2\u05D9",
        "displayName-count-other": "\u05E4\u05E8\u05E0\u05E7 \u05DC\u05D5\u05E7\u05E1\u05DE\u05D1\u05D5\u05E8\u05D2\u05D9"
      },
      LVL: {
        displayName: "\u05DC\u05D8 \u05DC\u05D8\u05D1\u05D9",
        "displayName-count-other": "\u05DC\u05D8 \u05DC\u05D8\u05D1\u05D9",
        "symbol-alt-narrow": "Ls"
      },
      LYD: {
        displayName: "\u05D3\u05D9\u05E0\u05E8 \u05DC\u05D5\u05D1\u05D9",
        "displayName-count-other": "\u05D3\u05D9\u05E0\u05E8 \u05DC\u05D5\u05D1\u05D9"
      },
      MAD: {
        displayName: "\u05D3\u05D9\u05E8\u05D4\u05DD \u05DE\u05E8\u05D5\u05E7\u05D0\u05D9",
        "displayName-count-other": "\u05D3\u05D9\u05E8\u05D4\u05DD \u05DE\u05E8\u05D5\u05E7\u05D0\u05D9"
      },
      MAF: {
        displayName: "\u05E4\u05E8\u05E0\u05E7 \u05DE\u05E8\u05D5\u05E7\u05D0\u05D9",
        "displayName-count-other": "\u05E4\u05E8\u05E0\u05E7 \u05DE\u05E8\u05D5\u05E7\u05D0\u05D9"
      },
      MDL: {
        displayName: "\u05DC\u05D0\u05D5 \u05DE\u05D5\u05DC\u05D3\u05D5\u05D1\u05E0\u05D9",
        "displayName-count-other": "\u05DC\u05D0\u05D5 \u05DE\u05D5\u05DC\u05D3\u05D5\u05D1\u05E0\u05D9"
      },
      MGA: {
        displayName: "\u05D0\u05E8\u05D9\u05D0\u05E8\u05D9 \u05DE\u05DC\u05D2\u05E9\u05D9",
        "displayName-count-other": "\u05D0\u05E8\u05D9\u05D0\u05E8\u05D9 \u05DE\u05DC\u05D2\u05E9\u05D9",
        "symbol-alt-narrow": "Ar"
      },
      MGF: {
        displayName: "\u05E4\u05E8\u05E0\u05E7 \u05DE\u05D3\u05D2\u05E1\u05E7\u05D0\u05E8\u05D9",
        "displayName-count-other": "\u05E4\u05E8\u05E0\u05E7 \u05DE\u05D3\u05D2\u05E1\u05E7\u05D0\u05E8\u05D9"
      },
      MKD: {
        displayName: "\u05D3\u05D9\u05E0\u05E8 \u05DE\u05E7\u05D3\u05D5\u05E0\u05D9",
        "displayName-count-other": "\u05D3\u05D9\u05E0\u05E8 \u05DE\u05E7\u05D3\u05D5\u05E0\u05D9"
      },
      MMK: {
        displayName: "\u05E7\u05D9\u05D0\u05D8 \u05DE\u05D9\u05D0\u05E0\u05DE\u05E8\u05D9",
        "displayName-count-other": "\u05E7\u05D9\u05D0\u05D8 \u05DE\u05D9\u05D0\u05E0\u05DE\u05E8\u05D9",
        "symbol-alt-narrow": "K"
      },
      MNT: {
        displayName: "\u05D8\u05D5\u05D2\u05E8\u05D5\u05D2 \u05DE\u05D5\u05E0\u05D2\u05D5\u05DC\u05D9",
        "displayName-count-other": "\u05D8\u05D5\u05D2\u05E8\u05D5\u05D2 \u05DE\u05D5\u05E0\u05D2\u05D5\u05DC\u05D9",
        "symbol-alt-narrow": "\u20AE"
      },
      MOP: {
        displayName: "\u05E4\u05D8\u05E7\u05D4 \u05E9\u05DC \u05DE\u05E7\u05D0\u05D5",
        "displayName-count-other": "\u05E4\u05D8\u05E7\u05D4 \u05E9\u05DC \u05DE\u05E7\u05D0\u05D5"
      },
      MRO: {
        displayName: "\u05D0\u05D5\u05D0\u05D5\u05D2\u05D5\u05D9\u05D4 \u05DE\u05D0\u05D5\u05E8\u05D9\u05D8\u05E0\u05D9 (1973\u20132017)",
        "displayName-count-other": "\u05D0\u05D5\u05D0\u05D5\u05D2\u05D5\u05D9\u05D4 \u05DE\u05D0\u05D5\u05E8\u05D9\u05D8\u05E0\u05D9 (1973\u20132017)"
      },
      MRU: {
        displayName: "\u05D0\u05D5\u05D0\u05D5\u05D2\u05D5\u05D9\u05D4 \u05DE\u05D0\u05D5\u05E8\u05D9\u05D8\u05E0\u05D9",
        "displayName-count-other": "\u05D0\u05D5\u05D0\u05D5\u05D2\u05D5\u05D9\u05D4 \u05DE\u05D0\u05D5\u05E8\u05D9\u05D8\u05E0\u05D9"
      },
      MTL: {
        displayName: "\u05DC\u05D9\u05E8\u05D4 \u05DE\u05DC\u05D8\u05D9\u05EA",
        "displayName-count-other": "\u05DC\u05D9\u05E8\u05D4 \u05DE\u05DC\u05D8\u05D9\u05EA"
      },
      MUR: {
        displayName: "\u05E8\u05D5\u05E4\u05D9 \u05DE\u05D0\u05D5\u05E8\u05D9\u05E6\u05D9\u05E0\u05D9",
        "displayName-count-other": "\u05E8\u05D5\u05E4\u05D9 \u05DE\u05D0\u05D5\u05E8\u05D9\u05E6\u05D9\u05E0\u05D9",
        "symbol-alt-narrow": "Rs"
      },
      MVR: {
        displayName: "\u05E8\u05D5\u05E4\u05D9\u05D4 \u05DE\u05DC\u05D3\u05D9\u05D1\u05D9\u05EA",
        "displayName-count-one": "\u05E8\u05D5\u05E4\u05D9\u05D4 \u05DE\u05DC\u05D3\u05D9\u05D1\u05D9\u05EA",
        "displayName-count-two": "\u05E8\u05D5\u05E4\u05D9\u05D5\u05EA \u05DE\u05DC\u05D3\u05D9\u05D1\u05D9\u05D5\u05EA",
        "displayName-count-other": "\u05E8\u05D5\u05E4\u05D9\u05D5\u05EA \u05DE\u05DC\u05D3\u05D9\u05D1\u05D9\u05D5\u05EA"
      },
      MWK: {
        displayName: "\u05E7\u05D5\u05D0\u05E6\u05F3\u05D4 \u05DE\u05DC\u05D0\u05D5\u05D5\u05D9",
        "displayName-count-other": "\u05E7\u05D5\u05D0\u05E6\u05F3\u05D4 \u05DE\u05DC\u05D0\u05D5\u05D5\u05D9"
      },
      MXN: {
        displayName: "\u05E4\u05E1\u05D5 \u05DE\u05E7\u05E1\u05D9\u05E7\u05E0\u05D9",
        "displayName-count-other": "\u05E4\u05E1\u05D5 \u05DE\u05E7\u05E1\u05D9\u05E7\u05E0\u05D9",
        symbol: "MX$",
        "symbol-alt-narrow": "$"
      },
      MXP: {
        displayName: "\u05E4\u05D6\u05D5 \u05DE\u05E7\u05E1\u05D9\u05E7\u05E0\u05D9 (1861 \u2013 1992)",
        "displayName-count-one": "\u05E4\u05E1\u05D5 \u05DE\u05E7\u05E1\u05D9\u05E7\u05E0\u05D9 (1861 \u2013 1992)",
        "displayName-count-two": "\u05E4\u05E1\u05D5 \u05DE\u05E7\u05E1\u05D9\u05E7\u05E0\u05D9 (1861 \u2013 1992)",
        "displayName-count-other": "\u05E4\u05E1\u05D5 \u05DE\u05E7\u05E1\u05D9\u05E7\u05E0\u05D9 (1861 \u2013 1992)"
      },
      MXV: {
        displayName: "\u05D9\u05D7\u05D9\u05D3\u05EA \u05D4\u05E9\u05E7\u05E2\u05D5\u05EA \u05DE\u05E7\u05E1\u05D9\u05E7\u05E0\u05D9\u05EA",
        "displayName-count-one": "\u05D9\u05D7\u05D9\u05D3\u05EA \u05D4\u05E9\u05E7\u05E2\u05D5\u05EA \u05DE\u05E7\u05E1\u05D9\u05E7\u05E0\u05D9\u05EA",
        "displayName-count-two": "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D4\u05E9\u05E7\u05E2\u05D5\u05EA \u05DE\u05E7\u05E1\u05D9\u05E7\u05E0\u05D9\u05D5\u05EA",
        "displayName-count-other": "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D4\u05E9\u05E7\u05E2\u05D5\u05EA \u05DE\u05E7\u05E1\u05D9\u05E7\u05E0\u05D9\u05D5\u05EA"
      },
      MYR: {
        displayName: "\u05E8\u05D9\u05E0\u05D2\u05D9\u05D8 \u05DE\u05DC\u05D6\u05D9",
        "displayName-count-other": "\u05E8\u05D9\u05E0\u05D2\u05D9\u05D8 \u05DE\u05DC\u05D6\u05D9",
        "symbol-alt-narrow": "RM"
      },
      MZE: {
        displayName: "\u05D0\u05E1\u05E7\u05D5\u05D3\u05D5 \u05DE\u05D5\u05D6\u05DE\u05D1\u05D9\u05E7\u05D9",
        "displayName-count-one": "\u05D0\u05E1\u05E7\u05D5\u05D3\u05D5 \u05DE\u05D5\u05D6\u05DE\u05D1\u05D9\u05E7\u05D9",
        "displayName-count-two": "\u05D0\u05E1\u05E7\u05D5\u05D3\u05D5\u05D0\u05D9\u05DD \u05DE\u05D5\u05D6\u05DE\u05D1\u05D9\u05E7\u05D9\u05D9\u05DD",
        "displayName-count-many": "\u05D0\u05E1\u05E7\u05D5\u05D3\u05D5 \u05DE\u05D5\u05D6\u05DE\u05D1\u05D9\u05E7\u05D9",
        "displayName-count-other": "\u05D0\u05E1\u05E7\u05D5\u05D3\u05D5\u05D0\u05D9\u05DD \u05DE\u05D5\u05D6\u05DE\u05D1\u05D9\u05E7\u05D9\u05D9\u05DD"
      },
      MZM: {
        displayName: "\u05DE\u05D8\u05D9\u05E7\u05DC",
        "displayName-count-other": "\u05DE\u05D8\u05D9\u05E7\u05DC"
      },
      MZN: {
        displayName: "\u05DE\u05D8\u05D9\u05E7\u05DC \u05DE\u05D5\u05D6\u05DE\u05D1\u05D9\u05E0\u05D9",
        "displayName-count-other": "\u05DE\u05D8\u05D9\u05E7\u05DC \u05DE\u05D5\u05D6\u05DE\u05D1\u05D9\u05E0\u05D9"
      },
      NAD: {
        displayName: "\u05D3\u05D5\u05DC\u05E8 \u05E0\u05DE\u05D9\u05D1\u05D9",
        "displayName-count-other": "\u05D3\u05D5\u05DC\u05E8 \u05E0\u05DE\u05D9\u05D1\u05D9",
        "symbol-alt-narrow": "$"
      },
      NGN: {
        displayName: "\u05E0\u05D0\u05D9\u05E8\u05D4 \u05E0\u05D9\u05D2\u05E8\u05D9",
        "displayName-count-other": "\u05E0\u05D0\u05D9\u05E8\u05D4 \u05E0\u05D9\u05D2\u05E8\u05D9",
        "symbol-alt-narrow": "\u20A6"
      },
      NIC: {
        displayName: "\u05E7\u05D5\u05E8\u05D3\u05D5\u05D1\u05D4 (1988\u20131991)",
        "displayName-count-one": "\u05E7\u05D5\u05E8\u05D3\u05D5\u05D1\u05D4 (1988\u20131991)",
        "displayName-count-two": "\u05E7\u05D5\u05E8\u05D3\u05D5\u05D1\u05D5\u05EA (1988\u20131991)",
        "displayName-count-other": "\u05E7\u05D5\u05E8\u05D3\u05D5\u05D1\u05D5\u05EA (1988\u20131991)"
      },
      NIO: {
        displayName: "\u05E7\u05D5\u05E8\u05D3\u05D5\u05D1\u05D4 \u05E0\u05D9\u05E7\u05E8\u05D2\u05D5\u05D0\u05D4",
        "displayName-count-other": "\u05E7\u05D5\u05E8\u05D3\u05D5\u05D1\u05D4 \u05E0\u05D9\u05E7\u05E8\u05D2\u05D5\u05D0\u05D4",
        "symbol-alt-narrow": "C$"
      },
      NLG: {
        displayName: "\u05D2\u05D9\u05DC\u05D3\u05DF \u05D4\u05D5\u05DC\u05E0\u05D3\u05D9",
        "displayName-count-other": "\u05D2\u05D9\u05DC\u05D3\u05DF \u05D4\u05D5\u05DC\u05E0\u05D3\u05D9"
      },
      NOK: {
        displayName: "\u05DB\u05EA\u05E8 \u05E0\u05D5\u05E8\u05D5\u05D5\u05D2\u05D9",
        "displayName-count-other": "\u05DB\u05EA\u05E8 \u05E0\u05D5\u05E8\u05D5\u05D5\u05D2\u05D9",
        "symbol-alt-narrow": "kr"
      },
      NPR: {
        displayName: "\u05E8\u05D5\u05E4\u05D9 \u05E0\u05E4\u05D0\u05DC\u05D9",
        "displayName-count-other": "\u05E8\u05D5\u05E4\u05D9 \u05E0\u05E4\u05D0\u05DC\u05D9",
        "symbol-alt-narrow": "Rs"
      },
      NZD: {
        displayName: "\u05D3\u05D5\u05DC\u05E8 \u05E0\u05D9\u05D5 \u05D6\u05D9\u05DC\u05E0\u05D3\u05D9",
        "displayName-count-other": "\u05D3\u05D5\u05DC\u05E8 \u05E0\u05D9\u05D5 \u05D6\u05D9\u05DC\u05E0\u05D3\u05D9",
        symbol: "NZ$",
        "symbol-alt-narrow": "$"
      },
      OMR: {
        displayName: "\u05E8\u05D9\u05D0\u05DC \u05E2\u05D5\u05DE\u05D0\u05E0\u05D9",
        "displayName-count-other": "\u05E8\u05D9\u05D0\u05DC \u05E2\u05D5\u05DE\u05D0\u05E0\u05D9"
      },
      PAB: {
        displayName: "\u05D1\u05DC\u05D1\u05D5\u05D0\u05D4 \u05E4\u05E0\u05DE\u05D9",
        "displayName-count-other": "\u05D1\u05DC\u05D1\u05D5\u05D0\u05D4 \u05E4\u05E0\u05DE\u05D9"
      },
      PEN: {
        displayName: "\u05E1\u05D5\u05DC \u05E4\u05E8\u05D5\u05D0\u05E0\u05D9",
        "displayName-count-other": "\u05E1\u05D5\u05DC \u05E4\u05E8\u05D5\u05D0\u05E0\u05D9"
      },
      PGK: {
        displayName: "\u05E7\u05D9\u05E0\u05D4 \u05E9\u05DC \u05E4\u05E4\u05D5\u05D0\u05D4 \u05D2\u05D9\u05E0\u05D0\u05D4 \u05D4\u05D7\u05D3\u05E9\u05D4",
        "displayName-count-other": "\u05E7\u05D9\u05E0\u05D4 \u05E9\u05DC \u05E4\u05E4\u05D5\u05D0\u05D4 \u05D2\u05D9\u05E0\u05D0\u05D4 \u05D4\u05D7\u05D3\u05E9\u05D4"
      },
      PHP: {
        displayName: "\u05E4\u05E1\u05D5 \u05E4\u05D9\u05DC\u05D9\u05E4\u05D9\u05E0\u05D9",
        "displayName-count-other": "\u05E4\u05E1\u05D5 \u05E4\u05D9\u05DC\u05D9\u05E4\u05D9\u05E0\u05D9",
        symbol: "PHP",
        "symbol-alt-narrow": "\u20B1"
      },
      PKR: {
        displayName: "\u05E8\u05D5\u05E4\u05D9 \u05E4\u05E7\u05D9\u05E1\u05D8\u05E0\u05D9",
        "displayName-count-other": "\u05E8\u05D5\u05E4\u05D9 \u05E4\u05E7\u05D9\u05E1\u05D8\u05E0\u05D9",
        "symbol-alt-narrow": "Rs"
      },
      PLN: {
        displayName: "\u05D6\u05DC\u05D5\u05D8\u05D9 \u05E4\u05D5\u05DC\u05E0\u05D9",
        "displayName-count-other": "\u05D6\u05DC\u05D5\u05D8\u05D9 \u05E4\u05D5\u05DC\u05E0\u05D9",
        "symbol-alt-narrow": "z\u0142"
      },
      PTE: {
        displayName: "\u05D0\u05E1\u05E7\u05D5\u05D3\u05D5 \u05E4\u05D5\u05E8\u05D8\u05D5\u05D2\u05DC\u05D9",
        "displayName-count-other": "\u05D0\u05E1\u05E7\u05D5\u05D3\u05D5 \u05E4\u05D5\u05E8\u05D8\u05D5\u05D2\u05DC\u05D9"
      },
      PYG: {
        displayName: "\u05D2\u05D5\u05D0\u05E8\u05E0\u05D9 \u05E4\u05E8\u05D2\u05D5\u05D5\u05D0\u05D9",
        "displayName-count-other": "\u05D2\u05D5\u05D0\u05E8\u05E0\u05D9 \u05E4\u05E8\u05D2\u05D5\u05D5\u05D0\u05D9",
        "symbol-alt-narrow": "\u20B2"
      },
      QAR: {
        displayName: "\u05E8\u05D9\u05D0\u05DC \u05E7\u05D8\u05D0\u05E8\u05D9",
        "displayName-count-other": "\u05E8\u05D9\u05D0\u05DC \u05E7\u05D8\u05D0\u05E8\u05D9"
      },
      ROL: {
        displayName: "\u05DC\u05D0\u05D5 \u05E8\u05D5\u05DE\u05E0\u05D9 \u05D9\u05E9\u05DF",
        "displayName-count-other": "\u05DC\u05D0\u05D5 \u05E8\u05D5\u05DE\u05E0\u05D9 \u05D9\u05E9\u05DF"
      },
      RON: {
        displayName: "\u05DC\u05D0\u05D5 \u05E8\u05D5\u05DE\u05E0\u05D9",
        "displayName-count-other": "\u05DC\u05D0\u05D5 \u05E8\u05D5\u05DE\u05E0\u05D9",
        "symbol-alt-narrow": "lei"
      },
      RSD: {
        displayName: "\u05D3\u05D9\u05E0\u05E8 \u05E1\u05E8\u05D1\u05D9",
        "displayName-count-other": "\u05D3\u05D9\u05E0\u05E8 \u05E1\u05E8\u05D1\u05D9"
      },
      RUB: {
        displayName: "\u05E8\u05D5\u05D1\u05DC \u05E8\u05D5\u05E1\u05D9",
        "displayName-count-other": "\u05E8\u05D5\u05D1\u05DC \u05E8\u05D5\u05E1\u05D9",
        "symbol-alt-narrow": "\u20BD",
        "symbol-alt-variant": "\u20BD"
      },
      RUR: {
        displayName: "\u05E8\u05D5\u05D1\u05DC \u05E8\u05D5\u05E1\u05D9 (1991 \u2013 1998)",
        "displayName-count-other": "\u05E8\u05D5\u05D1\u05DC \u05E8\u05D5\u05E1\u05D9 (1991 \u2013 1998)"
      },
      RWF: {
        displayName: "\u05E4\u05E8\u05E0\u05E7 \u05E8\u05D5\u05D0\u05E0\u05D3\u05D9",
        "displayName-count-other": "\u05E4\u05E8\u05E0\u05E7 \u05E8\u05D5\u05D0\u05E0\u05D3\u05D9",
        "symbol-alt-narrow": "RF"
      },
      SAR: {
        displayName: "\u05E8\u05D9\u05D0\u05DC \u05E1\u05E2\u05D5\u05D3\u05D9",
        "displayName-count-other": "\u05E8\u05D9\u05D0\u05DC \u05E1\u05E2\u05D5\u05D3\u05D9",
        "symbol-alt-variant": "\u20C1"
      },
      SBD: {
        displayName: "\u05D3\u05D5\u05DC\u05E8 \u05D0\u05D9\u05D9 \u05E9\u05DC\u05DE\u05D4",
        "displayName-count-other": "\u05D3\u05D5\u05DC\u05E8 \u05D0\u05D9\u05D9 \u05E9\u05DC\u05DE\u05D4",
        "symbol-alt-narrow": "$"
      },
      SCR: {
        displayName: "\u05E8\u05D5\u05E4\u05D9 \u05E1\u05D9\u05D9\u05E9\u05DC\u05D9",
        "displayName-count-other": "\u05E8\u05D5\u05E4\u05D9 \u05E1\u05D9\u05D9\u05E9\u05DC\u05D9"
      },
      SDD: {
        displayName: "\u05D3\u05D9\u05E0\u05E8 \u05E1\u05D5\u05D3\u05E0\u05D9",
        "displayName-count-other": "\u05D3\u05D9\u05E0\u05E8 \u05E1\u05D5\u05D3\u05E0\u05D9"
      },
      SDG: {
        displayName: "\u05DC\u05D9\u05E8\u05D4 \u05E1\u05D5\u05D3\u05E0\u05D9\u05EA",
        "displayName-count-other": "\u05DC\u05D9\u05E8\u05D4 \u05E1\u05D5\u05D3\u05E0\u05D9\u05EA"
      },
      SDP: {
        displayName: "\u05DC\u05D9\u05E8\u05D4 \u05E1\u05D5\u05D3\u05E0\u05D9\u05EA (1957\u20131998)",
        "displayName-count-other": "\u05DC\u05D9\u05E8\u05D4 \u05E1\u05D5\u05D3\u05E0\u05D9\u05EA (1957\u20131998)"
      },
      SEK: {
        displayName: "\u05DB\u05EA\u05E8 \u05E9\u05D5\u05D5\u05D3\u05D9",
        "displayName-count-other": "\u05DB\u05EA\u05E8 \u05E9\u05D5\u05D5\u05D3\u05D9",
        "symbol-alt-narrow": "kr"
      },
      SGD: {
        displayName: "\u05D3\u05D5\u05DC\u05E8 \u05E1\u05D9\u05E0\u05D2\u05E4\u05D5\u05E8\u05D9",
        "displayName-count-other": "\u05D3\u05D5\u05DC\u05E8 \u05E1\u05D9\u05E0\u05D2\u05E4\u05D5\u05E8\u05D9",
        "symbol-alt-narrow": "$"
      },
      SHP: {
        displayName: "\u05E4\u05D0\u05D5\u05E0\u05D3 \u05E1\u05E0\u05D8 \u05D4\u05DC\u05E0\u05D9",
        "displayName-count-other": "\u05E4\u05D0\u05D5\u05E0\u05D3 \u05E1\u05E0\u05D8 \u05D4\u05DC\u05E0\u05D9",
        "symbol-alt-narrow": "\xA3"
      },
      SIT: {
        displayName: "\u05D8\u05D5\u05DC\u05D0\u05E8 \u05E1\u05DC\u05D5\u05D1\u05E0\u05D9",
        "displayName-count-other": "\u05D8\u05D5\u05DC\u05D0\u05E8 \u05E1\u05DC\u05D5\u05D1\u05E0\u05D9"
      },
      SKK: {
        displayName: "\u05E7\u05D5\u05E8\u05D5\u05E0\u05D4 \u05E1\u05DC\u05D5\u05D1\u05E7\u05D9",
        "displayName-count-other": "\u05E7\u05D5\u05E8\u05D5\u05E0\u05D4 \u05E1\u05DC\u05D5\u05D1\u05E7\u05D9"
      },
      SLE: {
        displayName: "\u05DC\u05D9\u05D0\u05D5\u05DF \u05E1\u05D9\u05D9\u05E8\u05D4 \u05DC\u05D0\u05D5\u05E0\u05D9",
        "displayName-count-other": "\u05DC\u05D9\u05D0\u05D5\u05DF \u05E1\u05D9\u05D9\u05E8\u05D4 \u05DC\u05D0\u05D5\u05E0\u05D9"
      },
      SLL: {
        displayName: "\u05DC\u05D9\u05D0\u05D5\u05DF \u05E1\u05D9\u05D9\u05E8\u05D4 \u05DC\u05D0\u05D5\u05E0\u05D9 - 1964-2022",
        "displayName-count-other": "\u05DC\u05D9\u05D0\u05D5\u05DF \u05E1\u05D9\u05D9\u05E8\u05D4 \u05DC\u05D0\u05D5\u05E0\u05D9 - 1964-2022"
      },
      SOS: {
        displayName: "\u05E9\u05D9\u05DC\u05D9\u05E0\u05D2 \u05E1\u05D5\u05DE\u05DC\u05D9",
        "displayName-count-other": "\u05E9\u05D9\u05DC\u05D9\u05E0\u05D2 \u05E1\u05D5\u05DE\u05DC\u05D9"
      },
      SRD: {
        displayName: "\u05D3\u05D5\u05DC\u05E8 \u05E1\u05D5\u05E8\u05D9\u05E0\u05D0\u05DE\u05D9",
        "displayName-count-other": "\u05D3\u05D5\u05DC\u05E8 \u05E1\u05D5\u05E8\u05D9\u05E0\u05D0\u05DE\u05D9",
        "symbol-alt-narrow": "$"
      },
      SRG: {
        displayName: "\u05D2\u05D9\u05DC\u05D3\u05E8 \u05E1\u05D5\u05E8\u05D9\u05E0\u05D0\u05DE\u05D9",
        "displayName-count-other": "\u05D2\u05D9\u05DC\u05D3\u05E8 \u05E1\u05D5\u05E8\u05D9\u05E0\u05D0\u05DE\u05D9"
      },
      SSP: {
        displayName: "\u05DC\u05D9\u05E8\u05D4 \u05D3\u05E8\u05D5\u05DD-\u05E1\u05D5\u05D3\u05E0\u05D9\u05EA",
        "displayName-count-other": "\u05DC\u05D9\u05E8\u05D4 \u05D3\u05E8\u05D5\u05DD-\u05E1\u05D5\u05D3\u05E0\u05D9\u05EA",
        "symbol-alt-narrow": "\xA3"
      },
      STD: {
        displayName: "\u05D3\u05D5\u05D1\u05E8\u05D4 \u05E9\u05DC \u05E1\u05DF \u05D8\u05D5\u05DE\u05D4 \u05D5\u05E4\u05E8\u05D9\u05E0\u05E1\u05D9\u05E4\u05D4 (1977\u20132017)",
        "displayName-count-other": "\u05D3\u05D5\u05D1\u05E8\u05D4 \u05E9\u05DC \u05E1\u05DF \u05D8\u05D5\u05DE\u05D4 \u05D5\u05E4\u05E8\u05D9\u05E0\u05E1\u05D9\u05E4\u05D4 (1977\u20132017)"
      },
      STN: {
        displayName: "\u05D3\u05D5\u05D1\u05E8\u05D4 \u05E9\u05DC \u05E1\u05D0\u05D5 \u05D8\u05D5\u05DE\u05D4 \u05D5\u05E4\u05E8\u05D9\u05E0\u05E1\u05D9\u05E4\u05D4",
        "displayName-count-other": "\u05D3\u05D5\u05D1\u05E8\u05D4 \u05E9\u05DC \u05E1\u05D0\u05D5 \u05D8\u05D5\u05DE\u05D4 \u05D5\u05E4\u05E8\u05D9\u05E0\u05E1\u05D9\u05E4\u05D4",
        "symbol-alt-narrow": "Db"
      },
      SUR: {
        displayName: "\u05E8\u05D5\u05D1\u05DC \u05E1\u05D5\u05D1\u05D9\u05D9\u05D8\u05D9",
        "displayName-count-other": "\u05E8\u05D5\u05D1\u05DC \u05E1\u05D5\u05D1\u05D9\u05D9\u05D8\u05D9"
      },
      SVC: {
        displayName: "\u05E7\u05D5\u05DC\u05D5\u05DF \u05E1\u05DC\u05D1\u05D3\u05D5\u05E8\u05D9",
        "displayName-count-one": "\u05E7\u05D5\u05DC\u05D5\u05DF \u05E1\u05DC\u05D1\u05D3\u05D5\u05E8\u05D9",
        "displayName-count-two": "\u05E7\u05D5\u05DC\u05D5\u05E0\u05D9\u05DD \u05E1\u05DC\u05D1\u05D3\u05D5\u05E8\u05D9\u05D9\u05DD",
        "displayName-count-many": "\u05E7\u05D5\u05DC\u05D5\u05DF \u05E1\u05DC\u05D1\u05D3\u05D5\u05E8\u05D9",
        "displayName-count-other": "\u05E7\u05D5\u05DC\u05D5\u05E0\u05D9\u05DD \u05E1\u05DC\u05D1\u05D3\u05D5\u05E8\u05D9\u05D9\u05DD"
      },
      SYP: {
        displayName: "\u05DC\u05D9\u05E8\u05D4 \u05E1\u05D5\u05E8\u05D9\u05EA",
        "displayName-count-one": "\u05DC\u05D9\u05E8\u05D4 \u05E1\u05D5\u05E8\u05D9\u05EA",
        "displayName-count-two": "\u05DC\u05D9\u05E8\u05D5\u05EA \u05E1\u05D5\u05E8\u05D9\u05D5\u05EA",
        "displayName-count-other": "\u05DC\u05D9\u05E8\u05D5\u05EA \u05E1\u05D5\u05E8\u05D9\u05D5\u05EA",
        "symbol-alt-narrow": "\xA3"
      },
      SZL: {
        displayName: "\u05DC\u05D9\u05DC\u05E0\u05D2\u05E0\u05D9 \u05E1\u05D5\u05D5\u05D6\u05D9\u05DC\u05E0\u05D3\u05D9",
        "displayName-count-other": "\u05DC\u05D9\u05DC\u05E0\u05D2\u05E0\u05D9 \u05E1\u05D5\u05D5\u05D6\u05D9\u05DC\u05E0\u05D3\u05D9"
      },
      THB: {
        displayName: "\u05D1\u05D4\u05D8 \u05EA\u05D0\u05D9\u05DC\u05E0\u05D3\u05D9",
        "displayName-count-other": "\u05D1\u05D4\u05D8 \u05EA\u05D0\u05D9\u05DC\u05E0\u05D3\u05D9",
        symbol: "\u0E3F",
        "symbol-alt-narrow": "\u0E3F"
      },
      TJS: {
        displayName: "\u05E1\u05D5\u05DE\u05D5\u05E0\u05D9 \u05D8\u05D2\u05F3\u05E7\u05D9\u05E1\u05D8\u05E0\u05D9",
        "displayName-count-other": "\u05E1\u05D5\u05DE\u05D5\u05E0\u05D9 \u05D8\u05D2\u05F3\u05E7\u05D9\u05E1\u05D8\u05E0\u05D9"
      },
      TMM: {
        displayName: "\u05DE\u05E0\u05D0\u05D8 \u05D8\u05D5\u05E8\u05E7\u05DE\u05D0\u05E0\u05D9",
        "displayName-count-other": "\u05DE\u05E0\u05D0\u05D8 \u05D8\u05D5\u05E8\u05E7\u05DE\u05D0\u05E0\u05D9"
      },
      TMT: {
        displayName: "\u05DE\u05D0\u05E0\u05D0\u05D8 \u05D8\u05D5\u05E8\u05E7\u05DE\u05E0\u05D9",
        "displayName-count-other": "\u05DE\u05D0\u05E0\u05D0\u05D8 \u05D8\u05D5\u05E8\u05E7\u05DE\u05E0\u05D9"
      },
      TND: {
        displayName: "\u05D3\u05D9\u05E0\u05E8 \u05D8\u05D5\u05E0\u05D9\u05E1\u05D0\u05D9",
        "displayName-count-other": "\u05D3\u05D9\u05E0\u05E8 \u05D8\u05D5\u05E0\u05D9\u05E1\u05D0\u05D9"
      },
      TOP: {
        displayName: "\u05E4\u05D0\u05E0\u05D2\u05D4 \u05D8\u05D5\u05E0\u05D2\u05D9",
        "displayName-count-other": "\u05E4\u05D0\u05E0\u05D2\u05D4 \u05D8\u05D5\u05E0\u05D2\u05D9",
        "symbol-alt-narrow": "T$"
      },
      TPE: {
        displayName: "\u05D0\u05E1\u05E7\u05D5\u05D3\u05D5 \u05D8\u05D9\u05DE\u05D5\u05E8\u05D0\u05D9",
        "displayName-count-other": "\u05D0\u05E1\u05E7\u05D5\u05D3\u05D5 \u05D8\u05D9\u05DE\u05D5\u05E8\u05D0\u05D9"
      },
      TRL: {
        displayName: "\u05DC\u05D9\u05E8\u05D4 \u05D8\u05D5\u05E8\u05E7\u05D9\u05EA",
        "displayName-count-other": "\u05DC\u05D9\u05E8\u05D4 \u05D8\u05D5\u05E8\u05E7\u05D9\u05EA"
      },
      TRY: {
        displayName: "\u05DC\u05D9\u05E8\u05D4 \u05D8\u05D5\u05E8\u05E7\u05D9\u05EA \u05D7\u05D3\u05E9\u05D4",
        "displayName-count-one": "\u05DC\u05D9\u05E8\u05D4 \u05D8\u05D5\u05E8\u05E7\u05D9\u05EA \u05D7\u05D3\u05E9\u05D4",
        "displayName-count-two": "\u05DC\u05D9\u05E8\u05D5\u05EA \u05D8\u05D5\u05E8\u05E7\u05D9\u05D5\u05EA",
        "displayName-count-other": "\u05DC\u05D9\u05E8\u05D5\u05EA \u05D8\u05D5\u05E8\u05E7\u05D9\u05D5\u05EA",
        "symbol-alt-narrow": "\u20BA",
        "symbol-alt-variant": "TL"
      },
      TTD: {
        displayName: "\u05D3\u05D5\u05DC\u05E8 \u05D8\u05E8\u05D9\u05E0\u05D9\u05D3\u05D3\u05D9",
        "displayName-count-other": "\u05D3\u05D5\u05DC\u05E8 \u05D8\u05E8\u05D9\u05E0\u05D9\u05D3\u05D3\u05D9",
        "symbol-alt-narrow": "$"
      },
      TWD: {
        displayName: "\u05D3\u05D5\u05DC\u05E8 \u05D8\u05D9\u05D9\u05D5\u05D5\u05D0\u05E0\u05D9 \u05D7\u05D3\u05E9",
        "displayName-count-other": "\u05D3\u05D5\u05DC\u05E8 \u05D8\u05D9\u05D9\u05D5\u05D5\u05D0\u05E0\u05D9 \u05D7\u05D3\u05E9",
        symbol: "NT$",
        "symbol-alt-narrow": "NT$"
      },
      TZS: {
        displayName: "\u05E9\u05D9\u05DC\u05D9\u05E0\u05D2 \u05D8\u05E0\u05D6\u05E0\u05D9",
        "displayName-count-other": "\u05E9\u05D9\u05DC\u05D9\u05E0\u05D2 \u05D8\u05E0\u05D6\u05E0\u05D9"
      },
      UAH: {
        displayName: "\u05D4\u05E8\u05D9\u05D1\u05E0\u05D4 \u05D0\u05D5\u05E7\u05E8\u05D0\u05D9\u05E0\u05D9",
        "displayName-count-other": "\u05D4\u05E8\u05D9\u05D1\u05E0\u05D4 \u05D0\u05D5\u05E7\u05E8\u05D0\u05D9\u05E0\u05D9",
        "symbol-alt-narrow": "\u20B4"
      },
      UGS: {
        displayName: "\u05E9\u05D9\u05DC\u05D9\u05E0\u05D2 \u05D0\u05D5\u05D2\u05E0\u05D3\u05D9 (1966 \u2013 1987)",
        "displayName-count-other": "\u05E9\u05D9\u05DC\u05D9\u05E0\u05D2 \u05D0\u05D5\u05D2\u05E0\u05D3\u05D9 (1966 \u2013 1987)"
      },
      UGX: {
        displayName: "\u05E9\u05D9\u05DC\u05D9\u05E0\u05D2 \u05D0\u05D5\u05D2\u05E0\u05D3\u05D9",
        "displayName-count-other": "\u05E9\u05D9\u05DC\u05D9\u05E0\u05D2 \u05D0\u05D5\u05D2\u05E0\u05D3\u05D9"
      },
      USD: {
        displayName: "\u05D3\u05D5\u05DC\u05E8 \u05D0\u05DE\u05E8\u05D9\u05E7\u05D0\u05D9",
        "displayName-count-other": "\u05D3\u05D5\u05DC\u05E8 \u05D0\u05DE\u05E8\u05D9\u05E7\u05D0\u05D9",
        symbol: "$",
        "symbol-alt-narrow": "$"
      },
      USN: {
        displayName: "\u05D3\u05D5\u05DC\u05E8 \u05D0\u05DE\u05E8\u05D9\u05E7\u05D0\u05D9 (\u05D4\u05D9\u05D5\u05DD \u05D4\u05D1\u05D0)",
        "displayName-count-other": "\u05D3\u05D5\u05DC\u05E8 \u05D0\u05DE\u05E8\u05D9\u05E7\u05D0\u05D9 (\u05D4\u05D9\u05D5\u05DD \u05D4\u05D1\u05D0)"
      },
      USS: {
        displayName: "\u05D3\u05D5\u05DC\u05E8 \u05D0\u05DE\u05E8\u05D9\u05E7\u05D0\u05D9 (\u05D4\u05D9\u05D5\u05DD \u05D4\u05D6\u05D4)",
        "displayName-count-other": "\u05D3\u05D5\u05DC\u05E8 \u05D0\u05DE\u05E8\u05D9\u05E7\u05D0\u05D9 (\u05D4\u05D9\u05D5\u05DD \u05D4\u05D6\u05D4)"
      },
      UYU: {
        displayName: "\u05E4\u05E1\u05D5 \u05D0\u05D5\u05E8\u05D5\u05D2\u05D5\u05D5\u05D0\u05D9",
        "displayName-count-other": "\u05E4\u05E1\u05D5 \u05D0\u05D5\u05E8\u05D5\u05D2\u05D5\u05D5\u05D0\u05D9",
        "symbol-alt-narrow": "$"
      },
      UZS: {
        displayName: "\u05E1\u05D5\u05DD \u05D0\u05D5\u05D6\u05D1\u05E7\u05D9",
        "displayName-count-other": "\u05E1\u05D5\u05DD \u05D0\u05D5\u05D6\u05D1\u05E7\u05D9"
      },
      VEB: {
        displayName: "\u05D1\u05D5\u05DC\u05D9\u05D1\u05E8 \u05D5\u05E0\u05E6\u05D5\u05D0\u05DC\u05D9 (1871\u20132008)",
        "displayName-count-other": "\u05D1\u05D5\u05DC\u05D9\u05D1\u05E8 \u05D5\u05E0\u05E6\u05D5\u05D0\u05DC\u05D9 (1871\u20132008)"
      },
      VEF: {
        displayName: "\u05D1\u05D5\u05DC\u05D9\u05D1\u05E8 \u05D5\u05E0\u05E6\u05D5\u05D0\u05DC\u05D9 (2008\u20132018)",
        "displayName-count-other": "\u05D1\u05D5\u05DC\u05D9\u05D1\u05E8 \u05D5\u05E0\u05E6\u05D5\u05D0\u05DC\u05D9 (2008\u20132018)",
        "symbol-alt-narrow": "Bs"
      },
      VES: {
        displayName: "\u05D1\u05D5\u05DC\u05D9\u05D1\u05E8 \u05D5\u05E0\u05E6\u05D5\u05D0\u05DC\u05D9",
        "displayName-count-other": "\u05D1\u05D5\u05DC\u05D9\u05D1\u05E8 \u05D5\u05E0\u05E6\u05D5\u05D0\u05DC\u05D9"
      },
      VND: {
        displayName: "\u05D3\u05D5\u05E0\u05D2 \u05D5\u05D9\u05D9\u05D8\u05E0\u05D0\u05DE\u05D9",
        "displayName-count-other": "\u05D3\u05D5\u05E0\u05D2 \u05D5\u05D9\u05D9\u05D8\u05E0\u05D0\u05DE\u05D9",
        symbol: "\u20AB",
        "symbol-alt-narrow": "\u20AB"
      },
      VUV: {
        displayName: "\u05D5\u05D0\u05D8\u05D5 \u05E9\u05DC \u05D5\u05E0\u05D5\u05D0\u05D8\u05D5",
        "displayName-count-other": "\u05D5\u05D0\u05D8\u05D5 \u05E9\u05DC \u05D5\u05E0\u05D5\u05D0\u05D8\u05D5"
      },
      WST: {
        displayName: "\u05D8\u05D0\u05DC\u05D4 \u05E1\u05DE\u05D5\u05D0\u05D9",
        "displayName-count-other": "\u05D8\u05D0\u05DC\u05D4 \u05E1\u05DE\u05D5\u05D0\u05D9"
      },
      XAF: {
        displayName: "\u05E4\u05E8\u05E0\u05E7 CFA \u05DE\u05E8\u05DB\u05D6 \u05D0\u05E4\u05E8\u05D9\u05E7\u05E0\u05D9",
        "displayName-count-other": "\u05E4\u05E8\u05E0\u05E7 CFA \u05DE\u05E8\u05DB\u05D6 \u05D0\u05E4\u05E8\u05D9\u05E7\u05E0\u05D9",
        symbol: "FCFA"
      },
      XAG: {
        displayName: "\u05DB\u05E1\u05E3",
        "displayName-count-other": "\u05DB\u05E1\u05E3"
      },
      XAU: {
        displayName: "\u05D6\u05D4\u05D1",
        "displayName-count-other": "\u05D6\u05D4\u05D1"
      },
      XCD: {
        displayName: "\u05D3\u05D5\u05DC\u05E8 \u05DE\u05D6\u05E8\u05D7 \u05E7\u05E8\u05D9\u05D1\u05D9",
        "displayName-count-other": "\u05D3\u05D5\u05DC\u05E8 \u05DE\u05D6\u05E8\u05D7 \u05E7\u05E8\u05D9\u05D1\u05D9",
        symbol: "EC$",
        "symbol-alt-narrow": "$"
      },
      XCG: {
        displayName: "\u05D2\u05D9\u05DC\u05D3\u05E8 \u05E9\u05DC \u05D4\u05E7\u05E8\u05D9\u05D1\u05D9\u05D9\u05DD",
        "displayName-count-one": "\u05D2\u05D9\u05DC\u05D3\u05E8 \u05E9\u05DC \u05D4\u05E7\u05E8\u05D9\u05D1\u05D9\u05D9\u05DD",
        "displayName-count-two": "\u05D2\u05D9\u05DC\u05D3\u05E8 \u05E9\u05DC \u05D4\u05E7\u05E8\u05D9\u05D1\u05D9\u05D9\u05DD",
        "displayName-count-other": "\u05D2\u05D9\u05DC\u05D3\u05E8 \u05E9\u05DC \u05D4\u05E7\u05E8\u05D9\u05D1\u05D9\u05D9\u05DD",
        symbol: "Cg."
      },
      XDR: {
        displayName: "\u05D6\u05DB\u05D5\u05D9\u05D5\u05EA \u05DE\u05E9\u05D9\u05DB\u05D4 \u05DE\u05D9\u05D5\u05D7\u05D3\u05D5\u05EA",
        "displayName-count-other": "\u05D6\u05DB\u05D5\u05D9\u05D5\u05EA \u05DE\u05E9\u05D9\u05DB\u05D4 \u05DE\u05D9\u05D5\u05D7\u05D3\u05D5\u05EA"
      },
      XFO: {
        displayName: "\u05E4\u05E8\u05E0\u05E7 \u05D6\u05D4\u05D1",
        "displayName-count-other": "\u05E4\u05E8\u05E0\u05E7 \u05D6\u05D4\u05D1"
      },
      XOF: {
        displayName: "\u05E4\u05E8\u05E0\u05E7 CFA \u05DE\u05E2\u05E8\u05D1 \u05D0\u05E4\u05E8\u05D9\u05E7\u05E0\u05D9",
        "displayName-count-other": "\u05E4\u05E8\u05E0\u05E7 CFA \u05DE\u05E2\u05E8\u05D1 \u05D0\u05E4\u05E8\u05D9\u05E7\u05E0\u05D9",
        symbol: "F\u202FCFA"
      },
      XPD: {
        displayName: "\u05E4\u05DC\u05D3\u05D9\u05D5\u05DD",
        "displayName-count-other": "\u05E4\u05DC\u05D3\u05D9\u05D5\u05DD"
      },
      XPF: {
        displayName: "\u05E4\u05E8\u05E0\u05E7 \u05E4\u05D5\u05DC\u05D9\u05E0\u05D6\u05D9\u05D4 \u05D4\u05E6\u05E8\u05E4\u05EA\u05D9\u05EA",
        "displayName-count-other": "\u05E4\u05E8\u05E0\u05E7 \u05E4\u05D5\u05DC\u05D9\u05E0\u05D6\u05D9\u05D4 \u05D4\u05E6\u05E8\u05E4\u05EA\u05D9\u05EA",
        symbol: "CFPF"
      },
      XPT: {
        displayName: "\u05E4\u05DC\u05D8\u05D9\u05E0\u05D4",
        "displayName-count-other": "\u05E4\u05DC\u05D8\u05D9\u05E0\u05D4"
      },
      XTS: {
        displayName: "\u05E1\u05D9\u05DE\u05D5\u05DF \u05DC\u05DE\u05D8\u05E8\u05D5\u05EA \u05D1\u05D3\u05D9\u05E7\u05D4",
        "displayName-count-other": "\u05E1\u05D9\u05DE\u05D5\u05DF \u05DC\u05DE\u05D8\u05E8\u05D5\u05EA \u05D1\u05D3\u05D9\u05E7\u05D4"
      },
      XXX: {
        displayName: "\u05DE\u05D8\u05D1\u05E2 \u05E9\u05D0\u05D9\u05E0\u05D5 \u05D9\u05D3\u05D5\u05E2",
        "displayName-count-one": "(\u05DE\u05D8\u05D1\u05E2 \u05E9\u05D0\u05D9\u05E0\u05D5 \u05D9\u05D3\u05D5\u05E2)",
        "displayName-count-two": "(\u05DE\u05D8\u05D1\u05E2 \u05E9\u05D0\u05D9\u05E0\u05D5 \u05D9\u05D3\u05D5\u05E2)",
        "displayName-count-other": "(\u05DE\u05D8\u05D1\u05E2 \u05E9\u05D0\u05D9\u05E0\u05D5 \u05D9\u05D3\u05D5\u05E2)",
        symbol: "\xA4"
      },
      YDD: {
        displayName: "\u05D3\u05D9\u05E0\u05E8 \u05EA\u05D9\u05DE\u05E0\u05D9",
        "displayName-count-other": "\u05D3\u05D9\u05E0\u05E8 \u05EA\u05D9\u05DE\u05E0\u05D9"
      },
      YER: {
        displayName: "\u05E8\u05D9\u05D0\u05DC \u05EA\u05D9\u05DE\u05E0\u05D9",
        "displayName-count-other": "\u05E8\u05D9\u05D0\u05DC \u05EA\u05D9\u05DE\u05E0\u05D9"
      },
      ZAL: {
        displayName: "\u05E8\u05D0\u05E0\u05D3 \u05D3\u05E8\u05D5\u05DD \u05D0\u05E4\u05E8\u05D9\u05E7\u05D0\u05D9 (\u05DB\u05E1\u05E4\u05D9)",
        "displayName-count-other": "\u05E8\u05D0\u05E0\u05D3 \u05D3\u05E8\u05D5\u05DD \u05D0\u05E4\u05E8\u05D9\u05E7\u05D0\u05D9 (\u05DB\u05E1\u05E4\u05D9)"
      },
      ZAR: {
        displayName: "\u05E8\u05D0\u05E0\u05D3 \u05D3\u05E8\u05D5\u05DD \u05D0\u05E4\u05E8\u05D9\u05E7\u05D0\u05D9",
        "displayName-count-other": "\u05E8\u05D0\u05E0\u05D3 \u05D3\u05E8\u05D5\u05DD \u05D0\u05E4\u05E8\u05D9\u05E7\u05D0\u05D9",
        "symbol-alt-narrow": "R"
      },
      ZMK: {
        displayName: "\u05E7\u05D5\u05D5\u05D0\u05E6\u05F3\u05D4 \u05D6\u05DE\u05D1\u05D9\u05EA (1968\u20132012)",
        "displayName-count-other": "\u05E7\u05D5\u05D5\u05D0\u05E6\u05F3\u05D4 \u05D6\u05DE\u05D1\u05D9\u05EA (1968\u20132012)"
      },
      ZMW: {
        displayName: "\u05E7\u05D5\u05D5\u05D0\u05E6\u05F3\u05D4 \u05D6\u05DE\u05D1\u05D9",
        "displayName-count-other": "\u05E7\u05D5\u05D5\u05D0\u05E6\u05F3\u05D4 \u05D6\u05DE\u05D1\u05D9",
        "symbol-alt-narrow": "ZK"
      },
      ZRN: {
        displayName: "\u05D6\u05D0\u05D9\u05E8 \u05D7\u05D3\u05E9",
        "displayName-count-other": "\u05D6\u05D0\u05D9\u05E8 \u05D7\u05D3\u05E9"
      },
      ZWD: {
        displayName: "\u05D3\u05D5\u05DC\u05E8 \u05D6\u05D9\u05DE\u05D1\u05D1\u05D5\u05D0\u05D9",
        "displayName-count-other": "\u05D3\u05D5\u05DC\u05E8 \u05D6\u05D9\u05DE\u05D1\u05D1\u05D5\u05D0\u05D9"
      },
      ZWG: {
        displayName: "\u05D6\u05D4\u05D1 \u05E9\u05DC \u05D6\u05D9\u05DE\u05D1\u05D1\u05D5\u05D0\u05D4",
        "displayName-count-one": "\u05D6\u05D4\u05D1 \u05E9\u05DC \u05D6\u05D9\u05DE\u05D1\u05D1\u05D5\u05D0\u05D4",
        "displayName-count-two": "\u05D6\u05D4\u05D1 \u05E9\u05DC \u05D6\u05D9\u05DE\u05D1\u05D1\u05D5\u05D0\u05D4",
        "displayName-count-other": "\u05D6\u05D4\u05D1 \u05E9\u05DC \u05D6\u05D9\u05DE\u05D1\u05D1\u05D5\u05D0\u05D4"
      }
    },
    localeCurrency: "ILS"
  },
  calendar: {
    patterns: {
      d: "d.M.y",
      D: "EEEE, d \u05D1MMMM y",
      m: "d \u05D1MMM",
      M: "d \u05D1MMMM",
      y: "MMM y",
      Y: "MMMM y",
      F: "EEEE, d \u05D1MMMM y H:mm:ss",
      g: "d.M.y H:mm",
      G: "d.M.y H:mm:ss",
      t: "H:mm",
      T: "H:mm:ss",
      s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
      u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
    },
    dateTimeFormats: {
      full: "{1}, {0}",
      long: "{1}, {0}",
      medium: "{1}, {0}",
      short: "{1}, {0}",
      availableFormats: {
        Bh: "h B",
        Bhm: "h:mm B",
        Bhms: "h:mm:ss B",
        d: "d",
        E: "ccc",
        EBh: "E h B",
        EBhm: "E h:mm B",
        EBhms: "E h:mm:ss B",
        Ed: "E \u05D4-d",
        Eh: "E h\u202Fa",
        Ehm: "E h:mm a",
        EHm: "E H:mm",
        Ehms: "E h:mm:ss a",
        EHms: "E H:mm:ss",
        Gy: "y G",
        GyM: "G y-MM",
        GyMd: "d/M/y G",
        GyMEd: "G y-MM-dd, E",
        GyMMM: "MMM y G",
        GyMMMd: "d \u05D1MMM y G",
        GyMMMEd: "E, d \u05D1MMM y G",
        h: "\u200Fh a",
        H: "H",
        hm: "h:mm a",
        Hm: "H:mm",
        hms: "h:mm:ss a",
        Hms: "H:mm:ss",
        hmsv: "h:mm:ss a v",
        Hmsv: "HH:mm:ss v",
        hmv: "h:mm a v",
        Hmv: "HH:mm v",
        hv: "h\u202Fa v",
        Hv: "HH'h' v",
        M: "L",
        Md: "d.M",
        MEd: "E, d.M",
        MMM: "LLL",
        MMMd: "d \u05D1MMM",
        MMMEd: "E, d \u05D1MMM",
        MMMMd: "d \u05D1MMMM",
        "MMMMW-count-one": "\u05E9\u05D1\u05D5\u05E2 W \u05D1MMMM",
        "MMMMW-count-two": "\u05E9\u05D1\u05D5\u05E2 W \u05D1MMMM",
        "MMMMW-count-other": "\u05E9\u05D1\u05D5\u05E2 W \u05D1MMMM",
        ms: "mm:ss",
        y: "y",
        yM: "M.y",
        yMd: "d.M.y",
        yMEd: "E, d.M.y",
        yMM: "M.y",
        yMMM: "MMM y",
        yMMMd: "d \u05D1MMM y",
        yMMMEd: "E, d \u05D1MMM y",
        yMMMM: "MMMM y",
        yQQQ: "QQQ y",
        yQQQQ: "QQQQ y",
        "yw-count-one": "\u05E9\u05D1\u05D5\u05E2 w \u05D1\u05E9\u05E0\u05EA Y",
        "yw-count-two": "\u05E9\u05D1\u05D5\u05E2 w \u05D1\u05E9\u05E0\u05EA Y",
        "yw-count-other": "\u05E9\u05D1\u05D5\u05E2 w \u05D1\u05E9\u05E0\u05EA Y"
      }
    },
    timeFormats: {
      full: "H:mm:ss zzzz",
      long: "H:mm:ss z",
      medium: "H:mm:ss",
      short: "H:mm"
    },
    dateFormats: {
      full: "EEEE, d \u05D1MMMM y",
      long: "d \u05D1MMMM y",
      medium: "d \u05D1MMM y",
      short: "d.M.y"
    },
    days: {
      format: {
        abbreviated: [
          "\u05D9\u05D5\u05DD \u05D0\u05F3",
          "\u05D9\u05D5\u05DD \u05D1\u05F3",
          "\u05D9\u05D5\u05DD \u05D2\u05F3",
          "\u05D9\u05D5\u05DD \u05D3\u05F3",
          "\u05D9\u05D5\u05DD \u05D4\u05F3",
          "\u05D9\u05D5\u05DD \u05D5\u05F3",
          "\u05E9\u05D1\u05EA"
        ],
        narrow: [
          "\u05D0\u05F3",
          "\u05D1\u05F3",
          "\u05D2\u05F3",
          "\u05D3\u05F3",
          "\u05D4\u05F3",
          "\u05D5\u05F3",
          "\u05E9\u05F3"
        ],
        short: [
          "\u05D0\u05F3",
          "\u05D1\u05F3",
          "\u05D2\u05F3",
          "\u05D3\u05F3",
          "\u05D4\u05F3",
          "\u05D5\u05F3",
          "\u05E9\u05F3"
        ],
        wide: [
          "\u05D9\u05D5\u05DD \u05E8\u05D0\u05E9\u05D5\u05DF",
          "\u05D9\u05D5\u05DD \u05E9\u05E0\u05D9",
          "\u05D9\u05D5\u05DD \u05E9\u05DC\u05D9\u05E9\u05D9",
          "\u05D9\u05D5\u05DD \u05E8\u05D1\u05D9\u05E2\u05D9",
          "\u05D9\u05D5\u05DD \u05D7\u05DE\u05D9\u05E9\u05D9",
          "\u05D9\u05D5\u05DD \u05E9\u05D9\u05E9\u05D9",
          "\u05D9\u05D5\u05DD \u05E9\u05D1\u05EA"
        ]
      },
      "stand-alone": {
        abbreviated: [
          "\u05D9\u05D5\u05DD \u05D0\u05F3",
          "\u05D9\u05D5\u05DD \u05D1\u05F3",
          "\u05D9\u05D5\u05DD \u05D2\u05F3",
          "\u05D9\u05D5\u05DD \u05D3\u05F3",
          "\u05D9\u05D5\u05DD \u05D4\u05F3",
          "\u05D9\u05D5\u05DD \u05D5\u05F3",
          "\u05E9\u05D1\u05EA"
        ],
        narrow: [
          "\u05D0\u05F3",
          "\u05D1\u05F3",
          "\u05D2\u05F3",
          "\u05D3\u05F3",
          "\u05D4\u05F3",
          "\u05D5\u05F3",
          "\u05E9\u05F3"
        ],
        short: [
          "\u05D0\u05F3",
          "\u05D1\u05F3",
          "\u05D2\u05F3",
          "\u05D3\u05F3",
          "\u05D4\u05F3",
          "\u05D5\u05F3",
          "\u05E9\u05F3"
        ],
        wide: [
          "\u05D9\u05D5\u05DD \u05E8\u05D0\u05E9\u05D5\u05DF",
          "\u05D9\u05D5\u05DD \u05E9\u05E0\u05D9",
          "\u05D9\u05D5\u05DD \u05E9\u05DC\u05D9\u05E9\u05D9",
          "\u05D9\u05D5\u05DD \u05E8\u05D1\u05D9\u05E2\u05D9",
          "\u05D9\u05D5\u05DD \u05D7\u05DE\u05D9\u05E9\u05D9",
          "\u05D9\u05D5\u05DD \u05E9\u05D9\u05E9\u05D9",
          "\u05D9\u05D5\u05DD \u05E9\u05D1\u05EA"
        ]
      }
    },
    months: {
      format: {
        abbreviated: [
          "\u05D9\u05E0\u05D5\u05F3",
          "\u05E4\u05D1\u05E8\u05F3",
          "\u05DE\u05E8\u05E5",
          "\u05D0\u05E4\u05E8\u05F3",
          "\u05DE\u05D0\u05D9",
          "\u05D9\u05D5\u05E0\u05D9",
          "\u05D9\u05D5\u05DC\u05D9",
          "\u05D0\u05D5\u05D2\u05F3",
          "\u05E1\u05E4\u05D8\u05F3",
          "\u05D0\u05D5\u05E7\u05F3",
          "\u05E0\u05D5\u05D1\u05F3",
          "\u05D3\u05E6\u05DE\u05F3"
        ],
        narrow: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12"
        ],
        wide: [
          "\u05D9\u05E0\u05D5\u05D0\u05E8",
          "\u05E4\u05D1\u05E8\u05D5\u05D0\u05E8",
          "\u05DE\u05E8\u05E5",
          "\u05D0\u05E4\u05E8\u05D9\u05DC",
          "\u05DE\u05D0\u05D9",
          "\u05D9\u05D5\u05E0\u05D9",
          "\u05D9\u05D5\u05DC\u05D9",
          "\u05D0\u05D5\u05D2\u05D5\u05E1\u05D8",
          "\u05E1\u05E4\u05D8\u05DE\u05D1\u05E8",
          "\u05D0\u05D5\u05E7\u05D8\u05D5\u05D1\u05E8",
          "\u05E0\u05D5\u05D1\u05DE\u05D1\u05E8",
          "\u05D3\u05E6\u05DE\u05D1\u05E8"
        ]
      },
      "stand-alone": {
        abbreviated: [
          "\u05D9\u05E0\u05D5\u05F3",
          "\u05E4\u05D1\u05E8\u05F3",
          "\u05DE\u05E8\u05E5",
          "\u05D0\u05E4\u05E8\u05F3",
          "\u05DE\u05D0\u05D9",
          "\u05D9\u05D5\u05E0\u05D9",
          "\u05D9\u05D5\u05DC\u05D9",
          "\u05D0\u05D5\u05D2\u05F3",
          "\u05E1\u05E4\u05D8\u05F3",
          "\u05D0\u05D5\u05E7\u05F3",
          "\u05E0\u05D5\u05D1\u05F3",
          "\u05D3\u05E6\u05DE\u05F3"
        ],
        narrow: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12"
        ],
        wide: [
          "\u05D9\u05E0\u05D5\u05D0\u05E8",
          "\u05E4\u05D1\u05E8\u05D5\u05D0\u05E8",
          "\u05DE\u05E8\u05E5",
          "\u05D0\u05E4\u05E8\u05D9\u05DC",
          "\u05DE\u05D0\u05D9",
          "\u05D9\u05D5\u05E0\u05D9",
          "\u05D9\u05D5\u05DC\u05D9",
          "\u05D0\u05D5\u05D2\u05D5\u05E1\u05D8",
          "\u05E1\u05E4\u05D8\u05DE\u05D1\u05E8",
          "\u05D0\u05D5\u05E7\u05D8\u05D5\u05D1\u05E8",
          "\u05E0\u05D5\u05D1\u05DE\u05D1\u05E8",
          "\u05D3\u05E6\u05DE\u05D1\u05E8"
        ]
      }
    },
    quarters: {
      format: {
        abbreviated: [
          "Q1",
          "Q2",
          "Q3",
          "Q4"
        ],
        narrow: [
          "1",
          "2",
          "3",
          "4"
        ],
        wide: [
          "\u05E8\u05D1\u05E2\u05D5\u05DF 1",
          "\u05E8\u05D1\u05E2\u05D5\u05DF 2",
          "\u05E8\u05D1\u05E2\u05D5\u05DF 3",
          "\u05E8\u05D1\u05E2\u05D5\u05DF 4"
        ]
      },
      "stand-alone": {
        abbreviated: [
          "Q1",
          "Q2",
          "Q3",
          "Q4"
        ],
        narrow: [
          "1",
          "2",
          "3",
          "4"
        ],
        wide: [
          "\u05E8\u05D1\u05E2\u05D5\u05DF 1",
          "\u05E8\u05D1\u05E2\u05D5\u05DF 2",
          "\u05E8\u05D1\u05E2\u05D5\u05DF 3",
          "\u05E8\u05D1\u05E2\u05D5\u05DF 4"
        ]
      }
    },
    dayPeriods: {
      format: {
        abbreviated: {
          midnight: "\u05D7\u05E6\u05D5\u05EA",
          am: "AM",
          pm: "PM",
          morning1: "\u05D1\u05D5\u05E7\u05E8",
          afternoon1: "\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD",
          afternoon2: "\u05D0\u05D7\u05E8 \u05D4\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD",
          evening1: "\u05E2\u05E8\u05D1",
          night1: "\u05DC\u05D9\u05DC\u05D4",
          night2: "\u05DC\u05E4\u05E0\u05D5\u05EA \u05D1\u05D5\u05E7\u05E8"
        },
        narrow: {
          midnight: "\u05D7\u05E6\u05D5\u05EA",
          am: "AM",
          pm: "PM",
          morning1: "\u05D1\u05D1\u05D5\u05E7\u05E8",
          afternoon1: "\u05D1\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD",
          afternoon2: "\u05D0\u05D7\u05D4\u05F4\u05E6",
          evening1: "\u05D1\u05E2\u05E8\u05D1",
          night1: "\u05D1\u05DC\u05D9\u05DC\u05D4",
          night2: "\u05DC\u05E4\u05E0\u05D5\u05EA \u05D1\u05D5\u05E7\u05E8"
        },
        wide: {
          midnight: "\u05D7\u05E6\u05D5\u05EA",
          am: "AM",
          pm: "PM",
          morning1: "\u05D1\u05D1\u05D5\u05E7\u05E8",
          afternoon1: "\u05D1\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD",
          afternoon2: "\u05D0\u05D7\u05E8 \u05D4\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD",
          evening1: "\u05D1\u05E2\u05E8\u05D1",
          night1: "\u05D1\u05DC\u05D9\u05DC\u05D4",
          night2: "\u05DC\u05E4\u05E0\u05D5\u05EA \u05D1\u05D5\u05E7\u05E8"
        }
      },
      "stand-alone": {
        abbreviated: {
          midnight: "\u05D7\u05E6\u05D5\u05EA",
          am: "AM",
          pm: "PM",
          morning1: "\u05D1\u05D5\u05E7\u05E8",
          afternoon1: "\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD",
          afternoon2: "\u05D0\u05D7\u05D4\u05F4\u05E6",
          evening1: "\u05E2\u05E8\u05D1",
          night1: "\u05DC\u05D9\u05DC\u05D4",
          night2: "\u05DC\u05E4\u05E0\u05D5\u05EA \u05D1\u05D5\u05E7\u05E8"
        },
        narrow: {
          midnight: "\u05D7\u05E6\u05D5\u05EA",
          am: "\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6",
          pm: "\u05D0\u05D7\u05D4\u05F4\u05E6",
          morning1: "\u05D1\u05D5\u05E7\u05E8",
          afternoon1: "\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD",
          afternoon2: "\u05D0\u05D7\u05D4\u05F4\u05E6",
          evening1: "\u05E2\u05E8\u05D1",
          night1: "\u05DC\u05D9\u05DC\u05D4",
          night2: "\u05DC\u05E4\u05E0\u05D5\u05EA \u05D1\u05D5\u05E7\u05E8"
        },
        wide: {
          midnight: "\u05D7\u05E6\u05D5\u05EA",
          am: "AM",
          pm: "PM",
          morning1: "\u05D1\u05D5\u05E7\u05E8",
          afternoon1: "\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD",
          afternoon2: "\u05D0\u05D7\u05E8 \u05D4\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD",
          evening1: "\u05E2\u05E8\u05D1",
          night1: "\u05DC\u05D9\u05DC\u05D4",
          night2: "\u05DC\u05E4\u05E0\u05D5\u05EA \u05D1\u05D5\u05E7\u05E8"
        }
      }
    },
    eras: {
      format: {
        wide: {
          "0": "\u05DC\u05E4\u05E0\u05D9 \u05D4\u05E1\u05E4\u05D9\u05E8\u05D4",
          "1": "\u05DC\u05E1\u05E4\u05D9\u05E8\u05D4",
          "0-alt-variant": "\u05DC\u05E4\u05E0\u05D4\u05F4\u05E1",
          "1-alt-variant": "CE"
        },
        abbreviated: {
          "0": "\u05DC\u05E4\u05E0\u05D4\u05F4\u05E1",
          "1": "\u05DC\u05E1\u05E4\u05D9\u05E8\u05D4",
          "0-alt-variant": "BCE",
          "1-alt-variant": "CE"
        },
        narrow: {
          "0": "\u05DC\u05E4\u05E0\u05D9",
          "1": "\u05D0\u05D7\u05E8\u05D9\u05D9",
          "0-alt-variant": "BCE",
          "1-alt-variant": "CE"
        }
      }
    },
    gmtFormat: "GMT{0}\u200E",
    gmtZeroFormat: "GMT",
    dateFields: {
      era: {
        wide: "\u05EA\u05E7\u05D5\u05E4\u05D4",
        short: "\u05EA\u05E7\u05D5\u05E4\u05D4",
        narrow: "\u05EA\u05E7\u05D5\u05E4\u05D4"
      },
      year: {
        wide: "\u05E9\u05E0\u05D4",
        short: "\u05E9\u05E0\u05F3",
        narrow: "\u05E9\u05E0\u05F3"
      },
      quarter: {
        wide: "\u05E8\u05D1\u05E2\u05D5\u05DF",
        short: "\u05E8\u05D1\u05E2\u05F3",
        narrow: "\u05E8\u05D1\u05E2\u05F3"
      },
      month: {
        wide: "\u05D7\u05D5\u05D3\u05E9",
        short: "\u05D7\u05D5\u05F3",
        narrow: "\u05D7\u05D5\u05F3"
      },
      week: {
        wide: "\u05E9\u05D1\u05D5\u05E2",
        short: "\u05E9\u05D1\u05F3",
        narrow: "\u05E9\u05D1\u05F3"
      },
      weekOfMonth: {
        wide: "\u05D4\u05E9\u05D1\u05D5\u05E2 \u05D1\u05D7\u05D5\u05D3\u05E9",
        short: "\u05D4\u05E9\u05D1\u05D5\u05E2 \u05D1\u05D7\u05D5\u05D3\u05E9",
        narrow: "\u05D4\u05E9\u05D1\u05D5\u05E2 \u05D1\u05D7\u05D5\u05D3\u05E9"
      },
      day: {
        wide: "\u05D9\u05D5\u05DD",
        short: "\u05D9\u05D5\u05DD",
        narrow: "\u05D9\u05D5\u05DD"
      },
      dayOfYear: {
        wide: "\u05D9\u05D5\u05DD \u05D1\u05E9\u05E0\u05D4",
        short: "\u05D9\u05D5\u05DD \u05D1\u05E9\u05E0\u05D4",
        narrow: "\u05D9\u05D5\u05DD \u05D1\u05E9\u05E0\u05D4"
      },
      weekday: {
        wide: "\u05D9\u05D5\u05DD \u05D1\u05E9\u05D1\u05D5\u05E2",
        short: "\u05D9\u05D5\u05DD \u05D1\u05E9\u05D1\u05D5\u05E2",
        narrow: "\u05D9\u05D5\u05DD \u05D1\u05E9\u05D1\u05D5\u05E2"
      },
      weekdayOfMonth: {
        wide: "\u05D9\u05D5\u05DD \u05D7\u05D5\u05DC \u05D1\u05D7\u05D5\u05D3\u05E9",
        short: "\u05D9\u05D5\u05DD \u05D1\u05D7\u05D5\u05D3\u05E9",
        narrow: "\u05D9\u05D5\u05DD \u05D1\u05D7\u05D5\u05D3\u05E9"
      },
      dayperiod: {
        short: "AM/PM",
        wide: "\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6/\u05D0\u05D7\u05D4\u05F4\u05E6",
        narrow: "AM/PM"
      },
      hour: {
        wide: "\u05E9\u05E2\u05D4",
        short: "\u05E9\u05E2\u05D4",
        narrow: "\u05E9\u05E2\u05F3"
      },
      minute: {
        wide: "\u05D3\u05E7\u05D4",
        short: "\u05D3\u05E7\u05F3",
        narrow: "\u05D3\u05E7\u05F3"
      },
      second: {
        wide: "\u05E9\u05E0\u05D9\u05D9\u05D4",
        short: "\u05E9\u05E0\u05F3",
        narrow: "\u05E9\u05E0\u05F3"
      },
      zone: {
        wide: "\u05D0\u05D6\u05D5\u05E8 \u05D6\u05DE\u05DF",
        short: "\u05D0\u05D6\u05D5\u05E8",
        narrow: "\u05D0\u05D6\u05D5\u05E8"
      },
      millisecond: {
        narrow: "ms",
        short: "ms",
        wide: "\u05D0\u05DC\u05E4\u05D9\u05EA \u05E9\u05E0\u05D9\u05D9\u05D4"
      }
    }
  },
  firstDay: 0,
  weekendRange: {
    start: 5,
    end: 6
  },
  likelySubtags: {
    he: "he-Hebr-IL"
  }
});

// node_modules/@angular/common/locales/he.js
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
var u = void 0;
function plural(val) {
  const n39 = val, i30 = Math.floor(Math.abs(val)), v4 = val.toString().replace(/^[^.]*\.?/, "").length;
  if (i30 === 1 && v4 === 0 || i30 === 0 && !(v4 === 0))
    return 1;
  if (i30 === 2 && v4 === 0)
    return 2;
  return 5;
}
var he_default = ["he", [["AM", "PM"]], [["\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6", "\u05D0\u05D7\u05D4\u05F4\u05E6"], ["AM", "PM"]], [["\u05D0\u05F3", "\u05D1\u05F3", "\u05D2\u05F3", "\u05D3\u05F3", "\u05D4\u05F3", "\u05D5\u05F3", "\u05E9\u05F3"], ["\u05D9\u05D5\u05DD \u05D0\u05F3", "\u05D9\u05D5\u05DD \u05D1\u05F3", "\u05D9\u05D5\u05DD \u05D2\u05F3", "\u05D9\u05D5\u05DD \u05D3\u05F3", "\u05D9\u05D5\u05DD \u05D4\u05F3", "\u05D9\u05D5\u05DD \u05D5\u05F3", "\u05E9\u05D1\u05EA"], ["\u05D9\u05D5\u05DD \u05E8\u05D0\u05E9\u05D5\u05DF", "\u05D9\u05D5\u05DD \u05E9\u05E0\u05D9", "\u05D9\u05D5\u05DD \u05E9\u05DC\u05D9\u05E9\u05D9", "\u05D9\u05D5\u05DD \u05E8\u05D1\u05D9\u05E2\u05D9", "\u05D9\u05D5\u05DD \u05D7\u05DE\u05D9\u05E9\u05D9", "\u05D9\u05D5\u05DD \u05E9\u05D9\u05E9\u05D9", "\u05D9\u05D5\u05DD \u05E9\u05D1\u05EA"], ["\u05D0\u05F3", "\u05D1\u05F3", "\u05D2\u05F3", "\u05D3\u05F3", "\u05D4\u05F3", "\u05D5\u05F3", "\u05E9\u05F3"]], u, [["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], ["\u05D9\u05E0\u05D5\u05F3", "\u05E4\u05D1\u05E8\u05F3", "\u05DE\u05E8\u05E5", "\u05D0\u05E4\u05E8\u05F3", "\u05DE\u05D0\u05D9", "\u05D9\u05D5\u05E0\u05D9", "\u05D9\u05D5\u05DC\u05D9", "\u05D0\u05D5\u05D2\u05F3", "\u05E1\u05E4\u05D8\u05F3", "\u05D0\u05D5\u05E7\u05F3", "\u05E0\u05D5\u05D1\u05F3", "\u05D3\u05E6\u05DE\u05F3"], ["\u05D9\u05E0\u05D5\u05D0\u05E8", "\u05E4\u05D1\u05E8\u05D5\u05D0\u05E8", "\u05DE\u05E8\u05E5", "\u05D0\u05E4\u05E8\u05D9\u05DC", "\u05DE\u05D0\u05D9", "\u05D9\u05D5\u05E0\u05D9", "\u05D9\u05D5\u05DC\u05D9", "\u05D0\u05D5\u05D2\u05D5\u05E1\u05D8", "\u05E1\u05E4\u05D8\u05DE\u05D1\u05E8", "\u05D0\u05D5\u05E7\u05D8\u05D5\u05D1\u05E8", "\u05E0\u05D5\u05D1\u05DE\u05D1\u05E8", "\u05D3\u05E6\u05DE\u05D1\u05E8"]], u, [["\u05DC\u05E4\u05E0\u05D9", "\u05D0\u05D7\u05E8\u05D9\u05D9"], ["\u05DC\u05E4\u05E0\u05D4\u05F4\u05E1", "\u05DC\u05E1\u05E4\u05D9\u05E8\u05D4"], ["\u05DC\u05E4\u05E0\u05D9 \u05D4\u05E1\u05E4\u05D9\u05E8\u05D4", "\u05DC\u05E1\u05E4\u05D9\u05E8\u05D4"]], 0, [5, 6], ["d.M.y", "d \u05D1MMM y", "d \u05D1MMMM y", "EEEE, d \u05D1MMMM y"], ["H:mm", "H:mm:ss", "H:mm:ss z", "H:mm:ss zzzz"], ["{1}, {0}", u, u, u], [".", ",", ";", "%", "\u200E+", "\u200E-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\u200F#,##0.00\xA0\u200F\xA4;\u200F-#,##0.00\xA0\u200F\xA4", "#E0"], "ILS", "\u20AA", "\u05E9\u05E7\u05DC \u05D7\u05D3\u05E9", { "BYN": [u, "\u0440"], "CNY": ["\u200ECN\xA5\u200E", "\xA5"], "ILP": ["\u05DC\u05F4\u05D9"], "PHP": [u, "\u20B1"], "THB": ["\u0E3F"], "TWD": ["NT$"] }, "rtl", plural];

// node_modules/@angular/animations/fesm2022/_util-chunk.mjs
/**
 * @license Angular v22.0.0
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var LINE_START = "\n - ";
function invalidTimingValue(exp) {
  return new RuntimeError(3e3, ngDevMode && `The provided timing value "${exp}" is invalid.`);
}
function negativeStepValue() {
  return new RuntimeError(3100, ngDevMode && "Duration values below 0 are not allowed for this animation step.");
}
function negativeDelayValue() {
  return new RuntimeError(3101, ngDevMode && "Delay values below 0 are not allowed for this animation step.");
}
function invalidStyleParams(varName) {
  return new RuntimeError(3001, ngDevMode && `Unable to resolve the local animation param ${varName} in the given list of values`);
}
function invalidParamValue(varName) {
  return new RuntimeError(3003, ngDevMode && `Please provide a value for the animation param ${varName}`);
}
function invalidNodeType(nodeType) {
  return new RuntimeError(3004, ngDevMode && `Unable to resolve animation metadata node #${nodeType}`);
}
function invalidCssUnitValue(userProvidedProperty, value) {
  return new RuntimeError(3005, ngDevMode && `Please provide a CSS unit value for ${userProvidedProperty}:${value}`);
}
function invalidTrigger() {
  return new RuntimeError(3006, ngDevMode && "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))");
}
function invalidDefinition() {
  return new RuntimeError(3007, ngDevMode && "only state() and transition() definitions can sit inside of a trigger()");
}
function invalidState(metadataName, missingSubs) {
  return new RuntimeError(3008, ngDevMode && `state("${metadataName}", ...) must define default values for all the following style substitutions: ${missingSubs.join(", ")}`);
}
function invalidStyleValue(value) {
  return new RuntimeError(3002, ngDevMode && `The provided style string value ${value} is not allowed.`);
}
function invalidParallelAnimation(prop, firstStart, firstEnd, secondStart, secondEnd) {
  return new RuntimeError(3010, ngDevMode && `The CSS property "${prop}" that exists between the times of "${firstStart}ms" and "${firstEnd}ms" is also being animated in a parallel animation between the times of "${secondStart}ms" and "${secondEnd}ms"`);
}
function invalidKeyframes() {
  return new RuntimeError(3011, ngDevMode && `keyframes() must be placed inside of a call to animate()`);
}
function invalidOffset() {
  return new RuntimeError(3012, ngDevMode && `Please ensure that all keyframe offsets are between 0 and 1`);
}
function keyframeOffsetsOutOfOrder() {
  return new RuntimeError(3200, ngDevMode && `Please ensure that all keyframe offsets are in order`);
}
function keyframesMissingOffsets() {
  return new RuntimeError(3202, ngDevMode && `Not all style() steps within the declared keyframes() contain offsets`);
}
function invalidStagger() {
  return new RuntimeError(3013, ngDevMode && `stagger() can only be used inside of query()`);
}
function invalidQuery(selector) {
  return new RuntimeError(3014, ngDevMode && `\`query("${selector}")\` returned zero elements. (Use \`query("${selector}", { optional: true })\` if you wish to allow this.)`);
}
function invalidExpression(expr) {
  return new RuntimeError(3015, ngDevMode && `The provided transition expression "${expr}" is not supported`);
}
function invalidTransitionAlias(alias) {
  return new RuntimeError(3016, ngDevMode && `The transition alias value "${alias}" is not supported`);
}
function triggerBuildFailed(name, errors) {
  return new RuntimeError(3404, ngDevMode && `The animation trigger "${name}" has failed to build due to the following errors:
 - ${errors.map((err) => err.message).join("\n - ")}`);
}
function animationFailed(errors) {
  return new RuntimeError(3502, ngDevMode && `Unable to animate due to the following errors:${LINE_START}${errors.map((err) => err.message).join(LINE_START)}`);
}
function registerFailed(errors) {
  return new RuntimeError(3503, ngDevMode && `Unable to build the animation due to the following errors: ${errors.map((err) => err.message).join("\n")}`);
}
function missingOrDestroyedAnimation() {
  return new RuntimeError(3300, ngDevMode && "The requested animation doesn't exist or has already been destroyed");
}
function createAnimationFailed(errors) {
  return new RuntimeError(3504, ngDevMode && `Unable to create the animation due to the following errors:${errors.map((err) => err.message).join("\n")}`);
}
function missingPlayer(id) {
  return new RuntimeError(3301, ngDevMode && `Unable to find the timeline player referenced by ${id}`);
}
function missingTrigger(phase, name) {
  return new RuntimeError(3302, ngDevMode && `Unable to listen on the animation trigger event "${phase}" because the animation trigger "${name}" doesn't exist!`);
}
function missingEvent(name) {
  return new RuntimeError(3303, ngDevMode && `Unable to listen on the animation trigger "${name}" because the provided event is undefined!`);
}
function unsupportedTriggerEvent(phase, name) {
  return new RuntimeError(3400, ngDevMode && `The provided animation trigger event "${phase}" for the animation trigger "${name}" is not supported!`);
}
function unregisteredTrigger(name) {
  return new RuntimeError(3401, ngDevMode && `The provided animation trigger "${name}" has not been registered!`);
}
function triggerTransitionsFailed(errors) {
  return new RuntimeError(3402, ngDevMode && `Unable to process animations due to the following failed trigger transitions
 ${errors.map((err) => err.message).join("\n")}`);
}
function transitionFailed(name, errors) {
  return new RuntimeError(3505, ngDevMode && `@${name} has failed due to:
 ${errors.map((err) => err.message).join("\n- ")}`);
}
var ANIMATABLE_PROP_SET = /* @__PURE__ */ new Set(["-moz-outline-radius", "-moz-outline-radius-bottomleft", "-moz-outline-radius-bottomright", "-moz-outline-radius-topleft", "-moz-outline-radius-topright", "-ms-grid-columns", "-ms-grid-rows", "-webkit-line-clamp", "-webkit-text-fill-color", "-webkit-text-stroke", "-webkit-text-stroke-color", "accent-color", "all", "backdrop-filter", "background", "background-color", "background-position", "background-size", "block-size", "border", "border-block-end", "border-block-end-color", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-width", "border-color", "border-end-end-radius", "border-end-start-radius", "border-image-outset", "border-image-slice", "border-image-width", "border-inline-end", "border-inline-end-color", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-width", "border-left", "border-left-color", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-width", "border-start-end-radius", "border-start-start-radius", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-width", "border-width", "bottom", "box-shadow", "caret-color", "clip", "clip-path", "color", "column-count", "column-gap", "column-rule", "column-rule-color", "column-rule-width", "column-width", "columns", "filter", "flex", "flex-basis", "flex-grow", "flex-shrink", "font", "font-size", "font-size-adjust", "font-stretch", "font-variation-settings", "font-weight", "gap", "grid-column-gap", "grid-gap", "grid-row-gap", "grid-template-columns", "grid-template-rows", "height", "inline-size", "input-security", "inset", "inset-block", "inset-block-end", "inset-block-start", "inset-inline", "inset-inline-end", "inset-inline-start", "left", "letter-spacing", "line-clamp", "line-height", "margin", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "mask", "mask-border", "mask-position", "mask-size", "max-block-size", "max-height", "max-inline-size", "max-lines", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "object-position", "offset", "offset-anchor", "offset-distance", "offset-path", "offset-position", "offset-rotate", "opacity", "order", "outline", "outline-color", "outline-offset", "outline-width", "padding", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "perspective", "perspective-origin", "right", "rotate", "row-gap", "scale", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-coordinate", "scroll-snap-destination", "scrollbar-color", "shape-image-threshold", "shape-margin", "shape-outside", "tab-size", "text-decoration", "text-decoration-color", "text-decoration-thickness", "text-emphasis", "text-emphasis-color", "text-indent", "text-shadow", "text-underline-offset", "top", "transform", "transform-origin", "translate", "vertical-align", "visibility", "width", "word-spacing", "z-index", "zoom"]);
function optimizeGroupPlayer(players) {
  switch (players.length) {
    case 0:
      return new NoopAnimationPlayer();
    case 1:
      return players[0];
    default:
      return new AnimationGroupPlayer(players);
  }
}
function normalizeKeyframes$1(normalizer, keyframes, preStyles = /* @__PURE__ */ new Map(), postStyles = /* @__PURE__ */ new Map()) {
  const errors = [];
  const normalizedKeyframes = [];
  let previousOffset = -1;
  let previousKeyframe = null;
  keyframes.forEach((kf) => {
    const offset = kf.get("offset");
    const isSameOffset = offset == previousOffset;
    const normalizedKeyframe = isSameOffset && previousKeyframe || /* @__PURE__ */ new Map();
    kf.forEach((val, prop) => {
      let normalizedProp = prop;
      let normalizedValue = val;
      if (prop !== "offset") {
        normalizedProp = normalizer.normalizePropertyName(normalizedProp, errors);
        switch (normalizedValue) {
          case \u0275PRE_STYLE:
            normalizedValue = preStyles.get(prop);
            break;
          case AUTO_STYLE:
            normalizedValue = postStyles.get(prop);
            break;
          default:
            normalizedValue = normalizer.normalizeStyleValue(prop, normalizedProp, normalizedValue, errors);
            break;
        }
      }
      normalizedKeyframe.set(normalizedProp, normalizedValue);
    });
    if (!isSameOffset) {
      normalizedKeyframes.push(normalizedKeyframe);
    }
    previousKeyframe = normalizedKeyframe;
    previousOffset = offset;
  });
  if (errors.length) {
    throw animationFailed(errors);
  }
  return normalizedKeyframes;
}
function listenOnPlayer(player, eventName, event, callback) {
  switch (eventName) {
    case "start":
      player.onStart(() => callback(event && copyAnimationEvent(event, "start", player)));
      break;
    case "done":
      player.onDone(() => callback(event && copyAnimationEvent(event, "done", player)));
      break;
    case "destroy":
      player.onDestroy(() => callback(event && copyAnimationEvent(event, "destroy", player)));
      break;
  }
}
function copyAnimationEvent(e59, phaseName, player) {
  const totalTime = player.totalTime;
  const disabled = player.disabled ? true : false;
  const event = makeAnimationEvent(e59.element, e59.triggerName, e59.fromState, e59.toState, phaseName || e59.phaseName, totalTime == void 0 ? e59.totalTime : totalTime, disabled);
  const data = e59["_data"];
  if (data != null) {
    event["_data"] = data;
  }
  return event;
}
function makeAnimationEvent(element, triggerName, fromState, toState, phaseName = "", totalTime = 0, disabled) {
  return {
    element,
    triggerName,
    fromState,
    toState,
    phaseName,
    totalTime,
    disabled: !!disabled
  };
}
function getOrSetDefaultValue(map, key, defaultValue) {
  let value = map.get(key);
  if (!value) {
    map.set(key, value = defaultValue);
  }
  return value;
}
function parseTimelineCommand(command) {
  const separatorPos = command.indexOf(":");
  const id = command.substring(1, separatorPos);
  const action = command.slice(separatorPos + 1);
  return [id, action];
}
var documentElement = /* @__PURE__ */ (() => typeof document === "undefined" ? null : document.documentElement)();
function getParentElement(element) {
  const parent = element.parentNode || element.host || null;
  if (parent === documentElement) {
    return null;
  }
  return parent;
}
function containsVendorPrefix(prop) {
  return prop.substring(1, 6) == "ebkit";
}
var _CACHED_BODY = null;
var _IS_WEBKIT = false;
function validateStyleProperty(prop) {
  if (!_CACHED_BODY) {
    _CACHED_BODY = getBodyNode() || {};
    _IS_WEBKIT = _CACHED_BODY.style ? "WebkitAppearance" in _CACHED_BODY.style : false;
  }
  let result = true;
  if (_CACHED_BODY.style && !containsVendorPrefix(prop)) {
    result = prop in _CACHED_BODY.style;
    if (!result && _IS_WEBKIT) {
      const camelProp = "Webkit" + prop.charAt(0).toUpperCase() + prop.slice(1);
      result = camelProp in _CACHED_BODY.style;
    }
  }
  return result;
}
function validateWebAnimatableStyleProperty(prop) {
  return ANIMATABLE_PROP_SET.has(prop);
}
function getBodyNode() {
  if (typeof document != "undefined") {
    return document.body;
  }
  return null;
}
function containsElement(elm1, elm2) {
  while (elm2) {
    if (elm2 === elm1) {
      return true;
    }
    elm2 = getParentElement(elm2);
  }
  return false;
}
function invokeQuery(element, selector, multi) {
  if (multi) {
    return Array.from(element.querySelectorAll(selector));
  }
  const elem = element.querySelector(selector);
  return elem ? [elem] : [];
}
var ONE_SECOND = 1e3;
var SUBSTITUTION_EXPR_START = "{{";
var SUBSTITUTION_EXPR_END = "}}";
var ENTER_CLASSNAME = "ng-enter";
var LEAVE_CLASSNAME = "ng-leave";
var NG_TRIGGER_CLASSNAME = "ng-trigger";
var NG_TRIGGER_SELECTOR = ".ng-trigger";
var NG_ANIMATING_CLASSNAME = "ng-animating";
var NG_ANIMATING_SELECTOR = ".ng-animating";
function resolveTimingValue(value) {
  if (typeof value == "number") return value;
  const matches = value.match(/^(-?[\.\d]+)(m?s)/);
  if (!matches || matches.length < 2) return 0;
  return _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
}
function _convertTimeValueToMS(value, unit) {
  switch (unit) {
    case "s":
      return value * ONE_SECOND;
    default:
      return value;
  }
}
function resolveTiming(timings, errors, allowNegativeValues) {
  return timings.hasOwnProperty("duration") ? timings : parseTimeExpression(timings, errors, allowNegativeValues);
}
var PARSE_TIME_EXPRESSION_REGEX = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
function parseTimeExpression(exp, errors, allowNegativeValues) {
  let duration;
  let delay = 0;
  let easing = "";
  if (typeof exp === "string") {
    const matches = exp.match(PARSE_TIME_EXPRESSION_REGEX);
    if (matches === null) {
      errors.push(invalidTimingValue(exp));
      return {
        duration: 0,
        delay: 0,
        easing: ""
      };
    }
    duration = _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
    const delayMatch = matches[3];
    if (delayMatch != null) {
      delay = _convertTimeValueToMS(parseFloat(delayMatch), matches[4]);
    }
    const easingVal = matches[5];
    if (easingVal) {
      easing = easingVal;
    }
  } else {
    duration = exp;
  }
  if (!allowNegativeValues) {
    let containsErrors = false;
    let startIndex = errors.length;
    if (duration < 0) {
      errors.push(negativeStepValue());
      containsErrors = true;
    }
    if (delay < 0) {
      errors.push(negativeDelayValue());
      containsErrors = true;
    }
    if (containsErrors) {
      errors.splice(startIndex, 0, invalidTimingValue(exp));
    }
  }
  return {
    duration,
    delay,
    easing
  };
}
function normalizeKeyframes(keyframes) {
  if (!keyframes.length) {
    return [];
  }
  if (keyframes[0] instanceof Map) {
    return keyframes;
  }
  return keyframes.map((kf) => new Map(Object.entries(kf)));
}
function setStyles(element, styles, formerStyles) {
  styles.forEach((val, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    if (formerStyles && !formerStyles.has(prop)) {
      formerStyles.set(prop, element.style[camelProp]);
    }
    element.style[camelProp] = val;
  });
}
function eraseStyles(element, styles) {
  styles.forEach((_, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    element.style[camelProp] = "";
  });
}
function normalizeAnimationEntry(steps) {
  if (Array.isArray(steps)) {
    if (steps.length == 1) return steps[0];
    return sequence(steps);
  }
  return steps;
}
function validateStyleParams(value, options, errors) {
  const params = options.params || {};
  const matches = extractStyleParams(value);
  if (matches.length) {
    matches.forEach((varName) => {
      if (!params.hasOwnProperty(varName)) {
        errors.push(invalidStyleParams(varName));
      }
    });
  }
}
var PARAM_REGEX = /* @__PURE__ */ new RegExp(`${SUBSTITUTION_EXPR_START}\\s*(.+?)\\s*${SUBSTITUTION_EXPR_END}`, "g");
function extractStyleParams(value) {
  let params = [];
  if (typeof value === "string") {
    let match;
    while (match = PARAM_REGEX.exec(value)) {
      params.push(match[1]);
    }
    PARAM_REGEX.lastIndex = 0;
  }
  return params;
}
function interpolateParams(value, params, errors) {
  const original = `${value}`;
  const str = original.replace(PARAM_REGEX, (_, varName) => {
    let localVal = params[varName];
    if (localVal == null) {
      errors.push(invalidParamValue(varName));
      localVal = "";
    }
    return localVal.toString();
  });
  return str == original ? value : str;
}
var DASH_CASE_REGEXP = /-+([a-z0-9])/g;
function dashCaseToCamelCase(input) {
  return input.replace(DASH_CASE_REGEXP, (...m7) => m7[1].toUpperCase());
}
function camelCaseToDashCase(input) {
  return input.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function allowPreviousPlayerStylesMerge(duration, delay) {
  return duration === 0 || delay === 0;
}
function balancePreviousStylesIntoKeyframes(element, keyframes, previousStyles) {
  if (previousStyles.size && keyframes.length) {
    let startingKeyframe = keyframes[0];
    let missingStyleProps = [];
    previousStyles.forEach((val, prop) => {
      if (!startingKeyframe.has(prop)) {
        missingStyleProps.push(prop);
      }
      startingKeyframe.set(prop, val);
    });
    if (missingStyleProps.length) {
      for (let i30 = 1; i30 < keyframes.length; i30++) {
        let kf = keyframes[i30];
        missingStyleProps.forEach((prop) => kf.set(prop, computeStyle(element, prop)));
      }
    }
  }
  return keyframes;
}
function visitDslNode(visitor, node, context) {
  switch (node.type) {
    case AnimationMetadataType.Trigger:
      return visitor.visitTrigger(node, context);
    case AnimationMetadataType.State:
      return visitor.visitState(node, context);
    case AnimationMetadataType.Transition:
      return visitor.visitTransition(node, context);
    case AnimationMetadataType.Sequence:
      return visitor.visitSequence(node, context);
    case AnimationMetadataType.Group:
      return visitor.visitGroup(node, context);
    case AnimationMetadataType.Animate:
      return visitor.visitAnimate(node, context);
    case AnimationMetadataType.Keyframes:
      return visitor.visitKeyframes(node, context);
    case AnimationMetadataType.Style:
      return visitor.visitStyle(node, context);
    case AnimationMetadataType.Reference:
      return visitor.visitReference(node, context);
    case AnimationMetadataType.AnimateChild:
      return visitor.visitAnimateChild(node, context);
    case AnimationMetadataType.AnimateRef:
      return visitor.visitAnimateRef(node, context);
    case AnimationMetadataType.Query:
      return visitor.visitQuery(node, context);
    case AnimationMetadataType.Stagger:
      return visitor.visitStagger(node, context);
    default:
      throw invalidNodeType(node.type);
  }
}
function computeStyle(element, prop) {
  return window.getComputedStyle(element)[prop];
}

// node_modules/@angular/animations/fesm2022/browser.mjs
/**
 * @license Angular v22.0.0
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var NoopAnimationDriver = class _NoopAnimationDriver {
  validateStyleProperty(prop) {
    return validateStyleProperty(prop);
  }
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  getParentElement(element) {
    return getParentElement(element);
  }
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  computeStyle(element, prop, defaultValue) {
    return defaultValue || "";
  }
  animate(element, keyframes, duration, delay, easing, previousPlayers = [], scrubberAccessRequested) {
    return new NoopAnimationPlayer(duration, delay);
  }
  static \u0275fac = function NoopAnimationDriver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationDriver)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NoopAnimationDriver,
    factory: _NoopAnimationDriver.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationDriver, [{
    type: Injectable
  }], null, null);
})();
var AnimationDriver = class {
  static NOOP = new NoopAnimationDriver();
};
var AnimationStyleNormalizer = class {
};
var DIMENSIONAL_PROP_SET = /* @__PURE__ */ new Set(["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "left", "top", "bottom", "right", "fontSize", "outlineWidth", "outlineOffset", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "marginTop", "marginLeft", "marginBottom", "marginRight", "borderRadius", "borderWidth", "borderTopWidth", "borderLeftWidth", "borderRightWidth", "borderBottomWidth", "textIndent", "perspective"]);
var WebAnimationsStyleNormalizer = class extends AnimationStyleNormalizer {
  normalizePropertyName(propertyName, errors) {
    return dashCaseToCamelCase(propertyName);
  }
  normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
    let unit = "";
    const strVal = value.toString().trim();
    if (DIMENSIONAL_PROP_SET.has(normalizedProperty) && value !== 0 && value !== "0") {
      if (typeof value === "number") {
        unit = "px";
      } else {
        const valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
        if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
          errors.push(invalidCssUnitValue(userProvidedProperty, value));
        }
      }
    }
    return strVal + unit;
  }
};
function createListOfWarnings(warnings) {
  const LINE_START2 = "\n - ";
  return `${LINE_START2}${warnings.filter(Boolean).map((warning) => warning).join(LINE_START2)}`;
}
function warnTriggerBuild(name, warnings) {
  console.warn(`The animation trigger "${name}" has built with the following warnings:${createListOfWarnings(warnings)}`);
}
function warnRegister(warnings) {
  console.warn(`Animation built with the following warnings:${createListOfWarnings(warnings)}`);
}
function pushUnrecognizedPropertiesWarning(warnings, props) {
  if (props.length) {
    warnings.push(`The following provided properties are not recognized: ${props.join(", ")}`);
  }
}
var ANY_STATE = "*";
function parseTransitionExpr(transitionValue, errors) {
  const expressions = [];
  if (typeof transitionValue == "string") {
    transitionValue.split(/\s*,\s*/).forEach((str) => parseInnerTransitionStr(str, expressions, errors));
  } else {
    expressions.push(transitionValue);
  }
  return expressions;
}
function parseInnerTransitionStr(eventStr, expressions, errors) {
  if (eventStr[0] == ":") {
    const result = parseAnimationAlias(eventStr, errors);
    if (typeof result == "function") {
      expressions.push(result);
      return;
    }
    eventStr = result;
  }
  const match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (match == null || match.length < 4) {
    errors.push(invalidExpression(eventStr));
    return expressions;
  }
  const fromState = match[1];
  const separator = match[2];
  const toState = match[3];
  expressions.push(makeLambdaFromStates(fromState, toState));
  const isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
  if (separator[0] == "<" && !isFullAnyStateExpr) {
    expressions.push(makeLambdaFromStates(toState, fromState));
  }
  return;
}
function parseAnimationAlias(alias, errors) {
  switch (alias) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (fromState, toState) => parseFloat(toState) > parseFloat(fromState);
    case ":decrement":
      return (fromState, toState) => parseFloat(toState) < parseFloat(fromState);
    default:
      errors.push(invalidTransitionAlias(alias));
      return "* => *";
  }
}
var TRUE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["true", "1"]);
var FALSE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["false", "0"]);
function makeLambdaFromStates(lhs, rhs) {
  const LHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(lhs) || FALSE_BOOLEAN_VALUES.has(lhs);
  const RHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(rhs) || FALSE_BOOLEAN_VALUES.has(rhs);
  return (fromState, toState) => {
    let lhsMatch = lhs == ANY_STATE || lhs == fromState;
    let rhsMatch = rhs == ANY_STATE || rhs == toState;
    if (!lhsMatch && LHS_MATCH_BOOLEAN && typeof fromState === "boolean") {
      lhsMatch = fromState ? TRUE_BOOLEAN_VALUES.has(lhs) : FALSE_BOOLEAN_VALUES.has(lhs);
    }
    if (!rhsMatch && RHS_MATCH_BOOLEAN && typeof toState === "boolean") {
      rhsMatch = toState ? TRUE_BOOLEAN_VALUES.has(rhs) : FALSE_BOOLEAN_VALUES.has(rhs);
    }
    return lhsMatch && rhsMatch;
  };
}
var SELF_TOKEN = ":self";
var SELF_TOKEN_REGEX = /* @__PURE__ */ new RegExp(`s*${SELF_TOKEN}s*,?`, "g");
function buildAnimationAst(driver, metadata, errors, warnings) {
  return new AnimationAstBuilderVisitor(driver).build(metadata, errors, warnings);
}
var ROOT_SELECTOR = "";
var AnimationAstBuilderVisitor = class {
  _driver;
  constructor(_driver) {
    this._driver = _driver;
  }
  build(metadata, errors, warnings) {
    const context = new AnimationAstBuilderContext(errors);
    this._resetContextStyleTimingState(context);
    const ast = visitDslNode(this, normalizeAnimationEntry(metadata), context);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (context.unsupportedCSSPropertiesFound.size) {
        pushUnrecognizedPropertiesWarning(warnings, [...context.unsupportedCSSPropertiesFound.keys()]);
      }
    }
    return ast;
  }
  _resetContextStyleTimingState(context) {
    context.currentQuerySelector = ROOT_SELECTOR;
    context.collectedStyles = /* @__PURE__ */ new Map();
    context.collectedStyles.set(ROOT_SELECTOR, /* @__PURE__ */ new Map());
    context.currentTime = 0;
  }
  visitTrigger(metadata, context) {
    let queryCount = context.queryCount = 0;
    let depCount = context.depCount = 0;
    const states = [];
    const transitions = [];
    if (metadata.name.charAt(0) == "@") {
      context.errors.push(invalidTrigger());
    }
    metadata.definitions.forEach((def) => {
      this._resetContextStyleTimingState(context);
      if (def.type == AnimationMetadataType.State) {
        const stateDef = def;
        const name = stateDef.name;
        name.toString().split(/\s*,\s*/).forEach((n39) => {
          stateDef.name = n39;
          states.push(this.visitState(stateDef, context));
        });
        stateDef.name = name;
      } else if (def.type == AnimationMetadataType.Transition) {
        const transition = this.visitTransition(def, context);
        queryCount += transition.queryCount;
        depCount += transition.depCount;
        transitions.push(transition);
      } else {
        context.errors.push(invalidDefinition());
      }
    });
    return {
      type: AnimationMetadataType.Trigger,
      name: metadata.name,
      states,
      transitions,
      queryCount,
      depCount,
      options: null
    };
  }
  visitState(metadata, context) {
    const styleAst = this.visitStyle(metadata.styles, context);
    const astParams = metadata.options && metadata.options.params || null;
    if (styleAst.containsDynamicStyles) {
      const missingSubs = /* @__PURE__ */ new Set();
      const params = astParams || {};
      styleAst.styles.forEach((style3) => {
        if (style3 instanceof Map) {
          style3.forEach((value) => {
            extractStyleParams(value).forEach((sub) => {
              if (!params.hasOwnProperty(sub)) {
                missingSubs.add(sub);
              }
            });
          });
        }
      });
      if (missingSubs.size) {
        context.errors.push(invalidState(metadata.name, [...missingSubs.values()]));
      }
    }
    return {
      type: AnimationMetadataType.State,
      name: metadata.name,
      style: styleAst,
      options: astParams ? {
        params: astParams
      } : null
    };
  }
  visitTransition(metadata, context) {
    context.queryCount = 0;
    context.depCount = 0;
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    const matchers = parseTransitionExpr(metadata.expr, context.errors);
    return {
      type: AnimationMetadataType.Transition,
      matchers,
      animation,
      queryCount: context.queryCount,
      depCount: context.depCount,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitSequence(metadata, context) {
    return {
      type: AnimationMetadataType.Sequence,
      steps: metadata.steps.map((s14) => visitDslNode(this, s14, context)),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitGroup(metadata, context) {
    const currentTime = context.currentTime;
    let furthestTime = 0;
    const steps = metadata.steps.map((step) => {
      context.currentTime = currentTime;
      const innerAst = visitDslNode(this, step, context);
      furthestTime = Math.max(furthestTime, context.currentTime);
      return innerAst;
    });
    context.currentTime = furthestTime;
    return {
      type: AnimationMetadataType.Group,
      steps,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimate(metadata, context) {
    const timingAst = constructTimingAst(metadata.timings, context.errors);
    context.currentAnimateTimings = timingAst;
    let styleAst;
    let styleMetadata = metadata.styles ? metadata.styles : style({});
    if (styleMetadata.type == AnimationMetadataType.Keyframes) {
      styleAst = this.visitKeyframes(styleMetadata, context);
    } else {
      let styleMetadata2 = metadata.styles;
      let isEmpty = false;
      if (!styleMetadata2) {
        isEmpty = true;
        const newStyleData = {};
        if (timingAst.easing) {
          newStyleData["easing"] = timingAst.easing;
        }
        styleMetadata2 = style(newStyleData);
      }
      context.currentTime += timingAst.duration + timingAst.delay;
      const _styleAst = this.visitStyle(styleMetadata2, context);
      _styleAst.isEmptyStep = isEmpty;
      styleAst = _styleAst;
    }
    context.currentAnimateTimings = null;
    return {
      type: AnimationMetadataType.Animate,
      timings: timingAst,
      style: styleAst,
      options: null
    };
  }
  visitStyle(metadata, context) {
    const ast = this._makeStyleAst(metadata, context);
    this._validateStyleAst(ast, context);
    return ast;
  }
  _makeStyleAst(metadata, context) {
    const styles = [];
    const metadataStyles = Array.isArray(metadata.styles) ? metadata.styles : [metadata.styles];
    for (let styleTuple of metadataStyles) {
      if (typeof styleTuple === "string") {
        if (styleTuple === AUTO_STYLE) {
          styles.push(styleTuple);
        } else {
          context.errors.push(invalidStyleValue(styleTuple));
        }
      } else {
        styles.push(new Map(Object.entries(styleTuple)));
      }
    }
    let containsDynamicStyles = false;
    let collectedEasing = null;
    styles.forEach((styleData) => {
      if (styleData instanceof Map) {
        if (styleData.has("easing")) {
          collectedEasing = styleData.get("easing");
          styleData.delete("easing");
        }
        if (!containsDynamicStyles) {
          for (let value of styleData.values()) {
            if (value.toString().indexOf(SUBSTITUTION_EXPR_START) >= 0) {
              containsDynamicStyles = true;
              break;
            }
          }
        }
      }
    });
    return {
      type: AnimationMetadataType.Style,
      styles,
      easing: collectedEasing,
      offset: metadata.offset,
      containsDynamicStyles,
      options: null
    };
  }
  _validateStyleAst(ast, context) {
    const timings = context.currentAnimateTimings;
    let endTime = context.currentTime;
    let startTime = context.currentTime;
    if (timings && startTime > 0) {
      startTime -= timings.duration + timings.delay;
    }
    ast.styles.forEach((tuple) => {
      if (typeof tuple === "string") return;
      tuple.forEach((value, prop) => {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (!this._driver.validateStyleProperty(prop)) {
            tuple.delete(prop);
            context.unsupportedCSSPropertiesFound.add(prop);
            return;
          }
        }
        const collectedStyles = context.collectedStyles.get(context.currentQuerySelector);
        const collectedEntry = collectedStyles.get(prop);
        let updateCollectedStyle = true;
        if (collectedEntry) {
          if (startTime != endTime && startTime >= collectedEntry.startTime && endTime <= collectedEntry.endTime) {
            context.errors.push(invalidParallelAnimation(prop, collectedEntry.startTime, collectedEntry.endTime, startTime, endTime));
            updateCollectedStyle = false;
          }
          startTime = collectedEntry.startTime;
        }
        if (updateCollectedStyle) {
          collectedStyles.set(prop, {
            startTime,
            endTime
          });
        }
        if (context.options) {
          validateStyleParams(value, context.options, context.errors);
        }
      });
    });
  }
  visitKeyframes(metadata, context) {
    const ast = {
      type: AnimationMetadataType.Keyframes,
      styles: [],
      options: null
    };
    if (!context.currentAnimateTimings) {
      context.errors.push(invalidKeyframes());
      return ast;
    }
    const MAX_KEYFRAME_OFFSET = 1;
    let totalKeyframesWithOffsets = 0;
    const offsets = [];
    let offsetsOutOfOrder = false;
    let keyframesOutOfRange = false;
    let previousOffset = 0;
    const keyframes = metadata.steps.map((styles) => {
      const style3 = this._makeStyleAst(styles, context);
      let offsetVal = style3.offset != null ? style3.offset : consumeOffset(style3.styles);
      let offset = 0;
      if (offsetVal != null) {
        totalKeyframesWithOffsets++;
        offset = style3.offset = offsetVal;
      }
      keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
      offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
      previousOffset = offset;
      offsets.push(offset);
      return style3;
    });
    if (keyframesOutOfRange) {
      context.errors.push(invalidOffset());
    }
    if (offsetsOutOfOrder) {
      context.errors.push(keyframeOffsetsOutOfOrder());
    }
    const length = metadata.steps.length;
    let generatedOffset = 0;
    if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
      context.errors.push(keyframesMissingOffsets());
    } else if (totalKeyframesWithOffsets == 0) {
      generatedOffset = MAX_KEYFRAME_OFFSET / (length - 1);
    }
    const limit = length - 1;
    const currentTime = context.currentTime;
    const currentAnimateTimings = context.currentAnimateTimings;
    const animateDuration = currentAnimateTimings.duration;
    keyframes.forEach((kf, i30) => {
      const offset = generatedOffset > 0 ? i30 == limit ? 1 : generatedOffset * i30 : offsets[i30];
      const durationUpToThisFrame = offset * animateDuration;
      context.currentTime = currentTime + currentAnimateTimings.delay + durationUpToThisFrame;
      currentAnimateTimings.duration = durationUpToThisFrame;
      this._validateStyleAst(kf, context);
      kf.offset = offset;
      ast.styles.push(kf);
    });
    return ast;
  }
  visitReference(metadata, context) {
    return {
      type: AnimationMetadataType.Reference,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateChild(metadata, context) {
    context.depCount++;
    return {
      type: AnimationMetadataType.AnimateChild,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateRef(metadata, context) {
    return {
      type: AnimationMetadataType.AnimateRef,
      animation: this.visitReference(metadata.animation, context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitQuery(metadata, context) {
    const parentSelector = context.currentQuerySelector;
    const options = metadata.options || {};
    context.queryCount++;
    context.currentQuery = metadata;
    const [selector, includeSelf] = normalizeSelector(metadata.selector);
    context.currentQuerySelector = parentSelector.length ? parentSelector + " " + selector : selector;
    getOrSetDefaultValue(context.collectedStyles, context.currentQuerySelector, /* @__PURE__ */ new Map());
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    context.currentQuery = null;
    context.currentQuerySelector = parentSelector;
    return {
      type: AnimationMetadataType.Query,
      selector,
      limit: options.limit || 0,
      optional: !!options.optional,
      includeSelf,
      animation,
      originalSelector: metadata.selector,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitStagger(metadata, context) {
    if (!context.currentQuery) {
      context.errors.push(invalidStagger());
    }
    const timings = metadata.timings === "full" ? {
      duration: 0,
      delay: 0,
      easing: "full"
    } : resolveTiming(metadata.timings, context.errors, true);
    return {
      type: AnimationMetadataType.Stagger,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      timings,
      options: null
    };
  }
};
function normalizeSelector(selector) {
  const hasAmpersand = selector.split(/\s*,\s*/).find((token) => token == SELF_TOKEN) ? true : false;
  if (hasAmpersand) {
    selector = selector.replace(SELF_TOKEN_REGEX, "");
  }
  selector = selector.replace(/@\*/g, NG_TRIGGER_SELECTOR).replace(/@\w+/g, (match) => NG_TRIGGER_SELECTOR + "-" + match.slice(1)).replace(/:animating/g, NG_ANIMATING_SELECTOR);
  return [selector, hasAmpersand];
}
function normalizeParams(obj) {
  return obj ? __spreadValues({}, obj) : null;
}
var AnimationAstBuilderContext = class {
  errors;
  queryCount = 0;
  depCount = 0;
  currentTransition = null;
  currentQuery = null;
  currentQuerySelector = null;
  currentAnimateTimings = null;
  currentTime = 0;
  collectedStyles = /* @__PURE__ */ new Map();
  options = null;
  unsupportedCSSPropertiesFound = /* @__PURE__ */ new Set();
  constructor(errors) {
    this.errors = errors;
  }
};
function consumeOffset(styles) {
  if (typeof styles == "string") return null;
  let offset = null;
  if (Array.isArray(styles)) {
    styles.forEach((styleTuple) => {
      if (styleTuple instanceof Map && styleTuple.has("offset")) {
        const obj = styleTuple;
        offset = parseFloat(obj.get("offset"));
        obj.delete("offset");
      }
    });
  } else if (styles instanceof Map && styles.has("offset")) {
    const obj = styles;
    offset = parseFloat(obj.get("offset"));
    obj.delete("offset");
  }
  return offset;
}
function constructTimingAst(value, errors) {
  if (value.hasOwnProperty("duration")) {
    return value;
  }
  if (typeof value == "number") {
    const duration = resolveTiming(value, errors).duration;
    return makeTimingAst(duration, 0, "");
  }
  const strValue = value;
  const isDynamic = strValue.split(/\s+/).some((v4) => v4.charAt(0) == "{" && v4.charAt(1) == "{");
  if (isDynamic) {
    const ast = makeTimingAst(0, 0, "");
    ast.dynamic = true;
    ast.strValue = strValue;
    return ast;
  }
  const timings = resolveTiming(strValue, errors);
  return makeTimingAst(timings.duration, timings.delay, timings.easing);
}
function normalizeAnimationOptions(options) {
  if (options) {
    options = __spreadValues({}, options);
    if (options["params"]) {
      options["params"] = normalizeParams(options["params"]);
    }
  } else {
    options = {};
  }
  return options;
}
function makeTimingAst(duration, delay, easing) {
  return {
    duration,
    delay,
    easing
  };
}
function createTimelineInstruction(element, keyframes, preStyleProps, postStyleProps, duration, delay, easing = null, subTimeline = false) {
  return {
    type: 1,
    element,
    keyframes,
    preStyleProps,
    postStyleProps,
    duration,
    delay,
    totalTime: duration + delay,
    easing,
    subTimeline
  };
}
var ElementInstructionMap = class {
  _map = /* @__PURE__ */ new Map();
  get(element) {
    return this._map.get(element) || [];
  }
  append(element, instructions) {
    let existingInstructions = this._map.get(element);
    if (!existingInstructions) {
      this._map.set(element, existingInstructions = []);
    }
    existingInstructions.push(...instructions);
  }
  has(element) {
    return this._map.has(element);
  }
  clear() {
    this._map.clear();
  }
};
var ONE_FRAME_IN_MILLISECONDS = 1;
var ENTER_TOKEN = ":enter";
var ENTER_TOKEN_REGEX = /* @__PURE__ */ new RegExp(ENTER_TOKEN, "g");
var LEAVE_TOKEN = ":leave";
var LEAVE_TOKEN_REGEX = /* @__PURE__ */ new RegExp(LEAVE_TOKEN, "g");
function buildAnimationTimelines(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles = /* @__PURE__ */ new Map(), finalStyles = /* @__PURE__ */ new Map(), options, subInstructions, errors = []) {
  return new AnimationTimelineBuilderVisitor().buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors);
}
var AnimationTimelineBuilderVisitor = class {
  buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors = []) {
    subInstructions = subInstructions || new ElementInstructionMap();
    const context = new AnimationTimelineContext(driver, rootElement, subInstructions, enterClassName, leaveClassName, errors, []);
    context.options = options;
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    context.currentTimeline.delayNextStep(delay);
    context.currentTimeline.setStyles([startingStyles], null, context.errors, options);
    visitDslNode(this, ast, context);
    const timelines = context.timelines.filter((timeline) => timeline.containsAnimation());
    if (timelines.length && finalStyles.size) {
      let lastRootTimeline;
      for (let i30 = timelines.length - 1; i30 >= 0; i30--) {
        const timeline = timelines[i30];
        if (timeline.element === rootElement) {
          lastRootTimeline = timeline;
          break;
        }
      }
      if (lastRootTimeline && !lastRootTimeline.allowOnlyTimelineStyles()) {
        lastRootTimeline.setStyles([finalStyles], null, context.errors, options);
      }
    }
    return timelines.length ? timelines.map((timeline) => timeline.buildKeyframes()) : [createTimelineInstruction(rootElement, [], [], [], 0, delay, "", false)];
  }
  visitTrigger(ast, context) {
  }
  visitState(ast, context) {
  }
  visitTransition(ast, context) {
  }
  visitAnimateChild(ast, context) {
    const elementInstructions = context.subInstructions.get(context.element);
    if (elementInstructions) {
      const innerContext = context.createSubContext(ast.options);
      const startTime = context.currentTimeline.currentTime;
      const endTime = this._visitSubInstructions(elementInstructions, innerContext, innerContext.options);
      if (startTime != endTime) {
        context.transformIntoNewTimeline(endTime);
      }
    }
    context.previousNode = ast;
  }
  visitAnimateRef(ast, context) {
    const innerContext = context.createSubContext(ast.options);
    innerContext.transformIntoNewTimeline();
    this._applyAnimationRefDelays([ast.options, ast.animation.options], context, innerContext);
    this.visitReference(ast.animation, innerContext);
    context.transformIntoNewTimeline(innerContext.currentTimeline.currentTime);
    context.previousNode = ast;
  }
  _applyAnimationRefDelays(animationsRefsOptions, context, innerContext) {
    for (const animationRefOptions of animationsRefsOptions) {
      const animationDelay = animationRefOptions?.delay;
      if (animationDelay) {
        const animationDelayValue = typeof animationDelay === "number" ? animationDelay : resolveTimingValue(interpolateParams(animationDelay, animationRefOptions?.params ?? {}, context.errors));
        innerContext.delayNextStep(animationDelayValue);
      }
    }
  }
  _visitSubInstructions(instructions, context, options) {
    const startTime = context.currentTimeline.currentTime;
    let furthestTime = startTime;
    const duration = options.duration != null ? resolveTimingValue(options.duration) : null;
    const delay = options.delay != null ? resolveTimingValue(options.delay) : null;
    if (duration !== 0) {
      instructions.forEach((instruction) => {
        const instructionTimings = context.appendInstructionToTimeline(instruction, duration, delay);
        furthestTime = Math.max(furthestTime, instructionTimings.duration + instructionTimings.delay);
      });
    }
    return furthestTime;
  }
  visitReference(ast, context) {
    context.updateOptions(ast.options, true);
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
  }
  visitSequence(ast, context) {
    const subContextCount = context.subContextCount;
    let ctx = context;
    const options = ast.options;
    if (options && (options.params || options.delay)) {
      ctx = context.createSubContext(options);
      ctx.transformIntoNewTimeline();
      if (options.delay != null) {
        if (ctx.previousNode.type == AnimationMetadataType.Style) {
          ctx.currentTimeline.snapshotCurrentStyles();
          ctx.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        }
        const delay = resolveTimingValue(options.delay);
        ctx.delayNextStep(delay);
      }
    }
    if (ast.steps.length) {
      ast.steps.forEach((s14) => visitDslNode(this, s14, ctx));
      ctx.currentTimeline.applyStylesToKeyframe();
      if (ctx.subContextCount > subContextCount) {
        ctx.transformIntoNewTimeline();
      }
    }
    context.previousNode = ast;
  }
  visitGroup(ast, context) {
    const innerTimelines = [];
    let furthestTime = context.currentTimeline.currentTime;
    const delay = ast.options && ast.options.delay ? resolveTimingValue(ast.options.delay) : 0;
    ast.steps.forEach((s14) => {
      const innerContext = context.createSubContext(ast.options);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      visitDslNode(this, s14, innerContext);
      furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
      innerTimelines.push(innerContext.currentTimeline);
    });
    innerTimelines.forEach((timeline) => context.currentTimeline.mergeTimelineCollectedStyles(timeline));
    context.transformIntoNewTimeline(furthestTime);
    context.previousNode = ast;
  }
  _visitTiming(ast, context) {
    if (ast.dynamic) {
      const strValue = ast.strValue;
      const timingValue = context.params ? interpolateParams(strValue, context.params, context.errors) : strValue;
      return resolveTiming(timingValue, context.errors);
    } else {
      return {
        duration: ast.duration,
        delay: ast.delay,
        easing: ast.easing
      };
    }
  }
  visitAnimate(ast, context) {
    const timings = context.currentAnimateTimings = this._visitTiming(ast.timings, context);
    const timeline = context.currentTimeline;
    if (timings.delay) {
      context.incrementTime(timings.delay);
      timeline.snapshotCurrentStyles();
    }
    const style3 = ast.style;
    if (style3.type == AnimationMetadataType.Keyframes) {
      this.visitKeyframes(style3, context);
    } else {
      context.incrementTime(timings.duration);
      this.visitStyle(style3, context);
      timeline.applyStylesToKeyframe();
    }
    context.currentAnimateTimings = null;
    context.previousNode = ast;
  }
  visitStyle(ast, context) {
    const timeline = context.currentTimeline;
    const timings = context.currentAnimateTimings;
    if (!timings && timeline.hasCurrentStyleProperties()) {
      timeline.forwardFrame();
    }
    const easing = timings && timings.easing || ast.easing;
    if (ast.isEmptyStep) {
      timeline.applyEmptyStep(easing);
    } else {
      timeline.setStyles(ast.styles, easing, context.errors, context.options);
    }
    context.previousNode = ast;
  }
  visitKeyframes(ast, context) {
    const currentAnimateTimings = context.currentAnimateTimings;
    const startTime = context.currentTimeline.duration;
    const duration = currentAnimateTimings.duration;
    const innerContext = context.createSubContext();
    const innerTimeline = innerContext.currentTimeline;
    innerTimeline.easing = currentAnimateTimings.easing;
    ast.styles.forEach((step) => {
      const offset = step.offset || 0;
      innerTimeline.forwardTime(offset * duration);
      innerTimeline.setStyles(step.styles, step.easing, context.errors, context.options);
      innerTimeline.applyStylesToKeyframe();
    });
    context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
    context.transformIntoNewTimeline(startTime + duration);
    context.previousNode = ast;
  }
  visitQuery(ast, context) {
    const startTime = context.currentTimeline.currentTime;
    const options = ast.options || {};
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    if (delay && (context.previousNode.type === AnimationMetadataType.Style || startTime == 0 && context.currentTimeline.hasCurrentStyleProperties())) {
      context.currentTimeline.snapshotCurrentStyles();
      context.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    }
    let furthestTime = startTime;
    const elms = context.invokeQuery(ast.selector, ast.originalSelector, ast.limit, ast.includeSelf, options.optional ? true : false, context.errors);
    context.currentQueryTotal = elms.length;
    let sameElementTimeline = null;
    elms.forEach((element, i30) => {
      context.currentQueryIndex = i30;
      const innerContext = context.createSubContext(ast.options, element);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      if (element === context.element) {
        sameElementTimeline = innerContext.currentTimeline;
      }
      visitDslNode(this, ast.animation, innerContext);
      innerContext.currentTimeline.applyStylesToKeyframe();
      const endTime = innerContext.currentTimeline.currentTime;
      furthestTime = Math.max(furthestTime, endTime);
    });
    context.currentQueryIndex = 0;
    context.currentQueryTotal = 0;
    context.transformIntoNewTimeline(furthestTime);
    if (sameElementTimeline) {
      context.currentTimeline.mergeTimelineCollectedStyles(sameElementTimeline);
      context.currentTimeline.snapshotCurrentStyles();
    }
    context.previousNode = ast;
  }
  visitStagger(ast, context) {
    const parentContext = context.parentContext;
    const tl = context.currentTimeline;
    const timings = ast.timings;
    const duration = Math.abs(timings.duration);
    const maxTime = duration * (context.currentQueryTotal - 1);
    let delay = duration * context.currentQueryIndex;
    let staggerTransformer = timings.duration < 0 ? "reverse" : timings.easing;
    switch (staggerTransformer) {
      case "reverse":
        delay = maxTime - delay;
        break;
      case "full":
        delay = parentContext.currentStaggerTime;
        break;
    }
    const timeline = context.currentTimeline;
    if (delay) {
      timeline.delayNextStep(delay);
    }
    const startingTime = timeline.currentTime;
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
    parentContext.currentStaggerTime = tl.currentTime - startingTime + (tl.startTime - parentContext.currentTimeline.startTime);
  }
};
var DEFAULT_NOOP_PREVIOUS_NODE = {};
var AnimationTimelineContext = class _AnimationTimelineContext {
  _driver;
  element;
  subInstructions;
  _enterClassName;
  _leaveClassName;
  errors;
  timelines;
  parentContext = null;
  currentTimeline;
  currentAnimateTimings = null;
  previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
  subContextCount = 0;
  options = {};
  currentQueryIndex = 0;
  currentQueryTotal = 0;
  currentStaggerTime = 0;
  constructor(_driver, element, subInstructions, _enterClassName, _leaveClassName, errors, timelines, initialTimeline) {
    this._driver = _driver;
    this.element = element;
    this.subInstructions = subInstructions;
    this._enterClassName = _enterClassName;
    this._leaveClassName = _leaveClassName;
    this.errors = errors;
    this.timelines = timelines;
    this.currentTimeline = initialTimeline || new TimelineBuilder(this._driver, element, 0);
    timelines.push(this.currentTimeline);
  }
  get params() {
    return this.options.params;
  }
  updateOptions(options, skipIfExists) {
    if (!options) return;
    const newOptions = options;
    let optionsToUpdate = this.options;
    if (newOptions.duration != null) {
      optionsToUpdate.duration = resolveTimingValue(newOptions.duration);
    }
    if (newOptions.delay != null) {
      optionsToUpdate.delay = resolveTimingValue(newOptions.delay);
    }
    const newParams = newOptions.params;
    if (newParams) {
      let paramsToUpdate = optionsToUpdate.params;
      if (!paramsToUpdate) {
        paramsToUpdate = this.options.params = {};
      }
      Object.keys(newParams).forEach((name) => {
        if (!skipIfExists || !paramsToUpdate.hasOwnProperty(name)) {
          paramsToUpdate[name] = interpolateParams(newParams[name], paramsToUpdate, this.errors);
        }
      });
    }
  }
  _copyOptions() {
    const options = {};
    if (this.options) {
      const oldParams = this.options.params;
      if (oldParams) {
        const params = options["params"] = {};
        Object.keys(oldParams).forEach((name) => {
          params[name] = oldParams[name];
        });
      }
    }
    return options;
  }
  createSubContext(options = null, element, newTime) {
    const target = element || this.element;
    const context = new _AnimationTimelineContext(this._driver, target, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(target, newTime || 0));
    context.previousNode = this.previousNode;
    context.currentAnimateTimings = this.currentAnimateTimings;
    context.options = this._copyOptions();
    context.updateOptions(options);
    context.currentQueryIndex = this.currentQueryIndex;
    context.currentQueryTotal = this.currentQueryTotal;
    context.parentContext = this;
    this.subContextCount++;
    return context;
  }
  transformIntoNewTimeline(newTime) {
    this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    this.currentTimeline = this.currentTimeline.fork(this.element, newTime);
    this.timelines.push(this.currentTimeline);
    return this.currentTimeline;
  }
  appendInstructionToTimeline(instruction, duration, delay) {
    const updatedTimings = {
      duration: duration != null ? duration : instruction.duration,
      delay: this.currentTimeline.currentTime + (delay != null ? delay : 0) + instruction.delay,
      easing: ""
    };
    const builder = new SubTimelineBuilder(this._driver, instruction.element, instruction.keyframes, instruction.preStyleProps, instruction.postStyleProps, updatedTimings, instruction.stretchStartingKeyframe);
    this.timelines.push(builder);
    return updatedTimings;
  }
  incrementTime(time) {
    this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
  }
  delayNextStep(delay) {
    if (delay > 0) {
      this.currentTimeline.delayNextStep(delay);
    }
  }
  invokeQuery(selector, originalSelector, limit, includeSelf, optional, errors) {
    let results = [];
    if (includeSelf) {
      results.push(this.element);
    }
    if (selector.length > 0) {
      selector = selector.replace(ENTER_TOKEN_REGEX, "." + this._enterClassName);
      selector = selector.replace(LEAVE_TOKEN_REGEX, "." + this._leaveClassName);
      const multi = limit != 1;
      let elements = this._driver.query(this.element, selector, multi);
      if (limit !== 0) {
        elements = limit < 0 ? elements.slice(elements.length + limit, elements.length) : elements.slice(0, limit);
      }
      results.push(...elements);
    }
    if (!optional && results.length == 0) {
      errors.push(invalidQuery(originalSelector));
    }
    return results;
  }
};
var TimelineBuilder = class _TimelineBuilder {
  _driver;
  element;
  startTime;
  _elementTimelineStylesLookup;
  duration = 0;
  easing = null;
  _previousKeyframe = /* @__PURE__ */ new Map();
  _currentKeyframe = /* @__PURE__ */ new Map();
  _keyframes = /* @__PURE__ */ new Map();
  _styleSummary = /* @__PURE__ */ new Map();
  _localTimelineStyles = /* @__PURE__ */ new Map();
  _globalTimelineStyles;
  _pendingStyles = /* @__PURE__ */ new Map();
  _backFill = /* @__PURE__ */ new Map();
  _currentEmptyStepKeyframe = null;
  constructor(_driver, element, startTime, _elementTimelineStylesLookup) {
    this._driver = _driver;
    this.element = element;
    this.startTime = startTime;
    this._elementTimelineStylesLookup = _elementTimelineStylesLookup;
    if (!this._elementTimelineStylesLookup) {
      this._elementTimelineStylesLookup = /* @__PURE__ */ new Map();
    }
    this._globalTimelineStyles = this._elementTimelineStylesLookup.get(element);
    if (!this._globalTimelineStyles) {
      this._globalTimelineStyles = this._localTimelineStyles;
      this._elementTimelineStylesLookup.set(element, this._localTimelineStyles);
    }
    this._loadKeyframe();
  }
  containsAnimation() {
    switch (this._keyframes.size) {
      case 0:
        return false;
      case 1:
        return this.hasCurrentStyleProperties();
      default:
        return true;
    }
  }
  hasCurrentStyleProperties() {
    return this._currentKeyframe.size > 0;
  }
  get currentTime() {
    return this.startTime + this.duration;
  }
  delayNextStep(delay) {
    const hasPreStyleStep = this._keyframes.size === 1 && this._pendingStyles.size;
    if (this.duration || hasPreStyleStep) {
      this.forwardTime(this.currentTime + delay);
      if (hasPreStyleStep) {
        this.snapshotCurrentStyles();
      }
    } else {
      this.startTime += delay;
    }
  }
  fork(element, currentTime) {
    this.applyStylesToKeyframe();
    return new _TimelineBuilder(this._driver, element, currentTime || this.currentTime, this._elementTimelineStylesLookup);
  }
  _loadKeyframe() {
    if (this._currentKeyframe) {
      this._previousKeyframe = this._currentKeyframe;
    }
    this._currentKeyframe = this._keyframes.get(this.duration);
    if (!this._currentKeyframe) {
      this._currentKeyframe = /* @__PURE__ */ new Map();
      this._keyframes.set(this.duration, this._currentKeyframe);
    }
  }
  forwardFrame() {
    this.duration += ONE_FRAME_IN_MILLISECONDS;
    this._loadKeyframe();
  }
  forwardTime(time) {
    this.applyStylesToKeyframe();
    this.duration = time;
    this._loadKeyframe();
  }
  _updateStyle(prop, value) {
    this._localTimelineStyles.set(prop, value);
    this._globalTimelineStyles.set(prop, value);
    this._styleSummary.set(prop, {
      time: this.currentTime,
      value
    });
  }
  allowOnlyTimelineStyles() {
    return this._currentEmptyStepKeyframe !== this._currentKeyframe;
  }
  applyEmptyStep(easing) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    for (let [prop, value] of this._globalTimelineStyles) {
      this._backFill.set(prop, value || AUTO_STYLE);
      this._currentKeyframe.set(prop, AUTO_STYLE);
    }
    this._currentEmptyStepKeyframe = this._currentKeyframe;
  }
  setStyles(input, easing, errors, options) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    const params = options && options.params || {};
    const styles = flattenStyles(input, this._globalTimelineStyles);
    for (let [prop, value] of styles) {
      const val = interpolateParams(value, params, errors);
      this._pendingStyles.set(prop, val);
      if (!this._localTimelineStyles.has(prop)) {
        this._backFill.set(prop, this._globalTimelineStyles.get(prop) ?? AUTO_STYLE);
      }
      this._updateStyle(prop, val);
    }
  }
  applyStylesToKeyframe() {
    if (this._pendingStyles.size == 0) return;
    this._pendingStyles.forEach((val, prop) => {
      this._currentKeyframe.set(prop, val);
    });
    this._pendingStyles.clear();
    this._localTimelineStyles.forEach((val, prop) => {
      if (!this._currentKeyframe.has(prop)) {
        this._currentKeyframe.set(prop, val);
      }
    });
  }
  snapshotCurrentStyles() {
    for (let [prop, val] of this._localTimelineStyles) {
      this._pendingStyles.set(prop, val);
      this._updateStyle(prop, val);
    }
  }
  getFinalKeyframe() {
    return this._keyframes.get(this.duration);
  }
  get properties() {
    const properties = [];
    for (let prop in this._currentKeyframe) {
      properties.push(prop);
    }
    return properties;
  }
  mergeTimelineCollectedStyles(timeline) {
    timeline._styleSummary.forEach((details1, prop) => {
      const details0 = this._styleSummary.get(prop);
      if (!details0 || details1.time > details0.time) {
        this._updateStyle(prop, details1.value);
      }
    });
  }
  buildKeyframes() {
    this.applyStylesToKeyframe();
    const preStyleProps = /* @__PURE__ */ new Set();
    const postStyleProps = /* @__PURE__ */ new Set();
    const isEmpty = this._keyframes.size === 1 && this.duration === 0;
    let finalKeyframes = [];
    this._keyframes.forEach((keyframe, time) => {
      const finalKeyframe = new Map([...this._backFill, ...keyframe]);
      finalKeyframe.forEach((value, prop) => {
        if (value === \u0275PRE_STYLE) {
          preStyleProps.add(prop);
        } else if (value === AUTO_STYLE) {
          postStyleProps.add(prop);
        }
      });
      if (!isEmpty) {
        finalKeyframe.set("offset", time / this.duration);
      }
      finalKeyframes.push(finalKeyframe);
    });
    const preProps = [...preStyleProps.values()];
    const postProps = [...postStyleProps.values()];
    if (isEmpty) {
      const kf0 = finalKeyframes[0];
      const kf1 = new Map(kf0);
      kf0.set("offset", 0);
      kf1.set("offset", 1);
      finalKeyframes = [kf0, kf1];
    }
    return createTimelineInstruction(this.element, finalKeyframes, preProps, postProps, this.duration, this.startTime, this.easing, false);
  }
};
var SubTimelineBuilder = class extends TimelineBuilder {
  keyframes;
  preStyleProps;
  postStyleProps;
  _stretchStartingKeyframe;
  timings;
  constructor(driver, element, keyframes, preStyleProps, postStyleProps, timings, _stretchStartingKeyframe = false) {
    super(driver, element, timings.delay);
    this.keyframes = keyframes;
    this.preStyleProps = preStyleProps;
    this.postStyleProps = postStyleProps;
    this._stretchStartingKeyframe = _stretchStartingKeyframe;
    this.timings = {
      duration: timings.duration,
      delay: timings.delay,
      easing: timings.easing
    };
  }
  containsAnimation() {
    return this.keyframes.length > 1;
  }
  buildKeyframes() {
    let keyframes = this.keyframes;
    let {
      delay,
      duration,
      easing
    } = this.timings;
    if (this._stretchStartingKeyframe && delay) {
      const newKeyframes = [];
      const totalTime = duration + delay;
      const startingGap = delay / totalTime;
      const newFirstKeyframe = new Map(keyframes[0]);
      newFirstKeyframe.set("offset", 0);
      newKeyframes.push(newFirstKeyframe);
      const oldFirstKeyframe = new Map(keyframes[0]);
      oldFirstKeyframe.set("offset", roundOffset(startingGap));
      newKeyframes.push(oldFirstKeyframe);
      const limit = keyframes.length - 1;
      for (let i30 = 1; i30 <= limit; i30++) {
        let kf = new Map(keyframes[i30]);
        const oldOffset = kf.get("offset");
        const timeAtKeyframe = delay + oldOffset * duration;
        kf.set("offset", roundOffset(timeAtKeyframe / totalTime));
        newKeyframes.push(kf);
      }
      duration = totalTime;
      delay = 0;
      easing = "";
      keyframes = newKeyframes;
    }
    return createTimelineInstruction(this.element, keyframes, this.preStyleProps, this.postStyleProps, duration, delay, easing, true);
  }
};
function roundOffset(offset, decimalPoints = 3) {
  const mult = Math.pow(10, decimalPoints - 1);
  return Math.round(offset * mult) / mult;
}
function flattenStyles(input, allStyles) {
  const styles = /* @__PURE__ */ new Map();
  let allProperties;
  input.forEach((token) => {
    if (token === "*") {
      allProperties ??= allStyles.keys();
      for (let prop of allProperties) {
        styles.set(prop, AUTO_STYLE);
      }
    } else {
      for (let [prop, val] of token) {
        styles.set(prop, val);
      }
    }
  });
  return styles;
}
function createTransitionInstruction(element, triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines, queriedElements, preStyleProps, postStyleProps, totalTime, errors) {
  return {
    type: 0,
    element,
    triggerName,
    isRemovalTransition,
    fromState,
    fromStyles,
    toState,
    toStyles,
    timelines,
    queriedElements,
    preStyleProps,
    postStyleProps,
    totalTime,
    errors
  };
}
var EMPTY_OBJECT = {};
var AnimationTransitionFactory = class {
  _triggerName;
  ast;
  _stateStyles;
  constructor(_triggerName, ast, _stateStyles) {
    this._triggerName = _triggerName;
    this.ast = ast;
    this._stateStyles = _stateStyles;
  }
  match(currentState, nextState, element, params) {
    return oneOrMoreTransitionsMatch(this.ast.matchers, currentState, nextState, element, params);
  }
  buildStyles(stateName, params, errors) {
    let styler = this._stateStyles.get("*");
    if (stateName !== void 0) {
      styler = this._stateStyles.get(stateName?.toString()) || styler;
    }
    return styler ? styler.buildStyles(params, errors) : /* @__PURE__ */ new Map();
  }
  build(driver, element, currentState, nextState, enterClassName, leaveClassName, currentOptions, nextOptions, subInstructions, skipAstBuild) {
    const errors = [];
    const transitionAnimationParams = this.ast.options && this.ast.options.params || EMPTY_OBJECT;
    const currentAnimationParams = currentOptions && currentOptions.params || EMPTY_OBJECT;
    const currentStateStyles = this.buildStyles(currentState, currentAnimationParams, errors);
    const nextAnimationParams = nextOptions && nextOptions.params || EMPTY_OBJECT;
    const nextStateStyles = this.buildStyles(nextState, nextAnimationParams, errors);
    const queriedElements = /* @__PURE__ */ new Set();
    const preStyleMap = /* @__PURE__ */ new Map();
    const postStyleMap = /* @__PURE__ */ new Map();
    const isRemoval = nextState === "void";
    const animationOptions = {
      params: applyParamDefaults(nextAnimationParams, transitionAnimationParams),
      delay: this.ast.options?.delay
    };
    const timelines = skipAstBuild ? [] : buildAnimationTimelines(driver, element, this.ast.animation, enterClassName, leaveClassName, currentStateStyles, nextStateStyles, animationOptions, subInstructions, errors);
    let totalTime = 0;
    timelines.forEach((tl) => {
      totalTime = Math.max(tl.duration + tl.delay, totalTime);
    });
    if (errors.length) {
      return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, [], [], preStyleMap, postStyleMap, totalTime, errors);
    }
    timelines.forEach((tl) => {
      const elm = tl.element;
      const preProps = getOrSetDefaultValue(preStyleMap, elm, /* @__PURE__ */ new Set());
      tl.preStyleProps.forEach((prop) => preProps.add(prop));
      const postProps = getOrSetDefaultValue(postStyleMap, elm, /* @__PURE__ */ new Set());
      tl.postStyleProps.forEach((prop) => postProps.add(prop));
      if (elm !== element) {
        queriedElements.add(elm);
      }
    });
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkNonAnimatableInTimelines(timelines, this._triggerName, driver);
    }
    return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, timelines, [...queriedElements.values()], preStyleMap, postStyleMap, totalTime);
  }
};
function checkNonAnimatableInTimelines(timelines, triggerName, driver) {
  if (!driver.validateAnimatableStyleProperty) {
    return;
  }
  const allowedNonAnimatableProps = /* @__PURE__ */ new Set(["easing"]);
  const invalidNonAnimatableProps = /* @__PURE__ */ new Set();
  timelines.forEach(({
    keyframes
  }) => {
    const nonAnimatablePropsInitialValues = /* @__PURE__ */ new Map();
    keyframes.forEach((keyframe) => {
      const entriesToCheck = Array.from(keyframe.entries()).filter(([prop]) => !allowedNonAnimatableProps.has(prop));
      for (const [prop, value] of entriesToCheck) {
        if (!driver.validateAnimatableStyleProperty(prop)) {
          if (nonAnimatablePropsInitialValues.has(prop) && !invalidNonAnimatableProps.has(prop)) {
            const propInitialValue = nonAnimatablePropsInitialValues.get(prop);
            if (propInitialValue !== value) {
              invalidNonAnimatableProps.add(prop);
            }
          } else {
            nonAnimatablePropsInitialValues.set(prop, value);
          }
        }
      }
    });
  });
  if (invalidNonAnimatableProps.size > 0) {
    console.warn(`Warning: The animation trigger "${triggerName}" is attempting to animate the following not animatable properties: ` + Array.from(invalidNonAnimatableProps).join(", ") + "\n(to check the list of all animatable properties visit https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)");
  }
}
function oneOrMoreTransitionsMatch(matchFns, currentState, nextState, element, params) {
  return matchFns.some((fn) => fn(currentState, nextState, element, params));
}
function applyParamDefaults(userParams, defaults) {
  const result = __spreadValues({}, defaults);
  Object.entries(userParams).forEach(([key, value]) => {
    if (value != null) {
      result[key] = value;
    }
  });
  return result;
}
var AnimationStateStyles = class {
  styles;
  defaultParams;
  normalizer;
  constructor(styles, defaultParams, normalizer) {
    this.styles = styles;
    this.defaultParams = defaultParams;
    this.normalizer = normalizer;
  }
  buildStyles(params, errors) {
    const finalStyles = /* @__PURE__ */ new Map();
    const combinedParams = applyParamDefaults(params, this.defaultParams);
    this.styles.styles.forEach((value) => {
      if (typeof value !== "string") {
        value.forEach((val, prop) => {
          if (val) {
            val = interpolateParams(val, combinedParams, errors);
          }
          const normalizedProp = this.normalizer.normalizePropertyName(prop, errors);
          val = this.normalizer.normalizeStyleValue(prop, normalizedProp, val, errors);
          finalStyles.set(prop, val);
        });
      }
    });
    return finalStyles;
  }
};
function buildTrigger(name, ast, normalizer) {
  return new AnimationTrigger(name, ast, normalizer);
}
var AnimationTrigger = class {
  name;
  ast;
  _normalizer;
  transitionFactories = [];
  fallbackTransition;
  states = /* @__PURE__ */ new Map();
  constructor(name, ast, _normalizer) {
    this.name = name;
    this.ast = ast;
    this._normalizer = _normalizer;
    ast.states.forEach((ast2) => {
      const defaultParams = ast2.options && ast2.options.params || {};
      this.states.set(ast2.name, new AnimationStateStyles(ast2.style, defaultParams, _normalizer));
    });
    balanceProperties(this.states, "true", "1");
    balanceProperties(this.states, "false", "0");
    ast.transitions.forEach((ast2) => {
      this.transitionFactories.push(new AnimationTransitionFactory(name, ast2, this.states));
    });
    this.fallbackTransition = createFallbackTransition(name, this.states);
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(currentState, nextState, element, params) {
    const entry = this.transitionFactories.find((f11) => f11.match(currentState, nextState, element, params));
    return entry || null;
  }
  matchStyles(currentState, params, errors) {
    return this.fallbackTransition.buildStyles(currentState, params, errors);
  }
};
function createFallbackTransition(triggerName, states, normalizer) {
  const matchers = [(fromState, toState) => true];
  const animation = {
    type: AnimationMetadataType.Sequence,
    steps: [],
    options: null
  };
  const transition = {
    type: AnimationMetadataType.Transition,
    animation,
    matchers,
    options: null,
    queryCount: 0,
    depCount: 0
  };
  return new AnimationTransitionFactory(triggerName, transition, states);
}
function balanceProperties(stateMap, key1, key2) {
  if (stateMap.has(key1)) {
    if (!stateMap.has(key2)) {
      stateMap.set(key2, stateMap.get(key1));
    }
  } else if (stateMap.has(key2)) {
    stateMap.set(key1, stateMap.get(key2));
  }
}
var EMPTY_INSTRUCTION_MAP = /* @__PURE__ */ new ElementInstructionMap();
var TimelineAnimationEngine = class {
  bodyNode;
  _driver;
  _normalizer;
  _animations = /* @__PURE__ */ new Map();
  _playersById = /* @__PURE__ */ new Map();
  players = [];
  constructor(bodyNode, _driver, _normalizer) {
    this.bodyNode = bodyNode;
    this._driver = _driver;
    this._normalizer = _normalizer;
  }
  register(id, metadata) {
    const errors = [];
    const warnings = [];
    const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
    if (errors.length) {
      throw registerFailed(errors);
    } else {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (warnings.length) {
          warnRegister(warnings);
        }
      }
      this._animations.set(id, ast);
    }
  }
  _buildPlayer(i30, preStyles, postStyles) {
    const element = i30.element;
    const keyframes = normalizeKeyframes$1(this._normalizer, i30.keyframes, preStyles, postStyles);
    return this._driver.animate(element, keyframes, i30.duration, i30.delay, i30.easing, [], true);
  }
  create(id, element, options = {}) {
    const errors = [];
    const ast = this._animations.get(id);
    let instructions;
    const autoStylesMap = /* @__PURE__ */ new Map();
    if (ast) {
      instructions = buildAnimationTimelines(this._driver, element, ast, ENTER_CLASSNAME, LEAVE_CLASSNAME, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), options, EMPTY_INSTRUCTION_MAP, errors);
      instructions.forEach((inst) => {
        const styles = getOrSetDefaultValue(autoStylesMap, inst.element, /* @__PURE__ */ new Map());
        inst.postStyleProps.forEach((prop) => styles.set(prop, null));
      });
    } else {
      errors.push(missingOrDestroyedAnimation());
      instructions = [];
    }
    if (errors.length) {
      throw createAnimationFailed(errors);
    }
    autoStylesMap.forEach((styles, element2) => {
      styles.forEach((_, prop) => {
        styles.set(prop, this._driver.computeStyle(element2, prop, AUTO_STYLE));
      });
    });
    const players = instructions.map((i30) => {
      const styles = autoStylesMap.get(i30.element);
      return this._buildPlayer(i30, /* @__PURE__ */ new Map(), styles);
    });
    const player = optimizeGroupPlayer(players);
    this._playersById.set(id, player);
    player.onDestroy(() => this.destroy(id));
    this.players.push(player);
    return player;
  }
  destroy(id) {
    const player = this._getPlayer(id);
    player.destroy();
    this._playersById.delete(id);
    const index = this.players.indexOf(player);
    if (index >= 0) {
      this.players.splice(index, 1);
    }
  }
  _getPlayer(id) {
    const player = this._playersById.get(id);
    if (!player) {
      throw missingPlayer(id);
    }
    return player;
  }
  listen(id, element, eventName, callback) {
    const baseEvent = makeAnimationEvent(element, "", "", "");
    listenOnPlayer(this._getPlayer(id), eventName, baseEvent, callback);
    return () => {
    };
  }
  command(id, element, command, args) {
    if (command == "register") {
      this.register(id, args[0]);
      return;
    }
    if (command == "create") {
      const options = args[0] || {};
      this.create(id, element, options);
      return;
    }
    const player = this._getPlayer(id);
    switch (command) {
      case "play":
        player.play();
        break;
      case "pause":
        player.pause();
        break;
      case "reset":
        player.reset();
        break;
      case "restart":
        player.restart();
        break;
      case "finish":
        player.finish();
        break;
      case "init":
        player.init();
        break;
      case "setPosition":
        player.setPosition(parseFloat(args[0]));
        break;
      case "destroy":
        this.destroy(id);
        break;
    }
  }
};
var QUEUED_CLASSNAME = "ng-animate-queued";
var QUEUED_SELECTOR = ".ng-animate-queued";
var DISABLED_CLASSNAME = "ng-animate-disabled";
var DISABLED_SELECTOR = ".ng-animate-disabled";
var STAR_CLASSNAME = "ng-star-inserted";
var STAR_SELECTOR = ".ng-star-inserted";
var EMPTY_PLAYER_ARRAY = [];
var NULL_REMOVAL_STATE = {
  namespaceId: "",
  setForRemoval: false,
  setForMove: false,
  hasAnimation: false,
  removedBeforeQueried: false
};
var NULL_REMOVED_QUERIED_STATE = {
  namespaceId: "",
  setForMove: false,
  setForRemoval: false,
  hasAnimation: false,
  removedBeforeQueried: true
};
var REMOVAL_FLAG = "__ng_removed";
var StateValue = class {
  namespaceId;
  value;
  options;
  get params() {
    return this.options.params;
  }
  constructor(input, namespaceId = "") {
    this.namespaceId = namespaceId;
    const isObj = input && input.hasOwnProperty("value");
    const value = isObj ? input["value"] : input;
    this.value = normalizeTriggerValue(value);
    if (isObj) {
      const _a = input, {
        value: value2
      } = _a, options = __objRest(_a, [
        "value"
      ]);
      this.options = options;
    } else {
      this.options = {};
    }
    if (!this.options.params) {
      this.options.params = {};
    }
  }
  absorbOptions(options) {
    const newParams = options.params;
    if (newParams) {
      const oldParams = this.options.params;
      Object.keys(newParams).forEach((prop) => {
        if (oldParams[prop] == null) {
          oldParams[prop] = newParams[prop];
        }
      });
    }
  }
};
var VOID_VALUE = "void";
var DEFAULT_STATE_VALUE = /* @__PURE__ */ new StateValue(VOID_VALUE);
var AnimationTransitionNamespace = class {
  id;
  hostElement;
  _engine;
  players = [];
  _triggers = /* @__PURE__ */ new Map();
  _queue = [];
  _elementListeners = /* @__PURE__ */ new Map();
  _hostClassName;
  constructor(id, hostElement, _engine) {
    this.id = id;
    this.hostElement = hostElement;
    this._engine = _engine;
    this._hostClassName = "ng-tns-" + id;
    addClass(hostElement, this._hostClassName);
  }
  listen(element, name, phase, callback) {
    if (!this._triggers.has(name)) {
      throw missingTrigger(phase, name);
    }
    if (phase == null || phase.length == 0) {
      throw missingEvent(name);
    }
    if (!isTriggerEventValid(phase)) {
      throw unsupportedTriggerEvent(phase, name);
    }
    const listeners = getOrSetDefaultValue(this._elementListeners, element, []);
    const data = {
      name,
      phase,
      callback
    };
    listeners.push(data);
    const triggersWithStates = getOrSetDefaultValue(this._engine.statesByElement, element, /* @__PURE__ */ new Map());
    if (!triggersWithStates.has(name)) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + name);
      triggersWithStates.set(name, DEFAULT_STATE_VALUE);
    }
    return () => {
      this._engine.afterFlush(() => {
        const index = listeners.indexOf(data);
        if (index >= 0) {
          listeners.splice(index, 1);
        }
        if (!this._triggers.has(name)) {
          triggersWithStates.delete(name);
        }
      });
    };
  }
  register(name, ast) {
    if (this._triggers.has(name)) {
      return false;
    } else {
      this._triggers.set(name, ast);
      return true;
    }
  }
  _getTrigger(name) {
    const trigger = this._triggers.get(name);
    if (!trigger) {
      throw unregisteredTrigger(name);
    }
    return trigger;
  }
  trigger(element, triggerName, value, defaultToFallback = true) {
    const trigger = this._getTrigger(triggerName);
    const player = new TransitionAnimationPlayer(this.id, triggerName, element);
    let triggersWithStates = this._engine.statesByElement.get(element);
    if (!triggersWithStates) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + triggerName);
      this._engine.statesByElement.set(element, triggersWithStates = /* @__PURE__ */ new Map());
    }
    let fromState = triggersWithStates.get(triggerName);
    const toState = new StateValue(value, this.id);
    const isObj = value && value.hasOwnProperty("value");
    if (!isObj && fromState) {
      toState.absorbOptions(fromState.options);
    }
    triggersWithStates.set(triggerName, toState);
    if (!fromState) {
      fromState = DEFAULT_STATE_VALUE;
    }
    const isRemoval = toState.value === VOID_VALUE;
    if (!isRemoval && fromState.value === toState.value) {
      if (!objEquals(fromState.params, toState.params)) {
        const errors = [];
        const fromStyles = trigger.matchStyles(fromState.value, fromState.params, errors);
        const toStyles = trigger.matchStyles(toState.value, toState.params, errors);
        if (errors.length) {
          this._engine.reportError(errors);
        } else {
          this._engine.afterFlush(() => {
            eraseStyles(element, fromStyles);
            setStyles(element, toStyles);
          });
        }
      }
      return;
    }
    const playersOnElement = getOrSetDefaultValue(this._engine.playersByElement, element, []);
    playersOnElement.forEach((player2) => {
      if (player2.namespaceId == this.id && player2.triggerName == triggerName && player2.queued) {
        player2.destroy();
      }
    });
    let transition = trigger.matchTransition(fromState.value, toState.value, element, toState.params);
    let isFallbackTransition = false;
    if (!transition) {
      if (!defaultToFallback) return;
      transition = trigger.fallbackTransition;
      isFallbackTransition = true;
    }
    this._engine.totalQueuedPlayers++;
    this._queue.push({
      element,
      triggerName,
      transition,
      fromState,
      toState,
      player,
      isFallbackTransition
    });
    if (!isFallbackTransition) {
      addClass(element, QUEUED_CLASSNAME);
      player.onStart(() => {
        removeClass(element, QUEUED_CLASSNAME);
      });
    }
    player.onDone(() => {
      let index = this.players.indexOf(player);
      if (index >= 0) {
        this.players.splice(index, 1);
      }
      const players = this._engine.playersByElement.get(element);
      if (players) {
        let index2 = players.indexOf(player);
        if (index2 >= 0) {
          players.splice(index2, 1);
        }
      }
    });
    this.players.push(player);
    playersOnElement.push(player);
    return player;
  }
  deregister(name) {
    this._triggers.delete(name);
    this._engine.statesByElement.forEach((stateMap) => stateMap.delete(name));
    this._elementListeners.forEach((listeners, element) => {
      this._elementListeners.set(element, listeners.filter((entry) => {
        return entry.name != name;
      }));
    });
  }
  clearElementCache(element) {
    this._engine.statesByElement.delete(element);
    this._elementListeners.delete(element);
    const elementPlayers = this._engine.playersByElement.get(element);
    if (elementPlayers) {
      elementPlayers.forEach((player) => player.destroy());
      this._engine.playersByElement.delete(element);
    }
  }
  _signalRemovalForInnerTriggers(rootElement, context) {
    const elements = this._engine.driver.query(rootElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((elm) => {
      if (elm[REMOVAL_FLAG]) return;
      const namespaces = this._engine.fetchNamespacesByElement(elm);
      if (namespaces.size) {
        namespaces.forEach((ns) => ns.triggerLeaveAnimation(elm, context, false, true));
      } else {
        this.clearElementCache(elm);
      }
    });
    this._engine.afterFlushAnimationsDone(() => elements.forEach((elm) => this.clearElementCache(elm)));
  }
  triggerLeaveAnimation(element, context, destroyAfterComplete, defaultToFallback) {
    const triggerStates = this._engine.statesByElement.get(element);
    const previousTriggersValues = /* @__PURE__ */ new Map();
    if (triggerStates) {
      const players = [];
      triggerStates.forEach((state, triggerName) => {
        previousTriggersValues.set(triggerName, state.value);
        if (this._triggers.has(triggerName)) {
          const player = this.trigger(element, triggerName, VOID_VALUE, defaultToFallback);
          if (player) {
            players.push(player);
          }
        }
      });
      if (players.length) {
        this._engine.markElementAsRemoved(this.id, element, true, context, previousTriggersValues);
        if (destroyAfterComplete) {
          optimizeGroupPlayer(players).onDone(() => this._engine.processLeaveNode(element));
        }
        return true;
      }
    }
    return false;
  }
  prepareLeaveAnimationListeners(element) {
    const listeners = this._elementListeners.get(element);
    const elementStates = this._engine.statesByElement.get(element);
    if (listeners && elementStates) {
      const visitedTriggers = /* @__PURE__ */ new Set();
      listeners.forEach((listener) => {
        const triggerName = listener.name;
        if (visitedTriggers.has(triggerName)) return;
        visitedTriggers.add(triggerName);
        const trigger = this._triggers.get(triggerName);
        const transition = trigger.fallbackTransition;
        const fromState = elementStates.get(triggerName) || DEFAULT_STATE_VALUE;
        const toState = new StateValue(VOID_VALUE);
        const player = new TransitionAnimationPlayer(this.id, triggerName, element);
        this._engine.totalQueuedPlayers++;
        this._queue.push({
          element,
          triggerName,
          transition,
          fromState,
          toState,
          player,
          isFallbackTransition: true
        });
      });
    }
  }
  removeNode(element, context) {
    const engine = this._engine;
    if (element.childElementCount) {
      this._signalRemovalForInnerTriggers(element, context);
    }
    if (this.triggerLeaveAnimation(element, context, true)) return;
    let containsPotentialParentTransition = false;
    if (engine.totalAnimations) {
      const currentPlayers = engine.players.length ? engine.playersByQueriedElement.get(element) : [];
      if (currentPlayers && currentPlayers.length) {
        containsPotentialParentTransition = true;
      } else {
        let parent = element;
        while (parent = parent.parentNode) {
          const triggers = engine.statesByElement.get(parent);
          if (triggers) {
            containsPotentialParentTransition = true;
            break;
          }
        }
      }
    }
    this.prepareLeaveAnimationListeners(element);
    if (containsPotentialParentTransition) {
      engine.markElementAsRemoved(this.id, element, false, context);
    } else {
      const removalFlag = element[REMOVAL_FLAG];
      if (!removalFlag || removalFlag === NULL_REMOVAL_STATE) {
        engine.afterFlush(() => this.clearElementCache(element));
        engine.destroyInnerAnimations(element);
        engine._onRemovalComplete(element, context);
      }
    }
  }
  insertNode(element, parent) {
    addClass(element, this._hostClassName);
  }
  drainQueuedTransitions(microtaskId) {
    const instructions = [];
    this._queue.forEach((entry) => {
      const player = entry.player;
      if (player.destroyed) return;
      const element = entry.element;
      const listeners = this._elementListeners.get(element);
      if (listeners) {
        listeners.forEach((listener) => {
          if (listener.name == entry.triggerName) {
            const baseEvent = makeAnimationEvent(element, entry.triggerName, entry.fromState.value, entry.toState.value);
            baseEvent["_data"] = microtaskId;
            listenOnPlayer(entry.player, listener.phase, baseEvent, listener.callback);
          }
        });
      }
      if (player.markedForDestroy) {
        this._engine.afterFlush(() => {
          player.destroy();
        });
      } else {
        instructions.push(entry);
      }
    });
    this._queue = [];
    return instructions.sort((a44, b7) => {
      const d0 = a44.transition.ast.depCount;
      const d1 = b7.transition.ast.depCount;
      if (d0 == 0 || d1 == 0) {
        return d0 - d1;
      }
      return this._engine.driver.containsElement(a44.element, b7.element) ? 1 : -1;
    });
  }
  destroy(context) {
    this.players.forEach((p6) => p6.destroy());
    this._signalRemovalForInnerTriggers(this.hostElement, context);
  }
};
var TransitionAnimationEngine = class {
  bodyNode;
  driver;
  _normalizer;
  players = [];
  newHostElements = /* @__PURE__ */ new Map();
  playersByElement = /* @__PURE__ */ new Map();
  playersByQueriedElement = /* @__PURE__ */ new Map();
  statesByElement = /* @__PURE__ */ new Map();
  disabledNodes = /* @__PURE__ */ new Set();
  totalAnimations = 0;
  totalQueuedPlayers = 0;
  _namespaceLookup = {};
  _namespaceList = [];
  _flushFns = [];
  _whenQuietFns = [];
  namespacesByHostElement = /* @__PURE__ */ new Map();
  collectedEnterElements = [];
  collectedLeaveElements = [];
  onRemovalComplete = (element, context) => {
  };
  _onRemovalComplete(element, context) {
    this.onRemovalComplete(element, context);
  }
  constructor(bodyNode, driver, _normalizer) {
    this.bodyNode = bodyNode;
    this.driver = driver;
    this._normalizer = _normalizer;
  }
  get queuedPlayers() {
    const players = [];
    this._namespaceList.forEach((ns) => {
      ns.players.forEach((player) => {
        if (player.queued) {
          players.push(player);
        }
      });
    });
    return players;
  }
  createNamespace(namespaceId, hostElement) {
    const ns = new AnimationTransitionNamespace(namespaceId, hostElement, this);
    if (this.bodyNode && this.driver.containsElement(this.bodyNode, hostElement)) {
      this._balanceNamespaceList(ns, hostElement);
    } else {
      this.newHostElements.set(hostElement, ns);
      this.collectEnterElement(hostElement);
    }
    return this._namespaceLookup[namespaceId] = ns;
  }
  _balanceNamespaceList(ns, hostElement) {
    const namespaceList = this._namespaceList;
    const namespacesByHostElement = this.namespacesByHostElement;
    const limit = namespaceList.length - 1;
    if (limit >= 0) {
      let found = false;
      let ancestor = this.driver.getParentElement(hostElement);
      while (ancestor) {
        const ancestorNs = namespacesByHostElement.get(ancestor);
        if (ancestorNs) {
          const index = namespaceList.indexOf(ancestorNs);
          namespaceList.splice(index + 1, 0, ns);
          found = true;
          break;
        }
        ancestor = this.driver.getParentElement(ancestor);
      }
      if (!found) {
        namespaceList.unshift(ns);
      }
    } else {
      namespaceList.push(ns);
    }
    namespacesByHostElement.set(hostElement, ns);
    return ns;
  }
  register(namespaceId, hostElement) {
    let ns = this._namespaceLookup[namespaceId];
    if (!ns) {
      ns = this.createNamespace(namespaceId, hostElement);
    }
    return ns;
  }
  registerTrigger(namespaceId, name, trigger) {
    let ns = this._namespaceLookup[namespaceId];
    if (ns && ns.register(name, trigger)) {
      this.totalAnimations++;
    }
  }
  destroy(namespaceId, context) {
    if (!namespaceId) return;
    this.afterFlush(() => {
    });
    this.afterFlushAnimationsDone(() => {
      const ns = this._fetchNamespace(namespaceId);
      this.namespacesByHostElement.delete(ns.hostElement);
      const index = this._namespaceList.indexOf(ns);
      if (index >= 0) {
        this._namespaceList.splice(index, 1);
      }
      ns.destroy(context);
      delete this._namespaceLookup[namespaceId];
    });
  }
  _fetchNamespace(id) {
    return this._namespaceLookup[id];
  }
  fetchNamespacesByElement(element) {
    const namespaces = /* @__PURE__ */ new Set();
    const elementStates = this.statesByElement.get(element);
    if (elementStates) {
      for (let stateValue of elementStates.values()) {
        if (stateValue.namespaceId) {
          const ns = this._fetchNamespace(stateValue.namespaceId);
          if (ns) {
            namespaces.add(ns);
          }
        }
      }
    }
    return namespaces;
  }
  trigger(namespaceId, element, name, value) {
    if (isElementNode(element)) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.trigger(element, name, value);
        return true;
      }
    }
    return false;
  }
  insertNode(namespaceId, element, parent, insertBefore) {
    if (!isElementNode(element)) return;
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      details.setForRemoval = false;
      details.setForMove = true;
      const index = this.collectedLeaveElements.indexOf(element);
      if (index >= 0) {
        this.collectedLeaveElements.splice(index, 1);
      }
    }
    if (namespaceId) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.insertNode(element, parent);
      }
    }
    if (insertBefore) {
      this.collectEnterElement(element);
    }
  }
  collectEnterElement(element) {
    this.collectedEnterElements.push(element);
  }
  markElementAsDisabled(element, value) {
    if (value) {
      if (!this.disabledNodes.has(element)) {
        this.disabledNodes.add(element);
        addClass(element, DISABLED_CLASSNAME);
      }
    } else if (this.disabledNodes.has(element)) {
      this.disabledNodes.delete(element);
      removeClass(element, DISABLED_CLASSNAME);
    }
  }
  removeNode(namespaceId, element, context) {
    if (isElementNode(element)) {
      const ns = namespaceId ? this._fetchNamespace(namespaceId) : null;
      if (ns) {
        ns.removeNode(element, context);
      } else {
        this.markElementAsRemoved(namespaceId, element, false, context);
      }
      const hostNS = this.namespacesByHostElement.get(element);
      if (hostNS && hostNS.id !== namespaceId) {
        hostNS.removeNode(element, context);
      }
    } else {
      this._onRemovalComplete(element, context);
    }
  }
  markElementAsRemoved(namespaceId, element, hasAnimation, context, previousTriggersValues) {
    this.collectedLeaveElements.push(element);
    element[REMOVAL_FLAG] = {
      namespaceId,
      setForRemoval: context,
      hasAnimation,
      removedBeforeQueried: false,
      previousTriggersValues
    };
  }
  listen(namespaceId, element, name, phase, callback) {
    if (isElementNode(element)) {
      return this._fetchNamespace(namespaceId).listen(element, name, phase, callback);
    }
    return () => {
    };
  }
  _buildInstruction(entry, subTimelines, enterClassName, leaveClassName, skipBuildAst) {
    return entry.transition.build(this.driver, entry.element, entry.fromState.value, entry.toState.value, enterClassName, leaveClassName, entry.fromState.options, entry.toState.options, subTimelines, skipBuildAst);
  }
  destroyInnerAnimations(containerElement) {
    let elements = this.driver.query(containerElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((element) => this.destroyActiveAnimationsForElement(element));
    if (this.playersByQueriedElement.size == 0) return;
    elements = this.driver.query(containerElement, NG_ANIMATING_SELECTOR, true);
    elements.forEach((element) => this.finishActiveQueriedAnimationOnElement(element));
  }
  destroyActiveAnimationsForElement(element) {
    const players = this.playersByElement.get(element);
    if (players) {
      players.forEach((player) => {
        if (player.queued) {
          player.markedForDestroy = true;
        } else {
          player.destroy();
        }
      });
    }
  }
  finishActiveQueriedAnimationOnElement(element) {
    const players = this.playersByQueriedElement.get(element);
    if (players) {
      players.forEach((player) => player.finish());
    }
  }
  whenRenderingDone() {
    return new Promise((resolve) => {
      if (this.players.length) {
        return optimizeGroupPlayer(this.players).onDone(() => resolve());
      } else {
        resolve();
      }
    });
  }
  processLeaveNode(element) {
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      element[REMOVAL_FLAG] = NULL_REMOVAL_STATE;
      if (details.namespaceId) {
        this.destroyInnerAnimations(element);
        const ns = this._fetchNamespace(details.namespaceId);
        if (ns) {
          ns.clearElementCache(element);
        }
      }
      this._onRemovalComplete(element, details.setForRemoval);
    }
    if (element.classList?.contains(DISABLED_CLASSNAME)) {
      this.markElementAsDisabled(element, false);
    }
    this.driver.query(element, DISABLED_SELECTOR, true).forEach((node) => {
      this.markElementAsDisabled(node, false);
    });
  }
  flush(microtaskId = -1) {
    let players = [];
    if (this.newHostElements.size) {
      this.newHostElements.forEach((ns, element) => this._balanceNamespaceList(ns, element));
      this.newHostElements.clear();
    }
    if (this.totalAnimations && this.collectedEnterElements.length) {
      for (let i30 = 0; i30 < this.collectedEnterElements.length; i30++) {
        const elm = this.collectedEnterElements[i30];
        addClass(elm, STAR_CLASSNAME);
      }
    }
    if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
      const cleanupFns = [];
      try {
        players = this._flushAnimations(cleanupFns, microtaskId);
      } finally {
        for (let i30 = 0; i30 < cleanupFns.length; i30++) {
          cleanupFns[i30]();
        }
      }
    } else {
      for (let i30 = 0; i30 < this.collectedLeaveElements.length; i30++) {
        const element = this.collectedLeaveElements[i30];
        this.processLeaveNode(element);
      }
    }
    this.totalQueuedPlayers = 0;
    this.collectedEnterElements.length = 0;
    this.collectedLeaveElements.length = 0;
    this._flushFns.forEach((fn) => fn());
    this._flushFns = [];
    if (this._whenQuietFns.length) {
      const quietFns = this._whenQuietFns;
      this._whenQuietFns = [];
      if (players.length) {
        optimizeGroupPlayer(players).onDone(() => {
          quietFns.forEach((fn) => fn());
        });
      } else {
        quietFns.forEach((fn) => fn());
      }
    }
  }
  reportError(errors) {
    throw triggerTransitionsFailed(errors);
  }
  _flushAnimations(cleanupFns, microtaskId) {
    const subTimelines = new ElementInstructionMap();
    const skippedPlayers = [];
    const skippedPlayersMap = /* @__PURE__ */ new Map();
    const queuedInstructions = [];
    const queriedElements = /* @__PURE__ */ new Map();
    const allPreStyleElements = /* @__PURE__ */ new Map();
    const allPostStyleElements = /* @__PURE__ */ new Map();
    const disabledElementsSet = /* @__PURE__ */ new Set();
    this.disabledNodes.forEach((node) => {
      disabledElementsSet.add(node);
      const nodesThatAreDisabled = this.driver.query(node, QUEUED_SELECTOR, true);
      for (let i31 = 0; i31 < nodesThatAreDisabled.length; i31++) {
        disabledElementsSet.add(nodesThatAreDisabled[i31]);
      }
    });
    const bodyNode = this.bodyNode;
    const allTriggerElements = Array.from(this.statesByElement.keys());
    const enterNodeMap = buildRootMap(allTriggerElements, this.collectedEnterElements);
    const enterNodeMapIds = /* @__PURE__ */ new Map();
    let i30 = 0;
    enterNodeMap.forEach((nodes, root) => {
      const className = ENTER_CLASSNAME + i30++;
      enterNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    const allLeaveNodes = [];
    const mergedLeaveNodes = /* @__PURE__ */ new Set();
    const leaveNodesWithoutAnimations = /* @__PURE__ */ new Set();
    for (let i31 = 0; i31 < this.collectedLeaveElements.length; i31++) {
      const element = this.collectedLeaveElements[i31];
      const details = element[REMOVAL_FLAG];
      if (details && details.setForRemoval) {
        allLeaveNodes.push(element);
        mergedLeaveNodes.add(element);
        if (details.hasAnimation) {
          this.driver.query(element, STAR_SELECTOR, true).forEach((elm) => mergedLeaveNodes.add(elm));
        } else {
          leaveNodesWithoutAnimations.add(element);
        }
      }
    }
    const leaveNodeMapIds = /* @__PURE__ */ new Map();
    const leaveNodeMap = buildRootMap(allTriggerElements, Array.from(mergedLeaveNodes));
    leaveNodeMap.forEach((nodes, root) => {
      const className = LEAVE_CLASSNAME + i30++;
      leaveNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    cleanupFns.push(() => {
      enterNodeMap.forEach((nodes, root) => {
        const className = enterNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      leaveNodeMap.forEach((nodes, root) => {
        const className = leaveNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      allLeaveNodes.forEach((element) => {
        this.processLeaveNode(element);
      });
    });
    const allPlayers = [];
    const erroneousTransitions = [];
    for (let i31 = this._namespaceList.length - 1; i31 >= 0; i31--) {
      const ns = this._namespaceList[i31];
      ns.drainQueuedTransitions(microtaskId).forEach((entry) => {
        const player = entry.player;
        const element = entry.element;
        allPlayers.push(player);
        if (this.collectedEnterElements.length) {
          const details = element[REMOVAL_FLAG];
          if (details && details.setForMove) {
            if (details.previousTriggersValues && details.previousTriggersValues.has(entry.triggerName)) {
              const previousValue = details.previousTriggersValues.get(entry.triggerName);
              const triggersWithStates = this.statesByElement.get(entry.element);
              if (triggersWithStates && triggersWithStates.has(entry.triggerName)) {
                const state = triggersWithStates.get(entry.triggerName);
                state.value = previousValue;
                triggersWithStates.set(entry.triggerName, state);
              }
            }
            player.destroy();
            return;
          }
        }
        const nodeIsOrphaned = !bodyNode || !this.driver.containsElement(bodyNode, element);
        const leaveClassName = leaveNodeMapIds.get(element);
        const enterClassName = enterNodeMapIds.get(element);
        const instruction = this._buildInstruction(entry, subTimelines, enterClassName, leaveClassName, nodeIsOrphaned);
        if (instruction.errors && instruction.errors.length) {
          erroneousTransitions.push(instruction);
          return;
        }
        if (nodeIsOrphaned) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        if (entry.isFallbackTransition) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        const timelines = [];
        instruction.timelines.forEach((tl) => {
          tl.stretchStartingKeyframe = true;
          if (!this.disabledNodes.has(tl.element)) {
            timelines.push(tl);
          }
        });
        instruction.timelines = timelines;
        subTimelines.append(element, instruction.timelines);
        const tuple = {
          instruction,
          player,
          element
        };
        queuedInstructions.push(tuple);
        instruction.queriedElements.forEach((element2) => getOrSetDefaultValue(queriedElements, element2, []).push(player));
        instruction.preStyleProps.forEach((stringMap, element2) => {
          if (stringMap.size) {
            let setVal = allPreStyleElements.get(element2);
            if (!setVal) {
              allPreStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
            }
            stringMap.forEach((_, prop) => setVal.add(prop));
          }
        });
        instruction.postStyleProps.forEach((stringMap, element2) => {
          let setVal = allPostStyleElements.get(element2);
          if (!setVal) {
            allPostStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
          }
          stringMap.forEach((_, prop) => setVal.add(prop));
        });
      });
    }
    if (erroneousTransitions.length) {
      const errors = [];
      erroneousTransitions.forEach((instruction) => {
        errors.push(transitionFailed(instruction.triggerName, instruction.errors));
      });
      allPlayers.forEach((player) => player.destroy());
      this.reportError(errors);
    }
    const allPreviousPlayersMap = /* @__PURE__ */ new Map();
    const animationElementMap = /* @__PURE__ */ new Map();
    queuedInstructions.forEach((entry) => {
      const element = entry.element;
      if (subTimelines.has(element)) {
        animationElementMap.set(element, element);
        this._beforeAnimationBuild(entry.player.namespaceId, entry.instruction, allPreviousPlayersMap);
      }
    });
    skippedPlayers.forEach((player) => {
      const element = player.element;
      const previousPlayers = this._getPreviousPlayers(element, false, player.namespaceId, player.triggerName, null);
      previousPlayers.forEach((prevPlayer) => {
        getOrSetDefaultValue(allPreviousPlayersMap, element, []).push(prevPlayer);
        prevPlayer.destroy();
      });
    });
    const replaceNodes = allLeaveNodes.filter((node) => {
      return replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements);
    });
    const postStylesMap = /* @__PURE__ */ new Map();
    const allLeaveQueriedNodes = cloakAndComputeStyles(postStylesMap, this.driver, leaveNodesWithoutAnimations, allPostStyleElements, AUTO_STYLE);
    allLeaveQueriedNodes.forEach((node) => {
      if (replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements)) {
        replaceNodes.push(node);
      }
    });
    const preStylesMap = /* @__PURE__ */ new Map();
    enterNodeMap.forEach((nodes, root) => {
      cloakAndComputeStyles(preStylesMap, this.driver, new Set(nodes), allPreStyleElements, \u0275PRE_STYLE);
    });
    replaceNodes.forEach((node) => {
      const post = postStylesMap.get(node);
      const pre = preStylesMap.get(node);
      postStylesMap.set(node, new Map([...post?.entries() ?? [], ...pre?.entries() ?? []]));
    });
    const rootPlayers = [];
    const subPlayers = [];
    const NO_PARENT_ANIMATION_ELEMENT_DETECTED = {};
    queuedInstructions.forEach((entry) => {
      const {
        element,
        player,
        instruction
      } = entry;
      if (subTimelines.has(element)) {
        if (disabledElementsSet.has(element)) {
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          player.disabled = true;
          player.overrideTotalTime(instruction.totalTime);
          skippedPlayers.push(player);
          return;
        }
        let parentWithAnimation = NO_PARENT_ANIMATION_ELEMENT_DETECTED;
        if (animationElementMap.size > 1) {
          let elm = element;
          const parentsToAdd = [];
          while (elm = elm.parentNode) {
            const detectedParent = animationElementMap.get(elm);
            if (detectedParent) {
              parentWithAnimation = detectedParent;
              break;
            }
            parentsToAdd.push(elm);
          }
          parentsToAdd.forEach((parent) => animationElementMap.set(parent, parentWithAnimation));
        }
        const innerPlayer = this._buildAnimation(player.namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap);
        player.setRealPlayer(innerPlayer);
        if (parentWithAnimation === NO_PARENT_ANIMATION_ELEMENT_DETECTED) {
          rootPlayers.push(player);
        } else {
          const parentPlayers = this.playersByElement.get(parentWithAnimation);
          if (parentPlayers && parentPlayers.length) {
            player.parentPlayer = optimizeGroupPlayer(parentPlayers);
          }
          skippedPlayers.push(player);
        }
      } else {
        eraseStyles(element, instruction.fromStyles);
        player.onDestroy(() => setStyles(element, instruction.toStyles));
        subPlayers.push(player);
        if (disabledElementsSet.has(element)) {
          skippedPlayers.push(player);
        }
      }
    });
    subPlayers.forEach((player) => {
      const playersForElement = skippedPlayersMap.get(player.element);
      if (playersForElement && playersForElement.length) {
        const innerPlayer = optimizeGroupPlayer(playersForElement);
        player.setRealPlayer(innerPlayer);
      }
    });
    skippedPlayers.forEach((player) => {
      if (player.parentPlayer) {
        player.syncPlayerEvents(player.parentPlayer);
      } else {
        player.destroy();
      }
    });
    for (let i31 = 0; i31 < allLeaveNodes.length; i31++) {
      const element = allLeaveNodes[i31];
      const details = element[REMOVAL_FLAG];
      removeClass(element, LEAVE_CLASSNAME);
      if (details && details.hasAnimation) continue;
      let players = [];
      if (queriedElements.size) {
        let queriedPlayerResults = queriedElements.get(element);
        if (queriedPlayerResults && queriedPlayerResults.length) {
          players.push(...queriedPlayerResults);
        }
        let queriedInnerElements = this.driver.query(element, NG_ANIMATING_SELECTOR, true);
        for (let j = 0; j < queriedInnerElements.length; j++) {
          let queriedPlayers = queriedElements.get(queriedInnerElements[j]);
          if (queriedPlayers && queriedPlayers.length) {
            players.push(...queriedPlayers);
          }
        }
      }
      const activePlayers = players.filter((p6) => !p6.destroyed);
      if (activePlayers.length) {
        removeNodesAfterAnimationDone(this, element, activePlayers);
      } else {
        this.processLeaveNode(element);
      }
    }
    allLeaveNodes.length = 0;
    rootPlayers.forEach((player) => {
      this.players.push(player);
      player.onDone(() => {
        player.destroy();
        const index = this.players.indexOf(player);
        this.players.splice(index, 1);
      });
      player.play();
    });
    return rootPlayers;
  }
  afterFlush(callback) {
    this._flushFns.push(callback);
  }
  afterFlushAnimationsDone(callback) {
    this._whenQuietFns.push(callback);
  }
  _getPreviousPlayers(element, isQueriedElement, namespaceId, triggerName, toStateValue) {
    let players = [];
    if (isQueriedElement) {
      const queriedElementPlayers = this.playersByQueriedElement.get(element);
      if (queriedElementPlayers) {
        players = queriedElementPlayers;
      }
    } else {
      const elementPlayers = this.playersByElement.get(element);
      if (elementPlayers) {
        const isRemovalAnimation = !toStateValue || toStateValue == VOID_VALUE;
        elementPlayers.forEach((player) => {
          if (player.queued) return;
          if (!isRemovalAnimation && player.triggerName != triggerName) return;
          players.push(player);
        });
      }
    }
    if (namespaceId || triggerName) {
      players = players.filter((player) => {
        if (namespaceId && namespaceId != player.namespaceId) return false;
        if (triggerName && triggerName != player.triggerName) return false;
        return true;
      });
    }
    return players;
  }
  _beforeAnimationBuild(namespaceId, instruction, allPreviousPlayersMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const targetNameSpaceId = instruction.isRemovalTransition ? void 0 : namespaceId;
    const targetTriggerName = instruction.isRemovalTransition ? void 0 : triggerName;
    for (const timelineInstruction of instruction.timelines) {
      const element = timelineInstruction.element;
      const isQueriedElement = element !== rootElement;
      const players = getOrSetDefaultValue(allPreviousPlayersMap, element, []);
      const previousPlayers = this._getPreviousPlayers(element, isQueriedElement, targetNameSpaceId, targetTriggerName, instruction.toState);
      previousPlayers.forEach((player) => {
        const realPlayer = player.getRealPlayer();
        if (realPlayer.beforeDestroy) {
          realPlayer.beforeDestroy();
        }
        player.destroy();
        players.push(player);
      });
    }
    eraseStyles(rootElement, instruction.fromStyles);
  }
  _buildAnimation(namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const allQueriedPlayers = [];
    const allConsumedElements = /* @__PURE__ */ new Set();
    const allSubElements = /* @__PURE__ */ new Set();
    const allNewPlayers = instruction.timelines.map((timelineInstruction) => {
      const element = timelineInstruction.element;
      allConsumedElements.add(element);
      const details = element[REMOVAL_FLAG];
      if (details && details.removedBeforeQueried) return new NoopAnimationPlayer(timelineInstruction.duration, timelineInstruction.delay);
      const isQueriedElement = element !== rootElement;
      const previousPlayers = flattenGroupPlayers((allPreviousPlayersMap.get(element) || EMPTY_PLAYER_ARRAY).map((p6) => p6.getRealPlayer())).filter((p6) => {
        const pp = p6;
        return pp.element ? pp.element === element : false;
      });
      const preStyles = preStylesMap.get(element);
      const postStyles = postStylesMap.get(element);
      const keyframes = normalizeKeyframes$1(this._normalizer, timelineInstruction.keyframes, preStyles, postStyles);
      const player2 = this._buildPlayer(timelineInstruction, keyframes, previousPlayers);
      if (timelineInstruction.subTimeline && skippedPlayersMap) {
        allSubElements.add(element);
      }
      if (isQueriedElement) {
        const wrappedPlayer = new TransitionAnimationPlayer(namespaceId, triggerName, element);
        wrappedPlayer.setRealPlayer(player2);
        allQueriedPlayers.push(wrappedPlayer);
      }
      return player2;
    });
    allQueriedPlayers.forEach((player2) => {
      getOrSetDefaultValue(this.playersByQueriedElement, player2.element, []).push(player2);
      player2.onDone(() => deleteOrUnsetInMap(this.playersByQueriedElement, player2.element, player2));
    });
    allConsumedElements.forEach((element) => addClass(element, NG_ANIMATING_CLASSNAME));
    const player = optimizeGroupPlayer(allNewPlayers);
    player.onDestroy(() => {
      allConsumedElements.forEach((element) => removeClass(element, NG_ANIMATING_CLASSNAME));
      setStyles(rootElement, instruction.toStyles);
    });
    allSubElements.forEach((element) => {
      getOrSetDefaultValue(skippedPlayersMap, element, []).push(player);
    });
    return player;
  }
  _buildPlayer(instruction, keyframes, previousPlayers) {
    if (keyframes.length > 0) {
      return this.driver.animate(instruction.element, keyframes, instruction.duration, instruction.delay, instruction.easing, previousPlayers);
    }
    return new NoopAnimationPlayer(instruction.duration, instruction.delay);
  }
};
var TransitionAnimationPlayer = class {
  namespaceId;
  triggerName;
  element;
  _player = new NoopAnimationPlayer();
  _containsRealPlayer = false;
  _queuedCallbacks = /* @__PURE__ */ new Map();
  destroyed = false;
  parentPlayer = null;
  markedForDestroy = false;
  disabled = false;
  queued = true;
  totalTime = 0;
  constructor(namespaceId, triggerName, element) {
    this.namespaceId = namespaceId;
    this.triggerName = triggerName;
    this.element = element;
  }
  setRealPlayer(player) {
    if (this._containsRealPlayer) return;
    this._player = player;
    this._queuedCallbacks.forEach((callbacks, phase) => {
      callbacks.forEach((callback) => listenOnPlayer(player, phase, void 0, callback));
    });
    this._queuedCallbacks.clear();
    this._containsRealPlayer = true;
    this.overrideTotalTime(player.totalTime);
    this.queued = false;
  }
  getRealPlayer() {
    return this._player;
  }
  overrideTotalTime(totalTime) {
    this.totalTime = totalTime;
  }
  syncPlayerEvents(player) {
    const p6 = this._player;
    if (p6.triggerCallback) {
      player.onStart(() => p6.triggerCallback("start"));
    }
    player.onDone(() => this.finish());
    player.onDestroy(() => this.destroy());
  }
  _queueEvent(name, callback) {
    getOrSetDefaultValue(this._queuedCallbacks, name, []).push(callback);
  }
  onDone(fn) {
    if (this.queued) {
      this._queueEvent("done", fn);
    }
    this._player.onDone(fn);
  }
  onStart(fn) {
    if (this.queued) {
      this._queueEvent("start", fn);
    }
    this._player.onStart(fn);
  }
  onDestroy(fn) {
    if (this.queued) {
      this._queueEvent("destroy", fn);
    }
    this._player.onDestroy(fn);
  }
  init() {
    this._player.init();
  }
  hasStarted() {
    return this.queued ? false : this._player.hasStarted();
  }
  play() {
    !this.queued && this._player.play();
  }
  pause() {
    !this.queued && this._player.pause();
  }
  restart() {
    !this.queued && this._player.restart();
  }
  finish() {
    this._player.finish();
  }
  destroy() {
    this.destroyed = true;
    this._player.destroy();
  }
  reset() {
    !this.queued && this._player.reset();
  }
  setPosition(p6) {
    if (!this.queued) {
      this._player.setPosition(p6);
    }
  }
  getPosition() {
    return this.queued ? 0 : this._player.getPosition();
  }
  triggerCallback(phaseName) {
    const p6 = this._player;
    if (p6.triggerCallback) {
      p6.triggerCallback(phaseName);
    }
  }
};
function deleteOrUnsetInMap(map, key, value) {
  let currentValues = map.get(key);
  if (currentValues) {
    if (currentValues.length) {
      const index = currentValues.indexOf(value);
      currentValues.splice(index, 1);
    }
    if (currentValues.length == 0) {
      map.delete(key);
    }
  }
  return currentValues;
}
function normalizeTriggerValue(value) {
  return value != null ? value : null;
}
function isElementNode(node) {
  return node && node["nodeType"] === 1;
}
function isTriggerEventValid(eventName) {
  return eventName == "start" || eventName == "done";
}
function cloakElement(element, value) {
  const oldValue = element.style.display;
  element.style.display = value != null ? value : "none";
  return oldValue;
}
function cloakAndComputeStyles(valuesMap, driver, elements, elementPropsMap, defaultStyle) {
  const cloakVals = [];
  elements.forEach((element) => cloakVals.push(cloakElement(element)));
  const failedElements = [];
  elementPropsMap.forEach((props, element) => {
    const styles = /* @__PURE__ */ new Map();
    props.forEach((prop) => {
      const value = driver.computeStyle(element, prop, defaultStyle);
      styles.set(prop, value);
      if (!value || value.length == 0) {
        element[REMOVAL_FLAG] = NULL_REMOVED_QUERIED_STATE;
        failedElements.push(element);
      }
    });
    valuesMap.set(element, styles);
  });
  let i30 = 0;
  elements.forEach((element) => cloakElement(element, cloakVals[i30++]));
  return failedElements;
}
function buildRootMap(roots, nodes) {
  const rootMap = /* @__PURE__ */ new Map();
  roots.forEach((root) => rootMap.set(root, []));
  if (nodes.length == 0) return rootMap;
  const NULL_NODE = 1;
  const nodeSet = new Set(nodes);
  const localRootMap = /* @__PURE__ */ new Map();
  function getRoot(node) {
    if (!node) return NULL_NODE;
    let root = localRootMap.get(node);
    if (root) return root;
    const parent = node.parentNode;
    if (rootMap.has(parent)) {
      root = parent;
    } else if (nodeSet.has(parent)) {
      root = NULL_NODE;
    } else {
      root = getRoot(parent);
    }
    localRootMap.set(node, root);
    return root;
  }
  nodes.forEach((node) => {
    const root = getRoot(node);
    if (root !== NULL_NODE) {
      rootMap.get(root).push(node);
    }
  });
  return rootMap;
}
function addClass(element, className) {
  element.classList?.add(className);
}
function removeClass(element, className) {
  element.classList?.remove(className);
}
function removeNodesAfterAnimationDone(engine, element, players) {
  optimizeGroupPlayer(players).onDone(() => engine.processLeaveNode(element));
}
function flattenGroupPlayers(players) {
  const finalPlayers = [];
  _flattenGroupPlayersRecur(players, finalPlayers);
  return finalPlayers;
}
function _flattenGroupPlayersRecur(players, finalPlayers) {
  for (let i30 = 0; i30 < players.length; i30++) {
    const player = players[i30];
    if (player instanceof AnimationGroupPlayer) {
      _flattenGroupPlayersRecur(player.players, finalPlayers);
    } else {
      finalPlayers.push(player);
    }
  }
}
function objEquals(a44, b7) {
  const k1 = Object.keys(a44);
  const k22 = Object.keys(b7);
  if (k1.length != k22.length) return false;
  for (let i30 = 0; i30 < k1.length; i30++) {
    const prop = k1[i30];
    if (!b7.hasOwnProperty(prop) || a44[prop] !== b7[prop]) return false;
  }
  return true;
}
function replacePostStylesAsPre(element, allPreStyleElements, allPostStyleElements) {
  const postEntry = allPostStyleElements.get(element);
  if (!postEntry) return false;
  let preEntry = allPreStyleElements.get(element);
  if (preEntry) {
    postEntry.forEach((data) => preEntry.add(data));
  } else {
    allPreStyleElements.set(element, postEntry);
  }
  allPostStyleElements.delete(element);
  return true;
}
var AnimationEngine = class {
  _driver;
  _normalizer;
  _transitionEngine;
  _timelineEngine;
  _triggerCache = {};
  onRemovalComplete = (element, context) => {
  };
  constructor(doc, _driver, _normalizer) {
    this._driver = _driver;
    this._normalizer = _normalizer;
    this._transitionEngine = new TransitionAnimationEngine(doc.body, _driver, _normalizer);
    this._timelineEngine = new TimelineAnimationEngine(doc.body, _driver, _normalizer);
    this._transitionEngine.onRemovalComplete = (element, context) => this.onRemovalComplete(element, context);
  }
  registerTrigger(componentId, namespaceId, hostElement, name, metadata) {
    const cacheKey = componentId + "-" + name;
    let trigger = this._triggerCache[cacheKey];
    if (!trigger) {
      const errors = [];
      const warnings = [];
      const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
      if (errors.length) {
        throw triggerBuildFailed(name, errors);
      }
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (warnings.length) {
          warnTriggerBuild(name, warnings);
        }
      }
      trigger = buildTrigger(name, ast, this._normalizer);
      this._triggerCache[cacheKey] = trigger;
    }
    this._transitionEngine.registerTrigger(namespaceId, name, trigger);
  }
  register(namespaceId, hostElement) {
    this._transitionEngine.register(namespaceId, hostElement);
  }
  destroy(namespaceId, context) {
    this._transitionEngine.destroy(namespaceId, context);
  }
  onInsert(namespaceId, element, parent, insertBefore) {
    this._transitionEngine.insertNode(namespaceId, element, parent, insertBefore);
  }
  onRemove(namespaceId, element, context) {
    this._transitionEngine.removeNode(namespaceId, element, context);
  }
  disableAnimations(element, disable) {
    this._transitionEngine.markElementAsDisabled(element, disable);
  }
  process(namespaceId, element, property, value) {
    if (property.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(property);
      const args = value;
      this._timelineEngine.command(id, element, action, args);
    } else {
      this._transitionEngine.trigger(namespaceId, element, property, value);
    }
  }
  listen(namespaceId, element, eventName, eventPhase, callback) {
    if (eventName.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(eventName);
      return this._timelineEngine.listen(id, element, action, callback);
    }
    return this._transitionEngine.listen(namespaceId, element, eventName, eventPhase, callback);
  }
  flush(microtaskId = -1) {
    this._transitionEngine.flush(microtaskId);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(cb) {
    this._transitionEngine.afterFlushAnimationsDone(cb);
  }
};
function packageNonAnimatableStyles(element, styles) {
  let startStyles = null;
  let endStyles = null;
  if (Array.isArray(styles) && styles.length) {
    startStyles = filterNonAnimatableStyles(styles[0]);
    if (styles.length > 1) {
      endStyles = filterNonAnimatableStyles(styles[styles.length - 1]);
    }
  } else if (styles instanceof Map) {
    startStyles = filterNonAnimatableStyles(styles);
  }
  return startStyles || endStyles ? new SpecialCasedStyles(element, startStyles, endStyles) : null;
}
var SpecialCasedStyles = class _SpecialCasedStyles {
  _element;
  _startStyles;
  _endStyles;
  static initialStylesByElement = /* @__PURE__ */ new WeakMap();
  _state = 0;
  _initialStyles;
  constructor(_element, _startStyles, _endStyles) {
    this._element = _element;
    this._startStyles = _startStyles;
    this._endStyles = _endStyles;
    let initialStyles = _SpecialCasedStyles.initialStylesByElement.get(_element);
    if (!initialStyles) {
      _SpecialCasedStyles.initialStylesByElement.set(_element, initialStyles = /* @__PURE__ */ new Map());
    }
    this._initialStyles = initialStyles;
  }
  start() {
    if (this._state < 1) {
      if (this._startStyles) {
        setStyles(this._element, this._startStyles, this._initialStyles);
      }
      this._state = 1;
    }
  }
  finish() {
    this.start();
    if (this._state < 2) {
      setStyles(this._element, this._initialStyles);
      if (this._endStyles) {
        setStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      this._state = 1;
    }
  }
  destroy() {
    this.finish();
    if (this._state < 3) {
      _SpecialCasedStyles.initialStylesByElement.delete(this._element);
      if (this._startStyles) {
        eraseStyles(this._element, this._startStyles);
        this._endStyles = null;
      }
      if (this._endStyles) {
        eraseStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      setStyles(this._element, this._initialStyles);
      this._state = 3;
    }
  }
};
function filterNonAnimatableStyles(styles) {
  let result = null;
  styles.forEach((val, prop) => {
    if (isNonAnimatableStyle(prop)) {
      result = result || /* @__PURE__ */ new Map();
      result.set(prop, val);
    }
  });
  return result;
}
function isNonAnimatableStyle(prop) {
  return prop === "display" || prop === "position";
}
var WebAnimationsPlayer = class {
  element;
  keyframes;
  options;
  _specialStyles;
  _onDoneFns = [];
  _onStartFns = [];
  _onDestroyFns = [];
  _duration;
  _delay;
  _initialized = false;
  _finished = false;
  _started = false;
  _destroyed = false;
  _finalKeyframe;
  _originalOnDoneFns = [];
  _originalOnStartFns = [];
  domPlayer = null;
  time = 0;
  parentPlayer = null;
  currentSnapshot = /* @__PURE__ */ new Map();
  constructor(element, keyframes, options, _specialStyles) {
    this.element = element;
    this.keyframes = keyframes;
    this.options = options;
    this._specialStyles = _specialStyles;
    this._duration = options["duration"];
    this._delay = options["delay"] || 0;
    this.time = this._duration + this._delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    if (!this._buildPlayer()) {
      return;
    }
    this._preparePlayerBeforeStart();
  }
  _buildPlayer() {
    if (this._initialized) return this.domPlayer;
    this._initialized = true;
    const keyframes = this.keyframes;
    const animation = this._triggerWebAnimation(this.element, keyframes, this.options);
    if (!animation) {
      this._onFinish();
      return null;
    }
    this.domPlayer = animation;
    this._finalKeyframe = keyframes.length ? keyframes[keyframes.length - 1] : /* @__PURE__ */ new Map();
    const onFinish = () => this._onFinish();
    animation.addEventListener("finish", onFinish);
    this.onDestroy(() => {
      animation.removeEventListener("finish", onFinish);
    });
    return animation;
  }
  _preparePlayerBeforeStart() {
    if (this._delay) {
      this._resetDomPlayerState();
    } else {
      this.domPlayer?.pause();
    }
  }
  _convertKeyframesToObject(keyframes) {
    const kfs = [];
    keyframes.forEach((frame) => {
      kfs.push(Object.fromEntries(frame));
    });
    return kfs;
  }
  _triggerWebAnimation(element, keyframes, options) {
    const keyframesObject = this._convertKeyframesToObject(keyframes);
    try {
      return element.animate(keyframesObject, options);
    } catch {
      return null;
    }
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  play() {
    const player = this._buildPlayer();
    if (!player) {
      return;
    }
    if (!this.hasStarted()) {
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
      this._started = true;
      if (this._specialStyles) {
        this._specialStyles.start();
      }
    }
    player.play();
  }
  pause() {
    this.init();
    this.domPlayer?.pause();
  }
  finish() {
    this.init();
    if (!this.domPlayer) return;
    if (this._specialStyles) {
      this._specialStyles.finish();
    }
    this._onFinish();
    this.domPlayer.finish();
  }
  reset() {
    this._resetDomPlayerState();
    this._destroyed = false;
    this._finished = false;
    this._started = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  _resetDomPlayerState() {
    this.domPlayer?.cancel();
  }
  restart() {
    this.reset();
    this.play();
  }
  hasStarted() {
    return this._started;
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._resetDomPlayerState();
      this._onFinish();
      if (this._specialStyles) {
        this._specialStyles.destroy();
      }
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  setPosition(p6) {
    if (!this.domPlayer) {
      this.init();
    }
    if (this.domPlayer) {
      this.domPlayer.currentTime = p6 * this.time;
    }
  }
  getPosition() {
    if (!this.domPlayer) {
      return this._initialized ? 1 : 0;
    }
    return +(this.domPlayer.currentTime ?? 0) / this.time;
  }
  get totalTime() {
    return this._delay + this._duration;
  }
  beforeDestroy() {
    const styles = /* @__PURE__ */ new Map();
    if (this.hasStarted()) {
      const finalKeyframe = this._finalKeyframe;
      finalKeyframe.forEach((val, prop) => {
        if (prop !== "offset") {
          styles.set(prop, this._finished ? val : computeStyle(this.element, prop));
        }
      });
    }
    this.currentSnapshot = styles;
  }
  triggerCallback(phaseName) {
    const methods = phaseName === "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var WebAnimationsDriver = class {
  validateStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      return validateStyleProperty(prop);
    }
    return true;
  }
  validateAnimatableStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const cssProp = camelCaseToDashCase(prop);
      return validateWebAnimatableStyleProperty(cssProp);
    }
    return true;
  }
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  getParentElement(element) {
    return getParentElement(element);
  }
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  computeStyle(element, prop, defaultValue) {
    return computeStyle(element, prop);
  }
  animate(element, keyframes, duration, delay, easing, previousPlayers = []) {
    const fill = delay == 0 ? "both" : "forwards";
    const playerOptions = {
      duration,
      delay,
      fill
    };
    if (easing) {
      playerOptions["easing"] = easing;
    }
    const previousStyles = /* @__PURE__ */ new Map();
    const previousWebAnimationPlayers = previousPlayers.filter((player) => player instanceof WebAnimationsPlayer);
    if (allowPreviousPlayerStylesMerge(duration, delay)) {
      previousWebAnimationPlayers.forEach((player) => {
        player.currentSnapshot.forEach((val, prop) => previousStyles.set(prop, val));
      });
    }
    let _keyframes = normalizeKeyframes(keyframes).map((styles) => new Map(styles));
    _keyframes = balancePreviousStylesIntoKeyframes(element, _keyframes, previousStyles);
    const specialStyles = packageNonAnimatableStyles(element, _keyframes);
    return new WebAnimationsPlayer(element, _keyframes, playerOptions, specialStyles);
  }
};
var ANIMATION_PREFIX = "@";
var DISABLE_ANIMATIONS_FLAG = "@.disabled";
var BaseAnimationRenderer = class {
  namespaceId;
  delegate;
  engine;
  _onDestroy;
  \u0275type = 0;
  constructor(namespaceId, delegate, engine, _onDestroy) {
    this.namespaceId = namespaceId;
    this.delegate = delegate;
    this.engine = engine;
    this._onDestroy = _onDestroy;
  }
  get data() {
    return this.delegate.data;
  }
  destroyNode(node) {
    this.delegate.destroyNode?.(node);
  }
  destroy() {
    this.engine.destroy(this.namespaceId, this.delegate);
    this.engine.afterFlushAnimationsDone(() => {
      queueMicrotask(() => {
        this.delegate.destroy();
      });
    });
    this._onDestroy?.();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, false);
  }
  insertBefore(parent, newChild, refChild, isMove = true) {
    this.delegate.insertBefore(parent, newChild, refChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, isMove);
  }
  removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval) {
    if (requireSynchronousElementRemoval) {
      this.delegate.removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval);
      return;
    }
    if (this.parentNode(oldChild)) {
      this.engine.onRemove(this.namespaceId, oldChild, this.delegate);
    }
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style3, value, flags) {
    this.delegate.setStyle(el, style3, value, flags);
  }
  removeStyle(el, style3, flags) {
    this.delegate.removeStyle(el, style3, flags);
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX && name == DISABLE_ANIMATIONS_FLAG) {
      this.disableAnimations(el, !!value);
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    return this.delegate.listen(target, eventName, callback, options);
  }
  disableAnimations(element, value) {
    this.engine.disableAnimations(element, value);
  }
};
var AnimationRenderer = class extends BaseAnimationRenderer {
  factory;
  constructor(factory, namespaceId, delegate, engine, onDestroy) {
    super(namespaceId, delegate, engine, onDestroy);
    this.factory = factory;
    this.namespaceId = namespaceId;
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX) {
      if (name.charAt(1) == "." && name == DISABLE_ANIMATIONS_FLAG) {
        value = value === void 0 ? true : !!value;
        this.disableAnimations(el, value);
      } else {
        this.engine.process(this.namespaceId, el, name.slice(1), value);
      }
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  listen(target, eventName, callback, options) {
    if (eventName.charAt(0) == ANIMATION_PREFIX) {
      const element = resolveElementFromTarget(target);
      let name = eventName.slice(1);
      let phase = "";
      if (name.charAt(0) != ANIMATION_PREFIX) {
        [name, phase] = parseTriggerCallbackName(name);
      }
      return this.engine.listen(this.namespaceId, element, name, phase, (event) => {
        const countId = event["_data"] || -1;
        this.factory.scheduleListenerCallback(countId, callback, event);
      });
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
};
function resolveElementFromTarget(target) {
  switch (target) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return target;
  }
}
function parseTriggerCallbackName(triggerName) {
  const dotIndex = triggerName.indexOf(".");
  const trigger = triggerName.substring(0, dotIndex);
  const phase = triggerName.slice(dotIndex + 1);
  return [trigger, phase];
}
var AnimationRendererFactory = class {
  delegate;
  engine;
  _zone;
  _currentId = 0;
  _microtaskId = 1;
  _animationCallbacksBuffer = [];
  _rendererCache = /* @__PURE__ */ new Map();
  _cdRecurDepth = 0;
  constructor(delegate, engine, _zone) {
    this.delegate = delegate;
    this.engine = engine;
    this._zone = _zone;
    engine.onRemovalComplete = (element, delegate2) => {
      delegate2?.removeChild(null, element);
    };
  }
  createRenderer(hostElement, type) {
    const EMPTY_NAMESPACE_ID = "";
    const delegate = this.delegate.createRenderer(hostElement, type);
    if (!hostElement || !type?.data?.["animation"]) {
      const cache = this._rendererCache;
      let renderer = cache.get(delegate);
      if (!renderer) {
        const onRendererDestroy = () => cache.delete(delegate);
        renderer = new BaseAnimationRenderer(EMPTY_NAMESPACE_ID, delegate, this.engine, onRendererDestroy);
        cache.set(delegate, renderer);
      }
      return renderer;
    }
    const componentId = type.id;
    const namespaceId = type.id + "-" + this._currentId;
    this._currentId++;
    this.engine.register(namespaceId, hostElement);
    const registerTrigger = (trigger) => {
      if (Array.isArray(trigger)) {
        trigger.forEach(registerTrigger);
      } else {
        this.engine.registerTrigger(componentId, namespaceId, hostElement, trigger.name, trigger);
      }
    };
    const animationTriggers = type.data["animation"];
    animationTriggers.forEach(registerTrigger);
    return new AnimationRenderer(this, namespaceId, delegate, this.engine);
  }
  begin() {
    this._cdRecurDepth++;
    if (this.delegate.begin) {
      this.delegate.begin();
    }
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  scheduleListenerCallback(count, fn, data) {
    if (count >= 0 && count < this._microtaskId) {
      this._zone.run(() => fn(data));
      return;
    }
    const animationCallbacksBuffer = this._animationCallbacksBuffer;
    if (animationCallbacksBuffer.length == 0) {
      queueMicrotask(() => {
        this._zone.run(() => {
          animationCallbacksBuffer.forEach((tuple) => {
            const [fn2, data2] = tuple;
            fn2(data2);
          });
          this._animationCallbacksBuffer = [];
        });
      });
    }
    animationCallbacksBuffer.push([fn, data]);
  }
  end() {
    this._cdRecurDepth--;
    if (this._cdRecurDepth == 0) {
      this._zone.runOutsideAngular(() => {
        this._scheduleCountTask();
        this.engine.flush(this._microtaskId);
      });
    }
    if (this.delegate.end) {
      this.delegate.end();
    }
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
  componentReplaced(componentId) {
    this.engine.flush();
    this.delegate.componentReplaced?.(componentId);
  }
};

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
/**
 * @license Angular v22.0.0
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var InjectableAnimationEngine = class _InjectableAnimationEngine extends AnimationEngine {
  constructor(doc, driver, normalizer) {
    super(doc, driver, normalizer);
  }
  ngOnDestroy() {
    this.flush();
  }
  static \u0275fac = function InjectableAnimationEngine_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InjectableAnimationEngine)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(AnimationDriver), \u0275\u0275inject(AnimationStyleNormalizer));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InjectableAnimationEngine,
    factory: _InjectableAnimationEngine.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InjectableAnimationEngine, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: AnimationDriver
  }, {
    type: AnimationStyleNormalizer
  }], null);
})();
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory() {
  return new AnimationRendererFactory(inject(DomRendererFactory2), inject(AnimationEngine), inject(NgZone));
}
var SHARED_ANIMATION_PROVIDERS = [{
  provide: AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory
}];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "NoopAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useFactory: () => false ? new NoopAnimationDriver() : new WebAnimationsDriver()
}, {
  provide: ANIMATION_MODULE_TYPE,
  useFactory: () => false ? "NoopAnimations" : "BrowserAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BrowserAnimationsModule = class _BrowserAnimationsModule {
  static withConfig(config) {
    return {
      ngModule: _BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
  static \u0275fac = function BrowserAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BrowserAnimationsModule,
    exports: [BrowserModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
function provideAnimations() {
  performanceMarkFeature("NgEagerAnimations");
  return [...BROWSER_ANIMATIONS_PROVIDERS];
}
var NoopAnimationsModule = class _NoopAnimationsModule {
  static \u0275fac = function NoopAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NoopAnimationsModule,
    exports: [BrowserModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();

// node_modules/primeng/node_modules/@primeuix/utils/dist/object/index.mjs
function l(e59) {
  return e59 == null || e59 === "" || Array.isArray(e59) && e59.length === 0 || !(e59 instanceof Date) && typeof e59 == "object" && Object.keys(e59).length === 0;
}
function b(e59, t43, n39 = /* @__PURE__ */ new WeakSet()) {
  if (e59 === t43) return true;
  if (!e59 || !t43 || typeof e59 != "object" || typeof t43 != "object" || n39.has(e59) || n39.has(t43)) return false;
  n39.add(e59).add(t43);
  let o88 = Array.isArray(e59), r85 = Array.isArray(t43), u8, f11, T;
  if (o88 && r85) {
    if (f11 = e59.length, f11 != t43.length) return false;
    for (u8 = f11; u8-- !== 0; ) if (!b(e59[u8], t43[u8], n39)) return false;
    return true;
  }
  if (o88 != r85) return false;
  let S2 = e59 instanceof Date, A = t43 instanceof Date;
  if (S2 != A) return false;
  if (S2 && A) return e59.getTime() == t43.getTime();
  let I = e59 instanceof RegExp, L = t43 instanceof RegExp;
  if (I != L) return false;
  if (I && L) return e59.toString() == t43.toString();
  let F3 = Object.keys(e59);
  if (f11 = F3.length, f11 !== Object.keys(t43).length) return false;
  for (u8 = f11; u8-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(t43, F3[u8])) return false;
  for (u8 = f11; u8-- !== 0; ) if (T = F3[u8], !b(e59[T], t43[T], n39)) return false;
  return true;
}
function y(e59, t43) {
  return b(e59, t43);
}
function c(e59) {
  return typeof e59 == "function" && "call" in e59 && "apply" in e59;
}
function s(e59) {
  return !l(e59);
}
function p(e59, t43) {
  if (!e59 || !t43) return null;
  try {
    let n39 = e59[t43];
    if (s(n39)) return n39;
  } catch (n39) {
  }
  if (Object.keys(e59).length) {
    if (c(t43)) return t43(e59);
    if (t43.indexOf(".") === -1) return e59[t43];
    {
      let n39 = t43.split("."), o88 = e59;
      for (let r85 = 0, u8 = n39.length; r85 < u8; ++r85) {
        if (o88 == null) return null;
        o88 = o88[n39[r85]];
      }
      return o88;
    }
  }
  return null;
}
function k(e59, t43, n39) {
  return n39 ? p(e59, n39) === p(t43, n39) : y(e59, t43);
}
function m(e59, ...t43) {
  return c(e59) ? e59(...t43) : e59;
}
function Y(e59) {
  return e59 && e59.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function X(e59) {
  if (e59 && /[\xC0-\xFF\u0100-\u017E]/.test(e59)) {
    let n39 = { A: /[\xC0-\xC5\u0100\u0102\u0104]/g, AE: /[\xC6]/g, C: /[\xC7\u0106\u0108\u010A\u010C]/g, D: /[\xD0\u010E\u0110]/g, E: /[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g, G: /[\u011C\u011E\u0120\u0122]/g, H: /[\u0124\u0126]/g, I: /[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g, IJ: /[\u0132]/g, J: /[\u0134]/g, K: /[\u0136]/g, L: /[\u0139\u013B\u013D\u013F\u0141]/g, N: /[\xD1\u0143\u0145\u0147\u014A]/g, O: /[\xD2-\xD6\xD8\u014C\u014E\u0150]/g, OE: /[\u0152]/g, R: /[\u0154\u0156\u0158]/g, S: /[\u015A\u015C\u015E\u0160]/g, T: /[\u0162\u0164\u0166]/g, U: /[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g, W: /[\u0174]/g, Y: /[\xDD\u0176\u0178]/g, Z: /[\u0179\u017B\u017D]/g, a: /[\xE0-\xE5\u0101\u0103\u0105]/g, ae: /[\xE6]/g, c: /[\xE7\u0107\u0109\u010B\u010D]/g, d: /[\u010F\u0111]/g, e: /[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g, g: /[\u011D\u011F\u0121\u0123]/g, i: /[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g, ij: /[\u0133]/g, j: /[\u0135]/g, k: /[\u0137,\u0138]/g, l: /[\u013A\u013C\u013E\u0140\u0142]/g, n: /[\xF1\u0144\u0146\u0148\u014B]/g, p: /[\xFE]/g, o: /[\xF2-\xF6\xF8\u014D\u014F\u0151]/g, oe: /[\u0153]/g, r: /[\u0155\u0157\u0159]/g, s: /[\u015B\u015D\u015F\u0161]/g, t: /[\u0163\u0165\u0167]/g, u: /[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g, w: /[\u0175]/g, y: /[\xFD\xFF\u0177]/g, z: /[\u017A\u017C\u017E]/g };
    for (let o88 in n39) e59 = e59.replace(n39[o88], o88);
  }
  return e59;
}

// node_modules/primeng/node_modules/@primeuix/utils/dist/dom/index.mjs
function p2(t43) {
  return typeof Element != "undefined" ? t43 instanceof Element : t43 !== null && typeof t43 == "object" && t43.nodeType === 1 && typeof t43.nodeName == "string";
}
function O(t43, e59 = {}) {
  if (p2(t43)) {
    let o88 = (r85, i30) => {
      var a44, l20;
      let s14 = (a44 = t43 == null ? void 0 : t43.$attrs) != null && a44[r85] ? [(l20 = t43 == null ? void 0 : t43.$attrs) == null ? void 0 : l20[r85]] : [];
      return [i30].flat().reduce((d34, f11) => {
        if (f11 != null) {
          let c29 = typeof f11;
          if (c29 === "string" || c29 === "number") d34.push(f11);
          else if (c29 === "object") {
            let u8 = Array.isArray(f11) ? o88(r85, f11) : Object.entries(f11).map(([g6, w]) => r85 === "style" && (w || w === 0) ? `${g6.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${w}` : w ? g6 : void 0);
            d34 = u8.length ? d34.concat(u8.filter((g6) => !!g6)) : d34;
          }
        }
        return d34;
      }, s14);
    }, n39 = (r85) => {
      o88("style", r85).forEach((s14) => {
        let a44 = s14.indexOf(":");
        if (a44 < 0) return;
        let l20 = s14.slice(0, a44).trim(), d34 = s14.slice(a44 + 1).trim();
        l20 && t43.style.setProperty(l20, d34);
      });
    };
    Object.entries(e59).forEach(([r85, i30]) => {
      if (i30 != null) {
        let s14 = r85.match(/^on(.+)/);
        s14 ? t43.addEventListener(s14[1].toLowerCase(), i30) : r85 === "p-bind" || r85 === "pBind" ? O(t43, i30) : r85 === "style" ? (n39(i30), (t43.$attrs = t43.$attrs || {}) && (t43.$attrs[r85] = t43.style.cssText)) : (i30 = r85 === "class" ? [...new Set(o88("class", i30))].join(" ").trim() : i30, (t43.$attrs = t43.$attrs || {}) && (t43.$attrs[r85] = i30), t43.setAttribute(r85, i30));
      }
    });
  }
}
function te(t43, e59 = "", o88) {
  if (p2(t43) && o88 !== null && o88 !== void 0) {
    if (e59 === "style") {
      typeof o88 == "string" ? t43.style.cssText = o88 : typeof o88 == "object" && Object.entries(o88).forEach(([n39, r85]) => {
        if (r85 == null) return;
        let i30 = n39.startsWith("--") ? n39 : n39.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        t43.style.setProperty(i30, String(r85));
      });
      return;
    }
    t43.setAttribute(e59, o88);
  }
}

// node_modules/primeng/fesm2022/primeng-api.mjs
var _c0 = ["*"];
var ConfirmEventType;
(function(ConfirmEventType2) {
  ConfirmEventType2[ConfirmEventType2["ACCEPT"] = 0] = "ACCEPT";
  ConfirmEventType2[ConfirmEventType2["REJECT"] = 1] = "REJECT";
  ConfirmEventType2[ConfirmEventType2["CANCEL"] = 2] = "CANCEL";
})(ConfirmEventType || (ConfirmEventType = {}));
var ConfirmationService = class _ConfirmationService {
  requireConfirmationSource = new Subject();
  acceptConfirmationSource = new Subject();
  requireConfirmation$ = this.requireConfirmationSource.asObservable();
  accept = this.acceptConfirmationSource.asObservable();
  /**
   * Callback to invoke on confirm.
   * @param {Confirmation} confirmation - Represents a confirmation dialog configuration.
   * @group Method
   */
  confirm(confirmation) {
    this.requireConfirmationSource.next(confirmation);
    return this;
  }
  /**
   * Closes the dialog.
   * @group Method
   */
  close() {
    this.requireConfirmationSource.next(null);
    return this;
  }
  /**
   * Accepts the dialog.
   * @group Method
   */
  onAccept() {
    this.acceptConfirmationSource.next(null);
  }
  static \u0275fac = function ConfirmationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ConfirmationService,
    factory: _ConfirmationService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmationService, [{
    type: Injectable
  }], null, null);
})();
var ContextMenuService = class _ContextMenuService {
  activeItemKeyChange = new Subject();
  activeItemKeyChange$ = this.activeItemKeyChange.asObservable();
  activeItemKey;
  changeKey(key) {
    this.activeItemKey = key;
    this.activeItemKeyChange.next(this.activeItemKey);
  }
  reset() {
    this.activeItemKey = null;
    this.activeItemKeyChange.next(this.activeItemKey);
  }
  static \u0275fac = function ContextMenuService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContextMenuService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ContextMenuService,
    factory: _ContextMenuService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuService, [{
    type: Injectable
  }], null, null);
})();
var FilterMatchMode = class {
  static STARTS_WITH = "startsWith";
  static CONTAINS = "contains";
  static NOT_CONTAINS = "notContains";
  static ENDS_WITH = "endsWith";
  static EQUALS = "equals";
  static NOT_EQUALS = "notEquals";
  static IN = "in";
  static LESS_THAN = "lt";
  static LESS_THAN_OR_EQUAL_TO = "lte";
  static GREATER_THAN = "gt";
  static GREATER_THAN_OR_EQUAL_TO = "gte";
  static BETWEEN = "between";
  static IS = "is";
  static IS_NOT = "isNot";
  static BEFORE = "before";
  static AFTER = "after";
  static DATE_IS = "dateIs";
  static DATE_IS_NOT = "dateIsNot";
  static DATE_BEFORE = "dateBefore";
  static DATE_AFTER = "dateAfter";
};
var FilterService = class _FilterService {
  filter(value, fields, filterValue, filterMatchMode, filterLocale) {
    let filteredItems = [];
    if (value) {
      for (let item of value) {
        for (let field of fields) {
          let fieldValue = p(item, field);
          if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
            filteredItems.push(item);
            break;
          }
        }
      }
    }
    return filteredItems;
  }
  filters = {
    startsWith: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = X(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = X(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.slice(0, filterValue.length) === filterValue;
    },
    contains: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = X(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = X(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) !== -1;
    },
    notContains: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = X(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = X(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) === -1;
    },
    endsWith: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = X(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = X(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
    },
    equals: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() === filter.getTime();
      else if (value == filter) return true;
      else return X(value.toString()).toLocaleLowerCase(filterLocale) == X(filter.toString()).toLocaleLowerCase(filterLocale);
    },
    notEquals: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return false;
      }
      if (value === void 0 || value === null) {
        return true;
      }
      if (value.getTime && filter.getTime) return value.getTime() !== filter.getTime();
      else if (value == filter) return false;
      else return X(value.toString()).toLocaleLowerCase(filterLocale) != X(filter.toString()).toLocaleLowerCase(filterLocale);
    },
    in: (value, filter) => {
      if (filter === void 0 || filter === null || filter.length === 0) {
        return true;
      }
      for (let i30 = 0; i30 < filter.length; i30++) {
        if (k(value, filter[i30])) {
          return true;
        }
      }
      return false;
    },
    between: (value, filter) => {
      if (filter == null || filter[0] == null || filter[1] == null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime) return filter[0].getTime() <= value.getTime() && value.getTime() <= filter[1].getTime();
      else return filter[0] <= value && value <= filter[1];
    },
    lt: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() < filter.getTime();
      else return value < filter;
    },
    lte: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() <= filter.getTime();
      else return value <= filter;
    },
    gt: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() > filter.getTime();
      else return value > filter;
    },
    gte: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() >= filter.getTime();
      else return value >= filter;
    },
    is: (value, filter, filterLocale) => {
      return this.filters.equals(value, filter, filterLocale);
    },
    isNot: (value, filter, filterLocale) => {
      return this.filters.notEquals(value, filter, filterLocale);
    },
    before: (value, filter, filterLocale) => {
      return this.filters.lt(value, filter, filterLocale);
    },
    after: (value, filter, filterLocale) => {
      return this.filters.gt(value, filter, filterLocale);
    },
    dateIs: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() === filter.toDateString();
    },
    dateIsNot: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() !== filter.toDateString();
    },
    dateBefore: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.getTime() < filter.getTime();
    },
    dateAfter: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      value.setHours(0, 0, 0, 0);
      return value.getTime() > filter.getTime();
    }
  };
  register(rule, fn) {
    this.filters[rule] = fn;
  }
  static \u0275fac = function FilterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FilterService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FilterService,
    factory: _FilterService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var MessageService = class _MessageService {
  messageSource = new Subject();
  clearSource = new Subject();
  messageObserver = this.messageSource.asObservable();
  clearObserver = this.clearSource.asObservable();
  /**
   * Inserts single message.
   * @param {ToastMessageOptions} message - Message to be added.
   * @group Method
   */
  add(message) {
    if (message) {
      this.messageSource.next(message);
    }
  }
  /**
   * Inserts new messages.
   * @param {Message[]} messages - Messages to be added.
   * @group Method
   */
  addAll(messages) {
    if (messages && messages.length) {
      this.messageSource.next(messages);
    }
  }
  /**
   * Clears the message with the given key.
   * @param {string} key - Key of the message to be cleared.
   * @group Method
   */
  clear(key) {
    this.clearSource.next(key || null);
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
  }], null, null);
})();
var OverlayService = class _OverlayService {
  clickSource = new Subject();
  parentDragSource = new Subject();
  clickObservable = this.clickSource.asObservable();
  parentDragObservable = this.parentDragSource.asObservable();
  add(event) {
    if (event) {
      this.clickSource.next(event);
    }
  }
  emitParentDrag(container) {
    this.parentDragSource.next(container);
  }
  static \u0275fac = function OverlayService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverlayService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _OverlayService,
    factory: _OverlayService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var Header = class _Header {
  static \u0275fac = function Header_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Header)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Header,
    selectors: [["p-header"]],
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Header_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Header, [{
    type: Component,
    args: [{
      selector: "p-header",
      template: "<ng-content></ng-content>",
      standalone: false
    }]
  }], null, null);
})();
var Footer = class _Footer {
  static \u0275fac = function Footer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Footer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Footer,
    selectors: [["p-footer"]],
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Footer_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Footer, [{
    type: Component,
    args: [{
      selector: "p-footer",
      template: "<ng-content></ng-content>",
      standalone: false
    }]
  }], null, null);
})();
var PrimeTemplate = class _PrimeTemplate {
  template;
  type;
  name;
  constructor(template) {
    this.template = template;
  }
  getType() {
    return this.name;
  }
  static \u0275fac = function PrimeTemplate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrimeTemplate)(\u0275\u0275directiveInject(TemplateRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PrimeTemplate,
    selectors: [["", "pTemplate", ""]],
    inputs: {
      type: "type",
      name: [0, "pTemplate", "name"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeTemplate, [{
    type: Directive,
    args: [{
      selector: "[pTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], {
    type: [{
      type: Input
    }],
    name: [{
      type: Input,
      args: ["pTemplate"]
    }]
  });
})();
var SharedModule = class _SharedModule {
  static \u0275fac = function SharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SharedModule,
    declarations: [Header, Footer],
    imports: [CommonModule, PrimeTemplate],
    exports: [Header, Footer, PrimeTemplate]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PrimeTemplate],
      exports: [Header, Footer, PrimeTemplate],
      declarations: [Header, Footer]
    }]
  }], null, null);
})();
var TreeDragDropService = class _TreeDragDropService {
  dragStartSource = new Subject();
  dragStopSource = new Subject();
  dragStart$ = this.dragStartSource.asObservable();
  dragStop$ = this.dragStopSource.asObservable();
  startDrag(event) {
    this.dragStartSource.next(event);
  }
  stopDrag(event) {
    this.dragStopSource.next(event);
  }
  static \u0275fac = function TreeDragDropService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeDragDropService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TreeDragDropService,
    factory: _TreeDragDropService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeDragDropService, [{
    type: Injectable
  }], null, null);
})();

// node_modules/@primeuix/utils/dist/object/index.mjs
function l2(e59) {
  return e59 == null || e59 === "" || Array.isArray(e59) && e59.length === 0 || !(e59 instanceof Date) && typeof e59 == "object" && Object.keys(e59).length === 0;
}
function c2(e59) {
  return typeof e59 == "function" && "call" in e59 && "apply" in e59;
}
function s2(e59) {
  return !l2(e59);
}
function i(e59, t43 = true) {
  return e59 instanceof Object && e59.constructor === Object && (t43 || Object.keys(e59).length !== 0);
}
function m2(e59, ...t43) {
  return c2(e59) ? e59(...t43) : e59;
}
function a(e59, t43 = true) {
  return typeof e59 == "string" && (t43 || e59 !== "");
}
function z(e59) {
  return s2(e59) && !isNaN(e59);
}
function G(e59, t43) {
  if (t43) {
    let n39 = t43.test(e59);
    return t43.lastIndex = 0, n39;
  }
  return false;
}
function Y2(e59) {
  return e59 && e59.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function re(e59) {
  return a(e59) ? e59.replace(/(_)/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : e59;
}

// node_modules/@primeuix/utils/dist/eventbus/index.mjs
function s3() {
  let r85 = /* @__PURE__ */ new Map();
  return { on(e59, t43) {
    let n39 = r85.get(e59);
    return n39 ? n39.push(t43) : n39 = [t43], r85.set(e59, n39), this;
  }, off(e59, t43) {
    let n39 = r85.get(e59);
    return n39 && n39.splice(n39.indexOf(t43) >>> 0, 1), this;
  }, emit(e59, t43) {
    let n39 = r85.get(e59);
    n39 && n39.forEach((i30) => {
      i30(t43);
    });
  }, clear() {
    r85.clear();
  } };
}

// node_modules/@primeuix/styled/dist/index.mjs
var rt = Object.defineProperty;
var st = Object.defineProperties;
var nt = Object.getOwnPropertyDescriptors;
var F2 = Object.getOwnPropertySymbols;
var xe = Object.prototype.hasOwnProperty;
var be = Object.prototype.propertyIsEnumerable;
var _e = (e59, t43, r85) => t43 in e59 ? rt(e59, t43, { enumerable: true, configurable: true, writable: true, value: r85 }) : e59[t43] = r85;
var h = (e59, t43) => {
  for (var r85 in t43 || (t43 = {})) xe.call(t43, r85) && _e(e59, r85, t43[r85]);
  if (F2) for (var r85 of F2(t43)) be.call(t43, r85) && _e(e59, r85, t43[r85]);
  return e59;
};
var $ = (e59, t43) => st(e59, nt(t43));
var v = (e59, t43) => {
  var r85 = {};
  for (var s14 in e59) xe.call(e59, s14) && t43.indexOf(s14) < 0 && (r85[s14] = e59[s14]);
  if (e59 != null && F2) for (var s14 of F2(e59)) t43.indexOf(s14) < 0 && be.call(e59, s14) && (r85[s14] = e59[s14]);
  return r85;
};
var at = s3();
var N = at;
var k2 = /{([^}]*)}/g;
var ne = /(\d+\s+[\+\-\*\/]\s+\d+)/g;
var ie = /var\([^)]+\)/g;
function oe(e59) {
  return a(e59) ? e59.replace(/[A-Z]/g, (t43, r85) => r85 === 0 ? t43 : "." + t43.toLowerCase()).toLowerCase() : e59;
}
function ve(e59) {
  return i(e59) && e59.hasOwnProperty("$value") && e59.hasOwnProperty("$type") ? e59.$value : e59;
}
function dt(e59) {
  return e59.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Q(e59 = "", t43 = "") {
  return dt(`${a(e59, false) && a(t43, false) ? `${e59}-` : e59}${t43}`);
}
function ae(e59 = "", t43 = "") {
  return `--${Q(e59, t43)}`;
}
function ht(e59 = "") {
  let t43 = (e59.match(/{/g) || []).length, r85 = (e59.match(/}/g) || []).length;
  return (t43 + r85) % 2 !== 0;
}
function Y3(e59, t43 = "", r85 = "", s14 = [], i30) {
  if (a(e59)) {
    let a44 = e59.trim();
    if (ht(a44)) return;
    if (G(a44, k2)) {
      let n39 = a44.replaceAll(k2, (l20) => {
        let c29 = l20.replace(/{|}/g, "").split(".").filter((m7) => !s14.some((d34) => G(m7, d34)));
        return `var(${ae(r85, re(c29.join("-")))}${s2(i30) ? `, ${i30}` : ""})`;
      });
      return G(n39.replace(ie, "0"), ne) ? `calc(${n39})` : n39;
    }
    return a44;
  } else if (z(e59)) return e59;
}
function Re(e59, t43, r85) {
  a(t43, false) && e59.push(`${t43}:${r85};`);
}
function C2(e59, t43) {
  return e59 ? `${e59}{${t43}}` : "";
}
function le(e59, t43) {
  if (e59.indexOf("dt(") === -1) return e59;
  function r85(n39, l20) {
    let o88 = [], c29 = 0, m7 = "", d34 = null, u8 = 0;
    for (; c29 <= n39.length; ) {
      let g6 = n39[c29];
      if ((g6 === '"' || g6 === "'" || g6 === "`") && n39[c29 - 1] !== "\\" && (d34 = d34 === g6 ? null : g6), !d34 && (g6 === "(" && u8++, g6 === ")" && u8--, (g6 === "," || c29 === n39.length) && u8 === 0)) {
        let f11 = m7.trim();
        f11.startsWith("dt(") ? o88.push(le(f11, l20)) : o88.push(s14(f11)), m7 = "", c29++;
        continue;
      }
      g6 !== void 0 && (m7 += g6), c29++;
    }
    return o88;
  }
  function s14(n39) {
    let l20 = n39[0];
    if ((l20 === '"' || l20 === "'" || l20 === "`") && n39[n39.length - 1] === l20) return n39.slice(1, -1);
    let o88 = Number(n39);
    return isNaN(o88) ? n39 : o88;
  }
  let i30 = [], a44 = [];
  for (let n39 = 0; n39 < e59.length; n39++) if (e59[n39] === "d" && e59.slice(n39, n39 + 3) === "dt(") a44.push(n39), n39 += 2;
  else if (e59[n39] === ")" && a44.length > 0) {
    let l20 = a44.pop();
    a44.length === 0 && i30.push([l20, n39]);
  }
  if (!i30.length) return e59;
  for (let n39 = i30.length - 1; n39 >= 0; n39--) {
    let [l20, o88] = i30[n39], c29 = e59.slice(l20 + 3, o88), m7 = r85(c29, t43), d34 = t43(...m7);
    e59 = e59.slice(0, l20) + d34 + e59.slice(o88 + 1);
  }
  return e59;
}
var E = (...e59) => ue(S.getTheme(), ...e59);
var ue = (e59 = {}, t43, r85, s14) => {
  if (t43) {
    let { variable: i30, options: a44 } = S.defaults || {}, { prefix: n39, transform: l20 } = (e59 == null ? void 0 : e59.options) || a44 || {}, o88 = G(t43, k2) ? t43 : `{${t43}}`;
    return s14 === "value" || l2(s14) && l20 === "strict" ? S.getTokenValue(t43) : Y3(o88, void 0, n39, [i30.excludedKeyRegex], r85);
  }
  return "";
};
function ar(e59, ...t43) {
  if (e59 instanceof Array) {
    let r85 = e59.reduce((s14, i30, a44) => {
      var n39;
      return s14 + i30 + ((n39 = m2(t43[a44], { dt: E })) != null ? n39 : "");
    }, "");
    return le(r85, E);
  }
  return m2(e59, { dt: E });
}
function de(e59, t43 = {}) {
  let r85 = S.defaults.variable, { prefix: s14 = r85.prefix, selector: i30 = r85.selector, excludedKeyRegex: a44 = r85.excludedKeyRegex } = t43, n39 = [], l20 = [], o88 = [{ node: e59, path: s14 }];
  for (; o88.length; ) {
    let { node: m7, path: d34 } = o88.pop();
    for (let u8 in m7) {
      let g6 = m7[u8], f11 = ve(g6), p6 = G(u8, a44) ? Q(d34) : Q(d34, re(u8));
      if (i(f11)) o88.push({ node: f11, path: p6 });
      else {
        let y2 = ae(p6), R = Y3(f11, p6, s14, [a44]);
        Re(l20, y2, R);
        let T = p6;
        s14 && T.startsWith(s14 + "-") && (T = T.slice(s14.length + 1)), n39.push(T.replace(/-/g, "."));
      }
    }
  }
  let c29 = l20.join("");
  return { value: l20, tokens: n39, declarations: c29, css: C2(i30, c29) };
}
var b2 = { regex: { rules: { class: { pattern: /^\.([a-zA-Z][\w-]*)$/, resolve(e59) {
  return { type: "class", selector: e59, matched: this.pattern.test(e59.trim()) };
} }, attr: { pattern: /^\[(.*)\]$/, resolve(e59) {
  return { type: "attr", selector: `:root${e59},:host${e59}`, matched: this.pattern.test(e59.trim()) };
} }, media: { pattern: /^@media (.*)$/, resolve(e59) {
  return { type: "media", selector: e59, matched: this.pattern.test(e59.trim()) };
} }, system: { pattern: /^system$/, resolve(e59) {
  return { type: "system", selector: "@media (prefers-color-scheme: dark)", matched: this.pattern.test(e59.trim()) };
} }, custom: { resolve(e59) {
  return { type: "custom", selector: e59, matched: true };
} } }, resolve(e59) {
  let t43 = Object.keys(this.rules).filter((r85) => r85 !== "custom").map((r85) => this.rules[r85]);
  return [e59].flat().map((r85) => {
    var s14;
    return (s14 = t43.map((i30) => i30.resolve(r85)).find((i30) => i30.matched)) != null ? s14 : this.rules.custom.resolve(r85);
  });
} }, _toVariables(e59, t43) {
  return de(e59, { prefix: t43 == null ? void 0 : t43.prefix });
}, getCommon({ name: e59 = "", theme: t43 = {}, params: r85, set: s14, defaults: i30 }) {
  var R, T, j, O2, M, z2, V;
  let { preset: a44, options: n39 } = t43, l20, o88, c29, m7, d34, u8, g6;
  if (s2(a44) && n39.transform !== "strict") {
    let { primitive: L, semantic: te2, extend: re2 } = a44, f11 = te2 || {}, { colorScheme: K } = f11, A = v(f11, ["colorScheme"]), x = re2 || {}, { colorScheme: X2 } = x, G2 = v(x, ["colorScheme"]), p6 = K || {}, { dark: U } = p6, B = v(p6, ["dark"]), y2 = X2 || {}, { dark: I } = y2, H = v(y2, ["dark"]), W = s2(L) ? this._toVariables({ primitive: L }, n39) : {}, q = s2(A) ? this._toVariables({ semantic: A }, n39) : {}, Z = s2(B) ? this._toVariables({ light: B }, n39) : {}, pe = s2(U) ? this._toVariables({ dark: U }, n39) : {}, fe = s2(G2) ? this._toVariables({ semantic: G2 }, n39) : {}, ye = s2(H) ? this._toVariables({ light: H }, n39) : {}, Se = s2(I) ? this._toVariables({ dark: I }, n39) : {}, [Me, ze] = [(R = W.declarations) != null ? R : "", W.tokens], [Ke, Xe] = [(T = q.declarations) != null ? T : "", q.tokens || []], [Ge, Ue] = [(j = Z.declarations) != null ? j : "", Z.tokens || []], [Be, Ie] = [(O2 = pe.declarations) != null ? O2 : "", pe.tokens || []], [He, We] = [(M = fe.declarations) != null ? M : "", fe.tokens || []], [qe, Ze] = [(z2 = ye.declarations) != null ? z2 : "", ye.tokens || []], [Fe, Je] = [(V = Se.declarations) != null ? V : "", Se.tokens || []];
    l20 = this.transformCSS(e59, Me, "light", "variable", n39, s14, i30), o88 = ze;
    let Qe = this.transformCSS(e59, `${Ke}${Ge}`, "light", "variable", n39, s14, i30), Ye = this.transformCSS(e59, `${Be}`, "dark", "variable", n39, s14, i30);
    c29 = `${Qe}${Ye}`, m7 = [.../* @__PURE__ */ new Set([...Xe, ...Ue, ...Ie])];
    let et = this.transformCSS(e59, `${He}${qe}color-scheme:light`, "light", "variable", n39, s14, i30), tt = this.transformCSS(e59, `${Fe}color-scheme:dark`, "dark", "variable", n39, s14, i30);
    d34 = `${et}${tt}`, u8 = [.../* @__PURE__ */ new Set([...We, ...Ze, ...Je])], g6 = m2(a44.css, { dt: E });
  }
  return { primitive: { css: l20, tokens: o88 }, semantic: { css: c29, tokens: m7 }, global: { css: d34, tokens: u8 }, style: g6 };
}, getPreset({ name: e59 = "", preset: t43 = {}, options: r85, params: s14, set: i30, defaults: a44, selector: n39 }) {
  var f11, x, p6;
  let l20, o88, c29;
  if (s2(t43) && r85.transform !== "strict") {
    let y2 = e59.replace("-directive", ""), m7 = t43, { colorScheme: R, extend: T, css: j } = m7, O2 = v(m7, ["colorScheme", "extend", "css"]), d34 = T || {}, { colorScheme: M } = d34, z2 = v(d34, ["colorScheme"]), u8 = R || {}, { dark: V } = u8, L = v(u8, ["dark"]), g6 = M || {}, { dark: te2 } = g6, re2 = v(g6, ["dark"]), K = s2(O2) ? this._toVariables({ [y2]: h(h({}, O2), z2) }, r85) : {}, A = s2(L) ? this._toVariables({ [y2]: h(h({}, L), re2) }, r85) : {}, X2 = s2(V) ? this._toVariables({ [y2]: h(h({}, V), te2) }, r85) : {}, [G2, U] = [(f11 = K.declarations) != null ? f11 : "", K.tokens || []], [B, I] = [(x = A.declarations) != null ? x : "", A.tokens || []], [H, W] = [(p6 = X2.declarations) != null ? p6 : "", X2.tokens || []], q = this.transformCSS(y2, `${G2}${B}`, "light", "variable", r85, i30, a44, n39), Z = this.transformCSS(y2, H, "dark", "variable", r85, i30, a44, n39);
    l20 = `${q}${Z}`, o88 = [.../* @__PURE__ */ new Set([...U, ...I, ...W])], c29 = m2(j, { dt: E });
  }
  return { css: l20, tokens: o88, style: c29 };
}, getPresetC({ name: e59 = "", theme: t43 = {}, params: r85, set: s14, defaults: i30 }) {
  var o88;
  let { preset: a44, options: n39 } = t43, l20 = (o88 = a44 == null ? void 0 : a44.components) == null ? void 0 : o88[e59];
  return this.getPreset({ name: e59, preset: l20, options: n39, params: r85, set: s14, defaults: i30 });
}, getPresetD({ name: e59 = "", theme: t43 = {}, params: r85, set: s14, defaults: i30 }) {
  var c29, m7;
  let a44 = e59.replace("-directive", ""), { preset: n39, options: l20 } = t43, o88 = ((c29 = n39 == null ? void 0 : n39.components) == null ? void 0 : c29[a44]) || ((m7 = n39 == null ? void 0 : n39.directives) == null ? void 0 : m7[a44]);
  return this.getPreset({ name: a44, preset: o88, options: l20, params: r85, set: s14, defaults: i30 });
}, applyDarkColorScheme(e59) {
  return !(e59.darkModeSelector === "none" || e59.darkModeSelector === false);
}, getColorSchemeOption(e59, t43) {
  var r85;
  return this.applyDarkColorScheme(e59) ? this.regex.resolve(e59.darkModeSelector === true ? t43.options.darkModeSelector : (r85 = e59.darkModeSelector) != null ? r85 : t43.options.darkModeSelector) : [];
}, getLayerOrder(e59, t43 = {}, r85, s14) {
  let { cssLayer: i30 } = t43;
  return i30 ? `@layer ${m2(i30.order || i30.name || "primeui", r85)}` : "";
}, getCommonStyleSheet({ name: e59 = "", theme: t43 = {}, params: r85, props: s14 = {}, set: i30, defaults: a44 }) {
  let n39 = this.getCommon({ name: e59, theme: t43, params: r85, set: i30, defaults: a44 }), l20 = Object.entries(s14).reduce((o88, [c29, m7]) => o88.push(`${c29}="${m7}"`) && o88, []).join(" ");
  return Object.entries(n39 || {}).reduce((o88, [c29, m7]) => {
    if (i(m7) && Object.hasOwn(m7, "css")) {
      let d34 = Y2(m7.css), u8 = `${c29}-variables`;
      o88.push(`<style type="text/css" data-primevue-style-id="${u8}" ${l20}>${d34}</style>`);
    }
    return o88;
  }, []).join("");
}, getStyleSheet({ name: e59 = "", theme: t43 = {}, params: r85, props: s14 = {}, set: i30, defaults: a44 }) {
  var c29;
  let n39 = { name: e59, theme: t43, params: r85, set: i30, defaults: a44 }, l20 = (c29 = e59.includes("-directive") ? this.getPresetD(n39) : this.getPresetC(n39)) == null ? void 0 : c29.css, o88 = Object.entries(s14).reduce((m7, [d34, u8]) => m7.push(`${d34}="${u8}"`) && m7, []).join(" ");
  return l20 ? `<style type="text/css" data-primevue-style-id="${e59}-variables" ${o88}>${Y2(l20)}</style>` : "";
}, createTokens(e59 = {}, t43, r85 = "", s14 = "", i30 = {}) {
  let a44 = function(l20, o88 = {}, c29 = []) {
    if (c29.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: l20, path: this.path, paths: o88, value: void 0 };
    c29.push(this.path), o88.name = this.path, o88.binding || (o88.binding = {});
    let m7 = this.value;
    if (typeof this.value == "string" && k2.test(this.value)) {
      let u8 = this.value.trim().replace(k2, (g6) => {
        var y2;
        let f11 = g6.slice(1, -1), x = this.tokens[f11];
        if (!x) return console.warn(`Token not found for path: ${f11}`), "__UNRESOLVED__";
        let p6 = x.computed(l20, o88, c29);
        return Array.isArray(p6) && p6.length === 2 ? `light-dark(${p6[0].value},${p6[1].value})` : (y2 = p6 == null ? void 0 : p6.value) != null ? y2 : "__UNRESOLVED__";
      });
      m7 = ne.test(u8.replace(ie, "0")) ? `calc(${u8})` : u8;
    }
    return l2(o88.binding) && delete o88.binding, c29.pop(), { colorScheme: l20, path: this.path, paths: o88, value: m7.includes("__UNRESOLVED__") ? void 0 : m7 };
  }, n39 = (l20, o88, c29) => {
    Object.entries(l20).forEach(([m7, d34]) => {
      let u8 = G(m7, t43.variable.excludedKeyRegex) ? o88 : o88 ? `${o88}.${oe(m7)}` : oe(m7), g6 = c29 ? `${c29}.${m7}` : m7;
      i(d34) ? n39(d34, u8, g6) : (i30[u8] || (i30[u8] = { paths: [], computed: (f11, x = {}, p6 = []) => {
        if (i30[u8].paths.length === 1) return i30[u8].paths[0].computed(i30[u8].paths[0].scheme, x.binding, p6);
        if (f11 && f11 !== "none") for (let y2 = 0; y2 < i30[u8].paths.length; y2++) {
          let R = i30[u8].paths[y2];
          if (R.scheme === f11) return R.computed(f11, x.binding, p6);
        }
        return i30[u8].paths.map((y2) => y2.computed(y2.scheme, x[y2.scheme], p6));
      } }), i30[u8].paths.push({ path: g6, value: d34, scheme: g6.includes("colorScheme.light") ? "light" : g6.includes("colorScheme.dark") ? "dark" : "none", computed: a44, tokens: i30 }));
    });
  };
  return n39(e59, r85, s14), i30;
}, getTokenValue(e59, t43, r85) {
  var l20;
  let i30 = ((o88) => o88.split(".").filter((m7) => !G(m7.toLowerCase(), r85.variable.excludedKeyRegex)).join("."))(t43), a44 = t43.includes("colorScheme.light") ? "light" : t43.includes("colorScheme.dark") ? "dark" : void 0, n39 = [(l20 = e59[i30]) == null ? void 0 : l20.computed(a44)].flat().filter((o88) => o88);
  return n39.length === 1 ? n39[0].value : n39.reduce((o88 = {}, c29) => {
    let u8 = c29, { colorScheme: m7 } = u8, d34 = v(u8, ["colorScheme"]);
    return o88[m7] = d34, o88;
  }, void 0);
}, getSelectorRule(e59, t43, r85, s14) {
  return r85 === "class" || r85 === "attr" ? C2(s2(t43) ? `${e59}${t43},${e59} ${t43}` : e59, s14) : C2(e59, C2(t43 != null ? t43 : ":root,:host", s14));
}, transformCSS(e59, t43, r85, s14, i30 = {}, a44, n39, l20) {
  if (s2(t43)) {
    let { cssLayer: o88 } = i30;
    if (s14 !== "style") {
      let c29 = this.getColorSchemeOption(i30, n39);
      t43 = r85 === "dark" ? c29.reduce((m7, { type: d34, selector: u8 }) => (s2(u8) && (m7 += u8.includes("[CSS]") ? u8.replace("[CSS]", t43) : this.getSelectorRule(u8, l20, d34, t43)), m7), "") : C2(l20 != null ? l20 : ":root,:host", t43);
    }
    if (o88) {
      let c29 = { name: "primeui", order: "primeui" };
      i(o88) && (c29.name = m2(o88.name, { name: e59, type: s14 })), s2(c29.name) && (t43 = C2(`@layer ${c29.name}`, t43), a44 == null || a44.layerNames(c29.name));
    }
    return t43;
  }
  return "";
} };
var S = { defaults: { variable: { prefix: "p", selector: ":root,:host", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: false } }, _theme: void 0, _layerNames: /* @__PURE__ */ new Set(), _loadedStyleNames: /* @__PURE__ */ new Set(), _loadingStyles: /* @__PURE__ */ new Set(), _tokens: {}, update(e59 = {}) {
  let { theme: t43 } = e59;
  t43 && (this._theme = $(h({}, t43), { options: h(h({}, this.defaults.options), t43.options) }), this._tokens = b2.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
}, get theme() {
  return this._theme;
}, get preset() {
  var e59;
  return ((e59 = this.theme) == null ? void 0 : e59.preset) || {};
}, get options() {
  var e59;
  return ((e59 = this.theme) == null ? void 0 : e59.options) || {};
}, get tokens() {
  return this._tokens;
}, getTheme() {
  return this.theme;
}, setTheme(e59) {
  this.update({ theme: e59 }), N.emit("theme:change", e59);
}, getPreset() {
  return this.preset;
}, setPreset(e59) {
  this._theme = $(h({}, this.theme), { preset: e59 }), this._tokens = b2.createTokens(e59, this.defaults), this.clearLoadedStyleNames(), N.emit("preset:change", e59), N.emit("theme:change", this.theme);
}, getOptions() {
  return this.options;
}, setOptions(e59) {
  this._theme = $(h({}, this.theme), { options: e59 }), this.clearLoadedStyleNames(), N.emit("options:change", e59), N.emit("theme:change", this.theme);
}, getLayerNames() {
  return [...this._layerNames];
}, setLayerNames(e59) {
  this._layerNames.add(e59);
}, getLoadedStyleNames() {
  return this._loadedStyleNames;
}, isStyleNameLoaded(e59) {
  return this._loadedStyleNames.has(e59);
}, setLoadedStyleName(e59) {
  this._loadedStyleNames.add(e59);
}, deleteLoadedStyleName(e59) {
  this._loadedStyleNames.delete(e59);
}, clearLoadedStyleNames() {
  this._loadedStyleNames.clear();
}, getTokenValue(e59) {
  return b2.getTokenValue(this.tokens, e59, this.defaults);
}, getCommon(e59 = "", t43) {
  return b2.getCommon({ name: e59, theme: this.theme, params: t43, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getComponent(e59 = "", t43) {
  let r85 = { name: e59, theme: this.theme, params: t43, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return b2.getPresetC(r85);
}, getDirective(e59 = "", t43) {
  let r85 = { name: e59, theme: this.theme, params: t43, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return b2.getPresetD(r85);
}, getCustomPreset(e59 = "", t43, r85, s14) {
  let i30 = { name: e59, preset: t43, options: this.options, selector: r85, params: s14, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return b2.getPreset(i30);
}, getLayerOrderCSS(e59 = "") {
  return b2.getLayerOrder(e59, this.options, { names: this.getLayerNames() }, this.defaults);
}, transformCSS(e59 = "", t43, r85 = "style", s14) {
  return b2.transformCSS(e59, t43, s14, r85, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
}, getCommonStyleSheet(e59 = "", t43, r85 = {}) {
  return b2.getCommonStyleSheet({ name: e59, theme: this.theme, params: t43, props: r85, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getStyleSheet(e59, t43, r85 = {}) {
  return b2.getStyleSheet({ name: e59, theme: this.theme, params: t43, props: r85, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, onStyleMounted(e59) {
  this._loadingStyles.add(e59);
}, onStyleUpdated(e59) {
  this._loadingStyles.add(e59);
}, onStyleLoaded(e59, { name: t43 }) {
  this._loadingStyles.size && (this._loadingStyles.delete(t43), N.emit(`theme:${t43}:load`, e59), !this._loadingStyles.size && N.emit("theme:load"));
} };

// node_modules/@primeuix/styles/dist/base/index.mjs
var style2 = "\n    *,\n    ::before,\n    ::after {\n        box-sizing: border-box;\n    }\n\n    .p-collapsible-enter-active {\n        animation: p-animate-collapsible-expand 0.2s ease-out;\n        overflow: hidden;\n    }\n\n    .p-collapsible-leave-active {\n        animation: p-animate-collapsible-collapse 0.2s ease-out;\n        overflow: hidden;\n    }\n\n    @keyframes p-animate-collapsible-expand {\n        from {\n            grid-template-rows: 0fr;\n        }\n        to {\n            grid-template-rows: 1fr;\n        }\n    }\n\n    @keyframes p-animate-collapsible-collapse {\n        from {\n            grid-template-rows: 1fr;\n        }\n        to {\n            grid-template-rows: 0fr;\n        }\n    }\n\n    .p-disabled,\n    .p-disabled * {\n        cursor: default;\n        pointer-events: none;\n        user-select: none;\n    }\n\n    .p-disabled,\n    .p-component:disabled {\n        opacity: dt('disabled.opacity');\n    }\n\n    .pi {\n        font-size: dt('icon.size');\n    }\n\n    .p-icon {\n        width: dt('icon.size');\n        height: dt('icon.size');\n    }\n\n    .p-overlay-mask {\n        background: var(--px-mask-background, dt('mask.background'));\n        color: dt('mask.color');\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-overlay-mask-enter-active {\n        animation: p-animate-overlay-mask-enter dt('mask.transition.duration') forwards;\n    }\n\n    .p-overlay-mask-leave-active {\n        animation: p-animate-overlay-mask-leave dt('mask.transition.duration') forwards;\n    }\n\n    @keyframes p-animate-overlay-mask-enter {\n        from {\n            background: transparent;\n        }\n        to {\n            background: var(--px-mask-background, dt('mask.background'));\n        }\n    }\n    @keyframes p-animate-overlay-mask-leave {\n        from {\n            background: var(--px-mask-background, dt('mask.background'));\n        }\n        to {\n            background: transparent;\n        }\n    }\n\n    .p-anchored-overlay-enter-active {\n        animation: p-animate-anchored-overlay-enter 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    .p-anchored-overlay-leave-active {\n        animation: p-animate-anchored-overlay-leave 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    @keyframes p-animate-anchored-overlay-enter {\n        from {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n\n    @keyframes p-animate-anchored-overlay-leave {\n        to {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-usestyle.mjs
var _id = 0;
var UseStyle = class _UseStyle {
  document = inject(DOCUMENT);
  use(css5, options = {}) {
    let isLoaded = false;
    let cssRef = css5;
    let styleRef = null;
    const {
      immediate = true,
      manual = false,
      name = `style_${++_id}`,
      id = void 0,
      media = void 0,
      nonce = void 0,
      first = false,
      props = {}
    } = options;
    if (!this.document) return;
    styleRef = this.document.querySelector(`style[data-primeng-style-id="${name}"]`) || id && this.document.getElementById(id) || this.document.createElement("style");
    if (styleRef) {
      if (!styleRef.isConnected) {
        cssRef = css5;
        const HEAD = this.document.head;
        te(styleRef, "nonce", nonce);
        first && HEAD.firstChild ? HEAD.insertBefore(styleRef, HEAD.firstChild) : HEAD.appendChild(styleRef);
        O(styleRef, {
          type: "text/css",
          media,
          nonce,
          "data-primeng-style-id": name
        });
      }
      if (styleRef.textContent !== cssRef) {
        styleRef.textContent = cssRef;
      }
    }
    return {
      id,
      name,
      el: styleRef,
      css: cssRef
    };
  }
  static \u0275fac = function UseStyle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UseStyle)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UseStyle,
    factory: _UseStyle.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UseStyle, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-base.mjs
var css = (
  /*css*/
  `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`
);
var BaseStyle = class _BaseStyle {
  name = "base";
  useStyle = inject(UseStyle);
  css = void 0;
  style = void 0;
  classes = {};
  inlineStyles = {};
  load = (style3, options = {}, transform = (cs) => cs) => {
    const computedStyle = transform(ar`${m(style3, {
      dt: E
    })}`);
    return computedStyle ? this.useStyle.use(Y(computedStyle), __spreadValues({
      name: this.name
    }, options)) : {};
  };
  loadCSS = (options = {}) => {
    return this.load(this.css, options);
  };
  loadStyle = (options = {}, style3 = "") => {
    return this.load(this.style, options, (computedStyle = "") => S.transformCSS(options.name || this.name, `${computedStyle}${ar`${style3}`}`));
  };
  loadBaseCSS = (options = {}) => {
    return this.load(css, options);
  };
  loadBaseStyle = (options = {}, style$1 = "") => {
    return this.load(style2, options, (computedStyle = "") => S.transformCSS(options.name || this.name, `${computedStyle}${ar`${style$1}`}`));
  };
  getCommonTheme = (params) => {
    return S.getCommon(this.name, params);
  };
  getComponentTheme = (params) => {
    return S.getComponent(this.name, params);
  };
  getPresetTheme = (preset, selector, params) => {
    return S.getCustomPreset(this.name, preset, selector, params);
  };
  getLayerOrderThemeCSS = () => {
    return S.getLayerOrderCSS(this.name);
  };
  getStyleSheet = (extendedCSS = "", props = {}) => {
    if (this.css) {
      const _css = m(this.css, {
        dt: E
      });
      const _style = Y(ar`${_css}${extendedCSS}`);
      const _props = Object.entries(props).reduce((acc, [k6, v4]) => acc.push(`${k6}="${v4}"`) && acc, []).join(" ");
      return `<style type="text/css" data-primeng-style-id="${this.name}" ${_props}>${_style}</style>`;
    }
    return "";
  };
  getCommonThemeStyleSheet = (params, props = {}) => {
    return S.getCommonStyleSheet(this.name, params, props);
  };
  getThemeStyleSheet = (params, props = {}) => {
    let css5 = [S.getStyleSheet(this.name, params, props)];
    if (this.style) {
      const name = this.name === "base" ? "global-style" : `${this.name}-style`;
      const _css = ar`${m(this.style, {
        dt: E
      })}`;
      const _style = Y(S.transformCSS(name, _css));
      const _props = Object.entries(props).reduce((acc, [k6, v4]) => acc.push(`${k6}="${v4}"`) && acc, []).join(" ");
      css5.push(`<style type="text/css" data-primeng-style-id="${name}" ${_props}>${_style}</style>`);
    }
    return css5.join("");
  };
  static \u0275fac = function BaseStyle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseStyle)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BaseStyle,
    factory: _BaseStyle.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseStyle, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-config.mjs
var ThemeProvider = class _ThemeProvider {
  // @todo define type for theme
  theme = signal(void 0, ...ngDevMode ? [{
    debugName: "theme"
  }] : (
    /* istanbul ignore next */
    []
  ));
  csp = signal({
    nonce: void 0
  }, ...ngDevMode ? [{
    debugName: "csp"
  }] : (
    /* istanbul ignore next */
    []
  ));
  isThemeChanged = false;
  document = inject(DOCUMENT);
  baseStyle = inject(BaseStyle);
  constructor() {
    effect(() => {
      N.on("theme:change", (newTheme) => {
        untracked(() => {
          this.isThemeChanged = true;
          this.theme.set(newTheme);
        });
      });
    });
    effect(() => {
      const themeValue = this.theme();
      if (this.document && themeValue) {
        if (!this.isThemeChanged) {
          this.onThemeChange(themeValue);
        }
        this.isThemeChanged = false;
      }
    });
  }
  ngOnDestroy() {
    S.clearLoadedStyleNames();
    N.clear();
  }
  onThemeChange(value) {
    S.setTheme(value);
    if (this.document) {
      this.loadCommonTheme();
    }
  }
  loadCommonTheme() {
    if (this.theme() === "none") return;
    if (!S.isStyleNameLoaded("common")) {
      const {
        primitive,
        semantic,
        global,
        style: style3
      } = this.baseStyle.getCommonTheme?.() || {};
      const styleOptions = {
        nonce: this.csp?.()?.nonce
      };
      this.baseStyle.load(primitive?.css, __spreadValues({
        name: "primitive-variables"
      }, styleOptions));
      this.baseStyle.load(semantic?.css, __spreadValues({
        name: "semantic-variables"
      }, styleOptions));
      this.baseStyle.load(global?.css, __spreadValues({
        name: "global-variables"
      }, styleOptions));
      this.baseStyle.loadBaseStyle(__spreadValues({
        name: "global-style"
      }, styleOptions), style3);
      S.setLoadedStyleName("common");
    }
  }
  setThemeConfig(config) {
    const {
      theme,
      csp
    } = config || {};
    if (theme) this.theme.set(theme);
    if (csp) this.csp.set(csp);
  }
  static \u0275fac = function ThemeProvider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeProvider)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ThemeProvider,
    factory: _ThemeProvider.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeProvider, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var PrimeNG = class _PrimeNG extends ThemeProvider {
  ripple = signal(false, ...ngDevMode ? [{
    debugName: "ripple"
  }] : (
    /* istanbul ignore next */
    []
  ));
  platformId = inject(PLATFORM_ID);
  /**
   * @deprecated Since v20. Use `inputVariant` instead.
   */
  inputStyle = signal(null, ...ngDevMode ? [{
    debugName: "inputStyle"
  }] : (
    /* istanbul ignore next */
    []
  ));
  inputVariant = signal(null, ...ngDevMode ? [{
    debugName: "inputVariant"
  }] : (
    /* istanbul ignore next */
    []
  ));
  overlayAppendTo = signal("self", ...ngDevMode ? [{
    debugName: "overlayAppendTo"
  }] : (
    /* istanbul ignore next */
    []
  ));
  overlayOptions = {};
  csp = signal({
    nonce: void 0
  }, ...ngDevMode ? [{
    debugName: "csp"
  }] : (
    /* istanbul ignore next */
    []
  ));
  unstyled = signal(void 0, ...ngDevMode ? [{
    debugName: "unstyled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  pt = signal(void 0, ...ngDevMode ? [{
    debugName: "pt"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ptOptions = signal(void 0, ...ngDevMode ? [{
    debugName: "ptOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  filterMatchModeOptions = {
    text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
    numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
    date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
  };
  translation = {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    is: "Is",
    isNot: "Is not",
    before: "Before",
    after: "After",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    completed: "Completed",
    upload: "Upload",
    cancel: "Cancel",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    dateFormat: "mm/dd/yy",
    firstDayOfWeek: 0,
    today: "Today",
    weekHeader: "Wk",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyMessage: "No results found",
    searchMessage: "Search results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    emptyFilterMessage: "No results found",
    fileChosenMessage: "Files",
    noFileChosenMessage: "No file chosen",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "{page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      previousPageLabel: "Previous Page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List",
      selectColor: "Select a color",
      removeLabel: "Remove",
      browseFiles: "Browse Files",
      maximizeLabel: "Maximize",
      minimizeLabel: "Minimize"
    }
  };
  zIndex = {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  };
  translationSource = new Subject();
  translationObserver = this.translationSource.asObservable();
  getTranslation(key) {
    return this.translation[key];
  }
  setTranslation(value) {
    this.translation = __spreadValues(__spreadValues({}, this.translation), value);
    this.translationSource.next(this.translation);
  }
  setConfig(config) {
    const {
      csp,
      ripple,
      inputStyle,
      inputVariant,
      theme,
      overlayOptions,
      translation,
      filterMatchModeOptions,
      overlayAppendTo,
      zIndex,
      ptOptions,
      pt,
      unstyled
    } = config || {};
    if (csp) this.csp.set(csp);
    if (overlayAppendTo) this.overlayAppendTo.set(overlayAppendTo);
    if (ripple) this.ripple.set(ripple);
    if (inputStyle) this.inputStyle.set(inputStyle);
    if (inputVariant) this.inputVariant.set(inputVariant);
    if (overlayOptions) this.overlayOptions = overlayOptions;
    if (translation) this.setTranslation(translation);
    if (filterMatchModeOptions) this.filterMatchModeOptions = filterMatchModeOptions;
    if (zIndex) this.zIndex = zIndex;
    if (pt) this.pt.set(pt);
    if (ptOptions) this.ptOptions.set(ptOptions);
    if (unstyled) this.unstyled.set(unstyled);
    if (theme) this.setThemeConfig({
      theme,
      csp
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PrimeNG_BaseFactory;
    return function PrimeNG_Factory(__ngFactoryType__) {
      return (\u0275PrimeNG_BaseFactory || (\u0275PrimeNG_BaseFactory = \u0275\u0275getInheritedFactory(_PrimeNG)))(__ngFactoryType__ || _PrimeNG);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PrimeNG,
    factory: _PrimeNG.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeNG, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PRIME_NG_CONFIG = new InjectionToken("PRIME_NG_CONFIG");
function providePrimeNG(...features) {
  const providers = features?.map((feature) => ({
    provide: PRIME_NG_CONFIG,
    useValue: feature,
    multi: false
  }));
  const initializer = provideAppInitializer(() => {
    const PrimeNGConfig = inject(PrimeNG);
    features?.forEach((feature) => PrimeNGConfig.setConfig(feature));
    return;
  });
  return makeEnvironmentProviders([...providers, initializer]);
}

// node_modules/@primeuix/themes/dist/aura/accordion/index.mjs
var o = { transitionDuration: "{transition.duration}" };
var r = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}" };
var t = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1.125rem", fontWeight: "600", borderRadius: "0", borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", hoverBackground: "{content.background}", activeBackground: "{content.background}", activeHoverBackground: "{content.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "0" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } };
var e = { borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "0 1.125rem 1.125rem 1.125rem" };
var c3 = { root: o, panel: r, header: t, content: e };

// node_modules/@primeuix/themes/dist/aura/autocomplete/index.mjs
var o2 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" };
var r2 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var d = { padding: "{list.padding}", gap: "{list.gap}" };
var e2 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var l3 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var i2 = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var c4 = { borderRadius: "{border.radius.sm}" };
var f = { padding: "{list.option.padding}" };
var s4 = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } };
var a2 = { root: o2, overlay: r2, list: d, option: e2, optionGroup: l3, dropdown: i2, chip: c4, emptyMessage: f, colorScheme: s4 };

// node_modules/@primeuix/themes/dist/aura/avatar/index.mjs
var e3 = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var r3 = { size: "1rem" };
var o3 = { borderColor: "{content.background}", offset: "-0.75rem" };
var t2 = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } };
var i3 = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } };
var n = { root: e3, icon: r3, group: o3, lg: t2, xl: i3 };

// node_modules/@primeuix/themes/dist/aura/badge/index.mjs
var r4 = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" };
var o4 = { size: "0.5rem" };
var e4 = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" };
var c5 = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" };
var a3 = { fontSize: "1rem", minWidth: "2rem", height: "2rem" };
var n2 = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } };
var d2 = { root: r4, dot: o4, sm: e4, lg: c5, xl: a3, colorScheme: n2 };

// node_modules/@primeuix/themes/dist/aura/base/index.mjs
var r5 = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } };
var o5 = { transitionDuration: "0.2s", focusRing: { width: "1px", style: "solid", color: "{primary.color}", offset: "2px", shadow: "none" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.5rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.375rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.625rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "0", style: "none", color: "transparent", offset: "0", shadow: "none" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.25rem 0.25rem", gap: "2px", header: { padding: "0.5rem 1rem 0.25rem 1rem" }, option: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}" }, optionGroup: { padding: "0.5rem 0.75rem", fontWeight: "600" } }, content: { borderRadius: "{border.radius.md}" }, mask: { transitionDuration: "0.3s" }, navigation: { list: { padding: "0.25rem 0.25rem", gap: "2px" }, item: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}", gap: "0.5rem" }, submenuLabel: { padding: "0.5rem 0.75rem", fontWeight: "600" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.md}", padding: "0.75rem", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.25rem", shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }, navigation: { shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.600}", activeColor: "{primary.700}" }, highlight: { background: "{primary.50}", focusBackground: "{primary.100}", color: "{primary.700}", focusColor: "{primary.800}" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.200}", filledBackground: "{surface.50}", filledHoverBackground: "{surface.50}", filledFocusBackground: "{surface.50}", borderColor: "{surface.300}", hoverBorderColor: "{surface.400}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.400}", color: "{surface.700}", disabledColor: "{surface.500}", placeholderColor: "{surface.500}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.500}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.500}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.700}", hoverColor: "{surface.800}", mutedColor: "{surface.500}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.100}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.800}", borderColor: "{surface.600}", hoverBorderColor: "{surface.500}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.800}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } };
var e5 = { primitive: r5, semantic: o5 };

// node_modules/@primeuix/themes/dist/aura/blockui/index.mjs
var r6 = { borderRadius: "{content.border.radius}" };
var o6 = { root: r6 };

// node_modules/@primeuix/themes/dist/aura/breadcrumb/index.mjs
var o7 = { padding: "1rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r7 = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i4 = { color: "{navigation.item.icon.color}" };
var t3 = { root: o7, item: r7, separator: i4 };

// node_modules/@primeuix/themes/dist/aura/button/index.mjs
var r8 = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.5rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3rem" }, label: { fontWeight: "500" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" };
var o8 = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "{surface.600}", shadow: "none" } }, info: { background: "{sky.500}", hoverBackground: "{sky.600}", activeBackground: "{sky.700}", borderColor: "{sky.500}", hoverBorderColor: "{sky.600}", activeBorderColor: "{sky.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{sky.500}", shadow: "none" } }, success: { background: "{green.500}", hoverBackground: "{green.600}", activeBackground: "{green.700}", borderColor: "{green.500}", hoverBorderColor: "{green.600}", activeBorderColor: "{green.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{green.500}", shadow: "none" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.600}", activeBackground: "{orange.700}", borderColor: "{orange.500}", hoverBorderColor: "{orange.600}", activeBorderColor: "{orange.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{orange.500}", shadow: "none" } }, help: { background: "{purple.500}", hoverBackground: "{purple.600}", activeBackground: "{purple.700}", borderColor: "{purple.500}", hoverBorderColor: "{purple.600}", activeBorderColor: "{purple.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{purple.500}", shadow: "none" } }, danger: { background: "{red.500}", hoverBackground: "{red.600}", activeBackground: "{red.700}", borderColor: "{red.500}", hoverBorderColor: "{red.600}", activeBorderColor: "{red.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{red.500}", shadow: "none" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "{surface.950}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.200}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.200}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.200}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.200}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.200}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.200}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.700}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.700}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.700}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "{surface.300}", shadow: "none" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "{sky.400}", shadow: "none" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "{green.400}", shadow: "none" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "{orange.400}", shadow: "none" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "{purple.400}", shadow: "none" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "{red.400}", shadow: "none" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "{surface.0}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } };
var e6 = { root: r8, colorScheme: o8 };

// node_modules/@primeuix/themes/dist/aura/card/index.mjs
var o9 = { background: "{content.background}", borderRadius: "{border.radius.xl}", color: "{content.color}", shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)" };
var r9 = { padding: "1.25rem", gap: "0.5rem" };
var t4 = { gap: "0.5rem" };
var e7 = { fontSize: "1.25rem", fontWeight: "500" };
var a4 = { color: "{text.muted.color}" };
var d3 = { root: o9, body: r9, caption: t4, title: e7, subtitle: a4 };

// node_modules/@primeuix/themes/dist/aura/carousel/index.mjs
var r10 = { transitionDuration: "{transition.duration}" };
var o10 = { gap: "0.25rem" };
var a5 = { padding: "1rem", gap: "0.5rem" };
var i5 = { width: "2rem", height: "0.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var c6 = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } };
var t5 = { root: r10, content: o10, indicatorList: a5, indicator: i5, colorScheme: c6 };

// node_modules/@primeuix/themes/dist/aura/cascadeselect/index.mjs
var o11 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r11 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d4 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l4 = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1rem" };
var e8 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } };
var i6 = { color: "{form.field.icon.color}" };
var f2 = { root: o11, dropdown: r11, overlay: d4, list: l4, option: e8, clearIcon: i6 };

// node_modules/@primeuix/themes/dist/aura/checkbox/index.mjs
var r12 = { borderRadius: "{border.radius.sm}", width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } };
var o12 = { size: "0.875rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1rem" } };
var e9 = { root: r12, icon: o12 };

// node_modules/@primeuix/themes/dist/aura/chip/index.mjs
var o13 = { borderRadius: "16px", paddingX: "0.75rem", paddingY: "0.5rem", gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r13 = { width: "2rem", height: "2rem" };
var e10 = { size: "1rem" };
var c7 = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } };
var i7 = { light: { root: { background: "{surface.100}", color: "{surface.800}" }, icon: { color: "{surface.800}" }, removeIcon: { color: "{surface.800}" } }, dark: { root: { background: "{surface.800}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } };
var s5 = { root: o13, image: r13, icon: e10, removeIcon: c7, colorScheme: i7 };

// node_modules/@primeuix/themes/dist/aura/colorpicker/index.mjs
var r14 = { transitionDuration: "{transition.duration}" };
var o14 = { width: "1.5rem", height: "1.5rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e11 = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" };
var a6 = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } };
var s6 = { root: r14, preview: o14, panel: e11, colorScheme: a6 };

// node_modules/@primeuix/themes/dist/aura/confirmdialog/index.mjs
var o15 = { size: "2rem", color: "{overlay.modal.color}" };
var e12 = { gap: "1rem" };
var r15 = { icon: o15, content: e12 };

// node_modules/@primeuix/themes/dist/aura/confirmpopup/index.mjs
var o16 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" };
var r16 = { padding: "{overlay.popover.padding}", gap: "1rem" };
var e13 = { size: "1.5rem", color: "{overlay.popover.color}" };
var p3 = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" };
var a7 = { root: o16, content: r16, icon: e13, footer: p3 };

// node_modules/@primeuix/themes/dist/aura/contextmenu/index.mjs
var o17 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var i8 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var n3 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a8 = { mobileIndent: "1rem" };
var t6 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var r17 = { borderColor: "{content.border.color}" };
var c8 = { root: o17, list: i8, item: n3, submenu: a8, submenuIcon: t6, separator: r17 };

// node_modules/@primeuix/themes/dist/aura/css/index.mjs
var t7 = "\n    li.p-autocomplete-option,\n    div.p-cascadeselect-option-content,\n    li.p-listbox-option,\n    li.p-multiselect-option,\n    li.p-select-option,\n    li.p-listbox-option,\n    div.p-tree-node-content,\n    li.p-datatable-filter-constraint,\n    .p-datatable .p-datatable-tbody > tr,\n    .p-treetable .p-treetable-tbody > tr,\n    div.p-menu-item-content,\n    div.p-tieredmenu-item-content,\n    div.p-contextmenu-item-content,\n    div.p-menubar-item-content,\n    div.p-megamenu-item-content,\n    div.p-panelmenu-header-content,\n    div.p-panelmenu-item-content,\n    th.p-datatable-header-cell,\n    th.p-treetable-header-cell,\n    thead.p-datatable-thead > tr > th,\n    .p-treetable thead.p-treetable-thead>tr>th {\n        transition: none;\n    }\n";

// node_modules/@primeuix/themes/dist/aura/datatable/index.mjs
var o18 = { transitionDuration: "{transition.duration}" };
var r18 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var e14 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var d5 = { fontWeight: "600" };
var t8 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var l5 = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var c9 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var a9 = { fontWeight: "600" };
var n4 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var i9 = { color: "{primary.color}" };
var s7 = { width: "0.5rem" };
var g = { width: "1px", color: "{primary.color}" };
var u2 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" };
var b3 = { size: "2rem" };
var p4 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var m3 = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } };
var h2 = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var k3 = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var f3 = { light: { root: { borderColor: "{content.border.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } };
var css2 = "\n    .p-datatable-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n";
var v2 = { root: o18, header: r18, headerCell: e14, columnTitle: d5, row: t8, bodyCell: l5, footerCell: c9, columnFooter: a9, footer: n4, dropPoint: i9, columnResizer: s7, resizeIndicator: g, sortIcon: u2, loadingIcon: b3, rowToggleButton: p4, filter: m3, paginatorTop: h2, paginatorBottom: k3, colorScheme: f3, css: css2 };

// node_modules/@primeuix/themes/dist/aura/dataview/index.mjs
var o19 = { borderColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0" };
var r19 = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", borderRadius: "0" };
var d6 = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "0" };
var e15 = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.75rem 1rem", borderRadius: "0" };
var t9 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var n5 = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" };
var c10 = { root: o19, header: r19, content: d6, footer: e15, paginatorTop: t9, paginatorBottom: n5 };

// node_modules/@primeuix/themes/dist/aura/datepicker/index.mjs
var o20 = { transitionDuration: "{transition.duration}" };
var r20 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" };
var e16 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.5rem 0" };
var c11 = { gap: "0.5rem", fontWeight: "500" };
var d7 = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var n6 = { color: "{form.field.icon.color}" };
var t10 = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" };
var a10 = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" };
var i10 = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" };
var l6 = { margin: "0.5rem 0 0 0" };
var u3 = { padding: "0.25rem", fontWeight: "500", color: "{content.color}" };
var s8 = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2rem", height: "2rem", borderRadius: "50%", padding: "0.25rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var g2 = { margin: "0.5rem 0 0 0" };
var f4 = { padding: "0.375rem", borderRadius: "{content.border.radius}" };
var h3 = { margin: "0.5rem 0 0 0" };
var b4 = { padding: "0.375rem", borderRadius: "{content.border.radius}" };
var m4 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" };
var p5 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" };
var v3 = { light: { dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } };
var k4 = { root: o20, panel: r20, header: e16, title: c11, dropdown: d7, inputIcon: n6, selectMonth: t10, selectYear: a10, group: i10, dayView: l6, weekDay: u3, date: s8, monthView: g2, month: f4, yearView: h3, year: b4, buttonbar: m4, timePicker: p5, colorScheme: v3 };

// node_modules/@primeuix/themes/dist/aura/dialog/index.mjs
var o21 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" };
var a11 = { padding: "{overlay.modal.padding}", gap: "0.5rem" };
var d8 = { fontSize: "1.25rem", fontWeight: "600" };
var r21 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" };
var l7 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" };
var e17 = { root: o21, header: a11, title: d8, content: r21, footer: l7 };

// node_modules/@primeuix/themes/dist/aura/divider/index.mjs
var r22 = { borderColor: "{content.border.color}" };
var o22 = { background: "{content.background}", color: "{text.color}" };
var n7 = { margin: "1rem 0", padding: "0 1rem", content: { padding: "0 0.5rem" } };
var e18 = { margin: "0 1rem", padding: "0.5rem 0", content: { padding: "0.5rem 0" } };
var t11 = { root: r22, content: o22, horizontal: n7, vertical: e18 };

// node_modules/@primeuix/themes/dist/aura/dock/index.mjs
var r23 = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.xl}" };
var o23 = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var d9 = { root: r23, item: o23 };

// node_modules/@primeuix/themes/dist/aura/drawer/index.mjs
var o24 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" };
var a12 = { padding: "{overlay.modal.padding}" };
var d10 = { fontSize: "1.5rem", fontWeight: "600" };
var r24 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" };
var l8 = { padding: "{overlay.modal.padding}" };
var e19 = { root: o24, header: a12, title: d10, content: r24, footer: l8 };

// node_modules/@primeuix/themes/dist/aura/editor/index.mjs
var o25 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" };
var r25 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var e20 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" };
var t12 = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var d11 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var l9 = { toolbar: o25, toolbarItem: r25, overlay: e20, overlayOption: t12, content: d11 };

// node_modules/@primeuix/themes/dist/aura/fieldset/index.mjs
var o26 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" };
var r26 = { background: "{content.background}", hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "transparent", padding: "0.5rem 0.75rem", gap: "0.5rem", fontWeight: "600", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t13 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" };
var n8 = { padding: "0" };
var e21 = { root: o26, legend: r26, toggleIcon: t13, content: n8 };

// node_modules/@primeuix/themes/dist/aura/fileupload/index.mjs
var r27 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" };
var o27 = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "unset", borderWidth: "0", borderRadius: "0", gap: "0.5rem" };
var e22 = { highlightBorderColor: "{primary.color}", padding: "0 1.125rem 1.125rem 1.125rem", gap: "1rem" };
var t14 = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } };
var a13 = { gap: "0.5rem" };
var n9 = { height: "0.25rem" };
var d12 = { gap: "0.5rem" };
var i11 = { root: r27, header: o27, content: e22, file: t14, fileList: a13, progressbar: n9, basic: d12 };

// node_modules/@primeuix/themes/dist/aura/floatlabel/index.mjs
var o28 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } };
var i12 = { active: { top: "-1.25rem" } };
var r28 = { input: { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } };
var a14 = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } };
var d13 = { root: o28, over: i12, in: r28, on: a14 };

// node_modules/@primeuix/themes/dist/aura/galleria/index.mjs
var o29 = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" };
var r29 = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0.5rem", prev: { borderRadius: "50%" }, next: { borderRadius: "50%" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e23 = { size: "1.5rem" };
var t15 = { background: "{content.background}", padding: "1rem 0.25rem" };
var c12 = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var n10 = { size: "1rem" };
var a15 = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" };
var s9 = { gap: "0.5rem", padding: "1rem" };
var u4 = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i13 = { background: "rgba(0, 0, 0, 0.5)" };
var d14 = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" };
var g3 = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var f5 = { size: "1.5rem" };
var h4 = { light: { thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } };
var l10 = { root: o29, navButton: r29, navIcon: e23, thumbnailsContent: t15, thumbnailNavButton: c12, thumbnailNavButtonIcon: n10, caption: a15, indicatorList: s9, indicatorButton: u4, insetIndicatorList: i13, insetIndicatorButton: d14, closeButton: g3, closeButtonIcon: f5, colorScheme: h4 };

// node_modules/@primeuix/themes/dist/aura/iconfield/index.mjs
var o30 = { color: "{form.field.icon.color}" };
var r30 = { icon: o30 };

// node_modules/@primeuix/themes/dist/aura/iftalabel/index.mjs
var o31 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" };
var l11 = { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" };
var i14 = { root: o31, input: l11 };

// node_modules/@primeuix/themes/dist/aura/image/index.mjs
var o32 = { transitionDuration: "{transition.duration}" };
var r31 = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } };
var a16 = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "30px", padding: ".5rem", gap: "0.5rem" };
var i15 = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e24 = { root: o32, preview: r31, toolbar: a16, action: i15 };

// node_modules/@primeuix/themes/dist/aura/imagecompare/index.mjs
var o33 = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "unset", hoverBorderColor: "unset", borderWidth: "0", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r32 = { handle: o33 };

// node_modules/@primeuix/themes/dist/aura/inlinemessage/index.mjs
var r33 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" };
var o34 = { fontWeight: "500" };
var e25 = { size: "1rem" };
var n11 = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } } };
var a17 = { root: r33, text: o34, icon: e25, colorScheme: n11 };

// node_modules/@primeuix/themes/dist/aura/inplace/index.mjs
var o35 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" };
var r34 = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" };
var n12 = { root: o35, display: r34 };

// node_modules/@primeuix/themes/dist/aura/inputchips/index.mjs
var o36 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" };
var r35 = { borderRadius: "{border.radius.sm}" };
var d15 = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } };
var f6 = { root: o36, chip: r35, colorScheme: d15 };

// node_modules/@primeuix/themes/dist/aura/inputgroup/index.mjs
var r36 = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.icon.color}", borderRadius: "{form.field.border.radius}", padding: "0.5rem", minWidth: "2.5rem" };
var o37 = { addon: r36 };

// node_modules/@primeuix/themes/dist/aura/inputnumber/index.mjs
var r37 = { transitionDuration: "{transition.duration}" };
var o38 = { width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" };
var e26 = { light: { button: { background: "transparent", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.500}", activeColor: "{surface.600}" } }, dark: { button: { background: "transparent", hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.300}", activeColor: "{surface.200}" } } };
var a18 = { root: r37, button: o38, colorScheme: e26 };

// node_modules/@primeuix/themes/dist/aura/inputotp/index.mjs
var r38 = { gap: "0.5rem" };
var t16 = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } };
var e27 = { root: r38, input: t16 };

// node_modules/@primeuix/themes/dist/aura/inputtext/index.mjs
var o39 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d16 = { root: o39 };

// node_modules/@primeuix/themes/dist/aura/knob/index.mjs
var o40 = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r39 = { background: "{primary.color}" };
var t17 = { background: "{content.border.color}" };
var n13 = { color: "{text.muted.color}" };
var c13 = { root: o40, value: r39, range: t17, text: n13 };

// node_modules/@primeuix/themes/dist/aura/listbox/index.mjs
var o41 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" };
var r40 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var d17 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var i16 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var t18 = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" };
var e28 = { padding: "{list.option.padding}" };
var l12 = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } };
var n14 = { root: o41, list: r40, option: d17, optionGroup: i16, checkmark: t18, emptyMessage: e28, colorScheme: l12 };

// node_modules/@primeuix/themes/dist/aura/megamenu/index.mjs
var o42 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.5rem 0.75rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" };
var n15 = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" };
var i17 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a19 = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" };
var r41 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var t19 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var e29 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var c14 = { borderColor: "{content.border.color}" };
var d18 = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var g4 = { root: o42, baseItem: n15, item: i17, overlay: a19, submenu: r41, submenuLabel: t19, submenuIcon: e29, separator: c14, mobileButton: d18 };

// node_modules/@primeuix/themes/dist/aura/menu/index.mjs
var o43 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var n16 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var a20 = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } };
var i18 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var t20 = { borderColor: "{content.border.color}" };
var r42 = { root: o43, list: n16, item: a20, submenuLabel: i18, separator: t20 };

// node_modules/@primeuix/themes/dist/aura/menubar/index.mjs
var o44 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.5rem 0.75rem", transitionDuration: "{transition.duration}" };
var i19 = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" };
var n17 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var r43 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } };
var a21 = { borderColor: "{content.border.color}" };
var t21 = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e30 = { root: o44, baseItem: i19, item: n17, submenu: r43, separator: a21, mobileButton: t21 };

// node_modules/@primeuix/themes/dist/aura/message/index.mjs
var o45 = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" };
var r44 = { padding: "0.5rem 0.75rem", gap: "0.5rem", sm: { padding: "0.375rem 0.625rem" }, lg: { padding: "0.625rem 0.875rem" } };
var e31 = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } };
var n18 = { size: "1.125rem", sm: { size: "1rem" }, lg: { size: "1.25rem" } };
var l13 = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var s10 = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } };
var c15 = { root: { borderWidth: "1px" } };
var a22 = { content: { padding: "0" } };
var d19 = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } }, outlined: { color: "{surface.950}", borderColor: "{surface.950}" }, simple: { color: "{surface.950}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } };
var u5 = { root: o45, content: r44, text: e31, icon: n18, closeButton: l13, closeIcon: s10, outlined: c15, simple: a22, colorScheme: d19 };

// node_modules/@primeuix/themes/dist/aura/metergroup/index.mjs
var e32 = { borderRadius: "{content.border.radius}", gap: "1rem" };
var r45 = { background: "{content.border.color}", size: "0.5rem" };
var a23 = { gap: "0.5rem" };
var o46 = { size: "0.5rem" };
var l14 = { size: "1rem" };
var t22 = { verticalGap: "0.5rem", horizontalGap: "1rem" };
var b5 = { root: e32, meters: r45, label: a23, labelMarker: o46, labelIcon: l14, labelList: t22 };

// node_modules/@primeuix/themes/dist/aura/multiselect/index.mjs
var o47 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d20 = { width: "2.5rem", color: "{form.field.icon.color}" };
var r46 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l15 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var i20 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" };
var e33 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var f7 = { color: "{form.field.icon.color}" };
var a24 = { borderRadius: "{border.radius.sm}" };
var c16 = { padding: "{list.option.padding}" };
var n19 = { root: o47, dropdown: d20, overlay: r46, list: l15, option: i20, optionGroup: e33, chip: a24, clearIcon: f7, emptyMessage: c16 };

// node_modules/@primeuix/themes/dist/aura/orderlist/index.mjs
var r47 = { gap: "1.125rem" };
var a25 = { gap: "0.5rem" };
var o48 = { root: r47, controls: a25 };

// node_modules/@primeuix/themes/dist/aura/organizationchart/index.mjs
var o49 = { gutter: "0.75rem", transitionDuration: "{transition.duration}" };
var r48 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "0.75rem 1rem", toggleablePadding: "0.75rem 1rem 1.25rem 1rem", borderRadius: "{content.border.radius}" };
var e34 = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t23 = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" };
var n20 = { root: o49, node: r48, nodeToggleButton: e34, connector: t23 };

// node_modules/@primeuix/themes/dist/aura/overlaybadge/index.mjs
var o50 = { outline: { width: "2px", color: "{content.background}" } };
var t24 = { root: o50 };

// node_modules/@primeuix/themes/dist/aura/paginator/index.mjs
var o51 = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" };
var r49 = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t25 = { color: "{text.muted.color}" };
var e35 = { maxWidth: "2.5rem" };
var n21 = { root: o51, navButton: r49, currentPageReport: t25, jumpToPageInput: e35 };

// node_modules/@primeuix/themes/dist/aura/panel/index.mjs
var r50 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var o52 = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "{content.border.color}", borderWidth: "0", borderRadius: "0" };
var e36 = { padding: "0.375rem 1.125rem" };
var d21 = { fontWeight: "600" };
var t26 = { padding: "0 1.125rem 1.125rem 1.125rem" };
var n22 = { padding: "0 1.125rem 1.125rem 1.125rem" };
var a26 = { root: r50, header: o52, toggleableHeader: e36, title: d21, content: t26, footer: n22 };

// node_modules/@primeuix/themes/dist/aura/panelmenu/index.mjs
var o53 = { gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r51 = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "{content.border.radius}", first: { borderWidth: "1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "1px", bottomBorderRadius: "{content.border.radius}" } };
var n23 = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } };
var i21 = { indent: "1rem" };
var t27 = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" };
var a27 = { root: o53, panel: r51, item: n23, submenu: i21, submenuIcon: t27 };

// node_modules/@primeuix/themes/dist/aura/password/index.mjs
var r52 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" };
var o54 = { color: "{form.field.icon.color}" };
var e37 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" };
var a28 = { gap: "0.5rem" };
var d22 = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } };
var n24 = { meter: r52, icon: o54, overlay: e37, content: a28, colorScheme: d22 };

// node_modules/@primeuix/themes/dist/aura/picklist/index.mjs
var r53 = { gap: "1.125rem" };
var a29 = { gap: "0.5rem" };
var o55 = { root: r53, controls: a29 };

// node_modules/@primeuix/themes/dist/aura/popover/index.mjs
var o56 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" };
var r54 = { padding: "{overlay.popover.padding}" };
var e38 = { root: o56, content: r54 };

// node_modules/@primeuix/themes/dist/aura/progressbar/index.mjs
var r55 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.25rem" };
var o57 = { background: "{primary.color}" };
var e39 = { color: "{primary.contrast.color}", fontSize: "0.75rem", fontWeight: "600" };
var t28 = { root: r55, value: o57, label: e39 };

// node_modules/@primeuix/themes/dist/aura/progressspinner/index.mjs
var o58 = { light: { root: { colorOne: "{red.500}", colorTwo: "{blue.500}", colorThree: "{green.500}", colorFour: "{yellow.500}" } }, dark: { root: { colorOne: "{red.400}", colorTwo: "{blue.400}", colorThree: "{green.400}", colorFour: "{yellow.400}" } } };
var r56 = { colorScheme: o58 };

// node_modules/@primeuix/themes/dist/aura/radiobutton/index.mjs
var o59 = { width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } };
var r57 = { size: "0.75rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.5rem" }, lg: { size: "1rem" } };
var e40 = { root: o59, icon: r57 };

// node_modules/@primeuix/themes/dist/aura/rating/index.mjs
var o60 = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r58 = { size: "1rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" };
var i22 = { root: o60, icon: r58 };

// node_modules/@primeuix/themes/dist/aura/ripple/index.mjs
var r59 = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } };
var o61 = { colorScheme: r59 };

// node_modules/@primeuix/themes/dist/aura/scrollpanel/index.mjs
var r60 = { transitionDuration: "{transition.duration}" };
var o62 = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var s11 = { light: { bar: { background: "{surface.100}" } }, dark: { bar: { background: "{surface.800}" } } };
var a30 = { root: r60, bar: o62, colorScheme: s11 };

// node_modules/@primeuix/themes/dist/aura/select/index.mjs
var o63 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r61 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d23 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l16 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var i23 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var e41 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var f8 = { color: "{form.field.icon.color}" };
var c17 = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" };
var a31 = { padding: "{list.option.padding}" };
var n25 = { root: o63, dropdown: r61, overlay: d23, list: l16, option: i23, optionGroup: e41, clearIcon: f8, checkmark: c17, emptyMessage: a31 };

// node_modules/@primeuix/themes/dist/aura/selectbutton/index.mjs
var r62 = { borderRadius: "{form.field.border.radius}" };
var o64 = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } };
var d24 = { root: r62, colorScheme: o64 };

// node_modules/@primeuix/themes/dist/aura/skeleton/index.mjs
var r63 = { borderRadius: "{content.border.radius}" };
var a32 = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } };
var o65 = { root: r63, colorScheme: a32 };

// node_modules/@primeuix/themes/dist/aura/slider/index.mjs
var o66 = { transitionDuration: "{transition.duration}" };
var r64 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" };
var n26 = { background: "{primary.color}" };
var t29 = { width: "20px", height: "20px", borderRadius: "50%", background: "{content.border.color}", hoverBackground: "{content.border.color}", content: { borderRadius: "50%", hoverBackground: "{content.background}", width: "16px", height: "16px", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e42 = { light: { handle: { content: { background: "{surface.0}" } } }, dark: { handle: { content: { background: "{surface.950}" } } } };
var a33 = { root: o66, track: r64, range: n26, handle: t29, colorScheme: e42 };

// node_modules/@primeuix/themes/dist/aura/speeddial/index.mjs
var t30 = { gap: "0.5rem", transitionDuration: "{transition.duration}" };
var a34 = { root: t30 };

// node_modules/@primeuix/themes/dist/aura/splitbutton/index.mjs
var r65 = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" };
var d25 = { root: r65 };

// node_modules/@primeuix/themes/dist/aura/splitter/index.mjs
var o67 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" };
var r66 = { background: "{content.border.color}" };
var n27 = { size: "24px", background: "transparent", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t31 = { root: o67, gutter: r66, handle: n27 };

// node_modules/@primeuix/themes/dist/aura/stepper/index.mjs
var o68 = { transitionDuration: "{transition.duration}" };
var r67 = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" };
var e43 = { padding: "0.5rem", gap: "1rem" };
var t32 = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" };
var n28 = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" };
var a35 = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" };
var c18 = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" };
var d26 = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" };
var i24 = { root: o68, separator: r67, step: e43, stepHeader: t32, stepTitle: n28, stepNumber: a35, steppanels: c18, steppanel: d26 };

// node_modules/@primeuix/themes/dist/aura/steps/index.mjs
var o69 = { transitionDuration: "{transition.duration}" };
var r68 = { background: "{content.border.color}" };
var t33 = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" };
var e44 = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" };
var n29 = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" };
var c19 = { root: o69, separator: r68, itemLink: t33, itemLabel: e44, itemNumber: n29 };

// node_modules/@primeuix/themes/dist/aura/tabmenu/index.mjs
var o70 = { transitionDuration: "{transition.duration}" };
var r69 = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" };
var t34 = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e45 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var c20 = { height: "1px", bottom: "-1px", background: "{primary.color}" };
var n30 = { root: o70, tablist: r69, item: t34, itemIcon: e45, activeBar: c20 };

// node_modules/@primeuix/themes/dist/aura/tabs/index.mjs
var o71 = { transitionDuration: "{transition.duration}" };
var r70 = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" };
var t35 = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var n31 = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } };
var c21 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var e46 = { height: "1px", bottom: "-1px", background: "{primary.color}" };
var a36 = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } };
var i25 = { root: o71, tablist: r70, tab: t35, tabpanel: n31, navButton: c21, activeBar: e46, colorScheme: a36 };

// node_modules/@primeuix/themes/dist/aura/tabview/index.mjs
var o72 = { transitionDuration: "{transition.duration}" };
var r71 = { background: "{content.background}", borderColor: "{content.border.color}" };
var t36 = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var n32 = { background: "{content.background}", color: "{content.color}" };
var a37 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" };
var c22 = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } };
var e47 = { root: o72, tabList: r71, tab: t36, tabPanel: n32, navButton: a37, colorScheme: c22 };

// node_modules/@primeuix/themes/dist/aura/tag/index.mjs
var r72 = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" };
var o73 = { size: "0.75rem" };
var a38 = { light: { primary: { background: "{primary.100}", color: "{primary.700}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.100}", color: "{green.700}" }, info: { background: "{sky.100}", color: "{sky.700}" }, warn: { background: "{orange.100}", color: "{orange.700}" }, danger: { background: "{red.100}", color: "{red.700}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "color-mix(in srgb, {primary.500}, transparent 84%)", color: "{primary.300}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", color: "{green.300}" }, info: { background: "color-mix(in srgb, {sky.500}, transparent 84%)", color: "{sky.300}" }, warn: { background: "color-mix(in srgb, {orange.500}, transparent 84%)", color: "{orange.300}" }, danger: { background: "color-mix(in srgb, {red.500}, transparent 84%)", color: "{red.300}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } };
var n33 = { root: r72, icon: o73, colorScheme: a38 };

// node_modules/@primeuix/themes/dist/aura/terminal/index.mjs
var r73 = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" };
var o74 = { gap: "0.25rem" };
var d27 = { margin: "2px 0" };
var e48 = { root: r73, prompt: o74, commandResponse: d27 };

// node_modules/@primeuix/themes/dist/aura/textarea/index.mjs
var o75 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d28 = { root: o75 };

// node_modules/@primeuix/themes/dist/aura/tieredmenu/index.mjs
var o76 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var i26 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var n34 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a39 = { mobileIndent: "1rem" };
var t37 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var r74 = { borderColor: "{content.border.color}" };
var c23 = { root: o76, list: i26, item: n34, submenu: a39, submenuIcon: t37, separator: r74 };

// node_modules/@primeuix/themes/dist/aura/timeline/index.mjs
var e49 = { minHeight: "5rem" };
var r75 = { eventContent: { padding: "1rem 0" } };
var o77 = { eventContent: { padding: "0 1rem" } };
var n35 = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{content.border.color}", content: { borderRadius: "50%", size: "0.375rem", background: "{primary.color}", insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" } };
var t38 = { color: "{content.border.color}", size: "2px" };
var d29 = { event: e49, horizontal: r75, vertical: o77, eventMarker: n35, eventConnector: t38 };

// node_modules/@primeuix/themes/dist/aura/toast/index.mjs
var o78 = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" };
var r76 = { size: "1.125rem" };
var e50 = { padding: "{overlay.popover.padding}", gap: "0.5rem" };
var n36 = { gap: "0.5rem" };
var a40 = { fontWeight: "500", fontSize: "1rem" };
var s12 = { fontWeight: "500", fontSize: "0.875rem" };
var c24 = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var l17 = { size: "1rem" };
var t39 = { light: { root: { blur: "1.5px" }, info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } } } } };
var u6 = { root: o78, icon: r76, content: e50, text: n36, summary: a40, detail: s12, closeButton: c24, closeIcon: l17, colorScheme: t39 };

// node_modules/@primeuix/themes/dist/aura/togglebutton/index.mjs
var r77 = { padding: "0.25rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.25rem" } };
var o79 = { disabledColor: "{form.field.disabled.color}" };
var e51 = { padding: "0.25rem 0.75rem", borderRadius: "{content.border.radius}", checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)", sm: { padding: "0.25rem 0.75rem" }, lg: { padding: "0.25rem 0.75rem" } };
var d30 = { light: { root: { background: "{surface.100}", checkedBackground: "{surface.100}", hoverBackground: "{surface.100}", borderColor: "{surface.100}", color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}", checkedBorderColor: "{surface.100}" }, content: { checkedBackground: "{surface.0}" }, icon: { color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}" } }, dark: { root: { background: "{surface.950}", checkedBackground: "{surface.950}", hoverBackground: "{surface.950}", borderColor: "{surface.950}", color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}", checkedBorderColor: "{surface.950}" }, content: { checkedBackground: "{surface.800}" }, icon: { color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}" } } };
var c25 = { root: r77, icon: o79, content: e51, colorScheme: d30 };

// node_modules/@primeuix/themes/dist/aura/toggleswitch/index.mjs
var r78 = { width: "2.5rem", height: "1.5rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" };
var o80 = { borderRadius: "50%", size: "1rem" };
var e52 = { light: { root: { background: "{surface.300}", disabledBackground: "{form.field.disabled.background}", hoverBackground: "{surface.400}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.0}", disabledBackground: "{form.field.disabled.color}", hoverBackground: "{surface.0}", checkedBackground: "{surface.0}", checkedHoverBackground: "{surface.0}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.600}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.900}", hoverBackground: "{surface.300}", checkedBackground: "{surface.900}", checkedHoverBackground: "{surface.900}", color: "{surface.900}", hoverColor: "{surface.800}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } } };
var c26 = { root: r78, handle: o80, colorScheme: e52 };

// node_modules/@primeuix/themes/dist/aura/toolbar/index.mjs
var o81 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" };
var r79 = { root: o81 };

// node_modules/@primeuix/themes/dist/aura/tooltip/index.mjs
var r80 = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.5rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" };
var o82 = { light: { root: { background: "{surface.700}", color: "{surface.0}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" } } };
var e53 = { root: r80, colorScheme: o82 };

// node_modules/@primeuix/themes/dist/aura/tree/index.mjs
var o83 = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" };
var r81 = { padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, gap: "0.25rem" };
var e54 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" };
var t40 = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var n37 = { size: "2rem" };
var c27 = { margin: "0 0 0.5rem 0" };
var css3 = "\n    .p-tree-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n";
var d31 = { root: o83, node: r81, nodeIcon: e54, nodeToggleButton: t40, loadingIcon: n37, filter: c27, css: css3 };

// node_modules/@primeuix/themes/dist/aura/treeselect/index.mjs
var o84 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r82 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d32 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l18 = { padding: "{list.padding}" };
var e55 = { padding: "{list.option.padding}" };
var i27 = { borderRadius: "{border.radius.sm}" };
var f9 = { color: "{form.field.icon.color}" };
var a41 = { root: o84, dropdown: r82, overlay: d32, tree: l18, emptyMessage: e55, chip: i27, clearIcon: f9 };

// node_modules/@primeuix/themes/dist/aura/treetable/index.mjs
var o85 = { transitionDuration: "{transition.duration}" };
var r83 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" };
var e56 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var t41 = { fontWeight: "600" };
var c28 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var n38 = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" };
var l19 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", padding: "0.75rem 1rem" };
var d33 = { fontWeight: "600" };
var a42 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" };
var i28 = { width: "0.5rem" };
var g5 = { width: "1px", color: "{primary.color}" };
var s13 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" };
var u7 = { size: "2rem" };
var b6 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var h5 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var m5 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var f10 = { light: { root: { borderColor: "{content.border.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } };
var css4 = "\n    .p-treetable-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n";
var k5 = { root: o85, header: r83, headerCell: e56, columnTitle: t41, row: c28, bodyCell: n38, footerCell: l19, columnFooter: d33, footer: a42, columnResizer: i28, resizeIndicator: g5, sortIcon: s13, loadingIcon: u7, nodeToggleButton: b6, paginatorTop: h5, paginatorBottom: m5, colorScheme: f10, css: css4 };

// node_modules/@primeuix/themes/dist/aura/virtualscroller/index.mjs
var o86 = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } };
var e57 = { loader: o86 };

// node_modules/@primeuix/themes/dist/aura/index.mjs
var r84 = Object.defineProperty;
var e58 = Object.defineProperties;
var m6 = Object.getOwnPropertyDescriptors;
var i29 = Object.getOwnPropertySymbols;
var t42 = Object.prototype.hasOwnProperty;
var a43 = Object.prototype.propertyIsEnumerable;
var o87 = (e59, m7, i30) => m7 in e59 ? r84(e59, m7, { enumerable: true, configurable: true, writable: true, value: i30 }) : e59[m7] = i30;
var Nr;
var Qr = (Nr = ((r85, e59) => {
  for (var m7 in e59 || (e59 = {})) t42.call(e59, m7) && o87(r85, m7, e59[m7]);
  if (i29) for (var m7 of i29(e59)) a43.call(e59, m7) && o87(r85, m7, e59[m7]);
  return r85;
})({}, e5), e58(Nr, m6({ components: { accordion: c3, autocomplete: a2, avatar: n, badge: d2, blockui: o6, breadcrumb: t3, button: e6, card: d3, carousel: t5, cascadeselect: f2, checkbox: e9, chip: s5, colorpicker: s6, confirmdialog: r15, confirmpopup: a7, contextmenu: c8, datatable: v2, dataview: c10, datepicker: k4, dialog: e17, divider: t11, dock: d9, drawer: e19, editor: l9, fieldset: e21, fileupload: i11, floatlabel: d13, galleria: l10, iconfield: r30, iftalabel: i14, image: e24, imagecompare: r32, inlinemessage: a17, inplace: n12, inputchips: f6, inputgroup: o37, inputnumber: a18, inputotp: e27, inputtext: d16, knob: c13, listbox: n14, megamenu: g4, menu: r42, menubar: e30, message: u5, metergroup: b5, multiselect: n19, orderlist: o48, organizationchart: n20, overlaybadge: t24, paginator: n21, panel: a26, panelmenu: a27, password: n24, picklist: o55, popover: e38, progressbar: t28, progressspinner: r56, radiobutton: e40, rating: i22, ripple: o61, scrollpanel: a30, select: n25, selectbutton: d24, skeleton: o65, slider: a33, speeddial: a34, splitbutton: d25, splitter: t31, stepper: i24, steps: c19, tabmenu: n30, tabs: i25, tabview: e47, tag: n33, terminal: e48, textarea: d28, tieredmenu: c23, timeline: d29, toast: u6, togglebutton: c25, toggleswitch: c26, toolbar: r79, tooltip: e53, tree: d31, treeselect: a41, treetable: k5, virtualscroller: e57 }, css: t7 })));

// src/app/core/guards/auth.guard.ts
var authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn())
    return true;
  router.navigate(["/login"]);
  return false;
};

// src/app/core/guards/permission.guard.ts
function permissionGuard(screen, action = "READ") {
  return () => {
    const rbac = inject(RbacService);
    const router = inject(Router);
    if (rbac.can(screen, action))
      return true;
    router.navigate(["/app/dashboard"]);
    return false;
  };
}

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "login",
    loadComponent: () => import("./chunk-3MEHYKMX.js").then((m7) => m7.LoginComponent)
  },
  {
    path: "app",
    loadComponent: () => import("./chunk-2MVY6WGA.js").then((m7) => m7.ShellComponent),
    canActivate: [authGuard],
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-SE2K2JKZ.js").then((m7) => m7.DashboardComponent)
      },
      {
        path: "organizations",
        loadComponent: () => import("./chunk-BL36EDRR.js").then((m7) => m7.OrganizationsComponent),
        canActivate: [permissionGuard("ORGANIZATIONS", "READ")]
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-MC42F7US.js").then((m7) => m7.UsersComponent),
        canActivate: [permissionGuard("USERS", "READ")]
      },
      {
        path: "categories",
        loadComponent: () => import("./chunk-FNGUBVG6.js").then((m7) => m7.CategoriesComponent),
        canActivate: [permissionGuard("CATALOG_CATEGORIES", "READ")]
      },
      {
        path: "products",
        loadComponent: () => import("./chunk-HTEU3YVE.js").then((m7) => m7.ProductsComponent),
        canActivate: [permissionGuard("CATALOG_PRODUCTS", "READ")]
      },
      {
        path: "packages",
        loadComponent: () => import("./chunk-6FR2UXSJ.js").then((m7) => m7.PackagesComponent),
        canActivate: [permissionGuard("CATALOG_PACKAGES", "READ")]
      },
      {
        path: "projects",
        loadComponent: () => import("./chunk-G6HJQBBD.js").then((m7) => m7.ProjectsComponent)
      },
      {
        path: "projects/:id",
        loadComponent: () => import("./chunk-7AR4CYL6.js").then((m7) => m7.WorkspaceComponent)
      },
      {
        path: "cortex/:projectId",
        loadComponent: () => import("./chunk-YXFYXKFI.js").then((m7) => m7.CortexComponent)
      },
      {
        path: "nexus/:projectId",
        loadComponent: () => import("./chunk-PSXTFDK6.js").then((m7) => m7.NexusComponent)
      },
      {
        path: "axon/:projectId",
        loadComponent: () => import("./chunk-NWUGVHS6.js").then((m7) => m7.AxonComponent)
      },
      {
        path: "ws-connectors/:projectId",
        loadComponent: () => import("./chunk-ENB4UIUR.js").then((m7) => m7.WsConnectorsComponent)
      },
      {
        path: "studio/:projectId",
        loadComponent: () => import("./chunk-FBIL2HLZ.js").then((m7) => m7.StudioComponent)
      },
      {
        path: "settings",
        loadComponent: () => import("./chunk-OSB2URBD.js").then((m7) => m7.SettingsComponent)
      },
      {
        path: "connector-access",
        loadComponent: () => import("./chunk-RHRQROB5.js").then((m7) => m7.ConnectorAccessComponent)
      },
      {
        path: "audit",
        loadComponent: () => import("./chunk-DOJ62EMA.js").then((m7) => m7.AuditComponent)
      },
      {
        path: "audit/action-types",
        loadComponent: () => import("./chunk-JMNKMNE4.js").then((m7) => m7.AuditActionTypesComponent)
      },
      {
        path: "audit/entity-types",
        loadComponent: () => import("./chunk-CA26D3KK.js").then((m7) => m7.AuditEntityTypesComponent)
      },
      {
        path: "arachim/orders",
        loadComponent: () => import("./chunk-FEFPNWNE.js").then((m7) => m7.OrdersComponent)
      }
    ]
  },
  { path: "**", redirectTo: "login" }
];

// src/app/core/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const token = auth.getToken();
  if (token) {
    req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }
  return next(req).pipe(catchError((err) => {
    if (err.status === 401) {
      auth.logout();
      router.navigate(["/login"]);
    }
    return throwError(() => err);
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimations(),
    // נדרש ל-Kendo Angular
    { provide: LOCALE_ID, useValue: "he" },
    providePrimeNG({
      theme: {
        preset: Qr,
        options: { darkModeSelector: false, cssLayer: { name: "primeng", order: "tailwind-base, primeng, tailwind-utilities" } }
      }
    })
  ]
};

// src/app/app.ts
var App = class _App {
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet], template: "<router-outlet />\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 10 });
})();

// src/main.ts
registerLocaleData(he_default);
pdf_exports.defineFont({
  "NotoSansHebrew": "https://fonts.gstatic.com/s/notosanshebrew/v38/or3HQ7v33eiDljA1IufXTtVf7V6RvEEdhQlk0LlGxCyaeNKYZC0miQ.woff2"
});
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
