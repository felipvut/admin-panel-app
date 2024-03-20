import { Component, OnInit } from '@angular/core';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { CommonModule } from '@angular/common';
import { ServiceOrdersService } from '../../services/service-orders.service';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    NzCalendarModule, NzBadgeModule,
    CommonModule, NzSpinModule,
    RouterModule
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {

  isSpinning: boolean = false
  events: any = {}
  constructor(
    protected service: ServiceOrdersService,
  ) {}

  ngOnInit(): void {
    this.getServiceOrders()
  }

  async getServiceOrders() {
    this.isSpinning = true
    this.events = ((await this.service.list()).data).data
    this.isSpinning = false
  }

  isEvent(item: any, date: Date) {
    let dateEvent = new Date(item.start_date)
    if(dateEvent.getDate() == date.getDate() &&
    dateEvent.getMonth() == date.getMonth() && 
    dateEvent.getFullYear() == date.getFullYear()) {
      return true
    }
    return false
  }
}
