import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { formValidatorLowerCase } from '../form-validators/form-validators.lowercase';
import { FormCadastroValidatorService } from './form-cadastro-validator.service';
import { User } from '../../../interfaces/user/user';
import { FormCadastroService } from './form-cadastro.service';
import { FormLoginService } from '../form-login/form-login.service';
import { formCadastroUsernameValidator } from './form-cadastro-username-validator';


@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent implements OnInit {

  formCadastro: FormGroup

  constructor(
    private _formBuilder: FormBuilder,
    private _formCadastroValidator: FormCadastroValidatorService,
    private _formCadastroService: FormCadastroService,
    private _formLoginService: FormLoginService,
    private _router: Router
  ) { }

  ngOnInit() {

    this.formCadastro = this._formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(50)
        ]
      ],
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(15),
          formValidatorLowerCase
        ],
        this._formCadastroValidator.validatorShortName()
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10)
        ]
      ]
    },
    {
      validator: formCadastroUsernameValidator
    })
  }

  cadastrar(e: Event) {

    e.preventDefault()

    const newUser = this.formCadastro.getRawValue() as User

    this._formCadastroService
      .register(newUser)
      .subscribe(() => {

        this._formLoginService
          .login(newUser.userName, newUser.password)
          .subscribe( () => {

            this._router.navigate([newUser.userName, 'cards'])
          })
      })
  }

}
