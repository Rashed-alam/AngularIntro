import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FabricCalulation } from './fabricEntry.model';
const headerOption = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class FabricEntryService {

  url="http://localhost:3000/api/v1/fabricEntry";

  constructor(private httpcall: HttpClient) { }

  currentFabricCalc: FabricCalulation = {
    
    fabricEntry_id: null,
    mailDate: '',
    entryDate: '',
    refNo: '',
    buyer_name: '',
    style_code: '',
    style_item_name: '',
    style_sleeve_type: '',
    size: '',
    fabrics: '',
    chest: '',
    length: '',
    sleeve: '',
    waste_percentage: null,
    hood:'',
    bottom: '',
    thigh: '',
    pocket: '',
    pocket_unit_of_measurement: '',
    thigh_unit_of_measurement: '',
    bottom_unit_of_measurement: '',
    hood_unit_of_measurement: '',
    fabric_weight:'',
    length_unit_of_measurement: '',
    chest_unit_of_measurement: '',
    sleeve_unit_of_measurement: '',
    track_Id: null,
    changeUser: '',
    changeDate: '',
    event:''
  }
  getAllFabricsEntry(refNo):Observable<FabricCalulation[]>{
    return this.httpcall.post<FabricCalulation[]>(this.url+'/all/'+ refNo, headerOption);
  }
}
