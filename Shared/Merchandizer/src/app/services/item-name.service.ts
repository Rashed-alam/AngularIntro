import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Items } from '../models/item.model';


const headerOption = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

export class ItemNameService {
  
  url = "http://localhost:3000/api/v1/item";

  constructor(private httpcall: HttpClient) { }

  currentItem: Items = {
    itemID:null,
    itemCode:'',
    itemName:'',
    parent:null,
    TopParent:null,
    LR:'',
    depth:null,
    createDate:'',
    specification:'',
    model:'',
    countryOfOrigin:'',
    importance:'',
    parts:'',
    manufacturer:'',
    categorization:'',
    maxConsump:'',
    minConsump:'',
    avgConsump:'',
    leadTime:'',
    reOrderLevel:'',
    maxStockQty:'',
    minStockQty:'',
    stafyStockQty:'',
    unitOfMeasurement:'',
    currency:'',
    avgCostPUnit:'',
    orderingCostPUnit:'',
    carryingCostPUnit:'',
    lastPurCostPUnit:'',
    QUnit:'',
    CUnit:''
  
}

  //GET ALL ITEM LIST
  getAllItemNamesList(): Observable<Items[]>{
    return this.httpcall.get<Items[]>(this.url+'/all', headerOption);
  }

  //POST NEW ITEM NAMES
  createItemEntry(a : Items): Observable<Items> {
    return this.httpcall.post<Items>(this.url+'/insert', a , headerOption);
  }


  
}
