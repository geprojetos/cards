import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CardListService } from '../../card/card-list/card-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-add-card',
  templateUrl: './form-add-card.component.html',
  styleUrls: ['./form-add-card.component.css']
})
export class FormAddCardComponent implements OnInit {

  formAddCard: FormGroup
  file: File
  preview: string;

  constructor(
    private _cardListService: CardListService,
    private _formBuilder: FormBuilder,
    private _router: Router
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
      ],
      comments: [true]
    })
  }

  fileEvent(file: File) {

    this.file = file;
    const reader = new FileReader()
    reader.onload = (event: any) => this.preview = event.target.result
    reader.readAsDataURL(file)
  }

  upload(e: Event) {

    e.preventDefault();

    const photo = this.file
    const descritpion = this.formAddCard.get('description').value
    const comments = this.formAddCard.get('comments').value

    this._cardListService
      .upload(photo, descritpion, comments)
      .subscribe( () => {

        alert("Card adicionado com sucesso")
        this._router.navigate([''])
      }, erro => console.log(erro))

  }

}
