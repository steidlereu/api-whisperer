import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as monaco from 'monaco-editor';
import { ThemeService } from '../../services/theme.service';
import { OpenapiWorkspaceService } from '../../services/openapi-workspace.service';

@Component({
  selector: 'app-openapi-yaml-editor',
  standalone: true,
  imports: [],
  templateUrl: './yaml-editor.component.html',
  styleUrl: './yaml-editor.component.scss'
})
export class YamlEditorComponent implements AfterViewInit, OnDestroy {
  @ViewChild('editorContainer') editorContainer!: ElementRef;

  editor!: monaco.editor.IStandaloneCodeEditor;

  constructor(
    private themeService: ThemeService,
    private workspaceService: OpenapiWorkspaceService
  ) {}

  ngAfterViewInit() {
    this.editor = monaco.editor.create(this.editorContainer.nativeElement, {
      value: '',
      language: 'yaml',
      theme: 'vs-light',
      automaticLayout: true
    });

    this.themeService.themeChange.subscribe((theme) => {
      if (theme === 'light') {
        this.editor.updateOptions({ theme: 'vs-light'});
      } else {
        this.editor.updateOptions({ theme: 'vs-dark'});
      }
    });

    this.workspaceService.activeFile.subscribe((content) => {
      this.editor.setValue('blaa');
    });

  }

  ngOnDestroy() {
    this.editor.dispose();
  }

  // You can add methods for loading/saving YAML content here
}
