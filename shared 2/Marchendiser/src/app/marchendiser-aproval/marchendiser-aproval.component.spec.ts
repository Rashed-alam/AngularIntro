import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchendiserAprovalComponent } from './marchendiser-aproval.component';

describe('MarchendiserAprovalComponent', () => {
  let component: MarchendiserAprovalComponent;
  let fixture: ComponentFixture<MarchendiserAprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarchendiserAprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarchendiserAprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
