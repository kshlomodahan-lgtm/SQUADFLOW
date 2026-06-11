import { Component, OnInit, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

export interface CortexObject {
  ObjectID:    number;
  ObjectName:  string;
  Description: string;
  PosX:        number;
  PosY:        number;
  ColorHex:    string;
  fields:      CortexField[];
  expanded:    boolean;
}

export interface CortexField {
  FieldID:    number;
  ObjectID:   number;
  FieldName:  string;
  DataType:   string;
  IsRequired: boolean;
  IsKey:      boolean;
  SortOrder:  number;
}

export interface CortexConnection {
  ConnectionID: number;
  SourceID:     number;
  TargetID:     number;
  RelationType: string;
}

const DATA_TYPES = [
  { id: 'pk',       label: 'מזהה PK',  icon: '🔑' },
  { id: 'text',     label: 'טקסט',     icon: 'Aa' },
  { id: 'number',   label: 'מספר',     icon: '##' },
  { id: 'date',     label: 'תאריך',    icon: '📅' },
  { id: 'boolean',  label: 'כן/לא',    icon: '◎' },
  { id: 'email',    label: 'אימייל',   icon: '@' },
  { id: 'phone',    label: 'טלפון',    icon: '☎' },
  { id: 'money',    label: 'מטבע',     icon: '₪' },
  { id: 'image',    label: 'תמונה',    icon: '🖼' },
  { id: 'relation', label: 'קשר',      icon: '🔗' },
];

const NODE_WIDTH  = 230;
const NODE_HDR    = 56;

@Component({
  selector: 'app-cortex',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './cortex.component.html',
  styleUrl:    './cortex.component.scss',
})
export class CortexComponent implements OnInit {

  projectId = 0;
  loading   = signal(true);

  objects     = signal<CortexObject[]>([]);
  connections = signal<CortexConnection[]>([]);

  // Canvas state
  panX = 60; panY = 60; zoom = 1;

  // Drag
  dragging: CortexObject | null = null;
  dragSX = 0; dragSY = 0;
  dragNX = 0; dragNY = 0;
  isPanning = false;
  panSX = 0; panSY = 0;

  // Connect mode
  connectMode   = signal(false);
  connectSource = signal<CortexObject | null>(null);

  // Add dialog
  showAdd   = signal(false);
  addName   = '';
  addDesc   = '';
  addSaving = false;

  // Add field per node
  addingField: Record<number, boolean>  = {};
  newFName:    Record<number, string>   = {};
  newFType:    Record<number, string>   = {};
  newFKey:     Record<number, boolean>  = {};
  newFReq:     Record<number, boolean>  = {};

  readonly dataTypes = DATA_TYPES;
  readonly nodeW     = NODE_WIDTH;
  readonly nodeHdr   = NODE_HDR;

  readonly particles = Array.from({length: 30}, (_, i) => ({
    x: Math.floor(Math.random() * 1600),
    y: Math.floor(Math.random() * 900),
    d: +(Math.random() * 8).toFixed(1),
    s: Math.random() < 0.25 ? 3 : 2,
  }));

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
    this.http.get<any>(`/api/cortex/${this.projectId}`).subscribe({
      next: r => {
        const raw: any[]    = r.data.objects || [];
        const fields: any[] = r.data.fields  || [];
        const objs: CortexObject[] = raw.map(o => ({
          ...o,
          fields:   fields.filter(f => f.ObjectID === o.ObjectID),
          expanded: true,
        }));
        this.objects.set(objs);
        this.connections.set(r.data.connections || []);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  // ── Canvas pan ────────────────────────────────────────────
  onBgDown(e: MouseEvent) {
    if ((e.target as HTMLElement).closest('.cortex-node')) return;
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
      this.objects.update(v => [...v]);
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

  // ── Node drag ─────────────────────────────────────────────
  onNodeDown(e: MouseEvent, obj: CortexObject) {
    if (this.connectMode()) { e.stopPropagation(); this.clickNode(obj); return; }
    if ((e.target as HTMLElement).tagName === 'INPUT'
     || (e.target as HTMLElement).tagName === 'SELECT'
     || (e.target as HTMLElement).tagName === 'BUTTON') return;
    e.stopPropagation();
    this.dragging = obj;
    this.dragSX = e.clientX; this.dragSY = e.clientY;
    this.dragNX = obj.PosX;  this.dragNY = obj.PosY;
  }

  savePos(obj: CortexObject) {
    this.http.put(`/api/cortex/objects/${obj.ObjectID}/position`,
      { posX: Math.round(obj.PosX), posY: Math.round(obj.PosY) }).subscribe();
  }

  // ── Connect ───────────────────────────────────────────────
  toggleConnect() { this.connectMode.update(v => !v); this.connectSource.set(null); }

  clickNode(obj: CortexObject) {
    if (!this.connectMode()) return;
    const src = this.connectSource();
    if (!src) { this.connectSource.set(obj); return; }
    if (src.ObjectID === obj.ObjectID) { this.connectSource.set(null); return; }
    this.http.post<any>('/api/cortex/connections', {
      projectId: this.projectId, sourceId: src.ObjectID, targetId: obj.ObjectID, relationType: '1:N',
    }).subscribe({
      next: r => {
        if (r.success) {
          this.connections.update(v => [...v, {
            ConnectionID: r.data.connectionId,
            SourceID: src.ObjectID, TargetID: obj.ObjectID, RelationType: '1:N',
          }]);
        }
        this.connectSource.set(null); this.connectMode.set(false);
      },
      error: () => { this.connectSource.set(null); this.connectMode.set(false); }
    });
  }

  deleteConn(c: CortexConnection) {
    this.http.delete(`/api/cortex/connections/${c.ConnectionID}`).subscribe({
      next: () => this.connections.update(v => v.filter(x => x.ConnectionID !== c.ConnectionID))
    });
  }

  // ── SVG paths ─────────────────────────────────────────────
  connPath(c: CortexConnection): string {
    const s = this.objects().find(o => o.ObjectID === c.SourceID);
    const t = this.objects().find(o => o.ObjectID === c.TargetID);
    if (!s || !t) return '';
    const sCX = s.PosX + NODE_WIDTH / 2, sCY = s.PosY + NODE_HDR / 2;
    const tCX = t.PosX + NODE_WIDTH / 2, tCY = t.PosY + NODE_HDR / 2;
    const sX  = tCX > sCX ? s.PosX + NODE_WIDTH : s.PosX;
    const tX  = tCX > sCX ? t.PosX : t.PosX + NODE_WIDTH;
    const dx  = Math.abs(tX - sX) * 0.55;
    const dir = tX > sX ? 1 : -1;
    return `M ${sX},${sCY} C ${sX+dir*dx},${sCY} ${tX-dir*dx},${tCY} ${tX},${tCY}`;
  }

  connMid(c: CortexConnection): {x:number,y:number} {
    const s = this.objects().find(o => o.ObjectID === c.SourceID);
    const t = this.objects().find(o => o.ObjectID === c.TargetID);
    if (!s || !t) return {x:0,y:0};
    return { x: (s.PosX+t.PosX)/2+NODE_WIDTH/2, y: (s.PosY+t.PosY)/2+NODE_HDR/2-12 };
  }

  // ── Add Object ────────────────────────────────────────────
  openAdd() { this.addName=''; this.addDesc=''; this.showAdd.set(true); }

  saveObj() {
    if (!this.addName.trim() || this.addSaving) return;
    this.addSaving = true;
    const px = Math.max(40, -this.panX/this.zoom + 200 + Math.random()*180);
    const py = Math.max(40, -this.panY/this.zoom + 160 + Math.random()*120);
    this.http.post<any>('/api/cortex/objects', {
      projectId: this.projectId, objectName: this.addName.trim(),
      description: this.addDesc, posX: px, posY: py, colorHex: '#7c3aed',
    }).subscribe({
      next: r => {
        if (r.success) {
          this.objects.update(v => [...v, {
            ObjectID: r.data.objectId, ObjectName: this.addName.trim(),
            Description: this.addDesc, PosX: px, PosY: py,
            ColorHex: '#7c3aed', fields: [], expanded: true,
          }]);
        }
        this.addSaving = false; this.showAdd.set(false);
      },
      error: () => { this.addSaving = false; }
    });
  }

  deleteObj(obj: CortexObject) {
    this.http.delete(`/api/cortex/objects/${obj.ObjectID}`).subscribe({
      next: () => {
        this.objects.update(v => v.filter(o => o.ObjectID !== obj.ObjectID));
        this.connections.update(v => v.filter(c => c.SourceID!==obj.ObjectID && c.TargetID!==obj.ObjectID));
      }
    });
  }

  // ── Fields ────────────────────────────────────────────────
  startField(obj: CortexObject) {
    this.addingField[obj.ObjectID] = true;
    this.newFName[obj.ObjectID] = '';
    this.newFType[obj.ObjectID] = 'text';
    this.newFKey[obj.ObjectID]  = false;
    this.newFReq[obj.ObjectID]  = false;
  }

  saveField(obj: CortexObject) {
    const name = (this.newFName[obj.ObjectID] || '').trim();
    if (!name) return;
    this.http.post<any>('/api/cortex/fields', {
      objectId: obj.ObjectID, fieldName: name,
      dataType: this.newFType[obj.ObjectID] || 'text',
      isRequired: this.newFReq[obj.ObjectID] ? 1 : 0,
      isKey:      this.newFKey[obj.ObjectID] ? 1 : 0,
      sortOrder: obj.fields.length,
    }).subscribe({
      next: r => {
        if (r.success) {
          obj.fields = [...obj.fields, {
            FieldID: r.data.fieldId, ObjectID: obj.ObjectID,
            FieldName: name, DataType: this.newFType[obj.ObjectID] || 'text',
            IsRequired: !!this.newFReq[obj.ObjectID],
            IsKey:      !!this.newFKey[obj.ObjectID],
            SortOrder: obj.fields.length,
          }];
          this.objects.update(v => [...v]);
        }
        this.addingField[obj.ObjectID] = false;
      }
    });
  }

  cancelField(id: number) { this.addingField[id] = false; }

  deleteField(obj: CortexObject, f: CortexField) {
    this.http.delete(`/api/cortex/fields/${f.FieldID}`).subscribe({
      next: () => { obj.fields = obj.fields.filter(x => x.FieldID!==f.FieldID); this.objects.update(v=>[...v]); }
    });
  }

  // ── Utils ─────────────────────────────────────────────────
  dtIcon(dt: string)  { return DATA_TYPES.find(t=>t.id===dt)?.icon ?? '?'; }
  dtLabel(dt: string) { return DATA_TYPES.find(t=>t.id===dt)?.label ?? dt; }

  toggleExpand(obj: CortexObject, e: MouseEvent) {
    e.stopPropagation(); obj.expanded = !obj.expanded; this.objects.update(v=>[...v]);
  }

  get transform() { return `translate(${this.panX}px,${this.panY}px) scale(${this.zoom})`; }

  back() { this.router.navigate(['/app/projects', this.projectId]); }
}
