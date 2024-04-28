import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    importProvidersFrom(BsDropdownModule.forRoot())
  ]
};
