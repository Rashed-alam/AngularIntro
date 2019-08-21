import { FabricCalulation } from './../shared/fabricEntry.model';
import { FabricEntryService } from './../shared/fabric-entry.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-price-calculation',
  templateUrl: './price-calculation.component.html',
  styleUrls: ['./price-calculation.component.css']
})
export class PriceCalculationComponent implements OnInit {
  allfab :any;
  ref :any;
  public x:any;
  a;
  BoysTshirtSelected: boolean = false; 
  JacketSelected: boolean = false;
  ShortsSelected: boolean = false;

  constructor(private DP: DatePipe,private Fc:FabricEntryService) { }

  ngOnInit() {
  
  }
  onEnter(value:any){
    this.ref= value;
    //console.log(this.ref);
    this.getnewpost(this.ref);
   
    //console.log(this.a);
   
  }
  getnewpost(a){
    this.Fc.getAllFabricsEntry(a)
    .subscribe((data : FabricCalulation[])=> {
      this.allfab=data;
      //console.log(this.allfab);
      this.Fc.currentFabricCalc.mailDate=this.allfab[0].mailDate;
      this.Fc.currentFabricCalc.entryDate=this.allfab[0].entryDate;
      this.Fc.currentFabricCalc.fabricEntry_id=this.allfab[0].fabricEntry_id;
      this.Fc.currentFabricCalc.buyer_name=this.allfab[0].buyer_name;
      this.Fc.currentFabricCalc.style_code=this.allfab[0].style_code;
      this.Fc.currentFabricCalc.style_item_name=this.allfab[0].style_item_name;
      this.Fc.currentFabricCalc.size=this.allfab[0].size;
      this.Fc.currentFabricCalc.fabrics=this.allfab[0].fabrics;
      this.Fc.currentFabricCalc.chest=this.allfab[0].chest;
      this.Fc.currentFabricCalc.length=this.allfab[0].length;
      this.Fc.currentFabricCalc.sleeve=this.allfab[0].sleeve;
      this.Fc.currentFabricCalc.hood=this.allfab[0].hood;
      this.Fc.currentFabricCalc.bottom=this.allfab[0].bottom;
      this.Fc.currentFabricCalc.thigh=this.allfab[0].thigh;
      this.Fc.currentFabricCalc.pocket=this.allfab[0].pocket;
      this.Fc.currentFabricCalc.style_sleeve_type=this.allfab[0].style_sleeve_type;
      this.a=this.Fc.currentFabricCalc.style_item_name
      this.selectSwitch(this.a);
      //console.log(this.a);
    }
     )
    //  this.Fc.currentFabricCalc.mailDate=this.allfab[0].mailDate;
    //  console.log(  this.Fc.currentFabricCalc.mailDate);

  
  }
  selectSwitch(a){
    console.log(a);
    this.x = a;
    if(this.x == "BoysS/Slv Tshirt"){
        this.BoysTshirtSelected = true;
        this.JacketSelected = false;
        this.ShortsSelected = false;
    }
    else if(this.x =="Jacket"){
      this.BoysTshirtSelected = false;
        this.JacketSelected = true;
        this.ShortsSelected = false;
    }
    else{
      this.BoysTshirtSelected = false;
        this.JacketSelected = false;
        this.ShortsSelected = true;
    }   
  }


}
