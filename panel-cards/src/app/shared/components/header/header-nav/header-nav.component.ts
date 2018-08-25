import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Payload } from '../../../interfaces/payload/payload';
import { ServiceUserService } from '../../../services/service-user/service.user.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  userObservable: Observable<Payload>;

  constructor(
    private _userService: ServiceUserService
  ) { }

  ngOnInit() {

    this.userObservable = this._userService.getUserPayload()
  }

}
