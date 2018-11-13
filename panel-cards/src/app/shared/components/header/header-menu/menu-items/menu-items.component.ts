import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Payload } from 'src/app/shared/interfaces/payload/payload';
import { ServiceUserService } from 'src/app/shared/services/service-user/service.user.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {

  user$: Observable<Payload>;

  constructor(
    private _userService: ServiceUserService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.user$ = this._userService.getUserPayload();
  }

}
