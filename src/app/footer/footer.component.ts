import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  copyright: string = this.configService.getConfig()?.website.copyright || '2023 API Whisperer. All rights reserved.';

  constructor(private configService: ConfigService) { }

}
