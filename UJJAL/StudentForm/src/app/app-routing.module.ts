import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

const routes: Routes = [
  {path:'',component:RegistrationComponent},
  {path:'check',component:CheckboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
