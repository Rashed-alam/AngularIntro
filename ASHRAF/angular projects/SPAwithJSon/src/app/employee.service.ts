import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable()

export class employeelist {

  Url = "http://localhost:3000/Employee/";

  currentEmployee: Employee = {
        id: null,
        fullname : '',
        email : '',
        department : '',
        contact : null,
        address : ''
  }

  constructor(private httpcall: HttpClient) { }


  getAllEmployees(): Observable<Employee[]>{
    return this.httpcall.get<Employee[]>(this.Url, headerOption);
  }

  deleteThisEmployee(id: number): Observable<Employee>{
    return this.httpcall.delete<Employee>(this.Url+ id, headerOption);
 }

 createEmployee(emp : Employee): Observable<Employee> {
  return this.httpcall.post<Employee>(this.Url, emp , headerOption);
}
updateEmployee(emp : Employee): Observable<Employee> {
  return this.httpcall.put<Employee>(this.Url+ emp.id, emp, headerOption);
}
}
