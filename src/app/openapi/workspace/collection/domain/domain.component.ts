import {AfterViewInit, Component, EventEmitter, Input, Output, QueryList, ViewChildren} from '@angular/core';
import {Domain} from "../../../../models/Domain";
import {NgIf} from "@angular/common";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {CollapseModule} from "ngx-bootstrap/collapse";
import {ExplorerElement} from "../../../../models/ExplorerElement";
import {SettingsService} from "../../../../services/settings.service";
import { ServiceComponent } from "./service/service.component";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-domain',
  standalone: true,
  imports: [
    NgIf,
    TooltipModule,
    CollapseModule,
    ServiceComponent,
    RouterLink
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

    if (!this.isCollapsed && navigate) { // invert for reasons to be correctly...
      this.router.navigate(['/explore/' + this.name]);
    }

    this.valueEmitted.emit({
      name: this.name,
      active: !this.isCollapsed // invert for reasons to be correctly...
    });
  }

  closeAll(): void {
    this.isCollapsed = true;
    for (const child of this.children) {
      child.isActive = false;
    }
  }


  receiveValue(value: ExplorerElement) { 

    if (!value.active) {
      this.router.navigate(['/explore/' + this.name]);
    }

    for (const child of this.children) {

      if (child.isActive && child.name !== value.name) {
        child.isActive = false;
      }
    }
  }

}
