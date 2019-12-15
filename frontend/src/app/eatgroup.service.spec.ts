import { TestBed } from '@angular/core/testing';

import { EatgroupService } from './eatgroup.service';

describe('EatgroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EatgroupService = TestBed.get(EatgroupService);
    expect(service).toBeTruthy();
  });
});
