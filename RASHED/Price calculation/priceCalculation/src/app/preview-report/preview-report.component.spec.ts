import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewReportComponent } from './preview-report.component';

describe('PreviewReportComponent', () => {
  let component: PreviewReportComponent;
  let fixture: ComponentFixture<PreviewReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
