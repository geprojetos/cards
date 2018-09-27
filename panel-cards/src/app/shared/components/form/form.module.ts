import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormLoginComponent } from './form-login/form-login.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { FormMessageValidateComponent } from './form-message-validate/form-message-validate.component';
import { FormAddCardComponent } from './form-add-card/form-add-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    FormLoginComponent,
    FormCadastroComponent,
    FormMessageValidateComponent,
    FormAddCardComponent
  ]
})
export class FormModule { }
