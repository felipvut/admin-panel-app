import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-admin-content',
  standalone: true,
  imports: [
    RouterOutlet, NzMenuModule,
    NzLayoutModule,
    NzBreadCrumbModule, RouterModule
  ],
  templateUrl: './admin-content.component.html',
  styleUrl: './admin-content.component.scss'
})
export class AdminContentComponent implements OnInit{

  token: any = ''

  ngOnInit(): void {
    this.token = localStorage.getItem('infinity-token')
    setTimeout(() => {
      let classes: any = document.getElementsByClassName("ant-menu-title-content")
      for( let x of classes) {
        if(x.innerText == 'Clientes') {
          x.outerHTML = '<span class="ant-menu-title-content ng-star-inserted"><i class="fa-solid fa-user-tie"></i><span style="margin-left: 10px;">Clientes</span></span>'
        }
        if(x.innerText == 'Funcionários') {
          x.outerHTML = '<span class="ant-menu-title-content ng-star-inserted"><i class="fa-solid fa-user"></i><span style="margin-left: 10px;">Funcionários</span></span>'
        }
        if(x.innerText == 'Ordens de serviço') {
          x.outerHTML = '<span class="ant-menu-title-content ng-star-inserted"><i class="fa-solid fa-list-check"></i><span style="margin-left: 10px;">Ordens de serviço</span></span>'
        }
      }
    },1)
  }

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
