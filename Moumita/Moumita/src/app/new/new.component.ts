import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DepFlags } from '@angular/compiler/src/core';
import { typeSourceSpan } from '@angular/compiler';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
styleUrls: ['./new.component.css']

  


  
})
export class NewComponent implements OnInit {

  demoList:any=[]
  constructor() {}

  ngOnInit() {
   
  }

  
  

  submitInfo(loginForm: NgForm) {
   //console.log("ok");
   const name = loginForm.controls["name"].value;
   const email = loginForm.controls["email"].value;
   const pass = loginForm.controls["pass"].value;

 // this.demoList.push(name,email,pass);
  this.demoList.push({
    name:name,
    email:email,
    pass:pass

  })
  console.log(this.demoList)
   console.log(name);
   console.log(email);
   console.log(pass);
 
  
  }
}
