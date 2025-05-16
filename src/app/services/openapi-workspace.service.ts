import {ElementRef, Injectable} from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import * as yaml from 'js-yaml';
import * as monaco from 'monaco-editor';
import { YamlLoaderService } from './yaml-loader.service';

@Injectable({
  providedIn: 'root'
})
export class OpenapiWorkspaceService {

  activeFile: Subject<string> = new Subject<string>();

  constructor(private yamlLoaderService: YamlLoaderService) {
    this.activeFile.subscribe(async (content) => {
      console.log(content);
      yaml.load(content)
    });
  }

  init(editor: monaco.editor.IStandaloneCodeEditor) {

    this.yamlLoaderService.loadRaw('assets/coffee-shop.yaml')
    .then(data => {
      this.activeFile.next(data);
      editor.setValue(data);
    });

    editor.onDidChangeModelContent((event) => {
      this.activeFile.next(editor.getValue());
    });
  }
}
