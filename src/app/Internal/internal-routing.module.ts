import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: './account/public.module#PublicModule'},
  //{ path: 'private', loadChildren: './private/private.module#PrivateModule' },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class InternalRoutingModule { }