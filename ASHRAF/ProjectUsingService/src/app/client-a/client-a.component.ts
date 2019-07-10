import { Component, OnInit } from '@angular/core';
import { CalcService } from '../calc.service';
@Component({
  selector: 'app-client-a',
  templateUrl: './client-a.component.html',
  styleUrls: ['./client-a.component.css']
})
export class ClientAComponent implements OnInit {

  ngOnInit() {

  }
  sum :number = 0;
  constructor(calculate:CalcService){
    this.sum = calculate.add(1,2,3,4,5);
  }

}
