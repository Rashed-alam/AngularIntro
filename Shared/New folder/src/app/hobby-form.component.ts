import { Component, Output, EventEmitter } from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import {Hobby} from "./model";

@Component({
  selector: 'hobby-form',
  template: `
  <div class="container">
    <p>Add a hobby</p>
    <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
      <input formControlName="name" placeholder="name" type="text">
      <input formControlName="frequency" placeholder="frequency" type="text">
    <button type="submit" [disabled]="!form.valid">Add Hobby</button>
    </form>
  </div>
  `,
  styles: [`
    .container {
      border: 1px solid black;
      border-radius: 4px;
      margin: 15px;
    }
  `]
})
export class HobbyFormComponent  {
  constructor(private fb: FormBuilder) {}

  @Output('newHobby') addHobby: EventEmitter<Hobby> = new EventEmitter<Hobby>();

  form = this.fb.group({
    name: ['', Validators.required],
    frequency: ['', Validators.required]
  });

  submit() {
    this.addHobby.emit(this.form.value);
    this.form.reset();
  }

}
