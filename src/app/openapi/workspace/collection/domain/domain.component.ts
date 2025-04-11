import {AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';
import {Domain} from "../../../../models/Domain";
import {NgIf} from "@angular/common";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {CollapseModule} from "ngx-bootstrap/collapse";
import {ExplorerElement} from "../../../../models/ExplorerElement";
import {SettingsService} from "../../../../services/settings.service";
import { ServiceComponent } from "./service/service.component";

@Component({
  selector: 'app-domain',
  standalone: true,
  imports: [
    NgIf,
    TooltipModule,
    CollapseModule,
    ServiceComponent
],
  templateUrl: './domain.component.html',
  styleUrl: './domain.component.scss'
})
export class DomainComponent implements AfterViewInit{

  @Input({ required: true }) name!: string;
  @Input({ required: true }) domain!: Domain;
  @Output() valueEmitted = new EventEmitter<ExplorerElement>();

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

}
