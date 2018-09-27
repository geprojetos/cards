import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CardSearchComponent } from './card-search.component';
import { CardSearchInputPipe } from './card-search-input.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CardSearchComponent,
    CardSearchInputPipe
  ],
  exports: [
    CardSearchComponent,
    CardSearchInputPipe
  ]
})
export class CardSearchModule { }
