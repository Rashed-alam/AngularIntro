import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  OnSubmit( value: any){
    console.log('ok');
    console.log(value);
  }
  

  constructor() { }

  ngOnInit() {
  }

}
