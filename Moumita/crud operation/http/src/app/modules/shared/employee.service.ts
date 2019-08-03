import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee} from 'src/app/model/employee.model';

const headerOption = 
{
  headers: new HttpHeaders({'Content-Type':'application/json'})
};


type NewType = Employee;

@Injectable()
export class EmployeeService {

  mocUrl= 'http://localhost:4000/Employee';

  currentEmployee: NewType = {
    firstName: '',
    lastName: '',
    Address: '',
    id: null,
    email:'',
    Phone: null
  }

  constructor(
    private http: HttpClient
  ) { }

  getAllEmployees():Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.mocUrl, headerOption);
  }
  deletEmployee(id: number): Observable<Employee>{
    return this.http.delete<Employee>(this.mocUrl + '/' + id, headerOption);
  }
  createEmployee(emp: Employee): Observable<Employee>
  {
    return this.http.post<Employee>(this.mocUrl, emp, headerOption);
  }
  updateEmployee(emp: Employee): Observable<Employee>
  {
    return this.http.put<Employee>(this.mocUrl + '/' + emp.id, emp, headerOption);
  }
  
}
