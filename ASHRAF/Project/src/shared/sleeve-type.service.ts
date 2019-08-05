import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sleeves } from './sleeves.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable()
export class SleeveTypeService {

  url = "http://localhost:3000/api/v1/sleevetype";

  constructor(private httpcall: HttpClient) { }

  currentSleeve : Sleeves = {
    Sleeve_id : '',
    Sleeve_name : ''
  }

  getAllSleevesType(): Observable<Sleeves[]>{
    return this.httpcall.get<Sleeves[]>(this.url+'/all', headerOption);
   
  }
}
