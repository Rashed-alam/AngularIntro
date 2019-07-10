import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  public sal = [];
  constructor() { }

  getEmployee(){
    return [
      {'id': 1, 'name': 'A' , 'age': 25 , 'salary': 2000 },
      {'id': 2, 'name': 'B' , 'age': 25 , 'salary': 1000 },
      {'id': 3, 'name': 'C' , 'age': 25 , 'salary': 2500 },
      {'id': 4, 'name': 'D' , 'age': 25 , 'salary': 3000 },
      {'id': 5, 'name': 'E' , 'age': 25 , 'salary': 4000 },
    ];
  }

  getEmpoyeeSalaryWithTax(){
    this.sal = this.getEmployee();
    for(var ind in this.sal)
    {
      this.sal[ind].salary = this.sal[ind].salary - (this.sal[ind].salary * 0.1);
    }
    return this.sal;
  }
}
