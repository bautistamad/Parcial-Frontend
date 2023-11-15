import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './pages/main/main.component';
import { TiposResourceService } from './api/resources/tipos-resource.service';
import { TemasResourceService } from './api/resources/temas-resource.service';
import { SplashPageComponent } from './splash-page/splash-page.component';

@NgModule({
  declarations: [
    MainComponent,
    SplashPageComponent
  ],
  providers: [
    TiposResourceService,
    TemasResourceService
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
