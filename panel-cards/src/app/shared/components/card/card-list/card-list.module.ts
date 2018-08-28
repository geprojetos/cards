import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardListComponent } from './card-list.component';
import { CardBaseModule } from '../card-base/card-base.module';
import { CardListService } from './card-list.service';
import { CardListResolve } from './card-list.resolve';
import { CardGridComponent } from './card-grid/card-grid.component';

@NgModule({
  imports: [
    CommonModule,
    CardBaseModule
  ],
  declarations: [
    CardListComponent,
    CardGridComponent
  ],
  exports: [
    CardListComponent,
    CardGridComponent
  ],
  providers: [
    CardListService,
    CardListResolve
  ]
})
export class CardListModule { }
