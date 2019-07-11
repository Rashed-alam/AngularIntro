import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../Emodel';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employ = new Employee();

  constructor(private employeeservice:EmployeeService) { }

  ngOnInit() {
  }
  createAndUpdate(currentEmployee:Employee){
    // console.log(currentEmployee);
    if(currentEmployee.id != null){
      console.log('update');
      this.updateEmployee(currentEmployee);
    }else{
      console.log('create');
      this.createEmployee(currentEmployee);
    }
  }


  createEmployee(emp:Employee){

    this.employeeservice.createEmployee(emp).subscribe((res:Employee) =>
      console.log(res)
    );

  }
  updateEmployee(emp:Employee){
    this.employeeservice.updateEmployee(emp).subscribe();
  }
  clear(){
    this.employeeservice.currentEmployee=
      {
        id: null,
        firstname: '',
        lastname: '',
        designation: '',
        contact: null,
        address: ''
      }
    
  }
}
