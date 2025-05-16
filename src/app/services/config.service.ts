import { Injectable } from '@angular/core';
import {Config} from "../models/Config";
import {firstValueFrom} from "rxjs";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private configUrl: string;
  private config: Config | null = null;

  constructor(private http: HttpClient) {
    this.configUrl = environment.configUrl;
  }

  loadConfig(): Promise<void> {
    return firstValueFrom(this.http.get<Config>(this.configUrl))
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
