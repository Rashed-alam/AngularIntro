import { knittingNdyeing } from './../models/knittingNdyeing';
import { knittingTypeModel } from './../models/knittingType.model';
import { KnittingNDyeingService } from './../services/knitting-ndyeing.service';
import { FabricPriceServiceService } from 'src/app/services/fabric-price-service.service';
import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-knitting-dyeing-program',
  templateUrl: './knitting-dyeing-program.component.html',
  styleUrls: ['./knitting-dyeing-program.component.css']
})
export class KnittingDyeingProgramComponent implements OnInit {
  AllReference: any[];
  fabricReport: any = [];
  acolor: any = [];
  aknittingType: any = [];
  arr1: any[][] = [];
  InfoAll: any = [];
  buyerinfo: any;
  color: any = [];
  knittingType: any = [];
  AllinfoData: any = [];
  arr: any[][] = [];
  styleCode2: any = [];
  styleCode1: any = [];
  ref: any;
  ref1: any;
  stl: any;
  sum = 0;
  bName: any;
  changeUser: string = "Rashed";
  editEvent: string = "EDIT";
  deleteEvent: string = "DELETE";
  today: any = Date.now(); //for showing today's date
  changeDate: any = this.today;
  swapVariableForArchieve: any;
  knit = { kintting: [], referenceId: '', styleCode: ' ', changeUser: '', changeDate: '', changeEvent: '' };
  l = { referenceId: '', styleCode: ' ' };
  // knit1 = { kintting: [], referenceId: '', styleCode: ' ' };

  Info = { kintting: [], referenceId: '', styleCode: ' ',changeUser: '', changeDate: '', changeEvent: '' };
  ttl = [];
  ttlCol = [];


  constructor(public KD: KnittingNDyeingService, public Fc: FabricPriceServiceService) { }
  ngOnInit() {
    for (let i = 0; i < 40; i++) {
      this.arr[i] = [];
      this.arr1[i] = [];
      for (let j = 0; j < 40; j++) {
        this.arr[i][j] = 0;
        this.arr1[i][j] = 0;
        // console.log(this.arr[i][j]);
      }
    }
    this.getAllReference();
    this.getAllBuyerInfo();
    this.getAlldata();

  }

  getAllReference() {
    this.Fc.getAllref()
      .subscribe(
        (data) => {
          this.AllReference = data;
          // console.log(this.AllReference);

        });

  }
  getreportdata(a) {
    this.ref = " ";
    this.ref = a;
    console.log(this.ref);
    this.Fc.getAllData(a).subscribe(
      (data) => {
        this.fabricReport = data;
        this.bName = this.fabricReport[0].buyerName;
        // this.styleCode=this.fabricReport[0].styleCode;
        //  console.log(this.fabricReport);
        for (let i = 0; i < this.fabricReport.length; i++) {
          this.styleCode2[i] = (this.fabricReport[i].styleCode);
          // console.log(this.styleCode[i]);
        }
        console.log(this.styleCode2);
      }
    );

    //console.log(this.styleCode);

  }
  //for editing
  getreportdata1(a) {
    this.ref1 = " ";
    this.ref1 = a;
   // console.log(this.ref1);
    this.Fc.getAllData(a).subscribe(
      (data) => {
        this.fabricReport = data;
        // this.bName = this.fabricReport[0].buyerName;
        // this.styleCode=this.fabricReport[0].styleCode;
        //  console.log(this.fabricReport);
        for (let i = 0; i < this.fabricReport.length; i++) {
          this.styleCode1[i] = (this.fabricReport[i].styleCode);
          // console.log(this.styleCode[i]);
        }
        //  console.log(this.styleCode);
      }
    );

    //console.log(this.styleCode);

  }

