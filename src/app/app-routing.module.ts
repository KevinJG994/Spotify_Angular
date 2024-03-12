import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './modules/home/pages/home-pages/home-pages.component';
import { sessionGuard } from '@core/guards/session.guard';

export const routes: Routes = [
  {
    path: 'auth', //localhost:4200/auth
    loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  },
  {
  path: '', //localhost:4200/
  component: HomePagesComponent,
  loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule),
  canActivate: [sessionGuard]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
