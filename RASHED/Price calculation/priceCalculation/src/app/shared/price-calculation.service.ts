import { PriceCalculation } from './fabricCalculation.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PriceCalculationService {

  constructor() { }
  calculatePrice : PriceCalculation={
    "calculation_id":null,//1
    "fabric_weight":'',
    "fabric_unit_price":'',
    "fabric_total_price":'' ,
    "rib":'' ,
    "cm":'' ,
    "trim":'' ,
    "print":'' ,
    "doc":'' ,
    "per_dozen_price":'' ,
    "per_unit_price":'' ,
    "track_Id": null ,
    "changeUser": '' ,
    "changeDate": '' ,
    "event": '' ,

  }
}
