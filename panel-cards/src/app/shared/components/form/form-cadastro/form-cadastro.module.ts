import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormCadastroComponent } from './form-cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FormCadastroComponent
  ],
  exports: [
    FormCadastroComponent
  ]
})
export class FormCadastroModule { }
