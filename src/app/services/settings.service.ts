import { Injectable } from '@angular/core';
import {Settings} from "../models/Settings";
import {ConfigService} from "./config.service";
import {ExplorerElement} from "../models/ExplorerElement";
import { Subject, switchMap } from 'rxjs';
import { Product } from '../models/Product';
import { Domain } from '../models/Domain';
import { Service } from '../models/Service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  readonly depthProduct = 1;
  readonly depthDomain = 2;
  readonly depthServices = 3;

  private storageKey = 'app_settings';
  private storageChangeSubject = new Subject<{ key: string; value: string | null }>();
  public storageChange$ = this.storageChangeSubject.asObservable();

  constructor(
    private configService: ConfigService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  initalizeSettings(): void {

    const path = this.route.snapshot.children[0].url[0].path
    const params = this.route.snapshot.children[0].params;
    const settings = this.loadSettings();

    let isUpdate = false;

    if (params['product'] !== undefined) {
      console.log("Product: " + params['product']);
      for (const element of settings.explorer.elements) {
        if (element.name === params['product']) {
          element.active = true;
          isUpdate = true;
        } else {
          element.active = false;
        }
      }
    }

    if (params['domain'] !== undefined) {
      for (const element of settings.explorer.elements) {
        if (element.name === params['domain']) {
          element.active = true;
          isUpdate = true; 
        } else {  
          element.active = false;
        }
      }
    }

    if (params['service'] !== undefined) {
      for (const element of settings.explorer.elements) {
        if (element.name === params['service']) {
          element.active = true;
          isUpdate = true;
        } else {
          element.active = false;
        }
      }
    }

    if (isUpdate) {
      this.saveSettings(settings);
      this.router.navigate(['/' + path]);
    }
  }

  // Save settings to localStorage
  saveSettings(settings: Settings): void {
    const settingsString = JSON.stringify(settings);
    localStorage.setItem(this.storageKey, settingsString);
    this.storageChangeSubject.next({ key: this.storageKey, value: settingsString });
  }

  // Load settings from localStorage
  loadSettings(): Settings {
    const settings = localStorage.getItem(this.storageKey);
    return settings ? JSON.parse(settings) :  this.initSettings();
  }

  initSettings(): Settings {

    const settings = {
      currentTheme: 'light',
      explorer: {elements: []}
    } as Settings;

    const products = this.configService.getConfig()?.products || [];

    for (const product of products) {

      const domains = product.domains || [];

      for (const domain of domains) {

        const services = domain.services || [];

        for (const service of services) {
          settings.explorer.elements.push({
            name: product.name + '/' + domain.name + '/' + service.name,
            active: false
          });
        }

        settings.explorer.elements.push({
          name: product.name + '/' + domain.name,
          active: false
        });
      }

      // @ts-ignore
      settings.explorer.elements.push({
        name: product.name,
        active: false
      });
    }

    return settings;
  }

  // Update a specific setting
  updateSetting(key: keyof Settings, value: any):void {
    const settings = this.loadSettings();
    settings[key] = value;
    this.saveSettings(settings);
  }

  updateExplorerElement(newElement: ExplorerElement, collapse: (name: string) => void) {
    const settings = this.loadSettings();
    let elements = settings.explorer.elements;

    for (const element of elements) {
      if (element.name === newElement.name) {
        element.active = newElement.active;
      } else {
        if (this.countExplorerElementDeep(newElement.name) === this.countExplorerElementDeep(element.name)) {
          console.log("Same depth");
          console.log(element.name);
          if (newElement.active && element.active) {
            console.log("Same depth");
            console.log(element.name);
            collapse(element.name);
            element.active = false;
          }
        }
      }
    }

    settings['explorer']['elements'] = elements;
    this.saveSettings(settings);
  }

  countExplorerElementDeep(inputString: string) {
    const regex = new RegExp("/", "g");
    const matches = inputString.match(regex);
    return matches ? matches.length + 1 : 1;
  }

  getActiveProduct(): Product | null {

    const products = this.configService.getConfig()?.products || [];

    for (const explorerElement of this.loadSettings().explorer.elements) {

      if (this.countExplorerElementDeep(explorerElement.name) === this.depthProduct) {
        if (explorerElement.active) {
          return products.find((product) => product.name === explorerElement.name) as Product;
        }
      }

    }

    return null;
  }

  getActiveDomain(product: Product): Domain | null {

    for (const explorerElement of this.loadSettings().explorer.elements) {
    
      if (this.countExplorerElementDeep(explorerElement.name) === this.depthDomain) {
        if (explorerElement.active) {
          return product?.domains?.find((domain) => product.name + '/' + domain.name === explorerElement.name) as Domain;
        }
      }

    }

    return null;
  }

  getActiveService(product: Product, domain: Domain): Service | null {

    for (const explorerElement of this.loadSettings().explorer.elements) {

      if (this.countExplorerElementDeep(explorerElement.name) === this.depthServices) {
        if (explorerElement.active) {
          return domain?.services?.find((service) => product.name + '/' + domain.name + '/' + service.name === explorerElement.name) as Service;
        }
      }

    }

    return null;
  }

  // Get a specific setting
  getSetting(key: keyof Settings): any {
    const settings = this.loadSettings();
    return settings[key] ?? null;
  }

  // Clear all settings
  clearSettings(): void {
    localStorage.removeItem(this.storageKey);
  }
}
