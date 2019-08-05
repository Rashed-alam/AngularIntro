import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAComponent } from './client-a.component';

describe('ClientAComponent', () => {
  let component: ClientAComponent;
  let fixture: ComponentFixture<ClientAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
