import { Component } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';

 pdf(){
    var doc = new jsPDF()
 
doc.text('Hello world!', 10, 10)
doc.save('a4.pdf')
  }
}
