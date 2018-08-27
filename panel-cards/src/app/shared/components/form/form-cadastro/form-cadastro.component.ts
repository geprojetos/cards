import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { formValidatorLowerCase } from '../form-validators/form-validators.lowercase';
import { FormCadastroValidatorService } from './form-cadastro-validator.service';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent implements OnInit {

  formCadastro: FormGroup

  constructor(
    private _formBuilder: FormBuilder,
    private _formCadastroValidator: FormCadastroValidatorService
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
      shortName: [
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
    })
  }

  cadastrar(e: Event) {

    e.preventDefault()

    console.log('cadastrar')
  }

}
