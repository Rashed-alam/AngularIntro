import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FabricCalculationComponent } from './fabric-calculation/fabric-calculation.component';
import { BuyersService } from '../shared/buyers.service';
import { UnitofmeasurementService } from '../shared/unitofmeasurement.service';


@NgModule({
  declarations: [
    AppComponent,
    FabricCalculationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [BuyersService,UnitofmeasurementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
