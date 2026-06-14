import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../projects.component';

interface WorkspaceArea {
  id:          string;
  name:        string;
  nameHe:      string;
  desc:        string;
  icon:        string;
  color:       string;
  glow:        string;
  ready:       boolean;
  route?:      string;
}

const AREAS: WorkspaceArea[] = [
  {
    id: 'connectors', name: 'CONNECTORS', nameHe: 'חיבורי פרויקט',
    desc: 'הגדרת חיבורי DB, API, AI ושירותים חיצוניים לפרויקט',
    icon: 'cable', color: '#0891b2', glow: 'rgba(8,145,178,.25)',
    ready: true,
  },
  {
    id: 'cortex', name: 'CORTEX', nameHe: 'מודלי נתונים',
    desc: 'הגדרת Objects, Fields, Validations ו-Locale Rules',
    icon: 'hub', color: '#7c3aed', glow: 'rgba(124,58,237,.25)',
    ready: true,
  },
  {
    id: 'nexus', name: 'NEXUS', nameHe: 'מקורות מידע',
    desc: 'ERD ויזואלי — טבלאות מ-Connectors מחוברים',
    icon: 'account_tree', color: '#0e7490', glow: 'rgba(14,116,144,.25)',
    ready: true,
  },
  {
    id: 'studio', name: 'STUDIO', nameHe: 'מחולל מסכים',
    desc: 'בניית מסכים עם AI + סוכן FRONT + סטנדרטים',
    icon: 'design_services', color: '#0D47FF', glow: 'rgba(13,71,255,.25)',
    ready: true,
  },
  {
    id: 'axon', name: 'AXON', nameHe: 'Backend API',
    desc: 'Routes, Stored Procedures, Auth ו-Middleware',
    icon: 'api', color: '#059669', glow: 'rgba(5,150,105,.25)',
    ready: true,
  },
  {
    id: 'membrane', name: 'MEMBRANE', nameHe: 'סביבת לקוח',
    desc: 'מסך לוגין, מיתוג, תמה וסביבת לקוח',
    icon: 'open_in_browser', color: '#d97706', glow: 'rgba(217,119,6,.25)',
    ready: false,
  },
  {
    id: 'agents', name: 'AI TEAM', nameHe: 'צוות AI',
    desc: 'הגדרת סוכנים, תפקידים ותצורת הצוות לפרויקט',
    icon: 'smart_toy', color: '#e11d48', glow: 'rgba(225,29,72,.25)',
    ready: false,
  },
];

@Component({
  selector: 'app-workspace',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './workspace.component.html',
  styleUrl:    './workspace.component.scss',
})
export class WorkspaceComponent implements OnInit {

  project      = signal<Project | null>(null);
  loading      = signal(true);
  starting     = signal(false);
  startMsg     = signal('');
  runError     = signal('');
  showPathInput = signal(false);
  pathInput    = '';
  areas        = AREAS;

  private projectId = 0;

  constructor(
    private route:  ActivatedRoute,
    private router: Router,
    private http:   HttpClient,
  ) {}

  ngOnInit() {
    this.projectId = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get<any>(`/api/projects/${this.projectId}`).subscribe({
      next:  r  => { this.project.set(r.data); this.loading.set(false); },
      error: () => this.router.navigate(['/app/projects']),
    });
  }

  // LocalPath stored per-developer in localStorage (not in DB)
  private get localStorageKey() { return `sf_localpath_${this.projectId}`; }

  get savedLocalPath(): string {
    return localStorage.getItem(this.localStorageKey) || '';
  }

  saveLocalPath() {
    if (this.pathInput.trim()) {
      localStorage.setItem(this.localStorageKey, this.pathInput.trim());
      this.showPathInput.set(false);
      this.launchProject(this.pathInput.trim());
    }
  }

  hasRun = computed(() => {
    const p = this.project();
    return !!(p?.GithubUrl || p?.DevUrl);
  });

  runLabel = computed(() => {
    if (this.starting()) return this.startMsg() || 'מפעיל...';
    return 'הפעל';
  });

  runIcon = computed(() => this.starting() ? 'hourglass_empty' : 'play_circle');

  runApp() {
    if (this.starting()) return;
    this.runError.set('');

    const localPath = this.savedLocalPath;
    if (localPath) {
      this.launchProject(localPath);
    } else {
      // Ask the developer once where the project lives on their machine
      this.pathInput = '';
      this.showPathInput.set(true);
    }
  }

  async launchProject(localPath: string) {
    this.starting.set(true);
    this.startMsg.set('מאתר פרויקט...');
    this.showPathInput.set(false);

    this.http.post<any>(`/api/projects/${this.projectId}/run`, { localPath }).subscribe({
      next: async r => {
        const { url, alreadyRunning } = r.data;

        if (alreadyRunning) {
          this.starting.set(false);
          window.open(url, '_blank');
          return;
        }

        // Poll until the app is ready (max ~60s)
        this.startMsg.set('מריץ פרויקט...');
        for (let i = 0; i < 30; i++) {
          await new Promise(res => setTimeout(res, 2000));
          try {
            const ping = await this.http.get<any>(`/api/projects/${this.projectId}/ping`).toPromise();
            if (ping?.data?.running) break;
          } catch {}
        }

        this.starting.set(false);
        this.startMsg.set('');
        window.open(url, '_blank');
      },
      error: err => {
        this.starting.set(false);
        this.startMsg.set('');
        this.runError.set(err.error?.message ?? 'שגיאה בהפעלת הפרויקט');
      },
    });
  }

  openArea(area: WorkspaceArea) {
    const id = this.route.snapshot.paramMap.get('id');
    if (area.id === 'connectors') this.router.navigate(['/app/ws-connectors', id]);
    if (area.id === 'cortex')     this.router.navigate(['/app/cortex',        id]);
    if (area.id === 'nexus')      this.router.navigate(['/app/nexus',         id]);
    if (area.id === 'axon')       this.router.navigate(['/app/axon',          id]);
    if (area.id === 'studio')     this.router.navigate(['/app/studio',        id]);
  }

  back() { this.router.navigate(['/app/projects']); }

  statusLabel(s: string) {
    const m: Record<string,string> = { draft:'טיוטה', active:'פעיל', completed:'הושלם', archived:'בארכיון' };
    return m[s] ?? s;
  }
}
