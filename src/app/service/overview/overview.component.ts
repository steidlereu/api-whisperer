import { Component, Input } from '@angular/core';
import { Service } from '../../models/Service';
import { CommonModule, NgIf } from "@angular/common";

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

  @Input({ required: true }) service!: Service | undefined;

}
