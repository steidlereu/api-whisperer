import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class StylesService {

  constructor(private configService: ConfigService) { }
  
  loadCustomStyles(): void {

    const url = this.configService.getConfig()?.website.styles || '';

    if (url) {
      const linkElement = document.createElement('link');
      linkElement.rel = 'stylesheet';
      linkElement.href = url || '';
      linkElement.type = 'text/css';
      document.head.appendChild(linkElement);
    }
  }
}
