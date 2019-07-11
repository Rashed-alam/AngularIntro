import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeListComponent } from './home/home-list/home-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'',
    pathMatch: 'full'
  },
  {
    path:'home',
    component:HomeListComponent
  },
  {
    path:'customers',
    loadChildren: () => import('./customers/customers.module').then(mod => mod.CustomersModule)
  },
  {
    path:'orders',
    loadChildren: () => import('./orders/orders.module').then(mod => mod.OrdersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
