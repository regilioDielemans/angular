import { NgModule, Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent } from './hero-detail/hero-detail.component';


const routes: Routes =[
  {path: '', redirectTo: '/dashboard', pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'detail/:id', component: HeroDetailComponent}
]
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})




export class AppRoutingModule { }
