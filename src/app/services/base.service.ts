import { Injectable } from '@angular/core';
import { Enviroment } from '../environment/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BaseService extends Enviroment{
  
  table = ""
  override url = (new Enviroment()).url

  async list() {
    return await axios.get(`${this.url}/${this.table}`)
  }
}
