export interface NavigationItem {
    label: string;
    path: string;
    src?: string; // Optional
    hidden?: boolean; // Optional
    external?: boolean; // Optional
    blank?: boolean; // Optional
  }