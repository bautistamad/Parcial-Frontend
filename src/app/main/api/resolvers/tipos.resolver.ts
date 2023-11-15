import { ResolveFn } from '@angular/router';
import { ITipos } from '../models/i-tipos';
import { inject } from '@angular/core';
import { TiposResourceService } from '../resources/tipos-resource.service';

export const tiposResolver: ResolveFn<ITipos[]> = (route, state) => {
  return inject(TiposResourceService).get()
};
