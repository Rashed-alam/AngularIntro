import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBComponent } from './client-b.component';

describe('ClientBComponent', () => {
  let component: ClientBComponent;
  let fixture: ComponentFixture<ClientBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
