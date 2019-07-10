import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};



@Injectable()
export class EmployeeService {
 
  Url = "http://localhost:3000/Employee";

  constructor(private httpcall: HttpClient) { }

  getAllEmployees(): Observable<Employee[]>{
    return this.httpcall.get<Employee[]>(this.Url, headerOption);
  }

}
