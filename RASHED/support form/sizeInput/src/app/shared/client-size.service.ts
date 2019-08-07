import { size } from './size.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClientSizeService {
  url='http://localhost:3000/api'
  constructor(private httpcall: HttpClient) { }
 
  currentSize: size ={
    size_name: '',
    size_id: null
  };

  getsizeid() {
    return this.httpcall.get(this.url + '/', headerOption);
  }


  getallsize(): Observable<size[]> {
    return this.httpcall.get<size[]>(this.url + '/all', headerOption);
  }
  createPost(a:any): Observable<size[]> {
    
    return this.httpcall.post<size[]>(this.url +'/new', a, headerOption);
   }
   deletesize(id):Observable<size[]>{
    return this.httpcall.delete<size[]>(this.url+'/delete/'+ id,headerOption);
  }
  updatepost(a:any): Observable<size> {
    return this.httpcall.put<size>(this.url+'/edit/'+a._id,a,headerOption)
  }
}
