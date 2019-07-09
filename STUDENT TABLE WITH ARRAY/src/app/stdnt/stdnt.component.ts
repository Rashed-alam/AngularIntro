import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import { __spreadArrays } from 'tslib';

@Component({
  selector: 'app-stdnt',
  templateUrl: './stdnt.component.html',
  styleUrls: ['./stdnt.component.css']
})
export class StdntComponent implements OnInit {
 
 
  user: any =[];
  save(userform:NgForm){
  
    const email=userform.controls['email'].value;
    const roll=userform.controls['roll'].value;
    const address=userform.controls['Address'].value;
    const city=userform.controls['city'].value;
    const zip=userform.controls['zip'].value;
    const lev=userform.controls['level'].value;
    // this.user.push(
    //   {
    //     email:a,
    //     roll:b,
    //     address:c,
    //     city:d,
    //     zip:e,
    //   }
    // );
    this.user.push({email, roll, address, city, zip,lev});
     console.log('check arraylist=' +JSON.stringify(this.user))
    
   console.log(userform.value) ;
  }
 




  ngOnInit() {
  }

}
