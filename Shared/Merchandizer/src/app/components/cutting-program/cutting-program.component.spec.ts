import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttingProgramComponent } from './cutting-program.component';

describe('CuttingProgramComponent', () => {
  let component: CuttingProgramComponent;
  let fixture: ComponentFixture<CuttingProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuttingProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuttingProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
