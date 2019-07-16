import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { IEmployee } from './employees';
import { Observable } from 'rxjs';
import { Todos } from './todos';

//post data configuration
//telling server data type
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

 

  //url for data
  private _urlemp:string = "assets/data/employees.json";
   private _urlemp1:string = "http://localhost:3000/https://jsonplaceholder.typicode.com/posts";
  private _urltodo:string = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) { }

  //get method for employee list
  getEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._urlemp1);
  }

  //get method for todo list
  getTodosList(): Observable<Todos[]> {
    return this.http.get<Todos[]>(this._urltodo);
  }
  
  //post method for sending employee data to employees.json
  addList(tolist: Todos):Observable<Todos> {
    return this.http.post<Todos>(this._urlemp1, tolist, httpOptions);
  }


}
