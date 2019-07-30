import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import {AddDataService} from './add-data.service';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AddDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
