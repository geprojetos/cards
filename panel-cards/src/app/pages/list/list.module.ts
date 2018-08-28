import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCardsComponent } from './list-cards/list-cards.component';
import { ListRoutingModule } from './list.routing.module';
import { CardListModule } from '../../shared/components/card/card-list/card-list.module';

@NgModule({
  imports: [
    CommonModule,
    CardListModule,
    ListRoutingModule
  ],
  declarations: [
    ListCardsComponent
  ]
})
export class ListModule { }
