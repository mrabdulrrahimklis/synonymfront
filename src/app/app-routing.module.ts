import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './Components/home/home.component';
import {V1Component} from './Components/v1/v1.component';
import {V2Component} from './Components/v2/v2.component';

const routes: Routes = [
  { path: 'v1', component: V1Component },
  { path: 'v2', component: V2Component },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home List' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
