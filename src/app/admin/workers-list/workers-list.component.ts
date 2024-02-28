import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-workers-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatButtonModule],
  templateUrl: './workers-list.component.html',
  styleUrl: './workers-list.component.scss'
})
export class WorkersListComponent {


  constructor(
    
    ) {
      this.paginator = null
    }
    displayedColumns: string[] = [ 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
    @ViewChild(MatPaginator) paginator: any;
  }
  
  const ELEMENT_DATA: any = [
    { name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    { name: 'Helium', weight: 4.0026, symbol: 'He'},
    { name: 'Lithium', weight: 6.941, symbol: 'Li'},
    { name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    { name: 'Boron', weight: 10.811, symbol: 'B'},
    { name: 'Carbon', weight: 12.0107, symbol: 'C'},
    { name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    { name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    { name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    { name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    { name: 'Sodium', weight: 22.9897, symbol: 'Na'},
    { name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
    { name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
    { name: 'Silicon', weight: 28.0855, symbol: 'Si'},
    { name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
    { name: 'Sulfur', weight: 32.065, symbol: 'S'},
    { name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
    { name: 'Argon', weight: 39.948, symbol: 'Ar'},
    { name: 'Potassium', weight: 39.0983, symbol: 'K'},
    { name: 'Calcium', weight: 40.078, symbol: 'Ca'},
  ];