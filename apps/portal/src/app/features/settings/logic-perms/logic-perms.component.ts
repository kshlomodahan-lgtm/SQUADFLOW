import { Component, Input, Output, EventEmitter, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { NotificationService, NotificationModule } from '@progress/kendo-angular-notification';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface PermCode {
  PermCodeID: number; PermCode: string; PermName: string; Scope: string; SourceType: string;
}

interface Assignment {
  AssignmentID: number; PermCodeID: number; PermCode: string; PermName: string;
  Scope: string; SourceType: string; EntityType: string; EntityID: number;
  EntityName: string; Actions: string; IsGrant: boolean; IsActive: boolean;
}

interface EntityLink {
  LinkID: number; OwnerType: string; OwnerID: number;
  LinkedType: string; LinkedID: number; LinkedName: string;
}

interface AssocTab {
  id: string; label: string; icon: string;
  linkedType: string | null;
  apiPath: string | null;
  idField: string | null; nameField: string | null; codeField: string | null;
}

export interface AllSection {
  id: string; label: string; icon: string;
  linkedType: string; idField: string; nameField: string; codeField: string | null;
  items: any[];
}

interface PermChange {
  permCodeId: number;
  action: 'ADD' | 'REMOVE';
  assignmentId?: number;
  perm?: PermCode;
}

interface LinkChange {
  action: 'ADD' | 'REMOVE';
  linkedType: string;
  linkedId: number;
  linkedName: string;
  linkId?: number;
}

interface GrantChange {
  assignmentId: number;
  isGrant: boolean;
}

const ALL_TAB: AssocTab = {
  id: 'all', label: 'הצג הכל', icon: 'pi-list',
  linkedType: 'ALL', apiPath: null, idField: null, nameField: null, codeField: null,
};

const ASSOC_TABS: Record<string, AssocTab[]> = {
  PROFILE: [
    ALL_TAB,
    { id: 'perm',          label: 'הרשאות',    icon: 'pi-shield',      linkedType: null,            apiPath: null,                  idField: null,             nameField: null,          codeField: null },
    { id: 'group',         label: 'קבוצות',     icon: 'pi-users',       linkedType: 'GROUP',         apiPath: '/api/groups',         idField: 'GroupID',        nameField: 'GroupName',   codeField: 'GroupCode' },
    { id: 'content-group', label: "קב׳ תוכן",  icon: 'pi-folder-open', linkedType: 'CONTENT_GROUP', apiPath: '/api/content-groups', idField: 'ContentGroupID', nameField: 'GroupName',   codeField: 'GroupCode' },
  ],
  GROUP: [
    ALL_TAB,
    { id: 'perm',          label: 'הרשאות',    icon: 'pi-shield',      linkedType: null,            apiPath: null,                  idField: null,             nameField: null,          codeField: null },
    { id: 'profile',       label: 'פרופילים',   icon: 'pi-id-card',     linkedType: 'PROFILE',       apiPath: '/api/profiles',       idField: 'ProfileID',      nameField: 'ProfileName', codeField: 'ProfileCode' },
    { id: 'content-group', label: "קב׳ תוכן",  icon: 'pi-folder-open', linkedType: 'CONTENT_GROUP', apiPath: '/api/content-groups', idField: 'ContentGroupID', nameField: 'GroupName',   codeField: 'GroupCode' },
  ],
  USER: [
    ALL_TAB,
    { id: 'perm',    label: 'הרשאות',  icon: 'pi-shield',  linkedType: null,      apiPath: null,            idField: null,        nameField: null,          codeField: null },
    { id: 'profile', label: 'פרופילים', icon: 'pi-id-card', linkedType: 'PROFILE', apiPath: '/api/profiles', idField: 'ProfileID', nameField: 'ProfileName', codeField: 'ProfileCode' },
    { id: 'group',   label: 'קבוצות',  icon: 'pi-users',   linkedType: 'GROUP',   apiPath: '/api/groups',   idField: 'GroupID',   nameField: 'GroupName',   codeField: 'GroupCode' },
  ],
  CONTENT_GROUP: [
    { id: 'perm', label: 'הרשאות', icon: 'pi-shield', linkedType: null, apiPath: null, idField: null, nameField: null, codeField: null },
  ],
};

@Component({
  selector: 'app-logic-perms',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, DialogModule, IndicatorsModule, NotificationModule],
  providers: [NotificationService],
  templateUrl: './logic-perms.component.html',
  styleUrl:    './logic-perms.component.scss',
})
export class LogicPermsComponent implements OnInit {
  @Input() entityType: string = '';
  @Input() entityId:   number = 0;
  @Input() entityName: string = '';
  @Output() closed = new EventEmitter<void>();

