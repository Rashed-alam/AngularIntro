import { CUser } from './user';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};



@Injectable({
  providedIn: 'root'
})
export class SummationService {
  private _url:string="https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }
 
 
  public show():Observable<CUser[]>
   {
  return this.http.get<CUser[]>(this._url);
   }



   public add (userN:CUser): Observable<CUser> {
    return this.http.post<CUser>(this._url, userN, httpOptions);
    //posting to the server
      
  }
}
   