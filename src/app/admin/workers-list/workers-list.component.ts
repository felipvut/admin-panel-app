import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TableComponent } from '../../components/table/table.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
@Component({
  selector: 'app-workers-list',
  standalone: true,
  imports: [
    TableComponent, MatPaginatorModule,
    MatIconModule, MatButtonModule,
    RouterModule, NzButtonModule,
    NzPageHeaderModule, NzBreadCrumbModule,
    NzSpaceModule
  ],
  templateUrl: './workers-list.component.html',
  styleUrl: './workers-list.component.scss'
})
export class WorkersListComponent implements OnInit{

  workers: any = [
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

  ngOnInit(): void {
  }
  
  }