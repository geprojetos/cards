import { Pipe, PipeTransform } from '@angular/core';
import { CardBase } from '../card-base/card-base';

@Pipe({
  name: 'cardSearchInput'
})
export class CardSearchInputPipe implements PipeTransform {

  transform(cards: CardBase[] = [], digitado: string): CardBase[] {
    
    if(digitado) {

      digitado = digitado.trim().toLowerCase()

      return cards.filter( card => card.description.toLowerCase().includes(digitado) )
    }
    return null;
  }

}
