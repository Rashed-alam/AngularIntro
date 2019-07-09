import { Component, OnInit } from '@angular/core';
import { SummationService } from './../summation.service';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.css']
})
export class Service2Component implements OnInit {
  sum1:number=0;
coins=[];

  constructor(private criptoservice:SummationService) { 
  
  }

  ngOnInit() {
    this.coins=this.criptoservice.getMyItems();
    
  }

}
