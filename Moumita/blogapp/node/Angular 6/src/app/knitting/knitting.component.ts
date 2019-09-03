import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KnittingService } from '../shared/Knitting.service';
 import {Knitting} from '../shared/knitting';
import { send } from 'q';

@Component({
  selector: 'app-knitting',
  templateUrl: './knitting.component.html',
  styleUrls: ['./knitting.component.css']
})
export class KnittingComponent implements OnInit {
  // knittingService: any;
  knitting:any={};
 



  constructor(private knittingService:KnittingService, private router: Router) { 

  }

  ngOnInit() {

  }
  createTarget(){
    this.knittingService.createTarget(this.knitting).subscribe()
 }
 sendTo(){
   this.knitting.extra= this.knitting.ptarget- this.knitting.shift*this.knitting.production
 }

 getBalance(){

if(this.knitting.production>this.knitting.ptarget){
this.sendTo();
}
// console.log(this.knitting.shift);
else if(this.knitting.shift == undefined){
  alert('please select shift')
}

else if(this.knitting.ptarget-this.knitting.shift*this.knitting.production==0){
  //this.knitting.ptarget =0;
  this.knitting.balance= this.knitting.ptarget-this.knitting.shift*this.knitting.production

  alert('Target Complete')
}
else{
  console.log('balance cal',this.knitting.balance= this.knitting.ptarget-this.knitting.shift*this.knitting.production)
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

