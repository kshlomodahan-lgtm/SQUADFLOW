import { ApplicationConfig, provideBrowserGlobalErrorListeners, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';
import { authInterceptor } from './core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimations(),   // נדרש ל-Kendo Angular
    { provide: LOCALE_ID, useValue: 'he' },
    providePrimeNG({
      theme: {
        preset: Aura,
        options: { darkModeSelector: false, cssLayer: { name: 'primeng', order: 'tailwind-base, primeng, tailwind-utilities' } }
      }
    }),
  ]
};
