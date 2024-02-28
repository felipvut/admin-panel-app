import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, MatToolbarModule,
    MatIconModule, MatButtonModule, MatSidenavModule,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'admin-panel-app';
  open: boolean = true;
  lightMode: Boolean = true;

  constructor(
    protected route: Router
  ) {

  }

  ngOnInit(): void {
    let value = localStorage.getItem("isLight")
    if(value == "true") {
      this.lightMode = true
    } else if(value == "false") {
      this.lightMode = false
    } else {
      this.lightMode = true
    }
    this.setMode(true)
  }
  
  sideBarItens: any[] = [
    {title: "Gráficos", materialIconName: "bar_chart", redirect: "/graphics"},
    {title: "Funcionários", materialIconName: "person_pin", redirect: "/workers"},
    {title: "Clientes", materialIconName: "person", redirect: "/clients"},
    {title: "Configurações", materialIconName: "settings"},
    {title: "Sair", materialIconName: "exit_to_app"}
  ]

  setMode(init: boolean = false){
    if(!init) {
      this.lightMode = !this.lightMode
    } 
    localStorage.setItem("isLight", this.lightMode.toString())
    if(!this.lightMode) {
      document.body.style.setProperty('--primary', '#101725');
      document.body.style.setProperty('--secundary', '#202837');
      document.body.style.setProperty('--terciary', '#384152');
      document.body.style.setProperty('--text-color', '#fff');
    } else {
      document.body.style.setProperty('--primary', '#fff');
      document.body.style.setProperty('--text-color', '#000');
    }
  }
}
