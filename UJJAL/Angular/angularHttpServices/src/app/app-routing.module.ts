import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { GettableComponent } from './gettable/gettable.component';
import { PosttableComponent } from './posttable/posttable.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'emplist',component:EmployeelistComponent},
{path:'empdetails',component:EmployeeDetailsComponent},
{path:'todoslist',component:GettableComponent},
{path:'postlist',component:PosttableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
