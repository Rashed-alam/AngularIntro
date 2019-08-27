import { Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricCalculationComponent } from './fabric-calculation/fabric-calculation.component';
import { ReportComponent } from './report/report.component';
import { DirectorApprovalComponent } from './director-approval/director-approval.component';


export const appRoutes: Routes =[{
  path:'', component:FabricCalculationComponent
},
{
  path: 'report', component: ReportComponent
},
{
  path: 'director', component: DirectorApprovalComponent
}

];