import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormLoginComponent } from './form-login.component';
import { FormMessageValidateModule } from '../form-message-validate/form-message-validate.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormMessageValidateModule
  ],
  declarations: [
    FormLoginComponent
  ],
  exports: [
    FormLoginComponent
  ]
})
export class FormLoginModule { }
