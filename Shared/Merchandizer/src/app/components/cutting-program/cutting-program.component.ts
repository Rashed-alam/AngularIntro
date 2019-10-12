import { Component, OnInit } from '@angular/core';
import { FabricPriceServiceService } from 'src/app/services/fabric-price-service.service';
import { FabricPriceModel } from 'src/app/models/fabric-price.model';
import { from } from 'rxjs';
import { Buyers } from 'src/app/models/buyers.model';
import { BuyersService } from 'src/app/services/buyers.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { cuttingModel } from 'src/app/models/cutting.model';
import { CuttingService } from 'src/app/services/cutting.service';

@Component({
  selector: 'app-cutting-program',
  templateUrl: './cutting-program.component.html',
  styleUrls: ['./cutting-program.component.css']
})
export class CuttingProgramComponent implements OnInit {
  AllReference: any = []; //for storing all the datas from database
  buyerinfo: any;//for storing all the buyers details
  buyerOrderReference: any = [];
  AllDetails : any = [];
  tempo: any = [];
  temp2: any;
  cut = { cutting: [], referenceId: ' ', styleCode: ' ' };
  size = [];
  color = [];
  cuttingArray:any[][]=[ ];
  colorName: string;
  sizeName: number; 
  sum : any = 0;
  
  constructor(private  FP: FabricPriceServiceService,
              private Bs:BuyersService,
              private CP:CuttingService) { }

  ngOnInit() {
    this.getAllreference();
    this.getAllBuyersList();
   
    // 
    for (let i = 0; i < 50; i++) {
      this.cuttingArray[i] = [];
      for (let j = 0; j < 50; j++) {
        this.cuttingArray[i][j] = 0;
      }
    }
    //
    
  }


  catch(a,b,c){
    this.cuttingArray[b][c] = a;
    // const array1 = this.cuttingArray[b];
    // console.log(this.cuttingArray[b]);
    // const sum = array1.reduce((accumulator, currentValue)=>{
    //   return accumulator + currentValue;
    // }, 0);
    // console.log(sum);
  }
  addNew(){
    this.color.push(this.colorName);
    this.size.push(this.sizeName);
    // console.log(this.color);
    // console.log(this.size);
    this.clear();
  }
  clear(){
    this.colorName = '';
    this.sizeName = null;
  }

  deleteColor(valueToRemove){
  //this.color = this.color.filter(item => item !== valueToRemove)
  this.color = [];
  }
  deleteSize(valueToRemove){
   // this.size = this.size.filter(item => item !== valueToRemove)
    this.size = [];
    }
  onSubmit(){
    this.cut.referenceId = this.CP.currentCutting.referenceId;
    this.cut.styleCode = this.CP.currentCutting.styleCode;
    for (let k = 0; k < this.color.length; k++) {
      for (let l = 0; l < this.size.length; l++) {
        this.cut.cutting.push({
          size: this.size[l],
          color: this.color[k],
          weight:this.cuttingArray[k][l]
        })
        
      }
    }
   // console.log(this.cut)
   
   this.CP.create(this.cut).subscribe(res=>{});
   this.clearEverything();
  }
  //GET ALL REFERENCES NUMBERS FROM DATABASE
  getAllreference(){
    this.FP.getEverything()
    .subscribe(
      (data) =>{
        this.buyerOrderReference = data;
        this.AllReference = data;
        //console.log(this.AllReference);
      }
    )
  }
 //GET ALL BUYERS DETAIL FROM DATABASE
  getAllBuyersList(){
      this.Bs.getAllBuyers()
      .subscribe(
         (data) =>{
           this.buyerinfo = data;
         });
  }
  OnBuyerSelection(b){
    var marvel = this.buyerOrderReference.filter(hero => hero.buyerCode == b);
    this.AllReference = marvel;
    this.tempo = [];
  }
  OnReferenceIdSelection(r){
    this.CP.currentCutting.referenceId = r;
    var gotham = this.buyerOrderReference.filter(hero => hero.referenceId == r);
    this.AllDetails = gotham;
    for(let i =0; i<this.AllDetails.length;i++){
      for(let j =0; j<this.AllDetails[i].fabricPriceInformation.length;j++){
         this.tempo.push(this.AllDetails[i].fabricPriceInformation[j]); 
      }
    }

  }
  OnStyleCodeSelection(s){
    this.CP.currentCutting.styleCode = s;
    var marvel = this.tempo.filter(hero=> hero.styleCode == s);
    this.temp2 = marvel;
    //console.log(this.temp2);
  }
  clearEverything(){
    // for (let i = 0; i < 1000; i++) {
    //   this.cuttingArray[i] = [];
    //   for (let j = 0; j < 1000; j++) {
    //     // console.log(this.arr[i][j]);
    //     this.cuttingArray[i][j] = 0;
    //     // console.log(this.arr[i][j]);
    //   }
    // }
    this.size = [];
    this.color = [];
    this.cut.cutting = []
  }
  }



  
    
    
   



