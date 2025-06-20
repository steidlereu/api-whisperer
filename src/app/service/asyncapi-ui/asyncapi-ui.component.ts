import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, OnDestroy } from '@angular/core';
import "@asyncapi/web-component/lib/asyncapi-web-component";

@Component({
  selector: 'app-asyncapi-ui',
  standalone: true,
  imports: [],
  templateUrl: './asyncapi-ui.component.html',
  styleUrl: './asyncapi-ui.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AsyncapiUiComponent implements OnDestroy, AfterViewInit {

  @Input({ required: true }) asyncAPI!: string | undefined;

  config = {"show": {"info": false}};
  //schema = 'http://localhost:4200/assets/coffee-fruits-demo/content/order-queue-management-asyncapi.yaml';
  css = '/assets/default.min.css';
  options = {"method":"GET","mode":"cors"}

  constructor(private element: ElementRef) {}

  ngAfterViewInit(): void {
    // Note: The AsyncApiComponent will handle its own initialization
    // Nothing to do here, the component will be initialized by the AsyncApiComponentWP
  }

  ngOnDestroy(): void {
    // Clean up any resources or subscriptions if necessary
  }

}
