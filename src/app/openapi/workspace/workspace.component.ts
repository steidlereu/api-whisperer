import {AfterViewInit, Component} from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {ConfigService} from "../../services/config.service";
import {CollapseModule} from "ngx-bootstrap/collapse";
import {CollectionComponent} from "./collection/collection.component";
import {Product} from "../../models/Product";
import {SettingsService} from "../../services/settings.service";
import {ExplorerElement} from "../../models/ExplorerElement";

@Component({
  selector: 'app-openapi-workspace',
  standalone: true,
  imports: [TooltipModule, CollapseModule, CollectionComponent],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss'
})
export class WorkspaceComponent implements AfterViewInit {

  //explorer: Explorer;
  products: Product[] | [] | undefined;

  constructor(
    private configService: ConfigService,
    private settingsService: SettingsService
  ) {
    this.products = this.configService.getConfig()?.products;
  }

  ngAfterViewInit(): void { }

  receiveValue(value: ExplorerElement) {
    console.log("Collection state:");
    console.log(value);
  }

}
