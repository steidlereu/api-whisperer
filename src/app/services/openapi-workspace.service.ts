import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenapiWorkspaceService {

  activeFile: Subject<string> = new Subject<string>()

  constructor() { 
    this.activeFile.next('Hello World Spec');
  }
}
