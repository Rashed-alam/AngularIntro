import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { DatePipe } from '@angular/common';
import { PriceCalculationComponent } from './price-calculation/price-calculation.component';
import { PriceArchiveComponent } from './price-archive/price-archive.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PriceCalculationComponent,
    PriceArchiveComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    NgbModule,
    FormsModule,
    RouterModule.forRoot(AppRoutingModule),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }