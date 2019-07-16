import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSalaryWithTaxComponent } from './employee-salary-with-tax.component';

describe('EmployeeSalaryWithTaxComponent', () => {
  let component: EmployeeSalaryWithTaxComponent;
  let fixture: ComponentFixture<EmployeeSalaryWithTaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeSalaryWithTaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSalaryWithTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
