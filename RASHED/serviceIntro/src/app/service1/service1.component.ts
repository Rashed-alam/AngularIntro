import { CUser } from './../user';
import { SummationService } from './../summation.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.css']
})
export class Service1Component implements OnInit {

public users:CUser[] =[];

  constructor(private list:SummationService, private http:HttpClient) {
  
   }

  ngOnInit() {
    this.show();
    }
   
   
    show():void{
      this.list.show()
      .subscribe(data => this.users = data
       );
    }
    create(userform:NgForm){
      console.log(userform);
      this.http.post('http://localhost:3000/user',userform, httpOptions).subscribe(data=>{
        console.log(data)
      })
    
      // this.list
      //   .add(userform)
      //   .subscribe();
     
};
  


}
