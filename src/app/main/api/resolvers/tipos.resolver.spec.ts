import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { tiposResolver } from './tipos.resolver';

describe('tiposResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => tiposResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
