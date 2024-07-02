import { Component } from '@angular/core';
import { YamlEditorComponent } from "./yaml-editor/yaml-editor.component";
import { WorkspaceComponent } from "./workspace/workspace.component";
import { SwaggerUiComponent } from './swagger-ui/swagger-ui.component';

@Component({
    selector: 'app-openapi',
    standalone: true,
    templateUrl: './openapi.component.html',
    styleUrl: './openapi.component.scss',
    imports: [YamlEditorComponent, WorkspaceComponent, SwaggerUiComponent]
})
export class OpenapiComponent {

}
