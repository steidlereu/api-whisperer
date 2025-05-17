import {APP_INITIALIZER, ApplicationConfig, importProvidersFrom, isDevMode, SecurityContext} from '@angular/core';
import { provideRouter, Router, Routes } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {MarkdownModule, MARKED_OPTIONS, MarkedOptions, MarkedRenderer, provideMarkdown} from "ngx-markdown";
import {ConfigService} from "./services/config.service";
import { provideHttpClient } from '@angular/common/http';
import { RoutingService } from './services/routing.service';

export function initializeApp(configService: ConfigService, routingService: RoutingService, router: Router) {
  return async() => {
    await configService.loadConfig();
    const dynamicRoutes = routingService.generateDynamicRoutes();

    router.resetConfig([...routes, ...dynamicRoutes]);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigService, RoutingService, Router],
      multi: true, // Ensures it runs before app starts
    },
    provideRouter(routes),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideAnimations(),
    provideHttpClient(),
    provideMarkdown({
      sanitize: SecurityContext.NONE
    }),
    importProvidersFrom(
      BsDropdownModule.forRoot(),
      MarkdownModule.forRoot()
    ),
  ]
};

