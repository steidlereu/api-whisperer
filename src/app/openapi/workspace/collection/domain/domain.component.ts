import {AfterViewInit, Component, EventEmitter, Input, Output, QueryList, ViewChildren} from '@angular/core';
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

  @ViewChildren(ServiceComponent) children!: QueryList<ServiceComponent>;

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
    console.log("Domain state:");
    console.log(value);
    this.settingsService.updateExplorerElement(value, (name: string) => {
      const child = this.children.find(child => child.name === name);
      console.log('trggered');
      console.log(child?.name);
      if (child) {
        console.log(`Child with name "${child.name}" found`);
        child.toggle();
      } else {
        console.log(`Child with name "${name}" not found`);
      }
    });
    console.log(this.settingsService.loadSettings());
  }

}
