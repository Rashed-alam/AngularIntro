
import { FabricPriceModel } from 'src/app/models/fabric-price.model';
import { Component, OnInit } from '@angular/core';
import { FabricPriceServiceService } from 'src/app/services/fabric-price-service.service';
// import { all } from 'q';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  FabricCalc: FabricPriceModel[];
  AllReference: any[];
  // ArchieveList: FabricCalulation[];
  referid: string;
  fabricReport: any = [];
  reviewReport: any = [];
  firstreference;
  tempData: any = [];

  constructor(public Fc: FabricPriceServiceService) { }

  ngOnInit() {

    this.getAllReference();
    // this.getFirstReferenceData(this.firstreference);
  }
// reference gula 
  getAllReference() {
    this.Fc.getAllref()
      .subscribe(
        (data) => {
          this.AllReference = data;
          // console.log(this.AllReference[0]);
          this.firstreference = this.AllReference[0];
          // console.log(this.firstreference);
          // this.Fc.getAllData(this.firstreference).subscribe(
          //   (data) => {
          //     this.fabricReport = data;
          //     // console.log('check' + this.fabricReport);
          //   }
          // );

        });

  }
  
  calculateWithkeyUp(value) {
    let FabricAmount: any = 0; // waste percentage
    let FabricUnitPrice: any = 0;
    // let FabricTotalPrize: any = 0;
    let Rib: any = 0;
    let CM: any = 0;
    let TRIM: any = 0;
    let Print: any = 0;
    let Doc: any = 0;
    // var Fa: any=0;
    let step1: any = 0;
    let step2: any = 0;
    let step3: any = 0;
    // console.log(value);
    // tslint:disable-next-line: max-line-length
    // this.Fc.currentEntry.fabricPriceInformation[0].fabricTotalPrice = ((this.Fc.currentEntry.fabricPriceInformation[0].fabricWeight) * (this.Fc.currentEntry.fabricPriceInformation[0].fabricUnitPrice));

    FabricAmount = this.Fc.currentEntry.fabricPriceInformation[0].fabricWeight;
    FabricUnitPrice = this.Fc.currentEntry.fabricPriceInformation[0].fabricUnitPrice;
    step1 = (parseFloat(FabricAmount) * parseFloat(FabricUnitPrice));
    this.Fc.currentEntry.fabricPriceInformation[0].fabricTotalPrice = step1.toFixed(3);

    Rib = this.Fc.currentEntry.fabricPriceInformation[0].rimPrice;
    TRIM = this.Fc.currentEntry.fabricPriceInformation[0].trimPrice;
    CM = this.Fc.currentEntry.fabricPriceInformation[0].cmPrice;
    Print = this.Fc.currentEntry.fabricPriceInformation[0].printPrice;
    Doc = this.Fc.currentEntry.fabricPriceInformation[0].docPrice;
    // console.log(this.fabricpriceservice.calculatePrice);
    step2 = (step1 + parseFloat(Rib) + parseFloat(TRIM) + parseFloat(CM) + parseFloat(Print) + parseFloat(Doc)).toFixed(3);
    this.Fc.currentEntry.fabricPriceInformation[0].perDozenPrice = step2;
    step3 = (step2 / 12).toFixed(3);
    this.Fc.currentEntry.fabricPriceInformation[0].perUnitPrice = step3;


    // console.log('check key up:1: ' + this.Fc.currentEntry.fabricPriceInformation[0].fabricUnitPrice);
    //   console.log('check key up 2:' + this.Fc.currentEntry.fabricPriceInformation[0].fabricWeight);
    // console.log('check key up 3: ' + this.Fc.currentEntry.fabricPriceInformation[0].fabricTotalPrice);

  }
// table a list a data show kore
  getreportdata(a) {
    // console.log(a);

    this.Fc.getAllData(a).subscribe(
      (data) => {
        this.fabricReport = data;
       // console.log(this.fabricReport);
      }
    );
  }

// modal a open hoy
  getDataForReview(x) {
    this.Fc.getReviewdata(x).subscribe(
      (data) => {
        this.reviewReport = data;
       
        this.getPriceCalcData(this.reviewReport);
       // console.log(this.reviewReport.referenceId);
       
      }
    );

   

    // this.Fc.currentEntry.fabricPriceInformation[0] = Object.assign({}, this.reviewReport);
  }
 

  getPriceCalcData(k) {
    this.Fc.getPriceCalc(k).subscribe(
      (data) => {
        this.tempData = data;
       // console.log(this.tempData);
        // this.tempData.fabricTotalPrice = (this.tempData.fabricUnitPrice * this.tempData.fabricWeight);
        this.Fc.currentEntry.fabricPriceInformation[0] = Object.assign({}, this.tempData[0].fabricPriceInformation);
      }
    );

  }
  updatePricecalc(m) {

    m.referenceId = this.reviewReport.referenceId;
    m.buyerName = this.reviewReport.buyerName;
    m.mailDate = this.reviewReport.mailDate;
    m.entryDate = this.reviewReport.entryDate;
    m.size = this.reviewReport.size;
 
    
  //  console.log(m);
    this.Fc.updateEntry(m).subscribe((res) => {
     this. getreportdata(this.reviewReport.referenceId);

    }

    );
   

  }


  // match(){
  //   var l = this.FabricCalc.length;
  //   var l2 = this.ArchieveList.length;
  //   if(l2 == 0){ //checking if the the length of archieve list is empty or not
  //     for(let i= 0; i<l; i++){ //this will show datas from the Fabric entry database only since Archieve table is empty
  //     this.fabricReport.push({
  //       RFOB: this.FabricCalc[i].waste_percentage,
  //       reference: this.FabricCalc[i].refNo,
  //       Buyer: this.FabricCalc[i].buyer_name,
  //       Style: this.FabricCalc[i].style_code,
  //       Fabric: this.FabricCalc[i].fabrics,
  //       Item: this.FabricCalc[i].style_item_name,
  //       date: this.FabricCalc[i].changeDate
  //     })
  //   }
  //   }
  //   else{ //this will mixed both fabric entry and archieve table data
  //     for(let i= 0; i<l; i++){
  //       for(let j=0; j<l2; j++){
  //         if(this.FabricCalc[i].fabricEntry_id == this.ArchieveList[j].fabricEntry_id){
  //           this.fabricReport.push({
  //             FOB: this.FabricCalc[i].waste_percentage,
  //             RFOB: this.ArchieveList[j].waste_percentage,
  //             SFOB: this.ArchieveList[i].waste_percentage,
  //             reference: this.FabricCalc[i].refNo,
  //             Buyer: this.FabricCalc[i].buyer_name,
  //             Style: this.FabricCalc[i].style_code,
  //       Fabric: this.FabricCalc[i].fabrics,
  //       Item: this.FabricCalc[i].style_item_name,
  //       date: this.FabricCalc[i].changeDate
  //           })
  //         } else {
  //           this.fabricReport.push({
  //             // FOB: this.FabricCalc[i].waste_percentage,
  //             RFOB: this.FabricCalc[j].waste_percentage,
  //             // SFOB: this.FabricCalc[i].waste_percentage,
  //             reference: this.FabricCalc[i].refNo,
  //             Buyer: this.FabricCalc[i].buyer_name,
  //             Style: this.FabricCalc[i].style_code,
  //             Fabric: this.FabricCalc[i].fabrics,
  //             Item: this.FabricCalc[i].style_item_name,
  //             date: this.FabricCalc[i].changeDate
  //           })
  //         }
  //       }
  //     }

  //   }

  //   console.log('report='+JSON.stringify(this.fabricReport));
  // }



}


