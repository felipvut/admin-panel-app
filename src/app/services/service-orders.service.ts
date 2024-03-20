import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceOrdersService extends BaseService {

  override table = 'service_orders'
}
