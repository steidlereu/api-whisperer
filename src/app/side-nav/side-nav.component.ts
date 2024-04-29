import { Component } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    CollapseModule,
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  isCollapsed = false;
}
