import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  userform=new FormGroup({
    name:new FormControl(),
    email:new FormControl(),
    address:new FormGroup({
      street:new FormControl(),
      city:new FormControl(),
      postalcode:new FormControl()
    })

    

  });
onSubmit(){
  console.log(this.userform.value);
}

  constructor() { }

  ngOnInit() {
  }

}
