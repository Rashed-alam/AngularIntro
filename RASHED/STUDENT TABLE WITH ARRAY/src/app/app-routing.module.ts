import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{StdntComponent} from './stdnt/stdnt.component'

const routes: Routes = [{
  path:'',component:StdntComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
