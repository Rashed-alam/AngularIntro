import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import{AboutComponent} from './about/about.component';
import{HomeComponent} from './home/home.component';
import{LoginComponent} from './login/login.component';
import{ContactComponent} from './contact/contact.component';
import{NavbarComponent} from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import{FormsModule} from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms'





@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    NavbarComponent,
    RegisterComponent,
    

    
  ],
  

  imports: [
    BrowserModule,  
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
