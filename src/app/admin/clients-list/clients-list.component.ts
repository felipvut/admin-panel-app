import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../components/table/table.component'
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Router, RouterModule } from '@angular/router';
import { ClientsService } from '../../services/clients.service';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@Component({
  selector: 'app-clients-list',
  standalone: true,
  imports: [
    TableComponent, NzButtonModule,
    RouterModule, NzSpinModule
  ],
  templateUrl: './clients-list.component.html',
  styleUrl: './clients-list.component.scss'
})
export class ClientsListComponent implements OnInit {

  isSpinning: boolean = false

  constructor(
    protected clientsService: ClientsService,
    private router: Router,
  ) {}

  clientsColumns: any[] = [
    {title:"Id", column:"id"},
    {title:"Nome", column:"name"},
    {title:"Cpf", column:"cpf"},
    {title:"Telefone", column:"phone"},
    {title:"Data de Nascimento", column:"due_date_br"},
  ]

  clients: any[] = []

  ngOnInit(): void {
    this.getClients()
  }

  async getClients() {
    try{
      this.isSpinning = true
      this.clients = ((await this.clientsService.list()).data).data
      this.isSpinning = false
    } catch(e) {
      console.log(e)
      this.isSpinning = false
    }
  }

  openTable(event: any){
    this.router.navigate(['/clients/' + event.id])
  }
}
