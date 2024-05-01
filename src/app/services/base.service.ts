import { Injectable, OnInit } from '@angular/core';
import { Enviroment } from '../../environment/environment';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BaseService extends Enviroment {

  table = ""
  override url = (new Enviroment()).url

  constructor(
    protected httpClient: HttpClient
  ) {
    super()
  }

  get(id: any) {
    return this.httpClient.get<any>(`${this.url}/generic/${this.table}/${id}`)
  }

  list() {
    return this.httpClient.get<any>(`${this.url}/generic/${this.table}`)
  }

  save(model: any = null, token: any= '') {
    if(model.id) {
      return this.httpClient.put<any>(`${this.url}/generic/${this.table}/${model.id}`, model, {
        headers: {
          'Authorization': `${token}`
        }
      })
    }
    return this.httpClient.post<any>(`${this.url}/generic/${this.table}`, model, {
      headers: {
        'Authorization': `${token}`
      }
    })
  }

  delete(model: any = null, token: any = '') {
    return this.httpClient.delete<any>(`${this.url}/generic/${this.table}/${model.id}`, {
      headers: {
        'Authorization': `${token}`
      }
    })
  }

  login(obj: any = null) {
    return this.httpClient.post<any>(`${this.url}/login`, obj)
  }
}
