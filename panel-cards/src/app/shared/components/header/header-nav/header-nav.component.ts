import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Payload } from '../../../interfaces/payload/payload';
import { ServiceUserService } from '../../../services/service-user/service.user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  userObservable: Observable<Payload>;

  constructor(
    private _userService: ServiceUserService,
    private _router: Router
  ) {

    this.userObservable = this._userService.getUserPayload()
  }

  ngOnInit() {}

  logout(e:Event) {

    e.preventDefault()
    this._userService.logout()
    this._router.navigate([''])
  }
}
