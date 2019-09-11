import { Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricCalculationComponent } from './fabric-calculation/fabric-calculation.component';
import { ReportComponent } from './report/report.component';
import { DirectorApprovalComponent } from './director-approval/director-approval.component';
import { PriceCalculationComponent } from './price-calculation/price-calculation.component';
import { FabricPriceCalculationComponent } from './fabric-price-calculation/fabric-price-calculation.component';
import {FabricPriceComponent} from 'src/app/components/fabric-price/fabric-price.component';

export const appRoutes: Routes =[{
  path:'fabric', component:FabricCalculationComponent
},
{
  path: 'report', component: ReportComponent
},
{
  path: 'director', component: DirectorApprovalComponent
},
{
  path: 'price', component: PriceCalculationComponent
},
{
  path:'', component: FabricPriceCalculationComponent
},
{ 
  path:'test', component:FabricPriceComponent
}

];