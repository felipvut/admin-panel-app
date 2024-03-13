import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../components/table/table.component'
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';
import { ClientsService } from '../../services/clients.service';
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
export class ClientsListComponent implements OnInit {

  constructor(
    protected clientsService: ClientsService
  ) {}

  clientsColumns: any[] = [
    {title:"Id", column:"id"},
    {title:"Nome", column:"name"},
    {title:"Cpf", column:"cpf"},
    {title:"Telefone", column:"phone"},
    {title:"Data de Nascimento", column:"due_date"},
  ]

  clients: any[] = []

  ngOnInit(): void {
    this.getClients()
  }

  async getClients() {
    this.clients = ((await this.clientsService.list()).data).data
  }
}
