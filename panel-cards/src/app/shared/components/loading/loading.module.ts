import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingContentComponent } from './loading-content/loading-content.component';
import { LoadingService } from './loading-service/loading.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './loading-content/loading-interceptor';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoadingContentComponent],
  exports: [LoadingContentComponent],
  providers: [
    LoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ]
})
export class LoadingModule { }
