import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CardBaseComponent } from './card-base/card-base.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardGridComponent } from './card-list/card-grid/card-grid.component';
import { CardSearchComponent } from './card-search/card-search.component';
import { CardNotRegisteredComponent } from './card-list/card-not-registered/card-not-registered.component';
import { CardButtonMoreCardsComponent } from './card-button-more-cards/card-button-more-cards.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    CardBaseComponent,
    CardListComponent,
    CardGridComponent,
    CardSearchComponent,
    CardNotRegisteredComponent,
    CardButtonMoreCardsComponent
  ]
})
export class CardModule { }
