import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineCapacityComponent } from './machine-capacity.component';

describe('MachineCapacityComponent', () => {
  let component: MachineCapacityComponent;
  let fixture: ComponentFixture<MachineCapacityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineCapacityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineCapacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
