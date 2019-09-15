import { MaterialFormsModule } from './forms/material-forms.module';
import { DialogsModule } from './dialogs/dialogs.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DialogsModule,
    MaterialFormsModule
  ]
})
export class SharedModule { }
