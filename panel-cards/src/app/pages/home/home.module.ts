import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormLoginModule } from '../../shared/components/form/form-login/form-login.module';
import { HomeContentComponent } from './home-content/home-content.component';
import { HomeContentRoutingModule } from './home-content/home-content.routing.module';
import { HomeContentLayoutComponent } from './home-content/home-content-layout/home-content-layout.component';
 
@NgModule({
  imports: [
    CommonModule,
    FormLoginModule,
    HomeContentRoutingModule
  ],
  declarations: [
    HomeContentComponent,
    HomeContentLayoutComponent,
  ]
})
export class HomeModule { }
