import { Injectable } from '@angular/core';
import {Config} from "../models/Config";
import {firstValueFrom} from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config: Config | null = null;

  constructor(private http: HttpClient) { }

  loadConfig(): Promise<void> {
    return firstValueFrom(this.http.get<Config>('/assets/config.json'))
      .then((data) => {
        this.config = data;
      })
      .catch((error) => {
        console.error('Failed to load config.json', error);
        this.config = {} as Config; // Provide a fallback
      });
  }

  getConfig(): Config | null {
    return this.config;
  }
}
