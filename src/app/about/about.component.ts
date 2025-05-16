import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { CompanyAddress } from '../models/CompanyAddress';
import { About } from '../models/About';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  companyName: string;
  companyAddress: CompanyAddress;
  companyEmail: string;
  companyPhone: string;
  companyRegistrationNumber: string;
  companyTaxId: string;
  representative: string;
  representativePosition: string;

  constructor(private configService: ConfigService) {
    const about = this.configService.getConfig()?.about || {} as About;
    this.companyName = about?.companyName || '';
    this.companyAddress = about.companyAddress || {} as CompanyAddress;
    this.companyEmail = about.companyEmail || '';
    this.companyPhone = about.companyPhone || '';
    this.companyRegistrationNumber = about.companyRegistrationNumber || '';
    this.companyTaxId = about.companyTaxId || '';
    this.representative = about.representative || '';
    this.representativePosition = about.representativePosition || '';
  }

}