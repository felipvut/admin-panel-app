import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { AdminContentComponent } from "./admin-content/admin-content.component";
import { LoginComponent } from "./public/login/login.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        RouterOutlet, NzMenuModule,
        NzIconModule, NzLayoutModule,
        NzBreadCrumbModule, RouterModule,
        AdminContentComponent,
        LoginComponent
    ]
})

export class AppComponent {

  constructor(
    protected router: Router
  ) {}

  title = 'admin-panel-app';
  openMap: { [name: string]: boolean } = {
    sub1: true,
    sub2: false,
    sub3: false
  };

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }
}
