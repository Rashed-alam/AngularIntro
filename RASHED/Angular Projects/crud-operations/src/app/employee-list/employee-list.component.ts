import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Emodel';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
 public allEmployee:Employee[]=[];

 employeeList: any = [];
  constructor(
    private list: EmployeeService
  ) { }

  ngOnInit() {
    this.getEmployeeList();
  }
  getEmployeeList():void {
    this.list.getAllEmployees()
    .subscribe(data =>{
      this.employeeList = data;
      //this.allEmployee = data;
    })

  }
  deleteEmployee(_id: any) {
    console.log(_id);
    this.list.deleteEmployee(_id).subscribe(
      (data:Employee) => {
        this.getEmployeeList();
      }
    );
  }  
  edit(emp) {
    this.list.currentEmployee = Object.assign({}, emp);
    this.getEmployeeList();

  }
//
getAllEmployeeCall(){
  this.getEmployeeList();
}
}
