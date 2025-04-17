import {APP_INITIALIZER, ApplicationConfig, importProvidersFrom, isDevMode} from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpClientModule } from '@angular/common/http';
import {MarkdownModule} from "ngx-markdown";
import {ConfigService} from "./services/config.service";

export function initializeApp(configService: ConfigService) {
  return () => configService.loadConfig();
}

export function generateRoutes(configService: ConfigService) {
  return async () => {
    const dynamicRoutes = configService.getConfig();

    provideRouter(routes);
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigService],
      multi: true, // Ensures it runs before app starts
    },
    {
      provide: APP_INITIALIZER,
      useFactory: generateRoutes,
      deps: [ConfigService],
      multi: true,
    },
    provideRouter(routes), provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideAnimations(),
    importProvidersFrom(
      BsDropdownModule.forRoot(),
      HttpClientModule,
      MarkdownModule.forRoot()
    ),
  ]
};

