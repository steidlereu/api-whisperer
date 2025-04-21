import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { Config } from '../models/Config';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor() { }

  generateDynamicRoutes(config: Config): Routes {
    const routes: Routes = [];

    for (const route of config.navigation.main) {
    }

    return routes;
  }
}
