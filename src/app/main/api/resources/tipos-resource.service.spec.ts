import { TestBed } from '@angular/core/testing';

import { TiposResourceService } from './tipos-resource.service';

describe('TiposResourceService', () => {
  let service: TiposResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
