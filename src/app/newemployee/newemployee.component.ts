import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import {IEmployee} from '../employee';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit {

  public employees = [];

  constructor(private _employeeService:EmployeeServiceService) { }

  ngOnInit(): void {
    this._employeeService.getdata().subscribe(
       daa=> this.employees = Object.values(daa)[1]
      
      )
  }

}
