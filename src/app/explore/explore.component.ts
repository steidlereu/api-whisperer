import { Component, OnInit } from '@angular/core';
import { WorkspaceComponent } from "../service/workspace/workspace.component";
import { Product } from '../models/Product';
import { ConfigService } from '../services/config.service';
import { CommonModule } from '@angular/common';
import { Domain } from '../models/Domain';
import { Service } from '../models/Service';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Content } from '../models/Content';
import * as semver from 'semver';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [WorkspaceComponent, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent implements OnInit {

  products: Product[] | [] | undefined;

  flatCatalog: { product: Product; domain: Domain; service: Service; count: number }[] = [];

  constructor(
    private configService: ConfigService,
  ) {
    this.products = this.configService.getConfig()?.products;
  }

  ngOnInit(): void {
    this.flattenCatalog();
  }

  private flattenCatalog(): void {
    let counter = 1;
    this.products?.forEach(product => {
      product.domains?.forEach(domain => {
        domain.services?.forEach(service => {
          this.flatCatalog.push({ product, domain, service, count: counter++ });
        });
      });
    });
  }

  transformContact(contact: string): string {
    const match = contact.match(/^(.*)\s<(.+)>$/);
    if (!match) return contact;

    const name = match[1];
    const email = match[2];

    return `<a href="mailto:${email}">${name}</a>`;
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

}
