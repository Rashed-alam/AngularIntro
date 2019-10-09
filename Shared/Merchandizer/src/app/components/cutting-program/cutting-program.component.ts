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
  constructor(private  FP: FabricPriceServiceService,
              private Bs:BuyersService,
              private CP:CuttingService) { }

  ngOnInit() {
    this.getAllreference();
    this.getAllBuyersList();
    // 
    for (let i = 0; i < 3; i++) {
      this.cutting[i] = [];
      for (let j = 0; j < 3; j++) {
        this.cutting[i][j] = 0;
      }
    }
    //
    
  }

  size = [30,35,40];
  color = ['red', 'blue','green'];
  cutting:any[][]=[ ];

  catch(a,b,c){
    this.cutting[b][c] = a;
    for (let k = 0; k < this.color.length; k++) {
      for (let l = 0; l < this.size.length; l++) {
        // console.log(this.color[k], this.size[l], this.cutting[k][l]);
        this.CP.currentCutting.cutting[0].color = this.color[k];
        this.CP.currentCutting.cutting[0].size = this.size[l];
        this.CP.currentCutting.cutting[0].weight =this.cutting[k][l];
      }

    }
    // console.log(this.cutting);
    this.CP.createEntry(this.CP.currentCutting);
   
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

//
  OnBuyerSelection(b){
    var marvel = this.buyerOrderReference.filter(hero => hero.buyerCode == b);
    this.AllReference = marvel;
    this.tempo = [];
  }


  OnReferenceIdSelection(r){
    var gotham = this.buyerOrderReference.filter(hero => hero.referenceId == r);
    this.AllDetails = gotham;
    for(let i =0; i<this.AllDetails.length;i++){
      for(let j =0; j<this.AllDetails[i].fabricPriceInformation.length;j++){
         this.tempo.push(this.AllDetails[i].fabricPriceInformation[j]); 
      }
    }
    console.log(this.tempo);

  }





  
    
    
   
  }



