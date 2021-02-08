import { TestBed } from '@angular/core/testing';

import { StockDetailsFetchService } from './stock-details-fetch.service';

describe('StockDetailsFetchService', () => {
  let service: StockDetailsFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockDetailsFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
