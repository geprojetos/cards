import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [

  {
    path: '',
    loadChildren: './pages/home/home.module#HomeModule'
  },
  {
    path: ':userName/cards',
    loadChildren: './pages/list/list.module#ListModule'
  },
  {
    path: '**',
    redirectTo: 'page-not-found'
  },
  {
    path: 'page-not-found',
    loadChildren: './pages/not-found/not-found.module#NotFoundModule'
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
