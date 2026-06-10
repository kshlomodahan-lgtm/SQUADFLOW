import {
  Directive, Input, TemplateRef, ViewContainerRef,
  inject, signal, effect, OnChanges,
} from '@angular/core';
import { RbacService } from '../services/rbac.service';

@Directive({
  selector: '[appHasPerm]',
  standalone: true,
})
export class HasPermDirective implements OnChanges {
  @Input('appHasPerm') perm: string | string[] = '';

  private readonly permSig = signal<string | string[]>('');
  private shown = false;

  private readonly rbac = inject(RbacService);
  private readonly tpl  = inject(TemplateRef<any>);
  private readonly vcr  = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      const perm = this.permSig();
      if (!perm || (Array.isArray(perm) && !perm.length)) {
        this.show(); return;
      }
      const list    = Array.isArray(perm) ? perm : [perm];
      const allowed = list.some(p => {
        const [screen, action = 'READ'] = p.split(':');
        return this.rbac.can(screen, action);
      });
      allowed ? this.show() : this.hide();
    });
  }

  ngOnChanges() { this.permSig.set(this.perm); }

  private show() {
    if (!this.shown) { this.vcr.createEmbeddedView(this.tpl); this.shown = true; }
  }
  private hide() {
    if (this.shown) { this.vcr.clear(); this.shown = false; }
  }
}
