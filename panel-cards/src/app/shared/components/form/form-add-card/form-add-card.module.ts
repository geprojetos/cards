import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormAddCardComponent } from './form-add-card.component';
import { FormMessageValidateModule } from '../form-message-validate/form-message-validate.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormMessageValidateModule
  ],
  declarations: [ FormAddCardComponent ],
  exports: [ FormAddCardComponent ]
})
export class FormAddCardModule { }