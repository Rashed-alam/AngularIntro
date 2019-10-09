import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BuyersService } from './services/buyers.service';
import { CuttingService } from 'src/app/services/cutting.service';

import { FabricTypeService } from './services/fabric-type.service';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { DatePipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemNameService } from './services/item-name.service';
import { appRoutes } from './app-routing.module';

import { FabricPriceServiceService} from 'src/app/services/fabric-price-service.service'; 
import { FabricPriceComponent } from './components/fabric-price/fabric-price.component';
import { MachineCapacityComponent } from './components/machine-capacity/machine-capacity.component';
import { MachineCapacityService} from 'src/app/services/machine-capacity.service';
import { CuttingProgramComponent } from './components/cutting-program/cutting-program.component';

@NgModule({
  declarations: [
    AppComponent,
    FabricPriceComponent,
    MachineCapacityComponent,
    CuttingProgramComponent
    
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
  providers: [BuyersService,FabricTypeService, DatePipe, MachineCapacityService,ItemNameService,FabricPriceServiceService,CuttingService],
  bootstrap: [AppComponent]
})
export class AppModule { }