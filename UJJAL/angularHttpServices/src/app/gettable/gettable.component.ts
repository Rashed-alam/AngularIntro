import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-gettable',
  templateUrl: './gettable.component.html',
  styleUrls: ['./gettable.component.css']
})
export class GettableComponent implements OnInit {

  public todolist = [];
  constructor(private  _employeeService: EmployeeserviceService) { }

  ngOnInit() {
    this._employeeService.getTodosList()
        .subscribe(data =>this.todolist = data);
  }

}
