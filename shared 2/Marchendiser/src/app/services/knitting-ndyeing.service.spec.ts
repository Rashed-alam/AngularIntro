import { TestBed } from '@angular/core/testing';

import { KnittingNDyeingService } from './knitting-ndyeing.service';

describe('KnittingNDyeingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KnittingNDyeingService = TestBed.get(KnittingNDyeingService);
    expect(service).toBeTruthy();
  });
});
