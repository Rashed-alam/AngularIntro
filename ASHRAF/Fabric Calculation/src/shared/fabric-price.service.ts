import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { FabricCalulation } from './fabricCalculation.model';
import { BehaviorSubject } from 'rxjs';
import { PriceCalculation } from './priceCalculation.model';


const headerOption = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable()
export class FabricPriceService {
  data = { name: 'Otcollect', type: 'Website' } 

  
  private reference = new BehaviorSubject("");
  currentReference = this.reference.asObservable();

  url1="http://localhost:3000/api/v1/fabricEntry";
  url2 = 'http://localhost:3000/api/v1/priceCalculation';

  constructor(private httpcall: HttpClient) { }
// THIS PART IS FOR FABRIC CALCULATION
  currentFabricCalc: FabricCalulation = {
    
    fabricEntry_id: null,
    mailDate: '',
    entryDate: '',
    refNo: '',
    buyer_name: '',
    style_code: '',
    style_item_name: '',
    style_sleeve_type: '',
    size: '',
    fabrics: null,
    chest: null,
    length: null,
    sleeve: null,
    waste_percentage: null,
    hood:null,
    bottom: null,
    thigh: null,
    pocket: null,
    pocket_unit_of_measurement: '',
    thigh_unit_of_measurement: '',
    bottom_unit_of_measurement: '',
    hood_unit_of_measurement: '',
    fabric_weight:null,
    length_unit_of_measurement: '',
    chest_unit_of_measurement: '',
    sleeve_unit_of_measurement: '',
    track_Id: null,
    changeUser: '',
    changeDate: '',
    event:''
  }

   getAllFabricEntries(): Observable<FabricCalulation[]>{
    return this.httpcall.get<FabricCalulation[]>(this.url1+'/all', headerOption);
  }

  getAllFabricsEntry(refNo):Observable<FabricCalulation[]>{
    return this.httpcall.post<FabricCalulation[]>(this.url1+'/all/'+ refNo, headerOption);
  }


    getFabricEntry_ID(){
      return this.httpcall.get(this.url1+'/', headerOption);
    }
  

  createFabricEntry(fabcal : FabricCalulation): Observable<FabricCalulation> {
    return this.httpcall.post<FabricCalulation>(this.url1+'/new', fabcal , headerOption);
  }

 
deleteFabricEntry(entry: any): Observable<FabricCalulation[]>{
  return this.httpcall.delete<FabricCalulation[]>(this.url1+'/delete/'+ entry.reference + '/' + entry.stylecode, headerOption);
}


updateFabricEntry(entry : any): Observable<FabricCalulation[]> {
  console.log(JSON.stringify(entry));
  return this.httpcall.put<FabricCalulation[]>(this.url1+'/edit/'+ entry.refNo + '/' + entry.style_code, entry, headerOption);
}

createFabricArchieve(fab: FabricCalulation): Observable<FabricCalulation> {
  return this.httpcall.post<FabricCalulation>(this.url1+'/fabricArchieve', fab , headerOption);
}

getFabricArchieve(): Observable<FabricCalulation[]>{
  return this.httpcall.get<FabricCalulation[]>(this.url1+'/allFabricArchieve', headerOption);
}

//this is for passing the ref id to next component
passReferenceNumber(refId){
  this.reference.next(refId);
}
//for editing
getobject1(entry):Observable<FabricCalulation[]>{
  return this.httpcall.post<FabricCalulation[]>(this.url1+'/update/'+entry.reference+'/'+entry.stylecode, headerOption);
}


//THIS PART IS FOR PRICE CALCULATIN
calculatePrice: PriceCalculation = {
  //"calculation_id":null,//1
  "fabric_weight": '',
  "fabric_unit_price": '',
  "fabric_total_price": '',
  "refNo": '',
  "style_code":'',
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
  return this.httpcall.get(this.url2 + '/id', headerOption);
}
getallprice(): Observable<PriceCalculation[]> {
  return this.httpcall.get<PriceCalculation[]>(this.url2 + '/', headerOption);
}
createPost(a: any): Observable<PriceCalculation[]> {

  return this.httpcall.post<PriceCalculation[]>(this.url2 + '/new', a, headerOption);
}
deleteprice(o: any): Observable<PriceCalculation[]> {
  return this.httpcall.delete<PriceCalculation[]>(this.url2 + '/delete/' +  o.reference + '/' + o.stylecode, headerOption);
}
updateprice(a: any): Observable<PriceCalculation[]> {
  console.log(JSON.stringify(a));
  return this.httpcall.put<PriceCalculation[]>(this.url2 + '/edit/' + a.refNo + '/'+ a.style_code, a, headerOption);
}
createpriceArchive(b: any): Observable<PriceCalculation[]> {
  return this.httpcall.post<PriceCalculation[]>(this.url2 + '/priceArchieve', b, headerOption);
}

//for editing
getobject2(entry):Observable<PriceCalculation[]>{
  return this.httpcall.post<PriceCalculation[]>(this.url2+'/update/'+entry.reference+'/'+entry.stylecode, headerOption);
}

}
