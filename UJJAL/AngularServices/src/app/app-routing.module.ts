import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeSalaryWithTaxComponent } from './employee-salary-with-tax/employee-salary-with-tax.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'emplist',component:EmployeeListComponent},
  {path:'empdetails',component:EmployeeDetailsComponent},
  {path:'empsalary',component:EmployeeSalaryWithTaxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
