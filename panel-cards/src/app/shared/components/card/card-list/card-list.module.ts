import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CardListComponent } from './card-list.component';
import { CardBaseModule } from '../card-base/card-base.module';
import { CardListService } from './card-list.service';
import { CardListResolve } from './card-list.resolve';
import { CardGridComponent } from './card-grid/card-grid.component';
import { CardSearchModule } from '../card-search/card-search.module';
import { CardNotRegisteredComponent } from './card-not-registered/card-not-registered.component';
import { CardNotFoundComponent } from './card-not-found/card-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    CardBaseModule,
    CardSearchModule,
    RouterModule
  ],
  declarations: [
    CardListComponent,
    CardGridComponent,
    CardNotRegisteredComponent,
    CardNotFoundComponent
  ],
  exports: [
    CardListComponent,
    CardGridComponent,
    CardNotRegisteredComponent,
    CardNotFoundComponent
  ],
  providers: [
    CardListService,
    CardListResolve
  ]
})
export class CardListModule { }
