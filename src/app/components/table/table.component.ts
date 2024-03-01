import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatButtonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {
  @Input() dataSource : any;
  @Input() displayedColumns : any;
  // constructor() {}
  @ViewChild(MatPaginator) paginator: any;

  headers: any = null
  columns: any = null
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  ngOnInit(): void {
    if(this.displayedColumns) {
      let arrHeaders = []
      let arrColumns = []
      for(let x of this.displayedColumns) {
        arrHeaders.push(x.name)
        arrColumns.push(x.column)
      }
      this.headers = arrHeaders
      this.columns = arrColumns
    }
  }
}
