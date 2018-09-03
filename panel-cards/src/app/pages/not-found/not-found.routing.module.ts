import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundContentComponent } from './not-found-content/not-found-content.component';

const notFoundRoutes: Routes = [

    {
        path: '',
        component: NotFoundContentComponent
    }
]

@NgModule({
    imports: [ RouterModule.forChild(notFoundRoutes) ],
    exports: [ RouterModule ]
})

export class NotFoundRoutingModule {}