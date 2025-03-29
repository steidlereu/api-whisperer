import { Injectable } from '@angular/core';
import {Settings} from "../models/Settings";
import {ConfigService} from "./config.service";

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
    return settings ? JSON.parse(settings) : this.initSettings();
  }

  initSettings(): Settings {
    this.configService.getConfig().subscribe((config) => {
    });

    return {
      currentTheme: 'light',
      explorer: { elements: [] }
    };
  }

  // Update a specific setting
  updateSetting(key: keyof Settings, value: any): void {
    const settings = this.loadSettings();
    settings[key] = value;
    this.saveSettings(settings);
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
