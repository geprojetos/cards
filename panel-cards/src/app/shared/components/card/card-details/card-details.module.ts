import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDetailsContentComponent } from './card-details-content/card-details-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardDetailsContentComponent
  ],
  exports: [
    CardDetailsContentComponent
  ]
})
export class CardDetailsModule { }
