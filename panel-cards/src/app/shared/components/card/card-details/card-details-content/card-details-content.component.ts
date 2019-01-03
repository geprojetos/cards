import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

import { CardListService } from '../../card-list/card-list.service';
import { CardBase } from '../../card-base/card-base';
import { CardComments } from '../../card-comments/card-comments';
import { ServiceUserService } from 'src/app/shared/services/service-user/service.user.service';

@Component({
  selector: 'app-card-details-content',
  templateUrl: './card-details-content.component.html',
  styleUrls: ['./card-details-content.component.css']
})
export class CardDetailsContentComponent implements OnInit {

  cardId: number
  card: CardBase
  userId = new Subject<number>()
  cardObservale: Observable<CardBase>

  formComment: FormGroup
  commentsObservable: Observable<CardComments[]>

  modal: boolean = false;
  titleModal: string = '';
  textModal: string = '';
  confirmButton: boolean = true;
  redirectButton: boolean;
  dangerButton: boolean;
  
  constructor(
    private _activateRouter: ActivatedRoute,
    private _cardListService: CardListService,
    private _localtion: Location,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _userService: ServiceUserService
  ) { }

  ngOnInit() { 
    
   this.cardId = this._activateRouter.snapshot.params.cardId

   this._cardListService
    .findCardById(this.cardId)
    .subscribe( res => {
      this.card = res
      this.userId.next(res.userId)
    })

    this.formComment = this._formBuilder.group({
      comments: [
        '',
        [
          Validators.required,
          Validators.maxLength(200)
        ]
      ]
    })

    this.commentsObservable = this._cardListService.getComments(this.cardId)
  }

  backToPage(e: Event) {

    e.preventDefault()
    this._localtion.back()
  }

  sendComment(e: Event) {

    e.preventDefault()
    
    let comment = this.formComment.get('comments').value as string
    
    this.commentsObservable = this._cardListService
      .addComments(this.cardId, comment)
      .pipe(switchMap( () => this._cardListService.getComments(this.cardId) ))
      .pipe(tap( () => {
        
        this.formComment.reset()
      }))
  }

  like(e: Event, card: CardBase) {

    e.preventDefault()

    this._cardListService
      .like(card.id)
      .subscribe( res => {

        if(res) {
          this.cardObservale = this._cardListService.findCardById(card.id)
          this.cardObservale.subscribe( res => this.card = res, erro => console.log(erro))
        }
      }, erro => console.log(erro))
  }

  delete(e: Event, card: CardBase) {

    e.preventDefault()

    this.modal = !this.modal;
    this.titleModal = "Deseja remover esse card?";
    this.textModal = "Depois de remover o card não poderá ser recuperado, deseja continuar mesmo assim?";
    this.confirmButton = true;
    this.redirectButton = !this.confirmButton;
    this.dangerButton = !this.confirmButton;
    this.ok
    
    return
  }
  
  ok(e) {

    if(e) {
      
      this._cardListService
      .removeCard(this.cardId)
      .subscribe( () => {
        
        this.titleModal = 'Card removido';
        this.textModal = "O card foi removido com sucesso";
        this.confirmButton = !this.confirmButton;
        this.redirectButton = !this.confirmButton;
            
          }, erro => {

            console.log(erro)

            this.confirmButton = !this.confirmButton;
            this.dangerButton = !this.confirmButton;
            this.titleModal = 'Algo não está funcionando';
            this.textModal = "Não foi possível remover o card, tente novamente"
          })
    }
  }

  redir(e) {

    if(e) {
      this._router.navigate([this._userService.getUserName(), 'cards'], { replaceUrl: true })
    }
  }
  

}
