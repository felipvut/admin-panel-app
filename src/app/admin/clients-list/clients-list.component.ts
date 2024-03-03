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
    { name: 'Felipe', profile: 'Admin', status: 'Ativo'},
    { name: 'Matheus', profile: 'Visitante', status: 'Ativo'},
    { name: 'Erasmo', profile: 'Visitante', status: 'Ativo'},
    { name: 'Usuário Normal', profile: 'Visitante', status: 'Ativo'},
    { name: 'Usuário Admin', profile: 'Visitante', status: 'Ativo'},
    { name: 'Felipe', profile: 'Admin', status: 'Ativo'},
    { name: 'Matheus', profile: 'Visitante', status: 'Ativo'},
    { name: 'Erasmo', profile: 'Visitante', status: 'Ativo'},
    { name: 'Usuário Normal', profile: 'Visitante', status: 'Ativo'},
    { name: 'Usuário Admin', profile: 'Visitante', status: 'Ativo'},
    { name: 'Felipe', profile: 'Admin', status: 'Ativo'},
    { name: 'Matheus1', profile: 'Visitante', status: 'Ativo'},
    { name: 'Erasmo', profile: 'Visitante', status: 'Ativo'},
    { name: 'Usuário Normal', profile: 'Visitante', status: 'Ativo'},
    { name: 'Usuário Admin', profile: 'Visitante', status: 'Ativo'},
    { name: 'Felipe', profile: 'Admin', status: 'Ativo'},
    { name: 'Matheus', profile: 'Visitante', status: 'Ativo'},
    { name: 'Erasmo', profile: 'Visitante', status: 'Ativo'},
    { name: 'Usuário Normal', profile: 'Visitante', status: 'Ativo'},
    { name: 'Usuário Admin', profile: 'Visitante', status: 'Ativo'},
  ]
  constructor() {
    this.paginator = null
  }
  displayedColumns: any = [
    {name: 'Nome', column: 'name'},
    {name: 'Perfil', column: 'profile'},
    {name: 'Status', column: 'status'},
    ];
  dataSource = new MatTableDataSource<any>(this.workers);
  @ViewChild(MatPaginator) paginator: any;
}
