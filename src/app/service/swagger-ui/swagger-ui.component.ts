import {Component, Input, OnChanges, SimpleChanges, ViewEncapsulation} from '@angular/core';
import SwaggerUI from 'swagger-ui';

@Component({
  selector: 'app-openapi-swagger-ui',
  standalone: true,
  imports: [],
  templateUrl: './swagger-ui.component.html',
  styleUrls: ['./swagger-ui.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SwaggerUiComponent implements OnChanges {

  @Input({ required: true }) openAPI!: string | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['openAPI'] && changes['openAPI'].currentValue) {
      this.initializeSwaggerUI(changes['openAPI'].currentValue);
    }
  }

  private initializeSwaggerUI(url: string): void {
    SwaggerUI({
      dom_id: '#swagger-ui',
      url: url,
    });
  }
}
