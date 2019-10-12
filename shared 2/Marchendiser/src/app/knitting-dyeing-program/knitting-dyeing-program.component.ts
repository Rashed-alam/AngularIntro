import { knittingNdyeing } from './../models/knittingNdyeing';
import { knittingTypeModel } from './../models/knittingType.model';
import { KnittingNDyeingService } from './../services/knitting-ndyeing.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-knitting-dyeing-program',
  templateUrl: './knitting-dyeing-program.component.html',
  styleUrls: ['./knitting-dyeing-program.component.css']
})
export class KnittingDyeingProgramComponent implements OnInit {
  color: any = [];
  knittingType: any = [];
  arr: any[][] = [];
  knit = { kintting: [], referenceId: '', styleCode: ' ' };
  knittData: knittingNdyeing = {
    referenceId: '',
    styleCode: '',
    kintting: [{
      knittingType: '',
      color: '',
      weight: ''
    }]
  }

  constructor(public KD: KnittingNDyeingService) { }
  ngOnInit() {
    for (let i = 0; i < 1000; i++) {
      this.arr[i] = [];
      for (let j = 0; j < 1000; j++) {
        // console.log(this.arr[i][j]);
        this.arr[i][j] = 0;
        // console.log(this.arr[i][j]);
      }
    }

  }
  addColor(m) {
    this.color.push(m);
  }
  deleteColor(n) {
    this.color = this.color.filter(h => h !== n);
  }
  addKnittingType(l) {
    console.log(l);
    this.knittingType.push(l);
    console.log(this.knittingType);

  }
  deleteKnittingType(m) {
    this.knittingType = this.knittingType.filter(h => h !== m);
  }



  getvalue(f: any, i: number, j: number) {

    
    this.arr[i][j] = f;
  }



  showArray(arr) {
    this.knit.referenceId = 'test-1';
    this.knit.styleCode = 'est-1';
    for (let k = 0; k < this.color.length; k++) {
      for (let l = 0; l < this.knittingType.length; l++) {
        //  // console.log('no:' + this.color[k], ' ', this.knittingType[l], ' ', arr[k][l]);
        //   this.knit.kintting.knittingType = this.knittingType[l];
        //   this.knit.kintting.color = this.color[k];
        //   //  console.log(arr[k][l]);
        //   //  let j = arr[k][l];
        //   this.knit.kintting[0].weight = arr[k][l];
        this.knit.kintting.push({
          knittingType: this.knittingType[l],
          color: this.color[k],
          weight:arr[k][l]
        })

      }


    }
    this.KD.getdata(this.knit).subscribe(res=>{
          });
        
    console.log(this.knit);

  }
  clear() {
    for (let i = 0; i < 1000; i++) {
      this.arr[i] = [];
      for (let j = 0; j < 1000; j++) {
        // console.log(this.arr[i][j]);
        this.arr[i][j] = 0;
        // console.log(this.arr[i][j]);
      }
    }

    this.color = [];
    this.knittingType = [];
  }
}


