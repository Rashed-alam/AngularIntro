import { Routes } from '@angular/router';
import { PriceArchiveComponent } from './price-archive/price-archive.component';
import { PriceCalculationComponent } from './price-calculation/price-calculation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const AppRoutingModule:Routes = [
  {
  path: '', component: PriceCalculationComponent,
},
{
  path: 'report', component: PriceArchiveComponent
}


];
