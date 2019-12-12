import { TestBed } from '@angular/core/testing';

import { EatGroupsService } from './eat-groups.service';

describe('EatGroupsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EatGroupsService = TestBed.get(EatGroupsService);
    expect(service).toBeTruthy();
  });
});
