import { Routes } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'explore/:product', component: ServiceComponent },
  { path: 'explore/:product/:domain', component: ServiceComponent },
  { path: 'explore/:product/:domain/:service', component: ServiceComponent },
  { path: 'explore', component: ServiceComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect empty path to /home
];
