import { Component, OnInit, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { NeuralNetComponent } from '../../../../shared/components/neural-net/neural-net.component';

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
  Format:     string;
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

const DATA_TYPES: { id: string; label: string; icon: string; formatPlaceholder?: string }[] = [
  { id: 'pk',       label: 'מזהה PK',        icon: '🔑' },
  { id: 'text',     label: 'טקסט',           icon: 'Aa' },
  { id: 'number',   label: 'מספר',           icon: '##', formatPlaceholder: 'לדוגמה: 10.2 | 1,000 | 00.00' },
  { id: 'date',     label: 'תאריך',          icon: '📅', formatPlaceholder: 'לדוגמה: DD/MM/YYYY | YYYY-MM-DD | MM/DD/YYYY' },
  { id: 'datetime', label: 'תאריך + שעה',    icon: '🕐', formatPlaceholder: 'לדוגמה: DD/MM/YYYY HH:mm' },
  { id: 'boolean',  label: 'כן/לא',          icon: '◎' },
  { id: 'email',    label: 'אימייל',         icon: '@' },
  { id: 'phone',    label: 'טלפון',          icon: '☎', formatPlaceholder: 'לדוגמה: 05X-XXXXXXX | +972-5X-XXXXXXX' },
  { id: 'money',    label: 'מטבע',           icon: '₪', formatPlaceholder: 'לדוגמה: ₪#,##0.00 | $#,##0.00' },
  { id: 'percent',  label: 'אחוז',           icon: '%', formatPlaceholder: 'לדוגמה: 0.0% | 0%' },
  { id: 'image',    label: 'תמונה',          icon: '🖼' },
  { id: 'relation', label: 'קשר',            icon: '🔗' },
  { id: 'json',     label: 'JSON',           icon: '{}' },
];

const NODE_WIDTH  = 230;
const NODE_HDR    = 56;

@Component({
  selector: 'app-cortex',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, NeuralNetComponent],
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
  newFFormat:  Record<number, string>   = {};
  newFKey:     Record<number, boolean>  = {};
  newFReq:     Record<number, boolean>  = {};

  readonly dataTypes = DATA_TYPES;
  readonly nodeW     = NODE_WIDTH;
  readonly nodeHdr   = NODE_HDR;

  readonly particles = Array.from({length: 55}, () => ({
    x: Math.floor(Math.random() * 1800),
    y: Math.floor(Math.random() * 1000),
    d: +(Math.random() * 10).toFixed(1),
    s: Math.random() < 0.2 ? 4 : Math.random() < 0.5 ? 3 : 2,
  }));

  // Ghost neural background nodes
  readonly bgNodes = Array.from({length: 14}, () => ({
    x: Math.floor(Math.random() * 1600 + 100),
    y: Math.floor(Math.random() * 860 + 60),
    r: +(Math.random() * 5 + 3).toFixed(1),
    d: +(Math.random() * 5).toFixed(1),
  }));

  // Ghost connections between bg nodes
  readonly bgConns: {x1:number,y1:number,x2:number,y2:number,d:number}[] = (() => {
    const nodes = Array.from({length: 14}, () => ({
      x: Math.floor(Math.random() * 1600 + 100),
      y: Math.floor(Math.random() * 860 + 60),
    }));
    const conns: {x1:number,y1:number,x2:number,y2:number,d:number}[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 340) {
          conns.push({ x1: nodes[i].x, y1: nodes[i].y, x2: nodes[j].x, y2: nodes[j].y, d: +(Math.random()*3).toFixed(1) });
        }
      }
    }
    return conns;
  })();

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
    // מרכז המשטח הנראה + פיזור קטן
    const cx = (-this.panX + window.innerWidth  / 2) / this.zoom;
    const cy = (-this.panY + window.innerHeight / 2) / this.zoom;
    const px = Math.max(20, cx - 115 + (Math.random() - 0.5) * 220);
    const py = Math.max(20, cy -  80 + (Math.random() - 0.5) * 160);
    this.http.post<any>('/api/cortex/objects', {
      projectId: this.projectId, objectName: this.addName.trim(),
      description: this.addDesc, posX: px, posY: py, colorHex: '#7c3aed',
    }).subscribe({
      next: r => {
        this.addSaving = false;
        this.showAdd.set(false);
        if (r.success) this.load();
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
    this.newFName[obj.ObjectID]   = '';
    this.newFType[obj.ObjectID]   = 'text';
    this.newFFormat[obj.ObjectID] = '';
    this.newFKey[obj.ObjectID]    = false;
    this.newFReq[obj.ObjectID]    = false;
  }

  saveField(obj: CortexObject) {
    const name = (this.newFName[obj.ObjectID] || '').trim();
    if (!name) return;
    this.http.post<any>('/api/cortex/fields', {
      objectId:   obj.ObjectID,
      fieldName:  name,
      dataType:   this.newFType[obj.ObjectID] || 'text',
      format:     this.newFFormat[obj.ObjectID]?.trim() || null,
      isRequired: this.newFReq[obj.ObjectID] ? 1 : 0,
      isKey:      this.newFKey[obj.ObjectID] ? 1 : 0,
      sortOrder:  obj.fields.length,
    }).subscribe({
      next: r => {
        if (r.success) {
          obj.fields = [...obj.fields, {
            FieldID:    r.data.fieldId,
            ObjectID:   obj.ObjectID,
            FieldName:  name,
            DataType:   this.newFType[obj.ObjectID] || 'text',
            Format:     this.newFFormat[obj.ObjectID]?.trim() || '',
            IsRequired: !!this.newFReq[obj.ObjectID],
            IsKey:      !!this.newFKey[obj.ObjectID],
            SortOrder:  obj.fields.length,
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
      next: () => {
        obj.fields = obj.fields.filter(x => x.FieldID !== f.FieldID);
        this.reindexFields(obj);
        this.objects.update(v => [...v]);
      }
    });
  }

  moveField(obj: CortexObject, f: CortexField, dir: 'up' | 'down') {
    const idx = obj.fields.indexOf(f);
    const swapIdx = dir === 'up' ? idx - 1 : idx + 1;
    if (swapIdx < 0 || swapIdx >= obj.fields.length) return;
    // Swap locally
    [obj.fields[idx], obj.fields[swapIdx]] = [obj.fields[swapIdx], obj.fields[idx]];
    obj.fields[idx].SortOrder     = idx;
    obj.fields[swapIdx].SortOrder = swapIdx;
    this.objects.update(v => [...v]);
    // Persist
    this.http.put(`/api/cortex/fields/${f.FieldID}/order`,
      { objectId: obj.ObjectID, direction: dir }).subscribe();
  }

  private reindexFields(obj: CortexObject) {
    obj.fields.forEach((f, i) => f.SortOrder = i);
  }

  // ── Utils ─────────────────────────────────────────────────
  dtIcon(dt: string)         { return DATA_TYPES.find(t=>t.id===dt)?.icon ?? '?'; }
  dtLabel(dt: string)        { return DATA_TYPES.find(t=>t.id===dt)?.label ?? dt; }
  dtHasFormat(dt: string)    { return !!DATA_TYPES.find(t=>t.id===dt)?.formatPlaceholder; }
  dtFormatHint(dt: string)   { return DATA_TYPES.find(t=>t.id===dt)?.formatPlaceholder ?? ''; }

  toggleExpand(obj: CortexObject, e: MouseEvent) {
    e.stopPropagation(); obj.expanded = !obj.expanded; this.objects.update(v=>[...v]);
  }

  get transform() { return `translate(${this.panX}px,${this.panY}px) scale(${this.zoom})`; }

  back() { this.router.navigate(['/app/projects', this.projectId]); }
}
