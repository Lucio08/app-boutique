import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoutiqueAboutComponent } from './boutique-about/boutique-about.component';
import { BoutiqueClothesComponent } from './boutique-clothes/boutique-clothes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'clothes',
    pathMatch: 'full'
  },
  {
    path:'clothes',
    component: BoutiqueClothesComponent
  },
  {
    path:'about',
    component: BoutiqueAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
