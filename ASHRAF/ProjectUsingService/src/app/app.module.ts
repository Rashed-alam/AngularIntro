import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientAComponent } from './client-a/client-a.component';
import { ClientBComponent } from './client-b/client-b.component';
import { CalcService } from './calc.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientAComponent,
    ClientBComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CalcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
