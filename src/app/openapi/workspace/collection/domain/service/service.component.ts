import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { Service } from '../../../../../models/Service';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ExplorerElement } from '../../../../../models/ExplorerElement';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../../../../../services/settings.service';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    TooltipModule,
    CommonModule
  ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent implements AfterViewInit{

  @Input({ required: true }) name!: string;
  @Input({ required: true }) service!: Service;
  @Output() valueEmitted = new EventEmitter<ExplorerElement>();

  isActive = false;

  constructor(private settingsService: SettingsService) { }

  ngAfterViewInit(): void {
    for(const element of this.settingsService.loadSettings().explorer.elements) {
      if (element.name === this.name) {
        this.isActive = element.active;
      }
    }
  }

  toggle(): void {
    this.isActive = !this.isActive;
    console.log("Service state:");
    console.log(this.isActive); 
    this.valueEmitted.emit({
      name: this.name,
      active: this.isActive
    });
  }

}
