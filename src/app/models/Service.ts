import {Content} from "./Content";

export interface Service {
  name: string;
  summary?: string;
  type?: 'service' | 'library' | 'cli' | 'ui-component';
  programmingLanguages?: string[];
  technologies?: string[];
  status?: 'active' | 'deprecated' | 'development' | 'planned';
  owner?: string;
  contact?: string;
  repository?: string;
  tags?: string[];
  content?: Content[];
}
