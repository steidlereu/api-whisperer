import { FooterSection } from "./FooterSection";
import { NavigationItem } from "./NavigationItem";

export interface Navigation {
    main: NavigationItem[];
    footer: FooterSection[];
  }