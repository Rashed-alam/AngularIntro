import { Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizeComponent } from '../size/size.component';
import { ReportComponent } from '../report/report.component';


export const appRoutes: Routes =[{
  path : '', component: SizeComponent,
},
{
  path: 'report', component: ReportComponent
}

];
