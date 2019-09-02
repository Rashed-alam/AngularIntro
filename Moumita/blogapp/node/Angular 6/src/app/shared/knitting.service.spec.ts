import { TestBed, inject } from '@angular/core/testing';

import { KnittingService } from './knitting.service';

describe('KnittingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KnittingService]
    });
  });

  it('should be created', inject([KnittingService], (service: KnittingService) => {
    expect(service).toBeTruthy();
  }));
});
