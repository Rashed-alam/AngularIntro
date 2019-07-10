import { CUser } from './../user';
import { SummationService } from './../summation.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.css']
})
export class Service1Component implements OnInit {

public users =[];

  constructor(private list:SummationService) {
  
   }

  ngOnInit() {
    this.show();
    }
   
   
    show():void{
      this.list.show()
      .subscribe(data => this.users = data
       );
    }
    add(vauser:CUser){
      console.log(vauser);
    
      this.list
        .add(vauser)
        .subscribe(data => this.users.push(data));
     

    };
  


}