  // ── UI state ──────────────────────────────────────────────────────────────
  loading          = signal(true);
  saving           = signal(false);
  loadingItems     = signal(false);
  searchText       = signal('');
  selectedTab      = signal('all');
  assignedSearch   = signal('');
  showConfirmClose = signal(false);

  // ── Server data ───────────────────────────────────────────────────────────
  allLogicPerms  = signal<PermCode[]>([]);
  allAssignments = signal<Assignment[]>([]);
  entityLinks    = signal<EntityLink[]>([]);
  availableItems = signal<any[]>([]);
  allSections    = signal<AllSection[]>([]);

  // ── Pending local changes (staged until שמור is clicked) ─────────────────
  localPermChanges  = signal<PermChange[]>([]);
  localLinkChanges  = signal<LinkChange[]>([]);
  localGrantChanges = signal<GrantChange[]>([]);
  isDirty = signal(false);

  private itemsCache = new Map<string, any[]>();

  // ── Navigation ────────────────────────────────────────────────────────────
  get tabs(): AssocTab[] { return ASSOC_TABS[this.entityType] ?? [ASSOC_TABS['CONTENT_GROUP'][0]]; }
  get currentTab(): AssocTab | undefined { return this.tabs.find(t => t.id === this.selectedTab()); }

  get dialogTitle(): string {
    const label = ({ PROFILE: 'פרופיל', GROUP: 'קבוצה', CONTENT_GROUP: 'קבוצת תוכן', USER: 'משתמש' } as any)[this.entityType] ?? this.entityType;
    return `שיוך הרשאות — ${this.entityName} (${label})`;
  }

  // ── Server snapshot for this entity ──────────────────────────────────────
  entityAssignments = computed(() =>
    this.allAssignments().filter(a => a.EntityType === this.entityType && a.EntityID === this.entityId)
  );

  // ── Effective state: local overrides server ───────────────────────────────
  isAssigned(permCodeId: number): boolean {
    const change = [...this.localPermChanges()].reverse().find(c => c.permCodeId === permCodeId);
    if (change) return change.action === 'ADD';
    return this.entityAssignments().some(a => a.PermCodeID === permCodeId);
  }

  getAssignment(permCodeId: number): Assignment | undefined {
    return this.entityAssignments().find(a => a.PermCodeID === permCodeId);
  }

  getEffectiveGrant(a: Assignment): boolean {
    const change = this.localGrantChanges().find(c => c.assignmentId === a.AssignmentID);
    return change ? change.isGrant : a.IsGrant;
  }

  isLinkedBy(linkedType: string, linkedId: number): boolean {
    const change = [...this.localLinkChanges()].reverse()
      .find(c => c.linkedType === linkedType && c.linkedId === linkedId);
    if (change) return change.action === 'ADD';
    return this.entityLinks().some(l => l.LinkedType === linkedType && l.LinkedID === linkedId);
  }

  isLinked(item: any): boolean {
    const linkedType = this.currentTab?.linkedType;
    if (!linkedType) return false;
    return this.isLinkedBy(linkedType, this.itemId(item));
  }

  // ── allAssigned: merges server + local pending changes ────────────────────
  allAssigned = computed(() => {
    // Server perms minus locally removed (with grant overrides)
    const serverPerms = this.entityAssignments()
      .filter(a => {
        const ch = [...this.localPermChanges()].reverse().find(c => c.permCodeId === a.PermCodeID);
        return !ch || ch.action !== 'REMOVE';
      })
      .map(a => ({
        id: a.AssignmentID, linkedType: 'PERM', name: a.PermName,
        isGrant: this.getEffectiveGrant(a), icon: 'pi-shield', raw: a as any,
      }));

    // Locally added perms (not yet in server)
    const localPerms = this.localPermChanges()
      .filter(c => c.action === 'ADD' && c.perm)
      .map(c => ({
        id: -(c.permCodeId + 100000), linkedType: 'PERM', name: c.perm!.PermName,
        isGrant: true, icon: 'pi-shield',
        raw: { _isLocal: true, _permCodeId: c.permCodeId } as any,
      }));

    // Server links minus locally removed
    const serverLinks = this.entityLinks()
      .filter(l => {
        const ch = [...this.localLinkChanges()].reverse()
          .find(c => c.linkedType === l.LinkedType && c.linkedId === l.LinkedID);
        return !ch || ch.action !== 'REMOVE';
      })
      .map(l => {
        const tab = this.tabs.find(t => t.linkedType === l.LinkedType);
        return { id: l.LinkID, linkedType: l.LinkedType, name: l.LinkedName,
                 isGrant: true, icon: tab?.icon ?? 'pi-link', raw: l as any };
      });

    // Locally added links (not yet in server)
    const localLinks = this.localLinkChanges()
      .filter(c => c.action === 'ADD')
      .map((c, i) => {
        const tab = this.tabs.find(t => t.linkedType === c.linkedType);
        return {
          id: -(i + 1) * 10000, linkedType: c.linkedType, name: c.linkedName,
          isGrant: true, icon: tab?.icon ?? 'pi-link',
          raw: { _isLocal: true, _linkedId: c.linkedId, _linkedType: c.linkedType } as any,
        };
      });

    return [...serverPerms, ...localPerms, ...serverLinks, ...localLinks];
  });

