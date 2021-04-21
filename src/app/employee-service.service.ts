import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private _url: string = "/assets/database.json"


  constructor(private http: HttpClient) { }

  getdata(){
    return this.http.get(this._url)
  }
}
