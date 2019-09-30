import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { MachineCapacityModel } from 'src/app/models/machineCapacity.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable()
export class MachineCapacityService {

  url1="http://localhost:3000/api/v1/MachineCapacity";

  constructor(private httpcall: HttpClient) { }


  currentMachine: MachineCapacityModel = {
    machine_id: null,
    machineName: '',
    machineGauge: null,
    machineDiameter: null,
    machineCylinderRpm: null,
    loopLength:null,
    feederNumber: null,
    yarnCount: null,
    efficiency: null,
    time:null,
    knitting:'',
    fabricLengthCapacityPerShift: null,
    fabricWeightCapacityPerShift: null
  }
    
    //POST
    createEntry(machine : MachineCapacityModel): Observable<MachineCapacityModel> {
      return this.httpcall.post<MachineCapacityModel>(this.url1+'/post', machine , headerOption);
    }

     //GET MACHINE's INFORMATION BY SELECTING MACHINE NAME FROM DROPDOWN LIST
     getAllEntriesByMachineName(machine_id): Observable<MachineCapacityModel[]>{
      return this.httpcall.post<MachineCapacityModel[]>(this.url1+'/all/'+ machine_id, headerOption);
    }

    //EDIT
    updateEntry(entry: MachineCapacityModel): Observable<MachineCapacityModel[]> {
      return this.httpcall.put<MachineCapacityModel[]>(this.url1+'/edit/'+ entry.machine_id, entry, headerOption);
    }
    //DELETE
    deleteEntry(entry){
      return this.httpcall.delete(this.url1+'/delete/'+ entry.machine_id, headerOption);
    }
    //GET all Machines 
    getAll(): Observable<MachineCapacityModel[]>{
      return this.httpcall.get<MachineCapacityModel[]>(this.url1+'/allMachineDetails', headerOption);
    }
  //get machine_id from database
    getMachine_Id(){
    return this.httpcall.get(this.url1+'/id', headerOption);
  }

}
