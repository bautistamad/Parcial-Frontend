import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { TiposResourceService } from './api/resources/tipos-resource.service';
import { TemasResourceService } from './api/resources/temas-resource.service';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { MainComponent } from './main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './pages/form/form.component';
import { SugerenciasResourceService } from './api/resources/sugerencias-resource.service';
import { SuccessComponent } from './pages/success/success.component';
import { AppMessageService } from '../core/services/app-message.service';

@NgModule({
  declarations: [
    MainComponent,
    SplashPageComponent,
    FormComponent,
    SuccessComponent
  ],
  providers: [
    TiposResourceService,
    TemasResourceService,
    SugerenciasResourceService,
    AppMessageService,
  ],
  imports: [
    
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MainModule { }
