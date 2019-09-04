import { Component, Output, EventEmitter } from '@angular/core';
import {FormArray, FormBuilder, Validators, AbstractControl} from "@angular/forms";
import {Hobby,SubForm} from "./model";

@Component({
  selector: 'app-sub-form',
  template: `
  <span>You must fill in a person's name, age and at least 2 hobbies</span>
  <div class="container">

    <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
      <input formControlName="name" placeholder="name" type="text">
      <input formControlName="age" placeholder="age" type="number">

    <div *ngIf="thereIsAtLeastOneItemInHobbiesArray">
      <h5>Hobbies Added:</h5>
      <div *ngFor="let hobby of hobbies">
        <p>Hobby: {{hobby.name}}, frequency: {{hobby.frequency}}</p>
      </div>
    </div>

    <hobby-form (newHobby)="addNewHobby($event)"></hobby-form>

    <button type="submit" [disabled]="!form.valid">Submit Sub Form</button>
    </form>

    <pre>Sub Form Value: 
{{form.value | json }}</pre>
  </div>
  `
})
export class SubFormComponent  {
  constructor(private fb: FormBuilder) {}

  @Output('newSubForm') submitFormObjectToParent: EventEmitter<SubForm> = new EventEmitter<SubForm>();


  form = this.fb.group({
    name: ['', Validators.required],
    age: [null, [Validators.required, Validators.min(1)]],
    hobbies: this.fb.array([], this.minFormArrayLength(2))
  });

  get hobbies(): Hobby[] {
    return this.form.get('hobbies').value;
  }

  get thereIsAtLeastOneItemInHobbiesArray(): boolean {
    return (this.form.get('hobbies') as FormArray).length > 0;
  }

  submit() {
    this.submitFormObjectToParent.emit(this.form.value);
    this.emptyHobbies();
    this.form.reset();
  }

  addNewHobby(hobby: Hobby) {
    const control = this.form.get('hobbies') as FormArray;
    control.push(this.fb.group(hobby));
  }

  emptyHobbies() {
    const control = this.form.get("hobbies") as FormArray;
    let totalItems = control.value.length;
    while (totalItems > 0) {
      totalItems--;
      control.removeAt(totalItems);
    }
  }

  minFormArrayLength(min: number) {
    return (c: AbstractControl): {[key: string]: any} => {
      if (c.value.length >= min) return null;
      return { 'minLengthArray': {valid: false }};
    }
  }

}
