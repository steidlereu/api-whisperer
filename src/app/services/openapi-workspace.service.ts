import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import YAML from "js-yaml";
import coffeeShop from "../models/yamls/coffee-shop.yaml";

const coffeeShopApi = YAML.load(coffeeShop) as string;

@Injectable({
  providedIn: 'root'
})
export class OpenapiWorkspaceService {

  activeFile: Subject<string> = new BehaviorSubject<string>(coffeeShopApi);

  constructor() { }
}
