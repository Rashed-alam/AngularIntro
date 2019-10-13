import { Component, OnInit } from '@angular/core';
import { FabricPriceServiceService } from 'src/app/services/fabric-price-service.service';
import { FabricPriceModel } from 'src/app/models/fabric-price.model';
import { from } from 'rxjs';
import { Buyers } from 'src/app/models/buyers.model';
import { BuyersService } from 'src/app/services/buyers.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { CuttingService } from 'src/app/services/cutting.service';
import * as jspdf from 'jspdf'; 
import  html2canvas from 'html2canvas';  

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
  cut = { cutting: [], referenceId: ' ', styleCode: ' ',remarks: '' };
  size = [];
  color = [];
  cuttingArray:any[][]=[ ];
  colorName: string;
  sizeName: number; 
  rowSum  =[];
  columnSum = [];
  reportHeading: boolean = false;
  reportMiddlePart: boolean = true;
  showsuccessmessageforsubmitting: boolean = false;
  row = 0;
  col= 0;

  
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
  //ASSIGNING VALUES TO MATRIX POSITION
  catch(a,b,c){
    this.cuttingArray[b][c] = Number(a);
  }
  //ADDING NEW SIZE INTO THE ARRAY
  addSize(s){
    this.size.push(s);
  
  }
  //ADDING NEW COLOR INTO THE ARRAY
  addColor(c){
    this.color.push(c);
 
  }
  //CLEARING OUT THE SIZE AND COLOR FIELDS AFTER INPUT
  clear(){
    this.colorName = '';
    this.sizeName = null;
  }
  //DELETING A GIVEN INPUT FROM THE ARRAY
  deleteColor(valueToRemove){
  //this.color = this.color.filter(item => item !== valueToRemove)
  this.color = [];
  }
  //DELETING A GIVEN INPUT FROM THE ARRAY
  deleteSize(valueToRemove){
   // this.size = this.size.filter(item => item !== valueToRemove)
    this.size = [];
    }
  onSubmit(){
    this.rowSum = [];
    this.columnSum = [];
    this.cut.referenceId = this.CP.currentCutting.referenceId;
    this.cut.styleCode = this.CP.currentCutting.styleCode;
    this.cut.remarks = this.CP.currentCutting.remarks;
    for (let k = 0; k < this.color.length; k++) {
      let row = 0;
      // let col = 0;
      for (let l = 0; l < this.size.length; l++) {
        // col = col + this.cuttingArray[l][k];
        row = row +this.cuttingArray[k][l];

        this.cut.cutting.push({
          size: this.size[l],
          color: this.color[k],
          weight:this.cuttingArray[k][l]
        })
        
      }
      // this.columnSum.push(col);
      this.rowSum.push(row);
    }
    for (let k = 0; k < this.size.length; k++) {
      let col = 0;
      for (let l = 0; l < this.color.length; l++) {
       col = col + this.cuttingArray[l][k]; 
      }
      this.columnSum.push(col);
    }
    this.CP.create(this.cut).subscribe(res=>{
    this.showsuccessmessageforsubmitting = true;
    setTimeout(() => this.showsuccessmessageforsubmitting = false, 4000);
    // this.clearEverything();
   });
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
 //GET ALL BUYER DETAILS FROM DATABASE
  getAllBuyersList(){
      this.Bs.getAllBuyers()
      .subscribe(
         (data) =>{
           this.buyerinfo = data;
         });
  }
  //UPON SELECTING THE BUYER, ALL THE ITEMS REGARDING THAT BUYER IS FETCHED
  OnBuyerSelection(b){
    var marvel = this.buyerOrderReference.filter(hero => hero.buyerCode == b);
    this.AllReference = marvel;
    // console.log(marvel)
    this.tempo = [];
  }
  //UPON SELECTING THE REFERENCE, ALL THE ITEMS REGARDING THAT BUYER IS FETCHED
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
  //UPON SELECTING THE STYLECODE, ALL THE ITEMS REGARDING THAT BUYER IS FETCHED
  OnStyleCodeSelection(s){
    this.CP.currentCutting.styleCode = s;
    var marvel = this.tempo.filter(hero=> hero.styleCode == s);
    this.temp2 = marvel;
    //console.log(this.temp2);
  }
  //THIS WILL CLEAR ALL THE INPUT FIELDS AND ARRAYS
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
    this.cut.cutting = [];
    this.CP.currentCutting.remarks = '';
    this.columnSum =[];
    this.rowSum = [];
  }
  //PDF GENERATOR FUNCTION
  public reportPrint() {
      this.reportHeading =true;
      this.reportMiddlePart = false;
      const data = document.getElementById('content');
      data.style.display = 'block';
      html2canvas(data).then(canvas => {
        const imgWidth = 180;
        const pageHeight = 500;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;
  
        const contentDataURL = canvas.toDataURL('image/png');
       // var doc = new jspdf('p', 'mm');
        const doc =  new jspdf('p', 'mm', 'a4');
        let position = 5;
        let k = 1;
        doc.addImage(contentDataURL, 'PNG', 15, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      //  doc.setPage(k);
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          doc.addPage();
          doc.addImage(contentDataURL, 'PNG', 15, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
          k++;
        //  doc.setPage(k);
        }
        const blob = doc.output('blob');
        window.open(URL.createObjectURL(blob));
        data.style.display = 'none';
      });
  }

    
  }



  
    
    
   



