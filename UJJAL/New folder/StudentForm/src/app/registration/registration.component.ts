import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormArray,FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  title = "Student Registration Form";
  // const ClassNames;
  msg:string;
  regForm: FormGroup;
  regFormTeacher: FormGroup;
  
  arr:any = [];
  arrTeacher:any = [];

  showstd:boolean= false;
  showtch:boolean = false;


  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    //Form Builder for Student
    this.regForm = this.fb.group({
      Roll: ['',[Validators.required,Validators.minLength(4)]],
      Name: [''],
      dob:[''],
      ClassName:[''],
      address: this.fb.group ({
        city: ['',Validators.required],
        state: [''],
        postal: ['']
      })
  
    })

    //Form Builder for Teacher
    this.regFormTeacher = this.fb.group({
      Tid: [''],
      TName: [''],
      Tdob:[''],
      Depart:[''],
      addressteacher: this.fb.group ({
        Tcity: [''],
        Tstate: [''],
        Tpostal: ['']
      })
  
    })
  }

  onSubmit(val: any){
 
    this.arr.push(val);
    console.log(JSON.stringify(this.arr));
    

    if (this.regForm.valid) {
      this.msg = "Registration Successful";
      this.regForm.reset();
    }
    else
      this.msg = "Registration unsuccessful"
  
  }

  onSubmitTeacher(val: any){
 
    this.arrTeacher.push(val);
    console.log(JSON.stringify(this.arrTeacher));
    console.log('tid: '+this.arrTeacher.Tid);

    if (this.regFormTeacher.valid) {
      this.msg = "Registration Successful";
      this.regFormTeacher.reset();
    }
    else
      this.msg = "Registration unsuccessful"
  
  }


  SelectStudent(){

  this.showstd = true;
  this.showtch = false;
  }

  SelectTeacher(){
 
    this.showstd = false;
    this.showtch = true;
  }

}
