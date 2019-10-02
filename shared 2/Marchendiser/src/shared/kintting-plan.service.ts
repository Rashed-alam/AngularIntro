
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { MachineCapacityModel } from './../app/models/machineCapacity.model';
import { knittingTypeModel } from './../app/models/knittingType.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class KinttingPlanService {
  url1 = 'http://localhost:3000/api/v1/knittingType';
 // url2 = 'http://localhost:3000/api/v1/knittingType';

  constructor(private httpcall: HttpClient) { }
  machine:MachineCapacityModel={
    machineName: '',
    machineGauge: null,
    machineDiameter: null,
    machineCylinderRpm: null,
    loopLength: null,
    feederNumber: null,
    yarnCount: null,
    efficiency: null,
    knitting: '',
    time: null,

  };
  knitting:knittingTypeModel={
    knittingType: '',
    knitting_id: '',
  }

getallmachinedata():Observable<any[]> {
  return this.httpcall.get<any[]>(this.url1 + '/allMachine', headerOption);
}
getallknittingdata():Observable<any[]> {
  return this.httpcall.get<any[]>(this.url1 + '/all', headerOption);
}

}

