import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knitting-dyeing-program',
  templateUrl: './knitting-dyeing-program.component.html',
  styleUrls: ['./knitting-dyeing-program.component.css']
})
export class KnittingDyeingProgramComponent implements OnInit {
  color = ['Blue', 'Green', 'Red', 'Gray'];
  knittingType = ['FDiaOpen', 'S/Jersy', '2/1 Lycra Rib'];
  arr: number[][] = [];


  constructor() { }
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



  getvalue(f: number, i: number, j: number) {

    //   console.log(f, i, j);
    //  array[5][5];
    this.arr[i][j] = f;

  //  console.log(this.arr[i][j]);


    // this.arr[i][j].push(f);

    for (let k = 0; k < this.color.length; k++) {
      for (let l = 0; l < this.knittingType.length; l++) {
        console.log(this.arr[k][l]);
      }

    }
  }
  // for (let k = 0; k < this.color.length; k++) {
  //   for (let l = 0; l < this.knittingType.length; l++) {

  //     console.log(this.arr[k][l]);

  //   }
  // }



}


