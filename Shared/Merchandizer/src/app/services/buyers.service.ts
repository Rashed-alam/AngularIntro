import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buyers } from '../models/buyers.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable()

export class BuyersService {

  url = "http://localhost:3000/api/v1/buyer";

  currentBuyer: Buyers ={
    
    email : '',
    house : '',
    road : '',
    sector : '',
    vatRegNo : '',
    binNo : null,
    eTin : '',
    tds : null,
    nid: null,
    name : '',
    mobileNo : '',
    buyerId : null,
    buyerCode : null,
    upazila: '',
    district: ''
  }
 


  constructor(private httpcall: HttpClient) { }

  
    //this is for fetching all the buyers from db
  getAllBuyers(): Observable<Buyers[]>{
    return this.httpcall.get<Buyers[]>(this.url+'/all', headerOption);
   
  }

  //this is for getting a certain buyer informaiton frorm database according to that ID
  getBuyerInformation(buyerCode): Observable<Buyers[]>{
    return this.httpcall.get<Buyers[]>(this.url+'/'+ buyerCode, headerOption);
   
  }
  
}
