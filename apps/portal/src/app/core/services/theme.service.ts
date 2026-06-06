import { Injectable, effect, signal } from '@angular/core';

export type ThemeMode   = 'light' | 'dark';
export type ColorScheme = 'blue' | 'teal' | 'purple' | 'green' | 'rose' | 'amber';

export interface SchemeDef {
  id:      ColorScheme;
  label:   string;
  primary: string;
}

export const COLOR_SCHEMES: SchemeDef[] = [
  { id: 'blue',   label: 'כחול',  primary: '#0D47FF' },
  { id: 'teal',   label: 'תכלת',  primary: '#0891b2' },
  { id: 'purple', label: 'סגול',  primary: '#7c3aed' },
  { id: 'green',  label: 'ירוק',  primary: '#059669' },
  { id: 'rose',   label: 'אדום',  primary: '#e11d48' },
  { id: 'amber',  label: 'כתום',  primary: '#d97706' },
];

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly MODE_KEY   = 'sf-theme-mode';
  private readonly SCHEME_KEY = 'sf-theme-scheme';

  mode   = signal<ThemeMode>  ((localStorage.getItem(this.MODE_KEY)   as ThemeMode)   ?? 'light');
  scheme = signal<ColorScheme>((localStorage.getItem(this.SCHEME_KEY) as ColorScheme) ?? 'blue');

  readonly schemes = COLOR_SCHEMES;

  constructor() {
    effect(() => {
      const m = this.mode();
      const s = this.scheme();
      document.documentElement.setAttribute('data-theme',  m);
      document.documentElement.setAttribute('data-scheme', s);
      localStorage.setItem(this.MODE_KEY,   m);
      localStorage.setItem(this.SCHEME_KEY, s);
    });
  }

  toggleMode()              { this.mode.update(m => m === 'light' ? 'dark' : 'light'); }
  setScheme(s: ColorScheme) { this.scheme.set(s); }
  isDark()                  { return this.mode() === 'dark'; }
}
