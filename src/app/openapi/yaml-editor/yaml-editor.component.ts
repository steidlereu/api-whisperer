import {AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges, ViewChild} from '@angular/core';
import * as monaco from 'monaco-editor';
import { ThemeService } from '../../services/theme.service';
import { OpenapiWorkspaceService } from '../../services/openapi-workspace.service';
import { ConditionalExpr } from '@angular/compiler';
import { YamlLoaderService } from '../../services/yaml-loader.service';

@Component({
  selector: 'app-openapi-yaml-editor',
  standalone: true,
  imports: [],
  templateUrl: './yaml-editor.component.html',
  styleUrl: './yaml-editor.component.scss'
})

export class YamlEditorComponent implements AfterViewInit, OnDestroy, OnChanges {

  @Input({ required: true }) openAPI!: string | undefined;

  //@Input({ required: true }) openAPI!: string | undefined;
  @ViewChild('editorContainer', { static: false }) editorContainer!: ElementRef;

  editor!: monaco.editor.IStandaloneCodeEditor;

  constructor(
    private themeService: ThemeService,
    private workspaceService: OpenapiWorkspaceService,
    private yamlLoaderService: YamlLoaderService
  ) {}

  ngAfterViewInit() {
    this.editor = monaco.editor.create(this.editorContainer.nativeElement, {
      value: '',
      language: 'yaml',
      theme: 'vs-light',
      automaticLayout: true,
      readOnly: true,
      minimap: { enabled: false },
      stickyScroll: { enabled: false },
      scrollbar: {
        vertical: 'hidden',
        horizontal: 'hidden',
        handleMouseWheel: false
      }
    });

    this.themeService.themeChange.subscribe((theme) => {
      if (theme === 'light') {
        this.editor.updateOptions({ theme: 'vs-light'});
      } else {
        this.editor.updateOptions({ theme: 'vs-dark'});
      }
    });

    /*
    this.workspaceService.activeFile.subscribe(async (content) => {

      const contentString = content as string;

      if (contentString.length > 0) {
        this.editor.setValue(content);
      }
    });
    */

    //this.workspaceService.init(this.editor); // This is only for active file-changes...

    this.editor.onDidChangeModelContent(() => {
      this.resizeEditor();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['openAPI'] && changes['openAPI'].currentValue) {
      if (this.openAPI) {
        this.yamlLoaderService.loadRaw(this.openAPI).then(data => {
          this.editor.setValue(data);
        });
      } else {
        console.error("openAPI is undefined");
      }
    }
  }

  ngOnDestroy() {
    this.editor.dispose();
  }

  // You can add methods for loading/saving YAML content here

  resizeEditor(): void {
    setTimeout(() => {
      const container = this.editorContainer?.nativeElement;
      if (!container) {
        console.error("Editor-Container nicht gefunden!");
        return;
      }

      // Berechne die benötigte Höhe anhand der Zeilen im Editor
      const lineCount = this.editor?.getModel()?.getLineCount() || 10;
      const lineHeight = this.editor?.getOption(monaco.editor.EditorOption.lineHeight) || 20;
      const padding = 20; // Zusätzlicher Puffer
      const contentHeight = lineCount * lineHeight + padding;

      // Setze die neue Höhe
      container.style.height = `${contentHeight}px`

      this.editor.layout({
        width: container.clientWidth,
        height: contentHeight
      });
    }, 200);
  }
}

