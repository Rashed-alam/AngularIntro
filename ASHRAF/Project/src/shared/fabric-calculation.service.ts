import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FabricCalulation } from './fabricCalculation.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable()
export class FabricCalculationService {

  url="http://localhost:3000/api/v1/fabricEntry";

  constructor(private httpcall: HttpClient) { }

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
    fabrics: '',
    chest: '',
    length: '',
    sleeve: '',
    length_unit_of_measurement: '',
    chest_unit_of_measurement: '',
    sleeve_unit_of_measurement: '',
    track_Id: null,
    changeUser: '',
    changeDate: '',
    event:''
  }

   
   getAllFabricEntries(): Observable<FabricCalulation[]>{
    return this.httpcall.get<FabricCalulation[]>(this.url+'/all', headerOption);
  }


    getFabricEntry_ID(){
      return this.httpcall.get(this.url+'/', headerOption);
    }
  

  createFabricEntry(fabcal : FabricCalulation): Observable<FabricCalulation> {
    return this.httpcall.post<FabricCalulation>(this.url+'/new', fabcal , headerOption);
  }

 
deleteFabricEntry(input: any): Observable<FabricCalulation[]>{
  return this.httpcall.delete<FabricCalulation[]>(this.url+'/delete/'+ input._id, headerOption);
}


updateFabricEntry(entry : any): Observable<FabricCalulation> {
  return this.httpcall.put<FabricCalulation>(this.url+'/edit/'+ entry._id, entry, headerOption);
}

createFabricArchieve(fab: FabricCalulation): Observable<FabricCalulation> {
  return this.httpcall.post<FabricCalulation>(this.url+'/fabricArchieve', fab , headerOption);
}

}
