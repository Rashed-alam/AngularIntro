import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettableComponent } from './gettable.component';

describe('GettableComponent', () => {
  let component: GettableComponent;
  let fixture: ComponentFixture<GettableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
