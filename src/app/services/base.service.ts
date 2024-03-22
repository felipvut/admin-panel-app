import { Injectable, OnInit } from '@angular/core';
import { Enviroment } from '../../environment/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class BaseService extends Enviroment {

  table = ""
  override url = (new Enviroment()).url

  async get(id: any) {
    return await axios.get(`${this.url}/generic/${this.table}/${id}`)
  }

  async list() {
    return await axios.get(`${this.url}/generic/${this.table}`)
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

  async login(obj: any = null) {
    return await axios.post(`${this.url}/login`, obj)
  }
}
