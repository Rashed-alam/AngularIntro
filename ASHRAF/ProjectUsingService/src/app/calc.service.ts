import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }

  public add(...params: number[]): number {
    let result = 0;
    for (let val of params) {
        result += val;
    }
    return result;
  }
}
