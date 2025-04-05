import { Injectable } from '@angular/core';
import {Settings} from "../models/Settings";
import {ConfigService} from "./config.service";
import {ExplorerElement} from "../models/ExplorerElement";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private storageKey = 'app_settings';

  constructor(private configService: ConfigService) { }

  // Save settings to localStorage
  saveSettings(settings: Settings): void {
    localStorage.setItem(this.storageKey, JSON.stringify(settings));
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
          if (newElement.active && element.active) {
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
