import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from '../../shared/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }


  createAndUpdate(currentEmployee : Employee){
        if(currentEmployee.id != null){
          this.updateEmployee(currentEmployee);
        }
        else{
          this.createEmployee(currentEmployee);
        }
  }

  createEmployee(emp : Employee){
      this.employeeService.createEmployee(emp)
      .subscribe();
  }

  updateEmployee(emp: Employee){
    this.employeeService.updateEmployee(emp)
      .subscribe();
  }
  clear(){
    this.employeeService.currentEmployee = {
      id: null,
    fullname : '',
      email : '',
      department : '',
      contact : null,
      address : ''
}
  }

}
