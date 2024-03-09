import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TableComponent } from '../../components/table/table.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-workers-list',
  standalone: true,
  imports: [
    TableComponent, NzButtonModule,
    RouterModule
  ],
  templateUrl: './workers-list.component.html',
  styleUrl: './workers-list.component.scss'
})
export class WorkersListComponent {

  workersColumns: any[] = [
    {title:"Nome", column:"name"},
    {title:"Data de Nascimento", column:"due_date"},
    {title:"Cpf", column:"cpf"},
    {title:"Telefone", column:"telefone"}
  ]

  workers: any[] = [
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377"},
  ]

}
