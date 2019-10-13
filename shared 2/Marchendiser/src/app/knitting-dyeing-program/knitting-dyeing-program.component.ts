import { knittingNdyeing } from './../models/knittingNdyeing';
import { knittingTypeModel } from './../models/knittingType.model';
import { KnittingNDyeingService } from './../services/knitting-ndyeing.service';
import { FabricPriceServiceService } from 'src/app/services/fabric-price-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-knitting-dyeing-program',
  templateUrl: './knitting-dyeing-program.component.html',
  styleUrls: ['./knitting-dyeing-program.component.css']
})
export class KnittingDyeingProgramComponent implements OnInit {
  AllReference: any[];
  fabricReport: any = [];
  buyerinfo: any;
  color: any = [];
  knittingType: any = [];
  AllinfoData: any = [];
  arr: any[][] = [];
  styleCode: any = [];
  ref: any;
  stl: any;
  sum = 0;
  bName: any;
  knit = { kintting: [], referenceId: '', styleCode: ' ' };
  ttl = [];
  ttlCol = [];
  knittData: knittingNdyeing = {
    referenceId: '',
    styleCode: '',
    kintting: [{
      knittingType: '',
      color: '',
      weight: ''
    }]
  }

  constructor(public KD: KnittingNDyeingService, public Fc: FabricPriceServiceService) { }
  ngOnInit() {
    for (let i = 0; i < 1000; i++) {
      this.arr[i] = [];
      for (let j = 0; j < 1000; j++) {
        this.arr[i][j] = 0;
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
          this.styleCode[i] = (this.fabricReport[i].styleCode);
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
  }
  deleteColor(n) {
    this.color = this.color.filter(h => h !== n);
  }
  addKnittingType(l) {
    //  console.log(l);
    this.knittingType.push(l);

    //  this.knittingType = ['k', 'b', 'c', 'ttl'];
    // console.log(this.knittingType);

  }
  deleteKnittingType(m) {
    this.knittingType = this.knittingType.filter(h => h !== m);
  }



  getvalue(f: any, i: number, j: number) {


    this.arr[i][j] = f;
  }

  getstl(k) {
    this.stl = " ";
    this.stl = k;
    console.log(this.stl);
  }

  showArray(arr) {
    this.ttl = [];
    this.ttlCol = [];

    this.knit.referenceId = this.ref;
    this.knit.styleCode = this.stl;
    for (let k = 0; k < this.color.length; k++) {
      this.sum = 0;
      let r = 0;
      for (let l = 0; l < this.knittingType.length; l++) {
        r = r + parseInt(arr[k][l]);
        this.knit.kintting.push({
          knittingType: this.knittingType[l],
          color: this.color[k],
          weight: arr[k][l]
        })

      }
      this.ttl.push(r);
      console.log(this.ttl);
      console.log(this.ttlCol);


    }

    for (let k = 0; k < this.knittingType.length; k++) {
      let m = 0;
      for (let l = 0; l < this.color.length; l++) {
        m = m + parseInt(arr[l][k]);
      }
      this.ttlCol.push(m);
      console.log(this.ttlCol);
    }
    this.KD.getdata(this.knit).subscribe(res => {
    });

    console.log(this.knit);

  }
  clear() {
    this.color = [];
    this.knittingType = [];
    this.knit.kintting = [];
    this.ttl = [];
    this.ttlCol = [];
  }
}


