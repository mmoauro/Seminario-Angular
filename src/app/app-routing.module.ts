import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CelularesViewComponent } from './celulares-view/celulares-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'celulares',
    pathMatch: 'full'
  },
  {
    path: 'celulares',
    component: CelularesViewComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
