import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  title: string = this.configService.getConfig()?.home.title || 'Welcome to API Whisperer';
  description: string = this.configService.getConfig()?.home.description || 'Your central hub for exploring APIs, documentation, and tools to build and integrate your applications seamlessly.';
  logo: string = this.configService.getConfig()?.home.logo || '';

  constructor(private configService: ConfigService) { }
}
