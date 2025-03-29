import {Component, ViewChild} from '@angular/core';
import { YamlEditorComponent } from "./yaml-editor/yaml-editor.component";
import { WorkspaceComponent } from "./workspace/workspace.component";
import { SwaggerUiComponent } from './swagger-ui/swagger-ui.component';
import {NgIf} from "@angular/common";
import {TabDirective, TabsModule} from "ngx-bootstrap/tabs";
import {MarkdownComponent} from "ngx-markdown";

@Component({
    selector: 'app-openapi',
    standalone: true,
    templateUrl: './openapi.component.html',
    styleUrl: './openapi.component.scss',
  imports: [YamlEditorComponent, WorkspaceComponent, SwaggerUiComponent, NgIf, TabsModule, MarkdownComponent]
})
export class OpenapiComponent {

  @ViewChild(YamlEditorComponent) yamlEditor!: YamlEditorComponent;

  onSelect(data: TabDirective): void {
    setTimeout(() => {
      this.yamlEditor?.resizeEditor();
    }, 50);
  }

}
