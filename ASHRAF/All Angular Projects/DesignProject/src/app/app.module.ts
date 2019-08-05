import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
=======


@NgModule({
  declarations: [
    AppComponent
>>>>>>> 0574bb28804b35679348991d45731c6fce80f7ec
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
