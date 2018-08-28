import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeContentComponent } from './home-content/home-content.component';
import { FormLoginComponent } from '../../shared/components/form/form-login/form-login.component';
import { FormCadastroComponent } from '../../shared/components/form/form-cadastro/form-cadastro.component';
import { HomeGuard } from './home-guard/home-guard';


const homeContentRoutes: Routes = [

    {
        path: '',
        component: HomeContentComponent,
        canActivate: [ 
            HomeGuard
        ],
        children: [
            {
                path: '',
                component: FormLoginComponent
            },
            {
                path: 'user/new',
                component: FormCadastroComponent
            }
        ]
    }
]

@NgModule({
    imports: [ RouterModule.forChild(homeContentRoutes) ],
    exports: [ RouterModule ],
})

export class HomeContentRoutingModule {}