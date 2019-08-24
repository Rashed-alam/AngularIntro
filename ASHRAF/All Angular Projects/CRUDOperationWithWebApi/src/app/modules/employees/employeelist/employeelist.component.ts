import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from '../../shared/employee.model';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  
  allEmployee: Employee[];

  constructor(private employeelist: EmployeeService) { }

  ngOnInit() {
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
  }

}
