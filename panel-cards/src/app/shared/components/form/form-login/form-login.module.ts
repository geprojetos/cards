import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FormLoginComponent } from './form-login.component';
import { FormMessageValidateModule } from '../form-message-validate/form-message-validate.module';
import { FormLoginService } from './form-login.service';
import { HttpClientModule } from '@angular/common/http';
import { ServiceUserService } from '../../../services/service-user/service.user.service';
import { ServiceTokenService } from '../../../services/service-token/service-token.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormMessageValidateModule
  ],
  declarations: [
    FormLoginComponent
  ],
  exports: [
    FormLoginComponent
  ],
  providers: [
    FormLoginService,
    ServiceUserService,
    ServiceTokenService
  ]
})
export class FormLoginModule { }
