import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { StylesService } from './services/styles.service'; // Adjust the path as needed

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
  imports: [RouterOutlet, HeaderComponent, FooterComponent]
})
export class AppComponent implements OnInit {
  title = 'api-whisperer';

  constructor(private stylesService: StylesService) { }

  ngOnInit() {
    this.stylesService.loadCustomStyles();
  }
}
