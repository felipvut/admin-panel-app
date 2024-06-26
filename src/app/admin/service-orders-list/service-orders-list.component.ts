import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component'
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Router, RouterModule } from '@angular/router';
import { ClientsService } from '../../services/clients.service';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { ServiceOrdersService } from '../../services/service-orders.service';

@Component({
  selector: 'app-service-orders-list',
  standalone: true,
  imports: [
    TableComponent, NzButtonModule,
    RouterModule, NzSpinModule
  ],
  templateUrl: './service-orders-list.component.html',
  styleUrl: './service-orders-list.component.scss'
})
export class ServiceOrdersListComponent {
  
  isSpinning: boolean = false

  constructor(
    protected service: ServiceOrdersService,
    private router: Router,
  ) {}

  serviceOrdersColumns: any[] = [
    {title:"Id", column:"id"},
    {title:"Nome", column:"name"},
    {title:"Funcionário responsável", object:"worker", column: "name"},
    {title:"Cliente", object:"client", column: "name"},
    {title:"Data da OS", column:"start_date_br"},
  ]

  serviceOrders: any[] = []

  ngOnInit(): void {
    this.getServiceOrders()
  }

  getServiceOrders() {
    this.isSpinning = true
    this.service.list().subscribe({ next:
      result => {
        this.serviceOrders = result.data
        this.isSpinning = false
      }, error: 
      err => {
        this.isSpinning = false
      }
    })
  }

  openTable(event: any){
    console.log(event)
    this.router.navigate(['/service_orders/' + event.id])
  }
}
