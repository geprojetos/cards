import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormLoginComponent } from './form-login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FormLoginComponent
  ],
  exports: [
    FormLoginComponent
  ]
})
export class FormLoginModule { }
