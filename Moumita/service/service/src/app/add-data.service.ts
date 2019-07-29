import { Injectable } from '@angular/core';
import { getLocaleDayPeriods } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AddDataService {

  constructor() {
   }
   getSummation(){
    var x= 30;
    var y = 20;
    return x+y;

     return x+y;
   }
   getDedauction(){
    var x= 30;
    var y = 20;
    return x-y;
   }
   getMultiply(){
    var x= 30;
    var y = 20;
    return x*y;
   }
   getDivide(){
    var x= 30;
    var y = 20;
    return x/y;
   }
}
