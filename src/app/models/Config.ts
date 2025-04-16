import { About } from "./About";
import {Product} from "./Product";
import { Website } from "./Website";

export interface Config {
  website: Website;
  products: Product[];
  about: About
}
