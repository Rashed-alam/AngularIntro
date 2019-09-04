import { Component } from '@angular/core';
import {FormArray, FormBuilder} from "@angular/forms";
import {SubForm} from "./model";

@Component({
  selector: 'my-app',
  template: `
<p>Form 2:</p>
<app-sub-form (newSubForm)="addSubForm($event)"></app-sub-form>

  `
})
export class AppComponent  {
  constructor(private fb: FormBuilder) {}
  buttonHasBeenClicked: boolean = false;



  form2 = new FormArray([]);

  addSubForm(subForm: SubForm) {
    this.form2.push(this.fb.group(subForm));
  }

}
