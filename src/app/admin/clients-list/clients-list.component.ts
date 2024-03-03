import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { TableComponent } from '../../components/table/table.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-clients-list',
  standalone: true,
  imports: [TableComponent, MatPaginatorModule, MatIconModule, MatButtonModule],
  templateUrl: './clients-list.component.html',
  styleUrl: './clients-list.component.scss'
})
export class ClientsListComponent {

  workers: any = [
    { name: 'Felipe', cpf: '123123213123', nascimento: '20/04/2005', telefone: '(21) 98742-0377'},
    { name: 'Felipe', cpf: '123123213123', nascimento: '20/04/2005', telefone: '(21) 98742-0377'},
    { name: 'Felipe', cpf: '123123213123', nascimento: '20/04/2005', telefone: '(21) 98742-0377'},
    { name: 'Felipe', cpf: '123123213123', nascimento: '20/04/2005', telefone: '(21) 98742-0377'},
    { name: 'Felipe', cpf: '123123213123', nascimento: '20/04/2005', telefone: '(21) 98742-0377'},
    { name: 'Felipe', cpf: '123123213123', nascimento: '20/04/2005', telefone: '(21) 98742-0377'},
    { name: 'Felipe', cpf: '123123213123', nascimento: '20/04/2005', telefone: '(21) 98742-0377'},
  ]
  constructor() {
    this.paginator = null
  }
  displayedColumns: any = [
    {name: 'Nome', column: 'name'},
    {name: 'Cpf', column: 'cpf'},
    {name: 'Data de nascimento', column: 'nascimento'},
    {name: 'Telefone', column: 'telefone'},
    ];
  dataSource = new MatTableDataSource<any>(this.workers);
  @ViewChild(MatPaginator) paginator: any;
}
