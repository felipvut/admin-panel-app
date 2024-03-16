import { Component, OnInit } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TableComponent } from '../../components/table/table.component';
import { RouterModule } from '@angular/router';
import { WorkersService } from '../../services/workers.service';
import { Router } from '@angular/router';

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
export class WorkersListComponent implements OnInit{

  constructor(
    protected workersService: WorkersService,
    protected router: Router
  ) {}

  workersColumns: any[] = [
    {title:"Id", column:"id"},
    {title:"Nome", column:"name"},
    {title:"Telefone", column:"phone"},
    {title:"Cpf", column:"cpf"},
    {title:"Data de Nascimento", column:"due_date"},
    {title:"Termino do contrato", column:"contract_end"},
  ]
  workers: any[] = []

  ngOnInit(): void {
    this.getWorkers()
  }

  async getWorkers() {
    this.workers = ((await this.workersService.list()).data).data
  }

  openTable(event: any){
    console.log(event)
    this.router.navigate(['/workers/' + event.id])
  }

}
