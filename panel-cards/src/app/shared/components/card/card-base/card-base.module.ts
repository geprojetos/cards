import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBaseComponent } from './card-base.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardBaseComponent
  ],
  exports: [
    CardBaseComponent
  ]
})
export class CardBaseModule { }