  getAllBuyerInfo() {
    this.Fc.getAllBuyer().
      subscribe((data) => {
        this.buyerinfo = data;
        //  console.log(this.buyerinfo);

      });
  }
  getbuyerInfo(k) {
    this.AllReference = [];
    for (let i = 0; i < this.AllinfoData.length; i++) {
      if (this.AllinfoData[i].buyerCode === k) {
        this.AllReference.push(this.AllinfoData[i].referenceId);
      }

    }

  }
  getAlldata() {
    this.Fc.getallData()
      .subscribe(
        (data) => {
          this.AllinfoData = data;
        });
  }

  addColor(m) {
    this.color.push(m);
    this.color.sort();
  }
  addColor1(m) {
    this.acolor.push(m);
  //  this.acolor.sort();
  }
  deleteColor(n) {
    this.color = this.color.filter(h => h !== n);
    this.color.sort();
  }
  deleteColor1(n) {
    this.acolor = this.acolor.filter(h => h !== n);
  //  this.acolor.sort();
  }
  addKnittingType(l) {
  //  console.log(l);
    this.knittingType.push(l);
    this.knittingType.sort();


    //  this.knittingType = ['k', 'b', 'c', 'ttl'];
    // console.log(this.knittingType);

  }
  addKnittingType1(l) {
   // console.log(l);
    this.aknittingType.push(l);
    this.aknittingType.sort();


    //  this.knittingType = ['k', 'b', 'c', 'ttl'];
    // console.log(this.knittingType);

  }
  deleteKnittingType(m) {
    this.knittingType = this.knittingType.filter(h => h !== m);
    this.knittingType.sort();
  }
  deleteKnittingType1(m) {
    this.aknittingType = this.aknittingType.filter(h => h !== m);
    this.aknittingType.sort();
  }



  getvalue(f: any, i: number, j: number) {


    this.arr[i][j] = f;
  }

  getstl(k) {
    this.stl = " ";
    this.stl = k;
   // console.log(this.stl);
  }

  showArray(arr) {
  //  console.log(arr);
    this.ttl = [];
    this.ttlCol = [];
    this.knit.kintting = [];
    this.knit.referenceId = this.ref;
    this.knit.styleCode = this.stl;
    for (let k = 0; k < this.color.length; k++) {
      let r = 0;
      for (let l = 0; l < this.knittingType.length; l++) {
        r = r + parseInt(arr[k][l]);
        this.knit.kintting.push({
          knittingType: this.knittingType[l],
          color: this.color[k],
          weight: arr[k][l],
          row: k,
          col: l,
        })

      }
      this.ttl.push(r);
    }

    for (let k = 0; k < this.knittingType.length; k++) {
      let m = 0;
      for (let l = 0; l < this.color.length; l++) {
        m = m + parseInt(arr[l][k]);
      }
      this.ttlCol.push(m);
    }
    this.KD.postData(this.knit).subscribe(res => {
    });
  }

  clear() {
    this.color = [];
    this.knittingType = [];
    this.acolor = [];
    this.aknittingType = [];
    this.knit.kintting = [];
    this.ttl = [];
    this.ttlCol = [];
  }
  sendforReport(m, n) {
    this.InfoAll = [];
    this.l = { referenceId: '', styleCode: ' ' };
    this.l.referenceId = m;
    this.l.styleCode = n;
    this.ref = m;
    this.stl = n;
    this.KD.getReviewdata(this.l).
      subscribe((data) => {
        this.Info = data;
        console.log(this.Info);
        this.createNewMatrixForShow(this.Info);
        this.swapVariableForArchieve = this.Info;
     
    

      });

    // for (let i = 0; i < this.Info.size; i++) {
    //   this.InfoAll.push(this.Info[i].knittingType);
    // }
    // console.log(this.InfoAll);

  }

