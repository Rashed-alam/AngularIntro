import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnittingComponent } from './knitting.component';

describe('KnittingComponent', () => {
  let component: KnittingComponent;
  let fixture: ComponentFixture<KnittingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnittingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
