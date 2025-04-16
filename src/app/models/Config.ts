import { About } from "./About";
import {Product} from "./Product";

export interface Config {
  websiteTitle: string;
  websiteCopyright: string;
  products: Product[];
  about: About
}
