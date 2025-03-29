import {Service} from "./Service";

export interface Domain {
  name: string;
  description: string;
  services?: Service[];
}
