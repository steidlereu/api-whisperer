import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { YamlEditorComponent } from "./yaml-editor/yaml-editor.component";
import { WorkspaceComponent } from "./workspace/workspace.component";
import { SwaggerUiComponent } from './swagger-ui/swagger-ui.component';
import {NgIf} from "@angular/common";
import {TabDirective, TabsModule} from "ngx-bootstrap/tabs";
import {MarkdownComponent} from "ngx-markdown";
import { ConfigService } from '../services/config.service'; // Adjust the path as necessary
import { SettingsService } from '../services/settings.service'; // Adjust the path as necessary

@Component({
    selector: 'app-openapi',
    standalone: true,
    templateUrl: './openapi.component.html',
    styleUrl: './openapi.component.scss',
  imports: [YamlEditorComponent, WorkspaceComponent, SwaggerUiComponent, NgIf, TabsModule, MarkdownComponent]
})
export class OpenapiComponent implements AfterViewInit {

  @ViewChild(YamlEditorComponent) yamlEditor!: YamlEditorComponent
  
  constructor(
      private configService: ConfigService,
      private settingsService: SettingsService
    ) { }
    
  ngAfterViewInit(): void {
    console.log('OpenapiComponent initialized');
    window.addEventListener('storage', (event) => {
      if (event.key === 'app_settings') {
        console.log('Der Wert von yourKey hat sich geändert:' + event.newValue);
      }
    });// Event-Listener für Änderungen im localStorage
  }

  onSelect(data: TabDirective): void {
    setTimeout(() => {
      this.yamlEditor?.resizeEditor();
    }, 50);
  }

}
