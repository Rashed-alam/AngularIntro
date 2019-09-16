import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import {FabricPriceModel } from 'src/app/models/fabric-price.model';
import { Reference } from '@angular/compiler/src/render3/r3_ast';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class FabricPriceServiceService {

  url1 = "http://localhost:3000/api/v1/FabricPriceEntry";

  constructor(private httpcall: HttpClient) { }

  currentEntry: FabricPriceModel = {
    auto_id: '',
    mailDate: '',
    entryDate: '',
    buyerName: '',
    size: '',
    referenceId: '',
    fabricPriceInformation: [{
      styleCode: '',
      fabricType: '',
      itemName: '',
      wastePercentage: '',
      chestSize: '',
      chestUom: '',
      lengthSize: '',
      lengthUom: '',
      sleeveSize: '',
      sleeveUom: '',
      hoodSize: '',
      bottomSize: '',
      thighSize: '',
      pocketSize: '',
      fabricWeight: null,
      currency: '',
      fabricUnitPrice: null,
      fabricTotalPrice: null,
      rimPrice: null,
      cmPrice: null,
      trimPrice: null,
      printPrice: null,
      docPrice: null,
      perDozenPrice: null,
      perUnitPrice: null,
      remarks: '',
    }
    ]
  };

  getAllData(a): Observable<FabricPriceModel[]> {
    return this.httpcall.get<FabricPriceModel[]>(this.url1 + '/all/' + a, headerOption);
  }
  // GET ALL reference for report
  getAllref(): Observable<FabricPriceModel[]> {
    return this.httpcall.get<FabricPriceModel[]>(this.url1 + '/allref', headerOption);
  }
  // get data by reference id and style code
  getReviewdata(a): Observable<any> {
    //console.log('service' + a);
    return this.httpcall.post<any>(this.url1 + '/review/' + a.referenceId + '/' + a.styleCode, headerOption);
  }
  // get data by style code
  getPriceCalc(a): Observable<any> {
    // console.log('service' + a);
    return this.httpcall.post<any>(this.url1 + '/get/' + a.styleCode, headerOption);
  }

  // POST
  createEntry(fabcal: FabricPriceModel): Observable<FabricPriceModel> {
    return this.httpcall.post<FabricPriceModel>(this.url1 + '/new/' + fabcal.referenceId, fabcal, headerOption);
  }
  // EDIT
  updateEntry(entry: FabricPriceModel): Observable<FabricPriceModel[]> {
    // tslint:disable-next-line: max-line-length
    return this.httpcall.put<FabricPriceModel[]>(this.url1 + '/update/' + entry.referenceId + '/' + entry.fabricPriceInformation[0].styleCode, entry, headerOption);
  }
  // DELETE
  deleteEntry(entry: FabricPriceModel): Observable<FabricPriceModel[]> {
    // tslint:disable-next-line: max-line-length
    return this.httpcall.delete<FabricPriceModel[]>(this.url1 + '/delete/' + entry.referenceId + '/' + entry.fabricPriceInformation[0].styleCode, headerOption);
  }
  // GET AUTO GENERATED ID FROM DATABASE
  getFabricEntry_ID() {
    return this.httpcall.get(this.url1 + '/', headerOption);
  }



}
