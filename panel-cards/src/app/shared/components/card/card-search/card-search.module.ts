import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardSearchComponent } from './card-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardSearchComponent
  ],
  exports: [
    CardSearchComponent
  ]
})
export class CardSearchModule { }
