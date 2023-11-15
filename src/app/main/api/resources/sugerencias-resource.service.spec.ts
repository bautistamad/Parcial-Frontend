import { TestBed } from '@angular/core/testing';

import { SugerenciasResourceService } from './sugerencias-resource.service';

describe('SugerenciasResourceService', () => {
  let service: SugerenciasResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SugerenciasResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
