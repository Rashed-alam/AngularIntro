import { Component, OnInit } from '@angular/core';
import { employeelist } from './employee.service';
import { Employee } from './employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CRUD OPERATION using MEAN Stack';

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

  deleteEmployee(_id: any){
    console.log(_id);
    this.employeelist.deleteThisEmployee(_id)
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
    if(currentEmployee._id != null){
      this.updateEmployee(currentEmployee);
    }
    else{
      this.createEmployee(currentEmployee);
    }
}

createEmployee(emp : Employee){
  this.employeelist.createEmployee(emp)
  .subscribe();
  this.getAllEmployeeList();
  this.clear();
}

updateEmployee(emp: Employee){
this.employeelist.updateEmployee(emp)
  .subscribe();
  this.getAllEmployeeList();
}

clear(){
this.employeelist.currentEmployee = {
 
  fullname : '',
  email : '',
  department : '',
  contact : null,
  address : ''
}
}






}
