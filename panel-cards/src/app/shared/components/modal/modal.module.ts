import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalContentComponent } from './modal-content/modal-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ModalContentComponent ],
  exports: [ ModalContentComponent ]
})
export class ModalModule { }
