import { Injectable } from '@angular/core';
import { IResourceMethodObservable, Resource, ResourceAction, ResourceHandler, ResourceParams, ResourceRequestBodyType, ResourceRequestMethod, ResourceResponseBodyType } from '@ngx-resource/core';
import { environment } from 'src/environments/environment';
import { ITemas } from '../models/i-temas';

@Injectable()
@ResourceParams({
  pathPrefix: `${environment.apiUrl}/api`
})
export class TemasResourceService  extends Resource {

  constructor(handler?: ResourceHandler) {
    super(handler);
  }

  @ResourceAction({
    method: ResourceRequestMethod.Post,
    path: '/temas',
    requestBodyType: ResourceRequestBodyType.FORM_DATA,
    responseBodyType: ResourceResponseBodyType.Json
  })
  getTemas!: IResourceMethodObservable<{codTipoServicio:string},ITemas[]>;
}
