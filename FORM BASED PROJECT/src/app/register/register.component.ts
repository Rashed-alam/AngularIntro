import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  save(userform:NgForm){
    console.log('ok');
  
    const emailId=userform.controls['email'].value;
    const passwordId=userform.controls['password'].value;
    const AddressId=userform.controls['Address'].value;
    const address2Id=userform.controls['address2'].value;
    const cityId=userform.controls['city'].value;
    const zipId=userform.controls['zip'].value;
    const checkId=userform.controls['check'].value;
   console.log(userform.value) ;
  }
}

