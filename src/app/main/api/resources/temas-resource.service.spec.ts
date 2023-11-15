import { TestBed } from '@angular/core/testing';

import { TemasResourceService } from './temas-resource.service';

describe('TemasResourceService', () => {
  let service: TemasResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemasResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
