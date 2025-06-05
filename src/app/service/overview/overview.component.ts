import { Component, Input } from '@angular/core';
import { Service } from '../../models/Service';
import { CommonModule, NgIf } from "@angular/common";

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

  @Input({ required: true }) service!: Service | undefined;

  private techIconMap: Record<string, string> = {
    javascript: 'fab fa-js',
    typescript: 'fab fa-js',
    node: 'fab fa-node',
    nodejs: 'fab fa-node-js',
    python: 'fab fa-python',
    java: 'fab fa-java',
    php: 'fab fa-php',
    html: 'fab fa-html5',
    css: 'fab fa-css3-alt',
    sass: 'fab fa-sass',
    ruby: 'fas fa-gem',
    rust: 'fab fa-rust',
    swift: 'fab fa-swift',
    sql: 'fas fa-database',
    mysql: 'fas fa-database',
    postgesql: 'fas fa-database',
    bash: 'fas fa-terminal',
    shell: 'fas fa-terminal',
    lua: 'fas fa-moon',
    git: 'fab fa-git',
    gitlab: 'fab fa-gitlab',
    github: 'fab fa-github',
    bitbucket: 'fab fa-bitbucket',
    wordpress: 'fab fa-wordpress',
    magento: 'fab fa-magento',
    laravel: 'fab fa-laravel',
    symfony: 'fab fa-symfony',
    spring: 'fas fa-leaf',
    springboot: 'fas fa-leaf',
    angular: 'fab fa-angular',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    vuejs: 'fab fa-vuejs',
    docker: 'fab fa-docker',
    bootstrap: 'fab fa-bootstrap',
    google: 'fab fa-google',
    googleplay: 'fab fa-google-play',
    apple: 'fab fa-apple',
    applestore: 'fab fa-app-store',
    windwos: 'fab fa-windows',
    appstore: 'fab fa-app-store',
    paypal: 'fab fa-paypal',
    figma: 'fab fa-figma',
    digitalocean: 'fab fa-digital-ocean',
    aws: 'fab fa-aws',
    jenkis: 'fab fa-jenkins',
    shopify: 'fab fa-shopify',
    mailchimp: 'fab fa-mailchimp',
  };

  getLanguageIcon(language: string): string {
    const key = language?.toLowerCase().trim();
    return this.techIconMap[key] || 'fas fa-code';
  }

}
