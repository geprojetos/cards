import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Payload } from 'src/app/shared/interfaces/payload/payload';
import { ServiceUserService } from 'src/app/shared/services/service-user/service.user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-info-user',
  templateUrl: './menu-info-user.component.html',
  styleUrls: ['./menu-info-user.component.css']
})
export class MenuInfoUserComponent implements OnInit {

  user$: Observable<Payload>;

  constructor(
    private _userService: ServiceUserService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.user$ = this._userService.getUserPayload()
    console.log(this.user$)
  }

  logout(e:Event) {

    e.preventDefault()

    this._userService.logout();
    this._router.navigate([''])
  }

}
