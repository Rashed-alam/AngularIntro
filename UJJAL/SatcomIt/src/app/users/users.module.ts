import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

const routes: Routes = [
{path:'',component:UsersComponent},
]
@NgModule({
  declarations: [UsersComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    
  ]
})
export class UsersModule { }
