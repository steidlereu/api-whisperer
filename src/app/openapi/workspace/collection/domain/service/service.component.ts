import { AfterViewInit, Component, Input } from '@angular/core';
import { Service } from '../../../../../models/Service';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    TooltipModule
  ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent implements AfterViewInit{

  @Input({ required: true }) name!: string;
  @Input({ required: true }) service!: Service;

  isActive = false;

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  toggle(): void {
    this.isActive = !this.isActive;
  }

}
