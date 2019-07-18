// import { EmployeeListComponent } from './../employee-list/employee-list.component';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../Emodel';
//import {EmployeeListComponent}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employ = new Employee();

  constructor(private employeeservice:EmployeeService,) { }

  ngOnInit() {
  }
  createAndUpdate(currentEmployee:Employee){
    // console.log(currentEmployee);
    if(currentEmployee._id !=null){
      console.log('update');
      this.updateEmployee(currentEmployee);
    }else{
      console.log('create');
      this.createEmployee(currentEmployee);
     // this.ecom.getAllEmployeeCall();
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
        _id: null,
        firstname: '',
        lastname: '',
        designation: '',
        contact: null,
        address: ''
      }
    
  }
}
