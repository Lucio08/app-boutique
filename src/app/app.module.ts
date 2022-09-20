import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothesListComponent } from './clothes-list/clothes-list.component';
import { FormsModule } from '@angular/forms';
import { BoutiqueAboutComponent } from './boutique-about/boutique-about.component';
import { BoutiqueClothesComponent } from './boutique-clothes/boutique-clothes.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';



@NgModule({
  declarations: [
    AppComponent,
    ClothesListComponent,
    BoutiqueAboutComponent,
    BoutiqueClothesComponent,
    CartComponent,
    InputIntegerComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
