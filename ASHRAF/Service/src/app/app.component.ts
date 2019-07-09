import { Component } from '@angular/core';
import { CalculationService } from './calculation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Service';

  sum: number = 0; //the 

  constructor(calc:CalculationService){
    this.sum = calc.add(1,2,3,4);
  }
}
