import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AboutComponent} from './about/about.component';
import{HomeComponent} from './home/home.component';
import{RegisterComponent} from './register/register.component';
import{LoginComponent} from './login/login.component';
import{ContactComponent} from './contact/contact.component';
import{NavbarComponent} from './navbar/navbar.component';

const routes: Routes = [{
  path: '', component:NavbarComponent },
{
path: 'home',
component: HomeComponent
},
{
 path: 'register',
 component: RegisterComponent
  },
 
  {
path: 'contact',
component:ContactComponent
    },
    {
 path: 'login',
 component: LoginComponent
      },
      {
  path: 'about',
 component: AboutComponent
      },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
