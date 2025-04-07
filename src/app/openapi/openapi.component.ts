import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
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
export class OpenapiComponent implements OnInit {

  @ViewChild(YamlEditorComponent) yamlEditor!: YamlEditorComponent
  
  constructor(
      private configService: ConfigService,
      private settingsService: SettingsService
    ) { }


  ngOnInit(): void {
    this.settingsService.storageChange$.subscribe((data) => {
      if (data.key === 'app_settings') {
        alert('Settings changed:' + data.value);
      }
    });
  }

  onSelect(data: TabDirective): void {
    setTimeout(() => {
      this.yamlEditor?.resizeEditor();
    }, 50);
  }

}