  // ── Filtered views ────────────────────────────────────────────────────────
  allSectionItemCount = computed(() => this.allSections().reduce((sum, s) => sum + s.items.length, 0));

  filteredPerms = computed(() => {
    const q = this.searchText().toLowerCase().trim();
    return this.allLogicPerms().filter(p =>
      !q || p.PermName.toLowerCase().includes(q) || p.PermCode.toLowerCase().includes(q)
    );
  });

  filteredItems = computed(() => {
    const q = this.searchText().toLowerCase().trim();
    const tab = this.currentTab;
    if (!tab?.idField) return [];
    return this.availableItems().filter(item => {
      if (!q) return true;
      const name = (item[tab.nameField!] || '').toLowerCase();
      const code = tab.codeField ? (item[tab.codeField] || '').toLowerCase() : '';
      return name.includes(q) || code.includes(q);
    });
  });

  filteredAssigned = computed(() => {
    const q = this.assignedSearch().toLowerCase().trim();
    const all = this.allAssigned();
    return q ? all.filter(item => item.name.toLowerCase().includes(q)) : all;
  });

  tabCount(tab: AssocTab): number {
    if (tab.id === 'all') return this.allAssigned().length;
    if (!tab.linkedType)  return this.allAssigned().filter(a => a.linkedType === 'PERM').length;
    return this.allAssigned().filter(a => a.linkedType === tab.linkedType).length;
  }

  filteredSectionItems(section: AllSection): any[] {
    const q = this.searchText().toLowerCase().trim();
    if (!q) return section.items;
    return section.items.filter(item => {
      const name = (item[section.nameField] || '').toLowerCase();
      const code = section.codeField ? (item[section.codeField] || '').toLowerCase() : '';
      return name.includes(q) || code.includes(q);
    });
  }

  entityPermCount(linkedType: string, linkedId: number): number {
    return this.allAssignments().filter(a => a.EntityType === linkedType && a.EntityID === linkedId).length;
  }

  sectionItemId(s: AllSection, item: any):   number { return item[s.idField]   ?? 0; }
  sectionItemName(s: AllSection, item: any): string { return item[s.nameField]  ?? ''; }
  sectionItemCode(s: AllSection, item: any): string { return s.codeField ? (item[s.codeField] ?? '') : ''; }

  sectionIsChecked(s: AllSection, item: any): boolean {
    if (s.linkedType === 'PERM') return this.isAssigned(item.PermCodeID);
    return this.isLinkedBy(s.linkedType, this.sectionItemId(s, item));
  }
  sectionIsDisabled(_s: AllSection, _item: any): boolean { return this.saving(); }
  sectionToggle(s: AllSection, item: any) {
    if (s.linkedType === 'PERM') this.togglePerm(item as PermCode);
    else this.toggleLinkBy(s.linkedType, this.sectionItemId(s, item), this.sectionItemName(s, item));
  }

  itemId(item: any):   number { const f = this.currentTab?.idField;   return f ? (item[f] ?? 0) : 0; }
  itemName(item: any): string { const f = this.currentTab?.nameField; return f ? (item[f] ?? '') : ''; }
  itemCode(item: any): string { const f = this.currentTab?.codeField; return f ? (item[f] ?? '') : ''; }

  constructor(private http: HttpClient, private notif: NotificationService) {}

  ngOnInit() { this.loadAll(); }

