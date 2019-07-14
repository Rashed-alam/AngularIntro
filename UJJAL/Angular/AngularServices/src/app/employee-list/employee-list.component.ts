import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  public employee = []; //declare a empty array to pass data to view

  constructor(private _employeeService:EmployeeDataService) { } //service need to inject in constructor

  ngOnInit() {

    this.employee = this._employeeService.getEmployee();
  }

}
