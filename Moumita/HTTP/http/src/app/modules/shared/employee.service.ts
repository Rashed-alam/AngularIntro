import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee} from 'src/app/model/employee.model';

const headerOption = 
{
  headers: new HttpHeaders({'Content-Type':'application/json'})
};


@Injectable()
export class EmployeeService {

  mocUrl= 'http://localhost:3000/Employee';
  constructor(
    private http: HttpClient
  ) { }

  getAllEmployees():Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.mocUrl, headerOption);
  }
}
