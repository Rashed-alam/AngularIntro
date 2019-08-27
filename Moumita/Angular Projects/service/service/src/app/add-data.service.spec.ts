import { TestBed } from '@angular/core/testing';

import { AddDataService } from './add-data.service';

describe('AddDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddDataService = TestBed.get(AddDataService);
    expect(service).toBeTruthy();
  });
});
