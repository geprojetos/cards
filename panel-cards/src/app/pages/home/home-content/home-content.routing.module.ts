import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeContentComponent } from './home-content.component';
import { FormLoginComponent } from '../../../shared/components/form/form-login/form-login.component';

const homeContentRoutes: Routes = [

    {
        path: '',
        component: HomeContentComponent,
        children: [
            {
                path: '',
                component: FormLoginComponent
            }
        ]
    }
]

@NgModule({
    imports: [ RouterModule.forChild(homeContentRoutes) ],
    exports: [ RouterModule ],
})

export class HomeContentRoutingModule {}