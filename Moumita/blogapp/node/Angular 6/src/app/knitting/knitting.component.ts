import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KnittingService } from '../shared/Knitting.service';
 import {Knitting} from '../shared/knitting';

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
 getBalance(balance){
  
console.log(this.knitting.balance= this.knitting.ptarget-this.knitting.shift*this.knitting.production)

 }

    onClick(){
    console.log('submit clicked');
      
    console.log('model data before submit',this.knitting);
       this.knittingService.createTarget(this.knitting).subscribe(data=>{
           console.log('after submit',data);
           this.knitting.getBalance().subscribe()
          //  this.reset();
 
           //fetch data database to table-------------------------
 
          //  this.Service.getAllUserData()
          //  .subscribe(data =>{
          //    console.log(data);
          //    this.getAllUserDataFunc(data)
      //  });
       });
      }
    }

