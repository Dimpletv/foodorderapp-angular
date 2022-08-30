import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/pages/home/home.component';
import {MenuComponent} from '../app/pages/menu/menu.component';
import {AboutComponent} from '../app/pages/about/about.component';
import {ContactComponent} from '../app/pages/contact/contact.component';


const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'menu',component:MenuComponent},
  { path:'about',component:AboutComponent},
  { path:'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
