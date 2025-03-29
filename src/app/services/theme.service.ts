import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {SettingsService} from "./settings.service";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  currentTheme: string = 'light'; // Default theme is light
  themeChange: Subject<string> = new Subject<string>();

  constructor(private settingsService: SettingsService) {
    this.setTheme(this.settingsService.loadSettings().currentTheme);
  }

  toggleTheme() {
    const theme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.settingsService.updateSetting('currentTheme', theme);
    this.setTheme(theme);
  }

  setTheme(theme: string) {
    this.currentTheme = theme;
    this.themeChange.next(this.currentTheme);
    document.body.setAttribute('data-bs-theme', this.currentTheme);
  }
}
