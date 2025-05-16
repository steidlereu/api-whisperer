import { Injectable } from '@angular/core';
import { ActivatedRoute, Navigation, Router, Routes } from '@angular/router';
import { ConfigService } from './config.service';
import { ContentComponent } from '../content/content.component';
import { NavigationItem } from '../models/NavigationItem';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(
    private configService: ConfigService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  generateDynamicRoutes(): Routes {
    const routes: Routes = [];

    for (const route of this.configService.getConfig()?.navigation.main ?? []) {
      if (!route.external) {
        routes.push({ path: route.path, component: ContentComponent });
      }
    }

    routes.push({ path: '**', redirectTo: '/home', pathMatch: 'full' }); // Finally add - Redirect unknown routes to /home

    return routes;
  }

  getContentSourceByRoute(): NavigationItem {

    const currentPath = this.route.snapshot.children[0].url[0].path;

    for (const route of this.configService.getConfig()?.navigation.main ?? []) {
      if (route.path === currentPath) {
        return route;
      }

    }
    return {} as NavigationItem;
  }

}
