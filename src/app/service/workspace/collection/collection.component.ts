import {AfterViewInit, Component, EventEmitter, Input, Output, QueryList, ViewChildren} from '@angular/core';
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {CollapseModule} from "ngx-bootstrap/collapse";
import {NgIf} from "@angular/common";
import {Product} from "../../../models/Product";
import {ExplorerElement} from "../../../models/ExplorerElement";
import {ConfigService} from "../../../services/config.service";
import {SettingsService} from "../../../services/settings.service";
import {DomainComponent} from "./domain/domain.component";
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [
    TooltipModule,
    CollapseModule,
    NgIf,
    DomainComponent,
    RouterLink
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

  constructor(
    private settingsService: SettingsService,
    private router: Router,
  ) { }

  ngAfterViewInit(): void {
    for(const element of this.settingsService.getExplorer().elements) {

      if (element.name === this.name) {
        this.isCollapsed = !element.active; // invert for reasons to be correctly...
      }
    }
  }

  collapse(navigate: boolean): void {
    this.isCollapsed = !this.isCollapsed;

    if (this.isCollapsed && navigate) {
      this.router.navigate(['/explore']);
    }

    this.valueEmitted.emit({
      name: this.name,
      active: !this.isCollapsed // invert for reasons to be correctly...
    });
  }

  receiveValue(value: ExplorerElement) {

    if (!value.active) {
      this.router.navigate(['/explore/' + this.name]);
    }

    for (const child of this.children) {

      if (!child.isCollapsed && child.name !== value.name) {
        child.closeAll();
      }
    }
  }

}
