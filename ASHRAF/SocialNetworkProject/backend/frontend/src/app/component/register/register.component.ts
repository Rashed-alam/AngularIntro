import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   
  form: FormGroup;
  message: boolean;
  messageClass;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.createForm();
   }

  createForm(){
    this.form= this.formBuilder.group({
       name: ['',Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
      ])],
       email: ['',Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(30),
        this.validateEmail
      ])],
       phone: ['',Validators.compose([
         Validators.required,
         Validators.minLength(10),
         Validators.maxLength(11)
       ])],
       password:['',Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ])]
    })
  }

    // Function to validate e-mail is proper format
    validateEmail(controls) {
      // Create a regular expression
      const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      // Test email against regular expression
      if (regExp.test(controls.value)) {
        return null; // Return as valid email
      } else {
        return { 'validateEmail': true } // Return as invalid email
      }
    }

    //function which sends data to DB after submitting
  onRegisterSubmit(){
    const user ={
      name: this.form.get('name').value,
      email: this.form.get('email').value,
      phone: this.form.get('phone').value,
      password: this.form.get('password').value
    }
      this.authService.registerUser(user).subscribe(data => {
        
          this.router.navigate(['/login']); // Redirect to login view
        
      
    
      });
  }
  

  ngOnInit() {
  }

}
