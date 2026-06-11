import { Injectable, signal } from '@angular/core';

export interface AiProcessingConfig {
  title?: string;
  subtitle?: string;
  model?: string;
  stages?: string[];
  estimatedSeconds?: number;
}

@Injectable({ providedIn: 'root' })
export class AiProcessingService {
  readonly isActive   = signal(false);
  readonly completed  = signal(false);
  readonly hasError   = signal(false);
  readonly errorMsg   = signal('');
  readonly config     = signal<AiProcessingConfig>({});

  start(cfg: AiProcessingConfig = {}) {
    this.completed.set(false);
    this.hasError.set(false);
    this.errorMsg.set('');
    this.config.set(cfg);
    this.isActive.set(true);
  }

  complete() {
    this.completed.set(true);
    setTimeout(() => this.isActive.set(false), 1400);
  }

  error(msg: string) {
    this.hasError.set(true);
    this.errorMsg.set(msg);
    setTimeout(() => this.isActive.set(false), 3000);
  }
}
