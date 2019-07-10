import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormArray } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  demoForm: FormGroup;
   
   arrayItems: {
     id: number;
     title: string;
   }[];

  constructor(private _formBuilder: FormBuilder) {
    
  this.demoForm = this._formBuilder.group({
         demoArray: this._formBuilder.array([])
      });
   }

   ngOnInit() {
     
  this.arrayItems = [];   
  }

  get demoArray() {
    return this.demoForm.get('demoArray') as FormArray;
 }
 addItem(item) {
    this.arrayItems.push(item);
    this.demoArray.push(this._formBuilder.control(false));
 }
 removeItem() {
    this.arrayItems.pop();
    this.demoArray.removeAt(this.demoArray.length - 1);
 }
}
