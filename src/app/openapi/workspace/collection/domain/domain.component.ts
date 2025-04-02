import {Component, Input} from '@angular/core';
import {Domain} from "../../../../models/Domain";

@Component({
  selector: 'app-domain',
  standalone: true,
  imports: [],
  templateUrl: './domain.component.html',
  styleUrl: './domain.component.scss'
})
export class DomainComponent {

  @Input({ required: true }) domain!: Domain;

}
