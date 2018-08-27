import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FormCadastroComponent } from './form-cadastro.component';
import { FormMessageValidateModule } from '../form-message-validate/form-message-validate.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormMessageValidateModule
  ],
  declarations: [
    FormCadastroComponent
  ],
  exports: [
    FormCadastroComponent
  ]
})
export class FormCadastroModule { }
