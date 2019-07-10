import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Emodel';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  allEmployee: Employee[];
  constructor(
    private employeeservice: EmployeeService
  ) { }

  ngOnInit() {
    this.getAllEmployee();
  }
  getAllEmployee() {
    this.employeeservice.getAllEmployees().subscribe(
      (data: Employee[]) => {
        this.allEmployee = data;

      }
    );
  }
  deleteEmployee(id: number) {
    console.log(id);
    this.employeeservice.deleteEmployee(id).subscribe(
      (data: Employee) => {
        this.getAllEmployee();
      }
    );
  }
  edit(emp) {
    this.employeeservice.currentEmployee = Object.assign({}, emp);

  }

}
