import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: MainComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MainRoutingModule { }
