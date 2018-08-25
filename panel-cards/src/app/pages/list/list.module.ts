import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCardsComponent } from './list-cards/list-cards.component';
import { ListRoutingModule } from './list.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule
  ],
  declarations: [
    ListCardsComponent
  ]
})
export class ListModule { }
