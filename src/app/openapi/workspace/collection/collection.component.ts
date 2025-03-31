import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {CollapseModule} from "ngx-bootstrap/collapse";
import {NgIf} from "@angular/common";
import {Product} from "../../../models/Product";
import {ExplorerElement} from "../../../models/ExplorerElement";

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [
    TooltipModule,
    CollapseModule,
    NgIf
  ],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})
export class CollectionComponent {

  @Input({ required: true }) product!: Product;
  @Output() valueEmitted = new EventEmitter<ExplorerElement>();

  isCollapsed = true;

  collapse() {
    this.isCollapsed = !this.isCollapsed;
    this.valueEmitted.emit({
      name: this.product.name,
      active: !this.isCollapsed // invert for reasons to be correctly...
    });
  }

}
