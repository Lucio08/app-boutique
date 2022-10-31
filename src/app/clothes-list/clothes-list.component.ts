import { Component, OnInit } from '@angular/core';
import { ClothesCartService } from '../clothes-cart.service';
import { ClothesDataService } from '../clothes-data.service';
import { clothing } from './clothes';


@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.scss']
})
export class ClothesListComponent implements OnInit {


  //tipar objeto
  //clothes -> objeto, clothing -> es la interface que aclara de que tipo es
  clothes: clothing[] = [];
  cartClothes: clothing[] = [];

  constructor(
    private cart: ClothesCartService,
    private clothesDataService: ClothesDataService) {

   }

  ngOnInit(): void {
    //instancio
    this.cartClothes = this.cart.getCart();

    this.clothesDataService.getAllClothes()
    .subscribe(clothes => {
      this.clothes = clothes;

      for (let i = 0; i < this.clothes.length; i++) {
        let quantityCart = this.searchQuantityClothesCart(this.clothes[i]);
        this.clothes[i].stock = this.clothes[i].stock - quantityCart;
      }

      });
  }

  addToCart(outfit: clothing):void{
    if(outfit.stock > 0 && outfit.quantity > 0 && outfit.quantity <= outfit.stock){
     this.cart.addToCart(outfit);
     outfit.stock -= outfit.quantity;
     outfit.quantity = 0;
    }
  }
  maxReached(m: string){
      alert(m);
  }

  searchQuantityClothesCart(outfit: clothing): number{
    for (let i = 0; i < this.cartClothes.length; i++) {
      if(outfit.name == this.cartClothes[i].name){
        return this.cartClothes[i].quantity;
      }
    }
    return 0;
  }
}
