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

  url1 = 'http://localhost:3000/api/v1/FabricPriceEntry';
  url2 = 'http://localhost:3000/api/v1/buyer';

  constructor(private httpcall: HttpClient) { }

  currentEntry: FabricPriceModel = {
    auto_id: '',
    mailDate: '',
    entryDate: '',
    buyerName: '',
    buyerCode: '',
    size: '',
    season: '',
    shipmentDone: null,
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
      Dremarks: '',
      Mremarks: '',
      approval: null,
      marchendizerFlag: true,
      track_Id: null,
      changeUser: '',
      changeDate: '',
      event: '',
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
  // GET info for selection report
  getallData(): Observable<FabricPriceModel[]> {
    return this.httpcall.get<FabricPriceModel[]>(this.url1 + '/allData', headerOption);
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
    console.log(entry);
    // tslint:disable-next-line: max-line-length
    return this.httpcall.put<FabricPriceModel[]>(this.url1 + '/update/' + entry.referenceId + '/' + entry.fabricPriceInformation[0].styleCode, entry, headerOption);
  }
  // checkbox update
  updateEntry1(entry): Observable<any[]> {
    console.log(entry);
    // tslint:disable-next-line: max-line-length
    return this.httpcall.put<any[]>(this.url1 + '/update1/' + entry.referenceId + '/' + entry.fabricPriceInformation.styleCode, entry, headerOption);
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
// total fabricweight by reference id
  gettotalweight(a): Observable<FabricPriceModel[]> {
    return this.httpcall.get<FabricPriceModel[]>(this.url1 + '/fabricweight/' + a, headerOption);
  }
// buyer data
getAllBuyer(): Observable<any[]> {
  return this.httpcall.get<any[]>(this.url2 + '/all', headerOption);
}
//archive for director
createpriceArchive(b: any): Observable<any[]> {
  return this.httpcall.post<any[]>(this.url1 + '/directorReportArchieve', b, headerOption);
}
// marchendiser er archive
createMarchendiserArchive(b: any): Observable<any[]> {
  return this.httpcall.post<any[]>(this.url1 + '/marchendiserReportArchieve', b, headerOption);
}
}
