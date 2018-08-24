import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormLoginComponent } from './form-login/form-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FormLoginComponent
  ]
})
export class FormModule { }
