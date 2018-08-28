import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormLoginModule } from '../../shared/components/form/form-login/form-login.module';
import { HomeContentComponent } from './home-content/home-content.component';
import { HomeContentRoutingModule } from './home-content.routing.module';
import { HomeContentLayoutComponent } from './home-content/home-content-layout/home-content-layout.component';
import { FormCadastroModule } from '../../shared/components/form/form-cadastro/form-cadastro.module';
import { HomeGuard } from './home-guard/home-guard';
 
@NgModule({
  imports: [
    CommonModule,
    FormLoginModule,
    FormCadastroModule,
    HomeContentRoutingModule
  ],
  declarations: [
    HomeContentComponent,
    HomeContentLayoutComponent,
  ],
  providers: [
    HomeGuard
  ]
})
export class HomeModule { }
