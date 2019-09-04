import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { SubFormComponent } from "./sub-form.component";
import { HobbyFormComponent } from "./hobby-form.component";
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, SubFormComponent, HobbyFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
