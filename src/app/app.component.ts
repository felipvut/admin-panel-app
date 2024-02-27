import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, MatToolbarModule,
    MatIconModule, MatButtonModule, MatSidenavModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'admin-panel-app';
  open: boolean = true;
  lightMode: Boolean = false;

  sideBarItens: any[] = [
    {title: "Gráficos", materialIconName: "bar_chart"},
    {title: "Funcionários", materialIconName: "person_pin"},
    {title: "Clientes", materialIconName: "person"},
    {title: "Configurações", materialIconName: "settings"},
    {title: "Sair", materialIconName: "exit_to_app"}
  ]

  setMode() {
    this.lightMode = !this.lightMode
    if(!this.lightMode) {
      document.body.style.setProperty('--primary', '#0f0f11');
      document.body.style.setProperty('--secundary', '#232125');
      document.body.style.setProperty('--terciary', '#232125');
      document.body.style.setProperty('--text-color', '#fff');
    } else {
      document.body.style.setProperty('--primary', '#fff');
      document.body.style.setProperty('--secundary', '#000');
      document.body.style.setProperty('--terciary', '#fff');
      document.body.style.setProperty('--text-color', '#000');
    }
  }
}
