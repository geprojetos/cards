import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderMenuComponent } from './header-menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuInfoUserComponent } from './menu-info-user/menu-info-user.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    HeaderMenuComponent,
    MenuListComponent,
    MenuInfoUserComponent,
    MenuItemsComponent
  ],
  exports: [
    HeaderMenuComponent,
    MenuListComponent,
    MenuInfoUserComponent,
    MenuItemsComponent
  ]
})
export class HeaderMenuModule { }
