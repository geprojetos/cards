import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-add-card',
  templateUrl: './form-add-card.component.html',
  styleUrls: ['./form-add-card.component.css']
})
export class FormAddCardComponent implements OnInit {

  formAddCard: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.formAddCard = this._formBuilder.group({

      photo: [
        '', 
        [
          Validators.required
        ]
      ],

      description: [
        '',
        [
          Validators.required,
          Validators.maxLength(50)
        ]
      ]
    })
  }

}
