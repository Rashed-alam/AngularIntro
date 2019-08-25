import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceArchiveComponent } from './price-archive.component';

describe('PriceArchiveComponent', () => {
  let component: PriceArchiveComponent;
  let fixture: ComponentFixture<PriceArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
