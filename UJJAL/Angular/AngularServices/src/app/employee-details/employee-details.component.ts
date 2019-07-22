import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employeedetails = [];
  constructor(private _employeeService:EmployeeDataService) { }

  ngOnInit() {

    this.employeedetails = this._employeeService.getEmployee();
  }

}
