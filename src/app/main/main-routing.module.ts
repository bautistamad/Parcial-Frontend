import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { FormComponent } from './pages/form/form.component';
import { tiposResolver } from './api/resolvers/tipos.resolver';
import { SuccessComponent } from './pages/success/success.component';

const routes: Routes = [
  {path: '', component: MainComponent, children: [
    {path: '', component: FormComponent, resolve: {tipos: tiposResolver}},
    {path: 'success', component: SuccessComponent}
  ] }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
