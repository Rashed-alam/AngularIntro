import { TestBed } from '@angular/core/testing';

import { KinttingPlanService } from './kintting-plan.service';

describe('KinttingPlanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KinttingPlanService = TestBed.get(KinttingPlanService);
    expect(service).toBeTruthy();
  });
});
