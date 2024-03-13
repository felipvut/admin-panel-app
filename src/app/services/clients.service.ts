import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsService extends BaseService{

  override table = 'clients'
}
