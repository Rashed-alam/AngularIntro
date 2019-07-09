import { SummationService } from './../summation.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.css']
})
export class Service1Component implements OnInit {
  sum:number=0;


  constructor(private a:SummationService) {
 
   }

  ngOnInit() {
    this.sum=this.a.add(1,2);
    console.log('check='+this.sum);
  
  }

}
