import { Routes } from '@angular/router';
import { OpenapiComponent } from './openapi/openapi.component';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'explore', component: OpenapiComponent },
  { path: 'about', component: AboutComponent },
];
