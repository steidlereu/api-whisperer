import { Component, Input } from '@angular/core';
import { Service } from '../../models/Service';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

  @Input({ required: true }) service!: Service | undefined;

}
