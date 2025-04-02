import {AfterViewInit, Component, QueryList, ViewChildren} from '@angular/core';
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

  @ViewChildren(CollectionComponent) children!: QueryList<CollectionComponent>;

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
    this.settingsService.updateExplorerElement(value, (name: string) => {
      const child = this.children.find(child => child.product.name === name);
      if (child) {
        child.collapse();
      } else {
        console.log(`Child with name "${name}" not found`);
      }
    });
    console.log(this.settingsService.loadSettings());
  }

}
