import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FabricType } from './fabric-type.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable()

export class FabricTypeService {

  url = "http://localhost:3000/api/v1/fabrictype";

  constructor(private httpcall: HttpClient) { }


  currentFabricType : FabricType = {
    fabric_id : null,
    fabric_name : ''
  }

  getAllFabricsType(): Observable<FabricType[]>{
    return this.httpcall.get<FabricType[]>(this.url+'/all', headerOption);
   
  }
}
