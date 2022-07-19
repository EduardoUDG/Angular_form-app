import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SinginComponent } from './pages/singin/singin.component';
import { SingupComponent } from './pages/singup/singup.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'singin', component: SinginComponent },
      { path: 'singup', component: SingupComponent },
      { path: '**', redirectTo: 'singin' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
