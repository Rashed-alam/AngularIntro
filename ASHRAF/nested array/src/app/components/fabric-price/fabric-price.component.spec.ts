import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricPriceComponent } from './fabric-price.component';

describe('FabricPriceComponent', () => {
  let component: FabricPriceComponent;
  let fixture: ComponentFixture<FabricPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabricPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
