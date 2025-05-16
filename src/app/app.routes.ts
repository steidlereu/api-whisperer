import { Routes } from '@angular/router';
import { OpenapiComponent } from './openapi/openapi.component';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'explore/:product', component: OpenapiComponent },
  { path: 'explore/:product/:domain', component: OpenapiComponent },
  { path: 'explore/:product/:domain/:service', component: OpenapiComponent },
  { path: 'explore', component: OpenapiComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect empty path to /home
];