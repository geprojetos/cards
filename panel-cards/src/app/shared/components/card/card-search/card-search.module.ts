import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardSearchComponent } from './card-search.component';
import { CardSearchInputPipe } from './card-search-input.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardSearchComponent,
    CardSearchInputPipe
  ],
  exports: [
    CardSearchComponent
  ]
})
export class CardSearchModule { }
