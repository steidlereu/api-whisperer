import { Inject, Injectable } from '@angular/core';
import {Settings} from "../models/Settings";
import {ConfigService} from "./config.service";
import {ExplorerElement} from "../models/ExplorerElement";
import { Subject } from 'rxjs';
import { Product } from '../models/Product';
import { Domain } from '../models/Domain';
import { Service } from '../models/Service';
import { ActivatedRoute, Router } from '@angular/router';
import { Explorer } from '../models/Explorer';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  readonly depthProduct = 1;
  readonly depthDomain = 2;
  readonly depthServices = 3;

  private storageKey = 'app_settings';
  private ttl = 60 * 60; // 1 hour in seconds
  private storageChangeSubject = new Subject<{ key: string; value: string | null }>();
  public storageChange$ = this.storageChangeSubject.asObservable();

  constructor(
    private configService: ConfigService,
    @Inject(ActivatedRoute) private route: ActivatedRoute,
    @Inject(Router) private router: Router
  ) { }

  // Save settings to localStorage
  saveSettings(settings: Settings): void {
    const settingsString = JSON.stringify(settings);
    localStorage.setItem(this.storageKey, settingsString);
    this.storageChangeSubject.next({ key: this.storageKey, value: settingsString });
  }

  // Load settings from localStorage
  loadSettings(): Settings {

    const now = new Date();
    const settings = localStorage.getItem(this.storageKey);

    if (settings) {
      const parsedSettings = JSON.parse(settings) as Settings;
      if (parsedSettings.expiry < now.getTime()) {
        this.clearSettings();
        return this.initSettings();
      }
      return parsedSettings;
    } else {
      return this.initSettings();
    }
  }

  initSettings(): Settings {
    const now = new Date();

    const settings = {
      currentTheme: 'light',
      expiry: now.getTime() + this.ttl * 1000
    } as Settings;

    return settings;
  }

  getExplorer(): Explorer {

    let elements: ExplorerElement[] = [];

    const products = this.configService.getConfig()?.products || [];

    for (const product of products) {

      const domains = product.domains || [];

      for (const domain of domains) {

        const services = domain.services || [];

        for (const service of services) {
          elements.push({
            name: product.name + '/' + domain.name + '/' + service.name,
            active: false
          });
        }

        elements.push({
          name: product.name + '/' + domain.name,
          active: false
        });
      }

      // @ts-ignore
      elements.push({
        name: product.name,
        active: false
      });
    }

    const path = this.route.snapshot.children[0].url[0].path
    const params = this.route.snapshot.children[0].params;

    const paramProduct = params['product'];
    const paramDomain = params['domain'];
    const paramService = params['service'];

    for (const element of elements) {

      if (element.name === paramProduct) {
        element.active = true;
      }
      else if (element.name === paramProduct + '/' + paramDomain) {
        element.active = true;
      }
      else if (element.name === paramProduct + '/' + paramDomain + '/' + paramService) {
        element.active = true;
      }

    }

    return {
      elements: elements
    } as Explorer;
  }

  // Update a specific setting
  updateSetting(key: keyof Settings, value: any):void {
    const settings = this.loadSettings();
    (settings as any)[key] = value;
    this.saveSettings(settings);
  }

  countExplorerElementDeep(inputString: string) {
    const regex = new RegExp("/", "g");
    const matches = inputString.match(regex);
    return matches ? matches.length + 1 : 1;
  }

  getActiveProduct(): Product | null {

    const products = this.configService.getConfig()?.products || [];

    for (const explorerElement of this.getExplorer().elements) {

      if (this.countExplorerElementDeep(explorerElement.name) === this.depthProduct) {
        if (explorerElement.active) {
          return products.find((product) => product.name === explorerElement.name) as Product;
        }
      }

    }

    return null;
  }

  getActiveDomain(product: Product): Domain | null {

    for (const explorerElement of this.getExplorer().elements) {

      if (this.countExplorerElementDeep(explorerElement.name) === this.depthDomain) {
        if (explorerElement.active) {
          return product?.domains?.find((domain) => product.name + '/' + domain.name === explorerElement.name) as Domain;
        }
      }

    }

    return null;
  }

  getActiveService(product: Product, domain: Domain): Service | null {

    for (const explorerElement of this.getExplorer().elements) {

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