  createNewMatrixForShow(Info) {
  //  console.log(Info);
    this.acolor = [];
    this.aknittingType = [];
    this.InfoAll = Info.kintting;
    for (let i = 0; i < this.InfoAll.length; i++) {
      if (this.acolor.indexOf(this.InfoAll[i].color) === -1) {
        this.acolor.push(this.InfoAll[i].color);
        this.acolor.sort();
      }
      if (this.aknittingType.indexOf(this.InfoAll[i].knittingType) === -1) {
        this.aknittingType.push(this.InfoAll[i].knittingType);
        this.aknittingType.sort();
      }
      // console.log(this.InfoAll[i].color);
    }
     // console.log(this.acolor);
    //  console.log(this.aknittingType);
    for (let k = 0; k < this.InfoAll.length; k++) {

      this.newarrMake(this.InfoAll[k].weight, this.InfoAll[k].row, this.InfoAll[k].col);

    }
    //  console.log(this.arr1);

  }


  newarrMake(m, i, j) {
    this.arr1[i][j] = m;
  }
  //report to db
  showArray1(arr) {
    // console.log(arr);
    // this.knit = { kintting: [], referenceId: '', styleCode: ' ' };
    this.knit.kintting = [];

    this.ttl = [];
    this.ttlCol = [];

    this.knit.referenceId = this.ref;
    this.knit.styleCode = this.stl;
    for (let k = 0; k < this.acolor.length; k++) {
      let r = 0;
      for (let l = 0; l < this.aknittingType.length; l++) {
        r = r + parseInt(arr[k][l]);
        this.knit.kintting.push({
          knittingType: this.aknittingType[l],
          color: this.acolor[k],
          weight: arr[k][l],
          row: k,
          col: l,
        })

      }
      this.ttl.push(r);
    }

    for (let k = 0; k < this.aknittingType.length; k++) {
      let m = 0;
      for (let l = 0; l < this.acolor.length; l++) {
        m = m + parseInt(arr[l][k]);
      }
      this.ttlCol.push(m);
    }
    // console.log(this.knit);
    // for Archive
    this.swapVariableForArchieve.changeUser = this.changeUser;
    this.swapVariableForArchieve.changeEvent = this.editEvent;
    this.swapVariableForArchieve.changeDate = this.changeDate;
    this.swapVariableForArchieve._id = null;
    // console.log(this.swapVariableForArchieve)
    this.KD.createKnittingNdyeingArchieve(this.swapVariableForArchieve).subscribe((data)=>{
    this.KD.UpdateEntry(this.knit).subscribe(res => {
    });
  });
  }

  deleteEntry(l) {
    var ob = this.Info;
    var confirmation;
    confirmation= confirm("Are you sure ?");
    if(confirmation == true){
    ob.changeUser = this.changeUser;
    ob.changeEvent = this.deleteEvent;
    ob.changeDate = this.changeDate;
    this.KD.createKnittingNdyeingArchieve(ob).subscribe((data)=>{
    this.KD.deleteEntry(l).subscribe(res => { 

    });
  });
  }
  // //PDF GENERATOR FUNCTION
  //  reportPrint() {
  //   // this.reportHeading =true;
  //   // this.reportMiddlePart = false;
  //   const data = document.getElementById('content');
  //   data.style.display = 'block';
  //   html2canvas(data).then(canvas => {
  //     const imgWidth = 180;
  //     const pageHeight = 500;
  //     const imgHeight = canvas.height * imgWidth / canvas.width;
  //     let heightLeft = imgHeight;

  //     const contentDataURL = canvas.toDataURL('image/png');
  //     // var doc = new jspdf('p', 'mm');
  //     const doc = new jspdf('p', 'mm', 'a4');
  //     let position = 5;
  //     let k = 1;
  //     doc.addImage(contentDataURL, 'PNG', 15, position, imgWidth, imgHeight);
  //     heightLeft -= pageHeight;
  //     //  doc.setPage(k);
  //     while (heightLeft >= 0) {
  //       position = heightLeft - imgHeight;
  //       doc.addPage();
  //       doc.addImage(contentDataURL, 'PNG', 15, position, imgWidth, imgHeight);
  //       heightLeft -= pageHeight;
  //       k++;
  //       //  doc.setPage(k);
  //     }
  //     const blob = doc.output('blob');
  //     window.open(URL.createObjectURL(blob));
  //     data.style.display = 'none';
  //   });
  }



}


