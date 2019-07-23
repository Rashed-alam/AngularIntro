import { User } from './UserModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';




const headerOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};



@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(  private http: HttpClient ) { }


    _url: string = 'http://localhost:3000/Userapi/users';
    
  
    currentUser: User = {
      _id: null,
      firstname: '',
      lastname: '',
      contact: null,
      password:'',
      gender: ''
    }
  
  
  
    // getAlluser():Observable<User> {
    //   return this.http.get<User>(this._url, headerOptions);
    // }
    // deleteUser(_id: any): Observable<User> {
    //   return this.http.delete<User>(this._url +'/'+_id,headerOptions);
    // }
    createUser(emp: User): Observable<User> {
      return this.http.post<User>(this._url+'/', emp, headerOptions);
    }
    // updateUser(emp: User): Observable<User> {
    //   return this.http.put<User>(this._url + '/' +emp._id, emp, headerOptions);
    // }
}
