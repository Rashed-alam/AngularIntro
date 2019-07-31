import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from './location.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable()

export class LocationService {

  Url = "http://localhost:4000/location";

  currentLocation: Location = {
        
        location_name: ''
  }

  constructor(private httpcall: HttpClient) { }


  getAllLocation(): Observable<Location[]>{
    return this.httpcall.get<Location[]>(this.Url+'/all', headerOption);
  }

  
}
