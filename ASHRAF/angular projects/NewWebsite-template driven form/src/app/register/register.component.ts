import { Component} from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {

  OnSubmit( value: any){
    console.log('ok');
    console.log(value);
  
  }
}
