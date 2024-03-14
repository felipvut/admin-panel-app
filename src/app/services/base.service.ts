import { Injectable } from '@angular/core';
import { Enviroment } from '../environment/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BaseService extends Enviroment{
  
  table = ""
  override url = (new Enviroment()).url

  async get(id: any) {
    return await axios.get(`${this.url}/${this.table}/${id}`)
  }

  async list() {
    return await axios.get(`${this.url}/${this.table}`)
  }

  async save(model: any = null) {
    if(model.id) {
      return await axios.put(`${this.url}/${this.table}/${model.id}`, model)
    }
    return await axios.post(`${this.url}/${this.table}`, model)
  }
}
