import { Component, OnInit,ɵConsole  } from '@angular/core';
import {MachineCapacityModel} from 'src/app/models/machineCapacity.model';
import { MachineCapacityService} from 'src/app/services/machine-capacity.service';

@Component({
  selector: 'app-machine-capacity',
  templateUrl: './machine-capacity.component.html',
  styleUrls: ['./machine-capacity.component.css']
})
export class MachineCapacityComponent implements OnInit {

  Machine: MachineCapacityModel[];
  weightUnit: boolean = false;
  lengthUnit: boolean = false;
  showsuccessmessageforsubmitting: boolean = false;
  showeditmessage: boolean = false;
  serverErrorMessages;
  showdeletemessage: boolean = false;
  calculationButtonPressed: boolean = false;
  showDuplicateErrorMessage: boolean = false;
  machineNames : any;
  showMachineInfo: any;

  constructor(private MachineCapacity:MachineCapacityService ) { }

  ngOnInit() {
    this.clearAll();
    this.getAllMachineNames();
    this.allMachines();
  }
  //this will post entry into the database
  createEntry(machine: any){
    this.MachineCapacity.currentMachine.machineName = machine.machineName.toUpperCase();
    this.MachineCapacity.createEntry(machine)
    .subscribe(
      res => {
        if(res['Success'] == true){
          this.showsuccessmessageforsubmitting = true;
          setTimeout(() => this.showsuccessmessageforsubmitting = false, 4000);
          this.clearAll();  
        } else {
          if(res['Success'] == false){
            this.showDuplicateErrorMessage= true;
            setTimeout(() => this.showDuplicateErrorMessage = false, 4000);
          }
          else{
            console.log('server error')
          }
        }
        this.getAllMachineNames();
        this.allMachines();  
      });
  }
  //this will clear all the fields inside the form
  clearAll(){
    this.MachineCapacity.currentMachine = {
      machineName: '',
      machineGauge: null,
      machineDiameter: null,
      machineCylinderRpm: null,
      loopLength:null,
      feederNumber: null,
      yarnCount: null,
      efficiency: null,
      time:null,
      fabricLengthCapacityPerShift: null,
      fabricWeightCapacityPerShift: null
    }
    this.weightUnit = false;
  }
  //this will do all the calculation
  calculation(){
    var pi: number = 3.14;
    var result: number = 0;
    var g : number= this.MachineCapacity.currentMachine.machineGauge;
    // console.log(g);
    var d : number = this.MachineCapacity.currentMachine.machineDiameter;
    // console.log(d);
    var rpm :number = this.MachineCapacity.currentMachine.machineCylinderRpm;
    // console.log(rpm);
    var feeder: number = this.MachineCapacity.currentMachine.feederNumber;
    // console.log(feeder);
    var loop: number = this.MachineCapacity.currentMachine.loopLength;
    // console.log(loop);
    var yarn: number = this.MachineCapacity.currentMachine.yarnCount;
    // console.log(yarn);
    var eff: number = this.MachineCapacity.currentMachine.efficiency;
    var convertedEff : number = (eff/100);
    // console.log(convertedEff);

    var t: number = this.MachineCapacity.currentMachine.time;

    var convertedtime: number = (t*60);
    // console.log(convertedtime);
    this.calculationButtonPressed = true;
    //weight calculation
    result = (pi*g*d*rpm*feeder*loop*yarn*convertedEff*convertedtime)/(1000*1000*1000);
    var convertedResult;
    convertedResult = (result).toFixed(2);
    this.MachineCapacity.currentMachine.fabricWeightCapacityPerShift = convertedResult;
    this.weightUnit = true;

    //length calculation
    this.lengthUnit = true;

  }
  //getting all the names of machines into the dropdown
  getAllMachineNames(){
    this.MachineCapacity.getAllMachines()
    .subscribe(
      (data)=>{
        this.machineNames = data;
      }
    )
  }
  //getting all the information of a particular machine by selecting the machine name from the dropdown list
  SearchByMachineName(a){
    this.MachineCapacity.getAllEntriesByMachineName(a)
    .subscribe(
      (data)=>{
        this.showMachineInfo = data;
      }
    )
  }
  //delete function
  delete(p: any){
    var m = p.machineName;
    var confirmation;
    confirmation= confirm("Are you sure ?");
    if(confirmation == true){
      this.MachineCapacity.deleteEntry(p)
      .subscribe(
        (data) =>{
        this.showdeletemessage=true;
        setTimeout(()=>this.showdeletemessage=false,4000);
        this.getAllMachineNames();
        this.SearchByMachineName(m);
      });
    }
  }
  //object assigning for edit part
  edit(p: any){
    this.MachineCapacity.currentMachine = Object.assign({},p);
    this.allMachines();
  }
  //get all machines
  allMachines(){
    this.MachineCapacity.getAll()
    .subscribe(
      (data)=>{
        this.Machine = data;
        console.log(data);
      }
    )
  }
  //editing function
  updateMachine(m: MachineCapacityModel){
    this.MachineCapacity.updateEntry(m)
    .subscribe((data)=>{
      this.showeditmessage = true;
      setTimeout(()=>this.showeditmessage = false, 4000);
      this.allMachines();
      this.clearAll();
    })
  }
  //form submission function
  createAndUpdate(key: any){
    if(key._id == null){
      this.createEntry(key);
    }
    else{
      this.updateMachine(key);
    }
  }
}