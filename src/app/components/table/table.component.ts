import { Component, Input, OnInit } from '@angular/core';
import { AnyNaptrRecord } from 'dns';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NzTableModule, NzDividerModule, CommonModule, NzIconModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent{

  @Input() listOfData: any[] = [];
  @Input() columns: any = [];
}
