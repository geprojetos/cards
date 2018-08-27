import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FormCadastroComponent } from './form-cadastro.component';
import { FormMessageValidateModule } from '../form-message-validate/form-message-validate.module';
import { FormCadastroService } from './form-cadastro.service';
import { FormCadastroValidatorService } from './form-cadastro-validator.service';

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
  ],
  providers: [
    FormCadastroService,
    FormCadastroValidatorService
  ]
})
export class FormCadastroModule { }
