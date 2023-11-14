import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { MessageDialogComponent } from './components/message-dialog/message-dialog.component';



@NgModule({
  declarations: [
    LoaderComponent,
    MessageDialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
