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
  deleteReferenceNumber: any;
  deleteStyleCodeNumber: any;
  rowSum  =[];
  columnSum = [];
  reportHeading: boolean = false;
  reportMiddlePart: boolean = true;
  showsuccessmessageforsubmitting: boolean = false;
  showdeletemessage: boolean = false;
  showeditmessage: boolean = false;
  row = 0;
  col= 0;
  everything;
  temp3 : any = [];
  decoyEverything: any = [];
  temp4: any = [];
  InfoAll: any = [];
  Info = { cutting: [], referenceId: ' ', styleCode: ' ',remarks: '', changeUser: '',changeDate:'', changeEvent:'' };
  tempcolor=[]; //report
  tempsize=[]; //report
  inputboxFlag: boolean =false;
  changeUser: string = "Ashraf";
  editEvent: string  = "EDIT";
  deleteEvent: string = "DELETE";
  today: any = Date.now(); //for showing today's date
  changeDate: any = this.today;

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
  Add(a,b){
    this.addColor(a);
    this.addSize(b);
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
    this.color = [];
    this.size = [];
  }
  //DELETING A GIVEN INPUT FROM THE ARRAY
  deleteColor(valueToRemove){
    this.color = this.color.filter(h => h !== valueToRemove);
    this.color.sort();
  }
  //DELETING AN INPUTED ITEM FROM THE DATABASE
  deleteColorFromReport(valueToRemove){
    this.tempcolor = this.tempcolor.filter(h => h !== valueToRemove);
    this.tempcolor.sort();
  }
  //DELETING A GIVEN INPUT FROM THE ARRAY
  deleteSize(valueToRemove){
    this.size = this.size.filter(h => h !== valueToRemove);
    this.size.sort();
    }
    //DELETING A GIVEN INPUT FROM THE DATABASE
  deleteSizeFromReport(valueToRemove){
    this.tempsize = this.tempsize.filter(h => h !== valueToRemove);
    this.tempsize.sort();
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
    this.tempo = [];
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
    this.size = [];
    this.color = [];
    this.cut.cutting = [];
    this.CP.currentCutting.remarks = '';
    this.columnSum =[];
    this.rowSum = [];
    this.tempcolor = [];
    this.tempsize = [];
    this.Info.cutting = [];
    this.tempo = [];
    this.AllReference = [];
    this.temp2 = [];
    this.buyerinfo = [];
  }
  //PDF GENERATOR FUNCTION
  public reportPrint() {
      this.reportMiddlePart = false;
      this.reportHeading =true;
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
    this.temp4 = [];
    var gotham = this.decoyEverything.filter(hero => hero.referenceId == r);
    this.temp3 = gotham; //storing the filtered value into this value named 'temp3'
    // console.log(gotham);
    for(let i =0; i<this.temp3.length;i++){
         this.temp4.push(this.temp3[i].styleCode); //pushing the filterd value into an array 
    }
    // console.log(this.temp4)
    

}
//SEARCHES THE DATABASE BY MATCHING THE REFERENCE NUMBER AND STYLECODE
  SearchDatabase(m,n){
  let l = { referenceId: ' ', styleCode: ' ' };
  l.referenceId = m;
  l.styleCode = n;

  this.CP.getCertainData(l).
    subscribe((data) => {
      this.Info = data;
      // console.log(data);
       this.createNewMatrixForShow(this.Info);
    });
   this.deleteReferenceNumber = m;
   this.deleteStyleCodeNumber = n;
}
//GETS THE ROWS AND COLUMNS FROM DATABASE AND ASSIGNGS THEM INTO ANOTHER 2 DIMENSIONAL MATRIX
  createNewMatrixForShow(a) {
  // console.log(a)
  this.tempcolor=[];
  this.tempsize=[];
  // this.InfoAll = a;
   this.InfoAll = a.cutting;
  for (let i = 0; i < this.InfoAll.length; i++) {
    if (this.tempcolor.indexOf(this.InfoAll[i].color) === -1) {
      this.tempcolor.push(this.InfoAll[i].color);
      this.tempcolor.sort();
      // console.log(this.tempcolor)
    }
    if (this.tempsize.indexOf(this.InfoAll[i].size) === -1) {
      this.tempsize.push(this.InfoAll[i].size);
      this.tempsize.sort();
      // console.log(this.tempsize)
    }
  }

  for (let k = 0; k < this.InfoAll.length; k++) {
    this.newarrMake(this.InfoAll[k].weight,this.InfoAll[k].row,this.InfoAll[k].col);
  }
  // console.log(this.reportArray);

}
//ASSIGNING VALUES TO ANOTHER 2 DIMENSIONAL MATRIX
  newarrMake(m,i,j){
  this.reportArray[i][j]=m;
}
//ASSIGNING NEW GIVEN INPUTTED VALUES TO THE ARRAY
  catchForEditing(a: number,b,c){
  this.reportArray[b][c]= a;
  // console.log(this.reportArray)
}
//EDIT FUNCTION
OnSubmitForEdit(){
  this.rowSum = []; 
  this.columnSum = [];
  this.cuttingArray = [];
  this.Info.cutting = [];
  let l = { referenceId: '', styleCode: ' ' };
  l.referenceId = this.Info.referenceId;
  l.styleCode = this.Info.styleCode;
  //for row summing
  for (let k = 0; k < this.tempcolor.length; k++) {
    let row = 0;
    for (let l = 0; l < this.tempsize.length; l++) {
      row = row + parseInt(this.reportArray[k][l]);

      this.Info.cutting.push({
        size: this.tempsize[l],
        color: this.tempcolor[k],
        weight: parseInt(this.reportArray[k][l]),
        row: k,
        col: l,
      });
      
    }
    this.rowSum.push(row);
  }
  //for column summing
  for (let k = 0; k < this.tempsize.length; k++) {
    let col = 0;
    for (let l = 0; l < this.tempcolor.length; l++) {
     col = col + parseInt(this.reportArray[l][k]); 
    }
    this.columnSum.push(col);
  }
  //send the list to service
  var ob = this.Info;
  ob.changeUser = this.changeUser;
  ob.changeEvent = this.editEvent;
  ob.changeDate = this.changeDate;
  this.CP.createCuttingArchieve(ob).subscribe((data)=>{
   this.CP.UpdateEntry(this.Info).subscribe(res=>{
    this.showeditmessage = true;
    setTimeout(() => this.showeditmessage = false, 4000);
 });
});
}
//ADD NEW SIZE AND COLOR FOR EDIT SECTION
AddNewForEditSection(a,b){
  this.inputboxFlag = true;
  this.tempcolor.push(a);
  this.tempsize.push(b);

}
//DELETE FUNCTION TO DELETE A CERTAIN ENTRY
deleteWholeItem(){
// console.log(this.deleteReferenceNumber);
let a = { referenceId: '' , styleCode:'', };
a.referenceId = this.deleteReferenceNumber;
a.styleCode = this.deleteStyleCodeNumber;
var ob = this.Info;
var confirmation;
confirmation= confirm("Are you sure ?");
if(confirmation == true){
ob.changeUser = this.changeUser;
ob.changeEvent = this.deleteEvent;
ob.changeDate = this.changeDate;
this.CP.createCuttingArchieve(ob).subscribe((data)=>{
  this.CP.deleteEntry(a).subscribe((data) =>{
    this.showdeletemessage=true;
    setTimeout(()=>this.showdeletemessage=false,4000);
    this.getAllreference();
    this.clearEverything();
    this.getEverything();
    this.SearchDatabase(a.referenceId,a.styleCode);
  });
});

}

}

}


  
    
    
   



