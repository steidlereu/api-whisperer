import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { YamlEditorComponent } from "./yaml-editor/yaml-editor.component";
import { WorkspaceComponent } from "./workspace/workspace.component";
import { SwaggerUiComponent } from './swagger-ui/swagger-ui.component';
import {NgIf} from "@angular/common";
import {TabDirective, TabsModule} from "ngx-bootstrap/tabs";
import {MarkdownComponent, MarkdownService} from "ngx-markdown";
import { SettingsService } from '../services/settings.service'; // Adjust the path as necessary
import { Product } from '../models/Product';
import { Domain } from '../models/Domain';
import { Service } from '../models/Service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Content } from '../models/Content';
import * as semver from 'semver';
import { ActivatedRoute } from '@angular/router';
import { Parser } from 'marked';

@Component({
    selector: 'app-openapi',
    standalone: true,
    templateUrl: './openapi.component.html',
    styleUrls: ['./openapi.component.scss'],
    imports: [YamlEditorComponent, WorkspaceComponent, SwaggerUiComponent, NgIf, TabsModule, MarkdownComponent, BsDropdownModule]
})
export class OpenapiComponent implements OnInit {

  @ViewChild(YamlEditorComponent) yamlEditor!: YamlEditorComponent

  activeProduct: Product | null = null;
  activeDomain: Domain | null = null;
  activeService: Service | null = null;
  activeServiceContent: Content | null = null;

  constructor(
      private settingsService: SettingsService,
      private cdr: ChangeDetectorRef,
      private route: ActivatedRoute,
      private markdownService: MarkdownService
    ) { }

  ngOnInit(): void {

    this.highlightHeadings();

    // Inital load
    this.loadActiveElements();
    this.cdr.detectChanges();

    this.route.params.subscribe(params => {
      this.loadActiveElements();
    });
  }

  loadActiveElements() {
    this.activeProduct = this.settingsService.getActiveProduct();

    if (this.activeProduct !== null) {
      this.activeDomain = this.settingsService.getActiveDomain(this.activeProduct);
      if (this.activeDomain !== null) {
        this.activeService = this.settingsService.getActiveService(this.activeProduct, this.activeDomain);
        this.activeServiceContent = this.sortServiceContent(this.activeService?.content)[0];
      } else {
        this.activeService = null;
        this.activeServiceContent = null;
      }
    } else {
      this.activeDomain = null;
    }
  }

  highlightHeadings() {
    this.markdownService.renderer.heading = ({ tokens, depth }) => {
      const text = Parser.parseInline(tokens);
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
      return '<h' + depth + ' id="' + escapedText + '">' + text + '</h' + depth + '>';
    };
  }

  sortServiceContent(content: Content[] | undefined): Content[] {
    return (content ?? []).sort((a, b) => {
      // Sortiere nach preview (false zuerst)
      if (a.preview !== b.preview) {
        return a.preview ? 1 : -1;
      }

      // Sortiere nach semantischer Version (neueste zuerst)
      return semver.compare(b.version, a.version);
    });
  }

  onSelect(data: TabDirective): void {
    setTimeout(() => {
      this.yamlEditor?.resizeEditor();
    }, 50);
  }

  onDropdownChange(serviceContent: Content): void {
    this.activeServiceContent = serviceContent;
  }

}
