import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  constructor(private employeelist: EmployeeService) { }

  ngOnInit() {
  }
  getAllEmployeeList(){
    this.employeelist.getAllEmployees()
  }

}
