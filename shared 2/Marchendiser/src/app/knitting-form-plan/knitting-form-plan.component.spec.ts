import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnittingFormPlanComponent } from './knitting-form-plan.component';

describe('KnittingFormPlanComponent', () => {
  let component: KnittingFormPlanComponent;
  let fixture: ComponentFixture<KnittingFormPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnittingFormPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnittingFormPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
