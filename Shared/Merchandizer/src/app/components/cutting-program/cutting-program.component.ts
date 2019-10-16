import { Component, OnInit } from '@angular/core';
import { FabricPriceServiceService } from 'src/app/services/fabric-price-service.service';
import { from } from 'rxjs';
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
  cuttingArray:any[][]=[ ];//for initially holding the data here 
  reportArray: any[][]= [ ];//for storing the array in report stage
  colorName: string;
  sizeName: number; 
  rowSum  =[];
  columnSum = [];
  reportHeading: boolean = false;
  reportMiddlePart: boolean = true;
  showsuccessmessageforsubmitting: boolean = false;
  row = 0;
  col= 0;
  everything;
  temp3 : any = [];
  decoyEverything: any = [];
  temp4: any = [];
  InfoAll: any = [];
  Info = { cutting: [], referenceId: ' ', styleCode: ' ',remarks: '' };
  tempcolor=[];
  tempsize=[];
  
  constructor(private  FP: FabricPriceServiceService,
              private Bs:BuyersService,
              private CP:CuttingService) { }

  ngOnInit() {
    this.getAllreference();
    this.getAllBuyersList();
    this.getEverything();
    // 
    for (let i = 0; i < 10; i++) {
      this.cuttingArray[i] = [];
      this.reportArray[i] =[];
      for (let j = 0; j < 10; j++) {
        this.cuttingArray[i][j] = 0;
        this.reportArray[i][j] = 0;
      }
    }
    //
    
  }
  //ASSIGNING VALUES TO A 2 DIMENSIONAL MATRIX 
  catch(a,b,c){
    this.cuttingArray[b][c] = Number(a);
  }
  //ADDING NEW SIZE INTO THE ARRAY
  addSize(s){
    this.size.push(s);
    this.size.sort();
  }
  //ADDING NEW COLOR INTO THE ARRAY
  addColor(c){
    this.color.push(c);
    this.color.sort();
 
  }
  //CLEARING OUT THE SIZE AND COLOR FIELDS AFTER INPUT
  clear(){
    this.colorName = '';
    this.sizeName = null;
  }
  //DELETING A GIVEN INPUT FROM THE ARRAY
  deleteColor(valueToRemove){
    this.color = this.color.filter(h => h !== valueToRemove);
    this.color.sort();
  }
  //DELETING A GIVEN INPUT FROM THE ARRAY
  deleteSize(valueToRemove){
    this.size = this.size.filter(h => h !== valueToRemove);
    this.size.sort();
    }
  //AFTER GIVING ALL INPUT, THIS SUBMIT FUNCTION IS FIRED
  onSubmit(){
    this.rowSum = []; 
    this.columnSum = [];
    this.cut.referenceId = this.CP.currentCutting.referenceId;
    this.cut.styleCode = this.CP.currentCutting.styleCode;
    this.cut.remarks = this.CP.currentCutting.remarks;

    //for row summing
    for (let k = 0; k < this.color.length; k++) {
      let row = 0;
      for (let l = 0; l < this.size.length; l++) {
        row = row + this.cuttingArray[k][l];

        this.cut.cutting.push({
          size: this.size[l],
          color: this.color[k],
          weight:this.cuttingArray[k][l],
          row: k,
          col: l,
        });
        
      }
      this.rowSum.push(row);
    }
    //for column summing
    for (let k = 0; k < this.size.length; k++) {
      let col = 0;
      for (let l = 0; l < this.color.length; l++) {
       col = col + this.cuttingArray[l][k]; 
      }
      this.columnSum.push(col);
    }

    //send the list to service
    this.CP.create(this.cut).subscribe(res=>{
      this.showsuccessmessageforsubmitting = true;
      setTimeout(() => this.showsuccessmessageforsubmitting = false, 4000);
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
    // this.CP.currentCutting.referenceId='';
    // this.CP.currentCutting.styleCode = '';
    // this.CP.currentCutting.remarks = '';
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
  //GET EVERYTHING FROM DATABASE
  getEverything(){
    this.CP.getEverything()
    .subscribe(
      (data)=>{
        this.everything = data;
        this.decoyEverything = data;
        // console.log(data)
      });
  }
//GET ITEM BY REFERENCE SELECTION DROPDWON
  referenceSelected(r){
    var gotham = this.decoyEverything.filter(hero => hero.referenceId == r);
    this.temp3 = gotham;
    // console.log(gotham);
    for(let i =0; i<this.temp3.length;i++){
         this.temp4.push(this.temp3[i].styleCode);
      
    }
    // console.log(this.temp4)

}
//SEARCHES THE DATABASE BY MATCHING THE REFERENCE NUMBER AND STYLECODE
sendforReport(m,n){
  // this.InfoAll = [];
  let l = { referenceId: '', styleCode: ' ' };
  l.referenceId = m;
  l.styleCode = n;
  this.CP.getCertainData(l).
    subscribe((data) => {
      this.Info = data;
      console.log(data)
       this.createNewMatrixForShow(this.Info);
    });
}
//GETS THE ROWS AND COLUMNS FROM DATABASE AND ASSIGNGS THEM INTO ANOTHER 2 DIMENSIONAL MATRIX
createNewMatrixForShow(a) {
  console.log(a)
  this.tempcolor=[];
  this.tempsize=[];

  this.InfoAll = a.cutting;
  for (let i = 0; i < this.InfoAll.length; i++) {
    if (this.tempcolor.indexOf(this.InfoAll[i].color) === -1) {
      this.tempcolor.push(this.InfoAll[i].color);
      this.tempcolor.sort();
      console.log(this.tempcolor)
    }
    if (this.tempsize.indexOf(this.InfoAll[i].size) === -1) {
      this.tempsize.push(this.InfoAll[i].size);
      this.tempsize.sort();
      console.log(this.tempsize)
    }
  }

  for (let k = 0; k < this.InfoAll.length; k++) {
    this.newarrMake(this.InfoAll[k].weight,this.InfoAll[k].row,this.InfoAll[k].col);
  }
  console.log(this.reportArray);

}
//ASSIGNING VALUES TO ANOTHER 2 DIMENSIONAL MATRIX
newarrMake(m,i,j){
  this.reportArray[i][j]=m;
}


}


  
    
    
   



