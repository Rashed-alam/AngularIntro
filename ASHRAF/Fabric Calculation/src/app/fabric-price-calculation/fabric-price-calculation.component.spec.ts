import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricPriceCalculationComponent } from './fabric-price-calculation.component';

describe('FabricPriceCalculationComponent', () => {
  let component: FabricPriceCalculationComponent;
  let fixture: ComponentFixture<FabricPriceCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabricPriceCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricPriceCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
