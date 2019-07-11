import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeService } from '../shared/employee.service';
import { FormsModule } from '@angular/forms';
 

@NgModule({
  declarations: [EmployeeComponent, EmployeelistComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [EmployeeComponent, EmployeelistComponent],
  providers:[EmployeeService]
})
export class EmployeesModule { }
