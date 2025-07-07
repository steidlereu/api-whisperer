import {Content} from "./Content";

export interface Service {
  name: string;
  summary?: string;
  overview: boolean;
  type?: 'service' | 'library' | 'cli' | 'ui-component';
  programmingLanguages?: string[];
  technologies?: string[];
  deployment?: string;
  status?: 'stable' | 'deprecated' | 'development' | 'planned';
  contact?: string;
  repository?: string;
  tags?: string[];
  content?: Content[];
}
