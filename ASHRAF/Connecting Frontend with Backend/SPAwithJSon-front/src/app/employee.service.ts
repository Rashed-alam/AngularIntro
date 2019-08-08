import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable()

export class employeelist {

  Url = "http://localhost:3100/chips/";

  currentEmployee: Employee = {
        _id:'',
        fullname : '',
        email : '',
        department : '',
        contact : null,
        address : ''
  }

  constructor(private httpcall: HttpClient) { }


  getAllEmployees(): Observable<Employee[]>{
    return this.httpcall.get<Employee[]>(this.Url+'allchips', headerOption);
  }

  deleteThisEmployee(_id: any): Observable<Employee>{
    return this.httpcall.delete<Employee>(this.Url+'deletechips/'+ _id, headerOption);
 }

 createEmployee(emp : Employee): Observable<Employee> {
  return this.httpcall.post<Employee>(this.Url+'newchips', emp , headerOption);
}
updateEmployee(emp : Employee): Observable<Employee> {
  return this.httpcall.put<Employee>(this.Url+'editchips/'+ emp._id, emp, headerOption);
}
}
