import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
import{ SummationService} from './summation.service';

@NgModule({
  declarations: [
    AppComponent,
    Service1Component,
    Service2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SummationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
