import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { RoutingService } from '../services/routing.service';
import { NavigationItem } from '../models/NavigationItem';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

  contentSource: NavigationItem = this.routingService.getContentSourceByRoute();

  constructor(private routingService: RoutingService) {}

}
