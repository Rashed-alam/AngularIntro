import { Component, OnInit } from '@angular/core';
import { FabricPriceServiceService } from 'src/app/services/fabric-price-service.service';
import { KinttingPlanService } from 'src/shared/kintting-plan.service';

@Component({
  selector: 'app-knitting-form-plan',
  templateUrl: './knitting-form-plan.component.html',
  styleUrls: ['./knitting-form-plan.component.css']
})
export class KnittingFormPlanComponent implements OnInit {
  AllReference: any[];
  totalweight;
  knittingType: any[];
  machine: any[];
  availableMachine: any = [];
  MachineInfo: any = [];
  hiddenCard1: boolean = false;
  hiddenCard2: boolean = false;

  constructor(public Fc: FabricPriceServiceService, public kc: KinttingPlanService) { }

  ngOnInit() {
    this.getAllReference();
    this.getallknittingType();
    this.getallmachinedata();
  }
  // reference gula dropdown a add  
  getAllReference() {
    this.Fc.getAllref()
      .subscribe(
        (data) => {
          this.AllReference = data;
        });

  }
  // total weight nie ashbe
  gettotalWeight(a) {
    this.Fc.gettotalweight(a).subscribe(
      (data) => {
        this.totalweight = data['totalweight'];
        // console.log(this.totalweight.totalweight);
        console.log(this.totalweight);
      }
    );
  }
  // knitting type data
  getallknittingType() {
    this.kc.getallknittingdata().subscribe(
      (data) => {
        this.knittingType = data;
        // console.log(this.totalweight.totalweight);
        console.log(this.knittingType);
      }
    );
  }
  // machine data
  getallmachinedata() {
    this.kc.getallmachinedata().subscribe(
      (data) => {
        this.machine = data;
        // console.log(this.totalweight.totalweight);
        console.log(this.machine);
      }
    );
  }
  getavailableMachine(a) {
    //  console.log(a);
    //  console.log(this.machine.length);
    this.hiddenCard1 = true;
    this.availableMachine = [];
    for (let i = 0; i < this.machine.length; i++) {
      // console.log(this.machine[i]);
      if (this.machine[i].knitting === a) {
        let k = this.machine[i];
        this.availableMachine.push(k);
        console.log(this.availableMachine);
      }
    }
    // console.log(this.availableMachine);
  }
  getMachine(m) {
    this.hiddenCard2 = true;
    this.MachineInfo=[];
    for (let i = 0; i < this.machine.length; i++) {
      // console.log(this.machine[i]);
      if (this.machine[i].machineName === m) {
        let k = this.machine[i];
        this.MachineInfo.push(k);
        console.log(this.MachineInfo);
      }
    }
    console.log(m);
  }
}
