import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FabricCalculationComponent } from './fabric-calculation/fabric-calculation.component';
import { BuyersService } from '../shared/buyers.service';
import { UnitofmeasurementService } from '../shared/unitofmeasurement.service';
import { SleeveTypeService } from '../shared/sleeve-type.service';
import { FabricTypeService } from '../shared/fabric-type.service';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { DatePipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemNameService } from '../shared/item-name.service';
import { FabricCalculationService } from '../shared/fabric-calculation.service';
import { FabricResultComponent } from './fabric-result/fabric-result.component';

@NgModule({
  declarations: [
    AppComponent,
    FabricCalculationComponent,
    FabricResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    NgbModule,
    FormsModule
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [BuyersService,UnitofmeasurementService,
    SleeveTypeService,FabricTypeService, DatePipe, 
    ItemNameService, FabricCalculationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
