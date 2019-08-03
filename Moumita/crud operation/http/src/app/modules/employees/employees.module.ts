import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from '../shared/employee.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeeComponent, EmployeeListComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [EmployeeComponent, EmployeeListComponent],
  providers: [EmployeeService]
})
export class EmployeesModule { }