  loadAll() {
    this.loading.set(true);
    forkJoin({
      perms:       this.http.get<any>('/api/permission-codes'),
      assignments: this.http.get<any>('/api/perm-assignments'),
      links:       this.http.get<any>(`/api/entity-links?ownerType=${this.entityType}&ownerId=${this.entityId}`),
    }).subscribe({
      next: ({ perms, assignments, links }) => {
        this.allLogicPerms.set((perms.data ?? []).filter((p: any) => p.SourceType === 'MANUAL' && p.IsActive !== false));
        this.allAssignments.set((assignments.data ?? []).filter((a: any) => a.SourceType === 'MANUAL'));
        this.entityLinks.set(links.data ?? []);
        this.loading.set(false);
        this.initAllTab();
      },
      error: () => { this.loading.set(false); this.notify('שגיאה בטעינה', 'error'); },
    });
  }

  private initAllTab() {
    const nonPermTabs = this.tabs.filter(t => t.id !== 'all' && t.linkedType !== null && t.apiPath !== null);

    const buildSections = () => {
      const permSection: AllSection = {
        id: 'perm', label: 'הרשאות', icon: 'pi-shield', linkedType: 'PERM',
        idField: 'PermCodeID', nameField: 'PermName', codeField: 'PermCode',
        items: this.allLogicPerms(),
      };
      const entitySections = nonPermTabs
        .filter(t => t.idField && t.nameField && t.linkedType)
        .map(t => ({
          id: t.id, label: t.label, icon: t.icon,
          linkedType: t.linkedType as string,
          idField:    t.idField as string,
          nameField:  t.nameField as string,
          codeField:  t.codeField,
          items: this.itemsCache.get(t.id) ?? [],
        }));
      this.allSections.set([permSection, ...entitySections]);
    };

    buildSections(); // show perm section immediately, no spinner

    if (nonPermTabs.length === 0) return;

    const requests: Record<string, any> = {};
    nonPermTabs.forEach(t => {
      requests[t.id] = this.http.get<any>(t.apiPath!).pipe(catchError(() => of({ data: [] })));
    });
    forkJoin(requests).subscribe(results => {
      nonPermTabs.forEach(t => { this.itemsCache.set(t.id, (results[t.id] as any)?.data ?? []); });
      buildSections();
    });
  }

  selectTab(tabId: string) {
    this.selectedTab.set(tabId);
    this.searchText.set('');
    if (tabId === 'all') { this.initAllTab(); return; }

    const tab = this.tabs.find(t => t.id === tabId);
    if (!tab?.apiPath) return;

    if (this.itemsCache.has(tabId)) { this.availableItems.set(this.itemsCache.get(tabId)!); return; }

    this.loadingItems.set(true);
    this.http.get<any>(tab.apiPath).subscribe({
      next: r => {
        const items = r.data ?? [];
        this.itemsCache.set(tabId, items);
        this.availableItems.set(items);
        this.loadingItems.set(false);
      },
      error: () => this.loadingItems.set(false),
    });
  }

  // ── Local-only toggles — no API calls; changes staged until שמור ──────────
  togglePerm(perm: PermCode) {
    if (this.saving()) return;
    if (this.isAssigned(perm.PermCodeID)) {
      const existing = this.getAssignment(perm.PermCodeID);
      this.localPermChanges.update(cs => {
        const filtered = cs.filter(c => !(c.permCodeId === perm.PermCodeID && c.action === 'ADD'));
        if (existing) return [...filtered, { permCodeId: perm.PermCodeID, action: 'REMOVE', assignmentId: existing.AssignmentID }];
        return filtered;
      });
    } else {
      this.localPermChanges.update(cs => {
        const filtered = cs.filter(c => !(c.permCodeId === perm.PermCodeID && c.action === 'REMOVE'));
        return [...filtered, { permCodeId: perm.PermCodeID, action: 'ADD', perm }];
      });
    }
    this.isDirty.set(true);
  }

  setGrant(a: Assignment, isGrant: boolean) {
    if (this.saving() || this.getEffectiveGrant(a) === isGrant) return;
    this.localGrantChanges.update(cs => {
      const filtered = cs.filter(c => c.assignmentId !== a.AssignmentID);
      return [...filtered, { assignmentId: a.AssignmentID, isGrant }];
    });
    this.isDirty.set(true);
  }

  toggleLink(item: any) {
    const tab = this.currentTab;
    if (!tab?.linkedType) return;
    this.toggleLinkBy(tab.linkedType, this.itemId(item), this.itemName(item));
  }

