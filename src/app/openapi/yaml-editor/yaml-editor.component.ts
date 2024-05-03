import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as monaco from 'monaco-editor';

@Component({
  selector: 'app-yaml-editor',
  standalone: true,
  imports: [],
  templateUrl: './yaml-editor.component.html',
  styleUrl: './yaml-editor.component.scss'
})
export class YamlEditorComponent implements AfterViewInit, OnDestroy {
  @ViewChild('editorContainer') editorContainer!: ElementRef;

  editor!: monaco.editor.IStandaloneCodeEditor;

  constructor() { }

  ngAfterViewInit() {
    this.editor = monaco.editor.create(this.editorContainer.nativeElement, {
      value: '',
      language: 'yaml',
      theme: 'vs-light'
    });
  }

  ngOnDestroy() {
    this.editor.dispose();
  }

  // You can add methods for loading/saving YAML content here
}
