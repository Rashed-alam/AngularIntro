import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StdntComponent } from './stdnt/stdnt.component';
import{FormsModule} from '@angular/forms'
import{ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    StdntComponent
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
export class AppModule { }
