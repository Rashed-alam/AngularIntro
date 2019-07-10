import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

@NgModule({
  declarations: [EmployeeComponent, EmployeelistComponent],
  imports: [
    CommonModule
  ],
  exports: [EmployeeComponent, EmployeelistComponent]
})
export class EmployeesModule { }
