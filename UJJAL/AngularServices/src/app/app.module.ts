import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeSalaryWithTaxComponent } from './employee-salary-with-tax/employee-salary-with-tax.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeDataService } from './employee-data.service';
import { HomeComponent } from './home/home.component';
import { HttpClientModule }    from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeSalaryWithTaxComponent,
    EmployeeDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeDataService], //inject employedata service into app module
  bootstrap: [AppComponent]
})
export class AppModule { }
