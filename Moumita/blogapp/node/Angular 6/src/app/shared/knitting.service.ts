import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Knitting} from './knitting';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class KnittingService {

  Url = "http://localhost:3000";

  currentKnitting: Knitting = { 
    id:null,
    orderNo: null,
    style:  '',
    refNo: null,
    machineName: '',
    operatorName: '',
    date: '',
    shift: '',
    buyer: '',
    production: null,
    ptarget:null, 
    remarks: '',
    roll: null,
    balance: null,
    extra: null

   }


  constructor(private httpcall: HttpClient) { }

   getAll(): Observable<[Knitting]>{
    return this.httpcall.get<[Knitting]>(this.Url+'/api/v1/getKnittingMachineTarget', headerOption);
   }
   createTarget(knitting : Knitting): Observable<Knitting> {
    return this.httpcall.post<Knitting>(this.Url+'/api/v1/postKnittingMachineTarget', knitting , headerOption);
  }

}
