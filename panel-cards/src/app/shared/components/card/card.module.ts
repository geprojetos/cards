import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardBaseComponent } from './card-base/card-base.component';
import { CardListComponent } from './card-list/card-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardBaseComponent,
    CardListComponent
  ]
})
export class CardModule { }
