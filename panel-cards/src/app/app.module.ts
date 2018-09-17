import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderModule } from './shared/components/header/header.module';
import { ServiceIntercepetorService } from './shared/services/service-interceptor/service-intercepetor.service';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceIntercepetorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
