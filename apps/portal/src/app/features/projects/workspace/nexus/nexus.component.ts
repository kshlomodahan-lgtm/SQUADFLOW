import { Component, OnInit, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { NeuralNetComponent } from '../../../../shared/components/neural-net/neural-net.component';

export type SourceType = 'DB' | 'API' | 'FILE' | 'SERVICE';
export type SourceStatus = 'untested' | 'connected' | 'failed';

export interface NexusSource {
  SourceID:    number;
  SourceName:  string;
  SourceType:  SourceType;
  Host:        string;
  Port:        number | null;
  DbName:      string;
  Notes:       string;
  Status:      SourceStatus;
  PosX:        number;
  PosY:        number;
  ColorHex:    string;
}

export interface NexusMapping {
  MappingID: number;
  SourceID:  number;
  TargetID:  number;
  Label:     string;
}

const SOURCE_TYPES: { id: SourceType; label: string; icon: string; color: string; desc: string }[] = [
  { id: 'DB',      label: 'מסד נתונים', icon: 'storage',      color: '#0891b2', desc: 'SQL Server, MySQL, PostgreSQL, MongoDB' },
  { id: 'API',     label: 'REST / GraphQL API', icon: 'api',  color: '#0e7490', desc: 'חיבור ל-Endpoint חיצוני' },
  { id: 'FILE',    label: 'קובץ / Storage',  icon: 'folder',  color: '#155e75', desc: 'CSV, Excel, JSON, S3, Azure Blob' },
  { id: 'SERVICE', label: 'שירות / Queue',   icon: 'hub',     color: '#164e63', desc: 'Message Queue, Cache, Event Bus' },
];

const NODE_WIDTH = 240;
const NODE_HDR   = 60;

@Component({
  selector: 'app-nexus',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, NeuralNetComponent],
  templateUrl: './nexus.component.html',
  styleUrl:    './nexus.component.scss',
})
export class NexusComponent implements OnInit {

  projectId = 0;
  loading   = signal(true);

  sources  = signal<NexusSource[]>([]);
  mappings = signal<NexusMapping[]>([]);

  // Canvas
  panX = 60; panY = 80; zoom = 1;

  // Drag
  dragging: NexusSource | null = null;
  dragSX = 0; dragSY = 0;
  dragNX = 0; dragNY = 0;
  isPanning = false;
  panSX = 0; panSY = 0;

  // Connect mode
  connectMode   = signal(false);
  connectSource = signal<NexusSource | null>(null);

  // Add dialog
  showAdd   = signal(false);
  addStep   = signal<'type' | 'detail'>('type');
  addType   = signal<SourceType>('DB');
  addName   = '';
  addHost   = '';
  addPort   = '';
  addDb     = '';
  addNotes  = '';
  addSaving = false;
  addError  = '';

  // Test state
  testing: Record<number, boolean> = {};

  readonly sourceTypes = SOURCE_TYPES;
  readonly nodeW = NODE_WIDTH;

  constructor(
    private route:  ActivatedRoute,
    private router: Router,
    private http:   HttpClient,
  ) {}

  ngOnInit() {
    this.projectId = Number(this.route.snapshot.paramMap.get('projectId'));
    this.load();
  }

