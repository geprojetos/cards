import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IsLoggedDirective } from './is-logged/is-logged.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IsLoggedDirective
  ]
})
export class DirectivesModule { }
