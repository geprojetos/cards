import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CardBaseComponent } from './card-base/card-base.component';
import { CardListComponent } from './card-list/card-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    CardBaseComponent,
    CardListComponent
  ]
})
export class CardModule { }
