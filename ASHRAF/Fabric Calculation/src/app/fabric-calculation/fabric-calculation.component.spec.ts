import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricCalculationComponent } from './fabric-calculation.component';

describe('FabricCalculationComponent', () => {
  let component: FabricCalculationComponent;
  let fixture: ComponentFixture<FabricCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabricCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
