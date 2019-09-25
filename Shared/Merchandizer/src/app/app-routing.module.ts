import { Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FabricPriceComponent} from 'src/app/components/fabric-price/fabric-price.component';
import { MachineCapacityComponent} from 'src/app/components/machine-capacity/machine-capacity.component';


export const appRoutes: Routes =[

{ 
  path:'test', component:FabricPriceComponent
},
{
  path:'machineCapacity',component:MachineCapacityComponent
}

];