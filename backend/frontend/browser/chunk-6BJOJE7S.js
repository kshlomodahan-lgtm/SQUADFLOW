import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-VR4UVLCZ.js";

// src/app/shared/components/neural-net/neural-net.component.ts
var _c0 = ["canvas"];
var NeuralNetComponent = class _NeuralNetComponent {
  canvasRef;
  raf = 0;
  nodes = [];
  resizeObs;
  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext("2d");
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      this.initNodes(canvas.width, canvas.height);
    };
    this.resizeObs = new ResizeObserver(resize);
    this.resizeObs.observe(canvas);
    resize();
    this.animate(ctx, canvas);
  }
  initNodes(w, h) {
    const COUNT = Math.floor(w * h / 14e3);
    this.nodes = [];
    for (let i = 0; i < COUNT; i++) {
      const isHub = i < COUNT * 0.2;
      this.nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: isHub ? 3.5 : 1.8,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02
      });
    }
  }
  animate(ctx, canvas) {
    const LINK_DIST = 130;
    const frame = () => {
      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      for (const n of this.nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += n.pulseSpeed;
        if (n.x < 0 || n.x > w)
          n.vx *= -1;
        if (n.y < 0 || n.y > h)
          n.vy *= -1;
      }
      for (let i = 0; i < this.nodes.length; i++) {
        for (let j = i + 1; j < this.nodes.length; j++) {
          const a = this.nodes[i], b = this.nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.3;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,229,255,${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of this.nodes) {
        const glow = Math.sin(n.pulse) * 0.3 + 0.7;
        if (n.r > 2) {
          const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 5);
          grad.addColorStop(0, `rgba(0,229,255,${0.18 * glow})`);
          grad.addColorStop(1, "rgba(0,229,255,0)");
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r * 5, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.r > 2 ? `rgba(0,229,255,${0.7 * glow + 0.3})` : `rgba(255,255,255,${0.45 * glow + 0.25})`;
        ctx.fill();
      }
      this.raf = requestAnimationFrame(frame);
    };
    frame();
  }
  ngOnDestroy() {
    cancelAnimationFrame(this.raf);
    this.resizeObs?.disconnect();
  }
  static \u0275fac = function NeuralNetComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NeuralNetComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NeuralNetComponent, selectors: [["app-neural-net"]], viewQuery: function NeuralNetComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvasRef = _t.first);
    }
  }, decls: 2, vars: 0, consts: [["canvas", ""]], template: function NeuralNetComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElement(0, "canvas", null, 0);
    }
  }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\ncanvas[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n/*# sourceMappingURL=neural-net.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NeuralNetComponent, [{
    type: Component,
    args: [{ selector: "app-neural-net", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<canvas #canvas></canvas>`, styles: ["/* angular:styles/component:scss;5552a86091a93cb42a11c290ebcced7864c5f20e456f1f5e5df102970a07ed15;C:/Users/Administrator/SQUADFLOW/apps/portal/src/app/shared/components/neural-net/neural-net.component.ts */\n:host {\n  display: block;\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\ncanvas {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n/*# sourceMappingURL=neural-net.component.css.map */\n"] }]
  }], null, { canvasRef: [{
    type: ViewChild,
    args: ["canvas"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NeuralNetComponent, { className: "NeuralNetComponent", filePath: "src/app/shared/components/neural-net/neural-net.component.ts", lineNumber: 20 });
})();

export {
  NeuralNetComponent
};
//# sourceMappingURL=chunk-6BJOJE7S.js.map
