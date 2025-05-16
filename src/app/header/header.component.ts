import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { ConfigService } from '../services/config.service';
import { NavigationItem } from '../models/NavigationItem';
import { ThemeToggleComponent } from "./theme-toggle/theme-toggle.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ThemeToggleComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  title: string = this.configService.getConfig()?.website.title || 'API Whisperer';
  navigation: NavigationItem[] = this.configService.getConfig()?.navigation.main || [];
  logo: string = this.configService.getConfig()?.website.logo || '';

  constructor(private configService: ConfigService) { }

}
