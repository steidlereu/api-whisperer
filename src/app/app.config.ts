import {APP_INITIALIZER, ApplicationConfig, importProvidersFrom, isDevMode} from '@angular/core';
import { provideRouter, Router, Routes } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {MarkdownModule} from "ngx-markdown";
import {ConfigService} from "./services/config.service";
import { OpenapiComponent } from './openapi/openapi.component';
import { provideHttpClient } from '@angular/common/http';

export function initializeApp(configService: ConfigService, router: Router) {
  return async() => {
    await configService.loadConfig();
    console.log('Dynamic Routes:', configService.getConfig());

    const dynamicRoutes: Routes = [
      { path: 'green', component: OpenapiComponent } // Example dynamic route
    ];
    
    router.resetConfig([...routes, ...dynamicRoutes]);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigService, Router],
      multi: true, // Ensures it runs before app starts
    },
    provideRouter(routes),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(
      BsDropdownModule.forRoot(),  
      MarkdownModule.forRoot()
    ),
  ]
};

