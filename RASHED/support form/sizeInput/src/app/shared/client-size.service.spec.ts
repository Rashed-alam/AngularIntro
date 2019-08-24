import { TestBed } from '@angular/core/testing';

import { ClientSizeService } from './client-size.service';

describe('ClientSizeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientSizeService = TestBed.get(ClientSizeService);
    expect(service).toBeTruthy();
  });
});
