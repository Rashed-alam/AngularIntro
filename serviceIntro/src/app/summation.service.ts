import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SummationService {

  constructor() { }
  public add(x,y):number {
    let result = 0;
   result=x+y;
    return result;
  }


  coins= [
    {id: 1, name: 'BTC'},
    {id: 2, name: 'XRP'},
    {id:3,  name:'XTC'}
  ];
  getMyItems()
  {
    return this.coins;
  }

}

