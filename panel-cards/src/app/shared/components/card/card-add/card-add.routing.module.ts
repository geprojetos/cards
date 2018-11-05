import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardAddContentComponent } from './card-add-content/card-add-content.component';

const cardAddRoutes: Routes = [

    {
        path: '',
        component: CardAddContentComponent,
        data: {
            title: 'Adicionar Card'
        }
    }
]

@NgModule({
    imports: [ RouterModule.forChild(cardAddRoutes) ],
    exports: [ RouterModule ]
})

export class CardAddRoutingModule {}