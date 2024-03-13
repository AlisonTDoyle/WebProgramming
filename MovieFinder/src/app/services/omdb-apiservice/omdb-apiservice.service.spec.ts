import { TestBed } from '@angular/core/testing';

import { OmdbAPIServiceService } from './omdb-apiservice.service';

describe('OmdbAPIServiceService', () => {
  let service: OmdbAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmdbAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
