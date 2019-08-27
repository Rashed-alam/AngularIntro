import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DepFlags } from '@angular/compiler/src/core';
import { typeSourceSpan } from '@angular/compiler';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  tecList:any=[]
  constructor() { }

  ngOnInit() {
  }

  submitInfo(loginForm: NgForm) {
   
    const name = loginForm.controls["name"].value;
    const add = loginForm.controls["add"].value;
    const dept = loginForm.controls["dept"].value;
    const des = loginForm.controls["des"].value;


    this.tecList.push({
      name:name,
      add:add,
      dept:dept,
      des:des
  
  
    })
  }

}
