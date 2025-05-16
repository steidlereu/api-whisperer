import { Component } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    CollapseModule,
    TooltipModule
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  isCollapsed = false;
}
