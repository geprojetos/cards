import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderMenuComponent } from './header-menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuInfoUserComponent } from './menu-info-user/menu-info-user.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    HeaderMenuComponent,
    MenuListComponent,
    MenuInfoUserComponent
  ],
  exports: [
    HeaderMenuComponent,
    MenuListComponent,
    MenuInfoUserComponent
  ]
})
export class HeaderMenuModule { }
