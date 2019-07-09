import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
 // Add your component here

//This is my case 
const routes: Routes = [
    {
        path: '',
        component: Service1Component
    },
    {
        path: 'app-service2',
        component: Service2Component
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }