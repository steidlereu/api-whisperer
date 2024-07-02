import { AfterViewInit, Component, OnInit } from '@angular/core';
import SwaggerUI from 'swagger-ui';

@Component({
  selector: 'app-openapi-swagger-ui',
  standalone: true,
  imports: [],
  templateUrl: './swagger-ui.component.html',
  styleUrl: './swagger-ui.component.scss'
})
export class SwaggerUiComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    SwaggerUI({
      dom_id: '#swagger-ui',
      url: 'assets/coffee-shop.yaml',
    });
  }
}