  load() {
    this.loading.set(true);
    this.http.get<any>(`/api/nexus/${this.projectId}`).subscribe({
      next: r => {
        this.sources.set(r.data.sources || []);
        this.mappings.set(r.data.mappings || []);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  // ── Pan ───────────────────────────────────────────────────
  onBgDown(e: MouseEvent) {
    if ((e.target as HTMLElement).closest('.nx-node')) return;
    this.isPanning = true;
    this.panSX = e.clientX - this.panX;
    this.panSY = e.clientY - this.panY;
  }

  @HostListener('window:mousemove', ['$event'])
  onMove(e: MouseEvent) {
    if (this.isPanning) {
      this.panX = e.clientX - this.panSX;
      this.panY = e.clientY - this.panSY;
    }
    if (this.dragging) {
      this.dragging.PosX = this.dragNX + (e.clientX - this.dragSX) / this.zoom;
      this.dragging.PosY = this.dragNY + (e.clientY - this.dragSY) / this.zoom;
      this.sources.update(v => [...v]);
    }
  }

  @HostListener('window:mouseup')
  onUp() {
    if (this.isPanning) this.isPanning = false;
    if (this.dragging) { this.savePos(this.dragging); this.dragging = null; }
  }

  onWheel(e: WheelEvent) {
    e.preventDefault();
    this.zoom = Math.min(2, Math.max(0.3, this.zoom * (e.deltaY > 0 ? 0.9 : 1.1)));
  }

  // ── Drag node ─────────────────────────────────────────────
  onNodeDown(e: MouseEvent, src: NexusSource) {
    if (this.connectMode()) { e.stopPropagation(); this.clickNode(src); return; }
    if ((e.target as HTMLElement).tagName === 'BUTTON') return;
    e.stopPropagation();
    this.dragging = src;
    this.dragSX = e.clientX; this.dragSY = e.clientY;
    this.dragNX = src.PosX;  this.dragNY = src.PosY;
  }

  savePos(src: NexusSource) {
    this.http.put(`/api/nexus/sources/${src.SourceID}/position`,
      { posX: Math.round(src.PosX), posY: Math.round(src.PosY) }).subscribe();
  }

  // ── Connect ───────────────────────────────────────────────
  toggleConnect() { this.connectMode.update(v => !v); this.connectSource.set(null); }

  clickNode(src: NexusSource) {
    if (!this.connectMode()) return;
    const from = this.connectSource();
    if (!from) { this.connectSource.set(src); return; }
    if (from.SourceID === src.SourceID) { this.connectSource.set(null); return; }
    this.http.post<any>('/api/nexus/mappings', {
      projectId: this.projectId, sourceId: from.SourceID, targetId: src.SourceID, label: '',
    }).subscribe({
      next: r => {
        if (r.success) {
          this.mappings.update(v => [...v, {
            MappingID: r.data.mappingId,
            SourceID: from.SourceID, TargetID: src.SourceID, Label: '',
          }]);
        }
        this.connectSource.set(null); this.connectMode.set(false);
      },
      error: () => { this.connectSource.set(null); this.connectMode.set(false); }
    });
  }

  deleteMapping(m: NexusMapping) {
    this.http.delete(`/api/nexus/mappings/${m.MappingID}`).subscribe({
      next: () => this.mappings.update(v => v.filter(x => x.MappingID !== m.MappingID))
    });
  }

  // ── SVG paths ─────────────────────────────────────────────
  connPath(m: NexusMapping): string {
    const s = this.sources().find(o => o.SourceID === m.SourceID);
    const t = this.sources().find(o => o.SourceID === m.TargetID);
    if (!s || !t) return '';
    const sCX = s.PosX + NODE_WIDTH / 2, sCY = s.PosY + NODE_HDR / 2;
    const tCX = t.PosX + NODE_WIDTH / 2, tCY = t.PosY + NODE_HDR / 2;
    const sX  = tCX > sCX ? s.PosX + NODE_WIDTH : s.PosX;
    const tX  = tCX > sCX ? t.PosX : t.PosX + NODE_WIDTH;
    const dx  = Math.abs(tX - sX) * 0.55;
    const dir = tX > sX ? 1 : -1;
    return `M ${sX},${sCY} C ${sX+dir*dx},${sCY} ${tX-dir*dx},${tCY} ${tX},${tCY}`;
  }

  connMid(m: NexusMapping): {x:number, y:number} {
    const s = this.sources().find(o => o.SourceID === m.SourceID);
    const t = this.sources().find(o => o.SourceID === m.TargetID);
    if (!s || !t) return {x:0,y:0};
    return { x: (s.PosX+t.PosX)/2+NODE_WIDTH/2, y: (s.PosY+t.PosY)/2+NODE_HDR/2-12 };
  }

  // ── Add dialog ────────────────────────────────────────────
  openAdd() {
    this.addStep.set('type');
    this.addType.set('DB');
    this.addName = ''; this.addHost = ''; this.addPort = '';
    this.addDb = ''; this.addNotes = ''; this.addError = '';
    this.showAdd.set(true);
  }

  selectType(t: SourceType) { this.addType.set(t); this.addStep.set('detail'); }

  backToType() { this.addStep.set('type'); this.addError = ''; }

  saveSource() {
    if (!this.addName.trim()) { this.addError = 'שם מקור חובה'; return; }
    if (this.addSaving) return;
    this.addSaving = true;
    this.addError = '';
    const cx = (-this.panX + window.innerWidth  / 2) / this.zoom;
    const cy = (-this.panY + window.innerHeight / 2) / this.zoom;
    const px = Math.max(20, cx - 120 + (Math.random() - 0.5) * 240);
    const py = Math.max(20, cy -  90 + (Math.random() - 0.5) * 180);
    const typeInfo = SOURCE_TYPES.find(t => t.id === this.addType())!;
    this.http.post<any>('/api/nexus/sources', {
      projectId: this.projectId,
      sourceName: this.addName.trim(),
      sourceType: this.addType(),
      host: this.addHost.trim(),
      port: this.addPort ? parseInt(this.addPort) : null,
      dbName: this.addDb.trim(),
      notes: this.addNotes.trim(),
      posX: px, posY: py,
      colorHex: typeInfo.color,
    }).subscribe({
      next: r => {
        this.addSaving = false;
        if (r.success) { this.showAdd.set(false); this.load(); }
        else this.addError = r.message;
      },
      error: () => { this.addSaving = false; this.addError = 'שגיאת שמירה'; }
    });
  }

  deleteSource(src: NexusSource) {
    this.http.delete(`/api/nexus/sources/${src.SourceID}`).subscribe({
      next: () => {
        this.sources.update(v => v.filter(s => s.SourceID !== src.SourceID));
        this.mappings.update(v => v.filter(m => m.SourceID !== src.SourceID && m.TargetID !== src.SourceID));
      }
    });
  }

  // ── Test connection ───────────────────────────────────────
  testConn(src: NexusSource) {
    this.testing[src.SourceID] = true;
    this.http.post<any>(`/api/nexus/sources/${src.SourceID}/test`, {}).subscribe({
      next: r => {
        this.testing[src.SourceID] = false;
        src.Status = r.success ? 'connected' : 'failed';
        this.sources.update(v => [...v]);
        this.http.put(`/api/nexus/sources/${src.SourceID}/status`, { status: src.Status }).subscribe();
      },
      error: () => {
        this.testing[src.SourceID] = false;
        src.Status = 'failed';
        this.sources.update(v => [...v]);
      }
    });
  }

  // ── Utils ─────────────────────────────────────────────────
  typeInfo(t: SourceType) { return SOURCE_TYPES.find(x => x.id === t) ?? SOURCE_TYPES[0]; }

  statusLabel(s: SourceStatus) {
    const m: Record<SourceStatus, string> = { untested: 'לא נבדק', connected: 'מחובר', failed: 'שגיאה' };
    return m[s];
  }

  get transform() { return `translate(${this.panX}px,${this.panY}px) scale(${this.zoom})`; }

  back() { this.router.navigate(['/app/projects', this.projectId]); }
}
