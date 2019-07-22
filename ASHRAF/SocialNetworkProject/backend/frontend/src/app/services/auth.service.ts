import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';



@Injectable()
export class AuthService {

  domain = "http://localhost:3100"; 

  constructor(private http: HttpClient) { }

   // Function to register user accounts
   registerUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.domain + '/users/newuser', user,{headers: headers});
  }


}
