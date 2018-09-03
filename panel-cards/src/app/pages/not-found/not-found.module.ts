import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundContentComponent } from './not-found-content/not-found-content.component';
import { NotFoundRoutingModule } from './not-found.routing.module';



@NgModule({
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ],
  declarations: [NotFoundContentComponent]
})
export class NotFoundModule { }
