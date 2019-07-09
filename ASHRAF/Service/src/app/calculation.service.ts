import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor() { }


  public add(...params: number[]): number {
    let result = 0;
    for (let val of params) { //main function to do the calculation
        result += val;
    }
    return result;
  }
}
