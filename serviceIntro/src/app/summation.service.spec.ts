import { TestBed } from '@angular/core/testing';

import { SummationService } from './summation.service';

describe('SummationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SummationService = TestBed.get(SummationService);
    expect(service).toBeTruthy();
  });
});
