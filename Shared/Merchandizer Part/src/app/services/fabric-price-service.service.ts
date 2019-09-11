import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import {FabricPriceModel } from 'src/app/models/fabric-price.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};


@Injectable()
export class FabricPriceServiceService {

  url1="http://localhost:3000/api/v1/FabricPriceEntry";

  constructor(private httpcall: HttpClient) { }

  currentEntry: FabricPriceModel = {
    auto_id: '',
    mailDate : '',
    entryDate : '',
    buyerName : '',
    size : '',
    referenceId : '',
    fabricPriceInformation : [  {
            styleCode : '',
            fabricType : '',
            itemName : '',
            wastePercentage : '',
            chestSize : '',
            lengthSize : '',
            sleeveSize : '',
            hoodSize : '',
            bottomSize : '',
            thighSize : '',
            pocketSize : '',
            fabricWeight : '',
            currency : '',
            fabricUnitPrice : '',
            fabricTotalPrice : '',
            rimPrice : '',
            cmPrice : '',
            trimPrice : '',
            printPrice : '',
            docPrice : '',
            perDozenPrice : '',
            perUnitPrice : '',
        }
    ]
  }
  //GET ALL
  getAllEntries(): Observable<FabricPriceModel[]>{
    return this.httpcall.get<FabricPriceModel[]>(this.url1+'/all', headerOption);
  }
  //POST
  createEntry(fabcal : FabricPriceModel): Observable<FabricPriceModel> {
    return this.httpcall.post<FabricPriceModel>(this.url1+'/new/'+fabcal.referenceId, fabcal , headerOption);
  }
  //EDIT
  updateEntry(entry : FabricPriceModel): Observable<FabricPriceModel[]> {
    return this.httpcall.put<FabricPriceModel[]>(this.url1+'/update/'+ entry.referenceId + '/' + entry.fabricPriceInformation[0].styleCode, entry, headerOption);
  }
  //DELETE
  deleteEntry(entry: FabricPriceModel): Observable<FabricPriceModel[]>{
    return this.httpcall.delete<FabricPriceModel[]>(this.url1+'/delete/'+ entry.referenceId + '/' + entry.fabricPriceInformation[0].styleCode, headerOption);
  }

  getFabricEntry_ID(){
    return this.httpcall.get(this.url1+'/', headerOption);
  }

}
