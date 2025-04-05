import {AfterViewInit, Component, EventEmitter, Input, Output, QueryList, ViewChildren} from '@angular/core';
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {CollapseModule} from "ngx-bootstrap/collapse";
import {NgIf} from "@angular/common";
import {Product} from "../../../models/Product";
import {ExplorerElement} from "../../../models/ExplorerElement";
import {ConfigService} from "../../../services/config.service";
import {SettingsService} from "../../../services/settings.service";
import {DomainComponent} from "./domain/domain.component";

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [
    TooltipModule,
    CollapseModule,
    NgIf,
    DomainComponent
  ],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})
export class CollectionComponent implements AfterViewInit {

  @Input({ required: true }) name!: string;
  @Input({ required: true }) product!: Product;
  @Output() valueEmitted = new EventEmitter<ExplorerElement>();

  @ViewChildren(DomainComponent) children!: QueryList<DomainComponent>;

  isCollapsed = true;

  constructor(private settingsService: SettingsService) { }

  ngAfterViewInit(): void {
    for(const element of this.settingsService.loadSettings().explorer.elements) {
      if (element.name === this.name) {
        this.isCollapsed = !element.active; // invert for reasons to be correctly...
      }
    }
  }

  collapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.valueEmitted.emit({
      name: this.name,
      active: !this.isCollapsed // invert for reasons to be correctly...
    });
  }

  receiveValue(value: ExplorerElement) {
    console.log("Collection state:");
    console.log(value);
    this.settingsService.updateExplorerElement(value, (name: string) => {
      const child = this.children.find(child => child.name === name);
      if (child) {
        child.collapse();
      } else {
        console.log(`Child with name "${name}" not found`);
      }
    });
    console.log(this.settingsService.loadSettings());
  }

}
