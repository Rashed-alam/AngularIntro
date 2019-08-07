import { ClientSizeService } from './shared/client-size.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SizeComponent } from './size/size.component';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    SizeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ClientSizeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
