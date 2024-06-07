import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import YAML from "js-yaml";
import { YamlLoaderService } from './yaml-loader.service';

@Injectable({
  providedIn: 'root'
})
export class OpenapiWorkspaceService {

  activeFile: Subject<string> = new Subject<string>();

  constructor(private yamlLoaderService: YamlLoaderService) {  
    this.yamlLoaderService.loadYaml('assets/coffee-shop.yaml')
    .then(data => {
      this.activeFile.next(data);
    })
  }

  init() {
    this.yamlLoaderService.loadYaml('assets/coffee-shop.yaml')
    .then(data => {
      console.log('blaa');
      console.log(data as string);
      this.activeFile.next(data);
    })
  }
}
