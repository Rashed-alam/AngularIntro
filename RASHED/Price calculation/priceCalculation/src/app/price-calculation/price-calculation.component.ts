import { CurrencyService } from './../shared/currency.service';
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
  allprice: any;
  ref: any;
  public x: any;
  public calcId: any;
  a;
  BoysTshirtSelected: boolean = false;
  JacketSelected: boolean = false;
  ShortsSelected: boolean = false;
  showsuccessmessage: boolean;
  serverErrorMessages: any;
  showdeletemessage: boolean;
  showupdatemessage: boolean;
  today: any = Date.now();
  archievedate: any = Date.now();
  changeUser = "rashed";
  changeDate = this.today;
  deleteevent = "delete";
  editevent = "edit";
  b_old;
  newcurrency;
  setcurrency;



constructor(private DP: DatePipe, private Fc: FabricEntryService, public Pc: PriceCalculationService,public CU:CurrencyService) { }

  ngOnInit() {
    const datewithtime = this.DP.transform(this.archievedate, "medium");
    this.archievedate = datewithtime;
    this.getId();
    this.getPrice();
    this.getCurrencylist();
    this.setcurrency='USD';
    this.Pc.calculatePrice.PriceCurrency_UOM=this.setcurrency;
    console.log(this.Pc.calculatePrice.PriceCurrency_UOM);
  }
  getCurrencylist(): void {
    this.CU.getAllCurrency()
      .subscribe(data => {
        this.newcurrency = data;
        //console.log(data);
      })
  
  }
  setCurrency(w){
this.setcurrency=w;
this.Pc.calculatePrice.PriceCurrency_UOM=this.setcurrency;
console.log(this.Pc.calculatePrice.PriceCurrency_UOM);
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

  calculate() {
    var FabricAmount: any = 0; //waste percentage
    var FabricUnitPrice: any = 0;
    var FabricTotalPrize: any = 0;
    var Rib: any = 0;
    var CM: any = 0;
    var TRIM: any = 0;
    var Print: any = 0;
    var Doc: any = 0;
    var Fa;
    var step1: any = 0;
    var step2;
    var step3: any = 0;



    this.Pc.calculatePrice.fabric_weight = this.Fc.currentFabricCalc.fabric_weigh;
    FabricAmount = this.Pc.calculatePrice.fabric_weight;
    FabricUnitPrice = this.Pc.calculatePrice.fabric_unit_price;


    step1 = (parseFloat(FabricAmount) * parseFloat(FabricUnitPrice));


    this.Pc.calculatePrice.fabric_total_price = step1;
    console.log(this.Pc.calculatePrice.fabric_total_price);

    Rib = this.Pc.calculatePrice.rib;
    TRIM = this.Pc.calculatePrice.trim;
    CM = this.Pc.calculatePrice.cm;
    Print = this.Pc.calculatePrice.print;
    Doc = this.Pc.calculatePrice.doc;
    //console.log(this.Pc.calculatePrice);
    step2 = (step1 + parseFloat(Rib) + parseFloat(TRIM) + parseFloat(CM) + parseFloat(Print) + parseFloat(Doc)).toFixed(3);
    this.Pc.calculatePrice.per_dozen_price = step2;
    step3 = (step2 / 12).toFixed(3);
    this.Pc.calculatePrice.per_unit_price = step3;
  }
 
  getPrice() {
    this.Pc.getallprice().subscribe(
      (data) => {
        this.allprice = data;
        console.log(this.allprice);
      }
    );

  }


  getId() {

    this.Pc.getCalculationid()
      .subscribe(
        res => {
          this.calcId = res['calculation_id'];

          console.log(this.calcId);
        },
        err => {
          console.log(err);

        }
      );
  }

  createAndUpdate(a: any) {
    // console.log(currentEmployee);
    if (a._id != null) {
      //console.log('update');
      this.updateprice(a);
    } else {
      console.log('create');
      this.create(a);
    }
    this.getPrice();
    this.clearAll();
  }



  create(a) {
    this.Pc.createPost(a).subscribe(
      res => {

        console.log('created');
        this.showsuccessmessage = true;
        setTimeout(() => this.showsuccessmessage = false, 4000);

      },
      err => {

        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else {
          this.serverErrorMessages = 'Something went wrong.Please contact admin';
        }
      }
    );
    this.getPrice();
    this.clearAll();
  }

  edit(a) {
    this.Pc.calculatePrice = Object.assign({}, a);
    this.getPrice();
    this.b_old = a;
  }

  //delete and store in archive
  del(p: any) {
    // console.log('check='+_id);
    p.changeUser = this.changeUser;
    p.changeDate = this.archievedate;
    p.event = this.deleteevent;
    this.Pc.createpriceArchive(p).subscribe(res => {
      this.Pc.deleteprice(p._id).subscribe(
        res => {
          console.log('ok');
          this.showdeletemessage = true;
          setTimeout(() => this.showdeletemessage = false, 4000);
        },
      );
    });

    this.getPrice();
  }



  updateprice(n) {
    this.calculate();
    this.b_old.changeUser = this.changeUser;
    this.b_old.changeDate = this.archievedate;
    this.b_old.event = this.editevent;
    this.b_old._id = null;
   
    this.Pc.createpriceArchive(this.b_old).subscribe(res=>{
      this.Pc.updateprice(n).subscribe(
        res => {
  
          console.log(res);
          this.showupdatemessage = true;
          setTimeout(() => this.showupdatemessage = false, 4000);
          this.getPrice();
        },
        err => {
  
          if (err.status === 422) {
            this.serverErrorMessages = err.error.join('<br/>');
          }
          else {
            this.serverErrorMessages = 'Something went wrong.Please contact admin';
          }
        }
      );

    });
    this.getPrice();
    this.clearAll();

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

  clearAll() {
    this.Pc.calculatePrice = {
      fabric_unit_price: '',
      fabric_weight: '',
      fabric_total_price: '',
      rib: '',
      cm: '',
      trim: '',
      print: '',
      doc: '',
      PriceCurrency_UOM:'USD',
      per_dozen_price: '',
      per_unit_price: '',
      track_Id: null,
      changeUser: '',
      changeDate: '',
      event: ''

    };
  }

}
