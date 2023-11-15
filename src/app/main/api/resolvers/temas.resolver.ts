import { ResolveFn } from '@angular/router';
import { ITemas } from '../models/i-temas';
import { inject } from '@angular/core';
import { TemasResourceService } from '../resources/temas-resource.service';

export const temasResolver: ResolveFn<ITemas[]> = (route, state) => {
  return inject(TemasResourceService).getTemas({codTipoServicio: route.paramMap.get('codTipoServicio')!})
};
