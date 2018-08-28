import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardListComponent } from './card-list.component';
import { CardBaseModule } from '../card-base/card-base.module';
import { CardListService } from './card-list.service';

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
  ],
  providers: [
    CardListService
  ]
})
export class CardListModule { }
