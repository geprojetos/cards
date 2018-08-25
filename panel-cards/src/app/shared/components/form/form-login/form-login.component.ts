import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { FormLoginService } from './form-login.service';
import { User } from '../../../interfaces/user/user';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _formLoginService: FormLoginService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.formLogin = this._formBuilder.group({
      shortName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(15)
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10)
        ]
      ]
    })
  }

  login(e: Event) {

    e.preventDefault()

    const user = this.formLogin.getRawValue() as User;

    this._formLoginService
      .login(user.shortName, user.password)
      .subscribe( () => {

        console.log('logado')
      }, erro => console.log(erro))
  }
}
