import { Injectable } from '@angular/core';
import { FabricPriceModel } from 'src/app/models/fabric-price.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};


@Injectable()
export class FabricPriceServiceService {
  url1="http://localhost:3000/api/v1/fabricEntry";

  constructor(private httpcall: HttpClient) { }

  currentItem: FabricPriceModel = {
    name:'',
    nid:'',
    address:
    [
        {
            house: '',
            flat:''
        }
    ]
  }

  getAllFabricEntries(): Observable<FabricPriceModel[]>{
    return this.httpcall.get<FabricPriceModel[]>(this.url1+'/all', headerOption);
  }
  createFabricEntry(fabcal : FabricPriceModel): Observable<FabricPriceModel> {
    console.log(fabcal);
    return this.httpcall.post<FabricPriceModel>(this.url1+'/new', fabcal , headerOption);
  }

}
