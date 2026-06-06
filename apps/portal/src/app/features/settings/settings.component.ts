import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from '@progress/kendo-angular-menu';
import { SwitchModule } from '@progress/kendo-angular-inputs';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { NotificationService, NotificationModule } from '@progress/kendo-angular-notification';
import { IconsModule } from '@progress/kendo-angular-icons';
import { SVGIcon, paletteIcon, gearIcon, passwordIcon, bellIcon, buildingsIcon, walletIcon } from '@progress/kendo-svg-icons';
import { ThemeService, COLOR_SCHEMES, ColorScheme } from '../../core/services/theme.service';
import { AuthService } from '../../core/services/auth.service';

interface SettingGroup {
  id:    string;
  text:  string;
  icon:  SVGIcon;
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, MenuModule, SwitchModule, ButtonModule, IndicatorsModule, NotificationModule, IconsModule],
  providers: [NotificationService],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  schemes     = COLOR_SCHEMES;
  saving      = signal(false);
  isAdmin     = signal(false);
  activeGroup = signal('theme');

  readonly groups: SettingGroup[] = [
    { id: 'theme',         text: 'מראה ועיצוב',  icon: paletteIcon    },
    { id: 'general',       text: 'כללי',          icon: gearIcon       },
    { id: 'security',      text: 'אבטחה',         icon: passwordIcon   },
    { id: 'notifications', text: 'התראות',        icon: bellIcon       },
    { id: 'organization',  text: 'ארגון',         icon: buildingsIcon  },
    { id: 'billing',       text: 'חיוב ומנוי',   icon: walletIcon     },
  ];

  constructor(
    public theme: ThemeService,
    private auth: AuthService,
    private notif: NotificationService,
  ) {
    this.isAdmin.set((this.auth.user()?.roleId ?? 3) <= 2);
  }

  selectGroup(id: string) { this.activeGroup.set(id); }

  selectScheme(id: ColorScheme) { this.theme.setScheme(id); }

  toggleDark(val: boolean) { if (val !== this.theme.isDark()) this.theme.toggleMode(); }

  saveUser() {
    this.saving.set(true);
    this.theme.saveUserTheme().subscribe({
      next: () => {
        this.saving.set(false);
        this.notif.show({ content: 'ההעדפה האישית נשמרה', type: { style: 'success', icon: true }, closable: true, animation: { type: 'slide', duration: 300 }, position: { horizontal: 'center', vertical: 'top' } });
      },
      error: () => {
        this.saving.set(false);
        this.notif.show({ content: 'שגיאה בשמירה', type: { style: 'error', icon: true }, closable: true, animation: { type: 'slide', duration: 300 }, position: { horizontal: 'center', vertical: 'top' } });
      },
    });
  }

  saveOrg() {
    this.saving.set(true);
    this.theme.saveOrgTheme().subscribe({
      next: () => {
        this.saving.set(false);
        this.notif.show({ content: 'ברירת המחדל לארגון עודכנה', type: { style: 'success', icon: true }, closable: true, animation: { type: 'slide', duration: 300 }, position: { horizontal: 'center', vertical: 'top' } });
      },
      error: () => {
        this.saving.set(false);
        this.notif.show({ content: 'שגיאה בשמירה', type: { style: 'error', icon: true }, closable: true, animation: { type: 'slide', duration: 300 }, position: { horizontal: 'center', vertical: 'top' } });
      },
    });
  }
}
