import { knittingNdyeing } from './../models/knittingNdyeing';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { Reference } from '@angular/compiler/src/render3/r3_ast';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class KnittingNDyeingService {
  url1="http://localhost:3000/api/v1/knittingNdyeingType";

  constructor(private httpcall: HttpClient) { }
  knittingData:knittingNdyeing={
    referenceId:'',
    styleCode:'',
    kintting: [{
      knittingType:'',
      color: '',
      weight:'',
      row:null,
      col:null,
  }]
  }
postData(m): Observable<knittingNdyeing> {
  console.log(m);
  //console.log(m.referenceId,m.styleCode);
  return this.httpcall.post<knittingNdyeing>(this.url1+'/new/'+ m.referenceId+'/'+ m.styleCode, m , headerOption);
}
getReviewdata(a): Observable<any> {
  return this.httpcall.post<any>(this.url1 + '/all/' + a.referenceId + '/' + a.styleCode, headerOption);
}
  // update
  UpdateEntry(entry): Observable<any[]> {
    // tslint:disable-next-line: max-line-length
    return this.httpcall.post<any[]>(this.url1 + '/update/' + entry.referenceId + '/' + entry.styleCode, entry, headerOption);
  }
  // DELETE
  deleteEntry(entry: any): Observable<any[]> {
    // tslint:disable-next-line: max-line-length
    return this.httpcall.delete<any[]>(this.url1 + '/delete/' + entry.referenceId + '/' + entry.styleCode, headerOption);
  }
}
