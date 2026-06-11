import {
  Component, OnInit, OnDestroy, HostListener,
  computed, effect, signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiProcessingService } from '../../../core/services/ai-processing.service';

const EQ_PATTERNS = [
  [20, 80, 40, 90, 30],
  [70, 30, 85, 25, 60],
  [45, 90, 20, 75, 50],
  [60, 40, 95, 35, 70],
  [30, 75, 50, 88, 20],
  [85, 20, 65, 45, 90],
  [50, 60, 30, 80, 40],
  [25, 95, 55, 15, 70],
];

@Component({
  selector: 'app-ai-processing-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-processing-overlay.component.html',
  styleUrl: './ai-processing-overlay.component.scss',
})
export class AiProcessingOverlayComponent implements OnInit, OnDestroy {
  progressPct  = signal(0);
  elapsedSec   = signal(0);
  eqHeights    = signal<number[]>(EQ_PATTERNS.map(p => p[0]));

  private progressTimer?: ReturnType<typeof setInterval>;
  private elapsedTimer?:  ReturnType<typeof setInterval>;
  private eqTimer?:       ReturnType<typeof setInterval>;
  private eqStep = 0;

  currentStageIdx = computed(() => {
    const stages = this.svc.config().stages;
    if (!stages?.length) return -1;
    const idx = Math.floor((this.progressPct() / 100) * stages.length);
    return Math.min(idx, stages.length - 1);
  });

  elapsedText = computed(() => {
    const s = this.elapsedSec();
    if (s < 60) return `${s} שנ'`;
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')} דק'`;
  });

  constructor(public svc: AiProcessingService) {
    effect(() => {
      if (this.svc.isActive()) {
        this.startTimers();
      } else {
        this.stopTimers();
        this.progressPct.set(0);
        this.elapsedSec.set(0);
      }
    });

    effect(() => {
      if (this.svc.completed()) {
        this.progressPct.set(100);
      }
    });
  }

  ngOnInit() {}
  ngOnDestroy() { this.stopTimers(); }

  @HostListener('document:keydown.escape', ['$event'])
  onEscape(e: KeyboardEvent) {
    if (this.svc.isActive()) e.stopImmediatePropagation();
  }

  private startTimers() {
    this.progressPct.set(0);
    this.elapsedSec.set(0);

    // Fake progress: fast → slow → stall near 88%
    this.progressTimer = setInterval(() => {
      const cur = this.progressPct();
      if (cur >= 88 || this.svc.completed()) return;
      const increment = Math.max(0.3, (88 - cur) / 120);
      this.progressPct.set(Math.min(88, +(cur + increment).toFixed(1)));
    }, 300);

    this.elapsedTimer = setInterval(() => {
      this.elapsedSec.update(s => s + 1);
    }, 1000);

    // EQ animation — cycle through pattern steps
    this.eqTimer = setInterval(() => {
      this.eqStep = (this.eqStep + 1) % EQ_PATTERNS[0].length;
      this.eqHeights.set(EQ_PATTERNS.map(p => p[this.eqStep]));
    }, 180);
  }

  private stopTimers() {
    clearInterval(this.progressTimer);
    clearInterval(this.elapsedTimer);
    clearInterval(this.eqTimer);
  }
}
