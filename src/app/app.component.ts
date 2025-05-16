import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { StylesService } from './services/styles.service'; // Adjust the path as needed
import { RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ConfigService } from './services/config.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
  imports: [RouterOutlet, HeaderComponent, FooterComponent]
})
export class AppComponent implements OnInit {

  title: string = this.configService.getConfig()?.website.title || 'Welcome to API Whisperer';
  license: string = this.configService.getConfig()?.license || 'No License Provided';
  favicon: string = this.configService.getConfig()?.website?.favicon || '/favicon.ico';

  constructor(
    private titleService: Title,
    private configService: ConfigService,
    private stylesService: StylesService,
    private metaService: Meta
  ) { }

  ngOnInit() {
    this.stylesService.loadCustomStyles();
    this.titleService.setTitle(this.title);
    this.metaService.addTag({ name: 'license', content: this.license });
    this.setFavicon(this.favicon);
  }

  setFavicon(iconUrl: string): void {
    const existingLink = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (existingLink) {
      existingLink.href = iconUrl;
    } else {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = iconUrl;
      document.head.appendChild(newLink);
    }
  }
}
