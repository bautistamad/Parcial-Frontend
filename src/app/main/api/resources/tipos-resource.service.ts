import { Injectable } from '@angular/core';
import { IResourceMethodObservable, Resource, ResourceAction, ResourceHandler, ResourceParams, ResourceRequestMethod, ResourceResponseBodyType } from '@ngx-resource/core';
import { ITipos } from '../models/i-tipos';
import { environment } from 'src/environments/environment';

@Injectable()
@ResourceParams({
  pathPrefix: `${environment.apiUrl}/api`
})
export class TiposResourceService  extends Resource{

  constructor(handler?: ResourceHandler) {
    super(handler);
  }

  @ResourceAction({
    path:'/tipos',
    method: ResourceRequestMethod.Get,
    responseBodyType: ResourceResponseBodyType.Json
  })

  get!: IResourceMethodObservable<void, ITipos[]>
}
