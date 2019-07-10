import { TestBed } from '@angular/core/testing';

import { EmpserveService } from './empserve.service';

describe('EmpserveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpserveService = TestBed.get(EmpserveService);
    expect(service).toBeTruthy();
  });
});
