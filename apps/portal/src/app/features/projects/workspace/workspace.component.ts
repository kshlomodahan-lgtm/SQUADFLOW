import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    id: 'cortex', name: 'CORTEX', nameHe: 'מודלי נתונים',
    desc: 'הגדרת Objects, Fields, Validations ו-Locale Rules',
    icon: 'hub', color: '#7c3aed', glow: 'rgba(124,58,237,.25)',
    ready: false,
  },
  {
    id: 'nexus', name: 'NEXUS', nameHe: 'מקורות מידע',
    desc: 'ERD ויזואלי, חיבורי DB, APIs ו-Data Sources',
    icon: 'account_tree', color: '#0891b2', glow: 'rgba(8,145,178,.25)',
    ready: false,
  },
  {
    id: 'studio', name: 'STUDIO', nameHe: 'מחולל מסכים',
    desc: 'בניית מסכים עם AI + סוכן FRONT + סטנדרטים',
    icon: 'design_services', color: '#0D47FF', glow: 'rgba(13,71,255,.25)',
    ready: false,
  },
  {
    id: 'axon', name: 'AXON', nameHe: 'Backend API',
    desc: 'Routes, Stored Procedures, Auth ו-Middleware',
    icon: 'api', color: '#059669', glow: 'rgba(5,150,105,.25)',
    ready: false,
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
  imports: [CommonModule, MatIconModule],
  templateUrl: './workspace.component.html',
  styleUrl:    './workspace.component.scss',
})
export class WorkspaceComponent implements OnInit {

  project  = signal<Project | null>(null);
  loading  = signal(true);
  areas    = AREAS;

  constructor(
    private route:  ActivatedRoute,
    private router: Router,
    private http:   HttpClient,
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get<any>(`/api/projects/${id}`).subscribe({
      next:  r  => { this.project.set(r.data); this.loading.set(false); },
      error: () => this.router.navigate(['/app/projects']),
    });
  }

  back() { this.router.navigate(['/app/projects']); }

  statusLabel(s: string) {
    const m: Record<string,string> = { draft:'טיוטה', active:'פעיל', completed:'הושלם', archived:'בארכיון' };
    return m[s] ?? s;
  }
}
