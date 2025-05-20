import {AfterViewInit, Component, QueryList, ViewChildren} from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {ConfigService} from "../../services/config.service";
import {CollapseModule} from "ngx-bootstrap/collapse";
import {CollectionComponent} from "./collection/collection.component";
import {Product} from "../../models/Product";
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
  ) {
    this.products = this.configService.getConfig()?.products;
  }

  ngAfterViewInit(): void { }

  receiveValue(value: ExplorerElement) {

    for (const child of this.children) {

      if (!child.isCollapsed && child.name !== value.name) {
        child.isCollapsed = true;
      }
    }
  }

}
