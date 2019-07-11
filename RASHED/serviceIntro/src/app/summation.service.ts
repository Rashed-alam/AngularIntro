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
  private _url:string="http://localhost:3000/user";

  constructor(private http:HttpClient) { }
 
 
  public show():Observable<CUser[]>
   {
  return this.http.get<CUser[]>(this._url);
   }



   public add (userN) {
     console.log('service='+JSON.stringify(userN));
    // return null;
    return this.http.post('http://localhost:3000/user', userN, httpOptions);
    //posting to the server
      
  }
}
   