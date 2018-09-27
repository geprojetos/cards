import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormAddCardComponent } from './form-add-card.component';
import { FormMessageValidateModule } from '../form-message-validate/form-message-validate.module';
import { CardBaseModule } from '../../card/card-base/card-base.module';
import { CardListService } from '../../card/card-list/card-list.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormMessageValidateModule,
    CardBaseModule
  ],
  declarations: [ FormAddCardComponent ],
  exports: [ FormAddCardComponent ],
  providers: [ CardListService ]
})
export class FormAddCardModule { }
