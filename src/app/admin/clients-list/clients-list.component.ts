import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component'
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-clients-list',
  standalone: true,
  imports: [
    TableComponent, NzButtonModule,
    RouterModule
  ],
  templateUrl: './clients-list.component.html',
  styleUrl: './clients-list.component.scss'
})
export class ClientsListComponent {
  clientsColumns: any[] = [
    {title:"Nome", column:"name"},
    {title:"Data de Nascimento", column:"due_date"},
    {title:"Cpf", column:"cpf"},
    {title:"Telefone", column:"telefone"},
    {title: "Termino do contrato", column: "end_contract"}
  ]

  clients: any[] = [
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377", end_contract: "09/03/2025"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377", end_contract: "09/03/2025"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377", end_contract: "09/03/2025"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377", end_contract: "09/03/2025"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377", end_contract: "09/03/2025"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377", end_contract: "09/03/2025"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377", end_contract: "09/03/2025"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377", end_contract: "09/03/2025"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377", end_contract: "09/03/2025"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377", end_contract: "09/03/2025"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377", end_contract: "09/03/2025"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377", end_contract: "09/03/2025"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377", end_contract: "09/03/2025"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377", end_contract: "09/03/2025"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377", end_contract: "09/03/2025"},
    {name: "Felipe", due_date: "20/04/2005", cpf: "165.234.007-60", telefone: "(21) 98742-0377", end_contract: "09/03/2025"},
  ]
}
