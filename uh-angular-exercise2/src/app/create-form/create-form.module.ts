import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFormComponent } from './create-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ], 
  exports: [
    CreateFormComponent
  ]
})
export class CreateFormModule { }
