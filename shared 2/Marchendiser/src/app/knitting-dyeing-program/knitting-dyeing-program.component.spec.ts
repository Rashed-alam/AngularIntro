import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnittingDyeingProgramComponent } from './knitting-dyeing-program.component';

describe('KnittingDyeingProgramComponent', () => {
  let component: KnittingDyeingProgramComponent;
  let fixture: ComponentFixture<KnittingDyeingProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnittingDyeingProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnittingDyeingProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
