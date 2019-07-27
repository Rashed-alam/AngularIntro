import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DepFlags } from '@angular/compiler/src/core';
import { typeSourceSpan } from '@angular/compiler';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  demoList:any=[]
  constructor() { }

  ngOnInit() {
  }
  submitInfo(loginForm: NgForm) {
    //console.log("ok");
    const name = loginForm.controls["name"].value;
    const dept = loginForm.controls["dept"].value;
    const res = loginForm.controls["res"].value;

    this.demoList.push({
      name:name,
      dept:dept,
      res:res
  
    })
  }

}
