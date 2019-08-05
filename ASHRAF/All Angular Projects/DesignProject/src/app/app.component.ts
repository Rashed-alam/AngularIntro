import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DesignProject';
  studentselected: boolean = false; //initially student is not clicked so its false.
  teacherselected: boolean = false; //initially teacher is not clicked so its false.
  StudentArrays = []; //Array for Students info
  TeacherArrays = []; //Array for Teachers Info
  studentpressed: boolean = false; //submit click na korle registration form ashbe na..so false
  teacherpressed: boolean = false; //submit click na korle registration form ashbe na..so false

  StudentSelected(){
    this.studentselected = true; //radio button a click korle registration form dekhanor jonno
    this.teacherselected = false;
  }

  TeacherSelected(){
    this.teacherselected = true; //radio button a click korle registration form dekhanor jonno
    this.studentselected = false;
  }

  OnSubmitStudent(value: any){
      this.StudentArrays.push(value); //array er modhe value rakhlam
      this.studentpressed = true;
      

  }

  OnSubmitTeacher(value: any){
    this.TeacherArrays.push(value);  //array er modhe value rakhlam
    this.teacherpressed = true; //submit click korse so registration form dekhao akhon
  }

  

}
