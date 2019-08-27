import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  allEmployee: Employee[];
  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.getAllEmployee();
  }
  getAllEmployee()
 
  {
    this.employeeService.getAllEmployees().subscribe((data: Employee[]) => {
      this.allEmployee = data;
      console.log(data);
      console.log(this.allEmployee);
    });
    }
  deletEmployee(id)
  {
    this.employeeService.deletEmployee(id) .subscribe((data: Employee) => {});
    this.getAllEmployee();
  }
  edit(emp: any){
    this.employeeService. currentEmployee = Object.assign({}, emp);

  }
    
  }


