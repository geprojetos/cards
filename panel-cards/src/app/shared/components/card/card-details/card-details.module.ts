import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CardDetailsContentComponent } from './card-details-content/card-details-content.component';
import { CardDetailsRoutingModule } from './card-details.routing.module';
import { CardListService } from '../card-list/card-list.service';
import { CardBaseModule } from '../card-base/card-base.module';
import { CardCommentsModule } from '../card-comments/card-comments.module';
import { DirectivesModule } from '../../../directives/directives.module';
import { FormMessageValidateModule } from '../../form/form-message-validate/form-message-validate.module';
import { ModalModule } from '../../modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardBaseModule,
    CardCommentsModule,
    DirectivesModule,
    FormMessageValidateModule,
    DirectivesModule,
    ModalModule,
    CardDetailsRoutingModule
  ],
  declarations: [
    CardDetailsContentComponent
  ],
  exports: [
    CardDetailsContentComponent
  ],
  providers: [
    CardListService
  ]
})
export class CardDetailsModule { }
