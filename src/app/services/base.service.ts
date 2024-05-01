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

  async save(model: any = null, token: any= '') {
    if(model.id) {
      return await axios.put(`${this.url}/generic/${this.table}/${model.id}`, model, {
        headers: {
          'Authorization': `${token}`
        }
      })
    }
    return await axios.post(`${this.url}/generic/${this.table}`, model, {
      headers: {
        'Authorization': `${token}`
      }
    })
  }

  async delete(model: any = null, token: any = '') {
    return await axios.delete(`${this.url}/generic/${this.table}/${model.id}`, {
      headers: {
        'Authorization': `${token}`
      }
    })
  }

  login(obj: any = null) {
    return this.httpClient.post<any>(`${this.url}/login`, obj)
  }
}
