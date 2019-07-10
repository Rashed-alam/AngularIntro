import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employee = [];
  constructor(private _employeeService: EmployeeserviceService) { }

  ngOnInit() {
    this._employeeService.getEmployee()
    .subscribe(data => this.employee = data);
  }

}
