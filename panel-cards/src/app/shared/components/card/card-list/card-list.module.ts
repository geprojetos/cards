import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardListComponent } from './card-list.component';
import { CardBaseModule } from '../card-base/card-base.module';

@NgModule({
  imports: [
    CommonModule,
    CardBaseModule
  ],
  declarations: [
    CardListComponent
  ],
  exports: [
    CardListComponent
  ]
})
export class CardListModule { }
