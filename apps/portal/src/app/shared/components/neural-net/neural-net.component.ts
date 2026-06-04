import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

interface NetNode {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  pulse: number; pulseSpeed: number;
}

@Component({
  selector: 'app-neural-net',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<canvas #canvas></canvas>`,
  styles: [`
    :host { display: block; position: absolute; inset: 0; pointer-events: none; }
    canvas { width: 100%; height: 100%; display: block; }
  `],
})
export class NeuralNetComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private raf = 0;
  private nodes: NetNode[] = [];
  private resizeObs!: ResizeObserver;

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    const ctx    = canvas.getContext('2d')!;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      this.initNodes(canvas.width, canvas.height);
    };

    this.resizeObs = new ResizeObserver(resize);
    this.resizeObs.observe(canvas);
    resize();
    this.animate(ctx, canvas);
  }

  private initNodes(w: number, h: number) {
    const COUNT = Math.floor((w * h) / 14000);   // density
    this.nodes = [];
    for (let i = 0; i < COUNT; i++) {
      const isHub = i < COUNT * 0.2;
      this.nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r:  isHub ? 3.5 : 1.8,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02,
      });
    }
  }

  private animate(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    const LINK_DIST = 130;

    const frame = () => {
      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // update
      for (const n of this.nodes) {
        n.x += n.vx; n.y += n.vy;
        n.pulse += n.pulseSpeed;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      // links
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
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of this.nodes) {
        const glow = Math.sin(n.pulse) * 0.3 + 0.7;

        if (n.r > 2) {
          // halo
          const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 5);
          grad.addColorStop(0, `rgba(0,229,255,${0.18 * glow})`);
          grad.addColorStop(1, 'rgba(0,229,255,0)');
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r * 5, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.r > 2
          ? `rgba(0,229,255,${0.7 * glow + 0.3})`
          : `rgba(255,255,255,${0.45 * glow + 0.25})`;
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
}
