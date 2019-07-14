import  { Component } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component {
  public title= 'Student Registration Form';
  arrays = [];
  
  OnSubmit(value: any){
  
    this.arrays.push(value);  
    
  }




 

  
  
  
}
