import { TestBed } from '@angular/core/testing';

import { RestHelperService } from './rest-helper.service';

describe('RestHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestHelperService = TestBed.get(RestHelperService);
    expect(service).toBeTruthy();
  });
});
