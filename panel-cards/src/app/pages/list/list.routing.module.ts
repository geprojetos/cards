import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListCardsComponent } from './list-cards/list-cards.component';
import { CardListResolve } from '../../shared/components/card/card-list/card-list.resolve';

const listRoutes: Routes = [

    {
        path: '',
        component: ListCardsComponent,
        resolve: {
            cards: CardListResolve
        },
        data: {
            title: 'Lista de Cards'
        }
    }
]

@NgModule({
    imports: [ RouterModule.forChild(listRoutes) ],
    exports: [ RouterModule ]
})

export class ListRoutingModule {}