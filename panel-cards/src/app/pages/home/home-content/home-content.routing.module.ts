import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeContentComponent } from './home-content.component';

const homeContentRoutes: Routes = [

    {
        path: '',
        component: HomeContentComponent
    }
]

@NgModule({
    imports: [ RouterModule.forChild(homeContentRoutes) ],
    exports: [ RouterModule ]
})

export class HomeContentRoutingModule {}