import { OpenApiItem } from "./OpenApiItem";

export interface OpenApiCollection {
  name: string;
  description: string;
  items: OpenApiItem[];
}