import { Injectable } from '@angular/core';
import { UoM } from '../models/unitofmeasurement.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable()
export class UnitofmeasurementService {

  url = "http://localhost:3000/api/v1/uom";

  currentUoM : UoM = {
    Uom_id: '',
    Uom_name: ''
  }
  constructor(private httpcall: HttpClient) { }

  getAllUoM(): Observable<UoM[]>{
    return this.httpcall.get<UoM[]>(this.url+'/all', headerOption);
   
  }
  // createSize(object : UoM): Observable<UoM> {
  //   return this.httpcall.post<UoM>(this.url+'/new', object , headerOption);
  // }

  

}
