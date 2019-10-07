import { Component, OnInit, ɵConsole } from '@angular/core';
import { FabricPriceServiceService } from 'src/app/services/fabric-price-service.service';
import { FabricPriceModel } from 'src/app/models/fabric-price.model';
import { Buyers } from 'src/app/models/buyers.model';
import { BuyersService } from 'src/app/services/buyers.service';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { SizelistService } from 'src/app/services/sizelist.service';
import { SizeList } from 'src/app/models/sizelist.model';
import { FabricType } from 'src/app/models/fabric-type.model';
import { ItemNameService } from 'src/app/services/item-name.service';
import { FabricTypeService } from 'src/app/services/fabric-type.service';
import { Items } from 'src/app/models/item.model';
import { UnitofmeasurementService } from 'src/app/services/unitofmeasurement.service';
import { UoM } from 'src/app/models/unitofmeasurement.model';
import { CurrencyService } from 'src/app/services/currency.service';
import { all } from 'q';


@Component({
  selector: 'app-fabric-price',
  templateUrl: './fabric-price.component.html',
  styleUrls: ['./fabric-price.component.css']
})
export class FabricPriceComponent implements OnInit {

  allEntry: FabricPriceModel[];
  today: any = Date.now();
  autoID: any;
  allBuyers: Buyers[];
  allSize: SizeList[];
  allFabricType: FabricType[];
  allItems: Items[];
  BoysTshirtSelected: boolean = false;
  JacketSelected: boolean = false;
  ShortsSelected: boolean = false;
  allUoM: UoM[];
  newcurrency;
  setcurrency;
  showsuccessmessageforsubmitting: boolean = false;
  serverErrorMessages: any = false;
  showdeletemessage: boolean = false;
  showeditmessage: boolean = false;
  allReference: any;
  entryShowList: any;
  temporaryDataStorage: any;
  hiddingrefIdandStyleCode: boolean = false;

  constructor(public FabPriService: FabricPriceServiceService,
              private DP: DatePipe,
              private Bs:BuyersService,
              private Sl: SizelistService,
              private ft: FabricTypeService,
              private In: ItemNameService,
              private Ums:UnitofmeasurementService,
              public CU: CurrencyService,
              ) { }

  ngOnInit() {
    const present = this.DP.transform(this.today, "dd-MM-yyyy");
    this.today = present;
    this.getAutoGeneratedID();
    this.getAllBuyersList();
    this.getAllSize();
    this.getAllFabrics();
    this.getAllItems();
    this.getAllUms();
    this.getCurrencylist();
    //this.getReferences();
    this.clearAll();
  }
 

  create(entry: any){
    this.FabPriService.currentEntry.fabricPriceInformation[0].styleCode = entry.fabricPriceInformation[0].styleCode.toUpperCase();
    this.FabPriService.createEntry(entry)
    .subscribe(
      res => {
        this.showsuccessmessageforsubmitting = true;
        setTimeout(() => this.showsuccessmessageforsubmitting = false, 4000);
        this.hiddingrefIdandStyleCode = true;
        //this.softClear();
        //this.getReferences();
        // this.router.navigateByUrl('/price');
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = "";
      });
  }
  //UPDATE FUNCTION
  update(entry: any){
 
    this.FabPriService.updateEntry(entry)
    .subscribe((res)=>{
      this.showeditmessage=true;
      this.clearAll();
      setTimeout(()=>this.showeditmessage=false,4000);
     // console.log(res);
    });
  }

  //ASSIGNING OBJECT FROM DATABASE TO THE FRONTEND FORM
  // onedit(entry: any){
  //   this.hiddingrefIdandStyleCode = true;
  //   this.FabPriService.getByStyleCode(entry)
  //   .subscribe((res)=>{
  //     this.temporaryDataStorage = res;
  //     // console.log(res);
  //     this.FabPriService.currentEntry = Object.assign({},this.temporaryDataStorage[0]);
  //     this.FabPriService.currentEntry.fabricPriceInformation[0] = Object.assign({},this.temporaryDataStorage[0].fabricPriceInformation);
  //     // console.log(this.FabPriService.currentEntry);
  //   });
    
