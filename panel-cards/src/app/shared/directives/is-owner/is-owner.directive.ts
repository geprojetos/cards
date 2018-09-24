import { Directive, OnInit, ElementRef, Renderer, Input } from '@angular/core';

import { ServiceUserService } from '../../services/service-user/service.user.service';
import { Observable } from 'rxjs';

@Directive({
  selector: '[appIsOwner]'
})
export class IsOwnerDirective implements OnInit {

  @Input() userIdObservable: Observable<number>;
  userId: number

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer,
    private _userService: ServiceUserService
  ) { }

  ngOnInit() {

    this.userIdObservable.subscribe( res => {

      this.userId = res

      this._userService
        .getUserPayload()
        .subscribe(res => {

          if(res.id != this.userId) {
            this._renderer.setElementStyle(
              this._elementRef.nativeElement,
              'display',
              'none'
            )
          }
        }) 
    })
  }
}
