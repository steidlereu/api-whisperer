import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  currentTheme: string = 'light'; // Default theme is light

  themeChange: Subject<string> = new Subject<string>();

  constructor() { }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.themeChange.next(this.currentTheme);
    document.body.setAttribute('data-bs-theme', this.currentTheme);
  }
}
