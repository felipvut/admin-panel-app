import { Component, OnInit } from '@angular/core';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { CommonModule } from '@angular/common';
import { ServiceOrdersService } from '../../services/service-orders.service';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { Router, RouterModule } from '@angular/router';

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
  events: any = []
  constructor(
    protected service: ServiceOrdersService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      let elements = document.getElementsByClassName("ant-picker-body")
      elements[0].classList.add("large-size")
    }, 500)
    this.getServiceOrders()
  }

  openOS(event: any) {
    for(let x of this.events) {
      let date = new Date(x.start_date)
      if(date.getDate() == event.getDate() &&
        date.getMonth() == event.getMonth() && 
        date.getFullYear() == event.getFullYear()) {
        this.router.navigate(['/service_orders/' + x.id])
      }
    }
  }

  async getServiceOrders() {
    try{
      this.isSpinning = true
      this.events = ((await this.service.list()).data).data
      this.isSpinning = false
    } catch(e) {
      this.isSpinning = false
      console.log(e)
    }
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
