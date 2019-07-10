import { TestBed } from '@angular/core/testing';

import { EmployeeDataService } from './employee-data.service';

describe('EmployeeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeDataService = TestBed.get(EmployeeDataService);
    expect(service).toBeTruthy();
  });
});
