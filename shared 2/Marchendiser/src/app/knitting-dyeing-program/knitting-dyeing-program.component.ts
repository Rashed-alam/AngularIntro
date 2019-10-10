import { knittingTypeModel } from './../models/knittingType.model';
import { KnittingNDyeingService } from './../services/knitting-ndyeing.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-knitting-dyeing-program',
  templateUrl: './knitting-dyeing-program.component.html',
  styleUrls: ['./knitting-dyeing-program.component.css']
})
export class KnittingDyeingProgramComponent implements OnInit {
  color = ['Blue', 'Green', 'Red', 'Gray'];
  knittingType = ['FDiaOpen', 'S/Jersy', '2/1 Lycra Rib'];
  arr: any[][] = [];


  constructor(public KD: KnittingNDyeingService) { }
  ngOnInit() {
    for (let i = 0; i < 4; i++) {
      this.arr[i] = [];
      for (let j = 0; j < 3; j++) {
        // console.log(this.arr[i][j]);
        this.arr[i][j] = 0;
        // console.log(this.arr[i][j]);
      }
    }

  }



  getvalue(f: any, i: number, j: number) {

    //  console.log(f, i, j);
    //  array[5][5];
    this.arr[i][j] = f;

    // console.log(this.arr[i][j]);


    // this.arr[i][j].push(f);
    // this.showArray(this.arr);

    // for (let k = 0; k < this.color.length; k++) {
    //   for (let l = 0; l < this.knittingType.length; l++) {
    //     console.log('no:' + this.color[k] , ' ',this.knittingType[l], ' ', this.arr[k][l]);
    //   }

    // }
  }

  showArray(arr) {
    this.KD.knittingData.referenceId = 'rest-1';
    this.KD.knittingData.styleCode = 'Test-1';
    for (let k = 0; k < this.color.length; k++) {
      for (let l = 0; l < this.knittingType.length; l++) {
        console.log('no:' + this.color[k], ' ', this.knittingType[l], ' ', arr[k][l]);
        this.KD.knittingData.kintting[0].knittingType = this.knittingType[l];
        this.KD.knittingData.kintting[0].color = this.color[k];
      //  console.log(arr[k][l]);
        let j = arr[k][l];
        this.KD.knittingData.kintting[0].weight = arr[k][l];
        this.KD.getdata(this.KD.knittingData).subscribe();


      }

    }


  }

}


