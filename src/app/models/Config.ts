import { About } from "./About";
import { Navigation } from "./Navigation";
import {Product} from "./Product";
import { Website } from "./Website";

export interface Config {
  website: Website;
  navigation: Navigation;
  products: Product[];
  about: About;
}
