import { Component } from '@angular/core';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ThemeToggleComponent, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  title: string = this.configService.getConfig()?.websiteTitle || 'API Whisperer';

  constructor(private configService: ConfigService) { }

}
