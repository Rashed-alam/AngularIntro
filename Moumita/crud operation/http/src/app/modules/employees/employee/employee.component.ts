import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from 'src/app/model/employee.model';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
  }
  createAndUpdate(currentEmployee: Employee)
  {
    console.log(currentEmployee);
    if (currentEmployee.id != null){
      console.log('update');
      this.updateEmployee(currentEmployee);
    }
    else{
      console.log('create');
      this.createEmployee(currentEmployee);
    }

  }
  createEmployee(emp: Employee) //employee.service.ts -- create
  {
    this.employeeService.createEmployee(emp).subscribe();
  }
  updateEmployee(emp: Employee)
  {
    this.employeeService.updateEmployee(emp).subscribe();
  }
  clear(){
    this.employeeService.currentEmployee={
    firstName: '',
    lastName: '',
    Address: '',
    id: null,
    email:'',
    Phone: null
    
  }
  console.log(this.clear())

  }
}
