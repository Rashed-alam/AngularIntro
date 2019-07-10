import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  //local array for fetching employee data
  public employee = [];

  constructor(private _employeeService: EmployeeserviceService) { }

  ngOnInit() {
    this._employeeService.getEmployee()
      .subscribe(data => this.employee = data);

  }

}
