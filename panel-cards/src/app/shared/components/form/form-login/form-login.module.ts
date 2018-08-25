import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FormLoginComponent } from './form-login.component';
import { FormMessageValidateModule } from '../form-message-validate/form-message-validate.module';
import { FormLoginService } from './form-login.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormMessageValidateModule
  ],
  declarations: [
    FormLoginComponent
  ],
  exports: [
    FormLoginComponent
  ],
  providers: [
    FormLoginService
  ]
})
export class FormLoginModule { }
