import { Injectable } from '@angular/core';
import { SizeList } from '../models/sizelist.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable()

export class SizelistService {

  url = "http://localhost:3000/api/v1/sizelist";

  currentSizeList : SizeList  = {
    size_id: '',
    size_name: ''
  }

  constructor(private httpcall: HttpClient) { }

  getSizeid(){
    return this.httpcall.get(this.url+'/', headerOption);
  }

  getAllSizeList(): Observable<SizeList[]>{
    return this.httpcall.get<SizeList[]>(this.url+'/all', headerOption);
   
  }
  createSize(object : SizeList): Observable<SizeList> {
    return this.httpcall.post<SizeList>(this.url+'/new', object , headerOption);
  }
}
