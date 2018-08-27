import { Injectable } from '@angular/core';
import { FormCadastroService } from './form-cadastro.service';
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';

@Injectable()
export class FormCadastroValidatorService {

  constructor(
    private _formCadastroService: FormCadastroService
  ) { }

  validatorShortName() {

    return (control: AbstractControl) => {

      return control
              .valueChanges
              .pipe( debounceTime(600) )
              .pipe( switchMap( userName => this._formCadastroService.checkedShortName(userName) ) )
              .pipe( map( user => user ? { validateShortName: true } : null ) )
              .pipe( first() )
    }
  }
}
