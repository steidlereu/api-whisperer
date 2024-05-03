import { Component } from '@angular/core';
import { YamlEditorComponent } from "./yaml-editor/yaml-editor.component";

@Component({
    selector: 'app-openapi',
    standalone: true,
    templateUrl: './openapi.component.html',
    styleUrl: './openapi.component.scss',
    imports: [YamlEditorComponent]
})
export class OpenapiComponent {

}
