import { TestBed } from '@angular/core/testing';

import { FabricEntryService } from './fabric-entry.service';

describe('FabricEntryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FabricEntryService = TestBed.get(FabricEntryService);
    expect(service).toBeTruthy();
  });
});
