import { Directive, OnInit, ElementRef, Renderer } from '@angular/core';

import { ServiceUserService } from '../../services/service-user/service.user.service';

@Directive({
  selector: '[appIsLogged]'
})
export class IsLoggedDirective implements OnInit {

  constructor(
    private _userService: ServiceUserService,
    private _elementRef: ElementRef,
    private _renderer: Renderer
  ) { }

  ngOnInit() {

    if(!this._userService.isLogged()) {

      this._renderer.setElementStyle(
        this._elementRef.nativeElement,
        'display',
        'none'
      )
    }
    
  }
}
