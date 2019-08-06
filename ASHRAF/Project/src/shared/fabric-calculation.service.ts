import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FabricCalulation } from './fabricCalculation.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable()
export class FabricCalculationService {

  url="http://localhost:3000/api/v1/fabricCalculation"

  constructor(private httpcall: HttpClient) { }



}
