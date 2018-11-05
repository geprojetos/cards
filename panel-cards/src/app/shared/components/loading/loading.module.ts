import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingContentComponent } from './loading-content/loading-content.component';
import { LoadingService } from './loading-service/loading.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoadingContentComponent],
  exports: [LoadingContentComponent],
  providers: [LoadingService]
})
export class LoadingModule { }
