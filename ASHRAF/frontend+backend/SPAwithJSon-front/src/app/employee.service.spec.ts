import { TestBed } from '@angular/core/testing';

import { employeelist } from './employee.service';

describe('employeelist', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: employeelist = TestBed.get(employeelist);
    expect(service).toBeTruthy();
  });
});
