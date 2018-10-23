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

  modal: boolean = false;
  titleModal: string;
  textModal: string;
  confirmButton: boolean = true;
  redirectButton: boolean;
  dangerButton: boolean;

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

    this.modal = !this.modal;
    this.titleModal = "Deseja cadastrar esse card?";
    this.textModal = "Confirme para cadastrar, deseja continuar?";
    this.confirmButton = true;
    this.redirectButton = false;
    this.dangerButton = false;
    this.ok;

  }

  ok(e) {

    if(e) {
      
      
      const photo = this.file
      const descritpion = this.formAddCard.get('description').value
      const comments = this.formAddCard.get('comments').value

      this._cardListService
        .upload(photo, descritpion, comments)
        .subscribe( () => {

          this.confirmButton = false;
          this.redirectButton = true;
          this.dangerButton = false;
          this.titleModal = "Card cadastrado com sucesso";
          this.textModal = "O card foi cadastro e já está disponível em sua lista de cards";
          
        }, erro => {

          console.log(erro);
          this.confirmButton = false;
          this.redirectButton = false;
          this.dangerButton = true;
          this.titleModal = "Algo não está funcionado!";
          this.textModal = "Não foi possível cadastrar no card, tente novamente!";
        })
    }
  }

  redir(e) {
    
    if(e) {
      this._router.navigate([''])
    }
  }

}
