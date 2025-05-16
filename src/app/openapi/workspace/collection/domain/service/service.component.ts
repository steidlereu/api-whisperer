import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { Service } from '../../../../../models/Service';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ExplorerElement } from '../../../../../models/ExplorerElement';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../../../../../services/settings.service';
import { Router } from '@angular/router';

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

  constructor(
    private settingsService: SettingsService,
    private router: Router,
  ) { }

  ngAfterViewInit(): void {
    for(const element of this.settingsService.getExplorer().elements) {
      if (element.name === this.name) {
        this.isActive = element.active; // invert for reasons to be correctly...
      }
    }
  }

  toggle(): void {
    this.isActive = !this.isActive;

    if (this.isActive) { // invert for reasons to be correctly...
      this.router.navigate(['/explore/' + this.name]);
    }

    this.valueEmitted.emit({
      name: this.name,
      active: this.isActive
    });
  }

}
