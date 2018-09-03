import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardDetailsContentComponent } from './card-details-content/card-details-content.component';
import { CardDetailsRoutingModule } from './card-details.routing.module';

@NgModule({
  imports: [
    CommonModule,
    CardDetailsRoutingModule
  ],
  declarations: [
    CardDetailsContentComponent
  ],
  exports: [
    CardDetailsContentComponent
  ]
})
export class CardDetailsModule { }
