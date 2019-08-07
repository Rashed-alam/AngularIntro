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
    sleeve: ''
  }

   //this is for getting all posts of dashboard
   getAllFabricEntries(): Observable<FabricCalulation[]>{
    return this.httpcall.get<FabricCalulation[]>(this.url+'/all', headerOption);
  }

    //this is for getting all posts of dashboard
    getFabricEntry_ID(){
      return this.httpcall.get(this.url+'/', headerOption);
    }
  
//this is for creating posts inside dashboard
  createFabricEntry(fabcal : FabricCalulation): Observable<FabricCalulation> {
    return this.httpcall.post<FabricCalulation>(this.url+'/new', fabcal , headerOption);
  }

}
