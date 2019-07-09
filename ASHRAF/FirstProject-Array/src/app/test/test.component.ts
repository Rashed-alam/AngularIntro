import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   title ="This is testing 1";

   greetUser(){
      return "hello and welcome to my angular";
   }

   
}
