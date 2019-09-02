import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorApprovalComponent } from './director-approval.component';

describe('DirectorApprovalComponent', () => {
  let component: DirectorApprovalComponent;
  let fixture: ComponentFixture<DirectorApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
