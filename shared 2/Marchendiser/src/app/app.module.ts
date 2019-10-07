import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { BuyersService } from './services/buyers.service';
import { UnitofmeasurementService } from './services/unitofmeasurement.service';
import { SleeveTypeService } from '../shared/sleeve-type.service';
import { FabricTypeService } from './services/fabric-type.service';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { DatePipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemNameService } from './services/item-name.service';

import { ReportComponent } from './report/report.component';
import { appRoutes } from './app-routing.module';
import { SizelistService } from './services/sizelist.service';
import { DirectorApprovalComponent } from './director-approval/director-approval.component';
import { PriceCalculationComponent } from './price-calculation/price-calculation.component';
import { CurrencyService } from 'src/app/services/currency.service';
import { FabricPriceServiceService} from 'src/app/services/fabric-price-service.service'; 
import { FabricPriceService } from 'src/shared/fabric-price.service'; 


import { FabricPriceComponent } from './components/fabric-price/fabric-price.component';
import { KnittingFormPlanComponent } from './knitting-form-plan/knitting-form-plan.component';
import { MarchendiserAprovalComponent } from './marchendiser-aproval/marchendiser-aproval.component';

import{KinttingPlanService} from 'src/shared/kintting-plan.service';
import { KnittingDyeingProgramComponent } from './knitting-dyeing-program/knitting-dyeing-program.component';
@NgModule({
  declarations: [
    AppComponent,

    ReportComponent,
    DirectorApprovalComponent,
    PriceCalculationComponent,
  
    FabricPriceComponent,
    KnittingFormPlanComponent,
    MarchendiserAprovalComponent,
    KnittingDyeingProgramComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    NgbModule,
    FormsModule,
   
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [BuyersService,UnitofmeasurementService,
    SleeveTypeService,FabricTypeService, DatePipe, 
    ItemNameService,SizelistService,CurrencyService,FabricPriceService,FabricPriceServiceService,KinttingPlanService],
  bootstrap: [AppComponent]
})
export class AppModule { }