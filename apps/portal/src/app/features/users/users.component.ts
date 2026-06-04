import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  template: `
    <div class="page-header">
      <div><h1>משתמשים</h1><p>ניהול משתמשי הפלטפורמה</p></div>
    </div>
    <p style="color:var(--sf-text-muted)">בקרוב...</p>
  `,
})
export class UsersComponent {}
