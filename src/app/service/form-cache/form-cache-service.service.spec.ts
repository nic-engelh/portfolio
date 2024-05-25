import { TestBed } from '@angular/core/testing';

import { FormCacheServiceService } from './form-cache-service.service';

describe('FormCacheServiceService', () => {
  let service: FormCacheServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormCacheServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
