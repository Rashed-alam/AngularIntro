import { Employee } from './Emodel';
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
export class EmployeeService {
  _url: string = 'http://localhost:3000/api/ninjas';
  

  currentEmployee: Employee = {
    _id: null,
    firstname: '',
    lastname: '',
    designation: '',
    contact: null,
    address: ''
  }


  constructor(
    private http: HttpClient 
  ) { }

  getAllEmployees():Observable<Employee> {
    return this.http.get<Employee>(this._url, headerOptions);
  }
  deleteEmployee(_id: any): Observable<Employee> {
    return this.http.delete<Employee>(this._url +'/'+_id,headerOptions);
  }
  createEmployee(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(this._url+'/', emp, headerOptions);
  }
  updateEmployee(emp: Employee): Observable<Employee> {
    return this.http.put<Employee>(this._url + '/' +emp._id, emp, headerOptions);
  }
}
