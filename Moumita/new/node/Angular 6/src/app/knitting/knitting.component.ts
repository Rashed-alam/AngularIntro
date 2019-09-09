import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KnittingService } from '../shared/knittingService.service';
import {Knitting} from '../shared/knitting';
import { send } from 'q';
import { DatePipe } from '@angular/common';
import {Order} from '../shared/order';
import { from } from 'rxjs';

@Component({
  selector: 'app-knitting',
  templateUrl: './knitting.component.html',
  styleUrls: ['./knitting.component.css']
})
export class KnittingComponent implements OnInit {
 
  knitting:any={};

  myDate = new Date();
  

  constructor(private knittingService:KnittingService, private router: Router, private datePipe: DatePipe ) { 

  }

  ngOnInit() {

  
   this.knitting.date = this.datePipe.transform(this.myDate, 'dd-MM-yyyy');
  }
  createTarget(){
  
    this.knittingService.createTarget(this.knitting).subscribe()
 }
 sendTo(){
   this.knitting.extra= this.knitting.production - this.knitting.ptarget
 }

 capacity(){
  if(this.knitting.production<this.knitting.shift* 250){
    // alert('machine slow')
  }
  }
//service call----------
  getValue(){
//console.log(this.knitting.orderNo)
 this.knittingService.getData(this.knitting.orderNo).subscribe(data =>{ this.knitting.ptarget= data["ptarget"], 
        this.knitting.buyer= data["buyer"], 
        this.knitting.dDate= data["dDate"], this.knitting.leadDate= data["leadDate"],
        this.knitting.refNo= data["refNo"], this.knitting.orQty= data["orQty"],
        this.knitting.orderdate= data["orderdate"], this.knitting.description= data["description"], 
        this.knitting.style= data["style"]
  console.log(data)
   });
  }


 getBalance(){


// console.log(this.knitting.shift);
  if(this.knitting.shift == undefined){
  alert('please select shift')
}

else if(this.knitting.production>this.knitting.ptarget){
  this.sendTo();
  // alert('Machine works Faster')
 }

else if (this.knitting.production == 0){
  alert('Technical Problem')
}

else if(this.knitting.ptarget-this.knitting.production==0){
  
  this.knitting.balance= this.knitting.ptarget-this.knitting.production

  alert('Target Complete')
}
else{
 
  console.log('balance cal',this.knitting.balance= this.knitting.ptarget- this.knitting.production)
  this.capacity();
 
  
}

}
//-----------------validation---------------------
 checkRequiredFiled(){

if(this.knitting.refNo ==undefined){
  alert('please insert Ref No.')
}
 else if(this.knitting.orderNo ==undefined){
  alert('please insert Order No')
 }

 else if(this.knitting.buyer ==undefined){
   alert('Put Valid Buyer Name')
 }

else if(this.knitting.ptarget ==undefined ){
  alert('please insert target')
}
 else if(this.knitting.production ==undefined){
   alert('please insert production target')
 }
 }

//----------------submit-----------
    onClick(){
    console.log('submit clicked');
      this.checkRequiredFiled();

    console.log('model data before submit',this.knitting);
       this.knittingService.createTarget(this.knitting).subscribe(data=>{
           console.log('after submit',data);
           
       },
     (err:any)=>console.log('failed to save')
       )
      }
    }