  // }
  //DELETE FUNCTION
  ondelete(item: any){
    var confirmation;
    confirmation= confirm("Are you sure ?");
    if(confirmation == true){
      this.FabPriService.deleteEntry(item).subscribe((data) =>{
        this.showdeletemessage=true;
        setTimeout(()=>this.showdeletemessage=false,4000);
        //this.getReferences();
        
        
      });
     }
  }
  //this part is for fetching the AutoGenerated ID from the database
  getAutoGeneratedID() {
    this.FabPriService.getFabricEntry_ID()
    .subscribe(
      res => {
        this.autoID = res['FabricID'];
      },
      err => {
        console.log(err);
      }); 
     
   }
  //this is for getting all the buyers list from database
  getAllBuyersList(){
    this.Bs.getAllBuyers()
    .subscribe(
       (data : Buyers[]) =>{
         this.allBuyers = data;
        //  console.log(data);
       });
  }
   //this is for getting all the sizes list from database
   getAllSize(){
    this.Sl.getAllSizeList()
    .subscribe(
       (data : SizeList[]) =>{
         this.allSize = data;
        //  console.log(data);
       });
  }
   //this is for getting all the types of fabrics from database
   getAllFabrics(){
    this.ft.getAllFabricsType()
    .subscribe(
      (data: FabricType[]) => {
        this.allFabricType = data;
        // console.log(data);
      });  
  }
   //this is for getting all the items name from database
   getAllItems(){
    this.In.getAllItemNamesList()
    .subscribe(
      (data: Items[])=>{
        this.allItems = data;
        // console.log(data);
      })
  }
  //this is for selecting which fields to show upon item name selection
  selectSwitch(x: any){
    this.FabPriService.currentEntry.fabricPriceInformation[0].itemName = x;
     if(x == "BoysS/Slv Tshirt"){
         this.BoysTshirtSelected = true;
         this.JacketSelected = false;
         this.ShortsSelected = false;
     }
     else if(x =="Jacket"){
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
    //this function is for calculating the fabric weight
  calculateFabricWeight(){
    var wastePercentage: any= 0; //waste percentage
    var chestsize: any= 0;
    var lengthsize: any= 0 ;
    var sleevesize: any = 0;
    var hoodsize: any= 0;
    var bottomsize: any = 0;
    var thighsize: any = 0;
    var pocketsize: any = 0;
    var fabricsize: any= 0;// for gsm value
    wastePercentage = this.FabPriService.currentEntry.fabricPriceInformation[0].wastePercentage;
    fabricsize = this.FabPriService.currentEntry.fabricPriceInformation[0].fabricType;
    //conversion from inch to cm
    if(this.FabPriService.currentEntry.fabricPriceInformation[0].chestUom=='Inch'){
     chestsize = parseInt(this.FabPriService.currentEntry.fabricPriceInformation[0].chestSize) * 2.54;
    }else{
      chestsize = this.FabPriService.currentEntry.fabricPriceInformation[0].chestSize;
    }
    // if(this.FabPriService.currentEntry.thigh_unit_of_measurement=='Inch'){
    //   thighsize = this.FabPriService.currentEntry.thigh*2.54;
    // }else{
    //   thighsize = this.FabPriService.currentEntry.thigh;
    // }

    if(this.FabPriService.currentEntry.fabricPriceInformation[0].lengthUom=='Inch'){
      lengthsize = parseInt(this.FabPriService.currentEntry.fabricPriceInformation[0].lengthSize)*2.54;
    }else{
      lengthsize = this.FabPriService.currentEntry.fabricPriceInformation[0].lengthSize;
    }

    if(this.FabPriService.currentEntry.fabricPriceInformation[0].sleeveUom=='Inch'){
      sleevesize = parseInt(this.FabPriService.currentEntry.fabricPriceInformation[0].sleeveSize)*2.54;
    }else{
      sleevesize = this.FabPriService.currentEntry.fabricPriceInformation[0].sleeveSize;
    }

    // if(this.FabPriService.currentEntry.hood_unit_of_measurement=='Inch'){
    //   hoodsize = this.FabPriService.currentEntry.hood*2.54;
    // }else{
    //   hoodsize = this.FabPriService.currentEntry.hood;
    // }

    // if(this.FabPriService.currentEntry.bottom_unit_of_measurement=='Inch'){
    //   bottomsize = this.FabPriService.currentEntry.bottom*2.54;
    // }else{
    //   bottomsize = this.FabPriService.currentEntry.bottom;
    // }
    
    // if(this.FabPriService.currentEntry.pocket_unit_of_measurement=='Inch'){
    //   pocketsize = this.FabPriService.currentEntry.pocket*2.54;
    // }else{
    //   pocketsize = this.FabPriService.currentEntry.pocket;
    // }
    //this part is for calculating the boys tshirt fabric
    var step1 : any = 0;
    step1 = parseFloat(lengthsize) + parseFloat(sleevesize);
    var step2 : any= 0;
    step2 =((step1*parseFloat(chestsize)*2*parseFloat(fabricsize))/(Math.pow(10,7)))*12;
    var step3: any = 0;
    step3 = (((wastePercentage)/100)*step2);
    var step4: any = 0;
    step4 = (step2 + step3);
    console.log(step4);
    var convertoFloat; 
    convertoFloat = parseFloat(step4).toFixed(5);
    console.log(convertoFloat);
    this.FabPriService.currentEntry.fabricPriceInformation[0].fabricWeight = convertoFloat;//main answer for fabric calculation
    //end of fabric calculation of boys tshirt
  }
  //this is for getting all the units of measurement from database
  getAllUms(){
    this.Ums.getAllUoM()
    .subscribe(
       (data : UoM[]) =>{
         this.allUoM = data;
       });
  }
  //currency list
  getCurrencylist(): void {
    this.CU.getAllCurrency()
      .subscribe(data => {
        this.newcurrency = data;
        //console.log(data);
      })

  }
  setCurrency(w) {
    this.setcurrency = w;
    this.FabPriService.currentEntry.fabricPriceInformation[0].currency= this.setcurrency;
  }
  // this is for calculating the price calculation
  calculatePrice() {
    var FabricAmount: number = 0; //waste percentage
    var FabricUnitPrice: number = 0;
    var FabricTotalPrize: number = 0;
    var Rib: number = 0;
    var CM: number = 0;
    var TRIM: number = 0;
    var Print: number = 0;
    var Doc: number = 0;
    var Fa :number= 0;
    var step1: number = 0;
    var step2: number= 0;
    var step3: number = 0;

// console.log(this.fabricWeight);

   // this.FabPriService.currentEntry.fabricPriceInformation[0].fabricWeight = this.fabricWeight
    FabricAmount = this.FabPriService.currentEntry.fabricPriceInformation[0].fabricWeight ;
    FabricUnitPrice = this.FabPriService.currentEntry.fabricPriceInformation[0].fabricUnitPrice;
   // step1 = (parseFloat(FabricAmount) * parseFloat(FabricUnitPrice))
    step1 = (FabricAmount * FabricUnitPrice);
  //  this.FabPriService.currentEntry.fabricPriceInformation[0].fabricTotalPrice = step1.toFixed(3);
    this.FabPriService.currentEntry.fabricPriceInformation[0].fabricTotalPrice = step1;
    // console.log(this.fabricpriceservice.calculatePrice.fabric_total_price);
    Rib = this.FabPriService.currentEntry.fabricPriceInformation[0].rimPrice;
    TRIM = this.FabPriService.currentEntry.fabricPriceInformation[0].trimPrice;
    CM = this.FabPriService.currentEntry.fabricPriceInformation[0].cmPrice;
    Print = this.FabPriService.currentEntry.fabricPriceInformation[0].printPrice;
    Doc = this.FabPriService.currentEntry.fabricPriceInformation[0].docPrice;
    // console.log(this.fabricpriceservice.calculatePrice);
    // step2 = (step1 + parseFloat(Rib) + parseFloat(TRIM) + parseFloat(CM) + parseFloat(Print) + parseFloat(Doc)).toFixed(3);
    step2= (step1 + Rib+TRIM+ CM + Print + Doc);
    this.FabPriService.currentEntry.fabricPriceInformation[0].perDozenPrice = step2;
    step3 = (step2 / 12);
    this.FabPriService.currentEntry.fabricPriceInformation[0].perUnitPrice = step3;
  }

  //this will clear/wipe out all the fields from the form
  clearAll() {
    this.FabPriService.currentEntry = {
      auto_id: '',
      mailDate: '',
      entryDate: '',
      buyerCode: '',
      buyerName: '',
      size: '',
      season: '',
      shipmentDone:null,
      referenceId: '',
      
      fabricPriceInformation: [{
        styleCode: '',
        fabricType: '',
        itemName: '',
        wastePercentage: '',
        chestSize: '',
        chestUom: '',
        lengthSize: '',
        lengthUom: '',
        sleeveSize: '',
        sleeveUom: '',
        hoodSize: '',
        bottomSize: '',
        thighSize: '',
        pocketSize: '',
        fabricWeight: null,
        currency: '',
        fabricUnitPrice: null,
        fabricTotalPrice: null,
        rimPrice: null,
        cmPrice: null,
        trimPrice: null,
        printPrice: null,
        docPrice: null,
        perDozenPrice: null,
        perUnitPrice: null,
        Dremarks: '',
        Mremarks: '',
        approval: null,
        marchendizerFlag: null,
        track_Id: null,
        changeUser: '',
        changeDate: '',
        event: '',
        
      }
      ]
    }
  }

  //after the form is submitted, 
  onsubmit(entry: any) {
    console.log(entry);
    this.FabPriService.createEntry(entry)
      .subscribe(
        res => {
          this.showsuccessmessageforsubmitting = true;
          setTimeout(() => this.showsuccessmessageforsubmitting = false, 4000);
          console.log(res);
          // this.getallFabricEntries();
          this.clearAll();
          // this.router.navigateByUrl('/price');
        },
        err => {
          if (err.status === 422) {
            this.serverErrorMessages = err.error.join('<br/>');
          }
          else
            this.serverErrorMessages = "";
        });
  }
}