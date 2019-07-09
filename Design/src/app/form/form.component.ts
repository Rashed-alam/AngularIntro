import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  studentselected :boolean = false;
  teacherselected :boolean = false;
  a:boolean=false;
  b:boolean=false;
  StudentArrays = []; //Array for Students info
  TeacherArrays = []; //Array for Teachers Info

  StudentSelected(){
    this.studentselected = true;
    this.teacherselected=false;

  }

  TeacherSelected(){
    this.teacherselected = true;
    this.studentselected=false;
    
  }
  aselected(){
   this.a=true;
  }
  bselected(){
    this.b=true;
  }

  OnSubmitStudent(value: any){
      this.StudentArrays.push(value);

  }

  OnSubmitTeacher(value: any){
   
    this.TeacherArrays.push(value);
    console.log(JSON.stringify(this.TeacherArrays))

    
  }

  constructor() { }

  ngOnInit() {
  }

}