  toggleLinkBy(linkedType: string, linkedId: number, linkedName: string) {
    if (this.saving()) return;
    if (this.isLinkedBy(linkedType, linkedId)) {
      const existing = this.entityLinks().find(l => l.LinkedType === linkedType && l.LinkedID === linkedId);
      this.localLinkChanges.update(cs => {
        const filtered = cs.filter(c => !(c.linkedType === linkedType && c.linkedId === linkedId && c.action === 'ADD'));
        if (existing) return [...filtered, { action: 'REMOVE', linkedType, linkedId, linkedName, linkId: existing.LinkID }];
        return filtered;
      });
    } else {
      this.localLinkChanges.update(cs => {
        const filtered = cs.filter(c => !(c.linkedType === linkedType && c.linkedId === linkedId && c.action === 'REMOVE'));
        return [...filtered, { action: 'ADD', linkedType, linkedId, linkedName }];
      });
    }
    this.isDirty.set(true);
  }

  removeAssignedItem(item: any) {
    if (this.saving()) return;
    if (item.linkedType === 'PERM') {
      if (item.raw?._isLocal) {
        this.localPermChanges.update(cs =>
          cs.filter(c => !(c.permCodeId === item.raw._permCodeId && c.action === 'ADD'))
        );
      } else {
        const a = item.raw as Assignment;
        this.localPermChanges.update(cs => {
          const filtered = cs.filter(c => c.permCodeId !== a.PermCodeID);
          return [...filtered, { permCodeId: a.PermCodeID, action: 'REMOVE', assignmentId: item.id }];
        });
      }
    } else {
      if (item.raw?._isLocal) {
        this.localLinkChanges.update(cs =>
          cs.filter(c => !(c.linkedType === item.raw._linkedType && c.linkedId === item.raw._linkedId && c.action === 'ADD'))
        );
      } else {
        const l = item.raw as EntityLink;
        this.localLinkChanges.update(cs => {
          const filtered = cs.filter(c => !(c.linkedType === l.LinkedType && c.linkedId === l.LinkedID));
          return [...filtered, { action: 'REMOVE', linkedType: l.LinkedType, linkedId: l.LinkedID, linkedName: l.LinkedName, linkId: item.id }];
        });
      }
    }
    this.isDirty.set(true);
  }

  // ── Save: batch all pending changes to API ────────────────────────────────
  save() {
    if (!this.isDirty()) { this.closed.emit(); return; }
    this.saving.set(true);

    const ops: Observable<any>[] = [];

    this.localPermChanges().forEach(c => {
      if (c.action === 'REMOVE' && c.assignmentId) {
        ops.push(this.http.delete<any>(`/api/perm-assignments/${c.assignmentId}`).pipe(catchError(() => of(null))));
      } else if (c.action === 'ADD' && c.perm) {
        ops.push(this.http.post<any>('/api/perm-assignments', {
          permCodeId: c.permCodeId, entityType: this.entityType,
          entityId: this.entityId, entityName: this.entityName, isGrant: true, actions: '',
        }).pipe(catchError(() => of(null))));
      }
    });

    this.localGrantChanges().forEach(c => {
      const a = this.entityAssignments().find(x => x.AssignmentID === c.assignmentId);
      ops.push(this.http.put<any>(`/api/perm-assignments/${c.assignmentId}`, {
        isGrant: c.isGrant, isActive: true, actions: a?.Actions ?? '',
      }).pipe(catchError(() => of(null))));
    });

    this.localLinkChanges().forEach(c => {
      if (c.action === 'REMOVE' && c.linkId) {
        ops.push(this.http.delete<any>(`/api/entity-links/${c.linkId}`).pipe(catchError(() => of(null))));
      } else if (c.action === 'ADD') {
        ops.push(this.http.post<any>('/api/entity-links', {
          ownerType: this.entityType, ownerId: this.entityId,
          linkedType: c.linkedType, linkedId: c.linkedId, linkedName: c.linkedName,
        }).pipe(catchError(() => of(null))));
      }
    });

    if (ops.length === 0) { this.saving.set(false); this.isDirty.set(false); this.closed.emit(); return; }

    forkJoin(ops).subscribe({
      next: () => {
        this.saving.set(false); this.isDirty.set(false);
        this.notify('השינויים נשמרו בהצלחה', 'success');
        this.closed.emit();
      },
      error: () => { this.saving.set(false); this.notify('שגיאה בשמירה', 'error'); },
    });
  }

  // ── Close: warn if unsaved changes exist ──────────────────────────────────
  tryClose() {
    if (this.isDirty()) { this.showConfirmClose.set(true); } else { this.closed.emit(); }
  }

  discardAndClose() { this.showConfirmClose.set(false); this.closed.emit(); }
  cancelClose()     { this.showConfirmClose.set(false); }

  private notify(msg: string, style: 'success' | 'error') {
    this.notif.show({
      content: msg, closable: true,
      type: { style, icon: true },
      animation: { type: 'slide', duration: 300 },
      position: { horizontal: 'center', vertical: 'top' },
    });
  }
}
