import { CompanyAddress } from "./CompanyAddress";

export interface About {
    companyName: string;
    companyAddress: CompanyAddress;
    companyEmail: string;
    companyPhone: string;
    companyRegistrationNumber: string;
    companyTaxId: string;
    representative: string;
    representativePosition: string;
  }