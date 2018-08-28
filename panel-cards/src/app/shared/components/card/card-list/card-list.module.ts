import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardListComponent } from './card-list.component';
import { CardBaseModule } from '../card-base/card-base.module';
import { CardListService } from './card-list.service';
import { CardListResolve } from './card-list.resolve';

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
    CardListService,
    CardListResolve
  ]
})
export class CardListModule { }
