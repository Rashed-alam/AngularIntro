import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
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
import { ReportComponent } from './report/report.component';
import { appRoutes } from './app-routing.module';
import { SizelistService } from '../shared/sizelist.service';
import { DirectorApprovalComponent } from './director-approval/director-approval.component';

@NgModule({
  declarations: [
    AppComponent,
    FabricCalculationComponent,
    ReportComponent,
    DirectorApprovalComponent,

    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    NgbModule,
    FormsModule
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [BuyersService,UnitofmeasurementService,
    SleeveTypeService,FabricTypeService, DatePipe, 
    ItemNameService, FabricCalculationService,SizelistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
