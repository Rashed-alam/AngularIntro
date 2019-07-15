import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdntComponent } from './stdnt.component';

describe('StdntComponent', () => {
  let component: StdntComponent;
  let fixture: ComponentFixture<StdntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
