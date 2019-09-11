import { Currency } from '../models/currency.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  Url = "http://localhost:3000/api/v1/currency"
  currentCurrency: Currency = {
    currencyName: '',
    currencySign: ''
  }

  constructor(private httpcall: HttpClient) { }
  getAllCurrency(): Observable<Currency[]> {
    return this.httpcall.get<Currency[]>(this.Url + '/all', headerOption);
  }
}