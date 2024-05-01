import { Component, OnInit } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TableComponent } from '../../components/table/table.component';
import { RouterModule } from '@angular/router';
import { WorkersService } from '../../services/workers.service';
import { Router } from '@angular/router';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@Component({
  selector: 'app-workers-list',
  standalone: true,
  imports: [
    TableComponent, NzButtonModule,
    RouterModule, NzSpinModule
  ],
  templateUrl: './workers-list.component.html',
  styleUrl: './workers-list.component.scss'
})
export class WorkersListComponent implements OnInit{
    
  isSpinning: boolean = false

  constructor(
    protected workersService: WorkersService,
    protected router: Router
  ) {}

  workersColumns: any[] = [
    {title:"Id", column:"id"},
    {title:"Nome", column:"name"},
    {title:"Telefone", column:"phone"},
    {title:"Cpf", column:"cpf"},
    {title:"Data de Nascimento", column:"due_date_br"},
    {title:"Termino do contrato", column:"contract_end_br"},
  ]
  workers: any[] = []

  ngOnInit(): void {
    this.getWorkers()
  }

  getWorkers() {
    this.isSpinning = true
    this.workersService.list().subscribe({ next:
      result => {
        this.workers = result.data
        this.isSpinning = false
      }, error: 
      err => {
        this.isSpinning = false
      }
    })
  }

  openTable(event: any){
    this.router.navigate(['/workers/' + event.id])
  }

}
