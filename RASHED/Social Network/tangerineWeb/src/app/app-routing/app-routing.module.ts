import { DashboardComponent } from './../dashboard/dashboard.component';

import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from '../login-page/login-page.component';
import { RegisterPageComponent } from '../register-page/register-page.component'

const routes:Routes=[

  {path:'' ,redirectTo:'login',pathMatch:'full'},
  {path:'login' ,component:LoginPageComponent},
  {path:'home' ,component:HomeComponent},
  {path:'register' ,component:RegisterPageComponent},
  {path:'dashboard' ,component:DashboardComponent}

];



@NgModule({

  imports: [RouterModule.forRoot(routes)],

})
export class AppRoutingModule { }
