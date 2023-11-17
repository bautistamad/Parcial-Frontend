import { ResolveFn } from '@angular/router';
import { ITipos } from '../models/i-tipos';
import { inject } from '@angular/core';
import { TiposResourceService } from '../resources/tipos-resource.service';
import { EMPTY, catchError, of } from 'rxjs';
import { AppErrorService } from 'src/app/core/handlers/app-error.service';

export const tiposResolver: ResolveFn<ITipos[]> = (route, state) => {
  const appErrorService = inject(AppErrorService);
  return inject(TiposResourceService).get().pipe(
    catchError(error => {
      appErrorService.handleError(error);
      return EMPTY;
    })
  )
};
