import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListCardsComponent } from './list-cards/list-cards.component';

const listRoutes: Routes = [

    {
        path: '',
        component: ListCardsComponent
    }
]

@NgModule({
    imports: [ RouterModule.forChild(listRoutes) ],
    exports: [ RouterModule ]
})

export class ListRoutingModule {}