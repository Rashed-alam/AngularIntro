
import { FabricPriceModel } from 'src/app/models/fabric-price.model';
import { Component, OnInit } from '@angular/core';
import { FabricPriceServiceService } from 'src/app/services/fabric-price-service.service';
import { keyframes } from '@angular/animations';
import { DatePipe } from '@angular/common';
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
  checkBoxData: any = [];
  AllinfoData: any = [];
  buyerinfo: any;
  bName: any;
  keyCheckData: FabricPriceModel[];
  b_old: any = [];
  today: any = Date.now();
  archievedate: any = Date.now();
  changeUser = "rashed";
  changeDate = this.today;
  editevent = "edit";



  constructor(public Fc: FabricPriceServiceService, private DP: DatePipe) { }

  ngOnInit() {
    const datewithtime = this.DP.transform(this.archievedate, 'medium');
    this.archievedate = datewithtime;

    this.getAllReference();
    this.getAllBuyerInfo();
    this.getAlldata();
    // this.getFirstReferenceData(this.firstreference);
  }

  // approve korle checkbox update hobe
  getservice(x) {

    console.log(x);
    this.Fc.getPriceCalc(x).subscribe(
      (data) => {
        this.tempData = data;
        // console.log(this.tempData);
        //    this.tempData[0].approval =  this.Fc.currentEntry.fabricPriceInformation[0].approval;
        // console.log(this.tempData);
        //   this.Fc.currentEntry.fabricPriceInformation[0] = Object.assign({}, this.tempData[0].fabricPriceInformation);
        // console.log(this.tempData);
      }

    );
    // console.log(this.reviewReport);
  }
  // reference gula 
  getAllReference() {
    this.Fc.getAllref()
      .subscribe(
        (data) => {
          this.AllReference = data;
          console.log(this.AllReference);
          // this.firstreference = this.AllReference[0];
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

    let FabricAmount: number = 0; // waste percentage
    let FabricUnitPrice: number = 0;
    // let FabricTotalPrize: any = 0;
    let Rib: number = 0;
    let CM: number = 0;
    let TRIM: number = 0;
    let Print: number = 0;
    let Doc: number = 0;
    // var Fa: any=0;
    let step1: number = 0;
    let step2: number = 0;
    let step3: number = 0;
    let step4: number = 0;
    let step5: any = 0;
    let step6: any = 0;
    let step7: any = 0;
    // console.log(value);
    // tslint:disable-next-line: max-line-length
    // this.Fc.currentEntry.fabricPriceInformation[0].fabricTotalPrice = ((this.Fc.currentEntry.fabricPriceInformation[0].fabricWeight) * (this.Fc.currentEntry.fabricPriceInformation[0].fabricUnitPrice));

    FabricAmount = this.Fc.currentEntry.fabricPriceInformation[0].fabricWeight;
    FabricUnitPrice = this.Fc.currentEntry.fabricPriceInformation[0].fabricUnitPrice;
    // step1 = (parseFloat(FabricAmount) * parseFloat(FabricUnitPrice));
    step1 = (FabricAmount * FabricUnitPrice);
    step5 = step1.toFixed(3);
    this.Fc.currentEntry.fabricPriceInformation[0].fabricTotalPrice = step5;
    //  console.log(step1);

    Rib = this.Fc.currentEntry.fabricPriceInformation[0].rimPrice;
    TRIM = this.Fc.currentEntry.fabricPriceInformation[0].trimPrice;
    CM = this.Fc.currentEntry.fabricPriceInformation[0].cmPrice;
    Print = this.Fc.currentEntry.fabricPriceInformation[0].printPrice;
    Doc = this.Fc.currentEntry.fabricPriceInformation[0].docPrice;
    // console.log(this.fabricpriceservice.calculatePrice);
    // console.log(Rib,TRIM,CM);
    // step2 = (step1 + parseFloat(Rib) + parseFloat(TRIM) + parseFloat(CM) + parseFloat(Print) + parseFloat(Doc)).toFixed(3);
    step4 = ((+Rib) + (+TRIM) + (+CM) + (+Print) + (+Doc));
    step2 = ((+step1) + (+step4));
    // console.log(step2);
    step6 = step2.toFixed(3);
    this.Fc.currentEntry.fabricPriceInformation[0].perDozenPrice = step6;
    step3 = (step2 / 12);
    step7 = step3.toFixed(3);
    this.Fc.currentEntry.fabricPriceInformation[0].perUnitPrice = step7;


    // console.log('check key up:1: ' + this.Fc.currentEntry.fabricPriceInformation[0].fabricUnitPrice);
    //   console.log('check key up 2:' + this.Fc.currentEntry.fabricPriceInformation[0].fabricWeight);
    // console.log('check key up 3: ' + this.Fc.currentEntry.fabricPriceInformation[0].fabricTotalPrice);

  }
  // table a list a data show kore
  getreportdata(a) {
    //  console.log(a);
    // console.log('chkt',this.AllinfoData);

    this.Fc.getAllData(a).subscribe(
      (data) => {
        this.fabricReport = data;
        this.bName = this.fabricReport[0].buyerName;
        //   console.log('cjhk',this.bName);
      }

    );


  }

  // modal a open hoy
  getDataForReview(x) {
    this.Fc.getReviewdata(x).subscribe(

      (data) => {
        this.reviewReport = data;

        this.getPriceCalcData(this.reviewReport);
        // console.log(this.reviewReport);
        this.getAllReference();

      }


    );



    // this.Fc.currentEntry.fabricPriceInformation[0] = Object.assign({}, this.reviewReport);
  }


  getPriceCalcData(k) {
    this.Fc.getPriceCalc(k).subscribe(
      (data) => {
        this.tempData = data;


        // this.tempData.fabricTotalPrice = (this.tempData.fabricUnitPrice * this.tempData.fabricWeight);
        // 9-24-19

        this.Fc.currentEntry.fabricPriceInformation[0] = Object.assign({}, this.tempData[0].fabricPriceInformation);
        this.b_old = this.tempData;
        console.log(this.tempData);
      }
    );

  }
  // edit korle remarks chole jabe!
  updatePricecalc(m) {
    this.b_old[0].changeUser = this.changeUser;
    this.b_old[0].changeDate = this.archievedate;
    this.b_old[0].event = this.editevent;
    this.b_old[0]._id = null;
    this.b_old[0].fabricPriceInformation._id = null;

    console.log(this.b_old);
    m.marchendizerFlag = this.reviewReport.marchendizerFlag;
    m.referenceId = this.reviewReport.referenceId;
    m.buyerName = this.reviewReport.buyerName;
    m.buyerCode = this.reviewReport.buyerCode;
    m.mailDate = this.reviewReport.mailDate;
    m.entryDate = this.reviewReport.entryDate;
    m.size = this.reviewReport.size;
    //  console.log(m);

    // console.log(this.tempData[0].fabricPriceInformation.perUnitPrice);
    // console.log(this.reviewReport.perUnitPrice);
    // console.log(m.fabricPriceInformation[0].perUnitPrice);

    // console.log(m);
    this.Fc.createpriceArchive(this.b_old).subscribe(res => {
      if (this.reviewReport.perUnitPrice === m.fabricPriceInformation[0].perUnitPrice) {
        //  m.fabricPriceInformation[0].remarks !== '';
        if (m.fabricPriceInformation[0].Dremarks !== '') {


          this.Fc.updateEntry(m).subscribe((res) => {
            m.fabricPriceInformation[0].approval = false;
            console.log('ok1');
            this.getreportdata(this.reviewReport.referenceId);

          }
          );


        }
        else {

          this.Fc.updateEntry(m).subscribe((res) => {
            this.getreportdata(this.reviewReport.referenceId);
            console.log('ok2');

          }
          );

        }

      }
      if (this.reviewReport.perUnitPrice !== m.fabricPriceInformation[0].perUnitPrice) {
        //  m.fabricPriceInformation[0].marchendizerFlag = false;


        this.Fc.updateEntry(m).subscribe((res) => {
          //  m.fabricPriceInformation[0].Dremarks = '';
          this.getreportdata(this.reviewReport.referenceId);
          console.log('ok3');

        });

      }

      //  console.log(m);

    });
  }

  getcheckbox(i) {



    // this.Fc.updateEntry(i).subscribe((res) => {

    // }
    // );
    console.log('remarks', i.Dremarks);





    // if (i.Dremarks !== '') {
    //   this.Fc.getPriceCalc(i).subscribe(
    //     (data) => {
    //       this.checkBoxData = data;
    //      // this.checkBoxData[0].fabricPriceInformation.approval = false;
    //       console.log(this.checkBoxData);
    //       this.Fc.updateEntry1(this.checkBoxData[0]).subscribe((res) => {
    //         this.getreportdata(i.referenceId);
    //         // console.log('ok');
    //       }
    //       );
    //     }
    //   );

    // }
    // else {
    this.Fc.getPriceCalc(i).subscribe(
      (data) => {
        this.checkBoxData = data;
        this.checkBoxData[0].fabricPriceInformation.approval = i.approval;
        console.log(this.checkBoxData);
        this.Fc.updateEntry1(this.checkBoxData[0]).subscribe((res) => {
          this.getreportdata(i.referenceId);
          // console.log('ok');
        }
        );
      }
    );

    // }
    console.log(i.approval);





  }
  getAllBuyerInfo() {
    this.Fc.getAllBuyer().
      subscribe((data) => {
        this.buyerinfo = data;
        console.log(this.buyerinfo);

      });
  }
  getbuyerInfo(k) {
    this.AllReference = [];
    for (let i = 0; i < this.AllinfoData.length; i++) {

      if (this.AllinfoData[i].buyerCode === k) {
        this.AllReference.push(this.AllinfoData[i].referenceId);
        // this.AllReference[i] = this.AllinfoData[i].referenceId;
      }

    }
    console.log(k);
    //  console.log(this.AllReference[0].buyername);
    //  console.log('chkt',this.AllinfoData);

  }
  getAlldata() {
    this.Fc.getallData()
      .subscribe(
        (data) => {
          this.AllinfoData = data;
        });
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


