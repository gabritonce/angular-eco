import { TestBed } from '@angular/core/testing';

import { FakedatabaseService } from './fakedatabase.service';

describe('FakedatabaseService', () => {
  let service: FakedatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakedatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
