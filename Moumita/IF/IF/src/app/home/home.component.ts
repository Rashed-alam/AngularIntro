import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DepFlags } from '@angular/compiler/src/core';
import { typeSourceSpan } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  demoList:any=[];
  tecList:any=[];

  isStudentHidden:boolean=false;
  isTeacherHidden:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  getStudentData(){
    this.isStudentHidden=true;
    this.isTeacherHidden=false;
   // this.submitInfo(loginForm);
  }
  getTeacherData(){
    this.isTeacherHidden=true;
    this.isStudentHidden=false;
   // this.submit1Info(loginForm1);
  }
  submitInfo(loginForm: NgForm) {
   

     console.log(loginForm.value);
  
     this.demoList.push({
      name:loginForm.value.name,
      add:loginForm.value.add,
      age:loginForm.value.age,
      dept:loginForm.value.dept,
      res:loginForm.value.res,
  
  
    })
  }
  

  submit1Info(teacherForm: NgForm) {
   
    

    console.log(teacherForm.value);
    this.tecList.push({
      name1:teacherForm.value.name1,
      add1:teacherForm.value.add1,
      dept1:teacherForm.value.dept1,
      des:teacherForm.value.des

    })

    console.log(JSON.stringify(this.tecList))
  }


}


