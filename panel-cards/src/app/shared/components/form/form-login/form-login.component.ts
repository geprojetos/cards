import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
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

}
