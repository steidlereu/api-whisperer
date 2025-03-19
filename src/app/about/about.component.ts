import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  companyName = 'steuerfix GmbH';
  companyAddress = 'Musterstraße 1 80800 München';
  companyEmail = 'your.email@example.com';
  companyPhone = '+123 456 7890';
  companyRegistrationNumber = 'Your Company Registration Number';
  companyTaxId = '123456789';
  representative = 'John Doe';
  representativePosition = 'CEO';
}
