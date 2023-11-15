import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { temasResolver } from './temas.resolver';

describe('temasResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => temasResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
