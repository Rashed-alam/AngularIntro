import { Component, OnInit } from '@angular/core';
import {AddDataService} from '../add-data.service'
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public add: any;

  constructor(private _addDataService: AddDataService) { }
  
  ngOnInit() {
    this.add= this. _addDataService.getSummation();
    this.add =this._addDataService.getDedauction();
    this.add =this._addDataService.getMultiply();
    this.add =this._addDataService.getDivide();

    //console.log('summation=' + this.add);
    //console.log('deduction=' + this.add);
  }
  // this.add= this. _addDataService.getSummation();
  //   console.log('summation=' + this.add);
  getSummation(){
    this.add =this._addDataService.getSummation();
    alert(this.add);
  }
  getDedauction(){
    this.add =this._addDataService.getDedauction();
    alert(this.add);
  }
  getMultiply(){
    this.add =this._addDataService.getMultiply();
    alert(this.add);
  }
  getDivide(){
    this.add =this._addDataService.getDivide();
    alert(this.add);
  }

 
}
