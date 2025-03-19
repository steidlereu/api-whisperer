import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
  imports: [RouterOutlet, HeaderComponent, SideNavComponent, FooterComponent]
})
export class AppComponent {
  title = 'api-whisperer';
}
