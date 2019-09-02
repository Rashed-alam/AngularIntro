import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buyers } from './buyers.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable()

export class BuyersService {

  url = "http://localhost:3000/api/v1/buyer";

  currentBuyer: Buyers ={
    _id : '',
    email : '',
    house : '',
    road : '',
    sector : '',
    vatRegNo : '',
    binNo : null,
    eTin : '',
    tds : null,
    area : '',
    sisterConcern : '',
    name : '',
    mobileNo : '',
    bid : null,
    buyerId : null,
    buyerCode : null
  }

  constructor(private httpcall: HttpClient) { }

  
    //this is for fetching all the buyers from db
  getAllBuyers(): Observable<Buyers[]>{
    return this.httpcall.get<Buyers[]>(this.url+'/all', headerOption);
   
  }

  //this is for getting a certain buyer informaiton frorm database according to that ID
  getBuyerInformation(buyer: Buyers): Observable<Buyers[]>{
    return this.httpcall.get<Buyers[]>(this.url+'/'+ buyer._id, headerOption);
   
  }
  
}
