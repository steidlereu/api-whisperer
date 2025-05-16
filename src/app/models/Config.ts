import { About } from "./About";
import { Home } from "./Home";
import { Navigation } from "./Navigation";
import {Product} from "./Product";
import { Website } from "./Website";

export interface Config {
  license: string;
  website: Website;
  navigation: Navigation;
  products: Product[];
  home: Home;
  about: About;
}
