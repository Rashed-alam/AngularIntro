import { TestBed } from '@angular/core/testing';

import { FabricPriceServiceService } from './fabric-price-service.service';

describe('FabricPriceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FabricPriceServiceService = TestBed.get(FabricPriceServiceService);
    expect(service).toBeTruthy();
  });
});
