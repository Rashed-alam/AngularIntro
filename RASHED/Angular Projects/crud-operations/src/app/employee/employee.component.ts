import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../Emodel';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public allEmployee: Employee[] = [];

  employeeList: any = [];



  employ = new Employee();

  constructor(private list: EmployeeService, ) { }

  ngOnInit() {
    this.getEmployeeList();
  }


  getEmployeeList(): void {
    this.list.getAllEmployees()
      .subscribe(data => {
        this.employeeList = data;
        //this.allEmployee = data;
      })
  }


  deleteEmployee(_id: any) {
    console.log(_id);
    this.list.deleteEmployee(_id).subscribe(
      (data: Employee) => {
        this.getEmployeeList();
      }
    );
  }


  edit(emp) {
    this.list.currentEmployee = Object.assign({}, emp);
    this.getEmployeeList();

  }


  createAndUpdate(currentEmployee: Employee) {
    // console.log(currentEmployee);
    if (currentEmployee._id != null) {
      console.log('update');
      this.updateEmployee(currentEmployee);
    } else {
      console.log('create');
      this.createEmployee(currentEmployee);
      // this.ecom.getAllEmployeeCall();
    }
    this.getEmployeeList();
  }


  createEmployee(emp: Employee) {
    this.list.createEmployee(emp).subscribe((res: Employee) =>
      console.log(res)
    );


  }
  updateEmployee(emp: Employee) {
    this.list.updateEmployee(emp).subscribe();
  }
  clear() {
    this.list.currentEmployee =
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
