import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { cuttingModel } from 'src/app/models/cutting.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};
@Injectable()
export class CuttingService {

  url1="http://localhost:3000/api/v1/Cutting";

  constructor(private httpcall: HttpClient) { }

  currentCutting: cuttingModel = {
    referenceId : '',
    styleCode : '',
    remarks:'',
    cutting:[
        { color:'',  size: null, weight: null,row:null, col:null}
    ]
  }
//POST 
  create(m: any): Observable<cuttingModel> {
    return this.httpcall.post<cuttingModel>(this.url1+'/new/'+m.referenceId+'/'+m.styleCode, m , headerOption);
  }

//GET everything FROM THE DATABASE
  getEverything(){
  return this.httpcall.get(this.url1+'/everything',headerOption);
  }
//GET A PARTICULAR DATA BY REFERENCE ID AND STYLE CODE
  getCertainData(m: any): Observable<cuttingModel> {
    return this.httpcall.post<cuttingModel>(this.url1+'/all/'+m.referenceId+'/'+m.styleCode, m , headerOption);
  }
}