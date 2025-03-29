import {Domain} from "./Domain";

export interface Product {
  name: string;
  description?: string;
  domains?: Domain[];
}
