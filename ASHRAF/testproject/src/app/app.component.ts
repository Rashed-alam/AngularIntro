import { Component } from '@angular/core';
import { TestingserviceService } from 'src/app/testingservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private service: TestingserviceService) { }

  submission(){
    console.log(this.service.currenttest1.test1);
    console.log(this.service.currenttest2);
  }

}