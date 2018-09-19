import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ServiceUserService } from '../../../shared/services/service-user/service.user.service';


@Injectable()
export class HomeGuard implements CanActivate {

  constructor(
    private _userService: ServiceUserService,
    private _router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {

    if(this._userService.isLogged()) {

      this._router.navigate([this._userService.getUserName(), 'cards'])
      return false
    }
    return true
  }
}
