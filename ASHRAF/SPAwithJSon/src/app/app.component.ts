import { Component, OnInit } from '@angular/core';
import { employeelist } from './employee.service';
import { Employee } from './employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CRUD OPERATION IN ANGULAR 8';

  allEmployee: Employee[];

  constructor(private employeelist: employeelist){
  }
  ngOnInit(){
    this.getAllEmployeeList();
  }
  getAllEmployeeList(){
    this.employeelist.getAllEmployees()
    .subscribe(
       (data : Employee[]) =>{
         this.allEmployee = data;
       }
    );
  }

  deleteEmployee(id: number){
    console.log(id);
    this.employeelist.deleteThisEmployee(id)
    .subscribe(
      (data : Employee) =>{
        this.getAllEmployeeList();
      }
    );
  }

  edit(employee){
    this.employeelist.currentEmployee= Object.assign({},employee);
    this.getAllEmployeeList();
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
  this.employeelist.createEmployee(emp)
  .subscribe();
}

updateEmployee(emp: Employee){
this.employeelist.updateEmployee(emp)
  .subscribe();
}
clear(){
this.employeelist.currentEmployee = {
  id: null,
fullname : '',
  email : '',
  department : '',
  contact : null,
  address : ''
}
}




}
