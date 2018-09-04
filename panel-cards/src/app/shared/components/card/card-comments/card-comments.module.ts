import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCommentsComponent } from './card-comments.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardCommentsComponent
  ],
  exports: [
    CardCommentsComponent
  ]
})
export class CardCommentsModule { }
