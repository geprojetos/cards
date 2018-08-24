import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeContentComponent } from './home-content/home-content.component';
import { HomeContentRoutingModule } from './home-content/home-content.routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeContentRoutingModule
  ],
  declarations: [
    HomeContentComponent
  ]
})
export class HomeModule { }
