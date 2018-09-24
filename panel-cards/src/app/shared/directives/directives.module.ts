import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IsLoggedDirective } from './is-logged/is-logged.directive';
import { IsOwnerDirective } from './is-owner/is-owner.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IsLoggedDirective,
    IsOwnerDirective
  ],
  exports: [
    IsLoggedDirective,
    IsOwnerDirective
  ]
})
export class DirectivesModule { }
