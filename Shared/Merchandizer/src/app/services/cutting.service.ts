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

  constructor(private httpcall: HttpClient) { }

  currentCutting: cuttingModel = {
    referenceId : '',
    buyerName:'',
    season : '',
    styleCode : '',
    cutting:[
        { color:'',  size: null, weight: null}
    ]
  }

  createEntry(fabcal : cuttingModel) {
   console.log(fabcal);
  }
}
