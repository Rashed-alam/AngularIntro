import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import {FabricPriceModel } from 'src/app/models/fabric-price.model';
import { Reference } from '@angular/compiler/src/render3/r3_ast';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};


@Injectable()
export class FabricPriceServiceService {

  url1="http://localhost:3000/api/v1/FabricPriceEntry";

  constructor(private httpcall: HttpClient) { }

  currentEntry: FabricPriceModel = {
    auto_id: null,
    mailDate : new Date,
    entryDate : new Date,
    buyerName : '',
    buyerCode: '',
    size : '',
    referenceId : '',
    fabricPriceInformation : [  {
            styleCode : '',
            fabricType : null,
            itemName : '',
            wastePercentage : null,
            chestSize : null,
            lengthSize : null,
            sleeveSize : null,
            unitOfMeasurement: '',
            hoodSize : null,
            bottomSize : null,
            thighSize : null,
            pocketSize : null,
            fabricWeight : null,
            currency : '',
            fabricUnitPrice : null,
            fabricTotalPrice : null,
            rimPrice : null,
            cmPrice : null,
            trimPrice : null,
            printPrice : null,
            docPrice : null,
            perDozenPrice : null,
            perUnitPrice : null
        }
    ]
  }
  //GET ALL by reference
  getAllEntries(reference: any): Observable<FabricPriceModel[]>{
    return this.httpcall.post<FabricPriceModel[]>(this.url1+'/all/'+ reference, headerOption);
  }
  //POST
  createEntry(fabcal : FabricPriceModel): Observable<FabricPriceModel> {
    return this.httpcall.post<FabricPriceModel>(this.url1+'/new/'+fabcal.referenceId, fabcal , headerOption);
  }
  //EDIT
  updateEntry(entry: FabricPriceModel): Observable<FabricPriceModel[]> {
    return this.httpcall.put<FabricPriceModel[]>(this.url1+'/update/'+ entry.referenceId + '/' + entry.fabricPriceInformation[0].styleCode, entry, headerOption);
  }
  //DELETE
  deleteEntry(entry){
    return this.httpcall.delete(this.url1+'/delete/'+ entry.referenceId + '/' + entry.styleCode, headerOption);
  }
  //GET AUTO GENERATED ID FROM DATABASE
  getFabricEntry_ID(){
    return this.httpcall.get(this.url1+'/', headerOption);
  }
  
  //GET REFERENCE LIST FROM DATABASE
  getAllReferences(){
    return this.httpcall.get(this.url1+'/allref', headerOption);
  }

  //FOR GETTING OBJECT FROM DB FOR EDIT IT ON FRONT END FORM
  getByStyleCode(a: any){
    return this.httpcall.post(this.url1+'/get/'+a.styleCode, headerOption);
  }

}
