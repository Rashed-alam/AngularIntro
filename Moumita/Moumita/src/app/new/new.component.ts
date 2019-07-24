import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
   
  }
  submitInfo(loginForm: NgForm) {
   console.log("ok");
   const name = loginForm.controls["name"].value;
   const email = loginForm.controls["email"].value;
   const pass = loginForm.controls["pass"].value;
  //  const password = loginForm.controls["pass"].value;
  console.log(name);
   console.log(email);
   console.log(pass);
  //  console.log(password);
  
  }
}
