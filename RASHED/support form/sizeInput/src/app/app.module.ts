import { appRoutes } from './app-routing/app-routing.module';
import { ClientSizeService } from './shared/client-size.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



import{DatePipe} from '@angular/common';
import { AppComponent } from './app.component';
import { SizeComponent } from './size/size.component';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import { ReportComponent } from './report/report.component'

@NgModule({
  declarations: [
    AppComponent,
    SizeComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  

  ],
  providers: [ClientSizeService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
