import { Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportComponent } from './report/report.component';
import { DirectorApprovalComponent } from './director-approval/director-approval.component';
import { PriceCalculationComponent } from './price-calculation/price-calculation.component';
import { KnittingFormPlanComponent } from './knitting-form-plan/knitting-form-plan.component';
import { MarchendiserAprovalComponent } from './marchendiser-aproval/marchendiser-aproval.component';
import {FabricPriceComponent} from 'src/app/components/fabric-price/fabric-price.component';
import { KnittingDyeingProgramComponent } from './knitting-dyeing-program/knitting-dyeing-program.component';


export const appRoutes: Routes =[
{
  path: '', component: ReportComponent
},
{
  path: 'director', component: DirectorApprovalComponent
},
{
  path: 'knittingAndDyeing', component: KnittingDyeingProgramComponent
},
{
  path: 'price', component: PriceCalculationComponent
},

{ 
  path:'test', component:FabricPriceComponent
},
{ 
  path:'knitting', component:KnittingFormPlanComponent
},
{
  path:'Marchendiser', component:MarchendiserAprovalComponent
}

];