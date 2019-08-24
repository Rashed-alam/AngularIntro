import { TestBed } from '@angular/core/testing';

import { PriceCalculationService } from './price-calculation.service';

describe('PriceCalculationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PriceCalculationService = TestBed.get(PriceCalculationService);
    expect(service).toBeTruthy();
  });
});
