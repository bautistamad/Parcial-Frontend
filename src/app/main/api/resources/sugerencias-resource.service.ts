import { Injectable } from '@angular/core';
import { IResourceMethodObservable, Resource, ResourceAction, ResourceHandler, ResourceParams, ResourceRequestMethod } from '@ngx-resource/core';
import { environment } from 'src/environments/environment';
import { ISugerencia } from '../models/i-sugerencia';

@Injectable()
@ResourceParams({
  pathPrefix: `${environment.apiUrl}/api`
})
export class SugerenciasResourceService extends Resource {

  constructor(handler?: ResourceHandler) {
    super(handler);
  }

  @ResourceAction({
    path: '/persona',
    method: ResourceRequestMethod.Post,
  })
  post!: IResourceMethodObservable< ISugerencia , void>;
}
