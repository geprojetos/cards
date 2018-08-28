import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ServiceUserService } from '../../../shared/services/service-user/service.user.service';


@Injectable()
export class HomeGuard implements CanActivate {

  constructor(
    private _userService: ServiceUserService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {

    if(this._userService.isLogged()) {

      return false
    }
    return true
  }
}
