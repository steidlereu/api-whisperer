import {AfterViewInit, Component} from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {ConfigService} from "../../services/config.service";
import {Config} from "../../models/Config";
import {CollapseModule} from "ngx-bootstrap/collapse";
import {CollectionComponent} from "./collection/collection.component";

@Component({
  selector: 'app-openapi-workspace',
  standalone: true,
  imports: [TooltipModule, CollapseModule, CollectionComponent],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss'
})
export class WorkspaceComponent implements AfterViewInit {

  config: Config | undefined;
  isCollapsed = false;

  constructor(private configService: ConfigService) {
  }

  ngAfterViewInit(): void {
    this.configService.getConfig().subscribe((config) => {
      this.config = config;
    });
  }

}
