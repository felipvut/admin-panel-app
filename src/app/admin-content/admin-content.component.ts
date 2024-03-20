import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-admin-content',
  standalone: true,
  imports: [
    RouterOutlet, NzMenuModule,
    NzIconModule, NzLayoutModule,
    NzBreadCrumbModule, RouterModule
  ],
  templateUrl: './admin-content.component.html',
  styleUrl: './admin-content.component.scss'
})
export class AdminContentComponent {

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
