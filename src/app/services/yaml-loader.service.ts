import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import * as yaml from 'js-yaml';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YamlLoaderService {

  constructor(private http: HttpClient) { }

  loadRaw(filePath: string): Promise<any> {
    return lastValueFrom(this.http.get(filePath, { responseType: 'text' }));
  }

  loadYaml(filePath: string): Promise<any> {
    return lastValueFrom(this.http.get(filePath, { responseType: 'text' }))
      .then(yamlString => yaml.load(yamlString));
  }
}
