import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricResultComponent } from './fabric-result.component';

describe('FabricResultComponent', () => {
  let component: FabricResultComponent;
  let fixture: ComponentFixture<FabricResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabricResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
