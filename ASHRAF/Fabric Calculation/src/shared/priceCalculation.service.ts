import { PriceCalculation } from './priceCalculation.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PriceCalculationService {
  url = 'http://localhost:3000/api/v1/priceCalculation'
  constructor(private httpcall: HttpClient) { }
  calculatePrice: PriceCalculation = {
    //"calculation_id":null,//1
    "fabric_weight": '',
    "fabric_unit_price": '',
    "fabric_total_price": '',
    "rib": '',
    "cm": '',
    "trim": '',
    "print": '',
    "doc": '',
    "per_dozen_price": '',
    "per_unit_price": '',
    "PriceCurrency_UOM": '',
    "track_Id": null,
    "changeUser": '',
    "changeDate": '',
    "event": '',

  }
  getCalculationid() {
    return this.httpcall.get(this.url + '/id', headerOption);
  }
  getallprice(): Observable<PriceCalculation[]> {
    return this.httpcall.get<PriceCalculation[]>(this.url + '/', headerOption);
  }
  createPost(a: any): Observable<PriceCalculation[]> {

    return this.httpcall.post<PriceCalculation[]>(this.url + '/new', a, headerOption);
  }
  deleteprice(id): Observable<PriceCalculation[]> {
    return this.httpcall.delete<PriceCalculation[]>(this.url + '/delete/' + id, headerOption);
  }
  updateprice(a: any): Observable<PriceCalculation> {
    return this.httpcall.put<PriceCalculation>(this.url + '/edit/' + a._id, a, headerOption);
  }
  createpriceArchive(b: any): Observable<PriceCalculation[]> {
    return this.httpcall.post<PriceCalculation[]>(this.url + '/priceArchieve', b, headerOption);
  }
}