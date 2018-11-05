import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HeaderNavComponent } from './header-nav/header-nav.component';
import { ServiceUserService } from '../../services/service-user/service.user.service';
import { ServiceTokenService } from '../../services/service-token/service-token.service';
import { LoadingModule } from '../loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    LoadingModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    HeaderNavComponent
  ],
  exports: [
    HeaderNavComponent
  ],
  providers: [
    ServiceTokenService,
    ServiceUserService
  ]
})
export class HeaderModule { }
