import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-employee-salary-with-tax',
  templateUrl: './employee-salary-with-tax.component.html',
  styleUrls: ['./employee-salary-with-tax.component.css']
})
export class EmployeeSalaryWithTaxComponent implements OnInit {

  public employeesalary = [];
  public employeesalarywithtax = [];
  
  constructor(private _employeeService:EmployeeDataService) { }

  ngOnInit() {

    this.employeesalary = this._employeeService.getEmployee();
    this.employeesalarywithtax = this._employeeService.getEmpoyeeSalaryWithTax();
  }

}
