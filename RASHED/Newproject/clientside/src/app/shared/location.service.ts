import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { location } from './location.model';



const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class LocationService {
  Url = "http://localhost:3000/location";

  currentLocation: location = {
    location_name: ''
  }

  constructor(private httpcall: HttpClient) { }

  getAllLocation(): Observable<location[]> {
    return this.httpcall.get<location[]>(this.Url + '/all', headerOption);
  }



}
