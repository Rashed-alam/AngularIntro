import { PriceCalculationService } from './../shared/price-calculation.service';
import { PriceCalculation } from './../shared/fabricCalculation.model';
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
  allfab: any;
  ref: any;
  public x: any;
  a;
  BoysTshirtSelected: boolean = false;
  JacketSelected: boolean = false;
  ShortsSelected: boolean = false;

  constructor(private DP: DatePipe, private Fc: FabricEntryService,public Pc:PriceCalculationService) { }

  ngOnInit() {
    //get ref from local storage
    //send it as a parameter in getnewPost method
  }
  onEnter(value: any) {
    this.ref = value;
    //console.log(this.ref);
    this.getnewpost(this.ref);

    //console.log(this.a);

  }
  getnewpost(a) {
    this.Fc.getAllFabricsEntry(a)
      .subscribe((data: FabricCalulation[]) => {
        this.allfab = data;
        console.log(this.allfab);
        this.Fc.currentFabricCalc.mailDate = this.allfab[0].mailDate;
        this.Fc.currentFabricCalc.entryDate = this.allfab[0].entryDate;
        this.Fc.currentFabricCalc.fabricEntry_id = this.allfab[0].fabricEntry_id;
        this.Fc.currentFabricCalc.calculation_id = this.allfab[0].calculation_id;
        this.Fc.currentFabricCalc.buyer_name = this.allfab[0].buyer_name;
        this.Fc.currentFabricCalc.style_code = this.allfab[0].style_code;
        this.Fc.currentFabricCalc.style_item_name = this.allfab[0].style_item_name;
        this.Fc.currentFabricCalc.size = this.allfab[0].size;
        this.Fc.currentFabricCalc.fabrics = this.allfab[0].fabrics;
        this.Fc.currentFabricCalc.chest = this.allfab[0].chest;
        this.Fc.currentFabricCalc.length = this.allfab[0].length;
        this.Fc.currentFabricCalc.sleeve = this.allfab[0].sleeve;
        this.Fc.currentFabricCalc.hood = this.allfab[0].hood;
        this.Fc.currentFabricCalc.bottom = this.allfab[0].bottom;
        this.Fc.currentFabricCalc.thigh = this.allfab[0].thigh;
        this.Fc.currentFabricCalc.pocket = this.allfab[0].pocket;
        this.Fc.currentFabricCalc.pocket = this.allfab[0].pocket;
        this.Fc.currentFabricCalc.fabric_weigh = this.allfab[0].fabric_weigh;
        this.a = this.Fc.currentFabricCalc.style_item_name
        this.selectSwitch(this.a);
        //console.log(this.a);
      }
      )
    //  this.Fc.currentFabricCalc.mailDate=this.allfab[0].mailDate;
    //  console.log(  this.Fc.currentFabricCalc.mailDate);


  }

  calculate(){
    var FabricAmount: any= 0; //waste percentage
    var FabricUnitPrice: any= 0;
    var FabricTotalPrize: any= 0 ;
    var Rib: any = 0;
    var CM: any= 0;
    var TRIM: any = 0;
    var Print: any = 0;
    var Doc: any = 0;
    var Fa;
    var step2;
    
    
     this.Pc.calculatePrice.fabric_weight=this.Fc.currentFabricCalc.fabric_weigh;
     FabricAmount = this.Pc.calculatePrice.fabric_weight;
     FabricUnitPrice = this.Pc.calculatePrice.fabric_unit_price;

     var step1 : any = 0;
     step1 = (parseInt(FabricAmount)*parseInt(FabricUnitPrice));

   
    this.Pc.calculatePrice.fabric_total_price= step1;
   
    Rib = this.Pc.calculatePrice.rib;
    TRIM = this.Pc.calculatePrice.trim;
    CM = this.Pc.calculatePrice.cm;
    Print = this.Pc.calculatePrice.print;
    Doc = this.Pc.calculatePrice.doc;
    //console.log(this.Pc.calculatePrice.fabric_unit_price);
    //console.log(this.Pc.calculatePrice);
    console.log(FabricAmount);
    //this part is for calculating the boys tshirt fabric
    var step1 : any = 0;
    step1 = (parseInt(FabricAmount)*parseInt(FabricUnitPrice));

     //console.log(step1);
    // var step2 : any= 0;
    // step2 =((step1*parseInt(chestsize)*2*parseInt(fabricsize))/(Math.pow(10,7)))*12;
    // console.log("Step 2:"+step2);
    // var step3: any = 0;
    // step3 = (((wastePercentage)/100)*step2);
    // console.log("Step 3:"+ step3);
    // var step4: any = 0;
    // step4 = (step2 + step3);
    // var convertoFloat; 
    // convertoFloat = parseFloat(step4).toFixed(5);
    // this.fabricWeight = convertoFloat +" Kg/per dozen";//main answer for fabric calculation
    // console.log("Step 4:"+ this.fabricWeight);
    // //end of fabric calculation of boys tshirt
  }

  selectSwitch(a) {
    console.log(a);
    this.x = a;
    if (this.x == "BoysS/Slv Tshirt") {
      this.BoysTshirtSelected = true;
      this.JacketSelected = false;
      this.ShortsSelected = false;
    }
    else if (this.x == "Jacket") {
      this.BoysTshirtSelected = false;
      this.JacketSelected = true;
      this.ShortsSelected = false;
    }
    else {
      this.BoysTshirtSelected = false;
      this.JacketSelected = false;
      this.ShortsSelected = true;
    }
  }


}
