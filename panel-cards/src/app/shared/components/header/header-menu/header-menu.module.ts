import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderMenuComponent } from './header-menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderMenuComponent,
    MenuListComponent
  ],
  exports: [
    HeaderMenuComponent,
    MenuListComponent
  ]
})
export class HeaderMenuModule { }
