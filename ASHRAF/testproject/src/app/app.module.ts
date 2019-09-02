import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FabricPriceComponent } from './components/fabric-price/fabric-price.component';
import { FabricPriceServiceService} from 'src/app/services/fabric-price-service.service';
// import { FormArray, FormBuilder } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    FabricPriceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
    // FormArray,
    // FormBuilder
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [FabricPriceServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }