import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  template: `
    <div class="page-header">
      <div><h1>הגדרות</h1><p>הגדרות מערכת</p></div>
    </div>
    <p style="color:var(--sf-text-muted)">בקרוב...</p>
  `,
})
export class SettingsComponent {}
