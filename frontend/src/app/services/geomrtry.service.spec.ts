import { TestBed } from '@angular/core/testing';

import { GeomrtryService } from './geomrtry.service';

describe('GeomrtryService', () => {
  let service: GeomrtryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeomrtryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
