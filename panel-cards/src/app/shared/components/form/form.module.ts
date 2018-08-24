import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormLoginComponent } from './form-login/form-login.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FormLoginComponent,
    FormCadastroComponent
  ]
})
export class FormModule { }
